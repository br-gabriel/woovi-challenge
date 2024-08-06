"use client";
import { Stack, Radio, useTheme } from "@mui/material";
import { TimelineConnector } from "@mui/lab";
import { FaCircleCheck } from "react-icons/fa6";
import { useContext } from "react";
import { InstallmentContext } from "@/contexts/installmentContext";

export function TimelinePayment() {
  const theme = useTheme();
  const { isFirstPaymentDone, isCashPayment } = useContext(InstallmentContext);

  return (
    <Stack className="mt-2">
      <Radio
        checked={isFirstPaymentDone == true ? true : false}
        checkedIcon={<FaCircleCheck size={17} />}
        sx={{
          "& .MuiSvgIcon-root": {
            color: theme.palette.primary.main,
            fontSize: 19,
          },
          padding: 0,
        }}
      />

      {!isCashPayment && (
        <Stack sx={{ alignItems: "center" }}>
          <TimelineConnector
            sx={{
              height: "1.5rem",
              mt: "-0.20rem",
              backgroundColor: theme.palette.primary.light,
            }}
          />
          <Radio
            checked={false}
            checkedIcon={<FaCircleCheck />}
            sx={{
              "& .MuiSvgIcon-root": {
                color: theme.palette.primary.main,
                fontSize: 19,
                mt: "-0.125rem",
                fill: isFirstPaymentDone
                  ? theme.palette.primary.main
                  : theme.palette.primary.light,
              },
              padding: 0,
            }}
          />
        </Stack>
      )}
    </Stack>
  );
}
