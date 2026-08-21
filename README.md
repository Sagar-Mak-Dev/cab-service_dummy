# Driveway – Cab & Taxi Service Landing Page 🚖

A modern, responsive landing page for a cab/taxi service, built for outstation trips, airport transfers, and tour packages across destinations like Manali, Shimla, Amritsar, and Jaipur.

## ✨ Features

- **Hero Section** with call-to-action and quick contact
- **About** section highlighting the driver/service
- **Services** overview (airport transfer, outstation, local rides, corporate travel)
- **Booking Form** for quick cab reservations
- **Tour Packages** showcase with images (Manali, Shimla, Amritsar, Jaipur)
- **Customer Reviews** section
- **Fully responsive** design with mobile navigation
- Built with reusable **shadcn/ui** components

## 🛠️ Tech Stack

- [React 19](https://react.dev/)
- [TanStack Start](https://tanstack.com/start) + [TanStack Router](https://tanstack.com/router)
- [Tailwind CSS 4](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/) (Radix UI primitives)
- [Vite](https://vitejs.dev/)
- TypeScript
- Deployed on **Cloudflare** (via `@cloudflare/vite-plugin` + Wrangler)

---
## 📁 Project Structure

```
src/
├── assets/          # Images (hero, tour packages, driver photo)
├── components/ui/   # shadcn/ui components
├── hooks/           # Custom React hooks
├── lib/             # Utility functions
├── routes/          # TanStack Router route files
├── router.tsx        # Router configuration
├── server.ts         # Server entry
└── styles.css         # Global styles
```

## 🚀 Deployment

This project is configured for deployment on **Cloudflare** using Wrangler. Update `wrangler.jsonc` with your project details before deploying.

```bash
npx wrangler deploy
```

## 📄 License

This project is private and intended for personal/business use.
