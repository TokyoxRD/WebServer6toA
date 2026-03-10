  import express from 'express';
  import path from 'path';
  import { fileURLToPath } from 'url';

  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const port = process.env.PORT || 3000;
  
  const app = express();

  console.log("_dirname: $", {__dirname});


  app.use(express.static(path.join(__dirname, 'public')));
  app.set('views', path.join(__dirname, 'views'));
  app.set('view engine', 'ejs');

  app.get('/', (req, res) => {
    res.render("index");
  });

  app.listen(port, () => {
    console.log(`Server is running on https://localhost:${port}`);
  });