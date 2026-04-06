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
    name: "PBE AGADIR",
    addressFr: "Résidence Marbella Imm A Bd 11 Janvier Quartier Dakhla",
    addressAr: "ريزيدونس ماربيلا إيمم أ، بد 11 يناير، حي الداخلة",
    phone: "05 22 66 31 66",
    hoursFr: "Lun–Ven: 8h30–12h30, 14h30–18h30 | Sam: 9h–13h",
    hoursAr: "الإثنين–الجمعة: 8:30–12:30, 14:30–18:30 | السبت: 9:00–13:00",
    coordinates: [30.4122, -9.54569]
  },
  {
    id: "beni-mellal",
    name: "PBE BENI MELLAL",
    addressFr: "Lot Yassmine N°7 Hay Taqaddoum",
    addressAr: "لوط ياسمين رقم 7، حي التقدم",
    phone: "05 22 66 31 66",
    hoursFr: "Lun–Ven: 8h30–12h30, 14h30–18h30 | Sam: 9h–13h",
    hoursAr: "الإثنين–الجمعة: 8:30–12:30, 14:30–18:30 | السبت: 9:00–13:00",
    coordinates: [32.3475, -6.34108]
  },
  {
    id: "berrechid",
    name: "PBE BERRECHID",
    addressFr: "241 BD Omar Abouricha Rue Nasser Allah",
    addressAr: "241 بلفار عمر أبو ريشة، زنقة ناصر الله",
    phone: "05 22 66 31 66",
    hoursFr: "Lun–Ven: 8h30–12h30, 14h30–18h30 | Sam: 9h–13h",
    hoursAr: "الإثنين–الجمعة: 8:30–12:30, 14:30–18:30 | السبت: 9:00–13:00",
    coordinates: [33.2578, -7.57806]
  },
  {
    id: "ain-sebaa",
    name: "PBE AIN SEBAA",
    addressFr: "13 Lot Halioua - Ain Sebaa",
    addressAr: "13 لوط حليوة - عين السبع",
    phone: "05 22 66 31 66",
    hoursFr: "Lun–Ven: 8h30–12h30, 14h30–18h30 | Sam: 9h–13h",
    hoursAr: "الإثنين–الجمعة: 8:30–12:30, 14:30–18:30 | السبت: 9:00–13:00",
    coordinates: [33.6022, -7.53678]
  },
  {
    id: "oulfa",
    name: "PBE OULFA",
    addressFr: "Lot Moulay Thami 116 Bd Haj Fateh - Oulfa",
    addressAr: "لوط مولاي ثامي 116، بلفار الحاج فاتح - أولفا",
    phone: "05 22 66 31 66",
    hoursFr: "Lun–Ven: 8h30–12h30, 14h30–18h30 | Sam: 9h–13h",
    hoursAr: "الإثنين–الجمعة: 8:30–12:30, 14:30–18:30 | السبت: 9:00–13:00",
    coordinates: [33.5508, -7.68903]
  },
  {
    id: "zerktouni",
    name: "PBE ZERKTOUNI",
    addressFr: "181 Bd Zerktouni",
    addressAr: "181 بلفار الزرقطوني",
    phone: "05 22 66 31 66",
    hoursFr: "Lun–Ven: 8h30–12h30, 14h30–18h30 | Sam: 9h–13h",
    hoursAr: "الإثنين–الجمعة: 8:30–12:30, 14:30–18:30 | السبت: 9:00–13:00",
    coordinates: [33.5861, -7.63089]
  },
  {
    id: "dakhla",
    name: "PBE DAKHLA",
    addressFr: "Hay El Massira 2 Ahmed Bahnini N°37",
    addressAr: "حي المسيرة 2، أحمد بحنيني رقم 37",
    phone: "05 22 66 31 66",
    hoursFr: "Lun–Ven: 8h30–12h30, 14h30–18h30 | Sam: 9h–13h",
    hoursAr: "الإثنين–الجمعة: 8:30–12:30, 14:30–18:30 | السبت: 9:00–13:00",
    coordinates: [23.6889, -15.9391]
  },
  {
    id: "el-jadida",
    name: "PBE EL JADIDA",
    addressFr: "4 Lot Nadia Amine Hay Essalam",
    addressAr: "4 لوط نادية أمين، حي السلام",
    phone: "05 22 66 31 66",
    hoursFr: "Lun–Ven: 8h30–12h30, 14h30–18h30 | Sam: 9h–13h",
    hoursAr: "الإثنين–الجمعة: 8:30–12:30, 14:30–18:30 | السبت: 9:00–13:00",
    coordinates: [33.2228, -8.50125]
  },
  {
    id: "essaouira",
    name: "PBE ESSAOUIRA",
    addressFr: "340 Lot Erraounak",
    addressAr: "340 لوط الروناك",
    phone: "05 22 66 31 66",
    hoursFr: "Lun–Ven: 8h30–12h30, 14h30–18h30 | Sam: 9h–13h",
    hoursAr: "الإثنين–الجمعة: 8:30–12:30, 14:30–18:30 | السبت: 9:00–13:00",
    coordinates: [31.4982, -9.75297]
  },
  {
    id: "fes",
    name: "PBE FÈS",
    addressFr: "Imm Ennour 4 Rue 1 Hay Sidi Hadi Zouagha Haut",
    addressAr: "إيمم النور 4، زنقة 1، حي سيدي هادي زواغة العليا",
    phone: "05 22 66 31 66",
    hoursFr: "Lun–Ven: 8h30–12h30, 14h30–18h30 | Sam: 9h–13h",
    hoursAr: "الإثنين–الجمعة: 8:30–12:30, 14:30–18:30 | السبت: 9:00–13:00",
    coordinates: [34.0209, -5.03958]
  },
  {
    id: "imintanout",
    name: "PBE IMINTANOUT",
    addressFr: "Quartier Al Qods Extension 39",
    addressAr: "حي القدس امتداد 39",
    phone: "05 22 66 31 66",
    hoursFr: "Lun–Ven: 8h30–12h30, 14h30–18h30 | Sam: 9h–13h",
    hoursAr: "الإثنين–الجمعة: 8:30–12:30, 14:30–18:30 | السبت: 9:00–13:00",
    coordinates: [31.1845, -8.8425]
  },
  {
    id: "kelaat-essraghna",
    name: "PBE KELAAT ESSRAGHNA",
    addressFr: "Lot 88 Quartier Industriel",
    addressAr: "لوط 88، الحي الصناعي",
    phone: "05 22 66 31 66",
    hoursFr: "Lun–Ven: 8h30–12h30, 14h30–18h30 | Sam: 9h–13h",
    hoursAr: "الإثنين–الجمعة: 8:30–12:30, 14:30–18:30 | السبت: 9:00–13:00",
    coordinates: [32.0546, -7.38525]
  },
  {
    id: "kenitra",
    name: "PBE KÉNITRA",
    addressFr: "Rue 21 Lot 3 N°51 Nouvelle Medina",
    addressAr: "زنقة 21، لوط 3 رقم 51، المدينة الجديدة",
    phone: "05 22 66 31 66",
    hoursFr: "Lun–Ven: 8h30–12h30, 14h30–18h30 | Sam: 9h–13h",
    hoursAr: "الإثنين–الجمعة: 8:30–12:30, 14:30–18:30 | السبت: 9:00–13:00",
    coordinates: [34.2674, -6.56547]
  },
  {
    id: "khouribga",
    name: "PBE KHOURIBGA",
    addressFr: "Lot Yassamine 1 Bd Cheikh Maa El Aynain N°218",
    addressAr: "لوط ياسمين 1، بلفار الشيخ ماء العينين رقم 218",
    phone: "05 22 66 31 66",
    hoursFr: "Lun–Ven: 8h30–12h30, 14h30–18h30 | Sam: 9h–13h",
    hoursAr: "الإثنين–الجمعة: 8:30–12:30, 14:30–18:30 | السبت: 9:00–13:00",
    coordinates: [32.8921, -6.89464]
  },
  {
    id: "laayoune",
    name: "PBE LAAYOUNE",
    addressFr: "Bd Tantan Rue Albaate",
    addressAr: "بلفار طنطان، زنقة البعاتة",
    phone: "05 22 66 31 66",
    hoursFr: "Lun–Ven: 8h30–12h30, 14h30–18h30 | Sam: 9h–13h",
    hoursAr: "الإثنين–الجمعة: 8:30–12:30, 14:30–18:30 | السبت: 9:00–13:00",
    coordinates: [27.1402, -13.1868]
  },
  {
    id: "marrakech",
    name: "PBE MARRAKECH",
    addressFr: "Bd du 18 Novembre Résidence Le Rubis Imm3 Mag 13 et 14",
    addressAr: "بلفار 18 نونبر، ريزيدونس لو روبي، إيمم 3، محل 13 و14",
    phone: "05 22 66 31 66",
    hoursFr: "Lun–Ven: 8h30–12h30, 14h30–18h30 | Sam: 9h–13h",
    hoursAr: "الإثنين–الجمعة: 8:30–12:30, 14:30–18:30 | السبت: 9:00–13:00",
    coordinates: [31.6586, -8.02064]
  },
  {
    id: "meknes",
    name: "PBE MEKNES",
    addressFr: "151 Riad Ismailia Tranche E",
    addressAr: "151 رياض إسماعيلية، الشطر E",
    phone: "05 22 66 31 66",
    hoursFr: "Lun–Ven: 8h30–12h30, 14h30–18h30 | Sam: 9h–13h",
    hoursAr: "الإثنين–الجمعة: 8:30–12:30, 14:30–18:30 | السبت: 9:00–13:00",
    coordinates: [33.855, -5.56989]
  },
  {
    id: "ouarzazate",
    name: "PBE OUARZAZATE",
    addressFr: "23 Lot Périphérique Bd Moulay Abdellah",
    addressAr: "23 لوط المحيط، بلفار مولاي عبدالله",
    phone: "05 22 66 31 66",
    hoursFr: "Lun–Ven: 8h30–12h30, 14h30–18h30 | Sam: 9h–13h",
    hoursAr: "الإثنين–الجمعة: 8:30–12:30, 14:30–18:30 | السبت: 9:00–13:00",
    coordinates: [30.9272, -6.92642]
  },
  {
    id: "oujda",
    name: "PBE OUJDA",
    addressFr: "3 Rue Sarae Lot Talhaoui Av Ibrahim Roudani",
    addressAr: "3 زنقة سراع، لوط طلحاوي، شارع إبراهيم رودانة",
    phone: "05 22 66 31 66",
    hoursFr: "Lun–Ven: 8h30–12h30, 14h30–18h30 | Sam: 9h–13h",
    hoursAr: "الإثنين–الجمعة: 8:30–12:30, 14:30–18:30 | السبت: 9:00–13:00",
    coordinates: [34.676, -1.87584]
  },
  {
    id: "rabat",
    name: "PBE RABAT",
    addressFr: "Imm 507 Rue Attouquane Lot El Menzeh Yaakoub Al Mansour",
    addressAr: "إيمم 507، زنقة التوقان، لوط المنزه، يعقوب المنصور",
    phone: "05 22 66 31 66",
    hoursFr: "Lun–Ven: 8h30–12h30, 14h30–18h30 | Sam: 9h–13h",
    hoursAr: "الإثنين–الجمعة: 8:30–12:30, 14:30–18:30 | السبت: 9:00–13:00",
    coordinates: [33.9769, -6.89478]
  },
  {
    id: "safi",
    name: "PBE SAFI",
    addressFr: "Mouni 4 - 51 14 Rue Ourika",
    addressAr: "موني 4 - 51 14، زنقة أوريكا",
    phone: "05 22 66 31 66",
    hoursFr: "Lun–Ven: 8h30–12h30, 14h30–18h30 | Sam: 9h–13h",
    hoursAr: "الإثنين–الجمعة: 8:30–12:30, 14:30–18:30 | السبت: 9:00–13:00",
    coordinates: [32.2854, -9.24203]
  },
  {
    id: "sale",
    name: "PBE SALÉ",
    addressFr: "N°3 Résidence Al Nour Route de Kénitra Bab Lamrissa",
    addressAr: "رقم 3، ريزيدونس النور، طريق القنيطرة، باب المريسة",
    phone: "05 22 66 31 66",
    hoursFr: "Lun–Ven: 8h30–12h30, 14h30–18h30 | Sam: 9h–13h",
    hoursAr: "الإثنين–الجمعة: 8:30–12:30, 14:30–18:30 | السبت: 9:00–13:00",
    coordinates: [34.057, -6.80669]
  },
  {
    id: "settat",
    name: "PBE SETTAT",
    addressFr: "33 Bd des Forces Armées Royales",
    addressAr: "33 بلفار القوات المسلحة الملكية",
    phone: "05 22 66 31 66",
    hoursFr: "Lun–Ven: 8h30–12h30, 14h30–18h30 | Sam: 9h–13h",
    hoursAr: "الإثنين–الجمعة: 8:30–12:30, 14:30–18:30 | السبت: 9:00–13:00",
    coordinates: [33.0037, -7.61583]
  },
  {
    id: "sidi-bennour",
    name: "PBE SIDI BENNOUR",
    addressFr: "Ard El Kheir 3 Hay El Fath",
    addressAr: "أرض الخير 3، حي الفتح",
    phone: "05 22 66 31 66",
    hoursFr: "Lun–Ven: 8h30–12h30, 14h30–18h30 | Sam: 9h–13h",
    hoursAr: "الإثنين–الجمعة: 8:30–12:30, 14:30–18:30 | السبت: 9:00–13:00",
    coordinates: [32.6432, -8.42844]
  },
  {
    id: "tanger",
    name: "PBE TANGER",
    addressFr: "Val Fleuri Lot Al Bassatine N°107",
    addressAr: "فال فلوري، لوط البساتين رقم 107",
    phone: "05 22 66 31 66",
    hoursFr: "Lun–Ven: 8h30–12h30, 14h30–18h30 | Sam: 9h–13h",
    hoursAr: "الإثنين–الجمعة: 8:30–12:30, 14:30–18:30 | السبت: 9:00–13:00",
    coordinates: [35.7699, -5.82892]
  },
  {
    id: "taroudant",
    name: "PBE TAROUDANT",
    addressFr: "46 Boulevard Mokhtar Assoussi Rue Balali",
    addressAr: "46 بلفار المختار السوسي، زنقة بلالي",
    phone: "05 22 66 31 66",
    hoursFr: "Lun–Ven: 8h30–12h30, 14h30–18h30 | Sam: 9h–13h",
    hoursAr: "الإثنين–الجمعة: 8:30–12:30, 14:30–18:30 | السبت: 9:00–13:00",
    coordinates: [30.4689, -8.87431]
  },
  {
    id: "tetouan",
    name: "PBE TETOUAN",
    addressFr: "Bd Oujda Résidence Al Oumna Bloc 5 Local N°2",
    addressAr: "بلفار وجدة، ريزيدونس الأمنة، بلوك 5، محل رقم 2",
    phone: "05 22 66 31 66",
    hoursFr: "Lun–Ven: 8h30–12h30, 14h30–18h30 | Sam: 9h–13h",
    hoursAr: "الإثنين–الجمعة: 8:30–12:30, 14:30–18:30 | السبت: 9:00–13:00",
    coordinates: [35.5704, -5.35053]
  },
  {
    id: "tinghir",
    name: "PBE TINGHIR",
    addressFr: "Hay Tichka Tinghir",
    addressAr: "حي تيشكا، تنغير",
    phone: "05 22 66 31 66",
    hoursFr: "Lun–Ven: 8h30–12h30, 14h30–18h30 | Sam: 9h–13h",
    hoursAr: "الإثنين–الجمعة: 8:30–12:30, 14:30–18:30 | السبت: 9:00–13:00",
    coordinates: [31.5054, -5.54081]
  },
  {
    id: "zagora",
    name: "PBE ZAGORA",
    addressFr: "278 Lot Draa",
    addressAr: "278 لوط درعة",
    phone: "05 22 66 31 66",
    hoursFr: "Lun–Ven: 8h30–12h30, 14h30–18h30 | Sam: 9h–13h",
    hoursAr: "الإثنين–الجمعة: 8:30–12:30, 14:30–18:30 | السبت: 9:00–13:00",
    coordinates: [30.3451, -5.83772]
  },
  {
    id: "mohammedia",
    name: "PBE MOHAMMEDIA",
    addressFr: "Av Sebeta Résidence Tahra",
    addressAr: "شارع سبتة، ريزيدونس طاهرة",
    phone: "05 22 66 31 66",
    hoursFr: "Lun–Ven: 8h30–12h30, 14h30–18h30 | Sam: 9h–13h",
    hoursAr: "الإثنين–الجمعة: 8:30–12:30, 14:30–18:30 | السبت: 9:00–13:00",
    coordinates: [33.6898, -7.36292]
  },
  {
    id: "larache",
    name: "PBE LARACHE",
    addressFr: "Lotissement Chaaban N°1137",
    addressAr: "تجزئة شعبان رقم 1137",
    phone: "05 22 66 31 66",
    hoursFr: "Lun–Ven: 8h30–12h30, 14h30–18h30 | Sam: 9h–13h",
    hoursAr: "الإثنين–الجمعة: 8:30–12:30, 14:30–18:30 | السبت: 9:00–13:00",
    coordinates: [35.1659, -6.15222]
  },
  {
    id: "taza",
    name: "PBE TAZA",
    addressFr: "Jnane 2 Quartier El Bahra Route de Fès",
    addressAr: "جنان 2، حي البهرة، طريق فاس",
    phone: "05 22 66 31 66",
    hoursFr: "Lun–Ven: 8h30–12h30, 14h30–18h30 | Sam: 9h–13h",
    hoursAr: "الإثنين–الجمعة: 8:30–12:30, 14:30–18:30 | السبت: 9:00–13:00",
    coordinates: [34.2324, -4.03019]
  },
  {
    id: "khenifra",
    name: "PBE KHENIFRA",
    addressFr: "N°261 Hay Amalou Aghribin Bd Al Massira Al Khadra",
    addressAr: "رقم 261، حي أمالو أغريبين، بلفار المسيرة الخضراء",
    phone: "05 22 66 31 66",
    hoursFr: "Lun–Ven: 8h30–12h30, 14h30–18h30 | Sam: 9h–13h",
    hoursAr: "الإثنين–الجمعة: 8:30–12:30, 14:30–18:30 | السبت: 9:00–13:00",
    coordinates: [32.9385, -5.65306]
  },
  {
    id: "benguerir",
    name: "PBE BENGUERIR",
    addressFr: "2512 Quartier Jnane Elkhair",
    addressAr: "2512 حي جنان الخير",
    phone: "05 22 66 31 66",
    hoursFr: "Lun–Ven: 8h30–12h30, 14h30–18h30 | Sam: 9h–13h",
    hoursAr: "الإثنين–الجمعة: 8:30–12:30, 14:30–18:30 | السبت: 9:00–13:00",
    coordinates: [32.2378, -7.94336]
  },
  {
    id: "aitmelloul",
    name: "PBE AITMELLOUL",
    addressFr: "Lotissement Ait Said N°24",
    addressAr: "تجزئة آيت سعيد رقم 24",
    phone: "05 22 66 31 66",
    hoursFr: "Lun–Ven: 8h30–12h30, 14h30–18h30 | Sam: 9h–13h",
    hoursAr: "الإثنين–الجمعة: 8:30–12:30, 14:30–18:30 | السبت: 9:00–13:00",
    coordinates: [30.351, -9.49353]
  },
  {
    id: "errachidia",
    name: "PBE ERRACHIDIA",
    addressFr: "Kaouzia 1",
    addressAr: "القاوزية 1",
    phone: "05 22 66 31 66",
    hoursFr: "Lun–Ven: 8h30–12h30, 14h30–18h30 | Sam: 9h–13h",
    hoursAr: "الإثنين–الجمعة: 8:30–12:30, 14:30–18:30 | السبت: 9:00–13:00",
    coordinates: [31.9297, -4.422]
  },
  {
    id: "had-soualem",
    name: "PBE HAD SOUALEM",
    addressFr: "N°108 Lotissement Altayssir",
    addressAr: "رقم 108، تجزئة التيسير",
    phone: "05 22 66 31 66",
    hoursFr: "Lun–Ven: 8h30–12h30, 14h30–18h30 | Sam: 9h–13h",
    hoursAr: "الإثنين–الجمعة: 8:30–12:30, 14:30–18:30 | السبت: 9:00–13:00",
    coordinates: [33.4223, -7.85228]
  },
  {
    id: "temara",
    name: "PBE TEMARA",
    addressFr: "Temara",
    addressAr: "تمارة",
    phone: "05 22 66 31 66",
    hoursFr: "Lun–Ven: 8h30–12h30, 14h30–18h30 | Sam: 9h–13h",
    hoursAr: "الإثنين–الجمعة: 8:30–12:30, 14:30–18:30 | السبت: 9:00–13:00",
    coordinates: [33.926, -6.89005]
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
