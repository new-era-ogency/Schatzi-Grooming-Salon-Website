const header = document.querySelector("[data-elevate]");
const slides = [...document.querySelectorAll(".hero-slide")];
const tabButtons = [...document.querySelectorAll("[data-tab]")];
const tabPanels = [...document.querySelectorAll("[data-panel]")];
const accordions = [...document.querySelectorAll(".accordion")];
const comparison = document.querySelector("[data-comparison]");
const cursorGlow = document.querySelector(".cursor-glow");
const heroTitle = document.querySelector("#hero-title");
const careQuiz = document.querySelector("[data-care-quiz]");
const quizResult = document.querySelector("[data-quiz-result]");
const cookieNotice = document.querySelector("[data-cookie-notice]");
const cookieEssential = document.querySelector("[data-cookie-essential]");
const cookieAll = document.querySelector("[data-cookie-all]");
const revealTargets = [...document.querySelectorAll(".section, .footer, .contact-section")];
const languageButtons = [...document.querySelectorAll("[data-lang]")];

let activeSlide = 0;
let currentLanguage = "de";

const translations = {
  de: {
    lang: "de",
    title: "SCHATZI | Premium Hundesalon & Katzensalon Bremen",
    description: "Professionelle Fellpflege und Wellness für Hunde & Katzen in Bremen. Zertifizierte Groomer, erstklassige Kosmetik und stressfreie Behandlung. Jetzt online buchen!",
    nav: ["Philosophie", "Services", "Resultate", "Team", "Kontakt"],
    headerCta: "Kontakt",
    eyebrow: "Premium Pet SPA Rituale",
    heroDefault: "Premium Fellpflege für Hunde & Katzen in Bremen.",
    heroMorning: "Guten Morgen! Starten Sie mit stressfreier Fellpflege in Bremen.",
    heroEvening: "Guten Abend! Buchen Sie den Morgen-SPA für Ihr Haustier.",
    heroCopy: "Stressfreie Pflege, zertifizierte Groomer und erstklassige Kosmetik im Katze- und Hundesalon SCHATZI.",
    book: "Online buchen",
    whatsapp: "WhatsApp",
    heroCardLabel: "Signature Care",
    heroCardTitle: "Hundesalon & Katzensalon Bremen.",
    heroCardCopy: "Halmerweg 31a, 28237 Bremen. Wellness, Fellpflege und stressfreie Behandlung.",
    philosophyKicker: "Unsere Philosophie",
    philosophyTitle: "Jeder Termin ist ein ruhiges Beauty-Ritual.",
    philosophyCopy: "SCHATZI ist für Haustiere gemacht, die mehr als einen schnellen Schnitt verdienen: ruhige Hände, premium Kosmetik und höchste Hygiene vom Empfang bis zum finalen Finish.",
    badges: [
      ["Premium Kosmetik", "Fellpflege mit hochwertigen, hautfreundlichen Produkten und pflegenden Masken."],
      ["Zertifizierte Groomer", "Rassebewusste Pflege, stressarme Behandlung und präzise Styling-Geometrie."],
      ["Absolute Hygiene", "Desinfizierte Tools, frische Textilien und saubere Oberflächen bei jedem Termin."],
    ],
    pricesKicker: "Interaktive Preisliste",
    pricesTitle: "Wählen Sie den passenden Pflegeweg.",
    pricesCopy: "Transparente Einstiegspreise mit direktem Kontakt für jedes Ritual.",
    tabs: ["Hunde", "Katzen", "SPA & Spezialpflege"],
    serviceLinks: "Kontakt für dieses Ritual",
    quizKicker: "Smart Care Selector",
    quizTitle: "Pflege-Ritual in 20 Sekunden finden.",
    quizCopy: "Ein kurzer Selector empfiehlt Hygiene, Schnitt, SPA oder sensible Pflege für Hund und Katze.",
    quizLabels: ["Haustier", "Rasse oder Größe", "Pflegeziel"],
    quizOptions: {
      petType: ["Hund", "Katze"],
      breedSize: ["Kleine Rasse", "Mittlere Rasse", "Große Rasse", "Langes Fell"],
      goal: ["Hygiene", "Schnitt", "SPA / Wiederaufbau", "Sensible Haut"],
    },
    quizRecommendation: "Empfehlung",
    recommendations: {
      hygiene: "Hygiene Ritual: Baden, Krallen, Ohren, Pfoten und ein sanftes Finish.",
      haircut: "Schnitt & Form: rassebewusster Trim plus Beratung zur Silhouette.",
      spa: "SPA-Wiederaufbau: Maske, Feuchtigkeit, Fellglanz und Anti-Frizz-Finish.",
      sensitive: "Sensitive Ritual: milde Reinigung, ruhiges Trocknen und duftarme Kosmetik.",
    },
    sizeNote: " Für große Rassen planen wir mehr Zeit für Trocknung und Auskämmen ein.",
    catNote: " Für Katzen wählt der Master ein besonders ruhiges Tempo.",
    galleryKicker: "Vorher / Nachher",
    galleryTitle: "Transformation, die man sieht.",
    galleryCopy: "Ziehen Sie den goldenen Griff und vergleichen Sie das Finish.",
    teamKicker: "Zertifizierte Master",
    teamTitle: "Die Künstler hinter der Ruhe.",
    teamCopy: "Berühren oder hovern Sie die Karte, um Spezialisierungen zu sehen.",
    socialKicker: "Social Proof",
    socialTitle: "Live von @schatzi.groomingsalon",
    contactKicker: "Kontakt",
    contactTitle: "SCHATZI in Bremen kontaktieren.",
    contactCopy: "Adresse, direkte Kontaktwege, Social Media und Online-Terminbuchung für den Katze- und Hundesalon SCHATZI.",
    contactCards: [
      ["Telefon / WhatsApp", "+49 1703636129", "Deutschland. Schreiben Sie uns direkt per WhatsApp oder rufen Sie den Salon in Bremen an.", "WhatsApp"],
      ["Standort", "Halmerweg 31a, 28237 Bremen", "Premium Hundesalon und Katzensalon in Bremen. Öffnen Sie die Route direkt in Google Maps.", "Google Maps"],
      ["Online-Buchung", "Booksly CRM", "Buchen Sie Ihren Termin online ohne Anruf über Booksly.", "Termin über Booksly buchen"],
    ],
    bottom: ["Booksly", "WhatsApp", "Karte"],
    cookie: "Wir verwenden standardmäßig nur notwendige Cookies. Analyse-Cookies werden erst nach Ihrer ausdrücklichen Zustimmung aktiviert.",
    cookieEssential: "Nur notwendige akzeptieren",
    cookieAll: "Alle akzeptieren",
  },
  en: {
    lang: "en",
    title: "SCHATZI | Premium Dog & Cat Grooming Bremen",
    description: "Professional coat care and wellness for dogs and cats in Bremen. Certified groomers, premium cosmetics, and stress-free treatment. Book online now!",
    nav: ["Philosophy", "Services", "Results", "Team", "Contacts"],
    headerCta: "Contacts",
    eyebrow: "Premium Pet SPA Rituals",
    heroDefault: "Premium grooming for dogs and cats in Bremen.",
    heroMorning: "Good morning! Start with stress-free grooming in Bremen.",
    heroEvening: "Good evening! Book a morning SPA ritual for your pet.",
    heroCopy: "Stress-free care, certified groomers, and premium cosmetics at SCHATZI dog and cat salon.",
    book: "Book online",
    whatsapp: "WhatsApp",
    heroCardLabel: "Signature Care",
    heroCardTitle: "Dog salon & cat salon in Bremen.",
    heroCardCopy: "Halmerweg 31a, 28237 Bremen. Wellness, coat care, and stress-free treatment.",
    philosophyKicker: "Our Philosophy",
    philosophyTitle: "Every appointment is designed as a calm beauty ritual.",
    philosophyCopy: "SCHATZI is built for pets who deserve more than a quick trim: calm hands, premium cosmetics, and immaculate hygiene from arrival to final finish.",
    badges: [
      ["Premium Cosmetics", "High-quality, skin-friendly products and nourishing coat masks."],
      ["Certified Groomers", "Breed-aware care, low-stress handling, and precise styling geometry."],
      ["Absolute Hygiene", "Disinfected tools, fresh textiles, and clean surfaces for every appointment."],
    ],
    pricesKicker: "Interactive Price List",
    pricesTitle: "Choose the right care path.",
    pricesCopy: "Transparent starting prices with direct contact for every ritual.",
    tabs: ["Dogs", "Cats", "SPA & Special Care"],
    serviceLinks: "Contact for this ritual",
    quizKicker: "Smart Care Selector",
    quizTitle: "Find the right ritual in 20 seconds.",
    quizCopy: "A short selector recommends hygiene care, haircut, SPA, or sensitive care for dogs and cats.",
    quizLabels: ["Pet type", "Breed or size", "Care goal"],
    quizOptions: {
      petType: ["Dog", "Cat"],
      breedSize: ["Small breed", "Medium breed", "Large breed", "Long coat"],
      goal: ["Hygiene", "Haircut", "SPA / Recovery", "Sensitive skin"],
    },
    quizRecommendation: "Recommendation",
    recommendations: {
      hygiene: "Hygiene Ritual: bath, nails, ears, paws, and a gentle finish.",
      haircut: "Cut & Shape: breed-aware trim plus silhouette consultation.",
      spa: "SPA Recovery: mask, hydration, coat shine, and anti-frizz finish.",
      sensitive: "Sensitive Ritual: mild cleansing, calm drying, and low-fragrance cosmetics.",
    },
    sizeNote: " For large breeds, we plan extra time for drying and de-shedding.",
    catNote: " For cats, the master chooses an especially calm pace.",
    galleryKicker: "Before / After",
    galleryTitle: "A transformation you can see.",
    galleryCopy: "Drag the gold handle to compare the grooming finish.",
    teamKicker: "Certified Masters",
    teamTitle: "The artists behind the calm.",
    teamCopy: "Touch or hover each card to see specializations.",
    socialKicker: "Social Proof",
    socialTitle: "Live from @schatzi.groomingsalon",
    contactKicker: "Contacts",
    contactTitle: "Contact SCHATZI in Bremen.",
    contactCopy: "Address, direct contact channels, social media, and online booking for SCHATZI dog and cat salon.",
    contactCards: [
      ["Phone / WhatsApp", "+49 1703636129", "Germany. Message us directly on WhatsApp or call the salon in Bremen.", "WhatsApp"],
      ["Location", "Halmerweg 31a, 28237 Bremen", "Premium dog and cat salon in Bremen. Open the route directly in Google Maps.", "Google Maps"],
      ["Online Booking", "Booksly CRM", "Book your appointment online without calling through Booksly.", "Book via Booksly"],
    ],
    bottom: ["Booksly", "WhatsApp", "Map"],
    cookie: "We use only necessary cookies by default. Analytics cookies are enabled only after your explicit consent.",
    cookieEssential: "Accept necessary only",
    cookieAll: "Accept all",
  },
  uk: {
    lang: "uk",
    title: "SCHATZI | Преміальний грумінг собак і котів у Бремені",
    description: "Професійний догляд за шерстю та wellness для собак і котів у Бремені. Сертифіковані грумери, преміальна косметика та догляд без стресу. Запишіться онлайн!",
    nav: ["Філософія", "Послуги", "Результати", "Команда", "Контакти"],
    headerCta: "Контакти",
    eyebrow: "Преміальні SPA-ритуали",
    heroDefault: "Преміальний грумінг для собак і котів у Бремені.",
    heroMorning: "Доброго ранку! Почніть день зі спокійного грумінгу в Бремені.",
    heroEvening: "Добрий вечір! Запишіть улюбленця на ранковий SPA-ритуал.",
    heroCopy: "Догляд без стресу, сертифіковані грумери та преміальна косметика в салоні SCHATZI.",
    book: "Запис онлайн",
    whatsapp: "WhatsApp",
    heroCardLabel: "Signature Care",
    heroCardTitle: "Салон для собак і котів у Бремені.",
    heroCardCopy: "Halmerweg 31a, 28237 Bremen. Wellness, догляд за шерстю та спокійна процедура.",
    philosophyKicker: "Наша філософія",
    philosophyTitle: "Кожен візит створений як спокійний beauty-ритуал.",
    philosophyCopy: "SCHATZI створений для улюбленців, які заслуговують більше, ніж швидку стрижку: спокійні руки, преміальна косметика та бездоганна гігієна.",
    badges: [
      ["Преміальна косметика", "Якісні засоби для шкіри та живильні маски для шерсті."],
      ["Сертифіковані грумери", "Догляд з урахуванням породи, мінімум стресу та точний стиль."],
      ["Абсолютна гігієна", "Дезінфіковані інструменти, чистий текстиль і підготовлене місце для кожного візиту."],
    ],
    pricesKicker: "Інтерактивний прайс",
    pricesTitle: "Оберіть правильний догляд.",
    pricesCopy: "Прозорі стартові ціни та прямий контакт для кожного ритуалу.",
    tabs: ["Собаки", "Коти", "SPA та спецдогляд"],
    serviceLinks: "Зв'язатися щодо ритуалу",
    quizKicker: "Smart Care Selector",
    quizTitle: "Підберіть ритуал за 20 секунд.",
    quizCopy: "Короткий опитувальник порадить гігієну, стрижку, SPA або делікатний догляд.",
    quizLabels: ["Тип улюбленця", "Порода або розмір", "Ціль догляду"],
    quizOptions: {
      petType: ["Собака", "Кіт"],
      breedSize: ["Мала порода", "Середня порода", "Велика порода", "Довга шерсть"],
      goal: ["Гігієна", "Стрижка", "SPA / відновлення", "Чутлива шкіра"],
    },
    quizRecommendation: "Рекомендація",
    recommendations: {
      hygiene: "Hygiene Ritual: купання, кігті, вушка, лапки та делікатний фініш.",
      haircut: "Стрижка і форма: трим з урахуванням породи та консультація щодо силуету.",
      spa: "SPA-відновлення: маска, зволоження, блиск шерсті та anti-frizz фініш.",
      sensitive: "Sensitive Ritual: м'яке очищення, спокійне сушіння та косметика без різкого аромату.",
    },
    sizeNote: " Для великих порід ми плануємо більше часу на сушіння та вичісування.",
    catNote: " Для котів майстер обирає максимально спокійний темп.",
    galleryKicker: "До / Після",
    galleryTitle: "Трансформація, яку видно.",
    galleryCopy: "Потягніть золотий повзунок, щоб порівняти результат.",
    teamKicker: "Сертифіковані майстри",
    teamTitle: "Майстри спокійного догляду.",
    teamCopy: "Торкніться або наведіть на картку, щоб побачити спеціалізацію.",
    socialKicker: "Соціальні докази",
    socialTitle: "Live from @schatzi.groomingsalon",
    contactKicker: "Контакти",
    contactTitle: "Зв'язатися зі SCHATZI у Бремені.",
    contactCopy: "Адреса, прямі канали зв'язку, соцмережі та онлайн-запис для салону собак і котів SCHATZI.",
    contactCards: [
      ["Телефон / WhatsApp", "+49 1703636129", "Німеччина. Напишіть нам у WhatsApp або зателефонуйте в салон у Бремені.", "WhatsApp"],
      ["Локація", "Halmerweg 31a, 28237 Bremen", "Преміальний салон для собак і котів у Бремені. Відкрийте маршрут у Google Maps.", "Google Maps"],
      ["Онлайн-запис", "Booksly CRM", "Запишіться онлайн через Booksly без дзвінка.", "Запис через Booksly"],
    ],
    bottom: ["Booksly", "WhatsApp", "Карта"],
    cookie: "За замовчуванням ми використовуємо лише необхідні cookie. Аналітика вмикається тільки після вашої явної згоди.",
    cookieEssential: "Лише необхідні",
    cookieAll: "Прийняти всі",
  },
  ru: {
    lang: "ru",
    title: "SCHATZI | Премиальный груминг собак и кошек в Бремене",
    description: "Профессиональный уход за шерстью и wellness для собак и кошек в Бремене. Сертифицированные грумеры, премиальная косметика и уход без стресса. Запишитесь онлайн!",
    nav: ["Философия", "Услуги", "Результаты", "Команда", "Контакты"],
    headerCta: "Контакты",
    eyebrow: "Премиальные SPA-ритуалы",
    heroDefault: "Премиальный груминг для собак и кошек в Бремене.",
    heroMorning: "Доброе утро! Начните день со спокойного груминга в Бремене.",
    heroEvening: "Добрый вечер! Запишите питомца на утренний SPA-ритуал.",
    heroCopy: "Уход без стресса, сертифицированные грумеры и премиальная косметика в салоне SCHATZI.",
    book: "Онлайн-запись",
    whatsapp: "WhatsApp",
    heroCardLabel: "Signature Care",
    heroCardTitle: "Салон для собак и кошек в Бремене.",
    heroCardCopy: "Halmerweg 31a, 28237 Bremen. Wellness, уход за шерстью и спокойная процедура.",
    philosophyKicker: "Наша философия",
    philosophyTitle: "Каждый визит создан как спокойный beauty-ритуал.",
    philosophyCopy: "SCHATZI создан для питомцев, которые заслуживают больше, чем быструю стрижку: спокойные руки, премиальная косметика и безупречная гигиена.",
    badges: [
      ["Премиальная косметика", "Качественные средства для кожи и питательные маски для шерсти."],
      ["Сертифицированные грумеры", "Уход с учетом породы, минимум стресса и точная форма."],
      ["Абсолютная гигиена", "Дезинфицированные инструменты, чистый текстиль и подготовленное место для каждого визита."],
    ],
    pricesKicker: "Интерактивный прайс",
    pricesTitle: "Выберите подходящий уход.",
    pricesCopy: "Прозрачные стартовые цены и прямой контакт для каждого ритуала.",
    tabs: ["Собаки", "Кошки", "SPA и спецуход"],
    serviceLinks: "Связаться по ритуалу",
    quizKicker: "Smart Care Selector",
    quizTitle: "Подберите ритуал за 20 секунд.",
    quizCopy: "Короткий опросник подскажет гигиену, стрижку, SPA или деликатный уход.",
    quizLabels: ["Тип питомца", "Порода или размер", "Цель ухода"],
    quizOptions: {
      petType: ["Собака", "Кошка"],
      breedSize: ["Маленькая порода", "Средняя порода", "Крупная порода", "Длинная шерсть"],
      goal: ["Гигиена", "Стрижка", "SPA / восстановление", "Чувствительная кожа"],
    },
    quizRecommendation: "Рекомендация",
    recommendations: {
      hygiene: "Hygiene Ritual: купание, когти, ушки, лапки и деликатный финиш.",
      haircut: "Стрижка и форма: трим с учетом породы и консультация по силуэту.",
      spa: "SPA-восстановление: маска, увлажнение, блеск шерсти и anti-frizz финиш.",
      sensitive: "Sensitive Ritual: мягкое очищение, спокойная сушка и косметика без резкого аромата.",
    },
    sizeNote: " Для крупных пород мы планируем больше времени на сушку и вычес.",
    catNote: " Для кошек мастер выбирает максимально спокойный темп.",
    galleryKicker: "До / После",
    galleryTitle: "Трансформация, которую видно.",
    galleryCopy: "Потяните золотой ползунок, чтобы сравнить результат.",
    teamKicker: "Сертифицированные мастера",
    teamTitle: "Мастера спокойного ухода.",
    teamCopy: "Коснитесь или наведите на карточку, чтобы увидеть специализацию.",
    socialKicker: "Социальное доверие",
    socialTitle: "Live from @schatzi.groomingsalon",
    contactKicker: "Контакты",
    contactTitle: "Связаться со SCHATZI в Бремене.",
    contactCopy: "Адрес, прямые каналы связи, соцсети и онлайн-запись для салона собак и кошек SCHATZI.",
    contactCards: [
      ["Телефон / WhatsApp", "+49 1703636129", "Германия. Напишите нам в WhatsApp или позвоните в салон в Бремене.", "WhatsApp"],
      ["Локация", "Halmerweg 31a, 28237 Bremen", "Премиальный салон для собак и кошек в Бремене. Откройте маршрут в Google Maps.", "Google Maps"],
      ["Онлайн-запись", "Booksly CRM", "Запишитесь онлайн через Booksly без звонка.", "Запись через Booksly"],
    ],
    bottom: ["Booksly", "WhatsApp", "Карта"],
    cookie: "По умолчанию мы используем только необходимые cookie. Аналитика включается только после вашего явного согласия.",
    cookieEssential: "Только необходимые",
    cookieAll: "Принять все",
  },
  pl: {
    lang: "pl",
    title: "SCHATZI | Premium grooming psów i kotów w Bremie",
    description: "Profesjonalna pielęgnacja sierści i wellness dla psów i kotów w Bremie. Certyfikowani groomerzy, kosmetyki premium i spokojna obsługa. Zarezerwuj online!",
    nav: ["Filozofia", "Usługi", "Efekty", "Zespół", "Kontakt"],
    headerCta: "Kontakt",
    eyebrow: "Rytuały Premium Pet SPA",
    heroDefault: "Premium grooming dla psów i kotów w Bremie.",
    heroMorning: "Dzień dobry! Zacznij dzień od spokojnej pielęgnacji w Bremie.",
    heroEvening: "Dobry wieczór! Zarezerwuj poranny rytuał SPA dla pupila.",
    heroCopy: "Pielęgnacja bez stresu, certyfikowani groomerzy i kosmetyki premium w salonie SCHATZI.",
    book: "Rezerwuj online",
    whatsapp: "WhatsApp",
    heroCardLabel: "Signature Care",
    heroCardTitle: "Salon dla psów i kotów w Bremie.",
    heroCardCopy: "Halmerweg 31a, 28237 Bremen. Wellness, pielęgnacja sierści i spokojna wizyta.",
    philosophyKicker: "Nasza filozofia",
    philosophyTitle: "Każda wizyta to spokojny rytuał beauty.",
    philosophyCopy: "SCHATZI powstało dla pupili, które zasługują na więcej niż szybką usługę: spokojne ręce, kosmetyki premium i nienaganna higiena.",
    badges: [
      ["Kosmetyki premium", "Wysokiej jakości produkty przyjazne skórze i odżywcze maski do sierści."],
      ["Certyfikowani groomerzy", "Pielęgnacja zgodna z rasą, niski poziom stresu i precyzyjna forma."],
      ["Absolutna higiena", "Zdezynfekowane narzędzia, czyste tekstylia i przygotowane miejsce dla każdej wizyty."],
    ],
    pricesKicker: "Interaktywny cennik",
    pricesTitle: "Wybierz odpowiednią pielęgnację.",
    pricesCopy: "Przejrzyste ceny startowe i bezpośredni kontakt dla każdego rytuału.",
    tabs: ["Psy", "Koty", "SPA i pielęgnacja specjalna"],
    serviceLinks: "Kontakt w sprawie rytuału",
    quizKicker: "Smart Care Selector",
    quizTitle: "Dobierz rytuał w 20 sekund.",
    quizCopy: "Krótki selektor poleci higienę, strzyżenie, SPA albo delikatną pielęgnację.",
    quizLabels: ["Typ pupila", "Rasa lub rozmiar", "Cel pielęgnacji"],
    quizOptions: {
      petType: ["Pies", "Kot"],
      breedSize: ["Mała rasa", "Średnia rasa", "Duża rasa", "Długa sierść"],
      goal: ["Higiena", "Strzyżenie", "SPA / regeneracja", "Wrażliwa skóra"],
    },
    quizRecommendation: "Rekomendacja",
    recommendations: {
      hygiene: "Hygiene Ritual: kąpiel, pazury, uszy, łapki i delikatne wykończenie.",
      haircut: "Strzyżenie i forma: trim zgodny z rasą oraz konsultacja sylwetki.",
      spa: "SPA regeneracyjne: maska, nawilżenie, połysk sierści i anti-frizz finish.",
      sensitive: "Sensitive Ritual: łagodne oczyszczanie, spokojne suszenie i kosmetyki o delikatnym zapachu.",
    },
    sizeNote: " Dla dużych ras planujemy więcej czasu na suszenie i wyczesywanie.",
    catNote: " Dla kotów groomer wybiera wyjątkowo spokojne tempo.",
    galleryKicker: "Przed / Po",
    galleryTitle: "Widoczna transformacja.",
    galleryCopy: "Przeciągnij złoty suwak, aby porównać efekt.",
    teamKicker: "Certyfikowani mistrzowie",
    teamTitle: "Artyści spokojnej pielęgnacji.",
    teamCopy: "Dotknij lub najedź na kartę, aby zobaczyć specjalizację.",
    socialKicker: "Social proof",
    socialTitle: "Live from @schatzi.groomingsalon",
    contactKicker: "Kontakt",
    contactTitle: "Skontaktuj się z SCHATZI w Bremie.",
    contactCopy: "Adres, bezpośredni kontakt, social media i rezerwacja online dla salonu psów i kotów SCHATZI.",
    contactCards: [
      ["Telefon / WhatsApp", "+49 1703636129", "Niemcy. Napisz do nas na WhatsApp lub zadzwoń do salonu w Bremie.", "WhatsApp"],
      ["Lokalizacja", "Halmerweg 31a, 28237 Bremen", "Premium salon dla psów i kotów w Bremie. Otwórz trasę w Google Maps.", "Google Maps"],
      ["Rezerwacja online", "Booksly CRM", "Zarezerwuj wizytę online przez Booksly bez telefonu.", "Rezerwuj przez Booksly"],
    ],
    bottom: ["Booksly", "WhatsApp", "Mapa"],
    cookie: "Domyślnie używamy tylko niezbędnych cookies. Analityka zostanie włączona dopiero po Twojej wyraźnej zgodzie.",
    cookieEssential: "Tylko niezbędne",
    cookieAll: "Akceptuj wszystkie",
  },
};
function scheduleWork(task) {
  requestAnimationFrame(() => {
    if (navigator.scheduling?.isInputPending?.()) {
      requestAnimationFrame(task);
      return;
    }

    task();
  });
}

