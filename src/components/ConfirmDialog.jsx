import { Slide, Dialog, DialogTitle, DialogActions, Box } from "@mui/material";
import { forwardRef } from "react";
import Link from "next/link";

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export function ConfirmDialog({ open, handleClose, text }) {
  return (
    <Dialog
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
    >
      <Box>
        <DialogTitle>
          Deseja parcelar em <span className="font-bold">{`${text}`}</span>?
        </DialogTitle>
        <DialogActions>
          <button
            onClick={handleClose}
            className="text-[#133A6F] p-2 rounded-lg hover:text-[#234575] transition ease-in"
          >
            cancelar
          </button>
          <button className="bg-[#133A6F] hover:bg-[#234575] text-white p-2 rounded-lg transition ease-in">
            <Link href="/pix">continuar</Link>
          </button>
        </DialogActions>
      </Box>
    </Dialog>
  );
}
