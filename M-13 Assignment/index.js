const express = require('express');
const app = express();

app.use(express.json());

const PORT = 5000;


// 1. EXPRESS APPLICATION SETUP

app.get('/', (req, res) => {
  res.send('Server Running Successfully');
});


// 2. EXPRESS ROUTING & RESPONSES

app.get('/welcome', (req, res) => {
  res.send('Welcome to Express Learning');
});


app.get('/student', (req, res) => {
  res.json({
    name: 'John',
    course: 'MERN Stack',
    batch: 13
  });
});


// 3. WORKING WITH REQUEST - GET QUERY PARAMETERS

app.get('/search', (req, res) => {
  const { name, course } = req.query;
  res.json({
    name: name,
    course: course
  });
});

// 4. POST REQUEST HANDLING

app.post('/register', (req, res) => {
  const { name, email } = req.body;
  res.json({
    name: name,
    email: email
  });
});


app.post('/product', (req, res) => {
  const { id } = req.query;
  res.json({
    id: id
  });
});


app.post('/login', (req, res) => {
  const username = req.headers.username;
  const password = req.headers.password;
  res.json({
    username: username,
    password: password
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
