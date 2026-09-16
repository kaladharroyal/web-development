# Full Stack Web Development Learning Roadmap

A structured, practical 30+ day full-stack web development curriculum covering foundational frontend technologies (HTML5, CSS3, modern JavaScript, Asynchronous programming), backend development (Node.js, Express.js, MongoDB), and modern single-page frontend application architecture (React, React Router, Context API, Redux Toolkit).

---

## 🗂️ Curriculum Overview

```
web-development/
├── 01-html-css/                               # Phase 1: Web Foundations (HTML5 & CSS3)
├── 02-javascript-core/                        # Phase 2: Core JavaScript & DOM Manipulation
├── 03-async-javascript/                       # Phase 3: Asynchronous JS & Web APIs
├── 04-backend-nodejs-mongodb/                 # Phase 4: Backend Engineering (Node/Express/Mongo)
├── 05-react-frontend/                         # Phase 5: Modern React & State Management
└── 06-notes-and-demos/                        # Reference Notes & Scratch Demos
```

---

## 📚 Detailed Modules & Contents

### [01-html-css/](./01-html-css/) — Web Foundations
* [day01-html-basics/](./01-html-css/day01-html-basics/) — HTML document structure, semantics, typography, lists, and image embedding.
* [day02-forms-auth-ui/](./01-html-css/day02-forms-auth-ui/) — Interactive HTML forms, input validations, login / forgot password UI, and basic CSS styling.
* [day03-css-flex-animations/](./01-html-css/day03-css-flex-animations/) — CSS layout models (Flexbox), CSS positioning, keyframe animations, and transitions.
* [day04-bootstrap-responsive/](./01-html-css/day04-bootstrap-responsive/) — Bootstrap 5 grid system, responsive navigation bars, and portfolio layout design.

---

### [02-javascript-core/](./02-javascript-core/) — Core JavaScript & DOM
* [day05-js-fundamentals/](./02-javascript-core/day05-js-fundamentals/) — Variables, control flow, loops, prime number checks, FizzBuzz, and pattern algorithms.
* [day06-dom-basics/](./02-javascript-core/day06-dom-basics/) — DOM tree structure, element selection (`querySelector`, `getElementById`), and script linking.
* [day07-dom-manipulation/](./02-javascript-core/day07-dom-manipulation/) — Dynamic DOM manipulation, style changes, event listeners, and interactive tribute page.
* [day08-dom-events/](./02-javascript-core/day08-dom-events/) — DOM event bubbling, event delegation, click/input handling, and dynamic task list.
* [day09-form-validation/](./02-javascript-core/day09-form-validation/) — Client-side form validation, regular expressions, and user registration verification.

---

### [03-async-javascript/](./03-async-javascript/) — Asynchronous JS & Web APIs
* [day10-callbacks/](./03-async-javascript/day10-callbacks/) — Synchronous vs. Asynchronous execution, callback functions, and callback patterns.
* [day11-promises/](./03-async-javascript/day11-promises/) — JavaScript Promises (`resolve`, `reject`), `.then()`, `.catch()`, and `.finally()`.
* [day12-event-loop-promise-all/](./03-async-javascript/day12-event-loop-promise-all/) — JS Event Loop, Microtask / Macrotask queues, and concurrent operations with `Promise.all()`.
* [day13-async-await/](./03-async-javascript/day13-async-await/) — Modern `async`/`await` syntax and error handling with `try...catch`.
* [day14-fetch-api/](./03-async-javascript/day14-fetch-api/) — Consuming REST APIs with `fetch()`, handling JSON payloads, and dynamic DOM rendering.
* [day15-shallow-deep-copy-spread-rest/](./03-async-javascript/day15-shallow-deep-copy-spread-rest/) — Reference types, shallow vs. deep copy, Spread & Rest operators, and random user generator.
* [day16-web-storage-apis/](./03-async-javascript/day16-web-storage-apis/) — Web APIs and browser data persistence.
* [day17-debounce-throttle-storage/](./03-async-javascript/day17-debounce-throttle-storage/) — Performance optimizations (Debouncing, Throttling), `localStorage`, and `sessionStorage`.
* [day18-weather-app/](./03-async-javascript/day18-weather-app/) — Live Weather Application integrating OpenWeatherMap REST API.

---

### [04-backend-nodejs-mongodb/](./04-backend-nodejs-mongodb/) — Backend Engineering
* [day20-nodejs-basics/](./04-backend-nodejs-mongodb/day20-nodejs-basics/) — Node.js runtime, CommonJS modules, and building an HTTP server from scratch using `http`.
* [day21-nodemailer-call-bind/](./04-backend-nodejs-mongodb/day21-nodemailer-call-bind/) — Automated email sending with Nodemailer, and JavaScript `this` keyword (`call`, `apply`, `bind`).
* [expressjs/](./04-backend-nodejs-mongodb/expressjs/) — Express.js server, middleware configuration, JSON body parsing, and routing.
* [day31-mongodb/](./04-backend-nodejs-mongodb/day31-mongodb/) — NoSQL databases, MongoDB concepts, collections, and queries.

---

### [05-react-frontend/](./05-react-frontend/) — Modern React & State Management
* [day22-react-basics/](./05-react-frontend/day22-react-basics/) — Vite + React setup, JSX syntax, and component hierarchy.
* [day23-portfolio-v1/](./05-react-frontend/day23-portfolio-v1/) — Component modularity and passing props in React.
* [day24-portfolio-v2/](./05-react-frontend/day24-portfolio-v2/) — Advanced component decomposition and UI structure.
* [day25-react-state/](./05-react-frontend/day25-react-state/) — `useState` hook, stateful event handling, and dynamic lists.
* [day26-forms-and-routing/](./05-react-frontend/day26-forms-and-routing/) — Controlled vs. Uncontrolled forms, multi-step validation forms, and introduction to routing.
* [day27-react-router-pages/](./05-react-frontend/day27-react-router-pages/) — Multi-page SPA navigation with React Router (`<BrowserRouter>`, `<Routes>`, `<Route>`, `<NavLink>`).
* [day28-context-api-protected-routes/](./05-react-frontend/day28-context-api-protected-routes/) — Global state management with Context API & Protected Routes (Auth Guards).
* [day29-advanced-hooks/](./05-react-frontend/day29-advanced-hooks/) — Advanced React hooks:
  - `UseReducer` — Complex state transitions.
  - `UseMemo` — Expensive calculation memoization.
  - `UseCallback` — Function reference stability.
  - `CustomHooks` — Reusable custom hooks (`useCount`).
* [day30-redux-toolkit/](./05-react-frontend/day30-redux-toolkit/) — Production state management using Redux Toolkit (`configureStore`, `createSlice`, `useDispatch`, `useSelector`).

---

### [06-notes-and-demos/](./06-notes-and-demos/) — Notes & Experiments
* [demo/](./06-notes-and-demos/demo/) — Python and HTML scratch experiments.
* [notes/](./06-notes-and-demos/notes/) — Reference notes on React hooks and JavaScript concepts.

---

## 🚀 Running the Projects

### Running React Vite Projects
Navigate to any React project directory and start the Vite dev server:
```bash
cd 05-react-frontend/<project-folder>
npm install
npm run dev
```

### Running the Express.js Backend
```bash
cd 04-backend-nodejs-mongodb/expressjs
npm install
node server.js
```
