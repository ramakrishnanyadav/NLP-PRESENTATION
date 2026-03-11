import { Home, Brain, Cpu, GitCompareArrows, BarChart3, Wrench, Award, AlertTriangle } from "lucide-react";
import { NavLink } from "@/components/NavLink";
import { useLocation } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";

const navItems = [
  { title: "Home", url: "/", icon: Home, roll: null },
  { title: "Roll 117 — Intro to AI", url: "/roll-117", icon: Brain, roll: "117" },
  { title: "Roll 118 — AI Techniques", url: "/roll-118", icon: Cpu, roll: "118" },
  { title: "Roll 119 — AI vs Traditional", url: "/roll-119", icon: GitCompareArrows, roll: "119" },
  { title: "Roll 120 — Data Visualization", url: "/roll-120", icon: BarChart3, roll: "120" },
  { title: "Roll 121 — AI Tools", url: "/roll-121", icon: Wrench, roll: "121" },
  { title: "Roll 122 — Conclusion", url: "/roll-122", icon: Award, roll: "122" },
];

export function AppSidebar() {
  const { state } = useSidebar();
  const collapsed = state === "collapsed";

  return (
    <Sidebar collapsible="icon" className="border-r border-border/40 bg-card/60 backdrop-blur-xl">
      <SidebarContent className="pt-4">
        <SidebarGroup>
          <SidebarGroupLabel className="text-primary font-bold tracking-wider text-xs uppercase">
            {!collapsed && "Presentation"}
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navItems.map((item) => (
                <SidebarMenuItem key={item.url}>
                  <SidebarMenuButton asChild>
                    <NavLink
                      to={item.url}
                      end
                      className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-all text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                      activeClassName="bg-primary/20 text-primary font-semibold glow-border-cyan"
                    >
                      <item.icon className="h-4 w-4 shrink-0" />
                      {!collapsed && (
                        <div className="flex flex-col">
                          <span>{item.title}</span>
                          {item.roll && (
                            <span className="text-[10px] text-muted-foreground/60">Roll No. {item.roll}</span>
                          )}
                        </div>
                      )}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
