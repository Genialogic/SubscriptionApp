import Separator from "@/components/separator";
import SidebarItem from "@/components/sidebarItem";
import ThemeSelector from "@/components/theme/selector";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import clsx from "clsx";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, EllipsisVertical } from "lucide-react";
import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import items from "./routes";

const variantsJustify = {
  open: {
    justifyContent: "inherit",
    transition: { duration: 0.3 },
  },
  closed: {
    justifyContent: "center",
    transition: { duration: 0.3, delay: 0.25 },
  },
};

export default function Dashboard() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const isCurrentPath = (path: string) => location.pathname === path;

  return (
    <div className="flex !max-w-full">
      <div
        className={clsx("h-screen p-2 transition-all duration-300", {
          "w-1/6": isSidebarOpen,
          "w-20": !isSidebarOpen,
        })}
      >
        <ul
          className={`w-full h-full rounded-xl border flex flex-col gap-2 shadow relative gap-8 py-6 ${
            isSidebarOpen ? "px-4" : "px-2"
          }`}
        >
          <div
            className="w-7 h-7 rounded-full border bg-background absolute top-4 right-0 hover:bg-slate-100 translate-x-1/2 cursor-pointer flex justify-center items-center"
            onClick={() => {
              setIsSidebarOpen(!isSidebarOpen);
            }}
          >
            {isSidebarOpen ? (
              <ChevronLeft size={18} />
            ) : (
              <ChevronRight size={18} />
            )}
          </div>

          <div className="flex flex-col gap-2">
            <motion.div
              className={`flex gap-4 items-center `}
              initial={isSidebarOpen ? "open" : "closed"}
              animate={isSidebarOpen ? "open" : "closed"}
              variants={variantsJustify}
            >
              <div className="w-10 h-10 rounded-md bg-slate-800"></div>
              <ThemeSelector isSidebarOpen={isSidebarOpen} />
            </motion.div>

            <Separator />
          </div>

          <div className="flex flex-col gap-2">
            {items.map((item, index) => (
              <Link to={isCurrentPath(item.path) ? "#" : item.path} key={index}>
                <SidebarItem
                  icon={item.icon}
                  label={item.label}
                  isSidebarOpen={isSidebarOpen}
                  active={isCurrentPath(item.path)}
                />
              </Link>
            ))}
          </div>

          {isSidebarOpen ? (
            <div className="absolute left-0 bottom-0 w-full h-20 px-4">
              <Separator />
              <div className="h-full flex items-center justify-between px-2">
                <div className="flex gap-2 items-center">
                  <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <div
                    className={clsx("leading-4", {
                      "": isSidebarOpen,
                      "w-1": !isSidebarOpen,
                    })}
                  >
                    <p>John doe</p>
                    <span className="text-xs">john@doe.com</span>
                  </div>
                </div>
                <div className="cursor-pointer">
                  <EllipsisVertical size={20} />
                </div>
              </div>
            </div>
          ) : (
            <div className="absolute left-0 bottom-0 w-full h-20 px-2">
              <Separator />
              <div className="h-full flex items-center justify-center">
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </div>
            </div>
          )}
        </ul>
      </div>
      <main className="w-full p-2">
        <Outlet />
      </main>
    </div>
  );
}
