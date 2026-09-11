'use client';

import React, { useState, useEffect } from 'react';

type TabId = 'code' | 'logs' | 'metrics';

interface LogEntry {
    time: string;
    level: string;
    source: string;
    msg: string;
}

const sampleLogs: LogEntry[] = [
    { time: '02:30:11.204', level: 'INFO', source: 'webhook.ingest', msg: 'POST /telemetry/v2/stream -> 200 OK (0.8ms)' },
    { time: '02:30:11.412', level: 'DEBUG', source: 'dedup.filter', msg: 'Deduplicated event payload [hash=9f82c1] -> clean' },
    { time: '02:30:11.602', level: 'INFO', source: 'kafka.producer', msg: 'Published to topic "telemetry-raw" [p=3, off=48921]' },
    { time: '02:30:11.884', level: 'INFO', source: 'otel.tracer', msg: 'Trace exported spanId="7c91a0" p99=188ms' },
    { time: '02:30:12.110', level: 'WARN', source: 'signal.detect', msg: 'Camera #1482 signal anomaly detected -> ticket #8491 created' },
    { time: '02:30:12.350', level: 'INFO', source: 'kafka.replay', msg: 'Automated event replay boundary verified -> 0 drops' },
];

const HeroTerminal: React.FC = () => {
    const [activeTab, setActiveTab] = useState<TabId>('code');
    const [eventCount, setEventCount] = useState(486);
    const [copied, setCopied] = useState(false);
    const [isPulsing, setIsPulsing] = useState(false);
    const [logs, setLogs] = useState<LogEntry[]>(sampleLogs);

    // Live counter ticker
    useEffect(() => {
        const timer = setInterval(() => {
            setEventCount((prev) => prev + Math.floor(Math.random() * 3) + 1);
        }, 2200);
        return () => clearInterval(timer);
    }, []);

    const handleCopy = () => {
        const codeSnippet = `import { KafkaProducer, TelemetryIngest } from '@intangles/core';
import { OpenTelemetry } from '@opentelemetry/api';

export const telemetryPipeline = new TelemetryIngest({
    throughput: '500_events_per_min',
    durabilityBoundary: 'kafka_publish_first',
    activeDevices: 3000,
    tracing: OpenTelemetry.getTracer('telematics-service'),
});`;
        navigator.clipboard?.writeText(codeSnippet);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const handleSimulate = () => {
        setIsPulsing(true);
        setEventCount((prev) => prev + 10);
        const now = new Date().toTimeString().split(' ')[0] + '.' + Math.floor(Math.random() * 900 + 100);
        setLogs((prev) => [
            {
                time: now,
                level: 'INFO',
                source: 'webhook.manual',
                msg: `Simulated external event batch dispatched -> partition ${Math.floor(Math.random() * 6)}`,
            },
            ...prev.slice(0, 5),
        ]);
        setTimeout(() => setIsPulsing(false), 600);
    };

    return (
        <div className="w-full max-w-lg lg:max-w-xl">
            {/* Terminal Window Frame */}
            <div
                className={`card rounded-2xl overflow-hidden border shadow-2xl transition-all duration-300 ${
                    isPulsing ? 'ring-2 ring-[var(--accent)] shadow-[0_0_25px_rgba(var(--accent-rgb),0.3)]' : ''
                }`}
                style={{
                    backgroundColor: 'var(--bg-card)',
                    borderColor: 'var(--border)',
                }}
            >
                {/* Window Title Bar */}
                <div
                    className="px-4 py-3 flex items-center justify-between border-b"
                    style={{
                        backgroundColor: 'var(--bg-muted)',
                        borderColor: 'var(--border)',
                    }}
                >
                    {/* macOS colored dots */}
                    <div className="flex items-center gap-2">
                        <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                        <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                        <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                        <span
                            className="ml-2 text-xs font-mono font-semibold truncate hidden sm:inline"
                            style={{ color: 'var(--text-muted)' }}
                        >
                            harshit@sde ~ telemetry-pipeline.ts
                        </span>
                    </div>

                    {/* Live status badge */}
                    <div className="flex items-center gap-2">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" style={{ backgroundColor: 'var(--accent)' }} />
                            <span className="relative inline-flex rounded-full h-2 w-2" style={{ backgroundColor: 'var(--accent)' }} />
                        </span>
                        <span className="text-[11px] font-mono font-bold tracking-wider" style={{ color: 'var(--accent)' }}>
                            LIVE STREAM
                        </span>
                    </div>
                </div>

                {/* Tabs bar */}
                <div
                    className="px-3 pt-2 flex items-center justify-between border-b text-xs font-mono"
                    style={{
                        backgroundColor: 'var(--bg-card)',
                        borderColor: 'var(--border)',
                    }}
                >
                    <div className="flex gap-1">
                        <button
                            onClick={() => setActiveTab('code')}
                            className="px-3 py-1.5 rounded-t-lg font-medium transition cursor-pointer border-b-2"
                            style={{
                                color: activeTab === 'code' ? 'var(--accent)' : 'var(--text-muted)',
                                borderColor: activeTab === 'code' ? 'var(--accent)' : 'transparent',
                                backgroundColor: activeTab === 'code' ? 'rgba(var(--accent-rgb), 0.08)' : 'transparent',
                            }}
                        >
                            TelemetryPipeline.ts
                        </button>
                        <button
                            onClick={() => setActiveTab('logs')}
                            className="px-3 py-1.5 rounded-t-lg font-medium transition cursor-pointer border-b-2 flex items-center gap-1.5"
                            style={{
                                color: activeTab === 'logs' ? 'var(--accent)' : 'var(--text-muted)',
                                borderColor: activeTab === 'logs' ? 'var(--accent)' : 'transparent',
                                backgroundColor: activeTab === 'logs' ? 'rgba(var(--accent-rgb), 0.08)' : 'transparent',
                            }}
                        >
                            <span>KafkaLogs.live</span>
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                        </button>
                        <button
                            onClick={() => setActiveTab('metrics')}
                            className="px-3 py-1.5 rounded-t-lg font-medium transition cursor-pointer border-b-2 hidden sm:inline"
                            style={{
                                color: activeTab === 'metrics' ? 'var(--accent)' : 'var(--text-muted)',
                                borderColor: activeTab === 'metrics' ? 'var(--accent)' : 'transparent',
                                backgroundColor: activeTab === 'metrics' ? 'rgba(var(--accent-rgb), 0.08)' : 'transparent',
                            }}
                        >
                            Observability.otel
                        </button>
                    </div>

                    {/* Action buttons */}
                    <div className="flex items-center gap-2 pb-1.5">
                        <button
                            onClick={handleSimulate}
                            className="text-[11px] px-2.5 py-1 rounded-md border font-semibold transition hover:scale-105 active:scale-95 cursor-pointer"
                            style={{
                                backgroundColor: 'rgba(var(--accent-rgb), 0.1)',
                                borderColor: 'var(--accent)',
                                color: 'var(--accent)',
                            }}
                            title="Simulate high-frequency telemetry event"
                        >
                            ⚡ Emit Event
                        </button>
                        <button
                            onClick={handleCopy}
                            className="text-[11px] px-2 py-1 rounded-md border transition hover:opacity-80 cursor-pointer"
                            style={{
                                backgroundColor: 'var(--bg-muted)',
                                borderColor: 'var(--border)',
                                color: 'var(--text-muted)',
                            }}
                            title="Copy code snippet"
                        >
                            {copied ? '✓ Copied' : 'Copy'}
                        </button>
                    </div>
                </div>

                {/* Tab Content Panel */}
                <div className="p-5 font-mono text-xs leading-relaxed min-h-[240px] flex flex-col justify-between">
                    {activeTab === 'code' && (
                        <div className="space-y-1.5" style={{ color: 'var(--text-secondary)' }}>
                            <p>
                                <span style={{ color: 'var(--accent)' }}>import</span> &#123; KafkaProducer, TelemetryIngest &#125; <span style={{ color: 'var(--accent)' }}>from</span> <span className="text-emerald-400">&apos;@intangles/core&apos;</span>;
                            </p>
                            <p>
                                <span style={{ color: 'var(--accent)' }}>import</span> &#123; OpenTelemetry &#125; <span style={{ color: 'var(--accent)' }}>from</span> <span className="text-emerald-400">&apos;@opentelemetry/api&apos;</span>;
                            </p>
                            <p className="opacity-40 py-1">{'// High-frequency webhook telemetry stream pipeline'}</p>
                            <p>
                                <span style={{ color: 'var(--accent)' }}>export const</span> telemetryPipeline = <span style={{ color: 'var(--accent)' }}>new</span> TelemetryIngest(&#123;
                            </p>
                            <p className="pl-4">
                                throughput: <span className="text-amber-400">&apos;500_events_per_min&apos;</span>,
                            </p>
                            <p className="pl-4">
                                durabilityBoundary: <span className="text-amber-400">&apos;kafka_publish_first&apos;</span>,
                            </p>
                            <p className="pl-4">
                                activeDevices: <span className="text-amber-400">3000</span>, <span className="opacity-40">{'// live camera streams'}</span>
                            </p>
                            <p className="pl-4">
                                replayFallback: <span className="text-cyan-400">true</span>, <span className="opacity-40">{'// zero-drop fault isolation'}</span>
                            </p>
                            <p className="pl-4">
                                tracing: OpenTelemetry.getTracer(<span className="text-emerald-400">&apos;telematics-service&apos;</span>),
                            </p>
                            <p>&#125;);</p>
                        </div>
                    )}

                    {activeTab === 'logs' && (
                        <div className="space-y-2">
                            {logs.map((log, i) => (
                                <div key={i} className="flex items-start gap-2 text-[11px]">
                                    <span className="opacity-40">{log.time}</span>
                                    <span
                                        className="px-1.5 py-0.2 rounded font-bold"
                                        style={{
                                            backgroundColor: log.level === 'WARN' ? 'rgba(245, 158, 11, 0.15)' : 'rgba(var(--accent-rgb), 0.15)',
                                            color: log.level === 'WARN' ? '#f59e0b' : 'var(--accent)',
                                        }}
                                    >
                                        {log.level}
                                    </span>
                                    <span className="font-semibold text-cyan-400">[{log.source}]</span>
                                    <span className="truncate" style={{ color: 'var(--text-secondary)' }}>{log.msg}</span>
                                </div>
                            ))}
                        </div>
                    )}

                    {activeTab === 'metrics' && (
                        <div className="grid grid-cols-2 gap-3">
                            <div className="p-3 rounded-xl border" style={{ backgroundColor: 'var(--bg-muted)', borderColor: 'var(--border)' }}>
                                <p className="text-[10px] uppercase font-semibold" style={{ color: 'var(--text-muted)' }}>Throughput</p>
                                <p className="text-lg font-bold mt-1" style={{ color: 'var(--accent)' }}>~500 ev/min</p>
                                <p className="text-[10px] opacity-60">High frequency webhook</p>
                            </div>
                            <div className="p-3 rounded-xl border" style={{ backgroundColor: 'var(--bg-muted)', borderColor: 'var(--border)' }}>
                                <p className="text-[10px] uppercase font-semibold" style={{ color: 'var(--text-muted)' }}>p99 Latency</p>
                                <p className="text-lg font-bold mt-1 text-emerald-400">198 ms</p>
                                <p className="text-[10px] opacity-60">Cut from 25s via Redis</p>
                            </div>
                            <div className="p-3 rounded-xl border" style={{ backgroundColor: 'var(--bg-muted)', borderColor: 'var(--border)' }}>
                                <p className="text-[10px] uppercase font-semibold" style={{ color: 'var(--text-muted)' }}>Connected Devices</p>
                                <p className="text-lg font-bold mt-1" style={{ color: 'var(--text)' }}>3,000+ Units</p>
                                <p className="text-[10px] opacity-60">Across 17 signal types</p>
                            </div>
                            <div className="p-3 rounded-xl border" style={{ backgroundColor: 'var(--bg-muted)', borderColor: 'var(--border)' }}>
                                <p className="text-[10px] uppercase font-semibold" style={{ color: 'var(--text-muted)' }}>Durability</p>
                                <p className="text-lg font-bold mt-1 text-cyan-400">Kafka 99.99%</p>
                                <p className="text-[10px] opacity-60">Publish-first async replay</p>
                            </div>
                        </div>
                    )}

                    {/* Bottom Status Bar */}
                    <div
                        className="mt-4 pt-3 border-t flex flex-wrap items-center justify-between gap-3 text-[11px]"
                        style={{ borderColor: 'var(--border)' }}
                    >
                        <div className="flex items-center gap-3 flex-wrap">
                            <span className="flex items-center gap-1.5 font-medium">
                                <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block" />
                                <span>Health: <strong>OPTIMAL</strong></span>
                            </span>
                            <span className="font-mono">
                                Events Streamed: <strong style={{ color: 'var(--accent)' }}>{eventCount.toLocaleString()}</strong>
                            </span>
                        </div>
                        <span className="font-mono text-[10px] px-2 py-0.5 rounded" style={{ backgroundColor: 'rgba(var(--accent-rgb), 0.1)', color: 'var(--accent)' }}>
                            OpenTelemetry Active
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroTerminal;
