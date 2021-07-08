import { ref, Ref } from "vue";

export type ApiRequest = () => Promise<void>;

export interface UsableAPI<T> {
  response: Ref<T | undefined>;
  error: Ref<T | undefined>;
  request: ApiRequest;
}

export default function useApi<T>(
  url: RequestInfo,
  options?: RequestInit
): UsableAPI<T> {
  const response: Ref<T | undefined> = ref();
  const error: Ref<T | undefined> = ref();
  const request: ApiRequest = async () => {
    try {
      const res = await fetch(url, options);
      const data = await res.json();
      response.value = data;
    } catch (e) {
      error.value = e;
    }
  };

  return { response, request, error };
}
