const mainmenu = {

   0: [
      {          
         title: 'Шурпа',
         weight: '300 г',
         description: 'Баранина, картофель, морковь, лук, соль, специи',
         price: 180,
         imgPath: './src/assets/img/menu/shurpa.jpg',
         options: [
            {
               title: 'Лепёшка',
               price: 40,
               count: 0,
               value: 0,
            },
            {
               title: 'Лепёшка (половина)',
               price: 20,
               count: 0,
               value: 0,
            },
         ]
      },
      {          
         title: 'Лагман',
         weight: '300 г',
         description: 'Говядина, лапша из муки высшего сорта, стручковая фасоль, тёртая морковь, масло растительное, лук, томат, сельдерей, зелень, соль, специи',
         price: 180,
         imgPath: './src/assets/img/menu/lagman.jpg',
         options: [
            {
               title: 'Лепёшка',
               price: 40,
               count: 0,
               value: 0,
            },
            {
               title: 'Лепёшка (половина)',
               price: 20,
               count: 0,
               value: 0,
            },
         ]   
      },
      {          
         title: 'Мастава',
         weight: '300 г',
         description: 'Говядина, рис, тёртая морковь, стручковая фасоль, лук, томат, сельдерей, зелень, масло растительное, соль, специи',
         price: 180,
         imgPath: './src/assets/img/menu/mastava.jpg',
         options: [
            {
               title: 'Лепёшка',
               price: 40,
               count: 0,
               value: 0,
            },
            {
               title: 'Лепёшка (половина)',
               price: 20,
               count: 0,
               value: 0,
            },
         ]
      },
      {          
         title: 'Джавари',
         weight: '300 г',
         description: 'Говядина, бобовые разного вида, лук, морковь, пекинская капуста, растительное масло, зелень, соль, специи',
         price: 180,
         imgPath: './src/assets/img/icons/serving-dish.png',
         options: [
            {
               title: 'Лепёшка',
               price: 40,
               count: 0,
               value: 0,
            },
            {
               title: 'Лепёшка (половина)',
               price: 20,
               count: 0,
               value: 0,
            },
         ]
      },
      {          
         title: 'Суп с пельменями',
         weight: '300 г',
         description: 'Суп с пельменями (8 шт) собственного производства (говядина)',
         price: 180,
         imgPath: './src/assets/img/icons/serving-dish.png',
         options: [
            {
               title: 'Лепёшка',
               price: 40,
               count: 0,
               value: 0,
            },
            {
               title: 'Лепёшка (половина)',
               price: 20,
               count: 0,
               value: 0,
            },
         ]
      }
   ],

   1: [
      {          
         title: 'Плов',
         weight: '400 г',
         description: 'Говядина, рис, морковь, лук, масло растительное, масло загири, чеснок, приправы',
         price: 180,
         imgPath: './src/assets/img/icons/serving-dish.png',
         options: [
            {
               title: 'Лепёшка',
               price: 40,
               count: 0,
               value: 0,
            },
            {
               title: 'Лепёшка (половина)',
               price: 20,
               count: 0,
               value: 0,
            },
         ]
      },
      {          
         title: 'Казан-кабоб',
         weight: '200 г',
         description: 'Говядина, картофель, лук, масло растительное, приправы',
         price: 250,
         imgPath: './src/assets/img/menu/kazankabob.jpg',
         options: [
            {
               title: 'Лепёшка',
               price: 40,
               count: 0,
               value: 0,
            },
            {
               title: 'Лепёшка (половина)',
               price: 20,
               count: 0,
               value: 0,
            },
         ]
      },
      {          
         title: 'Мясная сковородка',
         weight: '200 г',
         description: 'Говядина, лук, масло растительное, душистый перец, приправы',
         price: 200,
         imgPath: './src/assets/img/menu/skovorodka.jpg',
         options: [
            {
               title: 'Картофель запечённый (5 шт.)',
               price: 30,
               count: 0,
               value: 0,
            },
            {
               title: 'Лепёшка',
               price: 40,
               count: 0,
               value: 0,
            },
            {
               title: 'Лепёшка (половина)',
               price: 20,
               count: 0,
               value: 0,
            },    
         ]        
      },
      {          
         title: 'Манты',
         weight: '200 г',
         description: '5 штук (можно добавить в опциях), говядина, тесто, лук, масло растительное',
         price: 180,
         imgPath: './src/assets/img/menu/manti.jpg',
         options: [
            {
               title: 'Добавить манты',
               price: 36,
               count: 0,
               value: 0,
            },
            {
               title: 'Лепёшка',
               price: 40,
               count: 0,
               value: 0,
            },
            {
               title: 'Лепёшка (половина)',
               price: 20,
               count: 0,
               value: 0,
            },
         ]
      },
      {          
         title: 'Пельмени',
         weight: '200 г',
         description: '15 штук (можно добавить в опциях), говядина, тесто, лук, масло растительное',
         price: 200,
         imgPath: './src/assets/img/icons/serving-dish.png',
         options: [
            {
               title: 'Добавить пельмени',
               price: 15,
               count: 0,
               value: 0,
            },
            {
               title: 'Лепёшка',
               price: 40,
               count: 0,
               value: 0,
            },
            {
               title: 'Лепёшка (половина)',
               price: 20,
               count: 0,
               value: 0,
            },
         ]
      },
      {          
         title: 'Самса',
         weight: '200 г',
         description: 'С картофелем и говядиной / с говядиной / с тыквой',
         price: 70,
         imgPath: './src/assets/img/menu/samsa.jpg',
         options: [
            {
               title: 'С картофелем и говядиной',
               price: 70,
               count: 0,
               value: 0,
            },
            {
               title: 'С говядиной',
               price: 70,
               count: 0,
               value: 0,
            },
            {
               title: 'С тыквой',
               price: 70,
               count: 0,
               value: 0,
            }
         ]
      }
   ],

   2: [
      {          
         title: 'Люля-кебаб',
         weight: '120 г',
         description: 'Говядина, лук, хлеб, говяжий жир, специи',
         price: 100,
         imgPath: './src/assets/img/menu/lulya.jpg',
         options: [
            {
               title: 'Лепёшка',
               price: 40,
               count: 0,
               value: 0,
            },
            {
               title: 'Лепёшка (половина)',
               price: 20,
               count: 0,
               value: 0,
            },
         ]
      },{          
         title: 'Люля-кебаб куриный',
         weight: '120 г',
         description: 'Курица, лук, хлеб, специи',
         price: 100,
         imgPath: './src/assets/img/menu/lulya.jpg',
         options: [
            {
               title: 'Лепёшка',
               price: 40,
               count: 0,
               value: 0,
            },
            {
               title: 'Лепёшка (половина)',
               price: 20,
               count: 0,
               value: 0,
            },
         ]
      },
      {          
         title: 'Шашлык из говядины',
         weight: '120 г',
         description: 'Кусочки говядины, специи',
         price: 120,
         imgPath: './src/assets/img/menu/bbqgovyadina.jpg',
         options: [
            {
               title: 'Лепёшка',
               price: 40,
               count: 0,
               value: 0,
            },
            {
               title: 'Лепёшка (половина)',
               price: 20,
               count: 0,
               value: 0,
            },
         ]
      },
      {          
         title: 'Шашлык из баранины',
         weight: '120 г',
         description: 'Кусочки баранины, специи',
         price: 120,
         imgPath: './src/assets/img/menu/bbqbaranina.jpg',
         options: [
            {
               title: 'Лепёшка',
               price: 40,
               count: 0,
               value: 0,
            },
            {
               title: 'Лепёшка (половина)',
               price: 20,
               count: 0,
               value: 0,
            },
         ]
      },
      {          
         title: 'Шампиньоны на мангале',
         weight: '150 г',
         description: 'Шампиньоны, маринад',
         price: 100,
         imgPath: './src/assets/img/icons/serving-dish.png',
      }
   ],

   3: [
      {          
         title: 'Овощная нарезка',
         weight: '300 г',
         description: 'Огурцы, помидоры, лук, болгарский перец, лимон',
         price: 150,
         imgPath: './src/assets/img/icons/serving-dish.png',
         options: [
            {
               title: 'Лепёшка',
               price: 40,
               count: 0,
               value: 0,
            },
            {
               title: 'Лепёшка (половина)',
               price: 20,
               count: 0,
               value: 0,
            },
         ]
      },
      {          
         title: 'Шакароб',
         weight: '100 г',
         description: 'Помидоры с луком',
         price: 50,
         imgPath: './src/assets/img/menu/shakarob.jpg',
         options: [
            {
               title: 'Лепёшка',
               price: 40,
               count: 0,
               value: 0,
            },
            {
               title: 'Лепёшка (половина)',
               price: 20,
               count: 0,
               value: 0,
            },
         ]
      },
      {          
         title: 'Салат зелёный',
         weight: '300 г',
         description: 'Помидоры, огурцы, перец болгарский, зелень',
         price: 150,
         imgPath: './src/assets/img/menu/salatzeleniy.jpg',
         options: [
            {
               title: 'Лепёшка',
               price: 40,
               count: 0,
               value: 0,
            },
            {
               title: 'Лепёшка (половина)',
               price: 20,
               count: 0,
               value: 0,
            },
         ]
      },
      {          
         title: 'Соленья ассорти',
         weight: '200 г',
         description: 'Огурцы соленые, помидоры соленые, квашеная капуста, соленый стручковый перец',
         price: 100,
         imgPath: './src/assets/img/icons/serving-dish.png',
         options: [
            {
               title: 'Лепёшка',
               price: 40,
               count: 0,
               value: 0,
            },
            {
               title: 'Лепёшка (половина)',
               price: 20,
               count: 0,
               value: 0,
            },
         ]
      }
   ],

   4: [
      {       
         title: 'Кофе',
         weight: '300 мл',
         description: 'Черный кофе. Можно добавить сливки',
         price: 50,
         imgPath: './src/assets/img/icons/serving-dish.png',
      },
      {          
         title: 'Чай',
         weight: '300 мл',
         description: 'Чёрный / зелёный',
         price: 30,
         imgPath: './src/assets/img/icons/serving-dish.png',
      },
      {          
         title: 'BonAqua',
         weight: '500 мл',
         description: 'Негазированная вода',
         price: 50,
         imgPath: './src/assets/img/icons/serving-dish.png',
      },
      {          
         title: 'Лимонад',
         weight: '500 мл',
         description: 'Лимонад в ассортименте',
         price: 50,
         imgPath: './src/assets/img/icons/serving-dish.png',
      },
      {          
         title: 'Компот',
         weight: '200 / 1000 мл',
         description: 'Компот из сухофруктов',
         price: 20,
         imgPath: './src/assets/img/icons/serving-dish.png',
      },
      {          
         title: 'Домашний кефир',
         weight: '200 мл',
         description: 'Описание блюда',
         price: 20,
         imgPath: './src/assets/img/icons/serving-dish.png',
      }
   ]
}

export default mainmenu

        