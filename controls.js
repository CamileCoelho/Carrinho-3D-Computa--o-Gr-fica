var Controls=function(e){"use strict";return e.addMouseHandler?e:(e.addMouseHandler=function(e,n,t,l){function u(e){e=window.event||e;var n=Math.max(-1,Math.min(1,e.wheelDelta||-e.detail));n<0&&l?l(n):t&&t(n),e.preventDefault()}function a(e){r=e.clientX,d=e.clientY,e.preventDefault()}function i(e){null!==r&&null!==d&&(n&&n(e.clientX-r,e.clientY-d),r=e.clientX,d=e.clientY,e.preventDefault())}function o(e){i.call(this,e),r=null,d=null,e.preventDefault()}var r=null,d=null;e.addEventListener("mousewheel",u),e.addEventListener("DOMMouseScroll",u),e.addEventListener("mousedown",a),e.addEventListener("mousemove",i),e.addEventListener("mouseup",o)},e)}(Controls||{});