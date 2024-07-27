"use client";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Title } from "@/components/Title";
import { SelectPayment } from "@/components/SelectPayment";
import { useContext, useEffect } from "react";
import { InstallmentContext } from "@/contexts/installmentContext";
import { Box } from "@mui/material";

export default function Home() {
  const {
    setAmount,
    setFirstPayment,
    setRestPayment,
    setCashPayment,
    setFirstPaymentDone,
  } = useContext(InstallmentContext);

  useEffect(() => {
    setAmount(15300);
    setFirstPayment(15300);
    setRestPayment(15300);
    setCashPayment(false);
    setFirstPaymentDone(false);
  }, []);

  return (
    <Box className="px-2">
      <Header />
      <main className="flex flex-col items-center justify-center">
        <Title name={"Gabriel"} text={"como você quer pagar?"} />
        <SelectPayment />
        <Footer />
      </main>
    </Box>
  );
}
