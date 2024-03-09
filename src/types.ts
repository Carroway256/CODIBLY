export interface IResponse {
  data: IItem[] | IItem;
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  support: {
    text: string;
    url: string;
  };
}
export interface IItem {
  color: string;
  id: number;
  name: string;
  pantone_value: string;
  year: number;
}
