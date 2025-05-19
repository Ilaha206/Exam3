import { BrowserRouter, Routes, Route } from "react-router";
import MainLayout from "./Layout/MainLayout";
import Home from "./Pages/Home";
import Basket from "./Pages/Basket";
import Favorite from "./Pages/Favorite";
import Admin from "./Pages/Admin";
import AdminAdd from "./Pages/AdminAdd";
import NoPage from "./pages/NoPage";
import Detail from "./Pages/Detail";
import './App.css'


function App() {
  

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="basket" element={<Basket />} />
          <Route path="favorite" element={<Favorite />} />
          <Route path="admin" element={<Admin />} />
          <Route path="adminadd" element={<AdminAdd />} />
          <Route path="detail/:id" element={<Detail />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
