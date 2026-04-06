export const projectsData = [
    {
        id: "diagnostic",
        title: "Diagnostic",
        description: "A comprehensive diagnostic center platform that simplifies healthcare management for patients and staff.",
        longDescription: "This advanced diagnostic center website provides a seamless experience for users to explore healthcare services, book appointments, and view test categories. It features a robust validation system using Zod and a clean interface built with Shadcn UI. The platform was designed to be both efficient for medical staff and intuitive for patients who need quick access to medical information and booking services.",
        image: "/diagnostic.png",
        link: "https://opti-diagnostic.vercel.app/",
        githubClient: "https://github.com/shakhawat-coder",
        techStack: ["React", "Tailwind CSS", "Shadcn UI", "Zod", "Framer Motion", "React Hook Form"],
        challenges: "Implementing a dynamic appointment scheduling system with real-time validation was the primary hurdle. Ensuring the UI remained responsive across all mobile devices while handling complex forms required careful state management and rigorous testing of the validation logic.",
        futurePlans: "Integrated online payment gateway for instant booking and a patient portal to view digital test reports directly on the platform. We also plan to integrate a localized language support feature to serve a wider demographic."
    },
    {
        id: "edu-consultancy",
        title: "Education Consultancy",
        description: "A professional gateway for students to explore international educational opportunities.",
        longDescription: "Designed for education consultants, this platform handles course listings and student inquiries with a focused, minimal aesthetic. It helps bridge the gap between students and global universities by organizing complex application requirements into a series of user-friendly steps.",
        image: "/edu-consultancy.png",
        link: "https://opti-edu-consultancy.vercel.app/",
        githubClient: "https://github.com/shakhawat-coder",
        techStack: ["React", "Tailwind CSS", "Node.js", "Formik", "Yup"],
        challenges: "Optimizing the large amount of informational content for SEO while maintaining a high-speed user experience was a major focus during development. Balancing detailed course data with a clean interface was also a key design challenge.",
        futurePlans: "Adding a real-time chat consultation feature and an automated document tracking system for student applications to provide even better transparency for the consulting process."
    },
    {
        id: "ecommerce",
        title: "E-commerce",
        description: "A fast, scalable e-commerce storefront for a modern shopping experience.",
        longDescription: "A feature-rich e-commerce platform that includes product filtering, cart management, and user dashboards. Built with a focus on speed and conversion-optimized UI/UX, this platform provides everything a modern retailer needs to thrive in the digital marketplace.",
        image: "/ecommerce.png",
        link: "https://optilius-ecom.vercel.app/",
        githubClient: "https://github.com/shakhawat-coder",
        techStack: ["Bootstrap", "JavaScript", "HTML5", "CSS3", "FontAwesome"],
        challenges: "Managing complex product states and ensuring smooth carousel/product-preview transitions on low-end mobile devices while utilizing Bootstrap's grid system effectively.",
        futurePlans: "Developing a robust PWA (Progressive Web App) version and integrating AI-driven product recommendations based on user browsing history."
    },
    {
        id: "newspaper",
        title: "News Portal",
        description: "Real-time news aggregator and publisher with a clean, grid-based layout.",
        longDescription: "A responsive news aggregator designed to handle high volumes of text and imagery. Features include category filtering and trending news alerts, ensuring that readers stay well-informed with minimal effort.",
        image: "/newspaper.png",
        link: "https://newspaper-sable.vercel.app/",
        githubClient: "https://github.com/shakhawat-coder",
        techStack: ["React", "Bootstrap", "News API", "Axios"],
        challenges: "Efficiently rendering large lists of news cards without sacrificing scroll performance was the key technical challenge, especially when pulling live data from multiple external sources.",
        futurePlans: "Implementing dark mode persistence and a customizable user feed based on interest categories to increase long-term user engagement."
    },
    {
        id: "real-estate",
        title: "Real Estate Platform",
        description: "A property listing and exploration tool for homebuyers and realtors.",
        longDescription: "This platform allows users to browse premium property listings with high-quality imagery. It's built to be visually heavy yet remarkably fast, providing an immersive experience for those looking for their next home.",
        image: "/real-estate.png",
        link: "https://real-estate-drab-xi.vercel.app/",
        githubClient: "https://github.com/shakhawat-coder",
        techStack: ["Bootstrap", "jQuery", "Animate.css", "AOS"],
        challenges: "Ensuring that high-resolution property images didn't bloat the initial page load time required aggressive image optimization and lazy-loading strategies.",
        futurePlans: "Integrating Google Maps for location-based searching and virtual tour capabilities (360-degree photography) for high-end property listings."
    },
    {
        id: "multi-service",
        title: "Multi-Service",
        description: "A versatile platform offering diverse service bookings in one unified interface.",
        longDescription: "A multi-service platform where users can book everything from repairs to consultations. Features a deep categorization system and service reviews, making it a one-stop-shop for all local home and professional needs.",
        image: "/multi-service.png",
        link: "https://multi-service-livid.vercel.app/",
        githubClient: "https://github.com/shakhawat-coder",
        techStack: ["React", "Bootstrap", "Context API", "React Router"],
        challenges: "Building a flexible database schema (on front-end) to handle different types of service metadata and ensuring that booking workflows remained consistent across varied service types.",
        futurePlans: "Implementing a multi-vendor dashboard for service providers to manage their own listings and a robust notification system for real-time booking updates."
    }
];
