"use client";

import { ArrowRight, CheckCircle, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Link from "next/link";

const slides = [
    {
        title: "Transform Research Paper Publishing",
        subtitle: "Secure MVP for Research Paper Submission, Mentoring & Peer Review",
        description:
            "A comprehensive platform that guides your research from draft to publication-ready with expert mentoring and blind peer review.",
        cta: "Start Your Journey",
        features: [
            "Automated Screening & Validation",
            "Expert Mentor Guidance",
            "Blind Peer Review Process",
        ],
    },
    {
        title: "Ethical Incentive Management",
        subtitle: "Reward Quality, Not Outcomes",
        description:
            "Our platform ensures ethical practices with transparent incentives for mentors and reviewers, never tied to academic approvals.",
        cta: "Learn More",
        features: [
            "Transparent Commission System",
            "Quality-Based Rewards",
            "Full Audit Trail",
        ],
    },
    {
        title: "End-to-End Workflow",
        subtitle: "From Draft to Journal Submission",
        description:
            "Streamlined process covering project creation, mentoring, peer review, revisions, editorial decisions, and final export.",
        cta: "Explore Workflow",
        features: [
            "Version Control & Diffs",
            "Collaborative Comments",
            "Export Ready Packages",
        ],
    },
];

export default function HeroSection() {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 6000);

        return () => clearInterval(timer);
    }, []);

    const slide = slides[currentSlide];

    return (
        <section
            id="home"
            className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
        >
            {/* Animated Background */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 dark:from-purple-950/20 dark:via-pink-950/20 dark:to-blue-950/20 animate-gradient" />

                {/* Floating Orbs */}
                <div className="absolute top-20 left-10 w-72 h-72 bg-purple-400/30 rounded-full blur-3xl animate-float" />
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-400/30 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
                <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-blue-400/30 rounded-full blur-3xl animate-float" style={{ animationDelay: "4s" }} />

                {/* Grid Pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]" />
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <motion.div
                        key={currentSlide}
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="space-y-6"
                    >
                        <div className="inline-flex items-center space-x-2 px-4 py-2 bg-purple-100 dark:bg-purple-900/30 rounded-full">
                            <Sparkles className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                            <span className="text-sm font-medium text-purple-600 dark:text-purple-400">
                                Next-Gen Research Platform
                            </span>
                        </div>

                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                            {slide.title.split(" ").map((word, i) => (
                                <span
                                    key={i}
                                    className={i % 2 === 0 ? "gradient-text" : ""}
                                >
                                    {word}{" "}
                                </span>
                            ))}
                        </h1>

                        <p className="text-xl text-muted-foreground font-medium">
                            {slide.subtitle}
                        </p>

                        <p className="text-lg text-muted-foreground">
                            {slide.description}
                        </p>

                        {/* Features List */}
                        <div className="space-y-3">
                            {slide.features.map((feature, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.1 + 0.3 }}
                                    className="flex items-center space-x-3"
                                >
                                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                                    <span className="text-foreground">{feature}</span>
                                </motion.div>
                            ))}
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 pt-4">
                            <Link
                                href="#contact"
                                className="group px-8 py-4 bg-gradient-to-r from-blue-800 to-teal-600 text-white rounded-lg font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2"
                            >
                                <span>{slide.cta}</span>
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <Link
                                href="#features"
                                className="px-8 py-4 glass rounded-lg font-semibold hover:bg-primary/10 transition-all duration-300 text-center"
                            >
                                Explore Features
                            </Link>
                        </div>
                    </motion.div>

                    {/* Right Content - Visual */}
                    <motion.div
                        key={`visual-${currentSlide}`}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6 }}
                        className="relative hidden lg:block"
                    >
                        <div className="relative w-full h-[500px] glass rounded-2xl p-8 animate-float">
                            {/* Mockup Content */}
                            <div className="w-full h-full bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-xl flex items-center justify-center">
                                <div className="text-center space-y-4">
                                    <div className="w-24 h-24 mx-auto bg-gradient-to-br from-blue-800 to-teal-600 rounded-2xl flex items-center justify-center animate-pulse-glow">
                                        <span className="text-4xl font-bold text-white">IQ</span>
                                    </div>
                                    <h3 className="text-2xl font-bold gradient-text">
                                        PaperPublishIQ
                                    </h3>
                                    <p className="text-muted-foreground max-w-xs mx-auto">
                                        Elevating research quality through intelligent mentoring and peer review
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Decorative Elements */}
                        <div className="absolute -top-4 -right-4 w-20 h-20 bg-purple-500 rounded-full blur-xl opacity-50 animate-pulse" />
                        <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-pink-500 rounded-full blur-xl opacity-50 animate-pulse" style={{ animationDelay: "1s" }} />
                    </motion.div>
                </div>

                {/* Slide Indicators */}
                <div className="flex justify-center space-x-3 mt-12">
                    {slides.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentSlide(index)}
                            className={`h-2 rounded-full transition-all duration-300 ${index === currentSlide
                                    ? "w-8 bg-gradient-to-r from-blue-800 to-teal-600"
                                    : "w-2 bg-gray-300 dark:bg-gray-700 hover:bg-gray-400"
                                }`}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
