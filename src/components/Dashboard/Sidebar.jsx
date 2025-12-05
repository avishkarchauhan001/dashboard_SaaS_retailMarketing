import React from 'react';

const Sidebar = () => {
    const menuItems = [
        { icon: '🏠', label: 'Home', active: true },
        { icon: '📢', label: 'Campaigns' },
        { icon: '🛣️', label: 'Journeys' },
        { icon: '👥', label: 'Segments' },
        { icon: '🎁', label: 'Offers' },
        { icon: '📊', label: 'Analytics' },
        { icon: '⚙️', label: 'Settings' },
    ];

    return (
        <aside className="sidebar">
            <div style={{ marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <div style={{ width: '32px', height: '32px', background: 'var(--gradient-primary)', borderRadius: '8px' }}></div>
                <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold', margin: 0 }}>Xeno</h1>
            </div>

            <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {menuItems.map((item, index) => (
                    <button
                        key={index}
                        className="btn"
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '1rem',
                            justifyContent: 'flex-start',
                            background: item.active ? 'rgba(99, 102, 241, 0.1)' : 'transparent',
                            color: item.active ? 'var(--color-accent-primary)' : 'var(--color-text-secondary)',
                            border: item.active ? '1px solid rgba(99, 102, 241, 0.2)' : 'none',
                        }}
                    >
                        <span>{item.icon}</span>
                        {item.label}
                    </button>
                ))}
            </nav>
        </aside>
    );
};

export default Sidebar;
