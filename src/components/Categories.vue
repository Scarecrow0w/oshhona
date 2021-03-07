<template>
    <div class="flex flex-col justify-between h-72 lg:fixed lg:top-1/3 lg:left-1 categories lg:h-96">
            <div
            v-for="category in categories"
            :key="category.name"
            :id="category.name"
            :class="{'active-category': activeCategory === category.name}"
            @mouseover="activeCategory = category.name"
            @mouseleave="activeCategory = ''"  
            :title="category.title"     
            class="flex border rounded-full shadow-md cursor-pointer border-oshb lg:shadow w-11 h-11 lg:px-2 lg:w-52 group lg:rounded-2xl category lg:h-14">
                <div class="flex items-center justify-center w-full lg:w-1/4">
                    <div class="flex items-center justify-center w-full h-full text-4xl bg-transparent rounded-full lg:w-10 lg:h-10 lg:bg-white">
                        <img class="iconimg" :src="category.iconPath" alt="icon">
                    </div>
                </div>
                <div class="items-center hidden w-3/4 lg:flex">                    
                    <span class="ml-2 font-semibold group-hover:text-white">{{ category.title }}</span>
                </div>
            </div>
        </div>
</template>



<script>
export default {
    name: 'CategoriesList',

    props: {
        activeCategory: String,
        
    },

    data() {
        return {
            categories: [
                {
                    name: 'firstCourses',
                    title: 'Первые блюда',
                    iconClass: 'icofont-soup-bowl',
                    iconPath: './src/assets/img/icons/soup.png'
                },
                {
                    name: 'secondCourses',
                    title: 'Вторые блюда',
                    iconClass: 'icofont-spoon-and-fork',
                    iconPath: './src/assets/img/icons/cutlery.png'
                },
                {
                    name: 'bbq',
                    title: 'Мангал',
                    iconClass: 'icofont-bbq',
                    iconPath: './src/assets/img/icons/barbecue.png'
                },
                {
                    name: 'salads',
                    title: 'Салаты',
                    iconClass: 'icofont-tomato',
                    iconPath: './src/assets/img/icons/salad.png'
                },
                {
                    name: 'drinks',
                    title: 'Напитки',
                    iconClass: 'icofont-cola',
                    iconPath: './src/assets/img/icons/tea.png'
                },
            ],
      }
    },

    methods: {
        
    },
}    
</script>
