import { useNavigate } from "react-router-dom";
import { Dialog, DialogTitle } from "@mui/material";
import Button from "../formComponents/button/Button";

const ModalFail = ({ onClose, open }: any) => {
  const navigate = useNavigate();

  return (
    <Dialog onClose={onClose} open={open}>
      <DialogTitle>There is a product with the same ISBN or Title </DialogTitle>
      <div style={{ display: "flex", gap: "20px", padding: "20px" }}>
        <Button label="OK" onClick={onClose} />
      </div>
    </Dialog>
  );
};
export default ModalFail;
