import { useState } from "react";
import { contactMessages, contactStatusColors, ContactStatus } from "../data/mockData";
import StatusBadge from "../components/StatusBadge";
import { Search, Download, Eye } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import type { ContactMessage } from "../data/mockData";

const statuses: ContactStatus[] = ["non lu", "lu", "en cours", "répondu", "archivé"];

const MessagesAdmin = () => {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [selected, setSelected] = useState<ContactMessage | null>(null);

  const filtered = contactMessages.filter(m => {
    const matchSearch = `${m.firstName} ${m.lastName} ${m.subject}`.toLowerCase().includes(search.toLowerCase());
    const matchStatus = statusFilter === "all" || m.status === statusFilter;
    return matchSearch && matchStatus;
  });

  const unreadCount = contactMessages.filter(m => m.status === "non lu").length;

  return (
    <div className="space-y-4">
      {unreadCount > 0 && (
        <div className="bg-primary/10 border border-primary/20 rounded-xl px-5 py-3 flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
          <p className="text-sm font-medium text-foreground">{unreadCount} message{unreadCount > 1 ? "s" : ""} non lu{unreadCount > 1 ? "s" : ""}</p>
        </div>
      )}

      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <div className="flex items-center gap-2 w-full sm:w-auto">
          <div className="relative flex-1 sm:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Rechercher..." value={search} onChange={e => setSearch(e.target.value)} className="pl-9 h-9" />
          </div>
          <Select value={statusFilter} onValueChange={setStatusFilter}>
            <SelectTrigger className="w-36 h-9"><SelectValue /></SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Tous les statuts</SelectItem>
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
                <th className="text-left px-5 py-3 text-xs font-semibold text-muted-foreground uppercase">Expéditeur</th>
                <th className="text-left px-5 py-3 text-xs font-semibold text-muted-foreground uppercase hidden md:table-cell">Sujet</th>
                <th className="text-left px-5 py-3 text-xs font-semibold text-muted-foreground uppercase">Statut</th>
                <th className="text-left px-5 py-3 text-xs font-semibold text-muted-foreground uppercase hidden md:table-cell">Date</th>
                <th className="text-right px-5 py-3 text-xs font-semibold text-muted-foreground uppercase">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {filtered.map(msg => (
                <tr key={msg.id} className={`hover:bg-muted/20 transition-colors ${msg.status === "non lu" ? "bg-primary/5" : ""}`}>
                  <td className="px-5 py-3">
                    <p className={`text-sm ${msg.status === "non lu" ? "font-bold" : "font-medium"} text-foreground`}>{msg.firstName} {msg.lastName}</p>
                    <p className="text-xs text-muted-foreground">{msg.email}</p>
                  </td>
                  <td className="px-5 py-3 text-sm text-muted-foreground hidden md:table-cell truncate max-w-[200px]">{msg.subject}</td>
                  <td className="px-5 py-3"><StatusBadge label={msg.status} colorClass={contactStatusColors[msg.status]} /></td>
                  <td className="px-5 py-3 text-xs text-muted-foreground hidden md:table-cell">{msg.date}</td>
                  <td className="px-5 py-3">
                    <div className="flex justify-end">
                      <button onClick={() => setSelected(msg)} className="p-1.5 rounded-md hover:bg-muted text-muted-foreground"><Eye className="h-3.5 w-3.5" /></button>
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
          <DialogHeader><DialogTitle>Message de {selected?.firstName} {selected?.lastName}</DialogTitle></DialogHeader>
          {selected && (
            <div className="space-y-4 pt-2">
              <div className="grid grid-cols-2 gap-3 text-sm">
                <div><p className="text-xs text-muted-foreground">Email</p><p className="font-medium break-all">{selected.email}</p></div>
                <div><p className="text-xs text-muted-foreground">Téléphone</p><p className="font-medium">{selected.phone}</p></div>
                <div><p className="text-xs text-muted-foreground">Sujet</p><p className="font-medium">{selected.subject}</p></div>
                <div><p className="text-xs text-muted-foreground">Date</p><p className="font-medium">{selected.date}</p></div>
              </div>
              <div><p className="text-xs text-muted-foreground mb-1">Message</p><p className="text-sm bg-muted/50 p-4 rounded-lg">{selected.message}</p></div>
              <div>
                <Label>Changer le statut</Label>
                <Select defaultValue={selected.status}>
                  <SelectTrigger className="mt-1"><SelectValue /></SelectTrigger>
                  <SelectContent>{statuses.map(s => <SelectItem key={s} value={s} className="capitalize">{s}</SelectItem>)}</SelectContent>
                </Select>
              </div>
              <div><Label>Notes internes</Label><Textarea className="mt-1" rows={2} defaultValue={selected.notes} placeholder="Ajouter une note..." /></div>
              <Button className="w-full">Sauvegarder</Button>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default MessagesAdmin;
