import { useState } from 'react'
import './App.css'

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
]

function App() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [agents] = useState<Agent[]>(sampleAgents)

  const categories = ['all', 'productivity', 'coding', 'marketing', 'gaming', 'other']

  const filteredAgents = agents.filter(agent => {
    const matchesSearch = agent.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         agent.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'all' || agent.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      {/* Navigation */}
      <nav className="border-b border-gray-800 bg-black/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                🤖 ClawMarketPlace
              </h1>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-800">
                Browse
              </a>
              <a href="#" className="px-3 py-2 rounded-md text-sm font-medium bg-blue-600 hover:bg-blue-700">
                Submit Agent
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero */}
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Discover AI Agents
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Free directory of AI agents for every task
          </p>

          {/* Search */}
          <div className="max-w-2xl mx-auto mb-6">
            <input
              type="text"
              placeholder="Search agents..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-6 py-3 rounded-lg bg-gray-800 border border-gray-700 focus:border-blue-500 focus:outline-none text-white placeholder-gray-400"
            />
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                  selectedCategory === cat
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700">
            <div className="text-3xl font-bold text-blue-400 mb-2">{agents.length}</div>
            <div className="text-gray-400">Total Agents</div>
          </div>
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700">
            <div className="text-3xl font-bold text-purple-400 mb-2">{categories.length - 1}</div>
            <div className="text-gray-400">Categories</div>
          </div>
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700">
            <div className="text-3xl font-bold text-green-400 mb-2">100%</div>
            <div className="text-gray-400">Free</div>
          </div>
        </div>

        {/* Agent Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAgents.length === 0 ? (
            <div className="col-span-full text-center py-12 text-gray-400">
              <p className="text-xl mb-4">No agents found matching your search.</p>
            </div>
          ) : (
            filteredAgents.map(agent => (
              <div
                key={agent.id}
                className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700 hover:border-blue-500 transition group cursor-pointer"
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold group-hover:text-blue-400 transition">
                    {agent.name}
                  </h3>
                  <span className="px-2 py-1 text-xs rounded-full bg-blue-600/20 text-blue-400 border border-blue-600/30">
                    {agent.category}
                  </span>
                </div>
                <p className="text-gray-400 mb-4 line-clamp-3">{agent.description}</p>
                <div className="flex flex-wrap gap-2 mb-3">
                  {agent.capabilities.slice(0, 3).map((cap, idx) => (
                    <span key={idx} className="px-2 py-1 text-xs rounded bg-gray-700 text-gray-300">
                      {cap}
                    </span>
                  ))}
                </div>
                <div className="text-sm text-gray-500">
                  by {agent.creator}
                </div>
              </div>
            ))
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-800 mt-20">
        <div className="max-w-7xl mx-auto px-4 py-8 text-center text-gray-400">
          <p>© 2026 ClawMarketPlace - Free AI Agent Directory</p>
        </div>
      </footer>
    </div>
  )
}

export default App
