import { useState } from 'react'
import './App.css'
import SubmitForm from './SubmitForm'

interface Agent {
  id: string
  name: string
  description: string
  category: string
  creator: string
  capabilities: string[]
  website?: string
}

const sampleAgents: Agent[] = [
  {
    id: '1',
    name: 'MoonToshi',
    description: "Matt's AI assistant - business meets fun, ready to help with automation, job searching, and staying informed. Can build web apps, manage cron jobs, and even play Rock Paper Scissors!",
    category: 'productivity',
    creator: '@_MattCool_',
    capabilities: ['Web Development', 'Job Search Automation', 'News Briefings', 'Game Playing', 'Task Automation'],
    website: 'https://botgames.ai/agents/MoonToshi'
  },
  {
    id: '2',
    name: 'CodeAssist Pro',
    description: 'Advanced coding assistant specializing in full-stack development. Helps with code generation, debugging, testing, and architecture planning.',
    category: 'coding',
    creator: '@developer',
    capabilities: ['Code Generation', 'Bug Fixing', 'Testing', 'Architecture Design', 'Code Review']
  },
  {
    id: '3',
    name: 'ContentCraft',
    description: 'Marketing-focused AI that creates engaging content, manages social media, and analyzes campaign performance.',
    category: 'marketing',
    creator: '@marketer',
    capabilities: ['Content Writing', 'Social Media Management', 'SEO Optimization', 'Analytics', 'Campaign Planning']
  }
  {
  "id": "1770194438493",
  "name": "Test Pro",
  "description": "It searches the web for deals",
  "category": "productivity",
  "creator": "@theking",
  "capabilities": [
    "searching"
  ]
}
]

function App() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [agents] = useState<Agent[]>(sampleAgents)
  const [showSubmitForm, setShowSubmitForm] = useState(false)

  const categories = ['all', 'productivity', 'coding', 'marketing', 'gaming', 'other']

  const filteredAgents = agents.filter(agent => {
    const matchesSearch = agent.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         agent.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'all' || agent.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  return (
    <>
      {showSubmitForm && <SubmitForm onClose={() => setShowSubmitForm(false)} />}
      <div className="min-h-screen bg-bg-dark text-text-primary font-mono">
      {/* Navigation */}
      <nav className="border-b-[3px] border-border-color bg-bg-card">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="font-pixel text-xl md:text-2xl flex items-center gap-3">
              <span className="text-2xl md:text-3xl">🦞</span>
              <span>
                <span className="text-hot-pink" style={{textShadow: '2px 2px 0 var(--cyan)'}}>CLAW</span>
                <span className="text-cyan" style={{textShadow: '2px 2px 0 var(--hot-pink)'}}>MARKETPLACE</span>
              </span>
            </h1>
            <div className="flex gap-3 items-center">
              <a href="#" className="px-4 py-2 text-sm font-bold hover:text-hot-pink transition-colors">
                BROWSE
              </a>
              <div className="relative">
                <button 
                  disabled
                  className="px-4 py-2 text-sm font-bold bg-bg-dark text-text-muted border-[3px] border-border-color cursor-not-allowed opacity-60"
                >
                  BUY/SELL/RENT
                </button>
                <span className="absolute -top-2 -right-2 px-2 py-0.5 text-[8px] font-pixel bg-text-muted text-bg-dark">
                  SOON
                </span>
              </div>
              <button 
                onClick={() => setShowSubmitForm(true)}
                className="px-4 py-2 text-sm font-bold bg-hot-pink text-bg-dark hover:bg-cyan hover:text-bg-dark transition-all"
              >
                SUBMIT AGENT
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-12">
        {/* Hero */}
        <div className="text-center mb-12">
          <h2 className="font-pixel text-3xl md:text-4xl mb-6 text-text-primary">
            DISCOVER AI AGENTS
          </h2>
          <p className="text-lg text-text-secondary mb-8 max-w-2xl mx-auto">
            Free directory of AI agents for every task
          </p>

          {/* Search */}
          <div className="max-w-2xl mx-auto mb-6">
            <input
              type="text"
              placeholder="SEARCH AGENTS..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-6 py-4 bg-bg-card border-[3px] border-border-color focus:border-cyan focus:outline-none text-text-primary font-mono placeholder-text-muted"
            />
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 text-sm font-bold uppercase border-[3px] transition-all ${
                  selectedCategory === cat
                    ? 'bg-hot-pink text-bg-dark border-hot-pink'
                    : 'bg-transparent text-text-primary border-border-color hover:border-cyan hover:text-cyan'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-bg-card border-[3px] border-border-color p-6">
            <div className="text-4xl font-bold text-lime mb-2">{agents.length}</div>
            <div className="text-text-secondary uppercase text-sm font-bold">Total Agents</div>
          </div>
          <div className="bg-bg-card border-[3px] border-border-color p-6">
            <div className="text-4xl font-bold text-cyan mb-2">{categories.length - 1}</div>
            <div className="text-text-secondary uppercase text-sm font-bold">Categories</div>
          </div>
          <div className="bg-bg-card border-[3px] border-border-color p-6">
            <div className="text-4xl font-bold text-hot-pink mb-2">100%</div>
            <div className="text-text-secondary uppercase text-sm font-bold">Free</div>
          </div>
        </div>

        {/* Agent Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredAgents.length === 0 ? (
            <div className="col-span-full text-center py-12">
              <p className="text-xl text-text-secondary font-pixel text-sm mb-4">NO AGENTS FOUND</p>
              <p className="text-text-muted">Try adjusting your search or filters</p>
            </div>
          ) : (
            filteredAgents.map(agent => (
              <div
                key={agent.id}
                className="bg-bg-card border-[3px] border-border-color hover:border-hot-pink transition-all cursor-pointer group"
              >
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="font-pixel text-sm text-text-primary group-hover:text-hot-pink transition-colors">
                      {agent.name}
                    </h3>
                    <span className="px-2 py-1 text-[8px] font-pixel uppercase bg-cyan text-bg-dark">
                      {agent.category}
                    </span>
                  </div>
                  <p className="text-text-secondary mb-4 text-sm line-clamp-3">{agent.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {agent.capabilities.slice(0, 3).map((cap, idx) => (
                      <span key={idx} className="px-2 py-1 text-xs bg-bg-dark text-lime border border-border-color">
                        {cap}
                      </span>
                    ))}
                  </div>
                  <div className="text-xs text-text-muted uppercase font-bold">
                    by {agent.creator}
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t-[3px] border-border-color mt-20">
        <div className="max-w-7xl mx-auto px-6 py-8 text-center">
          <p className="mb-2 font-pixel text-[10px] text-hot-pink">🦞 CLAWMARKETPLACE</p>
          <p className="text-xs text-text-muted mb-3">© 2026 Free AI Agent Directory</p>
          <p className="text-xs text-text-secondary">
            <button onClick={() => setShowSubmitForm(true)} className="text-cyan hover:text-hot-pink transition-colors font-bold">
              SUBMIT YOUR AGENT
            </button>
            {' · '}
            <a href="https://github.com/aiboxacct-jpg/claw-marketplace" target="_blank" rel="noopener noreferrer" className="text-cyan hover:text-hot-pink transition-colors font-bold">
              GITHUB
            </a>
          </p>
        </div>
      </footer>
    </div>
    </>
  )
}

export default App
