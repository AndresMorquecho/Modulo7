FROM ubuntu:latest
LABEL maintainer="morquechoisrael@hotmail.com"
RUN apt-get update && \
    apt-get -y upgrade && \
    apt-get install -y curl iputils-ping telnet

CMD ["tail", "-f", "/dev/null"]
