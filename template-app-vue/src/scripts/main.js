import { Vue, _, $ } from './common';
import VueRouter from 'vue-router';

import { AppData } from './data/app_data';

import HomePage from './pages/home_page';

export default function () {


    const BASE_WIDTH = 1440;

    let ui = null;
    let app = null;
    let appConfig = null;

    let pages = null;

    let windowData = null;
    let mouseData = null;

    start();


    // Setup
    // -----

    function start() {

        ui = {

            window   : $(window),
            document : $(document),
            html     : $(document.documentElement),
            root     : $('.js-root')
        };

        app = new Vue({

            el: ui.root[ 0 ],
            data: AppData
        });

        appConfig = {

        };

        setDefaults();
        createPages();
        setupRouting();
        addEvents();
        onResize();

        // Start anim frame
        _.defer( function () { window.requestAnimationFrame( onAnimFrame ); } );
    }

    function setDefaults() {

        windowData = {

            width: 0,
            height: 0,
            ratio: 0,
            scale: 0
        };

        mouseData = {

            x: 0,
            y: 0,
            nX: 0,
            nY: 0
        };
    }

    function createPages() {

        pages = {

            home: Object.create( HomePage )
        };

        pages.home.init({

            'appConfig': appConfig,
            'windowData': windowData,
            'mouseData': mouseData,
            'node': ui.root.find( '.js-home' )
        });
    }

    function setupRouting() {

        Vue.use( VueRouter );
    }

    function addEvents() {

        ui.window.on( 'resize', onResize );
        ui.document.on( 'mousemove', onMouseMove );
    }


    // Handlers
    // --------

    function onResize() {

        windowData.width = ui.window.width();
        windowData.height = ui.window.height();
        windowData.ratio = windowData.width / windowData.height;
        windowData.scale = windowData.width / BASE_WIDTH;

        ui.html[0].style.fontSize = 10 * windowData.scale + 'px';

        pages.home.resize();
    }

    function onMouseMove(e) {

        mouseData.x = e.clientX;
        mouseData.y = e.clientY;

        mouseData.nX = ( mouseData.x / windowData.width ) * 2 - 1;
        mouseData.nY = ( mouseData.y / windowData.height ) * 2 - 1;

        pages.home.mouseMove();
    }

    function onAnimFrame(t) {

        const time = Date.now();

        pages.home.animFrame( time );

        window.requestAnimationFrame( onAnimFrame );
    }

}