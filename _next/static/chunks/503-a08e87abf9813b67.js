(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [503],
  {
    18160: function (e, t, s) {
      "use strict";
      var n = s(3827),
        a = s(64090),
        r = s(20703),
        o = s(16480),
        i = s.n(o),
        l = s(41991),
        c = s(58856),
        d = s(56401),
        m = s(26424),
        u = s.n(m),
        _ = s(64374);
      let h = l.Ry({
        email: l
          .Z_()
          .email("Invalid email address")
          .required("E-Mail address is required"),
        subject: l.Z_().required("Subject is required"),
        message: l.Z_().required("Message is required"),
      });
      t.Z = (e) => {
        let { setCloseModal: t, banner: s = !0 } = e,
          [o, m] = (0, a.useState)({ email: "", subject: "", message: "" }),
          [p, g] = (0, a.useState)(!1),
          [x, f] = (0, a.useState)(!1),
          [v, j] = (0, a.useState)(!0),
          b = (e) => {
            let { name: t, value: s } = e.target;
            m((e) => ({ ...e, [t]: s }));
          },
          C = (e) => /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(e),
          y = async (e) => {
            e.preventDefault();
            try {
              if (
                (await h.validate(o, { abortEarly: !1 }),
                g(!0),
                j(!0),
                !C(o.email))
              ) {
                j(!1);
                return;
              }
              (
                await fetch("/api/telegram", {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify({
                    text: "Message from: "
                      .concat(o.email, "\nTitle: ")
                      .concat(o.subject, "\nMessage: ")
                      .concat(o.message),
                  }),
                })
              ).ok
                ? (f(!0),
                  m({ email: "", subject: "", message: "" }),
                  setTimeout(() => {
                    t();
                  }, 2e3))
                : console.error("Failed to send the message");
            } catch (e) {
              l.p8, console.error("An error occurred:", e);
            } finally {
              g(!1);
            }
          };
        return (0, n.jsxs)("div", {
          className: u().content,
          children: [
            s &&
              (0, n.jsxs)(n.Fragment, {
                children: [
                  (0, n.jsxs)("div", {
                    className: u().wordWrapper,
                    children: [
                      (0, n.jsx)("span", {
                        className: u().word,
                        children: "Contact",
                      }),
                      (0, n.jsx)("span", {
                        className: u().word,
                        children: "us",
                      }),
                    ],
                  }),
                  (0, n.jsx)("div", {
                    className: u().animationWrapper,
                    children: (0, n.jsx)(c.Z, {
                      columns: 4,
                      children: (0, n.jsx)(r.default, {
                        className: u().animation,
                        src: "/images/main/noise-feed.webp",
                        width: 556,
                        height: 299,
                        alt: "noise feed",
                        loading: "eager",
                        priority: !0,
                      }),
                    }),
                  }),
                ],
              }),
            (0, n.jsxs)("form", {
              className: u().form,
              onSubmit: y,
              children: [
                !v &&
                  (0, n.jsx)("span", {
                    className: u().errorMessage,
                    children: "Invalid email address",
                  }),
                (0, n.jsx)("input", {
                  name: "email",
                  type: "email",
                  required: !0,
                  value: o.email,
                  onChange: b,
                  maxLength: 50,
                  placeholder: "Your E-MAIL",
                  className: u().input,
                }),
                (0, n.jsx)("input", {
                  name: "subject",
                  type: "text",
                  value: o.subject,
                  onChange: b,
                  placeholder: "SUBJECT",
                  required: !0,
                  maxLength: 128,
                  className: u().input,
                }),
                (0, n.jsxs)("div", {
                  className: u().textArea,
                  children: [
                    (0, n.jsx)("textarea", {
                      name: "message",
                      value: o.message,
                      onChange: b,
                      placeholder: "MESSAGE",
                      required: !0,
                      maxLength: 1e3,
                      className: u().textArea,
                    }),
                    (0, n.jsx)("span", {
                      className: i()(u().messageLength, {
                        [u().messageLengthError]: o.message.length >= 1e3,
                      }),
                      children: "".concat(o.message.length, "/").concat(1e3),
                    }),
                  ],
                }),
                (0, n.jsxs)("div", {
                  className: u().buttonBlockWrap,
                  children: [
                    (0, n.jsx)("div", {
                      className: u().buttonWrap,
                      style: { maxWidth: "".concat(x || p ? "100%" : "104px") },
                      children: (0, n.jsx)(d.default, {
                        type: "submit",
                        color: x ? "green" : "dark",
                        children: x ? "Sent!" : p ? "Sending..." : "[Send]",
                      }),
                    }),
                    (0, n.jsx)("div", {
                      className: u().sticksWrap,
                      children: (0, n.jsx)(_.Z, { amount: 25, isGray: !0 }),
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
      };
    },
    58856: function (e, t, s) {
      "use strict";
      var n = s(3827),
        a = s(16480),
        r = s.n(a),
        o = s(65065),
        i = s(34739),
        l = s.n(i);
      t.Z = (e) => {
        let {
          columns: t = 5,
          rows: s = 4,
          corners: a = !0,
          padding: i = 0,
          className: c = "",
          children: d,
        } = e;
        return (0, n.jsxs)("div", {
          className: r()(l().container, c),
          children: [
            t > 0 &&
              s > 0 &&
              (0, n.jsxs)("div", {
                className: l().grid,
                children: [
                  (0, n.jsx)("div", {
                    className: l().verticalLines,
                    children: Array.from({ length: t + 1 }).map((e, t) =>
                      (0, n.jsx)(
                        "div",
                        { className: l().verticalLines_item },
                        t
                      )
                    ),
                  }),
                  (0, n.jsx)("div", {
                    className: l().horisontalLines,
                    children: Array.from({ length: s + 1 }).map((e, t) =>
                      (0, n.jsx)(
                        "div",
                        { className: l().horisontalLines_item },
                        t
                      )
                    ),
                  }),
                ],
              }),
            a && (0, n.jsx)(o.Z, {}),
            (0, n.jsx)("div", {
              className: l().children,
              style: { padding: "".concat(i, "px") },
              children: d,
            }),
          ],
        });
      };
    },
    56401: function (e, t, s) {
      "use strict";
      s.r(t);
      var n = s(3827);
      s(64090);
      var a = s(16480),
        r = s.n(a),
        o = s(44548),
        i = s.n(o),
        l = s(44911),
        c = s(20703);
      t.default = (e) => {
        let {
            type: t = "button",
            color: s = "dark",
            size: a = "normal",
            onClick: o,
            link: d = "",
            disabled: m = !1,
            children: u,
          } = e,
          _ = "string" == typeof u;
        return null == u
          ? null
          : d && "ghost" === s
          ? (0, n.jsxs)("a", {
              href: d,
              className: i().styledGhostLink,
              target: "_blank",
              children: [
                u,
                (0, n.jsx)(c.default, {
                  alt: "link icon",
                  src: "/images/icons/link-wide.webp",
                  width: 10,
                  height: 10,
                }),
              ],
            })
          : d
          ? (0, n.jsxs)("a", {
              href: d,
              className: i().styledLink,
              target: "_blank",
              children: [
                _ ? (0, n.jsx)(l.default, { text: u }) : u,
                (0, n.jsx)(c.default, {
                  alt: "link icon",
                  src: "/images/icons/link-wide.webp",
                  width: 12,
                  height: 12,
                }),
              ],
            })
          : (0, n.jsx)("button", {
              type: t,
              onClick: o,
              disabled: m,
              className: r()(i().button, {
                [i().light]: "light" === s,
                [i().green]: "green" === s,
                [i().small]: "small" === a,
              }),
              children: _ ? (0, n.jsx)(l.default, { text: u }) : u,
            });
      };
    },
    65065: function (e, t, s) {
      "use strict";
      var n = s(3827),
        a = s(16480),
        r = s.n(a),
        o = s(15786),
        i = s.n(o);
      t.Z = (e) => {
        let {
          width: t = "32px",
          height: s = "32px",
          borderWidth: a = "1px",
        } = e;
        return (0, n.jsxs)("div", {
          className: i().corners,
          children: [
            (0, n.jsx)("div", {
              className: r()(i().top, i().item, i().left),
              style: { width: t, height: s, borderWidth: a },
            }),
            (0, n.jsx)("div", {
              className: r()(i().top, i().item, i().right),
              style: { width: t, height: s, borderWidth: a },
            }),
            (0, n.jsx)("div", {
              className: r()(i().bottom, i().item, i().right),
              style: { width: t, height: s, borderWidth: a },
            }),
            (0, n.jsx)("div", {
              className: r()(i().bottom, i().item, i().left),
              style: { width: t, height: s, borderWidth: a },
            }),
          ],
        });
      };
    },
    75298: function (e, t, s) {
      "use strict";
      s.d(t, {
        q: function () {
          return i;
        },
      });
      var n = s(3827),
        a = s(91966),
        r = s.n(a),
        o = s(64090);
      let i = (0, o.memo)((e) => {
        let [t, a] = (0, o.useState)(null),
          [i, l] = (0, o.useState)(!1),
          c = (0, o.useRef)(null);
        (0, o.useEffect)(() => {
          if (i)
            return (
              (async () => {
                let { default: e } = await Promise.all([
                  s.e(705),
                  s.e(862),
                ]).then(s.t.bind(s, 92862, 23));
                a(() => e);
              })(),
              () => {
                a(null);
              }
            );
        }, [i]),
          (0, o.useEffect)(() => {
            if (!c.current) return;
            let e = new IntersectionObserver(
              (e) => {
                e.forEach((e) => {
                  l(e.isIntersecting);
                });
              },
              { threshold: 0.1, rootMargin: "100px" }
            );
            return (
              e.observe(c.current),
              () => {
                c.current && e.unobserve(c.current);
              }
            );
          }, []);
        let d = {
          rendererSettings: { progressiveLoad: !0, clearCanvas: !0 },
          ...e.lottieOptions,
        };
        return (0, n.jsx)("div", {
          ref: c,
          className: r().lottieWrapper,
          children: i && t && (0, n.jsx)(t, { ...e, options: d }),
        });
      });
    },
    25370: function (e, t, s) {
      "use strict";
      s.d(t, {
        Z: function () {
          return i;
        },
      });
      var n = s(3827),
        a = s(57034),
        r = s.n(a),
        o = s(64090);
      function i(e) {
        let { isModalOpen: t, closeModal: s, children: a } = e;
        return (
          (0, o.useEffect)(() => {
            let e = document.body.style.overflowY,
              s = document.body.style.position;
            return (
              t
                ? ((document.body.style.overflowY = "hidden"),
                  (document.body.style.position = "relative"))
                : ((document.body.style.overflowY = e || ""),
                  (document.body.style.position = s || "")),
              () => {
                (document.body.style.overflowY = e || ""),
                  (document.body.style.position = s || "");
              }
            );
          }, [t]),
          (0, n.jsx)("div", {
            className: r().modal,
            onClick: (e) => {
              e.target === e.currentTarget && s();
            },
            children: (0, n.jsx)("div", {
              className: r().modalContentWrapper,
              children: (0, n.jsxs)("div", {
                className: r().modalContent,
                children: [
                  (0, n.jsx)("button", {
                    className: r().closeButton,
                    onClick: s,
                    children: (0, n.jsxs)("svg", {
                      width: "14",
                      height: "14",
                      viewBox: "0 0 14 14",
                      fill: "none",
                      xmlns: "http://www.w3.org/2000/svg",
                      children: [
                        (0, n.jsx)("path", {
                          d: "M2.05078 0.63623L13.3645 11.9499L11.9503 13.3642L0.636568 2.05044L2.05078 0.63623Z",
                          fill: "#EFEFF0",
                        }),
                        (0, n.jsx)("path", {
                          d: "M13.3652 2.05029L2.05153 13.364L0.637313 11.9498L11.951 0.63608L13.3652 2.05029Z",
                          fill: "#EFEFF0",
                        }),
                      ],
                    }),
                  }),
                  a,
                ],
              }),
            }),
          })
        );
      }
    },
    26424: function (e) {
      e.exports = {
        form: "ContactUsForm_form__NOKvv",
        errorMessage: "ContactUsForm_errorMessage__fZXz3",
        content: "ContactUsForm_content__W0K5U",
        wordWrapper: "ContactUsForm_wordWrapper__abKkn",
        word: "ContactUsForm_word__KLauJ",
        animationWrapper: "ContactUsForm_animationWrapper__2eRT9",
        buttonBlockWrap: "ContactUsForm_buttonBlockWrap__j_b51",
        buttonWrap: "ContactUsForm_buttonWrap__5w8T2",
        buttonText: "ContactUsForm_buttonText__VH0Ho",
        sticksWrap: "ContactUsForm_sticksWrap__N4L8N",
        textArea: "ContactUsForm_textArea__0clxC",
        messageLength: "ContactUsForm_messageLength__Z1euG",
        messageLengthError: "ContactUsForm_messageLengthError__Xj60Z",
      };
    },
    34739: function (e) {
      e.exports = {
        container: "AnimationContainer_container__I5VQW",
        grid: "AnimationContainer_grid__WGG9v",
        verticalLines: "AnimationContainer_verticalLines___xvZ8",
        horisontalLines: "AnimationContainer_horisontalLines__Cn_T2",
        verticalLines_item: "AnimationContainer_verticalLines_item__MI7ka",
        horisontalLines_item: "AnimationContainer_horisontalLines_item__fHAXE",
        children: "AnimationContainer_children__9CxVd",
      };
    },
    44548: function (e) {
      e.exports = {
        button: "Button_button__5Fngg",
        small: "Button_small__AR0Cb",
        light: "Button_light__Ny_Cg",
        green: "Button_green__F2Wc2",
        styledLink: "Button_styledLink__owe0w",
        styledGhostLink: "Button_styledGhostLink__FLUIk",
      };
    },
    15786: function (e) {
      e.exports = {
        corners: "CornersFrame_corners__1PeGY",
        top: "CornersFrame_top__Uf502",
        bottom: "CornersFrame_bottom__f_vWf",
        left: "CornersFrame_left__eQ8_g",
        right: "CornersFrame_right__bQJfN",
      };
    },
    91966: function (e) {
      e.exports = { lottieWrapper: "Lottie_lottieWrapper__Ok5QB" };
    },
    57034: function (e) {
      e.exports = {
        modal: "Modal_modal__ISOdi",
        modalContentWrapper: "Modal_modalContentWrapper__qiiwI",
        modalContent: "Modal_modalContent__T4Ez4",
        closeButton: "Modal_closeButton__oKtBV",
      };
    },
  },
]);
