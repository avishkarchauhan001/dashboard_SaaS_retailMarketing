import React from 'react';
import AccountHealthPulse from './AccountHealthPulse';
import LiveTicker from './LiveTicker';
import CampaignGrid from './CampaignGrid';
import SegmentsCarousel from './SegmentsCarousel';
import RevenueTracker from './RevenueTracker';
import QuickActions from './QuickActions';

const Dashboard = () => {
    return (
        <div className="dashboard-grid" style={{ paddingBottom: '6rem' }}>
            <AccountHealthPulse />
            <RevenueTracker />
            <LiveTicker />
            <CampaignGrid />
            <SegmentsCarousel />
            <QuickActions />
        </div>
    );
};

export default Dashboard;
