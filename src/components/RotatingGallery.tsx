'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { getRandomAssets } from '@/config/assets';

interface GalleryItem {
  id: number;
  type: 'photo' | 'video';
  rotation: number;
  hoverRotation: number; // Rotation on hover
  x: number; // Random x position in percentage
  y: number; // Random y position in percentage
  size: number; // Random size multiplier
  zIndex: number; // Random z-index for overlapping
  src?: string; // Path to photo or video
}

// Separate component for each gallery item to manage hover state
function GalleryItemComponent({ 
  item, 
  index, 
  size 
}: { 
  item: GalleryItem; 
  index: number; 
  size: number;
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      key={item.id}
      initial={{ opacity: 0, scale: 0, rotate: item.rotation + 180 }}
      animate={{ 
        opacity: 1, 
        scale: 1,
        rotate: item.rotation,
      }}
      whileHover={{
        scale: 1.3,
        rotate: item.hoverRotation,
        zIndex: 1000,
        transition: {
          type: 'spring',
          stiffness: 300,
          damping: 20,
        }
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      transition={{ 
        delay: index * 0.05,
        type: 'spring',
        stiffness: 50,
        damping: 10,
      }}
      className="absolute cursor-pointer"
      style={{
        left: `${item.x}%`,
        top: `${item.y}%`,
        width: `${size}px`,
        height: `${size}px`,
        transform: `translate(-50%, -50%) rotate(${item.rotation}deg)`,
        zIndex: isHovered ? 1000 : item.zIndex, // Bring to front on hover with high z-index
        pointerEvents: 'auto', // Ensure clickable
      }}
    >
      {item.type === 'photo' ? (
        <motion.div 
          className="h-full w-full overflow-hidden rounded-lg border-2 border-white shadow-2xl pointer-events-auto"
          whileHover={{ boxShadow: '0 20px 40px rgba(0,0,0,0.4)' }}
        >
          {item.src ? (
            // Use regular img tag for better HEIC support with fallback
            <img
              src={item.src}
              alt={`Photo ${item.id + 1}`}
              className="h-full w-full object-cover"
              onError={(e) => {
                // Fallback for unsupported formats like HEIC
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
                const parent = target.parentElement;
                if (parent) {
                  parent.innerHTML = `
                    <div class="flex h-full items-center justify-center bg-gradient-to-br from-[#FACE68] to-[#FA6868] text-white">
                      <span class="text-xs sm:text-sm font-semibold">Photo ${item.id + 1}</span>
                    </div>
                  `;
                }
              }}
            />
          ) : (
            <div className="flex h-full items-center justify-center bg-gradient-to-br from-[#FACE68] to-[#FA6868] text-white">
              <span className="text-xs sm:text-sm font-semibold">Photo {item.id + 1}</span>
            </div>
          )}
        </motion.div>
      ) : (
        <motion.div 
          className="h-full w-full overflow-hidden rounded-lg border-2 border-white shadow-2xl pointer-events-auto"
          whileHover={{ boxShadow: '0 20px 40px rgba(0,0,0,0.4)' }}
        >
          {item.src ? (
            <video
              src={item.src}
              className="h-full w-full object-cover pointer-events-auto"
              controls
              muted
              autoPlay
              loop
              playsInline
              style={{ pointerEvents: 'auto' }}
            />
          ) : (
            <div className="flex h-full items-center justify-center bg-gradient-to-br from-[#5A9CB5] to-[#FACE68] text-white">
              <span className="text-xs sm:text-sm font-semibold">Video {item.id + 1}</span>
            </div>
          )}
        </motion.div>
      )}
    </motion.div>
  );
}

interface RotatingGalleryProps {
  pageName?: string; // Page name to load assets from (intro, memory1, memory2, etc.)
  itemCount?: number;
  radius?: number;
  centerContent?: React.ReactNode;
}

export default function RotatingGallery({ 
  pageName,
  itemCount = 12, 
  radius = 400,
  centerContent 
}: RotatingGalleryProps) {
  const [items, setItems] = useState<GalleryItem[]>([]);
  const [dimensions, setDimensions] = useState({ width: 1920, height: 1080 });

  useEffect(() => {
    // Get viewport dimensions
    const updateDimensions = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  useEffect(() => {
    // Get assets from config - use pageName if provided, otherwise get from all pages
    const assetSources = getRandomAssets(pageName, itemCount);

    // Generate random items with random positions scattered across the screen
    const generatedItems: GalleryItem[] = Array.from({ length: itemCount }, (_, i) => {
      // Random position - can extend beyond screen (negative and >100%)
      // Center area (30-70% x, 30-70% y) is reserved for content
      let x, y;
      const attempts = 10;
      let validPosition = false;
      
      for (let attempt = 0; attempt < attempts; attempt++) {
        x = (Math.random() - 0.2) * 140; // -20% to 120% (extends beyond screen)
        y = (Math.random() - 0.2) * 140; // -20% to 120%
        
        // Avoid center area where content will be (but allow some overlap)
        const centerX = 50;
        const centerY = 50;
        const centerRadius = 25; // 25% radius around center
        
        const distanceFromCenter = Math.sqrt(
          Math.pow(x - centerX, 2) + Math.pow(y - centerY, 2)
        );
        
        // Allow some items in center area but prefer outside
        if (distanceFromCenter > centerRadius || Math.random() > 0.7) {
          validPosition = true;
          break;
        }
      }
      
      if (!validPosition) {
        // Fallback: place at edges
        x = Math.random() < 0.5 ? Math.random() * 20 : 80 + Math.random() * 20;
        y = Math.random() < 0.5 ? Math.random() * 20 : 80 + Math.random() * 20;
      }
      
      // Ensure x and y are defined
      if (x === undefined) x = Math.random() * 100;
      if (y === undefined) y = Math.random() * 100;

      const baseRotation = (Math.random() - 0.5) * 40; // Random rotation between -20 and 20 degrees
      const hoverRotationOffset = (Math.random() > 0.5 ? 10 : -10); // Random hover rotation offset

      // Use asset from config if available, otherwise use placeholder
      const asset = assetSources[i] || {
        type: (Math.random() > 0.5 ? 'photo' : 'video') as 'photo' | 'video',
        src: undefined,
      };

      return {
        id: i,
        type: asset.type,
        rotation: baseRotation,
        hoverRotation: baseRotation + hoverRotationOffset, // Rotation on hover
        x: x,
        y: y,
        size: 1.0 + Math.random() * 0.8, // Random size between 100% and 180%
        zIndex: Math.floor(Math.random() * 10), // Random z-index for overlapping
        src: asset.src, // Use actual asset path from config
      };
    });
    setItems(generatedItems);
  }, [itemCount, dimensions, pageName]);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Rotating Gallery Items - scattered randomly across screen */}
      <div className="absolute inset-0 overflow-hidden">
        {items.map((item, index) => {
          // Base size that scales with screen size
          const baseSize = Math.min(dimensions.width, dimensions.height) * 0.25;
          const size = baseSize * item.size;

          return (
            <GalleryItemComponent
              key={item.id}
              item={item}
              index={index}
              size={size}
            />
          );
        })}
      </div>

      {/* Center Content */}
      {centerContent && (
        <div className="relative z-[999] flex h-screen items-center justify-center pointer-events-none">
          <div className="pointer-events-auto">
            {centerContent}
          </div>
        </div>
      )}
    </div>
  );
}

