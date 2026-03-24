import { useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import AdminSidebar from "../components/AdminSidebar";
import AdminTopbar from "../components/AdminTopbar";
import { cn } from "@/lib/utils";

const pageTitles: Record<string, string> = {
  "/admin": "Dashboard",
  "/admin/pages": "Gestion des pages",
  "/admin/sections": "Sections / Blocs",
  "/admin/media": "Médiathèque",
  "/admin/centers": "Centres / Agences",
  "/admin/claims": "Déclarations de sinistre",
  "/admin/messages": "Messages de contact",
  "/admin/jobs": "Offres d'emploi",
  "/admin/applications": "Candidatures sur offres",
  "/admin/spontaneous": "Candidatures spontanées",
  "/admin/faq": "FAQ",
  "/admin/testimonials": "Témoignages",
  "/admin/settings": "Paramètres du site",
  "/admin/users": "Utilisateurs & rôles",
  "/admin/activity": "Journal d'activité",
};

const AdminLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const title = pageTitles[location.pathname] || "";

  return (
    <div className="min-h-screen bg-muted/30">
      {/* Mobile overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-30 bg-foreground/20 backdrop-blur-sm lg:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Sidebar - desktop */}
      <div className="hidden lg:block">
        <AdminSidebar collapsed={collapsed} onToggle={() => setCollapsed(!collapsed)} />
      </div>

      {/* Sidebar - mobile */}
      <div
        className={cn(
          "lg:hidden fixed inset-y-0 left-0 z-50 transition-transform duration-300",
          mobileOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <AdminSidebar collapsed={false} onToggle={() => setMobileOpen(false)} />
      </div>

      {/* Main content */}
      <div
        className={cn(
          "transition-all duration-300",
          collapsed ? "lg:ml-[68px]" : "lg:ml-[260px]"
        )}
      >
        <AdminTopbar
          onMenuToggle={() => setMobileOpen(!mobileOpen)}
          title={title}
        />
        <main className="p-4 md:p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
