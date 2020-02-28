<template>
    <div class="file-selector">
        <div class="selector">
            <label class="file-input">
                <input type="file" @change="fileSelectorChange" ref="fileInput"/>打开
            </label>
        </div>
        <div class="last-read">上次閲讀：{{currentTitleText}}</div>
        <div class="copy"><a href="https://github.com/stevennight/manga-viewer">stevennight@github</a></div>
    </div>
</template>

<script>
    import { mapState, mapMutations } from 'vuex'

    export default {
        name: "FileSelector",
        methods: {
            fileSelectorChange(e){
                let files = e.target.files;
                this.changeCurrentFile(files);
                this.$router.push('/reader');
            },
            ...mapMutations(['changeCurrentFile'])
        },
        computed: {
            ...mapState(['currentFile', 'currentTitle', 'currentPage']),
            currentTitleText(){
                return this.currentTitle?this.currentTitle+'-第'+this.currentPage+'頁':'無';
            }
        },
        mounted() {
            this.$refs.fileInput.value='';
        }
    }
</script>

<style lang="stylus" scoped>
    .file-selector
        position: absolute
        bottom 0
        top 0
        left 0
        right 0
        text-align center
        display flex
        flex-direction column
        justify-content center
        .copy
            padding-top: 0.24rem
        .selector
            .file-input
                display: inline-block;
                background: #D0EEFF;
                border: .06rem solid #99D3F5;
                border-radius: .2rem;
                padding: .2rem 1.2rem;
                overflow: hidden;
                color: #1E88C7;
                text-decoration: none;
                text-indent: 0;
                text-align center;
                line-height: .8rem;
                font-size: .8rem
            .file-input input
                position: absolute;
                font-size: 100px;
                right: 0;
                top: 0;
                opacity: 0;
            .file-input:hover
                background: #AADFFD;
                border-color: #78C3F3;
                color: #004974;
                text-decoration: none;
</style>
