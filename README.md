# react-pure

Opinionated React framework wrapper that attempts to use only pure functions with stateful HOCs.

### Why

React is great. At it's core, it embraces declarative, functional programming - a must for modern, complex web applications. However, for convenience, React allows its components to be impure by: containing local state, hooks for lifecycle, stateful logic, global state injection (react-redux), css-in-js, and others. A key optimization technique in functional programming is memoization. React provides a way to implement this via custom logic for impure, stateful components, but memoization is trivial for pure functions - **react-pure** addresses takes full advantange of this.

Another great thing about React is it's singular focus on rendering ui and leaving most everything else up to the developer. However, this leads to confusion and many different implementations of global state and context. **react-pure** provides an opinionated wrapper around React to handle these common challenges following current best-practices.

### Things to address

- global state
- local state
- context
- jss-in-css (material-ui)
- lifecycle methods
- folder structure / naming conventions
