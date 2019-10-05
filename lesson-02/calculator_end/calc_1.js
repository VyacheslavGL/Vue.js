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
            mynotebook: false,
            myfriend: null,
            discount: null,
            changePrice: null,
            changePriceNew: null,
            promocod: false,
            promo: null,
            error: false,
            text:'Ваш промокод не валидный',
            coupons : [
                {name: "LETO", tax: 0.8,},
                {name: "STUDENT", tax: 0.95}
            ]
            /*TestClass:{
                min: true,
                "bg-success text-white": false
            }*/
        },
        methods: {
            selectCurse(course, tax) {
                if (this.selectedCurses.length < 5 && this.selectedCurses.every(item => item.course !== course)) {
                    this.selectedCurses.push({
                        course, tax,
                    });
                }

                this.sumCurse();
            },
            sumCurse() {
                this.sumCours = this.selectedCurses.reduce((total, item) => total + item.tax, 0);
                console.log(this.sumCours);
            },
            getTaxClassObject(course, price) {
                return {
                    "bg-success text-white": this.selectedCurses
                        .some((item) => item.course === course && item.tax === price),
                    // "bg-info text-white": this.selectedCurses.some((item) => item.course === course && item.tax === price && item.tax < 23000)
                }
            },
            applaycod() {
                // this.error = true;
                this.coupons.every(item => this.promo === item.name ? this.error = false : this.error = true);
                console.log('Проверяем работу applaycod');
            },
        },
        computed: {
            myTestNout() {
                return {
                    min: this.mynotebook,
                }
            },
            applaycodColor() {
                console.log(this.error);
                return {
                    error: this.error
                }
            }
        },
        watch: {
            mynotebook() {
                // console.log('Это mynotebook', val);
                this.changePrice = this.selectedCurses.map(item => item.tax - (item.tax * 0.10));
                this.changePriceNew = this.changePrice.reduce((total, item) => total + item, 0);
                console.log(this.changePriceNew);
            }
        },
        filters: {
            PromoCodSend(value) {
                if (!value) return '';
                return value.toUpperCase();
            },
        },
        /*filter:{
            PromoCod(val){
                // if (!val) return '';
              val = val.toUpperCase();
                return val;
              // return val.toLowerCase();
            }
        }*/
    })
});