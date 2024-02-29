void setBuildStatus(String message, String state) {
  step([
      $class: "GitHubCommitStatusSetter",
      reposSource: [$class: "ManuallyEnteredRepositorySource", url: "https://github.com/PDA-MUBAKOIL/client.git"],
      contextSource: [$class: "ManuallyEnteredCommitContextSource", context: "ci/jenkins/build-status"],
      errorHandlers: [[$class: "ChangingBuildStatusErrorHandler", result: "UNSTABLE"]],
      statusResultSource: [ $class: "ConditionalStatusResultSource", results: [[$class: "AnyBuildResult", message: message, state: state]] ]
  ]);
}

def REACT_IMAGE_ID = '';

pipeline {
  agent any
	post {
    failure {
      setBuildStatus("Build failed", "FAILURE");
    }
    success {
      setBuildStatus("Build succeeded", "SUCCESS");
    }
  }
  stages {
    stage('init') {
        steps {
            echo 'init pipeline, check changes'
            setBuildStatus("Pending", "PENDING")
        }
    }
    stage('cofing') {
      steps {
        echo 'copy configuration files'
        // no config files yet
        sh 'pwd'
        sh 'cp /var/jenkins_home/workspace/config/.env.react .env'
      }
    }
    stage('build-react') {
      steps {
        script {
          REACT_IMAGE_ID = sh(returnStdout: true, script: 'docker images | grep react-build | awk \'{print $3\'}').trim()
          echo "prev image id : ${REACT_IMAGE_ID}"
        }
        echo 'move directory'
        sh 'pwd'
        sh 'docker build -t react-build .'
      }
    }
    stage('down') {
      environment {
        REACT_CONTAINER_ID = sh(returnStdout: true, script: 'docker ps -a | grep react | awk \'{print $1\'}').trim()
      }
      steps {
        script {
          if(env.REACT_CONTAINER_ID != null) {
            echo 'stop react container'
            echo "${env.REACT_CONTAINER_ID}"
            sh "docker stop ${env.REACT_CONTAINER_ID}"
            echo 'remove docker container'
            sh "docker rm ${env.REACT_CONTAINER_ID}"
          }
        }
      }
    }
    stage('deploy') {
      steps {
        echo 'run docker container'
        sh 'docker run --name react-build -d -v /usr/share/nginx/html:/output react'
        // sh 'docker-compose up -d'
      }
    }
    stage('clean') {
      when {
        expression {
          return REACT_IMAGE_ID != '';
        }
      }
      steps {
        echo "Clean react image ${REACT_IMAGE_ID}"
        sh "docker rmi ${REACT_IMAGE_ID}"
        // dangling images for multi stage build
        sh "docker image prune --force"
      }
    }
  }
}
