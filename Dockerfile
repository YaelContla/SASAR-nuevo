FROM nginx:alpine
COPY /dist/sasar-01 /usr/share/nginx/html
EXPOSE 80

