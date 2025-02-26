"use client";
import { ChevronUp } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { APP_NAME } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-black  text-white underline-link">
      <div className="w-full">
        <Button
          variant="ghost"
          className="bg-gray-800 w-full  rounded-none "
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <ChevronUp className="mr-2 h-4 w-4" />
          {"Footer.Back to top"}
        </Button>
      </div>
      <div className="p-4">
        <div className="flex justify-center gap-3  text-sm">
          <Link href="/page/condition-of-use">Condition of use</Link>
          <Link href="/page/privacy-policy">Privacy policy</Link>
          <Link href="/page/Help">Help</Link>
        </div>
        <div className="flex justify-between text-sm">
          <p> © 2000-2004, {APP_NAME}, Inc. or its affiliate</p>
        </div>
        <div className="mt-8 flex justify-center text-sm text-gray-400">
          123, Main street, Anytown, CA, Zip 12345 | +1 (123) 456-
        </div>
      </div>
    </footer>
  );
}
