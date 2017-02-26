# Single input Penner easing functions
Functions adapted from Penner's equations, modified to only need a single parameter: a normalized value between 0 and 1. Super easy to apply to any normalized value:

```
var value = scrollTop / ( documentHeight - windowHeight ); // 0:1
var easedValue = EaseOutExpo( value );
``` 
