const express = require('express');
const app = express();
const port = 3000;

// Routes import
const taskRouter = require('./routes/tasks');

// middleware
app.use(express.json())

// routes
app.use('/api/v1/tasks', taskRouter);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});