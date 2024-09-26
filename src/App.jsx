import { useState } from "react";

import "./App.css";
import Header from "./components/Header/Header";
import RandomRecipe from "./components/RandomRecipe/RandomRecipe";
import Footer from "./components/Footer/Footer";
import IngredientsForm from "./components/IngredientsForm/IngredientsForm";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      {/* <RandomRecipe />
      <IngredientsForm />
      <Footer /> */}
    </>
  );
}

export default App;
