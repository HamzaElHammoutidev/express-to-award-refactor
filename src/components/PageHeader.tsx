import { motion } from "framer-motion";
import { Link } from "react-router-dom";

interface PageHeaderProps {
  breadcrumb: string;
  title: string;
}

const PageHeader = ({ breadcrumb, title }: PageHeaderProps) => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-surface overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-surface to-surface" />
      <div className="relative z-10 section-padding text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="flex items-center justify-center gap-2 text-[11px] font-sans uppercase tracking-[0.3em] text-muted-foreground mb-6">
            <Link to="/" className="hover:text-primary transition-colors duration-300">
              Accueil
            </Link>
            <span>/</span>
            <span className="text-foreground">{breadcrumb}</span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif leading-[1.05]">
            {title}
          </h1>
          <div className="w-20 h-px bg-primary mx-auto mt-8" />
        </motion.div>
      </div>
    </section>
  );
};

export default PageHeader;
