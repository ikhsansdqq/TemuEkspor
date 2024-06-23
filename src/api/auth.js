import mysql from 'mysql2/promise';

const dbConfig = {
  host: 'srv1364.hstgr.io',
  user: 'u450297898_temuekspornext',
  password: 'Hoodwink77!',  // replace with your actual password
  database: 'u450297898_temuekspornext'
};

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const connection = await mysql.createConnection(dbConfig);
      const [rows] = await connection.execute('SELECT * FROM posts');
      await connection.end();
      res.status(200).json(rows);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch posts' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
