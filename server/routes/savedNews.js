import { Router } from "express";
import { connectionDB } from "../models/NewsDB.js";

let routerSaveNews = Router();


// Define the route to get all comments
routerSaveNews.post('/getSaveNews', async (req, res) => {
    try {
        // Create the SQL query to get all comments
        const querySql = `SELECT * FROM savenews WHERE idUser='${req.body.id}'`;

        // Execute the query and wait for it to resolve
        const dataSaveNews = await new Promise((resolve, reject) => {
            connectionDB.query(querySql, (error, results, fields) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(results);
                }
            });
        });

        // Send the comments as a response
        res.json({data:[...dataSaveNews],success:true});
    } catch (err) {
        // If an error occurs, send an error response
        res.status(400).json({ success: false, message: err.message });
    }
});

// Route to save a comment
routerSaveNews.post('/save', async (req, res) => {
    try {
      // Extract data from request body
      let { author, title, url, urlToImage, publishedAt, idUser } = req.body;
      let commentReceived = [author, title, url, urlToImage, publishedAt, idUser];
  
      // SQL query to insert comment into database
      let querySql = `INSERT INTO savenews 
      (id, author, title, url, urlToImage, publishedAt, idUser) 
      VALUES (NULL, ?, ?, ?,  ?, ?,?)`;
  
      // Execute query and wait for result
      let saveNews = await new Promise((resolve, reject) => {
        connectionDB.query(querySql, commentReceived, (error, results, fields) => {
          if (error) {
            reject(error);
          } else {
            resolve(results);
            res.json({ success: true, message: 'News saved successfully!' })
          }
        });
      })
    } catch (err) {
      // Handle errors
      res.status(400).json({ success: false, message: err.message });
    }
  })

  // Route to remove a new
routerSaveNews.post('/remove', async (req, res) => {
  try {
    // Extract data from request body
    let { author, title, url, urlToImage, publishedAt, idUser } = req.body;
    let commentReceived = [author, title, url, urlToImage, publishedAt, idUser];

    // SQL query to insert comment into database
    let querySql = `DELETE FROM savenews WHERE url = '${url}' AND idUser = ${idUser}`;

    // Execute query and wait for result
    let removeNews = await new Promise((resolve, reject) => {
      connectionDB.query(querySql, commentReceived, (error, results, fields) => {
        if (error) {
          reject(error);
        } else {
          resolve(results);
          res.json({ success: true, data:[req.body]})
        }
      });
    })
  } catch (err) {
    // Handle errors
    res.status(400).json({ success: false, message: err.message });
  }
})





export default routerSaveNews;