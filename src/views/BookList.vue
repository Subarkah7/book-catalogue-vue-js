<script setup lang="ts">
import { useBookStore } from '../stores/bookStore';
import BookCard from '../components/BookCard.vue';

const bookStore = useBookStore();
</script>

<template>
  <div class="container mx-auto">
    <div class="mb-8">
      <h1 class="text-3xl font-bold mb-6">Book Catalog</h1>
      
      <div class="flex flex-col md:flex-row gap-4 mb-6">
        <input
          v-model="bookStore.searchQuery"
          type="text"
          placeholder="Search books..."
          class="p-2 border rounded flex-grow"
          @input="bookStore.setSearchQuery($event.target.value)"
        >
        
        <select
          v-model="bookStore.selectedCategory"
          class="p-2 border rounded"
          @change="bookStore.setCategory($event.target.value)"
        >
          <option value="">All Categories</option>
          <option v-for="category in bookStore.categories" :key="category" :value="category">
            {{ category }}
          </option>
        </select>
        
        <select
          v-model="bookStore.sortBy"
          class="p-2 border rounded"
          @change="bookStore.setSortBy($event.target.value)"
        >
          <option value="title">Sort by Title</option>
          <option value="year">Sort by Year</option>
          <option value="rating">Sort by Rating</option>
        </select>
      </div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      <BookCard
        v-for="book in bookStore.filteredBooks"
        :key="book.id"
        :book="book"
      />
    </div>
  </div>
</template>