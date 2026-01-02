"use client";

import { motion } from "framer-motion";
import {
    FileCheck,
    Users,
    Eye,
    RefreshCw,
    CheckSquare,
    FileOutput,
    Shield,
    Zap,
    Award,
    Lock,
    TrendingUp,
    GitBranch,
} from "lucide-react";

const features = [
    {
        icon: FileCheck,
        title: "Automated Screening",
        description:
            "Advanced plagiarism detection, structure validation, and AI-text flagging to ensure quality from the start.",
        color: "from-purple-500 to-purple-600",
    },
    {
        icon: Users,
        title: "Expert Mentoring",
        description:
            "Connect with verified mentors for inline comments, task management, and comprehensive guidance throughout your research journey.",
        color: "from-pink-500 to-pink-600",
    },
    {
        icon: Eye,
        title: "Blind Peer Review",
        description:
            "Anonymous, unbiased review process with auto-assignment, scoring, and detailed feedback from qualified reviewers.",
        color: "from-blue-500 to-blue-600",
    },
    {
        icon: RefreshCw,
        title: "Revision Management",
        description:
            "Track changes with version diffs, manage reviewer responses, and iterate efficiently with your mentor's support.",
        color: "from-green-500 to-green-600",
    },
    {
        icon: CheckSquare,
        title: "Editorial Decisions",
        description:
            "Transparent decision-making process with generated decision letters and clear next steps for your research.",
        color: "from-orange-500 to-orange-600",
    },
    {
        icon: FileOutput,
        title: "Export Ready",
        description:
            "Generate camera-ready PDFs and journal-specific packages (IEEE, ACM, Springer) with optional DOI integration.",
        color: "from-red-500 to-red-600",
    },
    {
        icon: Shield,
        title: "Ethical Incentives",
        description:
            "Transparent reward system for mentors and reviewers based on quality and contribution, never tied to approvals.",
        color: "from-indigo-500 to-indigo-600",
    },
    {
        icon: Lock,
        title: "Secure & Private",
        description:
            "JWT authentication, RBAC permissions, encrypted storage, and comprehensive audit logs for complete security.",
        color: "from-teal-500 to-teal-600",
    },
    {
        icon: GitBranch,
        title: "Version Control",
        description:
            "Track every change with detailed version history, diffs, and collaborative commenting for seamless teamwork.",
        color: "from-cyan-500 to-cyan-600",
    },
    {
        icon: Award,
        title: "Quality Scoring",
        description:
            "Comprehensive scoring system for mentors and reviewers based on depth, accuracy, and timeliness of contributions.",
        color: "from-yellow-500 to-yellow-600",
    },
    {
        icon: TrendingUp,
        title: "Analytics Dashboard",
        description:
            "Real-time insights into project status, review progress, and performance metrics for all stakeholders.",
        color: "from-violet-500 to-violet-600",
    },
    {
        icon: Zap,
        title: "Fast & Efficient",
        description:
            "Streamlined workflow reduces time-to-publication while maintaining rigorous quality standards and ethical practices.",
        color: "from-fuchsia-500 to-fuchsia-600",
    },
];

export default function FeaturesSection() {
    return (
        <section id="features" className="py-20 relative overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-background via-purple-50/30 dark:via-purple-950/10 to-background -z-10" />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-3xl mx-auto mb-16"
                >
                    <h2 className="text-4xl sm:text-5xl font-bold mb-4">
                        Powerful <span className="gradient-text">Features</span>
                    </h2>
                    <p className="text-xl text-muted-foreground">
                        Everything you need to transform your research paper from draft to
                        publication-ready with confidence and quality.
                    </p>
                </motion.div>

                {/* Features Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {features.map((feature, index) => {
                        const Icon = feature.icon;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                whileHover={{ scale: 1.05, y: -5 }}
                                className="group relative glass rounded-xl p-6 hover:shadow-2xl transition-all duration-300 cursor-pointer"
                            >
                                {/* Gradient Border on Hover */}
                                <div className="absolute inset-0 rounded-xl bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-xl"
                                    style={{
                                        background: `linear-gradient(to right, var(--tw-gradient-stops))`,
                                    }}
                                />

                                {/* Icon */}
                                <div
                                    className={`w-12 h-12 rounded-lg bg-gradient-to-r ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                                >
                                    <Icon className="w-6 h-6 text-white" />
                                </div>

                                {/* Content */}
                                <h3 className="text-xl font-bold mb-2 group-hover:gradient-text transition-all duration-300">
                                    {feature.title}
                                </h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    {feature.description}
                                </p>

                                {/* Hover Effect */}
                                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-xl"
                                    style={{
                                        background: `linear-gradient(to right, var(--tw-gradient-stops))`,
                                    }}
                                />
                            </motion.div>
                        );
                    })}
                </div>

                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                    className="text-center mt-16"
                >
                    <p className="text-lg text-muted-foreground mb-6">
                        Ready to experience the future of research paper publishing?
                    </p>
                    <a
                        href="#contact"
                        className="inline-block px-8 py-4 bg-gradient-to-r from-blue-800 to-teal-600 text-white rounded-lg font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300"
                    >
                        Get Started Today
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
