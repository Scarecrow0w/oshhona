<template>
    <div id="cart" class="right-0 flex flex-col bg-white rounded-lg shadow-xl hover:shadow-2xl lg:fixed ">
        <div class="flex flex-col h-full">
            <h3 class="mt-5 text-2xl text-center">Мой заказ</h3>
            <div class="flex h-full p-2 mt-2 overflow-y-auto">
                <div class="flex flex-col w-full overflow-y-auto">
                    <div class="flex w-full px-1 mb-5">
                        <div class="flex flex-col">
                            <span class="flex flex-wrap pr-2">Название товара</span>
                            <span class="flex flex-wrap pr-2 text-gray-400">Опции</span>
                        </div>
                        <span class="flex ml-auto text-gray-400 ">1</span>
                        <span class="flex ml-4">100 рублей</span>
                    </div>
                </div>
                <!-- <span class="m-auto font-medium text-center text-gray-400">Выберите блюда <br> и добавьте их к заказу</span> -->
            </div>
            <div class="flex items-center justify-between px-2 mt-auto border-t-2 h-14">
                <span class="text-xl">Сумма</span>
                <span class="text-2xl ">{{ orderPrice }} <i class="text-sm fas fa-ruble-sign"></i></span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Корзина',

    props: {},

    data() {
        return {
            orderPrice: 0,
        }
    },

    methods: {}



}
</script>