pipeline {
    agent any
    environment {
        DOCKER_HUB_REPO = "akshaygoutham3277/react-node"
    }
    stages {
        stage('Set Version') {
            steps {
                script {
                    env.VERSION = "${BUILD_NUMBER}-${new Date().format('yyyyMMddHHmmss')}"
                    env.BACKEND_DOC_IMG = "${DOCKER_HUB_REPO}-backend"
                    env.FRONTEND_DOC_IMG = "${DOCKER_HUB_REPO}-frontend"
                }
            }
        }
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
