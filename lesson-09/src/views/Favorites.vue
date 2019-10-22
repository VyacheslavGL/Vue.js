<template>
    <div class="favorites">
        <h1>Список избранных фото</h1>
        <p>Список пуст</p>
        <img @click="toggleFavorite(item)" v-for="item in favorites" :src="item" :key="item" alt="">
    </div>
</template>

<script>
    import {TOGGLE_FAVORITE_IMAGE} from "../store/action.types";

    export default {
        methods:{
          async toggleFavorite(image){
              await this.$store.dispatch(TOGGLE_FAVORITE_IMAGE, image);
          }
        },
        computed:{
            favorites(){
                return this.$store.state.favorites;
            }
        },

    }
</script>