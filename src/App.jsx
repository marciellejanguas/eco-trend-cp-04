import { useState } from "react";
import FilterBar from "./components/FilterBar";
import ProductList from "./components/ProductList";
import Header from "./components/header";
import Banner from "./components/banner";
import Produtos from "./components/produtos";
import Filtragem from "./components/filtragem";
import Carrinho from "./components/carrinho";
import Checkout from "./components/checkout";

export default function App() {
  const [category, setCategory] = useState("");
  const [sort, setSort] = useState("");

  return (
    <main>
      <div className="container">
        <Header />
        <Banner />
        <Produtos />
        <Filtragem />
        <Carrinho />
        <Checkout />

        <FilterBar
          category={category}
          setCategory={setCategory}
          sort={sort}
          setSort={setSort}
        />
        <ProductList category={category} sort={sort} />
      </div>
    </main>
  );
}
