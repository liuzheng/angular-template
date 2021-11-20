FROM node:alpine
COPY .. /app
WORKDIR /app
ENV HTTPS_PROXY=${HTTPS_PROXY}
RUN npm i
RUN npm run build

FROM nginx:alpine
COPY --from=0 /app/dist /opt/app/
COPY nginx.conf /etc/nginx/conf.d/default.conf
