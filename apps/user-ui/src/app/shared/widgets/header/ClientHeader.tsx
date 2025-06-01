"use client";

import dynamic from "next/dynamic";

// Dynamically import the actual Header component with SSR disabled
const Header = dynamic(() => import("./header"), {
  ssr: false,
});

export default Header;
