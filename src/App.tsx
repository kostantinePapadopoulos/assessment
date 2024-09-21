import { ProductsProvider } from "./utils/contexts/products/ProductsContext";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import MenuTop from "./components/layout/menuTop/MenuTop";
import "./App.css";
import PageContainer from "./components/layout/menuTop/pageContainer/PageContainer";
import ProductsContainer from "./components/productsPage/ProductsContainer";
import HomePage from "./components/homePage/HomePage";
import ProductContainer from "./components/productPage/ProductContainer";
import AddProductContainer from "./components/addProductPage/AddProductContainer";

function App() {
  return (
    <Router>
      <ProductsProvider>
        <div className="flex flex-col">
          <MenuTop />
          <div>
            <Routes>
              <Route
                path="/"
                element={
                  <PageContainer title="Netcompany assessment">
                    <HomePage />
                  </PageContainer>
                }
              />
              <Route
                path="/add-product"
                element={
                  <PageContainer title="Add product">
                    <AddProductContainer />
                  </PageContainer>
                }
              />
              <Route
                path="/products"
                element={
                  <PageContainer title="Product">
                    <ProductsContainer />
                  </PageContainer>
                }
              />
              <Route
                path="/product/:isbn"
                element={
                  <PageContainer title="Product">
                    <ProductContainer />
                  </PageContainer>
                }
              />
            </Routes>
          </div>
        </div>
      </ProductsProvider>
    </Router>
  );
}

export default App;
