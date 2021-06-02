function t(t, e) {
    if (null == t) throw new TypeError("Cannot convert undefined or null to object");
    for (var i = Object(t), n = 1; n < arguments.length; n++) {
        var a = arguments[n];
        if (null != a) for (var o in a) Object.prototype.hasOwnProperty.call(a, o) && (i[o] = a[o]);
    }
    return i;
}

function e(t, e, i) {
    if (isNaN(t)) throw new Error("[wxCharts] unvalid series data!");
    i = i || 10, e = e || "upper";
    for (var n = 1; i < 1; ) i *= 10, n *= 10;
    for (t = "upper" === e ? Math.ceil(t * n) : Math.floor(t * n); t % i != 0; ) "upper" === e ? t++ : t--;
    return t / n;
}

function i(t, e, i) {
    function n(t) {
        for (;t < 0; ) t += 2 * Math.PI;
        for (;t > 2 * Math.PI; ) t -= 2 * Math.PI;
        return t;
    }
    return t = n(t), (e = n(e)) > (i = n(i)) && (i += 2 * Math.PI, t < e && (t += 2 * Math.PI)), 
    t >= e && t <= i;
}

function n(t, e) {
    function i(t, e) {
        return !(!t[e - 1] || !t[e + 1]) && (t[e].y >= Math.max(t[e - 1].y, t[e + 1].y) || t[e].y <= Math.min(t[e - 1].y, t[e + 1].y));
    }
    var n = null, a = null, o = null, r = null;
    if (e < 1 ? (n = t[0].x + .2 * (t[1].x - t[0].x), a = t[0].y + .2 * (t[1].y - t[0].y)) : (n = t[e].x + .2 * (t[e + 1].x - t[e - 1].x), 
    a = t[e].y + .2 * (t[e + 1].y - t[e - 1].y)), e > t.length - 3) {
        var s = t.length - 1;
        o = t[s].x - .2 * (t[s].x - t[s - 1].x), r = t[s].y - .2 * (t[s].y - t[s - 1].y);
    } else o = t[e + 1].x - .2 * (t[e + 2].x - t[e].x), r = t[e + 1].y - .2 * (t[e + 2].y - t[e].y);
    return i(t, e + 1) && (r = t[e + 1].y), i(t, e) && (a = t[e].y), {
        ctrA: {
            x: n,
            y: a
        },
        ctrB: {
            x: o,
            y: r
        }
    };
}

function a(t, e, i) {
    return {
        x: i.x + t,
        y: i.y - e
    };
}

function o(t, i) {
    var n, a = i - t;
    return {
        minRange: e(t, "lower", n = a >= 1e4 ? 1e3 : a >= 1e3 ? 100 : a >= 100 ? 10 : a >= 10 ? 5 : a >= 1 ? 1 : a >= .1 ? .1 : .01),
        maxRange: e(i, "upper", n)
    };
}

function r(t) {
    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 10, i = 0;
    return (t = (t = String(t)).split("")).forEach(function(t) {
        /[a-zA-Z]/.test(t) ? i += 7 : /[0-9]/.test(t) ? i += 5.5 : /\./.test(t) ? i += 2.7 : /-/.test(t) ? i += 3.25 : /[\u4e00-\u9fa5]/.test(t) ? i += 10 : /\(|\)/.test(t) ? i += 3.73 : /\s/.test(t) ? i += 2.5 : /%/.test(t) ? i += 8 : i += 10;
    }), i * e / 10;
}

function s(t) {
    return t.reduce(function(t, e) {
        return (t.data ? t.data : t).concat(e.data);
    }, []);
}

function l(t) {
    var e = t.map(function(t) {
        return r(t);
    });
    return Math.max.apply(null, e);
}

function h(t, e) {
    var n = -1;
    if (c(t, e.center, e.radius)) {
        var a = Math.atan2(e.center.y - t.y, t.x - e.center.x);
        a = -a;
        for (var o = 0, r = e.series.length; o < r; o++) {
            var s = e.series[o];
            if (i(a, s._start_, s._start_ + 2 * s._proportion_ * Math.PI)) {
                n = o;
                break;
            }
        }
    }
    return n;
}

function c(t, e, i) {
    return Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2) <= Math.pow(i, 2);
}

function f(t) {
    var e = [], i = [];
    return t.forEach(function(t, n) {
        null !== t ? i.push(t) : (i.length && e.push(i), i = []);
    }), i.length && e.push(i), e;
}

function d(t, e, i) {
    if (!1 === e.legend) return {
        legendList: [],
        legendHeight: 0
    };
    var n = [], a = 0, o = [];
    return t.forEach(function(t) {
        var i = 30 + r(t.name || "undefinded");
        a + i > e.width ? (n.push(o), a = i, o = [ t ]) : (a += i, o.push(t));
    }), o.length && n.push(o), {
        legendList: n,
        legendHeight: n.length * (i.fontSize + 8) + 5
    };
}

function x(t, e, i) {
    var n = {
        angle: 0,
        xAxisHeight: i.xAxisHeight
    }, a = y(t, e, i).eachSpacing, o = t.map(function(t) {
        return r(t);
    }), s = Math.max.apply(this, o);
    return s + 2 * i.xAxisTextPadding > a && (n.angle = 45 * Math.PI / 180, n.xAxisHeight = 2 * i.xAxisTextPadding + s * Math.sin(n.angle)), 
    n;
}

function u(t) {
    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1, i = 0, n = 0;
    return t.forEach(function(t) {
        t.data = null === t.data ? 0 : t.data, i += t.data;
    }), t.forEach(function(t) {
        t.data = null === t.data ? 0 : t.data, t._proportion_ = t.data / i * e;
    }), t.forEach(function(t) {
        t._start_ = n, n += 2 * t._proportion_ * Math.PI;
    }), t;
}

function g(t) {
    var e = 0;
    return (t = u(t)).forEach(function(t) {
        var i = t.format ? t.format(+t._proportion_.toFixed(2)) : R.toFixed(100 * t._proportion_) + "%";
        e = Math.max(e, r(i));
    }), e;
}

