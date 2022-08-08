FROM node:14.16.0-alpine

WORKDIR /app

COPY ./dist/apps/customers-app .

ENV PORT=3000
EXPOSE ${PORT}

CMD [ "npx", "http-server"  ]
