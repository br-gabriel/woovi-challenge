"use client";
import Image from "next/image";
import qrcode from "../../public/qrcode.png";
import IconButton from "@mui/material/IconButton";
import { IoClose } from "react-icons/io5";
import { IoIosCopy } from "react-icons/io";
import { Box, Snackbar } from "@mui/material";
import { useContext, useState } from "react";
import { InstallmentContext } from "@/contexts/installmentContext";
import { useRouter } from "next/navigation";

export function QrCode() {
  const router = useRouter();
  const { cashPayment, setFirstPaymentDone } = useContext(InstallmentContext);
  const [open, setOpen] = useState(false);

  function handleOpen() {
    setOpen(true);
    setFirstPaymentDone(true);

    if (cashPayment == true) {
      router.push("/pagamento-concluido");
    } else {
      router.push("/pagamento");
    }
  }

  function handleClose() {
    setOpen(false);
  }

  const action = (
    <>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <IoClose />
      </IconButton>
    </>
  );

  return (
    <>
      <Box className="w-full flex flex-col items-center justify-center mt-2">
        <Box className="border-2 border-[#03D69D] p-3 mb-4 rounded-[10px]">
          <Image src={qrcode} alt="qr code" />
        </Box>
        <>
          <button
            onClick={handleOpen}
            className="bg-[#133A6F] hover:bg-[#234575] transition duration-100 ease-in text-white rounded-lg py-1 px-6 font-semibold text-lg flex items-center justify-center gap-2"
          >
            Clique para copiar QR CODE
            <IoIosCopy size={20} />
          </button>
        </>
      </Box>

      <Snackbar
        open={open}
        autoHideDuration={2000}
        onClose={handleClose}
        message="Código copiado!"
        action={action}
      />
    </>
  );
}
