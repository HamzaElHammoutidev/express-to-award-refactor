import { useState } from "react";
import { Link2, RefreshCw, CheckCircle2, XCircle, Settings, ArrowRightLeft, Database, FileText, Users, Package, AlertTriangle } from "lucide-react";

const syncModules = [
  { id: "clients", label: "Clients / Contacts", icon: Users, status: "synced", lastSync: "09/04/2026 14:32", count: 1247 },
  { id: "sinistres", label: "Déclarations de sinistre", icon: AlertTriangle, status: "synced", lastSync: "09/04/2026 14:30", count: 342 },
  { id: "factures", label: "Factures", icon: FileText, status: "error", lastSync: "09/04/2026 10:15", count: 856 },
  { id: "produits", label: "Produits / Stock vitrage", icon: Package, status: "synced", lastSync: "09/04/2026 13:00", count: 15200 },
  { id: "centres", label: "Centres / Agences", icon: Database, status: "pending", lastSync: "08/04/2026 18:45", count: 30 },
];

const StatusDot = ({ status }: { status: string }) => {
  const colors: Record<string, string> = {
    synced: "bg-emerald-500",
    error: "bg-red-500",
    pending: "bg-amber-500",
  };
  const labels: Record<string, string> = {
    synced: "Synchronisé",
    error: "Erreur",
    pending: "En attente",
  };
  return (
    <span className="inline-flex items-center gap-1.5 text-xs font-medium">
      <span className={`w-2 h-2 rounded-full ${colors[status]}`} />
      {labels[status]}
    </span>
  );
};

const OdooInterfaceAdmin = () => {
  const [syncing, setSyncing] = useState<string | null>(null);

  const handleSync = (id: string) => {
    setSyncing(id);
    setTimeout(() => setSyncing(null), 2000);
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight flex items-center gap-2">
            <Link2 className="h-6 w-6 text-primary" />
            Interfaçage Odoo
          </h1>
          <p className="text-sm text-muted-foreground mt-1">
            Gérez la synchronisation entre le site et votre ERP Odoo
          </p>
        </div>
        <div className="flex gap-2">
          <button className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-muted text-sm font-medium hover:bg-muted/80 transition-colors">
            <Settings className="h-4 w-4" />
            Configuration
          </button>
          <button
            onClick={() => handleSync("all")}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary/90 transition-colors"
          >
            <RefreshCw className={`h-4 w-4 ${syncing === "all" ? "animate-spin" : ""}`} />
            Tout synchroniser
          </button>
        </div>
      </div>

      {/* Connection Status */}
      <div className="rounded-xl border border-border bg-card p-5">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-[#714B67] flex items-center justify-center">
              <span className="text-white font-bold text-sm">Oo</span>
            </div>
            <div>
              <p className="font-semibold text-sm">Odoo 17 Community</p>
              <p className="text-xs text-muted-foreground">https://erp.parebriseexpress.ma</p>
            </div>
          </div>
          <div className="flex items-center gap-2 text-emerald-600">
            <CheckCircle2 className="h-4 w-4" />
            <span className="text-sm font-medium">Connecté</span>
          </div>
        </div>
      </div>

      {/* Sync Modules */}
      <div>
        <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
          <ArrowRightLeft className="h-5 w-5 text-primary" />
          Modules de synchronisation
        </h2>
        <div className="space-y-3">
          {syncModules.map((mod) => (
            <div
              key={mod.id}
              className="rounded-xl border border-border bg-card p-4 flex items-center justify-between flex-wrap gap-3"
            >
              <div className="flex items-center gap-3 min-w-[200px]">
                <div className="w-9 h-9 rounded-lg bg-muted flex items-center justify-center">
                  <mod.icon className="h-4 w-4 text-foreground" />
                </div>
                <div>
                  <p className="text-sm font-semibold">{mod.label}</p>
                  <p className="text-xs text-muted-foreground">{mod.count.toLocaleString()} enregistrements</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <StatusDot status={mod.status} />
                <span className="text-xs text-muted-foreground hidden sm:inline">
                  {mod.lastSync}
                </span>
                <button
                  onClick={() => handleSync(mod.id)}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-muted text-xs font-medium hover:bg-muted/80 transition-colors"
                >
                  <RefreshCw className={`h-3 w-3 ${syncing === mod.id ? "animate-spin" : ""}`} />
                  Sync
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Logs */}
      <div>
        <h2 className="text-lg font-semibold mb-4">Journal de synchronisation</h2>
        <div className="rounded-xl border border-border bg-card overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/40">
                <th className="text-left px-4 py-2.5 font-medium text-muted-foreground">Date</th>
                <th className="text-left px-4 py-2.5 font-medium text-muted-foreground">Module</th>
                <th className="text-left px-4 py-2.5 font-medium text-muted-foreground">Statut</th>
                <th className="text-left px-4 py-2.5 font-medium text-muted-foreground hidden md:table-cell">Détails</th>
              </tr>
            </thead>
            <tbody>
              {[
                { date: "09/04/2026 14:32", module: "Clients", status: "success", detail: "12 nouveaux contacts synchronisés" },
                { date: "09/04/2026 14:30", module: "Sinistres", status: "success", detail: "3 déclarations envoyées vers Odoo" },
                { date: "09/04/2026 10:15", module: "Factures", status: "error", detail: "Timeout - réessayer la synchronisation" },
                { date: "08/04/2026 18:45", module: "Centres", status: "success", detail: "Mise à jour des horaires de 2 agences" },
                { date: "08/04/2026 16:00", module: "Produits", status: "success", detail: "Stock mis à jour : 47 références modifiées" },
              ].map((log, i) => (
                <tr key={i} className="border-b border-border last:border-0">
                  <td className="px-4 py-2.5 text-muted-foreground">{log.date}</td>
                  <td className="px-4 py-2.5 font-medium">{log.module}</td>
                  <td className="px-4 py-2.5">
                    {log.status === "success" ? (
                      <span className="inline-flex items-center gap-1 text-emerald-600 text-xs font-medium">
                        <CheckCircle2 className="h-3.5 w-3.5" /> Succès
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 text-red-500 text-xs font-medium">
                        <XCircle className="h-3.5 w-3.5" /> Erreur
                      </span>
                    )}
                  </td>
                  <td className="px-4 py-2.5 text-muted-foreground hidden md:table-cell">{log.detail}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default OdooInterfaceAdmin;
