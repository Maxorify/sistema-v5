import React from "react";
import { ChildItem } from "../Sidebaritems";
import { Sidebar } from "flowbite-react";
import { Icon } from "@iconify/react";
import { Link, useLocation } from "react-router";



interface NavItemsProps {
  item: ChildItem;
  isCollapsed?: boolean;
}
const NavItems: React.FC<NavItemsProps> = ({ item, isCollapsed = false }) => {
  const location = useLocation();
  const pathname = location.pathname;
  const isExternalLink = typeof item.url === "string" && item.url.startsWith("http");

  return (
    <>
      <Sidebar.Item
        to={item.url}
        target={isExternalLink ? "_blank" : "_self"}
        as={Link}
        title={isCollapsed ? item.name : undefined}
        className={`${item.url == pathname
            ? "text-white bg-primary rounded-xl  hover:text-white hover:bg-primary dark:hover:text-white shadow-btnshdw active"
            : "text-link bg-transparent group/link "
          } ${isCollapsed ? "!px-0 !py-3 flex items-center justify-center" : ""}`}
      >
        <div className={`flex items-center ${isCollapsed ? "justify-center" : "justify-between"}`}>
          <span
            className={`flex items-center ${isCollapsed ? "justify-center gap-0 w-full" : "gap-3"}`}
          >
            {item.icon ? (
              <Icon
                icon={item.icon}
                className={`${item.color} ${isCollapsed ? "mx-auto" : ""}`}
                height={18}
              />
            ) : (
              <span
                className={`${item.url == pathname
                    ? "dark:bg-white rounded-full mx-1.5 group-hover/link:bg-primary !bg-primary h-[6px] w-[6px]"
                    : "h-[6px] w-[6px] bg-black/40 dark:bg-white rounded-full mx-1.5 group-hover/link:bg-primary"
                  } ${isCollapsed ? "!mx-0" : ""}`}
              ></span>
            )}
            {!isCollapsed && (
              <span
                className={`max-w-24 truncate`}
              >
                {item.name}
              </span>
            )}
          </span>
        </div>
      </Sidebar.Item>
    </>
  );
};

export default NavItems;
