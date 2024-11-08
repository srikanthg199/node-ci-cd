// server.js
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.status(200).send('Hello, CI/CD!');
});

app.get("/test", (req, res) => {
    res.status(200).send('CI/CD Tested successful');
})

// Only start the server if this module is the main module being run
if (require.main === module) {
    app.listen(port, () => {
        console.log(`Server running on port ${port}`);
    });
}

module.exports = app;  // Export only the app
