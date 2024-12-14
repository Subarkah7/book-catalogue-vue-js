<script setup lang="ts">
import { useBookStore } from '../stores/bookStore';
import { computed } from 'vue';

const props = defineProps<{
  id: string;
}>();

const bookStore = useBookStore();
const book = computed(() => {
  return bookStore.allBooks.find(b => b.id === parseInt(props.id));
});
</script>

<template>
  <div v-if="book" class="container mx-auto p-4">
    <div class="bg-white rounded-lg shadow-lg overflow-hidden">
      <div class="md:flex">
        <div class="md:flex-shrink-0">
          <img :src="book.thumbnail" :alt="book.title" class="h-48 w-full object-cover md:w-48">
        </div>
        <div class="p-8">
          <div class="text-sm font-semibold text-blue-600">{{ book.category }}</div>
          <h1 class="mt-2 text-2xl font-bold text-gray-900">{{ book.title }}</h1>
          <p class="mt-2 text-gray-600">By {{ book.author }}</p>
          <p class="mt-4 text-gray-500">{{ book.description }}</p>
          
          <div class="mt-4 flex items-center">
            <span class="text-yellow-400 text-xl">
              {{ "★".repeat(Math.round(book.rating)) }}
            </span>
            <span class="text-gray-300 text-xl">
              {{ "★".repeat(5 - Math.round(book.rating)) }}
            </span>
            <span class="ml-2 text-gray-600">{{ book.rating }} / 5</span>
          </div>
          
          <div class="mt-6">
            <p class="text-gray-600">Publication Year: {{ book.publicationYear }}</p>
            <a
              :href="book.downloadUrl"
              class="mt-4 inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
              target="_blank"
            >
              Download Book
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div v-else class="text-center mt-8">
    <p class="text-xl text-gray-600">Book not found</p>
  </div>
</template>