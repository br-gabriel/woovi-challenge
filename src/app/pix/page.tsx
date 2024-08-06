"use client";
import { Header } from "@/components/Header";
import { Title } from "@/components/Title";
import { QrCode } from "@/components/QrCode";
import { Footer } from "@/components/Footer";
import { PaymentDetails } from "@/components/PaymentDetails";
import { Box } from "@mui/material";
import { useContext } from "react";
import { InstallmentContext } from "@/contexts/installmentContext";
import { currencyFormatter } from "@/utils/currencyFormatter";

export default function Pix() {
  const { firstPayment, isCashPayment } = useContext(InstallmentContext);

  return (
    <Box className="flex flex-col items-center justify-center px-2">
      <Header />
      <Title
        name={"Gabriel"}
        text={`pague ${
          isCashPayment ? "o valor" : "a entrada"
        } de ${currencyFormatter(firstPayment)} pelo Pix`}
      />
      <QrCode />
      <PaymentDetails />
      <Footer />
    </Box>
  );
}
