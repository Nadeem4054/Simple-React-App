# Simple React App with CI/CD Pipeline

🚀 A simple React application with **Counter** and **Task List** features, ready for automated deployment using Jenkins, GitHub, and Vercel.

## Features

✨ **Counter** - Increment, decrement, and reset a counter  
📝 **Task List** - Add, complete, and delete tasks  
🎨 **Beautiful UI** - Modern gradient design with smooth animations  
📱 **Responsive** - Works on desktop and mobile devices  

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- Git
- GitHub account
- Vercel account
- Jenkins setup (for CI/CD)

### Local Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/YOUR_USERNAME/simple-react-app.git
   cd simple-react-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```
   The app will open at `http://localhost:3000`

4. **Build for production**
   ```bash
   npm run build
   ```

## CI/CD Pipeline Setup

### Step 1: Push to GitHub
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/simple-react-app.git
git push -u origin main
```

### Step 2: Setup Jenkins

1. Install Jenkins and create a new Pipeline job
2. In Jenkins job configuration, paste the **Jenkinsfile** content
3. Create Jenkins credentials:
   - `vercel-token` - Your Vercel API token
   - `vercel-org-id` - Your Vercel Organization ID
   - `vercel-project-id` - Your Vercel Project ID

4. Get Vercel credentials:
   ```bash
   vercel login
   vercel link
   ```

### Step 3: Configure GitHub Webhook

1. Use **Ngrok** to expose local Jenkins:
   ```bash
   ngrok http 8080
   ```
   Copy the public URL

2. In GitHub Repository → Settings → Webhooks → Add webhook:
   - Payload URL: `https://YOUR_NGROK_URL/github-webhook/`
   - Content type: `application/json`
   - Events: Push events
   - Active: ✅

### Step 4: Deploy to Vercel

1. Connect your GitHub repo to Vercel
2. Deploy the project
3. Copy Project ID and Org ID for Jenkins

## Testing the Pipeline

1. Make a change to `src/App.jsx`
2. Commit and push to GitHub
   ```bash
   git add .
   git commit -m "Update message"
   git push
   ```
3. Watch Jenkins build automatically
4. App deploys to Vercel automatically

## Project Structure

```
simple-react-app/
├── public/
│   └── index.html
├── src/
│   ├── App.jsx
│   ├── App.css
│   ├── index.js
│   └── index.css
├── Jenkinsfile
├── package.json
├── .gitignore
└── README.md
```

## Troubleshooting

**Jenkins webhook not triggering:**
- Check Ngrok URL is correct
- Verify GitHub webhook payload URL
- Check Jenkins logs

**Vercel deployment fails:**
- Verify Vercel token is correct in Jenkins
- Check Project ID and Org ID
- Ensure `build` folder is in `.gitignore`

**Port 3000 already in use:**
```bash
PORT=3001 npm start
```

## Deployment URLs

- **Development**: `http://localhost:3000`
- **Production**: `https://your-project.vercel.app`

## Technologies Used

- ⚛️ React 18
- 🎨 CSS3 with Gradients & Animations
- 🔧 Jenkins CI/CD
- 🚀 Vercel Deployment
- 📦 GitHub Version Control

## License

MIT License - feel free to use this for learning!

---

**Happy Coding! 🎉**

For questions or issues, create a GitHub issue or reach out!
