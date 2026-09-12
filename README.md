# TechBoard React

A React application developed as part of my Front-End React learning path at Alura.

This project represents my transition from vanilla JavaScript and DOM manipulation to React, exploring component-based development, declarative interfaces, state management, forms, and dynamic rendering.

## 🎯 Project Overview

TechBoard is a technology event board where users can create events by providing:

- Event name
- Cover image URL
- Event date
- Event theme

Created events are dynamically added to the interface and displayed according to their selected theme.

## ⚛️ React & Components

The application is built with React and organized into reusable components, replacing direct DOM manipulation with a declarative approach.

The project explores:

- JSX
- Functional components
- Props
- Component composition
- Reusable UI components
- Declarative rendering
- React 19

Components are responsible for specific parts of the interface, such as the event form, theme headings, event cards, buttons, labels, and form fields.

## 🧠 State Management

The project uses the `useState` Hook to manage the events displayed on the application.

When a new event is submitted, the state is updated and React automatically re-renders the interface.

```js
const [eventos, setEventos] = useState([...])
```

This project helped reinforce the difference between managing UI state with React and manipulating the DOM directly with JavaScript.

> The current application keeps events in React state only. Because there is no persistence layer yet, newly created events are lost when the page is reloaded.

## 🔄 Array Methods & Dynamic Rendering

One of the main learning points of the project was using JavaScript array methods together with React rendering.

### `map()`

Used to transform arrays into React elements:

```js
temas.map(...)
eventos.map(...)
```

### `filter()`

Used to display only the events belonging to the current theme:

```js
eventos.filter(function (evento) {
    return evento.tema.id == tema.id
})
```

### `find()`

Used to identify the selected theme when processing the form:

```js
temas.find(function (item) {
    return item.id == formData.get('tema')
})
```

### `some()`

Used to verify whether a theme has at least one associated event before rendering it:

```js
eventos.some(function (evento) {
    return evento.tema.id == tema.id
})
```

Together, these methods allowed the application to implement dynamic and conditional rendering based on the application's data.

## 📝 Forms & Form Actions

The project uses React 19's approach to form handling with the `action` prop.

When the form is submitted, the `FormData` object is used to retrieve the values entered by the user.

```js
<form action={aoFormSubmetido}>
```

The submitted data is converted into an event object:

```js
const evento = {
    capa: formData.get('capa'),
    tema: temas.find(...),
    data: new Date(formData.get('dataEvento')),
    titulo: formData.get('nomeEvento')
}
```

This provided practical experience with:

- Form Actions
- `FormData`
- Form fields and `name` attributes
- Controlled data flow between components
- Event creation from user input

## 🧩 Props & Data Flow

The application also explores how data flows between React components through props.

For example, the list of themes is passed from `App` to the form:

```jsx
<FormularioDeEvento
    temas={temas}
    aoSubmeter={adicionarEvento}
/>
```

The form then uses this data to populate the dropdown and passes the newly created event back to the parent component through a callback.

This reinforces the React principle of **one-way data flow**.

## 🖥️ Vite & Build

The project was created and developed using Vite.

The project also explores the difference between the development environment and the production build.

### Development

```bash
npm run dev
```

Runs the application using Vite's development server.

### Production Build

```bash
npm run build
```

Generates the optimized production version of the application.

This section of the course also introduced the role of `package.json`, NPM scripts, and the configuration required to prepare a React/Vite application for deployment.

## 🚀 Deployment

The project was deployed using GitHub Pages.

The deployment process provided practical experience with the additional configuration required to publish a Vite-based React application outside the local development environment.

## 🛠️ Technologies

- React 19
- JavaScript
- JSX
- Vite
- HTML5
- CSS3
- ESLint
- NPM

## 📚 Learning Progression

This project represents the next step in my learning journey:

```text
HTML + CSS
    ↓
JavaScript
    ↓
DOM Manipulation
    ↓
CRUD + LocalStorage
    ↓
HTTP Requests + APIs
    ↓
Node.js + NPM
    ↓
React + Vite
```

The project connects concepts previously learned with vanilla JavaScript to React's component-based and declarative approach.

Instead of manually creating and updating DOM elements, the application manages data and state while React determines how the interface should be rendered.

## 🎓 Key Learning Outcomes

This project strengthened my understanding of:

- Thinking in components
- JSX and declarative UI
- Props and one-way data flow
- State management with `useState`
- Dynamic rendering
- Conditional rendering
- JavaScript array methods in React
- Form Actions
- `FormData`
- React 19
- Vite development and production builds
- NPM and `package.json`
- React application deployment
- The transition from DOM manipulation to component-based development