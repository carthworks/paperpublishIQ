"use client";

import { useState, useEffect, useRef } from "react";
import {
    Play,
    Pause,
    RotateCcw,
    Settings,
    Maximize,
    Minimize,
    ChevronUp,
    ChevronDown,
    Volume2,
    VolumeX,
    Monitor,
    Smartphone,
} from "lucide-react";

interface TeleprompterProps {
    content: string;
    title?: string;
    defaultSpeed?: number;
    defaultFontSize?: number;
}

export default function Teleprompter({
    content,
    title = "Teleprompter",
    defaultSpeed = 30,
    defaultFontSize = 24,
}: TeleprompterProps) {
    const [isPlaying, setIsPlaying] = useState(false);
    const [speed, setSpeed] = useState(defaultSpeed);
    const [fontSize, setFontSize] = useState(defaultFontSize);
    const [position, setPosition] = useState(0);
    const [isFullscreen, setIsFullscreen] = useState(false);
    const [showControls, setShowControls] = useState(true);
    const [isMirrored, setIsMirrored] = useState(false);
    const [showSettings, setShowSettings] = useState(false);
    const [countdown, setCountdown] = useState<number | null>(null);
    const [elapsedTime, setElapsedTime] = useState(0);
    const [keepAwake, setKeepAwake] = useState(true);

    const containerRef = useRef<HTMLDivElement>(null);
    const wakeLockRef = useRef<any>(null);

    // Auto-scroll logic
    useEffect(() => {
        let interval: NodeJS.Timeout;
        if (isPlaying) {
            interval = setInterval(() => {
                setPosition((prev) => prev + 1);
            }, 1000 / speed);
        }
        return () => clearInterval(interval);
    }, [isPlaying, speed]);

    // Elapsed time tracker
    useEffect(() => {
        let interval: NodeJS.Timeout;
        if (isPlaying) {
            interval = setInterval(() => {
                setElapsedTime((prev) => prev + 1);
            }, 1000);
        }
        return () => clearInterval(interval);
    }, [isPlaying]);

    // Countdown timer
    useEffect(() => {
        if (countdown !== null && countdown > 0) {
            const timer = setTimeout(() => {
                setCountdown(countdown - 1);
            }, 1000);
            return () => clearTimeout(timer);
        } else if (countdown === 0) {
            setCountdown(null);
            setIsPlaying(true);
        }
    }, [countdown]);

    // Keyboard shortcuts
    useEffect(() => {
        const handleKeyPress = (e: KeyboardEvent) => {
            if (e.code === "Space") {
                e.preventDefault();
                setIsPlaying((prev) => !prev);
            } else if (e.code === "ArrowUp") {
                e.preventDefault();
                setSpeed((prev) => Math.min(prev + 5, 100));
            } else if (e.code === "ArrowDown") {
                e.preventDefault();
                setSpeed((prev) => Math.max(prev - 5, 5));
            } else if (e.code === "KeyR") {
                e.preventDefault();
                resetPosition();
            } else if (e.code === "KeyF") {
                e.preventDefault();
                toggleFullscreen();
            } else if (e.code === "KeyM") {
                e.preventDefault();
                setIsMirrored((prev) => !prev);
            } else if (e.code === "KeyC") {
                e.preventDefault();
                setShowControls((prev) => !prev);
            }
        };

        window.addEventListener("keydown", handleKeyPress);
        return () => window.removeEventListener("keydown", handleKeyPress);
    }, []);

    // Wake Lock API to keep screen on
    useEffect(() => {
        const requestWakeLock = async () => {
            if ("wakeLock" in navigator && keepAwake) {
                try {
                    wakeLockRef.current = await (navigator as any).wakeLock.request("screen");
                } catch (err) {
                    console.log("Wake Lock error:", err);
                }
            }
        };

        requestWakeLock();

        return () => {
            if (wakeLockRef.current) {
                wakeLockRef.current.release();
            }
        };
    }, [keepAwake]);

    const resetPosition = () => {
        setPosition(0);
        setIsPlaying(false);
        setElapsedTime(0);
    };

    const toggleFullscreen = () => {
        if (!document.fullscreenElement) {
            containerRef.current?.requestFullscreen();
            setIsFullscreen(true);
        } else {
            document.exitFullscreen();
            setIsFullscreen(false);
        }
    };

    const startCountdown = (seconds: number) => {
        setCountdown(seconds);
        setIsPlaying(false);
    };

    const formatTime = (seconds: number) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins}:${secs.toString().padStart(2, "0")}`;
    };

    const adjustSpeed = (delta: number) => {
        setSpeed((prev) => Math.max(5, Math.min(100, prev + delta)));
    };

    const adjustFontSize = (delta: number) => {
        setFontSize((prev) => Math.max(12, Math.min(72, prev + delta)));
    };

    return (
        <div
            ref={containerRef}
            className="min-h-screen bg-gray-950 text-white relative"
            style={{ transform: isMirrored ? "scaleX(-1)" : "none" }}
        >
            {/* Countdown Overlay */}
            {countdown !== null && (
                <div className="fixed inset-0 bg-gray-950 bg-opacity-95 flex items-center justify-center z-[100]">
                    <div className="text-center">
                        <div className="text-9xl font-bold text-blue-400 mb-4 animate-pulse">
                            {countdown}
                        </div>
                        <div className="text-2xl text-gray-400">Get ready...</div>
                    </div>
                </div>
            )}

            {/* Control Panel */}
            {showControls && (
                <div className="fixed top-0 left-0 right-0 bg-gray-900/95 backdrop-blur-sm border-b border-gray-700 p-3 md:p-4 z-50 transition-all duration-300">
                    <div className="container mx-auto">
                        {/* Mobile Layout */}
                        <div className="md:hidden space-y-3">
                            {/* Row 1: Main Controls */}
                            <div className="flex items-center justify-between">
                                <div className="flex items-center space-x-2">
                                    <button
                                        onClick={() => setIsPlaying(!isPlaying)}
                                        className="p-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
                                    >
                                        {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
                                    </button>
                                    <button
                                        onClick={resetPosition}
                                        className="p-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors"
                                    >
                                        <RotateCcw className="w-5 h-5" />
                                    </button>
                                </div>

                                <div className="text-sm text-gray-300 font-mono">
                                    {formatTime(elapsedTime)}
                                </div>

                                <button
                                    onClick={() => setShowSettings(!showSettings)}
                                    className="p-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors"
                                >
                                    <Settings className="w-5 h-5" />
                                </button>
                            </div>

                            {/* Row 2: Speed & Font Controls (when settings open) */}
                            {showSettings && (
                                <div className="grid grid-cols-2 gap-2">
                                    <div className="bg-gray-800 rounded-lg p-2">
                                        <div className="text-xs text-gray-400 mb-1">Speed</div>
                                        <div className="flex items-center justify-between">
                                            <button
                                                onClick={() => adjustSpeed(-5)}
                                                className="p-1 bg-gray-700 rounded"
                                            >
                                                <ChevronDown className="w-4 h-4" />
                                            </button>
                                            <span className="text-sm font-mono">{speed}</span>
                                            <button
                                                onClick={() => adjustSpeed(5)}
                                                className="p-1 bg-gray-700 rounded"
                                            >
                                                <ChevronUp className="w-4 h-4" />
                                            </button>
                                        </div>
                                    </div>

                                    <div className="bg-gray-800 rounded-lg p-2">
                                        <div className="text-xs text-gray-400 mb-1">Font</div>
                                        <div className="flex items-center justify-between">
                                            <button
                                                onClick={() => adjustFontSize(-2)}
                                                className="p-1 bg-gray-700 rounded"
                                            >
                                                <ChevronDown className="w-4 h-4" />
                                            </button>
                                            <span className="text-sm font-mono">{fontSize}</span>
                                            <button
                                                onClick={() => adjustFontSize(2)}
                                                className="p-1 bg-gray-700 rounded"
                                            >
                                                <ChevronUp className="w-4 h-4" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Desktop Layout */}
                        <div className="hidden md:flex items-center justify-between">
                            {/* Left: Playback Controls */}
                            <div className="flex items-center space-x-3">
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
                                <div className="flex space-x-1">
                                    <button
                                        onClick={() => startCountdown(3)}
                                        className="px-3 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg text-sm transition-colors"
                                    >
                                        3s
                                    </button>
                                    <button
                                        onClick={() => startCountdown(5)}
                                        className="px-3 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg text-sm transition-colors"
                                    >
                                        5s
                                    </button>
                                </div>
                            </div>

                            {/* Center: Speed & Font Controls */}
                            <div className="flex items-center space-x-6">
                                <div className="flex items-center space-x-2">
                                    <Settings className="w-5 h-5 text-gray-300" />
                                    <label className="text-sm text-gray-300">Speed:</label>
                                    <input
                                        type="range"
                                        min="5"
                                        max="100"
                                        value={speed}
                                        onChange={(e) => setSpeed(Number(e.target.value))}
                                        className="w-32"
                                    />
                                    <span className="text-sm text-gray-300 w-12 font-mono">{speed}</span>
                                </div>

                                <div className="flex items-center space-x-2">
                                    <label className="text-sm text-gray-300">Font:</label>
                                    <input
                                        type="range"
                                        min="12"
                                        max="72"
                                        value={fontSize}
                                        onChange={(e) => setFontSize(Number(e.target.value))}
                                        className="w-32"
                                    />
                                    <span className="text-sm text-gray-300 w-12 font-mono">{fontSize}px</span>
                                </div>
                            </div>

                            {/* Right: Utility Controls */}
                            <div className="flex items-center space-x-2">
                                <div className="text-sm text-gray-300 font-mono mr-2">
                                    {formatTime(elapsedTime)}
                                </div>
                                <button
                                    onClick={() => setIsMirrored(!isMirrored)}
                                    className={`p-2 rounded-lg transition-colors ${isMirrored ? "bg-blue-600" : "bg-gray-700 hover:bg-gray-600"
                                        }`}
                                    title="Mirror (for teleprompter glass)"
                                >
                                    <Monitor className="w-5 h-5" />
                                </button>
                                <button
                                    onClick={toggleFullscreen}
                                    className="p-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors"
                                    title="Fullscreen (F)"
                                >
                                    {isFullscreen ? (
                                        <Minimize className="w-5 h-5" />
                                    ) : (
                                        <Maximize className="w-5 h-5" />
                                    )}
                                </button>
                                <button
                                    onClick={() => setShowControls(false)}
                                    className="p-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors"
                                    title="Hide controls (C)"
                                >
                                    <ChevronUp className="w-5 h-5" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Show Controls Button (when hidden) */}
            {!showControls && (
                <button
                    onClick={() => setShowControls(true)}
                    className="fixed top-4 right-4 p-3 bg-gray-900/80 hover:bg-gray-800 rounded-lg transition-colors z-50"
                >
                    <ChevronDown className="w-6 h-6" />
                </button>
            )}

            {/* Reading Area with Center Line */}
            <div className="fixed top-1/2 left-0 right-0 h-1 bg-green-500 opacity-70 z-40 pointer-events-none" />

            {/* Speech Content */}
            <div className={`${showControls ? "pt-24 md:pt-20" : "pt-12"} pb-screen min-h-screen`}>
                <div
                    className="container mx-auto px-4 md:px-8 max-w-4xl transition-transform duration-100"
                    style={{
                        transform: `translateY(${-position}px)`,
                        paddingTop: "50vh",
                        paddingBottom: "50vh",
                    }}
                >
                    <div
                        className="leading-relaxed whitespace-pre-wrap text-white select-none"
                        style={{
                            fontSize: `${fontSize}px`,
                            fontFamily: "system-ui, -apple-system, sans-serif",
                            lineHeight: "1.8",
                            textAlign: "left",
                        }}
                    >
                        {content}
                    </div>
                </div>
            </div>

            {/* Keyboard Shortcuts Help (Desktop only) */}
            {!isPlaying && position === 0 && (
                <div className="hidden md:block fixed bottom-4 right-4 bg-gray-900/90 border border-gray-700 rounded-lg p-4 text-xs text-gray-400 z-50">
                    <div className="font-semibold text-gray-300 mb-2">Keyboard Shortcuts</div>
                    <div className="space-y-1">
                        <div><kbd className="bg-gray-800 px-2 py-1 rounded">Space</kbd> Play/Pause</div>
                        <div><kbd className="bg-gray-800 px-2 py-1 rounded">↑/↓</kbd> Speed</div>
                        <div><kbd className="bg-gray-800 px-2 py-1 rounded">R</kbd> Reset</div>
                        <div><kbd className="bg-gray-800 px-2 py-1 rounded">F</kbd> Fullscreen</div>
                        <div><kbd className="bg-gray-800 px-2 py-1 rounded">M</kbd> Mirror</div>
                        <div><kbd className="bg-gray-800 px-2 py-1 rounded">C</kbd> Hide Controls</div>
                    </div>
                </div>
            )}

            {/* Instructions Overlay (shows when paused at start) */}
            {!isPlaying && position === 0 && (
                <div className="fixed inset-0 bg-gray-950 bg-opacity-95 flex items-center justify-center z-50 p-4">
                    <div className="bg-gray-900 border-2 border-gray-700 rounded-2xl p-6 md:p-12 max-w-2xl text-center">
                        <h1 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-teal-400 to-blue-500 bg-clip-text text-transparent">
                            {title}
                        </h1>
                        <div className="space-y-3 md:space-y-4 text-left text-base md:text-lg text-gray-200">
                            <p>✅ <strong className="text-white">Press Play</strong> or <kbd className="bg-gray-800 px-2 py-1 rounded text-sm">Space</kbd> to start</p>
                            <p>✅ <strong className="text-white">Adjust Speed</strong> to match your pace</p>
                            <p>✅ <strong className="text-white">Green Line</strong> shows reading position</p>
                            <p>✅ <strong className="text-white">Countdown</strong> gives you prep time</p>
                            <p className="hidden md:block">✅ <strong className="text-white">Mirror Mode</strong> for teleprompter glass</p>
                        </div>
                        <div className="mt-6 md:mt-8 p-4 bg-blue-900/40 border border-blue-700 rounded-lg">
                            <p className="text-sm text-blue-200">
                                💡 <strong>Pro Tip:</strong> Use countdown timer to get into position. Practice 3-5 times for best results.
                            </p>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-3 mt-6 md:mt-8">
                            <button
                                onClick={() => setIsPlaying(true)}
                                className="flex-1 px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-blue-600 to-teal-600 text-white rounded-lg font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2"
                            >
                                <Play className="w-5 h-5 md:w-6 md:h-6" />
                                <span>Start Now</span>
                            </button>
                            <button
                                onClick={() => startCountdown(5)}
                                className="flex-1 px-6 md:px-8 py-3 md:py-4 bg-gray-700 hover:bg-gray-600 text-white rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2"
                            >
                                <span>5s Countdown</span>
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
