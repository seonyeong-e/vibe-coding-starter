import Database from "better-sqlite3";
import path from "node:path";

export type Skill = {
  id: number;
  name: string;
  level: string;
  description: string;
};

export type Project = {
  id: number;
  title: string;
  description: string;
  tech_stack: string;
};

const dbPath = path.join(process.cwd(), "local.db");

function getDb() {
  const db = new Database(dbPath);

  db.exec(`
    CREATE TABLE IF NOT EXISTS skills (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      level TEXT NOT NULL,
      description TEXT NOT NULL
    );

    CREATE TABLE IF NOT EXISTS projects (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT NOT NULL,
      description TEXT NOT NULL,
      tech_stack TEXT NOT NULL
    );
  `);

  return db;
}

export function getSkills() {
  try {
    return getDb()
      .prepare("SELECT id, name, level, description FROM skills ORDER BY id DESC")
      .all() as Skill[];
  } catch (error) {
    console.error(error);
    return [];
  }
}

export function getProjects() {
  try {
    return getDb()
      .prepare("SELECT id, title, description, tech_stack FROM projects ORDER BY id DESC")
      .all() as Project[];
  } catch (error) {
    console.error(error);
    return [];
  }
}

export function insertSkill(name: string, level: string, description: string) {
  getDb()
    .prepare("INSERT INTO skills (name, level, description) VALUES (?, ?, ?)")
    .run(name, level, description);
}

export function insertProject(title: string, description: string, techStack: string) {
  getDb()
    .prepare("INSERT INTO projects (title, description, tech_stack) VALUES (?, ?, ?)")
    .run(title, description, techStack);
}
