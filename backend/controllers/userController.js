const { pool } = require("../models/db");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// CREATE TABLE users (
//   user_id SERIAL NOT NULL,
//   userName VARCHAR (255),
//   email VARCHAR(255) UNIQUE NOT NULL,
//   password VARCHAR (255),
//   is_deleted SMALLINT DEFAULT 0,
//   role INT,
//   FOREIGN KEY (role) REFERENCES roles (role_id),
//   PRIMARY KEY (user_id)
// );
const register = async (req, res) => {
  const { userName, email, password ,role} =
    req.body;
// const role_id=''// edit the value of role_id depend on role id in role table .
  const encryptedPassword = await bcrypt.hash(password, 7);
  const query = `INSERT INTO users ( userName, email, password ,role) VALUES ($1,$2,$3,$4)`;
  const data = [
   userName,
    email.toLowerCase(),
    encryptedPassword,
    role
  ];
  pool
    .query(query, data)
    .then((result) => {
      res.status(200).json({
        success: true,
        message: "Account created successfully",
      });
    })
    .catch((err) => {
      res.status(409).json({
        success: false,
        message: "The email already exists",
        err,
      });
    });
};
module.exports={register}