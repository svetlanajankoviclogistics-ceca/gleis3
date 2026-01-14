const dictionaries = {
  de: () => import("../dictionaries/de.json").then((m) => m.default),
  en: () => import("../dictionaries/en.json").then((m) => m.default),
  fr: () => import("../dictionaries/fr.json").then((m) => m.default),
  ko: () => import("../dictionaries/ko.json").then((m) => m.default),
  es: () => import("../dictionaries/es.json").then((m) => m.default),
};


export const getHomeDict = async (lang: string) =>
  dictionaries[lang as keyof typeof dictionaries]?.() ?? dictionaries.en();

export const getContactDict = async (lang: string) =>
  dictionaries[lang as keyof typeof dictionaries]?.() ?? dictionaries.en();

export const getNavDict = async (lang: string) =>
  dictionaries[lang as keyof typeof dictionaries]?.() ?? dictionaries.en();

export const getFooterDict = async (lang: string) =>
  dictionaries[lang as keyof typeof dictionaries]?.() ?? dictionaries.en();

export const getMenuDict = async (lang: string) =>
  dictionaries[lang as keyof typeof dictionaries]?.() ?? dictionaries.en();

const privacyMap = {
  de: () => import("./privacy/de.json").then((m) => m.default),
  en: () => import("./privacy/en.json").then((m) => m.default),
  fr: () => import("./privacy/fr.json").then((m) => m.default),
  ko: () => import("./privacy/ko.json").then((m) => m.default),
  es: () => import("./privacy/es.json").then((m) => m.default),
};

export const getPrivacyDict = async (lang: string) =>
  (privacyMap[lang as keyof typeof privacyMap]?.() ?? privacyMap.en?.()) as Promise<{
    metaTitle: string;
    metaDesc: string;
    heading: string;
    lastUpdate: string;
    controllerTitle: string;
    legalBasesTitle: string;
    dataCollectedTitle: string;
    purposesTitle: string;
    retentionTitle: string;
    thirdPartiesTitle: string;
    transfersTitle: string;
    rightsTitle: string;
    cookiesTitle: string;
    contactTitle: string;
  }>;