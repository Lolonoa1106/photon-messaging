(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [598],
  {
    95904: function (e, s, t) {
      "use strict";
      t.r(s);
      var i = t(3827),
        n = t(64090),
        a = t(16480),
        c = t.n(a),
        o = t(99164),
        r = t(55578),
        l = t(85364),
        _ = t(55922),
        d = t(75298),
        u = t(20703),
        m = t(58856),
        b = t(65065),
        h = t(40689),
        p = t.n(h),
        x = t(64007);
      s.default = (e) => {
        let { cases: s, footer: t, title: a, loop: h = !0, description: j } = e,
          { isMobile: f } = (0, x.a)(),
          v = (0, n.useRef)(null),
          k = s.length,
          { scrollYProgress: C } = (0, o.v)({
            target: v,
            offset: ["start start", "end end"],
          }),
          g = (0, r.H)(
            C,
            Array.from({ length: k }, (e, s) => s / (k - 1)),
            Array.from({ length: k }, (e, s) => s)
          ),
          [w, N] = (0, n.useState)(0);
        (0, l.W)(g, "change", (e) => {
          N(Math.round(e));
        });
        let B = (0, n.useRef)(null),
          S = (e) => {
            let s = v.current;
            if (s) {
              let t = s.getBoundingClientRect().top + window.scrollY,
                i = e * window.innerHeight * 0.8;
              window.scrollTo({ top: t + i, behavior: "smooth" });
            }
          };
        return (
          (0, n.useEffect)(() => {
            if (C.get() > 0 && B.current) {
              let e = new IntersectionObserver(
                (e) => {
                  if (e[0].isIntersecting) {
                    var s;
                    let e =
                      null === (s = B.current) || void 0 === s
                        ? void 0
                        : s.querySelector(".".concat(p().active));
                    null == e ||
                      e.scrollIntoView({
                        behavior: "smooth",
                        block: "nearest",
                      });
                  }
                },
                { threshold: 0.1 }
              );
              return (
                e.observe(B.current),
                () => {
                  B.current && e.unobserve(B.current);
                }
              );
            }
          }, [w]),
          (0, i.jsx)("div", {
            ref: v,
            style: { height: "calc(80dvh * ".concat(k, ")") },
            className: p().slickContainer,
            children: (0, i.jsx)(_.E.section, {
              className: c()(p().section, "UseCases__container", {
                [p().overload]: s.length > 6,
              }),
              children: (0, i.jsx)("div", {
                className: p().section_content,
                children: (0, i.jsx)("div", {
                  className: p().section_ContentWrapper,
                  style: { backgroundColor: s[w].bgColor, color: s[w].color },
                  children: (0, i.jsxs)("div", {
                    className: p().section_wrapper,
                    children: [
                      !f && (0, i.jsx)(b.Z, {}),
                      (0, i.jsxs)("div", {
                        className: p().section_text,
                        children: [
                          (0, i.jsxs)("div", {
                            className: p().heading,
                            children: [
                              (0, i.jsx)("h2", {
                                className: p().title,
                                children: a || "USE CASES",
                              }),
                              (0, i.jsx)("p", {
                                className: p().text,
                                children:
                                  j ||
                                  "Deploy Once, Achieve Global Abstraction",
                              }),
                            ],
                          }),
                          (0, i.jsxs)("ul", {
                            className: p().tabs,
                            ref: B,
                            children: [
                              s.map((e, t) =>
                                (0, i.jsxs)(
                                  _.E.li,
                                  {
                                    className: c()(p().tabs_item, {
                                      [p().active]: w === t,
                                    }),
                                    onClick: () => {
                                      S(t);
                                    },
                                    children: [
                                      (0, i.jsxs)("div", {
                                        className: p().tabs_item__title,
                                        style: {
                                          color:
                                            w === t ? s[w].bgColor : s[w].color,
                                          backgroundColor:
                                            w === t
                                              ? s[w].color
                                              : "transparent",
                                        },
                                        children: [
                                          e.title,
                                          (0, i.jsx)("div", {
                                            className: p().tabs_item__marker,
                                            style: {
                                              backgroundColor: s[w].color,
                                            },
                                          }),
                                        ],
                                      }),
                                      (0, i.jsx)("div", {
                                        className: p().tabs_item__content,
                                        children: (0, i.jsx)("div", {
                                          children: e.content,
                                        }),
                                      }),
                                    ],
                                  },
                                  t
                                )
                              ),
                              t &&
                                (0, i.jsx)(_.E.li, {
                                  className: p().tabs_item,
                                  children: (0, i.jsxs)("div", {
                                    className: c()(
                                      p().tabs_item__title,
                                      p().tabs_footer
                                    ),
                                    children: [
                                      t,
                                      (0, i.jsx)("div", {
                                        className: p().tabs_item__marker,
                                        style: { backgroundColor: s[w].color },
                                      }),
                                    ],
                                  }),
                                }),
                            ],
                          }),
                        ],
                      }),
                      (0, i.jsx)("div", {
                        className: p().section_animation,
                        children: (0, i.jsx)(m.Z, {
                          corners: !1,
                          columns: 12,
                          rows: 13,
                          children: (0, i.jsxs)("div", {
                            className: p().section_animation__wrapper,
                            children: [
                              s[w].animation &&
                                (0, i.jsx)(_.E.div, {
                                  className: c()(p().section_animation__lottie),
                                  style: {
                                    width: "100%",
                                    overflow: "hidden",
                                    filter:
                                      "var(--neutral-600)" === s[w].bgColor
                                        ? "invert(1)"
                                        : "none",
                                  },
                                  children: (0, i.jsx)(d.q, {
                                    animationData: s[w].animation,
                                    loop: h,
                                  }),
                                }),
                              !s[w].animation &&
                                (0, i.jsx)(
                                  u.default,
                                  {
                                    className: p().section_animation__image,
                                    src:
                                      s[w].image ||
                                      "/images/main/usecases_1.svg",
                                    fill: !0,
                                    alt: "",
                                  },
                                  w
                                ),
                            ],
                          }),
                        }),
                      }),
                    ],
                  }),
                }),
              }),
            }),
          })
        );
      };
    },
    68711: function (e, s, t) {
      "use strict";
      t.r(s),
        t.d(s, {
          default: function () {
            return j;
          },
        });
      var i = t(3827),
        n = t(56401),
        a = t(26921),
        c = t.n(a),
        o = (e) => {
          let {
            titleRow1: s = "Get the ENTANGLE AI",
            titleRow2: t = "updates",
            buttonLabel: a,
            onButtonClick: o,
          } = e;
          return (0, i.jsxs)("div", {
            className: c().subscribe,
            children: [
              (0, i.jsxs)("div", {
                className: c().subscribe_title,
                children: [
                  s
                    .split(" ")
                    .map((e, s) =>
                      (0, i.jsxs)(
                        "span",
                        { className: c().word, children: [e, " "] },
                        s
                      )
                    ),
                  (0, i.jsx)("br", {}),
                  t &&
                    t
                      .split(" ")
                      .map((e, s) =>
                        (0, i.jsxs)(
                          "span",
                          { className: c().word, children: [e, " "] },
                          s
                        )
                      ),
                ],
              }),
              (0, i.jsx)(n.default, {
                type: "submit",
                onClick: o,
                children: a,
              }),
            ],
          });
        },
        r = t(20703),
        l = t(8792),
        _ = t(2633),
        d = t.n(_),
        u = t(64090),
        m = () => (
          (0, u.useEffect)(() => {
            let e = document.createElement("script");
            (e.src =
              "https://cdn.jsdelivr.net/ghost/signup-form@~0.2/umd/signup-form.min.js"),
              e.setAttribute("data-button-color", "#141416"),
              e.setAttribute("data-button-text-color", "#FFFFFF"),
              e.setAttribute("data-site", "https://blog.entangle.fi/"),
              (e.async = !0);
            let s = document.getElementById("gh-signup");
            return (
              s && s.appendChild(e),
              () => {
                s && s.removeChild(e);
              }
            );
          }, []),
          (0, i.jsxs)("div", {
            className: d().subscribe,
            children: [
              (0, i.jsx)("div", {
                className: d().buttons_social_wrapper,
                children: (0, i.jsxs)("div", {
                  className: d().buttons_social,
                  children: [
                    (0, i.jsx)(l.default, {
                      href: "https://x.com",
                      target: "_blank",
                      children: (0, i.jsx)(n.default, {
                        size: "small",
                        children: (0, i.jsx)("div", {
                          className: d().iconWrapper,
                          children: (0, i.jsx)(r.default, {
                            src: "/images/icons/x.svg",
                            alt: "twitter",
                            fill: !0,
                          }),
                        }),
                      }),
                    }),
                  ],
                }),
              }),
              (0, i.jsxs)("div", {
                className: d().subscribe_title,
                children: [
                  (0, i.jsx)("span", { children: "GET" }),
                  (0, i.jsx)("span", { children: "THE" }),
                  (0, i.jsx)("span", { children: "ENTANGLE AI" }),
                  (0, i.jsx)("br", {}),
                  (0, i.jsx)("span", { children: "Updates" }),
                ],
              }),
              (0, i.jsx)("div", {
                style: { height: "52px", width: "100%" },
                id: "gh-signup",
              }),
            ],
          })
        ),
        b = t(95052),
        h = t.n(b),
        p = t(18160),
        x = t(25370),
        j = (e) => {
          let {
              titleRow1: s,
              titleRow2: t,
              buttonLabel: n,
              onButtonClick: a,
            } = e,
            [c, r] = (0, u.useState)(!1);
          return (0, i.jsx)("section", {
            className: h().section,
            children: (0, i.jsxs)("div", {
              className: "BlockSocials__container",
              children: [
                c &&
                  (0, i.jsx)(x.Z, {
                    isModalOpen: !0,
                    closeModal: () => r(!1),
                    children: (0, i.jsx)(p.Z, { setCloseModal: () => r(!1) }),
                  }),
                (0, i.jsxs)("div", {
                  className: h().wrapper,
                  children: [
                    (0, i.jsx)("div", { className: h().slogan }),
                    (0, i.jsxs)("div", {
                      className: h().content,
                      children: [
                        (0, i.jsx)(o, {
                          titleRow1: s,
                          titleRow2: t,
                          buttonLabel: n,
                          onButtonClick:
                            null != a
                              ? a
                              : () => {
                                  r(!0);
                                },
                        }),
                        (0, i.jsx)(m, {}),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          });
        };
    },
    1778: function (e, s, t) {
      "use strict";
      t.d(s, {
        h: function () {
          return i.Header;
        },
      });
      var i = t(96607);
    },
    64007: function (e, s, t) {
      "use strict";
      t.d(s, {
        a: function () {
          return n;
        },
      });
      var i = t(41124);
      let n = () => {
        let e = (0, i.ac)({ query: "(max-width: 480px)" }),
          s = (0, i.ac)({
            query: "(min-width: 480px) and (max-width: 1024px)",
          });
        return {
          isMobile: e,
          isMobileBig: (0, i.ac)({
            query: "(min-width: 480px) and (max-width: 768px)",
          }),
          isTablet: s,
          isDesktop: !e && !s,
        };
      };
    },
    40689: function (e) {
      e.exports = {
        slickContainer: "BlockCases_slickContainer__xw_hP",
        section: "BlockCases_section__nkb5T",
        section_ContentWrapper: "BlockCases_section_ContentWrapper__hJPpY",
        section_content: "BlockCases_section_content__2ABIH",
        section_wrapper: "BlockCases_section_wrapper__8ent0",
        section_text: "BlockCases_section_text__iknt0",
        section_animation__lottie:
          "BlockCases_section_animation__lottie__FX6du",
        section_animation: "BlockCases_section_animation__fd1Dz",
        section_animation__wrapper:
          "BlockCases_section_animation__wrapper__UQQfc",
        bounceWidth: "BlockCases_bounceWidth__1i9ZC",
        heading: "BlockCases_heading__c5kVt",
        title: "BlockCases_title__wGr_a",
        text: "BlockCases_text__NnCWG",
        tabs: "BlockCases_tabs__nWtw0",
        tabs_item: "BlockCases_tabs_item__TGSda",
        tabs_item__title: "BlockCases_tabs_item__title__iaTeK",
        tabs_item__marker: "BlockCases_tabs_item__marker__khzFU",
        tabs_item__content: "BlockCases_tabs_item__content__Wt5Ct",
        tabs_footer: "BlockCases_tabs_footer__ySoh4",
        active: "BlockCases_active__wWyc1",
      };
    },
    95052: function (e) {
      e.exports = {
        section: "BlockSocials_section__ynHsd",
        wrapper: "BlockSocials_wrapper__8m5i_",
        content: "BlockSocials_content__MdB9E",
      };
    },
    26921: function (e) {
      e.exports = {
        subscribe: "SocialsCTA_subscribe__uHt3a",
        subscribe_title: "SocialsCTA_subscribe_title__ja6_M",
        word: "SocialsCTA_word__DGwcH",
      };
    },
    2633: function (e) {
      e.exports = {
        subscribe: "SubscriptionForm_subscribe__1AZtm",
        subscribe_title: "SubscriptionForm_subscribe_title__LRzSB",
        subscribe_form: "SubscriptionForm_subscribe_form__ja5pK",
        subscribe_button: "SubscriptionForm_subscribe_button__0M3oP",
        buttons_social_wrapper:
          "SubscriptionForm_buttons_social_wrapper___dn3Q",
        buttons_social: "SubscriptionForm_buttons_social__YQRu9",
        iconWrapper: "SubscriptionForm_iconWrapper__Gzm4t",
      };
    },
  },
]);
