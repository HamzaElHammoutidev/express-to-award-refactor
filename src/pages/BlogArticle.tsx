import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";

const articleData = {
  id: "bris-de-glace-demarches",
  category: "Assurance",
  date: "12 mars 2026",
  readTime: "6 minutes",
  author: "Pare-Brise Express",
  title: "Bris de glace : quelles démarches suivre sans perdre de temps ?",
  subtitle: "Entre déclaration, justificatifs, choix du centre et prise en charge, certaines étapes peuvent sembler complexes. Voici les bons réflexes pour accélérer votre dossier et éviter les erreurs les plus fréquentes.",
  tags: ["Assurance", "Bris de glace", "Pare-brise", "Conseils"],
  toc: [
    { id: "reflexes", label: "Les premiers réflexes" },
    { id: "assurance", label: "Préparer la partie assurance" },
    { id: "dossier", label: "Les éléments utiles pour le dossier" },
    { id: "erreurs", label: "Les erreurs à éviter" },
    { id: "conclusion", label: "Ce qu'il faut retenir" },
  ],
};

const relatedArticles = [
  { id: "rouler-avec-impact", category: "Pare-brise", date: "08 mars 2026", title: "Peut-on rouler avec un impact sur le pare-brise ?", excerpt: "Un point clair pour comprendre à partir de quel moment un simple impact devient un vrai sujet de sécurité." },
  { id: "lunette-arriere-cassee", category: "Lunette arrière", date: "28 février 2026", title: "Lunette arrière cassée : que faire immédiatement ?", excerpt: "Les premières actions utiles pour sécuriser le véhicule et préparer l'intervention dans de bonnes conditions." },
  { id: "sans-avance-frais", category: "Assurance", date: "05 mars 2026", title: "Bris de glace sans avance de frais : comment cela fonctionne ?", excerpt: "Un article simple pour comprendre la logique de prise en charge et les informations les plus utiles." },
];

