// Create web server using express
// 1. Create a web server using express
// 2. Create a route for GET /comments
// 3. Read the file comments.json
// 4. Send the comments as JSON to the client
// 5. Listen on port 3000

// 1. Create a web server using express
const express = require('express')
const app = express()

// 2. Create a route for GET /comments
// 3. Read the file comments.json
// 4. Send the comments as JSON to the client
const comments = require('./comments.json')
app.get('/comments', (req, res) => {
  res.json(comments)
})

// 5. Listen on port 3000
app.listen(3000, () => {
  console.log('Server is listening on port 3000. Ready to accept requests!')
})