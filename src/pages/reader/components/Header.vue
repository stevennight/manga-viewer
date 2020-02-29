<template>
    <div @touchstart.prevent class="header-container">
        {{fileName}}
    </div>
</template>

<script>
    import { mapState } from 'vuex'

    export default {
        name: "Header",
        computed: {
            ...mapState(['currentFile']),
            fileName(){
                if(!this.currentFile[0]) return;
                let fileName = this.currentFile[0].name;
                let reg = new RegExp(/(.*)\.(.*?)$/g);
                let matches = [...fileName.matchAll(reg)];
                if(matches){
                    console.log(matches);
                    fileName = matches[0][1];
                }
                return fileName;
            }
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