function p(t, e, i, n, a, o) {
    return t.map(function(t) {
        return null === t ? null : (t.width = (e - 2 * a.columePadding) / i, o.extra.column && o.extra.column.width && +o.extra.column.width > 0 ? t.width = Math.min(t.width, +o.extra.column.width) : t.width = Math.min(t.width, 25), 
        t.x += (n + .5 - i / 2) * t.width, t);
    });
}

function y(t, e, i) {
    var n = i.yAxisWidth + i.yAxisTitleWidth, a = (e.width - 2 * i.padding - n) / (e.enableScroll ? Math.min(5, t.length) : t.length), o = [], r = i.padding + n, s = e.width - i.padding;
    return t.forEach(function(t, e) {
        o.push(r + e * a);
    }), !0 === e.enableScroll ? o.push(r + t.length * a) : o.push(s), {
        xAxisPoints: o,
        startX: r,
        endX: s,
        eachSpacing: a
    };
}

function v(t, e, i, n, a, o, r) {
    var s = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 1, l = [], h = o.height - 2 * r.padding - r.xAxisHeight - r.legendHeight;
    return t.forEach(function(t, c) {
        if (null === t) l.push(null); else {
            var f = {};
            f.x = n[c] + Math.round(a / 2);
            var d = h * (t - e) / (i - e);
            d *= s, f.y = o.height - r.xAxisHeight - r.legendHeight - Math.round(d) - r.padding, 
            l.push(f);
        }
    }), l;
}

function m(t, e, i) {
    var n = function(t, e, i) {
        var n = s(t);
        n = n.filter(function(t) {
            return null !== t;
        });
        var a = Math.min.apply(this, n), r = Math.max.apply(this, n);
        if ("number" == typeof e.yAxis.min && (a = Math.min(e.yAxis.min, a)), "number" == typeof e.yAxis.max && (r = Math.max(e.yAxis.max, r)), 
        a === r) {
            var l = r || 1;
            a -= l, r += l;
        }
        for (var h = o(a, r), c = h.minRange, f = [], d = (h.maxRange - c) / i.yAxisSplit, x = 0; x <= i.yAxisSplit; x++) f.push(c + d * x);
        return f.reverse();
    }(t, e, i), a = i.yAxisWidth, l = n.map(function(t) {
        return t = R.toFixed(t, 2), t = e.yAxis.format ? e.yAxis.format(Number(t)) : t, 
        a = Math.max(a, r(t) + 5), t;
    });
    return !0 === e.yAxis.disabled && (a = 0), {
        rangesFormat: l,
        ranges: n,
        yAxisWidth: a
    };
}

function P(t, e, i, n) {
    n.beginPath(), n.setStrokeStyle("#ffffff"), n.setLineWidth(1), n.setFillStyle(e), 
    "diamond" === i ? t.forEach(function(t, e) {
        null !== t && (n.moveTo(t.x, t.y - 4.5), n.lineTo(t.x - 4.5, t.y), n.lineTo(t.x, t.y + 4.5), 
        n.lineTo(t.x + 4.5, t.y), n.lineTo(t.x, t.y - 4.5));
    }) : "circle" === i ? t.forEach(function(t, e) {
        null !== t && (n.moveTo(t.x + 3.5, t.y), n.arc(t.x, t.y, 4, 0, 2 * Math.PI, !1));
    }) : "rect" === i ? t.forEach(function(t, e) {
        null !== t && (n.moveTo(t.x - 3.5, t.y - 3.5), n.rect(t.x - 3.5, t.y - 3.5, 7, 7));
    }) : "triangle" === i && t.forEach(function(t, e) {
        null !== t && (n.moveTo(t.x, t.y - 4.5), n.lineTo(t.x - 4.5, t.y + 4.5), n.lineTo(t.x + 4.5, t.y + 4.5), 
        n.lineTo(t.x, t.y - 4.5));
    }), n.closePath(), n.fill(), n.stroke();
}

function S(t, e, i) {
    var n = t.title.fontSize || e.titleFontSize, a = t.subtitle.fontSize || e.subtitleFontSize, o = t.title.name || "", s = t.subtitle.name || "", l = t.title.color || e.titleColor, h = t.subtitle.color || e.subtitleColor, c = o ? n : 0, f = s ? a : 0;
    if (s) {
        var d = r(s, a), x = (t.width - d) / 2 + (t.subtitle.offsetX || 0), u = (t.height - e.legendHeight + a) / 2;
        o && (u -= (c + 5) / 2), i.beginPath(), i.setFontSize(a), i.setFillStyle(h), i.fillText(s, x, u), 
        i.stroke(), i.closePath();
    }
    if (o) {
        var g = r(o, n), p = (t.width - g) / 2 + (t.title.offsetX || 0), y = (t.height - e.legendHeight + n) / 2;
        s && (y += (f + 5) / 2), i.beginPath(), i.setFontSize(n), i.setFillStyle(l), i.fillText(o, p, y), 
        i.stroke(), i.closePath();
    }
}

function T(t, e, i, n) {
    var a = e.data;
    n.beginPath(), n.setFontSize(i.fontSize), n.setFillStyle("#666666"), t.forEach(function(t, i) {
        if (null !== t) {
            var o = e.format ? e.format(a[i]) : a[i];
            n.fillText(o, t.x - r(o) / 2, t.y - 2);
        }
    }), n.closePath(), n.stroke();
}

function A(t, e, i, n, o, s) {
    var l = n.extra.radar || {};
    e += o.radarLabelTextMargin, s.beginPath(), s.setFontSize(o.fontSize), s.setFillStyle(l.labelColor || "#666666"), 
    t.forEach(function(t, l) {
        var h = {
            x: e * Math.cos(t),
            y: e * Math.sin(t)
        }, c = a(h.x, h.y, i), f = c.x, d = c.y;
        R.approximatelyEqual(h.x, 0) ? f -= r(n.categories[l] || "") / 2 : h.x < 0 && (f -= r(n.categories[l] || "")), 
        s.fillText(n.categories[l] || "", f, d + o.fontSize / 2);
    }), s.stroke(), s.closePath();
}

