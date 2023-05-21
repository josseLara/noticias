import express from 'express';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import routerComment from './routes/comment.js';
import routerUser from './routes/users.js';
import cors from 'cors';

// backend server
const app = express();
// const config = require('./config/key');
dotenv.config()

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use('/api/comment', routerComment);
app.use('/api/user', routerUser);

// Serving static assets when in production
if (process.env.NODE_ENV === 'production') {
  // static folder settings
  app.use(express.static('/client/build'));

  // index.html for all page routes
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

// Check port connection
const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Server Running at ${port}`));