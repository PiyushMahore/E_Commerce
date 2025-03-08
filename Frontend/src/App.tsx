import "./App.css"
import Nav from "./components/ui/nav"
import Hero from "./pages/hero"
import Products from "./pages/products"

function App() {
  return (
    <>
      <div className="fixed top-0 z-50 w-full bg-white">
        <Nav />
      </div>
      <div className="max-w-screen mt-20 lg:mt-36">
        <Hero />
        <Products />
      </div>
    </>
  )
}

export default App