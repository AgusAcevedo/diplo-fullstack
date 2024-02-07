require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const nodemailer = require('nodemailer');
const app = express();
app.use(bodyParser.json());
app.use(cors());

let transporter = nodemailer.createTransport({
    service: 'gmail', // use 'gmail' as the email service
    auth: {
      user: 'pruebitapruebita81@gmail.com', // your email
      pass: 'oldd lutm kdop jpux' // your email password
    }
  });

const db = mysql.createConnection({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DB_NAME
  });

db.connect((err) => {
    if (err) {
        res.status(500).json({ success: false, message: 'Server error' });
        return;
      }
  console.log('Connected to database');
});

app.post('/login', (req, res) => {
  const { username, password } = req.body;
  const query = 'SELECT * FROM users WHERE username = ? AND password = ?';
  db.query(query, [username, password], (err, result) => {
    if (err) {
        res.status(500).json({ success: false, message: 'Server error' });
        return;
      }
    if (result.length > 0) {
      res.json({ success: true });
    } else {
      res.json({ success: false });
    }
  });
});

app.post('/register', (req, res) => {
    const { username, password, email } = req.body;
    const query = 'INSERT INTO users(username, password, email) VALUES (?, ?, ?)';
    db.query(query, [username, password, email], (err, result) => {
        if (err) {
          console.log(err);
          return res.status(500).json({ success: false, message: 'Server error' });
        }
      
        let mailOptions = {
          from: 'pruebitapruebita81@gmail.com', // sender address
          to: `${email}`, // list of receivers
          subject: 'Registration Completed', // Subject line
          text: `Welcome ${username}, your registration is completed!`, // plain text body
        };
      
        transporter.sendMail(mailOptions, (error, info) => {
          if (error) {
            console.log(error);
            return res.status(500).json({ success: false, message: 'Server error' });
          } else {
            console.log('Email sent: ' + info.response);
            return res.json({ success: true });
          }
        });
      });
    });

  app.delete('/deleteUser', (req, res) => {
    const { username } = req.body;
    const query = 'DELETE FROM users WHERE username = ?';
    db.query(query, [username], (err, result) => {
      if (err) {
        res.status(500).json({ success: false, message: 'Server error' });
        return;
      }
      if (result.affectedRows > 0) {
        res.json({ success: true });
      } else {
        res.json({ success: false, message: 'No user found to delete' });
      }
    });
  });

  app.get('/user', (req, res) => {
    const { username } = req.query;
    const query = 'SELECT * FROM users WHERE username = ?';
    db.query(query, [username], (err, results) => {
      if (err) {
        res.status(500).json({ success: false, message: 'Server error' });
        return;
      }
      if (results.length > 0) {
        console.log('User:', results);
        res.json({ success: true, user: results[0] });
      } else {
        res.json({ success: false, message: 'No user found' });
      }
    });
  });

  app.get('/novedades', (req, res) => {
    const query = 'SELECT * FROM Novedades';
    db.query(query, (err, results) => {
      if (err) {
        console.error('Database query error:', err);
        res.status(500).json({ success: false, message: 'Server error' });
        return;
      }
      console.log('Novedades:', results);
      res.json(results);
    });
  });

  app.post('/novedades', (req, res) => {
    const { titulo, subtitulo, cuerpo } = req.body;
    const query = 'INSERT INTO Novedades (titulo, subtitulo, cuerpo) VALUES (?, ?, ?)';
    db.query(query, [titulo, subtitulo, cuerpo], (err, result) => {
      if (err) {
        res.status(500).json({ success: false, message: 'Server error' });
        return;
      }
      res.json({ success: true, message: 'Novedad added' });
    });
  });
  
  app.delete('/novedades/:id', (req, res) => {
    const { id } = req.params;
    const query = 'DELETE FROM Novedades WHERE id = ?';
    db.query(query, id, (err, result) => {
      if (err) {
        res.status(500).json({ success: false, message: 'Server error' });
        return;
      }
      res.json({ success: true, message: 'Novedad deleted' });
    });
  });
  
  app.put('/novedades/:id', (req, res) => {
    const { id } = req.params;
    const { titulo, subtitulo, cuerpo } = req.body;
    const query = 'UPDATE Novedades SET titulo = ?, subtitulo = ?, cuerpo = ? WHERE id = ?';
    db.query(query, [titulo, subtitulo, cuerpo, id], (err, result) => {
      if (err) {
        res.status(500).json({ success: false, message: 'Server error' });
        return;
      }
      res.json({ success: true, message: 'Novedad updated' });
    });
  });

app.listen(8000, () => {
  console.log('Server started on port 8000');
});