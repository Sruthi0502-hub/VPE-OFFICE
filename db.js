const { DatabaseSync } = require('node:sqlite');
const path = require('path');

const dbPath = path.join(__dirname, 'vpe_dashboard.db');
const db = new DatabaseSync(dbPath);

const TOTAL_MEETINGS = 27;

const SEED_MEMBERS = [
  {"name": "Shajitha S", "pathway": "Persusavive Influence", "level": 1, "mentor": "DTM Rakesh", "mobile": "98435 45464", "iceTitle": "The Middle Bench Girl", "iceDate": "Thursday, July 30, 2026", "roleMonths": [null, "Grammarian", "Prepared Speaker 01", "General Evaluvator", "Insight Curator", null, null, null, null, null], "roleCount": 4, "goal": "GOAL 6", "goalDesc": "One more Level 4 ,Path Completion , or DTM award achieved", "goalLevel": 4},
  {"name": "Ajay Krishnan", "pathway": "Dynamic Leadership", "level": 1, "mentor": "TM Ramkumar", "mobile": "98433 22135", "iceTitle": "One Punch , One Code , One Talk", "iceDate": "Jul 23, 2026", "roleMonths": [null, "Prepared Speaker 03", "TMOD", "Grammarian", "Grammarian", null, null, null, null, null], "roleCount": 4, "goal": "GOAL 3", "goalDesc": "Two More Level 2 awards achieved", "goalLevel": 2},
  {"name": "Sruthi S", "pathway": "Dynamic Leadership", "level": 1, "mentor": "TM Durai", "mobile": "73958 75636", "iceTitle": null, "iceDate": null, "roleMonths": ["Ah- Counter", "Timer", null, null, "Prepared Speaker 03", null, null, null, null, null], "roleCount": 3, "goal": "GOAL 4", "goalDesc": "Two Level 3 awards achieved", "goalLevel": 3},
  {"name": "Devadharshini K", "pathway": "Visionary Communication", "level": 1, "mentor": "DTM Karthikeyan", "mobile": "93608 66599", "iceTitle": null, "iceDate": null, "roleMonths": ["Timer", "TTM", null, null, null, null, null, null, null, null], "roleCount": 2, "goal": "GOAL 2", "goalDesc": "Two Level 2 awards achieved", "goalLevel": 2},
  {"name": "Janavarshini KG", "pathway": "Visionary Communication", "level": 1, "mentor": "DTM Karthikeyan", "mobile": "93608 66600", "iceTitle": "Becoming", "iceDate": "Jul 23, 2026", "roleMonths": ["TTM", "Prepared Speaker 02", null, "Reserve Speaker", null, null, null, null, null, null], "roleCount": 3, "goal": "GOAL 3", "goalDesc": "Two More Level 2 awards achieved", "goalLevel": 2},
  {"name": "Mrithubashini S", "pathway": "Persusavive Influence", "level": 1, "mentor": "TM Vinoth", "mobile": null, "iceTitle": null, "iceDate": "Aug 06, 2026", "roleMonths": [null, null, null, "Prepared Speaker 02", "Ah- Counter", null, null, null, null, null], "roleCount": 2, "goal": "GOAL 4", "goalDesc": "Two Level 3 awards achieved", "goalLevel": 3},
  {"name": "Benasir Begum J", "pathway": "Persusavive Influence", "level": 1, "mentor": "TM Kalaipriya", "mobile": "98944 02206", "iceTitle": "Finding Her Voice", "iceDate": "Thursday, July 16, 2026", "roleMonths": ["Prepared Speaker 01", null, null, "Timer", "General Evaluvator", null, null, null, null, null], "roleCount": 3, "goal": "GOAL 3", "goalDesc": "Two More Level 2 awards achieved", "goalLevel": 2},
  {"name": "Kiruba Preetta J", "pathway": "Presentation Mastery", "level": 1, "mentor": "TM Surya", "mobile": null, "iceTitle": null, "iceDate": null, "roleMonths": [null, null, null, "TMOD", "Prepared Speaker 01", null, null, null, null, null], "roleCount": 2, "goal": "GOAL 1", "goalDesc": "Four Level 1 awards achieved", "goalLevel": 1},
  {"name": "Subiksha R", "pathway": "Persusavive Influence", "level": 1, "mentor": "TM Mahalakshmi", "mobile": null, "iceTitle": "Beyond My Comfort Zone", "iceDate": "Thursday, July 30, 2026", "roleMonths": [null, "TMOD", "Prepared Speaker 03", null, null, null, null, null, null, null], "roleCount": 2, "goal": "GOAL 3", "goalDesc": "Two More Level 2 awards achieved", "goalLevel": 2},
  {"name": "Benazeer Fathima A", "pathway": "Visionary Communication", "level": 1, "mentor": "TM Mahalakshmi", "mobile": null, "iceTitle": null, "iceDate": null, "roleMonths": [null, null, "Ah- Counter", null, null, null, null, null, null, null], "roleCount": 1, "goal": "GOAL 4", "goalDesc": "Two Level 3 awards achieved", "goalLevel": 3},
  {"name": "Dharma R", "pathway": "Dynamic Leadership", "level": 1, "mentor": "TM Vairamuthu", "mobile": null, "iceTitle": null, "iceDate": null, "roleMonths": [null, "Ah- Counter", null, null, "Prepared Speaker 02", null, null, null, null, null], "roleCount": 2, "goal": "GOAL 2", "goalDesc": "Two Level 2 awards achieved", "goalLevel": 2},
  {"name": "Daniel Prabhakaran SD", "pathway": "Persusavive Influence", "level": 1, "mentor": "DTM Janani", "mobile": "97909 30235", "iceTitle": "Beyond the Lines of Home", "iceDate": "Thursday, July 30, 2026", "roleMonths": ["TMOD", "General Evaluvator", "Prepared Speaker 02", "Insight Curator", "TTM", null, null, null, null, null], "roleCount": 5, "goal": "GOAL 6", "goalDesc": "One more Level 4 ,Path Completion , or DTM award achieved", "goalLevel": 4},
  {"name": "Dharun Krishna R", "pathway": "Dynamic Leadership", "level": 1, "mentor": "DTM Rakesh", "mobile": "98435 45464", "iceTitle": "Power Of Success", "iceDate": "Jul 23, 2026", "roleMonths": ["Grammarian", "Prepared Speaker 01", "General Evaluvator", "TTM", null, null, null, null, null, null], "roleCount": 4, "goal": "GOAL 5", "goalDesc": "One Level 4 ,Path Completion , or DTM award achieved", "goalLevel": 4},
  {"name": "Rahul S", "pathway": "Dynamic Leadership", "level": 1, "mentor": "DTM Janani", "mobile": "97909 30235", "iceTitle": null, "iceDate": "Aug 06, 2026", "roleMonths": [null, null, null, "Prepared Speaker 01", "Photography Master", null, null, null, null, null], "roleCount": 2, "goal": "GOAL 5", "goalDesc": "One Level 4 ,Path Completion , or DTM award achieved", "goalLevel": 4},
  {"name": "Varun KJ", "pathway": "Dynamic Leadership", "level": 1, "mentor": "TM Amirta", "mobile": null, "iceTitle": null, "iceDate": null, "roleMonths": [null, null, null, null, null, null, null, null, null, null], "roleCount": 0, "goal": "GOAL 2", "goalDesc": "Two Level 2 awards achieved", "goalLevel": 2},
  {"name": "Abinav D", "pathway": "Persusavive Influence", "level": 1, "mentor": "TM Shilpa", "mobile": null, "iceTitle": null, "iceDate": null, "roleMonths": ["Word Master", null, null, "Photography Master", null, null, null, null, null, null], "roleCount": 2, "goal": "GOAL 1", "goalDesc": "Four Level 1 awards achieved", "goalLevel": 1},
  {"name": "Laksha T", "pathway": "Dynamic Leadership", "level": 1, "mentor": "TM Mohini", "mobile": null, "iceTitle": null, "iceDate": null, "roleMonths": ["Listening Master", null, "Timer", null, "TMOD", null, null, null, null, null], "roleCount": 3, "goal": "GOAL 1", "goalDesc": "Four Level 1 awards achieved", "goalLevel": 1},
  {"name": "Sharal M", "pathway": "Visionary Communication", "level": 1, "mentor": "TM Jonathan", "mobile": "95663 42740", "iceTitle": null, "iceDate": null, "roleMonths": [null, null, null, null, "Timer", null, null, null, null, null], "roleCount": 1, "goal": "GOAL 1", "goalDesc": "Four Level 1 awards achieved", "goalLevel": 1},
  {"name": "Sasvitha G", "pathway": "Dynamic Leadership", "level": 1, "mentor": "TM Shanthini", "mobile": null, "iceTitle": null, "iceDate": null, "roleMonths": [null, null, null, null, null, null, null, null, null, null], "roleCount": 0, "goal": "GOAL 4", "goalDesc": "Two Level 3 awards achieved", "goalLevel": 3},
  {"name": "Praveen P", "pathway": "Dynamic Leadership", "level": 1, "mentor": "TM Mohini", "mobile": null, "iceTitle": null, "iceDate": null, "roleMonths": [null, null, null, null, null, null, null, null, null, null], "roleCount": 0, "goal": "GOAL 1", "goalDesc": "Four Level 1 awards achieved", "goalLevel": 1},
  {"name": "Harishwa S", "pathway": "Engaging Humor", "level": 1, "mentor": "TM Kalaipriya", "mobile": "98944 02206", "iceTitle": null, "iceDate": "Aug 06, 2026", "roleMonths": [null, null, "TTM", null, "Prepared Speaker 04", null, null, null, null, null], "roleCount": 2, "goal": "GOAL 1", "goalDesc": "Four Level 1 awards achieved", "goalLevel": 1},
  {"name": "Snega Mithra SM", "pathway": "Presentation Mastery", "level": 1, "mentor": "TM Ganga", "mobile": null, "iceTitle": null, "iceDate": null, "roleMonths": [null, null, "Grammarian", "Ah- Counter", null, null, null, null, null, null], "roleCount": 2, "goal": "GOAL 1", "goalDesc": "Four Level 1 awards achieved", "goalLevel": 1}
];

