export default {
    changeSlotAction(ctx, slot) {
        try {
            ctx.commit('changeSlot', slot);
            //從localStorage載入對應slot的設置。
            let readerMode = 'row-reader-component';
            let currentTitle = '';
            let currentTotal = 1;
            let currentPage = 1;
            if (localStorage['readerMode' + slot]) readerMode = localStorage['readerMode' + slot];
            if (localStorage['currentTitle' + slot]) currentTitle = localStorage['currentTitle' + slot];
            if (localStorage['currentTotal' + slot]) currentTotal = parseInt(localStorage['currentTotal' + slot]);
            if (localStorage['currentPage' + slot]) currentPage = parseInt(localStorage['currentPage' + slot]);

            console.log(readerMode);
            ctx.commit('changeReaderMode', readerMode);
            ctx.commit('changeCurrent', {
                currentTitle,
                currentTotal,
                currentPage
            });
            // }
        } catch (e) {
            //
        }
    }
};
