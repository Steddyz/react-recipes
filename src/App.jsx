import "./App.css";
import Header from "./components/Header/Header";
import RandomRecipe from "./components/RandomRecipe/RandomRecipe";
import Footer from "./components/Footer/Footer";
import IngredientsForm from "./components/IngredientsForm/IngredientsForm";

function App() {
  return (
    <>
      <Header />
      <RandomRecipe />
      <IngredientsForm />
      <Footer />
    </>
  );
}

export default App;
