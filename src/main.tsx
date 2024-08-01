import { Toaster } from "@/components/ui/toaster";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import ReactDOM from "react-dom/client";
import {
  Outlet,
  RouterProvider,
  createBrowserRouter,
  useLocation,
} from "react-router-dom";
import "./index.css";
import Dashboard from "./routes/dashboard";
import Home from "./routes/home";
import { ThemeProvider } from "./components/theme/theme-provider";
import Services from "./routes/services";
import Clients from "./routes/clients";
import ClientsDetail from "./routes/clients/detail";
import Login from "./routes/auth/login";
import Register from "./routes/auth/register";

interface PageTransitionProps {
  children: React.ReactNode;
}

const PageTransition = ({ children }: PageTransitionProps) => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

const router = createBrowserRouter([
  {
    // ROTAS COM DASHBOARD
    path: "/",
    element: (
      <>
        {/* <RequireAuth /> */}
        <Dashboard />
      </>
    ),
    children: [
      {
        path: "/",
        element: (
          <PageTransition>
            <Home />
          </PageTransition>
        ),
      },
      {
        path: "/servicos",
        element: (
          <PageTransition>
            <Services />
          </PageTransition>
        ),
      },
      {
        path: "/clientes",
        element: (
          <PageTransition>
            <Clients />
          </PageTransition>
        ),
      },
      {
        path: "/clientes/:id",
        element: (
          <PageTransition>
            <ClientsDetail />
          </PageTransition>
        ),
      },
    ],
  },
  {
    // ROTAS SEM DASHBOARD
    path: "/",
    element: <Outlet />,
    children: [
      { path: "/login", element: <Login /> },
      { path: "/registro", element: <Register /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <QueryClientProvider client={new QueryClient()}>
        <RouterProvider router={router} />
        <Toaster />
      </QueryClientProvider>
    </ThemeProvider>
  </React.StrictMode>
);
