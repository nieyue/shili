(function(e) {
    function u() {
        var n = i.getBoundingClientRect().width;
        n / t > 540 && (n = 540 * t),
        e.rem = n / 16,
        i.style.fontSize = e.rem + "px"
    }
    var t, n, r, i = document.documentElement,
    s = document.querySelector('meta[name="viewport"]');
    if (s) {
        var o = s.getAttribute("content").match(/initial\-scale=(["']?)([\d\.]+)\1?/);
        o && (n = parseFloat(o[2]), t = parseInt(1 / n))
    } else s = document.createElement("meta"),
    s.setAttribute("name", "viewport"),
    s.setAttribute("content", "width=device-width, initial-scale=0.5, user-scalable=no, minimal-ui"),
    i.firstElementChild.appendChild(s);
    e.addEventListener("resize",
    function() {
        clearTimeout(r),
        r = setTimeout(u, 300)
    },
    !1),
    e.addEventListener("pageshow",
    function(e) {
        e.persisted && (clearTimeout(r), r = setTimeout(u, 300))
    },
    !1),
    "complete" === document.readyState ? document.body.style.fontSize = 12 * t + "px": document.addEventListener("DOMContentLoaded",
    function() {
        document.body.style.fontSize = 12 * t + "px"
    },
    !1),
    u()
})(window);