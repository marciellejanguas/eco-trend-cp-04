import { useEffect, useState } from "react";

export function useProducts() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();

    (async () => {
      try {
        setLoading(true);
        setError(null);

        const base = import.meta.env.VITE_API_URL; // vem do .env
        const res = await fetch(`${base}/products`, { signal: controller.signal });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);

        const json = await res.json();
        setData(json);
      } catch (e) {
        if (e.name !== "AbortError") setError(e.message || "Erro ao carregar produtos");
      } finally {
        setLoading(false);
      }
    })();

    return () => controller.abort();
  }, []);

  return { data, loading, error };
}

const base = import.meta.env.VITE_API_URL;
const url = `${base}/products`;
console.log("🔎 Fetch URL:", url);

const res = await fetch(url, { signal: controller.signal });
console.log("📡 HTTP status:", res.status);

const json = await res.json();
console.log("📦 Produtos recebidos:", Array.isArray(json) ? json.length : typeof json, json);

setData(json);