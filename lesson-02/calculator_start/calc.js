"use strict";

const courses = [
    {
        code: "HTML",
        title: "Курс по вёрстке сайтов и веб-разработке",
        prices: {
            maximum: 36900,
            medium: 19900,
            minimum: 16900
        }
    },

    {
        code: "JS",
        title: "Курс по JavaScript",
        prices: {
            maximum: 36900,
            medium: 19900,
            minimum: 16900
        }
    },

    {
        code: "PHP",
        title: "Курс по PHP (уровень 1)",
        prices: {
            maximum: 18900,
            medium: 12900,
            minimum: 9900
        }
    },

    {
        code: "PHP2",
        title: "Курс по PHP (уровень 2)",
        prices: {
            maximum: 36900,
            medium: 24900,
            minimum: 19900
        }
    },

    {
        code: "PS",
        title: "Курс по Adobe Photoshop",
        prices: {
            maximum: 12900,
            medium: 7900,
            minimum: 5900
        }
    },
];

const coupons = {
    "LETO": 0.8,
    "STUDENT": 0.95
};


window.addEventListener('load', ()=>{
   new Vue({
       el: "#discounts",
       data:{
           // courses: courses,
           courses,
           selectedCurses: [],
       },
       methods: {
           selectCurse(course, tax){
               this.selectedCurses.push({
                   course, tax,
               })
           },
           getTaxClassObject(course, price){
               return {
                   "bg-success text-white": this.selectedCurses
                       .some((item) => item.course === course && item.tax === price)
               }
           }
       }
   })
});