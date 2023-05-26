import { Router } from "express";
import { connectionDB } from "../models/NewsDB.js";
import authMiddleware from "../middleware/auth.js";
import createToken from "../middleware/createToken.js";
import bcrypt from 'bcrypt';

let routerUser = Router();

routerUser.post('/auth', authMiddleware, async (req, res) => {
    try {
        // Pass data to client if passed through auth middleware
        const querySql = `SELECT * FROM users WHERE email='${req.user.email}'`;
        const user = await new Promise((resolve, reject) => {
            connectionDB.query(querySql, (error, results, fields) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(results);
                }
            });
        });

        delete user[0].password;

        res.status(200).json({ ...user[0], isAuth: true })

    } catch (err) {
        next(err);
    }
})


/**
 * POST /register
 * Create a new user.
 */

routerUser.post('/register', createToken, async (req, res) => {
    try {
        // Extract user data from the request
        const { name, email, password, lastName, role, tokenExp } = req.user;

        // Insert user data into the database
        const query = `
        INSERT INTO users (name, email, password, lastName, role, tokenExp)
        VALUES (?, ?, ?, ?, ?, ?)
      `;
        // Generate the hash for the password
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);

        const params = [name, email, hashedPassword, lastName, role, tokenExp];

        await new Promise((resolve, reject) => {
            connectionDB.query(query, params, (error, results, fields) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(results);
                }
            });
        });

        // Send response with success message and token
        res.status(201)
            .header('x-auth-token', req.token)
            .json({
                success: true,
                message: 'User created successfully!'
            });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: 'An error occurred while creating the user.'
        });
    }
});



/**
 * POST /login
 * Create a new user.
 */
routerUser.post('/login', createToken, async (req, res) => {
    try {
        // Find the user with the requested email in the database
        const querySql = `SELECT * FROM users WHERE email='${req.body.email}'`;
        const user = await new Promise((resolve, reject) => {
            connectionDB.query(querySql, (error, results, fields) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(results);
                }
            });
        });

        // If there is no user with the requested email, return an error
        if (!user || user.length === 0) {
            return res.json({
                success: false,
                message: 'There are no users with the provided email.',
            });
        }

        // If there is a user with the requested email, check if the password matches
        const isMatch = await bcrypt.compare(req.body.password, user[0].password);

        if (!isMatch) {
            return res.json({
                success: false,
                message: 'Password is incorrect.',
            });
        }

        // Send response with success message and token
        res.status(201)
            .header('x-auth-token', req.token)
            .json({
                success: true,
                message: 'User logged in successfully!',
                token: req.token
            });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: 'An error occurred while logging in the user.',
        });
    }
});


/**
 * POST /register
 * Create a new user.
 */

routerUser.put('/update', async (req, res) => {
    try {
        // Extract user data from the request
        const { name, email, lastName, role, id } = req.body;

        // Insert user data into the database
        const query = `
        UPDATE users
        SET name = ?, email = ?, lastName = ?, role = ?
        WHERE id = ?;
      `;

        const params = [name, email, lastName, role, id];
        await new Promise((resolve, reject) => {
            connectionDB.query(query, params, (error, results, fields) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(results);
                }
            });
        });

        // Send response with success message and token
        res.status(201)
            .json({
                success: true,
                message: 'User update successfully!'
            });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: 'An error occurred while creating the user.'
        });
    }
});

/**
 * POST /logout
 * Create a new user.
 */
routerUser.get('/logout', authMiddleware, async (req, res) => {
    try {
        // retrieved from auth middleware and found
        const user = req.user;

        if (!user) {
            return res.json({ success: false, message: 'Failed to logout' });
        }

        return res.status(200).send({ success: true });
    } catch (err) {
        next(err);
    }
});

export default routerUser;