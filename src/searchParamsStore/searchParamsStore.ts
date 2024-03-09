import { create } from "zustand";
import { IResponse } from "../types";

interface SearchParamsStore {
  page: number | undefined | null;
  changePage: (page: number | undefined) => void;
  data: IResponse | undefined;
  setData: (data: IResponse) => void;
  id: number | undefined | null;
  changeId: (id: number | undefined) => void;
}

export const useSearchParamsStore = create<SearchParamsStore>()((set) => ({
  page: undefined,
  changePage: (page) => set(() => ({ page })),
  id: undefined,
  changeId: (id) => set(() => ({ id })),
  data: undefined,
  setData: (data) => set(() => ({ data })),
}));
