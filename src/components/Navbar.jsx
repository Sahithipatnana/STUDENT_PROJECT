import { NavLink } from 'react-router-dom';

const links = [
  { to: '/', label: 'Home' },
  { to: '/students', label: 'Students' },
  { to: '/about', label: 'About' },
];

export default function Navbar() {
  return (
    <header className="site-header">
      <NavLink to="/" className="brand" aria-label="Student Dashboard home">
        <span className="brand-mark">SD</span>
        <span>
          <strong>Student Dashboard</strong>
          <small>Academic profile manager</small>
        </span>
      </NavLink>

      <nav className="nav-links" aria-label="Primary navigation">
        {links.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            className={({ isActive }) =>
              isActive ? 'nav-link nav-link-active' : 'nav-link'
            }
          >
            {link.label}
          </NavLink>
        ))}
      </nav>
    </header>
  );
}
