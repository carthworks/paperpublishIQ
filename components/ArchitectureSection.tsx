"use client";

import { motion } from "framer-motion";
import { Database, Cloud, Lock, Layers, Code, Zap, ArrowRight, Bot, FileSearch, Users, CheckCircle } from "lucide-react";

const architectureComponents = [
    {
        icon: Code,
        title: "Frontend",
        tech: "Next.js + TypeScript",
        description: "Modern App Router with TypeScript for type-safe, performant UI",
        color: "from-blue-500 to-cyan-500",
    },
    {
        icon: Zap,
        title: "Backend",
        tech: "Next.js API Routes",
        description: "Serverless API endpoints with built-in optimization",
        color: "from-purple-500 to-pink-500",
    },
    {
        icon: Database,
        title: "Database",
        tech: "PostgreSQL + Prisma",
        description: "Robust relational database with type-safe ORM",
        color: "from-green-500 to-emerald-500",
    },
    {
        icon: Lock,
        title: "Authentication",
        tech: "JWT + RBAC",
        description: "Secure token-based auth with role-based access control",
        color: "from-red-500 to-orange-500",
    },
    {
        icon: Cloud,
        title: "Storage",
        tech: "S3-Compatible",
        description: "Scalable object storage for documents and files",
        color: "from-indigo-500 to-violet-500",
    },
    {
        icon: Layers,
        title: "Observability",
        tech: "Logs + Audit Trail",
        description: "Comprehensive request logging and audit controls",
        color: "from-yellow-500 to-amber-500",
    },
];

const userFlows = [
    {
        role: "Author/Student",
        icon: Users,
        color: "from-blue-500 to-cyan-500",
        steps: [
            { label: "Submit Draft", desc: "Upload research paper" },
            { label: "AI Screening", desc: "Automated validation" },
            { label: "Mentor Review", desc: "Expert guidance" },
            { label: "Peer Review", desc: "Blind evaluation" },
            { label: "Revisions", desc: "Improve paper" },
            { label: "Export", desc: "Publication ready" },
        ],
    },
    {
        role: "Mentor/Guide",
        icon: CheckCircle,
        color: "from-purple-500 to-pink-500",
        steps: [
            { label: "Accept Project", desc: "Review assignment" },
            { label: "Provide Feedback", desc: "Inline comments" },
            { label: "Track Progress", desc: "Monitor versions" },
            { label: "Approve for Review", desc: "Mark ready" },
            { label: "Final Check", desc: "Post-review" },
            { label: "Earn Rewards", desc: "Quality-based" },
        ],
    },
    {
        role: "Reviewer",
        icon: FileSearch,
        color: "from-green-500 to-emerald-500",
        steps: [
            { label: "Receive Assignment", desc: "Anonymous paper" },
            { label: "Review Paper", desc: "Evaluate quality" },
            { label: "Provide Scores", desc: "Rate & comment" },
            { label: "Submit Decision", desc: "Recommendation" },
            { label: "Get Validated", desc: "Editor check" },
            { label: "Earn Recognition", desc: "Certificates" },
        ],
    },
];

const aiEngines = [
    {
        name: "Plagiarism Detection",
        icon: FileSearch,
        description: "AI-powered similarity check against millions of sources",
        color: "from-red-500 to-orange-500",
    },
    {
        name: "Structure Validator",
        icon: CheckCircle,
        description: "Automated validation of paper structure and formatting",
        color: "from-blue-500 to-cyan-500",
    },
    {
        name: "AI Text Detection",
        icon: Bot,
        description: "Identify AI-generated content to ensure originality",
        color: "from-purple-500 to-pink-500",
    },
    {
        name: "Reference Checker",
        icon: Layers,
        description: "Validate citations and reference formatting",
        color: "from-green-500 to-emerald-500",
    },
];

