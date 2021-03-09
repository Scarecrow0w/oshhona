<template>
    <div id="cart" class="right-0 flex flex-col bg-white rounded-lg shadow-xl hover:shadow-2xl lg:fixed ">
        <div class="flex flex-col h-full">
            <h3 class="mt-5 text-2xl font-medium text-center">Мой заказ</h3>
            <div class="flex h-full p-2 overflow-y-auto border border-red-500">
                <div class="flex flex-col w-full overflow-y-auto border border-green-500">
                    <div class="flex w-full mb-5 border border-indigo-300">
                        <span class="flex flex-wrap pr-2 border border-black">Название товара</span>
                        <span class="flex ml-auto text-gray-400 border">1</span>
                        <span class="flex ml-4 border border-yellow-600">100 рублей</span>
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