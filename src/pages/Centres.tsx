import { useState, useEffect, useMemo, useRef } from "react";
import { motion } from "framer-motion";
import { Search, Crosshair, Filter, Map as MapIcon, Navigation, MessageCircle, Phone, Clock } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import 'leaflet/dist/leaflet.css';
import { useLanguage } from "@/contexts/LanguageContext";

// Fix leaflet default icon issue with tailwind
import iconUrl from 'leaflet/dist/images/marker-icon.png';
import iconRetinaUrl from 'leaflet/dist/images/marker-icon-2x.png';
import shadowUrl from 'leaflet/dist/images/marker-shadow.png';

L.Icon.Default.mergeOptions({
  iconRetinaUrl,
  iconUrl,
  shadowUrl,
});

const customMarkerIcon = new L.DivIcon({
  className: "bg-transparent border-none",
  html: `<svg width="32" height="40" viewBox="0 0 24 36" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 0C5.373 0 0 5.373 0 12C0 21 12 36 12 36C12 36 24 21 24 12C24 5.373 18.627 0 12 0Z" fill="#facc15"/>
    <circle cx="12" cy="12" r="4" fill="#111827"/>
  </svg>`,
  iconSize: [32, 40],
  iconAnchor: [16, 40],
  popupAnchor: [0, -40]
});

interface Center {
  id: string;
  name: string;
  addressFr: string;
  addressAr: string;
  phone: string;
  hoursFr: string;
  hoursAr: string;
  coordinates: [number, number];
}

const centers: Center[] = [
  {
    id: "agadir",
    name: "GLAZZ AGADIR",
    addressFr: "Quartier Industriel, Avenue Hassan II",
    addressAr: "الحي الصناعي، شارع الحسن الثاني",
    phone: "+212 528 123 456",
    hoursFr: "Lun - Sam: 08:30 - 19:00",
    hoursAr: "الإثنين - السبت: 08:30 - 19:00",
    coordinates: [30.427755, -9.598107]
  },
  {
    id: "casablanca-ain-diab",
    name: "GLAZZ CASABLANCA AIN DIAB",
    addressFr: "Boulevard de la Corniche, Ain Diab",
    addressAr: "شارع الكورنيش، عين الذئاب",
    phone: "+212 522 987 654",
    hoursFr: "Lun - Sam: 09:00 - 20:00",
    hoursAr: "الإثنين - السبت: 09:00 - 20:00",
    coordinates: [33.593888, -7.643333]
  },
  {
    id: "casablanca-maarif",
    name: "GLAZZ CASABLANCA MAÂRIF",
    addressFr: "Bd Bir Anzarane, Quartier Maârif",
    addressAr: "شارع بئر انزران، حي المعاريف",
    phone: "+212 522 112 233",
    hoursFr: "Lun - Sam: 08:00 - 19:30",
    hoursAr: "الإثنين - السبت: 08:00 - 19:30",
    coordinates: [33.585000, -7.632145]
  },
  {
    id: "marrakech",
    name: "GLAZZ MARRAKECH",
    addressFr: "Zone Industrielle Sidi Ghanem",
    addressAr: "المنطقة الصناعية سيدي غانم",
    phone: "+212 524 111 222",
    hoursFr: "Lun - Sam: 08:00 - 18:30",
    hoursAr: "الإثنين - السبت: 08:00 - 18:30",
    coordinates: [31.650833, -8.020556]
  },
  {
    id: "rabat",
    name: "GLAZZ RABAT AGDAL",
    addressFr: "Avenue de France, Agdal",
    addressAr: "شارع فرنسا، أكدال",
    phone: "+212 537 445 566",
    hoursFr: "Lun - Sam: 08:30 - 19:00",
    hoursAr: "الإثنين - السبت: 08:30 - 19:00",
    coordinates: [34.0041, -6.8524]
  },
  {
    id: "tanger",
    name: "GLAZZ TANGER",
    addressFr: "Route de Tétouan, Zone Franche",
    addressAr: "طريق تطوان، المنطقة الحرة",
    phone: "+212 539 778 899",
    hoursFr: "Lun - Sam: 09:00 - 18:00",
    hoursAr: "الإثنين - السبت: 09:00 - 18:00",
    coordinates: [35.759465, -5.833954]
  },
  {
    id: "fes",
    name: "GLAZZ FÈS",
    addressFr: "Avenue Hassan II, Centre Ville",
    addressAr: "شارع الحسن الثاني، وسط المدينة",
    phone: "+212 535 998 877",
    hoursFr: "Lun - Ven: 08:00 - 18:00",
    hoursAr: "الإثنين - الجمعة: 08:00 - 18:00",
    coordinates: [34.03313, -5.00028]
  },
  {
    id: "oujda",
    name: "GLAZZ OUJDA",
    addressFr: "Boulevard Mohammed V",
    addressAr: "شارع محمد الخامس",
    phone: "+212 536 223 344",
    hoursFr: "Lun - Sam: 08:30 - 19:00",
    hoursAr: "الإثنين - السبت: 08:30 - 19:00",
    coordinates: [34.681389, -1.908889]
  }
];

