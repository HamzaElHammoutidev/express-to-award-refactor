import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

interface BreadcrumbItem {
  label: string;
  labelAr?: string;
  href?: string;
}

interface PageHeaderProps {
  breadcrumbs: BreadcrumbItem[];
  title: string;
  titleAr?: string;
  titleHighlight?: string;
  titleHighlightAr?: string;
}

const PageHeader = ({ breadcrumbs, title, titleAr, titleHighlight, titleHighlightAr }: PageHeaderProps) => {
  const { t } = useLanguage();

  return (
    <section className="px-4 md:px-8 pt-4 pb-0">
      <motion.div
        className="max-w-[1320px] mx-auto rounded-[24px] md:rounded-[32px] bg-foreground overflow-hidden"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="relative py-10 md:py-14 lg:py-16 px-6 md:px-12 text-center">
          {/* Subtle glow */}
          <div className="absolute w-[300px] h-[300px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,hsl(var(--primary)/0.08),transparent_70%)] pointer-events-none" />

          <div className="relative z-10">
            {/* Breadcrumb */}
            <nav className="flex items-center justify-center gap-2 text-[11px] md:text-xs font-sans uppercase tracking-[0.25em] text-background/60 mb-5 md:mb-7">
              <Link to="/" className="hover:text-primary transition-colors duration-300 underline underline-offset-2">
                {t("Accueil", "الرئيسية")}
              </Link>
              {breadcrumbs.map((crumb, i) => (
                <span key={i} className="flex items-center gap-2">
                  <span>/</span>
                  {crumb.href ? (
                    <Link to={crumb.href} className="hover:text-primary transition-colors duration-300 underline underline-offset-2">
                      {t(crumb.label, crumb.labelAr || crumb.label)}
                    </Link>
                  ) : (
                    <span className="text-background/80 uppercase">
                      {t(crumb.label, crumb.labelAr || crumb.label)}
                    </span>
                  )}
                </span>
              ))}
            </nav>

            {/* Title */}
            <h1 className="text-3xl md:text-5xl lg:text-[56px] font-black italic leading-[1.05] tracking-tight text-primary">
              {titleHighlight ? (
                <>
                  <span className="text-background not-italic font-black">{t(title, titleAr || title)}</span>
                  <span className="text-primary italic"> {t(titleHighlight, titleHighlightAr || titleHighlight)}</span>
                </>
              ) : (
                <span>{t(title, titleAr || title)}</span>
              )}
            </h1>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default PageHeader;