function b(t, e, i, n, o, s) {
    var l = o + i.pieChartLinePadding, h = [], c = null;
    t.map(function(t) {
        return {
            arc: 2 * Math.PI - (t._start_ + 2 * Math.PI * t._proportion_ / 2),
            text: t.format ? t.format(+t._proportion_.toFixed(2)) : R.toFixed(100 * t._proportion_) + "%",
            color: t.color
        };
    }).forEach(function(t) {
        var e = Math.cos(t.arc) * l, n = Math.sin(t.arc) * l, a = Math.cos(t.arc) * o, s = Math.sin(t.arc) * o, f = e >= 0 ? e + i.pieChartTextPadding : e - i.pieChartTextPadding, d = n, x = r(t.text), u = d;
        c && R.isSameXCoordinateArea(c.start, {
            x: f
        }) && (u = f > 0 ? Math.min(d, c.start.y) : e < 0 ? Math.max(d, c.start.y) : d > 0 ? Math.max(d, c.start.y) : Math.min(d, c.start.y)), 
        f < 0 && (f -= x);
        var g = {
            lineStart: {
                x: a,
                y: s
            },
            lineEnd: {
                x: e,
                y: n
            },
            start: {
                x: f,
                y: u
            },
            width: x,
            height: i.fontSize,
            text: t.text,
            color: t.color
        };
        c = function(t, e) {
            if (e) for (;R.isCollision(t, e); ) t.start.x > 0 ? t.start.y-- : t.start.x < 0 ? t.start.y++ : t.start.y > 0 ? t.start.y++ : t.start.y--;
            return t;
        }(g, c), h.push(c);
    }), h.forEach(function(t) {
        var e = a(t.lineStart.x, t.lineStart.y, s), o = a(t.lineEnd.x, t.lineEnd.y, s), r = a(t.start.x, t.start.y, s);
        n.setLineWidth(1), n.setFontSize(i.fontSize), n.beginPath(), n.setStrokeStyle(t.color), 
        n.setFillStyle(t.color), n.moveTo(e.x, e.y);
        var l = t.start.x < 0 ? r.x + t.width : r.x, h = t.start.x < 0 ? r.x - 5 : r.x + 5;
        n.quadraticCurveTo(o.x, o.y, l, r.y), n.moveTo(e.x, e.y), n.stroke(), n.closePath(), 
        n.beginPath(), n.moveTo(r.x + t.width, r.y), n.arc(l, r.y, 2, 0, 2 * Math.PI), n.closePath(), 
        n.fill(), n.beginPath(), n.setFillStyle("#666666"), n.fillText(t.text, h, r.y + 3), 
        n.closePath(), n.stroke(), n.closePath();
    });
}

function M(t, e, i, n) {
    var a = i.padding, o = e.height - i.padding - i.xAxisHeight - i.legendHeight;
    n.beginPath(), n.setStrokeStyle("#cccccc"), n.setLineWidth(1), n.moveTo(t, a), n.lineTo(t, o), 
    n.stroke(), n.closePath();
}

function _(e, i, n, a, o) {
    var s = !1;
    (i = t({
        x: 0,
        y: 0
    }, i)).y -= 8;
    var l = e.map(function(t) {
        return r(t.text);
    }), h = 9 + 4 * a.toolTipPadding + Math.max.apply(null, l), c = 2 * a.toolTipPadding + e.length * a.toolTipLineHeight;
    i.x - Math.abs(n._scrollDistance_) + 8 + h > n.width && (s = !0), o.beginPath(), 
    o.setFillStyle(n.tooltip.option.background || a.toolTipBackground), o.setGlobalAlpha(a.toolTipOpacity), 
    s ? (o.moveTo(i.x, i.y + 10), o.lineTo(i.x - 8, i.y + 10 - 5), o.lineTo(i.x - 8, i.y + 10 + 5), 
    o.moveTo(i.x, i.y + 10), o.fillRect(i.x - h - 8, i.y, h, c)) : (o.moveTo(i.x, i.y + 10), 
    o.lineTo(i.x + 8, i.y + 10 - 5), o.lineTo(i.x + 8, i.y + 10 + 5), o.moveTo(i.x, i.y + 10), 
    o.fillRect(i.x + 8, i.y, h, c)), o.closePath(), o.fill(), o.setGlobalAlpha(1), e.forEach(function(t, e) {
        o.beginPath(), o.setFillStyle(t.color);
        var n = i.x + 8 + 2 * a.toolTipPadding, r = i.y + (a.toolTipLineHeight - a.fontSize) / 2 + a.toolTipLineHeight * e + a.toolTipPadding;
        s && (n = i.x - h - 8 + 2 * a.toolTipPadding), o.fillRect(n, r, 4, a.fontSize), 
        o.closePath();
    }), o.beginPath(), o.setFontSize(a.fontSize), o.setFillStyle("#ffffff"), e.forEach(function(t, e) {
        var n = i.x + 8 + 2 * a.toolTipPadding + 4 + 5;
        s && (n = i.x - h - 8 + 2 * a.toolTipPadding + 4 + 5);
        var r = i.y + (a.toolTipLineHeight - a.fontSize) / 2 + a.toolTipLineHeight * e + a.toolTipPadding;
        o.fillText(t.text, n, r + a.fontSize);
    }), o.stroke(), o.closePath();
}

function E(t, e, i, n) {
    var a = i.xAxisHeight + (e.height - i.xAxisHeight - r(t)) / 2;
    n.save(), n.beginPath(), n.setFontSize(i.fontSize), n.setFillStyle(e.yAxis.titleFontColor || "#333333"), 
    n.translate(0, e.height), n.rotate(-90 * Math.PI / 180), n.fillText(t, a, i.padding + .5 * i.fontSize), 
    n.stroke(), n.closePath(), n.restore();
}

