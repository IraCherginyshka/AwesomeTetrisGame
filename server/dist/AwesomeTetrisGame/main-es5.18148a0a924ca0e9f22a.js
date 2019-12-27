var __extends =
  (this && this.__extends) ||
  (function() {
    var t = function(e, n) {
      return (t =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function(t, e) {
            t.__proto__ = e;
          }) ||
        function(t, e) {
          for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
        })(e, n);
    };
    return function(e, n) {
      function r() {
        this.constructor = e;
      }
      t(e, n),
        (e.prototype = null === n ? Object.create(n) : ((r.prototype = n.prototype), new r()));
    };
  })();
(window.webpackJsonp = window.webpackJsonp || []).push([
  [1],
  {
    0: function(t, e, n) {
      t.exports = n('zUnb');
    },
    kScs: function(t, e, n) {
      'use strict';
      Object.defineProperty(e, '__esModule', { value: !0 });
      var r = (function() {
        function t() {
          (this._state = new Int32Array(4)),
            (this._buffer = new ArrayBuffer(68)),
            (this._buffer8 = new Uint8Array(this._buffer, 0, 68)),
            (this._buffer32 = new Uint32Array(this._buffer, 0, 17)),
            this.start();
        }
        return (
          (t.hashStr = function(t, e) {
            return (
              void 0 === e && (e = !1),
              this.onePassHasher
                .start()
                .appendStr(t)
                .end(e)
            );
          }),
          (t.hashAsciiStr = function(t, e) {
            return (
              void 0 === e && (e = !1),
              this.onePassHasher
                .start()
                .appendAsciiStr(t)
                .end(e)
            );
          }),
          (t._hex = function(e) {
            var n,
              r,
              o,
              i,
              s = t.hexChars,
              a = t.hexOut;
            for (i = 0; i < 4; i += 1)
              for (r = 8 * i, n = e[i], o = 0; o < 8; o += 2)
                (a[r + 1 + o] = s.charAt(15 & n)),
                  (a[r + 0 + o] = s.charAt(15 & (n >>>= 4))),
                  (n >>>= 4);
            return a.join('');
          }),
          (t._md5cycle = function(t, e) {
            var n = t[0],
              r = t[1],
              o = t[2],
              i = t[3];
            (r =
              ((((r +=
                ((((o =
                  ((((o +=
                    ((((i =
                      ((((i +=
                        ((((n =
                          ((((n += (((r & o) | (~r & i)) + e[0] - 680876936) | 0) << 7) |
                            (n >>> 25)) +
                            r) |
                          0) &
                          r) |
                          (~n & o)) +
                          e[1] -
                          389564586) |
                        0) <<
                        12) |
                        (i >>> 20)) +
                        n) |
                      0) &
                      n) |
                      (~i & r)) +
                      e[2] +
                      606105819) |
                    0) <<
                    17) |
                    (o >>> 15)) +
                    i) |
                  0) &
                  i) |
                  (~o & n)) +
                  e[3] -
                  1044525330) |
                0) <<
                22) |
                (r >>> 10)) +
                o) |
              0),
              (r =
                ((((r +=
                  ((((o =
                    ((((o +=
                      ((((i =
                        ((((i +=
                          ((((n =
                            ((((n += (((r & o) | (~r & i)) + e[4] - 176418897) | 0) << 7) |
                              (n >>> 25)) +
                              r) |
                            0) &
                            r) |
                            (~n & o)) +
                            e[5] +
                            1200080426) |
                          0) <<
                          12) |
                          (i >>> 20)) +
                          n) |
                        0) &
                        n) |
                        (~i & r)) +
                        e[6] -
                        1473231341) |
                      0) <<
                      17) |
                      (o >>> 15)) +
                      i) |
                    0) &
                    i) |
                    (~o & n)) +
                    e[7] -
                    45705983) |
                  0) <<
                  22) |
                  (r >>> 10)) +
                  o) |
                0),
              (r =
                ((((r +=
                  ((((o =
                    ((((o +=
                      ((((i =
                        ((((i +=
                          ((((n =
                            ((((n += (((r & o) | (~r & i)) + e[8] + 1770035416) | 0) << 7) |
                              (n >>> 25)) +
                              r) |
                            0) &
                            r) |
                            (~n & o)) +
                            e[9] -
                            1958414417) |
                          0) <<
                          12) |
                          (i >>> 20)) +
                          n) |
                        0) &
                        n) |
                        (~i & r)) +
                        e[10] -
                        42063) |
                      0) <<
                      17) |
                      (o >>> 15)) +
                      i) |
                    0) &
                    i) |
                    (~o & n)) +
                    e[11] -
                    1990404162) |
                  0) <<
                  22) |
                  (r >>> 10)) +
                  o) |
                0),
              (r =
                ((((r +=
                  ((((o =
                    ((((o +=
                      ((((i =
                        ((((i +=
                          ((((n =
                            ((((n += (((r & o) | (~r & i)) + e[12] + 1804603682) | 0) << 7) |
                              (n >>> 25)) +
                              r) |
                            0) &
                            r) |
                            (~n & o)) +
                            e[13] -
                            40341101) |
                          0) <<
                          12) |
                          (i >>> 20)) +
                          n) |
                        0) &
                        n) |
                        (~i & r)) +
                        e[14] -
                        1502002290) |
                      0) <<
                      17) |
                      (o >>> 15)) +
                      i) |
                    0) &
                    i) |
                    (~o & n)) +
                    e[15] +
                    1236535329) |
                  0) <<
                  22) |
                  (r >>> 10)) +
                  o) |
                0),
              (r =
                ((((r +=
                  ((((o =
                    ((((o +=
                      ((((i =
                        ((((i +=
                          ((((n =
                            ((((n += (((r & i) | (o & ~i)) + e[1] - 165796510) | 0) << 5) |
                              (n >>> 27)) +
                              r) |
                            0) &
                            o) |
                            (r & ~o)) +
                            e[6] -
                            1069501632) |
                          0) <<
                          9) |
                          (i >>> 23)) +
                          n) |
                        0) &
                        r) |
                        (n & ~r)) +
                        e[11] +
                        643717713) |
                      0) <<
                      14) |
                      (o >>> 18)) +
                      i) |
                    0) &
                    n) |
                    (i & ~n)) +
                    e[0] -
                    373897302) |
                  0) <<
                  20) |
                  (r >>> 12)) +
                  o) |
                0),
              (r =
                ((((r +=
                  ((((o =
                    ((((o +=
                      ((((i =
                        ((((i +=
                          ((((n =
                            ((((n += (((r & i) | (o & ~i)) + e[5] - 701558691) | 0) << 5) |
                              (n >>> 27)) +
                              r) |
                            0) &
                            o) |
                            (r & ~o)) +
                            e[10] +
                            38016083) |
                          0) <<
                          9) |
                          (i >>> 23)) +
                          n) |
                        0) &
                        r) |
                        (n & ~r)) +
                        e[15] -
                        660478335) |
                      0) <<
                      14) |
                      (o >>> 18)) +
                      i) |
                    0) &
                    n) |
                    (i & ~n)) +
                    e[4] -
                    405537848) |
                  0) <<
                  20) |
                  (r >>> 12)) +
                  o) |
                0),
              (r =
                ((((r +=
                  ((((o =
                    ((((o +=
                      ((((i =
                        ((((i +=
                          ((((n =
                            ((((n += (((r & i) | (o & ~i)) + e[9] + 568446438) | 0) << 5) |
                              (n >>> 27)) +
                              r) |
                            0) &
                            o) |
                            (r & ~o)) +
                            e[14] -
                            1019803690) |
                          0) <<
                          9) |
                          (i >>> 23)) +
                          n) |
                        0) &
                        r) |
                        (n & ~r)) +
                        e[3] -
                        187363961) |
                      0) <<
                      14) |
                      (o >>> 18)) +
                      i) |
                    0) &
                    n) |
                    (i & ~n)) +
                    e[8] +
                    1163531501) |
                  0) <<
                  20) |
                  (r >>> 12)) +
                  o) |
                0),
              (r =
                ((((r +=
                  ((((o =
                    ((((o +=
                      ((((i =
                        ((((i +=
                          ((((n =
                            ((((n += (((r & i) | (o & ~i)) + e[13] - 1444681467) | 0) << 5) |
                              (n >>> 27)) +
                              r) |
                            0) &
                            o) |
                            (r & ~o)) +
                            e[2] -
                            51403784) |
                          0) <<
                          9) |
                          (i >>> 23)) +
                          n) |
                        0) &
                        r) |
                        (n & ~r)) +
                        e[7] +
                        1735328473) |
                      0) <<
                      14) |
                      (o >>> 18)) +
                      i) |
                    0) &
                    n) |
                    (i & ~n)) +
                    e[12] -
                    1926607734) |
                  0) <<
                  20) |
                  (r >>> 12)) +
                  o) |
                0),
              (r =
                ((((r +=
                  (((o =
                    ((((o +=
                      (((i =
                        ((((i +=
                          (((n =
                            ((((n += ((r ^ o ^ i) + e[5] - 378558) | 0) << 4) | (n >>> 28)) + r) |
                            0) ^
                            r ^
                            o) +
                            e[8] -
                            2022574463) |
                          0) <<
                          11) |
                          (i >>> 21)) +
                          n) |
                        0) ^
                        n ^
                        r) +
                        e[11] +
                        1839030562) |
                      0) <<
                      16) |
                      (o >>> 16)) +
                      i) |
                    0) ^
                    i ^
                    n) +
                    e[14] -
                    35309556) |
                  0) <<
                  23) |
                  (r >>> 9)) +
                  o) |
                0),
              (r =
                ((((r +=
                  (((o =
                    ((((o +=
                      (((i =
                        ((((i +=
                          (((n =
                            ((((n += ((r ^ o ^ i) + e[1] - 1530992060) | 0) << 4) | (n >>> 28)) +
                              r) |
                            0) ^
                            r ^
                            o) +
                            e[4] +
                            1272893353) |
                          0) <<
                          11) |
                          (i >>> 21)) +
                          n) |
                        0) ^
                        n ^
                        r) +
                        e[7] -
                        155497632) |
                      0) <<
                      16) |
                      (o >>> 16)) +
                      i) |
                    0) ^
                    i ^
                    n) +
                    e[10] -
                    1094730640) |
                  0) <<
                  23) |
                  (r >>> 9)) +
                  o) |
                0),
              (r =
                ((((r +=
                  (((o =
                    ((((o +=
                      (((i =
                        ((((i +=
                          (((n =
                            ((((n += ((r ^ o ^ i) + e[13] + 681279174) | 0) << 4) | (n >>> 28)) +
                              r) |
                            0) ^
                            r ^
                            o) +
                            e[0] -
                            358537222) |
                          0) <<
                          11) |
                          (i >>> 21)) +
                          n) |
                        0) ^
                        n ^
                        r) +
                        e[3] -
                        722521979) |
                      0) <<
                      16) |
                      (o >>> 16)) +
                      i) |
                    0) ^
                    i ^
                    n) +
                    e[6] +
                    76029189) |
                  0) <<
                  23) |
                  (r >>> 9)) +
                  o) |
                0),
              (r =
                ((((r +=
                  (((o =
                    ((((o +=
                      (((i =
                        ((((i +=
                          (((n =
                            ((((n += ((r ^ o ^ i) + e[9] - 640364487) | 0) << 4) | (n >>> 28)) +
                              r) |
                            0) ^
                            r ^
                            o) +
                            e[12] -
                            421815835) |
                          0) <<
                          11) |
                          (i >>> 21)) +
                          n) |
                        0) ^
                        n ^
                        r) +
                        e[15] +
                        530742520) |
                      0) <<
                      16) |
                      (o >>> 16)) +
                      i) |
                    0) ^
                    i ^
                    n) +
                    e[2] -
                    995338651) |
                  0) <<
                  23) |
                  (r >>> 9)) +
                  o) |
                0),
              (r =
                ((((r +=
                  (((i =
                    ((((i +=
                      ((r ^
                        ((n =
                          ((((n += ((o ^ (r | ~i)) + e[0] - 198630844) | 0) << 6) | (n >>> 26)) +
                            r) |
                          0) |
                          ~o)) +
                        e[7] +
                        1126891415) |
                      0) <<
                      10) |
                      (i >>> 22)) +
                      n) |
                    0) ^
                    ((o =
                      ((((o += ((n ^ (i | ~r)) + e[14] - 1416354905) | 0) << 15) | (o >>> 17)) +
                        i) |
                      0) |
                      ~n)) +
                    e[5] -
                    57434055) |
                  0) <<
                  21) |
                  (r >>> 11)) +
                  o) |
                0),
              (r =
                ((((r +=
                  (((i =
                    ((((i +=
                      ((r ^
                        ((n =
                          ((((n += ((o ^ (r | ~i)) + e[12] + 1700485571) | 0) << 6) | (n >>> 26)) +
                            r) |
                          0) |
                          ~o)) +
                        e[3] -
                        1894986606) |
                      0) <<
                      10) |
                      (i >>> 22)) +
                      n) |
                    0) ^
                    ((o =
                      ((((o += ((n ^ (i | ~r)) + e[10] - 1051523) | 0) << 15) | (o >>> 17)) + i) |
                      0) |
                      ~n)) +
                    e[1] -
                    2054922799) |
                  0) <<
                  21) |
                  (r >>> 11)) +
                  o) |
                0),
              (r =
                ((((r +=
                  (((i =
                    ((((i +=
                      ((r ^
                        ((n =
                          ((((n += ((o ^ (r | ~i)) + e[8] + 1873313359) | 0) << 6) | (n >>> 26)) +
                            r) |
                          0) |
                          ~o)) +
                        e[15] -
                        30611744) |
                      0) <<
                      10) |
                      (i >>> 22)) +
                      n) |
                    0) ^
                    ((o =
                      ((((o += ((n ^ (i | ~r)) + e[6] - 1560198380) | 0) << 15) | (o >>> 17)) + i) |
                      0) |
                      ~n)) +
                    e[13] +
                    1309151649) |
                  0) <<
                  21) |
                  (r >>> 11)) +
                  o) |
                0),
              (r =
                ((((r +=
                  (((i =
                    ((((i +=
                      ((r ^
                        ((n =
                          ((((n += ((o ^ (r | ~i)) + e[4] - 145523070) | 0) << 6) | (n >>> 26)) +
                            r) |
                          0) |
                          ~o)) +
                        e[11] -
                        1120210379) |
                      0) <<
                      10) |
                      (i >>> 22)) +
                      n) |
                    0) ^
                    ((o =
                      ((((o += ((n ^ (i | ~r)) + e[2] + 718787259) | 0) << 15) | (o >>> 17)) + i) |
                      0) |
                      ~n)) +
                    e[9] -
                    343485551) |
                  0) <<
                  21) |
                  (r >>> 11)) +
                  o) |
                0),
              (t[0] = (n + t[0]) | 0),
              (t[1] = (r + t[1]) | 0),
              (t[2] = (o + t[2]) | 0),
              (t[3] = (i + t[3]) | 0);
          }),
          (t.prototype.start = function() {
            return (
              (this._dataLength = 0),
              (this._bufferLength = 0),
              this._state.set(t.stateIdentity),
              this
            );
          }),
          (t.prototype.appendStr = function(e) {
            var n,
              r,
              o = this._buffer8,
              i = this._buffer32,
              s = this._bufferLength;
            for (r = 0; r < e.length; r += 1) {
              if ((n = e.charCodeAt(r)) < 128) o[s++] = n;
              else if (n < 2048) (o[s++] = 192 + (n >>> 6)), (o[s++] = (63 & n) | 128);
              else if (n < 55296 || n > 56319)
                (o[s++] = 224 + (n >>> 12)),
                  (o[s++] = ((n >>> 6) & 63) | 128),
                  (o[s++] = (63 & n) | 128);
              else {
                if ((n = 1024 * (n - 55296) + (e.charCodeAt(++r) - 56320) + 65536) > 1114111)
                  throw new Error('Unicode standard supports code points up to U+10FFFF');
                (o[s++] = 240 + (n >>> 18)),
                  (o[s++] = ((n >>> 12) & 63) | 128),
                  (o[s++] = ((n >>> 6) & 63) | 128),
                  (o[s++] = (63 & n) | 128);
              }
              s >= 64 &&
                ((this._dataLength += 64), t._md5cycle(this._state, i), (s -= 64), (i[0] = i[16]));
            }
            return (this._bufferLength = s), this;
          }),
          (t.prototype.appendAsciiStr = function(e) {
            for (var n, r = this._buffer8, o = this._buffer32, i = this._bufferLength, s = 0; ; ) {
              for (n = Math.min(e.length - s, 64 - i); n--; ) r[i++] = e.charCodeAt(s++);
              if (i < 64) break;
              (this._dataLength += 64), t._md5cycle(this._state, o), (i = 0);
            }
            return (this._bufferLength = i), this;
          }),
          (t.prototype.appendByteArray = function(e) {
            for (var n, r = this._buffer8, o = this._buffer32, i = this._bufferLength, s = 0; ; ) {
              for (n = Math.min(e.length - s, 64 - i); n--; ) r[i++] = e[s++];
              if (i < 64) break;
              (this._dataLength += 64), t._md5cycle(this._state, o), (i = 0);
            }
            return (this._bufferLength = i), this;
          }),
          (t.prototype.getState = function() {
            var t = this._state;
            return {
              buffer: String.fromCharCode.apply(null, this._buffer8),
              buflen: this._bufferLength,
              length: this._dataLength,
              state: [t[0], t[1], t[2], t[3]],
            };
          }),
          (t.prototype.setState = function(t) {
            var e,
              n = t.buffer,
              r = t.state,
              o = this._state;
            for (
              this._dataLength = t.length,
                this._bufferLength = t.buflen,
                o[0] = r[0],
                o[1] = r[1],
                o[2] = r[2],
                o[3] = r[3],
                e = 0;
              e < n.length;
              e += 1
            )
              this._buffer8[e] = n.charCodeAt(e);
          }),
          (t.prototype.end = function(e) {
            void 0 === e && (e = !1);
            var n,
              r = this._bufferLength,
              o = this._buffer8,
              i = this._buffer32,
              s = 1 + (r >> 2);
            if (
              ((this._dataLength += r),
              (o[r] = 128),
              (o[r + 1] = o[r + 2] = o[r + 3] = 0),
              i.set(t.buffer32Identity.subarray(s), s),
              r > 55 && (t._md5cycle(this._state, i), i.set(t.buffer32Identity)),
              (n = 8 * this._dataLength) <= 4294967295)
            )
              i[14] = n;
            else {
              var a = n.toString(16).match(/(.*?)(.{0,8})$/);
              if (null === a) return;
              var u = parseInt(a[2], 16),
                l = parseInt(a[1], 16) || 0;
              (i[14] = u), (i[15] = l);
            }
            return t._md5cycle(this._state, i), e ? this._state : t._hex(this._state);
          }),
          (t.stateIdentity = new Int32Array([1732584193, -271733879, -1732584194, 271733878])),
          (t.buffer32Identity = new Int32Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])),
          (t.hexChars = '0123456789abcdef'),
          (t.hexOut = []),
          (t.onePassHasher = new t()),
          t
        );
      })();
      (e.Md5 = r),
        '5d41402abc4b2a76b9719d911017c592' !== r.hashStr('hello') &&
          console.error('Md5 self test failed.');
    },
    zUnb: function(t, e, n) {
      'use strict';
      function r(t) {
        return 'function' == typeof t;
      }
      n.r(e);
      var o = !1,
        i = {
          Promise: void 0,
          set useDeprecatedSynchronousErrorHandling(t) {
            if (t) {
              var e = new Error();
              console.warn(
                'DEPRECATED! RxJS was set to use deprecated synchronous error handling behavior by code at: \n' +
                  e.stack,
              );
            } else o && console.log('RxJS: Back to a better error behavior. Thank you. <3');
            o = t;
          },
          get useDeprecatedSynchronousErrorHandling() {
            return o;
          },
        };
      function s(t) {
        setTimeout(function() {
          throw t;
        }, 0);
      }
      var a = {
          closed: !0,
          next: function(t) {},
          error: function(t) {
            if (i.useDeprecatedSynchronousErrorHandling) throw t;
            s(t);
          },
          complete: function() {},
        },
        u =
          Array.isArray ||
          function(t) {
            return t && 'number' == typeof t.length;
          };
      function l(t) {
        return null !== t && 'object' == typeof t;
      }
      var c,
        h = (function() {
          function t(t) {
            return (
              Error.call(this),
              (this.message = t
                ? t.length +
                  ' errors occurred during unsubscription:\n' +
                  t
                    .map(function(t, e) {
                      return e + 1 + ') ' + t.toString();
                    })
                    .join('\n  ')
                : ''),
              (this.name = 'UnsubscriptionError'),
              (this.errors = t),
              this
            );
          }
          return (t.prototype = Object.create(Error.prototype)), t;
        })(),
        p =
          (((c = (function() {
            function t(t) {
              (this.closed = !1),
                (this._parentOrParents = null),
                (this._subscriptions = null),
                t && (this._unsubscribe = t);
            }
            return (
              (t.prototype.unsubscribe = function() {
                var e;
                if (!this.closed) {
                  var n = this._parentOrParents,
                    o = this._unsubscribe,
                    i = this._subscriptions;
                  if (
                    ((this.closed = !0),
                    (this._parentOrParents = null),
                    (this._subscriptions = null),
                    n instanceof t)
                  )
                    n.remove(this);
                  else if (null !== n) for (var s = 0; s < n.length; ++s) n[s].remove(this);
                  if (r(o))
                    try {
                      o.call(this);
                    } catch (p) {
                      e = p instanceof h ? f(p.errors) : [p];
                    }
                  if (u(i)) {
                    s = -1;
                    for (var a = i.length; ++s < a; ) {
                      var c = i[s];
                      if (l(c))
                        try {
                          c.unsubscribe();
                        } catch (p) {
                          (e = e || []), p instanceof h ? (e = e.concat(f(p.errors))) : e.push(p);
                        }
                    }
                  }
                  if (e) throw new h(e);
                }
              }),
              (t.prototype.add = function(e) {
                var n = e;
                if (!e) return t.EMPTY;
                switch (typeof e) {
                  case 'function':
                    n = new t(e);
                  case 'object':
                    if (n === this || n.closed || 'function' != typeof n.unsubscribe) return n;
                    if (this.closed) return n.unsubscribe(), n;
                    if (!(n instanceof t)) {
                      var r = n;
                      (n = new t())._subscriptions = [r];
                    }
                    break;
                  default:
                    throw new Error('unrecognized teardown ' + e + ' added to Subscription.');
                }
                var o = n._parentOrParents;
                if (null === o) n._parentOrParents = this;
                else if (o instanceof t) {
                  if (o === this) return n;
                  n._parentOrParents = [o, this];
                } else {
                  if (-1 !== o.indexOf(this)) return n;
                  o.push(this);
                }
                var i = this._subscriptions;
                return null === i ? (this._subscriptions = [n]) : i.push(n), n;
              }),
              (t.prototype.remove = function(t) {
                var e = this._subscriptions;
                if (e) {
                  var n = e.indexOf(t);
                  -1 !== n && e.splice(n, 1);
                }
              }),
              t
            );
          })()).EMPTY = (function(t) {
            return (t.closed = !0), t;
          })(new c())),
          c);
      function f(t) {
        return t.reduce(function(t, e) {
          return t.concat(e instanceof h ? e.errors : e);
        }, []);
      }
      var d =
          'function' == typeof Symbol ? Symbol('rxSubscriber') : '@@rxSubscriber_' + Math.random(),
        y = (function(t) {
          function e(n, r, o) {
            var i = this;
            switch (
              (((i = t.call(this) || this).syncErrorValue = null),
              (i.syncErrorThrown = !1),
              (i.syncErrorThrowable = !1),
              (i.isStopped = !1),
              arguments.length)
            ) {
              case 0:
                i.destination = a;
                break;
              case 1:
                if (!n) {
                  i.destination = a;
                  break;
                }
                if ('object' == typeof n) {
                  n instanceof e
                    ? ((i.syncErrorThrowable = n.syncErrorThrowable), (i.destination = n), n.add(i))
                    : ((i.syncErrorThrowable = !0), (i.destination = new g(i, n)));
                  break;
                }
              default:
                (i.syncErrorThrowable = !0), (i.destination = new g(i, n, r, o));
            }
            return i;
          }
          return (
            __extends(e, t),
            (e.prototype[d] = function() {
              return this;
            }),
            (e.create = function(t, n, r) {
              var o = new e(t, n, r);
              return (o.syncErrorThrowable = !1), o;
            }),
            (e.prototype.next = function(t) {
              this.isStopped || this._next(t);
            }),
            (e.prototype.error = function(t) {
              this.isStopped || ((this.isStopped = !0), this._error(t));
            }),
            (e.prototype.complete = function() {
              this.isStopped || ((this.isStopped = !0), this._complete());
            }),
            (e.prototype.unsubscribe = function() {
              this.closed || ((this.isStopped = !0), t.prototype.unsubscribe.call(this));
            }),
            (e.prototype._next = function(t) {
              this.destination.next(t);
            }),
            (e.prototype._error = function(t) {
              this.destination.error(t), this.unsubscribe();
            }),
            (e.prototype._complete = function() {
              this.destination.complete(), this.unsubscribe();
            }),
            (e.prototype._unsubscribeAndRecycle = function() {
              var t = this._parentOrParents;
              return (
                (this._parentOrParents = null),
                this.unsubscribe(),
                (this.closed = !1),
                (this.isStopped = !1),
                (this._parentOrParents = t),
                this
              );
            }),
            e
          );
        })(p),
        g = (function(t) {
          function e(e, n, o, i) {
            var s,
              u = this;
            (u = t.call(this) || this)._parentSubscriber = e;
            var l = u;
            return (
              r(n)
                ? (s = n)
                : n &&
                  ((s = n.next),
                  (o = n.error),
                  (i = n.complete),
                  n !== a &&
                    (r((l = Object.create(n)).unsubscribe) && u.add(l.unsubscribe.bind(l)),
                    (l.unsubscribe = u.unsubscribe.bind(u)))),
              (u._context = l),
              (u._next = s),
              (u._error = o),
              (u._complete = i),
              u
            );
          }
          return (
            __extends(e, t),
            (e.prototype.next = function(t) {
              if (!this.isStopped && this._next) {
                var e = this._parentSubscriber;
                i.useDeprecatedSynchronousErrorHandling && e.syncErrorThrowable
                  ? this.__tryOrSetError(e, this._next, t) && this.unsubscribe()
                  : this.__tryOrUnsub(this._next, t);
              }
            }),
            (e.prototype.error = function(t) {
              if (!this.isStopped) {
                var e = this._parentSubscriber,
                  n = i.useDeprecatedSynchronousErrorHandling;
                if (this._error)
                  n && e.syncErrorThrowable
                    ? (this.__tryOrSetError(e, this._error, t), this.unsubscribe())
                    : (this.__tryOrUnsub(this._error, t), this.unsubscribe());
                else if (e.syncErrorThrowable)
                  n ? ((e.syncErrorValue = t), (e.syncErrorThrown = !0)) : s(t), this.unsubscribe();
                else {
                  if ((this.unsubscribe(), n)) throw t;
                  s(t);
                }
              }
            }),
            (e.prototype.complete = function() {
              var t = this;
              if (!this.isStopped) {
                var e = this._parentSubscriber;
                if (this._complete) {
                  var n = function() {
                    return t._complete.call(t._context);
                  };
                  i.useDeprecatedSynchronousErrorHandling && e.syncErrorThrowable
                    ? (this.__tryOrSetError(e, n), this.unsubscribe())
                    : (this.__tryOrUnsub(n), this.unsubscribe());
                } else this.unsubscribe();
              }
            }),
            (e.prototype.__tryOrUnsub = function(t, e) {
              try {
                t.call(this._context, e);
              } catch (n) {
                if ((this.unsubscribe(), i.useDeprecatedSynchronousErrorHandling)) throw n;
                s(n);
              }
            }),
            (e.prototype.__tryOrSetError = function(t, e, n) {
              if (!i.useDeprecatedSynchronousErrorHandling) throw new Error('bad call');
              try {
                e.call(this._context, n);
              } catch (r) {
                return i.useDeprecatedSynchronousErrorHandling
                  ? ((t.syncErrorValue = r), (t.syncErrorThrown = !0), !0)
                  : (s(r), !0);
              }
              return !1;
            }),
            (e.prototype._unsubscribe = function() {
              var t = this._parentSubscriber;
              (this._context = null), (this._parentSubscriber = null), t.unsubscribe();
            }),
            e
          );
        })(y),
        m = ('function' == typeof Symbol && Symbol.observable) || '@@observable';
      function v() {}
      function _() {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
        return b(t);
      }
      function b(t) {
        return t
          ? 1 === t.length
            ? t[0]
            : function(e) {
                return t.reduce(function(t, e) {
                  return e(t);
                }, e);
              }
          : v;
      }
      var w,
        C =
          (((w = (function() {
            function t(t) {
              (this._isScalar = !1), t && (this._subscribe = t);
            }
            return (
              (t.prototype.lift = function(e) {
                var n = new t();
                return (n.source = this), (n.operator = e), n;
              }),
              (t.prototype.subscribe = function(t, e, n) {
                var r = this.operator,
                  o = (function(t, e, n) {
                    if (t) {
                      if (t instanceof y) return t;
                      if (t[d]) return t[d]();
                    }
                    return t || e || n ? new y(t, e, n) : new y(a);
                  })(t, e, n);
                if (
                  (o.add(
                    r
                      ? r.call(o, this.source)
                      : this.source ||
                        (i.useDeprecatedSynchronousErrorHandling && !o.syncErrorThrowable)
                      ? this._subscribe(o)
                      : this._trySubscribe(o),
                  ),
                  i.useDeprecatedSynchronousErrorHandling &&
                    o.syncErrorThrowable &&
                    ((o.syncErrorThrowable = !1), o.syncErrorThrown))
                )
                  throw o.syncErrorValue;
                return o;
              }),
              (t.prototype._trySubscribe = function(t) {
                try {
                  return this._subscribe(t);
                } catch (e) {
                  i.useDeprecatedSynchronousErrorHandling &&
                    ((t.syncErrorThrown = !0), (t.syncErrorValue = e)),
                    (function(t) {
                      for (; t; ) {
                        var e = t.closed,
                          n = t.destination,
                          r = t.isStopped;
                        if (e || r) return !1;
                        t = n && n instanceof y ? n : null;
                      }
                      return !0;
                    })(t)
                      ? t.error(e)
                      : console.warn(e);
                }
              }),
              (t.prototype.forEach = function(t, e) {
                var n = this;
                return new (e = S(e))(function(e, r) {
                  var o;
                  o = n.subscribe(
                    function(e) {
                      try {
                        t(e);
                      } catch (n) {
                        r(n), o && o.unsubscribe();
                      }
                    },
                    r,
                    e,
                  );
                });
              }),
              (t.prototype._subscribe = function(t) {
                var e = this.source;
                return e && e.subscribe(t);
              }),
              (t.prototype[m] = function() {
                return this;
              }),
              (t.prototype.pipe = function() {
                for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                return 0 === t.length ? this : b(t)(this);
              }),
              (t.prototype.toPromise = function(t) {
                var e = this;
                return new (t = S(t))(function(t, n) {
                  var r;
                  e.subscribe(
                    function(t) {
                      return (r = t);
                    },
                    function(t) {
                      return n(t);
                    },
                    function() {
                      return t(r);
                    },
                  );
                });
              }),
              t
            );
          })()).create = function(t) {
            return new w(t);
          }),
          w);
      function S(t) {
        if ((t || (t = i.Promise || Promise), !t)) throw new Error('no Promise impl found');
        return t;
      }
      var E,
        T = (function() {
          function t() {
            return (
              Error.call(this),
              (this.message = 'object unsubscribed'),
              (this.name = 'ObjectUnsubscribedError'),
              this
            );
          }
          return (t.prototype = Object.create(Error.prototype)), t;
        })(),
        x = (function(t) {
          function e(e, n) {
            var r = this;
            return ((r = t.call(this) || this).subject = e), (r.subscriber = n), (r.closed = !1), r;
          }
          return (
            __extends(e, t),
            (e.prototype.unsubscribe = function() {
              if (!this.closed) {
                this.closed = !0;
                var t = this.subject,
                  e = t.observers;
                if (((this.subject = null), e && 0 !== e.length && !t.isStopped && !t.closed)) {
                  var n = e.indexOf(this.subscriber);
                  -1 !== n && e.splice(n, 1);
                }
              }
            }),
            e
          );
        })(p),
        P = (function(t) {
          function e(e) {
            var n = this;
            return ((n = t.call(this, e) || this).destination = e), n;
          }
          return __extends(e, t), e;
        })(y),
        O =
          (((E = (function(t) {
            function e() {
              var e = this;
              return (
                ((e = t.call(this) || this).observers = []),
                (e.closed = !1),
                (e.isStopped = !1),
                (e.hasError = !1),
                (e.thrownError = null),
                e
              );
            }
            return (
              __extends(e, t),
              (e.prototype[d] = function() {
                return new P(this);
              }),
              (e.prototype.lift = function(t) {
                var e = new k(this, this);
                return (e.operator = t), e;
              }),
              (e.prototype.next = function(t) {
                if (this.closed) throw new T();
                if (!this.isStopped)
                  for (var e = this.observers, n = e.length, r = e.slice(), o = 0; o < n; o++)
                    r[o].next(t);
              }),
              (e.prototype.error = function(t) {
                if (this.closed) throw new T();
                (this.hasError = !0), (this.thrownError = t), (this.isStopped = !0);
                for (var e = this.observers, n = e.length, r = e.slice(), o = 0; o < n; o++)
                  r[o].error(t);
                this.observers.length = 0;
              }),
              (e.prototype.complete = function() {
                if (this.closed) throw new T();
                this.isStopped = !0;
                for (var t = this.observers, e = t.length, n = t.slice(), r = 0; r < e; r++)
                  n[r].complete();
                this.observers.length = 0;
              }),
              (e.prototype.unsubscribe = function() {
                (this.isStopped = !0), (this.closed = !0), (this.observers = null);
              }),
              (e.prototype._trySubscribe = function(e) {
                if (this.closed) throw new T();
                return t.prototype._trySubscribe.call(this, e);
              }),
              (e.prototype._subscribe = function(t) {
                if (this.closed) throw new T();
                return this.hasError
                  ? (t.error(this.thrownError), p.EMPTY)
                  : this.isStopped
                  ? (t.complete(), p.EMPTY)
                  : (this.observers.push(t), new x(this, t));
              }),
              (e.prototype.asObservable = function() {
                var t = new C();
                return (t.source = this), t;
              }),
              e
            );
          })(C)).create = function(t, e) {
            return new k(t, e);
          }),
          E),
        k = (function(t) {
          function e(e, n) {
            var r = this;
            return ((r = t.call(this) || this).destination = e), (r.source = n), r;
          }
          return (
            __extends(e, t),
            (e.prototype.next = function(t) {
              var e = this.destination;
              e && e.next && e.next(t);
            }),
            (e.prototype.error = function(t) {
              var e = this.destination;
              e && e.error && this.destination.error(t);
            }),
            (e.prototype.complete = function() {
              var t = this.destination;
              t && t.complete && this.destination.complete();
            }),
            (e.prototype._subscribe = function(t) {
              return this.source ? this.source.subscribe(t) : p.EMPTY;
            }),
            e
          );
        })(O);
      function A(t) {
        return t && 'function' == typeof t.schedule;
      }
      var I = (function(t) {
          function e(e, n, r) {
            var o = this;
            return (
              ((o = t.call(this) || this).parent = e),
              (o.outerValue = n),
              (o.outerIndex = r),
              (o.index = 0),
              o
            );
          }
          return (
            __extends(e, t),
            (e.prototype._next = function(t) {
              this.parent.notifyNext(this.outerValue, t, this.outerIndex, this.index++, this);
            }),
            (e.prototype._error = function(t) {
              this.parent.notifyError(t, this), this.unsubscribe();
            }),
            (e.prototype._complete = function() {
              this.parent.notifyComplete(this), this.unsubscribe();
            }),
            e
          );
        })(y),
        N = function(t) {
          return function(e) {
            for (var n = 0, r = t.length; n < r && !e.closed; n++) e.next(t[n]);
            e.complete();
          };
        };
      var R = 'function' == typeof Symbol && Symbol.iterator ? Symbol.iterator : '@@iterator',
        D = function(t) {
          return t && 'number' == typeof t.length && 'function' != typeof t;
        };
      function F(t) {
        return !!t && 'function' != typeof t.subscribe && 'function' == typeof t.then;
      }
      var j = function(t) {
        if (t && 'function' == typeof t[m])
          return (
            (e = t),
            function(t) {
              var n = e[m]();
              if ('function' != typeof n.subscribe)
                throw new TypeError(
                  'Provided object does not correctly implement Symbol.observable',
                );
              return n.subscribe(t);
            }
          );
        var e, n, r;
        if (D(t)) return N(t);
        if (F(t))
          return (
            (n = t),
            function(t) {
              return (
                n
                  .then(
                    function(e) {
                      t.closed || (t.next(e), t.complete());
                    },
                    function(e) {
                      return t.error(e);
                    },
                  )
                  .then(null, s),
                t
              );
            }
          );
        if (t && 'function' == typeof t[R])
          return (
            (r = t),
            function(t) {
              for (var e = r[R](); ; ) {
                var n = e.next();
                if (n.done) {
                  t.complete();
                  break;
                }
                if ((t.next(n.value), t.closed)) break;
              }
              return (
                'function' == typeof e.return &&
                  t.add(function() {
                    e.return && e.return();
                  }),
                t
              );
            }
          );
        var o = l(t) ? 'an invalid object' : "'" + t + "'";
        throw new TypeError(
          'You provided ' +
            o +
            ' where a stream was expected. You can provide an Observable, Promise, Array, or Iterable.',
        );
      };
      function M(t, e, n, r, o) {
        if ((void 0 === o && (o = new I(t, n, r)), !o.closed))
          return e instanceof C ? e.subscribe(o) : j(e)(o);
      }
      var V = (function(t) {
        function e() {
          return (null !== t && t.apply(this, arguments)) || this;
        }
        return (
          __extends(e, t),
          (e.prototype.notifyNext = function(t, e, n, r, o) {
            this.destination.next(e);
          }),
          (e.prototype.notifyError = function(t, e) {
            this.destination.error(t);
          }),
          (e.prototype.notifyComplete = function(t) {
            this.destination.complete();
          }),
          e
        );
      })(y);
      function L(t, e) {
        return function(n) {
          if ('function' != typeof t)
            throw new TypeError('argument is not a function. Are you looking for `mapTo()`?');
          return n.lift(new U(t, e));
        };
      }
      var U = (function() {
          function t(t, e) {
            (this.project = t), (this.thisArg = e);
          }
          return (
            (t.prototype.call = function(t, e) {
              return e.subscribe(new H(t, this.project, this.thisArg));
            }),
            t
          );
        })(),
        H = (function(t) {
          function e(e, n, r) {
            var o = this;
            return (
              ((o = t.call(this, e) || this).project = n), (o.count = 0), (o.thisArg = r || o), o
            );
          }
          return (
            __extends(e, t),
            (e.prototype._next = function(t) {
              var e;
              try {
                e = this.project.call(this.thisArg, t, this.count++);
              } catch (n) {
                return void this.destination.error(n);
              }
              this.destination.next(e);
            }),
            e
          );
        })(y);
      function B(t, e) {
        return new C(function(n) {
          var r = new p(),
            o = 0;
          return (
            r.add(
              e.schedule(function() {
                o !== t.length
                  ? (n.next(t[o++]), n.closed || r.add(this.schedule()))
                  : n.complete();
              }),
            ),
            r
          );
        });
      }
      function z(t, e) {
        return e
          ? (function(t, e) {
              if (null != t) {
                if (
                  (function(t) {
                    return t && 'function' == typeof t[m];
                  })(t)
                )
                  return (function(t, e) {
                    return new C(function(n) {
                      var r = new p();
                      return (
                        r.add(
                          e.schedule(function() {
                            var o = t[m]();
                            r.add(
                              o.subscribe({
                                next: function(t) {
                                  r.add(
                                    e.schedule(function() {
                                      return n.next(t);
                                    }),
                                  );
                                },
                                error: function(t) {
                                  r.add(
                                    e.schedule(function() {
                                      return n.error(t);
                                    }),
                                  );
                                },
                                complete: function() {
                                  r.add(
                                    e.schedule(function() {
                                      return n.complete();
                                    }),
                                  );
                                },
                              }),
                            );
                          }),
                        ),
                        r
                      );
                    });
                  })(t, e);
                if (F(t))
                  return (function(t, e) {
                    return new C(function(n) {
                      var r = new p();
                      return (
                        r.add(
                          e.schedule(function() {
                            return t.then(
                              function(t) {
                                r.add(
                                  e.schedule(function() {
                                    n.next(t),
                                      r.add(
                                        e.schedule(function() {
                                          return n.complete();
                                        }),
                                      );
                                  }),
                                );
                              },
                              function(t) {
                                r.add(
                                  e.schedule(function() {
                                    return n.error(t);
                                  }),
                                );
                              },
                            );
                          }),
                        ),
                        r
                      );
                    });
                  })(t, e);
                if (D(t)) return B(t, e);
                if (
                  (function(t) {
                    return t && 'function' == typeof t[R];
                  })(t) ||
                  'string' == typeof t
                )
                  return (function(t, e) {
                    if (!t) throw new Error('Iterable cannot be null');
                    return new C(function(n) {
                      var r,
                        o = new p();
                      return (
                        o.add(function() {
                          r && 'function' == typeof r.return && r.return();
                        }),
                        o.add(
                          e.schedule(function() {
                            (r = t[R]()),
                              o.add(
                                e.schedule(function() {
                                  if (!n.closed) {
                                    var t, e;
                                    try {
                                      var o = r.next();
                                      (t = o.value), (e = o.done);
                                    } catch (i) {
                                      return void n.error(i);
                                    }
                                    e ? n.complete() : (n.next(t), this.schedule());
                                  }
                                }),
                              );
                          }),
                        ),
                        o
                      );
                    });
                  })(t, e);
              }
              throw new TypeError(((null !== t && typeof t) || t) + ' is not observable');
            })(t, e)
          : t instanceof C
          ? t
          : new C(j(t));
      }
      function q(t, e, n) {
        return (
          void 0 === n && (n = Number.POSITIVE_INFINITY),
          'function' == typeof e
            ? function(r) {
                return r.pipe(
                  q(function(n, r) {
                    return z(t(n, r)).pipe(
                      L(function(t, o) {
                        return e(n, t, r, o);
                      }),
                    );
                  }, n),
                );
              }
            : ('number' == typeof e && (n = e),
              function(e) {
                return e.lift(new G(t, n));
              })
        );
      }
      var G = (function() {
          function t(t, e) {
            void 0 === e && (e = Number.POSITIVE_INFINITY),
              (this.project = t),
              (this.concurrent = e);
          }
          return (
            (t.prototype.call = function(t, e) {
              return e.subscribe(new W(t, this.project, this.concurrent));
            }),
            t
          );
        })(),
        W = (function(t) {
          function e(e, n, r) {
            void 0 === r && (r = Number.POSITIVE_INFINITY);
            var o = this;
            return (
              ((o = t.call(this, e) || this).project = n),
              (o.concurrent = r),
              (o.hasCompleted = !1),
              (o.buffer = []),
              (o.active = 0),
              (o.index = 0),
              o
            );
          }
          return (
            __extends(e, t),
            (e.prototype._next = function(t) {
              this.active < this.concurrent ? this._tryNext(t) : this.buffer.push(t);
            }),
            (e.prototype._tryNext = function(t) {
              var e,
                n = this.index++;
              try {
                e = this.project(t, n);
              } catch (r) {
                return void this.destination.error(r);
              }
              this.active++, this._innerSub(e, t, n);
            }),
            (e.prototype._innerSub = function(t, e, n) {
              var r = new I(this, void 0, void 0);
              this.destination.add(r), M(this, t, e, n, r);
            }),
            (e.prototype._complete = function() {
              (this.hasCompleted = !0),
                0 === this.active && 0 === this.buffer.length && this.destination.complete(),
                this.unsubscribe();
            }),
            (e.prototype.notifyNext = function(t, e, n, r, o) {
              this.destination.next(e);
            }),
            (e.prototype.notifyComplete = function(t) {
              var e = this.buffer;
              this.remove(t),
                this.active--,
                e.length > 0
                  ? this._next(e.shift())
                  : 0 === this.active && this.hasCompleted && this.destination.complete();
            }),
            e
          );
        })(V);
      function Q(t) {
        return t;
      }
      function K(t) {
        return void 0 === t && (t = Number.POSITIVE_INFINITY), q(Q, t);
      }
      function Z(t, e) {
        return e ? B(t, e) : new C(N(t));
      }
      function $() {
        return function(t) {
          return t.lift(new Y(t));
        };
      }
      var J,
        Y = (function() {
          function t(t) {
            this.connectable = t;
          }
          return (
            (t.prototype.call = function(t, e) {
              var n = this.connectable;
              n._refCount++;
              var r = new X(t, n),
                o = e.subscribe(r);
              return r.closed || (r.connection = n.connect()), o;
            }),
            t
          );
        })(),
        X = (function(t) {
          function e(e, n) {
            var r = this;
            return ((r = t.call(this, e) || this).connectable = n), r;
          }
          return (
            __extends(e, t),
            (e.prototype._unsubscribe = function() {
              var t = this.connectable;
              if (t) {
                this.connectable = null;
                var e = t._refCount;
                if (e <= 0) this.connection = null;
                else if (((t._refCount = e - 1), e > 1)) this.connection = null;
                else {
                  var n = this.connection,
                    r = t._connection;
                  (this.connection = null), !r || (n && r !== n) || r.unsubscribe();
                }
              } else this.connection = null;
            }),
            e
          );
        })(y),
        tt = (function(t) {
          function e(e, n) {
            var r = this;
            return (
              ((r = t.call(this) || this).source = e),
              (r.subjectFactory = n),
              (r._refCount = 0),
              (r._isComplete = !1),
              r
            );
          }
          return (
            __extends(e, t),
            (e.prototype._subscribe = function(t) {
              return this.getSubject().subscribe(t);
            }),
            (e.prototype.getSubject = function() {
              var t = this._subject;
              return (t && !t.isStopped) || (this._subject = this.subjectFactory()), this._subject;
            }),
            (e.prototype.connect = function() {
              var t = this._connection;
              return (
                t ||
                  ((this._isComplete = !1),
                  (t = this._connection = new p()).add(
                    this.source.subscribe(new nt(this.getSubject(), this)),
                  ),
                  t.closed && ((this._connection = null), (t = p.EMPTY))),
                t
              );
            }),
            (e.prototype.refCount = function() {
              return $()(this);
            }),
            e
          );
        })(C),
        et = {
          operator: { value: null },
          _refCount: { value: 0, writable: !0 },
          _subject: { value: null, writable: !0 },
          _connection: { value: null, writable: !0 },
          _subscribe: { value: (J = tt.prototype)._subscribe },
          _isComplete: { value: J._isComplete, writable: !0 },
          getSubject: { value: J.getSubject },
          connect: { value: J.connect },
          refCount: { value: J.refCount },
        },
        nt = (function(t) {
          function e(e, n) {
            var r = this;
            return ((r = t.call(this, e) || this).connectable = n), r;
          }
          return (
            __extends(e, t),
            (e.prototype._error = function(e) {
              this._unsubscribe(), t.prototype._error.call(this, e);
            }),
            (e.prototype._complete = function() {
              (this.connectable._isComplete = !0),
                this._unsubscribe(),
                t.prototype._complete.call(this);
            }),
            (e.prototype._unsubscribe = function() {
              var t = this.connectable;
              if (t) {
                this.connectable = null;
                var e = t._connection;
                (t._refCount = 0),
                  (t._subject = null),
                  (t._connection = null),
                  e && e.unsubscribe();
              }
            }),
            e
          );
        })(P);
      function rt() {
        return new O();
      }
      var ot = '__parameters__';
      function it(t, e, n) {
        var r = (function(t) {
          return function() {
            for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
            if (t) {
              var r = t.apply(void 0, e);
              for (var o in r) this[o] = r[o];
            }
          };
        })(e);
        function o() {
          for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
          if (this instanceof o) return r.apply(this, t), this;
          var n = new (o.bind.apply(o, [void 0].concat(t)))();
          return (i.annotation = n), i;
          function i(t, e, r) {
            for (
              var o = t.hasOwnProperty(ot)
                ? t[ot]
                : Object.defineProperty(t, ot, { value: [] })[ot];
              o.length <= r;

            )
              o.push(null);
            return (o[r] = o[r] || []).push(n), t;
          }
        }
        return (
          n && (o.prototype = Object.create(n.prototype)),
          (o.prototype.ngMetadataName = t),
          (o.annotationCls = o),
          o
        );
      }
      var st = it('Inject', function(t) {
          return { token: t };
        }),
        at = it('Optional'),
        ut = it('Self'),
        lt = it('SkipSelf'),
        ct = (function(t) {
          return (
            (t[(t.Default = 0)] = 'Default'),
            (t[(t.Host = 1)] = 'Host'),
            (t[(t.Self = 2)] = 'Self'),
            (t[(t.SkipSelf = 4)] = 'SkipSelf'),
            (t[(t.Optional = 8)] = 'Optional'),
            t
          );
        })({});
      function ht(t) {
        for (var e in t) if (t[e] === ht) return e;
        throw Error('Could not find renamed property on target object.');
      }
      function pt(t) {
        return {
          token: t.token,
          providedIn: t.providedIn || null,
          factory: t.factory,
          value: void 0,
        };
      }
      function ft(t) {
        var e = t[dt];
        return e && e.token === t ? e : null;
      }
      var dt = ht({ ngInjectableDef: ht });
      function yt(t) {
        if ('string' == typeof t) return t;
        if (t instanceof Array) return '[' + t.map(yt).join(', ') + ']';
        if (null == t) return '' + t;
        if (t.overriddenName) return '' + t.overriddenName;
        if (t.name) return '' + t.name;
        var e = t.toString();
        if (null == e) return '' + e;
        var n = e.indexOf('\n');
        return -1 === n ? e : e.substring(0, n);
      }
      var gt = ht({ __forward_ref__: ht });
      function mt(t) {
        return (
          (t.__forward_ref__ = mt),
          (t.toString = function() {
            return yt(this());
          }),
          t
        );
      }
      function vt(t) {
        var e = t;
        return 'function' == typeof e && e.hasOwnProperty(gt) && e.__forward_ref__ === mt ? e() : t;
      }
      var _t,
        bt = 'undefined' != typeof globalThis && globalThis,
        wt = 'undefined' != typeof window && window,
        Ct =
          'undefined' != typeof self &&
          'undefined' != typeof WorkerGlobalScope &&
          self instanceof WorkerGlobalScope &&
          self,
        St = 'undefined' != typeof global && global,
        Et = bt || St || wt || Ct,
        Tt = (function() {
          function t(t, e) {
            (this._desc = t),
              (this.ngMetadataName = 'InjectionToken'),
              (this.ngInjectableDef = void 0),
              'number' == typeof e
                ? (this.__NG_ELEMENT_ID__ = e)
                : void 0 !== e &&
                  (this.ngInjectableDef = pt({
                    token: this,
                    providedIn: e.providedIn || 'root',
                    factory: e.factory,
                  }));
          }
          return (
            (t.prototype.toString = function() {
              return 'InjectionToken ' + this._desc;
            }),
            t
          );
        })(),
        xt = new Tt('INJECTOR', -1),
        Pt = new Object(),
        Ot = /\n/gm,
        kt = '\u0275',
        At = '__source',
        It = ht({ provide: String, useValue: ht }),
        Nt = void 0;
      function Rt(t) {
        var e = Nt;
        return (Nt = t), e;
      }
      function Dt(t, e) {
        if ((void 0 === e && (e = ct.Default), void 0 === Nt))
          throw new Error('inject() must be called from an injection context');
        return null === Nt
          ? (function(t, e, n) {
              var r = ft(t);
              if (r && 'root' == r.providedIn)
                return void 0 === r.value ? (r.value = r.factory()) : r.value;
              if (n & ct.Optional) return null;
              throw new Error('Injector: NOT_FOUND [' + yt(t) + ']');
            })(t, 0, e)
          : Nt.get(t, e & ct.Optional ? null : void 0, e);
      }
      function Ft(t, e) {
        return void 0 === e && (e = ct.Default), (_t || Dt)(t, e);
      }
      var jt = (function() {
        function t() {}
        return (
          (t.prototype.get = function(t, e) {
            if ((void 0 === e && (e = Pt), e === Pt)) {
              var n = new Error('NullInjectorError: No provider for ' + yt(t) + '!');
              throw ((n.name = 'NullInjectorError'), n);
            }
            return e;
          }),
          t
        );
      })();
      function Mt(t, e, n, r) {
        void 0 === r && (r = null),
          (t = t && '\n' === t.charAt(0) && t.charAt(1) == kt ? t.substr(2) : t);
        var o = yt(e);
        if (e instanceof Array) o = e.map(yt).join(' -> ');
        else if ('object' == typeof e) {
          var i = [];
          for (var s in e)
            if (e.hasOwnProperty(s)) {
              var a = e[s];
              i.push(s + ':' + ('string' == typeof a ? JSON.stringify(a) : yt(a)));
            }
          o = '{' + i.join(', ') + '}';
        }
        return n + (r ? '(' + r + ')' : '') + '[' + o + ']: ' + t.replace(Ot, '\n  ');
      }
      var Vt = function() {},
        Lt = function() {};
      function Ut(t, e, n) {
        e >= t.length ? t.push(n) : t.splice(e, 0, n);
      }
      function Ht(t, e) {
        return e >= t.length - 1 ? t.pop() : t.splice(e, 1)[0];
      }
      var Bt = (function() {
          var t = { Emulated: 0, Native: 1, None: 2, ShadowDom: 3 };
          return (
            (t[t.Emulated] = 'Emulated'),
            (t[t.Native] = 'Native'),
            (t[t.None] = 'None'),
            (t[t.ShadowDom] = 'ShadowDom'),
            t
          );
        })(),
        zt = (
          ('undefined' != typeof requestAnimationFrame && requestAnimationFrame) ||
          setTimeout
        ).bind(Et),
        qt = 'ngDebugContext',
        Gt = 'ngOriginalError',
        Wt = 'ngErrorLogger';
      function Qt(t) {
        return t[qt];
      }
      function Kt(t) {
        return t[Gt];
      }
      function Zt(t) {
        for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
        t.error.apply(t, e);
      }
      var $t = (function() {
          function t() {
            this._console = console;
          }
          return (
            (t.prototype.handleError = function(t) {
              var e = this._findOriginalError(t),
                n = this._findContext(t),
                r = (function(t) {
                  return t[Wt] || Zt;
                })(t);
              r(this._console, 'ERROR', t),
                e && r(this._console, 'ORIGINAL ERROR', e),
                n && r(this._console, 'ERROR CONTEXT', n);
            }),
            (t.prototype._findContext = function(t) {
              return t ? (Qt(t) ? Qt(t) : this._findContext(Kt(t))) : null;
            }),
            (t.prototype._findOriginalError = function(t) {
              for (var e = Kt(t); e && Kt(e); ) e = Kt(e);
              return e;
            }),
            t
          );
        })(),
        Jt = !0,
        Yt = !1;
      function Xt() {
        return (Yt = !0), Jt;
      }
      var te = (function() {
          function t(t) {
            if (
              ((this.defaultDoc = t),
              (this.inertDocument = this.defaultDoc.implementation.createHTMLDocument(
                'sanitization-inert',
              )),
              (this.inertBodyElement = this.inertDocument.body),
              null == this.inertBodyElement)
            ) {
              var e = this.inertDocument.createElement('html');
              this.inertDocument.appendChild(e),
                (this.inertBodyElement = this.inertDocument.createElement('body')),
                e.appendChild(this.inertBodyElement);
            }
            (this.inertBodyElement.innerHTML =
              '<svg><g onload="this.parentNode.remove()"></g></svg>'),
              !this.inertBodyElement.querySelector || this.inertBodyElement.querySelector('svg')
                ? ((this.inertBodyElement.innerHTML =
                    '<svg><p><style><img src="</style><img src=x onerror=alert(1)//">'),
                  (this.getInertBodyElement =
                    this.inertBodyElement.querySelector &&
                    this.inertBodyElement.querySelector('svg img') &&
                    (function() {
                      try {
                        return !!window.DOMParser;
                      } catch (t) {
                        return !1;
                      }
                    })()
                      ? this.getInertBodyElement_DOMParser
                      : this.getInertBodyElement_InertDocument))
                : (this.getInertBodyElement = this.getInertBodyElement_XHR);
          }
          return (
            (t.prototype.getInertBodyElement_XHR = function(t) {
              t = '<body><remove></remove>' + t + '</body>';
              try {
                t = encodeURI(t);
              } catch (r) {
                return null;
              }
              var e = new XMLHttpRequest();
              (e.responseType = 'document'),
                e.open('GET', 'data:text/html;charset=utf-8,' + t, !1),
                e.send(void 0);
              var n = e.response.body;
              return n.removeChild(n.firstChild), n;
            }),
            (t.prototype.getInertBodyElement_DOMParser = function(t) {
              t = '<body><remove></remove>' + t + '</body>';
              try {
                var e = new window.DOMParser().parseFromString(t, 'text/html').body;
                return e.removeChild(e.firstChild), e;
              } catch (n) {
                return null;
              }
            }),
            (t.prototype.getInertBodyElement_InertDocument = function(t) {
              var e = this.inertDocument.createElement('template');
              return 'content' in e
                ? ((e.innerHTML = t), e)
                : ((this.inertBodyElement.innerHTML = t),
                  this.defaultDoc.documentMode && this.stripCustomNsAttrs(this.inertBodyElement),
                  this.inertBodyElement);
            }),
            (t.prototype.stripCustomNsAttrs = function(t) {
              for (var e = t.attributes, n = e.length - 1; 0 < n; n--) {
                var r = e.item(n).name;
                ('xmlns:ns1' !== r && 0 !== r.indexOf('ns1:')) || t.removeAttribute(r);
              }
              for (var o = t.firstChild; o; )
                o.nodeType === Node.ELEMENT_NODE && this.stripCustomNsAttrs(o), (o = o.nextSibling);
            }),
            t
          );
        })(),
        ee = /^(?:(?:https?|mailto|ftp|tel|file):|[^&:/?#]*(?:[/?#]|$))/gi,
        ne = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+\/]+=*$/i;
      function re(t) {
        return (t = String(t)).match(ee) || t.match(ne)
          ? t
          : (Xt() &&
              console.warn(
                'WARNING: sanitizing unsafe URL value ' + t + ' (see http://g.co/ng/security#xss)',
              ),
            'unsafe:' + t);
      }
      function oe(t) {
        for (var e = {}, n = 0, r = t.split(','); n < r.length; n++) {
          e[r[n]] = !0;
        }
        return e;
      }
      function ie() {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
        for (var n = {}, r = 0, o = t; r < o.length; r++) {
          var i = o[r];
          for (var s in i) i.hasOwnProperty(s) && (n[s] = !0);
        }
        return n;
      }
      var se,
        ae = oe('area,br,col,hr,img,wbr'),
        ue = oe('colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr'),
        le = oe('rp,rt'),
        ce = ie(le, ue),
        he = ie(
          ae,
          ie(
            ue,
            oe(
              'address,article,aside,blockquote,caption,center,del,details,dialog,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,main,map,menu,nav,ol,pre,section,summary,table,ul',
            ),
          ),
          ie(
            le,
            oe(
              'a,abbr,acronym,audio,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,picture,q,ruby,rp,rt,s,samp,small,source,span,strike,strong,sub,sup,time,track,tt,u,var,video',
            ),
          ),
          ce,
        ),
        pe = oe('background,cite,href,itemtype,longdesc,poster,src,xlink:href'),
        fe = oe('srcset'),
        de = ie(
          pe,
          fe,
          oe(
            'abbr,accesskey,align,alt,autoplay,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,controls,coords,datetime,default,dir,download,face,headers,height,hidden,hreflang,hspace,ismap,itemscope,itemprop,kind,label,lang,language,loop,media,muted,nohref,nowrap,open,preload,rel,rev,role,rows,rowspan,rules,scope,scrolling,shape,size,sizes,span,srclang,start,summary,tabindex,target,title,translate,type,usemap,valign,value,vspace,width',
          ),
          oe(
            'aria-activedescendant,aria-atomic,aria-autocomplete,aria-busy,aria-checked,aria-colcount,aria-colindex,aria-colspan,aria-controls,aria-current,aria-describedby,aria-details,aria-disabled,aria-dropeffect,aria-errormessage,aria-expanded,aria-flowto,aria-grabbed,aria-haspopup,aria-hidden,aria-invalid,aria-keyshortcuts,aria-label,aria-labelledby,aria-level,aria-live,aria-modal,aria-multiline,aria-multiselectable,aria-orientation,aria-owns,aria-placeholder,aria-posinset,aria-pressed,aria-readonly,aria-relevant,aria-required,aria-roledescription,aria-rowcount,aria-rowindex,aria-rowspan,aria-selected,aria-setsize,aria-sort,aria-valuemax,aria-valuemin,aria-valuenow,aria-valuetext',
          ),
        ),
        ye = oe('script,style,template'),
        ge = (function() {
          function t() {
            (this.sanitizedSomething = !1), (this.buf = []);
          }
          return (
            (t.prototype.sanitizeChildren = function(t) {
              for (var e = t.firstChild, n = !0; e; )
                if (
                  (e.nodeType === Node.ELEMENT_NODE
                    ? (n = this.startElement(e))
                    : e.nodeType === Node.TEXT_NODE
                    ? this.chars(e.nodeValue)
                    : (this.sanitizedSomething = !0),
                  n && e.firstChild)
                )
                  e = e.firstChild;
                else
                  for (; e; ) {
                    e.nodeType === Node.ELEMENT_NODE && this.endElement(e);
                    var r = this.checkClobberedElement(e, e.nextSibling);
                    if (r) {
                      e = r;
                      break;
                    }
                    e = this.checkClobberedElement(e, e.parentNode);
                  }
              return this.buf.join('');
            }),
            (t.prototype.startElement = function(t) {
              var e = t.nodeName.toLowerCase();
              if (!he.hasOwnProperty(e))
                return (this.sanitizedSomething = !0), !ye.hasOwnProperty(e);
              this.buf.push('<'), this.buf.push(e);
              for (var n, r = t.attributes, o = 0; o < r.length; o++) {
                var i = r.item(o),
                  s = i.name,
                  a = s.toLowerCase();
                if (de.hasOwnProperty(a)) {
                  var u = i.value;
                  pe[a] && (u = re(u)),
                    fe[a] &&
                      ((n = u),
                      (u = (n = String(n))
                        .split(',')
                        .map(function(t) {
                          return re(t.trim());
                        })
                        .join(', '))),
                    this.buf.push(' ', s, '="', _e(u), '"');
                } else this.sanitizedSomething = !0;
              }
              return this.buf.push('>'), !0;
            }),
            (t.prototype.endElement = function(t) {
              var e = t.nodeName.toLowerCase();
              he.hasOwnProperty(e) &&
                !ae.hasOwnProperty(e) &&
                (this.buf.push('</'), this.buf.push(e), this.buf.push('>'));
            }),
            (t.prototype.chars = function(t) {
              this.buf.push(_e(t));
            }),
            (t.prototype.checkClobberedElement = function(t, e) {
              if (
                e &&
                (t.compareDocumentPosition(e) & Node.DOCUMENT_POSITION_CONTAINED_BY) ===
                  Node.DOCUMENT_POSITION_CONTAINED_BY
              )
                throw new Error(
                  'Failed to sanitize html because the element is clobbered: ' + t.outerHTML,
                );
              return e;
            }),
            t
          );
        })(),
        me = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g,
        ve = /([^\#-~ |!])/g;
      function _e(t) {
        return t
          .replace(/&/g, '&amp;')
          .replace(me, function(t) {
            return (
              '&#' + (1024 * (t.charCodeAt(0) - 55296) + (t.charCodeAt(1) - 56320) + 65536) + ';'
            );
          })
          .replace(ve, function(t) {
            return '&#' + t.charCodeAt(0) + ';';
          })
          .replace(/</g, '&lt;')
          .replace(/>/g, '&gt;');
      }
      function be(t) {
        return 'content' in t &&
          (function(t) {
            return t.nodeType === Node.ELEMENT_NODE && 'TEMPLATE' === t.nodeName;
          })(t)
          ? t.content
          : null;
      }
      var we = (function() {
          var t = { NONE: 0, HTML: 1, STYLE: 2, SCRIPT: 3, URL: 4, RESOURCE_URL: 5 };
          return (
            (t[t.NONE] = 'NONE'),
            (t[t.HTML] = 'HTML'),
            (t[t.STYLE] = 'STYLE'),
            (t[t.SCRIPT] = 'SCRIPT'),
            (t[t.URL] = 'URL'),
            (t[t.RESOURCE_URL] = 'RESOURCE_URL'),
            t
          );
        })(),
        Ce = function() {},
        Se = new RegExp(
          '^([-,."\'%_!# a-zA-Z0-9]+|(?:(?:matrix|translate|scale|rotate|skew|perspective)(?:X|Y|Z|3d)?|(?:rgb|hsl)a?|(?:repeating-)?(?:linear|radial)-gradient|(?:calc|attr))\\([-0-9.%, #a-zA-Z]+\\))$',
          'g',
        ),
        Ee = /^url\(([^)]+)\)$/,
        Te = /([A-Z])/g;
      function xe(t) {
        try {
          return null != t ? t.toString().slice(0, 30) : t;
        } catch (e) {
          return '[ERROR] Exception while trying to serialize the value';
        }
      }
      var Pe = (function() {
          var t = function() {};
          return (
            (t.__NG_ELEMENT_ID__ = function() {
              return Oe();
            }),
            t
          );
        })(),
        Oe = function() {
          for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
        },
        ke = new Tt('The presence of this token marks an injector as being the root injector.'),
        Ae = function(t, e, n) {
          return new je(t, e, n);
        },
        Ie = (function() {
          var t = (function() {
            function t() {}
            return (
              (t.create = function(t, e) {
                return Array.isArray(t) ? Ae(t, e, '') : Ae(t.providers, t.parent, t.name || '');
              }),
              t
            );
          })();
          return (
            (t.THROW_IF_NOT_FOUND = Pt),
            (t.NULL = new jt()),
            (t.ngInjectableDef = pt({
              token: t,
              providedIn: 'any',
              factory: function() {
                return Ft(xt);
              },
            })),
            (t.__NG_ELEMENT_ID__ = -1),
            t
          );
        })(),
        Ne = function(t) {
          return t;
        },
        Re = [],
        De = Ne,
        Fe = function() {
          return Array.prototype.slice.call(arguments);
        },
        je = (function() {
          function t(t, e, n) {
            void 0 === e && (e = Ie.NULL),
              void 0 === n && (n = null),
              (this.parent = e),
              (this.source = n);
            var r = (this._records = new Map());
            r.set(Ie, { token: Ie, fn: Ne, deps: Re, value: this, useNew: !1 }),
              r.set(xt, { token: xt, fn: Ne, deps: Re, value: this, useNew: !1 }),
              (function t(e, n) {
                if (n)
                  if ((n = vt(n)) instanceof Array) for (var r = 0; r < n.length; r++) t(e, n[r]);
                  else {
                    if ('function' == typeof n) throw Ve('Function/Class not supported', n);
                    if (!n || 'object' != typeof n || !n.provide)
                      throw Ve('Unexpected provider', n);
                    var o = vt(n.provide),
                      i = (function(t) {
                        var e = (function(t) {
                            var e = Re,
                              n = t.deps;
                            if (n && n.length) {
                              e = [];
                              for (var r = 0; r < n.length; r++) {
                                var o = 6,
                                  i = vt(n[r]);
                                if (i instanceof Array)
                                  for (var s = 0, a = i; s < a.length; s++) {
                                    var u = a[s];
                                    u instanceof at || u == at
                                      ? (o |= 1)
                                      : u instanceof lt || u == lt
                                      ? (o &= -3)
                                      : u instanceof ut || u == ut
                                      ? (o &= -5)
                                      : (i = u instanceof st ? u.token : vt(u));
                                  }
                                e.push({ token: i, options: o });
                              }
                            } else if (t.useExisting)
                              e = [{ token: vt(t.useExisting), options: 6 }];
                            else if (!(n || It in t)) throw Ve("'deps' required", t);
                            return e;
                          })(t),
                          n = Ne,
                          r = Re,
                          o = !1,
                          i = vt(t.provide);
                        if (It in t) r = t.useValue;
                        else if (t.useFactory) n = t.useFactory;
                        else if (t.useExisting);
                        else if (t.useClass) (o = !0), (n = vt(t.useClass));
                        else {
                          if ('function' != typeof i)
                            throw Ve(
                              'StaticProvider does not have [useValue|useFactory|useExisting|useClass] or [provide] is not newable',
                              t,
                            );
                          (o = !0), (n = i);
                        }
                        return { deps: e, fn: n, useNew: o, value: r };
                      })(n);
                    if (!0 === n.multi) {
                      var s = e.get(o);
                      if (s) {
                        if (s.fn !== Fe) throw Me(o);
                      } else
                        e.set(
                          o,
                          (s = { token: n.provide, deps: [], useNew: !1, fn: Fe, value: Re }),
                        );
                      s.deps.push({ token: (o = n), options: 6 });
                    }
                    var a = e.get(o);
                    if (a && a.fn == Fe) throw Me(o);
                    e.set(o, i);
                  }
              })(r, t);
          }
          return (
            (t.prototype.get = function(t, e, n) {
              void 0 === n && (n = ct.Default);
              var r = this._records.get(t);
              try {
                return (function t(e, n, r, o, i, s) {
                  try {
                    return (function(e, n, r, o, i, s) {
                      var a;
                      if (!n || s & ct.SkipSelf) s & ct.Self || (a = o.get(e, i, ct.Default));
                      else {
                        if ((a = n.value) == De) throw Error('\u0275Circular dependency');
                        if (a === Re) {
                          n.value = De;
                          var u = n.useNew,
                            l = n.fn,
                            c = n.deps,
                            h = Re;
                          if (c.length) {
                            h = [];
                            for (var p = 0; p < c.length; p++) {
                              var f = c[p],
                                d = f.options,
                                y = 2 & d ? r.get(f.token) : void 0;
                              h.push(
                                t(
                                  f.token,
                                  y,
                                  r,
                                  y || 4 & d ? o : Ie.NULL,
                                  1 & d ? null : Ie.THROW_IF_NOT_FOUND,
                                  ct.Default,
                                ),
                              );
                            }
                          }
                          n.value = a = u
                            ? new (l.bind.apply(l, [void 0].concat(h)))()
                            : l.apply(void 0, h);
                        }
                      }
                      return a;
                    })(e, n, r, o, i, s);
                  } catch (a) {
                    throw (a instanceof Error || (a = new Error(a)),
                    (a.ngTempTokenPath = a.ngTempTokenPath || []).unshift(e),
                    n && n.value == De && (n.value = Re),
                    a);
                  }
                })(t, r, this._records, this.parent, e, n);
              } catch (o) {
                return (function(t, e, n, r) {
                  var o = t.ngTempTokenPath;
                  throw (e[At] && o.unshift(e[At]),
                  (t.message = Mt('\n' + t.message, o, 'StaticInjectorError', r)),
                  (t.ngTokenPath = o),
                  (t.ngTempTokenPath = null),
                  t);
                })(o, t, 0, this.source);
              }
            }),
            (t.prototype.toString = function() {
              var t = [];
              return (
                this._records.forEach(function(e, n) {
                  return t.push(yt(n));
                }),
                'StaticInjector[' + t.join(', ') + ']'
              );
            }),
            t
          );
        })();
      function Me(t) {
        return Ve('Cannot mix multi providers and regular providers', t);
      }
      function Ve(t, e) {
        return new Error(Mt(t, e, 'StaticInjectorError'));
      }
      var Le = new Tt('AnalyzeForEntryComponents'),
        Ue = null;
      function He() {
        if (!Ue) {
          var t = Et.Symbol;
          if (t && t.iterator) Ue = t.iterator;
          else
            for (var e = Object.getOwnPropertyNames(Map.prototype), n = 0; n < e.length; ++n) {
              var r = e[n];
              'entries' !== r &&
                'size' !== r &&
                Map.prototype[r] === Map.prototype.entries &&
                (Ue = r);
            }
        }
        return Ue;
      }
      function Be(t, e) {
        return t === e || ('number' == typeof t && 'number' == typeof e && isNaN(t) && isNaN(e));
      }
      function ze(t, e) {
        var n = Ge(t),
          r = Ge(e);
        return n && r
          ? (function(t, e, n) {
              for (var r = t[He()](), o = e[He()](); ; ) {
                var i = r.next(),
                  s = o.next();
                if (i.done && s.done) return !0;
                if (i.done || s.done) return !1;
                if (!n(i.value, s.value)) return !1;
              }
            })(t, e, ze)
          : !(
              n ||
              !(t && ('object' == typeof t || 'function' == typeof t)) ||
              r ||
              !(e && ('object' == typeof e || 'function' == typeof e))
            ) || Be(t, e);
      }
      var qe = (function() {
        function t(t) {
          this.wrapped = t;
        }
        return (
          (t.wrap = function(e) {
            return new t(e);
          }),
          (t.unwrap = function(e) {
            return t.isWrapped(e) ? e.wrapped : e;
          }),
          (t.isWrapped = function(e) {
            return e instanceof t;
          }),
          t
        );
      })();
      function Ge(t) {
        return !!We(t) && (Array.isArray(t) || (!(t instanceof Map) && He() in t));
      }
      function We(t) {
        return null !== t && ('function' == typeof t || 'object' == typeof t);
      }
      function Qe(t) {
        return !!t && 'function' == typeof t.then;
      }
      function Ke(t) {
        return !!t && 'function' == typeof t.subscribe;
      }
      var Ze = (function() {
          function t(t, e, n) {
            (this.previousValue = t), (this.currentValue = e), (this.firstChange = n);
          }
          return (
            (t.prototype.isFirstChange = function() {
              return this.firstChange;
            }),
            t
          );
        })(),
        $e = function() {},
        Je = function() {};
      function Ye(t) {
        var e = Error(
          'No component factory found for ' +
            yt(t) +
            '. Did you add it to @NgModule.entryComponents?',
        );
        return (e[Xe] = t), e;
      }
      var Xe = 'ngComponent',
        tn = (function() {
          function t() {}
          return (
            (t.prototype.resolveComponentFactory = function(t) {
              throw Ye(t);
            }),
            t
          );
        })(),
        en = (function() {
          var t = function() {};
          return (t.NULL = new tn()), t;
        })(),
        nn = (function() {
          function t(t, e, n) {
            (this._parent = e), (this._ngModule = n), (this._factories = new Map());
            for (var r = 0; r < t.length; r++) {
              var o = t[r];
              this._factories.set(o.componentType, o);
            }
          }
          return (
            (t.prototype.resolveComponentFactory = function(t) {
              var e = this._factories.get(t);
              if ((!e && this._parent && (e = this._parent.resolveComponentFactory(t)), !e))
                throw Ye(t);
              return new rn(e, this._ngModule);
            }),
            t
          );
        })(),
        rn = (function(t) {
          function e(e, n) {
            var r = this;
            return (
              ((r = t.call(this) || this).factory = e),
              (r.ngModule = n),
              (r.selector = e.selector),
              (r.componentType = e.componentType),
              (r.ngContentSelectors = e.ngContentSelectors),
              (r.inputs = e.inputs),
              (r.outputs = e.outputs),
              r
            );
          }
          return (
            __extends(e, t),
            (e.prototype.create = function(t, e, n, r) {
              return this.factory.create(t, e, n, r || this.ngModule);
            }),
            e
          );
        })(Je);
      function on() {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
      }
      var sn = (function() {
          var t = function(t) {
            this.nativeElement = t;
          };
          return (
            (t.__NG_ELEMENT_ID__ = function() {
              return an(t);
            }),
            t
          );
        })(),
        an = on,
        un = function() {},
        ln = function() {},
        cn = (function() {
          var t = { Important: 1, DashCase: 2 };
          return (t[t.Important] = 'Important'), (t[t.DashCase] = 'DashCase'), t;
        })(),
        hn = (function() {
          var t = function() {};
          return (
            (t.__NG_ELEMENT_ID__ = function() {
              return pn();
            }),
            t
          );
        })(),
        pn = on,
        fn = new (function(t) {
          (this.full = t),
            (this.major = t.split('.')[0]),
            (this.minor = t.split('.')[1]),
            (this.patch = t
              .split('.')
              .slice(2)
              .join('.'));
        })('8.2.14'),
        dn = (function() {
          function t() {}
          return (
            (t.prototype.supports = function(t) {
              return Ge(t);
            }),
            (t.prototype.create = function(t) {
              return new gn(t);
            }),
            t
          );
        })(),
        yn = function(t, e) {
          return e;
        },
        gn = (function() {
          function t(t) {
            (this.length = 0),
              (this._linkedRecords = null),
              (this._unlinkedRecords = null),
              (this._previousItHead = null),
              (this._itHead = null),
              (this._itTail = null),
              (this._additionsHead = null),
              (this._additionsTail = null),
              (this._movesHead = null),
              (this._movesTail = null),
              (this._removalsHead = null),
              (this._removalsTail = null),
              (this._identityChangesHead = null),
              (this._identityChangesTail = null),
              (this._trackByFn = t || yn);
          }
          return (
            (t.prototype.forEachItem = function(t) {
              var e;
              for (e = this._itHead; null !== e; e = e._next) t(e);
            }),
            (t.prototype.forEachOperation = function(t) {
              for (var e = this._itHead, n = this._removalsHead, r = 0, o = null; e || n; ) {
                var i = !n || (e && e.currentIndex < bn(n, r, o)) ? e : n,
                  s = bn(i, r, o),
                  a = i.currentIndex;
                if (i === n) r--, (n = n._nextRemoved);
                else if (((e = e._next), null == i.previousIndex)) r++;
                else {
                  o || (o = []);
                  var u = s - r,
                    l = a - r;
                  if (u != l) {
                    for (var c = 0; c < u; c++) {
                      var h = c < o.length ? o[c] : (o[c] = 0),
                        p = h + c;
                      l <= p && p < u && (o[c] = h + 1);
                    }
                    o[i.previousIndex] = l - u;
                  }
                }
                s !== a && t(i, s, a);
              }
            }),
            (t.prototype.forEachPreviousItem = function(t) {
              var e;
              for (e = this._previousItHead; null !== e; e = e._nextPrevious) t(e);
            }),
            (t.prototype.forEachAddedItem = function(t) {
              var e;
              for (e = this._additionsHead; null !== e; e = e._nextAdded) t(e);
            }),
            (t.prototype.forEachMovedItem = function(t) {
              var e;
              for (e = this._movesHead; null !== e; e = e._nextMoved) t(e);
            }),
            (t.prototype.forEachRemovedItem = function(t) {
              var e;
              for (e = this._removalsHead; null !== e; e = e._nextRemoved) t(e);
            }),
            (t.prototype.forEachIdentityChange = function(t) {
              var e;
              for (e = this._identityChangesHead; null !== e; e = e._nextIdentityChange) t(e);
            }),
            (t.prototype.diff = function(t) {
              if ((null == t && (t = []), !Ge(t)))
                throw new Error(
                  "Error trying to diff '" + yt(t) + "'. Only arrays and iterables are allowed",
                );
              return this.check(t) ? this : null;
            }),
            (t.prototype.onDestroy = function() {}),
            (t.prototype.check = function(t) {
              var e = this;
              this._reset();
              var n,
                r,
                o,
                i = this._itHead,
                s = !1;
              if (Array.isArray(t)) {
                this.length = t.length;
                for (var a = 0; a < this.length; a++)
                  (o = this._trackByFn(a, (r = t[a]))),
                    null !== i && Be(i.trackById, o)
                      ? (s && (i = this._verifyReinsertion(i, r, o, a)),
                        Be(i.item, r) || this._addIdentityChange(i, r))
                      : ((i = this._mismatch(i, r, o, a)), (s = !0)),
                    (i = i._next);
              } else
                (n = 0),
                  (function(t, e) {
                    if (Array.isArray(t)) for (var n = 0; n < t.length; n++) e(t[n]);
                    else for (var r, o = t[He()](); !(r = o.next()).done; ) e(r.value);
                  })(t, function(t) {
                    (o = e._trackByFn(n, t)),
                      null !== i && Be(i.trackById, o)
                        ? (s && (i = e._verifyReinsertion(i, t, o, n)),
                          Be(i.item, t) || e._addIdentityChange(i, t))
                        : ((i = e._mismatch(i, t, o, n)), (s = !0)),
                      (i = i._next),
                      n++;
                  }),
                  (this.length = n);
              return this._truncate(i), (this.collection = t), this.isDirty;
            }),
            Object.defineProperty(t.prototype, 'isDirty', {
              get: function() {
                return (
                  null !== this._additionsHead ||
                  null !== this._movesHead ||
                  null !== this._removalsHead ||
                  null !== this._identityChangesHead
                );
              },
              enumerable: !0,
              configurable: !0,
            }),
            (t.prototype._reset = function() {
              if (this.isDirty) {
                var t = void 0,
                  e = void 0;
                for (t = this._previousItHead = this._itHead; null !== t; t = t._next)
                  t._nextPrevious = t._next;
                for (t = this._additionsHead; null !== t; t = t._nextAdded)
                  t.previousIndex = t.currentIndex;
                for (
                  this._additionsHead = this._additionsTail = null, t = this._movesHead;
                  null !== t;
                  t = e
                )
                  (t.previousIndex = t.currentIndex), (e = t._nextMoved);
                (this._movesHead = this._movesTail = null),
                  (this._removalsHead = this._removalsTail = null),
                  (this._identityChangesHead = this._identityChangesTail = null);
              }
            }),
            (t.prototype._mismatch = function(t, e, n, r) {
              var o;
              return (
                null === t ? (o = this._itTail) : ((o = t._prev), this._remove(t)),
                null !== (t = null === this._linkedRecords ? null : this._linkedRecords.get(n, r))
                  ? (Be(t.item, e) || this._addIdentityChange(t, e), this._moveAfter(t, o, r))
                  : null !==
                    (t = null === this._unlinkedRecords ? null : this._unlinkedRecords.get(n, null))
                  ? (Be(t.item, e) || this._addIdentityChange(t, e), this._reinsertAfter(t, o, r))
                  : (t = this._addAfter(new mn(e, n), o, r)),
                t
              );
            }),
            (t.prototype._verifyReinsertion = function(t, e, n, r) {
              var o = null === this._unlinkedRecords ? null : this._unlinkedRecords.get(n, null);
              return (
                null !== o
                  ? (t = this._reinsertAfter(o, t._prev, r))
                  : t.currentIndex != r && ((t.currentIndex = r), this._addToMoves(t, r)),
                t
              );
            }),
            (t.prototype._truncate = function(t) {
              for (; null !== t; ) {
                var e = t._next;
                this._addToRemovals(this._unlink(t)), (t = e);
              }
              null !== this._unlinkedRecords && this._unlinkedRecords.clear(),
                null !== this._additionsTail && (this._additionsTail._nextAdded = null),
                null !== this._movesTail && (this._movesTail._nextMoved = null),
                null !== this._itTail && (this._itTail._next = null),
                null !== this._removalsTail && (this._removalsTail._nextRemoved = null),
                null !== this._identityChangesTail &&
                  (this._identityChangesTail._nextIdentityChange = null);
            }),
            (t.prototype._reinsertAfter = function(t, e, n) {
              null !== this._unlinkedRecords && this._unlinkedRecords.remove(t);
              var r = t._prevRemoved,
                o = t._nextRemoved;
              return (
                null === r ? (this._removalsHead = o) : (r._nextRemoved = o),
                null === o ? (this._removalsTail = r) : (o._prevRemoved = r),
                this._insertAfter(t, e, n),
                this._addToMoves(t, n),
                t
              );
            }),
            (t.prototype._moveAfter = function(t, e, n) {
              return this._unlink(t), this._insertAfter(t, e, n), this._addToMoves(t, n), t;
            }),
            (t.prototype._addAfter = function(t, e, n) {
              return (
                this._insertAfter(t, e, n),
                (this._additionsTail =
                  null === this._additionsTail
                    ? (this._additionsHead = t)
                    : (this._additionsTail._nextAdded = t)),
                t
              );
            }),
            (t.prototype._insertAfter = function(t, e, n) {
              var r = null === e ? this._itHead : e._next;
              return (
                (t._next = r),
                (t._prev = e),
                null === r ? (this._itTail = t) : (r._prev = t),
                null === e ? (this._itHead = t) : (e._next = t),
                null === this._linkedRecords && (this._linkedRecords = new _n()),
                this._linkedRecords.put(t),
                (t.currentIndex = n),
                t
              );
            }),
            (t.prototype._remove = function(t) {
              return this._addToRemovals(this._unlink(t));
            }),
            (t.prototype._unlink = function(t) {
              null !== this._linkedRecords && this._linkedRecords.remove(t);
              var e = t._prev,
                n = t._next;
              return (
                null === e ? (this._itHead = n) : (e._next = n),
                null === n ? (this._itTail = e) : (n._prev = e),
                t
              );
            }),
            (t.prototype._addToMoves = function(t, e) {
              return t.previousIndex === e
                ? t
                : ((this._movesTail =
                    null === this._movesTail
                      ? (this._movesHead = t)
                      : (this._movesTail._nextMoved = t)),
                  t);
            }),
            (t.prototype._addToRemovals = function(t) {
              return (
                null === this._unlinkedRecords && (this._unlinkedRecords = new _n()),
                this._unlinkedRecords.put(t),
                (t.currentIndex = null),
                (t._nextRemoved = null),
                null === this._removalsTail
                  ? ((this._removalsTail = this._removalsHead = t), (t._prevRemoved = null))
                  : ((t._prevRemoved = this._removalsTail),
                    (this._removalsTail = this._removalsTail._nextRemoved = t)),
                t
              );
            }),
            (t.prototype._addIdentityChange = function(t, e) {
              return (
                (t.item = e),
                (this._identityChangesTail =
                  null === this._identityChangesTail
                    ? (this._identityChangesHead = t)
                    : (this._identityChangesTail._nextIdentityChange = t)),
                t
              );
            }),
            t
          );
        })(),
        mn = function(t, e) {
          (this.item = t),
            (this.trackById = e),
            (this.currentIndex = null),
            (this.previousIndex = null),
            (this._nextPrevious = null),
            (this._prev = null),
            (this._next = null),
            (this._prevDup = null),
            (this._nextDup = null),
            (this._prevRemoved = null),
            (this._nextRemoved = null),
            (this._nextAdded = null),
            (this._nextMoved = null),
            (this._nextIdentityChange = null);
        },
        vn = (function() {
          function t() {
            (this._head = null), (this._tail = null);
          }
          return (
            (t.prototype.add = function(t) {
              null === this._head
                ? ((this._head = this._tail = t), (t._nextDup = null), (t._prevDup = null))
                : ((this._tail._nextDup = t),
                  (t._prevDup = this._tail),
                  (t._nextDup = null),
                  (this._tail = t));
            }),
            (t.prototype.get = function(t, e) {
              var n;
              for (n = this._head; null !== n; n = n._nextDup)
                if ((null === e || e <= n.currentIndex) && Be(n.trackById, t)) return n;
              return null;
            }),
            (t.prototype.remove = function(t) {
              var e = t._prevDup,
                n = t._nextDup;
              return (
                null === e ? (this._head = n) : (e._nextDup = n),
                null === n ? (this._tail = e) : (n._prevDup = e),
                null === this._head
              );
            }),
            t
          );
        })(),
        _n = (function() {
          function t() {
            this.map = new Map();
          }
          return (
            (t.prototype.put = function(t) {
              var e = t.trackById,
                n = this.map.get(e);
              n || ((n = new vn()), this.map.set(e, n)), n.add(t);
            }),
            (t.prototype.get = function(t, e) {
              var n = this.map.get(t);
              return n ? n.get(t, e) : null;
            }),
            (t.prototype.remove = function(t) {
              var e = t.trackById;
              return this.map.get(e).remove(t) && this.map.delete(e), t;
            }),
            Object.defineProperty(t.prototype, 'isEmpty', {
              get: function() {
                return 0 === this.map.size;
              },
              enumerable: !0,
              configurable: !0,
            }),
            (t.prototype.clear = function() {
              this.map.clear();
            }),
            t
          );
        })();
      function bn(t, e, n) {
        var r = t.previousIndex;
        if (null === r) return r;
        var o = 0;
        return n && r < n.length && (o = n[r]), r + e + o;
      }
      var wn = (function() {
          function t() {}
          return (
            (t.prototype.supports = function(t) {
              return t instanceof Map || We(t);
            }),
            (t.prototype.create = function() {
              return new Cn();
            }),
            t
          );
        })(),
        Cn = (function() {
          function t() {
            (this._records = new Map()),
              (this._mapHead = null),
              (this._appendAfter = null),
              (this._previousMapHead = null),
              (this._changesHead = null),
              (this._changesTail = null),
              (this._additionsHead = null),
              (this._additionsTail = null),
              (this._removalsHead = null),
              (this._removalsTail = null);
          }
          return (
            Object.defineProperty(t.prototype, 'isDirty', {
              get: function() {
                return (
                  null !== this._additionsHead ||
                  null !== this._changesHead ||
                  null !== this._removalsHead
                );
              },
              enumerable: !0,
              configurable: !0,
            }),
            (t.prototype.forEachItem = function(t) {
              var e;
              for (e = this._mapHead; null !== e; e = e._next) t(e);
            }),
            (t.prototype.forEachPreviousItem = function(t) {
              var e;
              for (e = this._previousMapHead; null !== e; e = e._nextPrevious) t(e);
            }),
            (t.prototype.forEachChangedItem = function(t) {
              var e;
              for (e = this._changesHead; null !== e; e = e._nextChanged) t(e);
            }),
            (t.prototype.forEachAddedItem = function(t) {
              var e;
              for (e = this._additionsHead; null !== e; e = e._nextAdded) t(e);
            }),
            (t.prototype.forEachRemovedItem = function(t) {
              var e;
              for (e = this._removalsHead; null !== e; e = e._nextRemoved) t(e);
            }),
            (t.prototype.diff = function(t) {
              if (t) {
                if (!(t instanceof Map || We(t)))
                  throw new Error(
                    "Error trying to diff '" + yt(t) + "'. Only maps and objects are allowed",
                  );
              } else t = new Map();
              return this.check(t) ? this : null;
            }),
            (t.prototype.onDestroy = function() {}),
            (t.prototype.check = function(t) {
              var e = this;
              this._reset();
              var n = this._mapHead;
              if (
                ((this._appendAfter = null),
                this._forEach(t, function(t, r) {
                  if (n && n.key === r)
                    e._maybeAddToChanges(n, t), (e._appendAfter = n), (n = n._next);
                  else {
                    var o = e._getOrCreateRecordForKey(r, t);
                    n = e._insertBeforeOrAppend(n, o);
                  }
                }),
                n)
              ) {
                n._prev && (n._prev._next = null), (this._removalsHead = n);
                for (var r = n; null !== r; r = r._nextRemoved)
                  r === this._mapHead && (this._mapHead = null),
                    this._records.delete(r.key),
                    (r._nextRemoved = r._next),
                    (r.previousValue = r.currentValue),
                    (r.currentValue = null),
                    (r._prev = null),
                    (r._next = null);
              }
              return (
                this._changesTail && (this._changesTail._nextChanged = null),
                this._additionsTail && (this._additionsTail._nextAdded = null),
                this.isDirty
              );
            }),
            (t.prototype._insertBeforeOrAppend = function(t, e) {
              if (t) {
                var n = t._prev;
                return (
                  (e._next = t),
                  (e._prev = n),
                  (t._prev = e),
                  n && (n._next = e),
                  t === this._mapHead && (this._mapHead = e),
                  (this._appendAfter = t),
                  t
                );
              }
              return (
                this._appendAfter
                  ? ((this._appendAfter._next = e), (e._prev = this._appendAfter))
                  : (this._mapHead = e),
                (this._appendAfter = e),
                null
              );
            }),
            (t.prototype._getOrCreateRecordForKey = function(t, e) {
              if (this._records.has(t)) {
                var n = this._records.get(t);
                this._maybeAddToChanges(n, e);
                var r = n._prev,
                  o = n._next;
                return (
                  r && (r._next = o), o && (o._prev = r), (n._next = null), (n._prev = null), n
                );
              }
              var i = new Sn(t);
              return this._records.set(t, i), (i.currentValue = e), this._addToAdditions(i), i;
            }),
            (t.prototype._reset = function() {
              if (this.isDirty) {
                var t = void 0;
                for (
                  this._previousMapHead = this._mapHead, t = this._previousMapHead;
                  null !== t;
                  t = t._next
                )
                  t._nextPrevious = t._next;
                for (t = this._changesHead; null !== t; t = t._nextChanged)
                  t.previousValue = t.currentValue;
                for (t = this._additionsHead; null != t; t = t._nextAdded)
                  t.previousValue = t.currentValue;
                (this._changesHead = this._changesTail = null),
                  (this._additionsHead = this._additionsTail = null),
                  (this._removalsHead = null);
              }
            }),
            (t.prototype._maybeAddToChanges = function(t, e) {
              Be(e, t.currentValue) ||
                ((t.previousValue = t.currentValue), (t.currentValue = e), this._addToChanges(t));
            }),
            (t.prototype._addToAdditions = function(t) {
              null === this._additionsHead
                ? (this._additionsHead = this._additionsTail = t)
                : ((this._additionsTail._nextAdded = t), (this._additionsTail = t));
            }),
            (t.prototype._addToChanges = function(t) {
              null === this._changesHead
                ? (this._changesHead = this._changesTail = t)
                : ((this._changesTail._nextChanged = t), (this._changesTail = t));
            }),
            (t.prototype._forEach = function(t, e) {
              t instanceof Map
                ? t.forEach(e)
                : Object.keys(t).forEach(function(n) {
                    return e(t[n], n);
                  });
            }),
            t
          );
        })(),
        Sn = function(t) {
          (this.key = t),
            (this.previousValue = null),
            (this.currentValue = null),
            (this._nextPrevious = null),
            (this._next = null),
            (this._prev = null),
            (this._nextAdded = null),
            (this._nextRemoved = null),
            (this._nextChanged = null);
        },
        En = (function() {
          var t = (function() {
            function t(t) {
              this.factories = t;
            }
            return (
              (t.create = function(e, n) {
                if (null != n) {
                  var r = n.factories.slice();
                  e = e.concat(r);
                }
                return new t(e);
              }),
              (t.extend = function(e) {
                return {
                  provide: t,
                  useFactory: function(n) {
                    if (!n)
                      throw new Error('Cannot extend IterableDiffers without a parent injector');
                    return t.create(e, n);
                  },
                  deps: [[t, new lt(), new at()]],
                };
              }),
              (t.prototype.find = function(t) {
                var e,
                  n = this.factories.find(function(e) {
                    return e.supports(t);
                  });
                if (null != n) return n;
                throw new Error(
                  "Cannot find a differ supporting object '" +
                    t +
                    "' of type '" +
                    ((e = t).name || typeof e) +
                    "'",
                );
              }),
              t
            );
          })();
          return (
            (t.ngInjectableDef = pt({
              token: t,
              providedIn: 'root',
              factory: function() {
                return new t([new dn()]);
              },
            })),
            t
          );
        })(),
        Tn = (function() {
          var t = (function() {
            function t(t) {
              this.factories = t;
            }
            return (
              (t.create = function(e, n) {
                if (n) {
                  var r = n.factories.slice();
                  e = e.concat(r);
                }
                return new t(e);
              }),
              (t.extend = function(e) {
                return {
                  provide: t,
                  useFactory: function(n) {
                    if (!n)
                      throw new Error('Cannot extend KeyValueDiffers without a parent injector');
                    return t.create(e, n);
                  },
                  deps: [[t, new lt(), new at()]],
                };
              }),
              (t.prototype.find = function(t) {
                var e = this.factories.find(function(e) {
                  return e.supports(t);
                });
                if (e) return e;
                throw new Error("Cannot find a differ supporting object '" + t + "'");
              }),
              t
            );
          })();
          return (
            (t.ngInjectableDef = pt({
              token: t,
              providedIn: 'root',
              factory: function() {
                return new t([new wn()]);
              },
            })),
            t
          );
        })(),
        xn = [new wn()],
        Pn = new En([new dn()]),
        On = new Tn(xn),
        kn = (function() {
          var t = function() {};
          return (
            (t.__NG_ELEMENT_ID__ = function() {
              return An(t, sn);
            }),
            t
          );
        })(),
        An = on,
        In = (function() {
          var t = function() {};
          return (
            (t.__NG_ELEMENT_ID__ = function() {
              return Nn(t, sn);
            }),
            t
          );
        })(),
        Nn = on;
      function Rn(t, e, n, r) {
        var o =
          "ExpressionChangedAfterItHasBeenCheckedError: Expression has changed after it was checked. Previous value: '" +
          e +
          "'. Current value: '" +
          n +
          "'.";
        return (
          r &&
            (o +=
              ' It seems like the view has been created after its parent and its children have been dirty checked. Has it been created in a change detection hook ?'),
          (function(t, e) {
            var n = new Error(t);
            return Dn(n, e), n;
          })(o, t)
        );
      }
      function Dn(t, e) {
        (t[qt] = e), (t[Wt] = e.logError.bind(e));
      }
      function Fn(t) {
        return new Error('ViewDestroyedError: Attempt to use a destroyed view: ' + t);
      }
      function jn(t, e, n) {
        var r = t.state,
          o = 1792 & r;
        return o === e ? ((t.state = (-1793 & r) | n), (t.initIndex = -1), !0) : o === n;
      }
      function Mn(t, e, n) {
        return (1792 & t.state) === e && t.initIndex <= n && ((t.initIndex = n + 1), !0);
      }
      function Vn(t, e) {
        return t.nodes[e];
      }
      function Ln(t, e) {
        return t.nodes[e];
      }
      function Un(t, e) {
        return t.nodes[e];
      }
      function Hn(t, e) {
        return t.nodes[e];
      }
      function Bn(t, e) {
        return t.nodes[e];
      }
      var zn = {
          setCurrentNode: void 0,
          createRootView: void 0,
          createEmbeddedView: void 0,
          createComponentView: void 0,
          createNgModuleRef: void 0,
          overrideProvider: void 0,
          overrideComponentView: void 0,
          clearOverrides: void 0,
          checkAndUpdateView: void 0,
          checkNoChangesView: void 0,
          destroyView: void 0,
          resolveDep: void 0,
          createDebugContext: void 0,
          handleEvent: void 0,
          updateDirectives: void 0,
          updateRenderer: void 0,
          dirtyParentQueries: void 0,
        },
        qn = function() {},
        Gn = new Map();
      function Wn(t) {
        var e = Gn.get(t);
        return e || ((e = yt(t) + '_' + Gn.size), Gn.set(t, e)), e;
      }
      function Qn(t, e, n, r) {
        if (qe.isWrapped(r)) {
          r = qe.unwrap(r);
          var o = t.def.nodes[e].bindingIndex + n,
            i = qe.unwrap(t.oldValues[o]);
          t.oldValues[o] = new qe(i);
        }
        return r;
      }
      var Kn = '$$undefined',
        Zn = '$$empty';
      function $n(t) {
        return { id: Kn, styles: t.styles, encapsulation: t.encapsulation, data: t.data };
      }
      var Jn = 0;
      function Yn(t, e, n, r) {
        return !(!(2 & t.state) && Be(t.oldValues[e.bindingIndex + n], r));
      }
      function Xn(t, e, n, r) {
        return !!Yn(t, e, n, r) && ((t.oldValues[e.bindingIndex + n] = r), !0);
      }
      function tr(t, e, n, r) {
        var o = t.oldValues[e.bindingIndex + n];
        if (1 & t.state || !ze(o, r)) {
          var i = e.bindings[n].name;
          throw Rn(
            zn.createDebugContext(t, e.nodeIndex),
            i + ': ' + o,
            i + ': ' + r,
            0 != (1 & t.state),
          );
        }
      }
      function er(t) {
        for (var e = t; e; )
          2 & e.def.flags && (e.state |= 8), (e = e.viewContainerParent || e.parent);
      }
      function nr(t, e) {
        for (var n = t; n && n !== e; ) (n.state |= 64), (n = n.viewContainerParent || n.parent);
      }
      function rr(t, e, n, r) {
        try {
          return (
            er(33554432 & t.def.nodes[e].flags ? Ln(t, e).componentView : t),
            zn.handleEvent(t, e, n, r)
          );
        } catch (o) {
          t.root.errorHandler.handleError(o);
        }
      }
      function or(t) {
        return t.parent ? Ln(t.parent, t.parentNodeDef.nodeIndex) : null;
      }
      function ir(t) {
        return t.parent ? t.parentNodeDef.parent : null;
      }
      function sr(t, e) {
        switch (201347067 & e.flags) {
          case 1:
            return Ln(t, e.nodeIndex).renderElement;
          case 2:
            return Vn(t, e.nodeIndex).renderText;
        }
      }
      function ar(t) {
        return !!t.parent && !!(32768 & t.parentNodeDef.flags);
      }
      function ur(t) {
        return !(!t.parent || 32768 & t.parentNodeDef.flags);
      }
      function lr(t) {
        return 1 << t % 32;
      }
      function cr(t) {
        var e = {},
          n = 0,
          r = {};
        return (
          t &&
            t.forEach(function(t) {
              var o = t[0],
                i = t[1];
              'number' == typeof o ? ((e[o] = i), (n |= lr(o))) : (r[o] = i);
            }),
          { matchedQueries: e, references: r, matchedQueryIds: n }
        );
      }
      function hr(t, e) {
        return t.map(function(t) {
          var n, r;
          return (
            Array.isArray(t) ? ((r = t[0]), (n = t[1])) : ((r = 0), (n = t)),
            n &&
              ('function' == typeof n || 'object' == typeof n) &&
              e &&
              Object.defineProperty(n, At, { value: e, configurable: !0 }),
            { flags: r, token: n, tokenKey: Wn(n) }
          );
        });
      }
      function pr(t, e, n) {
        var r = n.renderParent;
        return r
          ? 0 == (1 & r.flags) ||
            0 == (33554432 & r.flags) ||
            (r.element.componentRendererType &&
              r.element.componentRendererType.encapsulation === Bt.Native)
            ? Ln(t, n.renderParent.nodeIndex).renderElement
            : void 0
          : e;
      }
      var fr = new WeakMap();
      function dr(t) {
        var e = fr.get(t);
        return (
          e ||
            (((e = t(function() {
              return qn;
            })).factory = t),
            fr.set(t, e)),
          e
        );
      }
      function yr(t, e, n, r, o) {
        3 === e && (n = t.renderer.parentNode(sr(t, t.def.lastRenderRootNode))),
          gr(t, e, 0, t.def.nodes.length - 1, n, r, o);
      }
      function gr(t, e, n, r, o, i, s) {
        for (var a = n; a <= r; a++) {
          var u = t.def.nodes[a];
          11 & u.flags && vr(t, u, e, o, i, s), (a += u.childCount);
        }
      }
      function mr(t, e, n, r, o, i) {
        for (var s = t; s && !ar(s); ) s = s.parent;
        for (
          var a = s.parent, u = ir(s), l = u.nodeIndex + u.childCount, c = u.nodeIndex + 1;
          c <= l;
          c++
        ) {
          var h = a.def.nodes[c];
          h.ngContentIndex === e && vr(a, h, n, r, o, i), (c += h.childCount);
        }
        if (!a.parent) {
          var p = t.root.projectableNodes[e];
          if (p) for (c = 0; c < p.length; c++) _r(t, p[c], n, r, o, i);
        }
      }
      function vr(t, e, n, r, o, i) {
        if (8 & e.flags) mr(t, e.ngContent.index, n, r, o, i);
        else {
          var s = sr(t, e);
          if (
            (3 === n && 33554432 & e.flags && 48 & e.bindingFlags
              ? (16 & e.bindingFlags && _r(t, s, n, r, o, i),
                32 & e.bindingFlags && _r(Ln(t, e.nodeIndex).componentView, s, n, r, o, i))
              : _r(t, s, n, r, o, i),
            16777216 & e.flags)
          )
            for (var a = Ln(t, e.nodeIndex).viewContainer._embeddedViews, u = 0; u < a.length; u++)
              yr(a[u], n, r, o, i);
          1 & e.flags &&
            !e.element.name &&
            gr(t, n, e.nodeIndex + 1, e.nodeIndex + e.childCount, r, o, i);
        }
      }
      function _r(t, e, n, r, o, i) {
        var s = t.renderer;
        switch (n) {
          case 1:
            s.appendChild(r, e);
            break;
          case 2:
            s.insertBefore(r, e, o);
            break;
          case 3:
            s.removeChild(r, e);
            break;
          case 0:
            i.push(e);
        }
      }
      var br = /^:([^:]+):(.+)$/;
      function wr(t) {
        if (':' === t[0]) {
          var e = t.match(br);
          return [e[1], e[2]];
        }
        return ['', t];
      }
      function Cr(t) {
        for (var e = 0, n = 0; n < t.length; n++) e |= t[n].flags;
        return e;
      }
      var Sr = new Object(),
        Er = Wn(Ie),
        Tr = Wn(xt),
        xr = Wn(Vt);
      function Pr(t, e, n, r) {
        return (n = vt(n)), { index: -1, deps: hr(r, yt(e)), flags: t, token: e, value: n };
      }
      function Or(t, e, n) {
        void 0 === n && (n = Ie.THROW_IF_NOT_FOUND);
        var r,
          o,
          i = Rt(t);
        try {
          if (8 & e.flags) return e.token;
          if ((2 & e.flags && (n = null), 1 & e.flags)) return t._parent.get(e.token, n);
          var s = e.tokenKey;
          switch (s) {
            case Er:
            case Tr:
            case xr:
              return t;
          }
          var a,
            u = t._def.providersByKey[s];
          if (u) {
            var l = t._providers[u.index];
            return void 0 === l && (l = t._providers[u.index] = kr(t, u)), l === Sr ? void 0 : l;
          }
          if (
            (a = ft(e.token)) &&
            ((r = t),
            null != (o = a).providedIn &&
              ((function(t, e) {
                return t._def.modules.indexOf(e) > -1;
              })(r, o.providedIn) ||
                ('root' === o.providedIn && r._def.isRoot)))
          ) {
            var c = t._providers.length;
            return (
              (t._def.providers[c] = t._def.providersByKey[e.tokenKey] = {
                flags: 5120,
                value: a.factory,
                deps: [],
                index: c,
                token: e.token,
              }),
              (t._providers[c] = Sr),
              (t._providers[c] = kr(t, t._def.providersByKey[e.tokenKey]))
            );
          }
          return 4 & e.flags ? n : t._parent.get(e.token, n);
        } finally {
          Rt(i);
        }
      }
      function kr(t, e) {
        var n;
        switch (201347067 & e.flags) {
          case 512:
            n = (function(t, e, n) {
              var r = n.length;
              switch (r) {
                case 0:
                  return new e();
                case 1:
                  return new e(Or(t, n[0]));
                case 2:
                  return new e(Or(t, n[0]), Or(t, n[1]));
                case 3:
                  return new e(Or(t, n[0]), Or(t, n[1]), Or(t, n[2]));
                default:
                  for (var o = new Array(r), i = 0; i < r; i++) o[i] = Or(t, n[i]);
                  return new (e.bind.apply(e, [void 0].concat(o)))();
              }
            })(t, e.value, e.deps);
            break;
          case 1024:
            n = (function(t, e, n) {
              var r = n.length;
              switch (r) {
                case 0:
                  return e();
                case 1:
                  return e(Or(t, n[0]));
                case 2:
                  return e(Or(t, n[0]), Or(t, n[1]));
                case 3:
                  return e(Or(t, n[0]), Or(t, n[1]), Or(t, n[2]));
                default:
                  for (var o = Array(r), i = 0; i < r; i++) o[i] = Or(t, n[i]);
                  return e.apply(void 0, o);
              }
            })(t, e.value, e.deps);
            break;
          case 2048:
            n = Or(t, e.deps[0]);
            break;
          case 256:
            n = e.value;
        }
        return (
          n === Sr ||
            null === n ||
            'object' != typeof n ||
            131072 & e.flags ||
            'function' != typeof n.ngOnDestroy ||
            (e.flags |= 131072),
          void 0 === n ? Sr : n
        );
      }
      function Ar(t, e) {
        var n = t.viewContainer._embeddedViews;
        if (((null == e || e >= n.length) && (e = n.length - 1), e < 0)) return null;
        var r = n[e];
        return (r.viewContainerParent = null), Ht(n, e), zn.dirtyParentQueries(r), Nr(r), r;
      }
      function Ir(t, e, n) {
        var r = e ? sr(e, e.def.lastRenderRootNode) : t.renderElement,
          o = n.renderer.parentNode(r),
          i = n.renderer.nextSibling(r);
        yr(n, 2, o, i, void 0);
      }
      function Nr(t) {
        yr(t, 3, null, null, void 0);
      }
      var Rr = new Object();
      function Dr(t, e, n, r, o, i) {
        return new Fr(t, e, n, r, o, i);
      }
      var Fr = (function(t) {
          function e(e, n, r, o, i, s) {
            var a = this;
            return (
              ((a = t.call(this) || this).selector = e),
              (a.componentType = n),
              (a._inputs = o),
              (a._outputs = i),
              (a.ngContentSelectors = s),
              (a.viewDefFactory = r),
              a
            );
          }
          return (
            __extends(e, t),
            Object.defineProperty(e.prototype, 'inputs', {
              get: function() {
                var t = [],
                  e = this._inputs;
                for (var n in e) t.push({ propName: n, templateName: e[n] });
                return t;
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, 'outputs', {
              get: function() {
                var t = [];
                for (var e in this._outputs)
                  t.push({ propName: e, templateName: this._outputs[e] });
                return t;
              },
              enumerable: !0,
              configurable: !0,
            }),
            (e.prototype.create = function(t, e, n, r) {
              if (!r) throw new Error('ngModule should be provided');
              var o = dr(this.viewDefFactory),
                i = o.nodes[0].element.componentProvider.nodeIndex,
                s = zn.createRootView(t, e || [], n, o, r, Rr),
                a = Un(s, i).instance;
              return (
                n && s.renderer.setAttribute(Ln(s, 0).renderElement, 'ng-version', fn.full),
                new jr(s, new Ur(s), a)
              );
            }),
            e
          );
        })(Je),
        jr = (function(t) {
          function e(e, n, r) {
            var o = this;
            return (
              ((o = t.call(this) || this)._view = e),
              (o._viewRef = n),
              (o._component = r),
              (o._elDef = o._view.def.nodes[0]),
              (o.hostView = n),
              (o.changeDetectorRef = n),
              (o.instance = r),
              o
            );
          }
          return (
            __extends(e, t),
            Object.defineProperty(e.prototype, 'location', {
              get: function() {
                return new sn(Ln(this._view, this._elDef.nodeIndex).renderElement);
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, 'injector', {
              get: function() {
                return new qr(this._view, this._elDef);
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, 'componentType', {
              get: function() {
                return this._component.constructor;
              },
              enumerable: !0,
              configurable: !0,
            }),
            (e.prototype.destroy = function() {
              this._viewRef.destroy();
            }),
            (e.prototype.onDestroy = function(t) {
              this._viewRef.onDestroy(t);
            }),
            e
          );
        })($e);
      function Mr(t, e, n) {
        return new Vr(t, e, n);
      }
      var Vr = (function() {
        function t(t, e, n) {
          (this._view = t), (this._elDef = e), (this._data = n), (this._embeddedViews = []);
        }
        return (
          Object.defineProperty(t.prototype, 'element', {
            get: function() {
              return new sn(this._data.renderElement);
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(t.prototype, 'injector', {
            get: function() {
              return new qr(this._view, this._elDef);
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(t.prototype, 'parentInjector', {
            get: function() {
              for (var t = this._view, e = this._elDef.parent; !e && t; )
                (e = ir(t)), (t = t.parent);
              return t ? new qr(t, e) : new qr(this._view, null);
            },
            enumerable: !0,
            configurable: !0,
          }),
          (t.prototype.clear = function() {
            for (var t = this._embeddedViews.length - 1; t >= 0; t--) {
              var e = Ar(this._data, t);
              zn.destroyView(e);
            }
          }),
          (t.prototype.get = function(t) {
            var e = this._embeddedViews[t];
            if (e) {
              var n = new Ur(e);
              return n.attachToViewContainerRef(this), n;
            }
            return null;
          }),
          Object.defineProperty(t.prototype, 'length', {
            get: function() {
              return this._embeddedViews.length;
            },
            enumerable: !0,
            configurable: !0,
          }),
          (t.prototype.createEmbeddedView = function(t, e, n) {
            var r = t.createEmbeddedView(e || {});
            return this.insert(r, n), r;
          }),
          (t.prototype.createComponent = function(t, e, n, r, o) {
            var i = n || this.parentInjector;
            o || t instanceof rn || (o = i.get(Vt));
            var s = t.create(i, r, void 0, o);
            return this.insert(s.hostView, e), s;
          }),
          (t.prototype.insert = function(t, e) {
            if (t.destroyed) throw new Error('Cannot insert a destroyed View in a ViewContainer!');
            var n,
              r,
              o,
              i,
              s,
              a = t;
            return (
              (n = this._view),
              (r = this._data),
              (o = e),
              (i = a._view),
              (s = r.viewContainer._embeddedViews),
              null == o && (o = s.length),
              (i.viewContainerParent = n),
              Ut(s, o, i),
              (function(t, e) {
                var n = or(e);
                if (n && n !== t && !(16 & e.state)) {
                  e.state |= 16;
                  var r = n.template._projectedViews;
                  r || (r = n.template._projectedViews = []),
                    r.push(e),
                    (function(t, e) {
                      if (!(4 & e.flags)) {
                        (t.nodeFlags |= 4), (e.flags |= 4);
                        for (var n = e.parent; n; ) (n.childFlags |= 4), (n = n.parent);
                      }
                    })(e.parent.def, e.parentNodeDef);
                }
              })(r, i),
              zn.dirtyParentQueries(i),
              Ir(r, o > 0 ? s[o - 1] : null, i),
              a.attachToViewContainerRef(this),
              t
            );
          }),
          (t.prototype.move = function(t, e) {
            if (t.destroyed) throw new Error('Cannot move a destroyed View in a ViewContainer!');
            var n,
              r,
              o,
              i,
              s,
              a = this._embeddedViews.indexOf(t._view);
            return (
              (n = this._data),
              (r = a),
              (o = e),
              (i = n.viewContainer._embeddedViews),
              (s = i[r]),
              Ht(i, r),
              null == o && (o = i.length),
              Ut(i, o, s),
              zn.dirtyParentQueries(s),
              Nr(s),
              Ir(n, o > 0 ? i[o - 1] : null, s),
              t
            );
          }),
          (t.prototype.indexOf = function(t) {
            return this._embeddedViews.indexOf(t._view);
          }),
          (t.prototype.remove = function(t) {
            var e = Ar(this._data, t);
            e && zn.destroyView(e);
          }),
          (t.prototype.detach = function(t) {
            var e = Ar(this._data, t);
            return e ? new Ur(e) : null;
          }),
          t
        );
      })();
      function Lr(t) {
        return new Ur(t);
      }
      var Ur = (function() {
        function t(t) {
          (this._view = t), (this._viewContainerRef = null), (this._appRef = null);
        }
        return (
          Object.defineProperty(t.prototype, 'rootNodes', {
            get: function() {
              return yr(this._view, 0, void 0, void 0, (t = [])), t;
              var t;
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(t.prototype, 'context', {
            get: function() {
              return this._view.context;
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(t.prototype, 'destroyed', {
            get: function() {
              return 0 != (128 & this._view.state);
            },
            enumerable: !0,
            configurable: !0,
          }),
          (t.prototype.markForCheck = function() {
            er(this._view);
          }),
          (t.prototype.detach = function() {
            this._view.state &= -5;
          }),
          (t.prototype.detectChanges = function() {
            var t = this._view.root.rendererFactory;
            t.begin && t.begin();
            try {
              zn.checkAndUpdateView(this._view);
            } finally {
              t.end && t.end();
            }
          }),
          (t.prototype.checkNoChanges = function() {
            zn.checkNoChangesView(this._view);
          }),
          (t.prototype.reattach = function() {
            this._view.state |= 4;
          }),
          (t.prototype.onDestroy = function(t) {
            this._view.disposables || (this._view.disposables = []), this._view.disposables.push(t);
          }),
          (t.prototype.destroy = function() {
            this._appRef
              ? this._appRef.detachView(this)
              : this._viewContainerRef &&
                this._viewContainerRef.detach(this._viewContainerRef.indexOf(this)),
              zn.destroyView(this._view);
          }),
          (t.prototype.detachFromAppRef = function() {
            (this._appRef = null), Nr(this._view), zn.dirtyParentQueries(this._view);
          }),
          (t.prototype.attachToAppRef = function(t) {
            if (this._viewContainerRef)
              throw new Error('This view is already attached to a ViewContainer!');
            this._appRef = t;
          }),
          (t.prototype.attachToViewContainerRef = function(t) {
            if (this._appRef)
              throw new Error('This view is already attached directly to the ApplicationRef!');
            this._viewContainerRef = t;
          }),
          t
        );
      })();
      function Hr(t, e) {
        return new Br(t, e);
      }
      var Br = (function(t) {
        function e(e, n) {
          var r = this;
          return ((r = t.call(this) || this)._parentView = e), (r._def = n), r;
        }
        return (
          __extends(e, t),
          (e.prototype.createEmbeddedView = function(t) {
            return new Ur(
              zn.createEmbeddedView(this._parentView, this._def, this._def.element.template, t),
            );
          }),
          Object.defineProperty(e.prototype, 'elementRef', {
            get: function() {
              return new sn(Ln(this._parentView, this._def.nodeIndex).renderElement);
            },
            enumerable: !0,
            configurable: !0,
          }),
          e
        );
      })(kn);
      function zr(t, e) {
        return new qr(t, e);
      }
      var qr = (function() {
        function t(t, e) {
          (this.view = t), (this.elDef = e);
        }
        return (
          (t.prototype.get = function(t, e) {
            return (
              void 0 === e && (e = Ie.THROW_IF_NOT_FOUND),
              zn.resolveDep(
                this.view,
                this.elDef,
                !!this.elDef && 0 != (33554432 & this.elDef.flags),
                { flags: 0, token: t, tokenKey: Wn(t) },
                e,
              )
            );
          }),
          t
        );
      })();
      function Gr(t, e) {
        var n = t.def.nodes[e];
        if (1 & n.flags) {
          var r = Ln(t, n.nodeIndex);
          return n.element.template ? r.template : r.renderElement;
        }
        if (2 & n.flags) return Vn(t, n.nodeIndex).renderText;
        if (20240 & n.flags) return Un(t, n.nodeIndex).instance;
        throw new Error('Illegal state: read nodeValue for node index ' + e);
      }
      function Wr(t) {
        return new Qr(t.renderer);
      }
      var Qr = (function() {
        function t(t) {
          this.delegate = t;
        }
        return (
          (t.prototype.selectRootElement = function(t) {
            return this.delegate.selectRootElement(t);
          }),
          (t.prototype.createElement = function(t, e) {
            var n = wr(e),
              r = n[0],
              o = n[1],
              i = this.delegate.createElement(o, r);
            return t && this.delegate.appendChild(t, i), i;
          }),
          (t.prototype.createViewRoot = function(t) {
            return t;
          }),
          (t.prototype.createTemplateAnchor = function(t) {
            var e = this.delegate.createComment('');
            return t && this.delegate.appendChild(t, e), e;
          }),
          (t.prototype.createText = function(t, e) {
            var n = this.delegate.createText(e);
            return t && this.delegate.appendChild(t, n), n;
          }),
          (t.prototype.projectNodes = function(t, e) {
            for (var n = 0; n < e.length; n++) this.delegate.appendChild(t, e[n]);
          }),
          (t.prototype.attachViewAfter = function(t, e) {
            for (
              var n = this.delegate.parentNode(t), r = this.delegate.nextSibling(t), o = 0;
              o < e.length;
              o++
            )
              this.delegate.insertBefore(n, e[o], r);
          }),
          (t.prototype.detachView = function(t) {
            for (var e = 0; e < t.length; e++) {
              var n = t[e],
                r = this.delegate.parentNode(n);
              this.delegate.removeChild(r, n);
            }
          }),
          (t.prototype.destroyView = function(t, e) {
            for (var n = 0; n < e.length; n++) this.delegate.destroyNode(e[n]);
          }),
          (t.prototype.listen = function(t, e, n) {
            return this.delegate.listen(t, e, n);
          }),
          (t.prototype.listenGlobal = function(t, e, n) {
            return this.delegate.listen(t, e, n);
          }),
          (t.prototype.setElementProperty = function(t, e, n) {
            this.delegate.setProperty(t, e, n);
          }),
          (t.prototype.setElementAttribute = function(t, e, n) {
            var r = wr(e),
              o = r[0],
              i = r[1];
            null != n
              ? this.delegate.setAttribute(t, i, n, o)
              : this.delegate.removeAttribute(t, i, o);
          }),
          (t.prototype.setBindingDebugInfo = function(t, e, n) {}),
          (t.prototype.setElementClass = function(t, e, n) {
            n ? this.delegate.addClass(t, e) : this.delegate.removeClass(t, e);
          }),
          (t.prototype.setElementStyle = function(t, e, n) {
            null != n ? this.delegate.setStyle(t, e, n) : this.delegate.removeStyle(t, e);
          }),
          (t.prototype.invokeElementMethod = function(t, e, n) {
            t[e].apply(t, n);
          }),
          (t.prototype.setText = function(t, e) {
            this.delegate.setValue(t, e);
          }),
          (t.prototype.animate = function() {
            throw new Error('Renderer.animate is no longer supported!');
          }),
          t
        );
      })();
      function Kr(t, e, n, r) {
        return new Zr(t, e, n, r);
      }
      var Zr = (function() {
          function t(t, e, n, r) {
            (this._moduleType = t),
              (this._parent = e),
              (this._bootstrapComponents = n),
              (this._def = r),
              (this._destroyListeners = []),
              (this._destroyed = !1),
              (this.injector = this),
              (function(t) {
                for (
                  var e = t._def, n = (t._providers = new Array(e.providers.length)), r = 0;
                  r < e.providers.length;
                  r++
                ) {
                  var o = e.providers[r];
                  4096 & o.flags || (void 0 === n[r] && (n[r] = kr(t, o)));
                }
              })(this);
          }
          return (
            (t.prototype.get = function(t, e, n) {
              void 0 === e && (e = Ie.THROW_IF_NOT_FOUND), void 0 === n && (n = ct.Default);
              var r = 0;
              return (
                n & ct.SkipSelf ? (r |= 1) : n & ct.Self && (r |= 4),
                Or(this, { token: t, tokenKey: Wn(t), flags: r }, e)
              );
            }),
            Object.defineProperty(t.prototype, 'instance', {
              get: function() {
                return this.get(this._moduleType);
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, 'componentFactoryResolver', {
              get: function() {
                return this.get(en);
              },
              enumerable: !0,
              configurable: !0,
            }),
            (t.prototype.destroy = function() {
              if (this._destroyed)
                throw new Error(
                  'The ng module ' + yt(this.instance.constructor) + ' has already been destroyed.',
                );
              (this._destroyed = !0),
                (function(t, e) {
                  for (var n = t._def, r = new Set(), o = 0; o < n.providers.length; o++)
                    if (131072 & n.providers[o].flags) {
                      var i = t._providers[o];
                      if (i && i !== Sr) {
                        var s = i.ngOnDestroy;
                        'function' != typeof s || r.has(i) || (s.apply(i), r.add(i));
                      }
                    }
                })(this),
                this._destroyListeners.forEach(function(t) {
                  return t();
                });
            }),
            (t.prototype.onDestroy = function(t) {
              this._destroyListeners.push(t);
            }),
            t
          );
        })(),
        $r = Wn(un),
        Jr = Wn(hn),
        Yr = Wn(sn),
        Xr = Wn(In),
        to = Wn(kn),
        eo = Wn(Pe),
        no = Wn(Ie),
        ro = Wn(xt);
      function oo(t, e, n, r, o, i, s, a) {
        var u = [];
        if (s)
          for (var l in s) {
            var c = s[l],
              h = c[0],
              p = c[1];
            u[h] = {
              flags: 8,
              name: l,
              nonMinifiedName: p,
              ns: null,
              securityContext: null,
              suffix: null,
            };
          }
        var f = [];
        if (a) for (var d in a) f.push({ type: 1, propName: d, target: null, eventName: a[d] });
        return ao(t, (e |= 16384), n, r, o, o, i, u, f);
      }
      function io(t, e, n) {
        return ao(-1, (t |= 16), null, 0, e, e, n);
      }
      function so(t, e, n, r, o) {
        return ao(-1, t, e, 0, n, r, o);
      }
      function ao(t, e, n, r, o, i, s, a, u) {
        var l = cr(n),
          c = l.matchedQueries,
          h = l.references,
          p = l.matchedQueryIds;
        u || (u = []), a || (a = []), (i = vt(i));
        var f = hr(s, yt(o));
        return {
          nodeIndex: -1,
          parent: null,
          renderParent: null,
          bindingIndex: -1,
          outputIndex: -1,
          checkIndex: t,
          flags: e,
          childFlags: 0,
          directChildFlags: 0,
          childMatchedQueries: 0,
          matchedQueries: c,
          matchedQueryIds: p,
          references: h,
          ngContentIndex: -1,
          childCount: r,
          bindings: a,
          bindingFlags: Cr(a),
          outputs: u,
          element: null,
          provider: { token: o, value: i, deps: f },
          text: null,
          query: null,
          ngContent: null,
        };
      }
      function uo(t, e) {
        return po(t, e);
      }
      function lo(t, e) {
        for (var n = t; n.parent && !ar(n); ) n = n.parent;
        return fo(n.parent, ir(n), !0, e.provider.value, e.provider.deps);
      }
      function co(t, e) {
        var n = fo(t, e.parent, (32768 & e.flags) > 0, e.provider.value, e.provider.deps);
        if (e.outputs.length)
          for (var r = 0; r < e.outputs.length; r++) {
            var o = e.outputs[r],
              i = n[o.propName];
            if (!Ke(i))
              throw new Error(
                '@Output ' + o.propName + " not initialized in '" + n.constructor.name + "'.",
              );
            var s = i.subscribe(ho(t, e.parent.nodeIndex, o.eventName));
            t.disposables[e.outputIndex + r] = s.unsubscribe.bind(s);
          }
        return n;
      }
      function ho(t, e, n) {
        return function(r) {
          return rr(t, e, n, r);
        };
      }
      function po(t, e) {
        var n = (8192 & e.flags) > 0,
          r = e.provider;
        switch (201347067 & e.flags) {
          case 512:
            return fo(t, e.parent, n, r.value, r.deps);
          case 1024:
            return (function(t, e, n, r, o) {
              var i = o.length;
              switch (i) {
                case 0:
                  return r();
                case 1:
                  return r(go(t, e, n, o[0]));
                case 2:
                  return r(go(t, e, n, o[0]), go(t, e, n, o[1]));
                case 3:
                  return r(go(t, e, n, o[0]), go(t, e, n, o[1]), go(t, e, n, o[2]));
                default:
                  for (var s = Array(i), a = 0; a < i; a++) s[a] = go(t, e, n, o[a]);
                  return r.apply(void 0, s);
              }
            })(t, e.parent, n, r.value, r.deps);
          case 2048:
            return go(t, e.parent, n, r.deps[0]);
          case 256:
            return r.value;
        }
      }
      function fo(t, e, n, r, o) {
        var i = o.length;
        switch (i) {
          case 0:
            return new r();
          case 1:
            return new r(go(t, e, n, o[0]));
          case 2:
            return new r(go(t, e, n, o[0]), go(t, e, n, o[1]));
          case 3:
            return new r(go(t, e, n, o[0]), go(t, e, n, o[1]), go(t, e, n, o[2]));
          default:
            for (var s = new Array(i), a = 0; a < i; a++) s[a] = go(t, e, n, o[a]);
            return new (r.bind.apply(r, [void 0].concat(s)))();
        }
      }
      var yo = {};
      function go(t, e, n, r, o) {
        if ((void 0 === o && (o = Ie.THROW_IF_NOT_FOUND), 8 & r.flags)) return r.token;
        var i = t;
        2 & r.flags && (o = null);
        var s = r.tokenKey;
        s === eo && (n = !(!e || !e.element.componentView)),
          e && 1 & r.flags && ((n = !1), (e = e.parent));
        for (var a = t; a; ) {
          if (e)
            switch (s) {
              case $r:
                return Wr(mo(a, e, n));
              case Jr:
                return mo(a, e, n).renderer;
              case Yr:
                return new sn(Ln(a, e.nodeIndex).renderElement);
              case Xr:
                return Ln(a, e.nodeIndex).viewContainer;
              case to:
                if (e.element.template) return Ln(a, e.nodeIndex).template;
                break;
              case eo:
                return Lr(mo(a, e, n));
              case no:
              case ro:
                return zr(a, e);
              default:
                var u = (n ? e.element.allProviders : e.element.publicProviders)[s];
                if (u) {
                  var l = Un(a, u.nodeIndex);
                  return (
                    l || ((l = { instance: po(a, u) }), (a.nodes[u.nodeIndex] = l)), l.instance
                  );
                }
            }
          (n = ar(a)), (e = ir(a)), (a = a.parent), 4 & r.flags && (a = null);
        }
        var c = i.root.injector.get(r.token, yo);
        return c !== yo || o === yo ? c : i.root.ngModule.injector.get(r.token, o);
      }
      function mo(t, e, n) {
        var r;
        if (n) r = Ln(t, e.nodeIndex).componentView;
        else for (r = t; r.parent && !ar(r); ) r = r.parent;
        return r;
      }
      function vo(t, e, n, r, o, i) {
        if (32768 & n.flags) {
          var s = Ln(t, n.parent.nodeIndex).componentView;
          2 & s.def.flags && (s.state |= 8);
        }
        if (((e.instance[n.bindings[r].name] = o), 524288 & n.flags)) {
          i = i || {};
          var a = qe.unwrap(t.oldValues[n.bindingIndex + r]);
          i[n.bindings[r].nonMinifiedName] = new Ze(a, o, 0 != (2 & t.state));
        }
        return (t.oldValues[n.bindingIndex + r] = o), i;
      }
      function _o(t, e) {
        if (t.def.nodeFlags & e)
          for (var n = t.def.nodes, r = 0, o = 0; o < n.length; o++) {
            var i = n[o],
              s = i.parent;
            for (
              !s && i.flags & e && wo(t, o, i.flags & e, r++),
                0 == (i.childFlags & e) && (o += i.childCount);
              s && 1 & s.flags && o === s.nodeIndex + s.childCount;

            )
              s.directChildFlags & e && (r = bo(t, s, e, r)), (s = s.parent);
          }
      }
      function bo(t, e, n, r) {
        for (var o = e.nodeIndex + 1; o <= e.nodeIndex + e.childCount; o++) {
          var i = t.def.nodes[o];
          i.flags & n && wo(t, o, i.flags & n, r++), (o += i.childCount);
        }
        return r;
      }
      function wo(t, e, n, r) {
        var o = Un(t, e);
        if (o) {
          var i = o.instance;
          i &&
            (zn.setCurrentNode(t, e),
            1048576 & n && Mn(t, 512, r) && i.ngAfterContentInit(),
            2097152 & n && i.ngAfterContentChecked(),
            4194304 & n && Mn(t, 768, r) && i.ngAfterViewInit(),
            8388608 & n && i.ngAfterViewChecked(),
            131072 & n && i.ngOnDestroy());
        }
      }
      var Co = new Tt('SCHEDULER_TOKEN', {
          providedIn: 'root',
          factory: function() {
            return zt;
          },
        }),
        So = {},
        Eo = (function() {
          var t = {
            LocaleId: 0,
            DayPeriodsFormat: 1,
            DayPeriodsStandalone: 2,
            DaysFormat: 3,
            DaysStandalone: 4,
            MonthsFormat: 5,
            MonthsStandalone: 6,
            Eras: 7,
            FirstDayOfWeek: 8,
            WeekendRange: 9,
            DateFormat: 10,
            TimeFormat: 11,
            DateTimeFormat: 12,
            NumberSymbols: 13,
            NumberFormats: 14,
            CurrencySymbol: 15,
            CurrencyName: 16,
            Currencies: 17,
            PluralCase: 18,
            ExtraData: 19,
          };
          return (
            (t[t.LocaleId] = 'LocaleId'),
            (t[t.DayPeriodsFormat] = 'DayPeriodsFormat'),
            (t[t.DayPeriodsStandalone] = 'DayPeriodsStandalone'),
            (t[t.DaysFormat] = 'DaysFormat'),
            (t[t.DaysStandalone] = 'DaysStandalone'),
            (t[t.MonthsFormat] = 'MonthsFormat'),
            (t[t.MonthsStandalone] = 'MonthsStandalone'),
            (t[t.Eras] = 'Eras'),
            (t[t.FirstDayOfWeek] = 'FirstDayOfWeek'),
            (t[t.WeekendRange] = 'WeekendRange'),
            (t[t.DateFormat] = 'DateFormat'),
            (t[t.TimeFormat] = 'TimeFormat'),
            (t[t.DateTimeFormat] = 'DateTimeFormat'),
            (t[t.NumberSymbols] = 'NumberSymbols'),
            (t[t.NumberFormats] = 'NumberFormats'),
            (t[t.CurrencySymbol] = 'CurrencySymbol'),
            (t[t.CurrencyName] = 'CurrencyName'),
            (t[t.Currencies] = 'Currencies'),
            (t[t.PluralCase] = 'PluralCase'),
            (t[t.ExtraData] = 'ExtraData'),
            t
          );
        })(),
        To = void 0,
        xo = [
          'en',
          [['a', 'p'], ['AM', 'PM'], To],
          [['AM', 'PM'], To, To],
          [
            ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
            ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
            ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
            ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
          ],
          To,
          [
            ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
            ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            [
              'January',
              'February',
              'March',
              'April',
              'May',
              'June',
              'July',
              'August',
              'September',
              'October',
              'November',
              'December',
            ],
          ],
          To,
          [
            ['B', 'A'],
            ['BC', 'AD'],
            ['Before Christ', 'Anno Domini'],
          ],
          0,
          [6, 0],
          ['M/d/yy', 'MMM d, y', 'MMMM d, y', 'EEEE, MMMM d, y'],
          ['h:mm a', 'h:mm:ss a', 'h:mm:ss a z', 'h:mm:ss a zzzz'],
          ['{1}, {0}', To, "{1} 'at' {0}", To],
          ['.', ',', ';', '%', '+', '-', 'E', '\xd7', '\u2030', '\u221e', 'NaN', ':'],
          ['#,##0.###', '#,##0%', '\xa4#,##0.00', '#E0'],
          '$',
          'US Dollar',
          {},
          function(t) {
            var e = Math.floor(Math.abs(t)),
              n = t.toString().replace(/^[^.]*\.?/, '').length;
            return 1 === e && 0 === n ? 1 : 5;
          },
        ],
        Po = 'en-US';
      function Oo(t) {
        null == t &&
          (function(t) {
            throw new Error('ASSERTION ERROR: Expected localeId to be defined');
          })(),
          'string' == typeof t && t.toLowerCase().replace(/_/g, '-');
      }
      var ko = (function(t) {
        function e(e) {
          void 0 === e && (e = !1);
          var n = this;
          return ((n = t.call(this) || this).__isAsync = e), n;
        }
        return (
          __extends(e, t),
          (e.prototype.emit = function(e) {
            t.prototype.next.call(this, e);
          }),
          (e.prototype.subscribe = function(e, n, r) {
            var o,
              i = function(t) {
                return null;
              },
              s = function() {
                return null;
              };
            e && 'object' == typeof e
              ? ((o = this.__isAsync
                  ? function(t) {
                      setTimeout(function() {
                        return e.next(t);
                      });
                    }
                  : function(t) {
                      e.next(t);
                    }),
                e.error &&
                  (i = this.__isAsync
                    ? function(t) {
                        setTimeout(function() {
                          return e.error(t);
                        });
                      }
                    : function(t) {
                        e.error(t);
                      }),
                e.complete &&
                  (s = this.__isAsync
                    ? function() {
                        setTimeout(function() {
                          return e.complete();
                        });
                      }
                    : function() {
                        e.complete();
                      }))
              : ((o = this.__isAsync
                  ? function(t) {
                      setTimeout(function() {
                        return e(t);
                      });
                    }
                  : function(t) {
                      e(t);
                    }),
                n &&
                  (i = this.__isAsync
                    ? function(t) {
                        setTimeout(function() {
                          return n(t);
                        });
                      }
                    : function(t) {
                        n(t);
                      }),
                r &&
                  (s = this.__isAsync
                    ? function() {
                        setTimeout(function() {
                          return r();
                        });
                      }
                    : function() {
                        r();
                      }));
            var a = t.prototype.subscribe.call(this, o, i, s);
            return e instanceof p && e.add(a), a;
          }),
          e
        );
      })(O);
      function Ao() {
        return this._results[He()]();
      }
      var Io = (function() {
          function t() {
            (this.dirty = !0), (this._results = []), (this.changes = new ko()), (this.length = 0);
            var e = He(),
              n = t.prototype;
            n[e] || (n[e] = Ao);
          }
          return (
            (t.prototype.map = function(t) {
              return this._results.map(t);
            }),
            (t.prototype.filter = function(t) {
              return this._results.filter(t);
            }),
            (t.prototype.find = function(t) {
              return this._results.find(t);
            }),
            (t.prototype.reduce = function(t, e) {
              return this._results.reduce(t, e);
            }),
            (t.prototype.forEach = function(t) {
              this._results.forEach(t);
            }),
            (t.prototype.some = function(t) {
              return this._results.some(t);
            }),
            (t.prototype.toArray = function() {
              return this._results.slice();
            }),
            (t.prototype.toString = function() {
              return this._results.toString();
            }),
            (t.prototype.reset = function(t) {
              (this._results = (function t(e, n) {
                void 0 === n && (n = e);
                for (var r = 0; r < e.length; r++) {
                  var o = e[r];
                  Array.isArray(o)
                    ? (n === e && (n = e.slice(0, r)), t(o, n))
                    : n !== e && n.push(o);
                }
                return n;
              })(t)),
                (this.dirty = !1),
                (this.length = this._results.length),
                (this.last = this._results[this.length - 1]),
                (this.first = this._results[0]);
            }),
            (t.prototype.notifyOnChanges = function() {
              this.changes.emit(this);
            }),
            (t.prototype.setDirty = function() {
              this.dirty = !0;
            }),
            (t.prototype.destroy = function() {
              this.changes.complete(), this.changes.unsubscribe();
            }),
            t
          );
        })(),
        No = new Tt('Application Initializer'),
        Ro = (function() {
          function t(t) {
            var e = this;
            (this.appInits = t),
              (this.initialized = !1),
              (this.done = !1),
              (this.donePromise = new Promise(function(t, n) {
                (e.resolve = t), (e.reject = n);
              }));
          }
          return (
            (t.prototype.runInitializers = function() {
              var t = this;
              if (!this.initialized) {
                var e = [],
                  n = function() {
                    (t.done = !0), t.resolve();
                  };
                if (this.appInits)
                  for (var r = 0; r < this.appInits.length; r++) {
                    var o = this.appInits[r]();
                    Qe(o) && e.push(o);
                  }
                Promise.all(e)
                  .then(function() {
                    n();
                  })
                  .catch(function(e) {
                    t.reject(e);
                  }),
                  0 === e.length && n(),
                  (this.initialized = !0);
              }
            }),
            t
          );
        })(),
        Do = new Tt('AppId');
      function Fo() {
        return '' + jo() + jo() + jo();
      }
      function jo() {
        return String.fromCharCode(97 + Math.floor(25 * Math.random()));
      }
      var Mo = new Tt('Platform Initializer'),
        Vo = new Tt('Platform ID'),
        Lo = new Tt('appBootstrapListener'),
        Uo = (function() {
          function t() {}
          return (
            (t.prototype.log = function(t) {
              console.log(t);
            }),
            (t.prototype.warn = function(t) {
              console.warn(t);
            }),
            t
          );
        })(),
        Ho = new Tt('LocaleId'),
        Bo = !1;
      function zo() {
        throw new Error('Runtime compiler is not loaded');
      }
      var qo,
        Go,
        Wo = zo,
        Qo = zo,
        Ko = zo,
        Zo = zo,
        $o = (function() {
          function t() {
            (this.compileModuleSync = Wo),
              (this.compileModuleAsync = Qo),
              (this.compileModuleAndAllComponentsSync = Ko),
              (this.compileModuleAndAllComponentsAsync = Zo);
          }
          return (
            (t.prototype.clearCache = function() {}),
            (t.prototype.clearCacheFor = function(t) {}),
            (t.prototype.getModuleId = function(t) {}),
            t
          );
        })(),
        Jo = function() {};
      var Yo,
        Xo = !(!(Yo = Et.wtf) || !(qo = Yo.trace) || ((Go = qo.events), 0));
      function ti(t, e) {
        return null;
      }
      var ei = Xo
          ? function(t, e) {
              return void 0 === e && (e = null), Go.createScope(t, e);
            }
          : function(t, e) {
              return ti;
            },
        ni = Xo
          ? function(t, e) {
              return qo.leaveScope(t, e), e;
            }
          : function(t, e) {
              return e;
            },
        ri = Promise.resolve(0);
      function oi(t) {
        'undefined' == typeof Zone
          ? ri.then(function() {
              t && t.apply(null, null);
            })
          : Zone.current.scheduleMicroTask('scheduleMicrotask', t);
      }
      var ii = (function() {
        function t(t) {
          var e,
            n = t.enableLongStackTrace,
            r = void 0 !== n && n;
          if (
            ((this.hasPendingMicrotasks = !1),
            (this.hasPendingMacrotasks = !1),
            (this.isStable = !0),
            (this.onUnstable = new ko(!1)),
            (this.onMicrotaskEmpty = new ko(!1)),
            (this.onStable = new ko(!1)),
            (this.onError = new ko(!1)),
            'undefined' == typeof Zone)
          )
            throw new Error('In this configuration Angular requires Zone.js');
          Zone.assertZonePatched(),
            (this._nesting = 0),
            (this._outer = this._inner = Zone.current),
            Zone.wtfZoneSpec && (this._inner = this._inner.fork(Zone.wtfZoneSpec)),
            Zone.TaskTrackingZoneSpec &&
              (this._inner = this._inner.fork(new Zone.TaskTrackingZoneSpec())),
            r &&
              Zone.longStackTraceZoneSpec &&
              (this._inner = this._inner.fork(Zone.longStackTraceZoneSpec)),
            ((e = this)._inner = e._inner.fork({
              name: 'angular',
              properties: { isAngularZone: !0 },
              onInvokeTask: function(t, n, r, o, i, s) {
                try {
                  return li(e), t.invokeTask(r, o, i, s);
                } finally {
                  ci(e);
                }
              },
              onInvoke: function(t, n, r, o, i, s, a) {
                try {
                  return li(e), t.invoke(r, o, i, s, a);
                } finally {
                  ci(e);
                }
              },
              onHasTask: function(t, n, r, o) {
                t.hasTask(r, o),
                  n === r &&
                    ('microTask' == o.change
                      ? ((e.hasPendingMicrotasks = o.microTask), ui(e))
                      : 'macroTask' == o.change && (e.hasPendingMacrotasks = o.macroTask));
              },
              onHandleError: function(t, n, r, o) {
                return (
                  t.handleError(r, o),
                  e.runOutsideAngular(function() {
                    return e.onError.emit(o);
                  }),
                  !1
                );
              },
            }));
        }
        return (
          (t.isInAngularZone = function() {
            return !0 === Zone.current.get('isAngularZone');
          }),
          (t.assertInAngularZone = function() {
            if (!t.isInAngularZone())
              throw new Error('Expected to be in Angular Zone, but it is not!');
          }),
          (t.assertNotInAngularZone = function() {
            if (t.isInAngularZone())
              throw new Error('Expected to not be in Angular Zone, but it is!');
          }),
          (t.prototype.run = function(t, e, n) {
            return this._inner.run(t, e, n);
          }),
          (t.prototype.runTask = function(t, e, n, r) {
            var o = this._inner,
              i = o.scheduleEventTask('NgZoneEvent: ' + r, t, ai, si, si);
            try {
              return o.runTask(i, e, n);
            } finally {
              o.cancelTask(i);
            }
          }),
          (t.prototype.runGuarded = function(t, e, n) {
            return this._inner.runGuarded(t, e, n);
          }),
          (t.prototype.runOutsideAngular = function(t) {
            return this._outer.run(t);
          }),
          t
        );
      })();
      function si() {}
      var ai = {};
      function ui(t) {
        if (0 == t._nesting && !t.hasPendingMicrotasks && !t.isStable)
          try {
            t._nesting++, t.onMicrotaskEmpty.emit(null);
          } finally {
            if ((t._nesting--, !t.hasPendingMicrotasks))
              try {
                t.runOutsideAngular(function() {
                  return t.onStable.emit(null);
                });
              } finally {
                t.isStable = !0;
              }
          }
      }
      function li(t) {
        t._nesting++, t.isStable && ((t.isStable = !1), t.onUnstable.emit(null));
      }
      function ci(t) {
        t._nesting--, ui(t);
      }
      var hi,
        pi = (function() {
          function t() {
            (this.hasPendingMicrotasks = !1),
              (this.hasPendingMacrotasks = !1),
              (this.isStable = !0),
              (this.onUnstable = new ko()),
              (this.onMicrotaskEmpty = new ko()),
              (this.onStable = new ko()),
              (this.onError = new ko());
          }
          return (
            (t.prototype.run = function(t) {
              return t();
            }),
            (t.prototype.runGuarded = function(t) {
              return t();
            }),
            (t.prototype.runOutsideAngular = function(t) {
              return t();
            }),
            (t.prototype.runTask = function(t) {
              return t();
            }),
            t
          );
        })(),
        fi = (function() {
          function t(t) {
            var e = this;
            (this._ngZone = t),
              (this._pendingCount = 0),
              (this._isZoneStable = !0),
              (this._didWork = !1),
              (this._callbacks = []),
              (this.taskTrackingZone = null),
              this._watchAngularEvents(),
              t.run(function() {
                e.taskTrackingZone =
                  'undefined' == typeof Zone ? null : Zone.current.get('TaskTrackingZone');
              });
          }
          return (
            (t.prototype._watchAngularEvents = function() {
              var t = this;
              this._ngZone.onUnstable.subscribe({
                next: function() {
                  (t._didWork = !0), (t._isZoneStable = !1);
                },
              }),
                this._ngZone.runOutsideAngular(function() {
                  t._ngZone.onStable.subscribe({
                    next: function() {
                      ii.assertNotInAngularZone(),
                        oi(function() {
                          (t._isZoneStable = !0), t._runCallbacksIfReady();
                        });
                    },
                  });
                });
            }),
            (t.prototype.increasePendingRequestCount = function() {
              return (this._pendingCount += 1), (this._didWork = !0), this._pendingCount;
            }),
            (t.prototype.decreasePendingRequestCount = function() {
              if (((this._pendingCount -= 1), this._pendingCount < 0))
                throw new Error('pending async requests below zero');
              return this._runCallbacksIfReady(), this._pendingCount;
            }),
            (t.prototype.isStable = function() {
              return (
                this._isZoneStable && 0 === this._pendingCount && !this._ngZone.hasPendingMacrotasks
              );
            }),
            (t.prototype._runCallbacksIfReady = function() {
              var t = this;
              if (this.isStable())
                oi(function() {
                  for (; 0 !== t._callbacks.length; ) {
                    var e = t._callbacks.pop();
                    clearTimeout(e.timeoutId), e.doneCb(t._didWork);
                  }
                  t._didWork = !1;
                });
              else {
                var e = this.getPendingTasks();
                (this._callbacks = this._callbacks.filter(function(t) {
                  return !t.updateCb || !t.updateCb(e) || (clearTimeout(t.timeoutId), !1);
                })),
                  (this._didWork = !0);
              }
            }),
            (t.prototype.getPendingTasks = function() {
              return this.taskTrackingZone
                ? this.taskTrackingZone.macroTasks.map(function(t) {
                    return { source: t.source, creationLocation: t.creationLocation, data: t.data };
                  })
                : [];
            }),
            (t.prototype.addCallback = function(t, e, n) {
              var r = this,
                o = -1;
              e &&
                e > 0 &&
                (o = setTimeout(function() {
                  (r._callbacks = r._callbacks.filter(function(t) {
                    return t.timeoutId !== o;
                  })),
                    t(r._didWork, r.getPendingTasks());
                }, e)),
                this._callbacks.push({ doneCb: t, timeoutId: o, updateCb: n });
            }),
            (t.prototype.whenStable = function(t, e, n) {
              if (n && !this.taskTrackingZone)
                throw new Error(
                  'Task tracking zone is required when passing an update callback to whenStable(). Is "zone.js/dist/task-tracking.js" loaded?',
                );
              this.addCallback(t, e, n), this._runCallbacksIfReady();
            }),
            (t.prototype.getPendingRequestCount = function() {
              return this._pendingCount;
            }),
            (t.prototype.findProviders = function(t, e, n) {
              return [];
            }),
            t
          );
        })(),
        di = (function() {
          function t() {
            (this._applications = new Map()), yi.addToWindow(this);
          }
          return (
            (t.prototype.registerApplication = function(t, e) {
              this._applications.set(t, e);
            }),
            (t.prototype.unregisterApplication = function(t) {
              this._applications.delete(t);
            }),
            (t.prototype.unregisterAllApplications = function() {
              this._applications.clear();
            }),
            (t.prototype.getTestability = function(t) {
              return this._applications.get(t) || null;
            }),
            (t.prototype.getAllTestabilities = function() {
              return Array.from(this._applications.values());
            }),
            (t.prototype.getAllRootElements = function() {
              return Array.from(this._applications.keys());
            }),
            (t.prototype.findTestabilityInTree = function(t, e) {
              return void 0 === e && (e = !0), yi.findTestabilityInTree(this, t, e);
            }),
            t
          );
        })(),
        yi = new ((function() {
          function t() {}
          return (
            (t.prototype.addToWindow = function(t) {}),
            (t.prototype.findTestabilityInTree = function(t, e, n) {
              return null;
            }),
            t
          );
        })())(),
        gi = new Tt('AllowMultipleToken'),
        mi = function(t, e) {
          (this.name = t), (this.token = e);
        };
      function vi(t, e, n) {
        void 0 === n && (n = []);
        var r = 'Platform: ' + e,
          o = new Tt(r);
        return function(e) {
          void 0 === e && (e = []);
          var i = _i();
          if (!i || i.injector.get(gi, !1))
            if (t) t(n.concat(e).concat({ provide: o, useValue: !0 }));
            else {
              var s = n.concat(e).concat({ provide: o, useValue: !0 });
              !(function(t) {
                if (hi && !hi.destroyed && !hi.injector.get(gi, !1))
                  throw new Error(
                    'There can be only one platform. Destroy the previous one to create a new one.',
                  );
                hi = t.get(bi);
                var e = t.get(Mo, null);
                e &&
                  e.forEach(function(t) {
                    return t();
                  });
              })(Ie.create({ providers: s, name: r }));
            }
          return (function(t) {
            var e = _i();
            if (!e) throw new Error('No platform exists!');
            if (!e.injector.get(t, null))
              throw new Error(
                'A platform with a different configuration has been created. Please destroy it first.',
              );
            return e;
          })(o);
        };
      }
      function _i() {
        return hi && !hi.destroyed ? hi : null;
      }
      var bi = (function() {
        function t(t) {
          (this._injector = t),
            (this._modules = []),
            (this._destroyListeners = []),
            (this._destroyed = !1);
        }
        return (
          (t.prototype.bootstrapModuleFactory = function(t, e) {
            var n,
              r = this,
              o =
                'noop' === (n = e ? e.ngZone : void 0)
                  ? new pi()
                  : ('zone.js' === n ? void 0 : n) || new ii({ enableLongStackTrace: Xt() }),
              i = [{ provide: ii, useValue: o }];
            return o.run(function() {
              var e = Ie.create({ providers: i, parent: r.injector, name: t.moduleType.name }),
                n = t.create(e),
                s = n.injector.get($t, null);
              if (!s)
                throw new Error('No ErrorHandler. Is platform module (BrowserModule) included?');
              return (
                Bo && Oo(n.injector.get(Ho, Po) || Po),
                n.onDestroy(function() {
                  return Ei(r._modules, n);
                }),
                o.runOutsideAngular(function() {
                  return o.onError.subscribe({
                    next: function(t) {
                      s.handleError(t);
                    },
                  });
                }),
                (function(t, e, o) {
                  try {
                    var i =
                      ((s = n.injector.get(Ro)).runInitializers(),
                      s.donePromise.then(function() {
                        return r._moduleDoBootstrap(n), n;
                      }));
                    return Qe(i)
                      ? i.catch(function(n) {
                          throw (e.runOutsideAngular(function() {
                            return t.handleError(n);
                          }),
                          n);
                        })
                      : i;
                  } catch (a) {
                    throw (e.runOutsideAngular(function() {
                      return t.handleError(a);
                    }),
                    a);
                  }
                  var s;
                })(s, o)
              );
            });
          }),
          (t.prototype.bootstrapModule = function(t, e) {
            var n = this;
            void 0 === e && (e = []);
            var r = wi({}, e);
            return (function(t, e, n) {
              return t
                .get(Jo)
                .createCompiler([e])
                .compileModuleAsync(n);
            })(this.injector, r, t).then(function(t) {
              return n.bootstrapModuleFactory(t, r);
            });
          }),
          (t.prototype._moduleDoBootstrap = function(t) {
            var e = t.injector.get(Si);
            if (t._bootstrapComponents.length > 0)
              t._bootstrapComponents.forEach(function(t) {
                return e.bootstrap(t);
              });
            else {
              if (!t.instance.ngDoBootstrap)
                throw new Error(
                  'The module ' +
                    yt(t.instance.constructor) +
                    ' was bootstrapped, but it does not declare "@NgModule.bootstrap" components nor a "ngDoBootstrap" method. Please define one of these.',
                );
              t.instance.ngDoBootstrap(e);
            }
            this._modules.push(t);
          }),
          (t.prototype.onDestroy = function(t) {
            this._destroyListeners.push(t);
          }),
          Object.defineProperty(t.prototype, 'injector', {
            get: function() {
              return this._injector;
            },
            enumerable: !0,
            configurable: !0,
          }),
          (t.prototype.destroy = function() {
            if (this._destroyed) throw new Error('The platform has already been destroyed!');
            this._modules.slice().forEach(function(t) {
              return t.destroy();
            }),
              this._destroyListeners.forEach(function(t) {
                return t();
              }),
              (this._destroyed = !0);
          }),
          Object.defineProperty(t.prototype, 'destroyed', {
            get: function() {
              return this._destroyed;
            },
            enumerable: !0,
            configurable: !0,
          }),
          t
        );
      })();
      function wi(t, e) {
        return Array.isArray(e) ? e.reduce(wi, t) : Object.assign({}, t, e);
      }
      var Ci,
        Si =
          (((Ci = (function() {
            function t(t, e, n, r, o, i) {
              var s = this;
              (this._zone = t),
                (this._console = e),
                (this._injector = n),
                (this._exceptionHandler = r),
                (this._componentFactoryResolver = o),
                (this._initStatus = i),
                (this._bootstrapListeners = []),
                (this._views = []),
                (this._runningTick = !1),
                (this._enforceNoNewChanges = !1),
                (this._stable = !0),
                (this.componentTypes = []),
                (this.components = []),
                (this._enforceNoNewChanges = Xt()),
                this._zone.onMicrotaskEmpty.subscribe({
                  next: function() {
                    s._zone.run(function() {
                      s.tick();
                    });
                  },
                });
              var a = new C(function(t) {
                  (s._stable =
                    s._zone.isStable &&
                    !s._zone.hasPendingMacrotasks &&
                    !s._zone.hasPendingMicrotasks),
                    s._zone.runOutsideAngular(function() {
                      t.next(s._stable), t.complete();
                    });
                }),
                u = new C(function(t) {
                  var e;
                  s._zone.runOutsideAngular(function() {
                    e = s._zone.onStable.subscribe(function() {
                      ii.assertNotInAngularZone(),
                        oi(function() {
                          s._stable ||
                            s._zone.hasPendingMacrotasks ||
                            s._zone.hasPendingMicrotasks ||
                            ((s._stable = !0), t.next(!0));
                        });
                    });
                  });
                  var n = s._zone.onUnstable.subscribe(function() {
                    ii.assertInAngularZone(),
                      s._stable &&
                        ((s._stable = !1),
                        s._zone.runOutsideAngular(function() {
                          t.next(!1);
                        }));
                  });
                  return function() {
                    e.unsubscribe(), n.unsubscribe();
                  };
                });
              this.isStable = (function() {
                for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                var n = Number.POSITIVE_INFINITY,
                  r = null,
                  o = t[t.length - 1];
                return (
                  A(o)
                    ? ((r = t.pop()),
                      t.length > 1 && 'number' == typeof t[t.length - 1] && (n = t.pop()))
                    : 'number' == typeof o && (n = t.pop()),
                  null === r && 1 === t.length && t[0] instanceof C ? t[0] : K(n)(Z(t, r))
                );
              })(
                a,
                u.pipe(function(t) {
                  return $()(
                    ((e = rt),
                    function(t) {
                      var n;
                      n =
                        'function' == typeof e
                          ? e
                          : function() {
                              return e;
                            };
                      var r = Object.create(t, et);
                      return (r.source = t), (r.subjectFactory = n), r;
                    })(t),
                  );
                  var e;
                }),
              );
            }
            return (
              (t.prototype.bootstrap = function(t, e) {
                var n,
                  r = this;
                if (!this._initStatus.done)
                  throw new Error(
                    'Cannot bootstrap as there are still asynchronous initializers running. Bootstrap components in the `ngDoBootstrap` method of the root module.',
                  );
                (n =
                  t instanceof Je ? t : this._componentFactoryResolver.resolveComponentFactory(t)),
                  this.componentTypes.push(n.componentType);
                var o = n instanceof rn ? null : this._injector.get(Vt),
                  i = n.create(Ie.NULL, [], e || n.selector, o);
                i.onDestroy(function() {
                  r._unloadComponent(i);
                });
                var s = i.injector.get(fi, null);
                return (
                  s && i.injector.get(di).registerApplication(i.location.nativeElement, s),
                  this._loadComponent(i),
                  Xt() &&
                    this._console.log(
                      'Angular is running in the development mode. Call enableProdMode() to enable the production mode.',
                    ),
                  i
                );
              }),
              (t.prototype.tick = function() {
                var e = this;
                if (this._runningTick) throw new Error('ApplicationRef.tick is called recursively');
                var n = t._tickScope();
                try {
                  this._runningTick = !0;
                  for (var r = 0, o = this._views; r < o.length; r++) o[r].detectChanges();
                  if (this._enforceNoNewChanges)
                    for (var i = 0, s = this._views; i < s.length; i++) s[i].checkNoChanges();
                } catch (a) {
                  this._zone.runOutsideAngular(function() {
                    return e._exceptionHandler.handleError(a);
                  });
                } finally {
                  (this._runningTick = !1), ni(n);
                }
              }),
              (t.prototype.attachView = function(t) {
                var e = t;
                this._views.push(e), e.attachToAppRef(this);
              }),
              (t.prototype.detachView = function(t) {
                var e = t;
                Ei(this._views, e), e.detachFromAppRef();
              }),
              (t.prototype._loadComponent = function(t) {
                this.attachView(t.hostView),
                  this.tick(),
                  this.components.push(t),
                  this._injector
                    .get(Lo, [])
                    .concat(this._bootstrapListeners)
                    .forEach(function(e) {
                      return e(t);
                    });
              }),
              (t.prototype._unloadComponent = function(t) {
                this.detachView(t.hostView), Ei(this.components, t);
              }),
              (t.prototype.ngOnDestroy = function() {
                this._views.slice().forEach(function(t) {
                  return t.destroy();
                });
              }),
              Object.defineProperty(t.prototype, 'viewCount', {
                get: function() {
                  return this._views.length;
                },
                enumerable: !0,
                configurable: !0,
              }),
              t
            );
          })())._tickScope = ei('ApplicationRef#tick()')),
          Ci);
      function Ei(t, e) {
        var n = t.indexOf(e);
        n > -1 && t.splice(n, 1);
      }
      var Ti = function() {},
        xi = function() {},
        Pi = { factoryPathPrefix: '', factoryPathSuffix: '.ngfactory' },
        Oi = (function() {
          function t(t, e) {
            (this._compiler = t), (this._config = e || Pi);
          }
          return (
            (t.prototype.load = function(t) {
              return !Bo && this._compiler instanceof $o
                ? this.loadFactory(t)
                : this.loadAndCompile(t);
            }),
            (t.prototype.loadAndCompile = function(t) {
              var e = this,
                r = t.split('#'),
                o = r[0],
                i = r[1];
              return (
                void 0 === i && (i = 'default'),
                n('zn8P')(o)
                  .then(function(t) {
                    return t[i];
                  })
                  .then(function(t) {
                    return ki(t, o, i);
                  })
                  .then(function(t) {
                    return e._compiler.compileModuleAsync(t);
                  })
              );
            }),
            (t.prototype.loadFactory = function(t) {
              var e = t.split('#'),
                r = e[0],
                o = e[1],
                i = 'NgFactory';
              return (
                void 0 === o && ((o = 'default'), (i = '')),
                n('zn8P')(this._config.factoryPathPrefix + r + this._config.factoryPathSuffix)
                  .then(function(t) {
                    return t[o + i];
                  })
                  .then(function(t) {
                    return ki(t, r, o);
                  })
              );
            }),
            t
          );
        })();
      function ki(t, e, n) {
        if (!t) throw new Error("Cannot find '" + n + "' in '" + e + "'");
        return t;
      }
      var Ai = function(t, e) {
          (this.name = t), (this.callback = e);
        },
        Ii = (function() {
          function t(t, e, n) {
            (this.listeners = []),
              (this.parent = null),
              (this._debugContext = n),
              (this.nativeNode = t),
              e && e instanceof Ni && e.addChild(this);
          }
          return (
            Object.defineProperty(t.prototype, 'injector', {
              get: function() {
                return this._debugContext.injector;
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, 'componentInstance', {
              get: function() {
                return this._debugContext.component;
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, 'context', {
              get: function() {
                return this._debugContext.context;
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, 'references', {
              get: function() {
                return this._debugContext.references;
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, 'providerTokens', {
              get: function() {
                return this._debugContext.providerTokens;
              },
              enumerable: !0,
              configurable: !0,
            }),
            t
          );
        })(),
        Ni = (function(t) {
          function e(e, n, r) {
            var o = this;
            return (
              ((o = t.call(this, e, n, r) || this).properties = {}),
              (o.attributes = {}),
              (o.classes = {}),
              (o.styles = {}),
              (o.childNodes = []),
              (o.nativeElement = e),
              o
            );
          }
          return (
            __extends(e, t),
            (e.prototype.addChild = function(t) {
              t && (this.childNodes.push(t), (t.parent = this));
            }),
            (e.prototype.removeChild = function(t) {
              var e = this.childNodes.indexOf(t);
              -1 !== e && ((t.parent = null), this.childNodes.splice(e, 1));
            }),
            (e.prototype.insertChildrenAfter = function(t, e) {
              var n,
                r = this,
                o = this.childNodes.indexOf(t);
              -1 !== o &&
                ((n = this.childNodes).splice.apply(n, [o + 1, 0].concat(e)),
                e.forEach(function(e) {
                  e.parent && e.parent.removeChild(e), (t.parent = r);
                }));
            }),
            (e.prototype.insertBefore = function(t, e) {
              var n = this.childNodes.indexOf(t);
              -1 === n
                ? this.addChild(e)
                : (e.parent && e.parent.removeChild(e),
                  (e.parent = this),
                  this.childNodes.splice(n, 0, e));
            }),
            (e.prototype.query = function(t) {
              return this.queryAll(t)[0] || null;
            }),
            (e.prototype.queryAll = function(t) {
              var n = [];
              return (
                (function t(n, r, o) {
                  n.childNodes.forEach(function(n) {
                    n instanceof e && (r(n) && o.push(n), t(n, r, o));
                  });
                })(this, t, n),
                n
              );
            }),
            (e.prototype.queryAllNodes = function(t) {
              var n = [];
              return (
                (function t(n, r, o) {
                  n instanceof e &&
                    n.childNodes.forEach(function(n) {
                      r(n) && o.push(n), n instanceof e && t(n, r, o);
                    });
                })(this, t, n),
                n
              );
            }),
            Object.defineProperty(e.prototype, 'children', {
              get: function() {
                return this.childNodes.filter(function(t) {
                  return t instanceof e;
                });
              },
              enumerable: !0,
              configurable: !0,
            }),
            (e.prototype.triggerEventHandler = function(t, e) {
              this.listeners.forEach(function(n) {
                n.name == t && n.callback(e);
              });
            }),
            e
          );
        })(Ii),
        Ri = new Map(),
        Di = function(t) {
          return Ri.get(t) || null;
        };
      function Fi(t) {
        Ri.set(t.nativeNode, t);
      }
      var ji = vi(null, 'core', [
        { provide: Vo, useValue: 'unknown' },
        { provide: bi, deps: [Ie] },
        { provide: di, deps: [] },
        { provide: Uo, deps: [] },
      ]);
      function Mi() {
        return Pn;
      }
      function Vi() {
        return On;
      }
      function Li(t) {
        return t ? (Bo && Oo(t), t) : Po;
      }
      function Ui(t) {
        var e = [];
        return (
          t.onStable.subscribe(function() {
            for (; e.length; ) e.pop()();
          }),
          function(t) {
            e.push(t);
          }
        );
      }
      var Hi = function(t) {};
      function Bi(t, e, n, r, o, i) {
        t |= 1;
        var s = cr(e),
          a = s.matchedQueries,
          u = s.references;
        return {
          nodeIndex: -1,
          parent: null,
          renderParent: null,
          bindingIndex: -1,
          outputIndex: -1,
          flags: t,
          checkIndex: -1,
          childFlags: 0,
          directChildFlags: 0,
          childMatchedQueries: 0,
          matchedQueries: a,
          matchedQueryIds: s.matchedQueryIds,
          references: u,
          ngContentIndex: n,
          childCount: r,
          bindings: [],
          bindingFlags: 0,
          outputs: [],
          element: {
            ns: null,
            name: null,
            attrs: null,
            template: i ? dr(i) : null,
            componentProvider: null,
            componentView: null,
            componentRendererType: null,
            publicProviders: null,
            allProviders: null,
            handleEvent: o || qn,
          },
          provider: null,
          text: null,
          query: null,
          ngContent: null,
        };
      }
      function zi(t, e, n, r, o, i, s, a, u, l, c, h) {
        var p;
        void 0 === s && (s = []), l || (l = qn);
        var f = cr(n),
          d = f.matchedQueries,
          y = f.references,
          g = f.matchedQueryIds,
          m = null,
          v = null;
        i && ((m = (p = wr(i))[0]), (v = p[1])), (a = a || []);
        for (var _ = new Array(a.length), b = 0; b < a.length; b++) {
          var w = a[b],
            C = w[0],
            S = w[1],
            E = w[2],
            T = wr(S),
            x = T[0],
            P = T[1],
            O = void 0,
            k = void 0;
          switch (15 & C) {
            case 4:
              k = E;
              break;
            case 1:
            case 8:
              O = E;
          }
          _[b] = { flags: C, ns: x, name: P, nonMinifiedName: P, securityContext: O, suffix: k };
        }
        u = u || [];
        var A = new Array(u.length);
        for (b = 0; b < u.length; b++) {
          var I = u[b],
            N = I[0],
            R = I[1];
          A[b] = { type: 0, target: N, eventName: R, propName: null };
        }
        var D = (s = s || []).map(function(t) {
          var e = t[0],
            n = t[1],
            r = wr(e);
          return [r[0], r[1], n];
        });
        return (
          (h = (function(t) {
            if (t && t.id === Kn) {
              var e =
                (null != t.encapsulation && t.encapsulation !== Bt.None) ||
                t.styles.length ||
                Object.keys(t.data).length;
              t.id = e ? 'c' + Jn++ : Zn;
            }
            return t && t.id === Zn && (t = null), t || null;
          })(h)),
          c && (e |= 33554432),
          {
            nodeIndex: -1,
            parent: null,
            renderParent: null,
            bindingIndex: -1,
            outputIndex: -1,
            checkIndex: t,
            flags: (e |= 1),
            childFlags: 0,
            directChildFlags: 0,
            childMatchedQueries: 0,
            matchedQueries: d,
            matchedQueryIds: g,
            references: y,
            ngContentIndex: r,
            childCount: o,
            bindings: _,
            bindingFlags: Cr(_),
            outputs: A,
            element: {
              ns: m,
              name: v,
              attrs: D,
              template: null,
              componentProvider: null,
              componentView: c || null,
              componentRendererType: h,
              publicProviders: null,
              allProviders: null,
              handleEvent: l || qn,
            },
            provider: null,
            text: null,
            query: null,
            ngContent: null,
          }
        );
      }
      function qi(t, e, n) {
        var r,
          o = n.element,
          i = t.root.selectorOrNode,
          s = t.renderer;
        if (t.parent || !i) {
          r = o.name ? s.createElement(o.name, o.ns) : s.createComment('');
          var a = pr(t, e, n);
          a && s.appendChild(a, r);
        } else
          r = s.selectRootElement(
            i,
            !!o.componentRendererType && o.componentRendererType.encapsulation === Bt.ShadowDom,
          );
        if (o.attrs)
          for (var u = 0; u < o.attrs.length; u++) {
            var l = o.attrs[u],
              c = l[0],
              h = l[1],
              p = l[2];
            s.setAttribute(r, h, p, c);
          }
        return r;
      }
      function Gi(t, e, n, r) {
        for (var o = 0; o < n.outputs.length; o++) {
          var i = n.outputs[o],
            s = Wi(t, n.nodeIndex, ((h = i.eventName), (c = i.target) ? c + ':' + h : h)),
            a = i.target,
            u = t;
          'component' === i.target && ((a = null), (u = e));
          var l = u.renderer.listen(a || r, i.eventName, s);
          t.disposables[n.outputIndex + o] = l;
        }
        var c, h;
      }
      function Wi(t, e, n) {
        return function(r) {
          return rr(t, e, n, r);
        };
      }
      function Qi(t, e, n, r) {
        if (!Xn(t, e, n, r)) return !1;
        var o = e.bindings[n],
          i = Ln(t, e.nodeIndex),
          s = i.renderElement,
          a = o.name;
        switch (15 & o.flags) {
          case 1:
            !(function(t, e, n, r, o, i) {
              var s = e.securityContext,
                a = s ? t.root.sanitizer.sanitize(s, i) : i;
              a = null != a ? a.toString() : null;
              var u = t.renderer;
              null != i ? u.setAttribute(n, o, a, r) : u.removeAttribute(n, o, r);
            })(t, o, s, o.ns, a, r);
            break;
          case 2:
            !(function(t, e, n, r) {
              var o = t.renderer;
              r ? o.addClass(e, n) : o.removeClass(e, n);
            })(t, s, a, r);
            break;
          case 4:
            !(function(t, e, n, r, o) {
              var i = t.root.sanitizer.sanitize(we.STYLE, o);
              if (null != i) {
                i = i.toString();
                var s = e.suffix;
                null != s && (i += s);
              } else i = null;
              var a = t.renderer;
              null != i ? a.setStyle(n, r, i) : a.removeStyle(n, r);
            })(t, o, s, a, r);
            break;
          case 8:
            !(function(t, e, n, r, o) {
              var i = e.securityContext,
                s = i ? t.root.sanitizer.sanitize(i, o) : o;
              t.renderer.setProperty(n, r, s);
            })(33554432 & e.flags && 32 & o.flags ? i.componentView : t, o, s, a, r);
        }
        return !0;
      }
      function Ki(t, e, n) {
        var r = [];
        for (var o in n) r.push({ propName: o, bindingType: n[o] });
        return {
          nodeIndex: -1,
          parent: null,
          renderParent: null,
          bindingIndex: -1,
          outputIndex: -1,
          checkIndex: -1,
          flags: t,
          childFlags: 0,
          directChildFlags: 0,
          childMatchedQueries: 0,
          ngContentIndex: -1,
          matchedQueries: {},
          matchedQueryIds: 0,
          references: {},
          childCount: 0,
          bindings: [],
          bindingFlags: 0,
          outputs: [],
          element: null,
          provider: null,
          text: null,
          query: { id: e, filterId: lr(e), bindings: r },
          ngContent: null,
        };
      }
      function Zi(t) {
        for (var e = t.def.nodeMatchedQueries; t.parent && ur(t); ) {
          var n = t.parentNodeDef;
          t = t.parent;
          for (var r = n.nodeIndex + n.childCount, o = 0; o <= r; o++) {
            67108864 & (i = t.def.nodes[o]).flags &&
              536870912 & i.flags &&
              (i.query.filterId & e) === i.query.filterId &&
              Bn(t, o).setDirty(),
              (!(1 & i.flags && o + i.childCount < n.nodeIndex) &&
                67108864 & i.childFlags &&
                536870912 & i.childFlags) ||
                (o += i.childCount);
          }
        }
        if (134217728 & t.def.nodeFlags)
          for (o = 0; o < t.def.nodes.length; o++) {
            var i;
            134217728 & (i = t.def.nodes[o]).flags && 536870912 & i.flags && Bn(t, o).setDirty(),
              (o += i.childCount);
          }
      }
      function $i(t, e) {
        var n = Bn(t, e.nodeIndex);
        if (n.dirty) {
          var r,
            o = void 0;
          if (67108864 & e.flags) {
            var i = e.parent.parent;
            (o = Ji(t, i.nodeIndex, i.nodeIndex + i.childCount, e.query, [])),
              (r = Un(t, e.parent.nodeIndex).instance);
          } else
            134217728 & e.flags &&
              ((o = Ji(t, 0, t.def.nodes.length - 1, e.query, [])), (r = t.component));
          n.reset(o);
          for (var s = e.query.bindings, a = !1, u = 0; u < s.length; u++) {
            var l = s[u],
              c = void 0;
            switch (l.bindingType) {
              case 0:
                c = n.first;
                break;
              case 1:
                (c = n), (a = !0);
            }
            r[l.propName] = c;
          }
          a && n.notifyOnChanges();
        }
      }
      function Ji(t, e, n, r, o) {
        for (var i = e; i <= n; i++) {
          var s = t.def.nodes[i],
            a = s.matchedQueries[r.id];
          if (
            (null != a && o.push(Yi(t, s, a)),
            1 & s.flags &&
              s.element.template &&
              (s.element.template.nodeMatchedQueries & r.filterId) === r.filterId)
          ) {
            var u = Ln(t, i);
            if (
              ((s.childMatchedQueries & r.filterId) === r.filterId &&
                (Ji(t, i + 1, i + s.childCount, r, o), (i += s.childCount)),
              16777216 & s.flags)
            )
              for (var l = u.viewContainer._embeddedViews, c = 0; c < l.length; c++) {
                var h = l[c],
                  p = or(h);
                p && p === u && Ji(h, 0, h.def.nodes.length - 1, r, o);
              }
            var f = u.template._projectedViews;
            if (f)
              for (c = 0; c < f.length; c++) {
                var d = f[c];
                Ji(d, 0, d.def.nodes.length - 1, r, o);
              }
          }
          (s.childMatchedQueries & r.filterId) !== r.filterId && (i += s.childCount);
        }
        return o;
      }
      function Yi(t, e, n) {
        if (null != n)
          switch (n) {
            case 1:
              return Ln(t, e.nodeIndex).renderElement;
            case 0:
              return new sn(Ln(t, e.nodeIndex).renderElement);
            case 2:
              return Ln(t, e.nodeIndex).template;
            case 3:
              return Ln(t, e.nodeIndex).viewContainer;
            case 4:
              return Un(t, e.nodeIndex).instance;
          }
      }
      function Xi(t, e, n) {
        var r = pr(t, e, n);
        r && mr(t, n.ngContent.index, 1, r, null, void 0);
      }
      function ts(t, e) {
        return ns(32, t, new Array(e));
      }
      function es(t, e) {
        for (var n = Object.keys(e), r = n.length, o = new Array(r), i = 0; i < r; i++) {
          var s = n[i];
          o[e[s]] = s;
        }
        return ns(64, t, o);
      }
      function ns(t, e, n) {
        for (var r = new Array(n.length), o = 0; o < n.length; o++) {
          var i = n[o];
          r[o] = {
            flags: 8,
            name: i,
            ns: null,
            nonMinifiedName: i,
            securityContext: null,
            suffix: null,
          };
        }
        return {
          nodeIndex: -1,
          parent: null,
          renderParent: null,
          bindingIndex: -1,
          outputIndex: -1,
          checkIndex: e,
          flags: t,
          childFlags: 0,
          directChildFlags: 0,
          childMatchedQueries: 0,
          matchedQueries: {},
          matchedQueryIds: 0,
          references: {},
          ngContentIndex: -1,
          childCount: 0,
          bindings: r,
          bindingFlags: Cr(r),
          outputs: [],
          element: null,
          provider: null,
          text: null,
          query: null,
          ngContent: null,
        };
      }
      function rs(t, e, n) {
        for (var r = new Array(n.length - 1), o = 1; o < n.length; o++)
          r[o - 1] = {
            flags: 8,
            name: null,
            ns: null,
            nonMinifiedName: null,
            securityContext: null,
            suffix: n[o],
          };
        return {
          nodeIndex: -1,
          parent: null,
          renderParent: null,
          bindingIndex: -1,
          outputIndex: -1,
          checkIndex: t,
          flags: 2,
          childFlags: 0,
          directChildFlags: 0,
          childMatchedQueries: 0,
          matchedQueries: {},
          matchedQueryIds: 0,
          references: {},
          ngContentIndex: e,
          childCount: 0,
          bindings: r,
          bindingFlags: 8,
          outputs: [],
          element: null,
          provider: null,
          text: { prefix: n[0] },
          query: null,
          ngContent: null,
        };
      }
      function os(t, e, n) {
        var r,
          o = t.renderer;
        r = o.createText(n.text.prefix);
        var i = pr(t, e, n);
        return i && o.appendChild(i, r), { renderText: r };
      }
      function is(t, e) {
        return (null != t ? t.toString() : '') + e.suffix;
      }
      function ss(t, e, n, r) {
        for (
          var o = 0,
            i = 0,
            s = 0,
            a = 0,
            u = 0,
            l = null,
            c = null,
            h = !1,
            p = !1,
            f = null,
            d = 0;
          d < e.length;
          d++
        ) {
          var y = e[d];
          if (
            ((y.nodeIndex = d),
            (y.parent = l),
            (y.bindingIndex = o),
            (y.outputIndex = i),
            (y.renderParent = c),
            (s |= y.flags),
            (u |= y.matchedQueryIds),
            y.element)
          ) {
            var g = y.element;
            (g.publicProviders = l ? l.element.publicProviders : Object.create(null)),
              (g.allProviders = g.publicProviders),
              (h = !1),
              (p = !1),
              y.element.template && (u |= y.element.template.nodeMatchedQueries);
          }
          if (
            (us(l, y, e.length),
            (o += y.bindings.length),
            (i += y.outputs.length),
            !c && 3 & y.flags && (f = y),
            20224 & y.flags)
          ) {
            h ||
              ((h = !0),
              (l.element.publicProviders = Object.create(l.element.publicProviders)),
              (l.element.allProviders = l.element.publicProviders));
            var m = 0 != (32768 & y.flags);
            0 == (8192 & y.flags) || m
              ? (l.element.publicProviders[Wn(y.provider.token)] = y)
              : (p ||
                  ((p = !0), (l.element.allProviders = Object.create(l.element.publicProviders))),
                (l.element.allProviders[Wn(y.provider.token)] = y)),
              m && (l.element.componentProvider = y);
          }
          if (
            (l
              ? ((l.childFlags |= y.flags),
                (l.directChildFlags |= y.flags),
                (l.childMatchedQueries |= y.matchedQueryIds),
                y.element &&
                  y.element.template &&
                  (l.childMatchedQueries |= y.element.template.nodeMatchedQueries))
              : (a |= y.flags),
            y.childCount > 0)
          )
            (l = y), as(y) || (c = y);
          else
            for (; l && d === l.nodeIndex + l.childCount; ) {
              var v = l.parent;
              v &&
                ((v.childFlags |= l.childFlags), (v.childMatchedQueries |= l.childMatchedQueries)),
                (c = (l = v) && as(l) ? l.renderParent : l);
            }
        }
        return {
          factory: null,
          nodeFlags: s,
          rootNodeFlags: a,
          nodeMatchedQueries: u,
          flags: t,
          nodes: e,
          updateDirectives: n || qn,
          updateRenderer: r || qn,
          handleEvent: function(t, n, r, o) {
            return e[n].element.handleEvent(t, r, o);
          },
          bindingCount: o,
          outputCount: i,
          lastRenderRootNode: f,
        };
      }
      function as(t) {
        return 0 != (1 & t.flags) && null === t.element.name;
      }
      function us(t, e, n) {
        var r = e.element && e.element.template;
        if (r) {
          if (!r.lastRenderRootNode)
            throw new Error('Illegal State: Embedded templates without nodes are not allowed!');
          if (r.lastRenderRootNode && 16777216 & r.lastRenderRootNode.flags)
            throw new Error(
              "Illegal State: Last root node of a template can't have embedded views, at index " +
                e.nodeIndex +
                '!',
            );
        }
        if (20224 & e.flags && 0 == (1 & (t ? t.flags : 0)))
          throw new Error(
            'Illegal State: StaticProvider/Directive nodes need to be children of elements or anchors, at index ' +
              e.nodeIndex +
              '!',
          );
        if (e.query) {
          if (67108864 & e.flags && (!t || 0 == (16384 & t.flags)))
            throw new Error(
              'Illegal State: Content Query nodes need to be children of directives, at index ' +
                e.nodeIndex +
                '!',
            );
          if (134217728 & e.flags && t)
            throw new Error(
              'Illegal State: View Query nodes have to be top level nodes, at index ' +
                e.nodeIndex +
                '!',
            );
        }
        if (e.childCount) {
          var o = t ? t.nodeIndex + t.childCount : n - 1;
          if (e.nodeIndex <= o && e.nodeIndex + e.childCount > o)
            throw new Error(
              'Illegal State: childCount of node leads outside of parent, at index ' +
                e.nodeIndex +
                '!',
            );
        }
      }
      function ls(t, e, n, r) {
        var o = ps(t.root, t.renderer, t, e, n);
        return fs(o, t.component, r), ds(o), o;
      }
      function cs(t, e, n) {
        var r = ps(t, t.renderer, null, null, e);
        return fs(r, n, n), ds(r), r;
      }
      function hs(t, e, n, r) {
        var o,
          i = e.element.componentRendererType;
        return (
          (o = i ? t.root.rendererFactory.createRenderer(r, i) : t.root.renderer),
          ps(t.root, o, t, e.element.componentProvider, n)
        );
      }
      function ps(t, e, n, r, o) {
        var i = new Array(o.nodes.length),
          s = o.outputCount ? new Array(o.outputCount) : null;
        return {
          def: o,
          parent: n,
          viewContainerParent: null,
          parentNodeDef: r,
          context: null,
          component: null,
          nodes: i,
          state: 13,
          root: t,
          renderer: e,
          oldValues: new Array(o.bindingCount),
          disposables: s,
          initIndex: -1,
        };
      }
      function fs(t, e, n) {
        (t.component = e), (t.context = n);
      }
      function ds(t) {
        var e;
        ar(t) && (e = Ln(t.parent, t.parentNodeDef.parent.nodeIndex).renderElement);
        for (var n = t.def, r = t.nodes, o = 0; o < n.nodes.length; o++) {
          var i = n.nodes[o],
            s = void 0;
          switch ((zn.setCurrentNode(t, o), 201347067 & i.flags)) {
            case 1:
              var a = qi(t, e, i),
                u = void 0;
              if (33554432 & i.flags) {
                var l = dr(i.element.componentView);
                u = zn.createComponentView(t, i, l, a);
              }
              Gi(t, u, i, a),
                (s = {
                  renderElement: a,
                  componentView: u,
                  viewContainer: null,
                  template: i.element.template ? Hr(t, i) : void 0,
                }),
                16777216 & i.flags && (s.viewContainer = Mr(t, i, s));
              break;
            case 2:
              s = os(t, e, i);
              break;
            case 512:
            case 1024:
            case 2048:
            case 256:
              (s = r[o]) || 4096 & i.flags || (s = { instance: uo(t, i) });
              break;
            case 16:
              s = { instance: lo(t, i) };
              break;
            case 16384:
              (s = r[o]) || (s = { instance: co(t, i) }),
                32768 & i.flags &&
                  fs(Ln(t, i.parent.nodeIndex).componentView, s.instance, s.instance);
              break;
            case 32:
            case 64:
            case 128:
              s = { value: void 0 };
              break;
            case 67108864:
            case 134217728:
              s = new Io();
              break;
            case 8:
              Xi(t, e, i), (s = void 0);
          }
          r[o] = s;
        }
        Ss(t, Cs.CreateViewNodes), Ps(t, 201326592, 268435456, 0);
      }
      function ys(t) {
        vs(t),
          zn.updateDirectives(t, 1),
          Es(t, Cs.CheckNoChanges),
          zn.updateRenderer(t, 1),
          Ss(t, Cs.CheckNoChanges),
          (t.state &= -97);
      }
      function gs(t) {
        1 & t.state ? ((t.state &= -2), (t.state |= 2)) : (t.state &= -3),
          jn(t, 0, 256),
          vs(t),
          zn.updateDirectives(t, 0),
          Es(t, Cs.CheckAndUpdate),
          Ps(t, 67108864, 536870912, 0);
        var e = jn(t, 256, 512);
        _o(t, 2097152 | (e ? 1048576 : 0)),
          zn.updateRenderer(t, 0),
          Ss(t, Cs.CheckAndUpdate),
          Ps(t, 134217728, 536870912, 0),
          _o(t, 8388608 | ((e = jn(t, 512, 768)) ? 4194304 : 0)),
          2 & t.def.flags && (t.state &= -9),
          (t.state &= -97),
          jn(t, 768, 1024);
      }
      function ms(t, e, n, r, o, i, s, a, u, l, c, h, p) {
        return 0 === n
          ? (function(t, e, n, r, o, i, s, a, u, l, c, h) {
              switch (201347067 & e.flags) {
                case 1:
                  return (function(t, e, n, r, o, i, s, a, u, l, c, h) {
                    var p = e.bindings.length,
                      f = !1;
                    return (
                      p > 0 && Qi(t, e, 0, n) && (f = !0),
                      p > 1 && Qi(t, e, 1, r) && (f = !0),
                      p > 2 && Qi(t, e, 2, o) && (f = !0),
                      p > 3 && Qi(t, e, 3, i) && (f = !0),
                      p > 4 && Qi(t, e, 4, s) && (f = !0),
                      p > 5 && Qi(t, e, 5, a) && (f = !0),
                      p > 6 && Qi(t, e, 6, u) && (f = !0),
                      p > 7 && Qi(t, e, 7, l) && (f = !0),
                      p > 8 && Qi(t, e, 8, c) && (f = !0),
                      p > 9 && Qi(t, e, 9, h) && (f = !0),
                      f
                    );
                  })(t, e, n, r, o, i, s, a, u, l, c, h);
                case 2:
                  return (function(t, e, n, r, o, i, s, a, u, l, c, h) {
                    var p = !1,
                      f = e.bindings,
                      d = f.length;
                    if (
                      (d > 0 && Xn(t, e, 0, n) && (p = !0),
                      d > 1 && Xn(t, e, 1, r) && (p = !0),
                      d > 2 && Xn(t, e, 2, o) && (p = !0),
                      d > 3 && Xn(t, e, 3, i) && (p = !0),
                      d > 4 && Xn(t, e, 4, s) && (p = !0),
                      d > 5 && Xn(t, e, 5, a) && (p = !0),
                      d > 6 && Xn(t, e, 6, u) && (p = !0),
                      d > 7 && Xn(t, e, 7, l) && (p = !0),
                      d > 8 && Xn(t, e, 8, c) && (p = !0),
                      d > 9 && Xn(t, e, 9, h) && (p = !0),
                      p)
                    ) {
                      var y = e.text.prefix;
                      d > 0 && (y += is(n, f[0])),
                        d > 1 && (y += is(r, f[1])),
                        d > 2 && (y += is(o, f[2])),
                        d > 3 && (y += is(i, f[3])),
                        d > 4 && (y += is(s, f[4])),
                        d > 5 && (y += is(a, f[5])),
                        d > 6 && (y += is(u, f[6])),
                        d > 7 && (y += is(l, f[7])),
                        d > 8 && (y += is(c, f[8])),
                        d > 9 && (y += is(h, f[9]));
                      var g = Vn(t, e.nodeIndex).renderText;
                      t.renderer.setValue(g, y);
                    }
                    return p;
                  })(t, e, n, r, o, i, s, a, u, l, c, h);
                case 16384:
                  return (function(t, e, n, r, o, i, s, a, u, l, c, h) {
                    var p = Un(t, e.nodeIndex),
                      f = p.instance,
                      d = !1,
                      y = void 0,
                      g = e.bindings.length;
                    return (
                      g > 0 && Yn(t, e, 0, n) && ((d = !0), (y = vo(t, p, e, 0, n, y))),
                      g > 1 && Yn(t, e, 1, r) && ((d = !0), (y = vo(t, p, e, 1, r, y))),
                      g > 2 && Yn(t, e, 2, o) && ((d = !0), (y = vo(t, p, e, 2, o, y))),
                      g > 3 && Yn(t, e, 3, i) && ((d = !0), (y = vo(t, p, e, 3, i, y))),
                      g > 4 && Yn(t, e, 4, s) && ((d = !0), (y = vo(t, p, e, 4, s, y))),
                      g > 5 && Yn(t, e, 5, a) && ((d = !0), (y = vo(t, p, e, 5, a, y))),
                      g > 6 && Yn(t, e, 6, u) && ((d = !0), (y = vo(t, p, e, 6, u, y))),
                      g > 7 && Yn(t, e, 7, l) && ((d = !0), (y = vo(t, p, e, 7, l, y))),
                      g > 8 && Yn(t, e, 8, c) && ((d = !0), (y = vo(t, p, e, 8, c, y))),
                      g > 9 && Yn(t, e, 9, h) && ((d = !0), (y = vo(t, p, e, 9, h, y))),
                      y && f.ngOnChanges(y),
                      65536 & e.flags && Mn(t, 256, e.nodeIndex) && f.ngOnInit(),
                      262144 & e.flags && f.ngDoCheck(),
                      d
                    );
                  })(t, e, n, r, o, i, s, a, u, l, c, h);
                case 32:
                case 64:
                case 128:
                  return (function(t, e, n, r, o, i, s, a, u, l, c, h) {
                    var p = e.bindings,
                      f = !1,
                      d = p.length;
                    if (
                      (d > 0 && Xn(t, e, 0, n) && (f = !0),
                      d > 1 && Xn(t, e, 1, r) && (f = !0),
                      d > 2 && Xn(t, e, 2, o) && (f = !0),
                      d > 3 && Xn(t, e, 3, i) && (f = !0),
                      d > 4 && Xn(t, e, 4, s) && (f = !0),
                      d > 5 && Xn(t, e, 5, a) && (f = !0),
                      d > 6 && Xn(t, e, 6, u) && (f = !0),
                      d > 7 && Xn(t, e, 7, l) && (f = !0),
                      d > 8 && Xn(t, e, 8, c) && (f = !0),
                      d > 9 && Xn(t, e, 9, h) && (f = !0),
                      f)
                    ) {
                      var y = Hn(t, e.nodeIndex),
                        g = void 0;
                      switch (201347067 & e.flags) {
                        case 32:
                          (g = new Array(p.length)),
                            d > 0 && (g[0] = n),
                            d > 1 && (g[1] = r),
                            d > 2 && (g[2] = o),
                            d > 3 && (g[3] = i),
                            d > 4 && (g[4] = s),
                            d > 5 && (g[5] = a),
                            d > 6 && (g[6] = u),
                            d > 7 && (g[7] = l),
                            d > 8 && (g[8] = c),
                            d > 9 && (g[9] = h);
                          break;
                        case 64:
                          (g = {}),
                            d > 0 && (g[p[0].name] = n),
                            d > 1 && (g[p[1].name] = r),
                            d > 2 && (g[p[2].name] = o),
                            d > 3 && (g[p[3].name] = i),
                            d > 4 && (g[p[4].name] = s),
                            d > 5 && (g[p[5].name] = a),
                            d > 6 && (g[p[6].name] = u),
                            d > 7 && (g[p[7].name] = l),
                            d > 8 && (g[p[8].name] = c),
                            d > 9 && (g[p[9].name] = h);
                          break;
                        case 128:
                          var m = n;
                          switch (d) {
                            case 1:
                              g = m.transform(n);
                              break;
                            case 2:
                              g = m.transform(r);
                              break;
                            case 3:
                              g = m.transform(r, o);
                              break;
                            case 4:
                              g = m.transform(r, o, i);
                              break;
                            case 5:
                              g = m.transform(r, o, i, s);
                              break;
                            case 6:
                              g = m.transform(r, o, i, s, a);
                              break;
                            case 7:
                              g = m.transform(r, o, i, s, a, u);
                              break;
                            case 8:
                              g = m.transform(r, o, i, s, a, u, l);
                              break;
                            case 9:
                              g = m.transform(r, o, i, s, a, u, l, c);
                              break;
                            case 10:
                              g = m.transform(r, o, i, s, a, u, l, c, h);
                          }
                      }
                      y.value = g;
                    }
                    return f;
                  })(t, e, n, r, o, i, s, a, u, l, c, h);
                default:
                  throw 'unreachable';
              }
            })(t, e, r, o, i, s, a, u, l, c, h, p)
          : (function(t, e, n) {
              switch (201347067 & e.flags) {
                case 1:
                  return (function(t, e, n) {
                    for (var r = !1, o = 0; o < n.length; o++) Qi(t, e, o, n[o]) && (r = !0);
                    return r;
                  })(t, e, n);
                case 2:
                  return (function(t, e, n) {
                    for (var r = e.bindings, o = !1, i = 0; i < n.length; i++)
                      Xn(t, e, i, n[i]) && (o = !0);
                    if (o) {
                      var s = '';
                      for (i = 0; i < n.length; i++) s += is(n[i], r[i]);
                      s = e.text.prefix + s;
                      var a = Vn(t, e.nodeIndex).renderText;
                      t.renderer.setValue(a, s);
                    }
                    return o;
                  })(t, e, n);
                case 16384:
                  return (function(t, e, n) {
                    for (
                      var r = Un(t, e.nodeIndex), o = r.instance, i = !1, s = void 0, a = 0;
                      a < n.length;
                      a++
                    )
                      Yn(t, e, a, n[a]) && ((i = !0), (s = vo(t, r, e, a, n[a], s)));
                    return (
                      s && o.ngOnChanges(s),
                      65536 & e.flags && Mn(t, 256, e.nodeIndex) && o.ngOnInit(),
                      262144 & e.flags && o.ngDoCheck(),
                      i
                    );
                  })(t, e, n);
                case 32:
                case 64:
                case 128:
                  return (function(t, e, n) {
                    for (var r = e.bindings, o = !1, i = 0; i < n.length; i++)
                      Xn(t, e, i, n[i]) && (o = !0);
                    if (o) {
                      var s = Hn(t, e.nodeIndex),
                        a = void 0;
                      switch (201347067 & e.flags) {
                        case 32:
                          a = n;
                          break;
                        case 64:
                          a = {};
                          for (i = 0; i < n.length; i++) a[r[i].name] = n[i];
                          break;
                        case 128:
                          var u = n[0],
                            l = n.slice(1);
                          a = u.transform.apply(u, l);
                      }
                      s.value = a;
                    }
                    return o;
                  })(t, e, n);
                default:
                  throw 'unreachable';
              }
            })(t, e, r);
      }
      function vs(t) {
        var e = t.def;
        if (4 & e.nodeFlags)
          for (var n = 0; n < e.nodes.length; n++) {
            var r = e.nodes[n];
            if (4 & r.flags) {
              var o = Ln(t, n).template._projectedViews;
              if (o)
                for (var i = 0; i < o.length; i++) {
                  var s = o[i];
                  (s.state |= 32), nr(s, t);
                }
            } else 0 == (4 & r.childFlags) && (n += r.childCount);
          }
      }
      function _s(t, e, n, r, o, i, s, a, u, l, c, h, p) {
        return (
          0 === n
            ? (function(t, e, n, r, o, i, s, a, u, l, c, h) {
                var p = e.bindings.length;
                p > 0 && tr(t, e, 0, n),
                  p > 1 && tr(t, e, 1, r),
                  p > 2 && tr(t, e, 2, o),
                  p > 3 && tr(t, e, 3, i),
                  p > 4 && tr(t, e, 4, s),
                  p > 5 && tr(t, e, 5, a),
                  p > 6 && tr(t, e, 6, u),
                  p > 7 && tr(t, e, 7, l),
                  p > 8 && tr(t, e, 8, c),
                  p > 9 && tr(t, e, 9, h);
              })(t, e, r, o, i, s, a, u, l, c, h, p)
            : (function(t, e, n) {
                for (var r = 0; r < n.length; r++) tr(t, e, r, n[r]);
              })(t, e, r),
          !1
        );
      }
      function bs(t, e) {
        if (Bn(t, e.nodeIndex).dirty)
          throw Rn(
            zn.createDebugContext(t, e.nodeIndex),
            'Query ' + e.query.id + ' not dirty',
            'Query ' + e.query.id + ' dirty',
            0 != (1 & t.state),
          );
      }
      function ws(t) {
        if (!(128 & t.state)) {
          if ((Es(t, Cs.Destroy), Ss(t, Cs.Destroy), _o(t, 131072), t.disposables))
            for (var e = 0; e < t.disposables.length; e++) t.disposables[e]();
          !(function(t) {
            if (16 & t.state) {
              var e = or(t);
              if (e) {
                var n = e.template._projectedViews;
                n && (Ht(n, n.indexOf(t)), zn.dirtyParentQueries(t));
              }
            }
          })(t),
            t.renderer.destroyNode &&
              (function(t) {
                for (var e = t.def.nodes.length, n = 0; n < e; n++) {
                  var r = t.def.nodes[n];
                  1 & r.flags
                    ? t.renderer.destroyNode(Ln(t, n).renderElement)
                    : 2 & r.flags
                    ? t.renderer.destroyNode(Vn(t, n).renderText)
                    : (67108864 & r.flags || 134217728 & r.flags) && Bn(t, n).destroy();
                }
              })(t),
            ar(t) && t.renderer.destroy(),
            (t.state |= 128);
        }
      }
      var Cs = (function() {
        var t = {
          CreateViewNodes: 0,
          CheckNoChanges: 1,
          CheckNoChangesProjectedViews: 2,
          CheckAndUpdate: 3,
          CheckAndUpdateProjectedViews: 4,
          Destroy: 5,
        };
        return (
          (t[t.CreateViewNodes] = 'CreateViewNodes'),
          (t[t.CheckNoChanges] = 'CheckNoChanges'),
          (t[t.CheckNoChangesProjectedViews] = 'CheckNoChangesProjectedViews'),
          (t[t.CheckAndUpdate] = 'CheckAndUpdate'),
          (t[t.CheckAndUpdateProjectedViews] = 'CheckAndUpdateProjectedViews'),
          (t[t.Destroy] = 'Destroy'),
          t
        );
      })();
      function Ss(t, e) {
        var n = t.def;
        if (33554432 & n.nodeFlags)
          for (var r = 0; r < n.nodes.length; r++) {
            var o = n.nodes[r];
            33554432 & o.flags
              ? Ts(Ln(t, r).componentView, e)
              : 0 == (33554432 & o.childFlags) && (r += o.childCount);
          }
      }
      function Es(t, e) {
        var n = t.def;
        if (16777216 & n.nodeFlags)
          for (var r = 0; r < n.nodes.length; r++) {
            var o = n.nodes[r];
            if (16777216 & o.flags)
              for (var i = Ln(t, r).viewContainer._embeddedViews, s = 0; s < i.length; s++)
                Ts(i[s], e);
            else 0 == (16777216 & o.childFlags) && (r += o.childCount);
          }
      }
      function Ts(t, e) {
        var n = t.state;
        switch (e) {
          case Cs.CheckNoChanges:
            0 == (128 & n) &&
              (12 == (12 & n) ? ys(t) : 64 & n && xs(t, Cs.CheckNoChangesProjectedViews));
            break;
          case Cs.CheckNoChangesProjectedViews:
            0 == (128 & n) && (32 & n ? ys(t) : 64 & n && xs(t, e));
            break;
          case Cs.CheckAndUpdate:
            0 == (128 & n) &&
              (12 == (12 & n) ? gs(t) : 64 & n && xs(t, Cs.CheckAndUpdateProjectedViews));
            break;
          case Cs.CheckAndUpdateProjectedViews:
            0 == (128 & n) && (32 & n ? gs(t) : 64 & n && xs(t, e));
            break;
          case Cs.Destroy:
            ws(t);
            break;
          case Cs.CreateViewNodes:
            ds(t);
        }
      }
      function xs(t, e) {
        Es(t, e), Ss(t, e);
      }
      function Ps(t, e, n, r) {
        if (t.def.nodeFlags & e && t.def.nodeFlags & n)
          for (var o = t.def.nodes.length, i = 0; i < o; i++) {
            var s = t.def.nodes[i];
            if (s.flags & e && s.flags & n)
              switch ((zn.setCurrentNode(t, s.nodeIndex), r)) {
                case 0:
                  $i(t, s);
                  break;
                case 1:
                  bs(t, s);
              }
            (s.childFlags & e && s.childFlags & n) || (i += s.childCount);
          }
      }
      var Os = !1;
      function ks(t, e, n, r, o, i) {
        var s = o.injector.get(ln);
        return cs(Is(t, o, s, e, n), r, i);
      }
      function As(t, e, n, r, o, i) {
        var s = o.injector.get(ln),
          a = Is(t, o, new la(s), e, n),
          u = Hs(r);
        return aa($s.create, cs, null, [a, u, i]);
      }
      function Is(t, e, n, r, o) {
        var i = e.injector.get(Ce),
          s = e.injector.get($t),
          a = n.createRenderer(null, null);
        return {
          ngModule: e,
          injector: t,
          projectableNodes: r,
          selectorOrNode: o,
          sanitizer: i,
          rendererFactory: n,
          renderer: a,
          errorHandler: s,
        };
      }
      function Ns(t, e, n, r) {
        var o = Hs(n);
        return aa($s.create, ls, null, [t, e, o, r]);
      }
      function Rs(t, e, n, r) {
        return (
          (n = Ms.get(e.element.componentProvider.provider.token) || Hs(n)),
          aa($s.create, hs, null, [t, e, n, r])
        );
      }
      function Ds(t, e, n, r) {
        return Kr(
          t,
          e,
          n,
          (function(t) {
            var e = (function(t) {
                var e = !1,
                  n = !1;
                return 0 === Fs.size
                  ? { hasOverrides: e, hasDeprecatedOverrides: n }
                  : (t.providers.forEach(function(t) {
                      var r = Fs.get(t.token);
                      3840 & t.flags && r && ((e = !0), (n = n || r.deprecatedBehavior));
                    }),
                    t.modules.forEach(function(t) {
                      js.forEach(function(r, o) {
                        ft(o).providedIn === t && ((e = !0), (n = n || r.deprecatedBehavior));
                      });
                    }),
                    { hasOverrides: e, hasDeprecatedOverrides: n });
              })(t),
              n = e.hasOverrides,
              r = e.hasDeprecatedOverrides;
            return n
              ? ((function(t) {
                  for (var e = 0; e < t.providers.length; e++) {
                    var n = t.providers[e];
                    r && (n.flags |= 4096);
                    var o = Fs.get(n.token);
                    o &&
                      ((n.flags = (-3841 & n.flags) | o.flags),
                      (n.deps = hr(o.deps)),
                      (n.value = o.value));
                  }
                  if (js.size > 0) {
                    var i = new Set(t.modules);
                    js.forEach(function(e, n) {
                      if (i.has(ft(n).providedIn)) {
                        var o = {
                          token: n,
                          flags: e.flags | (r ? 4096 : 0),
                          deps: hr(e.deps),
                          value: e.value,
                          index: t.providers.length,
                        };
                        t.providers.push(o), (t.providersByKey[Wn(n)] = o);
                      }
                    });
                  }
                })(
                  (t = t.factory(function() {
                    return qn;
                  })),
                ),
                t)
              : t;
          })(r),
        );
      }
      var Fs = new Map(),
        js = new Map(),
        Ms = new Map();
      function Vs(t) {
        var e;
        Fs.set(t.token, t),
          'function' == typeof t.token &&
            (e = ft(t.token)) &&
            'function' == typeof e.providedIn &&
            js.set(t.token, t);
      }
      function Ls(t, e) {
        var n = dr(e.viewDefFactory),
          r = dr(n.nodes[0].element.componentView);
        Ms.set(t, r);
      }
      function Us() {
        Fs.clear(), js.clear(), Ms.clear();
      }
      function Hs(t) {
        if (0 === Fs.size) return t;
        var e = (function(t) {
          for (var e = [], n = null, r = 0; r < t.nodes.length; r++) {
            var o = t.nodes[r];
            1 & o.flags && (n = o),
              n && 3840 & o.flags && Fs.has(o.provider.token) && (e.push(n.nodeIndex), (n = null));
          }
          return e;
        })(t);
        if (0 === e.length) return t;
        t = t.factory(function() {
          return qn;
        });
        for (var n = 0; n < e.length; n++) r(t, e[n]);
        return t;
        function r(t, e) {
          for (var n = e + 1; n < t.nodes.length; n++) {
            var r = t.nodes[n];
            if (1 & r.flags) return;
            if (3840 & r.flags) {
              var o = r.provider,
                i = Fs.get(o.token);
              i &&
                ((r.flags = (-3841 & r.flags) | i.flags),
                (o.deps = hr(i.deps)),
                (o.value = i.value));
            }
          }
        }
      }
      function Bs(t, e, n, r, o, i, s, a, u, l, c, h, p) {
        var f = t.def.nodes[e];
        return ms(t, f, n, r, o, i, s, a, u, l, c, h, p), 224 & f.flags ? Hn(t, e).value : void 0;
      }
      function zs(t, e, n, r, o, i, s, a, u, l, c, h, p) {
        var f = t.def.nodes[e];
        return _s(t, f, n, r, o, i, s, a, u, l, c, h, p), 224 & f.flags ? Hn(t, e).value : void 0;
      }
      function qs(t) {
        return aa($s.detectChanges, gs, null, [t]);
      }
      function Gs(t) {
        return aa($s.checkNoChanges, ys, null, [t]);
      }
      function Ws(t) {
        return aa($s.destroy, ws, null, [t]);
      }
      var Qs,
        Ks,
        Zs,
        $s = (function() {
          var t = { create: 0, detectChanges: 1, checkNoChanges: 2, destroy: 3, handleEvent: 4 };
          return (
            (t[t.create] = 'create'),
            (t[t.detectChanges] = 'detectChanges'),
            (t[t.checkNoChanges] = 'checkNoChanges'),
            (t[t.destroy] = 'destroy'),
            (t[t.handleEvent] = 'handleEvent'),
            t
          );
        })();
      function Js(t, e) {
        (Ks = t), (Zs = e);
      }
      function Ys(t, e, n, r) {
        return Js(t, e), aa($s.handleEvent, t.def.handleEvent, null, [t, e, n, r]);
      }
      function Xs(t, e) {
        if (128 & t.state) throw Fn($s[Qs]);
        return (
          Js(t, ra(t, 0)),
          t.def.updateDirectives(function(t, n, r) {
            for (var o = [], i = 3; i < arguments.length; i++) o[i - 3] = arguments[i];
            var s = t.def.nodes[n];
            return (
              0 === e ? ea(t, s, r, o) : na(t, s, r, o),
              16384 & s.flags && Js(t, ra(t, n)),
              224 & s.flags ? Hn(t, s.nodeIndex).value : void 0
            );
          }, t)
        );
      }
      function ta(t, e) {
        if (128 & t.state) throw Fn($s[Qs]);
        return (
          Js(t, oa(t, 0)),
          t.def.updateRenderer(function(t, n, r) {
            for (var o = [], i = 3; i < arguments.length; i++) o[i - 3] = arguments[i];
            var s = t.def.nodes[n];
            return (
              0 === e ? ea(t, s, r, o) : na(t, s, r, o),
              3 & s.flags && Js(t, oa(t, n)),
              224 & s.flags ? Hn(t, s.nodeIndex).value : void 0
            );
          }, t)
        );
      }
      function ea(t, e, n, r) {
        if (ms.apply(void 0, [t, e, n].concat(r))) {
          var o = 1 === n ? r[0] : r;
          if (16384 & e.flags) {
            for (var i = {}, s = 0; s < e.bindings.length; s++) {
              var a = e.bindings[s],
                u = o[s];
              8 & a.flags &&
                (i[
                  ((p = a.nonMinifiedName),
                  (f = void 0),
                  (f = p.replace(/[$@]/g, '_')),
                  'ng-reflect-' +
                    (p = f.replace(Te, function() {
                      for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                      return '-' + t[1].toLowerCase();
                    })))
                ] = xe(u));
            }
            var l = e.parent,
              c = Ln(t, l.nodeIndex).renderElement;
            if (l.element.name)
              for (var h in i) {
                null != (u = i[h])
                  ? t.renderer.setAttribute(c, h, u)
                  : t.renderer.removeAttribute(c, h);
              }
            else t.renderer.setValue(c, 'bindings=' + JSON.stringify(i, null, 2));
          }
        }
        var p, f;
      }
      function na(t, e, n, r) {
        _s.apply(void 0, [t, e, n].concat(r));
      }
      function ra(t, e) {
        for (var n = e; n < t.def.nodes.length; n++) {
          var r = t.def.nodes[n];
          if (16384 & r.flags && r.bindings && r.bindings.length) return n;
        }
        return null;
      }
      function oa(t, e) {
        for (var n = e; n < t.def.nodes.length; n++) {
          var r = t.def.nodes[n];
          if (3 & r.flags && r.bindings && r.bindings.length) return n;
        }
        return null;
      }
      var ia = (function() {
        function t(t, e) {
          (this.view = t),
            (this.nodeIndex = e),
            null == e && (this.nodeIndex = e = 0),
            (this.nodeDef = t.def.nodes[e]);
          for (var n = this.nodeDef, r = t; n && 0 == (1 & n.flags); ) n = n.parent;
          if (!n) for (; !n && r; ) (n = ir(r)), (r = r.parent);
          (this.elDef = n), (this.elView = r);
        }
        return (
          Object.defineProperty(t.prototype, 'elOrCompView', {
            get: function() {
              return Ln(this.elView, this.elDef.nodeIndex).componentView || this.view;
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(t.prototype, 'injector', {
            get: function() {
              return zr(this.elView, this.elDef);
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(t.prototype, 'component', {
            get: function() {
              return this.elOrCompView.component;
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(t.prototype, 'context', {
            get: function() {
              return this.elOrCompView.context;
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(t.prototype, 'providerTokens', {
            get: function() {
              var t = [];
              if (this.elDef)
                for (
                  var e = this.elDef.nodeIndex + 1;
                  e <= this.elDef.nodeIndex + this.elDef.childCount;
                  e++
                ) {
                  var n = this.elView.def.nodes[e];
                  20224 & n.flags && t.push(n.provider.token), (e += n.childCount);
                }
              return t;
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(t.prototype, 'references', {
            get: function() {
              var t = {};
              if (this.elDef) {
                sa(this.elView, this.elDef, t);
                for (
                  var e = this.elDef.nodeIndex + 1;
                  e <= this.elDef.nodeIndex + this.elDef.childCount;
                  e++
                ) {
                  var n = this.elView.def.nodes[e];
                  20224 & n.flags && sa(this.elView, n, t), (e += n.childCount);
                }
              }
              return t;
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(t.prototype, 'componentRenderElement', {
            get: function() {
              var t = (function(t) {
                for (; t && !ar(t); ) t = t.parent;
                return t.parent ? Ln(t.parent, ir(t).nodeIndex) : null;
              })(this.elOrCompView);
              return t ? t.renderElement : void 0;
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(t.prototype, 'renderNode', {
            get: function() {
              return 2 & this.nodeDef.flags
                ? sr(this.view, this.nodeDef)
                : sr(this.elView, this.elDef);
            },
            enumerable: !0,
            configurable: !0,
          }),
          (t.prototype.logError = function(t) {
            for (var e, n, r = [], o = 1; o < arguments.length; o++) r[o - 1] = arguments[o];
            2 & this.nodeDef.flags
              ? ((e = this.view.def), (n = this.nodeDef.nodeIndex))
              : ((e = this.elView.def), (n = this.elDef.nodeIndex));
            var i = (function(t, e) {
                for (var n = -1, r = 0; r <= e; r++) 3 & t.nodes[r].flags && n++;
                return n;
              })(e, n),
              s = -1;
            e.factory(function() {
              var e;
              return ++s === i ? (e = t.error).bind.apply(e, [t].concat(r)) : qn;
            }),
              s < i &&
                (t.error('Illegal state: the ViewDefinitionFactory did not call the logger!'),
                t.error.apply(t, r));
          }),
          t
        );
      })();
      function sa(t, e, n) {
        for (var r in e.references) n[r] = Yi(t, e, e.references[r]);
      }
      function aa(t, e, n, r) {
        var o,
          i,
          s = Qs,
          a = Ks,
          u = Zs;
        try {
          Qs = t;
          var l = e.apply(n, r);
          return (Ks = a), (Zs = u), (Qs = s), l;
        } catch (c) {
          if (Qt(c) || !Ks) throw c;
          throw ((o = c),
          (i = ua()),
          o instanceof Error || (o = new Error(o.toString())),
          Dn(o, i),
          o);
        }
      }
      function ua() {
        return Ks ? new ia(Ks, Zs) : null;
      }
      var la = (function() {
          function t(t) {
            this.delegate = t;
          }
          return (
            (t.prototype.createRenderer = function(t, e) {
              return new ca(this.delegate.createRenderer(t, e));
            }),
            (t.prototype.begin = function() {
              this.delegate.begin && this.delegate.begin();
            }),
            (t.prototype.end = function() {
              this.delegate.end && this.delegate.end();
            }),
            (t.prototype.whenRenderingDone = function() {
              return this.delegate.whenRenderingDone
                ? this.delegate.whenRenderingDone()
                : Promise.resolve(null);
            }),
            t
          );
        })(),
        ca = (function() {
          function t(t) {
            (this.delegate = t), (this.debugContextFactory = ua), (this.data = this.delegate.data);
          }
          return (
            (t.prototype.createDebugContext = function(t) {
              return this.debugContextFactory(t);
            }),
            (t.prototype.destroyNode = function(t) {
              var e = Di(t);
              !(function(t) {
                Ri.delete(t.nativeNode);
              })(e),
                e instanceof Ii && (e.listeners.length = 0),
                this.delegate.destroyNode && this.delegate.destroyNode(t);
            }),
            (t.prototype.destroy = function() {
              this.delegate.destroy();
            }),
            (t.prototype.createElement = function(t, e) {
              var n = this.delegate.createElement(t, e),
                r = this.createDebugContext(n);
              if (r) {
                var o = new Ni(n, null, r);
                (o.name = t), Fi(o);
              }
              return n;
            }),
            (t.prototype.createComment = function(t) {
              var e = this.delegate.createComment(t),
                n = this.createDebugContext(e);
              return n && Fi(new Ii(e, null, n)), e;
            }),
            (t.prototype.createText = function(t) {
              var e = this.delegate.createText(t),
                n = this.createDebugContext(e);
              return n && Fi(new Ii(e, null, n)), e;
            }),
            (t.prototype.appendChild = function(t, e) {
              var n = Di(t),
                r = Di(e);
              n && r && n instanceof Ni && n.addChild(r), this.delegate.appendChild(t, e);
            }),
            (t.prototype.insertBefore = function(t, e, n) {
              var r = Di(t),
                o = Di(e),
                i = Di(n);
              r && o && r instanceof Ni && r.insertBefore(i, o),
                this.delegate.insertBefore(t, e, n);
            }),
            (t.prototype.removeChild = function(t, e) {
              var n = Di(t),
                r = Di(e);
              n && r && n instanceof Ni && n.removeChild(r), this.delegate.removeChild(t, e);
            }),
            (t.prototype.selectRootElement = function(t, e) {
              var n = this.delegate.selectRootElement(t, e),
                r = ua();
              return r && Fi(new Ni(n, null, r)), n;
            }),
            (t.prototype.setAttribute = function(t, e, n, r) {
              var o = Di(t);
              o && o instanceof Ni && (o.attributes[r ? r + ':' + e : e] = n),
                this.delegate.setAttribute(t, e, n, r);
            }),
            (t.prototype.removeAttribute = function(t, e, n) {
              var r = Di(t);
              r && r instanceof Ni && (r.attributes[n ? n + ':' + e : e] = null),
                this.delegate.removeAttribute(t, e, n);
            }),
            (t.prototype.addClass = function(t, e) {
              var n = Di(t);
              n && n instanceof Ni && (n.classes[e] = !0), this.delegate.addClass(t, e);
            }),
            (t.prototype.removeClass = function(t, e) {
              var n = Di(t);
              n && n instanceof Ni && (n.classes[e] = !1), this.delegate.removeClass(t, e);
            }),
            (t.prototype.setStyle = function(t, e, n, r) {
              var o = Di(t);
              o && o instanceof Ni && (o.styles[e] = n), this.delegate.setStyle(t, e, n, r);
            }),
            (t.prototype.removeStyle = function(t, e, n) {
              var r = Di(t);
              r && r instanceof Ni && (r.styles[e] = null), this.delegate.removeStyle(t, e, n);
            }),
            (t.prototype.setProperty = function(t, e, n) {
              var r = Di(t);
              r && r instanceof Ni && (r.properties[e] = n), this.delegate.setProperty(t, e, n);
            }),
            (t.prototype.listen = function(t, e, n) {
              if ('string' != typeof t) {
                var r = Di(t);
                r && r.listeners.push(new Ai(e, n));
              }
              return this.delegate.listen(t, e, n);
            }),
            (t.prototype.parentNode = function(t) {
              return this.delegate.parentNode(t);
            }),
            (t.prototype.nextSibling = function(t) {
              return this.delegate.nextSibling(t);
            }),
            (t.prototype.setValue = function(t, e) {
              return this.delegate.setValue(t, e);
            }),
            t
          );
        })();
      var ha = (function(t) {
          function e(e, n, r) {
            var o = this;
            return (
              ((o = t.call(this) || this).moduleType = e),
              (o._bootstrapComponents = n),
              (o._ngModuleDefFactory = r),
              o
            );
          }
          return (
            __extends(e, t),
            (e.prototype.create = function(t) {
              !(function() {
                if (!Os) {
                  Os = !0;
                  var t = Xt()
                    ? {
                        setCurrentNode: Js,
                        createRootView: As,
                        createEmbeddedView: Ns,
                        createComponentView: Rs,
                        createNgModuleRef: Ds,
                        overrideProvider: Vs,
                        overrideComponentView: Ls,
                        clearOverrides: Us,
                        checkAndUpdateView: qs,
                        checkNoChangesView: Gs,
                        destroyView: Ws,
                        createDebugContext: function(t, e) {
                          return new ia(t, e);
                        },
                        handleEvent: Ys,
                        updateDirectives: Xs,
                        updateRenderer: ta,
                      }
                    : {
                        setCurrentNode: function() {},
                        createRootView: ks,
                        createEmbeddedView: ls,
                        createComponentView: hs,
                        createNgModuleRef: Kr,
                        overrideProvider: qn,
                        overrideComponentView: qn,
                        clearOverrides: qn,
                        checkAndUpdateView: gs,
                        checkNoChangesView: ys,
                        destroyView: ws,
                        createDebugContext: function(t, e) {
                          return new ia(t, e);
                        },
                        handleEvent: function(t, e, n, r) {
                          return t.def.handleEvent(t, e, n, r);
                        },
                        updateDirectives: function(t, e) {
                          return t.def.updateDirectives(0 === e ? Bs : zs, t);
                        },
                        updateRenderer: function(t, e) {
                          return t.def.updateRenderer(0 === e ? Bs : zs, t);
                        },
                      };
                  (zn.setCurrentNode = t.setCurrentNode),
                    (zn.createRootView = t.createRootView),
                    (zn.createEmbeddedView = t.createEmbeddedView),
                    (zn.createComponentView = t.createComponentView),
                    (zn.createNgModuleRef = t.createNgModuleRef),
                    (zn.overrideProvider = t.overrideProvider),
                    (zn.overrideComponentView = t.overrideComponentView),
                    (zn.clearOverrides = t.clearOverrides),
                    (zn.checkAndUpdateView = t.checkAndUpdateView),
                    (zn.checkNoChangesView = t.checkNoChangesView),
                    (zn.destroyView = t.destroyView),
                    (zn.resolveDep = go),
                    (zn.createDebugContext = t.createDebugContext),
                    (zn.handleEvent = t.handleEvent),
                    (zn.updateDirectives = t.updateDirectives),
                    (zn.updateRenderer = t.updateRenderer),
                    (zn.dirtyParentQueries = Zi);
                }
              })();
              var e = (function(t) {
                var e = Array.from(t.providers),
                  n = Array.from(t.modules),
                  r = {};
                for (var o in t.providersByKey) r[o] = t.providersByKey[o];
                return {
                  factory: t.factory,
                  isRoot: t.isRoot,
                  providers: e,
                  modules: n,
                  providersByKey: r,
                };
              })(dr(this._ngModuleDefFactory));
              return zn.createNgModuleRef(
                this.moduleType,
                t || Ie.NULL,
                this._bootstrapComponents,
                e,
              );
            }),
            e
          );
        })(Lt),
        pa = {
          production: !0,
          url: 'http://awesome-tetris-game-git-tetris.apps.us-west-1.starter.openshift-online.com/',
        },
        fa = function() {},
        da = function() {},
        ya = (function() {
          function t(t, e) {
            (this.gameService = t),
              (this.userService = e),
              (this.currentPlayerName = this.userService.getUserName());
          }
          return (
            (t.prototype.ngOnInit = function() {
              var t = this;
              this.gameService.getPlayerGameResult().subscribe(function(e) {
                (t.gameResults = e.slice(0, 10)),
                  (t.currentPlayerPlace = e.findIndex(function(e) {
                    return e.username === t.currentPlayerName;
                  })),
                  (t.isCurrentPlayerNotInTop = t.currentPlayerPlace > 10),
                  t.isCurrentPlayerNotInTop && (t.currentPlayerNotInTop = e[t.currentPlayerPlace]);
              }),
                this.userService.getAuthListener().subscribe(function(e) {
                  e || ((t.isCurrentPlayerNotInTop = !1), (t.currentPlayerName = null));
                });
            }),
            t
          );
        })(),
        ga = function() {},
        ma = new Tt('Location Initialized'),
        va = function() {},
        _a = new Tt('appBaseHref'),
        ba = (function() {
          function t(e, n) {
            var r = this;
            (this._subject = new ko()),
              (this._urlChangeListeners = []),
              (this._platformStrategy = e);
            var o = this._platformStrategy.getBaseHref();
            (this._platformLocation = n),
              (this._baseHref = t.stripTrailingSlash(wa(o))),
              this._platformStrategy.onPopState(function(t) {
                r._subject.emit({ url: r.path(!0), pop: !0, state: t.state, type: t.type });
              });
          }
          return (
            (t.prototype.path = function(t) {
              return void 0 === t && (t = !1), this.normalize(this._platformStrategy.path(t));
            }),
            (t.prototype.getState = function() {
              return this._platformLocation.getState();
            }),
            (t.prototype.isCurrentPathEqualTo = function(e, n) {
              return (
                void 0 === n && (n = ''),
                this.path() == this.normalize(e + t.normalizeQueryParams(n))
              );
            }),
            (t.prototype.normalize = function(e) {
              return t.stripTrailingSlash(
                (function(t, e) {
                  return t && e.startsWith(t) ? e.substring(t.length) : e;
                })(this._baseHref, wa(e)),
              );
            }),
            (t.prototype.prepareExternalUrl = function(t) {
              return (
                t && '/' !== t[0] && (t = '/' + t), this._platformStrategy.prepareExternalUrl(t)
              );
            }),
            (t.prototype.go = function(e, n, r) {
              void 0 === n && (n = ''),
                void 0 === r && (r = null),
                this._platformStrategy.pushState(r, '', e, n),
                this._notifyUrlChangeListeners(
                  this.prepareExternalUrl(e + t.normalizeQueryParams(n)),
                  r,
                );
            }),
            (t.prototype.replaceState = function(e, n, r) {
              void 0 === n && (n = ''),
                void 0 === r && (r = null),
                this._platformStrategy.replaceState(r, '', e, n),
                this._notifyUrlChangeListeners(
                  this.prepareExternalUrl(e + t.normalizeQueryParams(n)),
                  r,
                );
            }),
            (t.prototype.forward = function() {
              this._platformStrategy.forward();
            }),
            (t.prototype.back = function() {
              this._platformStrategy.back();
            }),
            (t.prototype.onUrlChange = function(t) {
              var e = this;
              this._urlChangeListeners.push(t),
                this.subscribe(function(t) {
                  e._notifyUrlChangeListeners(t.url, t.state);
                });
            }),
            (t.prototype._notifyUrlChangeListeners = function(t, e) {
              void 0 === t && (t = ''),
                this._urlChangeListeners.forEach(function(n) {
                  return n(t, e);
                });
            }),
            (t.prototype.subscribe = function(t, e, n) {
              return this._subject.subscribe({ next: t, error: e, complete: n });
            }),
            (t.normalizeQueryParams = function(t) {
              return t && '?' !== t[0] ? '?' + t : t;
            }),
            (t.joinWithSlash = function(t, e) {
              if (0 == t.length) return e;
              if (0 == e.length) return t;
              var n = 0;
              return (
                t.endsWith('/') && n++,
                e.startsWith('/') && n++,
                2 == n ? t + e.substring(1) : 1 == n ? t + e : t + '/' + e
              );
            }),
            (t.stripTrailingSlash = function(t) {
              var e = t.match(/#|\?|$/),
                n = (e && e.index) || t.length;
              return t.slice(0, n - ('/' === t[n - 1] ? 1 : 0)) + t.slice(n);
            }),
            t
          );
        })();
      function wa(t) {
        return t.replace(/\/index.html$/, '');
      }
      var Ca = (function(t) {
          function e(e, n) {
            var r = this;
            return (
              ((r = t.call(this) || this)._platformLocation = e),
              (r._baseHref = ''),
              null != n && (r._baseHref = n),
              r
            );
          }
          return (
            __extends(e, t),
            (e.prototype.onPopState = function(t) {
              this._platformLocation.onPopState(t), this._platformLocation.onHashChange(t);
            }),
            (e.prototype.getBaseHref = function() {
              return this._baseHref;
            }),
            (e.prototype.path = function(t) {
              void 0 === t && (t = !1);
              var e = this._platformLocation.hash;
              return null == e && (e = '#'), e.length > 0 ? e.substring(1) : e;
            }),
            (e.prototype.prepareExternalUrl = function(t) {
              var e = ba.joinWithSlash(this._baseHref, t);
              return e.length > 0 ? '#' + e : e;
            }),
            (e.prototype.pushState = function(t, e, n, r) {
              var o = this.prepareExternalUrl(n + ba.normalizeQueryParams(r));
              0 == o.length && (o = this._platformLocation.pathname),
                this._platformLocation.pushState(t, e, o);
            }),
            (e.prototype.replaceState = function(t, e, n, r) {
              var o = this.prepareExternalUrl(n + ba.normalizeQueryParams(r));
              0 == o.length && (o = this._platformLocation.pathname),
                this._platformLocation.replaceState(t, e, o);
            }),
            (e.prototype.forward = function() {
              this._platformLocation.forward();
            }),
            (e.prototype.back = function() {
              this._platformLocation.back();
            }),
            e
          );
        })(va),
        Sa = (function(t) {
          function e(e, n) {
            var r = this;
            if (
              (((r = t.call(this) || this)._platformLocation = e),
              null == n && (n = r._platformLocation.getBaseHrefFromDOM()),
              null == n)
            )
              throw new Error(
                'No base href set. Please provide a value for the APP_BASE_HREF token or add a base element to the document.',
              );
            return (r._baseHref = n), r;
          }
          return (
            __extends(e, t),
            (e.prototype.onPopState = function(t) {
              this._platformLocation.onPopState(t), this._platformLocation.onHashChange(t);
            }),
            (e.prototype.getBaseHref = function() {
              return this._baseHref;
            }),
            (e.prototype.prepareExternalUrl = function(t) {
              return ba.joinWithSlash(this._baseHref, t);
            }),
            (e.prototype.path = function(t) {
              void 0 === t && (t = !1);
              var e =
                  this._platformLocation.pathname +
                  ba.normalizeQueryParams(this._platformLocation.search),
                n = this._platformLocation.hash;
              return n && t ? '' + e + n : e;
            }),
            (e.prototype.pushState = function(t, e, n, r) {
              var o = this.prepareExternalUrl(n + ba.normalizeQueryParams(r));
              this._platformLocation.pushState(t, e, o);
            }),
            (e.prototype.replaceState = function(t, e, n, r) {
              var o = this.prepareExternalUrl(n + ba.normalizeQueryParams(r));
              this._platformLocation.replaceState(t, e, o);
            }),
            (e.prototype.forward = function() {
              this._platformLocation.forward();
            }),
            (e.prototype.back = function() {
              this._platformLocation.back();
            }),
            e
          );
        })(va),
        Ea = (function() {
          var t = { Zero: 0, One: 1, Two: 2, Few: 3, Many: 4, Other: 5 };
          return (
            (t[t.Zero] = 'Zero'),
            (t[t.One] = 'One'),
            (t[t.Two] = 'Two'),
            (t[t.Few] = 'Few'),
            (t[t.Many] = 'Many'),
            (t[t.Other] = 'Other'),
            t
          );
        })(),
        Ta = new Tt('UseV4Plurals'),
        xa = function() {},
        Pa = (function(t) {
          function e(e, n) {
            var r = this;
            return ((r = t.call(this) || this).locale = e), (r.deprecatedPluralFn = n), r;
          }
          return (
            __extends(e, t),
            (e.prototype.getPluralCategory = function(t, e) {
              switch (
                this.deprecatedPluralFn
                  ? this.deprecatedPluralFn(e || this.locale, t)
                  : (function(t) {
                      return (function(t) {
                        var e = t.toLowerCase().replace(/_/g, '-'),
                          n = So[e];
                        if (n) return n;
                        var r = e.split('-')[0];
                        if ((n = So[r])) return n;
                        if ('en' === r) return xo;
                        throw new Error('Missing locale data for the locale "' + t + '".');
                      })(t)[Eo.PluralCase];
                    })(e || this.locale)(t)
              ) {
                case Ea.Zero:
                  return 'zero';
                case Ea.One:
                  return 'one';
                case Ea.Two:
                  return 'two';
                case Ea.Few:
                  return 'few';
                case Ea.Many:
                  return 'many';
                default:
                  return 'other';
              }
            }),
            e
          );
        })(xa);
      function Oa(t, e) {
        e = encodeURIComponent(e);
        for (var n = 0, r = t.split(';'); n < r.length; n++) {
          var o = r[n],
            i = o.indexOf('='),
            s = -1 == i ? [o, ''] : [o.slice(0, i), o.slice(i + 1)],
            a = s[1];
          if (s[0].trim() === e) return decodeURIComponent(a);
        }
        return null;
      }
      var ka = function() {},
        Aa = (function() {
          function t(t, e, n, r) {
            (this._iterableDiffers = t),
              (this._keyValueDiffers = e),
              (this._ngEl = n),
              (this._renderer = r),
              (this._initialClasses = []);
          }
          return (
            (t.prototype.getValue = function() {
              return null;
            }),
            (t.prototype.setClass = function(t) {
              this._removeClasses(this._initialClasses),
                (this._initialClasses = 'string' == typeof t ? t.split(/\s+/) : []),
                this._applyClasses(this._initialClasses),
                this._applyClasses(this._rawClass);
            }),
            (t.prototype.setNgClass = function(t) {
              this._removeClasses(this._rawClass),
                this._applyClasses(this._initialClasses),
                (this._iterableDiffer = null),
                (this._keyValueDiffer = null),
                (this._rawClass = 'string' == typeof t ? t.split(/\s+/) : t),
                this._rawClass &&
                  (Ge(this._rawClass)
                    ? (this._iterableDiffer = this._iterableDiffers.find(this._rawClass).create())
                    : (this._keyValueDiffer = this._keyValueDiffers.find(this._rawClass).create()));
            }),
            (t.prototype.applyChanges = function() {
              if (this._iterableDiffer) {
                var t = this._iterableDiffer.diff(this._rawClass);
                t && this._applyIterableChanges(t);
              } else if (this._keyValueDiffer) {
                var e = this._keyValueDiffer.diff(this._rawClass);
                e && this._applyKeyValueChanges(e);
              }
            }),
            (t.prototype._applyKeyValueChanges = function(t) {
              var e = this;
              t.forEachAddedItem(function(t) {
                return e._toggleClass(t.key, t.currentValue);
              }),
                t.forEachChangedItem(function(t) {
                  return e._toggleClass(t.key, t.currentValue);
                }),
                t.forEachRemovedItem(function(t) {
                  t.previousValue && e._toggleClass(t.key, !1);
                });
            }),
            (t.prototype._applyIterableChanges = function(t) {
              var e = this;
              t.forEachAddedItem(function(t) {
                if ('string' != typeof t.item)
                  throw new Error(
                    'NgClass can only toggle CSS classes expressed as strings, got ' + yt(t.item),
                  );
                e._toggleClass(t.item, !0);
              }),
                t.forEachRemovedItem(function(t) {
                  return e._toggleClass(t.item, !1);
                });
            }),
            (t.prototype._applyClasses = function(t) {
              var e = this;
              t &&
                (Array.isArray(t) || t instanceof Set
                  ? t.forEach(function(t) {
                      return e._toggleClass(t, !0);
                    })
                  : Object.keys(t).forEach(function(n) {
                      return e._toggleClass(n, !!t[n]);
                    }));
            }),
            (t.prototype._removeClasses = function(t) {
              var e = this;
              t &&
                (Array.isArray(t) || t instanceof Set
                  ? t.forEach(function(t) {
                      return e._toggleClass(t, !1);
                    })
                  : Object.keys(t).forEach(function(t) {
                      return e._toggleClass(t, !1);
                    }));
            }),
            (t.prototype._toggleClass = function(t, e) {
              var n = this;
              (t = t.trim()) &&
                t.split(/\s+/g).forEach(function(t) {
                  e
                    ? n._renderer.addClass(n._ngEl.nativeElement, t)
                    : n._renderer.removeClass(n._ngEl.nativeElement, t);
                });
            }),
            t
          );
        })(),
        Ia = (function(t) {
          function e(e) {
            return t.call(this, e) || this;
          }
          return (
            __extends(e, t),
            Object.defineProperty(e.prototype, 'klass', {
              set: function(t) {
                this._delegate.setClass(t);
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, 'ngClass', {
              set: function(t) {
                this._delegate.setNgClass(t);
              },
              enumerable: !0,
              configurable: !0,
            }),
            (e.prototype.ngDoCheck = function() {
              this._delegate.applyChanges();
            }),
            e
          );
        })(
          (function() {
            var t = (function() {
              function t(t) {
                this._delegate = t;
              }
              return (
                (t.prototype.getValue = function() {
                  return this._delegate.getValue();
                }),
                t
              );
            })();
            return (t.ngDirectiveDef = void 0), t;
          })(),
        ),
        Na = (function() {
          function t(t, e, n, r) {
            (this.$implicit = t), (this.ngForOf = e), (this.index = n), (this.count = r);
          }
          return (
            Object.defineProperty(t.prototype, 'first', {
              get: function() {
                return 0 === this.index;
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, 'last', {
              get: function() {
                return this.index === this.count - 1;
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, 'even', {
              get: function() {
                return this.index % 2 == 0;
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, 'odd', {
              get: function() {
                return !this.even;
              },
              enumerable: !0,
              configurable: !0,
            }),
            t
          );
        })(),
        Ra = (function() {
          function t(t, e, n) {
            (this._viewContainer = t),
              (this._template = e),
              (this._differs = n),
              (this._ngForOfDirty = !0),
              (this._differ = null);
          }
          return (
            Object.defineProperty(t.prototype, 'ngForOf', {
              set: function(t) {
                (this._ngForOf = t), (this._ngForOfDirty = !0);
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, 'ngForTrackBy', {
              get: function() {
                return this._trackByFn;
              },
              set: function(t) {
                Xt() &&
                  null != t &&
                  'function' != typeof t &&
                  console &&
                  console.warn &&
                  console.warn(
                    'trackBy must be a function, but received ' +
                      JSON.stringify(t) +
                      '. See https://angular.io/docs/ts/latest/api/common/index/NgFor-directive.html#!#change-propagation for more information.',
                  ),
                  (this._trackByFn = t);
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, 'ngForTemplate', {
              set: function(t) {
                t && (this._template = t);
              },
              enumerable: !0,
              configurable: !0,
            }),
            (t.prototype.ngDoCheck = function() {
              if (this._ngForOfDirty) {
                this._ngForOfDirty = !1;
                var t = this._ngForOf;
                if (!this._differ && t)
                  try {
                    this._differ = this._differs.find(t).create(this.ngForTrackBy);
                  } catch (r) {
                    throw new Error(
                      "Cannot find a differ supporting object '" +
                        t +
                        "' of type '" +
                        ((e = t).name || typeof e) +
                        "'. NgFor only supports binding to Iterables such as Arrays.",
                    );
                  }
              }
              var e;
              if (this._differ) {
                var n = this._differ.diff(this._ngForOf);
                n && this._applyChanges(n);
              }
            }),
            (t.prototype._applyChanges = function(t) {
              var e = this,
                n = [];
              t.forEachOperation(function(t, r, o) {
                if (null == t.previousIndex) {
                  var i = e._viewContainer.createEmbeddedView(
                      e._template,
                      new Na(null, e._ngForOf, -1, -1),
                      null === o ? void 0 : o,
                    ),
                    s = new Da(t, i);
                  n.push(s);
                } else if (null == o) e._viewContainer.remove(null === r ? void 0 : r);
                else if (null !== r) {
                  i = e._viewContainer.get(r);
                  e._viewContainer.move(i, o);
                  s = new Da(t, i);
                  n.push(s);
                }
              });
              for (var r = 0; r < n.length; r++) this._perViewChange(n[r].view, n[r].record);
              r = 0;
              for (var o = this._viewContainer.length; r < o; r++) {
                var i = this._viewContainer.get(r);
                (i.context.index = r), (i.context.count = o), (i.context.ngForOf = this._ngForOf);
              }
              t.forEachIdentityChange(function(t) {
                e._viewContainer.get(t.currentIndex).context.$implicit = t.item;
              });
            }),
            (t.prototype._perViewChange = function(t, e) {
              t.context.$implicit = e.item;
            }),
            (t.ngTemplateContextGuard = function(t, e) {
              return !0;
            }),
            t
          );
        })(),
        Da = function(t, e) {
          (this.record = t), (this.view = e);
        },
        Fa = (function() {
          function t(t, e) {
            (this._viewContainer = t),
              (this._context = new ja()),
              (this._thenTemplateRef = null),
              (this._elseTemplateRef = null),
              (this._thenViewRef = null),
              (this._elseViewRef = null),
              (this._thenTemplateRef = e);
          }
          return (
            Object.defineProperty(t.prototype, 'ngIf', {
              set: function(t) {
                (this._context.$implicit = this._context.ngIf = t), this._updateView();
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, 'ngIfThen', {
              set: function(t) {
                Ma('ngIfThen', t),
                  (this._thenTemplateRef = t),
                  (this._thenViewRef = null),
                  this._updateView();
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, 'ngIfElse', {
              set: function(t) {
                Ma('ngIfElse', t),
                  (this._elseTemplateRef = t),
                  (this._elseViewRef = null),
                  this._updateView();
              },
              enumerable: !0,
              configurable: !0,
            }),
            (t.prototype._updateView = function() {
              this._context.$implicit
                ? this._thenViewRef ||
                  (this._viewContainer.clear(),
                  (this._elseViewRef = null),
                  this._thenTemplateRef &&
                    (this._thenViewRef = this._viewContainer.createEmbeddedView(
                      this._thenTemplateRef,
                      this._context,
                    )))
                : this._elseViewRef ||
                  (this._viewContainer.clear(),
                  (this._thenViewRef = null),
                  this._elseTemplateRef &&
                    (this._elseViewRef = this._viewContainer.createEmbeddedView(
                      this._elseTemplateRef,
                      this._context,
                    )));
            }),
            t
          );
        })(),
        ja = function() {
          (this.$implicit = null), (this.ngIf = null);
        };
      function Ma(t, e) {
        if (e && !e.createEmbeddedView)
          throw new Error(t + " must be a TemplateRef, but received '" + yt(e) + "'.");
      }
      var Va,
        La = (function() {
          function t() {}
          return (
            (t.prototype.createSubscription = function(t, e) {
              return t.subscribe({
                next: e,
                error: function(t) {
                  throw t;
                },
              });
            }),
            (t.prototype.dispose = function(t) {
              t.unsubscribe();
            }),
            (t.prototype.onDestroy = function(t) {
              t.unsubscribe();
            }),
            t
          );
        })(),
        Ua = new ((function() {
          function t() {}
          return (
            (t.prototype.createSubscription = function(t, e) {
              return t.then(e, function(t) {
                throw t;
              });
            }),
            (t.prototype.dispose = function(t) {}),
            (t.prototype.onDestroy = function(t) {}),
            t
          );
        })())(),
        Ha = new La(),
        Ba = (function() {
          function t(t) {
            (this._ref = t),
              (this._latestValue = null),
              (this._latestReturnedValue = null),
              (this._subscription = null),
              (this._obj = null),
              (this._strategy = null);
          }
          return (
            (t.prototype.ngOnDestroy = function() {
              this._subscription && this._dispose();
            }),
            (t.prototype.transform = function(t) {
              return this._obj
                ? t !== this._obj
                  ? (this._dispose(), this.transform(t))
                  : Be(this._latestValue, this._latestReturnedValue)
                  ? this._latestReturnedValue
                  : ((this._latestReturnedValue = this._latestValue), qe.wrap(this._latestValue))
                : (t && this._subscribe(t),
                  (this._latestReturnedValue = this._latestValue),
                  this._latestValue);
            }),
            (t.prototype._subscribe = function(t) {
              var e = this;
              (this._obj = t),
                (this._strategy = this._selectStrategy(t)),
                (this._subscription = this._strategy.createSubscription(t, function(n) {
                  return e._updateLatestValue(t, n);
                }));
            }),
            (t.prototype._selectStrategy = function(e) {
              if (Qe(e)) return Ua;
              if (Ke(e)) return Ha;
              throw Error("InvalidPipeArgument: '" + e + "' for pipe '" + yt(t) + "'");
            }),
            (t.prototype._dispose = function() {
              this._strategy.dispose(this._subscription),
                (this._latestValue = null),
                (this._latestReturnedValue = null),
                (this._subscription = null),
                (this._obj = null);
            }),
            (t.prototype._updateLatestValue = function(t, e) {
              t === this._obj && ((this._latestValue = e), this._ref.markForCheck());
            }),
            t
          );
        })(),
        za = function() {},
        qa = new Tt('DocumentToken'),
        Ga = 'server',
        Wa =
          (((Va = function() {}).ngInjectableDef = pt({
            token: Va,
            providedIn: 'root',
            factory: function() {
              return new Qa(Ft(qa), window, Ft($t));
            },
          })),
          Va),
        Qa = (function() {
          function t(t, e, n) {
            (this.document = t),
              (this.window = e),
              (this.errorHandler = n),
              (this.offset = function() {
                return [0, 0];
              });
          }
          return (
            (t.prototype.setOffset = function(t) {
              this.offset = Array.isArray(t)
                ? function() {
                    return t;
                  }
                : t;
            }),
            (t.prototype.getScrollPosition = function() {
              return this.supportScrollRestoration()
                ? [this.window.scrollX, this.window.scrollY]
                : [0, 0];
            }),
            (t.prototype.scrollToPosition = function(t) {
              this.supportScrollRestoration() && this.window.scrollTo(t[0], t[1]);
            }),
            (t.prototype.scrollToAnchor = function(t) {
              if (this.supportScrollRestoration()) {
                t =
                  this.window.CSS && this.window.CSS.escape
                    ? this.window.CSS.escape(t)
                    : t.replace(/(\"|\'\ |:|\.|\[|\]|,|=)/g, '\\$1');
                try {
                  var e = this.document.querySelector('#' + t);
                  if (e) return void this.scrollToElement(e);
                  var n = this.document.querySelector("[name='" + t + "']");
                  if (n) return void this.scrollToElement(n);
                } catch (r) {
                  this.errorHandler.handleError(r);
                }
              }
            }),
            (t.prototype.setHistoryScrollRestoration = function(t) {
              if (this.supportScrollRestoration()) {
                var e = this.window.history;
                e && e.scrollRestoration && (e.scrollRestoration = t);
              }
            }),
            (t.prototype.scrollToElement = function(t) {
              var e = t.getBoundingClientRect(),
                n = e.left + this.window.pageXOffset,
                r = e.top + this.window.pageYOffset,
                o = this.offset();
              this.window.scrollTo(n - o[0], r - o[1]);
            }),
            (t.prototype.supportScrollRestoration = function() {
              try {
                return !!this.window && !!this.window.scrollTo;
              } catch (t) {
                return !1;
              }
            }),
            t
          );
        })(),
        Ka = null;
      function Za() {
        return Ka;
      }
      var $a,
        Ja = (function(t) {
          function e() {
            var e = this;
            ((e = t.call(this) || this)._animationPrefix = null), (e._transitionEnd = null);
            try {
              var n = e.createElement('div', document);
              if (null != e.getStyle(n, 'animationName')) e._animationPrefix = '';
              else
                for (var r = ['Webkit', 'Moz', 'O', 'ms'], o = 0; o < r.length; o++)
                  if (null != e.getStyle(n, r[o] + 'AnimationName')) {
                    e._animationPrefix = '-' + r[o].toLowerCase() + '-';
                    break;
                  }
              var i = {
                WebkitTransition: 'webkitTransitionEnd',
                MozTransition: 'transitionend',
                OTransition: 'oTransitionEnd otransitionend',
                transition: 'transitionend',
              };
              Object.keys(i).forEach(function(t) {
                null != e.getStyle(n, t) && (e._transitionEnd = i[t]);
              });
            } catch (s) {
              (e._animationPrefix = null), (e._transitionEnd = null);
            }
            return e;
          }
          return (
            __extends(e, t),
            (e.prototype.getDistributedNodes = function(t) {
              return t.getDistributedNodes();
            }),
            (e.prototype.resolveAndSetHref = function(t, e, n) {
              t.href = null == n ? e : e + '/../' + n;
            }),
            (e.prototype.supportsDOMEvents = function() {
              return !0;
            }),
            (e.prototype.supportsNativeShadowDOM = function() {
              return 'function' == typeof document.body.createShadowRoot;
            }),
            (e.prototype.getAnimationPrefix = function() {
              return this._animationPrefix ? this._animationPrefix : '';
            }),
            (e.prototype.getTransitionEnd = function() {
              return this._transitionEnd ? this._transitionEnd : '';
            }),
            (e.prototype.supportsAnimation = function() {
              return null != this._animationPrefix && null != this._transitionEnd;
            }),
            e
          );
        })(
          (function() {
            function t() {
              this.resourceLoaderType = null;
            }
            return (
              Object.defineProperty(t.prototype, 'attrToPropMap', {
                get: function() {
                  return this._attrToPropMap;
                },
                set: function(t) {
                  this._attrToPropMap = t;
                },
                enumerable: !0,
                configurable: !0,
              }),
              t
            );
          })(),
        ),
        Ya = {
          class: 'className',
          innerHtml: 'innerHTML',
          readonly: 'readOnly',
          tabindex: 'tabIndex',
        },
        Xa = {
          '\b': 'Backspace',
          '\t': 'Tab',
          '\x7f': 'Delete',
          '\x1b': 'Escape',
          Del: 'Delete',
          Esc: 'Escape',
          Left: 'ArrowLeft',
          Right: 'ArrowRight',
          Up: 'ArrowUp',
          Down: 'ArrowDown',
          Menu: 'ContextMenu',
          Scroll: 'ScrollLock',
          Win: 'OS',
        },
        tu = {
          A: '1',
          B: '2',
          C: '3',
          D: '4',
          E: '5',
          F: '6',
          G: '7',
          H: '8',
          I: '9',
          J: '*',
          K: '+',
          M: '-',
          N: '.',
          O: '/',
          '`': '0',
          '\x90': 'NumLock',
        },
        eu = (function() {
          if (Et.Node)
            return (
              Et.Node.prototype.contains ||
              function(t) {
                return !!(16 & this.compareDocumentPosition(t));
              }
            );
        })(),
        nu = (function(t) {
          function e() {
            return (null !== t && t.apply(this, arguments)) || this;
          }
          return (
            __extends(e, t),
            (e.prototype.parse = function(t) {
              throw new Error('parse not implemented');
            }),
            (e.makeCurrent = function() {
              var t;
              (t = new e()), Ka || (Ka = t);
            }),
            (e.prototype.hasProperty = function(t, e) {
              return e in t;
            }),
            (e.prototype.setProperty = function(t, e, n) {
              t[e] = n;
            }),
            (e.prototype.getProperty = function(t, e) {
              return t[e];
            }),
            (e.prototype.invoke = function(t, e, n) {
              t[e].apply(t, n);
            }),
            (e.prototype.logError = function(t) {
              window.console && (console.error ? console.error(t) : console.log(t));
            }),
            (e.prototype.log = function(t) {
              window.console && window.console.log && window.console.log(t);
            }),
            (e.prototype.logGroup = function(t) {
              window.console && window.console.group && window.console.group(t);
            }),
            (e.prototype.logGroupEnd = function() {
              window.console && window.console.groupEnd && window.console.groupEnd();
            }),
            Object.defineProperty(e.prototype, 'attrToPropMap', {
              get: function() {
                return Ya;
              },
              enumerable: !0,
              configurable: !0,
            }),
            (e.prototype.contains = function(t, e) {
              return eu.call(t, e);
            }),
            (e.prototype.querySelector = function(t, e) {
              return t.querySelector(e);
            }),
            (e.prototype.querySelectorAll = function(t, e) {
              return t.querySelectorAll(e);
            }),
            (e.prototype.on = function(t, e, n) {
              t.addEventListener(e, n, !1);
            }),
            (e.prototype.onAndCancel = function(t, e, n) {
              return (
                t.addEventListener(e, n, !1),
                function() {
                  t.removeEventListener(e, n, !1);
                }
              );
            }),
            (e.prototype.dispatchEvent = function(t, e) {
              t.dispatchEvent(e);
            }),
            (e.prototype.createMouseEvent = function(t) {
              var e = this.getDefaultDocument().createEvent('MouseEvent');
              return e.initEvent(t, !0, !0), e;
            }),
            (e.prototype.createEvent = function(t) {
              var e = this.getDefaultDocument().createEvent('Event');
              return e.initEvent(t, !0, !0), e;
            }),
            (e.prototype.preventDefault = function(t) {
              t.preventDefault(), (t.returnValue = !1);
            }),
            (e.prototype.isPrevented = function(t) {
              return t.defaultPrevented || (null != t.returnValue && !t.returnValue);
            }),
            (e.prototype.getInnerHTML = function(t) {
              return t.innerHTML;
            }),
            (e.prototype.getTemplateContent = function(t) {
              return 'content' in t && this.isTemplateElement(t) ? t.content : null;
            }),
            (e.prototype.getOuterHTML = function(t) {
              return t.outerHTML;
            }),
            (e.prototype.nodeName = function(t) {
              return t.nodeName;
            }),
            (e.prototype.nodeValue = function(t) {
              return t.nodeValue;
            }),
            (e.prototype.type = function(t) {
              return t.type;
            }),
            (e.prototype.content = function(t) {
              return this.hasProperty(t, 'content') ? t.content : t;
            }),
            (e.prototype.firstChild = function(t) {
              return t.firstChild;
            }),
            (e.prototype.nextSibling = function(t) {
              return t.nextSibling;
            }),
            (e.prototype.parentElement = function(t) {
              return t.parentNode;
            }),
            (e.prototype.childNodes = function(t) {
              return t.childNodes;
            }),
            (e.prototype.childNodesAsList = function(t) {
              for (var e = t.childNodes, n = new Array(e.length), r = 0; r < e.length; r++)
                n[r] = e[r];
              return n;
            }),
            (e.prototype.clearNodes = function(t) {
              for (; t.firstChild; ) t.removeChild(t.firstChild);
            }),
            (e.prototype.appendChild = function(t, e) {
              t.appendChild(e);
            }),
            (e.prototype.removeChild = function(t, e) {
              t.removeChild(e);
            }),
            (e.prototype.replaceChild = function(t, e, n) {
              t.replaceChild(e, n);
            }),
            (e.prototype.remove = function(t) {
              return t.parentNode && t.parentNode.removeChild(t), t;
            }),
            (e.prototype.insertBefore = function(t, e, n) {
              t.insertBefore(n, e);
            }),
            (e.prototype.insertAllBefore = function(t, e, n) {
              n.forEach(function(n) {
                return t.insertBefore(n, e);
              });
            }),
            (e.prototype.insertAfter = function(t, e, n) {
              t.insertBefore(n, e.nextSibling);
            }),
            (e.prototype.setInnerHTML = function(t, e) {
              t.innerHTML = e;
            }),
            (e.prototype.getText = function(t) {
              return t.textContent;
            }),
            (e.prototype.setText = function(t, e) {
              t.textContent = e;
            }),
            (e.prototype.getValue = function(t) {
              return t.value;
            }),
            (e.prototype.setValue = function(t, e) {
              t.value = e;
            }),
            (e.prototype.getChecked = function(t) {
              return t.checked;
            }),
            (e.prototype.setChecked = function(t, e) {
              t.checked = e;
            }),
            (e.prototype.createComment = function(t) {
              return this.getDefaultDocument().createComment(t);
            }),
            (e.prototype.createTemplate = function(t) {
              var e = this.getDefaultDocument().createElement('template');
              return (e.innerHTML = t), e;
            }),
            (e.prototype.createElement = function(t, e) {
              return (e = e || this.getDefaultDocument()).createElement(t);
            }),
            (e.prototype.createElementNS = function(t, e, n) {
              return (n = n || this.getDefaultDocument()).createElementNS(t, e);
            }),
            (e.prototype.createTextNode = function(t, e) {
              return (e = e || this.getDefaultDocument()).createTextNode(t);
            }),
            (e.prototype.createScriptTag = function(t, e, n) {
              var r = (n = n || this.getDefaultDocument()).createElement('SCRIPT');
              return r.setAttribute(t, e), r;
            }),
            (e.prototype.createStyleElement = function(t, e) {
              var n = (e = e || this.getDefaultDocument()).createElement('style');
              return this.appendChild(n, this.createTextNode(t, e)), n;
            }),
            (e.prototype.createShadowRoot = function(t) {
              return t.createShadowRoot();
            }),
            (e.prototype.getShadowRoot = function(t) {
              return t.shadowRoot;
            }),
            (e.prototype.getHost = function(t) {
              return t.host;
            }),
            (e.prototype.clone = function(t) {
              return t.cloneNode(!0);
            }),
            (e.prototype.getElementsByClassName = function(t, e) {
              return t.getElementsByClassName(e);
            }),
            (e.prototype.getElementsByTagName = function(t, e) {
              return t.getElementsByTagName(e);
            }),
            (e.prototype.classList = function(t) {
              return Array.prototype.slice.call(t.classList, 0);
            }),
            (e.prototype.addClass = function(t, e) {
              t.classList.add(e);
            }),
            (e.prototype.removeClass = function(t, e) {
              t.classList.remove(e);
            }),
            (e.prototype.hasClass = function(t, e) {
              return t.classList.contains(e);
            }),
            (e.prototype.setStyle = function(t, e, n) {
              t.style[e] = n;
            }),
            (e.prototype.removeStyle = function(t, e) {
              t.style[e] = '';
            }),
            (e.prototype.getStyle = function(t, e) {
              return t.style[e];
            }),
            (e.prototype.hasStyle = function(t, e, n) {
              var r = this.getStyle(t, e) || '';
              return n ? r == n : r.length > 0;
            }),
            (e.prototype.tagName = function(t) {
              return t.tagName;
            }),
            (e.prototype.attributeMap = function(t) {
              for (var e = new Map(), n = t.attributes, r = 0; r < n.length; r++) {
                var o = n.item(r);
                e.set(o.name, o.value);
              }
              return e;
            }),
            (e.prototype.hasAttribute = function(t, e) {
              return t.hasAttribute(e);
            }),
            (e.prototype.hasAttributeNS = function(t, e, n) {
              return t.hasAttributeNS(e, n);
            }),
            (e.prototype.getAttribute = function(t, e) {
              return t.getAttribute(e);
            }),
            (e.prototype.getAttributeNS = function(t, e, n) {
              return t.getAttributeNS(e, n);
            }),
            (e.prototype.setAttribute = function(t, e, n) {
              t.setAttribute(e, n);
            }),
            (e.prototype.setAttributeNS = function(t, e, n, r) {
              t.setAttributeNS(e, n, r);
            }),
            (e.prototype.removeAttribute = function(t, e) {
              t.removeAttribute(e);
            }),
            (e.prototype.removeAttributeNS = function(t, e, n) {
              t.removeAttributeNS(e, n);
            }),
            (e.prototype.templateAwareRoot = function(t) {
              return this.isTemplateElement(t) ? this.content(t) : t;
            }),
            (e.prototype.createHtmlDocument = function() {
              return document.implementation.createHTMLDocument('fakeTitle');
            }),
            (e.prototype.getDefaultDocument = function() {
              return document;
            }),
            (e.prototype.getBoundingClientRect = function(t) {
              try {
                return t.getBoundingClientRect();
              } catch (e) {
                return { top: 0, bottom: 0, left: 0, right: 0, width: 0, height: 0 };
              }
            }),
            (e.prototype.getTitle = function(t) {
              return t.title;
            }),
            (e.prototype.setTitle = function(t, e) {
              t.title = e || '';
            }),
            (e.prototype.elementMatches = function(t, e) {
              return (
                !!this.isElementNode(t) &&
                ((t.matches && t.matches(e)) ||
                  (t.msMatchesSelector && t.msMatchesSelector(e)) ||
                  (t.webkitMatchesSelector && t.webkitMatchesSelector(e)))
              );
            }),
            (e.prototype.isTemplateElement = function(t) {
              return this.isElementNode(t) && 'TEMPLATE' === t.nodeName;
            }),
            (e.prototype.isTextNode = function(t) {
              return t.nodeType === Node.TEXT_NODE;
            }),
            (e.prototype.isCommentNode = function(t) {
              return t.nodeType === Node.COMMENT_NODE;
            }),
            (e.prototype.isElementNode = function(t) {
              return t.nodeType === Node.ELEMENT_NODE;
            }),
            (e.prototype.hasShadowRoot = function(t) {
              return null != t.shadowRoot && t instanceof HTMLElement;
            }),
            (e.prototype.isShadowRoot = function(t) {
              return t instanceof DocumentFragment;
            }),
            (e.prototype.importIntoDoc = function(t) {
              return document.importNode(this.templateAwareRoot(t), !0);
            }),
            (e.prototype.adoptNode = function(t) {
              return document.adoptNode(t);
            }),
            (e.prototype.getHref = function(t) {
              return t.getAttribute('href');
            }),
            (e.prototype.getEventKey = function(t) {
              var e = t.key;
              if (null == e) {
                if (null == (e = t.keyIdentifier)) return 'Unidentified';
                e.startsWith('U+') &&
                  ((e = String.fromCharCode(parseInt(e.substring(2), 16))),
                  3 === t.location && tu.hasOwnProperty(e) && (e = tu[e]));
              }
              return Xa[e] || e;
            }),
            (e.prototype.getGlobalEventTarget = function(t, e) {
              return 'window' === e ? window : 'document' === e ? t : 'body' === e ? t.body : null;
            }),
            (e.prototype.getHistory = function() {
              return window.history;
            }),
            (e.prototype.getLocation = function() {
              return window.location;
            }),
            (e.prototype.getBaseHref = function(t) {
              var e,
                n = ru || (ru = document.querySelector('base')) ? ru.getAttribute('href') : null;
              return null == n
                ? null
                : ((e = n),
                  $a || ($a = document.createElement('a')),
                  $a.setAttribute('href', e),
                  '/' === $a.pathname.charAt(0) ? $a.pathname : '/' + $a.pathname);
            }),
            (e.prototype.resetBaseElement = function() {
              ru = null;
            }),
            (e.prototype.getUserAgent = function() {
              return window.navigator.userAgent;
            }),
            (e.prototype.setData = function(t, e, n) {
              this.setAttribute(t, 'data-' + e, n);
            }),
            (e.prototype.getData = function(t, e) {
              return this.getAttribute(t, 'data-' + e);
            }),
            (e.prototype.getComputedStyle = function(t) {
              return getComputedStyle(t);
            }),
            (e.prototype.supportsWebAnimation = function() {
              return 'function' == typeof Element.prototype.animate;
            }),
            (e.prototype.performanceNow = function() {
              return window.performance && window.performance.now
                ? window.performance.now()
                : new Date().getTime();
            }),
            (e.prototype.supportsCookies = function() {
              return !0;
            }),
            (e.prototype.getCookie = function(t) {
              return Oa(document.cookie, t);
            }),
            (e.prototype.setCookie = function(t, e) {
              document.cookie = encodeURIComponent(t) + '=' + encodeURIComponent(e);
            }),
            e
          );
        })(Ja),
        ru = null;
      function ou() {
        return !!window.history.pushState;
      }
      var iu = new Tt('TRANSITION_ID'),
        su = [
          {
            provide: No,
            useFactory: function(t, e, n) {
              return function() {
                n.get(Ro).donePromise.then(function() {
                  var n = Za();
                  Array.prototype.slice
                    .apply(n.querySelectorAll(e, 'style[ng-transition]'))
                    .filter(function(e) {
                      return n.getAttribute(e, 'ng-transition') === t;
                    })
                    .forEach(function(t) {
                      return n.remove(t);
                    });
                });
              };
            },
            deps: [iu, qa, Ie],
            multi: !0,
          },
        ],
        au = (function() {
          function t() {}
          return (
            (t.init = function() {
              var e;
              (e = new t()), (yi = e);
            }),
            (t.prototype.addToWindow = function(t) {
              (Et.getAngularTestability = function(e, n) {
                void 0 === n && (n = !0);
                var r = t.findTestabilityInTree(e, n);
                if (null == r) throw new Error('Could not find testability for element.');
                return r;
              }),
                (Et.getAllAngularTestabilities = function() {
                  return t.getAllTestabilities();
                }),
                (Et.getAllAngularRootElements = function() {
                  return t.getAllRootElements();
                }),
                Et.frameworkStabilizers || (Et.frameworkStabilizers = []),
                Et.frameworkStabilizers.push(function(t) {
                  var e = Et.getAllAngularTestabilities(),
                    n = e.length,
                    r = !1,
                    o = function(e) {
                      (r = r || e), 0 == --n && t(r);
                    };
                  e.forEach(function(t) {
                    t.whenStable(o);
                  });
                });
            }),
            (t.prototype.findTestabilityInTree = function(t, e, n) {
              if (null == e) return null;
              var r = t.getTestability(e);
              return null != r
                ? r
                : n
                ? Za().isShadowRoot(e)
                  ? this.findTestabilityInTree(t, Za().getHost(e), !0)
                  : this.findTestabilityInTree(t, Za().parentElement(e), !0)
                : null;
            }),
            t
          );
        })();
      function uu(t, e) {
        ('undefined' != typeof COMPILED && COMPILED) || ((Et.ng = Et.ng || {})[t] = e);
      }
      var lu = { ApplicationRef: Si, NgZone: ii };
      function cu(t) {
        return Di(t);
      }
      var hu = new Tt('EventManagerPlugins'),
        pu = (function() {
          function t(t, e) {
            var n = this;
            (this._zone = e),
              (this._eventNameToPlugin = new Map()),
              t.forEach(function(t) {
                return (t.manager = n);
              }),
              (this._plugins = t.slice().reverse());
          }
          return (
            (t.prototype.addEventListener = function(t, e, n) {
              return this._findPluginFor(e).addEventListener(t, e, n);
            }),
            (t.prototype.addGlobalEventListener = function(t, e, n) {
              return this._findPluginFor(e).addGlobalEventListener(t, e, n);
            }),
            (t.prototype.getZone = function() {
              return this._zone;
            }),
            (t.prototype._findPluginFor = function(t) {
              var e = this._eventNameToPlugin.get(t);
              if (e) return e;
              for (var n = this._plugins, r = 0; r < n.length; r++) {
                var o = n[r];
                if (o.supports(t)) return this._eventNameToPlugin.set(t, o), o;
              }
              throw new Error('No event manager plugin found for event ' + t);
            }),
            t
          );
        })(),
        fu = (function() {
          function t(t) {
            this._doc = t;
          }
          return (
            (t.prototype.addGlobalEventListener = function(t, e, n) {
              var r = Za().getGlobalEventTarget(this._doc, t);
              if (!r) throw new Error('Unsupported event target ' + r + ' for event ' + e);
              return this.addEventListener(r, e, n);
            }),
            t
          );
        })(),
        du = (function() {
          function t() {
            this._stylesSet = new Set();
          }
          return (
            (t.prototype.addStyles = function(t) {
              var e = this,
                n = new Set();
              t.forEach(function(t) {
                e._stylesSet.has(t) || (e._stylesSet.add(t), n.add(t));
              }),
                this.onStylesAdded(n);
            }),
            (t.prototype.onStylesAdded = function(t) {}),
            (t.prototype.getAllStyles = function() {
              return Array.from(this._stylesSet);
            }),
            t
          );
        })(),
        yu = (function(t) {
          function e(e) {
            var n = this;
            return (
              ((n = t.call(this) || this)._doc = e),
              (n._hostNodes = new Set()),
              (n._styleNodes = new Set()),
              n._hostNodes.add(e.head),
              n
            );
          }
          return (
            __extends(e, t),
            (e.prototype._addStylesToHost = function(t, e) {
              var n = this;
              t.forEach(function(t) {
                var r = n._doc.createElement('style');
                (r.textContent = t), n._styleNodes.add(e.appendChild(r));
              });
            }),
            (e.prototype.addHost = function(t) {
              this._addStylesToHost(this._stylesSet, t), this._hostNodes.add(t);
            }),
            (e.prototype.removeHost = function(t) {
              this._hostNodes.delete(t);
            }),
            (e.prototype.onStylesAdded = function(t) {
              var e = this;
              this._hostNodes.forEach(function(n) {
                return e._addStylesToHost(t, n);
              });
            }),
            (e.prototype.ngOnDestroy = function() {
              this._styleNodes.forEach(function(t) {
                return Za().remove(t);
              });
            }),
            e
          );
        })(du),
        gu = {
          svg: 'http://www.w3.org/2000/svg',
          xhtml: 'http://www.w3.org/1999/xhtml',
          xlink: 'http://www.w3.org/1999/xlink',
          xml: 'http://www.w3.org/XML/1998/namespace',
          xmlns: 'http://www.w3.org/2000/xmlns/',
        },
        mu = /%COMP%/g,
        vu = '_nghost-%COMP%',
        _u = '_ngcontent-%COMP%';
      function bu(t, e, n) {
        for (var r = 0; r < e.length; r++) {
          var o = e[r];
          Array.isArray(o) ? bu(t, o, n) : ((o = o.replace(mu, t)), n.push(o));
        }
        return n;
      }
      function wu(t) {
        return function(e) {
          !1 === t(e) && (e.preventDefault(), (e.returnValue = !1));
        };
      }
      var Cu = (function() {
          function t(t, e, n) {
            (this.eventManager = t),
              (this.sharedStylesHost = e),
              (this.appId = n),
              (this.rendererByCompId = new Map()),
              (this.defaultRenderer = new Su(t));
          }
          return (
            (t.prototype.createRenderer = function(t, e) {
              if (!t || !e) return this.defaultRenderer;
              switch (e.encapsulation) {
                case Bt.Emulated:
                  var n = this.rendererByCompId.get(e.id);
                  return (
                    n ||
                      ((n = new xu(this.eventManager, this.sharedStylesHost, e, this.appId)),
                      this.rendererByCompId.set(e.id, n)),
                    n.applyToHost(t),
                    n
                  );
                case Bt.Native:
                case Bt.ShadowDom:
                  return new Pu(this.eventManager, this.sharedStylesHost, t, e);
                default:
                  if (!this.rendererByCompId.has(e.id)) {
                    var r = bu(e.id, e.styles, []);
                    this.sharedStylesHost.addStyles(r),
                      this.rendererByCompId.set(e.id, this.defaultRenderer);
                  }
                  return this.defaultRenderer;
              }
            }),
            (t.prototype.begin = function() {}),
            (t.prototype.end = function() {}),
            t
          );
        })(),
        Su = (function() {
          function t(t) {
            (this.eventManager = t), (this.data = Object.create(null));
          }
          return (
            (t.prototype.destroy = function() {}),
            (t.prototype.createElement = function(t, e) {
              return e ? document.createElementNS(gu[e] || e, t) : document.createElement(t);
            }),
            (t.prototype.createComment = function(t) {
              return document.createComment(t);
            }),
            (t.prototype.createText = function(t) {
              return document.createTextNode(t);
            }),
            (t.prototype.appendChild = function(t, e) {
              t.appendChild(e);
            }),
            (t.prototype.insertBefore = function(t, e, n) {
              t && t.insertBefore(e, n);
            }),
            (t.prototype.removeChild = function(t, e) {
              t && t.removeChild(e);
            }),
            (t.prototype.selectRootElement = function(t, e) {
              var n = 'string' == typeof t ? document.querySelector(t) : t;
              if (!n) throw new Error('The selector "' + t + '" did not match any elements');
              return e || (n.textContent = ''), n;
            }),
            (t.prototype.parentNode = function(t) {
              return t.parentNode;
            }),
            (t.prototype.nextSibling = function(t) {
              return t.nextSibling;
            }),
            (t.prototype.setAttribute = function(t, e, n, r) {
              if (r) {
                e = r + ':' + e;
                var o = gu[r];
                o ? t.setAttributeNS(o, e, n) : t.setAttribute(e, n);
              } else t.setAttribute(e, n);
            }),
            (t.prototype.removeAttribute = function(t, e, n) {
              if (n) {
                var r = gu[n];
                r ? t.removeAttributeNS(r, e) : t.removeAttribute(n + ':' + e);
              } else t.removeAttribute(e);
            }),
            (t.prototype.addClass = function(t, e) {
              t.classList.add(e);
            }),
            (t.prototype.removeClass = function(t, e) {
              t.classList.remove(e);
            }),
            (t.prototype.setStyle = function(t, e, n, r) {
              r & cn.DashCase
                ? t.style.setProperty(e, n, r & cn.Important ? 'important' : '')
                : (t.style[e] = n);
            }),
            (t.prototype.removeStyle = function(t, e, n) {
              n & cn.DashCase ? t.style.removeProperty(e) : (t.style[e] = '');
            }),
            (t.prototype.setProperty = function(t, e, n) {
              Tu(e, 'property'), (t[e] = n);
            }),
            (t.prototype.setValue = function(t, e) {
              t.nodeValue = e;
            }),
            (t.prototype.listen = function(t, e, n) {
              return (
                Tu(e, 'listener'),
                'string' == typeof t
                  ? this.eventManager.addGlobalEventListener(t, e, wu(n))
                  : this.eventManager.addEventListener(t, e, wu(n))
              );
            }),
            t
          );
        })(),
        Eu = '@'.charCodeAt(0);
      function Tu(t, e) {
        if (t.charCodeAt(0) === Eu)
          throw new Error(
            'Found the synthetic ' +
              e +
              ' ' +
              t +
              '. Please include either "BrowserAnimationsModule" or "NoopAnimationsModule" in your application.',
          );
      }
      var xu = (function(t) {
          function e(e, n, r, o) {
            var i = this;
            (i = t.call(this, e) || this).component = r;
            var s = bu(o + '-' + r.id, r.styles, []);
            return (
              n.addStyles(s),
              (i.contentAttr = _u.replace(mu, o + '-' + r.id)),
              (i.hostAttr = vu.replace(mu, o + '-' + r.id)),
              i
            );
          }
          return (
            __extends(e, t),
            (e.prototype.applyToHost = function(e) {
              t.prototype.setAttribute.call(this, e, this.hostAttr, '');
            }),
            (e.prototype.createElement = function(e, n) {
              var r = t.prototype.createElement.call(this, e, n);
              return t.prototype.setAttribute.call(this, r, this.contentAttr, ''), r;
            }),
            e
          );
        })(Su),
        Pu = (function(t) {
          function e(e, n, r, o) {
            var i = this;
            ((i = t.call(this, e) || this).sharedStylesHost = n),
              (i.hostEl = r),
              (i.component = o),
              (i.shadowRoot =
                o.encapsulation === Bt.ShadowDom
                  ? r.attachShadow({ mode: 'open' })
                  : r.createShadowRoot()),
              i.sharedStylesHost.addHost(i.shadowRoot);
            for (var s = bu(o.id, o.styles, []), a = 0; a < s.length; a++) {
              var u = document.createElement('style');
              (u.textContent = s[a]), i.shadowRoot.appendChild(u);
            }
            return i;
          }
          return (
            __extends(e, t),
            (e.prototype.nodeOrShadowRoot = function(t) {
              return t === this.hostEl ? this.shadowRoot : t;
            }),
            (e.prototype.destroy = function() {
              this.sharedStylesHost.removeHost(this.shadowRoot);
            }),
            (e.prototype.appendChild = function(e, n) {
              return t.prototype.appendChild.call(this, this.nodeOrShadowRoot(e), n);
            }),
            (e.prototype.insertBefore = function(e, n, r) {
              return t.prototype.insertBefore.call(this, this.nodeOrShadowRoot(e), n, r);
            }),
            (e.prototype.removeChild = function(e, n) {
              return t.prototype.removeChild.call(this, this.nodeOrShadowRoot(e), n);
            }),
            (e.prototype.parentNode = function(e) {
              return this.nodeOrShadowRoot(
                t.prototype.parentNode.call(this, this.nodeOrShadowRoot(e)),
              );
            }),
            e
          );
        })(Su),
        Ou =
          ('undefined' != typeof Zone && Zone.__symbol__) ||
          function(t) {
            return '__zone_symbol__' + t;
          },
        ku = Ou('addEventListener'),
        Au = Ou('removeEventListener'),
        Iu = {},
        Nu = '__zone_symbol__propagationStopped',
        Ru = (function() {
          var t = 'undefined' != typeof Zone && Zone[Ou('BLACK_LISTED_EVENTS')];
          if (t) {
            var e = {};
            return (
              t.forEach(function(t) {
                e[t] = t;
              }),
              e
            );
          }
        })(),
        Du = function(t) {
          return !!Ru && Ru.hasOwnProperty(t);
        },
        Fu = function(t) {
          var e = Iu[t.type];
          if (e) {
            var n = this[e];
            if (n) {
              var r = [t];
              if (1 === n.length)
                return (s = n[0]).zone !== Zone.current
                  ? s.zone.run(s.handler, this, r)
                  : s.handler.apply(this, r);
              for (var o = n.slice(), i = 0; i < o.length && !0 !== t[Nu]; i++) {
                var s;
                (s = o[i]).zone !== Zone.current
                  ? s.zone.run(s.handler, this, r)
                  : s.handler.apply(this, r);
              }
            }
          }
        },
        ju = (function(t) {
          function e(e, n, r) {
            var o = this;
            return (
              ((o = t.call(this, e) || this).ngZone = n),
              (r &&
                (function(t) {
                  return t === Ga;
                })(r)) ||
                o.patchEvent(),
              o
            );
          }
          return (
            __extends(e, t),
            (e.prototype.patchEvent = function() {
              if (
                'undefined' != typeof Event &&
                Event &&
                Event.prototype &&
                !Event.prototype.__zone_symbol__stopImmediatePropagation
              ) {
                var t = (Event.prototype.__zone_symbol__stopImmediatePropagation =
                  Event.prototype.stopImmediatePropagation);
                Event.prototype.stopImmediatePropagation = function() {
                  this && (this[Nu] = !0), t && t.apply(this, arguments);
                };
              }
            }),
            (e.prototype.supports = function(t) {
              return !0;
            }),
            (e.prototype.addEventListener = function(t, e, n) {
              var r = this,
                o = n;
              if (!t[ku] || (ii.isInAngularZone() && !Du(e))) t.addEventListener(e, o, !1);
              else {
                var i = Iu[e];
                i || (i = Iu[e] = Ou('ANGULAR' + e + 'FALSE'));
                var s = t[i],
                  a = s && s.length > 0;
                s || (s = t[i] = []);
                var u = Du(e) ? Zone.root : Zone.current;
                if (0 === s.length) s.push({ zone: u, handler: o });
                else {
                  for (var l = !1, c = 0; c < s.length; c++)
                    if (s[c].handler === o) {
                      l = !0;
                      break;
                    }
                  l || s.push({ zone: u, handler: o });
                }
                a || t[ku](e, Fu, !1);
              }
              return function() {
                return r.removeEventListener(t, e, o);
              };
            }),
            (e.prototype.removeEventListener = function(t, e, n) {
              var r = t[Au];
              if (!r) return t.removeEventListener.apply(t, [e, n, !1]);
              var o = Iu[e],
                i = o && t[o];
              if (!i) return t.removeEventListener.apply(t, [e, n, !1]);
              for (var s = !1, a = 0; a < i.length; a++)
                if (i[a].handler === n) {
                  (s = !0), i.splice(a, 1);
                  break;
                }
              s
                ? 0 === i.length && r.apply(t, [e, Fu, !1])
                : t.removeEventListener.apply(t, [e, n, !1]);
            }),
            e
          );
        })(fu),
        Mu = {
          pan: !0,
          panstart: !0,
          panmove: !0,
          panend: !0,
          pancancel: !0,
          panleft: !0,
          panright: !0,
          panup: !0,
          pandown: !0,
          pinch: !0,
          pinchstart: !0,
          pinchmove: !0,
          pinchend: !0,
          pinchcancel: !0,
          pinchin: !0,
          pinchout: !0,
          press: !0,
          pressup: !0,
          rotate: !0,
          rotatestart: !0,
          rotatemove: !0,
          rotateend: !0,
          rotatecancel: !0,
          swipe: !0,
          swipeleft: !0,
          swiperight: !0,
          swipeup: !0,
          swipedown: !0,
          tap: !0,
        },
        Vu = new Tt('HammerGestureConfig'),
        Lu = new Tt('HammerLoader'),
        Uu = (function() {
          function t() {
            (this.events = []), (this.overrides = {});
          }
          return (
            (t.prototype.buildHammer = function(t) {
              var e = new Hammer(t, this.options);
              for (var n in (e.get('pinch').set({ enable: !0 }),
              e.get('rotate').set({ enable: !0 }),
              this.overrides))
                e.get(n).set(this.overrides[n]);
              return e;
            }),
            t
          );
        })(),
        Hu = (function(t) {
          function e(e, n, r, o) {
            var i = this;
            return ((i = t.call(this, e) || this)._config = n), (i.console = r), (i.loader = o), i;
          }
          return (
            __extends(e, t),
            (e.prototype.supports = function(t) {
              return !(
                (!Mu.hasOwnProperty(t.toLowerCase()) && !this.isCustomEvent(t)) ||
                (!window.Hammer &&
                  !this.loader &&
                  (this.console.warn(
                    'The "' +
                      t +
                      '" event cannot be bound because Hammer.JS is not loaded and no custom loader has been specified.',
                  ),
                  1))
              );
            }),
            (e.prototype.addEventListener = function(t, e, n) {
              var r = this,
                o = this.manager.getZone();
              if (((e = e.toLowerCase()), !window.Hammer && this.loader)) {
                var i = !1,
                  s = function() {
                    i = !0;
                  };
                return (
                  this.loader()
                    .then(function() {
                      if (!window.Hammer)
                        return (
                          r.console.warn(
                            'The custom HAMMER_LOADER completed, but Hammer.JS is not present.',
                          ),
                          void (s = function() {})
                        );
                      i || (s = r.addEventListener(t, e, n));
                    })
                    .catch(function() {
                      r.console.warn(
                        'The "' +
                          e +
                          '" event cannot be bound because the custom Hammer.JS loader failed.',
                      ),
                        (s = function() {});
                    }),
                  function() {
                    s();
                  }
                );
              }
              return o.runOutsideAngular(function() {
                var i = r._config.buildHammer(t),
                  s = function(t) {
                    o.runGuarded(function() {
                      n(t);
                    });
                  };
                return (
                  i.on(e, s),
                  function() {
                    i.off(e, s), 'function' == typeof i.destroy && i.destroy();
                  }
                );
              });
            }),
            (e.prototype.isCustomEvent = function(t) {
              return this._config.events.indexOf(t) > -1;
            }),
            e
          );
        })(fu),
        Bu = ['alt', 'control', 'meta', 'shift'],
        zu = {
          alt: function(t) {
            return t.altKey;
          },
          control: function(t) {
            return t.ctrlKey;
          },
          meta: function(t) {
            return t.metaKey;
          },
          shift: function(t) {
            return t.shiftKey;
          },
        },
        qu = (function(t) {
          function e(e) {
            return t.call(this, e) || this;
          }
          return (
            __extends(e, t),
            (e.prototype.supports = function(t) {
              return null != e.parseEventName(t);
            }),
            (e.prototype.addEventListener = function(t, n, r) {
              var o = e.parseEventName(n),
                i = e.eventCallback(o.fullKey, r, this.manager.getZone());
              return this.manager.getZone().runOutsideAngular(function() {
                return Za().onAndCancel(t, o.domEventName, i);
              });
            }),
            (e.parseEventName = function(t) {
              var n = t.toLowerCase().split('.'),
                r = n.shift();
              if (0 === n.length || ('keydown' !== r && 'keyup' !== r)) return null;
              var o = e._normalizeKey(n.pop()),
                i = '';
              if (
                (Bu.forEach(function(t) {
                  var e = n.indexOf(t);
                  e > -1 && (n.splice(e, 1), (i += t + '.'));
                }),
                (i += o),
                0 != n.length || 0 === o.length)
              )
                return null;
              var s = {};
              return (s.domEventName = r), (s.fullKey = i), s;
            }),
            (e.getEventFullKey = function(t) {
              var e = '',
                n = Za().getEventKey(t);
              return (
                ' ' === (n = n.toLowerCase()) ? (n = 'space') : '.' === n && (n = 'dot'),
                Bu.forEach(function(r) {
                  r != n && (0, zu[r])(t) && (e += r + '.');
                }),
                (e += n)
              );
            }),
            (e.eventCallback = function(t, n, r) {
              return function(o) {
                e.getEventFullKey(o) === t &&
                  r.runGuarded(function() {
                    return n(o);
                  });
              };
            }),
            (e._normalizeKey = function(t) {
              switch (t) {
                case 'esc':
                  return 'escape';
                default:
                  return t;
              }
            }),
            e
          );
        })(fu),
        Gu = function() {},
        Wu = (function(t) {
          function e(e) {
            var n = this;
            return ((n = t.call(this) || this)._doc = e), n;
          }
          return (
            __extends(e, t),
            (e.prototype.sanitize = function(t, e) {
              if (null == e) return null;
              switch (t) {
                case we.NONE:
                  return e;
                case we.HTML:
                  return e instanceof Ku
                    ? e.changingThisBreaksApplicationSecurity
                    : (this.checkNotSafeValue(e, 'HTML'),
                      (function(t, e) {
                        var n = null;
                        try {
                          se = se || new te(t);
                          var r = e ? String(e) : '';
                          n = se.getInertBodyElement(r);
                          var o = 5,
                            i = r;
                          do {
                            if (0 === o)
                              throw new Error(
                                'Failed to sanitize html because the input is unstable',
                              );
                            o--, (r = i), (i = n.innerHTML), (n = se.getInertBodyElement(r));
                          } while (r !== i);
                          var s = new ge(),
                            a = s.sanitizeChildren(be(n) || n);
                          return (
                            Xt() &&
                              s.sanitizedSomething &&
                              console.warn(
                                'WARNING: sanitizing HTML stripped some content, see http://g.co/ng/security#xss',
                              ),
                            a
                          );
                        } finally {
                          if (n)
                            for (var u = be(n) || n; u.firstChild; ) u.removeChild(u.firstChild);
                        }
                      })(this._doc, String(e)));
                case we.STYLE:
                  return e instanceof Zu
                    ? e.changingThisBreaksApplicationSecurity
                    : (this.checkNotSafeValue(e, 'Style'),
                      (function(t) {
                        if (!(t = String(t).trim())) return '';
                        var e = t.match(Ee);
                        return (e && re(e[1]) === e[1]) ||
                          (t.match(Se) &&
                            (function(t) {
                              for (var e = !0, n = !0, r = 0; r < t.length; r++) {
                                var o = t.charAt(r);
                                "'" === o && n ? (e = !e) : '"' === o && e && (n = !n);
                              }
                              return e && n;
                            })(t))
                          ? t
                          : (Xt() &&
                              console.warn(
                                'WARNING: sanitizing unsafe style value ' +
                                  t +
                                  ' (see http://g.co/ng/security#xss).',
                              ),
                            'unsafe');
                      })(e));
                case we.SCRIPT:
                  if (e instanceof $u) return e.changingThisBreaksApplicationSecurity;
                  throw (this.checkNotSafeValue(e, 'Script'),
                  new Error('unsafe value used in a script context'));
                case we.URL:
                  return e instanceof Yu || e instanceof Ju
                    ? e.changingThisBreaksApplicationSecurity
                    : (this.checkNotSafeValue(e, 'URL'), re(String(e)));
                case we.RESOURCE_URL:
                  if (e instanceof Yu) return e.changingThisBreaksApplicationSecurity;
                  throw (this.checkNotSafeValue(e, 'ResourceURL'),
                  new Error(
                    'unsafe value used in a resource URL context (see http://g.co/ng/security#xss)',
                  ));
                default:
                  throw new Error(
                    'Unexpected SecurityContext ' + t + ' (see http://g.co/ng/security#xss)',
                  );
              }
            }),
            (e.prototype.checkNotSafeValue = function(t, e) {
              if (t instanceof Qu)
                throw new Error(
                  'Required a safe ' +
                    e +
                    ', got a ' +
                    t.getTypeName() +
                    ' (see http://g.co/ng/security#xss)',
                );
            }),
            (e.prototype.bypassSecurityTrustHtml = function(t) {
              return new Ku(t);
            }),
            (e.prototype.bypassSecurityTrustStyle = function(t) {
              return new Zu(t);
            }),
            (e.prototype.bypassSecurityTrustScript = function(t) {
              return new $u(t);
            }),
            (e.prototype.bypassSecurityTrustUrl = function(t) {
              return new Ju(t);
            }),
            (e.prototype.bypassSecurityTrustResourceUrl = function(t) {
              return new Yu(t);
            }),
            e
          );
        })(Gu),
        Qu = (function() {
          function t(t) {
            this.changingThisBreaksApplicationSecurity = t;
          }
          return (
            (t.prototype.toString = function() {
              return (
                'SafeValue must use [property]=binding: ' +
                this.changingThisBreaksApplicationSecurity +
                ' (see http://g.co/ng/security#xss)'
              );
            }),
            t
          );
        })(),
        Ku = (function(t) {
          function e() {
            return (null !== t && t.apply(this, arguments)) || this;
          }
          return (
            __extends(e, t),
            (e.prototype.getTypeName = function() {
              return 'HTML';
            }),
            e
          );
        })(Qu),
        Zu = (function(t) {
          function e() {
            return (null !== t && t.apply(this, arguments)) || this;
          }
          return (
            __extends(e, t),
            (e.prototype.getTypeName = function() {
              return 'Style';
            }),
            e
          );
        })(Qu),
        $u = (function(t) {
          function e() {
            return (null !== t && t.apply(this, arguments)) || this;
          }
          return (
            __extends(e, t),
            (e.prototype.getTypeName = function() {
              return 'Script';
            }),
            e
          );
        })(Qu),
        Ju = (function(t) {
          function e() {
            return (null !== t && t.apply(this, arguments)) || this;
          }
          return (
            __extends(e, t),
            (e.prototype.getTypeName = function() {
              return 'URL';
            }),
            e
          );
        })(Qu),
        Yu = (function(t) {
          function e() {
            return (null !== t && t.apply(this, arguments)) || this;
          }
          return (
            __extends(e, t),
            (e.prototype.getTypeName = function() {
              return 'ResourceURL';
            }),
            e
          );
        })(Qu),
        Xu = vi(ji, 'browser', [
          { provide: Vo, useValue: 'browser' },
          {
            provide: Mo,
            useValue: function() {
              nu.makeCurrent(), au.init();
            },
            multi: !0,
          },
          {
            provide: ga,
            useClass: (function(t) {
              function e(e) {
                var n = this;
                return ((n = t.call(this) || this)._doc = e), n._init(), n;
              }
              return (
                __extends(e, t),
                (e.prototype._init = function() {
                  (this.location = Za().getLocation()), (this._history = Za().getHistory());
                }),
                (e.prototype.getBaseHrefFromDOM = function() {
                  return Za().getBaseHref(this._doc);
                }),
                (e.prototype.onPopState = function(t) {
                  Za()
                    .getGlobalEventTarget(this._doc, 'window')
                    .addEventListener('popstate', t, !1);
                }),
                (e.prototype.onHashChange = function(t) {
                  Za()
                    .getGlobalEventTarget(this._doc, 'window')
                    .addEventListener('hashchange', t, !1);
                }),
                Object.defineProperty(e.prototype, 'href', {
                  get: function() {
                    return this.location.href;
                  },
                  enumerable: !0,
                  configurable: !0,
                }),
                Object.defineProperty(e.prototype, 'protocol', {
                  get: function() {
                    return this.location.protocol;
                  },
                  enumerable: !0,
                  configurable: !0,
                }),
                Object.defineProperty(e.prototype, 'hostname', {
                  get: function() {
                    return this.location.hostname;
                  },
                  enumerable: !0,
                  configurable: !0,
                }),
                Object.defineProperty(e.prototype, 'port', {
                  get: function() {
                    return this.location.port;
                  },
                  enumerable: !0,
                  configurable: !0,
                }),
                Object.defineProperty(e.prototype, 'pathname', {
                  get: function() {
                    return this.location.pathname;
                  },
                  set: function(t) {
                    this.location.pathname = t;
                  },
                  enumerable: !0,
                  configurable: !0,
                }),
                Object.defineProperty(e.prototype, 'search', {
                  get: function() {
                    return this.location.search;
                  },
                  enumerable: !0,
                  configurable: !0,
                }),
                Object.defineProperty(e.prototype, 'hash', {
                  get: function() {
                    return this.location.hash;
                  },
                  enumerable: !0,
                  configurable: !0,
                }),
                (e.prototype.pushState = function(t, e, n) {
                  ou() ? this._history.pushState(t, e, n) : (this.location.hash = n);
                }),
                (e.prototype.replaceState = function(t, e, n) {
                  ou() ? this._history.replaceState(t, e, n) : (this.location.hash = n);
                }),
                (e.prototype.forward = function() {
                  this._history.forward();
                }),
                (e.prototype.back = function() {
                  this._history.back();
                }),
                (e.prototype.getState = function() {
                  return this._history.state;
                }),
                e
              );
            })(ga),
            deps: [qa],
          },
          {
            provide: qa,
            useFactory: function() {
              return document;
            },
            deps: [],
          },
        ]);
      function tl() {
        return new $t();
      }
      var el = (function() {
        function t(t) {
          if (t)
            throw new Error(
              'BrowserModule has already been loaded. If you need access to common directives such as NgIf and NgFor from a lazy loaded module, import CommonModule instead.',
            );
        }
        return (
          (t.withServerTransition = function(e) {
            return {
              ngModule: t,
              providers: [{ provide: Do, useValue: e.appId }, { provide: iu, useExisting: Do }, su],
            };
          }),
          t
        );
      })();
      function nl(t, e) {
        return new C(function(n) {
          var r = t.length;
          if (0 !== r)
            for (
              var o = new Array(r),
                i = 0,
                s = 0,
                a = function(a) {
                  var u = z(t[a]),
                    l = !1;
                  n.add(
                    u.subscribe({
                      next: function(t) {
                        l || ((l = !0), s++), (o[a] = t);
                      },
                      error: function(t) {
                        return n.error(t);
                      },
                      complete: function() {
                        (++i !== r && l) ||
                          (s === r &&
                            n.next(
                              e
                                ? e.reduce(function(t, e, n) {
                                    return (t[e] = o[n]), t;
                                  }, {})
                                : o,
                            ),
                          n.complete());
                      },
                    }),
                  );
                },
                u = 0;
              u < r;
              u++
            )
              a(u);
          else n.complete();
        });
      }
      'undefined' != typeof window && window;
      var rl = new Tt('NgValueAccessor'),
        ol = new Tt('CompositionEventMode'),
        il = (function() {
          function t(t, e, n) {
            var r;
            (this._renderer = t),
              (this._elementRef = e),
              (this._compositionMode = n),
              (this.onChange = function(t) {}),
              (this.onTouched = function() {}),
              (this._composing = !1),
              null == this._compositionMode &&
                (this._compositionMode =
                  ((r = Za() ? Za().getUserAgent() : ''), !/android (\d+)/.test(r.toLowerCase())));
          }
          return (
            (t.prototype.writeValue = function(t) {
              this._renderer.setProperty(
                this._elementRef.nativeElement,
                'value',
                null == t ? '' : t,
              );
            }),
            (t.prototype.registerOnChange = function(t) {
              this.onChange = t;
            }),
            (t.prototype.registerOnTouched = function(t) {
              this.onTouched = t;
            }),
            (t.prototype.setDisabledState = function(t) {
              this._renderer.setProperty(this._elementRef.nativeElement, 'disabled', t);
            }),
            (t.prototype._handleInput = function(t) {
              (!this._compositionMode || (this._compositionMode && !this._composing)) &&
                this.onChange(t);
            }),
            (t.prototype._compositionStart = function() {
              this._composing = !0;
            }),
            (t.prototype._compositionEnd = function(t) {
              (this._composing = !1), this._compositionMode && this.onChange(t);
            }),
            t
          );
        })(),
        sl = (function() {
          function t() {}
          return (
            Object.defineProperty(t.prototype, 'value', {
              get: function() {
                return this.control ? this.control.value : null;
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, 'valid', {
              get: function() {
                return this.control ? this.control.valid : null;
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, 'invalid', {
              get: function() {
                return this.control ? this.control.invalid : null;
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, 'pending', {
              get: function() {
                return this.control ? this.control.pending : null;
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, 'disabled', {
              get: function() {
                return this.control ? this.control.disabled : null;
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, 'enabled', {
              get: function() {
                return this.control ? this.control.enabled : null;
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, 'errors', {
              get: function() {
                return this.control ? this.control.errors : null;
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, 'pristine', {
              get: function() {
                return this.control ? this.control.pristine : null;
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, 'dirty', {
              get: function() {
                return this.control ? this.control.dirty : null;
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, 'touched', {
              get: function() {
                return this.control ? this.control.touched : null;
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, 'status', {
              get: function() {
                return this.control ? this.control.status : null;
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, 'untouched', {
              get: function() {
                return this.control ? this.control.untouched : null;
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, 'statusChanges', {
              get: function() {
                return this.control ? this.control.statusChanges : null;
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, 'valueChanges', {
              get: function() {
                return this.control ? this.control.valueChanges : null;
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, 'path', {
              get: function() {
                return null;
              },
              enumerable: !0,
              configurable: !0,
            }),
            (t.prototype.reset = function(t) {
              this.control && this.control.reset(t);
            }),
            (t.prototype.hasError = function(t, e) {
              return !!this.control && this.control.hasError(t, e);
            }),
            (t.prototype.getError = function(t, e) {
              return this.control ? this.control.getError(t, e) : null;
            }),
            t
          );
        })(),
        al = (function(t) {
          function e() {
            return (null !== t && t.apply(this, arguments)) || this;
          }
          return (
            __extends(e, t),
            Object.defineProperty(e.prototype, 'formDirective', {
              get: function() {
                return null;
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, 'path', {
              get: function() {
                return null;
              },
              enumerable: !0,
              configurable: !0,
            }),
            e
          );
        })(sl);
      function ul() {
        throw new Error('unimplemented');
      }
      var ll = (function(t) {
          function e() {
            var e = this;
            return (
              ((e = t.apply(this, arguments) || this)._parent = null),
              (e.name = null),
              (e.valueAccessor = null),
              (e._rawValidators = []),
              (e._rawAsyncValidators = []),
              e
            );
          }
          return (
            __extends(e, t),
            Object.defineProperty(e.prototype, 'validator', {
              get: function() {
                return ul();
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, 'asyncValidator', {
              get: function() {
                return ul();
              },
              enumerable: !0,
              configurable: !0,
            }),
            e
          );
        })(sl),
        cl = (function() {
          function t(t) {
            this._cd = t;
          }
          return (
            Object.defineProperty(t.prototype, 'ngClassUntouched', {
              get: function() {
                return !!this._cd.control && this._cd.control.untouched;
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, 'ngClassTouched', {
              get: function() {
                return !!this._cd.control && this._cd.control.touched;
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, 'ngClassPristine', {
              get: function() {
                return !!this._cd.control && this._cd.control.pristine;
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, 'ngClassDirty', {
              get: function() {
                return !!this._cd.control && this._cd.control.dirty;
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, 'ngClassValid', {
              get: function() {
                return !!this._cd.control && this._cd.control.valid;
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, 'ngClassInvalid', {
              get: function() {
                return !!this._cd.control && this._cd.control.invalid;
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, 'ngClassPending', {
              get: function() {
                return !!this._cd.control && this._cd.control.pending;
              },
              enumerable: !0,
              configurable: !0,
            }),
            t
          );
        })(),
        hl = (function(t) {
          function e(e) {
            return t.call(this, e) || this;
          }
          return __extends(e, t), e;
        })(cl),
        pl = (function(t) {
          function e(e) {
            return t.call(this, e) || this;
          }
          return __extends(e, t), e;
        })(cl);
      function fl(t) {
        return null == t || 0 === t.length;
      }
      var dl = /^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
        yl = (function() {
          function t() {}
          return (
            (t.min = function(t) {
              return function(e) {
                if (fl(e.value) || fl(t)) return null;
                var n = parseFloat(e.value);
                return !isNaN(n) && n < t ? { min: { min: t, actual: e.value } } : null;
              };
            }),
            (t.max = function(t) {
              return function(e) {
                if (fl(e.value) || fl(t)) return null;
                var n = parseFloat(e.value);
                return !isNaN(n) && n > t ? { max: { max: t, actual: e.value } } : null;
              };
            }),
            (t.required = function(t) {
              return fl(t.value) ? { required: !0 } : null;
            }),
            (t.requiredTrue = function(t) {
              return !0 === t.value ? null : { required: !0 };
            }),
            (t.email = function(t) {
              return fl(t.value) ? null : dl.test(t.value) ? null : { email: !0 };
            }),
            (t.minLength = function(t) {
              return function(e) {
                if (fl(e.value)) return null;
                var n = e.value ? e.value.length : 0;
                return n < t ? { minlength: { requiredLength: t, actualLength: n } } : null;
              };
            }),
            (t.maxLength = function(t) {
              return function(e) {
                var n = e.value ? e.value.length : 0;
                return n > t ? { maxlength: { requiredLength: t, actualLength: n } } : null;
              };
            }),
            (t.pattern = function(e) {
              return e
                ? ('string' == typeof e
                    ? ((r = ''),
                      '^' !== e.charAt(0) && (r += '^'),
                      (r += e),
                      '$' !== e.charAt(e.length - 1) && (r += '$'),
                      (n = new RegExp(r)))
                    : ((r = e.toString()), (n = e)),
                  function(t) {
                    if (fl(t.value)) return null;
                    var e = t.value;
                    return n.test(e) ? null : { pattern: { requiredPattern: r, actualValue: e } };
                  })
                : t.nullValidator;
              var n, r;
            }),
            (t.nullValidator = function(t) {
              return null;
            }),
            (t.compose = function(t) {
              if (!t) return null;
              var e = t.filter(gl);
              return 0 == e.length
                ? null
                : function(t) {
                    return vl(
                      (function(t, e) {
                        return e.map(function(e) {
                          return e(t);
                        });
                      })(t, e),
                    );
                  };
            }),
            (t.composeAsync = function(t) {
              if (!t) return null;
              var e = t.filter(gl);
              return 0 == e.length
                ? null
                : function(t) {
                    return (function() {
                      for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                      if (1 === t.length) {
                        var n = t[0];
                        if (u(n)) return nl(n, null);
                        if (l(n) && Object.getPrototypeOf(n) === Object.prototype) {
                          var r = Object.keys(n);
                          return nl(
                            r.map(function(t) {
                              return n[t];
                            }),
                            r,
                          );
                        }
                      }
                      if ('function' == typeof t[t.length - 1]) {
                        var o = t.pop();
                        return nl((t = 1 === t.length && u(t[0]) ? t[0] : t), null).pipe(
                          L(function(t) {
                            return o.apply(void 0, t);
                          }),
                        );
                      }
                      return nl(t, null);
                    })(
                      (function(t, e) {
                        return e.map(function(e) {
                          return e(t);
                        });
                      })(t, e).map(ml),
                    ).pipe(L(vl));
                  };
            }),
            t
          );
        })();
      function gl(t) {
        return null != t;
      }
      function ml(t) {
        var e = Qe(t) ? z(t) : t;
        if (!Ke(e)) throw new Error('Expected validator to return Promise or Observable.');
        return e;
      }
      function vl(t) {
        var e = t.reduce(function(t, e) {
          return null != e ? Object.assign({}, t, e) : t;
        }, {});
        return 0 === Object.keys(e).length ? null : e;
      }
      function _l(t) {
        return t.validate
          ? function(e) {
              return t.validate(e);
            }
          : t;
      }
      function bl(t) {
        return t.validate
          ? function(e) {
              return t.validate(e);
            }
          : t;
      }
      var wl = (function() {
          function t() {
            this._accessors = [];
          }
          return (
            (t.prototype.add = function(t, e) {
              this._accessors.push([t, e]);
            }),
            (t.prototype.remove = function(t) {
              for (var e = this._accessors.length - 1; e >= 0; --e)
                if (this._accessors[e][1] === t) return void this._accessors.splice(e, 1);
            }),
            (t.prototype.select = function(t) {
              var e = this;
              this._accessors.forEach(function(n) {
                e._isSameGroup(n, t) && n[1] !== t && n[1].fireUncheck(t.value);
              });
            }),
            (t.prototype._isSameGroup = function(t, e) {
              return !!t[0].control && t[0]._parent === e._control._parent && t[1].name === e.name;
            }),
            t
          );
        })(),
        Cl = (function() {
          function t(t, e, n, r) {
            (this._renderer = t),
              (this._elementRef = e),
              (this._registry = n),
              (this._injector = r),
              (this.onChange = function() {}),
              (this.onTouched = function() {});
          }
          return (
            (t.prototype.ngOnInit = function() {
              (this._control = this._injector.get(ll)),
                this._checkName(),
                this._registry.add(this._control, this);
            }),
            (t.prototype.ngOnDestroy = function() {
              this._registry.remove(this);
            }),
            (t.prototype.writeValue = function(t) {
              (this._state = t === this.value),
                this._renderer.setProperty(this._elementRef.nativeElement, 'checked', this._state);
            }),
            (t.prototype.registerOnChange = function(t) {
              var e = this;
              (this._fn = t),
                (this.onChange = function() {
                  t(e.value), e._registry.select(e);
                });
            }),
            (t.prototype.fireUncheck = function(t) {
              this.writeValue(t);
            }),
            (t.prototype.registerOnTouched = function(t) {
              this.onTouched = t;
            }),
            (t.prototype.setDisabledState = function(t) {
              this._renderer.setProperty(this._elementRef.nativeElement, 'disabled', t);
            }),
            (t.prototype._checkName = function() {
              this.name &&
                this.formControlName &&
                this.name !== this.formControlName &&
                this._throwNameError(),
                !this.name && this.formControlName && (this.name = this.formControlName);
            }),
            (t.prototype._throwNameError = function() {
              throw new Error(
                '\n      If you define both a name and a formControlName attribute on your radio button, their values\n      must match. Ex: <input type="radio" formControlName="food" name="food">\n    ',
              );
            }),
            t
          );
        })(),
        Sl =
          '\n    <div [formGroup]="myGroup">\n      <input formControlName="firstName">\n    </div>\n\n    In your class:\n\n    this.myGroup = new FormGroup({\n       firstName: new FormControl()\n    });',
        El =
          '\n    <div [formGroup]="myGroup">\n       <div formGroupName="person">\n          <input formControlName="firstName">\n       </div>\n    </div>\n\n    In your class:\n\n    this.myGroup = new FormGroup({\n       person: new FormGroup({ firstName: new FormControl() })\n    });',
        Tl =
          '\n    <div [formGroup]="myGroup">\n      <div formArrayName="cities">\n        <div *ngFor="let city of cityArray.controls; index as i">\n          <input [formControlName]="i">\n        </div>\n      </div>\n    </div>\n\n    In your class:\n\n    this.cityArray = new FormArray([new FormControl(\'SF\')]);\n    this.myGroup = new FormGroup({\n      cities: this.cityArray\n    });',
        xl =
          '\n    <form>\n       <div ngModelGroup="person">\n          <input [(ngModel)]="person.name" name="firstName">\n       </div>\n    </form>',
        Pl = (function() {
          function t() {}
          return (
            (t.controlParentException = function() {
              throw new Error(
                "formControlName must be used with a parent formGroup directive.  You'll want to add a formGroup\n       directive and pass it an existing FormGroup instance (you can create one in your class).\n\n      Example:\n\n      " +
                  Sl,
              );
            }),
            (t.ngModelGroupException = function() {
              throw new Error(
                'formControlName cannot be used with an ngModelGroup parent. It is only compatible with parents\n       that also have a "form" prefix: formGroupName, formArrayName, or formGroup.\n\n       Option 1:  Update the parent to be formGroupName (reactive form strategy)\n\n        ' +
                  El +
                  '\n\n        Option 2: Use ngModel instead of formControlName (template-driven strategy)\n\n        ' +
                  xl,
              );
            }),
            (t.missingFormException = function() {
              throw new Error(
                'formGroup expects a FormGroup instance. Please pass one in.\n\n       Example:\n\n       ' +
                  Sl,
              );
            }),
            (t.groupParentException = function() {
              throw new Error(
                "formGroupName must be used with a parent formGroup directive.  You'll want to add a formGroup\n      directive and pass it an existing FormGroup instance (you can create one in your class).\n\n      Example:\n\n      " +
                  El,
              );
            }),
            (t.arrayParentException = function() {
              throw new Error(
                "formArrayName must be used with a parent formGroup directive.  You'll want to add a formGroup\n       directive and pass it an existing FormGroup instance (you can create one in your class).\n\n        Example:\n\n        " +
                  Tl,
              );
            }),
            (t.disabledAttrWarning = function() {
              console.warn(
                "\n      It looks like you're using the disabled attribute with a reactive form directive. If you set disabled to true\n      when you set up this control in your component class, the disabled attribute will actually be set in the DOM for\n      you. We recommend using this approach to avoid 'changed after checked' errors.\n       \n      Example: \n      form = new FormGroup({\n        first: new FormControl({value: 'Nancy', disabled: true}, Validators.required),\n        last: new FormControl('Drew', Validators.required)\n      });\n    ",
              );
            }),
            (t.ngModelWarning = function(t) {
              console.warn(
                "\n    It looks like you're using ngModel on the same form field as " +
                  t +
                  '. \n    Support for using the ngModel input property and ngModelChange event with \n    reactive form directives has been deprecated in Angular v6 and will be removed \n    in Angular v7.\n    \n    For more information on this, see our API docs here:\n    https://angular.io/api/forms/' +
                  ('formControl' === t ? 'FormControlDirective' : 'FormControlName') +
                  '#use-with-ngmodel\n    ',
              );
            }),
            t
          );
        })();
      function Ol(t, e) {
        return e.path.concat([t]);
      }
      function kl(t, e) {
        t || Rl(e, 'Cannot find control with'),
          e.valueAccessor || Rl(e, 'No value accessor for form control with'),
          (t.validator = yl.compose([t.validator, e.validator])),
          (t.asyncValidator = yl.composeAsync([t.asyncValidator, e.asyncValidator])),
          e.valueAccessor.writeValue(t.value),
          (function(t, e) {
            e.valueAccessor.registerOnChange(function(n) {
              (t._pendingValue = n),
                (t._pendingChange = !0),
                (t._pendingDirty = !0),
                'change' === t.updateOn && Al(t, e);
            });
          })(t, e),
          (function(t, e) {
            t.registerOnChange(function(t, n) {
              e.valueAccessor.writeValue(t), n && e.viewToModelUpdate(t);
            });
          })(t, e),
          (function(t, e) {
            e.valueAccessor.registerOnTouched(function() {
              (t._pendingTouched = !0),
                'blur' === t.updateOn && t._pendingChange && Al(t, e),
                'submit' !== t.updateOn && t.markAsTouched();
            });
          })(t, e),
          e.valueAccessor.setDisabledState &&
            t.registerOnDisabledChange(function(t) {
              e.valueAccessor.setDisabledState(t);
            }),
          e._rawValidators.forEach(function(e) {
            e.registerOnValidatorChange &&
              e.registerOnValidatorChange(function() {
                return t.updateValueAndValidity();
              });
          }),
          e._rawAsyncValidators.forEach(function(e) {
            e.registerOnValidatorChange &&
              e.registerOnValidatorChange(function() {
                return t.updateValueAndValidity();
              });
          });
      }
      function Al(t, e) {
        t._pendingDirty && t.markAsDirty(),
          t.setValue(t._pendingValue, { emitModelToViewChange: !1 }),
          e.viewToModelUpdate(t._pendingValue),
          (t._pendingChange = !1);
      }
      function Il(t, e) {
        null == t && Rl(e, 'Cannot find control with'),
          (t.validator = yl.compose([t.validator, e.validator])),
          (t.asyncValidator = yl.composeAsync([t.asyncValidator, e.asyncValidator]));
      }
      function Nl(t) {
        return Rl(t, 'There is no FormControl instance attached to form control element with');
      }
      function Rl(t, e) {
        var n;
        throw ((n =
          t.path.length > 1
            ? "path: '" + t.path.join(' -> ') + "'"
            : t.path[0]
            ? "name: '" + t.path + "'"
            : 'unspecified name attribute'),
        new Error(e + ' ' + n));
      }
      function Dl(t) {
        return null != t ? yl.compose(t.map(_l)) : null;
      }
      function Fl(t) {
        return null != t ? yl.composeAsync(t.map(bl)) : null;
      }
      var jl = [
        (function() {
          function t(t, e) {
            (this._renderer = t),
              (this._elementRef = e),
              (this.onChange = function(t) {}),
              (this.onTouched = function() {});
          }
          return (
            (t.prototype.writeValue = function(t) {
              this._renderer.setProperty(this._elementRef.nativeElement, 'checked', t);
            }),
            (t.prototype.registerOnChange = function(t) {
              this.onChange = t;
            }),
            (t.prototype.registerOnTouched = function(t) {
              this.onTouched = t;
            }),
            (t.prototype.setDisabledState = function(t) {
              this._renderer.setProperty(this._elementRef.nativeElement, 'disabled', t);
            }),
            t
          );
        })(),
        (function() {
          function t(t, e) {
            (this._renderer = t),
              (this._elementRef = e),
              (this.onChange = function(t) {}),
              (this.onTouched = function() {});
          }
          return (
            (t.prototype.writeValue = function(t) {
              this._renderer.setProperty(this._elementRef.nativeElement, 'value', parseFloat(t));
            }),
            (t.prototype.registerOnChange = function(t) {
              this.onChange = function(e) {
                t('' == e ? null : parseFloat(e));
              };
            }),
            (t.prototype.registerOnTouched = function(t) {
              this.onTouched = t;
            }),
            (t.prototype.setDisabledState = function(t) {
              this._renderer.setProperty(this._elementRef.nativeElement, 'disabled', t);
            }),
            t
          );
        })(),
        (function() {
          function t(t, e) {
            (this._renderer = t),
              (this._elementRef = e),
              (this.onChange = function(t) {}),
              (this.onTouched = function() {});
          }
          return (
            (t.prototype.writeValue = function(t) {
              this._renderer.setProperty(
                this._elementRef.nativeElement,
                'value',
                null == t ? '' : t,
              );
            }),
            (t.prototype.registerOnChange = function(t) {
              this.onChange = function(e) {
                t('' == e ? null : parseFloat(e));
              };
            }),
            (t.prototype.registerOnTouched = function(t) {
              this.onTouched = t;
            }),
            (t.prototype.setDisabledState = function(t) {
              this._renderer.setProperty(this._elementRef.nativeElement, 'disabled', t);
            }),
            t
          );
        })(),
        (function() {
          function t(t, e) {
            (this._renderer = t),
              (this._elementRef = e),
              (this._optionMap = new Map()),
              (this._idCounter = 0),
              (this.onChange = function(t) {}),
              (this.onTouched = function() {}),
              (this._compareWith = Be);
          }
          return (
            Object.defineProperty(t.prototype, 'compareWith', {
              set: function(t) {
                if ('function' != typeof t)
                  throw new Error(
                    'compareWith must be a function, but received ' + JSON.stringify(t),
                  );
                this._compareWith = t;
              },
              enumerable: !0,
              configurable: !0,
            }),
            (t.prototype.writeValue = function(t) {
              this.value = t;
              var e = this._getOptionId(t);
              null == e &&
                this._renderer.setProperty(this._elementRef.nativeElement, 'selectedIndex', -1);
              var n = (function(t, e) {
                return null == t
                  ? '' + e
                  : (e && 'object' == typeof e && (e = 'Object'), (t + ': ' + e).slice(0, 50));
              })(e, t);
              this._renderer.setProperty(this._elementRef.nativeElement, 'value', n);
            }),
            (t.prototype.registerOnChange = function(t) {
              var e = this;
              this.onChange = function(n) {
                (e.value = e._getOptionValue(n)), t(e.value);
              };
            }),
            (t.prototype.registerOnTouched = function(t) {
              this.onTouched = t;
            }),
            (t.prototype.setDisabledState = function(t) {
              this._renderer.setProperty(this._elementRef.nativeElement, 'disabled', t);
            }),
            (t.prototype._registerOption = function() {
              return (this._idCounter++).toString();
            }),
            (t.prototype._getOptionId = function(t) {
              for (var e = 0, n = Array.from(this._optionMap.keys()); e < n.length; e++) {
                var r = n[e];
                if (this._compareWith(this._optionMap.get(r), t)) return r;
              }
              return null;
            }),
            (t.prototype._getOptionValue = function(t) {
              var e = (function(t) {
                return t.split(':')[0];
              })(t);
              return this._optionMap.has(e) ? this._optionMap.get(e) : t;
            }),
            t
          );
        })(),
        (function() {
          function t(t, e) {
            (this._renderer = t),
              (this._elementRef = e),
              (this._optionMap = new Map()),
              (this._idCounter = 0),
              (this.onChange = function(t) {}),
              (this.onTouched = function() {}),
              (this._compareWith = Be);
          }
          return (
            Object.defineProperty(t.prototype, 'compareWith', {
              set: function(t) {
                if ('function' != typeof t)
                  throw new Error(
                    'compareWith must be a function, but received ' + JSON.stringify(t),
                  );
                this._compareWith = t;
              },
              enumerable: !0,
              configurable: !0,
            }),
            (t.prototype.writeValue = function(t) {
              var e,
                n = this;
              if (((this.value = t), Array.isArray(t))) {
                var r = t.map(function(t) {
                  return n._getOptionId(t);
                });
                e = function(t, e) {
                  t._setSelected(r.indexOf(e.toString()) > -1);
                };
              } else
                e = function(t, e) {
                  t._setSelected(!1);
                };
              this._optionMap.forEach(e);
            }),
            (t.prototype.registerOnChange = function(t) {
              var e = this;
              this.onChange = function(n) {
                var r = [];
                if (n.hasOwnProperty('selectedOptions'))
                  for (var o = n.selectedOptions, i = 0; i < o.length; i++) {
                    var s = o.item(i),
                      a = e._getOptionValue(s.value);
                    r.push(a);
                  }
                else
                  for (o = n.options, i = 0; i < o.length; i++) {
                    if ((s = o.item(i)).selected) {
                      a = e._getOptionValue(s.value);
                      r.push(a);
                    }
                  }
                (e.value = r), t(r);
              };
            }),
            (t.prototype.registerOnTouched = function(t) {
              this.onTouched = t;
            }),
            (t.prototype.setDisabledState = function(t) {
              this._renderer.setProperty(this._elementRef.nativeElement, 'disabled', t);
            }),
            (t.prototype._registerOption = function(t) {
              var e = (this._idCounter++).toString();
              return this._optionMap.set(e, t), e;
            }),
            (t.prototype._getOptionId = function(t) {
              for (var e = 0, n = Array.from(this._optionMap.keys()); e < n.length; e++) {
                var r = n[e];
                if (this._compareWith(this._optionMap.get(r)._value, t)) return r;
              }
              return null;
            }),
            (t.prototype._getOptionValue = function(t) {
              var e = (function(t) {
                return t.split(':')[0];
              })(t);
              return this._optionMap.has(e) ? this._optionMap.get(e)._value : t;
            }),
            t
          );
        })(),
        Cl,
      ];
      function Ml(t) {
        var e = Ll(t) ? t.validators : t;
        return Array.isArray(e) ? Dl(e) : e || null;
      }
      function Vl(t, e) {
        var n = Ll(e) ? e.asyncValidators : t;
        return Array.isArray(n) ? Fl(n) : n || null;
      }
      function Ll(t) {
        return null != t && !Array.isArray(t) && 'object' == typeof t;
      }
      var Ul = (function() {
          function t(t, e) {
            (this.validator = t),
              (this.asyncValidator = e),
              (this._onCollectionChange = function() {}),
              (this.pristine = !0),
              (this.touched = !1),
              (this._onDisabledChange = []);
          }
          return (
            Object.defineProperty(t.prototype, 'parent', {
              get: function() {
                return this._parent;
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, 'valid', {
              get: function() {
                return 'VALID' === this.status;
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, 'invalid', {
              get: function() {
                return 'INVALID' === this.status;
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, 'pending', {
              get: function() {
                return 'PENDING' == this.status;
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, 'disabled', {
              get: function() {
                return 'DISABLED' === this.status;
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, 'enabled', {
              get: function() {
                return 'DISABLED' !== this.status;
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, 'dirty', {
              get: function() {
                return !this.pristine;
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, 'untouched', {
              get: function() {
                return !this.touched;
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, 'updateOn', {
              get: function() {
                return this._updateOn
                  ? this._updateOn
                  : this.parent
                  ? this.parent.updateOn
                  : 'change';
              },
              enumerable: !0,
              configurable: !0,
            }),
            (t.prototype.setValidators = function(t) {
              this.validator = Ml(t);
            }),
            (t.prototype.setAsyncValidators = function(t) {
              this.asyncValidator = Vl(t);
            }),
            (t.prototype.clearValidators = function() {
              this.validator = null;
            }),
            (t.prototype.clearAsyncValidators = function() {
              this.asyncValidator = null;
            }),
            (t.prototype.markAsTouched = function(t) {
              void 0 === t && (t = {}),
                (this.touched = !0),
                this._parent && !t.onlySelf && this._parent.markAsTouched(t);
            }),
            (t.prototype.markAllAsTouched = function() {
              this.markAsTouched({ onlySelf: !0 }),
                this._forEachChild(function(t) {
                  return t.markAllAsTouched();
                });
            }),
            (t.prototype.markAsUntouched = function(t) {
              void 0 === t && (t = {}),
                (this.touched = !1),
                (this._pendingTouched = !1),
                this._forEachChild(function(t) {
                  t.markAsUntouched({ onlySelf: !0 });
                }),
                this._parent && !t.onlySelf && this._parent._updateTouched(t);
            }),
            (t.prototype.markAsDirty = function(t) {
              void 0 === t && (t = {}),
                (this.pristine = !1),
                this._parent && !t.onlySelf && this._parent.markAsDirty(t);
            }),
            (t.prototype.markAsPristine = function(t) {
              void 0 === t && (t = {}),
                (this.pristine = !0),
                (this._pendingDirty = !1),
                this._forEachChild(function(t) {
                  t.markAsPristine({ onlySelf: !0 });
                }),
                this._parent && !t.onlySelf && this._parent._updatePristine(t);
            }),
            (t.prototype.markAsPending = function(t) {
              void 0 === t && (t = {}),
                (this.status = 'PENDING'),
                !1 !== t.emitEvent && this.statusChanges.emit(this.status),
                this._parent && !t.onlySelf && this._parent.markAsPending(t);
            }),
            (t.prototype.disable = function(t) {
              void 0 === t && (t = {});
              var e = this._parentMarkedDirty(t.onlySelf);
              (this.status = 'DISABLED'),
                (this.errors = null),
                this._forEachChild(function(e) {
                  e.disable(Object.assign({}, t, { onlySelf: !0 }));
                }),
                this._updateValue(),
                !1 !== t.emitEvent &&
                  (this.valueChanges.emit(this.value), this.statusChanges.emit(this.status)),
                this._updateAncestors(Object.assign({}, t, { skipPristineCheck: e })),
                this._onDisabledChange.forEach(function(t) {
                  return t(!0);
                });
            }),
            (t.prototype.enable = function(t) {
              void 0 === t && (t = {});
              var e = this._parentMarkedDirty(t.onlySelf);
              (this.status = 'VALID'),
                this._forEachChild(function(e) {
                  e.enable(Object.assign({}, t, { onlySelf: !0 }));
                }),
                this.updateValueAndValidity({ onlySelf: !0, emitEvent: t.emitEvent }),
                this._updateAncestors(Object.assign({}, t, { skipPristineCheck: e })),
                this._onDisabledChange.forEach(function(t) {
                  return t(!1);
                });
            }),
            (t.prototype._updateAncestors = function(t) {
              this._parent &&
                !t.onlySelf &&
                (this._parent.updateValueAndValidity(t),
                t.skipPristineCheck || this._parent._updatePristine(),
                this._parent._updateTouched());
            }),
            (t.prototype.setParent = function(t) {
              this._parent = t;
            }),
            (t.prototype.updateValueAndValidity = function(t) {
              void 0 === t && (t = {}),
                this._setInitialStatus(),
                this._updateValue(),
                this.enabled &&
                  (this._cancelExistingSubscription(),
                  (this.errors = this._runValidator()),
                  (this.status = this._calculateStatus()),
                  ('VALID' !== this.status && 'PENDING' !== this.status) ||
                    this._runAsyncValidator(t.emitEvent)),
                !1 !== t.emitEvent &&
                  (this.valueChanges.emit(this.value), this.statusChanges.emit(this.status)),
                this._parent && !t.onlySelf && this._parent.updateValueAndValidity(t);
            }),
            (t.prototype._updateTreeValidity = function(t) {
              void 0 === t && (t = { emitEvent: !0 }),
                this._forEachChild(function(e) {
                  return e._updateTreeValidity(t);
                }),
                this.updateValueAndValidity({ onlySelf: !0, emitEvent: t.emitEvent });
            }),
            (t.prototype._setInitialStatus = function() {
              this.status = this._allControlsDisabled() ? 'DISABLED' : 'VALID';
            }),
            (t.prototype._runValidator = function() {
              return this.validator ? this.validator(this) : null;
            }),
            (t.prototype._runAsyncValidator = function(t) {
              var e = this;
              if (this.asyncValidator) {
                this.status = 'PENDING';
                var n = ml(this.asyncValidator(this));
                this._asyncValidationSubscription = n.subscribe(function(n) {
                  return e.setErrors(n, { emitEvent: t });
                });
              }
            }),
            (t.prototype._cancelExistingSubscription = function() {
              this._asyncValidationSubscription && this._asyncValidationSubscription.unsubscribe();
            }),
            (t.prototype.setErrors = function(t, e) {
              void 0 === e && (e = {}),
                (this.errors = t),
                this._updateControlsErrors(!1 !== e.emitEvent);
            }),
            (t.prototype.get = function(t) {
              return (function(t, e, n) {
                return null == e
                  ? null
                  : (e instanceof Array || (e = e.split('.')),
                    e instanceof Array && 0 === e.length
                      ? null
                      : e.reduce(function(t, e) {
                          return t instanceof Bl
                            ? t.controls.hasOwnProperty(e)
                              ? t.controls[e]
                              : null
                            : (t instanceof zl && t.at(e)) || null;
                        }, t));
              })(this, t);
            }),
            (t.prototype.getError = function(t, e) {
              var n = e ? this.get(e) : this;
              return n && n.errors ? n.errors[t] : null;
            }),
            (t.prototype.hasError = function(t, e) {
              return !!this.getError(t, e);
            }),
            Object.defineProperty(t.prototype, 'root', {
              get: function() {
                for (var t = this; t._parent; ) t = t._parent;
                return t;
              },
              enumerable: !0,
              configurable: !0,
            }),
            (t.prototype._updateControlsErrors = function(t) {
              (this.status = this._calculateStatus()),
                t && this.statusChanges.emit(this.status),
                this._parent && this._parent._updateControlsErrors(t);
            }),
            (t.prototype._initObservables = function() {
              (this.valueChanges = new ko()), (this.statusChanges = new ko());
            }),
            (t.prototype._calculateStatus = function() {
              return this._allControlsDisabled()
                ? 'DISABLED'
                : this.errors
                ? 'INVALID'
                : this._anyControlsHaveStatus('PENDING')
                ? 'PENDING'
                : this._anyControlsHaveStatus('INVALID')
                ? 'INVALID'
                : 'VALID';
            }),
            (t.prototype._anyControlsHaveStatus = function(t) {
              return this._anyControls(function(e) {
                return e.status === t;
              });
            }),
            (t.prototype._anyControlsDirty = function() {
              return this._anyControls(function(t) {
                return t.dirty;
              });
            }),
            (t.prototype._anyControlsTouched = function() {
              return this._anyControls(function(t) {
                return t.touched;
              });
            }),
            (t.prototype._updatePristine = function(t) {
              void 0 === t && (t = {}),
                (this.pristine = !this._anyControlsDirty()),
                this._parent && !t.onlySelf && this._parent._updatePristine(t);
            }),
            (t.prototype._updateTouched = function(t) {
              void 0 === t && (t = {}),
                (this.touched = this._anyControlsTouched()),
                this._parent && !t.onlySelf && this._parent._updateTouched(t);
            }),
            (t.prototype._isBoxedValue = function(t) {
              return (
                'object' == typeof t &&
                null !== t &&
                2 === Object.keys(t).length &&
                'value' in t &&
                'disabled' in t
              );
            }),
            (t.prototype._registerOnCollectionChange = function(t) {
              this._onCollectionChange = t;
            }),
            (t.prototype._setUpdateStrategy = function(t) {
              Ll(t) && null != t.updateOn && (this._updateOn = t.updateOn);
            }),
            (t.prototype._parentMarkedDirty = function(t) {
              return !t && this._parent && this._parent.dirty && !this._parent._anyControlsDirty();
            }),
            t
          );
        })(),
        Hl = (function(t) {
          function e(e, n, r) {
            void 0 === e && (e = null);
            var o = this;
            return (
              ((o = t.call(this, Ml(n), Vl(r, n)) || this)._onChange = []),
              o._applyFormState(e),
              o._setUpdateStrategy(n),
              o.updateValueAndValidity({ onlySelf: !0, emitEvent: !1 }),
              o._initObservables(),
              o
            );
          }
          return (
            __extends(e, t),
            (e.prototype.setValue = function(t, e) {
              var n = this;
              void 0 === e && (e = {}),
                (this.value = this._pendingValue = t),
                this._onChange.length &&
                  !1 !== e.emitModelToViewChange &&
                  this._onChange.forEach(function(t) {
                    return t(n.value, !1 !== e.emitViewToModelChange);
                  }),
                this.updateValueAndValidity(e);
            }),
            (e.prototype.patchValue = function(t, e) {
              void 0 === e && (e = {}), this.setValue(t, e);
            }),
            (e.prototype.reset = function(t, e) {
              void 0 === t && (t = null),
                void 0 === e && (e = {}),
                this._applyFormState(t),
                this.markAsPristine(e),
                this.markAsUntouched(e),
                this.setValue(this.value, e),
                (this._pendingChange = !1);
            }),
            (e.prototype._updateValue = function() {}),
            (e.prototype._anyControls = function(t) {
              return !1;
            }),
            (e.prototype._allControlsDisabled = function() {
              return this.disabled;
            }),
            (e.prototype.registerOnChange = function(t) {
              this._onChange.push(t);
            }),
            (e.prototype._clearChangeFns = function() {
              (this._onChange = []),
                (this._onDisabledChange = []),
                (this._onCollectionChange = function() {});
            }),
            (e.prototype.registerOnDisabledChange = function(t) {
              this._onDisabledChange.push(t);
            }),
            (e.prototype._forEachChild = function(t) {}),
            (e.prototype._syncPendingControls = function() {
              return !(
                'submit' !== this.updateOn ||
                (this._pendingDirty && this.markAsDirty(),
                this._pendingTouched && this.markAsTouched(),
                !this._pendingChange) ||
                (this.setValue(this._pendingValue, { onlySelf: !0, emitModelToViewChange: !1 }), 0)
              );
            }),
            (e.prototype._applyFormState = function(t) {
              this._isBoxedValue(t)
                ? ((this.value = this._pendingValue = t.value),
                  t.disabled
                    ? this.disable({ onlySelf: !0, emitEvent: !1 })
                    : this.enable({ onlySelf: !0, emitEvent: !1 }))
                : (this.value = this._pendingValue = t);
            }),
            e
          );
        })(Ul),
        Bl = (function(t) {
          function e(e, n, r) {
            var o = this;
            return (
              ((o = t.call(this, Ml(n), Vl(r, n)) || this).controls = e),
              o._initObservables(),
              o._setUpdateStrategy(n),
              o._setUpControls(),
              o.updateValueAndValidity({ onlySelf: !0, emitEvent: !1 }),
              o
            );
          }
          return (
            __extends(e, t),
            (e.prototype.registerControl = function(t, e) {
              return this.controls[t]
                ? this.controls[t]
                : ((this.controls[t] = e),
                  e.setParent(this),
                  e._registerOnCollectionChange(this._onCollectionChange),
                  e);
            }),
            (e.prototype.addControl = function(t, e) {
              this.registerControl(t, e), this.updateValueAndValidity(), this._onCollectionChange();
            }),
            (e.prototype.removeControl = function(t) {
              this.controls[t] && this.controls[t]._registerOnCollectionChange(function() {}),
                delete this.controls[t],
                this.updateValueAndValidity(),
                this._onCollectionChange();
            }),
            (e.prototype.setControl = function(t, e) {
              this.controls[t] && this.controls[t]._registerOnCollectionChange(function() {}),
                delete this.controls[t],
                e && this.registerControl(t, e),
                this.updateValueAndValidity(),
                this._onCollectionChange();
            }),
            (e.prototype.contains = function(t) {
              return this.controls.hasOwnProperty(t) && this.controls[t].enabled;
            }),
            (e.prototype.setValue = function(t, e) {
              var n = this;
              void 0 === e && (e = {}),
                this._checkAllValuesPresent(t),
                Object.keys(t).forEach(function(r) {
                  n._throwIfControlMissing(r),
                    n.controls[r].setValue(t[r], { onlySelf: !0, emitEvent: e.emitEvent });
                }),
                this.updateValueAndValidity(e);
            }),
            (e.prototype.patchValue = function(t, e) {
              var n = this;
              void 0 === e && (e = {}),
                Object.keys(t).forEach(function(r) {
                  n.controls[r] &&
                    n.controls[r].patchValue(t[r], { onlySelf: !0, emitEvent: e.emitEvent });
                }),
                this.updateValueAndValidity(e);
            }),
            (e.prototype.reset = function(t, e) {
              void 0 === t && (t = {}),
                void 0 === e && (e = {}),
                this._forEachChild(function(n, r) {
                  n.reset(t[r], { onlySelf: !0, emitEvent: e.emitEvent });
                }),
                this._updatePristine(e),
                this._updateTouched(e),
                this.updateValueAndValidity(e);
            }),
            (e.prototype.getRawValue = function() {
              return this._reduceChildren({}, function(t, e, n) {
                return (t[n] = e instanceof Hl ? e.value : e.getRawValue()), t;
              });
            }),
            (e.prototype._syncPendingControls = function() {
              var t = this._reduceChildren(!1, function(t, e) {
                return !!e._syncPendingControls() || t;
              });
              return t && this.updateValueAndValidity({ onlySelf: !0 }), t;
            }),
            (e.prototype._throwIfControlMissing = function(t) {
              if (!Object.keys(this.controls).length)
                throw new Error(
                  "\n        There are no form controls registered with this group yet.  If you're using ngModel,\n        you may want to check next tick (e.g. use setTimeout).\n      ",
                );
              if (!this.controls[t])
                throw new Error('Cannot find form control with name: ' + t + '.');
            }),
            (e.prototype._forEachChild = function(t) {
              var e = this;
              Object.keys(this.controls).forEach(function(n) {
                return t(e.controls[n], n);
              });
            }),
            (e.prototype._setUpControls = function() {
              var t = this;
              this._forEachChild(function(e) {
                e.setParent(t), e._registerOnCollectionChange(t._onCollectionChange);
              });
            }),
            (e.prototype._updateValue = function() {
              this.value = this._reduceValue();
            }),
            (e.prototype._anyControls = function(t) {
              var e = this,
                n = !1;
              return (
                this._forEachChild(function(r, o) {
                  n = n || (e.contains(o) && t(r));
                }),
                n
              );
            }),
            (e.prototype._reduceValue = function() {
              var t = this;
              return this._reduceChildren({}, function(e, n, r) {
                return (n.enabled || t.disabled) && (e[r] = n.value), e;
              });
            }),
            (e.prototype._reduceChildren = function(t, e) {
              var n = t;
              return (
                this._forEachChild(function(t, r) {
                  n = e(n, t, r);
                }),
                n
              );
            }),
            (e.prototype._allControlsDisabled = function() {
              for (var t = 0, e = Object.keys(this.controls); t < e.length; t++) {
                var n = e[t];
                if (this.controls[n].enabled) return !1;
              }
              return Object.keys(this.controls).length > 0 || this.disabled;
            }),
            (e.prototype._checkAllValuesPresent = function(t) {
              this._forEachChild(function(e, n) {
                if (void 0 === t[n])
                  throw new Error("Must supply a value for form control with name: '" + n + "'.");
              });
            }),
            e
          );
        })(Ul),
        zl = (function(t) {
          function e(e, n, r) {
            var o = this;
            return (
              ((o = t.call(this, Ml(n), Vl(r, n)) || this).controls = e),
              o._initObservables(),
              o._setUpdateStrategy(n),
              o._setUpControls(),
              o.updateValueAndValidity({ onlySelf: !0, emitEvent: !1 }),
              o
            );
          }
          return (
            __extends(e, t),
            (e.prototype.at = function(t) {
              return this.controls[t];
            }),
            (e.prototype.push = function(t) {
              this.controls.push(t),
                this._registerControl(t),
                this.updateValueAndValidity(),
                this._onCollectionChange();
            }),
            (e.prototype.insert = function(t, e) {
              this.controls.splice(t, 0, e),
                this._registerControl(e),
                this.updateValueAndValidity();
            }),
            (e.prototype.removeAt = function(t) {
              this.controls[t] && this.controls[t]._registerOnCollectionChange(function() {}),
                this.controls.splice(t, 1),
                this.updateValueAndValidity();
            }),
            (e.prototype.setControl = function(t, e) {
              this.controls[t] && this.controls[t]._registerOnCollectionChange(function() {}),
                this.controls.splice(t, 1),
                e && (this.controls.splice(t, 0, e), this._registerControl(e)),
                this.updateValueAndValidity(),
                this._onCollectionChange();
            }),
            Object.defineProperty(e.prototype, 'length', {
              get: function() {
                return this.controls.length;
              },
              enumerable: !0,
              configurable: !0,
            }),
            (e.prototype.setValue = function(t, e) {
              var n = this;
              void 0 === e && (e = {}),
                this._checkAllValuesPresent(t),
                t.forEach(function(t, r) {
                  n._throwIfControlMissing(r),
                    n.at(r).setValue(t, { onlySelf: !0, emitEvent: e.emitEvent });
                }),
                this.updateValueAndValidity(e);
            }),
            (e.prototype.patchValue = function(t, e) {
              var n = this;
              void 0 === e && (e = {}),
                t.forEach(function(t, r) {
                  n.at(r) && n.at(r).patchValue(t, { onlySelf: !0, emitEvent: e.emitEvent });
                }),
                this.updateValueAndValidity(e);
            }),
            (e.prototype.reset = function(t, e) {
              void 0 === t && (t = []),
                void 0 === e && (e = {}),
                this._forEachChild(function(n, r) {
                  n.reset(t[r], { onlySelf: !0, emitEvent: e.emitEvent });
                }),
                this._updatePristine(e),
                this._updateTouched(e),
                this.updateValueAndValidity(e);
            }),
            (e.prototype.getRawValue = function() {
              return this.controls.map(function(t) {
                return t instanceof Hl ? t.value : t.getRawValue();
              });
            }),
            (e.prototype.clear = function() {
              this.controls.length < 1 ||
                (this._forEachChild(function(t) {
                  return t._registerOnCollectionChange(function() {});
                }),
                this.controls.splice(0),
                this.updateValueAndValidity());
            }),
            (e.prototype._syncPendingControls = function() {
              var t = this.controls.reduce(function(t, e) {
                return !!e._syncPendingControls() || t;
              }, !1);
              return t && this.updateValueAndValidity({ onlySelf: !0 }), t;
            }),
            (e.prototype._throwIfControlMissing = function(t) {
              if (!this.controls.length)
                throw new Error(
                  "\n        There are no form controls registered with this array yet.  If you're using ngModel,\n        you may want to check next tick (e.g. use setTimeout).\n      ",
                );
              if (!this.at(t)) throw new Error('Cannot find form control at index ' + t);
            }),
            (e.prototype._forEachChild = function(t) {
              this.controls.forEach(function(e, n) {
                t(e, n);
              });
            }),
            (e.prototype._updateValue = function() {
              var t = this;
              this.value = this.controls
                .filter(function(e) {
                  return e.enabled || t.disabled;
                })
                .map(function(t) {
                  return t.value;
                });
            }),
            (e.prototype._anyControls = function(t) {
              return this.controls.some(function(e) {
                return e.enabled && t(e);
              });
            }),
            (e.prototype._setUpControls = function() {
              var t = this;
              this._forEachChild(function(e) {
                return t._registerControl(e);
              });
            }),
            (e.prototype._checkAllValuesPresent = function(t) {
              this._forEachChild(function(e, n) {
                if (void 0 === t[n])
                  throw new Error('Must supply a value for form control at index: ' + n + '.');
              });
            }),
            (e.prototype._allControlsDisabled = function() {
              for (var t = 0, e = this.controls; t < e.length; t++) {
                if (e[t].enabled) return !1;
              }
              return this.controls.length > 0 || this.disabled;
            }),
            (e.prototype._registerControl = function(t) {
              t.setParent(this), t._registerOnCollectionChange(this._onCollectionChange);
            }),
            e
          );
        })(Ul),
        ql = (function(t) {
          function e() {
            return (null !== t && t.apply(this, arguments)) || this;
          }
          return (
            __extends(e, t),
            (e.prototype.ngOnInit = function() {
              this._checkParentType(), this.formDirective.addFormGroup(this);
            }),
            (e.prototype.ngOnDestroy = function() {
              this.formDirective && this.formDirective.removeFormGroup(this);
            }),
            Object.defineProperty(e.prototype, 'control', {
              get: function() {
                return this.formDirective.getFormGroup(this);
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, 'path', {
              get: function() {
                return Ol(this.name, this._parent);
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, 'formDirective', {
              get: function() {
                return this._parent ? this._parent.formDirective : null;
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, 'validator', {
              get: function() {
                return Dl(this._validators);
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, 'asyncValidator', {
              get: function() {
                return Fl(this._asyncValidators);
              },
              enumerable: !0,
              configurable: !0,
            }),
            (e.prototype._checkParentType = function() {}),
            e
          );
        })(al),
        Gl = function() {},
        Wl = new Tt('NgModelWithFormControlWarning'),
        Ql = (function(t) {
          function e(e, n) {
            var r = this;
            return (
              ((r = t.call(this) || this)._validators = e),
              (r._asyncValidators = n),
              (r.submitted = !1),
              (r.directives = []),
              (r.form = null),
              (r.ngSubmit = new ko()),
              r
            );
          }
          return (
            __extends(e, t),
            (e.prototype.ngOnChanges = function(t) {
              this._checkFormPresent(),
                t.hasOwnProperty('form') &&
                  (this._updateValidators(), this._updateDomValue(), this._updateRegistrations());
            }),
            Object.defineProperty(e.prototype, 'formDirective', {
              get: function() {
                return this;
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, 'control', {
              get: function() {
                return this.form;
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, 'path', {
              get: function() {
                return [];
              },
              enumerable: !0,
              configurable: !0,
            }),
            (e.prototype.addControl = function(t) {
              var e = this.form.get(t.path);
              return (
                kl(e, t), e.updateValueAndValidity({ emitEvent: !1 }), this.directives.push(t), e
              );
            }),
            (e.prototype.getControl = function(t) {
              return this.form.get(t.path);
            }),
            (e.prototype.removeControl = function(t) {
              var e, n, r;
              (e = this.directives), (n = t), (r = e.indexOf(n)) > -1 && e.splice(r, 1);
            }),
            (e.prototype.addFormGroup = function(t) {
              var e = this.form.get(t.path);
              Il(e, t), e.updateValueAndValidity({ emitEvent: !1 });
            }),
            (e.prototype.removeFormGroup = function(t) {}),
            (e.prototype.getFormGroup = function(t) {
              return this.form.get(t.path);
            }),
            (e.prototype.addFormArray = function(t) {
              var e = this.form.get(t.path);
              Il(e, t), e.updateValueAndValidity({ emitEvent: !1 });
            }),
            (e.prototype.removeFormArray = function(t) {}),
            (e.prototype.getFormArray = function(t) {
              return this.form.get(t.path);
            }),
            (e.prototype.updateModel = function(t, e) {
              this.form.get(t.path).setValue(e);
            }),
            (e.prototype.onSubmit = function(t) {
              return (
                (this.submitted = !0),
                (e = this.directives),
                this.form._syncPendingControls(),
                e.forEach(function(t) {
                  var e = t.control;
                  'submit' === e.updateOn &&
                    e._pendingChange &&
                    (t.viewToModelUpdate(e._pendingValue), (e._pendingChange = !1));
                }),
                this.ngSubmit.emit(t),
                !1
              );
              var e;
            }),
            (e.prototype.onReset = function() {
              this.resetForm();
            }),
            (e.prototype.resetForm = function(t) {
              this.form.reset(t), (this.submitted = !1);
            }),
            (e.prototype._updateDomValue = function() {
              var t = this;
              this.directives.forEach(function(e) {
                var n = t.form.get(e.path);
                e.control !== n &&
                  ((function(t, e) {
                    e.valueAccessor.registerOnChange(function() {
                      return Nl(e);
                    }),
                      e.valueAccessor.registerOnTouched(function() {
                        return Nl(e);
                      }),
                      e._rawValidators.forEach(function(t) {
                        t.registerOnValidatorChange && t.registerOnValidatorChange(null);
                      }),
                      e._rawAsyncValidators.forEach(function(t) {
                        t.registerOnValidatorChange && t.registerOnValidatorChange(null);
                      }),
                      t && t._clearChangeFns();
                  })(e.control, e),
                  n && kl(n, e),
                  (e.control = n));
              }),
                this.form._updateTreeValidity({ emitEvent: !1 });
            }),
            (e.prototype._updateRegistrations = function() {
              var t = this;
              this.form._registerOnCollectionChange(function() {
                return t._updateDomValue();
              }),
                this._oldForm && this._oldForm._registerOnCollectionChange(function() {}),
                (this._oldForm = this.form);
            }),
            (e.prototype._updateValidators = function() {
              var t = Dl(this._validators);
              this.form.validator = yl.compose([this.form.validator, t]);
              var e = Fl(this._asyncValidators);
              this.form.asyncValidator = yl.composeAsync([this.form.asyncValidator, e]);
            }),
            (e.prototype._checkFormPresent = function() {
              this.form || Pl.missingFormException();
            }),
            e
          );
        })(al),
        Kl = (function(t) {
          function e(e, n, r) {
            var o = this;
            return (
              ((o = t.call(this) || this)._parent = e),
              (o._validators = n),
              (o._asyncValidators = r),
              o
            );
          }
          return (
            __extends(e, t),
            (e.prototype._checkParentType = function() {
              $l(this._parent) && Pl.groupParentException();
            }),
            e
          );
        })(ql),
        Zl = (function(t) {
          function e(e, n, r) {
            var o = this;
            return (
              ((o = t.call(this) || this)._parent = e),
              (o._validators = n),
              (o._asyncValidators = r),
              o
            );
          }
          return (
            __extends(e, t),
            (e.prototype.ngOnInit = function() {
              this._checkParentType(), this.formDirective.addFormArray(this);
            }),
            (e.prototype.ngOnDestroy = function() {
              this.formDirective && this.formDirective.removeFormArray(this);
            }),
            Object.defineProperty(e.prototype, 'control', {
              get: function() {
                return this.formDirective.getFormArray(this);
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, 'formDirective', {
              get: function() {
                return this._parent ? this._parent.formDirective : null;
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, 'path', {
              get: function() {
                return Ol(this.name, this._parent);
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, 'validator', {
              get: function() {
                return Dl(this._validators);
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, 'asyncValidator', {
              get: function() {
                return Fl(this._asyncValidators);
              },
              enumerable: !0,
              configurable: !0,
            }),
            (e.prototype._checkParentType = function() {
              $l(this._parent) && Pl.arrayParentException();
            }),
            e
          );
        })(al);
      function $l(t) {
        return !(t instanceof Kl || t instanceof Ql || t instanceof Zl);
      }
      var Jl,
        Yl =
          (((Jl = (function(t) {
            function e(e, n, r, o, i) {
              var s = this;
              return (
                ((s = t.call(this) || this)._ngModelWarningConfig = i),
                (s._added = !1),
                (s.update = new ko()),
                (s._ngModelWarningSent = !1),
                (s._parent = e),
                (s._rawValidators = n || []),
                (s._rawAsyncValidators = r || []),
                (s.valueAccessor = (function(t, e) {
                  if (!e) return null;
                  Array.isArray(e) ||
                    Rl(t, 'Value accessor was not provided as an array for form control with');
                  var n = void 0,
                    r = void 0,
                    o = void 0;
                  return (
                    e.forEach(function(e) {
                      var i;
                      e.constructor === il
                        ? (n = e)
                        : ((i = e),
                          jl.some(function(t) {
                            return i.constructor === t;
                          })
                            ? (r &&
                                Rl(
                                  t,
                                  'More than one built-in value accessor matches form control with',
                                ),
                              (r = e))
                            : (o &&
                                Rl(
                                  t,
                                  'More than one custom value accessor matches form control with',
                                ),
                              (o = e)));
                    }),
                    o || r || n || (Rl(t, 'No valid value accessor for form control with'), null)
                  );
                })(s, o)),
                s
              );
            }
            return (
              __extends(e, t),
              Object.defineProperty(e.prototype, 'isDisabled', {
                set: function(t) {
                  Pl.disabledAttrWarning();
                },
                enumerable: !0,
                configurable: !0,
              }),
              (e.prototype.ngOnChanges = function(t) {
                var n, r;
                this._added || this._setUpControl(),
                  (function(t, e) {
                    if (!t.hasOwnProperty('model')) return !1;
                    var n = t.model;
                    return !!n.isFirstChange() || !Be(e, n.currentValue);
                  })(t, this.viewModel) &&
                    ((n = e),
                    (r = this._ngModelWarningConfig),
                    Xt() &&
                      'never' !== r &&
                      ((((null !== r && 'once' !== r) || n._ngModelWarningSentOnce) &&
                        ('always' !== r || this._ngModelWarningSent)) ||
                        (Pl.ngModelWarning('formControlName'),
                        (n._ngModelWarningSentOnce = !0),
                        (this._ngModelWarningSent = !0))),
                    (this.viewModel = this.model),
                    this.formDirective.updateModel(this, this.model));
              }),
              (e.prototype.ngOnDestroy = function() {
                this.formDirective && this.formDirective.removeControl(this);
              }),
              (e.prototype.viewToModelUpdate = function(t) {
                (this.viewModel = t), this.update.emit(t);
              }),
              Object.defineProperty(e.prototype, 'path', {
                get: function() {
                  return Ol(this.name, this._parent);
                },
                enumerable: !0,
                configurable: !0,
              }),
              Object.defineProperty(e.prototype, 'formDirective', {
                get: function() {
                  return this._parent ? this._parent.formDirective : null;
                },
                enumerable: !0,
                configurable: !0,
              }),
              Object.defineProperty(e.prototype, 'validator', {
                get: function() {
                  return Dl(this._rawValidators);
                },
                enumerable: !0,
                configurable: !0,
              }),
              Object.defineProperty(e.prototype, 'asyncValidator', {
                get: function() {
                  return Fl(this._rawAsyncValidators);
                },
                enumerable: !0,
                configurable: !0,
              }),
              (e.prototype._checkParentType = function() {
                !(this._parent instanceof Kl) && this._parent instanceof ql
                  ? Pl.ngModelGroupException()
                  : this._parent instanceof Kl ||
                    this._parent instanceof Ql ||
                    this._parent instanceof Zl ||
                    Pl.controlParentException();
              }),
              (e.prototype._setUpControl = function() {
                this._checkParentType(),
                  (this.control = this.formDirective.addControl(this)),
                  this.control.disabled &&
                    this.valueAccessor.setDisabledState &&
                    this.valueAccessor.setDisabledState(!0),
                  (this._added = !0);
              }),
              e
            );
          })(ll))._ngModelWarningSentOnce = !1),
          Jl),
        Xl = function() {},
        tc = (function() {
          function t() {}
          return (
            (t.prototype.group = function(t, e) {
              void 0 === e && (e = null);
              var n = this._reduceControls(t),
                r = null,
                o = null,
                i = void 0;
              return (
                null != e &&
                  ((function(t) {
                    return (
                      void 0 !== t.asyncValidators ||
                      void 0 !== t.validators ||
                      void 0 !== t.updateOn
                    );
                  })(e)
                    ? ((r = null != e.validators ? e.validators : null),
                      (o = null != e.asyncValidators ? e.asyncValidators : null),
                      (i = null != e.updateOn ? e.updateOn : void 0))
                    : ((r = null != e.validator ? e.validator : null),
                      (o = null != e.asyncValidator ? e.asyncValidator : null))),
                new Bl(n, { asyncValidators: o, updateOn: i, validators: r })
              );
            }),
            (t.prototype.control = function(t, e, n) {
              return new Hl(t, e, n);
            }),
            (t.prototype.array = function(t, e, n) {
              var r = this,
                o = t.map(function(t) {
                  return r._createControl(t);
                });
              return new zl(o, e, n);
            }),
            (t.prototype._reduceControls = function(t) {
              var e = this,
                n = {};
              return (
                Object.keys(t).forEach(function(r) {
                  n[r] = e._createControl(t[r]);
                }),
                n
              );
            }),
            (t.prototype._createControl = function(t) {
              return t instanceof Hl || t instanceof Bl || t instanceof zl
                ? t
                : Array.isArray(t)
                ? this.control(t[0], t.length > 1 ? t[1] : null, t.length > 2 ? t[2] : null)
                : this.control(t);
            }),
            t
          );
        })(),
        ec = (function() {
          function t() {}
          return (
            (t.withConfig = function(e) {
              return {
                ngModule: t,
                providers: [{ provide: Wl, useValue: e.warnOnNgModelWithFormControl }],
              };
            }),
            t
          );
        })(),
        nc = (function() {
          function t(t, e, n, r) {
            (this.route = t),
              (this.userService = e),
              (this.toastrService = n),
              (this.router = r),
              (this.genders = ['male', 'female']);
          }
          return (
            (t.prototype.ngOnInit = function() {
              var t = this;
              (this.toastrService.overlayContainer = this.toastContainer),
                (this.logInForm = new Bl({
                  username: new Hl(null, yl.required),
                  password: new Hl(null, yl.required),
                })),
                (this.signUpForm = new Bl({
                  userInformation: new Bl({
                    username: new Hl(null, [yl.required, yl.minLength(3), yl.maxLength(20)]),
                    password: new Hl(null, [
                      yl.required,
                      yl.pattern('(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{8,20}'),
                    ]),
                    confirmPassword: new Hl(null, [yl.required]),
                  }),
                  playerInformation: new Bl({
                    gender: new Hl('male'),
                    dateOfBirth: new Hl(null, yl.required),
                    country: new Hl('Ukraine'),
                  }),
                })),
                (this.querySubscription = this.route.queryParams.subscribe(function(e) {
                  t.isSignUpForm = e.form;
                }));
            }),
            (t.prototype.onLogin = function() {
              var t = this;
              this.logInForm.invalid ||
                this.userService.loginUser(this.logInForm.value).subscribe(
                  function(e) {
                    var n = e.token,
                      r = e.user;
                    localStorage.setItem('access_token', n),
                      localStorage.setItem('access_user', JSON.stringify(r)),
                      localStorage.setItem('user_name', r.username),
                      (t.token = n),
                      n &&
                        ((t.currentUser = r),
                        t.userService.setUser(r),
                        t.router.navigate(['/game']));
                  },
                  function() {
                    t.toastrService.error('Username and/or Password incorrect. Try again.', '', {
                      timeOut: 3e3,
                    });
                  },
                );
            }),
            (t.prototype.onSignUp = function() {
              var t = this;
              this.signUpForm.invalid ||
                this.userService.createUser(this.signUpForm.value).subscribe(
                  function(e) {
                    e &&
                      (t.toastrService.warning('You have successfully Signed Up! Please, LogIn'),
                      t.router.navigate(['/login']));
                  },
                  function() {
                    t.signUpForm.patchValue({ userInformation: { username: null } }),
                      t.toastrService.error(
                        'This name is already used. Please, choose another.',
                        '',
                        { timeOut: 3e3 },
                      );
                  },
                );
            }),
            t
          );
        })(),
        rc = function() {},
        oc = function() {
          this.title = 'AwesomeTetrisGame';
        };
      function ic() {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
        var n = t[t.length - 1];
        return A(n) ? (t.pop(), B(t, n)) : Z(t);
      }
      var sc = (function(t) {
          function e(e) {
            var n = this;
            return ((n = t.call(this) || this)._value = e), n;
          }
          return (
            __extends(e, t),
            Object.defineProperty(e.prototype, 'value', {
              get: function() {
                return this.getValue();
              },
              enumerable: !0,
              configurable: !0,
            }),
            (e.prototype._subscribe = function(e) {
              var n = t.prototype._subscribe.call(this, e);
              return n && !n.closed && e.next(this._value), n;
            }),
            (e.prototype.getValue = function() {
              if (this.hasError) throw this.thrownError;
              if (this.closed) throw new T();
              return this._value;
            }),
            (e.prototype.next = function(e) {
              t.prototype.next.call(this, (this._value = e));
            }),
            e
          );
        })(O),
        ac = (function() {
          function t() {
            return (
              Error.call(this),
              (this.message = 'no elements in sequence'),
              (this.name = 'EmptyError'),
              this
            );
          }
          return (t.prototype = Object.create(Error.prototype)), t;
        })(),
        uc = {},
        lc = (function() {
          function t(t) {
            this.resultSelector = t;
          }
          return (
            (t.prototype.call = function(t, e) {
              return e.subscribe(new cc(t, this.resultSelector));
            }),
            t
          );
        })(),
        cc = (function(t) {
          function e(e, n) {
            var r = this;
            return (
              ((r = t.call(this, e) || this).resultSelector = n),
              (r.active = 0),
              (r.values = []),
              (r.observables = []),
              r
            );
          }
          return (
            __extends(e, t),
            (e.prototype._next = function(t) {
              this.values.push(uc), this.observables.push(t);
            }),
            (e.prototype._complete = function() {
              var t = this.observables,
                e = t.length;
              if (0 === e) this.destination.complete();
              else {
                (this.active = e), (this.toRespond = e);
                for (var n = 0; n < e; n++) {
                  var r = t[n];
                  this.add(M(this, r, r, n));
                }
              }
            }),
            (e.prototype.notifyComplete = function(t) {
              0 == (this.active -= 1) && this.destination.complete();
            }),
            (e.prototype.notifyNext = function(t, e, n, r, o) {
              var i = this.values,
                s = this.toRespond ? (i[n] === uc ? --this.toRespond : this.toRespond) : 0;
              (i[n] = e),
                0 === s &&
                  (this.resultSelector
                    ? this._tryResultSelector(i)
                    : this.destination.next(i.slice()));
            }),
            (e.prototype._tryResultSelector = function(t) {
              var e;
              try {
                e = this.resultSelector.apply(this, t);
              } catch (n) {
                return void this.destination.error(n);
              }
              this.destination.next(e);
            }),
            e
          );
        })(V),
        hc = new C(function(t) {
          return t.complete();
        });
      function pc(t) {
        return t
          ? (function(t) {
              return new C(function(e) {
                return t.schedule(function() {
                  return e.complete();
                });
              });
            })(t)
          : hc;
      }
      function fc(t) {
        return new C(function(e) {
          var n;
          try {
            n = t();
          } catch (r) {
            return void e.error(r);
          }
          return (n ? z(n) : pc()).subscribe(e);
        });
      }
      function dc() {
        return K(1);
      }
      function yc(t, e) {
        return function(n) {
          return n.lift(new gc(t, e));
        };
      }
      var gc = (function() {
          function t(t, e) {
            (this.predicate = t), (this.thisArg = e);
          }
          return (
            (t.prototype.call = function(t, e) {
              return e.subscribe(new mc(t, this.predicate, this.thisArg));
            }),
            t
          );
        })(),
        mc = (function(t) {
          function e(e, n, r) {
            var o = this;
            return ((o = t.call(this, e) || this).predicate = n), (o.thisArg = r), (o.count = 0), o;
          }
          return (
            __extends(e, t),
            (e.prototype._next = function(t) {
              var e;
              try {
                e = this.predicate.call(this.thisArg, t, this.count++);
              } catch (n) {
                return void this.destination.error(n);
              }
              e && this.destination.next(t);
            }),
            e
          );
        })(y),
        vc = (function() {
          function t() {
            return (
              Error.call(this),
              (this.message = 'argument out of range'),
              (this.name = 'ArgumentOutOfRangeError'),
              this
            );
          }
          return (t.prototype = Object.create(Error.prototype)), t;
        })();
      function _c(t) {
        return function(e) {
          return 0 === t ? pc() : e.lift(new bc(t));
        };
      }
      var bc = (function() {
          function t(t) {
            if (((this.total = t), this.total < 0)) throw new vc();
          }
          return (
            (t.prototype.call = function(t, e) {
              return e.subscribe(new wc(t, this.total));
            }),
            t
          );
        })(),
        wc = (function(t) {
          function e(e, n) {
            var r = this;
            return (
              ((r = t.call(this, e) || this).total = n), (r.ring = new Array()), (r.count = 0), r
            );
          }
          return (
            __extends(e, t),
            (e.prototype._next = function(t) {
              var e = this.ring,
                n = this.total,
                r = this.count++;
              e.length < n ? e.push(t) : (e[r % n] = t);
            }),
            (e.prototype._complete = function() {
              var t = this.destination,
                e = this.count;
              if (e > 0)
                for (
                  var n = this.count >= this.total ? this.total : this.count, r = this.ring, o = 0;
                  o < n;
                  o++
                ) {
                  var i = e++ % n;
                  t.next(r[i]);
                }
              t.complete();
            }),
            e
          );
        })(y);
      function Cc(t) {
        return (
          void 0 === t && (t = Tc),
          function(e) {
            return e.lift(new Sc(t));
          }
        );
      }
      var Sc = (function() {
          function t(t) {
            this.errorFactory = t;
          }
          return (
            (t.prototype.call = function(t, e) {
              return e.subscribe(new Ec(t, this.errorFactory));
            }),
            t
          );
        })(),
        Ec = (function(t) {
          function e(e, n) {
            var r = this;
            return ((r = t.call(this, e) || this).errorFactory = n), (r.hasValue = !1), r;
          }
          return (
            __extends(e, t),
            (e.prototype._next = function(t) {
              (this.hasValue = !0), this.destination.next(t);
            }),
            (e.prototype._complete = function() {
              if (this.hasValue) return this.destination.complete();
              var t = void 0;
              try {
                t = this.errorFactory();
              } catch (e) {
                t = e;
              }
              this.destination.error(t);
            }),
            e
          );
        })(y);
      function Tc() {
        return new ac();
      }
      function xc(t) {
        return (
          void 0 === t && (t = null),
          function(e) {
            return e.lift(new Pc(t));
          }
        );
      }
      var Pc = (function() {
          function t(t) {
            this.defaultValue = t;
          }
          return (
            (t.prototype.call = function(t, e) {
              return e.subscribe(new Oc(t, this.defaultValue));
            }),
            t
          );
        })(),
        Oc = (function(t) {
          function e(e, n) {
            var r = this;
            return ((r = t.call(this, e) || this).defaultValue = n), (r.isEmpty = !0), r;
          }
          return (
            __extends(e, t),
            (e.prototype._next = function(t) {
              (this.isEmpty = !1), this.destination.next(t);
            }),
            (e.prototype._complete = function() {
              this.isEmpty && this.destination.next(this.defaultValue), this.destination.complete();
            }),
            e
          );
        })(y);
      function kc(t, e) {
        var n = arguments.length >= 2;
        return function(r) {
          return r.pipe(
            t
              ? yc(function(e, n) {
                  return t(e, n, r);
                })
              : Q,
            _c(1),
            n
              ? xc(e)
              : Cc(function() {
                  return new ac();
                }),
          );
        };
      }
      function Ac(t) {
        return function(e) {
          var n = new Ic(t),
            r = e.lift(n);
          return (n.caught = r);
        };
      }
      var Ic = (function() {
          function t(t) {
            this.selector = t;
          }
          return (
            (t.prototype.call = function(t, e) {
              return e.subscribe(new Nc(t, this.selector, this.caught));
            }),
            t
          );
        })(),
        Nc = (function(t) {
          function e(e, n, r) {
            var o = this;
            return ((o = t.call(this, e) || this).selector = n), (o.caught = r), o;
          }
          return (
            __extends(e, t),
            (e.prototype.error = function(e) {
              if (!this.isStopped) {
                var n = void 0;
                try {
                  n = this.selector(e, this.caught);
                } catch (o) {
                  return void t.prototype.error.call(this, o);
                }
                this._unsubscribeAndRecycle();
                var r = new I(this, void 0, void 0);
                this.add(r), M(this, n, void 0, void 0, r);
              }
            }),
            e
          );
        })(V);
      function Rc(t) {
        return function(e) {
          return 0 === t ? pc() : e.lift(new Dc(t));
        };
      }
      var Dc = (function() {
          function t(t) {
            if (((this.total = t), this.total < 0)) throw new vc();
          }
          return (
            (t.prototype.call = function(t, e) {
              return e.subscribe(new Fc(t, this.total));
            }),
            t
          );
        })(),
        Fc = (function(t) {
          function e(e, n) {
            var r = this;
            return ((r = t.call(this, e) || this).total = n), (r.count = 0), r;
          }
          return (
            __extends(e, t),
            (e.prototype._next = function(t) {
              var e = this.total,
                n = ++this.count;
              n <= e &&
                (this.destination.next(t),
                n === e && (this.destination.complete(), this.unsubscribe()));
            }),
            e
          );
        })(y);
      function jc(t, e) {
        var n = arguments.length >= 2;
        return function(r) {
          return r.pipe(
            t
              ? yc(function(e, n) {
                  return t(e, n, r);
                })
              : Q,
            Rc(1),
            n
              ? xc(e)
              : Cc(function() {
                  return new ac();
                }),
          );
        };
      }
      var Mc = (function() {
          function t(t, e, n) {
            (this.predicate = t), (this.thisArg = e), (this.source = n);
          }
          return (
            (t.prototype.call = function(t, e) {
              return e.subscribe(new Vc(t, this.predicate, this.thisArg, this.source));
            }),
            t
          );
        })(),
        Vc = (function(t) {
          function e(e, n, r, o) {
            var i = this;
            return (
              ((i = t.call(this, e) || this).predicate = n),
              (i.thisArg = r),
              (i.source = o),
              (i.index = 0),
              (i.thisArg = r || i),
              i
            );
          }
          return (
            __extends(e, t),
            (e.prototype.notifyComplete = function(t) {
              this.destination.next(t), this.destination.complete();
            }),
            (e.prototype._next = function(t) {
              var e = !1;
              try {
                e = this.predicate.call(this.thisArg, t, this.index++, this.source);
              } catch (n) {
                return void this.destination.error(n);
              }
              e || this.notifyComplete(!1);
            }),
            (e.prototype._complete = function() {
              this.notifyComplete(!0);
            }),
            e
          );
        })(y);
      function Lc(t, e) {
        return 'function' == typeof e
          ? function(n) {
              return n.pipe(
                Lc(function(n, r) {
                  return z(t(n, r)).pipe(
                    L(function(t, o) {
                      return e(n, t, r, o);
                    }),
                  );
                }),
              );
            }
          : function(e) {
              return e.lift(new Uc(t));
            };
      }
      var Uc = (function() {
          function t(t) {
            this.project = t;
          }
          return (
            (t.prototype.call = function(t, e) {
              return e.subscribe(new Hc(t, this.project));
            }),
            t
          );
        })(),
        Hc = (function(t) {
          function e(e, n) {
            var r = this;
            return ((r = t.call(this, e) || this).project = n), (r.index = 0), r;
          }
          return (
            __extends(e, t),
            (e.prototype._next = function(t) {
              var e,
                n = this.index++;
              try {
                e = this.project(t, n);
              } catch (r) {
                return void this.destination.error(r);
              }
              this._innerSub(e, t, n);
            }),
            (e.prototype._innerSub = function(t, e, n) {
              var r = this.innerSubscription;
              r && r.unsubscribe();
              var o = new I(this, void 0, void 0);
              this.destination.add(o), (this.innerSubscription = M(this, t, e, n, o));
            }),
            (e.prototype._complete = function() {
              var e = this.innerSubscription;
              (e && !e.closed) || t.prototype._complete.call(this), this.unsubscribe();
            }),
            (e.prototype._unsubscribe = function() {
              this.innerSubscription = null;
            }),
            (e.prototype.notifyComplete = function(e) {
              this.destination.remove(e),
                (this.innerSubscription = null),
                this.isStopped && t.prototype._complete.call(this);
            }),
            (e.prototype.notifyNext = function(t, e, n, r, o) {
              this.destination.next(e);
            }),
            e
          );
        })(V);
      function Bc() {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
        return dc()(ic.apply(void 0, t));
      }
      function zc(t, e) {
        var n = !1;
        return (
          arguments.length >= 2 && (n = !0),
          function(r) {
            return r.lift(new qc(t, e, n));
          }
        );
      }
      var qc = (function() {
          function t(t, e, n) {
            void 0 === n && (n = !1), (this.accumulator = t), (this.seed = e), (this.hasSeed = n);
          }
          return (
            (t.prototype.call = function(t, e) {
              return e.subscribe(new Gc(t, this.accumulator, this.seed, this.hasSeed));
            }),
            t
          );
        })(),
        Gc = (function(t) {
          function e(e, n, r, o) {
            var i = this;
            return (
              ((i = t.call(this, e) || this).accumulator = n),
              (i._seed = r),
              (i.hasSeed = o),
              (i.index = 0),
              i
            );
          }
          return (
            __extends(e, t),
            Object.defineProperty(e.prototype, 'seed', {
              get: function() {
                return this._seed;
              },
              set: function(t) {
                (this.hasSeed = !0), (this._seed = t);
              },
              enumerable: !0,
              configurable: !0,
            }),
            (e.prototype._next = function(t) {
              if (this.hasSeed) return this._tryNext(t);
              (this.seed = t), this.destination.next(t);
            }),
            (e.prototype._tryNext = function(t) {
              var e,
                n = this.index++;
              try {
                e = this.accumulator(this.seed, t, n);
              } catch (r) {
                this.destination.error(r);
              }
              (this.seed = e), this.destination.next(e);
            }),
            e
          );
        })(y);
      function Wc(t, e) {
        return q(t, e, 1);
      }
      function Qc(t, e, n) {
        return function(r) {
          return r.lift(new Kc(t, e, n));
        };
      }
      var Kc = (function() {
          function t(t, e, n) {
            (this.nextOrObserver = t), (this.error = e), (this.complete = n);
          }
          return (
            (t.prototype.call = function(t, e) {
              return e.subscribe(new Zc(t, this.nextOrObserver, this.error, this.complete));
            }),
            t
          );
        })(),
        Zc = (function(t) {
          function e(e, n, o, i) {
            var s = this;
            return (
              ((s = t.call(this, e) || this)._tapNext = v),
              (s._tapError = v),
              (s._tapComplete = v),
              (s._tapError = o || v),
              (s._tapComplete = i || v),
              r(n)
                ? ((s._context = s), (s._tapNext = n))
                : n &&
                  ((s._context = n),
                  (s._tapNext = n.next || v),
                  (s._tapError = n.error || v),
                  (s._tapComplete = n.complete || v)),
              s
            );
          }
          return (
            __extends(e, t),
            (e.prototype._next = function(t) {
              try {
                this._tapNext.call(this._context, t);
              } catch (e) {
                return void this.destination.error(e);
              }
              this.destination.next(t);
            }),
            (e.prototype._error = function(t) {
              try {
                this._tapError.call(this._context, t);
              } catch (t) {
                return void this.destination.error(t);
              }
              this.destination.error(t);
            }),
            (e.prototype._complete = function() {
              try {
                this._tapComplete.call(this._context);
              } catch (t) {
                return void this.destination.error(t);
              }
              return this.destination.complete();
            }),
            e
          );
        })(y),
        $c = (function() {
          function t(t) {
            this.callback = t;
          }
          return (
            (t.prototype.call = function(t, e) {
              return e.subscribe(new Jc(t, this.callback));
            }),
            t
          );
        })(),
        Jc = (function(t) {
          function e(e, n) {
            var r = this;
            return (r = t.call(this, e) || this).add(new p(n)), r;
          }
          return __extends(e, t), e;
        })(y),
        Yc = function(t, e) {
          (this.id = t), (this.url = e);
        },
        Xc = (function(t) {
          function e(e, n, r, o) {
            void 0 === r && (r = 'imperative'), void 0 === o && (o = null);
            var i = this;
            return (
              ((i = t.call(this, e, n) || this).navigationTrigger = r), (i.restoredState = o), i
            );
          }
          return (
            __extends(e, t),
            (e.prototype.toString = function() {
              return 'NavigationStart(id: ' + this.id + ", url: '" + this.url + "')";
            }),
            e
          );
        })(Yc),
        th = (function(t) {
          function e(e, n, r) {
            var o = this;
            return ((o = t.call(this, e, n) || this).urlAfterRedirects = r), o;
          }
          return (
            __extends(e, t),
            (e.prototype.toString = function() {
              return (
                'NavigationEnd(id: ' +
                this.id +
                ", url: '" +
                this.url +
                "', urlAfterRedirects: '" +
                this.urlAfterRedirects +
                "')"
              );
            }),
            e
          );
        })(Yc),
        eh = (function(t) {
          function e(e, n, r) {
            var o = this;
            return ((o = t.call(this, e, n) || this).reason = r), o;
          }
          return (
            __extends(e, t),
            (e.prototype.toString = function() {
              return 'NavigationCancel(id: ' + this.id + ", url: '" + this.url + "')";
            }),
            e
          );
        })(Yc),
        nh = (function(t) {
          function e(e, n, r) {
            var o = this;
            return ((o = t.call(this, e, n) || this).error = r), o;
          }
          return (
            __extends(e, t),
            (e.prototype.toString = function() {
              return (
                'NavigationError(id: ' +
                this.id +
                ", url: '" +
                this.url +
                "', error: " +
                this.error +
                ')'
              );
            }),
            e
          );
        })(Yc),
        rh = (function(t) {
          function e(e, n, r, o) {
            var i = this;
            return ((i = t.call(this, e, n) || this).urlAfterRedirects = r), (i.state = o), i;
          }
          return (
            __extends(e, t),
            (e.prototype.toString = function() {
              return (
                'RoutesRecognized(id: ' +
                this.id +
                ", url: '" +
                this.url +
                "', urlAfterRedirects: '" +
                this.urlAfterRedirects +
                "', state: " +
                this.state +
                ')'
              );
            }),
            e
          );
        })(Yc),
        oh = (function(t) {
          function e(e, n, r, o) {
            var i = this;
            return ((i = t.call(this, e, n) || this).urlAfterRedirects = r), (i.state = o), i;
          }
          return (
            __extends(e, t),
            (e.prototype.toString = function() {
              return (
                'GuardsCheckStart(id: ' +
                this.id +
                ", url: '" +
                this.url +
                "', urlAfterRedirects: '" +
                this.urlAfterRedirects +
                "', state: " +
                this.state +
                ')'
              );
            }),
            e
          );
        })(Yc),
        ih = (function(t) {
          function e(e, n, r, o, i) {
            var s = this;
            return (
              ((s = t.call(this, e, n) || this).urlAfterRedirects = r),
              (s.state = o),
              (s.shouldActivate = i),
              s
            );
          }
          return (
            __extends(e, t),
            (e.prototype.toString = function() {
              return (
                'GuardsCheckEnd(id: ' +
                this.id +
                ", url: '" +
                this.url +
                "', urlAfterRedirects: '" +
                this.urlAfterRedirects +
                "', state: " +
                this.state +
                ', shouldActivate: ' +
                this.shouldActivate +
                ')'
              );
            }),
            e
          );
        })(Yc),
        sh = (function(t) {
          function e(e, n, r, o) {
            var i = this;
            return ((i = t.call(this, e, n) || this).urlAfterRedirects = r), (i.state = o), i;
          }
          return (
            __extends(e, t),
            (e.prototype.toString = function() {
              return (
                'ResolveStart(id: ' +
                this.id +
                ", url: '" +
                this.url +
                "', urlAfterRedirects: '" +
                this.urlAfterRedirects +
                "', state: " +
                this.state +
                ')'
              );
            }),
            e
          );
        })(Yc),
        ah = (function(t) {
          function e(e, n, r, o) {
            var i = this;
            return ((i = t.call(this, e, n) || this).urlAfterRedirects = r), (i.state = o), i;
          }
          return (
            __extends(e, t),
            (e.prototype.toString = function() {
              return (
                'ResolveEnd(id: ' +
                this.id +
                ", url: '" +
                this.url +
                "', urlAfterRedirects: '" +
                this.urlAfterRedirects +
                "', state: " +
                this.state +
                ')'
              );
            }),
            e
          );
        })(Yc),
        uh = (function() {
          function t(t) {
            this.route = t;
          }
          return (
            (t.prototype.toString = function() {
              return 'RouteConfigLoadStart(path: ' + this.route.path + ')';
            }),
            t
          );
        })(),
        lh = (function() {
          function t(t) {
            this.route = t;
          }
          return (
            (t.prototype.toString = function() {
              return 'RouteConfigLoadEnd(path: ' + this.route.path + ')';
            }),
            t
          );
        })(),
        ch = (function() {
          function t(t) {
            this.snapshot = t;
          }
          return (
            (t.prototype.toString = function() {
              return (
                "ChildActivationStart(path: '" +
                ((this.snapshot.routeConfig && this.snapshot.routeConfig.path) || '') +
                "')"
              );
            }),
            t
          );
        })(),
        hh = (function() {
          function t(t) {
            this.snapshot = t;
          }
          return (
            (t.prototype.toString = function() {
              return (
                "ChildActivationEnd(path: '" +
                ((this.snapshot.routeConfig && this.snapshot.routeConfig.path) || '') +
                "')"
              );
            }),
            t
          );
        })(),
        ph = (function() {
          function t(t) {
            this.snapshot = t;
          }
          return (
            (t.prototype.toString = function() {
              return (
                "ActivationStart(path: '" +
                ((this.snapshot.routeConfig && this.snapshot.routeConfig.path) || '') +
                "')"
              );
            }),
            t
          );
        })(),
        fh = (function() {
          function t(t) {
            this.snapshot = t;
          }
          return (
            (t.prototype.toString = function() {
              return (
                "ActivationEnd(path: '" +
                ((this.snapshot.routeConfig && this.snapshot.routeConfig.path) || '') +
                "')"
              );
            }),
            t
          );
        })(),
        dh = (function() {
          function t(t, e, n) {
            (this.routerEvent = t), (this.position = e), (this.anchor = n);
          }
          return (
            (t.prototype.toString = function() {
              return (
                "Scroll(anchor: '" +
                this.anchor +
                "', position: '" +
                (this.position ? this.position[0] + ', ' + this.position[1] : null) +
                "')"
              );
            }),
            t
          );
        })(),
        yh = function() {},
        gh = 'primary',
        mh = (function() {
          function t(t) {
            this.params = t || {};
          }
          return (
            (t.prototype.has = function(t) {
              return this.params.hasOwnProperty(t);
            }),
            (t.prototype.get = function(t) {
              if (this.has(t)) {
                var e = this.params[t];
                return Array.isArray(e) ? e[0] : e;
              }
              return null;
            }),
            (t.prototype.getAll = function(t) {
              if (this.has(t)) {
                var e = this.params[t];
                return Array.isArray(e) ? e : [e];
              }
              return [];
            }),
            Object.defineProperty(t.prototype, 'keys', {
              get: function() {
                return Object.keys(this.params);
              },
              enumerable: !0,
              configurable: !0,
            }),
            t
          );
        })();
      function vh(t) {
        return new mh(t);
      }
      var _h = 'ngNavigationCancelingError';
      function bh(t) {
        var e = Error('NavigationCancelingError: ' + t);
        return (e[_h] = !0), e;
      }
      function wh(t, e, n) {
        var r = n.path.split('/');
        if (r.length > t.length) return null;
        if ('full' === n.pathMatch && (e.hasChildren() || r.length < t.length)) return null;
        for (var o = {}, i = 0; i < r.length; i++) {
          var s = r[i],
            a = t[i];
          if (s.startsWith(':')) o[s.substring(1)] = a;
          else if (s !== a.path) return null;
        }
        return { consumed: t.slice(0, r.length), posParams: o };
      }
      var Ch = function(t, e) {
        (this.routes = t), (this.module = e);
      };
      function Sh(t, e) {
        void 0 === e && (e = '');
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          Eh(r, Th(e, r));
        }
      }
      function Eh(t, e) {
        if (!t)
          throw new Error(
            "\n      Invalid configuration of route '" +
              e +
              "': Encountered undefined route.\n      The reason might be an extra comma.\n\n      Example:\n      const routes: Routes = [\n        { path: '', redirectTo: '/dashboard', pathMatch: 'full' },\n        { path: 'dashboard',  component: DashboardComponent },, << two commas\n        { path: 'detail/:id', component: HeroDetailComponent }\n      ];\n    ",
          );
        if (Array.isArray(t))
          throw new Error("Invalid configuration of route '" + e + "': Array cannot be specified");
        if (!t.component && !t.children && !t.loadChildren && t.outlet && t.outlet !== gh)
          throw new Error(
            "Invalid configuration of route '" +
              e +
              "': a componentless route without children or loadChildren cannot have a named outlet set",
          );
        if (t.redirectTo && t.children)
          throw new Error(
            "Invalid configuration of route '" +
              e +
              "': redirectTo and children cannot be used together",
          );
        if (t.redirectTo && t.loadChildren)
          throw new Error(
            "Invalid configuration of route '" +
              e +
              "': redirectTo and loadChildren cannot be used together",
          );
        if (t.children && t.loadChildren)
          throw new Error(
            "Invalid configuration of route '" +
              e +
              "': children and loadChildren cannot be used together",
          );
        if (t.redirectTo && t.component)
          throw new Error(
            "Invalid configuration of route '" +
              e +
              "': redirectTo and component cannot be used together",
          );
        if (t.path && t.matcher)
          throw new Error(
            "Invalid configuration of route '" + e + "': path and matcher cannot be used together",
          );
        if (void 0 === t.redirectTo && !t.component && !t.children && !t.loadChildren)
          throw new Error(
            "Invalid configuration of route '" +
              e +
              "'. One of the following must be provided: component, redirectTo, children or loadChildren",
          );
        if (void 0 === t.path && void 0 === t.matcher)
          throw new Error(
            "Invalid configuration of route '" +
              e +
              "': routes must have either a path or a matcher specified",
          );
        if ('string' == typeof t.path && '/' === t.path.charAt(0))
          throw new Error(
            "Invalid configuration of route '" + e + "': path cannot start with a slash",
          );
        if ('' === t.path && void 0 !== t.redirectTo && void 0 === t.pathMatch)
          throw new Error(
            'Invalid configuration of route \'{path: "' +
              e +
              '", redirectTo: "' +
              t.redirectTo +
              "\"}': please provide 'pathMatch'. The default value of 'pathMatch' is 'prefix', but often the intent is to use 'full'.",
          );
        if (void 0 !== t.pathMatch && 'full' !== t.pathMatch && 'prefix' !== t.pathMatch)
          throw new Error(
            "Invalid configuration of route '" +
              e +
              "': pathMatch can only be set to 'prefix' or 'full'",
          );
        t.children && Sh(t.children, e);
      }
      function Th(t, e) {
        return e
          ? t || e.path
            ? t && !e.path
              ? t + '/'
              : !t && e.path
              ? e.path
              : t + '/' + e.path
            : ''
          : t;
      }
      function xh(t) {
        var e = t.children && t.children.map(xh),
          n = e ? Object.assign({}, t, { children: e }) : Object.assign({}, t);
        return (
          !n.component &&
            (e || n.loadChildren) &&
            n.outlet &&
            n.outlet !== gh &&
            (n.component = yh),
          n
        );
      }
      function Ph(t, e) {
        var n,
          r = Object.keys(t),
          o = Object.keys(e);
        if (!r || !o || r.length != o.length) return !1;
        for (var i = 0; i < r.length; i++) if (t[(n = r[i])] !== e[n]) return !1;
        return !0;
      }
      function Oh(t) {
        return Array.prototype.concat.apply([], t);
      }
      function kh(t) {
        return t.length > 0 ? t[t.length - 1] : null;
      }
      function Ah(t, e) {
        for (var n in t) t.hasOwnProperty(n) && e(t[n], n);
      }
      function Ih(t) {
        return Ke(t) ? t : Qe(t) ? z(Promise.resolve(t)) : ic(t);
      }
      function Nh(t, e, n) {
        return n
          ? (function(t, e) {
              return Ph(t, e);
            })(t.queryParams, e.queryParams) &&
              (function t(e, n) {
                if (!jh(e.segments, n.segments)) return !1;
                if (e.numberOfChildren !== n.numberOfChildren) return !1;
                for (var r in n.children) {
                  if (!e.children[r]) return !1;
                  if (!t(e.children[r], n.children[r])) return !1;
                }
                return !0;
              })(t.root, e.root)
          : (function(t, e) {
              return (
                Object.keys(e).length <= Object.keys(t).length &&
                Object.keys(e).every(function(n) {
                  return e[n] === t[n];
                })
              );
            })(t.queryParams, e.queryParams) &&
              (function t(e, n) {
                return (function e(n, r, o) {
                  if (n.segments.length > o.length)
                    return !!jh(n.segments.slice(0, o.length), o) && !r.hasChildren();
                  if (n.segments.length === o.length) {
                    if (!jh(n.segments, o)) return !1;
                    for (var i in r.children) {
                      if (!n.children[i]) return !1;
                      if (!t(n.children[i], r.children[i])) return !1;
                    }
                    return !0;
                  }
                  var s = o.slice(0, n.segments.length),
                    a = o.slice(n.segments.length);
                  return !!jh(n.segments, s) && !!n.children[gh] && e(n.children[gh], r, a);
                })(e, n, n.segments);
              })(t.root, e.root);
      }
      var Rh = (function() {
          function t(t, e, n) {
            (this.root = t), (this.queryParams = e), (this.fragment = n);
          }
          return (
            Object.defineProperty(t.prototype, 'queryParamMap', {
              get: function() {
                return (
                  this._queryParamMap || (this._queryParamMap = vh(this.queryParams)),
                  this._queryParamMap
                );
              },
              enumerable: !0,
              configurable: !0,
            }),
            (t.prototype.toString = function() {
              return Uh.serialize(this);
            }),
            t
          );
        })(),
        Dh = (function() {
          function t(t, e) {
            var n = this;
            (this.segments = t),
              (this.children = e),
              (this.parent = null),
              Ah(e, function(t, e) {
                return (t.parent = n);
              });
          }
          return (
            (t.prototype.hasChildren = function() {
              return this.numberOfChildren > 0;
            }),
            Object.defineProperty(t.prototype, 'numberOfChildren', {
              get: function() {
                return Object.keys(this.children).length;
              },
              enumerable: !0,
              configurable: !0,
            }),
            (t.prototype.toString = function() {
              return Hh(this);
            }),
            t
          );
        })(),
        Fh = (function() {
          function t(t, e) {
            (this.path = t), (this.parameters = e);
          }
          return (
            Object.defineProperty(t.prototype, 'parameterMap', {
              get: function() {
                return (
                  this._parameterMap || (this._parameterMap = vh(this.parameters)),
                  this._parameterMap
                );
              },
              enumerable: !0,
              configurable: !0,
            }),
            (t.prototype.toString = function() {
              return Qh(this);
            }),
            t
          );
        })();
      function jh(t, e) {
        return (
          t.length === e.length &&
          t.every(function(t, n) {
            return t.path === e[n].path;
          })
        );
      }
      function Mh(t, e) {
        var n = [];
        return (
          Ah(t.children, function(t, r) {
            r === gh && (n = n.concat(e(t, r)));
          }),
          Ah(t.children, function(t, r) {
            r !== gh && (n = n.concat(e(t, r)));
          }),
          n
        );
      }
      var Vh = function() {},
        Lh = (function() {
          function t() {}
          return (
            (t.prototype.parse = function(t) {
              var e = new Yh(t);
              return new Rh(e.parseRootSegment(), e.parseQueryParams(), e.parseFragment());
            }),
            (t.prototype.serialize = function(t) {
              var e, n, r;
              return (
                '/' +
                (function t(e, n) {
                  if (!e.hasChildren()) return Hh(e);
                  if (n) {
                    var r = e.children[gh] ? t(e.children[gh], !1) : '',
                      o = [];
                    return (
                      Ah(e.children, function(e, n) {
                        n !== gh && o.push(n + ':' + t(e, !1));
                      }),
                      o.length > 0 ? r + '(' + o.join('//') + ')' : r
                    );
                  }
                  var i = Mh(e, function(n, r) {
                    return r === gh ? [t(e.children[gh], !1)] : [r + ':' + t(n, !1)];
                  });
                  return Hh(e) + '/(' + i.join('//') + ')';
                })(t.root, !0) +
                ((n = t.queryParams),
                (r = Object.keys(n).map(function(t) {
                  var e = n[t];
                  return Array.isArray(e)
                    ? e
                        .map(function(e) {
                          return zh(t) + '=' + zh(e);
                        })
                        .join('&')
                    : zh(t) + '=' + zh(e);
                })).length
                  ? '?' + r.join('&')
                  : '') +
                ('string' == typeof t.fragment ? '#' + ((e = t.fragment), encodeURI(e)) : '')
              );
            }),
            t
          );
        })(),
        Uh = new Lh();
      function Hh(t) {
        return t.segments
          .map(function(t) {
            return Qh(t);
          })
          .join('/');
      }
      function Bh(t) {
        return encodeURIComponent(t)
          .replace(/%40/g, '@')
          .replace(/%3A/gi, ':')
          .replace(/%24/g, '$')
          .replace(/%2C/gi, ',');
      }
      function zh(t) {
        return Bh(t).replace(/%3B/gi, ';');
      }
      function qh(t) {
        return Bh(t)
          .replace(/\(/g, '%28')
          .replace(/\)/g, '%29')
          .replace(/%26/gi, '&');
      }
      function Gh(t) {
        return decodeURIComponent(t);
      }
      function Wh(t) {
        return Gh(t.replace(/\+/g, '%20'));
      }
      function Qh(t) {
        return (
          '' +
          qh(t.path) +
          ((e = t.parameters),
          Object.keys(e)
            .map(function(t) {
              return ';' + qh(t) + '=' + qh(e[t]);
            })
            .join(''))
        );
        var e;
      }
      var Kh = /^[^\/()?;=#]+/;
      function Zh(t) {
        var e = t.match(Kh);
        return e ? e[0] : '';
      }
      var $h = /^[^=?&#]+/,
        Jh = /^[^?&#]+/,
        Yh = (function() {
          function t(t) {
            (this.url = t), (this.remaining = t);
          }
          return (
            (t.prototype.parseRootSegment = function() {
              return (
                this.consumeOptional('/'),
                '' === this.remaining || this.peekStartsWith('?') || this.peekStartsWith('#')
                  ? new Dh([], {})
                  : new Dh([], this.parseChildren())
              );
            }),
            (t.prototype.parseQueryParams = function() {
              var t = {};
              if (this.consumeOptional('?'))
                do {
                  this.parseQueryParam(t);
                } while (this.consumeOptional('&'));
              return t;
            }),
            (t.prototype.parseFragment = function() {
              return this.consumeOptional('#') ? decodeURIComponent(this.remaining) : null;
            }),
            (t.prototype.parseChildren = function() {
              if ('' === this.remaining) return {};
              this.consumeOptional('/');
              var t = [];
              for (
                this.peekStartsWith('(') || t.push(this.parseSegment());
                this.peekStartsWith('/') &&
                !this.peekStartsWith('//') &&
                !this.peekStartsWith('/(');

              )
                this.capture('/'), t.push(this.parseSegment());
              var e = {};
              this.peekStartsWith('/(') && (this.capture('/'), (e = this.parseParens(!0)));
              var n = {};
              return (
                this.peekStartsWith('(') && (n = this.parseParens(!1)),
                (t.length > 0 || Object.keys(e).length > 0) && (n[gh] = new Dh(t, e)),
                n
              );
            }),
            (t.prototype.parseSegment = function() {
              var t = Zh(this.remaining);
              if ('' === t && this.peekStartsWith(';'))
                throw new Error(
                  "Empty path url segment cannot have parameters: '" + this.remaining + "'.",
                );
              return this.capture(t), new Fh(Gh(t), this.parseMatrixParams());
            }),
            (t.prototype.parseMatrixParams = function() {
              for (var t = {}; this.consumeOptional(';'); ) this.parseParam(t);
              return t;
            }),
            (t.prototype.parseParam = function(t) {
              var e = Zh(this.remaining);
              if (e) {
                this.capture(e);
                var n = '';
                if (this.consumeOptional('=')) {
                  var r = Zh(this.remaining);
                  r && this.capture((n = r));
                }
                t[Gh(e)] = Gh(n);
              }
            }),
            (t.prototype.parseQueryParam = function(t) {
              var e = (function(t) {
                var e = t.match($h);
                return e ? e[0] : '';
              })(this.remaining);
              if (e) {
                this.capture(e);
                var n = '';
                if (this.consumeOptional('=')) {
                  var r = (function(t) {
                    var e = t.match(Jh);
                    return e ? e[0] : '';
                  })(this.remaining);
                  r && this.capture((n = r));
                }
                var o = Wh(e),
                  i = Wh(n);
                if (t.hasOwnProperty(o)) {
                  var s = t[o];
                  Array.isArray(s) || (t[o] = s = [s]), s.push(i);
                } else t[o] = i;
              }
            }),
            (t.prototype.parseParens = function(t) {
              var e = {};
              for (this.capture('('); !this.consumeOptional(')') && this.remaining.length > 0; ) {
                var n = Zh(this.remaining),
                  r = this.remaining[n.length];
                if ('/' !== r && ')' !== r && ';' !== r)
                  throw new Error("Cannot parse url '" + this.url + "'");
                var o = void 0;
                n.indexOf(':') > -1
                  ? ((o = n.substr(0, n.indexOf(':'))), this.capture(o), this.capture(':'))
                  : t && (o = gh);
                var i = this.parseChildren();
                (e[o] = 1 === Object.keys(i).length ? i[gh] : new Dh([], i)),
                  this.consumeOptional('//');
              }
              return e;
            }),
            (t.prototype.peekStartsWith = function(t) {
              return this.remaining.startsWith(t);
            }),
            (t.prototype.consumeOptional = function(t) {
              return (
                !!this.peekStartsWith(t) &&
                ((this.remaining = this.remaining.substring(t.length)), !0)
              );
            }),
            (t.prototype.capture = function(t) {
              if (!this.consumeOptional(t)) throw new Error('Expected "' + t + '".');
            }),
            t
          );
        })(),
        Xh = (function() {
          function t(t) {
            this._root = t;
          }
          return (
            Object.defineProperty(t.prototype, 'root', {
              get: function() {
                return this._root.value;
              },
              enumerable: !0,
              configurable: !0,
            }),
            (t.prototype.parent = function(t) {
              var e = this.pathFromRoot(t);
              return e.length > 1 ? e[e.length - 2] : null;
            }),
            (t.prototype.children = function(t) {
              var e = tp(t, this._root);
              return e
                ? e.children.map(function(t) {
                    return t.value;
                  })
                : [];
            }),
            (t.prototype.firstChild = function(t) {
              var e = tp(t, this._root);
              return e && e.children.length > 0 ? e.children[0].value : null;
            }),
            (t.prototype.siblings = function(t) {
              var e = ep(t, this._root);
              return e.length < 2
                ? []
                : e[e.length - 2].children
                    .map(function(t) {
                      return t.value;
                    })
                    .filter(function(e) {
                      return e !== t;
                    });
            }),
            (t.prototype.pathFromRoot = function(t) {
              return ep(t, this._root).map(function(t) {
                return t.value;
              });
            }),
            t
          );
        })();
      function tp(t, e) {
        if (t === e.value) return e;
        for (var n = 0, r = e.children; n < r.length; n++) {
          var o = tp(t, r[n]);
          if (o) return o;
        }
        return null;
      }
      function ep(t, e) {
        if (t === e.value) return [e];
        for (var n = 0, r = e.children; n < r.length; n++) {
          var o = ep(t, r[n]);
          if (o.length) return o.unshift(e), o;
        }
        return [];
      }
      var np = (function() {
        function t(t, e) {
          (this.value = t), (this.children = e);
        }
        return (
          (t.prototype.toString = function() {
            return 'TreeNode(' + this.value + ')';
          }),
          t
        );
      })();
      function rp(t) {
        var e = {};
        return (
          t &&
            t.children.forEach(function(t) {
              return (e[t.value.outlet] = t);
            }),
          e
        );
      }
      var op = (function(t) {
        function e(e, n) {
          var r = this;
          return ((r = t.call(this, e) || this).snapshot = n), cp(r, e), r;
        }
        return (
          __extends(e, t),
          (e.prototype.toString = function() {
            return this.snapshot.toString();
          }),
          e
        );
      })(Xh);
      function ip(t, e) {
        var n = (function(t, e) {
            var n = new up([], {}, {}, '', {}, gh, e, null, t.root, -1, {});
            return new lp('', new np(n, []));
          })(t, e),
          r = new sc([new Fh('', {})]),
          o = new sc({}),
          i = new sc({}),
          s = new sc({}),
          a = new sc(''),
          u = new sp(r, o, s, a, i, gh, e, n.root);
        return (u.snapshot = n.root), new op(new np(u, []), n);
      }
      var sp = (function() {
        function t(t, e, n, r, o, i, s, a) {
          (this.url = t),
            (this.params = e),
            (this.queryParams = n),
            (this.fragment = r),
            (this.data = o),
            (this.outlet = i),
            (this.component = s),
            (this._futureSnapshot = a);
        }
        return (
          Object.defineProperty(t.prototype, 'routeConfig', {
            get: function() {
              return this._futureSnapshot.routeConfig;
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(t.prototype, 'root', {
            get: function() {
              return this._routerState.root;
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(t.prototype, 'parent', {
            get: function() {
              return this._routerState.parent(this);
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(t.prototype, 'firstChild', {
            get: function() {
              return this._routerState.firstChild(this);
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(t.prototype, 'children', {
            get: function() {
              return this._routerState.children(this);
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(t.prototype, 'pathFromRoot', {
            get: function() {
              return this._routerState.pathFromRoot(this);
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(t.prototype, 'paramMap', {
            get: function() {
              return (
                this._paramMap ||
                  (this._paramMap = this.params.pipe(
                    L(function(t) {
                      return vh(t);
                    }),
                  )),
                this._paramMap
              );
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(t.prototype, 'queryParamMap', {
            get: function() {
              return (
                this._queryParamMap ||
                  (this._queryParamMap = this.queryParams.pipe(
                    L(function(t) {
                      return vh(t);
                    }),
                  )),
                this._queryParamMap
              );
            },
            enumerable: !0,
            configurable: !0,
          }),
          (t.prototype.toString = function() {
            return this.snapshot
              ? this.snapshot.toString()
              : 'Future(' + this._futureSnapshot + ')';
          }),
          t
        );
      })();
      function ap(t, e) {
        void 0 === e && (e = 'emptyOnly');
        var n = t.pathFromRoot,
          r = 0;
        if ('always' !== e)
          for (r = n.length - 1; r >= 1; ) {
            var o = n[r],
              i = n[r - 1];
            if (o.routeConfig && '' === o.routeConfig.path) r--;
            else {
              if (i.component) break;
              r--;
            }
          }
        return (function(t) {
          return t.reduce(
            function(t, e) {
              return {
                params: Object.assign({}, t.params, e.params),
                data: Object.assign({}, t.data, e.data),
                resolve: Object.assign({}, t.resolve, e._resolvedData),
              };
            },
            { params: {}, data: {}, resolve: {} },
          );
        })(n.slice(r));
      }
      var up = (function() {
          function t(t, e, n, r, o, i, s, a, u, l, c) {
            (this.url = t),
              (this.params = e),
              (this.queryParams = n),
              (this.fragment = r),
              (this.data = o),
              (this.outlet = i),
              (this.component = s),
              (this.routeConfig = a),
              (this._urlSegment = u),
              (this._lastPathIndex = l),
              (this._resolve = c);
          }
          return (
            Object.defineProperty(t.prototype, 'root', {
              get: function() {
                return this._routerState.root;
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, 'parent', {
              get: function() {
                return this._routerState.parent(this);
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, 'firstChild', {
              get: function() {
                return this._routerState.firstChild(this);
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, 'children', {
              get: function() {
                return this._routerState.children(this);
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, 'pathFromRoot', {
              get: function() {
                return this._routerState.pathFromRoot(this);
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, 'paramMap', {
              get: function() {
                return this._paramMap || (this._paramMap = vh(this.params)), this._paramMap;
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, 'queryParamMap', {
              get: function() {
                return (
                  this._queryParamMap || (this._queryParamMap = vh(this.queryParams)),
                  this._queryParamMap
                );
              },
              enumerable: !0,
              configurable: !0,
            }),
            (t.prototype.toString = function() {
              return (
                "Route(url:'" +
                this.url
                  .map(function(t) {
                    return t.toString();
                  })
                  .join('/') +
                "', path:'" +
                (this.routeConfig ? this.routeConfig.path : '') +
                "')"
              );
            }),
            t
          );
        })(),
        lp = (function(t) {
          function e(e, n) {
            var r = this;
            return ((r = t.call(this, n) || this).url = e), cp(r, n), r;
          }
          return (
            __extends(e, t),
            (e.prototype.toString = function() {
              return hp(this._root);
            }),
            e
          );
        })(Xh);
      function cp(t, e) {
        (e.value._routerState = t),
          e.children.forEach(function(e) {
            return cp(t, e);
          });
      }
      function hp(t) {
        var e = t.children.length > 0 ? ' { ' + t.children.map(hp).join(', ') + ' } ' : '';
        return '' + t.value + e;
      }
      function pp(t) {
        if (t.snapshot) {
          var e = t.snapshot,
            n = t._futureSnapshot;
          (t.snapshot = n),
            Ph(e.queryParams, n.queryParams) || t.queryParams.next(n.queryParams),
            e.fragment !== n.fragment && t.fragment.next(n.fragment),
            Ph(e.params, n.params) || t.params.next(n.params),
            (function(t, e) {
              if (t.length !== e.length) return !1;
              for (var n = 0; n < t.length; ++n) if (!Ph(t[n], e[n])) return !1;
              return !0;
            })(e.url, n.url) || t.url.next(n.url),
            Ph(e.data, n.data) || t.data.next(n.data);
        } else (t.snapshot = t._futureSnapshot), t.data.next(t._futureSnapshot.data);
      }
      function fp(t, e) {
        var n, r;
        return (
          Ph(t.params, e.params) &&
          jh((n = t.url), (r = e.url)) &&
          n.every(function(t, e) {
            return Ph(t.parameters, r[e].parameters);
          }) &&
          !(!t.parent != !e.parent) &&
          (!t.parent || fp(t.parent, e.parent))
        );
      }
      function dp(t) {
        return 'object' == typeof t && null != t && !t.outlets && !t.segmentPath;
      }
      function yp(t, e, n, r, o) {
        var i = {};
        return (
          r &&
            Ah(r, function(t, e) {
              i[e] = Array.isArray(t)
                ? t.map(function(t) {
                    return '' + t;
                  })
                : '' + t;
            }),
          new Rh(
            n.root === t
              ? e
              : (function t(e, n, r) {
                  var o = {};
                  return (
                    Ah(e.children, function(e, i) {
                      o[i] = e === n ? r : t(e, n, r);
                    }),
                    new Dh(e.segments, o)
                  );
                })(n.root, t, e),
            i,
            o,
          )
        );
      }
      var gp = (function() {
          function t(t, e, n) {
            if (
              ((this.isAbsolute = t),
              (this.numberOfDoubleDots = e),
              (this.commands = n),
              t && n.length > 0 && dp(n[0]))
            )
              throw new Error('Root segment cannot have matrix parameters');
            var r = n.find(function(t) {
              return 'object' == typeof t && null != t && t.outlets;
            });
            if (r && r !== kh(n)) throw new Error('{outlets:{}} has to be the last command');
          }
          return (
            (t.prototype.toRoot = function() {
              return this.isAbsolute && 1 === this.commands.length && '/' == this.commands[0];
            }),
            t
          );
        })(),
        mp = function(t, e, n) {
          (this.segmentGroup = t), (this.processChildren = e), (this.index = n);
        };
      function vp(t) {
        return 'object' == typeof t && null != t && t.outlets ? t.outlets[gh] : '' + t;
      }
      function _p(t, e, n) {
        if ((t || (t = new Dh([], {})), 0 === t.segments.length && t.hasChildren()))
          return bp(t, e, n);
        var r = (function(t, e, n) {
            for (
              var r = 0, o = e, i = { match: !1, pathIndex: 0, commandIndex: 0 };
              o < t.segments.length;

            ) {
              if (r >= n.length) return i;
              var s = t.segments[o],
                a = vp(n[r]),
                u = r < n.length - 1 ? n[r + 1] : null;
              if (o > 0 && void 0 === a) break;
              if (a && u && 'object' == typeof u && void 0 === u.outlets) {
                if (!Ep(a, u, s)) return i;
                r += 2;
              } else {
                if (!Ep(a, {}, s)) return i;
                r++;
              }
              o++;
            }
            return { match: !0, pathIndex: o, commandIndex: r };
          })(t, e, n),
          o = n.slice(r.commandIndex);
        if (r.match && r.pathIndex < t.segments.length) {
          var i = new Dh(t.segments.slice(0, r.pathIndex), {});
          return (i.children[gh] = new Dh(t.segments.slice(r.pathIndex), t.children)), bp(i, 0, o);
        }
        return r.match && 0 === o.length
          ? new Dh(t.segments, {})
          : r.match && !t.hasChildren()
          ? wp(t, e, n)
          : r.match
          ? bp(t, 0, o)
          : wp(t, e, n);
      }
      function bp(t, e, n) {
        if (0 === n.length) return new Dh(t.segments, {});
        var r = (function(t) {
            var e, n;
            return 'object' != typeof t[0]
              ? (((e = {})[gh] = t), e)
              : void 0 === t[0].outlets
              ? (((n = {})[gh] = t), n)
              : t[0].outlets;
          })(n),
          o = {};
        return (
          Ah(r, function(n, r) {
            null !== n && (o[r] = _p(t.children[r], e, n));
          }),
          Ah(t.children, function(t, e) {
            void 0 === r[e] && (o[e] = t);
          }),
          new Dh(t.segments, o)
        );
      }
      function wp(t, e, n) {
        for (var r = t.segments.slice(0, e), o = 0; o < n.length; ) {
          if ('object' == typeof n[o] && void 0 !== n[o].outlets) {
            var i = Cp(n[o].outlets);
            return new Dh(r, i);
          }
          if (0 === o && dp(n[0])) r.push(new Fh(t.segments[e].path, n[0])), o++;
          else {
            var s = vp(n[o]),
              a = o < n.length - 1 ? n[o + 1] : null;
            s && a && dp(a) ? (r.push(new Fh(s, Sp(a))), (o += 2)) : (r.push(new Fh(s, {})), o++);
          }
        }
        return new Dh(r, {});
      }
      function Cp(t) {
        var e = {};
        return (
          Ah(t, function(t, n) {
            null !== t && (e[n] = wp(new Dh([], {}), 0, t));
          }),
          e
        );
      }
      function Sp(t) {
        var e = {};
        return (
          Ah(t, function(t, n) {
            return (e[n] = '' + t);
          }),
          e
        );
      }
      function Ep(t, e, n) {
        return t == n.path && Ph(e, n.parameters);
      }
      var Tp = (function() {
        function t(t, e, n, r) {
          (this.routeReuseStrategy = t),
            (this.futureState = e),
            (this.currState = n),
            (this.forwardEvent = r);
        }
        return (
          (t.prototype.activate = function(t) {
            var e = this.futureState._root,
              n = this.currState ? this.currState._root : null;
            this.deactivateChildRoutes(e, n, t),
              pp(this.futureState.root),
              this.activateChildRoutes(e, n, t);
          }),
          (t.prototype.deactivateChildRoutes = function(t, e, n) {
            var r = this,
              o = rp(e);
            t.children.forEach(function(t) {
              var e = t.value.outlet;
              r.deactivateRoutes(t, o[e], n), delete o[e];
            }),
              Ah(o, function(t, e) {
                r.deactivateRouteAndItsChildren(t, n);
              });
          }),
          (t.prototype.deactivateRoutes = function(t, e, n) {
            var r = t.value,
              o = e ? e.value : null;
            if (r === o)
              if (r.component) {
                var i = n.getContext(r.outlet);
                i && this.deactivateChildRoutes(t, e, i.children);
              } else this.deactivateChildRoutes(t, e, n);
            else o && this.deactivateRouteAndItsChildren(e, n);
          }),
          (t.prototype.deactivateRouteAndItsChildren = function(t, e) {
            this.routeReuseStrategy.shouldDetach(t.value.snapshot)
              ? this.detachAndStoreRouteSubtree(t, e)
              : this.deactivateRouteAndOutlet(t, e);
          }),
          (t.prototype.detachAndStoreRouteSubtree = function(t, e) {
            var n = e.getContext(t.value.outlet);
            if (n && n.outlet) {
              var r = n.outlet.detach(),
                o = n.children.onOutletDeactivated();
              this.routeReuseStrategy.store(t.value.snapshot, {
                componentRef: r,
                route: t,
                contexts: o,
              });
            }
          }),
          (t.prototype.deactivateRouteAndOutlet = function(t, e) {
            var n = this,
              r = e.getContext(t.value.outlet);
            if (r) {
              var o = rp(t),
                i = t.value.component ? r.children : e;
              Ah(o, function(t, e) {
                return n.deactivateRouteAndItsChildren(t, i);
              }),
                r.outlet && (r.outlet.deactivate(), r.children.onOutletDeactivated());
            }
          }),
          (t.prototype.activateChildRoutes = function(t, e, n) {
            var r = this,
              o = rp(e);
            t.children.forEach(function(t) {
              r.activateRoutes(t, o[t.value.outlet], n), r.forwardEvent(new fh(t.value.snapshot));
            }),
              t.children.length && this.forwardEvent(new hh(t.value.snapshot));
          }),
          (t.prototype.activateRoutes = function(t, e, n) {
            var r = t.value,
              o = e ? e.value : null;
            if ((pp(r), r === o))
              if (r.component) {
                var i = n.getOrCreateContext(r.outlet);
                this.activateChildRoutes(t, e, i.children);
              } else this.activateChildRoutes(t, e, n);
            else if (r.component) {
              i = n.getOrCreateContext(r.outlet);
              if (this.routeReuseStrategy.shouldAttach(r.snapshot)) {
                var s = this.routeReuseStrategy.retrieve(r.snapshot);
                this.routeReuseStrategy.store(r.snapshot, null),
                  i.children.onOutletReAttached(s.contexts),
                  (i.attachRef = s.componentRef),
                  (i.route = s.route.value),
                  i.outlet && i.outlet.attach(s.componentRef, s.route.value),
                  xp(s.route);
              } else {
                var a = (function(t) {
                    for (var e = t.parent; e; e = e.parent) {
                      var n = e.routeConfig;
                      if (n && n._loadedConfig) return n._loadedConfig;
                      if (n && n.component) return null;
                    }
                    return null;
                  })(r.snapshot),
                  u = a ? a.module.componentFactoryResolver : null;
                (i.attachRef = null),
                  (i.route = r),
                  (i.resolver = u),
                  i.outlet && i.outlet.activateWith(r, u),
                  this.activateChildRoutes(t, null, i.children);
              }
            } else this.activateChildRoutes(t, null, n);
          }),
          t
        );
      })();
      function xp(t) {
        pp(t.value), t.children.forEach(xp);
      }
      function Pp(t) {
        return 'function' == typeof t;
      }
      function Op(t) {
        return t instanceof Rh;
      }
      var kp = function(t) {
          this.segmentGroup = t || null;
        },
        Ap = function(t) {
          this.urlTree = t;
        };
      function Ip(t) {
        return new C(function(e) {
          return e.error(new kp(t));
        });
      }
      function Np(t) {
        return new C(function(e) {
          return e.error(new Ap(t));
        });
      }
      function Rp(t) {
        return new C(function(e) {
          return e.error(
            new Error("Only absolute redirects can have named outlets. redirectTo: '" + t + "'"),
          );
        });
      }
      var Dp = (function() {
        function t(t, e, n, r, o) {
          (this.configLoader = e),
            (this.urlSerializer = n),
            (this.urlTree = r),
            (this.config = o),
            (this.allowRedirects = !0),
            (this.ngModule = t.get(Vt));
        }
        return (
          (t.prototype.apply = function() {
            var t = this;
            return this.expandSegmentGroup(this.ngModule, this.config, this.urlTree.root, gh)
              .pipe(
                L(function(e) {
                  return t.createUrlTree(e, t.urlTree.queryParams, t.urlTree.fragment);
                }),
              )
              .pipe(
                Ac(function(e) {
                  if (e instanceof Ap) return (t.allowRedirects = !1), t.match(e.urlTree);
                  if (e instanceof kp) throw t.noMatchError(e);
                  throw e;
                }),
              );
          }),
          (t.prototype.match = function(t) {
            var e = this;
            return this.expandSegmentGroup(this.ngModule, this.config, t.root, gh)
              .pipe(
                L(function(n) {
                  return e.createUrlTree(n, t.queryParams, t.fragment);
                }),
              )
              .pipe(
                Ac(function(t) {
                  if (t instanceof kp) throw e.noMatchError(t);
                  throw t;
                }),
              );
          }),
          (t.prototype.noMatchError = function(t) {
            return new Error("Cannot match any routes. URL Segment: '" + t.segmentGroup + "'");
          }),
          (t.prototype.createUrlTree = function(t, e, n) {
            var r,
              o = t.segments.length > 0 ? new Dh([], (((r = {})[gh] = t), r)) : t;
            return new Rh(o, e, n);
          }),
          (t.prototype.expandSegmentGroup = function(t, e, n, r) {
            return 0 === n.segments.length && n.hasChildren()
              ? this.expandChildren(t, e, n).pipe(
                  L(function(t) {
                    return new Dh([], t);
                  }),
                )
              : this.expandSegment(t, n, e, n.segments, r, !0);
          }),
          (t.prototype.expandChildren = function(t, e, n) {
            var r = this;
            return (function(n, o) {
              if (0 === Object.keys(n).length) return ic({});
              var i = [],
                s = [],
                a = {};
              return (
                Ah(n, function(n, o) {
                  var u,
                    l,
                    c = ((u = o), (l = n), r.expandSegmentGroup(t, e, l, u)).pipe(
                      L(function(t) {
                        return (a[o] = t);
                      }),
                    );
                  o === gh ? i.push(c) : s.push(c);
                }),
                ic.apply(null, i.concat(s)).pipe(
                  dc(),
                  kc(),
                  L(function() {
                    return a;
                  }),
                )
              );
            })(n.children);
          }),
          (t.prototype.expandSegment = function(t, e, n, r, o, i) {
            var s = this;
            return ic.apply(void 0, n).pipe(
              L(function(a) {
                return s.expandSegmentAgainstRoute(t, e, n, a, r, o, i).pipe(
                  Ac(function(t) {
                    if (t instanceof kp) return ic(null);
                    throw t;
                  }),
                );
              }),
              dc(),
              jc(function(t) {
                return !!t;
              }),
              Ac(function(t, n) {
                if (t instanceof ac || 'EmptyError' === t.name) {
                  if (s.noLeftoversInUrl(e, r, o)) return ic(new Dh([], {}));
                  throw new kp(e);
                }
                throw t;
              }),
            );
          }),
          (t.prototype.noLeftoversInUrl = function(t, e, n) {
            return 0 === e.length && !t.children[n];
          }),
          (t.prototype.expandSegmentAgainstRoute = function(t, e, n, r, o, i, s) {
            return Vp(r) !== i
              ? Ip(e)
              : void 0 === r.redirectTo
              ? this.matchSegmentAgainstRoute(t, e, r, o)
              : s && this.allowRedirects
              ? this.expandSegmentAgainstRouteUsingRedirect(t, e, n, r, o, i)
              : Ip(e);
          }),
          (t.prototype.expandSegmentAgainstRouteUsingRedirect = function(t, e, n, r, o, i) {
            return '**' === r.path
              ? this.expandWildCardWithParamsAgainstRouteUsingRedirect(t, n, r, i)
              : this.expandRegularSegmentAgainstRouteUsingRedirect(t, e, n, r, o, i);
          }),
          (t.prototype.expandWildCardWithParamsAgainstRouteUsingRedirect = function(t, e, n, r) {
            var o = this,
              i = this.applyRedirectCommands([], n.redirectTo, {});
            return n.redirectTo.startsWith('/')
              ? Np(i)
              : this.lineralizeSegments(n, i).pipe(
                  q(function(n) {
                    var i = new Dh(n, {});
                    return o.expandSegment(t, i, e, n, r, !1);
                  }),
                );
          }),
          (t.prototype.expandRegularSegmentAgainstRouteUsingRedirect = function(t, e, n, r, o, i) {
            var s = this,
              a = Fp(e, r, o),
              u = a.matched,
              l = a.consumedSegments,
              c = a.lastChild,
              h = a.positionalParamSegments;
            if (!u) return Ip(e);
            var p = this.applyRedirectCommands(l, r.redirectTo, h);
            return r.redirectTo.startsWith('/')
              ? Np(p)
              : this.lineralizeSegments(r, p).pipe(
                  q(function(r) {
                    return s.expandSegment(t, e, n, r.concat(o.slice(c)), i, !1);
                  }),
                );
          }),
          (t.prototype.matchSegmentAgainstRoute = function(t, e, n, r) {
            var o = this;
            if ('**' === n.path)
              return n.loadChildren
                ? this.configLoader.load(t.injector, n).pipe(
                    L(function(t) {
                      return (n._loadedConfig = t), new Dh(r, {});
                    }),
                  )
                : ic(new Dh(r, {}));
            var i = Fp(e, n, r),
              s = i.matched,
              a = i.consumedSegments,
              u = i.lastChild;
            if (!s) return Ip(e);
            var l = r.slice(u);
            return this.getChildConfig(t, n, r).pipe(
              q(function(t) {
                var n = t.module,
                  r = t.routes,
                  i = (function(t, e, n, r) {
                    return n.length > 0 &&
                      (function(t, e, n) {
                        return n.some(function(n) {
                          return Mp(t, e, n) && Vp(n) !== gh;
                        });
                      })(t, n, r)
                      ? {
                          segmentGroup: jp(
                            new Dh(
                              e,
                              (function(t, e) {
                                var n = {};
                                n[gh] = e;
                                for (var r = 0, o = t; r < o.length; r++) {
                                  var i = o[r];
                                  '' === i.path && Vp(i) !== gh && (n[Vp(i)] = new Dh([], {}));
                                }
                                return n;
                              })(r, new Dh(n, t.children)),
                            ),
                          ),
                          slicedSegments: [],
                        }
                      : 0 === n.length &&
                        (function(t, e, n) {
                          return n.some(function(n) {
                            return Mp(t, e, n);
                          });
                        })(t, n, r)
                      ? {
                          segmentGroup: jp(
                            new Dh(
                              t.segments,
                              (function(t, e, n, r) {
                                for (var o = {}, i = 0, s = n; i < s.length; i++) {
                                  var a = s[i];
                                  Mp(t, e, a) && !r[Vp(a)] && (o[Vp(a)] = new Dh([], {}));
                                }
                                return Object.assign({}, r, o);
                              })(t, n, r, t.children),
                            ),
                          ),
                          slicedSegments: n,
                        }
                      : { segmentGroup: t, slicedSegments: n };
                  })(e, a, l, r),
                  s = i.segmentGroup,
                  u = i.slicedSegments;
                return 0 === u.length && s.hasChildren()
                  ? o.expandChildren(n, r, s).pipe(
                      L(function(t) {
                        return new Dh(a, t);
                      }),
                    )
                  : 0 === r.length && 0 === u.length
                  ? ic(new Dh(a, {}))
                  : o.expandSegment(n, s, r, u, gh, !0).pipe(
                      L(function(t) {
                        return new Dh(a.concat(t.segments), t.children);
                      }),
                    );
              }),
            );
          }),
          (t.prototype.getChildConfig = function(t, e, n) {
            var r = this;
            return e.children
              ? ic(new Ch(e.children, t))
              : e.loadChildren
              ? void 0 !== e._loadedConfig
                ? ic(e._loadedConfig)
                : (function(t, e, n) {
                    var r,
                      o = e.canLoad;
                    return o && 0 !== o.length
                      ? z(o)
                          .pipe(
                            L(function(r) {
                              var o,
                                i = t.get(r);
                              if (
                                (function(t) {
                                  return t && Pp(t.canLoad);
                                })(i)
                              )
                                o = i.canLoad(e, n);
                              else {
                                if (!Pp(i)) throw new Error('Invalid CanLoad guard');
                                o = i(e, n);
                              }
                              return Ih(o);
                            }),
                          )
                          .pipe(
                            dc(),
                            ((r = function(t) {
                              return !0 === t;
                            }),
                            function(t) {
                              return t.lift(new Mc(r, void 0, t));
                            }),
                          )
                      : ic(!0);
                  })(t.injector, e, n).pipe(
                    q(function(n) {
                      return n
                        ? r.configLoader.load(t.injector, e).pipe(
                            L(function(t) {
                              return (e._loadedConfig = t), t;
                            }),
                          )
                        : (function(t) {
                            return new C(function(e) {
                              return e.error(
                                bh(
                                  'Cannot load children because the guard of the route "path: \'' +
                                    t.path +
                                    '\'" returned false',
                                ),
                              );
                            });
                          })(e);
                    }),
                  )
              : ic(new Ch([], t));
          }),
          (t.prototype.lineralizeSegments = function(t, e) {
            for (var n = [], r = e.root; ; ) {
              if (((n = n.concat(r.segments)), 0 === r.numberOfChildren)) return ic(n);
              if (r.numberOfChildren > 1 || !r.children[gh]) return Rp(t.redirectTo);
              r = r.children[gh];
            }
          }),
          (t.prototype.applyRedirectCommands = function(t, e, n) {
            return this.applyRedirectCreatreUrlTree(e, this.urlSerializer.parse(e), t, n);
          }),
          (t.prototype.applyRedirectCreatreUrlTree = function(t, e, n, r) {
            var o = this.createSegmentGroup(t, e.root, n, r);
            return new Rh(
              o,
              this.createQueryParams(e.queryParams, this.urlTree.queryParams),
              e.fragment,
            );
          }),
          (t.prototype.createQueryParams = function(t, e) {
            var n = {};
            return (
              Ah(t, function(t, r) {
                if ('string' == typeof t && t.startsWith(':')) {
                  var o = t.substring(1);
                  n[r] = e[o];
                } else n[r] = t;
              }),
              n
            );
          }),
          (t.prototype.createSegmentGroup = function(t, e, n, r) {
            var o = this,
              i = this.createSegments(t, e.segments, n, r),
              s = {};
            return (
              Ah(e.children, function(e, i) {
                s[i] = o.createSegmentGroup(t, e, n, r);
              }),
              new Dh(i, s)
            );
          }),
          (t.prototype.createSegments = function(t, e, n, r) {
            var o = this;
            return e.map(function(e) {
              return e.path.startsWith(':') ? o.findPosParam(t, e, r) : o.findOrReturn(e, n);
            });
          }),
          (t.prototype.findPosParam = function(t, e, n) {
            var r = n[e.path.substring(1)];
            if (!r)
              throw new Error("Cannot redirect to '" + t + "'. Cannot find '" + e.path + "'.");
            return r;
          }),
          (t.prototype.findOrReturn = function(t, e) {
            for (var n = 0, r = 0, o = e; r < o.length; r++) {
              var i = o[r];
              if (i.path === t.path) return e.splice(n), i;
              n++;
            }
            return t;
          }),
          t
        );
      })();
      function Fp(t, e, n) {
        if ('' === e.path)
          return 'full' === e.pathMatch && (t.hasChildren() || n.length > 0)
            ? { matched: !1, consumedSegments: [], lastChild: 0, positionalParamSegments: {} }
            : { matched: !0, consumedSegments: [], lastChild: 0, positionalParamSegments: {} };
        var r = (e.matcher || wh)(n, t, e);
        return r
          ? {
              matched: !0,
              consumedSegments: r.consumed,
              lastChild: r.consumed.length,
              positionalParamSegments: r.posParams,
            }
          : { matched: !1, consumedSegments: [], lastChild: 0, positionalParamSegments: {} };
      }
      function jp(t) {
        if (1 === t.numberOfChildren && t.children[gh]) {
          var e = t.children[gh];
          return new Dh(t.segments.concat(e.segments), e.children);
        }
        return t;
      }
      function Mp(t, e, n) {
        return (
          (!(t.hasChildren() || e.length > 0) || 'full' !== n.pathMatch) &&
          '' === n.path &&
          void 0 !== n.redirectTo
        );
      }
      function Vp(t) {
        return t.outlet || gh;
      }
      var Lp = function(t) {
          (this.path = t), (this.route = this.path[this.path.length - 1]);
        },
        Up = function(t, e) {
          (this.component = t), (this.route = e);
        };
      function Hp(t, e, n) {
        var r = (function(t) {
          if (!t) return null;
          for (var e = t.parent; e; e = e.parent) {
            var n = e.routeConfig;
            if (n && n._loadedConfig) return n._loadedConfig;
          }
          return null;
        })(e);
        return (r ? r.module.injector : n).get(t);
      }
      function Bp(t, e, n) {
        var r = rp(t),
          o = t.value;
        Ah(r, function(t, r) {
          Bp(t, o.component ? (e ? e.children.getContext(r) : null) : e, n);
        }),
          n.canDeactivateChecks.push(
            new Up(
              o.component && e && e.outlet && e.outlet.isActivated ? e.outlet.component : null,
              o,
            ),
          );
      }
      var zp = Symbol('INITIAL_VALUE');
      function qp() {
        return Lc(function(t) {
          return function() {
            for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
            var n = null,
              r = null;
            return (
              A(t[t.length - 1]) && (r = t.pop()),
              'function' == typeof t[t.length - 1] && (n = t.pop()),
              1 === t.length && u(t[0]) && (t = t[0]),
              Z(t, r).lift(new lc(n))
            );
          }
            .apply(
              void 0,
              t.map(function(t) {
                return t.pipe(
                  Rc(1),
                  (function() {
                    for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                    var n = t[t.length - 1];
                    return A(n)
                      ? (t.pop(),
                        function(e) {
                          return Bc(t, e, n);
                        })
                      : function(e) {
                          return Bc(t, e);
                        };
                  })(zp),
                );
              }),
            )
            .pipe(
              zc(function(t, e) {
                var n = !1;
                return e.reduce(function(t, r, o) {
                  if (t !== zp) return t;
                  if ((r === zp && (n = !0), !n)) {
                    if (!1 === r) return r;
                    if (o === e.length - 1 || Op(r)) return r;
                  }
                  return t;
                }, t);
              }, zp),
              yc(function(t) {
                return t !== zp;
              }),
              L(function(t) {
                return Op(t) ? t : !0 === t;
              }),
              Rc(1),
            );
        });
      }
      function Gp(t, e) {
        return null !== t && e && e(new ph(t)), ic(!0);
      }
      function Wp(t, e) {
        return null !== t && e && e(new ch(t)), ic(!0);
      }
      function Qp(t, e, n) {
        var r = e.routeConfig ? e.routeConfig.canActivate : null;
        return r && 0 !== r.length
          ? ic(
              r.map(function(r) {
                return fc(function() {
                  var o,
                    i = Hp(r, e, n);
                  if (
                    (function(t) {
                      return t && Pp(t.canActivate);
                    })(i)
                  )
                    o = Ih(i.canActivate(e, t));
                  else {
                    if (!Pp(i)) throw new Error('Invalid CanActivate guard');
                    o = Ih(i(e, t));
                  }
                  return o.pipe(jc());
                });
              }),
            ).pipe(qp())
          : ic(!0);
      }
      function Kp(t, e, n) {
        var r = e[e.length - 1],
          o = e
            .slice(0, e.length - 1)
            .reverse()
            .map(function(t) {
              return (function(t) {
                var e = t.routeConfig ? t.routeConfig.canActivateChild : null;
                return e && 0 !== e.length ? { node: t, guards: e } : null;
              })(t);
            })
            .filter(function(t) {
              return null !== t;
            })
            .map(function(e) {
              return fc(function() {
                return ic(
                  e.guards.map(function(o) {
                    var i,
                      s = Hp(o, e.node, n);
                    if (
                      (function(t) {
                        return t && Pp(t.canActivateChild);
                      })(s)
                    )
                      i = Ih(s.canActivateChild(r, t));
                    else {
                      if (!Pp(s)) throw new Error('Invalid CanActivateChild guard');
                      i = Ih(s(r, t));
                    }
                    return i.pipe(jc());
                  }),
                ).pipe(qp());
              });
            });
        return ic(o).pipe(qp());
      }
      var Zp = function() {},
        $p = (function() {
          function t(t, e, n, r, o, i) {
            (this.rootComponentType = t),
              (this.config = e),
              (this.urlTree = n),
              (this.url = r),
              (this.paramsInheritanceStrategy = o),
              (this.relativeLinkResolution = i);
          }
          return (
            (t.prototype.recognize = function() {
              try {
                var t = Xp(this.urlTree.root, [], [], this.config, this.relativeLinkResolution)
                    .segmentGroup,
                  e = this.processSegmentGroup(this.config, t, gh),
                  n = new up(
                    [],
                    Object.freeze({}),
                    Object.freeze(Object.assign({}, this.urlTree.queryParams)),
                    this.urlTree.fragment,
                    {},
                    gh,
                    this.rootComponentType,
                    null,
                    this.urlTree.root,
                    -1,
                    {},
                  ),
                  r = new np(n, e),
                  o = new lp(this.url, r);
                return this.inheritParamsAndData(o._root), ic(o);
              } catch (i) {
                return new C(function(t) {
                  return t.error(i);
                });
              }
            }),
            (t.prototype.inheritParamsAndData = function(t) {
              var e = this,
                n = t.value,
                r = ap(n, this.paramsInheritanceStrategy);
              (n.params = Object.freeze(r.params)),
                (n.data = Object.freeze(r.data)),
                t.children.forEach(function(t) {
                  return e.inheritParamsAndData(t);
                });
            }),
            (t.prototype.processSegmentGroup = function(t, e, n) {
              return 0 === e.segments.length && e.hasChildren()
                ? this.processChildren(t, e)
                : this.processSegment(t, e, e.segments, n);
            }),
            (t.prototype.processChildren = function(t, e) {
              var n,
                r = this,
                o = Mh(e, function(e, n) {
                  return r.processSegmentGroup(t, e, n);
                });
              return (
                (n = {}),
                o.forEach(function(t) {
                  var e = n[t.value.outlet];
                  if (e) {
                    var r = e.url
                        .map(function(t) {
                          return t.toString();
                        })
                        .join('/'),
                      o = t.value.url
                        .map(function(t) {
                          return t.toString();
                        })
                        .join('/');
                    throw new Error(
                      "Two segments cannot have the same outlet name: '" + r + "' and '" + o + "'.",
                    );
                  }
                  n[t.value.outlet] = t.value;
                }),
                o.sort(function(t, e) {
                  return t.value.outlet === gh
                    ? -1
                    : e.value.outlet === gh
                    ? 1
                    : t.value.outlet.localeCompare(e.value.outlet);
                }),
                o
              );
            }),
            (t.prototype.processSegment = function(t, e, n, r) {
              for (var o = 0, i = t; o < i.length; o++) {
                var s = i[o];
                try {
                  return this.processSegmentAgainstRoute(s, e, n, r);
                } catch (a) {
                  if (!(a instanceof Zp)) throw a;
                }
              }
              if (this.noLeftoversInUrl(e, n, r)) return [];
              throw new Zp();
            }),
            (t.prototype.noLeftoversInUrl = function(t, e, n) {
              return 0 === e.length && !t.children[n];
            }),
            (t.prototype.processSegmentAgainstRoute = function(t, e, n, r) {
              if (t.redirectTo) throw new Zp();
              if ((t.outlet || gh) !== r) throw new Zp();
              var o,
                i = [],
                s = [];
              if ('**' === t.path) {
                var a = n.length > 0 ? kh(n).parameters : {};
                o = new up(
                  n,
                  a,
                  Object.freeze(Object.assign({}, this.urlTree.queryParams)),
                  this.urlTree.fragment,
                  nf(t),
                  r,
                  t.component,
                  t,
                  Jp(e),
                  Yp(e) + n.length,
                  rf(t),
                );
              } else {
                var u = (function(t, e, n) {
                  if ('' === e.path) {
                    if ('full' === e.pathMatch && (t.hasChildren() || n.length > 0)) throw new Zp();
                    return { consumedSegments: [], lastChild: 0, parameters: {} };
                  }
                  var r = (e.matcher || wh)(n, t, e);
                  if (!r) throw new Zp();
                  var o = {};
                  Ah(r.posParams, function(t, e) {
                    o[e] = t.path;
                  });
                  var i =
                    r.consumed.length > 0
                      ? Object.assign({}, o, r.consumed[r.consumed.length - 1].parameters)
                      : o;
                  return {
                    consumedSegments: r.consumed,
                    lastChild: r.consumed.length,
                    parameters: i,
                  };
                })(e, t, n);
                (i = u.consumedSegments),
                  (s = n.slice(u.lastChild)),
                  (o = new up(
                    i,
                    u.parameters,
                    Object.freeze(Object.assign({}, this.urlTree.queryParams)),
                    this.urlTree.fragment,
                    nf(t),
                    r,
                    t.component,
                    t,
                    Jp(e),
                    Yp(e) + i.length,
                    rf(t),
                  ));
              }
              var l = (function(t) {
                  return t.children ? t.children : t.loadChildren ? t._loadedConfig.routes : [];
                })(t),
                c = Xp(e, i, s, l, this.relativeLinkResolution),
                h = c.segmentGroup,
                p = c.slicedSegments;
              if (0 === p.length && h.hasChildren()) {
                var f = this.processChildren(l, h);
                return [new np(o, f)];
              }
              if (0 === l.length && 0 === p.length) return [new np(o, [])];
              var d = this.processSegment(l, h, p, gh);
              return [new np(o, d)];
            }),
            t
          );
        })();
      function Jp(t) {
        for (var e = t; e._sourceSegment; ) e = e._sourceSegment;
        return e;
      }
      function Yp(t) {
        for (var e = t, n = e._segmentIndexShift ? e._segmentIndexShift : 0; e._sourceSegment; )
          n += (e = e._sourceSegment)._segmentIndexShift ? e._segmentIndexShift : 0;
        return n - 1;
      }
      function Xp(t, e, n, r, o) {
        if (
          n.length > 0 &&
          (function(t, e, n) {
            return n.some(function(n) {
              return tf(t, e, n) && ef(n) !== gh;
            });
          })(t, n, r)
        ) {
          var i = new Dh(
            e,
            (function(t, e, n, r) {
              var o = {};
              (o[gh] = r), (r._sourceSegment = t), (r._segmentIndexShift = e.length);
              for (var i = 0, s = n; i < s.length; i++) {
                var a = s[i];
                if ('' === a.path && ef(a) !== gh) {
                  var u = new Dh([], {});
                  (u._sourceSegment = t), (u._segmentIndexShift = e.length), (o[ef(a)] = u);
                }
              }
              return o;
            })(t, e, r, new Dh(n, t.children)),
          );
          return (
            (i._sourceSegment = t),
            (i._segmentIndexShift = e.length),
            { segmentGroup: i, slicedSegments: [] }
          );
        }
        if (
          0 === n.length &&
          (function(t, e, n) {
            return n.some(function(n) {
              return tf(t, e, n);
            });
          })(t, n, r)
        ) {
          var s = new Dh(
            t.segments,
            (function(t, e, n, r, o, i) {
              for (var s = {}, a = 0, u = r; a < u.length; a++) {
                var l = u[a];
                if (tf(t, n, l) && !o[ef(l)]) {
                  var c = new Dh([], {});
                  (c._sourceSegment = t),
                    (c._segmentIndexShift = 'legacy' === i ? t.segments.length : e.length),
                    (s[ef(l)] = c);
                }
              }
              return Object.assign({}, o, s);
            })(t, e, n, r, t.children, o),
          );
          return (
            (s._sourceSegment = t),
            (s._segmentIndexShift = e.length),
            { segmentGroup: s, slicedSegments: n }
          );
        }
        var a = new Dh(t.segments, t.children);
        return (
          (a._sourceSegment = t),
          (a._segmentIndexShift = e.length),
          { segmentGroup: a, slicedSegments: n }
        );
      }
      function tf(t, e, n) {
        return (
          (!(t.hasChildren() || e.length > 0) || 'full' !== n.pathMatch) &&
          '' === n.path &&
          void 0 === n.redirectTo
        );
      }
      function ef(t) {
        return t.outlet || gh;
      }
      function nf(t) {
        return t.data || {};
      }
      function rf(t) {
        return t.resolve || {};
      }
      function of(t, e, n, r) {
        var o = Hp(t, e, r);
        return Ih(o.resolve ? o.resolve(e, n) : o(e, n));
      }
      function sf(t) {
        return function(e) {
          return e.pipe(
            Lc(function(e) {
              var n = t(e);
              return n
                ? z(n).pipe(
                    L(function() {
                      return e;
                    }),
                  )
                : z([e]);
            }),
          );
        };
      }
      var af = function() {},
        uf = (function() {
          function t() {}
          return (
            (t.prototype.shouldDetach = function(t) {
              return !1;
            }),
            (t.prototype.store = function(t, e) {}),
            (t.prototype.shouldAttach = function(t) {
              return !1;
            }),
            (t.prototype.retrieve = function(t) {
              return null;
            }),
            (t.prototype.shouldReuseRoute = function(t, e) {
              return t.routeConfig === e.routeConfig;
            }),
            t
          );
        })(),
        lf = new Tt('ROUTES'),
        cf = (function() {
          function t(t, e, n, r) {
            (this.loader = t),
              (this.compiler = e),
              (this.onLoadStartListener = n),
              (this.onLoadEndListener = r);
          }
          return (
            (t.prototype.load = function(t, e) {
              var n = this;
              return (
                this.onLoadStartListener && this.onLoadStartListener(e),
                this.loadModuleFactory(e.loadChildren).pipe(
                  L(function(r) {
                    n.onLoadEndListener && n.onLoadEndListener(e);
                    var o = r.create(t);
                    return new Ch(Oh(o.injector.get(lf)).map(xh), o);
                  }),
                )
              );
            }),
            (t.prototype.loadModuleFactory = function(t) {
              var e = this;
              return 'string' == typeof t
                ? z(this.loader.load(t))
                : Ih(t()).pipe(
                    q(function(t) {
                      return t instanceof Lt ? ic(t) : z(e.compiler.compileModuleAsync(t));
                    }),
                  );
            }),
            t
          );
        })(),
        hf = function() {},
        pf = (function() {
          function t() {}
          return (
            (t.prototype.shouldProcessUrl = function(t) {
              return !0;
            }),
            (t.prototype.extract = function(t) {
              return t;
            }),
            (t.prototype.merge = function(t, e) {
              return t;
            }),
            t
          );
        })();
      function ff(t) {
        throw t;
      }
      function df(t, e, n) {
        return e.parse('/');
      }
      function yf(t, e) {
        return ic(null);
      }
      var gf = (function() {
          function t(t, e, n, r, o, i, s, a) {
            var u = this;
            (this.rootComponentType = t),
              (this.urlSerializer = e),
              (this.rootContexts = n),
              (this.location = r),
              (this.config = a),
              (this.lastSuccessfulNavigation = null),
              (this.currentNavigation = null),
              (this.navigationId = 0),
              (this.isNgZoneEnabled = !1),
              (this.events = new O()),
              (this.errorHandler = ff),
              (this.malformedUriErrorHandler = df),
              (this.navigated = !1),
              (this.lastSuccessfulId = -1),
              (this.hooks = { beforePreactivation: yf, afterPreactivation: yf }),
              (this.urlHandlingStrategy = new pf()),
              (this.routeReuseStrategy = new uf()),
              (this.onSameUrlNavigation = 'ignore'),
              (this.paramsInheritanceStrategy = 'emptyOnly'),
              (this.urlUpdateStrategy = 'deferred'),
              (this.relativeLinkResolution = 'legacy'),
              (this.ngModule = o.get(Vt)),
              (this.console = o.get(Uo));
            var l = o.get(ii);
            (this.isNgZoneEnabled = l instanceof ii),
              this.resetConfig(a),
              (this.currentUrlTree = new Rh(new Dh([], {}), {}, null)),
              (this.rawUrlTree = this.currentUrlTree),
              (this.browserUrlTree = this.currentUrlTree),
              (this.configLoader = new cf(
                i,
                s,
                function(t) {
                  return u.triggerEvent(new uh(t));
                },
                function(t) {
                  return u.triggerEvent(new lh(t));
                },
              )),
              (this.routerState = ip(this.currentUrlTree, this.rootComponentType)),
              (this.transitions = new sc({
                id: 0,
                currentUrlTree: this.currentUrlTree,
                currentRawUrl: this.currentUrlTree,
                extractedUrl: this.urlHandlingStrategy.extract(this.currentUrlTree),
                urlAfterRedirects: this.urlHandlingStrategy.extract(this.currentUrlTree),
                rawUrl: this.currentUrlTree,
                extras: {},
                resolve: null,
                reject: null,
                promise: Promise.resolve(!0),
                source: 'imperative',
                restoredState: null,
                currentSnapshot: this.routerState.snapshot,
                targetSnapshot: null,
                currentRouterState: this.routerState,
                targetRouterState: null,
                guards: { canActivateChecks: [], canDeactivateChecks: [] },
                guardsResult: null,
              })),
              (this.navigations = this.setupNavigations(this.transitions)),
              this.processNavigations();
          }
          return (
            (t.prototype.setupNavigations = function(t) {
              var e = this,
                n = this.events;
              return t.pipe(
                yc(function(t) {
                  return 0 !== t.id;
                }),
                L(function(t) {
                  return Object.assign({}, t, {
                    extractedUrl: e.urlHandlingStrategy.extract(t.rawUrl),
                  });
                }),
                Lc(function(t) {
                  var r,
                    o,
                    i,
                    s = !1,
                    a = !1;
                  return ic(t).pipe(
                    Qc(function(t) {
                      e.currentNavigation = {
                        id: t.id,
                        initialUrl: t.currentRawUrl,
                        extractedUrl: t.extractedUrl,
                        trigger: t.source,
                        extras: t.extras,
                        previousNavigation: e.lastSuccessfulNavigation
                          ? Object.assign({}, e.lastSuccessfulNavigation, {
                              previousNavigation: null,
                            })
                          : null,
                      };
                    }),
                    Lc(function(t) {
                      var r,
                        o,
                        i,
                        s,
                        a =
                          !e.navigated || t.extractedUrl.toString() !== e.browserUrlTree.toString();
                      if (
                        ('reload' === e.onSameUrlNavigation || a) &&
                        e.urlHandlingStrategy.shouldProcessUrl(t.rawUrl)
                      )
                        return ic(t).pipe(
                          Lc(function(t) {
                            var r = e.transitions.getValue();
                            return (
                              n.next(
                                new Xc(
                                  t.id,
                                  e.serializeUrl(t.extractedUrl),
                                  t.source,
                                  t.restoredState,
                                ),
                              ),
                              r !== e.transitions.getValue() ? hc : [t]
                            );
                          }),
                          Lc(function(t) {
                            return Promise.resolve(t);
                          }),
                          ((r = e.ngModule.injector),
                          (o = e.configLoader),
                          (i = e.urlSerializer),
                          (s = e.config),
                          function(t) {
                            return t.pipe(
                              Lc(function(t) {
                                return (function(t, e, n, r, o) {
                                  return new Dp(t, e, n, r, o).apply();
                                })(r, o, i, t.extractedUrl, s).pipe(
                                  L(function(e) {
                                    return Object.assign({}, t, { urlAfterRedirects: e });
                                  }),
                                );
                              }),
                            );
                          }),
                          Qc(function(t) {
                            e.currentNavigation = Object.assign({}, e.currentNavigation, {
                              finalUrl: t.urlAfterRedirects,
                            });
                          }),
                          (function(t, n, r, o, i) {
                            return function(r) {
                              return r.pipe(
                                q(function(r) {
                                  return (function(t, e, n, r, o, i) {
                                    return (
                                      void 0 === o && (o = 'emptyOnly'),
                                      void 0 === i && (i = 'legacy'),
                                      new $p(t, e, n, r, o, i).recognize()
                                    );
                                  })(
                                    t,
                                    n,
                                    r.urlAfterRedirects,
                                    ((s = r.urlAfterRedirects), e.serializeUrl(s)),
                                    o,
                                    i,
                                  ).pipe(
                                    L(function(t) {
                                      return Object.assign({}, r, { targetSnapshot: t });
                                    }),
                                  );
                                  var s;
                                }),
                              );
                            };
                          })(
                            e.rootComponentType,
                            e.config,
                            0,
                            e.paramsInheritanceStrategy,
                            e.relativeLinkResolution,
                          ),
                          Qc(function(t) {
                            'eager' === e.urlUpdateStrategy &&
                              (t.extras.skipLocationChange ||
                                e.setBrowserUrl(
                                  t.urlAfterRedirects,
                                  !!t.extras.replaceUrl,
                                  t.id,
                                  t.extras.state,
                                ),
                              (e.browserUrlTree = t.urlAfterRedirects));
                          }),
                          Qc(function(t) {
                            var r = new rh(
                              t.id,
                              e.serializeUrl(t.extractedUrl),
                              e.serializeUrl(t.urlAfterRedirects),
                              t.targetSnapshot,
                            );
                            n.next(r);
                          }),
                        );
                      if (
                        a &&
                        e.rawUrlTree &&
                        e.urlHandlingStrategy.shouldProcessUrl(e.rawUrlTree)
                      ) {
                        var u = t.id,
                          l = t.extractedUrl,
                          c = t.source,
                          h = t.restoredState,
                          p = t.extras,
                          f = new Xc(u, e.serializeUrl(l), c, h);
                        n.next(f);
                        var d = ip(l, e.rootComponentType).snapshot;
                        return ic(
                          Object.assign({}, t, {
                            targetSnapshot: d,
                            urlAfterRedirects: l,
                            extras: Object.assign({}, p, {
                              skipLocationChange: !1,
                              replaceUrl: !1,
                            }),
                          }),
                        );
                      }
                      return (
                        (e.rawUrlTree = t.rawUrl),
                        (e.browserUrlTree = t.urlAfterRedirects),
                        t.resolve(null),
                        hc
                      );
                    }),
                    sf(function(t) {
                      var n = t.targetSnapshot,
                        r = t.id,
                        o = t.extractedUrl,
                        i = t.rawUrl,
                        s = t.extras,
                        a = s.skipLocationChange,
                        u = s.replaceUrl;
                      return e.hooks.beforePreactivation(n, {
                        navigationId: r,
                        appliedUrlTree: o,
                        rawUrlTree: i,
                        skipLocationChange: !!a,
                        replaceUrl: !!u,
                      });
                    }),
                    Qc(function(t) {
                      var n = new oh(
                        t.id,
                        e.serializeUrl(t.extractedUrl),
                        e.serializeUrl(t.urlAfterRedirects),
                        t.targetSnapshot,
                      );
                      e.triggerEvent(n);
                    }),
                    L(function(t) {
                      return Object.assign({}, t, {
                        guards:
                          ((n = t.targetSnapshot),
                          (r = t.currentSnapshot),
                          (o = e.rootContexts),
                          (i = n._root),
                          (function t(e, n, r, o, i) {
                            void 0 === i &&
                              (i = { canDeactivateChecks: [], canActivateChecks: [] });
                            var s = rp(n);
                            return (
                              e.children.forEach(function(e) {
                                !(function(e, n, r, o, i) {
                                  void 0 === i &&
                                    (i = { canDeactivateChecks: [], canActivateChecks: [] });
                                  var s = e.value,
                                    a = n ? n.value : null,
                                    u = r ? r.getContext(e.value.outlet) : null;
                                  if (a && s.routeConfig === a.routeConfig) {
                                    var l = (function(t, e, n) {
                                      if ('function' == typeof n) return n(t, e);
                                      switch (n) {
                                        case 'pathParamsChange':
                                          return !jh(t.url, e.url);
                                        case 'pathParamsOrQueryParamsChange':
                                          return (
                                            !jh(t.url, e.url) || !Ph(t.queryParams, e.queryParams)
                                          );
                                        case 'always':
                                          return !0;
                                        case 'paramsOrQueryParamsChange':
                                          return !fp(t, e) || !Ph(t.queryParams, e.queryParams);
                                        case 'paramsChange':
                                        default:
                                          return !fp(t, e);
                                      }
                                    })(a, s, s.routeConfig.runGuardsAndResolvers);
                                    l
                                      ? i.canActivateChecks.push(new Lp(o))
                                      : ((s.data = a.data), (s._resolvedData = a._resolvedData)),
                                      t(e, n, s.component ? (u ? u.children : null) : r, o, i),
                                      l &&
                                        i.canDeactivateChecks.push(
                                          new Up((u && u.outlet && u.outlet.component) || null, a),
                                        );
                                  } else
                                    a && Bp(n, u, i),
                                      i.canActivateChecks.push(new Lp(o)),
                                      t(e, null, s.component ? (u ? u.children : null) : r, o, i);
                                })(e, s[e.value.outlet], r, o.concat([e.value]), i),
                                  delete s[e.value.outlet];
                              }),
                              Ah(s, function(t, e) {
                                return Bp(t, r.getContext(e), i);
                              }),
                              i
                            );
                          })(i, r ? r._root : null, o, [i.value])),
                      });
                      var n, r, o, i;
                    }),
                    ((o = e.ngModule.injector),
                    (i = function(t) {
                      return e.triggerEvent(t);
                    }),
                    function(t) {
                      return t.pipe(
                        q(function(t) {
                          var e = t.targetSnapshot,
                            n = t.currentSnapshot,
                            r = t.guards,
                            s = r.canActivateChecks,
                            a = r.canDeactivateChecks;
                          return 0 === a.length && 0 === s.length
                            ? ic(Object.assign({}, t, { guardsResult: !0 }))
                            : (function(t, e, n, r) {
                                return z(t).pipe(
                                  q(function(t) {
                                    return (function(t, e, n, r, o) {
                                      var i =
                                        e && e.routeConfig ? e.routeConfig.canDeactivate : null;
                                      return i && 0 !== i.length
                                        ? ic(
                                            i.map(function(i) {
                                              var s,
                                                a = Hp(i, e, o);
                                              if (
                                                (function(t) {
                                                  return t && Pp(t.canDeactivate);
                                                })(a)
                                              )
                                                s = Ih(a.canDeactivate(t, e, n, r));
                                              else {
                                                if (!Pp(a))
                                                  throw new Error('Invalid CanDeactivate guard');
                                                s = Ih(a(t, e, n, r));
                                              }
                                              return s.pipe(jc());
                                            }),
                                          ).pipe(qp())
                                        : ic(!0);
                                    })(t.component, t.route, n, e, r);
                                  }),
                                  jc(function(t) {
                                    return !0 !== t;
                                  }, !0),
                                );
                              })(a, e, n, o).pipe(
                                q(function(t) {
                                  return t && 'boolean' == typeof t
                                    ? (function(t, e, n, r) {
                                        return z(e).pipe(
                                          Wc(function(e) {
                                            return z([
                                              Wp(e.route.parent, r),
                                              Gp(e.route, r),
                                              Kp(t, e.path, n),
                                              Qp(t, e.route, n),
                                            ]).pipe(
                                              dc(),
                                              jc(function(t) {
                                                return !0 !== t;
                                              }, !0),
                                            );
                                          }),
                                          jc(function(t) {
                                            return !0 !== t;
                                          }, !0),
                                        );
                                      })(e, s, o, i)
                                    : ic(t);
                                }),
                                L(function(e) {
                                  return Object.assign({}, t, { guardsResult: e });
                                }),
                              );
                        }),
                      );
                    }),
                    Qc(function(t) {
                      if (Op(t.guardsResult)) {
                        var n = bh('Redirecting to "' + e.serializeUrl(t.guardsResult) + '"');
                        throw ((n.url = t.guardsResult), n);
                      }
                    }),
                    Qc(function(t) {
                      var n = new ih(
                        t.id,
                        e.serializeUrl(t.extractedUrl),
                        e.serializeUrl(t.urlAfterRedirects),
                        t.targetSnapshot,
                        !!t.guardsResult,
                      );
                      e.triggerEvent(n);
                    }),
                    yc(function(t) {
                      if (!t.guardsResult) {
                        e.resetUrlToCurrentUrlTree();
                        var r = new eh(t.id, e.serializeUrl(t.extractedUrl), '');
                        return n.next(r), t.resolve(!1), !1;
                      }
                      return !0;
                    }),
                    sf(function(t) {
                      if (t.guards.canActivateChecks.length)
                        return ic(t).pipe(
                          Qc(function(t) {
                            var n = new sh(
                              t.id,
                              e.serializeUrl(t.extractedUrl),
                              e.serializeUrl(t.urlAfterRedirects),
                              t.targetSnapshot,
                            );
                            e.triggerEvent(n);
                          }),
                          (function(t, e) {
                            return function(n) {
                              return n.pipe(
                                q(function(n) {
                                  var r = n.targetSnapshot,
                                    o = n.guards.canActivateChecks;
                                  return o.length
                                    ? z(o).pipe(
                                        Wc(function(n) {
                                          return (function(t, e, n, r) {
                                            return (function(t, e, n, r) {
                                              var o = Object.keys(t);
                                              if (0 === o.length) return ic({});
                                              if (1 === o.length) {
                                                var i = o[0];
                                                return of(t[i], e, n, r).pipe(
                                                  L(function(t) {
                                                    var e;
                                                    return ((e = {})[i] = t), e;
                                                  }),
                                                );
                                              }
                                              var s = {};
                                              return z(o)
                                                .pipe(
                                                  q(function(o) {
                                                    return of(t[o], e, n, r).pipe(
                                                      L(function(t) {
                                                        return (s[o] = t), t;
                                                      }),
                                                    );
                                                  }),
                                                )
                                                .pipe(
                                                  kc(),
                                                  L(function() {
                                                    return s;
                                                  }),
                                                );
                                            })(t._resolve, t, e, r).pipe(
                                              L(function(e) {
                                                return (
                                                  (t._resolvedData = e),
                                                  (t.data = Object.assign(
                                                    {},
                                                    t.data,
                                                    ap(t, n).resolve,
                                                  )),
                                                  null
                                                );
                                              }),
                                            );
                                          })(n.route, r, t, e);
                                        }),
                                        (function(t, e) {
                                          return arguments.length >= 2
                                            ? function(n) {
                                                return _(zc(t, e), _c(1), xc(e))(n);
                                              }
                                            : function(e) {
                                                return _(
                                                  zc(function(e, n, r) {
                                                    return t(e, n, r + 1);
                                                  }),
                                                  _c(1),
                                                )(e);
                                              };
                                        })(function(t, e) {
                                          return t;
                                        }),
                                        L(function(t) {
                                          return n;
                                        }),
                                      )
                                    : ic(n);
                                }),
                              );
                            };
                          })(e.paramsInheritanceStrategy, e.ngModule.injector),
                          Qc(function(t) {
                            var n = new ah(
                              t.id,
                              e.serializeUrl(t.extractedUrl),
                              e.serializeUrl(t.urlAfterRedirects),
                              t.targetSnapshot,
                            );
                            e.triggerEvent(n);
                          }),
                        );
                    }),
                    sf(function(t) {
                      var n = t.targetSnapshot,
                        r = t.id,
                        o = t.extractedUrl,
                        i = t.rawUrl,
                        s = t.extras,
                        a = s.skipLocationChange,
                        u = s.replaceUrl;
                      return e.hooks.afterPreactivation(n, {
                        navigationId: r,
                        appliedUrlTree: o,
                        rawUrlTree: i,
                        skipLocationChange: !!a,
                        replaceUrl: !!u,
                      });
                    }),
                    L(function(t) {
                      var n,
                        r,
                        o,
                        i,
                        s =
                          ((n = e.routeReuseStrategy),
                          (r = t.targetSnapshot),
                          (o = t.currentRouterState),
                          (i = (function t(e, n, r) {
                            if (r && e.shouldReuseRoute(n.value, r.value.snapshot)) {
                              (u = r.value)._futureSnapshot = n.value;
                              var o = (function(e, n, r) {
                                return n.children.map(function(n) {
                                  for (var o = 0, i = r.children; o < i.length; o++) {
                                    var s = i[o];
                                    if (e.shouldReuseRoute(s.value.snapshot, n.value))
                                      return t(e, n, s);
                                  }
                                  return t(e, n);
                                });
                              })(e, n, r);
                              return new np(u, o);
                            }
                            var i = e.retrieve(n.value);
                            if (i) {
                              var s = i.route;
                              return (
                                (function t(e, n) {
                                  if (e.value.routeConfig !== n.value.routeConfig)
                                    throw new Error(
                                      'Cannot reattach ActivatedRouteSnapshot created from a different route',
                                    );
                                  if (e.children.length !== n.children.length)
                                    throw new Error(
                                      'Cannot reattach ActivatedRouteSnapshot with a different number of children',
                                    );
                                  n.value._futureSnapshot = e.value;
                                  for (var r = 0; r < e.children.length; ++r)
                                    t(e.children[r], n.children[r]);
                                })(n, s),
                                s
                              );
                            }
                            var a,
                              u = new sp(
                                new sc((a = n.value).url),
                                new sc(a.params),
                                new sc(a.queryParams),
                                new sc(a.fragment),
                                new sc(a.data),
                                a.outlet,
                                a.component,
                                a,
                              );
                            return (
                              (o = n.children.map(function(n) {
                                return t(e, n);
                              })),
                              new np(u, o)
                            );
                          })(n, r._root, o ? o._root : void 0)),
                          new op(i, r));
                      return Object.assign({}, t, { targetRouterState: s });
                    }),
                    Qc(function(t) {
                      (e.currentUrlTree = t.urlAfterRedirects),
                        (e.rawUrlTree = e.urlHandlingStrategy.merge(e.currentUrlTree, t.rawUrl)),
                        (e.routerState = t.targetRouterState),
                        'deferred' === e.urlUpdateStrategy &&
                          (t.extras.skipLocationChange ||
                            e.setBrowserUrl(
                              e.rawUrlTree,
                              !!t.extras.replaceUrl,
                              t.id,
                              t.extras.state,
                            ),
                          (e.browserUrlTree = t.urlAfterRedirects));
                    }),
                    (function(t, e, n) {
                      return L(function(r) {
                        return (
                          new Tp(e, r.targetRouterState, r.currentRouterState, n).activate(t), r
                        );
                      });
                    })(e.rootContexts, e.routeReuseStrategy, function(t) {
                      return e.triggerEvent(t);
                    }),
                    Qc({
                      next: function() {
                        s = !0;
                      },
                      complete: function() {
                        s = !0;
                      },
                    }),
                    ((r = function() {
                      if (!s && !a) {
                        e.resetUrlToCurrentUrlTree();
                        var r = new eh(
                          t.id,
                          e.serializeUrl(t.extractedUrl),
                          'Navigation ID ' +
                            t.id +
                            ' is not equal to the current navigation id ' +
                            e.navigationId,
                        );
                        n.next(r), t.resolve(!1);
                      }
                      e.currentNavigation = null;
                    }),
                    function(t) {
                      return t.lift(new $c(r));
                    }),
                    Ac(function(r) {
                      if (((a = !0), (u = r) && u[_h])) {
                        var o = Op(r.url);
                        o ||
                          ((e.navigated = !0),
                          e.resetStateAndUrl(t.currentRouterState, t.currentUrlTree, t.rawUrl));
                        var i = new eh(t.id, e.serializeUrl(t.extractedUrl), r.message);
                        n.next(i), t.resolve(!1), o && e.navigateByUrl(r.url);
                      } else {
                        e.resetStateAndUrl(t.currentRouterState, t.currentUrlTree, t.rawUrl);
                        var s = new nh(t.id, e.serializeUrl(t.extractedUrl), r);
                        n.next(s);
                        try {
                          t.resolve(e.errorHandler(r));
                        } catch (l) {
                          t.reject(l);
                        }
                      }
                      var u;
                      return hc;
                    }),
                  );
                }),
              );
            }),
            (t.prototype.resetRootComponentType = function(t) {
              (this.rootComponentType = t),
                (this.routerState.root.component = this.rootComponentType);
            }),
            (t.prototype.getTransition = function() {
              var t = this.transitions.value;
              return (t.urlAfterRedirects = this.browserUrlTree), t;
            }),
            (t.prototype.setTransition = function(t) {
              this.transitions.next(Object.assign({}, this.getTransition(), t));
            }),
            (t.prototype.initialNavigation = function() {
              this.setUpLocationChangeListener(),
                0 === this.navigationId &&
                  this.navigateByUrl(this.location.path(!0), { replaceUrl: !0 });
            }),
            (t.prototype.setUpLocationChangeListener = function() {
              var t = this;
              this.locationSubscription ||
                (this.locationSubscription = this.location.subscribe(function(e) {
                  var n = t.parseUrl(e.url),
                    r = 'popstate' === e.type ? 'popstate' : 'hashchange',
                    o = e.state && e.state.navigationId ? e.state : null;
                  setTimeout(function() {
                    t.scheduleNavigation(n, r, o, { replaceUrl: !0 });
                  }, 0);
                }));
            }),
            Object.defineProperty(t.prototype, 'url', {
              get: function() {
                return this.serializeUrl(this.currentUrlTree);
              },
              enumerable: !0,
              configurable: !0,
            }),
            (t.prototype.getCurrentNavigation = function() {
              return this.currentNavigation;
            }),
            (t.prototype.triggerEvent = function(t) {
              this.events.next(t);
            }),
            (t.prototype.resetConfig = function(t) {
              Sh(t), (this.config = t.map(xh)), (this.navigated = !1), (this.lastSuccessfulId = -1);
            }),
            (t.prototype.ngOnDestroy = function() {
              this.dispose();
            }),
            (t.prototype.dispose = function() {
              this.locationSubscription &&
                (this.locationSubscription.unsubscribe(), (this.locationSubscription = null));
            }),
            (t.prototype.createUrlTree = function(t, e) {
              void 0 === e && (e = {});
              var n = e.relativeTo,
                r = e.queryParams,
                o = e.fragment,
                i = e.preserveQueryParams,
                s = e.queryParamsHandling,
                a = e.preserveFragment;
              Xt() &&
                i &&
                console &&
                console.warn &&
                console.warn('preserveQueryParams is deprecated, use queryParamsHandling instead.');
              var u = n || this.routerState.root,
                l = a ? this.currentUrlTree.fragment : o,
                c = null;
              if (s)
                switch (s) {
                  case 'merge':
                    c = Object.assign({}, this.currentUrlTree.queryParams, r);
                    break;
                  case 'preserve':
                    c = this.currentUrlTree.queryParams;
                    break;
                  default:
                    c = r || null;
                }
              else c = i ? this.currentUrlTree.queryParams : r || null;
              return (
                null !== c && (c = this.removeEmptyProps(c)),
                (function(t, e, n, r, o) {
                  if (0 === n.length) return yp(e.root, e.root, e, r, o);
                  var i = (function(t) {
                    if ('string' == typeof t[0] && 1 === t.length && '/' === t[0])
                      return new gp(!0, 0, t);
                    var e = 0,
                      n = !1,
                      r = t.reduce(function(t, r, o) {
                        if ('object' == typeof r && null != r) {
                          if (r.outlets) {
                            var i = {};
                            return (
                              Ah(r.outlets, function(t, e) {
                                i[e] = 'string' == typeof t ? t.split('/') : t;
                              }),
                              t.concat([{ outlets: i }])
                            );
                          }
                          if (r.segmentPath) return t.concat([r.segmentPath]);
                        }
                        return 'string' != typeof r
                          ? t.concat([r])
                          : 0 === o
                          ? (r.split('/').forEach(function(r, o) {
                              (0 == o && '.' === r) ||
                                (0 == o && '' === r
                                  ? (n = !0)
                                  : '..' === r
                                  ? e++
                                  : '' != r && t.push(r));
                            }),
                            t)
                          : t.concat([r]);
                      }, []);
                    return new gp(n, e, r);
                  })(n);
                  if (i.toRoot()) return yp(e.root, new Dh([], {}), e, r, o);
                  var s = (function(t, e, n) {
                      if (t.isAbsolute) return new mp(e.root, !0, 0);
                      if (-1 === n.snapshot._lastPathIndex)
                        return new mp(n.snapshot._urlSegment, !0, 0);
                      var r = dp(t.commands[0]) ? 0 : 1;
                      return (function(t, e, n) {
                        for (var r = t, o = e, i = n; i > o; ) {
                          if (((i -= o), !(r = r.parent)))
                            throw new Error("Invalid number of '../'");
                          o = r.segments.length;
                        }
                        return new mp(r, !1, o - i);
                      })(
                        n.snapshot._urlSegment,
                        n.snapshot._lastPathIndex + r,
                        t.numberOfDoubleDots,
                      );
                    })(i, e, t),
                    a = s.processChildren
                      ? bp(s.segmentGroup, s.index, i.commands)
                      : _p(s.segmentGroup, s.index, i.commands);
                  return yp(s.segmentGroup, a, e, r, o);
                })(u, this.currentUrlTree, t, c, l)
              );
            }),
            (t.prototype.navigateByUrl = function(t, e) {
              void 0 === e && (e = { skipLocationChange: !1 }),
                Xt() &&
                  this.isNgZoneEnabled &&
                  !ii.isInAngularZone() &&
                  this.console.warn(
                    "Navigation triggered outside Angular zone, did you forget to call 'ngZone.run()'?",
                  );
              var n = Op(t) ? t : this.parseUrl(t),
                r = this.urlHandlingStrategy.merge(n, this.rawUrlTree);
              return this.scheduleNavigation(r, 'imperative', null, e);
            }),
            (t.prototype.navigate = function(t, e) {
              return (
                void 0 === e && (e = { skipLocationChange: !1 }),
                (function(t) {
                  for (var e = 0; e < t.length; e++) {
                    var n = t[e];
                    if (null == n)
                      throw new Error(
                        'The requested path contains ' + n + ' segment at index ' + e,
                      );
                  }
                })(t),
                this.navigateByUrl(this.createUrlTree(t, e), e)
              );
            }),
            (t.prototype.serializeUrl = function(t) {
              return this.urlSerializer.serialize(t);
            }),
            (t.prototype.parseUrl = function(t) {
              var e;
              try {
                e = this.urlSerializer.parse(t);
              } catch (n) {
                e = this.malformedUriErrorHandler(n, this.urlSerializer, t);
              }
              return e;
            }),
            (t.prototype.isActive = function(t, e) {
              if (Op(t)) return Nh(this.currentUrlTree, t, e);
              var n = this.parseUrl(t);
              return Nh(this.currentUrlTree, n, e);
            }),
            (t.prototype.removeEmptyProps = function(t) {
              return Object.keys(t).reduce(function(e, n) {
                var r = t[n];
                return null != r && (e[n] = r), e;
              }, {});
            }),
            (t.prototype.processNavigations = function() {
              var t = this;
              this.navigations.subscribe(
                function(e) {
                  (t.navigated = !0),
                    (t.lastSuccessfulId = e.id),
                    t.events.next(
                      new th(
                        e.id,
                        t.serializeUrl(e.extractedUrl),
                        t.serializeUrl(t.currentUrlTree),
                      ),
                    ),
                    (t.lastSuccessfulNavigation = t.currentNavigation),
                    (t.currentNavigation = null),
                    e.resolve(!0);
                },
                function(e) {
                  t.console.warn('Unhandled Navigation Error: ');
                },
              );
            }),
            (t.prototype.scheduleNavigation = function(t, e, n, r) {
              var o = this.getTransition();
              if (
                o &&
                'imperative' !== e &&
                'imperative' === o.source &&
                o.rawUrl.toString() === t.toString()
              )
                return Promise.resolve(!0);
              if (
                o &&
                'hashchange' == e &&
                'popstate' === o.source &&
                o.rawUrl.toString() === t.toString()
              )
                return Promise.resolve(!0);
              if (
                o &&
                'popstate' == e &&
                'hashchange' === o.source &&
                o.rawUrl.toString() === t.toString()
              )
                return Promise.resolve(!0);
              var i = null,
                s = null,
                a = new Promise(function(t, e) {
                  (i = t), (s = e);
                }),
                u = ++this.navigationId;
              return (
                this.setTransition({
                  id: u,
                  source: e,
                  restoredState: n,
                  currentUrlTree: this.currentUrlTree,
                  currentRawUrl: this.rawUrlTree,
                  rawUrl: t,
                  extras: r,
                  resolve: i,
                  reject: s,
                  promise: a,
                  currentSnapshot: this.routerState.snapshot,
                  currentRouterState: this.routerState,
                }),
                a.catch(function(t) {
                  return Promise.reject(t);
                })
              );
            }),
            (t.prototype.setBrowserUrl = function(t, e, n, r) {
              var o = this.urlSerializer.serialize(t);
              (r = r || {}),
                this.location.isCurrentPathEqualTo(o) || e
                  ? this.location.replaceState(o, '', Object.assign({}, r, { navigationId: n }))
                  : this.location.go(o, '', Object.assign({}, r, { navigationId: n }));
            }),
            (t.prototype.resetStateAndUrl = function(t, e, n) {
              (this.routerState = t),
                (this.currentUrlTree = e),
                (this.rawUrlTree = this.urlHandlingStrategy.merge(this.currentUrlTree, n)),
                this.resetUrlToCurrentUrlTree();
            }),
            (t.prototype.resetUrlToCurrentUrlTree = function() {
              this.location.replaceState(this.urlSerializer.serialize(this.rawUrlTree), '', {
                navigationId: this.lastSuccessfulId,
              });
            }),
            t
          );
        })(),
        mf = (function() {
          function t(t, e, n) {
            var r = this;
            (this.router = t),
              (this.route = e),
              (this.locationStrategy = n),
              (this.commands = []),
              (this.subscription = t.events.subscribe(function(t) {
                t instanceof th && r.updateTargetUrlAndHref();
              }));
          }
          return (
            Object.defineProperty(t.prototype, 'routerLink', {
              set: function(t) {
                this.commands = null != t ? (Array.isArray(t) ? t : [t]) : [];
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, 'preserveQueryParams', {
              set: function(t) {
                Xt() &&
                  console &&
                  console.warn &&
                  console.warn(
                    'preserveQueryParams is deprecated, use queryParamsHandling instead.',
                  ),
                  (this.preserve = t);
              },
              enumerable: !0,
              configurable: !0,
            }),
            (t.prototype.ngOnChanges = function(t) {
              this.updateTargetUrlAndHref();
            }),
            (t.prototype.ngOnDestroy = function() {
              this.subscription.unsubscribe();
            }),
            (t.prototype.onClick = function(t, e, n, r) {
              if (0 !== t || e || n || r) return !0;
              if ('string' == typeof this.target && '_self' != this.target) return !0;
              var o = {
                skipLocationChange: vf(this.skipLocationChange),
                replaceUrl: vf(this.replaceUrl),
                state: this.state,
              };
              return this.router.navigateByUrl(this.urlTree, o), !1;
            }),
            (t.prototype.updateTargetUrlAndHref = function() {
              this.href = this.locationStrategy.prepareExternalUrl(
                this.router.serializeUrl(this.urlTree),
              );
            }),
            Object.defineProperty(t.prototype, 'urlTree', {
              get: function() {
                return this.router.createUrlTree(this.commands, {
                  relativeTo: this.route,
                  queryParams: this.queryParams,
                  fragment: this.fragment,
                  preserveQueryParams: vf(this.preserve),
                  queryParamsHandling: this.queryParamsHandling,
                  preserveFragment: vf(this.preserveFragment),
                });
              },
              enumerable: !0,
              configurable: !0,
            }),
            t
          );
        })();
      function vf(t) {
        return '' === t || !!t;
      }
      var _f = function() {
          (this.outlet = null),
            (this.route = null),
            (this.resolver = null),
            (this.children = new bf()),
            (this.attachRef = null);
        },
        bf = (function() {
          function t() {
            this.contexts = new Map();
          }
          return (
            (t.prototype.onChildOutletCreated = function(t, e) {
              var n = this.getOrCreateContext(t);
              (n.outlet = e), this.contexts.set(t, n);
            }),
            (t.prototype.onChildOutletDestroyed = function(t) {
              var e = this.getContext(t);
              e && (e.outlet = null);
            }),
            (t.prototype.onOutletDeactivated = function() {
              var t = this.contexts;
              return (this.contexts = new Map()), t;
            }),
            (t.prototype.onOutletReAttached = function(t) {
              this.contexts = t;
            }),
            (t.prototype.getOrCreateContext = function(t) {
              var e = this.getContext(t);
              return e || ((e = new _f()), this.contexts.set(t, e)), e;
            }),
            (t.prototype.getContext = function(t) {
              return this.contexts.get(t) || null;
            }),
            t
          );
        })(),
        wf = (function() {
          function t(t, e, n, r, o) {
            (this.parentContexts = t),
              (this.location = e),
              (this.resolver = n),
              (this.changeDetector = o),
              (this.activated = null),
              (this._activatedRoute = null),
              (this.activateEvents = new ko()),
              (this.deactivateEvents = new ko()),
              (this.name = r || gh),
              t.onChildOutletCreated(this.name, this);
          }
          return (
            (t.prototype.ngOnDestroy = function() {
              this.parentContexts.onChildOutletDestroyed(this.name);
            }),
            (t.prototype.ngOnInit = function() {
              if (!this.activated) {
                var t = this.parentContexts.getContext(this.name);
                t &&
                  t.route &&
                  (t.attachRef
                    ? this.attach(t.attachRef, t.route)
                    : this.activateWith(t.route, t.resolver || null));
              }
            }),
            Object.defineProperty(t.prototype, 'isActivated', {
              get: function() {
                return !!this.activated;
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, 'component', {
              get: function() {
                if (!this.activated) throw new Error('Outlet is not activated');
                return this.activated.instance;
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, 'activatedRoute', {
              get: function() {
                if (!this.activated) throw new Error('Outlet is not activated');
                return this._activatedRoute;
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, 'activatedRouteData', {
              get: function() {
                return this._activatedRoute ? this._activatedRoute.snapshot.data : {};
              },
              enumerable: !0,
              configurable: !0,
            }),
            (t.prototype.detach = function() {
              if (!this.activated) throw new Error('Outlet is not activated');
              this.location.detach();
              var t = this.activated;
              return (this.activated = null), (this._activatedRoute = null), t;
            }),
            (t.prototype.attach = function(t, e) {
              (this.activated = t), (this._activatedRoute = e), this.location.insert(t.hostView);
            }),
            (t.prototype.deactivate = function() {
              if (this.activated) {
                var t = this.component;
                this.activated.destroy(),
                  (this.activated = null),
                  (this._activatedRoute = null),
                  this.deactivateEvents.emit(t);
              }
            }),
            (t.prototype.activateWith = function(t, e) {
              if (this.isActivated) throw new Error('Cannot activate an already activated outlet');
              this._activatedRoute = t;
              var n = (e = e || this.resolver).resolveComponentFactory(
                  t._futureSnapshot.routeConfig.component,
                ),
                r = this.parentContexts.getOrCreateContext(this.name).children,
                o = new Cf(t, r, this.location.injector);
              (this.activated = this.location.createComponent(n, this.location.length, o)),
                this.changeDetector.markForCheck(),
                this.activateEvents.emit(this.activated.instance);
            }),
            t
          );
        })(),
        Cf = (function() {
          function t(t, e, n) {
            (this.route = t), (this.childContexts = e), (this.parent = n);
          }
          return (
            (t.prototype.get = function(t, e) {
              return t === sp ? this.route : t === bf ? this.childContexts : this.parent.get(t, e);
            }),
            t
          );
        })(),
        Sf = function() {},
        Ef = (function() {
          function t() {}
          return (
            (t.prototype.preload = function(t, e) {
              return e().pipe(
                Ac(function() {
                  return ic(null);
                }),
              );
            }),
            t
          );
        })(),
        Tf = (function() {
          function t() {}
          return (
            (t.prototype.preload = function(t, e) {
              return ic(null);
            }),
            t
          );
        })(),
        xf = (function() {
          function t(t, e, n, r, o) {
            (this.router = t),
              (this.injector = r),
              (this.preloadingStrategy = o),
              (this.loader = new cf(
                e,
                n,
                function(e) {
                  return t.triggerEvent(new uh(e));
                },
                function(e) {
                  return t.triggerEvent(new lh(e));
                },
              ));
          }
          return (
            (t.prototype.setUpPreloading = function() {
              var t = this;
              this.subscription = this.router.events
                .pipe(
                  yc(function(t) {
                    return t instanceof th;
                  }),
                  Wc(function() {
                    return t.preload();
                  }),
                )
                .subscribe(function() {});
            }),
            (t.prototype.preload = function() {
              var t = this.injector.get(Vt);
              return this.processRoutes(t, this.router.config);
            }),
            (t.prototype.ngOnDestroy = function() {
              this.subscription.unsubscribe();
            }),
            (t.prototype.processRoutes = function(t, e) {
              for (var n = [], r = 0, o = e; r < o.length; r++) {
                var i = o[r];
                if (i.loadChildren && !i.canLoad && i._loadedConfig) {
                  var s = i._loadedConfig;
                  n.push(this.processRoutes(s.module, s.routes));
                } else
                  i.loadChildren && !i.canLoad
                    ? n.push(this.preloadConfig(t, i))
                    : i.children && n.push(this.processRoutes(t, i.children));
              }
              return z(n).pipe(
                K(),
                L(function(t) {}),
              );
            }),
            (t.prototype.preloadConfig = function(t, e) {
              var n = this;
              return this.preloadingStrategy.preload(e, function() {
                return n.loader.load(t.injector, e).pipe(
                  q(function(t) {
                    return (e._loadedConfig = t), n.processRoutes(t.module, t.routes);
                  }),
                );
              });
            }),
            t
          );
        })(),
        Pf = (function() {
          function t(t, e, n) {
            void 0 === n && (n = {}),
              (this.router = t),
              (this.viewportScroller = e),
              (this.options = n),
              (this.lastId = 0),
              (this.lastSource = 'imperative'),
              (this.restoredId = 0),
              (this.store = {}),
              (n.scrollPositionRestoration = n.scrollPositionRestoration || 'disabled'),
              (n.anchorScrolling = n.anchorScrolling || 'disabled');
          }
          return (
            (t.prototype.init = function() {
              'disabled' !== this.options.scrollPositionRestoration &&
                this.viewportScroller.setHistoryScrollRestoration('manual'),
                (this.routerEventsSubscription = this.createScrollEvents()),
                (this.scrollEventsSubscription = this.consumeScrollEvents());
            }),
            (t.prototype.createScrollEvents = function() {
              var t = this;
              return this.router.events.subscribe(function(e) {
                e instanceof Xc
                  ? ((t.store[t.lastId] = t.viewportScroller.getScrollPosition()),
                    (t.lastSource = e.navigationTrigger),
                    (t.restoredId = e.restoredState ? e.restoredState.navigationId : 0))
                  : e instanceof th &&
                    ((t.lastId = e.id),
                    t.scheduleScrollEvent(e, t.router.parseUrl(e.urlAfterRedirects).fragment));
              });
            }),
            (t.prototype.consumeScrollEvents = function() {
              var t = this;
              return this.router.events.subscribe(function(e) {
                e instanceof dh &&
                  (e.position
                    ? 'top' === t.options.scrollPositionRestoration
                      ? t.viewportScroller.scrollToPosition([0, 0])
                      : 'enabled' === t.options.scrollPositionRestoration &&
                        t.viewportScroller.scrollToPosition(e.position)
                    : e.anchor && 'enabled' === t.options.anchorScrolling
                    ? t.viewportScroller.scrollToAnchor(e.anchor)
                    : 'disabled' !== t.options.scrollPositionRestoration &&
                      t.viewportScroller.scrollToPosition([0, 0]));
              });
            }),
            (t.prototype.scheduleScrollEvent = function(t, e) {
              this.router.triggerEvent(
                new dh(t, 'popstate' === this.lastSource ? this.store[this.restoredId] : null, e),
              );
            }),
            (t.prototype.ngOnDestroy = function() {
              this.routerEventsSubscription && this.routerEventsSubscription.unsubscribe(),
                this.scrollEventsSubscription && this.scrollEventsSubscription.unsubscribe();
            }),
            t
          );
        })(),
        Of = new Tt('ROUTER_CONFIGURATION'),
        kf = new Tt('ROUTER_FORROOT_GUARD'),
        Af = [
          ba,
          { provide: Vh, useClass: Lh },
          {
            provide: gf,
            useFactory: Mf,
            deps: [Si, Vh, bf, ba, Ie, Ti, $o, lf, Of, [hf, new at()], [af, new at()]],
          },
          bf,
          { provide: sp, useFactory: Vf, deps: [gf] },
          { provide: Ti, useClass: Oi },
          xf,
          Tf,
          Ef,
          { provide: Of, useValue: { enableTracing: !1 } },
        ];
      function If() {
        return new mi('Router', gf);
      }
      var Nf = (function() {
        function t(t, e) {}
        return (
          (t.forRoot = function(e, n) {
            return {
              ngModule: t,
              providers: [
                Af,
                jf(e),
                { provide: kf, useFactory: Ff, deps: [[gf, new at(), new lt()]] },
                { provide: Of, useValue: n || {} },
                { provide: va, useFactory: Df, deps: [ga, [new st(_a), new at()], Of] },
                { provide: Pf, useFactory: Rf, deps: [gf, Wa, Of] },
                { provide: Sf, useExisting: n && n.preloadingStrategy ? n.preloadingStrategy : Tf },
                { provide: mi, multi: !0, useFactory: If },
                [
                  Lf,
                  { provide: No, multi: !0, useFactory: Uf, deps: [Lf] },
                  { provide: Bf, useFactory: Hf, deps: [Lf] },
                  { provide: Lo, multi: !0, useExisting: Bf },
                ],
              ],
            };
          }),
          (t.forChild = function(e) {
            return { ngModule: t, providers: [jf(e)] };
          }),
          t
        );
      })();
      function Rf(t, e, n) {
        return n.scrollOffset && e.setOffset(n.scrollOffset), new Pf(t, e, n);
      }
      function Df(t, e, n) {
        return void 0 === n && (n = {}), n.useHash ? new Ca(t, e) : new Sa(t, e);
      }
      function Ff(t) {
        if (t)
          throw new Error(
            'RouterModule.forRoot() called twice. Lazy loaded modules should use RouterModule.forChild() instead.',
          );
        return 'guarded';
      }
      function jf(t) {
        return [
          { provide: Le, multi: !0, useValue: t },
          { provide: lf, multi: !0, useValue: t },
        ];
      }
      function Mf(t, e, n, r, o, i, s, a, u, l, c) {
        void 0 === u && (u = {});
        var h = new gf(null, e, n, r, o, i, s, Oh(a));
        if (
          (l && (h.urlHandlingStrategy = l),
          c && (h.routeReuseStrategy = c),
          u.errorHandler && (h.errorHandler = u.errorHandler),
          u.malformedUriErrorHandler && (h.malformedUriErrorHandler = u.malformedUriErrorHandler),
          u.enableTracing)
        ) {
          var p = Za();
          h.events.subscribe(function(t) {
            p.logGroup('Router Event: ' + t.constructor.name),
              p.log(t.toString()),
              p.log(t),
              p.logGroupEnd();
          });
        }
        return (
          u.onSameUrlNavigation && (h.onSameUrlNavigation = u.onSameUrlNavigation),
          u.paramsInheritanceStrategy &&
            (h.paramsInheritanceStrategy = u.paramsInheritanceStrategy),
          u.urlUpdateStrategy && (h.urlUpdateStrategy = u.urlUpdateStrategy),
          u.relativeLinkResolution && (h.relativeLinkResolution = u.relativeLinkResolution),
          h
        );
      }
      function Vf(t) {
        return t.routerState.root;
      }
      var Lf = (function() {
        function t(t) {
          (this.injector = t),
            (this.initNavigation = !1),
            (this.resultOfPreactivationDone = new O());
        }
        return (
          (t.prototype.appInitializer = function() {
            var t = this;
            return this.injector.get(ma, Promise.resolve(null)).then(function() {
              var e = null,
                n = new Promise(function(t) {
                  return (e = t);
                }),
                r = t.injector.get(gf),
                o = t.injector.get(Of);
              if (t.isLegacyDisabled(o) || t.isLegacyEnabled(o)) e(!0);
              else if ('disabled' === o.initialNavigation) r.setUpLocationChangeListener(), e(!0);
              else {
                if ('enabled' !== o.initialNavigation)
                  throw new Error(
                    "Invalid initialNavigation options: '" + o.initialNavigation + "'",
                  );
                (r.hooks.afterPreactivation = function() {
                  return t.initNavigation
                    ? ic(null)
                    : ((t.initNavigation = !0), e(!0), t.resultOfPreactivationDone);
                }),
                  r.initialNavigation();
              }
              return n;
            });
          }),
          (t.prototype.bootstrapListener = function(t) {
            var e = this.injector.get(Of),
              n = this.injector.get(xf),
              r = this.injector.get(Pf),
              o = this.injector.get(gf),
              i = this.injector.get(Si);
            t === i.components[0] &&
              (this.isLegacyEnabled(e)
                ? o.initialNavigation()
                : this.isLegacyDisabled(e) && o.setUpLocationChangeListener(),
              n.setUpPreloading(),
              r.init(),
              o.resetRootComponentType(i.componentTypes[0]),
              this.resultOfPreactivationDone.next(null),
              this.resultOfPreactivationDone.complete());
          }),
          (t.prototype.isLegacyEnabled = function(t) {
            return (
              'legacy_enabled' === t.initialNavigation ||
              !0 === t.initialNavigation ||
              void 0 === t.initialNavigation
            );
          }),
          (t.prototype.isLegacyDisabled = function(t) {
            return 'legacy_disabled' === t.initialNavigation || !1 === t.initialNavigation;
          }),
          t
        );
      })();
      function Uf(t) {
        return t.appInitializer.bind(t);
      }
      function Hf(t) {
        return t.bootstrapListener.bind(t);
      }
      var Bf = new Tt('Router Initializer'),
        zf = $n({ encapsulation: 2, styles: [], data: {} });
      function qf(t) {
        return ss(
          0,
          [
            (t()(),
            zi(0, 16777216, null, null, 1, 'router-outlet', [], null, null, null, null, null)),
            oo(1, 212992, null, 0, wf, [bf, In, en, [8, null], Pe], null, null),
          ],
          function(t, e) {
            t(e, 1, 0);
          },
          null,
        );
      }
      var Gf,
        Wf,
        Qf,
        Kf = Dr(
          'ng-component',
          yh,
          function(t) {
            return ss(
              0,
              [
                (t()(), zi(0, 0, null, null, 1, 'ng-component', [], null, null, null, qf, zf)),
                oo(1, 49152, null, 0, yh, [], null, null),
              ],
              null,
              null,
            );
          },
          {},
          {},
          [],
        ),
        Zf = function() {},
        $f = (function() {
          function t(t, e, n, r, o, i) {
            var s = this;
            (this.toastId = t),
              (this.config = e),
              (this.message = n),
              (this.title = r),
              (this.toastType = o),
              (this.toastRef = i),
              (this._onTap = new O()),
              (this._onAction = new O()),
              this.toastRef.afterClosed().subscribe(function() {
                s._onAction.complete(), s._onTap.complete();
              });
          }
          return (
            (t.prototype.triggerTap = function() {
              this._onTap.next(), this.config.tapToDismiss && this._onTap.complete();
            }),
            (t.prototype.onTap = function() {
              return this._onTap.asObservable();
            }),
            (t.prototype.triggerAction = function(t) {
              this._onAction.next(t);
            }),
            (t.prototype.onAction = function() {
              return this._onAction.asObservable();
            }),
            t
          );
        })(),
        Jf = {
          maxOpened: 0,
          autoDismiss: !1,
          newestOnTop: !0,
          preventDuplicates: !1,
          countDuplicates: !1,
          resetTimeoutOnDuplicate: !1,
          iconClasses: {
            error: 'toast-error',
            info: 'toast-info',
            success: 'toast-success',
            warning: 'toast-warning',
          },
          closeButton: !1,
          disableTimeOut: !1,
          timeOut: 5e3,
          extendedTimeOut: 1e3,
          enableHtml: !1,
          progressBar: !1,
          toastClass: 'ngx-toastr',
          positionClass: 'toast-top-right',
          titleClass: 'toast-title',
          messageClass: 'toast-message',
          easing: 'ease-in',
          easeTime: 300,
          tapToDismiss: !0,
          onActivateTick: !1,
          progressAnimation: 'decreasing',
        },
        Yf = new Tt('ToastConfig'),
        Xf = (function() {
          function t(t, e) {
            (this.component = t), (this.injector = e);
          }
          return (
            (t.prototype.attach = function(t, e) {
              return (this._attachedHost = t), t.attach(this, e);
            }),
            (t.prototype.detach = function() {
              var t = this._attachedHost;
              if (t) return (this._attachedHost = void 0), t.detach();
            }),
            Object.defineProperty(t.prototype, 'isAttached', {
              get: function() {
                return null != this._attachedHost;
              },
              enumerable: !0,
              configurable: !0,
            }),
            (t.prototype.setAttachedHost = function(t) {
              this._attachedHost = t;
            }),
            t
          );
        })(),
        td = (function(t) {
          function e(e, n, r) {
            var o = this;
            return (
              ((o = t.call(this) || this)._hostDomElement = e),
              (o._componentFactoryResolver = n),
              (o._appRef = r),
              o
            );
          }
          return (
            __extends(e, t),
            (e.prototype.attachComponentPortal = function(t, e) {
              var n,
                r = this,
                o = this._componentFactoryResolver.resolveComponentFactory(t.component);
              return (
                (n = o.create(t.injector)),
                this._appRef.attachView(n.hostView),
                this.setDisposeFn(function() {
                  r._appRef.detachView(n.hostView), n.destroy();
                }),
                e
                  ? this._hostDomElement.insertBefore(
                      this._getComponentRootNode(n),
                      this._hostDomElement.firstChild,
                    )
                  : this._hostDomElement.appendChild(this._getComponentRootNode(n)),
                n
              );
            }),
            (e.prototype._getComponentRootNode = function(t) {
              return t.hostView.rootNodes[0];
            }),
            e
          );
        })(
          (function() {
            function t() {}
            return (
              (t.prototype.attach = function(t, e) {
                return (this._attachedPortal = t), this.attachComponentPortal(t, e);
              }),
              (t.prototype.detach = function() {
                this._attachedPortal && this._attachedPortal.setAttachedHost(),
                  (this._attachedPortal = void 0),
                  this._disposeFn && (this._disposeFn(), (this._disposeFn = void 0));
              }),
              (t.prototype.setDisposeFn = function(t) {
                this._disposeFn = t;
              }),
              t
            );
          })(),
        ),
        ed =
          (((Gf = (function() {
            function t(t) {
              this._document = t;
            }
            return (
              (t.prototype.ngOnDestroy = function() {
                this._containerElement &&
                  this._containerElement.parentNode &&
                  this._containerElement.parentNode.removeChild(this._containerElement);
              }),
              (t.prototype.getContainerElement = function() {
                return this._containerElement || this._createContainer(), this._containerElement;
              }),
              (t.prototype._createContainer = function() {
                var t = this._document.createElement('div');
                t.classList.add('overlay-container'),
                  this._document.body.appendChild(t),
                  (this._containerElement = t);
              }),
              t
            );
          })()).ngInjectableDef = pt({
            factory: function() {
              return new Gf(Ft(qa));
            },
            token: Gf,
            providedIn: 'root',
          })),
          Gf),
        nd = (function() {
          function t(t) {
            this._portalHost = t;
          }
          return (
            (t.prototype.attach = function(t, e) {
              return void 0 === e && (e = !0), this._portalHost.attach(t, e);
            }),
            (t.prototype.detach = function() {
              return this._portalHost.detach();
            }),
            t
          );
        })(),
        rd =
          (((Wf = (function() {
            function t(t, e, n, r) {
              (this._overlayContainer = t),
                (this._componentFactoryResolver = e),
                (this._appRef = n),
                (this._document = r),
                (this._paneElements = new Map());
            }
            return (
              (t.prototype.create = function(t, e) {
                return this._createOverlayRef(this.getPaneElement(t, e));
              }),
              (t.prototype.getPaneElement = function(t, e) {
                return (
                  void 0 === t && (t = ''),
                  this._paneElements.get(e) || this._paneElements.set(e, {}),
                  this._paneElements.get(e)[t] ||
                    (this._paneElements.get(e)[t] = this._createPaneElement(t, e)),
                  this._paneElements.get(e)[t]
                );
              }),
              (t.prototype._createPaneElement = function(t, e) {
                var n = this._document.createElement('div');
                return (
                  (n.id = 'toast-container'),
                  n.classList.add(t),
                  n.classList.add('toast-container'),
                  e
                    ? e.getContainerElement().appendChild(n)
                    : this._overlayContainer.getContainerElement().appendChild(n),
                  n
                );
              }),
              (t.prototype._createPortalHost = function(t) {
                return new td(t, this._componentFactoryResolver, this._appRef);
              }),
              (t.prototype._createOverlayRef = function(t) {
                return new nd(this._createPortalHost(t));
              }),
              t
            );
          })()).ngInjectableDef = pt({
            factory: function() {
              return new Wf(Ft(ed), Ft(en), Ft(Si), Ft(qa));
            },
            token: Wf,
            providedIn: 'root',
          })),
          Wf),
        od = (function() {
          function t(t) {
            (this._overlayRef = t),
              (this.duplicatesCount = 0),
              (this._afterClosed = new O()),
              (this._activate = new O()),
              (this._manualClose = new O()),
              (this._resetTimeout = new O()),
              (this._countDuplicate = new O());
          }
          return (
            (t.prototype.manualClose = function() {
              this._manualClose.next(), this._manualClose.complete();
            }),
            (t.prototype.manualClosed = function() {
              return this._manualClose.asObservable();
            }),
            (t.prototype.timeoutReset = function() {
              return this._resetTimeout.asObservable();
            }),
            (t.prototype.countDuplicate = function() {
              return this._countDuplicate.asObservable();
            }),
            (t.prototype.close = function() {
              this._overlayRef.detach(),
                this._afterClosed.next(),
                this._manualClose.next(),
                this._afterClosed.complete(),
                this._manualClose.complete(),
                this._activate.complete(),
                this._resetTimeout.complete(),
                this._countDuplicate.complete();
            }),
            (t.prototype.afterClosed = function() {
              return this._afterClosed.asObservable();
            }),
            (t.prototype.isInactive = function() {
              return this._activate.isStopped;
            }),
            (t.prototype.activate = function() {
              this._activate.next(), this._activate.complete();
            }),
            (t.prototype.afterActivate = function() {
              return this._activate.asObservable();
            }),
            (t.prototype.onDuplicate = function(t, e) {
              t && this._resetTimeout.next(),
                e && this._countDuplicate.next(++this.duplicatesCount);
            }),
            t
          );
        })(),
        id = (function() {
          function t(t, e) {
            (this._toastPackage = t), (this._parentInjector = e);
          }
          return (
            (t.prototype.get = function(t, e, n) {
              return t === $f ? this._toastPackage : this._parentInjector.get(t, e, n);
            }),
            t
          );
        })(),
        sd =
          (((Qf = (function() {
            function t(t, e, n, r, o) {
              (this.overlay = e),
                (this._injector = n),
                (this.sanitizer = r),
                (this.ngZone = o),
                (this.currentlyActive = 0),
                (this.toasts = []),
                (this.index = 0),
                (this.toastrConfig = Object.assign({}, t.default, t.config)),
                t.config.iconClasses &&
                  (this.toastrConfig.iconClasses = Object.assign(
                    {},
                    t.default.iconClasses,
                    t.config.iconClasses,
                  ));
            }
            return (
              (t.prototype.show = function(t, e, n, r) {
                return (
                  void 0 === n && (n = {}),
                  void 0 === r && (r = ''),
                  this._preBuildNotification(r, t, e, this.applyConfig(n))
                );
              }),
              (t.prototype.success = function(t, e, n) {
                return (
                  void 0 === n && (n = {}),
                  this._preBuildNotification(
                    this.toastrConfig.iconClasses.success || '',
                    t,
                    e,
                    this.applyConfig(n),
                  )
                );
              }),
              (t.prototype.error = function(t, e, n) {
                return (
                  void 0 === n && (n = {}),
                  this._preBuildNotification(
                    this.toastrConfig.iconClasses.error || '',
                    t,
                    e,
                    this.applyConfig(n),
                  )
                );
              }),
              (t.prototype.info = function(t, e, n) {
                return (
                  void 0 === n && (n = {}),
                  this._preBuildNotification(
                    this.toastrConfig.iconClasses.info || '',
                    t,
                    e,
                    this.applyConfig(n),
                  )
                );
              }),
              (t.prototype.warning = function(t, e, n) {
                return (
                  void 0 === n && (n = {}),
                  this._preBuildNotification(
                    this.toastrConfig.iconClasses.warning || '',
                    t,
                    e,
                    this.applyConfig(n),
                  )
                );
              }),
              (t.prototype.clear = function(t) {
                for (var e = 0, n = this.toasts; e < n.length; e++) {
                  var r = n[e];
                  if (void 0 !== t) {
                    if (r.toastId === t) return void r.toastRef.manualClose();
                  } else r.toastRef.manualClose();
                }
              }),
              (t.prototype.remove = function(t) {
                var e = this._findToast(t);
                if (!e) return !1;
                if (
                  (e.activeToast.toastRef.close(),
                  this.toasts.splice(e.index, 1),
                  (this.currentlyActive = this.currentlyActive - 1),
                  !this.toastrConfig.maxOpened || !this.toasts.length)
                )
                  return !1;
                if (
                  this.currentlyActive < this.toastrConfig.maxOpened &&
                  this.toasts[this.currentlyActive]
                ) {
                  var n = this.toasts[this.currentlyActive].toastRef;
                  n.isInactive() ||
                    ((this.currentlyActive = this.currentlyActive + 1), n.activate());
                }
                return !0;
              }),
              (t.prototype.findDuplicate = function(t, e, n) {
                for (var r = 0, o = this.toasts; r < o.length; r++) {
                  var i = o[r];
                  if (i.message === t) return i.toastRef.onDuplicate(e, n), i;
                }
                return null;
              }),
              (t.prototype.applyConfig = function(t) {
                return void 0 === t && (t = {}), Object.assign({}, this.toastrConfig, t);
              }),
              (t.prototype._findToast = function(t) {
                for (var e = 0; e < this.toasts.length; e++)
                  if (this.toasts[e].toastId === t)
                    return { index: e, activeToast: this.toasts[e] };
                return null;
              }),
              (t.prototype._preBuildNotification = function(t, e, n, r) {
                var o = this;
                return r.onActivateTick
                  ? this.ngZone.run(function() {
                      return o._buildNotification(t, e, n, r);
                    })
                  : this._buildNotification(t, e, n, r);
              }),
              (t.prototype._buildNotification = function(t, e, n, r) {
                var o = this;
                if (!r.toastComponent) throw new Error('toastComponent required');
                var i = this.findDuplicate(
                  e,
                  this.toastrConfig.resetTimeoutOnDuplicate && r.timeOut > 0,
                  this.toastrConfig.countDuplicates,
                );
                if (e && this.toastrConfig.preventDuplicates && null !== i) return i;
                this.previousToastMessage = e;
                var s = !1;
                this.toastrConfig.maxOpened &&
                  this.currentlyActive >= this.toastrConfig.maxOpened &&
                  ((s = !0), this.toastrConfig.autoDismiss && this.clear(this.toasts[0].toastId));
                var a = this.overlay.create(r.positionClass, this.overlayContainer);
                this.index = this.index + 1;
                var u = e;
                e && r.enableHtml && (u = this.sanitizer.sanitize(we.HTML, e));
                var l = new od(a),
                  c = new $f(this.index, r, u, n, t, l),
                  h = new id(c, this._injector),
                  p = new Xf(r.toastComponent, h),
                  f = a.attach(p, this.toastrConfig.newestOnTop);
                l.componentInstance = f._component;
                var d = {
                  toastId: this.index,
                  message: e || '',
                  toastRef: l,
                  onShown: l.afterActivate(),
                  onHidden: l.afterClosed(),
                  onTap: c.onTap(),
                  onAction: c.onAction(),
                  portal: f,
                };
                return (
                  s ||
                    setTimeout(function() {
                      d.toastRef.activate(), (o.currentlyActive = o.currentlyActive + 1);
                    }),
                  this.toasts.push(d),
                  d
                );
              }),
              t
            );
          })()).ngInjectableDef = pt({
            factory: function() {
              return new Qf(Ft(Yf), Ft(rd), Ft(xt), Ft(Gu), Ft(ii));
            },
            token: Qf,
            providedIn: 'root',
          })),
          Qf),
        ad = (function() {
          function t(t, e, n) {
            var r = this;
            (this.toastrService = t),
              (this.toastPackage = e),
              (this.ngZone = n),
              (this.width = -1),
              (this.toastClasses = ''),
              (this.state = {
                value: 'inactive',
                params: { easeTime: this.toastPackage.config.easeTime, easing: 'ease-in' },
              }),
              (this.message = e.message),
              (this.title = e.title),
              (this.options = e.config),
              (this.originalTimeout = e.config.timeOut),
              (this.toastClasses = e.toastType + ' ' + e.config.toastClass),
              (this.sub = e.toastRef.afterActivate().subscribe(function() {
                r.activateToast();
              })),
              (this.sub1 = e.toastRef.manualClosed().subscribe(function() {
                r.remove();
              })),
              (this.sub2 = e.toastRef.timeoutReset().subscribe(function() {
                r.resetTimeout();
              })),
              (this.sub3 = e.toastRef.countDuplicate().subscribe(function(t) {
                r.duplicatesCount = t;
              }));
          }
          return (
            Object.defineProperty(t.prototype, 'displayStyle', {
              get: function() {
                if ('inactive' === this.state.value) return 'none';
              },
              enumerable: !0,
              configurable: !0,
            }),
            (t.prototype.ngOnDestroy = function() {
              this.sub.unsubscribe(),
                this.sub1.unsubscribe(),
                this.sub2.unsubscribe(),
                this.sub3.unsubscribe(),
                clearInterval(this.intervalId),
                clearTimeout(this.timeout);
            }),
            (t.prototype.activateToast = function() {
              var t = this;
              (this.state = Object.assign({}, this.state, { value: 'active' })),
                !0 !== this.options.disableTimeOut &&
                  'timeOut' !== this.options.disableTimeOut &&
                  this.options.timeOut &&
                  (this.outsideTimeout(function() {
                    return t.remove();
                  }, this.options.timeOut),
                  (this.hideTime = new Date().getTime() + this.options.timeOut),
                  this.options.progressBar &&
                    this.outsideInterval(function() {
                      return t.updateProgress();
                    }, 10));
            }),
            (t.prototype.updateProgress = function() {
              if (0 !== this.width && 100 !== this.width && this.options.timeOut) {
                var t = new Date().getTime();
                (this.width = ((this.hideTime - t) / this.options.timeOut) * 100),
                  'increasing' === this.options.progressAnimation &&
                    (this.width = 100 - this.width),
                  this.width <= 0 && (this.width = 0),
                  this.width >= 100 && (this.width = 100);
              }
            }),
            (t.prototype.resetTimeout = function() {
              var t = this;
              clearTimeout(this.timeout),
                clearInterval(this.intervalId),
                (this.state = Object.assign({}, this.state, { value: 'active' })),
                this.outsideTimeout(function() {
                  return t.remove();
                }, this.originalTimeout),
                (this.options.timeOut = this.originalTimeout),
                (this.hideTime = new Date().getTime() + (this.options.timeOut || 0)),
                (this.width = -1),
                this.options.progressBar &&
                  this.outsideInterval(function() {
                    return t.updateProgress();
                  }, 10);
            }),
            (t.prototype.remove = function() {
              var t = this;
              'removed' !== this.state.value &&
                (clearTimeout(this.timeout),
                (this.state = Object.assign({}, this.state, { value: 'removed' })),
                this.outsideTimeout(function() {
                  return t.toastrService.remove(t.toastPackage.toastId);
                }, +this.toastPackage.config.easeTime));
            }),
            (t.prototype.tapToast = function() {
              'removed' !== this.state.value &&
                (this.toastPackage.triggerTap(), this.options.tapToDismiss && this.remove());
            }),
            (t.prototype.stickAround = function() {
              'removed' !== this.state.value &&
                (clearTimeout(this.timeout),
                (this.options.timeOut = 0),
                (this.hideTime = 0),
                clearInterval(this.intervalId),
                (this.width = 0));
            }),
            (t.prototype.delayedHideToast = function() {
              var t = this;
              !0 !== this.options.disableTimeOut &&
                'extendedTimeOut' !== this.options.disableTimeOut &&
                0 !== this.options.extendedTimeOut &&
                'removed' !== this.state.value &&
                (this.outsideTimeout(function() {
                  return t.remove();
                }, this.options.extendedTimeOut),
                (this.options.timeOut = this.options.extendedTimeOut),
                (this.hideTime = new Date().getTime() + (this.options.timeOut || 0)),
                (this.width = -1),
                this.options.progressBar &&
                  this.outsideInterval(function() {
                    return t.updateProgress();
                  }, 10));
            }),
            (t.prototype.outsideTimeout = function(t, e) {
              var n = this;
              this.ngZone
                ? this.ngZone.runOutsideAngular(function() {
                    return (n.timeout = setTimeout(function() {
                      return n.runInsideAngular(t);
                    }, e));
                  })
                : (this.timeout = setTimeout(function() {
                    return t();
                  }, e));
            }),
            (t.prototype.outsideInterval = function(t, e) {
              var n = this;
              this.ngZone
                ? this.ngZone.runOutsideAngular(function() {
                    return (n.intervalId = setInterval(function() {
                      return n.runInsideAngular(t);
                    }, e));
                  })
                : (this.intervalId = setInterval(function() {
                    return t();
                  }, e));
            }),
            (t.prototype.runInsideAngular = function(t) {
              this.ngZone
                ? this.ngZone.run(function() {
                    return t();
                  })
                : t();
            }),
            t
          );
        })(),
        ud = Object.assign({}, Jf, { toastComponent: ad }),
        ld = (function() {
          function t() {}
          return (
            (t.forRoot = function(e) {
              return (
                void 0 === e && (e = {}),
                { ngModule: t, providers: [{ provide: Yf, useValue: { default: ud, config: e } }] }
              );
            }),
            t
          );
        })(),
        cd = Object.assign({}, Jf, {
          toastComponent: (function() {
            function t(t, e, n) {
              var r = this;
              (this.toastrService = t),
                (this.toastPackage = e),
                (this.appRef = n),
                (this.width = -1),
                (this.toastClasses = ''),
                (this.state = 'inactive'),
                (this.message = e.message),
                (this.title = e.title),
                (this.options = e.config),
                (this.originalTimeout = e.config.timeOut),
                (this.toastClasses = e.toastType + ' ' + e.config.toastClass),
                (this.sub = e.toastRef.afterActivate().subscribe(function() {
                  r.activateToast();
                })),
                (this.sub1 = e.toastRef.manualClosed().subscribe(function() {
                  r.remove();
                })),
                (this.sub2 = e.toastRef.timeoutReset().subscribe(function() {
                  r.resetTimeout();
                })),
                (this.sub3 = e.toastRef.countDuplicate().subscribe(function(t) {
                  r.duplicatesCount = t;
                }));
            }
            return (
              Object.defineProperty(t.prototype, 'displayStyle', {
                get: function() {
                  if ('inactive' === this.state) return 'none';
                },
                enumerable: !0,
                configurable: !0,
              }),
              (t.prototype.ngOnDestroy = function() {
                this.sub.unsubscribe(),
                  this.sub1.unsubscribe(),
                  this.sub2.unsubscribe(),
                  this.sub3.unsubscribe(),
                  clearInterval(this.intervalId),
                  clearTimeout(this.timeout);
              }),
              (t.prototype.activateToast = function() {
                var t = this;
                (this.state = 'active'),
                  !0 !== this.options.disableTimeOut &&
                    'timeOut' !== this.options.disableTimeOut &&
                    this.options.timeOut &&
                    ((this.timeout = setTimeout(function() {
                      t.remove();
                    }, this.options.timeOut)),
                    (this.hideTime = new Date().getTime() + this.options.timeOut),
                    this.options.progressBar &&
                      (this.intervalId = setInterval(function() {
                        return t.updateProgress();
                      }, 10))),
                  this.options.onActivateTick && this.appRef.tick();
              }),
              (t.prototype.updateProgress = function() {
                if (0 !== this.width && 100 !== this.width && this.options.timeOut) {
                  var t = new Date().getTime();
                  (this.width = ((this.hideTime - t) / this.options.timeOut) * 100),
                    'increasing' === this.options.progressAnimation &&
                      (this.width = 100 - this.width),
                    this.width <= 0 && (this.width = 0),
                    this.width >= 100 && (this.width = 100);
                }
              }),
              (t.prototype.resetTimeout = function() {
                var t = this;
                clearTimeout(this.timeout),
                  clearInterval(this.intervalId),
                  (this.state = 'active'),
                  (this.options.timeOut = this.originalTimeout),
                  (this.timeout = setTimeout(function() {
                    return t.remove();
                  }, this.originalTimeout)),
                  (this.hideTime = new Date().getTime() + (this.originalTimeout || 0)),
                  (this.width = -1),
                  this.options.progressBar &&
                    (this.intervalId = setInterval(function() {
                      return t.updateProgress();
                    }, 10));
              }),
              (t.prototype.remove = function() {
                var t = this;
                'removed' !== this.state &&
                  (clearTimeout(this.timeout),
                  (this.state = 'removed'),
                  (this.timeout = setTimeout(function() {
                    return t.toastrService.remove(t.toastPackage.toastId);
                  })));
              }),
              (t.prototype.tapToast = function() {
                'removed' !== this.state &&
                  (this.toastPackage.triggerTap(), this.options.tapToDismiss && this.remove());
              }),
              (t.prototype.stickAround = function() {
                'removed' !== this.state &&
                  (clearTimeout(this.timeout),
                  (this.options.timeOut = 0),
                  (this.hideTime = 0),
                  clearInterval(this.intervalId),
                  (this.width = 0));
              }),
              (t.prototype.delayedHideToast = function() {
                var t = this;
                !0 !== this.options.disableTimeOut &&
                  'extendedTimeOut' !== this.options.disableTimeOut &&
                  0 !== this.options.extendedTimeOut &&
                  'removed' !== this.state &&
                  ((this.timeout = setTimeout(function() {
                    return t.remove();
                  }, this.options.extendedTimeOut)),
                  (this.options.timeOut = this.options.extendedTimeOut),
                  (this.hideTime = new Date().getTime() + (this.options.timeOut || 0)),
                  (this.width = -1),
                  this.options.progressBar &&
                    (this.intervalId = setInterval(function() {
                      return t.updateProgress();
                    }, 10)));
              }),
              t
            );
          })(),
        });
      (function() {
        function t() {}
        t.forRoot = function(e) {
          return (
            void 0 === e && (e = {}),
            { ngModule: t, providers: [{ provide: Yf, useValue: { default: cd, config: e } }] }
          );
        };
      })();
      var hd = $n({
        encapsulation: 2,
        styles: [],
        data: {
          animation: [
            {
              type: 7,
              name: 'flyInOut',
              definitions: [
                {
                  type: 0,
                  name: 'inactive',
                  styles: { type: 6, styles: { opacity: 0 }, offset: null },
                  options: void 0,
                },
                {
                  type: 0,
                  name: 'active',
                  styles: { type: 6, styles: { opacity: 1 }, offset: null },
                  options: void 0,
                },
                {
                  type: 0,
                  name: 'removed',
                  styles: { type: 6, styles: { opacity: 0 }, offset: null },
                  options: void 0,
                },
                {
                  type: 1,
                  expr: 'inactive => active',
                  animation: { type: 4, styles: null, timings: '{{ easeTime }}ms {{ easing }}' },
                  options: null,
                },
                {
                  type: 1,
                  expr: 'active => removed',
                  animation: { type: 4, styles: null, timings: '{{ easeTime }}ms {{ easing }}' },
                  options: null,
                },
              ],
              options: {},
            },
          ],
        },
      });
      function pd(t) {
        return ss(
          0,
          [
            (t()(),
            zi(
              0,
              0,
              null,
              null,
              2,
              'button',
              [
                ['aria-label', 'Close'],
                ['class', 'toast-close-button'],
              ],
              null,
              [[null, 'click']],
              function(t, e, n) {
                var r = !0;
                return 'click' === e && (r = !1 !== t.component.remove() && r), r;
              },
              null,
              null,
            )),
            (t()(),
            zi(
              1,
              0,
              null,
              null,
              1,
              'span',
              [['aria-hidden', 'true']],
              null,
              null,
              null,
              null,
              null,
            )),
            (t()(), rs(-1, null, ['\xd7'])),
          ],
          null,
          null,
        );
      }
      function fd(t) {
        return ss(
          0,
          [
            (t()(), zi(0, 0, null, null, 1, null, null, null, null, null, null, null)),
            (t()(), rs(1, null, ['[', ']'])),
          ],
          null,
          function(t, e) {
            t(e, 1, 0, e.component.duplicatesCount + 1);
          },
        );
      }
      function dd(t) {
        return ss(
          0,
          [
            (t()(),
            zi(
              0,
              0,
              null,
              null,
              3,
              'div',
              [],
              [
                [8, 'className', 0],
                [1, 'aria-label', 0],
              ],
              null,
              null,
              null,
              null,
            )),
            (t()(), rs(1, null, [' ', ' '])),
            (t()(), Bi(16777216, null, null, 1, null, fd)),
            oo(3, 16384, null, 0, Fa, [In, kn], { ngIf: [0, 'ngIf'] }, null),
          ],
          function(t, e) {
            t(e, 3, 0, e.component.duplicatesCount);
          },
          function(t, e) {
            var n = e.component;
            t(e, 0, 0, n.options.titleClass, n.title), t(e, 1, 0, n.title);
          },
        );
      }
      function yd(t) {
        return ss(
          0,
          [
            (t()(),
            zi(
              0,
              0,
              null,
              null,
              0,
              'div',
              [
                ['aria-live', 'polite'],
                ['role', 'alertdialog'],
              ],
              [
                [8, 'className', 0],
                [8, 'innerHTML', 1],
              ],
              null,
              null,
              null,
              null,
            )),
          ],
          null,
          function(t, e) {
            var n = e.component;
            t(e, 0, 0, n.options.messageClass, n.message);
          },
        );
      }
      function gd(t) {
        return ss(
          0,
          [
            (t()(),
            zi(
              0,
              0,
              null,
              null,
              1,
              'div',
              [
                ['aria-live', 'polite'],
                ['role', 'alertdialog'],
              ],
              [
                [8, 'className', 0],
                [1, 'aria-label', 0],
              ],
              null,
              null,
              null,
              null,
            )),
            (t()(), rs(1, null, [' ', ' '])),
          ],
          null,
          function(t, e) {
            var n = e.component;
            t(e, 0, 0, n.options.messageClass, n.message), t(e, 1, 0, n.message);
          },
        );
      }
      function md(t) {
        return ss(
          0,
          [
            (t()(), zi(0, 0, null, null, 1, 'div', [], null, null, null, null, null)),
            (t()(),
            zi(
              1,
              0,
              null,
              null,
              0,
              'div',
              [['class', 'toast-progress']],
              [[4, 'width', null]],
              null,
              null,
              null,
              null,
            )),
          ],
          null,
          function(t, e) {
            t(e, 1, 0, e.component.width + '%');
          },
        );
      }
      function vd(t) {
        return ss(
          0,
          [
            (t()(), Bi(16777216, null, null, 1, null, pd)),
            oo(1, 16384, null, 0, Fa, [In, kn], { ngIf: [0, 'ngIf'] }, null),
            (t()(), Bi(16777216, null, null, 1, null, dd)),
            oo(3, 16384, null, 0, Fa, [In, kn], { ngIf: [0, 'ngIf'] }, null),
            (t()(), Bi(16777216, null, null, 1, null, yd)),
            oo(5, 16384, null, 0, Fa, [In, kn], { ngIf: [0, 'ngIf'] }, null),
            (t()(), Bi(16777216, null, null, 1, null, gd)),
            oo(7, 16384, null, 0, Fa, [In, kn], { ngIf: [0, 'ngIf'] }, null),
            (t()(), Bi(16777216, null, null, 1, null, md)),
            oo(9, 16384, null, 0, Fa, [In, kn], { ngIf: [0, 'ngIf'] }, null),
          ],
          function(t, e) {
            var n = e.component;
            t(e, 1, 0, n.options.closeButton),
              t(e, 3, 0, n.title),
              t(e, 5, 0, n.message && n.options.enableHtml),
              t(e, 7, 0, n.message && !n.options.enableHtml),
              t(e, 9, 0, n.options.progressBar);
          },
          null,
        );
      }
      var _d = Dr(
          '[toast-component]',
          ad,
          function(t) {
            return ss(
              0,
              [
                (t()(),
                zi(
                  0,
                  0,
                  null,
                  null,
                  1,
                  'div',
                  [['toast-component', '']],
                  [
                    [8, 'className', 0],
                    [40, '@flyInOut', 0],
                    [4, 'display', null],
                  ],
                  [
                    [null, 'click'],
                    [null, 'mouseenter'],
                    [null, 'mouseleave'],
                  ],
                  function(t, e, n) {
                    var r = !0;
                    return (
                      'click' === e && (r = !1 !== Gr(t, 1).tapToast() && r),
                      'mouseenter' === e && (r = !1 !== Gr(t, 1).stickAround() && r),
                      'mouseleave' === e && (r = !1 !== Gr(t, 1).delayedHideToast() && r),
                      r
                    );
                  },
                  vd,
                  hd,
                )),
                oo(1, 180224, null, 0, ad, [sd, $f, ii], null, null),
              ],
              null,
              function(t, e) {
                t(e, 0, 0, Gr(e, 1).toastClasses, Gr(e, 1).state, Gr(e, 1).displayStyle);
              },
            );
          },
          {},
          {},
          [],
        ),
        bd = $n({ encapsulation: 0, styles: [['']], data: {} });
      function wd(t) {
        return ss(
          0,
          [
            (t()(),
            zi(
              0,
              0,
              null,
              null,
              2,
              'div',
              [['class', 'container main center']],
              null,
              null,
              null,
              null,
              null,
            )),
            (t()(), zi(1, 0, null, null, 1, 'p', [], null, null, null, null, null)),
            (t()(), rs(-1, null, ['Option'])),
          ],
          null,
          null,
        );
      }
      var Cd = Dr(
          'atg-game-control-option',
          da,
          function(t) {
            return ss(
              0,
              [
                (t()(),
                zi(0, 0, null, null, 1, 'atg-game-control-option', [], null, null, null, wd, bd)),
                oo(1, 49152, null, 0, da, [], null, null),
              ],
              null,
              null,
            );
          },
          {},
          {},
          [],
        ),
        Sd = (function(t) {
          return (
            (t.PLAY = 'play'), (t.PAUSE = 'pause'), (t.RESET = 'reset'), (t.LOST = 'game over'), t
          );
        })({}),
        Ed = (function(t) {
          return (
            (t.DEFAULT = '#2b3a42'),
            (t.FIRST = '#fd0404'),
            (t.SECOND = '#0d21d5'),
            (t.THIRD = '#19af09'),
            (t.FOURTH = '#f8ed20'),
            (t.FIFTH = '#13e4e7'),
            (t.SIXTH = '#ff7300'),
            (t.SEVENTH = '#d131c4'),
            t
          );
        })({}),
        Td = [
          [
            [Ed.DEFAULT, Ed.FIRST, Ed.DEFAULT],
            [Ed.DEFAULT, Ed.FIRST, Ed.DEFAULT],
            [Ed.DEFAULT, Ed.FIRST, Ed.DEFAULT],
            [Ed.DEFAULT, Ed.FIRST, Ed.DEFAULT],
          ],
          [
            [Ed.SECOND, Ed.SECOND],
            [Ed.SECOND, Ed.SECOND],
          ],
          [
            [Ed.THIRD, Ed.THIRD, Ed.DEFAULT],
            [Ed.DEFAULT, Ed.THIRD, Ed.THIRD],
          ],
          [
            [Ed.DEFAULT, Ed.FOURTH, Ed.FOURTH],
            [Ed.FOURTH, Ed.FOURTH, Ed.DEFAULT],
          ],
          [
            [Ed.FIFTH, Ed.FIFTH, Ed.FIFTH],
            [Ed.DEFAULT, Ed.FIFTH, Ed.DEFAULT],
          ],
          [
            [Ed.SIXTH, Ed.DEFAULT],
            [Ed.SIXTH, Ed.DEFAULT],
            [Ed.SIXTH, Ed.SIXTH],
          ],
          [
            [Ed.DEFAULT, Ed.SEVENTH],
            [Ed.DEFAULT, Ed.SEVENTH],
            [Ed.SEVENTH, Ed.SEVENTH],
          ],
        ],
        xd = '#979797',
        Pd = (function() {
          function t() {}
          return (
            (t.getRandomFigure = function() {
              return Td[Math.floor(Math.random() * Td.length)];
            }),
            (t.prototype.showFigure = function(t, e, n, r) {
              var o = n.slice();
              return (
                e.forEach(function(e, i) {
                  var s = 0,
                    a = !1;
                  if (i + t < 20) {
                    var u = n[i + t].slice(),
                      l = e.filter(function(t, e) {
                        return t === Ed.DEFAULT || a || ((s = e), (a = !0)), t !== Ed.DEFAULT;
                      });
                    u.splice.apply(u, [r + s, l.length].concat(l)), (o[i + t] = u.slice());
                  }
                }),
                o
              );
            }),
            t
          );
        })(),
        Od = function(t) {
          (this.username = t.username),
            (this.lines = t.lines),
            (this.score = t.score),
            (this.level = t.level);
        },
        kd = function() {},
        Ad = function() {},
        Id = (function() {
          function t(t) {
            var e = this;
            (this.normalizedNames = new Map()),
              (this.lazyUpdate = null),
              t
                ? (this.lazyInit =
                    'string' == typeof t
                      ? function() {
                          (e.headers = new Map()),
                            t.split('\n').forEach(function(t) {
                              var n = t.indexOf(':');
                              if (n > 0) {
                                var r = t.slice(0, n),
                                  o = r.toLowerCase(),
                                  i = t.slice(n + 1).trim();
                                e.maybeSetNormalizedName(r, o),
                                  e.headers.has(o)
                                    ? e.headers.get(o).push(i)
                                    : e.headers.set(o, [i]);
                              }
                            });
                        }
                      : function() {
                          (e.headers = new Map()),
                            Object.keys(t).forEach(function(n) {
                              var r = t[n],
                                o = n.toLowerCase();
                              'string' == typeof r && (r = [r]),
                                r.length > 0 &&
                                  (e.headers.set(o, r), e.maybeSetNormalizedName(n, o));
                            });
                        })
                : (this.headers = new Map());
          }
          return (
            (t.prototype.has = function(t) {
              return this.init(), this.headers.has(t.toLowerCase());
            }),
            (t.prototype.get = function(t) {
              this.init();
              var e = this.headers.get(t.toLowerCase());
              return e && e.length > 0 ? e[0] : null;
            }),
            (t.prototype.keys = function() {
              return this.init(), Array.from(this.normalizedNames.values());
            }),
            (t.prototype.getAll = function(t) {
              return this.init(), this.headers.get(t.toLowerCase()) || null;
            }),
            (t.prototype.append = function(t, e) {
              return this.clone({ name: t, value: e, op: 'a' });
            }),
            (t.prototype.set = function(t, e) {
              return this.clone({ name: t, value: e, op: 's' });
            }),
            (t.prototype.delete = function(t, e) {
              return this.clone({ name: t, value: e, op: 'd' });
            }),
            (t.prototype.maybeSetNormalizedName = function(t, e) {
              this.normalizedNames.has(e) || this.normalizedNames.set(e, t);
            }),
            (t.prototype.init = function() {
              var e = this;
              this.lazyInit &&
                (this.lazyInit instanceof t ? this.copyFrom(this.lazyInit) : this.lazyInit(),
                (this.lazyInit = null),
                this.lazyUpdate &&
                  (this.lazyUpdate.forEach(function(t) {
                    return e.applyUpdate(t);
                  }),
                  (this.lazyUpdate = null)));
            }),
            (t.prototype.copyFrom = function(t) {
              var e = this;
              t.init(),
                Array.from(t.headers.keys()).forEach(function(n) {
                  e.headers.set(n, t.headers.get(n)),
                    e.normalizedNames.set(n, t.normalizedNames.get(n));
                });
            }),
            (t.prototype.clone = function(e) {
              var n = new t();
              return (
                (n.lazyInit = this.lazyInit && this.lazyInit instanceof t ? this.lazyInit : this),
                (n.lazyUpdate = (this.lazyUpdate || []).concat([e])),
                n
              );
            }),
            (t.prototype.applyUpdate = function(t) {
              var e = t.name.toLowerCase();
              switch (t.op) {
                case 'a':
                case 's':
                  var n = t.value;
                  if (('string' == typeof n && (n = [n]), 0 === n.length)) return;
                  this.maybeSetNormalizedName(t.name, e);
                  var r = ('a' === t.op ? this.headers.get(e) : void 0) || [];
                  r.push.apply(r, n), this.headers.set(e, r);
                  break;
                case 'd':
                  var o = t.value;
                  if (o) {
                    var i = this.headers.get(e);
                    if (!i) return;
                    0 ===
                    (i = i.filter(function(t) {
                      return -1 === o.indexOf(t);
                    })).length
                      ? (this.headers.delete(e), this.normalizedNames.delete(e))
                      : this.headers.set(e, i);
                  } else this.headers.delete(e), this.normalizedNames.delete(e);
              }
            }),
            (t.prototype.forEach = function(t) {
              var e = this;
              this.init(),
                Array.from(this.normalizedNames.keys()).forEach(function(n) {
                  return t(e.normalizedNames.get(n), e.headers.get(n));
                });
            }),
            t
          );
        })(),
        Nd = (function() {
          function t() {}
          return (
            (t.prototype.encodeKey = function(t) {
              return Rd(t);
            }),
            (t.prototype.encodeValue = function(t) {
              return Rd(t);
            }),
            (t.prototype.decodeKey = function(t) {
              return decodeURIComponent(t);
            }),
            (t.prototype.decodeValue = function(t) {
              return decodeURIComponent(t);
            }),
            t
          );
        })();
      function Rd(t) {
        return encodeURIComponent(t)
          .replace(/%40/gi, '@')
          .replace(/%3A/gi, ':')
          .replace(/%24/gi, '$')
          .replace(/%2C/gi, ',')
          .replace(/%3B/gi, ';')
          .replace(/%2B/gi, '+')
          .replace(/%3D/gi, '=')
          .replace(/%3F/gi, '?')
          .replace(/%2F/gi, '/');
      }
      var Dd = (function() {
        function t(t) {
          var e = this;
          if (
            (void 0 === t && (t = {}),
            (this.updates = null),
            (this.cloneFrom = null),
            (this.encoder = t.encoder || new Nd()),
            t.fromString)
          ) {
            if (t.fromObject) throw new Error('Cannot specify both fromString and fromObject.');
            this.map = (function(t, e) {
              var n = new Map();
              return (
                t.length > 0 &&
                  t.split('&').forEach(function(t) {
                    var r = t.indexOf('='),
                      o =
                        -1 == r
                          ? [e.decodeKey(t), '']
                          : [e.decodeKey(t.slice(0, r)), e.decodeValue(t.slice(r + 1))],
                      i = o[0],
                      s = o[1],
                      a = n.get(i) || [];
                    a.push(s), n.set(i, a);
                  }),
                n
              );
            })(t.fromString, this.encoder);
          } else
            t.fromObject
              ? ((this.map = new Map()),
                Object.keys(t.fromObject).forEach(function(n) {
                  var r = t.fromObject[n];
                  e.map.set(n, Array.isArray(r) ? r : [r]);
                }))
              : (this.map = null);
        }
        return (
          (t.prototype.has = function(t) {
            return this.init(), this.map.has(t);
          }),
          (t.prototype.get = function(t) {
            this.init();
            var e = this.map.get(t);
            return e ? e[0] : null;
          }),
          (t.prototype.getAll = function(t) {
            return this.init(), this.map.get(t) || null;
          }),
          (t.prototype.keys = function() {
            return this.init(), Array.from(this.map.keys());
          }),
          (t.prototype.append = function(t, e) {
            return this.clone({ param: t, value: e, op: 'a' });
          }),
          (t.prototype.set = function(t, e) {
            return this.clone({ param: t, value: e, op: 's' });
          }),
          (t.prototype.delete = function(t, e) {
            return this.clone({ param: t, value: e, op: 'd' });
          }),
          (t.prototype.toString = function() {
            var t = this;
            return (
              this.init(),
              this.keys()
                .map(function(e) {
                  var n = t.encoder.encodeKey(e);
                  return t.map
                    .get(e)
                    .map(function(e) {
                      return n + '=' + t.encoder.encodeValue(e);
                    })
                    .join('&');
                })
                .join('&')
            );
          }),
          (t.prototype.clone = function(e) {
            var n = new t({ encoder: this.encoder });
            return (
              (n.cloneFrom = this.cloneFrom || this),
              (n.updates = (this.updates || []).concat([e])),
              n
            );
          }),
          (t.prototype.init = function() {
            var t = this;
            null === this.map && (this.map = new Map()),
              null !== this.cloneFrom &&
                (this.cloneFrom.init(),
                this.cloneFrom.keys().forEach(function(e) {
                  return t.map.set(e, t.cloneFrom.map.get(e));
                }),
                this.updates.forEach(function(e) {
                  switch (e.op) {
                    case 'a':
                    case 's':
                      var n = ('a' === e.op ? t.map.get(e.param) : void 0) || [];
                      n.push(e.value), t.map.set(e.param, n);
                      break;
                    case 'd':
                      if (void 0 === e.value) {
                        t.map.delete(e.param);
                        break;
                      }
                      var r = t.map.get(e.param) || [],
                        o = r.indexOf(e.value);
                      -1 !== o && r.splice(o, 1),
                        r.length > 0 ? t.map.set(e.param, r) : t.map.delete(e.param);
                  }
                }),
                (this.cloneFrom = this.updates = null));
          }),
          t
        );
      })();
      function Fd(t) {
        return 'undefined' != typeof ArrayBuffer && t instanceof ArrayBuffer;
      }
      function jd(t) {
        return 'undefined' != typeof Blob && t instanceof Blob;
      }
      function Md(t) {
        return 'undefined' != typeof FormData && t instanceof FormData;
      }
      var Vd = (function() {
          function t(t, e, n, r) {
            var o;
            if (
              ((this.url = e),
              (this.body = null),
              (this.reportProgress = !1),
              (this.withCredentials = !1),
              (this.responseType = 'json'),
              (this.method = t.toUpperCase()),
              (function(t) {
                switch (t) {
                  case 'DELETE':
                  case 'GET':
                  case 'HEAD':
                  case 'OPTIONS':
                  case 'JSONP':
                    return !1;
                  default:
                    return !0;
                }
              })(this.method) || r
                ? ((this.body = void 0 !== n ? n : null), (o = r))
                : (o = n),
              o &&
                ((this.reportProgress = !!o.reportProgress),
                (this.withCredentials = !!o.withCredentials),
                o.responseType && (this.responseType = o.responseType),
                o.headers && (this.headers = o.headers),
                o.params && (this.params = o.params)),
              this.headers || (this.headers = new Id()),
              this.params)
            ) {
              var i = this.params.toString();
              if (0 === i.length) this.urlWithParams = e;
              else {
                var s = e.indexOf('?');
                this.urlWithParams = e + (-1 === s ? '?' : s < e.length - 1 ? '&' : '') + i;
              }
            } else (this.params = new Dd()), (this.urlWithParams = e);
          }
          return (
            (t.prototype.serializeBody = function() {
              return null === this.body
                ? null
                : Fd(this.body) || jd(this.body) || Md(this.body) || 'string' == typeof this.body
                ? this.body
                : this.body instanceof Dd
                ? this.body.toString()
                : 'object' == typeof this.body ||
                  'boolean' == typeof this.body ||
                  Array.isArray(this.body)
                ? JSON.stringify(this.body)
                : this.body.toString();
            }),
            (t.prototype.detectContentTypeHeader = function() {
              return null === this.body
                ? null
                : Md(this.body)
                ? null
                : jd(this.body)
                ? this.body.type || null
                : Fd(this.body)
                ? null
                : 'string' == typeof this.body
                ? 'text/plain'
                : this.body instanceof Dd
                ? 'application/x-www-form-urlencoded;charset=UTF-8'
                : 'object' == typeof this.body ||
                  'number' == typeof this.body ||
                  Array.isArray(this.body)
                ? 'application/json'
                : null;
            }),
            (t.prototype.clone = function(e) {
              void 0 === e && (e = {});
              var n = e.method || this.method,
                r = e.url || this.url,
                o = e.responseType || this.responseType,
                i = void 0 !== e.body ? e.body : this.body,
                s = void 0 !== e.withCredentials ? e.withCredentials : this.withCredentials,
                a = void 0 !== e.reportProgress ? e.reportProgress : this.reportProgress,
                u = e.headers || this.headers,
                l = e.params || this.params;
              return (
                void 0 !== e.setHeaders &&
                  (u = Object.keys(e.setHeaders).reduce(function(t, n) {
                    return t.set(n, e.setHeaders[n]);
                  }, u)),
                e.setParams &&
                  (l = Object.keys(e.setParams).reduce(function(t, n) {
                    return t.set(n, e.setParams[n]);
                  }, l)),
                new t(n, r, i, {
                  params: l,
                  headers: u,
                  reportProgress: a,
                  responseType: o,
                  withCredentials: s,
                })
              );
            }),
            t
          );
        })(),
        Ld = (function() {
          var t = {
            Sent: 0,
            UploadProgress: 1,
            ResponseHeader: 2,
            DownloadProgress: 3,
            Response: 4,
            User: 5,
          };
          return (
            (t[t.Sent] = 'Sent'),
            (t[t.UploadProgress] = 'UploadProgress'),
            (t[t.ResponseHeader] = 'ResponseHeader'),
            (t[t.DownloadProgress] = 'DownloadProgress'),
            (t[t.Response] = 'Response'),
            (t[t.User] = 'User'),
            t
          );
        })(),
        Ud = function(t, e, n) {
          void 0 === e && (e = 200),
            void 0 === n && (n = 'OK'),
            (this.headers = t.headers || new Id()),
            (this.status = void 0 !== t.status ? t.status : e),
            (this.statusText = t.statusText || n),
            (this.url = t.url || null),
            (this.ok = this.status >= 200 && this.status < 300);
        },
        Hd = (function(t) {
          function e(e) {
            void 0 === e && (e = {});
            var n = this;
            return ((n = t.call(this, e) || this).type = Ld.ResponseHeader), n;
          }
          return (
            __extends(e, t),
            (e.prototype.clone = function(t) {
              return (
                void 0 === t && (t = {}),
                new e({
                  headers: t.headers || this.headers,
                  status: void 0 !== t.status ? t.status : this.status,
                  statusText: t.statusText || this.statusText,
                  url: t.url || this.url || void 0,
                })
              );
            }),
            e
          );
        })(Ud),
        Bd = (function(t) {
          function e(e) {
            void 0 === e && (e = {});
            var n = this;
            return (
              ((n = t.call(this, e) || this).type = Ld.Response),
              (n.body = void 0 !== e.body ? e.body : null),
              n
            );
          }
          return (
            __extends(e, t),
            (e.prototype.clone = function(t) {
              return (
                void 0 === t && (t = {}),
                new e({
                  body: void 0 !== t.body ? t.body : this.body,
                  headers: t.headers || this.headers,
                  status: void 0 !== t.status ? t.status : this.status,
                  statusText: t.statusText || this.statusText,
                  url: t.url || this.url || void 0,
                })
              );
            }),
            e
          );
        })(Ud),
        zd = (function(t) {
          function e(e) {
            var n = this;
            return (
              ((n = t.call(this, e, 0, 'Unknown Error') || this).name = 'HttpErrorResponse'),
              (n.ok = !1),
              (n.message =
                n.status >= 200 && n.status < 300
                  ? 'Http failure during parsing for ' + (e.url || '(unknown url)')
                  : 'Http failure response for ' +
                    (e.url || '(unknown url)') +
                    ': ' +
                    e.status +
                    ' ' +
                    e.statusText),
              (n.error = e.error || null),
              n
            );
          }
          return __extends(e, t), e;
        })(Ud);
      function qd(t, e) {
        return {
          body: e,
          headers: t.headers,
          observe: t.observe,
          params: t.params,
          reportProgress: t.reportProgress,
          responseType: t.responseType,
          withCredentials: t.withCredentials,
        };
      }
      var Gd,
        Wd,
        Qd = (function() {
          function t(t) {
            this.handler = t;
          }
          return (
            (t.prototype.request = function(t, e, n) {
              var r,
                o = this;
              if ((void 0 === n && (n = {}), t instanceof Vd)) r = t;
              else {
                var i;
                i = n.headers instanceof Id ? n.headers : new Id(n.headers);
                var s = void 0;
                n.params &&
                  (s = n.params instanceof Dd ? n.params : new Dd({ fromObject: n.params })),
                  (r = new Vd(t, e, void 0 !== n.body ? n.body : null, {
                    headers: i,
                    params: s,
                    reportProgress: n.reportProgress,
                    responseType: n.responseType || 'json',
                    withCredentials: n.withCredentials,
                  }));
              }
              var a = ic(r).pipe(
                Wc(function(t) {
                  return o.handler.handle(t);
                }),
              );
              if (t instanceof Vd || 'events' === n.observe) return a;
              var u = a.pipe(
                yc(function(t) {
                  return t instanceof Bd;
                }),
              );
              switch (n.observe || 'body') {
                case 'body':
                  switch (r.responseType) {
                    case 'arraybuffer':
                      return u.pipe(
                        L(function(t) {
                          if (null !== t.body && !(t.body instanceof ArrayBuffer))
                            throw new Error('Response is not an ArrayBuffer.');
                          return t.body;
                        }),
                      );
                    case 'blob':
                      return u.pipe(
                        L(function(t) {
                          if (null !== t.body && !(t.body instanceof Blob))
                            throw new Error('Response is not a Blob.');
                          return t.body;
                        }),
                      );
                    case 'text':
                      return u.pipe(
                        L(function(t) {
                          if (null !== t.body && 'string' != typeof t.body)
                            throw new Error('Response is not a string.');
                          return t.body;
                        }),
                      );
                    case 'json':
                    default:
                      return u.pipe(
                        L(function(t) {
                          return t.body;
                        }),
                      );
                  }
                case 'response':
                  return u;
                default:
                  throw new Error('Unreachable: unhandled observe type ' + n.observe + '}');
              }
            }),
            (t.prototype.delete = function(t, e) {
              return void 0 === e && (e = {}), this.request('DELETE', t, e);
            }),
            (t.prototype.get = function(t, e) {
              return void 0 === e && (e = {}), this.request('GET', t, e);
            }),
            (t.prototype.head = function(t, e) {
              return void 0 === e && (e = {}), this.request('HEAD', t, e);
            }),
            (t.prototype.jsonp = function(t, e) {
              return this.request('JSONP', t, {
                params: new Dd().append(e, 'JSONP_CALLBACK'),
                observe: 'body',
                responseType: 'json',
              });
            }),
            (t.prototype.options = function(t, e) {
              return void 0 === e && (e = {}), this.request('OPTIONS', t, e);
            }),
            (t.prototype.patch = function(t, e, n) {
              return void 0 === n && (n = {}), this.request('PATCH', t, qd(n, e));
            }),
            (t.prototype.post = function(t, e, n) {
              return void 0 === n && (n = {}), this.request('POST', t, qd(n, e));
            }),
            (t.prototype.put = function(t, e, n) {
              return void 0 === n && (n = {}), this.request('PUT', t, qd(n, e));
            }),
            t
          );
        })(),
        Kd = (function() {
          function t(t, e) {
            (this.next = t), (this.interceptor = e);
          }
          return (
            (t.prototype.handle = function(t) {
              return this.interceptor.intercept(t, this.next);
            }),
            t
          );
        })(),
        Zd = new Tt('HTTP_INTERCEPTORS'),
        $d = (function() {
          function t() {}
          return (
            (t.prototype.intercept = function(t, e) {
              return e.handle(t);
            }),
            t
          );
        })(),
        Jd = /^\)\]\}',?\n/,
        Yd = function() {},
        Xd = (function() {
          function t() {}
          return (
            (t.prototype.build = function() {
              return new XMLHttpRequest();
            }),
            t
          );
        })(),
        ty = (function() {
          function t(t) {
            this.xhrFactory = t;
          }
          return (
            (t.prototype.handle = function(t) {
              var e = this;
              if ('JSONP' === t.method)
                throw new Error(
                  'Attempted to construct Jsonp request without JsonpClientModule installed.',
                );
              return new C(function(n) {
                var r = e.xhrFactory.build();
                if (
                  (r.open(t.method, t.urlWithParams),
                  t.withCredentials && (r.withCredentials = !0),
                  t.headers.forEach(function(t, e) {
                    return r.setRequestHeader(t, e.join(','));
                  }),
                  t.headers.has('Accept') ||
                    r.setRequestHeader('Accept', 'application/json, text/plain, */*'),
                  !t.headers.has('Content-Type'))
                ) {
                  var o = t.detectContentTypeHeader();
                  null !== o && r.setRequestHeader('Content-Type', o);
                }
                if (t.responseType) {
                  var i = t.responseType.toLowerCase();
                  r.responseType = 'json' !== i ? i : 'text';
                }
                var s = t.serializeBody(),
                  a = null,
                  u = function() {
                    if (null !== a) return a;
                    var e = 1223 === r.status ? 204 : r.status,
                      n = r.statusText || 'OK',
                      o = new Id(r.getAllResponseHeaders()),
                      i =
                        (function(t) {
                          return 'responseURL' in t && t.responseURL
                            ? t.responseURL
                            : /^X-Request-URL:/m.test(t.getAllResponseHeaders())
                            ? t.getResponseHeader('X-Request-URL')
                            : null;
                        })(r) || t.url;
                    return (a = new Hd({ headers: o, status: e, statusText: n, url: i }));
                  },
                  l = function() {
                    var e = u(),
                      o = e.headers,
                      i = e.status,
                      s = e.statusText,
                      a = e.url,
                      l = null;
                    204 !== i && (l = void 0 === r.response ? r.responseText : r.response),
                      0 === i && (i = l ? 200 : 0);
                    var c = i >= 200 && i < 300;
                    if ('json' === t.responseType && 'string' == typeof l) {
                      var h = l;
                      l = l.replace(Jd, '');
                      try {
                        l = '' !== l ? JSON.parse(l) : null;
                      } catch (p) {
                        (l = h), c && ((c = !1), (l = { error: p, text: l }));
                      }
                    }
                    c
                      ? (n.next(
                          new Bd({
                            body: l,
                            headers: o,
                            status: i,
                            statusText: s,
                            url: a || void 0,
                          }),
                        ),
                        n.complete())
                      : n.error(
                          new zd({
                            error: l,
                            headers: o,
                            status: i,
                            statusText: s,
                            url: a || void 0,
                          }),
                        );
                  },
                  c = function(t) {
                    var e = u().url,
                      o = new zd({
                        error: t,
                        status: r.status || 0,
                        statusText: r.statusText || 'Unknown Error',
                        url: e || void 0,
                      });
                    n.error(o);
                  },
                  h = !1,
                  p = function(e) {
                    h || (n.next(u()), (h = !0));
                    var o = { type: Ld.DownloadProgress, loaded: e.loaded };
                    e.lengthComputable && (o.total = e.total),
                      'text' === t.responseType &&
                        r.responseText &&
                        (o.partialText = r.responseText),
                      n.next(o);
                  },
                  f = function(t) {
                    var e = { type: Ld.UploadProgress, loaded: t.loaded };
                    t.lengthComputable && (e.total = t.total), n.next(e);
                  };
                return (
                  r.addEventListener('load', l),
                  r.addEventListener('error', c),
                  t.reportProgress &&
                    (r.addEventListener('progress', p),
                    null !== s && r.upload && r.upload.addEventListener('progress', f)),
                  r.send(s),
                  n.next({ type: Ld.Sent }),
                  function() {
                    r.removeEventListener('error', c),
                      r.removeEventListener('load', l),
                      t.reportProgress &&
                        (r.removeEventListener('progress', p),
                        null !== s && r.upload && r.upload.removeEventListener('progress', f)),
                      r.abort();
                  }
                );
              });
            }),
            t
          );
        })(),
        ey = new Tt('XSRF_COOKIE_NAME'),
        ny = new Tt('XSRF_HEADER_NAME'),
        ry = function() {},
        oy = (function() {
          function t(t, e, n) {
            (this.doc = t),
              (this.platform = e),
              (this.cookieName = n),
              (this.lastCookieString = ''),
              (this.lastToken = null),
              (this.parseCount = 0);
          }
          return (
            (t.prototype.getToken = function() {
              if ('server' === this.platform) return null;
              var t = this.doc.cookie || '';
              return (
                t !== this.lastCookieString &&
                  (this.parseCount++,
                  (this.lastToken = Oa(t, this.cookieName)),
                  (this.lastCookieString = t)),
                this.lastToken
              );
            }),
            t
          );
        })(),
        iy = (function() {
          function t(t, e) {
            (this.tokenService = t), (this.headerName = e);
          }
          return (
            (t.prototype.intercept = function(t, e) {
              var n = t.url.toLowerCase();
              if (
                'GET' === t.method ||
                'HEAD' === t.method ||
                n.startsWith('http://') ||
                n.startsWith('https://')
              )
                return e.handle(t);
              var r = this.tokenService.getToken();
              return (
                null === r ||
                  t.headers.has(this.headerName) ||
                  (t = t.clone({ headers: t.headers.set(this.headerName, r) })),
                e.handle(t)
              );
            }),
            t
          );
        })(),
        sy = (function() {
          function t(t, e) {
            (this.backend = t), (this.injector = e), (this.chain = null);
          }
          return (
            (t.prototype.handle = function(t) {
              if (null === this.chain) {
                var e = this.injector.get(Zd, []);
                this.chain = e.reduceRight(function(t, e) {
                  return new Kd(t, e);
                }, this.backend);
              }
              return this.chain.handle(t);
            }),
            t
          );
        })(),
        ay = (function() {
          function t() {}
          return (
            (t.disable = function() {
              return { ngModule: t, providers: [{ provide: iy, useClass: $d }] };
            }),
            (t.withOptions = function(e) {
              return (
                void 0 === e && (e = {}),
                {
                  ngModule: t,
                  providers: [
                    e.cookieName ? { provide: ey, useValue: e.cookieName } : [],
                    e.headerName ? { provide: ny, useValue: e.headerName } : [],
                  ],
                }
              );
            }),
            t
          );
        })(),
        uy = function() {},
        ly =
          (((Gd = (function() {
            function t(t, e) {
              (this.http = t),
                (this.router = e),
                (this.endpoint = pa.url),
                (this.isPlaying = !1),
                (this.isLostGame = !1),
                (this.nextFigure = Pd.getRandomFigure()),
                (this.currentLevel = 1),
                (this.currentNumberLines = 0),
                (this.currentScore = 0),
                (this.movementSubject = new O()),
                (this.gameStateSubject = new O()),
                (this.nextFigureSubject = new O()),
                (this.numberLinesSubject = new sc({ lines: 0, score: 0, level: 1 })),
                (this.lostGameSubject = new O());
            }
            return (
              (t.calculateScore = function(t, e) {
                return (t / 2) * (2 * (5 + 5 * e) + 2 * (t - 1));
              }),
              (t.prototype.setLostGame = function() {
                this.isLostGame = !0;
                var t = {
                  username: localStorage.getItem('user_name'),
                  lines: this.currentNumberLines,
                  score: this.currentScore,
                  level: this.currentLevel,
                };
                return (
                  this.lostGameSubject.next(), this.http.post(this.endpoint + '/add_result', t)
                );
              }),
              (t.prototype.getPlayerGameResult = function() {
                return this.http.get(this.endpoint + '/result').pipe(
                  L(function(t) {
                    return t.map(function(t) {
                      return new Od(t);
                    });
                  }),
                );
              }),
              (t.prototype.onLostGame = function() {
                return this.lostGameSubject.asObservable();
              }),
              (t.prototype.setMoveStep = function(t) {
                this.isPlaying && !this.isLostGame && this.movementSubject.next(t);
              }),
              (t.prototype.onNextStep = function() {
                return this.movementSubject.asObservable();
              }),
              (t.prototype.setGameState = function(t) {
                (this.isPlaying = t !== Sd.PAUSE),
                  (this.isLostGame = !1),
                  this.gameStateSubject.next(t);
              }),
              (t.prototype.getGameState = function() {
                return this.gameStateSubject.asObservable();
              }),
              (t.prototype.updateFigures = function() {
                this.currentFigure = this.nextFigure;
                var t = this.currentFigure,
                  e = Pd.getRandomFigure();
                (this.nextFigure = e),
                  this.nextFigureSubject.next({ previousFigure: t, randomNextFigure: e });
              }),
              (t.prototype.onNewFigureCreated = function() {
                return this.nextFigureSubject.asObservable();
              }),
              (t.prototype.setNumberFilledLines = function(e) {
                var n = 2 * e;
                (this.currentNumberLines = e ? this.currentNumberLines + e : e),
                  (this.currentScore = n
                    ? this.currentScore + t.calculateScore(e, this.currentLevel)
                    : n),
                  this.currentNumberLines >= 3 * this.currentLevel && (this.currentLevel += 1),
                  this.numberLinesSubject.next({
                    lines: this.currentNumberLines,
                    score: this.currentScore,
                    level: this.currentLevel,
                  });
              }),
              (t.prototype.setInitialInformation = function() {
                (this.currentLevel = 1),
                  (this.currentScore = 0),
                  (this.currentNumberLines = 0),
                  this.numberLinesSubject.next({
                    lines: this.currentNumberLines,
                    score: this.currentScore,
                    level: this.currentLevel,
                  });
              }),
              (t.prototype.onUpdateGameInformation = function() {
                return this.numberLinesSubject.asObservable();
              }),
              t
            );
          })()).ngInjectableDef = pt({
            factory: function() {
              return new Gd(Ft(Qd), Ft(gf));
            },
            token: Gd,
            providedIn: 'root',
          })),
          Gd),
        cy = n('kScs'),
        hy =
          (((Wd = (function() {
            function t(t, e) {
              (this.http = t),
                (this.router = e),
                (this.endpoint = pa.url),
                (this.authListener = new sc(JSON.parse(localStorage.getItem('access_user'))));
            }
            return (
              (t.prototype.createUser = function(t) {
                var e = new cy.Md5(),
                  n = {
                    username: t.userInformation.username,
                    password: '' + e.appendStr(t.userInformation.password).end(),
                    gender: t.playerInformation.gender,
                    dateOfBirth: t.playerInformation.dateOfBirth,
                    country: t.playerInformation.country,
                  };
                return this.http.post(this.endpoint + '/sign_up', n);
              }),
              (t.prototype.loginUser = function(t) {
                var e = new cy.Md5(),
                  n = { username: t.username, password: e.appendStr(t.password).end() };
                return this.http.post(this.endpoint + '/login', n);
              }),
              (t.prototype.logoutUser = function() {
                return (
                  localStorage.removeItem('access_token'),
                  localStorage.removeItem('access_user'),
                  localStorage.removeItem('user_name'),
                  (this.token = null),
                  this.authListener.next(null),
                  this.http.get(this.endpoint + '/logout')
                );
              }),
              (t.prototype.setUser = function(t) {
                this.authListener.next(t);
              }),
              (t.prototype.getToken = function() {
                return localStorage.getItem('access_token');
              }),
              (t.prototype.getUserName = function() {
                return localStorage.getItem('user_name');
              }),
              (t.prototype.getAuthListener = function() {
                return this.authListener.asObservable();
              }),
              t
            );
          })()).ngInjectableDef = pt({
            factory: function() {
              return new Wd(Ft(Qd), Ft(gf));
            },
            token: Wd,
            providedIn: 'root',
          })),
          Wd),
        py = $n({
          encapsulation: 0,
          styles: [
            [
              '.leaderboard[_ngcontent-%COMP%]{padding:1rem;margin:.5rem 0;border:1px solid #fff;border-radius:1rem;width:100%;transition:border-color .3s ease-out;text-transform:none}.leaderboard[_ngcontent-%COMP%]:hover{border:1px solid #bf0117}.leaderboard[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%]{background-color:#bf0117}.leaderboard__header[_ngcontent-%COMP%]{border:none;color:#000}.leaderboard__header[_ngcontent-%COMP%]:hover{border:none}.leaderboard__list[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;padding:1rem;border-radius:1rem;background-color:#2b3a42;list-style:none}.leaderboard__field[_ngcontent-%COMP%]{flex-basis:24%;text-align:center}.leaderboard__field--index[_ngcontent-%COMP%]{flex-basis:4%}.leaderboard__player-name[_ngcontent-%COMP%]{text-align:left}.leaderboard__current-player[_ngcontent-%COMP%]{text-align:center}.point[_ngcontent-%COMP%]{display:inline-block;width:1rem;height:1rem;margin:2rem;border:2px solid #979797}',
            ],
          ],
          data: {},
        });
      function fy(t) {
        return ss(
          0,
          [
            (t()(),
            zi(
              0,
              0,
              null,
              null,
              14,
              'ul',
              [['class', 'leaderboard']],
              null,
              null,
              null,
              null,
              null,
            )),
            (t()(),
            zi(
              1,
              0,
              null,
              null,
              13,
              'li',
              [['class', 'leaderboard__list']],
              null,
              null,
              null,
              null,
              null,
            )),
            so(512, null, ka, Aa, [En, Tn, sn, hn]),
            oo(
              3,
              278528,
              null,
              0,
              Ia,
              [ka],
              { klass: [0, 'klass'], ngClass: [1, 'ngClass'] },
              null,
            ),
            es(4, { active: 0 }),
            (t()(),
            zi(
              5,
              0,
              null,
              null,
              1,
              'span',
              [['class', 'leaderboard__field--index']],
              null,
              null,
              null,
              null,
              null,
            )),
            (t()(), rs(6, null, ['', ''])),
            (t()(),
            zi(
              7,
              0,
              null,
              null,
              1,
              'span',
              [['class', 'leaderboard__field leaderboard__player-name']],
              null,
              null,
              null,
              null,
              null,
            )),
            (t()(), rs(8, null, ['', ''])),
            (t()(),
            zi(
              9,
              0,
              null,
              null,
              1,
              'span',
              [['class', 'leaderboard__field']],
              null,
              null,
              null,
              null,
              null,
            )),
            (t()(), rs(10, null, ['', ''])),
            (t()(),
            zi(
              11,
              0,
              null,
              null,
              1,
              'span',
              [['class', 'leaderboard__field']],
              null,
              null,
              null,
              null,
              null,
            )),
            (t()(), rs(12, null, ['', ''])),
            (t()(),
            zi(
              13,
              0,
              null,
              null,
              1,
              'span',
              [['class', 'leaderboard__field']],
              null,
              null,
              null,
              null,
              null,
            )),
            (t()(), rs(14, null, ['', ''])),
          ],
          function(t, e) {
            var n = t(e, 4, 0, e.component.currentPlayerName === e.context.$implicit.username);
            t(e, 3, 0, 'leaderboard__list', n);
          },
          function(t, e) {
            t(e, 6, 0, e.context.index + 1),
              t(e, 8, 0, e.context.$implicit.username),
              t(e, 10, 0, e.context.$implicit.score),
              t(e, 12, 0, e.context.$implicit.level),
              t(e, 14, 0, e.context.$implicit.lines);
          },
        );
      }
      function dy(t) {
        return ss(
          0,
          [
            (t()(),
            zi(
              0,
              0,
              null,
              null,
              17,
              'div',
              [['class', 'leaderboard__current-player']],
              null,
              null,
              null,
              null,
              null,
            )),
            (t()(),
            zi(1, 0, null, null, 0, 'div', [['class', 'point']], null, null, null, null, null)),
            (t()(),
            zi(2, 0, null, null, 0, 'div', [['class', 'point']], null, null, null, null, null)),
            (t()(),
            zi(3, 0, null, null, 0, 'div', [['class', 'point']], null, null, null, null, null)),
            (t()(), zi(4, 0, null, null, 1, 'p', [], null, null, null, null, null)),
            (t()(), rs(-1, null, ['Your best score:'])),
            (t()(),
            zi(
              6,
              0,
              null,
              null,
              11,
              'ul',
              [['class', 'leaderboard']],
              null,
              null,
              null,
              null,
              null,
            )),
            (t()(),
            zi(
              7,
              0,
              null,
              null,
              10,
              'li',
              [['class', 'leaderboard__list']],
              null,
              null,
              null,
              null,
              null,
            )),
            (t()(),
            zi(
              8,
              0,
              null,
              null,
              1,
              'span',
              [['class', 'leaderboard_index']],
              null,
              null,
              null,
              null,
              null,
            )),
            (t()(), rs(9, null, ['', ''])),
            (t()(),
            zi(
              10,
              0,
              null,
              null,
              1,
              'span',
              [['class', 'leaderboard__field leaderboard__player-name']],
              null,
              null,
              null,
              null,
              null,
            )),
            (t()(), rs(11, null, ['', ''])),
            (t()(),
            zi(
              12,
              0,
              null,
              null,
              1,
              'span',
              [['class', 'leaderboard__field']],
              null,
              null,
              null,
              null,
              null,
            )),
            (t()(), rs(13, null, ['', ''])),
            (t()(),
            zi(
              14,
              0,
              null,
              null,
              1,
              'span',
              [['class', 'leaderboard__field']],
              null,
              null,
              null,
              null,
              null,
            )),
            (t()(), rs(15, null, ['', ''])),
            (t()(),
            zi(
              16,
              0,
              null,
              null,
              1,
              'span',
              [['class', 'leaderboard__field']],
              null,
              null,
              null,
              null,
              null,
            )),
            (t()(), rs(17, null, ['', ''])),
          ],
          null,
          function(t, e) {
            var n = e.component;
            t(e, 9, 0, n.currentPlayerPlace),
              t(e, 11, 0, n.currentPlayerNotInTop.username),
              t(e, 13, 0, n.currentPlayerNotInTop.score),
              t(e, 15, 0, n.currentPlayerNotInTop.level),
              t(e, 17, 0, n.currentPlayerNotInTop.lines);
          },
        );
      }
      function yy(t) {
        return ss(
          0,
          [
            (t()(),
            zi(
              0,
              0,
              null,
              null,
              16,
              'div',
              [['class', 'container main']],
              null,
              null,
              null,
              null,
              null,
            )),
            (t()(),
            zi(
              1,
              0,
              null,
              null,
              11,
              'header',
              [['class', 'leaderboard leaderboard__header']],
              null,
              null,
              null,
              null,
              null,
            )),
            (t()(),
            zi(
              2,
              0,
              null,
              null,
              10,
              'ul',
              [['class', 'leaderboard__list']],
              null,
              null,
              null,
              null,
              null,
            )),
            (t()(),
            zi(
              3,
              0,
              null,
              null,
              1,
              'li',
              [['class', 'leaderboard__field--index']],
              null,
              null,
              null,
              null,
              null,
            )),
            (t()(), rs(-1, null, ['\u2116'])),
            (t()(),
            zi(
              5,
              0,
              null,
              null,
              1,
              'li',
              [['class', 'leaderboard__field leaderboard__player-name']],
              null,
              null,
              null,
              null,
              null,
            )),
            (t()(), rs(-1, null, ['name'])),
            (t()(),
            zi(
              7,
              0,
              null,
              null,
              1,
              'li',
              [['class', 'leaderboard__field']],
              null,
              null,
              null,
              null,
              null,
            )),
            (t()(), rs(-1, null, ['score'])),
            (t()(),
            zi(
              9,
              0,
              null,
              null,
              1,
              'li',
              [['class', 'leaderboard__field']],
              null,
              null,
              null,
              null,
              null,
            )),
            (t()(), rs(-1, null, ['level'])),
            (t()(),
            zi(
              11,
              0,
              null,
              null,
              1,
              'li',
              [['class', 'leaderboard__field']],
              null,
              null,
              null,
              null,
              null,
            )),
            (t()(), rs(-1, null, ['lines'])),
            (t()(), Bi(16777216, null, null, 1, null, fy)),
            oo(14, 278528, null, 0, Ra, [In, kn, En], { ngForOf: [0, 'ngForOf'] }, null),
            (t()(), Bi(16777216, null, null, 1, null, dy)),
            oo(16, 16384, null, 0, Fa, [In, kn], { ngIf: [0, 'ngIf'] }, null),
          ],
          function(t, e) {
            var n = e.component;
            t(e, 14, 0, n.gameResults), t(e, 16, 0, n.isCurrentPlayerNotInTop);
          },
          null,
        );
      }
      var gy = Dr(
          'atg-game-leaderboard',
          ya,
          function(t) {
            return ss(
              0,
              [
                (t()(),
                zi(0, 0, null, null, 1, 'atg-game-leaderboard', [], null, null, null, yy, py)),
                oo(1, 114688, null, 0, ya, [ly, hy], null, null),
              ],
              function(t, e) {
                t(e, 1, 0);
              },
              null,
            );
          },
          {},
          {},
          [],
        ),
        my = function(t) {
          (this.gameService = t), (this.gameStats$ = this.gameService.onUpdateGameInformation());
        },
        vy = $n({
          encapsulation: 0,
          styles: [
            [
              '.information-block[_ngcontent-%COMP%]{margin-bottom:2rem}.information-label[_ngcontent-%COMP%]{margin-bottom:1rem;font-size:1.33rem;text-align:center;color:#979797}.information-field[_ngcontent-%COMP%]{margin:0 auto;height:55px;width:7rem;background-color:#2b3a42;border:1.5px solid #fff;line-height:55px;font-size:1.33rem;text-align:center}',
            ],
          ],
          data: {},
        });
      function _y(t) {
        return ss(
          0,
          [
            (t()(),
            zi(
              0,
              0,
              null,
              null,
              18,
              'div',
              [['class', 'information']],
              null,
              null,
              null,
              null,
              null,
            )),
            (t()(),
            zi(
              1,
              0,
              null,
              null,
              5,
              'div',
              [['class', 'information-block']],
              null,
              null,
              null,
              null,
              null,
            )),
            (t()(),
            zi(
              2,
              0,
              null,
              null,
              1,
              'p',
              [['class', 'information-label']],
              null,
              null,
              null,
              null,
              null,
            )),
            (t()(), rs(-1, null, ['level'])),
            (t()(),
            zi(
              4,
              0,
              null,
              null,
              2,
              'div',
              [['class', 'information-field']],
              null,
              null,
              null,
              null,
              null,
            )),
            (t()(), rs(5, null, ['', ''])),
            io(131072, Ba, [Pe]),
            (t()(),
            zi(
              7,
              0,
              null,
              null,
              5,
              'div',
              [['class', 'information-block']],
              null,
              null,
              null,
              null,
              null,
            )),
            (t()(),
            zi(
              8,
              0,
              null,
              null,
              1,
              'p',
              [['class', 'information-label']],
              null,
              null,
              null,
              null,
              null,
            )),
            (t()(), rs(-1, null, ['score'])),
            (t()(),
            zi(
              10,
              0,
              null,
              null,
              2,
              'div',
              [['class', 'information-field']],
              null,
              null,
              null,
              null,
              null,
            )),
            (t()(), rs(11, null, ['', ''])),
            io(131072, Ba, [Pe]),
            (t()(),
            zi(
              13,
              0,
              null,
              null,
              5,
              'div',
              [['class', 'information-block']],
              null,
              null,
              null,
              null,
              null,
            )),
            (t()(),
            zi(
              14,
              0,
              null,
              null,
              1,
              'p',
              [['class', 'information-label']],
              null,
              null,
              null,
              null,
              null,
            )),
            (t()(), rs(-1, null, ['lines'])),
            (t()(),
            zi(
              16,
              0,
              null,
              null,
              2,
              'div',
              [['class', 'information-field']],
              null,
              null,
              null,
              null,
              null,
            )),
            (t()(), rs(17, null, ['', ''])),
            io(131072, Ba, [Pe]),
          ],
          null,
          function(t, e) {
            var n = e.component;
            t(e, 5, 0, Qn(e, 5, 0, Gr(e, 6).transform(n.gameStats$)).level),
              t(e, 11, 0, Qn(e, 11, 0, Gr(e, 12).transform(n.gameStats$)).score),
              t(e, 17, 0, Qn(e, 17, 0, Gr(e, 18).transform(n.gameStats$)).lines);
          },
        );
      }
      var by = (function() {
          function t(t, e) {
            (this.ctx = t), (this.color = e), (this.ctx.fillStyle = e), (this.ctx.strokeStyle = xd);
          }
          return (
            (t.prototype.fillBoardBlock = function(t, e) {
              this.ctx.fillRect(25 * t, 25 * e, 25, 25), this.fillStroke(t, e);
            }),
            t
          );
        })(),
        wy = (function(t) {
          function e() {
            return (null !== t && t.apply(this, arguments)) || this;
          }
          return (
            __extends(e, t),
            (e.prototype.fillStroke = function(t, e) {
              this.ctx.fillStyle !== Ed.DEFAULT && this.ctx.strokeRect(25 * t, 25 * e, 25, 25);
            }),
            e
          );
        })(by),
        Cy = (function(t) {
          function e() {
            return (null !== t && t.apply(this, arguments)) || this;
          }
          return (
            __extends(e, t),
            (e.prototype.fillStroke = function(t, e) {
              this.ctx.strokeRect(25 * t, 25 * e, 25, 25);
            }),
            e
          );
        })(by),
        Sy = (function() {
          function t(t, e) {
            (this.ctx = t), (this.isNextFigure = e);
          }
          return (
            (t.makeBoardEmptyMatrix = function(t, e) {
              return new Array(e).fill(new Array(t).fill(Ed.DEFAULT));
            }),
            (t.findFilledLine = function(t, e, n) {
              return t
                .map(function(t, r) {
                  return n - 1 + r < 20 &&
                    e[n - 1 + r].every(function(t) {
                      return t !== Ed.DEFAULT;
                    })
                    ? r
                    : -1;
                })
                .filter(function(t) {
                  return -1 !== t;
                });
            }),
            (t.prototype.drawBoard = function(t) {
              var e = this;
              t.forEach(function(t, n) {
                t.forEach(function(t, r) {
                  (e.isNextFigure ? new wy(e.ctx, t) : new Cy(e.ctx, t)).fillBoardBlock(r, n);
                });
              });
            }),
            t
          );
        })(),
        Ey = (function(t) {
          return (
            (t.LEFT = 'left'),
            (t.RIGHT = 'right'),
            (t.ROTATE = 'rotate'),
            (t.DOWN = 'down'),
            (t.DOWN_OFF = 'down_off'),
            t
          );
        })({}),
        Ty = (function() {
          function t(t, e) {
            (this.gameService = t), (this.toastrService = e);
          }
          return (
            (t.prototype.ngOnInit = function() {
              var t = this;
              (this.canvas.nativeElement.width = 325),
                (this.canvas.nativeElement.height = 500),
                (this.ctx = this.canvas.nativeElement.getContext('2d')),
                (this.boardMatrix = Sy.makeBoardEmptyMatrix(13, 20)),
                (this.isLostGame = !1),
                (this.isPlaying = !0),
                this.gameService.updateFigures(),
                (this.duration = 700),
                (this.currentLevel = 1),
                (this.subscriptionState = this.gameService.getGameState().subscribe(function(e) {
                  (t.textStateOverlay = Sd.PAUSE),
                    (t.isPlaying = e !== Sd.PAUSE),
                    t.isLostGame && t.gameService.setInitialInformation(),
                    (t.isLostGame = !1),
                    e === Sd.RESET && t.resetGame(),
                    e === Sd.PAUSE && t.stopGame(),
                    e === Sd.PLAY && t.playGame();
                })),
                (this.subscriptionMove = this.gameService.onNextStep().subscribe(function(e) {
                  if (
                    (e === Ey.LEFT &&
                      t.checkCollisionDetection(-1, t.currentFigure) &&
                      ((t.figurePosition -= 1), t.redrawBoard()),
                    e === Ey.RIGHT &&
                      t.checkCollisionDetection(1, t.currentFigure) &&
                      ((t.figurePosition += 1), t.redrawBoard()),
                    e === Ey.ROTATE)
                  ) {
                    var n = t.rotateFigure(t.currentFigure);
                    t.checkCollisionDetection(0, n) && ((t.currentFigure = n), t.redrawBoard());
                  }
                  e === Ey.DOWN &&
                    (clearInterval(t.timeInterval), (t.duration = 700 / 22), t.playGame()),
                    e === Ey.DOWN_OFF &&
                      (clearInterval(t.timeInterval),
                      (t.duration = 700 - 100 * t.currentLevel),
                      t.playGame());
                })),
                (this.subscriptionNext = this.gameService
                  .onNewFigureCreated()
                  .subscribe(function(e) {
                    var n = e.previousFigure;
                    (t.currentFigure = n), t.setInitialBoardState();
                  })),
                (this.subscriptionLevel = this.gameService
                  .onUpdateGameInformation()
                  .pipe(
                    yc(function(e) {
                      return t.currentLevel !== e.level;
                    }),
                  )
                  .subscribe(function(e) {
                    var n = e.level;
                    clearInterval(t.timeInterval),
                      (t.currentLevel = n),
                      (t.duration = 700 - 100 * t.currentLevel),
                      t.playGame();
                  })),
                this.gameService.updateFigures();
            }),
            (t.prototype.ngOnDestroy = function() {
              this.subscriptionState.unsubscribe(),
                this.subscriptionMove.unsubscribe(),
                this.subscriptionNext.unsubscribe(),
                this.subscriptionLevel.unsubscribe();
            }),
            (t.prototype.rotateFigure = function(t) {
              var e = t.slice();
              return (
                e.reverse(),
                e[0].map(function(t, n) {
                  return e.map(function(t) {
                    return t[n];
                  });
                })
              );
            }),
            (t.prototype.redrawBoard = function() {
              var t = new Pd(),
                e = new Sy(this.ctx, !1);
              (this.currentMatrix = t.showFigure(
                this.lineWithFigure,
                this.currentFigure,
                this.boardMatrix,
                this.figurePosition,
              )),
                e.drawBoard(this.currentMatrix);
            }),
            (t.prototype.setInitialBoardState = function() {
              (this.lineWithFigure = 0), (this.figurePosition = 5), (this.duration = 700);
            }),
            (t.prototype.playGame = function() {
              var t = this;
              this.timeInterval = window.setInterval(function() {
                t.checkCollisionDetection(0, t.currentFigure)
                  ? (t.redrawBoard(), (t.lineWithFigure += 1))
                  : t.checkCollisionDetection(0, t.currentFigure) || 0 !== t.lineWithFigure
                  ? (t.deleteFilledLines(),
                    (t.boardMatrix = t.currentMatrix),
                    t.gameService.updateFigures(),
                    t.redrawBoard(),
                    t.setInitialBoardState())
                  : (t.redrawBoard(), t.lostGame());
              }, this.duration);
            }),
            (t.prototype.checkCollisionDetection = function(t, e) {
              var n = this;
              return e.every(function(e, r) {
                return e.every(function(e, o) {
                  if (e === Ed.DEFAULT) return !0;
                  var i = n.figurePosition + o + t,
                    s = n.lineWithFigure + r;
                  return i >= 0 && i <= 13 && s < 20 && n.boardMatrix[s][i] === Ed.DEFAULT;
                });
              });
            }),
            (t.prototype.deleteFilledLines = function() {
              var t = this,
                e = Sy.findFilledLine(this.currentFigure, this.currentMatrix, this.lineWithFigure);
              e.length > 0 &&
                (this.gameService.setNumberFilledLines(e.length),
                e.forEach(function(e) {
                  t.currentMatrix.splice(t.lineWithFigure - 1 + e, 1),
                    t.currentMatrix.unshift(new Array(13).fill(Ed.DEFAULT));
                }));
            }),
            (t.prototype.stopGame = function() {
              clearInterval(this.timeInterval);
            }),
            (t.prototype.resetGame = function() {
              (this.boardMatrix = Sy.makeBoardEmptyMatrix(13, 20)),
                this.gameService.updateFigures(),
                this.redrawBoard(),
                clearInterval(this.timeInterval),
                this.setInitialBoardState(),
                this.playGame();
            }),
            (t.prototype.lostGame = function() {
              var t = this;
              (this.isLostGame = !0),
                (this.isPlaying = !1),
                this.gameService.setLostGame().subscribe(function() {
                  t.toastrService.warning('You have successfully added your result to Leaderboard');
                }),
                this.gameService.updateFigures(),
                this.setInitialBoardState(),
                clearInterval(this.timeInterval),
                (this.textStateOverlay = Sd.LOST),
                (this.boardMatrix = Sy.makeBoardEmptyMatrix(13, 20));
            }),
            t
          );
        })(),
        xy = $n({
          encapsulation: 0,
          styles: [
            [
              '.board-canvas[_ngcontent-%COMP%]{border:1.5px solid #fff;background-color:#2b3a42}.overlay[_ngcontent-%COMP%]{position:absolute;width:327px;height:503px;background-color:rgba(0,0,0,.85);border:3px solid #fff;text-align:center;line-height:500px;color:#bf0117;font-size:5rem}',
            ],
          ],
          data: {},
        });
      function Py(t) {
        return ss(
          0,
          [
            (t()(),
            zi(0, 0, null, null, 1, 'div', [['class', 'overlay']], null, null, null, null, null)),
            (t()(), rs(1, null, ['', ''])),
          ],
          null,
          function(t, e) {
            t(e, 1, 0, e.component.textStateOverlay);
          },
        );
      }
      function Oy(t) {
        return ss(
          0,
          [
            Ki(402653184, 1, { canvas: 0 }),
            (t()(), zi(1, 0, null, null, 3, 'div', [], null, null, null, null, null)),
            (t()(), Bi(16777216, null, null, 1, null, Py)),
            oo(3, 16384, null, 0, Fa, [In, kn], { ngIf: [0, 'ngIf'] }, null),
            (t()(),
            zi(
              4,
              0,
              [
                [1, 0],
                ['canvas', 1],
              ],
              null,
              0,
              'canvas',
              [['class', 'board-canvas']],
              null,
              null,
              null,
              null,
              null,
            )),
          ],
          function(t, e) {
            var n = e.component;
            t(e, 3, 0, !n.isPlaying || n.isLostGame);
          },
          null,
        );
      }
      var ky = (function() {
          function t(t) {
            this.gameService = t;
          }
          return (
            (t.prototype.ngOnInit = function() {
              var t = this;
              (this.ctx = this.nextCanvas.nativeElement.getContext('2d')),
                (this.subscriptionNext = this.gameService
                  .onNewFigureCreated()
                  .subscribe(function(e) {
                    var n = e.randomNextFigure;
                    t.setInitialState(n);
                  })),
                this.gameService.updateFigures();
            }),
            (t.prototype.ngOnDestroy = function() {
              this.subscriptionNext.unsubscribe();
            }),
            (t.prototype.setInitialState = function(t) {
              this.nextFigure = t;
              var e = new Sy(this.ctx, !0);
              (this.nextCanvas.nativeElement.width = 25 * this.nextFigure[0].length),
                (this.nextCanvas.nativeElement.height = 25 * this.nextFigure.length),
                e.drawBoard(this.nextFigure);
            }),
            t
          );
        })(),
        Ay = $n({
          encapsulation: 0,
          styles: [
            [
              '.next-figure__label[_ngcontent-%COMP%]{padding:0 2rem;margin-bottom:1rem;color:#979797;text-align:center}.next-figure__field[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;margin:0 auto;width:14rem;height:110px;background-color:#2b3a42;border:1.5px solid #fff}',
            ],
          ],
          data: {},
        });
      function Iy(t) {
        return ss(
          0,
          [
            Ki(402653184, 1, { nextCanvas: 0 }),
            (t()(),
            zi(
              1,
              0,
              null,
              null,
              4,
              'div',
              [['class', 'next-figure']],
              null,
              null,
              null,
              null,
              null,
            )),
            (t()(),
            zi(
              2,
              0,
              null,
              null,
              1,
              'p',
              [['class', 'next-figure__label']],
              null,
              null,
              null,
              null,
              null,
            )),
            (t()(), rs(-1, null, ['next'])),
            (t()(),
            zi(
              4,
              0,
              null,
              null,
              1,
              'div',
              [['class', 'next-figure__field']],
              null,
              null,
              null,
              null,
              null,
            )),
            (t()(),
            zi(
              5,
              0,
              [
                [1, 0],
                ['nextCanvas', 1],
              ],
              null,
              0,
              'canvas',
              [],
              null,
              null,
              null,
              null,
              null,
            )),
          ],
          null,
          null,
        );
      }
      var Ny = (function() {
          function t(t) {
            this.gameService = t;
          }
          return (
            (t.prototype.ngOnInit = function() {
              var t = this;
              (this.subscriptionLost = this.gameService.onLostGame().subscribe(function() {
                t.isPlaying = !1;
              })),
                (this.subscriptionState = this.gameService.getGameState().subscribe(function(e) {
                  t.isPlaying = e !== Sd.PAUSE;
                }));
            }),
            (t.prototype.ngOnDestroy = function() {
              this.subscriptionState.unsubscribe();
            }),
            (t.prototype.keyBoardInput = function(t) {
              switch ((t.preventDefault(), t.code)) {
                case 'KeyP':
                  this.pauseGame();
                  break;
                case 'KeyR':
                  this.resetGame();
                  break;
                case 'Enter':
                  this.playGame();
              }
            }),
            (t.prototype.resetGame = function() {
              this.gameService.setInitialInformation(), this.gameService.setGameState(Sd.RESET);
            }),
            (t.prototype.pauseGame = function() {
              this.gameService.setGameState(Sd.PAUSE);
            }),
            (t.prototype.playGame = function() {
              this.isPlaying || this.gameService.setGameState(Sd.PLAY);
            }),
            t
          );
        })(),
        Ry = $n({
          encapsulation: 0,
          styles: [
            [
              '.controls[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center}.controls-action[_ngcontent-%COMP%]:hover{border-color:#000;box-shadow:inset 0 -3.5rem 0 0 #bf0117;cursor:pointer}',
            ],
          ],
          data: {},
        });
      function Dy(t) {
        return ss(
          0,
          [
            (t()(), zi(0, 0, null, null, 2, 'div', [], null, null, null, null, null)),
            (t()(),
            zi(
              1,
              0,
              null,
              null,
              1,
              'button',
              [['class', 'controls-action game-button pause']],
              null,
              [[null, 'click']],
              function(t, e, n) {
                var r = !0;
                return 'click' === e && (r = !1 !== t.component.pauseGame() && r), r;
              },
              null,
              null,
            )),
            (t()(), rs(-1, null, [' pause '])),
          ],
          null,
          null,
        );
      }
      function Fy(t) {
        return ss(
          0,
          [
            (t()(),
            zi(
              0,
              0,
              null,
              null,
              1,
              'button',
              [['class', 'controls-action game-button play']],
              null,
              [[null, 'click']],
              function(t, e, n) {
                var r = !0;
                return 'click' === e && (r = !1 !== t.component.playGame() && r), r;
              },
              null,
              null,
            )),
            (t()(), rs(-1, null, [' play '])),
          ],
          null,
          null,
        );
      }
      function jy(t) {
        return ss(
          0,
          [
            (t()(),
            zi(0, 0, null, null, 4, 'div', [['class', 'controls']], null, null, null, null, null)),
            (t()(), Bi(16777216, null, null, 1, null, Dy)),
            oo(
              2,
              16384,
              null,
              0,
              Fa,
              [In, kn],
              { ngIf: [0, 'ngIf'], ngIfElse: [1, 'ngIfElse'] },
              null,
            ),
            (t()(),
            zi(
              3,
              0,
              null,
              null,
              1,
              'button',
              [['class', 'controls-action game-button reset']],
              null,
              [[null, 'click']],
              function(t, e, n) {
                var r = !0;
                return 'click' === e && (r = !1 !== t.component.resetGame() && r), r;
              },
              null,
              null,
            )),
            (t()(), rs(-1, null, [' reset '])),
            (t()(), Bi(0, [['pause', 2]], null, 0, null, Fy)),
          ],
          function(t, e) {
            t(e, 2, 0, e.component.isPlaying, Gr(e, 5));
          },
          null,
        );
      }
      var My = (function() {
          function t(t) {
            (this.gameService = t), (this.moveStep = Ey);
          }
          return (
            (t.prototype.ngOnInit = function() {
              var t = this;
              (this.subscriptionState = this.gameService.getGameState().subscribe(function(e) {
                (t.isPlaying = e !== Sd.PAUSE), (t.isLostGame = !1);
              })),
                (this.subscriptionLost = this.gameService.onLostGame().subscribe(function() {
                  t.isLostGame = !0;
                }));
            }),
            (t.prototype.ngOnDestroy = function() {
              this.subscriptionLost.unsubscribe(), this.subscriptionState.unsubscribe();
            }),
            (t.prototype.keyBoardInput = function(t) {
              if (this.isPlaying && !this.isLostGame)
                switch ((t.preventDefault(), t.code)) {
                  case 'ArrowRight':
                    this.gameService.setMoveStep(Ey.RIGHT);
                    break;
                  case 'ArrowLeft':
                    this.gameService.setMoveStep(Ey.LEFT);
                    break;
                  case 'ArrowUp':
                    this.gameService.setMoveStep(Ey.ROTATE);
                    break;
                  case 'ArrowDown':
                    this.gameService.setMoveStep(Ey.DOWN);
                }
            }),
            (t.prototype.keyBoardUp = function(t) {
              this.isPlaying &&
                !this.isLostGame &&
                (t.preventDefault(),
                'ArrowDown' === t.code && this.gameService.setMoveStep(Ey.DOWN_OFF));
            }),
            (t.prototype.moveFigure = function(t) {
              this.gameService.setMoveStep(t);
            }),
            t
          );
        })(),
        Vy = $n({
          encapsulation: 0,
          styles: [
            [
              '.state-controls[_ngcontent-%COMP%]{display:flex;align-items:center;flex-direction:column;margin-bottom:2rem}.state-controls[_ngcontent-%COMP%]   .state-control[_ngcontent-%COMP%]{width:7rem;height:3.5rem;outline:0;line-height:3rem;margin:.6666666667rem;background-color:#2b3a42;border:3px solid #bf0117;border-radius:10px;text-align:center;font-size:inherit;text-transform:inherit;font-family:inherit;color:#fff}.state-controls[_ngcontent-%COMP%]   .state-control[_ngcontent-%COMP%]:hover{border-color:#000;background-color:#bf0117}.state-controls[_ngcontent-%COMP%]   .horizontal[_ngcontent-%COMP%]{display:flex}.state-controls[_ngcontent-%COMP%]   .icon-arrow[_ngcontent-%COMP%]{padding-top:.5rem;width:3rem}.state-controls[_ngcontent-%COMP%]   .icon-arrow--secondary[_ngcontent-%COMP%]{padding-top:.25rem;width:2.5rem}',
            ],
          ],
          data: {},
        });
      function Ly(t) {
        return ss(
          0,
          [
            (t()(),
            zi(
              0,
              0,
              null,
              null,
              9,
              'div',
              [['class', 'state-controls']],
              null,
              null,
              null,
              null,
              null,
            )),
            (t()(),
            zi(
              1,
              0,
              null,
              null,
              1,
              'button',
              [['class', 'state-control rotation']],
              null,
              [[null, 'click']],
              function(t, e, n) {
                var r = !0,
                  o = t.component;
                return 'click' === e && (r = !1 !== o.moveFigure(o.moveStep.ROTATE) && r), r;
              },
              null,
              null,
            )),
            (t()(),
            zi(
              2,
              0,
              null,
              null,
              0,
              'img',
              [
                ['alt', 'arrows'],
                ['class', 'icon-arrow--secondary'],
                ['src', '../../../assets/images/arrowsRotate.png'],
              ],
              null,
              null,
              null,
              null,
              null,
            )),
            (t()(),
            zi(
              3,
              0,
              null,
              null,
              4,
              'div',
              [['class', 'horizontal']],
              null,
              null,
              null,
              null,
              null,
            )),
            (t()(),
            zi(
              4,
              0,
              null,
              null,
              1,
              'button',
              [['class', 'state-control left']],
              null,
              [[null, 'click']],
              function(t, e, n) {
                var r = !0,
                  o = t.component;
                return 'click' === e && (r = !1 !== o.moveFigure(o.moveStep.LEFT) && r), r;
              },
              null,
              null,
            )),
            (t()(),
            zi(
              5,
              0,
              null,
              null,
              0,
              'img',
              [
                ['alt', 'arrows'],
                ['class', 'icon-arrow'],
                ['src', '../../../assets/images/arrowsLeft.png'],
              ],
              null,
              null,
              null,
              null,
              null,
            )),
            (t()(),
            zi(
              6,
              0,
              null,
              null,
              1,
              'button',
              [['class', 'state-control right']],
              null,
              [[null, 'click']],
              function(t, e, n) {
                var r = !0,
                  o = t.component;
                return 'click' === e && (r = !1 !== o.moveFigure(o.moveStep.RIGHT) && r), r;
              },
              null,
              null,
            )),
            (t()(),
            zi(
              7,
              0,
              null,
              null,
              0,
              'img',
              [
                ['alt', 'arrows'],
                ['class', 'icon-arrow'],
                ['src', '../../../assets/images/arrowsRight.png'],
              ],
              null,
              null,
              null,
              null,
              null,
            )),
            (t()(),
            zi(
              8,
              0,
              null,
              null,
              1,
              'button',
              [['class', 'state-control down']],
              null,
              [
                [null, 'mousedown'],
                [null, 'mouseup'],
              ],
              function(t, e, n) {
                var r = !0,
                  o = t.component;
                return (
                  'mousedown' === e && (r = !1 !== o.moveFigure(o.moveStep.DOWN) && r),
                  'mouseup' === e && (r = !1 !== o.moveFigure(o.moveStep.DOWN_OFF) && r),
                  r
                );
              },
              null,
              null,
            )),
            (t()(),
            zi(
              9,
              0,
              null,
              null,
              0,
              'img',
              [
                ['alt', 'arrows'],
                ['class', 'icon-arrow--secondary'],
                ['src', '../../../assets/images/arrowsDown.png'],
              ],
              null,
              null,
              null,
              null,
              null,
            )),
          ],
          null,
          null,
        );
      }
      var Uy = $n({
        encapsulation: 0,
        styles: [
          [
            '.game[_ngcontent-%COMP%]{display:flex;justify-content:space-around;flex-direction:row}.game[_ngcontent-%COMP%]   .wrap-controls[_ngcontent-%COMP%]{margin-top:2rem}',
          ],
        ],
        data: {},
      });
      function Hy(t) {
        return ss(
          0,
          [
            (t()(),
            zi(
              0,
              0,
              null,
              null,
              13,
              'div',
              [['class', 'container main']],
              null,
              null,
              null,
              null,
              null,
            )),
            (t()(),
            zi(1, 0, null, null, 12, 'div', [['class', 'game']], null, null, null, null, null)),
            (t()(), zi(2, 0, null, null, 1, 'atg-game-information', [], null, null, null, _y, vy)),
            oo(3, 49152, null, 0, my, [ly], null, null),
            (t()(), zi(4, 0, null, null, 1, 'atg-game-board', [], null, null, null, Oy, xy)),
            oo(5, 245760, null, 0, Ty, [ly, sd], null, null),
            (t()(), zi(6, 0, null, null, 7, 'div', [], null, null, null, null, null)),
            (t()(), zi(7, 0, null, null, 1, 'atg-game-next-figure', [], null, null, null, Iy, Ay)),
            oo(8, 245760, null, 0, ky, [ly], null, null),
            (t()(),
            zi(
              9,
              0,
              null,
              null,
              4,
              'div',
              [['class', 'wrap-controls']],
              null,
              null,
              null,
              null,
              null,
            )),
            (t()(),
            zi(
              10,
              0,
              null,
              null,
              1,
              'atg-game-state-controls',
              [],
              null,
              [['window', 'keydown']],
              function(t, e, n) {
                var r = !0;
                return 'window:keydown' === e && (r = !1 !== Gr(t, 11).keyBoardInput(n) && r), r;
              },
              jy,
              Ry,
            )),
            oo(11, 245760, null, 0, Ny, [ly], null, null),
            (t()(),
            zi(
              12,
              0,
              null,
              null,
              1,
              'atg-game-controls',
              [],
              null,
              [
                ['window', 'keydown'],
                ['window', 'keyup'],
              ],
              function(t, e, n) {
                var r = !0;
                return (
                  'window:keydown' === e && (r = !1 !== Gr(t, 13).keyBoardInput(n) && r),
                  'window:keyup' === e && (r = !1 !== Gr(t, 13).keyBoardUp(n) && r),
                  r
                );
              },
              Ly,
              Vy,
            )),
            oo(13, 245760, null, 0, My, [ly], null, null),
          ],
          function(t, e) {
            t(e, 5, 0), t(e, 8, 0), t(e, 11, 0), t(e, 13, 0);
          },
          null,
        );
      }
      var By = Dr(
          'atg-game-main',
          fa,
          function(t) {
            return ss(
              0,
              [
                (t()(), zi(0, 0, null, null, 1, 'atg-game-main', [], null, null, null, Hy, Uy)),
                oo(1, 49152, null, 0, fa, [], null, null),
              ],
              null,
              null,
            );
          },
          {},
          {},
          [],
        ),
        zy = $n({
          encapsulation: 0,
          styles: [
            [
              '.login__form[_ngcontent-%COMP%]{width:35rem;border:1.5px solid #fff;padding:2rem;background-color:#2b3a42;text-align:right;border-radius:1rem;font-size:1.3rem}.login__group[_ngcontent-%COMP%]{position:relative;display:flex;justify-content:space-between;align-items:center;padding:1.7rem 0;flex-wrap:wrap}.login__group--gender[_ngcontent-%COMP%]{flex-direction:column}.login__group--radio[_ngcontent-%COMP%]{display:flex;justify-content:flex-start;align-items:center}.login__group--radio[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{width:7rem;text-align:left}.login__text[_ngcontent-%COMP%]{text-transform:lowercase;color:#979797;font-size:.8rem}.login__text--warning[_ngcontent-%COMP%]{font-family:sans-serif;position:absolute;bottom:0;right:0;color:#bf0117}.login__input[_ngcontent-%COMP%]{height:3rem;background-color:#979797;padding:.5rem;border-radius:.5rem}.login__input[_ngcontent-%COMP%]:focus{outline:0}.login__input.ng-invalid.ng-touched[_ngcontent-%COMP%]{border:1px solid #bf0117}.login__input[type=date][_ngcontent-%COMP%]{-webkit-appearance:none;-moz-appearance:none;appearance:none}.login__input[type=date][_ngcontent-%COMP%]::-webkit-clear-button{display:none}.login__input[type=date][_ngcontent-%COMP%]::-webkit-inner-spin-button{display:none}.login__input[type=date][_ngcontent-%COMP%]::-webkit-calendar-picker-indicator{color:#bf0117}.login__button[_ngcontent-%COMP%]{margin-top:1rem}.login__button[_ngcontent-%COMP%]:hover:enabled{border-color:#bf0117;box-shadow:inset 0 -3.5rem 0 0 #bf0117;cursor:pointer}.login__button[_ngcontent-%COMP%]:disabled{cursor:no-drop;color:#979797}',
            ],
          ],
          data: {},
        });
      function qy(t) {
        return ss(
          0,
          [
            (t()(),
            zi(
              0,
              0,
              null,
              null,
              1,
              'span',
              [['class', 'login__text login__text--warning']],
              null,
              null,
              null,
              null,
              null,
            )),
            (t()(), rs(-1, null, ['Please enter the valid name '])),
          ],
          null,
          null,
        );
      }
      function Gy(t) {
        return ss(
          0,
          [
            (t()(),
            zi(
              0,
              0,
              null,
              null,
              1,
              'span',
              [['class', 'login__text login__text--warning']],
              null,
              null,
              null,
              null,
              null,
            )),
            (t()(), rs(-1, null, ['Please enter the valid password '])),
          ],
          null,
          null,
        );
      }
      function Wy(t) {
        return ss(
          0,
          [
            (t()(),
            zi(
              0,
              0,
              null,
              null,
              36,
              'form',
              [
                ['class', 'login__form'],
                ['novalidate', ''],
              ],
              [
                [2, 'ng-untouched', null],
                [2, 'ng-touched', null],
                [2, 'ng-pristine', null],
                [2, 'ng-dirty', null],
                [2, 'ng-valid', null],
                [2, 'ng-invalid', null],
                [2, 'ng-pending', null],
              ],
              [
                [null, 'ngSubmit'],
                [null, 'submit'],
                [null, 'reset'],
              ],
              function(t, e, n) {
                var r = !0,
                  o = t.component;
                return (
                  'submit' === e && (r = !1 !== Gr(t, 2).onSubmit(n) && r),
                  'reset' === e && (r = !1 !== Gr(t, 2).onReset() && r),
                  'ngSubmit' === e && (r = !1 !== o.onLogin() && r),
                  r
                );
              },
              null,
              null,
            )),
            oo(1, 16384, null, 0, Gl, [], null, null),
            oo(
              2,
              540672,
              null,
              0,
              Ql,
              [
                [8, null],
                [8, null],
              ],
              { form: [0, 'form'] },
              { ngSubmit: 'ngSubmit' },
            ),
            so(2048, null, al, null, [Ql]),
            oo(4, 16384, null, 0, pl, [[4, al]], null, null),
            (t()(),
            zi(
              5,
              0,
              null,
              null,
              10,
              'div',
              [['class', 'login__group']],
              null,
              null,
              null,
              null,
              null,
            )),
            (t()(),
            zi(
              6,
              0,
              null,
              null,
              1,
              'label',
              [
                ['class', 'login__label'],
                ['for', 'username'],
              ],
              null,
              null,
              null,
              null,
              null,
            )),
            (t()(), rs(-1, null, ['Name*'])),
            (t()(),
            zi(
              8,
              0,
              null,
              null,
              5,
              'input',
              [
                ['class', 'login__input'],
                ['formControlName', 'username'],
                ['id', 'username'],
                ['name', 'username'],
                ['type', 'text'],
              ],
              [
                [2, 'ng-untouched', null],
                [2, 'ng-touched', null],
                [2, 'ng-pristine', null],
                [2, 'ng-dirty', null],
                [2, 'ng-valid', null],
                [2, 'ng-invalid', null],
                [2, 'ng-pending', null],
              ],
              [
                [null, 'input'],
                [null, 'blur'],
                [null, 'compositionstart'],
                [null, 'compositionend'],
              ],
              function(t, e, n) {
                var r = !0;
                return (
                  'input' === e && (r = !1 !== Gr(t, 9)._handleInput(n.target.value) && r),
                  'blur' === e && (r = !1 !== Gr(t, 9).onTouched() && r),
                  'compositionstart' === e && (r = !1 !== Gr(t, 9)._compositionStart() && r),
                  'compositionend' === e &&
                    (r = !1 !== Gr(t, 9)._compositionEnd(n.target.value) && r),
                  r
                );
              },
              null,
              null,
            )),
            oo(9, 16384, null, 0, il, [hn, sn, [2, ol]], null, null),
            so(
              1024,
              null,
              rl,
              function(t) {
                return [t];
              },
              [il],
            ),
            oo(
              11,
              671744,
              null,
              0,
              Yl,
              [
                [3, al],
                [8, null],
                [8, null],
                [6, rl],
                [2, Wl],
              ],
              { name: [0, 'name'] },
              null,
            ),
            so(2048, null, ll, null, [Yl]),
            oo(13, 16384, null, 0, hl, [[4, ll]], null, null),
            (t()(), Bi(16777216, null, null, 1, null, qy)),
            oo(15, 16384, null, 0, Fa, [In, kn], { ngIf: [0, 'ngIf'] }, null),
            (t()(),
            zi(
              16,
              0,
              null,
              null,
              10,
              'div',
              [['class', 'login__group']],
              null,
              null,
              null,
              null,
              null,
            )),
            (t()(),
            zi(
              17,
              0,
              null,
              null,
              1,
              'label',
              [
                ['class', 'login__label'],
                ['for', 'password'],
              ],
              null,
              null,
              null,
              null,
              null,
            )),
            (t()(), rs(-1, null, ['Password*'])),
            (t()(),
            zi(
              19,
              0,
              null,
              null,
              5,
              'input',
              [
                ['class', 'login__input'],
                ['formControlName', 'password'],
                ['id', 'password'],
                ['name', 'password'],
                ['type', 'password'],
              ],
              [
                [2, 'ng-untouched', null],
                [2, 'ng-touched', null],
                [2, 'ng-pristine', null],
                [2, 'ng-dirty', null],
                [2, 'ng-valid', null],
                [2, 'ng-invalid', null],
                [2, 'ng-pending', null],
              ],
              [
                [null, 'input'],
                [null, 'blur'],
                [null, 'compositionstart'],
                [null, 'compositionend'],
              ],
              function(t, e, n) {
                var r = !0;
                return (
                  'input' === e && (r = !1 !== Gr(t, 20)._handleInput(n.target.value) && r),
                  'blur' === e && (r = !1 !== Gr(t, 20).onTouched() && r),
                  'compositionstart' === e && (r = !1 !== Gr(t, 20)._compositionStart() && r),
                  'compositionend' === e &&
                    (r = !1 !== Gr(t, 20)._compositionEnd(n.target.value) && r),
                  r
                );
              },
              null,
              null,
            )),
            oo(20, 16384, null, 0, il, [hn, sn, [2, ol]], null, null),
            so(
              1024,
              null,
              rl,
              function(t) {
                return [t];
              },
              [il],
            ),
            oo(
              22,
              671744,
              null,
              0,
              Yl,
              [
                [3, al],
                [8, null],
                [8, null],
                [6, rl],
                [2, Wl],
              ],
              { name: [0, 'name'] },
              null,
            ),
            so(2048, null, ll, null, [Yl]),
            oo(24, 16384, null, 0, hl, [[4, ll]], null, null),
            (t()(), Bi(16777216, null, null, 1, null, Gy)),
            oo(26, 16384, null, 0, Fa, [In, kn], { ngIf: [0, 'ngIf'] }, null),
            (t()(),
            zi(
              27,
              0,
              null,
              null,
              1,
              'button',
              [
                ['class', 'game-button login__button'],
                ['type', 'submit'],
              ],
              [
                [8, 'disabled', 0],
                [8, 'title', 0],
              ],
              null,
              null,
              null,
              null,
            )),
            (t()(), rs(-1, null, [' Log In '])),
            (t()(), zi(29, 0, null, null, 0, 'br', [], null, null, null, null, null)),
            (t()(),
            zi(
              30,
              0,
              null,
              null,
              1,
              'span',
              [['class', 'login__text']],
              null,
              null,
              null,
              null,
              null,
            )),
            (t()(), rs(-1, null, ["Don't have an account? "])),
            (t()(),
            zi(
              32,
              0,
              null,
              null,
              4,
              'a',
              [],
              [
                [1, 'target', 0],
                [8, 'href', 4],
              ],
              [[null, 'click']],
              function(t, e, n) {
                var r = !0;
                return (
                  'click' === e &&
                    (r = !1 !== Gr(t, 33).onClick(n.button, n.ctrlKey, n.metaKey, n.shiftKey) && r),
                  r
                );
              },
              null,
              null,
            )),
            oo(33, 671744, null, 0, mf, [gf, sp, va], { queryParams: [0, 'queryParams'] }, null),
            es(34, { form: 0 }),
            (t()(),
            zi(
              35,
              0,
              null,
              null,
              1,
              'button',
              [
                ['class', 'game-button login__button'],
                ['type', 'button'],
              ],
              null,
              null,
              null,
              null,
              null,
            )),
            (t()(), rs(-1, null, [' Sign up '])),
          ],
          function(t, e) {
            var n = e.component;
            t(e, 2, 0, n.logInForm),
              t(e, 11, 0, 'username'),
              t(
                e,
                15,
                0,
                n.logInForm.get('username').invalid && n.logInForm.get('username').touched,
              ),
              t(e, 22, 0, 'password'),
              t(
                e,
                26,
                0,
                n.logInForm.get('password').invalid && n.logInForm.get('password').touched,
              );
            var r = t(e, 34, 0, 'registration');
            t(e, 33, 0, r);
          },
          function(t, e) {
            var n = e.component;
            t(
              e,
              0,
              0,
              Gr(e, 4).ngClassUntouched,
              Gr(e, 4).ngClassTouched,
              Gr(e, 4).ngClassPristine,
              Gr(e, 4).ngClassDirty,
              Gr(e, 4).ngClassValid,
              Gr(e, 4).ngClassInvalid,
              Gr(e, 4).ngClassPending,
            ),
              t(
                e,
                8,
                0,
                Gr(e, 13).ngClassUntouched,
                Gr(e, 13).ngClassTouched,
                Gr(e, 13).ngClassPristine,
                Gr(e, 13).ngClassDirty,
                Gr(e, 13).ngClassValid,
                Gr(e, 13).ngClassInvalid,
                Gr(e, 13).ngClassPending,
              ),
              t(
                e,
                19,
                0,
                Gr(e, 24).ngClassUntouched,
                Gr(e, 24).ngClassTouched,
                Gr(e, 24).ngClassPristine,
                Gr(e, 24).ngClassDirty,
                Gr(e, 24).ngClassValid,
                Gr(e, 24).ngClassInvalid,
                Gr(e, 24).ngClassPending,
              ),
              t(
                e,
                27,
                0,
                !n.logInForm.valid,
                n.logInForm.valid ? 'Log In' : 'Please complete all required fields',
              ),
              t(e, 32, 0, Gr(e, 33).target, Gr(e, 33).href);
          },
        );
      }
      function Qy(t) {
        return ss(
          0,
          [
            (t()(),
            zi(
              0,
              0,
              null,
              null,
              1,
              'span',
              [['class', 'login__text login__text--warning']],
              null,
              null,
              null,
              null,
              null,
            )),
            (t()(), rs(-1, null, ['Please enter the valid name '])),
          ],
          null,
          null,
        );
      }
      function Ky(t) {
        return ss(
          0,
          [
            (t()(),
            zi(
              0,
              0,
              null,
              null,
              1,
              'span',
              [['class', 'login__text login__text--warning']],
              null,
              null,
              null,
              null,
              null,
            )),
            (t()(),
            rs(-1, null, [
              'Password must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters ',
            ])),
          ],
          null,
          null,
        );
      }
      function Zy(t) {
        return ss(
          0,
          [
            (t()(),
            zi(
              0,
              0,
              null,
              null,
              1,
              'span',
              [['class', 'login__text login__text--warning']],
              null,
              null,
              null,
              null,
              null,
            )),
            (t()(), rs(-1, null, ['Please enter the same password '])),
          ],
          null,
          null,
        );
      }
      function $y(t) {
        return ss(
          0,
          [
            (t()(),
            zi(
              0,
              0,
              null,
              null,
              9,
              'div',
              [['class', 'login__group--radio']],
              null,
              null,
              null,
              null,
              null,
            )),
            (t()(),
            zi(1, 0, null, null, 1, 'label', [], [[8, 'htmlFor', 0]], null, null, null, null)),
            (t()(), rs(2, null, ['', ''])),
            (t()(),
            zi(
              3,
              0,
              null,
              null,
              6,
              'input',
              [
                ['class', 'login__input'],
                ['formControlName', 'gender'],
                ['type', 'radio'],
              ],
              [
                [8, 'id', 0],
                [2, 'ng-untouched', null],
                [2, 'ng-touched', null],
                [2, 'ng-pristine', null],
                [2, 'ng-dirty', null],
                [2, 'ng-valid', null],
                [2, 'ng-invalid', null],
                [2, 'ng-pending', null],
              ],
              [
                [null, 'input'],
                [null, 'blur'],
                [null, 'compositionstart'],
                [null, 'compositionend'],
                [null, 'change'],
              ],
              function(t, e, n) {
                var r = !0;
                return (
                  'input' === e && (r = !1 !== Gr(t, 4)._handleInput(n.target.value) && r),
                  'blur' === e && (r = !1 !== Gr(t, 4).onTouched() && r),
                  'compositionstart' === e && (r = !1 !== Gr(t, 4)._compositionStart() && r),
                  'compositionend' === e &&
                    (r = !1 !== Gr(t, 4)._compositionEnd(n.target.value) && r),
                  'change' === e && (r = !1 !== Gr(t, 5).onChange() && r),
                  'blur' === e && (r = !1 !== Gr(t, 5).onTouched() && r),
                  r
                );
              },
              null,
              null,
            )),
            oo(4, 16384, null, 0, il, [hn, sn, [2, ol]], null, null),
            oo(
              5,
              212992,
              null,
              0,
              Cl,
              [hn, sn, wl, Ie],
              { formControlName: [0, 'formControlName'], value: [1, 'value'] },
              null,
            ),
            so(
              1024,
              null,
              rl,
              function(t, e) {
                return [t, e];
              },
              [il, Cl],
            ),
            oo(
              7,
              671744,
              null,
              0,
              Yl,
              [
                [3, al],
                [8, null],
                [8, null],
                [6, rl],
                [2, Wl],
              ],
              { name: [0, 'name'] },
              null,
            ),
            so(2048, null, ll, null, [Yl]),
            oo(9, 16384, null, 0, hl, [[4, ll]], null, null),
          ],
          function(t, e) {
            t(e, 5, 0, 'gender', e.context.$implicit), t(e, 7, 0, 'gender');
          },
          function(t, e) {
            t(e, 1, 0, e.context.$implicit),
              t(e, 2, 0, e.context.$implicit),
              t(
                e,
                3,
                0,
                e.context.$implicit,
                Gr(e, 9).ngClassUntouched,
                Gr(e, 9).ngClassTouched,
                Gr(e, 9).ngClassPristine,
                Gr(e, 9).ngClassDirty,
                Gr(e, 9).ngClassValid,
                Gr(e, 9).ngClassInvalid,
                Gr(e, 9).ngClassPending,
              );
          },
        );
      }
      function Jy(t) {
        return ss(
          0,
          [
            (t()(),
            zi(
              0,
              0,
              null,
              null,
              1,
              'span',
              [['class', 'login__text login__text--warning']],
              null,
              null,
              null,
              null,
              null,
            )),
            (t()(), rs(-1, null, ['Please enter your birth date '])),
          ],
          null,
          null,
        );
      }
      function Yy(t) {
        return ss(
          0,
          [
            (t()(),
            zi(
              0,
              0,
              null,
              null,
              61,
              'form',
              [
                ['class', 'login__form'],
                ['novalidate', ''],
              ],
              [
                [2, 'ng-untouched', null],
                [2, 'ng-touched', null],
                [2, 'ng-pristine', null],
                [2, 'ng-dirty', null],
                [2, 'ng-valid', null],
                [2, 'ng-invalid', null],
                [2, 'ng-pending', null],
              ],
              [
                [null, 'ngSubmit'],
                [null, 'submit'],
                [null, 'reset'],
              ],
              function(t, e, n) {
                var r = !0,
                  o = t.component;
                return (
                  'submit' === e && (r = !1 !== Gr(t, 2).onSubmit(n) && r),
                  'reset' === e && (r = !1 !== Gr(t, 2).onReset() && r),
                  'ngSubmit' === e && (r = !1 !== o.onSignUp() && r),
                  r
                );
              },
              null,
              null,
            )),
            oo(1, 16384, null, 0, Gl, [], null, null),
            oo(
              2,
              540672,
              null,
              0,
              Ql,
              [
                [8, null],
                [8, null],
              ],
              { form: [0, 'form'] },
              { ngSubmit: 'ngSubmit' },
            ),
            so(2048, null, al, null, [Ql]),
            oo(4, 16384, null, 0, pl, [[4, al]], null, null),
            (t()(),
            zi(
              5,
              0,
              null,
              null,
              36,
              'div',
              [['formGroupName', 'userInformation']],
              [
                [2, 'ng-untouched', null],
                [2, 'ng-touched', null],
                [2, 'ng-pristine', null],
                [2, 'ng-dirty', null],
                [2, 'ng-valid', null],
                [2, 'ng-invalid', null],
                [2, 'ng-pending', null],
              ],
              null,
              null,
              null,
              null,
            )),
            oo(
              6,
              212992,
              null,
              0,
              Kl,
              [
                [3, al],
                [8, null],
                [8, null],
              ],
              { name: [0, 'name'] },
              null,
            ),
            so(2048, null, al, null, [Kl]),
            oo(8, 16384, null, 0, pl, [[4, al]], null, null),
            (t()(),
            zi(
              9,
              0,
              null,
              null,
              10,
              'div',
              [['class', 'login__group']],
              null,
              null,
              null,
              null,
              null,
            )),
            (t()(),
            zi(
              10,
              0,
              null,
              null,
              1,
              'label',
              [
                ['class', 'login__label'],
                ['for', 'usernameSignUp'],
              ],
              null,
              null,
              null,
              null,
              null,
            )),
            (t()(), rs(-1, null, ['Name*'])),
            (t()(),
            zi(
              12,
              0,
              null,
              null,
              5,
              'input',
              [
                ['class', 'login__input'],
                ['formControlName', 'username'],
                ['id', 'usernameSignUp'],
                ['name', 'username'],
                ['placeholder', 'Create a unique name'],
                ['type', 'text'],
              ],
              [
                [2, 'ng-untouched', null],
                [2, 'ng-touched', null],
                [2, 'ng-pristine', null],
                [2, 'ng-dirty', null],
                [2, 'ng-valid', null],
                [2, 'ng-invalid', null],
                [2, 'ng-pending', null],
              ],
              [
                [null, 'input'],
                [null, 'blur'],
                [null, 'compositionstart'],
                [null, 'compositionend'],
              ],
              function(t, e, n) {
                var r = !0;
                return (
                  'input' === e && (r = !1 !== Gr(t, 13)._handleInput(n.target.value) && r),
                  'blur' === e && (r = !1 !== Gr(t, 13).onTouched() && r),
                  'compositionstart' === e && (r = !1 !== Gr(t, 13)._compositionStart() && r),
                  'compositionend' === e &&
                    (r = !1 !== Gr(t, 13)._compositionEnd(n.target.value) && r),
                  r
                );
              },
              null,
              null,
            )),
            oo(13, 16384, null, 0, il, [hn, sn, [2, ol]], null, null),
            so(
              1024,
              null,
              rl,
              function(t) {
                return [t];
              },
              [il],
            ),
            oo(
              15,
              671744,
              null,
              0,
              Yl,
              [
                [3, al],
                [8, null],
                [8, null],
                [6, rl],
                [2, Wl],
              ],
              { name: [0, 'name'] },
              null,
            ),
            so(2048, null, ll, null, [Yl]),
            oo(17, 16384, null, 0, hl, [[4, ll]], null, null),
            (t()(), Bi(16777216, null, null, 1, null, Qy)),
            oo(19, 16384, null, 0, Fa, [In, kn], { ngIf: [0, 'ngIf'] }, null),
            (t()(),
            zi(
              20,
              0,
              null,
              null,
              10,
              'div',
              [['class', 'login__group']],
              null,
              null,
              null,
              null,
              null,
            )),
            (t()(),
            zi(
              21,
              0,
              null,
              null,
              1,
              'label',
              [
                ['class', 'login__label'],
                ['for', 'passwordSignUp'],
              ],
              null,
              null,
              null,
              null,
              null,
            )),
            (t()(), rs(-1, null, ['Password*'])),
            (t()(),
            zi(
              23,
              0,
              null,
              null,
              5,
              'input',
              [
                ['class', 'login__input'],
                ['formControlName', 'password'],
                ['id', 'passwordSignUp'],
                ['name', 'password'],
                ['placeholder', 'Create a password'],
                ['type', 'password'],
              ],
              [
                [2, 'ng-untouched', null],
                [2, 'ng-touched', null],
                [2, 'ng-pristine', null],
                [2, 'ng-dirty', null],
                [2, 'ng-valid', null],
                [2, 'ng-invalid', null],
                [2, 'ng-pending', null],
              ],
              [
                [null, 'input'],
                [null, 'blur'],
                [null, 'compositionstart'],
                [null, 'compositionend'],
              ],
              function(t, e, n) {
                var r = !0;
                return (
                  'input' === e && (r = !1 !== Gr(t, 24)._handleInput(n.target.value) && r),
                  'blur' === e && (r = !1 !== Gr(t, 24).onTouched() && r),
                  'compositionstart' === e && (r = !1 !== Gr(t, 24)._compositionStart() && r),
                  'compositionend' === e &&
                    (r = !1 !== Gr(t, 24)._compositionEnd(n.target.value) && r),
                  r
                );
              },
              null,
              null,
            )),
            oo(24, 16384, null, 0, il, [hn, sn, [2, ol]], null, null),
            so(
              1024,
              null,
              rl,
              function(t) {
                return [t];
              },
              [il],
            ),
            oo(
              26,
              671744,
              null,
              0,
              Yl,
              [
                [3, al],
                [8, null],
                [8, null],
                [6, rl],
                [2, Wl],
              ],
              { name: [0, 'name'] },
              null,
            ),
            so(2048, null, ll, null, [Yl]),
            oo(28, 16384, null, 0, hl, [[4, ll]], null, null),
            (t()(), Bi(16777216, null, null, 1, null, Ky)),
            oo(30, 16384, null, 0, Fa, [In, kn], { ngIf: [0, 'ngIf'] }, null),
            (t()(),
            zi(
              31,
              0,
              null,
              null,
              10,
              'div',
              [['class', 'login__group']],
              null,
              null,
              null,
              null,
              null,
            )),
            (t()(),
            zi(
              32,
              0,
              null,
              null,
              1,
              'label',
              [
                ['class', 'login__label'],
                ['for', 'confirmPassword'],
              ],
              null,
              null,
              null,
              null,
              null,
            )),
            (t()(), rs(-1, null, ['Confirm Password*'])),
            (t()(),
            zi(
              34,
              0,
              null,
              null,
              5,
              'input',
              [
                ['class', 'login__input'],
                ['formControlName', 'confirmPassword'],
                ['id', 'confirmPassword'],
                ['name', 'confirmPassword'],
                ['placeholder', 'Confirm a password'],
                ['type', 'password'],
              ],
              [
                [2, 'ng-untouched', null],
                [2, 'ng-touched', null],
                [2, 'ng-pristine', null],
                [2, 'ng-dirty', null],
                [2, 'ng-valid', null],
                [2, 'ng-invalid', null],
                [2, 'ng-pending', null],
              ],
              [
                [null, 'input'],
                [null, 'blur'],
                [null, 'compositionstart'],
                [null, 'compositionend'],
              ],
              function(t, e, n) {
                var r = !0;
                return (
                  'input' === e && (r = !1 !== Gr(t, 35)._handleInput(n.target.value) && r),
                  'blur' === e && (r = !1 !== Gr(t, 35).onTouched() && r),
                  'compositionstart' === e && (r = !1 !== Gr(t, 35)._compositionStart() && r),
                  'compositionend' === e &&
                    (r = !1 !== Gr(t, 35)._compositionEnd(n.target.value) && r),
                  r
                );
              },
              null,
              null,
            )),
            oo(35, 16384, null, 0, il, [hn, sn, [2, ol]], null, null),
            so(
              1024,
              null,
              rl,
              function(t) {
                return [t];
              },
              [il],
            ),
            oo(
              37,
              671744,
              null,
              0,
              Yl,
              [
                [3, al],
                [8, null],
                [8, null],
                [6, rl],
                [2, Wl],
              ],
              { name: [0, 'name'] },
              null,
            ),
            so(2048, null, ll, null, [Yl]),
            oo(39, 16384, null, 0, hl, [[4, ll]], null, null),
            (t()(), Bi(16777216, null, null, 1, null, Zy)),
            oo(41, 16384, null, 0, Fa, [In, kn], { ngIf: [0, 'ngIf'] }, null),
            (t()(),
            zi(
              42,
              0,
              null,
              null,
              17,
              'div',
              [['formGroupName', 'playerInformation']],
              [
                [2, 'ng-untouched', null],
                [2, 'ng-touched', null],
                [2, 'ng-pristine', null],
                [2, 'ng-dirty', null],
                [2, 'ng-valid', null],
                [2, 'ng-invalid', null],
                [2, 'ng-pending', null],
              ],
              null,
              null,
              null,
              null,
            )),
            oo(
              43,
              212992,
              null,
              0,
              Kl,
              [
                [3, al],
                [8, null],
                [8, null],
              ],
              { name: [0, 'name'] },
              null,
            ),
            so(2048, null, al, null, [Kl]),
            oo(45, 16384, null, 0, pl, [[4, al]], null, null),
            (t()(),
            zi(
              46,
              0,
              null,
              null,
              2,
              'div',
              [['class', 'login__group--gender']],
              null,
              null,
              null,
              null,
              null,
            )),
            (t()(), Bi(16777216, null, null, 1, null, $y)),
            oo(48, 278528, null, 0, Ra, [In, kn, En], { ngForOf: [0, 'ngForOf'] }, null),
            (t()(),
            zi(
              49,
              0,
              null,
              null,
              10,
              'div',
              [['class', 'login__group']],
              null,
              null,
              null,
              null,
              null,
            )),
            (t()(),
            zi(
              50,
              0,
              null,
              null,
              1,
              'label',
              [
                ['class', 'login__label'],
                ['for', 'dateOfBirth'],
              ],
              null,
              null,
              null,
              null,
              null,
            )),
            (t()(), rs(-1, null, ['Date of birth*'])),
            (t()(),
            zi(
              52,
              0,
              null,
              null,
              5,
              'input',
              [
                ['class', 'login__input'],
                ['formControlName', 'dateOfBirth'],
                ['id', 'dateOfBirth'],
                ['name', 'dateOfBirth'],
                ['type', 'date'],
              ],
              [
                [2, 'ng-untouched', null],
                [2, 'ng-touched', null],
                [2, 'ng-pristine', null],
                [2, 'ng-dirty', null],
                [2, 'ng-valid', null],
                [2, 'ng-invalid', null],
                [2, 'ng-pending', null],
              ],
              [
                [null, 'input'],
                [null, 'blur'],
                [null, 'compositionstart'],
                [null, 'compositionend'],
              ],
              function(t, e, n) {
                var r = !0;
                return (
                  'input' === e && (r = !1 !== Gr(t, 53)._handleInput(n.target.value) && r),
                  'blur' === e && (r = !1 !== Gr(t, 53).onTouched() && r),
                  'compositionstart' === e && (r = !1 !== Gr(t, 53)._compositionStart() && r),
                  'compositionend' === e &&
                    (r = !1 !== Gr(t, 53)._compositionEnd(n.target.value) && r),
                  r
                );
              },
              null,
              null,
            )),
            oo(53, 16384, null, 0, il, [hn, sn, [2, ol]], null, null),
            so(
              1024,
              null,
              rl,
              function(t) {
                return [t];
              },
              [il],
            ),
            oo(
              55,
              671744,
              null,
              0,
              Yl,
              [
                [3, al],
                [8, null],
                [8, null],
                [6, rl],
                [2, Wl],
              ],
              { name: [0, 'name'] },
              null,
            ),
            so(2048, null, ll, null, [Yl]),
            oo(57, 16384, null, 0, hl, [[4, ll]], null, null),
            (t()(), Bi(16777216, null, null, 1, null, Jy)),
            oo(59, 16384, null, 0, Fa, [In, kn], { ngIf: [0, 'ngIf'] }, null),
            (t()(),
            zi(
              60,
              0,
              null,
              null,
              1,
              'button',
              [
                ['class', 'game-button login__button'],
                ['type', 'submit'],
              ],
              [
                [8, 'disabled', 0],
                [8, 'title', 0],
              ],
              null,
              null,
              null,
              null,
            )),
            (t()(), rs(-1, null, [' Sign Up '])),
          ],
          function(t, e) {
            var n = e.component;
            t(e, 2, 0, n.signUpForm),
              t(e, 6, 0, 'userInformation'),
              t(e, 15, 0, 'username'),
              t(
                e,
                19,
                0,
                n.signUpForm.get('userInformation.username').invalid &&
                  n.signUpForm.get('userInformation.username').touched,
              ),
              t(e, 26, 0, 'password'),
              t(
                e,
                30,
                0,
                n.signUpForm.get('userInformation.password').invalid &&
                  n.signUpForm.get('userInformation.password').touched,
              ),
              t(e, 37, 0, 'confirmPassword'),
              t(
                e,
                41,
                0,
                (n.signUpForm.get('userInformation.confirmPassword').invalid &&
                  n.signUpForm.get('userInformation.confirmPassword').touched) ||
                  (n.signUpForm.get('userInformation.confirmPassword').touched &&
                    n.signUpForm.get('userInformation.confirmPassword').value !==
                      n.signUpForm.get('userInformation.password').value),
              ),
              t(e, 43, 0, 'playerInformation'),
              t(e, 48, 0, n.genders),
              t(e, 55, 0, 'dateOfBirth'),
              t(
                e,
                59,
                0,
                n.signUpForm.get('playerInformation.dateOfBirth').invalid &&
                  n.signUpForm.get('playerInformation.dateOfBirth').touched,
              );
          },
          function(t, e) {
            var n = e.component;
            t(
              e,
              0,
              0,
              Gr(e, 4).ngClassUntouched,
              Gr(e, 4).ngClassTouched,
              Gr(e, 4).ngClassPristine,
              Gr(e, 4).ngClassDirty,
              Gr(e, 4).ngClassValid,
              Gr(e, 4).ngClassInvalid,
              Gr(e, 4).ngClassPending,
            ),
              t(
                e,
                5,
                0,
                Gr(e, 8).ngClassUntouched,
                Gr(e, 8).ngClassTouched,
                Gr(e, 8).ngClassPristine,
                Gr(e, 8).ngClassDirty,
                Gr(e, 8).ngClassValid,
                Gr(e, 8).ngClassInvalid,
                Gr(e, 8).ngClassPending,
              ),
              t(
                e,
                12,
                0,
                Gr(e, 17).ngClassUntouched,
                Gr(e, 17).ngClassTouched,
                Gr(e, 17).ngClassPristine,
                Gr(e, 17).ngClassDirty,
                Gr(e, 17).ngClassValid,
                Gr(e, 17).ngClassInvalid,
                Gr(e, 17).ngClassPending,
              ),
              t(
                e,
                23,
                0,
                Gr(e, 28).ngClassUntouched,
                Gr(e, 28).ngClassTouched,
                Gr(e, 28).ngClassPristine,
                Gr(e, 28).ngClassDirty,
                Gr(e, 28).ngClassValid,
                Gr(e, 28).ngClassInvalid,
                Gr(e, 28).ngClassPending,
              ),
              t(
                e,
                34,
                0,
                Gr(e, 39).ngClassUntouched,
                Gr(e, 39).ngClassTouched,
                Gr(e, 39).ngClassPristine,
                Gr(e, 39).ngClassDirty,
                Gr(e, 39).ngClassValid,
                Gr(e, 39).ngClassInvalid,
                Gr(e, 39).ngClassPending,
              ),
              t(
                e,
                42,
                0,
                Gr(e, 45).ngClassUntouched,
                Gr(e, 45).ngClassTouched,
                Gr(e, 45).ngClassPristine,
                Gr(e, 45).ngClassDirty,
                Gr(e, 45).ngClassValid,
                Gr(e, 45).ngClassInvalid,
                Gr(e, 45).ngClassPending,
              ),
              t(
                e,
                52,
                0,
                Gr(e, 57).ngClassUntouched,
                Gr(e, 57).ngClassTouched,
                Gr(e, 57).ngClassPristine,
                Gr(e, 57).ngClassDirty,
                Gr(e, 57).ngClassValid,
                Gr(e, 57).ngClassInvalid,
                Gr(e, 57).ngClassPending,
              ),
              t(
                e,
                60,
                0,
                !n.signUpForm.valid,
                n.signUpForm.valid ? 'Create an account' : 'Please complete all required fields',
              );
          },
        );
      }
      function Xy(t) {
        return ss(
          0,
          [
            Ki(402653184, 1, { toastContainer: 0 }),
            (t()(),
            zi(
              1,
              0,
              null,
              null,
              4,
              'div',
              [['class', 'container main center login']],
              null,
              null,
              null,
              null,
              null,
            )),
            (t()(), zi(2, 0, null, null, 3, 'div', [], null, null, null, null, null)),
            (t()(), Bi(16777216, null, null, 1, null, Wy)),
            oo(
              4,
              16384,
              null,
              0,
              Fa,
              [In, kn],
              { ngIf: [0, 'ngIf'], ngIfElse: [1, 'ngIfElse'] },
              null,
            ),
            (t()(), Bi(0, [['registrationForm', 2]], null, 0, null, Yy)),
          ],
          function(t, e) {
            t(e, 4, 0, !e.component.isSignUpForm, Gr(e, 5));
          },
          null,
        );
      }
      var tg = Dr(
          'atg-game-login-form',
          nc,
          function(t) {
            return ss(
              0,
              [
                (t()(),
                zi(0, 0, null, null, 1, 'atg-game-login-form', [], null, null, null, Xy, zy)),
                oo(1, 114688, null, 0, nc, [sp, hy, sd, gf], null, null),
              ],
              function(t, e) {
                t(e, 1, 0);
              },
              null,
            );
          },
          {},
          {},
          [],
        ),
        eg = (function() {
          function t(t, e) {
            (this.userService = t), (this.toastrService = e);
          }
          return (
            (t.prototype.ngOnInit = function() {
              this.showCurrentUser();
            }),
            (t.prototype.showCurrentUser = function() {
              (this.currentUser = JSON.parse(localStorage.getItem('access_user'))),
                this.currentUser &&
                  (this.iconSrc =
                    'male' === this.currentUser.gender ? 'Mask.ico' : 'Spiderwoman.ico');
            }),
            (t.prototype.onLogout = function() {
              this.toastrService.warning('You have logged out!'),
                this.userService.logoutUser().subscribe(),
                this.showCurrentUser();
            }),
            t
          );
        })(),
        ng = $n({
          encapsulation: 0,
          styles: [
            [
              '.player[_ngcontent-%COMP%]{position:absolute;top:1.5rem;right:2rem;display:flex;align-items:center;justify-content:space-between}.player[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]{max-width:5rem;margin:0 1rem}.player-inf[_ngcontent-%COMP%]{display:inline-block;font-size:1rem;text-align:right;text-transform:none}.player-inf[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:1.33rem}.player[_ngcontent-%COMP%]   .game-button[_ngcontent-%COMP%]:hover{border-color:#000;box-shadow:inset 0 -3.5rem 0 0 #bf0117;cursor:pointer}',
            ],
          ],
          data: {},
        });
      function rg(t) {
        return ss(
          0,
          [
            Ki(402653184, 1, { toastContainer: 0 }),
            (t()(),
            zi(1, 0, null, null, 10, 'div', [['class', 'player']], null, null, null, null, null)),
            (t()(),
            zi(
              2,
              0,
              null,
              null,
              6,
              'div',
              [['class', 'player-inf']],
              null,
              null,
              null,
              null,
              null,
            )),
            (t()(), zi(3, 0, null, null, 1, 'p', [], null, null, null, null, null)),
            (t()(), rs(4, null, ['', ''])),
            (t()(), zi(5, 0, null, null, 1, 'p', [], null, null, null, null, null)),
            (t()(), rs(6, null, ['', ''])),
            (t()(), zi(7, 0, null, null, 1, 'p', [], null, null, null, null, null)),
            (t()(), rs(8, null, ['', ''])),
            (t()(),
            zi(
              9,
              0,
              null,
              null,
              0,
              'img',
              [
                ['alt', 'icon'],
                ['class', 'icon'],
              ],
              [[8, 'src', 4]],
              null,
              null,
              null,
              null,
            )),
            (t()(),
            zi(
              10,
              0,
              null,
              null,
              1,
              'button',
              [['class', 'game-button']],
              null,
              [[null, 'click']],
              function(t, e, n) {
                var r = !0;
                return 'click' === e && (r = !1 !== t.component.onLogout() && r), r;
              },
              null,
              null,
            )),
            (t()(), rs(-1, null, [' Logout '])),
          ],
          null,
          function(t, e) {
            var n,
              r = e.component;
            t(e, 4, 0, null == r.currentUser ? null : r.currentUser.username),
              t(e, 6, 0, null == r.currentUser ? null : r.currentUser.country),
              t(e, 8, 0, null == r.currentUser ? null : r.currentUser.gender),
              t(e, 9, 0, '../../../assets/images/' + (null != (n = r.iconSrc) ? n.toString() : ''));
          },
        );
      }
      var og = (function() {
          function t(t, e) {
            (this.userService = t),
              (this.toastrService = e),
              (this.userIsAuthenticated = !!localStorage.getItem('access_user'));
          }
          return (
            (t.prototype.ngOnInit = function() {
              var t = this;
              (this.toastrService.overlayContainer = this.toastContainer),
                this.userIsAuthenticated ||
                  setTimeout(function() {
                    return t.toastrService.info('Please login to save your score to leaderboard');
                  }),
                (this.authSubscription = this.userService.getAuthListener().subscribe(function(e) {
                  e
                    ? (t.toastrService.success('Welcome to AwesomeTetrisGame!'),
                      (t.userIsAuthenticated = !0))
                    : (t.userIsAuthenticated = !1);
                }));
            }),
            (t.prototype.ngOnDestroy = function() {
              this.authSubscription.unsubscribe();
            }),
            t
          );
        })(),
        ig = $n({
          encapsulation: 0,
          styles: [
            [
              '.header[_ngcontent-%COMP%]{text-align:center;padding:2rem 0}.header[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]{width:14.2rem;margin:0 auto;font-size:5rem;background-color:#bf0117;line-height:4.7rem}.header[_ngcontent-%COMP%]   .wrap-links[_ngcontent-%COMP%]{margin-top:2rem;border-top:1.5px solid #fff;border-bottom:1.5px solid #fff;transition:.35s ease-out}.header[_ngcontent-%COMP%]   .wrap-links[_ngcontent-%COMP%]:hover{border-color:#000;box-shadow:inset 0 -3.5rem 0 0 #bf0117}.header[_ngcontent-%COMP%]   .bar-links[_ngcontent-%COMP%]{display:flex;justify-content:space-around;align-items:center;height:3rem}.header__logout[_ngcontent-%COMP%]{position:absolute;top:1.5rem;right:2rem}.header-link[_ngcontent-%COMP%]{flex-basis:7rem;color:#fff;text-decoration:none}.header-link--button[_ngcontent-%COMP%]{text-align:center;text-decoration:none}.header-link--button[_ngcontent-%COMP%]:hover{border-color:#000;box-shadow:inset 0 -3.5rem 0 0 #bf0117;cursor:pointer}.header-link[_ngcontent-%COMP%]:first-child{text-align:left}.header-link[_ngcontent-%COMP%]:last-child{text-align:right}',
            ],
          ],
          data: {},
        });
      function sg(t) {
        return ss(
          0,
          [
            (t()(), zi(0, 0, null, null, 1, 'atg-player-profile', [], null, null, null, rg, ng)),
            oo(1, 114688, null, 0, eg, [hy, sd], null, null),
          ],
          function(t, e) {
            t(e, 1, 0);
          },
          null,
        );
      }
      function ag(t) {
        return ss(
          0,
          [
            (t()(),
            zi(
              0,
              0,
              null,
              null,
              3,
              'a',
              [['class', 'header-link--button game-button header__logout']],
              [
                [1, 'target', 0],
                [8, 'href', 4],
              ],
              [[null, 'click']],
              function(t, e, n) {
                var r = !0;
                return (
                  'click' === e &&
                    (r = !1 !== Gr(t, 1).onClick(n.button, n.ctrlKey, n.metaKey, n.shiftKey) && r),
                  r
                );
              },
              null,
              null,
            )),
            oo(1, 671744, null, 0, mf, [gf, sp, va], { routerLink: [0, 'routerLink'] }, null),
            ts(2, 1),
            (t()(), rs(-1, null, ['login'])),
          ],
          function(t, e) {
            var n = t(e, 2, 0, '/login');
            t(e, 1, 0, n);
          },
          function(t, e) {
            t(e, 0, 0, Gr(e, 1).target, Gr(e, 1).href);
          },
        );
      }
      function ug(t) {
        return ss(
          0,
          [
            Ki(402653184, 1, { toastContainer: 0 }),
            (t()(),
            zi(1, 0, null, null, 22, 'div', [['class', 'header']], null, null, null, null, null)),
            (t()(),
            zi(2, 0, null, null, 1, 'div', [['class', 'logo']], null, null, null, null, null)),
            (t()(), rs(-1, null, ['tetris'])),
            (t()(), Bi(16777216, null, null, 1, null, sg)),
            oo(
              5,
              16384,
              null,
              0,
              Fa,
              [In, kn],
              { ngIf: [0, 'ngIf'], ngIfElse: [1, 'ngIfElse'] },
              null,
            ),
            (t()(),
            zi(
              6,
              0,
              null,
              null,
              17,
              'div',
              [['class', 'wrap-links']],
              null,
              null,
              null,
              null,
              null,
            )),
            (t()(),
            zi(
              7,
              0,
              null,
              null,
              16,
              'nav',
              [['class', 'bar-links container']],
              null,
              null,
              null,
              null,
              null,
            )),
            (t()(),
            zi(
              8,
              0,
              null,
              null,
              3,
              'a',
              [['class', 'header-link']],
              [
                [1, 'target', 0],
                [8, 'href', 4],
              ],
              [[null, 'click']],
              function(t, e, n) {
                var r = !0;
                return (
                  'click' === e &&
                    (r = !1 !== Gr(t, 9).onClick(n.button, n.ctrlKey, n.metaKey, n.shiftKey) && r),
                  r
                );
              },
              null,
              null,
            )),
            oo(9, 671744, null, 0, mf, [gf, sp, va], { routerLink: [0, 'routerLink'] }, null),
            ts(10, 1),
            (t()(), rs(-1, null, ['login'])),
            (t()(),
            zi(
              12,
              0,
              null,
              null,
              3,
              'a',
              [['class', 'header-link']],
              [
                [1, 'target', 0],
                [8, 'href', 4],
              ],
              [[null, 'click']],
              function(t, e, n) {
                var r = !0;
                return (
                  'click' === e &&
                    (r = !1 !== Gr(t, 13).onClick(n.button, n.ctrlKey, n.metaKey, n.shiftKey) && r),
                  r
                );
              },
              null,
              null,
            )),
            oo(13, 671744, null, 0, mf, [gf, sp, va], { routerLink: [0, 'routerLink'] }, null),
            ts(14, 1),
            (t()(), rs(-1, null, ['game'])),
            (t()(),
            zi(
              16,
              0,
              null,
              null,
              3,
              'a',
              [['class', 'header-link']],
              [
                [1, 'target', 0],
                [8, 'href', 4],
              ],
              [[null, 'click']],
              function(t, e, n) {
                var r = !0;
                return (
                  'click' === e &&
                    (r = !1 !== Gr(t, 17).onClick(n.button, n.ctrlKey, n.metaKey, n.shiftKey) && r),
                  r
                );
              },
              null,
              null,
            )),
            oo(17, 671744, null, 0, mf, [gf, sp, va], { routerLink: [0, 'routerLink'] }, null),
            ts(18, 1),
            (t()(), rs(-1, null, ['option'])),
            (t()(),
            zi(
              20,
              0,
              null,
              null,
              3,
              'a',
              [['class', 'header-link']],
              [
                [1, 'target', 0],
                [8, 'href', 4],
              ],
              [[null, 'click']],
              function(t, e, n) {
                var r = !0;
                return (
                  'click' === e &&
                    (r = !1 !== Gr(t, 21).onClick(n.button, n.ctrlKey, n.metaKey, n.shiftKey) && r),
                  r
                );
              },
              null,
              null,
            )),
            oo(21, 671744, null, 0, mf, [gf, sp, va], { routerLink: [0, 'routerLink'] }, null),
            ts(22, 1),
            (t()(), rs(-1, null, ['leaderboard'])),
            (t()(), Bi(0, [['login', 2]], null, 0, null, ag)),
          ],
          function(t, e) {
            t(e, 5, 0, e.component.userIsAuthenticated, Gr(e, 24));
            var n = t(e, 10, 0, '/login');
            t(e, 9, 0, n);
            var r = t(e, 14, 0, '/game');
            t(e, 13, 0, r);
            var o = t(e, 18, 0, '/option');
            t(e, 17, 0, o);
            var i = t(e, 22, 0, '/leaderboard');
            t(e, 21, 0, i);
          },
          function(t, e) {
            t(e, 8, 0, Gr(e, 9).target, Gr(e, 9).href),
              t(e, 12, 0, Gr(e, 13).target, Gr(e, 13).href),
              t(e, 16, 0, Gr(e, 17).target, Gr(e, 17).href),
              t(e, 20, 0, Gr(e, 21).target, Gr(e, 21).href);
          },
        );
      }
      var lg = $n({
        encapsulation: 0,
        styles: [
          [
            '.app[_ngcontent-%COMP%]{background-color:#000;font-family:Impact,sans-serif;color:#fff;font-size:1.33rem;text-transform:uppercase}',
          ],
        ],
        data: {},
      });
      function cg(t) {
        return ss(
          0,
          [
            (t()(),
            zi(0, 0, null, null, 4, 'div', [['class', 'app']], null, null, null, null, null)),
            (t()(), zi(1, 0, null, null, 1, 'atg-game-header', [], null, null, null, ug, ig)),
            oo(2, 245760, null, 0, og, [hy, sd], null, null),
            (t()(),
            zi(3, 16777216, null, null, 1, 'router-outlet', [], null, null, null, null, null)),
            oo(4, 212992, null, 0, wf, [bf, In, en, [8, null], Pe], null, null),
          ],
          function(t, e) {
            t(e, 2, 0), t(e, 4, 0);
          },
          null,
        );
      }
      var hg = Dr(
          'app-root',
          oc,
          function(t) {
            return ss(
              0,
              [
                (t()(), zi(0, 0, null, null, 1, 'app-root', [], null, null, null, cg, lg)),
                oo(1, 49152, null, 0, oc, [], null, null),
              ],
              null,
              null,
            );
          },
          {},
          {},
          [],
        ),
        pg = function() {},
        fg = function() {},
        dg = '*';
      function yg(t, e) {
        return void 0 === e && (e = null), { type: 2, steps: t, options: e };
      }
      function gg(t) {
        return { type: 6, styles: t, offset: null };
      }
      function mg(t) {
        Promise.resolve(null).then(t);
      }
      var vg = (function() {
          function t(t, e) {
            void 0 === t && (t = 0),
              void 0 === e && (e = 0),
              (this._onDoneFns = []),
              (this._onStartFns = []),
              (this._onDestroyFns = []),
              (this._started = !1),
              (this._destroyed = !1),
              (this._finished = !1),
              (this.parentPlayer = null),
              (this.totalTime = t + e);
          }
          return (
            (t.prototype._onFinish = function() {
              this._finished ||
                ((this._finished = !0),
                this._onDoneFns.forEach(function(t) {
                  return t();
                }),
                (this._onDoneFns = []));
            }),
            (t.prototype.onStart = function(t) {
              this._onStartFns.push(t);
            }),
            (t.prototype.onDone = function(t) {
              this._onDoneFns.push(t);
            }),
            (t.prototype.onDestroy = function(t) {
              this._onDestroyFns.push(t);
            }),
            (t.prototype.hasStarted = function() {
              return this._started;
            }),
            (t.prototype.init = function() {}),
            (t.prototype.play = function() {
              this.hasStarted() || (this._onStart(), this.triggerMicrotask()), (this._started = !0);
            }),
            (t.prototype.triggerMicrotask = function() {
              var t = this;
              mg(function() {
                return t._onFinish();
              });
            }),
            (t.prototype._onStart = function() {
              this._onStartFns.forEach(function(t) {
                return t();
              }),
                (this._onStartFns = []);
            }),
            (t.prototype.pause = function() {}),
            (t.prototype.restart = function() {}),
            (t.prototype.finish = function() {
              this._onFinish();
            }),
            (t.prototype.destroy = function() {
              this._destroyed ||
                ((this._destroyed = !0),
                this.hasStarted() || this._onStart(),
                this.finish(),
                this._onDestroyFns.forEach(function(t) {
                  return t();
                }),
                (this._onDestroyFns = []));
            }),
            (t.prototype.reset = function() {}),
            (t.prototype.setPosition = function(t) {}),
            (t.prototype.getPosition = function() {
              return 0;
            }),
            (t.prototype.triggerCallback = function(t) {
              var e = 'start' == t ? this._onStartFns : this._onDoneFns;
              e.forEach(function(t) {
                return t();
              }),
                (e.length = 0);
            }),
            t
          );
        })(),
        _g = (function() {
          function t(t) {
            var e = this;
            (this._onDoneFns = []),
              (this._onStartFns = []),
              (this._finished = !1),
              (this._started = !1),
              (this._destroyed = !1),
              (this._onDestroyFns = []),
              (this.parentPlayer = null),
              (this.totalTime = 0),
              (this.players = t);
            var n = 0,
              r = 0,
              o = 0,
              i = this.players.length;
            0 == i
              ? mg(function() {
                  return e._onFinish();
                })
              : this.players.forEach(function(t) {
                  t.onDone(function() {
                    ++n == i && e._onFinish();
                  }),
                    t.onDestroy(function() {
                      ++r == i && e._onDestroy();
                    }),
                    t.onStart(function() {
                      ++o == i && e._onStart();
                    });
                }),
              (this.totalTime = this.players.reduce(function(t, e) {
                return Math.max(t, e.totalTime);
              }, 0));
          }
          return (
            (t.prototype._onFinish = function() {
              this._finished ||
                ((this._finished = !0),
                this._onDoneFns.forEach(function(t) {
                  return t();
                }),
                (this._onDoneFns = []));
            }),
            (t.prototype.init = function() {
              this.players.forEach(function(t) {
                return t.init();
              });
            }),
            (t.prototype.onStart = function(t) {
              this._onStartFns.push(t);
            }),
            (t.prototype._onStart = function() {
              this.hasStarted() ||
                ((this._started = !0),
                this._onStartFns.forEach(function(t) {
                  return t();
                }),
                (this._onStartFns = []));
            }),
            (t.prototype.onDone = function(t) {
              this._onDoneFns.push(t);
            }),
            (t.prototype.onDestroy = function(t) {
              this._onDestroyFns.push(t);
            }),
            (t.prototype.hasStarted = function() {
              return this._started;
            }),
            (t.prototype.play = function() {
              this.parentPlayer || this.init(),
                this._onStart(),
                this.players.forEach(function(t) {
                  return t.play();
                });
            }),
            (t.prototype.pause = function() {
              this.players.forEach(function(t) {
                return t.pause();
              });
            }),
            (t.prototype.restart = function() {
              this.players.forEach(function(t) {
                return t.restart();
              });
            }),
            (t.prototype.finish = function() {
              this._onFinish(),
                this.players.forEach(function(t) {
                  return t.finish();
                });
            }),
            (t.prototype.destroy = function() {
              this._onDestroy();
            }),
            (t.prototype._onDestroy = function() {
              this._destroyed ||
                ((this._destroyed = !0),
                this._onFinish(),
                this.players.forEach(function(t) {
                  return t.destroy();
                }),
                this._onDestroyFns.forEach(function(t) {
                  return t();
                }),
                (this._onDestroyFns = []));
            }),
            (t.prototype.reset = function() {
              this.players.forEach(function(t) {
                return t.reset();
              }),
                (this._destroyed = !1),
                (this._finished = !1),
                (this._started = !1);
            }),
            (t.prototype.setPosition = function(t) {
              var e = t * this.totalTime;
              this.players.forEach(function(t) {
                var n = t.totalTime ? Math.min(1, e / t.totalTime) : 1;
                t.setPosition(n);
              });
            }),
            (t.prototype.getPosition = function() {
              var t = 0;
              return (
                this.players.forEach(function(e) {
                  var n = e.getPosition();
                  t = Math.min(n, t);
                }),
                t
              );
            }),
            (t.prototype.beforeDestroy = function() {
              this.players.forEach(function(t) {
                t.beforeDestroy && t.beforeDestroy();
              });
            }),
            (t.prototype.triggerCallback = function(t) {
              var e = 'start' == t ? this._onStartFns : this._onDoneFns;
              e.forEach(function(t) {
                return t();
              }),
                (e.length = 0);
            }),
            t
          );
        })(),
        bg = '!';
      function wg() {
        return 'undefined' != typeof process;
      }
      function Cg(t) {
        switch (t.length) {
          case 0:
            return new vg();
          case 1:
            return t[0];
          default:
            return new _g(t);
        }
      }
      function Sg(t, e, n, r, o, i) {
        void 0 === o && (o = {}), void 0 === i && (i = {});
        var s = [],
          a = [],
          u = -1,
          l = null;
        if (
          (r.forEach(function(t) {
            var n = t.offset,
              r = n == u,
              c = (r && l) || {};
            Object.keys(t).forEach(function(n) {
              var r = n,
                a = t[n];
              if ('offset' !== n)
                switch (((r = e.normalizePropertyName(r, s)), a)) {
                  case bg:
                    a = o[n];
                    break;
                  case dg:
                    a = i[n];
                    break;
                  default:
                    a = e.normalizeStyleValue(n, r, a, s);
                }
              c[r] = a;
            }),
              r || a.push(c),
              (l = c),
              (u = n);
          }),
          s.length)
        ) {
          throw new Error('Unable to animate due to the following errors:\n - ' + s.join('\n - '));
        }
        return a;
      }
      function Eg(t, e, n, r) {
        switch (e) {
          case 'start':
            t.onStart(function() {
              return r(n && Tg(n, 'start', t));
            });
            break;
          case 'done':
            t.onDone(function() {
              return r(n && Tg(n, 'done', t));
            });
            break;
          case 'destroy':
            t.onDestroy(function() {
              return r(n && Tg(n, 'destroy', t));
            });
        }
      }
      function Tg(t, e, n) {
        var r = n.totalTime,
          o = xg(
            t.element,
            t.triggerName,
            t.fromState,
            t.toState,
            e || t.phaseName,
            null == r ? t.totalTime : r,
            !!n.disabled,
          ),
          i = t._data;
        return null != i && (o._data = i), o;
      }
      function xg(t, e, n, r, o, i, s) {
        return (
          void 0 === o && (o = ''),
          void 0 === i && (i = 0),
          {
            element: t,
            triggerName: e,
            fromState: n,
            toState: r,
            phaseName: o,
            totalTime: i,
            disabled: !!s,
          }
        );
      }
      function Pg(t, e, n) {
        var r;
        return (
          t instanceof Map ? (r = t.get(e)) || t.set(e, (r = n)) : (r = t[e]) || (r = t[e] = n), r
        );
      }
      function Og(t) {
        var e = t.indexOf(':');
        return [t.substring(1, e), t.substr(e + 1)];
      }
      var kg = function(t, e) {
          return !1;
        },
        Ag = function(t, e) {
          return !1;
        },
        Ig = function(t, e, n) {
          return [];
        },
        Ng = wg();
      (Ng || 'undefined' != typeof Element) &&
        ((kg = function(t, e) {
          return t.contains(e);
        }),
        (Ag = (function() {
          if (Ng || Element.prototype.matches)
            return function(t, e) {
              return t.matches(e);
            };
          var t = Element.prototype,
            e =
              t.matchesSelector ||
              t.mozMatchesSelector ||
              t.msMatchesSelector ||
              t.oMatchesSelector ||
              t.webkitMatchesSelector;
          return e
            ? function(t, n) {
                return e.apply(t, [n]);
              }
            : Ag;
        })()),
        (Ig = function(t, e, n) {
          var r = [];
          if (n) r.push.apply(r, t.querySelectorAll(e));
          else {
            var o = t.querySelector(e);
            o && r.push(o);
          }
          return r;
        }));
      var Rg = null,
        Dg = !1;
      function Fg(t) {
        Rg ||
          ((Rg = ('undefined' != typeof document ? document.body : null) || {}),
          (Dg = !!Rg.style && 'WebkitAppearance' in Rg.style));
        var e = !0;
        return (
          Rg.style &&
            !(function(t) {
              return 'ebkit' == t.substring(1, 6);
            })(t) &&
            !(e = t in Rg.style) &&
            Dg &&
            (e = 'Webkit' + t.charAt(0).toUpperCase() + t.substr(1) in Rg.style),
          e
        );
      }
      var jg = Ag,
        Mg = kg,
        Vg = Ig;
      function Lg(t) {
        var e = {};
        return (
          Object.keys(t).forEach(function(n) {
            var r = n.replace(/([a-z])([A-Z])/g, '$1-$2');
            e[r] = t[n];
          }),
          e
        );
      }
      var Ug = (function() {
          function t() {}
          return (
            (t.prototype.validateStyleProperty = function(t) {
              return Fg(t);
            }),
            (t.prototype.matchesElement = function(t, e) {
              return jg(t, e);
            }),
            (t.prototype.containsElement = function(t, e) {
              return Mg(t, e);
            }),
            (t.prototype.query = function(t, e, n) {
              return Vg(t, e, n);
            }),
            (t.prototype.computeStyle = function(t, e, n) {
              return n || '';
            }),
            (t.prototype.animate = function(t, e, n, r, o, i, s) {
              return void 0 === i && (i = []), new vg(n, r);
            }),
            t
          );
        })(),
        Hg = (function() {
          var t = function() {};
          return (t.NOOP = new Ug()), t;
        })(),
        Bg = 1e3;
      function zg(t) {
        if ('number' == typeof t) return t;
        var e = t.match(/^(-?[\.\d]+)(m?s)/);
        return !e || e.length < 2 ? 0 : qg(parseFloat(e[1]), e[2]);
      }
      function qg(t, e) {
        switch (e) {
          case 's':
            return t * Bg;
          default:
            return t;
        }
      }
      function Gg(t, e, n) {
        return t.hasOwnProperty('duration')
          ? t
          : (function(t, e, n) {
              var r,
                o = 0,
                i = '';
              if ('string' == typeof t) {
                var s = t.match(
                  /^(-?[\.\d]+)(m?s)(?:\s+(-?[\.\d]+)(m?s))?(?:\s+([-a-z]+(?:\(.+?\))?))?$/i,
                );
                if (null === s)
                  return (
                    e.push('The provided timing value "' + t + '" is invalid.'),
                    { duration: 0, delay: 0, easing: '' }
                  );
                r = qg(parseFloat(s[1]), s[2]);
                var a = s[3];
                null != a && (o = qg(parseFloat(a), s[4]));
                var u = s[5];
                u && (i = u);
              } else r = t;
              if (!n) {
                var l = !1,
                  c = e.length;
                r < 0 &&
                  (e.push('Duration values below 0 are not allowed for this animation step.'),
                  (l = !0)),
                  o < 0 &&
                    (e.push('Delay values below 0 are not allowed for this animation step.'),
                    (l = !0)),
                  l && e.splice(c, 0, 'The provided timing value "' + t + '" is invalid.');
              }
              return { duration: r, delay: o, easing: i };
            })(t, e, n);
      }
      function Wg(t, e) {
        return (
          void 0 === e && (e = {}),
          Object.keys(t).forEach(function(n) {
            e[n] = t[n];
          }),
          e
        );
      }
      function Qg(t, e, n) {
        if ((void 0 === n && (n = {}), e)) for (var r in t) n[r] = t[r];
        else Wg(t, n);
        return n;
      }
      function Kg(t, e, n) {
        return n ? e + ':' + n + ';' : '';
      }
      function Zg(t) {
        for (var e = '', n = 0; n < t.style.length; n++) {
          e += Kg(0, (r = t.style.item(n)), t.style.getPropertyValue(r));
        }
        for (var r in t.style)
          t.style.hasOwnProperty(r) &&
            !r.startsWith('_') &&
            (e += Kg(0, r.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase(), t.style[r]));
        t.setAttribute('style', e);
      }
      function $g(t, e, n) {
        t.style &&
          (Object.keys(e).forEach(function(r) {
            var o = om(r);
            n && !n.hasOwnProperty(r) && (n[r] = t.style[o]), (t.style[o] = e[r]);
          }),
          wg() && Zg(t));
      }
      function Jg(t, e) {
        t.style &&
          (Object.keys(e).forEach(function(e) {
            var n = om(e);
            t.style[n] = '';
          }),
          wg() && Zg(t));
      }
      function Yg(t) {
        return Array.isArray(t) ? (1 == t.length ? t[0] : yg(t)) : t;
      }
      var Xg = new RegExp('{{\\s*(.+?)\\s*}}', 'g');
      function tm(t) {
        var e = [];
        if ('string' == typeof t) {
          for (var n, r = t.toString(); (n = Xg.exec(r)); ) e.push(n[1]);
          Xg.lastIndex = 0;
        }
        return e;
      }
      function em(t, e, n) {
        var r = t.toString(),
          o = r.replace(Xg, function(t, r) {
            var o = e[r];
            return (
              e.hasOwnProperty(r) ||
                (n.push('Please provide a value for the animation param ' + r), (o = '')),
              o.toString()
            );
          });
        return o == r ? t : o;
      }
      function nm(t) {
        for (var e = [], n = t.next(); !n.done; ) e.push(n.value), (n = t.next());
        return e;
      }
      var rm = /-+([a-z0-9])/g;
      function om(t) {
        return t.replace(rm, function() {
          for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
          return t[1].toUpperCase();
        });
      }
      function im(t, e) {
        return 0 === t || 0 === e;
      }
      function sm(t, e, n) {
        var r = Object.keys(n);
        if (r.length && e.length) {
          var o = e[0],
            i = [];
          if (
            (r.forEach(function(t) {
              o.hasOwnProperty(t) || i.push(t), (o[t] = n[t]);
            }),
            i.length)
          )
            for (
              var s = function() {
                  var n = e[a];
                  i.forEach(function(e) {
                    n[e] = um(t, e);
                  });
                },
                a = 1;
              a < e.length;
              a++
            )
              s();
        }
        return e;
      }
      function am(t, e, n) {
        switch (e.type) {
          case 7:
            return t.visitTrigger(e, n);
          case 0:
            return t.visitState(e, n);
          case 1:
            return t.visitTransition(e, n);
          case 2:
            return t.visitSequence(e, n);
          case 3:
            return t.visitGroup(e, n);
          case 4:
            return t.visitAnimate(e, n);
          case 5:
            return t.visitKeyframes(e, n);
          case 6:
            return t.visitStyle(e, n);
          case 8:
            return t.visitReference(e, n);
          case 9:
            return t.visitAnimateChild(e, n);
          case 10:
            return t.visitAnimateRef(e, n);
          case 11:
            return t.visitQuery(e, n);
          case 12:
            return t.visitStagger(e, n);
          default:
            throw new Error('Unable to resolve animation metadata node #' + e.type);
        }
      }
      function um(t, e) {
        return window.getComputedStyle(t)[e];
      }
      var lm = '*';
      var cm = new Set(['true', '1']),
        hm = new Set(['false', '0']);
      function pm(t, e) {
        var n = cm.has(t) || hm.has(t),
          r = cm.has(e) || hm.has(e);
        return function(o, i) {
          var s = t == lm || t == o,
            a = e == lm || e == i;
          return (
            !s && n && 'boolean' == typeof o && (s = o ? cm.has(t) : hm.has(t)),
            !a && r && 'boolean' == typeof i && (a = i ? cm.has(e) : hm.has(e)),
            s && a
          );
        };
      }
      var fm = new RegExp('s*:selfs*,?', 'g');
      function dm(t, e, n) {
        return new ym(t).build(e, n);
      }
      var ym = (function() {
          function t(t) {
            this._driver = t;
          }
          return (
            (t.prototype.build = function(t, e) {
              var n = new gm(e);
              return this._resetContextStyleTimingState(n), am(this, Yg(t), n);
            }),
            (t.prototype._resetContextStyleTimingState = function(t) {
              (t.currentQuerySelector = ''),
                (t.collectedStyles = {}),
                (t.collectedStyles[''] = {}),
                (t.currentTime = 0);
            }),
            (t.prototype.visitTrigger = function(t, e) {
              var n = this,
                r = (e.queryCount = 0),
                o = (e.depCount = 0),
                i = [],
                s = [];
              return (
                '@' == t.name.charAt(0) &&
                  e.errors.push(
                    "animation triggers cannot be prefixed with an `@` sign (e.g. trigger('@foo', [...]))",
                  ),
                t.definitions.forEach(function(t) {
                  if ((n._resetContextStyleTimingState(e), 0 == t.type)) {
                    var a = t,
                      u = a.name;
                    u
                      .toString()
                      .split(/\s*,\s*/)
                      .forEach(function(t) {
                        (a.name = t), i.push(n.visitState(a, e));
                      }),
                      (a.name = u);
                  } else if (1 == t.type) {
                    var l = n.visitTransition(t, e);
                    (r += l.queryCount), (o += l.depCount), s.push(l);
                  } else
                    e.errors.push(
                      'only state() and transition() definitions can sit inside of a trigger()',
                    );
                }),
                {
                  type: 7,
                  name: t.name,
                  states: i,
                  transitions: s,
                  queryCount: r,
                  depCount: o,
                  options: null,
                }
              );
            }),
            (t.prototype.visitState = function(t, e) {
              var n = this.visitStyle(t.styles, e),
                r = (t.options && t.options.params) || null;
              if (n.containsDynamicStyles) {
                var o = new Set(),
                  i = r || {};
                if (
                  (n.styles.forEach(function(t) {
                    if (mm(t)) {
                      var e = t;
                      Object.keys(e).forEach(function(t) {
                        tm(e[t]).forEach(function(t) {
                          i.hasOwnProperty(t) || o.add(t);
                        });
                      });
                    }
                  }),
                  o.size)
                ) {
                  var s = nm(o.values());
                  e.errors.push(
                    'state("' +
                      t.name +
                      '", ...) must define default values for all the following style substitutions: ' +
                      s.join(', '),
                  );
                }
              }
              return { type: 0, name: t.name, style: n, options: r ? { params: r } : null };
            }),
            (t.prototype.visitTransition = function(t, e) {
              (e.queryCount = 0), (e.depCount = 0);
              var n,
                r,
                o,
                i = am(this, Yg(t.animation), e);
              return {
                type: 1,
                matchers:
                  ((n = t.expr),
                  (r = e.errors),
                  (o = []),
                  'string' == typeof n
                    ? n.split(/\s*,\s*/).forEach(function(t) {
                        return (function(t, e, n) {
                          if (':' == t[0]) {
                            var r = (function(t, e) {
                              switch (t) {
                                case ':enter':
                                  return 'void => *';
                                case ':leave':
                                  return '* => void';
                                case ':increment':
                                  return function(t, e) {
                                    return parseFloat(e) > parseFloat(t);
                                  };
                                case ':decrement':
                                  return function(t, e) {
                                    return parseFloat(e) < parseFloat(t);
                                  };
                                default:
                                  return (
                                    e.push(
                                      'The transition alias value "' + t + '" is not supported',
                                    ),
                                    '* => *'
                                  );
                              }
                            })(t, n);
                            if ('function' == typeof r) return void e.push(r);
                            t = r;
                          }
                          var o = t.match(/^(\*|[-\w]+)\s*(<?[=-]>)\s*(\*|[-\w]+)$/);
                          if (null == o || o.length < 4)
                            return (
                              n.push(
                                'The provided transition expression "' + t + '" is not supported',
                              ),
                              e
                            );
                          var i = o[1],
                            s = o[2],
                            a = o[3];
                          e.push(pm(i, a)), '<' != s[0] || (i == lm && a == lm) || e.push(pm(a, i));
                        })(t, o, r);
                      })
                    : o.push(n),
                  o),
                animation: i,
                queryCount: e.queryCount,
                depCount: e.depCount,
                options: vm(t.options),
              };
            }),
            (t.prototype.visitSequence = function(t, e) {
              var n = this;
              return {
                type: 2,
                steps: t.steps.map(function(t) {
                  return am(n, t, e);
                }),
                options: vm(t.options),
              };
            }),
            (t.prototype.visitGroup = function(t, e) {
              var n = this,
                r = e.currentTime,
                o = 0,
                i = t.steps.map(function(t) {
                  e.currentTime = r;
                  var i = am(n, t, e);
                  return (o = Math.max(o, e.currentTime)), i;
                });
              return (e.currentTime = o), { type: 3, steps: i, options: vm(t.options) };
            }),
            (t.prototype.visitAnimate = function(t, e) {
              var n,
                r = (function(t, e) {
                  var n = null;
                  if (t.hasOwnProperty('duration')) n = t;
                  else if ('number' == typeof t) return _m(Gg(t, e).duration, 0, '');
                  var r = t;
                  if (
                    r.split(/\s+/).some(function(t) {
                      return '{' == t.charAt(0) && '{' == t.charAt(1);
                    })
                  ) {
                    var o = _m(0, 0, '');
                    return (o.dynamic = !0), (o.strValue = r), o;
                  }
                  return _m((n = n || Gg(r, e)).duration, n.delay, n.easing);
                })(t.timings, e.errors);
              e.currentAnimateTimings = r;
              var o = t.styles ? t.styles : gg({});
              if (5 == o.type) n = this.visitKeyframes(o, e);
              else {
                var i = t.styles,
                  s = !1;
                if (!i) {
                  s = !0;
                  var a = {};
                  r.easing && (a.easing = r.easing), (i = gg(a));
                }
                e.currentTime += r.duration + r.delay;
                var u = this.visitStyle(i, e);
                (u.isEmptyStep = s), (n = u);
              }
              return (
                (e.currentAnimateTimings = null), { type: 4, timings: r, style: n, options: null }
              );
            }),
            (t.prototype.visitStyle = function(t, e) {
              var n = this._makeStyleAst(t, e);
              return this._validateStyleAst(n, e), n;
            }),
            (t.prototype._makeStyleAst = function(t, e) {
              var n = [];
              Array.isArray(t.styles)
                ? t.styles.forEach(function(t) {
                    'string' == typeof t
                      ? t == dg
                        ? n.push(t)
                        : e.errors.push('The provided style string value ' + t + ' is not allowed.')
                      : n.push(t);
                  })
                : n.push(t.styles);
              var r = !1,
                o = null;
              return (
                n.forEach(function(t) {
                  if (mm(t)) {
                    var e = t,
                      n = e.easing;
                    if ((n && ((o = n), delete e.easing), !r))
                      for (var i in e)
                        if (e[i].toString().indexOf('{{') >= 0) {
                          r = !0;
                          break;
                        }
                  }
                }),
                {
                  type: 6,
                  styles: n,
                  easing: o,
                  offset: t.offset,
                  containsDynamicStyles: r,
                  options: null,
                }
              );
            }),
            (t.prototype._validateStyleAst = function(t, e) {
              var n = this,
                r = e.currentAnimateTimings,
                o = e.currentTime,
                i = e.currentTime;
              r && i > 0 && (i -= r.duration + r.delay),
                t.styles.forEach(function(t) {
                  'string' != typeof t &&
                    Object.keys(t).forEach(function(r) {
                      if (n._driver.validateStyleProperty(r)) {
                        var s,
                          a,
                          u,
                          l,
                          c,
                          h = e.collectedStyles[e.currentQuerySelector],
                          p = h[r],
                          f = !0;
                        p &&
                          (i != o &&
                            i >= p.startTime &&
                            o <= p.endTime &&
                            (e.errors.push(
                              'The CSS property "' +
                                r +
                                '" that exists between the times of "' +
                                p.startTime +
                                'ms" and "' +
                                p.endTime +
                                'ms" is also being animated in a parallel animation between the times of "' +
                                i +
                                'ms" and "' +
                                o +
                                'ms"',
                            ),
                            (f = !1)),
                          (i = p.startTime)),
                          f && (h[r] = { startTime: i, endTime: o }),
                          e.options &&
                            ((s = t[r]),
                            (a = e.options),
                            (u = e.errors),
                            (l = a.params || {}),
                            (c = tm(s)).length &&
                              c.forEach(function(t) {
                                l.hasOwnProperty(t) ||
                                  u.push(
                                    'Unable to resolve the local animation param ' +
                                      t +
                                      ' in the given list of values',
                                  );
                              }));
                      } else
                        e.errors.push(
                          'The provided animation property "' +
                            r +
                            '" is not a supported CSS property for animations',
                        );
                    });
                });
            }),
            (t.prototype.visitKeyframes = function(t, e) {
              var n = this,
                r = { type: 5, styles: [], options: null };
              if (!e.currentAnimateTimings)
                return e.errors.push('keyframes() must be placed inside of a call to animate()'), r;
              var o = 0,
                i = [],
                s = !1,
                a = !1,
                u = 0,
                l = t.steps.map(function(t) {
                  var r = n._makeStyleAst(t, e),
                    l =
                      null != r.offset
                        ? r.offset
                        : (function(t) {
                            if ('string' == typeof t) return null;
                            var e = null;
                            if (Array.isArray(t))
                              t.forEach(function(t) {
                                if (mm(t) && t.hasOwnProperty('offset')) {
                                  var n = t;
                                  (e = parseFloat(n.offset)), delete n.offset;
                                }
                              });
                            else if (mm(t) && t.hasOwnProperty('offset')) {
                              var n = t;
                              (e = parseFloat(n.offset)), delete n.offset;
                            }
                            return e;
                          })(r.styles),
                    c = 0;
                  return (
                    null != l && (o++, (c = r.offset = l)),
                    (a = a || c < 0 || c > 1),
                    (s = s || c < u),
                    (u = c),
                    i.push(c),
                    r
                  );
                });
              a && e.errors.push('Please ensure that all keyframe offsets are between 0 and 1'),
                s && e.errors.push('Please ensure that all keyframe offsets are in order');
              var c = t.steps.length,
                h = 0;
              o > 0 && o < c
                ? e.errors.push(
                    'Not all style() steps within the declared keyframes() contain offsets',
                  )
                : 0 == o && (h = 1 / (c - 1));
              var p = c - 1,
                f = e.currentTime,
                d = e.currentAnimateTimings,
                y = d.duration;
              return (
                l.forEach(function(t, o) {
                  var s = h > 0 ? (o == p ? 1 : h * o) : i[o],
                    a = s * y;
                  (e.currentTime = f + d.delay + a),
                    (d.duration = a),
                    n._validateStyleAst(t, e),
                    (t.offset = s),
                    r.styles.push(t);
                }),
                r
              );
            }),
            (t.prototype.visitReference = function(t, e) {
              return { type: 8, animation: am(this, Yg(t.animation), e), options: vm(t.options) };
            }),
            (t.prototype.visitAnimateChild = function(t, e) {
              return e.depCount++, { type: 9, options: vm(t.options) };
            }),
            (t.prototype.visitAnimateRef = function(t, e) {
              return {
                type: 10,
                animation: this.visitReference(t.animation, e),
                options: vm(t.options),
              };
            }),
            (t.prototype.visitQuery = function(t, e) {
              var n = e.currentQuerySelector,
                r = t.options || {};
              e.queryCount++, (e.currentQuery = t);
              var o = (function(t) {
                  var e = !!t.split(/\s*,\s*/).find(function(t) {
                    return ':self' == t;
                  });
                  return (
                    e && (t = t.replace(fm, '')),
                    [
                      (t = t
                        .replace(/@\*/g, '.ng-trigger')
                        .replace(/@\w+/g, function(t) {
                          return '.ng-trigger-' + t.substr(1);
                        })
                        .replace(/:animating/g, '.ng-animating')),
                      e,
                    ]
                  );
                })(t.selector),
                i = o[0],
                s = o[1];
              (e.currentQuerySelector = n.length ? n + ' ' + i : i),
                Pg(e.collectedStyles, e.currentQuerySelector, {});
              var a = am(this, Yg(t.animation), e);
              return (
                (e.currentQuery = null),
                (e.currentQuerySelector = n),
                {
                  type: 11,
                  selector: i,
                  limit: r.limit || 0,
                  optional: !!r.optional,
                  includeSelf: s,
                  animation: a,
                  originalSelector: t.selector,
                  options: vm(t.options),
                }
              );
            }),
            (t.prototype.visitStagger = function(t, e) {
              e.currentQuery || e.errors.push('stagger() can only be used inside of query()');
              var n =
                'full' === t.timings
                  ? { duration: 0, delay: 0, easing: 'full' }
                  : Gg(t.timings, e.errors, !0);
              return {
                type: 12,
                animation: am(this, Yg(t.animation), e),
                timings: n,
                options: null,
              };
            }),
            t
          );
        })(),
        gm = function(t) {
          (this.errors = t),
            (this.queryCount = 0),
            (this.depCount = 0),
            (this.currentTransition = null),
            (this.currentQuery = null),
            (this.currentQuerySelector = null),
            (this.currentAnimateTimings = null),
            (this.currentTime = 0),
            (this.collectedStyles = {}),
            (this.options = null);
        };
      function mm(t) {
        return !Array.isArray(t) && 'object' == typeof t;
      }
      function vm(t) {
        var e;
        return t ? (t = Wg(t)).params && (t.params = (e = t.params) ? Wg(e) : null) : (t = {}), t;
      }
      function _m(t, e, n) {
        return { duration: t, delay: e, easing: n };
      }
      function bm(t, e, n, r, o, i, s, a) {
        return (
          void 0 === s && (s = null),
          void 0 === a && (a = !1),
          {
            type: 1,
            element: t,
            keyframes: e,
            preStyleProps: n,
            postStyleProps: r,
            duration: o,
            delay: i,
            totalTime: o + i,
            easing: s,
            subTimeline: a,
          }
        );
      }
      var wm = (function() {
          function t() {
            this._map = new Map();
          }
          return (
            (t.prototype.consume = function(t) {
              var e = this._map.get(t);
              return e ? this._map.delete(t) : (e = []), e;
            }),
            (t.prototype.append = function(t, e) {
              var n = this._map.get(t);
              n || this._map.set(t, (n = [])), n.push.apply(n, e);
            }),
            (t.prototype.has = function(t) {
              return this._map.has(t);
            }),
            (t.prototype.clear = function() {
              this._map.clear();
            }),
            t
          );
        })(),
        Cm = new RegExp(':enter', 'g'),
        Sm = new RegExp(':leave', 'g');
      function Em(t, e, n, r, o, i, s, a, u, l) {
        return (
          void 0 === i && (i = {}),
          void 0 === s && (s = {}),
          void 0 === l && (l = []),
          new Tm().buildKeyframes(t, e, n, r, o, i, s, a, u, l)
        );
      }
      var Tm = (function() {
          function t() {}
          return (
            (t.prototype.buildKeyframes = function(t, e, n, r, o, i, s, a, u, l) {
              void 0 === l && (l = []), (u = u || new wm());
              var c = new Pm(t, e, u, r, o, l, []);
              (c.options = a), c.currentTimeline.setStyles([i], null, c.errors, a), am(this, n, c);
              var h = c.timelines.filter(function(t) {
                return t.containsAnimation();
              });
              if (h.length && Object.keys(s).length) {
                var p = h[h.length - 1];
                p.allowOnlyTimelineStyles() || p.setStyles([s], null, c.errors, a);
              }
              return h.length
                ? h.map(function(t) {
                    return t.buildKeyframes();
                  })
                : [bm(e, [], [], [], 0, 0, '', !1)];
            }),
            (t.prototype.visitTrigger = function(t, e) {}),
            (t.prototype.visitState = function(t, e) {}),
            (t.prototype.visitTransition = function(t, e) {}),
            (t.prototype.visitAnimateChild = function(t, e) {
              var n = e.subInstructions.consume(e.element);
              if (n) {
                var r = e.createSubContext(t.options),
                  o = e.currentTimeline.currentTime,
                  i = this._visitSubInstructions(n, r, r.options);
                o != i && e.transformIntoNewTimeline(i);
              }
              e.previousNode = t;
            }),
            (t.prototype.visitAnimateRef = function(t, e) {
              var n = e.createSubContext(t.options);
              n.transformIntoNewTimeline(),
                this.visitReference(t.animation, n),
                e.transformIntoNewTimeline(n.currentTimeline.currentTime),
                (e.previousNode = t);
            }),
            (t.prototype._visitSubInstructions = function(t, e, n) {
              var r = e.currentTimeline.currentTime,
                o = null != n.duration ? zg(n.duration) : null,
                i = null != n.delay ? zg(n.delay) : null;
              return (
                0 !== o &&
                  t.forEach(function(t) {
                    var n = e.appendInstructionToTimeline(t, o, i);
                    r = Math.max(r, n.duration + n.delay);
                  }),
                r
              );
            }),
            (t.prototype.visitReference = function(t, e) {
              e.updateOptions(t.options, !0), am(this, t.animation, e), (e.previousNode = t);
            }),
            (t.prototype.visitSequence = function(t, e) {
              var n = this,
                r = e.subContextCount,
                o = e,
                i = t.options;
              if (
                i &&
                (i.params || i.delay) &&
                ((o = e.createSubContext(i)).transformIntoNewTimeline(), null != i.delay)
              ) {
                6 == o.previousNode.type &&
                  (o.currentTimeline.snapshotCurrentStyles(), (o.previousNode = xm));
                var s = zg(i.delay);
                o.delayNextStep(s);
              }
              t.steps.length &&
                (t.steps.forEach(function(t) {
                  return am(n, t, o);
                }),
                o.currentTimeline.applyStylesToKeyframe(),
                o.subContextCount > r && o.transformIntoNewTimeline()),
                (e.previousNode = t);
            }),
            (t.prototype.visitGroup = function(t, e) {
              var n = this,
                r = [],
                o = e.currentTimeline.currentTime,
                i = t.options && t.options.delay ? zg(t.options.delay) : 0;
              t.steps.forEach(function(s) {
                var a = e.createSubContext(t.options);
                i && a.delayNextStep(i),
                  am(n, s, a),
                  (o = Math.max(o, a.currentTimeline.currentTime)),
                  r.push(a.currentTimeline);
              }),
                r.forEach(function(t) {
                  return e.currentTimeline.mergeTimelineCollectedStyles(t);
                }),
                e.transformIntoNewTimeline(o),
                (e.previousNode = t);
            }),
            (t.prototype._visitTiming = function(t, e) {
              if (t.dynamic) {
                var n = t.strValue;
                return Gg(e.params ? em(n, e.params, e.errors) : n, e.errors);
              }
              return { duration: t.duration, delay: t.delay, easing: t.easing };
            }),
            (t.prototype.visitAnimate = function(t, e) {
              var n = (e.currentAnimateTimings = this._visitTiming(t.timings, e)),
                r = e.currentTimeline;
              n.delay && (e.incrementTime(n.delay), r.snapshotCurrentStyles());
              var o = t.style;
              5 == o.type
                ? this.visitKeyframes(o, e)
                : (e.incrementTime(n.duration), this.visitStyle(o, e), r.applyStylesToKeyframe()),
                (e.currentAnimateTimings = null),
                (e.previousNode = t);
            }),
            (t.prototype.visitStyle = function(t, e) {
              var n = e.currentTimeline,
                r = e.currentAnimateTimings;
              !r && n.getCurrentStyleProperties().length && n.forwardFrame();
              var o = (r && r.easing) || t.easing;
              t.isEmptyStep ? n.applyEmptyStep(o) : n.setStyles(t.styles, o, e.errors, e.options),
                (e.previousNode = t);
            }),
            (t.prototype.visitKeyframes = function(t, e) {
              var n = e.currentAnimateTimings,
                r = e.currentTimeline.duration,
                o = n.duration,
                i = e.createSubContext().currentTimeline;
              (i.easing = n.easing),
                t.styles.forEach(function(t) {
                  i.forwardTime((t.offset || 0) * o),
                    i.setStyles(t.styles, t.easing, e.errors, e.options),
                    i.applyStylesToKeyframe();
                }),
                e.currentTimeline.mergeTimelineCollectedStyles(i),
                e.transformIntoNewTimeline(r + o),
                (e.previousNode = t);
            }),
            (t.prototype.visitQuery = function(t, e) {
              var n = this,
                r = e.currentTimeline.currentTime,
                o = t.options || {},
                i = o.delay ? zg(o.delay) : 0;
              i &&
                (6 === e.previousNode.type ||
                  (0 == r && e.currentTimeline.getCurrentStyleProperties().length)) &&
                (e.currentTimeline.snapshotCurrentStyles(), (e.previousNode = xm));
              var s = r,
                a = e.invokeQuery(
                  t.selector,
                  t.originalSelector,
                  t.limit,
                  t.includeSelf,
                  !!o.optional,
                  e.errors,
                );
              e.currentQueryTotal = a.length;
              var u = null;
              a.forEach(function(r, o) {
                e.currentQueryIndex = o;
                var a = e.createSubContext(t.options, r);
                i && a.delayNextStep(i),
                  r === e.element && (u = a.currentTimeline),
                  am(n, t.animation, a),
                  a.currentTimeline.applyStylesToKeyframe(),
                  (s = Math.max(s, a.currentTimeline.currentTime));
              }),
                (e.currentQueryIndex = 0),
                (e.currentQueryTotal = 0),
                e.transformIntoNewTimeline(s),
                u &&
                  (e.currentTimeline.mergeTimelineCollectedStyles(u),
                  e.currentTimeline.snapshotCurrentStyles()),
                (e.previousNode = t);
            }),
            (t.prototype.visitStagger = function(t, e) {
              var n = e.parentContext,
                r = e.currentTimeline,
                o = t.timings,
                i = Math.abs(o.duration),
                s = i * (e.currentQueryTotal - 1),
                a = i * e.currentQueryIndex;
              switch (o.duration < 0 ? 'reverse' : o.easing) {
                case 'reverse':
                  a = s - a;
                  break;
                case 'full':
                  a = n.currentStaggerTime;
              }
              var u = e.currentTimeline;
              a && u.delayNextStep(a);
              var l = u.currentTime;
              am(this, t.animation, e),
                (e.previousNode = t),
                (n.currentStaggerTime =
                  r.currentTime - l + (r.startTime - n.currentTimeline.startTime));
            }),
            t
          );
        })(),
        xm = {},
        Pm = (function() {
          function t(t, e, n, r, o, i, s, a) {
            (this._driver = t),
              (this.element = e),
              (this.subInstructions = n),
              (this._enterClassName = r),
              (this._leaveClassName = o),
              (this.errors = i),
              (this.timelines = s),
              (this.parentContext = null),
              (this.currentAnimateTimings = null),
              (this.previousNode = xm),
              (this.subContextCount = 0),
              (this.options = {}),
              (this.currentQueryIndex = 0),
              (this.currentQueryTotal = 0),
              (this.currentStaggerTime = 0),
              (this.currentTimeline = a || new Om(this._driver, e, 0)),
              s.push(this.currentTimeline);
          }
          return (
            Object.defineProperty(t.prototype, 'params', {
              get: function() {
                return this.options.params;
              },
              enumerable: !0,
              configurable: !0,
            }),
            (t.prototype.updateOptions = function(t, e) {
              var n = this;
              if (t) {
                var r = t,
                  o = this.options;
                null != r.duration && (o.duration = zg(r.duration)),
                  null != r.delay && (o.delay = zg(r.delay));
                var i = r.params;
                if (i) {
                  var s = o.params;
                  s || (s = this.options.params = {}),
                    Object.keys(i).forEach(function(t) {
                      (e && s.hasOwnProperty(t)) || (s[t] = em(i[t], s, n.errors));
                    });
                }
              }
            }),
            (t.prototype._copyOptions = function() {
              var t = {};
              if (this.options) {
                var e = this.options.params;
                if (e) {
                  var n = (t.params = {});
                  Object.keys(e).forEach(function(t) {
                    n[t] = e[t];
                  });
                }
              }
              return t;
            }),
            (t.prototype.createSubContext = function(e, n, r) {
              void 0 === e && (e = null);
              var o = n || this.element,
                i = new t(
                  this._driver,
                  o,
                  this.subInstructions,
                  this._enterClassName,
                  this._leaveClassName,
                  this.errors,
                  this.timelines,
                  this.currentTimeline.fork(o, r || 0),
                );
              return (
                (i.previousNode = this.previousNode),
                (i.currentAnimateTimings = this.currentAnimateTimings),
                (i.options = this._copyOptions()),
                i.updateOptions(e),
                (i.currentQueryIndex = this.currentQueryIndex),
                (i.currentQueryTotal = this.currentQueryTotal),
                (i.parentContext = this),
                this.subContextCount++,
                i
              );
            }),
            (t.prototype.transformIntoNewTimeline = function(t) {
              return (
                (this.previousNode = xm),
                (this.currentTimeline = this.currentTimeline.fork(this.element, t)),
                this.timelines.push(this.currentTimeline),
                this.currentTimeline
              );
            }),
            (t.prototype.appendInstructionToTimeline = function(t, e, n) {
              var r = {
                  duration: null != e ? e : t.duration,
                  delay: this.currentTimeline.currentTime + (null != n ? n : 0) + t.delay,
                  easing: '',
                },
                o = new km(
                  this._driver,
                  t.element,
                  t.keyframes,
                  t.preStyleProps,
                  t.postStyleProps,
                  r,
                  t.stretchStartingKeyframe,
                );
              return this.timelines.push(o), r;
            }),
            (t.prototype.incrementTime = function(t) {
              this.currentTimeline.forwardTime(this.currentTimeline.duration + t);
            }),
            (t.prototype.delayNextStep = function(t) {
              t > 0 && this.currentTimeline.delayNextStep(t);
            }),
            (t.prototype.invokeQuery = function(t, e, n, r, o, i) {
              var s = [];
              if ((r && s.push(this.element), t.length > 0)) {
                t = (t = t.replace(Cm, '.' + this._enterClassName)).replace(
                  Sm,
                  '.' + this._leaveClassName,
                );
                var a = this._driver.query(this.element, t, 1 != n);
                0 !== n && (a = n < 0 ? a.slice(a.length + n, a.length) : a.slice(0, n)),
                  s.push.apply(s, a);
              }
              return (
                o ||
                  0 != s.length ||
                  i.push(
                    '`query("' +
                      e +
                      '")` returned zero elements. (Use `query("' +
                      e +
                      '", { optional: true })` if you wish to allow this.)',
                  ),
                s
              );
            }),
            t
          );
        })(),
        Om = (function() {
          function t(t, e, n, r) {
            (this._driver = t),
              (this.element = e),
              (this.startTime = n),
              (this._elementTimelineStylesLookup = r),
              (this.duration = 0),
              (this._previousKeyframe = {}),
              (this._currentKeyframe = {}),
              (this._keyframes = new Map()),
              (this._styleSummary = {}),
              (this._pendingStyles = {}),
              (this._backFill = {}),
              (this._currentEmptyStepKeyframe = null),
              this._elementTimelineStylesLookup || (this._elementTimelineStylesLookup = new Map()),
              (this._localTimelineStyles = Object.create(this._backFill, {})),
              (this._globalTimelineStyles = this._elementTimelineStylesLookup.get(e)),
              this._globalTimelineStyles ||
                ((this._globalTimelineStyles = this._localTimelineStyles),
                this._elementTimelineStylesLookup.set(e, this._localTimelineStyles)),
              this._loadKeyframe();
          }
          return (
            (t.prototype.containsAnimation = function() {
              switch (this._keyframes.size) {
                case 0:
                  return !1;
                case 1:
                  return this.getCurrentStyleProperties().length > 0;
                default:
                  return !0;
              }
            }),
            (t.prototype.getCurrentStyleProperties = function() {
              return Object.keys(this._currentKeyframe);
            }),
            Object.defineProperty(t.prototype, 'currentTime', {
              get: function() {
                return this.startTime + this.duration;
              },
              enumerable: !0,
              configurable: !0,
            }),
            (t.prototype.delayNextStep = function(t) {
              var e = 1 == this._keyframes.size && Object.keys(this._pendingStyles).length;
              this.duration || e
                ? (this.forwardTime(this.currentTime + t), e && this.snapshotCurrentStyles())
                : (this.startTime += t);
            }),
            (t.prototype.fork = function(e, n) {
              return (
                this.applyStylesToKeyframe(),
                new t(this._driver, e, n || this.currentTime, this._elementTimelineStylesLookup)
              );
            }),
            (t.prototype._loadKeyframe = function() {
              this._currentKeyframe && (this._previousKeyframe = this._currentKeyframe),
                (this._currentKeyframe = this._keyframes.get(this.duration)),
                this._currentKeyframe ||
                  ((this._currentKeyframe = Object.create(this._backFill, {})),
                  this._keyframes.set(this.duration, this._currentKeyframe));
            }),
            (t.prototype.forwardFrame = function() {
              (this.duration += 1), this._loadKeyframe();
            }),
            (t.prototype.forwardTime = function(t) {
              this.applyStylesToKeyframe(), (this.duration = t), this._loadKeyframe();
            }),
            (t.prototype._updateStyle = function(t, e) {
              (this._localTimelineStyles[t] = e),
                (this._globalTimelineStyles[t] = e),
                (this._styleSummary[t] = { time: this.currentTime, value: e });
            }),
            (t.prototype.allowOnlyTimelineStyles = function() {
              return this._currentEmptyStepKeyframe !== this._currentKeyframe;
            }),
            (t.prototype.applyEmptyStep = function(t) {
              var e = this;
              t && (this._previousKeyframe.easing = t),
                Object.keys(this._globalTimelineStyles).forEach(function(t) {
                  (e._backFill[t] = e._globalTimelineStyles[t] || dg), (e._currentKeyframe[t] = dg);
                }),
                (this._currentEmptyStepKeyframe = this._currentKeyframe);
            }),
            (t.prototype.setStyles = function(t, e, n, r) {
              var o = this;
              e && (this._previousKeyframe.easing = e);
              var i = (r && r.params) || {},
                s = (function(t, e) {
                  var n,
                    r = {};
                  return (
                    t.forEach(function(t) {
                      '*' === t
                        ? (n = n || Object.keys(e)).forEach(function(t) {
                            r[t] = dg;
                          })
                        : Qg(t, !1, r);
                    }),
                    r
                  );
                })(t, this._globalTimelineStyles);
              Object.keys(s).forEach(function(t) {
                var e = em(s[t], i, n);
                (o._pendingStyles[t] = e),
                  o._localTimelineStyles.hasOwnProperty(t) ||
                    (o._backFill[t] = o._globalTimelineStyles.hasOwnProperty(t)
                      ? o._globalTimelineStyles[t]
                      : dg),
                  o._updateStyle(t, e);
              });
            }),
            (t.prototype.applyStylesToKeyframe = function() {
              var t = this,
                e = this._pendingStyles,
                n = Object.keys(e);
              0 != n.length &&
                ((this._pendingStyles = {}),
                n.forEach(function(n) {
                  t._currentKeyframe[n] = e[n];
                }),
                Object.keys(this._localTimelineStyles).forEach(function(e) {
                  t._currentKeyframe.hasOwnProperty(e) ||
                    (t._currentKeyframe[e] = t._localTimelineStyles[e]);
                }));
            }),
            (t.prototype.snapshotCurrentStyles = function() {
              var t = this;
              Object.keys(this._localTimelineStyles).forEach(function(e) {
                var n = t._localTimelineStyles[e];
                (t._pendingStyles[e] = n), t._updateStyle(e, n);
              });
            }),
            (t.prototype.getFinalKeyframe = function() {
              return this._keyframes.get(this.duration);
            }),
            Object.defineProperty(t.prototype, 'properties', {
              get: function() {
                var t = [];
                for (var e in this._currentKeyframe) t.push(e);
                return t;
              },
              enumerable: !0,
              configurable: !0,
            }),
            (t.prototype.mergeTimelineCollectedStyles = function(t) {
              var e = this;
              Object.keys(t._styleSummary).forEach(function(n) {
                var r = e._styleSummary[n],
                  o = t._styleSummary[n];
                (!r || o.time > r.time) && e._updateStyle(n, o.value);
              });
            }),
            (t.prototype.buildKeyframes = function() {
              var t = this;
              this.applyStylesToKeyframe();
              var e = new Set(),
                n = new Set(),
                r = 1 === this._keyframes.size && 0 === this.duration,
                o = [];
              this._keyframes.forEach(function(i, s) {
                var a = Qg(i, !0);
                Object.keys(a).forEach(function(t) {
                  var r = a[t];
                  r == bg ? e.add(t) : r == dg && n.add(t);
                }),
                  r || (a.offset = s / t.duration),
                  o.push(a);
              });
              var i = e.size ? nm(e.values()) : [],
                s = n.size ? nm(n.values()) : [];
              if (r) {
                var a = o[0],
                  u = Wg(a);
                (a.offset = 0), (u.offset = 1), (o = [a, u]);
              }
              return bm(this.element, o, i, s, this.duration, this.startTime, this.easing, !1);
            }),
            t
          );
        })(),
        km = (function(t) {
          function e(e, n, r, o, i, s, a) {
            void 0 === a && (a = !1);
            var u = this;
            return (
              ((u = t.call(this, e, n, s.delay) || this).element = n),
              (u.keyframes = r),
              (u.preStyleProps = o),
              (u.postStyleProps = i),
              (u._stretchStartingKeyframe = a),
              (u.timings = { duration: s.duration, delay: s.delay, easing: s.easing }),
              u
            );
          }
          return (
            __extends(e, t),
            (e.prototype.containsAnimation = function() {
              return this.keyframes.length > 1;
            }),
            (e.prototype.buildKeyframes = function() {
              var t = this.keyframes,
                e = this.timings,
                n = e.delay,
                r = e.duration,
                o = e.easing;
              if (this._stretchStartingKeyframe && n) {
                var i = [],
                  s = r + n,
                  a = n / s,
                  u = Qg(t[0], !1);
                (u.offset = 0), i.push(u);
                var l = Qg(t[0], !1);
                (l.offset = Am(a)), i.push(l);
                for (var c = t.length - 1, h = 1; h <= c; h++) {
                  var p = Qg(t[h], !1);
                  (p.offset = Am((n + p.offset * r) / s)), i.push(p);
                }
                (r = s), (n = 0), (o = ''), (t = i);
              }
              return bm(this.element, t, this.preStyleProps, this.postStyleProps, r, n, o, !0);
            }),
            e
          );
        })(Om);
      function Am(t, e) {
        void 0 === e && (e = 3);
        var n = Math.pow(10, e - 1);
        return Math.round(t * n) / n;
      }
      var Im = function() {},
        Nm = (function(t) {
          function e() {
            return (null !== t && t.apply(this, arguments)) || this;
          }
          return (
            __extends(e, t),
            (e.prototype.normalizePropertyName = function(t, e) {
              return om(t);
            }),
            (e.prototype.normalizeStyleValue = function(t, e, n, r) {
              var o = '',
                i = n.toString().trim();
              if (Rm[e] && 0 !== n && '0' !== n)
                if ('number' == typeof n) o = 'px';
                else {
                  var s = n.match(/^[+-]?[\d\.]+([a-z]*)$/);
                  s &&
                    0 == s[1].length &&
                    r.push('Please provide a CSS unit value for ' + t + ':' + n);
                }
              return i + o;
            }),
            e
          );
        })(Im),
        Rm = (function(t) {
          var e = {};
          return (
            t.forEach(function(t) {
              return (e[t] = !0);
            }),
            e
          );
        })(
          'width,height,minWidth,minHeight,maxWidth,maxHeight,left,top,bottom,right,fontSize,outlineWidth,outlineOffset,paddingTop,paddingLeft,paddingBottom,paddingRight,marginTop,marginLeft,marginBottom,marginRight,borderRadius,borderWidth,borderTopWidth,borderLeftWidth,borderRightWidth,borderBottomWidth,textIndent,perspective'.split(
            ',',
          ),
        );
      function Dm(t, e, n, r, o, i, s, a, u, l, c, h, p) {
        return {
          type: 0,
          element: t,
          triggerName: e,
          isRemovalTransition: o,
          fromState: n,
          fromStyles: i,
          toState: r,
          toStyles: s,
          timelines: a,
          queriedElements: u,
          preStyleProps: l,
          postStyleProps: c,
          totalTime: h,
          errors: p,
        };
      }
      var Fm = {},
        jm = (function() {
          function t(t, e, n) {
            (this._triggerName = t), (this.ast = e), (this._stateStyles = n);
          }
          return (
            (t.prototype.match = function(t, e, n, r) {
              return (function(t, e, n, r, o) {
                return t.some(function(t) {
                  return t(e, n, r, o);
                });
              })(this.ast.matchers, t, e, n, r);
            }),
            (t.prototype.buildStyles = function(t, e, n) {
              var r = this._stateStyles['*'],
                o = this._stateStyles[t],
                i = r ? r.buildStyles(e, n) : {};
              return o ? o.buildStyles(e, n) : i;
            }),
            (t.prototype.build = function(t, e, n, r, o, i, s, a, u, l) {
              var c = [],
                h = (this.ast.options && this.ast.options.params) || Fm,
                p = this.buildStyles(n, (s && s.params) || Fm, c),
                f = (a && a.params) || Fm,
                d = this.buildStyles(r, f, c),
                y = new Set(),
                g = new Map(),
                m = new Map(),
                v = 'void' === r,
                _ = { params: Object.assign({}, h, f) },
                b = l ? [] : Em(t, e, this.ast.animation, o, i, p, d, _, u, c),
                w = 0;
              if (
                (b.forEach(function(t) {
                  w = Math.max(t.duration + t.delay, w);
                }),
                c.length)
              )
                return Dm(e, this._triggerName, n, r, v, p, d, [], [], g, m, w, c);
              b.forEach(function(t) {
                var n = t.element,
                  r = Pg(g, n, {});
                t.preStyleProps.forEach(function(t) {
                  return (r[t] = !0);
                });
                var o = Pg(m, n, {});
                t.postStyleProps.forEach(function(t) {
                  return (o[t] = !0);
                }),
                  n !== e && y.add(n);
              });
              var C = nm(y.values());
              return Dm(e, this._triggerName, n, r, v, p, d, b, C, g, m, w);
            }),
            t
          );
        })(),
        Mm = (function() {
          function t(t, e) {
            (this.styles = t), (this.defaultParams = e);
          }
          return (
            (t.prototype.buildStyles = function(t, e) {
              var n = {},
                r = Wg(this.defaultParams);
              return (
                Object.keys(t).forEach(function(e) {
                  var n = t[e];
                  null != n && (r[e] = n);
                }),
                this.styles.styles.forEach(function(t) {
                  if ('string' != typeof t) {
                    var o = t;
                    Object.keys(o).forEach(function(t) {
                      var i = o[t];
                      i.length > 1 && (i = em(i, r, e)), (n[t] = i);
                    });
                  }
                }),
                n
              );
            }),
            t
          );
        })(),
        Vm = (function() {
          function t(t, e) {
            var n = this;
            (this.name = t),
              (this.ast = e),
              (this.transitionFactories = []),
              (this.states = {}),
              e.states.forEach(function(t) {
                n.states[t.name] = new Mm(t.style, (t.options && t.options.params) || {});
              }),
              Lm(this.states, 'true', '1'),
              Lm(this.states, 'false', '0'),
              e.transitions.forEach(function(e) {
                n.transitionFactories.push(new jm(t, e, n.states));
              }),
              (this.fallbackTransition = new jm(
                t,
                {
                  type: 1,
                  animation: { type: 2, steps: [], options: null },
                  matchers: [
                    function(t, e) {
                      return !0;
                    },
                  ],
                  options: null,
                  queryCount: 0,
                  depCount: 0,
                },
                this.states,
              ));
          }
          return (
            Object.defineProperty(t.prototype, 'containsQueries', {
              get: function() {
                return this.ast.queryCount > 0;
              },
              enumerable: !0,
              configurable: !0,
            }),
            (t.prototype.matchTransition = function(t, e, n, r) {
              return (
                this.transitionFactories.find(function(o) {
                  return o.match(t, e, n, r);
                }) || null
              );
            }),
            (t.prototype.matchStyles = function(t, e, n) {
              return this.fallbackTransition.buildStyles(t, e, n);
            }),
            t
          );
        })();
      function Lm(t, e, n) {
        t.hasOwnProperty(e)
          ? t.hasOwnProperty(n) || (t[n] = t[e])
          : t.hasOwnProperty(n) && (t[e] = t[n]);
      }
      var Um = new wm(),
        Hm = (function() {
          function t(t, e, n) {
            (this.bodyNode = t),
              (this._driver = e),
              (this._normalizer = n),
              (this._animations = {}),
              (this._playersById = {}),
              (this.players = []);
          }
          return (
            (t.prototype.register = function(t, e) {
              var n = [],
                r = dm(this._driver, e, n);
              if (n.length)
                throw new Error(
                  'Unable to build the animation due to the following errors: ' + n.join('\n'),
                );
              this._animations[t] = r;
            }),
            (t.prototype._buildPlayer = function(t, e, n) {
              var r = t.element,
                o = Sg(0, this._normalizer, 0, t.keyframes, e, n);
              return this._driver.animate(r, o, t.duration, t.delay, t.easing, [], !0);
            }),
            (t.prototype.create = function(t, e, n) {
              var r = this;
              void 0 === n && (n = {});
              var o,
                i = [],
                s = this._animations[t],
                a = new Map();
              if (
                (s
                  ? (o = Em(this._driver, e, s, 'ng-enter', 'ng-leave', {}, {}, n, Um, i)).forEach(
                      function(t) {
                        var e = Pg(a, t.element, {});
                        t.postStyleProps.forEach(function(t) {
                          return (e[t] = null);
                        });
                      },
                    )
                  : (i.push("The requested animation doesn't exist or has already been destroyed"),
                    (o = [])),
                i.length)
              )
                throw new Error(
                  'Unable to create the animation due to the following errors: ' + i.join('\n'),
                );
              a.forEach(function(t, e) {
                Object.keys(t).forEach(function(n) {
                  t[n] = r._driver.computeStyle(e, n, dg);
                });
              });
              var u = Cg(
                o.map(function(t) {
                  var e = a.get(t.element);
                  return r._buildPlayer(t, {}, e);
                }),
              );
              return (
                (this._playersById[t] = u),
                u.onDestroy(function() {
                  return r.destroy(t);
                }),
                this.players.push(u),
                u
              );
            }),
            (t.prototype.destroy = function(t) {
              var e = this._getPlayer(t);
              e.destroy(), delete this._playersById[t];
              var n = this.players.indexOf(e);
              n >= 0 && this.players.splice(n, 1);
            }),
            (t.prototype._getPlayer = function(t) {
              var e = this._playersById[t];
              if (!e) throw new Error('Unable to find the timeline player referenced by ' + t);
              return e;
            }),
            (t.prototype.listen = function(t, e, n, r) {
              var o = xg(e, '', '', '');
              return Eg(this._getPlayer(t), n, o, r), function() {};
            }),
            (t.prototype.command = function(t, e, n, r) {
              if ('register' != n)
                if ('create' != n) {
                  var o = this._getPlayer(t);
                  switch (n) {
                    case 'play':
                      o.play();
                      break;
                    case 'pause':
                      o.pause();
                      break;
                    case 'reset':
                      o.reset();
                      break;
                    case 'restart':
                      o.restart();
                      break;
                    case 'finish':
                      o.finish();
                      break;
                    case 'init':
                      o.init();
                      break;
                    case 'setPosition':
                      o.setPosition(parseFloat(r[0]));
                      break;
                    case 'destroy':
                      this.destroy(t);
                  }
                } else this.create(t, e, r[0] || {});
              else this.register(t, r[0]);
            }),
            t
          );
        })(),
        Bm = [],
        zm = {
          namespaceId: '',
          setForRemoval: !1,
          setForMove: !1,
          hasAnimation: !1,
          removedBeforeQueried: !1,
        },
        qm = {
          namespaceId: '',
          setForMove: !1,
          setForRemoval: !1,
          hasAnimation: !1,
          removedBeforeQueried: !0,
        },
        Gm = '__ng_removed',
        Wm = (function() {
          function t(t, e) {
            void 0 === e && (e = ''), (this.namespaceId = e);
            var n,
              r = t && t.hasOwnProperty('value');
            if (((this.value = null != (n = r ? t.value : t) ? n : null), r)) {
              var o = Wg(t);
              delete o.value, (this.options = o);
            } else this.options = {};
            this.options.params || (this.options.params = {});
          }
          return (
            Object.defineProperty(t.prototype, 'params', {
              get: function() {
                return this.options.params;
              },
              enumerable: !0,
              configurable: !0,
            }),
            (t.prototype.absorbOptions = function(t) {
              var e = t.params;
              if (e) {
                var n = this.options.params;
                Object.keys(e).forEach(function(t) {
                  null == n[t] && (n[t] = e[t]);
                });
              }
            }),
            t
          );
        })(),
        Qm = new Wm('void'),
        Km = (function() {
          function t(t, e, n) {
            (this.id = t),
              (this.hostElement = e),
              (this._engine = n),
              (this.players = []),
              (this._triggers = {}),
              (this._queue = []),
              (this._elementListeners = new Map()),
              (this._hostClassName = 'ng-tns-' + t),
              nv(e, this._hostClassName);
          }
          return (
            (t.prototype.listen = function(t, e, n, r) {
              var o,
                i = this;
              if (!this._triggers.hasOwnProperty(e))
                throw new Error(
                  'Unable to listen on the animation trigger event "' +
                    n +
                    '" because the animation trigger "' +
                    e +
                    '" doesn\'t exist!',
                );
              if (null == n || 0 == n.length)
                throw new Error(
                  'Unable to listen on the animation trigger "' +
                    e +
                    '" because the provided event is undefined!',
                );
              if ('start' != (o = n) && 'done' != o)
                throw new Error(
                  'The provided animation trigger event "' +
                    n +
                    '" for the animation trigger "' +
                    e +
                    '" is not supported!',
                );
              var s = Pg(this._elementListeners, t, []),
                a = { name: e, phase: n, callback: r };
              s.push(a);
              var u = Pg(this._engine.statesByElement, t, {});
              return (
                u.hasOwnProperty(e) || (nv(t, 'ng-trigger'), nv(t, 'ng-trigger-' + e), (u[e] = Qm)),
                function() {
                  i._engine.afterFlush(function() {
                    var t = s.indexOf(a);
                    t >= 0 && s.splice(t, 1), i._triggers[e] || delete u[e];
                  });
                }
              );
            }),
            (t.prototype.register = function(t, e) {
              return !this._triggers[t] && ((this._triggers[t] = e), !0);
            }),
            (t.prototype._getTrigger = function(t) {
              var e = this._triggers[t];
              if (!e)
                throw new Error(
                  'The provided animation trigger "' + t + '" has not been registered!',
                );
              return e;
            }),
            (t.prototype.trigger = function(t, e, n, r) {
              var o = this;
              void 0 === r && (r = !0);
              var i = this._getTrigger(e),
                s = new $m(this.id, e, t),
                a = this._engine.statesByElement.get(t);
              a ||
                (nv(t, 'ng-trigger'),
                nv(t, 'ng-trigger-' + e),
                this._engine.statesByElement.set(t, (a = {})));
              var u = a[e],
                l = new Wm(n, this.id);
              if (
                (!(n && n.hasOwnProperty('value')) && u && l.absorbOptions(u.options),
                (a[e] = l),
                u || (u = Qm),
                'void' === l.value || u.value !== l.value)
              ) {
                var c = Pg(this._engine.playersByElement, t, []);
                c.forEach(function(t) {
                  t.namespaceId == o.id && t.triggerName == e && t.queued && t.destroy();
                });
                var h = i.matchTransition(u.value, l.value, t, l.params),
                  p = !1;
                if (!h) {
                  if (!r) return;
                  (h = i.fallbackTransition), (p = !0);
                }
                return (
                  this._engine.totalQueuedPlayers++,
                  this._queue.push({
                    element: t,
                    triggerName: e,
                    transition: h,
                    fromState: u,
                    toState: l,
                    player: s,
                    isFallbackTransition: p,
                  }),
                  p ||
                    (nv(t, 'ng-animate-queued'),
                    s.onStart(function() {
                      rv(t, 'ng-animate-queued');
                    })),
                  s.onDone(function() {
                    var e = o.players.indexOf(s);
                    e >= 0 && o.players.splice(e, 1);
                    var n = o._engine.playersByElement.get(t);
                    if (n) {
                      var r = n.indexOf(s);
                      r >= 0 && n.splice(r, 1);
                    }
                  }),
                  this.players.push(s),
                  c.push(s),
                  s
                );
              }
              if (
                !(function(t, e) {
                  var n = Object.keys(t),
                    r = Object.keys(e);
                  if (n.length != r.length) return !1;
                  for (var o = 0; o < n.length; o++) {
                    var i = n[o];
                    if (!e.hasOwnProperty(i) || t[i] !== e[i]) return !1;
                  }
                  return !0;
                })(u.params, l.params)
              ) {
                var f = [],
                  d = i.matchStyles(u.value, u.params, f),
                  y = i.matchStyles(l.value, l.params, f);
                f.length
                  ? this._engine.reportError(f)
                  : this._engine.afterFlush(function() {
                      Jg(t, d), $g(t, y);
                    });
              }
            }),
            (t.prototype.deregister = function(t) {
              var e = this;
              delete this._triggers[t],
                this._engine.statesByElement.forEach(function(e, n) {
                  delete e[t];
                }),
                this._elementListeners.forEach(function(n, r) {
                  e._elementListeners.set(
                    r,
                    n.filter(function(e) {
                      return e.name != t;
                    }),
                  );
                });
            }),
            (t.prototype.clearElementCache = function(t) {
              this._engine.statesByElement.delete(t), this._elementListeners.delete(t);
              var e = this._engine.playersByElement.get(t);
              e &&
                (e.forEach(function(t) {
                  return t.destroy();
                }),
                this._engine.playersByElement.delete(t));
            }),
            (t.prototype._signalRemovalForInnerTriggers = function(t, e, n) {
              var r = this;
              void 0 === n && (n = !1),
                this._engine.driver.query(t, '.ng-trigger', !0).forEach(function(t) {
                  if (!t[Gm]) {
                    var n = r._engine.fetchNamespacesByElement(t);
                    n.size
                      ? n.forEach(function(n) {
                          return n.triggerLeaveAnimation(t, e, !1, !0);
                        })
                      : r.clearElementCache(t);
                  }
                });
            }),
            (t.prototype.triggerLeaveAnimation = function(t, e, n, r) {
              var o = this,
                i = this._engine.statesByElement.get(t);
              if (i) {
                var s = [];
                if (
                  (Object.keys(i).forEach(function(e) {
                    if (o._triggers[e]) {
                      var n = o.trigger(t, e, 'void', r);
                      n && s.push(n);
                    }
                  }),
                  s.length)
                )
                  return (
                    this._engine.markElementAsRemoved(this.id, t, !0, e),
                    n &&
                      Cg(s).onDone(function() {
                        return o._engine.processLeaveNode(t);
                      }),
                    !0
                  );
              }
              return !1;
            }),
            (t.prototype.prepareLeaveAnimationListeners = function(t) {
              var e = this,
                n = this._elementListeners.get(t);
              if (n) {
                var r = new Set();
                n.forEach(function(n) {
                  var o = n.name;
                  if (!r.has(o)) {
                    r.add(o);
                    var i = e._triggers[o].fallbackTransition,
                      s = e._engine.statesByElement.get(t)[o] || Qm,
                      a = new Wm('void'),
                      u = new $m(e.id, o, t);
                    e._engine.totalQueuedPlayers++,
                      e._queue.push({
                        element: t,
                        triggerName: o,
                        transition: i,
                        fromState: s,
                        toState: a,
                        player: u,
                        isFallbackTransition: !0,
                      });
                  }
                });
              }
            }),
            (t.prototype.removeNode = function(t, e) {
              var n = this,
                r = this._engine;
              if (
                (t.childElementCount && this._signalRemovalForInnerTriggers(t, e, !0),
                !this.triggerLeaveAnimation(t, e, !0))
              ) {
                var o = !1;
                if (r.totalAnimations) {
                  var i = r.players.length ? r.playersByQueriedElement.get(t) : [];
                  if (i && i.length) o = !0;
                  else
                    for (var s = t; (s = s.parentNode); )
                      if (r.statesByElement.get(s)) {
                        o = !0;
                        break;
                      }
                }
                this.prepareLeaveAnimationListeners(t),
                  o
                    ? r.markElementAsRemoved(this.id, t, !1, e)
                    : (r.afterFlush(function() {
                        return n.clearElementCache(t);
                      }),
                      r.destroyInnerAnimations(t),
                      r._onRemovalComplete(t, e));
              }
            }),
            (t.prototype.insertNode = function(t, e) {
              nv(t, this._hostClassName);
            }),
            (t.prototype.drainQueuedTransitions = function(t) {
              var e = this,
                n = [];
              return (
                this._queue.forEach(function(r) {
                  var o = r.player;
                  if (!o.destroyed) {
                    var i = r.element,
                      s = e._elementListeners.get(i);
                    s &&
                      s.forEach(function(e) {
                        if (e.name == r.triggerName) {
                          var n = xg(i, r.triggerName, r.fromState.value, r.toState.value);
                          (n._data = t), Eg(r.player, e.phase, n, e.callback);
                        }
                      }),
                      o.markedForDestroy
                        ? e._engine.afterFlush(function() {
                            o.destroy();
                          })
                        : n.push(r);
                  }
                }),
                (this._queue = []),
                n.sort(function(t, n) {
                  var r = t.transition.ast.depCount,
                    o = n.transition.ast.depCount;
                  return 0 == r || 0 == o
                    ? r - o
                    : e._engine.driver.containsElement(t.element, n.element)
                    ? 1
                    : -1;
                })
              );
            }),
            (t.prototype.destroy = function(t) {
              this.players.forEach(function(t) {
                return t.destroy();
              }),
                this._signalRemovalForInnerTriggers(this.hostElement, t);
            }),
            (t.prototype.elementContainsData = function(t) {
              var e = !1;
              return (
                this._elementListeners.has(t) && (e = !0),
                !!this._queue.find(function(e) {
                  return e.element === t;
                }) || e
              );
            }),
            t
          );
        })(),
        Zm = (function() {
          function t(t, e, n) {
            (this.bodyNode = t),
              (this.driver = e),
              (this._normalizer = n),
              (this.players = []),
              (this.newHostElements = new Map()),
              (this.playersByElement = new Map()),
              (this.playersByQueriedElement = new Map()),
              (this.statesByElement = new Map()),
              (this.disabledNodes = new Set()),
              (this.totalAnimations = 0),
              (this.totalQueuedPlayers = 0),
              (this._namespaceLookup = {}),
              (this._namespaceList = []),
              (this._flushFns = []),
              (this._whenQuietFns = []),
              (this.namespacesByHostElement = new Map()),
              (this.collectedEnterElements = []),
              (this.collectedLeaveElements = []),
              (this.onRemovalComplete = function(t, e) {});
          }
          return (
            (t.prototype._onRemovalComplete = function(t, e) {
              this.onRemovalComplete(t, e);
            }),
            Object.defineProperty(t.prototype, 'queuedPlayers', {
              get: function() {
                var t = [];
                return (
                  this._namespaceList.forEach(function(e) {
                    e.players.forEach(function(e) {
                      e.queued && t.push(e);
                    });
                  }),
                  t
                );
              },
              enumerable: !0,
              configurable: !0,
            }),
            (t.prototype.createNamespace = function(t, e) {
              var n = new Km(t, e, this);
              return (
                e.parentNode
                  ? this._balanceNamespaceList(n, e)
                  : (this.newHostElements.set(e, n), this.collectEnterElement(e)),
                (this._namespaceLookup[t] = n)
              );
            }),
            (t.prototype._balanceNamespaceList = function(t, e) {
              var n = this._namespaceList.length - 1;
              if (n >= 0) {
                for (var r = !1, o = n; o >= 0; o--)
                  if (this.driver.containsElement(this._namespaceList[o].hostElement, e)) {
                    this._namespaceList.splice(o + 1, 0, t), (r = !0);
                    break;
                  }
                r || this._namespaceList.splice(0, 0, t);
              } else this._namespaceList.push(t);
              return this.namespacesByHostElement.set(e, t), t;
            }),
            (t.prototype.register = function(t, e) {
              var n = this._namespaceLookup[t];
              return n || (n = this.createNamespace(t, e)), n;
            }),
            (t.prototype.registerTrigger = function(t, e, n) {
              var r = this._namespaceLookup[t];
              r && r.register(e, n) && this.totalAnimations++;
            }),
            (t.prototype.destroy = function(t, e) {
              var n = this;
              if (t) {
                var r = this._fetchNamespace(t);
                this.afterFlush(function() {
                  n.namespacesByHostElement.delete(r.hostElement), delete n._namespaceLookup[t];
                  var e = n._namespaceList.indexOf(r);
                  e >= 0 && n._namespaceList.splice(e, 1);
                }),
                  this.afterFlushAnimationsDone(function() {
                    return r.destroy(e);
                  });
              }
            }),
            (t.prototype._fetchNamespace = function(t) {
              return this._namespaceLookup[t];
            }),
            (t.prototype.fetchNamespacesByElement = function(t) {
              var e = new Set(),
                n = this.statesByElement.get(t);
              if (n)
                for (var r = Object.keys(n), o = 0; o < r.length; o++) {
                  var i = n[r[o]].namespaceId;
                  if (i) {
                    var s = this._fetchNamespace(i);
                    s && e.add(s);
                  }
                }
              return e;
            }),
            (t.prototype.trigger = function(t, e, n, r) {
              if (Jm(e)) {
                var o = this._fetchNamespace(t);
                if (o) return o.trigger(e, n, r), !0;
              }
              return !1;
            }),
            (t.prototype.insertNode = function(t, e, n, r) {
              if (Jm(e)) {
                var o = e[Gm];
                if (o && o.setForRemoval) {
                  (o.setForRemoval = !1), (o.setForMove = !0);
                  var i = this.collectedLeaveElements.indexOf(e);
                  i >= 0 && this.collectedLeaveElements.splice(i, 1);
                }
                if (t) {
                  var s = this._fetchNamespace(t);
                  s && s.insertNode(e, n);
                }
                r && this.collectEnterElement(e);
              }
            }),
            (t.prototype.collectEnterElement = function(t) {
              this.collectedEnterElements.push(t);
            }),
            (t.prototype.markElementAsDisabled = function(t, e) {
              e
                ? this.disabledNodes.has(t) ||
                  (this.disabledNodes.add(t), nv(t, 'ng-animate-disabled'))
                : this.disabledNodes.has(t) &&
                  (this.disabledNodes.delete(t), rv(t, 'ng-animate-disabled'));
            }),
            (t.prototype.removeNode = function(t, e, n, r) {
              if (Jm(e)) {
                var o = t ? this._fetchNamespace(t) : null;
                if ((o ? o.removeNode(e, r) : this.markElementAsRemoved(t, e, !1, r), n)) {
                  var i = this.namespacesByHostElement.get(e);
                  i && i.id !== t && i.removeNode(e, r);
                }
              } else this._onRemovalComplete(e, r);
            }),
            (t.prototype.markElementAsRemoved = function(t, e, n, r) {
              this.collectedLeaveElements.push(e),
                (e[Gm] = {
                  namespaceId: t,
                  setForRemoval: r,
                  hasAnimation: n,
                  removedBeforeQueried: !1,
                });
            }),
            (t.prototype.listen = function(t, e, n, r, o) {
              return Jm(e) ? this._fetchNamespace(t).listen(e, n, r, o) : function() {};
            }),
            (t.prototype._buildInstruction = function(t, e, n, r, o) {
              return t.transition.build(
                this.driver,
                t.element,
                t.fromState.value,
                t.toState.value,
                n,
                r,
                t.fromState.options,
                t.toState.options,
                e,
                o,
              );
            }),
            (t.prototype.destroyInnerAnimations = function(t) {
              var e = this,
                n = this.driver.query(t, '.ng-trigger', !0);
              n.forEach(function(t) {
                return e.destroyActiveAnimationsForElement(t);
              }),
                0 != this.playersByQueriedElement.size &&
                  (n = this.driver.query(t, '.ng-animating', !0)).forEach(function(t) {
                    return e.finishActiveQueriedAnimationOnElement(t);
                  });
            }),
            (t.prototype.destroyActiveAnimationsForElement = function(t) {
              var e = this.playersByElement.get(t);
              e &&
                e.forEach(function(t) {
                  t.queued ? (t.markedForDestroy = !0) : t.destroy();
                });
            }),
            (t.prototype.finishActiveQueriedAnimationOnElement = function(t) {
              var e = this.playersByQueriedElement.get(t);
              e &&
                e.forEach(function(t) {
                  return t.finish();
                });
            }),
            (t.prototype.whenRenderingDone = function() {
              var t = this;
              return new Promise(function(e) {
                if (t.players.length)
                  return Cg(t.players).onDone(function() {
                    return e();
                  });
                e();
              });
            }),
            (t.prototype.processLeaveNode = function(t) {
              var e = this,
                n = t[Gm];
              if (n && n.setForRemoval) {
                if (((t[Gm] = zm), n.namespaceId)) {
                  this.destroyInnerAnimations(t);
                  var r = this._fetchNamespace(n.namespaceId);
                  r && r.clearElementCache(t);
                }
                this._onRemovalComplete(t, n.setForRemoval);
              }
              this.driver.matchesElement(t, '.ng-animate-disabled') &&
                this.markElementAsDisabled(t, !1),
                this.driver.query(t, '.ng-animate-disabled', !0).forEach(function(t) {
                  e.markElementAsDisabled(t, !1);
                });
            }),
            (t.prototype.flush = function(t) {
              var e = this;
              void 0 === t && (t = -1);
              var n = [];
              if (
                (this.newHostElements.size &&
                  (this.newHostElements.forEach(function(t, n) {
                    return e._balanceNamespaceList(t, n);
                  }),
                  this.newHostElements.clear()),
                this.totalAnimations && this.collectedEnterElements.length)
              )
                for (var r = 0; r < this.collectedEnterElements.length; r++)
                  nv(this.collectedEnterElements[r], 'ng-star-inserted');
              if (
                this._namespaceList.length &&
                (this.totalQueuedPlayers || this.collectedLeaveElements.length)
              ) {
                var o = [];
                try {
                  n = this._flushAnimations(o, t);
                } finally {
                  for (r = 0; r < o.length; r++) o[r]();
                }
              } else
                for (r = 0; r < this.collectedLeaveElements.length; r++)
                  this.processLeaveNode(this.collectedLeaveElements[r]);
              if (
                ((this.totalQueuedPlayers = 0),
                (this.collectedEnterElements.length = 0),
                (this.collectedLeaveElements.length = 0),
                this._flushFns.forEach(function(t) {
                  return t();
                }),
                (this._flushFns = []),
                this._whenQuietFns.length)
              ) {
                var i = this._whenQuietFns;
                (this._whenQuietFns = []),
                  n.length
                    ? Cg(n).onDone(function() {
                        i.forEach(function(t) {
                          return t();
                        });
                      })
                    : i.forEach(function(t) {
                        return t();
                      });
              }
            }),
            (t.prototype.reportError = function(t) {
              throw new Error(
                'Unable to process animations due to the following failed trigger transitions\n ' +
                  t.join('\n'),
              );
            }),
            (t.prototype._flushAnimations = function(t, e) {
              var n = this,
                r = new wm(),
                o = [],
                i = new Map(),
                s = [],
                a = new Map(),
                u = new Map(),
                l = new Map(),
                c = new Set();
              this.disabledNodes.forEach(function(t) {
                c.add(t);
                for (var e = n.driver.query(t, '.ng-animate-queued', !0), r = 0; r < e.length; r++)
                  c.add(e[r]);
              });
              var h = this.bodyNode,
                p = Array.from(this.statesByElement.keys()),
                f = tv(p, this.collectedEnterElements),
                d = new Map(),
                y = 0;
              f.forEach(function(t, e) {
                var n = 'ng-enter' + y++;
                d.set(e, n),
                  t.forEach(function(t) {
                    return nv(t, n);
                  });
              });
              for (
                var g = [], m = new Set(), v = new Set(), _ = 0;
                _ < this.collectedLeaveElements.length;
                _++
              ) {
                (j = (F = this.collectedLeaveElements[_])[Gm]) &&
                  j.setForRemoval &&
                  (g.push(F),
                  m.add(F),
                  j.hasAnimation
                    ? this.driver.query(F, '.ng-star-inserted', !0).forEach(function(t) {
                        return m.add(t);
                      })
                    : v.add(F));
              }
              var b = new Map(),
                w = tv(p, Array.from(m));
              w.forEach(function(t, e) {
                var n = 'ng-leave' + y++;
                b.set(e, n),
                  t.forEach(function(t) {
                    return nv(t, n);
                  });
              }),
                t.push(function() {
                  f.forEach(function(t, e) {
                    var n = d.get(e);
                    t.forEach(function(t) {
                      return rv(t, n);
                    });
                  }),
                    w.forEach(function(t, e) {
                      var n = b.get(e);
                      t.forEach(function(t) {
                        return rv(t, n);
                      });
                    }),
                    g.forEach(function(t) {
                      n.processLeaveNode(t);
                    });
                });
              for (var C = [], S = [], E = this._namespaceList.length - 1; E >= 0; E--)
                this._namespaceList[E].drainQueuedTransitions(e).forEach(function(t) {
                  var e = t.player,
                    i = t.element;
                  if ((C.push(e), n.collectedEnterElements.length)) {
                    var c = i[Gm];
                    if (c && c.setForMove) return void e.destroy();
                  }
                  var p = !h || !n.driver.containsElement(h, i),
                    f = b.get(i),
                    y = d.get(i),
                    g = n._buildInstruction(t, r, y, f, p);
                  if (!g.errors || !g.errors.length)
                    return p
                      ? (e.onStart(function() {
                          return Jg(i, g.fromStyles);
                        }),
                        e.onDestroy(function() {
                          return $g(i, g.toStyles);
                        }),
                        void o.push(e))
                      : t.isFallbackTransition
                      ? (e.onStart(function() {
                          return Jg(i, g.fromStyles);
                        }),
                        e.onDestroy(function() {
                          return $g(i, g.toStyles);
                        }),
                        void o.push(e))
                      : (g.timelines.forEach(function(t) {
                          return (t.stretchStartingKeyframe = !0);
                        }),
                        r.append(i, g.timelines),
                        s.push({ instruction: g, player: e, element: i }),
                        g.queriedElements.forEach(function(t) {
                          return Pg(a, t, []).push(e);
                        }),
                        g.preStyleProps.forEach(function(t, e) {
                          var n = Object.keys(t);
                          if (n.length) {
                            var r = u.get(e);
                            r || u.set(e, (r = new Set())),
                              n.forEach(function(t) {
                                return r.add(t);
                              });
                          }
                        }),
                        void g.postStyleProps.forEach(function(t, e) {
                          var n = Object.keys(t),
                            r = l.get(e);
                          r || l.set(e, (r = new Set())),
                            n.forEach(function(t) {
                              return r.add(t);
                            });
                        }));
                  S.push(g);
                });
              if (S.length) {
                var T = [];
                S.forEach(function(t) {
                  T.push('@' + t.triggerName + ' has failed due to:\n'),
                    t.errors.forEach(function(t) {
                      return T.push('- ' + t + '\n');
                    });
                }),
                  C.forEach(function(t) {
                    return t.destroy();
                  }),
                  this.reportError(T);
              }
              var x = new Map(),
                P = new Map();
              s.forEach(function(t) {
                var e = t.element;
                r.has(e) &&
                  (P.set(e, e), n._beforeAnimationBuild(t.player.namespaceId, t.instruction, x));
              }),
                o.forEach(function(t) {
                  var e = t.element;
                  n._getPreviousPlayers(e, !1, t.namespaceId, t.triggerName, null).forEach(function(
                    t,
                  ) {
                    Pg(x, e, []).push(t), t.destroy();
                  });
                });
              var O = g.filter(function(t) {
                  return iv(t, u, l);
                }),
                k = new Map();
              Xm(k, this.driver, v, l, dg).forEach(function(t) {
                iv(t, u, l) && O.push(t);
              });
              var A = new Map();
              f.forEach(function(t, e) {
                Xm(A, n.driver, new Set(t), u, bg);
              }),
                O.forEach(function(t) {
                  var e = k.get(t),
                    n = A.get(t);
                  k.set(t, Object.assign({}, e, n));
                });
              var I = [],
                N = [],
                R = {};
              s.forEach(function(t) {
                var e = t.element,
                  s = t.player,
                  a = t.instruction;
                if (r.has(e)) {
                  if (c.has(e))
                    return (
                      s.onDestroy(function() {
                        return $g(e, a.toStyles);
                      }),
                      (s.disabled = !0),
                      s.overrideTotalTime(a.totalTime),
                      void o.push(s)
                    );
                  var u = R;
                  if (P.size > 1) {
                    for (var l = e, h = []; (l = l.parentNode); ) {
                      var p = P.get(l);
                      if (p) {
                        u = p;
                        break;
                      }
                      h.push(l);
                    }
                    h.forEach(function(t) {
                      return P.set(t, u);
                    });
                  }
                  var f = n._buildAnimation(s.namespaceId, a, x, i, A, k);
                  if ((s.setRealPlayer(f), u === R)) I.push(s);
                  else {
                    var d = n.playersByElement.get(u);
                    d && d.length && (s.parentPlayer = Cg(d)), o.push(s);
                  }
                } else
                  Jg(e, a.fromStyles),
                    s.onDestroy(function() {
                      return $g(e, a.toStyles);
                    }),
                    N.push(s),
                    c.has(e) && o.push(s);
              }),
                N.forEach(function(t) {
                  var e = i.get(t.element);
                  if (e && e.length) {
                    var n = Cg(e);
                    t.setRealPlayer(n);
                  }
                }),
                o.forEach(function(t) {
                  t.parentPlayer ? t.syncPlayerEvents(t.parentPlayer) : t.destroy();
                });
              for (var D = 0; D < g.length; D++) {
                var F,
                  j = (F = g[D])[Gm];
                if ((rv(F, 'ng-leave'), !j || !j.hasAnimation)) {
                  var M = [];
                  if (a.size) {
                    var V = a.get(F);
                    V && V.length && M.push.apply(M, V);
                    for (
                      var L = this.driver.query(F, '.ng-animating', !0), U = 0;
                      U < L.length;
                      U++
                    ) {
                      var H = a.get(L[U]);
                      H && H.length && M.push.apply(M, H);
                    }
                  }
                  var B = M.filter(function(t) {
                    return !t.destroyed;
                  });
                  B.length ? ov(this, F, B) : this.processLeaveNode(F);
                }
              }
              return (
                (g.length = 0),
                I.forEach(function(t) {
                  n.players.push(t),
                    t.onDone(function() {
                      t.destroy();
                      var e = n.players.indexOf(t);
                      n.players.splice(e, 1);
                    }),
                    t.play();
                }),
                I
              );
            }),
            (t.prototype.elementContainsData = function(t, e) {
              var n = !1,
                r = e[Gm];
              return (
                r && r.setForRemoval && (n = !0),
                this.playersByElement.has(e) && (n = !0),
                this.playersByQueriedElement.has(e) && (n = !0),
                this.statesByElement.has(e) && (n = !0),
                this._fetchNamespace(t).elementContainsData(e) || n
              );
            }),
            (t.prototype.afterFlush = function(t) {
              this._flushFns.push(t);
            }),
            (t.prototype.afterFlushAnimationsDone = function(t) {
              this._whenQuietFns.push(t);
            }),
            (t.prototype._getPreviousPlayers = function(t, e, n, r, o) {
              var i = [];
              if (e) {
                var s = this.playersByQueriedElement.get(t);
                s && (i = s);
              } else {
                var a = this.playersByElement.get(t);
                if (a) {
                  var u = !o || 'void' == o;
                  a.forEach(function(t) {
                    t.queued || ((u || t.triggerName == r) && i.push(t));
                  });
                }
              }
              return (
                (n || r) &&
                  (i = i.filter(function(t) {
                    return !((n && n != t.namespaceId) || (r && r != t.triggerName));
                  })),
                i
              );
            }),
            (t.prototype._beforeAnimationBuild = function(t, e, n) {
              for (
                var r = e.element,
                  o = e.isRemovalTransition ? void 0 : t,
                  i = e.isRemovalTransition ? void 0 : e.triggerName,
                  s = function(t) {
                    var s = t.element,
                      u = s !== r,
                      l = Pg(n, s, []);
                    a._getPreviousPlayers(s, u, o, i, e.toState).forEach(function(t) {
                      var e = t.getRealPlayer();
                      e.beforeDestroy && e.beforeDestroy(), t.destroy(), l.push(t);
                    });
                  },
                  a = this,
                  u = 0,
                  l = e.timelines;
                u < l.length;
                u++
              ) {
                s(l[u]);
              }
              Jg(r, e.fromStyles);
            }),
            (t.prototype._buildAnimation = function(t, e, n, r, o, i) {
              var s = this,
                a = e.triggerName,
                u = e.element,
                l = [],
                c = new Set(),
                h = new Set(),
                p = e.timelines.map(function(e) {
                  var p = e.element;
                  c.add(p);
                  var f = p[Gm];
                  if (f && f.removedBeforeQueried) return new vg(e.duration, e.delay);
                  var d,
                    y,
                    g = p !== u,
                    m = ((d = (n.get(p) || Bm).map(function(t) {
                      return t.getRealPlayer();
                    })),
                    (y = []),
                    (function t(e, n) {
                      for (var r = 0; r < e.length; r++) {
                        var o = e[r];
                        o instanceof _g ? t(o.players, n) : n.push(o);
                      }
                    })(d, y),
                    y).filter(function(t) {
                      return !!t.element && t.element === p;
                    }),
                    v = o.get(p),
                    _ = i.get(p),
                    b = Sg(0, s._normalizer, 0, e.keyframes, v, _),
                    w = s._buildPlayer(e, b, m);
                  if ((e.subTimeline && r && h.add(p), g)) {
                    var C = new $m(t, a, p);
                    C.setRealPlayer(w), l.push(C);
                  }
                  return w;
                });
              l.forEach(function(t) {
                Pg(s.playersByQueriedElement, t.element, []).push(t),
                  t.onDone(function() {
                    return (function(t, e, n) {
                      var r;
                      if (t instanceof Map) {
                        if ((r = t.get(e))) {
                          if (r.length) {
                            var o = r.indexOf(n);
                            r.splice(o, 1);
                          }
                          0 == r.length && t.delete(e);
                        }
                      } else if ((r = t[e])) {
                        if (r.length) {
                          o = r.indexOf(n);
                          r.splice(o, 1);
                        }
                        0 == r.length && delete t[e];
                      }
                      return r;
                    })(s.playersByQueriedElement, t.element, t);
                  });
              }),
                c.forEach(function(t) {
                  return nv(t, 'ng-animating');
                });
              var f = Cg(p);
              return (
                f.onDestroy(function() {
                  c.forEach(function(t) {
                    return rv(t, 'ng-animating');
                  }),
                    $g(u, e.toStyles);
                }),
                h.forEach(function(t) {
                  Pg(r, t, []).push(f);
                }),
                f
              );
            }),
            (t.prototype._buildPlayer = function(t, e, n) {
              return e.length > 0
                ? this.driver.animate(t.element, e, t.duration, t.delay, t.easing, n)
                : new vg(t.duration, t.delay);
            }),
            t
          );
        })(),
        $m = (function() {
          function t(t, e, n) {
            (this.namespaceId = t),
              (this.triggerName = e),
              (this.element = n),
              (this._player = new vg()),
              (this._containsRealPlayer = !1),
              (this._queuedCallbacks = {}),
              (this.destroyed = !1),
              (this.markedForDestroy = !1),
              (this.disabled = !1),
              (this.queued = !0),
              (this.totalTime = 0);
          }
          return (
            (t.prototype.setRealPlayer = function(t) {
              var e = this;
              this._containsRealPlayer ||
                ((this._player = t),
                Object.keys(this._queuedCallbacks).forEach(function(n) {
                  e._queuedCallbacks[n].forEach(function(e) {
                    return Eg(t, n, void 0, e);
                  });
                }),
                (this._queuedCallbacks = {}),
                (this._containsRealPlayer = !0),
                this.overrideTotalTime(t.totalTime),
                (this.queued = !1));
            }),
            (t.prototype.getRealPlayer = function() {
              return this._player;
            }),
            (t.prototype.overrideTotalTime = function(t) {
              this.totalTime = t;
            }),
            (t.prototype.syncPlayerEvents = function(t) {
              var e = this,
                n = this._player;
              n.triggerCallback &&
                t.onStart(function() {
                  return n.triggerCallback('start');
                }),
                t.onDone(function() {
                  return e.finish();
                }),
                t.onDestroy(function() {
                  return e.destroy();
                });
            }),
            (t.prototype._queueEvent = function(t, e) {
              Pg(this._queuedCallbacks, t, []).push(e);
            }),
            (t.prototype.onDone = function(t) {
              this.queued && this._queueEvent('done', t), this._player.onDone(t);
            }),
            (t.prototype.onStart = function(t) {
              this.queued && this._queueEvent('start', t), this._player.onStart(t);
            }),
            (t.prototype.onDestroy = function(t) {
              this.queued && this._queueEvent('destroy', t), this._player.onDestroy(t);
            }),
            (t.prototype.init = function() {
              this._player.init();
            }),
            (t.prototype.hasStarted = function() {
              return !this.queued && this._player.hasStarted();
            }),
            (t.prototype.play = function() {
              !this.queued && this._player.play();
            }),
            (t.prototype.pause = function() {
              !this.queued && this._player.pause();
            }),
            (t.prototype.restart = function() {
              !this.queued && this._player.restart();
            }),
            (t.prototype.finish = function() {
              this._player.finish();
            }),
            (t.prototype.destroy = function() {
              (this.destroyed = !0), this._player.destroy();
            }),
            (t.prototype.reset = function() {
              !this.queued && this._player.reset();
            }),
            (t.prototype.setPosition = function(t) {
              this.queued || this._player.setPosition(t);
            }),
            (t.prototype.getPosition = function() {
              return this.queued ? 0 : this._player.getPosition();
            }),
            (t.prototype.triggerCallback = function(t) {
              var e = this._player;
              e.triggerCallback && e.triggerCallback(t);
            }),
            t
          );
        })();
      function Jm(t) {
        return t && 1 === t.nodeType;
      }
      function Ym(t, e) {
        var n = t.style.display;
        return (t.style.display = null != e ? e : 'none'), n;
      }
      function Xm(t, e, n, r, o) {
        var i = [];
        n.forEach(function(t) {
          return i.push(Ym(t));
        });
        var s = [];
        r.forEach(function(n, r) {
          var i = {};
          n.forEach(function(t) {
            var n = (i[t] = e.computeStyle(r, t, o));
            (n && 0 != n.length) || ((r[Gm] = qm), s.push(r));
          }),
            t.set(r, i);
        });
        var a = 0;
        return (
          n.forEach(function(t) {
            return Ym(t, i[a++]);
          }),
          s
        );
      }
      function tv(t, e) {
        var n = new Map();
        if (
          (t.forEach(function(t) {
            return n.set(t, []);
          }),
          0 == e.length)
        )
          return n;
        var r = new Set(e),
          o = new Map();
        return (
          e.forEach(function(t) {
            var e = (function t(e) {
              if (!e) return 1;
              var i = o.get(e);
              if (i) return i;
              var s = e.parentNode;
              return (i = n.has(s) ? s : r.has(s) ? 1 : t(s)), o.set(e, i), i;
            })(t);
            1 !== e && n.get(e).push(t);
          }),
          n
        );
      }
      var ev = '$$classes';
      function nv(t, e) {
        if (t.classList) t.classList.add(e);
        else {
          var n = t[ev];
          n || (n = t[ev] = {}), (n[e] = !0);
        }
      }
      function rv(t, e) {
        if (t.classList) t.classList.remove(e);
        else {
          var n = t[ev];
          n && delete n[e];
        }
      }
      function ov(t, e, n) {
        Cg(n).onDone(function() {
          return t.processLeaveNode(e);
        });
      }
      function iv(t, e, n) {
        var r = n.get(t);
        if (!r) return !1;
        var o = e.get(t);
        return (
          o
            ? r.forEach(function(t) {
                return o.add(t);
              })
            : e.set(t, r),
          n.delete(t),
          !0
        );
      }
      var sv = (function() {
        function t(t, e, n) {
          var r = this;
          (this.bodyNode = t),
            (this._driver = e),
            (this._triggerCache = {}),
            (this.onRemovalComplete = function(t, e) {}),
            (this._transitionEngine = new Zm(t, e, n)),
            (this._timelineEngine = new Hm(t, e, n)),
            (this._transitionEngine.onRemovalComplete = function(t, e) {
              return r.onRemovalComplete(t, e);
            });
        }
        return (
          (t.prototype.registerTrigger = function(t, e, n, r, o) {
            var i = t + '-' + r,
              s = this._triggerCache[i];
            if (!s) {
              var a = [],
                u = dm(this._driver, o, a);
              if (a.length)
                throw new Error(
                  'The animation trigger "' +
                    r +
                    '" has failed to build due to the following errors:\n - ' +
                    a.join('\n - '),
                );
              (s = (function(t, e) {
                return new Vm(t, e);
              })(r, u)),
                (this._triggerCache[i] = s);
            }
            this._transitionEngine.registerTrigger(e, r, s);
          }),
          (t.prototype.register = function(t, e) {
            this._transitionEngine.register(t, e);
          }),
          (t.prototype.destroy = function(t, e) {
            this._transitionEngine.destroy(t, e);
          }),
          (t.prototype.onInsert = function(t, e, n, r) {
            this._transitionEngine.insertNode(t, e, n, r);
          }),
          (t.prototype.onRemove = function(t, e, n, r) {
            this._transitionEngine.removeNode(t, e, r || !1, n);
          }),
          (t.prototype.disableAnimations = function(t, e) {
            this._transitionEngine.markElementAsDisabled(t, e);
          }),
          (t.prototype.process = function(t, e, n, r) {
            if ('@' == n.charAt(0)) {
              var o = Og(n),
                i = o[0],
                s = o[1];
              this._timelineEngine.command(i, e, s, r);
            } else this._transitionEngine.trigger(t, e, n, r);
          }),
          (t.prototype.listen = function(t, e, n, r, o) {
            if ('@' == n.charAt(0)) {
              var i = Og(n),
                s = i[0],
                a = i[1];
              return this._timelineEngine.listen(s, e, a, o);
            }
            return this._transitionEngine.listen(t, e, n, r, o);
          }),
          (t.prototype.flush = function(t) {
            void 0 === t && (t = -1), this._transitionEngine.flush(t);
          }),
          Object.defineProperty(t.prototype, 'players', {
            get: function() {
              return this._transitionEngine.players.concat(this._timelineEngine.players);
            },
            enumerable: !0,
            configurable: !0,
          }),
          (t.prototype.whenRenderingDone = function() {
            return this._transitionEngine.whenRenderingDone();
          }),
          t
        );
      })();
      function av(t, e) {
        var n = null,
          r = null;
        return (
          Array.isArray(e) && e.length
            ? ((n = lv(e[0])), e.length > 1 && (r = lv(e[e.length - 1])))
            : e && (n = lv(e)),
          n || r ? new uv(t, n, r) : null
        );
      }
      var uv = (function() {
        var t = (function() {
          function t(e, n, r) {
            (this._element = e), (this._startStyles = n), (this._endStyles = r), (this._state = 0);
            var o = t.initialStylesByElement.get(e);
            o || t.initialStylesByElement.set(e, (o = {})), (this._initialStyles = o);
          }
          return (
            (t.prototype.start = function() {
              this._state < 1 &&
                (this._startStyles && $g(this._element, this._startStyles, this._initialStyles),
                (this._state = 1));
            }),
            (t.prototype.finish = function() {
              this.start(),
                this._state < 2 &&
                  ($g(this._element, this._initialStyles),
                  this._endStyles && ($g(this._element, this._endStyles), (this._endStyles = null)),
                  (this._state = 1));
            }),
            (t.prototype.destroy = function() {
              this.finish(),
                this._state < 3 &&
                  (t.initialStylesByElement.delete(this._element),
                  this._startStyles &&
                    (Jg(this._element, this._startStyles), (this._endStyles = null)),
                  this._endStyles && (Jg(this._element, this._endStyles), (this._endStyles = null)),
                  $g(this._element, this._initialStyles),
                  (this._state = 3));
            }),
            t
          );
        })();
        return (t.initialStylesByElement = new WeakMap()), t;
      })();
      function lv(t) {
        for (var e = null, n = Object.keys(t), r = 0; r < n.length; r++) {
          var o = n[r];
          cv(o) && ((e = e || {})[o] = t[o]);
        }
        return e;
      }
      function cv(t) {
        return 'display' === t || 'position' === t;
      }
      var hv = 'animation',
        pv = 'animationend',
        fv = (function() {
          function t(t, e, n, r, o, i, s) {
            var a = this;
            (this._element = t),
              (this._name = e),
              (this._duration = n),
              (this._delay = r),
              (this._easing = o),
              (this._fillMode = i),
              (this._onDoneFn = s),
              (this._finished = !1),
              (this._destroyed = !1),
              (this._startTime = 0),
              (this._position = 0),
              (this._eventFn = function(t) {
                return a._handleCallback(t);
              });
          }
          return (
            (t.prototype.apply = function() {
              var t, e, n;
              (t = this._element),
                (e =
                  this._duration +
                  'ms ' +
                  this._easing +
                  ' ' +
                  this._delay +
                  'ms 1 normal ' +
                  this._fillMode +
                  ' ' +
                  this._name),
                (n = _v(t, '').trim()).length &&
                  ((function(t, e) {
                    for (var n = 0; n < t.length; n++) t.charAt(n);
                  })(n),
                  (e = n + ', ' + e)),
                vv(t, '', e),
                mv(this._element, this._eventFn, !1),
                (this._startTime = Date.now());
            }),
            (t.prototype.pause = function() {
              dv(this._element, this._name, 'paused');
            }),
            (t.prototype.resume = function() {
              dv(this._element, this._name, 'running');
            }),
            (t.prototype.setPosition = function(t) {
              var e = yv(this._element, this._name);
              (this._position = t * this._duration),
                vv(this._element, 'Delay', '-' + this._position + 'ms', e);
            }),
            (t.prototype.getPosition = function() {
              return this._position;
            }),
            (t.prototype._handleCallback = function(t) {
              var e = t._ngTestManualTimestamp || Date.now(),
                n = 1e3 * parseFloat(t.elapsedTime.toFixed(3));
              t.animationName == this._name &&
                Math.max(e - this._startTime, 0) >= this._delay &&
                n >= this._duration &&
                this.finish();
            }),
            (t.prototype.finish = function() {
              this._finished ||
                ((this._finished = !0), this._onDoneFn(), mv(this._element, this._eventFn, !0));
            }),
            (t.prototype.destroy = function() {
              var t, e, n, r;
              this._destroyed ||
                ((this._destroyed = !0),
                this.finish(),
                (t = this._element),
                (e = this._name),
                (n = _v(t, '').split(',')),
                (r = gv(n, e)) >= 0 && (n.splice(r, 1), vv(t, '', n.join(','))));
            }),
            t
          );
        })();
      function dv(t, e, n) {
        vv(t, 'PlayState', n, yv(t, e));
      }
      function yv(t, e) {
        var n = _v(t, '');
        return n.indexOf(',') > 0 ? gv(n.split(','), e) : gv([n], e);
      }
      function gv(t, e) {
        for (var n = 0; n < t.length; n++) if (t[n].indexOf(e) >= 0) return n;
        return -1;
      }
      function mv(t, e, n) {
        n ? t.removeEventListener(pv, e) : t.addEventListener(pv, e);
      }
      function vv(t, e, n, r) {
        var o = hv + e;
        if (null != r) {
          var i = t.style[o];
          if (i.length) {
            var s = i.split(',');
            (s[r] = n), (n = s.join(','));
          }
        }
        t.style[o] = n;
      }
      function _v(t, e) {
        return t.style[hv + e];
      }
      var bv = 'linear',
        wv = (function() {
          function t(t, e, n, r, o, i, s, a) {
            (this.element = t),
              (this.keyframes = e),
              (this.animationName = n),
              (this._duration = r),
              (this._delay = o),
              (this._finalStyles = s),
              (this._specialStyles = a),
              (this._onDoneFns = []),
              (this._onStartFns = []),
              (this._onDestroyFns = []),
              (this._started = !1),
              (this.currentSnapshot = {}),
              (this._state = 0),
              (this.easing = i || bv),
              (this.totalTime = r + o),
              this._buildStyler();
          }
          return (
            (t.prototype.onStart = function(t) {
              this._onStartFns.push(t);
            }),
            (t.prototype.onDone = function(t) {
              this._onDoneFns.push(t);
            }),
            (t.prototype.onDestroy = function(t) {
              this._onDestroyFns.push(t);
            }),
            (t.prototype.destroy = function() {
              this.init(),
                this._state >= 4 ||
                  ((this._state = 4),
                  this._styler.destroy(),
                  this._flushStartFns(),
                  this._flushDoneFns(),
                  this._specialStyles && this._specialStyles.destroy(),
                  this._onDestroyFns.forEach(function(t) {
                    return t();
                  }),
                  (this._onDestroyFns = []));
            }),
            (t.prototype._flushDoneFns = function() {
              this._onDoneFns.forEach(function(t) {
                return t();
              }),
                (this._onDoneFns = []);
            }),
            (t.prototype._flushStartFns = function() {
              this._onStartFns.forEach(function(t) {
                return t();
              }),
                (this._onStartFns = []);
            }),
            (t.prototype.finish = function() {
              this.init(),
                this._state >= 3 ||
                  ((this._state = 3),
                  this._styler.finish(),
                  this._flushStartFns(),
                  this._specialStyles && this._specialStyles.finish(),
                  this._flushDoneFns());
            }),
            (t.prototype.setPosition = function(t) {
              this._styler.setPosition(t);
            }),
            (t.prototype.getPosition = function() {
              return this._styler.getPosition();
            }),
            (t.prototype.hasStarted = function() {
              return this._state >= 2;
            }),
            (t.prototype.init = function() {
              this._state >= 1 ||
                ((this._state = 1), this._styler.apply(), this._delay && this._styler.pause());
            }),
            (t.prototype.play = function() {
              this.init(),
                this.hasStarted() ||
                  (this._flushStartFns(),
                  (this._state = 2),
                  this._specialStyles && this._specialStyles.start()),
                this._styler.resume();
            }),
            (t.prototype.pause = function() {
              this.init(), this._styler.pause();
            }),
            (t.prototype.restart = function() {
              this.reset(), this.play();
            }),
            (t.prototype.reset = function() {
              this._styler.destroy(), this._buildStyler(), this._styler.apply();
            }),
            (t.prototype._buildStyler = function() {
              var t = this;
              this._styler = new fv(
                this.element,
                this.animationName,
                this._duration,
                this._delay,
                this.easing,
                'forwards',
                function() {
                  return t.finish();
                },
              );
            }),
            (t.prototype.triggerCallback = function(t) {
              var e = 'start' == t ? this._onStartFns : this._onDoneFns;
              e.forEach(function(t) {
                return t();
              }),
                (e.length = 0);
            }),
            (t.prototype.beforeDestroy = function() {
              var t = this;
              this.init();
              var e = {};
              if (this.hasStarted()) {
                var n = this._state >= 3;
                Object.keys(this._finalStyles).forEach(function(r) {
                  'offset' != r && (e[r] = n ? t._finalStyles[r] : um(t.element, r));
                });
              }
              this.currentSnapshot = e;
            }),
            t
          );
        })(),
        Cv = (function(t) {
          function e(e, n) {
            var r = this;
            return (
              ((r = t.call(this) || this).element = e),
              (r._startingStyles = {}),
              (r.__initialized = !1),
              (r._styles = Lg(n)),
              r
            );
          }
          return (
            __extends(e, t),
            (e.prototype.init = function() {
              var e = this;
              !this.__initialized &&
                this._startingStyles &&
                ((this.__initialized = !0),
                Object.keys(this._styles).forEach(function(t) {
                  e._startingStyles[t] = e.element.style[t];
                }),
                t.prototype.init.call(this));
            }),
            (e.prototype.play = function() {
              var e = this;
              this._startingStyles &&
                (this.init(),
                Object.keys(this._styles).forEach(function(t) {
                  return e.element.style.setProperty(t, e._styles[t]);
                }),
                t.prototype.play.call(this));
            }),
            (e.prototype.destroy = function() {
              var e = this;
              this._startingStyles &&
                (Object.keys(this._startingStyles).forEach(function(t) {
                  var n = e._startingStyles[t];
                  n ? e.element.style.setProperty(t, n) : e.element.style.removeProperty(t);
                }),
                (this._startingStyles = null),
                t.prototype.destroy.call(this));
            }),
            e
          );
        })(vg),
        Sv = (function() {
          function t() {
            (this._count = 0),
              (this._head = document.querySelector('head')),
              (this._warningIssued = !1);
          }
          return (
            (t.prototype.validateStyleProperty = function(t) {
              return Fg(t);
            }),
            (t.prototype.matchesElement = function(t, e) {
              return jg(t, e);
            }),
            (t.prototype.containsElement = function(t, e) {
              return Mg(t, e);
            }),
            (t.prototype.query = function(t, e, n) {
              return Vg(t, e, n);
            }),
            (t.prototype.computeStyle = function(t, e, n) {
              return window.getComputedStyle(t)[e];
            }),
            (t.prototype.buildKeyframeElement = function(t, e, n) {
              n = n.map(function(t) {
                return Lg(t);
              });
              var r = '@keyframes ' + e + ' {\n',
                o = '';
              n.forEach(function(t) {
                o = ' ';
                var e = parseFloat(t.offset);
                (r += '' + o + 100 * e + '% {\n'),
                  (o += ' '),
                  Object.keys(t).forEach(function(e) {
                    var n = t[e];
                    switch (e) {
                      case 'offset':
                        return;
                      case 'easing':
                        return void (n && (r += o + 'animation-timing-function: ' + n + ';\n'));
                      default:
                        return void (r += '' + o + e + ': ' + n + ';\n');
                    }
                  }),
                  (r += o + '}\n');
              }),
                (r += '}\n');
              var i = document.createElement('style');
              return (i.innerHTML = r), i;
            }),
            (t.prototype.animate = function(t, e, n, r, o, i, s) {
              void 0 === i && (i = []), s && this._notifyFaultyScrubber();
              var a = i.filter(function(t) {
                  return t instanceof wv;
                }),
                u = {};
              im(n, r) &&
                a.forEach(function(t) {
                  var e = t.currentSnapshot;
                  Object.keys(e).forEach(function(t) {
                    return (u[t] = e[t]);
                  });
                });
              var l = (function(t) {
                var e = {};
                return (
                  t &&
                    (Array.isArray(t) ? t : [t]).forEach(function(t) {
                      Object.keys(t).forEach(function(n) {
                        'offset' != n && 'easing' != n && (e[n] = t[n]);
                      });
                    }),
                  e
                );
              })((e = sm(t, e, u)));
              if (0 == n) return new Cv(t, l);
              var c = 'gen_css_kf_' + this._count++,
                h = this.buildKeyframeElement(t, c, e);
              document.querySelector('head').appendChild(h);
              var p = av(t, e),
                f = new wv(t, e, c, n, r, o, l, p);
              return (
                f.onDestroy(function() {
                  var t;
                  (t = h).parentNode.removeChild(t);
                }),
                f
              );
            }),
            (t.prototype._notifyFaultyScrubber = function() {
              this._warningIssued ||
                (console.warn(
                  '@angular/animations: please load the web-animations.js polyfill to allow programmatic access...\n',
                  '  visit http://bit.ly/IWukam to learn more about using the web-animation-js polyfill.',
                ),
                (this._warningIssued = !0));
            }),
            t
          );
        })(),
        Ev = (function() {
          function t(t, e, n, r) {
            (this.element = t),
              (this.keyframes = e),
              (this.options = n),
              (this._specialStyles = r),
              (this._onDoneFns = []),
              (this._onStartFns = []),
              (this._onDestroyFns = []),
              (this._initialized = !1),
              (this._finished = !1),
              (this._started = !1),
              (this._destroyed = !1),
              (this.time = 0),
              (this.parentPlayer = null),
              (this.currentSnapshot = {}),
              (this._duration = n.duration),
              (this._delay = n.delay || 0),
              (this.time = this._duration + this._delay);
          }
          return (
            (t.prototype._onFinish = function() {
              this._finished ||
                ((this._finished = !0),
                this._onDoneFns.forEach(function(t) {
                  return t();
                }),
                (this._onDoneFns = []));
            }),
            (t.prototype.init = function() {
              this._buildPlayer(), this._preparePlayerBeforeStart();
            }),
            (t.prototype._buildPlayer = function() {
              var t = this;
              if (!this._initialized) {
                this._initialized = !0;
                var e = this.keyframes;
                (this.domPlayer = this._triggerWebAnimation(this.element, e, this.options)),
                  (this._finalKeyframe = e.length ? e[e.length - 1] : {}),
                  this.domPlayer.addEventListener('finish', function() {
                    return t._onFinish();
                  });
              }
            }),
            (t.prototype._preparePlayerBeforeStart = function() {
              this._delay ? this._resetDomPlayerState() : this.domPlayer.pause();
            }),
            (t.prototype._triggerWebAnimation = function(t, e, n) {
              return t.animate(e, n);
            }),
            (t.prototype.onStart = function(t) {
              this._onStartFns.push(t);
            }),
            (t.prototype.onDone = function(t) {
              this._onDoneFns.push(t);
            }),
            (t.prototype.onDestroy = function(t) {
              this._onDestroyFns.push(t);
            }),
            (t.prototype.play = function() {
              this._buildPlayer(),
                this.hasStarted() ||
                  (this._onStartFns.forEach(function(t) {
                    return t();
                  }),
                  (this._onStartFns = []),
                  (this._started = !0),
                  this._specialStyles && this._specialStyles.start()),
                this.domPlayer.play();
            }),
            (t.prototype.pause = function() {
              this.init(), this.domPlayer.pause();
            }),
            (t.prototype.finish = function() {
              this.init(),
                this._specialStyles && this._specialStyles.finish(),
                this._onFinish(),
                this.domPlayer.finish();
            }),
            (t.prototype.reset = function() {
              this._resetDomPlayerState(),
                (this._destroyed = !1),
                (this._finished = !1),
                (this._started = !1);
            }),
            (t.prototype._resetDomPlayerState = function() {
              this.domPlayer && this.domPlayer.cancel();
            }),
            (t.prototype.restart = function() {
              this.reset(), this.play();
            }),
            (t.prototype.hasStarted = function() {
              return this._started;
            }),
            (t.prototype.destroy = function() {
              this._destroyed ||
                ((this._destroyed = !0),
                this._resetDomPlayerState(),
                this._onFinish(),
                this._specialStyles && this._specialStyles.destroy(),
                this._onDestroyFns.forEach(function(t) {
                  return t();
                }),
                (this._onDestroyFns = []));
            }),
            (t.prototype.setPosition = function(t) {
              this.domPlayer.currentTime = t * this.time;
            }),
            (t.prototype.getPosition = function() {
              return this.domPlayer.currentTime / this.time;
            }),
            Object.defineProperty(t.prototype, 'totalTime', {
              get: function() {
                return this._delay + this._duration;
              },
              enumerable: !0,
              configurable: !0,
            }),
            (t.prototype.beforeDestroy = function() {
              var t = this,
                e = {};
              this.hasStarted() &&
                Object.keys(this._finalKeyframe).forEach(function(n) {
                  'offset' != n && (e[n] = t._finished ? t._finalKeyframe[n] : um(t.element, n));
                }),
                (this.currentSnapshot = e);
            }),
            (t.prototype.triggerCallback = function(t) {
              var e = 'start' == t ? this._onStartFns : this._onDoneFns;
              e.forEach(function(t) {
                return t();
              }),
                (e.length = 0);
            }),
            t
          );
        })(),
        Tv = (function() {
          function t() {
            (this._isNativeImpl = /\{\s*\[native\s+code\]\s*\}/.test(xv().toString())),
              (this._cssKeyframesDriver = new Sv());
          }
          return (
            (t.prototype.validateStyleProperty = function(t) {
              return Fg(t);
            }),
            (t.prototype.matchesElement = function(t, e) {
              return jg(t, e);
            }),
            (t.prototype.containsElement = function(t, e) {
              return Mg(t, e);
            }),
            (t.prototype.query = function(t, e, n) {
              return Vg(t, e, n);
            }),
            (t.prototype.computeStyle = function(t, e, n) {
              return window.getComputedStyle(t)[e];
            }),
            (t.prototype.overrideWebAnimationsSupport = function(t) {
              this._isNativeImpl = t;
            }),
            (t.prototype.animate = function(t, e, n, r, o, i, s) {
              if ((void 0 === i && (i = []), !s && !this._isNativeImpl))
                return this._cssKeyframesDriver.animate(t, e, n, r, o, i);
              var a = { duration: n, delay: r, fill: 0 == r ? 'both' : 'forwards' };
              o && (a.easing = o);
              var u = {},
                l = i.filter(function(t) {
                  return t instanceof Ev;
                });
              im(n, r) &&
                l.forEach(function(t) {
                  var e = t.currentSnapshot;
                  Object.keys(e).forEach(function(t) {
                    return (u[t] = e[t]);
                  });
                });
              var c = av(
                t,
                (e = sm(
                  t,
                  (e = e.map(function(t) {
                    return Qg(t, !1);
                  })),
                  u,
                )),
              );
              return new Ev(t, e, a, c);
            }),
            t
          );
        })();
      function xv() {
        return (
          ('undefined' != typeof window &&
            void 0 !== window.document &&
            Element.prototype.animate) ||
          {}
        );
      }
      var Pv = (function(t) {
          function e(e, n) {
            var r = this;
            return (
              ((r = t.call(this) || this)._nextAnimationId = 0),
              (r._renderer = e.createRenderer(n.body, {
                id: '0',
                encapsulation: Bt.None,
                styles: [],
                data: { animation: [] },
              })),
              r
            );
          }
          return (
            __extends(e, t),
            (e.prototype.build = function(t) {
              var e = this._nextAnimationId.toString();
              this._nextAnimationId++;
              var n = Array.isArray(t) ? yg(t) : t;
              return Av(this._renderer, null, e, 'register', [n]), new Ov(e, this._renderer);
            }),
            e
          );
        })(pg),
        Ov = (function(t) {
          function e(e, n) {
            var r = this;
            return ((r = t.call(this) || this)._id = e), (r._renderer = n), r;
          }
          return (
            __extends(e, t),
            (e.prototype.create = function(t, e) {
              return new kv(this._id, t, e || {}, this._renderer);
            }),
            e
          );
        })(fg),
        kv = (function() {
          function t(t, e, n, r) {
            (this.id = t),
              (this.element = e),
              (this._renderer = r),
              (this.parentPlayer = null),
              (this._started = !1),
              (this.totalTime = 0),
              this._command('create', n);
          }
          return (
            (t.prototype._listen = function(t, e) {
              return this._renderer.listen(this.element, '@@' + this.id + ':' + t, e);
            }),
            (t.prototype._command = function(t) {
              for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
              return Av(this._renderer, this.element, this.id, t, e);
            }),
            (t.prototype.onDone = function(t) {
              this._listen('done', t);
            }),
            (t.prototype.onStart = function(t) {
              this._listen('start', t);
            }),
            (t.prototype.onDestroy = function(t) {
              this._listen('destroy', t);
            }),
            (t.prototype.init = function() {
              this._command('init');
            }),
            (t.prototype.hasStarted = function() {
              return this._started;
            }),
            (t.prototype.play = function() {
              this._command('play'), (this._started = !0);
            }),
            (t.prototype.pause = function() {
              this._command('pause');
            }),
            (t.prototype.restart = function() {
              this._command('restart');
            }),
            (t.prototype.finish = function() {
              this._command('finish');
            }),
            (t.prototype.destroy = function() {
              this._command('destroy');
            }),
            (t.prototype.reset = function() {
              this._command('reset');
            }),
            (t.prototype.setPosition = function(t) {
              this._command('setPosition', t);
            }),
            (t.prototype.getPosition = function() {
              return 0;
            }),
            t
          );
        })();
      function Av(t, e, n, r, o) {
        return t.setProperty(e, '@@' + n + ':' + r, o);
      }
      var Iv = (function() {
          function t(t, e, n) {
            (this.delegate = t),
              (this.engine = e),
              (this._zone = n),
              (this._currentId = 0),
              (this._microtaskId = 1),
              (this._animationCallbacksBuffer = []),
              (this._rendererCache = new Map()),
              (this._cdRecurDepth = 0),
              (this.promise = Promise.resolve(0)),
              (e.onRemovalComplete = function(t, e) {
                e && e.parentNode(t) && e.removeChild(t.parentNode, t);
              });
          }
          return (
            (t.prototype.createRenderer = function(t, e) {
              var n = this,
                r = this.delegate.createRenderer(t, e);
              if (!(t && e && e.data && e.data.animation)) {
                var o = this._rendererCache.get(r);
                return o || ((o = new Nv('', r, this.engine)), this._rendererCache.set(r, o)), o;
              }
              var i = e.id,
                s = e.id + '-' + this._currentId;
              return (
                this._currentId++,
                this.engine.register(s, t),
                e.data.animation.forEach(function(e) {
                  return n.engine.registerTrigger(i, s, t, e.name, e);
                }),
                new Rv(this, s, r, this.engine)
              );
            }),
            (t.prototype.begin = function() {
              this._cdRecurDepth++, this.delegate.begin && this.delegate.begin();
            }),
            (t.prototype._scheduleCountTask = function() {
              var t = this;
              this.promise.then(function() {
                t._microtaskId++;
              });
            }),
            (t.prototype.scheduleListenerCallback = function(t, e, n) {
              var r = this;
              t >= 0 && t < this._microtaskId
                ? this._zone.run(function() {
                    return e(n);
                  })
                : (0 == this._animationCallbacksBuffer.length &&
                    Promise.resolve(null).then(function() {
                      r._zone.run(function() {
                        r._animationCallbacksBuffer.forEach(function(t) {
                          (0, t[0])(t[1]);
                        }),
                          (r._animationCallbacksBuffer = []);
                      });
                    }),
                  this._animationCallbacksBuffer.push([e, n]));
            }),
            (t.prototype.end = function() {
              var t = this;
              this._cdRecurDepth--,
                0 == this._cdRecurDepth &&
                  this._zone.runOutsideAngular(function() {
                    t._scheduleCountTask(), t.engine.flush(t._microtaskId);
                  }),
                this.delegate.end && this.delegate.end();
            }),
            (t.prototype.whenRenderingDone = function() {
              return this.engine.whenRenderingDone();
            }),
            t
          );
        })(),
        Nv = (function() {
          function t(t, e, n) {
            (this.namespaceId = t),
              (this.delegate = e),
              (this.engine = n),
              (this.destroyNode = this.delegate.destroyNode
                ? function(t) {
                    return e.destroyNode(t);
                  }
                : null);
          }
          return (
            Object.defineProperty(t.prototype, 'data', {
              get: function() {
                return this.delegate.data;
              },
              enumerable: !0,
              configurable: !0,
            }),
            (t.prototype.destroy = function() {
              this.engine.destroy(this.namespaceId, this.delegate), this.delegate.destroy();
            }),
            (t.prototype.createElement = function(t, e) {
              return this.delegate.createElement(t, e);
            }),
            (t.prototype.createComment = function(t) {
              return this.delegate.createComment(t);
            }),
            (t.prototype.createText = function(t) {
              return this.delegate.createText(t);
            }),
            (t.prototype.appendChild = function(t, e) {
              this.delegate.appendChild(t, e), this.engine.onInsert(this.namespaceId, e, t, !1);
            }),
            (t.prototype.insertBefore = function(t, e, n) {
              this.delegate.insertBefore(t, e, n), this.engine.onInsert(this.namespaceId, e, t, !0);
            }),
            (t.prototype.removeChild = function(t, e, n) {
              this.engine.onRemove(this.namespaceId, e, this.delegate, n);
            }),
            (t.prototype.selectRootElement = function(t, e) {
              return this.delegate.selectRootElement(t, e);
            }),
            (t.prototype.parentNode = function(t) {
              return this.delegate.parentNode(t);
            }),
            (t.prototype.nextSibling = function(t) {
              return this.delegate.nextSibling(t);
            }),
            (t.prototype.setAttribute = function(t, e, n, r) {
              this.delegate.setAttribute(t, e, n, r);
            }),
            (t.prototype.removeAttribute = function(t, e, n) {
              this.delegate.removeAttribute(t, e, n);
            }),
            (t.prototype.addClass = function(t, e) {
              this.delegate.addClass(t, e);
            }),
            (t.prototype.removeClass = function(t, e) {
              this.delegate.removeClass(t, e);
            }),
            (t.prototype.setStyle = function(t, e, n, r) {
              this.delegate.setStyle(t, e, n, r);
            }),
            (t.prototype.removeStyle = function(t, e, n) {
              this.delegate.removeStyle(t, e, n);
            }),
            (t.prototype.setProperty = function(t, e, n) {
              '@' == e.charAt(0) && '@.disabled' == e
                ? this.disableAnimations(t, !!n)
                : this.delegate.setProperty(t, e, n);
            }),
            (t.prototype.setValue = function(t, e) {
              this.delegate.setValue(t, e);
            }),
            (t.prototype.listen = function(t, e, n) {
              return this.delegate.listen(t, e, n);
            }),
            (t.prototype.disableAnimations = function(t, e) {
              this.engine.disableAnimations(t, e);
            }),
            t
          );
        })(),
        Rv = (function(t) {
          function e(e, n, r, o) {
            var i = this;
            return ((i = t.call(this, n, r, o) || this).factory = e), (i.namespaceId = n), i;
          }
          return (
            __extends(e, t),
            (e.prototype.setProperty = function(t, e, n) {
              '@' == e.charAt(0)
                ? '.' == e.charAt(1) && '@.disabled' == e
                  ? this.disableAnimations(t, (n = void 0 === n || !!n))
                  : this.engine.process(this.namespaceId, t, e.substr(1), n)
                : this.delegate.setProperty(t, e, n);
            }),
            (e.prototype.listen = function(t, e, n) {
              var r,
                o,
                i,
                s = this;
              if ('@' == e.charAt(0)) {
                var a = (function(t) {
                    switch (t) {
                      case 'body':
                        return document.body;
                      case 'document':
                        return document;
                      case 'window':
                        return window;
                      default:
                        return t;
                    }
                  })(t),
                  u = e.substr(1),
                  l = '';
                return (
                  '@' != u.charAt(0) &&
                    ((i = (o = u).indexOf('.')),
                    (u = (r = [o.substring(0, i), o.substr(i + 1)])[0]),
                    (l = r[1])),
                  this.engine.listen(this.namespaceId, a, u, l, function(t) {
                    s.factory.scheduleListenerCallback(t._data || -1, n, t);
                  })
                );
              }
              return this.delegate.listen(t, e, n);
            }),
            e
          );
        })(Nv),
        Dv = (function(t) {
          function e(e, n, r) {
            return t.call(this, e.body, n, r) || this;
          }
          return __extends(e, t), e;
        })(sv);
      function Fv() {
        return 'function' == typeof xv() ? new Tv() : new Sv();
      }
      function jv() {
        return new Nm();
      }
      function Mv(t, e, n) {
        return new Iv(t, e, n);
      }
      var Vv = new Tt('AnimationModuleType'),
        Lv = function() {},
        Uv = (function() {
          function t(t) {
            this.userService = t;
          }
          return (
            (t.prototype.intercept = function(t, e) {
              var n,
                r = this.userService.getToken(),
                o = this.userService.getUserName();
              return (
                (n = t.clone(
                  r && o
                    ? { headers: t.headers.set('Authorization', 'Bearer ' + r).set('Name', '' + o) }
                    : {},
                )),
                e.handle(n)
              );
            }),
            t
          );
        })(),
        Hv = function() {},
        Bv = new ha(rc, [oc], function(t) {
          return (function(t) {
            for (var e = {}, n = [], r = !1, o = 0; o < t.length; o++) {
              var i = t[o];
              i.token === ke && !0 === i.value && (r = !0),
                1073741824 & i.flags && n.push(i.token),
                (i.index = o),
                (e[Wn(i.token)] = i);
            }
            return { factory: null, providersByKey: e, providers: t, modules: n, isRoot: r };
          })([
            Pr(512, en, nn, [[8, [Kf, _d, Cd, gy, By, tg, hg]], [3, en], Vt]),
            Pr(5120, Ho, Li, [[3, Ho]]),
            Pr(4608, xa, Pa, [Ho, [2, Ta]]),
            Pr(5120, Co, Ui, [ii]),
            Pr(5120, Do, Fo, []),
            Pr(5120, En, Mi, []),
            Pr(5120, Tn, Vi, []),
            Pr(4608, Gu, Wu, [qa]),
            Pr(6144, Ce, null, [Gu]),
            Pr(4608, Vu, Uu, []),
            Pr(
              5120,
              hu,
              function(t, e, n, r, o, i, s, a) {
                return [new ju(t, e, n), new qu(r), new Hu(o, i, s, a)];
              },
              [qa, ii, Vo, qa, qa, Vu, Uo, [2, Lu]],
            ),
            Pr(4608, pu, pu, [hu, ii]),
            Pr(135680, yu, yu, [qa]),
            Pr(4608, Cu, Cu, [pu, yu, Do]),
            Pr(5120, Hg, Fv, []),
            Pr(5120, Im, jv, []),
            Pr(4608, sv, Dv, [qa, Hg, Im]),
            Pr(5120, ln, Mv, [Cu, sv, ii]),
            Pr(6144, du, null, [yu]),
            Pr(4608, fi, fi, [ii]),
            Pr(4608, ry, oy, [qa, Vo, ey]),
            Pr(4608, iy, iy, [ry, ny]),
            Pr(
              5120,
              Zd,
              function(t, e) {
                return [t, new Uv(e)];
              },
              [iy, hy],
            ),
            Pr(4608, Xd, Xd, []),
            Pr(6144, Yd, null, [Xd]),
            Pr(4608, ty, ty, [Yd]),
            Pr(6144, Ad, null, [ty]),
            Pr(4608, kd, sy, [Ad, Ie]),
            Pr(4608, Qd, Qd, [kd]),
            Pr(4608, tc, tc, []),
            Pr(4608, wl, wl, []),
            Pr(5120, sp, Vf, [gf]),
            Pr(4608, Tf, Tf, []),
            Pr(6144, Sf, null, [Tf]),
            Pr(135680, xf, xf, [gf, Ti, $o, Ie, Sf]),
            Pr(4608, Ef, Ef, []),
            Pr(5120, Pf, Rf, [gf, Wa, Of]),
            Pr(5120, Bf, Hf, [Lf]),
            Pr(
              5120,
              Lo,
              function(t, e) {
                return [t, e];
              },
              [Bf, Bf],
            ),
            Pr(4608, pg, Pv, [ln, qa]),
            Pr(1073742336, za, za, []),
            Pr(1024, $t, tl, []),
            Pr(
              1024,
              mi,
              function() {
                return [If(), If()];
              },
              [],
            ),
            Pr(512, Lf, Lf, [Ie]),
            Pr(
              1024,
              No,
              function(t, e, n) {
                return [
                  ((r = t),
                  uu('probe', cu),
                  uu(
                    'coreTokens',
                    Object.assign(
                      {},
                      lu,
                      (r || []).reduce(function(t, e) {
                        return (t[e.name] = e.token), t;
                      }, {}),
                    ),
                  ),
                  function() {
                    return cu;
                  }),
                  Uf(e),
                  Uf(n),
                ];
                var r;
              },
              [[2, mi], Lf, Lf],
            ),
            Pr(512, Ro, Ro, [[2, No]]),
            Pr(131584, Si, Si, [ii, Uo, Ie, $t, en, Ro]),
            Pr(1073742336, Hi, Hi, [Si]),
            Pr(1073742336, el, el, [[3, el]]),
            Pr(1073742336, ay, ay, []),
            Pr(1073742336, uy, uy, []),
            Pr(1073742336, Xl, Xl, []),
            Pr(1073742336, ec, ec, []),
            Pr(1024, kf, Ff, [[3, gf]]),
            Pr(512, Vh, Lh, []),
            Pr(512, bf, bf, []),
            Pr(256, Of, {}, []),
            Pr(1024, va, Df, [ga, [2, _a], Of]),
            Pr(512, ba, ba, [va, ga]),
            Pr(512, $o, $o, []),
            Pr(512, Ti, Oi, [$o, [2, xi]]),
            Pr(
              1024,
              lf,
              function() {
                return [
                  [],
                  [
                    { path: 'option', component: da },
                    { path: 'leaderboard', component: ya },
                    { path: 'game', component: fa },
                    { path: 'login', component: nc },
                    { path: '**', redirectTo: '/game', pathMatch: 'full' },
                  ],
                ];
              },
              [],
            ),
            Pr(1024, gf, Mf, [Si, Vh, bf, ba, Ie, Ti, $o, lf, Of, [2, hf], [2, af]]),
            Pr(1073742336, Nf, Nf, [
              [2, kf],
              [2, gf],
            ]),
            Pr(1073742336, Hv, Hv, []),
            Pr(1073742336, Lv, Lv, []),
            Pr(1073742336, ld, ld, []),
            Pr(1073742336, Zf, Zf, []),
            Pr(1073742336, rc, rc, []),
            Pr(256, ke, !0, []),
            Pr(256, ey, 'XSRF-TOKEN', []),
            Pr(256, ny, 'X-XSRF-TOKEN', []),
            Pr(256, Vv, 'BrowserAnimations', []),
            Pr(
              256,
              Yf,
              {
                default: ud,
                config: {
                  timeOut: 5e3,
                  positionClass: 'toast-bottom-right',
                  preventDuplicates: !0,
                },
              },
              [],
            ),
          ]);
        });
      pa.production &&
        (function() {
          if (Yt) throw new Error('Cannot enable prod mode after platform setup.');
          Jt = !1;
        })(),
        Xu()
          .bootstrapModuleFactory(Bv)
          .catch(function(t) {
            return console.error(t);
          });
    },
    zn8P: function(t, e) {
      function n(t) {
        return Promise.resolve().then(function() {
          var e = new Error("Cannot find module '" + t + "'");
          throw ((e.code = 'MODULE_NOT_FOUND'), e);
        });
      }
      (n.keys = function() {
        return [];
      }),
        (n.resolve = n),
        (t.exports = n),
        (n.id = 'zn8P');
    },
  },
  [[0, 0]],
]);
