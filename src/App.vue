<template>
  <header id="top" class="flex flex-col">
    <Navbar />
  </header>
  <main class="flex flex-col"> 
    <Categories />
    <Dishes />
    <Cart />
  </main>  
</template>

<script setup>
import Navbar from './components/Navbar.vue'
import Categories from './components/Categories.vue'
import Dishes from './components/Dishes.vue'
import Cart from './components/Cart.vue'


// This starter template is using Vue 3 experimental <script setup> SFCs
// Check out https://github.com/vuejs/rfcs/blob/script-setup-2/active-rfcs/0000-script-setup.md
</script>

