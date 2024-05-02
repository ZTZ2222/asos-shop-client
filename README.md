# ASOS Shop Client

![nextjs-framer-shadcn-tailwind](/static/logos.jpg)

<a name="readme-top"></a>

<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
        <li><a href="#features">Features</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
  </ol>
</details>

## About The Project

This is the frontend application for ASOS Shop, a web platform designed to provide users with a seamless experience for browsing discounted products from ASOS.com. ASOS Shop aims to offer a curated selection of discounted items from various categories, including fashion, accessories, footwear, and more.
ASOS Shop Client is the frontend component of ASOS Shop ([asos-shop-server](https://github.com/ZTZ2222/asos-shop-server)).

### Built With

[![Nextjs][nextjs.org]][nextjs-url]
[![Tailwind][tailwindcss.com]][tailwind-url]
[![Shadcn/ui][ui.shadcn.com]][shadcn-url]
[![FramerMotion][framer.com]][framer-url]
[![docker][hub.docker.com]][docker-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Features

- Displays discounted products from ASOS.com
- Interactive user interface
- Responsive design
- Smooth animations
- Customizable Styles
- Efficient Development Workflow

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Getting Started

### Installation

1. Clone the repository:

```bash
git clone https://github.com/ZTZ2222/asos-shop-client.git
```

2. Navigate into the project directory:

```bash
cd asos-shop-client
```

3. Create a .env file in the project root directory and add the necessary environment variables. Here's an example:

```plaintext
NEXT_PUBLIC_API_URL=https://example.com/api/
```

4. Build and run the project with Docker Compose:

```bash
docker compose up --build -d
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[nextjs.org]: https://img.shields.io/badge/next-14.0.4-009485?style=for-the-badge&logo=nextdotjs&logoColor=white
[nextjs-url]: https://nextjs.org/docs
[tailwindcss.com]: https://img.shields.io/badge/tailwindcss-3.3.0-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white
[tailwind-url]: https://tailwindcss.com/docs
[ui.shadcn.com]: https://img.shields.io/badge/shadcn/ui-0.8.0-ff1b1c?style=for-the-badge&logo=shadcnui&logoColor=white
[shadcn-url]: https://ui.shadcn.com/docs
[framer.com]: https://img.shields.io/badge/framer-11.0.17-f4998d?style=for-the-badge&logo=framer&logoColor=white
[framer-url]: https://www.framer.com/motion/
[hub.docker.com]: https://img.shields.io/badge/docker-26.1.1-2094f3?style=for-the-badge&logo=docker&logoColor=white
[docker-url]: https://docs.docker.com/
