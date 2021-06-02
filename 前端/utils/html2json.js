function e(e) {
    for (var t = {}, r = e.split(","), s = 0; s < r.length; s++) t[r[s]] = !0;
    return t;
}

function t(e) {
    e = e.replace(/<\s*\/?\s*[a-zA-z_]([^>]*?["][^"]*["])*[^>"]*>/g, " ");
    var t = [];
    if (0 == r.length || !a) return (d = {}).node = "text", d.text = e, [ d ];
    e = e.replace(/\[([^\[\]]+)\]/g, ":$1:");
    for (var n = new RegExp("[:]"), o = e.split(n), i = 0; i < o.length; i++) {
        var l = o[i], d = {};
        a[l] ? (d.node = "element", d.tag = "emoji", d.text = a[l], d.baseSrc = s) : (d.node = "text", 
        d.text = l), t.push(d);
    }
    return t;
}

var r = "", s = "", a = {}, n = require("./wxDiscode.js"), o = require("./htmlparser.js"), i = (e("area,base,basefont,br,col,frame,hr,img,input,link,meta,param,embed,command,keygen,source,track,wbr"), 
e("br,a,code,address,article,applet,aside,audio,blockquote,button,canvas,center,dd,del,dir,div,dl,dt,fieldset,figcaption,figure,footer,form,frameset,h1,h2,h3,h4,h5,h6,header,hgroup,hr,iframe,ins,isindex,li,map,menu,noframes,noscript,object,ol,output,p,pre,section,script,table,tbody,td,tfoot,th,thead,tr,ul,video")), l = e("abbr,acronym,applet,b,basefont,bdo,big,button,cite,del,dfn,em,font,i,iframe,img,input,ins,kbd,label,map,object,q,s,samp,script,select,small,span,strike,strong,sub,sup,textarea,tt,u,var"), d = e("colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr");

e("checked,compact,declare,defer,disabled,ismap,multiple,nohref,noresize,noshade,nowrap,readonly,selected"), 
e("wxxxcode-style,script,style,view,scroll-view,block"), module.exports = {
    html2json: function(e, r) {
        e = function(e) {
            return e.replace(/\r?\n+/g, "").replace(/<!--.*?-->/gi, "").replace(/\/\*.*?\*\//gi, "").replace(/[ ]+</gi, "<");
        }(e = function(e) {
            return e.replace(/<\?xml.*\?>\n/, "").replace(/<.*!doctype.*\>\n/, "").replace(/<.*!DOCTYPE.*\>\n/, "");
        }(e)), e = n.strDiscode(e);
        var s = [], a = {
            node: r,
            nodes: [],
            images: [],
            imageUrls: []
        }, c = 0;
        return o(e, {
            start: function(e, t, o) {
                var p = {
                    node: "element",
                    tag: e
                };
                if (0 === s.length ? (p.index = c.toString(), c += 1) : (void 0 === (v = s[0]).nodes && (v.nodes = []), 
                p.index = v.index + "." + v.nodes.length), i[e] ? p.tagType = "block" : l[e] ? p.tagType = "inline" : d[e] && (p.tagType = "closeSelf"), 
                0 !== t.length && (p.attr = t.reduce(function(e, t) {
                    var r = t.name, s = t.value;
                    return "class" == r && (p.classStr = s), "style" == r && (p.styleStr = s), s.match(/ /) && (s = s.split(" ")), 
                    e[r] ? Array.isArray(e[r]) ? e[r].push(s) : e[r] = [ e[r], s ] : e[r] = s, e;
                }, {})), "img" === p.tag) {
                    p.imgIndex = a.images.length;
                    var u = p.attr.src;
                    "" == u[0] && u.splice(0, 1), u = n.urlToHttpUrl(u, "https"), p.attr.src = u, p.from = r, 
                    a.images.push(p), a.imageUrls.push(u);
                }
                if ("font" === p.tag) {
                    var g = [ "x-small", "small", "medium", "large", "x-large", "xx-large", "-webkit-xxx-large" ], m = {
                        color: "color",
                        face: "font-family",
                        size: "font-size"
                    };
                    for (var f in p.attr.style || (p.attr.style = []), p.styleStr || (p.styleStr = ""), 
                    m) if (p.attr[f]) {
                        var h = "size" === f ? g[p.attr[f] - 1] : p.attr[f];
                        p.attr.style.push(m[f]), p.attr.style.push(h), p.styleStr += m[f] + ": " + h + ";";
                    }
                }
                if ("source" === p.tag && (a.source = p.attr.src), o) {
                    var v = s[0] || a;
                    void 0 === v.nodes && (v.nodes = []), v.nodes.push(p);
                } else s.unshift(p);
            },
            end: function(e) {
                var t = s.shift();
                if (t.tag !== e && console.error("invalid state: mismatch end tag"), "video" === t.tag && a.source && (t.attr.src = a.source, 
                delete a.source), 0 === s.length) a.nodes.push(t); else {
                    var r = s[0];
                    void 0 === r.nodes && (r.nodes = []), r.nodes.push(t);
                }
            },
            chars: function(e) {
                var r = {
                    node: "text",
                    text: e,
                    textArray: t(e)
                };
                if (0 === s.length) r.index = c.toString(), c += 1, a.nodes.push(r); else {
                    var n = s[0];
                    void 0 === n.nodes && (n.nodes = []), r.index = n.index + "." + n.nodes.length, 
                    n.nodes.push(r);
                }
            },
            comment: function(e) {}
        }), a;
    },
    emojisInit: function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "", t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "/wxParse/emojis/", n = arguments[2];
        r = e, s = t, a = n;
    }
};