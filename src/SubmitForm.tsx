import { useState } from 'react'

interface FormData {
  name: string
  description: string
  category: string
  creator: string
  capabilities: string
  website: string
}

export default function SubmitForm({ onClose }: { onClose: () => void }) {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    description: '',
    category: 'productivity',
    creator: '',
    capabilities: '',
    website: ''
  })
  const [submitting, setSubmitting] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)
    setError('')

    try {
      // Parse capabilities
      const capabilityList = formData.capabilities
        .split(',')
        .map(c => c.trim())
        .filter(c => c)

      if (capabilityList.length === 0) {
        throw new Error('Please add at least one capability')
      }

      // Create the agent object
      const agent = {
        id: Date.now().toString(),
        name: formData.name,
        description: formData.description,
        category: formData.category,
        creator: formData.creator,
        capabilities: capabilityList,
        website: formData.website || undefined
      }

      // For now, show success and provide GitHub PR link
      // In production, this would call an API that creates the PR
      console.log('Agent to submit:', agent)
      
      setSuccess(true)
      
      // Copy to clipboard for manual PR
      const agentCode = JSON.stringify(agent, null, 2)
      await navigator.clipboard.writeText(agentCode)
      
    } catch (err: any) {
      setError(err.message || 'Failed to submit agent')
    } finally {
      setSubmitting(false)
    }
  }

  if (success) {
    return (
      <div className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50">
        <div className="bg-bg-card border-[3px] border-lime p-8 max-w-2xl w-full">
          <h2 className="font-pixel text-lg text-lime mb-4">SUCCESS!</h2>
          <p className="text-text-secondary mb-4">
            Your agent details have been copied to clipboard!
          </p>
          <div className="bg-bg-dark p-4 border-[3px] border-border-color mb-6 text-sm text-text-secondary font-mono">
            <p className="mb-3">To complete your submission:</p>
            <ol className="list-decimal list-inside space-y-2 text-xs">
              <li>Go to <a href="https://github.com/aiboxacct-jpg/claw-marketplace" target="_blank" className="text-cyan hover:text-hot-pink">the GitHub repo</a></li>
              <li>Open <code className="text-lime">src/App.tsx</code></li>
              <li>Find the <code className="text-cyan">sampleAgents</code> array</li>
              <li>Paste your agent data (already in clipboard!)</li>
              <li>Create a Pull Request</li>
            </ol>
          </div>
          <div className="flex gap-3">
            <a 
              href="https://github.com/aiboxacct-jpg/claw-marketplace/edit/main/src/App.tsx"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 px-4 py-3 text-sm font-bold bg-hot-pink text-bg-dark hover:bg-cyan transition-all text-center"
            >
              OPEN GITHUB
            </a>
            <button
              onClick={onClose}
              className="flex-1 px-4 py-3 text-sm font-bold border-[3px] border-border-color text-text-primary hover:border-cyan transition-all"
            >
              CLOSE
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50 overflow-y-auto">
      <div className="bg-bg-card border-[3px] border-hot-pink p-6 max-w-2xl w-full my-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="font-pixel text-lg text-hot-pink">SUBMIT AGENT</h2>
          <button
            onClick={onClose}
            className="text-text-muted hover:text-hot-pink text-2xl font-bold"
          >
            ×
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {error && (
            <div className="bg-bg-dark border-[3px] border-hot-pink p-4 text-hot-pink text-sm">
              {error}
            </div>
          )}

          <div>
            <label className="block text-sm font-bold text-text-primary mb-2 uppercase">
              Agent Name *
            </label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-3 bg-bg-dark border-[3px] border-border-color focus:border-cyan focus:outline-none text-text-primary font-mono"
              placeholder="e.g., CodeAssist Pro"
            />
          </div>

          <div>
            <label className="block text-sm font-bold text-text-primary mb-2 uppercase">
              Description *
            </label>
            <textarea
              required
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              rows={4}
              className="w-full px-4 py-3 bg-bg-dark border-[3px] border-border-color focus:border-cyan focus:outline-none text-text-primary font-mono text-sm"
              placeholder="Describe what your agent does..."
            />
          </div>

          <div>
            <label className="block text-sm font-bold text-text-primary mb-2 uppercase">
              Category *
            </label>
            <select
              required
              value={formData.category}
              onChange={(e) => setFormData({ ...formData, category: e.target.value })}
              className="w-full px-4 py-3 bg-bg-dark border-[3px] border-border-color focus:border-cyan focus:outline-none text-text-primary font-mono"
            >
              <option value="productivity">Productivity</option>
              <option value="coding">Coding</option>
              <option value="marketing">Marketing</option>
              <option value="gaming">Gaming</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-bold text-text-primary mb-2 uppercase">
              Your Name/Handle *
            </label>
            <input
              type="text"
              required
              value={formData.creator}
              onChange={(e) => setFormData({ ...formData, creator: e.target.value })}
              className="w-full px-4 py-3 bg-bg-dark border-[3px] border-border-color focus:border-cyan focus:outline-none text-text-primary font-mono"
              placeholder="e.g., @yourhandle"
            />
          </div>

          <div>
            <label className="block text-sm font-bold text-text-primary mb-2 uppercase">
              Capabilities (comma-separated) *
            </label>
            <input
              type="text"
              required
              value={formData.capabilities}
              onChange={(e) => setFormData({ ...formData, capabilities: e.target.value })}
              className="w-full px-4 py-3 bg-bg-dark border-[3px] border-border-color focus:border-cyan focus:outline-none text-text-primary font-mono text-sm"
              placeholder="e.g., Code generation, Bug fixing, Testing"
            />
          </div>

          <div>
            <label className="block text-sm font-bold text-text-primary mb-2 uppercase">
              Website (optional)
            </label>
            <input
              type="url"
              value={formData.website}
              onChange={(e) => setFormData({ ...formData, website: e.target.value })}
              className="w-full px-4 py-3 bg-bg-dark border-[3px] border-border-color focus:border-cyan focus:outline-none text-text-primary font-mono"
              placeholder="https://..."
            />
          </div>

          <div className="flex gap-3 pt-4">
            <button
              type="submit"
              disabled={submitting}
              className="flex-1 px-6 py-4 text-sm font-bold bg-hot-pink text-bg-dark hover:bg-lime hover:text-bg-dark disabled:opacity-50 disabled:cursor-not-allowed transition-all uppercase"
            >
              {submitting ? 'SUBMITTING...' : 'SUBMIT AGENT'}
            </button>
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-4 text-sm font-bold border-[3px] border-border-color text-text-primary hover:border-cyan transition-all uppercase"
            >
              CANCEL
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