function padArray(arr, len = TOTAL_MEETINGS) {
  const a = Array.isArray(arr) ? arr.slice(0, len) : [];
  while (a.length < len) a.push(null);
  return a;
}

function uid() {
  return 'm_' + Math.random().toString(36).slice(2, 10);
}

function parseMemberRow(row) {
  if (!row) return null;
  let roleMonths = [];
  let attendance = [];
  try { roleMonths = JSON.parse(row.roleMonths || '[]'); } catch (e) {}
  try { attendance = JSON.parse(row.attendance || '[]'); } catch (e) {}

  roleMonths = padArray(roleMonths);
  attendance = padArray(attendance);
  const roleCount = roleMonths.filter(r => r && String(r).trim()).length;

  return {
    id: row.id,
    name: row.name,
    pathway: row.pathway || 'Persusavive Influence',
    level: Number(row.level) || 1,
    mentor: row.mentor || '',
    mobile: row.mobile || null,
    iceTitle: row.iceTitle || null,
    iceDate: row.iceDate || null,
    roleMonths,
    roleCount,
    goal: row.goal || '',
    goalDesc: row.goalDesc || '',
    goalLevel: Number(row.goalLevel) || 1,
    attendance
  };
}

function initDatabase() {
  db.exec(`
    CREATE TABLE IF NOT EXISTS members (
      id TEXT PRIMARY KEY,
      name TEXT NOT NULL,
      pathway TEXT,
      level INTEGER DEFAULT 1,
      mentor TEXT,
      mobile TEXT,
      iceTitle TEXT,
      iceDate TEXT,
      roleMonths TEXT,
      roleCount INTEGER DEFAULT 0,
      goal TEXT,
      goalDesc TEXT,
      goalLevel INTEGER DEFAULT 1,
      attendance TEXT,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `);

  const stmt = db.prepare('SELECT COUNT(*) as count FROM members');
  const countRow = stmt.get();
  if (!countRow || countRow.count === 0) {
    seedDatabase();
  }
}

