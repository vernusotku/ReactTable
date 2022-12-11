FROM node:latest
EXPOSE 3000
WORKDIR /temp/ReactTable
COPY . .
RUN npm install
CMD ["npm","start"]
