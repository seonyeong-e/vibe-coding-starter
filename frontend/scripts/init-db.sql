DROP TABLE IF EXISTS skills;
DROP TABLE IF EXISTS projects;
DROP TABLE IF EXISTS profile;
DROP TABLE IF EXISTS highlights;

CREATE TABLE profile (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  team TEXT NOT NULL,
  position TEXT NOT NULL,
  uniform_number TEXT NOT NULL,
  tagline TEXT NOT NULL,
  introduction TEXT NOT NULL,
  image_path TEXT NOT NULL
);

CREATE TABLE highlights (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  label TEXT NOT NULL
);

INSERT INTO profile (
  name,
  team,
  position,
  uniform_number,
  tagline,
  introduction,
  image_path
) VALUES (
  '신선영',
  '부경대학교 경영학부',
  '데이터 마케팅',
  '24세',
  '데이터 분석과 마케팅을 연결하는 실무형 인재입니다.',
  '안녕하세요. 부경대학교 경영학부 신선영입니다. 데이터를 기반으로 마케팅 성과를 높이는 업무를 하고 싶습니다.',
  ''
);

INSERT INTO highlights (label) VALUES
  ('계획적'),
  ('SPSS 활용'),
  ('꼼꼼함');
