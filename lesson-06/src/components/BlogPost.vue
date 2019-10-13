<template>
    <div class="blog-post">
        {{content}}
        <button v-if="!showEditor" @click="toogleEditor">Изменить</button>
        <div v-if="showEditor" class="bloc-post_editor">
            <textarea v-model="realContent"></textarea>
            <button @click="savePost">ОК</button>
            <button @click="toogleEditor">ОТМЕНА</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "BlogPost",
        props:{
          content:{
              type: String,
              required: true,
          }
        },
        data(){
            return{
                showEditor: false,
                //используем данные из пропсов только для установки начального состояния
                realContent: this.content,
            }
        },
        methods:{
            toogleEditor(){
                this.showEditor = !this.showEditor;
            },
            savePost(){
                this.$emit('updated', this.realContent);
                this.toogleEditor();
            }
        }
    }
</script>

<style scoped>

.blog-post{
    margin-bottom: 15px;
    border: 1px solid red;
    padding: 25px;
}
</style>