const MapFlyTo = ({ center }: { center: [number, number] | null }) => {
  const map = useMap();
  useEffect(() => {
    // Force map to recalculate its size right after layout changes (critical for mobile un-hiding)
    setTimeout(() => {
      map.invalidateSize();
      if (center) {
        map.flyTo(center, 14, { duration: 1.5, easeLinearity: 0.25 });
      }
    }, 100);
  }, [center, map]);
  return null;
};

const Centres = () => {
  const { t, lang } = useLanguage();
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCenterId, setActiveCenterId] = useState<string | null>(null);
  const cardRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  const filteredCenters = useMemo(() => {
    return centers.filter((center) => 
      center.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
      center.addressFr.toLowerCase().includes(searchQuery.toLowerCase()) ||
      center.addressAr.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

  const activeCenterCoords = useMemo(() => {
    const active = centers.find(c => c.id === activeCenterId);
    return active ? active.coordinates : null;
  }, [activeCenterId]);

  // Scroll to card when a marker is clicked on the map
  useEffect(() => {
    if (activeCenterId && cardRefs.current[activeCenterId]) {
      cardRefs.current[activeCenterId]?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  }, [activeCenterId]);

  return (
    <div className="relative min-h-screen bg-[#0a0a0a] text-white flex flex-col font-sans overflow-x-hidden">
      {/* Ambient Background Glows */}
      <div className="absolute top-0 left-[-10%] w-[50vw] h-[50vw] rounded-full bg-yellow-500/5 blur-[120px] pointer-events-none transform -translate-y-1/2" />
      <div className="absolute top-[40%] right-[-10%] w-[40vw] h-[40vw] rounded-full bg-yellow-500/5 blur-[150px] pointer-events-none" />
      
      <Navbar />
      <div className="h-24 flex-shrink-0" /> {/* Spacer for Navbar */}
      
      {/* Top Header Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 w-full max-w-[1600px] mx-auto px-6 lg:px-16 xl:px-20 py-8 flex-shrink-0"
      >
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-3xl">
            <div className="mb-4">
              <span className="text-[10px] text-yellow-500 font-bold uppercase tracking-widest border-l-2 border-yellow-500 pl-3">
                {t("NOS CENTRES", "مراكزنا")}
              </span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-4 tracking-tight leading-tight">
              {t("Trouvez le centre ", "ابحث عن المركز ")}<span className="italic text-yellow-500 font-serif font-medium"><br className="hidden md:block" />{t("le plus proche", "الأقرب إليك")}</span>
            </h1>
            
            <p className="text-gray-400 text-sm md:text-lg leading-relaxed max-w-2xl">
              {t("Bénéficiez d'une précision technologique et d'un service premium dans tout le réseau GLAZZ PRECISION.", "استفد من الدقة التكنولوجية والخدمة الممتازة في جميع أنحاء شبكة جلاز بريسيجن.")}
            </p>
          </div>

          <div className="flex flex-row w-full justify-between items-end md:flex-col md:justify-end md:w-auto md:gap-8 pb-2 mt-4 md:mt-0">
            {/* 24/7 Badge */}
            <div className={`text-left ${lang === 'fr' ? 'md:text-right' : 'md:text-left'}`}>
              <div className="text-yellow-500 font-black text-6xl md:text-7xl tracking-tighter">24<span className="text-4xl md:text-5xl text-yellow-600">/7</span></div>
              <div className="text-[10px] md:text-xs tracking-[0.2em] text-gray-500 font-semibold uppercase mt-2">{t("ASSISTANCE MOBILE", "مساعدة متنقلة")}</div>
            </div>

            {/* Centers Count Badge */}
            <div className={`text-right ${lang === 'fr' ? 'md:text-right' : 'md:text-left'}`}>
              <div className="text-yellow-500 font-black text-6xl md:text-7xl tracking-tighter">
                {centers.length < 10 ? `0${centers.length}` : centers.length}
              </div>
              <div className="text-[10px] md:text-xs tracking-[0.2em] text-gray-500 font-semibold uppercase mt-2">
                {t("CENTRES AU MAROC", "مركز في المغرب")}
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Main Grid Section */}
      <main className="relative z-10 w-full max-w-[1600px] mx-auto pb-12 px-6 lg:px-16 xl:px-20 grid grid-cols-1 lg:grid-cols-[500px_1fr] lg:grid-rows-[auto_1fr] gap-6 lg:gap-8 xl:gap-12 lg:h-[calc(100vh-200px)] lg:min-h-[800px] lg:max-h-[1100px]">
        
        {/* 1. Search Bar (Mobile: Top, Desktop: Top-Left) */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col gap-4 lg:col-start-1 lg:row-start-1 z-20"
        >
          <div className="relative">
            <Search className={`absolute ${lang === 'fr' ? 'left-6' : 'right-6'} top-1/2 -translate-y-1/2 text-yellow-500 h-5 w-5`} />
            <input 
              type="text" 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t("Entrez votre ville ou code postal...", "أدخل مدينتك أو الرمز البريدي...")} 
              className={`w-full bg-[#111] border border-white/10 rounded-[28px] py-4 ${lang === 'fr' ? 'pl-14 pr-6' : 'pr-14 pl-6'} text-sm text-white placeholder-gray-500 focus:outline-none focus:border-yellow-500/50 transition-colors shadow-[0_8px_30px_rgba(0,0,0,0.4)]`} 
            />
          </div>
          <div className="flex gap-3 h-[54px]">
            <button 
              onClick={() => {
                if (navigator.geolocation) {
                  navigator.geolocation.getCurrentPosition(() => {});
                }
              }}
              className="flex-1 bg-[#1a1a1a] hover:bg-[#252525] border border-white/5 rounded-[24px] text-white text-xs font-semibold flex items-center justify-center gap-2 transition-colors shadow-[0_8px_20px_rgba(0,0,0,0.15)] group"
            >
              <Crosshair className="h-4 w-4 group-hover:text-yellow-500 transition-colors" />
              {t("Autour de moi", "بالقرب مني")}
            </button>
            <button className="bg-[#1a1a1a] hover:bg-[#252525] border border-white/5 rounded-[24px] px-6 transition-colors flex items-center justify-center shadow-[0_8px_20px_rgba(0,0,0,0.15)]">
              <Filter className="h-5 w-5 text-gray-400" />
            </button>
          </div>
        </motion.div>

        {/* 2. Map Area (Mobile: Collapsed/Hidden by default until clicked, Desktop: Right Column) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className={`w-full lg:!flex lg:!h-full lg:!min-h-[500px] lg:!opacity-100 lg:!border lg:!m-0 lg:col-start-2 lg:row-start-1 lg:row-span-2 flex-col relative bg-[#111] overflow-hidden rounded-[24px] lg:rounded-[34px] border-white/[0.06] shadow-[0_24px_70px_rgba(0,0,0,0.32)] z-10 ${
            !activeCenterId
              ? 'hidden h-0 opacity-0 border-0 m-0'
              : 'flex h-[45vh] min-h-[350px] opacity-100 border my-4'
          }`}
        >
          <MapContainer 
            center={[31.7917, -7.0926]} // Center of Morocco
            zoom={5.5} 
            scrollWheelZoom={true} 
            zoomControl={false}
            className="flex-1 w-full h-full z-0"
            style={{ width: '100%', height: '100%' }}
          >
            <TileLayer
              url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OSM</a> &copy; <a href="https://carto.com/">CARTO</a>'
            />
            <MapFlyTo center={activeCenterCoords} />
            
            {filteredCenters.map((center) => (
              <Marker 
                key={center.id} 
                position={center.coordinates}
                icon={customMarkerIcon}
                eventHandlers={{
                  click: () => setActiveCenterId(center.id),
                }}
              >
                <Popup className="custom-popup">
                  <div className="p-1">
                    <div className="font-bold text-sm text-gray-900">{center.name}</div>
                  </div>
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </motion.div>

        {/* 3. Cards List (Mobile: Bottom, Desktop: Bottom-Left) */}
        <div className="flex flex-col gap-4 lg:col-start-1 lg:row-start-2 overflow-y-auto h-[600px] lg:h-auto min-h-0 custom-scrollbar pr-2 lg:pr-3 pb-8 mt-2 lg:mt-0 z-10">
          
          {/* Mobile UX Context Invitation */}
          {!activeCenterId && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              className="lg:hidden text-center py-3 px-4 rounded-2xl bg-yellow-500/[0.08] border border-yellow-500/20 text-yellow-600 font-medium text-xs flex items-center justify-center gap-2 mb-2 shadow-[0_0_20px_rgba(234,179,8,0.05)]"
            >
              <MapIcon className="h-4 w-4" />
              {t("Appuyez sur un centre pour l'afficher sur la carte", "اضغط على أي مركز لعرضه على الخريطة")}
            </motion.div>
          )}

          {filteredCenters.map((center, index) => {
            const isActive = activeCenterId === center.id;
            
            return (
              <motion.div 
                key={center.id}
                ref={(el) => (cardRefs.current[center.id] = el)}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => setActiveCenterId(activeCenterId === center.id ? null : center.id)}
                className={`flex-shrink-0 p-6 md:p-8 rounded-[24px] lg:rounded-[30px] border cursor-pointer transition-all duration-300 ${
                  isActive 
                    ? "bg-[#181818] border-yellow-500/40 shadow-[0_0_30px_rgba(234,179,8,0.15)] scale-[1.02]" 
                    : "bg-[#151515] border-white/5 hover:border-white/20 hover:shadow-[0_24px_56px_rgba(255,255,255,0.04)] shadow-[0_18px_50px_rgba(0,0,0,0.18)]"
                }`}
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="font-bold text-xl tracking-wide">
                    {center.name}
                  </h3>
                </div>
                
                <p className="text-gray-400 text-sm mb-4">{t(center.addressFr, center.addressAr)}</p>
                
                <div className="flex flex-col gap-3 mb-5 text-sm text-gray-300">
                  <div className="flex items-center gap-3">
                    <Phone className="h-4 w-4 text-yellow-500" />
                    <span dir="ltr">{center.phone}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="h-4 w-4 text-yellow-500" />
                    <span dir="ltr" className={lang === 'ar' ? 'ml-auto' : ''}>{t(center.hoursFr, center.hoursAr)}</span>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-3 mt-4">
                  <button className="bg-black/40 hover:bg-black/80 border border-white/5 py-3.5 rounded-[18px] flex flex-col items-center justify-center gap-2 transition-colors group">
                    <MapIcon className="h-5 w-5 text-yellow-500 group-hover:scale-110 transition-transform" />
                    <span className="text-[10px] font-bold tracking-wider">MAPS</span>
                  </button>
                  <button className="bg-black/40 hover:bg-black/80 border border-white/5 py-3.5 rounded-[18px] flex flex-col items-center justify-center gap-2 transition-colors group">
                    <Navigation className="h-5 w-5 text-yellow-500 group-hover:scale-110 transition-transform" />
                    <span className="text-[10px] font-bold tracking-wider">WAZE</span>
                  </button>
                  <button className="bg-black/40 hover:bg-black/80 border border-white/5 py-3.5 rounded-[18px] flex flex-col items-center justify-center gap-2 transition-colors group">
                    <MessageCircle className="h-5 w-5 text-yellow-500 group-hover:scale-110 transition-transform" />
                    <span className="text-[10px] font-bold tracking-wider">WHATSAPP</span>
                  </button>
                </div>
              </motion.div>
            );
          })}
          {filteredCenters.length === 0 && (
            <div className="text-center py-20 text-gray-500 text-sm">
              {t(`Aucun centre trouvé pour "${searchQuery}".`, `لم يتم العثور على أي مركز لـ "${searchQuery}".`)}
            </div>
          )}
        </div>
      </main>

      {/* Certifications footer matching the design bottom */}
      <div className="relative z-10 border-t border-[#222] bg-[#0a0a0a] py-12">
        <div className={`max-w-7xl mx-auto flex flex-col md:flex-row justify-center items-center gap-12 md:gap-24 opacity-70 px-6 ${lang === 'ar' ? 'flex-row-reverse' : ''}`}>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full border border-gray-600 flex items-center justify-center font-bold text-[8px] tracking-wider text-center text-gray-300 bg-[#111]">IMANOR</div>
            <span className="text-[10px] font-bold tracking-[0.15em] text-gray-400">{t("NORME ISO 9001", "معيار ISO 9001")}</span>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full border border-gray-600 flex items-center justify-center font-bold text-[8px] tracking-wider text-center text-gray-300 bg-[#111]">VERITAS</div>
            <span className="text-[10px] font-bold tracking-[0.15em] text-gray-400">{t("AUDIT QUALITÉ", "تدقيق الجودة")}</span>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full border border-gray-600 flex items-center justify-center font-bold text-[8px] tracking-wider text-center text-gray-300 bg-[#111]">SFQK</div>
            <span className="text-[10px] font-bold tracking-[0.15em] text-gray-400">{t("SÉCURITÉ CERTIFIÉE", "معتمد للسلامة")}</span>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Centres;
