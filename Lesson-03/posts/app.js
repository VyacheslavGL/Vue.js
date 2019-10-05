// Проверка ГИТ пуша

Vue.component('v-alert', {
    template: "#alert-template",
    //здесь type - название атрибута (пропса)
    props: {
        type: {
            default: "info",
            type: String,
        },
        //text- другой атрибут
        text: {
            required: true,
            type: String,
        }
    },
    methods: {
        getClassName() {
            return {
                "alert-info": this.type === "info",
                "alert-danger": this.type === "danger",
                "alert-success": this.type === "success",
            }
        }
    }
});

window.addEventListener("load", () => {
    new Vue({
        el: "#app",
        components:{
          "v-datepicker":vuejsDatepicker,
          Editor,
        },
        data: {
            posts: [],
            showForm: false,
            post:{
                author:'',
                date: '',
                content:'',
            }
        },
        methods: {
            toggleFormVisibility(){
                this.showForm = !this.showForm;
            },
            addPost(){
                this.posts.push({
                    author: this.post.author,
                    date: this.post.date,
                    content: this.post.content,
                })
            }
        },
        computed: {
            showFormButtonCaption(){
              return this.showForm ? "Скрыть форму":"Добавить форму";
            },
            showFormButtonClass(){
              return {
                  "btn-primary": !this.showForm,
                  "btn-secondary": this.showForm
              }
            },
        },
    })
});
