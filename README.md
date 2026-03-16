# express-project-04-query-filter-api

A simple Express.js backend API that demonstrates filtering results using query parameters.

## Project Goal

This project demonstrates how to use query parameters in Express.js to filter API responses.

Example queries:

- `/users?age=25`
- `/users?city=delhi`
- `/users?age=25&city=delhi`

## Tech Stack

- Node.js
- Express.js
- Nodemon

## Project Structure

```
express-project-04-query-filter-api
│
├─ src
│  ├─ controllers
│  │  └─ user.controller.js
│  │
│  └─ routes
│     └─ user.routes.js
│
├─ index.js
├─ package.json
├─ package-lock.json
└─ .gitignore
```

## Installation

Clone the repository

```bash
git clone https://github.com/a2rp/express-project-04-query-filter-api.git
cd express-project-04-query-filter-api
```

Install dependencies

```bash
npm install
```

## Run the Project

Development mode

```bash
npm run dev
```

Server runs at

```
http://localhost:1198
```

## API Endpoint

### Get Users

```
GET /users
```

### Query Examples

Filter by age

```
/users?age=25
```

Filter by city

```
/users?city=delhi
```

Filter by multiple parameters

```
/users?age=25&city=delhi
```

## Example Response

```json
{
    "filters": {
        "age": "25"
    },
    "results": [
        {
            "id": 2,
            "name": "Rahul",
            "age": 25,
            "city": "Delhi"
        }
    ]
}
```

## Learning Outcome

By building this project you learn how to:

- read query parameters using `req.query`
- filter data on the server
- build dynamic API endpoints

## Author

Ashish Ranjan

---

Follow me

- GitHub: https://github.com/a2rp
- Portfolio: https://www.ashishranjan.net
- LinkedIn: https://www.linkedin.com/in/aashishranjan
- Facebook: https://www.facebook.com/theash.ashish/

![alt text](image.png)

![alt text](image-1.png)

![alt text](image-2.png)

![alt text](image-3.png)

![alt text](image-4.png)
