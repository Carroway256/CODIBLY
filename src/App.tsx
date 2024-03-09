import { useQueryParam, NumberParam } from "use-query-params";
import "./App.css";
import { useQuery } from "@tanstack/react-query";
import { fetchProducts } from "./fetchProducts";
import ItemsList from "./components/itemsList/ItemsList";
import { useSearchParamsStore } from "./searchParamsStore/searchParamsStore";
import usePagination from "./hooks/usePagination";
import { Audio } from "react-loader-spinner";
import { useDebounce } from "./hooks/useDebounce";
function App() {
  const [page, setPage] = useQueryParam("page", NumberParam);
  const [id, setId] = useQueryParam("id", NumberParam);
  const {
    changeId,
    setData,
    changePage,
    data: responseData,
  } = useSearchParamsStore();
  const debouncedId = useDebounce(id);
  const { isPending, error, isSuccess } = useQuery({
    queryKey: ["id", { debouncedId, page }],
    queryFn: async () => {
      const data = await fetchProducts(id, page);
      setData(data);
      return data;
    },
  });
  const setNewId = (id: number | undefined) => {
    changeId(id);
    setId(id);
  };

  const setNewPage = (page: number | undefined) => {
    setPage(page);
    changePage(page);
  };

  const pages = usePagination(page, setNewPage, id, responseData);
  return (
    <>
      <div>
        <div className="flex items-center gap-4">
          <span>Filter items by id</span>
          <input
            type="number"
            id="id"
            name="id"
            min={1}
            value={Number(id)}
            onChange={(e) => {
              const value = e.target.value;

              setNewPage(undefined);
              if (value === null || value === "0") setNewId(undefined);

              value === "" ? setNewId(1) : setNewId(value as unknown as number);
            }}
          ></input>

          <button
            onClick={(e) => {
              e.preventDefault();
              setNewId(undefined);
            }}
          >
            clear filter
          </button>
        </div>
        {isPending ? (
          <div className="w-full h-full justify-center items-center flex">
            <Audio
              height="80"
              width="80"
              color="green"
              ariaLabel="oval-loading"
            />
          </div>
        ) : null}

        {isSuccess ? <ItemsList /> : null}
        {error ? <div>{error.message}</div> : null}
        {pages}
      </div>
    </>
  );
}

export default App;
