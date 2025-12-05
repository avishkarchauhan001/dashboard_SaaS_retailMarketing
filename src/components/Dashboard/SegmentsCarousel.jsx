import React from 'react';
import { segments } from '../../data/mockData';

const SegmentsCarousel = () => {
    return (
        <div className="card" style={{ gridColumn: 'span 4' }}>
            <div className="flex justify-between items-center" style={{ marginBottom: '1.5rem' }}>
                <h3 className="text-lg font-bold">Top Segments</h3>
                <button className="text-sm text-gradient" style={{ background: 'none', border: 'none', cursor: 'pointer' }}>View All</button>
            </div>

            <div className="flex flex-col gap-md">
                {segments.map((segment) => (
                    <div key={segment.id} style={{ padding: '1rem', background: 'rgba(255,255,255,0.02)', borderRadius: '0.5rem', border: '1px solid rgba(255,255,255,0.05)' }}>
                        <div className="flex justify-between items-start" style={{ marginBottom: '0.5rem' }}>
                            <div className="font-bold">{segment.name}</div>
                            <span className={`text-sm ${segment.trend === 'up' ? 'text-success' : segment.trend === 'down' ? 'text-danger' : 'text-secondary'}`}>
                                {segment.trend === 'up' ? '↗' : segment.trend === 'down' ? '↘' : '→'}
                            </span>
                        </div>

                        <div className="flex justify-between items-end">
                            <div>
                                <div className="text-2xl font-bold">{segment.count}</div>
                                <div className="text-sm text-secondary">Users</div>
                            </div>
                            <div className="text-right">
                                <div className="text-sm font-bold text-success">{segment.revenuePerUser}</div>
                                <div className="text-sm text-secondary">Rev/User</div>
                            </div>
                        </div>

                        <button className="btn btn-primary" style={{ width: '100%', marginTop: '1rem', padding: '0.5rem' }}>
                            Send Now
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SegmentsCarousel;
