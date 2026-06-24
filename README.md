# Student Dashboard

A polished React student management dashboard built with Vite and React Router. The app lets users browse student records, search and filter the directory, open dynamic student profile pages, and view project information through a responsive interface.

## Project Features

- Home page with student statistics and dashboard highlights
- Student directory with search and course filtering
- Dynamic student profile pages using route parameters
- About page explaining the project purpose
- Custom 404 page for unknown routes
- Responsive layout for desktop, tablet, and mobile screens
- Clean component structure with reusable student data

## Tech Stack

- React
- Vite
- React Router DOM
- JavaScript
- CSS

## Folder Structure

```text
student-dashboard/
├── index.html
├── package.json
├── vite.config.js
├── eslint.config.js
├── src/
│   ├── App.jsx
│   ├── main.jsx
│   ├── styles.css
│   ├── components/
│   │   ├── Navbar.jsx
│   │   └── StudentCard.jsx
│   ├── data/
│   │   └── students.js
│   └── pages/
│       ├── About.jsx
│       ├── Home.jsx
│       ├── NotFound.jsx
│       ├── StudentDetail.jsx
│       └── Students.jsx
```

## Prerequisites

Install Node.js before running this project.

Recommended:

- Node.js 18 or newer
- npm 9 or newer

Check your installed versions:

```bash
node -v
npm -v
```

## How To Run This Project

1. Clone or download the project.

```bash
git clone <your-github-repository-url>
cd <project-folder-name>
```

If you downloaded a ZIP file, extract it and open the extracted folder in VS Code or your terminal.

2. Install dependencies.

```bash
npm install
```

3. Start the development server.

```bash
npm run dev
```

4. Open the local URL shown in the terminal.

Usually it will be:

```text
http://localhost:5173/
```

## Available Commands

```bash
npm run dev
```

Starts the local development server.

```bash
npm run build
```

Creates a production build inside the `dist` folder.

```bash
npm run preview
```

Runs a local preview of the production build.

```bash
npm run lint
```

Checks the code for linting issues.

## Current Data Setup

The current version stores student records in:

```text
src/data/students.js
```

This means the app currently uses local static data. Students are already written inside the project code, so users can browse and view them, but newly added student details are not saved from the website yet.

To add or edit student details in the current version, update the objects inside `src/data/students.js`.

Example:

```js
{
  id: 5,
  name: 'Student Name',
  course: 'Course Name',
  year: 'First Year',
  email: 'student@example.com',
  phone: '+91 90000 00000',
  location: 'City',
  attendance: 90,
  grade: 'A',
  status: 'Active',
  advisor: 'Advisor Name',
  skills: ['Skill One', 'Skill Two'],
  recentProject: 'Project title',
  color: '#2454d6',
}
```

