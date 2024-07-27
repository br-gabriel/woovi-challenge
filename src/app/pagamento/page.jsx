import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PaymentDetails } from "@/components/PaymentDetails";
import { PaymentForm } from "@/components/PaymentForm";
import { Title } from "@/components/Title";
import { Box } from "@mui/material";

export default function Pagamento() {
    return (
        <Box className="flex flex-col items-center justify-center px-2">
            <Header />
            <Title name={"Gabriel"} text={"pague o restante no cartão"} />
            <PaymentForm />
            <PaymentDetails />
            <Footer />
        </Box>
    )
}