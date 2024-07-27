"use client";
import { Stack, Box, Radio, useTheme } from "@mui/material";
import { TimelineConnector } from "@mui/lab";
import { FaCircleCheck } from "react-icons/fa6";
import { useContext } from "react";
import { InstallmentContext } from "@/contexts/installmentContext";

export function TimelinePayment() {
  const theme = useTheme();
  const { firstPaymentDone, cashPayment } = useContext(InstallmentContext);

  return (
    <Stack className="mt-2">
      <Box>
        <Stack>
          <Radio
            enable
            checked={firstPaymentDone == true ? true : false}
            checkedIcon={<FaCircleCheck size={17} />}
            sx={{
              "& .MuiSvgIcon-root": {
                color: theme.palette.primary.main,
                fontSize: 19,
              },
              padding: 0,
            }}
          />

          {!cashPayment && (
            <Stack sx={{ alignItems: "center" }}>
              <TimelineConnector
                sx={{
                  height: "1.5rem",
                  mt: "-0.20rem",
                  backgroundColor: theme.palette.primary.light,
                }}
              />
              <Radio
                enable
                checked={false}
                checkedIcon={<FaCircleCheck />}
                sx={{
                  "& .MuiSvgIcon-root": {
                    color: theme.palette.primary.main,
                    fontSize: 19,
                    mt: "-0.125rem",
                    fill: firstPaymentDone
                      ? theme.palette.primary.main
                      : theme.palette.primary.light,
                  },
                  padding: 0,
                }}
              />
            </Stack>
          )}
        </Stack>
      </Box>
    </Stack>
  );
}
