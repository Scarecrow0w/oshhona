<template>
    <div 
    v-for="(category, index) in menu" 
    :key="index"
    class="flex flex-col border lg:w-7/12 2xl:w-2/3 courses-container px-7">
        <h1 class="mt-6 text-5xl font-medium text-center">{{ menuTitle }}</h1>
        <div class="flex flex-col flex-wrap items-center justify-between w-full mt-16 2xl:flex-row cards-container">
            <div
            v-for="(dish, idx) in category" :key="idx"
            class="flex m-1 bg-white shadow-lg hover:shadow-2xl rounded-xl card lg:mb-16">
                    <div class="card-img">
                        <transition name="flip" mode="out-in">
                            <img
                            v-if="!dish.isActive"
                            :src="dish.imgPath" 
                            alt="Товар" class="rounded-l-xl">
                            
                            <div
                            v-else 
                            class="flex-col h-full p-2 bg-white border-r border-oshb options rounded-l-xl">
                                <div class="flex">
                                    <i 
                                    @click="dish.isActive = !dish.isActive"
                                    title="Скрыть меню опции" 
                                    class="text-red-300 cursor-pointer hover:text-red-600 fas fa-times"></i>
                                    <h5 class="mx-auto text-xl font-medium text-gray-500">Добавить:</h5>
                                </div>
                                <div class="flex flex-col h-40 mt-4 overflow-y-auto">
                                    <div 
                                    v-for="option in dish.options"
                                    :key="option.title"
                                    class="flex items-center w-full p-1 text-sm">
                                        <span class="flex flex-1">{{ option.title }}</span>
                                        <div 
                                        :class="option.count > 0 ? 'text-black' : 'text-gray-300'"
                                        class="flex items-center justify-end w-12 ml-auto font-medium">
                                            <span v-show="(option.count > 0)">+</span> 
                                            <span v-if="option.count > 0">{{ option.value }}</span>
                                            <span v-else>{{ option.price }}</span>
                                            <i class="ml-1 text-xs fas fa-ruble-sign"></i> 
                                        </div>
                                        <div class="flex items-baseline justify-between ml-3">
                                            <i 
                                            @click="option.count > 0 ? option.count-- : ''; option.count >= 0 ? option.value = option.price * option.count : ''"
                                            class="text-xs text-red-600 cursor-pointer decrease fas fa-minus"></i>   
                                            <span class="mx-2 active">{{ option.count }}</span>
                                            <i
                                            @click="option.count++; option.value = option.price * option.count"
                                            class="text-xs text-green-600 cursor-pointer increase fas fa-plus"></i>
                                        </div>                                
                                    </div>
                                </div>
                                <div class="flex items-baseline justify-between p-1 mt-auto border-t border-dashed">
                                    <span>Количество порций:</span>
                                    <div class="flex items-baseline">
                                        <i 
                                        @click="servingsNumber > 1 ? servingsNumber-- : ''"
                                        class="text-xs text-red-600 cursor-pointer decrease fas fa-minus"></i>   
                                        <span class="mx-2 active">{{ servingsNumber }}</span>
                                        <i
                                        @click="servingsNumber++"
                                        class="text-xs text-green-600 cursor-pointer increase fas fa-plus"></i>
                                    </div>
                                </div>                               
                            </div>
                        </transition>     
                    </div>
                <div class="flex flex-col flex-1 h-full p-1 pl-4">
                    <h2 class="text-4xl">{{ dish.title }}</h2>
                    <span class="h-24 overflow-y-auto text-gray-400 text-md mt-7">{{ dish.description }}</span>
                    <span class="mt-1 mb-auto text-gray-400 text-md">{{ dish.weight }}</span>
                    <div class="flex items-center h-8">
                        <div class="flex items-baseline lg:w-1/2">
                            <span class="text-xl font-medium">{{ dish.price }}</span>                             
                            <i class="ml-1 text-sm fas fa-ruble-sign"></i>
                        </div> 
                        <div class="flex items-center justify-end lg:w-1/2">
                            <transition name="fade" mode="out-in">
                                <i
                                v-if="!dish.isActive && dish.options.length > 0" 
                                @click="dish.isActive = !dish.isActive"
                                class="text-3xl rounded-full cursor-pointer text-oshb hover:text-oshd fas fa-plus-circle"></i>
                                <button
                                v-else
                                @click="createPosition(dish)" 
                                class="w-24 h-8 font-medium text-center text-white border rounded-xl bg-oshb">Добавить</button>
                            </transition>
                        </div>    
                    </div>
                </div> 
            </div>    
        </div>
    </div>
</template>

<script>
import menulist from '/src/menu'
import order from '/src/order'

export default {
    name: 'Dishes',

    props: {     
    },

    data() {
        return {
            menu: menulist,
            order: order,
            servingsNumber: 1,
            position: {
                title: [],
                options: [],
                value: [],
            }
        }
    },

    methods: {
        createPosition(item) {},

        addToCart() {}
    },

    mounted() {
        
    },
}


</script>

<script setup>
import { defineProps, reactive } from 'vue'

defineProps({
  menuTitle: String,
})

</script>

<style scoped>
    .fade-enter-active,
    .fade-leave-active {
        transition: opacity 0.25s ease;
    }
    .fade-enter-from,
    .fade-leave-to {
        opacity: 0;
    }

    .flip-enter-active {
        transition: all 0.2s cubic-bezier(0.55, 0.085, 0.68, 0.53); 
        transform-origin: 50% 50%;
    }

    .flip-leave-active {
        transform-origin: 50% 50%;
        transition: all 0.25s cubic-bezier(0.25, 0.46, 0.45, 0.94); 
    }

    .flip-enter-from,
    .flip-leave-to {
        transform-origin: 50% 50%;
        transform: scaleY(0) translateZ(0);
        opacity: 0;
    }
</style>