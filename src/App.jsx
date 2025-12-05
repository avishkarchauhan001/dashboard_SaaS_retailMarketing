import React from 'react';
import Sidebar from './components/Dashboard/Sidebar';
import Dashboard from './components/Dashboard/Dashboard';

function App() {
  return (
    <div className="dashboard-container">
      <Sidebar />
      <main className="main-content">
        <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
          <div>
            <h2 className="text-2xl font-bold">Good Morning, Avishkar 👋</h2>
            <p className="text-secondary">Here's what's happening in your account today.</p>
          </div>
          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
            <div style={{ position: 'relative' }}>
              <input
                type="text"
                placeholder="Search campaigns, customers..."
                style={{
                  background: 'var(--color-bg-secondary)',
                  border: '1px solid var(--border-color)',
                  borderRadius: '2rem',
                  padding: '0.5rem 1rem 0.5rem 2.5rem',
                  color: 'var(--color-text-primary)',
                  width: '300px',
                  outline: 'none'
                }}
              />
              <span style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', opacity: 0.5 }}>🔍</span>
            </div>
            <button className="btn btn-outline">Help</button>
            <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'var(--color-bg-secondary)', border: '1px solid var(--border-color)' }}></div>
          </div>
        </header>

        <Dashboard />
      </main>
    </div>
  );
}

export default App;
