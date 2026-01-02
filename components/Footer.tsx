"use client";

import Link from "next/link";
import { Github, Linkedin, Twitter, Mail, Heart } from "lucide-react";

const footerLinks = {
    product: [
        { name: "Features", href: "#features" },
        { name: "Architecture", href: "#architecture" },
        { name: "Workflow", href: "#workflow" },
        { name: "Pricing", href: "#contact" },
    ],
    company: [
        { name: "About Us", href: "#home" },
        { name: "Target Users", href: "#target-users" },
        { name: "Contact", href: "#contact" },
        { name: "Blog", href: "#" },
    ],
    resources: [
        { name: "Documentation", href: "#" },
        { name: "API Reference", href: "#" },
        { name: "Support", href: "#contact" },
        { name: "FAQs", href: "#" },
    ],
    legal: [
        { name: "Privacy Policy", href: "#" },
        { name: "Terms of Service", href: "#" },
        { name: "Cookie Policy", href: "#" },
        { name: "Ethics Policy", href: "#" },
    ],
};

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="relative bg-gradient-to-b from-background to-purple-50/30 dark:to-purple-950/20 border-t border-border">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Main Footer Content */}
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 mb-12">
                    {/* Brand Column */}
                    <div className="col-span-2">
                        <Link href="#home" className="flex items-center space-x-2 mb-4 group">
                            <div className="w-10 h-10 bg-gradient-to-br from-blue-800 to-teal-600 rounded-lg flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                                <span className="text-white font-bold text-xl">P</span>
                            </div>
                            <span className="text-xl font-bold gradient-text">
                                PaperPublishIQ
                            </span>
                        </Link>
                        <p className="text-muted-foreground mb-4 max-w-xs">
                            Transforming research paper publishing through intelligent mentoring, peer review, and ethical practices.
                        </p>
                        {/* Social Links */}
                        <div className="flex space-x-3">
                            {[
                                { icon: Twitter, href: "#", label: "Twitter" },
                                { icon: Linkedin, href: "#", label: "LinkedIn" },
                                { icon: Github, href: "#", label: "GitHub" },
                                { icon: Mail, href: "#contact", label: "Email" },
                            ].map((social, index) => {
                                const Icon = social.icon;
                                return (
                                    <a
                                        key={index}
                                        href={social.href}
                                        aria-label={social.label}
                                        className="w-10 h-10 rounded-lg glass flex items-center justify-center hover:bg-primary/10 transition-all duration-300 hover:scale-110"
                                    >
                                        <Icon className="w-5 h-5" />
                                    </a>
                                );
                            })}
                        </div>
                    </div>

                    {/* Product Links */}
                    <div>
                        <h3 className="font-semibold mb-4">Product</h3>
                        <ul className="space-y-2">
                            {footerLinks.product.map((link, index) => (
                                <li key={index}>
                                    <Link
                                        href={link.href}
                                        className="text-muted-foreground hover:text-primary transition-colors duration-300"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company Links */}
                    <div>
                        <h3 className="font-semibold mb-4">Company</h3>
                        <ul className="space-y-2">
                            {footerLinks.company.map((link, index) => (
                                <li key={index}>
                                    <Link
                                        href={link.href}
                                        className="text-muted-foreground hover:text-primary transition-colors duration-300"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Resources Links */}
                    <div>
                        <h3 className="font-semibold mb-4">Resources</h3>
                        <ul className="space-y-2">
                            {footerLinks.resources.map((link, index) => (
                                <li key={index}>
                                    <Link
                                        href={link.href}
                                        className="text-muted-foreground hover:text-primary transition-colors duration-300"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Legal Links */}
                    <div>
                        <h3 className="font-semibold mb-4">Legal</h3>
                        <ul className="space-y-2">
                            {footerLinks.legal.map((link, index) => (
                                <li key={index}>
                                    <Link
                                        href={link.href}
                                        className="text-muted-foreground hover:text-primary transition-colors duration-300"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-border">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        <p className="text-sm text-muted-foreground text-center md:text-left">
                            © {currentYear} PaperPublishIQ. All rights reserved.
                        </p>
                        <p className="text-sm text-muted-foreground flex items-center space-x-1">
                            <span>Made with</span>
                            <Heart className="w-4 h-4 text-red-500 fill-current animate-pulse" />
                            <span>for researchers worldwide</span>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
