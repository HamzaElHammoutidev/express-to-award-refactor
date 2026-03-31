import { useParams, useNavigate } from "react-router-dom";
import { sitePages } from "../data/mockData";
import { pageBlocks } from "../data/pageBlocksData";
import { ArrowLeft, Save, Image as ImageIcon, Video, Link2, Upload, ExternalLink, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { toast } from "sonner";

const BlockEditorAdmin = () => {
  const { pageId, blockId } = useParams();
  const navigate = useNavigate();
  const page = sitePages.find(p => p.id === pageId);
  const blocks = pageBlocks[pageId || ""] || [];
  const block = blocks.find(b => b.id === blockId);
  const [saving, setSaving] = useState(false);

  if (!page || !block) {
    return (
      <div className="text-center py-20">
        <p className="text-muted-foreground">Bloc introuvable.</p>
        <button onClick={() => navigate(-1)} className="text-primary text-sm mt-2">← Retour</button>
      </div>
    );
  }

  const handleSave = () => {
    setSaving(true);
    setTimeout(() => {
      setSaving(false);
      toast.success("Bloc enregistré avec succès");
    }, 800);
  };

  // If managed externally, show info page
  if (block.managedExternally) {
    return (
      <div className="space-y-5">
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="icon" onClick={() => navigate(`/admin/pages/${pageId}`)} className="h-9 w-9">
            <ArrowLeft className="h-4 w-4" />
          </Button>
          <div>
            <h2 className="text-lg font-semibold text-foreground">{block.title}</h2>
            <p className="text-xs text-muted-foreground">{page.title}</p>
          </div>
        </div>

        <div className="bg-card rounded-xl border border-border p-8 text-center max-w-lg mx-auto space-y-4">
          <div className="h-16 w-16 rounded-2xl bg-amber-100 flex items-center justify-center mx-auto">
            <ExternalLink className="h-8 w-8 text-amber-600" />
          </div>
          <h3 className="text-base font-semibold">Section gérée séparément</h3>
          <p className="text-sm text-muted-foreground">
            Le contenu dynamique de cette section est géré dans le module <strong>« {block.externalModule} »</strong>.
          </p>
          <p className="text-xs text-muted-foreground">
            Vous pouvez modifier ci-dessous les textes d'introduction de cette section (titre, sous-titre).
          </p>
        </div>

        {/* Even for external blocks, allow editing intro texts */}
        {block.fields && block.fields.length > 0 && (
          <div className="bg-card rounded-xl border border-border p-6 space-y-6">
            <h3 className="text-sm font-semibold text-foreground border-b border-border pb-3">Textes d'introduction</h3>
            {block.fields.map(field => (
              <FieldRenderer key={field.id} field={field} />
            ))}
            <div className="flex justify-end pt-2">
              <Button onClick={handleSave} disabled={saving} className="gap-2">
                <Save className="h-4 w-4" />
                {saving ? "Enregistrement..." : "Enregistrer"}
              </Button>
            </div>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="space-y-5">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="icon" onClick={() => navigate(`/admin/pages/${pageId}`)} className="h-9 w-9">
            <ArrowLeft className="h-4 w-4" />
          </Button>
          <div>
            <h2 className="text-lg font-semibold text-foreground">{block.title}</h2>
            <p className="text-xs text-muted-foreground">{page.title} · Édition du bloc</p>
          </div>
        </div>
        <Button onClick={handleSave} disabled={saving} className="gap-2">
          <Save className="h-4 w-4" />
          {saving ? "Enregistrement..." : "Enregistrer les modifications"}
        </Button>
      </div>

      {/* Fields */}
      <div className="bg-card rounded-xl border border-border p-6 space-y-8">
        {block.fields && block.fields.map(field => (
          <FieldRenderer key={field.id} field={field} />
        ))}
      </div>
    </div>
  );
};

// ============ Field Renderer ============

interface BlockField {
  id: string;
  label: string;
  type: "text" | "textarea" | "richtext" | "image" | "video" | "url" | "button";
  valueFr?: string;
  valueAr?: string;
  placeholder?: string;
}

const FieldRenderer = ({ field }: { field: BlockField }) => {
  const [valueFr, setValueFr] = useState(field.valueFr || "");
  const [valueAr, setValueAr] = useState(field.valueAr || "");

  if (field.type === "image" || field.type === "video") {
    const isVideo = field.type === "video";
    return (
      <div className="space-y-3 border-b border-border pb-6 last:border-0 last:pb-0">
        <Label className="text-sm font-semibold flex items-center gap-2">
          {isVideo ? <Video className="h-4 w-4 text-primary" /> : <ImageIcon className="h-4 w-4 text-primary" />}
          {field.label}
        </Label>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <p className="text-xs text-muted-foreground mb-1.5">Fichier actuel</p>
            <div className="h-32 rounded-lg bg-muted/50 border border-dashed border-border flex items-center justify-center">
              {valueFr ? (
                <span className="text-xs text-muted-foreground truncate px-3">{valueFr}</span>
              ) : (
                <span className="text-xs text-muted-foreground">Aucun fichier</span>
              )}
            </div>
          </div>
          <div className="flex flex-col justify-center gap-2">
            <Button variant="outline" size="sm" className="gap-2 w-full">
              <Upload className="h-4 w-4" />
              {isVideo ? "Remplacer la vidéo" : "Remplacer l'image"}
            </Button>
            <Button variant="outline" size="sm" className="gap-2 w-full">
              <ImageIcon className="h-4 w-4" />
              Choisir depuis la médiathèque
            </Button>
            <Input
              placeholder="Texte alternatif (SEO)"
              className="mt-1"
              defaultValue={field.placeholder || ""}
            />
          </div>
        </div>
      </div>
    );
  }

  if (field.type === "button") {
    return (
      <div className="space-y-3 border-b border-border pb-6 last:border-0 last:pb-0">
        <Label className="text-sm font-semibold flex items-center gap-2">
          <Link2 className="h-4 w-4 text-primary" />
          {field.label}
        </Label>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-bold uppercase tracking-wider text-primary bg-primary/10 px-2 py-0.5 rounded">FR</span>
              <span className="text-xs text-muted-foreground">Libellé du bouton</span>
            </div>
            <Input value={valueFr} onChange={e => setValueFr(e.target.value)} placeholder="Texte du bouton (FR)" />
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded">AR</span>
              <span className="text-xs text-muted-foreground">نص الزر</span>
            </div>
            <Input value={valueAr} onChange={e => setValueAr(e.target.value)} placeholder="نص الزر" dir="rtl" />
          </div>
        </div>
        <div className="space-y-1">
          <p className="text-xs text-muted-foreground">Lien de redirection</p>
          <Input defaultValue={field.placeholder || ""} placeholder="https:// ou /page" />
        </div>
      </div>
    );
  }

  // text, textarea, richtext
  const isMultiline = field.type === "textarea" || field.type === "richtext";

  return (
    <div className="space-y-3 border-b border-border pb-6 last:border-0 last:pb-0">
      <Label className="text-sm font-semibold">{field.label}</Label>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-bold uppercase tracking-wider text-primary bg-primary/10 px-2 py-0.5 rounded">FR</span>
            <span className="text-xs text-muted-foreground">Français</span>
          </div>
          {isMultiline ? (
            <Textarea value={valueFr} onChange={e => setValueFr(e.target.value)} rows={4} placeholder={field.placeholder || ""} />
          ) : (
            <Input value={valueFr} onChange={e => setValueFr(e.target.value)} placeholder={field.placeholder || ""} />
          )}
        </div>
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded">AR</span>
            <span className="text-xs text-muted-foreground">العربية</span>
          </div>
          {isMultiline ? (
            <Textarea value={valueAr} onChange={e => setValueAr(e.target.value)} rows={4} dir="rtl" placeholder="النص بالعربية" />
          ) : (
            <Input value={valueAr} onChange={e => setValueAr(e.target.value)} dir="rtl" placeholder="النص بالعربية" />
          )}
        </div>
      </div>
    </div>
  );
};

export default BlockEditorAdmin;