function seedDatabase() {
  db.exec('DELETE FROM members');
  const stmt = db.prepare(`
    INSERT INTO members (id, name, pathway, level, mentor, mobile, iceTitle, iceDate, roleMonths, roleCount, goal, goalDesc, goalLevel, attendance)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `);

  for (let idx = 0; idx < SEED_MEMBERS.length; idx++) {
    const m = SEED_MEMBERS[idx];
    const id = m.id || uid();
    const roleMonthsJson = JSON.stringify(padArray(m.roleMonths));
    const attendanceJson = JSON.stringify(padArray(m.attendance));
    const roleCount = padArray(m.roleMonths).filter(r => r && String(r).trim()).length;

    stmt.run(
      id,
      m.name,
      m.pathway || 'Persusavive Influence',
      m.level || 1,
      m.mentor || '',
      m.mobile || null,
      m.iceTitle || null,
      m.iceDate || null,
      roleMonthsJson,
      roleCount,
      m.goal || '',
      m.goalDesc || '',
      m.goalLevel || 1,
      attendanceJson
    );
  }
}

function getAllMembers() {
  const stmt = db.prepare('SELECT * FROM members ORDER BY name ASC');
  const rows = stmt.all();
  return rows.map(parseMemberRow);
}

function getMemberById(id) {
  const stmt = db.prepare('SELECT * FROM members WHERE id = ?');
  const row = stmt.get(id);
  return parseMemberRow(row);
}