function F(t, e, i, a) {
    var o = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1, r = m(t, e, i).ranges, s = y(e.categories, e, i), l = s.xAxisPoints, h = s.eachSpacing, c = r.pop(), d = r.shift(), x = e.height - i.padding - i.xAxisHeight - i.legendHeight, u = [];
    return a.save(), e._scrollDistance_ && 0 !== e._scrollDistance_ && !0 === e.enableScroll && a.translate(e._scrollDistance_, 0), 
    e.tooltip && e.tooltip.textList && e.tooltip.textList.length && 1 === o && M(e.tooltip.offset.x, e, i, a), 
    t.forEach(function(t, r) {
        var s = v(t.data, c, d, l, h, e, i, o);
        if (u.push(s), f(s).forEach(function(i) {
            if (a.beginPath(), a.setStrokeStyle(t.color), a.setFillStyle(t.color), a.setGlobalAlpha(.6), 
            a.setLineWidth(2), i.length > 1) {
                var o = i[0], r = i[i.length - 1];
                a.moveTo(o.x, o.y), "curve" === e.extra.lineStyle ? i.forEach(function(t, e) {
                    if (e > 0) {
                        var o = n(i, e - 1);
                        a.bezierCurveTo(o.ctrA.x, o.ctrA.y, o.ctrB.x, o.ctrB.y, t.x, t.y);
                    }
                }) : i.forEach(function(t, e) {
                    e > 0 && a.lineTo(t.x, t.y);
                }), a.lineTo(r.x, x), a.lineTo(o.x, x), a.lineTo(o.x, o.y);
            } else {
                var s = i[0];
                a.moveTo(s.x - h / 2, s.y), a.lineTo(s.x + h / 2, s.y), a.lineTo(s.x + h / 2, x), 
                a.lineTo(s.x - h / 2, x), a.moveTo(s.x - h / 2, s.y);
            }
            a.closePath(), a.fill(), a.setGlobalAlpha(1);
        }), !1 !== e.dataPointShape) {
            var g = i.dataPointShape[r % i.dataPointShape.length];
            P(s, t.color, g, a);
        }
    }), !1 !== e.dataLabel && 1 === o && t.forEach(function(t, n) {
        T(v(t.data, c, d, l, h, e, i, o), t, i, a);
    }), a.restore(), {
        xAxisPoints: l,
        calPoints: u,
        eachSpacing: h
    };
}

function w(t, e, i, a) {
    var o = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1, r = m(t, e, i).ranges, s = y(e.categories, e, i), l = s.xAxisPoints, h = s.eachSpacing, c = r.pop(), d = r.shift(), x = [];
    return a.save(), e._scrollDistance_ && 0 !== e._scrollDistance_ && !0 === e.enableScroll && a.translate(e._scrollDistance_, 0), 
    e.tooltip && e.tooltip.textList && e.tooltip.textList.length && 1 === o && M(e.tooltip.offset.x, e, i, a), 
    t.forEach(function(t, r) {
        var s = v(t.data, c, d, l, h, e, i, o);
        if (x.push(s), f(s).forEach(function(i, o) {
            a.beginPath(), a.setStrokeStyle(t.color), a.setLineWidth(2), 1 === i.length ? (a.moveTo(i[0].x, i[0].y), 
            a.arc(i[0].x, i[0].y, 1, 0, 2 * Math.PI)) : (a.moveTo(i[0].x, i[0].y), "curve" === e.extra.lineStyle ? i.forEach(function(t, e) {
                if (e > 0) {
                    var o = n(i, e - 1);
                    a.bezierCurveTo(o.ctrA.x, o.ctrA.y, o.ctrB.x, o.ctrB.y, t.x, t.y);
                }
            }) : i.forEach(function(t, e) {
                e > 0 && a.lineTo(t.x, t.y);
            }), a.moveTo(i[0].x, i[0].y)), a.closePath(), a.stroke();
        }), !1 !== e.dataPointShape) {
            var u = i.dataPointShape[r % i.dataPointShape.length];
            P(s, t.color, u, a);
        }
    }), !1 !== e.dataLabel && 1 === o && t.forEach(function(t, n) {
        T(v(t.data, c, d, l, h, e, i, o), t, i, a);
    }), a.restore(), {
        xAxisPoints: l,
        calPoints: x,
        eachSpacing: h
    };
}

function L(t, e, i, n) {
    i.save(), t._scrollDistance_ && 0 !== t._scrollDistance_ && !0 === t.enableScroll && i.translate(t._scrollDistance_, 0), 
    t.tooltip && t.tooltip.textList && t.tooltip.textList.length && 1 === n && _(t.tooltip.textList, t.tooltip.offset, t, e, i), 
    i.restore();
}

function k(t, e, i, n) {
    var a = y(t, e, i), o = a.xAxisPoints, s = (a.startX, a.endX, a.eachSpacing), l = e.height - i.padding - i.xAxisHeight - i.legendHeight, h = l + i.xAxisLineHeight;
    n.save(), e._scrollDistance_ && 0 !== e._scrollDistance_ && n.translate(e._scrollDistance_, 0), 
    n.beginPath(), n.setStrokeStyle(e.xAxis.gridColor || "#cccccc"), !0 !== e.xAxis.disableGrid && ("calibration" === e.xAxis.type ? o.forEach(function(t, e) {
        e > 0 && (n.moveTo(t - s / 2, l), n.lineTo(t - s / 2, l + 4));
    }) : o.forEach(function(t, e) {
        n.moveTo(t, l), n.lineTo(t, h);
    })), n.closePath(), n.stroke();
    var c = e.width - 2 * i.padding - i.yAxisWidth - i.yAxisTitleWidth, f = Math.min(t.length, Math.ceil(c / i.fontSize / 1.5)), d = Math.ceil(t.length / f);
    t = t.map(function(t, e) {
        return e % d != 0 ? "" : t;
    }), 0 === i._xAxisTextAngle_ ? (n.beginPath(), n.setFontSize(i.fontSize), n.setFillStyle(e.xAxis.fontColor || "#666666"), 
    t.forEach(function(t, e) {
        var a = s / 2 - r(t) / 2;
        n.fillText(t, o[e] + a, l + i.fontSize + 5);
    }), n.closePath(), n.stroke()) : t.forEach(function(t, a) {
        n.save(), n.beginPath(), n.setFontSize(i.fontSize), n.setFillStyle(e.xAxis.fontColor || "#666666");
        var h = r(t), c = s / 2 - h, f = function(t, e, i) {
            var n = t, a = i - e, o = n + (i - a - n) / Math.sqrt(2);
            return {
                transX: o *= -1,
                transY: (i - a) * (Math.sqrt(2) - 1) - (i - a - n) / Math.sqrt(2)
            };
        }(o[a] + s / 2, l + i.fontSize / 2 + 5, e.height), d = f.transX, x = f.transY;
        n.rotate(-1 * i._xAxisTextAngle_), n.translate(d, x), n.fillText(t, o[a] + c, l + i.fontSize + 5), 
        n.closePath(), n.stroke(), n.restore();
    }), n.restore();
}

