import { motion } from "framer-motion";
import { ChevronUp } from "lucide-react";
import React from "react";

interface SidebarItemProps {
  icon: any;
  label: string;
  active?: boolean;
  notification?: number;
  options?: boolean;
  isSidebarOpen: boolean;
}

const variantsWidth = {
  open: {
    width: "100%",
    display: "block",
    transition: { duration: 0.2 },
  },
  closed: {
    width: 0,
    display: "none",
    transition: { duration: 0.2 },
  },
};

const variantsJustify = {
  open: {
    justifyContent: "space-between",
    transition: { duration: 0.3 },
  },
  closed: {
    justifyContent: "center",
    transition: { duration: 0.3, delay: 0.25 },
  },
};

export default function SidebarItem({
  icon,
  label,
  active,
  notification,
  options,
  isSidebarOpen,
}: SidebarItemProps) {
  return (
    <motion.li
      className={`flex rounded items-center justify-between cursor-pointer transition px-4 py-2 ${
        active ? "bg-primary" : "hover:bg-slate-100 dark:hover:bg-slate-800"
      }`}
      initial={isSidebarOpen ? "open" : "closed"}
      animate={isSidebarOpen ? "open" : "closed"}
      variants={variantsJustify}
    >
      <div className="flex items-center gap-2">
        {React.createElement(icon, {
          size: isSidebarOpen ? 18 : 20,
          className: `dark:text-white ${
            active
              ? "text-background"
              : "text-slate-600 transition-all duration-200"
          }`,
        })}
        <motion.p
          className={`select-none overflow-hidden whitespace-nowrap text-ellipsis dark:text-white ${
            active ? "text-background" : "text-slate-600"
          }`}
          initial={isSidebarOpen ? "open" : "closed"}
          animate={isSidebarOpen ? "open" : "closed"}
          variants={variantsWidth}
        >
          {label}
        </motion.p>
      </div>
      <div>
        {options && <ChevronUp className="text-background" size={20} />}
        {notification && (
          <div className="flex bg-slate-100 w-[26px] h-[20px] rounded items-center justify-center text-xs">
            {notification}
          </div>
        )}
      </div>
    </motion.li>
  );
}
