<script setup lang="ts">
import type { Book } from '../types/book';
import { computed } from 'vue';

const props = defineProps<{
  book: Book;
}>();

const stars = computed(() => {
  return Array.from({ length: 5 }, (_, i) => i < Math.round(props.book.rating));
});
</script>

<template>
  <div class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
    <img :src="book.thumbnail" :alt="book.title" class="w-full h-48 object-cover">
    <div class="p-4">
      <h3 class="text-lg font-semibold mb-2">{{ book.title }}</h3>
      <p class="text-sm text-gray-600 mb-2">{{ book.author }}</p>
      <div class="flex items-center mb-2">
        <span v-for="(star, index) in stars" :key="index" class="text-yellow-400">
          ★
        </span>
        <span v-for="(star, index) in 5 - stars.length" :key="index + stars.length" class="text-gray-300">
          ★
        </span>
      </div>
      <p class="text-sm text-gray-500">{{ book.category }} · {{ book.publicationYear }}</p>
      <router-link :to="{ name: 'book-detail', params: { id: book.id }}" 
                  class="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
        View Details
      </router-link>
    </div>
  </div>
</template>