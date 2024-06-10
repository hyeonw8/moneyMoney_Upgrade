import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from '../shared/Layout';
import Home from "../pages/Home";
import Detail from "../pages/Detail";

const Router = () => {

  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/detail/:id" element={<Detail />}/>
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default Router