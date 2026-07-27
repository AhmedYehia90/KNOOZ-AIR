import AircraftCard from "@/components/AircraftCard";
import { aircraftFleet } from "@/data/aircraft";

export default function Home() {
  const totalAircraft = aircraftFleet.reduce((sum, a) => sum + a.quantity, 0);
  const totalPassengers = aircraftFleet.reduce(
    (sum, a) => sum + a.passengers * a.quantity,
    0
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
        <div className="container py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center text-white font-bold text-lg">
              K
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">Kalabsha Airlines</h1>
              <p className="text-xs text-gray-600">أسطول الطائرات</p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-sm font-semibold text-gray-900">
              {totalAircraft} طائرة
            </p>
            <p className="text-xs text-gray-600">
              {totalPassengers.toLocaleString()} مقعد
            </p>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-96 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/manus-storage/kalabsha-hero_f95c7228.jpg')",
            backgroundPosition: "center 30%",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-white/0"></div>
        </div>

        <div className="relative h-full flex items-center justify-center text-center text-white">
          <div className="max-w-2xl mx-auto px-4">
            <h2 className="text-5xl font-bold mb-4">أسطول كلايشة للطيران</h2>
            <p className="text-xl opacity-90">
              اكتشف أحدث وأفضل طائرات في الشرق الأوسط
            </p>
          </div>
        </div>

        {/* Wave divider */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-white">
          <svg
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            className="w-full h-full"
          >
            <path
              d="M0,50 Q300,0 600,50 T1200,50 L1200,120 L0,120 Z"
              fill="white"
            ></path>
          </svg>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white py-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">
                {totalAircraft}
              </div>
              <p className="text-gray-600">طائرة حديثة</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">
                {aircraftFleet.length}
              </div>
              <p className="text-gray-600">طراز مختلف</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">
                {totalPassengers.toLocaleString()}
              </div>
              <p className="text-gray-600">سعة ركاب إجمالية</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">
                {Math.max(...aircraftFleet.map((a) => a.range.km)).toLocaleString()}
              </div>
              <p className="text-gray-600">أقصى مدى (كم)</p>
            </div>
          </div>
        </div>
      </section>

      {/* Aircraft Fleet Section */}
      <section className="py-16">
        <div className="container">
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-3">
              أسطولنا الحديث
            </h2>
            <p className="text-lg text-gray-600">
              تعرف على جميع طائرات كلايشة للطيران وتفاصيلها الفنية الكاملة
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {aircraftFleet.map((aircraft, index) => (
              <AircraftCard
                key={aircraft.id}
                aircraft={aircraft}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-12 mt-16">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-lg font-bold mb-4">Kalabsha Airlines</h3>
              <p className="text-blue-100">
                شركة طيران حديثة تقدم خدمات نقل آمنة وموثوقة في الشرق الأوسط وأفريقيا
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">المراكز الرئيسية</h3>
              <ul className="space-y-2 text-blue-100">
                <li>مطار دبي الدولي (DXB) - الإمارات</li>
                <li>مطار القاهرة الدولي (CAI) - مصر</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">معلومات</h3>
              <ul className="space-y-2 text-blue-100">
                <li>حول الشركة</li>
                <li>الخدمات</li>
                <li>اتصل بنا</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-blue-700 pt-8">
            <p className="text-center text-blue-100">
              © 2026 Kalabsha Airlines. جميع الحقوق محفوظة.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
