<template>
    <div class="file-selector">
        <div class="selector">
            <label class="file-input">
                <input type="file" @change="fileSelectorChange" ref="fileInput"/>打开
            </label>
        </div>
        <div class="last-read">上次閲讀：{{currentTitleText}}</div>
        <div class="history-slot-selector">
            <select v-model="slot">
                <option v-for="item of slotList" :key="item" :value="item">{{getSlotTitle(item)}}</option>
            </select>
        </div>
        <div class="history-slot-selector-btn">
            <button @click="clickAddSlotBtn">添加</button>
            <button @click="clickDelSlotBtn">刪除</button>
            <button @click="clickDelAllSlotBtn">全部刪除</button>
        </div>
        <div class="copy"><a href="https://github.com/stevennight/manga-viewer">stevennight@github</a></div>
    </div>
</template>

<script>
    import { mapState, mapMutations, mapActions } from 'vuex'

    export default {
        name: "FileSelector",
        methods: {
            fileSelectorChange(e){
                let files = e.target.files;
                this.changeCurrentFile(files);
                this.$router.push('/reader');
            },
            clickAddSlotBtn(){
                let slotNameTemplate = parseInt((new Date()).getTime() / 1000);
                let slotName = slotNameTemplate;
                var count = 0;
                while(this.slotList.indexOf(slotName) > -1){
                    slotName = slotNameTemplate+'-'+count;
                    count++;
                }
                this.addSlotList(slotName);
                this.changeSlotAction(slotName);
            },
            clickDelSlotBtn(){
                if(this.slot === 'default'){
                    alert('默認記錄槽無法刪除');
                    return;
                }
                if(confirm('確定刪除（'+this.getSlotTitle(this.slot)+'）嗎？數據將無法恢復')){
                    this.delSlotList(this.slot);
                    this.changeSlotAction(this.slot);
                }
            },
            clickDelAllSlotBtn(){
                if(confirm('確定全部刪除嗎？數據將無法恢復')){
                    this.delSlotListAll();
                    this.changeSlotAction(this.slot);
                }
            },
            getSlotTitle(slotName){
                let title = slotName;
                if(title==='default'){
                    title = '默認';
                }
                try {
                    if(localStorage['currentTitle'+slotName] === undefined){
                        title+='(無歷史記錄)'
                        //
                    }else if(!localStorage['currentTitle'+slotName]){
                        title+='(無歷史記錄)'
                    }else{
                        title+=`(${localStorage['currentTitle'+slotName]})`;
                    }
                }catch (e) {
                    //
                }
                return title;
            },
            ...mapMutations(['changeCurrentFile', 'addSlotList', 'delSlotList', 'delSlotListAll']),
            ...mapActions(['changeSlotAction']),
        },
        computed: {
            ...mapState(['currentFile', 'currentTitle', 'currentPage', 'slot', 'slotList']),
            currentTitleText(){
                return this.currentTitle?this.currentTitle+'-第'+this.currentPage+'頁':'無';
            },
            slot: {
                get(){
                    return this.$store.state.slot;
                },
                set(val){
                    this.changeSlotAction(val);
                }
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
        .history-slot-selector
            padding 0.12rem
            select
                font-weight bolder;
                color: #1E88C7;
                background: #D0EEFF;
                padding .12rem
                border .01rem solid #99D3F5
                overflow hidden
                white-space nowrap
                text-overflow ellipsis
                max-width 100%
        .history-slot-selector-btn
            button
                font-weight bolder;
                color: #1E88C7
                background: #D0EEFF;
                padding .12rem
                border .01rem solid #99D3F5
                margin-left .12rem
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
