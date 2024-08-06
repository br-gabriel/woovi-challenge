"use client";
import { createContext, ReactNode, useState } from "react";

export interface InstallmentContextProps {
  amount: number;
  setAmount: (value: number) => void;
  firstPayment: number;
  setFirstPayment: (value: number) => void;
  restPayment: number;
  setRestPayment: (value: number) => void;
  isCashPayment: boolean;
  setIsCashPayment: (value: boolean) => void;
  isFirstPaymentDone: boolean;
  setIsFirstPaymentDone: (value: boolean) => void;
  calculateRemainingAmount: () => number;
}

interface InstallmentContextProviderProps {
  children: ReactNode;
}

const defaultContext: InstallmentContextProps = {
  amount: 0,
  setAmount: () => {},
  firstPayment: 0,
  setFirstPayment: () => {},
  restPayment: 0,
  setRestPayment: () => {},
  isCashPayment: false,
  setIsCashPayment: () => {},
  isFirstPaymentDone: false,
  setIsFirstPaymentDone: () => {},
  calculateRemainingAmount: () => 0,
};

export const InstallmentContext =
  createContext<InstallmentContextProps>(defaultContext);

export default function InstallmentContextProvider({
  children,
}: InstallmentContextProviderProps) {
  const [amount, setAmount] = useState<number>(15300);
  const [firstPayment, setFirstPayment] = useState<number>(15300);
  const [restPayment, setRestPayment] = useState<number>(15300);
  const [isCashPayment, setIsCashPayment] = useState<boolean>(false);
  const [isFirstPaymentDone, setIsFirstPaymentDone] = useState<boolean>(false);

  function calculateRemainingAmount(): number {
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
        isCashPayment,
        setIsCashPayment,
        isFirstPaymentDone,
        setIsFirstPaymentDone,
        calculateRemainingAmount,
      }}
    >
      {children}
    </InstallmentContext.Provider>
  );
}
