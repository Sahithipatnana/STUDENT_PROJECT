import { Link } from 'react-router-dom';
import { students } from '../data/students.js';

const averageAttendance = Math.round(
  students.reduce((total, student) => total + student.attendance, 0) /
    students.length,
);

export default function Home() {
  const topStudent = students.reduce((best, student) =>
    student.attendance > best.attendance ? student : best,
  );

  return (
    <section className="page-shell home-grid">
      <div className="hero-panel">
        <p className="eyebrow">Student Management App</p>
        <h1>Welcome to a smarter student dashboard.</h1>
        <p className="hero-copy">
          Track student profiles, course information, attendance, grades, and
          academic progress from one clean React application.
        </p>
        <div className="hero-actions">
          <Link className="button button-primary" to="/students">
            Explore students
          </Link>
          <Link className="button button-secondary" to="/about">
            About project
          </Link>
        </div>
      </div>

      <aside className="insight-panel" aria-label="Dashboard highlights">
        <div className="orbital-visual" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
        <div className="stats-grid">
          <div>
            <strong>{students.length}</strong>
            <span>Students</span>
          </div>
          <div>
            <strong>{averageAttendance}%</strong>
            <span>Avg attendance</span>
          </div>
          <div>
            <strong>{topStudent.grade}</strong>
            <span>Highest grade</span>
          </div>
        </div>
        <div className="highlight-card">
          <span>Top attendance</span>
          <strong>{topStudent.name}</strong>
          <p>{topStudent.recentProject}</p>
        </div>
      </aside>
    </section>
  );
}
