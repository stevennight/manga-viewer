<template>
    <div class="row-reader" @click="imageClick">
        <swiper class="images-wrapper" :options="swiperOptions" ref="mySwiper">
            <!-- slides -->
            <swiper-slide class="image-wrapper" v-for="item of list" :key="item.name">
                <img :src="item.blob" />
            </swiper-slide>
            <!-- Optional controls -->
            <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
    </div>
</template>

<script>
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
                    initialSlide: this.blobList.length,
                    pagination: {
                        el: '.swiper-pagination',
                        type: 'fraction',
                    //     clickable: true
                    }

                }
            }
        },
        computed: {
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
