<template>
    <div class="contact">
        <h1>Страница с контактами</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, quas!</p>
        <button @click="showModal = true">Показать</button>
<!--        {{showModal}}-->
        <v-modal v-model="showModal">
<!--        <v-modal>-->
<!--            <template v-slot:header>-->
            <template #header>
                Список примеров
            </template>

            <template #default>
                <ul>
                    <li>Пример 1</li>
                    <li>Пример 2</li>
                    <li>Пример 3</li>
                    <li>Пример 4</li>
                    <li>Пример 5</li>
                    <li>Пример 6</li>
                </ul>
            </template>
        </v-modal>
    </div>
</template>

<script>
    import VModal from "../components/VModal.vue";

    export default {
        name: "Contact",
        components: {VModal},
        data(){
            return{
                showModal: false,
                // showModal: true,
            }
        },
    }
</script>

<style scoped>

</style>