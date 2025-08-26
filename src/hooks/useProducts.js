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

        const base = import.meta.env.VITE_API_URL;
        const params = new URLSearchParams();
        if (category) params.set("category", category);
        if (sort) {
          params.set("_sort", "price");
          params.set("_order", sort); // "asc" | "desc"
        }
        const url = `${base}/products${params.toString() ? `?${params.toString()}` : ""}`;

        const res = await fetch(url, { signal: controller.signal });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        setData(await res.json());
      } catch (e) {
        if (e.name !== "AbortError") setError(e.message || "Erro ao carregar produtos");
      } finally {
        setLoading(false);
      }
    })();

    return () => controller.abort();
  }, [category, sort]); // refaz o fetch quando filtros mudam

  return { data, loading, error };
}