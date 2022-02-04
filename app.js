var fs = require("fs");
var http = require("http");

http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/html" });

    if (req.url === "/") {
      fs.readFile("home.html", (err, data) => {
        if (err) throw err;
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(data);
        res.end();
      });
    } else if (req.url === "/blog") {
      fs.readFile("blog.html", (err, data) => {
        if (err) throw err;
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(data);
        res.end();
      });
    } else if (req.url === "/profil1") {
      fs.readFile("profil1.html", (err, data) => {
        if (err) throw err;
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(data);
        res.end();
      });
    } else if (req.url === "/profil2") {
      fs.readFile("profil2.html", (err, data) => {
        if (err) throw err;
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(data);
        res.end();
      });
    } else if (req.url === "/perpustakaan") {
      fs.readFile("assets/Kaguya-Sama Vol.01.pdf", (err, data) => {
        if (err) throw err;
        // send respon
        res.writeHead(200, { "Content-Type": "application/pdf" });
        res.write(data);
        res.end();
      });
    } else {
      res.write("<center>404 Error</center>");
      res.end();
    }
  })
  .listen(8000);
console.log("server start at port http://localhost:8000");
