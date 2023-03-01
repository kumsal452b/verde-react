import React from "react";

import { GiHamburgerMenu } from "react-icons/gi";
import { AiFillBell } from "react-icons/ai";
import { GrAppsRounded } from "react-icons/gr";
import { useSelector } from "react-redux";
function Header() {
  const total = useSelector((store: any) => store.cart.totalQuantity);
  return (
    <div className="w-full h-11 drop-shadow-md bg-slate-300 flex justify-between flex-row items-center ">
      <div className="m-2">
        <GiHamburgerMenu size={25} color={"blue"} />
      </div>
      <div className="ml-15 flex justify-between flex-row items-center">
        <div>
          <div>
            <span className="text-cyan-500 text-sm absolute mb-1 mr-2">
              {total}
            </span>
          </div>
          <div className="mt-4 mr-5">
            <span className="font-medium">Posts</span>
          </div>
        </div>
        <div className="mr-5">
          <AiFillBell size={20} />
        </div>
        <div className="mr-5">
          <GrAppsRounded size={20} />
        </div>
        <div className="rounded-full mr-5">
          <img
            src={require("../images/john-doe.jpg")}
            alt=""
            className="w-10 h-10 rounded-full"
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
