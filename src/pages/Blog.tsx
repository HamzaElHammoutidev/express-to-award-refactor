import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Search, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";

const categories = ["Tous", "Pare-brise", "Bris de glace", "Assurance", "Entretien", "Sécurité", "Conseils auto"];

const articles = [
  {
    id: "bris-de-glace-demarches",
    category: "Assurance",
    date: "12 mars 2026",
    readTime: "6 min",
    title: "Bris de glace : quelles démarches suivre sans perdre de temps ?",
    excerpt: "Entre déclaration, prise en charge, justificatifs et choix du centre, le parcours peut sembler complexe. Cet article vous aide à comprendre les étapes essentielles.",
    featured: true,
  },
  {
    id: "rouler-avec-impact",
    category: "Pare-brise",
    date: "08 mars 2026",
    readTime: "4 min",
    title: "Peut-on rouler avec un impact sur le pare-brise ?",
    excerpt: "Découvrez à partir de quel moment un simple impact devient un vrai risque pour la sécurité et la visibilité du conducteur.",
  },
  {
    id: "sans-avance-frais",
    category: "Assurance",
    date: "05 mars 2026",
    readTime: "5 min",
    title: "Bris de glace sans avance de frais : comment cela fonctionne ?",
    excerpt: "Un article pratique pour comprendre la prise en charge, les documents nécessaires et les cas les plus fréquents.",
  },
  {
    id: "remplacer-vitrage-rapidement",
    category: "Sécurité",
    date: "02 mars 2026",
    readTime: "5 min",
    title: "Pourquoi remplacer un vitrage endommagé rapidement ?",
    excerpt: "Structure du véhicule, visibilité, sécurité et conformité : les enjeux d'un vitrage abîmé sont souvent sous-estimés.",
  },
  {
    id: "lunette-arriere-cassee",
    category: "Lunette arrière",
    date: "28 février 2026",
    readTime: "4 min",
    title: "Lunette arrière cassée : que faire immédiatement ?",
    excerpt: "Les bons réflexes pour protéger le véhicule, sécuriser l'intérieur et préparer l'intervention dans de bonnes conditions.",
  },
  {
    id: "vitre-laterale-reparation",
    category: "Vitre latérale",
    date: "24 février 2026",
    readTime: "5 min",
    title: "Vitre latérale endommagée : réparation ou remplacement ?",
    excerpt: "Un point clair sur les différents cas de figure, les types de dommages et la logique d'intervention selon la situation.",
  },
  {
    id: "entretien-vitrage",
    category: "Conseils auto",
    date: "20 février 2026",
    readTime: "4 min",
    title: "Les bons gestes pour préserver durablement votre vitrage automobile",
    excerpt: "Nettoyage, prévention, visibilité et entretien général : quelques habitudes simples peuvent faire une vraie différence.",
  },
];

