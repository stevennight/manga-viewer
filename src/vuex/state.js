let readerMode = 'row-reader-component';
let currentTitle = '';
let currentTotal = 1;
let currentPage = 1;
try{
    if(localStorage.readerMode)readerMode = localStorage.readerMode;
    if(localStorage.currentTitle)currentTitle = localStorage.currentTitle;
    if(localStorage.currentTotal)currentTotal = parseInt(localStorage.currentTotal);
    if(localStorage.currentPage)currentPage = parseInt(localStorage.currentPage);

}catch (e) {
    //
}

export default {
    currentFile: {},
    currentTitle,
    currentTotal,
    currentPage,
    readerMode
};
