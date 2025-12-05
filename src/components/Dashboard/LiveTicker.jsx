import React from 'react';
import { alerts } from '../../data/mockData';

const LiveTicker = () => {
    return (
        <div className="card" style={{ gridColumn: 'span 12', padding: '0.75rem 1.5rem', display: 'flex', alignItems: 'center', gap: '1rem', overflow: 'hidden' }}>
            <div className="flex items-center gap-sm" style={{ color: 'var(--color-danger)', fontWeight: 'bold', whiteSpace: 'nowrap' }}>
                <span style={{ position: 'relative', display: 'flex', height: '10px', width: '10px' }}>
                    <span style={{ position: 'absolute', display: 'inline-flex', height: '100%', width: '100%', borderRadius: '50%', background: 'var(--color-danger)', opacity: 0.75, animation: 'ping 1s cubic-bezier(0, 0, 0.2, 1) infinite' }}></span>
                    <span style={{ position: 'relative', display: 'inline-flex', borderRadius: '50%', height: '10px', width: '10px', background: 'var(--color-danger)' }}></span>
                </span>
                LIVE ALERTS
            </div>

            <div style={{ flex: 1, overflow: 'hidden', position: 'relative' }}>
                <div style={{ display: 'flex', gap: '2rem', animation: 'ticker 30s linear infinite' }}>
                    {[...alerts, ...alerts].map((alert, index) => (
                        <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', whiteSpace: 'nowrap' }}>
                            <span className={`text-${alert.type === 'urgent' ? 'danger' : alert.type === 'opportunity' ? 'success' : 'info'}`}>
                                [{alert.type.toUpperCase()}]
                            </span>
                            <span className="text-secondary">{alert.message}</span>
                            <button className="text-sm text-gradient" style={{ background: 'none', border: 'none', cursor: 'pointer', textDecoration: 'underline' }}>
                                {alert.action}
                            </button>
                        </div>
                    ))}
                </div>
            </div>

            <style>{`
        @keyframes ping {
          75%, 100% { transform: scale(2); opacity: 0; }
        }
        @keyframes ticker {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
        </div>
    );
};

export default LiveTicker;
