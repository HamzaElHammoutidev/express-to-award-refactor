import { AlertTriangle, Mail, Briefcase, ClipboardList, UserPlus, Image, FileText, Eye } from "lucide-react";
import { Link } from "react-router-dom";
import StatsCard from "../components/StatsCard";
import StatusBadge from "../components/StatusBadge";
import { claims, contactMessages, jobOffers, jobApplications, spontaneousApps, mediaItems, sitePages, activityLog, claimStatusColors, contactStatusColors } from "../data/mockData";

const Dashboard = () => {
  const unreadMessages = contactMessages.filter(m => m.status === "non lu").length;
  const activeOffers = jobOffers.filter(j => j.status === "publié").length;
  const totalApps = jobApplications.length + spontaneousApps.length;

  return (
    <div className="space-y-6">
      {/* KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
        <StatsCard label="Sinistres" value={claims.length} icon={AlertTriangle} trend="+3 cette semaine" trendUp />
        <StatsCard label="Messages non lus" value={unreadMessages} icon={Mail} trend="2 en attente" />
        <StatsCard label="Offres actives" value={activeOffers} icon={Briefcase} />
        <StatsCard label="Candidatures" value={jobApplications.length} icon={ClipboardList} trend="+2 cette semaine" trendUp />
        <StatsCard label="Spontanées" value={spontaneousApps.length} icon={UserPlus} />
        <StatsCard label="Médias" value={mediaItems.length} icon={Image} />
      </div>

      {/* Quick Actions */}
      <div className="bg-card rounded-xl border border-border p-5">
        <h2 className="text-sm font-semibold text-foreground mb-3">Actions rapides</h2>
        <div className="flex flex-wrap gap-2">
          {[
            { label: "Nouvelle déclaration", href: "/admin/claims", icon: AlertTriangle },
            { label: "Nouvelle offre", href: "/admin/jobs", icon: Briefcase },
            { label: "Ajouter un média", href: "/admin/media", icon: Image },
            { label: "Gérer les pages", href: "/admin/pages", icon: FileText },
            { label: "Voir le site", href: "/", icon: Eye },
          ].map(a => (
            <Link
              key={a.label}
              to={a.href}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-muted text-sm font-medium text-foreground hover:bg-primary/10 hover:text-primary transition-colors"
            >
              <a.icon className="h-4 w-4" />
              {a.label}
            </Link>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Claims */}
        <div className="bg-card rounded-xl border border-border">
          <div className="flex items-center justify-between p-5 border-b border-border">
            <h2 className="text-sm font-semibold text-foreground">Dernières déclarations</h2>
            <Link to="/admin/claims" className="text-xs font-medium text-primary hover:underline">Voir tout</Link>
          </div>
          <div className="divide-y divide-border">
            {claims.slice(0, 4).map(c => (
              <div key={c.id} className="flex items-center justify-between px-5 py-3">
                <div className="min-w-0">
                  <p className="text-sm font-medium text-foreground truncate">{c.firstName} {c.lastName}</p>
                  <p className="text-xs text-muted-foreground">{c.glassType} · {c.city}</p>
                </div>
                <StatusBadge label={c.status} colorClass={claimStatusColors[c.status]} />
              </div>
            ))}
          </div>
        </div>

        {/* Recent Messages */}
        <div className="bg-card rounded-xl border border-border">
          <div className="flex items-center justify-between p-5 border-b border-border">
            <h2 className="text-sm font-semibold text-foreground">Derniers messages</h2>
            <Link to="/admin/messages" className="text-xs font-medium text-primary hover:underline">Voir tout</Link>
          </div>
          <div className="divide-y divide-border">
            {contactMessages.slice(0, 4).map(m => (
              <div key={m.id} className="flex items-center justify-between px-5 py-3">
                <div className="min-w-0">
                  <p className="text-sm font-medium text-foreground truncate">{m.firstName} {m.lastName}</p>
                  <p className="text-xs text-muted-foreground truncate">{m.subject}</p>
                </div>
                <StatusBadge label={m.status} colorClass={contactStatusColors[m.status]} />
              </div>
            ))}
          </div>
        </div>

        {/* Pages Status */}
        <div className="bg-card rounded-xl border border-border">
          <div className="flex items-center justify-between p-5 border-b border-border">
            <h2 className="text-sm font-semibold text-foreground">État des pages</h2>
            <Link to="/admin/pages" className="text-xs font-medium text-primary hover:underline">Gérer</Link>
          </div>
          <div className="divide-y divide-border">
            {sitePages.slice(0, 5).map(p => (
              <div key={p.id} className="flex items-center justify-between px-5 py-3">
                <div>
                  <p className="text-sm font-medium text-foreground">{p.title}</p>
                  <p className="text-xs text-muted-foreground">{p.sectionsCount} sections · {p.updatedAt}</p>
                </div>
                <StatusBadge
                  label={p.status}
                  colorClass={p.status === "publié" ? "bg-emerald-100 text-emerald-800" : "bg-amber-100 text-amber-800"}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Activity Log */}
        <div className="bg-card rounded-xl border border-border">
          <div className="flex items-center justify-between p-5 border-b border-border">
            <h2 className="text-sm font-semibold text-foreground">Activité récente</h2>
            <Link to="/admin/activity" className="text-xs font-medium text-primary hover:underline">Voir tout</Link>
          </div>
          <div className="divide-y divide-border">
            {activityLog.slice(0, 5).map(a => (
              <div key={a.id} className="px-5 py-3">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-semibold text-primary">{a.user}</span>
                  <span className="text-xs text-muted-foreground">·</span>
                  <span className="text-xs text-muted-foreground">{a.action}</span>
                </div>
                <p className="text-xs text-muted-foreground mt-0.5">{a.target} · {a.date}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
