!function(g) {
    creatium.init.global(function() {
        var t = g(".section-layout");
        t.find("[cr-layout-left-toggle]").on("click", function() {
            creatium.layout.mobile ? t.find("[cr-layout-root]").toggleClass("mobile-left-active") : cr.layout._left_current ? (g("body").removeClass("layout-left-active"),
                t.find("[cr-layout-root]").removeClass("left-active"),
                cr.layout._left_current = 0) : (g("body").addClass("layout-left-active"),
                t.find("[cr-layout-root]").addClass("left-active"),
                cr.layout._left_current = cr.layout.left),
                g(window).triggerHandler("resize")
        })
    }),
        creatium.init.global(function() {
            var m = creatium.store.get("user_visit");
            m ? (m.last = Date.now(),
                m.count++) : m = {
                first: Date.now(),
                last: Date.now(),
                lead: null,
                count: 1
            },
                g(creatium).on("submit-success", function() {
                    m.lead = Date.now(),
                        creatium.store.set("user_visit", m)
                }),
                creatium.store.set("user_visit", m),
                g(".section-modal").each(function() {
                    var t, n, i, a, o, r, e, l, c = this, d = g(c), s = d.find(".modal"), u = g(document), f = d.data("once"), p = d.data("trigger"), h = d.data("conversionlimit");
                    f && creatium.store.get("is_triggered_" + p) || (t = !1,
                        s.one("show", function() {
                            t = !0,
                                creatium.store.set("is_triggered_" + p, !0)
                        }),
                        n = function() {
                            if (t)
                                return !0;
                            if (0 === p.indexOf("leadback_")) {
                                if (!0 !== creatium.store.get("is_converted"))
                                    return !0
                            } else if (h && creatium.store.get("is_converted"))
                                return !0;
                            return !1
                        }
                        ,
                        "visit" === p ? n() || creatium.modals.show(s) : "visit_10sec" === p ? setTimeout(function() {
                            n() || creatium.modals.show(s)
                        }, 1e4) : "visit_30sec" === p ? setTimeout(function() {
                            n() || creatium.modals.show(s)
                        }, 3e4) : "visit_1min" === p ? setTimeout(function() {
                            n() || creatium.modals.show(s)
                        }, 6e4) : "visit_2min" === p ? setTimeout(function() {
                            n() || creatium.modals.show(s)
                        }, 12e4) : "visit_3min" === p ? setTimeout(function() {
                            n() || creatium.modals.show(s)
                        }, 18e4) : "visit_4min" === p ? setTimeout(function() {
                            n() || creatium.modals.show(s)
                        }, 24e4) : "return_30min" === p ? n() || 2 === m.count && m.last - m.first < 18e5 && creatium.modals.show(s) : "return_day" === p ? n() || 2 === m.count && m.last - m.first < 864e5 && creatium.modals.show(s) : "return_week" === p ? n() || 3 === m.count && m.last - m.first < 6048e5 && creatium.modals.show(s) : "leadback_hour" === p ? n() || m.last - m.lead < 36e5 && creatium.modals.show(s) : "leadback_day" === p ? n() || m.last - m.lead < 864e5 && creatium.modals.show(s) : "leadback_week" === p ? n() || m.last - m.lead < 6048e5 && creatium.modals.show(s) : "leadback_month" === p ? n() || m.last - m.lead < 2592e6 && creatium.modals.show(s) : "leave" === p ? u.on("mouseleave", function(t) {
                            n() || creatium.modals.show(s)
                        }) : "scroll" === p ? u.on("scroll", function(t) {
                            var e;
                            n() || 0 < (e = c.getBoundingClientRect()).top && e.top < window.innerHeight / 2 && creatium.modals.show(s)
                        }) : "scroll_back" === p ? (i = !1,
                            u.on("scroll", function(t) {
                                var e;
                                n() || (e = c.getBoundingClientRect(),
                                    i ? 0 < e.top && creatium.modals.show(s) : e.top + e.height < 0 && (i = !0))
                            })) : "scroll_back_twice" === p ? (r = o = a = !1,
                            u.on("scroll", function(t) {
                                var e;
                                n() || (e = c.getBoundingClientRect(),
                                    a ? 0 < e.top && (o = !0) : e.top + e.height < 0 && (a = !0),
                                o && (r ? 0 < e.top && creatium.modals.show(s) : e.top + e.height < 0 && (r = !0)))
                            })) : "scroll_end" === p ? u.on("scroll", function(t) {
                            n() || window.innerHeight + window.scrollY >= document.body.offsetHeight && creatium.modals.show(s)
                        }) : "form_fail_twice" === p ? (e = 0,
                            g(creatium).on("submit-error", function() {
                                n() || 2 === ++e && g(creatium).one("msg-close", function() {
                                    creatium.modals.show(s)
                                })
                            })) : "modal_twice" === p && (l = 0,
                            g(creatium).on("modal-hide", function(t, e) {
                                n() || e.$section.hasClass("section-modal") || 2 === ++l && creatium.modals.show(s)
                            })))
                })
        }),
        creatium.init.global(function() {
            var t = g(".section-preloader").addClass("preloader-fading");
            setTimeout(function() {
                t.hide()
            }, 300)
        }),
        creatium.init.global(function() {
            var t = g(".section-sidemenu");
            if (t.length) {
                if ("sections.creatium.site" === location.host)
                    return (n = t.find("[cr-menu-page]")).clone().insertBefore(n).addClass("highlight-100"),
                        n.clone().insertBefore(n).addClass("highlight-0"),
                        n.clone().insertBefore(n).addClass("highlight-0"),
                        void n.clone().insertBefore(n).addClass("highlight-0");
                var e = g(".node.section:visible:not(.section-modal, .section-helper, .section-sidemenu, .fixation-top, .fixation-bottom)")
                    , n = t.find("[cr-menu-page]");
                e.each(function() {
                    var t = g(this)
                        , e = n.clone().insertBefore(n);
                    e.addClass("highlight-0").data("highlight", 0),
                        e.on("click", function() {
                            creatium.scrollTo(t)
                        })
                }),
                    n.remove();
                var i = t.find("[cr-menu-page]")
                    , t = _.throttle(function() {
                    e.each(function(t) {
                        var e = g(this)
                            , n = this.getBoundingClientRect()
                            , i = Math.round(n.top)
                            , a = Math.round(n.bottom)
                            , o = g(window).height()
                            , n = 0;
                        a < 0 || o < i ? n = 0 : 0 <= i && a <= o ? n = 1 : i < 0 ? n = a / o : o < a && (n = 1 - i / o),
                        1 < (n = n < 0 ? 0 : n) && (n = 1),
                            e.data("highlight2", 10 * Math.round(10 * n))
                    }).each(function(t) {
                        var e = g(this)
                            , n = i.eq(t)
                            , t = e.data("highlight2");
                        e.data("highlight") !== t && (n.removeClass("highlight-" + n.data("highlight")),
                            n.addClass("highlight-" + t).data("highlight", t))
                    })
                }, 100);
                g(document).on("scroll", t),
                    t(),
                creatium.scroll.snapping && creatium.syncInterval(t, 500)
            }
        }),
        creatium.init.global(function() {
            creatium.lazy.add(g(".section-slider"), function t(e) {
                if (!window.Swiper)
                    return setTimeout(function() {
                        t(e)
                    }, 50);
                function n() {
                    return g(this).closest(".node")[0] === e[0]
                }
                var i = e.find(".swiper-container").filter(n)
                    , a = e.find("[cr-slider-next]").filter(n)
                    , o = e.find("[cr-slider-previous]").filter(n)
                    , r = e.find("[cr-slider-page]").filter(n)
                    , l = e.find("[cr-slider-index]").filter(n)
                    , c = i.data()
                    , d = e.find("[cr-slider-page_icon]").filter(n).filter(function() {
                    return 1 < g(this).find(">.svgwrap").length
                });
                d.find(">.svgwrap").addClass("hidden");
                var s = e.find("[cr-slider-page_label]").filter(n).filter(function() {
                    return 1 < g(this).find(">.textable").length
                });
                s.find(">.textable").addClass("hidden");
                var u = new Swiper(i.get(0),{
                    autoHeight: !1 === c.fixheight,
                    autoplay: !!c.auto && {
                        delay: c.pause,
                        stopOnLastSlide: !c.loop
                    },
                    allowTouchMove: c.touch,
                    effect: c.animated ? "slide" : "fade",
                    fadeEffect: {
                        crossFade: !0
                    },
                    touchEventsTarget: "container",
                    mousewheelEventsTarged: "container",
                    on: {
                        slideChange: function() {
                            r.filter(".is-active").removeClass("is-active"),
                                r.eq(u.activeIndex).addClass("is-active"),
                                f(u.oldActiveIndex, u.activeIndex),
                                p(u.oldActiveIndex, u.activeIndex),
                                l.text(u.activeIndex + 1),
                                u.oldActiveIndex = u.activeIndex
                        }
                    }
                });
                function f(e, n) {
                    d.each(function() {
                        var t = g(this).children(".svgwrap");
                        t.eq(e).addClass("hidden"),
                            t.eq(n).removeClass("hidden")
                    })
                }
                function p(e, n) {
                    s.each(function() {
                        var t = g(this).children(".textable");
                        t.eq(e).addClass("hidden"),
                            t.eq(n).removeClass("hidden")
                    })
                }
                e.data("api-swiper", u),
                    u._params = c,
                    u.oldActiveIndex = u.activeIndex,
                    f(u.oldActiveIndex, u.activeIndex),
                    p(u.oldActiveIndex, u.activeIndex),
                    e.on("slidenext", function(t) {
                        u.isEnd && c.loop ? u.slideTo(0) : u.slideNext(),
                            t.stopPropagation()
                    }),
                    a.on("click", function() {
                        e.trigger("slidenext")
                    }),
                    e.on("slideprev", function(t) {
                        u.isBeginning && c.loop ? u.slideTo(u.slides.length - 1) : u.slidePrev(),
                            t.stopPropagation()
                    }),
                    o.on("click", function() {
                        e.trigger("slideprev")
                    }),
                    r.on("click", function() {
                        u.slideTo(g(this).index())
                    }),
                    e.find(".lazy").on("lazyload", _.throttle(function() {
                        u.update()
                    }, 500)),
                u.params.autoHeight && creatium.syncInterval(function() {
                    !u.animating && u.slides.length && u.wrapperEl.clientHeight !== u.slides[u.activeIndex].clientHeight && u.update()
                }, 40)
            })
        }),
        creatium.init.local(function(t) {
            t.find(".widget-before-after").each(function() {
                var u = g(this).find(".root")
                    , f = u.find("> img")
                    , p = u.find("> .handler");
                f.on("load", _.after(f.length, function() {
                    u.css("height", u.height());
                    var r = u.find("> .layer-before")
                        , l = r.find("> .wrap")
                        , t = f.eq(0)
                        , e = t.width()
                        , n = t.height();
                    t.removeAttr("style").appendTo(l);
                    var c = u.find("> .layer-after")
                        , d = c.find("> .wrap")
                        , i = f.eq(1)
                        , a = i.width()
                        , t = i.height();
                    i.removeAttr("style").appendTo(d),
                        l.add(d).css({
                            width: Math.max(e, a),
                            height: Math.max(n, t),
                            "max-width": "none"
                        });
                    function o(t) {
                        var e = t.pageX;
                        void 0 === e && (e = t.originalEvent.touches[0].pageX);
                        var n = u.width()
                            , i = u[0].getBoundingClientRect().left
                            , a = l.width()
                            , o = l[0].getBoundingClientRect().left
                            , i = e - i - s;
                        r.css("width", i = n < (i = i < 0 ? 0 : i) ? n : i),
                            c.css("width", n - i),
                            l.css("right", -(n / 2 - i)),
                            d.css("left", n / 2 - i),
                            p.css("left", i),
                        (n = p[0].getBoundingClientRect().left + 2) < o && p.css("left", i + o - n),
                        o + a < n && p.css("left", i - (n - (o + a))),
                            t.stopPropagation()
                    }
                    var s = 0;
                    u.on("touchstart", function(t) {
                        eventX = t.originalEvent.touches[0].pageX,
                            s = g(t.target).closest(p).length ? eventX - p[0].getBoundingClientRect().left : 0,
                            g(document).on("touchmove.beforeafter", o),
                            g(document).one("touchend", function() {
                                g(document).off("touchmove.beforeafter")
                            }),
                            t.preventDefault(),
                            t.stopPropagation()
                    }),
                        "hover" === u.data("trigger") ? (u.on("mousemove", o),
                            u.on("mousedown", function(t) {
                                t.preventDefault()
                            })) : "drag" === u.data("trigger") && u.on("mousedown", function(t) {
                            s = g(t.target).closest(p).length ? t.pageX - p[0].getBoundingClientRect().left : 0,
                                g(document).on("mousemove.beforeafter", o),
                                g(document).one("mouseup", function() {
                                    g(document).off("mousemove.beforeafter")
                                }),
                                t.preventDefault(),
                                t.stopPropagation()
                        })
                }))
            })
        }),
        creatium.init.local(function(t) {
            t.find(".widget-button").each(function() {
                var t = g(this)
                    , e = t.find("button").filter(function() {
                    return g(this).closest(".widget-button")[0] === t[0]
                });
                e.is('[data-action="slideprev"]') && e.click(function() {
                    t.closest(".widget-slider, .widget-tabs, .widget-form2, .section-slider").trigger("slideprev")
                }),
                e.is('[data-action="slidenext"]') && e.click(function() {
                    t.closest(".widget-slider, .widget-tabs, .widget-form2, .section-slider").trigger("slidenext")
                })
            })
        }),
        creatium.init.local(function(t) {
            t.find(".widget-cart").each(function() {
                var t = g(this)
                    , e = t.find(".js-cart-full").first()
                    , n = t.find(".js-cart-empty").first()
                    , t = (0 === creatium.cart.list.length ? e.hide() : n.hide(),
                        function() {
                            0 === creatium.cart.list.length ? (n.show(),
                                e.hide()) : (e.show(),
                                n.hide())
                        }
                );
                t(),
                    g(creatium).on("cart-change", t)
            })
        }),
        creatium.init.local(function(t) {
            t.find(".widget-cart-button").each(function() {
                function t() {
                    var e = 0;
                    _.each(creatium.cart.list, function(t) {
                        t = +_.filter(t, {
                            type: "amount"
                        })[0].value;
                        e += t
                    }),
                        n.find(".btn *").each(function() {
                            g(this).contents().each(function() {
                                3 === this.nodeType && this.data.match(/\d/) && (this.data = this.data.replace(/\d+/, e))
                            })
                        })
                }
                var n = g(this);
                t(),
                    g(creatium).on("cart-change", t)
            })
        }),
        creatium.init.local(function(t) {
            t.find(".widget-cart-list").each(function() {
                var l = g(this)
                    , t = l.children("script")
                    , c = t.text().replace(/<\/_script>/g, "<\/script>");
                t.remove();
                t = function() {
                    var r = l.children(".cont");
                    creatium.cart.list.forEach(function(e) {
                        var t = _.filter(e, {
                            type: "title"
                        })[0]
                            , n = _.filter(e, {
                            type: "price"
                        })[0]
                            , i = _.filter(e, {
                            type: "amount"
                        })[0]
                            , a = _.filter(e, {
                            type: "photo"
                        })[0]
                            , o = r.filter(function() {
                            return g(this).data("item") === e
                        });
                        o.length ? (o.find('[data-role="setamount"]').val(i.value),
                            o.find('[data-role="itemprice"]').html(n.value)) : (o = g(c),
                            l.append(o),
                            o.data("item", e),
                            o.find('[data-role="setamount"]').val(i.value),
                            o.find('[data-role="itemprice"]').html(n.value),
                            o.find('[data-role="itemname"]').html(t.value),
                            o.find('[data-role="itemphoto"]').attr("data-lazy-bgimage", a.value || "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"),
                            o.find('[data-role="removefromcart"]').on("click", function() {
                                creatium.cart.remove(e)
                            }),
                            o.find('[data-role="setamount"]').on("change", function() {
                                var t = +g(this).val();
                                creatium.cart.setAmount(e, t)
                            }),
                            o.find('[data-role="increaseamount"]').on("click", function() {
                                var t = i.value + 1;
                                creatium.cart.setAmount(e, t)
                            }),
                            o.find('[data-role="decreaseamount"]').on("click", function() {
                                var t = i.value - 1;
                                creatium.cart.setAmount(e, t)
                            }),
                            console.time("cart add trigger"),
                            creatium.init.trigger(o[0]),
                            console.timeEnd("cart add trigger"))
                    }),
                        r.each(function() {
                            var t = g(this)
                                , e = t.data("item");
                            creatium.cart.list.indexOf(e) < 0 && t.slideUp(250, function() {
                                t.remove()
                            })
                        })
                }
                ;
                setTimeout(t, 10),
                    g(creatium).on("cart-change", t)
            })
        }),
        creatium.init.local(function(t) {
            t.find(".widget-cart-total").each(function() {
                function t() {
                    var n, t, i = 0;
                    _.each(creatium.cart.list, function(t) {
                        var e = +_.filter(t, {
                            type: "amount"
                        })[0].value
                            , t = _.filter(t, {
                            type: "price"
                        })[0].value;
                        i += creatium.cart.getPrice(t) * e,
                            n = n || creatium.cart.getCurrency(t)
                    }),
                        t = creatium.cart.list.length ? n.replace("%s%", i) : "-",
                        e.find('[data-role="carttotal"] span').html(t)
                }
                var e = g(this);
                t(),
                    g(creatium).on("cart-change", t)
            })
        }),
        creatium.init.local(function(t) {
            t.find(".widget-cms-table").each(function() {
                var i = g(this).find(".cms-table-root")
                    , a = i.data("table")
                    , o = i.data("template");
                g.ajax(creatium.origin + "/app/cms/0.2/getAll", {
                    type: "POST",
                    data: {},
                    dataType: "json",
                    contentType: "application/json",
                    success: function(e, t, n) {
                        console.log("CMS: getAll success", e);
                        try {
                            i.html(_.template(o, _.find(e.tables, {
                                name: a
                            })))
                        } catch (t) {
                            console.error("CMS: template error", t);
                            e = g('<div class="alert alert-danger" style="margin: 0;"></div>');
                            e.html(t.toString()),
                                i.empty().append(e)
                        }
                    },
                    error: function(t, e, n) {
                        console.log("CMS: getAll error", t);
                        t = g('<div class="alert alert-danger" style="margin: 0;"></div>');
                        t.html("Cannot read data from server"),
                            i.empty().append(t)
                    }
                })
            })
        }),
        creatium.init.local(function(t) {
            t.find(".widget-comments-fb").each(function() {
                var t, e, n = g(this).find(".fb");
                n.length && (t = "true" === n.attr("data-joint"),
                    e = "http://" + location.host.replace(/^www\./, ""),
                t || (e += "/" + location.pathname),
                    n.attr("data-href", e),
                    n.attr("data-width", n.width()),
                    g("head").append('<meta property="fb:app_id" content="' + n.data("apiid") + '"/>'),
                    g('<div id="fb-root"></div>').appendTo("body"),
                    t = document,
                    e = "facebook-jssdk",
                    n = t.getElementsByTagName("script")[0],
                t.getElementById(e) || ((t = t.createElement("script")).id = e,
                    t.src = "//connect.facebook.net/ru_RU/sdk.js#xfbml=1&version=v2.8",
                    n.parentNode.insertBefore(t, n)))
            })
        });
    var o, e, r;
    function s(t) {
        return 0 < t ? t - 1 : 0 === t ? 6 : void 0
    }
    creatium.init.local(function(t) {
        t.find(".widget-comments-vk").each(function() {
            var t, e, n, i = g(this).find(".vk");
            i.length && i.data("apiid") && (t = _.uniqueId("vk_comments"),
                i.attr("id", t),
                n = "true" === i.attr("data-joint"),
                e = 1,
            n || (n = location.host.replace(/^www\./, "") + "/" + location.pathname,
                e = _.reduce(n, function(t, e, n) {
                    return t + e.charCodeAt() * Math.pow(n + 5, 5)
                }, n.length)),
                g.getScript("//vk.com/js/api/openapi.js?112", function() {
                    VK.init({
                        apiId: i.data("apiid"),
                        onlyWidgets: !0
                    }),
                        VK.Widgets.Comments(t, {
                            limit: 5,
                            width: i.width(),
                            attach: "*"
                        }, e)
                }))
        })
    }),
        creatium.init.local(function(t) {
            t.find(".widget-countdown").each(function() {
                var e = g(this);
                e.children(".metahtml").show();
                var n, t, i = e.find("[cr-countdown-root]"), a = i.data("vals"), o = i.data("variables") || {}, i = new Date;
                "full" === a.type ? (a.full_date.day++,
                    n = new Date(a.full_date.year,a.full_date.month,a.full_date.day,a.full_time.hour,a.full_time.minute)) : "month" === a.type ? (a.month_day++,
                (n = new Date(i.getFullYear(),i.getMonth(),a.month_day,a.month_time.hour,a.month_time.minute)).getTime() < i.getTime() && (n = new Date(i.getFullYear(),i.getMonth() + 1,a.month_day,a.month_time.hour,a.month_time.minute))) : "week" === a.type ? (t = a.week_day - s(i.getDay()),
                (n = new Date(i.getFullYear(),i.getMonth(),i.getDate() + t,a.week_time.hour,a.week_time.minute)).getTime() < i.getTime() && (t = 7 - s(i.getDay()) + a.week_day,
                    n = new Date(i.getFullYear(),i.getMonth(),i.getDate() + t,a.week_time.hour,a.week_time.minute))) : "day" === a.type ? (n = new Date(i.getFullYear(),i.getMonth(),i.getDate(),a.day_time.hour,a.day_time.minute)).getTime() < i.getTime() && (n = new Date(i.getFullYear(),i.getMonth(),i.getDate() + 1,a.day_time.hour,a.day_time.minute)) : "fake" === a.type && (t = [a.fake_days, a.fake_time.hour, a.fake_time.minute].join(":"),
                    creatium.store.get(t) ? n = new Date(creatium.store.get(t)) : (n = new Date(i.getFullYear(),i.getMonth(),i.getDate() + a.fake_days,i.getHours() + a.fake_time.hour,i.getMinutes() + a.fake_time.minute),
                        creatium.store.set(t, n.getTime())));
                var r = "fake" === a.type || "default" === a.timezone ? null : a.timezone;
                "show_element" === a.action.type && g("#" + a.action.element_id).hide();
                function l() {
                    e.data("api-expired") || (d(_.extend(o, c(n, r))),
                        e.triggerHandler("api-tick"),
                    n < new Date && ("message" === a.action.type && creatium["msg_" + a.action.message.type](a.action.message.title, a.action.message.text),
                    "redirect" === a.action.type && a.action.url && (location.href = a.action.url),
                    "show_element" === a.action.type && g("#" + a.action.element_id).show(),
                    "hide_element" === a.action.type && g("#" + a.action.element_id).hide(),
                    "show_popup" === a.action.type && creatium.modals.show(e.find(".modal").filter(function() {
                        return g(this).closest(".node")[0] === e[0]
                    })),
                    !0 !== e.data("api-expired") && (e.data("api-expired", !0),
                        e.triggerHandler("api-expiry"))))
                }
                var c = keithWoodCountdown(window.creatium.lang)
                    , d = creatium.watchDom(e[0]);
                l(),
                    creatium.syncInterval(l, 1e3),
                    e.data("api-until", c.getUntil()),
                    e.data("api-setUntil", function(t) {
                        (n = new Date(t)).getTime() < (new Date).getTime() || (r = null,
                            e.data("api-until", n),
                            e.data("api-expired", !1),
                            l())
                    })
            })
        }),
        creatium.init.local(function(t) {
            t.find(".widget-defer").each(function() {
                var t = g(this);
                setTimeout(function() {
                    t.show()
                }, 1e3 * t.data("timeout"))
            })
        }),
        creatium.init.global(function() {
            creatium.syncInterval(function() {
                var t = g(document.activeElement).closest(".widget-field");
                t.length && t.find("input").triggerHandler("input")
            }, 250)
        }),
        creatium.init.local(function(t) {
            creatium.lazy.add(t.find(".widget-field"), function(r) {
                var e, n, i, t, a, o, l, c, d = r.closest("[data-form]"), s = r.find(".metahtml").first().data("vals"), u = [];
                r.find("[data-item-text][data-item-value]").each(function() {
                    u.push({
                        text: g(this).attr("data-item-text"),
                        value: +g(this).attr("data-item-value") || 0
                    })
                }),
                s && (r.find(".is-text").each(function() {
                    var t = g(this);
                    t.find("input, textarea").on("input", function() {
                        g(this).val().length ? t.hasClass("is-filled") || t.addClass("is-filled") : t.hasClass("is-filled") && t.removeClass("is-filled")
                    })
                }),
                0 <= ["name", "phone", "email", "count", "text", "password", "hidden"].indexOf(s.type) && (i = r.find("input").val(),
                    d.on("reset", function() {
                        r.find("input").val(i)
                    }),
                    r.data("api-setValue", function(t) {
                        r.find("input").val(t)
                    }),
                r.is("[data-prefill]") && (i = r.attr("data-prefill"),
                    r.data("api-setValue")(i))),
                "textarea" === s.type && (i = r.find("textarea").val(),
                    d.on("reset", function() {
                        r.find("textarea").val(i)
                    }),
                    r.data("api-setValue", function(t) {
                        r.find("textarea").val(t)
                    }),
                r.is("[data-prefill]") && (i = r.attr("data-prefill"),
                    r.data("api-setValue")(i))),
                "hackable" === s.type && (i = r.find("[cr-field]").attr("data-value"),
                    d.on("reset", function() {
                        r.find("[cr-field]").attr("data-value", i)
                    }),
                    e = r.find("[cr-field]").attr("data-type"),
                    r.data("api-setValue", function(t) {
                        t = t.toString(),
                            "number" === e ? t = +t || 0 : "boolean" === e && (t = "1" === t || "true" === t),
                            r.find("[cr-field]").attr("data-value", t)
                    }),
                r.is("[data-prefill]") && (i = r.attr("data-prefill"),
                    r.data("api-setValue")(i))),
                "checkbox-list" !== s.type && "checkbox-visual" !== s.type || (i = _.map(r.find("input"), function(t) {
                    return g(t).prop("checked")
                }),
                    d.on("reset", function() {
                        r.find("input").each(function(t) {
                            g(this).prop("checked", i[t])
                        })
                    }),
                    r.data("api-setValue", function(e) {
                        r.find("input").each(function(t) {
                            t = u[t];
                            void 0 !== e[t.text] && g(this).prop("checked", e[t.text])
                        })
                    }),
                r.is("[data-prefill]") && (n = {},
                    r.attr("data-prefill").split(",").forEach(function(t) {
                        n[t.trim()] = !0
                    }),
                    r.data("api-setValue")(n),
                    i = _.map(r.find("input"), function(t) {
                        return g(t).prop("checked")
                    }))),
                "checkbox-input" === s.type && (i = r.find("input").prop("checked"),
                    d.on("reset", function() {
                        r.find("input").prop("checked", i)
                    }),
                    r.data("api-setValue", function(t) {
                        r.find("input").prop("checked", t)
                    }),
                r.is("[data-prefill]") && (i = "0" !== r.attr("data-prefill"),
                    r.data("api-setValue")(i))),
                "privacy-checkbox" === s.type && (i = r.find("input").prop("checked"),
                    d.on("reset", function() {
                        r.find("input").prop("checked", i)
                    }),
                    r.data("api-setValue", function(t) {
                        r.find("input").prop("checked", t)
                    })),
                "radio-list" !== s.type && "radio-visual" !== s.type || (i = _.map(r.find("input"), function(t) {
                    return g(t).prop("checked")
                }),
                    d.on("reset", function() {
                        r.find("input").each(function(t) {
                            g(this).prop("checked", i[t])
                        })
                    }),
                    r.on("change", function(t) {
                        r.find("input").filter(function() {
                            return this !== t.target
                        }).prop("checked", !1)
                    }),
                    r.data("api-setValue", function(e) {
                        r.find("input").prop("checked", !1),
                            r.find("input").each(function(t) {
                                u[t].text === e && g(this).prop("checked", !0)
                            })
                    }),
                r.is("[data-prefill]") && (r.data("api-setValue")(r.attr("data-prefill")),
                    i = _.map(r.find("input"), function(t) {
                        return g(t).prop("checked")
                    }))),
                "select-menu" === s.type && (r.find("select option").eq(0).attr("value", ""),
                    r.find("select option").slice(1).each(function(t) {
                        g(this).attr("value", t)
                    }),
                    i = r.find("select").val(),
                    d.on("reset", function() {
                        r.find("select").val(i),
                            r.triggerHandler("change")
                    }),
                    r.on("change", function(t) {
                        r.find("[cr-field_value]").text(r.find("select option:selected").text())
                    }),
                    r.data("api-setValue", function(t) {
                        t ? (t = _.find(u, {
                            text: t
                        }),
                            0 <= (t = u.indexOf(t)) ? r.find("select").val(t) : r.find("select").val("")) : r.find("select").val(""),
                            r.triggerHandler("change")
                    }),
                r.is("[data-prefill]") && (r.data("api-setValue")(r.attr("data-prefill")),
                    i = r.find("select").val())),
                "slider" === s.type && ((t = r.find("[cr-field-input]")).find("style").insertAfter(t),
                    t.empty(),
                    i = +t.attr("value") || 0,
                    a = g("<input>").val(i).appendTo(t),
                    o = {
                        force_edges: !0,
                        min: s.min,
                        max: s.max,
                        step: s.step,
                        from: i
                    },
                    window.requestAnimationFrame(function t() {
                        return g.fn.ionRangeSlider ? (a.ionRangeSlider(o),
                            void (r.is("[data-prefill]") && (i = +r.attr("data-prefill") || 0,
                                r.data("api-setValue")(i)))) : setTimeout(t, 50)
                    }),
                    d.on("reset", function() {
                        a.data("ionRangeSlider").update(o)
                    }),
                    r.data("api-setValue", function(t) {
                        var e = _.clone(o);
                        e.from = t,
                            a.data("ionRangeSlider").update(e)
                    })),
                "file" === s.type && ((l = r.find("[cr-field_state]")).data("original-html", l.html()),
                    (c = r.find("[cr-field_clean]")).hide(),
                    c.on("click", function() {
                        r.find(":file").val(""),
                            l.html(l.data("original-html")),
                            r.data("result", null),
                            c.hide()
                    }),
                    d.on("reset", function() {
                        r.is("[data-prefill]") ? r.data("api-setValue")([r.attr("data-prefill")]) : c.click()
                    }),
                    r.on("change", function t(e) {
                        if (!g.fn.ajaxSubmit)
                            return setTimeout(function() {
                                t(e)
                            }, 50);
                        e.stopPropagation();
                        var a, n, i = r.find(":file"), o = i.val().match(/.+[\/\\](.+)/);
                        o && (a = o[1],
                            i.clone().insertAfter(i),
                            n = g("<form>").attr({
                                action: creatium.origin + "/app/" + creatium.VERSION + "/file",
                                method: "POST",
                                enctype: "multipart/form-data"
                            }),
                            o = g("<input>").attr({
                                type: "hidden",
                                name: "ImageUploadForm[page]",
                                value: creatium.page_id
                            }),
                            n.append(i),
                            n.append(o),
                            n.appendTo("body").hide(),
                            n.ajaxSubmit({
                                dataType: "json",
                                beforeSend: function() {
                                    return l.text(a + " (0%)")
                                },
                                uploadProgress: function(t, e, n, i) {
                                    return l.text(a + " (" + i + "%)")
                                },
                                success: function(t) {
                                    r.data("result", t),
                                        l.text(a),
                                        c.show(),
                                        d.trigger("change"),
                                        n.remove()
                                },
                                error: function(t) {
                                    creatium.msg_error(creatium.l10n("Ошибка загрузки!"), 400 === t.status ? t.responseText : null),
                                        l.html(l.data("original-html")),
                                        r.data("result", null),
                                        d.trigger("change"),
                                        n.remove()
                                }
                            }))
                    }),
                    r.data("api-setValue", function(t) {
                        var e, t = t[0];
                        t && ((e = t.match(/.+[\/\\](.+)/)) || (t = null)),
                            t ? (e = e[1],
                                r.data("result", t),
                                l.text(e),
                                c.show()) : (l.html(l.data("original-html")),
                                r.data("result", null))
                    }),
                r.is("[data-prefill]") && r.data("api-setValue")([r.attr("data-prefill")])))
            })
        }),
        creatium.async.ready(function() {
            creatium.init.local(function(t) {
                creatium.lazy.then(t.find(".widget-form2"), function(e) {
                    var n, t = e.find(".swiper-container").filter(function() {
                        return g(this).closest(".widget")[0] === e[0]
                    });
                    t.length && (n = new Swiper(t.get(0),{
                        autoHeight: "false" === t.attr("data-fixheight"),
                        autoplay: !1,
                        allowTouchMove: !1,
                        effect: "true" === t.attr("data-animated") ? "slide" : "fade",
                        fadeEffect: {
                            crossFade: !0
                        },
                        touchEventsTarget: "container",
                        mousewheelEventsTarged: "container",
                        preventClicks: !1,
                        on: {
                            slideChangeTransitionStart: function() {
                                e.trigger("change")
                            }
                        }
                    }),
                        e.data("api-swiper", n),
                    e.closest(".modal").length && e.closest(".modal").on("shown.bs.modal", function() {
                        n.update(),
                            e.trigger("change")
                    }),
                        e.on("slidenext", function(t) {
                            e.trigger("validate", [function() {
                                n.slideNext()
                            }
                            ]),
                                t.stopPropagation()
                        }),
                        e.on("slideprev", function(t) {
                            n.slidePrev(),
                                t.stopPropagation()
                        }),
                        creatium.lazy.add(e, function() {
                            n.update()
                        }),
                        e.find(".lazy").on("lazyload", _.throttle(function() {
                            n.update()
                        }, 500)),
                    n.params.autoHeight && creatium.syncInterval(function() {
                        !n.animating && n.slides.length && n.wrapperEl.clientHeight !== n.slides[n.activeIndex].clientHeight && n.update()
                    }, 40))
                })
            })
        }),
        creatium.init.local(function(t) {
            t.find(".widget-hamburger").each(function() {
                function t() {
                    return g(this).closest(".widget-hamburger")[0] === e[0]
                }
                var e = g(this)
                    , n = e.find("[cr-hamburger-toggle]").filter(t)
                    , i = e.find("[cr-hamburger-menu]").filter(t);
                i.hasClass("is-collapsed") && creatium.lazy.add(e, function(t) {
                    i.show(),
                        creatium.lazy.force(i),
                        i.hide()
                }),
                    n.on("click", function() {
                        i.is(":animated") || (n.toggleClass("is-collapsed"),
                            i.toggleClass("is-collapsed"),
                            n.toggleClass("is-expanded"),
                            i.toggleClass("is-expanded"),
                            a ? i.toggle() : i.slideToggle())
                    });
                var a = !1;
                g(creatium).on("before-scroll-to", function() {
                    i.hasClass("is-expanded") && (a = !0,
                        n.click())
                }),
                    g(creatium).on("after-scroll-to", function() {
                        a && (n.click(),
                            a = !1,
                            n.click())
                    })
            })
        }),
        creatium.init.local(function(t) {
            t.find(".widget-hover").each(function() {
                var e = g(this)
                    , n = e.find("[cr-hover]").filter(function() {
                    return g(this).closest(".widget-hover")[0] === e[0]
                });
                n.on("mouseenter", function(t) {
                    g(t.relatedTarget).closest(n).length || (n.addClass("hover"),
                        n.addClass("animated"),
                        e.triggerHandler("api-before-over"),
                        setTimeout(function() {
                            n.removeClass("animated"),
                                e.triggerHandler("api-over")
                        }, n.data("duration")))
                }),
                    n.on("mouseleave", function(t) {
                        g(t.relatedTarget).closest(n).length || (n.removeClass("hover"),
                            n.addClass("animated"),
                            e.triggerHandler("api-before-out"),
                            setTimeout(function() {
                                n.removeClass("animated"),
                                    e.triggerHandler("api-out")
                            }, n.data("duration")))
                    })
            })
        }),
        creatium.init.global(function() {
            g(".widget-html .code[data-html]").each(function() {
                var t = g(this);
                creatium.lazy.add(t, function(t) {
                    t.html(t.data("html")),
                        t.removeAttr("data-html")
                })
            })
        }),
        creatium.init.local(function t(e) {
            return window.stackEffects ? void e.find(".widget-image").each(function() {
                g(this).find(".stack-image-content").each(function() {
                    var t = g(this)
                        , e = t.attr("stack_hover_effect");
                    return e && (e = JSON.parse(e),
                        stackEffects.getInstance(e.effectType, t.get(0), {
                            effectType: e.effectType,
                            disableScale: e.disableScale,
                            style: e.style
                        })),
                        t.removeAttr("stack_hover_effect")
                })
            }) : setTimeout(function() {
                t(e)
            }, 50)
        }),
        creatium.init.local(function(t) {
            t.find(".widget-increasingdigits").each(function() {
                var n = new RegExp("([0-9]+)","g")
                    , t = g(this).find(".digits")
                    , i = 1e3 * parseFloat(t.attr("data-animation-duration")) || 0;
                t.find("*").andSelf().each(function() {
                    g(this).contents().filter(function() {
                        return 3 === this.nodeType
                    }).each(function() {
                        var t = g(this).parent()
                            , e = this.textContent.replace(n, "<span class='digits-wrapper'>$1</span>");
                        g(this).replaceWith(e),
                            t.find(".digits-wrapper").each(function() {
                                g(this).data("data-number", g(this).text()).text("0")
                            })
                    })
                }),
                    creatium.lazy.add(g(this), function t(e) {
                        return g.fn.animateNumber ? void e.find(".digits-wrapper").each(function() {
                            g(this).animateNumber({
                                number: g(this).data("data-number")
                            }, i)
                        }) : setTimeout(function() {
                            t(e)
                        }, 50)
                    })
            })
        }),
        creatium.init.local(function(t) {
            t.find(".widget-list").each(function() {
                var e = g(this);
                e.find(".lazy-loader").one("lazyload", function() {
                    var t = g(this).attr("src");
                    e.find("li").css("background-image", 'url("' + t + '")')
                })
            })
        }),
        creatium.init.local(function(t) {
            t.find(".widget-pagination").each(function() {
                g(this).find('[href="#"]').on("click", function(t) {
                    t.preventDefault()
                })
            })
        }),
        creatium.init.local(function(t) {
            t.find(".widget-slide-share").each(function() {
                var t = g(this).find(".slide")
                    , e = t.attr("data-iframe-string");
                e && (!(e = e.match(/.*?src="(.*?)"/)) || (e = e[1]) && t.append('<iframe class="slide-share" src=' + e + " allowfullscreen></iframe>"))
            })
        }),
        creatium.async.ready(function() {
            creatium.init.local(function(t) {
                creatium.lazy.add(t.find(".widget-slider"), function(t) {
                    function e() {
                        return g(this).closest(".widget")[0] === t[0]
                    }
                    var n = t.find(".swiper-container").filter(e)
                        , i = t.find("[cr-slider-next]").filter(e)
                        , a = t.find("[cr-slider-previous]").filter(e)
                        , o = t.find("[cr-slider-page]").filter(e)
                        , r = t.find("[cr-slider-index]").filter(e)
                        , l = n.data()
                        , c = t.find("[cr-slider-page_icon]").filter(e).filter(function() {
                        return 1 < g(this).find(">.svgwrap").length
                    });
                    c.find(">.svgwrap").addClass("hidden");
                    var d = t.find("[cr-slider-page_label]").filter(e).filter(function() {
                        return 1 < g(this).find(">.textable").length
                    });
                    d.find(">.textable").addClass("hidden");
                    var s = new Swiper(n.get(0),{
                        nested: t.closest(".swiper-container").length,
                        autoHeight: !1 === l.fixheight,
                        autoplay: !!l.auto && {
                            delay: l.pause,
                            stopOnLastSlide: !l.loop
                        },
                        allowTouchMove: l.touch,
                        effect: l.animated ? "slide" : "fade",
                        fadeEffect: {
                            crossFade: !0
                        },
                        touchEventsTarget: "container",
                        mousewheelEventsTarged: "container",
                        on: {
                            slideChange: function() {
                                o.filter(".is-active").removeClass("is-active"),
                                    o.eq(s.activeIndex).addClass("is-active"),
                                    u(s.oldActiveIndex, s.activeIndex),
                                    f(s.oldActiveIndex, s.activeIndex),
                                    p(s.oldActiveIndex, s.activeIndex),
                                    r.text(s.activeIndex + 1),
                                    s.oldActiveIndex = s.activeIndex
                            }
                        }
                    });
                    function u(e, n) {
                        c.each(function() {
                            var t = g(this).children(".svgwrap");
                            t.eq(e).addClass("hidden"),
                                t.eq(n).removeClass("hidden")
                        })
                    }
                    function f(e, n) {
                        c.each(function() {
                            var t = g(this).children();
                            t.eq(e).addClass("hidden"),
                                t.eq(n).removeClass("hidden")
                        })
                    }
                    function p(e, n) {
                        d.each(function() {
                            var t = g(this).children(".textable");
                            t.eq(e).addClass("hidden"),
                                t.eq(n).removeClass("hidden")
                        })
                    }
                    t.data("api-swiper", s),
                        s._params = l,
                        s.oldActiveIndex = s.activeIndex,
                        u(s.oldActiveIndex, s.activeIndex),
                        f(s.oldActiveIndex, s.activeIndex),
                        p(s.oldActiveIndex, s.activeIndex),
                        t.on("slidenext", function(t) {
                            s.isEnd && l.loop ? s.slideTo(0) : s.slideNext()
                        }),
                        i.on("click", function() {
                            t.triggerHandler("slidenext")
                        }),
                        t.on("slideprev", function(t) {
                            s.isBeginning && l.loop ? s.slideTo(s.slides.length - 1) : s.slidePrev()
                        }),
                        a.on("click", function() {
                            t.triggerHandler("slideprev")
                        }),
                        o.on("click", function() {
                            s.slideTo(g(this).index())
                        }),
                        t.find(".lazy").on("lazyload", _.throttle(function() {
                            s.update()
                        }, 500)),
                    s.params.autoHeight && creatium.syncInterval(function() {
                        !s.animating && s.slides.length && s.wrapperEl.clientHeight !== s.slides[s.activeIndex].clientHeight && s.update()
                    }, 40)
                })
            })
        }),
        creatium.init.local(function(t) {
            creatium.lazy.add(t.find(".widget-slider-gallery"), function t(e) {
                if (!window.Swiper)
                    return setTimeout(function() {
                        t(e)
                    }, 50);
                var n = function() {
                    return g(this).closest(".widget")[0] === e[0]
                }
                    , i = e.find(".swiper-container").filter(n)
                    , a = e.find("[cr-slider-next]").filter(n)
                    , o = e.find("[cr-slider-previous]").filter(n)
                    , r = e.find("[cr-slider-page]").filter(n)
                    , l = e.find("[cr-slider-index]").filter(n)
                    , n = i.data()
                    , c = new Swiper(i.get(0),{
                    nested: e.closest(".swiper-container").length,
                    autoHeight: !1 === n.fixheight,
                    autoplay: !!n.auto && {
                        delay: n.pause,
                        stopOnLastSlide: !n.loop
                    },
                    allowTouchMove: n.touch,
                    effect: n.animated ? "slide" : "fade",
                    fadeEffect: {
                        crossFade: !0
                    },
                    touchEventsTarget: "container",
                    mousewheelEventsTarged: "container",
                    on: {
                        slideChange: function() {
                            r.filter(".is-active").removeClass("is-active"),
                                r.eq(c.activeIndex).addClass("is-active"),
                                l.text(c.activeIndex + 1),
                                c.oldActiveIndex = c.activeIndex
                        }
                    }
                });
                e.data("api-swiper", c),
                    c._params = n,
                    c.oldActiveIndex = c.activeIndex,
                    e.on("slidenext", function(t) {
                        c.isEnd ? c.slideTo(0) : c.slideNext()
                    }),
                    a.on("click", function() {
                        e.triggerHandler("slidenext")
                    }),
                    e.on("slideprev", function(t) {
                        c.isBeginning ? c.slideTo(c.slides.length - 1) : c.slidePrev()
                    }),
                    o.on("click", function() {
                        e.triggerHandler("slideprev")
                    }),
                    r.on("click", function() {
                        c.slideTo(g(this).index())
                    }),
                    creatium.lazy.add(e, function() {
                        c.update()
                    }),
                    e.find(".lazy").on("lazyload", function() {
                        c.update()
                    })
            })
        }),
        o = jQuery,
        e = window,
        r = document,
        o(r).ready(function() {
            var i = o('meta[property="og:description"]').attr("content") || ""
                , a = o('meta[property="og:image"]').attr("content") || "";
            goodshare = {
                init: function(t, e) {
                    var n = goodshare
                        , e = o.extend({
                        type: "vk",
                        url: location.href,
                        title: r.title,
                        text: i,
                        image: a
                    }, o(t).data(), e);
                    if (null !== n.popup(link = n[e.type](e)))
                        return !1
                },
                vk: function(t) {
                    t = o.extend({
                        url: location.href,
                        title: r.title,
                        text: i,
                        image: a
                    }, t);
                    return "http://vk.com/share.php?url=" + encodeURIComponent(t.url) + "&title=" + encodeURIComponent(t.title) + "&description=" + encodeURIComponent(t.text) + "&image=" + encodeURIComponent(t.image)
                },
                ok: function(t) {
                    t = o.extend({
                        url: location.href,
                        title: r.title
                    }, t);
                    return "http://www.odnoklassniki.ru/dk?st.cmd=addShare&st.s=1&st.comments=" + encodeURIComponent(t.title) + "&st._surl=" + encodeURIComponent(t.url)
                },
                fb: function(t) {
                    t = o.extend({
                        url: location.href,
                        title: r.title
                    }, t);
                    return "https://facebook.com/sharer/sharer.php?u=" + encodeURIComponent(t.url)
                },
                lj: function(t) {
                    t = o.extend({
                        url: location.href,
                        title: r.title,
                        text: i
                    }, t);
                    return "http://livejournal.com/update.bml?subject=" + encodeURIComponent(t.title) + "&event=" + encodeURIComponent('<a href="' + t.url + '">' + t.title + "</a> " + t.text)
                },
                tw: function(t) {
                    t = o.extend({
                        url: location.href,
                        title: r.title
                    }, t);
                    return "http://twitter.com/share?url=" + encodeURIComponent(t.url) + "&text=" + encodeURIComponent(t.title)
                },
                gp: function(t) {
                    t = o.extend({
                        url: location.href
                    }, t);
                    return "https://plus.google.com/share?url=" + encodeURIComponent(t.url)
                },
                mr: function(t) {
                    t = o.extend({
                        url: location.href,
                        title: r.title,
                        text: i,
                        image: a
                    }, t);
                    return "http://connect.mail.ru/share?url=" + encodeURIComponent(t.url) + "&title=" + encodeURIComponent(t.title) + "&description=" + encodeURIComponent(t.text) + "&imageurl=" + encodeURIComponent(t.image)
                },
                li: function(t) {
                    t = o.extend({
                        url: location.href,
                        title: r.title,
                        text: i
                    }, t);
                    return "http://www.linkedin.com/shareArticle?url=" + encodeURIComponent(t.url) + "&text=" + encodeURIComponent(t.title) + "&summary=" + encodeURIComponent(t.text) + "&mini=true"
                },
                tm: function(t) {
                    t = o.extend({
                        url: location.href,
                        title: r.title,
                        text: i
                    }, t);
                    return "https://www.tumblr.com/widgets/share/tool?canonicalUrl=" + encodeURIComponent(t.url) + "&title=" + encodeURIComponent(t.title) + "&caption=" + encodeURIComponent(t.text) + "&posttype=link"
                },
                bl: function(t) {
                    t = o.extend({
                        url: location.href,
                        title: r.title
                    }, t);
                    return "https://www.blogger.com/blog-this.g?u=" + encodeURIComponent(t.url) + "&n=" + encodeURIComponent(t.title)
                },
                pt: function(t) {
                    t = o.extend({
                        url: location.href,
                        title: r.title,
                        image: o('meta[property="og:image"]').attr("content")
                    }, t);
                    return "https://www.pinterest.com/pin/create/button/?url=" + encodeURIComponent(t.url) + "&media=" + encodeURIComponent(t.image) + "&description=" + encodeURIComponent(t.title)
                },
                en: function(t) {
                    t = o.extend({
                        url: location.href,
                        title: r.title,
                        text: i
                    }, t);
                    return "https://www.evernote.com/clip.action?url=" + encodeURIComponent(t.url) + "&title=" + encodeURIComponent(t.title) + "&body=" + encodeURIComponent(t.text + '<br/><a href="' + t.url + '">' + t.title + "</a>")
                },
                di: function(t) {
                    t = o.extend({
                        url: location.href,
                        title: r.title
                    }, t);
                    return "http://digg.com/submit?url=" + encodeURIComponent(t.url) + "&title=" + encodeURIComponent(t.title)
                },
                rd: function(t) {
                    t = o.extend({
                        url: location.href,
                        title: r.title
                    }, t);
                    return "http://www.reddit.com/submit?url=" + encodeURIComponent(t.url) + "&title=" + encodeURIComponent(t.title)
                },
                de: function(t) {
                    t = o.extend({
                        url: location.href,
                        title: r.title
                    }, t);
                    return "https://delicious.com/save?url=" + encodeURIComponent(t.url) + "&title=" + encodeURIComponent(t.title)
                },
                su: function(t) {
                    t = o.extend({
                        url: location.href,
                        title: r.title
                    }, t);
                    return "http://www.stumbleupon.com/submit?url=" + encodeURIComponent(t.url) + "&title=" + encodeURIComponent(t.title)
                },
                po: function(t) {
                    t = o.extend({
                        url: location.href,
                        title: r.title
                    }, t);
                    return "https://getpocket.com/save?url=" + encodeURIComponent(t.url) + "&title=" + encodeURIComponent(t.title)
                },
                sb: function(t) {
                    t = o.extend({
                        url: location.href,
                        title: r.title,
                        text: i
                    }, t);
                    return "http://surfingbird.ru/share?url=" + encodeURIComponent(t.url) + "&title=" + encodeURIComponent(t.title) + "&description=" + encodeURIComponent(t.text)
                },
                lr: function(t) {
                    t = o.extend({
                        url: location.href,
                        title: r.title
                    }, t);
                    return "http://www.liveinternet.ru/journal_post.php?action=n_add&cnurl=" + encodeURIComponent(t.url) + "&cntitle=" + encodeURIComponent(t.title)
                },
                bf: function(t) {
                    t = o.extend({
                        url: location.href,
                        title: r.title
                    }, t);
                    return "https://buffer.com/add?url=" + encodeURIComponent(t.url) + "&text=" + encodeURIComponent(t.title)
                },
                ip: function(t) {
                    t = o.extend({
                        url: location.href,
                        title: r.title
                    }, t);
                    return "https://www.instapaper.com/edit?url=" + encodeURIComponent(t.url) + "&title=" + encodeURIComponent(t.title)
                },
                ra: function(t) {
                    t = o.extend({
                        url: location.href
                    }, t);
                    return "http://www.readability.com/save?url=" + encodeURIComponent(t.url)
                },
                xi: function(t) {
                    t = o.extend({
                        url: location.href
                    }, t);
                    return "https://www.xing.com/spi/shares/new?url=" + encodeURIComponent(t.url)
                },
                wp: function(t) {
                    t = o.extend({
                        url: location.href,
                        title: r.title,
                        text: i,
                        image: a
                    }, t);
                    return "https://wordpress.com/wp-admin/press-this.php?u=" + encodeURIComponent(t.url) + "&t=" + encodeURIComponent(t.title) + "&s=" + encodeURIComponent(t.text) + "&i=" + encodeURIComponent(t.image) + "&v=2"
                },
                bd: function(t) {
                    t = o.extend({
                        url: location.href,
                        title: r.title,
                        text: i
                    }, t);
                    return "http://cang.baidu.com/do/add?it=" + encodeURIComponent(t.title) + "&iu=" + encodeURIComponent(t.url) + "&dc=" + encodeURIComponent(t.text) + "&fr=ien"
                },
                rr: function(t) {
                    t = o.extend({
                        url: location.href,
                        title: r.title
                    }, t);
                    return "http://share.renren.com/share/buttonshare.do?link=" + encodeURIComponent(t.url) + "&title=" + encodeURIComponent(t.title)
                },
                wb: function(t) {
                    t = o.extend({
                        url: location.href,
                        title: r.title
                    }, t);
                    return "http://service.weibo.com/share/share.php?url=" + encodeURIComponent(t.url) + "&title=" + encodeURIComponent(t.title)
                },
                tg: function(t) {
                    t = o.extend({
                        url: location.href,
                        title: r.title
                    }, t);
                    return "tg://msg?text=" + encodeURIComponent(t.title + " " + t.url)
                },
                vi: function(t) {
                    t = o.extend({
                        url: location.href,
                        title: r.title
                    }, t);
                    return "viber://forward?text=" + encodeURIComponent(t.title + " " + t.url)
                },
                wa: function(t) {
                    t = o.extend({
                        url: location.href,
                        title: r.title
                    }, t);
                    return "whatsapp://send?text=" + encodeURIComponent(t.title + " " + t.url)
                },
                ln: function(t) {
                    t = o.extend({
                        url: location.href,
                        title: r.title
                    }, t);
                    return "line://msg/text/" + encodeURIComponent(t.title + " " + t.url)
                },
                popup: function(t) {
                    return e.open(t, "", "left=" + (screen.width - 630) / 2 + ",top=" + (screen.height - 440) / 2 + ",toolbar=0,status=0,scrollbars=0,menubar=0,location=0,width=630,height=440")
                }
            },
                o.fn.getCount = function() {
                    function i(t) {
                        return 999 < t && t <= 999999 ? t / 1e3 + "k" : 999999 < t ? ">1M" : t
                    }
                    function t(t) {
                        return 0 < o(t).length
                    }
                    t('[data-counter="vk"]') && (o.getJSON("https://vk.com/share.php?act=count&index=1&url=" + encodeURIComponent(location.href) + "&callback=?", function(t) {}),
                    e.VK || (VK = {}),
                        VK.Share = {
                            count: function(t, e) {
                                o('[data-counter="vk"]').text(i(e))
                            }
                        }),
                    t('[data-counter="fb"]') && o.getJSON("https://graph.facebook.com/?id=" + encodeURIComponent(location.href) + "&callback=?", function(t) {
                        void 0 === t.share ? o('[data-counter="fb"]').text("0") : o('[data-counter="fb"]').text(i(t.share.share_count))
                    }),
                    t('[data-counter="ok"]') && (o.getJSON("https://connect.ok.ru/dk?st.cmd=extLike&uid=1&ref=" + encodeURIComponent(location.href) + "&callback=?", function(t) {}),
                        e.ODKL || (ODKL = {}),
                            ODKL.updateCount = function(t, e) {
                                o('[data-counter="ok"]').text(i(e))
                            }
                    ),
                    t('[data-counter="gp"]') && o.ajax({
                        type: "POST",
                        url: "https://clients6.google.com/rpc",
                        processData: !0,
                        contentType: "application/json",
                        data: JSON.stringify({
                            method: "pos.plusones.get",
                            id: location.href,
                            params: {
                                nolog: !0,
                                id: location.href,
                                source: "widget",
                                userId: "@viewer",
                                groupId: "@self"
                            },
                            jsonrpc: "2.0",
                            key: "p",
                            apiVersion: "v1"
                        }),
                        success: function(t) {
                            o('[data-counter="gp"]').text(i(t.result.metadata.globalCounts.count))
                        }
                    }),
                    t('[data-counter="mr"]') && o.getJSON("https://connect.mail.ru/share_count?url_list=" + encodeURIComponent(location.href) + "&callback=1&func=?", function(t) {
                        var e = encodeURIComponent(location.href);
                        for (e in t)
                            if (t.hasOwnProperty(e)) {
                                var n = t[e].shares;
                                break
                            }
                        o.isEmptyObject(t) ? o('[data-counter="mr"]').text("0") : o('[data-counter="mr"]').text(i(n))
                    }),
                    t('[data-counter="li"]') && o.getJSON("https://www.linkedin.com/countserv/count/share?url=" + encodeURIComponent(location.href) + "&callback=?", function(t) {
                        o('[data-counter="li"]').text(i(t.count))
                    }),
                    t('[data-counter="tm"]') && o.getJSON("https://api.tumblr.com/v2/share/stats?url=" + encodeURIComponent(location.href) + "&callback=?", function(t) {
                        o('[data-counter="tm"]').text(i(t.response.note_count))
                    }),
                    t('[data-counter="pt"]') && o.getJSON("https://api.pinterest.com/v1/urls/count.json?url=" + encodeURIComponent(location.href) + "&callback=?", function(t) {
                        o('[data-counter="pt"]').text(i(t.count))
                    }),
                    t('[data-counter="rd"]') && o.getJSON("https://www.reddit.com/api/info.json?url=" + encodeURIComponent(location.href) + "&jsonp=?", function(t) {
                        t = t.data.children;
                        0 === t.length ? o('[data-counter="rd"]').text("0") : o('[data-counter="rd"]').text(i(t[0].data.score))
                    }),
                    t('[data-counter="su"]') && o.getJSON("https://query.yahooapis.com/v1/public/yql?q=" + encodeURIComponent('select * from html where url="http://www.stumbleupon.com/services/1.01/badge.getinfo?url=' + location.href + '" and xpath="*"') + "&format=json&callback=?", function(t) {
                        t = o.parseJSON(t.query.results.html.body);
                        void 0 === t.result.views ? o('[data-counter="su"]').text("0") : o('[data-counter="su"]').text(i(t.result.views))
                    }),
                    t('[data-counter="po"]') && o.getJSON("https://query.yahooapis.com/v1/public/yql?q=" + encodeURIComponent('select * from html where url="https://widgets.getpocket.com/v1/button?count=horizontal&url=' + location.href + '" and xpath="*"') + "&format=json&callback=?", function(t) {
                        o('[data-counter="po"]').text(i(t.query.results.html.body.div.a.span.em.content))
                    }),
                    t('[data-counter="bf"]') && o.getJSON("https://api.bufferapp.com/1/links/shares.json?url=" + encodeURIComponent(location.href) + "&callback=?", function(t) {
                        o('[data-counter="bf"]').text(i(t.shares))
                    }),
                    t('[data-counter="xi"]') && o.getJSON("https://query.yahooapis.com/v1/public/yql?q=" + encodeURIComponent('select * from html where url="https://www.xing-share.com/app/share?op=get_share_button;counter=top;url=' + location.href + '" and xpath="*"') + "&format=json&callback=?", function(t) {
                        o('[data-counter="xi"]').text(i(t.query.results.html.body.div[0].div[0].span.content))
                    })
                }
                ,
                o(r).on("click", ".goodshare", function(t) {
                    t.preventDefault(),
                        goodshare.init(this)
                }),
                o(r).getCount()
        }),
        creatium.init.local(function(t) {
            t.find(".widget-spoiler").each(function() {
                function t() {
                    return g(this).closest(".widget-spoiler")[0] === e[0]
                }
                var e = g(this)
                    , n = e.find("[cr-spoiler-toggle]").filter(t)
                    , i = e.find("[cr-spoiler-container]").filter(t);
                i.hasClass("is-collapsed") && creatium.lazy.add(e, function(t) {
                    i.show(),
                        creatium.lazy.force(i),
                        i.hide()
                }),
                    e.data("api-isCollapsed", i.hasClass("is-collapsed")),
                    e.on("toggle", function(t) {
                        t.stopPropagation(),
                            e.triggerHandler("api-before-toggle"),
                            e.data("api-prevent") ? e.data("api-prevent", !1) : (n.toggleClass("is-collapsed"),
                                i.toggleClass("is-collapsed"),
                                n.toggleClass("is-expanded"),
                                i.toggleClass("is-expanded"),
                                i.stop().slideToggle().promise().always(function() {
                                    e.data("api-isCollapsed", !e.data("api-isCollapsed")),
                                        e.triggerHandler("api-toggle")
                                }))
                    }),
                    n.on("click", function(t) {
                        e.trigger("toggle"),
                            t.stopPropagation()
                    })
            })
        }),
        creatium.init.local(function(t) {
            creatium.lazy.add(t.find(".widget-stories-panel"), function(t) {
                t.find("[cr-stories-panel-highlight]").on("click", function t(e) {
                    var n = g(e.currentTarget).index()
                        , i = g('.modal[data-type="stories"]:visible').data("api-swiper");
                    i ? i.slideTo(n) : setTimeout(t.bind(this, e), 10)
                })
            })
        }),
        creatium.init.local(function(t) {
            creatium.lazy.add(t.find(".widget-tabs"), function t(e) {
                if (!window.Swiper)
                    return setTimeout(function() {
                        t(e)
                    }, 50);
                function n() {
                    return g(this).closest(".widget")[0] === e[0]
                }
                var i = e.find(".swiper-container").filter(n)
                    , a = e.find("[cr-slider-next]").filter(n)
                    , o = e.find("[cr-slider-previous]").filter(n)
                    , r = e.find("[cr-slider-page]").filter(n)
                    , l = e.find("[cr-slider-index]").filter(n)
                    , c = i.data()
                    , d = e.find("[cr-slider-page_icon]").filter(n).filter(function() {
                    return 1 < g(this).find(">.svgwrap").length
                });
                d.find(">.svgwrap").addClass("hidden");
                var s = e.find("[cr-slider-page_label]").filter(n).filter(function() {
                    return 1 < g(this).find(">.textable").length
                });
                s.find(">.textable").addClass("hidden");
                var u = new Swiper(i.get(0),{
                    nested: e.closest(".swiper-container").length,
                    autoHeight: !1 === c.fixheight,
                    autoplay: !!c.auto && {
                        delay: c.pause,
                        stopOnLastSlide: !c.loop
                    },
                    allowTouchMove: c.touch,
                    effect: c.animated ? "slide" : "fade",
                    fadeEffect: {
                        crossFade: !0
                    },
                    touchEventsTarget: "container",
                    mousewheelEventsTarged: "container",
                    on: {
                        slideChange: function() {
                            r.filter(".is-active").removeClass("is-active"),
                                r.eq(u.activeIndex).addClass("is-active"),
                                f(u.oldActiveIndex, u.activeIndex),
                                p(u.oldActiveIndex, u.activeIndex),
                                h(u.oldActiveIndex, u.activeIndex),
                                l.text(u.activeIndex + 1),
                                u.oldActiveIndex = u.activeIndex
                        }
                    }
                });
                function f(e, n) {
                    d.each(function() {
                        var t = g(this).children(".svgwrap");
                        t.eq(e).addClass("hidden"),
                            t.eq(n).removeClass("hidden")
                    })
                }
                function p(e, n) {
                    d.each(function() {
                        var t = g(this).children();
                        t.eq(e).addClass("hidden"),
                            t.eq(n).removeClass("hidden")
                    })
                }
                function h(e, n) {
                    s.each(function() {
                        var t = g(this).children(".textable");
                        t.eq(e).addClass("hidden"),
                            t.eq(n).removeClass("hidden")
                    })
                }
                e.data("api-swiper", u),
                    u._params = c,
                    u.oldActiveIndex = u.activeIndex,
                    f(u.oldActiveIndex, u.activeIndex),
                    p(u.oldActiveIndex, u.activeIndex),
                    h(u.oldActiveIndex, u.activeIndex),
                    e.on("slidenext", function(t) {
                        u.isEnd && c.loop ? u.slideTo(0) : u.slideNext()
                    }),
                    a.on("click", function() {
                        e.triggerHandler("slidenext")
                    }),
                    e.on("slideprev", function(t) {
                        u.isBeginning && c.loop ? u.slideTo(u.slides.length - 1) : u.slidePrev()
                    }),
                    o.on("click", function() {
                        e.triggerHandler("slideprev")
                    }),
                    r.on("click", function() {
                        u.slideTo(g(this).index())
                    }),
                    e.find(".lazy").on("lazyload", _.throttle(function() {
                        u.update()
                    }, 500)),
                u.params.autoHeight && creatium.syncInterval(function() {
                    !u.animating && u.slides.length && u.wrapperEl.clientHeight !== u.slides[u.activeIndex].clientHeight && u.update()
                }, 40)
            })
        }),
        creatium.init.local(function(t) {
            t.find(".widget-video").each(function() {
                var e = g(this);
                e.closest(".modal").on("hide", function() {
                    var t = e.find(".video-wrapper");
                    return t.attr("src", t.attr("src").replace("autoplay=1", "autoplay=0"))
                })
            })
        })
}($);
