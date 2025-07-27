export type Language = "en" | "de" | "es" | "nl";

export const supportedLanguages: Language[] = ["en", "de", "es", "nl"];

export const getCurrentLanguage = (): Language => {
  const envLang = process.env.LANG?.slice(0, 2) || "en";
  return supportedLanguages.includes(envLang as Language)
    ? (envLang as Language)
    : "en";
};

const generalTranslations: Record<
  "thankYouMessage" | "backHomeButton",
  Record<Language, string>
> = {
  thankYouMessage: {
    en: "THANK YOU FOR YOUR ORDER",
    de: "DANKE FÜR IHRE BESTELLUNG",
    es: "GRACIAS POR SU PEDIDO",
    nl: "BEDANKT VOOR UW BESTELLING",
  },
  backHomeButton: {
    en: "BACK HOME",
    de: "ZURÜCK ZUR STARTSEITE",
    es: "VOLVER AL INICIO",
    nl: "TERUG NAAR HUIS",
  },
};

const errorTranslations: Record<
  "usernameRequired" | "passwordRequired" | "invalidCredentials",
  Record<Language, string>
> = {
  usernameRequired: {
    en: "Username is required",
    de: "Benutzername ist erforderlich",
    es: "El nombre de usuario es obligatorio",
    nl: "Gebruikersnaam is verplicht",
  },
  passwordRequired: {
    en: "Password is required",
    de: "Passwort ist erforderlich",
    es: "La contraseña es obligatoria",
    nl: "Wachtwoord is verplicht",
  },
  invalidCredentials: {
    en: "Username and password do not match any user in this service.",
    de: "Benutzername und Passwort stimmen nicht mit einem Benutzer in diesem Dienst überein.",
    es: "El nombre de usuario y la contraseña no coinciden con ningún usuario de este servicio.",
    nl: "Gebruikersnaam en wachtwoord komen niet overeen met een gebruiker in deze dienst.",
  },
};

export const t = (key: keyof typeof generalTranslations): string => {
  const lang = getCurrentLanguage();
  return generalTranslations[key][lang] || generalTranslations[key].en;
};

export const tError = (key: keyof typeof errorTranslations): string => {
  const lang = getCurrentLanguage();
  return errorTranslations[key][lang] || errorTranslations[key].en;
};
