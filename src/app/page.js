"use client";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Title } from "@/components/Title";
import { SelectPayment } from "@/components/SelectPayment";

export default function Home() {
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
