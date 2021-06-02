var h = require("../@babel/runtime/helpers/interopRequireDefault"), t = h(require("../@babel/runtime/helpers/classCallCheck")), i = h(require("../@babel/runtime/helpers/createClass")), e = function() {
    function h(i, e) {
        (0, t.default)(this, h), this.containerWidth = i, this.containerHeight = e;
    }
    return (0, i.default)(h, [ {
        key: "getSize",
        value: function(h) {
            var t = this.containerHeight, i = this.containerWidth;
            switch (h) {
              case 0:
                return [];

              case 1:
                return [ {
                    x: 0,
                    y: 0,
                    width: i,
                    height: t
                } ];

              case 2:
                var e = (t - i / 2 * (4 / 3)) / 2, d = i / 2 * (4 / 3);
                return [ {
                    x: 0,
                    y: e,
                    width: i / 2,
                    height: d
                }, {
                    x: i / 2,
                    y: e,
                    width: i / 2,
                    height: d
                } ];

              case 3:
                return [ {
                    x: 0,
                    y: 0,
                    width: i,
                    height: t - i / 2
                }, {
                    x: 0,
                    y: t - i / 2,
                    width: i / 2,
                    height: i / 2
                }, {
                    x: i / 2,
                    y: t - i / 2,
                    width: i / 2,
                    height: i / 2
                } ];

              case 4:
                return [ {
                    x: 0,
                    y: 0,
                    width: i / 2,
                    height: t / 2
                }, {
                    x: i / 2,
                    y: 0,
                    width: i / 2,
                    height: t / 2
                }, {
                    x: 0,
                    y: t / 2,
                    width: i / 2,
                    height: t / 2
                }, {
                    x: i / 2,
                    y: t / 2,
                    width: i / 2,
                    height: t / 2
                } ];

              case 5:
                return [ {
                    x: 0,
                    y: 0,
                    width: i / 2,
                    height: 3 * t / 5
                }, {
                    x: i / 2,
                    y: 0,
                    width: i / 2,
                    height: 3 * t / 5
                }, {
                    x: 0,
                    y: 3 * t / 5,
                    width: i / 3,
                    height: 2 * t / 5
                }, {
                    x: i / 3,
                    y: 3 * t / 5,
                    width: i / 3,
                    height: 2 * t / 5
                }, {
                    x: 2 * i / 3,
                    y: 3 * t / 5,
                    width: i / 3,
                    height: 2 * t / 5
                } ];

              case 6:
                return [ {
                    x: 0,
                    y: 0,
                    width: 2 * i / 3,
                    height: 3 * t / 5
                }, {
                    x: 2 * i / 3,
                    y: 0,
                    width: 1 * i / 3,
                    height: 3 * t / 5 / 2
                }, {
                    x: 2 * i / 3,
                    y: 3 * t / 5 / 2,
                    width: 1 * i / 3,
                    height: 3 * t / 5 / 2
                }, {
                    x: 0,
                    y: 3 * t / 5,
                    width: i / 3,
                    height: 2 * t / 5
                }, {
                    x: i / 3,
                    y: 3 * t / 5,
                    width: i / 3,
                    height: 2 * t / 5
                }, {
                    x: 2 * i / 3,
                    y: 3 * t / 5,
                    width: i / 3,
                    height: 2 * t / 5
                } ];

              case 7:
                return [ {
                    x: 0,
                    y: 0,
                    width: i / 2,
                    height: t / 3
                }, {
                    x: i / 2,
                    y: 0,
                    width: i / 2,
                    height: t / 3
                }, {
                    x: 0,
                    y: t / 3,
                    width: i / 2,
                    height: t / 3
                }, {
                    x: i / 2,
                    y: t / 3,
                    width: i / 2,
                    height: t / 3
                }, {
                    x: 0,
                    y: 2 * t / 3,
                    width: i / 3,
                    height: t / 3
                }, {
                    x: i / 3,
                    y: 2 * t / 3,
                    width: i / 3,
                    height: t / 3
                }, {
                    x: 2 * i / 3,
                    y: 2 * t / 3,
                    width: i / 3,
                    height: t / 3
                } ];

              case 8:
                return [ {
                    x: 0,
                    y: 0,
                    width: i / 3,
                    height: t / 3
                }, {
                    x: i / 3,
                    y: 0,
                    width: i / 3,
                    height: t / 3
                }, {
                    x: 2 * i / 3,
                    y: 0,
                    width: i / 3,
                    height: t / 3
                }, {
                    x: 0,
                    y: t / 3,
                    width: i / 2,
                    height: t / 3
                }, {
                    x: i / 2,
                    y: t / 3,
                    width: i / 2,
                    height: t / 3
                }, {
                    x: 0,
                    y: 2 * t / 3,
                    width: i / 3,
                    height: t / 3
                }, {
                    x: i / 3,
                    y: 2 * t / 3,
                    width: i / 3,
                    height: t / 3
                }, {
                    x: 2 * i / 3,
                    y: 2 * t / 3,
                    width: i / 3,
                    height: t / 3
                } ];

              case 9:
                return [ {
                    x: 0,
                    y: 0,
                    width: i / 3,
                    height: t / 3
                }, {
                    x: i / 3,
                    y: 0,
                    width: i / 3,
                    height: t / 3
                }, {
                    x: 2 * i / 3,
                    y: 0,
                    width: i / 3,
                    height: t / 3
                }, {
                    x: 0,
                    y: t / 3,
                    width: i / 3,
                    height: t / 3
                }, {
                    x: i / 3,
                    y: t / 3,
                    width: i / 3,
                    height: t / 3
                }, {
                    x: 2 * i / 3,
                    y: t / 3,
                    width: i / 3,
                    height: t / 3
                }, {
                    x: 0,
                    y: 2 * t / 3,
                    width: i / 3,
                    height: t / 3
                }, {
                    x: i / 3,
                    y: 2 * t / 3,
                    width: i / 3,
                    height: t / 3
                }, {
                    x: 2 * i / 3,
                    y: 2 * t / 3,
                    width: i / 3,
                    height: t / 3
                } ];

              case 10:
                return [ {
                    x: 0,
                    y: 0,
                    width: i / 3,
                    height: t / 6
                }, {
                    x: 0,
                    y: t / 6,
                    width: i / 3,
                    height: t / 6
                }, {
                    x: i / 3,
                    y: 0,
                    width: i / 3,
                    height: t / 3
                }, {
                    x: 2 * i / 3,
                    y: 0,
                    width: i / 3,
                    height: t / 3
                }, {
                    x: 0,
                    y: t / 3,
                    width: i / 3,
                    height: t / 3
                }, {
                    x: i / 3,
                    y: t / 3,
                    width: i / 3,
                    height: t / 3
                }, {
                    x: 2 * i / 3,
                    y: t / 3,
                    width: i / 3,
                    height: t / 3
                }, {
                    x: 0,
                    y: 2 * t / 3,
                    width: i / 3,
                    height: t / 3
                }, {
                    x: i / 3,
                    y: 2 * t / 3,
                    width: i / 3,
                    height: t / 3
                }, {
                    x: 2 * i / 3,
                    y: 2 * t / 3,
                    width: i / 3,
                    height: t / 3
                } ];
            }
        }
    } ]), h;
}();

module.exports = e;