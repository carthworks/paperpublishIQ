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
} from "lucide-react";
import Link from "next/link";

const marketStats = [
    { label: "Global Academic Publishing Market", value: "$28.1B", growth: "+5.2% CAGR" },
    { label: "Research Papers Published Annually", value: "3M+", growth: "Growing" },
    { label: "Active Researchers Worldwide", value: "8.8M", growth: "+3% YoY" },
    { label: "Target Addressable Market", value: "$2.4B", growth: "By 2028" },
];

const revenueStreams = [
    {
        icon: Users,
        title: "Institutional Subscriptions",
        description: "Tiered pricing for universities and research institutions",
        revenue: "60% of total revenue",
        color: "from-blue-600 to-blue-800",
    },
    {
        icon: DollarSign,
        title: "Mentor Marketplace",
        description: "15-20% platform fee on paid mentoring sessions",
        revenue: "25% of total revenue",
        color: "from-teal-600 to-teal-800",
    },
    {
        icon: Award,
        title: "Premium Features",
        description: "Advanced analytics, priority review, expedited processing",
        revenue: "10% of total revenue",
        color: "from-slate-600 to-slate-800",
    },
    {
        icon: Globe,
        title: "API & Integrations",
        description: "Enterprise API access for journal publishers",
        revenue: "5% of total revenue",
        color: "from-blue-700 to-teal-700",
    },
];

const competitiveAdvantages = [
    "End-to-end workflow automation",
    "Ethical AI-powered screening",
    "Transparent incentive system",
    "Blind peer review guarantee",
    "Multi-journal export formats",
    "Institutional-grade security",
    "Scalable cloud architecture",
    "Comprehensive audit trails",
];

const milestones = [
    { quarter: "Q1 2026", title: "MVP Launch", status: "In Progress", items: ["Core platform", "5 pilot institutions", "100 beta users"] },
    { quarter: "Q2 2026", title: "Market Validation", status: "Planned", items: ["500+ active users", "20 institutions", "First revenue"] },
    { quarter: "Q3 2026", title: "Scale & Growth", status: "Planned", items: ["2,000+ users", "50 institutions", "Break-even"] },
    { quarter: "Q4 2026", title: "Expansion", status: "Planned", items: ["5,000+ users", "100 institutions", "Profitability"] },
];

