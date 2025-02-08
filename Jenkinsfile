pipeline {
    agent any
    environment {
        BACKEND_DOC_IMG = "back"
        FRONTEND_DOC_IMG = "front"
    }
    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/akshaygoutham/react_node.git'
            }
        }
        stage('Build backend image') {
            steps {
                script {
                    sh '''
                    docker build -t "$BACKEND_DOC_IMG" ./backend/
                    '''
                }
            }
        }
        stage('Build frontend image') {
            steps {
                script {
                    sh '''
                    docker build -t "$FRONTEND_DOC_IMG" ./frontend/
                    '''
                }
            }
        }
    }
    post {
        success {
            echo "Pipeline executed successfully!"
        }
        failure {
            echo "Pipeline execution failed!"
        }
    }
}
