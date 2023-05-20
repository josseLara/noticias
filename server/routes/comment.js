import { Router } from "express";
import { connectionDB } from "../models/NewsDB.js";

let routerComment = Router();


routerComment.post('/getComments', async (req, res) => {
    try {
        let querySql = "SELECT * FROM comments";

        let dataComments = await new Promise((resolve, reject) => {
            connectionDB.query(querySql, (error, results, fields) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(results);
                }
            });
        })

        res.json(dataComments);
    } catch (err) {
        res.status(400).json({ success: false, message: err.message });
    }
})

routerComment.post('/saveComment', async (req, res) => {
    try {
        let { name, email, comment, created_at, news_id } = req.body;
        let commentReceived = [name, email, comment, created_at, news_id];

        let querySql = `INSERT INTO comments 
        (id, name, email, comment, created_at, news_id) 
        VALUES (NULL, ?, ?, ?,  ?, ?)`;

        let saveComment = await new Promise((resolve, reject) => {
            connectionDB.query(querySql, commentReceived,(error, results, fields) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(results);
                    res.json({ success: true, message: 'saves correctly!' })
                }
            });
        })
    } catch (err) {
        res.status(400).json({ success: false, message: err.message });
    }
})



export default routerComment;