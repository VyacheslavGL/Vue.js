<template>
    <div v-if="value" class="modal">
        <div class="modal_content">
            <div class="model_header">
<!--                У компонента может быть любое количество именных слотов-->
                <slot name="header">А это заголовок по умолчанию</slot>
            </div>
            <div class="modal_body">
<!--                имя слота по умолчагию - default-->
                <slot>Содержимое окна по умолчанию</slot>
            </div>
            <button @click="hide" class="modal_close">&times;</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "VModal",
        props:{
            value:{
                type: Boolean,
                required: false,
                default: false
            }
        },
        methods:{
            hide(){
                this.$emit('input', false);
            }
        }
    }
</script>

<style scoped>
.modal{
    position: fixed;
    top:25%;
    left:33%;
    right: 50%;
    bottom: 50%;
    width: 700px;
    height: 500px;
    border-radius: 10px;
    z-index: 100000;
    background: rgba(0,0,0,0.3);
    display: flex;
    justify-content: center;
    align-items: center;
}
    .modal_content{
        background: #cecece;
        box-shadow: 0 0 10px rgba(0,0,0,0.5);
    }

    .model_header{
        padding: 10px 15px;
        border-bottom: 2px solid;
    }

    .modal_body{
        padding: 10px 15px 30px;
    }

    .modal_close{
        position: absolute;
        top: 0;
        right: 0;
        font-size: 36px;
        background: transparent;
        color: #444;
        border: 0;
    }
</style>