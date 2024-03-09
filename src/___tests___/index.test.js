import { render, screen } from "@testing-library/react";
import ItemsList from "../components/itemsList/ItemsList.tsx";
import Item from "../components/item/item.tsx";

test("should render items table", () => {
  render(<ItemsList />);
  const itemsTable = screen.queryByTestId("itemsTable");
  expect(itemsTable).toBeInTheDoc;
});
test("should properly render items name", () => {
  const sampleItem = {
    id: 3,
    name: "true red",
    year: 2002,
    color: "#BF1932",
    pantone_value: "19-1664",
  };
  render(<Item item={sampleItem} />);
  const itemsTable = screen.queryByTestId("itemsName");
  expect(itemsTable).toBeInTheDoc;
  expect(itemsTable).textContent?.toBe("true red");
});
