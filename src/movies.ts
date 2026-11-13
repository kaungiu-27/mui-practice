export type Movie = {
  id: number;
  title: string;
  category: string;
  genre: string;
  image: string;
  rating: number;
  watched: boolean;
};
export const movies: Movie[] = [
    {
    id: 1,
    title: "Jujutsu Kaisen",
    category: "アニメ",
    genre: "ダークファンタジー・アクション",
    image: "images/jujutsu.jpg",
    rating: 5,
    watched: true,
  },
    {
    id: 2,
    title: "Haikyu!! The Dumpster Battle",
    category: "アニメ映画",
    genre: "スポーツ・青春",
    image: "images/haikyuu.jpg",
    rating: 5,
    watched: true,
  },
    {
    id: 3,
    title: "Attack on Titan",
    category: "アニメ",
    genre: "ダークファンタジー・アクション",
    image: "images/aot.jpg",
    rating: 5,
    watched: true,
  },
    {
    id: 4,
    title: "Bleach",
    category: "アニメ",
    genre: "アクション・ファンタジー",
    image: "images/bleach.jpg",
    rating: 5,
    watched: true,
  },
    {
    id: 5,
    title: "One Piece",
    category: "アニメ",
    genre: "冒険・アクション",
    image: "images/onepiece.jpg",
    rating: 5,
    watched: true,
  },
    {
    id: 6,
    title: "Demon Slayer",
    category: "アニメ",
    genre: "ダークファンタジー・アクション",
    image: "images/demonslayer.jpg",
    rating: 5,
    watched: true,
  },
];