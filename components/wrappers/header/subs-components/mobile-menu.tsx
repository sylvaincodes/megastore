import { Logo } from "@/components/ui/logo";
import { X } from "lucide-react";
import Image from "next/image";
import React, { Fragment } from "react";

export const MobileMenu = ({
  openMenu,
  setOpenMenu,
}: {
  openMenu: boolean;
  setOpenMenu: any;
}) => {
  return (
    <Fragment>
      <button
        onClick={() => setOpenMenu(!openMenu)}
        className="flex justify-center items-center bg-bg_icon rounded-lg h-[48px] w-[48px]"
      >
        <Image src="/icons/menu.svg" width="26" height="18" alt="humbergeur" />
      </button>

      <Logo active={false} />

      {/* mobile menu */}
      <div
        className={`shadow-lg fixed p-4  left-0 top-0 min-h-screen max-w-[360px] w-full bg-white transition-all easy-out duration-800 ${
          openMenu ? "translate-x-0" : "-translate-x-full"
        } `}
      >
        <div className="flex flex-col gap-y-16">
          <div>
            <button onClick={() => setOpenMenu(!openMenu)}>
              <X size={48} className="text-color_icon" />
            </button>
          </div>

          <Logo active={true} />

          <div></div>
        </div>
      </div>
    </Fragment>
  );
};
