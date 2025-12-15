import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";

const LandingPageHeader = () => {
  return (
    <header className="fixed top-0 right-0 left-0 z-10 flex h-[50px] items-center justify-between border-b border-(--brand-color) bg-(--brand-color-extra-light) px-3">
      <div>
        <span className="font-bold text-(--brand-color)">zAcademy</span>
      </div>

      <div className="flex gap-3">
        <Link href={"/signin"}>
          <Button variant={"outline"}>Sign In</Button>
        </Link>

        <Link href={"/signup"}>
          <Button>Sign Up</Button>
        </Link>
      </div>
    </header>
  );
};

export default LandingPageHeader;