export default function ArchitectureSection() {
    return (
        <section id="architecture" className="py-20 relative overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute inset-0 bg-gradient-to-b from-background via-blue-50/30 dark:via-blue-950/10 to-background" />
                <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl" />
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 ">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-3xl mx-auto mb-16"
                >
                    <h2 className="text-4xl sm:text-5xl font-bold mb-4">
                        Modern <span className="gradient-text">Architecture</span>
                    </h2>
                    <p className="text-xl text-muted-foreground">
                        Built on cutting-edge technologies for security, scalability, and performance
                    </p>
                </motion.div>

                {/* Architecture Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 hidden">
                    {architectureComponents.map((component, index) => {
                        const Icon = component.icon;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                whileHover={{ y: -10 }}
                                className="relative group"
                            >
                                <div className="glass rounded-2xl p-6 h-full hover:shadow-2xl transition-all duration-300">
                                    {/* Icon */}
                                    <div
                                        className={`w-14 h-14 rounded-xl bg-gradient-to-r ${component.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                                    >
                                        <Icon className="w-7 h-7 text-white" />
                                    </div>

                                    {/* Content */}
                                    <h3 className="text-2xl font-bold mb-2">{component.title}</h3>
                                    <p className="text-primary font-semibold mb-3">
                                        {component.tech}
                                    </p>
                                    <p className="text-muted-foreground leading-relaxed">
                                        {component.description}
                                    </p>

                                    {/* Animated Border */}
                                    <div
                                        className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${component.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300 -z-10`}
                                    />
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* AI Engines Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="mb-16"
                >
                    <h3 className="text-3xl font-bold text-center mb-8">
                        AI-Powered <span className="gradient-text">Engines</span>
                    </h3>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {aiEngines.map((engine, index) => {
                            const Icon = engine.icon;
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1, duration: 0.5 }}
                                    className="glass rounded-xl p-6 hover:shadow-xl transition-all duration-300 group"
                                >
                                    <div
                                        className={`w-12 h-12 rounded-lg bg-gradient-to-r ${engine.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                                    >
                                        <Icon className="w-6 h-6 text-white" />
                                    </div>
                                    <h4 className="font-bold mb-2">{engine.name}</h4>
                                    <p className="text-sm text-muted-foreground">
                                        {engine.description}
                                    </p>
                                </motion.div>
                            );
                        })}
                    </div>
                </motion.div>

                {/* User Flow Diagrams */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    className="mb-16"
                >
                    <h3 className="text-3xl font-bold text-center mb-8">
                        User <span className="gradient-text">Flow Diagrams</span>
                    </h3>
                    <div className="space-y-8">
                        {userFlows.map((flow, flowIndex) => {
                            const RoleIcon = flow.icon;
                            return (
                                <motion.div
                                    key={flowIndex}
                                    initial={{ opacity: 0, x: flowIndex % 2 === 0 ? -50 : 50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: flowIndex * 0.2, duration: 0.6 }}
                                    className="glass rounded-2xl p-6 md:p-8"
                                >
                                    {/* Role Header */}
                                    <div className="flex items-center space-x-4 mb-6">
                                        <div
                                            className={`w-14 h-14 rounded-xl bg-gradient-to-r ${flow.color} flex items-center justify-center`}
                                        >
                                            <RoleIcon className="w-7 h-7 text-white" />
                                        </div>
                                        <h4 className="text-2xl font-bold">{flow.role}</h4>
                                    </div>

                                    {/* Flow Steps */}
                                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                                        {flow.steps.map((step, stepIndex) => (
                                            <div key={stepIndex} className="relative">
                                                {/* Step Card */}
                                                <motion.div
                                                    initial={{ opacity: 0, scale: 0.8 }}
                                                    whileInView={{ opacity: 1, scale: 1 }}
                                                    viewport={{ once: true }}
                                                    transition={{ delay: stepIndex * 0.1, duration: 0.4 }}
                                                    className="bg-background/50 rounded-lg p-4 border border-border hover:border-primary transition-all duration-300 group h-full"
                                                >
                                                    {/* Step Number */}
                                                    <div
                                                        className={`w-8 h-8 rounded-full bg-gradient-to-r ${flow.color} flex items-center justify-center mb-3 text-white text-sm font-bold`}
                                                    >
                                                        {stepIndex + 1}
                                                    </div>
                                                    {/* Step Content */}
                                                    <h5 className="font-semibold text-sm mb-1 group-hover:text-primary transition-colors">
                                                        {step.label}
                                                    </h5>
                                                    <p className="text-xs text-muted-foreground">
                                                        {step.desc}
                                                    </p>
                                                </motion.div>

                                                {/* Arrow */}
                                                {stepIndex < flow.steps.length - 1 && (
                                                    <div className="hidden lg:block absolute top-1/2 -right-2 transform -translate-y-1/2 z-10">
                                                        <ArrowRight className="w-4 h-4 text-primary" />
                                                    </div>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </motion.div>

                {/* System Block Diagram */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    className="glass rounded-2xl p-8 md:p-12 mb-16"
                >
                    <h3 className="text-3xl font-bold text-center mb-8">
                        System <span className="gradient-text">Block Diagram</span>
                    </h3>

                    {/* Diagram Image */}
                    <div className="relative group">
                        <div className="overflow-hidden rounded-xl border-2 border-border hover:border-primary transition-all duration-300">
                            <img
                                src="/diagram.png"
                                alt="PaperPublishIQ System Architecture - 4-layer diagram showing User Layer (Author, Mentor, Reviewer, Editor, Institution), Presentation Layer (Next.js Frontend), Application Layer (Submission & Collaboration Service, Workflow & AI Services), and Data Layer (PostgreSQL, S3 Storage, Audit Logs)"
                                className="w-full h-auto group-hover:scale-105 transition-transform duration-500"
                            />
                        </div>

                        {/* Image Caption */}
                        <p className="text-center text-sm text-muted-foreground mt-4">
                            Complete system architecture showing all layers, services, and data flow
                        </p>
                    </div>
                </motion.div>

                {/* Tech Stack Highlights */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                    className="glass rounded-2xl p-8 md:p-12"
                >
                    <h3 className="text-2xl font-bold mb-8 text-center">
                        Security & Quality First
                    </h3>

                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Security Features */}
                        <div className="space-y-4">
                            <h4 className="text-xl font-semibold flex items-center space-x-2">
                                <Lock className="w-5 h-5 text-red-500" />
                                <span>Security Features</span>
                            </h4>
                            <ul className="space-y-3 text-muted-foreground">
                                <li className="flex items-start space-x-2">
                                    <span className="text-green-500 mt-1">✓</span>
                                    <span>JWT rotation with refresh token revocation</span>
                                </li>
                                <li className="flex items-start space-x-2">
                                    <span className="text-green-500 mt-1">✓</span>
                                    <span>RBAC middleware enforced at API + UI layers</span>
                                </li>
                                <li className="flex items-start space-x-2">
                                    <span className="text-green-500 mt-1">✓</span>
                                    <span>Encrypted storage with scoped file access</span>
                                </li>
                                <li className="flex items-start space-x-2">
                                    <span className="text-green-500 mt-1">✓</span>
                                    <span>Rate limiting and HTTPS enforcement</span>
                                </li>
                                <li className="flex items-start space-x-2">
                                    <span className="text-green-500 mt-1">✓</span>
                                    <span>Reviewer anonymity preservation</span>
                                </li>
                            </ul>
                        </div>

                        {/* Quality Assurance */}
                        <div className="space-y-4">
                            <h4 className="text-xl font-semibold flex items-center space-x-2">
                                <Zap className="w-5 h-5 text-yellow-500" />
                                <span>Quality Assurance</span>
                            </h4>
                            <ul className="space-y-3 text-muted-foreground">
                                <li className="flex items-start space-x-2">
                                    <span className="text-green-500 mt-1">✓</span>
                                    <span>Comprehensive unit and integration tests</span>
                                </li>
                                <li className="flex items-start space-x-2">
                                    <span className="text-green-500 mt-1">✓</span>
                                    <span>Full audit trail for sensitive operations</span>
                                </li>
                                <li className="flex items-start space-x-2">
                                    <span className="text-green-500 mt-1">✓</span>
                                    <span>Request logging and observability</span>
                                </li>
                                <li className="flex items-start space-x-2">
                                    <span className="text-green-500 mt-1">✓</span>
                                    <span>Secure environment configuration</span>
                                </li>
                                <li className="flex items-start space-x-2">
                                    <span className="text-green-500 mt-1">✓</span>
                                    <span>Graceful error handling throughout</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
