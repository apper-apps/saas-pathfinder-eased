export const featuresData = [
  {
    Id: 1,
    id: 'ai-ui',
    label: 'I want to build my UI using AI'
  },
  {
    Id: 2,
    id: 'backend-auth',
    label: "I don't want to set up backend or auth manually"
  },
  {
    Id: 3,
    id: 'multi-tenant',
    label: 'I need secure, multi-tenant architecture'
  },
  {
    Id: 4,
    id: 'monetization',
    label: 'I want built-in subscriptions, limits & coupons'
  },
  {
    Id: 5,
    id: 'integrations',
    label: 'I want easy integration with other services'
  },
  {
    Id: 6,
    id: 'analytics',
    label: 'I want real-time usage analytics'
  },
  {
    Id: 7,
    id: 'no-code',
    label: 'I want a no-code or visual builder experience'
  }
]

export const comparisonsData = [
  {
    Id: 1,
    featureId: 'ai-ui',
    title: 'AI UI Generation',
    rows: [
      {
        label: 'AI UI Builder',
        apperValue: 'Yes',
        lovableValue: 'Yes',
        apperStatus: 'yes',
        lovableStatus: 'yes'
      }
    ],
    winner: 'Tie',
    reasoning: 'Both tools provide AI UI generation capabilities equally well.'
  },
  {
    Id: 2,
    featureId: 'backend-auth',
    title: 'Backend & Auth Setup',
    rows: [
      {
        label: 'Backend/Database',
        apperValue: 'Built-in',
        lovableValue: 'Requires Supabase',
        apperStatus: 'yes',
        lovableStatus: 'warning'
      },
      {
        label: 'User Authentication',
        apperValue: 'One-click',
        lovableValue: '30+ manual steps',
        apperStatus: 'yes',
        lovableStatus: 'warning'
      }
    ],
    winner: 'Apper',
    reasoning: 'Apper wins for simplicity and speed with built-in backend and one-click authentication setup.'
  },
  {
    Id: 3,
    featureId: 'multi-tenant',
    title: 'Multi-Tenant Security',
    rows: [
      {
        label: 'Data Isolation',
        apperValue: 'Automatic',
        lovableValue: 'Manual RLS setup',
        apperStatus: 'yes',
        lovableStatus: 'no'
      },
      {
        label: 'Connection Pooling',
        apperValue: 'Yes',
        lovableValue: 'Shared resources',
        apperStatus: 'yes',
        lovableStatus: 'no'
      },
      {
        label: 'Audit Logs',
        apperValue: 'Built-in',
        lovableValue: 'Requires setup',
        apperStatus: 'yes',
        lovableStatus: 'no'
      }
    ],
    winner: 'Apper',
    reasoning: 'Apper wins with automatic enterprise-grade security setup and built-in multi-tenant architecture.'
  },
  {
    Id: 4,
    featureId: 'monetization',
    title: 'Monetization Tools',
    rows: [
      {
        label: 'Subscription Management',
        apperValue: 'Visual builder',
        lovableValue: 'Stripe + Edge functions',
        apperStatus: 'yes',
        lovableStatus: 'warning'
      },
      {
        label: 'Usage Limits & Quotas',
        apperValue: 'Built-in',
        lovableValue: 'Code required',
        apperStatus: 'yes',
        lovableStatus: 'no'
      },
      {
        label: 'Coupons & Promotions',
        apperValue: 'Easy setup',
        lovableValue: 'Manual Stripe config',
        apperStatus: 'yes',
        lovableStatus: 'no'
      }
    ],
    winner: 'Apper',
    reasoning: 'Apper wins with a complete no-code billing stack that includes visual subscription management and built-in usage controls.'
  },
  {
    Id: 5,
    featureId: 'integrations',
    title: 'Integrations & Connectivity',
    rows: [
      {
        label: 'Pre-built Integrations',
        apperValue: '1,300+ (1-click)',
        lovableValue: '~12 limited options',
        apperStatus: 'yes',
        lovableStatus: 'warning'
      },
      {
        label: 'Team Management',
        apperValue: 'Native',
        lovableValue: 'Requires Clerk',
        apperStatus: 'yes',
        lovableStatus: 'warning'
      }
    ],
    winner: 'Apper',
    reasoning: 'Apper wins for plug-and-play scaling with extensive pre-built integrations and native team management.'
  },
  {
    Id: 6,
    featureId: 'analytics',
    title: 'Usage Analytics',
    rows: [
      {
        label: 'Usage Analytics',
        apperValue: 'Built-in dashboard',
        lovableValue: 'Needs external BI tools',
        apperStatus: 'yes',
        lovableStatus: 'no'
      },
      {
        label: 'Real-time Monitoring',
        apperValue: 'Yes',
        lovableValue: 'Custom implementation',
        apperStatus: 'yes',
        lovableStatus: 'warning'
      }
    ],
    winner: 'Apper',
    reasoning: 'Apper wins with built-in analytics dashboard and real-time monitoring without requiring external tools.'
  },
  {
    Id: 7,
    featureId: 'no-code',
    title: 'No-Code Experience',
    rows: [
      {
        label: 'Visual Builder',
        apperValue: 'Complete no-code',
        lovableValue: 'Code-first approach',
        apperStatus: 'yes',
        lovableStatus: 'no'
      },
      {
        label: 'Configuration UI',
        apperValue: 'Visual interface',
        lovableValue: 'Config files',
        apperStatus: 'yes',
        lovableStatus: 'warning'
      }
    ],
    winner: 'Apper',
    reasoning: 'Apper wins for users seeking a complete no-code experience with visual builders and configuration interfaces.'
  }
]