# $WWW - What Went Wrong

A degen meme coin website built with Vue 3 and Vite.

## Project Structure

```
src/
├── App.vue                 # Root component
├── main.js                 # Entry point with global effects
├── style.css               # Global styles
└── components/
    ├── ErrorWindows.vue    # Falling error windows
    ├── MainContainer.vue   # Main content wrapper
    ├── GlitchTitle.vue     # Glitchy title component
    ├── CatImages.vue       # Cat meme images grid
    ├── Narrative.vue       # Story text lines
    ├── CTAButtons.vue      # Call-to-action buttons
    ├── Tokenomics.vue      # Token stats display
    ├── WarningBox.vue      # Disclaimer section
    └── InternetExplorer.vue # Random IE error popup
```

## Features

- ✅ Vue 3 Composition API with `<script setup>`
- ✅ Scoped component styles
- ✅ Glitch effects and animations
- ✅ Random error windows
- ✅ DexScreener chart integration
- ✅ Retro Windows 98/XP aesthetic
- ✅ Full responsive design
- ✅ Easter eggs and console messages

## Development

```bash
# Install dependencies
npm install

# Run dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Configuration

Chart URL can be updated in `App.vue`:

```vue
const chartUrl = ref('https://dexscreener.com/solana/YOUR_PAIR_ADDRESS')
```

Cat images should be placed in `public/` folder.

## Deploy

Build the project and deploy the `dist/` folder to any static hosting:
- Vercel
- Netlify
- GitHub Pages
- Cloudflare Pages

## Token Info

- **Ticker:** $WWW
- **Name:** What Went Wrong
- **Chain:** Solana
- **Contract:** 4JMZpg1GUgTLDHmdHopDrUTyurkSR5CWdQAHkjC6m8Zf
