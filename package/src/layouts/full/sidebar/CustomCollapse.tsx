import { twMerge } from "tailwind-merge";
import { HiOutlineChevronDown } from "react-icons/hi";
import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";

const CustomCollapse: React.FC<{
    label: string;
    open: boolean;
    children: any;
    onClick: () => void;
    icon: string;
    className?: string;
    isCollapsed?: boolean;
  }> = ({ label, open, onClick, icon, children, className, isCollapsed = false }) => {
    return (
      <div className={twMerge("transition-all duration-300")}>
        <div
          className={twMerge(
            "flex cursor-pointer mb-1 items-center justify-between rounded-lg gap-3 text-[15px] leading-[normal] font-normal text-link nav-cover hover:text-primary dark:text-white dark:hover:text-primary",
            isCollapsed ? "px-0 py-3 justify-center" : "px-4 py-[11px]",
            className
          )}
          onClick={onClick}
          title={isCollapsed ? label : undefined}
        >
          <div className={`flex items-center ${isCollapsed ? "justify-center w-full" : "gap-3"}`}>
            <Icon icon={icon} height={18} />
            {!isCollapsed && (
              <span className="truncate max-w-28 nav-label">{label}</span>
            )}
          </div>
          {!isCollapsed && (
            <div className="flex items-center gap-0.5">
              <HiOutlineChevronDown
                className={twMerge("transform transition-transform", open ? "rotate-180" : "rotate-0")}
              />
            </div>
          )}
        </div>
        {!isCollapsed && (
          <div
            className={twMerge(
              "overflow-hidden transition-all duration-300",
              open ? "max-h-screen" : "max-h-0"
            )}
          >
            {children}
          </div>
        )}
      </div>
    );
  };

export { CustomCollapse };
