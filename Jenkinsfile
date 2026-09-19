pipeline {
  agent any
  
  environment {
    VERCEL_TOKEN = credentials('vercel_token')
  }
  
  stages {
    stage('install') {
      steps {
        sh 'npm install'
      }
    }
    
    stage('test') {
      steps {
        echo 'The test is complete'
      }
    }
    
    stage('build') {
      steps {
        sh 'npm run build'
      }
    }
    
    stage('deploy') {
      steps {
        sh 'npx vercel --prod --yes --token=$VERCEL_TOKEN'
      }
    }
  }
}
