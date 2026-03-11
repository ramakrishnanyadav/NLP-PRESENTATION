import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { ProgressBar } from "@/components/ProgressBar";
import { Outlet } from "react-router-dom";

export function AppLayout() {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <AppSidebar />
        <div className="flex-1 flex flex-col min-w-0">
          <ProgressBar />
          <header className="h-12 flex items-center border-b border-border/30 bg-card/40 backdrop-blur-md sticky top-0 z-40">
            <SidebarTrigger className="ml-3 text-primary hover:text-primary/80" />
            <span className="ml-3 text-xs text-muted-foreground font-medium tracking-wide">
              AI for Data Analysis & Visualization
            </span>
          </header>
          <main className="flex-1">
            <Outlet />
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}
