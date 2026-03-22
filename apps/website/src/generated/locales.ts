export const locales = ["af-ZA","ar-SA","bs-BA","ca-ES","cs-CZ","da-DK","de-DE","el-GR","en","es-ES","fi-FI","fr-FR","he-IL","hu-HU","it-IT","ja-JP","ko-KR","my-MM","nb-NO","nl-NL","no-NO","pl-PL","pt-BR","pt-PT","ro-RO","ru-RU","sk-SK","sr-SP","sv-SE","tr-TR","uk-UA","vi-VN","zh-CN","zh-HK","zh-TW"] as const
export type AppLocale = (typeof locales)[number]