function C(t, e, i) {
    for (var n = t.height - 2 * e.padding - e.xAxisHeight - e.legendHeight, a = Math.floor(n / e.yAxisSplit), o = e.yAxisWidth + e.yAxisTitleWidth, r = e.padding + o, s = t.width - e.padding, l = [], h = 0; h < e.yAxisSplit; h++) l.push(e.padding + a * h);
    l.push(e.padding + a * e.yAxisSplit + 2), i.beginPath(), i.setStrokeStyle(t.yAxis.gridColor || "#cccccc"), 
    i.setLineWidth(1), l.forEach(function(t, e) {
        i.moveTo(r, t), i.lineTo(s, t);
    }), i.closePath(), i.stroke();
}

function H(t, e, i, n) {
    if (!0 !== e.yAxis.disabled) {
        var a = m(t, e, i).rangesFormat, o = i.yAxisWidth + i.yAxisTitleWidth, r = e.height - 2 * i.padding - i.xAxisHeight - i.legendHeight, s = Math.floor(r / i.yAxisSplit), l = i.padding + o, h = e.width - i.padding, c = e.height - i.padding - i.xAxisHeight - i.legendHeight;
        n.setFillStyle(e.background || "#ffffff"), e._scrollDistance_ < 0 && n.fillRect(0, 0, l, c + i.xAxisHeight + 5), 
        n.fillRect(h, 0, e.width, c + i.xAxisHeight + 5);
        for (var f = [], d = 0; d <= i.yAxisSplit; d++) f.push(i.padding + s * d);
        n.stroke(), n.beginPath(), n.setFontSize(i.fontSize), n.setFillStyle(e.yAxis.fontColor || "#666666"), 
        a.forEach(function(t, e) {
            var a = f[e] ? f[e] : c;
            n.fillText(t, i.padding + i.yAxisTitleWidth, a + i.fontSize / 2);
        }), n.closePath(), n.stroke(), e.yAxis.title && E(e.yAxis.title, e, i, n);
    }
}

function I(t, e, i, n) {
    e.legend && d(t, e, i).legendList.forEach(function(t, a) {
        var o = 0;
        t.forEach(function(t) {
            t.name = t.name || "undefined", o += 15 + r(t.name) + 15;
        });
        var s = (e.width - o) / 2 + 5, l = e.height - i.padding - i.legendHeight + a * (i.fontSize + 8) + 5 + 8;
        n.setFontSize(i.fontSize), t.forEach(function(t) {
            switch (e.type) {
              case "line":
                n.beginPath(), n.setLineWidth(1), n.setStrokeStyle(t.color), n.moveTo(s - 2, l + 5), 
                n.lineTo(s + 17, l + 5), n.stroke(), n.closePath(), n.beginPath(), n.setLineWidth(1), 
                n.setStrokeStyle("#ffffff"), n.setFillStyle(t.color), n.moveTo(s + 7.5, l + 5), 
                n.arc(s + 7.5, l + 5, 4, 0, 2 * Math.PI), n.fill(), n.stroke(), n.closePath();
                break;

              case "pie":
              case "ring":
                n.beginPath(), n.setFillStyle(t.color), n.moveTo(s + 7.5, l + 5), n.arc(s + 7.5, l + 5, 7, 0, 2 * Math.PI), 
                n.closePath(), n.fill();
                break;

              default:
                n.beginPath(), n.setFillStyle(t.color), n.moveTo(s, l), n.rect(s, l, 15, 10), n.closePath(), 
                n.fill();
            }
            s += 20, n.beginPath(), n.setFillStyle(e.extra.legendTextColor || "#333333"), n.fillText(t.name, s, l + 9), 
            n.closePath(), n.stroke(), s += r(t.name) + 10;
        });
    });
}

function z(t, e, i, n) {
    var o = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1, r = e.extra.radar || {}, h = function(t) {
        for (var e = 2 * Math.PI / t, i = [], n = 0; n < t; n++) i.push(e * n);
        return i.map(function(t) {
            return -1 * t + Math.PI / 2;
        });
    }(e.categories.length), c = {
        x: e.width / 2,
        y: (e.height - i.legendHeight) / 2
    }, f = Math.min(c.x - (l(e.categories) + i.radarLabelTextMargin), c.y - i.radarLabelTextMargin);
    f -= i.padding, n.beginPath(), n.setLineWidth(1), n.setStrokeStyle(r.gridColor || "#cccccc"), 
    h.forEach(function(t) {
        var e = a(f * Math.cos(t), f * Math.sin(t), c);
        n.moveTo(c.x, c.y), n.lineTo(e.x, e.y);
    }), n.stroke(), n.closePath();
    for (var d = 1; d <= i.radarGridCount; d++) !function(t) {
        var e = {};
        n.beginPath(), n.setLineWidth(1), n.setStrokeStyle(r.gridColor || "#cccccc"), h.forEach(function(o, r) {
            var s = a(f / i.radarGridCount * t * Math.cos(o), f / i.radarGridCount * t * Math.sin(o), c);
            0 === r ? (e = s, n.moveTo(s.x, s.y)) : n.lineTo(s.x, s.y);
        }), n.lineTo(e.x, e.y), n.stroke(), n.closePath();
    }(d);
    return function(t, e, i, n, o) {
        var r = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 1, l = o.extra.radar || {};
        l.max = l.max || 0;
        var h = Math.max(l.max, Math.max.apply(null, s(n))), c = [];
        return n.forEach(function(n) {
            var o = {};
            o.color = n.color, o.data = [], n.data.forEach(function(n, s) {
                var l = {};
                l.angle = t[s], l.proportion = n / h, l.position = a(i * l.proportion * r * Math.cos(l.angle), i * l.proportion * r * Math.sin(l.angle), e), 
                o.data.push(l);
            }), c.push(o);
        }), c;
    }(h, c, f, t, e, o).forEach(function(t, a) {
        if (n.beginPath(), n.setFillStyle(t.color), n.setGlobalAlpha(.6), t.data.forEach(function(t, e) {
            0 === e ? n.moveTo(t.position.x, t.position.y) : n.lineTo(t.position.x, t.position.y);
        }), n.closePath(), n.fill(), n.setGlobalAlpha(1), !1 !== e.dataPointShape) {
            var o = i.dataPointShape[a % i.dataPointShape.length];
            P(t.data.map(function(t) {
                return t.position;
            }), t.color, o, n);
        }
    }), A(h, f, c, e, i, n), {
        center: c,
        radius: f,
        angleList: h
    };
}

