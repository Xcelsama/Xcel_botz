FROM node:lts-buster  

# Install system dependencies for canvas  
RUN apt-get update && apt-get install -y \  
    build-essential \  
    libcairo2-dev \  
    libpango1.0-dev \  
    libjpeg-dev \  
    libgif-dev \  
    librsvg2-dev \  
    && rm -rf /var/lib/apt/lists/*  

# Downgrade npm to avoid known bugs  
RUN npm install -g npm@latest

# Clear corrupted cache and install deps  
RUN rm -rf /root/.npm && npm cache clean --force  
RUN npm install -g qrcode-terminal pm2  

COPY . .  
EXPOSE 3000    
CMD ["npm", "start"]
