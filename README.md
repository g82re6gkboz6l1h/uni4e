# uni4e

Field notes on intelligent testing, automation craft, and quality leadership.

## Features

- 🗺️ **Dynamic Sitemap** - Auto-generated XML sitemap for all blog posts
- 🤖 **robots.txt** - SEO-optimized crawler directives
- 🎨 **Dynamic Favicon** - Edge-generated favicon and Apple touch icon
- 🧠 **LLMs.txt** - AI-friendly content index following [llmstxt.org](https://llmstxt.org/) spec
- 📱 **Responsive Design** - Built with Next.js 15 and Tailwind CSS
- 📝 **Markdown Blog** - Content-driven blog with reading time estimates

## Setup

1. Install dependencies:

```bash
npm install
```

2. Create `.env.local` file:

```bash
NEXT_PUBLIC_SITE_URL=https://uni4e.com
```

3. Run development server:

```bash
npm run dev
```

## SEO & Metadata

This project includes:

- `/sitemap.xml` - Dynamic sitemap with all blog posts
- `/robots.txt` - Search engine crawling rules
- `/icon.png` - Dynamic 32x32 favicon
- `/apple-icon.png` - Dynamic 180x180 Apple touch icon
- `/llms.txt` - LLM-optimized content index

## Project Structure

```
├── src/
│   ├── app/
│   │   ├── sitemap.ts          # Dynamic sitemap generator
│   │   ├── robots.ts           # robots.txt configuration
│   │   ├── icon.tsx            # Dynamic favicon
│   │   ├── apple-icon.tsx      # Apple touch icon
│   │   └── llms.txt/
│   │       └── route.ts        # LLMs.txt endpoint
│   ├── interfaces/             # TypeScript interfaces
│   └── lib/
│       └── api.ts              # Content API
├── _posts/                     # Markdown blog posts
└── public/                     # Static assets
```

## License

MIT
