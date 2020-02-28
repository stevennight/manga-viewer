<template>
    <div class="swiper-container" @click="imageClick">
        <swiper class="swiper-wrapper" :options="swiperOptions" ref="mySwiper" @slideChange="swiperSlideChange">
            <!-- slides -->
            <swiper-slide class="swiper-slide" v-for="item of list" :key="item.name">
                <div class="swiper-zoom-container">
                    <img :src="item.blob" />
                </div>
            </swiper-slide>
            <!-- Optional controls -->
            <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
    </div>
</template>

<script>
    import {mapState, mapMutations, mapGetters} from 'vuex'

    export default {
        name: "RowReaderReserve",
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
                swiperOptions: {
                    initialSlide: (this.$store.state.currentTotal - this.$store.state.currentPage),
                    pagination: {
                        el: '.swiper-pagination',
                        type: 'custom',
                    //     clickable: true
                        renderCustom(swiper, current, total) {
                            current = total - current + 1;
                            return '<span>'+current+' / '+total+'</span>';
                        }
                    },
                    keyboard: true,
                    mousewheel: true,
                    zoom: true
                }
            }
        },
        computed: {
            ...mapState(['currentTitle', 'currentTotal', 'currentPage',]),
            ...mapGetters(['currentGetters']),
            swiper() {
                return this.$refs.mySwiper.swiper
            },
            list(){
                let list = this.blobList.slice();
                list.reverse();
                return list;
            }
        },
        methods: {
            ...mapMutations(['changeCurrent']),
            imageClick(){
                this.$emit('imageclick');
            },
            swiperSlideChange(){
                this.changeCurrent({currentPage: (this.currentTotal - this.swiper.realIndex)});
            },
        },
        watch: {
            currentPage(){
                let swiper = this.swiper;
                let swiperIndex = swiper.realIndex;
                let currentPage = this.currentTotal - this.currentPage;
                if(swiperIndex !== currentPage){
                    swiper.slideTo(currentPage, 100, false);
                }
            }
        }
    }
</script>

<style lang="stylus" scoped>
    .swiper-container >>> .swiper-pagination
        span
            color: white
            background rgba(0,0,0,0.4)
            font-size smaller
            padding: .06rem .12rem
            position fixed
            right 0
            bottom 0
    .swiper-container
        background #333
        position absolute
        top 0
        left 0
        right 0
        bottom 0
        .swiper-slide
            overflow hidden
            .swiper-zoom-container
                width 100%
                height 100%
                img
                    max-width 100%
                    max-height 100%
                    margin auto
</style>
