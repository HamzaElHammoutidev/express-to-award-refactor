import { useState } from "react";
import { claims, claimStatusColors, ClaimStatus } from "../data/mockData";
import StatusBadge from "../components/StatusBadge";
import { Search, Download, Eye, ChevronDown } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import type { Claim } from "../data/mockData";

const statuses: ClaimStatus[] = ["nouveau", "à qualifier", "en cours", "relancé", "traité", "clôturé", "archivé"];

const ClaimsAdmin = () => {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [selected, setSelected] = useState<Claim | null>(null);

  const filtered = claims.filter(c => {
    const matchSearch = `${c.firstName} ${c.lastName} ${c.plate} ${c.city}`.toLowerCase().includes(search.toLowerCase());
    const matchStatus = statusFilter === "all" || c.status === statusFilter;
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
            <SelectTrigger className="w-36 h-9"><SelectValue placeholder="Statut" /></SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Tous les statuts</SelectItem>
              {statuses.map(s => <SelectItem key={s} value={s} className="capitalize">{s}</SelectItem>)}
            </SelectContent>
          </Select>
        </div>
        <Button variant="outline" size="sm" className="gap-1.5"><Download className="h-4 w-4" /> Exporter CSV</Button>
      </div>

      <div className="bg-card rounded-xl border border-border overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border bg-muted/30">
                <th className="text-left px-5 py-3 text-xs font-semibold text-muted-foreground uppercase">Réf.</th>
                <th className="text-left px-5 py-3 text-xs font-semibold text-muted-foreground uppercase">Client</th>
                <th className="text-left px-5 py-3 text-xs font-semibold text-muted-foreground uppercase hidden md:table-cell">Véhicule</th>
                <th className="text-left px-5 py-3 text-xs font-semibold text-muted-foreground uppercase hidden lg:table-cell">Vitrage</th>
                <th className="text-left px-5 py-3 text-xs font-semibold text-muted-foreground uppercase hidden lg:table-cell">Ville</th>
                <th className="text-left px-5 py-3 text-xs font-semibold text-muted-foreground uppercase">Statut</th>
                <th className="text-left px-5 py-3 text-xs font-semibold text-muted-foreground uppercase hidden md:table-cell">Date</th>
                <th className="text-right px-5 py-3 text-xs font-semibold text-muted-foreground uppercase">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {filtered.map(claim => (
                <tr key={claim.id} className="hover:bg-muted/20 transition-colors">
                  <td className="px-5 py-3 text-xs font-mono text-muted-foreground">{claim.id}</td>
                  <td className="px-5 py-3">
                    <p className="text-sm font-medium text-foreground">{claim.firstName} {claim.lastName}</p>
                    <p className="text-xs text-muted-foreground">{claim.phone}</p>
                  </td>
                  <td className="px-5 py-3 text-sm text-muted-foreground hidden md:table-cell">{claim.brand} {claim.model}</td>
                  <td className="px-5 py-3 text-sm text-muted-foreground hidden lg:table-cell">{claim.glassType}</td>
                  <td className="px-5 py-3 text-sm text-muted-foreground hidden lg:table-cell">{claim.city}</td>
                  <td className="px-5 py-3"><StatusBadge label={claim.status} colorClass={claimStatusColors[claim.status]} /></td>
                  <td className="px-5 py-3 text-xs text-muted-foreground hidden md:table-cell">{claim.date}</td>
                  <td className="px-5 py-3">
                    <div className="flex items-center justify-end gap-1">
                      <button onClick={() => setSelected(claim)} className="p-1.5 rounded-md hover:bg-muted text-muted-foreground"><Eye className="h-3.5 w-3.5" /></button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Detail Dialog */}
      <Dialog open={!!selected} onOpenChange={() => setSelected(null)}>
        <DialogContent className="max-w-2xl max-h-[85vh] overflow-y-auto">
          <DialogHeader><DialogTitle>Déclaration {selected?.id}</DialogTitle></DialogHeader>
          {selected && (
            <div className="space-y-5 pt-2">
              <div className="flex items-center gap-3">
                <StatusBadge label={selected.status} colorClass={claimStatusColors[selected.status]} />
                <Select defaultValue={selected.status}>
                  <SelectTrigger className="w-40 h-8 text-xs"><SelectValue /></SelectTrigger>
                  <SelectContent>{statuses.map(s => <SelectItem key={s} value={s} className="capitalize text-xs">{s}</SelectItem>)}</SelectContent>
                </Select>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
                <div><p className="text-xs text-muted-foreground">Nom</p><p className="font-medium">{selected.firstName} {selected.lastName}</p></div>
                <div><p className="text-xs text-muted-foreground">Téléphone</p><p className="font-medium">{selected.phone}</p></div>
                <div><p className="text-xs text-muted-foreground">Email</p><p className="font-medium break-all">{selected.email}</p></div>
                <div><p className="text-xs text-muted-foreground">Ville</p><p className="font-medium">{selected.city}</p></div>
                <div><p className="text-xs text-muted-foreground">Immatriculation</p><p className="font-medium">{selected.plate}</p></div>
                <div><p className="text-xs text-muted-foreground">Véhicule</p><p className="font-medium">{selected.brand} {selected.model}</p></div>
                <div><p className="text-xs text-muted-foreground">Type de vitrage</p><p className="font-medium">{selected.glassType}</p></div>
                <div><p className="text-xs text-muted-foreground">Côté</p><p className="font-medium">{selected.glassSide}</p></div>
                <div><p className="text-xs text-muted-foreground">Assurance</p><p className="font-medium">{selected.insurance}</p></div>
                <div><p className="text-xs text-muted-foreground">Centre</p><p className="font-medium">{selected.center}</p></div>
                <div><p className="text-xs text-muted-foreground">Source</p><p className="font-medium">{selected.source}</p></div>
                <div><p className="text-xs text-muted-foreground">Date</p><p className="font-medium">{selected.date}</p></div>
              </div>
              <div><p className="text-xs text-muted-foreground mb-1">Description</p><p className="text-sm bg-muted/50 p-3 rounded-lg">{selected.description}</p></div>
              <div><Label>Notes internes</Label><Textarea className="mt-1" rows={3} defaultValue={selected.notes} placeholder="Ajouter une note..." /></div>
              <div><Label>Assigner à</Label><Input className="mt-1" defaultValue={selected.assignee} placeholder="Nom du gestionnaire" /></div>
              <Button className="w-full">Sauvegarder</Button>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ClaimsAdmin;
