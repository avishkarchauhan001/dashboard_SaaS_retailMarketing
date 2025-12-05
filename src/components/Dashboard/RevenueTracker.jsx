import React from 'react';
import { revenueData } from '../../data/mockData';

const RevenueTracker = () => {
    const { total, period, breakdown, target } = revenueData;

    // Calculate percentage of target (mock calculation)
    const currentVal = parseFloat(total.replace(/[^\d.]/g, ''));
    const targetVal = parseFloat(target.replace(/[^\d.]/g, ''));
    const progress = (currentVal / targetVal) * 100;

    return (
        <div className="card" style={{ gridColumn: 'span 4' }}>
            <div className="flex justify-between items-center" style={{ marginBottom: '1.5rem' }}>
                <h3 className="text-lg font-bold">Revenue Impact</h3>
                <select style={{ background: 'transparent', color: 'var(--color-text-secondary)', border: 'none', cursor: 'pointer' }}>
                    <option>{period}</option>
                    <option>Last Week</option>
                    <option>This Month</option>
                </select>
            </div>

            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                <div className="text-3xl font-bold text-gradient">{total}</div>
                <div className="text-sm text-secondary">Attributed Revenue</div>
            </div>

            <div style={{ marginBottom: '2rem' }}>
                <div className="flex justify-between text-sm text-secondary" style={{ marginBottom: '0.5rem' }}>
                    <span>Progress</span>
                    <span>{Math.round(progress)}% of {target}</span>
                </div>
                <div style={{ height: '8px', background: 'var(--color-bg-secondary)', borderRadius: '4px', overflow: 'hidden' }}>
                    <div style={{ width: `${progress}%`, height: '100%', background: 'var(--gradient-primary)', borderRadius: '4px' }}></div>
                </div>
            </div>

            <div className="flex flex-col gap-md">
                {breakdown.map((item, index) => (
                    <div key={index} className="flex justify-between items-center">
                        <div className="flex items-center gap-sm">
                            <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: index === 0 ? 'var(--color-accent-primary)' : index === 1 ? 'var(--color-accent-secondary)' : 'var(--color-text-secondary)' }}></div>
                            <span className="text-sm">{item.label}</span>
                        </div>
                        <div className="text-sm font-bold">{item.value} ({item.percentage}%)</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RevenueTracker;
