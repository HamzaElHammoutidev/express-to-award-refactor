import { useState } from "react";
import { centers } from "../data/mockData";
import StatusBadge from "../components/StatusBadge";
import { Search, Plus, Edit, Trash2, MapPin, Phone } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";

const CentersAdmin = () => {
  const [search, setSearch] = useState("");
  const [cityFilter, setCityFilter] = useState("all");
  const [dialogOpen, setDialogOpen] = useState(false);

  const cities = [...new Set(centers.map(c => c.city))];
  const filtered = centers.filter(c => {
    const matchSearch = c.name.toLowerCase().includes(search.toLowerCase());
    const matchCity = cityFilter === "all" || c.city === cityFilter;
    return matchSearch && matchCity;
  });

  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <div className="flex items-center gap-2 w-full sm:w-auto">
          <div className="relative flex-1 sm:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Rechercher un centre..." value={search} onChange={e => setSearch(e.target.value)} className="pl-9 h-9" />
          </div>
          <Select value={cityFilter} onValueChange={setCityFilter}>
            <SelectTrigger className="w-36 h-9"><SelectValue placeholder="Ville" /></SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Toutes les villes</SelectItem>
              {cities.map(c => <SelectItem key={c} value={c}>{c}</SelectItem>)}
            </SelectContent>
          </Select>
        </div>
        <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
          <DialogTrigger asChild>
            <Button size="sm" className="gap-1.5"><Plus className="h-4 w-4" /> Nouveau centre</Button>
          </DialogTrigger>
          <DialogContent className="max-w-lg max-h-[85vh] overflow-y-auto">
            <DialogHeader><DialogTitle>Ajouter un centre</DialogTitle></DialogHeader>
            <div className="space-y-4 pt-2">
              <div><Label>Nom du centre</Label><Input className="mt-1" /></div>
              <div className="grid grid-cols-2 gap-3">
                <div><Label>Ville</Label><Input className="mt-1" /></div>
                <div><Label>Région</Label><Input className="mt-1" /></div>
              </div>
              <div><Label>Adresse complète</Label><Textarea className="mt-1" rows={2} /></div>
              <div className="grid grid-cols-2 gap-3">
                <div><Label>Téléphone</Label><Input className="mt-1" /></div>
                <div><Label>Email</Label><Input className="mt-1" /></div>
              </div>
              <div><Label>Horaires</Label><Input className="mt-1" /></div>
              <div className="grid grid-cols-2 gap-3">
                <div><Label>Latitude</Label><Input type="number" className="mt-1" /></div>
                <div><Label>Longitude</Label><Input type="number" className="mt-1" /></div>
              </div>
              <div className="flex items-center gap-2">
                <Switch /><Label>Centre actif</Label>
              </div>
              <Button className="w-full" onClick={() => setDialogOpen(false)}>Enregistrer</Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {filtered.map(center => (
          <div key={center.id} className="bg-card rounded-xl border border-border overflow-hidden hover:shadow-md transition-shadow">
            <div className="aspect-[2/1] bg-muted/50 relative">
              <img src={center.image} alt={center.name} className="w-full h-full object-cover" />
              <div className="absolute top-3 right-3">
                <StatusBadge label={center.active ? "Actif" : "Inactif"} colorClass={center.active ? "bg-emerald-100 text-emerald-800" : "bg-red-100 text-red-700"} />
              </div>
            </div>
            <div className="p-4">
              <h3 className="text-sm font-semibold text-foreground">{center.name}</h3>
              <div className="flex items-center gap-1 mt-1.5 text-xs text-muted-foreground">
                <MapPin className="h-3 w-3" />{center.address}
              </div>
              <div className="flex items-center gap-1 mt-1 text-xs text-muted-foreground">
                <Phone className="h-3 w-3" />{center.phone}
              </div>
              <div className="flex flex-wrap gap-1 mt-2">
                {center.services.map(s => (
                  <span key={s} className="text-[10px] px-2 py-0.5 rounded-full bg-primary/10 text-primary font-medium">{s}</span>
                ))}
              </div>
              <div className="flex items-center gap-1 mt-3 pt-3 border-t border-border">
                <Button variant="outline" size="sm" className="flex-1 h-8 text-xs gap-1"><Edit className="h-3 w-3" /> Modifier</Button>
                <Button variant="outline" size="sm" className="h-8 text-xs text-destructive hover:bg-destructive/10"><Trash2 className="h-3 w-3" /></Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CentersAdmin;
