DROP TABLE IF EXISTS skills;
DROP TABLE IF EXISTS projects;

CREATE TABLE skills (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  level TEXT NOT NULL,
  description TEXT NOT NULL
);

CREATE TABLE projects (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  tech_stack TEXT NOT NULL
);

INSERT INTO skills (name, level, description) VALUES
  ('Next.js', '중', '화면과 서버 기능을 한 프로젝트에서 다룰 수 있어요.'),
  ('Tailwind CSS', '중', 'className만 바꿔도 빠르게 디자인을 수정할 수 있어요.'),
  ('SQLite', '하', '작은 실습용 데이터를 파일 하나로 저장할 수 있어요.');

INSERT INTO projects (title, description, tech_stack) VALUES
  ('나만의 자기소개 페이지', 'AI에게 명령해서 소개 문구, 색상, 카드 구성을 바꾸는 실습 프로젝트입니다.', 'Next.js, Tailwind CSS'),
  ('스킬 저장 미니 앱', '폼에 입력한 기술을 SQLite DB에 저장하고 화면에 바로 보여줍니다.', 'Server Actions, SQLite');
