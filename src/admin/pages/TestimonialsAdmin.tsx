import { useState } from "react";
import { testimonials } from "../data/mockData";
import StatusBadge from "../components/StatusBadge";
import { Plus, Edit, Trash2, GripVertical, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";

const TestimonialsAdmin = () => {
  const [dialogOpen, setDialogOpen] = useState(false);

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <p className="text-sm text-muted-foreground">{testimonials.length} témoignages</p>
        <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
          <DialogTrigger asChild>
            <Button size="sm" className="gap-1.5"><Plus className="h-4 w-4" /> Nouveau témoignage</Button>
          </DialogTrigger>
          <DialogContent className="max-w-lg">
            <DialogHeader><DialogTitle>Ajouter un témoignage</DialogTitle></DialogHeader>
            <div className="space-y-4 pt-2">
              <div><Label>Nom</Label><Input className="mt-1" /></div>
              <div><Label>Fonction / Contexte</Label><Input className="mt-1" /></div>
              <div><Label>Témoignage</Label><Textarea className="mt-1" rows={4} /></div>
              <div><Label>Note (1-5)</Label><Input type="number" min={1} max={5} className="mt-1 w-20" /></div>
              <div className="flex items-center gap-2"><Switch defaultChecked /><Label>Actif</Label></div>
              <Button className="w-full" onClick={() => setDialogOpen(false)}>Enregistrer</Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {testimonials.map(t => (
          <div key={t.id} className="bg-card rounded-xl border border-border p-5 hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </div>
              <StatusBadge label={t.active ? "Actif" : "Inactif"} colorClass={t.active ? "bg-emerald-100 text-emerald-800" : "bg-slate-100 text-slate-500"} />
            </div>
            <div className="flex gap-0.5 mb-2">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className={`h-3.5 w-3.5 ${i < t.rating ? "text-primary fill-primary" : "text-muted-foreground/30"}`} />
              ))}
            </div>
            <p className="text-sm text-muted-foreground line-clamp-3">{t.text}</p>
            <div className="flex items-center gap-1 mt-3 pt-3 border-t border-border">
              <Button variant="ghost" size="sm" className="h-7 text-xs gap-1"><GripVertical className="h-3 w-3" /></Button>
              <div className="ml-auto flex gap-1">
                <button className="p-1.5 rounded-md hover:bg-muted text-muted-foreground"><Edit className="h-3.5 w-3.5" /></button>
                <button className="p-1.5 rounded-md hover:bg-destructive/10 text-destructive"><Trash2 className="h-3.5 w-3.5" /></button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialsAdmin;
