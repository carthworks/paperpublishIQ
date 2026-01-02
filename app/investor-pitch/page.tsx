"use client";

import { motion } from "framer-motion";
import {
    TrendingUp,
    Users,
    DollarSign,
    Target,
    Rocket,
    Award,
    Globe,
    Shield,
    Zap,
    BarChart3,
    CheckCircle,
    ArrowRight,
    AlertTriangle,
    Clock,
    XCircle,
    TrendingDown,
    FileSearch,
    Bot,
} from "lucide-react";
import Link from "next/link";

export default function InvestorPitchPage() {
    return (
        <div className="min-h-screen bg-background">
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-teal-50 to-slate-50 dark:from-blue-950/20 dark:via-teal-950/20 dark:to-slate-950/20 -z-10" />

                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center max-w-4xl mx-auto"
                    >
                        <div className="inline-flex items-center space-x-2 px-4 py-2 bg-red-100 dark:bg-red-900/30 rounded-full mb-6">
                            <AlertTriangle className="w-4 h-4 text-red-600 dark:text-red-400" />
                            <span className="text-sm font-medium text-red-600 dark:text-red-400">
                                $2.4B Market • Broken System • Clear Solution
                            </span>
                        </div>

                        <h1 className="text-5xl sm:text-6xl font-bold mb-6">
                            Academic Publishing is <span className="gradient-text">Broken</span>
                        </h1>

                        <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                            We're fixing the 6-9 month review bottleneck that costs researchers careers and institutions millions.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="#problem"
                                className="px-8 py-4 bg-gradient-to-r from-blue-800 to-teal-600 text-white rounded-lg font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2"
                            >
                                <span>See The Problem</span>
                                <ArrowRight className="w-5 h-5" />
                            </Link>
                            <Link
                                href="#traction"
                                className="px-8 py-4 glass rounded-lg font-semibold hover:bg-primary/10 transition-all duration-300 text-center"
                            >
                                View Traction
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* The Problem - Brutal & Specific */}
            <section id="problem" className="py-20 bg-gradient-to-b from-background to-red-50/20 dark:to-red-950/10">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-4xl font-bold mb-4">
                            The <span className="gradient-text">Problem</span>
                        </h2>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                            Academic peer review is collapsing under its own weight
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            {
                                icon: Clock,
                                title: "6-9 Month Delays",
                                problem: "Paper review takes 6-9 months on average",
                                cost: "$12K+ in delayed graduation costs per student",
                                color: "from-red-600 to-red-800",
                            },
                            {
                                icon: TrendingDown,
                                title: "Reviewer Fatigue",
                                problem: "40% of review requests are declined",
                                cost: "Low-quality feedback → 60% rejection rate",
                                color: "from-orange-600 to-orange-800",
                            },
                            {
                                icon: XCircle,
                                title: "Zero Mentorship",
                                problem: "Students lack structured guidance",
                                cost: "3-5 revision cycles before acceptance",
                                color: "from-yellow-600 to-yellow-800",
                            },
                            {
                                icon: AlertTriangle,
                                title: "Fraud & Plagiarism",
                                problem: "Journals struggle with detection",
                                cost: "10,000+ retractions annually",
                                color: "from-red-700 to-red-900",
                            },
                        ].map((item, index) => {
                            const Icon = item.icon;
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="glass rounded-xl p-6 hover:shadow-xl transition-all duration-300 border-l-4 border-red-500"
                                >
                                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${item.color} flex items-center justify-center mb-4`}>
                                        <Icon className="w-6 h-6 text-white" />
                                    </div>
                                    <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                                    <p className="text-sm text-muted-foreground mb-3">{item.problem}</p>
                                    <div className="text-sm font-semibold text-red-600 dark:text-red-400">
                                        💰 {item.cost}
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>

                    {/* Who Suffers */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mt-12 glass rounded-2xl p-8"
                    >
                        <h3 className="text-2xl font-bold mb-6 text-center">Who Suffers Most?</h3>
                        <div className="grid md:grid-cols-3 gap-6">
                            <div className="text-center">
                                <div className="text-4xl font-bold gradient-text mb-2">PhD Students</div>
                                <p className="text-sm text-muted-foreground">Delayed graduation = $50K+ opportunity cost</p>
                            </div>
                            <div className="text-center">
                                <div className="text-4xl font-bold gradient-text mb-2">Universities</div>
                                <p className="text-sm text-muted-foreground">Low publication rates hurt rankings & funding</p>
                            </div>
                            <div className="text-center">
                                <div className="text-4xl font-bold gradient-text mb-2">Journals</div>
                                <p className="text-sm text-muted-foreground">Reviewer shortage → quality decline</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Who Pays vs Who Uses */}
            <section className="py-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-4xl font-bold mb-4">
                            Who Pays vs <span className="gradient-text">Who Uses</span>
                        </h2>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                            Clear customer segmentation with defined wedge strategy
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        {/* Who Pays */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="glass rounded-2xl p-8 border-2 border-blue-400 dark:border-blue-600"
                        >
                            <div className="flex items-center space-x-3 mb-6">
                                <DollarSign className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                                <h3 className="text-2xl font-bold">Who PAYS</h3>
                            </div>

                            <div className="space-y-4">
                                <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg">
                                    <div className="font-bold mb-1">Primary: Institutions</div>
                                    <div className="text-sm text-muted-foreground mb-2">Funded PhD programs, research universities</div>
                                    <div className="text-sm font-semibold text-blue-600 dark:text-blue-400">$5K-50K/year per institution</div>
                                </div>

                                <div className="p-4 bg-teal-50 dark:bg-teal-950/20 rounded-lg">
                                    <div className="font-bold mb-1">Secondary: Professionals</div>
                                    <div className="text-sm text-muted-foreground mb-2">Self-funded researchers, consultants</div>
                                    <div className="text-sm font-semibold text-teal-600 dark:text-teal-400">$99/month individual</div>
                                </div>

                                <div className="p-4 bg-slate-50 dark:bg-slate-950/20 rounded-lg">
                                    <div className="font-bold mb-1">Tertiary: Students</div>
                                    <div className="text-sm text-muted-foreground mb-2">Subsidized by institutions or self-pay</div>
                                    <div className="text-sm font-semibold text-slate-600 dark:text-slate-400">$29/month</div>
                                </div>
                            </div>

                            <div className="mt-6 p-4 bg-gradient-to-r from-blue-800 to-teal-600 text-white rounded-lg">
                                <div className="font-bold mb-1">Wedge Customer</div>
                                <div className="text-sm">Top 50 US research universities with funded PhD programs</div>
                            </div>
                        </motion.div>

                        {/* Who Uses */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="glass rounded-2xl p-8"
                        >
                            <div className="flex items-center space-x-3 mb-6">
                                <Users className="w-8 h-8 text-teal-600 dark:text-teal-400" />
                                <h3 className="text-2xl font-bold">Who USES</h3>
                            </div>

                            <div className="space-y-4">
                                <div className="flex items-start space-x-3">
                                    <CheckCircle className="w-5 h-5 text-teal-600 dark:text-teal-400 mt-0.5" />
                                    <div>
                                        <div className="font-semibold">PhD Scholars (Demand)</div>
                                        <div className="text-sm text-muted-foreground">Submit papers, get mentoring, receive reviews</div>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-3">
                                    <CheckCircle className="w-5 h-5 text-teal-600 dark:text-teal-400 mt-0.5" />
                                    <div>
                                        <div className="font-semibold">Mentors (Supply)</div>
                                        <div className="text-sm text-muted-foreground">Paid per session, earn reputation</div>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-3">
                                    <CheckCircle className="w-5 h-5 text-teal-600 dark:text-teal-400 mt-0.5" />
                                    <div>
                                        <div className="font-semibold">Peer Reviewers (Supply)</div>
                                        <div className="text-sm text-muted-foreground">Compensated, quality-validated</div>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-3">
                                    <CheckCircle className="w-5 h-5 text-teal-600 dark:text-teal-400 mt-0.5" />
                                    <div>
                                        <div className="font-semibold">Editors (Gatekeepers)</div>
                                        <div className="text-sm text-muted-foreground">Final decision makers</div>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-3">
                                    <CheckCircle className="w-5 h-5 text-teal-600 dark:text-teal-400 mt-0.5" />
                                    <div>
                                        <div className="font-semibold">Institutions (Admins)</div>
                                        <div className="text-sm text-muted-foreground">Manage users, track metrics</div>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-6 p-4 bg-teal-50 dark:bg-teal-950/20 rounded-lg">
                                <div className="font-bold mb-1">Network Effect</div>
                                <div className="text-sm text-muted-foreground">More reviewers → faster reviews → more authors → more revenue for reviewers</div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Why Now */}
            <section className="py-20 bg-gradient-to-b from-background to-blue-50/30 dark:to-blue-950/10">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-4xl font-bold mb-4">
                            Why <span className="gradient-text">Now</span>
                        </h2>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                            Three converging trends create a perfect storm
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: Bot,
                                title: "AI Maturity",
                                points: [
                                    "Plagiarism detection is now 95%+ accurate",
                                    "LLMs can pre-screen for structure & quality",
                                    "AI-text detection prevents fraud",
                                ],
                                timing: "Available NOW",
                            },
                            {
                                icon: TrendingDown,
                                title: "Review Crisis",
                                points: [
                                    "Reviewer acceptance rate dropped from 60% → 40%",
                                    "Average review time increased 40% since 2020",
                                    "Journals desperate for solutions",
                                ],
                                timing: "Peak urgency",
                            },
                            {
                                icon: DollarSign,
                                title: "Funding Pressure",
                                points: [
                                    "Universities need publication metrics for rankings",
                                    "PhD programs judged on time-to-degree",
                                    "Willingness to pay for efficiency",
                                ],
                                timing: "Budget allocated",
                            },
                        ].map((trend, index) => {
                            const Icon = trend.icon;
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="glass rounded-xl p-6 hover:shadow-xl transition-all duration-300"
                                >
                                    <div className="w-14 h-14 rounded-xl bg-gradient-to-r from-blue-800 to-teal-600 flex items-center justify-center mb-4">
                                        <Icon className="w-7 h-7 text-white" />
                                    </div>
                                    <h3 className="text-xl font-bold mb-4">{trend.title}</h3>
                                    <ul className="space-y-2 mb-4">
                                        {trend.points.map((point, i) => (
                                            <li key={i} className="flex items-start space-x-2 text-sm">
                                                <CheckCircle className="w-4 h-4 text-teal-600 dark:text-teal-400 mt-0.5 flex-shrink-0" />
                                                <span>{point}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <div className="text-sm font-semibold text-blue-600 dark:text-blue-400">
                                        ⏰ {trend.timing}
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Traction / Signals */}
            <section id="traction" className="py-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-4xl font-bold mb-4">
                            Early <span className="gradient-text">Traction</span>
                        </h2>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                            Pre-launch momentum signals
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { label: "Pilot Institutions", value: "5", detail: "LOIs signed" },
                            { label: "Waitlist", value: "1,200+", detail: "Researchers" },
                            { label: "Mentors Onboarded", value: "45", detail: "PhD+ qualified" },
                            { label: "Papers Reviewed (Beta)", value: "120", detail: "Private testing" },
                        ].map((stat, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="glass rounded-xl p-6 text-center hover:shadow-xl transition-all duration-300"
                            >
                                <div className="text-4xl font-bold gradient-text mb-2">{stat.value}</div>
                                <div className="text-sm font-semibold mb-1">{stat.label}</div>
                                <div className="text-xs text-muted-foreground">{stat.detail}</div>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mt-12 glass rounded-2xl p-8"
                    >
                        <h3 className="text-2xl font-bold mb-6 text-center">Momentum Signals</h3>
                        <div className="grid md:grid-cols-3 gap-6">
                            <div className="text-center">
                                <CheckCircle className="w-12 h-12 text-teal-600 dark:text-teal-400 mx-auto mb-3" />
                                <div className="font-bold mb-1">University Partnerships</div>
                                <div className="text-sm text-muted-foreground">3 top-50 US universities in active discussions</div>
                            </div>
                            <div className="text-center">
                                <CheckCircle className="w-12 h-12 text-teal-600 dark:text-teal-400 mx-auto mb-3" />
                                <div className="font-bold mb-1">Advisory Board</div>
                                <div className="text-sm text-muted-foreground">2 former journal editors, 1 university dean</div>
                            </div>
                            <div className="text-center">
                                <CheckCircle className="w-12 h-12 text-teal-600 dark:text-teal-400 mx-auto mb-3" />
                                <div className="font-bold mb-1">Beta Feedback</div>
                                <div className="text-sm text-muted-foreground">4.7/5 avg rating from beta users</div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Defensibility */}
            <section className="py-20 bg-gradient-to-b from-background to-slate-50/30 dark:to-slate-950/10">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-4xl font-bold mb-4">
                            Why This is <span className="gradient-text">Hard to Replicate</span>
                        </h2>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                            Network effects and data moats compound over time
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        {[
                            {
                                title: "Reviewer Reputation Graph",
                                description: "Quality scores compound → trusted reviewers get more work → higher earnings → platform lock-in",
                                compounds: "Every review strengthens the graph",
                                icon: Users,
                            },
                            {
                                title: "Institutional Trust Workflows",
                                description: "Compliance, audit trails, RBAC integrations take 6-12 months to build per institution",
                                compounds: "Switching cost increases with usage",
                                icon: Shield,
                            },
                            {
                                title: "Longitudinal Data",
                                description: "Paper → Author → Reviewer → Outcome data creates predictive models competitors can't match",
                                compounds: "Data advantage grows exponentially",
                                icon: BarChart3,
                            },
                            {
                                title: "Journal Integration Pipelines",
                                description: "Custom export formats for 500+ journals = 2+ years of engineering",
                                compounds: "Each integration is a mini-moat",
                                icon: Globe,
                            },
                        ].map((item, index) => {
                            const Icon = item.icon;
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="glass rounded-xl p-6 hover:shadow-xl transition-all duration-300"
                                >
                                    <div className="flex items-start space-x-4 mb-4">
                                        <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-blue-800 to-teal-600 flex items-center justify-center flex-shrink-0">
                                            <Icon className="w-6 h-6 text-white" />
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                                            <p className="text-sm text-muted-foreground mb-3">{item.description}</p>
                                            <div className="text-sm font-semibold text-teal-600 dark:text-teal-400">
                                                🔒 {item.compounds}
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mt-12 glass rounded-2xl p-8 text-center"
                    >
                        <h3 className="text-2xl font-bold mb-4">Why Incumbents Won't Do This</h3>
                        <div className="grid md:grid-cols-3 gap-6">
                            <div>
                                <div className="font-bold mb-2">Elsevier / Springer</div>
                                <div className="text-sm text-muted-foreground">Protecting $10B+ journal subscription revenue</div>
                            </div>
                            <div>
                                <div className="font-bold mb-2">ResearchGate</div>
                                <div className="text-sm text-muted-foreground">No review workflow, just networking</div>
                            </div>
                            <div>
                                <div className="font-bold mb-2">AI Startups</div>
                                <div className="text-sm text-muted-foreground">Lack institutional trust & compliance</div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Unit Economics */}
            <section className="py-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-4xl font-bold mb-4">
                            Unit <span className="gradient-text">Economics</span>
                        </h2>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                            Path to profitability with healthy margins
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="glass rounded-xl p-6"
                        >
                            <h3 className="text-xl font-bold mb-4">Customer Acquisition</h3>
                            <div className="space-y-3">
                                <div>
                                    <div className="text-sm text-muted-foreground">Institutional CAC</div>
                                    <div className="text-2xl font-bold gradient-text">$8K</div>
                                    <div className="text-xs text-muted-foreground">6-month sales cycle</div>
                                </div>
                                <div>
                                    <div className="text-sm text-muted-foreground">Individual CAC</div>
                                    <div className="text-2xl font-bold gradient-text">$45</div>
                                    <div className="text-xs text-muted-foreground">Organic + paid ads</div>
                                </div>
                                <div>
                                    <div className="text-sm text-muted-foreground">Payback Period</div>
                                    <div className="text-2xl font-bold gradient-text">8-12mo</div>
                                    <div className="text-xs text-muted-foreground">Institutional</div>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="glass rounded-xl p-6"
                        >
                            <h3 className="text-xl font-bold mb-4">Revenue & Margins</h3>
                            <div className="space-y-3">
                                <div>
                                    <div className="text-sm text-muted-foreground">Institutional ACV</div>
                                    <div className="text-2xl font-bold gradient-text">$25K</div>
                                    <div className="text-xs text-muted-foreground">Avg 50 users</div>
                                </div>
                                <div>
                                    <div className="text-sm text-muted-foreground">Gross Margin</div>
                                    <div className="text-2xl font-bold gradient-text">70%</div>
                                    <div className="text-xs text-muted-foreground">After mentor/reviewer payout</div>
                                </div>
                                <div>
                                    <div className="text-sm text-muted-foreground">Platform Take Rate</div>
                                    <div className="text-2xl font-bold gradient-text">18%</div>
                                    <div className="text-xs text-muted-foreground">On mentor marketplace</div>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="glass rounded-xl p-6"
                        >
                            <h3 className="text-xl font-bold mb-4">Cost Structure</h3>
                            <div className="space-y-3">
                                <div>
                                    <div className="text-sm text-muted-foreground">Review Cost/Paper</div>
                                    <div className="text-2xl font-bold gradient-text">$120</div>
                                    <div className="text-xs text-muted-foreground">2 reviewers @ $60 each</div>
                                </div>
                                <div>
                                    <div className="text-sm text-muted-foreground">Mentor Cost/Session</div>
                                    <div className="text-2xl font-bold gradient-text">$80</div>
                                    <div className="text-xs text-muted-foreground">Platform keeps $20</div>
                                </div>
                                <div>
                                    <div className="text-sm text-muted-foreground">Infrastructure/User</div>
                                    <div className="text-2xl font-bold gradient-text">$3/mo</div>
                                    <div className="text-xs text-muted-foreground">Cloud + AI costs</div>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mt-12 glass rounded-2xl p-8 text-center"
                    >
                        <h3 className="text-2xl font-bold mb-6">Path to Profitability</h3>
                        <div className="grid md:grid-cols-4 gap-6">
                            <div>
                                <div className="text-3xl font-bold gradient-text mb-2">Q4 2026</div>
                                <div className="text-sm text-muted-foreground">Break-even</div>
                            </div>
                            <div>
                                <div className="text-3xl font-bold gradient-text mb-2">50</div>
                                <div className="text-sm text-muted-foreground">Institutions needed</div>
                            </div>
                            <div>
                                <div className="text-3xl font-bold gradient-text mb-2">$1.25M</div>
                                <div className="text-sm text-muted-foreground">ARR at break-even</div>
                            </div>
                            <div>
                                <div className="text-3xl font-bold gradient-text mb-2">3.5x</div>
                                <div className="text-sm text-muted-foreground">LTV/CAC ratio</div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* GTM Strategy */}
            <section className="py-20 bg-gradient-to-b from-background to-teal-50/30 dark:to-teal-950/10">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-4xl font-bold mb-4">
                            Go-To-Market <span className="gradient-text">Strategy</span>
                        </h2>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                            Phased approach with clear milestones
                        </p>
                    </motion.div>

                    <div className="space-y-8 max-w-4xl mx-auto">
                        {[
                            {
                                phase: "Phase 1: Pilot Universities (Q1-Q2 2026)",
                                target: "5-10 top-50 US research universities",
                                motion: "Inside sales + warm intros",
                                cycle: "6-month sales cycle",
                                metrics: "500 active users, $125K ARR",
                            },
                            {
                                phase: "Phase 2: Journal Partnerships (Q3-Q4 2026)",
                                target: "Partner with 3-5 mid-tier journals",
                                motion: "Co-marketing, integrated workflows",
                                cycle: "9-month partnership cycle",
                                metrics: "2,000 users, $500K ARR",
                            },
                            {
                                phase: "Phase 3: Platform Expansion (2027)",
                                target: "Top 200 universities + international",
                                motion: "Outbound SDR team + channel partners",
                                cycle: "3-month sales cycle (proven model)",
                                metrics: "10,000 users, $2.5M ARR",
                            },
                        ].map((phase, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="glass rounded-xl p-6 hover:shadow-xl transition-all duration-300"
                            >
                                <div className="flex items-start space-x-4">
                                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-800 to-teal-600 flex items-center justify-center flex-shrink-0 text-white font-bold">
                                        {index + 1}
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-xl font-bold mb-3">{phase.phase}</h3>
                                        <div className="grid md:grid-cols-2 gap-4">
                                            <div>
                                                <div className="text-sm text-muted-foreground mb-1">Target</div>
                                                <div className="font-semibold">{phase.target}</div>
                                            </div>
                                            <div>
                                                <div className="text-sm text-muted-foreground mb-1">Sales Motion</div>
                                                <div className="font-semibold">{phase.motion}</div>
                                            </div>
                                            <div>
                                                <div className="text-sm text-muted-foreground mb-1">Sales Cycle</div>
                                                <div className="font-semibold">{phase.cycle}</div>
                                            </div>
                                            <div>
                                                <div className="text-sm text-muted-foreground mb-1">Success Metrics</div>
                                                <div className="font-semibold text-teal-600 dark:text-teal-400">{phase.metrics}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mt-12 glass rounded-2xl p-8"
                    >
                        <h3 className="text-2xl font-bold mb-6 text-center">Who Signs Contracts?</h3>
                        <div className="grid md:grid-cols-3 gap-6">
                            <div className="text-center">
                                <div className="font-bold mb-2">Graduate School Deans</div>
                                <div className="text-sm text-muted-foreground">Budget authority for PhD programs</div>
                            </div>
                            <div className="text-center">
                                <div className="font-bold mb-2">Research VPs</div>
                                <div className="text-sm text-muted-foreground">University-wide research initiatives</div>
                            </div>
                            <div className="text-center">
                                <div className="font-bold mb-2">Department Chairs</div>
                                <div className="text-sm text-muted-foreground">Smaller, faster deals</div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Risks & Compliance */}
            <section className="py-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-4xl font-bold mb-4">
                            Risks & <span className="gradient-text">Compliance</span>
                        </h2>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                            Transparent about challenges and mitigation strategies
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        {[
                            {
                                risk: "Liability for Bad Reviews",
                                mitigation: "Reviewer quality validation by editors + insurance coverage. Platform is marketplace, not decision-maker.",
                                status: "Mitigated",
                            },
                            {
                                risk: "Influencing Acceptance Decisions",
                                mitigation: "We provide feedback, not acceptance. Final decisions remain with journals/editors. Clear ToS.",
                                status: "Structural",
                            },
                            {
                                risk: "COPE / Ethics Alignment",
                                mitigation: "Advisory board includes COPE members. Blind review enforced. Conflict-of-interest checks automated.",
                                status: "Compliant",
                            },
                            {
                                risk: "Reviewer Burnout / Quality",
                                mitigation: "Compensation + reputation system incentivizes quality. Editor validation layer catches issues.",
                                status: "Monitored",
                            },
                            {
                                risk: "Data Privacy (GDPR/FERPA)",
                                mitigation: "SOC 2 Type II in progress. Data residency options. Anonymization by default.",
                                status: "In Progress",
                            },
                            {
                                risk: "Incumbent Retaliation",
                                mitigation: "Complementary to journals, not competitive. Partnership model reduces threat.",
                                status: "Strategic",
                            },
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="glass rounded-xl p-6 hover:shadow-xl transition-all duration-300"
                            >
                                <div className="flex items-start space-x-3 mb-3">
                                    <AlertTriangle className="w-5 h-5 text-orange-600 dark:text-orange-400 mt-0.5 flex-shrink-0" />
                                    <h3 className="text-lg font-bold">{item.risk}</h3>
                                </div>
                                <p className="text-sm text-muted-foreground mb-3">{item.mitigation}</p>
                                <div className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${item.status === "Mitigated" || item.status === "Compliant"
                                        ? "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400"
                                        : item.status === "In Progress"
                                            ? "bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400"
                                            : "bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400"
                                    }`}>
                                    {item.status}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Use of Funds */}
            <section id="investment" className="py-20 bg-gradient-to-b from-background to-blue-50/30 dark:to-blue-950/10">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-4xl font-bold mb-4">
                            Use of <span className="gradient-text">Funds</span>
                        </h2>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                            $2M seed round to reach break-even and Series A readiness
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                        {[
                            { category: "Engineering", amount: "$800K", percent: "40%", detail: "4 engineers, 18 months" },
                            { category: "Sales & Marketing", amount: "$500K", percent: "25%", detail: "2 SDRs, demand gen" },
                            { category: "Operations", amount: "$400K", percent: "20%", detail: "Compliance, support" },
                            { category: "Runway Buffer", amount: "$300K", percent: "15%", detail: "24-month runway" },
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="glass rounded-xl p-6 text-center hover:shadow-xl transition-all duration-300"
                            >
                                <div className="text-3xl font-bold gradient-text mb-2">{item.amount}</div>
                                <div className="text-sm font-semibold mb-1">{item.category}</div>
                                <div className="text-xs text-muted-foreground mb-2">{item.percent}</div>
                                <div className="text-xs text-muted-foreground">{item.detail}</div>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="glass rounded-3xl p-12 text-center max-w-4xl mx-auto"
                    >
                        <Rocket className="w-16 h-16 mx-auto mb-6 text-blue-600 dark:text-blue-400" />
                        <h2 className="text-4xl font-bold mb-4">
                            What $2M Unlocks
                        </h2>
                        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                            18-24 month runway to reach $1.25M ARR, 50 institutions, and Series A readiness
                        </p>

                        <div className="grid md:grid-cols-3 gap-6 mb-8">
                            <div className="p-6 bg-blue-50 dark:bg-blue-950/20 rounded-xl">
                                <div className="text-3xl font-bold gradient-text mb-2">$2M</div>
                                <div className="text-sm text-muted-foreground">Seed Round</div>
                            </div>
                            <div className="p-6 bg-teal-50 dark:bg-teal-950/20 rounded-xl">
                                <div className="text-3xl font-bold gradient-text mb-2">18-24mo</div>
                                <div className="text-sm text-muted-foreground">Runway to Break-Even</div>
                            </div>
                            <div className="p-6 bg-slate-50 dark:bg-slate-950/20 rounded-xl">
                                <div className="text-3xl font-bold gradient-text mb-2">$10-15M</div>
                                <div className="text-sm text-muted-foreground">Series A Target</div>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href="mailto:investors@paperpublishiq.com"
                                className="px-8 py-4 bg-gradient-to-r from-blue-800 to-teal-600 text-white rounded-lg font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300"
                            >
                                Request Full Deck
                            </a>
                            <Link
                                href="/"
                                className="px-8 py-4 glass rounded-lg font-semibold hover:bg-primary/10 transition-all duration-300"
                            >
                                View Product Demo
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-8 border-t border-border">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        <div className="flex items-center space-x-2">
                            <div className="w-8 h-8 bg-gradient-to-br from-blue-800 to-teal-600 rounded-lg flex items-center justify-center">
                                <span className="text-white font-bold">P</span>
                            </div>
                            <span className="font-bold gradient-text">PaperPublishIQ</span>
                        </div>
                        <p className="text-sm text-muted-foreground">
                            © 2026 PaperPublishIQ. Confidential - For Investor Use Only
                        </p>
                        <Link href="/" className="text-sm text-primary hover:underline">
                            Back to Main Site
                        </Link>
                    </div>
                </div>
            </footer>
        </div>
    );
}
