(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [607],
  {
    96607: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          Header: function () {
            return P;
          },
        });
      var r = n(3827),
        o = n(64090),
        i = n(16480),
        s = n.n(i),
        a = n(47907),
        l = n(8792),
        c = n(56306),
        d = n.n(c),
        u = n(44911),
        h = function (e) {
          let {
            hoverColor: t,
            text: n,
            isDropDown: o = !1,
            href: i,
            isDark: a = !1,
          } = e;
          return i
            ? (0, r.jsx)(l.default, {
                href: i,
                target: i.startsWith("/") ? "_self" : "_blank",
                children: (0, r.jsx)("div", {
                  className: s()(
                    d().buttonLink,
                    { [d().dark]: !0 === a },
                    { [d().red]: "red" === t },
                    { [d().blue]: "blue" === t },
                    { [d().green]: "green" === t },
                    { [d().purple]: "purple" === t },
                    { [d().orange]: "orange" === t },
                    { [d().yellow]: "yellow" === t }
                  ),
                  children: (0, r.jsx)(u.default, { text: n }),
                }),
              })
            : (0, r.jsxs)("button", {
                className: s()(
                  d().buttonLink,
                  { [d().dark]: !0 === a },
                  { [d().red]: "red" === t },
                  { [d().blue]: "blue" === t },
                  { [d().green]: "green" === t },
                  { [d().purple]: "purple" === t },
                  { [d().orange]: "orange" === t },
                  { [d().yellow]: "yellow" === t }
                ),
                children: [
                  (0, r.jsx)(u.default, { text: n }),
                  o &&
                    (0, r.jsx)("div", {
                      className: s()(d().arrowIcon, {
                        [d().inverted]: !0 === a,
                      }),
                      children: (0, r.jsx)("img", {
                        alt: "menu",
                        src: "/icons/keyboard_arrow_down.webp",
                        width: 20,
                        height: 20,
                      }),
                    }),
                ],
              });
        },
        _ = n(64374),
        p = n(20703),
        m = n(23200),
        f = n.n(m);
      let x = (e) => {
        let { accordionTabs: t, label: n, children: i, needSpace: a = !1 } = e,
          [l, c] = (0, o.useState)(!1),
          [d, u] = (0, o.useState)(0),
          h = (e, t) => () => {
            let n = new Date().getTime();
            n - d < t || (u(n), e());
          },
          _ = () => {
            c(!l);
          };
        return (0, r.jsx)(r.Fragment, {
          children: i
            ? (0, r.jsxs)(r.Fragment, {
                children: [
                  (0, r.jsxs)("div", {
                    className: s()(f().navItem, f().accordion),
                    onClick: h(_, 500),
                    children: [
                      (0, r.jsx)("span", { children: n }),
                      (0, r.jsx)(p.default, {
                        alt: "menu",
                        src: "/icons/keyboard_arrow_down.webp",
                        width: 20,
                        height: 20,
                        className: s()({ [f().turned]: l }),
                      }),
                    ],
                  }),
                  (0, r.jsx)("div", {
                    className: s()(f().accordionWrap, {
                      [f().accordionOpen]: l,
                    }),
                    children: (0, r.jsx)("div", {
                      className: s()(f().accordionContent, {
                        [f().spaceBottom]: l && a,
                      }),
                      children: i,
                    }),
                  }),
                ],
              })
            : (0, r.jsxs)(r.Fragment, {
                children: [
                  (0, r.jsxs)("div", {
                    className: s()(f().navItem, f().accordion),
                    onClick: h(_, 500),
                    children: [
                      (0, r.jsx)("span", { children: n }),
                      (0, r.jsx)(p.default, {
                        alt: "menu",
                        src: "/icons/keyboard_arrow_down.webp",
                        width: 20,
                        height: 20,
                        className: s()({ [f().turned]: l }),
                      }),
                    ],
                  }),
                  (0, r.jsx)("div", {
                    className: s()(f().accordionWrap, {
                      [f().accordionOpen]: l,
                    }),
                    children: (0, r.jsx)("div", {
                      className: s()(f().accordionContent, {
                        [f().spaceBottom]: l && a,
                      }),
                      children:
                        t &&
                        t.map((e, t) =>
                          e.isLocked
                            ? (0, r.jsxs)(
                                "div",
                                {
                                  className: s()(f().navItem, f().accordion),
                                  children: [
                                    e.title,
                                    (0, r.jsx)(p.default, {
                                      src: "/icons/lock.webp",
                                      alt: "locked",
                                      width: 12,
                                      height: 12,
                                      className: f().icon,
                                      priority: !0,
                                    }),
                                  ],
                                },
                                t + e.title
                              )
                            : (0, r.jsx)(
                                "a",
                                {
                                  href: e.href,
                                  className: f().navItem,
                                  target:
                                    "/" == e.href.split("")[0]
                                      ? "_self"
                                      : "_blank",
                                  children: e.title,
                                },
                                t + e.title
                              )
                        ),
                    }),
                  }),
                ],
              }),
        });
      };
      var v = n(98421),
        g = n(51757),
        j = n.n(g);
      let w = (e) => {
        let { isMenuOpen: t, isMenuDark: n, onClick: o } = e;
        return (0, r.jsxs)("button", {
          className: s()(j().menuButton, { [j().lightBG]: n }),
          onClick: o,
          children: [
            (0, r.jsx)("div", {
              className: s()(j().line1, { [j().line1Cross]: t, [j().dark]: n }),
            }),
            (0, r.jsx)("div", {
              className: s()(j().line2, { [j().line2Cross]: t, [j().dark]: n }),
            }),
            (0, r.jsx)("div", {
              className: s()(j().line3, { [j().line3Cross]: t, [j().dark]: n }),
            }),
          ],
        });
      };
      var b = n(49844),
        D = n.n(b);
      let k = (e) => {
        let { dropDownObject: t } = e;
        return (0, r.jsx)("ul", {
          className: D().navDropDown,
          children: t.map((e, t) =>
            e.href
              ? (0, r.jsx)(
                  "a",
                  {
                    href: e.href,
                    target: "/" == e.href.split("")[0] ? "_self" : "_blank",
                    children: (0, r.jsx)("div", {
                      className: D().dropDownItem,
                      children: (0, r.jsx)(u.default, { text: e.title }),
                    }),
                  },
                  "link-".concat(t, "-").concat(e.title)
                )
              : (0, r.jsxs)(
                  "div",
                  {
                    className: D().dropDownItem,
                    children: [
                      (0, r.jsx)(u.default, { text: e.title }),
                      e.subElements &&
                        (0, r.jsx)(p.default, {
                          alt: "menu",
                          src: "/icons/keyboard_arrow_down.webp",
                          width: 20,
                          height: 20,
                          className: D().sublinkArrow,
                          priority: !0,
                        }),
                      e.isLocked &&
                        (0, r.jsx)(p.default, {
                          src: "/icons/lock.webp",
                          alt: "locked",
                          width: 12,
                          height: 12,
                          className: D().icon,
                          priority: !0,
                        }),
                      e.subElements &&
                        (0, r.jsx)("ul", {
                          className: D().secondLevelNav,
                          children: e.subElements.map((e, t) =>
                            e.isLocked
                              ? (0, r.jsxs)(
                                  "div",
                                  {
                                    className: D().dropDownItem,
                                    children: [
                                      (0, r.jsx)(u.default, { text: e.title }),
                                      (0, r.jsx)(p.default, {
                                        src: "/icons/lock.webp",
                                        alt: "locked",
                                        width: 12,
                                        height: 12,
                                        className: s()(D().secondLevelIcon),
                                        priority: !0,
                                      }),
                                    ],
                                  },
                                  "sublink-locked-"
                                    .concat(t, "-")
                                    .concat(e.title)
                                )
                              : (0, r.jsx)(
                                  "a",
                                  {
                                    target:
                                      "/" == e.href.split("")[0]
                                        ? "_self"
                                        : "_blank",
                                    href: e.href,
                                    children: (0, r.jsx)("div", {
                                      className: D().dropDownItem,
                                      children: (0, r.jsx)(u.default, {
                                        text: e.title,
                                      }),
                                    }),
                                  },
                                  "sublink-".concat(t, "-").concat(e.title)
                                )
                          ),
                        }),
                    ],
                  },
                  "dropdown-".concat(t, "-").concat(e.title)
                )
          ),
        });
      };
      var N = n(46256),
        I = n.n(N);
      let C = (e) => {
          let { dropDownObject: t } = e,
            n = (e) => {
              let t = e.toLowerCase();
              return t.includes("interoperability")
                ? "/images/header/uip_2x.webp"
                : t.includes("data feeds")
                ? "/images/header/udf_2x.webp"
                : t.includes("blink")
                ? "/images/header/blink_2x.webp"
                : t.includes("token")
                ? "/images/header/uts_2x.webp"
                : t.includes("compute")
                ? "/images/header/upc_2x.webp"
                : t.includes("bridge")
                ? "/images/header/photon_2x.webp"
                : t.includes("enterprize")
                ? "/images/header/enterprize_2x.webp"
                : "";
            },
            o = (e, t) => {
              let o =
                e.title.includes("BLINK Feeds") ||
                e.title.includes("Universal Proof of Compute");
              return e.href
                ? (0, r.jsxs)(l.default, {
                    href: e.href || "#",
                    target:
                      e.href && e.href.startsWith("/") ? "_self" : "_blank",
                    className: ""
                      .concat(I().navItem, " ")
                      .concat(o ? I().comingSoon : ""),
                    children: [
                      (0, r.jsx)("img", {
                        src: n(e.title),
                        alt: e.title,
                        className: I().icon,
                      }),
                      (0, r.jsxs)("div", {
                        className: I().content,
                        children: [
                          (0, r.jsx)("div", {
                            className: I().title,
                            children: e.title,
                          }),
                          (0, r.jsx)("div", {
                            className: I().description,
                            children: t,
                          }),
                        ],
                      }),
                    ],
                  })
                : (0, r.jsxs)("div", {
                    className: ""
                      .concat(I().navItem, " ")
                      .concat(o ? I().comingSoon__inactive : ""),
                    children: [
                      (0, r.jsx)("img", {
                        src: n(e.title),
                        alt: e.title,
                        className: I().icon,
                      }),
                      (0, r.jsxs)("div", {
                        className: I().content,
                        children: [
                          (0, r.jsx)("div", {
                            className: I().title,
                            children: e.title,
                          }),
                          (0, r.jsx)("div", {
                            className: I().description,
                            children: t,
                          }),
                        ],
                      }),
                    ],
                  });
            },
            i = (e, t) =>
              (0, r.jsxs)("div", {
                className: I().column,
                children: [
                  (0, r.jsx)("h3", { className: I().columnTitle, children: e }),
                  t.map((e, t) => {
                    let [n, i] = e;
                    return (0, r.jsx)(
                      "div",
                      { children: o(n, i) },
                      t + n.title
                    );
                  }),
                ],
              }),
            s = [
              [
                t.find((e) => e.title.includes("Interoperability Protocol")),
                "The framework to connect data, assets and dApps across all blockchains.",
              ],
              [
                t.find((e) => e.title.includes("Token Standard")),
                "Create and scale interoperable tokens with omnichain liquidity and programmable utility.",
              ],
            ].filter((e) => void 0 !== e[0]),
            a = [
              [
                t.find((e) => e.title.includes("Data Feeds")),
                "Access ultra-fast, verifiable on-chain and off- chain data for all types of applications.",
              ],
              [
                t.find((e) => e.title.includes("BLINK")),
                "Zero latency, secure and interoperable data supporting next-gen finance, gaming, predictions and more.",
              ],
            ].filter((e) => void 0 !== e[0]),
            c = [
              [t.find((e) => e.title.includes("Proof of Compute")), ""],
            ].filter((e) => void 0 !== e[0]),
            d = [
              [
                t.find((e) => e.title.includes("Bridge")),
                "The trustless portal for fast, secure token and NFT transfers across all blockchains.",
              ],
              [
                t.find((e) => e.title.includes("Enterprize")),
                "Tools to transition your business from the real world on-chain.",
              ],
            ].filter((e) => void 0 !== e[0]);
          return (0, r.jsxs)("div", {
            className: I().columnsContainer,
            children: [
              (0, r.jsxs)("div", {
                className: I().twoColumns,
                children: [i("Omnichain Communication", s), i("Data", a)],
              }),
              (0, r.jsxs)("div", {
                className: I().twoColumns,
                children: [i("Compute", c), i("More", d)],
              }),
            ],
          });
        },
        y = [
          {
            title: "Universal Interoperability Protocol",
            href: "/uip",
            subElements: [
              { title: "/learn more", href: "/uip" },
              { title: "/explorer", href: "https://app.entanglexplai.xyz/msg" },
              {
                title: "/docs",
                href: "https://docs.entanglexplai.xyz/entangle-components/photon-messaging",
              },
            ],
          },
          {
            title: "Universal Data Feeds",
            href: "/udf",
            subElements: [
              { title: "/learn more", href: "/udf" },
              { title: "/live feeds", href: "https://udf.entangle.fi/" },
              {
                title: "/docs",
                href: "https://docs.entanglexplai.xyz/entangle-components/universal-data-feeds",
              },
            ],
          },
          { title: "Universal Proof of Compute", href: "" },
          {
            title: "Photon Bridge",
            href: "https://photonbridge.io",
            subElements: [
              { title: "/BRIDGE NOW", href: "https://app.entanglexplai.xyz" },
              { title: "/docs", href: "", isLocked: !0 },
            ],
          },
          { title: "Enterprize", href: "/enterprize" },
        ],
        L = [
          {
            title: "",
            href: "",
          },
        ],
        B = [
          {
            title: "/ENGLISH",
            href: "/documents/litepaper.pdf",
            target:"_blank"
          },
         
        ],
        S = [
          { title: "/gitbook", href: "https://docs.entanglexplai.xyz/" },
        ],
        T = [
          { title: "/TWITTER", href: "https://x.com/entanglexplai" },
          { title: "/TELEGRAM", href: "https://t.me/entanglexplai" },
        ],
        E = [
          { hoverColor: "red", text: "/products", isDropDown: !0 },
          {
            hoverColor: "blue",
            text: "/developers",
            href: "https://docs.entanglexplai.xyz/",
          },
          { hoverColor: "green", text: "/ecosystem", href: "/ecosystem" },
          { hoverColor: "purple", text: "/community", isDropDown: !0 },
          { hoverColor: "yellow", text: "/docs", isDropDown: !0 },
        ];
      var W = n(12896),
        A = n.n(W);
      let P = (e) => {
        let { isDarkProps: t = !1 } = e,
          n = (0, a.useParams)(),
          [i, c] = (0, o.useState)(!1),
          [d, p] = (0, o.useState)(!1);
        return (
          (0, o.useEffect)(() => {
            i
              ? (p(!0), (document.body.style.overflowY = "hidden"))
              : (p(!1), (document.body.style.overflowY = "initial"));
          }, [i]),
          (0, o.useEffect)(() => {
            c(!1);
          }, [n]),
          (0, o.useEffect)(() => {
            p(t);
          }, [t]),
          (0, r.jsxs)("header", {
            className: s()(A().root, { [A().dark]: d }),
            children: [
              (0, r.jsx)(l.default, {
                href: "/",
                children: (0, r.jsx)(v.a, { isDark: d }),
              }),
              (0, r.jsx)("div", {
                className: A().linesWrap,
                children: (0, r.jsx)(_.Z, { amount: 15, isDark: d }),
              }),
              (0, r.jsx)("nav", {
                className: s()(A().navigation),
                children: E.map((e, t) =>
                  (0, r.jsxs)(
                    "div",
                    {
                      className: A().navigationItem,
                      children: [
                        (0, r.jsx)(h, {
                          hoverColor: e.hoverColor,
                          text: e.text,
                          isDropDown: e.isDropDown,
                          href: e.href,
                          isDark: d,
                        }),
                        (0, r.jsxs)("div", {
                          children: [
                            "/products" === e.text &&
                              (0, r.jsx)("div", {
                                className: A().productsDropDown,
                                children: (0, r.jsx)(C, { dropDownObject: y }),
                              }),
                            "/docs" === e.text &&
                              (0, r.jsx)("div", {
                                className: A().navDropDown,
                                children: (0, r.jsx)(k, { dropDownObject: S }),
                              }),
                            "/community" === e.text &&
                              (0, r.jsx)("div", {
                                className: A().navDropDown,
                                children: (0, r.jsx)(k, { dropDownObject: T }),
                              }),
                          ],
                        }),
                      ],
                    },
                    t + e.text
                  )
                ),
              }),
              (0, r.jsx)("div", {
                className: A().linesWrap,
                children: (0, r.jsx)(_.Z, { amount: 15, isDark: d }),
              }),
              (0, r.jsxs)("div", {
                className: A().rightMenu,
                children: [
                  (0, r.jsx)(l.default, {
                    target: "_blank",
                    href: "https://app.entanglexplai.xyz/",
                    className: s()(A().buttonChanging, { [A().inverted]: d }),
                    children: (0, r.jsx)(u.default, { text: "[STAKE EAI]" }),
                  }),
                  (0, r.jsx)(w, {
                    isMenuOpen: i,
                    isMenuDark: d,
                    onClick: () => {
                      c(!i);
                    },
                  }),
                ],
              }),
              (0, r.jsxs)("div", {
                className: s()(A().sider, { [A().show]: i }),
                children: [
                  (0, r.jsx)(x, {
                    label: "/products",
                    children: (0, r.jsx)(C, { dropDownObject: y }),
                  }),
                  (0, r.jsx)("br", {}),
                  (0, r.jsx)(l.default, {
                    href: "https://docs.entanglexplai.xyz/",
                    target: "_blank",
                    className: A().navItem,
                    children: "/developers",
                  }),
                  (0, r.jsx)("br", {}),
                  (0, r.jsx)(l.default, {
                    href: "/ecosystem",
                    target: "_self",
                    className: A().navItem,
                    children: "/ecosystem",
                  }),
                  (0, r.jsx)("br", {}),
                  (0, r.jsx)(x, { label: "/community", accordionTabs: T }),
                  (0, r.jsx)("br", {}),
                  (0, r.jsx)(l.default, {
                    href: "https://docs.entanglexplai.xyz/",
                    target: "_blank",
                    className: A().navItem,
                    children: "/gitbook",
                  }),
                  (0, r.jsx)("br", {}),
                ],
              }),
            ],
          })
        );
      };
    },
    98421: function (e, t, n) {
      "use strict";
      n.d(t, {
        a: function () {
          return l;
        },
      });
      var r = n(3827),
        o = n(16480),
        i = n.n(o),
        s = n(89353),
        a = n.n(s);
      let l = (e) => {
        let { isDark: t = !1 } = e;
        return (0, r.jsx)(r.Fragment, {
          children: (0, r.jsxs)("div", {
            className: a().logoBlock,
            children: [
              (0, r.jsx)("div", {
                className: i()(a().logoWrap, { [a().dark]: t }),
                children: (0, r.jsx)("img", {
                  alt: "menu",
                  src: "/icons/entangle-icon.webp",
                  width: 32,
                  height: 16,
                }),
              }),
              (0, r.jsx)("div", {
                className: i()(a().titleWrap, { [a().dark]: t }),
                children: (0, r.jsx)("img", {
                  alt: "menu",
                  src: "/icons/entangle-title.webp",
                  width: 98,
                  height: 32,
                }),
              }),
            ],
          }),
        });
      };
    },
    44911: function (e, t, n) {
      "use strict";
      n.r(t);
      var r = n(3827),
        o = n(64090),
        i = n(98119),
        s = n.n(i);
      t.default = (e) => {
        let { text: t } = e,
          [n, i] = (0, o.useState)(t),
          [a, l] = (0, o.useState)(0),
          c = (0, o.useRef)(null),
          d = (0, o.useRef)(null),
          [u, h] = (0, o.useState)(!1),
          _ = (e) => {
            for (
              let t, n, r = e.length;
              r;
              t = Math.floor(Math.random() * r),
                n = e[--r],
                e[r] = e[t],
                e[t] = n
            );
            return e;
          },
          p = (e) => {
            let t = Array.from(e),
              n = [...t],
              r = 0;
            h(!0), d.current && l(d.current.offsetWidth);
            let o = (s) => {
              if (r === s) {
                i(e);
                return;
              }
              c.current = setTimeout(() => {
                n = _([...t]);
                for (let e = 0; e < r; e++) n[e] = t[e];
                i(n.join("")), r++, o(s);
              }, 50);
            };
            o(e.length);
          },
          m = () => {
            h(!1), c.current && clearTimeout(c.current), i(t);
          };
        return (
          (0, o.useEffect)(() => {
            d.current && l(d.current.offsetWidth);
          }, [t]),
          (0, r.jsx)("div", {
            ref: d,
            className: s().textContainer,
            style: {
              minWidth: u ? "".concat(a, "px") : "inherit",
              maxWidth: u ? "".concat(a, "px") : "inherit",
            },
            onMouseEnter: () => p(t),
            onMouseLeave: m,
            onTouchStart: () => {
              p(t);
            },
            onTouchEnd: () => {
              m();
            },
            children: n,
          })
        );
      };
    },
    64374: function (e, t, n) {
      "use strict";
      var r = n(3827),
        o = n(16480),
        i = n.n(o),
        s = n(55943),
        a = n.n(s);
      t.Z = function (e) {
        let { amount: t, isDark: n = !1, isGray: o = !1 } = e,
          s = [];
        for (let e = 0; e < t; e++)
          s.push(
            (0, r.jsx)(
              "div",
              {
                className: i()(a().verticalLine, {
                  [a().light]: !0 === n,
                  [a().gray]: !0 === o,
                }),
              },
              e
            )
          );
        return (0, r.jsx)("div", { className: a().linesWrap, children: s });
      };
    },
    49844: function (e) {
      e.exports = {
        navDropDown: "DropDown_navDropDown__iRLIq",
        dropDownItem: "DropDown_dropDownItem__n1vHJ",
        sublinkArrow: "DropDown_sublinkArrow__z8gWr",
        icon: "DropDown_icon__Eimnf",
        secondLevelNav: "DropDown_secondLevelNav__c_4Yo",
        secondLevelIcon: "DropDown_secondLevelIcon__YHoYT",
      };
    },
    12896: function (e) {
      e.exports = {
        dark: "Header_dark__9zLTS",
        root: "Header_root__dajRA",
        sider: "Header_sider__KTPh9",
        navDropDown: "Header_navDropDown__fLDK8",
        navigation: "Header_navigation__xafT3",
        navigationItem: "Header_navigationItem__sCirO",
        productsDropDown: "Header_productsDropDown__IeLUc",
        linesWrap: "Header_linesWrap__9dD8r",
        rightMenu: "Header_rightMenu__BqQdT",
        buttonChanging: "Header_buttonChanging__Yh0sG",
        inverted: "Header_inverted__juiRX",
        icon: "Header_icon__POuA8",
        vanish: "Header_vanish__6XspD",
        navItem: "Header_navItem__Ahrex",
        show: "Header_show__Q9a3r",
        showUp: "Header_showUp__i4yuY",
      };
    },
    51757: function (e) {
      e.exports = {
        menuButton: "MenuButton_menuButton__rM2LO",
        line1: "MenuButton_line1__zzgyA",
        line2: "MenuButton_line2__aRvId",
        line3: "MenuButton_line3___r7Q6",
        dark: "MenuButton_dark__HrXRA",
        line1Cross: "MenuButton_line1Cross__AXQbT",
        line2Cross: "MenuButton_line2Cross__O9Cvr",
        line3Cross: "MenuButton_line3Cross__EsRfN",
        lightBG: "MenuButton_lightBG__2JpyB",
      };
    },
    46256: function (e) {
      e.exports = {
        columnsContainer: "ProductsDropDown_columnsContainer__NscEW",
        twoColumns: "ProductsDropDown_twoColumns__YFxTK",
        column: "ProductsDropDown_column__rlla1",
        columnTitle: "ProductsDropDown_columnTitle__Ib4bY",
        navItem: "ProductsDropDown_navItem__rwT9Q",
        comingSoon: "ProductsDropDown_comingSoon__zKfh_",
        title: "ProductsDropDown_title__2Szjr",
        comingSoon__inactive: "ProductsDropDown_comingSoon__inactive__vJifV",
        content: "ProductsDropDown_content__nKUCR",
        icon: "ProductsDropDown_icon__Zc64a",
        description: "ProductsDropDown_description__L_xaA",
      };
    },
    23200: function (e) {
      e.exports = {
        dark: "SiderAccordion_dark__eb1Nq",
        accordion: "SiderAccordion_accordion__RbPXI",
        icon: "SiderAccordion_icon__owELq",
        spaceBottom: "SiderAccordion_spaceBottom__bomBy",
        turned: "SiderAccordion_turned__JM9qB",
        accordionWrap: "SiderAccordion_accordionWrap__EVPK4",
        accordionContent: "SiderAccordion_accordionContent__tTSYL",
        accordionOpen: "SiderAccordion_accordionOpen__ivz4L",
        navItem: "SiderAccordion_navItem__wmm_u",
      };
    },
    89353: function (e) {
      e.exports = {
        logoBlock: "LogoBlock_logoBlock__2HjqU",
        logoWrap: "LogoBlock_logoWrap__v_owP",
        titleWrap: "LogoBlock_titleWrap__5rAZj",
        dark: "LogoBlock_dark__aVKvB",
      };
    },
    56306: function (e) {
      e.exports = {
        buttonLink: "NavItem_buttonLink__VRClH",
        red: "NavItem_red__VqUqh",
        green: "NavItem_green__eiSzz",
        blue: "NavItem_blue__B1dH1",
        purple: "NavItem_purple__FiTjn",
        orange: "NavItem_orange__nabqL",
        yellow: "NavItem_yellow__xD35R",
        dark: "NavItem_dark___KAyk",
        arrowIcon: "NavItem_arrowIcon__eViuD",
        inverted: "NavItem_inverted__BRgge",
      };
    },
    98119: function (e) {
      e.exports = { textContainer: "ShufflingText_textContainer__CNwDb" };
    },
    55943: function (e) {
      e.exports = {
        verticalLine: "VerticalSticks_verticalLine__bT_r2",
        linesWrap: "VerticalSticks_linesWrap__S1KTS",
        light: "VerticalSticks_light__IaM2_",
        gray: "VerticalSticks_gray__u4nRY",
      };
    },
  },
]);
