import { useSearchParamsStore } from "../../searchParamsStore/searchParamsStore";
import Item from "../item/item";
import { IItem } from "../../types";

function ItemsList() {
  const { data } = useSearchParamsStore();

  if (data) {
    const { data: itemsList } = data;
    return (
      <div>
        <table className="w-full" data-testid="itemsTable">
          <thead>
            <tr>
              <th>id</th>
              <th>name</th>
              <th>pantone_value</th>
              <th>year</th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(itemsList) ? (
              itemsList?.map((item, index) => <Item key={index} item={item} />)
            ) : (
              <Item item={itemsList as IItem} />
            )}
          </tbody>
        </table>
      </div>
    );
  } else {
    null;
  }
}
export default ItemsList;
