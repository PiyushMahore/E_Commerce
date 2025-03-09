import "./App.css"
import Nav from "./components/ui/nav"
import HealthySnacking from "./pages/healthySnacking"
import Hero from "./pages/hero"
import NewLaunches from "./pages/newLaunches"
import ProductsOfTheMonth from "./pages/productsOfTheMonth"

function App() {
  return (
    <>
      <div className="fixed top-0 z-50 w-full bg-white">
        <Nav />
      </div>
      <div className="max-w-screen mt-20 lg:mt-36">
        <Hero />
        <ProductsOfTheMonth />
        <NewLaunches />
        <HealthySnacking />
      </div>
    </>
  )
}

export default App