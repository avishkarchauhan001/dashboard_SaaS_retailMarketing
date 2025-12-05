export const accountHealth = {
  score: 87,
  trend: 12, // +12% WoW
  metrics: [
    { label: 'Revenue Impact', value: 'High', status: 'good' },
    { label: 'Active Campaigns', value: '14', status: 'good' },
    { label: 'Engagement Rate', value: '4.2%', status: 'warning' },
    { label: 'Loyalty Redemptions', value: '850', status: 'good' },
  ],
};

export const alerts = [
  { id: 1, type: 'urgent', message: 'Campaign "Summer Sale" underperforming: 23% below target', action: 'Pause' },
  { id: 2, type: 'urgent', message: 'Budget 85% spent on SMS for "Flash Deal"', action: 'Boost' },
  { id: 3, type: 'opportunity', message: 'High-value segment ready: 15% uplift potential', action: 'Retarget' },
  { id: 4, type: 'info', message: 'New "Diwali Special" templates available', action: 'View' },
];

export const campaigns = [
  { id: 1, name: 'Summer Sale Blast', channel: 'WhatsApp', status: 'Live', conversions: 120, revenue: '₹45k', trend: 'up' },
  { id: 2, name: 'Cart Recovery', channel: 'SMS', status: 'Live', conversions: 85, revenue: '₹12k', trend: 'stable' },
  { id: 3, name: 'VIP Exclusive', channel: 'Email', status: 'Pausing', conversions: 340, revenue: '₹1.2L', trend: 'down' },
  { id: 4, name: 'App Push Promo', channel: 'Push', status: 'Live', conversions: 50, revenue: '₹5k', trend: 'up' },
  { id: 5, name: 'Loyalty Reminder', channel: 'RCS', status: 'Live', conversions: 210, revenue: '₹80k', trend: 'up' },
];

export const segments = [
  { id: 1, name: 'Churn Risk', count: '2.4K', revenuePerUser: '₹120', trend: 'down' },
  { id: 2, name: 'VIP Loyal', count: '1.2K', revenuePerUser: '₹4,500', trend: 'up' },
  { id: 3, name: 'Big Spenders', count: '850', revenuePerUser: '₹8,200', trend: 'stable' },
  { id: 4, name: 'Recent Signups', count: '5.6K', revenuePerUser: '₹0', trend: 'up' },
];

export const revenueData = {
  total: '₹4.2L',
  period: 'This Week',
  breakdown: [
    { label: 'Campaigns', value: '₹2.8L', percentage: 65 },
    { label: 'Loyalty', value: '₹1.1L', percentage: 25 },
    { label: 'Organic', value: '₹0.3L', percentage: 10 },
  ],
  target: '₹5.0L',
};
