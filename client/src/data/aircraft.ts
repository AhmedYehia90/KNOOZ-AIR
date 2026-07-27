export interface Aircraft {
  id: string;
  name: string;
  manufacturer: string;
  model: string;
  quantity: number;
  passengers: number;
  range: {
    km: number;
    nm: number;
    miles: number;
  };
  cruiseSpeed: {
    kmh: number;
    mach: number;
    mph: number;
  };
  maxAltitude: {
    meters: number;
    feet: number;
  };
  engines: number;
  engineType: string;
  engineThrust?: string;
  wingSpan: {
    meters: number;
    feet: number;
  };
  length: {
    meters: number;
    feet: number;
  };
  cabinWidth: {
    meters: number;
    feet: number;
  };
  maxTakeoffWeight: {
    kg: number;
    lbs: number;
  };
  fuelCapacity: {
    liters: number;
    gallons: number;
  };
  specialFeatures: string[];
  color: string; // Tailwind color for card accent
}

export const aircraftFleet: Aircraft[] = [
  {
    id: "embraer-170",
    name: "Embraer 170",
    manufacturer: "Embraer",
    model: "E-170",
    quantity: 5,
    passengers: 78,
    range: {
      km: 2897,
      nm: 1563,
      miles: 1800,
    },
    cruiseSpeed: {
      kmh: 877,
      mach: 0.78,
      mph: 545,
    },
    maxAltitude: {
      meters: 12500,
      feet: 41000,
    },
    engines: 2,
    engineType: "Turbofan",
    wingSpan: {
      meters: 26.0,
      feet: 85.3,
    },
    length: {
      meters: 29.3,
      feet: 96.1,
    },
    cabinWidth: {
      meters: 3.5,
      feet: 11.5,
    },
    maxTakeoffWeight: {
      kg: 38790,
      lbs: 85500,
    },
    fuelCapacity: {
      liters: 13550,
      gallons: 3580,
    },
    specialFeatures: [
      "طائرة إقليمية حديثة",
      "مناسبة للمسافات القصيرة والمتوسطة",
      "كفاءة وقود عالية",
      "راحة الركاب المحسّنة",
    ],
    color: "from-blue-600 to-blue-700",
  },
  {
    id: "airbus-a321neo",
    name: "Airbus A321neo",
    manufacturer: "Airbus",
    model: "A321neo",
    quantity: 6,
    passengers: 220,
    range: {
      km: 7400,
      nm: 3995,
      miles: 4600,
    },
    cruiseSpeed: {
      kmh: 876,
      mach: 0.78,
      mph: 544,
    },
    maxAltitude: {
      meters: 12500,
      feet: 41000,
    },
    engines: 2,
    engineType: "Turbofan",
    wingSpan: {
      meters: 35.8,
      feet: 117.5,
    },
    length: {
      meters: 44.5,
      feet: 146.0,
    },
    cabinWidth: {
      meters: 3.95,
      feet: 12.96,
    },
    maxTakeoffWeight: {
      kg: 93500,
      lbs: 206132,
    },
    fuelCapacity: {
      liters: 32840,
      gallons: 8679,
    },
    specialFeatures: [
      "محركات جديدة موفرة للوقود",
      "مدى طويل للرحلات الأوروبية",
      "تصميم حديث وفسيح",
      "أنظمة ترفيه متقدمة",
    ],
    color: "from-cyan-500 to-cyan-600",
  },
  {
    id: "airbus-a350-900",
    name: "Airbus A350-900",
    manufacturer: "Airbus",
    model: "A350-900",
    quantity: 1,
    passengers: 325,
    range: {
      km: 15000,
      nm: 8100,
      miles: 9320,
    },
    cruiseSpeed: {
      kmh: 903,
      mach: 0.85,
      mph: 561,
    },
    maxAltitude: {
      meters: 13100,
      feet: 43000,
    },
    engines: 2,
    engineType: "Turbofan",
    wingSpan: {
      meters: 64.75,
      feet: 212.4,
    },
    length: {
      meters: 66.8,
      feet: 219.2,
    },
    cabinWidth: {
      meters: 6.1,
      feet: 20.0,
    },
    maxTakeoffWeight: {
      kg: 280000,
      lbs: 617295,
    },
    fuelCapacity: {
      liters: 138000,
      gallons: 36463,
    },
    specialFeatures: [
      "طائرة طويلة المدى فائقة الحداثة",
      "مقصورة واسعة وفسيحة",
      "تقنية مركبة متقدمة",
      "كفاءة وقود استثنائية",
      "رحلات مباشرة لمسافات طويلة جداً",
    ],
    color: "from-indigo-600 to-indigo-700",
  },
  {
    id: "boeing-787-9",
    name: "Boeing 787-9 Dreamliner",
    manufacturer: "Boeing",
    model: "787-9",
    quantity: 2,
    passengers: 290,
    range: {
      km: 14140,
      nm: 7635,
      miles: 8785,
    },
    cruiseSpeed: {
      kmh: 903,
      mach: 0.85,
      mph: 561,
    },
    maxAltitude: {
      meters: 13100,
      feet: 43000,
    },
    engines: 2,
    engineType: "Turbofan",
    engineThrust: "330 kN لكل محرك",
    wingSpan: {
      meters: 60.1,
      feet: 197.2,
    },
    length: {
      meters: 62.8,
      feet: 206.1,
    },
    cabinWidth: {
      meters: 5.49,
      feet: 18.0,
    },
    maxTakeoffWeight: {
      kg: 242500,
      lbs: 534600,
    },
    fuelCapacity: {
      liters: 126372,
      gallons: 33382,
    },
    specialFeatures: [
      "مقصورة بضغط منخفض (6000 قدم)",
      "نوافذ إلكترونية قابلة للتعتيم",
      "رطوبة محسّنة في المقصورة",
      "تقنية مركبة متقدمة (50% من الهيكل)",
      "كفاءة وقود أفضل بـ 20%",
    ],
    color: "from-purple-600 to-purple-700",
  },
  {
    id: "boeing-777-300er",
    name: "Boeing 777-300ER",
    manufacturer: "Boeing",
    model: "777-300ER",
    quantity: 2,
    passengers: 396,
    range: {
      km: 14700,
      nm: 7370,
      miles: 9135,
    },
    cruiseSpeed: {
      kmh: 905,
      mach: 0.84,
      mph: 562,
    },
    maxAltitude: {
      meters: 13100,
      feet: 43000,
    },
    engines: 2,
    engineType: "Turbofan",
    engineThrust: "115,300 رطل لكل محرك",
    wingSpan: {
      meters: 64.8,
      feet: 212.6,
    },
    length: {
      meters: 73.9,
      feet: 242.4,
    },
    cabinWidth: {
      meters: 6.5,
      feet: 21.3,
    },
    maxTakeoffWeight: {
      kg: 348814,
      lbs: 769000,
    },
    fuelCapacity: {
      liters: 181562,
      gallons: 47945,
    },
    specialFeatures: [
      "أكبر محركات توربوفان في العالم",
      "مدى طويل جداً",
      "سعة ركاب كبيرة",
      "تقنية الطيار الآلي المتقدمة",
      "مقصورة فخمة وواسعة",
    ],
    color: "from-red-600 to-red-700",
  },
  {
    id: "boeing-747-8",
    name: "Boeing 747-8",
    manufacturer: "Boeing",
    model: "747-8",
    quantity: 1,
    passengers: 467,
    range: {
      km: 14310,
      nm: 7730,
      miles: 8890,
    },
    cruiseSpeed: {
      kmh: 920,
      mach: 0.9,
      mph: 571,
    },
    maxAltitude: {
      meters: 13100,
      feet: 43000,
    },
    engines: 4,
    engineType: "Turbofan",
    wingSpan: {
      meters: 68.4,
      feet: 224.4,
    },
    length: {
      meters: 76.3,
      feet: 250.2,
    },
    cabinWidth: {
      meters: 6.5,
      feet: 21.3,
    },
    maxTakeoffWeight: {
      kg: 442300,
      lbs: 975000,
    },
    fuelCapacity: {
      liters: 238610,
      gallons: 63034,
    },
    specialFeatures: [
      "أكبر طائرة في الأسطول",
      "جسم مزدوج الطابق",
      "أربعة محركات قوية",
      "ملكة السماء الحديثة",
      "مقصورة فاخرة بطابقين",
      "سعة ركاب استثنائية",
    ],
    color: "from-yellow-600 to-yellow-700",
  },
];
