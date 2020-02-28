<template>
    <div class="swiper-container" @click="imageClick">
        <swiper class="swiper-wrapper" :options="swiperOptions" ref="mySwiper">
            <!-- slides -->
            <swiper-slide class="swiper-slide" v-for="item of blobList" :key="item.name">
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
    export default {
        name: "RowReader",
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
                    pagination: {
                        el: '.swiper-pagination',
                        type: 'custom',
                        //     clickable: true
                        renderCustom(swiper, current, total) {
                            return '<span>'+current+' / '+total+'</span>';
                        }
                    },
                    keyboard: true,
                    mousewheel: true,
                    zoom: true
                }
            }
        },
        methods: {
            imageClick(){
                this.$emit('imageclick');
            }
        }
    }
</script>

<style lang="stylus" scoped>
    .swiper-container >>> .swiper-pagination
        span
            color: white
            background rgba(0,0,0,0.4)
            padding: .12rem .24rem
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
