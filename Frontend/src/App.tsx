import { Outlet } from "react-router"
import "./App.css"
import Nav from "./components/ui/nav"
import Footer from "./pages/footer"
import { useEffect } from "react"
import { useAuth } from "./context/userContextProvider"
import { useProducts } from "./context/productContextProvider"

function App() {
  const auth = useAuth();
  const products = useProducts();
  useEffect(() => {
    auth?.getCurrentUser()
    products?.getAllProduct()
  }, [])

  return (
    <>
      <div className="fixed top-0 z-50 w-full bg-white">
        <Nav />
      </div>
      <div className="max-w-screen mt-20 lg:mt-36">
        <Outlet />
      </div>
      <div>
        <Footer />
      </div>
    </>
  )
}

export default App