<template>
    <div class="row-reader" @click="imageClick">
        <swiper class="images-wrapper" :options="swiperOptions" ref="mySwiper" v-if="blobList.length">
            <!-- slides -->
            <swiper-slide class="image-wrapper" v-for="item of blobList" :key="item.name">
                <div>
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
                        type: 'fraction',
                    //     clickable: true
                    }
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
    .row-reader >>> .swiper-pagination
        color: white
        background rgba(0,0,0,0.4)
        padding: .12rem
    .row-reader
        background #333
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        .images-wrapper
            height 100%
            .image-wrapper
                position: relative;
                height 100%
                img
                    max-width 100%
                    max-height 100%
                    position: absolute;
                    top 0
                    bottom 0
                    left 0
                    right 0
                    margin auto
</style>
