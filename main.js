const http = require('node:http');


const foo = async () => {
    const server = http.createServer((req, res) => {
        res.writeHead(200, { 'Content-Type': 'application/json' });

        const url = req.url;

        if (url === '/about') {
            switch (req.method) {
                case 'GET':
                    return res.end(JSON.stringify({
                        data: 'About Page',
                    }));
                case 'POST':
                    return res.end(JSON.stringify({
                        data: 'About Page',
                    }));
            }
        }
        if (url === '/contact') {
            return res.end(JSON.stringify({
                data: 'Contact Page',
            }));
        }
    });

    server.listen(8000);
}

void foo();
