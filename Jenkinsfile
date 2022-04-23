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
        stash includes: 'node_modules', name: 'dependencies'
      }
    }

    stage('publish') {
      steps {
        echo 'Publishing...'
      }
    }
  }
}