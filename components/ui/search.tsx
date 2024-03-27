import { X } from "lucide-react";
import React, { Fragment } from "react";
import { SearchInput } from "./search-input";

export const SearchItem = ({
  openSearch,
  setOpenSearch,
}: {
  openSearch: boolean;
  setOpenSearch: any;
}) => {
  return (
    <Fragment>
      <SearchInput active={false} />

      {/* mobile menu */}
      <div
        className={`shadow-lg fixed p-4  left-0 top-0 min-h-screen 
        min-w-full bg-white transition-all easy-out duration-800 z-20 ${
          openSearch ? "translate-x-0" : "-translate-x-full"
        } `}
      >
        <div className="flex flex-col gap-y-16 items-center">
          <div>
            <button onClick={() => setOpenSearch(!openSearch)}>
              <X size={48} className="text-color_icon" />
            </button>
          </div>
          <SearchInput active={true} />
        </div>
      </div>
    </Fragment>
  );
};
