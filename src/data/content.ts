export const siteContent = {
  meta: {
    title: "PixelSqueez StoreFront",
    description: "Welcome to the Pixel Squeez storefront",
  },
  navbar: {
    logo: "PixelSqueez",
    links: [
      { label: "Home", href: "/" },
      { label: "About", href: "/about" },
      { label: "Image Convertion", href: "/convertion" },
      { label: "Thumbnail Generator", href: "/thumbnailgenerator" },
      { label: "Contact", href: "/contact" },
    ],
    cartButton: "Cart (0)",
  },
  footer: {
    brand: "PixelSqueez",
    copyright: "PixelSqueez StoreFront. All rights reserved.",
    built_by: "Designed and Built with ❤️ by Debayan Sen.",
    buildByLink: "https://www.debayansen.com",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Contact", href: "/contact" },
    ],
  },
  home: {
    hero: {
      title: "Compress your images.",
      highlight: "But keep the Quality.",
      descriptionPre:
        "PixelSqueez is a powerful service designed to significantly reduce your image file sizes. Convert and compress your files into optimized formats like",
      formats: ["JPEG", "WEBP", "AVIF", "GIF"],
    },
    features: {
      title: "Why use PixelSqueez?",
      items: [
        {
          icon: "⚡",
          textPre: "Up to",
          highlight: "80% reduction",
          textPost: "in file size.",
        },
        {
          icon: "👁️",
          textPre: "Advanced algorithms ensure",
          highlight: "zero perceived loss",
          textPost: "in visual quality.",
        },
        {
          icon: "🚀",
          textPre: "Boost your website's loading speed, performance, and SEO.",
          highlight: "",
          textPost: "",
        },
        {
          icon: "🖼️",
          textPre: "Automatically generate",
          highlight: "smart thumbnails",
          textPost: "instantly upon upload.",
        },
      ],
    },
    slider: {
      compressed: {
        image:
          "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop",
        label: "Compressed (120KB)",
      },
      original: {
        image:
          "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=100&w=1000&auto=format&fit=crop",
        label: "Original (2.4MB)",
      },
    },
    howItWorks: {
      title: "How it Works",
      description:
        "Optimize your images in three simple steps without losing any noticeable quality.",
      steps: [
        {
          id: 1,
          title: "Upload",
          description:
            "Drag and drop your bulky images or click to select files directly from your device.",
        },
        {
          id: 2,
          title: "Compress",
          description:
            "Our smart algorithms instantly reduce the file size while preserving high visual resolution.",
        },
        {
          id: 3,
          title: "Download",
          description:
            "Get your optimized images individually or packaged together securely in a ZIP file.",
        },
      ],
    },
    cta: {
      title: "Ready to squeez those pixels?",
      description:
        "Join thousands of creators who are already serving lightning-fast images on their websites.",
      buttonText: "Start Compressing Now",
      buttonLink: "/convertion",
    },
  },
  about: {
    hero: {
      title: "About",
      highlight: "PixelSqueez",
      description:
        "We're on a mission to make the web faster — one image at a time. PixelSqueez is a cloud-powered image optimization service built for developers, designers, and content creators who care about performance without sacrificing visual quality.",
    },
    mission: {
      title: "Our Mission",
      description:
        "Images account for nearly 50% of all web page weight. Slow-loading images frustrate users, hurt SEO rankings, and increase bounce rates. PixelSqueez exists to solve this — providing instant, intelligent compression that dramatically reduces file sizes while keeping your visuals pixel-perfect.",
    },
    stats: [
      { value: "80%", label: "Avg. Size Reduction" },
      { value: "50ms", label: "Avg. Processing Time" },
      { value: "10K+", label: "Images Optimized" },
      { value: "99.9%", label: "Uptime Guarantee" },
    ],
    features: [
      {
        icon: "🧠",
        title: "Smart Algorithms",
        description:
          "Our compression engine analyzes each image individually, choosing the optimal strategy for maximum reduction with zero perceived quality loss.",
      },
      {
        icon: "⚡",
        title: "Lightning Fast",
        description:
          "Powered by a high-performance backend deployed on cloud infrastructure, your images are processed and returned in milliseconds.",
      },
      {
        icon: "🔒",
        title: "Privacy First",
        description:
          "Your images are processed in-memory and never stored on our servers. Once compressed, the original is immediately discarded.",
      },
      {
        icon: "🌐",
        title: "Modern Formats",
        description:
          "Convert to next-gen formats like WebP and AVIF that deliver superior compression ratios supported by all modern browsers.",
      },
    ],
    techStack: {
      title: "Built With Modern Tech",
      description:
        "PixelSqueez is powered by a robust, production-grade technology stack designed for speed, reliability, and scalability.",
      items: [
        { name: "Next.js", role: "Frontend Framework" },
        { name: "Node.js", role: "Backend Runtime" },
        { name: "Sharp", role: "Image Processing Engine" },
        { name: "Render", role: "Cloud Deployment" },
      ],
    },
    cta: {
      title: "Ready to optimize your images?",
      description:
        "Try PixelSqueez now — no sign-up required. Just upload, compress, and download.",
      buttonText: "Start Compressing",
      buttonLink: "/convertion",
    },
  },
};
