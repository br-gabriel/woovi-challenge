import Image from "next/image";
import Logo from "../../public/Logo.svg";

export function Header() {
  return (
    <header className="w-full flex justify-center items-center py-6 mb-3">
      <Image src={Logo} width={90} alt="logo da woovi" />
    </header>
  );
}
