import { Aircraft } from "@/data/aircraft";
import { Plane } from "lucide-react";

interface AircraftCardProps {
  aircraft: Aircraft;
  index: number;
}

export default function AircraftCard({ aircraft, index }: AircraftCardProps) {
  return (
    <div
      className="group h-full animate-in fade-in slide-in-from-bottom-4 duration-500"
      style={{
        animationDelay: `${index * 80}ms`,
        animationFillMode: "both",
      }}
    >
      <div className="h-full rounded-xl border border-gray-200 bg-white shadow-md transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 overflow-hidden">
        {/* Header with gradient */}
        <div className={`bg-gradient-to-r ${aircraft.color} p-6 text-white`}>
          <div className="flex items-start justify-between mb-4">
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-1">{aircraft.name}</h3>
              <p className="text-sm opacity-90">
                {aircraft.manufacturer} {aircraft.model}
              </p>
            </div>
            <div className="text-right">
              <div className="text-3xl font-bold">{aircraft.quantity}</div>
              <p className="text-xs opacity-90">طائرة</p>
            </div>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Plane className="w-4 h-4" />
            <span>{aircraft.passengers} مقعد</span>
          </div>
        </div>

        {/* Main specifications grid */}
        <div className="p-6">
          <div className="grid grid-cols-2 gap-4 mb-6">
            {/* Range */}
            <div className="border-b border-gray-100 pb-4">
              <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">
                المدى
              </div>
              <div className="text-lg font-bold text-gray-900">
                {aircraft.range.km.toLocaleString()}
              </div>
              <div className="text-xs text-gray-600">
                {aircraft.range.nm.toLocaleString()} ميل بحري
              </div>
            </div>

            {/* Cruise Speed */}
            <div className="border-b border-gray-100 pb-4">
              <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">
                سرعة الطيران
              </div>
              <div className="text-lg font-bold text-gray-900">
                {aircraft.cruiseSpeed.kmh}
              </div>
              <div className="text-xs text-gray-600">
                Mach {aircraft.cruiseSpeed.mach}
              </div>
            </div>

            {/* Max Altitude */}
            <div className="border-b border-gray-100 pb-4">
              <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">
                الارتفاع الأقصى
              </div>
              <div className="text-lg font-bold text-gray-900">
                {aircraft.maxAltitude.meters.toLocaleString()}
              </div>
              <div className="text-xs text-gray-600">
                {aircraft.maxAltitude.feet.toLocaleString()} قدم
              </div>
            </div>

            {/* Engines */}
            <div className="border-b border-gray-100 pb-4">
              <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">
                المحركات
              </div>
              <div className="text-lg font-bold text-gray-900">
                {aircraft.engines}
              </div>
              <div className="text-xs text-gray-600">{aircraft.engineType}</div>
            </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent my-6"></div>

          {/* Technical specifications */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            {/* Wing Span */}
            <div className="space-y-1">
              <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                جناحا الطائرة
              </div>
              <div className="text-sm font-bold text-gray-900">
                {aircraft.wingSpan.meters} م
              </div>
              <div className="text-xs text-gray-600">
                {aircraft.wingSpan.feet} قدم
              </div>
            </div>

            {/* Length */}
            <div className="space-y-1">
              <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                الطول
              </div>
              <div className="text-sm font-bold text-gray-900">
                {aircraft.length.meters} م
              </div>
              <div className="text-xs text-gray-600">
                {aircraft.length.feet} قدم
              </div>
            </div>

            {/* Cabin Width */}
            <div className="space-y-1">
              <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                عرض المقصورة
              </div>
              <div className="text-sm font-bold text-gray-900">
                {aircraft.cabinWidth.meters} م
              </div>
              <div className="text-xs text-gray-600">
                {aircraft.cabinWidth.feet} قدم
              </div>
            </div>

            {/* Max Takeoff Weight */}
            <div className="space-y-1">
              <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                الوزن الأقصى
              </div>
              <div className="text-sm font-bold text-gray-900">
                {(aircraft.maxTakeoffWeight.kg / 1000).toFixed(0)} طن
              </div>
              <div className="text-xs text-gray-600">
                {aircraft.maxTakeoffWeight.lbs.toLocaleString()} رطل
              </div>
            </div>
          </div>

          {/* Fuel Capacity */}
          <div className="bg-gray-50 rounded-lg p-4 mb-6">
            <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">
              سعة الوقود
            </div>
            <div className="flex justify-between items-baseline">
              <div className="text-lg font-bold text-gray-900">
                {aircraft.fuelCapacity.liters.toLocaleString()}
              </div>
              <div className="text-sm text-gray-600">لتر</div>
            </div>
            <div className="text-xs text-gray-600 mt-1">
              {aircraft.fuelCapacity.gallons.toLocaleString()} جالون
            </div>
          </div>

          {/* Engine Thrust if available */}
          {aircraft.engineThrust && (
            <div className="bg-blue-50 rounded-lg p-4 mb-6 border border-blue-100">
              <div className="text-xs font-semibold text-blue-600 uppercase tracking-wide mb-1">
                قوة المحرك
              </div>
              <div className="text-sm font-bold text-blue-900">
                {aircraft.engineThrust}
              </div>
            </div>
          )}

          {/* Special Features */}
          {aircraft.specialFeatures.length > 0 && (
            <div>
              <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">
                المميزات الخاصة
              </div>
              <ul className="space-y-2">
                {aircraft.specialFeatures.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                    <span className="text-blue-600 font-bold mt-0.5">•</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
