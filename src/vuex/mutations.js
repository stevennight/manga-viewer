export default {
    changeCurrentFile(state, file){
        state.currentFile = file;
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
