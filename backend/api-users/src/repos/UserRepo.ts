import mysql from "mysql2/promise";
import ENV from "@src/common/constants/ENV";
import { IUser } from "@src/models/User";

/******************************************************************************
                                Database Pool
******************************************************************************/

const pool = mysql.createPool({
  host: ENV.DbHost,
  user: ENV.DbUser,
  password: ENV.DbPassword,
  database: ENV.DbName,
  waitForConnections: true,
  connectionLimit: 10,
});


/******************************************************************************
                                Functions
******************************************************************************/

/**
 * Get one user by email
 */
async function getOne(email: string): Promise<IUser | null> {
  const [rows] = await pool.query(
    "SELECT * FROM users WHERE email = ? LIMIT 1",
    [email]
  );

  const result = rows as IUser[];
  return result.length > 0 ? result[0] : null;
}

/**
 * Check if a user ID exists
 */
async function persists(id: number): Promise<boolean> {
  const [rows] = await pool.query(
    "SELECT id FROM users WHERE id = ?",
    [id]
  );

  return (rows as any[]).length > 0;
}

/**
 * Get all users
 */
async function getAll(): Promise<IUser[]> {
  const [rows] = await pool.query("SELECT * FROM users ORDER BY id DESC");
  return rows as IUser[];
}

/**
 * Add new user
 */
async function add(user: IUser): Promise<void> {
  await pool.query(
    "INSERT INTO users (name, email) VALUES (?, ?)",
    [user.name, user.email]
  );
}

/**
 * Update user
 */
async function update(user: IUser): Promise<void> {
  await pool.query(
    "UPDATE users SET name = ?, email = ? WHERE id = ?",
    [user.name, user.email, user.id]
  );
}

/**
 * Delete user
 */
async function delete_(id: number): Promise<void> {
  await pool.query(
    "DELETE FROM users WHERE id = ?",
    [id]
  );
}


/******************************************************************************
                   Unit-test utilities (optional)
******************************************************************************/

async function deleteAllUsers(): Promise<void> {
  await pool.query("DELETE FROM users");
}

async function insertMult(users: IUser[]): Promise<IUser[]> {
  const inserted: IUser[] = [];

  for (const u of users) {
    const [result] = await pool.query<any>(
      "INSERT INTO users (name, email) VALUES (?, ?)",
      [u.name, u.email]
    );

    inserted.push({
      ...u,
      id: result.insertId,
      created_at: new Date(),
    });
  }

  return inserted;
}


/******************************************************************************
                                Export default
******************************************************************************/

export default {
  getOne,
  persists,
  getAll,
  add,
  update,
  delete: delete_,
  deleteAllUsers,
  insertMult,
} as const;
