// Common assets configuration file
// All images and videos organized by page/folder

export interface AssetConfig {
  photos: string[];
  videos: string[];
}

export const assets: Record<string, AssetConfig> = {
  intro: {
    photos: [
      '/assets/photos/intro/IMG_0094.jpg',
      '/assets/photos/intro/IMG_0124.jpg',
      '/assets/photos/intro/IMG_0174.jpg',
      '/assets/photos/intro/IMG_0212.jpg',
      '/assets/photos/intro/IMG_0289.jpg',
      '/assets/photos/intro/IMG_0318.jpg',
      '/assets/photos/intro/IMG_0649.jpg',
      '/assets/photos/intro/IMG_6484.JPG',
    ],
    videos: [
      '/assets/videos/intro/93416913-1f5b-4c94-88cf-affad6ca921c.MP4',
      '/assets/videos/intro/D39F47FD-5B02-4169-A7AD-3C4AB18E8D94.MP4',
      '/assets/videos/intro/FD6420FB-E227-40B2-850A-CA3FEE151BBC.MP4',
    ],
  },
  memory1: {
    photos: [
      '/assets/photos/memory1/IMG_3730.jpg',
      '/assets/photos/memory1/IMG_5283.JPG',
      '/assets/photos/memory1/IMG_5325.jpg',
      '/assets/photos/memory4/IMG_5778.jpg',
      '/assets/photos/memory2/IMG_9629.jpg',
      '/assets/photos/memory3/IMG_5362.jpg',



    ],
    videos: [
      '/assets/videos/memory1/16B5ECC0-B111-4086-875D-333EB879F63D.MP4',
      '/assets/videos/memory1/430DDC52-D1F4-467C-8D81-92CD9C47EDC6.MP4',
      '/assets/videos/memory1/430DDC52-D1F4-467C-8D81-92CD9C47EDC6 2.MP4',
    ],
  },
  memory2: {
    photos: [
      '/assets/photos/memory2/IMG_6493.jpg',
      '/assets/photos/memory2/IMG_6494.jpg',
      '/assets/photos/memory2/IMG_9414.JPG',
      '/assets/photos/memory2/IMG_9629.JPG',
      '/assets/photos/memory4/IMG_5778.jpg',

    ],
    videos: [
      '/assets/videos/memory2/9E9D23DC-F761-457B-AB18-9981BF8D307D.MP4',
    ],
  },
  memory3: {
    photos: [
      '/assets/photos/memory3/IMG_1207.jpg',
      '/assets/photos/memory3/IMG_3099.jpg',
      '/assets/photos/memory3/IMG_3115.jpg',
      '/assets/photos/memory3/IMG_5362.jpg',
      '/assets/photos/memory3/IMG_3099.jpg',
      '/assets/photos/memory3/IMG_3115.jpg',
      '/assets/photos/memory3/IMG_5362.jpg',
    ],
    videos: [],
  },
  memory4: {
    photos: [
      '/assets/photos/memory4/IMG_1542.jpg',
      '/assets/photos/memory4/IMG_2005.jpg',
      '/assets/photos/memory4/IMG_2328.PNG',
      '/assets/photos/memory4/IMG_5778.jpg',
      '/assets/photos/memory4/IMG_5810.jpg',
      '/assets/photos/memory4/IMG_5919.jpg',
    ],
    videos: [],
  },
  epilogue: {
    photos: [
      '/assets/photos/epilogue/IMG_3790.jpg',
      '/assets/photos/memory4/IMG_2328.PNG',
      '/assets/photos/memory4/IMG_5778.jpg',
      '/assets/photos/memory4/IMG_5810.jpg',
      '/assets/photos/memory4/IMG_5919.jpg',
      '/assets/photos/epilogue/IMG_5788.jpg',
    ],
    videos: [
      '/assets/videos/epilogue/WhatsApp Video 2024-10-19 at 23.08.21.mp4',
    ],
  },
};

// Helper function to get all assets (photos + videos) for a page
export function getAllAssets(pageName: string): Array<{ type: 'photo' | 'video'; src: string }> {
  const pageAssets = assets[pageName];
  if (!pageAssets) return [];

  const allAssets: Array<{ type: 'photo' | 'video'; src: string }> = [];

  pageAssets.photos.forEach((src) => {
    allAssets.push({ type: 'photo', src });
  });

  pageAssets.videos.forEach((src) => {
    allAssets.push({ type: 'video', src });
  });

  return allAssets;
}

// Helper function to get all assets from all pages (for filling gallery)
export function getAllAssetsFromAllPages(): Array<{ type: 'photo' | 'video'; src: string }> {
  const allAssets: Array<{ type: 'photo' | 'video'; src: string }> = [];
  
  Object.keys(assets).forEach((pageName) => {
    const pageAssets = getAllAssets(pageName);
    allAssets.push(...pageAssets);
  });
  
  return allAssets;
}

// Helper function to get random assets for gallery
// If pageName is provided, uses that page's assets, otherwise uses all assets from all pages
export function getRandomAssets(
  pageName: string | undefined,
  count: number
): Array<{ type: 'photo' | 'video'; src: string }> {
  let allAssets: Array<{ type: 'photo' | 'video'; src: string }> = [];
  
  if (pageName) {
    allAssets = getAllAssets(pageName);
  } else {
    // If no pageName, get from all pages
    allAssets = getAllAssetsFromAllPages();
  }
  
  if (allAssets.length === 0) return [];

  // Shuffle and take count items (with repetition if needed)
  const shuffled = [...allAssets].sort(() => Math.random() - 0.5);
  const result: Array<{ type: 'photo' | 'video'; src: string }> = [];
  
  for (let i = 0; i < count; i++) {
    result.push(shuffled[i % shuffled.length]);
  }
  
  return result;
}

// Helper function to get all photos for a page
export function getPhotos(pageName: string): string[] {
  return assets[pageName]?.photos || [];
}

// Helper function to get all videos for a page
export function getVideos(pageName: string): string[] {
  return assets[pageName]?.videos || [];
}

