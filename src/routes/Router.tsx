import { Routes, Route } from "react-router-dom";
import { DefaultLayout } from "../Layouts/DefaultLayout";
import { Home } from "../pages/Home";

export default function Router() {
  return (
    <Routes>
      <Route element={<DefaultLayout />}>
        <Route path="/" element={<Home />}/>
      </Route>
    </Routes>
  )
}


