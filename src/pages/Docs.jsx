import { useState } from 'react'
import { Link } from 'react-router-dom'
import ScrollFadeIn from '../components/ScrollFadeIn'

const sections = [
  {
    id: 'quickstart',
    label: 'Quickstart',
    icon: <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M8 1.5l1.5 4.5H14l-3.75 2.7 1.5 4.5L8 10.5l-3.75 2.7 1.5-4.5L2 6h4.5L8 1.5z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round"/></svg>,
  },
  {
    id: 'authentication',
    label: 'Authentication',
    icon: <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><rect x="2.5" y="7" width="11" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.3"/><path d="M5 7V5.5a3 3 0 016 0V7" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/></svg>,
  },
  {
    id: 'workflows',
    label: 'Workflows API',
    icon: <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M2 8h12M10 4.5l3.5 3.5L10 11.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  },
  {
    id: 'connectors',
    label: 'Connectors',
    icon: <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="4" cy="8" r="2.5" stroke="currentColor" strokeWidth="1.3"/><circle cx="12" cy="8" r="2.5" stroke="currentColor" strokeWidth="1.3"/><path d="M6.5 8h3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/></svg>,
  },
  {
    id: 'governance',
    label: 'Governance',
    icon: <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M8 1.5L3 4v4c0 3.5 2.5 6 5 6.5 2.5-.5 5-3 5-6.5V4L8 1.5z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round"/></svg>,
  },
  {
    id: 'webhooks',
    label: 'Webhooks',
    icon: <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M8 3v5l3 3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/><circle cx="8" cy="8" r="6.5" stroke="currentColor" strokeWidth="1.3"/></svg>,
  },
  {
    id: 'sdks',
    label: 'SDKs',
    icon: <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M5 5.5L2 8l3 2.5M11 5.5L14 8l-3 2.5M9.5 4l-3 8" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  },
]

const content = {
  quickstart: {
    title: 'Quickstart Guide',
    subtitle: 'Go from zero to your first live workflow in under 30 minutes.',
    steps: [
      {
        step: '01',
        title: 'Install the SDK',
        desc: 'Install the Luthen SDK using your package manager of choice.',
        code: `# npm
npm install luthen

# yarn
yarn add luthen

# pnpm
pnpm add luthen`,
        lang: 'bash',
      },
      {
        step: '02',
        title: 'Initialise the client',
        desc: 'Create a client instance using your API key. You can find your API key in the Luthen dashboard under Settings → API Keys.',
        code: `import { LuthenClient } from 'luthen'

const client = new LuthenClient({
  apiKey: process.env.LUTHEN_API_KEY,
  // Optional: specify your deployment region
  region: 'us-east-1',
})`,
        lang: 'typescript',
      },
      {
        step: '03',
        title: 'Connect a system',
        desc: 'Activate your first connector. Luthen will verify connectivity and set up the secure integration channel.',
        code: `const connection = await client.connectors.activate({
  type: 'SAP_ERP',
  credentials: {
    host: process.env.SAP_HOST,
    client: process.env.SAP_CLIENT,
    username: process.env.SAP_USER,
    password: process.env.SAP_PASS,
  },
  // Optional: restrict to specific modules
  scope: ['MM', 'FI'],
})

console.log(connection.id) // conn_01hx2...
console.log(connection.status) // 'active'`,
        lang: 'typescript',
      },
      {
        step: '04',
        title: 'Run your first workflow',
        desc: 'Execute a workflow against your connected system. The response includes execution metadata and a full audit trace.',
        code: `const result = await client.workflows.run({
  id: 'PO_APPROVAL_v2',
  connectionId: connection.id,
  payload: {
    invoiceId: 'INV-10482',
    amount: 14250.00,
    currency: 'USD',
    vendor: 'Acme Supplies Ltd',
  },
})

console.log(result.status)        // 'completed'
console.log(result.executionTime) // 1240 (ms)
console.log(result.auditTraceId)  // 'trace_9fk...'`,
        lang: 'typescript',
      },
    ],
  },
  authentication: {
    title: 'Authentication',
    subtitle: 'Secure API access using API keys, OAuth 2.0, and service account tokens.',
    steps: [
      {
        step: '01',
        title: 'API Key Authentication',
        desc: 'The simplest method. Pass your API key in the Authorization header. Suitable for server-to-server communication.',
        code: `curl -X GET https://api.luthen.ai/v2/workflows \\
  -H "Authorization: Bearer lth_sk_live_01hx2abcdef..." \\
  -H "Content-Type: application/json"`,
        lang: 'bash',
      },
      {
        step: '02',
        title: 'OAuth 2.0 (Client Credentials)',
        desc: 'For production deployments, use OAuth 2.0 client credentials for short-lived access tokens with automatic rotation.',
        code: `// Exchange client credentials for an access token
const { accessToken } = await client.auth.getToken({
  clientId: process.env.LUTHEN_CLIENT_ID,
  clientSecret: process.env.LUTHEN_CLIENT_SECRET,
  scopes: ['workflows:read', 'workflows:execute'],
})

// Token is valid for 1 hour — the SDK handles refresh automatically`,
        lang: 'typescript',
      },
      {
        step: '03',
        title: 'Scoped Service Accounts',
        desc: 'Create service accounts with minimal privilege — restricting access to specific workflows, connectors, or environments.',
        code: `const serviceAccount = await client.auth.createServiceAccount({
  name: 'ci-deployment-bot',
  scopes: [
    'workflows:deploy',
    'connectors:read',
  ],
  // Restrict to non-production environments
  environmentIds: ['env_staging', 'env_dev'],
})`,
        lang: 'typescript',
      },
    ],
  },
  workflows: {
    title: 'Workflows API',
    subtitle: 'Create, manage, and execute intelligent workflows via the REST API or SDK.',
    steps: [
      {
        step: 'GET',
        title: 'List Workflows',
        desc: 'Returns all workflows in your organization with their current status and version.',
        code: `GET /v2/workflows

// Response
{
  "data": [
    {
      "id": "wf_01hx2abc",
      "name": "PO_APPROVAL_v2",
      "status": "active",
      "version": "2.1.4",
      "connectionIds": ["conn_01hx2..."],
      "lastExecuted": "2025-02-15T09:32:11Z",
      "executionCount": 14829
    }
  ],
  "pagination": {
    "total": 42,
    "page": 1,
    "perPage": 20
  }
}`,
        lang: 'json',
      },
      {
        step: 'POST',
        title: 'Execute a Workflow',
        desc: 'Trigger a workflow execution with a payload. Returns synchronously for workflows under 30s, or a job ID for async workflows.',
        code: `POST /v2/workflows/{workflow_id}/execute

// Request body
{
  "payload": {
    "invoiceId": "INV-10482",
    "amount": 14250.00,
    "currency": "USD"
  },
  "options": {
    "async": false,
    "timeout": 30000,
    "governanceLevel": "strict"
  }
}

// Response
{
  "executionId": "exec_01hx9zk...",
  "status": "completed",
  "executionTime": 1240,
  "auditTraceId": "trace_9fk...",
  "output": { ... }
}`,
        lang: 'json',
      },
    ],
  },
  connectors: {
    title: 'Connectors',
    subtitle: 'Connect to 200+ enterprise systems. All connectors support secure, governed data channels.',
    steps: [
      {
        step: '01',
        title: 'Available Connectors',
        desc: 'Browse the full connector library. Each connector exposes the capabilities of the underlying system in a normalized, governed API.',
        code: `GET /v2/connectors/catalog

// Returns available connector types
{
  "connectors": [
    { "type": "SAP_ERP", "modules": ["MM","FI","SD","HR"], "version": "S/4HANA 2023+" },
    { "type": "ORACLE_FUSION", "modules": ["Financials","SCM","HCM"] },
    { "type": "SALESFORCE", "objects": ["Account","Opportunity","Case"] },
    { "type": "SERVICENOW", "tables": ["incident","change_request","cmdb_ci"] },
    // ... 196 more
  ]
}`,
        lang: 'json',
      },
      {
        step: '02',
        title: 'Activate a Connector',
        desc: 'Activate a connector using encrypted credential storage. Credentials are never logged or accessible after activation.',
        code: `POST /v2/connectors/activate

{
  "type": "SALESFORCE",
  "label": "Production Salesforce Org",
  "credentials": {
    "instanceUrl": "https://myorg.my.salesforce.com",
    "accessToken": "..." // or use OAuth flow
  },
  "readOnly": false,
  "allowedWorkflowIds": ["wf_01hx2abc"] // optional restriction
}`,
        lang: 'json',
      },
    ],
  },
  governance: {
    title: 'Governance',
    subtitle: 'Approval gates, audit trails, and policy enforcement — built into every workflow execution.',
    steps: [
      {
        step: '01',
        title: 'Approval Gates',
        desc: 'Insert human-in-the-loop approval checkpoints into any workflow. Execution pauses until the gate is resolved.',
        code: `// Define an approval gate in workflow configuration
{
  "steps": [
    { "type": "EXTRACT", "source": "SAP_ERP" },
    {
      "type": "APPROVAL_GATE",
      "config": {
        "requiredApprovers": ["manager"],
        "timeoutHours": 24,
        "escalateTo": "director",
        "notifyVia": ["email", "slack"]
      }
    },
    { "type": "EXECUTE", "action": "POST_INVOICE" }
  ]
}`,
        lang: 'json',
      },
      {
        step: '02',
        title: 'Querying Audit Trails',
        desc: 'Every workflow execution produces an immutable audit trail. Query it programmatically for compliance reporting.',
        code: `const trace = await client.audit.getTrace({
  executionId: 'exec_01hx9zk...',
})

// Returns every decision, data access, and action taken
trace.events.forEach(event => {
  console.log(event.timestamp)  // 2025-02-15T09:32:11.283Z
  console.log(event.type)       // 'DATA_READ' | 'DECISION' | 'ACTION'
  console.log(event.actor)      // 'workflow' | 'user:j.chen@...'
  console.log(event.details)    // full event payload
})`,
        lang: 'typescript',
      },
    ],
  },
  webhooks: {
    title: 'Webhooks',
    subtitle: 'Receive real-time notifications for workflow execution events, connector status changes, and governance alerts.',
    steps: [
      {
        step: '01',
        title: 'Register a Webhook',
        desc: 'Register an HTTPS endpoint to receive events. Luthen signs all payloads with HMAC-SHA256.',
        code: `POST /v2/webhooks

{
  "url": "https://yourapp.com/webhooks/luthen",
  "events": [
    "workflow.completed",
    "workflow.failed",
    "approval_gate.pending",
    "connector.disconnected"
  ],
  "secret": "your_signing_secret"
}`,
        lang: 'json',
      },
      {
        step: '02',
        title: 'Verify Webhook Signatures',
        desc: 'Validate incoming webhook payloads to ensure they originate from Luthen.',
        code: `import { verifyWebhookSignature } from 'luthen'

app.post('/webhooks/luthen', (req, res) => {
  const isValid = verifyWebhookSignature({
    payload: req.body,
    signature: req.headers['luthen-signature'],
    secret: process.env.LUTHEN_WEBHOOK_SECRET,
  })

  if (!isValid) return res.status(401).send('Unauthorized')

  const { event, data } = req.body
  // Handle event...
  res.status(200).send('OK')
})`,
        lang: 'typescript',
      },
    ],
  },
  sdks: {
    title: 'SDKs & Libraries',
    subtitle: 'Official SDKs maintained by the Luthen engineering team with full TypeScript support.',
    steps: [
      {
        step: 'TS',
        title: 'TypeScript / Node.js SDK',
        desc: 'The primary SDK. Full TypeScript types, async/await, and automatic retries with exponential backoff.',
        code: `npm install luthen
# or: yarn add luthen / pnpm add luthen

import { LuthenClient } from 'luthen'
// Full TypeScript intellisense for all methods`,
        lang: 'bash',
      },
      {
        step: 'PY',
        title: 'Python SDK',
        desc: 'Idiomatic Python SDK with both sync and async client variants. Supports Python 3.9+.',
        code: `pip install luthen

from luthen import LuthenClient

client = LuthenClient(api_key=os.environ["LUTHEN_API_KEY"])
result = client.workflows.run(id="PO_APPROVAL_v2", payload={...})`,
        lang: 'python',
      },
      {
        step: 'GO',
        title: 'Go SDK',
        desc: 'Lightweight Go client with context support and structured logging. Requires Go 1.21+.',
        code: `go get github.com/luthen-ai/luthen-go

import "github.com/luthen-ai/luthen-go"

client := luthen.NewClient(os.Getenv("LUTHEN_API_KEY"))
result, err := client.Workflows.Run(ctx, "PO_APPROVAL_v2", payload)`,
        lang: 'go',
      },
      {
        step: 'REST',
        title: 'REST API',
        desc: 'Use any HTTP client directly. All endpoints accept JSON and return JSON. Base URL: api.luthen.ai/v2',
        code: `curl -X POST https://api.luthen.ai/v2/workflows/PO_APPROVAL_v2/execute \\
  -H "Authorization: Bearer $LUTHEN_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{"payload": {"invoiceId": "INV-10482"}}'`,
        lang: 'bash',
      },
    ],
  },
}

function CodeBlock({ code, lang }) {
  const [copied, setCopied] = useState(false)

  function copy() {
    navigator.clipboard.writeText(code).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 1800)
    })
  }

  return (
    <div style={{ position: 'relative', background: '#12121C', borderRadius: 'var(--r-lg)', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.07)' }}>
      {/* title bar */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 18px', background: 'rgba(255,255,255,0.02)', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
        <span style={{ fontSize: 11.5, color: 'rgba(255,255,255,0.3)', fontFamily: 'inherit', fontWeight: 500, letterSpacing: '0.03em' }}>{lang}</span>
        <button
          onClick={copy}
          style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: 12, color: copied ? '#4ade80' : 'rgba(255,255,255,0.3)', fontFamily: 'inherit', fontWeight: 600, padding: '2px 6px', borderRadius: 4, transition: 'color 0.2s' }}
        >
          {copied ? '✓ Copied' : 'Copy'}
        </button>
      </div>
      <pre style={{ margin: 0, padding: '18px 20px', fontSize: 12.5, lineHeight: 1.7, color: 'rgba(255,255,255,0.75)', fontFamily: '"Courier New", monospace', overflowX: 'auto', whiteSpace: 'pre' }}>
        {code}
      </pre>
    </div>
  )
}

