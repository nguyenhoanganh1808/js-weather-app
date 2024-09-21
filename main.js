(() => {
  'use strict';
  var t = {
      208: (t, e, n) => {
        n.d(e, { A: () => f });
        var r = n(601),
          a = n.n(r),
          o = n(314),
          i = n.n(o),
          s = n(417),
          c = n.n(s),
          u = new URL(n(374), n.b),
          d = new URL(n(444), n.b),
          l = i()(a()),
          h = c()(u),
          m = c()(d);
        l.push([
          t.id,
          `@font-face {\n  font-family: 'abeezeeregular';\n  src:\n    url(${h}) format('woff2'),\n    url(${m}) format('woff');\n  font-weight: normal;\n  font-style: normal;\n}\n\n/*\n  Josh's Custom CSS Reset\n  https://www.joshwcomeau.com/css/custom-css-reset/\n*/\n\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\n* {\n  margin: 0;\n}\n\nbody {\n  -webkit-font-smoothing: antialiased;\n  font-family: 'abeezeeregular';\n  font-size: 18px;\n}\n\nimg,\npicture,\nvideo,\ncanvas,\nsvg {\n  display: block;\n  max-width: 100%;\n}\n\ninput,\nbutton,\ntextarea,\nselect {\n  font: inherit;\n}\n\np,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  overflow-wrap: break-word;\n}\n\n#root,\n#__next {\n  isolation: isolate;\n}\n\nbody {\n  height: 100vh;\n\n  display: flex;\n  flex-direction: column;\n  color: white;\n  background-color: tomato;\n}\n\nheader {\n  flex-basis: 50px;\n}\n\nmain {\n  flex: 5;\n}\n\nbutton img {\n  height: 2rem;\n}\n\nmain {\n  display: grid;\n  grid-template-rows: repeat(4, 1fr);\n}\n\nform {\n  display: flex;\n}\n\ninput {\n  height: 100%;\n  width: 400px;\n}\n\nbutton[type='submit'],\n.toggle button {\n  background: none;\n  border: none;\n  color: white;\n}\n\nheader {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.toggle {\n  display: flex;\n  height: 1.5rem;\n}\n\n.filter-white {\n  filter: invert(94%) sepia(100%) saturate(0%) hue-rotate(87deg)\n    brightness(107%) contrast(102%);\n}\n\n.location {\n  margin-top: 12px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 24px;\n}\n\n.currentCondition {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n\n  /* margin-bottom: 100px; */\n}\n\n.currentCondition > div > img {\n  width: 3rem;\n}\n\n.weather-des > div > img {\n  width: 1.5rem;\n}\n\nmain {\n  padding: 0px 20%;\n}\n\n.currentCondition h2 {\n  font-size: 3rem;\n}\n\n.currentCondition > div:first-child {\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n\n  margin-bottom: 24px;\n}\n\n.weather-des > div {\n  display: flex;\n  gap: 24px;\n}\n\n.sun {\n  display: flex;\n  justify-content: center;\n  gap: 24px;\n}\n\n.sun > div {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n\nimg {\n  width: 2rem;\n}\n\n.weather-grid {\n  display: grid;\n  grid-template-columns: repeat(5, 1fr);\n}\n\n.weather-grid-card {\n  /* text-align: center; */\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 24px;\n}\n\n.nextFiveHours hr,\n.nextFiveDays hr {\n  outline: none;\n  margin: 8px 0px;\n}\n\n.buttonSelected {\n  text-decoration: underline;\n}\n`,
          '',
        ]);
        const f = l;
      },
      314: (t) => {
        t.exports = function (t) {
          var e = [];
          return (
            (e.toString = function () {
              return this.map(function (e) {
                var n = '',
                  r = void 0 !== e[5];
                return (
                  e[4] && (n += '@supports ('.concat(e[4], ') {')),
                  e[2] && (n += '@media '.concat(e[2], ' {')),
                  r &&
                    (n += '@layer'.concat(
                      e[5].length > 0 ? ' '.concat(e[5]) : '',
                      ' {',
                    )),
                  (n += t(e)),
                  r && (n += '}'),
                  e[2] && (n += '}'),
                  e[4] && (n += '}'),
                  n
                );
              }).join('');
            }),
            (e.i = function (t, n, r, a, o) {
              'string' == typeof t && (t = [[null, t, void 0]]);
              var i = {};
              if (r)
                for (var s = 0; s < this.length; s++) {
                  var c = this[s][0];
                  null != c && (i[c] = !0);
                }
              for (var u = 0; u < t.length; u++) {
                var d = [].concat(t[u]);
                (r && i[d[0]]) ||
                  (void 0 !== o &&
                    (void 0 === d[5] ||
                      (d[1] = '@layer'
                        .concat(d[5].length > 0 ? ' '.concat(d[5]) : '', ' {')
                        .concat(d[1], '}')),
                    (d[5] = o)),
                  n &&
                    (d[2]
                      ? ((d[1] = '@media '
                          .concat(d[2], ' {')
                          .concat(d[1], '}')),
                        (d[2] = n))
                      : (d[2] = n)),
                  a &&
                    (d[4]
                      ? ((d[1] = '@supports ('
                          .concat(d[4], ') {')
                          .concat(d[1], '}')),
                        (d[4] = a))
                      : (d[4] = ''.concat(a))),
                  e.push(d));
              }
            }),
            e
          );
        };
      },
      417: (t) => {
        t.exports = function (t, e) {
          return (
            e || (e = {}),
            t
              ? ((t = String(t.__esModule ? t.default : t)),
                /^['"].*['"]$/.test(t) && (t = t.slice(1, -1)),
                e.hash && (t += e.hash),
                /["'() \t\n]|(%20)/.test(t) || e.needQuotes
                  ? '"'.concat(
                      t.replace(/"/g, '\\"').replace(/\n/g, '\\n'),
                      '"',
                    )
                  : t)
              : t
          );
        };
      },
      601: (t) => {
        t.exports = function (t) {
          return t[1];
        };
      },
      72: (t) => {
        var e = [];
        function n(t) {
          for (var n = -1, r = 0; r < e.length; r++)
            if (e[r].identifier === t) {
              n = r;
              break;
            }
          return n;
        }
        function r(t, r) {
          for (var o = {}, i = [], s = 0; s < t.length; s++) {
            var c = t[s],
              u = r.base ? c[0] + r.base : c[0],
              d = o[u] || 0,
              l = ''.concat(u, ' ').concat(d);
            o[u] = d + 1;
            var h = n(l),
              m = {
                css: c[1],
                media: c[2],
                sourceMap: c[3],
                supports: c[4],
                layer: c[5],
              };
            if (-1 !== h) e[h].references++, e[h].updater(m);
            else {
              var f = a(m, r);
              (r.byIndex = s),
                e.splice(s, 0, { identifier: l, updater: f, references: 1 });
            }
            i.push(l);
          }
          return i;
        }
        function a(t, e) {
          var n = e.domAPI(e);
          return (
            n.update(t),
            function (e) {
              if (e) {
                if (
                  e.css === t.css &&
                  e.media === t.media &&
                  e.sourceMap === t.sourceMap &&
                  e.supports === t.supports &&
                  e.layer === t.layer
                )
                  return;
                n.update((t = e));
              } else n.remove();
            }
          );
        }
        t.exports = function (t, a) {
          var o = r((t = t || []), (a = a || {}));
          return function (t) {
            t = t || [];
            for (var i = 0; i < o.length; i++) {
              var s = n(o[i]);
              e[s].references--;
            }
            for (var c = r(t, a), u = 0; u < o.length; u++) {
              var d = n(o[u]);
              0 === e[d].references && (e[d].updater(), e.splice(d, 1));
            }
            o = c;
          };
        };
      },
      659: (t) => {
        var e = {};
        t.exports = function (t, n) {
          var r = (function (t) {
            if (void 0 === e[t]) {
              var n = document.querySelector(t);
              if (
                window.HTMLIFrameElement &&
                n instanceof window.HTMLIFrameElement
              )
                try {
                  n = n.contentDocument.head;
                } catch (t) {
                  n = null;
                }
              e[t] = n;
            }
            return e[t];
          })(t);
          if (!r)
            throw new Error(
              "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.",
            );
          r.appendChild(n);
        };
      },
      540: (t) => {
        t.exports = function (t) {
          var e = document.createElement('style');
          return t.setAttributes(e, t.attributes), t.insert(e, t.options), e;
        };
      },
      56: (t, e, n) => {
        t.exports = function (t) {
          var e = n.nc;
          e && t.setAttribute('nonce', e);
        };
      },
      825: (t) => {
        t.exports = function (t) {
          if ('undefined' == typeof document)
            return { update: function () {}, remove: function () {} };
          var e = t.insertStyleElement(t);
          return {
            update: function (n) {
              !(function (t, e, n) {
                var r = '';
                n.supports && (r += '@supports ('.concat(n.supports, ') {')),
                  n.media && (r += '@media '.concat(n.media, ' {'));
                var a = void 0 !== n.layer;
                a &&
                  (r += '@layer'.concat(
                    n.layer.length > 0 ? ' '.concat(n.layer) : '',
                    ' {',
                  )),
                  (r += n.css),
                  a && (r += '}'),
                  n.media && (r += '}'),
                  n.supports && (r += '}');
                var o = n.sourceMap;
                o &&
                  'undefined' != typeof btoa &&
                  (r +=
                    '\n/*# sourceMappingURL=data:application/json;base64,'.concat(
                      btoa(unescape(encodeURIComponent(JSON.stringify(o)))),
                      ' */',
                    )),
                  e.styleTagTransform(r, t, e.options);
              })(e, t, n);
            },
            remove: function () {
              !(function (t) {
                if (null === t.parentNode) return !1;
                t.parentNode.removeChild(t);
              })(e);
            },
          };
        };
      },
      113: (t) => {
        t.exports = function (t, e) {
          if (e.styleSheet) e.styleSheet.cssText = t;
          else {
            for (; e.firstChild; ) e.removeChild(e.firstChild);
            e.appendChild(document.createTextNode(t));
          }
        };
      },
      444: (t, e, n) => {
        t.exports = n.p + '5f343c234cd67b118365.woff';
      },
      374: (t, e, n) => {
        t.exports = n.p + '4c1faeb56ef9df3542e1.woff2';
      },
    },
    e = {};
  function n(r) {
    var a = e[r];
    if (void 0 !== a) return a.exports;
    var o = (e[r] = { id: r, exports: {} });
    return t[r](o, o.exports, n), o.exports;
  }
  (n.m = t),
    (n.n = (t) => {
      var e = t && t.__esModule ? () => t.default : () => t;
      return n.d(e, { a: e }), e;
    }),
    (n.d = (t, e) => {
      for (var r in e)
        n.o(e, r) &&
          !n.o(t, r) &&
          Object.defineProperty(t, r, { enumerable: !0, get: e[r] });
    }),
    (n.g = (function () {
      if ('object' == typeof globalThis) return globalThis;
      try {
        return this || new Function('return this')();
      } catch (t) {
        if ('object' == typeof window) return window;
      }
    })()),
    (n.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e)),
    (() => {
      var t;
      n.g.importScripts && (t = n.g.location + '');
      var e = n.g.document;
      if (
        !t &&
        e &&
        (e.currentScript &&
          'SCRIPT' === e.currentScript.tagName.toUpperCase() &&
          (t = e.currentScript.src),
        !t)
      ) {
        var r = e.getElementsByTagName('script');
        if (r.length)
          for (var a = r.length - 1; a > -1 && (!t || !/^http(s?):/.test(t)); )
            t = r[a--].src;
      }
      if (!t)
        throw new Error(
          'Automatic publicPath is not supported in this browser',
        );
      (t = t
        .replace(/#.*$/, '')
        .replace(/\?.*$/, '')
        .replace(/\/[^\/]+$/, '/')),
        (n.p = t);
    })(),
    (n.b = document.baseURI || self.location.href),
    (n.nc = void 0);
  const r = {
    lessThanXSeconds: {
      one: 'less than a second',
      other: 'less than {{count}} seconds',
    },
    xSeconds: { one: '1 second', other: '{{count}} seconds' },
    halfAMinute: 'half a minute',
    lessThanXMinutes: {
      one: 'less than a minute',
      other: 'less than {{count}} minutes',
    },
    xMinutes: { one: '1 minute', other: '{{count}} minutes' },
    aboutXHours: { one: 'about 1 hour', other: 'about {{count}} hours' },
    xHours: { one: '1 hour', other: '{{count}} hours' },
    xDays: { one: '1 day', other: '{{count}} days' },
    aboutXWeeks: { one: 'about 1 week', other: 'about {{count}} weeks' },
    xWeeks: { one: '1 week', other: '{{count}} weeks' },
    aboutXMonths: { one: 'about 1 month', other: 'about {{count}} months' },
    xMonths: { one: '1 month', other: '{{count}} months' },
    aboutXYears: { one: 'about 1 year', other: 'about {{count}} years' },
    xYears: { one: '1 year', other: '{{count}} years' },
    overXYears: { one: 'over 1 year', other: 'over {{count}} years' },
    almostXYears: { one: 'almost 1 year', other: 'almost {{count}} years' },
  };
  function a(t) {
    return (e = {}) => {
      const n = e.width ? String(e.width) : t.defaultWidth;
      return t.formats[n] || t.formats[t.defaultWidth];
    };
  }
  const o = {
      date: a({
        formats: {
          full: 'EEEE, MMMM do, y',
          long: 'MMMM do, y',
          medium: 'MMM d, y',
          short: 'MM/dd/yyyy',
        },
        defaultWidth: 'full',
      }),
      time: a({
        formats: {
          full: 'h:mm:ss a zzzz',
          long: 'h:mm:ss a z',
          medium: 'h:mm:ss a',
          short: 'h:mm a',
        },
        defaultWidth: 'full',
      }),
      dateTime: a({
        formats: {
          full: "{{date}} 'at' {{time}}",
          long: "{{date}} 'at' {{time}}",
          medium: '{{date}}, {{time}}',
          short: '{{date}}, {{time}}',
        },
        defaultWidth: 'full',
      }),
    },
    i = {
      lastWeek: "'last' eeee 'at' p",
      yesterday: "'yesterday at' p",
      today: "'today at' p",
      tomorrow: "'tomorrow at' p",
      nextWeek: "eeee 'at' p",
      other: 'P',
    };
  function s(t) {
    return (e, n) => {
      let r;
      if (
        'formatting' === (n?.context ? String(n.context) : 'standalone') &&
        t.formattingValues
      ) {
        const e = t.defaultFormattingWidth || t.defaultWidth,
          a = n?.width ? String(n.width) : e;
        r = t.formattingValues[a] || t.formattingValues[e];
      } else {
        const e = t.defaultWidth,
          a = n?.width ? String(n.width) : t.defaultWidth;
        r = t.values[a] || t.values[e];
      }
      return r[t.argumentCallback ? t.argumentCallback(e) : e];
    };
  }
  const c = {
    ordinalNumber: (t, e) => {
      const n = Number(t),
        r = n % 100;
      if (r > 20 || r < 10)
        switch (r % 10) {
          case 1:
            return n + 'st';
          case 2:
            return n + 'nd';
          case 3:
            return n + 'rd';
        }
      return n + 'th';
    },
    era: s({
      values: {
        narrow: ['B', 'A'],
        abbreviated: ['BC', 'AD'],
        wide: ['Before Christ', 'Anno Domini'],
      },
      defaultWidth: 'wide',
    }),
    quarter: s({
      values: {
        narrow: ['1', '2', '3', '4'],
        abbreviated: ['Q1', 'Q2', 'Q3', 'Q4'],
        wide: ['1st quarter', '2nd quarter', '3rd quarter', '4th quarter'],
      },
      defaultWidth: 'wide',
      argumentCallback: (t) => t - 1,
    }),
    month: s({
      values: {
        narrow: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
        abbreviated: [
          'Jan',
          'Feb',
          'Mar',
          'Apr',
          'May',
          'Jun',
          'Jul',
          'Aug',
          'Sep',
          'Oct',
          'Nov',
          'Dec',
        ],
        wide: [
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
      },
      defaultWidth: 'wide',
    }),
    day: s({
      values: {
        narrow: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
        short: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
        abbreviated: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
        wide: [
          'Sunday',
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
        ],
      },
      defaultWidth: 'wide',
    }),
    dayPeriod: s({
      values: {
        narrow: {
          am: 'a',
          pm: 'p',
          midnight: 'mi',
          noon: 'n',
          morning: 'morning',
          afternoon: 'afternoon',
          evening: 'evening',
          night: 'night',
        },
        abbreviated: {
          am: 'AM',
          pm: 'PM',
          midnight: 'midnight',
          noon: 'noon',
          morning: 'morning',
          afternoon: 'afternoon',
          evening: 'evening',
          night: 'night',
        },
        wide: {
          am: 'a.m.',
          pm: 'p.m.',
          midnight: 'midnight',
          noon: 'noon',
          morning: 'morning',
          afternoon: 'afternoon',
          evening: 'evening',
          night: 'night',
        },
      },
      defaultWidth: 'wide',
      formattingValues: {
        narrow: {
          am: 'a',
          pm: 'p',
          midnight: 'mi',
          noon: 'n',
          morning: 'in the morning',
          afternoon: 'in the afternoon',
          evening: 'in the evening',
          night: 'at night',
        },
        abbreviated: {
          am: 'AM',
          pm: 'PM',
          midnight: 'midnight',
          noon: 'noon',
          morning: 'in the morning',
          afternoon: 'in the afternoon',
          evening: 'in the evening',
          night: 'at night',
        },
        wide: {
          am: 'a.m.',
          pm: 'p.m.',
          midnight: 'midnight',
          noon: 'noon',
          morning: 'in the morning',
          afternoon: 'in the afternoon',
          evening: 'in the evening',
          night: 'at night',
        },
      },
      defaultFormattingWidth: 'wide',
    }),
  };
  function u(t) {
    return (e, n = {}) => {
      const r = n.width,
        a = (r && t.matchPatterns[r]) || t.matchPatterns[t.defaultMatchWidth],
        o = e.match(a);
      if (!o) return null;
      const i = o[0],
        s = (r && t.parsePatterns[r]) || t.parsePatterns[t.defaultParseWidth],
        c = Array.isArray(s)
          ? (function (t) {
              for (let e = 0; e < t.length; e++) if (t[e].test(i)) return e;
            })(s)
          : (function (t) {
              for (const e in t)
                if (Object.prototype.hasOwnProperty.call(t, e) && t[e].test(i))
                  return e;
            })(s);
      let u;
      return (
        (u = t.valueCallback ? t.valueCallback(c) : c),
        (u = n.valueCallback ? n.valueCallback(u) : u),
        { value: u, rest: e.slice(i.length) }
      );
    };
  }
  const d = {
    ordinalNumber:
      ((l = {
        matchPattern: /^(\d+)(th|st|nd|rd)?/i,
        parsePattern: /\d+/i,
        valueCallback: (t) => parseInt(t, 10),
      }),
      (t, e = {}) => {
        const n = t.match(l.matchPattern);
        if (!n) return null;
        const r = n[0],
          a = t.match(l.parsePattern);
        if (!a) return null;
        let o = l.valueCallback ? l.valueCallback(a[0]) : a[0];
        return (
          (o = e.valueCallback ? e.valueCallback(o) : o),
          { value: o, rest: t.slice(r.length) }
        );
      }),
    era: u({
      matchPatterns: {
        narrow: /^(b|a)/i,
        abbreviated:
          /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
        wide: /^(before christ|before common era|anno domini|common era)/i,
      },
      defaultMatchWidth: 'wide',
      parsePatterns: { any: [/^b/i, /^(a|c)/i] },
      defaultParseWidth: 'any',
    }),
    quarter: u({
      matchPatterns: {
        narrow: /^[1234]/i,
        abbreviated: /^q[1234]/i,
        wide: /^[1234](th|st|nd|rd)? quarter/i,
      },
      defaultMatchWidth: 'wide',
      parsePatterns: { any: [/1/i, /2/i, /3/i, /4/i] },
      defaultParseWidth: 'any',
      valueCallback: (t) => t + 1,
    }),
    month: u({
      matchPatterns: {
        narrow: /^[jfmasond]/i,
        abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
        wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i,
      },
      defaultMatchWidth: 'wide',
      parsePatterns: {
        narrow: [
          /^j/i,
          /^f/i,
          /^m/i,
          /^a/i,
          /^m/i,
          /^j/i,
          /^j/i,
          /^a/i,
          /^s/i,
          /^o/i,
          /^n/i,
          /^d/i,
        ],
        any: [
          /^ja/i,
          /^f/i,
          /^mar/i,
          /^ap/i,
          /^may/i,
          /^jun/i,
          /^jul/i,
          /^au/i,
          /^s/i,
          /^o/i,
          /^n/i,
          /^d/i,
        ],
      },
      defaultParseWidth: 'any',
    }),
    day: u({
      matchPatterns: {
        narrow: /^[smtwf]/i,
        short: /^(su|mo|tu|we|th|fr|sa)/i,
        abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
        wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i,
      },
      defaultMatchWidth: 'wide',
      parsePatterns: {
        narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
        any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i],
      },
      defaultParseWidth: 'any',
    }),
    dayPeriod: u({
      matchPatterns: {
        narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
        any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i,
      },
      defaultMatchWidth: 'any',
      parsePatterns: {
        any: {
          am: /^a/i,
          pm: /^p/i,
          midnight: /^mi/i,
          noon: /^no/i,
          morning: /morning/i,
          afternoon: /afternoon/i,
          evening: /evening/i,
          night: /night/i,
        },
      },
      defaultParseWidth: 'any',
    }),
  };
  var l;
  const h = {
    code: 'en-US',
    formatDistance: (t, e, n) => {
      let a;
      const o = r[t];
      return (
        (a =
          'string' == typeof o
            ? o
            : 1 === e
              ? o.one
              : o.other.replace('{{count}}', e.toString())),
        n?.addSuffix
          ? n.comparison && n.comparison > 0
            ? 'in ' + a
            : a + ' ago'
          : a
      );
    },
    formatLong: o,
    formatRelative: (t, e, n, r) => i[t],
    localize: c,
    match: d,
    options: { weekStartsOn: 0, firstWeekContainsDate: 1 },
  };
  let m = {};
  function f() {
    return m;
  }
  Math.pow(10, 8);
  const g = 6048e5,
    p = 864e5,
    w = Symbol.for('constructDateFrom');
  function y(t, e) {
    return 'function' == typeof t
      ? t(e)
      : t && 'object' == typeof t && w in t
        ? t[w](e)
        : t instanceof Date
          ? new t.constructor(e)
          : new Date(e);
  }
  function b(t, e) {
    return y(e || t, t);
  }
  function v(t) {
    const e = b(t),
      n = new Date(
        Date.UTC(
          e.getFullYear(),
          e.getMonth(),
          e.getDate(),
          e.getHours(),
          e.getMinutes(),
          e.getSeconds(),
          e.getMilliseconds(),
        ),
      );
    return n.setUTCFullYear(e.getFullYear()), +t - +n;
  }
  function x(t, e) {
    const n = b(t, e?.in);
    return n.setHours(0, 0, 0, 0), n;
  }
  function M(t, e) {
    const n = b(t, e?.in);
    return (
      (function (t, e, n) {
        const [r, a] = (function (t, ...e) {
            const n = y.bind(null, t || e.find((t) => 'object' == typeof t));
            return e.map(n);
          })(n?.in, t, e),
          o = x(r),
          i = x(a),
          s = +o - v(o),
          c = +i - v(i);
        return Math.round((s - c) / p);
      })(
        n,
        (function (t, e) {
          const n = b(t, e?.in);
          return (
            n.setFullYear(n.getFullYear(), 0, 1), n.setHours(0, 0, 0, 0), n
          );
        })(n),
      ) + 1
    );
  }
  function S(t, e) {
    const n = f(),
      r =
        e?.weekStartsOn ??
        e?.locale?.options?.weekStartsOn ??
        n.weekStartsOn ??
        n.locale?.options?.weekStartsOn ??
        0,
      a = b(t, e?.in),
      o = a.getDay(),
      i = (o < r ? 7 : 0) + o - r;
    return a.setDate(a.getDate() - i), a.setHours(0, 0, 0, 0), a;
  }
  function C(t, e) {
    return S(t, { ...e, weekStartsOn: 1 });
  }
  function k(t, e) {
    const n = b(t, e?.in),
      r = n.getFullYear(),
      a = y(n, 0);
    a.setFullYear(r + 1, 0, 4), a.setHours(0, 0, 0, 0);
    const o = C(a),
      i = y(n, 0);
    i.setFullYear(r, 0, 4), i.setHours(0, 0, 0, 0);
    const s = C(i);
    return n.getTime() >= o.getTime()
      ? r + 1
      : n.getTime() >= s.getTime()
        ? r
        : r - 1;
  }
  function P(t, e) {
    const n = b(t, e?.in),
      r =
        +C(n) -
        +(function (t, e) {
          const n = k(t, e),
            r = y(e?.in || t, 0);
          return r.setFullYear(n, 0, 4), r.setHours(0, 0, 0, 0), C(r);
        })(n);
    return Math.round(r / g) + 1;
  }
  function D(t, e) {
    const n = b(t, e?.in),
      r = n.getFullYear(),
      a = f(),
      o =
        e?.firstWeekContainsDate ??
        e?.locale?.options?.firstWeekContainsDate ??
        a.firstWeekContainsDate ??
        a.locale?.options?.firstWeekContainsDate ??
        1,
      i = y(e?.in || t, 0);
    i.setFullYear(r + 1, 0, o), i.setHours(0, 0, 0, 0);
    const s = S(i, e),
      c = y(e?.in || t, 0);
    c.setFullYear(r, 0, o), c.setHours(0, 0, 0, 0);
    const u = S(c, e);
    return +n >= +s ? r + 1 : +n >= +u ? r : r - 1;
  }
  function T(t, e) {
    const n = b(t, e?.in),
      r =
        +S(n, e) -
        +(function (t, e) {
          const n = f(),
            r =
              e?.firstWeekContainsDate ??
              e?.locale?.options?.firstWeekContainsDate ??
              n.firstWeekContainsDate ??
              n.locale?.options?.firstWeekContainsDate ??
              1,
            a = D(t, e),
            o = y(e?.in || t, 0);
          return o.setFullYear(a, 0, r), o.setHours(0, 0, 0, 0), S(o, e);
        })(n, e);
    return Math.round(r / g) + 1;
  }
  function W(t, e) {
    return (t < 0 ? '-' : '') + Math.abs(t).toString().padStart(e, '0');
  }
  const q = {
      y(t, e) {
        const n = t.getFullYear(),
          r = n > 0 ? n : 1 - n;
        return W('yy' === e ? r % 100 : r, e.length);
      },
      M(t, e) {
        const n = t.getMonth();
        return 'M' === e ? String(n + 1) : W(n + 1, 2);
      },
      d: (t, e) => W(t.getDate(), e.length),
      a(t, e) {
        const n = t.getHours() / 12 >= 1 ? 'pm' : 'am';
        switch (e) {
          case 'a':
          case 'aa':
            return n.toUpperCase();
          case 'aaa':
            return n;
          case 'aaaaa':
            return n[0];
          default:
            return 'am' === n ? 'a.m.' : 'p.m.';
        }
      },
      h: (t, e) => W(t.getHours() % 12 || 12, e.length),
      H: (t, e) => W(t.getHours(), e.length),
      m: (t, e) => W(t.getMinutes(), e.length),
      s: (t, e) => W(t.getSeconds(), e.length),
      S(t, e) {
        const n = e.length,
          r = t.getMilliseconds();
        return W(Math.trunc(r * Math.pow(10, n - 3)), e.length);
      },
    },
    E = {
      G: function (t, e, n) {
        const r = t.getFullYear() > 0 ? 1 : 0;
        switch (e) {
          case 'G':
          case 'GG':
          case 'GGG':
            return n.era(r, { width: 'abbreviated' });
          case 'GGGGG':
            return n.era(r, { width: 'narrow' });
          default:
            return n.era(r, { width: 'wide' });
        }
      },
      y: function (t, e, n) {
        if ('yo' === e) {
          const e = t.getFullYear(),
            r = e > 0 ? e : 1 - e;
          return n.ordinalNumber(r, { unit: 'year' });
        }
        return q.y(t, e);
      },
      Y: function (t, e, n, r) {
        const a = D(t, r),
          o = a > 0 ? a : 1 - a;
        return 'YY' === e
          ? W(o % 100, 2)
          : 'Yo' === e
            ? n.ordinalNumber(o, { unit: 'year' })
            : W(o, e.length);
      },
      R: function (t, e) {
        return W(k(t), e.length);
      },
      u: function (t, e) {
        return W(t.getFullYear(), e.length);
      },
      Q: function (t, e, n) {
        const r = Math.ceil((t.getMonth() + 1) / 3);
        switch (e) {
          case 'Q':
            return String(r);
          case 'QQ':
            return W(r, 2);
          case 'Qo':
            return n.ordinalNumber(r, { unit: 'quarter' });
          case 'QQQ':
            return n.quarter(r, {
              width: 'abbreviated',
              context: 'formatting',
            });
          case 'QQQQQ':
            return n.quarter(r, { width: 'narrow', context: 'formatting' });
          default:
            return n.quarter(r, { width: 'wide', context: 'formatting' });
        }
      },
      q: function (t, e, n) {
        const r = Math.ceil((t.getMonth() + 1) / 3);
        switch (e) {
          case 'q':
            return String(r);
          case 'qq':
            return W(r, 2);
          case 'qo':
            return n.ordinalNumber(r, { unit: 'quarter' });
          case 'qqq':
            return n.quarter(r, {
              width: 'abbreviated',
              context: 'standalone',
            });
          case 'qqqqq':
            return n.quarter(r, { width: 'narrow', context: 'standalone' });
          default:
            return n.quarter(r, { width: 'wide', context: 'standalone' });
        }
      },
      M: function (t, e, n) {
        const r = t.getMonth();
        switch (e) {
          case 'M':
          case 'MM':
            return q.M(t, e);
          case 'Mo':
            return n.ordinalNumber(r + 1, { unit: 'month' });
          case 'MMM':
            return n.month(r, { width: 'abbreviated', context: 'formatting' });
          case 'MMMMM':
            return n.month(r, { width: 'narrow', context: 'formatting' });
          default:
            return n.month(r, { width: 'wide', context: 'formatting' });
        }
      },
      L: function (t, e, n) {
        const r = t.getMonth();
        switch (e) {
          case 'L':
            return String(r + 1);
          case 'LL':
            return W(r + 1, 2);
          case 'Lo':
            return n.ordinalNumber(r + 1, { unit: 'month' });
          case 'LLL':
            return n.month(r, { width: 'abbreviated', context: 'standalone' });
          case 'LLLLL':
            return n.month(r, { width: 'narrow', context: 'standalone' });
          default:
            return n.month(r, { width: 'wide', context: 'standalone' });
        }
      },
      w: function (t, e, n, r) {
        const a = T(t, r);
        return 'wo' === e
          ? n.ordinalNumber(a, { unit: 'week' })
          : W(a, e.length);
      },
      I: function (t, e, n) {
        const r = P(t);
        return 'Io' === e
          ? n.ordinalNumber(r, { unit: 'week' })
          : W(r, e.length);
      },
      d: function (t, e, n) {
        return 'do' === e
          ? n.ordinalNumber(t.getDate(), { unit: 'date' })
          : q.d(t, e);
      },
      D: function (t, e, n) {
        const r = M(t);
        return 'Do' === e
          ? n.ordinalNumber(r, { unit: 'dayOfYear' })
          : W(r, e.length);
      },
      E: function (t, e, n) {
        const r = t.getDay();
        switch (e) {
          case 'E':
          case 'EE':
          case 'EEE':
            return n.day(r, { width: 'abbreviated', context: 'formatting' });
          case 'EEEEE':
            return n.day(r, { width: 'narrow', context: 'formatting' });
          case 'EEEEEE':
            return n.day(r, { width: 'short', context: 'formatting' });
          default:
            return n.day(r, { width: 'wide', context: 'formatting' });
        }
      },
      e: function (t, e, n, r) {
        const a = t.getDay(),
          o = (a - r.weekStartsOn + 8) % 7 || 7;
        switch (e) {
          case 'e':
            return String(o);
          case 'ee':
            return W(o, 2);
          case 'eo':
            return n.ordinalNumber(o, { unit: 'day' });
          case 'eee':
            return n.day(a, { width: 'abbreviated', context: 'formatting' });
          case 'eeeee':
            return n.day(a, { width: 'narrow', context: 'formatting' });
          case 'eeeeee':
            return n.day(a, { width: 'short', context: 'formatting' });
          default:
            return n.day(a, { width: 'wide', context: 'formatting' });
        }
      },
      c: function (t, e, n, r) {
        const a = t.getDay(),
          o = (a - r.weekStartsOn + 8) % 7 || 7;
        switch (e) {
          case 'c':
            return String(o);
          case 'cc':
            return W(o, e.length);
          case 'co':
            return n.ordinalNumber(o, { unit: 'day' });
          case 'ccc':
            return n.day(a, { width: 'abbreviated', context: 'standalone' });
          case 'ccccc':
            return n.day(a, { width: 'narrow', context: 'standalone' });
          case 'cccccc':
            return n.day(a, { width: 'short', context: 'standalone' });
          default:
            return n.day(a, { width: 'wide', context: 'standalone' });
        }
      },
      i: function (t, e, n) {
        const r = t.getDay(),
          a = 0 === r ? 7 : r;
        switch (e) {
          case 'i':
            return String(a);
          case 'ii':
            return W(a, e.length);
          case 'io':
            return n.ordinalNumber(a, { unit: 'day' });
          case 'iii':
            return n.day(r, { width: 'abbreviated', context: 'formatting' });
          case 'iiiii':
            return n.day(r, { width: 'narrow', context: 'formatting' });
          case 'iiiiii':
            return n.day(r, { width: 'short', context: 'formatting' });
          default:
            return n.day(r, { width: 'wide', context: 'formatting' });
        }
      },
      a: function (t, e, n) {
        const r = t.getHours() / 12 >= 1 ? 'pm' : 'am';
        switch (e) {
          case 'a':
          case 'aa':
            return n.dayPeriod(r, {
              width: 'abbreviated',
              context: 'formatting',
            });
          case 'aaa':
            return n
              .dayPeriod(r, { width: 'abbreviated', context: 'formatting' })
              .toLowerCase();
          case 'aaaaa':
            return n.dayPeriod(r, { width: 'narrow', context: 'formatting' });
          default:
            return n.dayPeriod(r, { width: 'wide', context: 'formatting' });
        }
      },
      b: function (t, e, n) {
        const r = t.getHours();
        let a;
        switch (
          ((a =
            12 === r
              ? 'noon'
              : 0 === r
                ? 'midnight'
                : r / 12 >= 1
                  ? 'pm'
                  : 'am'),
          e)
        ) {
          case 'b':
          case 'bb':
            return n.dayPeriod(a, {
              width: 'abbreviated',
              context: 'formatting',
            });
          case 'bbb':
            return n
              .dayPeriod(a, { width: 'abbreviated', context: 'formatting' })
              .toLowerCase();
          case 'bbbbb':
            return n.dayPeriod(a, { width: 'narrow', context: 'formatting' });
          default:
            return n.dayPeriod(a, { width: 'wide', context: 'formatting' });
        }
      },
      B: function (t, e, n) {
        const r = t.getHours();
        let a;
        switch (
          ((a =
            r >= 17
              ? 'evening'
              : r >= 12
                ? 'afternoon'
                : r >= 4
                  ? 'morning'
                  : 'night'),
          e)
        ) {
          case 'B':
          case 'BB':
          case 'BBB':
            return n.dayPeriod(a, {
              width: 'abbreviated',
              context: 'formatting',
            });
          case 'BBBBB':
            return n.dayPeriod(a, { width: 'narrow', context: 'formatting' });
          default:
            return n.dayPeriod(a, { width: 'wide', context: 'formatting' });
        }
      },
      h: function (t, e, n) {
        if ('ho' === e) {
          let e = t.getHours() % 12;
          return 0 === e && (e = 12), n.ordinalNumber(e, { unit: 'hour' });
        }
        return q.h(t, e);
      },
      H: function (t, e, n) {
        return 'Ho' === e
          ? n.ordinalNumber(t.getHours(), { unit: 'hour' })
          : q.H(t, e);
      },
      K: function (t, e, n) {
        const r = t.getHours() % 12;
        return 'Ko' === e
          ? n.ordinalNumber(r, { unit: 'hour' })
          : W(r, e.length);
      },
      k: function (t, e, n) {
        let r = t.getHours();
        return (
          0 === r && (r = 24),
          'ko' === e ? n.ordinalNumber(r, { unit: 'hour' }) : W(r, e.length)
        );
      },
      m: function (t, e, n) {
        return 'mo' === e
          ? n.ordinalNumber(t.getMinutes(), { unit: 'minute' })
          : q.m(t, e);
      },
      s: function (t, e, n) {
        return 'so' === e
          ? n.ordinalNumber(t.getSeconds(), { unit: 'second' })
          : q.s(t, e);
      },
      S: function (t, e) {
        return q.S(t, e);
      },
      X: function (t, e, n) {
        const r = t.getTimezoneOffset();
        if (0 === r) return 'Z';
        switch (e) {
          case 'X':
            return N(r);
          case 'XXXX':
          case 'XX':
            return H(r);
          default:
            return H(r, ':');
        }
      },
      x: function (t, e, n) {
        const r = t.getTimezoneOffset();
        switch (e) {
          case 'x':
            return N(r);
          case 'xxxx':
          case 'xx':
            return H(r);
          default:
            return H(r, ':');
        }
      },
      O: function (t, e, n) {
        const r = t.getTimezoneOffset();
        switch (e) {
          case 'O':
          case 'OO':
          case 'OOO':
            return 'GMT' + F(r, ':');
          default:
            return 'GMT' + H(r, ':');
        }
      },
      z: function (t, e, n) {
        const r = t.getTimezoneOffset();
        switch (e) {
          case 'z':
          case 'zz':
          case 'zzz':
            return 'GMT' + F(r, ':');
          default:
            return 'GMT' + H(r, ':');
        }
      },
      t: function (t, e, n) {
        return W(Math.trunc(+t / 1e3), e.length);
      },
      T: function (t, e, n) {
        return W(+t, e.length);
      },
    };
  function F(t, e = '') {
    const n = t > 0 ? '-' : '+',
      r = Math.abs(t),
      a = Math.trunc(r / 60),
      o = r % 60;
    return 0 === o ? n + String(a) : n + String(a) + e + W(o, 2);
  }
  function N(t, e) {
    return t % 60 == 0 ? (t > 0 ? '-' : '+') + W(Math.abs(t) / 60, 2) : H(t, e);
  }
  function H(t, e = '') {
    const n = t > 0 ? '-' : '+',
      r = Math.abs(t);
    return n + W(Math.trunc(r / 60), 2) + e + W(r % 60, 2);
  }
  const Y = (t, e) => {
      switch (t) {
        case 'P':
          return e.date({ width: 'short' });
        case 'PP':
          return e.date({ width: 'medium' });
        case 'PPP':
          return e.date({ width: 'long' });
        default:
          return e.date({ width: 'full' });
      }
    },
    O = (t, e) => {
      switch (t) {
        case 'p':
          return e.time({ width: 'short' });
        case 'pp':
          return e.time({ width: 'medium' });
        case 'ppp':
          return e.time({ width: 'long' });
        default:
          return e.time({ width: 'full' });
      }
    },
    j = {
      p: O,
      P: (t, e) => {
        const n = t.match(/(P+)(p+)?/) || [],
          r = n[1],
          a = n[2];
        if (!a) return Y(t, e);
        let o;
        switch (r) {
          case 'P':
            o = e.dateTime({ width: 'short' });
            break;
          case 'PP':
            o = e.dateTime({ width: 'medium' });
            break;
          case 'PPP':
            o = e.dateTime({ width: 'long' });
            break;
          default:
            o = e.dateTime({ width: 'full' });
        }
        return o.replace('{{date}}', Y(r, e)).replace('{{time}}', O(a, e));
      },
    },
    A = /^D+$/,
    L = /^Y+$/,
    z = ['D', 'DD', 'YY', 'YYYY'];
  function $(t) {
    return !(
      (!(
        (e = t) instanceof Date ||
        ('object' == typeof e &&
          '[object Date]' === Object.prototype.toString.call(e))
      ) &&
        'number' != typeof t) ||
      isNaN(+b(t))
    );
    var e;
  }
  const Q = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,
    X = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,
    B = /^'([^]*?)'?$/,
    G = /''/g,
    R = /[a-zA-Z]/;
  function I(t, e, n) {
    const r = f(),
      a = n?.locale ?? r.locale ?? h,
      o =
        n?.firstWeekContainsDate ??
        n?.locale?.options?.firstWeekContainsDate ??
        r.firstWeekContainsDate ??
        r.locale?.options?.firstWeekContainsDate ??
        1,
      i =
        n?.weekStartsOn ??
        n?.locale?.options?.weekStartsOn ??
        r.weekStartsOn ??
        r.locale?.options?.weekStartsOn ??
        0,
      s = b(t, n?.in);
    if (!$(s)) throw new RangeError('Invalid time value');
    let c = e
      .match(X)
      .map((t) => {
        const e = t[0];
        return 'p' === e || 'P' === e ? (0, j[e])(t, a.formatLong) : t;
      })
      .join('')
      .match(Q)
      .map((t) => {
        if ("''" === t) return { isToken: !1, value: "'" };
        const e = t[0];
        if ("'" === e) return { isToken: !1, value: U(t) };
        if (E[e]) return { isToken: !0, value: t };
        if (e.match(R))
          throw new RangeError(
            'Format string contains an unescaped latin alphabet character `' +
              e +
              '`',
          );
        return { isToken: !1, value: t };
      });
    a.localize.preprocessor && (c = a.localize.preprocessor(s, c));
    const u = { firstWeekContainsDate: o, weekStartsOn: i, locale: a };
    return c
      .map((r) => {
        if (!r.isToken) return r.value;
        const o = r.value;
        return (
          ((!n?.useAdditionalWeekYearTokens &&
            (function (t) {
              return L.test(t);
            })(o)) ||
            (!n?.useAdditionalDayOfYearTokens &&
              (function (t) {
                return A.test(t);
              })(o))) &&
            (function (t, e, n) {
              const r = (function (t, e, n) {
                const r = 'Y' === t[0] ? 'years' : 'days of the month';
                return `Use \`${t.toLowerCase()}\` instead of \`${t}\` (in \`${e}\`) for formatting ${r} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
              })(t, e, n);
              if ((console.warn(r), z.includes(t))) throw new RangeError(r);
            })(o, e, String(t)),
          (0, E[o[0]])(s, o, a.localize, u)
        );
      })
      .join('');
  }
  function U(t) {
    const e = t.match(B);
    return e ? e[1].replace(G, "'") : t;
  }
  var J = n(72),
    V = n.n(J),
    _ = n(825),
    K = n.n(_),
    Z = n(659),
    tt = n.n(Z),
    et = n(56),
    nt = n.n(et),
    rt = n(540),
    at = n.n(rt),
    ot = n(113),
    it = n.n(ot),
    st = n(208),
    ct = {};
  async function ut(t, e) {
    const n = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${t}?key=VDKUKL8EQDV9T899DT62TFX73`;
    let r = {};
    try {
      const t = await fetch(n, { mode: 'cors' }),
        e = await t.json();
      (r = (function (t) {
        const e = t.currentConditions.sunrise,
          n = t.currentConditions.sunset,
          r = new Date().setHours(...e.split(':').map(Number)),
          a = new Date().setHours(...n.split(':').map(Number));
        return {
          address: t.resolvedAddress,
          conditions: t.currentConditions.conditions,
          temperature: t.currentConditions.temp,
          datetime: t.currentConditions.datetime,
          humidity: t.currentConditions.humidity,
          wind: t.currentConditions.windspeed,
          feelslike: t.currentConditions.feelslike,
          visibility: t.currentConditions.visibility,
          sunrise: r,
          sunset: a,
          icon: t.currentConditions.icon,
          hours: (function () {
            const e = new Date(),
              n = e.getHours();
            return [...t.days[0].hours]
              .filter((t) => {
                const r = e;
                r.setHours(t.datetime.split(':')[0]);
                const a = r.getHours();
                return a > n && a <= n + 5;
              })
              .map((t) => ({
                datetime: new Date().setHours(
                  ...t.datetime.split(':').map(Number),
                ),
                temp: t.temp,
                icon: t.icon,
              }));
          })(),
          days: (function () {
            const e = new Date();
            return [...t.days]
              .filter((t) => {
                const n =
                  (new Date(t.datetime).getTime() - e.getTime()) / 864e5;
                return n > 0 && n <= 5;
              })
              .map((t) => ({
                temp: t.temp,
                icon: t.icon,
                date: new Date(t.datetime),
              }));
          })(),
        };
      })(e)),
        console.log(e);
    } catch (t) {
      console.log(t);
    }
    return r;
  }
  function dt(t, e) {
    const n = [...t.hours].map((t) => ({ ...t, temp: e(t.temp) })),
      r = [...t.days].map((t) => ({ ...t, temp: e(t.temp) })),
      a = e(t.temperature);
    return { ...t, days: r, temperature: a, hours: n };
  }
  (ct.styleTagTransform = it()),
    (ct.setAttributes = nt()),
    (ct.insert = tt().bind(null, 'head')),
    (ct.domAPI = K()),
    (ct.insertStyleElement = at()),
    V()(st.A, ct),
    st.A && st.A.locals && st.A.locals;
  const lt = n.p + 'f8d40353e151c5c7cce0.svg',
    ht = n.p + '848651d20f3f58949d26.svg',
    mt = n.p + '07bf93f0c95051aa29f1.svg',
    ft = n.p + 'e87b86c9cbeabdd90ce2.svg',
    gt = n.p + 'bd65452b254265c4f761.svg',
    pt = n.p + '749d1251900ec2449417.svg',
    wt = n.p + 'c0a8d00378e555b86fcf.svg',
    yt = n.p + 'e6541ce84a82ea86deaf.svg',
    bt = n.p + '7228ebde1a1cbbabeed4.svg';
  function vt(t) {
    switch (t) {
      case 'snow':
        return lt;
      case 'rain':
        return ht;
      case 'fog':
        return mt;
      case 'wind':
        return ft;
      case 'cloudy':
        return gt;
      case 'partly-cloudy-day':
        return pt;
      case 'partly-cloudy-night':
        return wt;
      case 'clear-day':
        return yt;
      case 'clear-night':
        return bt;
      default:
        return null;
    }
  }
  !(async function () {
    let t,
      e = 'F';
    const n = document.querySelector('#location'),
      r = document.querySelector('button'),
      a = document.querySelector('#cel'),
      o = document.querySelector('#fah');
    function i(t) {
      return ((t - 32) / 1.8).toFixed(1);
    }
    function s(t) {
      return (1.8 * t + 32).toFixed();
    }
    function c(t, e, n) {
      const r = document.createElement('div'),
        a = document.createElement('p'),
        o = document.createElement('img'),
        i = document.createElement('p');
      return (
        (r.className = 'weather-grid-card'),
        (a.textContent = t),
        (o.src = e),
        (i.textContent = `${n}°`),
        r.appendChild(a),
        r.appendChild(o),
        r.appendChild(i),
        r
      );
    }
    function u() {
      !(function () {
        const e = document.querySelector('.currentDate'),
          n = document.querySelector('.city'),
          r = document.querySelector('.short-des'),
          a = new Date(),
          o = I(a, 'eee, dd MMM yyyy'),
          i = I(a, 'hh:mm a');
        (e.textContent = `${o} | Local time: ${i}`),
          (n.textContent = t.address),
          (r.textContent = t.conditions);
      })(),
        (function () {
          const e = document.querySelector('.currentConditionIcon'),
            n = document.querySelector('.currentTemp'),
            r = document.querySelector('.realFell'),
            a = document.querySelector('.humidity'),
            o = document.querySelector('.wind'),
            i = document.querySelector('.sunRise'),
            s = document.querySelector('.sunSet');
          (e.src = vt(t.icon)),
            (n.textContent = `${t.temperature}°`),
            (r.textContent = `Real fell: ${t.feelslike}°`),
            (a.textContent = `Humidity: ${t.humidity}%`),
            (o.textContent = `Wind: ${t.wind}km/h`);
          const c = I(t.sunrise, 'hh:mm a'),
            u = I(t.sunset, 'hh:mm a');
          (i.textContent = `Rise: ${c}`), (s.textContent = `Set: ${u}`);
        })(),
        (function () {
          const e = document.querySelector('.weather-grid');
          (e.textContent = ''),
            [...t.hours].forEach((t) => {
              const n = c(I(t.datetime, 'hh:mm a'), vt(t.icon), t.temp);
              e.appendChild(n);
            });
        })(),
        (function () {
          const e = document.querySelector('.nextFiveDays > div');
          (e.textContent = ''),
            [...t.days].forEach((t) => {
              const n = c(I(t.date, 'E'), vt(t.icon), t.temp);
              e.appendChild(n);
            });
        })();
    }
    function d() {
      'F' === e
        ? ((e = 'C'),
          (a.className = 'buttonSelected'),
          (o.className = ''),
          (t = dt(t, i)))
        : ((e = 'F'),
          (o.className = 'buttonSelected'),
          (a.className = ''),
          (t = dt(t, s))),
        u();
    }
    await (async function () {
      t = await ut('Ho Chi Minh');
    })(),
      u(),
      r.addEventListener('click', async function (r) {
        r.preventDefault(),
          (t = await ut(n.value)),
          'C' === e && (t = dt(t, i)),
          u();
      }),
      a.addEventListener('click', d),
      o.addEventListener('click', d);
  })();
})();
