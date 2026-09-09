pipeline {
    agent any
    
    environment {
        VERCEL_TOKEN = credentials('vercel-token')
        VERCEL_ORG_ID = credentials('vercel-org-id')
        VERCEL_PROJECT_ID = credentials('vercel-project-id')
    }
    
    stages {
        stage('Checkout') {
            steps {
                echo 'Checking out code from GitHub...'
                checkout scm
            }
        }
        
        stage('Install Dependencies') {
            steps {
                echo 'Installing npm dependencies...'
                sh 'npm install'
            }
        }
        
        stage('Build') {
            steps {
                echo 'Building React application...'
                sh 'npm run build'
            }
        }
        
        stage('Deploy to Vercel') {
            steps {
                echo 'Deploying to Vercel...'
                sh '''
                    npm install -g vercel
                    vercel --prod \
                      --token=${VERCEL_TOKEN} \
                      --org-id=${VERCEL_ORG_ID} \
                      --project-id=${VERCEL_PROJECT_ID}
                '''
            }
        }
    }
    
    post {
        always {
            echo 'Pipeline execution finished!'
        }
        success {
            echo '✅ Deployment successful!'
        }
        failure {
            echo '❌ Deployment failed!'
        }
    }
}
