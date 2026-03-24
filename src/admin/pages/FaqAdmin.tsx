import { useState } from "react";
import { faqItems } from "../data/mockData";
import StatusBadge from "../components/StatusBadge";
import { Plus, Edit, Trash2, GripVertical } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const FaqAdmin = () => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const categories = [...new Set(faqItems.map(f => f.category))];

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <p className="text-sm text-muted-foreground">{faqItems.length} questions · {faqItems.filter(f => f.active).length} actives</p>
        <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
          <DialogTrigger asChild>
            <Button size="sm" className="gap-1.5"><Plus className="h-4 w-4" /> Nouvelle question</Button>
          </DialogTrigger>
          <DialogContent className="max-w-lg">
            <DialogHeader><DialogTitle>Ajouter une question</DialogTitle></DialogHeader>
            <div className="space-y-4 pt-2">
              <div><Label>Catégorie</Label>
                <Select><SelectTrigger className="mt-1"><SelectValue placeholder="Choisir" /></SelectTrigger>
                  <SelectContent>{categories.map(c => <SelectItem key={c} value={c}>{c}</SelectItem>)}</SelectContent>
                </Select>
              </div>
              <div><Label>Question</Label><Input className="mt-1" /></div>
              <div><Label>Réponse</Label><Textarea className="mt-1" rows={4} /></div>
              <div className="flex items-center gap-2"><Switch defaultChecked /><Label>Active</Label></div>
              <Button className="w-full" onClick={() => setDialogOpen(false)}>Enregistrer</Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <div className="bg-card rounded-xl border border-border divide-y divide-border">
        {faqItems.map(faq => (
          <div key={faq.id} className="flex items-start gap-3 p-4 hover:bg-muted/20 transition-colors">
            <GripVertical className="h-5 w-5 text-muted-foreground/40 mt-0.5 cursor-grab flex-shrink-0" />
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-primary/10 text-primary font-medium">{faq.category}</span>
                <StatusBadge label={faq.active ? "Active" : "Inactive"} colorClass={faq.active ? "bg-emerald-100 text-emerald-800" : "bg-slate-100 text-slate-500"} />
              </div>
              <p className="text-sm font-medium text-foreground">{faq.question}</p>
              <p className="text-xs text-muted-foreground mt-1 line-clamp-2">{faq.answer}</p>
            </div>
            <div className="flex items-center gap-1 flex-shrink-0">
              <button className="p-1.5 rounded-md hover:bg-muted text-muted-foreground"><Edit className="h-3.5 w-3.5" /></button>
              <button className="p-1.5 rounded-md hover:bg-destructive/10 text-destructive"><Trash2 className="h-3.5 w-3.5" /></button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FaqAdmin;
