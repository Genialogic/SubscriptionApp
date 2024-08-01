import Separator from "@/components/separator";
import SidebarItem from "@/components/sidebarItem";
import ThemeSelector from "@/components/theme/selector";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import clsx from "clsx";
import { motion } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  LogOut,
  Settings,
  User,
} from "lucide-react";
import { useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
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
  const location = useLocation();
  const isCurrentPath = (path: string) =>
    `/${location.pathname.split("/")[1]}` === path;

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
            <div className="absolute left-0 bottom-0 w-full h-20 px-2 flex flex-col gap-2">
              <Separator />
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <div className="h-full flex items-center justify-between px-4 py-2 transition hover:bg-slate-100 cursor-pointer rounded">
                    <div className="flex gap-3 items-center">
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
                        <p className="text-left">John doe</p>
                        <span className="text-xs">john@doe.com</span>
                      </div>
                    </div>
                  </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-[175px]">
                  <DropdownMenuLabel>John Doe</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <User className="mr-2 h-4 w-4" />
                    <span>Meu perfil</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Settings className="mr-2 h-4 w-4" />
                    <span>Configurações</span>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Desconectar</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
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
      <main className="w-full min-h-screen p-2">
        <div className="min-h-full p-4">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
