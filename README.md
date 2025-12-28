# Happy Birthday Monika! 🎉

A beautiful, animated birthday website with a countdown timer, splash animation, and a journey through memories.

## Features

- ⏰ **Full-screen countdown timer** - Mobile responsive countdown to the special day
- 🎉 **Splash animation** - Animated "Happy Birthday" message with Framer Motion
- 📖 **Journey pages** - 10 pages including:
  - Introduction page
  - 4 Memory pages (with photos and stories)
  - Epilogue page with rotating gallery of photos and videos
- 🎨 **Beautiful animations** - Powered by Framer Motion
- 🎬 **Lottie support** - Ready for Lottie animations
- 📱 **Mobile responsive** - Works perfectly on all devices

## Theme Colors

- **Blue**: `#5A9CB5`
- **Yellow**: `#FACE68`
- **Red**: `#FA6868`
- **Light Black**: `#2a2a2a`
- **Off White**: `#f5f5f5`

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Add your content:
   - Place photos in `/public/assets/photos/`
   - Place videos in `/public/assets/videos/`
   - Place Lottie JSON files in `/public/assets/lottie/`

3. Update the countdown timer date in `/src/app/page.tsx`:
```typescript
const targetDate = new Date();
targetDate.setDate(targetDate.getDate() + 1); // Change this to your target date
```

4. Add your photos and stories:
   - Edit memory pages in `/src/app/journey/memory1/` through `/memory4/`
   - Replace placeholder text with your stories
   - Update image paths to point to your photos

5. Run the development server:
```bash
npm run dev
```

6. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
monika-bday/
├── public/
│   └── assets/
│       ├── photos/      # Add your photos here
│       ├── videos/      # Add your videos here
│       └── lottie/      # Add Lottie JSON files here
├── src/
│   ├── app/
│   │   ├── page.tsx              # Main page with timer and splash
│   │   └── journey/
│   │       ├── page.tsx         # Journey overview
│   │       ├── intro/           # Introduction page
│   │       ├── memory1/         # Memory page 1
│   │       ├── memory2/         # Memory page 2
│   │       ├── memory3/         # Memory page 3
│   │       ├── memory4/         # Memory page 4
│   │       └── epilogue/        # Epilogue with gallery
│   └── components/
│       ├── Timer.tsx            # Countdown timer component
│       ├── SplashAnimation.tsx  # Happy birthday animation
│       ├── JourneyButton.tsx    # Navigation button
│       └── LottieAnimation.tsx  # Lottie animation wrapper
```

## Customization

### Adding Photos to Memory Pages

In each memory page (e.g., `memory1/page.tsx`), uncomment and update the Image component:

```tsx
<Image
  src="/assets/photos/memory1.jpg"
  alt="Memory 1"
  fill
  className="object-cover"
/>
```

### Adding Videos to Epilogue

In `epilogue/page.tsx`, uncomment and update the video element:

```tsx
<video
  src="/assets/videos/video1.mp4"
  className="h-full w-full object-cover"
  controls
/>
```

### Adding Lottie Animations

1. Place your Lottie JSON file in `/public/assets/lottie/`
2. Use the `LottieAnimation` component:

```tsx
import LottieAnimation from '@/components/LottieAnimation';
import animationData from '@/public/assets/lottie/birthday.json';

<LottieAnimation animationData={animationData} />
```

## Build for Production

```bash
npm run build
npm start
```

## Technologies Used

- **Next.js 16** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **Lottie React** - Lottie animations support

## Notes

- All pages are mobile responsive
- The timer automatically transitions to the splash animation when it reaches zero
- The epilogue page features a rotating gallery with randomly positioned photos and videos
- All animations are smooth and performant

Enjoy creating this special birthday surprise! 🎂✨
