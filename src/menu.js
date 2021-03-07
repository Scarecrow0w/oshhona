const mainmenu = {

   firstCourses: [
      {
         isActive: false, 
         title: 'Шурпа',
         weight: '300 г',
         description: 'Баранина, картофель, морковь, лук, соль, специи',
         price: 220,
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
         isActive: false, 
         title: 'Лагман',
         weight: '300 г',
         description: 'Говядина, лапша из муки высшего сорта, стручковая фасоль, тёртая морковь, масло растительное, лук, томат, сельдерей, зелень, соль, специи',
         price: 220,
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
         isActive: false, 
         title: 'Мастава',
         weight: '300 г',
         description: 'Говядина, рис, тёртая морковь, стручковая фасоль, лук, томат, сельдерей, зелень, масло растительное, соль, специи',
         price: 220,
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
         isActive: false, 
         title: 'Джавари',
         weight: '300 г',
         description: 'Говядина, бобовые разного вида, лук, морковь, пекинская капуста, растительное масло, зелень, соль, специи',
         price: 220,
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

   secondCourses: [
      {
         isActive: false, 
         title: 'Плов',
         weight: '350 г',
         description: 'Говядина, рис, морковь, лук, масло растительное, масло загири, чеснок, приправы',
         price: 220,
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
         isActive: false, 
         title: 'Казан-кабоб',
         weight: '250 г',
         description: 'Говядина, картофель, лук, масло растительное, приправы',
         price: 310,
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
         isActive: false, 
         title: 'Мясная сковородка',
         weight: '200 г',
         description: 'Говядина, лук, масло растительное, душистый перец, приправы',
         price: 220,
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
         isActive: false, 
         title: 'Манты',
         weight: '250 г',
         description: '5 штук (можно добавить в опциях), говядина, тесто, лук, масло растительное',
         price: 220,
         imgPath: './src/assets/img/menu/manti.jpg',
         options: [
            {
               title: 'Добавить манты',
               price: 44,
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
         isActive: false, 
         title: 'Самса',
         weight: '250 г',
         description: 'С картофелем и говядиной / с говядиной / с тыквой',
         price: 80,
         imgPath: './src/assets/img/menu/samsa.jpg',
         options: [
            {
               title: 'С картофелем и говядиной',
               price: 100,
               count: 0,
               value: 0,
            },
            {
               title: 'С говядиной',
               price: 100,
               count: 0,
               value: 0,
            },
            {
               title: 'С тыквой',
               price: 80,
               count: 0,
               value: 0,
            }
         ]
      }
   ],

   bbq: [
      {
         isActive: false, 
         title: 'Люля-кебаб',
         weight: '120 г',
         description: 'Говядина, лук, хлеб, говяжий жир, специи',
         price: 120,
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
         isActive: false, 
         title: 'Шашлык из говядины',
         weight: '120 г',
         description: 'Кусочки говядина, специи',
         price: 145,
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
         isActive: false, 
         title: 'Шашлык из баранины',
         weight: '120 г',
         description: 'Кусочки баранины, специи',
         price: 145,
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
         isActive: false, 
         title: 'Овощи на мангале',
         description: 'Описание блюда',
         price: 100,
         imgPath: './src/assets/img/icons/serving-dish.png',
      }
   ],

   salads: [
      {
         isActive: false, 
         title: 'Овощная нарезка',
         weight: '200 г',
         description: 'Огурцы, помидоры, лук, болгарский перец, лимон',
         price: 140,
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
         isActive: false, 
         title: 'Шакароб',
         weight: '100 г',
         description: 'Помидоры с луком',
         price: 90,
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
         isActive: false, 
         title: 'Салат зелёный',
         weight: '200 г',
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
         isActive: false, 
         title: 'Соленья ассорти',
         weight: '200 г',
         description: 'Огурцы соленые, помидоры соленые, квашеная капуста, соленый стручковый перец',
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
      }
   ],

   drinks: [
      {
      isActive: false, 
         title: 'Кофе',
         weight: '300 мл',
         description: 'Черный кофе. Можно добавить сливки',
         price: 50,
         imgPath: './src/assets/img/icons/serving-dish.png',
      },
      {
         isActive: false, 
         title: 'Чай',
         weight: '300 мл',
         description: 'Чёрный / зелёный',
         price: 30,
         imgPath: './src/assets/img/icons/serving-dish.png',
      },
      {
         isActive: false, 
         title: 'BonAqua',
         weight: '500 мл',
         description: 'Негазированная вода',
         price: 50,
         imgPath: './src/assets/img/icons/serving-dish.png',
      },
      {
         isActive: false, 
         title: 'Лимонад',
         weight: '500 мл',
         description: 'Лимонад в ассортименте',
         price: 50,
         imgPath: './src/assets/img/icons/serving-dish.png',
      },
      {
         isActive: false, 
         title: 'Компот',
         weight: '200 / 1000 мл',
         description: 'Компот из сухофруктов',
         price: 20,
         imgPath: './src/assets/img/icons/serving-dish.png',
      },
      {
         isActive: false, 
         title: 'Dausuz',
         weight: '500 мл',
         description: 'Вода',
         price: 50,
         imgPath: './src/assets/img/icons/serving-dish.png',
      },
      {
         isActive: false, 
         title: 'Домашний кефир',
         weight: '200 мл',
         description: 'Описание блюда',
         price: 20,
         imgPath: './src/assets/img/icons/serving-dish.png',
      }
   ]
}

export default mainmenu

        