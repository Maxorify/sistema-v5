import { Sidebar } from "flowbite-react";
import { Icon } from "@iconify/react";
import { getNonProSidebarContent } from "./Sidebaritems";
import NavItems from "./NavItems";
// @ts-ignore
import SimpleBar from "simplebar-react";
import React, { useMemo } from "react";
import FullLogo from "../shared/logo/FullLogo";
import NavCollapse from "./NavCollapse";
import Logo from "../shared/logo/Logo";
import "simplebar-react/dist/simplebar.min.css";

interface SidebarLayoutProps {
  isCollapsed: boolean;
  onToggle: () => void;
  onExpand: () => void;
}

const SidebarLayout: React.FC<SidebarLayoutProps> = ({ isCollapsed, onToggle, onExpand }) => {
  const filteredSidebarContent = useMemo(() => getNonProSidebarContent(), []);

  return (
    <>
      <div className="xl:block hidden">
        <Sidebar
          className={`fixed menu-sidebar bg-white dark:bg-darkgray rtl:pe-4 rtl:ps-0 top-0 h-screen flex flex-col shadow-md transition-all duration-300`}
          aria-label="Sidebar with multi-level dropdown example"
        >
          <div className="flex flex-col h-full">
            <div className="px-5 pt-6 pb-4">
              <div
                className={`relative flex items-center ${isCollapsed ? "justify-center" : "justify-between"} ${isCollapsed ? "gap-0" : "gap-3"} sidebarlogo`}
              >
                <div className={`transition-all duration-200 ${isCollapsed ? "flex-1 flex justify-center" : ""}`}>
                  {isCollapsed ? <Logo /> : <FullLogo />}
                </div>
                {!isCollapsed && (
                  <button
                    type="button"
                    onClick={onToggle}
                    aria-label="Collapse sidebar"
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-link transition-colors duration-200 hover:border-primary hover:text-primary dark:border-darkborder dark:text-white/70 dark:hover:border-primary"
                  >
                    <Icon icon="tabler:chevron-left" height={20} />
                  </button>
                )}
              </div>
            </div>

            <SimpleBar className={`flex-1 ${isCollapsed ? "px-2" : "px-5"}`}>
              <Sidebar.Items className={`mt-2 ${isCollapsed ? "px-0" : ""}`}>
                <Sidebar.ItemGroup className="sidebar-nav hide-menu">
                  {filteredSidebarContent?.map((item, index) => (
                    <div
                      className={`caption ${index === 0 ? "pt-0 mt-0 border-t-0" : ""} ${isCollapsed ? "border-t-0" : ""}`}
                      key={item.heading}
                    >
                      <React.Fragment>
                        {!isCollapsed && (
                          <h5 className="text-link dark:text-white/70 caption font-semibold leading-6 tracking-widest text-xs pb-2 uppercase">
                            {item.heading}
                          </h5>
                        )}
                        {item.children?.map((child, index) => (
                          <React.Fragment key={child.id ?? index}>
                            {child.children ? (
                              <div className="collpase-items">
                                <NavCollapse item={child} isCollapsed={isCollapsed} onExpand={onExpand} />
                              </div>
                            ) : (
                              <NavItems item={child} isCollapsed={isCollapsed} onExpand={onExpand} />
                            )}
                          </React.Fragment>
                        ))}
                      </React.Fragment>
                    </div>
                  ))}
                </Sidebar.ItemGroup>
              </Sidebar.Items>
            </SimpleBar>
          </div>
        </Sidebar>
      </div>
    </>
  );
};

export default SidebarLayout;
