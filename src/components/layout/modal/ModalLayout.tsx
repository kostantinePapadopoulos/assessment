import { Dialog } from "@mui/material";

interface ModalLayoutProps {
  onClose: () => void;
  open: unknown;
  contents?: React.ReactNode;
}
const ModalLayout = ({ onClose, open, contents }: ModalLayoutProps) => {
  return (
    <Dialog onClose={onClose} open={open ? true : false}>
      {contents && <div style={{ padding: "20px" }}>{contents}</div>}
    </Dialog>
  );
};
export default ModalLayout;
