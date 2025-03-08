import "./App.css"
import Nav from "./components/ui/nav"
import Hero from "./pages/hero"
import Products from "./pages/products"

function App() {
  return (
    <>
      <div>
        <Nav />
      </div>
      <div className="max-w-screen">
        <Hero />
        <Products />
      </div>
    </>
  )
}

export default App