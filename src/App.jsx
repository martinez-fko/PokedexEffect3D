import { HashRouter, Link, Route, Routes } from "react-router-dom";
import ProtectedRoutes from "./components/ProtectedRoutes";
import MainLayout from "./layouts/MainLayout";
import { Login, Config, Home, Detail } from "./pages";

function App() {
  //? isLoading isDark itemPerPage trainner pokemons
  
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/configuration" element={<Config />} />
        <Route element={<ProtectedRoutes />}>
          <Route element={<MainLayout />}>
            <Route path="/pokedex" element={<Home />} />
            <Route path="/detail/:id" element={<Detail />} />
          </Route>
        </Route>
      </Routes>
      <Link className="icon_config" to="/configuration"></Link>
    </HashRouter>
  );
}

export default App;
