pipeline {
    agent any
    environment {
        BACKEND_DOC_IMG = "backend-img"
        FRONTEND_DOC_IMG = "frontend-img"
        VERSION = "${BUILD_NUMBER}-${new Date().format('yyyyMMddHHmmss')}"
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
                    def backendTag = "${BACKEND_DOC_IMG}:${VERSION}"
                    sh """
                    docker build -t ${backendTag} ./backend/
                    docker tag ${backendTag} ${BACKEND_DOC_IMG}:latest
                    """
                    echo "Backend image built: ${backendTag}"
                }
            }
        }
        stage('Build frontend image') {
            steps {
                script {
                    def frontendTag = "${FRONTEND_DOC_IMG}:${VERSION}"
                    sh """
                    docker build -t ${frontendTag} ./frontend/
                    docker tag ${frontendTag} ${FRONTEND_DOC_IMG}:latest
                    """
                    echo "Frontend image built: ${frontendTag}"
                }
            }
        }
    }
    post {
        success {
            echo "Pipeline executed successfully! Images tagged with: ${VERSION}"
        }
        failure {
            echo "Pipeline execution failed!"
        }
    }
}