function elevateHeader() {
  scheduleWork(() => {
    header?.classList.toggle("is-elevated", window.scrollY > 24);
  });
}

function showSlide(index) {
  scheduleWork(() => {
    slides.forEach((slide, slideIndex) => {
      slide.classList.toggle("is-active", slideIndex === index);
    });
  });
}

function cycleHero() {
  if (slides.length < 2) return;
  activeSlide = (activeSlide + 1) % slides.length;
  showSlide(activeSlide);
}

function activateTab(tabName) {
  scheduleWork(() => {
    tabButtons.forEach((button) => {
      const isActive = button.dataset.tab === tabName;
      button.classList.toggle("is-active", isActive);
      button.setAttribute("aria-selected", String(isActive));
    });

    tabPanels.forEach((panel) => {
      const isActive = panel.dataset.panel === tabName;
      panel.classList.toggle("is-active", isActive);
      panel.hidden = !isActive;
    });
  });
}

function toggleAccordion(accordion) {
  scheduleWork(() => {
    const trigger = accordion.querySelector(".accordion-trigger");
    const willOpen = !accordion.classList.contains("is-open");

    accordion.classList.toggle("is-open", willOpen);
    trigger?.setAttribute("aria-expanded", String(willOpen));
  });
}

function setComparison(value) {
  scheduleWork(() => {
    const after = comparison?.querySelector("[data-after]");
    const handle = comparison?.querySelector("[data-handle]");

    if (!after || !handle) return;

    after.style.width = `${value}%`;
    handle.style.left = `${value}%`;
  });
}

