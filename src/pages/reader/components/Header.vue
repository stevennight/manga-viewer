<template>
    <div class="header-container">
        {{currentTitle}}
    </div>
</template>

<script>
    import { mapState } from 'vuex'

    export default {
        name: "Header",
        computed: {
            ...mapState(['currentTitle']),
        }
    }
</script>

<style lang="stylus" scoped>
    .header-container
        color: white;
        background rgba(0,0,0, 0.5);
        top 0
        right 0
        left 0
        position fixed
        z-index 2
        height .86rem
        line-height .86rem
        text-align center
</style>
