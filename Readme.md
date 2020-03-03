# MancalaJe
[![Generic badge](https://img.shields.io/static/v1.svg?label=Homepage&message=MancalaJE&color=informational)](http://mancalaje.joaofilipesabinoesperancinha.nl/) 
[![GitHub release](https://img.shields.io/github/release-pre/jesperancinha/mancalaje.svg)](#)
  
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/f30b682f67e44391a922f62ada6b2f85)](https://www.codacy.com/app/jofisaes/mancalaje?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=jesperancinha/mancalaje&amp;utm_campaign=Badge_Grade)
[![CircleCI](https://circleci.com/gh/jesperancinha/mancalaje.svg?style=svg)](https://circleci.com/gh/jesperancinha/mancalaje)
[![Build Status](https://travis-ci.org/jesperancinha/mancalaje.svg?branch=master)](https://travis-ci.org/jesperancinha/mancalaje)
[![codebeat badge](https://codebeat.co/badges/eaf7a2e0-ed2c-47fb-9323-2051db72c171)](https://codebeat.co/projects/github-com-jesperancinha-mancalaje-master)
[![BCH compliance](https://bettercodehub.com/edge/badge/jesperancinha/mancalaje?branch=master)](https://bettercodehub.com/)
[![Known Vulnerabilities](https://snyk.io/test/github/jesperancinha/mancalaje/badge.svg)](https://snyk.io/test/github/jesperancinha/mancalaje)

[![GitHub language count](https://img.shields.io/github/languages/count/jesperancinha/mancalaje.svg)](#)
[![GitHub top language](https://img.shields.io/github/languages/top/jesperancinha/mancalaje.svg)](#)
[![GitHub top language](https://img.shields.io/github/languages/code-size/jesperancinha/mancalaje.svg)](#)
  
[![Generic badge](https://img.shields.io/static/v1.svg?label=Homepage&message=MancalaJE&color=informational)](http://mancalaje.joaofilipesabinoesperancinha.nl/)

```text                                                                                         
@@@@@@@@@@    @@@@@@   @@@  @@@   @@@@@@@   @@@@@@   @@@        @@@@@@                   @@@  @@@@@@@@  
@@@@@@@@@@@  @@@@@@@@  @@@@ @@@  @@@@@@@@  @@@@@@@@  @@@       @@@@@@@@                  @@@  @@@@@@@@  
@@! @@! @@!  @@!  @@@  @@!@!@@@  !@@       @@!  @@@  @@!       @@!  @@@                  @@!  @@!       
!@! !@! !@!  !@!  @!@  !@!!@!@!  !@!       !@!  @!@  !@!       !@!  @!@                  !@!  !@!       
@!! !!@ @!@  @!@!@!@!  @!@ !!@!  !@!       @!@!@!@!  @!!       @!@!@!@!  @!@!@!@!@       !!@  @!!!:!    
!@!   ! !@!  !!!@!!!!  !@!  !!!  !!!       !!!@!!!!  !!!       !!!@!!!!  !!!@!@!!!       !!!  !!!!!:    
!!:     !!:  !!:  !!!  !!:  !!!  :!!       !!:  !!!  !!:       !!:  !!!                  !!:  !!:       
:!:     :!:  :!:  !:!  :!:  !:!  :!:       :!:  !:!   :!:      :!:  !:!             !!:  :!:  :!:       
:::     ::   ::   :::   ::   ::   ::: :::  ::   :::   :: ::::  ::   :::             ::: : ::   :: ::::  
 :      :     :   : :  ::    :    :: :: :   :   : :  : :: : :   :   : :              : :::    : :: ::   
```                                                                                                           

## Docker Compose

I have provided a docker-compose environment that will run this application in your docker-machine addess.

Make sure that the docker-machine is correctly installed and that you set your environment to your machine.

All that needs top be done is to call the build.sh script with the name of the target docker-machine. In my case its 'dev'.

Example:

```bash
./build.sh dev
```

Be sure to wait at least a couple of minutes. The Spring boot process needs to start queues and all the connectivity with PostgreSQL.

## Milestones

2019-08-01:
-   5 hour long inactivity registration via email
-   Mail notification
-   Responsive web app
-   Refactoring and re-using Redux

2019-07-22:
-   Password Encryption

2019-07-21:
-   JMS Queueing system implemented for maintenance tasks

2019-07-15:
-   First fully playable version

2019-07-02:
-   OAuth2 Login

2019-07-01:
-   OAuth2 Implementation
-   Basic front end

## Docker images

This project makes use of the following docker images:

[![dockeri.co](https://dockeri.co/image/jesperancinha/je-all-build)](https://hub.docker.com/r/jesperancinha/je-all-build)

[![dockeri.co](https://dockeri.co/image/library/postgres)](https://hub.docker.com/r/library/postgres)

All source code for the [JE](https://bitbucket.org/jesperancinha/docker-images) images reside in repo [Docker images](https://bitbucket.org/jesperancinha/docker-images).

## DevOps References

```text
$ touch /etc/nginx/sites-available/mancalaje
$ sudo ln -s /etc/nginx/sites-available/mancalaje /etc/nginx/sites-enabled/
$ sudo service nginx restart
$ sudo vim /etc/systemd/system/mancalaje.service  
$ sudo vim mancalaje-service  
$ sudo chmod +x mancalaje-service  
$ sudo systemctl daemon-reload  
$ sudo systemctl enable mancalaje  
$ sudo systemctl start mancalaje  
$ sudo systemctl status mancalaje
$ sudo -u postgres psql
\password postgres
create database mancalajedb
\q
```


## Hints & Tricks

-   Install minikube

```bash
brew install minikube 
```

-   Install java versions without [SDKMan](https://sdkman.io/) for [ubuntu prompt for windows](https://www.microsoft.com/en-us/p/ubuntu/9nblggh4msv6?activetab=pivot:overviewtab).

```bash
apt-get -y update
apt-get -y upgrade
apt -y install apt-transport-https ca-certificates wget dirmngr gnupg software-properties-common
wget -qO - https://adoptopenjdk.jfrog.io/adoptopenjdk/api/gpg/key/public | apt-key add -
add-apt-repository --yes https://adoptopenjdk.jfrog.io/adoptopenjdk/deb/
apt -y update
apt -y install adoptopenjdk-8-hotspot
apt install openjdk-11-jdk
```

- .bashrc file to get Gradle, GitPrompt, [SDKMAN](https://sdkman.io/) and some handy aliases in a Windows environment with [MinGW](http://www.mingw.org/).

```bash
export GRADLE_HOME=/opt/gradle/gradle-6.1.1
export PATH=${GRADLE_HOME}/bin:${PATH}
alias ll='ls -l -a --color=auto'
if [ -f "/root/.bash-git-prompt/gitprompt.sh" ]; then
    GIT_PROMPT_ONLY_IN_REPO=1
    source /root/.bash-git-prompt/gitprompt.sh
fi

alias java13="sdk use java 13.0.2.hs-adpt"
alias java12="sdk use java 12.0.2.hs-adpt"
alias java8="sdk use java 8.0.242.hs-adpt"
alias m2disable="rm ~/.m2/settings.xml"
alias m2enable="cp /your_repo_folder/settings.xml ~/.m2/"

#THIS MUST BE AT THE END OF THE FILE FOR SDKMAN TO WORK!!!
export SDKMAN_DIR="/root/.sdkman"
[[ -s "/root/.sdkman/bin/sdkman-init.sh" ]] && source "/root/.sdkman/bin/sdkman-init.sh"
```

- .bashrc file to get Gradle, GitPrompt and some handy aliases in a Windows environment with [ubuntu prompt for windows](https://www.microsoft.com/en-us/p/ubuntu/9nblggh4msv6?activetab=pivot:overviewtab).

```bash
export GRADLE_HOME=/opt/gradle/gradle-6.1.1
export PATH=${GRADLE_HOME}/bin:${PATH}
alias ll='ls -l -a --color=auto'
if [ -f "/root/.bash-git-prompt/gitprompt.sh" ]; then
    GIT_PROMPT_ONLY_IN_REPO=1
    source /root/.bash-git-prompt/gitprompt.sh
fi

alias java8="export JAVA_HOME=/usr/lib/jvm/java-8-openjdk-amd64 && update-java-alternatives -s java-1.8.0-openjdk-amd64"
alias java11="export JAVA_HOME=/usr/lib/jvm/java-1.11.0-openjdk-amd64 && update-java-alternatives -s java-1.11.0-openjdk-amd64"

#THIS MUST BE AT THE END OF THE FILE FOR SDKMAN TO WORK!!!
export SDKMAN_DIR="/root/.sdkman"
[[ -s "/root/.sdkman/bin/sdkman-init.sh" ]] && source "/root/.sdkman/bin/sdkman-init.sh"
```

## References

### Generic

-   [What is minikube, kubectl and kubelet by Andreth Salazar](https://www.quora.com/What-is-minikube-kubectl-and-kubelet)
-   [Installing Kubernetes with Minikube](https://kubernetes.io/docs/setup/learning-environment/minikube/)
-   [Trigger a Spring Batch job with a JMS message](https://blog.mimacom.com/trigger-spring-batch-job-with-jms-message/)
-   [Postman](https://www.getpostman.com/)
-   [Spring Boot OAuth2 Social Login with Google, Facebook, and Github - Part 1](https://www.callicoder.com/spring-boot-security-oauth2-social-login-part-1/)
-   [Shields IO](https://shields.io)
-   [How To Install Oracle Java 8 and OpenJDK 11 on Ubuntu 18.04, 19.04](https://www.linuxbabe.com/ubuntu/install-oracle-java-8-openjdk-11-ubuntu-18-04-18-10)

### Implementation related

-   [Apache MQ BrokerService](https://activemq.apache.org/maven/apidocs/org/apache/activemq/broker/BrokerService.html)
-   [Apache MQ BrokerFactory](https://activemq.apache.org/maven/apidocs/org/apache/activemq/broker/BrokerFactory.html)
-   [Apache MQ ActiveMQConnectionFactory](https://activemq.apache.org/maven/apidocs/org/apache/activemq/ActiveMQConnectionFactory.html)

## About me

[![Twitter Follow](https://img.shields.io/twitter/follow/joaofse?label=João%20Esperancinha&style=social)](https://twitter.com/joaofse)
[![GitHub followers](https://img.shields.io/github/followers/jesperancinha.svg?label=jesperancinha&style=social)](https://github.com/jesperancinha)
[![Generic badge](https://img.shields.io/static/v1.svg?label=BitBucket&message=jesperancinha&color=navy)](https://bitbucket.org/jesperancinha)
[![Generic badge](https://img.shields.io/static/v1.svg?label=GitLab&message=jesperancinha&color=navy)](https://gitlab.com/jesperancinha)
[![Generic badge](https://img.shields.io/static/v1.svg?label=Homepage&message=joaofilipesabinoesperancinha.nl&color=6495ED)](http://joaofilipesabinoesperancinha.nl)
[![Generic badge](https://img.shields.io/static/v1.svg?label=Homepage&message=Time%20Disruption%20Studios&color=6495ED)](http://tds.joaofilipesabinoesperancinha.nl/)
[![Generic badge](https://img.shields.io/static/v1.svg?label=Homepage&message=Image%20Train%20Filters&color=6495ED)](http://itf.joaofilipesabinoesperancinha.nl/)
[![Generic badge](https://img.shields.io/static/v1.svg?label=Homepage&message=MancalaJE&color=6495ED)](http://mancalaje.joaofilipesabinoesperancinha.nl/)
[![Generic badge](https://img.shields.io/static/v1.svg?label=Articles&message=On%20The%20Web&color=purple)](https://github.com/jesperancinha/project-signer/blob/master/project-signer-templates/LossArticles.md)
[![Generic badge](https://img.shields.io/static/v1.svg?label=DEV&message=Profile&color=green)](https://dev.to/jofisaes)
[![Generic badge](https://img.shields.io/static/v1.svg?label=Medium&message=@jofisaes&color=green)](https://medium.com/@jofisaes)
[![Generic badge](https://img.shields.io/static/v1.svg?label=Hackernoon&message=@jesperancinha&color=green)](https://hackernoon.com/@jesperancinha)
[![Generic badge](https://img.shields.io/static/v1.svg?label=Free%20Code%20Camp&message=jofisaes&color=008000)](https://www.freecodecamp.org/jofisaes)
[![Generic badge](https://img.shields.io/static/v1.svg?label=Hackerrank&message=jofisaes&color=008000)](https://www.hackerrank.com/jofisaes)
[![Generic badge](https://img.shields.io/static/v1.svg?label=Code%20Forces&message=jesperancinha&color=008000)](https://codeforces.com/profile/jesperancinha)
[![Generic badge](https://img.shields.io/static/v1.svg?label=Coder%20Byte&message=jesperancinha&color=008000)](https://coderbyte.com/profile/jesperancinha)
[![Generic badge](https://img.shields.io/static/v1.svg?label=Code%20Wars&message=jesperancinha&color=008000)](https://www.codewars.com/users/jesperancinha)
[![Generic badge](https://img.shields.io/static/v1.svg?label=Acclaim%20Badges&message=joao-esperancinha&color=red)](https://www.youracclaim.com/users/joao-esperancinha/badges)
[![Generic badge](https://img.shields.io/static/v1.svg?label=All%20Badges&message=Badges&color=red)](https://github.com/jesperancinha/project-signer/blob/master/project-signer-templates/Badges.md)
[![Generic badge](https://img.shields.io/static/v1.svg?label=Status&message=Project%20Status&color=red)](https://github.com/jesperancinha/project-signer/blob/master/project-signer-templates/Status.md)
[![Generic badge](https://img.shields.io/static/v1.svg?label=Google%20Apps&message=Joao+Filipe+Sabino+Esperancinha&color=orange)](https://play.google.com/store/apps/developer?id=Joao+Filipe+Sabino+Esperancinha)
[![Generic badge](https://img.shields.io/static/v1.svg?label=Code%20Pen&message=jesperancinha&color=orange)](https://codepen.io/jesperancinha)
[![Generic badge](https://img.shields.io/static/v1.svg?label=GitHub&message=ITF%20Chartizate%20Android&color=yellow)](https://github.com/JEsperancinhaOrg/itf-chartizate-android)
[![Generic badge](https://img.shields.io/static/v1.svg?label=GitHub&message=ITF%20Chartizate%20Java&color=yellow)](https://github.com/JEsperancinhaOrg/itf-chartizate-modules/tree/master/itf-chartizate-java)
[![Generic badge](https://img.shields.io/static/v1.svg?label=GitHub&message=ITF%20Chartizate%20API&color=yellow)](https://github.com/JEsperancinhaOrg/itf-chartizate/tree/master/itf-chartizate-api)
[![Generic badge](https://img.shields.io/static/v1.svg?label=GitHub&message=Markdowner%20Core&color=yellow)](https://github.com/jesperancinha/markdowner/tree/master/markdowner-core)
[![Generic badge](https://img.shields.io/static/v1.svg?label=GitHub&message=Markdowner%20Filter&color=yellow)](https://github.com/jesperancinha/markdowner/tree/master/markdowner-filter)
[![Generic badge](https://img.shields.io/static/v1.svg?label=Docker%20Images&message=jesperanciha&color=099CEC)](https://github.com/jesperancinha/project-signer/blob/master/project-signer-templates/DockerImages.md)
