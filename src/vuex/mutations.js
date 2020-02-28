export default {
    changeCurrentFile(state, file){
        state.currentFile = file;
    },
    changeCurrent(state, options){
        for(let key in options){
            state[key] = options[key];
            localStorage[key] = options[key];
        }
    },
    changeReaderMode(state, mode){
        state.readerMode = mode;
        try{
            localStorage.readerMode = mode;
        }catch (e) {
            //
        }
    }
};
