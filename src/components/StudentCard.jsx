import { Link } from 'react-router-dom';

export default function StudentCard({ student }) {
  const initials = student.name
    .split(' ')
    .map((part) => part[0])
    .join('')
    .slice(0, 2);

  return (
    <article className="student-card">
      <div className="student-card-top">
        <span
          className="avatar"
          style={{ '--avatar-color': student.color }}
          aria-hidden="true"
        >
          {initials}
        </span>
        <span className="status-pill">{student.status}</span>
      </div>

      <h3>{student.name}</h3>
      <p>{student.course}</p>

      <dl className="student-metrics">
        <div>
          <dt>Attendance</dt>
          <dd>{student.attendance}%</dd>
        </div>
        <div>
          <dt>Grade</dt>
          <dd>{student.grade}</dd>
        </div>
      </dl>

      <Link className="button button-ghost" to={`/students/${student.id}`}>
        View profile
      </Link>
    </article>
  );
}
