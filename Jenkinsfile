pipeline {
    agent any

    environment {
        IMAGE_NAME = "sicei-app"
        CONTAINER_NAME = "sicei-container"
        TAG = "${BUILD_ID}"
    }

    stages {
        stage('Build') {
            steps {
                echo "🔧 Construyendo imagen Docker..."
                sh 'docker build -t $IMAGE_NAME:$TAG .'
            }
        }

        stage('Deploy') {
            steps {
                echo "🚀 Desplegando imagen..."
                // Detener y eliminar contenedor anterior si existe
                sh '''
                    docker stop $CONTAINER_NAME || echo "No estaba corriendo"
                    docker rm $CONTAINER_NAME || echo "Nada que borrar"
                    docker run -d --name $CONTAINER_NAME -p 3000:3000 $IMAGE_NAME:$TAG
                '''
            }
        }
    }

    post {
        failure {
            echo "❌ La construcción o el despliegue fallaron."
        }
        success {
            echo "✅ Despliegue exitoso de SICEI con tag $TAG"
        }
    }
}
