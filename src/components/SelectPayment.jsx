import { FormControl, RadioGroup, Radio, Box } from "@mui/material";
import { Badge } from "./Badge";
import { FaCircleCheck } from "react-icons/fa6";
import { useContext, useState } from "react";
import { ConfirmDialog } from "./ConfirmDialog";
import { InstallmentContext } from "@/contexts/installmentContext";

export function SelectPayment() {
  const {
    setAmount,
    setCashPayment,
    setFirstPayment,
    calculateRemainingAmount,
  } = useContext(InstallmentContext);
  const [installment, setInstallment] = useState(null);
  const [open, setOpen] = useState(false);
  const [dialogText, setDialogText] = useState("");

  function handleOpen(text, value, firstPayment, isCashPayment) {
    setDialogText(text);
    setAmount(value);
    setFirstPayment(firstPayment);
    setCashPayment(isCashPayment);
    calculateRemainingAmount();
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

  function handleChange(e) {
    setInstallment(e.target.value);
  }

  return (
    <FormControl className="w-[90%] max-w-md mt-4">
      <RadioGroup>
        <Badge text={"Pix"} top={"-top-8"} />
        <label
          onClick={() => handleOpen("1x de R$ 30.500,00", 30500, 30500, true)}
          className={`border-2 rounded-lg p-4 cursor-pointer ${
            installment === "1"
              ? "bg-[#F4FBF9] border-[#03D69D] z-10"
              : "border-[#E5E5E5]"
          }`}
        >
          <Box className="flex justify-between items-center">
            <p className="text-2xl w-full text-[#4D4D4D]">
              <span className="font-extrabold">1x</span> R$ 30.500,00
            </p>
            <Radio
              value="1"
              onChange={handleChange}
              checkedIcon={<FaCircleCheck size={26} />}
              sx={{
                "& .MuiSvgIcon-root": {
                  fontSize: 30,
                },
                padding: 0,
                margin: 0,
              }}
            />
          </Box>
          <p className="font-semibold text-[#03D69D] mb-2 -mt-1">
            Ganhe <span className="font-extrabold">3%</span> de Cashback
          </p>
          <Box
            className="w-full bg-[#133A6F] text-white normal-case rounded text-left text-[0.75rem] md:text-base pl-2 py-1 max-h-8"
            style={{
              clipPath: "polygon(100% 0, 97% 50%, 100% 100%, 0 100%, 0 0)",
            }}
          >
            🤑 <span className="font-extrabold">R$ 300,00</span> de volta no seu
            Pix na hora
          </Box>
        </label>

        <Badge text={"Pix parcelado"} top={"top-[127px]"} />
        <label
          onClick={() => handleOpen("2x R$ 15.300,00", 30600, 15300, false)}
          className={`max-h-28 border-2 rounded-t-lg px-4 py-8 mt-8 cursor-pointer ${
            installment === "2"
              ? "bg-[#F4FBF9] border-[#03D69D] z-10"
              : "border-[#E5E5E5]"
          }`}
        >
          <Box className="flex justify-center items-start">
            <Box className="flex flex-col w-full">
              <p className="text-2xl w-full text-[#4D4D4D]">
                <span className="font-extrabold">2x</span> R$ 15.300,00
              </p>
              <p className="text-base capitalize text-[#AFAFAF]">
                Total: R$ 30.600,00
              </p>
            </Box>
            <Radio
              value="2"
              onChange={handleChange}
              checkedIcon={<FaCircleCheck size={26} />}
              sx={{
                "& .MuiSvgIcon-root": {
                  fontSize: 30,
                },
                padding: 0,
                margin: 0,
              }}
            />
          </Box>
        </label>

        <label
          onClick={() => handleOpen("3x R$ 10.196,66", 30620, 10196.66, false)}
          className={`max-h-24 border-2 px-4 py-8 -mt-[2px] cursor-pointer ${
            installment === "3"
              ? "bg-[#F4FBF9] border-[#03D69D] z-10"
              : "border-[#E5E5E5]"
          }`}
        >
          <Box className="flex justify-center items-start -mt-3">
            <Box className="flex flex-col w-full">
              <p className="text-2xl w-full text-[#4D4D4D]">
                <span className="font-extrabold">3x</span> R$ 10.196,66
              </p>
              <p className="text-base capitalize text-[#AFAFAF]">
                Total: R$ 30.620,00
              </p>
            </Box>
            <Radio
              value="3"
              onChange={handleChange}
              checkedIcon={<FaCircleCheck size={26} />}
              sx={{
                "& .MuiSvgIcon-root": {
                  fontSize: 30,
                },
                padding: 0,
                margin: 0,
              }}
            />
          </Box>
        </label>

        <label
          onClick={() => handleOpen("4x R$ 7.725,00", 30900, 7725, false)}
          className={`max-h-[125px] border-2 px-4 py-8 -mt-[2px] cursor-pointer ${
            installment === "4"
              ? "bg-[#F4FBF9] border-[#03D69D] z-10"
              : "border-[#E5E5E5]"
          }`}
        >
          <Box className="flex justify-center items-start -mt-3">
            <Box className="flex flex-col w-full">
              <p className="text-2xl w-full text-[#4D4D4D]">
                <span className="font-extrabold">4x</span> R$ 7.725,00
              </p>
              <p className="text-base capitalize text-[#AFAFAF]">
                Total: R$ 30.900,00
              </p>
            </Box>
            <Radio
              value="4"
              onChange={handleChange}
              checkedIcon={<FaCircleCheck size={26} />}
              sx={{
                "& .MuiSvgIcon-root": {
                  fontSize: 30,
                },
                padding: 0,
                margin: 0,
              }}
            />
          </Box>
          <Box
            className="w-full bg-[#133A6F] text-white normal-case rounded text-left text-[0.75rem] md:text-base pl-2 py-1 max-h-8 mt-1"
            style={{
              clipPath: "polygon(100% 0, 97% 50%, 100% 100%, 0 100%, 0 0)",
            }}
          >
            <span className="font-extrabold">-3% de juros:</span> Melhor opção
            de parcelamento
          </Box>
        </label>

        <label
          onClick={() => handleOpen("5x R$ 6.300,00", 31500, 6300, false)}
          className={`max-h-24 border-2 px-4 py-8 -mt-[1px] cursor-pointer ${
            installment === "5"
              ? "bg-[#F4FBF9] border-[#03D69D] z-10"
              : "border-[#E5E5E5]"
          }`}
        >
          <Box className="flex justify-center items-start -mt-3">
            <Box className="flex flex-col w-full">
              <p className="text-2xl w-full text-[#4D4D4D]">
                <span className="font-extrabold">5x</span> R$ 6.300,00
              </p>
              <p className="text-base capitalize text-[#AFAFAF]">
                Total: R$ 31.500,00
              </p>
            </Box>
            <Radio
              value="5"
              onChange={handleChange}
              checkedIcon={<FaCircleCheck size={26} />}
              sx={{
                "& .MuiSvgIcon-root": {
                  fontSize: 30,
                },
                padding: 0,
                margin: 0,
              }}
            />
          </Box>
        </label>

        <label
          onClick={() => handleOpen("6x R$ 5.283,33", 31699.98, 5283.33, false)}
          className={`max-h-24 border-2 px-4 py-8 -mt-[2px] cursor-pointer ${
            installment === "6"
              ? "bg-[#F4FBF9] border-[#03D69D] z-10"
              : "border-[#E5E5E5]"
          }`}
        >
          <Box className="flex justify-center items-start -mt-3">
            <Box className="flex flex-col w-full">
              <p className="text-2xl w-full text-[#4D4D4D]">
                <span className="font-extrabold">6x</span> R$ 5.283,33
              </p>
              <p className="text-base capitalize text-[#AFAFAF]">
                Total: R$ 31.699,98
              </p>
            </Box>
            <Radio
              value="6"
              onChange={handleChange}
              checkedIcon={<FaCircleCheck size={26} />}
              sx={{
                "& .MuiSvgIcon-root": {
                  fontSize: 30,
                },
                padding: 0,
                margin: 0,
              }}
            />
          </Box>
        </label>

        <label
          onClick={() => handleOpen("7x R$ 4.542,85", 31800, 4542.85, false)}
          className={`max-h-24 border-2 px-4 py-8 -mt-[2px] cursor-pointer rounded-b-lg ${
            installment === "7"
              ? "bg-[#F4FBF9] border-[#03D69D] z-10"
              : "border-[#E5E5E5]"
          }`}
        >
          <Box className="flex justify-center items-start -mt-3">
            <Box className="flex flex-col w-full">
              <p className="text-2xl w-full text-[#4D4D4D]">
                <span className="font-extrabold">7x</span> R$ 4.542,85
              </p>
              <p className="text-base capitalize text-[#AFAFAF]">
                Total: R$ 31.800,00
              </p>
            </Box>
            <Radio
              value="7"
              onChange={handleChange}
              checkedIcon={<FaCircleCheck size={26} />}
              sx={{
                "& .MuiSvgIcon-root": {
                  fontSize: 30,
                },
                padding: 0,
                margin: 0,
              }}
            />
          </Box>
        </label>
      </RadioGroup>

      <ConfirmDialog open={open} handleClose={handleClose} text={dialogText} />
    </FormControl>
  );
}
