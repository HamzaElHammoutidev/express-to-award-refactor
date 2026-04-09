import { useState } from "react";
import { Plus, Trash2, Edit2, Check, X, Search, ToggleLeft, ToggleRight, Wifi, WifiOff, Eye, EyeOff, Server } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import { toast } from "@/hooks/use-toast";

// --- Mock data ---
interface Insurance { id: string; name: string; active: boolean }
interface VehicleBrand { id: string; name: string; models: VehicleModel[] }
interface VehicleModel { id: string; name: string; years: string[] }
interface PlateRegion { id: string; code: string; label: string; active: boolean; type: string }

const initialInsurances: Insurance[] = [
  { id: "1", name: "Wafa Assurance", active: true },
  { id: "2", name: "Saham Assurance", active: true },
  { id: "3", name: "RMA", active: true },
  { id: "4", name: "AXA Assurance Maroc", active: true },
  { id: "5", name: "Atlanta", active: false },
  { id: "6", name: "MAMDA", active: true },
];

const initialBrands: VehicleBrand[] = [
  { id: "1", name: "Dacia", models: [
    { id: "m1", name: "Logan", years: ["2020", "2021", "2022", "2023", "2024"] },
    { id: "m2", name: "Sandero", years: ["2021", "2022", "2023", "2024"] },
    { id: "m3", name: "Duster", years: ["2019", "2020", "2021", "2022", "2023", "2024"] },
  ]},
  { id: "2", name: "Renault", models: [
    { id: "m4", name: "Clio", years: ["2019", "2020", "2021", "2022", "2023"] },
    { id: "m5", name: "Megane", years: ["2020", "2021", "2022", "2023"] },
  ]},
  { id: "3", name: "Peugeot", models: [
    { id: "m6", name: "208", years: ["2020", "2021", "2022", "2023", "2024"] },
    { id: "m7", name: "308", years: ["2021", "2022", "2023"] },
  ]},
  { id: "4", name: "Volkswagen", models: [
    { id: "m8", name: "Golf", years: ["2019", "2020", "2021", "2022", "2023"] },
    { id: "m9", name: "Polo", years: ["2020", "2021", "2022", "2023"] },
  ]},
];

const plateTypes = ["Particulier", "Professionnel", "Transport", "Diplomatique", "Militaire"];

const initialPlateRegions: PlateRegion[] = [
  { id: "1", code: "A", label: "Rabat", active: true, type: "Particulier" },
  { id: "2", code: "B", label: "Casablanca", active: true, type: "Particulier" },
  { id: "3", code: "D", label: "Marrakech", active: true, type: "Particulier" },
  { id: "4", code: "E", label: "Fès", active: true, type: "Particulier" },
  { id: "5", code: "H", label: "Tanger", active: true, type: "Particulier" },
  { id: "6", code: "T", label: "Agadir", active: false, type: "Particulier" },
  { id: "7", code: "WW", label: "National", active: true, type: "Professionnel" },
  { id: "8", code: "CD", label: "Corps Diplomatique", active: false, type: "Diplomatique" },
];

