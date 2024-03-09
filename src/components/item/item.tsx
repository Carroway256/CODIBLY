import { Modal } from "@mui/material";
import { IItem } from "../../types";
import { useState } from "react";
import CancelIcon from "@mui/icons-material/Cancel";
function Item({ item }: { item: IItem }) {
  const { color, id, name, pantone_value, year } = item;
  const [isModalOpen, setisModalOpen] = useState(false);
  return (
    <>
      <tr style={{ background: color }} onClick={() => setisModalOpen(true)}>
        <td>{id}</td>
        <td data-testid="itemsName">{name}</td>
        <td>{pantone_value}</td>
        <td>{year}</td>
      </tr>
      <ItemModal
        open={isModalOpen}
        handleClose={() => setisModalOpen(false)}
        item={item}
      />
    </>
  );
}

function ItemModal({
  handleClose,
  open,
  item,
}: {
  handleClose: () => void;
  open: boolean;
  item: IItem;
}) {
  const { color, id, name, pantone_value, year } = item;
  return (
    <Modal open={open} onClose={handleClose}>
      <div className="w-full flex h-full justify-center items-center ">
        <div
          className="flex text-2xl flex-col rounded-lg p-10 relative gap-4"
          style={{ background: color }}
        >
          <div>id : {id}</div>
          <div>name : {name}</div>
          <div>pantone_value : {pantone_value}</div>
          <div>year : {year}</div>

          <CancelIcon onClick={handleClose} className="self-center mt-8" />
        </div>
      </div>
    </Modal>
  );
}

export default Item;
