<template>
    <div class="page">
        <header class="page__header">
            Это шапка сайта
        </header>

            <aside class="page__sidebar">

                Это бокова панель

                <div class="page__menu">
                    <slot name="menu"></slot>
                </div>

            </aside>

            <main class="page__content">
                <slot></slot>
            </main>

        <footer class="page__footer">
            <slot name="footer">&copy; Все прова защищены</slot>
        </footer>
    </div>
</template>

<script>
    export default {
        name: "BaseLayout"
    }
</script>

<style>
    .page{
        max-width: 960px;
        margin: 0 auto;
        display: grid;
        grid-template-areas: "h h" "s c" "f f";
        grid-template-columns: 25% 1fr;
        border: 1px solid red;
    }

    .page__header{
        grid-area: h;
        background-color: whitesmoke;
    }

    .page__sidebar{
        grid-area: s;
        height: 700px;
        border: 1px solid black;
        background-color: #9cdcfe;
    }
    .page__content{
        grid-area: c;
        background-color: #6dece9;

    }
    .page__footer{
        grid-area: f;
        background-color: #2c84e8;
    }
    .page__menu{
        height: auto;
        border: 1px solid black;
    }
</style>

