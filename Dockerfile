FROM node:22-alpine

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn install --frozen-lockfile

COPY . .

RUN yarn build

EXPOSE 3001

CMD ["yarn", "preview", "--host", "0.0.0.0", "--port", "3001"]