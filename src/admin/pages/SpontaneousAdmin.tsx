import { useState } from "react";
import { spontaneousApps, appStatusColors, AppStatus } from "../data/mockData";
import StatusBadge from "../components/StatusBadge";
import { Search, Download, Eye, FileDown } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import type { SpontaneousApp } from "../data/mockData";

const statuses: AppStatus[] = ["nouvelle", "en revue", "présélectionnée", "entretien", "rejetée", "retenue", "archivée"];

const SpontaneousAdmin = () => {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [selected, setSelected] = useState<SpontaneousApp | null>(null);

  const filtered = spontaneousApps.filter(a => {
    const matchSearch = `${a.firstName} ${a.lastName} ${a.position}`.toLowerCase().includes(search.toLowerCase());
    const matchStatus = statusFilter === "all" || a.status === statusFilter;
    return matchSearch && matchStatus;
  });

  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <div className="flex items-center gap-2 w-full sm:w-auto">
          <div className="relative flex-1 sm:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Rechercher..." value={search} onChange={e => setSearch(e.target.value)} className="pl-9 h-9" />
          </div>
          <Select value={statusFilter} onValueChange={setStatusFilter}>
            <SelectTrigger className="w-36 h-9"><SelectValue /></SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Tous</SelectItem>
              {statuses.map(s => <SelectItem key={s} value={s} className="capitalize">{s}</SelectItem>)}
            </SelectContent>
          </Select>
        </div>
        <Button variant="outline" size="sm" className="gap-1.5"><Download className="h-4 w-4" /> Exporter</Button>
      </div>

      <div className="bg-card rounded-xl border border-border overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border bg-muted/30">
                <th className="text-left px-5 py-3 text-xs font-semibold text-muted-foreground uppercase">Candidat</th>
                <th className="text-left px-5 py-3 text-xs font-semibold text-muted-foreground uppercase hidden md:table-cell">Poste souhaité</th>
                <th className="text-left px-5 py-3 text-xs font-semibold text-muted-foreground uppercase hidden lg:table-cell">Ville</th>
                <th className="text-left px-5 py-3 text-xs font-semibold text-muted-foreground uppercase">Statut</th>
                <th className="text-left px-5 py-3 text-xs font-semibold text-muted-foreground uppercase hidden md:table-cell">Date</th>
                <th className="text-right px-5 py-3 text-xs font-semibold text-muted-foreground uppercase">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {filtered.map(app => (
                <tr key={app.id} className="hover:bg-muted/20 transition-colors">
                  <td className="px-5 py-3">
                    <p className="text-sm font-medium text-foreground">{app.firstName} {app.lastName}</p>
                    <p className="text-xs text-muted-foreground">{app.email}</p>
                  </td>
                  <td className="px-5 py-3 text-sm text-muted-foreground hidden md:table-cell">{app.position}</td>
                  <td className="px-5 py-3 text-sm text-muted-foreground hidden lg:table-cell">{app.city}</td>
                  <td className="px-5 py-3"><StatusBadge label={app.status} colorClass={appStatusColors[app.status]} /></td>
                  <td className="px-5 py-3 text-xs text-muted-foreground hidden md:table-cell">{app.date}</td>
                  <td className="px-5 py-3">
                    <div className="flex items-center justify-end gap-1">
                      <button className="p-1.5 rounded-md hover:bg-muted text-muted-foreground"><FileDown className="h-3.5 w-3.5" /></button>
                      <button onClick={() => setSelected(app)} className="p-1.5 rounded-md hover:bg-muted text-muted-foreground"><Eye className="h-3.5 w-3.5" /></button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <Dialog open={!!selected} onOpenChange={() => setSelected(null)}>
        <DialogContent className="max-w-lg">
          <DialogHeader><DialogTitle>Candidature de {selected?.firstName} {selected?.lastName}</DialogTitle></DialogHeader>
          {selected && (
            <div className="space-y-4 pt-2">
              <div className="grid grid-cols-2 gap-3 text-sm">
                <div><p className="text-xs text-muted-foreground">Email</p><p className="font-medium break-all">{selected.email}</p></div>
                <div><p className="text-xs text-muted-foreground">Téléphone</p><p className="font-medium">{selected.phone}</p></div>
                <div><p className="text-xs text-muted-foreground">Ville</p><p className="font-medium">{selected.city}</p></div>
                <div><p className="text-xs text-muted-foreground">Poste souhaité</p><p className="font-medium">{selected.position}</p></div>
              </div>
              {selected.message && <div><p className="text-xs text-muted-foreground mb-1">Message</p><p className="text-sm bg-muted/50 p-3 rounded-lg">{selected.message}</p></div>}
              <div className="flex gap-2">
                <Button variant="outline" size="sm" className="gap-1"><FileDown className="h-3.5 w-3.5" /> CV</Button>
                {selected.coverLetter && <Button variant="outline" size="sm" className="gap-1"><FileDown className="h-3.5 w-3.5" /> Lettre</Button>}
              </div>
              <div><Label>Statut</Label>
                <Select defaultValue={selected.status}><SelectTrigger className="mt-1"><SelectValue /></SelectTrigger>
                  <SelectContent>{statuses.map(s => <SelectItem key={s} value={s} className="capitalize">{s}</SelectItem>)}</SelectContent>
                </Select>
              </div>
              <div><Label>Notes</Label><Textarea className="mt-1" rows={2} defaultValue={selected.notes} /></div>
              <Button className="w-full">Sauvegarder</Button>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default SpontaneousAdmin;
