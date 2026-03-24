import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import { Save } from "lucide-react";

const SiteSettings = () => {
  return (
    <div className="max-w-3xl space-y-8">
      {/* General */}
      <section className="bg-card rounded-xl border border-border p-6 space-y-4">
        <h2 className="text-sm font-semibold text-foreground">Informations générales</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div><Label>Nom du site</Label><Input className="mt-1" defaultValue="Pare-Brise Express" /></div>
          <div><Label>Slogan</Label><Input className="mt-1" defaultValue="Votre pare-brise, notre priorité" /></div>
        </div>
      </section>

      {/* Contact */}
      <section className="bg-card rounded-xl border border-border p-6 space-y-4">
        <h2 className="text-sm font-semibold text-foreground">Coordonnées</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div><Label>Téléphone principal</Label><Input className="mt-1" defaultValue="0522 345 678" /></div>
          <div><Label>Email principal</Label><Input className="mt-1" defaultValue="contact@parebriseexpress.ma" /></div>
          <div className="md:col-span-2"><Label>Adresse</Label><Input className="mt-1" defaultValue="Lot 45, Zone Industrielle Ain Sebaâ, Casablanca" /></div>
          <div><Label>Horaires</Label><Input className="mt-1" defaultValue="Lun-Sam 8h-18h" /></div>
          <div><Label>WhatsApp</Label><Input className="mt-1" defaultValue="+212 6 61 23 45 67" /></div>
        </div>
      </section>

      {/* Social */}
      <section className="bg-card rounded-xl border border-border p-6 space-y-4">
        <h2 className="text-sm font-semibold text-foreground">Réseaux sociaux</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div><Label>Facebook</Label><Input className="mt-1" defaultValue="https://facebook.com/parebriseexpress" /></div>
          <div><Label>Instagram</Label><Input className="mt-1" defaultValue="https://instagram.com/parebriseexpress" /></div>
          <div><Label>LinkedIn</Label><Input className="mt-1" defaultValue="https://linkedin.com/company/parebriseexpress" /></div>
          <div><Label>YouTube</Label><Input className="mt-1" defaultValue="" placeholder="URL YouTube" /></div>
        </div>
      </section>

      {/* Footer */}
      <section className="bg-card rounded-xl border border-border p-6 space-y-4">
        <h2 className="text-sm font-semibold text-foreground">Footer & mentions</h2>
        <div><Label>Texte footer</Label><Textarea className="mt-1" rows={2} defaultValue="© 2025 Pare-Brise Express. Tous droits réservés." /></div>
        <div><Label>Mentions légales</Label><Textarea className="mt-1" rows={4} defaultValue="Pare-Brise Express SARL au capital de..." /></div>
      </section>

      {/* Promo */}
      <section className="bg-card rounded-xl border border-border p-6 space-y-4">
        <h2 className="text-sm font-semibold text-foreground">Bandeau promotionnel</h2>
        <div><Label>Texte du bandeau</Label><Input className="mt-1" defaultValue="" placeholder="Ex: -20% sur le calibrage ADAS ce mois-ci !" /></div>
        <div className="flex items-center gap-2">
          <input type="checkbox" id="promoActive" className="rounded" />
          <Label htmlFor="promoActive">Activer le bandeau</Label>
        </div>
      </section>

      <div className="flex justify-end">
        <Button className="gap-2"><Save className="h-4 w-4" /> Enregistrer les modifications</Button>
      </div>
    </div>
  );
};

export default SiteSettings;
