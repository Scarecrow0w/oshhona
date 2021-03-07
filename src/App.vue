<template>
  <header id="top" class="flex flex-col">
    <Navbar />
  </header>
  <main class="flex flex-col"> 
    <Categories />
    <FirstCourses menuTitle='Первые блюда' />
    <SecondCourses menuTitle='Вторые блюда' />
    <Bbq menuTitle='Мангал' />
    <Salads menuTitle='Салаты' />
    <Drinks menuTitle='Напитки' />
    <Cart />
  </main>  
</template>

<script setup>
import Navbar from './components/Navbar.vue'
import Categories from './components/Categories.vue'
import FirstCourses from './components/FirstCourses.vue'
import SecondCourses from './components/SecondCourses.vue'
import Bbq from './components/Bbq.vue'
import Salads from './components/Salads.vue'
import Drinks from './components/Drinks.vue'
import Cart from './components/Cart.vue'


// This starter template is using Vue 3 experimental <script setup> SFCs
// Check out https://github.com/vuejs/rfcs/blob/script-setup-2/active-rfcs/0000-script-setup.md
</script>