function D(t, e) {
    e.draw();
}

function W(t) {
    this.isStop = !1, t.duration = void 0 === t.duration ? 1e3 : t.duration, t.timing = t.timing || "linear";
    var e = "undefined" != typeof requestAnimationFrame ? requestAnimationFrame : "undefined" != typeof setTimeout ? function(t, e) {
        setTimeout(function() {
            var e = +new Date();
            t(e);
        }, e);
    } : function(t) {
        t(null);
    }, i = null, n = function(a) {
        if (null === a || !0 === this.isStop) return t.onProcess && t.onProcess(1), void (t.onAnimationFinish && t.onAnimationFinish());
        if (null === i && (i = a), a - i < t.duration) {
            var o = (a - i) / t.duration;
            o = (0, q[t.timing])(o), t.onProcess && t.onProcess(o), e(n, 17);
        } else t.onProcess && t.onProcess(1), t.onAnimationFinish && t.onAnimationFinish();
    };
    n = n.bind(this), e(n, 17);
}

function O(t, e, i, n) {
    var a = this, o = e.series, r = e.categories, s = d(o = function(t, e) {
        var i = 0;
        return t.map(function(t) {
            return t.color || (t.color = e.colors[i], i = (i + 1) % e.colors.length), t;
        });
    }(o, i), e, i).legendHeight;
    i.legendHeight = s;
    var l = m(o, e, i).yAxisWidth;
    if (i.yAxisWidth = l, r && r.length) {
        var h = x(r, e, i), c = h.xAxisHeight, f = h.angle;
        i.xAxisHeight = c, i._xAxisTextAngle_ = f;
    }
    "pie" !== t && "ring" !== t || (i._pieTextMaxLength_ = !1 === e.dataLabel ? 0 : g(o));
    var P = e.animation ? 1e3 : 0;
    switch (this.animationInstance && this.animationInstance.stop(), t) {
      case "line":
        this.animationInstance = new W({
            timing: "easeIn",
            duration: P,
            onProcess: function(t) {
                C(e, i, n);
                var s = w(o, e, i, n, t), l = s.xAxisPoints, h = s.calPoints, c = s.eachSpacing;
                a.chartData.xAxisPoints = l, a.chartData.calPoints = h, a.chartData.eachSpacing = c, 
                k(r, e, i, n), I(e.series, e, i, n), H(o, e, i, n), L(e, i, n, t), D(0, n);
            },
            onAnimationFinish: function() {
                a.event.trigger("renderComplete");
            }
        });
        break;

      case "column":
        this.animationInstance = new W({
            timing: "easeIn",
            duration: P,
            onProcess: function(t) {
                C(e, i, n);
                var s = function(t, e, i, n) {
                    var a = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1, o = m(t, e, i).ranges, r = y(e.categories, e, i), s = r.xAxisPoints, l = r.eachSpacing, h = o.pop(), c = o.shift();
                    return n.save(), e._scrollDistance_ && 0 !== e._scrollDistance_ && !0 === e.enableScroll && n.translate(e._scrollDistance_, 0), 
                    t.forEach(function(o, r) {
                        var f = v(o.data, h, c, s, l, e, i, a);
                        f = p(f, l, t.length, r, i, e), n.beginPath(), n.setFillStyle(o.color), f.forEach(function(t, a) {
                            if (null !== t) {
                                var o = t.x - t.width / 2 + 1, r = e.height - t.y - i.padding - i.xAxisHeight - i.legendHeight;
                                n.moveTo(o, t.y), n.rect(o, t.y, t.width - 2, r);
                            }
                        }), n.closePath(), n.fill();
                    }), t.forEach(function(o, r) {
                        var f = v(o.data, h, c, s, l, e, i, a);
                        f = p(f, l, t.length, r, i, e), !1 !== e.dataLabel && 1 === a && T(f, o, i, n);
                    }), n.restore(), {
                        xAxisPoints: s,
                        eachSpacing: l
                    };
                }(o, e, i, n, t), l = s.xAxisPoints, h = s.eachSpacing;
                a.chartData.xAxisPoints = l, a.chartData.eachSpacing = h, k(r, e, i, n), I(e.series, e, i, n), 
                H(o, e, i, n), D(0, n);
            },
            onAnimationFinish: function() {
                a.event.trigger("renderComplete");
            }
        });
        break;

      case "area":
        this.animationInstance = new W({
            timing: "easeIn",
            duration: P,
            onProcess: function(t) {
                C(e, i, n);
                var s = F(o, e, i, n, t), l = s.xAxisPoints, h = s.calPoints, c = s.eachSpacing;
                a.chartData.xAxisPoints = l, a.chartData.calPoints = h, a.chartData.eachSpacing = c, 
                k(r, e, i, n), I(e.series, e, i, n), H(o, e, i, n), L(e, i, n, t), D(0, n);
            },
            onAnimationFinish: function() {
                a.event.trigger("renderComplete");
            }
        });
        break;

      case "ring":
      case "pie":
        this.animationInstance = new W({
            timing: "easeInOut",
            duration: P,
            onProcess: function(t) {
                a.chartData.pieData = function(t, e, i, n) {
                    var a = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1, o = e.extra.pie || {};
                    t = u(t, a);
                    var r = {
                        x: e.width / 2,
                        y: (e.height - i.legendHeight) / 2
                    }, s = Math.min(r.x - i.pieChartLinePadding - i.pieChartTextPadding - i._pieTextMaxLength_, r.y - i.pieChartLinePadding - i.pieChartTextPadding);
                    if (e.dataLabel ? s -= 10 : s -= 2 * i.padding, (t = t.map(function(t) {
                        return t._start_ += (o.offsetAngle || 0) * Math.PI / 180, t;
                    })).forEach(function(t) {
                        n.beginPath(), n.setLineWidth(2), n.setStrokeStyle("#ffffff"), n.setFillStyle(t.color), 
                        n.moveTo(r.x, r.y), n.arc(r.x, r.y, s, t._start_, t._start_ + 2 * t._proportion_ * Math.PI), 
                        n.closePath(), n.fill(), !0 !== e.disablePieStroke && n.stroke();
                    }), "ring" === e.type) {
                        var l = .6 * s;
                        "number" == typeof e.extra.ringWidth && e.extra.ringWidth > 0 && (l = Math.max(0, s - e.extra.ringWidth)), 
                        n.beginPath(), n.setFillStyle(e.background || "#ffffff"), n.moveTo(r.x, r.y), n.arc(r.x, r.y, l, 0, 2 * Math.PI), 
                        n.closePath(), n.fill();
                    }
                    if (!1 !== e.dataLabel && 1 === a) {
                        for (var h = !1, c = 0, f = t.length; c < f; c++) if (t[c].data > 0) {
                            h = !0;
                            break;
                        }
                        h && b(t, 0, i, n, s, r);
                    }
                    return 1 === a && "ring" === e.type && S(e, i, n), {
                        center: r,
                        radius: s,
                        series: t
                    };
                }(o, e, i, n, t), I(e.series, e, i, n), D(0, n);
            },
            onAnimationFinish: function() {
                a.event.trigger("renderComplete");
            }
        });
        break;

      case "radar":
        this.animationInstance = new W({
            timing: "easeInOut",
            duration: P,
            onProcess: function(t) {
                a.chartData.radarData = z(o, e, i, n, t), I(e.series, e, i, n), D(0, n);
            },
            onAnimationFinish: function() {
                a.event.trigger("renderComplete");
            }
        });
    }
}

