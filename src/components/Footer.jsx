import Image from "next/image";
import LogoFooter from "../../public/LogoFooter.svg";
import { GoShieldCheck } from "react-icons/go";

export function Footer() {
  return (
    <footer className="w-full flex items-center justify-center gap-1 text-text font-semibold text-sm my-8">
      <GoShieldCheck size={19} />
      Pagamento 100% seguro via:
      <Image src={LogoFooter} width={60} alt="logo da woovi" className="mb-1" />
    </footer>
  );
}
