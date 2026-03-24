import { sitePages } from "../data/mockData";
import { GripVertical, Eye, EyeOff, Plus, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";

const sectionTypes = [
  "Hero image/vidéo", "Slider/Bannière", "Titre + sous-titre", "Texte riche",
  "Chiffres clés", "Services", "Avantages", "CTA", "Galerie photos", "Vidéo",
  "Carte / Map", "FAQ", "Témoignages", "Processus étapes", "Formulaire",
  "Partenaires / Assurances", "Bloc personnalisé",
];

const mockSections = [
  { id: "S1", type: "Hero image/vidéo", title: "Vidéo principale", active: true },
  { id: "S2", type: "Chiffres clés", title: "Nos chiffres", active: true },
  { id: "S3", type: "Services", title: "Nos services", active: true },
  { id: "S4", type: "Carte / Map", title: "Nos centres", active: true },
  { id: "S5", type: "Processus étapes", title: "Comment ça marche", active: true },
  { id: "S6", type: "Vidéo", title: "Vidéo institutionnelle", active: true },
  { id: "S7", type: "Témoignages", title: "Témoignages clients", active: true },
  { id: "S8", type: "Partenaires / Assurances", title: "Nos partenaires", active: true },
  { id: "S9", type: "CTA", title: "Déclaration sinistre", active: false },
];

const SectionsAdmin = () => {
  const [selectedPage, setSelectedPage] = useState("PG-001");

  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <span className="text-sm text-muted-foreground">Page :</span>
          <Select value={selectedPage} onValueChange={setSelectedPage}>
            <SelectTrigger className="w-48 h-9"><SelectValue /></SelectTrigger>
            <SelectContent>
              {sitePages.map(p => <SelectItem key={p.id} value={p.id}>{p.title}</SelectItem>)}
            </SelectContent>
          </Select>
        </div>
        <Button size="sm" className="gap-1.5"><Plus className="h-4 w-4" /> Ajouter une section</Button>
      </div>

      <div className="bg-card rounded-xl border border-border divide-y divide-border">
        {mockSections.map((section, i) => (
          <div key={section.id} className="flex items-center gap-3 px-4 py-3 hover:bg-muted/20 transition-colors">
            <GripVertical className="h-5 w-5 text-muted-foreground/40 cursor-grab flex-shrink-0" />
            <span className="text-xs text-muted-foreground font-mono w-6">{i + 1}</span>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-foreground">{section.title}</p>
              <p className="text-xs text-muted-foreground">{section.type}</p>
            </div>
            <div className="flex items-center gap-1 flex-shrink-0">
              <button className={`p-1.5 rounded-md ${section.active ? "text-emerald-600 hover:bg-emerald-50" : "text-muted-foreground hover:bg-muted"}`}>
                {section.active ? <Eye className="h-4 w-4" /> : <EyeOff className="h-4 w-4" />}
              </button>
              <button className="p-1.5 rounded-md hover:bg-muted text-muted-foreground">
                <Settings className="h-4 w-4" />
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-muted/50 rounded-xl border border-dashed border-border p-6 text-center">
        <p className="text-sm text-muted-foreground mb-2">Types de sections disponibles</p>
        <div className="flex flex-wrap justify-center gap-1.5">
          {sectionTypes.map(t => (
            <span key={t} className="text-[10px] px-2 py-1 rounded-full bg-card border border-border text-muted-foreground">{t}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectionsAdmin;
