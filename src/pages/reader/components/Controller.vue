<template>
    <div class="controller-wrapper">
        <div class="controller-btn" @click="changeReaderMode('row-reader-component')">
            从左到右
        </div>
        <div class="controller-btn" @click="changeReaderMode('row-reader-reverse-component')">
            从右到左
        </div>
        <div class="controller-btn" @click="changeReaderMode('column-reader-component')">
            条漫模式
        </div>
        <div class="controller-btn" @click="back">
            返回
        </div>
    </div>
</template>

<script>
    import { mapState, mapMutations } from 'vuex'

    export default {
        name: "Controller",
        computed: {
            ...mapState(['readerMode']),
        },
        methods: {
            ...mapMutations(['changeReaderMode']),
            back(){
                this.$router.push('/');
            }
        }
    }
</script>

<style lang="stylus" scoped>
    $height = 1.2rem

    .controller-wrapper
        background-image linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(0,0,0,1))
        color white
        position fixed
        left 0
        right 0
        bottom 0
        height: $height
        overflow hidden;
        display flex
        z-index 1
        .controller-btn
            flex 1
            text-align center
            height $height
            line-height $height
            cursor pointer

</style>
