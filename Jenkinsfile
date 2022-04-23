pipeline {
  agent any

  stages {
    stage('initialize') {
      steps {
        checkout scm
      }
    }

    stage('install') {
      steps {
        sh 'yarn install --frozen-lockfile'
      }
    }

    stage('publish') {
      steps {
        echo 'Publishing...'
      }
    }
  }
}