function moveCursorGlow(event) {
  if (!cursorGlow) return;

  scheduleWork(() => {
    cursorGlow.style.transform = `translate3d(${event.clientX - 176}px, ${event.clientY - 176}px, 0)`;
  });
}

function setText(selector, value) {
  const element = document.querySelector(selector);
  if (element && value) element.textContent = value;
}

function setAllText(selector, values) {
  document.querySelectorAll(selector).forEach((element, index) => {
    if (values[index]) element.textContent = values[index];
  });
}

function setMeta(selector, value) {
  const element = document.querySelector(selector);
  if (element && value) element.setAttribute("content", value);
}

function setLabelText(label, value) {
  const textNode = [...label.childNodes].find((node) => node.nodeType === Node.TEXT_NODE && node.textContent.trim());
  if (textNode && value) textNode.textContent = `\n            ${value}\n            `;
}

function setSelectOptions(name, values) {
  document.querySelectorAll(`select[name="${name}"] option`).forEach((option, index) => {
    if (values[index]) option.textContent = values[index];
  });
}

function applyLanguage(language) {
  const dictionary = translations[language] || translations.de;
  currentLanguage = language;
  document.documentElement.lang = dictionary.lang;
  document.title = dictionary.title;
  setMeta('meta[name="description"]', dictionary.description);
  setMeta('meta[property="og:title"]', dictionary.title);
  setMeta('meta[property="og:description"]', dictionary.description);

  setAllText(".nav-links a", dictionary.nav);
  setText(".header-cta", dictionary.headerCta);
  setText(".eyebrow", dictionary.eyebrow);
  setText("#hero-title", dictionary.heroDefault);
  setText(".hero-copy", dictionary.heroCopy);
  setAllText(".hero-actions .button", [dictionary.book, dictionary.whatsapp]);
  setText(".hero-card span", dictionary.heroCardLabel);
  setText(".hero-card strong", dictionary.heroCardTitle);
  setText(".hero-card p", dictionary.heroCardCopy);

  setText("#philosophy .section-kicker", dictionary.philosophyKicker);
  setText("#philosophy h2", dictionary.philosophyTitle);
  setText("#philosophy .copy-stack > p", dictionary.philosophyCopy);
  document.querySelectorAll("#philosophy .badge-card").forEach((card, index) => {
    setText(`#philosophy .badge-card:nth-child(${index + 1}) h3`, dictionary.badges[index][0]);
    setText(`#philosophy .badge-card:nth-child(${index + 1}) p`, dictionary.badges[index][1]);
  });

  setText("#prices .section-kicker", dictionary.pricesKicker);
  setText("#prices h2", dictionary.pricesTitle);
  setText("#prices .section-heading > p", dictionary.pricesCopy);
  setAllText(".tab-button", dictionary.tabs);
  setAllText(".contact-link", Array.from({ length: document.querySelectorAll(".contact-link").length }, () => dictionary.serviceLinks));

  setText("#care-quiz .section-kicker", dictionary.quizKicker);
  setText("#quiz-title", dictionary.quizTitle);
  setText("#care-quiz .section-heading > p", dictionary.quizCopy);
  document.querySelectorAll(".quiz-card label").forEach((label, index) => setLabelText(label, dictionary.quizLabels[index]));
  setSelectOptions("petType", dictionary.quizOptions.petType);
  setSelectOptions("breedSize", dictionary.quizOptions.breedSize);
  setSelectOptions("goal", dictionary.quizOptions.goal);

  setText("#gallery .section-kicker", dictionary.galleryKicker);
  setText("#gallery h2", dictionary.galleryTitle);
  setText("#gallery .section-heading > p", dictionary.galleryCopy);
  setText("#team .section-kicker", dictionary.teamKicker);
  setText("#team h2", dictionary.teamTitle);
  setText("#team .section-heading > p", dictionary.teamCopy);
  setText("#social .section-kicker", dictionary.socialKicker);
  setText("#social h2", dictionary.socialTitle);

  setText("#contacts .section-kicker", dictionary.contactKicker);
  setText("#contacts-title", dictionary.contactTitle);
  setText("#contacts .section-heading > p", dictionary.contactCopy);
  document.querySelectorAll(".contact-card").forEach((card, index) => {
    const cardData = dictionary.contactCards[index];
    if (!cardData) return;
    card.querySelector("span").textContent = cardData[0];
    const titleLink = card.querySelector("h3 a");
    if (titleLink) titleLink.textContent = cardData[1];
    else card.querySelector("h3").textContent = cardData[1];
    card.querySelector("p").textContent = cardData[2];
    card.querySelector(".button").textContent = cardData[3];
  });

  setAllText(".bottom-nav a", dictionary.bottom);
  setText(".cookie-notice p", dictionary.cookie);
  setText("[data-cookie-essential]", dictionary.cookieEssential);
  setText("[data-cookie-all]", dictionary.cookieAll);

  languageButtons.forEach((button) => {
    const isActive = button.dataset.lang === language;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });

  try {
    localStorage.setItem("schatzi-language", language);
  } catch {
    // Language switching still works if browser storage is unavailable.
  }

  personalizeHero();
  updateQuizRecommendation();
}

