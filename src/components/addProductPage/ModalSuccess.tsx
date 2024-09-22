import { Dialog, DialogTitle } from "@mui/material";
import Button from "../formComponents/button/Button";

const ModalSuccess = ({ onClose, open }: any) => {
  return (
    <Dialog onClose={onClose} open={open}>
      <DialogTitle sx={{ fontSize: "1.5rem", fontWeight: "600" }}>
        <>
          <div>Product was added successfully</div>
        </>
      </DialogTitle>
      <div style={{ display: "flex", gap: "20px", padding: "20px" }}>
        <Button label="Create another product" onClick={onClose} />
        {/* <Button label="View Products" onClick={() => navigate("/products")} /> */}
      </div>
    </Dialog>
  );
};
export default ModalSuccess;
