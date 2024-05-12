!function(e, t) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
            if (!e.document)
                throw new Error("jQuery requires a window with a document");
            return t(e)
        }
        : t(e)
}("undefined" != typeof window ? window : this, function(C, e) {
    "use strict";
    function g(e) {
        return null != e && e === e.window
    }
    var t = []
        , T = C.document
        , n = Object.getPrototypeOf
        , u = t.slice
        , v = t.concat
        , s = t.push
        , o = t.indexOf
        , r = {}
        , i = r.toString
        , y = r.hasOwnProperty
        , a = y.toString
        , l = a.call(Object)
        , m = {}
        , b = function(e) {
        return "function" == typeof e && "number" != typeof e.nodeType
    }
        , c = {
        type: !0,
        src: !0,
        nonce: !0,
        noModule: !0
    };
    function x(e, t, n) {
        var r, o, i = (n = n || T).createElement("script");
        if (i.text = e,
            t)
            for (r in c)
                (o = t[r] || t.getAttribute && t.getAttribute(r)) && i.setAttribute(r, o);
        n.head.appendChild(i).parentNode.removeChild(i)
    }
    function h(e) {
        return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? r[i.call(e)] || "object" : typeof e
    }
    var f = "3.4.1"
        , j = function(e, t) {
        return new j.fn.init(e,t)
    }
        , p = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
    function d(e) {
        var t = !!e && "length"in e && e.length
            , n = h(e);
        return !b(e) && !g(e) && ("array" === n || 0 === t || "number" == typeof t && 0 < t && t - 1 in e)
    }
    j.fn = j.prototype = {
        jquery: f,
        constructor: j,
        length: 0,
        toArray: function() {
            return u.call(this)
        },
        get: function(e) {
            return null == e ? u.call(this) : e < 0 ? this[e + this.length] : this[e]
        },
        pushStack: function(e) {
            e = j.merge(this.constructor(), e);
            return e.prevObject = this,
                e
        },
        each: function(e) {
            return j.each(this, e)
        },
        map: function(n) {
            return this.pushStack(j.map(this, function(e, t) {
                return n.call(e, t, e)
            }))
        },
        slice: function() {
            return this.pushStack(u.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(e) {
            var t = this.length
                , e = +e + (e < 0 ? t : 0);
            return this.pushStack(0 <= e && e < t ? [this[e]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: s,
        sort: t.sort,
        splice: t.splice
    },
        j.extend = j.fn.extend = function() {
            var e, t, n, r, o, i = arguments[0] || {}, a = 1, u = arguments.length, s = !1;
            for ("boolean" == typeof i && (s = i,
                i = arguments[a] || {},
                a++),
                 "object" == typeof i || b(i) || (i = {}),
                 a === u && (i = this,
                     a--); a < u; a++)
                if (null != (e = arguments[a]))
                    for (t in e)
                        n = e[t],
                        "__proto__" !== t && i !== n && (s && n && (j.isPlainObject(n) || (r = Array.isArray(n))) ? (o = i[t],
                            o = r && !Array.isArray(o) ? [] : r || j.isPlainObject(o) ? o : {},
                            r = !1,
                            i[t] = j.extend(s, o, n)) : void 0 !== n && (i[t] = n));
            return i
        }
        ,
        j.extend({
            expando: "jQuery" + (f + Math.random()).replace(/\D/g, ""),
            isReady: !0,
            error: function(e) {
                throw new Error(e)
            },
            noop: function() {},
            isPlainObject: function(e) {
                return !(!e || "[object Object]" !== i.call(e)) && (!(e = n(e)) || "function" == typeof (e = y.call(e, "constructor") && e.constructor) && a.call(e) === l)
            },
            isEmptyObject: function(e) {
                for (var t in e)
                    return !1;
                return !0
            },
            globalEval: function(e, t) {
                x(e, {
                    nonce: t && t.nonce
                })
            },
            each: function(e, t) {
                var n, r = 0;
                if (d(e))
                    for (n = e.length; r < n && !1 !== t.call(e[r], r, e[r]); r++)
                        ;
                else
                    for (r in e)
                        if (!1 === t.call(e[r], r, e[r]))
                            break;
                return e
            },
            trim: function(e) {
                return null == e ? "" : (e + "").replace(p, "")
            },
            makeArray: function(e, t) {
                t = t || [];
                return null != e && (d(Object(e)) ? j.merge(t, "string" == typeof e ? [e] : e) : s.call(t, e)),
                    t
            },
            inArray: function(e, t, n) {
                return null == t ? -1 : o.call(t, e, n)
            },
            merge: function(e, t) {
                for (var n = +t.length, r = 0, o = e.length; r < n; r++)
                    e[o++] = t[r];
                return e.length = o,
                    e
            },
            grep: function(e, t, n) {
                for (var r = [], o = 0, i = e.length, a = !n; o < i; o++)
                    !t(e[o], o) != a && r.push(e[o]);
                return r
            },
            map: function(e, t, n) {
                var r, o, i = 0, a = [];
                if (d(e))
                    for (r = e.length; i < r; i++)
                        null != (o = t(e[i], i, n)) && a.push(o);
                else
                    for (i in e)
                        null != (o = t(e[i], i, n)) && a.push(o);
                return v.apply([], a)
            },
            guid: 1,
            support: m
        }),
    "function" == typeof Symbol && (j.fn[Symbol.iterator] = t[Symbol.iterator]),
        j.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
            r["[object " + t + "]"] = t.toLowerCase()
        });
    var w = function(n) {
        function f(e, t, n) {
            var r = "0x" + t - 65536;
            return r != r || n ? t : r < 0 ? String.fromCharCode(65536 + r) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
        }
        function r() {
            C()
        }
        var e, p, x, i, o, d, h, g, w, s, l, C, T, a, j, v, u, c, y, k = "sizzle" + +new Date, m = n.document, E = 0, b = 0, S = se(), _ = se(), N = se(), A = se(), D = function(e, t) {
            return e === t && (l = !0),
                0
        }, O = {}.hasOwnProperty, t = [], q = t.pop, L = t.push, I = t.push, M = t.slice, H = function(e, t) {
            for (var n = 0, r = e.length; n < r; n++)
                if (e[n] === t)
                    return n;
            return -1
        }, P = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", R = "[\\x20\\t\\r\\n\\f]", B = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+", $ = "\\[" + R + "*(" + B + ")(?:" + R + "*([*^$|!~]?=)" + R + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + B + "))|)" + R + "*\\]", W = ":(" + B + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + $ + ")*)|.*)\\)|)", F = new RegExp(R + "+","g"), z = new RegExp("^" + R + "+|((?:^|[^\\\\])(?:\\\\.)*)" + R + "+$","g"), Q = new RegExp("^" + R + "*," + R + "*"), U = new RegExp("^" + R + "*([>+~]|" + R + ")" + R + "*"), X = new RegExp(R + "|>"), V = new RegExp(W), G = new RegExp("^" + B + "$"), Y = {
            ID: new RegExp("^#(" + B + ")"),
            CLASS: new RegExp("^\\.(" + B + ")"),
            TAG: new RegExp("^(" + B + "|[*])"),
            ATTR: new RegExp("^" + $),
            PSEUDO: new RegExp("^" + W),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + R + "*(even|odd|(([+-]|)(\\d*)n|)" + R + "*(?:([+-]|)" + R + "*(\\d+)|))" + R + "*\\)|)","i"),
            bool: new RegExp("^(?:" + P + ")$","i"),
            needsContext: new RegExp("^" + R + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + R + "*((?:-\\d)?\\d*)" + R + "*\\)|)(?=[^-]|$)","i")
        }, K = /HTML$/i, J = /^(?:input|select|textarea|button)$/i, Z = /^h\d$/i, ee = /^[^{]+\{\s*\[native \w/, te = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, ne = /[+~]/, re = new RegExp("\\\\([\\da-f]{1,6}" + R + "?|(" + R + ")|.)","ig"), oe = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, ie = function(e, t) {
            return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
        }, ae = me(function(e) {
            return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase()
        }, {
            dir: "parentNode",
            next: "legend"
        });
        try {
            I.apply(t = M.call(m.childNodes), m.childNodes),
                t[m.childNodes.length].nodeType
        } catch (e) {
            I = {
                apply: t.length ? function(e, t) {
                        L.apply(e, M.call(t))
                    }
                    : function(e, t) {
                        for (var n = e.length, r = 0; e[n++] = t[r++]; )
                            ;
                        e.length = n - 1
                    }
            }
        }
        function ue(t, e, n, r) {
            var o, i, a, u, s, l, c = e && e.ownerDocument, f = e ? e.nodeType : 9;
            if (n = n || [],
            "string" != typeof t || !t || 1 !== f && 9 !== f && 11 !== f)
                return n;
            if (!r && ((e ? e.ownerDocument || e : m) !== T && C(e),
                e = e || T,
                j)) {
                if (11 !== f && (u = te.exec(t)))
                    if (l = u[1]) {
                        if (9 === f) {
                            if (!(i = e.getElementById(l)))
                                return n;
                            if (i.id === l)
                                return n.push(i),
                                    n
                        } else if (c && (i = c.getElementById(l)) && y(e, i) && i.id === l)
                            return n.push(i),
                                n
                    } else {
                        if (u[2])
                            return I.apply(n, e.getElementsByTagName(t)),
                                n;
                        if ((l = u[3]) && p.getElementsByClassName && e.getElementsByClassName)
                            return I.apply(n, e.getElementsByClassName(l)),
                                n
                    }
                if (p.qsa && !A[t + " "] && (!v || !v.test(t)) && (1 !== f || "object" !== e.nodeName.toLowerCase())) {
                    if (l = t,
                        c = e,
                    1 === f && X.test(t)) {
                        for ((a = e.getAttribute("id")) ? a = a.replace(oe, ie) : e.setAttribute("id", a = k),
                                 o = (s = d(t)).length; o--; )
                            s[o] = "#" + a + " " + ye(s[o]);
                        l = s.join(","),
                            c = ne.test(t) && ge(e.parentNode) || e
                    }
                    try {
                        return I.apply(n, c.querySelectorAll(l)),
                            n
                    } catch (e) {
                        A(t, !0)
                    } finally {
                        a === k && e.removeAttribute("id")
                    }
                }
            }
            return g(t.replace(z, "$1"), e, n, r)
        }
        function se() {
            var n = [];
            function r(e, t) {
                return n.push(e + " ") > x.cacheLength && delete r[n.shift()],
                    r[e + " "] = t
            }
            return r
        }
        function le(e) {
            return e[k] = !0,
                e
        }
        function ce(e) {
            var t = T.createElement("fieldset");
            try {
                return !!e(t)
            } catch (e) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t),
                    t = null
            }
        }
        function fe(e, t) {
            for (var n = e.split("|"), r = n.length; r--; )
                x.attrHandle[n[r]] = t
        }
        function pe(e, t) {
            var n = t && e
                , r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
            if (r)
                return r;
            if (n)
                for (; n = n.nextSibling; )
                    if (n === t)
                        return -1;
            return e ? 1 : -1
        }
        function de(t) {
            return function(e) {
                return "form"in e ? e.parentNode && !1 === e.disabled ? "label"in e ? "label"in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && ae(e) === t : e.disabled === t : "label"in e && e.disabled === t
            }
        }
        function he(a) {
            return le(function(i) {
                return i = +i,
                    le(function(e, t) {
                        for (var n, r = a([], e.length, i), o = r.length; o--; )
                            e[n = r[o]] && (e[n] = !(t[n] = e[n]))
                    })
            })
        }
        function ge(e) {
            return e && void 0 !== e.getElementsByTagName && e
        }
        for (e in p = ue.support = {},
            o = ue.isXML = function(e) {
                var t = e.namespaceURI
                    , e = (e.ownerDocument || e).documentElement;
                return !K.test(t || e && e.nodeName || "HTML")
            }
            ,
            C = ue.setDocument = function(e) {
                var t, e = e ? e.ownerDocument || e : m;
                return e !== T && 9 === e.nodeType && e.documentElement && (a = (T = e).documentElement,
                        j = !o(T),
                    m !== T && (t = T.defaultView) && t.top !== t && (t.addEventListener ? t.addEventListener("unload", r, !1) : t.attachEvent && t.attachEvent("onunload", r)),
                        p.attributes = ce(function(e) {
                            return e.className = "i",
                                !e.getAttribute("className")
                        }),
                        p.getElementsByTagName = ce(function(e) {
                            return e.appendChild(T.createComment("")),
                                !e.getElementsByTagName("*").length
                        }),
                        p.getElementsByClassName = ee.test(T.getElementsByClassName),
                        p.getById = ce(function(e) {
                            return a.appendChild(e).id = k,
                            !T.getElementsByName || !T.getElementsByName(k).length
                        }),
                        p.getById ? (x.filter.ID = function(e) {
                                var t = e.replace(re, f);
                                return function(e) {
                                    return e.getAttribute("id") === t
                                }
                            }
                                ,
                                x.find.ID = function(e, t) {
                                    if (void 0 !== t.getElementById && j) {
                                        e = t.getElementById(e);
                                        return e ? [e] : []
                                    }
                                }
                        ) : (x.filter.ID = function(e) {
                                var t = e.replace(re, f);
                                return function(e) {
                                    e = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                                    return e && e.value === t
                                }
                            }
                                ,
                                x.find.ID = function(e, t) {
                                    if (void 0 !== t.getElementById && j) {
                                        var n, r, o, i = t.getElementById(e);
                                        if (i) {
                                            if ((n = i.getAttributeNode("id")) && n.value === e)
                                                return [i];
                                            for (o = t.getElementsByName(e),
                                                     r = 0; i = o[r++]; )
                                                if ((n = i.getAttributeNode("id")) && n.value === e)
                                                    return [i]
                                        }
                                        return []
                                    }
                                }
                        ),
                        x.find.TAG = p.getElementsByTagName ? function(e, t) {
                                return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : p.qsa ? t.querySelectorAll(e) : void 0
                            }
                            : function(e, t) {
                                var n, r = [], o = 0, i = t.getElementsByTagName(e);
                                if ("*" !== e)
                                    return i;
                                for (; n = i[o++]; )
                                    1 === n.nodeType && r.push(n);
                                return r
                            }
                        ,
                        x.find.CLASS = p.getElementsByClassName && function(e, t) {
                            if (void 0 !== t.getElementsByClassName && j)
                                return t.getElementsByClassName(e)
                        }
                        ,
                        u = [],
                        v = [],
                    (p.qsa = ee.test(T.querySelectorAll)) && (ce(function(e) {
                        a.appendChild(e).innerHTML = "<a id='" + k + "'></a><select id='" + k + "-\r\\' msallowcapture=''><option selected=''></option></select>",
                        e.querySelectorAll("[msallowcapture^='']").length && v.push("[*^$]=" + R + "*(?:''|\"\")"),
                        e.querySelectorAll("[selected]").length || v.push("\\[" + R + "*(?:value|" + P + ")"),
                        e.querySelectorAll("[id~=" + k + "-]").length || v.push("~="),
                        e.querySelectorAll(":checked").length || v.push(":checked"),
                        e.querySelectorAll("a#" + k + "+*").length || v.push(".#.+[+~]")
                    }),
                        ce(function(e) {
                            e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                            var t = T.createElement("input");
                            t.setAttribute("type", "hidden"),
                                e.appendChild(t).setAttribute("name", "D"),
                            e.querySelectorAll("[name=d]").length && v.push("name" + R + "*[*^$|!~]?="),
                            2 !== e.querySelectorAll(":enabled").length && v.push(":enabled", ":disabled"),
                                a.appendChild(e).disabled = !0,
                            2 !== e.querySelectorAll(":disabled").length && v.push(":enabled", ":disabled"),
                                e.querySelectorAll("*,:x"),
                                v.push(",.*:")
                        })),
                    (p.matchesSelector = ee.test(c = a.matches || a.webkitMatchesSelector || a.mozMatchesSelector || a.oMatchesSelector || a.msMatchesSelector)) && ce(function(e) {
                        p.disconnectedMatch = c.call(e, "*"),
                            c.call(e, "[s!='']:x"),
                            u.push("!=", W)
                    }),
                        v = v.length && new RegExp(v.join("|")),
                        u = u.length && new RegExp(u.join("|")),
                        t = ee.test(a.compareDocumentPosition),
                        y = t || ee.test(a.contains) ? function(e, t) {
                                var n = 9 === e.nodeType ? e.documentElement : e
                                    , t = t && t.parentNode;
                                return e === t || !(!t || 1 !== t.nodeType || !(n.contains ? n.contains(t) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(t)))
                            }
                            : function(e, t) {
                                if (t)
                                    for (; t = t.parentNode; )
                                        if (t === e)
                                            return !0;
                                return !1
                            }
                        ,
                        D = t ? function(e, t) {
                                if (e === t)
                                    return l = !0,
                                        0;
                                var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                                return n || (1 & (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !p.sortDetached && t.compareDocumentPosition(e) === n ? e === T || e.ownerDocument === m && y(m, e) ? -1 : t === T || t.ownerDocument === m && y(m, t) ? 1 : s ? H(s, e) - H(s, t) : 0 : 4 & n ? -1 : 1)
                            }
                            : function(e, t) {
                                if (e === t)
                                    return l = !0,
                                        0;
                                var n, r = 0, o = e.parentNode, i = t.parentNode, a = [e], u = [t];
                                if (!o || !i)
                                    return e === T ? -1 : t === T ? 1 : o ? -1 : i ? 1 : s ? H(s, e) - H(s, t) : 0;
                                if (o === i)
                                    return pe(e, t);
                                for (n = e; n = n.parentNode; )
                                    a.unshift(n);
                                for (n = t; n = n.parentNode; )
                                    u.unshift(n);
                                for (; a[r] === u[r]; )
                                    r++;
                                return r ? pe(a[r], u[r]) : a[r] === m ? -1 : u[r] === m ? 1 : 0
                            }
                ),
                    T
            }
            ,
            ue.matches = function(e, t) {
                return ue(e, null, null, t)
            }
            ,
            ue.matchesSelector = function(e, t) {
                if ((e.ownerDocument || e) !== T && C(e),
                p.matchesSelector && j && !A[t + " "] && (!u || !u.test(t)) && (!v || !v.test(t)))
                    try {
                        var n = c.call(e, t);
                        if (n || p.disconnectedMatch || e.document && 11 !== e.document.nodeType)
                            return n
                    } catch (e) {
                        A(t, !0)
                    }
                return 0 < ue(t, T, null, [e]).length
            }
            ,
            ue.contains = function(e, t) {
                return (e.ownerDocument || e) !== T && C(e),
                    y(e, t)
            }
            ,
            ue.attr = function(e, t) {
                (e.ownerDocument || e) !== T && C(e);
                var n = x.attrHandle[t.toLowerCase()]
                    , n = n && O.call(x.attrHandle, t.toLowerCase()) ? n(e, t, !j) : void 0;
                return void 0 !== n ? n : p.attributes || !j ? e.getAttribute(t) : (n = e.getAttributeNode(t)) && n.specified ? n.value : null
            }
            ,
            ue.escape = function(e) {
                return (e + "").replace(oe, ie)
            }
            ,
            ue.error = function(e) {
                throw new Error("Syntax error, unrecognized expression: " + e)
            }
            ,
            ue.uniqueSort = function(e) {
                var t, n = [], r = 0, o = 0;
                if (l = !p.detectDuplicates,
                    s = !p.sortStable && e.slice(0),
                    e.sort(D),
                    l) {
                    for (; t = e[o++]; )
                        t === e[o] && (r = n.push(o));
                    for (; r--; )
                        e.splice(n[r], 1)
                }
                return s = null,
                    e
            }
            ,
            i = ue.getText = function(e) {
                var t, n = "", r = 0, o = e.nodeType;
                if (o) {
                    if (1 === o || 9 === o || 11 === o) {
                        if ("string" == typeof e.textContent)
                            return e.textContent;
                        for (e = e.firstChild; e; e = e.nextSibling)
                            n += i(e)
                    } else if (3 === o || 4 === o)
                        return e.nodeValue
                } else
                    for (; t = e[r++]; )
                        n += i(t);
                return n
            }
            ,
            (x = ue.selectors = {
                cacheLength: 50,
                createPseudo: le,
                match: Y,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: !0
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: !0
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function(e) {
                        return e[1] = e[1].replace(re, f),
                            e[3] = (e[3] || e[4] || e[5] || "").replace(re, f),
                        "~=" === e[2] && (e[3] = " " + e[3] + " "),
                            e.slice(0, 4)
                    },
                    CHILD: function(e) {
                        return e[1] = e[1].toLowerCase(),
                            "nth" === e[1].slice(0, 3) ? (e[3] || ue.error(e[0]),
                                e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])),
                                e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && ue.error(e[0]),
                            e
                    },
                    PSEUDO: function(e) {
                        var t, n = !e[6] && e[2];
                        return Y.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && V.test(n) && (t = d(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t),
                            e[2] = n.slice(0, t)),
                            e.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function(e) {
                        var t = e.replace(re, f).toLowerCase();
                        return "*" === e ? function() {
                                return !0
                            }
                            : function(e) {
                                return e.nodeName && e.nodeName.toLowerCase() === t
                            }
                    },
                    CLASS: function(e) {
                        var t = S[e + " "];
                        return t || (t = new RegExp("(^|" + R + ")" + e + "(" + R + "|$)")) && S(e, function(e) {
                            return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
                        })
                    },
                    ATTR: function(t, n, r) {
                        return function(e) {
                            e = ue.attr(e, t);
                            return null == e ? "!=" === n : !n || (e += "",
                                "=" === n ? e === r : "!=" === n ? e !== r : "^=" === n ? r && 0 === e.indexOf(r) : "*=" === n ? r && -1 < e.indexOf(r) : "$=" === n ? r && e.slice(-r.length) === r : "~=" === n ? -1 < (" " + e.replace(F, " ") + " ").indexOf(r) : "|=" === n && (e === r || e.slice(0, r.length + 1) === r + "-"))
                        }
                    },
                    CHILD: function(h, e, t, g, v) {
                        var y = "nth" !== h.slice(0, 3)
                            , m = "last" !== h.slice(-4)
                            , b = "of-type" === e;
                        return 1 === g && 0 === v ? function(e) {
                                return !!e.parentNode
                            }
                            : function(e, t, n) {
                                var r, o, i, a, u, s, l = y != m ? "nextSibling" : "previousSibling", c = e.parentNode, f = b && e.nodeName.toLowerCase(), p = !n && !b, d = !1;
                                if (c) {
                                    if (y) {
                                        for (; l; ) {
                                            for (a = e; a = a[l]; )
                                                if (b ? a.nodeName.toLowerCase() === f : 1 === a.nodeType)
                                                    return !1;
                                            s = l = "only" === h && !s && "nextSibling"
                                        }
                                        return !0
                                    }
                                    if (s = [m ? c.firstChild : c.lastChild],
                                    m && p) {
                                        for (d = (u = (r = (o = (i = (a = c)[k] || (a[k] = {}))[a.uniqueID] || (i[a.uniqueID] = {}))[h] || [])[0] === E && r[1]) && r[2],
                                                 a = u && c.childNodes[u]; a = ++u && a && a[l] || (d = u = 0) || s.pop(); )
                                            if (1 === a.nodeType && ++d && a === e) {
                                                o[h] = [E, u, d];
                                                break
                                            }
                                    } else if (!1 === (d = p ? u = (r = (o = (i = (a = e)[k] || (a[k] = {}))[a.uniqueID] || (i[a.uniqueID] = {}))[h] || [])[0] === E && r[1] : d))
                                        for (; (a = ++u && a && a[l] || (d = u = 0) || s.pop()) && ((b ? a.nodeName.toLowerCase() !== f : 1 !== a.nodeType) || !++d || (p && ((o = (i = a[k] || (a[k] = {}))[a.uniqueID] || (i[a.uniqueID] = {}))[h] = [E, d]),
                                        a !== e)); )
                                            ;
                                    return (d -= v) === g || d % g == 0 && 0 <= d / g
                                }
                            }
                    },
                    PSEUDO: function(e, i) {
                        var t, a = x.pseudos[e] || x.setFilters[e.toLowerCase()] || ue.error("unsupported pseudo: " + e);
                        return a[k] ? a(i) : 1 < a.length ? (t = [e, e, "", i],
                                x.setFilters.hasOwnProperty(e.toLowerCase()) ? le(function(e, t) {
                                    for (var n, r = a(e, i), o = r.length; o--; )
                                        e[n = H(e, r[o])] = !(t[n] = r[o])
                                }) : function(e) {
                                    return a(e, 0, t)
                                }
                        ) : a
                    }
                },
                pseudos: {
                    not: le(function(e) {
                        var r = []
                            , o = []
                            , u = h(e.replace(z, "$1"));
                        return u[k] ? le(function(e, t, n, r) {
                            for (var o, i = u(e, null, r, []), a = e.length; a--; )
                                (o = i[a]) && (e[a] = !(t[a] = o))
                        }) : function(e, t, n) {
                            return r[0] = e,
                                u(r, null, n, o),
                                r[0] = null,
                                !o.pop()
                        }
                    }),
                    has: le(function(t) {
                        return function(e) {
                            return 0 < ue(t, e).length
                        }
                    }),
                    contains: le(function(t) {
                        return t = t.replace(re, f),
                            function(e) {
                                return -1 < (e.textContent || i(e)).indexOf(t)
                            }
                    }),
                    lang: le(function(n) {
                        return G.test(n || "") || ue.error("unsupported lang: " + n),
                            n = n.replace(re, f).toLowerCase(),
                            function(e) {
                                var t;
                                do {
                                    if (t = j ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang"))
                                        return (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-")
                                } while ((e = e.parentNode) && 1 === e.nodeType);
                                return !1
                            }
                    }),
                    target: function(e) {
                        var t = n.location && n.location.hash;
                        return t && t.slice(1) === e.id
                    },
                    root: function(e) {
                        return e === a
                    },
                    focus: function(e) {
                        return e === T.activeElement && (!T.hasFocus || T.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                    },
                    enabled: de(!1),
                    disabled: de(!0),
                    checked: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && !!e.checked || "option" === t && !!e.selected
                    },
                    selected: function(e) {
                        return e.parentNode && e.parentNode.selectedIndex,
                        !0 === e.selected
                    },
                    empty: function(e) {
                        for (e = e.firstChild; e; e = e.nextSibling)
                            if (e.nodeType < 6)
                                return !1;
                        return !0
                    },
                    parent: function(e) {
                        return !x.pseudos.empty(e)
                    },
                    header: function(e) {
                        return Z.test(e.nodeName)
                    },
                    input: function(e) {
                        return J.test(e.nodeName)
                    },
                    button: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && "button" === e.type || "button" === t
                    },
                    text: function(e) {
                        return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (e = e.getAttribute("type")) || "text" === e.toLowerCase())
                    },
                    first: he(function() {
                        return [0]
                    }),
                    last: he(function(e, t) {
                        return [t - 1]
                    }),
                    eq: he(function(e, t, n) {
                        return [n < 0 ? n + t : n]
                    }),
                    even: he(function(e, t) {
                        for (var n = 0; n < t; n += 2)
                            e.push(n);
                        return e
                    }),
                    odd: he(function(e, t) {
                        for (var n = 1; n < t; n += 2)
                            e.push(n);
                        return e
                    }),
                    lt: he(function(e, t, n) {
                        for (var r = n < 0 ? n + t : t < n ? t : n; 0 <= --r; )
                            e.push(r);
                        return e
                    }),
                    gt: he(function(e, t, n) {
                        for (var r = n < 0 ? n + t : n; ++r < t; )
                            e.push(r);
                        return e
                    })
                }
            }).pseudos.nth = x.pseudos.eq,
            {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            })
            x.pseudos[e] = function(t) {
                return function(e) {
                    return "input" === e.nodeName.toLowerCase() && e.type === t
                }
            }(e);
        for (e in {
            submit: !0,
            reset: !0
        })
            x.pseudos[e] = function(n) {
                return function(e) {
                    var t = e.nodeName.toLowerCase();
                    return ("input" === t || "button" === t) && e.type === n
                }
            }(e);
        function ve() {}
        function ye(e) {
            for (var t = 0, n = e.length, r = ""; t < n; t++)
                r += e[t].value;
            return r
        }
        function me(a, e, t) {
            var u = e.dir
                , s = e.next
                , l = s || u
                , c = t && "parentNode" === l
                , f = b++;
            return e.first ? function(e, t, n) {
                    for (; e = e[u]; )
                        if (1 === e.nodeType || c)
                            return a(e, t, n);
                    return !1
                }
                : function(e, t, n) {
                    var r, o, i = [E, f];
                    if (n) {
                        for (; e = e[u]; )
                            if ((1 === e.nodeType || c) && a(e, t, n))
                                return !0
                    } else
                        for (; e = e[u]; )
                            if (1 === e.nodeType || c)
                                if (r = (o = e[k] || (e[k] = {}))[e.uniqueID] || (o[e.uniqueID] = {}),
                                s && s === e.nodeName.toLowerCase())
                                    e = e[u] || e;
                                else {
                                    if ((o = r[l]) && o[0] === E && o[1] === f)
                                        return i[2] = o[2];
                                    if ((r[l] = i)[2] = a(e, t, n))
                                        return !0
                                }
                    return !1
                }
        }
        function be(o) {
            return 1 < o.length ? function(e, t, n) {
                    for (var r = o.length; r--; )
                        if (!o[r](e, t, n))
                            return !1;
                    return !0
                }
                : o[0]
        }
        function xe(e, t, n, r, o) {
            for (var i, a = [], u = 0, s = e.length, l = null != t; u < s; u++)
                (i = e[u]) && (n && !n(i, r, o) || (a.push(i),
                l && t.push(u)));
            return a
        }
        function we(d, h, g, v, y, e) {
            return v && !v[k] && (v = we(v)),
            y && !y[k] && (y = we(y, e)),
                le(function(e, t, n, r) {
                    var o, i, a, u = [], s = [], l = t.length, c = e || function(e, t, n) {
                        for (var r = 0, o = t.length; r < o; r++)
                            ue(e, t[r], n);
                        return n
                    }(h || "*", n.nodeType ? [n] : n, []), f = !d || !e && h ? c : xe(c, u, d, n, r), p = g ? y || (e ? d : l || v) ? [] : t : f;
                    if (g && g(f, p, n, r),
                        v)
                        for (o = xe(p, s),
                                 v(o, [], n, r),
                                 i = o.length; i--; )
                            (a = o[i]) && (p[s[i]] = !(f[s[i]] = a));
                    if (e) {
                        if (y || d) {
                            if (y) {
                                for (o = [],
                                         i = p.length; i--; )
                                    (a = p[i]) && o.push(f[i] = a);
                                y(null, p = [], o, r)
                            }
                            for (i = p.length; i--; )
                                (a = p[i]) && -1 < (o = y ? H(e, a) : u[i]) && (e[o] = !(t[o] = a))
                        }
                    } else
                        p = xe(p === t ? p.splice(l, p.length) : p),
                            y ? y(null, t, p, r) : I.apply(t, p)
                })
        }
        function Ce(v, y) {
            function e(e, t, n, r, o) {
                var i, a, u, s = 0, l = "0", c = e && [], f = [], p = w, d = e || b && x.find.TAG("*", o), h = E += null == p ? 1 : Math.random() || .1, g = d.length;
                for (o && (w = t === T || t || o); l !== g && null != (i = d[l]); l++) {
                    if (b && i) {
                        for (a = 0,
                             t || i.ownerDocument === T || (C(i),
                                 n = !j); u = v[a++]; )
                            if (u(i, t || T, n)) {
                                r.push(i);
                                break
                            }
                        o && (E = h)
                    }
                    m && ((i = !u && i) && s--,
                    e && c.push(i))
                }
                if (s += l,
                m && l !== s) {
                    for (a = 0; u = y[a++]; )
                        u(c, f, t, n);
                    if (e) {
                        if (0 < s)
                            for (; l--; )
                                c[l] || f[l] || (f[l] = q.call(r));
                        f = xe(f)
                    }
                    I.apply(r, f),
                    o && !e && 0 < f.length && 1 < s + y.length && ue.uniqueSort(r)
                }
                return o && (E = h,
                    w = p),
                    c
            }
            var m = 0 < y.length
                , b = 0 < v.length;
            return m ? le(e) : e
        }
        return ve.prototype = x.filters = x.pseudos,
            x.setFilters = new ve,
            d = ue.tokenize = function(e, t) {
                var n, r, o, i, a, u, s, l = _[e + " "];
                if (l)
                    return t ? 0 : l.slice(0);
                for (a = e,
                         u = [],
                         s = x.preFilter; a; ) {
                    for (i in n && !(r = Q.exec(a)) || (r && (a = a.slice(r[0].length) || a),
                        u.push(o = [])),
                        n = !1,
                    (r = U.exec(a)) && (n = r.shift(),
                        o.push({
                            value: n,
                            type: r[0].replace(z, " ")
                        }),
                        a = a.slice(n.length)),
                        x.filter)
                        !(r = Y[i].exec(a)) || s[i] && !(r = s[i](r)) || (n = r.shift(),
                            o.push({
                                value: n,
                                type: i,
                                matches: r
                            }),
                            a = a.slice(n.length));
                    if (!n)
                        break
                }
                return t ? a.length : a ? ue.error(e) : _(e, u).slice(0)
            }
            ,
            h = ue.compile = function(e, t) {
                var n, r = [], o = [], i = N[e + " "];
                if (!i) {
                    for (n = (t = t || d(e)).length; n--; )
                        ((i = function e(t) {
                            for (var r, n, o, i = t.length, a = x.relative[t[0].type], u = a || x.relative[" "], s = a ? 1 : 0, l = me(function(e) {
                                return e === r
                            }, u, !0), c = me(function(e) {
                                return -1 < H(r, e)
                            }, u, !0), f = [function(e, t, n) {
                                return n = !a && (n || t !== w) || ((r = t).nodeType ? l : c)(e, t, n),
                                    r = null,
                                    n
                            }
                            ]; s < i; s++)
                                if (n = x.relative[t[s].type])
                                    f = [me(be(f), n)];
                                else {
                                    if ((n = x.filter[t[s].type].apply(null, t[s].matches))[k]) {
                                        for (o = ++s; o < i && !x.relative[t[o].type]; o++)
                                            ;
                                        return we(1 < s && be(f), 1 < s && ye(t.slice(0, s - 1).concat({
                                            value: " " === t[s - 2].type ? "*" : ""
                                        })).replace(z, "$1"), n, s < o && e(t.slice(s, o)), o < i && e(t = t.slice(o)), o < i && ye(t))
                                    }
                                    f.push(n)
                                }
                            return be(f)
                        }(t[n]))[k] ? r : o).push(i);
                    (i = N(e, Ce(o, r))).selector = e
                }
                return i
            }
            ,
            g = ue.select = function(e, t, n, r) {
                var o, i, a, u, s, l = "function" == typeof e && e, c = !r && d(e = l.selector || e);
                if (n = n || [],
                1 === c.length) {
                    if (2 < (i = c[0] = c[0].slice(0)).length && "ID" === (a = i[0]).type && 9 === t.nodeType && j && x.relative[i[1].type]) {
                        if (!(t = (x.find.ID(a.matches[0].replace(re, f), t) || [])[0]))
                            return n;
                        l && (t = t.parentNode),
                            e = e.slice(i.shift().value.length)
                    }
                    for (o = Y.needsContext.test(e) ? 0 : i.length; o-- && (a = i[o],
                        !x.relative[u = a.type]); )
                        if ((s = x.find[u]) && (r = s(a.matches[0].replace(re, f), ne.test(i[0].type) && ge(t.parentNode) || t))) {
                            if (i.splice(o, 1),
                                !(e = r.length && ye(i)))
                                return I.apply(n, r),
                                    n;
                            break
                        }
                }
                return (l || h(e, c))(r, t, !j, n, !t || ne.test(e) && ge(t.parentNode) || t),
                    n
            }
            ,
            p.sortStable = k.split("").sort(D).join("") === k,
            p.detectDuplicates = !!l,
            C(),
            p.sortDetached = ce(function(e) {
                return 1 & e.compareDocumentPosition(T.createElement("fieldset"))
            }),
        ce(function(e) {
            return e.innerHTML = "<a href='#'></a>",
            "#" === e.firstChild.getAttribute("href")
        }) || fe("type|href|height|width", function(e, t, n) {
            if (!n)
                return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }),
        p.attributes && ce(function(e) {
            return e.innerHTML = "<input/>",
                e.firstChild.setAttribute("value", ""),
            "" === e.firstChild.getAttribute("value")
        }) || fe("value", function(e, t, n) {
            if (!n && "input" === e.nodeName.toLowerCase())
                return e.defaultValue
        }),
        ce(function(e) {
            return null == e.getAttribute("disabled")
        }) || fe(P, function(e, t, n) {
            if (!n)
                return !0 === e[t] ? t.toLowerCase() : (t = e.getAttributeNode(t)) && t.specified ? t.value : null
        }),
            ue
    }(C);
    j.find = w,
        j.expr = w.selectors,
        j.expr[":"] = j.expr.pseudos,
        j.uniqueSort = j.unique = w.uniqueSort,
        j.text = w.getText,
        j.isXMLDoc = w.isXML,
        j.contains = w.contains,
        j.escapeSelector = w.escape;
    function k(e, t, n) {
        for (var r = [], o = void 0 !== n; (e = e[t]) && 9 !== e.nodeType; )
            if (1 === e.nodeType) {
                if (o && j(e).is(n))
                    break;
                r.push(e)
            }
        return r
    }
    function E(e, t) {
        for (var n = []; e; e = e.nextSibling)
            1 === e.nodeType && e !== t && n.push(e);
        return n
    }
    var S = j.expr.match.needsContext;
    function _(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
    }
    var N = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
    function A(e, n, r) {
        return b(n) ? j.grep(e, function(e, t) {
            return !!n.call(e, t, e) !== r
        }) : n.nodeType ? j.grep(e, function(e) {
            return e === n !== r
        }) : "string" != typeof n ? j.grep(e, function(e) {
            return -1 < o.call(n, e) !== r
        }) : j.filter(n, e, r)
    }
    j.filter = function(e, t, n) {
        var r = t[0];
        return n && (e = ":not(" + e + ")"),
            1 === t.length && 1 === r.nodeType ? j.find.matchesSelector(r, e) ? [r] : [] : j.find.matches(e, j.grep(t, function(e) {
                return 1 === e.nodeType
            }))
    }
        ,
        j.fn.extend({
            find: function(e) {
                var t, n, r = this.length, o = this;
                if ("string" != typeof e)
                    return this.pushStack(j(e).filter(function() {
                        for (t = 0; t < r; t++)
                            if (j.contains(o[t], this))
                                return !0
                    }));
                for (n = this.pushStack([]),
                         t = 0; t < r; t++)
                    j.find(e, o[t], n);
                return 1 < r ? j.uniqueSort(n) : n
            },
            filter: function(e) {
                return this.pushStack(A(this, e || [], !1))
            },
            not: function(e) {
                return this.pushStack(A(this, e || [], !0))
            },
            is: function(e) {
                return !!A(this, "string" == typeof e && S.test(e) ? j(e) : e || [], !1).length
            }
        });
    var D = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (j.fn.init = function(e, t, n) {
            if (!e)
                return this;
            if (n = n || O,
            "string" != typeof e)
                return e.nodeType ? (this[0] = e,
                    this.length = 1,
                    this) : b(e) ? void 0 !== n.ready ? n.ready(e) : e(j) : j.makeArray(e, this);
            if (!(r = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : D.exec(e)) || !r[1] && t)
                return (!t || t.jquery ? t || n : this.constructor(t)).find(e);
            if (r[1]) {
                if (t = t instanceof j ? t[0] : t,
                    j.merge(this, j.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : T, !0)),
                N.test(r[1]) && j.isPlainObject(t))
                    for (var r in t)
                        b(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                return this
            }
            return (e = T.getElementById(r[2])) && (this[0] = e,
                this.length = 1),
                this
        }
    ).prototype = j.fn;
    var O = j(T)
        , q = /^(?:parents|prev(?:Until|All))/
        , L = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    function I(e, t) {
        for (; (e = e[t]) && 1 !== e.nodeType; )
            ;
        return e
    }
    j.fn.extend({
        has: function(e) {
            var t = j(e, this)
                , n = t.length;
            return this.filter(function() {
                for (var e = 0; e < n; e++)
                    if (j.contains(this, t[e]))
                        return !0
            })
        },
        closest: function(e, t) {
            var n, r = 0, o = this.length, i = [], a = "string" != typeof e && j(e);
            if (!S.test(e))
                for (; r < o; r++)
                    for (n = this[r]; n && n !== t; n = n.parentNode)
                        if (n.nodeType < 11 && (a ? -1 < a.index(n) : 1 === n.nodeType && j.find.matchesSelector(n, e))) {
                            i.push(n);
                            break
                        }
            return this.pushStack(1 < i.length ? j.uniqueSort(i) : i)
        },
        index: function(e) {
            return e ? "string" == typeof e ? o.call(j(e), this[0]) : o.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            return this.pushStack(j.uniqueSort(j.merge(this.get(), j(e, t))))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }),
        j.each({
            parent: function(e) {
                e = e.parentNode;
                return e && 11 !== e.nodeType ? e : null
            },
            parents: function(e) {
                return k(e, "parentNode")
            },
            parentsUntil: function(e, t, n) {
                return k(e, "parentNode", n)
            },
            next: function(e) {
                return I(e, "nextSibling")
            },
            prev: function(e) {
                return I(e, "previousSibling")
            },
            nextAll: function(e) {
                return k(e, "nextSibling")
            },
            prevAll: function(e) {
                return k(e, "previousSibling")
            },
            nextUntil: function(e, t, n) {
                return k(e, "nextSibling", n)
            },
            prevUntil: function(e, t, n) {
                return k(e, "previousSibling", n)
            },
            siblings: function(e) {
                return E((e.parentNode || {}).firstChild, e)
            },
            children: function(e) {
                return E(e.firstChild)
            },
            contents: function(e) {
                return void 0 !== e.contentDocument ? e.contentDocument : (_(e, "template") && (e = e.content || e),
                    j.merge([], e.childNodes))
            }
        }, function(r, o) {
            j.fn[r] = function(e, t) {
                var n = j.map(this, o, e);
                return (t = "Until" !== r.slice(-5) ? e : t) && "string" == typeof t && (n = j.filter(t, n)),
                1 < this.length && (L[r] || j.uniqueSort(n),
                q.test(r) && n.reverse()),
                    this.pushStack(n)
            }
        });
    var M = /[^\x20\t\r\n\f]+/g;
    function H(e) {
        return e
    }
    function P(e) {
        throw e
    }
    function R(e, t, n, r) {
        var o;
        try {
            e && b(o = e.promise) ? o.call(e).done(t).fail(n) : e && b(o = e.then) ? o.call(e, t, n) : t.apply(void 0, [e].slice(r))
        } catch (e) {
            n.apply(void 0, [e])
        }
    }
    j.Callbacks = function(r) {
        var e, n;
        r = "string" == typeof r ? (e = r,
            n = {},
            j.each(e.match(M) || [], function(e, t) {
                n[t] = !0
            }),
            n) : j.extend({}, r);
        function o() {
            for (u = u || r.once,
                     a = i = !0; l.length; c = -1)
                for (t = l.shift(); ++c < s.length; )
                    !1 === s[c].apply(t[0], t[1]) && r.stopOnFalse && (c = s.length,
                        t = !1);
            r.memory || (t = !1),
                i = !1,
            u && (s = t ? [] : "")
        }
        var i, t, a, u, s = [], l = [], c = -1, f = {
            add: function() {
                return s && (t && !i && (c = s.length - 1,
                    l.push(t)),
                    function n(e) {
                        j.each(e, function(e, t) {
                            b(t) ? r.unique && f.has(t) || s.push(t) : t && t.length && "string" !== h(t) && n(t)
                        })
                    }(arguments),
                t && !i && o()),
                    this
            },
            remove: function() {
                return j.each(arguments, function(e, t) {
                    for (var n; -1 < (n = j.inArray(t, s, n)); )
                        s.splice(n, 1),
                        n <= c && c--
                }),
                    this
            },
            has: function(e) {
                return e ? -1 < j.inArray(e, s) : 0 < s.length
            },
            empty: function() {
                return s = s && [],
                    this
            },
            disable: function() {
                return u = l = [],
                    s = t = "",
                    this
            },
            disabled: function() {
                return !s
            },
            lock: function() {
                return u = l = [],
                t || i || (s = t = ""),
                    this
            },
            locked: function() {
                return !!u
            },
            fireWith: function(e, t) {
                return u || (t = [e, (t = t || []).slice ? t.slice() : t],
                    l.push(t),
                i || o()),
                    this
            },
            fire: function() {
                return f.fireWith(this, arguments),
                    this
            },
            fired: function() {
                return !!a
            }
        };
        return f
    }
        ,
        j.extend({
            Deferred: function(e) {
                var i = [["notify", "progress", j.Callbacks("memory"), j.Callbacks("memory"), 2], ["resolve", "done", j.Callbacks("once memory"), j.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", j.Callbacks("once memory"), j.Callbacks("once memory"), 1, "rejected"]]
                    , o = "pending"
                    , a = {
                    state: function() {
                        return o
                    },
                    always: function() {
                        return u.done(arguments).fail(arguments),
                            this
                    },
                    catch: function(e) {
                        return a.then(null, e)
                    },
                    pipe: function() {
                        var o = arguments;
                        return j.Deferred(function(r) {
                            j.each(i, function(e, t) {
                                var n = b(o[t[4]]) && o[t[4]];
                                u[t[1]](function() {
                                    var e = n && n.apply(this, arguments);
                                    e && b(e.promise) ? e.promise().progress(r.notify).done(r.resolve).fail(r.reject) : r[t[0] + "With"](this, n ? [e] : arguments)
                                })
                            }),
                                o = null
                        }).promise()
                    },
                    then: function(t, n, r) {
                        var s = 0;
                        function l(o, i, a, u) {
                            return function() {
                                function e() {
                                    var e, t;
                                    if (!(o < s)) {
                                        if ((e = a.apply(n, r)) === i.promise())
                                            throw new TypeError("Thenable self-resolution");
                                        t = e && ("object" == typeof e || "function" == typeof e) && e.then,
                                            b(t) ? u ? t.call(e, l(s, i, H, u), l(s, i, P, u)) : (s++,
                                                t.call(e, l(s, i, H, u), l(s, i, P, u), l(s, i, H, i.notifyWith))) : (a !== H && (n = void 0,
                                                r = [e]),
                                                (u || i.resolveWith)(n, r))
                                    }
                                }
                                var n = this
                                    , r = arguments
                                    , t = u ? e : function() {
                                        try {
                                            e()
                                        } catch (e) {
                                            j.Deferred.exceptionHook && j.Deferred.exceptionHook(e, t.stackTrace),
                                            s <= o + 1 && (a !== P && (n = void 0,
                                                r = [e]),
                                                i.rejectWith(n, r))
                                        }
                                    }
                                ;
                                o ? t() : (j.Deferred.getStackHook && (t.stackTrace = j.Deferred.getStackHook()),
                                    C.setTimeout(t))
                            }
                        }
                        return j.Deferred(function(e) {
                            i[0][3].add(l(0, e, b(r) ? r : H, e.notifyWith)),
                                i[1][3].add(l(0, e, b(t) ? t : H)),
                                i[2][3].add(l(0, e, b(n) ? n : P))
                        }).promise()
                    },
                    promise: function(e) {
                        return null != e ? j.extend(e, a) : a
                    }
                }
                    , u = {};
                return j.each(i, function(e, t) {
                    var n = t[2]
                        , r = t[5];
                    a[t[1]] = n.add,
                    r && n.add(function() {
                        o = r
                    }, i[3 - e][2].disable, i[3 - e][3].disable, i[0][2].lock, i[0][3].lock),
                        n.add(t[3].fire),
                        u[t[0]] = function() {
                            return u[t[0] + "With"](this === u ? void 0 : this, arguments),
                                this
                        }
                        ,
                        u[t[0] + "With"] = n.fireWith
                }),
                    a.promise(u),
                e && e.call(u, u),
                    u
            },
            when: function(e) {
                function t(t) {
                    return function(e) {
                        o[t] = this,
                            i[t] = 1 < arguments.length ? u.call(arguments) : e,
                        --n || a.resolveWith(o, i)
                    }
                }
                var n = arguments.length
                    , r = n
                    , o = Array(r)
                    , i = u.call(arguments)
                    , a = j.Deferred();
                if (n <= 1 && (R(e, a.done(t(r)).resolve, a.reject, !n),
                "pending" === a.state() || b(i[r] && i[r].then)))
                    return a.then();
                for (; r--; )
                    R(i[r], t(r), a.reject);
                return a.promise()
            }
        });
    var B = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    j.Deferred.exceptionHook = function(e, t) {
        C.console && C.console.warn && e && B.test(e.name) && C.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t)
    }
        ,
        j.readyException = function(e) {
            C.setTimeout(function() {
                throw e
            })
        }
    ;
    var $ = j.Deferred();
    function W() {
        T.removeEventListener("DOMContentLoaded", W),
            C.removeEventListener("load", W),
            j.ready()
    }
    j.fn.ready = function(e) {
        return $.then(e).catch(function(e) {
            j.readyException(e)
        }),
            this
    }
        ,
        j.extend({
            isReady: !1,
            readyWait: 1,
            ready: function(e) {
                (!0 === e ? --j.readyWait : j.isReady) || (j.isReady = !0) !== e && 0 < --j.readyWait || $.resolveWith(T, [j])
            }
        }),
        j.ready.then = $.then,
        "complete" === T.readyState || "loading" !== T.readyState && !T.documentElement.doScroll ? C.setTimeout(j.ready) : (T.addEventListener("DOMContentLoaded", W),
            C.addEventListener("load", W));
    var F = function(e, t, n, r, o, i, a) {
        var u = 0
            , s = e.length
            , l = null == n;
        if ("object" === h(n))
            for (u in o = !0,
                n)
                F(e, t, u, n[u], !0, i, a);
        else if (void 0 !== r && (o = !0,
        b(r) || (a = !0),
            t = l ? a ? (t.call(e, r),
                null) : (l = t,
                    function(e, t, n) {
                        return l.call(j(e), n)
                    }
            ) : t))
            for (; u < s; u++)
                t(e[u], n, a ? r : r.call(e[u], u, t(e[u], n)));
        return o ? e : l ? t.call(e) : s ? t(e[0], n) : i
    }
        , z = /^-ms-/
        , Q = /-([a-z])/g;
    function U(e, t) {
        return t.toUpperCase()
    }
    function X(e) {
        return e.replace(z, "ms-").replace(Q, U)
    }
    function V(e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
    }
    function G() {
        this.expando = j.expando + G.uid++
    }
    G.uid = 1,
        G.prototype = {
            cache: function(e) {
                var t = e[this.expando];
                return t || (t = {},
                V(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                    value: t,
                    configurable: !0
                }))),
                    t
            },
            set: function(e, t, n) {
                var r, o = this.cache(e);
                if ("string" == typeof t)
                    o[X(t)] = n;
                else
                    for (r in t)
                        o[X(r)] = t[r];
                return o
            },
            get: function(e, t) {
                return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][X(t)]
            },
            access: function(e, t, n) {
                return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n),
                    void 0 !== n ? n : t)
            },
            remove: function(e, t) {
                var n, r = e[this.expando];
                if (void 0 !== r) {
                    if (void 0 !== t) {
                        n = (t = Array.isArray(t) ? t.map(X) : (t = X(t))in r ? [t] : t.match(M) || []).length;
                        for (; n--; )
                            delete r[t[n]]
                    }
                    void 0 !== t && !j.isEmptyObject(r) || (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
                }
            },
            hasData: function(e) {
                e = e[this.expando];
                return void 0 !== e && !j.isEmptyObject(e)
            }
        };
    var Y = new G
        , K = new G
        , J = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/
        , Z = /[A-Z]/g;
    function ee(e, t, n) {
        var r, o;
        if (void 0 === n && 1 === e.nodeType)
            if (r = "data-" + t.replace(Z, "-$&").toLowerCase(),
            "string" == typeof (n = e.getAttribute(r))) {
                try {
                    n = "true" === (o = n) || "false" !== o && ("null" === o ? null : o === +o + "" ? +o : J.test(o) ? JSON.parse(o) : o)
                } catch (e) {}
                K.set(e, t, n)
            } else
                n = void 0;
        return n
    }
    j.extend({
        hasData: function(e) {
            return K.hasData(e) || Y.hasData(e)
        },
        data: function(e, t, n) {
            return K.access(e, t, n)
        },
        removeData: function(e, t) {
            K.remove(e, t)
        },
        _data: function(e, t, n) {
            return Y.access(e, t, n)
        },
        _removeData: function(e, t) {
            Y.remove(e, t)
        }
    }),
        j.fn.extend({
            data: function(n, e) {
                var t, r, o, i = this[0], a = i && i.attributes;
                if (void 0 !== n)
                    return "object" == typeof n ? this.each(function() {
                        K.set(this, n)
                    }) : F(this, function(e) {
                        var t;
                        return i && void 0 === e ? void 0 !== (t = K.get(i, n)) || void 0 !== (t = ee(i, n)) ? t : void 0 : void this.each(function() {
                            K.set(this, n, e)
                        })
                    }, null, e, 1 < arguments.length, null, !0);
                if (this.length && (o = K.get(i),
                1 === i.nodeType && !Y.get(i, "hasDataAttrs"))) {
                    for (t = a.length; t--; )
                        a[t] && 0 === (r = a[t].name).indexOf("data-") && (r = X(r.slice(5)),
                            ee(i, r, o[r]));
                    Y.set(i, "hasDataAttrs", !0)
                }
                return o
            },
            removeData: function(e) {
                return this.each(function() {
                    K.remove(this, e)
                })
            }
        }),
        j.extend({
            queue: function(e, t, n) {
                var r;
                if (e)
                    return r = Y.get(e, t = (t || "fx") + "queue"),
                    n && (!r || Array.isArray(n) ? r = Y.access(e, t, j.makeArray(n)) : r.push(n)),
                    r || []
            },
            dequeue: function(e, t) {
                var n = j.queue(e, t = t || "fx")
                    , r = n.length
                    , o = n.shift()
                    , i = j._queueHooks(e, t);
                "inprogress" === o && (o = n.shift(),
                    r--),
                o && ("fx" === t && n.unshift("inprogress"),
                    delete i.stop,
                    o.call(e, function() {
                        j.dequeue(e, t)
                    }, i)),
                !r && i && i.empty.fire()
            },
            _queueHooks: function(e, t) {
                var n = t + "queueHooks";
                return Y.get(e, n) || Y.access(e, n, {
                    empty: j.Callbacks("once memory").add(function() {
                        Y.remove(e, [t + "queue", n])
                    })
                })
            }
        }),
        j.fn.extend({
            queue: function(t, n) {
                var e = 2;
                return "string" != typeof t && (n = t,
                    t = "fx",
                    e--),
                    arguments.length < e ? j.queue(this[0], t) : void 0 === n ? this : this.each(function() {
                        var e = j.queue(this, t, n);
                        j._queueHooks(this, t),
                        "fx" === t && "inprogress" !== e[0] && j.dequeue(this, t)
                    })
            },
            dequeue: function(e) {
                return this.each(function() {
                    j.dequeue(this, e)
                })
            },
            clearQueue: function(e) {
                return this.queue(e || "fx", [])
            },
            promise: function(e, t) {
                function n() {
                    --o || i.resolveWith(a, [a])
                }
                var r, o = 1, i = j.Deferred(), a = this, u = this.length;
                for ("string" != typeof e && (t = e,
                    e = void 0),
                         e = e || "fx"; u--; )
                    (r = Y.get(a[u], e + "queueHooks")) && r.empty && (o++,
                        r.empty.add(n));
                return n(),
                    i.promise(t)
            }
        });
    var f = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source
        , te = new RegExp("^(?:([+-])=|)(" + f + ")([a-z%]*)$","i")
        , ne = ["Top", "Right", "Bottom", "Left"]
        , re = T.documentElement
        , oe = function(e) {
        return j.contains(e.ownerDocument, e)
    }
        , ie = {
        composed: !0
    };
    re.getRootNode && (oe = function(e) {
            return j.contains(e.ownerDocument, e) || e.getRootNode(ie) === e.ownerDocument
        }
    );
    function ae(e, t, n, r) {
        var o, i = {};
        for (o in t)
            i[o] = e.style[o],
                e.style[o] = t[o];
        for (o in r = n.apply(e, r || []),
            t)
            e.style[o] = i[o];
        return r
    }
    var ue = function(e, t) {
        return "none" === (e = t || e).style.display || "" === e.style.display && oe(e) && "none" === j.css(e, "display")
    };
    function se(e, t, n, r) {
        var o, i, a = 20, u = r ? function() {
                return r.cur()
            }
            : function() {
                return j.css(e, t, "")
            }
            , s = u(), l = n && n[3] || (j.cssNumber[t] ? "" : "px"), c = e.nodeType && (j.cssNumber[t] || "px" !== l && +s) && te.exec(j.css(e, t));
        if (c && c[3] !== l) {
            for (l = l || c[3],
                     c = +(s /= 2) || 1; a--; )
                j.style(e, t, c + l),
                (1 - i) * (1 - (i = u() / s || .5)) <= 0 && (a = 0),
                    c /= i;
            j.style(e, t, (c *= 2) + l),
                n = n || []
        }
        return n && (c = +c || +s || 0,
            o = n[1] ? c + (n[1] + 1) * n[2] : +n[2],
        r && (r.unit = l,
            r.start = c,
            r.end = o)),
            o
    }
    var le = {};
    function ce(e, t) {
        for (var n, r, o, i, a, u = [], s = 0, l = e.length; s < l; s++)
            (r = e[s]).style && (n = r.style.display,
                t ? ("none" === n && (u[s] = Y.get(r, "display") || null,
                u[s] || (r.style.display = "")),
                "" === r.style.display && ue(r) && (u[s] = (a = i = void 0,
                    i = (o = r).ownerDocument,
                    a = o.nodeName,
                (o = le[a]) || (i = i.body.appendChild(i.createElement(a)),
                    o = j.css(i, "display"),
                    i.parentNode.removeChild(i),
                    le[a] = o = "none" === o ? "block" : o)))) : "none" !== n && (u[s] = "none",
                    Y.set(r, "display", n)));
        for (s = 0; s < l; s++)
            null != u[s] && (e[s].style.display = u[s]);
        return e
    }
    j.fn.extend({
        show: function() {
            return ce(this, !0)
        },
        hide: function() {
            return ce(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                ue(this) ? j(this).show() : j(this).hide()
            })
        }
    });
    var fe = /^(?:checkbox|radio)$/i
        , pe = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i
        , de = /^$|^module$|\/(?:java|ecma)script/i
        , he = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
    };
    function ge(e, t) {
        var n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [];
        return void 0 === t || t && _(e, t) ? j.merge([e], n) : n
    }
    function ve(e, t) {
        for (var n = 0, r = e.length; n < r; n++)
            Y.set(e[n], "globalEval", !t || Y.get(t[n], "globalEval"))
    }
    he.optgroup = he.option,
        he.tbody = he.tfoot = he.colgroup = he.caption = he.thead,
        he.th = he.td;
    var ye = /<|&#?\w+;/;
    function me(e, t, n, r, o) {
        for (var i, a, u, s, l, c = t.createDocumentFragment(), f = [], p = 0, d = e.length; p < d; p++)
            if ((i = e[p]) || 0 === i)
                if ("object" === h(i))
                    j.merge(f, i.nodeType ? [i] : i);
                else if (ye.test(i)) {
                    for (a = a || c.appendChild(t.createElement("div")),
                             u = (pe.exec(i) || ["", ""])[1].toLowerCase(),
                             u = he[u] || he._default,
                             a.innerHTML = u[1] + j.htmlPrefilter(i) + u[2],
                             l = u[0]; l--; )
                        a = a.lastChild;
                    j.merge(f, a.childNodes),
                        (a = c.firstChild).textContent = ""
                } else
                    f.push(t.createTextNode(i));
        for (c.textContent = "",
                 p = 0; i = f[p++]; )
            if (r && -1 < j.inArray(i, r))
                o && o.push(i);
            else if (s = oe(i),
                a = ge(c.appendChild(i), "script"),
            s && ve(a),
                n)
                for (l = 0; i = a[l++]; )
                    de.test(i.type || "") && n.push(i);
        return c
    }
    t = T.createDocumentFragment().appendChild(T.createElement("div")),
        (w = T.createElement("input")).setAttribute("type", "radio"),
        w.setAttribute("checked", "checked"),
        w.setAttribute("name", "t"),
        t.appendChild(w),
        m.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked,
        t.innerHTML = "<textarea>x</textarea>",
        m.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue;
    var be = /^key/
        , xe = /^(?:mouse|pointer|contextmenu|drag|drop)|click/
        , we = /^([^.]*)(?:\.(.+)|)/;
    function Ce() {
        return !0
    }
    function Te() {
        return !1
    }
    function je(e, t) {
        return e === function() {
            try {
                return T.activeElement
            } catch (e) {}
        }() == ("focus" === t)
    }
    function ke(e, t, n, r, o, i) {
        var a, u;
        if ("object" == typeof t) {
            for (u in "string" != typeof n && (r = r || n,
                n = void 0),
                t)
                ke(e, u, n, r, t[u], i);
            return e
        }
        if (null == r && null == o ? (o = n,
            r = n = void 0) : null == o && ("string" == typeof n ? (o = r,
            r = void 0) : (o = r,
            r = n,
            n = void 0)),
        !1 === o)
            o = Te;
        else if (!o)
            return e;
        return 1 === i && (a = o,
            (o = function(e) {
                    return j().off(e),
                        a.apply(this, arguments)
                }
            ).guid = a.guid || (a.guid = j.guid++)),
            e.each(function() {
                j.event.add(this, t, o, r, n)
            })
    }
    function Ee(e, o, i) {
        i ? (Y.set(e, o, !1),
            j.event.add(e, o, {
                namespace: !1,
                handler: function(e) {
                    var t, n, r = Y.get(this, o);
                    if (1 & e.isTrigger && this[o]) {
                        if (r.length)
                            (j.event.special[o] || {}).delegateType && e.stopPropagation();
                        else if (r = u.call(arguments),
                            Y.set(this, o, r),
                            t = i(this, o),
                            this[o](),
                            r !== (n = Y.get(this, o)) || t ? Y.set(this, o, !1) : n = {},
                        r !== n)
                            return e.stopImmediatePropagation(),
                                e.preventDefault(),
                                n.value
                    } else
                        r.length && (Y.set(this, o, {
                            value: j.event.trigger(j.extend(r[0], j.Event.prototype), r.slice(1), this)
                        }),
                            e.stopImmediatePropagation())
                }
            })) : void 0 === Y.get(e, o) && j.event.add(e, o, Ce)
    }
    j.event = {
        global: {},
        add: function(t, e, n, r, o) {
            var i, a, u, s, l, c, f, p, d, h = Y.get(t);
            if (h)
                for (n.handler && (n = (i = n).handler,
                    o = i.selector),
                     o && j.find.matchesSelector(re, o),
                     n.guid || (n.guid = j.guid++),
                     (u = h.events) || (u = h.events = {}),
                     (a = h.handle) || (a = h.handle = function(e) {
                             return void 0 !== j && j.event.triggered !== e.type ? j.event.dispatch.apply(t, arguments) : void 0
                         }
                     ),
                         s = (e = (e || "").match(M) || [""]).length; s--; )
                    f = d = (l = we.exec(e[s]) || [])[1],
                        p = (l[2] || "").split(".").sort(),
                    f && (c = j.event.special[f] || {},
                        f = (o ? c.delegateType : c.bindType) || f,
                        c = j.event.special[f] || {},
                        l = j.extend({
                            type: f,
                            origType: d,
                            data: r,
                            handler: n,
                            guid: n.guid,
                            selector: o,
                            needsContext: o && j.expr.match.needsContext.test(o),
                            namespace: p.join(".")
                        }, i),
                    (d = u[f]) || ((d = u[f] = []).delegateCount = 0,
                    c.setup && !1 !== c.setup.call(t, r, p, a) || t.addEventListener && t.addEventListener(f, a)),
                    c.add && (c.add.call(t, l),
                    l.handler.guid || (l.handler.guid = n.guid)),
                        o ? d.splice(d.delegateCount++, 0, l) : d.push(l),
                        j.event.global[f] = !0)
        },
        remove: function(e, t, n, r, o) {
            var i, a, u, s, l, c, f, p, d, h, g, v = Y.hasData(e) && Y.get(e);
            if (v && (s = v.events)) {
                for (l = (t = (t || "").match(M) || [""]).length; l--; )
                    if (d = g = (u = we.exec(t[l]) || [])[1],
                        h = (u[2] || "").split(".").sort(),
                        d) {
                        for (f = j.event.special[d] || {},
                                 p = s[d = (r ? f.delegateType : f.bindType) || d] || [],
                                 u = u[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                                 a = i = p.length; i--; )
                            c = p[i],
                            !o && g !== c.origType || n && n.guid !== c.guid || u && !u.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (p.splice(i, 1),
                            c.selector && p.delegateCount--,
                            f.remove && f.remove.call(e, c));
                        a && !p.length && (f.teardown && !1 !== f.teardown.call(e, h, v.handle) || j.removeEvent(e, d, v.handle),
                            delete s[d])
                    } else
                        for (d in s)
                            j.event.remove(e, d + t[l], n, r, !0);
                j.isEmptyObject(s) && Y.remove(e, "handle events")
            }
        },
        dispatch: function(e) {
            var t, n, r, o, i, a = j.event.fix(e), u = new Array(arguments.length), s = (Y.get(this, "events") || {})[a.type] || [], e = j.event.special[a.type] || {};
            for (u[0] = a,
                     t = 1; t < arguments.length; t++)
                u[t] = arguments[t];
            if (a.delegateTarget = this,
            !e.preDispatch || !1 !== e.preDispatch.call(this, a)) {
                for (i = j.event.handlers.call(this, a, s),
                         t = 0; (r = i[t++]) && !a.isPropagationStopped(); )
                    for (a.currentTarget = r.elem,
                             n = 0; (o = r.handlers[n++]) && !a.isImmediatePropagationStopped(); )
                        a.rnamespace && !1 !== o.namespace && !a.rnamespace.test(o.namespace) || (a.handleObj = o,
                            a.data = o.data,
                        void 0 !== (o = ((j.event.special[o.origType] || {}).handle || o.handler).apply(r.elem, u)) && !1 === (a.result = o) && (a.preventDefault(),
                            a.stopPropagation()));
                return e.postDispatch && e.postDispatch.call(this, a),
                    a.result
            }
        },
        handlers: function(e, t) {
            var n, r, o, i, a, u = [], s = t.delegateCount, l = e.target;
            if (s && l.nodeType && !("click" === e.type && 1 <= e.button))
                for (; l !== this; l = l.parentNode || this)
                    if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
                        for (i = [],
                                 a = {},
                                 n = 0; n < s; n++)
                            void 0 === a[o = (r = t[n]).selector + " "] && (a[o] = r.needsContext ? -1 < j(o, this).index(l) : j.find(o, this, null, [l]).length),
                            a[o] && i.push(r);
                        i.length && u.push({
                            elem: l,
                            handlers: i
                        })
                    }
            return l = this,
            s < t.length && u.push({
                elem: l,
                handlers: t.slice(s)
            }),
                u
        },
        addProp: function(t, e) {
            Object.defineProperty(j.Event.prototype, t, {
                enumerable: !0,
                configurable: !0,
                get: b(e) ? function() {
                        if (this.originalEvent)
                            return e(this.originalEvent)
                    }
                    : function() {
                        if (this.originalEvent)
                            return this.originalEvent[t]
                    }
                ,
                set: function(e) {
                    Object.defineProperty(this, t, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: e
                    })
                }
            })
        },
        fix: function(e) {
            return e[j.expando] ? e : new j.Event(e)
        },
        special: {
            load: {
                noBubble: !0
            },
            click: {
                setup: function(e) {
                    e = this || e;
                    return fe.test(e.type) && e.click && _(e, "input") && Ee(e, "click", Ce),
                        !1
                },
                trigger: function(e) {
                    e = this || e;
                    return fe.test(e.type) && e.click && _(e, "input") && Ee(e, "click"),
                        !0
                },
                _default: function(e) {
                    e = e.target;
                    return fe.test(e.type) && e.click && _(e, "input") && Y.get(e, "click") || _(e, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        }
    },
        j.removeEvent = function(e, t, n) {
            e.removeEventListener && e.removeEventListener(t, n)
        }
        ,
        j.Event = function(e, t) {
            if (!(this instanceof j.Event))
                return new j.Event(e,t);
            e && e.type ? (this.originalEvent = e,
                this.type = e.type,
                this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? Ce : Te,
                this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target,
                this.currentTarget = e.currentTarget,
                this.relatedTarget = e.relatedTarget) : this.type = e,
            t && j.extend(this, t),
                this.timeStamp = e && e.timeStamp || Date.now(),
                this[j.expando] = !0
        }
        ,
        j.Event.prototype = {
            constructor: j.Event,
            isDefaultPrevented: Te,
            isPropagationStopped: Te,
            isImmediatePropagationStopped: Te,
            isSimulated: !1,
            preventDefault: function() {
                var e = this.originalEvent;
                this.isDefaultPrevented = Ce,
                e && !this.isSimulated && e.preventDefault()
            },
            stopPropagation: function() {
                var e = this.originalEvent;
                this.isPropagationStopped = Ce,
                e && !this.isSimulated && e.stopPropagation()
            },
            stopImmediatePropagation: function() {
                var e = this.originalEvent;
                this.isImmediatePropagationStopped = Ce,
                e && !this.isSimulated && e.stopImmediatePropagation(),
                    this.stopPropagation()
            }
        },
        j.each({
            altKey: !0,
            bubbles: !0,
            cancelable: !0,
            changedTouches: !0,
            ctrlKey: !0,
            detail: !0,
            eventPhase: !0,
            metaKey: !0,
            pageX: !0,
            pageY: !0,
            shiftKey: !0,
            view: !0,
            char: !0,
            code: !0,
            charCode: !0,
            key: !0,
            keyCode: !0,
            button: !0,
            buttons: !0,
            clientX: !0,
            clientY: !0,
            offsetX: !0,
            offsetY: !0,
            pointerId: !0,
            pointerType: !0,
            screenX: !0,
            screenY: !0,
            targetTouches: !0,
            toElement: !0,
            touches: !0,
            which: function(e) {
                var t = e.button;
                return null == e.which && be.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && xe.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
            }
        }, j.event.addProp),
        j.each({
            focus: "focusin",
            blur: "focusout"
        }, function(e, t) {
            j.event.special[e] = {
                setup: function() {
                    return Ee(this, e, je),
                        !1
                },
                trigger: function() {
                    return Ee(this, e),
                        !0
                },
                delegateType: t
            }
        }),
        j.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            pointerenter: "pointerover",
            pointerleave: "pointerout"
        }, function(e, o) {
            j.event.special[e] = {
                delegateType: o,
                bindType: o,
                handle: function(e) {
                    var t, n = e.relatedTarget, r = e.handleObj;
                    return n && (n === this || j.contains(this, n)) || (e.type = r.origType,
                        t = r.handler.apply(this, arguments),
                        e.type = o),
                        t
                }
            }
        }),
        j.fn.extend({
            on: function(e, t, n, r) {
                return ke(this, e, t, n, r)
            },
            one: function(e, t, n, r) {
                return ke(this, e, t, n, r, 1)
            },
            off: function(e, t, n) {
                var r, o;
                if (e && e.preventDefault && e.handleObj)
                    return r = e.handleObj,
                        j(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler),
                        this;
                if ("object" != typeof e)
                    return !1 !== t && "function" != typeof t || (n = t,
                        t = void 0),
                    !1 === n && (n = Te),
                        this.each(function() {
                            j.event.remove(this, e, n, t)
                        });
                for (o in e)
                    this.off(o, t, e[o]);
                return this
            }
        });
    var Se = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi
        , _e = /<script|<style|<link/i
        , Ne = /checked\s*(?:[^=]|=\s*.checked.)/i
        , Ae = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    function De(e, t) {
        return _(e, "table") && _(11 !== t.nodeType ? t : t.firstChild, "tr") && j(e).children("tbody")[0] || e
    }
    function Oe(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type,
            e
    }
    function qe(e) {
        return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"),
            e
    }
    function Le(e, t) {
        var n, r, o, i, a, u;
        if (1 === t.nodeType) {
            if (Y.hasData(e) && (i = Y.access(e),
                a = Y.set(t, i),
                u = i.events))
                for (o in delete a.handle,
                    a.events = {},
                    u)
                    for (n = 0,
                             r = u[o].length; n < r; n++)
                        j.event.add(t, o, u[o][n]);
            K.hasData(e) && (e = K.access(e),
                e = j.extend({}, e),
                K.set(t, e))
        }
    }
    function Ie(n, r, o, i) {
        r = v.apply([], r);
        var e, t, a, u, s, l, c = 0, f = n.length, p = f - 1, d = r[0], h = b(d);
        if (h || 1 < f && "string" == typeof d && !m.checkClone && Ne.test(d))
            return n.each(function(e) {
                var t = n.eq(e);
                h && (r[0] = d.call(this, e, t.html())),
                    Ie(t, r, o, i)
            });
        if (f && (t = (e = me(r, n[0].ownerDocument, !1, n, i)).firstChild,
        1 === e.childNodes.length && (e = t),
        t || i)) {
            for (u = (a = j.map(ge(e, "script"), Oe)).length; c < f; c++)
                s = e,
                c !== p && (s = j.clone(s, !0, !0),
                u && j.merge(a, ge(s, "script"))),
                    o.call(n[c], s, c);
            if (u)
                for (l = a[a.length - 1].ownerDocument,
                         j.map(a, qe),
                         c = 0; c < u; c++)
                    s = a[c],
                    de.test(s.type || "") && !Y.access(s, "globalEval") && j.contains(l, s) && (s.src && "module" !== (s.type || "").toLowerCase() ? j._evalUrl && !s.noModule && j._evalUrl(s.src, {
                        nonce: s.nonce || s.getAttribute("nonce")
                    }) : x(s.textContent.replace(Ae, ""), s, l))
        }
        return n
    }
    function Me(e, t, n) {
        for (var r, o = t ? j.filter(t, e) : e, i = 0; null != (r = o[i]); i++)
            n || 1 !== r.nodeType || j.cleanData(ge(r)),
            r.parentNode && (n && oe(r) && ve(ge(r, "script")),
                r.parentNode.removeChild(r));
        return e
    }
    j.extend({
        htmlPrefilter: function(e) {
            return e.replace(Se, "<$1></$2>")
        },
        clone: function(e, t, n) {
            var r, o, i, a, u, s, l, c = e.cloneNode(!0), f = oe(e);
            if (!(m.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || j.isXMLDoc(e)))
                for (a = ge(c),
                         r = 0,
                         o = (i = ge(e)).length; r < o; r++)
                    u = i[r],
                        s = a[r],
                        l = void 0,
                        "input" === (l = s.nodeName.toLowerCase()) && fe.test(u.type) ? s.checked = u.checked : "input" !== l && "textarea" !== l || (s.defaultValue = u.defaultValue);
            if (t)
                if (n)
                    for (i = i || ge(e),
                             a = a || ge(c),
                             r = 0,
                             o = i.length; r < o; r++)
                        Le(i[r], a[r]);
                else
                    Le(e, c);
            return 0 < (a = ge(c, "script")).length && ve(a, !f && ge(e, "script")),
                c
        },
        cleanData: function(e) {
            for (var t, n, r, o = j.event.special, i = 0; void 0 !== (n = e[i]); i++)
                if (V(n)) {
                    if (t = n[Y.expando]) {
                        if (t.events)
                            for (r in t.events)
                                o[r] ? j.event.remove(n, r) : j.removeEvent(n, r, t.handle);
                        n[Y.expando] = void 0
                    }
                    n[K.expando] && (n[K.expando] = void 0)
                }
        }
    }),
        j.fn.extend({
            detach: function(e) {
                return Me(this, e, !0)
            },
            remove: function(e) {
                return Me(this, e)
            },
            text: function(e) {
                return F(this, function(e) {
                    return void 0 === e ? j.text(this) : this.empty().each(function() {
                        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                    })
                }, null, e, arguments.length)
            },
            append: function() {
                return Ie(this, arguments, function(e) {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || De(this, e).appendChild(e)
                })
            },
            prepend: function() {
                return Ie(this, arguments, function(e) {
                    var t;
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (t = De(this, e)).insertBefore(e, t.firstChild)
                })
            },
            before: function() {
                return Ie(this, arguments, function(e) {
                    this.parentNode && this.parentNode.insertBefore(e, this)
                })
            },
            after: function() {
                return Ie(this, arguments, function(e) {
                    this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
                })
            },
            empty: function() {
                for (var e, t = 0; null != (e = this[t]); t++)
                    1 === e.nodeType && (j.cleanData(ge(e, !1)),
                        e.textContent = "");
                return this
            },
            clone: function(e, t) {
                return e = null != e && e,
                    t = null == t ? e : t,
                    this.map(function() {
                        return j.clone(this, e, t)
                    })
            },
            html: function(e) {
                return F(this, function(e) {
                    var t = this[0] || {}
                        , n = 0
                        , r = this.length;
                    if (void 0 === e && 1 === t.nodeType)
                        return t.innerHTML;
                    if ("string" == typeof e && !_e.test(e) && !he[(pe.exec(e) || ["", ""])[1].toLowerCase()]) {
                        e = j.htmlPrefilter(e);
                        try {
                            for (; n < r; n++)
                                1 === (t = this[n] || {}).nodeType && (j.cleanData(ge(t, !1)),
                                    t.innerHTML = e);
                            t = 0
                        } catch (e) {}
                    }
                    t && this.empty().append(e)
                }, null, e, arguments.length)
            },
            replaceWith: function() {
                var n = [];
                return Ie(this, arguments, function(e) {
                    var t = this.parentNode;
                    j.inArray(this, n) < 0 && (j.cleanData(ge(this)),
                    t && t.replaceChild(e, this))
                }, n)
            }
        }),
        j.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, function(e, a) {
            j.fn[e] = function(e) {
                for (var t, n = [], r = j(e), o = r.length - 1, i = 0; i <= o; i++)
                    t = i === o ? this : this.clone(!0),
                        j(r[i])[a](t),
                        s.apply(n, t.get());
                return this.pushStack(n)
            }
        });
    var He, Pe, Re, Be, $e, We, Fe, ze = new RegExp("^(" + f + ")(?!px)[a-z%]+$","i"), Qe = function(e) {
        var t = e.ownerDocument.defaultView;
        return (t = !t || !t.opener ? C : t).getComputedStyle(e)
    }, Ue = new RegExp(ne.join("|"),"i");
    function Xe() {
        var e;
        Fe && (We.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",
            Fe.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",
            re.appendChild(We).appendChild(Fe),
            e = C.getComputedStyle(Fe),
            He = "1%" !== e.top,
            $e = 12 === Ve(e.marginLeft),
            Fe.style.right = "60%",
            Be = 36 === Ve(e.right),
            Pe = 36 === Ve(e.width),
            Fe.style.position = "absolute",
            Re = 12 === Ve(Fe.offsetWidth / 3),
            re.removeChild(We),
            Fe = null)
    }
    function Ve(e) {
        return Math.round(parseFloat(e))
    }
    function Ge(e, t, n) {
        var r, o, i = e.style;
        return (n = n || Qe(e)) && ("" !== (o = n.getPropertyValue(t) || n[t]) || oe(e) || (o = j.style(e, t)),
        !m.pixelBoxStyles() && ze.test(o) && Ue.test(t) && (r = i.width,
            e = i.minWidth,
            t = i.maxWidth,
            i.minWidth = i.maxWidth = i.width = o,
            o = n.width,
            i.width = r,
            i.minWidth = e,
            i.maxWidth = t)),
            void 0 !== o ? o + "" : o
    }
    function Ye(e, t) {
        return {
            get: function() {
                if (!e())
                    return (this.get = t).apply(this, arguments);
                delete this.get
            }
        }
    }
    We = T.createElement("div"),
    (Fe = T.createElement("div")).style && (Fe.style.backgroundClip = "content-box",
        Fe.cloneNode(!0).style.backgroundClip = "",
        m.clearCloneStyle = "content-box" === Fe.style.backgroundClip,
        j.extend(m, {
            boxSizingReliable: function() {
                return Xe(),
                    Pe
            },
            pixelBoxStyles: function() {
                return Xe(),
                    Be
            },
            pixelPosition: function() {
                return Xe(),
                    He
            },
            reliableMarginLeft: function() {
                return Xe(),
                    $e
            },
            scrollboxSize: function() {
                return Xe(),
                    Re
            }
        }));
    var Ke = ["Webkit", "Moz", "ms"]
        , Je = T.createElement("div").style
        , Ze = {};
    function et(e) {
        var t = j.cssProps[e] || Ze[e];
        return t || (e in Je ? e : Ze[e] = function(e) {
            for (var t = e[0].toUpperCase() + e.slice(1), n = Ke.length; n--; )
                if ((e = Ke[n] + t)in Je)
                    return e
        }(e) || e)
    }
    var tt = /^(none|table(?!-c[ea]).+)/
        , nt = /^--/
        , rt = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }
        , ot = {
        letterSpacing: "0",
        fontWeight: "400"
    };
    function it(e, t, n) {
        var r = te.exec(t);
        return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t
    }
    function at(e, t, n, r, o, i) {
        var a = "width" === t ? 1 : 0
            , u = 0
            , s = 0;
        if (n === (r ? "border" : "content"))
            return 0;
        for (; a < 4; a += 2)
            "margin" === n && (s += j.css(e, n + ne[a], !0, o)),
                r ? ("content" === n && (s -= j.css(e, "padding" + ne[a], !0, o)),
                "margin" !== n && (s -= j.css(e, "border" + ne[a] + "Width", !0, o))) : (s += j.css(e, "padding" + ne[a], !0, o),
                    "padding" !== n ? s += j.css(e, "border" + ne[a] + "Width", !0, o) : u += j.css(e, "border" + ne[a] + "Width", !0, o));
        return !r && 0 <= i && (s += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - i - s - u - .5)) || 0),
            s
    }
    function ut(e, t, n) {
        var r = Qe(e)
            , o = (!m.boxSizingReliable() || n) && "border-box" === j.css(e, "boxSizing", !1, r)
            , i = o
            , a = Ge(e, t, r)
            , u = "offset" + t[0].toUpperCase() + t.slice(1);
        if (ze.test(a)) {
            if (!n)
                return a;
            a = "auto"
        }
        return (!m.boxSizingReliable() && o || "auto" === a || !parseFloat(a) && "inline" === j.css(e, "display", !1, r)) && e.getClientRects().length && (o = "border-box" === j.css(e, "boxSizing", !1, r),
        (i = u in e) && (a = e[u])),
        (a = parseFloat(a) || 0) + at(e, t, n || (o ? "border" : "content"), i, r, a) + "px"
    }
    function st(e, t, n, r, o) {
        return new st.prototype.init(e,t,n,r,o)
    }
    j.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        e = Ge(e, "opacity");
                        return "" === e ? "1" : e
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            gridArea: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnStart: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowStart: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {},
        style: function(e, t, n, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var o, i, a, u = X(t), s = nt.test(t), l = e.style;
                if (s || (t = et(u)),
                    a = j.cssHooks[t] || j.cssHooks[u],
                void 0 === n)
                    return a && "get"in a && void 0 !== (o = a.get(e, !1, r)) ? o : l[t];
                "string" === (i = typeof n) && (o = te.exec(n)) && o[1] && (n = se(e, t, o),
                    i = "number"),
                null != n && n == n && ("number" !== i || s || (n += o && o[3] || (j.cssNumber[u] ? "" : "px")),
                m.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"),
                a && "set"in a && void 0 === (n = a.set(e, n, r)) || (s ? l.setProperty(t, n) : l[t] = n))
            }
        },
        css: function(e, t, n, r) {
            var o, i = X(t);
            return nt.test(t) || (t = et(i)),
            "normal" === (o = void 0 === (o = (i = j.cssHooks[t] || j.cssHooks[i]) && "get"in i ? i.get(e, !0, n) : o) ? Ge(e, t, r) : o) && t in ot && (o = ot[t]),
                "" === n || n ? (t = parseFloat(o),
                    !0 === n || isFinite(t) ? t || 0 : o) : o
        }
    }),
        j.each(["height", "width"], function(e, u) {
            j.cssHooks[u] = {
                get: function(e, t, n) {
                    if (t)
                        return !tt.test(j.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? ut(e, u, n) : ae(e, rt, function() {
                            return ut(e, u, n)
                        })
                },
                set: function(e, t, n) {
                    var r, o = Qe(e), i = !m.scrollboxSize() && "absolute" === o.position, a = (i || n) && "border-box" === j.css(e, "boxSizing", !1, o), n = n ? at(e, u, n, a, o) : 0;
                    return a && i && (n -= Math.ceil(e["offset" + u[0].toUpperCase() + u.slice(1)] - parseFloat(o[u]) - at(e, u, "border", !1, o) - .5)),
                    n && (r = te.exec(t)) && "px" !== (r[3] || "px") && (e.style[u] = t,
                        t = j.css(e, u)),
                        it(0, t, n)
                }
            }
        }),
        j.cssHooks.marginLeft = Ye(m.reliableMarginLeft, function(e, t) {
            if (t)
                return (parseFloat(Ge(e, "marginLeft")) || e.getBoundingClientRect().left - ae(e, {
                    marginLeft: 0
                }, function() {
                    return e.getBoundingClientRect().left
                })) + "px"
        }),
        j.each({
            margin: "",
            padding: "",
            border: "Width"
        }, function(o, i) {
            j.cssHooks[o + i] = {
                expand: function(e) {
                    for (var t = 0, n = {}, r = "string" == typeof e ? e.split(" ") : [e]; t < 4; t++)
                        n[o + ne[t] + i] = r[t] || r[t - 2] || r[0];
                    return n
                }
            },
            "margin" !== o && (j.cssHooks[o + i].set = it)
        }),
        j.fn.extend({
            css: function(e, t) {
                return F(this, function(e, t, n) {
                    var r, o, i = {}, a = 0;
                    if (Array.isArray(t)) {
                        for (r = Qe(e),
                                 o = t.length; a < o; a++)
                            i[t[a]] = j.css(e, t[a], !1, r);
                        return i
                    }
                    return void 0 !== n ? j.style(e, t, n) : j.css(e, t)
                }, e, t, 1 < arguments.length)
            }
        }),
        (j.Tween = st).prototype = {
            constructor: st,
            init: function(e, t, n, r, o, i) {
                this.elem = e,
                    this.prop = n,
                    this.easing = o || j.easing._default,
                    this.options = t,
                    this.start = this.now = this.cur(),
                    this.end = r,
                    this.unit = i || (j.cssNumber[n] ? "" : "px")
            },
            cur: function() {
                var e = st.propHooks[this.prop];
                return (e && e.get ? e : st.propHooks._default).get(this)
            },
            run: function(e) {
                var t, n = st.propHooks[this.prop];
                return this.options.duration ? this.pos = t = j.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e,
                    this.now = (this.end - this.start) * t + this.start,
                this.options.step && this.options.step.call(this.elem, this.now, this),
                    (n && n.set ? n : st.propHooks._default).set(this),
                    this
            }
        },
        st.prototype.init.prototype = st.prototype,
        st.propHooks = {
            _default: {
                get: function(e) {
                    return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (e = j.css(e.elem, e.prop, "")) && "auto" !== e ? e : 0
                },
                set: function(e) {
                    j.fx.step[e.prop] ? j.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !j.cssHooks[e.prop] && null == e.elem.style[et(e.prop)] ? e.elem[e.prop] = e.now : j.style(e.elem, e.prop, e.now + e.unit)
                }
            }
        },
        st.propHooks.scrollTop = st.propHooks.scrollLeft = {
            set: function(e) {
                e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
            }
        },
        j.easing = {
            linear: function(e) {
                return e
            },
            swing: function(e) {
                return .5 - Math.cos(e * Math.PI) / 2
            },
            _default: "swing"
        },
        j.fx = st.prototype.init,
        j.fx.step = {};
    var lt, ct, ft = /^(?:toggle|show|hide)$/, pt = /queueHooks$/;
    function dt() {
        ct && (!1 === T.hidden && C.requestAnimationFrame ? C.requestAnimationFrame(dt) : C.setTimeout(dt, j.fx.interval),
            j.fx.tick())
    }
    function ht() {
        return C.setTimeout(function() {
            lt = void 0
        }),
            lt = Date.now()
    }
    function gt(e, t) {
        var n, r = 0, o = {
            height: e
        };
        for (t = t ? 1 : 0; r < 4; r += 2 - t)
            o["margin" + (n = ne[r])] = o["padding" + n] = e;
        return t && (o.opacity = o.width = e),
            o
    }
    function vt(e, t, n) {
        for (var r, o = (yt.tweeners[t] || []).concat(yt.tweeners["*"]), i = 0, a = o.length; i < a; i++)
            if (r = o[i].call(n, t, e))
                return r
    }
    function yt(o, e, t) {
        var n, i, r = 0, a = yt.prefilters.length, u = j.Deferred().always(function() {
            delete s.elem
        }), s = function() {
            if (i)
                return !1;
            for (var e = lt || ht(), e = Math.max(0, l.startTime + l.duration - e), t = 1 - (e / l.duration || 0), n = 0, r = l.tweens.length; n < r; n++)
                l.tweens[n].run(t);
            return u.notifyWith(o, [l, t, e]),
                t < 1 && r ? e : (r || u.notifyWith(o, [l, 1, 0]),
                    u.resolveWith(o, [l]),
                    !1)
        }, l = u.promise({
            elem: o,
            props: j.extend({}, e),
            opts: j.extend(!0, {
                specialEasing: {},
                easing: j.easing._default
            }, t),
            originalProperties: e,
            originalOptions: t,
            startTime: lt || ht(),
            duration: t.duration,
            tweens: [],
            createTween: function(e, t) {
                e = j.Tween(o, l.opts, e, t, l.opts.specialEasing[e] || l.opts.easing);
                return l.tweens.push(e),
                    e
            },
            stop: function(e) {
                var t = 0
                    , n = e ? l.tweens.length : 0;
                if (i)
                    return this;
                for (i = !0; t < n; t++)
                    l.tweens[t].run(1);
                return e ? (u.notifyWith(o, [l, 1, 0]),
                    u.resolveWith(o, [l, e])) : u.rejectWith(o, [l, e]),
                    this
            }
        }), c = l.props;
        for (!function(e, t) {
            var n, r, o, i, a;
            for (n in e)
                if (o = t[r = X(n)],
                    i = e[n],
                Array.isArray(i) && (o = i[1],
                    i = e[n] = i[0]),
                n !== r && (e[r] = i,
                    delete e[n]),
                (a = j.cssHooks[r]) && "expand"in a)
                    for (n in i = a.expand(i),
                        delete e[r],
                        i)
                        n in e || (e[n] = i[n],
                            t[n] = o);
                else
                    t[r] = o
        }(c, l.opts.specialEasing); r < a; r++)
            if (n = yt.prefilters[r].call(l, o, c, l.opts))
                return b(n.stop) && (j._queueHooks(l.elem, l.opts.queue).stop = n.stop.bind(n)),
                    n;
        return j.map(c, vt, l),
        b(l.opts.start) && l.opts.start.call(o, l),
            l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always),
            j.fx.timer(j.extend(s, {
                elem: o,
                anim: l,
                queue: l.opts.queue
            })),
            l
    }
    j.Animation = j.extend(yt, {
        tweeners: {
            "*": [function(e, t) {
                var n = this.createTween(e, t);
                return se(n.elem, e, te.exec(t), n),
                    n
            }
            ]
        },
        tweener: function(e, t) {
            for (var n, r = 0, o = (e = b(e) ? (t = e,
                ["*"]) : e.match(M)).length; r < o; r++)
                n = e[r],
                    yt.tweeners[n] = yt.tweeners[n] || [],
                    yt.tweeners[n].unshift(t)
        },
        prefilters: [function(e, t, n) {
            var r, o, i, a, u, s, l, c = "width"in t || "height"in t, f = this, p = {}, d = e.style, h = e.nodeType && ue(e), g = Y.get(e, "fxshow");
            for (r in n.queue || (null == (a = j._queueHooks(e, "fx")).unqueued && (a.unqueued = 0,
                    u = a.empty.fire,
                    a.empty.fire = function() {
                        a.unqueued || u()
                    }
            ),
                a.unqueued++,
                f.always(function() {
                    f.always(function() {
                        a.unqueued--,
                        j.queue(e, "fx").length || a.empty.fire()
                    })
                })),
                t)
                if (o = t[r],
                    ft.test(o)) {
                    if (delete t[r],
                        i = i || "toggle" === o,
                    o === (h ? "hide" : "show")) {
                        if ("show" !== o || !g || void 0 === g[r])
                            continue;
                        h = !0
                    }
                    p[r] = g && g[r] || j.style(e, r)
                }
            if ((s = !j.isEmptyObject(t)) || !j.isEmptyObject(p))
                for (r in c && 1 === e.nodeType && (n.overflow = [d.overflow, d.overflowX, d.overflowY],
                null == (l = g && g.display) && (l = Y.get(e, "display")),
                "none" === (c = j.css(e, "display")) && (l ? c = l : (ce([e], !0),
                    l = e.style.display || l,
                    c = j.css(e, "display"),
                    ce([e]))),
                ("inline" === c || "inline-block" === c && null != l) && "none" === j.css(e, "float") && (s || (f.done(function() {
                    d.display = l
                }),
                null == l && (c = d.display,
                    l = "none" === c ? "" : c)),
                    d.display = "inline-block")),
                n.overflow && (d.overflow = "hidden",
                    f.always(function() {
                        d.overflow = n.overflow[0],
                            d.overflowX = n.overflow[1],
                            d.overflowY = n.overflow[2]
                    })),
                    s = !1,
                    p)
                    s || (g ? "hidden"in g && (h = g.hidden) : g = Y.access(e, "fxshow", {
                        display: l
                    }),
                    i && (g.hidden = !h),
                    h && ce([e], !0),
                        f.done(function() {
                            for (r in h || ce([e]),
                                Y.remove(e, "fxshow"),
                                p)
                                j.style(e, r, p[r])
                        })),
                        s = vt(h ? g[r] : 0, r, f),
                    r in g || (g[r] = s.start,
                    h && (s.end = s.start,
                        s.start = 0))
        }
        ],
        prefilter: function(e, t) {
            t ? yt.prefilters.unshift(e) : yt.prefilters.push(e)
        }
    }),
        j.speed = function(e, t, n) {
            var r = e && "object" == typeof e ? j.extend({}, e) : {
                complete: n || !n && t || b(e) && e,
                duration: e,
                easing: n && t || t && !b(t) && t
            };
            return j.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in j.fx.speeds ? r.duration = j.fx.speeds[r.duration] : r.duration = j.fx.speeds._default),
            null != r.queue && !0 !== r.queue || (r.queue = "fx"),
                r.old = r.complete,
                r.complete = function() {
                    b(r.old) && r.old.call(this),
                    r.queue && j.dequeue(this, r.queue)
                }
                ,
                r
        }
        ,
        j.fn.extend({
            fadeTo: function(e, t, n, r) {
                return this.filter(ue).css("opacity", 0).show().end().animate({
                    opacity: t
                }, e, n, r)
            },
            animate: function(t, e, n, r) {
                var o = j.isEmptyObject(t)
                    , i = j.speed(e, n, r)
                    , r = function() {
                    var e = yt(this, j.extend({}, t), i);
                    (o || Y.get(this, "finish")) && e.stop(!0)
                };
                return r.finish = r,
                    o || !1 === i.queue ? this.each(r) : this.queue(i.queue, r)
            },
            stop: function(o, e, i) {
                function a(e) {
                    var t = e.stop;
                    delete e.stop,
                        t(i)
                }
                return "string" != typeof o && (i = e,
                    e = o,
                    o = void 0),
                e && !1 !== o && this.queue(o || "fx", []),
                    this.each(function() {
                        var e = !0
                            , t = null != o && o + "queueHooks"
                            , n = j.timers
                            , r = Y.get(this);
                        if (t)
                            r[t] && r[t].stop && a(r[t]);
                        else
                            for (t in r)
                                r[t] && r[t].stop && pt.test(t) && a(r[t]);
                        for (t = n.length; t--; )
                            n[t].elem !== this || null != o && n[t].queue !== o || (n[t].anim.stop(i),
                                e = !1,
                                n.splice(t, 1));
                        !e && i || j.dequeue(this, o)
                    })
            },
            finish: function(a) {
                return !1 !== a && (a = a || "fx"),
                    this.each(function() {
                        var e, t = Y.get(this), n = t[a + "queue"], r = t[a + "queueHooks"], o = j.timers, i = n ? n.length : 0;
                        for (t.finish = !0,
                                 j.queue(this, a, []),
                             r && r.stop && r.stop.call(this, !0),
                                 e = o.length; e--; )
                            o[e].elem === this && o[e].queue === a && (o[e].anim.stop(!0),
                                o.splice(e, 1));
                        for (e = 0; e < i; e++)
                            n[e] && n[e].finish && n[e].finish.call(this);
                        delete t.finish
                    })
            }
        }),
        j.each(["toggle", "show", "hide"], function(e, r) {
            var o = j.fn[r];
            j.fn[r] = function(e, t, n) {
                return null == e || "boolean" == typeof e ? o.apply(this, arguments) : this.animate(gt(r, !0), e, t, n)
            }
        }),
        j.each({
            slideDown: gt("show"),
            slideUp: gt("hide"),
            slideToggle: gt("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function(e, r) {
            j.fn[e] = function(e, t, n) {
                return this.animate(r, e, t, n)
            }
        }),
        j.timers = [],
        j.fx.tick = function() {
            var e, t = 0, n = j.timers;
            for (lt = Date.now(); t < n.length; t++)
                (e = n[t])() || n[t] !== e || n.splice(t--, 1);
            n.length || j.fx.stop(),
                lt = void 0
        }
        ,
        j.fx.timer = function(e) {
            j.timers.push(e),
                j.fx.start()
        }
        ,
        j.fx.interval = 13,
        j.fx.start = function() {
            ct || (ct = !0,
                dt())
        }
        ,
        j.fx.stop = function() {
            ct = null
        }
        ,
        j.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        },
        j.fn.delay = function(r, e) {
            return r = j.fx && j.fx.speeds[r] || r,
                this.queue(e = e || "fx", function(e, t) {
                    var n = C.setTimeout(e, r);
                    t.stop = function() {
                        C.clearTimeout(n)
                    }
                })
        }
        ,
        t = T.createElement("input"),
        f = T.createElement("select").appendChild(T.createElement("option")),
        t.type = "checkbox",
        m.checkOn = "" !== t.value,
        m.optSelected = f.selected,
        (t = T.createElement("input")).value = "t",
        t.type = "radio",
        m.radioValue = "t" === t.value;
    var mt, bt = j.expr.attrHandle;
    j.fn.extend({
        attr: function(e, t) {
            return F(this, j.attr, e, t, 1 < arguments.length)
        },
        removeAttr: function(e) {
            return this.each(function() {
                j.removeAttr(this, e)
            })
        }
    }),
        j.extend({
            attr: function(e, t, n) {
                var r, o, i = e.nodeType;
                if (3 !== i && 8 !== i && 2 !== i)
                    return void 0 === e.getAttribute ? j.prop(e, t, n) : (1 === i && j.isXMLDoc(e) || (o = j.attrHooks[t.toLowerCase()] || (j.expr.match.bool.test(t) ? mt : void 0)),
                        void 0 !== n ? null === n ? void j.removeAttr(e, t) : o && "set"in o && void 0 !== (r = o.set(e, n, t)) ? r : (e.setAttribute(t, n + ""),
                            n) : !(o && "get"in o && null !== (r = o.get(e, t))) && null == (r = j.find.attr(e, t)) ? void 0 : r)
            },
            attrHooks: {
                type: {
                    set: function(e, t) {
                        if (!m.radioValue && "radio" === t && _(e, "input")) {
                            var n = e.value;
                            return e.setAttribute("type", t),
                            n && (e.value = n),
                                t
                        }
                    }
                }
            },
            removeAttr: function(e, t) {
                var n, r = 0, o = t && t.match(M);
                if (o && 1 === e.nodeType)
                    for (; n = o[r++]; )
                        e.removeAttribute(n)
            }
        }),
        mt = {
            set: function(e, t, n) {
                return !1 === t ? j.removeAttr(e, n) : e.setAttribute(n, n),
                    n
            }
        },
        j.each(j.expr.match.bool.source.match(/\w+/g), function(e, t) {
            var a = bt[t] || j.find.attr;
            bt[t] = function(e, t, n) {
                var r, o, i = t.toLowerCase();
                return n || (o = bt[i],
                    bt[i] = r,
                    r = null != a(e, t, n) ? i : null,
                    bt[i] = o),
                    r
            }
        });
    var xt = /^(?:input|select|textarea|button)$/i
        , wt = /^(?:a|area)$/i;
    function Ct(e) {
        return (e.match(M) || []).join(" ")
    }
    function Tt(e) {
        return e.getAttribute && e.getAttribute("class") || ""
    }
    function jt(e) {
        return Array.isArray(e) ? e : "string" == typeof e && e.match(M) || []
    }
    j.fn.extend({
        prop: function(e, t) {
            return F(this, j.prop, e, t, 1 < arguments.length)
        },
        removeProp: function(e) {
            return this.each(function() {
                delete this[j.propFix[e] || e]
            })
        }
    }),
        j.extend({
            prop: function(e, t, n) {
                var r, o, i = e.nodeType;
                if (3 !== i && 8 !== i && 2 !== i)
                    return 1 === i && j.isXMLDoc(e) || (t = j.propFix[t] || t,
                        o = j.propHooks[t]),
                        void 0 !== n ? o && "set"in o && void 0 !== (r = o.set(e, n, t)) ? r : e[t] = n : o && "get"in o && null !== (r = o.get(e, t)) ? r : e[t]
            },
            propHooks: {
                tabIndex: {
                    get: function(e) {
                        var t = j.find.attr(e, "tabindex");
                        return t ? parseInt(t, 10) : xt.test(e.nodeName) || wt.test(e.nodeName) && e.href ? 0 : -1
                    }
                }
            },
            propFix: {
                for: "htmlFor",
                class: "className"
            }
        }),
    m.optSelected || (j.propHooks.selected = {
        get: function(e) {
            e = e.parentNode;
            return e && e.parentNode && e.parentNode.selectedIndex,
                null
        },
        set: function(e) {
            e = e.parentNode;
            e && (e.selectedIndex,
            e.parentNode && e.parentNode.selectedIndex)
        }
    }),
        j.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
            j.propFix[this.toLowerCase()] = this
        }),
        j.fn.extend({
            addClass: function(t) {
                var e, n, r, o, i, a, u = 0;
                if (b(t))
                    return this.each(function(e) {
                        j(this).addClass(t.call(this, e, Tt(this)))
                    });
                if ((e = jt(t)).length)
                    for (; n = this[u++]; )
                        if (a = Tt(n),
                            r = 1 === n.nodeType && " " + Ct(a) + " ") {
                            for (i = 0; o = e[i++]; )
                                r.indexOf(" " + o + " ") < 0 && (r += o + " ");
                            a !== (a = Ct(r)) && n.setAttribute("class", a)
                        }
                return this
            },
            removeClass: function(t) {
                var e, n, r, o, i, a, u = 0;
                if (b(t))
                    return this.each(function(e) {
                        j(this).removeClass(t.call(this, e, Tt(this)))
                    });
                if (!arguments.length)
                    return this.attr("class", "");
                if ((e = jt(t)).length)
                    for (; n = this[u++]; )
                        if (a = Tt(n),
                            r = 1 === n.nodeType && " " + Ct(a) + " ") {
                            for (i = 0; o = e[i++]; )
                                for (; -1 < r.indexOf(" " + o + " "); )
                                    r = r.replace(" " + o + " ", " ");
                            a !== (a = Ct(r)) && n.setAttribute("class", a)
                        }
                return this
            },
            toggleClass: function(o, t) {
                var i = typeof o
                    , a = "string" == i || Array.isArray(o);
                return "boolean" == typeof t && a ? t ? this.addClass(o) : this.removeClass(o) : b(o) ? this.each(function(e) {
                    j(this).toggleClass(o.call(this, e, Tt(this), t), t)
                }) : this.each(function() {
                    var e, t, n, r;
                    if (a)
                        for (t = 0,
                                 n = j(this),
                                 r = jt(o); e = r[t++]; )
                            n.hasClass(e) ? n.removeClass(e) : n.addClass(e);
                    else
                        void 0 !== o && "boolean" != i || ((e = Tt(this)) && Y.set(this, "__className__", e),
                        this.setAttribute && this.setAttribute("class", !e && !1 !== o && Y.get(this, "__className__") || ""))
                })
            },
            hasClass: function(e) {
                for (var t, n = 0, r = " " + e + " "; t = this[n++]; )
                    if (1 === t.nodeType && -1 < (" " + Ct(Tt(t)) + " ").indexOf(r))
                        return !0;
                return !1
            }
        });
    var kt = /\r/g;
    j.fn.extend({
        val: function(t) {
            var n, e, r, o = this[0];
            return arguments.length ? (r = b(t),
                this.each(function(e) {
                    1 === this.nodeType && (null == (e = r ? t.call(this, e, j(this).val()) : t) ? e = "" : "number" == typeof e ? e += "" : Array.isArray(e) && (e = j.map(e, function(e) {
                        return null == e ? "" : e + ""
                    })),
                    (n = j.valHooks[this.type] || j.valHooks[this.nodeName.toLowerCase()]) && "set"in n && void 0 !== n.set(this, e, "value") || (this.value = e))
                })) : o ? (n = j.valHooks[o.type] || j.valHooks[o.nodeName.toLowerCase()]) && "get"in n && void 0 !== (e = n.get(o, "value")) ? e : "string" == typeof (e = o.value) ? e.replace(kt, "") : null == e ? "" : e : void 0
        }
    }),
        j.extend({
            valHooks: {
                option: {
                    get: function(e) {
                        var t = j.find.attr(e, "value");
                        return null != t ? t : Ct(j.text(e))
                    }
                },
                select: {
                    get: function(e) {
                        for (var t, n = e.options, r = e.selectedIndex, o = "select-one" === e.type, i = o ? null : [], a = o ? r + 1 : n.length, u = r < 0 ? a : o ? r : 0; u < a; u++)
                            if (((t = n[u]).selected || u === r) && !t.disabled && (!t.parentNode.disabled || !_(t.parentNode, "optgroup"))) {
                                if (t = j(t).val(),
                                    o)
                                    return t;
                                i.push(t)
                            }
                        return i
                    },
                    set: function(e, t) {
                        for (var n, r, o = e.options, i = j.makeArray(t), a = o.length; a--; )
                            ((r = o[a]).selected = -1 < j.inArray(j.valHooks.option.get(r), i)) && (n = !0);
                        return n || (e.selectedIndex = -1),
                            i
                    }
                }
            }
        }),
        j.each(["radio", "checkbox"], function() {
            j.valHooks[this] = {
                set: function(e, t) {
                    if (Array.isArray(t))
                        return e.checked = -1 < j.inArray(j(e).val(), t)
                }
            },
            m.checkOn || (j.valHooks[this].get = function(e) {
                    return null === e.getAttribute("value") ? "on" : e.value
                }
            )
        }),
        m.focusin = "onfocusin"in C;
    function Et(e) {
        e.stopPropagation()
    }
    var St = /^(?:focusinfocus|focusoutblur)$/;
    j.extend(j.event, {
        trigger: function(e, t, n, r) {
            var o, i, a, u, s, l, c, f = [n || T], p = y.call(e, "type") ? e.type : e, d = y.call(e, "namespace") ? e.namespace.split(".") : [], h = c = i = n = n || T;
            if (3 !== n.nodeType && 8 !== n.nodeType && !St.test(p + j.event.triggered) && (-1 < p.indexOf(".") && (p = (d = p.split(".")).shift(),
                d.sort()),
                u = p.indexOf(":") < 0 && "on" + p,
                (e = e[j.expando] ? e : new j.Event(p,"object" == typeof e && e)).isTrigger = r ? 2 : 3,
                e.namespace = d.join("."),
                e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + d.join("\\.(?:.*\\.|)") + "(\\.|$)") : null,
                e.result = void 0,
            e.target || (e.target = n),
                t = null == t ? [e] : j.makeArray(t, [e]),
                l = j.event.special[p] || {},
            r || !l.trigger || !1 !== l.trigger.apply(n, t))) {
                if (!r && !l.noBubble && !g(n)) {
                    for (a = l.delegateType || p,
                         St.test(a + p) || (h = h.parentNode); h; h = h.parentNode)
                        f.push(h),
                            i = h;
                    i === (n.ownerDocument || T) && f.push(i.defaultView || i.parentWindow || C)
                }
                for (o = 0; (h = f[o++]) && !e.isPropagationStopped(); )
                    c = h,
                        e.type = 1 < o ? a : l.bindType || p,
                    (s = (Y.get(h, "events") || {})[e.type] && Y.get(h, "handle")) && s.apply(h, t),
                    (s = u && h[u]) && s.apply && V(h) && (e.result = s.apply(h, t),
                    !1 === e.result && e.preventDefault());
                return e.type = p,
                r || e.isDefaultPrevented() || l._default && !1 !== l._default.apply(f.pop(), t) || !V(n) || u && b(n[p]) && !g(n) && ((i = n[u]) && (n[u] = null),
                    j.event.triggered = p,
                e.isPropagationStopped() && c.addEventListener(p, Et),
                    n[p](),
                e.isPropagationStopped() && c.removeEventListener(p, Et),
                    j.event.triggered = void 0,
                i && (n[u] = i)),
                    e.result
            }
        },
        simulate: function(e, t, n) {
            e = j.extend(new j.Event, n, {
                type: e,
                isSimulated: !0
            });
            j.event.trigger(e, null, t)
        }
    }),
        j.fn.extend({
            trigger: function(e, t) {
                return this.each(function() {
                    j.event.trigger(e, t, this)
                })
            },
            triggerHandler: function(e, t) {
                var n = this[0];
                if (n)
                    return j.event.trigger(e, t, n, !0)
            }
        }),
    m.focusin || j.each({
        focus: "focusin",
        blur: "focusout"
    }, function(n, r) {
        function o(e) {
            j.event.simulate(r, e.target, j.event.fix(e))
        }
        j.event.special[r] = {
            setup: function() {
                var e = this.ownerDocument || this
                    , t = Y.access(e, r);
                t || e.addEventListener(n, o, !0),
                    Y.access(e, r, (t || 0) + 1)
            },
            teardown: function() {
                var e = this.ownerDocument || this
                    , t = Y.access(e, r) - 1;
                t ? Y.access(e, r, t) : (e.removeEventListener(n, o, !0),
                    Y.remove(e, r))
            }
        }
    });
    var _t = C.location
        , Nt = Date.now()
        , At = /\?/;
    j.parseXML = function(e) {
        var t;
        if (!e || "string" != typeof e)
            return null;
        try {
            t = (new C.DOMParser).parseFromString(e, "text/xml")
        } catch (e) {
            t = void 0
        }
        return t && !t.getElementsByTagName("parsererror").length || j.error("Invalid XML: " + e),
            t
    }
    ;
    var Dt = /\[\]$/
        , Ot = /\r?\n/g
        , qt = /^(?:submit|button|image|reset|file)$/i
        , Lt = /^(?:input|select|textarea|keygen)/i;
    j.param = function(e, t) {
        function n(e, t) {
            t = b(t) ? t() : t,
                o[o.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == t ? "" : t)
        }
        var r, o = [];
        if (null == e)
            return "";
        if (Array.isArray(e) || e.jquery && !j.isPlainObject(e))
            j.each(e, function() {
                n(this.name, this.value)
            });
        else
            for (r in e)
                !function n(r, e, o, i) {
                    if (Array.isArray(e))
                        j.each(e, function(e, t) {
                            o || Dt.test(r) ? i(r, t) : n(r + "[" + ("object" == typeof t && null != t ? e : "") + "]", t, o, i)
                        });
                    else if (o || "object" !== h(e))
                        i(r, e);
                    else
                        for (var t in e)
                            n(r + "[" + t + "]", e[t], o, i)
                }(r, e[r], t, n);
        return o.join("&")
    }
        ,
        j.fn.extend({
            serialize: function() {
                return j.param(this.serializeArray())
            },
            serializeArray: function() {
                return this.map(function() {
                    var e = j.prop(this, "elements");
                    return e ? j.makeArray(e) : this
                }).filter(function() {
                    var e = this.type;
                    return this.name && !j(this).is(":disabled") && Lt.test(this.nodeName) && !qt.test(e) && (this.checked || !fe.test(e))
                }).map(function(e, t) {
                    var n = j(this).val();
                    return null == n ? null : Array.isArray(n) ? j.map(n, function(e) {
                        return {
                            name: t.name,
                            value: e.replace(Ot, "\r\n")
                        }
                    }) : {
                        name: t.name,
                        value: n.replace(Ot, "\r\n")
                    }
                }).get()
            }
        });
    var It = /%20/g
        , Mt = /#.*$/
        , Ht = /([?&])_=[^&]*/
        , Pt = /^(.*?):[ \t]*([^\r\n]*)$/gm
        , Rt = /^(?:GET|HEAD)$/
        , Bt = /^\/\//
        , $t = {}
        , Wt = {}
        , Ft = "*/".concat("*")
        , zt = T.createElement("a");
    function Qt(i) {
        return function(e, t) {
            "string" != typeof e && (t = e,
                e = "*");
            var n, r = 0, o = e.toLowerCase().match(M) || [];
            if (b(t))
                for (; n = o[r++]; )
                    "+" === n[0] ? (n = n.slice(1) || "*",
                        (i[n] = i[n] || []).unshift(t)) : (i[n] = i[n] || []).push(t)
        }
    }
    function Ut(t, r, o, i) {
        var a = {}
            , u = t === Wt;
        function s(e) {
            var n;
            return a[e] = !0,
                j.each(t[e] || [], function(e, t) {
                    t = t(r, o, i);
                    return "string" != typeof t || u || a[t] ? u ? !(n = t) : void 0 : (r.dataTypes.unshift(t),
                        s(t),
                        !1)
                }),
                n
        }
        return s(r.dataTypes[0]) || !a["*"] && s("*")
    }
    function Xt(e, t) {
        var n, r, o = j.ajaxSettings.flatOptions || {};
        for (n in t)
            void 0 !== t[n] && ((o[n] ? e : r = r || {})[n] = t[n]);
        return r && j.extend(!0, e, r),
            e
    }
    zt.href = _t.href,
        j.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: _t.href,
                type: "GET",
                isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(_t.protocol),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": Ft,
                    text: "text/plain",
                    html: "text/html",
                    xml: "application/xml, text/xml",
                    json: "application/json, text/javascript"
                },
                contents: {
                    xml: /\bxml\b/,
                    html: /\bhtml/,
                    json: /\bjson\b/
                },
                responseFields: {
                    xml: "responseXML",
                    text: "responseText",
                    json: "responseJSON"
                },
                converters: {
                    "* text": String,
                    "text html": !0,
                    "text json": JSON.parse,
                    "text xml": j.parseXML
                },
                flatOptions: {
                    url: !0,
                    context: !0
                }
            },
            ajaxSetup: function(e, t) {
                return t ? Xt(Xt(e, j.ajaxSettings), t) : Xt(j.ajaxSettings, e)
            },
            ajaxPrefilter: Qt($t),
            ajaxTransport: Qt(Wt),
            ajax: function(e, t) {
                "object" == typeof e && (t = e,
                    e = void 0);
                var s, l, c, n, f, p, d, r, o, h = j.ajaxSetup({}, t = t || {}), g = h.context || h, v = h.context && (g.nodeType || g.jquery) ? j(g) : j.event, y = j.Deferred(), m = j.Callbacks("once memory"), b = h.statusCode || {}, i = {}, a = {}, u = "canceled", x = {
                    readyState: 0,
                    getResponseHeader: function(e) {
                        var t;
                        if (p) {
                            if (!n)
                                for (n = {}; t = Pt.exec(c); )
                                    n[t[1].toLowerCase() + " "] = (n[t[1].toLowerCase() + " "] || []).concat(t[2]);
                            t = n[e.toLowerCase() + " "]
                        }
                        return null == t ? null : t.join(", ")
                    },
                    getAllResponseHeaders: function() {
                        return p ? c : null
                    },
                    setRequestHeader: function(e, t) {
                        return null == p && (e = a[e.toLowerCase()] = a[e.toLowerCase()] || e,
                            i[e] = t),
                            this
                    },
                    overrideMimeType: function(e) {
                        return null == p && (h.mimeType = e),
                            this
                    },
                    statusCode: function(e) {
                        if (e)
                            if (p)
                                x.always(e[x.status]);
                            else
                                for (var t in e)
                                    b[t] = [b[t], e[t]];
                        return this
                    },
                    abort: function(e) {
                        e = e || u;
                        return s && s.abort(e),
                            w(0, e),
                            this
                    }
                };
                if (y.promise(x),
                    h.url = ((e || h.url || _t.href) + "").replace(Bt, _t.protocol + "//"),
                    h.type = t.method || t.type || h.method || h.type,
                    h.dataTypes = (h.dataType || "*").toLowerCase().match(M) || [""],
                null == h.crossDomain) {
                    o = T.createElement("a");
                    try {
                        o.href = h.url,
                            o.href = o.href,
                            h.crossDomain = zt.protocol + "//" + zt.host != o.protocol + "//" + o.host
                    } catch (e) {
                        h.crossDomain = !0
                    }
                }
                if (h.data && h.processData && "string" != typeof h.data && (h.data = j.param(h.data, h.traditional)),
                    Ut($t, h, t, x),
                    p)
                    return x;
                for (r in (d = j.event && h.global) && 0 == j.active++ && j.event.trigger("ajaxStart"),
                    h.type = h.type.toUpperCase(),
                    h.hasContent = !Rt.test(h.type),
                    l = h.url.replace(Mt, ""),
                    h.hasContent ? h.data && h.processData && 0 === (h.contentType || "").indexOf("application/x-www-form-urlencoded") && (h.data = h.data.replace(It, "+")) : (o = h.url.slice(l.length),
                    h.data && (h.processData || "string" == typeof h.data) && (l += (At.test(l) ? "&" : "?") + h.data,
                        delete h.data),
                    !1 === h.cache && (l = l.replace(Ht, "$1"),
                        o = (At.test(l) ? "&" : "?") + "_=" + Nt++ + o),
                        h.url = l + o),
                h.ifModified && (j.lastModified[l] && x.setRequestHeader("If-Modified-Since", j.lastModified[l]),
                j.etag[l] && x.setRequestHeader("If-None-Match", j.etag[l])),
                (h.data && h.hasContent && !1 !== h.contentType || t.contentType) && x.setRequestHeader("Content-Type", h.contentType),
                    x.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + Ft + "; q=0.01" : "") : h.accepts["*"]),
                    h.headers)
                    x.setRequestHeader(r, h.headers[r]);
                if (h.beforeSend && (!1 === h.beforeSend.call(g, x, h) || p))
                    return x.abort();
                if (u = "abort",
                    m.add(h.complete),
                    x.done(h.success),
                    x.fail(h.error),
                    s = Ut(Wt, h, t, x)) {
                    if (x.readyState = 1,
                    d && v.trigger("ajaxSend", [x, h]),
                        p)
                        return x;
                    h.async && 0 < h.timeout && (f = C.setTimeout(function() {
                        x.abort("timeout")
                    }, h.timeout));
                    try {
                        p = !1,
                            s.send(i, w)
                    } catch (e) {
                        if (p)
                            throw e;
                        w(-1, e)
                    }
                } else
                    w(-1, "No Transport");
                function w(e, t, n, r) {
                    var o, i, a, u = t;
                    p || (p = !0,
                    f && C.clearTimeout(f),
                        s = void 0,
                        c = r || "",
                        x.readyState = 0 < e ? 4 : 0,
                        r = 200 <= e && e < 300 || 304 === e,
                    n && (a = function(e, t, n) {
                        for (var r, o, i, a, u = e.contents, s = e.dataTypes; "*" === s[0]; )
                            s.shift(),
                            void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
                        if (r)
                            for (o in u)
                                if (u[o] && u[o].test(r)) {
                                    s.unshift(o);
                                    break
                                }
                        if (s[0]in n)
                            i = s[0];
                        else {
                            for (o in n) {
                                if (!s[0] || e.converters[o + " " + s[0]]) {
                                    i = o;
                                    break
                                }
                                a = a || o
                            }
                            i = i || a
                        }
                        if (i)
                            return i !== s[0] && s.unshift(i),
                                n[i]
                    }(h, x, n)),
                        a = function(e, t, n, r) {
                            var o, i, a, u, s, l = {}, c = e.dataTypes.slice();
                            if (c[1])
                                for (a in e.converters)
                                    l[a.toLowerCase()] = e.converters[a];
                            for (i = c.shift(); i; )
                                if (e.responseFields[i] && (n[e.responseFields[i]] = t),
                                !s && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
                                    s = i,
                                    i = c.shift())
                                    if ("*" === i)
                                        i = s;
                                    else if ("*" !== s && s !== i) {
                                        if (!(a = l[s + " " + i] || l["* " + i]))
                                            for (o in l)
                                                if (u = o.split(" "),
                                                u[1] === i && (a = l[s + " " + u[0]] || l["* " + u[0]])) {
                                                    !0 === a ? a = l[o] : !0 !== l[o] && (i = u[0],
                                                        c.unshift(u[1]));
                                                    break
                                                }
                                        if (!0 !== a)
                                            if (a && e.throws)
                                                t = a(t);
                                            else
                                                try {
                                                    t = a(t)
                                                } catch (e) {
                                                    return {
                                                        state: "parsererror",
                                                        error: a ? e : "No conversion from " + s + " to " + i
                                                    }
                                                }
                                    }
                            return {
                                state: "success",
                                data: t
                            }
                        }(h, a, x, r),
                        r ? (h.ifModified && ((n = x.getResponseHeader("Last-Modified")) && (j.lastModified[l] = n),
                        (n = x.getResponseHeader("etag")) && (j.etag[l] = n)),
                            204 === e || "HEAD" === h.type ? u = "nocontent" : 304 === e ? u = "notmodified" : (u = a.state,
                                o = a.data,
                                r = !(i = a.error))) : (i = u,
                        !e && u || (u = "error",
                        e < 0 && (e = 0))),
                        x.status = e,
                        x.statusText = (t || u) + "",
                        r ? y.resolveWith(g, [o, u, x]) : y.rejectWith(g, [x, u, i]),
                        x.statusCode(b),
                        b = void 0,
                    d && v.trigger(r ? "ajaxSuccess" : "ajaxError", [x, h, r ? o : i]),
                        m.fireWith(g, [x, u]),
                    d && (v.trigger("ajaxComplete", [x, h]),
                    --j.active || j.event.trigger("ajaxStop")))
                }
                return x
            },
            getJSON: function(e, t, n) {
                return j.get(e, t, n, "json")
            },
            getScript: function(e, t) {
                return j.get(e, void 0, t, "script")
            }
        }),
        j.each(["get", "post"], function(e, o) {
            j[o] = function(e, t, n, r) {
                return b(t) && (r = r || n,
                    n = t,
                    t = void 0),
                    j.ajax(j.extend({
                        url: e,
                        type: o,
                        dataType: r,
                        data: t,
                        success: n
                    }, j.isPlainObject(e) && e))
            }
        }),
        j._evalUrl = function(e, t) {
            return j.ajax({
                url: e,
                type: "GET",
                dataType: "script",
                cache: !0,
                async: !1,
                global: !1,
                converters: {
                    "text script": function() {}
                },
                dataFilter: function(e) {
                    j.globalEval(e, t)
                }
            })
        }
        ,
        j.fn.extend({
            wrapAll: function(e) {
                return this[0] && (b(e) && (e = e.call(this[0])),
                    e = j(e, this[0].ownerDocument).eq(0).clone(!0),
                this[0].parentNode && e.insertBefore(this[0]),
                    e.map(function() {
                        for (var e = this; e.firstElementChild; )
                            e = e.firstElementChild;
                        return e
                    }).append(this)),
                    this
            },
            wrapInner: function(n) {
                return b(n) ? this.each(function(e) {
                    j(this).wrapInner(n.call(this, e))
                }) : this.each(function() {
                    var e = j(this)
                        , t = e.contents();
                    t.length ? t.wrapAll(n) : e.append(n)
                })
            },
            wrap: function(t) {
                var n = b(t);
                return this.each(function(e) {
                    j(this).wrapAll(n ? t.call(this, e) : t)
                })
            },
            unwrap: function(e) {
                return this.parent(e).not("body").each(function() {
                    j(this).replaceWith(this.childNodes)
                }),
                    this
            }
        }),
        j.expr.pseudos.hidden = function(e) {
            return !j.expr.pseudos.visible(e)
        }
        ,
        j.expr.pseudos.visible = function(e) {
            return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
        }
        ,
        j.ajaxSettings.xhr = function() {
            try {
                return new C.XMLHttpRequest
            } catch (e) {}
        }
    ;
    var Vt = {
        0: 200,
        1223: 204
    }
        , Gt = j.ajaxSettings.xhr();
    m.cors = !!Gt && "withCredentials"in Gt,
        m.ajax = Gt = !!Gt,
        j.ajaxTransport(function(o) {
            var i, a;
            if (m.cors || Gt && !o.crossDomain)
                return {
                    send: function(e, t) {
                        var n, r = o.xhr();
                        if (r.open(o.type, o.url, o.async, o.username, o.password),
                            o.xhrFields)
                            for (n in o.xhrFields)
                                r[n] = o.xhrFields[n];
                        for (n in o.mimeType && r.overrideMimeType && r.overrideMimeType(o.mimeType),
                        o.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest"),
                            e)
                            r.setRequestHeader(n, e[n]);
                        i = function(e) {
                            return function() {
                                i && (i = a = r.onload = r.onerror = r.onabort = r.ontimeout = r.onreadystatechange = null,
                                    "abort" === e ? r.abort() : "error" === e ? "number" != typeof r.status ? t(0, "error") : t(r.status, r.statusText) : t(Vt[r.status] || r.status, r.statusText, "text" !== (r.responseType || "text") || "string" != typeof r.responseText ? {
                                        binary: r.response
                                    } : {
                                        text: r.responseText
                                    }, r.getAllResponseHeaders()))
                            }
                        }
                            ,
                            r.onload = i(),
                            a = r.onerror = r.ontimeout = i("error"),
                            void 0 !== r.onabort ? r.onabort = a : r.onreadystatechange = function() {
                                4 === r.readyState && C.setTimeout(function() {
                                    i && a()
                                })
                            }
                            ,
                            i = i("abort");
                        try {
                            r.send(o.hasContent && o.data || null)
                        } catch (e) {
                            if (i)
                                throw e
                        }
                    },
                    abort: function() {
                        i && i()
                    }
                }
        }),
        j.ajaxPrefilter(function(e) {
            e.crossDomain && (e.contents.script = !1)
        }),
        j.ajaxSetup({
            accepts: {
                script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
            },
            contents: {
                script: /\b(?:java|ecma)script\b/
            },
            converters: {
                "text script": function(e) {
                    return j.globalEval(e),
                        e
                }
            }
        }),
        j.ajaxPrefilter("script", function(e) {
            void 0 === e.cache && (e.cache = !1),
            e.crossDomain && (e.type = "GET")
        }),
        j.ajaxTransport("script", function(n) {
            var r, o;
            if (n.crossDomain || n.scriptAttrs)
                return {
                    send: function(e, t) {
                        r = j("<script>").attr(n.scriptAttrs || {}).prop({
                            charset: n.scriptCharset,
                            src: n.url
                        }).on("load error", o = function(e) {
                                r.remove(),
                                    o = null,
                                e && t("error" === e.type ? 404 : 200, e.type)
                            }
                        ),
                            T.head.appendChild(r[0])
                    },
                    abort: function() {
                        o && o()
                    }
                }
        });
    var Yt = []
        , Kt = /(=)\?(?=&|$)|\?\?/;
    j.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = Yt.pop() || j.expando + "_" + Nt++;
            return this[e] = !0,
                e
        }
    }),
        j.ajaxPrefilter("json jsonp", function(e, t, n) {
            var r, o, i, a = !1 !== e.jsonp && (Kt.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Kt.test(e.data) && "data");
            if (a || "jsonp" === e.dataTypes[0])
                return r = e.jsonpCallback = b(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback,
                    a ? e[a] = e[a].replace(Kt, "$1" + r) : !1 !== e.jsonp && (e.url += (At.test(e.url) ? "&" : "?") + e.jsonp + "=" + r),
                    e.converters["script json"] = function() {
                        return i || j.error(r + " was not called"),
                            i[0]
                    }
                    ,
                    e.dataTypes[0] = "json",
                    o = C[r],
                    C[r] = function() {
                        i = arguments
                    }
                    ,
                    n.always(function() {
                        void 0 === o ? j(C).removeProp(r) : C[r] = o,
                        e[r] && (e.jsonpCallback = t.jsonpCallback,
                            Yt.push(r)),
                        i && b(o) && o(i[0]),
                            i = o = void 0
                    }),
                    "script"
        }),
        m.createHTMLDocument = ((t = T.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>",
        2 === t.childNodes.length),
        j.parseHTML = function(e, t, n) {
            return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t,
                t = !1),
            t || (m.createHTMLDocument ? ((r = (t = T.implementation.createHTMLDocument("")).createElement("base")).href = T.location.href,
                t.head.appendChild(r)) : t = T),
                r = !n && [],
                (n = N.exec(e)) ? [t.createElement(n[1])] : (n = me([e], t, r),
                r && r.length && j(r).remove(),
                    j.merge([], n.childNodes)));
            var r
        }
        ,
        j.fn.load = function(e, t, n) {
            var r, o, i, a = this, u = e.indexOf(" ");
            return -1 < u && (r = Ct(e.slice(u)),
                e = e.slice(0, u)),
                b(t) ? (n = t,
                    t = void 0) : t && "object" == typeof t && (o = "POST"),
            0 < a.length && j.ajax({
                url: e,
                type: o || "GET",
                dataType: "html",
                data: t
            }).done(function(e) {
                i = arguments,
                    a.html(r ? j("<div>").append(j.parseHTML(e)).find(r) : e)
            }).always(n && function(e, t) {
                a.each(function() {
                    n.apply(this, i || [e.responseText, t, e])
                })
            }
            ),
                this
        }
        ,
        j.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
            j.fn[t] = function(e) {
                return this.on(t, e)
            }
        }),
        j.expr.pseudos.animated = function(t) {
            return j.grep(j.timers, function(e) {
                return t === e.elem
            }).length
        }
        ,
        j.offset = {
            setOffset: function(e, t, n) {
                var r, o, i, a, u = j.css(e, "position"), s = j(e), l = {};
                "static" === u && (e.style.position = "relative"),
                    i = s.offset(),
                    r = j.css(e, "top"),
                    a = j.css(e, "left"),
                    a = ("absolute" === u || "fixed" === u) && -1 < (r + a).indexOf("auto") ? (o = (u = s.position()).top,
                        u.left) : (o = parseFloat(r) || 0,
                    parseFloat(a) || 0),
                null != (t = b(t) ? t.call(e, n, j.extend({}, i)) : t).top && (l.top = t.top - i.top + o),
                null != t.left && (l.left = t.left - i.left + a),
                    "using"in t ? t.using.call(e, l) : s.css(l)
            }
        },
        j.fn.extend({
            offset: function(t) {
                if (arguments.length)
                    return void 0 === t ? this : this.each(function(e) {
                        j.offset.setOffset(this, t, e)
                    });
                var e, n = this[0];
                return n ? n.getClientRects().length ? (e = n.getBoundingClientRect(),
                    n = n.ownerDocument.defaultView,
                    {
                        top: e.top + n.pageYOffset,
                        left: e.left + n.pageXOffset
                    }) : {
                    top: 0,
                    left: 0
                } : void 0
            },
            position: function() {
                if (this[0]) {
                    var e, t, n, r = this[0], o = {
                        top: 0,
                        left: 0
                    };
                    if ("fixed" === j.css(r, "position"))
                        t = r.getBoundingClientRect();
                    else {
                        for (t = this.offset(),
                                 n = r.ownerDocument,
                                 e = r.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === j.css(e, "position"); )
                            e = e.parentNode;
                        e && e !== r && 1 === e.nodeType && ((o = j(e).offset()).top += j.css(e, "borderTopWidth", !0),
                            o.left += j.css(e, "borderLeftWidth", !0))
                    }
                    return {
                        top: t.top - o.top - j.css(r, "marginTop", !0),
                        left: t.left - o.left - j.css(r, "marginLeft", !0)
                    }
                }
            },
            offsetParent: function() {
                return this.map(function() {
                    for (var e = this.offsetParent; e && "static" === j.css(e, "position"); )
                        e = e.offsetParent;
                    return e || re
                })
            }
        }),
        j.each({
            scrollLeft: "pageXOffset",
            scrollTop: "pageYOffset"
        }, function(t, o) {
            var i = "pageYOffset" === o;
            j.fn[t] = function(e) {
                return F(this, function(e, t, n) {
                    var r;
                    return g(e) ? r = e : 9 === e.nodeType && (r = e.defaultView),
                        void 0 === n ? r ? r[o] : e[t] : void (r ? r.scrollTo(i ? r.pageXOffset : n, i ? n : r.pageYOffset) : e[t] = n)
                }, t, e, arguments.length)
            }
        }),
        j.each(["top", "left"], function(e, n) {
            j.cssHooks[n] = Ye(m.pixelPosition, function(e, t) {
                if (t)
                    return t = Ge(e, n),
                        ze.test(t) ? j(e).position()[n] + "px" : t
            })
        }),
        j.each({
            Height: "height",
            Width: "width"
        }, function(a, u) {
            j.each({
                padding: "inner" + a,
                content: u,
                "": "outer" + a
            }, function(r, i) {
                j.fn[i] = function(e, t) {
                    var n = arguments.length && (r || "boolean" != typeof e)
                        , o = r || (!0 === e || !0 === t ? "margin" : "border");
                    return F(this, function(e, t, n) {
                        var r;
                        return g(e) ? 0 === i.indexOf("outer") ? e["inner" + a] : e.document.documentElement["client" + a] : 9 === e.nodeType ? (r = e.documentElement,
                            Math.max(e.body["scroll" + a], r["scroll" + a], e.body["offset" + a], r["offset" + a], r["client" + a])) : void 0 === n ? j.css(e, t, o) : j.style(e, t, n, o)
                    }, u, n ? e : void 0, n)
                }
            })
        }),
        j.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, n) {
            j.fn[n] = function(e, t) {
                return 0 < arguments.length ? this.on(n, null, e, t) : this.trigger(n)
            }
        }),
        j.fn.extend({
            hover: function(e, t) {
                return this.mouseenter(e).mouseleave(t || e)
            }
        }),
        j.fn.extend({
            bind: function(e, t, n) {
                return this.on(e, null, t, n)
            },
            unbind: function(e, t) {
                return this.off(e, null, t)
            },
            delegate: function(e, t, n, r) {
                return this.on(t, e, n, r)
            },
            undelegate: function(e, t, n) {
                return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
            }
        }),
        j.proxy = function(e, t) {
            var n, r;
            if ("string" == typeof t && (r = e[t],
                t = e,
                e = r),
                b(e))
                return n = u.call(arguments, 2),
                    (r = function() {
                            return e.apply(t || this, n.concat(u.call(arguments)))
                        }
                    ).guid = e.guid = e.guid || j.guid++,
                    r
        }
        ,
        j.holdReady = function(e) {
            e ? j.readyWait++ : j.ready(!0)
        }
        ,
        j.isArray = Array.isArray,
        j.parseJSON = JSON.parse,
        j.nodeName = _,
        j.isFunction = b,
        j.isWindow = g,
        j.camelCase = X,
        j.type = h,
        j.now = Date.now,
        j.isNumeric = function(e) {
            var t = j.type(e);
            return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
        }
        ,
    "function" == typeof define && define.amd && define("jquery", [], function() {
        return j
    });
    var Jt = C.jQuery
        , Zt = C.$;
    return j.noConflict = function(e) {
        return C.$ === j && (C.$ = Zt),
        e && C.jQuery === j && (C.jQuery = Jt),
            j
    }
        ,
    e || (C.jQuery = C.$ = j),
        j
}),
    jQuery.fn.andSelf = jQuery.fn.addBack;
