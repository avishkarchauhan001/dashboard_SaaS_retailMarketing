import React from 'react';
import { campaigns } from '../../data/mockData';

const CampaignGrid = () => {
    return (
        <div className="card" style={{ gridColumn: 'span 8' }}>
            <div className="flex justify-between items-center" style={{ marginBottom: '1.5rem' }}>
                <h3 className="text-lg font-bold">Active Campaigns & Journeys</h3>
                <div className="flex gap-sm">
                    <button className="btn btn-outline text-sm">All</button>
                    <button className="btn btn-outline text-sm">WhatsApp</button>
                    <button className="btn btn-outline text-sm">Email</button>
                </div>
            </div>

            <div className="flex flex-col gap-md">
                {campaigns.map((campaign) => (
                    <div key={campaign.id} style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr 1.5fr', alignItems: 'center', padding: '1rem', background: 'rgba(255,255,255,0.02)', borderRadius: '0.5rem', border: '1px solid rgba(255,255,255,0.05)' }}>
                        <div className="flex items-center gap-md">
                            <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: 'var(--color-bg-secondary)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                {campaign.channel === 'WhatsApp' ? '💬' : campaign.channel === 'Email' ? '📧' : campaign.channel === 'SMS' ? '📱' : '🔔'}
                            </div>
                            <div>
                                <div className="font-bold">{campaign.name}</div>
                                <div className="text-sm text-secondary">{campaign.channel}</div>
                            </div>
                        </div>

                        <div>
                            <div className="text-sm text-secondary">Status</div>
                            <div className={`text-sm ${campaign.status === 'Live' ? 'text-success' : 'text-warning'}`}>● {campaign.status}</div>
                        </div>

                        <div>
                            <div className="text-sm text-secondary">Conv.</div>
                            <div className="font-bold">{campaign.conversions}</div>
                        </div>

                        <div>
                            <div className="text-sm text-secondary">Revenue</div>
                            <div className="font-bold">{campaign.revenue}</div>
                        </div>

                        <div className="flex gap-sm justify-end">
                            <button className="btn btn-outline text-sm" style={{ padding: '0.25rem 0.5rem' }}>Edit</button>
                            <button className="btn btn-outline text-sm" style={{ padding: '0.25rem 0.5rem' }}>Pause</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CampaignGrid;
