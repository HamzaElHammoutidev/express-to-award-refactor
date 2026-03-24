import { useState } from "react";
import { adminUsers } from "../data/mockData";
import StatusBadge from "../components/StatusBadge";
import { Plus, Edit, Trash2, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";

const roles = ["Super Admin", "Admin contenu", "Admin RH", "Gestionnaire sinistre", "Gestionnaire contact", "Lecture seule"];

const roleColors: Record<string, string> = {
  "Super Admin": "bg-violet-100 text-violet-800",
  "Admin contenu": "bg-blue-100 text-blue-800",
  "Admin RH": "bg-teal-100 text-teal-800",
  "Gestionnaire sinistre": "bg-amber-100 text-amber-800",
  "Gestionnaire contact": "bg-sky-100 text-sky-800",
  "Lecture seule": "bg-slate-100 text-slate-500",
};

const UsersAdmin = () => {
  const [dialogOpen, setDialogOpen] = useState(false);

  return (
    <div className="space-y-6">
      {/* Roles summary */}
      <div className="bg-card rounded-xl border border-border p-5">
        <h2 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2"><Shield className="h-4 w-4 text-primary" /> Rôles disponibles</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {roles.map(role => (
            <div key={role} className="text-center p-3 rounded-lg bg-muted/50">
              <p className="text-xs font-medium text-foreground">{role}</p>
              <p className="text-[10px] text-muted-foreground mt-0.5">
                {adminUsers.filter(u => u.role === role).length} utilisateur(s)
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-between">
        <p className="text-sm text-muted-foreground">{adminUsers.length} utilisateurs</p>
        <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
          <DialogTrigger asChild>
            <Button size="sm" className="gap-1.5"><Plus className="h-4 w-4" /> Nouvel utilisateur</Button>
          </DialogTrigger>
          <DialogContent className="max-w-lg">
            <DialogHeader><DialogTitle>Ajouter un utilisateur</DialogTitle></DialogHeader>
            <div className="space-y-4 pt-2">
              <div><Label>Nom complet</Label><Input className="mt-1" /></div>
              <div><Label>Email</Label><Input type="email" className="mt-1" /></div>
              <div><Label>Rôle</Label>
                <Select><SelectTrigger className="mt-1"><SelectValue placeholder="Choisir un rôle" /></SelectTrigger>
                  <SelectContent>{roles.map(r => <SelectItem key={r} value={r}>{r}</SelectItem>)}</SelectContent>
                </Select>
              </div>
              <div><Label>Mot de passe</Label><Input type="password" className="mt-1" /></div>
              <div className="flex items-center gap-2"><Switch defaultChecked /><Label>Compte actif</Label></div>
              <Button className="w-full" onClick={() => setDialogOpen(false)}>Créer l'utilisateur</Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <div className="bg-card rounded-xl border border-border overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border bg-muted/30">
                <th className="text-left px-5 py-3 text-xs font-semibold text-muted-foreground uppercase">Utilisateur</th>
                <th className="text-left px-5 py-3 text-xs font-semibold text-muted-foreground uppercase hidden md:table-cell">Email</th>
                <th className="text-left px-5 py-3 text-xs font-semibold text-muted-foreground uppercase">Rôle</th>
                <th className="text-left px-5 py-3 text-xs font-semibold text-muted-foreground uppercase hidden md:table-cell">Dernière connexion</th>
                <th className="text-left px-5 py-3 text-xs font-semibold text-muted-foreground uppercase">Statut</th>
                <th className="text-right px-5 py-3 text-xs font-semibold text-muted-foreground uppercase">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {adminUsers.map(user => (
                <tr key={user.id} className="hover:bg-muted/20 transition-colors">
                  <td className="px-5 py-3">
                    <div className="flex items-center gap-3">
                      <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xs">
                        {user.name.split(" ").map(n => n[0]).join("")}
                      </div>
                      <p className="text-sm font-medium text-foreground">{user.name}</p>
                    </div>
                  </td>
                  <td className="px-5 py-3 text-sm text-muted-foreground hidden md:table-cell">{user.email}</td>
                  <td className="px-5 py-3"><StatusBadge label={user.role} colorClass={roleColors[user.role] || "bg-gray-100 text-gray-700"} /></td>
                  <td className="px-5 py-3 text-xs text-muted-foreground hidden md:table-cell">{user.lastLogin}</td>
                  <td className="px-5 py-3">
                    <StatusBadge label={user.active ? "Actif" : "Inactif"} colorClass={user.active ? "bg-emerald-100 text-emerald-800" : "bg-red-100 text-red-700"} />
                  </td>
                  <td className="px-5 py-3">
                    <div className="flex items-center justify-end gap-1">
                      <button className="p-1.5 rounded-md hover:bg-muted text-muted-foreground"><Edit className="h-3.5 w-3.5" /></button>
                      <button className="p-1.5 rounded-md hover:bg-destructive/10 text-destructive"><Trash2 className="h-3.5 w-3.5" /></button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UsersAdmin;
