pipeline {
    agent any
    environment {
        BACKEND_DOC_IMG="back"
        FRONTEND_DOC_IMG="front"
    }
    stages {
        stage ('checkout') {
            steps {
                branch : 'main' , url: 'https://github.com/akshaygoutham/react_node.git'
            }
        }
        stage ('Build backend image') {
            steps {
                script {
                    sh ''' 
                    docker build -t $BACKEND_DOC_IMG ./backend/
                    '''
                }
            }
        }
        stage ('Build frontend image') {
            steps {
                script {
                    sh ''' 
                    docker build -t $FRONTEND_DOC_IMG ./frontend/
                    '''
                }
            }
        }
    }
    post {
        success {
            echo "success"
        }
        failure {
            echo " failed"
        }
    }
}
