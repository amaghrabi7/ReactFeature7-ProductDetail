// Styling
import { GlobalStyle, ThemeButton } from "./styles";

// Data
import products from "./products";

import Home from "./components/Home";
// Components
import ProductList from "./components/ProductList";
import { ThemeProvider } from "styled-components";
import { useState } from "react";
import ProductDetail from "./components/ProductDetail";

const theme = {
  light: {
    mainColor: "#242424", // main font color
    backgroundColor: "#fefafb", // main background color
    pink: "#ff85a2",
    red: "#ff3232",
  },
  dark: {
    mainColor: "#fefafb", // main font color
    backgroundColor: "#242424", // main background color
    pink: "#ff85a2",
    red: "#ff3232",
  },
};

function App() {
  const [currentTheme, setCurrentTheme] = useState("light");
  const [product, setProduct] = useState(products[null]);
  const setView = () => {
    if (product) return <ProductDetail product={product} />;
    return <ProductList setProduct={setProduct} />;
  };
  const toggleTheme = () =>
    setCurrentTheme(currentTheme === "light" ? "dark" : "light");

  return (
    <ThemeProvider theme={theme[currentTheme]}>
      <GlobalStyle />
      <ThemeButton onClick={toggleTheme}>
        {currentTheme === "light" ? "Dark" : "Light"} Mode
      </ThemeButton>
      <Home />
      <ProductList setProduct={setProduct} />
      <ProductDetail product={product} />
      {setView()}
    </ThemeProvider>
  );
}

export default App;
