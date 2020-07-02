export const colorMapping = {
  1: 'red',
  2: 'green',
  3: 'blue',
  4: 'yellow'
};

export const roleStatuses = () => [
  { key: 0, value: 'draft', label: 'Draft' },
  { key: 10, value: 'submitted', label: 'Pending approval' },
  { key: 20, value: 'active', label: 'Active' },
  { key: 30, value: 'archived', label: 'Archived' }
];

export const appStatusType = {
  draft: 0,
  pre_hiring_pool: 1,
  hiring_pool: 2,
  post_hiring_pool: 3,
  hired: 4,
  archived: 5,
  offer_declined: 6,
  onboarding: 7
};