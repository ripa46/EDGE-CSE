require("dotenv").config();
const express = require("express");
const oracledb = require("oracledb");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// OracleDB connection helper function
async function executeQuery(query, params = []) {
  try {
    const connection = await oracledb.getConnection({
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      connectString: process.env.DB_CONNECT_STRING,
    });

    const result = await connection.execute(query, params, {
      outFormat: oracledb.OUT_FORMAT_OBJECT,
      autoCommit: true,
    });

    await connection.close();
    return result.rows;
  } catch (error) {
    console.error("Database Error:", error);
    throw error;
  }
}

// 1. GET: Fetch all rows from a specific table
app.get("/api/:table", async (req, res) => {
  const { table } = req.params;
  try {
    const result = await executeQuery(`SELECT * FROM ${table}`);
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// 2. POST: Insert data into a table
app.post("/api/:table", async (req, res) => {
  const { table } = req.params;
  const data = req.body;

  try {
    const keys = Object.keys(data).join(", ");
    const values = Object.keys(data).map((_, idx) => `:${idx + 1}`).join(", ");
    const query = `INSERT INTO ${table} (${keys}) VALUES (${values})`;

    await executeQuery(query, Object.values(data));
    res.json({ message: `Data inserted into ${table}` });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// 3. PUT: Update data in a table
app.put("/api/:table/:id", async (req, res) => {
  const { table, id } = req.params;
  const data = req.body;

  try {
    const updates = Object.keys(data)
      .map((key, idx) => `${key} = :${idx + 1}`)
      .join(", ");
    const query = `UPDATE ${table} SET ${updates} WHERE id = :${
      Object.keys(data).length + 1
    }`;

    await executeQuery(query, [...Object.values(data), id]);
    res.json({ message: `Data updated in ${table}` });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// 4. DELETE: Remove data from a table
app.delete("/api/:table/:id", async (req, res) => {
  const { table, id } = req.params;

  try {
    const query = `DELETE FROM ${table} WHERE id = :1`;
    await executeQuery(query, [id]);
    res.json({ message: `Data deleted from ${table}` });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// 5. Specific Endpoints for Tables

// Insert a new hotel
app.post("/api/hotels", async (req, res) => {
  const { Hotel_Name, Address, City, Postal_Code, Phone_Number, Manager_Name } = req.body;
  try {
    const query = `INSERT INTO Hotel (Hotel_Name, Address, City, Postal_Code, Phone_Number, Manager_Name)
                   VALUES (:1, :2, :3, :4, :5, :6)`;
    await executeQuery(query, [Hotel_Name, Address, City, Postal_Code, Phone_Number, Manager_Name]);
    res.json({ message: "Hotel added successfully!" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Insert a new guest
app.post("/api/guests", async (req, res) => {
  const { First_Name, Last_Name, National_ID, Phone_Number, Email, Address } = req.body;
  try {
    const query = `INSERT INTO Guest (First_Name, Last_Name, National_ID, Phone_Number, Email, Address)
                   VALUES (:1, :2, :3, :4, :5, :6)`;
    await executeQuery(query, [First_Name, Last_Name, National_ID, Phone_Number, Email, Address]);
    res.json({ message: "Guest added successfully!" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Insert a new booking
app.post("/api/bookings", async (req, res) => {
  const { Guest_ID, Room_ID, Booking_Date, Check_In_Date, Check_Out_Date, Total_Amount } = req.body;
  try {
    const query = `INSERT INTO Booking (Guest_ID, Room_ID, Booking_Date, Check_In_Date, Check_Out_Date, Total_Amount)
                   VALUES (:1, :2, :3, :4, :5, :6)`;
    await executeQuery(query, [Guest_ID, Room_ID, Booking_Date, Check_In_Date, Check_Out_Date, Total_Amount]);
    res.json({ message: "Booking created successfully!" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Start server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