// ========== INSURANCES TAB ==========
const InsurancesTab = () => {
  const [insurances, setInsurances] = useState<Insurance[]>(initialInsurances);
  const [search, setSearch] = useState("");
  const [showAdd, setShowAdd] = useState(false);
  const [newName, setNewName] = useState("");
  const [editId, setEditId] = useState<string | null>(null);
  const [editName, setEditName] = useState("");

  const filtered = insurances.filter(i => i.name.toLowerCase().includes(search.toLowerCase()));

  const addInsurance = () => {
    if (!newName.trim()) return;
    setInsurances(prev => [...prev, { id: Date.now().toString(), name: newName.trim(), active: true }]);
    setNewName("");
    setShowAdd(false);
    toast({ title: "Assurance ajoutée", description: newName.trim() });
  };

  const toggleActive = (id: string) => {
    setInsurances(prev => prev.map(i => i.id === id ? { ...i, active: !i.active } : i));
  };

  const startEdit = (ins: Insurance) => { setEditId(ins.id); setEditName(ins.name); };
  const saveEdit = () => {
    if (!editName.trim()) return;
    setInsurances(prev => prev.map(i => i.id === editId ? { ...i, name: editName.trim() } : i));
    setEditId(null);
  };

  const deleteInsurance = (id: string) => {
    setInsurances(prev => prev.filter(i => i.id !== id));
    toast({ title: "Assurance supprimée" });
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-3 flex-wrap">
        <div className="relative flex-1 min-w-[200px]">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Rechercher une assurance..." value={search} onChange={e => setSearch(e.target.value)} className="pl-9 h-9" />
        </div>
        <Button size="sm" onClick={() => setShowAdd(true)} className="gap-1.5"><Plus className="h-4 w-4" /> Ajouter</Button>
      </div>

      <div className="bg-card rounded-xl border border-border overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="border-b border-border bg-muted/30">
              <th className="text-left px-5 py-3 text-xs font-semibold text-muted-foreground uppercase">Nom</th>
              <th className="text-center px-5 py-3 text-xs font-semibold text-muted-foreground uppercase w-24">Statut</th>
              <th className="text-right px-5 py-3 text-xs font-semibold text-muted-foreground uppercase w-32">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {filtered.map(ins => (
              <tr key={ins.id} className="hover:bg-muted/20 transition-colors">
                <td className="px-5 py-3">
                  {editId === ins.id ? (
                    <div className="flex items-center gap-2">
                      <Input value={editName} onChange={e => setEditName(e.target.value)} className="h-8 max-w-[250px]" autoFocus />
                      <button onClick={saveEdit} className="p-1 text-green-600 hover:bg-green-50 rounded"><Check className="h-4 w-4" /></button>
                      <button onClick={() => setEditId(null)} className="p-1 text-muted-foreground hover:bg-muted rounded"><X className="h-4 w-4" /></button>
                    </div>
                  ) : (
                    <span className="text-sm font-medium">{ins.name}</span>
                  )}
                </td>
                <td className="px-5 py-3 text-center">
                  <button onClick={() => toggleActive(ins.id)}>
                    {ins.active ? <ToggleRight className="h-6 w-6 text-green-600 mx-auto" /> : <ToggleLeft className="h-6 w-6 text-muted-foreground mx-auto" />}
                  </button>
                </td>
                <td className="px-5 py-3">
                  <div className="flex items-center justify-end gap-1">
                    <button onClick={() => startEdit(ins)} className="p-1.5 rounded-md hover:bg-muted text-muted-foreground"><Edit2 className="h-3.5 w-3.5" /></button>
                    <button onClick={() => deleteInsurance(ins.id)} className="p-1.5 rounded-md hover:bg-destructive/10 text-destructive"><Trash2 className="h-3.5 w-3.5" /></button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Dialog open={showAdd} onOpenChange={setShowAdd}>
        <DialogContent className="max-w-md">
          <DialogHeader><DialogTitle>Ajouter une assurance</DialogTitle></DialogHeader>
          <div className="space-y-3 pt-2">
            <Label>Nom de la compagnie</Label>
            <Input value={newName} onChange={e => setNewName(e.target.value)} placeholder="Ex: Allianz Maroc" />
          </div>
          <DialogFooter><Button onClick={addInsurance}>Ajouter</Button></DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

// ========== VEHICLES TAB ==========
const VehiclesTab = () => {
  const [brands, setBrands] = useState<VehicleBrand[]>(initialBrands);
  const [selectedBrand, setSelectedBrand] = useState<string | null>(null);
  const [showAddBrand, setShowAddBrand] = useState(false);
  const [showAddModel, setShowAddModel] = useState(false);
  const [newBrand, setNewBrand] = useState("");
  const [newModel, setNewModel] = useState("");
  const [newYears, setNewYears] = useState("");

  const brand = brands.find(b => b.id === selectedBrand);

  const addBrand = () => {
    if (!newBrand.trim()) return;
    setBrands(prev => [...prev, { id: Date.now().toString(), name: newBrand.trim(), models: [] }]);
    setNewBrand("");
    setShowAddBrand(false);
    toast({ title: "Marque ajoutée", description: newBrand.trim() });
  };

  const addModel = () => {
    if (!newModel.trim() || !selectedBrand) return;
    const years = newYears.split(",").map(y => y.trim()).filter(Boolean);
    setBrands(prev => prev.map(b => b.id === selectedBrand ? {
      ...b, models: [...b.models, { id: Date.now().toString(), name: newModel.trim(), years }]
    } : b));
    setNewModel("");
    setNewYears("");
    setShowAddModel(false);
    toast({ title: "Modèle ajouté" });
  };

  const deleteBrand = (id: string) => {
    setBrands(prev => prev.filter(b => b.id !== id));
    if (selectedBrand === id) setSelectedBrand(null);
    toast({ title: "Marque supprimée" });
  };

  const deleteModel = (modelId: string) => {
    setBrands(prev => prev.map(b => b.id === selectedBrand ? {
      ...b, models: b.models.filter(m => m.id !== modelId)
    } : b));
  };

  return (
    <div className="grid md:grid-cols-[280px_1fr] gap-4">
      {/* Brands list */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">Marques</h3>
          <Button size="sm" variant="outline" onClick={() => setShowAddBrand(true)} className="h-7 text-xs gap-1"><Plus className="h-3 w-3" /> Ajouter</Button>
        </div>
        <div className="bg-card rounded-xl border border-border overflow-hidden divide-y divide-border">
          {brands.map(b => (
            <div key={b.id} className={`flex items-center justify-between px-4 py-2.5 cursor-pointer transition-colors ${selectedBrand === b.id ? "bg-primary/10 text-primary" : "hover:bg-muted/30"}`} onClick={() => setSelectedBrand(b.id)}>
              <div>
                <span className="text-sm font-medium">{b.name}</span>
                <span className="text-xs text-muted-foreground ml-2">({b.models.length} modèles)</span>
              </div>
              <button onClick={e => { e.stopPropagation(); deleteBrand(b.id); }} className="p-1 rounded hover:bg-destructive/10 text-destructive opacity-0 group-hover:opacity-100"><Trash2 className="h-3 w-3" /></button>
            </div>
          ))}
        </div>
      </div>

      {/* Models */}
      <div>
        {brand ? (
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-semibold">Modèles — <span className="text-primary">{brand.name}</span></h3>
              <Button size="sm" onClick={() => setShowAddModel(true)} className="gap-1.5 h-8"><Plus className="h-3.5 w-3.5" /> Ajouter modèle</Button>
            </div>
            <div className="bg-card rounded-xl border border-border overflow-hidden">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border bg-muted/30">
                    <th className="text-left px-5 py-3 text-xs font-semibold text-muted-foreground uppercase">Modèle</th>
                    <th className="text-left px-5 py-3 text-xs font-semibold text-muted-foreground uppercase">Années</th>
                    <th className="text-right px-5 py-3 text-xs font-semibold text-muted-foreground uppercase w-20">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {brand.models.map(m => (
                    <tr key={m.id} className="hover:bg-muted/20">
                      <td className="px-5 py-3 text-sm font-medium">{m.name}</td>
                      <td className="px-5 py-3">
                        <div className="flex flex-wrap gap-1">{m.years.map(y => <Badge key={y} variant="secondary" className="text-xs">{y}</Badge>)}</div>
                      </td>
                      <td className="px-5 py-3 text-right">
                        <button onClick={() => deleteModel(m.id)} className="p-1.5 rounded-md hover:bg-destructive/10 text-destructive"><Trash2 className="h-3.5 w-3.5" /></button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ) : (
          <div className="flex items-center justify-center h-64 text-muted-foreground text-sm">Sélectionnez une marque pour voir ses modèles</div>
        )}
      </div>

      <Dialog open={showAddBrand} onOpenChange={setShowAddBrand}>
        <DialogContent className="max-w-md">
          <DialogHeader><DialogTitle>Ajouter une marque</DialogTitle></DialogHeader>
          <div className="space-y-3 pt-2"><Label>Nom de la marque</Label><Input value={newBrand} onChange={e => setNewBrand(e.target.value)} placeholder="Ex: Toyota" /></div>
          <DialogFooter><Button onClick={addBrand}>Ajouter</Button></DialogFooter>
        </DialogContent>
      </Dialog>

      <Dialog open={showAddModel} onOpenChange={setShowAddModel}>
        <DialogContent className="max-w-md">
          <DialogHeader><DialogTitle>Ajouter un modèle</DialogTitle></DialogHeader>
          <div className="space-y-3 pt-2">
            <div><Label>Nom du modèle</Label><Input value={newModel} onChange={e => setNewModel(e.target.value)} placeholder="Ex: Corolla" className="mt-1" /></div>
            <div><Label>Années (séparées par des virgules)</Label><Input value={newYears} onChange={e => setNewYears(e.target.value)} placeholder="2020, 2021, 2022, 2023" className="mt-1" /></div>
          </div>
          <DialogFooter><Button onClick={addModel}>Ajouter</Button></DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

// ========== PLATE REGIONS TAB ==========
const PlateRegionsTab = () => {
  const [regions, setRegions] = useState<PlateRegion[]>(initialPlateRegions);
  const [typeFilter, setTypeFilter] = useState("all");
  const [showAdd, setShowAdd] = useState(false);
  const [newCode, setNewCode] = useState("");
  const [newLabel, setNewLabel] = useState("");
  const [newType, setNewType] = useState("Particulier");

  const filtered = regions.filter(r => typeFilter === "all" || r.type === typeFilter);

  const addRegion = () => {
    if (!newCode.trim() || !newLabel.trim()) return;
    setRegions(prev => [...prev, { id: Date.now().toString(), code: newCode.trim(), label: newLabel.trim(), active: true, type: newType }]);
    setNewCode(""); setNewLabel(""); setShowAdd(false);
    toast({ title: "Lettre ajoutée", description: `${newCode.trim()} — ${newLabel.trim()}` });
  };

  const toggleActive = (id: string) => {
    setRegions(prev => prev.map(r => r.id === id ? { ...r, active: !r.active } : r));
  };

  const deleteRegion = (id: string) => {
    setRegions(prev => prev.filter(r => r.id !== id));
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-3 flex-wrap">
        <Select value={typeFilter} onValueChange={setTypeFilter}>
          <SelectTrigger className="w-44 h-9"><SelectValue placeholder="Type" /></SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Tous les types</SelectItem>
            {plateTypes.map(t => <SelectItem key={t} value={t}>{t}</SelectItem>)}
          </SelectContent>
        </Select>
        <Button size="sm" onClick={() => setShowAdd(true)} className="gap-1.5 ml-auto"><Plus className="h-4 w-4" /> Ajouter</Button>
      </div>

      <div className="bg-card rounded-xl border border-border overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="border-b border-border bg-muted/30">
              <th className="text-left px-5 py-3 text-xs font-semibold text-muted-foreground uppercase">Code</th>
              <th className="text-left px-5 py-3 text-xs font-semibold text-muted-foreground uppercase">Région</th>
              <th className="text-left px-5 py-3 text-xs font-semibold text-muted-foreground uppercase">Type</th>
              <th className="text-center px-5 py-3 text-xs font-semibold text-muted-foreground uppercase w-24">Actif</th>
              <th className="text-right px-5 py-3 text-xs font-semibold text-muted-foreground uppercase w-20">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {filtered.map(r => (
              <tr key={r.id} className="hover:bg-muted/20">
                <td className="px-5 py-3"><Badge variant="outline" className="font-mono text-sm">{r.code}</Badge></td>
                <td className="px-5 py-3 text-sm font-medium">{r.label}</td>
                <td className="px-5 py-3"><Badge variant="secondary" className="text-xs">{r.type}</Badge></td>
                <td className="px-5 py-3 text-center">
                  <Switch checked={r.active} onCheckedChange={() => toggleActive(r.id)} />
                </td>
                <td className="px-5 py-3 text-right">
                  <button onClick={() => deleteRegion(r.id)} className="p-1.5 rounded-md hover:bg-destructive/10 text-destructive"><Trash2 className="h-3.5 w-3.5" /></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Dialog open={showAdd} onOpenChange={setShowAdd}>
        <DialogContent className="max-w-md">
          <DialogHeader><DialogTitle>Ajouter une lettre d'immatriculation</DialogTitle></DialogHeader>
          <div className="space-y-3 pt-2">
            <div><Label>Code lettre</Label><Input value={newCode} onChange={e => setNewCode(e.target.value)} placeholder="Ex: A, B, WW" className="mt-1" /></div>
            <div><Label>Région / Label</Label><Input value={newLabel} onChange={e => setNewLabel(e.target.value)} placeholder="Ex: Casablanca" className="mt-1" /></div>
            <div>
              <Label>Type d'immatriculation</Label>
              <Select value={newType} onValueChange={setNewType}>
                <SelectTrigger className="mt-1"><SelectValue /></SelectTrigger>
                <SelectContent>{plateTypes.map(t => <SelectItem key={t} value={t}>{t}</SelectItem>)}</SelectContent>
              </Select>
            </div>
          </div>
          <DialogFooter><Button onClick={addRegion}>Ajouter</Button></DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

// ========== ODOO TAB ==========
const OdooTab = () => {
  const [ip, setIp] = useState("https://odoo.parebrise-express.ma");
  const [dbName, setDbName] = useState("pbe_production");
  const [login, setLogin] = useState("admin@parebrise-express.ma");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [checking, setChecking] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const checkConnection = async () => {
    setChecking(true);
    setStatus("idle");
    // Simulate connection check
    await new Promise(r => setTimeout(r, 2000));
    const isSuccess = ip.trim() !== "" && login.trim() !== "" && password.trim() !== "";
    setStatus(isSuccess ? "success" : "error");
    setChecking(false);

    if (isSuccess) {
      toast({ title: "✅ Connexion réussie", description: "Les identifiants Odoo sont valides. La synchronisation est active." });
    } else {
      toast({ title: "❌ Échec de connexion", description: "Vérifiez l'adresse IP, l'identifiant et le mot de passe.", variant: "destructive" });
    }
  };

  const saveConfig = () => {
    toast({ title: "Configuration sauvegardée", description: "Les paramètres Odoo ont été enregistrés." });
  };

  return (
    <div className="max-w-2xl space-y-6">
      {/* Status banner */}
      <div className={`flex items-center gap-3 p-4 rounded-xl border ${status === "success" ? "bg-green-50 border-green-200 dark:bg-green-950/20 dark:border-green-800" : status === "error" ? "bg-red-50 border-red-200 dark:bg-red-950/20 dark:border-red-800" : "bg-muted/30 border-border"}`}>
        <div className={`w-10 h-10 rounded-xl grid place-items-center ${status === "success" ? "bg-green-100 text-green-600 dark:bg-green-900 dark:text-green-400" : status === "error" ? "bg-red-100 text-red-600 dark:bg-red-900 dark:text-red-400" : "bg-muted text-muted-foreground"}`}>
          {status === "success" ? <Wifi className="h-5 w-5" /> : status === "error" ? <WifiOff className="h-5 w-5" /> : <Server className="h-5 w-5" />}
        </div>
        <div>
          <p className="text-sm font-semibold">{status === "success" ? "Connecté à Odoo" : status === "error" ? "Non connecté" : "Statut de connexion"}</p>
          <p className="text-xs text-muted-foreground">{status === "success" ? "Synchronisation active — les déclarations sont envoyées vers Odoo" : status === "error" ? "La connexion a échoué — vérifiez vos identifiants" : "Configurez et testez la connexion Odoo"}</p>
        </div>
      </div>

      {/* Form */}
      <div className="bg-card rounded-xl border border-border p-6 space-y-5">
        <h3 className="text-lg font-semibold flex items-center gap-2"><Server className="h-5 w-5 text-primary" /> Configuration Odoo</h3>

        <div className="grid gap-4">
          <div>
            <Label>Adresse IP / URL du serveur</Label>
            <Input value={ip} onChange={e => setIp(e.target.value)} placeholder="https://odoo.exemple.com" className="mt-1.5" />
          </div>
          <div>
            <Label>Nom de la base de données</Label>
            <Input value={dbName} onChange={e => setDbName(e.target.value)} placeholder="production_db" className="mt-1.5" />
          </div>
          <div>
            <Label>Identifiant (Login)</Label>
            <Input value={login} onChange={e => setLogin(e.target.value)} placeholder="admin@mondomaine.com" className="mt-1.5" />
          </div>
          <div>
            <Label>Mot de passe</Label>
            <div className="relative mt-1.5">
              <Input type={showPassword ? "text" : "password"} value={password} onChange={e => setPassword(e.target.value)} placeholder="••••••••" className="pr-10" />
              <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground">
                {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </button>
            </div>
          </div>
        </div>

        <div className="flex gap-3 pt-2">
          <Button variant="outline" onClick={checkConnection} disabled={checking} className="gap-2">
            {checking ? <span className="w-4 h-4 border-2 border-primary border-t-transparent rounded-full animate-spin" /> : <Wifi className="h-4 w-4" />}
            {checking ? "Test en cours..." : "Tester la connexion"}
          </Button>
          <Button onClick={saveConfig} className="gap-2">Sauvegarder</Button>
        </div>
      </div>

      {/* Sync info */}
      <div className="bg-card rounded-xl border border-border p-6 space-y-4">
        <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">Modules synchronisés</h3>
        <div className="grid grid-cols-2 gap-3">
          {[
            { label: "Déclarations → Odoo CRM", active: true },
            { label: "Clients → Contacts Odoo", active: true },
            { label: "Factures → Comptabilité", active: false },
            { label: "Stock vitrage → Inventaire", active: false },
          ].map((mod, i) => (
            <div key={i} className="flex items-center justify-between p-3 rounded-lg border border-border bg-muted/20">
              <span className="text-sm">{mod.label}</span>
              <Switch checked={mod.active} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// ========== MAIN PAGE ==========
const DeclarationSettingsAdmin = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Paramétrage déclarations</h1>
        <p className="text-muted-foreground text-sm mt-1">Gérez les assurances, véhicules, immatriculations et la connexion Odoo</p>
      </div>

      <Tabs defaultValue="insurances" className="space-y-4">
        <TabsList className="bg-muted/50">
          <TabsTrigger value="insurances">Assurances</TabsTrigger>
          <TabsTrigger value="vehicles">Véhicules</TabsTrigger>
          <TabsTrigger value="plates">Immatriculations</TabsTrigger>
          <TabsTrigger value="odoo">Connexion Odoo</TabsTrigger>
        </TabsList>

        <TabsContent value="insurances"><InsurancesTab /></TabsContent>
        <TabsContent value="vehicles"><VehiclesTab /></TabsContent>
        <TabsContent value="plates"><PlateRegionsTab /></TabsContent>
        <TabsContent value="odoo"><OdooTab /></TabsContent>
      </Tabs>
    </div>
  );
};

export default DeclarationSettingsAdmin;
