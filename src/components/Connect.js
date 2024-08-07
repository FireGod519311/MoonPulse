import React from "react";

import { ConnectWallet } from "./ConnectWallet";

export const Connect = function (props) {
  return (
    <React.Fragment>
      <div
        className="font-semibold uppercase lg:text-2xl rounded-md text-xl text-center px-4 mx-auto lg:mx-0 my-auto py-4 text-white items-center bg-[#8d5f45]"
      >
        <ConnectWallet />
      </div>
    </React.Fragment>
  );
};

export default Connect;
