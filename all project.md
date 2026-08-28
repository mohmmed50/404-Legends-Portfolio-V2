# ================================================================
# Repo: RSA-Acadamy
# URL: https://github.com/ebrahimmehasen/RSA-Acadamy
# ================================================================

# 🎓 RSA Academy — رياض الصالحين

منصة تعليمية متكاملة (Next.js + Supabase) لإدارة سنترات ومراكز التقوية: متابعة الطلاب والمعلمين وأولياء الأمور من مكان واحد، بأربع بوابات دخول منفصلة حسب الدور.

## لقطة من المنصة وهي شغالة (النسخة المنشورة على الإنترنت)

![RSA Academy](./screenshots/dashboard.png)

*(الصفحة الرئيسية للمنصة على الدومين الفعلي — لسه مرحلة الإطلاق الأولى، وبعض الخدمات ظاهرة عليها "SOON" لحد ما يتم تفعيلها بالكامل.)*

## المميزات

- **أربع بوابات حسب الدور**: أدمن، معلم (Teacher)، ولي أمر (Parent)، وطالب (Student)، كل واحدة بصلاحياتها وواجهتها الخاصة.
- **لوحة تحكم الأدمن**: إدارة الطلاب، المعلمين، أولياء الأمور، الفصول (Classes)، المواد الدراسية، الإعلانات، والتقارير، مع سجل أمان (Security Logs) لتتبع العمليات الحساسة.
- **درجات وامتحانات لحظية**: تحديث الدرجات يوصل للطالب/ولي الأمر بدون ما يعمل Refresh للصفحة.
- **ربط الطالب بولي الأمر** ومتابعة أكتر من طالب من حساب واحد.
- **دفتر درجات للمعلم (Gradebook)** لكل فصل يدرّسه.
- **إشعارات وتذكيرات مجدولة** (Cron Jobs) للمدفوعات والحضور.
- **مصادقة ثنائية (2FA)** وتسجيل دخول آمن عبر Supabase Auth.
- واجهة عربية بالكامل (RTL) بخط Cairo.

## لقطة الشاشة

