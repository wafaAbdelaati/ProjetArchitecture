FROM node:10
ADD package.json /app/
WORKDIR /app/
RUN npm install
ADD . /app
EXPOSE 8700 
VOLUME app/log
ADD wait-for-it.sh .
RUN ["chmod", "+x", "wait-for-it.sh"]
ENTRYPOINT ["./wait-for-it.sh", "MSEureka.aliases:8761", "--", "node" ]
CMD ["dist/index.js"]
