import Link from "next/link";
import React, { useState } from "react";
import { Navbar } from "./common/navbar";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div>
      <header className="bg-customBlack-200 text-white drop-shadow-md">
        <Navbar />
      </header>
      <main>{children}</main>
    </div>
  );
}