const Blog = () => {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState("Tous");
  const [searchQuery, setSearchQuery] = useState("");

  const featured = articles.find((a) => a.featured);
  const filteredArticles = articles.filter((a) => {
    const matchCat = activeCategory === "Tous" || a.category === activeCategory;
    const matchSearch = a.title.toLowerCase().includes(searchQuery.toLowerCase()) || a.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCat && matchSearch && !a.featured;
  });

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <PageHeader
        breadcrumbs={[{ label: "Blog" }]}
        title={t("Nos conseils et actualités", "نصائحنا وأخبارنا")}
        subtitle={t(
          "Retrouvez ici tous nos articles autour du vitrage automobile, du bris de glace, de l'assurance, de l'entretien et des bonnes pratiques.",
          "اكتشفوا جميع مقالاتنا حول زجاج السيارات والتأمين والصيانة والنصائح العملية."
        )}
      />

      {/* Search */}
      <div className="relative z-10 -mt-6 section-padding">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-3 bg-white/80 backdrop-blur-sm border border-border/60 rounded-full shadow-lg px-5 py-2">
            <Search className="h-5 w-5 text-muted-foreground flex-shrink-0" />
            <input
              type="text"
              placeholder={t("Rechercher un article, un sujet ou un conseil...", "ابحث عن مقال أو موضوع أو نصيحة...")}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1 bg-transparent border-0 outline-none text-foreground placeholder:text-muted-foreground py-3 text-[16px]"
            />
          </div>
        </div>
      </div>

      {/* Category filters */}
      <div className="section-padding pt-8 pb-6">
        <div className="flex justify-center gap-3 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-sm font-extrabold transition-all duration-200 ${
                activeCategory === cat
                  ? "bg-primary text-primary-foreground shadow-[0_14px_32px_rgba(228,181,44,0.24)] -translate-y-0.5"
                  : "bg-white/70 border border-border/60 text-foreground hover:bg-primary hover:text-primary-foreground hover:-translate-y-0.5"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Featured article */}
      {featured && activeCategory === "Tous" && !searchQuery && (
        <section className="section-padding pb-16">
          <div className="text-center mb-10">
            <span className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-white/65 border border-border/60 text-muted-foreground text-[12px] font-extrabold tracking-[0.1em] uppercase mb-4">
              <span className="w-2 h-2 rounded-full bg-primary shadow-[0_0_0_6px_rgba(228,181,44,0.10)]" />
              À la une
            </span>
            <h2 className="text-[clamp(28px,4.6vw,56px)] font-black leading-[1.02] tracking-[-0.05em]">
              Un contenu utile, clair <span className="text-primary italic font-bold">et orienté service</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="min-h-[340px] lg:min-h-[500px] rounded-[34px] overflow-hidden bg-foreground/5 shadow-xl">
              <div className="w-full h-full bg-gradient-to-br from-foreground/10 to-foreground/5 flex items-center justify-center">
                <span className="text-muted-foreground text-sm">Image article</span>
              </div>
            </div>

            <div className="bg-white/70 border border-border/60 rounded-[34px] shadow-lg p-8 flex flex-col justify-center">
              <div className="flex items-center gap-3.5 flex-wrap mb-5 text-muted-foreground text-sm font-bold">
                <span className="px-3.5 py-1.5 rounded-full bg-primary/10 text-primary text-[12px] font-extrabold tracking-[0.08em] uppercase">
                  {featured.category}
                </span>
                <span>{featured.date}</span>
                <span>•</span>
                <span>{featured.readTime} de lecture</span>
              </div>

              <h3 className="text-[clamp(24px,3.4vw,44px)] font-black leading-[1.04] tracking-[-0.05em] mb-4">
                {featured.title.split("sans perdre de temps")[0]}
                <span className="text-primary italic font-bold">sans perdre de temps</span> ?
              </h3>
              <p className="text-muted-foreground text-[17px] leading-[1.9] mb-6">{featured.excerpt}</p>

              <div className="flex gap-3.5 flex-wrap">
                <Link
                  to={`/blog/${featured.id}`}
                  className="inline-flex items-center justify-center min-h-[54px] px-7 rounded-full bg-primary text-primary-foreground font-extrabold tracking-[0.04em] shadow-[0_14px_32px_rgba(228,181,44,0.24)] hover:-translate-y-0.5 transition-transform"
                >
                  Lire l'article
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Articles grid */}
      <section className="section-padding pb-20">
        <div className="text-center mb-10">
          <span className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-white/65 border border-border/60 text-muted-foreground text-[12px] font-extrabold tracking-[0.1em] uppercase mb-4">
            <span className="w-2 h-2 rounded-full bg-primary shadow-[0_0_0_6px_rgba(228,181,44,0.10)]" />
            Tous les articles
          </span>
          <h2 className="text-[clamp(28px,4.6vw,56px)] font-black leading-[1.02] tracking-[-0.05em]">
            Des articles pensés pour <span className="text-primary italic font-bold">accompagner vos clients</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredArticles.map((article, i) => (
            <motion.article
              key={article.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.4 }}
              className="bg-white/70 border border-border/60 rounded-[28px] overflow-hidden shadow-lg transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/20"
            >
              <div className="min-h-[220px] bg-gradient-to-br from-foreground/10 to-foreground/5 relative">
                <div className="absolute inset-0 bg-gradient-to-b from-foreground/5 via-foreground/10 to-foreground/50" />
              </div>
              <div className="p-5 pb-6">
                <div className="flex items-center gap-3 flex-wrap mb-4 text-muted-foreground text-sm font-bold">
                  <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-[12px] font-extrabold tracking-[0.08em] uppercase">
                    {article.category}
                  </span>
                  <span>{article.date}</span>
                </div>
                <h3 className="text-[20px] md:text-[22px] font-bold leading-[1.16] tracking-[-0.03em] mb-3">
                  {article.title}
                </h3>
                <p className="text-muted-foreground text-[15px] leading-[1.8] mb-4">
                  {article.excerpt}
                </p>
                <Link
                  to={`/blog/${article.id}`}
                  className="inline-flex items-center gap-2.5 text-foreground font-extrabold tracking-[0.02em] group"
                >
                  <span>Lire l'article</span>
                  <ArrowRight className="h-4 w-4 text-primary group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding pb-24">
        <div className="relative overflow-hidden bg-gradient-to-br from-foreground to-foreground/90 text-background rounded-[36px] p-10 md:p-12 shadow-xl">
          <div className="absolute -top-32 -right-32 w-[360px] h-[360px] rounded-full bg-[radial-gradient(circle,rgba(228,181,44,0.24),transparent_70%)]" />
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-6 items-center">
            <div>
              <h2 className="text-[clamp(28px,4vw,52px)] font-black leading-[1.02] tracking-[-0.05em] mb-3">
                Un besoin sur votre <span className="text-primary italic">vitrage automobile</span> ?
              </h2>
              <p className="text-background/70 text-lg leading-[1.8]">
                Prenez rendez-vous ou déclarez votre sinistre rapidement. Nos équipes vous accompagnent avec le même niveau d'exigence et de qualité.
              </p>
            </div>
            <div className="flex gap-3.5 flex-wrap">
              <Link
                to="/declaration"
                className="inline-flex items-center justify-center min-h-[54px] px-7 rounded-full bg-primary text-primary-foreground font-extrabold shadow-[0_14px_32px_rgba(228,181,44,0.24)] hover:-translate-y-0.5 transition-transform"
              >
                Déclarer un sinistre
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center min-h-[54px] px-7 rounded-full bg-white/70 border border-border/60 text-foreground font-extrabold hover:-translate-y-0.5 transition-transform"
              >
                Prendre rendez-vous
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
