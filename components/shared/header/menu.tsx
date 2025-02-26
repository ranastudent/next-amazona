import {  ShoppingCartIcon } from "lucide-react";
import Link from "next/link";

const Menu = () => {
      return ( 
            <div className="flex justify-end">
              <nav className="flex gap-3 w-full">
                  <Link href={"/signin"} className="flex items-center header-button">
                        
                        <span className="font-bold">Hello, Sign In</span>
                  </Link>
                  <Link href={"/cart"} className="header-button">
                        <ShoppingCartIcon className="h-8 w-8" />
                        <span className="font-bold">Cart</span>
                  </Link>
              </nav>
            </div>
       );
}
 
export default Menu;