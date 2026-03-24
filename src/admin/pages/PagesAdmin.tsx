import { useState } from "react";
import { sitePages } from "../data/mockData";
import StatusBadge from "../components/StatusBadge";
import { Search, Plus, ExternalLink, Edit, Trash2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

const PagesAdmin = () => {
  const [search, setSearch] = useState("");
  const [dialogOpen, setDialogOpen] = useState(false);
  const filtered = sitePages.filter(p =>
    p.title.toLowerCase().includes(search.toLowerCase()) ||
    p.slug.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <div className="relative w-full sm:w-72">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Rechercher une page..." value={search} onChange={e => setSearch(e.target.value)} className="pl-9 h-9" />
        </div>
        <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
          <DialogTrigger asChild>
            <Button size="sm" className="gap-1.5"><Plus className="h-4 w-4" /> Nouvelle page</Button>
          </DialogTrigger>
          <DialogContent className="max-w-lg">
            <DialogHeader><DialogTitle>Créer une page</DialogTitle></DialogHeader>
            <div className="space-y-4 pt-2">
              <div><Label>Titre</Label><Input placeholder="Titre de la page" className="mt-1" /></div>
              <div><Label>Slug</Label><Input placeholder="/ma-page" className="mt-1" /></div>
              <div><Label>Statut</Label>
                <Select defaultValue="brouillon">
                  <SelectTrigger className="mt-1"><SelectValue /></SelectTrigger>
                  <SelectContent><SelectItem value="brouillon">Brouillon</SelectItem><SelectItem value="publié">Publié</SelectItem></SelectContent>
                </Select>
              </div>
              <div><Label>Titre SEO</Label><Input className="mt-1" /></div>
              <div><Label>Meta description</Label><Textarea className="mt-1" rows={2} /></div>
              <Button className="w-full" onClick={() => setDialogOpen(false)}>Créer la page</Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <div className="bg-card rounded-xl border border-border overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border bg-muted/30">
                <th className="text-left px-5 py-3 text-xs font-semibold text-muted-foreground uppercase tracking-wide">Page</th>
                <th className="text-left px-5 py-3 text-xs font-semibold text-muted-foreground uppercase tracking-wide hidden md:table-cell">Slug</th>
                <th className="text-center px-5 py-3 text-xs font-semibold text-muted-foreground uppercase tracking-wide hidden lg:table-cell">Sections</th>
                <th className="text-left px-5 py-3 text-xs font-semibold text-muted-foreground uppercase tracking-wide">Statut</th>
                <th className="text-left px-5 py-3 text-xs font-semibold text-muted-foreground uppercase tracking-wide hidden md:table-cell">Mis à jour</th>
                <th className="text-right px-5 py-3 text-xs font-semibold text-muted-foreground uppercase tracking-wide">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {filtered.map(page => (
                <tr key={page.id} className="hover:bg-muted/20 transition-colors">
                  <td className="px-5 py-3">
                    <p className="text-sm font-medium text-foreground">{page.title}</p>
                    <p className="text-xs text-muted-foreground md:hidden">{page.slug}</p>
                  </td>
                  <td className="px-5 py-3 hidden md:table-cell"><code className="text-xs text-muted-foreground bg-muted px-1.5 py-0.5 rounded">{page.slug}</code></td>
                  <td className="px-5 py-3 text-center text-sm text-muted-foreground hidden lg:table-cell">{page.sectionsCount}</td>
                  <td className="px-5 py-3">
                    <StatusBadge label={page.status} colorClass={page.status === "publié" ? "bg-emerald-100 text-emerald-800" : "bg-amber-100 text-amber-800"} />
                  </td>
                  <td className="px-5 py-3 text-xs text-muted-foreground hidden md:table-cell">{page.updatedAt}</td>
                  <td className="px-5 py-3">
                    <div className="flex items-center justify-end gap-1">
                      <button className="p-1.5 rounded-md hover:bg-muted text-muted-foreground"><ExternalLink className="h-3.5 w-3.5" /></button>
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

export default PagesAdmin;