export default function Docs() {
  const [activeSection, setActiveSection] = useState('quickstart')
  const current = content[activeSection]

  return (
    <>
      <section className="page-hero">
        <div className="page-hero-inner">
          <div className="page-hero-eyebrow">Documentation</div>
          <h1>Build with Luthen.</h1>
          <p className="page-hero-sub">Everything you need to connect, configure, and extend the Luthen autonomy layer — from your first API call to production-grade governance.</p>
        </div>
      </section>

      <div style={{ display: 'grid', gridTemplateColumns: '240px 1fr', maxWidth: 1100, margin: '0 auto', padding: '60px 40px', gap: 60, alignItems: 'start' }}>

        {/* ── SIDEBAR ── */}
        <nav style={{ position: 'sticky', top: 80 }}>
          <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--g400)', marginBottom: 12 }}>Reference</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            {sections.map(s => (
              <button
                key={s.id}
                onClick={() => setActiveSection(s.id)}
                style={{
                  display: 'flex', alignItems: 'center', gap: 10,
                  padding: '9px 12px', borderRadius: 'var(--r-sm)', border: 'none',
                  background: activeSection === s.id ? 'rgba(114,203,214,0.12)' : 'transparent',
                  color: activeSection === s.id ? 'var(--black)' : 'var(--g600)',
                  fontSize: 13.5, fontWeight: activeSection === s.id ? 600 : 500,
                  cursor: 'pointer', fontFamily: 'inherit', textAlign: 'left',
                  borderLeft: `2px solid ${activeSection === s.id ? 'var(--turquoise)' : 'transparent'}`,
                  transition: 'all 0.15s',
                }}
              >
                <span style={{ color: activeSection === s.id ? 'var(--turquoise)' : 'var(--g300)', flexShrink: 0 }}>{s.icon}</span>
                {s.label}
              </button>
            ))}
          </div>

          <div style={{ marginTop: 32, padding: '16px', borderRadius: 'var(--r-md)', background: 'var(--g50)', border: '1px solid var(--g100)' }}>
            <div style={{ fontSize: 12.5, fontWeight: 700, marginBottom: 6 }}>Need help?</div>
            <p style={{ fontSize: 12, color: 'var(--g600)', lineHeight: 1.6, marginBottom: 12 }}>Our team is available for implementation support.</p>
            <Link to="/demo" style={{ fontSize: 12.5, fontWeight: 600, color: 'var(--black)', display: 'flex', alignItems: 'center', gap: 4 }}>
              Talk to engineering →
            </Link>
          </div>
        </nav>

        {/* ── CONTENT ── */}
        <div>
          <h1 style={{ fontSize: 'clamp(28px,3vw,42px)', fontWeight: 700, letterSpacing: '-1.5px', marginBottom: 10 }}>{current.title}</h1>
          <p style={{ fontSize: 16, color: 'var(--g600)', lineHeight: 1.65, marginBottom: 48, maxWidth: 600 }}>{current.subtitle}</p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 48 }}>
            {current.steps.map((step, i) => (
              <div key={i}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
                  <div style={{ width: 32, height: 32, borderRadius: 8, background: 'var(--black)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 11, fontWeight: 700, color: '#fff', flexShrink: 0, letterSpacing: '0.04em' }}>{step.step}</div>
                  <h3 style={{ fontSize: 18, fontWeight: 700, letterSpacing: '-0.4px' }}>{step.title}</h3>
                </div>
                <p style={{ fontSize: 14.5, color: 'var(--g600)', lineHeight: 1.7, marginBottom: 16, maxWidth: 620 }}>{step.desc}</p>
                <CodeBlock code={step.code} lang={step.lang} />
              </div>
            ))}
          </div>

          {/* Nav between sections */}
          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 64, paddingTop: 24, borderTop: '1px solid var(--g100)' }}>
            {sections.findIndex(s => s.id === activeSection) > 0 ? (
              <button
                onClick={() => setActiveSection(sections[sections.findIndex(s => s.id === activeSection) - 1].id)}
                style={{ display: 'flex', alignItems: 'center', gap: 8, background: 'none', border: 'none', cursor: 'pointer', fontSize: 13.5, fontWeight: 600, color: 'var(--black)', fontFamily: 'inherit', padding: 0 }}
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M12 7H2M6 3.5L2 7l4 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                {sections[sections.findIndex(s => s.id === activeSection) - 1].label}
              </button>
            ) : <div />}
            {sections.findIndex(s => s.id === activeSection) < sections.length - 1 ? (
              <button
                onClick={() => setActiveSection(sections[sections.findIndex(s => s.id === activeSection) + 1].id)}
                style={{ display: 'flex', alignItems: 'center', gap: 8, background: 'none', border: 'none', cursor: 'pointer', fontSize: 13.5, fontWeight: 600, color: 'var(--black)', fontFamily: 'inherit', padding: 0 }}
              >
                {sections[sections.findIndex(s => s.id === activeSection) + 1].label}
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 7h10M8 3.5l3.5 3.5L8 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </button>
            ) : <div />}
          </div>
        </div>
      </div>
    </>
  )
}
