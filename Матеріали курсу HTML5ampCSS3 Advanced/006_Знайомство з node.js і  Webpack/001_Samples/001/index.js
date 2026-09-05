const path = require('path');
const http = require('http');
const fs = require('fs');

console.log('Папка файлу (__dirname) -> ' + path.resolve(__dirname));
console.log('Шлях до файлу (__filename) -> ' + path.resolve(__filename));

// Читаємо HTML-файл з цієї ж папки
const htmlPath = path.join(__dirname, 'index.html');

// Створюємо сервер: коли відкриваєш сайт — віддаємо index.html
const server = http.createServer(function (request, response) {
  const html = fs.readFileSync(htmlPath);
  response.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
  response.end(html);
});

// Запуск: у цій папці напиши в терміналі  node index.js
server.listen(3000, function () {
  console.log('Відкрий у браузері: http://localhost:3000');
});
