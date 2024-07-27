import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { FaCircleCheck } from "react-icons/fa6";
import { Box } from "@mui/material";

export default function PagamentoConcluido() {
  return (
    <Box className="flex flex-col items-center justify-between h-screen">
      <Header />
      <Box className="flex flex-col items-center gap-9">
        <FaCircleCheck size={170} color="#03D69D" />
        <h1 className="font-extrabold text-3xl text-[#4D4D4D]">
          Pagamento realizado com sucesso!
        </h1>
      </Box>
      <Footer />
    </Box>
  );
}
