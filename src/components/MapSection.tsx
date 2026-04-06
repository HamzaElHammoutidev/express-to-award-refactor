import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { MapPin } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import iconUrl from "leaflet/dist/images/marker-icon.png";
import iconRetinaUrl from "leaflet/dist/images/marker-icon-2x.png";
import shadowUrl from "leaflet/dist/images/marker-shadow.png";

L.Icon.Default.mergeOptions({ iconRetinaUrl, iconUrl, shadowUrl });

const markerIcon = new L.DivIcon({
  className: "bg-transparent border-none",
  html: `<svg width="20" height="26" viewBox="0 0 24 36" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 0C5.373 0 0 5.373 0 12C0 21 12 36 12 36C12 36 24 21 24 12C24 5.373 18.627 0 12 0Z" fill="#facc15"/>
    <circle cx="12" cy="12" r="4" fill="#111827"/>
  </svg>`,
  iconSize: [20, 26],
  iconAnchor: [10, 26],
});

const CENTER_COORDS: [number, number][] = [
  [30.4122, -9.54569], [32.3475, -6.34108], [33.2578, -7.57806],
  [33.6022, -7.53678], [33.5508, -7.68903], [33.5861, -7.63089],
  [23.6889, -15.9391], [33.2228, -8.50125], [31.4982, -9.75297],
  [34.0209, -5.03958], [31.1845, -8.8425],  [32.0546, -7.38525],
  [34.2674, -6.56547], [32.8921, -6.89464], [27.1402, -13.1868],
  [31.6586, -8.02064], [33.855,  -5.56989], [30.9272, -6.92642],
  [34.676,  -1.87584], [33.9769, -6.89478], [32.2854, -9.24203],
  [34.057,  -6.80669], [33.0037, -7.61583], [32.6432, -8.42844],
  [35.7699, -5.82892], [30.4689, -8.87431], [35.5704, -5.35053],
  [31.5054, -5.54081], [30.3451, -5.83772], [33.6898, -7.36292],
  [35.1659, -6.15222], [34.2324, -4.03019], [32.9385, -5.65306],
  [32.2378, -7.94336], [30.351,  -9.49353], [31.9297, -4.422],
  [33.4223, -7.85228], [33.926,  -6.89005],
];

const MapSection = () => {
  const { t } = useLanguage();

  return (
    <section id="centres" className="py-14 md:py-20 section-padding relative overflow-hidden bg-surface">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-xs font-sans uppercase tracking-[0.3em] text-muted-foreground mb-4">
              {t("Notre réseau", "شبكتنا")}
            </p>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif leading-[1.05] mb-6">
              {t("Un réseau de centres", "شبكة مراكز")}
              <br />
              <span className="italic text-gradient-gold">
                {t("à travers tout le Maroc", "عبر كل المغرب")}
              </span>
            </h2>
            <p className="text-base font-sans text-secondary-foreground leading-[1.9] font-light mb-8 max-w-lg">
              {t(
                "Avec plus de 80 centres techniques et ateliers mobiles répartis sur l'ensemble du territoire marocain, Pare-Brise Express est toujours à proximité pour intervenir rapidement.",
                "مع أكثر من 80 مركزًا تقنيًا وورشة متنقلة موزعة على كامل التراب المغربي، بار بريز إكسبرس دائمًا بالقرب منكم للتدخل السريع."
              )}
            </p>

            <div className="flex flex-col sm:flex-row items-start gap-4">
              <Link
                to="/centres"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-primary text-primary-foreground font-sans font-semibold text-[13px] uppercase tracking-[0.15em] hover:bg-gold-dark transition-colors duration-300"
              >
                <MapPin size={16} />
                {t("Trouver un centre", "ابحث عن مركز")}
              </Link>
            </div>

            {/* Quick stats */}
            <div className="flex items-center gap-8 mt-10 pt-8 border-t border-border/30">
              <div>
                <span className="text-3xl font-serif text-gradient-gold">80+</span>
                <p className="text-[11px] font-sans text-muted-foreground mt-1 uppercase tracking-wider">
                  {t("Centres", "مراكز")}
                </p>
              </div>
              <div className="w-px h-10 bg-border/40" />
              <div>
                <span className="text-3xl font-serif text-gradient-gold">12</span>
                <p className="text-[11px] font-sans text-muted-foreground mt-1 uppercase tracking-wider">
                  {t("Régions", "جهات")}
                </p>
              </div>
              <div className="w-px h-10 bg-border/40" />
              <div>
                <span className="text-3xl font-serif text-gradient-gold">24/7</span>
                <p className="text-[11px] font-sans text-muted-foreground mt-1 uppercase tracking-wider">
                  {t("Disponible", "متاح")}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Dynamic Map */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative rounded-3xl overflow-hidden border border-border/30 bg-card aspect-[3/4] lg:aspect-[4/5] isolate">
              <MapContainer
                center={[29.5, -7.5]}
                zoom={5}
                zoomControl={false}
                dragging={false}
                scrollWheelZoom={false}
                doubleClickZoom={false}
                keyboard={false}
                touchZoom={false}
                attributionControl={false}
                style={{ width: "100%", height: "100%" }}
              >
                <TileLayer url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png" />
                {CENTER_COORDS.map((coords) => (
                  <Marker key={`${coords[0]},${coords[1]}`} position={coords} icon={markerIcon} />
                ))}
              </MapContainer>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
