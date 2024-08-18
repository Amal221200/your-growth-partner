import { FaFacebook, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export const navLinks = [
    {
        href: "/",
        label: "Home",
    },
    {
        href: "/services",
        label: "Services",
    },
    {
        href: "/portfolio",
        label: "Portfolio",
    },
    {
        href: "/testimonials",
        label: "Testimonials",
    }
]

export const socialLinks = [
    {
        href: "#",
        icon: FaFacebook,
    },
    {
        href: "#",
        icon: FaInstagram,
    },
    {
        href: "#",
        icon: FaLinkedinIn,
    },
    {
        href: "#",
        icon: FaXTwitter,
    },
]

export const services = [
    {
        title: "Website Optimization",
        description:"Ensure the client's website is SEO-friendly, has fast loading times, is mobile-responsive, and has clear call-to-action elements.",
        img: "/web-development.png",
    },
    {
        title: "Search Engine Optimization",
        description: "Enhance on-page elements, meta tags, and site structure while conducting keyword research, and bolster off-page SEO through backlink building and content marketing.",
        img: "/seo.png",
    },
    {
        title: "Social Media Management",
        description:"Establish and maintain social media presence across major platforms, curate engaging content, engage with audience feedback, and expand client's following.",
        img: "/social-media-management.png",
    },
    {
        title: "Content Creation",
        description:"Develop high-quality blog posts, articles, infographics, and other content relevant to the client's industry and audience. Ensure content is optimized for SEO and promotes engagement.",
        img: "/content-creation.png",
    },
    {
        title: "Advanced Social Media Marketing",
        description:"Develop and execute comprehensive social media advertising campaigns across multiple platforms. Create custom audiences, retargeting strategies, and optimize ad spend for maximum ROI.",
        img: "/advanced-social-media-marketing.png",
    },
    {
        title: "Content Marketing Strategy",
        description:"Craft a comprehensive content marketing plan aligned withclient goals. Create a calendar, generate premium content, and distribute across channels for optimal reach and engagement.",
        img: "/content-marketing.png",
    }
]

export const pricingTableData = {
    heading: ['Services', 'Basic - 20k/month', 'Standard - 50k/month', 'Premium - 100k/month'],
    columnData: [
        {
            service:"Website Optimization",
            basicPackage: true,
            standardPackage: true,
            premiumPackage:true
        },
        {
            service:"Search Engine Optimization (SEO)",
            basicPackage: true,
            standardPackage: true,
            premiumPackage:true
        },
        {
            service:"Social Media Management",
            basicPackage: true,
            standardPackage: true,
            premiumPackage:true
        },
        {
            service:"Content Creation",
            basicPackage: true,
            standardPackage: true,
            premiumPackage:true
        },
        {
            service:"Basic Analytics",
            basicPackage: true,
            standardPackage: true,
            premiumPackage:true
        },
        {
            service:"Advanced SEO",
            basicPackage: false,
            standardPackage: true,
            premiumPackage:true
        },
        {
            service:"Pay-per-click (PPC) Advertising",
            basicPackage: false,
            standardPackage: true,
            premiumPackage:true
        },
        {
            service:"Email Marketing",
            basicPackage: false,
            standardPackage: true,
            premiumPackage:true
        },
        {
            service:"Conversion Rate Optimization (CRO)",
            basicPackage: false,
            standardPackage: true,
            premiumPackage:true
        },
        {
            service:"Advanced Analytics",
            basicPackage: false,
            standardPackage: true,
            premiumPackage:true
        },
        {
            service:"Content Marketing Strategy",
            basicPackage: false,
            standardPackage: false,
            premiumPackage:true
        },
        {
            service:"Influencer Marketing",
            basicPackage: false,
            standardPackage: false,
            premiumPackage:true
        },
        {
            service:"Marketing Automation",
            basicPackage: false,
            standardPackage: false,
            premiumPackage:true
        },
        {
            service:"Dedicated Account Management",
            basicPackage: false,
            standardPackage: false,
            premiumPackage:true
        },
    ]
}

export const testimonials = [
    {
        img: "/testimonial-1.png",
        review :"What truly distinguishes Amaan is their proven track record with a diverse clientele. Time and again, they've delivered concrete results, enabling businesses to achieve their marketing objectives effectively.",
        name:"UJJWAL RANA",
        subtitle:"Prestigious Client"
    },
    {
        img: "/testimonial-2.png",
        review :"If you're seeking someone who truly understands your unique objectives and can deliver the results you need, Amaan is the go-to professional. Their ability to connect you with quality leads make your brand unforgettable.",
        name:"YASH GOEL",
        subtitle:"Fitness & Nutrition Expert"
    },
    {
        img: "/testimonial-3.png",
        review :"Amaan's approach is all about understanding unique goals and delivering results a quality that sets your service apart. Your ability to tailor solutions to exceed expectations, regardless of a business's size or industry, is impressive.",
        name:"SAKSHAM SINGLA",
        subtitle:"Prestigious Client"
    },
]