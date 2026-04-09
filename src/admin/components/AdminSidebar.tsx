import { Link, useLocation } from "react-router-dom";
import {
  LayoutDashboard, FileText, Grid3X3, Image, MapPin, AlertTriangle,
  Mail, Briefcase, Users, ClipboardList, HelpCircle, MessageSquareQuote,
  Settings, Shield, Activity, ChevronLeft, LogOut, UserPlus, Link2
} from "lucide-react";
import { cn } from "@/lib/utils";

const menuSections = [
  {
    label: "Général",
    items: [
      { label: "Dashboard", icon: LayoutDashboard, href: "/admin" },
    ],
  },
  {
    label: "Contenu",
    items: [
      { label: "Pages", icon: FileText, href: "/admin/pages" },
      { label: "Sections / Blocs", icon: Grid3X3, href: "/admin/sections" },
      { label: "Médiathèque", icon: Image, href: "/admin/media" },
      { label: "FAQ", icon: HelpCircle, href: "/admin/faq" },
      { label: "Témoignages", icon: MessageSquareQuote, href: "/admin/testimonials" },
    ],
  },
  {
    label: "Métier",
    items: [
      { label: "Centres / Agences", icon: MapPin, href: "/admin/centers" },
      { label: "Déclarations sinistre", icon: AlertTriangle, href: "/admin/claims" },
      { label: "Interfaçage Odoo", icon: Link2, href: "/admin/odoo" },
      { label: "Messages contact", icon: Mail, href: "/admin/messages" },
    ],
  },
  {
    label: "RH",
    items: [
      { label: "Offres d'emploi", icon: Briefcase, href: "/admin/jobs" },
      { label: "Candidatures offres", icon: ClipboardList, href: "/admin/applications" },
      { label: "Candidatures spontanées", icon: UserPlus, href: "/admin/spontaneous" },
    ],
  },
  {
    label: "Système",
    items: [
      { label: "Paramètres", icon: Settings, href: "/admin/settings" },
      { label: "Utilisateurs & rôles", icon: Shield, href: "/admin/users" },
      { label: "Journal d'activité", icon: Activity, href: "/admin/activity" },
    ],
  },
];

interface AdminSidebarProps {
  collapsed: boolean;
  onToggle: () => void;
}

const AdminSidebar = ({ collapsed, onToggle }: AdminSidebarProps) => {
  const location = useLocation();

  const isActive = (href: string) => {
    if (href === "/admin") return location.pathname === "/admin";
    return location.pathname.startsWith(href);
  };

  return (
    <aside
      className={cn(
        "fixed left-0 top-0 bottom-0 z-40 flex flex-col bg-card border-r border-border transition-all duration-300",
        collapsed ? "w-[68px]" : "w-[260px]"
      )}
    >
      {/* Logo */}
      <div className="flex items-center justify-between h-16 px-4 border-b border-border">
        {!collapsed && (
          <Link to="/admin" className="flex items-center gap-2">
            <img
              src="https://parebriseexpress.ma/images/PBE_LOGO_01-2.png"
              alt="PBE"
              className="h-8"
            />
          </Link>
        )}
        <button
          onClick={onToggle}
          className={cn(
            "p-1.5 rounded-md hover:bg-muted transition-colors text-muted-foreground",
            collapsed && "mx-auto"
          )}
        >
          <ChevronLeft className={cn("h-4 w-4 transition-transform", collapsed && "rotate-180")} />
        </button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto py-4 px-2 space-y-6">
        {menuSections.map((section) => (
          <div key={section.label}>
            {!collapsed && (
              <p className="px-3 mb-2 text-[10px] font-semibold uppercase tracking-widest text-muted-foreground/60">
                {section.label}
              </p>
            )}
            <div className="space-y-0.5">
              {section.items.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  title={collapsed ? item.label : undefined}
                  className={cn(
                    "flex items-center gap-3 px-3 py-2 rounded-lg text-[13px] font-medium transition-all duration-200",
                    isActive(item.href)
                      ? "bg-primary/10 text-primary"
                      : "text-muted-foreground hover:bg-muted hover:text-foreground"
                  )}
                >
                  <item.icon className="h-[18px] w-[18px] flex-shrink-0" />
                  {!collapsed && <span>{item.label}</span>}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </nav>

      {/* Footer */}
      <div className="border-t border-border p-3">
        <Link
          to="/"
          className="flex items-center gap-3 px-3 py-2 rounded-lg text-[13px] text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
          title="Retour au site"
        >
          <LogOut className="h-[18px] w-[18px]" />
          {!collapsed && <span>Retour au site</span>}
        </Link>
      </div>
    </aside>
  );
};

export default AdminSidebar;
