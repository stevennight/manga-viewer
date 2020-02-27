<template>
    <div class="file-selector">
        <div>
            <label class="file-input">
                <input type="file" @change="fileSelectorChange" ref="fileInput"/>打开
            </label>
        </div>
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
            ...mapState(['currentFile'])
        },
        mounted() {
            this.$refs.fileInput.value='';
        }
    }
</script>

<style lang="stylus" scoped>
    .file-input {
        position: absolute;
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
        top: 50%;
        left: 50%;
        width: 3.6rem;
        margin-left: -3.0rem
        margin-top: -0.5rem
    }
    .file-input input {
        position: absolute;
        font-size: 100px;
        right: 0;
        top: 0;
        opacity: 0;
    }
    .file-input:hover {
        background: #AADFFD;
        border-color: #78C3F3;
        color: #004974;
        text-decoration: none;
    }
</style>
