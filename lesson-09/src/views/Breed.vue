<template>
    <div class="container">
        <!--        <h1>Фотография породы {{$route.params.name}}</h1>-->
        <h1>Фотография породы {{breedName}}</h1>
        <p>Список фото</p>
        <img @click="toggleFavorite(item)" v-for="item in photo" :src="item" :key="item" alt="">
    </div>
</template>

<script>
    import {LOAD_RANDOM_BREEDS_PHOTOS, TOGGLE_FAVORITE_IMAGE} from "../store/action.types";

    export default {
        name: "Breed",
        methods:{
            async toggleFavorite(image){
                await this.$store.dispatch(TOGGLE_FAVORITE_IMAGE, image);
            }
        },
        computed: {
            breedName() {
                // let name = this.$route.params.name;
                const {name, sub} = this.$route.params;
                let str = name[0].toUpperCase() + name.slice(1);
                if (sub) {
                    str = sub[0].toUpperCase() + sub.slice(1) + ' ' + str;
                }
                return str;
            },
            photo(){
                return this.$store.state.photos;
            }

        },
        async created() {
            await this.$store.dispatch(LOAD_RANDOM_BREEDS_PHOTOS, this.$route.params);
        }
    }
</script>

<style scoped>

</style>