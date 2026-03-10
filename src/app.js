  import express from 'express';
  import path from 'path';
  import { fileURLToPath } from 'url';

  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const port = process.env.PORT || 3000;
  
  const app = express();

  console.log("_dirname: $", {__dirname});


  app.use(express.static(path.join(__dirname, '../..', 'ice-cream-shop-website-template')));
  app.set('views', path.join(__dirname, 'views'));
  app.set('view engine', 'ejs');

  app.get('/', (req, res) => {
    res.render("index");
  });

  app.get('/about', (req, res) => {
    res.render("about");
  });

  app.get('/product', (req, res) => {
    res.render("product");
  });

  app.get('/service', (req, res) => {
    res.render("service");
  });

  app.get('/gallery', (req, res) => {
    res.render("gallery");
  });

  app.get('/contact', (req, res) => {
    res.render("contact");
  });