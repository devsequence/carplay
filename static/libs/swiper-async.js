!function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : e.Swiper = t()
}(this, function() {
    "use strict";
    var e = "undefined" == typeof window ? {
        navigator: {
            userAgent: ""
        },
        location: {},
        history: {},
        addEventListener: function() {},
        removeEventListener: function() {},
        getComputedStyle: function() {
            return {}
        },
        Image: function() {},
        Date: function() {}
    } : window
        , u = e
        , l = function(e) {
        for (var t = 0; t < e.length; t += 1)
            this[t] = e[t];
        return this.length = e.length,
            this
    };
    function T(e, t) {
        var a = []
            , i = 0;
        if (e && !t && e instanceof l)
            return e;
        if (e)
            if ("string" == typeof e) {
                var s, n, r = e.trim();
                if (0 <= r.indexOf("<") && 0 <= r.indexOf(">")) {
                    var o = "div";
                    for (0 === r.indexOf("<li") && (o = "ul"),
                         0 === r.indexOf("<tr") && (o = "tbody"),
                         0 !== r.indexOf("<td") && 0 !== r.indexOf("<th") || (o = "tr"),
                         0 === r.indexOf("<tbody") && (o = "table"),
                         0 === r.indexOf("<option") && (o = "select"),
                             (n = document.createElement(o)).innerHTML = r,
                             i = 0; i < n.childNodes.length; i += 1)
                        a.push(n.childNodes[i])
                } else
                    for (s = t || "#" !== e[0] || e.match(/[ .<>:~]/) ? (t || document).querySelectorAll(e.trim()) : [document.getElementById(e.trim().split("#")[1])],
                             i = 0; i < s.length; i += 1)
                        s[i] && a.push(s[i])
            } else if (e.nodeType || e === window || e === document)
                a.push(e);
            else if (0 < e.length && e[0].nodeType)
                for (i = 0; i < e.length; i += 1)
                    a.push(e[i]);
        return new l(a)
    }
    function n(e) {
        for (var t = [], a = 0; a < e.length; a += 1)
            -1 === t.indexOf(e[a]) && t.push(e[a]);
        return t
    }
    T.fn = l.prototype,
        T.Class = l,
        T.Dom7 = l;
    "resize scroll".split(" ");
    var t = {
        addClass: function(e) {
            if (void 0 === e)
                return this;
            for (var t = e.split(" "), a = 0; a < t.length; a += 1)
                for (var i = 0; i < this.length; i += 1)
                    void 0 !== this[i].classList && this[i].classList.add(t[a]);
            return this
        },
        removeClass: function(e) {
            for (var t = e.split(" "), a = 0; a < t.length; a += 1)
                for (var i = 0; i < this.length; i += 1)
                    void 0 !== this[i].classList && this[i].classList.remove(t[a]);
            return this
        },
        hasClass: function(e) {
            return !!this[0] && this[0].classList.contains(e)
        },
        toggleClass: function(e) {
            for (var t = e.split(" "), a = 0; a < t.length; a += 1)
                for (var i = 0; i < this.length; i += 1)
                    void 0 !== this[i].classList && this[i].classList.toggle(t[a]);
            return this
        },
        attr: function(e, t) {
            var a = arguments;
            if (1 === arguments.length && "string" == typeof e)
                return this[0] ? this[0].getAttribute(e) : void 0;
            for (var i = 0; i < this.length; i += 1)
                if (2 === a.length)
                    this[i].setAttribute(e, t);
                else
                    for (var s in e)
                        this[i][s] = e[s],
                            this[i].setAttribute(s, e[s]);
            return this
        },
        removeAttr: function(e) {
            for (var t = 0; t < this.length; t += 1)
                this[t].removeAttribute(e);
            return this
        },
        data: function(e, t) {
            var a;
            if (void 0 !== t) {
                for (var i = 0; i < this.length; i += 1)
                    (a = this[i]).dom7ElementDataStorage || (a.dom7ElementDataStorage = {}),
                        a.dom7ElementDataStorage[e] = t;
                return this
            }
            if (a = this[0]) {
                if (a.dom7ElementDataStorage && e in a.dom7ElementDataStorage)
                    return a.dom7ElementDataStorage[e];
                var s = a.getAttribute("data-" + e);
                return s ? s : void 0
            }
        },
        transform: function(e) {
            for (var t = 0; t < this.length; t += 1) {
                var a = this[t].style;
                a.webkitTransform = e,
                    a.transform = e
            }
            return this
        },
        transition: function(e) {
            "string" != typeof e && (e += "ms");
            for (var t = 0; t < this.length; t += 1) {
                var a = this[t].style;
                a.webkitTransitionDuration = e,
                    a.transitionDuration = e
            }
            return this
        },
        on: function() {
            for (var e = [], t = arguments.length; t--; )
                e[t] = arguments[t];
            var a = e[0]
                , n = e[1]
                , r = e[2]
                , i = e[3];
            function s(e) {
                var t = e.target;
                if (t) {
                    var a = e.target.dom7EventData || [];
                    if (a.unshift(e),
                        T(t).is(n))
                        r.apply(t, a);
                    else
                        for (var i = T(t).parents(), s = 0; s < i.length; s += 1)
                            T(i[s]).is(n) && r.apply(i[s], a)
                }
            }
            function o(e) {
                var t = e && e.target && e.target.dom7EventData || [];
                t.unshift(e),
                    r.apply(this, t)
            }
            "function" == typeof e[1] && (a = e[0],
                r = e[1],
                i = e[2],
                n = void 0),
                i = i || !1;
            for (var l, d = a.split(" "), p = 0; p < this.length; p += 1) {
                var c = this[p];
                if (n)
                    for (l = 0; l < d.length; l += 1)
                        c.dom7LiveListeners || (c.dom7LiveListeners = []),
                            c.dom7LiveListeners.push({
                                type: a,
                                listener: r,
                                proxyListener: s
                            }),
                            c.addEventListener(d[l], s, i);
                else
                    for (l = 0; l < d.length; l += 1)
                        c.dom7Listeners || (c.dom7Listeners = []),
                            c.dom7Listeners.push({
                                type: a,
                                listener: r,
                                proxyListener: o
                            }),
                            c.addEventListener(d[l], o, i)
            }
            return this
        },
        off: function() {
            for (var e = [], t = arguments.length; t--; )
                e[t] = arguments[t];
            var a = e[0]
                , i = e[1]
                , s = e[2]
                , n = e[3];
            "function" == typeof e[1] && (a = e[0],
                s = e[1],
                n = e[2],
                i = void 0),
                n = n || !1;
            for (var r = a.split(" "), o = 0; o < r.length; o += 1)
                for (var l = 0; l < this.length; l += 1) {
                    var d = this[l];
                    if (i) {
                        if (d.dom7LiveListeners)
                            for (var p = 0; p < d.dom7LiveListeners.length; p += 1)
                                s ? d.dom7LiveListeners[p].listener === s && d.removeEventListener(r[o], d.dom7LiveListeners[p].proxyListener, n) : d.dom7LiveListeners[p].type === r[o] && d.removeEventListener(r[o], d.dom7LiveListeners[p].proxyListener, n)
                    } else if (d.dom7Listeners)
                        for (var c = 0; c < d.dom7Listeners.length; c += 1)
                            s ? d.dom7Listeners[c].listener === s && d.removeEventListener(r[o], d.dom7Listeners[c].proxyListener, n) : d.dom7Listeners[c].type === r[o] && d.removeEventListener(r[o], d.dom7Listeners[c].proxyListener, n)
                }
            return this
        },
        trigger: function() {
            for (var e = [], t = arguments.length; t--; )
                e[t] = arguments[t];
            for (var a = e[0].split(" "), i = e[1], s = 0; s < a.length; s += 1)
                for (var n = 0; n < this.length; n += 1) {
                    var r = void 0;
                    try {
                        r = new window.CustomEvent(a[s],{
                            detail: i,
                            bubbles: !0,
                            cancelable: !0
                        })
                    } catch (e) {
                        (r = document.createEvent("Event")).initEvent(a[s], !0, !0),
                            r.detail = i
                    }
                    this[n].dom7EventData = e.filter(function(e, t) {
                        return 0 < t
                    }),
                        this[n].dispatchEvent(r),
                        this[n].dom7EventData = [],
                        delete this[n].dom7EventData
                }
            return this
        },
        transitionEnd: function(t) {
            var a, i = ["webkitTransitionEnd", "transitionend"], s = this;
            function n(e) {
                if (e.target === this)
                    for (t.call(this, e),
                             a = 0; a < i.length; a += 1)
                        s.off(i[a], n)
            }
            if (t)
                for (a = 0; a < i.length; a += 1)
                    s.on(i[a], n);
            return this
        },
        outerWidth: function(e) {
            if (0 < this.length) {
                if (e) {
                    e = this.styles();
                    return this[0].offsetWidth + parseFloat(e.getPropertyValue("margin-right")) + parseFloat(e.getPropertyValue("margin-left"))
                }
                return this[0].offsetWidth
            }
            return null
        },
        outerHeight: function(e) {
            if (0 < this.length) {
                if (e) {
                    e = this.styles();
                    return this[0].offsetHeight + parseFloat(e.getPropertyValue("margin-top")) + parseFloat(e.getPropertyValue("margin-bottom"))
                }
                return this[0].offsetHeight
            }
            return null
        },
        offset: function() {
            if (0 < this.length) {
                var e = this[0]
                    , t = e.getBoundingClientRect()
                    , a = document.body
                    , i = e.clientTop || a.clientTop || 0
                    , s = e.clientLeft || a.clientLeft || 0
                    , a = e === window ? window.scrollY : e.scrollTop
                    , e = e === window ? window.scrollX : e.scrollLeft;
                return {
                    top: t.top + a - i,
                    left: t.left + e - s
                }
            }
            return null
        },
        css: function(e, t) {
            var a;
            if (1 === arguments.length) {
                if ("string" != typeof e) {
                    for (a = 0; a < this.length; a += 1)
                        for (var i in e)
                            this[a].style[i] = e[i];
                    return this
                }
                if (this[0])
                    return window.getComputedStyle(this[0], null).getPropertyValue(e)
            }
            if (2 !== arguments.length || "string" != typeof e)
                return this;
            for (a = 0; a < this.length; a += 1)
                this[a].style[e] = t;
            return this
        },
        each: function(e) {
            if (!e)
                return this;
            for (var t = 0; t < this.length; t += 1)
                if (!1 === e.call(this[t], t, this[t]))
                    return this;
            return this
        },
        html: function(e) {
            if (void 0 === e)
                return this[0] ? this[0].innerHTML : void 0;
            for (var t = 0; t < this.length; t += 1)
                this[t].innerHTML = e;
            return this
        },
        text: function(e) {
            if (void 0 === e)
                return this[0] ? this[0].textContent.trim() : null;
            for (var t = 0; t < this.length; t += 1)
                this[t].textContent = e;
            return this
        },
        is: function(e) {
            var t, a, i = this[0];
            if (!i || void 0 === e)
                return !1;
            if ("string" == typeof e) {
                if (i.matches)
                    return i.matches(e);
                if (i.webkitMatchesSelector)
                    return i.webkitMatchesSelector(e);
                if (i.msMatchesSelector)
                    return i.msMatchesSelector(e);
                for (t = T(e),
                         a = 0; a < t.length; a += 1)
                    if (t[a] === i)
                        return !0;
                return !1
            }
            if (e === document)
                return i === document;
            if (e === window)
                return i === window;
            if (e.nodeType || e instanceof l) {
                for (t = e.nodeType ? [e] : e,
                         a = 0; a < t.length; a += 1)
                    if (t[a] === i)
                        return !0;
                return !1
            }
            return !1
        },
        index: function() {
            var e, t = this[0];
            if (t) {
                for (e = 0; null !== (t = t.previousSibling); )
                    1 === t.nodeType && (e += 1);
                return e
            }
        },
        eq: function(e) {
            if (void 0 === e)
                return this;
            var t = this.length;
            return t - 1 < e ? new l([]) : e < 0 ? (t = t + e) < 0 ? new l([]) : new l([this[t]]) : new l([this[e]])
        },
        append: function() {
            for (var e = [], t = arguments.length; t--; )
                e[t] = arguments[t];
            for (var a = 0; a < e.length; a += 1)
                for (var i = e[a], s = 0; s < this.length; s += 1)
                    if ("string" == typeof i) {
                        var n = document.createElement("div");
                        for (n.innerHTML = i; n.firstChild; )
                            this[s].appendChild(n.firstChild)
                    } else if (i instanceof l)
                        for (var r = 0; r < i.length; r += 1)
                            this[s].appendChild(i[r]);
                    else
                        this[s].appendChild(i);
            return this
        },
        prepend: function(e) {
            for (var t, a = this, i = 0; i < this.length; i += 1)
                if ("string" == typeof e) {
                    var s = document.createElement("div");
                    for (s.innerHTML = e,
                             t = s.childNodes.length - 1; 0 <= t; --t)
                        a[i].insertBefore(s.childNodes[t], a[i].childNodes[0])
                } else if (e instanceof l)
                    for (t = 0; t < e.length; t += 1)
                        a[i].insertBefore(e[t], a[i].childNodes[0]);
                else
                    a[i].insertBefore(e, a[i].childNodes[0]);
            return this
        },
        next: function(e) {
            return 0 < this.length ? e ? this[0].nextElementSibling && T(this[0].nextElementSibling).is(e) ? new l([this[0].nextElementSibling]) : new l([]) : this[0].nextElementSibling ? new l([this[0].nextElementSibling]) : new l([]) : new l([])
        },
        nextAll: function(e) {
            var t = []
                , a = this[0];
            if (!a)
                return new l([]);
            for (; a.nextElementSibling; ) {
                var i = a.nextElementSibling;
                (!e || T(i).is(e)) && t.push(i),
                    a = i
            }
            return new l(t)
        },
        prev: function(e) {
            if (0 < this.length) {
                var t = this[0];
                return e ? t.previousElementSibling && T(t.previousElementSibling).is(e) ? new l([t.previousElementSibling]) : new l([]) : t.previousElementSibling ? new l([t.previousElementSibling]) : new l([])
            }
            return new l([])
        },
        prevAll: function(e) {
            var t = []
                , a = this[0];
            if (!a)
                return new l([]);
            for (; a.previousElementSibling; ) {
                var i = a.previousElementSibling;
                (!e || T(i).is(e)) && t.push(i),
                    a = i
            }
            return new l(t)
        },
        parent: function(e) {
            for (var t = [], a = 0; a < this.length; a += 1)
                null === this[a].parentNode || e && !T(this[a].parentNode).is(e) || t.push(this[a].parentNode);
            return T(n(t))
        },
        parents: function(e) {
            for (var t = [], a = 0; a < this.length; a += 1)
                for (var i = this[a].parentNode; i; )
                    e && !T(i).is(e) || t.push(i),
                        i = i.parentNode;
            return T(n(t))
        },
        closest: function(e) {
            var t = this;
            return void 0 === e ? new l([]) : t.is(e) ? t : t.parents(e).eq(0)
        },
        find: function(e) {
            for (var t = [], a = 0; a < this.length; a += 1)
                for (var i = this[a].querySelectorAll(e), s = 0; s < i.length; s += 1)
                    t.push(i[s]);
            return new l(t)
        },
        children: function(e) {
            for (var t = [], a = 0; a < this.length; a += 1)
                for (var i = this[a].childNodes, s = 0; s < i.length; s += 1)
                    e ? 1 === i[s].nodeType && T(i[s]).is(e) && t.push(i[s]) : 1 === i[s].nodeType && t.push(i[s]);
            return new l(n(t))
        },
        remove: function() {
            for (var e = 0; e < this.length; e += 1)
                this[e].parentNode && this[e].parentNode.removeChild(this[e]);
            return this
        },
        add: function() {
            for (var e = [], t = arguments.length; t--; )
                e[t] = arguments[t];
            for (var a = 0; a < e.length; a += 1)
                for (var i = T(e[a]), s = 0; s < i.length; s += 1)
                    this[this.length] = i[s],
                        this.length += 1;
            return this
        },
        styles: function() {
            return this[0] ? window.getComputedStyle(this[0], null) : {}
        }
    };
    Object.keys(t).forEach(function(e) {
        T.fn[e] = t[e]
    });
    var D = {
        deleteProps: function(e) {
            var t = e;
            Object.keys(t).forEach(function(e) {
                try {
                    t[e] = null
                } catch (e) {}
                try {
                    delete t[e]
                } catch (e) {}
            })
        },
        nextTick: function(e, t) {
            return void 0 === t && (t = 0),
                setTimeout(e, t)
        },
        now: function() {
            return Date.now()
        },
        getTranslate: function(e, t) {
            var a, i, s;
            void 0 === t && (t = "x");
            e = u.getComputedStyle(e, null);
            return u.WebKitCSSMatrix ? (6 < (i = e.transform || e.webkitTransform).split(",").length && (i = i.split(", ").map(function(e) {
                return e.replace(",", ".")
            }).join(", ")),
                s = new u.WebKitCSSMatrix("none" === i ? "" : i)) : a = (s = e.MozTransform || e.OTransform || e.MsTransform || e.msTransform || e.transform || e.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,")).toString().split(","),
            "x" === t && (i = u.WebKitCSSMatrix ? s.m41 : 16 === a.length ? parseFloat(a[12]) : parseFloat(a[4])),
            (i = "y" === t ? u.WebKitCSSMatrix ? s.m42 : 16 === a.length ? parseFloat(a[13]) : parseFloat(a[5]) : i) || 0
        },
        parseUrlQuery: function(e) {
            var t, a, i, s, n = {}, e = e || u.location.href;
            if ("string" == typeof e && e.length)
                for (s = (a = (e = -1 < e.indexOf("?") ? e.replace(/\S*\?/, "") : "").split("&").filter(function(e) {
                    return "" !== e
                })).length,
                         t = 0; t < s; t += 1)
                    i = a[t].replace(/#\S+/g, "").split("="),
                        n[decodeURIComponent(i[0])] = void 0 === i[1] ? void 0 : decodeURIComponent(i[1]) || "";
            return n
        },
        isObject: function(e) {
            return "object" == typeof e && null !== e && e.constructor && e.constructor === Object
        },
        extend: function() {
            for (var e = [], t = arguments.length; t--; )
                e[t] = arguments[t];
            for (var a = Object(e[0]), i = 1; i < e.length; i += 1) {
                var s = e[i];
                if (null != s)
                    for (var n = Object.keys(Object(s)), r = 0, o = n.length; r < o; r += 1) {
                        var l = n[r]
                            , d = Object.getOwnPropertyDescriptor(s, l);
                        void 0 !== d && d.enumerable && (D.isObject(a[l]) && D.isObject(s[l]) ? D.extend(a[l], s[l]) : !D.isObject(a[l]) && D.isObject(s[l]) ? (a[l] = {},
                            D.extend(a[l], s[l])) : a[l] = s[l])
                    }
            }
            return a
        }
    }
        , a = "undefined" == typeof document ? {
        addEventListener: function() {},
        removeEventListener: function() {},
        activeElement: {
            blur: function() {},
            nodeName: ""
        },
        querySelector: function() {
            return {}
        },
        querySelectorAll: function() {
            return []
        },
        createElement: function() {
            return {
                style: {},
                setAttribute: function() {},
                getElementsByTagName: function() {
                    return []
                }
            }
        },
        location: {
            hash: ""
        }
    } : document
        , h = a
        , O = {
        touch: u.Modernizr && !0 === u.Modernizr.touch || !!("ontouchstart"in u || u.DocumentTouch && h instanceof u.DocumentTouch),
        transforms3d: u.Modernizr && !0 === u.Modernizr.csstransforms3d || ("webkitPerspective"in (d = h.createElement("div").style) || "MozPerspective"in d || "OPerspective"in d || "MsPerspective"in d || "perspective"in d),
        flexbox: function() {
            for (var e = h.createElement("div").style, t = "alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient".split(" "), a = 0; a < t.length; a += 1)
                if (t[a]in e)
                    return !0;
            return !1
        }(),
        observer: "MutationObserver"in u || "WebkitMutationObserver"in u,
        passiveListener: function() {
            var e = !1;
            try {
                var t = Object.defineProperty({}, "passive", {
                    get: function() {
                        e = !0
                    }
                });
                u.addEventListener("testPassiveListener", null, t)
            } catch (e) {}
            return e
        }(),
        gestures: "ongesturestart"in u
    }
        , i = function(e) {
        var t = this;
        t.params = e = void 0 === e ? {} : e,
            t.eventsListeners = {},
        t.params && t.params.on && Object.keys(t.params.on).forEach(function(e) {
            t.on(e, t.params.on[e])
        })
    }
        , s = {
        components: {}
    };
    i.prototype.on = function(e, t) {
        var a = this;
        return "function" != typeof t || e.split(" ").forEach(function(e) {
            a.eventsListeners[e] || (a.eventsListeners[e] = []),
                a.eventsListeners[e].push(t)
        }),
            a
    }
        ,
        i.prototype.once = function(i, s) {
            var n = this;
            return "function" != typeof s ? n : n.on(i, function e() {
                for (var t = [], a = arguments.length; a--; )
                    t[a] = arguments[a];
                s.apply(n, t),
                    n.off(i, e)
            })
        }
        ,
        i.prototype.off = function(e, i) {
            var s = this;
            return e.split(" ").forEach(function(a) {
                void 0 === i ? s.eventsListeners[a] = [] : s.eventsListeners[a].forEach(function(e, t) {
                    e === i && s.eventsListeners[a].splice(t, 1)
                })
            }),
                s
        }
        ,
        i.prototype.emit = function() {
            for (var e = [], t = arguments.length; t--; )
                e[t] = arguments[t];
            var a, i, s = this, n = "string" == typeof e[0] || Array.isArray(e[0]) ? (a = e[0],
                i = e.slice(1, e.length),
                s) : (a = e[0].events,
                i = e[0].data,
            e[0].context || s);
            return (Array.isArray(a) ? a : a.split(" ")).forEach(function(e) {
                var t;
                s.eventsListeners[e] && (t = [],
                    s.eventsListeners[e].forEach(function(e) {
                        t.push(e)
                    }),
                    t.forEach(function(e) {
                        e.apply(n, i)
                    }))
            }),
                s
        }
        ,
        i.prototype.useModulesParams = function(t) {
            var a = this;
            a.modules && Object.keys(a.modules).forEach(function(e) {
                e = a.modules[e];
                e.params && D.extend(t, e.params)
            })
        }
        ,
        i.prototype.useModules = function(t) {
            void 0 === t && (t = {});
            var i = this;
            i.modules && Object.keys(i.modules).forEach(function(e) {
                var a = i.modules[e]
                    , e = t[e] || {};
                a.instance && Object.keys(a.instance).forEach(function(e) {
                    var t = a.instance[e];
                    i[e] = "function" == typeof t ? t.bind(i) : t
                }),
                a.on && i.on && Object.keys(a.on).forEach(function(e) {
                    i.on(e, a.on[e])
                }),
                a.create && a.create.bind(i)(e)
            })
        }
        ,
        s.components.set = function(e) {
            this.use && this.use(e)
        }
        ,
        i.installModule = function(t) {
            for (var e = [], a = arguments.length - 1; 0 < a--; )
                e[a] = arguments[a + 1];
            var i = this;
            i.prototype.modules || (i.prototype.modules = {});
            var s = t.name || Object.keys(i.prototype.modules).length + "_" + D.now();
            return (i.prototype.modules[s] = t).proto && Object.keys(t.proto).forEach(function(e) {
                i.prototype[e] = t.proto[e]
            }),
            t.static && Object.keys(t.static).forEach(function(e) {
                i[e] = t.static[e]
            }),
            t.install && t.install.apply(i, e),
                i
        }
        ,
        i.use = function(e) {
            for (var t = [], a = arguments.length - 1; 0 < a--; )
                t[a] = arguments[a + 1];
            var i = this;
            return Array.isArray(e) ? (e.forEach(function(e) {
                return i.installModule(e)
            }),
                i) : i.installModule.apply(i, [e].concat(t))
        }
        ,
        Object.defineProperties(i, s);
    function r() {
        var e = this
            , t = e.params
            , a = e.el
            , i = e.allowSlideNext
            , s = e.allowSlidePrev;
        a && 0 === a.offsetWidth || (t.breakpoints && e.setBreakpoint(),
            e.allowSlideNext = !0,
            e.allowSlidePrev = !0,
            e.updateSize(),
            e.updateSlides(),
            t.freeMode ? (a = Math.min(Math.max(e.translate, e.maxTranslate()), e.minTranslate()),
                e.setTranslate(a),
                e.updateActiveIndex(),
                e.updateSlidesClasses(),
            t.autoHeight && e.updateAutoHeight()) : (e.updateSlidesClasses(),
                ("auto" === t.slidesPerView || 1 < t.slidesPerView) && e.isEnd && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0)),
            e.allowSlidePrev = s,
            e.allowSlideNext = i)
    }
    var o, d, p, c, f = {
        updateSize: function() {
            var e = this
                , t = e.$el
                , a = void 0 !== e.params.width ? e.params.width : t[0].clientWidth
                , i = void 0 !== e.params.height ? e.params.height : t[0].clientHeight;
            0 === a && e.isHorizontal() || 0 === i && e.isVertical() || (a = a - parseInt(t.css("padding-left"), 10) - parseInt(t.css("padding-right"), 10),
                i = i - parseInt(t.css("padding-top"), 10) - parseInt(t.css("padding-bottom"), 10),
                D.extend(e, {
                    width: a,
                    height: i,
                    size: e.isHorizontal() ? a : i
                }))
        },
        updateSlides: function() {
            var e = this
                , t = e.params
                , a = e.$wrapperEl
                , i = e.size
                , s = e.rtl
                , n = e.wrongRTL
                , r = a.children("." + e.params.slideClass)
                , o = (e.virtual && t.virtual.enabled ? e.virtual.slides : r).length
                , l = []
                , d = []
                , p = []
                , c = t.slidesOffsetBefore;
            "function" == typeof c && (c = t.slidesOffsetBefore.call(e));
            var u = t.slidesOffsetAfter;
            "function" == typeof u && (u = t.slidesOffsetAfter.call(e));
            var h, f = o, m = e.snapGrid.length, v = e.snapGrid.length, g = t.spaceBetween, b = -c, w = 0, y = 0;
            if (void 0 !== i) {
                "string" == typeof g && 0 <= g.indexOf("%") && (g = parseFloat(g.replace("%", "")) / 100 * i),
                    e.virtualSize = -g,
                    s ? r.css({
                        marginLeft: "",
                        marginTop: ""
                    }) : r.css({
                        marginRight: "",
                        marginBottom: ""
                    }),
                1 < t.slidesPerColumn && (h = Math.floor(o / t.slidesPerColumn) === o / e.params.slidesPerColumn ? o : Math.ceil(o / t.slidesPerColumn) * t.slidesPerColumn,
                "auto" !== t.slidesPerView && "row" === t.slidesPerColumnFill && (h = Math.max(h, t.slidesPerView * t.slidesPerColumn)));
                for (var x = t.slidesPerColumn, E = h / x, T = E - (t.slidesPerColumn * E - o), S = 0; S < o; S += 1) {
                    var C, M, z, P = 0, k = r.eq(S);
                    1 < t.slidesPerColumn && (z = M = C = void 0,
                        "column" === t.slidesPerColumnFill ? (z = S - (M = Math.floor(S / x)) * x,
                        (T < M || M === T && z === x - 1) && x <= (z += 1) && (z = 0,
                            M += 1),
                            k.css({
                                "-webkit-box-ordinal-group": C = M + z * h / x,
                                "-moz-box-ordinal-group": C,
                                "-ms-flex-order": C,
                                "-webkit-order": C,
                                order: C
                            })) : M = S - (z = Math.floor(S / E)) * E,
                        k.css("margin-" + (e.isHorizontal() ? "top" : "left"), 0 !== z && t.spaceBetween && t.spaceBetween + "px").attr("data-swiper-column", M).attr("data-swiper-row", z)),
                    "none" !== k.css("display") && ("auto" === t.slidesPerView ? (P = e.isHorizontal() ? k.outerWidth(!0) : k.outerHeight(!0),
                    t.roundLengths && (P = Math.floor(P))) : (P = (i - (t.slidesPerView - 1) * g) / t.slidesPerView,
                    t.roundLengths && (P = Math.floor(P)),
                    r[S] && (e.isHorizontal() ? r[S].style.width = P + "px" : r[S].style.height = P + "px")),
                    r[S] && (r[S].swiperSlideSize = P),
                        p.push(P),
                        t.centeredSlides ? (b = b + P / 2 + w / 2 + g,
                        0 === w && 0 !== S && (b = b - i / 2 - g),
                        0 === S && (b = b - i / 2 - g),
                        Math.abs(b) < .001 && (b = 0),
                        y % t.slidesPerGroup == 0 && l.push(b),
                            d.push(b)) : (y % t.slidesPerGroup == 0 && l.push(b),
                            d.push(b),
                            b = b + P + g),
                        e.virtualSize += P + g,
                        w = P,
                        y += 1)
                }
                if (e.virtualSize = Math.max(e.virtualSize, i) + u,
                s && n && ("slide" === t.effect || "coverflow" === t.effect) && a.css({
                    width: e.virtualSize + t.spaceBetween + "px"
                }),
                O.flexbox && !t.setWrapperSize || (e.isHorizontal() ? a.css({
                    width: e.virtualSize + t.spaceBetween + "px"
                }) : a.css({
                    height: e.virtualSize + t.spaceBetween + "px"
                })),
                1 < t.slidesPerColumn && (e.virtualSize = (P + t.spaceBetween) * h,
                    e.virtualSize = Math.ceil(e.virtualSize / t.slidesPerColumn) - t.spaceBetween,
                    e.isHorizontal() ? a.css({
                        width: e.virtualSize + t.spaceBetween + "px"
                    }) : a.css({
                        height: e.virtualSize + t.spaceBetween + "px"
                    }),
                    t.centeredSlides)) {
                    for (var $ = [], I = 0; I < l.length; I += 1)
                        l[I] < e.virtualSize + l[0] && $.push(l[I]);
                    l = $
                }
                if (!t.centeredSlides) {
                    $ = [];
                    for (var L = 0; L < l.length; L += 1)
                        l[L] <= e.virtualSize - i && $.push(l[L]);
                    l = $,
                    1 < Math.floor(e.virtualSize - i) - Math.floor(l[l.length - 1]) && l.push(e.virtualSize - i)
                }
                0 === l.length && (l = [0]),
                0 !== t.spaceBetween && (e.isHorizontal() ? s ? r.css({
                    marginLeft: g + "px"
                }) : r.css({
                    marginRight: g + "px"
                }) : r.css({
                    marginBottom: g + "px"
                })),
                    D.extend(e, {
                        slides: r,
                        snapGrid: l,
                        slidesGrid: d,
                        slidesSizesGrid: p
                    }),
                o !== f && e.emit("slidesLengthChange"),
                l.length !== m && e.emit("snapGridLengthChange"),
                d.length !== v && e.emit("slidesGridLengthChange"),
                (t.watchSlidesProgress || t.watchSlidesVisibility) && e.updateSlidesOffset()
            }
        },
        updateAutoHeight: function() {
            var e, t, a = this, i = [], s = 0;
            if ("auto" !== a.params.slidesPerView && 1 < a.params.slidesPerView)
                for (e = 0; e < Math.ceil(a.params.slidesPerView); e += 1) {
                    var n = a.activeIndex + e;
                    if (n > a.slides.length)
                        break;
                    i.push(a.slides.eq(n)[0])
                }
            else
                i.push(a.slides.eq(a.activeIndex)[0]);
            for (e = 0; e < i.length; e += 1)
                void 0 !== i[e] && (s = s < (t = i[e].offsetHeight) ? t : s);
            s && a.$wrapperEl.css("height", s + "px")
        },
        updateSlidesOffset: function() {
            for (var e = this.slides, t = 0; t < e.length; t += 1)
                e[t].swiperSlideOffset = this.isHorizontal() ? e[t].offsetLeft : e[t].offsetTop
        },
        updateSlidesProgress: function(e) {
            void 0 === e && (e = this.translate || 0);
            var t = this
                , a = t.params
                , i = t.slides
                , s = t.rtl;
            if (0 !== i.length) {
                void 0 === i[0].swiperSlideOffset && t.updateSlidesOffset();
                var n = s ? e : -e;
                i.removeClass(a.slideVisibleClass);
                for (var r = 0; r < i.length; r += 1) {
                    var o, l, d = i[r], p = (n + (a.centeredSlides ? t.minTranslate() : 0) - d.swiperSlideOffset) / (d.swiperSlideSize + a.spaceBetween);
                    a.watchSlidesVisibility && (l = (o = -(n - d.swiperSlideOffset)) + t.slidesSizesGrid[r],
                    (0 <= o && o < t.size || 0 < l && l <= t.size || o <= 0 && l >= t.size) && i.eq(r).addClass(a.slideVisibleClass)),
                        d.progress = s ? -p : p
                }
            }
        },
        updateProgress: function(e) {
            void 0 === e && (e = this.translate || 0);
            var t = this
                , a = t.params
                , i = t.maxTranslate() - t.minTranslate()
                , s = t.progress
                , n = t.isBeginning
                , r = n
                , o = l = t.isEnd
                , l = 0 == i ? n = !(s = 0) : (n = (s = (e - t.minTranslate()) / i) <= 0,
            1 <= s);
            D.extend(t, {
                progress: s,
                isBeginning: n,
                isEnd: l
            }),
            (a.watchSlidesProgress || a.watchSlidesVisibility) && t.updateSlidesProgress(e),
            n && !r && t.emit("reachBeginning toEdge"),
            l && !o && t.emit("reachEnd toEdge"),
            (r && !n || o && !l) && t.emit("fromEdge"),
                t.emit("progress", s)
        },
        updateSlidesClasses: function() {
            var e = this
                , t = e.slides
                , a = e.params
                , i = e.$wrapperEl
                , s = e.activeIndex
                , n = e.realIndex
                , r = e.virtual && a.virtual.enabled;
            t.removeClass(a.slideActiveClass + " " + a.slideNextClass + " " + a.slidePrevClass + " " + a.slideDuplicateActiveClass + " " + a.slideDuplicateNextClass + " " + a.slideDuplicatePrevClass),
                (s = r ? e.$wrapperEl.find("." + a.slideClass + '[data-swiper-slide-index="' + s + '"]') : t.eq(s)).addClass(a.slideActiveClass),
            a.loop && (s.hasClass(a.slideDuplicateClass) ? i.children("." + a.slideClass + ":not(." + a.slideDuplicateClass + ')[data-swiper-slide-index="' + n + '"]') : i.children("." + a.slideClass + "." + a.slideDuplicateClass + '[data-swiper-slide-index="' + n + '"]')).addClass(a.slideDuplicateActiveClass);
            n = s.nextAll("." + a.slideClass).eq(0).addClass(a.slideNextClass);
            a.loop && 0 === n.length && (n = t.eq(0)).addClass(a.slideNextClass);
            s = s.prevAll("." + a.slideClass).eq(0).addClass(a.slidePrevClass);
            a.loop && 0 === s.length && (s = t.eq(-1)).addClass(a.slidePrevClass),
            a.loop && ((n.hasClass(a.slideDuplicateClass) ? i.children("." + a.slideClass + ":not(." + a.slideDuplicateClass + ')[data-swiper-slide-index="' + n.attr("data-swiper-slide-index") + '"]') : i.children("." + a.slideClass + "." + a.slideDuplicateClass + '[data-swiper-slide-index="' + n.attr("data-swiper-slide-index") + '"]')).addClass(a.slideDuplicateNextClass),
                (s.hasClass(a.slideDuplicateClass) ? i.children("." + a.slideClass + ":not(." + a.slideDuplicateClass + ')[data-swiper-slide-index="' + s.attr("data-swiper-slide-index") + '"]') : i.children("." + a.slideClass + "." + a.slideDuplicateClass + '[data-swiper-slide-index="' + s.attr("data-swiper-slide-index") + '"]')).addClass(a.slideDuplicatePrevClass))
        },
        updateActiveIndex: function(e) {
            var t = this
                , a = t.rtl ? t.translate : -t.translate
                , i = t.slidesGrid
                , s = t.snapGrid
                , n = t.params
                , r = t.activeIndex
                , o = t.realIndex
                , l = t.snapIndex
                , d = e;
            if (void 0 === d) {
                for (var p = 0; p < i.length; p += 1)
                    void 0 !== i[p + 1] ? a >= i[p] && a < i[p + 1] - (i[p + 1] - i[p]) / 2 ? d = p : a >= i[p] && a < i[p + 1] && (d = p + 1) : a >= i[p] && (d = p);
                n.normalizeSlideIndex && (d < 0 || void 0 === d) && (d = 0)
            }
            (n = 0 <= s.indexOf(a) ? s.indexOf(a) : Math.floor(d / n.slidesPerGroup)) >= s.length && (n = s.length - 1),
                d !== r ? (s = parseInt(t.slides.eq(d).attr("data-swiper-slide-index") || d, 10),
                    D.extend(t, {
                        snapIndex: n,
                        realIndex: s,
                        previousIndex: r,
                        activeIndex: d
                    }),
                    t.emit("activeIndexChange"),
                    t.emit("snapIndexChange"),
                o !== s && t.emit("realIndexChange"),
                    t.emit("slideChange")) : n !== l && (t.snapIndex = n,
                    t.emit("snapIndexChange"))
        },
        updateClickedSlide: function(e) {
            var t = this
                , a = t.params
                , i = T(e.target).closest("." + a.slideClass)[0]
                , s = !1;
            if (i)
                for (var n = 0; n < t.slides.length; n += 1)
                    t.slides[n] === i && (s = !0);
            if (!i || !s)
                return t.clickedSlide = void 0,
                    void (t.clickedIndex = void 0);
            t.clickedSlide = i,
                t.virtual && t.params.virtual.enabled ? t.clickedIndex = parseInt(T(i).attr("data-swiper-slide-index"), 10) : t.clickedIndex = T(i).index(),
            a.slideToClickedSlide && void 0 !== t.clickedIndex && t.clickedIndex !== t.activeIndex && t.slideToClickedSlide()
        }
    }, m = {
        getTranslate: function(e) {
            void 0 === e && (e = this.isHorizontal() ? "x" : "y");
            var t = this.params
                , a = this.rtl
                , i = this.translate
                , s = this.$wrapperEl;
            if (t.virtualTranslate)
                return a ? -i : i;
            e = D.getTranslate(s[0], e);
            return (e = a ? -e : e) || 0
        },
        setTranslate: function(e, t) {
            var a = this
                , i = a.rtl
                , s = a.params
                , n = a.$wrapperEl
                , r = a.progress
                , o = 0
                , l = 0;
            a.isHorizontal() ? o = i ? -e : e : l = e,
            s.roundLengths && (o = Math.floor(o),
                l = Math.floor(l)),
            s.virtualTranslate || (O.transforms3d ? n.transform("translate3d(" + o + "px, " + l + "px, 0px)") : n.transform("translate(" + o + "px, " + l + "px)")),
                a.translate = a.isHorizontal() ? o : l;
            l = a.maxTranslate() - a.minTranslate();
            (0 == l ? 0 : (e - a.minTranslate()) / l) !== r && a.updateProgress(e),
                a.emit("setTranslate", a.translate, t)
        },
        minTranslate: function() {
            return -this.snapGrid[0]
        },
        maxTranslate: function() {
            return -this.snapGrid[this.snapGrid.length - 1]
        }
    }, v = {
        setTransition: function(e, t) {
            this.$wrapperEl.transition(e),
                this.emit("setTransition", e, t)
        },
        transitionStart: function(e) {
            void 0 === e && (e = !0);
            var t = this
                , a = t.activeIndex
                , i = t.params
                , s = t.previousIndex;
            i.autoHeight && t.updateAutoHeight(),
                t.emit("transitionStart"),
            e && a !== s && (t.emit("slideChangeTransitionStart"),
                s < a ? t.emit("slideNextTransitionStart") : t.emit("slidePrevTransitionStart"))
        },
        transitionEnd: function(e) {
            void 0 === e && (e = !0);
            var t = this
                , a = t.activeIndex
                , i = t.previousIndex;
            t.animating = !1,
                t.setTransition(0),
                t.emit("transitionEnd"),
            e && a !== i && (t.emit("slideChangeTransitionEnd"),
                i < a ? t.emit("slideNextTransitionEnd") : t.emit("slidePrevTransitionEnd"))
        }
    }, S = {
        isSafari: 0 <= (p = u.navigator.userAgent.toLowerCase()).indexOf("safari") && p.indexOf("chrome") < 0 && p.indexOf("android") < 0,
        isUiWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(u.navigator.userAgent),
        ie: u.navigator.pointerEnabled || u.navigator.msPointerEnabled,
        ieTouch: u.navigator.msPointerEnabled && 1 < u.navigator.msMaxTouchPoints || u.navigator.pointerEnabled && 1 < u.navigator.maxTouchPoints,
        lteIE9: ((c = h.createElement("div")).innerHTML = "\x3c!--[if lte IE 9]><i></i><![endif]--\x3e",
        1 === c.getElementsByTagName("i").length)
    }, g = {
        slideTo: function(e, t, a, i) {
            void 0 === t && (t = this.params.speed),
            void 0 === a && (a = !0);
            var s = this
                , n = e = void 0 === e ? 0 : e;
            n < 0 && (n = 0);
            var r = s.params
                , o = s.snapGrid
                , l = s.slidesGrid
                , d = s.previousIndex
                , p = s.activeIndex
                , c = s.rtl
                , u = s.$wrapperEl
                , e = Math.floor(n / r.slidesPerGroup);
            e >= o.length && (e = o.length - 1),
            (p || r.initialSlide || 0) === (d || 0) && a && s.emit("beforeSlideChangeStart");
            var h = -o[e];
            if (s.updateProgress(h),
                r.normalizeSlideIndex)
                for (var f = 0; f < l.length; f += 1)
                    -Math.floor(100 * h) >= Math.floor(100 * l[f]) && (n = f);
            return !(!s.allowSlideNext && h < s.translate && h < s.minTranslate()) && (!(!s.allowSlidePrev && h > s.translate && h > s.maxTranslate() && (p || 0) !== n) && (c && -h === s.translate || !c && h === s.translate ? (s.updateActiveIndex(n),
            r.autoHeight && s.updateAutoHeight(),
                s.updateSlidesClasses(),
            "slide" !== r.effect && s.setTranslate(h),
                !1) : (0 === t || S.lteIE9 ? (s.setTransition(0),
                s.setTranslate(h),
                s.updateActiveIndex(n),
                s.updateSlidesClasses(),
                s.emit("beforeTransitionStart", t, i),
                s.transitionStart(a),
                s.transitionEnd(a)) : (s.setTransition(t),
                s.setTranslate(h),
                s.updateActiveIndex(n),
                s.updateSlidesClasses(),
                s.emit("beforeTransitionStart", t, i),
                s.transitionStart(a),
            s.animating || (s.animating = !0,
                u.transitionEnd(function() {
                    s && s.transitionEnd(a)
                }))),
                !0)))
        },
        slideNext: function(e, t, a) {
            void 0 === e && (e = this.params.speed),
            void 0 === t && (t = !0);
            var i = this
                , s = i.params
                , n = i.animating;
            return s.loop ? !n && (i.loopFix(),
                i._clientLeft = i.$wrapperEl[0].clientLeft,
                i.slideTo(i.activeIndex + s.slidesPerGroup, e, t, a)) : i.slideTo(i.activeIndex + s.slidesPerGroup, e, t, a)
        },
        slidePrev: function(e, t, a) {
            void 0 === e && (e = this.params.speed),
            void 0 === t && (t = !0);
            var i = this
                , s = i.params
                , n = i.animating;
            return s.loop ? !n && (i.loopFix(),
                i._clientLeft = i.$wrapperEl[0].clientLeft,
                i.slideTo(i.activeIndex - 1, e, t, a)) : i.slideTo(i.activeIndex - 1, e, t, a)
        },
        slideReset: function(e, t, a) {
            void 0 === e && (e = this.params.speed);
            return this.slideTo(this.activeIndex, e, t = void 0 === t ? !0 : t, a)
        },
        slideToClickedSlide: function() {
            var e, t = this, a = t.params, i = t.$wrapperEl, s = "auto" === a.slidesPerView ? t.slidesPerViewDynamic() : a.slidesPerView, n = t.clickedIndex;
            a.loop ? t.animating || (e = parseInt(T(t.clickedSlide).attr("data-swiper-slide-index"), 10),
                a.centeredSlides ? n < t.loopedSlides - s / 2 || n > t.slides.length - t.loopedSlides + s / 2 ? (t.loopFix(),
                    n = i.children("." + a.slideClass + '[data-swiper-slide-index="' + e + '"]:not(.' + a.slideDuplicateClass + ")").eq(0).index(),
                    D.nextTick(function() {
                        t.slideTo(n)
                    })) : t.slideTo(n) : n > t.slides.length - s ? (t.loopFix(),
                    n = i.children("." + a.slideClass + '[data-swiper-slide-index="' + e + '"]:not(.' + a.slideDuplicateClass + ")").eq(0).index(),
                    D.nextTick(function() {
                        t.slideTo(n)
                    })) : t.slideTo(n)) : t.slideTo(n)
        }
    }, b = {
        loopCreate: function() {
            var i = this
                , e = i.params
                , t = i.$wrapperEl;
            t.children("." + e.slideClass + "." + e.slideDuplicateClass).remove();
            var s = t.children("." + e.slideClass);
            if (e.loopFillGroupWithBlank) {
                var a = e.slidesPerGroup - s.length % e.slidesPerGroup;
                if (a !== e.slidesPerGroup) {
                    for (var n = 0; n < a; n += 1) {
                        var r = T(h.createElement("div")).addClass(e.slideClass + " " + e.slideBlankClass);
                        t.append(r)
                    }
                    s = t.children("." + e.slideClass)
                }
            }
            "auto" !== e.slidesPerView || e.loopedSlides || (e.loopedSlides = s.length),
                i.loopedSlides = parseInt(e.loopedSlides || e.slidesPerView, 10),
                i.loopedSlides += e.loopAdditionalSlides,
            i.loopedSlides > s.length && (i.loopedSlides = s.length);
            var o = []
                , l = [];
            s.each(function(e, t) {
                var a = T(t);
                e < i.loopedSlides && l.push(t),
                e < s.length && e >= s.length - i.loopedSlides && o.push(t),
                    a.attr("data-swiper-slide-index", e)
            });
            for (var d = 0; d < l.length; d += 1)
                t.append(T(l[d].cloneNode(!0)).addClass(e.slideDuplicateClass));
            for (var p = o.length - 1; 0 <= p; --p)
                t.prepend(T(o[p].cloneNode(!0)).addClass(e.slideDuplicateClass))
        },
        loopFix: function() {
            var e, t = this, a = t.params, i = t.activeIndex, s = t.slides, n = t.loopedSlides, r = t.allowSlidePrev, o = t.allowSlideNext;
            t.allowSlidePrev = !0,
                t.allowSlideNext = !0,
                i < n ? (e = s.length - 3 * n + i,
                    t.slideTo(e += n, 0, !1, !0)) : ("auto" === a.slidesPerView && 2 * n <= i || i > s.length - 2 * a.slidesPerView) && (e = -s.length + i + n,
                    t.slideTo(e += n, 0, !1, !0)),
                t.allowSlidePrev = r,
                t.allowSlideNext = o
        },
        loopDestroy: function() {
            var e = this.$wrapperEl
                , t = this.params
                , a = this.slides;
            e.children("." + t.slideClass + "." + t.slideDuplicateClass).remove(),
                a.removeAttr("data-swiper-slide-index")
        }
    }, w = {
        setGrabCursor: function(e) {
            var t;
            !O.touch && this.params.simulateTouch && ((t = this.el).style.cursor = "move",
                t.style.cursor = e ? "-webkit-grabbing" : "-webkit-grab",
                t.style.cursor = e ? "-moz-grabbin" : "-moz-grab",
                t.style.cursor = e ? "grabbing" : "grab")
        },
        unsetGrabCursor: function() {
            O.touch || (this.el.style.cursor = "")
        }
    }, y = {
        appendSlide: function(e) {
            var t = this
                , a = t.$wrapperEl
                , i = t.params;
            if (i.loop && t.loopDestroy(),
            "object" == typeof e && "length"in e)
                for (var s = 0; s < e.length; s += 1)
                    e[s] && a.append(e[s]);
            else
                a.append(e);
            i.loop && t.loopCreate(),
            i.observer && O.observer || t.update()
        },
        prependSlide: function(e) {
            var t = this
                , a = t.params
                , i = t.$wrapperEl
                , s = t.activeIndex;
            a.loop && t.loopDestroy();
            var n = s + 1;
            if ("object" == typeof e && "length"in e) {
                for (var r = 0; r < e.length; r += 1)
                    e[r] && i.prepend(e[r]);
                n = s + e.length
            } else
                i.prepend(e);
            a.loop && t.loopCreate(),
            a.observer && O.observer || t.update(),
                t.slideTo(n, 0, !1)
        },
        removeSlide: function(e) {
            var t = this
                , a = t.params
                , i = t.$wrapperEl
                , s = t.activeIndex;
            a.loop && (t.loopDestroy(),
                t.slides = i.children("." + a.slideClass));
            var n, r = s;
            if ("object" == typeof e && "length"in e) {
                for (var o = 0; o < e.length; o += 1)
                    n = e[o],
                    t.slides[n] && t.slides.eq(n).remove(),
                    n < r && --r;
                r = Math.max(r, 0)
            } else
                t.slides[n = e] && t.slides.eq(n).remove(),
                n < r && --r,
                    r = Math.max(r, 0);
            a.loop && t.loopCreate(),
            a.observer && O.observer || t.update(),
                a.loop ? t.slideTo(r + t.loopedSlides, 0, !1) : t.slideTo(r, 0, !1)
        },
        removeAllSlides: function() {
            for (var e = [], t = 0; t < this.slides.length; t += 1)
                e.push(t);
            this.removeSlide(e)
        }
    }, x = (o = u.navigator.userAgent,
        e = {
            ios: !1,
            android: !1,
            androidChrome: !1,
            desktop: !1,
            windows: !1,
            iphone: !1,
            ipod: !1,
            ipad: !1,
            cordova: u.cordova || u.phonegap,
            phonegap: u.cordova || u.phonegap
        },
        a = o.match(/(Windows Phone);?[\s\/]+([\d.]+)?/),
        d = o.match(/(Android);?[\s\/]+([\d.]+)?/),
        s = o.match(/(iPad).*OS\s([\d_]+)/),
        p = o.match(/(iPod)(.*OS\s([\d_]+))?/),
        c = !s && o.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
    a && (e.os = "windows",
        e.osVersion = a[2],
        e.windows = !0),
    d && !a && (e.os = "android",
        e.osVersion = d[2],
        e.android = !0,
        e.androidChrome = 0 <= o.toLowerCase().indexOf("chrome")),
    (s || c || p) && (e.os = "ios",
        e.ios = !0),
    c && !p && (e.osVersion = c[2].replace(/_/g, "."),
        e.iphone = !0),
    s && (e.osVersion = s[2].replace(/_/g, "."),
        e.ipad = !0),
    p && (e.osVersion = p[3] ? p[3].replace(/_/g, ".") : null,
        e.iphone = !0),
    e.ios && e.osVersion && 0 <= o.indexOf("Version/") && "10" === e.osVersion.split(".")[0] && (e.osVersion = o.toLowerCase().split("version/")[1].split(" ")[0]),
        e.desktop = !(e.os || e.android || e.webView),
        e.webView = (c || s || p) && o.match(/.*AppleWebKit(?!.*Safari)/i),
    e.os && "ios" === e.os && (s = e.osVersion.split("."),
        o = h.querySelector('meta[name="viewport"]'),
        e.minimalUi = !e.webView && (p || c) && (7 == +s[0] ? 1 <= +s[1] : 7 < +s[0]) && o && 0 <= o.getAttribute("content").indexOf("minimal-ui")),
        e.pixelRatio = u.devicePixelRatio || 1,
        e);
    var E = {
        init: !0,
        direction: "horizontal",
        touchEventsTarget: "container",
        initialSlide: 0,
        speed: 300,
        iOSEdgeSwipeDetection: !1,
        iOSEdgeSwipeThreshold: 20,
        freeMode: !1,
        freeModeMomentum: !0,
        freeModeMomentumRatio: 1,
        freeModeMomentumBounce: !0,
        freeModeMomentumBounceRatio: 1,
        freeModeMomentumVelocityRatio: 1,
        freeModeSticky: !1,
        freeModeMinimumVelocity: .02,
        autoHeight: !1,
        setWrapperSize: !1,
        virtualTranslate: !1,
        effect: "slide",
        breakpoints: void 0,
        spaceBetween: 0,
        slidesPerView: 1,
        slidesPerColumn: 1,
        slidesPerColumnFill: "column",
        slidesPerGroup: 1,
        centeredSlides: !1,
        slidesOffsetBefore: 0,
        slidesOffsetAfter: 0,
        normalizeSlideIndex: !0,
        roundLengths: !1,
        touchRatio: 1,
        touchAngle: 45,
        simulateTouch: !0,
        shortSwipes: !0,
        longSwipes: !0,
        longSwipesRatio: .5,
        longSwipesMs: 300,
        followFinger: !0,
        allowTouchMove: !0,
        threshold: 0,
        touchMoveStopPropagation: !0,
        touchReleaseOnEdges: !1,
        uniqueNavElements: !0,
        resistance: !0,
        resistanceRatio: .85,
        watchSlidesProgress: !1,
        watchSlidesVisibility: !1,
        grabCursor: !1,
        preventClicks: !0,
        preventClicksPropagation: !0,
        slideToClickedSlide: !1,
        preloadImages: !0,
        updateOnImagesReady: !0,
        loop: !1,
        loopAdditionalSlides: 0,
        loopedSlides: null,
        loopFillGroupWithBlank: !1,
        allowSlidePrev: !0,
        allowSlideNext: !0,
        swipeHandler: null,
        noSwiping: !0,
        noSwipingClass: "swiper-no-swiping",
        passiveListeners: !0,
        containerModifierClass: "swiper-container-",
        slideClass: "swiper-slide",
        slideBlankClass: "swiper-slide-invisible-blank",
        slideActiveClass: "swiper-slide-active",
        slideDuplicateActiveClass: "swiper-slide-duplicate-active",
        slideVisibleClass: "swiper-slide-visible",
        slideDuplicateClass: "swiper-slide-duplicate",
        slideNextClass: "swiper-slide-next",
        slideDuplicateNextClass: "swiper-slide-duplicate-next",
        slidePrevClass: "swiper-slide-prev",
        slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
        wrapperClass: "swiper-wrapper",
        runCallbacksOnInit: !0
    }
        , C = {
        update: f,
        translate: m,
        transition: v,
        slide: g,
        loop: b,
        grabCursor: w,
        manipulation: y,
        events: {
            attachEvents: function() {
                var e = this
                    , t = e.params
                    , a = e.touchEvents
                    , i = e.el
                    , s = e.wrapperEl;
                e.onTouchStart = function(e) {
                    var t, a = this, i = a.touchEventsData, s = a.params, n = a.touches, r = e;
                    r.originalEvent && (r = r.originalEvent),
                        i.isTouchEvent = "touchstart" === r.type,
                    !i.isTouchEvent && "which"in r && 3 === r.which || (s.noSwiping && T(r).closest("." + s.noSwipingClass)[0] ? a.allowClick = !0 : s.swipeHandler && !T(r).closest(s.swipeHandler)[0] || (n.currentX = ("touchstart" === r.type ? r.targetTouches[0] : r).pageX,
                        n.currentY = ("touchstart" === r.type ? r.targetTouches[0] : r).pageY,
                        t = n.currentX,
                        e = n.currentY,
                    x.ios && s.iOSEdgeSwipeDetection && t <= s.iOSEdgeSwipeThreshold || (D.extend(i, {
                        isTouched: !0,
                        isMoved: !1,
                        allowTouchCallbacks: !0,
                        isScrolling: void 0,
                        startMoving: void 0
                    }),
                        n.startX = t,
                        n.startY = e,
                        i.touchStartTime = D.now(),
                        a.allowClick = !0,
                        a.updateSize(),
                        a.swipeDirection = void 0,
                    0 < s.threshold && (i.allowThresholdMove = !1),
                    "touchstart" !== r.type && (s = !0,
                    T(r.target).is(i.formElements) && (s = !1),
                    h.activeElement && T(h.activeElement).is(i.formElements) && h.activeElement.blur(),
                    s && r.preventDefault()),
                        a.emit("touchStart", r))))
                }
                    .bind(e),
                    e.onTouchMove = function(e) {
                        var t = this
                            , a = t.touchEventsData
                            , i = t.params
                            , s = t.touches
                            , n = t.rtl
                            , r = e;
                        if (r.originalEvent && (r = r.originalEvent),
                        !a.isTouchEvent || "mousemove" !== r.type) {
                            var o = ("touchmove" === r.type ? r.targetTouches[0] : r).pageX
                                , e = ("touchmove" === r.type ? r.targetTouches[0] : r).pageY;
                            if (r.preventedByNestedSwiper)
                                return s.startX = o,
                                    void (s.startY = e);
                            if (!t.allowTouchMove)
                                return t.allowClick = !1,
                                    void (a.isTouched && (D.extend(s, {
                                        startX: o,
                                        startY: e,
                                        currentX: o,
                                        currentY: e
                                    }),
                                        a.touchStartTime = D.now()));
                            if (a.isTouchEvent && i.touchReleaseOnEdges && !i.loop)
                                if (t.isVertical()) {
                                    if (s.currentY < s.startY && t.translate <= t.maxTranslate() || s.currentY > s.startY && t.translate >= t.minTranslate())
                                        return
                                } else if (s.currentX < s.startX && t.translate <= t.maxTranslate() || s.currentX > s.startX && t.translate >= t.minTranslate())
                                    return;
                            if (a.isTouchEvent && h.activeElement && r.target === h.activeElement && T(r.target).is(a.formElements))
                                return a.isMoved = !0,
                                    void (t.allowClick = !1);
                            if (a.allowTouchCallbacks && t.emit("touchMove", r),
                                !(r.targetTouches && 1 < r.targetTouches.length))
                                if (s.currentX = ("touchmove" === r.type ? r.targetTouches[0] : r).pageX,
                                    s.currentY = ("touchmove" === r.type ? r.targetTouches[0] : r).pageY,
                                void 0 === a.isScrolling && (t.isHorizontal() && s.currentY === s.startY || t.isVertical() && s.currentX === s.startX ? a.isScrolling = !1 : (l = 180 * Math.atan2(Math.abs(s.currentY - s.startY), Math.abs(s.currentX - s.startX)) / Math.PI,
                                    a.isScrolling = t.isHorizontal() ? l > i.touchAngle : 90 - l > i.touchAngle)),
                                a.isScrolling && t.emit("touchMoveOpposite", r),
                                "undefined" == typeof startMoving && (s.currentX === s.startX && s.currentY === s.startY || (a.startMoving = !0)),
                                    a.isTouched)
                                    if (a.isScrolling)
                                        a.isTouched = !1;
                                    else if (a.startMoving) {
                                        t.allowClick = !1,
                                            r.preventDefault(),
                                        i.touchMoveStopPropagation && !i.nested && r.stopPropagation(),
                                        a.isMoved || (i.loop && t.loopFix(),
                                            a.startTranslate = t.getTranslate(),
                                            t.setTransition(0),
                                        t.animating && t.$wrapperEl.trigger("webkitTransitionEnd transitionend"),
                                            a.allowMomentumBounce = !1,
                                        !i.grabCursor || !0 !== t.allowSlideNext && !0 !== t.allowSlidePrev || t.setGrabCursor(!0),
                                            t.emit("sliderFirstMove", r)),
                                            t.emit("sliderMove", r),
                                            a.isMoved = !0;
                                        e = t.isHorizontal() ? s.currentX - s.startX : s.currentY - s.startY;
                                        s.diff = e,
                                            e *= i.touchRatio,
                                            t.swipeDirection = 0 < (e = n ? -e : e) ? "prev" : "next",
                                            a.currentTranslate = e + a.startTranslate;
                                        var l = !0
                                            , n = i.resistanceRatio;
                                        if (i.touchReleaseOnEdges && (n = 0),
                                            0 < e && a.currentTranslate > t.minTranslate() ? (l = !1,
                                            i.resistance && (a.currentTranslate = t.minTranslate() - 1 + Math.pow(-t.minTranslate() + a.startTranslate + e, n))) : e < 0 && a.currentTranslate < t.maxTranslate() && (l = !1,
                                            i.resistance && (a.currentTranslate = t.maxTranslate() + 1 - Math.pow(t.maxTranslate() - a.startTranslate - e, n))),
                                        l && (r.preventedByNestedSwiper = !0),
                                        !t.allowSlideNext && "next" === t.swipeDirection && a.currentTranslate < a.startTranslate && (a.currentTranslate = a.startTranslate),
                                        !t.allowSlidePrev && "prev" === t.swipeDirection && a.currentTranslate > a.startTranslate && (a.currentTranslate = a.startTranslate),
                                        0 < i.threshold) {
                                            if (!(Math.abs(e) > i.threshold || a.allowThresholdMove))
                                                return void (a.currentTranslate = a.startTranslate);
                                            if (!a.allowThresholdMove)
                                                return a.allowThresholdMove = !0,
                                                    s.startX = s.currentX,
                                                    s.startY = s.currentY,
                                                    a.currentTranslate = a.startTranslate,
                                                    void (s.diff = t.isHorizontal() ? s.currentX - s.startX : s.currentY - s.startY)
                                        }
                                        i.followFinger && ((i.freeMode || i.watchSlidesProgress || i.watchSlidesVisibility) && (t.updateActiveIndex(),
                                            t.updateSlidesClasses()),
                                        i.freeMode && (0 === a.velocities.length && a.velocities.push({
                                            position: s[t.isHorizontal() ? "startX" : "startY"],
                                            time: a.touchStartTime
                                        }),
                                            a.velocities.push({
                                                position: s[t.isHorizontal() ? "currentX" : "currentY"],
                                                time: D.now()
                                            })),
                                            t.updateProgress(a.currentTranslate),
                                            t.setTranslate(a.currentTranslate))
                                    }
                        }
                    }
                        .bind(e),
                    e.onTouchEnd = function(e) {
                        var t = this
                            , a = t.touchEventsData
                            , i = t.params
                            , s = t.touches
                            , n = t.rtl
                            , r = t.$wrapperEl
                            , o = t.slidesGrid
                            , l = t.snapGrid
                            , d = e;
                        if (d.originalEvent && (d = d.originalEvent),
                        a.allowTouchCallbacks && t.emit("touchEnd", d),
                            a.allowTouchCallbacks = !1,
                            a.isTouched) {
                            i.grabCursor && a.isMoved && a.isTouched && (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) && t.setGrabCursor(!1);
                            var p, c = D.now(), e = c - a.touchStartTime;
                            if (t.allowClick && (t.updateClickedSlide(d),
                                t.emit("tap", d),
                            e < 300 && 300 < c - a.lastClickTime && (a.clickTimeout && clearTimeout(a.clickTimeout),
                                a.clickTimeout = D.nextTick(function() {
                                    t && t.emit("click", d)
                                }, 300)),
                            e < 300 && c - a.lastClickTime < 300 && (a.clickTimeout && clearTimeout(a.clickTimeout),
                                t.emit("doubleTap", d))),
                                a.lastClickTime = D.now(),
                                D.nextTick(function() {
                                    t && (t.allowClick = !0)
                                }),
                            !a.isTouched || !a.isMoved || !t.swipeDirection || 0 === s.diff || a.currentTranslate === a.startTranslate)
                                return a.isTouched = !1,
                                    void (a.isMoved = !1);
                            if (a.isTouched = !1,
                                a.isMoved = !1,
                                p = i.followFinger ? n ? t.translate : -t.translate : -a.currentTranslate,
                                i.freeMode)
                                if (p < -t.minTranslate())
                                    t.slideTo(t.activeIndex);
                                else if (p > -t.maxTranslate())
                                    t.slides.length < l.length ? t.slideTo(l.length - 1) : t.slideTo(t.slides.length - 1);
                                else {
                                    if (i.freeModeMomentum) {
                                        1 < a.velocities.length ? (v = a.velocities.pop(),
                                            h = a.velocities.pop(),
                                            u = v.position - h.position,
                                            h = v.time - h.time,
                                            t.velocity = u / h,
                                            t.velocity /= 2,
                                        Math.abs(t.velocity) < i.freeModeMinimumVelocity && (t.velocity = 0),
                                        (150 < h || 300 < D.now() - v.time) && (t.velocity = 0)) : t.velocity = 0,
                                            t.velocity *= i.freeModeMomentumVelocityRatio,
                                            a.velocities.length = 0;
                                        var u = 1e3 * i.freeModeMomentumRatio
                                            , h = t.velocity * u
                                            , f = t.translate + h;
                                        n && (f = -f);
                                        var m, v = !1, h = 20 * Math.abs(t.velocity) * i.freeModeMomentumBounceRatio;
                                        if (f < t.maxTranslate())
                                            i.freeModeMomentumBounce ? (f + t.maxTranslate() < -h && (f = t.maxTranslate() - h),
                                                m = t.maxTranslate(),
                                                a.allowMomentumBounce = v = !0) : f = t.maxTranslate();
                                        else if (f > t.minTranslate())
                                            i.freeModeMomentumBounce ? (f - t.minTranslate() > h && (f = t.minTranslate() + h),
                                                m = t.minTranslate(),
                                                a.allowMomentumBounce = v = !0) : f = t.minTranslate();
                                        else if (i.freeModeSticky) {
                                            for (var g, b = 0; b < l.length; b += 1)
                                                if (l[b] > -f) {
                                                    g = b;
                                                    break
                                                }
                                            f = Math.abs(l[g] - f) < Math.abs(l[g - 1] - f) || "next" === t.swipeDirection ? l[g] : l[g - 1],
                                            n || (f = -f)
                                        }
                                        if (0 !== t.velocity)
                                            u = n ? Math.abs((-f - t.translate) / t.velocity) : Math.abs((f - t.translate) / t.velocity);
                                        else if (i.freeModeSticky)
                                            return void t.slideReset();
                                        i.freeModeMomentumBounce && v ? (t.updateProgress(m),
                                            t.setTransition(u),
                                            t.setTranslate(f),
                                            t.transitionStart(),
                                            t.animating = !0,
                                            r.transitionEnd(function() {
                                                t && a.allowMomentumBounce && (t.emit("momentumBounce"),
                                                    t.setTransition(i.speed),
                                                    t.setTranslate(m),
                                                    r.transitionEnd(function() {
                                                        t && t.transitionEnd()
                                                    }))
                                            })) : t.velocity ? (t.updateProgress(f),
                                            t.setTransition(u),
                                            t.setTranslate(f),
                                            t.transitionStart(),
                                        t.animating || (t.animating = !0,
                                            r.transitionEnd(function() {
                                                t && t.transitionEnd()
                                            }))) : t.updateProgress(f),
                                            t.updateActiveIndex(),
                                            t.updateSlidesClasses()
                                    }
                                    (!i.freeModeMomentum || e >= i.longSwipesMs) && (t.updateProgress(),
                                        t.updateActiveIndex(),
                                        t.updateSlidesClasses())
                                }
                            else {
                                for (var w = 0, y = t.slidesSizesGrid[0], x = 0; x < o.length; x += i.slidesPerGroup)
                                    void 0 !== o[x + i.slidesPerGroup] ? p >= o[x] && p < o[x + i.slidesPerGroup] && (y = o[(w = x) + i.slidesPerGroup] - o[x]) : p >= o[x] && (w = x,
                                        y = o[o.length - 1] - o[o.length - 2]);
                                u = (p - o[w]) / y;
                                e > i.longSwipesMs ? i.longSwipes ? ("next" === t.swipeDirection && (u >= i.longSwipesRatio ? t.slideTo(w + i.slidesPerGroup) : t.slideTo(w)),
                                "prev" === t.swipeDirection && (u > 1 - i.longSwipesRatio ? t.slideTo(w + i.slidesPerGroup) : t.slideTo(w))) : t.slideTo(t.activeIndex) : i.shortSwipes ? ("next" === t.swipeDirection && t.slideTo(w + i.slidesPerGroup),
                                "prev" === t.swipeDirection && t.slideTo(w)) : t.slideTo(t.activeIndex)
                            }
                        }
                    }
                        .bind(e),
                    e.onClick = function(e) {
                        this.allowClick || (this.params.preventClicks && e.preventDefault(),
                        this.params.preventClicksPropagation && this.animating && (e.stopPropagation(),
                            e.stopImmediatePropagation()))
                    }
                        .bind(e);
                var n = "container" === t.touchEventsTarget ? i : s
                    , i = !!t.nested;
                S.ie ? (n.addEventListener(a.start, e.onTouchStart, !1),
                    (O.touch ? n : h).addEventListener(a.move, e.onTouchMove, i),
                    (O.touch ? n : h).addEventListener(a.end, e.onTouchEnd, !1)) : (O.touch && (s = !("onTouchStart" !== a.start || !O.passiveListener || !t.passiveListeners) && {
                    passive: !0,
                    capture: !1
                },
                    n.addEventListener(a.start, e.onTouchStart, s),
                    n.addEventListener(a.move, e.onTouchMove, i),
                    n.addEventListener(a.end, e.onTouchEnd, s)),
                (t.simulateTouch && !x.ios && !x.android || t.simulateTouch && !O.touch && x.ios) && (n.addEventListener("mousedown", e.onTouchStart, !1),
                    h.addEventListener("mousemove", e.onTouchMove, i),
                    h.addEventListener("mouseup", e.onTouchEnd, !1))),
                (t.preventClicks || t.preventClicksPropagation) && n.addEventListener("click", e.onClick, !0),
                    e.on("resize observerUpdate", r)
            },
            detachEvents: function() {
                var e = this
                    , t = e.params
                    , a = e.touchEvents
                    , i = e.el
                    , s = e.wrapperEl
                    , n = "container" === t.touchEventsTarget ? i : s
                    , i = !!t.nested;
                S.ie ? (n.removeEventListener(a.start, e.onTouchStart, !1),
                    (O.touch ? n : h).removeEventListener(a.move, e.onTouchMove, i),
                    (O.touch ? n : h).removeEventListener(a.end, e.onTouchEnd, !1)) : (O.touch && (s = !("onTouchStart" !== a.start || !O.passiveListener || !t.passiveListeners) && {
                    passive: !0,
                    capture: !1
                },
                    n.removeEventListener(a.start, e.onTouchStart, s),
                    n.removeEventListener(a.move, e.onTouchMove, i),
                    n.removeEventListener(a.end, e.onTouchEnd, s)),
                (t.simulateTouch && !x.ios && !x.android || t.simulateTouch && !O.touch && x.ios) && (n.removeEventListener("mousedown", e.onTouchStart, !1),
                    h.removeEventListener("mousemove", e.onTouchMove, i),
                    h.removeEventListener("mouseup", e.onTouchEnd, !1))),
                (t.preventClicks || t.preventClicksPropagation) && n.removeEventListener("click", e.onClick, !0),
                    e.off("resize observerUpdate", r)
            }
        },
        breakpoints: {
            setBreakpoint: function() {
                var e = this
                    , t = e.activeIndex
                    , a = e.loopedSlides;
                void 0 === a && (a = 0);
                var i, s = e.params, n = s.breakpoints;
                !n || n && 0 === Object.keys(n).length || (i = e.getBreakpoint(n)) && e.currentBreakpoint !== i && (n = i in n ? n[i] : e.originalParams,
                    s = s.loop && n.slidesPerView !== s.slidesPerView,
                    D.extend(e.params, n),
                    D.extend(e, {
                        allowTouchMove: e.params.allowTouchMove,
                        allowSlideNext: e.params.allowSlideNext,
                        allowSlidePrev: e.params.allowSlidePrev
                    }),
                    e.currentBreakpoint = i,
                s && (t = t - a,
                    e.loopDestroy(),
                    e.loopCreate(),
                    e.updateSlides(),
                    e.slideTo(t + a, 0, !1)))
            },
            getBreakpoint: function(e) {
                if (e) {
                    var t = !1
                        , a = [];
                    Object.keys(e).forEach(function(e) {
                        a.push(e)
                    }),
                        a.sort(function(e, t) {
                            return parseInt(e, 10) > parseInt(t, 10)
                        });
                    for (var i = 0; i < a.length; i += 1) {
                        var s = a[i];
                        s >= u.innerWidth && !t && (t = s)
                    }
                    return t || "max"
                }
            }
        },
        classes: {
            addClasses: function() {
                var t = this.classNames
                    , a = this.params
                    , e = this.rtl
                    , i = this.$el
                    , s = [];
                s.push(a.direction),
                a.freeMode && s.push("free-mode"),
                O.flexbox || s.push("no-flexbox"),
                a.autoHeight && s.push("autoheight"),
                e && s.push("rtl"),
                1 < a.slidesPerColumn && s.push("multirow"),
                x.android && s.push("android"),
                x.ios && s.push("ios"),
                (u.navigator.pointerEnabled || u.navigator.msPointerEnabled) && s.push("wp8-" + a.direction),
                    s.forEach(function(e) {
                        t.push(a.containerModifierClass + e)
                    }),
                    i.addClass(t.join(" "))
            },
            removeClasses: function() {
                var e = this.$el
                    , t = this.classNames;
                e.removeClass(t.join(" "))
            }
        },
        images: {
            loadImage: function(e, t, a, i, s, n) {
                function r() {
                    n && n()
                }
                (!e.complete || !s) && t ? ((s = new u.Image).onload = r,
                    s.onerror = r,
                i && (s.sizes = i),
                a && (s.srcset = a),
                t && (s.src = t)) : r()
            },
            preloadImages: function() {
                var e = this;
                function t() {
                    null != e && e && (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1),
                    e.imagesLoaded === e.imagesToLoad.length && (e.params.updateOnImagesReady && e.update(),
                        e.emit("imagesReady")))
                }
                e.imagesToLoad = e.$el.find("img");
                for (var a = 0; a < e.imagesToLoad.length; a += 1) {
                    var i = e.imagesToLoad[a];
                    e.loadImage(i, i.currentSrc || i.getAttribute("src"), i.srcset || i.getAttribute("srcset"), i.sizes || i.getAttribute("sizes"), !0, t)
                }
            }
        }
    }
        , M = {}
        , z = function(l) {
        function d() {
            for (var e, a, t = [], i = arguments.length; i--; )
                t[i] = arguments[i];
            a = 1 === t.length && t[0].constructor && t[0].constructor === Object ? t[0] : (e = t[0],
                t[1]),
                a = D.extend({}, a = a || {}),
            e && !a.el && (a.el = e),
                l.call(this, a),
                Object.keys(C).forEach(function(t) {
                    Object.keys(C[t]).forEach(function(e) {
                        d.prototype[e] || (d.prototype[e] = C[t][e])
                    })
                });
            var s = this;
            Object.keys(s.modules).forEach(function(e) {
                var t = s.modules[e];
                t.params && (e = Object.keys(t.params)[0],
                "object" == typeof (t = t.params[e]) && e in a && "enabled"in t && (!0 === a[e] && (a[e] = {
                    enabled: !0
                }),
                "object" != typeof a[e] || "enabled"in a[e] || (a[e].enabled = !0),
                a[e] || (a[e] = {
                    enabled: !1
                })))
            });
            var n = D.extend({}, E);
            s.useModulesParams(n),
                s.params = D.extend({}, n, M, a),
                s.originalParams = D.extend({}, s.params),
                s.passedParams = D.extend({}, a);
            var r = T(s.params.el);
            if (e = r[0]) {
                if (1 < r.length) {
                    var o = [];
                    return r.each(function(e, t) {
                        t = D.extend({}, a, {
                            el: t
                        });
                        o.push(new d(t))
                    }),
                        o
                }
                e.swiper = s,
                    r.data("swiper", s);
                n = r.children("." + s.params.wrapperClass);
                return D.extend(s, {
                    $el: r,
                    el: e,
                    $wrapperEl: n,
                    wrapperEl: n[0],
                    classNames: [],
                    slides: T(),
                    slidesGrid: [],
                    snapGrid: [],
                    slidesSizesGrid: [],
                    isHorizontal: function() {
                        return "horizontal" === s.params.direction
                    },
                    isVertical: function() {
                        return "vertical" === s.params.direction
                    },
                    rtl: "horizontal" === s.params.direction && ("rtl" === e.dir.toLowerCase() || "rtl" === r.css("direction")),
                    wrongRTL: "-webkit-box" === n.css("display"),
                    activeIndex: 0,
                    realIndex: 0,
                    isBeginning: !0,
                    isEnd: !1,
                    translate: 0,
                    progress: 0,
                    velocity: 0,
                    animating: !1,
                    allowSlideNext: s.params.allowSlideNext,
                    allowSlidePrev: s.params.allowSlidePrev,
                    touchEvents: (r = ["touchstart", "touchmove", "touchend"],
                        n = ["mousedown", "mousemove", "mouseup"],
                        u.navigator.pointerEnabled ? n = ["pointerdown", "pointermove", "pointerup"] : u.navigator.msPointerEnabled && (n = ["MSPointerDown", "MsPointerMove", "MsPointerUp"]),
                        {
                            start: (O.touch || !s.params.simulateTouch ? r : n)[0],
                            move: (O.touch || !s.params.simulateTouch ? r : n)[1],
                            end: (O.touch || !s.params.simulateTouch ? r : n)[2]
                        }),
                    touchEventsData: {
                        isTouched: void 0,
                        isMoved: void 0,
                        allowTouchCallbacks: void 0,
                        touchStartTime: void 0,
                        isScrolling: void 0,
                        currentTranslate: void 0,
                        startTranslate: void 0,
                        allowThresholdMove: void 0,
                        formElements: "input, select, textarea, button, video",
                        lastClickTime: D.now(),
                        clickTimeout: void 0,
                        velocities: [],
                        allowMomentumBounce: void 0,
                        isTouchEvent: void 0,
                        startMoving: void 0
                    },
                    allowClick: !0,
                    allowTouchMove: s.params.allowTouchMove,
                    touches: {
                        startX: 0,
                        startY: 0,
                        currentX: 0,
                        currentY: 0,
                        diff: 0
                    },
                    imagesToLoad: [],
                    imagesLoaded: 0
                }),
                    s.useModules(),
                s.params.init && s.init(),
                    s
            }
        }
        l && (d.__proto__ = l),
            d.prototype = Object.create(l && l.prototype);
        var e = {
            extendedDefaults: {},
            defaults: {},
            Class: {},
            $: {}
        };
        return (d.prototype.constructor = d).prototype.slidesPerViewDynamic = function() {
            var e = this
                , t = e.params
                , a = e.slides
                , i = e.slidesGrid
                , s = e.size
                , n = e.activeIndex
                , r = 1;
            if (t.centeredSlides) {
                for (var o, l = a[n].swiperSlideSize, d = n + 1; d < a.length; d += 1)
                    a[d] && !o && (r += 1,
                    s < (l += a[d].swiperSlideSize) && (o = !0));
                for (var p = n - 1; 0 <= p; --p)
                    a[p] && !o && (r += 1,
                    s < (l += a[p].swiperSlideSize) && (o = !0))
            } else
                for (var c = n + 1; c < a.length; c += 1)
                    i[c] - i[n] < s && (r += 1);
            return r
        }
            ,
            d.prototype.update = function() {
                var e, t = this;
                function a() {
                    e = Math.min(Math.max(t.translate, t.maxTranslate()), t.minTranslate()),
                        t.setTranslate(e),
                        t.updateActiveIndex(),
                        t.updateSlidesClasses()
                }
                t && (t.updateSize(),
                    t.updateSlides(),
                    t.updateProgress(),
                    t.updateSlidesClasses(),
                    t.params.freeMode ? (a(),
                    t.params.autoHeight && t.updateAutoHeight()) : (("auto" === t.params.slidesPerView || 1 < t.params.slidesPerView) && t.isEnd && !t.params.centeredSlides ? t.slideTo(t.slides.length - 1, 0, !1, !0) : t.slideTo(t.activeIndex, 0, !1, !0)) || a(),
                    t.emit("update"))
            }
            ,
            d.prototype.init = function() {
                var e = this;
                e.initialized || (e.emit("beforeInit"),
                e.params.breakpoints && e.setBreakpoint(),
                    e.addClasses(),
                e.params.loop && e.loopCreate(),
                    e.updateSize(),
                    e.updateSlides(),
                e.params.grabCursor && e.setGrabCursor(),
                e.params.preloadImages && e.preloadImages(),
                    e.params.loop ? e.slideTo(e.params.initialSlide + e.loopedSlides, 0, e.params.runCallbacksOnInit) : e.slideTo(e.params.initialSlide, 0, e.params.runCallbacksOnInit),
                    e.attachEvents(),
                    e.initialized = !0,
                    e.emit("init"))
            }
            ,
            d.prototype.destroy = function(e, t) {
                void 0 === e && (e = !0),
                void 0 === t && (t = !0);
                var a = this
                    , i = a.params
                    , s = a.$el
                    , n = a.$wrapperEl
                    , r = a.slides;
                a.emit("beforeDestroy"),
                    a.initialized = !1,
                    a.detachEvents(),
                i.loop && a.loopDestroy(),
                t && (a.removeClasses(),
                    s.removeAttr("style"),
                    n.removeAttr("style"),
                r && r.length && r.removeClass([i.slideVisibleClass, i.slideActiveClass, i.slideNextClass, i.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index").removeAttr("data-swiper-column").removeAttr("data-swiper-row")),
                    a.emit("destroy"),
                    Object.keys(a.eventsListeners).forEach(function(e) {
                        a.off(e)
                    }),
                !1 !== e && (a.$el[0].swiper = null,
                    a.$el.data("swiper", null),
                    D.deleteProps(a),
                    a = null)
            }
            ,
            d.extendDefaults = function(e) {
                D.extend(M, e)
            }
            ,
            e.extendedDefaults.get = function() {
                return M
            }
            ,
            e.defaults.get = function() {
                return E
            }
            ,
            e.Class.get = function() {
                return l
            }
            ,
            e.$.get = function() {
                return T
            }
            ,
            Object.defineProperties(d, e),
            d
    }(i)
        , m = {
        name: "device",
        proto: {
            device: x
        },
        static: {
            device: x
        }
    }
        , v = {
        name: "support",
        proto: {
            support: O
        },
        static: {
            support: O
        }
    }
        , g = {
        name: "browser",
        proto: {
            browser: S
        },
        static: {
            browser: S
        }
    }
        , b = {
        name: "resize",
        create: function() {
            var e = this;
            D.extend(e, {
                resize: {
                    resizeHandler: function() {
                        e && e.initialized && (e.emit("beforeResize"),
                            e.emit("resize"))
                    },
                    orientationChangeHandler: function() {
                        e && e.initialized && e.emit("orientationchange")
                    }
                }
            })
        },
        on: {
            init: function() {
                u.addEventListener("resize", this.resize.resizeHandler),
                    u.addEventListener("orientationchange", this.resize.orientationChangeHandler)
            },
            destroy: function() {
                u.removeEventListener("resize", this.resize.resizeHandler),
                    u.removeEventListener("orientationchange", this.resize.orientationChangeHandler)
            }
        }
    }
        , P = {
        func: u.MutationObserver || u.WebkitMutationObserver,
        attach: function(e, t) {
            void 0 === t && (t = {});
            var a = this
                , i = new P.func(function(e) {
                    e.forEach(function(e) {
                        a.emit("observerUpdate", e)
                    })
                }
            );
            i.observe(e, {
                attributes: void 0 === t.attributes || t.attributes,
                childList: void 0 === t.childList || t.childList,
                characterData: void 0 === t.characterData || t.characterData
            }),
                a.observer.observers.push(i)
        },
        init: function() {
            var e = this;
            if (O.observer && e.params.observer) {
                if (e.params.observeParents)
                    for (var t = e.$el.parents(), a = 0; a < t.length; a += 1)
                        e.observer.attach(t[a]);
                e.observer.attach(e.$el[0], {
                    childList: !1
                }),
                    e.observer.attach(e.$wrapperEl[0], {
                        attributes: !1
                    })
            }
        },
        destroy: function() {
            this.observer.observers.forEach(function(e) {
                e.disconnect()
            }),
                this.observer.observers = []
        }
    }
        , w = {
        name: "observer",
        params: {
            observer: !1,
            observeParents: !1
        },
        create: function() {
            D.extend(this, {
                observer: {
                    init: P.init.bind(this),
                    attach: P.attach.bind(this),
                    destroy: P.destroy.bind(this),
                    observers: []
                }
            })
        },
        on: {
            init: function() {
                this.observer.init()
            },
            destroy: function() {
                this.observer.destroy()
            }
        }
    }
        , k = {
        update: function(e) {
            var t = this
                , a = t.params
                , i = a.slidesPerView
                , s = a.slidesPerGroup
                , n = a.centeredSlides
                , r = t.virtual
                , o = r.from
                , l = r.to
                , d = r.slides
                , p = r.slidesGrid
                , c = r.renderSlide
                , u = r.offset;
            t.updateActiveIndex();
            var a = t.activeIndex || 0
                , r = t.rtl && t.isHorizontal() ? "right" : t.isHorizontal() ? "left" : "top"
                , s = n ? (m = Math.floor(i / 2) + s,
            Math.floor(i / 2) + s) : (m = i + (s - 1),
                s)
                , h = Math.max((a || 0) - s, 0)
                , f = Math.min((a || 0) + m, d.length - 1)
                , m = (t.slidesGrid[h] || 0) - (t.slidesGrid[0] || 0);
            function v() {
                t.updateSlides(),
                    t.updateProgress(),
                    t.updateSlidesClasses(),
                t.lazy && t.params.lazy.enabled && t.lazy.load()
            }
            if (D.extend(t.virtual, {
                from: h,
                to: f,
                offset: m,
                slidesGrid: t.slidesGrid
            }),
            o === h && l === f && !e)
                return t.slidesGrid !== p && m !== u && t.slides.css(r, m + "px"),
                    void t.updateProgress();
            if (t.params.virtual.renderExternal)
                return t.params.virtual.renderExternal.call(t, {
                    offset: m,
                    from: h,
                    to: f,
                    slides: function() {
                        for (var e = [], t = h; t <= f; t += 1)
                            e.push(d[t]);
                        return e
                    }()
                }),
                    void v();
            var g = []
                , b = [];
            if (e)
                t.$wrapperEl.find("." + t.params.slideClass).remove();
            else
                for (var w = o; w <= l; w += 1)
                    (w < h || f < w) && t.$wrapperEl.find("." + t.params.slideClass + '[data-swiper-slide-index="' + w + '"]').remove();
            for (var y = 0; y < d.length; y += 1)
                h <= y && y <= f && (void 0 === l || e ? b.push(y) : (l < y && b.push(y),
                y < o && g.push(y)));
            b.forEach(function(e) {
                t.$wrapperEl.append(c(d[e], e))
            }),
                g.sort(function(e, t) {
                    return e < t
                }).forEach(function(e) {
                    t.$wrapperEl.prepend(c(d[e], e))
                }),
                t.$wrapperEl.children(".swiper-slide").css(r, m + "px"),
                v()
        },
        renderSlide: function(e, t) {
            var a = this
                , i = a.params.virtual;
            if (i.cache && a.virtual.cache[t])
                return a.virtual.cache[t];
            e = i.renderSlide ? T(i.renderSlide.call(a, e, t)) : T('<div class="' + a.params.slideClass + '" data-swiper-slide-index="' + t + '">' + e + "</div>");
            return e.attr("data-swiper-slide-index") || e.attr("data-swiper-slide-index", t),
            i.cache && (a.virtual.cache[t] = e),
                e
        },
        appendSlide: function(e) {
            this.virtual.slides.push(e),
                this.virtual.update(!0)
        },
        prependSlide: function(e) {
            var t, a, i = this;
            i.virtual.slides.unshift(e),
            i.params.virtual.cache && (t = i.virtual.cache,
                a = {},
                Object.keys(t).forEach(function(e) {
                    a[e + 1] = t[e]
                }),
                i.virtual.cache = a),
                i.virtual.update(!0),
                i.slideNext(0)
        }
    }
        , y = {
        name: "virtual",
        params: {
            virtual: {
                enabled: !1,
                slides: [],
                cache: !0,
                renderSlide: null,
                renderExternal: null
            }
        },
        create: function() {
            var e = this;
            D.extend(e, {
                virtual: {
                    update: k.update.bind(e),
                    appendSlide: k.appendSlide.bind(e),
                    prependSlide: k.prependSlide.bind(e),
                    renderSlide: k.renderSlide.bind(e),
                    slides: e.params.virtual.slides,
                    cache: {}
                }
            })
        },
        on: {
            beforeInit: function() {
                var e = this;
                e.params.virtual.enabled && (e.classNames.push(e.params.containerModifierClass + "virtual"),
                    D.extend(e.params, {
                        watchSlidesProgress: !0
                    }),
                    e.virtual.update())
            },
            setTranslate: function() {
                this.params.virtual.enabled && this.virtual.update()
            }
        }
    }
        , $ = {
        handle: function(e) {
            var t = this
                , a = e
                , i = (a = a.originalEvent ? a.originalEvent : a).keyCode || a.charCode;
            if (!t.allowSlideNext && (t.isHorizontal() && 39 === i || t.isVertical() && 40 === i))
                return !1;
            if (!t.allowSlidePrev && (t.isHorizontal() && 37 === i || t.isVertical() && 38 === i))
                return !1;
            if (!(a.shiftKey || a.altKey || a.ctrlKey || a.metaKey || h.activeElement && h.activeElement.nodeName && ("input" === h.activeElement.nodeName.toLowerCase() || "textarea" === h.activeElement.nodeName.toLowerCase()))) {
                if (37 === i || 39 === i || 38 === i || 40 === i) {
                    var s = !1;
                    if (0 < t.$el.parents("." + t.params.slideClass).length && 0 === t.$el.parents("." + t.params.slideActiveClass).length)
                        return;
                    var n = u.pageXOffset
                        , r = u.pageYOffset
                        , o = u.innerWidth
                        , l = u.innerHeight
                        , e = t.$el.offset();
                    t.rtl && (e.left -= t.$el[0].scrollLeft);
                    for (var d = [[e.left, e.top], [e.left + t.width, e.top], [e.left, e.top + t.height], [e.left + t.width, e.top + t.height]], p = 0; p < d.length; p += 1) {
                        var c = d[p];
                        c[0] >= n && c[0] <= n + o && c[1] >= r && c[1] <= r + l && (s = !0)
                    }
                    if (!s)
                        return
                }
                t.isHorizontal() ? (37 !== i && 39 !== i || (a.preventDefault ? a.preventDefault() : a.returnValue = !1),
                (39 === i && !t.rtl || 37 === i && t.rtl) && t.slideNext(),
                (37 === i && !t.rtl || 39 === i && t.rtl) && t.slidePrev()) : (38 !== i && 40 !== i || (a.preventDefault ? a.preventDefault() : a.returnValue = !1),
                40 === i && t.slideNext(),
                38 === i && t.slidePrev()),
                    t.emit("keyPress", i)
            }
        },
        enable: function() {
            this.keyboard.enabled || (T(h).on("keydown", this.keyboard.handle),
                this.keyboard.enabled = !0)
        },
        disable: function() {
            this.keyboard.enabled && (T(h).off("keydown", this.keyboard.handle),
                this.keyboard.enabled = !1)
        }
    }
        , i = {
        name: "keyboard",
        params: {
            keyboard: {
                enabled: !1
            }
        },
        create: function() {
            D.extend(this, {
                keyboard: {
                    enabled: !1,
                    enable: $.enable.bind(this),
                    disable: $.disable.bind(this),
                    handle: $.handle.bind(this)
                }
            })
        },
        on: {
            init: function() {
                this.params.keyboard.enabled && this.keyboard.enable()
            },
            destroy: function() {
                this.keyboard.enabled && this.keyboard.disable()
            }
        }
    };
    var I, L, A, H = {
        lastScrollTime: D.now(),
        event: -1 < u.navigator.userAgent.indexOf("firefox") ? "DOMMouseScroll" : ((A = (L = "onwheel")in h) || ((I = h.createElement("div")).setAttribute(L, "return;"),
            A = "function" == typeof I[L]),
            (A = !A && h.implementation && h.implementation.hasFeature && !0 !== h.implementation.hasFeature("", "") ? h.implementation.hasFeature("Events.wheel", "3.0") : A) ? "wheel" : "mousewheel"),
        normalize: function(e) {
            var t = 0
                , a = 0
                , i = 0
                , s = 0;
            return "detail"in e && (a = e.detail),
            "wheelDelta"in e && (a = -e.wheelDelta / 120),
            "wheelDeltaY"in e && (a = -e.wheelDeltaY / 120),
            "wheelDeltaX"in e && (t = -e.wheelDeltaX / 120),
            "axis"in e && e.axis === e.HORIZONTAL_AXIS && (t = a,
                a = 0),
                i = 10 * t,
                s = 10 * a,
            "deltaY"in e && (s = e.deltaY),
            ((i = "deltaX"in e ? e.deltaX : i) || s) && e.deltaMode && (1 === e.deltaMode ? (i *= 40,
                s *= 40) : (i *= 800,
                s *= 800)),
                {
                    spinX: t = i && !t ? i < 1 ? -1 : 1 : t,
                    spinY: a = s && !a ? s < 1 ? -1 : 1 : a,
                    pixelX: i,
                    pixelY: s
                }
        },
        handle: function(e) {
            var t = e
                , a = this
                , i = a.params.mousewheel;
            t.originalEvent && (t = t.originalEvent);
            var s = 0
                , n = a.rtl ? -1 : 1
                , r = H.normalize(t);
            if (i.forceToAxis)
                if (a.isHorizontal()) {
                    if (!(Math.abs(r.pixelX) > Math.abs(r.pixelY)))
                        return !0;
                    s = r.pixelX * n
                } else {
                    if (!(Math.abs(r.pixelY) > Math.abs(r.pixelX)))
                        return !0;
                    s = r.pixelY
                }
            else
                s = Math.abs(r.pixelX) > Math.abs(r.pixelY) ? -r.pixelX * n : -r.pixelY;
            if (0 === s)
                return !0;
            if (i.invert && (s = -s),
                a.params.freeMode) {
                e = a.getTranslate() + s * i.sensitivity,
                    n = a.isBeginning,
                    r = a.isEnd;
                if ((e = e >= a.minTranslate() ? a.minTranslate() : e) <= a.maxTranslate() && (e = a.maxTranslate()),
                    a.setTransition(0),
                    a.setTranslate(e),
                    a.updateProgress(),
                    a.updateActiveIndex(),
                    a.updateSlidesClasses(),
                (!n && a.isBeginning || !r && a.isEnd) && a.updateSlidesClasses(),
                a.params.freeModeSticky && (clearTimeout(a.mousewheel.timeout),
                    a.mousewheel.timeout = D.nextTick(function() {
                        a.slideReset()
                    }, 300)),
                    a.emit("scroll", t),
                a.params.autoplay && a.params.autoplayDisableOnInteraction && a.stopAutoplay(),
                0 === e || e === a.maxTranslate())
                    return !0
            } else {
                if (60 < D.now() - a.mousewheel.lastScrollTime)
                    if (s < 0)
                        if (a.isEnd && !a.params.loop || a.animating) {
                            if (i.releaseOnEdges)
                                return !0
                        } else
                            a.slideNext(),
                                a.emit("scroll", t);
                    else if (a.isBeginning && !a.params.loop || a.animating) {
                        if (i.releaseOnEdges)
                            return !0
                    } else
                        a.slidePrev(),
                            a.emit("scroll", t);
                a.mousewheel.lastScrollTime = (new u.Date).getTime()
            }
            return t.preventDefault ? t.preventDefault() : t.returnValue = !1,
                !1
        },
        enable: function() {
            var e = this;
            if (!H.event)
                return !1;
            if (e.mousewheel.enabled)
                return !1;
            var t = e.$el;
            return (t = "container" !== e.params.mousewheel.eventsTarged ? T(e.params.mousewheel.eventsTarged) : t).on(H.event, e.mousewheel.handle),
                e.mousewheel.enabled = !0
        },
        disable: function() {
            var e = this;
            if (!H.event)
                return !1;
            if (!e.mousewheel.enabled)
                return !1;
            var t = e.$el;
            return (t = "container" !== e.params.mousewheel.eventsTarged ? T(e.params.mousewheel.eventsTarged) : t).off(H.event, e.mousewheel.handle),
                !(e.mousewheel.enabled = !1)
        }
    }, N = {
        update: function() {
            var e, t, a = this, i = a.params.navigation;
            a.params.loop || (e = (t = a.navigation).$nextEl,
            (t = t.$prevEl) && 0 < t.length && (a.isBeginning ? t.addClass(i.disabledClass) : t.removeClass(i.disabledClass)),
            e && 0 < e.length && (a.isEnd ? e.addClass(i.disabledClass) : e.removeClass(i.disabledClass)))
        },
        init: function() {
            var e, t, a = this, i = a.params.navigation;
            (i.nextEl || i.prevEl) && (i.nextEl && (e = T(i.nextEl),
            a.params.uniqueNavElements && "string" == typeof i.nextEl && 1 < e.length && 1 === a.$el.find(i.nextEl).length && (e = a.$el.find(i.nextEl))),
            i.prevEl && (t = T(i.prevEl),
            a.params.uniqueNavElements && "string" == typeof i.prevEl && 1 < t.length && 1 === a.$el.find(i.prevEl).length && (t = a.$el.find(i.prevEl))),
            e && 0 < e.length && e.on("click", function(e) {
                e.preventDefault(),
                a.isEnd && !a.params.loop || a.slideNext()
            }),
            t && 0 < t.length && t.on("click", function(e) {
                e.preventDefault(),
                a.isBeginning && !a.params.loop || a.slidePrev()
            }),
                D.extend(a.navigation, {
                    $nextEl: e,
                    nextEl: e && e[0],
                    $prevEl: t,
                    prevEl: t && t[0]
                }))
        },
        destroy: function() {
            var e = this.navigation
                , t = e.$nextEl
                , e = e.$prevEl;
            t && t.length && (t.off("click"),
                t.removeClass(this.params.navigation.disabledClass)),
            e && e.length && (e.off("click"),
                e.removeClass(this.params.navigation.disabledClass))
        }
    }, X = {
        update: function() {
            var e, a, t, i, s, n, r, o = this, l = o.rtl, d = o.params.pagination;
            d.el && o.pagination.el && o.pagination.$el && 0 !== o.pagination.$el.length && (i = (o.virtual && o.params.virtual.enabled ? o.virtual : o).slides.length,
                e = o.pagination.$el,
                t = o.params.loop ? Math.ceil((i - 2 * o.loopedSlides) / o.params.slidesPerGroup) : o.snapGrid.length,
                o.params.loop ? ((a = Math.ceil((o.activeIndex - o.loopedSlides) / o.params.slidesPerGroup)) > i - 1 - 2 * o.loopedSlides && (a -= i - 2 * o.loopedSlides),
                t - 1 < a && (a -= t),
                a < 0 && "bullets" !== o.params.paginationType && (a = t + a)) : a = void 0 !== o.snapIndex ? o.snapIndex : o.activeIndex || 0,
            "bullets" === d.type && o.pagination.bullets && 0 < o.pagination.bullets.length && (s = o.pagination.bullets,
            d.dynamicBullets && (o.pagination.bulletSize = s.eq(0)[o.isHorizontal() ? "outerWidth" : "outerHeight"](!0),
                e.css(o.isHorizontal() ? "width" : "height", 5 * o.pagination.bulletSize + "px")),
                s.removeClass(d.bulletActiveClass + " " + d.bulletActiveClass + "-next " + d.bulletActiveClass + "-next-next " + d.bulletActiveClass + "-prev " + d.bulletActiveClass + "-prev-prev"),
                1 < e.length ? s.each(function(e, t) {
                    t = T(t);
                    t.index() === a && (t.addClass(d.bulletActiveClass),
                    d.dynamicBullets && (t.prev().addClass(d.bulletActiveClass + "-prev").prev().addClass(d.bulletActiveClass + "-prev-prev"),
                        t.next().addClass(d.bulletActiveClass + "-next").next().addClass(d.bulletActiveClass + "-next-next")))
                }) : ((i = s.eq(a)).addClass(d.bulletActiveClass),
                d.dynamicBullets && (i.prev().addClass(d.bulletActiveClass + "-prev").prev().addClass(d.bulletActiveClass + "-prev-prev"),
                    i.next().addClass(d.bulletActiveClass + "-next").next().addClass(d.bulletActiveClass + "-next-next"))),
            d.dynamicBullets && (r = (5 * o.pagination.bulletSize - o.pagination.bulletSize) / 2 - a * o.pagination.bulletSize,
                n = l ? "right" : "left",
                s.css(o.isHorizontal() ? n : "top", r + "px"))),
            "fraction" === d.type && (e.find("." + d.currentClass).text(a + 1),
                e.find("." + d.totalClass).text(t)),
            "progressbar" === d.type && (n = s = (a + 1) / t,
                r = 1,
            o.isHorizontal() || (r = s,
                n = 1),
                e.find("." + d.progressbarFillClass).transform("translate3d(0,0,0) scaleX(" + n + ") scaleY(" + r + ")").transition(o.params.speed)),
                "custom" === d.type && d.renderCustom ? (e.html(d.renderCustom(o, a + 1, t)),
                    o.emit("paginationRender", o, e[0])) : o.emit("paginationUpdate", o, e[0]))
        },
        render: function() {
            var e = this
                , t = e.params.pagination;
            if (t.el && e.pagination.el && e.pagination.$el && 0 !== e.pagination.$el.length) {
                var a = (e.virtual && e.params.virtual.enabled ? e.virtual : e).slides.length
                    , i = e.pagination.$el
                    , s = "";
                if ("bullets" === t.type) {
                    for (var n = e.params.loop ? Math.ceil((a - 2 * e.loopedSlides) / e.params.slidesPerGroup) : e.snapGrid.length, r = 0; r < n; r += 1)
                        t.renderBullet ? s += t.renderBullet.call(e, r, t.bulletClass) : s += "<" + t.bulletElement + ' class="' + t.bulletClass + '"></' + t.bulletElement + ">";
                    i.html(s),
                        e.pagination.bullets = i.find("." + t.bulletClass)
                }
                "fraction" === t.type && (s = t.renderFraction ? t.renderFraction.call(e, t.currentClass, t.totalClass) : '<span class="' + t.currentClass + '"></span> / <span class="' + t.totalClass + '"></span>',
                    i.html(s)),
                "progressbar" === t.type && (s = t.renderProgressbar ? t.renderProgressbar.call(e, t.progressbarFillClass) : '<span class="' + t.progressbarFillClass + '"></span>',
                    i.html(s)),
                "custom" !== t.type && e.emit("paginationRender", e.pagination.$el[0])
            }
        },
        init: function() {
            var e, t = this, a = t.params.pagination;
            !a.el || 0 !== (e = T(a.el)).length && (t.params.uniqueNavElements && "string" == typeof a.el && 1 < e.length && 1 === t.$el.find(a.el).length && (e = t.$el.find(a.el)),
            "bullets" === a.type && a.clickable && e.addClass(a.clickableClass),
                e.addClass(a.modifierClass + a.type),
            "bullets" === a.type && a.dynamicBullets && e.addClass("" + a.modifierClass + a.type + "-dynamic"),
            a.clickable && e.on("click", "." + a.bulletClass, function(e) {
                e.preventDefault();
                e = T(this).index() * t.params.slidesPerGroup;
                t.params.loop && (e += t.loopedSlides),
                    t.slideTo(e)
            }),
                D.extend(t.pagination, {
                    $el: e,
                    el: e[0]
                }))
        },
        destroy: function() {
            var e, t = this, a = t.params.pagination;
            a.el && t.pagination.el && t.pagination.$el && 0 !== t.pagination.$el.length && ((e = t.pagination.$el).removeClass(a.hiddenClass),
                e.removeClass(a.modifierClass + a.type),
            t.pagination.bullets && t.pagination.bullets.removeClass(a.bulletActiveClass),
            a.clickable && e.off("click", "." + a.bulletClass))
        }
    }, Y = {
        setTranslate: function() {
            var e, t, a, i, s, n, r, o, l = this;
            l.params.scrollbar.el && l.scrollbar.el && (r = l.scrollbar,
                e = l.rtl,
                o = l.progress,
                t = r.dragSize,
                a = r.trackSize,
                i = r.$dragEl,
                s = r.$el,
                n = l.params.scrollbar,
                o = (a - (r = t)) * o,
                e && l.isHorizontal() ? 0 < (o = -o) ? (r = t - o,
                    o = 0) : a < -o + t && (r = a + o) : o < 0 ? (r = t + o,
                    o = 0) : a < o + t && (r = a - o),
                l.isHorizontal() ? (O.transforms3d ? i.transform("translate3d(" + o + "px, 0, 0)") : i.transform("translateX(" + o + "px)"),
                    i[0].style.width = r + "px") : (O.transforms3d ? i.transform("translate3d(0px, " + o + "px, 0)") : i.transform("translateY(" + o + "px)"),
                    i[0].style.height = r + "px"),
            n.hide && (clearTimeout(l.scrollbar.timeout),
                s[0].style.opacity = 1,
                l.scrollbar.timeout = setTimeout(function() {
                    s[0].style.opacity = 0,
                        s.transition(400)
                }, 1e3)))
        },
        setTransition: function(e) {
            this.params.scrollbar.el && this.scrollbar.el && this.scrollbar.$dragEl.transition(e)
        },
        updateSize: function() {
            var e, t, a, i, s, n, r, o = this;
            o.params.scrollbar.el && o.scrollbar.el && (t = (e = o.scrollbar).$dragEl,
                a = e.$el,
                t[0].style.width = "",
                t[0].style.height = "",
                i = o.isHorizontal() ? a[0].offsetWidth : a[0].offsetHeight,
                n = (s = o.size / o.virtualSize) * (i / o.size),
                r = "auto" === o.params.scrollbar.dragSize ? i * s : parseInt(o.params.scrollbar.dragSize, 10),
                o.isHorizontal() ? t[0].style.width = r + "px" : t[0].style.height = r + "px",
                a[0].style.display = 1 <= s ? "none" : "",
            o.params.scrollbarHide && (a[0].style.opacity = 0),
                D.extend(e, {
                    trackSize: i,
                    divider: s,
                    moveDivider: n,
                    dragSize: r
                }))
        },
        setDragPosition: function(e) {
            var t = this
                , a = t.scrollbar
                , i = a.$el
                , s = a.dragSize
                , a = a.moveDivider
                , e = t.isHorizontal() ? "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX || e.clientX : "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY || e.clientY
                , e = e - i.offset()[t.isHorizontal() ? "left" : "top"] - s / 2
                , i = -t.minTranslate() * a
                , s = -t.maxTranslate() * a;
            e < i ? e = i : s < e && (e = s),
            t.rtl && (e = s - e),
                t.updateProgress(e = -e / a),
                t.setTranslate(e),
                t.updateActiveIndex(),
                t.updateSlidesClasses()
        },
        onDragStart: function(e) {
            var t = this
                , a = t.params.scrollbar
                , i = t.scrollbar
                , s = t.$wrapperEl
                , n = i.$el
                , r = i.$dragEl;
            t.scrollbar.isTouched = !0,
                e.preventDefault(),
                e.stopPropagation(),
                s.transition(100),
                r.transition(100),
                i.setDragPosition(e),
                clearTimeout(t.scrollbar.dragTimeout),
                n.transition(0),
            a.hide && n.css("opacity", 1),
                t.emit("scrollbarDragStart", e)
        },
        onDragMove: function(e) {
            var t = this.scrollbar
                , a = this.$wrapperEl
                , i = t.$el
                , s = t.$dragEl;
            this.scrollbar.isTouched && (e.preventDefault ? e.preventDefault() : e.returnValue = !1,
                t.setDragPosition(e),
                a.transition(0),
                i.transition(0),
                s.transition(0),
                this.emit("scrollbarDragMove", e))
        },
        onDragEnd: function(e) {
            var t = this
                , a = t.params.scrollbar
                , i = t.scrollbar.$el;
            t.scrollbar.isTouched && (t.scrollbar.isTouched = !1,
            a.hide && (clearTimeout(t.scrollbar.dragTimeout),
                t.scrollbar.dragTimeout = D.nextTick(function() {
                    i.css("opacity", 0),
                        i.transition(400)
                }, 1e3)),
                t.emit("scrollbarDragEnd", e),
            a.snapOnRelease && t.slideReset())
        },
        enableDraggable: function() {
            var e, t, a = this;
            a.params.scrollbar.el && (e = a.scrollbar.$el,
                t = O.touch ? e[0] : document,
                e.on(a.scrollbar.dragEvents.start, a.scrollbar.onDragStart),
                T(t).on(a.scrollbar.dragEvents.move, a.scrollbar.onDragMove),
                T(t).on(a.scrollbar.dragEvents.end, a.scrollbar.onDragEnd))
        },
        disableDraggable: function() {
            var e, t, a = this;
            a.params.scrollbar.el && (e = a.scrollbar.$el,
                t = O.touch ? e[0] : document,
                e.off(a.scrollbar.dragEvents.start),
                T(t).off(a.scrollbar.dragEvents.move),
                T(t).off(a.scrollbar.dragEvents.end))
        },
        init: function() {
            var e, t, a, i, s, n = this;
            n.params.scrollbar.el && (e = n.scrollbar,
                s = n.$el,
                t = n.touchEvents,
                i = T((a = n.params.scrollbar).el),
            0 === (s = (i = n.params.uniqueNavElements && "string" == typeof a.el && 1 < i.length && 1 === s.find(a.el).length ? s.find(a.el) : i).find(".swiper-scrollbar-drag")).length && (s = T('<div class="swiper-scrollbar-drag"></div>'),
                i.append(s)),
                n.scrollbar.dragEvents = !1 !== n.params.simulateTouch || O.touch ? t : {
                    start: "mousedown",
                    move: "mousemove",
                    end: "mouseup"
                },
                D.extend(e, {
                    $el: i,
                    el: i[0],
                    $dragEl: s,
                    dragEl: s[0]
                }),
            a.draggable && e.enableDraggable())
        },
        destroy: function() {
            this.scrollbar.disableDraggable()
        }
    }, G = {
        setTransform: function(e, t) {
            var a = this.rtl
                , i = T(e)
                , s = a ? -1 : 1
                , n = i.attr("data-swiper-parallax") || "0"
                , r = i.attr("data-swiper-parallax-x")
                , o = i.attr("data-swiper-parallax-y")
                , e = i.attr("data-swiper-parallax-scale")
                , a = i.attr("data-swiper-parallax-opacity");
            r || o ? (r = r || "0",
                o = o || "0") : this.isHorizontal() ? (r = n,
                o = "0") : (o = n,
                r = "0"),
                r = 0 <= r.indexOf("%") ? parseInt(r, 10) * t * s + "%" : r * t * s + "px",
                o = 0 <= o.indexOf("%") ? parseInt(o, 10) * t + "%" : o * t + "px",
            null != a && (a = a - (a - 1) * (1 - Math.abs(t)),
                i[0].style.opacity = a),
                null == e ? i.transform("translate3d(" + r + ", " + o + ", 0px)") : (t = e - (e - 1) * (1 - Math.abs(t)),
                    i.transform("translate3d(" + r + ", " + o + ", 0px) scale(" + t + ")"))
        },
        setTranslate: function() {
            var s = this
                , e = s.$el
                , t = s.slides
                , a = s.progress;
            e.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function(e, t) {
                s.parallax.setTransform(t, a)
            }),
                t.each(function(e, i) {
                    T(i).find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function(e, t) {
                        var a = Math.min(Math.max(i.progress, -1), 1);
                        s.parallax.setTransform(t, a)
                    })
                })
        },
        setTransition: function(i) {
            void 0 === i && (i = this.params.speed);
            this.$el.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function(e, t) {
                var a = T(t)
                    , t = parseInt(a.attr("data-swiper-parallax-duration"), 10) || i;
                a.transition(t = 0 === i ? 0 : t)
            })
        }
    }, B = {
        getDistanceBetweenTouches: function(e) {
            if (e.targetTouches.length < 2)
                return 1;
            var t = e.targetTouches[0].pageX
                , a = e.targetTouches[0].pageY
                , i = e.targetTouches[1].pageX
                , e = e.targetTouches[1].pageY;
            return Math.sqrt(Math.pow(i - t, 2) + Math.pow(e - a, 2))
        },
        onGestureStart: function(e) {
            var t = this
                , a = t.params.zoom
                , i = t.zoom.gesture;
            if (!O.gestures) {
                if ("touchstart" !== e.type || "touchstart" === e.type && e.targetTouches.length < 2)
                    return;
                i.scaleStart = B.getDistanceBetweenTouches(e)
            }
            i.$slideEl && i.$slideEl.length || (i.$slideEl = T(this),
            0 === i.$slideEl.length && (i.$slideEl = t.slides.eq(t.activeIndex)),
                i.$imageEl = i.$slideEl.find("img, svg, canvas"),
                i.$imageWrapEl = i.$imageEl.parent("." + a.containerClass),
                i.maxRatio = i.$imageWrapEl.attr("data-swiper-zoom") || a.maxRatio,
            0 !== i.$imageWrapEl.length) ? (i.$imageEl.transition(0),
                t.zoom.isScaling = !0) : i.$imageEl = void 0
        },
        onGestureChange: function(e) {
            var t = this.params.zoom
                , a = this.zoom
                , i = a.gesture;
            if (!O.gestures) {
                if ("touchmove" !== e.type || "touchmove" === e.type && e.targetTouches.length < 2)
                    return;
                i.scaleMove = B.getDistanceBetweenTouches(e)
            }
            i.$imageEl && 0 !== i.$imageEl.length && (O.gestures ? this.zoom.scale = e.scale * a.currentScale : a.scale = i.scaleMove / i.scaleStart * a.currentScale,
            a.scale > i.maxRatio && (a.scale = i.maxRatio - 1 + Math.pow(a.scale - i.maxRatio + 1, .5)),
            a.scale < t.minRatio && (a.scale = t.minRatio + 1 - Math.pow(t.minRatio - a.scale + 1, .5)),
                i.$imageEl.transform("translate3d(0,0,0) scale(" + a.scale + ")"))
        },
        onGestureEnd: function(e) {
            var t = this.params.zoom
                , a = this.zoom
                , i = a.gesture;
            !O.gestures && ("touchend" !== e.type || "touchend" === e.type && e.changedTouches.length < 2) || i.$imageEl && 0 !== i.$imageEl.length && (a.scale = Math.max(Math.min(a.scale, i.maxRatio), t.minRatio),
                i.$imageEl.transition(this.params.speed).transform("translate3d(0,0,0) scale(" + a.scale + ")"),
                a.currentScale = a.scale,
                a.isScaling = !1,
            1 === a.scale && (i.$slideEl = void 0))
        },
        onTouchStart: function(e) {
            var t = this.zoom
                , a = t.gesture
                , t = t.image;
            a.$imageEl && 0 !== a.$imageEl.length && (t.isTouched || (x.android && e.preventDefault(),
                t.isTouched = !0,
                t.touchesStart.x = ("touchstart" === e.type ? e.targetTouches[0] : e).pageX,
                t.touchesStart.y = ("touchstart" === e.type ? e.targetTouches[0] : e).pageY))
        },
        onTouchMove: function(e) {
            var t = this
                , a = t.zoom
                , i = a.gesture
                , s = a.image
                , n = a.velocity;
            if (i.$imageEl && 0 !== i.$imageEl.length && (t.allowClick = !1,
            s.isTouched && i.$slideEl)) {
                s.isMoved || (s.width = i.$imageEl[0].offsetWidth,
                    s.height = i.$imageEl[0].offsetHeight,
                    s.startX = D.getTranslate(i.$imageWrapEl[0], "x") || 0,
                    s.startY = D.getTranslate(i.$imageWrapEl[0], "y") || 0,
                    i.slideWidth = i.$slideEl[0].offsetWidth,
                    i.slideHeight = i.$slideEl[0].offsetHeight,
                    i.$imageWrapEl.transition(0),
                t.rtl && (s.startX = -s.startX),
                t.rtl && (s.startY = -s.startY));
                var r = s.width * a.scale
                    , o = s.height * a.scale;
                if (!(r < i.slideWidth && o < i.slideHeight)) {
                    if (s.minX = Math.min(i.slideWidth / 2 - r / 2, 0),
                        s.maxX = -s.minX,
                        s.minY = Math.min(i.slideHeight / 2 - o / 2, 0),
                        s.maxY = -s.minY,
                        s.touchesCurrent.x = ("touchmove" === e.type ? e.targetTouches[0] : e).pageX,
                        s.touchesCurrent.y = ("touchmove" === e.type ? e.targetTouches[0] : e).pageY,
                    !s.isMoved && !a.isScaling) {
                        if (t.isHorizontal() && (Math.floor(s.minX) === Math.floor(s.startX) && s.touchesCurrent.x < s.touchesStart.x || Math.floor(s.maxX) === Math.floor(s.startX) && s.touchesCurrent.x > s.touchesStart.x))
                            return void (s.isTouched = !1);
                        if (!t.isHorizontal() && (Math.floor(s.minY) === Math.floor(s.startY) && s.touchesCurrent.y < s.touchesStart.y || Math.floor(s.maxY) === Math.floor(s.startY) && s.touchesCurrent.y > s.touchesStart.y))
                            return void (s.isTouched = !1)
                    }
                    e.preventDefault(),
                        e.stopPropagation(),
                        s.isMoved = !0,
                        s.currentX = s.touchesCurrent.x - s.touchesStart.x + s.startX,
                        s.currentY = s.touchesCurrent.y - s.touchesStart.y + s.startY,
                    s.currentX < s.minX && (s.currentX = s.minX + 1 - Math.pow(s.minX - s.currentX + 1, .8)),
                    s.currentX > s.maxX && (s.currentX = s.maxX - 1 + Math.pow(s.currentX - s.maxX + 1, .8)),
                    s.currentY < s.minY && (s.currentY = s.minY + 1 - Math.pow(s.minY - s.currentY + 1, .8)),
                    s.currentY > s.maxY && (s.currentY = s.maxY - 1 + Math.pow(s.currentY - s.maxY + 1, .8)),
                    n.prevPositionX || (n.prevPositionX = s.touchesCurrent.x),
                    n.prevPositionY || (n.prevPositionY = s.touchesCurrent.y),
                    n.prevTime || (n.prevTime = Date.now()),
                        n.x = (s.touchesCurrent.x - n.prevPositionX) / (Date.now() - n.prevTime) / 2,
                        n.y = (s.touchesCurrent.y - n.prevPositionY) / (Date.now() - n.prevTime) / 2,
                    Math.abs(s.touchesCurrent.x - n.prevPositionX) < 2 && (n.x = 0),
                    Math.abs(s.touchesCurrent.y - n.prevPositionY) < 2 && (n.y = 0),
                        n.prevPositionX = s.touchesCurrent.x,
                        n.prevPositionY = s.touchesCurrent.y,
                        n.prevTime = Date.now(),
                        i.$imageWrapEl.transform("translate3d(" + s.currentX + "px, " + s.currentY + "px,0)")
                }
            }
        },
        onTouchEnd: function() {
            var e = this.zoom
                , t = e.gesture
                , a = e.image
                , i = e.velocity;
            if (t.$imageEl && 0 !== t.$imageEl.length) {
                if (!a.isTouched || !a.isMoved)
                    return a.isTouched = !1,
                        void (a.isMoved = !1);
                a.isTouched = !1,
                    a.isMoved = !1;
                var s = 300
                    , n = 300
                    , r = i.x * s
                    , o = a.currentX + r
                    , r = i.y * n
                    , r = a.currentY + r;
                0 !== i.x && (s = Math.abs((o - a.currentX) / i.x)),
                0 !== i.y && (n = Math.abs((r - a.currentY) / i.y));
                n = Math.max(s, n);
                a.currentX = o,
                    a.currentY = r;
                r = a.width * e.scale,
                    e = a.height * e.scale;
                a.minX = Math.min(t.slideWidth / 2 - r / 2, 0),
                    a.maxX = -a.minX,
                    a.minY = Math.min(t.slideHeight / 2 - e / 2, 0),
                    a.maxY = -a.minY,
                    a.currentX = Math.max(Math.min(a.currentX, a.maxX), a.minX),
                    a.currentY = Math.max(Math.min(a.currentY, a.maxY), a.minY),
                    t.$imageWrapEl.transition(n).transform("translate3d(" + a.currentX + "px, " + a.currentY + "px,0)")
            }
        },
        onTransitionEnd: function() {
            var e = this.zoom
                , t = e.gesture;
            t.$slideEl && this.previousIndex !== this.activeIndex && (t.$imageEl.transform("translate3d(0,0,0) scale(1)"),
                t.$imageWrapEl.transform("translate3d(0,0,0)"),
                t.$slideEl = void 0,
                t.$imageEl = void 0,
                t.$imageWrapEl = void 0,
                e.scale = 1,
                e.currentScale = 1)
        },
        toggle: function(e) {
            var t = this.zoom;
            t.scale && 1 !== t.scale ? t.out() : t.in(e)
        },
        in: function(e) {
            var t, a, i, s = this, n = s.zoom, r = s.params.zoom, o = n.gesture, l = n.image;
            o.$slideEl || (o.$slideEl = s.clickedSlide ? T(s.clickedSlide) : s.slides.eq(s.activeIndex),
                o.$imageEl = o.$slideEl.find("img, svg, canvas"),
                o.$imageWrapEl = o.$imageEl.parent("." + r.containerClass)),
            o.$imageEl && 0 !== o.$imageEl.length && (o.$slideEl.addClass("" + r.zoomedSlideClass),
                l = void 0 === l.touchesStart.x && e ? (i = ("touchend" === e.type ? e.changedTouches[0] : e).pageX,
                    ("touchend" === e.type ? e.changedTouches[0] : e).pageY) : (i = l.touchesStart.x,
                    l.touchesStart.y),
                n.scale = o.$imageWrapEl.attr("data-swiper-zoom") || r.maxRatio,
                n.currentScale = o.$imageWrapEl.attr("data-swiper-zoom") || r.maxRatio,
                e ? (r = o.$slideEl[0].offsetWidth,
                    e = o.$slideEl[0].offsetHeight,
                    t = o.$slideEl.offset().left + r / 2 - i,
                    a = o.$slideEl.offset().top + e / 2 - l,
                    i = o.$imageEl[0].offsetWidth,
                    l = o.$imageEl[0].offsetHeight,
                    i = i * n.scale,
                    l = l * n.scale,
                    i = Math.min(r / 2 - i / 2, 0),
                    e = Math.min(e / 2 - l / 2, 0),
                (l = -i) < (t = (t = t * n.scale) < i ? i : t) && (t = l),
                (l = -e) < (a = (a = a * n.scale) < e ? e : a) && (a = l)) : a = t = 0,
                o.$imageWrapEl.transition(300).transform("translate3d(" + t + "px, " + a + "px,0)"),
                o.$imageEl.transition(300).transform("translate3d(0,0,0) scale(" + n.scale + ")"))
        },
        out: function() {
            var e = this
                , t = e.zoom
                , a = e.params.zoom
                , i = t.gesture;
            i.$slideEl || (i.$slideEl = e.clickedSlide ? T(e.clickedSlide) : e.slides.eq(e.activeIndex),
                i.$imageEl = i.$slideEl.find("img, svg, canvas"),
                i.$imageWrapEl = i.$imageEl.parent("." + a.containerClass)),
            i.$imageEl && 0 !== i.$imageEl.length && (t.scale = 1,
                t.currentScale = 1,
                i.$imageWrapEl.transition(300).transform("translate3d(0,0,0)"),
                i.$imageEl.transition(300).transform("translate3d(0,0,0) scale(1)"),
                i.$slideEl.removeClass("" + a.zoomedSlideClass),
                i.$slideEl = void 0)
        },
        enable: function() {
            var e, t, a = this, i = a.zoom;
            i.enabled || (i.enabled = !0,
                e = a.slides,
                t = !("touchstart" !== a.touchEvents.start || !O.passiveListener || !a.params.passiveListeners) && {
                    passive: !0,
                    capture: !1
                },
                O.gestures ? (e.on("gesturestart", i.onGestureStart, t),
                    e.on("gesturechange", i.onGestureChange, t),
                    e.on("gestureend", i.onGestureEnd, t)) : "touchstart" === a.touchEvents.start && (e.on(a.touchEvents.start, i.onGestureStart, t),
                    e.on(a.touchEvents.move, i.onGestureChange, t),
                    e.on(a.touchEvents.end, i.onGestureEnd, t)),
                a.slides.each(function(e, t) {
                    t = T(t);
                    0 < t.find("." + a.params.zoom.containerClass).length && t.on(a.touchEvents.move, i.onTouchMove)
                }))
        },
        disable: function() {
            var e, t, a = this, i = a.zoom;
            i.enabled && (a.zoom.enabled = !1,
                e = a.slides,
                t = !("touchstart" !== a.touchEvents.start || !O.passiveListener || !a.params.passiveListeners) && {
                    passive: !0,
                    capture: !1
                },
                O.gestures ? (e.off("gesturestart", i.onGestureStart, t),
                    e.off("gesturechange", i.onGestureChange, t),
                    e.off("gestureend", i.onGestureEnd, t)) : "touchstart" === a.touchEvents.start && (e.off(a.touchEvents.start, i.onGestureStart, t),
                    e.off(a.touchEvents.move, i.onGestureChange, t),
                    e.off(a.touchEvents.end, i.onGestureEnd, t)),
                a.slides.each(function(e, t) {
                    t = T(t);
                    0 < t.find("." + a.params.zoom.containerClass).length && t.off(a.touchEvents.move, i.onTouchMove)
                }))
        }
    }, V = {
        loadInSlide: function(e, o) {
            void 0 === o && (o = !0);
            var l, d = this, p = d.params.lazy;
            void 0 !== e && 0 !== d.slides.length && (e = (l = d.virtual && d.params.virtual.enabled ? d.$wrapperEl.children("." + d.params.slideClass + '[data-swiper-slide-index="' + e + '"]') : d.slides.eq(e)).find("." + p.elementClass + ":not(." + p.loadedClass + "):not(." + p.loadingClass + ")"),
            0 !== (e = l.hasClass(p.elementClass) && !l.hasClass(p.loadedClass) && !l.hasClass(p.loadingClass) ? e.add(l[0]) : e).length && e.each(function(e, t) {
                var a = T(t);
                a.addClass(p.loadingClass);
                var i = a.attr("data-background")
                    , s = a.attr("data-src")
                    , n = a.attr("data-srcset")
                    , r = a.attr("data-sizes");
                d.loadImage(a[0], s || i, n, r, !1, function() {
                    var e, t;
                    null == d || !d || d && !d.params || (i ? (a.css("background-image", 'url("' + i + '")'),
                        a.removeAttr("data-background")) : (n && (a.attr("srcset", n),
                        a.removeAttr("data-srcset")),
                    r && (a.attr("sizes", r),
                        a.removeAttr("data-sizes")),
                    s && (a.attr("src", s),
                        a.removeAttr("data-src"))),
                        a.addClass(p.loadedClass).removeClass(p.loadingClass),
                        l.find("." + p.preloaderClass).remove(),
                    d.params.loop && o && (t = l.attr("data-swiper-slide-index"),
                        l.hasClass(d.params.slideDuplicateClass) ? (e = d.$wrapperEl.children('[data-swiper-slide-index="' + t + '"]:not(.' + d.params.slideDuplicateClass + ")"),
                            d.lazy.loadInSlide(e.index(), !1)) : (t = d.$wrapperEl.children("." + d.params.slideDuplicateClass + '[data-swiper-slide-index="' + t + '"]'),
                            d.lazy.loadInSlide(t.index(), !1))),
                        d.emit("lazyImageReady", l[0], a[0]))
                }),
                    d.emit("lazyImageLoad", l[0], a[0])
            }))
        },
        load: function() {
            var a = this
                , t = a.$wrapperEl
                , i = a.params
                , s = a.slides
                , e = a.activeIndex
                , n = a.virtual && i.virtual.enabled
                , r = i.lazy
                , o = i.slidesPerView;
            function l(e) {
                if (n) {
                    if (t.children("." + i.slideClass + '[data-swiper-slide-index="' + e + '"]').length)
                        return 1
                } else if (s[e])
                    return 1
            }
            function d(e) {
                return n ? T(e).attr("data-swiper-slide-index") : T(e).index()
            }
            if ("auto" === o && (o = 0),
            a.lazy.initialImageLoaded || (a.lazy.initialImageLoaded = !0),
                a.params.watchSlidesVisibility)
                t.children("." + i.slideVisibleClass).each(function(e, t) {
                    t = n ? T(t).attr("data-swiper-slide-index") : T(t).index();
                    a.lazy.loadInSlide(t)
                });
            else if (1 < o)
                for (var p = e; p < e + o; p += 1)
                    l(p) && a.lazy.loadInSlide(p);
            else
                a.lazy.loadInSlide(e);
            if (r.loadPrevNext)
                if (1 < o || r.loadPrevNextAmount && 1 < r.loadPrevNextAmount) {
                    for (var c = r.loadPrevNextAmount, r = o, u = Math.min(e + r + Math.max(c, r), s.length), c = Math.max(e - Math.max(r, c), 0), h = e + o; h < u; h += 1)
                        l(h) && a.lazy.loadInSlide(h);
                    for (var f = c; f < e; f += 1)
                        l(f) && a.lazy.loadInSlide(f)
                } else {
                    c = t.children("." + i.slideNextClass);
                    0 < c.length && a.lazy.loadInSlide(d(c));
                    c = t.children("." + i.slidePrevClass);
                    0 < c.length && a.lazy.loadInSlide(d(c))
                }
        }
    }, R = {
        LinearSpline: function(e, t) {
            var a, i, s, n, r, o = function(e, t) {
                for (i = -1,
                         a = e.length; 1 < a - i; )
                    e[s = a + i >> 1] <= t ? i = s : a = s;
                return a
            };
            return this.x = e,
                this.y = t,
                this.lastIndex = e.length - 1,
                this.interpolate = function(e) {
                    return e ? (r = o(this.x, e),
                        n = r - 1,
                    (e - this.x[n]) * (this.y[r] - this.y[n]) / (this.x[r] - this.x[n]) + this.y[n]) : 0
                }
                ,
                this
        },
        getInterpolateFunction: function(e) {
            var t = this;
            t.controller.spline || (t.controller.spline = t.params.loop ? new R.LinearSpline(t.slidesGrid,e.slidesGrid) : new R.LinearSpline(t.snapGrid,e.snapGrid))
        },
        setTranslate: function(e, t) {
            var a, i, s = this, n = s.controller.control;
            function r(e) {
                var t = e.rtl && "horizontal" === e.params.direction ? -s.translate : s.translate;
                "slide" === s.params.controller.by && (s.controller.getInterpolateFunction(e),
                    i = -s.controller.spline.interpolate(-t)),
                i && "container" !== s.params.controller.by || (a = (e.maxTranslate() - e.minTranslate()) / (s.maxTranslate() - s.minTranslate()),
                    i = (t - s.minTranslate()) * a + e.minTranslate()),
                s.params.controller.inverse && (i = e.maxTranslate() - i),
                    e.updateProgress(i),
                    e.setTranslate(i, s),
                    e.updateActiveIndex(),
                    e.updateSlidesClasses()
            }
            if (Array.isArray(n))
                for (var o = 0; o < n.length; o += 1)
                    n[o] !== t && n[o]instanceof z && r(n[o]);
            else
                n instanceof z && t !== n && r(n)
        },
        setTransition: function(t, e) {
            var a, i = this, s = i.controller.control;
            function n(e) {
                e.setTransition(t, i),
                0 !== t && (e.transitionStart(),
                    e.$wrapperEl.transitionEnd(function() {
                        s && (e.params.loop && "slide" === i.params.controller.by && e.loopFix(),
                            e.transitionEnd())
                    }))
            }
            if (Array.isArray(s))
                for (a = 0; a < s.length; a += 1)
                    s[a] !== e && s[a]instanceof z && n(s[a]);
            else
                s instanceof z && e !== s && n(s)
        }
    }, W = {
        makeElFocusable: function(e) {
            return e.attr("tabIndex", "0"),
                e
        },
        addElRole: function(e, t) {
            return e.attr("role", t),
                e
        },
        addElLabel: function(e, t) {
            return e.attr("aria-label", t),
                e
        },
        disableEl: function(e) {
            return e.attr("aria-disabled", !0),
                e
        },
        enableEl: function(e) {
            return e.attr("aria-disabled", !1),
                e
        },
        onEnterKey: function(e) {
            var t = this
                , a = t.params.a11y;
            13 === e.keyCode && (e = T(e.target),
            t.navigation && t.navigation.$nextEl && e.is(t.navigation.$nextEl) && (t.isEnd && !t.params.loop || t.slideNext(),
                t.isEnd ? t.a11y.notify(a.lastSlideMessage) : t.a11y.notify(a.nextSlideMessage)),
            t.navigation && t.navigation.$prevEl && e.is(t.navigation.$prevEl) && (t.isBeginning && !t.params.loop || t.slidePrev(),
                t.isBeginning ? t.a11y.notify(a.firstSlideMessage) : t.a11y.notify(a.prevSlideMessage)),
            t.pagination && e.is("." + t.params.pagination.bulletClass) && e[0].click())
        },
        notify: function(e) {
            var t = this.a11y.liveRegion;
            0 !== t.length && (t.html(""),
                t.html(e))
        },
        updateNavigation: function() {
            var e, t, a = this;
            a.params.loop || (e = (t = a.navigation).$nextEl,
            (t = t.$prevEl) && 0 < t.length && (a.isBeginning ? a.a11y.disableEl(t) : a.a11y.enableEl(t)),
            e && 0 < e.length && (a.isEnd ? a.a11y.disableEl(e) : a.a11y.enableEl(e)))
        },
        updatePagination: function() {
            var a = this
                , i = a.params.a11y;
            a.pagination && a.params.pagination.clickable && a.pagination.bullets && a.pagination.bullets.length && a.pagination.bullets.each(function(e, t) {
                t = T(t);
                a.a11y.makeElFocusable(t),
                    a.a11y.addElRole(t, "button"),
                    a.a11y.addElLabel(t, i.paginationBulletMessage.replace(/{{index}}/, t.index() + 1))
            })
        },
        init: function() {
            var e = this;
            e.$el.append(e.a11y.liveRegion);
            var t, a, i = e.params.a11y;
            e.navigation && e.navigation.$nextEl && (t = e.navigation.$nextEl),
            e.navigation && e.navigation.$prevEl && (a = e.navigation.$prevEl),
            t && (e.a11y.makeElFocusable(t),
                e.a11y.addElRole(t, "button"),
                e.a11y.addElLabel(t, i.nextSlideMessage),
                t.on("keydown", e.a11y.onEnterKey)),
            a && (e.a11y.makeElFocusable(a),
                e.a11y.addElRole(a, "button"),
                e.a11y.addElLabel(a, i.prevSlideMessage),
                a.on("keydown", e.a11y.onEnterKey)),
            e.pagination && e.params.pagination.clickable && e.pagination.bullets && e.pagination.bullets.length && e.pagination.$el.on("keydown", "." + e.params.pagination.bulletClass, e.a11y.onEnterKey)
        },
        destroy: function() {
            var e, t, a = this;
            a.a11y.liveRegion && 0 < a.a11y.liveRegion.length && a.a11y.liveRegion.remove(),
            a.navigation && a.navigation.$nextEl && (e = a.navigation.$nextEl),
            a.navigation && a.navigation.$prevEl && (t = a.navigation.$prevEl),
            e && e.off("keydown", a.a11y.onEnterKey),
            t && t.off("keydown", a.a11y.onEnterKey),
            a.pagination && a.params.pagination.clickable && a.pagination.bullets && a.pagination.bullets.length && a.pagination.$el.off("keydown", "." + a.params.pagination.bulletClass, a.a11y.onEnterKey)
        }
    }, F = {
        init: function() {
            var e = this;
            if (e.params.history) {
                if (!u.history || !u.history.pushState)
                    return e.params.history.enabled = !1,
                        void (e.params.hashNavigation.enabled = !0);
                var t = e.history;
                t.initialized = !0,
                    t.paths = F.getPathValues(),
                (t.paths.key || t.paths.value) && (t.scrollToSlide(0, t.paths.value, e.params.runCallbacksOnInit),
                e.params.history.replaceState || u.addEventListener("popstate", e.history.setHistoryPopState))
            }
        },
        destroy: function() {
            this.params.history.replaceState || u.removeEventListener("popstate", this.history.setHistoryPopState)
        },
        setHistoryPopState: function() {
            this.history.paths = F.getPathValues(),
                this.history.scrollToSlide(this.params.speed, this.history.paths.value, !1)
        },
        getPathValues: function() {
            var e = u.location.pathname.slice(1).split("/")
                , t = e.length;
            return {
                key: e[t - 2],
                value: e[t - 1]
            }
        },
        setHistory: function(e, t) {
            this.history.initialized && this.params.history.enabled && (t = this.slides.eq(t),
                t = F.slugify(t.attr("data-history")),
            u.location.pathname.includes(e) || (t = e + "/" + t),
            (e = u.history.state) && e.value === t || (this.params.history.replaceState ? u.history.replaceState({
                value: t
            }, null, t) : u.history.pushState({
                value: t
            }, null, t)))
        },
        slugify: function(e) {
            return e.toString().toLowerCase().replace(/\s+/g, "-").replace(/[^\w-]+/g, "").replace(/--+/g, "-").replace(/^-+/, "").replace(/-+$/, "")
        },
        scrollToSlide: function(e, t, a) {
            var i = this;
            if (t)
                for (var s = 0, n = i.slides.length; s < n; s += 1) {
                    var r = i.slides.eq(s);
                    F.slugify(r.attr("data-history")) !== t || r.hasClass(i.params.slideDuplicateClass) || (r = r.index(),
                        i.slideTo(r, e, a))
                }
            else
                i.slideTo(0, e, a)
        }
    }, j = {
        onHashCange: function() {
            var e = this
                , t = h.location.hash.replace("#", "");
            t !== e.slides.eq(e.activeIndex).attr("data-hash") && e.slideTo(e.$wrapperEl.children("." + e.params.slideClass + '[data-hash="' + t + '"]').index())
        },
        setHash: function() {
            var e = this;
            e.hashNavigation.initialized && e.params.hashNavigation.enabled && (e.params.hashNavigation.replaceState && u.history && u.history.replaceState ? u.history.replaceState(null, null, "#" + e.slides.eq(e.activeIndex).attr("data-hash") || "") : (e = (e = e.slides.eq(e.activeIndex)).attr("data-hash") || e.attr("data-history"),
                h.location.hash = e || ""))
        },
        init: function() {
            var e = this;
            if (!(!e.params.hashNavigation.enabled || e.params.history && e.params.history.enabled)) {
                e.hashNavigation.initialized = !0;
                var t = h.location.hash.replace("#", "");
                if (t)
                    for (var a = 0, i = e.slides.length; a < i; a += 1) {
                        var s = e.slides.eq(a);
                        (s.attr("data-hash") || s.attr("data-history")) !== t || s.hasClass(e.params.slideDuplicateClass) || (s = s.index(),
                            e.slideTo(s, 0, e.params.runCallbacksOnInit, !0))
                    }
                e.params.hashNavigation.watchState && T(u).on("hashchange", e.hashNavigation.onHashCange)
            }
        },
        destroy: function() {
            this.params.hashNavigation.watchState && T(u).off("hashchange", this.hashNavigation.onHashCange)
        }
    }, q = {
        run: function() {
            var e = this
                , t = e.slides.eq(e.activeIndex)
                , a = e.params.autoplay.delay;
            t.attr("data-swiper-autoplay") && (a = t.attr("data-swiper-autoplay") || e.params.autoplay.delay),
                e.autoplay.timeout = D.nextTick(function() {
                    e.params.loop ? (e.loopFix(),
                        e.slideNext(e.params.speed, !0, !0),
                        e.emit("autoplay")) : e.isEnd ? e.params.autoplay.stopOnLastSlide ? e.autoplay.stop() : (e.slideTo(0, e.params.speed, !0, !0),
                        e.emit("autoplay")) : (e.slideNext(e.params.speed, !0, !0),
                        e.emit("autoplay"))
                }, a)
        },
        start: function() {
            var e = this;
            return void 0 === e.autoplay.timeout && (!e.autoplay.running && (e.autoplay.running = !0,
                e.emit("autoplayStart"),
                e.autoplay.run(),
                !0))
        },
        stop: function() {
            var e = this;
            return !!e.autoplay.running && (void 0 !== e.autoplay.timeout && (e.autoplay.timeout && (clearTimeout(e.autoplay.timeout),
                e.autoplay.timeout = void 0),
                e.autoplay.running = !1,
                e.emit("autoplayStop"),
                !0))
        },
        pause: function(e) {
            var t = this;
            t.autoplay.running && (t.autoplay.paused || (t.autoplay.timeout && clearTimeout(t.autoplay.timeout),
                t.autoplay.paused = !0,
                0 === e ? (t.autoplay.paused = !1,
                    t.autoplay.run()) : t.$wrapperEl.transitionEnd(function() {
                    t && (t.autoplay.paused = !1,
                        t.autoplay.running ? t.autoplay.run() : t.autoplay.stop())
                })))
        }
    }, K = {
        setTranslate: function() {
            for (var e = this, t = e.slides, a = 0; a < t.length; a += 1) {
                var i = e.slides.eq(a)
                    , s = -i[0].swiperSlideOffset;
                e.params.virtualTranslate || (s -= e.translate);
                var n = 0;
                e.isHorizontal() || (n = s,
                    s = 0);
                var r = e.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(i[0].progress), 0) : 1 + Math.min(Math.max(i[0].progress, -1), 0);
                i.css({
                    opacity: r
                }).transform("translate3d(" + s + "px, " + n + "px, 0px)")
            }
        },
        setTransition: function(e) {
            var a, i = this, t = i.slides, s = i.$wrapperEl;
            t.transition(e),
            i.params.virtualTranslate && 0 !== e && (a = !1,
                t.transitionEnd(function() {
                    if (!a && i) {
                        a = !0,
                            i.animating = !1;
                        for (var e = ["webkitTransitionEnd", "transitionend"], t = 0; t < e.length; t += 1)
                            s.trigger(e[t])
                    }
                }))
        }
    }, U = {
        setTranslate: function() {
            var e, t = this, a = t.$el, i = t.$wrapperEl, s = t.slides, n = t.width, r = t.height, o = t.rtl, l = t.size, d = t.params.cubeEffect, p = t.isHorizontal(), c = t.virtual && t.params.virtual.enabled, u = 0;
            d.shadow && (p ? (0 === (e = i.find(".swiper-cube-shadow")).length && (e = T('<div class="swiper-cube-shadow"></div>'),
                i.append(e)),
                e.css({
                    height: n + "px"
                })) : 0 === (e = a.find(".swiper-cube-shadow")).length && (e = T('<div class="swiper-cube-shadow"></div>'),
                a.append(e)));
            for (var h, f = 0; f < s.length; f += 1) {
                var m = s.eq(f)
                    , v = f
                    , g = 90 * (v = c ? parseInt(m.attr("data-swiper-slide-index"), 10) : v)
                    , b = Math.floor(g / 360);
                o && (g = -g,
                    b = Math.floor(-g / 360));
                var w = Math.max(Math.min(m[0].progress, 1), -1)
                    , y = 0
                    , x = 0
                    , E = 0;
                v % 4 == 0 ? (y = 4 * -b * l,
                    E = 0) : (v - 1) % 4 == 0 ? (y = 0,
                    E = 4 * -b * l) : (v - 2) % 4 == 0 ? (y = l + 4 * b * l,
                    E = l) : (v - 3) % 4 == 0 && (y = -l,
                    E = 3 * l + 4 * l * b),
                o && (y = -y),
                p || (x = y,
                    y = 0),
                w <= 1 && -1 < w && (u = o ? 90 * -v - 90 * w : 90 * v + 90 * w),
                    m.transform("rotateX(" + (p ? 0 : -g) + "deg) rotateY(" + (p ? g : 0) + "deg) translate3d(" + y + "px, " + x + "px, " + E + "px)"),
                d.slideShadows && (x = p ? m.find(".swiper-slide-shadow-left") : m.find(".swiper-slide-shadow-top"),
                    E = p ? m.find(".swiper-slide-shadow-right") : m.find(".swiper-slide-shadow-bottom"),
                0 === x.length && (x = T('<div class="swiper-slide-shadow-' + (p ? "left" : "top") + '"></div>'),
                    m.append(x)),
                0 === E.length && (E = T('<div class="swiper-slide-shadow-' + (p ? "right" : "bottom") + '"></div>'),
                    m.append(E)),
                x.length && (x[0].style.opacity = Math.max(-w, 0)),
                E.length && (E[0].style.opacity = Math.max(w, 0)))
            }
            i.css({
                "-webkit-transform-origin": "50% 50% -" + l / 2 + "px",
                "-moz-transform-origin": "50% 50% -" + l / 2 + "px",
                "-ms-transform-origin": "50% 50% -" + l / 2 + "px",
                "transform-origin": "50% 50% -" + l / 2 + "px"
            }),
            d.shadow && (p ? e.transform("translate3d(0px, " + (n / 2 + d.shadowOffset) + "px, " + -n / 2 + "px) rotateX(90deg) rotateZ(0deg) scale(" + d.shadowScale + ")") : (h = Math.abs(u) - 90 * Math.floor(Math.abs(u) / 90),
                a = 1.5 - (Math.sin(2 * h * Math.PI / 360) / 2 + Math.cos(2 * h * Math.PI / 360) / 2),
                n = d.shadowScale,
                h = d.shadowScale / a,
                a = d.shadowOffset,
                e.transform("scale3d(" + n + ", 1, " + h + ") translate3d(0px, " + (r / 2 + a) + "px, " + -r / 2 / h + "px) rotateX(-90deg)"))),
                i.transform("translate3d(0px,0," + (S.isSafari || S.isUiWebView ? -l / 2 : 0) + "px) rotateX(" + (t.isHorizontal() ? 0 : u) + "deg) rotateY(" + (t.isHorizontal() ? -u : 0) + "deg)")
        },
        setTransition: function(e) {
            var t = this.$el;
            this.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e),
            this.params.cubeEffect.shadow && !this.isHorizontal() && t.find(".swiper-cube-shadow").transition(e)
        }
    }, _ = {
        setTranslate: function() {
            for (var e = this, t = e.slides, a = 0; a < t.length; a += 1) {
                var i, s, n = t.eq(a), r = n[0].progress, o = -180 * (r = e.params.flipEffect.limitRotation ? Math.max(Math.min(n[0].progress, 1), -1) : r), l = 0, d = -n[0].swiperSlideOffset, p = 0;
                e.isHorizontal() ? e.rtl && (o = -o) : (p = d,
                    l = -o,
                    o = d = 0),
                    n[0].style.zIndex = -Math.abs(Math.round(r)) + t.length,
                e.params.flipEffect.slideShadows && (i = e.isHorizontal() ? n.find(".swiper-slide-shadow-left") : n.find(".swiper-slide-shadow-top"),
                    s = e.isHorizontal() ? n.find(".swiper-slide-shadow-right") : n.find(".swiper-slide-shadow-bottom"),
                0 === i.length && (i = T('<div class="swiper-slide-shadow-' + (e.isHorizontal() ? "left" : "top") + '"></div>'),
                    n.append(i)),
                0 === s.length && (s = T('<div class="swiper-slide-shadow-' + (e.isHorizontal() ? "right" : "bottom") + '"></div>'),
                    n.append(s)),
                i.length && (i[0].style.opacity = Math.max(-r, 0)),
                s.length && (s[0].style.opacity = Math.max(r, 0))),
                    n.transform("translate3d(" + d + "px, " + p + "px, 0px) rotateX(" + l + "deg) rotateY(" + o + "deg)")
            }
        },
        setTransition: function(e) {
            var a, i = this, t = i.slides, s = i.activeIndex, n = i.$wrapperEl;
            t.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e),
            i.params.virtualTranslate && 0 !== e && (a = !1,
                t.eq(s).transitionEnd(function() {
                    if (!a && i && T(this).hasClass(i.params.slideActiveClass)) {
                        a = !0,
                            i.animating = !1;
                        for (var e = ["webkitTransitionEnd", "transitionend"], t = 0; t < e.length; t += 1)
                            n.trigger(e[t])
                    }
                }))
        }
    }, Z = {
        setTranslate: function() {
            for (var e = this, t = e.width, a = e.height, i = e.slides, s = e.$wrapperEl, n = e.slidesSizesGrid, r = e.params.coverflowEffect, o = e.isHorizontal(), e = e.translate, l = o ? t / 2 - e : a / 2 - e, d = o ? r.rotate : -r.rotate, p = r.depth, c = 0, u = i.length; c < u; c += 1) {
                var h = i.eq(c)
                    , f = n[c]
                    , m = (l - h[0].swiperSlideOffset - f / 2) / f * r.modifier
                    , v = o ? d * m : 0
                    , g = o ? 0 : d * m
                    , b = -p * Math.abs(m)
                    , w = o ? 0 : r.stretch * m
                    , f = o ? r.stretch * m : 0;
                Math.abs(f) < .001 && (f = 0),
                Math.abs(w) < .001 && (w = 0),
                Math.abs(b) < .001 && (b = 0),
                Math.abs(v) < .001 && (v = 0),
                Math.abs(g) < .001 && (g = 0),
                    h.transform("translate3d(" + f + "px," + w + "px," + b + "px)  rotateX(" + g + "deg) rotateY(" + v + "deg)"),
                    h[0].style.zIndex = 1 - Math.abs(Math.round(m)),
                r.slideShadows && (g = o ? h.find(".swiper-slide-shadow-left") : h.find(".swiper-slide-shadow-top"),
                    v = o ? h.find(".swiper-slide-shadow-right") : h.find(".swiper-slide-shadow-bottom"),
                0 === g.length && (g = T('<div class="swiper-slide-shadow-' + (o ? "left" : "top") + '"></div>'),
                    h.append(g)),
                0 === v.length && (v = T('<div class="swiper-slide-shadow-' + (o ? "right" : "bottom") + '"></div>'),
                    h.append(v)),
                g.length && (g[0].style.opacity = 0 < m ? m : 0),
                v.length && (v[0].style.opacity = 0 < -m ? -m : 0))
            }
            S.ie && (s[0].style.perspectiveOrigin = l + "px 50%")
        },
        setTransition: function(e) {
            this.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e)
        }
    };
    return z.components = [m, v, g, b, w, y, i, {
        name: "mousewheel",
        params: {
            mousewheel: {
                enabled: !1,
                releaseOnEdges: !1,
                invert: !1,
                forceToAxis: !1,
                sensitivity: 1,
                eventsTarged: "container"
            }
        },
        create: function() {
            D.extend(this, {
                mousewheel: {
                    enabled: !1,
                    enable: H.enable.bind(this),
                    disable: H.disable.bind(this),
                    handle: H.handle.bind(this),
                    lastScrollTime: D.now()
                }
            })
        },
        on: {
            init: function() {
                this.params.mousewheel.enabled && this.mousewheel.enable()
            },
            destroy: function() {
                this.mousewheel.enabled && this.mousewheel.disable()
            }
        }
    }, {
        name: "navigation",
        params: {
            navigation: {
                nextEl: null,
                prevEl: null,
                hideOnClick: !1,
                disabledClass: "swiper-button-disabled",
                hiddenClass: "swiper-button-hidden"
            }
        },
        create: function() {
            D.extend(this, {
                navigation: {
                    init: N.init.bind(this),
                    update: N.update.bind(this),
                    destroy: N.destroy.bind(this)
                }
            })
        },
        on: {
            init: function() {
                this.navigation.init(),
                    this.navigation.update()
            },
            toEdge: function() {
                this.navigation.update()
            },
            fromEdge: function() {
                this.navigation.update()
            },
            destroy: function() {
                this.navigation.destroy()
            },
            click: function(e) {
                var t = this.navigation
                    , a = t.$nextEl
                    , t = t.$prevEl;
                !this.params.navigation.hideOnClick || T(e.target).is(t) || T(e.target).is(a) || (a && a.toggleClass(this.params.navigation.hiddenClass),
                t && t.toggleClass(this.params.navigation.hiddenClass))
            }
        }
    }, {
        name: "pagination",
        params: {
            pagination: {
                el: null,
                bulletElement: "span",
                clickable: !1,
                hideOnClick: !1,
                renderBullet: null,
                renderProgressbar: null,
                renderFraction: null,
                renderCustom: null,
                type: "bullets",
                dynamicBullets: !1,
                bulletClass: "swiper-pagination-bullet",
                bulletActiveClass: "swiper-pagination-bullet-active",
                modifierClass: "swiper-pagination-",
                currentClass: "swiper-pagination-current",
                totalClass: "swiper-pagination-total",
                hiddenClass: "swiper-pagination-hidden",
                progressbarFillClass: "swiper-pagination-progressbar-fill",
                clickableClass: "swiper-pagination-clickable"
            }
        },
        create: function() {
            var e = this;
            D.extend(e, {
                pagination: {
                    init: X.init.bind(e),
                    render: X.render.bind(e),
                    update: X.update.bind(e),
                    destroy: X.destroy.bind(e)
                }
            })
        },
        on: {
            init: function() {
                this.pagination.init(),
                    this.pagination.render(),
                    this.pagination.update()
            },
            activeIndexChange: function() {
                !this.params.loop && void 0 !== this.snapIndex || this.pagination.update()
            },
            snapIndexChange: function() {
                this.params.loop || this.pagination.update()
            },
            slidesLengthChange: function() {
                this.params.loop && (this.pagination.render(),
                    this.pagination.update())
            },
            snapGridLengthChange: function() {
                this.params.loop || (this.pagination.render(),
                    this.pagination.update())
            },
            destroy: function() {
                this.pagination.destroy()
            },
            click: function(e) {
                var t = this;
                t.params.pagination.el && t.params.pagination.hideOnClick && 0 < t.pagination.$el.length && !T(e.target).hasClass(t.params.pagination.bulletClass) && t.pagination.$el.toggleClass(t.params.pagination.hiddenClass)
            }
        }
    }, {
        name: "scrollbar",
        params: {
            scrollbar: {
                el: null,
                dragSize: "auto",
                hide: !1,
                draggable: !1,
                snapOnRelease: !0
            }
        },
        create: function() {
            var e = this;
            D.extend(e, {
                scrollbar: {
                    init: Y.init.bind(e),
                    destroy: Y.destroy.bind(e),
                    updateSize: Y.updateSize.bind(e),
                    setTranslate: Y.setTranslate.bind(e),
                    setTransition: Y.setTransition.bind(e),
                    enableDraggable: Y.enableDraggable.bind(e),
                    disableDraggable: Y.disableDraggable.bind(e),
                    setDragPosition: Y.setDragPosition.bind(e),
                    onDragStart: Y.onDragStart.bind(e),
                    onDragMove: Y.onDragMove.bind(e),
                    onDragEnd: Y.onDragEnd.bind(e),
                    isTouched: !1,
                    timeout: null,
                    dragTimeout: null
                }
            })
        },
        on: {
            init: function() {
                this.scrollbar.init(),
                    this.scrollbar.updateSize(),
                    this.scrollbar.setTranslate()
            },
            update: function() {
                this.scrollbar.updateSize()
            },
            resize: function() {
                this.scrollbar.updateSize()
            },
            observerUpdate: function() {
                this.scrollbar.updateSize()
            },
            setTranslate: function() {
                this.scrollbar.setTranslate()
            },
            setTransition: function(e) {
                this.scrollbar.setTransition(e)
            },
            destroy: function() {
                this.scrollbar.destroy()
            }
        }
    }, {
        name: "parallax",
        params: {
            parallax: {
                enabled: !1
            }
        },
        create: function() {
            D.extend(this, {
                parallax: {
                    setTransform: G.setTransform.bind(this),
                    setTranslate: G.setTranslate.bind(this),
                    setTransition: G.setTransition.bind(this)
                }
            })
        },
        on: {
            beforeInit: function() {
                this.params.watchSlidesProgress = !0
            },
            init: function() {
                this.params.parallax && this.parallax.setTranslate()
            },
            setTranslate: function() {
                this.params.parallax && this.parallax.setTranslate()
            },
            setTransition: function(e) {
                this.params.parallax && this.parallax.setTransition(e)
            }
        }
    }, {
        name: "zoom",
        params: {
            zoom: {
                enabled: !1,
                maxRatio: 3,
                minRatio: 1,
                toggle: !0,
                containerClass: "swiper-zoom-container",
                zoomedSlideClass: "swiper-slide-zoomed"
            }
        },
        create: function() {
            var t = this
                , a = {
                enabled: !1,
                scale: 1,
                currentScale: 1,
                isScaling: !1,
                gesture: {
                    $slideEl: void 0,
                    slideWidth: void 0,
                    slideHeight: void 0,
                    $imageEl: void 0,
                    $imageWrapEl: void 0,
                    maxRatio: 3
                },
                image: {
                    isTouched: void 0,
                    isMoved: void 0,
                    currentX: void 0,
                    currentY: void 0,
                    minX: void 0,
                    minY: void 0,
                    maxX: void 0,
                    maxY: void 0,
                    width: void 0,
                    height: void 0,
                    startX: void 0,
                    startY: void 0,
                    touchesStart: {},
                    touchesCurrent: {}
                },
                velocity: {
                    x: void 0,
                    y: void 0,
                    prevPositionX: void 0,
                    prevPositionY: void 0,
                    prevTime: void 0
                }
            };
            "onGestureStart onGestureChange onGestureEnd onTouchStart onTouchMove onTouchEnd onTransitionEnd toggle enable disable in out".split(" ").forEach(function(e) {
                a[e] = B[e].bind(t)
            }),
                D.extend(t, {
                    zoom: a
                })
        },
        on: {
            init: function() {
                this.params.zoom.enabled && this.zoom.enable()
            },
            destroy: function() {
                this.zoom.disable()
            },
            touchStart: function(e) {
                this.zoom.enabled && this.zoom.onTouchStart(e)
            },
            touchEnd: function(e) {
                this.zoom.enabled && this.zoom.onTouchEnd(e)
            },
            doubleTap: function(e) {
                this.params.zoom.enabled && this.zoom.enabled && this.params.zoom.toggle && this.zoom.toggle(e)
            },
            transitionEnd: function() {
                this.zoom.enabled && this.params.zoom.enabled && this.zoom.onTransitionEnd()
            }
        }
    }, {
        name: "lazy",
        params: {
            lazy: {
                enabled: !1,
                loadPrevNext: !1,
                loadPrevNextAmount: 1,
                loadOnTransitionStart: !1,
                elementClass: "swiper-lazy",
                loadingClass: "swiper-lazy-loading",
                loadedClass: "swiper-lazy-loaded",
                preloaderClass: "swiper-lazy-preloader"
            }
        },
        create: function() {
            D.extend(this, {
                lazy: {
                    initialImageLoaded: !1,
                    load: V.load.bind(this),
                    loadInSlide: V.loadInSlide.bind(this)
                }
            })
        },
        on: {
            beforeInit: function() {
                this.params.preloadImages && (this.params.preloadImages = !1)
            },
            init: function() {
                this.params.lazy.enabled && !this.params.loop && 0 === this.params.initialSlide && this.lazy.load()
            },
            scroll: function() {
                this.params.freeMode && !this.params.freeModeSticky && this.lazy.load()
            },
            resize: function() {
                this.params.lazy.enabled && this.lazy.load()
            },
            scrollbarDragMove: function() {
                this.params.lazy.enabled && this.lazy.load()
            },
            transitionStart: function() {
                var e = this;
                e.params.lazy.enabled && (!e.params.lazy.loadOnTransitionStart && (e.params.lazy.loadOnTransitionStart || e.lazy.initialImageLoaded) || e.lazy.load())
            },
            transitionEnd: function() {
                this.params.lazy.enabled && !this.params.lazy.loadOnTransitionStart && this.lazy.load()
            }
        }
    }, {
        name: "controller",
        params: {
            controller: {
                control: void 0,
                inverse: !1,
                by: "slide"
            }
        },
        create: function() {
            var e = this;
            D.extend(e, {
                controller: {
                    control: e.params.controller.control,
                    getInterpolateFunction: R.getInterpolateFunction.bind(e),
                    setTranslate: R.setTranslate.bind(e),
                    setTransition: R.setTransition.bind(e)
                }
            })
        },
        on: {
            update: function() {
                this.controller.control && this.controller.spline && (this.controller.spline = void 0,
                    delete this.controller.spline)
            },
            resize: function() {
                this.controller.control && this.controller.spline && (this.controller.spline = void 0,
                    delete this.controller.spline)
            },
            observerUpdate: function() {
                this.controller.control && this.controller.spline && (this.controller.spline = void 0,
                    delete this.controller.spline)
            },
            setTranslate: function(e, t) {
                this.controller.control && this.controller.setTranslate(e, t)
            },
            setTransition: function(e, t) {
                this.controller.control && this.controller.setTransition(e, t)
            }
        }
    }, {
        name: "a11y",
        params: {
            a11y: {
                enabled: !1,
                notificationClass: "swiper-notification",
                prevSlideMessage: "Previous slide",
                nextSlideMessage: "Next slide",
                firstSlideMessage: "This is the first slide",
                lastSlideMessage: "This is the last slide",
                paginationBulletMessage: "Go to slide {{index}}"
            }
        },
        create: function() {
            var t = this;
            D.extend(t, {
                a11y: {
                    liveRegion: T('<span class="' + t.params.a11y.notificationClass + '" aria-live="assertive" aria-atomic="true"></span>')
                }
            }),
                Object.keys(W).forEach(function(e) {
                    t.a11y[e] = W[e].bind(t)
                })
        },
        on: {
            init: function() {
                this.params.a11y.enabled && (this.a11y.init(),
                    this.a11y.updateNavigation())
            },
            toEdge: function() {
                this.params.a11y.enabled && this.a11y.updateNavigation()
            },
            fromEdge: function() {
                this.params.a11y.enabled && this.a11y.updateNavigation()
            },
            paginationUpdate: function() {
                this.params.a11y.enabled && this.a11y.updatePagination()
            },
            destroy: function() {
                this.params.a11y.enabled && this.a11y.destroy()
            }
        }
    }, {
        name: "history",
        params: {
            history: {
                enabled: !1,
                replaceState: !1,
                key: "slides"
            }
        },
        create: function() {
            var e = this;
            D.extend(e, {
                history: {
                    init: F.init.bind(e),
                    setHistory: F.setHistory.bind(e),
                    setHistoryPopState: F.setHistoryPopState.bind(e),
                    scrollToSlide: F.scrollToSlide.bind(e)
                }
            })
        },
        on: {
            init: function() {
                this.params.history.enabled && this.history.init()
            },
            destroy: function() {
                this.params.history.enabled && this.history.destroy()
            },
            transitionEnd: function() {
                this.history.initialized && this.history.setHistory(this.params.history.key, this.activeIndex)
            }
        }
    }, {
        name: "hash-navigation",
        params: {
            hashNavigation: {
                enabled: !1,
                replaceState: !1,
                watchState: !1
            }
        },
        create: function() {
            var e = this;
            D.extend(e, {
                hashNavigation: {
                    initialized: !1,
                    init: j.init.bind(e),
                    destroy: j.destroy.bind(e),
                    setHash: j.setHash.bind(e),
                    onHashCange: j.onHashCange.bind(e)
                }
            })
        },
        on: {
            init: function() {
                this.params.hashNavigation.enabled && this.hashNavigation.init()
            },
            destroy: function() {
                this.params.hashNavigation.enabled && this.hashNavigation.destroy()
            },
            transitionEnd: function() {
                this.hashNavigation.initialized && this.hashNavigation.setHash()
            }
        }
    }, {
        name: "autoplay",
        params: {
            autoplay: {
                enabled: !1,
                delay: 3e3,
                disableOnInteraction: !0,
                stopOnLastSlide: !1
            }
        },
        create: function() {
            var e = this;
            D.extend(e, {
                autoplay: {
                    running: !1,
                    paused: !1,
                    run: q.run.bind(e),
                    start: q.start.bind(e),
                    stop: q.stop.bind(e),
                    pause: q.pause.bind(e)
                }
            })
        },
        on: {
            init: function() {
                this.params.autoplay.enabled && this.autoplay.start()
            },
            beforeTransitionStart: function(e, t) {
                this.autoplay.running && (t || !this.params.autoplay.disableOnInteraction ? this.autoplay.pause(e) : this.autoplay.stop())
            },
            sliderFirstMove: function() {
                this.autoplay.running && (this.params.autoplay.disableOnInteraction ? this.autoplay.stop() : this.autoplay.pause())
            },
            destroy: function() {
                this.autoplay.running && this.autoplay.stop()
            }
        }
    }, {
        name: "effect-fade",
        params: {
            fadeEffect: {
                crossFade: !1
            }
        },
        create: function() {
            D.extend(this, {
                fadeEffect: {
                    setTranslate: K.setTranslate.bind(this),
                    setTransition: K.setTransition.bind(this)
                }
            })
        },
        on: {
            beforeInit: function() {
                "fade" === this.params.effect && (this.classNames.push(this.params.containerModifierClass + "fade"),
                    D.extend(this.params, {
                        slidesPerView: 1,
                        slidesPerColumn: 1,
                        slidesPerGroup: 1,
                        watchSlidesProgress: !0,
                        spaceBetween: 0,
                        virtualTranslate: !0
                    }))
            },
            setTranslate: function() {
                "fade" === this.params.effect && this.fadeEffect.setTranslate()
            },
            setTransition: function(e) {
                "fade" === this.params.effect && this.fadeEffect.setTransition(e)
            }
        }
    }, {
        name: "effect-cube",
        params: {
            cubeEffect: {
                slideShadows: !0,
                shadow: !0,
                shadowOffset: 20,
                shadowScale: .94
            }
        },
        create: function() {
            D.extend(this, {
                cubeEffect: {
                    setTranslate: U.setTranslate.bind(this),
                    setTransition: U.setTransition.bind(this)
                }
            })
        },
        on: {
            beforeInit: function() {
                var e = this;
                "cube" === e.params.effect && (e.classNames.push(e.params.containerModifierClass + "cube"),
                    e.classNames.push(e.params.containerModifierClass + "3d"),
                    D.extend(e.params, {
                        slidesPerView: 1,
                        slidesPerColumn: 1,
                        slidesPerGroup: 1,
                        watchSlidesProgress: !0,
                        resistanceRatio: 0,
                        spaceBetween: 0,
                        centeredSlides: !1,
                        virtualTranslate: !0
                    }))
            },
            setTranslate: function() {
                "cube" === this.params.effect && this.cubeEffect.setTranslate()
            },
            setTransition: function(e) {
                "cube" === this.params.effect && this.cubeEffect.setTransition(e)
            }
        }
    }, {
        name: "effect-flip",
        params: {
            flipEffect: {
                slideShadows: !0,
                limitRotation: !0
            }
        },
        create: function() {
            D.extend(this, {
                flipEffect: {
                    setTranslate: _.setTranslate.bind(this),
                    setTransition: _.setTransition.bind(this)
                }
            })
        },
        on: {
            beforeInit: function() {
                var e = this;
                "flip" === e.params.effect && (e.classNames.push(e.params.containerModifierClass + "flip"),
                    e.classNames.push(e.params.containerModifierClass + "3d"),
                    D.extend(e.params, {
                        slidesPerView: 1,
                        slidesPerColumn: 1,
                        slidesPerGroup: 1,
                        watchSlidesProgress: !0,
                        spaceBetween: 0,
                        virtualTranslate: !0
                    }))
            },
            setTranslate: function() {
                "flip" === this.params.effect && this.flipEffect.setTranslate()
            },
            setTransition: function(e) {
                "flip" === this.params.effect && this.flipEffect.setTransition(e)
            }
        }
    }, {
        name: "effect-coverflow",
        params: {
            coverflowEffect: {
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: !0
            }
        },
        create: function() {
            D.extend(this, {
                coverflowEffect: {
                    setTranslate: Z.setTranslate.bind(this),
                    setTransition: Z.setTransition.bind(this)
                }
            })
        },
        on: {
            beforeInit: function() {
                var e = this;
                "coverflow" === e.params.effect && (e.classNames.push(e.params.containerModifierClass + "coverflow"),
                    e.classNames.push(e.params.containerModifierClass + "3d"),
                    e.params.watchSlidesProgress = !0)
            },
            setTranslate: function() {
                "coverflow" === this.params.effect && this.coverflowEffect.setTranslate()
            },
            setTransition: function(e) {
                "coverflow" === this.params.effect && this.coverflowEffect.setTransition(e)
            }
        }
    }],
        z
});
