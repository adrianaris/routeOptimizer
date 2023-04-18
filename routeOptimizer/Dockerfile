FROM node:18 AS build-stage

WORKDIR /usr/src/app

COPY . .

RUN npm ci

RUN CI=true npm run test

RUN npm run build

# This is a new stage, everything before this is gone, except the files we want to COPY
FROM nginx:1.20-alpine
# COPY the directory build from build-stage to /usr/share/nginx/html
# The target location here was found from the Docker hub page
COPY --from=build-stage /usr/src/app/build /usr/share/nginx/html
ENV REACT_APP_BACKEND_URL=http://localhost:8080/api
