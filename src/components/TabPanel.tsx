import React from "react";

interface TabPanelProps {
  children: React.ReactNode;
  className?: string;
}

export default function TabPanel({ children, className = "" }: TabPanelProps) {
  return (
    <section
           className={` w-full mx-auto bg-white lg:rounded-3xl shadow-2xl px-12 py-12 flex flex-col items-center relative z-10 mt-6 ${className}`}

      style={{ minHeight: "300px" }}
    >
      {children}
    </section>
  );
}
