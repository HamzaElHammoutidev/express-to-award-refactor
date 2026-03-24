import { Link } from "react-router-dom";
import { AlertTriangle } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const FloatingDeclarationButton = () => {
  const { t } = useLanguage();

  return (
    <Link
      to="/declaration"
      className="fixed bottom-6 left-4 z-50 flex items-center gap-2 px-5 py-3 rounded-full bg-primary text-primary-foreground font-semibold text-sm shadow-[0_8px_24px_rgba(228,181,44,0.35)] hover:shadow-[0_12px_32px_rgba(228,181,44,0.45)] transition-all md:hidden"
      aria-label={t("Déclarer un sinistre", "التصريح بحادث")}
    >
      <AlertTriangle size={18} />
      {t("Déclarer un sinistre", "التصريح بحادث")}
    </Link>
  );
};

export default FloatingDeclarationButton;
