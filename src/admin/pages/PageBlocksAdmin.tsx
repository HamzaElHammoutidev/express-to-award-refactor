import { useParams, Link, useNavigate } from "react-router-dom";
import { sitePages } from "../data/mockData";
import { pageBlocks, PageBlock } from "../data/pageBlocksData";
import { ArrowLeft, Edit, Eye, Image, Video, Type, MousePointerClick, ExternalLink, Info } from "lucide-react";
import { Button } from "@/components/ui/button";

const typeIcons: Record<string, React.ElementType> = {
  hero: Video,
  text: Type,
  stats: Info,
  services: Info,
  cta: MousePointerClick,
  gallery: Image,
  video: Video,
  map: Info,
  faq: Info,
  testimonials: Info,
  process: Info,
  form: Info,
  partners: Image,
  slider: Image,
  values: Info,
  timeline: Info,
  certifications: Info,
  offers: Info,
  culture: Info,
  contact_info: Info,
  contact_form: Info,
  blog_hero: Info,
  declaration_form: Info,
  client_journey: Info,
};

const typeLabels: Record<string, string> = {
  hero: "Hero / Bannière",
  text: "Bloc texte",
  stats: "Chiffres clés",
  services: "Services",
  cta: "Appel à l'action",
  gallery: "Galerie photos",
  video: "Vidéo",
  map: "Carte / Map",
  faq: "FAQ",
  testimonials: "Témoignages",
  process: "Processus / Étapes",
  form: "Formulaire",
  partners: "Partenaires / Assurances",
  slider: "Slider / Bannière",
  values: "Valeurs",
  timeline: "Chronologie",
  certifications: "Certifications",
  offers: "Offres d'emploi",
  culture: "Culture d'entreprise",
  contact_info: "Informations de contact",
  contact_form: "Formulaire de contact",
  blog_hero: "En-tête Blog",
  declaration_form: "Formulaire déclaration",
  client_journey: "Parcours client",
};

const PageBlocksAdmin = () => {
  const { pageId } = useParams();
  const navigate = useNavigate();
  const page = sitePages.find(p => p.id === pageId);
  const blocks = pageBlocks[pageId || ""] || [];

  if (!page) {
    return (
      <div className="text-center py-20">
        <p className="text-muted-foreground">Page introuvable.</p>
        <Link to="/admin/pages" className="text-primary text-sm mt-2 inline-block">← Retour aux pages</Link>
      </div>
    );
  }

  return (
    <div className="space-y-5">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="icon" onClick={() => navigate("/admin/pages")} className="h-9 w-9">
            <ArrowLeft className="h-4 w-4" />
          </Button>
          <div>
            <h2 className="text-lg font-semibold text-foreground">{page.title}</h2>
            <p className="text-xs text-muted-foreground">
              {blocks.length} bloc{blocks.length > 1 ? "s" : ""} modifiable{blocks.length > 1 ? "s" : ""} · <code className="bg-muted px-1 py-0.5 rounded">{page.slug}</code>
            </p>
          </div>
        </div>
        <a
          href={page.slug}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors"
        >
          <ExternalLink className="h-3.5 w-3.5" />
          Voir la page
        </a>
      </div>

      {/* Info banner for dynamic sections */}
      {blocks.some(b => b.managedExternally) && (
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 flex items-start gap-3">
          <Info className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" />
          <div className="text-sm text-amber-800">
            <p className="font-medium mb-1">Sections gérées séparément</p>
            <p className="text-xs text-amber-700">
              Certains blocs (offres d'emploi, centres, FAQ, témoignages…) sont gérés dans leurs modules dédiés du back-office. Vous pouvez modifier ici les textes d'introduction et les visuels de ces sections.
            </p>
          </div>
        </div>
      )}

      {/* Blocks list */}
      <div className="bg-card rounded-xl border border-border divide-y divide-border">
        {blocks.map((block, i) => {
          const Icon = typeIcons[block.type] || Info;
          return (
            <div key={block.id} className="flex items-center gap-4 px-5 py-4 hover:bg-muted/20 transition-colors">
              <span className="text-xs text-muted-foreground font-mono w-6 text-center flex-shrink-0">{i + 1}</span>
              <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Icon className="h-5 w-5 text-primary" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-foreground">{block.title}</p>
                <div className="flex items-center gap-2 mt-0.5">
                  <span className="text-[11px] text-muted-foreground">{typeLabels[block.type] || block.type}</span>
                  {block.managedExternally && (
                    <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-amber-100 text-amber-700 font-medium">
                      Géré dans {block.externalModule}
                    </span>
                  )}
                </div>
              </div>
              <Link
                to={`/admin/pages/${pageId}/blocks/${block.id}`}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium bg-primary/10 text-primary hover:bg-primary/20 transition-colors flex-shrink-0"
              >
                {block.managedExternally ? (
                  <>
                    <Eye className="h-3.5 w-3.5" />
                    Consulter
                  </>
                ) : (
                  <>
                    <Edit className="h-3.5 w-3.5" />
                    Modifier
                  </>
                )}
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PageBlocksAdmin;