const BlogArticle = () => {
  const { slug } = useParams();

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <PageHeader
        breadcrumbs={[{ label: "Blog", href: "/blog" }, { label: articleData.category }]}
        title={articleData.title}
      />

      {/* Content */}
      <section className="section-padding py-6 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-6 items-start">
          {/* Main article */}
          <article className="bg-white/70 border border-border/60 rounded-[34px] p-7 md:p-9 shadow-lg">
            {/* Mini cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 mb-7">
              {[
                { label: "Temps estimé", value: articleData.readTime + " de lecture" },
                { label: "Catégorie", value: articleData.category + " / Bris de glace" },
                { label: "Mise à jour", value: articleData.date },
              ].map((item, i) => (
                <div key={i} className="bg-white/70 border border-border/60 rounded-[22px] p-4">
                  <span className="block text-[12px] font-extrabold tracking-[0.08em] uppercase text-muted-foreground mb-2.5">{item.label}</span>
                  <strong className="text-[18px] leading-[1.35]">{item.value}</strong>
                </div>
              ))}
            </div>

            {/* Article body */}
            <div className="space-y-5">
              <p className="text-muted-foreground text-[17px] leading-[1.95]">
                Lorsqu'un impact ou une fissure apparaît sur un vitrage automobile, la rapidité de réaction joue un rôle important. Plus l'endommagement est traité tôt, plus il est simple d'organiser l'intervention et de sécuriser le véhicule dans de bonnes conditions.
              </p>
              <p className="text-muted-foreground text-[17px] leading-[1.95]">
                Dans la plupart des cas, la première étape consiste à réunir les informations utiles : véhicule concerné, immatriculation, coordonnées, type de sinistre et assurance éventuelle.
              </p>

              <h2 id="reflexes" className="text-[clamp(24px,3vw,40px)] font-black leading-[1.05] tracking-[-0.04em] pt-6">
                Les premiers <span className="text-primary italic font-bold">réflexes à adopter</span>
              </h2>
              <p className="text-muted-foreground text-[17px] leading-[1.95]">
                Avant même de penser à la réparation ou au remplacement, il est important d'évaluer rapidement la situation. Un vitrage endommagé peut avoir un impact sur la visibilité, le confort de conduite et la sécurité globale du véhicule.
              </p>
              <ul className="space-y-3 my-5">
                {["Éviter de laisser l'impact évoluer trop longtemps.", "Noter les informations du véhicule dès le départ.", "Préparer un moyen de contact joignable rapidement.", "Photographier le dommage si cela facilite le traitement du dossier."].map((item, i) => (
                  <li key={i} className="relative pl-7 text-muted-foreground text-[16px] leading-[1.85]">
                    <span className="absolute left-0 top-[11px] w-2.5 h-2.5 rounded-full bg-primary shadow-[0_0_0_7px_rgba(228,181,44,0.10)]" />
                    {item}
                  </li>
                ))}
              </ul>

              {/* Quote */}
              <div className="relative overflow-hidden my-8 p-7 rounded-[28px] bg-gradient-to-br from-foreground to-foreground/90 text-background shadow-xl">
                <div className="absolute -top-28 -right-20 w-[280px] h-[280px] rounded-full bg-[radial-gradient(circle,rgba(228,181,44,0.22),transparent_70%)]" />
                <p className="relative z-10 text-background/90 text-[20px] md:text-[22px] leading-[1.65] tracking-[-0.02em]">
                  Une déclaration simple, bien renseignée et envoyée rapidement permet souvent de réduire les délais de qualification et d'orientation du dossier.
                </p>
              </div>

              <h2 id="assurance" className="text-[clamp(24px,3vw,40px)] font-black leading-[1.05] tracking-[-0.04em] pt-6">
                Comment bien préparer la partie <span className="text-primary italic font-bold">assurance</span>
              </h2>
              <p className="text-muted-foreground text-[17px] leading-[1.95]">
                Selon les contrats, les modalités de prise en charge peuvent varier. L'essentiel est d'apporter des informations claires dès le départ afin d'éviter les allers-retours inutiles.
              </p>
              <p className="text-muted-foreground text-[17px] leading-[1.95]">
                Une fois les informations principales collectées, l'équipe de traitement peut orienter le dossier et planifier la suite du parcours plus facilement.
              </p>

              <h2 id="dossier" className="text-[clamp(24px,3vw,40px)] font-black leading-[1.05] tracking-[-0.04em] pt-6">
                Les éléments utiles pour un <span className="text-primary italic font-bold">dossier clair</span>
              </h2>
              <p className="text-muted-foreground text-[17px] leading-[1.95]">
                Pour simplifier le traitement, certaines informations restent particulièrement utiles au moment de la déclaration.
              </p>
              <ul className="space-y-3 my-5">
                {["Ville ou zone d'intervention souhaitée.", "Marque, modèle et année du véhicule.", "Immatriculation complète.", "Description simple du dommage observé.", "Coordonnées exactes pour être rappelé rapidement."].map((item, i) => (
                  <li key={i} className="relative pl-7 text-muted-foreground text-[16px] leading-[1.85]">
                    <span className="absolute left-0 top-[11px] w-2.5 h-2.5 rounded-full bg-primary shadow-[0_0_0_7px_rgba(228,181,44,0.10)]" />
                    {item}
                  </li>
                ))}
              </ul>

              <h2 id="erreurs" className="text-[clamp(24px,3vw,40px)] font-black leading-[1.05] tracking-[-0.04em] pt-6">
                Les erreurs à <span className="text-primary italic font-bold">éviter</span>
              </h2>
              <p className="text-muted-foreground text-[17px] leading-[1.95]">
                L'une des erreurs les plus fréquentes consiste à vouloir surcharger la déclaration avec trop d'informations dès la première étape. À l'inverse, une déclaration trop incomplète rallonge aussi le traitement.
              </p>
              <p className="text-muted-foreground text-[17px] leading-[1.95]">
                Il est également préférable d'éviter les approximations sur les coordonnées, l'immatriculation ou la localisation.
              </p>

              <h2 id="conclusion" className="text-[clamp(24px,3vw,40px)] font-black leading-[1.05] tracking-[-0.04em] pt-6">
                Ce qu'il faut retenir
              </h2>
              <p className="text-muted-foreground text-[17px] leading-[1.95]">
                Un bon parcours de déclaration repose sur trois principes simples : une saisie rapide, quelques informations essentielles bien renseignées et une reprise par le back-office pour la qualification détaillée.
              </p>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="sticky top-24 space-y-5">
            {/* TOC */}
            <div className="bg-white/70 border border-border/60 rounded-[28px] p-6 shadow-lg">
              <h3 className="text-[22px] font-bold tracking-[-0.03em] mb-4">Sommaire</h3>
              <nav className="space-y-2.5">
                {articleData.toc.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    className="block px-3.5 py-3 rounded-2xl bg-white/60 border border-border/60 text-foreground font-bold leading-[1.5] hover:bg-primary/10 hover:border-primary/20 hover:translate-x-1 transition-all"
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
            </div>

            {/* Info */}
            <div className="bg-white/70 border border-border/60 rounded-[28px] p-6 shadow-lg">
              <h3 className="text-[22px] font-bold tracking-[-0.03em] mb-4">Informations</h3>
              <div className="space-y-3.5">
                {[
                  { label: "Publié le", value: articleData.date },
                  { label: "Auteur", value: articleData.author },
                  { label: "Lecture", value: articleData.readTime },
                ].map((item, i) => (
                  <div key={i}>
                    <span className="block text-[12px] font-extrabold tracking-[0.08em] uppercase text-muted-foreground mb-2">{item.label}</span>
                    <strong className="text-[16px] leading-[1.6]">{item.value}</strong>
                  </div>
                ))}
              </div>
            </div>

            {/* Tags */}
            <div className="bg-white/70 border border-border/60 rounded-[28px] p-6 shadow-lg">
              <h3 className="text-[22px] font-bold tracking-[-0.03em] mb-4">Tags</h3>
              <div className="flex gap-2.5 flex-wrap">
                {articleData.tags.map((tag) => (
                  <span key={tag} className="px-3.5 py-2 rounded-full bg-white/60 border border-border/60 text-[13px] font-extrabold">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="relative overflow-hidden bg-gradient-to-br from-foreground to-foreground/90 text-background rounded-[28px] p-6 shadow-xl">
              <div className="absolute -top-24 -right-24 w-[240px] h-[240px] rounded-full bg-[radial-gradient(circle,rgba(228,181,44,0.24),transparent_70%)]" />
              <div className="relative z-10">
                <h3 className="text-[22px] font-bold tracking-[-0.03em] mb-4">Vous avez un sinistre ?</h3>
                <p className="text-background/75 leading-[1.8] mb-5">
                  Déclarez votre besoin rapidement ou demandez à être rappelé pour un traitement simple et structuré.
                </p>
                <div className="flex gap-3 flex-wrap">
                  <Link to="/declaration" className="inline-flex items-center justify-center min-h-[48px] px-6 rounded-full bg-primary text-primary-foreground font-extrabold text-sm shadow-[0_14px_32px_rgba(228,181,44,0.22)]">
                    Déclarer un sinistre
                  </Link>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* Related */}
      <section className="section-padding pb-24">
        <div className="text-center mb-10">
          <span className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-white/65 border border-border/60 text-muted-foreground text-[12px] font-extrabold tracking-[0.1em] uppercase mb-4">
            <span className="w-2 h-2 rounded-full bg-primary shadow-[0_0_0_6px_rgba(228,181,44,0.10)]" />
            À lire aussi
          </span>
          <h2 className="text-[clamp(28px,4.6vw,52px)] font-black leading-[1.02] tracking-[-0.05em]">
            D'autres articles dans le même <span className="text-primary italic font-bold">univers</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {relatedArticles.map((article, i) => (
            <motion.article
              key={article.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
              className="bg-white/70 border border-border/60 rounded-[28px] overflow-hidden shadow-lg transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/20"
            >
              <div className="min-h-[200px] bg-gradient-to-br from-foreground/10 to-foreground/5 relative">
                <div className="absolute inset-0 bg-gradient-to-b from-foreground/5 via-foreground/10 to-foreground/50" />
              </div>
              <div className="p-5 pb-6">
                <div className="flex items-center gap-3 flex-wrap mb-3 text-muted-foreground text-sm font-bold">
                  <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-[12px] font-extrabold tracking-[0.08em] uppercase">{article.category}</span>
                  <span>{article.date}</span>
                </div>
                <h3 className="text-[20px] font-bold leading-[1.18] tracking-[-0.03em] mb-3">{article.title}</h3>
                <p className="text-muted-foreground text-[15px] leading-[1.8] mb-4">{article.excerpt}</p>
                <Link to={`/blog/${article.id}`} className="inline-flex items-center gap-2.5 text-foreground font-extrabold group">
                  <span>Lire l'article</span>
                  <ArrowRight className="h-4 w-4 text-primary group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BlogArticle;
