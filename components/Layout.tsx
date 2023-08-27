import React from "react";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="h-screen bg-black">
      <div className="container h-full max-w-6xl mx-auto xl:px-30">
        <div className="grid h-full grid-cols-4">
          <div
            className="
            col-span-3 
            lg:col-span-2 
            border-x-[1px] 
            border-neutral-800
        "
          >
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
