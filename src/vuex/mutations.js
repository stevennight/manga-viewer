export default {
    changeSlot(state, slot){
        // if(localStorage['currentTitle'+slot] !== undefined){
        state.slot = slot;
        try{
            localStorage.slot = slot;
        }catch (e) {
            //
        }
    },
    addSlotList(state, slot){
        state.slotList.push(slot);
        localStorage.slotList = JSON.stringify(state.slotList);
        localStorage['readerMode'+slot]='row-reader-component';
        localStorage['currentTitle'+slot]='';
        localStorage['currentTotal'+slot]=1;
        localStorage['currentPage'+slot]=1;
    },
    delSlotList(state, slot){
        state.slot = 'default';
        try{
            localStorage.slot = 'default';
        }catch (e) {
            //
        }
        try{
            if(slot === 'default') return;
            let index = state.slotList.indexOf(slot);
            if(index !== -1){
                state.slotList.splice(index, 1);
            }
            localStorage.slotList = JSON.stringify(state.slotList);
            delete localStorage['readerMode'+slot];
            delete localStorage['currentTitle'+slot];
            delete localStorage['currentTotal'+slot];
            delete localStorage['currentPage'+slot];
        }catch (e) {
            //
        }
    },
    delSlotListAll(state){
        state.slot = 'default';
        try{
            localStorage.slot = 'default';
        }catch (e) {
            //
        }
        try{
            state.slotList.forEach((slot)=>{
                if(slot === 'default') return;
                delete localStorage['readerMode'+slot];
                delete localStorage['currentTitle'+slot];
                delete localStorage['currentTotal'+slot];
                delete localStorage['currentPage'+slot];
            });
            state.slotList.splice(1, state.slotList.length - 1);
            localStorage.slotList = JSON.stringify(state.slotList);
        }catch (e) {
            //
        }
    },
    changeCurrentFile(state, file){
        state.currentFile = file;
    },
    changeCurrent(state, options){
        for(let key in options){
            state[key] = options[key];
            localStorage[key+state.slot] = options[key];
        }
    },
    changeReaderMode(state, mode){
        console.log(mode);
        state.readerMode = mode;
        try{
            localStorage['readerMode'+state.slot] = mode;
        }catch (e) {
            //
        }
    }
};
