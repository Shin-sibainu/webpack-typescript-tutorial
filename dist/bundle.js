(() => {
  "use strict";
  var e = {
      607: function (e, t, r) {
        var o =
          (this && this.__importDefault) ||
          function (e) {
            return e && e.__esModule ? e : { default: e };
          };
        Object.defineProperty(t, "__esModule", { value: !0 });
        var n = o(r(54)),
          u = document.getElementById("root");
        new n.default("Hello World").sayHello(u);
      },
      54: (e, t) => {
        Object.defineProperty(t, "__esModule", { value: !0 });
        var r = (function () {
          function e(e) {
            this.message = e;
          }
          return (
            (e.prototype.sayHello = function (e) {
              e && (e.innerText = this.message);
            }),
            e
          );
        })();
        t.default = r;
      },
    },
    t = {};
  !(function r(o) {
    var n = t[o];
    if (void 0 !== n) return n.exports;
    var u = (t[o] = { exports: {} });
    return e[o].call(u.exports, u, u.exports, r), u.exports;
  })(607);
})();
