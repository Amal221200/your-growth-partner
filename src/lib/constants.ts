import { FaFacebook, FaFolderOpen, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { GoHomeFill } from "react-icons/go";
import { MdDesignServices, MdReviews } from "react-icons/md";
import { RiContactsBook3Fill } from "react-icons/ri";

export const navLinks = [
    {
        href: "#home",
        label: "Home",
        icon: GoHomeFill
    },
    {
        href: "#services",
        label: "Services",
        icon: MdDesignServices
    },
    {
        href: "#portfolio",
        label: "Portfolio",
        icon: FaFolderOpen
    },
    {
        href: "#testimonials",
        label: "Testimonials",
        icon: MdReviews
    },
    {
        href: "#contact-us",
        label: "Contact Us",
        icon: RiContactsBook3Fill
    }
]

export const socialLinks = [
    {
        href: "https://www.facebook.com/ygpartner?mibextid=LQQJ4d",
        icon: FaFacebook,
    },
    {
        href: "https://www.instagram.com/ygpmarketing?igsh=OTN6dGZ6d2Z6OTFt",
        icon: FaInstagram,
    },
    {
        href: "https://www.linkedin.com/company/ygplinkedin",
        icon: FaLinkedinIn,
    },
    {
        href: "https://x.com/ygpamaanshaikh?s=20",
        icon: FaXTwitter,
    },
]

export const services = [
    {
        title: "Website Optimization",
        description: "Ensure the client's website is SEO-friendly, has fast loading times, is mobile-responsive, and has clear call-to-action elements.",
        img: "/services/web-development.png",
    },
    {
        title: "Search Engine Optimization",
        description: "Enhance on-page elements, meta tags, and site structure while conducting keyword research, and bolster off-page SEO through backlink building and content marketing.",
        img: "/services/seo.png",
    },
    {
        title: "Social Media Management",
        description: "Establish and maintain social media presence across major platforms, curate engaging content, engage with audience feedback, and expand client's following.",
        img: "/services/social-media-management.png",
    },
    {
        title: "Content Creation",
        description: "Develop high-quality blog posts, articles, infographics, and other content relevant to the client's industry and audience. Ensure content is optimized for SEO and promotes engagement.",
        img: "/services/content-creation.png",
    },
    {
        title: "Advanced Social Media Marketing",
        description: "Develop and execute comprehensive social media advertising campaigns across multiple platforms. Create custom audiences, retargeting strategies, and optimize ad spend for maximum ROI.",
        img: "/services/advanced-social-media-marketing.png",
    },
    {
        title: "Content Marketing Strategy",
        description: "Craft a comprehensive content marketing plan aligned withclient goals. Create a calendar, generate premium content, and distribute across channels for optimal reach and engagement.",
        img: "/services/content-marketing.png",
    }
]

export const pricingTableData = {
    heading: ['Services', 'Basic - 20k/month', 'Standard - 50k/month', 'Premium - 100k/month'],
    columnData: [
        {
            service: "Website Optimization",
            basicPackage: true,
            standardPackage: true,
            premiumPackage: true
        },
        {
            service: "Search Engine Optimization (SEO)",
            basicPackage: true,
            standardPackage: true,
            premiumPackage: true
        },
        {
            service: "Social Media Management",
            basicPackage: true,
            standardPackage: true,
            premiumPackage: true
        },
        {
            service: "Content Creation",
            basicPackage: true,
            standardPackage: true,
            premiumPackage: true
        },
        {
            service: "Basic Analytics",
            basicPackage: true,
            standardPackage: true,
            premiumPackage: true
        },
        {
            service: "Advanced SEO",
            basicPackage: false,
            standardPackage: true,
            premiumPackage: true
        },
        {
            service: "Pay-per-click (PPC) Advertising",
            basicPackage: false,
            standardPackage: true,
            premiumPackage: true
        },
        {
            service: "Email Marketing",
            basicPackage: false,
            standardPackage: true,
            premiumPackage: true
        },
        {
            service: "Conversion Rate Optimization (CRO)",
            basicPackage: false,
            standardPackage: true,
            premiumPackage: true
        },
        {
            service: "Advanced Analytics",
            basicPackage: false,
            standardPackage: true,
            premiumPackage: true
        },
        {
            service: "Content Marketing Strategy",
            basicPackage: false,
            standardPackage: false,
            premiumPackage: true
        },
        {
            service: "Influencer Marketing",
            basicPackage: false,
            standardPackage: false,
            premiumPackage: true
        },
        {
            service: "Marketing Automation",
            basicPackage: false,
            standardPackage: false,
            premiumPackage: true
        },
        {
            service: "Dedicated Account Management",
            basicPackage: false,
            standardPackage: false,
            premiumPackage: true
        },
    ]
}

export const testimonials = [
    {
        img: "/testimonials/testimonial-1.png",
        review: "What truly distinguishes Amaan is their proven track record with a diverse clientele. Time and again, they've delivered concrete results, enabling businesses to achieve their marketing objectives effectively.",
        name: "UJJWAL RANA",
        subtitle: "Prestigious Client"
    },
    {
        img: "/testimonials/testimonial-2.png",
        review: "If you're seeking someone who truly understands your unique objectives and can deliver the results you need, Amaan is the go-to professional. Their ability to connect you with quality leads make your brand unforgettable.",
        name: "YASH GOEL",
        subtitle: "Fitness & Nutrition Expert"
    },
    {
        img: "/testimonials/testimonial-3.png",
        review: "Amaan's approach is all about understanding unique goals and delivering results a quality that sets your service apart. Your ability to tailor solutions to exceed expectations, regardless of a business's size or industry, is impressive.",
        name: "SAKSHAM SINGLA",
        subtitle: "Prestigious Client"
    },
]

export const portfolioData = [
    {
        img: "/portfolio/portfolio-1.jpeg",
        title: "FORD ENDEAVOUR EDIT",
        subtitle: "VIDEO EDIT",
        description: "This shoot impresses with flawless visuals and expert editing, creating a captivating cinematic experience.",
        link: "https://www.instagram.com/auto.thrust?igsh=YTA5czAyNXVoMGk3",
    },
    {
        img: "/portfolio/portfolio-2.jpeg",
        title: "MERCEDES C200 SHOOT",
        subtitle: "VIDEO EDIT",
        description: "This seamlessly blends dynamic shots, highlighting allure, showcasing exceptional video editing expertise impressively.",
        link: "https://www.instagram.com/auto.thrust?igsh=YTA5czAyNXVoMGk3",
    },
    {
        img: "/portfolio/portfolio-3.jpeg",
        title: "LUXURY SHOWROOM EDIT",
        subtitle: "VIDEO EDIT",
        description: "Melds cinematic finesse with automotive allure, showcasing luxury through masterful video editing.",
        link: "https://www.instagram.com/berlin_motors.pune?igsh=ZGRoM3lyNGZ2Nmll",
    },
    {
        img: "/portfolio/portfolio-4.jpeg",
        title: "CUSTOMERS REVIEW",
        subtitle: "VIDEO EDIT",
        description: "Expertly capturing, editing, &marketing customer food reviews showcase our firm's top-tier skills in visual storytelling and culinary promotion.",
        link: "https://www.instagram.com/icekraft_tsk_pune_fcroad?igsh=eW04cGF4aDVtdml4",
    },
    {
        img: "/portfolio/portfolio-5.jpeg",
        title: "FOOD EDIT",
        subtitle: "VIDEO EDIT",
        description: "Our high-quality shots pictured every essence of the food & highlighted the visually appealing details, composing your appetite!",
        link: "https://www.instagram.com/icekraft_tsk_pune_fcroad?igsh=eW04cGF4aDVtdml4",
    },
    {
        img: "/portfolio/portfolio-6.jpeg",
        title: "AMBIENCE SHOOT",
        subtitle: "VIDEO EDIT",
        description: "Our shoot composed of the vivdly detailed and charismatic shots, inviting the viewer to dine with the picture-perfect shots!",
        link: "https://www.instagram.com/_magic.castle_?igsh=MXJvODBlNHJ6dXh0Zw==",
    },
    {
        img: "/portfolio/portfolio-7.jpeg",
        title: "INNOVA HYCROSS MGLOSTER",
        subtitle: "VIDEO EDIT",
        description: "Mastery in car review production, blending precision in shooting, editing, and presenting excellence.",
        link: "https://www.instagram.com/auto.thrust?igsh=YTA5czAyNXVoMGk3",
    },
    {
        img: "/portfolio/portfolio-8.jpeg",
        title: "2023 MG GLOSTER REEL",
        subtitle: "VIDEO EDIT",
        description: "Exceptional skills unite in our review, capturing the 2023 MG Gloster brilliantly.",
        link: "https://www.instagram.com/auto.thrust?igsh=YTA5czAyNXVoMGk3",
    },
    {
        img: "/portfolio/portfolio-9.jpeg",
        title: "TOYOTA CAMRY EDIT",
        subtitle: "VIDEO EDIT",
        description: "Precision and creativity intertwine in our team's expert editing of the Camry review.",
        link: "https://www.instagram.com/auto.thrust?igsh=YTA5czAyNXVoMGk3",
    },
    {
        img: "/portfolio/portfolio-10.jpeg",
        title: "MUSTANG GT GRAPHIC",
        subtitle: "GRAPHIC DESIGNS",
        description: "Mustang GT Fastback post dazzles with dynamic design, blending power and elegance effortlessly.",
        link: "https://www.instagram.com/auto.thrust?igsh=YTA5czAyNXVoMGk3",
    },
    {
        img: "/portfolio/portfolio-11.jpeg",
        title: "FESTIVE DESIGN",
        subtitle: "GRAPHIC DESIGNS",
        description: "Our exceptional design and marketing turn every occasion into a memorable brand experience.",
        link: "https://www.instagram.com/_magic.castle_?igsh=MXJvODBlNHJ6dXh0Zw==",
    },
    {
        img: "/portfolio/portfolio-12.jpeg",
        title: "FOOD GRAPHIC",
        subtitle: "GRAPHIC DESIGNS",
        description: "Elevating culinary experiences with unmatched shooting and marketing finesse, creating visual delights.",
        link: "https://www.instagram.com/jijisghee?igsh=dmJnbjk0NGk4cWt4&utm_source=qr",
    },
]