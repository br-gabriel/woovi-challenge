"use client";
import { createContext, useState } from "react";

export const InstallmentContext = createContext();

export default function InstallmentContextProvider({ children }) {
  const [amount, setAmount] = useState(0);
  const [firstPayment, setFirstPayment] = useState(0);
  const [restPayment, setRestPayment] = useState(0);
  const [cashPayment, setCashPayment] = useState(false);
  const [firstPaymentDone, setFirstPaymentDone] = useState(false);

  function calculateRemainingAmount() {
    const remaining = amount - firstPayment;
    setRestPayment(remaining);
    return restPayment;
  }

  return (
    <InstallmentContext.Provider
      value={{
        amount,
        setAmount,
        firstPayment,
        setFirstPayment,
        restPayment,
        setRestPayment,
        setCashPayment,
        cashPayment,
        firstPaymentDone,
        setFirstPaymentDone,
        calculateRemainingAmount,
      }}
    >
      {children}
    </InstallmentContext.Provider>
  );
}
