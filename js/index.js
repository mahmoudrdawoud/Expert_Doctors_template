const translations = {
  en: {
    yourlogo: "your logo",
    Home: "Home",
    AboutUs: "About Us",
    Courses: "Courses",
    Pages: "Pages",
    Blog: "Blog",
    Courses: "Courses",
    lang: "lang",
    Contact: "Contact",
    RegisterNow: "Register Now",
    GetQuick: "Get Quick",
    MedicalServices: "Medical Services",
    descMedical:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem,nulla, dolorum quasi reprehenderit fuga, odio qui quaerat magnam perspiciatis cumque temporibus eveniet ea quod totam esse. Fugit ex quas cumque.",
    GetServices: "Get Services",
    ActivateClients: "Activate Clients",
    time: "Get 20% off on every 1st month",
    ExpertDoctors: "Expert Doctors",
  },
  ar: {
    yourlogo: "شعارك",
    Home: "الصفحة الرئيسية",
    AboutUs: "عنا",
    Courses: "الدورات",
    Pages: "الصفحات",
    Blog: "مدونه",
    lang: "اللغة",
    Contact: "تواصل معنا",
    RegisterNow: "سجل الان",
    GetQuick: "الحصول على سريع",
    MedicalServices: "الخدمات الطبية",
    descMedical:
      "الشركة نفسها هي شركة ناجحة للغاية. ألم ، لا ألم ، كأنه سينتقد الرحلة ، يكره من يبحث عن بصيرة عظيمة ، وفي بعض الأحيان سيحدث هذا كل شيء. يهرب من أي مكان.",
    GetServices: "الحصول على الخدمات",
    ActivateClients: "تنشيط العملاء",
    time: "احصل على خصم 20 ٪ في كل شهر واحد",
    ExpertDoctors: "الأطباء الخبراء",
  },
};

const languageSelector = document.querySelector("#lang");
// const langButton = document.querySelector("#lang");

languageSelector.addEventListener("click", (event) => {
  const currentLanguage = languageSelector.textContent.trim();
  const newLanguage = currentLanguage === translations.en.lang ? "ar" : "en";
  setLanguage(newLanguage);
  languageSelector.textContent = translations[newLanguage].lang;
  localStorage.setItem("lang", newLanguage);
});

document.addEventListener("DOMContentLoaded", () => {
  const language = localStorage.getItem("lang") || "en";
  languageSelector.textContent = translations[language].lang;
  setLanguage(language);
});

const setLanguage = (language) => {
  const elements = document.querySelectorAll("[data-i18n]");
  elements.forEach((element) => {
    const translationKey = element.getAttribute("data-i18n");
    element.textContent = translations[language][translationKey];
  });
  document.dir = language === "ar" ? "rtl" : "ltr";
};
