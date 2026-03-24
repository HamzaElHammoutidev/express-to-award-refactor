import { useState } from "react";
import { mediaItems, MediaItem } from "../data/mockData";
import { Search, Upload, Trash2, Eye, Grid, List } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

const typeLabels: Record<string, string> = { image: "Image", video: "Vidéo", logo: "Logo", icon: "Icône", banner: "Bannière", document: "Document" };
const typeColors: Record<string, string> = { image: "bg-blue-100 text-blue-700", video: "bg-purple-100 text-purple-700", logo: "bg-amber-100 text-amber-700", icon: "bg-teal-100 text-teal-700", banner: "bg-rose-100 text-rose-700", document: "bg-gray-100 text-gray-700" };

const MediaLibrary = () => {
  const [search, setSearch] = useState("");
  const [typeFilter, setTypeFilter] = useState("all");
  const [view, setView] = useState<"grid" | "list">("grid");
  const [selected, setSelected] = useState<MediaItem | null>(null);

  const filtered = mediaItems.filter(m => {
    const matchSearch = m.name.toLowerCase().includes(search.toLowerCase());
    const matchType = typeFilter === "all" || m.type === typeFilter;
    return matchSearch && matchType;
  });

  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <div className="flex items-center gap-2 w-full sm:w-auto">
          <div className="relative flex-1 sm:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Rechercher..." value={search} onChange={e => setSearch(e.target.value)} className="pl-9 h-9" />
          </div>
          <Select value={typeFilter} onValueChange={setTypeFilter}>
            <SelectTrigger className="w-32 h-9"><SelectValue /></SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Tous</SelectItem>
              <SelectItem value="image">Images</SelectItem>
              <SelectItem value="video">Vidéos</SelectItem>
              <SelectItem value="logo">Logos</SelectItem>
              <SelectItem value="icon">Icônes</SelectItem>
              <SelectItem value="banner">Bannières</SelectItem>
              <SelectItem value="document">Documents</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex border border-border rounded-lg overflow-hidden">
            <button onClick={() => setView("grid")} className={`p-2 ${view === "grid" ? "bg-muted" : ""}`}><Grid className="h-4 w-4" /></button>
            <button onClick={() => setView("list")} className={`p-2 ${view === "list" ? "bg-muted" : ""}`}><List className="h-4 w-4" /></button>
          </div>
          <Button size="sm" className="gap-1.5"><Upload className="h-4 w-4" /> Upload</Button>
        </div>
      </div>

      {view === "grid" ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {filtered.map(media => (
            <div key={media.id} onClick={() => setSelected(media)} className="group bg-card rounded-xl border border-border overflow-hidden cursor-pointer hover:shadow-md transition-shadow">
              <div className="aspect-video bg-muted/50 flex items-center justify-center relative">
                {media.type === "video" ? (
                  <div className="text-3xl">🎬</div>
                ) : (
                  <img src={media.url} alt={media.alt} className="w-full h-full object-cover" />
                )}
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors flex items-center justify-center">
                  <Eye className="h-6 w-6 text-card opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
              <div className="p-3">
                <p className="text-xs font-medium text-foreground truncate">{media.name}</p>
                <div className="flex items-center justify-between mt-1">
                  <span className={`text-[10px] px-1.5 py-0.5 rounded-full font-medium ${typeColors[media.type]}`}>{typeLabels[media.type]}</span>
                  <span className="text-[10px] text-muted-foreground">{media.size}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="bg-card rounded-xl border border-border overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border bg-muted/30">
                <th className="text-left px-5 py-3 text-xs font-semibold text-muted-foreground uppercase">Fichier</th>
                <th className="text-left px-5 py-3 text-xs font-semibold text-muted-foreground uppercase hidden md:table-cell">Type</th>
                <th className="text-left px-5 py-3 text-xs font-semibold text-muted-foreground uppercase hidden lg:table-cell">Usage</th>
                <th className="text-left px-5 py-3 text-xs font-semibold text-muted-foreground uppercase hidden md:table-cell">Taille</th>
                <th className="text-right px-5 py-3 text-xs font-semibold text-muted-foreground uppercase">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {filtered.map(media => (
                <tr key={media.id} className="hover:bg-muted/20">
                  <td className="px-5 py-3 text-sm font-medium text-foreground">{media.name}</td>
                  <td className="px-5 py-3 hidden md:table-cell">
                    <span className={`text-[10px] px-1.5 py-0.5 rounded-full font-medium ${typeColors[media.type]}`}>{typeLabels[media.type]}</span>
                  </td>
                  <td className="px-5 py-3 text-xs text-muted-foreground hidden lg:table-cell">{media.usage}</td>
                  <td className="px-5 py-3 text-xs text-muted-foreground hidden md:table-cell">{media.size}</td>
                  <td className="px-5 py-3">
                    <div className="flex justify-end gap-1">
                      <button onClick={() => setSelected(media)} className="p-1.5 rounded-md hover:bg-muted text-muted-foreground"><Eye className="h-3.5 w-3.5" /></button>
                      <button className="p-1.5 rounded-md hover:bg-destructive/10 text-destructive"><Trash2 className="h-3.5 w-3.5" /></button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Detail Dialog */}
      <Dialog open={!!selected} onOpenChange={() => setSelected(null)}>
        <DialogContent className="max-w-md">
          <DialogHeader><DialogTitle>{selected?.name}</DialogTitle></DialogHeader>
          {selected && (
            <div className="space-y-4 pt-2">
              <div className="aspect-video bg-muted rounded-lg overflow-hidden">
                {selected.type === "video" ? <div className="w-full h-full flex items-center justify-center text-4xl">🎬</div> : <img src={selected.url} alt={selected.alt} className="w-full h-full object-cover" />}
              </div>
              <div className="grid grid-cols-2 gap-3 text-sm">
                <div><p className="text-xs text-muted-foreground">Type</p><p className="font-medium">{typeLabels[selected.type]}</p></div>
                <div><p className="text-xs text-muted-foreground">Taille</p><p className="font-medium">{selected.size}</p></div>
                <div><p className="text-xs text-muted-foreground">Usage</p><p className="font-medium">{selected.usage}</p></div>
                <div><p className="text-xs text-muted-foreground">Ajouté le</p><p className="font-medium">{selected.uploadedAt}</p></div>
              </div>
              <div><p className="text-xs text-muted-foreground mb-1">Texte alternatif</p><Input defaultValue={selected.alt} /></div>
              <div className="flex gap-2">
                <Button variant="outline" className="flex-1">Remplacer</Button>
                <Button variant="destructive" className="flex-1">Supprimer</Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default MediaLibrary;
