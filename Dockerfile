FROM node:21 AS build
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
RUN npm run build

FROM alpine
RUN mkdir -p /output
COPY --from=build /app/build/ /build/

ENTRYPOINT ["cp", "-rfT", "build/", "/output/"]