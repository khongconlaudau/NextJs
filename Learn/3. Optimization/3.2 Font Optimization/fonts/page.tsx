import React from "react";
import { Roboto } from "next/font/google";

const roboto = Roboto({ subsets: ["latin"], weight: "500" });
const Fonts: React.FC = () => {
  return <div>
    <h1 className="text-center">Google Fonts</h1>
    <h2 className={`capitalize ${roboto.className} `}>Hello this is Roboto font</h2>
  </div>;
};

export default Fonts;
