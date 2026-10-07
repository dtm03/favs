export type FavCategory =
  | "Lieblingsessen"
  | "Urlaubsort"
  | "Film"
  | "Serie"
  | "Song"
  | "Band"
  | "Schulfach"
  | "Sprache"
  | "Bar"
  | "Restaurant";

export type FavItem = {
  category: FavCategory;
  value: string;
};

export type Profile = {
  id: string;
  name: string;
  age: number;
  city: string;
  bio: string;
  favs: FavItem[];
  photoUrls: string[];
};

export type ChatPreview = {
  id: string;
  name: string;
  lastMessage: string;
  time: string;
  unread: number;
};

export type ChatMessage = {
  id: string;
  text: string;
  sent: boolean;
  time: string;
};

export const sampleProfile: Profile = {
  id: "1",
  name: "Mira",
  age: 26,
  city: "Berlin",
  bio: "Sucht jemanden für spontane Spaziergänge und gutes Essen.",
  favs: [
    { category: "Lieblingsessen", value: "Ramen" },
    { category: "Urlaubsort", value: "Lissabon" },
    { category: "Film", value: "La La Land" },
    { category: "Serie", value: "Fleabag" },
    { category: "Song", value: "Levitating" },
    { category: "Band", value: "Tame Impala" },
    { category: "Schulfach", value: "Kunst" },
    { category: "Sprache", value: "Portugiesisch" },
    { category: "Bar", value: "Würgeengel" },
    { category: "Restaurant", value: "Cookies Cream" },
  ],
  photoUrls: [
    "https://picsum.photos/seed/favs1/600/800",
    "https://picsum.photos/seed/favs2/600/800",
    "https://picsum.photos/seed/favs3/600/800",
  ],
};

export const peterProfile: Profile = {
  id: "2",
  name: "Peter",
  age: 29,
  city: "Hamburg",
  bio: "Liebt Musikabende, Fahrradtouren und ehrliche Gespräche.",
  favs: [
    { category: "Lieblingsessen", value: "Burger" },
    { category: "Urlaubsort", value: "Reykjavík" },
    { category: "Film", value: "The Social Network" },
    { category: "Serie", value: "The Bear" },
    { category: "Song", value: "Sunflower" },
    { category: "Band", value: "The 1975" },
    { category: "Schulfach", value: "Mathe" },
    { category: "Sprache", value: "Englisch" },
    { category: "Bar", value: "Biergarten" },
    { category: "Restaurant", value: "Sushi Koi" },
  ],
  photoUrls: [
    "https://picsum.photos/seed/peter1/600/800",
    "https://picsum.photos/seed/peter2/600/800",
    "https://picsum.photos/seed/peter3/600/800",
  ],
};

export const profileQueue: Profile[] = [sampleProfile, peterProfile];

export const chatPreviews: ChatPreview[] = [
  {
    id: "mira",
    name: "Mira",
    lastMessage: "Lust auf Donnerstag Ramen?",
    time: "14:02",
    unread: 2,
  },
  {
    id: "leo",
    name: "Leo",
    lastMessage: "Haha, stimmt — Lissabon war mega.",
    time: "Gestern",
    unread: 0,
  },
  {
    id: "sara",
    name: "Sara",
    lastMessage: "Schick mir deine Lieblingsbar 🍸",
    time: "Mo",
    unread: 0,
  },
];

export const exampleChatMessages: ChatMessage[] = [
  {
    id: "1",
    text: "Hey! Dein Lieblingsessen ist auch Ramen? 🍜",
    sent: false,
    time: "13:40",
  },
  {
    id: "2",
    text: "Ja total — besonders spicy miso!",
    sent: true,
    time: "13:42",
  },
  { id: "3", text: "Lust auf Donnerstag Ramen?", sent: false, time: "14:02" },
];
