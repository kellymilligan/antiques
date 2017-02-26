define([

    'lodash',
    'jquery'

], function (

    _,
    $

) { 'use strict';

    return {


        $button        : null,

        captureEvents  : false,

        TOUCH_TIMEOUT  : 500,
        TOUCH_DISTANCE : 40,

        touchStarted   : false,
        touchTimer     : null,

        touchStartingX : 0,
        touchStartingY : 0,
        touchCurrentX  : 0,
        touchCurrentY  : 0,


        // Setup
        // -----

        setup: function(options) {

            _.bindAll( this, 'onTouchStart', 'onTouchMove', 'touchCancel', 'onTouchEnd' );

            this.$button = $('.js-button'); // example

            this.captureEvents = options.captureEvents || false;

            this.addTouchEvents();
        },

        addTouchEvents: function () {

            this.$button.on({
                'touchstart' : this.onTouchStart,
                'touchend'   : this.onTouchEnd,
                'click'      : this.onClick
            });
        },

        removeTouchEvents: function () {

            this.$button.on({
                'touchstart' : this.onTouchStart,
                'touchend'   : this.onTouchEnd,
                'click'      : this.onClick
            });
        },


        // State
        // -----

        touch: function () {

            this.$button.addClass('is-touching');
        },

        release: function () {

            this.$button.removeClass('is-touching');
        },


        // Handlers
        // --------

        onTouchStart: function (e) {

            if ( this.captureEvents ) { e.preventDefault(); e.stopPropagation(); }

            this.touchStartingX = e.touches[0].clientX;
            this.touchStartingY = e.touches[0].clientY;

            this.touchStarted = true;
            clearTimeout( this.touchTimer );
            this.touchTimer = _.delay( this.touchCancel, this.TOUCH_TIMEOUT );

            this.touch();
        },

        onTouchMove: function (e) {

            if ( this.captureEvents ) { e.preventDefault(); e.stopPropagation(); }
            if ( !this.touchStarted ) { return; }

            this.touchCurrentX = e.touches[0].clientX;
            this.touchCurrentY = e.touches[0].clientY;

            var withinDistance = this.isWithinTouchDistance( this.touchStartingX, this.touchCurrentX, this.touchStartingY, this.touchCurrentY, this.TOUCH_DISTANCE );

            if ( !withinDistance ) {

                this.touchCancel();
            }
        },

        onTouchEnd: function (e) {

            if ( this.captureEvents ) { e.preventDefault(); e.stopPropagation(); }
            if ( !this.touchStarted ) { return; }

            this.touchCurrentX = e.changedTouches[0].clientX;
            this.touchCurrentY = e.changedTouches[0].clientY;

            var withinDistance = this.isWithinTouchDistance( this.touchStartingX, this.touchCurrentX, this.touchStartingY, this.touchCurrentY, this.TOUCH_DISTANCE );

            if ( withinDistance ) {

                this.onClick();
            }

            this.touchCancel();
        },

        touchCancel: function () {

            this.touchStarted = false;
            clearTimeout( this.touchTimer );

            this.release();
        },


        // Utilities
        // ---------

        isWithinTouchDistance: function ( startX, currentX, startY, currentY, threshhold ) {

            if ( Math.abs( startX - currentX ) > threshhold ||
                 Math.abs( startY - currentY ) > threshhold ) {

                return false;
            }

            return true;
        },


        // Relay
        // -----

        onClick: function () {

            this.trigger( 'click' );
        }

    };

});
