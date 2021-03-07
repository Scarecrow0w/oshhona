<template>
    <div class="flex flex-col border border-black lg:w-7/12 2xl:w-2/3 courses-container px-7">
        <h1 class="mt-6 text-5xl font-semibold text-center">{{ menuTitle }}</h1>
        <div class="flex flex-wrap justify-center w-full mt-16 2xl:justify-between cards-container">
            <div
            v-for="dish in menu.salads"
            :key="dish.title"
            class="flex bg-white shadow-lg hover:shadow-2xl rounded-xl card lg:mb-16">
                <div class="card-img">
                    <img :src="dish.imgPath" alt="Товар" class="rounded-xl">
                </div>
                <div class="flex flex-col h-full pl-4 w-60">
                    <h2 class="text-4xl font-semibold">{{ dish.title }}</h2>
                    <span class="text-gray-400 text-md mt-7">{{ dish.description }}</span>
                    <span class="mt-6 mb-auto text-gray-400 text-md">{{ dish.weight }}</span>
                    <div class="flex items-baseline mb-2">
                        <div class="flex items-baseline lg:w-1/2">
                            <span class="text-xl font-semibold">{{ dish.price }}</span>                             
                            <i class="ml-1 text-sm fas fa-ruble-sign"></i>
                        </div> 
                        <div class="flex items-baseline justify-end lg:w-1/2">
                            <i 
                            @click="options"
                            class="text-3xl rounded-full cursor-pointer text-oshb hover:text-oshd fas fa-plus-circle"></i>
                        </div>    
                    </div>
                </div> 
            </div>    
        </div>
    </div>
</template>

<script>
import menulist from '/src/menu'

export default {
    data() {
        return {
            menu: menulist
        }
    }
}


</script>

<script setup>
import { defineProps, reactive } from 'vue'

defineProps({
  menuTitle: String,
})

</script>