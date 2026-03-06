import { useState, useEffect } from 'react'
import './Settings.css'

function Settings({ isOpen, onClose }) {
  const [apiKey, setApiKey] = useState('')
  const [saved, setSaved] = useState(false)

  useEffect(() => {
    // Load saved API key from localStorage
    const savedKey = localStorage.getItem('claude_api_key')
    if (savedKey) {
      setApiKey(savedKey)
    }
  }, [])

  const handleSave = () => {
    if (apiKey.trim()) {
      localStorage.setItem('claude_api_key', apiKey.trim())
      setSaved(true)
      setTimeout(() => {
        setSaved(false)
        onClose()
      }, 1500)
    }
  }

  const handleClear = () => {
    localStorage.removeItem('claude_api_key')
    setApiKey('')
    setSaved(true)
    setTimeout(() => setSaved(false), 1500)
  }

  if (!isOpen) return null

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>⚙️ Settings</h2>
          <button className="close-btn" onClick={onClose}>✕</button>
        </div>

        <div className="modal-body">
          <div className="setting-section">
            <h3>🤖 Claude API Key</h3>
            <p className="help-text">
              Connect your own Claude API key to generate personalized contracts with AI.
              Without an API key, the app uses pre-built templates.
            </p>

            <div className="input-group">
              <input
                type="password"
                placeholder="sk-ant-api03-..."
                value={apiKey}
                onChange={(e) => setApiKey(e.target.value)}
                className="api-key-input"
              />
            </div>

            <div className="info-box">
              <p><strong>How to get your API key:</strong></p>
              <ol>
                <li>Go to <a href="https://console.anthropic.com/settings/keys" target="_blank" rel="noopener noreferrer">
                  console.anthropic.com/settings/keys
                </a></li>
                <li>Create a new API key</li>
                <li>Copy and paste it above</li>
              </ol>
              <p className="note">
                💡 <strong>Your API key is stored locally</strong> in your browser only.
                It's never sent to our servers.
              </p>
            </div>

            <div className="button-group">
              <button 
                onClick={handleSave} 
                className="btn-primary"
                disabled={!apiKey.trim()}
              >
                {saved ? '✅ Saved!' : '💾 Save API Key'}
              </button>
              {localStorage.getItem('claude_api_key') && (
                <button onClick={handleClear} className="btn-secondary">
                  🗑️ Clear API Key
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Settings
