import { useEffect, useState } from "react";

export function useProducts({ category, sort }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();

    (async () => {
      try {
        setLoading(true);
        setError(null);
        const base = (import.meta.env.VITE_API_URL || "").replace(/\/$/, "");
        if (!base) throw new Error("API base URL ausente. Verifique o .env e reinicie o dev server.");

        const url = new URL(`${base}/products`);

        const cat = (category || "").toLowerCase().trim();
        if (cat) url.searchParams.set("category", cat);

        const ord = (sort || "").toLowerCase().trim();
        if (ord === "asc" || ord === "desc") {
          url.searchParams.set("_sort", "price");
          url.searchParams.set("_order", ord);
        }

        console.log("🔎 URL chamada:", url.toString());

        const res = await fetch(url.toString(), {
          signal: controller.signal,
          headers: { Accept: "application/json" },
        });

        console.log("📡 Status:", res.status);

        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const json = await res.json();
        console.log("📦 Itens recebidos:", Array.isArray(json) ? json.length : json);

        setData(json);
      } catch (e) {
        if (e.name !== "AbortError") setError(e.message || "Erro ao carregar produtos");
      } finally {
        setLoading(false);
      }
    })();

    return () => controller.abort();
  }, [category, sort]);

  return { data, loading, error };
}