var oldLoad = jQuery.fn.load;
["load", "unload", "error"].forEach(function(t) {
    jQuery.fn[t] = function() {
        var e = Array.prototype.slice.call(arguments, 0);
        return "load" === t && "string" == typeof e[0] ? oldLoad.apply(this, e) : (e.splice(0, 0, t),
            arguments.length ? this.on.apply(this, e) : (this.triggerHandler.apply(this, e),
                this))
    }
}),
    jQuery.fn.size = function() {
        return this.length
    }
    ,
    jQuery.easing.jswing = jQuery.easing.swing,
    jQuery.extend(jQuery.easing, {
        def: "easeOutQuad",
        swing: function(e, t, n, r, o) {
            return jQuery.easing[jQuery.easing.def](e, t, n, r, o)
        },
        easeInQuad: function(e, t, n, r, o) {
            return r * (t /= o) * t + n
        },
        easeOutQuad: function(e, t, n, r, o) {
            return -r * (t /= o) * (t - 2) + n
        },
        easeInOutQuad: function(e, t, n, r, o) {
            return (t /= o / 2) < 1 ? r / 2 * t * t + n : -r / 2 * (--t * (t - 2) - 1) + n
        },
        easeInCubic: function(e, t, n, r, o) {
            return r * (t /= o) * t * t + n
        },
        easeOutCubic: function(e, t, n, r, o) {
            return r * ((t = t / o - 1) * t * t + 1) + n
        },
        easeInOutCubic: function(e, t, n, r, o) {
            return (t /= o / 2) < 1 ? r / 2 * t * t * t + n : r / 2 * ((t -= 2) * t * t + 2) + n
        },
        easeInQuart: function(e, t, n, r, o) {
            return r * (t /= o) * t * t * t + n
        },
        easeOutQuart: function(e, t, n, r, o) {
            return -r * ((t = t / o - 1) * t * t * t - 1) + n
        },
        easeInOutQuart: function(e, t, n, r, o) {
            return (t /= o / 2) < 1 ? r / 2 * t * t * t * t + n : -r / 2 * ((t -= 2) * t * t * t - 2) + n
        },
        easeInQuint: function(e, t, n, r, o) {
            return r * (t /= o) * t * t * t * t + n
        },
        easeOutQuint: function(e, t, n, r, o) {
            return r * ((t = t / o - 1) * t * t * t * t + 1) + n
        },
        easeInOutQuint: function(e, t, n, r, o) {
            return (t /= o / 2) < 1 ? r / 2 * t * t * t * t * t + n : r / 2 * ((t -= 2) * t * t * t * t + 2) + n
        },
        easeInSine: function(e, t, n, r, o) {
            return -r * Math.cos(t / o * (Math.PI / 2)) + r + n
        },
        easeOutSine: function(e, t, n, r, o) {
            return r * Math.sin(t / o * (Math.PI / 2)) + n
        },
        easeInOutSine: function(e, t, n, r, o) {
            return -r / 2 * (Math.cos(Math.PI * t / o) - 1) + n
        },
        easeInExpo: function(e, t, n, r, o) {
            return 0 == t ? n : r * Math.pow(2, 10 * (t / o - 1)) + n
        },
        easeOutExpo: function(e, t, n, r, o) {
            return t == o ? n + r : r * (1 - Math.pow(2, -10 * t / o)) + n
        },
        easeInOutExpo: function(e, t, n, r, o) {
            return 0 == t ? n : t == o ? n + r : (t /= o / 2) < 1 ? r / 2 * Math.pow(2, 10 * (t - 1)) + n : r / 2 * (2 - Math.pow(2, -10 * --t)) + n
        },
        easeInCirc: function(e, t, n, r, o) {
            return -r * (Math.sqrt(1 - (t /= o) * t) - 1) + n
        },
        easeOutCirc: function(e, t, n, r, o) {
            return r * Math.sqrt(1 - (t = t / o - 1) * t) + n
        },
        easeInOutCirc: function(e, t, n, r, o) {
            return (t /= o / 2) < 1 ? -r / 2 * (Math.sqrt(1 - t * t) - 1) + n : r / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + n
        },
        easeInElastic: function(e, t, n, r, o) {
            var i = 1.70158
                , a = 0
                , u = r;
            return 0 == t ? n : 1 == (t /= o) ? n + r : (a = a || .3 * o,
                i = u < Math.abs(r) ? (u = r,
                a / 4) : a / (2 * Math.PI) * Math.asin(r / u),
            -(u * Math.pow(2, 10 * --t) * Math.sin((t * o - i) * (2 * Math.PI) / a)) + n)
        },
        easeOutElastic: function(e, t, n, r, o) {
            var i = 1.70158
                , a = 0
                , u = r;
            return 0 == t ? n : 1 == (t /= o) ? n + r : (a = a || .3 * o,
                i = u < Math.abs(r) ? (u = r,
                a / 4) : a / (2 * Math.PI) * Math.asin(r / u),
            u * Math.pow(2, -10 * t) * Math.sin((t * o - i) * (2 * Math.PI) / a) + r + n)
        },
        easeInOutElastic: function(e, t, n, r, o) {
            var i = 1.70158
                , a = 0
                , u = r;
            return 0 == t ? n : 2 == (t /= o / 2) ? n + r : (a = a || o * (.3 * 1.5),
                i = u < Math.abs(r) ? (u = r,
                a / 4) : a / (2 * Math.PI) * Math.asin(r / u),
                t < 1 ? u * Math.pow(2, 10 * --t) * Math.sin((t * o - i) * (2 * Math.PI) / a) * -.5 + n : u * Math.pow(2, -10 * --t) * Math.sin((t * o - i) * (2 * Math.PI) / a) * .5 + r + n)
        },
        easeInBack: function(e, t, n, r, o, i) {
            return r * (t /= o) * t * (((i = null == i ? 1.70158 : i) + 1) * t - i) + n
        },
        easeOutBack: function(e, t, n, r, o, i) {
            return r * ((t = t / o - 1) * t * (((i = null == i ? 1.70158 : i) + 1) * t + i) + 1) + n
        },
        easeInOutBack: function(e, t, n, r, o, i) {
            return null == i && (i = 1.70158),
                (t /= o / 2) < 1 ? r / 2 * (t * t * ((1 + (i *= 1.525)) * t - i)) + n : r / 2 * ((t -= 2) * t * ((1 + (i *= 1.525)) * t + i) + 2) + n
        },
        easeInBounce: function(e, t, n, r, o) {
            return r - jQuery.easing.easeOutBounce(e, o - t, 0, r, o) + n
        },
        easeOutBounce: function(e, t, n, r, o) {
            return (t /= o) < 1 / 2.75 ? r * (7.5625 * t * t) + n : t < 2 / 2.75 ? r * (7.5625 * (t -= 1.5 / 2.75) * t + .75) + n : t < 2.5 / 2.75 ? r * (7.5625 * (t -= 2.25 / 2.75) * t + .9375) + n : r * (7.5625 * (t -= 2.625 / 2.75) * t + .984375) + n
        },
        easeInOutBounce: function(e, t, n, r, o) {
            return t < o / 2 ? .5 * jQuery.easing.easeInBounce(e, 2 * t, 0, r, o) + n : .5 * jQuery.easing.easeOutBounce(e, 2 * t - o, 0, r, o) + .5 * r + n
        }
    }),
    function() {
        var tt, t = [], n = [], nt = 0, rt = +new Date + "", ot = 75, r = 40, it = " \t\v\f \ufeff\n\r\u2028\u2029 ᠎             　", at = /\b__p \+= '';/g, ut = /\b(__p \+=) '' \+/g, st = /(__e\(.*?\)|\b__t\)) \+\n'';/g, lt = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, ct = /\w*$/, ft = /^\s*function[ \n\r\t]+\w/, pt = /<%=([\s\S]+?)%>/g, dt = RegExp("^[" + it + "]*0+(?=.$)"), ht = /($^)/, gt = /\bthis\b/, vt = /['\n\r\t\u2028\u2029\\]/g, yt = ["Array", "Boolean", "Date", "Function", "Math", "Number", "Object", "RegExp", "String", "_", "attachEvent", "clearTimeout", "isFinite", "isNaN", "parseInt", "setTimeout"], mt = 0, bt = "[object Arguments]", xt = "[object Array]", wt = "[object Boolean]", Ct = "[object Date]", Tt = "[object Function]", jt = "[object Number]", kt = "[object Object]", Et = "[object RegExp]", St = "[object String]", _t = {};
        _t[Tt] = !1;
        var Nt = {
            leading: !(_t[bt] = _t[xt] = _t[wt] = _t[Ct] = _t[jt] = _t[kt] = _t[Et] = _t[St] = !0),
            maxWait: 0,
            trailing: !1
        }
            , At = {
            configurable: !1,
            enumerable: !1,
            value: null,
            writable: !1
        }
            , Dt = {
            boolean: !1,
            function: !0,
            object: !0,
            number: !1,
            string: !1,
            undefined: !1
        }
            , o = {
            "\\": "\\",
            "'": "'",
            "\n": "n",
            "\r": "r",
            "\t": "t",
            "\u2028": "u2028",
            "\u2029": "u2029"
        }
            , Ot = Dt[typeof window] && window || this
            , e = Dt[typeof exports] && exports && !exports.nodeType && exports
            , i = Dt[typeof module] && module && !module.nodeType && module
            , a = i && i.exports === e && e
            , u = Dt[typeof global] && global;
        function qt(e, t, n) {
            for (var r = (n || 0) - 1, o = e ? e.length : 0; ++r < o; )
                if (e[r] === t)
                    return r;
            return -1
        }
        function Lt(e, t) {
            var n = typeof t;
            return e = e.cache,
                "boolean" == n || null == t ? e[t] ? 0 : -1 : (e = (e = e[n = "number" != n && "string" != n ? "object" : n]) && e["number" == n ? t : rt + t],
                    "object" == n ? e && -1 < qt(e, t) ? 0 : -1 : e ? 0 : -1)
        }
        function s(e) {
            var t, n = this.cache, r = typeof e;
            "boolean" == r || null == e ? n[e] = !0 : (t = "number" == (r = "number" != r && "string" != r ? "object" : r) ? e : rt + e,
                n = n[r] || (n[r] = {}),
                "object" == r ? (n[t] || (n[t] = [])).push(e) : n[t] = !0)
        }
        function It(e) {
            return e.charCodeAt(0)
        }
        function Mt(e, t) {
            for (var n = e.criteria, r = t.criteria, o = -1, i = n.length; ++o < i; ) {
                var a = n[o]
                    , u = r[o];
                if (a !== u) {
                    if (u < a || void 0 === a)
                        return 1;
                    if (a < u || void 0 === u)
                        return -1
                }
            }
            return e.index - t.index
        }
        function Ht(e) {
            var t = -1
                , n = e.length
                , r = e[0]
                , o = e[n / 2 | 0]
                , i = e[n - 1];
            if (r && "object" == typeof r && o && "object" == typeof o && i && "object" == typeof i)
                return !1;
            i = Bt();
            i.false = i.null = i.true = i[void 0] = !1;
            var a = Bt();
            for (a.array = e,
                     a.cache = i,
                     a.push = s; ++t < n; )
                a.push(e[t]);
            return a
        }
        function Pt(e) {
            return "\\" + o[e]
        }
        function Rt() {
            return t.pop() || []
        }
        function Bt() {
            return n.pop() || {
                array: null,
                cache: null,
                criteria: null,
                false: !1,
                index: 0,
                null: !1,
                number: null,
                object: null,
                push: null,
                string: null,
                true: !1,
                undefined: !1,
                value: null
            }
        }
        function $t(e) {
            e.length = 0,
            t.length < r && t.push(e)
        }
        function Wt(e) {
            var t = e.cache;
            t && Wt(t),
                e.array = e.cache = e.criteria = e.object = e.number = e.string = e.value = null,
            n.length < r && n.push(e)
        }
        function Ft(e, t, n) {
            for (var r = -1, o = (n = void 0 === n ? e ? e.length : 0 : n) - (t = t || 0) || 0, i = Array(o < 0 ? 0 : o); ++r < o; )
                i[r] = e[t + r];
            return i
        }
        !u || u.global !== u && u.window !== u || (Ot = u);
        var zt = function e(n) {
            var s = (n = n ? zt.defaults(Ot.Object(), n, zt.pick(Ot, yt)) : Ot).Array
                , t = n.Boolean
                , r = n.Date
                , f = n.Function
                , o = n.Math
                , i = n.Number
                , a = n.Object
                , p = n.RegExp
                , g = n.String
                , m = n.TypeError
                , u = []
                , l = a.prototype
                , c = n._
                , v = l.toString
                , d = p("^" + g(v).replace(/[.*+?^${}()|[\]\\]/g, "\\$&").replace(/toString| for [^\]]+/g, ".*?") + "$")
                , h = o.ceil
                , b = n.clearTimeout
                , y = o.floor
                , x = f.prototype.toString
                , w = ne(w = a.getPrototypeOf) && w
                , C = l.hasOwnProperty
                , T = u.push
                , j = n.setTimeout
                , k = u.splice
                , E = u.unshift
                , S = function() {
                try {
                    var e = {}
                        , t = ne(t = a.defineProperty) && t
                        , n = t(e, e, e) && t
                } catch (e) {}
                return n
            }()
                , _ = ne(_ = a.create) && _
                , N = ne(N = s.isArray) && N
                , A = n.isFinite
                , D = n.isNaN
                , O = ne(O = a.keys) && O
                , q = o.max
                , L = o.min
                , I = n.parseInt
                , M = o.random
                , H = {};
            function P(e) {
                return e && "object" == typeof e && !ue(e) && C.call(e, "__wrapped__") ? e : new R(e)
            }
            function R(e, t) {
                this.__chain__ = !!t,
                    this.__wrapped__ = e
            }
            H[xt] = s,
                H[wt] = t,
                H[Ct] = r,
                H[Tt] = f,
                H[kt] = a,
                H[jt] = i,
                H[Et] = p,
                H[St] = g,
                R.prototype = P.prototype;
            var B = P.support = {};
            function $(e) {
                var r = e[0]
                    , o = e[2]
                    , i = e[4];
                function a() {
                    var e;
                    if (o && (e = Ft(o),
                        T.apply(e, arguments)),
                    this instanceof a) {
                        var t = F(r.prototype)
                            , n = r.apply(t, e || arguments);
                        return we(n) ? n : t
                    }
                    return r.apply(i, e || arguments)
                }
                return re(a, e),
                    a
            }
            function W(e, n, r, o, i) {
                if (r) {
                    var a = r(e);
                    if (void 0 !== a)
                        return a
                }
                if (!we(e))
                    return e;
                var t = v.call(e);
                if (!_t[t])
                    return e;
                var u = H[t];
                switch (t) {
                    case wt:
                    case Ct:
                        return new u(+e);
                    case jt:
                    case St:
                        return new u(e);
                    case Et:
                        return (a = u(e.source, ct.exec(e))).lastIndex = e.lastIndex,
                            a
                }
                if (t = ue(e),
                    n) {
                    var s = !o;
                    o = o || Rt(),
                        i = i || Rt();
                    for (var l = o.length; l--; )
                        if (o[l] == e)
                            return i[l];
                    a = t ? u(e.length) : {}
                } else
                    a = t ? Ft(e) : de({}, e);
                return t && (C.call(e, "index") && (a.index = e.index),
                C.call(e, "input") && (a.input = e.input)),
                n && (o.push(e),
                    i.push(a),
                    (t ? Ae : ve)(e, function(e, t) {
                        a[t] = W(e, n, r, o, i)
                    }),
                s && ($t(o),
                    $t(i))),
                    a
            }
            function F(e, t) {
                return we(e) ? _(e) : {}
            }
            function z() {}
            function Q(o, i, e) {
                if ("function" != typeof o)
                    return Ve;
                if (void 0 === i || !("prototype"in o))
                    return o;
                var t, n = o.__bindData__;
                if (void 0 === n && ((n = (n = B.funcNames ? !o.name : n) || !B.funcDecomp) || (t = x.call(o),
                (n = B.funcNames ? n : !ft.test(t)) || (n = gt.test(t),
                    re(o, n)))),
                !1 === n || !0 !== n && 1 & n[1])
                    return o;
                switch (e) {
                    case 1:
                        return function(e) {
                            return o.call(i, e)
                        }
                            ;
                    case 2:
                        return function(e, t) {
                            return o.call(i, e, t)
                        }
                            ;
                    case 3:
                        return function(e, t, n) {
                            return o.call(i, e, t, n)
                        }
                            ;
                    case 4:
                        return function(e, t, n, r) {
                            return o.call(i, e, t, n, r)
                        }
                }
                return Ue(o, i)
            }
            function U(e) {
                var r = e[0]
                    , o = e[1]
                    , i = e[2]
                    , a = e[3]
                    , u = e[4]
                    , s = e[5]
                    , l = 1 & o
                    , c = 2 & o
                    , f = 4 & o
                    , p = 8 & o
                    , d = r;
                function h() {
                    var e, t = l ? u : this;
                    if (i && (e = Ft(i),
                        T.apply(e, arguments)),
                    (a || f) && (e = e || Ft(arguments),
                    a && T.apply(e, a),
                    f && e.length < s))
                        return o |= 16,
                            U([r, p ? o : -4 & o, e, null, u, s]);
                    if (e = e || arguments,
                    c && (r = t[d]),
                    this instanceof h) {
                        var t = F(r.prototype)
                            , n = r.apply(t, e);
                        return we(n) ? n : t
                    }
                    return r.apply(t, e)
                }
                return re(h, e),
                    h
            }
            function X(e, t) {
                var n, r = -1, o = te(), i = e ? e.length : 0, a = ot <= i && o === qt, u = [];
                for (a && ((n = Ht(t)) ? (o = Lt,
                    t = n) : a = !1); ++r < i; ) {
                    var s = e[r];
                    o(t, s) < 0 && u.push(s)
                }
                return a && Wt(t),
                    u
            }
            function V(e, t, n, r) {
                for (var o = (r || 0) - 1, i = e ? e.length : 0, a = []; ++o < i; ) {
                    var u = e[o];
                    if (u && "object" == typeof u && "number" == typeof u.length && (ue(u) || ae(u))) {
                        var s = -1
                            , l = (u = t ? u : V(u, t, n)).length
                            , c = a.length;
                        for (a.length += l; ++s < l; )
                            a[c++] = u[s]
                    } else
                        n || a.push(u)
                }
                return a
            }
            function G(r, e, o, i, a, u) {
                if (o) {
                    var s = o(r, e);
                    if (void 0 !== s)
                        return !!s
                }
                if (r === e)
                    return 0 !== r || 1 / r == 1 / e;
                if (!(r != r || r && Dt[typeof r] || e && Dt[typeof e]))
                    return !1;
                if (null == r || null == e)
                    return r === e;
                var t = v.call(r)
                    , n = v.call(e);
                if ((t = t == bt ? kt : t) != (n = n == bt ? kt : n))
                    return !1;
                switch (t) {
                    case wt:
                    case Ct:
                        return +r == +e;
                    case jt:
                        return r != +r ? e != +e : 0 == r ? 1 / r == 1 / e : r == +e;
                    case Et:
                    case St:
                        return r == g(e)
                }
                var l = t == xt;
                if (!l) {
                    var n = C.call(r, "__wrapped__")
                        , c = C.call(e, "__wrapped__");
                    if (n || c)
                        return G(n ? r.__wrapped__ : r, c ? e.__wrapped__ : e, o, i, a, u);
                    if (t != kt)
                        return !1;
                    if (t = r.constructor,
                        c = e.constructor,
                    t != c && !(xe(t) && t instanceof t && xe(c) && c instanceof c) && "constructor"in r && "constructor"in e)
                        return !1
                }
                c = !a,
                    a = a || Rt(),
                    u = u || Rt();
                for (var f = a.length; f--; )
                    if (a[f] == r)
                        return u[f] == e;
                var p = 0
                    , s = !0;
                if (a.push(r),
                    u.push(e),
                    l) {
                    if (f = r.length,
                        p = e.length,
                    (s = p == f) || i)
                        for (; p--; ) {
                            var d = f
                                , h = e[p];
                            if (i)
                                for (; d-- && !(s = G(r[d], h, o, i, a, u)); )
                                    ;
                            else if (!(s = G(r[p], h, o, i, a, u)))
                                break
                        }
                } else
                    ge(e, function(e, t, n) {
                        if (C.call(n, t))
                            return p++,
                                s = C.call(r, t) && G(r[t], e, o, i, a, u)
                    }),
                    s && !i && ge(r, function(e, t, n) {
                        if (C.call(n, t))
                            return s = -1 < --p
                    });
                return a.pop(),
                    u.pop(),
                c && ($t(a),
                    $t(u)),
                    s
            }
            function Y(e, t) {
                return e + y(M() * (t - e + 1))
            }
            function K(e, t, n) {
                var r = -1
                    , o = te()
                    , i = e ? e.length : 0
                    , a = []
                    , u = !t && ot <= i && o === qt
                    , s = n || u ? Rt() : a;
                for (u && (o = Lt,
                    s = Ht(s)); ++r < i; ) {
                    var l = e[r]
                        , c = n ? n(l, r, e) : l;
                    (t ? !r || s[s.length - 1] !== c : o(s, c) < 0) && ((n || u) && s.push(c),
                        a.push(l))
                }
                return u ? ($t(s.array),
                    Wt(s)) : n && $t(s),
                    a
            }
            function J(u) {
                return function(e, r, t) {
                    var o = {};
                    r = P.createCallback(r, t, 3);
                    var n = -1
                        , i = e ? e.length : 0;
                    if ("number" == typeof i)
                        for (; ++n < i; ) {
                            var a = e[n];
                            u(o, a, r(a, n, e), e)
                        }
                    else
                        ve(e, function(e, t, n) {
                            u(o, e, r(e, t, n), n)
                        });
                    return o
                }
            }
            function Z(e, t, n, r, o, i) {
                var a = 1 & t
                    , u = 4 & t
                    , s = 16 & t
                    , l = 32 & t;
                if (!(2 & t || xe(e)))
                    throw new m;
                s && !n.length && (t &= -17,
                    s = n = !1),
                l && !r.length && (t &= -33,
                    l = r = !1);
                var c = e && e.__bindData__;
                return c && !0 !== c ? ((c = Ft(c))[2] && (c[2] = Ft(c[2])),
                c[3] && (c[3] = Ft(c[3])),
                !a || 1 & c[1] || (c[4] = o),
                !a && 1 & c[1] && (t |= 8),
                !u || 4 & c[1] || (c[5] = i),
                s && T.apply(c[2] || (c[2] = []), n),
                l && E.apply(c[3] || (c[3] = []), r),
                    c[1] |= t,
                    Z.apply(null, c)) : (1 == t || 17 === t ? $ : U)([e, t, n, r, o, i])
            }
            function ee(e) {
                return le[e]
            }
            function te() {
                var e = (e = P.indexOf) === Be ? qt : e;
                return e
            }
            function ne(e) {
                return "function" == typeof e && d.test(e)
            }
            B.funcDecomp = !ne(n.WinRTError) && gt.test(e),
                B.funcNames = "string" == typeof f.name,
                P.templateSettings = {
                    escape: /<%-([\s\S]+?)%>/g,
                    evaluate: /<%([\s\S]+?)%>/g,
                    interpolate: pt,
                    variable: "",
                    imports: {
                        _: P
                    }
                },
            _ || (F = function(e) {
                    var t;
                    return we(e) && (z.prototype = e,
                        t = new z,
                        z.prototype = null),
                    t || n.Object()
                }
            );
            var re = S ? function(e, t) {
                    At.value = t,
                        S(e, "__bindData__", At)
                }
                : Ye;
            function oe(e) {
                var t, n;
                return !(!e || v.call(e) != kt || xe(t = e.constructor) && !(t instanceof t)) && (ge(e, function(e, t) {
                    n = t
                }),
                void 0 === n || C.call(e, n))
            }
            function ie(e) {
                return ce[e]
            }
            function ae(e) {
                return e && "object" == typeof e && "number" == typeof e.length && v.call(e) == bt || !1
            }
            var ue = N || function(e) {
                return e && "object" == typeof e && "number" == typeof e.length && v.call(e) == xt || !1
            }
                , se = O ? function(e) {
                    return we(e) ? O(e) : []
                }
                : function(e) {
                    var t, n = e, r = [];
                    if (!n)
                        return r;
                    if (!Dt[typeof e])
                        return r;
                    for (t in n)
                        C.call(n, t) && r.push(t);
                    return r
                }
                , le = {
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#39;"
            }
                , ce = be(le)
                , fe = p("(" + se(ce).join("|") + ")", "g")
                , pe = p("[" + se(le).join("") + "]", "g")
                , de = function(e, t, n) {
                var r, o = e, i = o;
                if (!o)
                    return i;
                var a, u = arguments, s = 0, l = "number" == typeof n ? 2 : u.length;
                for (3 < l && "function" == typeof u[l - 2] ? a = Q(u[--l - 1], u[l--], 2) : 2 < l && "function" == typeof u[l - 1] && (a = u[--l]); ++s < l; )
                    if ((o = u[s]) && Dt[typeof o])
                        for (var c = -1, f = Dt[typeof o] && se(o), p = f ? f.length : 0; ++c < p; )
                            i[r = f[c]] = a ? a(i[r], o[r]) : o[r];
                return i
            };
            function he(e, t, n) {
                var r, o = e, i = o;
                if (!o)
                    return i;
                for (var a = arguments, u = 0, s = "number" == typeof n ? 2 : a.length; ++u < s; )
                    if ((o = a[u]) && Dt[typeof o])
                        for (var l = -1, c = Dt[typeof o] && se(o), f = c ? c.length : 0; ++l < f; )
                            void 0 === i[r = c[l]] && (i[r] = o[r]);
                return i
            }
            var ge = function(e, t, n) {
                var r, o = e, i = o;
                if (!o)
                    return i;
                if (!Dt[typeof o])
                    return i;
                for (r in t = t && void 0 === n ? t : Q(t, n, 3),
                    o)
                    if (!1 === t(o[r], r, e))
                        return i;
                return i
            };
            var ve = function(e, t, n) {
                var r, o = e, i = o;
                if (!o)
                    return i;
                if (!Dt[typeof o])
                    return i;
                t = t && void 0 === n ? t : Q(t, n, 3);
                for (var a = -1, u = Dt[typeof o] && se(o), s = u ? u.length : 0; ++a < s; )
                    if (!1 === t(o[r = u[a]], r, e))
                        return i;
                return i
            };
            function ye(e, t, n) {
                var r = se(e)
                    , o = r.length;
                for (t = Q(t, n, 3); o--; ) {
                    var i = r[o];
                    if (!1 === t(e[i], i, e))
                        break
                }
                return e
            }
            function me(e) {
                var n = [];
                return ge(e, function(e, t) {
                    xe(e) && n.push(t)
                }),
                    n.sort()
            }
            function be(e) {
                for (var t = -1, n = se(e), r = n.length, o = {}; ++t < r; ) {
                    var i = n[t];
                    o[e[i]] = i
                }
                return o
            }
            function xe(e) {
                return "function" == typeof e
            }
            function we(e) {
                return !(!e || !Dt[typeof e])
            }
            function Ce(e) {
                return "number" == typeof e || e && "object" == typeof e && v.call(e) == jt || !1
            }
            var Te = w ? function(e) {
                    if (!e || v.call(e) != kt)
                        return !1;
                    var t = e.valueOf
                        , n = ne(t) && (n = w(t)) && w(n);
                    return n ? e == n || w(e) == n : oe(e)
                }
                : oe;
            function je(e) {
                return "string" == typeof e || e && "object" == typeof e && v.call(e) == St || !1
            }
            function ke(e) {
                for (var t = -1, n = se(e), r = n.length, o = s(r); ++t < r; )
                    o[t] = e[n[t]];
                return o
            }
            function Ee(e, t, n) {
                var r = -1
                    , o = te()
                    , i = e ? e.length : 0
                    , a = !1;
                return n = (n < 0 ? q(0, i + n) : n) || 0,
                    ue(e) ? a = -1 < o(e, t, n) : "number" == typeof i ? a = -1 < (je(e) ? e.indexOf(t, n) : o(e, t, n)) : ve(e, function(e) {
                        if (++r >= n)
                            return !(a = e === t)
                    }),
                    a
            }
            l = J(function(e, t, n) {
                C.call(e, n) ? e[n]++ : e[n] = 1
            });
            function Se(e, r, t) {
                var o = !0;
                r = P.createCallback(r, t, 3);
                var n = -1
                    , i = e ? e.length : 0;
                if ("number" == typeof i)
                    for (; ++n < i && (o = !!r(e[n], n, e)); )
                        ;
                else
                    ve(e, function(e, t, n) {
                        return o = !!r(e, t, n)
                    });
                return o
            }
            function _e(e, r, t) {
                var o = [];
                r = P.createCallback(r, t, 3);
                var n = -1
                    , i = e ? e.length : 0;
                if ("number" == typeof i)
                    for (; ++n < i; ) {
                        var a = e[n];
                        r(a, n, e) && o.push(a)
                    }
                else
                    ve(e, function(e, t, n) {
                        r(e, t, n) && o.push(e)
                    });
                return o
            }
            function Ne(e, r, t) {
                r = P.createCallback(r, t, 3);
                var o, n = -1, i = e ? e.length : 0;
                if ("number" != typeof i)
                    return ve(e, function(e, t, n) {
                        if (r(e, t, n))
                            return o = e,
                                !1
                    }),
                        o;
                for (; ++n < i; ) {
                    var a = e[n];
                    if (r(a, n, e))
                        return a
                }
            }
            function Ae(e, t, n) {
                var r = -1
                    , o = e ? e.length : 0;
                if (t = t && void 0 === n ? t : Q(t, n, 3),
                "number" == typeof o)
                    for (; ++r < o && !1 !== t(e[r], r, e); )
                        ;
                else
                    ve(e, t);
                return e
            }
            function De(e, r, t) {
                var o = e ? e.length : 0;
                if (r = r && void 0 === t ? r : Q(r, t, 3),
                "number" == typeof o)
                    for (; o-- && !1 !== r(e[o], o, e); )
                        ;
                else {
                    var i = se(e)
                        , o = i.length;
                    ve(e, function(e, t, n) {
                        return t = i ? i[--o] : --o,
                            r(n[t], t, n)
                    })
                }
                return e
            }
            o = J(function(e, t, n) {
                (C.call(e, n) ? e[n] : e[n] = []).push(t)
            }),
                t = J(function(e, t, n) {
                    e[n] = t
                });
            function Oe(e, r, t) {
                var o = -1
                    , n = e ? e.length : 0;
                if (r = P.createCallback(r, t, 3),
                "number" == typeof n)
                    for (var i = s(n); ++o < n; )
                        i[o] = r(e[o], o, e);
                else
                    i = [],
                        ve(e, function(e, t, n) {
                            i[++o] = r(e, t, n)
                        });
                return i
            }
            function qe(e, r, t) {
                var o = -1 / 0
                    , i = o;
                if (null == (r = "function" != typeof r && t && t[r] === e ? null : r) && ue(e))
                    for (var n = -1, a = e.length; ++n < a; ) {
                        var u = e[n];
                        i < u && (i = u)
                    }
                else
                    r = null == r && je(e) ? It : P.createCallback(r, t, 3),
                        Ae(e, function(e, t, n) {
                            n = r(e, t, n),
                            o < n && (o = n,
                                i = e)
                        });
                return i
            }
            var Le = Oe;
            function Ie(e, r, o, t) {
                if (!e)
                    return o;
                var i = arguments.length < 3;
                r = P.createCallback(r, t, 4);
                var n = -1
                    , a = e.length;
                if ("number" == typeof a)
                    for (i && (o = e[++n]); ++n < a; )
                        o = r(o, e[n], n, e);
                else
                    ve(e, function(e, t, n) {
                        o = i ? (i = !1,
                            e) : r(o, e, t, n)
                    });
                return o
            }
            function Me(e, r, o, t) {
                var i = arguments.length < 3;
                return r = P.createCallback(r, t, 4),
                    De(e, function(e, t, n) {
                        o = i ? (i = !1,
                            e) : r(o, e, t, n)
                    }),
                    o
            }
            function He(e) {
                var n = -1
                    , t = e ? e.length : 0
                    , r = s("number" == typeof t ? t : 0);
                return Ae(e, function(e) {
                    var t = Y(0, ++n);
                    r[n] = r[t],
                        r[t] = e
                }),
                    r
            }
            function Pe(e, r, t) {
                var o;
                r = P.createCallback(r, t, 3);
                var n = -1
                    , i = e ? e.length : 0;
                if ("number" == typeof i)
                    for (; ++n < i && !(o = r(e[n], n, e)); )
                        ;
                else
                    ve(e, function(e, t, n) {
                        return !(o = r(e, t, n))
                    });
                return !!o
            }
            i = _e;
            function Re(e, t, n) {
                var r = 0
                    , o = e ? e.length : 0;
                if ("number" != typeof t && null != t) {
                    var i = -1;
                    for (t = P.createCallback(t, n, 3); ++i < o && t(e[i], i, e); )
                        r++
                } else if (null == (r = t) || n)
                    return e ? e[0] : tt;
                return Ft(e, 0, L(q(0, r), o))
            }
            function Be(e, t, n) {
                if ("number" == typeof n) {
                    var r = e ? e.length : 0;
                    n = n < 0 ? q(0, r + n) : n || 0
                } else if (n)
                    return r = We(e, t),
                        e[r] === t ? r : -1;
                return qt(e, t, n)
            }
            function $e(e, t, n) {
                if ("number" != typeof t && null != t) {
                    var r = 0
                        , o = -1
                        , i = e ? e.length : 0;
                    for (t = P.createCallback(t, n, 3); ++o < i && t(e[o], o, e); )
                        r++
                } else
                    r = null == t || n ? 1 : q(0, t);
                return Ft(e, r)
            }
            function We(e, t, n, r) {
                var o = 0
                    , i = e ? e.length : o;
                for (t = (n = n ? P.createCallback(n, r, 1) : Ve)(t); o < i; ) {
                    var a = o + i >>> 1;
                    n(e[a]) < t ? o = 1 + a : i = a
                }
                return o
            }
            function Fe(e, t, n, r) {
                return "boolean" != typeof t && null != t && (r = n,
                    n = "function" != typeof t && r && r[t] === e ? null : t,
                    t = !1),
                    K(e, t, n = null != n ? P.createCallback(n, r, 3) : n)
            }
            function ze() {
                for (var e = 1 < arguments.length ? arguments : arguments[0], t = -1, n = e ? qe(Le(e, "length")) : 0, r = s(n < 0 ? 0 : n); ++t < n; )
                    r[t] = Le(e, t);
                return r
            }
            function Qe(e, t) {
                var n = -1
                    , r = e ? e.length : 0
                    , o = {};
                for (t || !r || ue(e[0]) || (t = []); ++n < r; ) {
                    var i = e[n];
                    t ? o[i] = t[n] : i && (o[i[0]] = i[1])
                }
                return o
            }
            function Ue(e, t) {
                return 2 < arguments.length ? Z(e, 17, Ft(arguments, 2), null, t) : Z(e, 1, null, null, t)
            }
            function Xe(r, o, e) {
                var i, a, u, s, l, c, f, p, d = 0, h = !1, g = !0;
                if (!xe(r))
                    throw new m;
                function v() {
                    c && b(c),
                        a = c = f = tt,
                    !g && h === o || (d = Je(),
                        u = r.apply(l, i),
                    c || a || (i = l = null))
                }
                o = q(0, o) || 0,
                    !0 === e ? g = !(p = !0) : we(e) && (p = e.leading,
                        h = "maxWait"in e && (q(o, e.maxWait) || 0),
                        g = "trailing"in e ? e.trailing : g);
                var y = function() {
                    var e, t = o - (Je() - s);
                    t <= 0 ? (a && b(a),
                        e = f,
                        a = c = f = tt,
                    e && (d = Je(),
                        u = r.apply(l, i),
                    c || a || (i = l = null))) : c = j(y, t)
                };
                return function() {
                    var e, t, n;
                    return i = arguments,
                        s = Je(),
                        l = this,
                        f = g && (c || !p),
                        !1 === h ? e = p && !c : (n = (t = h - (s - (d = a || p ? d : s))) <= 0) ? (a = a && b(a),
                            d = s,
                            u = r.apply(l, i)) : a = a || j(v, t),
                        n && c ? c = b(c) : c || o === h || (c = j(y, o)),
                    e && (n = !0,
                        u = r.apply(l, i)),
                    !n || c || a || (i = l = null),
                        u
                }
            }
            function Ve(e) {
                return e
            }
            function Ge(o, t, e) {
                var i = !0
                    , n = t && me(t);
                t && (e || n.length) || (null == e && (e = t),
                    a = R,
                    t = o,
                    o = P,
                    n = me(t)),
                    !1 === e ? i = !1 : we(e) && "chain"in e && (i = e.chain);
                var a = o
                    , u = xe(a);
                Ae(n, function(e) {
                    var r = o[e] = t[e];
                    u && (a.prototype[e] = function() {
                            var e = this.__chain__
                                , t = this.__wrapped__
                                , n = [t];
                            if (T.apply(n, arguments),
                                n = r.apply(o, n),
                            i || e) {
                                if (t === n && we(n))
                                    return this;
                                (n = new a(n)).__chain__ = e
                            }
                            return n
                        }
                    )
                })
            }
            function Ye() {}
            var Ke, Je = ne(Je = r.now) && Je || function() {
                    return (new r).getTime()
                }
                , N = 8 == I(it + "08") ? I : function(e, t) {
                    return I(je(e) ? e.replace(dt, "") : e, t || 0)
                }
            ;
            function Ze(t) {
                return function(e) {
                    return e[t]
                }
            }
            function et() {
                return this.__wrapped__
            }
            return P.after = function(e, t) {
                if (!xe(t))
                    throw new m;
                return function() {
                    if (--e < 1)
                        return t.apply(this, arguments)
                }
            }
                ,
                P.assign = de,
                P.at = function(e) {
                    for (var t = arguments, n = -1, r = V(t, !0, !1, 1), o = t[2] && t[2][t[1]] === e ? 1 : r.length, i = s(o); ++n < o; )
                        i[n] = e[r[n]];
                    return i
                }
                ,
                P.bind = Ue,
                P.bindAll = function(e) {
                    for (var t = 1 < arguments.length ? V(arguments, !0, !1, 1) : me(e), n = -1, r = t.length; ++n < r; ) {
                        var o = t[n];
                        e[o] = Z(e[o], 1, null, null, e)
                    }
                    return e
                }
                ,
                P.bindKey = function(e, t) {
                    return 2 < arguments.length ? Z(t, 19, Ft(arguments, 2), null, e) : Z(t, 3, null, null, e)
                }
                ,
                P.chain = function(e) {
                    return (e = new R(e)).__chain__ = !0,
                        e
                }
                ,
                P.compact = function(e) {
                    for (var t = -1, n = e ? e.length : 0, r = []; ++t < n; ) {
                        var o = e[t];
                        o && r.push(o)
                    }
                    return r
                }
                ,
                P.compose = function() {
                    for (var n = arguments, e = n.length; e--; )
                        if (!xe(n[e]))
                            throw new m;
                    return function() {
                        for (var e = arguments, t = n.length; t--; )
                            e = [n[t].apply(this, e)];
                        return e[0]
                    }
                }
                ,
                P.constant = function(e) {
                    return function() {
                        return e
                    }
                }
                ,
                P.countBy = l,
                P.create = function(e, t) {
                    return e = F(e),
                        t ? de(e, t) : e
                }
                ,
                P.createCallback = function(r, e, t) {
                    var n = typeof r;
                    if (null == r || "function" == n)
                        return Q(r, e, t);
                    if ("object" != n)
                        return Ze(r);
                    var o = se(r)
                        , i = o[0]
                        , a = r[i];
                    return 1 != o.length || a != a || we(a) ? function(e) {
                            for (var t = o.length, n = !1; t-- && (n = G(e[o[t]], r[o[t]], null, !0)); )
                                ;
                            return n
                        }
                        : function(e) {
                            return e = e[i],
                            a === e && (0 !== a || 1 / a == 1 / e)
                        }
                }
                ,
                P.curry = function(e, t) {
                    return Z(e, 4, null, null, null, t = "number" == typeof t ? t : +t || e.length)
                }
                ,
                P.debounce = Xe,
                P.defaults = he,
                P.defer = function(e) {
                    if (!xe(e))
                        throw new m;
                    var t = Ft(arguments, 1);
                    return j(function() {
                        e.apply(tt, t)
                    }, 1)
                }
                ,
                P.delay = function(e, t) {
                    if (!xe(e))
                        throw new m;
                    var n = Ft(arguments, 2);
                    return j(function() {
                        e.apply(tt, n)
                    }, t)
                }
                ,
                P.difference = function(e) {
                    return X(e, V(arguments, !0, !0, 1))
                }
                ,
                P.filter = _e,
                P.flatten = function(e, t, n, r) {
                    return "boolean" != typeof t && null != t && (r = n,
                        n = "function" != typeof t && r && r[t] === e ? null : t,
                        t = !1),
                        V(e = null != n ? Oe(e, n, r) : e, t)
                }
                ,
                P.forEach = Ae,
                P.forEachRight = De,
                P.forIn = ge,
                P.forInRight = function(e, t, n) {
                    var r = [];
                    ge(e, function(e, t) {
                        r.push(t, e)
                    });
                    var o = r.length;
                    for (t = Q(t, n, 3); o-- && !1 !== t(r[o--], r[o], e); )
                        ;
                    return e
                }
                ,
                P.forOwn = ve,
                P.forOwnRight = ye,
                P.functions = me,
                P.groupBy = o,
                P.indexBy = t,
                P.initial = function(e, t, n) {
                    var r = 0
                        , o = e ? e.length : 0;
                    if ("number" != typeof t && null != t) {
                        var i = o;
                        for (t = P.createCallback(t, n, 3); i-- && t(e[i], i, e); )
                            r++
                    } else
                        r = null == t || n ? 1 : t || r;
                    return Ft(e, 0, L(q(0, o - r), o))
                }
                ,
                P.intersection = function() {
                    for (var e = [], t = -1, n = arguments.length, r = Rt(), o = te(), i = o === qt, a = Rt(); ++t < n; ) {
                        var u = arguments[t];
                        (ue(u) || ae(u)) && (e.push(u),
                            r.push(i && u.length >= ot && Ht(t ? e[t] : a)))
                    }
                    var s = e[0]
                        , l = -1
                        , c = s ? s.length : 0
                        , f = [];
                    e: for (; ++l < c; ) {
                        var p = r[0]
                            , u = s[l];
                        if ((p ? Lt(p, u) : o(a, u)) < 0) {
                            for (t = n,
                                     (p || a).push(u); --t; )
                                if (((p = r[t]) ? Lt(p, u) : o(e[t], u)) < 0)
                                    continue e;
                            f.push(u)
                        }
                    }
                    for (; n--; )
                        (p = r[n]) && Wt(p);
                    return $t(r),
                        $t(a),
                        f
                }
                ,
                P.invert = be,
                P.invoke = function(e, t) {
                    var n = Ft(arguments, 2)
                        , r = -1
                        , o = "function" == typeof t
                        , i = e ? e.length : 0
                        , a = s("number" == typeof i ? i : 0);
                    return Ae(e, function(e) {
                        a[++r] = (o ? t : e[t]).apply(e, n)
                    }),
                        a
                }
                ,
                P.keys = se,
                P.map = Oe,
                P.mapValues = function(e, r, t) {
                    var o = {};
                    return r = P.createCallback(r, t, 3),
                        ve(e, function(e, t, n) {
                            o[t] = r(e, t, n)
                        }),
                        o
                }
                ,
                P.max = qe,
                P.memoize = function(n, r) {
                    if (!xe(n))
                        throw new m;
                    var o = function() {
                        var e = o.cache
                            , t = r ? r.apply(this, arguments) : rt + arguments[0];
                        return C.call(e, t) ? e[t] : e[t] = n.apply(this, arguments)
                    };
                    return o.cache = {},
                        o
                }
                ,
                P.merge = function(e) {
                    var t, n = arguments, r = 2;
                    if (!we(e))
                        return e;
                    3 < (r = "number" != typeof n[2] ? n.length : r) && "function" == typeof n[r - 2] ? t = Q(n[--r - 1], n[r--], 2) : 2 < r && "function" == typeof n[r - 1] && (t = n[--r]);
                    for (var o = Ft(arguments, 1, r), i = -1, a = Rt(), u = Rt(); ++i < r; )
                        !function s(l, e, c, f, p) {
                            (ue(e) ? Ae : ve)(e, function(e, t) {
                                var n, r, o = e, i = l[t];
                                if (e && ((r = ue(e)) || Te(e))) {
                                    for (var a, u = f.length; u--; )
                                        if (n = f[u] == e) {
                                            i = p[u];
                                            break
                                        }
                                    n || (c && (a = void 0 !== (o = c(i, e))) && (i = o),
                                    a || (i = r ? ue(i) ? i : [] : Te(i) ? i : {}),
                                        f.push(e),
                                        p.push(i),
                                    a || s(i, e, c, f, p))
                                } else
                                    void 0 !== (o = c && void 0 === (o = c(i, e)) ? e : o) && (i = o);
                                l[t] = i
                            })
                        }(e, o[i], t, a, u);
                    return $t(a),
                        $t(u),
                        e
                }
                ,
                P.min = function(e, r, t) {
                    var o = 1 / 0
                        , i = o;
                    if (null == (r = "function" != typeof r && t && t[r] === e ? null : r) && ue(e))
                        for (var n = -1, a = e.length; ++n < a; ) {
                            var u = e[n];
                            u < i && (i = u)
                        }
                    else
                        r = null == r && je(e) ? It : P.createCallback(r, t, 3),
                            Ae(e, function(e, t, n) {
                                (n = r(e, t, n)) < o && (o = n,
                                    i = e)
                            });
                    return i
                }
                ,
                P.omit = function(e, r, t) {
                    var o = {};
                    if ("function" != typeof r) {
                        var n = [];
                        ge(e, function(e, t) {
                            n.push(t)
                        });
                        for (var i = -1, a = (n = X(n, V(arguments, !0, !1, 1))).length; ++i < a; ) {
                            var u = n[i];
                            o[u] = e[u]
                        }
                    } else
                        r = P.createCallback(r, t, 3),
                            ge(e, function(e, t, n) {
                                r(e, t, n) || (o[t] = e)
                            });
                    return o
                }
                ,
                P.once = function(e) {
                    var t, n;
                    if (!xe(e))
                        throw new m;
                    return function() {
                        return t || (t = !0,
                            n = e.apply(this, arguments),
                            e = null),
                            n
                    }
                }
                ,
                P.pairs = function(e) {
                    for (var t = -1, n = se(e), r = n.length, o = s(r); ++t < r; ) {
                        var i = n[t];
                        o[t] = [i, e[i]]
                    }
                    return o
                }
                ,
                P.partial = function(e) {
                    return Z(e, 16, Ft(arguments, 1))
                }
                ,
                P.partialRight = function(e) {
                    return Z(e, 32, null, Ft(arguments, 1))
                }
                ,
                P.pick = function(e, r, t) {
                    var o = {};
                    if ("function" != typeof r)
                        for (var n = -1, i = V(arguments, !0, !1, 1), a = we(e) ? i.length : 0; ++n < a; ) {
                            var u = i[n];
                            u in e && (o[u] = e[u])
                        }
                    else
                        r = P.createCallback(r, t, 3),
                            ge(e, function(e, t, n) {
                                r(e, t, n) && (o[t] = e)
                            });
                    return o
                }
                ,
                P.pluck = Le,
                P.property = Ze,
                P.pull = function(e) {
                    for (var t = arguments, n = 0, r = t.length, o = e ? e.length : 0; ++n < r; )
                        for (var i = -1, a = t[n]; ++i < o; )
                            e[i] === a && (k.call(e, i--, 1),
                                o--);
                    return e
                }
                ,
                P.range = function(e, t, n) {
                    e = +e || 0,
                    null == t && (t = e,
                        e = 0);
                    for (var r = -1, o = q(0, h((t - e) / ((n = "number" == typeof n ? n : +n || 1) || 1))), i = s(o); ++r < o; )
                        i[r] = e,
                            e += n;
                    return i
                }
                ,
                P.reject = function(e, r, t) {
                    return r = P.createCallback(r, t, 3),
                        _e(e, function(e, t, n) {
                            return !r(e, t, n)
                        })
                }
                ,
                P.remove = function(e, t, n) {
                    var r = -1
                        , o = e ? e.length : 0
                        , i = [];
                    for (t = P.createCallback(t, n, 3); ++r < o; ) {
                        var a = e[r];
                        t(a, r, e) && (i.push(a),
                            k.call(e, r--, 1),
                            o--)
                    }
                    return i
                }
                ,
                P.rest = $e,
                P.shuffle = He,
                P.sortBy = function(e, o, t) {
                    var i = -1
                        , a = ue(o)
                        , n = e ? e.length : 0
                        , u = s("number" == typeof n ? n : 0);
                    for (a || (o = P.createCallback(o, t, 3)),
                             Ae(e, function(t, e, n) {
                                 var r = u[++i] = Bt();
                                 a ? r.criteria = Oe(o, function(e) {
                                     return t[e]
                                 }) : (r.criteria = Rt())[0] = o(t, e, n),
                                     r.index = i,
                                     r.value = t
                             }),
                             n = u.length,
                             u.sort(Mt); n--; ) {
                        var r = u[n];
                        u[n] = r.value,
                        a || $t(r.criteria),
                            Wt(r)
                    }
                    return u
                }
                ,
                P.tap = function(e, t) {
                    return t(e),
                        e
                }
                ,
                P.throttle = function(e, t, n) {
                    var r = !0
                        , o = !0;
                    if (!xe(e))
                        throw new m;
                    return !1 === n ? r = !1 : we(n) && (r = "leading"in n ? n.leading : r,
                        o = "trailing"in n ? n.trailing : o),
                        Nt.leading = r,
                        Nt.maxWait = t,
                        Nt.trailing = o,
                        Xe(e, t, Nt)
                }
                ,
                P.times = function(e, t, n) {
                    e = -1 < (e = +e) ? e : 0;
                    var r = -1
                        , o = s(e);
                    for (t = Q(t, n, 1); ++r < e; )
                        o[r] = t(r);
                    return o
                }
                ,
                P.toArray = function(e) {
                    return (e && "number" == typeof e.length ? Ft : ke)(e)
                }
                ,
                P.transform = function(e, r, o, t) {
                    var n, i = ue(e);
                    return null == o && (o = i ? [] : F((n = e && e.constructor) && n.prototype)),
                    r && (r = P.createCallback(r, t, 4),
                        (i ? Ae : ve)(e, function(e, t, n) {
                            return r(o, e, t, n)
                        })),
                        o
                }
                ,
                P.union = function() {
                    return K(V(arguments, !0, !0))
                }
                ,
                P.uniq = Fe,
                P.values = ke,
                P.where = i,
                P.without = function(e) {
                    return X(e, Ft(arguments, 1))
                }
                ,
                P.wrap = function(e, t) {
                    return Z(t, 16, [e])
                }
                ,
                P.xor = function() {
                    for (var e = -1, t = arguments.length; ++e < t; ) {
                        var n, r = arguments[e];
                        (ue(r) || ae(r)) && (n = n ? K(X(n, r).concat(X(r, n))) : r)
                    }
                    return n || []
                }
                ,
                P.zip = ze,
                P.zipObject = Qe,
                P.collect = Oe,
                P.drop = $e,
                P.each = Ae,
                P.eachRight = De,
                P.extend = de,
                P.methods = me,
                P.object = Qe,
                P.select = _e,
                P.tail = $e,
                P.unique = Fe,
                P.unzip = ze,
                Ge(P),
                P.clone = function(e, t, n, r) {
                    return "boolean" != typeof t && null != t && (r = n,
                        n = t,
                        t = !1),
                        W(e, t, "function" == typeof n && Q(n, r, 1))
                }
                ,
                P.cloneDeep = function(e, t, n) {
                    return W(e, !0, "function" == typeof t && Q(t, n, 1))
                }
                ,
                P.contains = Ee,
                P.escape = function(e) {
                    return null == e ? "" : g(e).replace(pe, ee)
                }
                ,
                P.every = Se,
                P.find = Ne,
                P.findIndex = function(e, t, n) {
                    var r = -1
                        , o = e ? e.length : 0;
                    for (t = P.createCallback(t, n, 3); ++r < o; )
                        if (t(e[r], r, e))
                            return r;
                    return -1
                }
                ,
                P.findKey = function(e, r, t) {
                    var o;
                    return r = P.createCallback(r, t, 3),
                        ve(e, function(e, t, n) {
                            if (r(e, t, n))
                                return o = t,
                                    !1
                        }),
                        o
                }
                ,
                P.findLast = function(e, r, t) {
                    var o;
                    return r = P.createCallback(r, t, 3),
                        De(e, function(e, t, n) {
                            if (r(e, t, n))
                                return o = e,
                                    !1
                        }),
                        o
                }
                ,
                P.findLastIndex = function(e, t, n) {
                    var r = e ? e.length : 0;
                    for (t = P.createCallback(t, n, 3); r--; )
                        if (t(e[r], r, e))
                            return r;
                    return -1
                }
                ,
                P.findLastKey = function(e, r, t) {
                    var o;
                    return r = P.createCallback(r, t, 3),
                        ye(e, function(e, t, n) {
                            if (r(e, t, n))
                                return o = t,
                                    !1
                        }),
                        o
                }
                ,
                P.has = function(e, t) {
                    return !!e && C.call(e, t)
                }
                ,
                P.identity = Ve,
                P.indexOf = Be,
                P.isArguments = ae,
                P.isArray = ue,
                P.isBoolean = function(e) {
                    return !0 === e || !1 === e || e && "object" == typeof e && v.call(e) == wt || !1
                }
                ,
                P.isDate = function(e) {
                    return e && "object" == typeof e && v.call(e) == Ct || !1
                }
                ,
                P.isElement = function(e) {
                    return e && 1 === e.nodeType || !1
                }
                ,
                P.isEmpty = function(e) {
                    var t = !0;
                    if (!e)
                        return t;
                    var n = v.call(e)
                        , r = e.length;
                    return n == xt || n == St || n == bt || n == kt && "number" == typeof r && xe(e.splice) ? !r : (ve(e, function() {
                        return t = !1
                    }),
                        t)
                }
                ,
                P.isEqual = function(e, t, n, r) {
                    return G(e, t, "function" == typeof n && Q(n, r, 2))
                }
                ,
                P.isFinite = function(e) {
                    return A(e) && !D(parseFloat(e))
                }
                ,
                P.isFunction = xe,
                P.isNaN = function(e) {
                    return Ce(e) && e != +e
                }
                ,
                P.isNull = function(e) {
                    return null === e
                }
                ,
                P.isNumber = Ce,
                P.isObject = we,
                P.isPlainObject = Te,
                P.isRegExp = function(e) {
                    return e && "object" == typeof e && v.call(e) == Et || !1
                }
                ,
                P.isString = je,
                P.isUndefined = function(e) {
                    return void 0 === e
                }
                ,
                P.lastIndexOf = function(e, t, n) {
                    var r = e ? e.length : 0;
                    for ("number" == typeof n && (r = (n < 0 ? q(0, r + n) : L(n, r - 1)) + 1); r--; )
                        if (e[r] === t)
                            return r;
                    return -1
                }
                ,
                P.mixin = Ge,
                P.noConflict = function() {
                    return n._ = c,
                        this
                }
                ,
                P.noop = Ye,
                P.now = Je,
                P.parseInt = N,
                P.random = function(e, t, n) {
                    var r = null == e
                        , o = null == t;
                    return null == n && ("boolean" == typeof e && o ? (n = e,
                        e = 1) : o || "boolean" != typeof t || (n = t,
                        o = !0)),
                    r && o && (t = 1),
                        e = +e || 0,
                        o ? (t = e,
                            e = 0) : t = +t || 0,
                        n || e % 1 || t % 1 ? (n = M(),
                            L(e + n * (t - e + parseFloat("1e-" + ((n + "").length - 1))), t)) : Y(e, t)
                }
                ,
                P.reduce = Ie,
                P.reduceRight = Me,
                P.result = function(e, t) {
                    if (e) {
                        var n = e[t];
                        return xe(n) ? e[t]() : n
                    }
                }
                ,
                P.runInContext = e,
                P.size = function(e) {
                    var t = e ? e.length : 0;
                    return "number" == typeof t ? t : se(e).length
                }
                ,
                P.some = Pe,
                P.sortedIndex = We,
                P.template = function(a, e, t) {
                    var n = P.templateSettings;
                    a = g(a || ""),
                        t = he({}, t, n);
                    var u, r = he({}, t.imports, n.imports), o = se(r), i = ke(r), s = 0, n = t.interpolate || ht, l = "__p += '", r = p((t.escape || ht).source + "|" + n.source + "|" + (n === pt ? lt : ht).source + "|" + (t.evaluate || ht).source + "|$", "g");
                    a.replace(r, function(e, t, n, r, o, i) {
                        return n = n || r,
                            l += a.slice(s, i).replace(vt, Pt),
                        t && (l += "' +\n__e(" + t + ") +\n'"),
                        o && (u = !0,
                            l += "';\n" + o + ";\n__p += '"),
                        n && (l += "' +\n((__t = (" + n + ")) == null ? '' : __t) +\n'"),
                            s = i + e.length,
                            e
                    }),
                        l += "';\n",
                        n = t.variable,
                    (r = n) || (l = "with (" + (n = "obj") + ") {\n" + l + "\n}\n"),
                        l = (u ? l.replace(at, "") : l).replace(ut, "$1").replace(st, "$1;"),
                        l = "function(" + n + ") {\n" + (r ? "" : n + " || (" + n + " = {});\n") + "var __t, __p = '', __e = _.escape" + (u ? ", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n" : ";\n") + l + "return __p\n}",
                        t = "\n/*\n//# sourceURL=" + (t.sourceURL || "/lodash/template/source[" + mt++ + "]") + "\n*/";
                    try {
                        var c = f(o, "return " + l + t).apply(tt, i)
                    } catch (e) {
                        throw e.source = l,
                            e
                    }
                    return e ? c(e) : (c.source = l,
                        c)
                }
                ,
                P.unescape = function(e) {
                    return null == e ? "" : g(e).replace(fe, ie)
                }
                ,
                P.uniqueId = function(e) {
                    var t = ++nt;
                    return g(null == e ? "" : e) + t
                }
                ,
                P.all = Se,
                P.any = Pe,
                P.detect = Ne,
                P.findWhere = Ne,
                P.foldl = Ie,
                P.foldr = Me,
                P.include = Ee,
                P.inject = Ie,
                Ge((Ke = {},
                    ve(P, function(e, t) {
                        P.prototype[t] || (Ke[t] = e)
                    }),
                    Ke), !1),
                P.first = Re,
                P.last = function(e, t, n) {
                    var r = 0
                        , o = e ? e.length : 0;
                    if ("number" != typeof t && null != t) {
                        var i = o;
                        for (t = P.createCallback(t, n, 3); i-- && t(e[i], i, e); )
                            r++
                    } else if (null == (r = t) || n)
                        return e ? e[o - 1] : tt;
                    return Ft(e, q(0, o - r))
                }
                ,
                P.sample = function(e, t, n) {
                    return e && "number" != typeof e.length && (e = ke(e)),
                        null == t || n ? e ? e[Y(0, e.length - 1)] : tt : ((e = He(e)).length = L(q(0, t), e.length),
                            e)
                }
                ,
                P.take = Re,
                P.head = Re,
                ve(P, function(o, e) {
                    var i = "sample" !== e;
                    P.prototype[e] || (P.prototype[e] = function(e, t) {
                            var n = this.__chain__
                                , r = o(this.__wrapped__, e, t);
                            return n || null != e && (!t || i && "function" == typeof e) ? new R(r,n) : r
                        }
                    )
                }),
                P.VERSION = "2.4.1",
                P.prototype.chain = function() {
                    return this.__chain__ = !0,
                        this
                }
                ,
                P.prototype.toString = function() {
                    return g(this.__wrapped__)
                }
                ,
                P.prototype.value = et,
                P.prototype.valueOf = et,
                Ae(["join", "pop", "shift"], function(e) {
                    var n = u[e];
                    P.prototype[e] = function() {
                        var e = this.__chain__
                            , t = n.apply(this.__wrapped__, arguments);
                        return e ? new R(t,e) : t
                    }
                }),
                Ae(["push", "reverse", "sort", "unshift"], function(e) {
                    var t = u[e];
                    P.prototype[e] = function() {
                        return t.apply(this.__wrapped__, arguments),
                            this
                    }
                }),
                Ae(["concat", "slice", "splice"], function(e) {
                    var t = u[e];
                    P.prototype[e] = function() {
                        return new R(t.apply(this.__wrapped__, arguments),this.__chain__)
                    }
                }),
                P
        }();
        "function" == typeof define && "object" == typeof define.amd && define.amd ? (Ot._ = zt,
            define(function() {
                return zt
            })) : e && i ? a ? (i.exports = zt)._ = zt : e._ = zt : Ot._ = zt
    }
        .call(this);
