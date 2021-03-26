<template>
    <form action="" class="flex flex-col w-1/2 p-6 mt-20 ml-10 bg-white rounded-xl">
        <div class="group">      
            <input type="tel" inputmode="numeric" required class="w-full">
            <span class="highlight"></span>
            <span class="bar"></span>
            <label>Номер телефона</label>
        </div>      
        <div class="group">      
            <input type="text" required class="w-full">
            <span class="highlight"></span>
            <span class="bar"></span>
            <label>Адрес доставки</label>
        </div>
        <div class="group">      
            <input type="text" class="w-full">
            <span class="highlight"></span>
            <span class="bar"></span>
            <label>Подъезд</label>
        </div>
        <div class="group">      
            <input type="text" class="w-full">
            <span class="highlight"></span>
            <span class="bar"></span>
            <label>Домофон</label>
        </div>
        <div class="group">      
            <input type="text" class="w-full">
            <span class="highlight"></span>
            <span class="bar"></span>
            <label>Этаж</label>
        </div>
        <div class="group">      
            <input type="text" class="w-full">
            <span class="highlight"></span>
            <span class="bar"></span>
            <label>Квартира</label>
        </div>
        <div class="group">      
            <input type="textarea" class="w-full">
            <span class="highlight"></span>
            <span class="bar"></span>
            <label>Комментарий к заказу</label>
        </div>
        <button class="h-8 text-xl font-light text-white rounded-xl bg-oshb">Подтвердить</button>
    </form>
</template>

<style scoped>
    /* form starting stylings ------------------------------- */
    .group { 
        position: relative; 
        margin-bottom: 45px; 
    }

    input {
        font-size: 18px;
        padding: 10px 10px 10px 5px;
        display: block;
        /* border: none; */
        border-bottom: 1px solid #757575;
    }

    input:focus { 
        outline: none; 
    }

    /* LABEL ======================================= */
    label {
        color: #999; 
        font-size: 18px;
        font-weight: normal;
        position: absolute;
        pointer-events: none;
        left: 5px;
        top: 10px;
        transition: 0.2s ease all; 
        -moz-transition: 0.2s ease all; 
        -webkit-transition: 0.2s ease all;
    }

    /* active state */
    input:focus ~ label {
        top: -20px;
        font-size: 14px;
        color: #00a15e;
    }

    /* BOTTOM BARS ================================= */
    .bar { 
        position: relative; 
        display: block; 
    }
    .bar:before, .bar:after {
        content: '';
        height: 2px; 
        width: 0;
        position: absolute;
        background: #00a15e; 
        transition: 0.2s ease all; 
        -moz-transition: 0.2s ease all; 
        -webkit-transition: 0.2s ease all;
    }

    .bar:before {
        left: 50%;
    }

    .bar:after {
        right: 50%; 
    }

    /* active state */
    input:focus ~ .bar:before, input:focus ~ .bar:after {
        width: 50%;
    }

    /* HIGHLIGHTER ================================== */
    .highlight {
        position: absolute;
        height: 60%; 
        top: 25%; 
        left: 0;
        pointer-events: none;
        opacity: 0.5;
    }

    /* active state */
    input:focus ~ .highlight {
        -webkit-animation: inputHighlighter 0.3s ease;
        -moz-animation: inputHighlighter 0.3s ease;
        animation: inputHighlighter 0.3s ease;
    }

    /* ANIMATIONS ================ */
        @-webkit-keyframes inputHighlighter {
            from { background: #00a15e; }
            to 	{ width:0; background: transparent; }
        }
        @-moz-keyframes inputHighlighter {
            from { background: #00a15e; }
            to 	{ width:0; background: transparent; }
        }
        @keyframes inputHighlighter {
            from { background: #00a15e; }
            to 	{ width:0; background: transparent; }
        }
</style>