function personalizeHero() {
  if (!heroTitle) return;

  const dictionary = translations[currentLanguage] || translations.de;
  const hour = new Date().getHours();

  if (hour >= 18 || hour < 5) {
    heroTitle.textContent = dictionary.heroEvening;
    return;
  }

  if (hour < 12) {
    heroTitle.textContent = dictionary.heroMorning;
    return;
  }

  heroTitle.textContent = dictionary.heroDefault;
}

function updateQuizRecommendation() {
  if (!careQuiz || !quizResult) return;

  const formData = new FormData(careQuiz);
  const petType = formData.get("petType");
  const breedSize = formData.get("breedSize");
  const goal = formData.get("goal");

  const dictionary = translations[currentLanguage] || translations.de;
  const recommendations = dictionary.recommendations;

  const sizeNote = breedSize === "large" ? dictionary.sizeNote : "";
  const catNote = petType === "cat" ? dictionary.catNote : "";

  scheduleWork(() => {
    quizResult.textContent = `${dictionary.quizRecommendation}: ${recommendations[goal] || recommendations.hygiene}${sizeNote}${catNote}`;
  });
}

function setCookieChoice(choice) {
  try {
    localStorage.setItem("schatzi-cookie-choice", choice);
  } catch {
    // If storage is blocked, keep the notice dismissible for this session.
  }
  cookieNotice.hidden = true;
}

