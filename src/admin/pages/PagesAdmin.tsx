import { sitePages } from "../data/mockData";
import StatusBadge from "../components/StatusBadge";
import { ExternalLink, Eye, FileText } from "lucide-react";
import { Link } from "react-router-dom";

const PagesAdmin = () => {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-muted-foreground">
            Liste des pages du site — cliquez sur « Consulter » pour accéder aux blocs modifiables de chaque page.
          </p>
        </div>
      </div>

      <div className="bg-card rounded-xl border border-border overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border bg-muted/30">
                <th className="text-left px-5 py-3 text-xs font-semibold text-muted-foreground uppercase tracking-wide">Page</th>
                <th className="text-left px-5 py-3 text-xs font-semibold text-muted-foreground uppercase tracking-wide hidden md:table-cell">Slug</th>
                <th className="text-center px-5 py-3 text-xs font-semibold text-muted-foreground uppercase tracking-wide hidden lg:table-cell">Blocs</th>
                <th className="text-left px-5 py-3 text-xs font-semibold text-muted-foreground uppercase tracking-wide">Statut</th>
                <th className="text-left px-5 py-3 text-xs font-semibold text-muted-foreground uppercase tracking-wide hidden md:table-cell">Mis à jour</th>
                <th className="text-right px-5 py-3 text-xs font-semibold text-muted-foreground uppercase tracking-wide">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {sitePages.map(page => (
                <tr key={page.id} className="hover:bg-muted/20 transition-colors">
                  <td className="px-5 py-3">
                    <div className="flex items-center gap-3">
                      <div className="h-9 w-9 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <FileText className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-foreground">{page.title}</p>
                        <p className="text-xs text-muted-foreground md:hidden">{page.slug}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-5 py-3 hidden md:table-cell">
                    <code className="text-xs text-muted-foreground bg-muted px-1.5 py-0.5 rounded">{page.slug}</code>
                  </td>
                  <td className="px-5 py-3 text-center text-sm text-muted-foreground hidden lg:table-cell">{page.sectionsCount}</td>
                  <td className="px-5 py-3">
                    <StatusBadge
                      label={page.status}
                      colorClass={page.status === "publié" ? "bg-emerald-100 text-emerald-800" : "bg-amber-100 text-amber-800"}
                    />
                  </td>
                  <td className="px-5 py-3 text-xs text-muted-foreground hidden md:table-cell">{page.updatedAt}</td>
                  <td className="px-5 py-3">
                    <div className="flex items-center justify-end gap-1">
                      <Link
                        to={`/admin/pages/${page.id}`}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
                      >
                        <Eye className="h-3.5 w-3.5" />
                        Consulter
                      </Link>
                      <a
                        href={page.slug}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 rounded-md hover:bg-muted text-muted-foreground"
                        title="Voir la page"
                      >
                        <ExternalLink className="h-3.5 w-3.5" />
                      </a>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PagesAdmin;
