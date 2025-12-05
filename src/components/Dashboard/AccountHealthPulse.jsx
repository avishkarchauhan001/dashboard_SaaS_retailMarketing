import React from 'react';
import { accountHealth } from '../../data/mockData';

const AccountHealthPulse = () => {
    const { score, trend, metrics } = accountHealth;

    // Determine color based on score
    const scoreColor = score >= 80 ? 'var(--color-success)' : score >= 60 ? 'var(--color-warning)' : 'var(--color-danger)';

    return (
        <div className="card" style={{ gridColumn: 'span 8', display: 'flex', gap: '2rem', alignItems: 'center' }}>
            <div style={{ position: 'relative', width: '120px', height: '120px', flexShrink: 0 }}>
                <svg viewBox="0 0 36 36" style={{ width: '100%', height: '100%', transform: 'rotate(-90deg)' }}>
                    <path
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                        fill="none"
                        stroke="var(--color-bg-secondary)"
                        strokeWidth="3"
                    />
                    <path
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                        fill="none"
                        stroke={scoreColor}
                        strokeWidth="3"
                        strokeDasharray={`${score}, 100`}
                        style={{ transition: 'stroke-dasharray 1s ease' }}
                    />
                </svg>
                <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center' }}>
                    <div className="text-2xl font-bold">{score}</div>
                    <div className="text-sm text-secondary">Health</div>
                </div>
            </div>

            <div style={{ flex: 1 }}>
                <div className="flex justify-between items-center" style={{ marginBottom: '1rem' }}>
                    <h3 className="text-lg font-bold">Account Health Pulse</h3>
                    <span className="text-success flex items-center gap-sm" style={{ background: 'rgba(16, 185, 129, 0.1)', padding: '0.25rem 0.5rem', borderRadius: '1rem' }}>
                        ▲ {trend}% WoW
                    </span>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem' }}>
                    {metrics.map((metric, index) => (
                        <div key={index} style={{ background: 'rgba(255,255,255,0.03)', padding: '0.75rem', borderRadius: '0.5rem' }}>
                            <div className="text-sm text-secondary" style={{ marginBottom: '0.25rem' }}>{metric.label}</div>
                            <div className="font-bold flex items-center gap-sm">
                                {metric.value}
                                <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: metric.status === 'good' ? 'var(--color-success)' : 'var(--color-warning)' }}></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AccountHealthPulse;
