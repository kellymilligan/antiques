# a-better-touch-enabled-button

JS touch event binding for buttons that's better than a 'click':

- Avoids 300ms delay on click events
- Nice touch state hooks
- Cancels the touch if moved too far away, or if held for too long

_Note:_ 
- Element selection and event binding is only for example
- Current clientX and clientY values are setup Zepto style - where the touches/changedTouches array are direct children of the event object. In jQuery, you need to fetch these from e.originalEvent.touches or e.originalEvent.changedTouches instead.
