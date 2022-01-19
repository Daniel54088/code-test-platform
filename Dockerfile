FROM node as build-stage
WORKDIR /app
COPY package*.json /app/
RUN yarn
COPY ./ /app/
# RUN yarn test
RUN yarn build

FROM nginx:latest
COPY --from=build-stage /app/build/ /usr/share/nginx/html
# COPY --from=build-stage /nginx.conf /etc/nginx/conf.d/default.conf