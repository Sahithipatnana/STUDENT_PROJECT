export default function About() {
  return (
    <section className="page-shell narrow-page">
      <p className="eyebrow">About the project</p>
      <h1>Built as a React routing project with a real dashboard feel.</h1>
      <p className="lead">
        This Student Management App demonstrates React components, client-side
        routing, dynamic URL parameters, reusable data, and responsive styling.
        It can show a list of students, open each profile, and handle unknown
        pages gracefully.
      </p>

      <div className="feature-list">
        <article>
          <span>01</span>
          <h2>Organized structure</h2>
          <p>Pages, components, and student data are separated clearly.</p>
        </article>
        <article>
          <span>02</span>
          <h2>Dynamic profiles</h2>
          <p>Each student detail page is loaded using the route id.</p>
        </article>
        <article>
          <span>03</span>
          <h2>Polished interface</h2>
          <p>Search, course filtering, stats, and responsive cards are included.</p>
        </article>
      </div>
    </section>
  );
}
