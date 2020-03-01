<template>
    <div class="images-wrapper" @click="imageClick" ref="images-wrapper" key="images-wrapper">
        <div>
            <div class="image-wrapper" v-for="(item, index) of blobList" :key="item.name" :ref="'images-'+index">
                <img :src="item.blob" @load="fixImageScroll" />
            </div>
        </div>
        <div class="pagination"><span>{{currentPage}}/{{currentTotal}}</span></div>
    </div>
</template>

<script>
    import {mapState, mapGetters, mapMutations} from 'vuex'
    import BScroll from 'better-scroll'

    export default {
        name: "ColumnReader",
        props: {
            blobList: {
                type: Array,
                default(){
                    return [];
                }
            }
        },
        data(){
            return {
                selfChangePage: 0
            }
        },
        computed: {
            ...mapState(['currentTitle', 'currentTotal', 'currentPage']),
            ...mapGetters(['currentGetters']),
        },
        methods: {
            ...mapMutations(['changeCurrent']),
            imageClick(){
                this.$emit('imageclick');
            },
            imagesScroll(){
                let containerHalfHeight = this.$refs['images-wrapper'].offsetHeight / 2;
                let total = this.currentTotal;
                //计算页数，图片底部位置不足半个页面，计算为下一页。
                let index = 0;
                for(; index < total; index++){
                    if(this.$refs['images-'+index][0].getBoundingClientRect().bottom > containerHalfHeight){
                        break;
                    }
                }
                console.log(this.$refs['images-'+index][0].getBoundingClientRect().bottom);
                console.log('滾動：'+index);
                this.selfChangePage = index;
                this.changeCurrent({currentPage: (index+1)});
            },
            fixImageScroll(){
                //dom结构变化，必须refresh()。这里必须refresh，不然会无法scroll还有返回scrollTop=0等等情况。
                this.scroll.refresh();
                let index = this.currentPage - 1;
                this.scroll.scrollToElement(this.$refs['images-'+index][0]);
            }
        },
        watch: {
            currentPage(){
                let index = this.currentPage - 1;
                if(index !== this.selfChangePage){
                    this.scroll.scrollToElement(this.$refs['images-'+index][0]);
                }
            }
        },
        mounted() {
            this.scroll = new BScroll(this.$refs['images-wrapper'], {
                click: true,
                mouseWheel: {
                    speed: 20,
                    invert: false,
                    easeTime: 300
                }
            });
            this.scroll.on('touchEnd', this.imagesScroll);
        },
        destroyed() {
            delete this.scroll;
        }
    }
</script>

<style lang="stylus" scoped>
    .images-wrapper
        background #333
        position absolute
        top 0
        left 0
        right 0
        bottom 0
        overflow hidden
        .image-wrapper
            width 100%;
            text-align center
            img
                width 100%;
        .pagination
            span
                color: white
                background rgba(0,0,0,0.4)
                font-size smaller
                padding: .06rem .12rem
                position fixed
                right 0
                bottom 0
</style>
