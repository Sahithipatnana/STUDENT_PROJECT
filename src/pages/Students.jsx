import { useMemo, useState } from 'react';
import StudentCard from '../components/StudentCard.jsx';
import { courses, students } from '../data/students.js';

export default function Students() {
  const [query, setQuery] = useState('');
  const [course, setCourse] = useState('All courses');

  const filteredStudents = useMemo(() => {
    const searchText = query.trim().toLowerCase();

    return students.filter((student) => {
      const matchesSearch =
        student.name.toLowerCase().includes(searchText) ||
        student.course.toLowerCase().includes(searchText) ||
        student.location.toLowerCase().includes(searchText);
      const matchesCourse = course === 'All courses' || student.course === course;

      return matchesSearch && matchesCourse;
    });
  }, [course, query]);

  return (
    <section className="page-shell">
      <div className="page-heading">
        <div>
          <p className="eyebrow">Student directory</p>
          <h1>Browse student records</h1>
        </div>
        <span className="count-badge">{filteredStudents.length} shown</span>
      </div>

      <div className="toolbar" aria-label="Student filters">
        <label>
          <span>Search</span>
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Name, course, or city"
          />
        </label>

        <label>
          <span>Course</span>
          <select
            value={course}
            onChange={(event) => setCourse(event.target.value)}
          >
            <option>All courses</option>
            {courses.map((courseName) => (
              <option key={courseName}>{courseName}</option>
            ))}
          </select>
        </label>
      </div>

      {filteredStudents.length > 0 ? (
        <div className="student-grid">
          {filteredStudents.map((student) => (
            <StudentCard key={student.id} student={student} />
          ))}
        </div>
      ) : (
        <div className="empty-state">
          <h2>No matching students</h2>
          <p>Try a different search word or select all courses.</p>
        </div>
      )}
    </section>
  );
}
