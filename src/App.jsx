import { useState } from "react";
import FilterBar from "./components/FilterBar";
import ProductList from "./components/ProductList";

export default function App() {
  const [category, setCategory] = useState("");
  const [sort, setSort] = useState("");

  return (
    <main style={{ padding: 24, maxWidth: 980, margin: "0 auto" }}>
      <h1>EcoTrend</h1>
      <FilterBar
        category={category}
        setCategory={setCategory}
        sort={sort}
        setSort={setSort}
      />
      <ProductList category={category} sort={sort} />
    </main>
  );
}