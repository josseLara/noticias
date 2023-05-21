import { Router } from "express";
import { connectionDB } from "../models/NewsDB.js";

let routerComment = Router();


// Define the route to get all comments
routerComment.post('/getComments', async (req, res) => {
    try {
        // Create the SQL query to get all comments
        const querySql = `SELECT * FROM comments WHERE news_id='${req.body.id}'`;

        // Execute the query and wait for it to resolve
        const dataComments = await new Promise((resolve, reject) => {
            connectionDB.query(querySql, (error, results, fields) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(results);
                }
            });
        });

        // Send the comments as a response
        res.json({...dataComments,success:true});
    } catch (err) {
        // If an error occurs, send an error response
        res.status(400).json({ success: false, message: err.message });
    }
});

// Route to save a comment
routerComment.post('/saveComment', async (req, res) => {
    try {
      // Extract data from request body
      let { name, email, comment, created_at, news_id } = req.body;
      let commentReceived = [name, email, comment, created_at, news_id];
  
      // SQL query to insert comment into database
      let querySql = `INSERT INTO comments 
      (id, name, email, comment, created_at, news_id) 
      VALUES (NULL, ?, ?, ?,  ?, ?)`;
  
      // Execute query and wait for result
      let saveComment = await new Promise((resolve, reject) => {
        connectionDB.query(querySql, commentReceived, (error, results, fields) => {
          if (error) {
            reject(error);
          } else {
            resolve(results);
            res.json({ success: true, message: 'Comment saved successfully!' })
          }
        });
      })
    } catch (err) {
      // Handle errors
      res.status(400).json({ success: false, message: err.message });
    }
  })





export default routerComment;