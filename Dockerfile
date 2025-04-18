FROM node:latest

# Install system dependencies for canvas
RUN apt-get update && apt-get install -y \
    build-essential \
    libcairo2-dev \
    libpango1.0-dev \
    libjpeg-dev \
    libgif-dev \
    librsvg2-dev \
    && rm -rf /var/lib/apt/lists/*

RUN npm install -g npm@latest
RUN npm cache clean --force
RUN npm install -g qrcode-terminal pm2


EXPOSE 3000

CMD ["npm", "start"]