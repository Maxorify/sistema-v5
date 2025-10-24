import { FC, useState } from 'react';
import { Outlet } from "react-router";
import ScrollToTop from 'src/components/shared/ScrollToTop';
import Sidebar from './sidebar/Sidebar';
import Header from './header/Header';



const FullLayout: FC = () => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  return (
    <>
      <div
        className="flex w-full min-h-screen dark:bg-darkgray"
        data-sidebar-collapsed={isSidebarCollapsed}
      >
        <div className="page-wrapper flex w-full  ">
          {/* Header/sidebar */}
          <Sidebar
            isCollapsed={isSidebarCollapsed}
            onToggle={() => setIsSidebarCollapsed((prev) => !prev)}
            onExpand={() => setIsSidebarCollapsed(false)}
          />
          <div className="page-wrapper-sub flex flex-col w-full dark:bg-darkgray">
            {/* Top Header  */}
            <Header />

            <div
              className={`bg-lightgray dark:bg-dark  h-full rounded-bb`}
            >
              {/* Body Content  */}
              <div
                className={`w-full`}
              >
                <ScrollToTop>
                  <div className="container py-30">
                    <Outlet />
                  </div>
                </ScrollToTop>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FullLayout;
