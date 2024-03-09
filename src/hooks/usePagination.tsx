import { IResponse } from "../types";

function usePagination(
  page: number | undefined | null,
  setPage: (page: number) => void,
  id: number | undefined | null,
  responseData: IResponse | undefined
) {
  const { total_pages } = responseData || {};
  const pages = (
    <div className="flex justify-center items-center gap-4 p-2">
      {total_pages && NavigationButton(false, page, setPage, total_pages)}
      {total_pages && total_pages > 1 ? (
        <>
          {Array.from(Array(total_pages), (i, e) => {
            return (
              <div
                key={e}
                className={`${
                  e + 1 === page || (page === undefined && e === 0)
                    ? "bg-emerald-800"
                    : ""
                } cursor-pointer rounded-full p-2 px-4`}
                onClick={() => setPage(e + 1)}
              >
                {e + 1}{" "}
              </div>
            );
          })}
        </>
      ) : null}
      {total_pages && NavigationButton(true, page, setPage, total_pages)}
    </div>
  );
  return !id ? pages : null;
}
export default usePagination;

function NavigationButton(
  isPointingForward: boolean,
  page: undefined | null | number,
  setPage: (page: number) => void,
  total_pages: number
): JSX.Element | null {
  const isLastPage = total_pages === page;
  const isFirstPage = page === 1 || page === undefined;
  const buttonContent = (
    <div
      onClick={() => {
        page === undefined || page === null
          ? setPage(2)
          : setPage(isPointingForward ? 1 + page : page - 1);
      }}
      className="cursor-pointer"
    >
      {isPointingForward ? "next" : "prev"}
    </div>
  );
  return isPointingForward
    ? isLastPage
      ? null
      : buttonContent
    : isFirstPage
    ? null
    : buttonContent;
}
