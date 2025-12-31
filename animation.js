const inViewport = (entries, observer) => {
  entries.forEach((entry) => {
    entry.target.classList.toggle("animate-fadein", entry.isIntersecting);
    if (entry.isIntersecting) observer.unobserve(entry.target);
  });
};

const observer = new IntersectionObserver(inViewport);

const animateElements = document.querySelectorAll(".select-animate");
animateElements.forEach((e) => {
  observer.observe(e);
});

const heroImage = document.querySelector("#title-right img");
if (heroImage) {
  heroImage.classList.toggle("animate-slidein");
}

const translations = {
  de: {
    "cta.portfolio": "Portfolio",
    "disciplines.title": "Mit Kompetenz. Mit Mut. Mit Biss.",
    "disciplines.subtitle": "Unsere Expertise:",
    "card1.title": "Gesellschaftsrecht",
    "card1.body":
      "Das Gesellschaftsrecht bildet den Kernbereich unserer juristischen Beratung. Mit unserem breiten Netzwerk an Rechtsanwälten finden wir Lösungen für alle Bereiche des Wirtschaftsrechts und beraten Start-ups und mittelständische Unternehmen im Stile einer Full-Service Kanzlei.",
    "card2.title": "Vertragsrecht",
    "card2.body":
      "Wir prüfen Ihren Gesellschaftsvertrag, Ihren Arbeitsvertrag oder Ihren Mietvertrag auf Herz und Nieren und finden kluge Lösungen für eine gerechte Interessenverteilung bei Ihrem Rechtsproblem.",
    "card3.title": "Wirtschaftsstrafrecht und Individualverteidigung",
    "card3.body":
      "Wir beraten und vertreten Einzelpersonen sowie Unternehmen in jeder Verfahrenslage. Unsere besondere Kompetenz im Bereich des Strafrechts ermöglicht uns starke und kalkulierte Verteidigungsstrategien.",
    "portrait.body":
      "Seit August 2024 ist Daniil Shalumov zugelassener Rechtsanwalt in München. Zusammen mit einem Netzwerk an Juristinnen und Juristen auf der ganzen Welt bietet er seit dem Rechtsdienstleistungen auf deutscher, englischer und russischer Sprache an. Unser Fokus liegt auf der Bereitstellung hochspezialisierter Rechtsdienstleistungen für Private Clients. Besondere Kompetenzen hat die Kanzlei Shalumov & Partner bei der Beratung im Gesellschaftsrecht, bei Unternehmensgründungen, im Vertragsrecht und in strafrechtlichen Angelegenheiten. Unseren Mandanten garantieren wir kämpferischen und zugleich strategischen Einsatz und verleihen Ihren Interessen im Rechtsstreit den nötigen Nachdruck.",
    "portrait2.title": "RA Davor Berov",
    "portrait2.body":
      "Davor Berov bietet breit gefächerte Beratung in Arbeits-, Familien- und Strafrecht, entwickelt schnelle, maßgeschneiderte Lösungen und bleibt dabei stets persönlich ansprechbar.",
    "cta.contact": "Jetzt Kontakt aufnehmen",
  },
  en: {
    "cta.portfolio": "Portfolio",
    "disciplines.title": "With competence. With courage. With tenacity.",
    "disciplines.subtitle": "Our expertise:",
    "card1.title": "Corporate law",
    "card1.body":
      "Corporate law forms the core of our legal advisory work. With our broad network of attorneys, we find solutions for all areas of business law and advise start-ups and mid-sized companies like a full-service firm.",
    "card2.title": "Contract law",
    "card2.body":
      "We scrutinize your shareholders' agreements, employment contracts, or leases and craft smart solutions that balance interests fairly.",
    "card3.title": "White-collar criminal law and defense",
    "card3.body":
      "We advise and represent individuals and companies at every procedural stage. Our strong criminal-law expertise enables robust, well-calculated defense strategies.",
    "portrait.body":
      "Since August 2024, Daniil Shalumov has been admitted as an attorney in Munich. Together with a worldwide network of lawyers, he offers legal services in German, English, and Russian. We focus on delivering highly specialized services for private clients. Shalumov & Partner is particularly strong in corporate law, company formations, contract law, and criminal matters. We guarantee our clients a spirited yet strategic approach and lend their interests decisive emphasis in any dispute.",
    "portrait2.title": "Attorney Davor Berov",
    "portrait2.body":
      "Davor Berov provides broad counsel in labor, family, and criminal law, crafting swift, tailored solutions while staying personally accessible throughout.",
    "cta.contact": "Get in touch now",
  },
  ru: {
    "cta.portfolio": "Портфолио",
    "disciplines.title": "С компетенцией. С мужеством. С напором.",
    "disciplines.subtitle": "Наша экспертиза:",
    "card1.title": "Корпоративное право",
    "card1.body":
      "Корпоративное право составляет основу нашей юридической консультации. Благодаря широкой сети юристов мы находим решения для всех областей хозяйственного права и консультируем стартапы и средние компании в формате full-service бюро.",
    "card2.title": "Договорное право",
    "card2.body":
      "Мы тщательно проверяем ваши корпоративные договоры, трудовые договоры или договоры аренды и находим разумные решения для справедливого распределения интересов.",
    "card3.title": "Экономические преступления и индивидуальная защита",
    "card3.body":
      "Мы консультируем и представляем частных лиц и компании на любой стадии процесса. Наша особая компетенция в уголовном праве позволяет выстраивать сильные и продуманные стратегии защиты.",
    "portrait.body":
      "С августа 2024 года Даниил Шалумов - допущенный к адвокатской практике в Мюнхене. Вместе с глобальной сетью юристов он предоставляет услуги на немецком, английском и русском языках. Мы сосредоточены на высокоспециализированных услугах для частных клиентов. Kanzlei Shalumov & Partner особенно сильна в корпоративном праве, создании компаний, договорном праве и уголовных делах. Мы гарантируем клиентам напористую и одновременно стратегическую защиту и придаем их интересам вес в каждом споре.",
    "portrait2.title": "Адвокат Давор Беров",
    "portrait2.body":
      "Давор Беров предлагает широкую консультацию по трудовому, семейному и уголовному праву, быстро разрабатывает индивидуальные решения и всегда остается лично на связи.",
    "cta.contact": "Связаться сейчас",
  },
  mk: {
    "cta.portfolio": "Портфолио",
    "disciplines.title": "Со компетентност. Со храброст. Со упорност.",
    "disciplines.subtitle": "Нашата експертиза:",
    "card1.title": "Деловно право",
    "card1.body":
      "Деловното право е јадрото на нашето правно советување. Со нашата широка мрежа на адвокати наоѓаме решенија за сите области на стопанското право и советуваме стартапи и средни компании во стил на \"full-service\" канцеларија.",
    "card2.title": "Договорно право",
    "card2.body":
      "Ги проверуваме вашите друштвени договори, работни договори или договори за наем и наоѓаме паметни решенија за фер распределба на интересите.",
    "card3.title": "Економски криминал и одбрана",
    "card3.body":
      "Советуваме и застапуваме физички лица и компании во сите процесни фази. Нашата посебна стручност во кривичното право овозможува силни и прецизно пресметани одбранбени стратегии.",
    "portrait.body":
      "Од август 2024, Даниил Шалумов е адвокат во Минхен. Заедно со светска мрежа на правници нуди правни услуги на германски, англиски и руски јазик. Нашиот фокус е обезбедување високоспецијализирани услуги за приватни клиенти. Канцеларијата Shalumov & Partner е особено силна во деловно право, основање компании, договорно право и кривични предмети. Им гарантираме на клиентите борбен, но и стратешки пристап и им даваме тежина на нивните интереси во секој спор.",
    "portrait2.title": "Адвокат Давор Беров",
    "portrait2.body":
      "Давор Беров нуди широка консултација во работно, семејно и кривично право, брзо изработува решенија по мерка и останува лично достапен во целиот процес.",
    "cta.contact": "Контактирајте нè сега",
  },
  bg: {
    "cta.portfolio": "Портфолио",
    "disciplines.title": "С компетентност. С кураж. С решителност.",
    "disciplines.subtitle": "Нашата експертиза:",
    "card1.title": "Корпоративно право",
    "card1.body":
      "Корпоративното право е в основата на нашата юридическа консултация. Благодарение на широката ни мрежа от адвокати намираме решения за всички области на търговското право и консултираме стартиращи и средни компании като пълнообслужваща кантора.",
    "card2.title": "Договорно право",
    "card2.body":
      "Преглеждаме внимателно вашите учредителни договори, трудови договори или наемни договори и намираме разумни решения за справедливо разпределение на интересите.",
    "card3.title": "Икономически наказателни дела и защита",
    "card3.body":
      "Консултираме и представляваме физически лица и компании във всяка фаза на процеса. Специалната ни експертиза в наказателното право позволява силни и добре премислени защитни стратегии.",
    "portrait.body":
      "От август 2024 г. Даниил Шалумов е адвокат в Мюнхен. Заедно с глобална мрежа от юристи предлага правни услуги на немски, английски и руски език. Фокусът ни е върху високоспециализирани услуги за частни клиенти. Kanzlei Shalumov & Partner е особено силна в корпоративно право, учредяване на компании, договорно право и наказателни дела. Гарантираме на клиентите борбен и същевременно стратегически подход и придаваме тежест на техните интереси във всеки спор.",
    "portrait2.title": "Адвокат Давор Беров",
    "portrait2.body":
      "Давор Беров предлага широка консултация по трудово, семейно и наказателно право, изработва бързи решения по мярка и остава лично достъпен през целия процес.",
    "cta.contact": "Свържете се с нас сега",
  },
};

const updateLanguage = (lang) => {
  const dictionary = translations[lang] || translations.de;
  document.documentElement.setAttribute("lang", lang);

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.dataset.i18n;
    const text = dictionary[key];
    if (!text) return;

    const tag = el.tagName.toLowerCase();
    if (tag === "input" || tag === "textarea") {
      el.placeholder = text;
    } else {
      el.textContent = text;
    }
  });

  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.lang === lang);
  });

  localStorage.setItem("site-lang", lang);
};

const languageButtons = document.querySelectorAll(".lang-btn");
languageButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const lang = btn.dataset.lang;
    updateLanguage(lang);
  });
});

const storedLang = localStorage.getItem("site-lang") || "de";
updateLanguage(storedLang);
