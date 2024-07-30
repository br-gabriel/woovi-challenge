"use client";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Box,
} from "@mui/material";
import { IoIosArrowDown } from "react-icons/io";
import { TimelinePayment } from "./TimelinePayment";
import { useContext, useEffect, useState } from "react";
import { InstallmentContext } from "@/contexts/installmentContext";
import { currencyFormatter } from "@/utils/currencyFormatter";
import { getCurrentDateAndTime } from "@/utils/dateUtils";

export function PaymentDetails() {
  const { amount, firstPayment, restPayment, cashPayment } = useContext(InstallmentContext);
  const [currentDate, setCurrentDate] = useState('');
  const [futureTime, setFutureTime] = useState('');

  useEffect(() => {
    const { formattedDate, formattedTime } = getCurrentDateAndTime();
    setCurrentDate(formattedDate);
    setFutureTime(formattedTime);
  }, [])

  return (
    <section className="flex flex-col items-center justify-center w-full max-w-md mt-5">
      <span className="font-semibold text-base text-[#B2B2B2]">
        Prazo de pagamento:
      </span>
      <span className="font-extrabold text-base text-[#4D4D4D]">
        {currentDate} - {futureTime}
      </span>

      <Box className="border-b-2 w-full py-3 flex">
        <TimelinePayment />

        <Box className="w-full ml-2 ">
          <Box className="flex justify-between py-1 ">
            <span className="font-semibold text-lg text-[#4D4D4D]">
              {cashPayment ? "Valor à vista" : "1ª entrada no Pix"}
            </span>
            <span className="font-extrabold text-lg text-[#4D4D4D]">
              {currencyFormatter(firstPayment)}
            </span>
          </Box>

          {!cashPayment && (
            <Box className="flex justify-between py-1">
              <span className="font-semibold text-lg text-[#4D4D4D]">
                2ª no cartão
              </span>
              <span className="font-extrabold text-lg text-[#4D4D4D]">
                {currencyFormatter(restPayment)}
              </span>
            </Box>
          )}
        </Box>
      </Box>
      <Box className="w-full flex justify-between items-center border-b-2 py-3">
        <span className="font-semibold text-sm text-[#4D4D4D]">CET: 0,5%</span>
        <span className="font-semibold text-lg text-[#4D4D4D]">
          Total: {currencyFormatter(amount)}
        </span>
      </Box>
      <Box className="border-b-2 w-full py-0 mb-5">
        <Accordion className="bg-transparent shadow-none">
          <AccordionSummary
            expandIcon={<IoIosArrowDown />}
            aria-controls="panel1-content"
            id="panel1-header"
            className="font-extrabold text-[#4D4D4D] text-base pl-0 pr-2"
          >
            Como funciona?
          </AccordionSummary>
          <AccordionDetails>
            <p className="font-bold -mt-4">
              Para fazer o pagamento por Pix você precisa:
            </p>
            <ul className="text-[#4D4D4D] text-base list-disc ml-4">
              <li>Copiar o link do QR Code.</li>
              <li>Abrir o aplicativo do seu banco e ir até a seção do Pix.</li>
              <li>Cole o link na opção apropriada.</li>
              <li>Confirme os detalhes e finalize o pagamento.</li>
            </ul>
          </AccordionDetails>
        </Accordion>
      </Box>

      <span className="font-semibold text-sm text-[#B2B2B2]">
        Identificador:
      </span>
      <span className="font-extrabold text-sm text-[#4D4D4D]">
        2c1b951f356c4680b13ba1c9fc889c47
      </span>
    </section>
  );
}