function setupCookieNotice() {
  if (!cookieNotice) return;

  let storedChoice = "";

  try {
    storedChoice = localStorage.getItem("schatzi-cookie-choice");
  } catch {
    storedChoice = "";
  }

  cookieNotice.hidden = Boolean(storedChoice);
}

function setupRevealAnimations() {
  revealTargets.forEach((target) => target.classList.add("reveal"));

  if (!("IntersectionObserver" in window)) {
    revealTargets.forEach((target) => target.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    { rootMargin: "0px 0px -12% 0px", threshold: 0.12 },
  );

  revealTargets.forEach((target) => observer.observe(target));
}

window.addEventListener("scroll", elevateHeader, { passive: true });
window.addEventListener("pointermove", moveCursorGlow, { passive: true });

tabButtons.forEach((button) => {
  button.addEventListener("click", () => activateTab(button.dataset.tab));
});

accordions.forEach((accordion) => {
  const trigger = accordion.querySelector(".accordion-trigger");
  trigger?.addEventListener("click", () => toggleAccordion(accordion));
});

if (comparison) {
  const range = comparison.querySelector("[data-range]");
  range?.addEventListener("input", (event) => setComparison(event.target.value));
  setComparison(range?.value || 50);
}

careQuiz?.addEventListener("input", updateQuizRecommendation, { passive: true });
cookieEssential?.addEventListener("click", () => setCookieChoice("essential"));
cookieAll?.addEventListener("click", () => setCookieChoice("all"));
languageButtons.forEach((button) => {
  button.addEventListener("click", () => applyLanguage(button.dataset.lang));
});

try {
  currentLanguage = localStorage.getItem("schatzi-language") || "de";
} catch {
  currentLanguage = "de";
}

applyLanguage(currentLanguage);
setupCookieNotice();
setupRevealAnimations();
elevateHeader();
showSlide(activeSlide);
setInterval(cycleHero, 5200);
