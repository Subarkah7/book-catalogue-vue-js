import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import { books } from '../data/books';
import type { Book } from '../types/book';

export const useBookStore = defineStore('books', () => {
  const allBooks = ref(books);
  const searchQuery = ref('');
  const selectedCategory = ref('');
  const sortBy = ref('title');

  const filteredBooks = computed(() => {
    return allBooks.value
      .filter(book => {
        const matchesSearch = book.title.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
                            book.author.toLowerCase().includes(searchQuery.value.toLowerCase());
        const matchesCategory = !selectedCategory.value || book.category === selectedCategory.value;
        return matchesSearch && matchesCategory;
      })
      .sort((a, b) => {
        if (sortBy.value === 'title') {
          return a.title.localeCompare(b.title);
        } else if (sortBy.value === 'year') {
          return b.publicationYear - a.publicationYear;
        } else if (sortBy.value === 'rating') {
          return b.rating - a.rating;
        }
        return 0;
      });
  });

  const categories = computed(() => {
    return [...new Set(allBooks.value.map(book => book.category))];
  });

  function setSearchQuery(query: string) {
    searchQuery.value = query;
  }

  function setCategory(category: string) {
    selectedCategory.value = category;
  }

  function setSortBy(sort: string) {
    sortBy.value = sort;
  }

  return {
    allBooks,
    filteredBooks,
    categories,
    searchQuery,
    selectedCategory,
    sortBy,
    setSearchQuery,
    setCategory,
    setSortBy
  };
});