import { IResponse } from "./types";

export const fetchProducts = async (
  id: number | undefined | null,
  page: number | undefined | null
): Promise<IResponse> => {
  let url = `https://reqres.in/api/products`;
  if (id && id !== null) {
    url = url + `?id=${id}`;
  }
  if (page) {
    url = url + `?page=${page}`;
  }

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  return response.json();
};
