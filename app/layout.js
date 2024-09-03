import NavBar from "@/components/navbar/page";
import React from "react";
import "@/style/globals.css";
const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body className="w-full h-screen box-border">
        <NavBar />
        <div>{children}</div>
      </body>
    </html>
  );
};

export default RootLayout;
