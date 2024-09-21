import { useNavigate } from "react-router-dom";
import { Dialog, DialogTitle } from "@mui/material";
import Button from "../formComponents/button/Button";

const ModalSuccess = ({ onClose, open }: any) => {
  const navigate = useNavigate();

  return (
    <Dialog onClose={onClose} open={open}>
      <DialogTitle>Product was added successfully</DialogTitle>
      <div style={{ display: "flex", gap: "20px", padding: "20px" }}>
        <Button label="Create another product" onClick={onClose} />
        <Button label="View Products" onClick={() => navigate("/products")} />
      </div>
    </Dialog>
  );
};
export default ModalSuccess;