function X() {
    this.events = {};
}

var G = {
    yAxisWidth: 15,
    yAxisSplit: 5,
    xAxisHeight: 15,
    xAxisLineHeight: 15,
    legendHeight: 15,
    yAxisTitleWidth: 15,
    padding: 12,
    columePadding: 3,
    fontSize: 10,
    dataPointShape: [ "diamond", "circle", "triangle", "rect" ],
    colors: [ "#7cb5ec", "#f7a35c", "#434348", "#90ed7d", "#f15c80", "#8085e9" ],
    pieChartLinePadding: 25,
    pieChartTextPadding: 15,
    xAxisTextPadding: 3,
    titleColor: "#333333",
    titleFontSize: 20,
    subtitleColor: "#999999",
    subtitleFontSize: 15,
    toolTipPadding: 3,
    toolTipBackground: "#000000",
    toolTipOpacity: .7,
    toolTipLineHeight: 14,
    radarGridCount: 3,
    radarLabelTextMargin: 15
}, R = {
    toFixed: function(t, e) {
        return e = e || 2, this.isFloat(t) && (t = t.toFixed(e)), t;
    },
    isFloat: function(t) {
        return t % 1 != 0;
    },
    approximatelyEqual: function(t, e) {
        return Math.abs(t - e) < 1e-10;
    },
    isSameSign: function(t, e) {
        return Math.abs(t) === t && Math.abs(e) === e || Math.abs(t) !== t && Math.abs(e) !== e;
    },
    isSameXCoordinateArea: function(t, e) {
        return this.isSameSign(t.x, e.x);
    },
    isCollision: function(t, e) {
        return t.end = {}, t.end.x = t.start.x + t.width, t.end.y = t.start.y - t.height, 
        e.end = {}, e.end.x = e.start.x + e.width, e.end.y = e.start.y - e.height, !(e.start.x > t.end.x || e.end.x < t.start.x || e.end.y > t.start.y || e.start.y < t.end.y);
    }
}, q = {
    easeIn: function(t) {
        return Math.pow(t, 3);
    },
    easeOut: function(t) {
        return Math.pow(t - 1, 3) + 1;
    },
    easeInOut: function(t) {
        return (t /= .5) < 1 ? .5 * Math.pow(t, 3) : .5 * (Math.pow(t - 2, 3) + 2);
    },
    linear: function(t) {
        return t;
    }
};

W.prototype.stop = function() {
    this.isStop = !0;
}, X.prototype.addEventListener = function(t, e) {
    this.events[t] = this.events[t] || [], this.events[t].push(e);
}, X.prototype.trigger = function() {
    for (var t = arguments.length, e = Array(t), i = 0; i < t; i++) e[i] = arguments[i];
    var n = e[0], a = e.slice(1);
    this.events[n] && this.events[n].forEach(function(t) {
        try {
            t.apply(null, a);
        } catch (t) {
            console.error(t);
        }
    });
};

