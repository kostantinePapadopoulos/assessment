import ButtonSmall from "../../formComponents/buttonSmall/ButtonSmall";
import FeedbackIcon from "@mui/icons-material/Feedback";
import { DialogTitle } from "@mui/material";
interface ModalFailContentProps {
  onClose: () => void;
}

const ModalFailContent = ({ onClose }: ModalFailContentProps) => {
  return (
    <>
      <DialogTitle>
        <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
          <FeedbackIcon style={{ color: "red" }} />
          <div>There ia a product with the same ISBN or Title!</div>
        </div>
      </DialogTitle>
      <div style={{ display: "grid", padding: "10px" }}>
        <ButtonSmall label="OK" onClick={onClose} />
      </div>
    </>
  );
};
export default ModalFailContent;
