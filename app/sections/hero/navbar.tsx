import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const Navbar = () => {
  return (
    <nav
      className={` bg-black flex flex-row items-center justify-center text-muted py-4 ${inter.className}`}
    >
      <ul className="flex items-center justify-center gap-8 text-xs leading-3 font-light">
        <li>Home</li>
        <li>Features</li>
        <li>Pricing</li>
        <li>Faqs</li>
      </ul>
    </nav>
  );
};

export default Navbar;