اللقطة أعلاه من الرابط الفعلي اللي المشروع منشور عليه: **[rsa-academy.online](https://rsa-academy.online/)**

## التقنيات المستخدمة

- **Next.js 16** (App Router) + **React 19** + **TypeScript**
- **Supabase** (قاعدة بيانات + مصادقة)
- **Tailwind CSS 4** + shadcn/ui
- **React Hook Form** + **Zod** للتحقق من صحة البيانات
- **Resend** للإيميلات، **Google Drive API** للتخزين، **Upstash Redis** للـ Rate Limiting

## طريقة التشغيل محليًا

```bash
npm install
cp .env.example .env.local   # وحطّ فيه بيانات Supabase وباقي المفاتيح (راجع CREDENTIALS_GUIDE.md)
npm run dev
```

المشروع هيفتح على `http://localhost:3000`.

## البناء للإنتاج

```bash
npm run build
npm run start
```

## مستندات إضافية

الريبو فيه توثيق تفصيلي جاهز:

- `MASTER_README.md` / `RSA_ACADEMY_COMPLETE_BLUEPRINT_FINAL_V2.md` — الخطة الكاملة للمشروع
- `CREDENTIALS_GUIDE.md` — إزاي تجيب كل الـ API Keys المطلوبة
- `TECHNICAL_DECISIONS.md` — القرارات التقنية وأسبابها
- `STUDENT_SUBJECTS_SYSTEM_DOCUMENTATION.md` / `TEACHER_PAYMENT_SYSTEM.md` — توثيق أنظمة فرعية داخل المنصة


# ================================================================
# Repo: reminder-drink-prayer
# URL: https://github.com/ebrahimmehasen/reminder-drink-prayer
# ================================================================

# 💧🕌 Hydration & Prayer Reminder Bot

بوت تذكير شغال في الخلفية على ويندوز، بيفكّرك تشرب مية وتتحرك كل فترة نشاط معينة، وفي نفس الوقت بيحترم أوقات الصلاة في مدينتك بحيث الشاشة تتجمد وقت الصلاة تلقائيًا.

## لقطة من تشغيل السكربت

![تشغيل البوت](./screenshots/run.png)

*(السكربت بيجيب مواعيد الصلاة أونلاين من Aladhan API، ولو مفيش إنترنت لحظتها بيرجع تلقائيًا لآخر نسخة محفوظة في `prayer_cache.json` — زي ما ظاهر في اللقطة.)*

## المميزات

- **تذكير بالشرب والحركة**: بيحسب وقت النشاط الفعلي على الجهاز (مش الوقت اللي الجهاز فاضي فيه)، وكل ما يوصل الفترة المحددة (50 دقيقة افتراضيًا) بيبعت إشعار Windows Toast ويجمّد الشاشة لمدة دقايق معينة عشان تاخد بريك فعلي.
- **احترام مواعيد الصلاة**: بيجيب مواعيد الصلوات الخمسة لمدينتك تلقائيًا من [Aladhan API](https://aladhan.com/) (من غير ما تحتاج مفتاح API)، ويجمّد الشاشة تلقائيًا حوالين وقت كل صلاة.
- **يشتغل حتى بدون إنترنت**: لو الـ API مش متاح، البوت بيستخدم آخر مواعيد صلاة محفوظة في `prayer_cache.json` بدل ما يتوقف.
- **تنبيه قبل الموعد بدقيقة** لكل من الشرب والصلاة، عشان تاخد وقتك تجهّز.
- **شريط حالة عائم صغير** فوق الشاشة بيوريك العدّ التنازلي للصلاة الجاية وموعد الشرب الجاي لحظة بلحظة، وتقدر تخفيه بـ F12.
- **تشغيل تلقائي مع ويندوز** اختياري عبر أمر `--install-startup`.

## طريقة التشغيل

```bash
pip install -r requirements.txt   # requests, winotify, pyyaml (لو موجودة)
python hydration_prayer_bot.py
```

### الإعدادات (اختياري)

انسخ `config.example.yaml` (لو موجود) إلى `config.yaml` بجانب السكربت وعدّل:

```yaml
city: Cairo
country: Egypt
reminder_interval_minutes: 50
idle_threshold_seconds: 120
prayer_quiet_window_minutes: 10
hydration_break_minutes: 10
```

### تشغيله مع بدء ويندوز

```bash
python hydration_prayer_bot.py --install-startup
```

## المتطلبات

- Windows (السكربت بيستخدم واجهات ويندوز الأصلية لقياس وقت الخمول وعرض التنبيهات).
- Python 3.10+.


# ================================================================
# Repo: -ZNU_counter
# URL: https://github.com/ebrahimmehasen/-ZNU_counter
# ================================================================

# 🎫 ZNU Queue & Ticket System — نظام طابور وتذاكر جامعة الزقازيق الأهلية

نظام إدارة طابور وطباعة تذاكر لقسم القبول في جامعة الزقازيق الأهلية، من ثلاث قطع بتشتغل مع بعض: تطبيق مكتبي لطباعة التذكرة، وشاشة عرض عامة، وصفحة استدعاء للموظف — وكلهم متزامنين لحظيًا عبر Supabase.

## لقطات من النظام وهو شغال فعليًا (النسخة المنشورة على الإنترنت)

**شاشة العرض العامة (توضح لكل قاعة وشباك رقم اللي بيتم خدمته الآن ورقم الانتظار):**

![شاشة العرض العامة](./screenshots/display.png)

**صفحة استدعاء الأرقام (لموظف الاستقبال):**

![صفحة استدعاء الأرقام](./screenshots/call.png)

النسخة اللي في اللقطات منشورة فعليًا على: **https://znu-counter-voice.vercel.app**

## المميزات

- **تطبيق مكتبي (Windows، PySide6)** بيطبع تذكرة برقم فريد لكل متقدّم مباشرة على الطابعة، مع ضمان إن كل رقم بيتاخد مرة واحدة بس حتى لو البرنامج قفل فجأة (الترقيم بيتسجل في SQLite محليًا قبل ما تتطبع التذكرة أصلًا).
- **مزامنة فورية مع السحابة**: كل تذكرة بتتطبع بتتبعت في الخلفية لـ Supabase (بدون ما يبطّئ عملية الطباعة نفسها)، فالشاشة العامة وصفحة الاستدعاء بيشوفوا التذكرة لحظة ما تتطبع.
- **شاشة عرض عامة (Public Display)** بتتحدّث لحظيًا (Supabase Realtime) وتوريك رقم اللي بيتم خدمته دلوقتي في كل شباك، وعدد المنتظرين، وإجمالي أرقام اليوم.
- **صفحة استدعاء للموظف (Call Next)**: زرار واحد "اطلب رقم جديد" بياخد أقدم تذكرة منتظرة ويوزّعها على الشباك، بمنطق آمن (`SECURITY DEFINER` + `FOR UPDATE SKIP LOCKED`) بحيث موظفين اتنين مايقدروش ياخدوا نفس الرقم في نفس اللحظة.
- **فصل تام بين الترقيم والاستدعاء**: جهاز الطباعة هو المصدر الوحيد لأرقام التذاكر (SQLite محلي)، والاستدعاء بيحصل بالكامل على Supabase من غير ما يرجع يأثر على الطباعة — بحيث لو النت وقع، الطباعة تفضل شغالة عادي.
- **نسخة LAN احتياطية** (FastAPI محلي) لو النت أو Vercel نزلوا، طالما جهاز الطباعة والشاشة المحلية شغالين.

## هيكل المشروع

```
app/
├── main.py            # نقطة تشغيل تطبيق سطح المكتب
├── core/              # قاعدة بيانات SQLite، الحجز، الطباعة
├── printing/          # تركيب رقم التذكرة على القالب وطباعته (GDI خام)
├── sync/              # مزامنة الخلفية مع Supabase
├── ui/                # واجهة PySide6
└── web/               # نسخة الـ FastAPI المحلية (احتياطية)
vercel-app/            # تطبيق Next.js: شاشة العرض العامة + صفحة الاستدعاء
```

## طريقة التشغيل

### تطبيق سطح المكتب (طباعة التذاكر)

```bash
pip install -r requirements.txt
python -m app.main
```

### تطبيق العرض/الاستدعاء (Next.js)

```bash
cd vercel-app
npm install
npm run dev
```

المستندات التفصيلية لكل مرحلة موجودة في الريبو: `README.md` (المرحلة 1 — تطبيق الطباعة)، `PHASE2.md` (نسخة الشبكة المحلية)، `PHASE2_WEB.md` (النسخة السحابية على Vercel/Supabase وهي المستخدمة فعليًا).


# ================================================================
# Repo: dynamic--form-based-web-application
# URL: https://github.com/ebrahimmehasen/dynamic--form-based-web-application
# ================================================================

# استمارة تسجيل درجات الطلاب والشهادات المعادلة

تطبيق **ASP.NET Core 8** واحد (API + واجهة Razor Pages) لتسجيل بيانات الطلاب المتقدمين بشهادات معادلة، حساب درجاتهم النهائية آليًا حسب نوع الشهادة، ومراجعتها وتعديلها من خلال لوحات داخلية بثلاث صلاحيات (مُراجع Viewer / محرر Editor / مسؤول Admin)، مع حفظ كل البيانات في **SQL Server**.

> لا يوجد أي كود PHP أو Angular في هذا المشروع — التطبيق بالكامل داخل حل (solution) واحد من مشاريع .NET، وواجهة المستخدم بالكامل HTML/CSS/JS عادي (بدون أي إطار عمل frontend) مقدَّمة من خلال Razor Pages.

---

## 📁 هيكلية المشروع

```
backend/
  StudentRegistry.API/              ← نقطة الدخول: الواجهات (Pages/) والـ API (Controllers/) معًا
    Pages/Index.cshtml              ← استمارة تسجيل الطالب العامة (Razor Page على المسار /)
    Pages/Login.cshtml              ← تسجيل دخول الموظفين (Viewer/Editor/Admin)
    Pages/Admin/StudentRecordsReview.cshtml  ← صفحة المُراجع (عرض + ملاحظات، بدون تعديل)
    Pages/Admin/Home.cshtml         ← لوحة تحكم المسؤول (إحصائيات، طلبات حذف، تعديلات، تعليقات، مستخدمين)
    Pages/Editor/StudentRecordsEditor.cshtml ← صفحة المحرر (بحث، تعديل مباشر، إعادة حساب، تصدير)
    Pages/Editor/Notifications.cshtml        ← إشعارات التعليقات غير المراجَعة للمحرر
    Pages/Shared/_Layout.cshtml     ← القالب العام (خط Tajawal، RTL)
    wwwroot/css/styles.css          ← كل تنسيقات الموقع
    wwwroot/js/                     ← منطق العميل بالكامل (بدون بناء/bundler — ملفات JS عادية)
    wwwroot/uploads/                ← صور الطلاب المرفوعة
    Controllers/                    ← كل نقاط الـ API (تسجيل، إدارة، تحرير، مصادقة، تصدير...)
    Program.cs                      ← تسجيل الخدمات، المصادقة بالكوكيز، وخط أنابيب الـ Middleware
  StudentRegistry.Application/      ← DTOs، FluentValidation، منطق حساب الدرجات لكل شهادة (StudentService)
  StudentRegistry.Domain/           ← الكيانات (Student، الدرجات الفرعية لكل شهادة، المستخدمون، سجلات التدقيق)
  StudentRegistry.Data/             ← DbContext + EF Core Migrations
  StudentRegistry.Repository/       ← تنفيذ الاستعلامات (Repository + UnitOfWork)
  StudentRegistry.Infrastructure/   ← تخزين الصور، وتصدير Excel/PDF
database/schema.sql                 ← نسخة SQL مرجعية من نفس المخطط (المصدر الحقيقي هو EF Migrations)
```

راجع [ARCHITECTURE.md](ARCHITECTURE.md) لتفاصيل تدفّق البيانات الكامل وكيفية إضافة ميزات جديدة بأمان.

---

## 🚀 التشغيل محليًا

المتطلبات: **.NET 8 SDK**، **SQL Server** (أي إصدار محلي أو LocalDB)، أداة `dotnet-ef` (`dotnet tool install -g dotnet-ef`).

```bash
cd backend
dotnet restore
dotnet ef database update --project StudentRegistry.Data --startup-project StudentRegistry.API
dotnet run --project StudentRegistry.API
```

افتح المتصفح على العنوان الظاهر في الطرفية (عادة `http://localhost:5289/` أو `http://localhost:5000/`):

- `/` — استمارة تسجيل الطالب العامة (لا تحتاج تسجيل دخول).
- `/login` — تسجيل دخول الموظفين.
- `/admin/student-records-review` — صفحة المُراجع (Viewer).
- `/editor` — صفحة المحرر (Editor).
- `/admin` — لوحة تحكم المسؤول (Admin).
- `/health` — فحص صحة الخادم.
- `/swagger` — توثيق الـ API التفاعلي (بيئة التطوير فقط).

راجع [MIGRATION_DEPLOYMENT_GUIDE.md](MIGRATION_DEPLOYMENT_GUIDE.md) و[SERVER_DEPLOYMENT_STEPS_AR.md](SERVER_DEPLOYMENT_STEPS_AR.md) لخطوات النشر الكاملة على IIS، و[CICD_GITHUB_ACTIONS_DEPLOYMENT_AR.md](CICD_GITHUB_ACTIONS_DEPLOYMENT_AR.md) لإعداد نشر تلقائي عبر GitHub Actions.

---

## 👥 الصلاحيات الثلاث

| الدور | الوصول | أبرز الإمكانيات |
|---|---|---|
| **Viewer (مُراجع)** | `/admin/student-records-review` | تصفّح استمارات الطلاب وعرض كل بياناتهم ودرجاتهم كما أدخلها الطالب بالضبط، وإضافة **ملاحظات مراجعة** على أي حقل، ووضع طالب "**قيد المراجعة**" (تمييز الصف باللون الأصفر حتى يراجعه محرر) |
| **Editor (محرر)** | `/editor` | كل ما سبق، بالإضافة إلى: تعديل أي حقل أو درجة مباشرة (Inline Edit)، **إعادة حساب النتيجة النهائية تلقائيًا** فور تعديل أي درجة خام (بنفس صيغ الحساب المستخدمة في الاستمارة الأصلية)، تأكيد الطالب **"مستوفي"/"غير مستوفي"** (مع سبب إلزامي عند الرفض)، تنزيل PDF/Excel، طلب حذف طالب من المسؤول، وإزالة علامة "قيد المراجعة" بعد التأكد من صحة البيانات |
| **Admin (مسؤول)** | `/admin` | لوحة إحصائيات شاملة، مراجعة/الموافقة على طلبات حذف الطلاب، تصفح كل التعديلات والتعليقات عبر الموقع (Audit Log)، وإدارة حسابات المستخدمين (إضافة/تعديل/تعطيل/حذف/تغيير كلمة مرور)، مع بحث بالاسم وفلترة بالحالة |

كل تعديل أو تعليق أو تأكيد حالة يُسجَّل في **"شيت التعديلات"** (سجل تدقيق كامل) باسم المستخدم الفعلي المسجّل دخوله وقت التنفيذ — لا يوجد أي إجراء مجهول المصدر.

---

## ⚙️ آلية تسجيل الطالب

الاستمارة صفحة واحدة تعرض كل الأقسام معًا (رفع صورة، بيانات شخصية، بيانات ولي الأمر، العنوان، الشهادة والمسار، جدول الدرجات)، مع شريط تقدّم بصري يعكس اكتمال الحقول. عند الإرسال:

1. التحقق الكامل من كل الحقول في المتصفح (`wwwroot/js/form-handler.js`).
2. **إرسال موثوق (server-first) مع إعادة محاولة**: البيانات تُرسل مباشرة للخادم عبر `POST /api/students/register` مع رمز إرسال فريد (`submission_token`) يضمن عدم تكرار التسجيل حتى لو أعاد المتصفح المحاولة بعد انقطاع الاتصال. **لا يتم تخزين أي بيانات محليًا في المتصفح** — عند فشل الإرسال تظهر رسالة خطأ وزر "إعادة المحاولة" فقط، والبيانات تبقى في الذاكرة حتى ينجح الإرسال أو يُعاد تحميل الصفحة.
3. الخادم يتحقق مرة أخرى (FluentValidation)، يحفظ الصورة في `wwwroot/uploads/`، ويحسب الدرجة النهائية من جديد بشكل موثوق (الخادم هو المرجع الأخير للحساب)، ثم يحفظ كل شيء في SQL Server.
4. عند النجاح فقط تظهر شاشة التأكيد مع إمكانية تنزيل الإيصال/الشهادة كملف **PDF**.

---

## 📊 أنواع الشهادات المدعومة

| الشهادة | ملخص طريقة الحساب |
|---|---|
| **سعودية** | معامل لكل مادة (الموزون ÷ المتحصل)، نسبة كل سنة = مجموع الموزون ÷ مجموع المعاملات، ثم توزيع حسب عدد سنوات الدراسة، والنتيجة النهائية متوسط مع درجة القدرات |
| **IG** (IGCSE/O-Level/AS/A-Levels) | نقاط لكل تقدير، معامل نسبي اختياري، حافز رياضي، ثم مجموع حكومي معادل من 410 |
| **كويتية** | نسبة كل صف دراسي (10/11/12) منفصلة، ثم توزيع بالوزن المدوَّن في شهادة الطالب نفسها |
| **قطرية / عمانية / يمنية / بحرينية / إماراتية** | مجموع الدرجات مقابل مجموع أقصى ثابت لكل مادة (100 لكل مادة)، مع استثناءات حسب كل شهادة |
| **الثانوية العامة المصرية / الثانوية الأزهرية** | مجموع الدرجات مقابل مجموع كلي ثابت حسب المسار/نظام المواد |
| **فلسطينية (توجيهي) / أخرى** | النسبة المئوية تُدخل مباشرة من الطالب |
| **الدبلومة الأمريكية** | متوسط أفضل 8 مواد + معادلة SAT/ACT وفق معادلة مكتب تنسيق الجامعات الحكومية |

كل الصيغ مطبَّقة **مرتين** بشكل متطابق: مرة عند التسجيل، ومرة أخرى عند أي إعادة حساب من صفحة المحرر — بنفس الثوابت والقواعد. التفاصيل الكاملة موجودة في [ARCHITECTURE.md](ARCHITECTURE.md).

---

## 🛠️ أهم التقنيات المستخدمة

- **ASP.NET Core 8** (Razor Pages + Web API في نفس المشروع)
- **Entity Framework Core 8** مع **SQL Server**
- **FluentValidation** للتحقق من صحة البيانات على الخادم
- **AutoMapper** لتحويل الكيانات إلى DTOs
- مصادقة بالكوكيز (Cookie Authentication) بأدوار (Roles) لكل مستخدم
- تصدير **Excel** (ClosedXML) و**PDF** (تحويل من قالب Excel)
- **Swashbuckle/Swagger** لتوثيق الـ API في بيئة التطوير
- واجهة أمامية بـ **HTML/CSS/JavaScript خام** بدون أي إطار عمل أو أداة بناء (no build step)


# ================================================================
# Repo: wedding-invitation2
# URL: https://github.com/ebrahimmehasen/wedding-invitation2
# ================================================================

# 💍 Wedding Invitation 2 — دعوة زفاف إلكترونية (تصميم مبسّط وأنيق)

نسخة تانية من دعوة الزفاف الرقمية، بتصميم أبسط وألوان فاتحة هادئة، صفحة واحدة ثابتة من غير أي باك-إند.

## لقطات من الموقع وهو شغال

**شاشة الاستقبال:**

![شاشة الاستقبال](./screenshots/splash.png)

**بطاقة الدعوة بعد الدخول:**

![بطاقة الدعوة](./screenshots/invitation.png)

## المميزات

- شاشة استقبال بأسماء العروسين مع زرار "Open Invitation".
- **عدّاد تنازلي (Countdown)** حي بيختفي تلقائيًا لما يوصل ميعاد الفرح.
- **رابط مباشر لموقع الحفل على خرائط Google**.
- تصميم بسيط ونظيف يعتمد على الخطوط والمسافات بدل الزخرفة الكتير.

## طريقة التشغيل

مشروع ثابت بالكامل، بدون تثبيت أو سيرفر:

1. حمّل الريبو.
2. افتح `index.html` مباشرة في المتصفح.
3. لتخصيص البيانات (الاسم، التاريخ، رابط الموقع)، عدّل الإعدادات في أول ملف `script.js`.

## هيكل الملفات

| الملف | الوظيفة |
|---|---|
| `index.html` | هيكل الصفحة |
| `style.css` | التنسيق والتصميم |
| `script.js` | منطق العد التنازلي وربط بيانات الدعوة |
| `Untitled design p.jpg`, `music.mp3` | الصورة والموسيقى المستخدمة في الدعوة |


# ================================================================
# Repo: Wedding-invitation1
# URL: https://github.com/ebrahimmehasen/Wedding-invitation1
# ================================================================

# 💌 Wedding Invitation — دعوة زفاف إلكترونية

دعوة زفاف رقمية أنيقة على صفحة واحدة (HTML/CSS/JS خالص، من غير أي باك-إند)، مبنية بحيث يقدر أي حد يخصّصها لعرسه هو بمجرد تعديل ملف إعدادات واحد.

## لقطات من الموقع وهو شغال

**شاشة الاستقبال (Splash Screen):**

![شاشة الاستقبال](./screenshots/splash.png)

**بطاقة الدعوة بعد الدخول (التاريخ + الموقع + العد التنازلي):**

![بطاقة الدعوة](./screenshots/invitation.png)

## المميزات

- **شاشة استقبال (Splash Screen)** بأسماء العروسين، وبمجرد الضغط على "Open Invitation" تفتح الدعوة وتشغّل الموسيقى تلقائيًا مع تأثير Fade In/Out سلس.
- **زر تشغيل/إيقاف الموسيقى** عائم يظهر بعد فتح الدعوة.
- **عدّاد تنازلي (Countdown)** حي بالثواني لموعد الفرح.
- **إضافة الحدث للتقويم** بضغطة واحدة: رابط مباشر لتقويم Google، أو تنزيل ملف `.ics` يشتغل مع أي تطبيق تقويم.
- **موقع الفرح** مع رابط مباشر لخرائط Google.
- **تخصيص كامل من ملف واحد** (`config.js`): اسم العريس والعروسة، تاريخ ووقت الفرح، اسم العنوان، رابط الخريطة، صورة الخلفية، وملف الموسيقى — من غير ما تلمس أي كود تاني.

## طريقة التشغيل

المشروع ثابت بالكامل (Static)، مفيش تثبيت حاجة ولا سيرفر مطلوب:

1. حمّل الريبو.
2. افتح ملف `index.html` مباشرة في أي متصفح.
3. لو عايز تغيّر البيانات، افتح `config.js` وعدّل الأسماء والتاريخ والموقع والموسيقى.

## هيكل الملفات

| الملف | الوظيفة |
|---|---|
| `index.html` | هيكل الصفحة |
| `style.css` | التنسيق والتصميم |
| `app.js` | كل المنطق: العد التنازلي، الموسيقى، التقويم |
| `config.js` | ملف الإعدادات (الاسم/التاريخ/الموقع/الموسيقى) — الملف الوحيد اللي المفروض تعدّله |
| `background.jpg`, `music.mp3` | الوسائط المستخدمة في الدعوة |


# ================================================================
# Repo: learn-academy
# URL: https://github.com/ebrahimmehasen/learn-academy
# ================================================================

# 📚 Learn Academy — رياض الصالحين

نسخة من منصة "رياض الصالحين" التعليمية (Next.js + Supabase)، بنفس فكرة إدارة الطلاب والمعلمين وأولياء الأمور، لكن بتركيز أكبر على الجانب المالي والإداري للسنتر: المدفوعات، رواتب المعلمين، والتقارير المالية.

## لقطة من صفحة تسجيل الدخول وهي شغالة فعليًا

![صفحة تسجيل الدخول](./screenshots/login.png)

*(اللقطة من تشغيل حقيقي للمشروع، مش تصميم Static — الصفحة دي فعليًا اتبنت وشغّلت السيرفر المحلي.)*

## المميزات

- **أربع بوابات حسب الدور**: أدمن، معلم، ولي أمر، وطالب.
- **إدارة المدفوعات (Payments)**: تسجيل ومتابعة مدفوعات أولياء الأمور.
- **إدارة رواتب المعلمين (Salaries)**: احتساب وصرف رواتب المعلمين من نفس اللوحة.
- **تقارير مالية (Finances)** مجمّعة للأدمن.
- **تذكيرات مجدولة يوميًا** (Cron Jobs): تذكير بالمدفوعات المتأخرة، تذكير برواتب المعلمين، تنظيف الإشعارات القديمة، وتذكيرات الحصص — كل واحدة في ميعادها الصباحي تلقائيًا.
- **إدارة الفصول والمواد والإعلانات** زي أي سنتر تعليمي متكامل.
- واجهة عربية بالكامل (RTL) بخط Cairo.

> ملاحظة: الريبو ده وريبو **RSA-Acadamy** أصلهم مشروع واحد اتفرّع لمسارين — النسخة دي ركّزت أكتر على الجانب المالي (مدفوعات/رواتب)، والنسخة التانية ركّزت أكتر على الدرجات والمتابعة الأكاديمية.

## التقنيات المستخدمة

- **Next.js 16** (App Router) + **React 19** + **TypeScript**
- **Supabase** (قاعدة بيانات + مصادقة)
- **Tailwind CSS 4** + shadcn/ui
- **React Hook Form** + **Zod**

## طريقة التشغيل محليًا

```bash
npm install
# حطّ متغيرات البيئة دي في .env.local
# NEXT_PUBLIC_SUPABASE_URL=...
# NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=...
npm run dev
```

المشروع هيفتح على `http://localhost:3000`.

## البناء للإنتاج

```bash
npm run build
npm run start
```


# ================================================================
# Repo: uni
# URL: https://github.com/ebrahimmehasen/uni
# ================================================================

# دليل تشغيل واستخدام استمارة الطلاب (Student Registration Form)

يقدم هذا الدليل كافة التفاصيل الفنية والخطوات اللازمة لتشغيل ونشر استمارة تسجيل بيانات الطلاب وحساب الدرجات المعادلة على خوادم **Stinger Hosting** أو أي خادم ويب يدعم لغة PHP 7.4+.

---

## 📁 هيكلية المشروع (Project Structure)

يحتوي المشروع على الملفات التالية:
* **`index.html`**: الصفحة الرئيسية للاستمارة، مصممة بلغة HTML5 وتدعم التنسيق من اليمين إلى اليسار (RTL) بشكل متكامل مع خط "Tajawal".
* **`css/styles.css`**: ملف التنسيقات الذي يحتوي على الهوية البصرية، الألوان المتناسقة (Teal)، المؤثرات الحركية (Micro-animations)، وتجاوب التصميم مع الهواتف والأجهزة اللوحية.
* **`js/conditional.js`**: معالج الشروط والتحكم الديناميكي بالقوائم المنسدلة وتأمين قفل مسار الدراسة (Static track lock) بعد اختياره.
* **`js/form-handler.js`**: معالجة رفع وتحليل الصور الشخصية، التحقق من نسبة العرض والارتفاع (2:3)، الحساب الفوري للدرجات، والتحقق من صحة الاستمارة قبل الإرسال.
* **`js/app.js`**: المنسق الرئيسي للمشروع وإدارة شريط تقدم الخطوات (Step Progress Indicator).
* **`data/subjects.json`**: ملف التكوين الذي يحتوي على قائمة المواد الدراسية لكل سنة دراسية والمسارات الخاصة بكل شهادة.
* **`php/submit-form.php`**: البرمجية الخلفية لاستقبال البيانات وفك تشفير الصورة الشخصية وحفظ الاستمارات كملفات JSON وصور منفصلة.

---

## 🚀 خطوات النشر على Stinger Hosting

لتشغيل الاستمارة على الخادم، اتبع الخطوات البسيطة التالية:

1. **رفع الملفات**: 
   قم برفع كامل المجلد (`tester3`) إلى مجلد الويب العام على الاستضافة (عادةً ما يكون `public_html` أو `www`).
   
2. **صلاحيات المجلدات (Folder Permissions)**:
   يتطلب السكربت إنشاء مجلدين لحفظ البيانات المرفوعة تلقائياً. تأكد من أن المجلد الرئيسي يملك صلاحيات الكتابة (عادةً ما تكون `0755` أو `0777` على بعض الاستضافات المشتركة) لكي يتمكن محرك PHP من إنشاء المجلدات التالية تلقائياً:
   * `uploads/`: لتخزين الصور الشخصية بعد فك التشفير.
   * `submissions/`: لتخزين استمارات الطلاب كملفات JSON.

3. **إعدادات حجم الرفع (Upload Limits)**:
   بما أن الاستمارة تسمح برفع صور شخصية بحجم يصل إلى **5 ميجابايت**، يرجى التحقق من إعدادات خادم PHP الخاص بك. يمكنك إضافة أو تعديل القيم التالية في ملف `.htaccess` في الجذر الرئيسي للموقع لضمان عدم رفض السيرفر للملفات الكبيرة:
   ```apache
   php_value upload_max_filesize 10M
   php_value post_max_size 12M
   php_value memory_limit 128M
   ```

---

## ⚙️ آلية عمل الاستمارة والحفظ الاحتياطي (Dual Mode)

تم تصميم الاستمارة لتعمل بذكاء في بيئتين مختلفتين:
1. **وضع الاتصال بالخادم (Server Mode)**:
   عند ملء الاستمارة والضغط على إرسال، يتم إرسال البيانات فوراً عبر طلب POST إلى `php/submit-form.php`. يقوم الخادم بفك تشفير الصورة وحفظ الاستمارة وإرجاع رسالة نجاح.
2. **وضع عدم الاتصال / غياب الخادم (Offline / Local Fallback)**:
   في حال عدم العثور على خادم PHP (أو تشغيل الاستمارة محلياً عبر فتح ملف `index.html` مباشرة)، ستقوم الاستمارة تلقائياً بحفظ البيانات محلياً في ذاكرة المتصفح (`localStorage`) لمنع ضياع البيانات، وستظهر شاشة النجاح مباشرة مع إتاحة الخيارات التالية للطالب:
   * **تنزيل ملف البيانات JSON**: لتنزيل الاستمارة كاملة كملف نصي منظم جاهز للرفع اليدوي.
   * **تنزيل ملف إكسل CSV**: لتنزيل جدول درجات الطالب والبيانات بتنسيق جدول بيانات يدعم اللغة العربية بشكل سليم (UTF-8 BOM).

---

## 📊 هيكلية البيانات المستلمة (JSON Data Payload)

تُحفظ البيانات على الخادم أو تُحمل كملف بالصيغة التالية:

```json
{
  "studentName": "أحمد محمد علي",
  "nationalId": "123456789012",
  "certification": "شهادة سعودية",
  "track": "مسار العلوم",
  "yearOfStudy": "تالتة ثانوي",
  "photo": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUg...",
  "photoPath": "uploads/123456789012.png",
  "grades": [
    {
      "subjectName": "اللغة العربية",
      "grade": 95,
      "weighted": 10,
      "achieved": 9.5
    },
    {
      "subjectName": "الرياضيات (3)",
      "grade": 88,
      "weighted": 15,
      "achieved": 13.2
    }
  ],
  "submittedAt": "2026-07-15T00:00:00.000Z"
}
```

---

## 🎨 الميزات البصرية والتقنية المدمجة

* **التنقل التدريجي (Progressive Disclosure)**: يتم إخفاء الأقسام التالية وتفعيلها بشكل تدريجي بناءً على إكمال الخطوات السابقة لإعطاء تجربة مستخدم سلسة خالية من التشتت.
* **فحص نسبة أبعاد الصورة**: عند اختيار الصورة الشخصية، يقوم النظام بقراءة أبعادها، فإذا كانت قريبة من النسبة القياسية للصور الشخصية 4×6 (أي 2:3) يعطي مؤشراً أخضر، وإن كانت عريضة أو مربعة يعطي تنبيهاً أصفر لمراجعتها دون حظر عملية الإرسال.
* **تأمين المسار (Track Lock)**: لمنع التغيير غير المقصود للمسار الأكاديمي، يتم تجميد حقل المسار بمجرد الاختيار، ولا يمكن تعديله إلا بالرجوع لأعلى وتعديل الشهادة المعادلة لتحديث الخيارات بشكل مترابط.


# ================================================================
# Repo: wedding-invitation3
# URL: https://github.com/ebrahimmehasen/wedding-invitation3
# ================================================================

# 🌸 Wedding Invitation Website

A beautifully crafted, fully responsive, and elegant digital wedding invitation website built with HTML, CSS, and Vanilla JavaScript. Designed to offer a premium, cinematic experience for the guests with rich animations and interactive sections.

## ✨ Features

- **Cinematic Hero Section:** Auto-playing background video with immersive blur and fade animations for the couple's names.
- **Dynamic Countdown Timer:** An elegant flipping countdown timer that tracks days, hours, minutes, and seconds until the big day.
- **Floating Petals Animation:** Delicate, randomly generated rose petals that float across the screen for a romantic ambiance.
- **Interactive RSVP Form:** A fully styled and responsive RSVP section with validation, dynamic guest selection, and smooth success state transitions.
- **Scroll Reveal Effects:** Content sections gracefully fade and slide into view as the user scrolls down.
- **Sound Toggle Controller:** Allows users to easily toggle the background video audio with custom UI.
- **Easy Configuration:** No coding required to update the details! Simply modify the `config.js` file.

---

## 🛠️ How to Customize (No Coding Needed!)

All the text, dates, links, and media paths can be edited directly inside the `config.js` file. 

1. **Open `config.js`** in any text editor.
2. Edit the variables inside the `weddingConfig` object:
   - `brideName` & `groomName`
   - `weddingDate` (Must follow `YYYY-MM-DDTHH:mm:ss` format for the countdown)
   - `locationAddress` & `locationMapUrl` (Google Maps link)
   - `videoPath` (Path to your background MP4)
   - `backgroundImagePath` (Path to your section background image)

### Media Setup
- Place your high-quality background video in the root directory and name it `video.mp4` (or update the path in `config.js`).
- Place your background image (e.g., floral border) in the root directory and name it `flower.jpg`.

---

## 🚀 Running the Project locally

Since this project uses pure HTML, CSS, and JS with no build tools, running it is incredibly simple:

1. Clone or download this repository.
2. Ensure you have your `video.mp4` and `flower.jpg` added to the folder.
3. Simply double-click on `index.html` to open it in your browser.
*(Note: Some browsers require the site to be served via a local server to allow video autoplay with sound. You can use VS Code's "Live Server" extension for the best testing experience).*

---

## 💻 Tech Stack
- **HTML5:** Semantic structure and form validation.
- **CSS3:** Custom properties (variables), Flexbox, CSS Grid, Keyframe Animations, Backdrop filters.
- **JavaScript (ES6):** Dynamic configuration injection, Intersection Observer API, DOM manipulation.

## 🎨 Design System
- **Fonts:** `Cormorant Garamond` (Elegant Serif), `Montserrat` (Clean Sans-Serif).
- **Color Palette:** Warm creams, Rose Gold accents, Dusty Mauve, and Sage.


