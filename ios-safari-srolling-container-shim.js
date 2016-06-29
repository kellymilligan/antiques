shimSafariScroll: function () {

    /*
        Solution documented here:
        http://stackoverflow.com/a/14130056
        ---
        We are using a <div> as our main scrolling container, this way we can
        have a 'fixed' header using position: absolute, rather than dealing with
        buggy position: fixed behaviour.

        This shim stops the document from over-scrolling and capturing scroll
        events when you're already at the top/bottom of our new scroll container.
        With this in place, only the new scroll container has the overscroll.

        Note: if this is also enabled for iOS Chrome, it removes the iOS Chrome
              browser's drag-down-to-refresh functionality. You'll have to make
              a call as to whether it's worth disabling this functionality to
              make overscroll consistent between iOS Chrome and Safari.
    */

    this.ui.document.on( 'touchmove', function (e) { e.preventDefault(); });

    this.ui.body.on( 'touchstart', '.js-scroll', function (e) {

        if ( e.currentTarget.scrollTop === 0 ) {
            e.currentTarget.scrollTop = 1;
        }
        else if ( e.currentTarget.scrollHeight === e.currentTarget.scrollTop + e.currentTarget.offsetHeight ) {
            e.currentTarget.scrollTop -= 1;
        }
    });

    this.ui.body.on( 'touchmove', '.js-scroll', function (e) { e.stopPropagation(); });
}