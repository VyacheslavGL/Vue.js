<template>
  <div id="app" :class="{loading : showLoader}">

    <form @submit.prevent="addPost" action="#">
      <textarea v-model="message"></textarea>
      <br>
      <button type="submit">Добавить</button>
    </form>

    <button @click="sort">Отсортировать</button>
<!--    props key - служебный атрибут, который задает компанентам уникальные метки-->
    <blog-post
            @updated="updatePost($event, post)"
            v-for="post in posts"
            :key="post.id"
            :content="post.content"
    />
  </div>
</template>

<script>
import BlogPost from './components/BlogPost.vue'

export default {
  name: 'app',
  components: {
    BlogPost
  },
  data(){
    return{
     /* posts:[
        {id: 1, content: "Это какойто текст"},
        {id: 2, content: "Еще что-то здесь"},
        {id: 3, content: "И тут то же есть"},
      ],*/
      posts:[],
      message: '',
      showLoader: true,
    }
  },
  methods:{
    sort(){
      this.posts.sort((a, b) => a.content > b.content ? 1:-1);
    },
    addPost(){

      let max = 0;

      if(this.posts.length > 0){
        this.posts.forEach((item)=> {
          if(item.id > max){
            max = item.id;
          }
        })
      }

      this.posts.push({
        id: max + 1,
        content: this.message,
      });
      this.savePostToStorage();
      this.message = '';
    },
    updatePost(data, post){
      post.content = data;
      this.savePostToStorage();
    },
    savePostToStorage(){
      //Сохраняем данные в локальное хранилище JSON.stringify - преобразует обьект в json
      localStorage.setItem("blog-posts", JSON.stringify(this.posts))
    }
  },
  //перед инициализации системы реактивности
  created() {
    const data = localStorage.getItem("blog-posts");
    if(data){
      // JSON.parse(data); - преобразует из jsona в обьект или в массив
      this.posts = JSON.parse(data);
    }
  },
  //после того как страница загрузилась
  mounted() {
    setTimeout(()=>this.showLoader = false, 2000);
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
  .loading{

  }

.loading::before{
  content: 'Идет загрузка данных...';
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: black;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: blink 2s infinite;
}
  @keyframes blink {
    50% {color: rgba(0,0,0,0)}
    100% {color: #fff}
  }
</style>
