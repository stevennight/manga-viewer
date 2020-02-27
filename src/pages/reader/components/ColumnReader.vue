<template>
    <div class="images-wrapper" @click="imageClick">
        <div class="image-wrapper" v-for="item of blobList" :key="item.name">
            <img :src="item.blob" />
        </div>
    </div>
</template>

<script>
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
        methods: {
            imageClick(){
                this.$emit('imageclick');
            }
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
        .image-wrapper
            width 100%;
            text-align center
            img
                width 100%;
</style>
