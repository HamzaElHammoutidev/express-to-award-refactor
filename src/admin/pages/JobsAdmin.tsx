import { useState } from "react";
import { jobOffers } from "../data/mockData";
import StatusBadge from "../components/StatusBadge";
import { Search, Plus, Edit, Trash2, Copy, Eye } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const jobStatusColors: Record<string, string> = {
  "brouillon": "bg-amber-100 text-amber-800",
  "publié": "bg-emerald-100 text-emerald-800",
  "expiré": "bg-red-100 text-red-700",
  "archivé": "bg-slate-100 text-slate-500",
};

const JobsAdmin = () => {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [dialogOpen, setDialogOpen] = useState(false);

  const filtered = jobOffers.filter(j => {
    const matchSearch = j.title.toLowerCase().includes(search.toLowerCase());
    const matchStatus = statusFilter === "all" || j.status === statusFilter;
    return matchSearch && matchStatus;
  });

  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <div className="flex items-center gap-2 w-full sm:w-auto">
          <div className="relative flex-1 sm:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Rechercher une offre..." value={search} onChange={e => setSearch(e.target.value)} className="pl-9 h-9" />
          </div>
          <Select value={statusFilter} onValueChange={setStatusFilter}>
            <SelectTrigger className="w-36 h-9"><SelectValue /></SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Tous</SelectItem>
              <SelectItem value="publié">Publié</SelectItem>
              <SelectItem value="brouillon">Brouillon</SelectItem>
              <SelectItem value="expiré">Expiré</SelectItem>
              <SelectItem value="archivé">Archivé</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
          <DialogTrigger asChild>
            <Button size="sm" className="gap-1.5"><Plus className="h-4 w-4" /> Nouvelle offre</Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl max-h-[85vh] overflow-y-auto">
            <DialogHeader><DialogTitle>Créer une offre d'emploi</DialogTitle></DialogHeader>
            <div className="space-y-4 pt-2">
              <div className="grid grid-cols-2 gap-3">
                <div><Label>Titre du poste</Label><Input className="mt-1" /></div>
                <div><Label>Département</Label><Input className="mt-1" /></div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div><Label>Localisation</Label><Input className="mt-1" /></div>
                <div><Label>Type de contrat</Label>
                  <Select><SelectTrigger className="mt-1"><SelectValue placeholder="Choisir" /></SelectTrigger>
                    <SelectContent><SelectItem value="CDI">CDI</SelectItem><SelectItem value="CDD">CDD</SelectItem><SelectItem value="Stage">Stage</SelectItem></SelectContent>
                  </Select>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div><Label>Mode de travail</Label><Input className="mt-1" placeholder="Sur site / Hybride / Remote" /></div>
                <div><Label>Expérience requise</Label><Input className="mt-1" /></div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div><Label>Date de publication</Label><Input type="date" className="mt-1" /></div>
                <div><Label>Date limite</Label><Input type="date" className="mt-1" /></div>
              </div>
              <div><Label>Résumé</Label><Textarea className="mt-1" rows={2} /></div>
              <div><Label>Description complète</Label><Textarea className="mt-1" rows={4} /></div>
              <div><Label>Titre SEO</Label><Input className="mt-1" /></div>
              <div><Label>Meta description</Label><Textarea className="mt-1" rows={2} /></div>
              <Button className="w-full" onClick={() => setDialogOpen(false)}>Créer l'offre</Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <div className="bg-card rounded-xl border border-border overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border bg-muted/30">
                <th className="text-left px-5 py-3 text-xs font-semibold text-muted-foreground uppercase">Poste</th>
                <th className="text-left px-5 py-3 text-xs font-semibold text-muted-foreground uppercase hidden md:table-cell">Département</th>
                <th className="text-left px-5 py-3 text-xs font-semibold text-muted-foreground uppercase hidden lg:table-cell">Localisation</th>
                <th className="text-left px-5 py-3 text-xs font-semibold text-muted-foreground uppercase hidden lg:table-cell">Contrat</th>
                <th className="text-left px-5 py-3 text-xs font-semibold text-muted-foreground uppercase">Statut</th>
                <th className="text-left px-5 py-3 text-xs font-semibold text-muted-foreground uppercase hidden md:table-cell">Deadline</th>
                <th className="text-right px-5 py-3 text-xs font-semibold text-muted-foreground uppercase">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {filtered.map(job => (
                <tr key={job.id} className="hover:bg-muted/20 transition-colors">
                  <td className="px-5 py-3">
                    <p className="text-sm font-medium text-foreground">{job.title}</p>
                    <p className="text-xs text-muted-foreground md:hidden">{job.department}</p>
                  </td>
                  <td className="px-5 py-3 text-sm text-muted-foreground hidden md:table-cell">{job.department}</td>
                  <td className="px-5 py-3 text-sm text-muted-foreground hidden lg:table-cell">{job.location}</td>
                  <td className="px-5 py-3 text-sm text-muted-foreground hidden lg:table-cell">{job.contractType}</td>
                  <td className="px-5 py-3"><StatusBadge label={job.status} colorClass={jobStatusColors[job.status]} /></td>
                  <td className="px-5 py-3 text-xs text-muted-foreground hidden md:table-cell">{job.deadline}</td>
                  <td className="px-5 py-3">
                    <div className="flex items-center justify-end gap-1">
                      <button className="p-1.5 rounded-md hover:bg-muted text-muted-foreground"><Eye className="h-3.5 w-3.5" /></button>
                      <button className="p-1.5 rounded-md hover:bg-muted text-muted-foreground"><Edit className="h-3.5 w-3.5" /></button>
                      <button className="p-1.5 rounded-md hover:bg-muted text-muted-foreground"><Copy className="h-3.5 w-3.5" /></button>
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

export default JobsAdmin;
