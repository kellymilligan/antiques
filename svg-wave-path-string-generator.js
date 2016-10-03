function createWavePathString( waveCount, originY, stepX, magnitude ) {

    waveCount = waveCount || 1;
    originY = originY || 100;
    stepX = stepX || 100;
    magnitude = magnitude || 100;

    var incrementerX = 0;
    var fragments = [];

    // Set up the initial part of the SVG string
    var startingFragment = "M " + incrementerX + "," + originY + " C " + stepX + "," + ( originY - magnitude ) + " " + stepX + "," + ( originY + magnitude ) + " " + ( stepX * 2 ) + "," +  originY;

    fragments.push(startingFragment);

    // Prep the incrementer for fragment usage
    incrementerX = stepX * 3;

    // Add fragments
    for ( var i = 0; i < waveCount; i++ ) {
        var fragment = "S " + incrementerX + "," + ( originY + magnitude ) + " " + ( incrementerX + stepX ) + "," + originY;

        fragments.push(fragment);

        incrementerX += stepX * 2;
    }

    // Combine the start and fragments into a single string
    var pathString;

    for ( var j = 0; j < fragments.length; j++ ) {
        pathString += fragments[j];
    }

    // Return the compiled path string
    return pathString;
}