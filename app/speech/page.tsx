"use client";

import { useState, useEffect } from "react";
import { Play, Pause, RotateCcw, Settings } from "lucide-react";

export default function SpeechPage() {
    const [isPlaying, setIsPlaying] = useState(false);
    const [speed, setSpeed] = useState(30); // pixels per second
    const [fontSize, setFontSize] = useState(24);
    const [position, setPosition] = useState(0);

    useEffect(() => {
        let interval: NodeJS.Timeout;
        if (isPlaying) {
            interval = setInterval(() => {
                setPosition((prev) => prev + 1);
            }, 1000 / speed);
        }
        return () => clearInterval(interval);
    }, [isPlaying, speed]);

    const resetPosition = () => {
        setPosition(0);
        setIsPlaying(false);
    };

    const speechContent = `
[OPENING - 30 seconds]

Good morning. I'm here to talk about a $2.4 billion dollar problem that's costing PhD students their careers... and we have the solution.

Academic publishing is broken. Let me show you exactly how broken.

[THE PROBLEM - 60 seconds]

Right now, if you're a PhD student trying to publish your research, you're looking at a 6 to 9 month wait. That's not just frustrating... that's twelve thousand dollars in delayed graduation costs. Per student.

But it gets worse.

Forty percent of peer review requests are being declined. Reviewers are burned out. The ones who DO review? They're giving low-quality feedback because they're not compensated. The result? A sixty percent rejection rate.

Students are going through three to five revision cycles before acceptance. They have ZERO structured mentorship. And journals? They're drowning in fraud and plagiarism... ten thousand retractions every single year.

This isn't a small problem. This is a crisis affecting eight point eight million researchers worldwide.

[WHO PAYS VS WHO USES - 45 seconds]

Now, here's what makes this interesting. We have a very clear customer segmentation.

Who PAYS? Institutions. Specifically, funded PhD programs at top research universities. They're paying five thousand to fifty thousand dollars per year because delayed publications hurt their rankings and their funding.

Who USES? Five distinct groups. PhD scholars submit papers. Mentors provide paid guidance. Peer reviewers get compensated for quality work. Editors make final decisions. And institutions manage the entire ecosystem.

Our wedge customer? The top fifty US research universities with funded PhD programs. They have the budget. They have the pain. And they're ready to pay.

[WHY NOW - 45 seconds]

Three things are converging right now that make this the perfect time.

First, AI maturity. Plagiarism detection is now ninety-five percent accurate. Large language models can pre-screen for structure and quality. AI-text detection prevents fraud. This technology is available NOW.

Second, the review crisis has hit peak urgency. Reviewer acceptance rates have dropped from sixty percent to forty percent. Average review time has increased forty percent since twenty-twenty. Journals are desperate for solutions.

Third, funding pressure. Universities need publication metrics for rankings. PhD programs are judged on time-to-degree. The willingness to pay for efficiency has never been higher.

[TRACTION - 45 seconds]

We're not just talking about this. We have real traction.

Five pilot institutions have signed letters of intent. We have twelve hundred researchers on our waitlist. Forty-five PhD-level mentors are already onboarded. And we've reviewed one hundred twenty papers in our private beta with a four point seven out of five rating.

We're in active discussions with three top-fifty US universities. Our advisory board includes two former journal editors and one university dean. This isn't vaporware. This is happening.

[DEFENSIBILITY - 60 seconds]

Now, you might be thinking... "Can't Elsevier or Springer just do this?"

No. And here's why.

We're building four compounding moats that get stronger over time.

First, our reviewer reputation graph. Quality scores compound. Trusted reviewers get more work, earn more money, and lock into our platform.

Second, institutional trust workflows. Compliance, audit trails, role-based access control... these take six to twelve months to build per institution. The switching cost increases with every use.

Third, longitudinal data. We're collecting paper-to-author-to-reviewer-to-outcome data that creates predictive models our competitors simply cannot match. This data advantage grows exponentially.

Fourth, journal integration pipelines. We support custom export formats for five hundred plus journals. That's two-plus years of engineering work.

Why won't incumbents do this? Elsevier and Springer are protecting ten billion dollars in journal subscription revenue. ResearchGate has no review workflow. And AI startups lack institutional trust and compliance.

[UNIT ECONOMICS - 60 seconds]

Let's talk numbers.

Our institutional customer acquisition cost is eight thousand dollars with a six-month sales cycle. Individual CAC is forty-five dollars through organic and paid channels. Payback period? Eight to twelve months.

Revenue: Average institutional contract is twenty-five thousand dollars annually for fifty users. Our gross margin is seventy percent after mentor and reviewer payouts. We take an eighteen percent platform fee on the mentor marketplace.

Costs: Review cost per paper is one hundred twenty dollars... that's two reviewers at sixty dollars each. Mentor sessions cost eighty dollars, we keep twenty. Infrastructure is three dollars per user per month.

Path to profitability? We break even in Q4 twenty-twenty-six with fifty institutions and one point two five million in ARR. Our lifetime value to CAC ratio is three point five X.

[GO-TO-MARKET - 45 seconds]

Our go-to-market strategy is phased and proven.

Phase one: Q1 to Q2 twenty-twenty-six. Five to ten pilot universities. Inside sales plus warm introductions. Six-month sales cycle. Target: five hundred active users, one hundred twenty-five thousand in ARR.

Phase two: Q3 to Q4 twenty-twenty-six. Partner with three to five mid-tier journals. Co-marketing and integrated workflows. Nine-month partnership cycle. Target: two thousand users, five hundred thousand in ARR.

Phase three: Twenty-twenty-seven. Expand to top two hundred universities plus international. Outbound SDR team and channel partners. Three-month sales cycle with our proven model. Target: ten thousand users, two point five million in ARR.

Who signs the contracts? Graduate school deans with budget authority. Research VPs for university-wide initiatives. And department chairs for smaller, faster deals.

[RISKS - 45 seconds]

Let's be transparent about risks.

Liability for bad reviews? We're a marketplace, not a decision-maker. We have insurance coverage and editor validation.

Are we influencing acceptance decisions? No. We provide feedback. Journals and editors make final decisions. It's in our terms of service.

COPE and ethics alignment? Our advisory board includes COPE members. Blind review is enforced. Conflict-of-interest checks are automated.

Data privacy? SOC 2 Type II certification is in progress. We offer data residency options. Anonymization by default.

Incumbent retaliation? We're complementary to journals, not competitive. Our partnership model reduces the threat.

[USE OF FUNDS - 45 seconds]

We're raising a two million dollar seed round. Here's exactly what it unlocks.

Eight hundred thousand for engineering. That's four engineers for eighteen months.

Five hundred thousand for sales and marketing. Two SDRs plus demand generation.

Four hundred thousand for operations. Compliance and support infrastructure.

Three hundred thousand runway buffer. That gives us twenty-four months total.

What does two million dollars buy you? Eighteen to twenty-four month runway to reach one point two five million in ARR, fifty institutions, and Series A readiness. Our Series A target is ten to fifteen million dollars.

[CLOSING - 30 seconds]

Academic publishing is broken. Eight point eight million researchers are suffering. Universities are paying the price in rankings and funding.

We have the solution. We have early traction. We have defensible moats. And we have a clear path to profitability.

The market is two point four billion dollars. We're capturing it one institution at a time.

We're raising two million dollars to reach break-even and Series A readiness.

Who's ready to join us?

[END]

---

PRONUNCIATION GUIDE:
- ARR: A-R-R (Annual Recurring Revenue)
- CAC: C-A-C (Customer Acquisition Cost)
- COPE: C-O-P-E (Committee on Publication Ethics)
- SOC 2: S-O-C Two (Service Organization Control)
- PhD: P-H-D (Doctor of Philosophy)
- SDR: S-D-R (Sales Development Representative)
- LTV: L-T-V (Lifetime Value)
- API: A-P-I (Application Programming Interface)

TIMING GUIDE:
- Total speech: ~8-10 minutes
- Speak at 120-140 words per minute
- Pause after each section
- Make eye contact during key numbers
- Slow down for important statistics

EMPHASIS POINTS:
- "$2.4 billion" - pause after
- "6 to 9 months" - emphasize the pain
- "60% rejection rate" - let it sink in
- "Five pilot institutions" - show momentum
- "70% gross margin" - strong economics
- "Break even Q4 2026" - clear path
`;

    return (
        <div className="min-h-screen bg-gray-950 text-white">
            {/* Control Panel */}
            <div className="fixed top-0 left-0 right-0 bg-gray-900 border-b border-gray-700 p-4 z-50">
                <div className="container mx-auto flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                        <button
                            onClick={() => setIsPlaying(!isPlaying)}
                            className="p-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
                        >
                            {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6" />}
                        </button>
                        <button
                            onClick={resetPosition}
                            className="p-3 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors"
                        >
                            <RotateCcw className="w-6 h-6" />
                        </button>
                    </div>

                    <div className="flex items-center space-x-6">
                        <div className="flex items-center space-x-2">
                            <Settings className="w-5 h-5 text-gray-300" />
                            <label className="text-sm text-gray-300">Speed:</label>
                            <input
                                type="range"
                                min="10"
                                max="60"
                                value={speed}
                                onChange={(e) => setSpeed(Number(e.target.value))}
                                className="w-32"
                            />
                            <span className="text-sm text-gray-300 w-12">{speed}px/s</span>
                        </div>

                        <div className="flex items-center space-x-2">
                            <label className="text-sm text-gray-300">Font:</label>
                            <input
                                type="range"
                                min="16"
                                max="48"
                                value={fontSize}
                                onChange={(e) => setFontSize(Number(e.target.value))}
                                className="w-32"
                            />
                            <span className="text-sm text-gray-300 w-12">{fontSize}px</span>
                        </div>
                    </div>

                    <div className="text-sm text-gray-300 font-semibold">
                        Teleprompter Mode
                    </div>
                </div>
            </div>

            {/* Reading Area with Center Line */}
            <div className="fixed top-1/2 left-0 right-0 h-1 bg-green-500 opacity-70 z-40 pointer-events-none" />

            {/* Speech Content */}
            <div className="pt-24 pb-screen min-h-screen">
                <div
                    className="container mx-auto px-8 max-w-4xl transition-transform duration-100"
                    style={{
                        transform: `translateY(${-position}px)`,
                        paddingTop: "50vh",
                        paddingBottom: "50vh",
                    }}
                >
                    <div
                        className="leading-relaxed whitespace-pre-wrap text-white"
                        style={{
                            fontSize: `${fontSize}px`,
                            fontFamily: 'system-ui, -apple-system, sans-serif',
                            lineHeight: '1.8'
                        }}
                    >
                        {speechContent}
                    </div>
                </div>
            </div>

            {/* Instructions Overlay (shows when paused) */}
            {!isPlaying && position === 0 && (
                <div className="fixed inset-0 bg-gray-950 bg-opacity-95 flex items-center justify-center z-50">
                    <div className="bg-gray-900 border-2 border-gray-700 rounded-2xl p-12 max-w-2xl text-center">
                        <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-teal-400 to-blue-500 bg-clip-text text-transparent">
                            Investor Pitch Teleprompter
                        </h1>
                        <div className="space-y-4 text-left text-lg text-gray-200">
                            <p>✅ <strong className="text-white">Press Play</strong> to start scrolling</p>
                            <p>✅ <strong className="text-white">Adjust Speed</strong> to match your speaking pace</p>
                            <p>✅ <strong className="text-white">Green Line</strong> shows your reading position</p>
                            <p>✅ <strong className="text-white">Pause</strong> anytime to review</p>
                            <p>✅ <strong className="text-white">Reset</strong> to start over</p>
                        </div>
                        <div className="mt-8 p-4 bg-blue-900/40 border border-blue-700 rounded-lg">
                            <p className="text-sm text-blue-200">
                                💡 <strong>Pro Tip:</strong> Practice 3-5 times before your actual pitch. Aim for 8-10 minutes total.
                            </p>
                        </div>
                        <button
                            onClick={() => setIsPlaying(true)}
                            className="mt-8 px-8 py-4 bg-gradient-to-r from-blue-600 to-teal-600 text-white rounded-lg font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2 mx-auto"
                        >
                            <Play className="w-6 h-6" />
                            <span>Start Practicing</span>
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
