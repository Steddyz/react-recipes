import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage";
import RecipesPage from "./pages/RecipesPage/RecipesPage";
import CountriePage from "./pages/CountriePage/CountriePage";
import CategoriesPage from "./pages/CategoriesPage/CategoriesPage";
import MealsByCategory from "./components/MealsByCategory/MealsByCategory";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/" element={<MainPage />} />
        <Route path="/recipes" element={<RecipesPage />} />
        <Route path="/categories" element={<CategoriesPage />} />
        <Route path="/category/:categoryName" element={<MealsByCategory />} />
        <Route path="/countries" element={<CountriePage />} />

        <Route path="*" element={<MainPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
