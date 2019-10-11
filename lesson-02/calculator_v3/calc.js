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


window.addEventListener('load', () => {
    new Vue({
        el: "#discounts",
        data: {
            // courses: courses,
            courses,
            selectedCurses: [],
            sumCours: 0,
            CountSum: 0,
            mynotebook: false,
            myfriend: null,
            discount: null,
            discountStyle: null,
            changePrice: [],
            changePriceNew: null,
            promocod: false,
            promo: null,
            error: false,
            text:'Ваш промокод не валидный',
            arrTax:[],
            coupons : [
                {name: "LETO", tax: 0.8,},
                {name: "STUDENT", tax: 0.95}
            ]
        },
        methods: {
            /*selectCurse(course, price, tax) {
                if (this.selectedCurses.length < 5 && this.selectedCurses.every(item => item.course !== course)) {
                    console.log('Это метод selectCurse, добавили данные в массив');
                    console.log('this.selectedCurses', this.selectedCurses);
                    this.selectedCurses.push({
                        course, price, tax, discountPrice: price,
                        discount: 0
                    });
                }else{
                    console.log('Это метод selectCurse else, анализируем массив', this.selectedCurses);
                    // console.log('indexOf', this.selectedCurses.indexOf(this.selectedCurses.find(item => item.tax === tax)));
                    console.log('findIndex:', this.selectedCurses.findIndex(item => item.course.code === course.code));

                    // this.selectedCurses.splice(this.selectedCurses.indexOf(this.selectedCurses.find(item => item.tax === tax && item.course === course)),1);
                    this.selectedCurses.splice(this.selectedCurses.findIndex(item => item.course.code === course.code),1);
                    /!*console.log('findIndex arrTax:', this.arrTax.findIndex(item => item === tax));
                    this.arrTax.splice(this.arrTax.findIndex(item => item === tax),1);*!/
                }

                this.sumCurse();
            },*/
            selectCurse(course, price, tax) {
                if(this.selectedCurses.length < 5 && this.selectedCurses.every(item => item.course !== course)){
                    if(this.selectedCurses.length === 0){
                        console.log('Это первый if');
                        this.selectedCurses.push({
                            course, price, tax, discountPrice: price,
                            discount: 0
                        }); return;
                    }
                    if(this.selectedCurses.length === 1){
                        console.log('Это второй if');
                        this.selectedCurses.push({
                            course, price, tax, discountPrice: price,
                            discount: 0
                        });

                        this.selectedCurses.sort((a,b)=>a.price-b.price).slice(-1).map(item => {
                            item.discount = item.discount + 0.2;
                            item.discountPrice = item.price - (item.price * item.discount);
                            return item;
                        });

                        console.log("Отсортированный", this.selectedCurses);return;
                    }
                    if(this.selectedCurses.length === 2){
                        console.log('Это третий if');

                        this.selectedCurses.push({
                            course, price, tax, discountPrice: price,
                            discount: 0
                        });

                        this.selectedCurses.sort((a,b)=>a.price-b.price).slice(-2,-1).map(item => {
                            item.discount = item.discount + 0.15;
                            item.discountPrice = item.price - (item.price * item.discount);
                            return item;
                        });

                        console.log("Отсортированный", this.selectedCurses);return;

                        // console.log("Отсортированный", this.selectedCurses.sort((a,b)=>a-b));return;
                    }
                }
            },
            sumCurse() {
                this.sumCours = this.selectedCurses.reduce((total, item) => total + item.price, 0);
                console.log(this.sumCours);
            },
            getTaxClassObject(course, price) {
                return {
                    "bg-success text-white": this.selectedCurses
                        .some((item) => item.course === course && item.price === price),
                    // "bg-info text-white": this.selectedCurses.some((item) => item.course === course && item.tax === price && item.tax < 23000)
                }
            },
            applaycod() {

                this.coupons.every(item => this.promo.toUpperCase() === item.name ? this.error = false : this.error = true);
                console.log('Проверяем работу applaycod');
            },

        },
        computed: {
            myNout() {
                 console.log('Проверка myNout');
                return {
                    min: this.mynotebook /*&& this.selectedCurses.some(item => item.tax !== item.course.prices.minimum)*/,

                }

            },
            applaycodColor() {
                console.log(this.error);
                return {
                    error: this.error
                }
            },

        },
        watch:{
            mynotebook(){
                this.CountSum = this.selectedCurses.reduce((total, item)=> total + (item.price -(item.price * item.discount)),0);
                return this.CountSum;
            }
        }

    })
});