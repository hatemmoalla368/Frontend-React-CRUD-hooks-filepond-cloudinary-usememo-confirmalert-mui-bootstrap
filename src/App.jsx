import { BrowserRouter as Router,Routes, Route } from "react-router-dom";

import Insertarticle from "./components/articles/Insertarticle";
import Editarticle from "./components/articles/Editarticle";
import Viewarticle from "./components/articles/Viewarticle";

import Insertscategorie from "./components/scategories/Insertscategorie";
import Editscategorie from "./components/scategories/Editscategorie";
import Viewscategorie from "./components/scategories/Viewscategorie";
import Listcategories from "./components/categories/Listcategories";
import Insertcategorie from "./components/categories/Insertcategorie";
import Editcategorie from "./components/categories/Editcategorie";
import Viewcategorie from "./components/categories/Viewcategorie";
import Menu from "./components/Menu";
import 'bootstrap/dist/css/bootstrap.min.css';
import "@fortawesome/fontawesome-free/css/all.css";
import Articlesapp from "./components/articles/Articlesapp";
import Scategorieapp from "./components/scategories/Scategorieapp";


function App() {
  

  return (
    <>
      <Router>
        <Menu/>
        <Routes>
          
          <Route path="/articles/add" element={<Insertarticle/>}/>
          <Route path="/article/edit/:id" element={<Editarticle/>}/>
          <Route path="/article/view/:id" element={<Viewarticle/>}/>
          
          <Route path="/scategories/add" element={<Insertscategorie/>}/>
          <Route path="/scategorie/edit/:id" element={<Editscategorie/>}/>
          <Route path="/scategorie/view/:id" element={<Viewscategorie/>}/>
          <Route path="/categories" element={<Listcategories/>}/>
          <Route path="/categories/add" element={<Insertcategorie/>}/>
          <Route path="/categorie/edit/:id" element={<Editcategorie/>}/>
          <Route path="/categorie/view/:id" element={<Viewcategorie/>}/>
          <Route path="/articleapp" element={<Articlesapp/>}/>
          <Route path="/scategorieapp" element={<Scategorieapp/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
