import {
  __commonJS
} from "./chunk-6TJCVOLN.js";

// node_modules/@mojs/core/dist/mo.umd.js
var require_mo_umd = __commonJS({
  "node_modules/@mojs/core/dist/mo.umd.js"(exports, module) {
    var t;
    var e;
    t = self, e = () => (() => {
      var t2 = { 50: (t3, e3, s2) => {
        "use strict";
        s2.d(e3, { Z: () => n });
        var r2 = s2(2), i = { _sample: function(t4) {
          var e4 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 4, s3 = (0, r2.Z)(e4), n2 = {};
          if ("number" === s3) {
            var a = 0, o = Math.pow(10, e4), l = 1 / o;
            n2[0] = t4(0);
            for (var h = 0; h < o - 1; h++)
              a += l, n2[parseFloat(a.toFixed(e4))] = t4(a);
            n2[1] = t4(1), n2.base = e4;
          } else
            "object" === s3 ? n2 = e4 : "string" === s3 && (n2 = JSON.parse(e4));
          return i._sample._proximate(n2);
        }, _proximate: function(t4) {
          var e4 = t4.base, s3 = 1 / Math.pow(10, e4), r3 = function(r4) {
            var i2, n2, a = function(t5, e5) {
              e5 = +e5 || 0;
              var s4 = Math.pow(10, e5);
              return Math.round(t5 * s4) / s4;
            }(r4, e4), o = t4[a.toString()];
            if (Math.abs(r4 - a) < s3)
              return o;
            var l = (n2 = r4 > a ? t4[i2 = a + s3] : t4[i2 = a - s3]) - o;
            return l < s3 ? o : o + (r4 - a) / (i2 - a) * (n2 > o ? -1 : 1) * l;
          };
          return r3.getSamples = function() {
            return t4;
          }, r3;
        } };
        i._sample._proximate = i._proximate;
        const n = i._sample;
      }, 973: (t3, e3, s2) => {
        "use strict";
        s2.d(e3, { Z: () => l });
        var r2 = s2(2), i = s2(671), n = s2(144), a = s2(52), o = s2.n(a);
        const l = function() {
          function t4() {
            var e4 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            (0, i.Z)(this, t4), this._o = e4, this._index = this._o.index || 0, this._arrayPropertyMap = { strokeDashoffset: 1, strokeDasharray: 1, origin: 1 }, this._skipPropsDelta = { timeline: 1, prevChainModule: 1, callbacksContext: 1 }, this._declareDefaults(), this._extendDefaults(), this._vars(), this._render();
          }
          return (0, n.Z)(t4, [{ key: "_declareDefaults", value: function() {
            this._defaults = {};
          } }, { key: "_vars", value: function() {
            this._progress = 0, this._strokeDasharrayBuffer = [];
          } }, { key: "_render", value: function() {
          } }, { key: "_setProp", value: function(t5, e4) {
            if ("object" === (0, r2.Z)(t5))
              for (var s3 in t5)
                this._assignProp(s3, t5[s3]);
            else
              this._assignProp(t5, e4);
          } }, { key: "_assignProp", value: function(t5, e4) {
            this._props[t5] = e4;
          } }, { key: "_show", value: function() {
            var t5 = this._props;
            this.el && (t5.isSoftHide ? this._showByTransform() : this.el.style.display = "block", this._isShown = true);
          } }, { key: "_hide", value: function() {
            this.el && (this._props.isSoftHide ? o().setPrefixedStyle(this.el, "transform", "scale(0)") : this.el.style.display = "none", this._isShown = false);
          } }, { key: "_showByTransform", value: function() {
          } }, { key: "_parseOptionString", value: function(t5) {
            return "string" == typeof t5 && t5.match(/stagger/) && (t5 = o().parseStagger(t5, this._index)), "string" == typeof t5 && t5.match(/rand/) && (t5 = o().parseRand(t5)), t5;
          } }, { key: "_parsePositionOption", value: function(t5, e4) {
            return o().unitOptionMap[t5] && (e4 = o().parseUnit(e4).string), e4;
          } }, { key: "_parseStrokeDashOption", value: function(t5, e4) {
            var s3 = e4;
            if (this._arrayPropertyMap[t5])
              switch (s3 = [], (0, r2.Z)(e4)) {
                case "number":
                  s3.push(o().parseUnit(e4));
                  break;
                case "string":
                  for (var i2 = e4.split(" "), n2 = 0; n2 < i2.length; n2++)
                    s3.push(o().parseUnit(i2[n2]));
              }
            return s3;
          } }, { key: "_isDelta", value: function(t5) {
            var e4 = o().isObject(t5);
            return !(!(e4 = e4 && !t5.unit) || o().isArray(t5) || o().isDOM(t5));
          } }, { key: "_getDelta", value: function(t5, e4) {
            var s3;
            if ("left" !== t5 && "top" !== t5 || this._o.ctx || o().warn("Consider to animate x/y properties instead of left/top,\n        as it would be much more performant", e4), !this._skipPropsDelta || !this._skipPropsDelta[t5]) {
              null != (s3 = o().parseDelta(t5, e4, this._index)).type && (this._deltas[t5] = s3);
              var i2 = "object" === (0, r2.Z)(s3.end) ? 0 === s3.end.value ? 0 : s3.end.string : s3.end;
              this._props[t5] = i2;
            }
          } }, { key: "_extendDefaults", value: function() {
            for (var t5 in this._props = {}, this._deltas = {}, this._defaults) {
              var e4 = null != this._o[t5] ? this._o[t5] : this._defaults[t5];
              this._parseOption(t5, e4);
            }
          } }, { key: "_tuneNewOptions", value: function(t5) {
            for (var e4 in this._hide(), t5)
              t5 && delete this._deltas[e4], this._o[e4] = t5[e4], this._parseOption(e4, t5[e4]);
          } }, { key: "_parseOption", value: function(t5, e4) {
            if (this._isDelta(e4) && !this._skipPropsDelta[t5]) {
              this._getDelta(t5, e4);
              var s3 = o().getDeltaEnd(e4);
              return this._assignProp(t5, this._parseProperty(t5, s3));
            }
            this._assignProp(t5, this._parseProperty(t5, e4));
          } }, { key: "_parsePreArrayProperty", value: function(t5, e4) {
            return e4 = this._parseOptionString(e4), this._parsePositionOption(t5, e4);
          } }, { key: "_parseProperty", value: function(t5, e4) {
            return "parent" === t5 ? o().parseEl(e4) : (e4 = this._parsePreArrayProperty(t5, e4), this._parseStrokeDashOption(t5, e4));
          } }, { key: "_parseDeltaValues", value: function(t5, e4) {
            var s3 = {};
            for (var r3 in e4) {
              var i2 = e4[r3], n2 = this._parsePreArrayProperty(t5, i2);
              s3[this._parsePreArrayProperty(t5, r3)] = n2;
            }
            return s3;
          } }, { key: "_preparsePropValue", value: function(t5, e4) {
            return this._isDelta(e4) ? this._parseDeltaValues(t5, e4) : this._parsePreArrayProperty(t5, e4);
          } }, { key: "_calcCurrentProps", value: function(t5, e4) {
            for (var s3 in this._deltas) {
              var r3 = this._deltas[s3], i2 = !!r3.curve, n2 = null == r3.easing || i2 ? t5 : r3.easing(e4);
              if ("array" === r3.type) {
                var a2;
                o().isArray(this._props[s3]) ? (a2 = this._props[s3]).length = 0 : a2 = [];
                for (var l2 = i2 ? r3.curve(e4) : null, h = 0; h < r3.delta.length; h++) {
                  var u = r3.delta[h], p = i2 ? l2 * (r3.start[h].value + e4 * u.value) : r3.start[h].value + n2 * u.value;
                  a2.push({ string: "".concat(p).concat(u.unit), value: p, unit: u.unit });
                }
                this._props[s3] = a2;
              } else if ("number" === r3.type)
                this._props[s3] = i2 ? r3.curve(e4) * (r3.start + e4 * r3.delta) : r3.start + n2 * r3.delta;
              else if ("unit" === r3.type) {
                var c = i2 ? r3.curve(e4) * (r3.start.value + e4 * r3.delta) : r3.start.value + n2 * r3.delta;
                this._props[s3] = "".concat(c).concat(r3.end.unit);
              } else if ("color" === r3.type) {
                var d, _, f, v;
                if (i2) {
                  var y = r3.curve(e4);
                  d = parseInt(y * (r3.start.r + e4 * r3.delta.r), 10), _ = parseInt(y * (r3.start.g + e4 * r3.delta.g), 10), f = parseInt(y * (r3.start.b + e4 * r3.delta.b), 10), v = parseFloat(y * (r3.start.a + e4 * r3.delta.a));
                } else
                  d = parseInt(r3.start.r + n2 * r3.delta.r, 10), _ = parseInt(r3.start.g + n2 * r3.delta.g, 10), f = parseInt(r3.start.b + n2 * r3.delta.b, 10), v = parseFloat(r3.start.a + n2 * r3.delta.a);
                this._props[s3] = "rgba(".concat(d, ",").concat(_, ",").concat(f, ",").concat(v, ")");
              }
            }
          } }, { key: "_setProgress", value: function(t5, e4) {
            this._progress = t5, this._calcCurrentProps(t5, e4);
          } }]), t4;
        }();
      }, 623: (t3, e3, s2) => {
        "use strict";
        s2.d(e3, { Z: () => c });
        var r2 = s2(2), i = s2(671), n = s2(144), a = s2(340), o = s2(963), l = s2(120), h = s2(52), u = s2.n(h);
        function p(t4) {
          var e4 = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct)
              return false;
            if (Reflect.construct.sham)
              return false;
            if ("function" == typeof Proxy)
              return true;
            try {
              return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
              })), true;
            } catch (t5) {
              return false;
            }
          }();
          return function() {
            var s3, r3 = (0, l.Z)(t4);
            if (e4) {
              var i2 = (0, l.Z)(this).constructor;
              s3 = Reflect.construct(r3, arguments, i2);
            } else
              s3 = r3.apply(this, arguments);
            return (0, o.Z)(this, s3);
          };
        }
        const c = function(t4) {
          (0, a.Z)(s3, t4);
          var e4 = p(s3);
          function s3() {
            return (0, i.Z)(this, s3), e4.apply(this, arguments);
          }
          return (0, n.Z)(s3, [{ key: "_declareDefaults", value: function() {
            this._defaults = { ns: "http://www.w3.org/2000/svg", tag: "ellipse", parent: document.body, ratio: 1, radius: 50, radiusX: null, radiusY: null, stroke: "hotpink", "stroke-dasharray": "", "stroke-dashoffset": "", "stroke-linecap": "", "stroke-width": 2, "stroke-opacity": 1, fill: "transparent", "fill-opacity": 1, width: 0, height: 0 }, this._drawMap = ["stroke", "stroke-width", "stroke-opacity", "stroke-dasharray", "fill", "stroke-dashoffset", "stroke-linecap", "fill-opacity", "transform"];
          } }, { key: "_vars", value: function() {
            this._state = {}, this._drawMapLength = this._drawMap.length;
          } }, { key: "_render", value: function() {
            this._isRendered || (this._isRendered = true, this._createSVGCanvas(), this._setCanvasSize(), this._props.parent.appendChild(this._canvas));
          } }, { key: "_createSVGCanvas", value: function() {
            var t5 = this._props;
            this._canvas = document.createElementNS(t5.ns, "svg"), this.el = document.createElementNS(t5.ns, t5.tag), this._canvas.appendChild(this.el);
          } }, { key: "_setCanvasSize", value: function() {
            var t5 = this._canvas.style;
            t5.display = "block", t5.width = "100%", t5.height = "100%", t5.left = "0px", t5.top = "0px";
          } }, { key: "_draw", value: function() {
            this._props.length = this._getLength();
            for (var t5 = this._drawMapLength; t5--; ) {
              var e5 = this._drawMap[t5];
              switch (e5) {
                case "stroke-dasharray":
                case "stroke-dashoffset":
                  this.castStrokeDash(e5);
              }
              this._setAttrIfChanged(e5, this._props[e5]);
            }
            this._state.radius = this._props.radius;
          } }, { key: "castStrokeDash", value: function(t5) {
            var e5 = this._props;
            if (u().isArray(e5[t5])) {
              for (var s4 = "", i2 = 0; i2 < e5[t5].length; i2++) {
                var n2 = e5[t5][i2], a2 = "%" === n2.unit ? this.castPercent(n2.value) : n2.value;
                s4 += "".concat(a2, " ");
              }
              return e5[t5] = "0 " === s4 ? s4 = "" : s4, e5[t5] = s4;
            }
            "object" === (0, r2.Z)(e5[t5]) && (s4 = "%" === e5[t5].unit ? this.castPercent(e5[t5].value) : e5[t5].value, e5[t5] = 0 === s4 ? s4 = "" : s4);
          } }, { key: "castPercent", value: function(t5) {
            return t5 * (this._props.length / 100);
          } }, { key: "_setAttrIfChanged", value: function(t5, e5) {
            this._state[t5] !== e5 && (this.el.setAttribute(t5, e5), this._state[t5] = e5);
          } }, { key: "_getLength", value: function() {
            var t5 = this._props;
            return this.el && this.el.getTotalLength && this.el.getAttribute("d") ? this.el.getTotalLength() : 2 * (null != t5.radiusX ? t5.radiusX : t5.radius);
          } }, { key: "_getPointsPerimiter", value: function(t5) {
            for (var e5 = 0, s4 = 1; s4 < t5.length; s4++)
              e5 += this._pointsDelta(t5[s4 - 1], t5[s4]);
            return e5 += this._pointsDelta(t5[0], u().getLastItem(t5));
          } }, { key: "_pointsDelta", value: function(t5, e5) {
            var s4 = Math.abs(t5.x - e5.x), r3 = Math.abs(t5.y - e5.y);
            return Math.sqrt(s4 * s4 + r3 * r3);
          } }, { key: "_setSize", value: function(t5, e5) {
            var s4 = this._props;
            s4.width = t5, s4.height = e5, this._draw();
          } }]), s3;
        }(s2(973).Z);
      }, 472: (t3, e3, s2) => {
        "use strict";
        s2.d(e3, { Z: () => u });
        var r2 = s2(671), i = s2(144), n = s2(752), a = s2(340), o = s2(963), l = s2(120);
        function h(t4) {
          var e4 = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct)
              return false;
            if (Reflect.construct.sham)
              return false;
            if ("function" == typeof Proxy)
              return true;
            try {
              return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
              })), true;
            } catch (t5) {
              return false;
            }
          }();
          return function() {
            var s3, r3 = (0, l.Z)(t4);
            if (e4) {
              var i2 = (0, l.Z)(this).constructor;
              s3 = Reflect.construct(r3, arguments, i2);
            } else
              s3 = r3.apply(this, arguments);
            return (0, o.Z)(this, s3);
          };
        }
        const u = function(t4) {
          (0, a.Z)(s3, t4);
          var e4 = h(s3);
          function s3() {
            return (0, r2.Z)(this, s3), e4.apply(this, arguments);
          }
          return (0, i.Z)(s3, [{ key: "_declareDefaults", value: function() {
            (0, n.Z)((0, l.Z)(s3.prototype), "_declareDefaults", this).call(this), this._defaults.tag = "path";
          } }, { key: "_draw", value: function() {
            (0, n.Z)((0, l.Z)(s3.prototype), "_draw", this).call(this);
            var t5 = this._props, e5 = null != t5.radiusX ? t5.radiusX : t5.radius, r3 = null != t5.radiusY ? t5.radiusY : t5.radius, i2 = e5 === this._prevRadiusX, a2 = r3 === this._prevRadiusY, o2 = t5.points === this._prevPoints;
            if (!(i2 && a2 && o2)) {
              var h2 = t5.width / 2, u2 = t5.height / 2, p = h2 + e5, c = "M".concat(h2 - e5, " ").concat(u2, " Q ").concat(h2, " ").concat(u2 - 2 * r3, " ").concat(p, " ").concat(u2);
              this.el.setAttribute("d", c), this._prevPoints = t5.points, this._prevRadiusX = e5, this._prevRadiusY = r3;
            }
          } }, { key: "_getLength", value: function() {
            var t5 = this._props, e5 = null != t5.radiusX ? t5.radiusX : t5.radius, s4 = null != t5.radiusY ? t5.radiusY : t5.radius, r3 = e5 + s4, i2 = Math.sqrt((3 * e5 + s4) * (e5 + 3 * s4));
            return 0.5 * Math.PI * (3 * r3 - i2);
          } }]), s3;
        }(s2(623).Z);
      }, 854: (t3, e3, s2) => {
        "use strict";
        s2.d(e3, { Z: () => u });
        var r2 = s2(671), i = s2(144), n = s2(752), a = s2(340), o = s2(963), l = s2(120);
        function h(t4) {
          var e4 = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct)
              return false;
            if (Reflect.construct.sham)
              return false;
            if ("function" == typeof Proxy)
              return true;
            try {
              return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
              })), true;
            } catch (t5) {
              return false;
            }
          }();
          return function() {
            var s3, r3 = (0, l.Z)(t4);
            if (e4) {
              var i2 = (0, l.Z)(this).constructor;
              s3 = Reflect.construct(r3, arguments, i2);
            } else
              s3 = r3.apply(this, arguments);
            return (0, o.Z)(this, s3);
          };
        }
        const u = function(t4) {
          (0, a.Z)(s3, t4);
          var e4 = h(s3);
          function s3() {
            return (0, r2.Z)(this, s3), e4.apply(this, arguments);
          }
          return (0, i.Z)(s3, [{ key: "_declareDefaults", value: function() {
            (0, n.Z)((0, l.Z)(s3.prototype), "_declareDefaults", this).call(this), this._defaults.tag = "path", this._defaults.parent = null;
            for (var t5 = 0; t5 < this._drawMap.length; t5++)
              "stroke-width" === this._drawMap[t5] && this._drawMap.splice(t5, 1);
          } }, { key: "getShape", value: function() {
            return "";
          } }, { key: "getLength", value: function() {
            return 100;
          } }, { key: "_draw", value: function() {
            var t5 = this._props, e5 = this._state, r3 = e5.radiusX !== t5.radiusX, i2 = e5.radiusY !== t5.radiusY, a2 = e5.radius !== t5.radius;
            (r3 || i2 || a2) && (this.el.setAttribute("transform", this._getScale()), e5.radiusX = t5.radiusX, e5.radiusY = t5.radiusY, e5.radius = t5.radius), this._setAttrIfChanged("stroke-width", t5["stroke-width"] / t5.maxScale), (0, n.Z)((0, l.Z)(s3.prototype), "_draw", this).call(this);
          } }, { key: "_render", value: function() {
            if (!this._isRendered) {
              this._isRendered = true, this._length = this.getLength();
              var t5 = this._props;
              t5.parent.innerHTML = '<svg id="js-mojs-shape-canvas" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink"><g id="js-mojs-shape-el">'.concat(this.getShape(), "</g></svg>"), this._canvas = t5.parent.querySelector("#js-mojs-shape-canvas"), this.el = t5.parent.querySelector("#js-mojs-shape-el"), this._setCanvasSize();
            }
          } }, { key: "_getScale", value: function() {
            var t5 = this._props, e5 = t5.radiusX ? t5.radiusX : t5.radius, s4 = t5.radiusY ? t5.radiusY : t5.radius;
            t5.scaleX = 2 * e5 / 100, t5.scaleY = 2 * s4 / 100, t5.maxScale = Math.max(t5.scaleX, t5.scaleY), t5.shiftX = t5.width / 2 - 50 * t5.scaleX, t5.shiftY = t5.height / 2 - 50 * t5.scaleY;
            var r3 = "translate(".concat(t5.shiftX, ", ").concat(t5.shiftY, ")");
            return "".concat(r3, " scale(").concat(t5.scaleX, ", ").concat(t5.scaleY, ")");
          } }, { key: "_getLength", value: function() {
            return this._length;
          } }]), s3;
        }(s2(623).Z);
      }, 342: (t3, e3, s2) => {
        "use strict";
        s2.d(e3, { Z: () => d });
        var r2 = s2(671), i = s2(144), n = s2(340), a = s2(963), o = s2(752), l = s2(120), h = s2(52), u = s2.n(h), p = s2(755);
        function c(t4) {
          var e4 = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct)
              return false;
            if (Reflect.construct.sham)
              return false;
            if ("function" == typeof Proxy)
              return true;
            try {
              return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
              })), true;
            } catch (t5) {
              return false;
            }
          }();
          return function() {
            var s3, r3 = (0, l.Z)(t4);
            if (e4) {
              var i2 = (0, l.Z)(this).constructor;
              s3 = Reflect.construct(r3, arguments, i2);
            } else
              s3 = r3.apply(this, arguments);
            return (0, a.Z)(this, s3);
          };
        }
        const d = function(t4) {
          (0, n.Z)(s3, t4);
          var e4 = c(s3);
          function s3() {
            var t5 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return (0, r2.Z)(this, s3), e4.call(this, t5);
          }
          return (0, i.Z)(s3, [{ key: "add", value: function() {
            for (var t5 = arguments.length, e5 = new Array(t5), s4 = 0; s4 < t5; s4++)
              e5[s4] = arguments[s4];
            return this._pushTimelineArray(e5), this._calcDimentions(), this;
          } }, { key: "append", value: function() {
            for (var t5 = arguments.length, e5 = new Array(t5), s4 = 0; s4 < t5; s4++)
              e5[s4] = arguments[s4];
            for (var r3 = 0, i2 = e5; r3 < i2.length; r3++) {
              var n2 = i2[r3];
              u().isArray(n2) ? this._appendTimelineArray(n2) : this._appendTimeline(n2, this._timelines.length), this._calcDimentions();
            }
            return this;
          } }, { key: "stop", value: function(t5) {
            return (0, o.Z)((0, l.Z)(s3.prototype), "stop", this).call(this, t5), this._stopChildren(t5), this;
          } }, { key: "reset", value: function() {
            return (0, o.Z)((0, l.Z)(s3.prototype), "reset", this).call(this), this._resetChildren(), this;
          } }, { key: "_resetChildren", value: function() {
            for (var t5 = 0; t5 < this._timelines.length; t5++)
              this._timelines[t5].reset();
          } }, { key: "_stopChildren", value: function(t5) {
            for (var e5 = this._timelines.length - 1; e5 >= 0; e5--)
              this._timelines[e5].stop(t5);
          } }, { key: "_appendTimelineArray", value: function(t5) {
            for (var e5 = t5.length, s4 = this._props.repeatTime - this._props.delay, r3 = this._timelines.length; e5--; )
              this._appendTimeline(t5[e5], r3, s4);
          } }, { key: "_appendTimeline", value: function(t5, e5, r3) {
            t5.timeline instanceof s3 && (t5 = t5.timeline), t5.tween instanceof p.Z && (t5 = t5.tween);
            var i2 = null != r3 ? r3 : this._props.duration;
            i2 += t5._props.shiftTime || 0, t5.index = e5, this._pushTimeline(t5, i2);
          } }, { key: "_pushTimelineArray", value: function(t5) {
            for (var e5 = 0; e5 < t5.length; e5++) {
              var s4 = t5[e5];
              u().isArray(s4) ? this._pushTimelineArray(s4) : this._pushTimeline(s4);
            }
          } }, { key: "_pushTimeline", value: function(t5, e5) {
            t5.timeline instanceof s3 && (t5 = t5.timeline), t5.tween instanceof p.Z && (t5 = t5.tween), null != e5 && t5._setProp({ shiftTime: e5 }), this._timelines.push(t5), this._recalcDuration(t5);
          } }, { key: "_setProgress", value: function(t5, e5, s4) {
            this._updateChildren(t5, e5, s4), p.Z.prototype._setProgress.call(this, t5, e5);
          } }, { key: "_updateChildren", value: function(t5, e5, s4) {
            var r3 = e5 > this._prevTime ? -1 : 1;
            this._props.isYoyo && s4 && (r3 *= -1);
            for (var i2 = this._props.startTime + t5 * this._props.duration, n2 = i2 + r3, a2 = this._timelines.length, o2 = 0; o2 < a2; o2++) {
              var l2 = i2 > n2 ? o2 : a2 - 1 - o2;
              this._timelines[l2]._update(i2, n2, this._prevYoyo, this._onEdge);
            }
            this._prevYoyo = s4;
          } }, { key: "_recalcDuration", value: function(t5) {
            var e5 = t5._props, s4 = e5.repeatTime / e5.speed + (e5.shiftTime || 0) + t5._negativeShift;
            this._props.duration = Math.max(s4, this._props.duration);
          } }, { key: "_recalcTotalDuration", value: function() {
            var t5 = this._timelines.length;
            for (this._props.duration = 0; t5--; ) {
              var e5 = this._timelines[t5];
              e5._recalcTotalDuration && e5._recalcTotalDuration(), this._recalcDuration(e5);
            }
            this._calcDimentions();
          } }, { key: "_setStartTime", value: function(t5) {
            var e5 = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
            (0, o.Z)((0, l.Z)(s3.prototype), "_setStartTime", this).call(this, t5), this._startTimelines(this._props.startTime, e5);
          } }, { key: "_startTimelines", value: function(t5) {
            var e5 = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1], s4 = "stop" === this._state;
            null == t5 && (t5 = this._props.startTime);
            for (var r3 = 0; r3 < this._timelines.length; r3++) {
              var i2 = this._timelines[r3];
              i2._setStartTime(t5, e5), e5 || null == i2._prevTime || s4 || (i2._prevTime = i2._normPrevTimeForward());
            }
          } }, { key: "_refresh", value: function(t5) {
            for (var e5 = this._timelines.length, r3 = 0; r3 < e5; r3++)
              this._timelines[r3]._refresh(t5);
            (0, o.Z)((0, l.Z)(s3.prototype), "_refresh", this).call(this, t5);
          } }, { key: "_declareDefaults", value: function() {
            null != this._o.duration && (u().error('Duration can not be declared on Timeline, but "'.concat(this._o.duration, '" is. You probably want to use Tween instead.')), this._o.duration = 0), (0, o.Z)((0, l.Z)(s3.prototype), "_declareDefaults", this).call(this), this._defaults.duration = 0, this._defaults.easing = "Linear.None", this._defaults.backwardEasing = "Linear.None", this._defaults.nameBase = "Timeline";
          } }, { key: "_vars", value: function() {
            this._timelines = [], (0, o.Z)((0, l.Z)(s3.prototype), "_vars", this).call(this);
          } }]), s3;
        }(p.Z);
      }, 755: (t3, e3, s2) => {
        "use strict";
        s2.d(e3, { Z: () => _ });
        var r2 = s2(671), i = s2(144), n = s2(326), a = s2(752), o = s2(340), l = s2(963), h = s2(120), u = s2(47), p = s2(283), c = s2.n(p);
        function d(t4) {
          var e4 = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct)
              return false;
            if (Reflect.construct.sham)
              return false;
            if ("function" == typeof Proxy)
              return true;
            try {
              return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
              })), true;
            } catch (t5) {
              return false;
            }
          }();
          return function() {
            var s3, r3 = (0, h.Z)(t4);
            if (e4) {
              var i2 = (0, h.Z)(this).constructor;
              s3 = Reflect.construct(r3, arguments, i2);
            } else
              s3 = r3.apply(this, arguments);
            return (0, l.Z)(this, s3);
          };
        }
        const _ = function(t4) {
          (0, o.Z)(s3, t4);
          var e4 = d(s3);
          function s3() {
            var t5, i2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return (0, r2.Z)(this, s3), null == (t5 = e4.call(this, i2))._props.name && t5._setSelfName(), (0, l.Z)(t5, (0, n.Z)(t5));
          }
          return (0, i.Z)(s3, [{ key: "_declareDefaults", value: function() {
            this._defaults = { duration: 350, delay: 0, repeat: 0, speed: 1, isYoyo: false, easing: "Sin.Out", backwardEasing: null, name: null, nameBase: "Tween", onProgress: null, onStart: null, onRefresh: null, onComplete: null, onRepeatStart: null, onRepeatComplete: null, onFirstUpdate: null, onUpdate: null, isChained: false, onPlaybackStart: null, onPlaybackPause: null, onPlaybackStop: null, onPlaybackComplete: null, callbacksContext: null };
          } }, { key: "play", value: function() {
            var t5 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
            return "play" === this._state && this._isRunning || (this._props.isReversed = false, this._subPlay(t5, "play"), this._setPlaybackState("play")), this;
          } }, { key: "playBackward", value: function() {
            var t5 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
            return "reverse" === this._state && this._isRunning || (this._props.isReversed = true, this._subPlay(t5, "reverse"), this._setPlaybackState("reverse")), this;
          } }, { key: "pause", value: function() {
            return "pause" === this._state || "stop" === this._state || (this._removeFromTweener(), this._setPlaybackState("pause")), this;
          } }, { key: "stop", value: function(t5) {
            if ("stop" === this._state)
              return this;
            this._wasUknownUpdate = void 0;
            var e5 = null != t5 ? t5 : "reverse" === this._state ? 1 : 0;
            return this.setProgress(e5), this.reset(), this;
          } }, { key: "replay", value: function() {
            var t5 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
            return this.reset(), this.play(t5), this;
          } }, { key: "replayBackward", value: function() {
            var t5 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
            return this.reset(), this.playBackward(t5), this;
          } }, { key: "resume", value: function() {
            var t5 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
            if ("pause" !== this._state)
              return this;
            switch (this._prevState) {
              case "play":
                this.play(t5);
                break;
              case "reverse":
                this.playBackward(t5);
            }
            return this;
          } }, { key: "setProgress", value: function(t5) {
            var e5 = this._props;
            return !e5.startTime && this._setStartTime(), this._playTime = null, t5 < 0 && (t5 = 0), t5 > 1 && (t5 = 1), this._update(e5.startTime - e5.delay + t5 * e5.repeatTime), this;
          } }, { key: "setSpeed", value: function(t5) {
            return this._props.speed = t5, "play" !== this._state && "reverse" !== this._state || this._setResumeTime(this._state), this;
          } }, { key: "reset", value: function() {
            return this._removeFromTweener(), this._setPlaybackState("stop"), this._progressTime = 0, this._isCompleted = false, this._isStarted = false, this._isFirstUpdate = false, this._wasUknownUpdate = void 0, this._prevTime = void 0, this._prevYoyo = void 0, this._props.isReversed = false, this;
          } }, { key: "_subPlay", value: function() {
            var t5 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0, e5 = arguments.length > 1 ? arguments[1] : void 0, s4 = this._props, r3 = this._state, i2 = this._prevState, n2 = "pause" === r3, a2 = ("play" === r3 || n2 && "play" === i2) && "reverse" === e5 || ("reverse" === r3 || n2 && "reverse" === i2) && "play" === e5;
            return this._progressTime = this._progressTime >= s4.repeatTime ? 0 : this._progressTime, a2 && (this._progressTime = s4.repeatTime - this._progressTime), this._setResumeTime(e5, t5), u.Z.add(this), this;
          } }, { key: "_setResumeTime", value: function(t5) {
            var e5 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
            this._resumeTime = performance.now();
            var s4 = this._resumeTime - Math.abs(e5) - this._progressTime;
            this._setStartTime(s4, false), null != this._prevTime && (this._prevTime = "play" === t5 ? this._normPrevTimeForward() : this._props.endTime - this._progressTime);
          } }, { key: "_normPrevTimeForward", value: function() {
            var t5 = this._props;
            return t5.startTime + this._progressTime - t5.delay;
          } }, { key: "_setSelfName", value: function() {
            var t5 = "_".concat(this._props.nameBase, "s");
            u.Z[t5] = null == u.Z[t5] ? 1 : ++u.Z[t5], this._props.name = "".concat(this._props.nameBase, " ").concat(u.Z[t5]);
          } }, { key: "_setPlaybackState", value: function(t5) {
            this._prevState = this._state, this._state = t5;
            var e5 = "pause" === this._prevState, s4 = "stop" === this._prevState, r3 = "play" === this._prevState, i2 = "reverse" === this._prevState, n2 = r3 || i2;
            "play" !== t5 && "reverse" !== t5 || !(s4 || e5) || this._playbackStart(), "pause" === t5 && n2 && this._playbackPause(), "stop" === t5 && (n2 || e5) && this._playbackStop();
          } }, { key: "_vars", value: function() {
            return this.progress = 0, this._prevTime = void 0, this._progressTime = 0, this._negativeShift = 0, this._state = "stop", this._props.delay < 0 && (this._negativeShift = this._props.delay, this._props.delay = 0), this._calcDimentions();
          } }, { key: "_calcDimentions", value: function() {
            this._props.time = this._props.duration + this._props.delay, this._props.repeatTime = this._props.time * (this._props.repeat + 1);
          } }, { key: "_extendDefaults", value: function() {
            this._callbackOverrides = this._o.callbackOverrides || {}, delete this._o.callbackOverrides, (0, a.Z)((0, h.Z)(s3.prototype), "_extendDefaults", this).call(this);
            var t5 = this._props;
            t5.easing = c().parseEasing(t5.easing), t5.easing._parent = this, null != t5.backwardEasing && (t5.backwardEasing = c().parseEasing(t5.backwardEasing), t5.backwardEasing._parent = this);
          } }, { key: "_setStartTime", value: function(t5) {
            var e5 = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1], s4 = this._props, r3 = s4.shiftTime || 0;
            e5 && (this._isCompleted = false, this._isRepeatCompleted = false, this._isStarted = false);
            var i2 = null == t5 ? performance.now() : t5;
            return s4.startTime = i2 + s4.delay + this._negativeShift + r3, s4.endTime = s4.startTime + s4.repeatTime - s4.delay, this._playTime = null != this._resumeTime ? this._resumeTime : i2 + r3, this._resumeTime = null, this;
          } }, { key: "_update", value: function(t5, e5, s4, r3) {
            var i2 = this._props;
            null == this._prevTime && null != e5 && (this._props.speed && this._playTime && (this._prevTime = this._playTime + this._props.speed * (e5 - this._playTime)), this._wasUknownUpdate = true);
            var n2 = i2.startTime - i2.delay;
            if (i2.speed && this._playTime && (t5 = this._playTime + i2.speed * (t5 - this._playTime)), Math.abs(i2.endTime - t5) < 1e-8 && (t5 = i2.endTime), r3 && null != s4) {
              var a2 = this._getPeriod(t5), o2 = !(!i2.isYoyo || !this._props.repeat || a2 % 2 != 1);
              if (this._timelines)
                for (var l2 = 0; l2 < this._timelines.length; l2++)
                  this._timelines[l2]._update(t5, e5, s4, r3);
              1 === r3 ? s4 ? (this._prevTime = t5 + 1, this._repeatStart(t5, o2), this._start(t5, o2)) : (this._prevTime = t5 - 1, this._repeatComplete(t5, o2), this._complete(t5, o2)) : -1 === r3 && (s4 ? (this._prevTime = t5 - 1, this._repeatComplete(t5, o2), this._complete(t5, o2)) : this._prevTime >= i2.startTime && this._prevTime <= i2.endTime && (this._prevTime = t5 + 1, this._repeatStart(t5, o2), this._start(t5, o2), this._isCompleted = true)), this._prevTime = void 0;
            }
            return t5 > n2 && t5 < i2.endTime ? this._progressTime = t5 - n2 : t5 <= n2 ? this._progressTime = 0 : t5 >= i2.endTime && (this._progressTime = i2.repeatTime + 1e-11), i2.isReversed && (t5 = i2.endTime - this._progressTime), null == this._prevTime ? (this._prevTime = t5, this._wasUknownUpdate = true, false) : (t5 >= n2 && t5 <= i2.endTime && this._progress((t5 - n2) / i2.repeatTime, t5), t5 >= i2.startTime && t5 <= i2.endTime ? this._updateInActiveArea(t5) : this._isInActiveArea ? this._updateInInactiveArea(t5) : this._isRefreshed || t5 < i2.startTime && 0 !== this.progress && (this._refresh(true), this._isRefreshed = true), this._prevTime = t5, t5 >= i2.endTime || t5 <= n2);
          } }, { key: "_updateInInactiveArea", value: function(t5) {
            if (this._isInActiveArea) {
              var e5 = this._props;
              if (t5 > e5.endTime && !this._isCompleted) {
                this._progress(1, t5);
                var s4 = this._getPeriod(e5.endTime), r3 = e5.isYoyo && s4 % 2 == 0;
                this._setProgress(r3 ? 0 : 1, t5, r3), this._repeatComplete(t5, r3), this._complete(t5, r3);
              }
              t5 < this._prevTime && t5 < e5.startTime && !this._isStarted && !this._isCompleted && (this._progress(0, t5, false), this._setProgress(0, t5, false), this._isRepeatStart = false, this._repeatStart(t5, false), this._start(t5, false)), this._isInActiveArea = false;
            }
          } }, { key: "_updateInActiveArea", value: function(t5) {
            var e5 = this._props, s4 = e5.delay + e5.duration, r3 = e5.startTime - e5.delay, i2 = (t5 - e5.startTime + e5.delay) % s4, n2 = Math.round((e5.endTime - e5.startTime + e5.delay) / s4), a2 = this._getPeriod(t5), o2 = this._delayT, l2 = this._getPeriod(this._prevTime), h2 = this._delayT, u2 = e5.isYoyo && a2 % 2 == 1, p2 = e5.isYoyo && l2 % 2 == 1, c2 = u2 ? 1 : 0;
            if (t5 === e5.endTime)
              return this._wasUknownUpdate = false, u2 = e5.isYoyo && (a2 - 1) % 2 == 1, this._setProgress(u2 ? 0 : 1, t5, u2), t5 > this._prevTime && (this._isRepeatCompleted = false), this._repeatComplete(t5, u2), this._complete(t5, u2);
            if (this._isCompleted = false, this._isRefreshed = false, r3 + i2 >= e5.startTime) {
              this._isInActiveArea = true, this._isRepeatCompleted = false, this._isRepeatStart = false, this._isStarted = false;
              var d2 = (t5 - e5.startTime) % s4 / e5.duration, _2 = a2 > 0 && l2 < a2, f = l2 > a2;
              if (this._onEdge = 0, _2 && (this._onEdge = 1), f && (this._onEdge = -1), this._wasUknownUpdate && (t5 > this._prevTime && (this._start(t5, u2), this._repeatStart(t5, u2), this._firstUpdate(t5, u2)), t5 < this._prevTime && (this._complete(t5, u2), this._repeatComplete(t5, u2), this._firstUpdate(t5, u2), this._isCompleted = false)), _2) {
                if (1 !== this.progress) {
                  var v = e5.isYoyo && (a2 - 1) % 2 == 1;
                  this._repeatComplete(t5, v);
                }
                l2 >= 0 && this._repeatStart(t5, u2);
              }
              t5 > this._prevTime && (!this._isStarted && this._prevTime <= e5.startTime && (this._start(t5, u2), this._repeatStart(t5, u2), this._isStarted = false, this._isRepeatStart = false), this._firstUpdate(t5, u2)), f && (0 !== this.progress && 1 !== this.progress && l2 != n2 && this._repeatStart(t5, p2), l2 !== n2 || this._wasUknownUpdate || (this._complete(t5, u2), this._repeatComplete(t5, u2), this._firstUpdate(t5, u2), this._isCompleted = false), this._repeatComplete(t5, u2)), "delay" === l2 && (a2 < h2 && this._repeatComplete(t5, u2), a2 === h2 && a2 > 0 && this._repeatStart(t5, u2)), t5 > this._prevTime ? (0 === d2 && this._repeatStart(t5, u2), t5 !== e5.endTime && this._setProgress(u2 ? 1 - d2 : d2, t5, u2)) : (t5 !== e5.endTime && this._setProgress(u2 ? 1 - d2 : d2, t5, u2), 0 === d2 && this._repeatStart(t5, u2)), t5 === e5.startTime && this._start(t5, u2);
            } else if (this._isInActiveArea) {
              var y = "delay" === a2 ? o2 : a2, m = t5 > this._prevTime;
              m && y--, c2 = e5.isYoyo && y % 2 == 1 ? 1 : 0, t5 < this._prevTime && (this._setProgress(c2, t5, 1 === c2), this._repeatStart(t5, 1 === c2)), this._setProgress(m ? 1 - c2 : c2, t5, 1 === c2), t5 > this._prevTime && (0 === this.progress && 1 !== c2 || this._repeatComplete(t5, 1 === c2)), this._isInActiveArea = false;
            }
            this._wasUknownUpdate = false;
          } }, { key: "_removeFromTweener", value: function() {
            return u.Z.remove(this), this;
          } }, { key: "_getPeriod", value: function(t5) {
            var e5 = this._props, s4 = e5.delay + e5.duration, r3 = e5.delay + t5 - e5.startTime, i2 = r3 / s4, n2 = t5 < e5.endTime ? r3 % s4 : 0;
            return i2 = t5 >= e5.endTime ? Math.round(i2) : Math.floor(i2), t5 > e5.endTime ? i2 = Math.round((e5.endTime - e5.startTime + e5.delay) / s4) : n2 > 0 && n2 < e5.delay && (this._delayT = i2, i2 = "delay"), i2;
          } }, { key: "_setProgress", value: function(t5, e5, s4) {
            var r3 = this._props, i2 = r3.wasYoyo !== s4, n2 = e5 > this._prevTime;
            if (this.progress = t5, n2 && !s4 || !n2 && s4)
              this.easedProgress = r3.easing(t5);
            else if (!n2 && !s4 || n2 && s4) {
              var a2 = null != r3.backwardEasing ? r3.backwardEasing : r3.easing;
              this.easedProgress = a2(t5);
            }
            return (r3.prevEasedProgress !== this.easedProgress || i2) && null != r3.onUpdate && "function" == typeof r3.onUpdate && r3.onUpdate.call(r3.callbacksContext || this, this.easedProgress, this.progress, n2, s4), r3.prevEasedProgress = this.easedProgress, r3.wasYoyo = s4, this;
          } }, { key: "_start", value: function(t5, e5) {
            if (!this._isStarted) {
              var s4 = this._props;
              null != s4.onStart && "function" == typeof s4.onStart && s4.onStart.call(s4.callbacksContext || this, t5 > this._prevTime, e5), this._isCompleted = false, this._isStarted = true, this._isFirstUpdate = false;
            }
          } }, { key: "_playbackStart", value: function() {
            var t5 = this._props;
            null != t5.onPlaybackStart && "function" == typeof t5.onPlaybackStart && t5.onPlaybackStart.call(t5.callbacksContext || this);
          } }, { key: "_playbackPause", value: function() {
            var t5 = this._props;
            null != t5.onPlaybackPause && "function" == typeof t5.onPlaybackPause && t5.onPlaybackPause.call(t5.callbacksContext || this);
          } }, { key: "_playbackStop", value: function() {
            var t5 = this._props;
            null != t5.onPlaybackStop && "function" == typeof t5.onPlaybackStop && t5.onPlaybackStop.call(t5.callbacksContext || this);
          } }, { key: "_playbackComplete", value: function() {
            var t5 = this._props;
            null != t5.onPlaybackComplete && "function" == typeof t5.onPlaybackComplete && t5.onPlaybackComplete.call(t5.callbacksContext || this);
          } }, { key: "_complete", value: function(t5, e5) {
            if (!this._isCompleted) {
              var s4 = this._props;
              null != s4.onComplete && "function" == typeof s4.onComplete && s4.onComplete.call(s4.callbacksContext || this, t5 > this._prevTime, e5), this._isCompleted = true, this._isStarted = false, this._isFirstUpdate = false, this._prevYoyo = void 0;
            }
          } }, { key: "_firstUpdate", value: function(t5, e5) {
            if (!this._isFirstUpdate) {
              var s4 = this._props;
              null != s4.onFirstUpdate && "function" == typeof s4.onFirstUpdate && (s4.onFirstUpdate.tween = this, s4.onFirstUpdate.call(s4.callbacksContext || this, t5 > this._prevTime, e5)), this._isFirstUpdate = true;
            }
          } }, { key: "_repeatComplete", value: function(t5, e5) {
            if (!this._isRepeatCompleted) {
              var s4 = this._props;
              null != s4.onRepeatComplete && "function" == typeof s4.onRepeatComplete && s4.onRepeatComplete.call(s4.callbacksContext || this, t5 > this._prevTime, e5), this._isRepeatCompleted = true;
            }
          } }, { key: "_repeatStart", value: function(t5, e5) {
            if (!this._isRepeatStart) {
              var s4 = this._props;
              null != s4.onRepeatStart && "function" == typeof s4.onRepeatStart && s4.onRepeatStart.call(s4.callbacksContext || this, t5 > this._prevTime, e5), this._isRepeatStart = true;
            }
          } }, { key: "_progress", value: function(t5, e5) {
            var s4 = this._props;
            null != s4.onProgress && "function" == typeof s4.onProgress && s4.onProgress.call(s4.callbacksContext || this, t5, e5 > this._prevTime);
          } }, { key: "_refresh", value: function(t5) {
            var e5 = this._props;
            if (null != e5.onRefresh) {
              var s4 = e5.callbacksContext || this, r3 = t5 ? 0 : 1;
              e5.onRefresh.call(s4, t5, e5.easing(r3), r3);
            }
          } }, { key: "_onTweenerRemove", value: function() {
          } }, { key: "_onTweenerFinish", value: function() {
            this._setPlaybackState("stop"), this._playbackComplete();
          } }, { key: "_setProp", value: function(t5, e5) {
            (0, a.Z)((0, h.Z)(s3.prototype), "_setProp", this).call(this, t5, e5), this._calcDimentions();
          } }, { key: "_assignProp", value: function(t5, e5) {
            null == e5 && (e5 = this._defaults[t5]), "easing" === t5 && ((e5 = c().parseEasing(e5))._parent = this);
            var r3 = this._callbackOverrides[t5], i2 = !e5 || !e5.isMojsCallbackOverride;
            r3 && i2 && (e5 = this._overrideCallback(e5, r3)), (0, a.Z)((0, h.Z)(s3.prototype), "_assignProp", this).call(this, t5, e5);
          } }, { key: "_overrideCallback", value: function(t5, e5) {
            var s4 = t5 && "function" == typeof t5, r3 = function() {
              s4 && t5.apply(this, arguments), e5.apply(this, arguments);
            };
            return r3.isMojsCallbackOverride = true, r3;
          } }]), s3;
        }(s2(973).Z);
      }, 47: (t3, e3, s2) => {
        "use strict";
        s2.d(e3, { Z: () => n });
        var r2 = s2(671), i = s2(144);
        const n = new (function() {
          function t4() {
            return (0, r2.Z)(this, t4), this._vars(), this._listenVisibilityChange(), this;
          }
          return (0, i.Z)(t4, [{ key: "_vars", value: function() {
            this.tweens = [], this._savedTweens = [], this._loop = this._loop.bind(this), this._onVisibilityChange = this._onVisibilityChange.bind(this);
          } }, { key: "_loop", value: function() {
            return !!this._isRunning && (this._update(window.performance.now()), this.tweens.length ? (requestAnimationFrame(this._loop), this) : this._isRunning = false);
          } }, { key: "_startLoop", value: function() {
            this._isRunning || (this._isRunning = true, requestAnimationFrame(this._loop));
          } }, { key: "_stopLoop", value: function() {
            this._isRunning = false;
          } }, { key: "_update", value: function(t5) {
            for (var e4 = this.tweens.length; e4--; ) {
              var s3 = this.tweens[e4];
              s3 && true === s3._update(t5) && (this.remove(s3), s3._onTweenerFinish(), s3._prevTime = void 0);
            }
          } }, { key: "add", value: function(t5) {
            t5._isRunning || (t5._isRunning = true, this.tweens.push(t5), this._startLoop());
          } }, { key: "removeAll", value: function() {
            this.tweens.length = 0;
          } }, { key: "remove", value: function(t5) {
            var e4 = "number" == typeof t5 ? t5 : this.tweens.indexOf(t5);
            -1 !== e4 && (t5 = this.tweens[e4]) && (t5._isRunning = false, this.tweens.splice(e4, 1), t5._onTweenerRemove());
          } }, { key: "_listenVisibilityChange", value: function() {
            void 0 !== document.hidden ? (this._visibilityHidden = "hidden", this._visibilityChange = "visibilitychange") : void 0 !== document.mozHidden ? (this._visibilityHidden = "mozHidden", this._visibilityChange = "mozvisibilitychange") : void 0 !== document.msHidden ? (this._visibilityHidden = "msHidden", this._visibilityChange = "msvisibilitychange") : void 0 !== document.webkitHidden && (this._visibilityHidden = "webkitHidden", this._visibilityChange = "webkitvisibilitychange"), document.addEventListener(this._visibilityChange, this._onVisibilityChange, false);
          } }, { key: "_onVisibilityChange", value: function() {
            document[this._visibilityHidden] ? this._savePlayingTweens() : this._restorePlayingTweens();
          } }, { key: "_savePlayingTweens", value: function() {
            this._savedTweens = this.tweens.slice(0);
            for (var t5 = 0; t5 < this._savedTweens.length; t5++)
              this._savedTweens[t5].pause();
          } }, { key: "_restorePlayingTweens", value: function() {
            for (var t5 = 0; t5 < this._savedTweens.length; t5++)
              this._savedTweens[t5].resume();
          } }]), t4;
        }())();
      }, 977: (t3, e3, s2) => {
        var r2, i;
        i = s2(52), r2 = new class {
          constructor(t4) {
            return this.vars(), this.generate;
          }
          vars() {
            return this.generate = i.bind(this.generate, this);
          }
          generate(t4, e4, s3, r3) {
            var i2, n, a, o, l, h, u, p, c, d, _, f, v, y, m, g, k, w;
            if (arguments.length < 4)
              return this.error("Bezier function expects 4 arguments");
            for (f = v = 0; v < 4; f = ++v)
              if ("number" != typeof (o = arguments[f]) || isNaN(o) || !isFinite(o))
                return this.error("Bezier function expects 4 arguments");
            return t4 < 0 || t4 > 1 || s3 < 0 || s3 > 1 ? this.error("Bezier x values should be > 0 and < 1") : (y = 0.1, c = !!Float32Array, i2 = function(t5, e5) {
              return 1 - 3 * e5 + 3 * t5;
            }, n = function(t5, e5) {
              return 3 * e5 - 6 * t5;
            }, a = function(t5) {
              return 3 * t5;
            }, h = function(t5, e5, s4) {
              return ((i2(e5, s4) * t5 + n(e5, s4)) * t5 + a(e5)) * t5;
            }, d = function(t5, e5, s4) {
              return 3 * i2(e5, s4) * t5 * t5 + 2 * n(e5, s4) * t5 + a(e5);
            }, g = function(e5, r4) {
              var i3;
              for (f = 0; f < 4; ) {
                if (0 === (i3 = d(r4, t4, s3)))
                  return r4;
                r4 -= (h(r4, t4, s3) - e5) / i3, ++f;
              }
              return r4;
            }, u = function() {
              for (f = 0; f < 11; )
                m[f] = h(f * y, t4, s3), ++f;
            }, l = function(e5, r4, i3) {
              var n2, a2;
              for (a2 = void 0, n2 = void 0, f = 0; (a2 = h(n2 = r4 + (i3 - r4) / 2, t4, s3) - e5) > 0 ? i3 = n2 : r4 = n2, Math.abs(a2) > 1e-7 && ++f < 10; )
                ;
              return n2;
            }, _ = function(e5) {
              var r4, i3, n2, a2, o2, h2;
              for (h2 = 0, r4 = 1; 10 !== r4 && m[r4] <= e5; )
                h2 += y, ++r4;
              return --r4, i3 = m[r4 + 1] - m[r4], n2 = (e5 - m[r4]) / i3, (o2 = d(a2 = h2 + n2 * y, t4, s3)) >= 1e-3 ? g(e5, a2) : 0 === o2 ? a2 : l(e5, h2, h2 + y);
            }, k = function() {
              if (t4 !== e4 || s3 !== r3)
                return u();
            }, m = c ? new Float32Array(11) : new Array(11), w = "bezier(" + [t4, e4, s3, r3] + ")", (p = function(i3) {
              return k(), t4 === e4 && s3 === r3 ? i3 : 0 === i3 ? 0 : 1 === i3 ? 1 : h(_(i3), e4, r3);
            }).toStr = function() {
              return w;
            }, p);
          }
          error(t4) {
            return i.error(t4);
          }
        }(), t3.exports = r2;
      }, 283: function(t3, e3, s2) {
        var r2, i, n, a, o, l, h, u, p;
        h = s2(52), o = s2(977), n = s2(162), u = s2(440), a = s2(50).Z, p = Math.sin, i = Math.PI, r2 = (function() {
          class t4 {
            inverse(t5) {
              return 1 - t5;
            }
            parseEasing(t5) {
              var e4;
              return null == t5 && (t5 = "linear.none"), "string" == typeof t5 ? "m" === t5.charAt(0).toLowerCase() ? this.path(t5) : (e4 = this[(t5 = this._splitEasing(t5))[0]]) ? e4[t5[1]] : (h.error(`Easing with name "${t5[0]}" was not found, fallback to "linear.none" instead`), this.linear.none) : h.isArray(t5) ? this.bezier.apply(this, t5) : t5;
            }
            _splitEasing(t5) {
              var e4;
              return "function" == typeof t5 ? t5 : "string" == typeof t5 && t5.length ? [(e4 = t5.split("."))[0].toLowerCase() || "linear", e4[1].toLowerCase() || "none"] : ["linear", "none"];
            }
          }
          return t4.prototype.bezier = o, t4.prototype.PathEasing = n, t4.prototype.path = new n("creator").create, t4.prototype.approximate = a, t4.prototype.linear = { none: function(t5) {
            return t5;
          } }, t4.prototype.ease = { in: o.apply(t4, [0.42, 0, 1, 1]), out: o.apply(t4, [0, 0, 0.58, 1]), inout: o.apply(t4, [0.42, 0, 0.58, 1]) }, t4.prototype.sin = { in: function(t5) {
            return 1 - Math.cos(t5 * i / 2);
          }, out: function(t5) {
            return p(t5 * i / 2);
          }, inout: function(t5) {
            return 0.5 * (1 - Math.cos(i * t5));
          } }, t4.prototype.quad = { in: function(t5) {
            return t5 * t5;
          }, out: function(t5) {
            return t5 * (2 - t5);
          }, inout: function(t5) {
            return (t5 *= 2) < 1 ? 0.5 * t5 * t5 : -0.5 * (--t5 * (t5 - 2) - 1);
          } }, t4.prototype.cubic = { in: function(t5) {
            return t5 * t5 * t5;
          }, out: function(t5) {
            return --t5 * t5 * t5 + 1;
          }, inout: function(t5) {
            return (t5 *= 2) < 1 ? 0.5 * t5 * t5 * t5 : 0.5 * ((t5 -= 2) * t5 * t5 + 2);
          } }, t4.prototype.quart = { in: function(t5) {
            return t5 * t5 * t5 * t5;
          }, out: function(t5) {
            return 1 - --t5 * t5 * t5 * t5;
          }, inout: function(t5) {
            return (t5 *= 2) < 1 ? 0.5 * t5 * t5 * t5 * t5 : -0.5 * ((t5 -= 2) * t5 * t5 * t5 - 2);
          } }, t4.prototype.quint = { in: function(t5) {
            return t5 * t5 * t5 * t5 * t5;
          }, out: function(t5) {
            return --t5 * t5 * t5 * t5 * t5 + 1;
          }, inout: function(t5) {
            return (t5 *= 2) < 1 ? 0.5 * t5 * t5 * t5 * t5 * t5 : 0.5 * ((t5 -= 2) * t5 * t5 * t5 * t5 + 2);
          } }, t4.prototype.expo = { in: function(t5) {
            return 0 === t5 ? 0 : Math.pow(1024, t5 - 1);
          }, out: function(t5) {
            return 1 === t5 ? 1 : 1 - Math.pow(2, -10 * t5);
          }, inout: function(t5) {
            return 0 === t5 ? 0 : 1 === t5 ? 1 : (t5 *= 2) < 1 ? 0.5 * Math.pow(1024, t5 - 1) : 0.5 * (2 - Math.pow(2, -10 * (t5 - 1)));
          } }, t4.prototype.circ = { in: function(t5) {
            return 1 - Math.sqrt(1 - t5 * t5);
          }, out: function(t5) {
            return Math.sqrt(1 - --t5 * t5);
          }, inout: function(t5) {
            return (t5 *= 2) < 1 ? -0.5 * (Math.sqrt(1 - t5 * t5) - 1) : 0.5 * (Math.sqrt(1 - (t5 -= 2) * t5) + 1);
          } }, t4.prototype.back = { in: function(t5) {
            var e4;
            return t5 * t5 * ((1 + (e4 = 1.70158)) * t5 - e4);
          }, out: function(t5) {
            var e4;
            return --t5 * t5 * ((1 + (e4 = 1.70158)) * t5 + e4) + 1;
          }, inout: function(t5) {
            var e4;
            return e4 = 2.5949095, (t5 *= 2) < 1 ? t5 * t5 * ((e4 + 1) * t5 - e4) * 0.5 : 0.5 * ((t5 -= 2) * t5 * ((e4 + 1) * t5 + e4) + 2);
          } }, t4.prototype.elastic = { in: function(t5) {
            return 0 === t5 ? 0 : 1 === t5 ? 1 : -1 * Math.pow(2, 10 * (t5 -= 1)) * Math.sin((t5 - 0.1) * (2 * Math.PI) / 0.4);
          }, out: function(t5) {
            return 0 === t5 ? 0 : 1 === t5 ? 1 : 1 * Math.pow(2, -10 * t5) * Math.sin((t5 - 0.1) * (2 * Math.PI) / 0.4) + 1;
          }, inout: function(t5) {
            return 0 === t5 ? 0 : 1 === t5 ? 1 : (t5 *= 2) < 1 ? 1 * Math.pow(2, 10 * (t5 -= 1)) * Math.sin((t5 - 0.1) * (2 * Math.PI) / 0.4) * -0.5 : 1 * Math.pow(2, -10 * (t5 -= 1)) * Math.sin((t5 - 0.1) * (2 * Math.PI) / 0.4) * 0.5 + 1;
          } }, t4.prototype.bounce = { in: function(t5) {
            return 1 - l.bounce.out(1 - t5);
          }, out: function(t5) {
            return t5 < 1 / 2.75 ? 7.5625 * t5 * t5 : t5 < 2 / 2.75 ? 7.5625 * (t5 -= 1.5 / 2.75) * t5 + 0.75 : t5 < 2.5 / 2.75 ? 7.5625 * (t5 -= 2.25 / 2.75) * t5 + 0.9375 : 7.5625 * (t5 -= 2.625 / 2.75) * t5 + 0.984375;
          }, inout: function(t5) {
            return t5 < 0.5 ? 0.5 * l.bounce.in(2 * t5) : 0.5 * l.bounce.out(2 * t5 - 1) + 0.5;
          } }, t4;
        }).call(this), (l = new r2()).mix = u(l), t3.exports = l;
      }, 440: (t3) => {
        var e3, s2, r2, i, n, a;
        s2 = null, n = function(t4) {
          return "number" == typeof t4.value ? t4.value : s2.parseEasing(t4.value);
        }, a = function(t4, e4) {
          var s3;
          return t4.value = n(t4), e4.value = n(e4), s3 = 0, t4.to < e4.to && (s3 = -1), t4.to > e4.to && (s3 = 1), s3;
        }, r2 = function(t4, e4) {
          var s3, r3, i2;
          for (s3 = r3 = 0, i2 = t4.length; r3 < i2; s3 = ++r3)
            if (t4[s3].to > e4)
              return s3;
        }, i = function(...t4) {
          return t4.length > 1 ? t4 = t4.sort(a) : t4[0].value = n(t4[0]), function(e4) {
            var s3, i2;
            return void 0 === (s3 = r2(t4, e4)) ? 1 : -1 !== s3 ? (i2 = t4[s3].value, s3 === t4.length - 1 && e4 > t4[s3].to ? 1 : "function" == typeof i2 ? i2(e4) : i2) : void 0;
          };
        }, e3 = function(t4) {
          return s2 = t4, i;
        }, t3.exports = e3;
      }, 162: (t3, e3, s2) => {
        var r2, i;
        i = s2(52), r2 = class t4 {
          _vars() {
            return this._precompute = i.clamp(this.o.precompute || 1450, 100, 1e4), this._step = 1 / this._precompute, this._rect = this.o.rect || 100, this._approximateMax = this.o.approximateMax || 5, this._eps = this.o.eps || 1e-3, this._boundsPrevProgress = -1;
          }
          constructor(t5, e4 = {}) {
            if (this.o = e4, "creator" !== t5) {
              if (this.path = i.parsePath(t5), null == this.path)
                return i.error("Error while parsing the path");
              this._vars(), this.path.setAttribute("d", this._normalizePath(this.path.getAttribute("d"))), this.pathLength = this.path.getTotalLength(), this.sample = i.bind(this.sample, this), this._hardSample = i.bind(this._hardSample, this), this._preSample();
            }
          }
          _preSample() {
            var t5, e4, s3, r3, i2, n, a;
            for (this._samples = [], a = [], t5 = e4 = 0, n = this._precompute; 0 <= n ? e4 <= n : e4 >= n; t5 = 0 <= n ? ++e4 : --e4)
              i2 = t5 * this._step, s3 = this.pathLength * i2, r3 = this.path.getPointAtLength(s3), a.push(this._samples[t5] = { point: r3, length: s3, progress: i2 });
            return a;
          }
          _findBounds(t5, e4) {
            var s3, r3, i2, n, a, o, l, h, u, p, c, d, _;
            if (e4 === this._boundsPrevProgress)
              return this._prevBounds;
            for (null == this._boundsStartIndex && (this._boundsStartIndex = 0), o = t5.length, this._boundsPrevProgress > e4 ? (l = 0, r3 = "reverse") : (l = o, r3 = "forward"), "forward" === r3 ? (d = t5[0], i2 = t5[t5.length - 1]) : (d = t5[t5.length - 1], i2 = t5[0]), n = a = p = this._boundsStartIndex, c = l; p <= c ? a < c : a > c; n = p <= c ? ++a : --a) {
              if (u = (_ = t5[n]).point.x / this._rect, h = e4, "reverse" === r3 && (s3 = u, u = h, h = s3), !(u < h)) {
                i2 = _;
                break;
              }
              d = _, this._boundsStartIndex = n;
            }
            return this._boundsPrevProgress = e4, this._prevBounds = { start: d, end: i2 };
          }
          sample(t5) {
            var e4, s3;
            return t5 = i.clamp(t5, 0, 1), e4 = this._findBounds(this._samples, t5), null != (s3 = this._checkIfBoundsCloseEnough(t5, e4)) ? s3 : this._findApproximate(t5, e4.start, e4.end);
          }
          _checkIfBoundsCloseEnough(t5, e4) {
            var s3;
            return null != (s3 = this._checkIfPointCloseEnough(t5, e4.start.point)) ? s3 : this._checkIfPointCloseEnough(t5, e4.end.point);
          }
          _checkIfPointCloseEnough(t5, e4) {
            if (i.closeEnough(t5, e4.x / this._rect, this._eps))
              return this._resolveY(e4);
          }
          _approximate(t5, e4, s3) {
            var r3, i2;
            return r3 = e4.point.x - t5.point.x, i2 = (s3 - t5.point.x / this._rect) / (r3 / this._rect), t5.length + i2 * (e4.length - t5.length);
          }
          _findApproximate(t5, e4, s3, r3 = this._approximateMax) {
            var n, a, o, l, h;
            return n = this._approximate(e4, s3, t5), h = (l = this.path.getPointAtLength(n)).x / this._rect, i.closeEnough(t5, h, this._eps) || --r3 < 1 ? this._resolveY(l) : (o = { point: l, length: n }, a = t5 < h ? [t5, e4, o, r3] : [t5, o, s3, r3], this._findApproximate.apply(this, a));
          }
          _resolveY(t5) {
            return 1 - t5.y / this._rect;
          }
          _normalizePath(t5) {
            var e4, s3, r3, i2;
            return i2 = /[M|L|H|V|C|S|Q|T|A]/gim, (r3 = t5.split(i2)).shift(), e4 = t5.match(i2), r3[0] = this._normalizeSegment(r3[0]), r3[s3 = r3.length - 1] = this._normalizeSegment(r3[s3], this._rect || 100), this._joinNormalizedPath(e4, r3);
          }
          _joinNormalizedPath(t5, e4) {
            var s3, r3, i2, n;
            for (n = "", s3 = r3 = 0, i2 = t5.length; r3 < i2; s3 = ++r3)
              n += `${0 === s3 ? "" : " "}${t5[s3]}${e4[s3].trim()}`;
            return n;
          }
          _normalizeSegment(t5, e4 = 0) {
            var s3, r3, i2, n, a, o, l, h;
            if (t5 = t5.trim(), a = /(-|\+)?((\d+(\.(\d|\e(-|\+)?)+)?)|(\.?(\d|\e|(\-|\+))+))/gim, h = (i2 = (o = this._getSegmentPairs(t5.match(a)))[o.length - 1])[0], Number(h) !== e4)
              for (t5 = "", i2[0] = e4, s3 = r3 = 0, n = o.length; r3 < n; s3 = ++r3)
                t5 += `${0 === s3 ? "" : " "}${(l = o[s3])[0]},${l[1]}`;
            return t5;
          }
          _getSegmentPairs(t5) {
            var e4, s3, r3, n, a;
            for (t5.length % 2 != 0 && i.error("Failed to parse the path - segment pairs are not even.", t5), n = [], e4 = s3 = 0, r3 = t5.length; s3 < r3; e4 = s3 += 2)
              t5[e4], a = [t5[e4], t5[e4 + 1]], n.push(a);
            return n;
          }
          create(e4, s3) {
            var r3;
            return (r3 = new t4(e4, s3)).sample.path = r3.path, r3.sample;
          }
        }, t3.exports = r2;
      }, 52: function(t3) {
        var e3, s2;
        e3 = (function() {
          class t4 {
            constructor() {
              this.vars();
            }
            vars() {
              var t5;
              return this.prefix = this.getPrefix(), this.getRemBase(), this.isFF = "moz" === this.prefix.lowercase, this.isIE = "ms" === this.prefix.lowercase, t5 = navigator.userAgent, this.isOldOpera = t5.match(/presto/gim), this.isSafari = t5.indexOf("Safari") > -1, this.isChrome = t5.indexOf("Chrome") > -1, this.isOpera = t5.toLowerCase().indexOf("op") > -1, this.isChrome && this.isSafari && (this.isSafari = false), t5.match(/PhantomJS/gim) && (this.isSafari = false), this.isChrome && this.isOpera && (this.isChrome = false), this.is3d = this.checkIf3d(), this.uniqIDs = -1, this.div = document.createElement("div"), document.body.appendChild(this.div), this.defaultStyles = this.computedStyle(this.div);
            }
            cloneObj(t5, e4) {
              var s3, r2, i, n;
              for (n = {}, s3 = (i = Object.keys(t5)).length; s3--; )
                r2 = i[s3], null != e4 && e4[r2] || (n[r2] = t5[r2]);
              return n;
            }
            extend(t5, e4) {
              var s3;
              for (s3 in e4)
                e4[s3], null == t5[s3] && (t5[s3] = e4[s3]);
              return t5;
            }
            getRemBase() {
              var t5, e4;
              return t5 = document.querySelector("html"), e4 = getComputedStyle(t5), this.remBase = parseFloat(e4.fontSize);
            }
            clamp(t5, e4, s3) {
              return t5 < e4 ? e4 : t5 > s3 ? s3 : t5;
            }
            setPrefixedStyle(t5, e4, s3) {
              return "transform" === e4 && (t5.style[`${this.prefix.css}${e4}`] = s3), t5.style[e4] = s3;
            }
            style(t5, e4, s3) {
              var r2, i, n, a;
              if ("object" == typeof e4) {
                for (n = (i = Object.keys(e4)).length, a = []; n--; )
                  s3 = e4[r2 = i[n]], a.push(this.setPrefixedStyle(t5, r2, s3));
                return a;
              }
              return this.setPrefixedStyle(t5, e4, s3);
            }
            prepareForLog(t5) {
              return (t5 = Array.prototype.slice.apply(t5)).unshift("::"), t5.unshift(this.logBadgeCss), t5.unshift("%cmo·js%c"), t5;
            }
            log() {
              if (false !== mojs.isDebug)
                return console.log.apply(console, this.prepareForLog(arguments));
            }
            warn() {
              if (false !== mojs.isDebug)
                return console.warn.apply(console, this.prepareForLog(arguments));
            }
            error() {
              if (false !== mojs.isDebug)
                return console.error.apply(console, this.prepareForLog(arguments));
            }
            parseUnit(t5) {
              var e4, s3, r2, i, n;
              return "number" == typeof t5 ? { unit: "px", isStrict: false, value: t5, string: 0 === t5 ? `${t5}` : `${t5}px` } : "string" == typeof t5 ? (i = /px|%|rem|em|ex|cm|ch|mm|in|pt|pc|vh|vw|vmin|deg/gim, s3 = true, (n = null != (r2 = t5.match(i)) ? r2[0] : void 0) || (n = "px", s3 = false), { unit: n, isStrict: s3, value: e4 = parseFloat(t5), string: 0 === e4 ? `${e4}` : `${e4}${n}` }) : t5;
            }
            bind(t5, e4) {
              var s3, r2;
              return r2 = function() {
                var r3, i;
                return r3 = Array.prototype.slice.call(arguments), i = s3.concat(r3), t5.apply(e4, i);
              }, s3 = Array.prototype.slice.call(arguments, 2), r2;
            }
            getRadialPoint(t5 = {}) {
              var e4, s3, r2;
              return e4 = 0.017453292519943295 * (t5.rotate - 90), s3 = null != t5.radiusX ? t5.radiusX : t5.radius, r2 = null != t5.radiusY ? t5.radiusY : t5.radius, { x: t5.center.x + Math.cos(e4) * s3, y: t5.center.y + Math.sin(e4) * r2 };
            }
            getPrefix() {
              var t5, e4, s3;
              return s3 = window.getComputedStyle(document.documentElement, ""), t5 = (Array.prototype.slice.call(s3).join("").match(/-(moz|webkit|ms)-/) || "" === s3.OLink && ["", "o"])[1], { dom: null != (e4 = "WebKit|Moz|MS|O".match(new RegExp("(" + t5 + ")", "i"))) ? e4[1] : void 0, lowercase: t5, css: "-" + t5 + "-", js: (null != t5 ? t5[0].toUpperCase() : void 0) + (null != t5 ? t5.substr(1) : void 0) };
            }
            strToArr(t5) {
              var e4;
              return e4 = [], "number" != typeof t5 || isNaN(t5) ? (t5.trim().split(/\s+/gim).forEach((t6) => e4.push(this.parseUnit(this.parseIfRand(t6)))), e4) : (e4.push(this.parseUnit(t5)), e4);
            }
            calcArrDelta(t5, e4) {
              var s3, r2, i, n;
              for (s3 = [], r2 = i = 0, n = t5.length; i < n; r2 = ++i)
                t5[r2], s3[r2] = this.parseUnit(`${e4[r2].value - t5[r2].value}${e4[r2].unit}`);
              return s3;
            }
            isArray(t5) {
              return t5 instanceof Array;
            }
            normDashArrays(t5, e4) {
              var s3, r2, i, n, a, o, l, h, u, p;
              if ((s3 = t5.length) > (r2 = e4.length))
                for (l = s3 - r2, p = e4.length, n = a = 0, h = l; 0 <= h ? a < h : a > h; n = 0 <= h ? ++a : --a)
                  i = n + p, e4.push(this.parseUnit(`0${t5[i].unit}`));
              else if (r2 > s3)
                for (l = r2 - s3, p = t5.length, n = o = 0, u = l; 0 <= u ? o < u : o > u; n = 0 <= u ? ++o : --o)
                  i = n + p, t5.push(this.parseUnit(`0${e4[i].unit}`));
              return [t5, e4];
            }
            makeColorObj(t5) {
              var e4, s3, r2, i, n, a, o, l;
              return "#" === t5[0] && (r2 = {}, (o = /^#?([a-f\d]{1,2})([a-f\d]{1,2})([a-f\d]{1,2})$/i.exec(t5)) && (a = 2 === o[1].length ? o[1] : o[1] + o[1], i = 2 === o[2].length ? o[2] : o[2] + o[2], s3 = 2 === o[3].length ? o[3] : o[3] + o[3], r2 = { r: parseInt(a, 16), g: parseInt(i, 16), b: parseInt(s3, 16), a: 1 })), "#" !== t5[0] && ((n = "r" === t5[0] && "g" === t5[1] && "b" === t5[2]) && (l = t5), n || (l = this.shortColors[t5] ? this.shortColors[t5] : (this.div.style.color = t5, this.computedStyle(this.div).color)), o = new RegExp("^rgba?\\((\\d{1,3}),\\s?(\\d{1,3}),\\s?(\\d{1,3}),?\\s?(\\d{1}|0?\\.\\d{1,})?\\)$", "gi").exec(l), r2 = {}, e4 = parseFloat(o[4] || 1), o && (r2 = { r: parseInt(o[1], 10), g: parseInt(o[2], 10), b: parseInt(o[3], 10), a: null == e4 || isNaN(e4) ? 1 : e4 })), r2;
            }
            computedStyle(t5) {
              return getComputedStyle(t5);
            }
            capitalize(t5) {
              if ("string" != typeof t5)
                throw Error("String expected - nothing to capitalize");
              return t5.charAt(0).toUpperCase() + t5.substring(1);
            }
            parseRand(t5) {
              var e4, s3, r2;
              return s3 = t5.split(/rand\(|\,|\)/), r2 = this.parseUnit(s3[2]), e4 = this.rand(parseFloat(s3[1]), parseFloat(s3[2])), r2.unit && s3[2].match(r2.unit) ? e4 + r2.unit : e4;
            }
            parseStagger(t5, e4) {
              var s3, r2, i, n, a, o;
              return i = (o = t5.split(/stagger\(|\)$/)[1].toLowerCase()).split(/(rand\(.*?\)|[^\(,\s]+)(?=\s*,|\s*$)/gim), o = i.length > 3 ? (s3 = this.parseUnit(this.parseIfRand(i[1])), i[3]) : (s3 = this.parseUnit(0), i[1]), o = this.parseIfRand(o), r2 = e4 * (a = this.parseUnit(o)).value + s3.value, (n = s3.isStrict ? s3.unit : a.isStrict ? a.unit : "") ? `${r2}${n}` : r2;
            }
            parseIfStagger(t5, e4) {
              return "string" == typeof t5 && t5.match(/stagger/g) ? this.parseStagger(t5, e4) : t5;
            }
            parseIfRand(t5) {
              return "string" == typeof t5 && t5.match(/rand\(/) ? this.parseRand(t5) : t5;
            }
            parseDelta(t5, e4, s3) {
              var r2, i, n, a, o, l, h, u, p, c, d, _;
              if (null != (n = (e4 = this.cloneObj(e4)).easing) && (n = mojs.easing.parseEasing(n)), delete e4.easing, null != (r2 = e4.curve) && (r2 = mojs.easing.parseEasing(r2)), delete e4.curve, a = e4[c = Object.keys(e4)[0]], i = { start: c }, !isNaN(parseFloat(c)) || c.match(/rand\(/) || c.match(/stagger\(/))
                if ("strokeDasharray" === t5 || "strokeDashoffset" === t5 || "origin" === t5) {
                  for (d = this.strToArr(c), o = this.strToArr(a), this.normDashArrays(d, o), h = u = 0, p = d.length; u < p; h = ++u)
                    c = d[h], a = o[h], this.mergeUnits(c, a, t5);
                  i = { type: "array", name: t5, start: d, end: o, delta: this.calcArrDelta(d, o), easing: n, curve: r2 };
                } else
                  this.callbacksMap[t5] || this.tweenOptionMap[t5] || (this.unitOptionMap[t5] ? (a = this.parseUnit(this.parseStringOption(a, s3)), c = this.parseUnit(this.parseStringOption(c, s3)), this.mergeUnits(c, a, t5), i = { type: "unit", name: t5, start: c, end: a, delta: a.value - c.value, easing: n, curve: r2 }) : (a = parseFloat(this.parseStringOption(a, s3)), i = { type: "number", name: t5, start: c = parseFloat(this.parseStringOption(c, s3)), end: a, delta: a - c, easing: n, curve: r2 }));
              else {
                if ("strokeLinecap" === t5)
                  return this.warn(`Sorry, stroke-linecap property is not animatable yet, using the start(${c}) value instead`, e4), i;
                i = { type: "color", name: t5, start: _ = this.makeColorObj(c), end: l = this.makeColorObj(a), easing: n, curve: r2, delta: { r: l.r - _.r, g: l.g - _.g, b: l.b - _.b, a: l.a - _.a } };
              }
              return i;
            }
            mergeUnits(t5, e4, s3) {
              return !e4.isStrict && t5.isStrict ? (e4.unit = t5.unit, e4.string = `${e4.value}${e4.unit}`) : e4.isStrict && !t5.isStrict ? (t5.unit = e4.unit, t5.string = `${t5.value}${t5.unit}`) : e4.isStrict && t5.isStrict && e4.unit !== t5.unit ? (t5.unit = e4.unit, t5.string = `${t5.value}${t5.unit}`, this.warn(`Two different units were specified on "${s3}" delta property, mo · js will fallback to end "${e4.unit}" unit `)) : void 0;
            }
            rand(t5, e4) {
              return Math.random() * (e4 - t5) + t5;
            }
            isDOM(t5) {
              var e4;
              return null != t5 && (e4 = "number" == typeof t5.nodeType && "string" == typeof t5.nodeName, "object" == typeof t5 && e4);
            }
            getChildElements(t5) {
              var e4, s3, r2;
              for (s3 = [], r2 = (e4 = t5.childNodes).length; r2--; )
                1 === e4[r2].nodeType && s3.unshift(e4[r2]);
              return s3;
            }
            delta(t5, e4) {
              var s3, r2, i, n, a;
              if (a = typeof e4, s3 = "string" == (n = typeof t5) || "number" === n && !isNaN(t5), r2 = "string" === a || "number" === a && !isNaN(e4), s3 && r2)
                return (i = {})[t5] = e4, i;
              this.error(`delta method expects Strings or Numbers at input but got - ${t5}, ${e4}`);
            }
            getUniqID() {
              return ++this.uniqIDs;
            }
            parsePath(t5) {
              var e4;
              return "string" == typeof t5 ? "m" === t5.charAt(0).toLowerCase() ? ((e4 = document.createElementNS(this.NS, "path")).setAttributeNS(null, "d", t5), e4) : document.querySelector(t5) : t5.style ? t5 : void 0;
            }
            closeEnough(t5, e4, s3) {
              return Math.abs(t5 - e4) < s3;
            }
            checkIf3d() {
              var t5, e4, s3;
              return t5 = document.createElement("div"), this.style(t5, "transform", "translateZ(0)"), "" !== (null != (s3 = t5.style)[e4 = `${this.prefix.css}transform`] ? s3[e4] : s3.transform);
            }
            isObject(t5) {
              return null !== t5 && "object" == typeof t5;
            }
            getDeltaEnd(t5) {
              return t5[Object.keys(t5)[0]];
            }
            getDeltaStart(t5) {
              return Object.keys(t5)[0];
            }
            isTweenProp(t5) {
              return this.tweenOptionMap[t5] || this.callbacksMap[t5];
            }
            parseStringOption(t5, e4 = 0) {
              return "string" == typeof t5 && (t5 = this.parseIfStagger(t5, e4), t5 = this.parseIfRand(t5)), t5;
            }
            getLastItem(t5) {
              return t5[t5.length - 1];
            }
            parseEl(t5) {
              return s2.isDOM(t5) || ("string" == typeof t5 && (t5 = document.querySelector(t5)), null === t5 && s2.error("Can't parse HTML element: ", t5)), t5;
            }
            force3d(t5) {
              return this.setPrefixedStyle(t5, "backface-visibility", "hidden"), t5;
            }
            isDelta(t5) {
              return !(!this.isObject(t5) || t5.unit || this.isArray(t5) || this.isDOM(t5));
            }
          }
          return t4.prototype.NS = "http://www.w3.org/2000/svg", t4.prototype.logBadgeCss = "background:#3A0839;color:#FF512F;border-radius:5px; padding: 1px 5px 2px; border: 1px solid #FF512F;", t4.prototype.shortColors = { transparent: "rgba(0,0,0,0)", none: "rgba(0,0,0,0)", aqua: "rgb(0,255,255)", black: "rgb(0,0,0)", blue: "rgb(0,0,255)", fuchsia: "rgb(255,0,255)", gray: "rgb(128,128,128)", green: "rgb(0,128,0)", lime: "rgb(0,255,0)", maroon: "rgb(128,0,0)", navy: "rgb(0,0,128)", olive: "rgb(128,128,0)", purple: "rgb(128,0,128)", red: "rgb(255,0,0)", silver: "rgb(192,192,192)", teal: "rgb(0,128,128)", white: "rgb(255,255,255)", yellow: "rgb(255,255,0)", orange: "rgb(255,128,0)" }, t4.prototype.chainOptionMap = {}, t4.prototype.callbacksMap = { onRefresh: 1, onStart: 1, onComplete: 1, onFirstUpdate: 1, onUpdate: 1, onProgress: 1, onRepeatStart: 1, onRepeatComplete: 1, onPlaybackStart: 1, onPlaybackPause: 1, onPlaybackStop: 1, onPlaybackComplete: 1 }, t4.prototype.tweenOptionMap = { duration: 1, delay: 1, speed: 1, repeat: 1, easing: 1, backwardEasing: 1, isYoyo: 1, shiftTime: 1, isReversed: 1, callbacksContext: 1 }, t4.prototype.unitOptionMap = { left: 1, top: 1, x: 1, y: 1, rx: 1, ry: 1 }, t4.prototype.RAD_TO_DEG = 180 / Math.PI, t4;
        }).call(this), s2 = new e3(), t3.exports = s2;
      }, 291: function(t3, e3, s2) {
        var r2, i, n, a, o;
        a = s2(52), o = s2(247), n = s2(755).Z, i = s2(342).Z, r2 = (function() {
          class t4 {
            constructor(t5 = {}) {
              this.calcHeight = this.calcHeight.bind(this), this.o = t5, this.vars() || this.createTween();
            }
            vars() {
              return this.getScaler = a.bind(this.getScaler, this), this.resize = o, this.props = a.cloneObj(this.defaults), this.extendOptions(this.o), this.isMotionBlurReset = a.isSafari || a.isIE, this.isMotionBlurReset && (this.props.motionBlur = 0), this.history = [a.cloneObj(this.props)], this.postVars();
            }
            curveToPath(t5) {
              var e4, s3, r3, i2, n2, o2, l, h, u, p, c, d;
              return u = document.createElementNS(a.NS, "path"), h = { x: (d = t5.start).x + t5.shift.x, y: d.x + t5.shift.y }, e4 = t5.curvature, o2 = t5.shift.x, l = t5.shift.y, p = Math.sqrt(o2 * o2 + l * l) / 100, c = Math.atan(l / o2) * (180 / Math.PI) + 90, t5.shift.x < 0 && (c += 180), s3 = "%" === (s3 = a.parseUnit(e4.x)).unit ? s3.value * p : s3.value, n2 = a.getRadialPoint({ center: { x: d.x, y: d.y }, radius: s3, rotate }), r3 = "%" === (r3 = a.parseUnit(e4.y)).unit ? r3.value * p : r3.value, i2 = a.getRadialPoint({ center: { x: n2.x, y: n2.y }, radius: r3, rotate: c + 90 }), u.setAttribute("d", `M${d.x},${d.y} Q${i2.x},${i2.y} ${h.x},${h.y}`), u;
            }
            postVars() {
              return this.props.pathStart = a.clamp(this.props.pathStart, 0, 1), this.props.pathEnd = a.clamp(this.props.pathEnd, this.props.pathStart, 1), this.rotate = 0, this.speedX = 0, this.speedY = 0, this.blurX = 0, this.blurY = 0, this.prevCoords = {}, this.blurAmount = 20, this.props.motionBlur = a.clamp(this.props.motionBlur, 0, 1), this.onUpdate = this.props.onUpdate, this.o.el ? (this.el = this.parseEl(this.props.el), this.props.motionBlur > 0 && this.createFilter(), this.path = this.getPath(), this.path.getAttribute("d") ? (this.len = this.path.getTotalLength(), this.slicedLen = this.len * (this.props.pathEnd - this.props.pathStart), this.startLen = this.props.pathStart * this.len, this.fill = this.props.fill, null != this.fill && (this.container = this.parseEl(this.props.fill.container), this.fillRule = this.props.fill.fillRule || "all", this.getScaler(), null != this.container) ? (this.removeEvent(this.container, "onresize", this.getScaler), this.addEvent(this.container, "onresize", this.getScaler)) : void 0) : (a.error("Path has no coordinates to work with, aborting"), true)) : (a.error('Missed "el" option. It could be a selector, DOMNode or another module.'), true);
            }
            addEvent(t5, e4, s3) {
              return t5.addEventListener(e4, s3, false);
            }
            removeEvent(t5, e4, s3) {
              return t5.removeEventListener(e4, s3, false);
            }
            createFilter() {
              var t5, e4;
              return t5 = document.createElement("div"), this.filterID = `filter-${a.getUniqID()}`, t5.innerHTML = `<svg id="svg-${this.filterID}"
    style="visibility:hidden; width:0px; height:0px">
  <filter id="${this.filterID}" y="-20" x="-20" width="40" height="40">
    <feOffset
      id="blur-offset" in="SourceGraphic"
      dx="0" dy="0" result="offset2"></feOffset>
    <feGaussianblur
      id="blur" in="offset2"
      stdDeviation="0,0" result="blur2"></feGaussianblur>
    <feMerge>
      <feMergeNode in="SourceGraphic"></feMergeNode>
      <feMergeNode in="blur2"></feMergeNode>
    </feMerge>
  </filter>
</svg>`, e4 = t5.querySelector(`#svg-${this.filterID}`), this.filter = e4.querySelector("#blur"), this.filterOffset = e4.querySelector("#blur-offset"), document.body.insertBefore(e4, document.body.firstChild), this.el.style.filter = `url(#${this.filterID})`, this.el.style[`${a.prefix.css}filter`] = `url(#${this.filterID})`;
            }
            parseEl(t5) {
              return "string" == typeof t5 ? document.querySelector(t5) : t5 instanceof HTMLElement ? t5 : null != t5._setProp ? (this.isModule = true, t5) : void 0;
            }
            getPath() {
              return a.parsePath(this.props.path) || (this.props.path.x || this.props.path.y ? this.curveToPath({ start: { x: 0, y: 0 }, shift: { x: this.props.path.x || 0, y: this.props.path.y || 0 }, curvature: { x: this.props.curvature.x || this.defaults.curvature.x, y: this.props.curvature.y || this.defaults.curvature.y } }) : void 0);
            }
            getScaler() {
              var t5, e4, s3;
              switch (this.cSize = { width: this.container.offsetWidth || 0, height: this.container.offsetHeight || 0 }, s3 = this.path.getPointAtLength(0), t5 = this.path.getPointAtLength(this.len), e4 = {}, this.scaler = {}, e4.width = t5.x >= s3.x ? t5.x - s3.x : s3.x - t5.x, e4.height = t5.y >= s3.y ? t5.y - s3.y : s3.y - t5.y, this.fillRule) {
                case "all":
                  return this.calcWidth(e4), this.calcHeight(e4);
                case "width":
                  return this.calcWidth(e4), this.scaler.y = this.scaler.x;
                case "height":
                  return this.calcHeight(e4), this.scaler.x = this.scaler.y;
              }
            }
            calcWidth(t5) {
              return this.scaler.x = this.cSize.width / t5.width, !isFinite(this.scaler.x) && (this.scaler.x = 1);
            }
            calcHeight(t5) {
              return this.scaler.y = this.cSize.height / t5.height, !isFinite(this.scaler.y) && (this.scaler.y = 1);
            }
            run(t5) {
              var e4, s3;
              if (t5) {
                for (e4 in this.history[0], t5)
                  s3 = t5[e4], a.callbacksMap[e4] || a.tweenOptionMap[e4] ? (a.warn(`the property "${e4}" property can not be overridden on run yet`), delete t5[e4]) : this.history[0][e4] = s3;
                this.tuneOptions(t5);
              }
              return this.startTween();
            }
            createTween() {
              return this.tween = new n({ duration: this.props.duration, delay: this.props.delay, yoyo: this.props.yoyo, repeat: this.props.repeat, easing: this.props.easing, onStart: () => {
                var t5;
                return null != (t5 = this.props.onStart) ? t5.apply(this) : void 0;
              }, onComplete: () => {
                var t5;
                return this.props.motionBlur && this.setBlur({ blur: { x: 0, y: 0 }, offset: { x: 0, y: 0 } }), null != (t5 = this.props.onComplete) ? t5.apply(this) : void 0;
              }, onUpdate: (t5) => this.setProgress(t5), onFirstUpdate: (t5, e4) => {
                if (!t5)
                  return this.history.length > 1 && this.tuneOptions(this.history[0]);
              } }), this.timeline = new i(), this.timeline.add(this.tween), !this.props.isRunLess && this.startTween(), this.props.isPresetPosition && this.setProgress(0, true);
            }
            startTween() {
              return setTimeout(() => {
                var t5;
                return null != (t5 = this.timeline) ? t5.play() : void 0;
              }, 1);
            }
            setProgress(t5, e4) {
              var s3, r3, i2, n2;
              return s3 = this.startLen + (this.props.isReverse ? (1 - t5) * this.slicedLen : t5 * this.slicedLen), i2 = (r3 = this.path.getPointAtLength(s3)).x + this.props.offsetX, n2 = r3.y + this.props.offsetY, this._getCurrentRotation(r3, s3, t5), this._setTransformOrigin(t5), this._setTransform(i2, n2, t5, e4), this.props.motionBlur && this.makeMotionBlur(i2, n2);
            }
            setElPosition(t5, e4, s3) {
              var r3;
              return r3 = `translate(${t5}px,${e4}px) ${0 !== this.rotate ? `rotate(${this.rotate}deg)` : ""} ${this.props.isCompositeLayer && a.is3d ? "translateZ(0)" : ""}`, a.setPrefixedStyle(this.el, "transform", r3);
            }
            setModulePosition(t5, e4) {
              return this.el._setProp({ shiftX: `${t5}px`, shiftY: `${e4}px`, rotate: this.rotate }), this.el._draw();
            }
            _getCurrentRotation(t5, e4, s3) {
              var r3, i2, n2, o2, l;
              return i2 = "function" == typeof this.props.transformOrigin, this.props.isRotation || null != this.props.rotationOffset || i2 ? (n2 = this.path.getPointAtLength(e4 - 1), o2 = t5.y - n2.y, l = t5.x - n2.x, r3 = Math.atan(o2 / l), !isFinite(r3) && (r3 = 0), this.rotate = r3 * a.RAD_TO_DEG, "function" != typeof this.props.rotationOffset ? this.rotate += this.props.rotationOffset || 0 : this.rotate = this.props.rotationOffset.call(this, this.rotate, s3)) : this.rotate = 0;
            }
            _setTransform(t5, e4, s3, r3) {
              var i2;
              return this.scaler && (t5 *= this.scaler.x, e4 *= this.scaler.y), i2 = null, r3 || (i2 = "function" == typeof this.onUpdate ? this.onUpdate(s3, { x: t5, y: e4, rotate: this.rotate }) : void 0), this.isModule ? this.setModulePosition(t5, e4) : "string" != typeof i2 ? this.setElPosition(t5, e4, s3) : a.setPrefixedStyle(this.el, "transform", i2);
            }
            _setTransformOrigin(t5) {
              var e4;
              if (this.props.transformOrigin)
                return e4 = "function" == typeof this.props.transformOrigin ? this.props.transformOrigin(this.rotate, t5) : this.props.transformOrigin, a.setPrefixedStyle(this.el, "transform-origin", e4);
            }
            makeMotionBlur(t5, e4) {
              var s3, r3, i2, n2, o2, l, h;
              return h = 0, o2 = 1, l = 1, null == this.prevCoords.x || null == this.prevCoords.y ? (this.speedX = 0, this.speedY = 0) : (i2 = t5 - this.prevCoords.x, n2 = e4 - this.prevCoords.y, i2 > 0 && (o2 = -1), o2 < 0 && (l = -1), this.speedX = Math.abs(i2), this.speedY = Math.abs(n2), h = Math.atan(n2 / i2) * (180 / Math.PI) + 90), s3 = h - this.rotate, r3 = this.rotToCoords(s3), this.blurX = a.clamp(this.speedX / 16 * this.props.motionBlur, 0, 1), this.blurY = a.clamp(this.speedY / 16 * this.props.motionBlur, 0, 1), this.setBlur({ blur: { x: 3 * this.blurX * this.blurAmount * Math.abs(r3.x), y: 3 * this.blurY * this.blurAmount * Math.abs(r3.y) }, offset: { x: 3 * o2 * this.blurX * r3.x * this.blurAmount, y: 3 * l * this.blurY * r3.y * this.blurAmount } }), this.prevCoords.x = t5, this.prevCoords.y = e4;
            }
            setBlur(t5) {
              if (!this.isMotionBlurReset)
                return this.filter.setAttribute("stdDeviation", `${t5.blur.x},${t5.blur.y}`), this.filterOffset.setAttribute("dx", t5.offset.x), this.filterOffset.setAttribute("dy", t5.offset.y);
            }
            extendDefaults(t5) {
              var e4, s3, r3;
              for (e4 in s3 = [], t5)
                r3 = t5[e4], s3.push(this[e4] = r3);
              return s3;
            }
            extendOptions(t5) {
              var e4, s3, r3;
              for (e4 in s3 = [], t5)
                r3 = t5[e4], s3.push(this.props[e4] = r3);
              return s3;
            }
            then(t5) {
              var e4, s3, r3, i2, o2;
              for (s3 in r3 = {}, i2 = this.history[this.history.length - 1])
                o2 = i2[s3], !a.callbacksMap[s3] && !a.tweenOptionMap[s3] || "duration" === s3 ? null == t5[s3] && (t5[s3] = o2) : null == t5[s3] && (t5[s3] = void 0), a.tweenOptionMap[s3] && (r3[s3] = "duration" !== s3 || null != t5[s3] ? t5[s3] : i2[s3]);
              return this.history.push(t5), e4 = this, r3.onUpdate = (t6) => this.setProgress(t6), r3.onStart = () => {
                var t6;
                return null != (t6 = this.props.onStart) ? t6.apply(this) : void 0;
              }, r3.onComplete = () => {
                var t6;
                return null != (t6 = this.props.onComplete) ? t6.apply(this) : void 0;
              }, r3.onFirstUpdate = function() {
                return e4.tuneOptions(e4.history[this.index]);
              }, r3.isChained = !t5.delay, this.timeline.append(new n(r3)), this;
            }
            tuneOptions(t5) {
              return this.extendOptions(t5), this.postVars();
            }
            rotToCoords(t5) {
              var e4, s3, r3;
              return e4 = ((t5 %= 360) - 90) * Math.PI / 180, s3 = Math.cos(e4), r3 = Math.sin(e4), { x: 1.428571429 * (s3 = s3 < 0 ? Math.max(s3, -0.7) : Math.min(s3, 0.7)), y: 1.428571429 * (r3 = r3 < 0 ? Math.max(r3, -0.7) : Math.min(r3, 0.7)) };
            }
          }
          return t4.prototype.defaults = { path: null, curvature: { x: "75%", y: "50%" }, isCompositeLayer: true, delay: 0, duration: 1e3, easing: null, repeat: 0, yoyo: false, onStart: null, onComplete: null, onUpdate: null, offsetX: 0, offsetY: 0, rotationOffset: null, pathStart: 0, pathEnd: 1, motionBlur: 0, transformOrigin: null, isRotation: false, isReverse: false, isRunLess: false, isPresetPosition: true }, t4;
        }).call(this), t3.exports = r2;
      }, 785: (t3, e3, s2) => {
        var r2, i;
        r2 = s2(623).Z, i = class extends r2 {
          _declareDefaults() {
            return super._declareDefaults(), this._defaults.shape = "ellipse";
          }
          _draw() {
            var t4, e4;
            return t4 = null != this._props.radiusX ? this._props.radiusX : this._props.radius, e4 = null != this._props.radiusY ? this._props.radiusY : this._props.radius, this._setAttrIfChanged("rx", t4), this._setAttrIfChanged("ry", e4), this._setAttrIfChanged("cx", this._props.width / 2), this._setAttrIfChanged("cy", this._props.height / 2), super._draw();
          }
          _getLength() {
            var t4, e4;
            return t4 = null != this._props.radiusX ? this._props.radiusX : this._props.radius, e4 = null != this._props.radiusY ? this._props.radiusY : this._props.radius, 2 * Math.PI * Math.sqrt((t4 * t4 + e4 * e4) / 2);
          }
        }, t3.exports = i;
      }, 158: (t3, e3, s2) => {
        var r2, i;
        r2 = s2(623).Z, i = class extends r2 {
          _declareDefaults() {
            return super._declareDefaults(), this._defaults.tag = "path";
          }
          _draw() {
            var t4, e4, s3, r3, i2, n, a;
            if (super._draw(), this._props, r3 = null != this._props.radiusX ? this._props.radiusX : this._props.radius, i2 = null != this._props.radiusY ? this._props.radiusY : this._props.radius, e4 = r3 === this._prevRadiusX, s3 = i2 === this._prevRadiusY, !e4 || !s3)
              return t4 = `M${(n = this._props.width / 2) - r3},${a = this._props.height / 2} L${n + r3},${a} M${n},${a - i2} L${n},${a + i2}`, this.el.setAttribute("d", t4), this._prevRadiusX = r3, this._prevRadiusY = i2;
          }
          _getLength() {
            return 2 * ((null != this._props.radiusX ? this._props.radiusX : this._props.radius) + (null != this._props.radiusY ? this._props.radiusY : this._props.radius));
          }
        }, t3.exports = i;
      }, 153: (t3, e3, s2) => {
        var r2, i;
        r2 = s2(623).Z, i = class extends r2 {
          _declareDefaults() {
            return super._declareDefaults(), this._defaults.tag = "path", this._defaults.points = 2;
          }
          _draw() {
            var t4, e4, s3, r3, i2, n, a, o, l, h, u, p, c, d, _, f;
            if (super._draw(), a = this._props, this._props.points && (o = null != this._props.radiusX ? this._props.radiusX : this._props.radius, l = null != this._props.radiusY ? this._props.radiusY : this._props.radius, r3 = o === this._prevRadiusX, i2 = l === this._prevRadiusY, s3 = a.points === this._prevPoints, !(r3 && i2 && s3))) {
              for (u = this._props.width / 2, d = this._props.height / 2, p = u - o, c = u + o, t4 = "", f = 2 * l / (this._props.points - 1), _ = d - l, e4 = n = 0, h = this._props.points; 0 <= h ? n < h : n > h; e4 = 0 <= h ? ++n : --n)
                t4 += `M${p}, ${d = `${e4 * f + _}`} L${c}, ${d} `;
              return this.el.setAttribute("d", t4), this._prevPoints = a.points, this._prevRadiusX = o, this._prevRadiusY = l;
            }
          }
          _getLength() {
            return 2 * (null != this._props.radiusX ? this._props.radiusX : this._props.radius);
          }
        }, t3.exports = i;
      }, 786: (t3, e3, s2) => {
        var r2, i;
        r2 = s2(623).Z, i = class extends r2 {
          _declareDefaults() {
            return super._declareDefaults(), this._defaults.tag = "line";
          }
          _draw() {
            var t4, e4, s3;
            return t4 = null != this._props.radiusX ? this._props.radiusX : this._props.radius, e4 = this._props.width / 2, s3 = this._props.height / 2, this._setAttrIfChanged("x1", e4 - t4), this._setAttrIfChanged("x2", e4 + t4), this._setAttrIfChanged("y1", s3), this._setAttrIfChanged("y2", s3), super._draw();
          }
        }, t3.exports = i;
      }, 878: (t3, e3, s2) => {
        var r2, i, n;
        n = s2(52), r2 = s2(623).Z, i = class extends r2 {
          _declareDefaults() {
            return super._declareDefaults(), this._defaults.tag = "path", this._defaults.points = 3;
          }
          _draw() {
            var t4, e4, s3, r3, i2, a, o, l, h, u, p, c, d, _, f;
            if (h = this._props, p = null != this._props.radiusX ? this._props.radiusX : this._props.radius, c = null != this._props.radiusY ? this._props.radiusY : this._props.radius, r3 = p === this._prevRadiusX, i2 = c === this._prevRadiusY, s3 = h.points === this._prevPoints, !(r3 && i2 && s3)) {
              for (f = 360 / this._props.points, null == this._radialPoints ? this._radialPoints = [] : this._radialPoints.length = 0, e4 = a = 0, d = this._props.points; 0 <= d ? a < d : a > d; e4 = 0 <= d ? ++a : --a)
                this._radialPoints.push(n.getRadialPoint({ radius: this._props.radius, radiusX: this._props.radiusX, radiusY: this._props.radiusY, rotate: e4 * f, center: { x: h.width / 2, y: h.height / 2 } }));
              for (t4 = "", e4 = o = 0, l = (_ = this._radialPoints).length; o < l; e4 = ++o)
                t4 += `${0 === e4 ? "M" : "L"}${(u = _[e4]).x.toFixed(4)},${u.y.toFixed(4)} `;
              this._prevPoints = h.points, this._prevRadiusX = p, this._prevRadiusY = c, this.el.setAttribute("d", t4 += "z");
            }
            return super._draw();
          }
          _getLength() {
            return this._getPointsPerimiter(this._radialPoints);
          }
        }, t3.exports = i;
      }, 979: (t3, e3, s2) => {
        var r2, i;
        r2 = s2(623).Z, i = class extends r2 {
          _declareDefaults() {
            return super._declareDefaults(), this._defaults.tag = "rect", this._defaults.rx = 0, this._defaults.ry = 0;
          }
          _draw() {
            var t4, e4, s3;
            return super._draw(), e4 = null != (t4 = this._props).radiusX ? t4.radiusX : t4.radius, s3 = null != t4.radiusY ? t4.radiusY : t4.radius, this._setAttrIfChanged("width", 2 * e4), this._setAttrIfChanged("height", 2 * s3), this._setAttrIfChanged("x", t4.width / 2 - e4), this._setAttrIfChanged("y", t4.height / 2 - s3), this._setAttrIfChanged("rx", t4.rx), this._setAttrIfChanged("ry", t4.ry);
          }
          _getLength() {
            return 2 * (2 * (null != this._props.radiusX ? this._props.radiusX : this._props.radius) + 2 * (null != this._props.radiusY ? this._props.radiusY : this._props.radius));
          }
        }, t3.exports = i;
      }, 806: function(t3, e3, s2) {
        var r2, i, n, a, o, l, h, u, p, c, d, _;
        _ = s2(52), r2 = s2(623).Z, l = s2(854).Z, n = s2(785), u = s2(786), d = s2(322), c = s2(979), p = s2(878), a = s2(158), o = s2(472).Z, h = s2(153), i = (function() {
          class t4 {
            constructor() {
              this.addShape = _.bind(this.addShape, this);
            }
            getShape(t5) {
              return this[t5] || _.error(`no "${t5}" shape available yet, please choose from this list:`, ["circle", "line", "zigzag", "rect", "polygon", "cross", "equal", "curve"]);
            }
            addShape(t5, e4) {
              return this[t5] = e4;
            }
          }
          return t4.prototype.bit = r2, t4.prototype.custom = l, t4.prototype.circle = n, t4.prototype.line = u, t4.prototype.zigzag = d, t4.prototype.rect = c, t4.prototype.polygon = p, t4.prototype.cross = a, t4.prototype.equal = h, t4.prototype.curve = o, t4;
        }).call(this), t3.exports = new i();
      }, 322: (t3, e3, s2) => {
        var r2, i;
        r2 = s2(623).Z, i = class extends r2 {
          _declareDefaults() {
            return super._declareDefaults(), this._defaults.tag = "path", this._defaults.points = 3;
          }
          _draw() {
            var t4, e4, s3, r3, i2, n, a, o, l, h, u, p, c, d, _, f;
            if (super._draw(), l = this._props, this._props.points && (u = null != this._props.radiusX ? this._props.radiusX : this._props.radius, p = null != this._props.radiusY ? this._props.radiusY : this._props.radius, i2 = u === this._prevRadiusX, n = p === this._prevRadiusY, r3 = l.points === this._prevPoints, !(i2 && n && r3))) {
              for (t4 = l.width / 2 - u, e4 = _ = l.height / 2, d = 2 * u / (l.points - 1), f = -1, o = -(s3 = Math.sqrt(d * d + p * p)), h = `M${t4}, ${_} `, a = 0, c = l.points; 0 <= c ? a < c : a > c; 0 <= c ? ++a : --a)
                h += `L${t4}, ${e4} `, t4 += d, o += s3, e4 = -1 === f ? _ - p : _, f = -f;
              return this._length = o, this.el.setAttribute("d", h), this._prevPoints = l.points, this._prevRadiusX = u, this._prevRadiusY = p;
            }
          }
          _getLength() {
            return this._length;
          }
        }, t3.exports = i;
      }, 247: (t3, e3) => {
        var s2, r2;
        r2 = class {
          constructor(t4 = {}) {
            this.o = t4, window.isAnyResizeEventInited || (this.vars(), this.redefineProto());
          }
          vars() {
            return window.isAnyResizeEventInited = true, this.allowedProtos = [HTMLDivElement, HTMLFormElement, HTMLLinkElement, HTMLBodyElement, HTMLParagraphElement, HTMLFieldSetElement, HTMLLegendElement, HTMLLabelElement, HTMLButtonElement, HTMLUListElement, HTMLOListElement, HTMLLIElement, HTMLHeadingElement, HTMLQuoteElement, HTMLPreElement, HTMLBRElement, HTMLFontElement, HTMLHRElement, HTMLModElement, HTMLParamElement, HTMLMapElement, HTMLTableElement, HTMLTableCaptionElement, HTMLImageElement, HTMLTableCellElement, HTMLSelectElement, HTMLInputElement, HTMLTextAreaElement, HTMLAnchorElement, HTMLObjectElement, HTMLTableColElement, HTMLTableSectionElement, HTMLTableRowElement], this.timerElements = { img: 1, textarea: 1, input: 1, embed: 1, object: 1, svg: 1, canvas: 1, tr: 1, tbody: 1, thead: 1, tfoot: 1, a: 1, select: 1, option: 1, optgroup: 1, dl: 1, dt: 1, br: 1, basefont: 1, font: 1, col: 1, iframe: 1 };
          }
          redefineProto() {
            var t4, e4, s3;
            return e4 = this, (function() {
              var r3, i, n, a;
              for (n = this.allowedProtos, a = [], t4 = r3 = 0, i = n.length; r3 < i; t4 = ++r3)
                null != (s3 = n[t4]).prototype && a.push(function(t5) {
                  return function(s4) {
                    var r4;
                    r4 = function() {
                      return this === window && this === document || "onresize" === arguments[0] && !this.isAnyResizeEventInited && e4.handleResize({ args: arguments, that: this }), s4.apply(this, arguments);
                    }, t5.prototype.addEventListener ? t5.prototype.addEventListener = r4 : t5.prototype.attachEvent && (t5.prototype.attachEvent = r4);
                  }(t5.prototype.addEventListener || t5.prototype.attachEvent), function(e5) {
                    var s4;
                    return s4 = function() {
                      return this.isAnyResizeEventInited = false, this.iframe && this.removeChild(this.iframe), e5.apply(this, arguments);
                    }, t5.prototype.removeEventListener ? t5.prototype.removeEventListener = s4 : t5.prototype.detachEvent ? t5.prototype.detachEvent = wrappedListener : void 0;
                  }(t5.prototype.removeEventListener || t5.prototype.detachEvent);
                }(s3));
              return a;
            }).call(this);
          }
          handleResize(t4) {
            var e4, s3, r3, i, n, a, o;
            return s3 = t4.that, this.timerElements[s3.tagName.toLowerCase()] ? this.initTimer(s3) : (r3 = document.createElement("iframe"), s3.appendChild(r3), r3.style.width = "100%", r3.style.height = "100%", r3.style.position = "absolute", r3.style.zIndex = -999, r3.style.opacity = 0, r3.style.top = 0, r3.style.left = 0, e4 = window.getComputedStyle ? getComputedStyle(s3) : s3.currentStyle, n = "" === s3.style.position, a = "static" === e4.position && n, i = "" === e4.position && "" === s3.style.position, (a || i) && (s3.style.position = "relative"), null != (o = r3.contentWindow) && (o.onresize = (t5) => this.dispatchEvent(s3)), s3.iframe = r3), s3.isAnyResizeEventInited = true;
          }
          initTimer(t4) {
            var e4, s3;
            return s3 = 0, e4 = 0, this.interval = setInterval(() => {
              var r3, i;
              if (i = t4.offsetWidth, r3 = t4.offsetHeight, i !== s3 || r3 !== e4)
                return this.dispatchEvent(t4), s3 = i, e4 = r3;
            }, this.o.interval || 62.5);
          }
          dispatchEvent(t4) {
            var e4;
            return document.createEvent ? ((e4 = document.createEvent("HTMLEvents")).initEvent("onresize", false, false), t4.dispatchEvent(e4)) : !!document.createEventObject && (e4 = document.createEventObject(), t4.fireEvent("onresize", e4));
          }
          destroy() {
            var t4, e4, s3, r3, i, n;
            for (clearInterval(this.interval), this.interval = null, window.isAnyResizeEventInited = false, n = [], t4 = e4 = 0, s3 = (i = this.allowedProtos).length; e4 < s3; t4 = ++e4)
              null != (r3 = i[t4]).prototype && n.push(function(t5) {
                return t5.prototype.addEventListener || t5.prototype.attachEvent, t5.prototype.addEventListener ? t5.prototype.addEventListener = Element.prototype.addEventListener : t5.prototype.attachEvent && (t5.prototype.attachEvent = Element.prototype.attachEvent), t5.prototype.removeEventListener ? t5.prototype.removeEventListener = Element.prototype.removeEventListener : t5.prototype.detachEvent ? t5.prototype.detachEvent = Element.prototype.detachEvent : void 0;
              }(r3));
            return n;
          }
        }, void 0 === (s2 = (function() {
          return new r2();
        }).apply(e3, [])) || (t3.exports = s2);
      }, 326: (t3, e3, s2) => {
        "use strict";
        function r2(t4) {
          if (void 0 === t4)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return t4;
        }
        s2.d(e3, { Z: () => r2 });
      }, 671: (t3, e3, s2) => {
        "use strict";
        function r2(t4, e4) {
          if (!(t4 instanceof e4))
            throw new TypeError("Cannot call a class as a function");
        }
        s2.d(e3, { Z: () => r2 });
      }, 144: (t3, e3, s2) => {
        "use strict";
        s2.d(e3, { Z: () => n });
        var r2 = s2(142);
        function i(t4, e4) {
          for (var s3 = 0; s3 < e4.length; s3++) {
            var i2 = e4[s3];
            i2.enumerable = i2.enumerable || false, i2.configurable = true, "value" in i2 && (i2.writable = true), Object.defineProperty(t4, (0, r2.Z)(i2.key), i2);
          }
        }
        function n(t4, e4, s3) {
          return e4 && i(t4.prototype, e4), s3 && i(t4, s3), Object.defineProperty(t4, "prototype", { writable: false }), t4;
        }
      }, 752: (t3, e3, s2) => {
        "use strict";
        s2.d(e3, { Z: () => i });
        var r2 = s2(120);
        function i() {
          return i = "undefined" != typeof Reflect && Reflect.get ? Reflect.get.bind() : function(t4, e4, s3) {
            var i2 = function(t5, e5) {
              for (; !Object.prototype.hasOwnProperty.call(t5, e5) && null !== (t5 = (0, r2.Z)(t5)); )
                ;
              return t5;
            }(t4, e4);
            if (i2) {
              var n = Object.getOwnPropertyDescriptor(i2, e4);
              return n.get ? n.get.call(arguments.length < 3 ? t4 : s3) : n.value;
            }
          }, i.apply(this, arguments);
        }
      }, 120: (t3, e3, s2) => {
        "use strict";
        function r2(t4) {
          return r2 = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t5) {
            return t5.__proto__ || Object.getPrototypeOf(t5);
          }, r2(t4);
        }
        s2.d(e3, { Z: () => r2 });
      }, 340: (t3, e3, s2) => {
        "use strict";
        function r2(t4, e4) {
          return r2 = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t5, e5) {
            return t5.__proto__ = e5, t5;
          }, r2(t4, e4);
        }
        function i(t4, e4) {
          if ("function" != typeof e4 && null !== e4)
            throw new TypeError("Super expression must either be null or a function");
          t4.prototype = Object.create(e4 && e4.prototype, { constructor: { value: t4, writable: true, configurable: true } }), Object.defineProperty(t4, "prototype", { writable: false }), e4 && r2(t4, e4);
        }
        s2.d(e3, { Z: () => i });
      }, 963: (t3, e3, s2) => {
        "use strict";
        s2.d(e3, { Z: () => n });
        var r2 = s2(2), i = s2(326);
        function n(t4, e4) {
          if (e4 && ("object" === (0, r2.Z)(e4) || "function" == typeof e4))
            return e4;
          if (void 0 !== e4)
            throw new TypeError("Derived constructors may only return object or undefined");
          return (0, i.Z)(t4);
        }
      }, 142: (t3, e3, s2) => {
        "use strict";
        s2.d(e3, { Z: () => i });
        var r2 = s2(2);
        function i(t4) {
          var e4 = function(t5, e5) {
            if ("object" !== (0, r2.Z)(t5) || null === t5)
              return t5;
            var s3 = t5[Symbol.toPrimitive];
            if (void 0 !== s3) {
              var i2 = s3.call(t5, e5 || "default");
              if ("object" !== (0, r2.Z)(i2))
                return i2;
              throw new TypeError("@@toPrimitive must return a primitive value.");
            }
            return ("string" === e5 ? String : Number)(t5);
          }(t4, "string");
          return "symbol" === (0, r2.Z)(e4) ? e4 : String(e4);
        }
      }, 2: (t3, e3, s2) => {
        "use strict";
        function r2(t4) {
          return r2 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t5) {
            return typeof t5;
          } : function(t5) {
            return t5 && "function" == typeof Symbol && t5.constructor === Symbol && t5 !== Symbol.prototype ? "symbol" : typeof t5;
          }, r2(t4);
        }
        s2.d(e3, { Z: () => r2 });
      } }, e2 = {};
      function s(r2) {
        var i = e2[r2];
        if (void 0 !== i)
          return i.exports;
        var n = e2[r2] = { exports: {} };
        return t2[r2].call(n.exports, n, n.exports, s), n.exports;
      }
      s.n = (t3) => {
        var e3 = t3 && t3.__esModule ? () => t3.default : () => t3;
        return s.d(e3, { a: e3 }), e3;
      }, s.d = (t3, e3) => {
        for (var r2 in e3)
          s.o(e3, r2) && !s.o(t3, r2) && Object.defineProperty(t3, r2, { enumerable: true, get: e3[r2] });
      }, s.o = (t3, e3) => Object.prototype.hasOwnProperty.call(t3, e3);
      var r = {};
      return (() => {
        "use strict";
        s.d(r, { default: () => ht });
        var t3 = s(52), e3 = s.n(t3), i = s(806), n = s.n(i), a = s(671), o = s(144), l = s(340), h = s(963), u = s(120), p = s(342), c = s(142);
        function d(t4, e4, s2) {
          return (e4 = (0, c.Z)(e4)) in t4 ? Object.defineProperty(t4, e4, { value: s2, enumerable: true, configurable: true, writable: true }) : t4[e4] = s2, t4;
        }
        var _ = s(752), f = s(755), v = s(973);
        function y(t4) {
          var e4 = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct)
              return false;
            if (Reflect.construct.sham)
              return false;
            if ("function" == typeof Proxy)
              return true;
            try {
              return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
              })), true;
            } catch (t5) {
              return false;
            }
          }();
          return function() {
            var s2, r2 = (0, u.Z)(t4);
            if (e4) {
              var i2 = (0, u.Z)(this).constructor;
              s2 = Reflect.construct(r2, arguments, i2);
            } else
              s2 = r2.apply(this, arguments);
            return (0, h.Z)(this, s2);
          };
        }
        const m = function(t4) {
          (0, l.Z)(s2, t4);
          var e4 = y(s2);
          function s2() {
            var t5, r2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return (0, a.Z)(this, s2), (t5 = e4.call(this, r2))._transformTweenOptions(), !t5._o.isTweenLess && t5._makeTween(), !t5._o.isTimelineLess && t5._makeTimeline(), t5;
          }
          return (0, o.Z)(s2, [{ key: "play", value: function() {
            return this.timeline.play.apply(this.timeline, arguments), this;
          } }, { key: "playBackward", value: function() {
            return this.timeline.playBackward.apply(this.timeline, arguments), this;
          } }, { key: "pause", value: function() {
            return this.timeline.pause.apply(this.timeline, arguments), this;
          } }, { key: "stop", value: function() {
            return this.timeline.stop.apply(this.timeline, arguments), this;
          } }, { key: "reset", value: function() {
            return this.timeline.reset.apply(this.timeline, arguments), this;
          } }, { key: "replay", value: function() {
            return this.timeline.replay.apply(this.timeline, arguments), this;
          } }, { key: "replayBackward", value: function() {
            return this.timeline.replayBackward.apply(this.timeline, arguments), this;
          } }, { key: "resume", value: function() {
            return this.timeline.resume.apply(this.timeline, arguments), this;
          } }, { key: "setProgress", value: function() {
            return this.timeline.setProgress.apply(this.timeline, arguments), this;
          } }, { key: "setSpeed", value: function() {
            return this.timeline.setSpeed.apply(this.timeline, arguments), this;
          } }, { key: "_transformTweenOptions", value: function() {
          } }, { key: "_makeTween", value: function() {
            this._o.callbacksContext = this._o.callbacksContext || this, this.tween = new f.Z(this._o), this._o.isTimelineLess && (this.timeline = this.tween);
          } }, { key: "_makeTimeline", value: function() {
            this._o.timeline = this._o.timeline || {}, this._o.timeline.callbacksContext = this._o.callbacksContext || this, this.timeline = new p.Z(this._o.timeline), this._isTimeline = true, this.tween && this.timeline.add(this.tween);
          } }]), s2;
        }(v.Z);
        function g(t4) {
          var e4 = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct)
              return false;
            if (Reflect.construct.sham)
              return false;
            if ("function" == typeof Proxy)
              return true;
            try {
              return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
              })), true;
            } catch (t5) {
              return false;
            }
          }();
          return function() {
            var s2, r2 = (0, u.Z)(t4);
            if (e4) {
              var i2 = (0, u.Z)(this).constructor;
              s2 = Reflect.construct(r2, arguments, i2);
            } else
              s2 = r2.apply(this, arguments);
            return (0, h.Z)(this, s2);
          };
        }
        var k = function(t4) {
          (0, l.Z)(r2, t4);
          var s2 = g(r2);
          function r2() {
            return (0, a.Z)(this, r2), s2.apply(this, arguments);
          }
          return (0, o.Z)(r2, [{ key: "then", value: function(t5) {
            if (null == t5 || !Object.keys(t5).length)
              return 1;
            var e4 = this._history[this._history.length - 1], s3 = this._mergeThenOptions(e4, t5);
            this._resetMergedFlags(s3);
            var r3 = new this.constructor(s3);
            return r3._masterModule = this, this._modules.push(r3), this.timeline.append(r3), this;
          } }, { key: "_resetMergedFlags", value: function(t5) {
            return t5.isTimelineLess = true, t5.isShowStart = false, t5.isRefreshState = false, t5.callbacksContext = this._props.callbacksContext || this, t5.prevChainModule = e3().getLastItem(this._modules), t5.masterModule = this, t5;
          } }, { key: "_vars", value: function() {
            (0, _.Z)((0, u.Z)(r2.prototype), "_vars", this).call(this), this._masterModule = this._o.masterModule, this._isChained = !!this._masterModule;
            var t5 = e3().cloneObj(this._props);
            for (var s3 in this._arrayPropertyMap)
              if (this._o[s3]) {
                var i2 = this._parsePreArrayProperty(s3, this._o[s3]);
                t5[s3] = i2;
              }
            this._history = [t5], this._modules = [this], this._nonMergeProps = { shape: 1 };
          } }, { key: "_mergeThenOptions", value: function(t5, e4) {
            var s3 = {};
            return this._mergeStartLoop(s3, t5), this._mergeEndLoop(s3, t5, e4), this._history.push(s3), s3;
          } }, { key: "_checkStartValue", value: function(t5, e4) {
            return e4;
          } }, { key: "_mergeStartLoop", value: function(t5, s3) {
            for (var r3 in s3) {
              var i2 = s3[r3];
              null != s3[r3] && (e3().isTweenProp(r3) && "duration" !== r3 || (this._isDelta(i2) ? t5[r3] = e3().getDeltaEnd(i2) : t5[r3] = i2));
            }
          } }, { key: "_mergeEndLoop", value: function(t5, e4, s3) {
            for (var r3 in s3)
              if ("parent" != r3) {
                var i2 = s3[r3], n2 = null != e4[r3] ? e4[r3] : this._defaults[r3];
                if (n2 = this._checkStartValue(r3, n2), null != i2) {
                  var a2 = "radiusX" === r3 || "radiusY" === r3;
                  a2 && null == n2 && (n2 = e4.radius), (a2 = "scaleX" === r3 || "scaleY" === r3) && null == n2 && (n2 = e4.scale), t5[r3] = this._mergeThenProperty(r3, n2, i2);
                }
              } else
                t5[r3] = s3[r3];
          } }, { key: "_mergeThenProperty", value: function(t5, s3, r3) {
            var i2, n2, a2 = "boolean" == typeof r3;
            if (e3().isTweenProp(t5) || this._nonMergeProps[t5] || a2)
              return r3;
            if (e3().isObject(r3) && null != r3.to && (i2 = r3.curve, n2 = r3.easing, r3 = r3.to), this._isDelta(r3))
              return this._parseDeltaValues(t5, r3);
            var o2, l2, h2 = this._parsePreArrayProperty(t5, r3);
            return this._isDelta(s3) ? (d(o2 = {}, e3().getDeltaEnd(s3), h2), d(o2, "easing", n2), d(o2, "curve", i2), o2) : (d(l2 = {}, s3, h2), d(l2, "easing", n2), d(l2, "curve", i2), l2);
          } }, { key: "_getArrayLength", value: function(t5) {
            return e3().isArray(t5) ? t5.length : -1;
          } }, { key: "_isDelta", value: function(t5) {
            var s3 = e3().isObject(t5);
            return !(!(s3 = s3 && !t5.unit) || e3().isArray(t5) || e3().isDOM(t5));
          } }, { key: "_isFirstInChain", value: function() {
            return !this._masterModule;
          } }, { key: "_isLastInChain", value: function() {
            var t5 = this._masterModule;
            return t5 ? this === e3().getLastItem(t5._modules) : 1 === this._modules.length;
          } }]), r2;
        }(m);
        const w = k;
        function b(t4) {
          var e4 = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct)
              return false;
            if (Reflect.construct.sham)
              return false;
            if ("function" == typeof Proxy)
              return true;
            try {
              return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
              })), true;
            } catch (t5) {
              return false;
            }
          }();
          return function() {
            var s2, r2 = (0, u.Z)(t4);
            if (e4) {
              var i2 = (0, u.Z)(this).constructor;
              s2 = Reflect.construct(r2, arguments, i2);
            } else
              s2 = r2.apply(this, arguments);
            return (0, h.Z)(this, s2);
          };
        }
        var S = function(t4) {
          (0, l.Z)(r2, t4);
          var s2 = b(r2);
          function r2() {
            return (0, a.Z)(this, r2), s2.apply(this, arguments);
          }
          return (0, o.Z)(r2, [{ key: "tune", value: function(t5) {
            if (t5 && Object.keys(t5).length) {
              for (var s3 in this._transformHistory(t5), this._tuneNewOptions(t5), this._history[0] = e3().cloneObj(this._props), this._arrayPropertyMap)
                null != t5[s3] && (this._history[0][s3] = this._preparsePropValue(s3, t5[s3]));
              this._tuneSubModules(), this._resetTweens();
            }
            return this;
          } }, { key: "generate", value: function() {
            return this.tune(this._o);
          } }, { key: "_transformHistory", value: function(t5) {
            for (var e4 in t5) {
              var s3 = t5[e4];
              this._transformHistoryFor(e4, this._preparsePropValue(e4, s3));
            }
          } }, { key: "_transformHistoryFor", value: function(t5, e4) {
            for (var s3 = 0; s3 < this._history.length && null != (e4 = this._transformHistoryRecord(s3, t5, e4)); s3++)
              ;
          } }, { key: "_transformHistoryRecord", value: function(t5, s3, r3, i2, n2) {
            if (null == r3)
              return null;
            i2 = null == i2 ? this._history[t5] : i2, n2 = null == n2 ? this._history[t5 + 1] : n2;
            var a2 = i2[s3], o2 = null == n2 ? null : n2[s3];
            if (0 === t5) {
              if (i2[s3] = r3, e3().isTweenProp(s3) && "duration" !== s3)
                return null;
              var l2 = this._isRewriteNext(a2, o2), h2 = this._isDelta(r3) ? e3().getDeltaEnd(r3) : r3;
              return l2 ? h2 : null;
            }
            return this._isDelta(a2) ? (i2[s3] = d({}, r3, e3().getDeltaEnd(a2)), null) : (i2[s3] = r3, this._isRewriteNext(a2, o2) ? r3 : null);
          } }, { key: "_isRewriteNext", value: function(t5, s3) {
            if (null == s3 && null != t5)
              return false;
            var r3 = t5 === s3, i2 = this._isDelta(s3), n2 = false, a2 = false;
            return this._isDelta(t5) && i2 ? e3().getDeltaEnd(t5) == e3().getDeltaStart(s3) && (a2 = true) : i2 && (n2 = e3().getDeltaStart(s3) === "".concat(t5)), r3 || n2 || a2;
          } }, { key: "_tuneSubModules", value: function() {
            for (var t5 = 1; t5 < this._modules.length; t5++)
              this._modules[t5]._tuneNewOptions(this._history[t5]);
          } }, { key: "_resetTweens", value: function() {
            var t5 = 0, e4 = this.timeline._timelines;
            if (null != e4) {
              for (var s3 = 0; s3 < e4.length; s3++) {
                var r3 = e4[s3], i2 = e4[s3 - 1];
                t5 += i2 ? i2._props.repeatTime : 0, this._resetTween(r3, this._history[s3], t5);
              }
              this.timeline._setProp(this._props.timeline), this.timeline._recalcTotalDuration();
            }
          } }, { key: "_resetTween", value: function(t5, e4) {
            var s3 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
            e4.shiftTime = s3, t5._setProp(e4);
          } }]), r2;
        }(w);
        const P = S;
        function T(t4) {
          var e4 = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct)
              return false;
            if (Reflect.construct.sham)
              return false;
            if ("function" == typeof Proxy)
              return true;
            try {
              return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
              })), true;
            } catch (t5) {
              return false;
            }
          }();
          return function() {
            var s2, r2 = (0, u.Z)(t4);
            if (e4) {
              var i2 = (0, u.Z)(this).constructor;
              s2 = Reflect.construct(r2, arguments, i2);
            } else
              s2 = r2.apply(this, arguments);
            return (0, h.Z)(this, s2);
          };
        }
        var x = function(t4) {
          (0, l.Z)(r2, t4);
          var s2 = T(r2);
          function r2(t5, e4) {
            var i2;
            return (0, a.Z)(this, r2), i2 = s2.call(this), (0, h.Z)(i2, i2._init(t5, e4));
          }
          return (0, o.Z)(r2, [{ key: "then", value: function(t5) {
            if (null == t5)
              return this;
            for (var e4 = 0; e4 < this._modules.length; e4++)
              this._modules[e4].then(this._getOptionByIndex(e4, t5));
            return this.timeline._recalcTotalDuration(), this;
          } }, { key: "tune", value: function(t5) {
            if (null == t5)
              return this;
            for (var e4 = 0; e4 < this._modules.length; e4++)
              this._modules[e4].tune(this._getOptionByIndex(e4, t5));
            return this.timeline._recalcTotalDuration(), this;
          } }, { key: "generate", value: function() {
            for (var t5 = 0; t5 < this._modules.length; t5++)
              this._modules[t5].generate();
            return this.timeline._recalcTotalDuration(), this;
          } }, { key: "_getOptionByMod", value: function(t5, s3, r3) {
            var i2 = r3[t5];
            i2 + "" != "[object NodeList]" && i2 + "" != "[object HTMLCollection]" || (i2 = Array.prototype.slice.call(i2, 0));
            var n2 = e3().isArray(i2) ? i2[s3 % i2.length] : i2;
            return e3().parseIfStagger(n2, s3);
          } }, { key: "_getOptionByIndex", value: function(t5, e4) {
            var s3 = this, r3 = {};
            return Object.keys(e4).forEach(function(i2) {
              return r3[i2] = s3._getOptionByMod(i2, t5, e4);
            }), r3;
          } }, { key: "_getChildQuantity", value: function(t5, s3) {
            if ("number" == typeof t5)
              return t5;
            var r3 = s3[t5];
            return e3().isArray(r3) || r3 + "" == "[object NodeList]" ? r3.length : r3 + "" == "[object HTMLCollection]" ? Array.prototype.slice.call(r3, 0).length : r3 instanceof HTMLElement || "string" == typeof r3 ? 1 : void 0;
          } }, { key: "_init", value: function(t5, e4) {
            var s3 = this._getChildQuantity(t5.quantifier || "el", t5);
            this._createTimeline(t5), this._modules = [];
            for (var r3 = 0; r3 < s3; r3++) {
              var i2 = this._getOptionByIndex(r3, t5);
              i2.isRunLess = true, i2.index = r3;
              var n2 = new e4(i2);
              this._modules.push(n2), this.timeline.add(n2);
            }
            return this;
          } }, { key: "_createTimeline", value: function() {
            var t5 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            this.timeline = new p.Z(t5.timeline);
          } }, { key: "_makeTween", value: function() {
          } }, { key: "_makeTimeline", value: function() {
          } }]), r2;
        }(P), C = s(47), O = s(283), M = s.n(O);
        function Z(t4) {
          var e4 = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct)
              return false;
            if (Reflect.construct.sham)
              return false;
            if ("function" == typeof Proxy)
              return true;
            try {
              return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
              })), true;
            } catch (t5) {
              return false;
            }
          }();
          return function() {
            var s2, r2 = (0, u.Z)(t4);
            if (e4) {
              var i2 = (0, u.Z)(this).constructor;
              s2 = Reflect.construct(r2, arguments, i2);
            } else
              s2 = r2.apply(this, arguments);
            return (0, h.Z)(this, s2);
          };
        }
        var D = function(t4) {
          (0, l.Z)(r2, t4);
          var s2 = Z(r2);
          function r2() {
            return (0, a.Z)(this, r2), s2.apply(this, arguments);
          }
          return (0, o.Z)(r2, [{ key: "_declareDefaults", value: function() {
            this._defaults = { parent: document.body, className: "", shape: "circle", stroke: "transparent", strokeOpacity: 1, strokeLinecap: "", strokeWidth: 2, strokeDasharray: 0, strokeDashoffset: 0, fill: "deeppink", fillOpacity: 1, isSoftHide: true, isForce3d: false, left: "50%", top: "50%", x: 0, y: 0, rotate: 0, scale: 1, scaleX: null, scaleY: null, origin: "50% 50%", opacity: 1, rx: 0, ry: 0, points: 3, radius: 50, radiusX: null, radiusY: null, isShowStart: false, isShowEnd: true, isRefreshState: true, duration: 400, width: null, height: null, isWithShape: true, callbacksContext: this };
          } }, { key: "tune", value: function(t5) {
            return (0, _.Z)((0, u.Z)(r2.prototype), "tune", this).call(this, t5), this._getMaxSizeInChain(), this;
          } }, { key: "then", value: function(t5) {
            return (0, _.Z)((0, u.Z)(r2.prototype), "then", this).call(this, t5), this._getMaxSizeInChain(), this;
          } }, { key: "_vars", value: function() {
            return (0, _.Z)((0, u.Z)(r2.prototype), "_vars", this).call(this), this._lastSet = {}, this._prevChainModule = this._o.prevChainModule, this.isForeign = !!this._o.ctx, this.isForeignBit = !!this._o.shape;
          } }, { key: "_render", value: function() {
            return this._isRendered || this._isChained ? this._isChained && (this.el = this._masterModule.el, this.shapeModule = this._masterModule.shapeModule) : (this.el = document.createElement("div"), this.el.setAttribute("data-name", "mojs-shape"), this.el.setAttribute("class", this._props.className), this._createShape(), this._props.parent.appendChild(this.el), this._setElStyles(), this._setProgress(0, 0), this._props.isShowStart ? this._show() : this._hide(), this._isRendered = true), this;
          } }, { key: "_setElStyles", value: function() {
            if (this.el) {
              var t5 = this._props, s3 = this.el.style, r3 = t5.shapeWidth, i2 = t5.shapeHeight;
              if (s3.position = "absolute", this._setElSizeStyles(r3, i2), t5.isForce3d) {
                var n2 = "backface-visibility";
                s3["".concat(n2)] = "hidden", s3["".concat(e3().prefix.css).concat(n2)] = "hidden";
              }
            }
          } }, { key: "_setElSizeStyles", value: function(t5, e4) {
            var s3 = this.el.style;
            s3.width = "".concat(t5, "px"), s3.height = "".concat(e4, "px"), s3["margin-left"] = "".concat(-t5 / 2, "px"), s3["margin-top"] = "".concat(-e4 / 2, "px");
          } }, { key: "_draw", value: function() {
            if (this.shapeModule) {
              var t5 = this._props, e4 = this.shapeModule._props;
              e4.rx = t5.rx, e4.ry = t5.ry, e4.stroke = t5.stroke, e4["stroke-width"] = t5.strokeWidth, e4["stroke-opacity"] = t5.strokeOpacity, e4["stroke-dasharray"] = t5.strokeDasharray, e4["stroke-dashoffset"] = t5.strokeDashoffset, e4["stroke-linecap"] = t5.strokeLinecap, e4.fill = t5.fill, e4["fill-opacity"] = t5.fillOpacity, e4.radius = t5.radius, e4.radiusX = t5.radiusX, e4.radiusY = t5.radiusY, e4.points = t5.points, this.shapeModule._draw(), this._drawEl();
            }
          } }, { key: "_drawEl", value: function() {
            if (null == this.el)
              return true;
            var t5 = this._props, s3 = this.el.style;
            if (this._isPropChanged("opacity") && (s3.opacity = t5.opacity), !this.isForeign) {
              this._isPropChanged("left") && (s3.left = t5.left), this._isPropChanged("top") && (s3.top = t5.top);
              var r3 = this._isPropChanged("x"), i2 = this._isPropChanged("y"), n2 = r3 || i2, a2 = this._isPropChanged("scaleX"), o2 = this._isPropChanged("scaleY"), l2 = this._isPropChanged("scale"), h2 = this._isPropChanged("rotate");
              if (l2 = l2 || a2 || o2, n2 || l2 || h2) {
                var u2 = this._fillTransform();
                s3["".concat(e3().prefix.css, "transform")] = u2, s3.transform = u2;
              }
              if (this._isPropChanged("origin") || this._deltas.origin) {
                var p2 = this._fillOrigin();
                s3["".concat(e3().prefix.css, "transform-origin")] = p2, s3["transform-origin"] = p2;
              }
            }
          } }, { key: "_isPropChanged", value: function(t5) {
            return null == this._lastSet[t5] && (this._lastSet[t5] = {}), this._lastSet[t5].value !== this._props[t5] && (this._lastSet[t5].value = this._props[t5], true);
          } }, { key: "_tuneNewOptions", value: function(t5) {
            if ((0, _.Z)((0, u.Z)(r2.prototype), "_tuneNewOptions", this).call(this, t5), null == t5 || !Object.keys(t5).length)
              return 1;
            this._setElStyles();
          } }, { key: "_getMaxRadius", value: function(t5) {
            var e4;
            return e4 = this._getRadiusSize("radius"), this._getRadiusSize(t5, e4);
          } }, { key: "_increaseSizeWithEasing", value: function() {
            var t5 = this._props, e4 = this._o.easing;
            switch (e4 && "string" == typeof e4 && e4.toLowerCase()) {
              case "elastic.out":
              case "elastic.inout":
                t5.size *= 1.25;
                break;
              case "back.out":
              case "back.inout":
                t5.size *= 1.1;
            }
          } }, { key: "_getRadiusSize", value: function(t5) {
            var e4 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, s3 = this._deltas[t5];
            return null != s3 ? Math.max(Math.abs(s3.end), Math.abs(s3.start)) : null != this._props[t5] ? parseFloat(this._props[t5]) : e4;
          } }, { key: "_getShapeSize", value: function() {
            var t5 = this._props, e4 = this._getMaxStroke();
            t5.shapeWidth = null != t5.width ? t5.width : 2 * this._getMaxRadius("radiusX") + e4, t5.shapeHeight = null != t5.height ? t5.height : 2 * this._getMaxRadius("radiusY") + e4;
          } }, { key: "_createShape", value: function() {
            if (this._getShapeSize(), this._props.isWithShape) {
              var t5 = this._props, e4 = n().getShape(this._props.shape);
              this.shapeModule = new e4({ width: t5.shapeWidth, height: t5.shapeHeight, parent: this.el });
            }
          } }, { key: "_getMaxSizeInChain", value: function() {
            for (var t5 = 0, e4 = 0, s3 = 0; s3 < this._modules.length; s3++)
              this._modules[s3]._getShapeSize(), t5 = Math.max(t5, this._modules[s3]._props.shapeWidth), e4 = Math.max(e4, this._modules[s3]._props.shapeHeight);
            this.shapeModule && this.shapeModule._setSize(t5, e4), this._setElSizeStyles(t5, e4);
          } }, { key: "_getMaxStroke", value: function() {
            var t5 = this._props, e4 = this._deltas.strokeWidth;
            return null != e4 ? Math.max(e4.start, e4.end) : t5.strokeWidth;
          } }, { key: "_setProgress", value: function(t5, e4) {
            v.Z.prototype._setProgress.call(this, t5, e4), this._draw(t5);
          } }, { key: "_applyCallbackOverrides", value: function(t5) {
            var e4 = this, s3 = this._props;
            t5.callbackOverrides = { onUpdate: function(t6, s4) {
              return e4._setProgress(t6, s4);
            }, onStart: function(t6) {
              e4._isChained || (t6 ? e4._show() : s3.isShowStart || e4._hide());
            }, onComplete: function(t6) {
              e4._isLastInChain() && (t6 ? s3.isShowEnd || e4._hide() : e4._show());
            }, onRefresh: function(t6) {
              s3.isRefreshState && t6 && e4._refreshBefore();
            } };
          } }, { key: "_transformTweenOptions", value: function() {
            this._applyCallbackOverrides(this._o);
          } }, { key: "_fillTransform", value: function() {
            var t5 = this._props, e4 = null != t5.scaleX ? t5.scaleX : t5.scale, s3 = null != t5.scaleY ? t5.scaleY : t5.scale, r3 = "".concat(e4, ", ").concat(s3);
            return "translate(".concat(t5.x, ", ").concat(t5.y, ") rotate(").concat(t5.rotate, "deg) scale(").concat(r3, ")");
          } }, { key: "_fillOrigin", value: function() {
            for (var t5 = this._props, e4 = "", s3 = 0; s3 < t5.origin.length; s3++)
              e4 += "".concat(t5.origin[s3].string, " ");
            return e4;
          } }, { key: "_refreshBefore", value: function() {
            this._setProgress(this.tween._props.easing(0), 0), this._props.isShowStart ? this._show() : this._hide();
          } }, { key: "_showByTransform", value: function() {
            this._lastSet.scale = null, this._drawEl();
          } }]), r2;
        }(P);
        const R = D;
        function E(t4) {
          var e4 = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct)
              return false;
            if (Reflect.construct.sham)
              return false;
            if ("function" == typeof Proxy)
              return true;
            try {
              return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
              })), true;
            } catch (t5) {
              return false;
            }
          }();
          return function() {
            var s2, r2 = (0, u.Z)(t4);
            if (e4) {
              var i2 = (0, u.Z)(this).constructor;
              s2 = Reflect.construct(r2, arguments, i2);
            } else
              s2 = r2.apply(this, arguments);
            return (0, h.Z)(this, s2);
          };
        }
        const L = function(t4) {
          (0, l.Z)(r2, t4);
          var s2 = E(r2);
          function r2() {
            return (0, a.Z)(this, r2), s2.apply(this, arguments);
          }
          return (0, o.Z)(r2, [{ key: "_declareDefaults", value: function() {
            (0, _.Z)((0, u.Z)(r2.prototype), "_declareDefaults", this).call(this), this._defaults.isSwirl = true, this._defaults.swirlSize = 10, this._defaults.swirlFrequency = 3, this._defaults.pathScale = 1, this._defaults.degreeShift = 0, this._defaults.radius = 5, this._defaults.x = 0, this._defaults.y = 0, this._defaults.scale = { 1: 0 }, this._defaults.direction = 1;
          } }, { key: "_extendDefaults", value: function() {
            (0, _.Z)((0, u.Z)(r2.prototype), "_extendDefaults", this).call(this), this._calcPosData();
          } }, { key: "_tuneNewOptions", value: function(t5) {
            null != t5 && ((0, _.Z)((0, u.Z)(r2.prototype), "_tuneNewOptions", this).call(this, t5), null == t5.x && null == t5.y || this._calcPosData());
          } }, { key: "_calcPosData", value: function() {
            var t5 = this._getPosValue("x"), s3 = this._getPosValue("y"), r3 = 90 + Math.atan(s3.delta / t5.delta || 0) * e3().RAD_TO_DEG;
            this._posData = { radius: Math.sqrt(t5.delta * t5.delta + s3.delta * s3.delta), rotate: t5.delta < 0 ? r3 + 180 : r3, x: t5, y: s3 };
          } }, { key: "_getPosValue", value: function(t5) {
            var s3 = this._deltas[t5];
            if (s3)
              return delete this._deltas[t5], { start: s3.start.value, end: s3.end.value, delta: s3.delta, units: s3.end.unit };
            var r3 = e3().parseUnit(this._props[t5]);
            return { start: r3.value, end: r3.value, delta: 0, units: r3.unit };
          } }, { key: "_setProgress", value: function(t5, e4) {
            this._progress = t5, this._calcCurrentProps(t5, e4), this._calcSwirlXY(t5), this._draw(t5);
          } }, { key: "_calcSwirlXY", value: function(t5) {
            var s3 = this._props, r3 = this._posData.rotate + s3.degreeShift, i2 = e3().getRadialPoint({ rotate: s3.isSwirl ? r3 + this._getSwirl(t5) : r3, radius: t5 * this._posData.radius * s3.pathScale, center: { x: this._posData.x.start, y: this._posData.y.start } }), n2 = i2.x, a2 = i2.y, o2 = 1e-6;
            n2 > 0 && n2 < o2 && (n2 = o2), a2 > 0 && a2 < o2 && (a2 = o2), n2 < 0 && n2 > -1e-6 && (n2 = -1e-6), a2 < 0 && a2 > -1e-6 && (a2 = -1e-6), s3.x = this._o.ctx ? n2 : "".concat(n2).concat(this._posData.x.units), s3.y = this._o.ctx ? a2 : "".concat(a2).concat(this._posData.y.units);
          } }, { key: "_getSwirl", value: function(t5) {
            var e4 = this._props;
            return e4.direction * e4.swirlSize * Math.sin(e4.swirlFrequency * t5);
          } }, { key: "_draw", value: function() {
            var t5 = this._props.isWithShape ? "_draw" : "_drawEl";
            R.prototype[t5].call(this);
          } }]), r2;
        }(R);
        function A(t4) {
          var e4 = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct)
              return false;
            if (Reflect.construct.sham)
              return false;
            if ("function" == typeof Proxy)
              return true;
            try {
              return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
              })), true;
            } catch (t5) {
              return false;
            }
          }();
          return function() {
            var s2, r2 = (0, u.Z)(t4);
            if (e4) {
              var i2 = (0, u.Z)(this).constructor;
              s2 = Reflect.construct(r2, arguments, i2);
            } else
              s2 = r2.apply(this, arguments);
            return (0, h.Z)(this, s2);
          };
        }
        var I = function(t4) {
          (0, l.Z)(r2, t4);
          var s2 = A(r2);
          function r2() {
            return (0, a.Z)(this, r2), s2.apply(this, arguments);
          }
          return (0, o.Z)(r2, [{ key: "_declareDefaults", value: function() {
            this._defaults = { count: 5, degree: 360, radius: { 0: 50 }, radiusX: null, radiusY: null, width: 0, height: 0 };
          } }, { key: "then", value: function(t5) {
            this._removeTweenProperties(t5);
            var e4 = this._masterThen(t5), s3 = this._childThen(t5);
            return this._setSwirlDuration(e4, this._calcPackTime(s3)), this.timeline._recalcTotalDuration(), this;
          } }, { key: "tune", value: function(t5) {
            return null == t5 || (this._saveTimelineOptions(t5), this.timeline._setProp(this._timelineOptions), this._removeTweenProperties(t5), this._tuneNewOptions(t5), this.masterSwirl.tune(t5), this._tuneSwirls(t5), this._recalcModulesTime()), this;
          } }, { key: "_extendDefaults", value: function() {
            this._removeTweenProperties(this._o), (0, _.Z)((0, u.Z)(r2.prototype), "_extendDefaults", this).call(this);
          } }, { key: "_removeTweenProperties", value: function(t5) {
            for (var s3 in e3().tweenOptionMap)
              null == this._defaults[s3] && delete t5[s3];
          } }, { key: "_recalcModulesTime", value: function() {
            for (var t5 = this.masterSwirl._modules, e4 = this._swirls, s3 = 0, r3 = 0; r3 < t5.length; r3++) {
              var i2 = t5[r3].tween, n2 = this._calcPackTime(e4[r3]);
              i2._setProp({ duration: n2, shiftTime: s3 }), s3 += n2;
            }
            this.timeline._recalcTotalDuration();
          } }, { key: "_tuneSwirls", value: function(t5) {
            for (var e4 = this._swirls[0], s3 = 0; s3 < e4.length; s3++) {
              var r3 = e4[s3], i2 = this._getChildOption(t5 || {}, s3), n2 = null != i2.degreeShift;
              n2 || (i2.degreeShift = this._swirls[0][s3]._props.degreeShift), this._addBurstProperties(i2, s3), n2 || delete i2.degreeShift, r3.tune(i2), this._refreshBurstOptions(r3._modules, s3);
            }
          } }, { key: "_refreshBurstOptions", value: function(t5, e4) {
            for (var s3 = 1; s3 < t5.length; s3++) {
              var r3 = t5[s3], i2 = {};
              this._addBurstProperties(i2, e4, s3), r3._tuneNewOptions(i2);
            }
          } }, { key: "_masterThen", value: function(t5) {
            this.masterSwirl.then(t5);
            var s3 = e3().getLastItem(this.masterSwirl._modules);
            return this._masterSwirls.push(s3), s3;
          } }, { key: "_childThen", value: function(t5) {
            for (var s3 = this._swirls[0], r3 = [], i2 = 0; i2 < s3.length; i2++) {
              var n2 = this._getChildOption(t5, i2), a2 = s3[i2];
              n2.parent = this.el, this._addBurstProperties(n2, i2, this._masterSwirls.length - 1), a2.then(n2), r3.push(e3().getLastItem(a2._modules));
            }
            return this._swirls[this._masterSwirls.length - 1] = r3, r3;
          } }, { key: "_vars", value: function() {
            (0, _.Z)((0, u.Z)(r2.prototype), "_vars", this).call(this), this._bufferTimeline = new p.Z();
          } }, { key: "_render", value: function() {
            this._o.isWithShape = false, this._o.isSwirl = this._props.isSwirl, this._o.callbacksContext = this, this._saveTimelineOptions(this._o), this.masterSwirl = new Y(this._o), this._masterSwirls = [this.masterSwirl], this.el = this.masterSwirl.el, this._renderSwirls();
          } }, { key: "_renderSwirls", value: function() {
            for (var t5 = this._props, e4 = [], s3 = 0; s3 < t5.count; s3++) {
              var r3 = this._getChildOption(this._o, s3);
              e4.push(new j(this._addOptionalProps(r3, s3)));
            }
            this._swirls = { 0: e4 }, this._setSwirlDuration(this.masterSwirl, this._calcPackTime(e4));
          } }, { key: "_saveTimelineOptions", value: function(t5) {
            this._timelineOptions = t5.timeline, delete t5.timeline;
          } }, { key: "_calcPackTime", value: function(t5) {
            for (var e4 = 0, s3 = 0; s3 < t5.length; s3++) {
              var r3 = t5[s3].tween._props;
              e4 = Math.max(r3.repeatTime / r3.speed, e4);
            }
            return e4;
          } }, { key: "_setSwirlDuration", value: function(t5, e4) {
            t5.tween._setProp("duration", e4), t5.timeline && t5.timeline._recalcTotalDuration && t5.timeline._recalcTotalDuration();
          } }, { key: "_getChildOption", value: function(t5, e4) {
            var s3 = {};
            for (var r3 in t5.children)
              s3[r3] = this._getPropByMod(r3, e4, t5.children);
            return s3;
          } }, { key: "_getPropByMod", value: function(t5, s3) {
            var r3 = (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {})[t5];
            return e3().isArray(r3) ? r3[s3 % r3.length] : r3;
          } }, { key: "_addOptionalProps", value: function(t5, e4) {
            return t5.index = e4, t5.parent = this.masterSwirl.el, this._addBurstProperties(t5, e4), t5;
          } }, { key: "_addBurstProperties", value: function(t5, e4, s3) {
            var r3 = this._index;
            this._index = e4;
            var i2 = this._parseProperty("degreeShift", t5.degreeShift || 0);
            this._index = r3;
            var n2 = this._props, a2 = n2.degree % 360 == 0 ? n2.count : n2.count - 1 || 1, o2 = n2.degree / a2, l2 = this._getSidePoint("start", e4 * o2 + i2, s3), h2 = this._getSidePoint("end", e4 * o2 + i2, s3);
            t5.x = this._getDeltaFromPoints("x", l2, h2), t5.y = this._getDeltaFromPoints("y", l2, h2), t5.rotate = this._getBitRotation(t5.rotate || 0, i2, e4);
          } }, { key: "_getBitRotation", value: function() {
            var t5 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0, s3 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, r3 = arguments.length > 2 ? arguments[2] : void 0, i2 = this._props, n2 = i2.degree % 360 == 0 ? i2.count : i2.count - 1 || 1, a2 = r3 * (i2.degree / n2) + 90;
            if (a2 += s3, this._isDelta(t5)) {
              var o2 = {}, l2 = Object.keys(t5)[0], h2 = t5[l2];
              l2 = e3().parseStringOption(l2, r3), h2 = e3().parseStringOption(h2, r3), o2[parseFloat(l2) + a2] = parseFloat(h2) + a2, t5 = o2;
            } else
              t5 += a2;
            return t5;
          } }, { key: "_getSidePoint", value: function(t5, s3, r3) {
            var i2 = this._getSideRadius(t5, r3);
            return e3().getRadialPoint({ radius: i2.radius, radiusX: i2.radiusX, radiusY: i2.radiusY, rotate: s3, center: { x: 0, y: 0 } });
          } }, { key: "_getSideRadius", value: function(t5, e4) {
            return { radius: this._getRadiusByKey("radius", t5, e4), radiusX: this._getRadiusByKey("radiusX", t5, e4), radiusY: this._getRadiusByKey("radiusY", t5, e4) };
          } }, { key: "_getRadiusByKey", value: function(t5, e4) {
            var s3 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0, r3 = this._masterSwirls[s3], i2 = r3._deltas, n2 = r3._props;
            return null != i2[t5] ? i2[t5][e4] : null != n2[t5] ? n2[t5] : void 0;
          } }, { key: "_getDeltaFromPoints", value: function(t5, e4, s3) {
            var r3 = {};
            return e4[t5] === s3[t5] ? r3 = e4[t5] : r3[e4[t5]] = s3[t5], r3;
          } }, { key: "_makeTimeline", value: function() {
            this._o.timeline = this._timelineOptions, (0, _.Z)((0, u.Z)(r2.prototype), "_makeTimeline", this).call(this), this.timeline.add(this.masterSwirl, this._swirls[0]);
          } }, { key: "_makeTween", value: function() {
          } }, { key: "_hide", value: function() {
          } }, { key: "_show", value: function() {
          } }]), r2;
        }(P), j = function(t4) {
          (0, l.Z)(s2, t4);
          var e4 = A(s2);
          function s2() {
            return (0, a.Z)(this, s2), e4.apply(this, arguments);
          }
          return (0, o.Z)(s2, [{ key: "_declareDefaults", value: function() {
            (0, _.Z)((0, u.Z)(s2.prototype), "_declareDefaults", this).call(this), this._defaults.isSwirl = false, this._o.duration = null != this._o.duration ? this._o.duration : 700;
          } }, { key: "_calcSwirlXY", value: function(t5) {
            var e5 = this._props.degreeShift;
            this._props.degreeShift = 0, (0, _.Z)((0, u.Z)(s2.prototype), "_calcSwirlXY", this).call(this, t5), this._props.degreeShift = e5;
          } }]), s2;
        }(L), Y = function(t4) {
          (0, l.Z)(s2, t4);
          var e4 = A(s2);
          function s2() {
            return (0, a.Z)(this, s2), e4.apply(this, arguments);
          }
          return (0, o.Z)(s2, [{ key: "_declareDefaults", value: function() {
            (0, _.Z)((0, u.Z)(s2.prototype), "_declareDefaults", this).call(this), this._defaults.scale = 1, this._defaults.width = 0, this._defaults.height = 0, this._defaults.radius = { 25: 75 };
          } }]), s2;
        }(j);
        I.ChildSwirl = j, I.MainSwirl = Y;
        const B = I;
        var X = function() {
          function t4() {
            var e4 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            (0, a.Z)(this, t4), this._o = e4, this._createTween(e4.tweenOptions), !this._o.isChained && this.refresh(true);
          }
          return (0, o.Z)(t4, [{ key: "refresh", value: function(t5) {
            this._previousValues = [];
            for (var e4 = this._o.deltas, s2 = 0; s2 < e4.length; s2++) {
              var r2 = e4[s2].name;
              this._previousValues.push({ name: r2, value: this._o.props[r2] });
            }
            return this.tween._refresh(t5), this;
          } }, { key: "restore", value: function() {
            for (var t5 = this._previousValues, e4 = 0; e4 < t5.length; e4++) {
              var s2 = t5[e4];
              this._o.props[s2.name] = s2.value;
            }
            return this;
          } }, { key: "_createTween", value: function() {
            var t5 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, e4 = this;
            t5.callbackOverrides = { onUpdate: function(t6, s2) {
              e4._calcCurrentProps(t6, s2);
            } }, this._o.isChained || (t5.callbackOverrides.onRefresh = function(t6, s2, r2) {
              e4._calcCurrentProps(s2, r2);
            }), t5.callbacksContext = this._o.callbacksContext, this.tween = new f.Z(t5);
          } }, { key: "_calcCurrentProps", value: function(t5, e4) {
            for (var s2 = this._o.deltas, r2 = 0; r2 < s2.length; r2++) {
              var i2 = s2[r2].type;
              this["_calcCurrent_".concat(i2)](s2[r2], t5, e4);
            }
          } }, { key: "_calcCurrent_color", value: function(t5, e4, s2) {
            var r2, i2, n2, a2, o2 = t5.start, l2 = t5.delta;
            if (t5.curve) {
              var h2 = t5.curve(s2);
              r2 = parseInt(h2 * (o2.r + s2 * l2.r), 10), i2 = parseInt(h2 * (o2.g + s2 * l2.g), 10), n2 = parseInt(h2 * (o2.b + s2 * l2.b), 10), a2 = parseFloat(h2 * (o2.a + s2 * l2.a));
            } else
              r2 = parseInt(o2.r + e4 * l2.r, 10), i2 = parseInt(o2.g + e4 * l2.g, 10), n2 = parseInt(o2.b + e4 * l2.b, 10), a2 = parseFloat(o2.a + e4 * l2.a);
            this._o.props[t5.name] = "rgba(".concat(r2, ",").concat(i2, ",").concat(n2, ",").concat(a2, ")");
          } }, { key: "_calcCurrent_number", value: function(t5, e4, s2) {
            this._o.props[t5.name] = t5.curve ? t5.curve(s2) * (t5.start + s2 * t5.delta) : t5.start + e4 * t5.delta;
          } }, { key: "_calcCurrent_unit", value: function(t5, e4, s2) {
            var r2 = t5.curve ? t5.curve(s2) * (t5.start.value + s2 * t5.delta) : t5.start.value + e4 * t5.delta;
            this._o.props[t5.name] = "".concat(r2).concat(t5.end.unit);
          } }, { key: "_calcCurrent_array", value: function(t5, e4, s2) {
            for (var r2 = t5.name, i2 = this._o.props, n2 = "", a2 = t5.curve ? t5.curve(s2) : null, o2 = 0; o2 < t5.delta.length; o2++) {
              var l2 = t5.delta[o2], h2 = t5.curve ? a2 * (t5.start[o2].value + s2 * l2.value) : t5.start[o2].value + e4 * l2.value;
              n2 += "".concat(h2).concat(l2.unit, " ");
            }
            i2[r2] = n2;
          } }]), t4;
        }();
        const F = X;
        function U(t4, e4) {
          var s2 = Object.keys(t4);
          if (Object.getOwnPropertySymbols) {
            var r2 = Object.getOwnPropertySymbols(t4);
            e4 && (r2 = r2.filter(function(e5) {
              return Object.getOwnPropertyDescriptor(t4, e5).enumerable;
            })), s2.push.apply(s2, r2);
          }
          return s2;
        }
        function $(t4) {
          for (var e4 = 1; e4 < arguments.length; e4++) {
            var s2 = null != arguments[e4] ? arguments[e4] : {};
            e4 % 2 ? U(Object(s2), true).forEach(function(e5) {
              d(t4, e5, s2[e5]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t4, Object.getOwnPropertyDescriptors(s2)) : U(Object(s2)).forEach(function(e5) {
              Object.defineProperty(t4, e5, Object.getOwnPropertyDescriptor(s2, e5));
            });
          }
          return t4;
        }
        var H = {};
        f.Z.prototype._declareDefaults.call(H);
        for (var z = Object.keys(H._defaults), N = 0; N < z.length; N++)
          H._defaults[z[N]] = 1;
        H._defaults.timeline = 1;
        var q = H._defaults, V = function() {
          function t4() {
            var e4 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            (0, a.Z)(this, t4), this._o = e4, this._shortColors = { transparent: "rgba(0,0,0,0)", none: "rgba(0,0,0,0)", aqua: "rgb(0,255,255)", black: "rgb(0,0,0)", blue: "rgb(0,0,255)", fuchsia: "rgb(255,0,255)", gray: "rgb(128,128,128)", green: "rgb(0,128,0)", lime: "rgb(0,255,0)", maroon: "rgb(128,0,0)", navy: "rgb(0,0,128)", olive: "rgb(128,128,0)", purple: "rgb(128,0,128)", red: "rgb(255,0,0)", silver: "rgb(192,192,192)", teal: "rgb(0,128,128)", white: "rgb(255,255,255)", yellow: "rgb(255,255,0)", orange: "rgb(255,128,0)" }, this._ignoreDeltasMap = { prevChainModule: 1, masterModule: 1 }, this._parseDeltas(e4.options), this._createDeltas(), this._createTimeline(this._mainTweenOptions);
          }
          return (0, o.Z)(t4, [{ key: "refresh", value: function(t5) {
            for (var e4 = 0; e4 < this._deltas.length; e4++)
              this._deltas[e4].refresh(t5);
            return this;
          } }, { key: "restore", value: function() {
            for (var t5 = 0; t5 < this._deltas.length; t5++)
              this._deltas[t5].restore();
            return this;
          } }, { key: "_createTimeline", value: function() {
            this.timeline = new p.Z(), this.timeline.add(this._deltas);
          } }, { key: "_createDeltas", value: function() {
            this._deltas = [], this._deltas.push(this._createDelta(this._mainDeltas, this._mainTweenOptions));
            for (var t5 = 0; t5 < this._childDeltas.length; t5++) {
              var e4 = this._childDeltas[t5];
              this._deltas.push(this._createDelta([e4.delta], e4.tweenOptions));
            }
          } }, { key: "_createDelta", value: function(t5, e4) {
            var s2 = this._o;
            return new F({ deltas: t5, tweenOptions: e4, props: s2.props, isChained: s2.isChained, callbacksContext: s2.callbacksContext });
          } }, { key: "_parseDeltas", value: function(t5) {
            var e4 = this._splitTweenOptions(t5), s2 = e4.delta;
            this._mainTweenOptions = e4.tweenOptions, this._mainDeltas = [], this._childDeltas = [];
            for (var r2 = Object.keys(s2), i2 = 0; i2 < r2.length; i2++) {
              var n2 = r2[i2];
              if (this._isDelta(s2[n2]) && !this._ignoreDeltasMap[n2]) {
                var a2 = this._splitAndParseDelta(n2, s2[n2]);
                a2.tweenOptions ? this._childDeltas.push(a2) : this._mainDeltas.push(a2.delta);
              }
            }
          } }, { key: "_splitAndParseDelta", value: function(t5, e4) {
            var s2 = this._splitTweenOptions(e4);
            return s2.delta = this._parseDelta(t5, s2.delta), s2;
          } }, { key: "_parseDelta", value: function(t5, e4, s2) {
            return this._o.customProps && null != this._o.customProps[t5] ? this._parseDeltaByCustom(t5, e4, s2) : this._parseDeltaByGuess(t5, e4, s2);
          } }, { key: "_parseDeltaByCustom", value: function(t5, e4, s2) {
            return this._parseNumberDelta(t5, e4, s2);
          } }, { key: "_parseDeltaByGuess", value: function(t5, e4, s2) {
            var r2 = this._preparseDelta(e4).start, i2 = this._o;
            return !isNaN(parseFloat(r2)) || r2.match(/rand\(/) || r2.match(/stagger\(/) ? i2.arrayPropertyMap && i2.arrayPropertyMap[t5] ? this._parseArrayDelta(t5, e4) : i2.numberPropertyMap && i2.numberPropertyMap[t5] ? this._parseNumberDelta(t5, e4, s2) : this._parseUnitDelta(t5, e4, s2) : this._parseColorDelta(t5, e4);
          } }, { key: "_splitTweenOptions", value: function(t5) {
            t5 = $({}, t5);
            for (var e4 = Object.keys(t5), s2 = {}, r2 = null, i2 = 0; i2 < e4.length; i2++) {
              var n2 = e4[i2];
              q[n2] && (null != t5[n2] && (s2[n2] = t5[n2], r2 = true), delete t5[n2]);
            }
            return { delta: t5, tweenOptions: r2 ? s2 : void 0 };
          } }, { key: "_isDelta", value: function(t5) {
            var s2 = e3().isObject(t5);
            return !(!(s2 = s2 && !t5.unit) || e3().isArray(t5) || e3().isDOM(t5));
          } }, { key: "_parseColorDelta", value: function(t5, s2) {
            if ("strokeLinecap" === t5)
              return e3().warn("Sorry, stroke-linecap property is not animatable yet, using the start(#{start}) value instead", s2), {};
            var r2 = this._preparseDelta(s2), i2 = this._makeColorObj(r2.start), n2 = this._makeColorObj(r2.end);
            return { type: "color", name: t5, start: i2, end: n2, curve: r2.curve, delta: { r: n2.r - i2.r, g: n2.g - i2.g, b: n2.b - i2.b, a: n2.a - i2.a } };
          } }, { key: "_parseArrayDelta", value: function(t5, s2) {
            var r2 = this._preparseDelta(s2), i2 = this._strToArr(r2.start), n2 = this._strToArr(r2.end);
            e3().normDashArrays(i2, n2);
            for (var a2 = 0; a2 < i2.length; a2++) {
              var o2 = n2[a2];
              e3().mergeUnits(i2[a2], o2, t5);
            }
            return { type: "array", name: t5, start: i2, end: n2, delta: e3().calcArrDelta(i2, n2), curve: r2.curve };
          } }, { key: "_parseUnitDelta", value: function(t5, s2, r2) {
            var i2 = this._preparseDelta(s2), n2 = e3().parseUnit(e3().parseStringOption(i2.end, r2)), a2 = e3().parseUnit(e3().parseStringOption(i2.start, r2));
            return e3().mergeUnits(a2, n2, t5), { type: "unit", name: t5, start: a2, end: n2, delta: n2.value - a2.value, curve: i2.curve };
          } }, { key: "_parseNumberDelta", value: function(t5, s2, r2) {
            var i2 = this._preparseDelta(s2), n2 = parseFloat(e3().parseStringOption(i2.end, r2)), a2 = parseFloat(e3().parseStringOption(i2.start, r2));
            return { type: "number", name: t5, start: a2, end: n2, delta: n2 - a2, curve: i2.curve };
          } }, { key: "_preparseDelta", value: function(t5) {
            var e4 = (t5 = $({}, t5)).curve;
            null != e4 && ((e4 = M().parseEasing(e4))._parent = this), delete t5.curve;
            var s2 = Object.keys(t5)[0];
            return { start: s2, end: t5[s2], curve: e4 };
          } }, { key: "_makeColorObj", value: function(t5) {
            var s2 = {};
            if ("#" === t5[0]) {
              var r2 = /^#?([a-f\d]{1,2})([a-f\d]{1,2})([a-f\d]{1,2})$/i.exec(t5);
              if (r2) {
                var i2 = 2 === r2[1].length ? r2[1] : r2[1] + r2[1], n2 = 2 === r2[2].length ? r2[2] : r2[2] + r2[2], a2 = 2 === r2[3].length ? r2[3] : r2[3] + r2[3];
                s2 = { r: parseInt(i2, 16), g: parseInt(n2, 16), b: parseInt(a2, 16), a: 1 };
              }
            }
            if ("#" !== t5[0]) {
              var o2, l2 = "r" === t5[0] && "g" === t5[1] && "b" === t5[2];
              l2 && (o2 = t5), l2 || (this._shortColors[t5] ? o2 = this._shortColors[t5] : (e3().div.style.color = t5, o2 = e3().computedStyle(e3().div).color));
              var h2 = new RegExp("^rgba?\\((\\d{1,3}),\\s?(\\d{1,3}),\\s?(\\d{1,3}),?\\s?(\\d{1}|0?\\.\\d{1,})?\\)$", "gi").exec(o2), u2 = parseFloat(h2[4] || 1);
              h2 && (s2 = { r: parseInt(h2[1], 10), g: parseInt(h2[2], 10), b: parseInt(h2[3], 10), a: null == u2 || isNaN(u2) ? 1 : u2 });
            }
            return s2;
          } }, { key: "_strToArr", value: function(t5) {
            var s2 = [];
            return "number" != typeof t5 || isNaN(t5) ? (t5.trim().split(/\s+/gim).forEach(function(t6) {
              s2.push(e3().parseUnit(e3().parseIfRand(t6)));
            }), s2) : (s2.push(e3().parseUnit(t5)), s2);
          } }]), t4;
        }();
        const W = V;
        function G(t4, e4) {
          var s2 = Object.keys(t4);
          if (Object.getOwnPropertySymbols) {
            var r2 = Object.getOwnPropertySymbols(t4);
            e4 && (r2 = r2.filter(function(e5) {
              return Object.getOwnPropertyDescriptor(t4, e5).enumerable;
            })), s2.push.apply(s2, r2);
          }
          return s2;
        }
        function Q(t4) {
          for (var e4 = 1; e4 < arguments.length; e4++) {
            var s2 = null != arguments[e4] ? arguments[e4] : {};
            e4 % 2 ? G(Object(s2), true).forEach(function(e5) {
              d(t4, e5, s2[e5]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t4, Object.getOwnPropertyDescriptors(s2)) : G(Object(s2)).forEach(function(e5) {
              Object.defineProperty(t4, e5, Object.getOwnPropertyDescriptor(s2, e5));
            });
          }
          return t4;
        }
        function K(t4) {
          var e4 = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct)
              return false;
            if (Reflect.construct.sham)
              return false;
            if ("function" == typeof Proxy)
              return true;
            try {
              return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
              })), true;
            } catch (t5) {
              return false;
            }
          }();
          return function() {
            var s2, r2 = (0, u.Z)(t4);
            if (e4) {
              var i2 = (0, u.Z)(this).constructor;
              s2 = Reflect.construct(r2, arguments, i2);
            } else
              s2 = r2.apply(this, arguments);
            return (0, h.Z)(this, s2);
          };
        }
        var J = {};
        f.Z.prototype._declareDefaults.call(J);
        for (var tt = Object.keys(J._defaults), et = 0; et < tt.length; et++)
          J._defaults[tt[et]] = 1;
        J._defaults.timeline = 1;
        var st = J._defaults, rt = function(t4) {
          (0, l.Z)(r2, t4);
          var s2 = K(r2);
          function r2() {
            return (0, a.Z)(this, r2), s2.apply(this, arguments);
          }
          return (0, o.Z)(r2, [{ key: "_declareDefaults", value: function() {
            this._defaults = { x: 0, y: 0, z: 0, skewX: 0, skewY: 0, rotateX: 0, rotateY: 0, rotateZ: 0, scale: 1, scaleX: 1, scaleY: 1, isSoftHide: true, isShowStart: true, isShowEnd: true, isForce3d: false, isRefreshState: true }, this._drawExclude = { el: 1 }, this._3dProperties = ["rotateX", "rotateY", "z"], this._arrayPropertyMap = { transformOrigin: 1, backgroundPosition: 1 }, this._numberPropertyMap = { opacity: 1, scale: 1, scaleX: 1, scaleY: 1, rotateX: 1, rotateY: 1, rotateZ: 1, skewX: 1, skewY: 1 }, this._prefixPropertyMap = { transform: 1, transformOrigin: 1 }, this._prefix = e3().prefix.css;
          } }, { key: "then", value: function(t5) {
            if (null == t5 || !Object.keys(t5).length)
              return 1;
            var s3 = e3().getLastItem(this._modules);
            return s3.deltas.refresh(false), this._history[this._history.length - 1] = s3._o, (0, _.Z)((0, u.Z)(r2.prototype), "then", this).call(this, t5), s3.deltas.restore(), this;
          } }, { key: "_checkStartValue", value: function(t5, s3) {
            return null == s3 ? null != this._defaults[t5] ? this._defaults[t5] : null != this._customProps[t5] ? this._customProps[t5] : null != e3().defaultStyles[t5] ? e3().defaultStyles[t5] : 0 : s3;
          } }, { key: "_draw", value: function() {
            for (var t5 = this._props, e4 = 0; e4 < this._drawProps.length; e4++) {
              var s3 = this._drawProps[e4];
              this._setStyle(s3, t5[s3]);
            }
            this._drawTransform(), this._customDraw && this._customDraw(this._props.el, this._props);
          } }, { key: "_drawTransform", value: function() {
            var t5 = this._props, e4 = this._is3d ? "translate3d(".concat(t5.x, ", ").concat(t5.y, ", ").concat(t5.z, ") rotateX(").concat(t5.rotateX, "deg) rotateY(").concat(t5.rotateY, "deg) rotateZ(").concat(t5.rotateZ, "deg) skew(").concat(t5.skewX, "deg, ").concat(t5.skewY, "deg) scale(").concat(t5.scaleX, ", ").concat(t5.scaleY, ")") : "translate(".concat(t5.x, ", ").concat(t5.y, ") rotate(").concat(t5.rotateZ, "deg) skew(").concat(t5.skewX, "deg, ").concat(t5.skewY, "deg) scale(").concat(t5.scaleX, ", ").concat(t5.scaleY, ")");
            this._setStyle("transform", e4);
          } }, { key: "_render", value: function() {
            if (!this._o.prevChainModule) {
              for (var t5 = this._props, e4 = 0; e4 < this._renderProps.length; e4++) {
                var s3 = this._renderProps[e4], r3 = t5[s3];
                r3 = "number" == typeof r3 ? "".concat(r3, "px") : r3, this._setStyle(s3, r3);
              }
              this._draw(), t5.isShowStart || this._hide();
            }
          } }, { key: "_setStyle", value: function(t5, e4) {
            if (this._state[t5] !== e4) {
              var s3 = this._props.el.style;
              s3[t5] = e4, this._prefixPropertyMap[t5] && (s3["".concat(this._prefix).concat(t5)] = e4), this._state[t5] = e4;
            }
          } }, { key: "_extendDefaults", value: function() {
            this._props = this._o.props || {}, this._renderProps = [], this._drawProps = [], this._saveCustomProperties(this._o);
            var t5 = Q({}, this._o);
            t5 = this._addDefaults(t5);
            for (var s3 = Object.keys(t5), r3 = 0; r3 < s3.length; r3++) {
              var i2 = s3[r3], n2 = !this._drawExclude[i2] && null == this._defaults[i2] && !st[i2], a2 = this._customProps[i2];
              e3().isDelta(t5[i2]) || st[i2] ? n2 && !a2 && this._drawProps.push(i2) : (this._parseOption(i2, t5[i2]), "el" === i2 && (this._props.el = e3().parseEl(t5.el), this.el = this._props.el), n2 && !a2 && this._renderProps.push(i2));
            }
            this._createDeltas(t5);
          } }, { key: "_saveCustomProperties", value: function() {
            var t5 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            this._customProps = t5.customProperties || {}, this._customProps = Q({}, this._customProps), this._customDraw = this._customProps.draw, delete this._customProps.draw, delete t5.customProperties, this._copyDefaultCustomProps();
          } }, { key: "_copyDefaultCustomProps", value: function() {
            for (var t5 in this._customProps)
              null == this._o[t5] && (this._o[t5] = this._customProps[t5]);
          } }, { key: "_resetMergedFlags", value: function(t5) {
            return (0, _.Z)((0, u.Z)(r2.prototype), "_resetMergedFlags", this).call(this, t5), t5.props = this._props, t5.customProperties = this._customProps, t5;
          } }, { key: "_parseOption", value: function(t5, s3) {
            (0, _.Z)((0, u.Z)(r2.prototype), "_parseOption", this).call(this, t5, s3);
            var i2 = this._props[t5];
            e3().isArray(i2) && (this._props[t5] = this._arrToString(i2));
          } }, { key: "_arrToString", value: function(t5) {
            for (var e4 = "", s3 = 0; s3 < t5.length; s3++)
              e4 += "".concat(t5[s3].string, " ");
            return e4;
          } }, { key: "_addDefaults", value: function(t5) {
            for (var e4 in this._is3d = false, this._defaults)
              null == t5[e4] ? t5[e4] = "scaleX" === e4 || "scaleY" === e4 ? null != t5.scale ? t5.scale : this._defaults.scale : this._defaults[e4] : -1 !== this._3dProperties.indexOf(e4) && (this._is3d = true);
            return this._o.isForce3d && (this._is3d = true), t5;
          } }, { key: "_vars", value: function() {
            this.deltas.refresh(false), (0, _.Z)((0, u.Z)(r2.prototype), "_vars", this).call(this), this._state = {}, this.deltas.restore(false);
          } }, { key: "_createDeltas", value: function(t5) {
            this.deltas = new W({ options: t5, props: this._props, arrayPropertyMap: this._arrayPropertyMap, numberPropertyMap: this._numberPropertyMap, customProps: this._customProps, callbacksContext: t5.callbacksContext || this, isChained: !!this._o.prevChainModule }), this._o.prevChainModule && (this.timeline = this.deltas.timeline);
          } }, { key: "_makeTween", value: function() {
          } }, { key: "_makeTimeline", value: function() {
            this._o.prevChainModule || (this._o.timeline = this._o.timeline || {}, this._addCallbackOverrides(this._o.timeline), (0, _.Z)((0, u.Z)(r2.prototype), "_makeTimeline", this).call(this), this.timeline.add(this.deltas));
          } }, { key: "_addCallbackOverrides", value: function(t5) {
            var e4 = this, s3 = this._props;
            t5.callbackOverrides = { onUpdate: this._draw, onRefresh: this._props.isRefreshState ? this._draw : void 0, onStart: function(t6) {
              e4._isChained || (t6 && !s3.isShowStart ? e4._show() : s3.isShowStart || e4._hide());
            }, onComplete: function(t6) {
              e4._isChained || (t6 ? s3.isShowEnd || e4._hide() : s3.isShowEnd || e4._show());
            } };
          } }, { key: "_showByTransform", value: function() {
            this._drawTransform();
          } }, { key: "_mergeThenProperty", value: function(t5, s3, r3) {
            var i2 = "boolean" == typeof r3;
            if (e3().isTweenProp(t5) || this._nonMergeProps[t5] || i2)
              return r3;
            var n2 = {};
            if (e3().isObject(r3) && null != r3.to) {
              for (var a2 in r3)
                (st[a2] || "curve" === a2) && (n2[a2] = r3[a2], delete r3[a2]);
              r3 = r3.to;
            }
            if (this._isDelta(r3)) {
              var o2 = {};
              for (var l2 in r3)
                (st[l2] || "curve" === l2) && (o2[l2] = r3[l2], delete r3[l2]);
              return Q(Q({}, this._parseDeltaValues(t5, r3)), o2);
            }
            var h2 = this._parsePreArrayProperty(t5, r3);
            return this._isDelta(s3) ? Q(d({}, e3().getDeltaEnd(s3), h2), n2) : Q(d({}, s3, h2), n2);
          } }]), r2;
        }(w);
        const it = rt, nt = function() {
          function t4() {
            var s2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return (0, a.Z)(this, t4), this.o = s2, this.o.el ? (this._vars(), this._declareDefaults(), this._extendDefaults(), this._parseFrames(), this._frames.length <= 2 && e3().warn("Spriter: only ".concat(this._frames.length, " frames found")), this._frames.length < 1 && e3().error("Spriter: there is no frames to animate, aborting"), this._createTween(), this) : e3().error('No "el" option specified, aborting');
          }
          return (0, o.Z)(t4, [{ key: "_declareDefaults", value: function() {
            this._defaults = { duration: 500, delay: 0, easing: "linear.none", repeat: 0, yoyo: false, isRunLess: false, isShowEnd: false, onStart: null, onUpdate: null, onComplete: null };
          } }, { key: "_vars", value: function() {
            this._props = e3().cloneObj(this.o), this.el = this.o.el, this._frames = [];
          } }, { key: "run", value: function() {
            return this.timeline.play();
          } }, { key: "_extendDefaults", value: function() {
            return e3().extend(this._props, this._defaults);
          } }, { key: "_parseFrames", value: function() {
            this._frames = Array.prototype.slice.call(this.el.children, 0), this._frames.forEach(function(t5) {
              return t5.style.opacity = 0;
            }), this._frameStep = 1 / this._frames.length;
          } }, { key: "_createTween", value: function() {
            var t5 = this;
            this._tween = new f.Z({ duration: this._props.duration, delay: this._props.delay, yoyo: this._props.yoyo, repeat: this._props.repeat, easing: this._props.easing, onStart: function() {
              return t5._props.onStart && t5._props.onStart();
            }, onComplete: function() {
              return t5._props.onComplete && t5._props.onComplete();
            }, onUpdate: function(e4) {
              return t5._setProgress(e4);
            } }), this.timeline = new p.Z(), this.timeline.add(this._tween), this._props.isRunLess || this._startTween();
          } }, { key: "_startTween", value: function() {
            var t5 = this;
            setTimeout(function() {
              return t5.timeline.play();
            }, 1);
          } }, { key: "_setProgress", value: function(t5) {
            var e4 = Math.floor(t5 / this._frameStep);
            if (this._prevFrame != this._frames[e4]) {
              this._prevFrame && (this._prevFrame.style.opacity = 0);
              var s2 = 1 === t5 && this._props.isShowEnd ? e4 - 1 : e4;
              this._frames[s2] && (this._frames[s2].style.opacity = 1), this._prevFrame = this._frames[e4];
            }
            this._props.onUpdate && this._props.onUpdate(t5);
          } }]), t4;
        }();
        var at = s(291), ot = s.n(at), lt = { revision: "1.7.1", isDebug: false, helpers: e3(), Shape: R, ShapeSwirl: L, Burst: B, Html: it, stagger: function(t4) {
          return function(e4) {
            return new x(e4, t4);
          };
        }, Spriter: nt, MotionPath: ot(), Tween: f.Z, Timeline: p.Z, Tweenable: m, Thenable: w, Tunable: P, Module: v.Z, tweener: C.Z, easing: M(), shapesMap: n(), _pool: { Delta: F, Deltas: W }, h: e3(), delta: e3().delta, addShape: n().addShape, CustomShape: n().custom, Transit: R, Swirl: L };
        "undefined" != typeof window && (window.mojs = lt);
        const ht = lt;
      })(), r = r.default;
    })(), "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define("mojs", [], e) : "object" == typeof exports ? exports.mojs = e() : t.mojs = e();
  }
});
export default require_mo_umd();
/*! Bundled license information:

@mojs/core/dist/mo.umd.js:
  (*!
    @mojs/core – The motion graphics toolbelt for the web
    Oleg Solomka @legomushroom 2023 MIT
    1.7.1
  *)
*/
//# sourceMappingURL=@mojs_core.js.map
