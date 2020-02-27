let readerMode = 'row-reader-component';
try{
    if(localStorage.readerMode){
        readerMode = localStorage.readerMode;
    }
}catch (e) {
    //
}

export default {
    currentFile: {},
    readerMode: readerMode
};
