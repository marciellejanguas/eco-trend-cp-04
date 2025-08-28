import { useState } from "react";
import FilterBar from "./components/FilterBar";
import ProductList from "./components/ProductList";
import Header from "./components/header";
import Banner from "./components/banner";

export default function App() {
  const [category, setCategory] = useState("");
  const [sort, setSort] = useState("");

  return (
    <main>
      <div className="container">
        <Header />
        <Banner />

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
