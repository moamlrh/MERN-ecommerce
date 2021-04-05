import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@material-ui/core";
import { useDispatch } from "react-redux";

import { removeProductSaga } from "./redux/removeProductRedux";

export const RemoveProductAlert = ({ open, setOpen, id }) => {
  const handleClose = () => setOpen(false);
  const dispatch = useDispatch();
  const handleRemoveClicked = () => {
    dispatch(removeProductSaga(id));
    handleClose();
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle id="alert-dialog-title">
        {"Use Google's location service?"}
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          Let Google help apps determine location. This means sending anonymous
          location data to Google, even when no apps are running.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cancel
        </Button>
        <Button onClick={handleRemoveClicked} color="primary" autoFocus>
          Remove
        </Button>
      </DialogActions>
    </Dialog>
  );
};
