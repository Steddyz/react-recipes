import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage";
import RecipesPage from "./pages/RecipesPage/RecipesPage";
import CountriePage from "./pages/CountriePage/CountriePage";
import CategoriesPage from "./pages/CategoriesPage/CategoriesPage";
import MealsByCategory from "./components/MealsByCategory/MealsByCategory";
import MealsByCountry from "./components/MealsByCountry/MealsByCountry";
import RecipePage from "./pages/RecipePage/RecipePage";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/" element={<MainPage />} />
        <Route path="/recipes" element={<RecipesPage />} />
        <Route path="/recipes/:recipeId" element={<RecipePage />} />
        <Route path="/categories" element={<CategoriesPage />} />
        <Route path="/category/:categoryName" element={<MealsByCategory />} />
        <Route path="/countries" element={<CountriePage />} />
        <Route path="/countries/:countrieName" element={<MealsByCountry />} />
        <Route path="*" element={<MainPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
