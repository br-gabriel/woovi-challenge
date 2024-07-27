"use client";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Title } from "@/components/Title";
import { SelectPayment } from "@/components/SelectPayment";
import { useContext, useEffect } from "react";
import { InstallmentContext } from "@/contexts/installmentContext";

export default function Home() {
  const {
    setAmount,
    setFirstPayment,
    setRestPayment,
    setCashPayment,
    setFirstPaymentDone,
  } = useContext(InstallmentContext);

  useEffect(() => {
    setAmount(0);
    setFirstPayment(0);
    setRestPayment(0);
    setCashPayment(false);
    setFirstPaymentDone(false);
  }, []);

  return (
    <>
      <Header />
      <main className="flex flex-col items-center justify-center">
        <Title name={"Gabriel"} text={"como você quer pagar?"} />
        <SelectPayment />
        <Footer />
      </main>
    </>
  );
}
