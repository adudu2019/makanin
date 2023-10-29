import { BrowserRouter, Route, Routes } from "react-router-dom"
import { HomePage } from "./pages/HomePage"
import DetailPage from "./pages/DetailPage"
import CategoryPage from "./pages/CategoryPage"
import CountryPage from "./pages/CountryPage"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path="/detail/:id" element={<DetailPage />}/>
          <Route path="/category/:makanan" element={<CategoryPage />}/>
          <Route path="/country/:makanan" element={<CountryPage/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
