// Mock data for the SaaS Pathfinder application

export const featuresData = [
  {
    id: 1,
    Id: 1,
    label: 'Do you need AI-Powered UI Generation capabilities?'
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

export const detailedComparisonsData = [
{
    Id: 1,
    name: 'Development Experience',
    features: [
      {
        Id: 1,
        name: 'No-Code/Low-Code Approach',
        apper: 'Full no-code with visual builders, drag-and-drop interface',
        lovable: 'Code-first approach, requires manual coding for most features'
      },
      {
        Id: 2,
        name: 'Learning Curve',
        apper: 'Minimal - intuitive interface, built-in tutorials',
        lovable: 'Steep - requires React, TypeScript, and Supabase knowledge'
      },
      {
        Id: 3,
        name: 'Development Speed',
        apper: 'Rapid prototyping and deployment within hours',
        lovable: 'Slower due to manual coding requirements'
      },
      {
        Id: 4,
        name: 'Code Quality',
        apper: 'Auto-generated, optimized, and maintainable code',
        lovable: 'Quality depends on developer expertise'
      }
    ]
  },
  {
    Id: 2,
    name: 'Backend & Database',
    features: [
      {
        Id: 5,
        name: 'Database Setup',
        apper: 'Automatic database creation with visual schema builder',
        lovable: 'Manual Supabase setup and configuration required'
      },
      {
        Id: 6,
        name: 'API Generation',
        apper: 'Automatic REST and GraphQL APIs with authentication',
        lovable: 'Manual API endpoint creation and management'
      },
      {
        Id: 7,
        name: 'Real-time Features',
        apper: 'Built-in real-time sync for all data models',
        lovable: 'Requires manual Supabase real-time setup'
      },
      {
        Id: 8,
        name: 'File Storage',
        apper: 'Integrated file storage with CDN and image optimization',
        lovable: 'Manual Supabase storage configuration'
      }
    ]
  },
  {
    Id: 3,
    name: 'Authentication & Security',
    features: [
      {
        Id: 9,
        name: 'User Authentication',
        apper: 'Complete auth system with social logins out-of-the-box',
        lovable: 'Manual Supabase Auth implementation required'
      },
      {
        Id: 10,
        name: 'Role-Based Access',
        apper: 'Visual role and permission management interface',
        lovable: 'Custom RLS policies and manual role management'
      },
      {
        Id: 11,
        name: 'Security Features',
        apper: 'Built-in security best practices and compliance tools',
        lovable: 'Developer responsible for security implementation'
      },
      {
        Id: 12,
        name: 'Multi-tenant Support',
        apper: 'Native multi-tenancy with data isolation',
        lovable: 'Requires custom multi-tenant architecture'
      }
    ]
  },
  {
    Id: 4,
    name: 'Frontend & UI',
    features: [
      {
        Id: 13,
        name: 'UI Components',
        apper: 'Extensive pre-built component library with themes',
        lovable: 'Basic components, mostly custom development needed'
      },
      {
        Id: 14,
        name: 'Responsive Design',
        apper: 'Automatic responsive layouts and mobile optimization',
        lovable: 'Manual responsive design implementation'
      },
      {
        Id: 15,
        name: 'Form Builder',
        apper: 'Visual form builder with validation and conditional logic',
        lovable: 'Manual form creation and validation setup'
      },
      {
        Id: 16,
        name: 'Charts & Analytics',
        apper: 'Built-in dashboard and analytics components',
        lovable: 'Requires integration of third-party chart libraries'
      }
    ]
  },
  {
    Id: 5,
    name: 'Deployment & Infrastructure',
    features: [
      {
        Id: 17,
        name: 'Hosting',
        apper: 'Managed hosting with global CDN and automatic scaling',
        lovable: 'Manual deployment setup (Vercel, Netlify, etc.)'
      },
      {
        Id: 18,
        name: 'Environment Management',
        apper: 'Built-in staging and production environments',
        lovable: 'Manual environment configuration and management'
      },
      {
        Id: 19,
        name: 'Performance Optimization',
        apper: 'Automatic code splitting, caching, and optimization',
        lovable: 'Manual performance optimization required'
      },
      {
        Id: 20,
        name: 'Monitoring & Logs',
        apper: 'Integrated monitoring, error tracking, and analytics',
        lovable: 'Requires setup of external monitoring tools'
      }
    ]
  },
  {
    Id: 6,
    name: 'Business Features',
    features: [
      {
        Id: 21,
        name: 'Payment Processing',
        apper: 'Built-in Stripe integration with subscription management',
        lovable: 'Manual payment gateway integration required'
      },
      {
        Id: 22,
        name: 'Email & Notifications',
        apper: 'Integrated email templates and notification system',
        lovable: 'Manual email service setup and template creation'
      },
      {
        Id: 23,
        name: 'Workflow Automation',
        apper: 'Visual workflow builder for business processes',
        lovable: 'Custom workflow logic implementation needed'
      },
      {
        Id: 24,
        name: 'Admin Panel',
        apper: 'Auto-generated admin interface with CRUD operations',
        lovable: 'Manual admin panel development required'
      }
    ]
  }
]