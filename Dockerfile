FROM quay.io/sampandey001/secktor
RUN git clone https://github.com/Xcelsama/Xcel_botz/root/Xcelsama
WORKDIR /root/Xcelsama/
RUN npm install npm@latest
RUN yarn install --network-concurrency 1
EXPOSE 8000
CMD ["npm", "start"]