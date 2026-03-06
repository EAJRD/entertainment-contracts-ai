# 🎭 Entertainment Contracts AI

> **Open-source AI-powered platform for generating legally-sound entertainment industry contracts**

Help independent artists, managers, and labels create fair agreements without expensive lawyers.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Claude API](https://img.shields.io/badge/Powered%20by-Claude%20AI-blueviolet)](https://www.anthropic.com/claude)

---

## 🎯 The Problem

**80% of independent artists** never see a lawyer before signing contracts. This leads to:
- 💸 Unfair revenue splits
- 🔒 Loss of rights & masters
- 📉 Career-limiting agreements
- ⚖️ Legal battles

**Legal consultation costs:** $300-500/hour  
**Most artists can't afford it.**

---

## ✨ The Solution

**Entertainment Contracts AI** uses Claude to:

1. **Generate Custom Contracts**
   - Artist Management Agreements
   - Distribution Deals
   - Publishing Agreements
   - Producer Contracts
   - Split Sheets
   - NDAs

2. **Review Existing Contracts**
   - Detect unfair clauses
   - Explain legalese in plain English
   - Highlight red flags
   - Suggest improvements

3. **Fairness Scoring**
   - Analyze contract balance (1-10 score)
   - Compare to industry standards
   - Protect artists from predatory deals

4. **Multi-language Support**
   - English, Spanish, Portuguese
   - Localized legal frameworks

---

## 🤖 How We Use Claude AI

### Contract Generation
```javascript
// Claude analyzes artist needs and generates personalized contracts
const contract = await claude.generateContract({
  type: 'artist-management',
  artistName: 'John Doe',
  managerName: 'Jane Smith',
  commissionRate: 15,
  territory: 'worldwide',
  term: '2 years'
});
```

### Contract Review
```javascript
// Upload PDF → Claude detects issues
const review = await claude.reviewContract(contractPDF);
// Returns: fairness score, red flags, suggestions
```

### Legal Explainer
```javascript
// Translate complex legalese
const explanation = await claude.explain({
  clause: "In perpetuity throughout the universe...",
  language: 'en'
});
// → "This means forever, everywhere. ⚠️ You lose rights permanently."
```

---

## 🚀 Features

- ✅ **6+ Contract Types** ready to use
- ✅ **AI-powered review** with fairness scoring
- ✅ **Plain English explanations** for every clause
- ✅ **Multi-language** (EN/ES/PT)
- ✅ **PDF generation** with professional formatting
- ✅ **Open-source templates** - community contributions welcome
- ✅ **Privacy-first** - no data stored

---

## 🛠️ Tech Stack

- **Frontend:** React + Tailwind CSS
- **Backend:** Node.js + Express
- **AI:** Anthropic Claude API (Opus for legal accuracy)
- **PDF:** jsPDF + Markdown templates
- **Deploy:** Vercel / Netlify
- **License:** MIT

---

## 📦 Installation

```bash
git clone https://github.com/EAJRD/entertainment-contracts-ai
cd entertainment-contracts-ai
npm install
npm run dev
```

### 🔑 Claude API Setup (Optional - BYOK)

This app uses **Bring Your Own Key (BYOK)** - you need your own Claude API key for AI-powered contracts.

**Without an API key:** The app uses pre-built templates (still useful!)  
**With an API key:** Get personalized, AI-generated contracts

#### How to get your Claude API key:

1. Go to [console.anthropic.com/settings/keys](https://console.anthropic.com/settings/keys)
2. Sign up for an account (free tier available)
3. Create a new API key
4. In the app, click **⚙️ Settings** and paste your key
5. Your key is stored **locally in your browser** - it's never sent to our servers

**Pricing:** Claude API is pay-as-you-go (~$0.05 per contract generation with Claude 3.5 Sonnet)

> **Note:** API key is optional! The app works with templates if you don't add one.

---

## 🗺️ Roadmap

### Phase 1: MVP (Month 1-2)
- [x] Landing page
- [ ] 5 core contract types
- [ ] Basic PDF generation
- [ ] Claude integration

### Phase 2: Review Engine (Month 3-4)
- [ ] Contract upload & parsing
- [ ] Fairness scoring algorithm
- [ ] Red flag detection
- [ ] Comparison to industry standards

### Phase 3: Expansion (Month 5-6)
- [ ] Multi-language support (ES/PT)
- [ ] Community template library
- [ ] API for third-party integrations
- [ ] Mobile app

---

## 🤝 Contributing

We welcome contributions! Especially:
- **Legal professionals:** Review contract templates
- **Developers:** Improve AI prompts & UX
- **Translators:** Localize to new languages
- **Artists:** Share feedback & feature requests

See [CONTRIBUTING.md](CONTRIBUTING.md)

---

## 📄 License

MIT License - See [LICENSE](LICENSE)

---

## 🙏 Acknowledgments

- **Anthropic** for Claude API access (applying for OSS program)
- **Legal templates** adapted from public domain sources
- **Community contributors** (see [CONTRIBUTORS.md](CONTRIBUTORS.md))

---

## ⚠️ Legal Disclaimer

This tool provides **legal information**, not **legal advice**.  
Contracts generated should be reviewed by a licensed attorney before signing.  
We are not responsible for legal outcomes.

---

## 📧 Contact

- **Project Lead:** Ernesto Rodriguez (EAJRD)
- **Instagram:** [@Ernesto_aj_dietsch](https://www.instagram.com/ernesto_aj_dietsch/)

---

**Built with ❤️ for the independent artist community**
