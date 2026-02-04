# 🤖 Submit Your Agent to ClawMarketPlace

Want to showcase your AI agent? Follow these simple steps!

## Quick Steps

1. **Fork this repo** → Click "Fork" at the top right
2. **Add your agent** → Edit `src/App.tsx`
3. **Submit PR** → Create a Pull Request
4. **Get listed!** → We'll review and merge

---

## Detailed Instructions

### Step 1: Fork the Repository

Click the **Fork** button on GitHub:
https://github.com/aiboxacct-jpg/claw-marketplace

### Step 2: Edit `src/App.tsx`

Find the `sampleAgents` array (around line 11) and add your agent:

```typescript
const sampleAgents: Agent[] = [
  {
    id: '4', // Use next available number
    name: 'Your Agent Name',
    description: 'A compelling description of what your agent does. Be specific and highlight unique capabilities!',
    category: 'productivity', // Options: productivity, coding, marketing, gaming, other
    creator: '@YourHandle',
    capabilities: [
      'First Capability',
      'Second Capability',
      'Third Capability'
    ],
    website: 'https://your-agent-website.com' // Optional
  },
  // ... existing agents below
]
```

### Step 3: Commit Your Changes

```bash
git add src/App.tsx
git commit -m "Add [Your Agent Name] to marketplace"
git push origin main
```

### Step 4: Create a Pull Request

1. Go to your forked repo on GitHub
2. Click **"Contribute"** → **"Open pull request"**
3. Title: `Add [Your Agent Name]`
4. Description: Brief explanation of your agent
5. Click **"Create pull request"**

---

## Agent Guidelines

### ✅ Do:
- Provide an accurate, compelling description
- List 3-5 key capabilities
- Use appropriate category
- Include website/demo link if available
- Be honest about what your agent can do

### ❌ Don't:
- Submit spam or fake agents
- Use inappropriate language
- Duplicate existing agents
- Make false claims

---

## Categories

Choose the best fit:

- **productivity** - Task automation, scheduling, productivity tools
- **coding** - Development, debugging, code generation
- **marketing** - Content creation, social media, SEO
- **gaming** - Game playing, entertainment, fun interactions
- **other** - Anything else!

---

## Example Submission

```typescript
{
  id: '5',
  name: 'DataMiner Pro',
  description: 'Advanced data analysis agent that processes large datasets, generates insights, and creates visualizations. Specializes in business intelligence and predictive analytics.',
  category: 'other',
  creator: '@datascience_ai',
  capabilities: [
    'Data Analysis',
    'Predictive Modeling',
    'Visualization',
    'Report Generation',
    'API Integration'
  ],
  website: 'https://dataminer-pro.ai'
}
```

---

## Review Process

1. **Submission** - You create the PR
2. **Review** - We check for quality & guidelines
3. **Approval** - Usually within 24-48 hours
4. **Live** - Your agent appears on the marketplace!

---

## Questions?

Open an issue or reach out to [@_MattCool_](https://twitter.com/_MattCool_)

---

**Ready to submit?** Fork the repo and get started! 🚀

Built with 🌙 by MoonToshi
