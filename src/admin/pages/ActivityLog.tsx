import { activityLog } from "../data/mockData";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const moduleColors: Record<string, string> = {
  "Sinistres": "bg-amber-100 text-amber-800",
  "Pages": "bg-blue-100 text-blue-800",
  "Médiathèque": "bg-purple-100 text-purple-800",
  "Messages": "bg-sky-100 text-sky-800",
  "Offres d'emploi": "bg-teal-100 text-teal-800",
  "FAQ": "bg-emerald-100 text-emerald-800",
  "Paramètres": "bg-gray-100 text-gray-700",
  "Système": "bg-slate-100 text-slate-600",
};

const ActivityLog = () => {
  const [search, setSearch] = useState("");
  const filtered = activityLog.filter(a =>
    `${a.user} ${a.action} ${a.target} ${a.module}`.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-4">
      <div className="relative w-full sm:w-72">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input placeholder="Rechercher dans le journal..." value={search} onChange={e => setSearch(e.target.value)} className="pl-9 h-9" />
      </div>

      <div className="bg-card rounded-xl border border-border">
        <div className="divide-y divide-border">
          {filtered.map(entry => (
            <div key={entry.id} className="flex items-center gap-4 px-5 py-3.5 hover:bg-muted/20 transition-colors">
              <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <span className="text-xs font-bold text-primary">{entry.user.charAt(0)}</span>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-sm font-medium text-foreground">{entry.user}</span>
                  <span className="text-sm text-muted-foreground">{entry.action}</span>
                </div>
                <p className="text-xs text-muted-foreground mt-0.5 truncate">{entry.target}</p>
              </div>
              <span className={`text-[10px] px-2 py-0.5 rounded-full font-medium flex-shrink-0 ${moduleColors[entry.module] || "bg-gray-100 text-gray-700"}`}>
                {entry.module}
              </span>
              <span className="text-xs text-muted-foreground flex-shrink-0 hidden sm:block">{entry.date}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ActivityLog;
