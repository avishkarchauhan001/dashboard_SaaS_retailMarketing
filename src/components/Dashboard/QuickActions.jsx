import React from 'react';

const QuickActions = () => {
    const actions = [
        { label: 'New Offer', icon: '🎁', color: 'var(--color-accent-primary)' },
        { label: 'Launch Campaign', icon: '🚀', color: 'var(--color-success)' },
        { label: 'Build Journey', icon: '🛣️', color: 'var(--color-warning)' },
        { label: 'New Segment', icon: '👥', color: 'var(--color-info)' },
        { label: 'Analytics', icon: '📊', color: 'var(--color-accent-secondary)' },
    ];

    return (
        <div style={{ position: 'fixed', bottom: '2rem', right: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'flex-end', zIndex: 100 }}>
            {/* Floating Action Button (FAB) or Bar */}
            <div className="card" style={{ padding: '0.5rem', display: 'flex', gap: '0.5rem', borderRadius: '2rem', boxShadow: 'var(--shadow-lg)', border: '1px solid rgba(255,255,255,0.1)' }}>
                {actions.map((action, index) => (
                    <button
                        key={index}
                        className="btn"
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: '80px',
                            height: '80px',
                            background: 'transparent',
                            border: 'none',
                            gap: '0.25rem',
                            color: 'var(--color-text-primary)'
                        }}
                        title={action.label}
                    >
                        <div style={{
                            width: '40px',
                            height: '40px',
                            borderRadius: '50%',
                            background: `linear-gradient(135deg, ${action.color}, rgba(255,255,255,0.1))`,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '1.25rem',
                            boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
                        }}>
                            {action.icon}
                        </div>
                        <span style={{ fontSize: '0.75rem', fontWeight: '600' }}>{action.label}</span>
                    </button>
                ))}
            </div>
        </div>
    );
};

export default QuickActions;
