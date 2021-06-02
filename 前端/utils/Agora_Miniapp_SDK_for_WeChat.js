var _interopRequireDefault = require("../@babel/runtime/helpers/interopRequireDefault"), _typeof2 = _interopRequireDefault(require("../@babel/runtime/helpers/typeof")), e, i;

e = "undefined" != typeof self ? self : void 0, i = function() {
    return function(e) {
        function i(r) {
            if (t[r]) return t[r].exports;
            var n = t[r] = {
                i: r,
                l: !1,
                exports: {}
            };
            return e[r].call(n.exports, n, n.exports, i), n.l = !0, n.exports;
        }
        var t = {};
        return i.m = e, i.c = t, i.d = function(e, t, r) {
            i.o(e, t) || Object.defineProperty(e, t, {
                configurable: !1,
                enumerable: !0,
                get: r
            });
        }, i.n = function(e) {
            var t = e && e.__esModule ? function() {
                return e.default;
            } : function() {
                return e;
            };
            return i.d(t, "a", t), t;
        }, i.o = function(e, i) {
            return Object.prototype.hasOwnProperty.call(e, i);
        }, i.p = "", i(i.s = 8);
    }([ function(e, i, t) {
        Object.defineProperty(i, "__esModule", {
            value: !0
        }), i.VERSION = "1.1.0", i.SDK_VERSION = "2.4.1", i.DOMAIN_NAME = "mini-app.broadcastapp.agoraio.cn";
    }, function(e, i, t) {
        function r(e) {
            if (Array.isArray(e)) {
                for (var i = 0, t = Array(e.length); i < e.length; i++) t[i] = e[i];
                return t;
            }
            return Array.from(e);
        }
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var n = function() {
            function e(e, i) {
                for (var t = 0; t < i.length; t++) {
                    var r = i[t];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), 
                    Object.defineProperty(e, r.key, r);
                }
            }
            return function(i, t, r) {
                return t && e(i.prototype, t), r && e(i, r), i;
            };
        }(), s = 3, a = function() {
            function e() {
                (function(e, i) {
                    if (!(e instanceof i)) throw new TypeError("Cannot call a class as a function");
                })(this, e), this.level = s, this.onLog = null;
            }
            return n(e, [ {
                key: "setLogLevel",
                value: function(e) {
                    if ("number" != typeof e || !(e <= 4 && e >= -1)) throw Error("Invaild level");
                    this.level = e;
                }
            }, {
                key: "log",
                value: function() {
                    var e, i = Array.prototype.slice.call(arguments);
                    this.onLog && this.onLog(JSON.stringify(i)), (e = console).log.apply(e, r(i));
                }
            }, {
                key: "error",
                value: function() {
                    var e, i = Array.prototype.slice.call(arguments);
                    this.onLog && this.onLog(JSON.stringify(i)), (e = console).error.apply(e, r(i));
                }
            }, {
                key: "blind",
                value: function() {
                    var e = Array.prototype.slice.call(arguments);
                    this.level <= -1 && this.log.apply(this, [ new Date() + " [BLIND]: " ].concat(r(e)));
                }
            }, {
                key: "debug",
                value: function() {
                    var e = Array.prototype.slice.call(arguments);
                    this.level <= 0 && this.log.apply(this, [ new Date() + " [DEBUG]: " ].concat(r(e)));
                }
            }, {
                key: "info",
                value: function(e) {
                    this.level <= 1 && this.log(new Date() + " [INFO]: " + e);
                }
            }, {
                key: "warn",
                value: function(e) {
                    this.level <= 2 && this.log(new Date() + " [WARN]: " + e);
                }
            }, {
                key: "error",
                value: function(e) {
                    this.level <= s && this.error(new Date() + " [ERROR]: " + e);
                }
            } ]), e;
        }(), o = new a();
        i.default = o, i.Log = a;
    }, function(module, exports, __webpack_require__) {
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var Thrift = {
            Version: "0.11.0",
            Type: {
                STOP: 0,
                VOID: 1,
                BOOL: 2,
                BYTE: 3,
                I08: 3,
                DOUBLE: 4,
                I16: 6,
                I32: 8,
                I64: 10,
                STRING: 11,
                UTF7: 11,
                STRUCT: 12,
                MAP: 13,
                SET: 14,
                LIST: 15,
                UTF8: 16,
                UTF16: 17
            },
            MessageType: {
                CALL: 1,
                REPLY: 2,
                EXCEPTION: 3,
                ONEWAY: 4
            },
            objectLength: function(e) {
                var i = 0;
                for (var t in e) e.hasOwnProperty(t) && i++;
                return i;
            },
            inherits: function(e, i, t) {
                function r() {}
                r.prototype = i.prototype, e.prototype = new r(), e.prototype.name = t || "";
            }
        }, _copyList2, _copyMap2;
        Thrift.TException = function(e) {
            this.message = e;
        }, Thrift.inherits(Thrift.TException, Error, "TException"), Thrift.TException.prototype.getMessage = function() {
            return this.message;
        }, Thrift.TApplicationExceptionType = {
            UNKNOWN: 0,
            UNKNOWN_METHOD: 1,
            INVALID_MESSAGE_TYPE: 2,
            WRONG_METHOD_NAME: 3,
            BAD_SEQUENCE_ID: 4,
            MISSING_RESULT: 5,
            INTERNAL_ERROR: 6,
            PROTOCOL_ERROR: 7,
            INVALID_TRANSFORM: 8,
            INVALID_PROTOCOL: 9,
            UNSUPPORTED_CLIENT_TYPE: 10
        }, Thrift.TApplicationException = function(e, i) {
            this.message = e, this.code = "number" == typeof i ? i : 0;
        }, Thrift.inherits(Thrift.TApplicationException, Thrift.TException, "TApplicationException"), 
        Thrift.TApplicationException.prototype.read = function(e) {
            for (;;) {
                var i = e.readFieldBegin();
                if (i.ftype == Thrift.Type.STOP) break;
                switch (i.fid) {
                  case 1:
                    i.ftype == Thrift.Type.STRING ? (i = e.readString(), this.message = i.value) : i = e.skip(i.ftype);
                    break;

                  case 2:
                    i.ftype == Thrift.Type.I32 ? (i = e.readI32(), this.code = i.value) : i = e.skip(i.ftype);
                    break;

                  default:
                    i = e.skip(i.ftype);
                }
                e.readFieldEnd();
            }
            e.readStructEnd();
        }, Thrift.TApplicationException.prototype.write = function(e) {
            e.writeStructBegin("TApplicationException"), this.message && (e.writeFieldBegin("message", Thrift.Type.STRING, 1), 
            e.writeString(this.getMessage()), e.writeFieldEnd()), this.code && (e.writeFieldBegin("type", Thrift.Type.I32, 2), 
            e.writeI32(this.code), e.writeFieldEnd()), e.writeFieldStop(), e.writeStructEnd();
        }, Thrift.TApplicationException.prototype.getCode = function() {
            return this.code;
        }, Thrift.TProtocolExceptionType = {
            UNKNOWN: 0,
            INVALID_DATA: 1,
            NEGATIVE_SIZE: 2,
            SIZE_LIMIT: 3,
            BAD_VERSION: 4,
            NOT_IMPLEMENTED: 5,
            DEPTH_LIMIT: 6
        }, Thrift.TProtocolException = function(e, i) {
            Error.call(this), Error.captureStackTrace(this, this.constructor), this.name = this.constructor.name, 
            this.type = e, this.message = i;
        }, Thrift.inherits(Thrift.TProtocolException, Thrift.TException, "TProtocolException"), 
        Thrift.Transport = Thrift.TXHRTransport = function(e, i) {
            this.url = e, this.wpos = 0, this.rpos = 0, this.useCORS = i && i.useCORS, this.customHeaders = i && i.customHeaders ? i.customHeaders : {}, 
            this.send_buf = "", this.recv_buf = "";
        }, Thrift.TXHRTransport.prototype = {
            getXmlHttpRequestObject: function() {
                try {
                    return new XMLHttpRequest();
                } catch (e) {}
                try {
                    return new ActiveXObject("Msxml2.XMLHTTP");
                } catch (e) {}
                try {
                    return new ActiveXObject("Microsoft.XMLHTTP");
                } catch (e) {}
                throw "Your browser doesn't support XHR.";
            },
            flush: function(e, i) {
                var t = this;
                if (e && !i || void 0 === this.url || "" === this.url) return this.send_buf;
                var r = {
                    header: {},
                    method: "POST"
                };
                r.header.MediaType = "application/vnd.apache.thrift.json; charset=utf-8", i && (r.success = function() {
                    var e = i;
                    return function(i) {
                        if (t.responseText = JSON.stringify(i.data), t.setRecvBuffer(t.responseText), i && 200 !== i.statusCode) return e(i.statusCode);
                        e();
                    };
                }(), r.fail = function() {
                    var e = i;
                    return function(i) {
                        e(i);
                    };
                }()), Object.keys(t.customHeaders).forEach(function(e) {
                    r.header[e] = t.customHeaders[e];
                }), r.header.Accept = "application/vnd.apache.thrift.json; charset=utf-8", r.header["Content-Type"] = "application/vnd.apache.thrift.json; charset=utf-8", 
                r.data = this.send_buf, r.url = this.url, wx.request(r);
            },
            jqRequest: function(e, i, t, r) {
                if ("undefined" == typeof jQuery || void 0 === jQuery.Deferred) throw "Thrift.js requires jQuery 1.5+ to use asynchronous requests";
                var n = this;
                return jQuery.ajax({
                    url: this.url,
                    data: i,
                    type: "POST",
                    cache: !1,
                    contentType: "application/vnd.apache.thrift.json; charset=utf-8",
                    dataType: "text thrift",
                    converters: {
                        "text thrift": function(i) {
                            return n.setRecvBuffer(i), r.call(e);
                        }
                    },
                    context: e,
                    success: jQuery.makeArray(t).pop()
                });
            },
            setRecvBuffer: function(e) {
                this.recv_buf = e, this.recv_buf_sz = this.recv_buf.length, this.wpos = this.recv_buf.length, 
                this.rpos = 0;
            },
            isOpen: function() {
                return !0;
            },
            open: function() {},
            close: function() {},
            read: function(e) {
                var i = this.wpos - this.rpos;
                if (0 === i) return "";
                var t = e;
                i < e && (t = i);
                var r = this.read_buf.substr(this.rpos, t);
                return this.rpos += t, r;
            },
            readAll: function() {
                return this.recv_buf;
            },
            write: function(e) {
                this.send_buf = e;
            },
            getSendBuffer: function() {
                return this.send_buf;
            }
        }, Thrift.TWebSocketTransport = function(e) {
            this.__reset(e);
        }, Thrift.TWebSocketTransport.prototype = {
            __reset: function(e) {
                this.url = e, this.socket = null, this.callbacks = [], this.send_pending = [], this.send_buf = "", 
                this.recv_buf = "", this.rb_wpos = 0, this.rb_rpos = 0;
            },
            flush: function(e, i) {
                var t = this;
                this.isOpen() ? (this.socket.send(this.send_buf), this.callbacks.push(function() {
                    var e = i;
                    return function(i) {
                        t.setRecvBuffer(i), e();
                    };
                }()), i && this.callbacks.push(function() {
                    var e = i;
                    return function(i) {
                        t.setRecvBuffer(i), e();
                    };
                }())) : this.send_pending.push({
                    buf: this.send_buf,
                    cb: i
                });
            },
            __onOpen: function() {
                var e = this;
                this.send_pending.length > 0 && (this.send_pending.forEach(function(i) {
                    var t;
                    this.socket.send(i.buf), this.callbacks.push((t = i.cb, function(i) {
                        e.setRecvBuffer(i), t();
                    }));
                }), this.send_pending = []);
            },
            __onClose: function(e) {
                this.__reset(this.url);
            },
            __onMessage: function(e) {
                this.callbacks.length && this.callbacks.shift()(e.data);
            },
            __onError: function(e) {
                console.log("Thrift WebSocket Error: " + e.toString()), this.socket.close();
            },
            setRecvBuffer: function(e) {
                this.recv_buf = e, this.recv_buf_sz = this.recv_buf.length, this.wpos = this.recv_buf.length, 
                this.rpos = 0;
            },
            isOpen: function() {
                return this.socket && this.socket.readyState == this.socket.OPEN;
            },
            open: function() {
                this.socket && this.socket.readyState != this.socket.CLOSED || (this.socket = new WebSocket(this.url), 
                this.socket.onopen = this.__onOpen.bind(this), this.socket.onmessage = this.__onMessage.bind(this), 
                this.socket.onerror = this.__onError.bind(this), this.socket.onclose = this.__onClose.bind(this));
            },
            close: function() {
                this.socket.close();
            },
            read: function(e) {
                var i = this.wpos - this.rpos;
                if (0 === i) return "";
                var t = e;
                i < e && (t = i);
                var r = this.read_buf.substr(this.rpos, t);
                return this.rpos += t, r;
            },
            readAll: function() {
                return this.recv_buf;
            },
            write: function(e) {
                this.send_buf = e;
            },
            getSendBuffer: function() {
                return this.send_buf;
            }
        }, Thrift.TJSONProtocol = Thrift.Protocol = function(e) {
            this.tstack = [], this.tpos = [], this.transport = e;
        }, Thrift.Protocol.Type = {}, Thrift.Protocol.Type[Thrift.Type.BOOL] = '"tf"', Thrift.Protocol.Type[Thrift.Type.BYTE] = '"i8"', 
        Thrift.Protocol.Type[Thrift.Type.I16] = '"i16"', Thrift.Protocol.Type[Thrift.Type.I32] = '"i32"', 
        Thrift.Protocol.Type[Thrift.Type.I64] = '"i64"', Thrift.Protocol.Type[Thrift.Type.DOUBLE] = '"dbl"', 
        Thrift.Protocol.Type[Thrift.Type.STRUCT] = '"rec"', Thrift.Protocol.Type[Thrift.Type.STRING] = '"str"', 
        Thrift.Protocol.Type[Thrift.Type.MAP] = '"map"', Thrift.Protocol.Type[Thrift.Type.LIST] = '"lst"', 
        Thrift.Protocol.Type[Thrift.Type.SET] = '"set"', Thrift.Protocol.RType = {}, Thrift.Protocol.RType.tf = Thrift.Type.BOOL, 
        Thrift.Protocol.RType.i8 = Thrift.Type.BYTE, Thrift.Protocol.RType.i16 = Thrift.Type.I16, 
        Thrift.Protocol.RType.i32 = Thrift.Type.I32, Thrift.Protocol.RType.i64 = Thrift.Type.I64, 
        Thrift.Protocol.RType.dbl = Thrift.Type.DOUBLE, Thrift.Protocol.RType.rec = Thrift.Type.STRUCT, 
        Thrift.Protocol.RType.str = Thrift.Type.STRING, Thrift.Protocol.RType.map = Thrift.Type.MAP, 
        Thrift.Protocol.RType.lst = Thrift.Type.LIST, Thrift.Protocol.RType.set = Thrift.Type.SET, 
        Thrift.Protocol.Version = 1, Thrift.Protocol.prototype = {
            getTransport: function() {
                return this.transport;
            },
            writeMessageBegin: function(e, i, t) {
                this.tstack = [], this.tpos = [], this.tstack.push([ Thrift.Protocol.Version, '"' + e + '"', i, t ]);
            },
            writeMessageEnd: function() {
                var e = this.tstack.pop();
                this.wobj = this.tstack.pop(), this.wobj.push(e), this.wbuf = "[" + this.wobj.join(",") + "]", 
                this.transport.write(this.wbuf);
            },
            writeStructBegin: function(e) {
                this.tpos.push(this.tstack.length), this.tstack.push({});
            },
            writeStructEnd: function() {
                var e = this.tpos.pop(), i = this.tstack[e], t = "{", r = !0;
                for (var n in i) r ? r = !1 : t += ",", t += n + ":" + i[n];
                t += "}", this.tstack[e] = t;
            },
            writeFieldBegin: function(e, i, t) {
                this.tpos.push(this.tstack.length), this.tstack.push({
                    fieldId: '"' + t + '"',
                    fieldType: Thrift.Protocol.Type[i]
                });
            },
            writeFieldEnd: function() {
                var e = this.tstack.pop(), i = this.tstack.pop();
                this.tstack[this.tstack.length - 1][i.fieldId] = "{" + i.fieldType + ":" + e + "}", 
                this.tpos.pop();
            },
            writeFieldStop: function() {},
            writeMapBegin: function(e, i, t) {
                this.tpos.push(this.tstack.length), this.tstack.push([ Thrift.Protocol.Type[e], Thrift.Protocol.Type[i], 0 ]);
            },
            writeMapEnd: function() {
                var e = this.tpos.pop();
                if (e != this.tstack.length) {
                    (this.tstack.length - e - 1) % 2 != 0 && this.tstack.push("");
                    var i = (this.tstack.length - e - 1) / 2;
                    this.tstack[e][this.tstack[e].length - 1] = i;
                    for (var t = "}", r = !0; this.tstack.length > e + 1; ) {
                        var n = this.tstack.pop(), s = this.tstack.pop();
                        r ? r = !1 : t = "," + t, isNaN(s) || (s = '"' + s + '"'), t = s + ":" + n + t;
                    }
                    t = "{" + t, this.tstack[e].push(t), this.tstack[e] = "[" + this.tstack[e].join(",") + "]";
                }
            },
            writeListBegin: function(e, i) {
                this.tpos.push(this.tstack.length), this.tstack.push([ Thrift.Protocol.Type[e], i ]);
            },
            writeListEnd: function() {
                for (var e = this.tpos.pop(); this.tstack.length > e + 1; ) {
                    var i = this.tstack[e + 1];
                    this.tstack.splice(e + 1, 1), this.tstack[e].push(i);
                }
                this.tstack[e] = "[" + this.tstack[e].join(",") + "]";
            },
            writeSetBegin: function(e, i) {
                this.tpos.push(this.tstack.length), this.tstack.push([ Thrift.Protocol.Type[e], i ]);
            },
            writeSetEnd: function() {
                for (var e = this.tpos.pop(); this.tstack.length > e + 1; ) {
                    var i = this.tstack[e + 1];
                    this.tstack.splice(e + 1, 1), this.tstack[e].push(i);
                }
                this.tstack[e] = "[" + this.tstack[e].join(",") + "]";
            },
            writeBool: function(e) {
                this.tstack.push(e ? 1 : 0);
            },
            writeByte: function(e) {
                this.tstack.push(e);
            },
            writeI16: function(e) {
                this.tstack.push(e);
            },
            writeI32: function(e) {
                this.tstack.push(e);
            },
            writeI64: function(e) {
                this.tstack.push(e);
            },
            writeDouble: function(e) {
                this.tstack.push(e);
            },
            writeString: function(e) {
                if (null === e) this.tstack.push(null); else {
                    for (var i = "", t = 0; t < e.length; t++) {
                        var r = e.charAt(t);
                        i += '"' === r ? '\\"' : "\\" === r ? "\\\\" : "\b" === r ? "\\b" : "\f" === r ? "\\f" : "\n" === r ? "\\n" : "\r" === r ? "\\r" : "\t" === r ? "\\t" : r;
                    }
                    this.tstack.push('"' + i + '"');
                }
            },
            writeBinary: function(e) {
                var i = "";
                if ("string" == typeof e) i = e; else {
                    if (!(e instanceof Uint8Array)) throw new TypeError("writeBinary only accepts String or Uint8Array.");
                    for (var t = e, r = 0; r < t.length; ++r) i += String.fromCharCode(t[r]);
                }
                this.tstack.push('"' + btoa(i) + '"');
            },
            readMessageBegin: function readMessageBegin() {
                if (this.rstack = [], this.rpos = [], "undefined" != typeof JSON && "function" == typeof JSON.parse) {
                    var a = this.transport.readAll();
                    this.robj = JSON.parse(a);
                } else "undefined" != typeof jQuery ? this.robj = jQuery.parseJSON(this.transport.readAll()) : this.robj = eval(this.transport.readAll());
                this.robj instanceof Array == 0 && (this.robj = [ this.robj ]);
                var r = {}, version = this.robj.shift();
                if (version != Thrift.Protocol.Version) throw "Wrong thrift protocol version: " + version;
                return r.fname = this.robj.shift(), r.mtype = this.robj.shift(), r.rseqid = this.robj.shift(), 
                this.rstack.push(this.robj.shift()), r;
            },
            readMessageEnd: function() {},
            readStructBegin: function(e) {
                var i = {
                    fname: ""
                };
                return this.rstack[this.rstack.length - 1] instanceof Array && this.rstack.push(this.rstack[this.rstack.length - 1].shift()), 
                i;
            },
            readStructEnd: function() {
                this.rstack[this.rstack.length - 2] instanceof Array && this.rstack.pop();
            },
            readFieldBegin: function() {
                var e = {}, i = -1, t = Thrift.Type.STOP;
                for (var r in this.rstack[this.rstack.length - 1]) if (null !== r) {
                    i = parseInt(r, 10), this.rpos.push(this.rstack.length);
                    var n = this.rstack[this.rstack.length - 1][i];
                    delete this.rstack[this.rstack.length - 1][i], this.rstack.push(n);
                    break;
                }
                if (-1 != i) for (var s in this.rstack[this.rstack.length - 1]) null !== Thrift.Protocol.RType[s] && (t = Thrift.Protocol.RType[s], 
                this.rstack[this.rstack.length - 1] = this.rstack[this.rstack.length - 1][s]);
                return e.fname = "", e.ftype = t, e.fid = i, e;
            },
            readFieldEnd: function() {
                for (var e = this.rpos.pop(); this.rstack.length > e; ) this.rstack.pop();
            },
            readMapBegin: function() {
                var e = this.rstack.pop(), i = e.shift();
                i instanceof Array && (this.rstack.push(e), i = (e = i).shift());
                var t = {};
                return t.ktype = Thrift.Protocol.RType[i], t.vtype = Thrift.Protocol.RType[e.shift()], 
                t.size = e.shift(), this.rpos.push(this.rstack.length), this.rstack.push(e.shift()), 
                t;
            },
            readMapEnd: function() {
                this.readFieldEnd();
            },
            readListBegin: function() {
                var e = this.rstack[this.rstack.length - 1], i = {};
                return i.etype = Thrift.Protocol.RType[e.shift()], i.size = e.shift(), this.rpos.push(this.rstack.length), 
                this.rstack.push(e.shift()), i;
            },
            readListEnd: function() {
                this.readFieldEnd();
            },
            readSetBegin: function(e, i) {
                return this.readListBegin(e, i);
            },
            readSetEnd: function() {
                return this.readListEnd();
            },
            readBool: function() {
                var e = this.readI32();
                return null !== e && "1" == e.value ? e.value = !0 : e.value = !1, e;
            },
            readByte: function() {
                return this.readI32();
            },
            readI16: function() {
                return this.readI32();
            },
            readI32: function(e) {
                void 0 === e && (e = this.rstack[this.rstack.length - 1]);
                var i = {};
                if (e instanceof Array) 0 === e.length ? i.value = void 0 : i.value = e.shift(); else if (e instanceof Object) {
                    for (var t in e) if (null !== t) {
                        this.rstack.push(e[t]), delete e[t], i.value = t;
                        break;
                    }
                } else i.value = e, this.rstack.pop();
                return i;
            },
            readI64: function() {
                return this.readI32();
            },
            readDouble: function() {
                return this.readI32();
            },
            readString: function() {
                return this.readI32();
            },
            readBinary: function() {
                var e = this.readI32();
                return e.value = atob(e.value), e;
            },
            skip: function(e) {
                var i, t;
                switch (e) {
                  case Thrift.Type.STOP:
                    return null;

                  case Thrift.Type.BOOL:
                    return this.readBool();

                  case Thrift.Type.BYTE:
                    return this.readByte();

                  case Thrift.Type.I16:
                    return this.readI16();

                  case Thrift.Type.I32:
                    return this.readI32();

                  case Thrift.Type.I64:
                    return this.readI64();

                  case Thrift.Type.DOUBLE:
                    return this.readDouble();

                  case Thrift.Type.STRING:
                    return this.readString();

                  case Thrift.Type.STRUCT:
                    for (this.readStructBegin(); (i = this.readFieldBegin()).ftype != Thrift.Type.STOP; ) this.skip(i.ftype), 
                    this.readFieldEnd();
                    return this.readStructEnd(), null;

                  case Thrift.Type.MAP:
                    for (i = this.readMapBegin(), t = 0; t < i.size; t++) t > 0 && this.rstack.length > this.rpos[this.rpos.length - 1] + 1 && this.rstack.pop(), 
                    this.skip(i.ktype), this.skip(i.vtype);
                    return this.readMapEnd(), null;

                  case Thrift.Type.SET:
                    for (i = this.readSetBegin(), t = 0; t < i.size; t++) this.skip(i.etype);
                    return this.readSetEnd(), null;

                  case Thrift.Type.LIST:
                    for (i = this.readListBegin(), t = 0; t < i.size; t++) this.skip(i.etype);
                    return this.readListEnd(), null;
                }
            }
        }, Thrift.MultiplexProtocol = function(e, i, t, r) {
            Thrift.Protocol.call(this, i, t, r), this.serviceName = e;
        }, Thrift.inherits(Thrift.MultiplexProtocol, Thrift.Protocol, "multiplexProtocol"), 
        Thrift.MultiplexProtocol.prototype.writeMessageBegin = function(e, i, t) {
            i === Thrift.MessageType.CALL || i === Thrift.MessageType.ONEWAY ? Thrift.Protocol.prototype.writeMessageBegin.call(this, this.serviceName + ":" + e, i, t) : Thrift.Protocol.prototype.writeMessageBegin.call(this, e, i, t);
        }, Thrift.Multiplexer = function() {
            this.seqid = 0;
        }, Thrift.Multiplexer.prototype.createClient = function(e, i, t) {
            i.Client && (i = i.Client);
            var r = this;
            return i.prototype.new_seqid = function() {
                return r.seqid += 1, r.seqid;
            }, new i(new Thrift.MultiplexProtocol(e, t));
        }, _copyList2 = function(e, i) {
            if (!e) return e;
            var t, r, n, s = t = void 0 === i.shift ? i : i[0], a = e.length, o = [];
            for (r = 0; r < a; r++) n = e[r], null === t ? o.push(n) : t === _copyMap2 || t === _copyList2 ? o.push(t(n, i.slice(1))) : o.push(new s(n));
            return o;
        }, _copyMap2 = function(e, i) {
            if (!e) return e;
            var t, r, n = t = void 0 === i.shift ? i : i[0], s = {};
            for (var a in e) e.hasOwnProperty(a) && (r = e[a], s[a] = null === t ? r : t === _copyMap2 || t === _copyList2 ? t(r, i.slice(1)) : new n(r));
            return s;
        }, Thrift.copyMap = _copyMap2, Thrift.copyList = _copyList2, exports.default = Thrift;
    }, function(e, i, t) {
        Object.defineProperty(i, "__esModule", {
            value: !0
        }), i.default = function(e) {
            return e = e || Object.create(null), {
                on: function(i, t) {
                    (e[i] || (e[i] = [])).push(t);
                },
                off: function(i, t) {
                    e[i] && e[i].splice(e[i].indexOf(t) >>> 0, 1);
                },
                emit: function(i, t) {
                    (e[i] || []).slice().map(function(e) {
                        e(t);
                    }), (e["*"] || []).slice().map(function(e) {
                        e(i, t);
                    });
                }
            };
        };
    }, function(e, i, t) {
        Object.defineProperty(i, "__esModule", {
            value: !0
        }), i.is32Uint = i.isWeiXin = i.random = i.shouldUseHttps = i.generateSessionId = void 0;
        var r = function(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }(t(10));
        i.generateSessionId = function() {
            return (0, r.default)().replace(/-/g, "").toUpperCase();
        }, i.shouldUseHttps = function() {
            return "https:" == document.location.protocol;
        }, i.random = function(e) {
            isNaN(e) && (e = 1e3);
            var i = +new Date(), t = (i = (9301 * i + 49297) % 233280) / 233280;
            return Math.ceil(t * e);
        }, i.isWeiXin = function() {
            try {
                return wx, !0;
            } catch (e) {
                return !1;
            }
        }, i.is32Uint = function(e) {
            return !!(0 <= e && e <= 4294967295);
        };
    }, function(e, i) {
        var t;
        t = function() {
            return this;
        }();
        try {
            t = t || Function("return this")() || (0, eval)("this");
        } catch (e) {
            "object" == ("undefined" == typeof window ? "undefined" : (0, _typeof2.default)(window)) && (t = window);
        }
        e.exports = t;
    }, function(e, i, t) {
        var r = t(2).default, n = t(22), s = n.MiniappSession, a = n.MiniappJoinChooseServer, o = n.MiniappConnectWebSocket, l = n.MiniappJoin, u = n.MiniappPublish, d = n.MiniappUnpublish, h = n.MiniappSubscribe, c = n.MiniappUnsubscribe, p = n.MiniappLeave, f = n.MiniappServerEvent, v = n.MiniappPusherState, T = n.MiniappPlayerState, y = function(e) {
            this.uri = null, this.miniappSession = null, this.miniappJoinChooseServer = null, 
            this.miniappConnectWebSocket = null, this.miniappJoin = null, this.miniappPublish = null, 
            this.miniappUnpublish = null, this.miniappSubscribe = null, this.miniappUnsubscribe = null, 
            this.miniappLeave = null, this.miniappServerEvent = null, this.miniappPusherState = null, 
            this.miniappPlayerState = null, e && (void 0 !== e.uri && null !== e.uri && (this.uri = e.uri), 
            void 0 !== e.miniappSession && null !== e.miniappSession && (this.miniappSession = new s(e.miniappSession)), 
            void 0 !== e.miniappJoinChooseServer && null !== e.miniappJoinChooseServer && (this.miniappJoinChooseServer = new a(e.miniappJoinChooseServer)), 
            void 0 !== e.miniappConnectWebSocket && null !== e.miniappConnectWebSocket && (this.miniappConnectWebSocket = new o(e.miniappConnectWebSocket)), 
            void 0 !== e.miniappJoin && null !== e.miniappJoin && (this.miniappJoin = new l(e.miniappJoin)), 
            void 0 !== e.miniappPublish && null !== e.miniappPublish && (this.miniappPublish = new u(e.miniappPublish)), 
            void 0 !== e.miniappUnpublish && null !== e.miniappUnpublish && (this.miniappUnpublish = new d(e.miniappUnpublish)), 
            void 0 !== e.miniappSubscribe && null !== e.miniappSubscribe && (this.miniappSubscribe = new h(e.miniappSubscribe)), 
            void 0 !== e.miniappUnsubscribe && null !== e.miniappUnsubscribe && (this.miniappUnsubscribe = new c(e.miniappUnsubscribe)), 
            void 0 !== e.miniappLeave && null !== e.miniappLeave && (this.miniappLeave = new p(e.miniappLeave)), 
            void 0 !== e.miniappServerEvent && null !== e.miniappServerEvent && (this.miniappServerEvent = new f(e.miniappServerEvent)), 
            void 0 !== e.miniappPusherState && null !== e.miniappPusherState && (this.miniappPusherState = new v(e.miniappPusherState)), 
            void 0 !== e.miniappPlayerState && null !== e.miniappPlayerState && (this.miniappPlayerState = new T(e.miniappPlayerState)));
        };
        (y.prototype = {}).read = function(e) {
            for (e.readStructBegin(); ;) {
                var i = e.readFieldBegin(), t = (i.fname, i.ftype), n = i.fid;
                if (t == r.Type.STOP) break;
                switch (n) {
                  case 1:
                    t == r.Type.I32 ? this.uri = e.readI32().value : e.skip(t);
                    break;

                  case 8e3:
                    t == r.Type.STRUCT ? (this.miniappSession = new s(), this.miniappSession.read(e)) : e.skip(t);
                    break;

                  case 8001:
                    t == r.Type.STRUCT ? (this.miniappJoinChooseServer = new a(), this.miniappJoinChooseServer.read(e)) : e.skip(t);
                    break;

                  case 8002:
                    t == r.Type.STRUCT ? (this.miniappConnectWebSocket = new o(), this.miniappConnectWebSocket.read(e)) : e.skip(t);
                    break;

                  case 8003:
                    t == r.Type.STRUCT ? (this.miniappJoin = new l(), this.miniappJoin.read(e)) : e.skip(t);
                    break;

                  case 8004:
                    t == r.Type.STRUCT ? (this.miniappPublish = new u(), this.miniappPublish.read(e)) : e.skip(t);
                    break;

                  case 8005:
                    t == r.Type.STRUCT ? (this.miniappUnpublish = new d(), this.miniappUnpublish.read(e)) : e.skip(t);
                    break;

                  case 8006:
                    t == r.Type.STRUCT ? (this.miniappSubscribe = new h(), this.miniappSubscribe.read(e)) : e.skip(t);
                    break;

                  case 8007:
                    t == r.Type.STRUCT ? (this.miniappUnsubscribe = new c(), this.miniappUnsubscribe.read(e)) : e.skip(t);
                    break;

                  case 8008:
                    t == r.Type.STRUCT ? (this.miniappLeave = new p(), this.miniappLeave.read(e)) : e.skip(t);
                    break;

                  case 8009:
                    t == r.Type.STRUCT ? (this.miniappServerEvent = new f(), this.miniappServerEvent.read(e)) : e.skip(t);
                    break;

                  case 8010:
                    t == r.Type.STRUCT ? (this.miniappPusherStateEvent = new MiniappPusherStateEvent(), 
                    this.miniappPusherStateEvent.read(e)) : e.skip(t);
                    break;

                  case 8011:
                    t == r.Type.STRUCT ? (this.miniappPlayerStateEvent = new MiniappPlayerStateEvent(), 
                    this.miniappPlayerStateEvent.read(e)) : e.skip(t);
                    break;

                  default:
                    e.skip(t);
                }
                e.readFieldEnd();
            }
            e.readStructEnd();
        }, y.prototype.write = function(e) {
            e.writeStructBegin("ReportItem"), null !== this.uri && void 0 !== this.uri && (e.writeFieldBegin("uri", r.Type.I32, 1), 
            e.writeI32(this.uri), e.writeFieldEnd()), null !== this.miniappSession && void 0 !== this.miniappSession && (e.writeFieldBegin("miniappSession", r.Type.STRUCT, 8e3), 
            this.miniappSession.write(e), e.writeFieldEnd()), null !== this.miniappJoinChooseServer && void 0 !== this.miniappJoinChooseServer && (e.writeFieldBegin("miniappJoinChooseServer", r.Type.STRUCT, 8001), 
            this.miniappJoinChooseServer.write(e), e.writeFieldEnd()), null !== this.miniappConnectWebSocket && void 0 !== this.miniappConnectWebSocket && (e.writeFieldBegin("miniappConnectWebSocket", r.Type.STRUCT, 8002), 
            this.miniappConnectWebSocket.write(e), e.writeFieldEnd()), null !== this.miniappJoin && void 0 !== this.miniappJoin && (e.writeFieldBegin("miniappJoin", r.Type.STRUCT, 8003), 
            this.miniappJoin.write(e), e.writeFieldEnd()), null !== this.miniappPublish && void 0 !== this.miniappPublish && (e.writeFieldBegin("miniappPublish", r.Type.STRUCT, 8004), 
            this.miniappPublish.write(e), e.writeFieldEnd()), null !== this.miniappUnpublish && void 0 !== this.miniappUnpublish && (e.writeFieldBegin("miniappUnpublish", r.Type.STRUCT, 8005), 
            this.miniappUnpublish.write(e), e.writeFieldEnd()), null !== this.miniappSubscribe && void 0 !== this.miniappSubscribe && (e.writeFieldBegin("miniappSubscribe", r.Type.STRUCT, 8006), 
            this.miniappSubscribe.write(e), e.writeFieldEnd()), null !== this.miniappUnsubscribe && void 0 !== this.miniappUnsubscribe && (e.writeFieldBegin("miniappUnsubscribe", r.Type.STRUCT, 8007), 
            this.miniappUnsubscribe.write(e), e.writeFieldEnd()), null !== this.miniappLeave && void 0 !== this.miniappLeave && (e.writeFieldBegin("miniappLeave", r.Type.STRUCT, 8008), 
            this.miniappLeave.write(e), e.writeFieldEnd()), null !== this.miniappServerEvent && void 0 !== this.miniappServerEvent && (e.writeFieldBegin("miniappServerEvent", r.Type.STRUCT, 8009), 
            this.miniappServerEvent.write(e), e.writeFieldEnd()), null !== this.miniappPusherStateEvent && void 0 !== this.miniappPusherStateEvent && (e.writeFieldBegin("miniappPusherStateEvent", r.Type.STRUCT, 8010), 
            this.miniappPusherStateEvent.write(e), e.writeFieldEnd()), null !== this.miniappPlayerStateEvent && void 0 !== this.miniappPlayerStateEvent && (e.writeFieldBegin("miniappPlayerStateEvent", r.Type.STRUCT, 8011), 
            this.miniappPlayerStateEvent.write(e), e.writeFieldEnd()), e.writeFieldStop(), e.writeStructEnd();
        }, e.exports = y;
    }, function(e, i, t) {
        var r = t(2).default, n = function(e) {
            this.sid = null, this.cname = null, this.cid = null, this.lts = null, this.ip = null, 
            this.uid = null, this.success = null, this.elapse = null, this.peer = null, e && (void 0 !== e.sid && null !== e.sid && (this.sid = e.sid), 
            void 0 !== e.cname && null !== e.cname && (this.cname = e.cname), void 0 !== e.cid && null !== e.cid && (this.cid = e.cid), 
            void 0 !== e.lts && null !== e.lts && (this.lts = e.lts), void 0 !== e.ip && null !== e.ip && (this.ip = e.ip), 
            void 0 !== e.uid && null !== e.uid && (this.uid = e.uid), void 0 !== e.success && null !== e.success && (this.success = e.success), 
            void 0 !== e.elapse && null !== e.elapse && (this.elapse = e.elapse), void 0 !== e.peer && null !== e.peer && (this.peer = e.peer));
        };
        (n.prototype = {}).read = function(e) {
            for (e.readStructBegin(); ;) {
                var i = e.readFieldBegin(), t = (i.fname, i.ftype), n = i.fid;
                if (t == r.Type.STOP) break;
                switch (n) {
                  case 1:
                    t == r.Type.STRING ? this.sid = e.readString().value : e.skip(t);
                    break;

                  case 2:
                    t == r.Type.STRING ? this.cname = e.readString().value : e.skip(t);
                    break;

                  case 3:
                    t == r.Type.I64 ? this.cid = e.readI64().value : e.skip(t);
                    break;

                  case 4:
                    t == r.Type.I64 ? this.lts = e.readI64().value : e.skip(t);
                    break;

                  case 5:
                    t == r.Type.STRING ? this.ip = e.readString().value : e.skip(t);
                    break;

                  case 6:
                    t == r.Type.I64 ? this.uid = e.readI64().value : e.skip(t);
                    break;

                  case 7:
                    t == r.Type.BOOL ? this.success = e.readBool().value : e.skip(t);
                    break;

                  case 8:
                    t == r.Type.I64 ? this.elapse = e.readI64().value : e.skip(t);
                    break;

                  case 9:
                    t == r.Type.I64 ? this.peer = e.readI64().value : e.skip(t);
                    break;

                  default:
                    e.skip(t);
                }
                e.readFieldEnd();
            }
            e.readStructEnd();
        }, n.prototype.write = function(e) {
            e.writeStructBegin("VosdkHeader"), null !== this.sid && void 0 !== this.sid && (e.writeFieldBegin("sid", r.Type.STRING, 1), 
            e.writeString(this.sid), e.writeFieldEnd()), null !== this.cname && void 0 !== this.cname && (e.writeFieldBegin("cname", r.Type.STRING, 2), 
            e.writeString(this.cname), e.writeFieldEnd()), null !== this.cid && void 0 !== this.cid && (e.writeFieldBegin("cid", r.Type.I64, 3), 
            e.writeI64(this.cid), e.writeFieldEnd()), null !== this.lts && void 0 !== this.lts && (e.writeFieldBegin("lts", r.Type.I64, 4), 
            e.writeI64(this.lts), e.writeFieldEnd()), null !== this.ip && void 0 !== this.ip && (e.writeFieldBegin("ip", r.Type.STRING, 5), 
            e.writeString(this.ip), e.writeFieldEnd()), null !== this.uid && void 0 !== this.uid && (e.writeFieldBegin("uid", r.Type.I64, 6), 
            e.writeI64(this.uid), e.writeFieldEnd()), null !== this.success && void 0 !== this.success && (e.writeFieldBegin("success", r.Type.BOOL, 7), 
            e.writeBool(this.success), e.writeFieldEnd()), null !== this.elapse && void 0 !== this.elapse && (e.writeFieldBegin("elapse", r.Type.I64, 8), 
            e.writeI64(this.elapse), e.writeFieldEnd()), null !== this.peer && void 0 !== this.peer && (e.writeFieldBegin("peer", r.Type.I64, 9), 
            e.writeI64(this.peer), e.writeFieldEnd()), e.writeFieldStop(), e.writeStructEnd();
        };
        var s = function(e) {
            this.name = null, this.lts = null, this.value = null, this.id = null, this.tagErrorCode = null, 
            e && (void 0 !== e.name && null !== e.name && (this.name = e.name), void 0 !== e.lts && null !== e.lts && (this.lts = e.lts), 
            void 0 !== e.value && null !== e.value && (this.value = e.value), void 0 !== e.id && null !== e.id && (this.id = e.id), 
            void 0 !== e.tagErrorCode && null !== e.tagErrorCode && (this.tagErrorCode = e.tagErrorCode));
        };
        (s.prototype = {}).read = function(e) {
            for (e.readStructBegin(); ;) {
                var i = e.readFieldBegin(), t = (i.fname, i.ftype), n = i.fid;
                if (t == r.Type.STOP) break;
                switch (n) {
                  case 1:
                    t == r.Type.STRING ? this.name = e.readString().value : e.skip(t);
                    break;

                  case 2:
                    t == r.Type.I64 ? this.lts = e.readI64().value : e.skip(t);
                    break;

                  case 3:
                    t == r.Type.I32 ? this.value = e.readI32().value : e.skip(t);
                    break;

                  case 4:
                    t == r.Type.I32 ? this.id = e.readI32().value : e.skip(t);
                    break;

                  case 5:
                    t == r.Type.I32 ? this.tagErrorCode = e.readI32().value : e.skip(t);
                    break;

                  default:
                    e.skip(t);
                }
                e.readFieldEnd();
            }
            e.readStructEnd();
        }, s.prototype.write = function(e) {
            e.writeStructBegin("VosdkCounterItem"), null !== this.name && void 0 !== this.name && (e.writeFieldBegin("name", r.Type.STRING, 1), 
            e.writeString(this.name), e.writeFieldEnd()), null !== this.lts && void 0 !== this.lts && (e.writeFieldBegin("lts", r.Type.I64, 2), 
            e.writeI64(this.lts), e.writeFieldEnd()), null !== this.value && void 0 !== this.value && (e.writeFieldBegin("value", r.Type.I32, 3), 
            e.writeI32(this.value), e.writeFieldEnd()), null !== this.id && void 0 !== this.id && (e.writeFieldBegin("id", r.Type.I32, 4), 
            e.writeI32(this.id), e.writeFieldEnd()), null !== this.tagErrorCode && void 0 !== this.tagErrorCode && (e.writeFieldBegin("tagErrorCode", r.Type.I32, 5), 
            e.writeI32(this.tagErrorCode), e.writeFieldEnd()), e.writeFieldStop(), e.writeStructEnd();
        };
        var a = function(e) {
            this.header = null, this.items = null, e && (void 0 !== e.header && null !== e.header && (this.header = new n(e.header)), 
            void 0 !== e.items && null !== e.items && (this.items = r.copyList(e.items, [ s ])));
        };
        (a.prototype = {}).read = function(e) {
            for (e.readStructBegin(); ;) {
                var i = e.readFieldBegin(), t = (i.fname, i.ftype), a = i.fid;
                if (t == r.Type.STOP) break;
                switch (a) {
                  case 1:
                    t == r.Type.STRUCT ? (this.header = new n(), this.header.read(e)) : e.skip(t);
                    break;

                  case 2:
                    if (t == r.Type.LIST) {
                        var o, l;
                        this.items = [], (o = e.readListBegin()).etype, l = o.size;
                        for (var u = 0; u < l; ++u) {
                            var d = null;
                            (d = new s()).read(e), this.items.push(d);
                        }
                        e.readListEnd();
                    } else e.skip(t);
                    break;

                  default:
                    e.skip(t);
                }
                e.readFieldEnd();
            }
            e.readStructEnd();
        }, a.prototype.write = function(e) {
            if (e.writeStructBegin("VosdkCounter"), null !== this.header && void 0 !== this.header && (e.writeFieldBegin("header", r.Type.STRUCT, 1), 
            this.header.write(e), e.writeFieldEnd()), null !== this.items && void 0 !== this.items) {
                for (var i in e.writeFieldBegin("items", r.Type.LIST, 2), e.writeListBegin(r.Type.STRUCT, this.items.length), 
                this.items) this.items.hasOwnProperty(i) && (i = this.items[i]).write(e);
                e.writeListEnd(), e.writeFieldEnd();
            }
            e.writeFieldStop(), e.writeStructEnd();
        }, e.exports = {
            VosdkHeader: n,
            VosdkCounter: a,
            VosdkCounterItem: s
        };
    }, function(e, i, t) {
        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }
        Object.defineProperty(i, "__esModule", {
            value: !0
        }), i.SDK_VERSION = i.Log = i.LOG = i.Client = void 0;
        var n = r(t(9)), s = t(1), a = r(s), o = t(0);
        i.Client = n.default, i.LOG = a.default, i.Log = s.Log, i.SDK_VERSION = o.SDK_VERSION;
    }, function(e, i, t) {
        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var n = function() {
            function e(e, i) {
                for (var t = 0; t < i.length; t++) {
                    var r = i[t];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), 
                    Object.defineProperty(e, r.key, r);
                }
            }
            return function(i, t, r) {
                return t && e(i.prototype, t), r && e(i, r), i;
            };
        }(), s = t(4), a = r((function(e) {
            if (e && e.__esModule) return e;
            var i = {};
            if (null != e) for (var t in e) Object.prototype.hasOwnProperty.call(e, t) && (i[t] = e[t]);
            i.default = e;
        }(t(0)), t(13))), o = r(t(3)), l = r(t(20)), u = function() {
            function e(i) {
                var t = this;
                (function(e, i) {
                    if (!(e instanceof i)) throw new TypeError("Cannot call a class as a function");
                })(this, e), this.emitter = new o.default(), this.on = this.emitter.on, this.off = this.emitter.off, 
                this.sid = (0, s.generateSessionId)(), this.pushUrl = null, this.playUrls = new Map(), 
                this.servers = i && i.servers, this.reportManager = new l.default(), this.role = "broadcaster", 
                this.emitter.on("stream-removed", function(e) {
                    t.playUrls && t.playUrls.delete(e.uid);
                });
            }
            return n(e, [ {
                key: "init",
                value: function(e, i, t) {
                    if (!e || "string" != typeof e || "null" === e.toLowerCase()) throw Error("Invalid appId");
                    this.appId = e.trim(), this.reportManager.report("sessionStart", {
                        header: {
                            sid: this.sid,
                            lts: +new Date(),
                            success: !0
                        },
                        body: {
                            appId: e
                        }
                    }), i && i();
                }
            }, {
                key: "setRole",
                value: function(e, i, t) {
                    if ("broadcaster" === !e && "audience" === !e) throw Error("Invalid role");
                    this.role = e, this.worker && this.worker.setRole(e).then(function(e) {
                        setTimeout(function() {
                            if (!e) return i && i();
                            i && i({
                                updateURL: e["update-url"]
                            });
                        }, 1);
                    }).catch(function() {
                        t && t();
                    });
                }
            }, {
                key: "rejoin",
                value: function(e, i, t, r, n, o) {
                    var l = this;
                    if (!this.worker) {
                        if (e) {
                            if ("string" != typeof e || "null" === e.toLowerCase()) throw Error("Invalid channelKey");
                        } else e = this.appId;
                        if (!i || "string" != typeof i || "null" === i.toLowerCase() || i.length > 128) throw Error("Invalid channel");
                        if (this.uid = t || (0, s.random)(1e7), this.uid = Number.parseInt(this.uid), !(0, 
                        s.is32Uint)(this.uid)) throw new Error("Invalid uid type");
                        this.channel = i, this.worker = new a.default({
                            appId: this.appId,
                            channel: this.channel,
                            uid: this.uid,
                            sid: this.sid,
                            role: this.role,
                            servers: this.servers,
                            channelKey: e,
                            reportManager: this.reportManager
                        }, this.emitter), this.worker.connect().then(function() {
                            return l.worker.rejoin(r);
                        }).then(function() {
                            try {
                                l.reportManager.report("join", {
                                    header: {
                                        sid: l.sid,
                                        cname: l.channel,
                                        uid: l.uid,
                                        success: !0
                                    },
                                    body: {
                                        isrejoin: !0,
                                        appId: l.appId,
                                        wsurl: l.worker && l.worker.getWSUrl()
                                    }
                                });
                            } catch (e) {}
                            setTimeout(function() {
                                n && n(this.uid);
                            }, 1);
                        }).catch(function(e) {
                            try {
                                l.reportManager.report("join", {
                                    header: {
                                        sid: l.sid,
                                        cname: l.channel,
                                        uid: l.uid,
                                        success: !1
                                    },
                                    body: {
                                        ec: JSON.stringify(e),
                                        appId: l.appId,
                                        wsurl: l.worker && l.worker.getWSUrl()
                                    }
                                });
                            } catch (e) {}
                            l.destroy(), o && o(e);
                        });
                    }
                }
            }, {
                key: "join",
                value: function(e, i, t, r, n) {
                    var o = this;
                    if (!this.worker) {
                        if (e) {
                            if ("string" != typeof e || "null" === e.toLowerCase()) throw Error("Invalid channelKey");
                        } else e = this.appId;
                        if (!i || "string" != typeof i || "null" === i.toLowerCase() || i.length > 128) throw Error("Invalid channel");
                        if (this.uid = t || (0, s.random)(1e7), this.uid = Number.parseInt(this.uid), !(0, 
                        s.is32Uint)(this.uid)) throw new Error("Invalid uid type");
                        this.channel = i, this.worker = new a.default({
                            appId: this.appId,
                            channel: this.channel,
                            uid: this.uid,
                            sid: this.sid,
                            role: this.role,
                            servers: this.servers,
                            channelKey: e,
                            reportManager: this.reportManager
                        }, this.emitter), this.worker.connect().then(function() {
                            return o.worker.join();
                        }).then(function() {
                            try {
                                o.reportManager.report("join", {
                                    header: {
                                        sid: o.sid,
                                        cname: o.channel,
                                        uid: o.uid,
                                        success: !0
                                    },
                                    body: {
                                        isrejoin: !1,
                                        appId: o.appId,
                                        wsurl: o.worker && o.worker.getWSUrl()
                                    }
                                });
                            } catch (e) {}
                            setTimeout(function() {
                                r && r(this.uid);
                            }, 1);
                        }).catch(function(e) {
                            try {
                                o.reportManager.report("join", {
                                    header: {
                                        sid: o.sid,
                                        cname: o.channel,
                                        uid: o.uid,
                                        success: !1
                                    },
                                    body: {
                                        ec: JSON.stringify(e),
                                        appId: o.appId,
                                        wsurl: e.wsurl || o.worker && o.worker.getWSUrl()
                                    }
                                });
                            } catch (e) {}
                            o.destroy(), n && n(e);
                        });
                    }
                }
            }, {
                key: "publish",
                value: function(e, i) {
                    var t = this;
                    this._checkWorker(), this.worker.publish().then(function(i) {
                        t.pushUrl = i.url;
                        try {
                            t.reportManager.report("publish", {
                                header: {
                                    sid: t.sid,
                                    cname: t.channel,
                                    uid: t.uid,
                                    success: !0
                                },
                                body: {
                                    pushurl: i.url
                                }
                            });
                        } catch (e) {}
                        setTimeout(function() {
                            e && e(i.url);
                        }, 1);
                    }).catch(function(e) {
                        t.reportManager.report("publish", {
                            header: {
                                sid: t.sid,
                                cname: t.channel,
                                uid: t.uid,
                                success: !1
                            },
                            body: {
                                ec: JSON.stringify(e)
                            }
                        }), i && i(e);
                    });
                }
            }, {
                key: "unpublish",
                value: function(e, i) {
                    var t = this;
                    this._checkWorker(), this.worker.unpublish().then(function(i) {
                        t.pushUrl = null;
                        try {
                            t.reportManager.report("unpublish", {
                                header: {
                                    sid: t.sid,
                                    cname: t.channel,
                                    uid: t.uid,
                                    success: !0
                                },
                                body: {}
                            });
                        } catch (e) {}
                        setTimeout(function() {
                            e && e();
                        }, 1);
                    }).catch(function(e) {
                        t.reportManager.report("unpublish", {
                            header: {
                                sid: t.sid,
                                cname: t.channel,
                                uid: t.uid,
                                success: !1
                            },
                            body: {
                                ec: JSON.stringify(e)
                            }
                        }), i && i(e);
                    });
                }
            }, {
                key: "subscribe",
                value: function(e, i, t) {
                    var r = this;
                    this._checkUid(e), this._checkWorker(), this.worker.subscribe(e).then(function(t) {
                        r.playUrls.set(e, t.url);
                        try {
                            r.reportManager.report("subscribe", {
                                header: {
                                    sid: r.sid,
                                    cname: r.channel,
                                    uid: r.uid,
                                    success: !0
                                },
                                body: {
                                    pullurl: t.url
                                }
                            });
                        } catch (e) {}
                        setTimeout(function() {
                            i && i(t.url, t.rotation);
                        }, 1);
                    }).catch(function(e) {
                        r.reportManager.report("subscribe", {
                            header: {
                                sid: r.sid,
                                cname: r.channel,
                                uid: r.uid,
                                success: !1
                            },
                            body: {
                                ec: JSON.stringify(e)
                            }
                        }), t && t(e);
                    });
                }
            }, {
                key: "unsubscribe",
                value: function(e, i, t) {
                    var r = this;
                    this._checkUid(e), this._checkWorker(), this.worker.unsubscribe(e).then(function(t) {
                        r.playUrls.delete(e);
                        try {
                            r.reportManager.report("unsubscribe", {
                                header: {
                                    sid: r.sid,
                                    cname: r.channel,
                                    uid: r.uid,
                                    success: !1
                                },
                                body: {}
                            });
                        } catch (e) {}
                        setTimeout(function() {
                            i && i();
                        }, 1);
                    }).catch(function(e) {
                        r.reportManager.report("unsubscribe", {
                            header: {
                                sid: r.sid,
                                cname: r.channel,
                                uid: r.uid,
                                success: !1
                            },
                            body: {
                                ec: JSON.stringify(e)
                            }
                        }), t && t(e);
                    });
                }
            }, {
                key: "mute",
                value: function(e, i, t, r) {
                    if (this._checkUid(e), this._checkWorker(), "video" !== i && "audio" !== i && "all" !== i) throw new Error('target should be "video", "audio" or "all"');
                    this.worker.mute(e, i).then(function(e) {
                        setTimeout(function() {
                            t && t();
                        }, 1);
                    }).catch(function(e) {
                        r && r(e);
                    });
                }
            }, {
                key: "unmute",
                value: function(e, i, t, r) {
                    if (this._checkUid(e), this._checkWorker(), "video" !== i && "audio" !== i && "all" !== i) throw new Error('target should be "video", "audio" or "all"');
                    this.worker.unmute(e, i).then(function(e) {
                        setTimeout(function() {
                            t && t();
                        }, 1);
                    }).catch(function(e) {
                        r && r(e);
                    });
                }
            }, {
                key: "muteLocal",
                value: function(e, i, t) {
                    if (this._checkWorker(), "video" !== e && "audio" !== e && "all" !== e) throw new Error('target should be "video", "audio" or "all"');
                    this.worker.muteLocal(e).then(function(e) {
                        setTimeout(function() {
                            i && i();
                        }, 1);
                    }).catch(function(e) {
                        t && t(e);
                    });
                }
            }, {
                key: "unmuteLocal",
                value: function(e, i, t) {
                    if (this._checkWorker(), "video" !== e && "audio" !== e && "all" !== e) throw new Error('target should be "video", "audio" or "all"');
                    this.worker.unmuteLocal(e).then(function(e) {
                        setTimeout(function() {
                            i && i();
                        }, 1);
                    }).catch(function(e) {
                        t && t(e);
                    });
                }
            }, {
                key: "leave",
                value: function(e, i) {
                    var t = this;
                    this.worker && this.worker.isWSConnected() && this.worker.leave().then(function(i) {
                        try {
                            t.reportManager.report("leave", {
                                header: {
                                    sid: t.sid,
                                    cname: t.channel,
                                    uid: t.uid,
                                    success: !0
                                },
                                body: {}
                            });
                        } catch (e) {}
                        t.destroy(function() {
                            setTimeout(function() {
                                e && e();
                            }, 1);
                        });
                    }).catch(function(e) {
                        i && i(e);
                    });
                }
            }, {
                key: "_checkUid",
                value: function(e) {
                    if (!e || "number" != typeof e || !(0, s.is32Uint)(e)) throw new Error("Invalid uid type");
                }
            }, {
                key: "_checkWorker",
                value: function() {
                    if (!this.worker || !this.worker.isWSConnected()) throw new Error("Disconnected from server");
                }
            }, {
                key: "isConnected",
                value: function() {
                    return !(!this.worker || !this.worker.isWSConnected());
                }
            }, {
                key: "updatePusherStateChange",
                value: function(e) {
                    if (this.pushUrl) {
                        var i = e.detail.code;
                        if (1008 == i || i < 0) {
                            var t = 1008 == i;
                            this.reportManager && this.reportManager.report("pusherState", {
                                header: {
                                    sid: this.sid,
                                    cname: this.channel,
                                    uid: this.uid,
                                    success: t
                                },
                                body: {
                                    url: this.pushUrl,
                                    code: i
                                }
                            });
                        }
                    }
                }
            }, {
                key: "updatePlayerStateChange",
                value: function(e, i) {
                    var t = this.playUrls.get(e);
                    if (t) {
                        var r = i.detail.code;
                        if (2004 == r || r < 0 || r > 3e3) {
                            var n = 2004 == r;
                            this.reportManager && this.reportManager.report("playerState", {
                                header: {
                                    sid: this.sid,
                                    cname: this.channel,
                                    uid: e,
                                    success: n
                                },
                                body: {
                                    url: t,
                                    code: r
                                }
                            });
                        }
                    }
                }
            }, {
                key: "updatePusherNetStatus",
                value: function(e) {}
            }, {
                key: "updatePlayerNetStatus",
                value: function(e, i) {}
            }, {
                key: "updatePusherError",
                value: function(e) {}
            }, {
                key: "updatePlayerError",
                value: function(e, i) {}
            }, {
                key: "send",
                value: function(e, i, t) {
                    this._checkWorker(), this.worker.send(e).then(function(e) {
                        i && i(e);
                    }).catch(function(e) {
                        t && t(e);
                    });
                }
            }, {
                key: "updatePushUrl",
                value: function(e, i) {
                    this._checkWorker(), this.worker.updatePushUrl().then(function(i) {
                        setTimeout(function() {
                            e && e(i);
                        }, 1);
                    }).catch(function(e) {
                        i && i(e);
                    });
                }
            }, {
                key: "destroy",
                value: function(e, i) {
                    var t = this;
                    this.worker ? (this.worker.destroy(function() {
                        t.pushUrl = null, t.playUrls = null, e && e();
                    }), this.worker = null) : (this.pushUrl = null, this.playUrls = null, e && e());
                }
            } ]), e;
        }();
        i.default = u;
    }, function(e, i, t) {
        var r = t(11), n = t(12);
        e.exports = function(e, i, t) {
            var s = i && t || 0;
            "string" == typeof e && (i = "binary" === e ? new Array(16) : null, e = null);
            var a = (e = e || {}).random || (e.rng || r)();
            if (a[6] = 15 & a[6] | 64, a[8] = 63 & a[8] | 128, i) for (var o = 0; o < 16; ++o) i[s + o] = a[o];
            return i || n(a);
        };
    }, function(e, i) {
        var t = "undefined" != typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || "undefined" != typeof msCrypto && "function" == typeof window.msCrypto.getRandomValues && msCrypto.getRandomValues.bind(msCrypto);
        if (t) {
            var r = new Uint8Array(16);
            e.exports = function() {
                return t(r), r;
            };
        } else {
            var n = new Array(16);
            e.exports = function() {
                for (var e, i = 0; i < 16; i++) 0 == (3 & i) && (e = 4294967296 * Math.random()), 
                n[i] = e >>> ((3 & i) << 3) & 255;
                return n;
            };
        }
    }, function(e, i) {
        for (var t = [], r = 0; r < 256; ++r) t[r] = (r + 256).toString(16).substr(1);
        e.exports = function(e, i) {
            var r = i || 0, n = t;
            return [ n[e[r++]], n[e[r++]], n[e[r++]], n[e[r++]], "-", n[e[r++]], n[e[r++]], "-", n[e[r++]], n[e[r++]], "-", n[e[r++]], n[e[r++]], "-", n[e[r++]], n[e[r++]], n[e[r++]], n[e[r++]], n[e[r++]], n[e[r++]] ].join("");
        };
    }, function(e, i, t) {
        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var n = function() {
            function e(e, i) {
                for (var t = 0; t < i.length; t++) {
                    var r = i[t];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), 
                    Object.defineProperty(e, r.key, r);
                }
            }
            return function(i, t, r) {
                return t && e(i.prototype, t), r && e(i, r), i;
            };
        }(), s = r(t(1)), a = r(t(14)), o = r(t(19)), l = r(t(3)), u = function() {
            function e(i, t) {
                (function(e, i) {
                    if (!(e instanceof i)) throw new TypeError("Cannot call a class as a function");
                })(this, e), this.appId = i.appId, this.channel = i.channel, this.uid = i.uid, this.sid = i.sid, 
                this.role = i.role, this.channelKey = i.channelKey, this.option = i, this.timers = new Set(), 
                this.clientEmitter = t, this.emitter = new l.default(), this.on = this.emitter.on, 
                this.off = this.emitter.off, this.emit = this.emitter.emit, this.join = this.join.bind(this), 
                this.msgManager = new o.default(i);
            }
            return n(e, [ {
                key: "connect",
                value: function() {
                    var e = this;
                    return new Promise(function(i, t) {
                        e.ws = new a.default(e.option, e.emitter), e.ws.connect(), e.on("onmessage", e._onMessage.bind(e));
                        e.on("socketError", t), e.on("onopen", function t() {
                            e.off && e.off("onopen", t), e._ping(), i();
                        }), e.on("onclose", function() {
                            return e.clientEmitter.emit("error", {
                                code: 904,
                                reason: "websocket disconnected"
                            });
                        });
                    });
                }
            }, {
                key: "_onMessage",
                value: function(e) {
                    if (e && e.data) {
                        var i = JSON.parse(e.data);
                        if (i && "pong" !== i.command && s.default.debug("worker message: ", i), i.requestId && this.emit(i.requestId, i), 
                        "serverStatus" === i.command) {
                            if (i.code && 200 !== i.code) {
                                if (503 === i.code) return;
                                this.clientEmitter.emit("error", {
                                    code: i.code,
                                    reason: i.reason || "server error"
                                });
                            }
                            if (i.serverStatus) {
                                s.default.info("Receive message from server: " + JSON.stringify(i.serverStatus));
                                var t = i.serverStatus.action;
                                this.clientEmitter.emit(t, i.serverStatus);
                            }
                        }
                    }
                }
            }, {
                key: "_sendMessage",
                value: function(e) {
                    var i = this;
                    if (this.ws) return new Promise(function(t, r) {
                        if (!i.isWSConnected()) return r({
                            code: 904,
                            reason: "websocket disconnected",
                            wsurl: i.getWSUrl()
                        });
                        "ping" !== e.command && s.default.debug("send to woker: ", e);
                        var n = e ? e.requestId : null, a = void 0, o = function e(s) {
                            if (i.ws) return i.off(n, e), clearTimeout(a), i.timers.delete(a), 200 == s.code ? t(s.serverResponse) : r({
                                code: s.code,
                                reason: s.msg || s.reason,
                                serverResponse: s.serverResponse,
                                wsurl: i.getWSUrl()
                            });
                        };
                        if (!n) return r({
                            code: 902,
                            reason: "no requestid"
                        });
                        i.ws.sendMessage(JSON.stringify(e)), i.on(n, o), a = setTimeout(function() {
                            return o({
                                code: 903,
                                reason: "time out"
                            });
                        }, 1e4), i.timers.add(a);
                    });
                }
            }, {
                key: "_ping",
                value: function() {
                    var e = this;
                    this.pingTimer = setInterval(function() {
                        e.ws.sendMessage(JSON.stringify(e.msgManager.ping()));
                    }, 3e3), this.ping2Timer = setInterval(function() {
                        e.ws.sendMessage(JSON.stringify(e.msgManager.ping2()));
                    }, 3e3);
                }
            }, {
                key: "setRole",
                value: function(e) {
                    return this._sendMessage(this.msgManager.setRole(e));
                }
            }, {
                key: "rejoin",
                value: function(e) {
                    return this._sendMessage(this.msgManager.rejoin(this.appId, this.channel, this.uid, this.channelKey, e, this.role));
                }
            }, {
                key: "join",
                value: function() {
                    return this._sendMessage(this.msgManager.join(this.appId, this.channel, this.uid, this.channelKey, this.role));
                }
            }, {
                key: "send",
                value: function(e) {
                    return this._sendMessage(this.msgManager.send(e));
                }
            }, {
                key: "updatePushUrl",
                value: function() {
                    return this._sendMessage(this.msgManager.updatePushUrl());
                }
            }, {
                key: "publish",
                value: function() {
                    return this._sendMessage(this.msgManager.publish(this.uid));
                }
            }, {
                key: "unpublish",
                value: function() {
                    return this._sendMessage(this.msgManager.unpublish(this.uid));
                }
            }, {
                key: "subscribe",
                value: function(e) {
                    return this._sendMessage(this.msgManager.subscribe(e));
                }
            }, {
                key: "unsubscribe",
                value: function(e) {
                    return this._sendMessage(this.msgManager.unsubscribe(e));
                }
            }, {
                key: "mute",
                value: function(e, i) {
                    return this._sendMessage(this.msgManager.mute(e, i));
                }
            }, {
                key: "unmute",
                value: function(e, i) {
                    return this._sendMessage(this.msgManager.unmute(e, i));
                }
            }, {
                key: "muteLocal",
                value: function(e) {
                    return this._sendMessage(this.msgManager.muteLocal(this.uid, e));
                }
            }, {
                key: "unmuteLocal",
                value: function(e) {
                    return this._sendMessage(this.msgManager.unmuteLocal(this.uid, e));
                }
            }, {
                key: "leave",
                value: function() {
                    return this._sendMessage(this.msgManager.leave(this.uid));
                }
            }, {
                key: "isWSConnected",
                value: function() {
                    return !!this.ws && this.ws.isConnected();
                }
            }, {
                key: "getWSUrl",
                value: function() {
                    return this.ws.serverlist[this.ws.index];
                }
            }, {
                key: "destroy",
                value: function(e) {
                    var i = this;
                    clearInterval(this.pingTimer), clearInterval(this.ping2Timer), this.timers.forEach(function(e) {
                        clearInterval(e);
                    }), this.timers = null, this.ws && this.ws.destroy(function() {
                        i.ws = null, i.emitter = null, i.on = null, i.off = null, i.emit = null, e && e();
                    });
                }
            } ]), e;
        }();
        i.default = u;
    }, function(e, i, t) {
        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var n = function() {
            function e(e, i) {
                for (var t = 0; t < i.length; t++) {
                    var r = i[t];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), 
                    Object.defineProperty(e, r.key, r);
                }
            }
            return function(i, t, r) {
                return t && e(i.prototype, t), r && e(i, r), i;
            };
        }(), s = (r(t(3)), t(1)), a = r(s), o = t(15), l = "disconnected", u = function() {
            function e(i, t) {
                (function(e, i) {
                    if (!(e instanceof i)) throw new TypeError("Cannot call a class as a function");
                })(this, e), this.serverlist = [], this.option = i, this.index = 0, this.isInit = !0, 
                this.state = l, this.hasInvokeClose = !1, this.emitter = t, this.on = this.emitter.on, 
                this.off = this.emitter.off, this.emit = this.emitter.emit;
            }
            return n(e, [ {
                key: "connect",
                value: function() {
                    var e = this;
                    this.state !== l && this.close(), (0, o.getServerList)(this.option).then(function(i) {
                        var t = i.serverlist, r = i.url;
                        a.default.debug("Get server list from " + r), e.index = 0, e.serverlist = t, e.option && e.option.servers && (e.serverlist = e.option.servers), 
                        a.default.debug("Connect server with list: ", e.serverlist), e.connectWorker(e.serverlist[e.index]);
                    }).catch(function(i) {
                        e.emit && e.emit("socketError", i);
                    });
                }
            }, {
                key: "connectWorker",
                value: function() {
                    var e = this;
                    this.state = "connecting";
                    var i = this.serverlist[this.index];
                    a.default.debug("Connect server: ", i);
                    var t = this.option, r = t.sid, n = t.channel, s = t.uid, o = t.reportManager;
                    this.ws = new wx.connectSocket({
                        url: i,
                        complete: function(e) {
                            return a.default.debug("wxSocket: complete: ", e);
                        },
                        fail: function(e) {
                            a.default.debug("wxSocket: fail: ", e), o && o.report("connectWebSocket", {
                                header: {
                                    sid: r,
                                    cname: n,
                                    uid: s,
                                    success: !1
                                },
                                body: {
                                    wsurl: i,
                                    ec: JSON.stringify(e)
                                }
                            });
                        },
                        success: function(e) {
                            a.default.debug("wxSocket success: ", e), o && o.report("connectWebSocket", {
                                header: {
                                    sid: r,
                                    cname: n,
                                    uid: s,
                                    success: !0
                                },
                                body: {
                                    wsurl: i
                                }
                            });
                        }
                    }), this.ws.onOpen(this._onopen.bind(this)), this.ws.onMessage(this._onmessage.bind(this)), 
                    this.establishWSTimeoutTimer = setTimeout(function() {
                        "connected" !== e.state && e.connectNextWorker();
                    }, 5e3);
                }
            }, {
                key: "connectNextWorker",
                value: function() {
                    this.state !== l && this.close(), a.default.debug(this.index, this.serverlist.length), 
                    this.index >= this.serverlist.length - 1 ? this.emit && this.emit("socketError", {
                        code: 905,
                        reason: "connect websocket failed",
                        wsurl: JSON.stringify(this.serverlist)
                    }) : (this.index++, this.connectWorker());
                }
            }, {
                key: "_onopen",
                value: function() {
                    a.default.info("websocket onopen"), clearTimeout(this.establishWSTimeoutTimer), 
                    this.state = "connected", this.isInit = !1, this.hasInvokeClose ? a.default.debug("Alread invoke ws.Close, will not throw onopen event") : (this.ws.onClose(this._onclose.bind(this)), 
                    this.emit && this.emit("onopen"));
                }
            }, {
                key: "_onclose",
                value: function(e) {
                    a.default.info("websocket onclose:" + JSON.stringify(e)), this.emitter.emit("_wsClose"), 
                    clearTimeout(this.establishWSTimeoutTimer), this.state = l, e && "close" == e.reason || this.hasInvokeClose || (this.isInit ? this.connectNextWorker() : this.emit && this.emit("onclose"));
                }
            }, {
                key: "_onmessage",
                value: function(e) {
                    this.hasInvokeClose || (a.default.blind("receive message: ", JSON.stringify(e)), 
                    this.isConnected() && this.emit && this.emit("onmessage", e));
                }
            }, {
                key: "isConnected",
                value: function() {
                    return "connected" === this.state;
                }
            }, {
                key: "sendMessage",
                value: function(e) {
                    a.default.blind("send message: ", e), this.isConnected() && this.ws && this.ws.send({
                        data: e
                    });
                }
            }, {
                key: "_checkServerList",
                value: function(e) {
                    return e instanceof Array != 0 && 0 != e.length;
                }
            }, {
                key: "destroy",
                value: function(e) {
                    var i = this;
                    this.state !== l && this.close();
                    this.on("_wsClose", function t() {
                        i.off("_wsClose", t), i.serverlist = null, i.ws = null, i.emitter = null, i.on = null, 
                        i.off = null, i.emit = null, e && e();
                    });
                }
            }, {
                key: "close",
                value: function() {
                    a.default.debug("Close websocket"), clearTimeout(this.establishWSTimeoutTimer), 
                    this.hasInvokeClose = !0, this.state = l, this.ws && this.ws.close({
                        reason: "close"
                    }), this.ws = null;
                }
            } ]), e;
        }();
        i.default = u;
    }, function(e, i, t) {
        Object.defineProperty(i, "__esModule", {
            value: !0
        }), i.getServerList = void 0;
        var r = t(0), n = function(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }((t(4), t(1))), s = (t(16), [ "https://miniapp-1.agoraio.cn/appcenter/1-1-1/getWorkerManager/", "https://miniapp-2.agoraio.cn/appcenter/1-1-1/getWorkerManager/", "https://miniapp-3.agoraio.cn/appcenter/1-1-1/getWorkerManager/", "https://miniapp-4.agoraio.cn/appcenter/1-1-1/getWorkerManager/" ]);
        i.getServerList = function(e) {
            var i = e.reportManager, t = {
                command: "convergeAllocateEdge",
                sid: e.sid,
                appId: e.appId,
                token: e.appId,
                uid: e.uid + "",
                cname: e.channel,
                ts: Math.floor(Date.now() / 1e3),
                version: r.VERSION,
                seq: 0,
                requestId: 1
            };
            return new Promise(function(r, a) {
                var o = 0, l = function(t, r) {
                    try {
                        i.report("chooseServer", {
                            header: {
                                sid: e.sid,
                                cname: e.channel,
                                uid: e.uid,
                                success: !1
                            },
                            body: {
                                csurl: r,
                                ec: JSON.stringify(t)
                            }
                        });
                    } catch (e) {}
                    4 == ++o && a(t);
                }, u = function(a) {
                    var o = s[a];
                    wx.request({
                        url: o,
                        data: t,
                        header: {
                            "content-type": "application/json"
                        },
                        method: "POST",
                        success: function(t) {
                            var s = t.data;
                            if (n.default.debug("From choose server", t), 200 !== s.code) l({
                                code: 901,
                                reason: s.error || "choose server fail"
                            }, o); else {
                                var a = function(e) {
                                    return e.map(function(e) {
                                        var i = (e = e.address).split("."), t = i.length;
                                        return "wss://miniapp.agoraio.cn/" + i[t - 4] + "-" + i[t - 3] + "-" + i[t - 2] + "-" + i[t - 1] + "/api";
                                    });
                                }(s.servers);
                                i.report("chooseServer", {
                                    header: {
                                        sid: e.sid,
                                        cname: e.channel,
                                        uid: e.uid,
                                        success: !0
                                    },
                                    body: {
                                        csurl: o,
                                        gatewaylist: a
                                    }
                                }), r({
                                    serverlist: a,
                                    url: o
                                });
                            }
                        },
                        fail: function(e) {
                            l({
                                code: 901,
                                reason: e.errMsg || "choose server fail"
                            }, o);
                        }
                    });
                };
                s.map(function(e, i) {
                    u(i);
                });
            });
        };
    }, function(e, i, t) {
        (function(e) {
            function r(e, i) {
                this._id = e, this._clearFn = i;
            }
            var n = void 0 !== e && e || "undefined" != typeof self && self || window, s = Function.prototype.apply;
            i.setTimeout = function() {
                return new r(s.call(setTimeout, n, arguments), clearTimeout);
            }, i.setInterval = function() {
                return new r(s.call(setInterval, n, arguments), clearInterval);
            }, i.clearTimeout = i.clearInterval = function(e) {
                e && e.close();
            }, r.prototype.unref = r.prototype.ref = function() {}, r.prototype.close = function() {
                this._clearFn.call(n, this._id);
            }, i.enroll = function(e, i) {
                clearTimeout(e._idleTimeoutId), e._idleTimeout = i;
            }, i.unenroll = function(e) {
                clearTimeout(e._idleTimeoutId), e._idleTimeout = -1;
            }, i._unrefActive = i.active = function(e) {
                clearTimeout(e._idleTimeoutId);
                var i = e._idleTimeout;
                i >= 0 && (e._idleTimeoutId = setTimeout(function() {
                    e._onTimeout && e._onTimeout();
                }, i));
            }, t(17), i.setImmediate = "undefined" != typeof self && self.setImmediate || void 0 !== e && e.setImmediate || this && this.setImmediate, 
            i.clearImmediate = "undefined" != typeof self && self.clearImmediate || void 0 !== e && e.clearImmediate || this && this.clearImmediate;
        }).call(i, t(5));
    }, function(e, i, t) {
        (function(e, i) {
            !function(e, t) {
                function r(e) {
                    delete o[e];
                }
                function n(e) {
                    if (l) setTimeout(n, 0, e); else {
                        var i = o[e];
                        if (i) {
                            l = !0;
                            try {
                                !function(e) {
                                    var i = e.callback, r = e.args;
                                    switch (r.length) {
                                      case 0:
                                        i();
                                        break;

                                      case 1:
                                        i(r[0]);
                                        break;

                                      case 2:
                                        i(r[0], r[1]);
                                        break;

                                      case 3:
                                        i(r[0], r[1], r[2]);
                                        break;

                                      default:
                                        i.apply(t, r);
                                    }
                                }(i);
                            } finally {
                                r(e), l = !1;
                            }
                        }
                    }
                }
                if (!e.setImmediate) {
                    var s, a = 1, o = {}, l = !1, u = e.document, d = Object.getPrototypeOf && Object.getPrototypeOf(e);
                    d = d && d.setTimeout ? d : e, "[object process]" === {}.toString.call(e.process) ? s = function(e) {
                        i.nextTick(function() {
                            n(e);
                        });
                    } : function() {
                        if (e.postMessage && !e.importScripts) {
                            var i = !0, t = e.onmessage;
                            return e.onmessage = function() {
                                i = !1;
                            }, e.postMessage("", "*"), e.onmessage = t, i;
                        }
                    }() ? function() {
                        var i = "setImmediate$" + Math.random() + "$", t = function(t) {
                            t.source === e && "string" == typeof t.data && 0 === t.data.indexOf(i) && n(+t.data.slice(i.length));
                        };
                        e.addEventListener ? e.addEventListener("message", t, !1) : e.attachEvent("onmessage", t), 
                        s = function(t) {
                            e.postMessage(i + t, "*");
                        };
                    }() : e.MessageChannel ? function() {
                        var e = new MessageChannel();
                        e.port1.onmessage = function(e) {
                            n(e.data);
                        }, s = function(i) {
                            e.port2.postMessage(i);
                        };
                    }() : u && "onreadystatechange" in u.createElement("script") ? function() {
                        var e = u.documentElement;
                        s = function(i) {
                            var t = u.createElement("script");
                            t.onreadystatechange = function() {
                                n(i), t.onreadystatechange = null, e.removeChild(t), t = null;
                            }, e.appendChild(t);
                        };
                    }() : s = function(e) {
                        setTimeout(n, 0, e);
                    }, d.setImmediate = function(e) {
                        "function" != typeof e && (e = new Function("" + e));
                        for (var i = new Array(arguments.length - 1), t = 0; t < i.length; t++) i[t] = arguments[t + 1];
                        var r = {
                            callback: e,
                            args: i
                        };
                        return o[a] = r, s(a), a++;
                    }, d.clearImmediate = r;
                }
            }("undefined" == typeof self ? void 0 === e ? this : e : self);
        }).call(i, t(5), t(18));
    }, function(e, i) {
        function t() {
            throw new Error("setTimeout has not been defined");
        }
        function r() {
            throw new Error("clearTimeout has not been defined");
        }
        function n(e) {
            if (u === setTimeout) return setTimeout(e, 0);
            if ((u === t || !u) && setTimeout) return u = setTimeout, setTimeout(e, 0);
            try {
                return u(e, 0);
            } catch (i) {
                try {
                    return u.call(null, e, 0);
                } catch (i) {
                    return u.call(this, e, 0);
                }
            }
        }
        function s() {
            f && c && (f = !1, c.length ? p = c.concat(p) : v = -1, p.length && a());
        }
        function a() {
            if (!f) {
                var e = n(s);
                f = !0;
                for (var i = p.length; i; ) {
                    for (c = p, p = []; ++v < i; ) c && c[v].run();
                    v = -1, i = p.length;
                }
                c = null, f = !1, function(e) {
                    if (d === clearTimeout) return clearTimeout(e);
                    if ((d === r || !d) && clearTimeout) return d = clearTimeout, clearTimeout(e);
                    try {
                        d(e);
                    } catch (i) {
                        try {
                            return d.call(null, e);
                        } catch (i) {
                            return d.call(this, e);
                        }
                    }
                }(e);
            }
        }
        function o(e, i) {
            this.fun = e, this.array = i;
        }
        function l() {}
        var u, d, h = e.exports = {};
        !function() {
            try {
                u = "function" == typeof setTimeout ? setTimeout : t;
            } catch (e) {
                u = t;
            }
            try {
                d = "function" == typeof clearTimeout ? clearTimeout : r;
            } catch (e) {
                d = r;
            }
        }();
        var c, p = [], f = !1, v = -1;
        h.nextTick = function(e) {
            var i = new Array(arguments.length - 1);
            if (arguments.length > 1) for (var t = 1; t < arguments.length; t++) i[t - 1] = arguments[t];
            p.push(new o(e, i)), 1 !== p.length || f || n(a);
        }, o.prototype.run = function() {
            this.fun.apply(null, this.array);
        }, h.title = "browser", h.browser = !0, h.env = {}, h.argv = [], h.version = "", 
        h.versions = {}, h.on = l, h.addListener = l, h.once = l, h.off = l, h.removeListener = l, 
        h.removeAllListeners = l, h.emit = l, h.prependListener = l, h.prependOnceListener = l, 
        h.listeners = function(e) {
            return [];
        }, h.binding = function(e) {
            throw new Error("process.binding is not supported");
        }, h.cwd = function() {
            return "/";
        }, h.chdir = function(e) {
            throw new Error("process.chdir is not supported");
        }, h.umask = function() {
            return 0;
        };
    }, function(e, i, t) {
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var r = function() {
            function e(e, i) {
                for (var t = 0; t < i.length; t++) {
                    var r = i[t];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), 
                    Object.defineProperty(e, r.key, r);
                }
            }
            return function(i, t, r) {
                return t && e(i.prototype, t), r && e(i, r), i;
            };
        }(), n = t(0), s = function() {
            function e(i) {
                (function(e, i) {
                    if (!(e instanceof i)) throw new TypeError("Cannot call a class as a function");
                })(this, e), this.appId = i.appId, this.channel = i.channel, this.uid = i.uid + "", 
                this.sid = i.sid, this.seq = 1, this.requestId = 2;
            }
            return r(e, [ {
                key: "setSid",
                value: function(e) {
                    this.sid = e;
                }
            }, {
                key: "_getWorkerManagerMsg",
                value: function() {
                    return {
                        appId: this.appId,
                        cname: this.channel,
                        uid: this.uid,
                        sid: this.sid,
                        sdkVersion: n.VERSION,
                        seq: ++this.seq,
                        requestId: ++this.requestId,
                        ts: Math.floor(Date.now() / 1e3)
                    };
                }
            }, {
                key: "send",
                value: function(e) {
                    var i = this._getWorkerManagerMsg();
                    return i.clientRequest = e, i;
                }
            }, {
                key: "updatePushUrl",
                value: function() {
                    var e = this._getWorkerManagerMsg();
                    return e.clientRequest = {
                        action: "update_url",
                        role: "publish",
                        uid: +this.uid
                    }, e;
                }
            }, {
                key: "ping",
                value: function() {
                    return {
                        command: "ping",
                        requestId: ++this.requestId,
                        appId: this.appId,
                        cname: this.channel,
                        uid: this.uid + "",
                        sid: this.sid,
                        ts: Math.floor(Date.now() / 1e3)
                    };
                }
            }, {
                key: "ping2",
                value: function() {
                    var e = this._getWorkerManagerMsg();
                    return e.clientRequest = {
                        action: "ping"
                    }, e;
                }
            }, {
                key: "setRole",
                value: function(e) {
                    var i = this._getWorkerManagerMsg();
                    return i.clientRequest = {
                        action: "set_role",
                        role: e
                    }, i;
                }
            }, {
                key: "rejoin",
                value: function(e, i, t, r, n, s) {
                    var a = this._getWorkerManagerMsg();
                    return a.clientRequest = {
                        action: "join",
                        role: s,
                        appId: e,
                        key_vocs: r || e,
                        key_vos: r || e,
                        channel_name: i,
                        uid: t + "",
                        known_speakers: n
                    }, a;
                }
            }, {
                key: "join",
                value: function(e, i, t, r, n) {
                    var s = this._getWorkerManagerMsg();
                    return s.clientRequest = {
                        action: "join",
                        role: n,
                        appId: e,
                        key_vocs: r || e,
                        key_vos: r || e,
                        channel_name: i,
                        uid: t + ""
                    }, s;
                }
            }, {
                key: "muteLocal",
                value: function(e, i) {
                    var t = this._getWorkerManagerMsg();
                    return t.clientRequest = {
                        action: "mute_local",
                        uid: +e,
                        target: i,
                        mute: !0
                    }, t;
                }
            }, {
                key: "unmuteLocal",
                value: function(e, i) {
                    var t = this._getWorkerManagerMsg();
                    return t.clientRequest = {
                        action: "mute_local",
                        uid: +e,
                        target: i,
                        mute: !1
                    }, t;
                }
            }, {
                key: "mute",
                value: function(e, i) {
                    var t = this._getWorkerManagerMsg();
                    return t.clientRequest = {
                        action: "mute",
                        uid: +e,
                        target: i
                    }, t;
                }
            }, {
                key: "unmute",
                value: function(e, i) {
                    var t = this._getWorkerManagerMsg();
                    return t.clientRequest = {
                        action: "unmute",
                        uid: +e,
                        target: i
                    }, t;
                }
            }, {
                key: "publish",
                value: function(e) {
                    var i = this._getWorkerManagerMsg();
                    return i.clientRequest = {
                        action: "publish",
                        uid: +e
                    }, i;
                }
            }, {
                key: "unpublish",
                value: function(e) {
                    var i = this._getWorkerManagerMsg();
                    return i.clientRequest = {
                        action: "unpublish",
                        uid: +e
                    }, i;
                }
            }, {
                key: "subscribe",
                value: function(e) {
                    var i = this._getWorkerManagerMsg();
                    return i.clientRequest = {
                        action: "subscribe",
                        uid: +e
                    }, i;
                }
            }, {
                key: "unsubscribe",
                value: function(e) {
                    var i = this._getWorkerManagerMsg();
                    return i.clientRequest = {
                        action: "unsubscribe",
                        uid: [ +e ]
                    }, i;
                }
            }, {
                key: "leave",
                value: function(e) {
                    var i = this._getWorkerManagerMsg();
                    return i.clientRequest = {
                        action: "leave",
                        uid: +e
                    }, i;
                }
            } ]), e;
        }();
        i.default = s;
    }, function(e, i, t) {
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var r = function() {
            function e(e, i) {
                for (var t = 0; t < i.length; t++) {
                    var r = i[t];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), 
                    Object.defineProperty(e, r.key, r);
                }
            }
            return function(i, t, r) {
                return t && e(i.prototype, t), r && e(i, r), i;
            };
        }(), n = t(0), s = function(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }(t(1)), a = t(21).ReportServiceClient, o = t(2).default, l = t(7).VosdkHeader, u = t(6), d = function() {
            function e() {
                (function(e, i) {
                    if (!(e instanceof i)) throw new TypeError("Cannot call a class as a function");
                })(this, e), this.transport = new o.TXHRTransport("https://uni-webcollector.agora.io/report"), 
                this.protocol = new o.TJSONProtocol(this.transport), this.client = new a(this.protocol), 
                this.seqId = 0, this._cache = [], this.isReporting = !1, this.retryCount = 0;
            }
            return r(e, [ {
                key: "generateHeader",
                value: function(e) {
                    if (e && e.sid) return new l({
                        sid: e.sid,
                        cname: e.cname || "",
                        lts: e.lts,
                        elapse: e.lts - this.startTime,
                        uid: e.uid,
                        success: e.success
                    });
                }
            }, {
                key: "report",
                value: function(e, i) {
                    var t = null;
                    if (i.header && (i.header.lts = +new Date(), "sessionStart" === e && (this.startTime = i.header.lts), 
                    t = this.generateHeader(i.header)), i.body && t) {
                        var r = i.body;
                        switch (e) {
                          case "sessionStart":
                            (s = new u({
                                miniappSession: !0
                            })).uri = 8e3, s.miniappSession.header = t, s.miniappSession.appid = r.appId, s.miniappSession.uname = r.uname, 
                            s.miniappSession.ver = n.SDK_VERSION, s.miniappSession.dk = r.dk, s.miniappSession.details = JSON.stringify({
                                seq: this.seqId++
                            });
                            break;

                          case "chooseServer":
                            (s = new u({
                                miniappJoinChooseServer: !0
                            })).uri = 8001, s.miniappJoinChooseServer.header = t, s.miniappJoinChooseServer.csurl = r.csurl, 
                            s.miniappJoinChooseServer.ec = r.ec, s.miniappJoinChooseServer.gatewaylist = r.gatewaylist, 
                            s.miniappJoinChooseServer.details = JSON.stringify({
                                seq: this.seqId++
                            });
                            break;

                          case "connectWebSocket":
                            (s = new u({
                                miniappConnectWebSocket: !0
                            })).uri = 8002, s.miniappConnectWebSocket.header = t, s.miniappConnectWebSocket.ec = r.ec, 
                            s.miniappConnectWebSocket.wsurl = r.wsurl, s.miniappConnectWebSocket.details = JSON.stringify({
                                seq: this.seqId++
                            });
                            break;

                          case "join":
                            (s = new u({
                                miniappJoin: !0
                            })).uri = 8003, s.miniappJoin.header = t, s.miniappJoin.ec = r.ec, s.miniappJoin.isrejoin = r.isrejoin, 
                            s.miniappJoin.details = JSON.stringify({
                                seq: this.seqId++,
                                appId: r.appId,
                                wsurl: r.wsurl
                            });
                            break;

                          case "publish":
                            (s = new u({
                                miniappPublish: !0
                            })).uri = 8004, s.miniappPublish.header = t, s.miniappPublish.ec = r.ec, s.miniappPublish.pushurl = r.pushurl, 
                            s.miniappPublish.details = JSON.stringify({
                                seq: this.seqId++
                            });
                            break;

                          case "unpublish":
                            (s = new u({
                                miniappUnpublish: !0
                            })).uri = 8005, s.miniappUnpublish.header = t, s.miniappUnpublish.ec = r.ec, s.miniappUnpublish.details = JSON.stringify({
                                seq: this.seqId++
                            });
                            break;

                          case "subscribe":
                            (s = new u({
                                miniappSubscribe: !0
                            })).uri = 8006, s.miniappSubscribe.header = t, s.miniappSubscribe.ec = r.ec, s.miniappSubscribe.pullurl = r.pullurl, 
                            s.miniappSubscribe.peerid = r.peerid, s.miniappSubscribe.details = JSON.stringify({
                                seq: this.seqId++
                            });
                            break;

                          case "unsubscribe":
                            (s = new u({
                                miniappUnsubscribe: !0
                            })).uri = 8007, s.miniappUnsubscribe.header = t, s.miniappUnsubscribe.ec = r.ec, 
                            s.miniappUnsubscribe.peerid = r.peerid, s.miniappUnsubscribe.details = JSON.stringify({
                                seq: this.seqId++
                            });
                            break;

                          case "leave":
                            (s = new u({
                                miniappLeave: !0
                            })).uri = 8008, s.miniappLeave.header = t, s.miniappLeave.ec = r.ec, s.miniappLeave.details = JSON.stringify({
                                seq: this.seqId++
                            });
                            break;

                          case "pusherState":
                            (s = new u({
                                miniappPusherState: !0
                            })).uri = 8010, s.miniappPusherState.header = t, s.miniappPusherState.url = r.url, 
                            s.miniappPusherState.code = r.code, s.miniappPusherState.status = r.status, s.miniappPusherState.error = r.error, 
                            s.miniappPusherState.details = JSON.stringify({
                                seq: this.seqId++
                            });
                            break;

                          case "playerState":
                            (s = new u({
                                miniappPlayerState: !0
                            })).uri = 8011, s.miniappPlayerState.header = t, s.miniappPlayerState.url = r.url, 
                            s.miniappPlayerState.code = r.code, s.miniappPlayerState.status = r.status, s.miniappPlayerState.error = r.error, 
                            s.miniappPlayerState.details = JSON.stringify({
                                seq: this.seqId++
                            });
                        }
                    }
                    if (this._cache.push(s), !this.isReporting && this._cache.length > 0) {
                        var s = this._cache.shift();
                        this._report(s);
                    }
                }
            }, {
                key: "_report",
                value: function(e) {
                    var i = this;
                    this.isReporting = !0, this.client.Report(e, function(t) {
                        if (t) {
                            s.default.debug("Report failed: ", t, e);
                            var r = i.retryCount++ < 2 ? 200 : 1e4;
                            setTimeout(function() {
                                i._report(e);
                            }, r);
                        } else {
                            s.default.debug("Report succcess: ", e);
                            var n = i._cache.shift();
                            n ? i._report(n) : i.isReporting = !1;
                        }
                    });
                }
            } ]), e;
        }();
        i.default = d;
    }, function(e, i, t) {
        var r = t(2).default, n = t(6), s = function(e) {
            this.item = null, e && void 0 !== e.item && null !== e.item && (this.item = new n(e.item));
        };
        (s.prototype = {}).read = function(e) {
            for (e.readStructBegin(); ;) {
                var i = e.readFieldBegin(), t = (i.fname, i.ftype), s = i.fid;
                if (t == r.Type.STOP) break;
                switch (s) {
                  case 1:
                    t == r.Type.STRUCT ? (this.item = new n(), this.item.read(e)) : e.skip(t);
                    break;

                  case 0:
                    e.skip(t);
                    break;

                  default:
                    e.skip(t);
                }
                e.readFieldEnd();
            }
            e.readStructEnd();
        }, s.prototype.write = function(e) {
            e.writeStructBegin("ReportService_Report_args"), null !== this.item && void 0 !== this.item && (e.writeFieldBegin("item", r.Type.STRUCT, 1), 
            this.item.write(e), e.writeFieldEnd()), e.writeFieldStop(), e.writeStructEnd();
        };
        var a = function(e) {};
        (a.prototype = {}).read = function(e) {
            for (e.readStructBegin(); ;) {
                var i = e.readFieldBegin(), t = (i.fname, i.ftype);
                if (i.fid, t == r.Type.STOP) break;
                e.skip(t), e.readFieldEnd();
            }
            e.readStructEnd();
        }, a.prototype.write = function(e) {
            e.writeStructBegin("ReportService_Report_result"), e.writeFieldStop(), e.writeStructEnd();
        };
        var o = function(e, i) {
            this.input = e, this.output = i || e, this.seqid = 0;
        };
        (o.prototype = {}).Report = function(e, i) {
            this.send_Report(e, i), i || this.recv_Report();
        }, o.prototype.send_Report = function(e, i) {
            if (this.output.writeMessageBegin("Report", r.MessageType.CALL, this.seqid), new s({
                item: e
            }).write(this.output), this.output.writeMessageEnd(), !i) return this.output.getTransport().flush();
            this.output.getTransport().flush(!0, function(e) {
                i(e);
            });
        }, o.prototype.recv_Report = function() {
            var e = this.input.readMessageBegin(), i = (e.fname, e.mtype);
            if (e.rseqid, i == r.MessageType.EXCEPTION) {
                var t = new r.TApplicationException();
                throw t.read(this.input), this.input.readMessageEnd(), t;
            }
            new a().read(this.input), this.input.readMessageEnd();
        }, e.exports = {
            ReportService_Report_args: s,
            ReportService_Report_result: a,
            ReportServiceClient: o
        };
    }, function(e, i, t) {
        var r = t(2).default, n = t(7).VosdkHeader, s = function(e) {
            this.header = null, this.appid = null, this.uname = null, this.ver = null, this.dk = null, 
            this.details = null, e && (void 0 !== e.header && null !== e.header && (this.header = new n(e.header)), 
            void 0 !== e.appid && null !== e.appid && (this.appid = e.appid), void 0 !== e.uname && null !== e.uname && (this.uname = e.uname), 
            void 0 !== e.ver && null !== e.ver && (this.ver = e.ver), void 0 !== e.dk && null !== e.dk && (this.dk = e.dk), 
            void 0 !== e.details && null !== e.details && (this.details = e.details));
        };
        (s.prototype = {}).read = function(e) {
            for (e.readStructBegin(); ;) {
                var i = e.readFieldBegin(), t = (i.fname, i.ftype), s = i.fid;
                if (t == r.Type.STOP) break;
                switch (s) {
                  case 1:
                    t == r.Type.STRUCT ? (this.header = new n(), this.header.read(e)) : e.skip(t);
                    break;

                  case 2:
                    t == r.Type.STRING ? this.appid = e.readString().value : e.skip(t);
                    break;

                  case 3:
                    t == r.Type.STRING ? this.uname = e.readString().value : e.skip(t);
                    break;

                  case 4:
                    t == r.Type.STRING ? this.ver = e.readString().value : e.skip(t);
                    break;

                  case 5:
                    t == r.Type.STRING ? this.dk = e.readString().value : e.skip(t);
                    break;

                  case 6:
                    t == r.Type.STRING ? this.details = e.readString().value : e.skip(t);
                    break;

                  default:
                    e.skip(t);
                }
                e.readFieldEnd();
            }
            e.readStructEnd();
        }, s.prototype.write = function(e) {
            e.writeStructBegin("MiniappSession"), null !== this.header && void 0 !== this.header && (e.writeFieldBegin("header", r.Type.STRUCT, 1), 
            this.header.write(e), e.writeFieldEnd()), null !== this.appid && void 0 !== this.appid && (e.writeFieldBegin("appid", r.Type.STRING, 2), 
            e.writeString(this.appid), e.writeFieldEnd()), null !== this.uname && void 0 !== this.uname && (e.writeFieldBegin("uname", r.Type.STRING, 3), 
            e.writeString(this.uname), e.writeFieldEnd()), null !== this.ver && void 0 !== this.ver && (e.writeFieldBegin("ver", r.Type.STRING, 4), 
            e.writeString(this.ver), e.writeFieldEnd()), null !== this.dk && void 0 !== this.dk && (e.writeFieldBegin("dk", r.Type.STRING, 5), 
            e.writeString(this.dk), e.writeFieldEnd()), null !== this.details && void 0 !== this.details && (e.writeFieldBegin("details", r.Type.STRING, 6), 
            e.writeString(this.details), e.writeFieldEnd()), e.writeFieldStop(), e.writeStructEnd();
        };
        var a = function(e) {
            this.header = null, this.csurl = null, this.ec = null, this.gatewaylist = null, 
            this.details = null, e && (void 0 !== e.header && null !== e.header && (this.header = new n(e.header)), 
            void 0 !== e.csurl && null !== e.csurl && (this.csurl = e.csurl), void 0 !== e.ec && null !== e.ec && (this.ec = e.ec), 
            void 0 !== e.gatewaylist && null !== e.gatewaylist && (this.gatewaylist = r.copyList(e.gatewaylist, [ null ])), 
            void 0 !== e.details && null !== e.details && (this.details = e.details));
        };
        (a.prototype = {}).read = function(e) {
            for (e.readStructBegin(); ;) {
                var i = e.readFieldBegin(), t = (i.fname, i.ftype), s = i.fid;
                if (t == r.Type.STOP) break;
                switch (s) {
                  case 1:
                    t == r.Type.STRUCT ? (this.header = new n(), this.header.read(e)) : e.skip(t);
                    break;

                  case 2:
                    t == r.Type.STRING ? this.csurl = e.readString().value : e.skip(t);
                    break;

                  case 3:
                    t == r.Type.STRING ? this.ec = e.readString().value : e.skip(t);
                    break;

                  case 4:
                    if (t == r.Type.LIST) {
                        var a, o;
                        this.gatewaylist = [], (a = e.readListBegin()).etype, o = a.size;
                        for (var l = 0; l < o; ++l) {
                            var u;
                            u = e.readString().value, this.gatewaylist.push(u);
                        }
                        e.readListEnd();
                    } else e.skip(t);
                    break;

                  case 5:
                    t == r.Type.STRING ? this.details = e.readString().value : e.skip(t);
                    break;

                  default:
                    e.skip(t);
                }
                e.readFieldEnd();
            }
            e.readStructEnd();
        }, a.prototype.write = function(e) {
            if (e.writeStructBegin("MiniappJoinChooseServer"), null !== this.header && void 0 !== this.header && (e.writeFieldBegin("header", r.Type.STRUCT, 1), 
            this.header.write(e), e.writeFieldEnd()), null !== this.csurl && void 0 !== this.csurl && (e.writeFieldBegin("csurl", r.Type.STRING, 2), 
            e.writeString(this.csurl), e.writeFieldEnd()), null !== this.ec && void 0 !== this.ec && (e.writeFieldBegin("ec", r.Type.STRING, 3), 
            e.writeString(this.ec), e.writeFieldEnd()), null !== this.gatewaylist && void 0 !== this.gatewaylist) {
                for (var i in e.writeFieldBegin("gatewaylist", r.Type.LIST, 4), e.writeListBegin(r.Type.STRING, this.gatewaylist.length), 
                this.gatewaylist) this.gatewaylist.hasOwnProperty(i) && (i = this.gatewaylist[i], 
                e.writeString(i));
                e.writeListEnd(), e.writeFieldEnd();
            }
            null !== this.details && void 0 !== this.details && (e.writeFieldBegin("details", r.Type.STRING, 5), 
            e.writeString(this.details), e.writeFieldEnd()), e.writeFieldStop(), e.writeStructEnd();
        };
        var o = function(e) {
            this.header = null, this.gateway = null, this.ec = null, this.wsurl = null, this.details = null, 
            e && (void 0 !== e.header && null !== e.header && (this.header = new n(e.header)), 
            void 0 !== e.gateway && null !== e.gateway && (this.gateway = e.gateway), void 0 !== e.ec && null !== e.ec && (this.ec = e.ec), 
            void 0 !== e.wsurl && null !== e.wsurl && (this.wsurl = e.wsurl), void 0 !== e.details && null !== e.details && (this.details = e.details));
        };
        (o.prototype = {}).read = function(e) {
            for (e.readStructBegin(); ;) {
                var i = e.readFieldBegin(), t = (i.fname, i.ftype), s = i.fid;
                if (t == r.Type.STOP) break;
                switch (s) {
                  case 1:
                    t == r.Type.STRUCT ? (this.header = new n(), this.header.read(e)) : e.skip(t);
                    break;

                  case 2:
                    t == r.Type.STRING ? this.gateway = e.readString().value : e.skip(t);
                    break;

                  case 3:
                    t == r.Type.STRING ? this.ec = e.readString().value : e.skip(t);
                    break;

                  case 4:
                    t == r.Type.STRING ? this.wsurl = e.readString().value : e.skip(t);
                    break;

                  case 5:
                    t == r.Type.STRING ? this.details = e.readString().value : e.skip(t);
                    break;

                  default:
                    e.skip(t);
                }
                e.readFieldEnd();
            }
            e.readStructEnd();
        }, o.prototype.write = function(e) {
            e.writeStructBegin("MiniappConnectWebSocket"), null !== this.header && void 0 !== this.header && (e.writeFieldBegin("header", r.Type.STRUCT, 1), 
            this.header.write(e), e.writeFieldEnd()), null !== this.gateway && void 0 !== this.gateway && (e.writeFieldBegin("gateway", r.Type.STRING, 2), 
            e.writeString(this.gateway), e.writeFieldEnd()), null !== this.ec && void 0 !== this.ec && (e.writeFieldBegin("ec", r.Type.STRING, 3), 
            e.writeString(this.ec), e.writeFieldEnd()), null !== this.wsurl && void 0 !== this.wsurl && (e.writeFieldBegin("wsurl", r.Type.STRING, 4), 
            e.writeString(this.wsurl), e.writeFieldEnd()), null !== this.details && void 0 !== this.details && (e.writeFieldBegin("details", r.Type.STRING, 5), 
            e.writeString(this.details), e.writeFieldEnd()), e.writeFieldStop(), e.writeStructEnd();
        };
        var l = function(e) {
            this.header = null, this.uid = null, this.ec = null, this.isrejoin = null, this.details = null, 
            e && (void 0 !== e.header && null !== e.header && (this.header = new n(e.header)), 
            void 0 !== e.uid && null !== e.uid && (this.uid = e.uid), void 0 !== e.ec && null !== e.ec && (this.ec = e.ec), 
            void 0 !== e.isrejoin && null !== e.isrejoin && (this.isrejoin = e.isrejoin), void 0 !== e.details && null !== e.details && (this.details = e.details));
        };
        (l.prototype = {}).read = function(e) {
            for (e.readStructBegin(); ;) {
                var i = e.readFieldBegin(), t = (i.fname, i.ftype), s = i.fid;
                if (t == r.Type.STOP) break;
                switch (s) {
                  case 1:
                    t == r.Type.STRUCT ? (this.header = new n(), this.header.read(e)) : e.skip(t);
                    break;

                  case 2:
                    t == r.Type.STRING ? this.uid = e.readString().value : e.skip(t);
                    break;

                  case 3:
                    t == r.Type.STRING ? this.ec = e.readString().value : e.skip(t);
                    break;

                  case 4:
                    t == r.Type.BOOL ? this.isrejoin = e.readBool().value : e.skip(t);
                    break;

                  case 5:
                    t == r.Type.STRING ? this.details = e.readString().value : e.skip(t);
                    break;

                  default:
                    e.skip(t);
                }
                e.readFieldEnd();
            }
            e.readStructEnd();
        }, l.prototype.write = function(e) {
            e.writeStructBegin("MiniappJoin"), null !== this.header && void 0 !== this.header && (e.writeFieldBegin("header", r.Type.STRUCT, 1), 
            this.header.write(e), e.writeFieldEnd()), null !== this.uid && void 0 !== this.uid && (e.writeFieldBegin("uid", r.Type.STRING, 2), 
            e.writeString(this.uid), e.writeFieldEnd()), null !== this.ec && void 0 !== this.ec && (e.writeFieldBegin("ec", r.Type.STRING, 3), 
            e.writeString(this.ec), e.writeFieldEnd()), null !== this.isrejoin && void 0 !== this.isrejoin && (e.writeFieldBegin("isrejoin", r.Type.BOOL, 4), 
            e.writeBool(this.isrejoin), e.writeFieldEnd()), null !== this.details && void 0 !== this.details && (e.writeFieldBegin("details", r.Type.STRING, 5), 
            e.writeString(this.details), e.writeFieldEnd()), e.writeFieldStop(), e.writeStructEnd();
        };
        var u = function(e) {
            this.header = null, this.ec = null, this.pushurl = null, this.uid = null, this.details = null, 
            e && (void 0 !== e.header && null !== e.header && (this.header = new n(e.header)), 
            void 0 !== e.ec && null !== e.ec && (this.ec = e.ec), void 0 !== e.pushurl && null !== e.pushurl && (this.pushurl = e.pushurl), 
            void 0 !== e.uid && null !== e.uid && (this.uid = e.uid), void 0 !== e.details && null !== e.details && (this.details = e.details));
        };
        (u.prototype = {}).read = function(e) {
            for (e.readStructBegin(); ;) {
                var i = e.readFieldBegin(), t = (i.fname, i.ftype), s = i.fid;
                if (t == r.Type.STOP) break;
                switch (s) {
                  case 1:
                    t == r.Type.STRUCT ? (this.header = new n(), this.header.read(e)) : e.skip(t);
                    break;

                  case 2:
                    t == r.Type.STRING ? this.ec = e.readString().value : e.skip(t);
                    break;

                  case 3:
                    t == r.Type.STRING ? this.pushurl = e.readString().value : e.skip(t);
                    break;

                  case 4:
                    t == r.Type.STRING ? this.uid = e.readString().value : e.skip(t);
                    break;

                  case 5:
                    t == r.Type.STRING ? this.details = e.readString().value : e.skip(t);
                    break;

                  default:
                    e.skip(t);
                }
                e.readFieldEnd();
            }
            e.readStructEnd();
        }, u.prototype.write = function(e) {
            e.writeStructBegin("MiniappPublish"), null !== this.header && void 0 !== this.header && (e.writeFieldBegin("header", r.Type.STRUCT, 1), 
            this.header.write(e), e.writeFieldEnd()), null !== this.ec && void 0 !== this.ec && (e.writeFieldBegin("ec", r.Type.STRING, 2), 
            e.writeString(this.ec), e.writeFieldEnd()), null !== this.pushurl && void 0 !== this.pushurl && (e.writeFieldBegin("pushurl", r.Type.STRING, 3), 
            e.writeString(this.pushurl), e.writeFieldEnd()), null !== this.uid && void 0 !== this.uid && (e.writeFieldBegin("uid", r.Type.STRING, 4), 
            e.writeString(this.uid), e.writeFieldEnd()), null !== this.details && void 0 !== this.details && (e.writeFieldBegin("details", r.Type.STRING, 5), 
            e.writeString(this.details), e.writeFieldEnd()), e.writeFieldStop(), e.writeStructEnd();
        };
        var d = function(e) {
            this.header = null, this.ec = null, this.uid = null, this.details = null, e && (void 0 !== e.header && null !== e.header && (this.header = new n(e.header)), 
            void 0 !== e.ec && null !== e.ec && (this.ec = e.ec), void 0 !== e.uid && null !== e.uid && (this.uid = e.uid), 
            void 0 !== e.details && null !== e.details && (this.details = e.details));
        };
        (d.prototype = {}).read = function(e) {
            for (e.readStructBegin(); ;) {
                var i = e.readFieldBegin(), t = (i.fname, i.ftype), s = i.fid;
                if (t == r.Type.STOP) break;
                switch (s) {
                  case 1:
                    t == r.Type.STRUCT ? (this.header = new n(), this.header.read(e)) : e.skip(t);
                    break;

                  case 2:
                    t == r.Type.STRING ? this.ec = e.readString().value : e.skip(t);
                    break;

                  case 3:
                    t == r.Type.STRING ? this.uid = e.readString().value : e.skip(t);
                    break;

                  case 5:
                    t == r.Type.STRING ? this.details = e.readString().value : e.skip(t);
                    break;

                  default:
                    e.skip(t);
                }
                e.readFieldEnd();
            }
            e.readStructEnd();
        }, d.prototype.write = function(e) {
            e.writeStructBegin("MiniappUnpublish"), null !== this.header && void 0 !== this.header && (e.writeFieldBegin("header", r.Type.STRUCT, 1), 
            this.header.write(e), e.writeFieldEnd()), null !== this.ec && void 0 !== this.ec && (e.writeFieldBegin("ec", r.Type.STRING, 2), 
            e.writeString(this.ec), e.writeFieldEnd()), null !== this.uid && void 0 !== this.uid && (e.writeFieldBegin("uid", r.Type.STRING, 3), 
            e.writeString(this.uid), e.writeFieldEnd()), null !== this.details && void 0 !== this.details && (e.writeFieldBegin("details", r.Type.STRING, 5), 
            e.writeString(this.details), e.writeFieldEnd()), e.writeFieldStop(), e.writeStructEnd();
        };
        var h = function(e) {
            this.header = null, this.ec = null, this.pullurl = null, this.peerid = null, this.details = null, 
            e && (void 0 !== e.header && null !== e.header && (this.header = new n(e.header)), 
            void 0 !== e.ec && null !== e.ec && (this.ec = e.ec), void 0 !== e.pullurl && null !== e.pullurl && (this.pullurl = e.pullurl), 
            void 0 !== e.peerid && null !== e.peerid && (this.peerid = e.peerid), void 0 !== e.details && null !== e.details && (this.details = e.details));
        };
        (h.prototype = {}).read = function(e) {
            for (e.readStructBegin(); ;) {
                var i = e.readFieldBegin(), t = (i.fname, i.ftype), s = i.fid;
                if (t == r.Type.STOP) break;
                switch (s) {
                  case 1:
                    t == r.Type.STRUCT ? (this.header = new n(), this.header.read(e)) : e.skip(t);
                    break;

                  case 2:
                    t == r.Type.STRING ? this.ec = e.readString().value : e.skip(t);
                    break;

                  case 3:
                    t == r.Type.STRING ? this.pullurl = e.readString().value : e.skip(t);
                    break;

                  case 4:
                    t == r.Type.STRING ? this.peerid = e.readString().value : e.skip(t);
                    break;

                  case 5:
                    t == r.Type.STRING ? this.details = e.readString().value : e.skip(t);
                    break;

                  default:
                    e.skip(t);
                }
                e.readFieldEnd();
            }
            e.readStructEnd();
        }, h.prototype.write = function(e) {
            e.writeStructBegin("MiniappSubscribe"), null !== this.header && void 0 !== this.header && (e.writeFieldBegin("header", r.Type.STRUCT, 1), 
            this.header.write(e), e.writeFieldEnd()), null !== this.ec && void 0 !== this.ec && (e.writeFieldBegin("ec", r.Type.STRING, 2), 
            e.writeString(this.ec), e.writeFieldEnd()), null !== this.pullurl && void 0 !== this.pullurl && (e.writeFieldBegin("pullurl", r.Type.STRING, 3), 
            e.writeString(this.pullurl), e.writeFieldEnd()), null !== this.peerid && void 0 !== this.peerid && (e.writeFieldBegin("peerid", r.Type.STRING, 4), 
            e.writeString(this.peerid), e.writeFieldEnd()), null !== this.details && void 0 !== this.details && (e.writeFieldBegin("details", r.Type.STRING, 5), 
            e.writeString(this.details), e.writeFieldEnd()), e.writeFieldStop(), e.writeStructEnd();
        };
        var c = function(e) {
            this.header = null, this.ec = null, this.peerid = null, this.details = null, e && (void 0 !== e.header && null !== e.header && (this.header = new n(e.header)), 
            void 0 !== e.ec && null !== e.ec && (this.ec = e.ec), void 0 !== e.peerid && null !== e.peerid && (this.peerid = e.peerid), 
            void 0 !== e.details && null !== e.details && (this.details = e.details));
        };
        (c.prototype = {}).read = function(e) {
            for (e.readStructBegin(); ;) {
                var i = e.readFieldBegin(), t = (i.fname, i.ftype), s = i.fid;
                if (t == r.Type.STOP) break;
                switch (s) {
                  case 1:
                    t == r.Type.STRUCT ? (this.header = new n(), this.header.read(e)) : e.skip(t);
                    break;

                  case 2:
                    t == r.Type.STRING ? this.ec = e.readString().value : e.skip(t);
                    break;

                  case 3:
                    t == r.Type.STRING ? this.peerid = e.readString().value : e.skip(t);
                    break;

                  case 4:
                    t == r.Type.STRING ? this.details = e.readString().value : e.skip(t);
                    break;

                  default:
                    e.skip(t);
                }
                e.readFieldEnd();
            }
            e.readStructEnd();
        }, c.prototype.write = function(e) {
            e.writeStructBegin("MiniappUnsubscribe"), null !== this.header && void 0 !== this.header && (e.writeFieldBegin("header", r.Type.STRUCT, 1), 
            this.header.write(e), e.writeFieldEnd()), null !== this.ec && void 0 !== this.ec && (e.writeFieldBegin("ec", r.Type.STRING, 2), 
            e.writeString(this.ec), e.writeFieldEnd()), null !== this.peerid && void 0 !== this.peerid && (e.writeFieldBegin("peerid", r.Type.STRING, 3), 
            e.writeString(this.peerid), e.writeFieldEnd()), null !== this.details && void 0 !== this.details && (e.writeFieldBegin("details", r.Type.STRING, 4), 
            e.writeString(this.details), e.writeFieldEnd()), e.writeFieldStop(), e.writeStructEnd();
        };
        var p = function(e) {
            this.header = null, this.uid = null, this.details = null, e && (void 0 !== e.header && null !== e.header && (this.header = new n(e.header)), 
            void 0 !== e.uid && null !== e.uid && (this.uid = e.uid), void 0 !== e.details && null !== e.details && (this.details = e.details));
        };
        (p.prototype = {}).read = function(e) {
            for (e.readStructBegin(); ;) {
                var i = e.readFieldBegin(), t = (i.fname, i.ftype), s = i.fid;
                if (t == r.Type.STOP) break;
                switch (s) {
                  case 1:
                    t == r.Type.STRUCT ? (this.header = new n(), this.header.read(e)) : e.skip(t);
                    break;

                  case 2:
                    t == r.Type.STRING ? this.uid = e.readString().value : e.skip(t);
                    break;

                  case 3:
                    t == r.Type.STRING ? this.details = e.readString().value : e.skip(t);
                    break;

                  default:
                    e.skip(t);
                }
                e.readFieldEnd();
            }
            e.readStructEnd();
        }, p.prototype.write = function(e) {
            e.writeStructBegin("MiniappLeave"), null !== this.header && void 0 !== this.header && (e.writeFieldBegin("header", r.Type.STRUCT, 1), 
            this.header.write(e), e.writeFieldEnd()), null !== this.uid && void 0 !== this.uid && (e.writeFieldBegin("uid", r.Type.STRING, 2), 
            e.writeString(this.uid), e.writeFieldEnd()), null !== this.details && void 0 !== this.details && (e.writeFieldBegin("details", r.Type.STRING, 3), 
            e.writeString(this.details), e.writeFieldEnd()), e.writeFieldStop(), e.writeStructEnd();
        };
        var f = function(e) {
            this.header = null, this.action = null, this.details = null, this.req_ts = null, 
            e && (void 0 !== e.header && null !== e.header && (this.header = new n(e.header)), 
            void 0 !== e.action && null !== e.action && (this.action = e.action), void 0 !== e.details && null !== e.details && (this.details = e.details), 
            void 0 !== e.req_ts && null !== e.req_ts && (this.req_ts = e.req_ts));
        };
        (f.prototype = {}).read = function(e) {
            for (e.readStructBegin(); ;) {
                var i = e.readFieldBegin(), t = (i.fname, i.ftype), s = i.fid;
                if (t == r.Type.STOP) break;
                switch (s) {
                  case 1:
                    t == r.Type.STRUCT ? (this.header = new n(), this.header.read(e)) : e.skip(t);
                    break;

                  case 2:
                    t == r.Type.STRING ? this.action = e.readString().value : e.skip(t);
                    break;

                  case 3:
                    t == r.Type.STRING ? this.details = e.readString().value : e.skip(t);
                    break;

                  case 4:
                    t == r.Type.I64 ? this.req_ts = e.readI64().value : e.skip(t);
                    break;

                  default:
                    e.skip(t);
                }
                e.readFieldEnd();
            }
            e.readStructEnd();
        }, f.prototype.write = function(e) {
            e.writeStructBegin("MiniappServerEvent"), null !== this.header && void 0 !== this.header && (e.writeFieldBegin("header", r.Type.STRUCT, 1), 
            this.header.write(e), e.writeFieldEnd()), null !== this.action && void 0 !== this.action && (e.writeFieldBegin("action", r.Type.STRING, 2), 
            e.writeString(this.action), e.writeFieldEnd()), null !== this.details && void 0 !== this.details && (e.writeFieldBegin("details", r.Type.STRING, 3), 
            e.writeString(this.details), e.writeFieldEnd()), null !== this.req_ts && void 0 !== this.req_ts && (e.writeFieldBegin("req_ts", r.Type.I64, 4), 
            e.writeI64(this.req_ts), e.writeFieldEnd()), e.writeFieldStop(), e.writeStructEnd();
        };
        var v = function(e) {
            this.header = null, this.url = null, this.code = null, this.status = null, this.error = null, 
            this.details = null, e && (void 0 !== e.header && null !== e.header && (this.header = new n(e.header)), 
            void 0 !== e.url && null !== e.url && (this.url = e.url), void 0 !== e.code && null !== e.code && (this.code = e.code), 
            void 0 !== e.status && null !== e.status && (this.status = e.status), void 0 !== e.error && null !== e.error && (this.error = e.error), 
            void 0 !== e.details && null !== e.details && (this.details = e.details));
        };
        (v.prototype = {}).read = function(e) {
            for (e.readStructBegin(); ;) {
                var i = e.readFieldBegin(), t = (i.fname, i.ftype), s = i.fid;
                if (t == r.Type.STOP) break;
                switch (s) {
                  case 1:
                    t == r.Type.STRUCT ? (this.header = new n(), this.header.read(e)) : e.skip(t);
                    break;

                  case 2:
                    t == r.Type.STRING ? this.url = e.readString().value : e.skip(t);
                    break;

                  case 3:
                    t == r.Type.STRING ? this.code = e.readString().value : e.skip(t);
                    break;

                  case 4:
                    t == r.Type.STRING ? this.status = e.readString().value : e.skip(t);
                    break;

                  case 5:
                    t == r.Type.STRING ? this.error = e.readString().value : e.skip(t);
                    break;

                  case 6:
                    t == r.Type.STRING ? this.details = e.readString().value : e.skip(t);
                    break;

                  default:
                    e.skip(t);
                }
                e.readFieldEnd();
            }
            e.readStructEnd();
        }, v.prototype.write = function(e) {
            e.writeStructBegin("MiniappPusherState"), null !== this.header && void 0 !== this.header && (e.writeFieldBegin("header", r.Type.STRUCT, 1), 
            this.header.write(e), e.writeFieldEnd()), null !== this.url && void 0 !== this.url && (e.writeFieldBegin("url", r.Type.STRING, 2), 
            e.writeString(this.url), e.writeFieldEnd()), null !== this.code && void 0 !== this.code && (e.writeFieldBegin("code", r.Type.STRING, 3), 
            e.writeString(this.code), e.writeFieldEnd()), null !== this.status && void 0 !== this.status && (e.writeFieldBegin("status", r.Type.STRING, 4), 
            e.writeString(this.status), e.writeFieldEnd()), null !== this.error && void 0 !== this.error && (e.writeFieldBegin("error", r.Type.STRING, 5), 
            e.writeString(this.error), e.writeFieldEnd()), null !== this.details && void 0 !== this.details && (e.writeFieldBegin("details", r.Type.STRING, 6), 
            e.writeString(this.details), e.writeFieldEnd()), e.writeFieldStop(), e.writeStructEnd();
        };
        var T = function(e) {
            this.header = null, this.url = null, this.code = null, this.status = null, this.error = null, 
            this.details = null, e && (void 0 !== e.header && null !== e.header && (this.header = new n(e.header)), 
            void 0 !== e.url && null !== e.url && (this.url = e.url), void 0 !== e.code && null !== e.code && (this.code = e.code), 
            void 0 !== e.status && null !== e.status && (this.status = e.status), void 0 !== e.error && null !== e.error && (this.error = e.error), 
            void 0 !== e.details && null !== e.details && (this.details = e.details));
        };
        (T.prototype = {}).read = function(e) {
            for (e.readStructBegin(); ;) {
                var i = e.readFieldBegin(), t = (i.fname, i.ftype), s = i.fid;
                if (t == r.Type.STOP) break;
                switch (s) {
                  case 1:
                    t == r.Type.STRUCT ? (this.header = new n(), this.header.read(e)) : e.skip(t);
                    break;

                  case 2:
                    t == r.Type.STRING ? this.url = e.readString().value : e.skip(t);
                    break;

                  case 3:
                    t == r.Type.STRING ? this.code = e.readString().value : e.skip(t);
                    break;

                  case 4:
                    t == r.Type.STRING ? this.status = e.readString().value : e.skip(t);
                    break;

                  case 5:
                    t == r.Type.STRING ? this.error = e.readString().value : e.skip(t);
                    break;

                  case 6:
                    t == r.Type.STRING ? this.details = e.readString().value : e.skip(t);
                    break;

                  default:
                    e.skip(t);
                }
                e.readFieldEnd();
            }
            e.readStructEnd();
        }, T.prototype.write = function(e) {
            e.writeStructBegin("MiniappPlayerState"), null !== this.header && void 0 !== this.header && (e.writeFieldBegin("header", r.Type.STRUCT, 1), 
            this.header.write(e), e.writeFieldEnd()), null !== this.url && void 0 !== this.url && (e.writeFieldBegin("url", r.Type.STRING, 2), 
            e.writeString(this.url), e.writeFieldEnd()), null !== this.code && void 0 !== this.code && (e.writeFieldBegin("code", r.Type.STRING, 3), 
            e.writeString(this.code), e.writeFieldEnd()), null !== this.status && void 0 !== this.status && (e.writeFieldBegin("status", r.Type.STRING, 4), 
            e.writeString(this.status), e.writeFieldEnd()), null !== this.error && void 0 !== this.error && (e.writeFieldBegin("error", r.Type.STRING, 5), 
            e.writeString(this.error), e.writeFieldEnd()), null !== this.details && void 0 !== this.details && (e.writeFieldBegin("details", r.Type.STRING, 6), 
            e.writeString(this.details), e.writeFieldEnd()), e.writeFieldStop(), e.writeStructEnd();
        }, e.exports = {
            MiniappSession: s,
            MiniappJoinChooseServer: a,
            MiniappConnectWebSocket: o,
            MiniappJoin: l,
            MiniappPublish: u,
            MiniappUnpublish: d,
            MiniappSubscribe: h,
            MiniappUnsubscribe: c,
            MiniappLeave: p,
            MiniappServerEvent: f,
            MiniappPusherState: v,
            MiniappPlayerState: T
        };
    } ]);
}, "object" == ("undefined" == typeof exports ? "undefined" : (0, _typeof2.default)(exports)) && "object" == ("undefined" == typeof module ? "undefined" : (0, 
_typeof2.default)(module)) ? module.exports = i() : "function" == typeof define && define.amd ? define("AgoraSDK", [], i) : "object" == ("undefined" == typeof exports ? "undefined" : (0, 
_typeof2.default)(exports)) ? exports.AgoraSDK = i() : e.AgoraSDK = i();