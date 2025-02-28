import Link from "next/link";
import CartButton from "./cart-button";

const Menu = () => {
  return (
    <div className="flex justify-end">
      <nav className="flex gap-3 w-full">

        <Link href={"/signin"} className="flex items-center header-button">
          <span className="font-bold">Hello, Sign In</span>
        </Link>

        <CartButton />
      </nav>
    </div>
  );
};

export default Menu;
