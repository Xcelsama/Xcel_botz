FROM node:latest

RUN apt-get update && \
    apt-get install -y \
    ffmpeg \
    webp && \
    apt-get upgrade -y && \
    rm -rf /var/lib/apt/lists/*

RUN git clone https://github.com/Xcelsama/Xcel_botz.git /Xcelsama
WORKDIR /Xcelsama
RUN npm install
CMD ["node", "index.js"]