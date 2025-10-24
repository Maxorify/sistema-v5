
import React, { useEffect, useState } from "react";
import { ChildItem } from "../Sidebaritems";
import NavItems from "../NavItems";
import { useLocation } from "react-router";
import { CustomCollapse } from "../CustomCollapse";

interface NavCollapseProps {
  item: ChildItem;
  isCollapsed?: boolean;
  onExpand?: () => void;
}



const NavCollapse: React.FC<NavCollapseProps> = ({ item, isCollapsed = false, onExpand }) => {
  const location = useLocation();
  const pathname = location.pathname;

  // Determine if any child matches the current path
  const activeDD = item.children.find((t: { url: string }) => t.url === pathname);


  // Manage open/close state for the collapse
  const [isOpen, setIsOpen] = useState<boolean>(!!activeDD);


  // Close collapses when the sidebar is collapsed
  useEffect(() => {
    if (isCollapsed) {
      setIsOpen(false);
    }
  }, [isCollapsed]);


  // Toggle the collapse
  const handleToggle = () => {
    if (isCollapsed) {
      onExpand?.();
      setIsOpen(true);
      return;
    }

    setIsOpen((prev) => !prev);
  };

  return (
    <CustomCollapse
      label={ `${item.name}`}
      open={isOpen}
      onClick={handleToggle}
      icon={item.icon}
      isCollapsed={isCollapsed}
      className={
        Boolean(activeDD)
          ? "!text-white bg-primary rounded-xl hover:bg-primary hover:text-white shadow-btnshdw"
          : "rounded-xl dark:text-white/80 hover:text-primary"
      }
    >
      {/* Render child items */}
      {item.children && (
        <div className="sidebar-dropdown">
          {item.children.map((child: any, index: number) => (
            <React.Fragment key={child.id ?? index}>
              {child.children ? (
                <NavCollapse item={child} isCollapsed={isCollapsed} onExpand={onExpand} /> // Recursive call for nested collapse
              ) : (
                <NavItems item={child} isCollapsed={isCollapsed} onExpand={onExpand} />
              )}
            </React.Fragment>
          ))}
        </div>
      )}
    </CustomCollapse>
  );
};

export default NavCollapse;
