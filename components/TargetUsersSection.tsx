"use client";

import { motion } from "framer-motion";
import {
    GraduationCap,
    UserCheck,
    Eye,
    Shield,
    Building2,
} from "lucide-react";

const targetUsers = [
    {
        icon: GraduationCap,
        title: "Authors & Students",
        description:
            "Researchers and students seeking expert guidance to transform their drafts into publication-ready papers.",
        color: "from-blue-500 to-cyan-500",
        features: [
            "Draft submission & tracking",
            "Mentor collaboration",
            "Revision management",
            "Export ready packages",
        ],
    },
    {
        icon: UserCheck,
        title: "Mentors & Guides",
        description:
            "Experienced academics providing structured mentoring with transparent incentives and recognition.",
        color: "from-purple-500 to-pink-500",
        features: [
            "Verified mentor profiles",
            "Activity reports & certificates",
            "Ethical commission system",
            "Contribution ledger",
        ],
    },
    {
        icon: Eye,
        title: "Peer Reviewers",
        description:
            "Expert reviewers conducting blind evaluations with quality-based rewards and acknowledgment.",
        color: "from-green-500 to-emerald-500",
        features: [
            "Anonymous review process",
            "Quality scoring system",
            "Certificates & recognition",
            "Conflict-of-interest checks",
        ],
    },
    {
        icon: Shield,
        title: "Editors & Admins",
        description:
            "Editorial teams managing the review process, making decisions, and ensuring quality standards.",
        color: "from-orange-500 to-amber-500",
        features: [
            "Decision dashboard",
            "Review validation",
            "Audit controls",
            "Quality oversight",
        ],
    },
    {
        icon: Building2,
        title: "Institutions",
        description:
            "Academic institutions seeking to streamline research output and maintain quality standards.",
        color: "from-indigo-500 to-violet-500",
        features: [
            "Institutional subscriptions",
            "Bulk user management",
            "Analytics & reporting",
            "Custom workflows",
        ],
    },
];

export default function TargetUsersSection() {
    return (
        <section id="target-users" className="py-20 relative overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute inset-0 bg-gradient-to-b from-background via-pink-50/30 dark:via-pink-950/10 to-background" />
                <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-pink-400/20 rounded-full blur-3xl animate-float" />
                <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
            </div>

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
                        Built for <span className="gradient-text">Everyone</span>
                    </h2>
                    <p className="text-xl text-muted-foreground">
                        A comprehensive platform serving all stakeholders in the research publishing ecosystem
                    </p>
                </motion.div>

                {/* Users Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                    {targetUsers.map((user, index) => {
                        const Icon = user.icon;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                whileHover={{ y: -10, scale: 1.02 }}
                                className="group relative"
                            >
                                <div className="glass rounded-2xl p-8 h-full hover:shadow-2xl transition-all duration-300">
                                    {/* Icon */}
                                    <div
                                        className={`w-16 h-16 rounded-xl bg-gradient-to-r ${user.color} flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}
                                    >
                                        <Icon className="w-8 h-8 text-white" />
                                    </div>

                                    {/* Content */}
                                    <h3 className="text-2xl font-bold mb-3 group-hover:gradient-text transition-all duration-300">
                                        {user.title}
                                    </h3>
                                    <p className="text-muted-foreground mb-6 leading-relaxed">
                                        {user.description}
                                    </p>

                                    {/* Features List */}
                                    <ul className="space-y-2">
                                        {user.features.map((feature, i) => (
                                            <li
                                                key={i}
                                                className="flex items-start space-x-2 text-sm"
                                            >
                                                <span className="text-green-500 mt-0.5">✓</span>
                                                <span className="text-muted-foreground">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    {/* Animated Border */}
                                    <div
                                        className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${user.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 -z-10`}
                                    />
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Stats Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-6"
                >
                    {[
                        { label: "Active Users", value: "10K+", color: "from-blue-500 to-cyan-500" },
                        { label: "Papers Reviewed", value: "5K+", color: "from-purple-500 to-pink-500" },
                        { label: "Expert Mentors", value: "500+", color: "from-green-500 to-emerald-500" },
                        { label: "Success Rate", value: "95%", color: "from-orange-500 to-amber-500" },
                    ].map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 + 0.4, duration: 0.5 }}
                            className="glass rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300"
                        >
                            <div
                                className={`text-3xl md:text-4xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}
                            >
                                {stat.value}
                            </div>
                            <div className="text-sm text-muted-foreground font-medium">
                                {stat.label}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