function findMembersByName(nameQuery) {
  if (!nameQuery || !nameQuery.trim()) return [];
  const q = nameQuery.trim().toLowerCase();
  const members = getAllMembers();
  return members.filter(m => m.name.toLowerCase().includes(q));
}

function insertMember(m) {
  const id = m.id || uid();
  const roleMonthsJson = JSON.stringify(padArray(m.roleMonths));
  const attendanceJson = JSON.stringify(padArray(m.attendance));
  const roleCount = padArray(m.roleMonths).filter(r => r && String(r).trim()).length;

  const stmt = db.prepare(`
    INSERT INTO members (id, name, pathway, level, mentor, mobile, iceTitle, iceDate, roleMonths, roleCount, goal, goalDesc, goalLevel, attendance)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `);

  stmt.run(
    id,
    m.name || 'New Member',
    m.pathway || 'Persusavive Influence',
    m.level || 1,
    m.mentor || '',
    m.mobile || null,
    m.iceTitle || null,
    m.iceDate || null,
    roleMonthsJson,
    roleCount,
    m.goal || '',
    m.goalDesc || '',
    m.goalLevel || 1,
    attendanceJson
  );

  return getMemberById(id);
}

function updateMember(id, fields) {
  const existing = getMemberById(id);
  if (!existing) return null;

  const updated = { ...existing, ...fields };
  const roleMonthsJson = JSON.stringify(padArray(updated.roleMonths));
  const attendanceJson = JSON.stringify(padArray(updated.attendance));
  const roleCount = padArray(updated.roleMonths).filter(r => r && String(r).trim()).length;

  const stmt = db.prepare(`
    UPDATE members SET
      name = ?,
      pathway = ?,
      level = ?,
      mentor = ?,
      mobile = ?,
      iceTitle = ?,
      iceDate = ?,
      roleMonths = ?,
      roleCount = ?,
      goal = ?,
      goalDesc = ?,
      goalLevel = ?,
      attendance = ?
    WHERE id = ?
  `);

  stmt.run(
    updated.name,
    updated.pathway,
    updated.level,
    updated.mentor,
    updated.mobile,
    updated.iceTitle,
    updated.iceDate,
    roleMonthsJson,
    roleCount,
    updated.goal,
    updated.goalDesc,
    updated.goalLevel,
    attendanceJson,
    id
  );

  return getMemberById(id);
}

function deleteMember(id) {
  const existing = getMemberById(id);
  if (!existing) return false;
  const stmt = db.prepare('DELETE FROM members WHERE id = ?');
  stmt.run(id);
  return true;
}

module.exports = {
  db,
  initDatabase,
  seedDatabase,
  getAllMembers,
  getMemberById,
  findMembersByName,
  insertMember,
  updateMember,
  deleteMember
};
