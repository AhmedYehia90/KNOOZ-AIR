# Kalabsha Airlines Fleet Cards - Design Philosophy

## Project Overview
تطبيق ويب يعرض كروت تعريفية احترافية لكل طراز طائرة في أسطول شركة Kalabsha Airlines (كلايشة للطيران)، مع تفاصيل فنية كاملة وتصميم متوافق مع الهوية البصرية للشركة.

## Design Approach: Modern Aviation Elegance

### Design Movement
**Modern Aviation Elegance** - تصميم معاصر يجمع بين الاحترافية الفنية والرقي البصري، مستوحى من عالم الطيران والتصميم الصناعي الحديث.

### Core Principles
1. **Clarity & Information Hierarchy**: عرض المعلومات الفنية بطريقة منظمة وسهلة القراءة
2. **Premium Minimalism**: تصميم نظيف مع عناصر مختارة بعناية، بدون إفراط
3. **Brand Consistency**: الالتزام بألوان وعناصر هوية Kalabsha Airlines
4. **Technical Sophistication**: إظهار الطبيعة الفنية والمتقدمة للطائرات

### Color Philosophy
- **Primary**: Navy Blue (#072585) - اللون الأساسي لـ Kalabsha Airlines، يعكس الاحترافية والثقة
- **Accent**: Sky Blue (#1BA7D0) - اللون الثانوي، يمثل السماء والحرية
- **Gold**: #C7A046 - لمسات فاخرة وتمييز المعلومات المهمة
- **Neutral**: White (#FFFFFF) و Light Gray (#F5F5F5) - خلفيات نظيفة
- **Text**: Dark Gray (#1a1a1a) و Navy (#072585) - نصوص واضحة

### Layout Paradigm
- **Grid System**: عرض الكروت في شبكة متجاوبة (3 أعمدة على سطح المكتب، 1-2 على الموبايل)
- **Card-Based Design**: كل طائرة في كرت منفصل مع تفاصيلها الكاملة
- **Hero Section**: صورة بطل تعرض طائرة من أسطول Kalabsha Airlines
- **Asymmetric Spacing**: استخدام تباعد غير متساوٍ لإضافة حيوية

### Signature Elements
1. **Wave Dividers**: فواصل موجية تعكس الحركة والديناميكية (مستوحاة من شعار الشركة)
2. **Aircraft Silhouettes**: ظلال الطائرات كعناصر ديكوريّة
3. **Specification Badges**: شارات دائرية لعرض المواصفات الرئيسية (المقاعد، المدى، السرعة)
4. **Gold Accent Lines**: خطوط ذهبية رفيعة لتقسيم الأقسام

### Interaction Philosophy
- **Smooth Hover Effects**: تأثيرات عند المرور على الكروت (رفع طفيف، ظل متزايد)
- **Staggered Animations**: ظهور الكروت بشكل متتالي عند تحميل الصفحة
- **Interactive Details**: عند النقر على كرت، يمكن توسيع المزيد من التفاصيل (اختياري)

### Animation Guidelines
- **Card Entrance**: Fade-in + slight scale-up (300ms ease-out)
- **Hover State**: Lift effect with shadow expansion (200ms ease-out)
- **Stagger**: 80ms delay between each card entrance
- **Respect Motion**: تفعيل الحركات فقط عند `prefers-reduced-motion: no-preference`

### Typography System
- **Display Font**: Montserrat Bold (600-700) - للعناوين والأرقام الكبيرة
- **Body Font**: Inter (400-500) - للنصوص والمعلومات الفنية
- **Accent Font**: DIN Next Arabic - للنصوص العربية (احترافي وتقني)
- **Hierarchy**:
  - H1: 48px Montserrat Bold (عنوان الصفحة)
  - H2: 32px Montserrat Bold (اسم الطائرة)
  - H3: 20px Montserrat SemiBold (أقسام المعلومات)
  - Body: 16px Inter (النصوص الأساسية)
  - Small: 14px Inter (التفاصيل الإضافية)

### Brand Essence
**Positioning**: تطبيق ويب احترافي يعرض أسطول Kalabsha Airlines بطريقة عصرية وجذابة، موجه للمسافرين والمهتمين بالطيران.

**Personality**: 
- Professional (احترافي)
- Modern (عصري)
- Trustworthy (موثوق)

### Brand Voice
**Tone**: رسمي لكن ودود، تقني لكن سهل الفهم
- **Headline Example**: "اكتشف أسطول كلايشة للطيران الحديث"
- **CTA Example**: "استكشف المواصفات الكاملة"
- **Microcopy**: تجنب الكلام العام، استخدام لغة محددة وتقنية

### Logo & Wordmark
استخدام شعار Kalabsha Airlines الموجود (الطائر الأزرق) مع كتابة "Kalabsha Airlines" بخط Montserrat Bold

### Signature Brand Color
**Navy Blue (#072585)** - اللون الأساسي الذي يعكس احترافية وثقة الشركة

---

## Aircraft Fleet Data

### 1. Embraer 170 (5 طائرات)
- **المقاعد**: 78
- **المدى**: 2,897 كم (1,800 ميل)
- **السرعة**: 877 كم/س (Mach 0.78)
- **الارتفاع الأقصى**: 12,500 م
- **المحركات**: 2 توربوفان

### 2. Airbus A321neo (6 طائرات)
- **المقاعد**: 220
- **المدى**: 7,400 كم (4,000 ميل بحري)
- **السرعة**: 876 كم/س (Mach 0.78)
- **الارتفاع الأقصى**: 12,500 م
- **المحركات**: 2 توربوفان

### 3. Airbus A350-900 (1 طائرة)
- **المقاعد**: 325
- **المدى**: 15,000 كم (8,500 ميل بحري)
- **السرعة**: 903 كم/س (Mach 0.85)
- **الارتفاع الأقصى**: 13,100 م
- **المحركات**: 2 توربوفان

### 4. Boeing 787-9 (2 طائرات)
- **المقاعد**: 290
- **المدى**: 14,140 كم (7,635 ميل بحري)
- **السرعة**: 903 كم/س (Mach 0.85)
- **الارتفاع الأقصى**: 13,100 م
- **المحركات**: 2 توربوفان
- **ميزة خاصة**: كابين بارتفاع ضغط منخفض (6,000 قدم)

### 5. Boeing 777-300ER (2 طائرات)
- **المقاعد**: 396
- **المدى**: 14,700 كم (7,370 ميل بحري)
- **السرعة**: 905 كم/س (Mach 0.84)
- **الارتفاع الأقصى**: 13,100 م
- **المحركات**: 2 توربوفان (115,300 رطل دفع لكل محرك)

### 6. Boeing 747-8 (1 طائرة)
- **المقاعد**: 467
- **المدى**: 14,310 كم (7,730 ميل بحري)
- **السرعة**: 920 كم/س (Mach 0.9)
- **الارتفاع الأقصى**: 13,100 م
- **المحركات**: 4 توربوفان
- **ميزة خاصة**: أكبر طائرة في الأسطول، جسم مزدوج الطابق

---

## Implementation Details

### Pages
1. **Home Page**: عرض الكروت في شبكة متجاوبة
2. **Optional Detail Page**: صفحة تفاصيل لكل طائرة (إذا أردنا توسيع)

### Components
- **FleetCard**: كرت واحد لطائرة
- **SpecBadge**: شارة دائرية للمواصفات
- **WaveDivider**: فاصل موجي
- **Header**: رأس الصفحة مع الشعار
- **Hero**: قسم البطل مع صورة طائرة

### Styling Approach
- Tailwind CSS 4 مع OKLCH color format
- Custom CSS variables للألوان والتباعد
- Responsive design mobile-first

### Visual Assets Needed
1. صورة بطل (Hero Image) - طائرة Kalabsha Airlines في السماء
2. صور أو رسومات لكل طراز طائرة (silhouettes أو photos)
3. أيقونات للمواصفات (مقاعد، مدى، سرعة، إلخ)
