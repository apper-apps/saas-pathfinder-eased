export const featuresData = [
  {
    Id: 1,
    id: 'ai-ui',
    label: 'Do you want AI-Powered UI Generation to create interfaces with natural language?'
  },
  {
    Id: 2,
    id: 'backend-auth',
    label: 'Do you need Backend & Database with User Authentication capabilities?'
  },
  {
    Id: 3,
    id: 'multi-tenant',
    label: 'Do you require Multi-Tenant & Security with data isolation and audit logs?'
  },
  {
    Id: 4,
    id: 'monetization',
    label: 'Do you need Monetization & Billing with subscription management and usage limits?'
  },
  {
    Id: 5,
    id: 'integrations',
    label: 'Do you want Integrations & Analytics with pre-built connections and team management?'
  }
]

export const comparisonsData = [
  {
    Id: 1,
    featureId: 'ai-ui',
    title: 'Core App Building',
    rows: [
      {
        label: 'AI-Powered UI Generation',
        apperValue: '✔️',
        lovableValue: '✔️',
        apperStatus: 'yes',
        lovableStatus: 'yes'
      }
    ],
    winner: 'Tie',
    reasoning: 'Both platforms offer AI-powered UI generation capabilities with natural language interface creation.'
  },
  {
    Id: 2,
    featureId: 'backend-auth',
    title: 'Core App Building',
    rows: [
      {
        label: 'Backend & Database',
        apperValue: 'Built-in',
        lovableValue: 'Requires Supabase',
        apperStatus: 'yes',
        lovableStatus: 'warning'
      },
      {
        label: 'User Authentication',
        apperValue: 'One-click setup',
        lovableValue: 'Via Supabase (30+ manual steps)',
        apperStatus: 'yes',
        lovableStatus: 'warning'
      }
    ],
    winner: 'Apper',
    reasoning: 'Apper provides built-in backend and database with one-click authentication setup, while Lovable requires manual Supabase configuration with 30+ steps.'
  },
  {
    Id: 3,
    featureId: 'multi-tenant',
    title: 'Multi-Tenant & Security',
    rows: [
      {
        label: 'Data Isolation',
        apperValue: 'Automatic',
        lovableValue: 'Manual RLS setup required',
        apperStatus: 'yes',
        lovableStatus: 'warning'
      },
      {
        label: 'Connection Pooling',
        apperValue: '✔️',
        lovableValue: 'Shared resources issues',
        apperStatus: 'yes',
        lovableStatus: 'no'
      },
      {
        label: 'Audit Logs',
        apperValue: '✔️',
        lovableValue: 'Manual pgaudit setup',
        apperStatus: 'yes',
        lovableStatus: 'warning'
      }
    ],
    winner: 'Apper',
    reasoning: 'Apper offers automatic data isolation, proper connection pooling, and built-in audit logs, while Lovable requires extensive manual setup for multi-tenant security.'
  },
  {
    Id: 4,
    featureId: 'monetization',
    title: 'Monetization & Billing',
    rows: [
      {
        label: 'Subscription Management',
        apperValue: 'Visual designer',
        lovableValue: 'Stripe + Edge Functions',
        apperStatus: 'yes',
        lovableStatus: 'warning'
      },
      {
        label: 'Usage Limits & Credits',
        apperValue: '✔️',
        lovableValue: 'Custom code required',
        apperStatus: 'yes',
        lovableStatus: 'no'
      },
      {
        label: 'Coupons & Promotions',
        apperValue: '✔️',
        lovableValue: 'Manual Stripe setup',
        apperStatus: 'yes',
        lovableStatus: 'warning'
      }
    ],
    winner: 'Apper',
    reasoning: 'Apper provides a complete visual monetization suite with built-in usage limits and promotional tools, while Lovable requires custom coding and manual Stripe configuration.'
  },
  {
    Id: 5,
    featureId: 'integrations',
    title: 'Integrations & Analytics',
    rows: [
      {
        label: 'Pre-built Integrations',
        apperValue: '1,300+ One-click setup',
        lovableValue: '~12 Limited options',
        apperStatus: 'yes',
        lovableStatus: 'warning'
      },
      {
        label: 'Usage Analytics',
        apperValue: '✔️',
        lovableValue: 'External BI tools',
        apperStatus: 'yes',
        lovableStatus: 'warning'
      },
      {
        label: 'Team Management',
        apperValue: '✔️',
        lovableValue: 'Via Clerk integration',
        apperStatus: 'yes',
        lovableStatus: 'warning'
      }
    ],
    winner: 'Apper',
    reasoning: 'Apper offers 1,300+ pre-built integrations with one-click setup, native analytics, and built-in team management, compared to Lovable\'s limited 12 integrations and external tool requirements.'
  }
]