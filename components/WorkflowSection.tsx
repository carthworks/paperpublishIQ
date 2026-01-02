"use client";

import { motion } from "framer-motion";
import {
    Upload,
    ScanSearch,
    UserCheck,
    Users,
    FileEdit,
    CheckCircle2,
    Package,
} from "lucide-react";

const workflowSteps = [
    {
        icon: Upload,
        title: "Project Creation",
        description: "Upload your research draft with metadata",
        status: "DRAFT",
        color: "from-blue-500 to-cyan-500",
        details: ["Document upload", "Metadata entry", "Initial submission"],
    },
    {
        icon: ScanSearch,
        title: "Automatic Screening",
        description: "AI-powered validation and quality checks",
        status: "SCREENED",
        color: "from-purple-500 to-pink-500",
        details: ["Plagiarism detection", "Structure validation", "Reference check"],
    },
    {
        icon: UserCheck,
        title: "Mentor Guidance",
        description: "Expert feedback and collaborative improvement",
        status: "MENTOR_DONE",
        color: "from-green-500 to-emerald-500",
        details: ["Inline comments", "Task assignments", "Version tracking"],
    },
    {
        icon: Users,
        title: "Blind Peer Review",
        description: "Anonymous expert evaluation and scoring",
        status: "UNDER_REVIEW",
        color: "from-orange-500 to-amber-500",
        details: ["Auto-assignment", "Anonymous scoring", "Detailed feedback"],
    },
    {
        icon: FileEdit,
        title: "Revision Cycle",
        description: "Address feedback and refine your work",
        status: "REVISIONS",
        color: "from-red-500 to-rose-500",
        details: ["Response to reviewers", "Version diffs", "Collaborative edits"],
    },
    {
        icon: CheckCircle2,
        title: "Editorial Decision",
        description: "Final review and decision letter",
        status: "ACCEPTED",
        color: "from-indigo-500 to-violet-500",
        details: ["Editor review", "Decision letter", "Next steps"],
    },
    {
        icon: Package,
        title: "Final Export",
        description: "Publication-ready package generation",
        status: "READY_TO_SUBMIT",
        color: "from-teal-500 to-cyan-500",
        details: ["Camera-ready PDF", "Journal packages", "DOI integration"],
    },
];

export default function WorkflowSection() {
    return (
        <section id="workflow" className="py-20 relative overflow-hidden bg-gradient-to-b from-background via-purple-50/20 dark:via-purple-950/10 to-background">
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
                        End-to-End <span className="gradient-text">Workflow</span>
                    </h2>
                    <p className="text-xl text-muted-foreground">
                        From draft submission to publication-ready package, every step is streamlined and transparent
                    </p>
                </motion.div>

                {/* Workflow Timeline */}
                <div className="relative">
                    {/* Connection Line */}
                    <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-500 via-pink-500 to-blue-500 transform -translate-x-1/2" />

                    {/* Steps */}
                    <div className="space-y-12">
                        {workflowSteps.map((step, index) => {
                            const Icon = step.icon;
                            const isEven = index % 2 === 0;

                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1, duration: 0.6 }}
                                    className={`relative flex items-center ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                                        } flex-col lg:gap-8`}
                                >
                                    {/* Content Card */}
                                    <div className="w-full lg:w-5/12">
                                        <div className="glass rounded-2xl p-6 hover:shadow-2xl transition-all duration-300 group">
                                            {/* Step Number */}
                                            <div className="flex items-center justify-between mb-4">
                                                <span className="text-sm font-bold text-primary">
                                                    STEP {index + 1}
                                                </span>
                                                <span className="text-xs px-3 py-1 bg-primary/10 rounded-full font-semibold">
                                                    {step.status}
                                                </span>
                                            </div>

                                            {/* Icon & Title */}
                                            <div className="flex items-start space-x-4 mb-4">
                                                <div
                                                    className={`w-12 h-12 rounded-lg bg-gradient-to-r ${step.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}
                                                >
                                                    <Icon className="w-6 h-6 text-white" />
                                                </div>
                                                <div>
                                                    <h3 className="text-xl font-bold mb-1">
                                                        {step.title}
                                                    </h3>
                                                    <p className="text-muted-foreground">
                                                        {step.description}
                                                    </p>
                                                </div>
                                            </div>

                                            {/* Details */}
                                            <ul className="space-y-2 ml-16">
                                                {step.details.map((detail, i) => (
                                                    <li
                                                        key={i}
                                                        className="flex items-center space-x-2 text-sm text-muted-foreground"
                                                    >
                                                        <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                                                        <span>{detail}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>

                                    {/* Center Circle */}
                                    <div className="hidden lg:flex w-2/12 justify-center my-4 lg:my-0">
                                        <div
                                            className={`w-16 h-16 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center shadow-lg z-10`}
                                        >
                                            <span className="text-white font-bold text-xl">
                                                {index + 1}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Spacer for alternating layout */}
                                    <div className="hidden lg:block w-5/12" />
                                </motion.div>
                            );
                        })}
                    </div>
                </div>

                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                    className="text-center mt-16"
                >
                    <div className="glass rounded-2xl p-8 max-w-2xl mx-auto">
                        <h3 className="text-2xl font-bold mb-4">
                            Ready to streamline your research journey?
                        </h3>
                        <p className="text-muted-foreground mb-6">
                            Join researchers worldwide who trust PaperPublishIQ for their publication needs
                        </p>
                        <a
                            href="#contact"
                            className="inline-block px-8 py-4 bg-gradient-to-r from-blue-800 to-teal-600 text-white rounded-lg font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300"
                        >
                            Start Your Project
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