var B = function(e) {
    e.title = e.title || {}, e.subtitle = e.subtitle || {}, e.yAxis = e.yAxis || {}, 
    e.xAxis = e.xAxis || {}, e.extra = e.extra || {}, e.legend = !1 !== e.legend, e.animation = !1 !== e.animation;
    var i = t({}, G);
    i.yAxisTitleWidth = !0 !== e.yAxis.disabled && e.yAxis.title ? i.yAxisTitleWidth : 0, 
    i.pieChartLinePadding = !1 === e.dataLabel ? 0 : i.pieChartLinePadding, i.pieChartTextPadding = !1 === e.dataLabel ? 0 : i.pieChartTextPadding, 
    this.opts = e, this.config = i, this.context = wx.createCanvasContext(e.canvasId), 
    this.chartData = {}, this.event = new X(), this.scrollOption = {
        currentOffset: 0,
        startTouchX: 0,
        distance: 0
    }, O.call(this, e.type, e, i, this.context);
};

B.prototype.updateData = function() {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    this.opts.series = e.series || this.opts.series, this.opts.categories = e.categories || this.opts.categories, 
    this.opts.title = t({}, this.opts.title, e.title || {}), this.opts.subtitle = t({}, this.opts.subtitle, e.subtitle || {}), 
    O.call(this, this.opts.type, this.opts, this.config, this.context);
}, B.prototype.stopAnimation = function() {
    this.animationInstance && this.animationInstance.stop();
}, B.prototype.addEventListener = function(t, e) {
    this.event.addEventListener(t, e);
}, B.prototype.getCurrentDataIndex = function(t) {
    var e = t.touches && t.touches.length ? t.touches : t.changedTouches;
    if (e && e.length) {
        var i = e[0], n = i.x, a = i.y;
        return "pie" === this.opts.type || "ring" === this.opts.type ? h({
            x: n,
            y: a
        }, this.chartData.pieData) : "radar" === this.opts.type ? function(t, e, i) {
            var n = 2 * Math.PI / i, a = -1;
            if (c(t, e.center, e.radius)) {
                var o = function(t) {
                    return t < 0 && (t += 2 * Math.PI), t > 2 * Math.PI && (t -= 2 * Math.PI), t;
                }, r = Math.atan2(e.center.y - t.y, t.x - e.center.x);
                (r *= -1) < 0 && (r += 2 * Math.PI), e.angleList.map(function(t) {
                    return o(-1 * t);
                }).forEach(function(t, e) {
                    var i = o(t - n / 2), s = o(t + n / 2);
                    s < i && (s += 2 * Math.PI), (r >= i && r <= s || r + 2 * Math.PI >= i && r + 2 * Math.PI <= s) && (a = e);
                });
            }
            return a;
        }({
            x: n,
            y: a
        }, this.chartData.radarData, this.opts.categories.length) : function(t, e, i, n) {
            var a = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0, o = -1;
            return function(t, e, i) {
                return t.x < e.width - i.padding && t.x > i.padding + i.yAxisWidth + i.yAxisTitleWidth && t.y > i.padding && t.y < e.height - i.legendHeight - i.xAxisHeight - i.padding;
            }(t, i, n) && e.forEach(function(e, i) {
                t.x + a > e && (o = i);
            }), o;
        }({
            x: n,
            y: a
        }, this.chartData.xAxisPoints, this.opts, this.config, Math.abs(this.scrollOption.currentOffset));
    }
    return -1;
}, B.prototype.showToolTip = function(e) {
    var i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    if ("line" === this.opts.type || "area" === this.opts.type) {
        var n = this.getCurrentDataIndex(e), a = this.scrollOption.currentOffset, o = t({}, this.opts, {
            _scrollDistance_: a,
            animation: !1
        });
        if (n > -1) {
            var r = function(t, e) {
                var i = [];
                return t.forEach(function(t) {
                    if (null !== t.data[e] && "undefinded" != typeof t.data[e]) {
                        var n = {};
                        n.color = t.color, n.name = t.name, n.data = t.format ? t.format(t.data[e]) : t.data[e], 
                        i.push(n);
                    }
                }), i;
            }(this.opts.series, n);
            if (0 === r.length) O.call(this, o.type, o, this.config, this.context); else {
                var s = function(t, e, i, n) {
                    var a = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {}, o = t.map(function(t) {
                        return {
                            text: a.format ? a.format(t, n[i]) : t.name + ": " + t.data,
                            color: t.color
                        };
                    }), r = [], s = {
                        x: 0,
                        y: 0
                    };
                    return e.forEach(function(t) {
                        "undefinded" != typeof t[i] && null !== t[i] && r.push(t[i]);
                    }), r.forEach(function(t) {
                        s.x = Math.round(t.x), s.y += t.y;
                    }), s.y /= r.length, {
                        textList: o,
                        offset: s
                    };
                }(r, this.chartData.calPoints, n, this.opts.categories, i), l = s.textList, h = s.offset;
                o.tooltip = {
                    textList: l,
                    offset: h,
                    option: i
                }, O.call(this, o.type, o, this.config, this.context);
            }
        } else O.call(this, o.type, o, this.config, this.context);
    }
}, B.prototype.scrollStart = function(t) {
    t.touches[0] && !0 === this.opts.enableScroll && (this.scrollOption.startTouchX = t.touches[0].x);
}, B.prototype.scroll = function(e) {
    if (e.touches[0] && !0 === this.opts.enableScroll) {
        var i = e.touches[0].x - this.scrollOption.startTouchX, n = this.scrollOption.currentOffset, a = function(t, e, i, n) {
            var a = n.width - i.padding - e.xAxisPoints[0], o = e.eachSpacing * n.categories.length, r = t;
            return t >= 0 ? r = 0 : Math.abs(t) >= o - a && (r = a - o), r;
        }(n + i, this.chartData, this.config, this.opts);
        this.scrollOption.distance = i = a - n;
        var o = t({}, this.opts, {
            _scrollDistance_: n + i,
            animation: !1
        });
        O.call(this, o.type, o, this.config, this.context);
    }
}, B.prototype.scrollEnd = function(t) {
    if (!0 === this.opts.enableScroll) {
        var e = this.scrollOption, i = e.currentOffset, n = e.distance;
        this.scrollOption.currentOffset = i + n, this.scrollOption.distance = 0;
    }
}, module.exports = B;