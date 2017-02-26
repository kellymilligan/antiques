// Penner equations ported to manipulate a 0:1 ratio
// --------------------------------------------------------

/*
    Sine
*/
function EaseInSine(ratio) {
    return -1 * Math.cos( ratio * ( Math.PI / 2 ) ) + 1;
}

function EaseOutSine(ratio) {
    return 1 * Math.sin( ratio * ( Math.PI / 2 ) );
}

function EaseInOutSine(ratio) {
    return -1 / 2 * ( Math.cos( Math.PI * ratio / 1 ) - 1 );
}

/*
    Quad
*/
function EaseInQuad(ratio) {
    return ratio * ratio;
}

function EaseOutQuad(ratio) {
    return -1 * ratio * ( ratio - 2 );
}

function EaseInOutQuad(ratio) {
    ratio /= 1 / 2;
    if ( ratio < 1 ) return 1 / 2 * ratio * ratio;
    ratio--;
    return -1 / 2 * ( ratio * ( ratio - 2 ) - 1 );
}

/*
    Cubic
*/
function EaseInCubic(ratio) {
    return ratio * ratio * ratio;
}

function EaseOutCubic(ratio) {
    ratio--;
    return ( ratio * ratio * ratio + 1 );
}

function EaseInOutCubic(ratio) {
    ratio /= 1 / 2;
    if ( ratio < 1 ) return 1 / 2 * ratio * ratio * ratio;
    ratio -= 2;
    return 1 / 2 * ( ratio * ratio * ratio + 2 );
}

/*
    Quart
*/
function EaseInQuart(ratio) {
    return ratio * ratio * ratio * ratio;
}

function EaseOutQuart(ratio) {
    ratio--;
    return -1 * ( ratio * ratio * ratio * ratio - 1);
}

function EaseInOutQuart(ratio) {
    ratio /= 1 / 2;
    if ( ratio < 1 ) return 1 / 2 * ratio * ratio * ratio * ratio;
    ratio -= 2;
    return -1 / 2 * ( ratio * ratio * ratio * ratio - 2 );
}

/*
    Quint
*/
function EaseInQuint(ratio) {
    return ratio * ratio * ratio * ratio * ratio;
}

function EaseOutQuint(ratio) {
    ratio--;
    return ratio * ratio * ratio * ratio * ratio + 1;
}

function EaseInOutQuint(ratio) {
    ratio /= 1 / 2;
    if ( ratio < 1 ) return 1 / 2 * ratio * ratio * ratio * ratio * ratio;
    ratio -= 2;
    return 1 / 2 * ( ratio * ratio * ratio * ratio * ratio + 2 );
}


/*
    Expo
*/
function EaseInExpo(ratio) {
    return Math.pow( 2, 10 * ( ratio - 1 ) );
}

function EaseOutExpo(ratio) {
    return -Math.pow( 2, -10 * ratio ) + 1;
}

function EaseInOutExpo (ratio) {
    ratio /= 1 / 2;
    if ( ratio < 1 ) return 1 / 2 * Math.pow( 2, 10 * ( ratio - 1 ) );
    ratio--;
    return 1 / 2 * ( -Math.pow( 2, -10 * ratio ) + 2 );
}
