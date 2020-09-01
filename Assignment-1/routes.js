const fs = require('fs');

const requestHandler = (req, res) => {
    const url = req.url;
    const method = req.method;
    if (url === '/') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Home Page</title></head>');
        res.write('<body><h1>Hello World!</h1><form action="/create-user" method="POST"><input type="text" name="username"><button type="submit">Submit</button></form></body>');
        res.write('</html>');
        return res.end();
    }
    if (url === '/users') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Home Page</title></head>');
        res.write('<body><ul><li>User 1</li><li>User 2</li></ul></body>');
        res.write('</html>');
        return res.end();
    }
    if (url === '/create-user' && method === 'POST') {
        const body = [];
        req.on('data', (chunk) => {
            body.push(chunk);
        });
        return req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const username = parsedBody.split('=')[1];
            console.log(`Username entered: ${username}`);
        })
    }
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Home Page</title></head>');
    res.write('<body><h1>Hello World!</h1><form action="/create-user" method="POST"><input type="text" name="username"><button type="submit">Submit</button></form></body>');
    res.write('</html>');
    res.end();
};

module.exports = {
    handler: requestHandler
};