const teamHighlights = [
    { role: "Academic Expertise", description: "PhD-level advisors from top universities" },
    { role: "Tech Leadership", description: "20+ years combined in EdTech & SaaS" },
    { role: "Publishing Experience", description: "Former editors from major journals" },
    { role: "AI/ML Specialists", description: "Experts in NLP and plagiarism detection" },
];

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
                        <div className="inline-flex items-center space-x-2 px-4 py-2 bg-blue-100 dark:bg-blue-900/30 rounded-full mb-6">
                            <Rocket className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                            <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
                                Investment Opportunity
                            </span>
                        </div>

                        <h1 className="text-5xl sm:text-6xl font-bold mb-6">
                            Transforming Academic <span className="gradient-text">Publishing</span>
                        </h1>

                        <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                            PaperPublishIQ is revolutionizing research paper submission and peer review with AI-powered automation, ethical incentives, and institutional-grade security.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="#investment"
                                className="px-8 py-4 bg-gradient-to-r from-blue-800 to-teal-600 text-white rounded-lg font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2"
                            >
                                <span>View Investment Details</span>
                                <ArrowRight className="w-5 h-5" />
                            </Link>
                            <Link
                                href="#contact"
                                className="px-8 py-4 glass rounded-lg font-semibold hover:bg-primary/10 transition-all duration-300 text-center"
                            >
                                Schedule a Meeting
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Market Opportunity */}
            <section className="py-20 bg-gradient-to-b from-background to-slate-50/30 dark:to-slate-950/10">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-4xl font-bold mb-4">
                            Massive <span className="gradient-text">Market Opportunity</span>
                        </h2>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                            The academic publishing industry is ripe for disruption with growing demand for efficient, transparent peer review systems.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {marketStats.map((stat, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="glass rounded-xl p-6 hover:shadow-xl transition-all duration-300"
                            >
                                <div className="text-3xl font-bold gradient-text mb-2">{stat.value}</div>
                                <div className="text-sm font-medium mb-2">{stat.label}</div>
                                <div className="text-xs text-teal-600 dark:text-teal-400 flex items-center">
                                    <TrendingUp className="w-3 h-3 mr-1" />
                                    {stat.growth}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Platform Showcase - Vertical Slider */}
            <section className="py-20 bg-gradient-to-b from-slate-50/30 to-background dark:from-slate-950/10 dark:to-background overflow-hidden">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-4xl font-bold mb-4">
                            Platform <span className="gradient-text">Showcase</span>
                        </h2>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                            Experience our intuitive interface designed for researchers, mentors, and reviewers.
                        </p>
                    </motion.div>

                    {/* Vertical Slider Container */}
                    <div className="relative max-w-4xl mx-auto">
                        <div className="glass rounded-2xl p-4 overflow-hidden" style={{ height: '600px' }}>
                            {/* Slider Track - Infinite Vertical Scroll */}
                            <div className="relative h-full overflow-hidden">
                                <motion.div
                                    className="flex flex-col space-y-4"
                                    animate={{
                                        y: [0, -1200],
                                    }}
                                    transition={{
                                        y: {
                                            repeat: Infinity,
                                            repeatType: "loop",
                                            duration: 30,
                                            ease: "linear",
                                            // delay: 1,
                                            // repeatDelay: 1

                                        },
                                    }}
                                >
                                    {/* Duplicate images for seamless loop */}
                                    {[1, 2, 3, 4].map((index) => (
                                        <div key={index} className="flex-shrink-0">
                                            <img
                                                src="/slider-images.png"
                                                alt={`Platform screenshot ${index}`}
                                                className="w-full rounded-xl shadow-2xl"
                                            />
                                        </div>
                                    ))}
                                </motion.div>

                                {/* Gradient Overlays for fade effect */}
                                <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-background/80 to-transparent pointer-events-none z-10" />
                                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background/80 to-transparent pointer-events-none z-10" />
                            </div>
                        </div>

                        {/* Feature Badges */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                            <div className="glass rounded-lg p-4 text-center">
                                <div className="text-2xl font-bold gradient-text mb-1">AI-Powered</div>
                                <div className="text-xs text-muted-foreground">Automated Screening</div>
                            </div>
                            <div className="glass rounded-lg p-4 text-center">
                                <div className="text-2xl font-bold gradient-text mb-1">Secure</div>
                                <div className="text-xs text-muted-foreground">End-to-End Encryption</div>
                            </div>
                            <div className="glass rounded-lg p-4 text-center">
                                <div className="text-2xl font-bold gradient-text mb-1">Intuitive</div>
                                <div className="text-xs text-muted-foreground">User-Friendly Interface</div>
                            </div>
                            <div className="glass rounded-lg p-4 text-center">
                                <div className="text-2xl font-bold gradient-text mb-1">Scalable</div>
                                <div className="text-xs text-muted-foreground">Cloud Architecture</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Revenue Model */}
            <section className="py-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-4xl font-bold mb-4">
                            Diversified <span className="gradient-text">Revenue Streams</span>
                        </h2>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                            Multiple revenue channels ensure sustainable growth and reduced dependency on any single source.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {revenueStreams.map((stream, index) => {
                            const Icon = stream.icon;
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="glass rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 group"
                                >
                                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${stream.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                                        <Icon className="w-7 h-7 text-white" />
                                    </div>
                                    <h3 className="text-2xl font-bold mb-2">{stream.title}</h3>
                                    <p className="text-muted-foreground mb-4">{stream.description}</p>
                                    <div className="text-sm font-semibold text-teal-600 dark:text-teal-400">
                                        {stream.revenue}
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Subscription Pricing Model */}
            <section className="py-20 bg-gradient-to-b from-background to-slate-50/30 dark:to-slate-950/10">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-4xl font-bold mb-4">
                            Subscription <span className="gradient-text">Pricing Model</span>
                        </h2>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                            Flexible pricing tiers designed for individual researchers, students, and institutions.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
                        {/* Free Tier */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0 }}
                            className="glass rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-blue-200 dark:hover:border-blue-800"
                        >
                            <div className="text-sm font-semibold text-blue-600 dark:text-blue-400 mb-2">FREE</div>
                            <h3 className="text-3xl font-bold mb-2">$0</h3>
                            <p className="text-sm text-muted-foreground mb-6">Per month</p>

                            <ul className="space-y-3 mb-8">
                                <li className="flex items-start space-x-2 text-sm">
                                    <CheckCircle className="w-4 h-4 text-teal-600 dark:text-teal-400 mt-0.5 flex-shrink-0" />
                                    <span>1 paper submission per month</span>
                                </li>
                                <li className="flex items-start space-x-2 text-sm">
                                    <CheckCircle className="w-4 h-4 text-teal-600 dark:text-teal-400 mt-0.5 flex-shrink-0" />
                                    <span>Basic AI screening</span>
                                </li>
                                <li className="flex items-start space-x-2 text-sm">
                                    <CheckCircle className="w-4 h-4 text-teal-600 dark:text-teal-400 mt-0.5 flex-shrink-0" />
                                    <span>Community forum access</span>
                                </li>
                                <li className="flex items-start space-x-2 text-sm">
                                    <CheckCircle className="w-4 h-4 text-teal-600 dark:text-teal-400 mt-0.5 flex-shrink-0" />
                                    <span>Standard support</span>
                                </li>
                                <li className="flex items-start space-x-2 text-sm text-muted-foreground">
                                    <span className="w-4 h-4 mt-0.5">✗</span>
                                    <span>Mentor matching</span>
                                </li>
                            </ul>

                            <div className="text-center">
                                <div className="text-xs text-muted-foreground">Perfect for exploring</div>
                            </div>
                        </motion.div>

                        {/* Student Tier */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="glass rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-teal-200 dark:hover:border-teal-800"
                        >
                            <div className="text-sm font-semibold text-teal-600 dark:text-teal-400 mb-2">STUDENT</div>
                            <h3 className="text-3xl font-bold mb-2">$29</h3>
                            <p className="text-sm text-muted-foreground mb-6">Per month</p>

                            <ul className="space-y-3 mb-8">
                                <li className="flex items-start space-x-2 text-sm">
                                    <CheckCircle className="w-4 h-4 text-teal-600 dark:text-teal-400 mt-0.5 flex-shrink-0" />
                                    <span>5 paper submissions/month</span>
                                </li>
                                <li className="flex items-start space-x-2 text-sm">
                                    <CheckCircle className="w-4 h-4 text-teal-600 dark:text-teal-400 mt-0.5 flex-shrink-0" />
                                    <span>Advanced AI screening</span>
                                </li>
                                <li className="flex items-start space-x-2 text-sm">
                                    <CheckCircle className="w-4 h-4 text-teal-600 dark:text-teal-400 mt-0.5 flex-shrink-0" />
                                    <span>Mentor matching (2/month)</span>
                                </li>
                                <li className="flex items-start space-x-2 text-sm">
                                    <CheckCircle className="w-4 h-4 text-teal-600 dark:text-teal-400 mt-0.5 flex-shrink-0" />
                                    <span>Plagiarism detection</span>
                                </li>
                                <li className="flex items-start space-x-2 text-sm">
                                    <CheckCircle className="w-4 h-4 text-teal-600 dark:text-teal-400 mt-0.5 flex-shrink-0" />
                                    <span>Priority email support</span>
                                </li>
                            </ul>

                            <div className="text-center">
                                <div className="text-xs text-muted-foreground">Most popular for students</div>
                            </div>
                        </motion.div>

                        {/* Professional Tier */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="glass rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 border-2 border-blue-400 dark:border-blue-600 relative"
                        >
                            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-blue-800 to-teal-600 text-white text-xs font-bold rounded-full">
                                RECOMMENDED
                            </div>
                            <div className="text-sm font-semibold text-blue-600 dark:text-blue-400 mb-2">PROFESSIONAL</div>
                            <h3 className="text-3xl font-bold mb-2">$99</h3>
                            <p className="text-sm text-muted-foreground mb-6">Per month</p>

                            <ul className="space-y-3 mb-8">
                                <li className="flex items-start space-x-2 text-sm">
                                    <CheckCircle className="w-4 h-4 text-teal-600 dark:text-teal-400 mt-0.5 flex-shrink-0" />
                                    <span>Unlimited submissions</span>
                                </li>
                                <li className="flex items-start space-x-2 text-sm">
                                    <CheckCircle className="w-4 h-4 text-teal-600 dark:text-teal-400 mt-0.5 flex-shrink-0" />
                                    <span>Premium AI features</span>
                                </li>
                                <li className="flex items-start space-x-2 text-sm">
                                    <CheckCircle className="w-4 h-4 text-teal-600 dark:text-teal-400 mt-0.5 flex-shrink-0" />
                                    <span>Unlimited mentor sessions</span>
                                </li>
                                <li className="flex items-start space-x-2 text-sm">
                                    <CheckCircle className="w-4 h-4 text-teal-600 dark:text-teal-400 mt-0.5 flex-shrink-0" />
                                    <span>Priority peer review</span>
                                </li>
                                <li className="flex items-start space-x-2 text-sm">
                                    <CheckCircle className="w-4 h-4 text-teal-600 dark:text-teal-400 mt-0.5 flex-shrink-0" />
                                    <span>Advanced analytics</span>
                                </li>
                                <li className="flex items-start space-x-2 text-sm">
                                    <CheckCircle className="w-4 h-4 text-teal-600 dark:text-teal-400 mt-0.5 flex-shrink-0" />
                                    <span>24/7 priority support</span>
                                </li>
                            </ul>

                            <div className="text-center">
                                <div className="text-xs text-muted-foreground">Best for researchers</div>
                            </div>
                        </motion.div>

                        {/* Institutional Tier */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="glass rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-slate-200 dark:hover:border-slate-800"
                        >
                            <div className="text-sm font-semibold text-slate-600 dark:text-slate-400 mb-2">INSTITUTIONAL</div>
                            <h3 className="text-3xl font-bold mb-2">Custom</h3>
                            <p className="text-sm text-muted-foreground mb-6">Contact sales</p>

                            <ul className="space-y-3 mb-8">
                                <li className="flex items-start space-x-2 text-sm">
                                    <CheckCircle className="w-4 h-4 text-teal-600 dark:text-teal-400 mt-0.5 flex-shrink-0" />
                                    <span>Unlimited users</span>
                                </li>
                                <li className="flex items-start space-x-2 text-sm">
                                    <CheckCircle className="w-4 h-4 text-teal-600 dark:text-teal-400 mt-0.5 flex-shrink-0" />
                                    <span>White-label options</span>
                                </li>
                                <li className="flex items-start space-x-2 text-sm">
                                    <CheckCircle className="w-4 h-4 text-teal-600 dark:text-teal-400 mt-0.5 flex-shrink-0" />
                                    <span>Custom integrations</span>
                                </li>
                                <li className="flex items-start space-x-2 text-sm">
                                    <CheckCircle className="w-4 h-4 text-teal-600 dark:text-teal-400 mt-0.5 flex-shrink-0" />
                                    <span>Dedicated account manager</span>
                                </li>
                                <li className="flex items-start space-x-2 text-sm">
                                    <CheckCircle className="w-4 h-4 text-teal-600 dark:text-teal-400 mt-0.5 flex-shrink-0" />
                                    <span>API access</span>
                                </li>
                                <li className="flex items-start space-x-2 text-sm">
                                    <CheckCircle className="w-4 h-4 text-teal-600 dark:text-teal-400 mt-0.5 flex-shrink-0" />
                                    <span>SLA guarantee</span>
                                </li>
                            </ul>

                            <div className="text-center">
                                <div className="text-xs text-muted-foreground">For universities</div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Pricing Notes */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="mt-12 text-center max-w-3xl mx-auto"
                    >
                        <div className="glass rounded-xl p-6">
                            <p className="text-sm text-muted-foreground mb-4">
                                <strong>Annual billing:</strong> Save 20% with annual subscriptions
                            </p>
                            <div className="grid md:grid-cols-3 gap-4 text-xs text-muted-foreground">
                                <div>
                                    <strong>Student verification:</strong> Valid .edu email required
                                </div>
                                <div>
                                    <strong>Volume discounts:</strong> Available for 10+ users
                                </div>
                                <div>
                                    <strong>Free trial:</strong> 14-day trial on all paid plans
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Supported Journals */}
            <section className="py-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-4xl font-bold mb-4">
                            Supported <span className="gradient-text">Journals & Publishers</span>
                        </h2>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                            Export publication-ready papers to major academic journals and publishers worldwide.
                        </p>
                    </motion.div>

                    {/* Major Publishers */}
                    <div className="mb-12">
                        <h3 className="text-2xl font-bold text-center mb-8">Major Publishers</h3>
                        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
                            {[
                                { name: "Elsevier", journals: "2,500+ journals" },
                                { name: "Springer Nature", journals: "3,000+ journals" },
                                { name: "Wiley", journals: "1,700+ journals" },
                                { name: "IEEE", journals: "200+ journals" },
                                { name: "ACM", journals: "50+ journals" },
                            ].map((publisher, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="glass rounded-xl p-6 text-center hover:shadow-xl transition-all duration-300 group"
                                >
                                    <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-800 to-teal-600 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                                        <Globe className="w-8 h-8 text-white" />
                                    </div>
                                    <h4 className="font-bold mb-2">{publisher.name}</h4>
                                    <p className="text-xs text-muted-foreground">{publisher.journals}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Top Journals by Field */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                field: "Computer Science",
                                journals: [
                                    "IEEE Transactions on Pattern Analysis",
                                    "ACM Computing Surveys",
                                    "Nature Machine Intelligence",
                                    "Journal of Machine Learning Research",
                                ]
                            },
                            {
                                field: "Medicine & Health",
                                journals: [
                                    "The Lancet",
                                    "New England Journal of Medicine",
                                    "JAMA",
                                    "BMJ",
                                ]
                            },
                            {
                                field: "Engineering",
                                journals: [
                                    "Nature Engineering",
                                    "IEEE Transactions",
                                    "Applied Energy",
                                    "Engineering Structures",
                                ]
                            },
                            {
                                field: "Natural Sciences",
                                journals: [
                                    "Nature",
                                    "Science",
                                    "PNAS",
                                    "Cell",
                                ]
                            },
                            {
                                field: "Social Sciences",
                                journals: [
                                    "American Economic Review",
                                    "Psychological Science",
                                    "Journal of Finance",
                                    "Management Science",
                                ]
                            },
                            {
                                field: "Multidisciplinary",
                                journals: [
                                    "PLOS ONE",
                                    "Scientific Reports",
                                    "Royal Society Open Science",
                                    "Frontiers",
                                ]
                            },
                        ].map((category, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="glass rounded-xl p-6 hover:shadow-xl transition-all duration-300"
                            >
                                <h4 className="text-lg font-bold mb-4 gradient-text">{category.field}</h4>
                                <ul className="space-y-2">
                                    {category.journals.map((journal, jIndex) => (
                                        <li key={jIndex} className="flex items-start space-x-2 text-sm">
                                            <CheckCircle className="w-4 h-4 text-teal-600 dark:text-teal-400 mt-0.5 flex-shrink-0" />
                                            <span>{journal}</span>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>

                    {/* Export Formats */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 }}
                        className="mt-12 glass rounded-2xl p-8 text-center"
                    >
                        <h3 className="text-2xl font-bold mb-6">Supported Export Formats</h3>
                        <div className="grid md:grid-cols-4 gap-6">
                            {[
                                { format: "IEEE", description: "Conference & Journals" },
                                { format: "ACM", description: "SIG Proceedings" },
                                { format: "APA 7th", description: "Social Sciences" },
                                { format: "LaTeX", description: "Custom Templates" },
                            ].map((format, index) => (
                                <div key={index} className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg">
                                    <div className="font-bold mb-1">{format.format}</div>
                                    <div className="text-xs text-muted-foreground">{format.description}</div>
                                </div>
                            ))}
                        </div>
                        <p className="text-sm text-muted-foreground mt-6">
                            + Custom formatting for 500+ additional journals
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Competitive Advantages */}
            <section className="py-20 bg-gradient-to-b from-background to-blue-50/30 dark:to-blue-950/10">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-4xl font-bold mb-4">
                            Competitive <span className="gradient-text">Advantages</span>
                        </h2>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                            Our unique combination of technology, ethics, and user experience sets us apart in the market.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
                        {competitiveAdvantages.map((advantage, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 }}
                                className="flex items-center space-x-3 glass rounded-lg p-4 hover:bg-blue-50/50 dark:hover:bg-blue-950/20 transition-all duration-300"
                            >
                                <CheckCircle className="w-5 h-5 text-teal-600 dark:text-teal-400 flex-shrink-0" />
                                <span className="text-sm font-medium">{advantage}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Roadmap & Milestones */}
            <section className="py-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-4xl font-bold mb-4">
                            Growth <span className="gradient-text">Roadmap</span>
                        </h2>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                            Clear milestones and measurable targets for 2026 and beyond.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {milestones.map((milestone, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="glass rounded-xl p-6 hover:shadow-xl transition-all duration-300"
                            >
                                <div className="text-sm font-semibold text-blue-600 dark:text-blue-400 mb-2">
                                    {milestone.quarter}
                                </div>
                                <h3 className="text-xl font-bold mb-3">{milestone.title}</h3>
                                <div className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4 ${milestone.status === "In Progress"
                                    ? "bg-teal-100 dark:bg-teal-900/30 text-teal-700 dark:text-teal-400"
                                    : "bg-slate-100 dark:bg-slate-900/30 text-slate-700 dark:text-slate-400"
                                    }`}>
                                    {milestone.status}
                                </div>
                                <ul className="space-y-2">
                                    {milestone.items.map((item, i) => (
                                        <li key={i} className="flex items-start space-x-2 text-sm text-muted-foreground">
                                            <span className="text-teal-600 dark:text-teal-400 mt-0.5">•</span>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team Highlights */}
            <section className="py-20 bg-gradient-to-b from-background to-teal-50/30 dark:to-teal-950/10">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-4xl font-bold mb-4">
                            Experienced <span className="gradient-text">Team</span>
                        </h2>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                            A diverse team combining academic expertise, technical excellence, and industry experience.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {teamHighlights.map((team, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="glass rounded-xl p-6 text-center hover:shadow-xl transition-all duration-300"
                            >
                                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-800 to-teal-600 flex items-center justify-center mx-auto mb-4">
                                    <Users className="w-6 h-6 text-white" />
                                </div>
                                <h3 className="font-bold mb-2">{team.role}</h3>
                                <p className="text-sm text-muted-foreground">{team.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Investment CTA */}
            <section id="investment" className="py-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="glass rounded-3xl p-12 text-center max-w-4xl mx-auto"
                    >
                        <Rocket className="w-16 h-16 mx-auto mb-6 text-blue-600 dark:text-blue-400" />
                        <h2 className="text-4xl font-bold mb-4">
                            Join Us in Transforming Academic Publishing
                        </h2>
                        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                            We're seeking strategic investors to scale our platform and capture the $2.4B market opportunity.
                        </p>

                        <div className="grid md:grid-cols-3 gap-6 mb-8">
                            <div className="p-6 bg-blue-50 dark:bg-blue-950/20 rounded-xl">
                                <div className="text-3xl font-bold gradient-text mb-2">$2M</div>
                                <div className="text-sm text-muted-foreground">Seed Round Target</div>
                            </div>
                            <div className="p-6 bg-teal-50 dark:bg-teal-950/20 rounded-xl">
                                <div className="text-3xl font-bold gradient-text mb-2">18-24mo</div>
                                <div className="text-sm text-muted-foreground">Runway</div>
                            </div>
                            <div className="p-6 bg-slate-50 dark:bg-slate-950/20 rounded-xl">
                                <div className="text-3xl font-bold gradient-text mb-2">$50M</div>
                                <div className="text-sm text-muted-foreground">5-Year Valuation Target</div>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href="mailto:investors@paperpublishiq.com"
                                className="px-8 py-4 bg-gradient-to-r from-blue-800 to-teal-600 text-white rounded-lg font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300"
                            >
                                Request Investor Deck
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
                            © 2026 PaperPublishIQ. All rights reserved.
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
