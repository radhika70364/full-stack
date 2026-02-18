import { Routes, Route } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import Navbar from './components/Navbar'
const delay = (ms) =>
  new Promise((resolve) => setTimeout(resolve, ms));

const Dash = lazy(() =>
  Promise.all([
    import("./pages/Dashboard"),
    delay(1000),
  ]).then(([moduleExports]) => moduleExports)
);


export default function App() {
  return (
    <>
      <Suspense fallback={<h2>Loading...</h2>}>
        <h1>Dashboard</h1>
        <Dash />
      </Suspense>
    </>
  )
}