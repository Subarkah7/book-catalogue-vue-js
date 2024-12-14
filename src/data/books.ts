import { Book } from '../types/book';

export const books: Book[] = [
  {
    id: 1,
    title: "The Great Gatsby",
    description: "A story of decadence and excess, Gatsby explores the American Dream in the 1920s.",
    thumbnail: "https://picsum.photos/200/300",
    downloadUrl: "#",
    author: "F. Scott Fitzgerald",
    publicationYear: 1925,
    category: "Fiction",
    rating: 4.5
  },
  {
    id: 2,
    title: "1984",
    description: "A dystopian social science fiction novel and cautionary tale.",
    thumbnail: "https://picsum.photos/200/300",
    downloadUrl: "#",
    author: "George Orwell",
    publicationYear: 1949,
    category: "Science Fiction",
    rating: 4.8
  },
  // Add more books as needed
];