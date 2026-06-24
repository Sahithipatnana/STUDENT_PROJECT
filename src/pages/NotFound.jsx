import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <section className="page-shell narrow-page not-found">
      <p className="eyebrow">404</p>
      <h1>Page not found</h1>
      <p className="lead">
        This route does not exist in the student dashboard.
      </p>
      <Link className="button button-primary" to="/">
        Go home
      </Link>
    </section>
  );
}
