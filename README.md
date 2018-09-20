# Nails Project, server side (API)

Used technologies: Node.js, Express, MongoDB

 - Free Mongo DB service: https://mlab.com
 - MongoDB manual: https://docs.mongodb.com/manual/
 - Express Routing: http://expressjs.com/ru/guide/routing.html
 - Postman - APP for testing GET/POST/PUT/DELETE queries

## REST API

| Uniform Resource Locator (URL) | Action |
| ------ | ------ |
| GET /api/price | View all price |
| POST /api/price | Add a new line |
| PUT /api/price | Update the price |
| DELETE /api/price/7 | Delete one line with ID=7 |

### Start API project

```sh
$ npm i
$ npm run dev
```

#### How DB is looks like?

| _id | Name (UA) | Name (RU) | Price (min) | Price (max) | isVisible |
| ------ | ------ | ------ | ------ | ------ | ------ |
| 5b83d6eaabf19e060c1d52e4 | Name (UA) example | Name (RU) example | 90 | 100 | true |
| 5b83d6eaabf19e060c1d52e5 | Name (UA) example | Name (RU) example | 100 | 100 | true |
| 5b83d6eaabf19e060c1d52e6 | Name (UA) example | Name (RU) example | 110 | 130 | false |
| 5b852492f978b62f40638a59 | Name (UA) example | Name (RU) example | 140 | 2000 | true |