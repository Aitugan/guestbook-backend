# Guest book

This is a backend of a website guest book, built with Node.js, Express, MongoDB and Socket.io.

## Usage

Before posting a message, website visitors should enter their name and a message. Messages and sender name will be visible to other visitors.

## Setting up and launching

To launch the web app, clone the repository, go to the project root directory and run the following commands:

$yarn
$nodemon server.js

User Postman or similar applications to send requests to http://localhost:5000.

### Examples:

```
POST http://localhost:5000/api/messages
Body: {
    name: "Dimash",
    text: "Hello everyone! I'm Dimash Qudaibergen".
}

GET http://localhost:5000/api/messages
Response:
[
    {
        name: "Dimash",
        text: "Hello everyone! I'm Dimash Qudaibergen".
    },
    {
        name: "Bek",
        text: "Hey guys".
    }
]
```

## Development

### Features implemented

- Name validation
- Message validation
- New messages displayed across all open web apps using Socket.io
- Code is beautifully structured
- MongoDB is used as a database
- If validation is failed, a relevant error message is sent as a response
- Deployed using Render

### Time spent

#### 1 day, roughly 5 hours

### Demo link

https://guestbook-backend-5t0e.onrender.com

### Technologies Used

- Node.js
- Express
- Socket.io-client
- MongoDB and Mongoose
