import { useNavigate } from "react-router-dom";
import { DialogTitle } from "@mui/material";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import ButtonSmall from "../../formComponents/buttonSmall/ButtonSmall";

interface ModalSuccessContentProps {
  onClose: () => void;
}

const ModalSuccessContent = ({ onClose }: ModalSuccessContentProps) => {
  const navigate = useNavigate();

  return (
    <>
      <DialogTitle>
        <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
          <DoneAllIcon style={{ color: "green" }} />
          <div>Product was created successfully!</div>
        </div>
      </DialogTitle>
      <div style={{ display: "grid", gap: "5px", padding: "10px" }}>
        <ButtonSmall label="Create another product" onClick={onClose} />
        <ButtonSmall
          label="View Products"
          onClick={() => navigate("/products")}
        />
      </div>
    </>
  );
};
export default ModalSuccessContent;
