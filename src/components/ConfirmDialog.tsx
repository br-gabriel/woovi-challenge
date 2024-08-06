import { Slide, Dialog, DialogTitle, DialogActions, Box } from "@mui/material";
import { forwardRef, ReactElement } from "react";
import Link from "next/link";
import { TransitionProps } from "@mui/material/transitions";

interface ConfirmDialogProps {
  open: boolean;
  handleClose: () => void;
  text: string;
}

const Transition = forwardRef(function Transition(
  props: TransitionProps & { children: React.ReactElement<any, any> },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export function ConfirmDialog({ open, handleClose, text }: ConfirmDialogProps) {
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
            className="text-blue p-2 rounded-lg hover:text-blue-light transition ease-in"
          >
            cancelar
          </button>
          <Link href="/pix">
            <button className="bg-blue hover:bg-blue-light text-white p-2 rounded-lg transition ease-in">
              continuar
            </button>
          </Link>
        </DialogActions>
      </Box>
    </Dialog>
  );
}
