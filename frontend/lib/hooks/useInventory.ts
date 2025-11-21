import useSWR from "swr";
import api from "@/lib/apiClient";

export function useInventory(userId: number) {
  const fetcher = (url: string) => api.get(url).then(r => r.data);
  const { data, error, mutate } = useSWR(`/inventory?user_id=${userId}`, fetcher);

  return { inventory: data, loading: !error && !data, error, mutate };
}
