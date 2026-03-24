import { Search, Bell, Menu, User } from "lucide-react";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface AdminTopbarProps {
  onMenuToggle: () => void;
  title?: string;
}

const AdminTopbar = ({ onMenuToggle, title }: AdminTopbarProps) => {
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 h-16 bg-card/80 backdrop-blur-xl border-b border-border flex items-center justify-between px-6 gap-4">
      <div className="flex items-center gap-4">
        <button
          onClick={onMenuToggle}
          className="lg:hidden p-2 rounded-lg hover:bg-muted text-muted-foreground"
        >
          <Menu className="h-5 w-5" />
        </button>
        {title && (
          <h1 className="text-lg font-semibold text-foreground hidden sm:block">{title}</h1>
        )}
      </div>

      <div className="flex items-center gap-2">
        {/* Search */}
        <div className="relative hidden md:block">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Recherche globale..."
            className="pl-9 w-[260px] h-9 bg-muted/50 border-0 text-sm focus-visible:ring-1"
          />
        </div>
        <button
          onClick={() => setSearchOpen(!searchOpen)}
          className="md:hidden p-2 rounded-lg hover:bg-muted text-muted-foreground"
        >
          <Search className="h-5 w-5" />
        </button>

        {/* Notifications */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="relative p-2 rounded-lg hover:bg-muted text-muted-foreground">
              <Bell className="h-5 w-5" />
              <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-destructive" />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-72">
            <div className="p-3 border-b border-border">
              <p className="text-sm font-semibold">Notifications</p>
            </div>
            <DropdownMenuItem className="py-3">
              <div>
                <p className="text-sm">Nouvelle déclaration de sinistre</p>
                <p className="text-xs text-muted-foreground">Il y a 5 minutes</p>
              </div>
            </DropdownMenuItem>
            <DropdownMenuItem className="py-3">
              <div>
                <p className="text-sm">2 messages non lus</p>
                <p className="text-xs text-muted-foreground">Il y a 30 minutes</p>
              </div>
            </DropdownMenuItem>
            <DropdownMenuItem className="py-3">
              <div>
                <p className="text-sm">Nouvelle candidature reçue</p>
                <p className="text-xs text-muted-foreground">Il y a 2 heures</p>
              </div>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        {/* User */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="flex items-center gap-2 px-2 py-1.5 rounded-lg hover:bg-muted transition-colors">
              <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                <User className="h-4 w-4 text-primary" />
              </div>
              <div className="hidden lg:block text-left">
                <p className="text-xs font-semibold text-foreground">Admin PBE</p>
                <p className="text-[10px] text-muted-foreground">Super Admin</p>
              </div>
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>Mon profil</DropdownMenuItem>
            <DropdownMenuItem>Paramètres</DropdownMenuItem>
            <DropdownMenuItem className="text-destructive">Déconnexion</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
};

export default AdminTopbar;
