FROM node:16-alpine as build

WORKDIR /app/react

COPY . .

RUN npm install
RUN npm run build


FROM nginx
COPY --from=build /app/react/dist /usr/share/nginx/html
COPY --from=build /app/react/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

