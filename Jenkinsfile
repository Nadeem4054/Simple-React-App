pipeline {
    agent any
    
    options {
        timeout(time: 30, unit: 'MINUTES')
        buildDiscarder(logRotator(numToKeepStr: '10'))
    }
    
    environment {
        NODE_ENV = 'production'
        VERCEL_TOKEN = credentials('vercel-token')
        VERCEL_ORG_ID = credentials('vercel-org-id')
        VERCEL_PROJECT_ID = credentials('vercel-project-id')
    }
    
    stages {
        stage('Checkout') {
            steps {
                echo '📥 Checking out code...'
                checkout scm
            }
        }
        
        stage('Install Dependencies') {
            steps {
                echo '📦 Installing dependencies...'
                sh 'npm ci --ignore-scripts'
            }
        }
        
        stage('Build') {
            steps {
                echo '🏗️ Building React application...'
                sh 'npm run build'
            }
        }
        
        stage('Deploy to Vercel') {
            when {
                branch 'main'
            }
            steps {
                echo '🚀 Deploying to Vercel...'
                sh '''
                    npx vercel --prod \
                      --token=${VERCEL_TOKEN} \
                      --org-id=${VERCEL_ORG_ID} \
                      --project-id=${VERCEL_PROJECT_ID} \
                      --yes
                '''
            }
        }
    }
    
    post {
        always {
            cleanWs()
        }
        success {
            echo '✅ Deployment successful!'
        }
        failure {
            echo '❌ Deployment failed!'
        }
    }
}
