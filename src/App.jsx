import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage";
import RecipesPage from "./pages/RecipesPage/RecipesPage";
import CountriePage from "./pages/CountriePage/CountriePage";
import CategoriesPage from "./pages/CategoriesPage/CategoriesPage";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/recipes" element={<RecipesPage />} />
        <Route path="/categories" element={<CategoriesPage />} />
        <Route path="/countries" element={<CountriePage />} />
        <Route path="*" element={<MainPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
