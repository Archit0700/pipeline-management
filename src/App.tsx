import { Activity, Bell, CheckCircle2, Clock3, GitBranch, MoreHorizontal, Play, Rocket, Search, XCircle } from 'lucide-react'

interface Pipeline {
  name: string
  branch: string
  status: 'Success' | 'Running' | 'Failed'
  duration: string
  updated: string
  author: string
}

const pipelines: Pipeline[] = [
  { name: 'web-frontend', branch: 'main', status: 'Success', duration: '4m 12s', updated: '2 min ago', author: 'AS' },
  { name: 'api-service', branch: 'develop', status: 'Running', duration: '2m 48s', updated: '5 min ago', author: 'RK' },
  { name: 'mobile-release', branch: 'release/v2.4', status: 'Failed', duration: '7m 31s', updated: '18 min ago', author: 'AM' },
  { name: 'data-worker', branch: 'main', status: 'Success', duration: '3m 06s', updated: '31 min ago', author: 'SJ' },
]

const statusIcon = (status: Pipeline['status']) => {
  if (status === 'Success') return <CheckCircle2 size={16} />
  if (status === 'Failed') return <XCircle size={16} />
  return <Activity size={16} />
}

function App() {
  return (
    <div className="app-shell">
      <aside className="sidebar">
        <div className="brand"><div className="brand-mark"><Rocket size={18} /></div><span>Pipeline</span></div>
        <nav>
          <a className="active"><Activity size={18} />Overview</a>
          <a><Play size={18} />Pipelines</a>
          <a><Rocket size={18} />Deployments</a>
          <a><Clock3 size={18} />Build history</a>
        </nav>
        <div className="sidebar-footer"><div className="avatar">AR</div><div><strong>Archit</strong><span>Developer</span></div><MoreHorizontal size={18} /></div>
      </aside>

      <main className="content">
        <header className="topbar">
          <div><p className="eyebrow">ENGINEERING / CI-CD</p><h1>Pipeline overview</h1><p className="subtitle">Monitor builds, deployments, and delivery health.</p></div>
          <div className="top-actions"><button className="icon-button"><Search size={18} /></button><button className="icon-button"><Bell size={18} /></button><button className="primary"><Play size={16} /> Run pipeline</button></div>
        </header>

        <section className="metrics">
          <article><span>Active pipelines</span><strong>12</strong><small className="positive">+2 this week</small></article>
          <article><span>Success rate</span><strong>94.8%</strong><small className="positive">+1.7% vs last week</small></article>
          <article><span>Avg. build time</span><strong>4m 26s</strong><small>12s faster</small></article>
          <article><span>Deployments</span><strong>38</strong><small>Last 30 days</small></article>
        </section>

        <section className="section-header"><div><h2>Recent pipelines</h2><p>Latest activity across your environments</p></div><button className="filter">All pipelines <span>⌄</span></button></section>
        <section className="pipeline-list">
          {pipelines.map((pipeline) => (
            <article className="pipeline-row" key={pipeline.name}>
              <div className={`status ${pipeline.status.toLowerCase()}`}>{statusIcon(pipeline.status)}</div>
              <div className="pipeline-main"><strong>{pipeline.name}</strong><span><GitBranch size={13} />{pipeline.branch}</span></div>
              <div className={`badge ${pipeline.status.toLowerCase()}`}>{pipeline.status}</div>
              <div className="duration"><span>Duration</span><strong>{pipeline.duration}</strong></div>
              <div className="updated"><span>Updated</span><strong>{pipeline.updated}</strong></div>
              <div className="avatar small">{pipeline.author}</div>
              <button className="row-menu"><MoreHorizontal size={18} /></button>
            </article>
          ))}
        </section>

        <section className="bottom-grid">
          <article className="panel"><div className="panel-heading"><div><h2>Delivery health</h2><p>Successful runs over the last 7 days</p></div><span className="health-dot">94.8%</span></div><div className="chart"><div className="chart-line" /><div className="chart-labels"><span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span></div></div></article>
          <article className="panel activity-panel"><div className="panel-heading"><div><h2>Latest deployment</h2><p>Production environment</p></div><span className="live">LIVE</span></div><div className="deploy-version"><strong>web-frontend</strong><span>v2.18.4</span></div><div className="deploy-meta"><span>Deployed by Archit</span><span>8 min ago</span></div><div className="deploy-progress"><span /></div><button className="secondary">View deployment</button></article>
        </section>
      </main>
    </div>
  )
}

export default App
