<template>
    <div class="controller-wrapper">
        <div class="controller-slide-wrapper">
            <div class="controller-slide-text">{{currentPage}}/{{currentTotal}}</div>
            <div class="controller-slide">
                <vue-slider :min="1" :max="currentTotal" :interval="1" v-model="page"></vue-slider>
            </div>
        </div>
        <div class="controller-btn-wrapper">
            <div class="controller-btn" :class="{'controller-btn-active': readerMode==='row-reader-component'}" @click="changeReaderMode('row-reader-component')">
                从左到右
            </div>
            <div class="controller-btn" :class="{'controller-btn-active': readerMode==='row-reader-reverse-component'}" @click="changeReaderMode('row-reader-reverse-component')">
                从右到左
            </div>
            <div class="controller-btn" :class="{'controller-btn-active': readerMode==='column-reader-component'}" @click="changeReaderMode('column-reader-component')">
                条漫模式
            </div>
            <div class="controller-btn" @click="back">
                返回
            </div>
        </div>
    </div>
</template>

<script>
    import { mapState, mapMutations } from 'vuex'

    export default {
        name: "Controller",
        computed: {
            ...mapState(['readerMode', 'currentTitle', 'currentTotal', 'currentPage']),
            page: {
                get(){
                    return this.currentPage;
                },
                set(value){
                    this.changeCurrent({
                        currentPage: value
                    })
                }
            }
        },
        methods: {
            ...mapMutations(['changeReaderMode', 'changeCurrent']),
            back(){
                this.$router.push('/');
            }
        }
    }
</script>

<style lang="stylus" scoped>
    .controller-wrapper
        background-image linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(0,0,0,1))
        color white
        position fixed
        left 0
        right 0
        bottom 0
        height: 2.0rem
        overflow hidden;
        z-index 2
        .controller-btn-wrapper
            display flex
            .controller-btn
                flex 1
                text-align center
                height 1.2rem
                line-height 1.2rem
                cursor pointer
            .controller-btn-active
                color black
                background-image linear-gradient(to bottom, rgba(255,255,255,0.1), rgba(255,255,255,1))
        .controller-slide-wrapper
            display flex
            padding 0.52rem 0.24rem 0.12rem 0.24rem
            box-sizing border-box
            overflow hidden
            .controller-slide-text
                float: left
                width: 1.2rem
            .controller-slide
                flex 1
                min-width 0
</style>
