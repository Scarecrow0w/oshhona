<template>
    <nav id="site-menu" class="flex flex-col items-center w-full px-4 py-1 text-white shadow-md lg:fixed bgosh lg:flex-row lg:px-6">
      <div class="flex flex-row flex-no-wrap items-center self-start justify-between w-full lg:w-auto lg:self-center lg:flex-none">
        <a href="/" class="py-1 no-underline">
          <img width="65" src="src/assets/img/logo2.png" alt="logo">
        </a>
        <button id="menuBtn" class="block hamburger lg:hidden focus:outline-none" type="button" @click="navToggle">
          <span class="hamburger__top-bun"></span><span class="hamburger__bottom-bun"></span>
        </button>
      </div>
      <div id="menu" class="flex-col items-center self-end justify-center hidden w-full h-full py-1 pb-4 md:justify-start lg:ml-11 lg:self-center lg:flex lg:flex-row lg:py-0 lg:pb-0">
        <a title="Меню" class="py-2 text-lg font-medium no-underline hover:text-green-400 lg:w-auto lg:pr-4 lg:py-1 lg:pt-2" href="/">Меню</a>
        <a title="Бронь банкета" class="py-2 text-lg font-medium no-underline hover:text-green-400 lg:w-auto lg:px-4 lg:py-1 lg:pt-2" href="#P3L">Бронь банкета</a>
        <a title="Зона доставки" class="py-2 text-lg font-medium no-underline hover:text-green-400 lg:w-auto lg:px-4 lg:py-1 lg:pt-2" href="#P3L">Зона доставки</a>
        <a title="Контакты" class="py-2 text-lg font-medium no-underline hover:text-green-400 lg:w-auto lg:px-4 lg:py-1 lg:pt-2" href="/contacts.html">Контакты</a>  
        <a title="Номер телефона" class="py-2 font-medium no-underline lg:ml-auto text-md hover:text-green-400 lg:w-auto lg:px-4 lg:py-1 lg:pt-2" href="tel:+79289008706">+7 (928) 900-87-06</a>              
      </div>    
    </nav>
</template>

<script setup>
  function navToggle() {
      var btn = document.getElementById('menuBtn'),
      nav = document.getElementById('menu');

      btn.classList.toggle('open');
      nav.classList.toggle('flex');
      nav.classList.toggle('hidden');
    } 
</script>