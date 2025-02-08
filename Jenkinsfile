pipeline {
    agent any
    environment {
        DOCKER_HUB_REPO = "akshaygoutham3277/react-node"
        VERSION = "${BUILD_NUMBER}-${new Date().format('yyyyMMddHHmmss')}"
        BACKEND_DOC_IMG = "${DOCKER_HUB_REPO}-backend"
        FRONTEND_DOC_IMG = "${DOCKER_HUB_REPO}-frontend"
        BACKEND_TAG = "${BACKEND_DOC_IMG}:${VERSION}"
        FRONTEND_TAG = "${FRONTEND_DOC_IMG}:${VERSION}"
    }
    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/akshaygoutham/react_node.git'
            }
        }
        stage('Build backend image') {
            steps {
                sh "docker build -t ${BACKEND_TAG} ./backend/"
                echo "Backend image built: ${BACKEND_TAG}"
            }
        }
        stage('Build frontend image') {
            steps {
                sh "docker build -t ${FRONTEND_TAG} ./frontend/"
                echo "Frontend image built: ${FRONTEND_TAG}"
            }
        }
        stage ('Push to Docker Hub') {
            steps {
                withDockerRegistry([credentialsId: 'dockerhubcred']) {
                    sh "docker push ${BACKEND_TAG}"
                    sh "docker push ${FRONTEND_TAG}"
                    echo "Images pushed successfully!"
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
