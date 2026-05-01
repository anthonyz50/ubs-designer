import { jsxs as d, jsx as e, Fragment as O } from "react/jsx-runtime";
import Gt, { forwardRef as B, useState as P, useCallback as j, useEffect as H, createElement as Rr, useId as te, useMemo as K, useRef as U, Children as Ln, isValidElement as or, cloneElement as Pr, useContext as sr, createContext as ir } from "react";
import { createPortal as ar } from "react-dom";
const zr = "_alert_1mcby_5", Hr = "_alertFadeIn_1mcby_1", qr = "_error_1mcby_32", Gr = "_icon_1mcby_38", Ur = "_warning_1mcby_42", Vr = "_success_1mcby_52", Zr = "_info_1mcby_62", Kr = "_content_1mcby_81", Yr = "_title_1mcby_86", Xr = "_message_1mcby_93", Qr = "_dismiss_1mcby_101", Nt = {
  alert: zr,
  alertFadeIn: Hr,
  error: qr,
  icon: Gr,
  warning: Ur,
  success: Vr,
  info: Zr,
  content: Kr,
  title: Yr,
  message: Xr,
  dismiss: Qr
}, Jr = ({ variant: n }) => {
  const t = {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": !0,
    className: Nt.icon
  };
  switch (n) {
    case "error":
      return /* @__PURE__ */ e("svg", { ...t, children: /* @__PURE__ */ e("path", { d: "M10 0C4.48 0 0 4.48 0 10s4.48 10 10 10 10-4.48 10-10S15.52 0 10 0zm1 15H9v-2h2v2zm0-4H9V5h2v6z" }) });
    case "warning":
      return /* @__PURE__ */ e("svg", { ...t, children: /* @__PURE__ */ e("path", { d: "M1 17h18L10 1 1 17zm10-2H9v-2h2v2zm0-4H9V7h2v4z" }) });
    case "success":
      return /* @__PURE__ */ e("svg", { ...t, children: /* @__PURE__ */ e("path", { d: "M10 0C4.48 0 0 4.48 0 10s4.48 10 10 10 10-4.48 10-10S15.52 0 10 0zM8 15l-5-5 1.41-1.41L8 12.17l7.59-7.59L17 6l-9 9z" }) });
    case "info":
    default:
      return /* @__PURE__ */ e("svg", { ...t, children: /* @__PURE__ */ e("path", { d: "M10 0C4.48 0 0 4.48 0 10s4.48 10 10 10 10-4.48 10-10S15.52 0 10 0zm1 15H9V9h2v6zm0-8H9V5h2v2z" }) });
  }
}, $n = B(
  ({
    variant: n = "info",
    title: t,
    dismissible: r = !1,
    onDismiss: o,
    children: s,
    className: l,
    ...i
  }, a) => {
    const [c, p] = P(!1), _ = j(() => {
      p(!0), o == null || o();
    }, [o]);
    if (c) return null;
    const h = [
      Nt.alert,
      Nt[n],
      l ?? ""
    ].filter(Boolean).join(" ");
    return /* @__PURE__ */ d(
      "div",
      {
        ref: a,
        className: h,
        role: "alert",
        "aria-live": n === "error" ? "assertive" : "polite",
        ...i,
        children: [
          /* @__PURE__ */ e(Jr, { variant: n }),
          /* @__PURE__ */ d("div", { className: Nt.content, children: [
            t && /* @__PURE__ */ e("div", { className: Nt.title, children: t }),
            s && /* @__PURE__ */ e("div", { className: Nt.message, children: s })
          ] }),
          r && /* @__PURE__ */ e(
            "button",
            {
              type: "button",
              className: Nt.dismiss,
              onClick: _,
              "aria-label": "Dismiss alert",
              children: /* @__PURE__ */ e(
                "svg",
                {
                  width: "16",
                  height: "16",
                  viewBox: "0 0 16 16",
                  fill: "currentColor",
                  "aria-hidden": "true",
                  children: /* @__PURE__ */ e("path", { d: "M12.7 4.7l-1.4-1.4L8 6.6 4.7 3.3 3.3 4.7 6.6 8l-3.3 3.3 1.4 1.4L8 9.4l3.3 3.3 1.4-1.4L9.4 8l3.3-3.3z" })
                }
              )
            }
          )
        ]
      }
    );
  }
);
$n.displayName = "Alert";
const eo = "_button_lmd0n_3", to = "_small_lmd0n_34", no = "_medium_lmd0n_40", ro = "_large_lmd0n_46", oo = "_primary_lmd0n_55", so = "_secondary_lmd0n_72", io = "_outline_lmd0n_89", ao = "_ghost_lmd0n_107", lo = "_fullWidth_lmd0n_128", co = "_loading_lmd0n_134", ho = "_spinner_lmd0n_139", po = "_spinnerIcon_lmd0n_145", uo = "_spin_lmd0n_139", mo = "_icon_lmd0n_162", _o = "_label_lmd0n_169", Ke = {
  button: eo,
  small: to,
  medium: no,
  large: ro,
  primary: oo,
  secondary: so,
  outline: io,
  ghost: ao,
  fullWidth: lo,
  loading: co,
  spinner: ho,
  spinnerIcon: po,
  spin: uo,
  icon: mo,
  label: _o
}, Vt = B(
  ({
    variant: n = "primary",
    size: t = "medium",
    loading: r = !1,
    fullWidth: o = !1,
    disabled: s = !1,
    icon: l,
    children: i,
    className: a,
    type: c = "button",
    ...p
  }, _) => {
    const h = s || r, u = [
      Ke.button,
      Ke[n],
      Ke[t],
      o ? Ke.fullWidth : "",
      r ? Ke.loading : "",
      a ?? ""
    ].filter(Boolean).join(" ");
    return /* @__PURE__ */ d(
      "button",
      {
        ref: _,
        type: c,
        className: u,
        disabled: h,
        "aria-disabled": h,
        "aria-busy": r,
        ...p,
        children: [
          r && /* @__PURE__ */ e("span", { className: Ke.spinner, "aria-hidden": "true", children: /* @__PURE__ */ e(
            "svg",
            {
              className: Ke.spinnerIcon,
              viewBox: "0 0 20 20",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              children: /* @__PURE__ */ e(
                "circle",
                {
                  cx: "10",
                  cy: "10",
                  r: "8",
                  stroke: "currentColor",
                  strokeWidth: "2",
                  strokeLinecap: "round",
                  strokeDasharray: "50.265",
                  strokeDashoffset: "25.133"
                }
              )
            }
          ) }),
          l && !r && /* @__PURE__ */ e("span", { className: Ke.icon, children: l }),
          i && /* @__PURE__ */ e("span", { className: Ke.label, children: i })
        ]
      }
    );
  }
);
Vt.displayName = "Button";
const ko = "_card_fg3uv_4", go = "_pastel1_fg3uv_23", yo = "_pastel2_fg3uv_29", fo = "_gray_fg3uv_35", bo = "_padding-none_fg3uv_43", vo = "_padding-small_fg3uv_47", xo = "_header_fg3uv_47", Lo = "_body_fg3uv_48", wo = "_footer_fg3uv_49", No = "_padding-medium_fg3uv_53", $o = "_padding-large_fg3uv_59", Io = "_interactive_fg3uv_93", Wo = "_hoverable_fg3uv_103", it = {
  card: ko,
  default: "_default_fg3uv_17",
  pastel1: go,
  pastel2: yo,
  gray: fo,
  "padding-none": "_padding-none_fg3uv_43",
  paddingNone: bo,
  "padding-small": "_padding-small_fg3uv_47",
  paddingSmall: vo,
  header: xo,
  body: Lo,
  footer: wo,
  "padding-medium": "_padding-medium_fg3uv_53",
  paddingMedium: No,
  "padding-large": "_padding-large_fg3uv_59",
  paddingLarge: $o,
  interactive: Io,
  hoverable: Wo
}, In = B(
  ({
    variant: n = "default",
    padding: t = "medium",
    hoverable: r = !1,
    header: o,
    footer: s,
    children: l,
    className: i,
    onClick: a,
    role: c,
    tabIndex: p,
    ..._
  }, h) => {
    const u = r || !!a, m = [
      it.card,
      it[n],
      it[`padding-${t}`],
      r ? it.hoverable : "",
      u ? it.interactive : "",
      i ?? ""
    ].filter(Boolean).join(" ");
    return /* @__PURE__ */ d(
      "div",
      {
        ref: h,
        className: m,
        onClick: a,
        role: c ?? (u ? "button" : void 0),
        tabIndex: p ?? (u ? 0 : void 0),
        ..._,
        children: [
          o && /* @__PURE__ */ e("div", { className: it.header, children: o }),
          /* @__PURE__ */ e("div", { className: it.body, children: l }),
          s && /* @__PURE__ */ e("div", { className: it.footer, children: s })
        ]
      }
    );
  }
);
In.displayName = "Card";
const Ao = "_grid_ootzu_5", Bo = "_gap-none_ootzu_13", Co = "_gap-small_ootzu_17", So = "_gap-medium_ootzu_21", Mo = "_gap-large_ootzu_25", Pn = {
  grid: Ao,
  "gap-none": "_gap-none_ootzu_13",
  gapNone: Bo,
  "gap-small": "_gap-small_ootzu_17",
  gapSmall: Co,
  "gap-medium": "_gap-medium_ootzu_21",
  gapMedium: So,
  "gap-large": "_gap-large_ootzu_25",
  gapLarge: Mo
}, Tt = B(
  ({
    columns: n = { mobile: 1, tablet: 2, desktop: 3, wide: 4 },
    gap: t = "medium",
    children: r,
    className: o,
    style: s,
    ...l
  }, i) => {
    const a = typeof n == "number" ? { mobile: n, tablet: n, desktop: n, wide: n } : {
      mobile: n.mobile ?? 1,
      tablet: n.tablet ?? 2,
      desktop: n.desktop ?? 3,
      wide: n.wide ?? 4
    }, c = {
      "--grid-cols-mobile": a.mobile,
      "--grid-cols-tablet": a.tablet,
      "--grid-cols-desktop": a.desktop,
      "--grid-cols-wide": a.wide,
      ...s
    }, p = [
      Pn.grid,
      Pn[`gap-${t}`],
      o ?? ""
    ].filter(Boolean).join(" ");
    return /* @__PURE__ */ e(
      "div",
      {
        ref: i,
        className: p,
        style: c,
        ...l,
        children: r
      }
    );
  }
);
Tt.displayName = "Grid";
const To = "_impulse_1regc_6", Do = "_line_1regc_12", Eo = "_content_1regc_30", mn = {
  impulse: To,
  line: Do,
  content: Eo
}, Oo = {
  A0: 8,
  A1: 7,
  A2: 6,
  A3: 5,
  A4: 4,
  A5: 3,
  A6: 3,
  A7: 2,
  A8: 2
}, jo = {
  A0: 24,
  A1: 20,
  A2: 18,
  A3: 16,
  A4: 14,
  A5: 12,
  A6: 10,
  A7: 8,
  A8: 6
}, Fo = B(
  ({
    format: n = "A4",
    children: t,
    className: r,
    style: o,
    ...s
  }, l) => {
    const i = Oo[n], a = jo[n], c = {
      "--impulse-line-width": `${i}px`,
      "--impulse-spacing": `${a}px`,
      ...o
    }, p = [
      mn.impulse,
      r ?? ""
    ].filter(Boolean).join(" ");
    return /* @__PURE__ */ d(
      "div",
      {
        ref: l,
        className: p,
        style: c,
        ...s,
        children: [
          /* @__PURE__ */ e("span", { className: mn.line, "aria-hidden": "true" }),
          /* @__PURE__ */ e("div", { className: mn.content, children: t })
        ]
      }
    );
  }
);
Fo.displayName = "Impulse";
const Ro = "_layout_17bn5_5", Po = "_format-a0_17bn5_21", zo = "_format-a1_17bn5_25", Ho = "_format-a2_17bn5_29", qo = "_format-a3_17bn5_33", Go = "_format-a4_17bn5_37", Uo = "_format-a5_17bn5_41", Vo = "_format-a6_17bn5_45", Zo = "_format-a7_17bn5_49", Ko = "_format-a8_17bn5_53", zn = {
  layout: Ro,
  "format-a0": "_format-a0_17bn5_21",
  formatA0: Po,
  "format-a1": "_format-a1_17bn5_25",
  formatA1: zo,
  "format-a2": "_format-a2_17bn5_29",
  formatA2: Ho,
  "format-a3": "_format-a3_17bn5_33",
  formatA3: qo,
  "format-a4": "_format-a4_17bn5_37",
  formatA4: Go,
  "format-a5": "_format-a5_17bn5_41",
  formatA5: Uo,
  "format-a6": "_format-a6_17bn5_45",
  formatA6: Vo,
  "format-a7": "_format-a7_17bn5_49",
  formatA7: Zo,
  "format-a8": "_format-a8_17bn5_53",
  formatA8: Ko
}, Yo = {
  A0: { top: 40, right: 40, bottom: 40, left: 40 },
  A1: { top: 35, right: 35, bottom: 35, left: 35 },
  A2: { top: 28, right: 28, bottom: 28, left: 28 },
  A3: { top: 22, right: 22, bottom: 22, left: 22 },
  A4: { top: 18, right: 18, bottom: 18, left: 18 },
  A5: { top: 14, right: 14, bottom: 14, left: 14 },
  A6: { top: 10, right: 10, bottom: 10, left: 10 },
  A7: { top: 8, right: 8, bottom: 8, left: 8 },
  A8: { top: 6, right: 6, bottom: 6, left: 6 }
}, Xo = B(
  ({
    format: n = "A4",
    children: t,
    className: r,
    style: o,
    ...s
  }, l) => {
    const i = Yo[n], a = {
      paddingTop: `${i.top * 0.25}rem`,
      paddingRight: `${i.right * 0.25}rem`,
      paddingBottom: `${i.bottom * 0.25}rem`,
      paddingLeft: `${i.left * 0.25}rem`,
      ...o
    }, c = [
      zn.layout,
      zn[`format-${n.toLowerCase()}`],
      r ?? ""
    ].filter(Boolean).join(" ");
    return /* @__PURE__ */ e(
      "div",
      {
        ref: l,
        className: c,
        style: a,
        "data-format": n,
        ...s,
        children: t
      }
    );
  }
);
Xo.displayName = "Layout";
const Qo = "_logo_q7uom_5", Jo = "_tab_q7uom_12", es = "_tabBackground_q7uom_16", _n = {
  logo: Qo,
  tab: Jo,
  tabBackground: es
}, ts = {
  A0: 400,
  A1: 320,
  A2: 240,
  A3: 180,
  A4: 140,
  A5: 110,
  A6: 80,
  A7: 60,
  A8: 48
}, ns = {
  black: "#000000",
  white: "#FFFFFF",
  gray: "#7A7870"
}, rs = ({ fill: n }) => /* @__PURE__ */ d("g", { fill: n, children: [
  /* @__PURE__ */ e("path", { d: "M4 2C4 0.9 4.9 0 6 0C7.1 0 8 0.9 8 2C8 2.74 7.6 3.39 7 3.73V8H5V3.73C4.4 3.39 4 2.74 4 2ZM5.5 8.5H6.5V10H5.5V8.5ZM5 10.5H7V12H5V10.5Z" }),
  /* @__PURE__ */ e("path", { d: "M11 2C11 0.9 11.9 0 13 0C14.1 0 15 0.9 15 2C15 2.74 14.6 3.39 14 3.73V8H12V3.73C11.4 3.39 11 2.74 11 2ZM12.5 8.5H13.5V10H12.5V8.5ZM12 10.5H14V12H12V10.5Z" }),
  /* @__PURE__ */ e("path", { d: "M18 2C18 0.9 18.9 0 20 0C21.1 0 22 0.9 22 2C22 2.74 21.6 3.39 21 3.73V8H19V3.73C18.4 3.39 18 2.74 18 2ZM19.5 8.5H20.5V10H19.5V8.5ZM19 10.5H21V12H19V10.5Z" })
] }), os = ({ fill: n, x: t }) => /* @__PURE__ */ e(
  "text",
  {
    x: t,
    y: "10",
    fill: n,
    fontFamily: "'Frutiger', Arial, sans-serif",
    fontWeight: "700",
    fontSize: "14",
    letterSpacing: "0.1em",
    dominantBaseline: "central",
    textAnchor: "start",
    children: "UBS"
  }
), Dt = B(
  ({
    size: n = 120,
    variant: t = "full",
    colour: r = "black",
    tab: o = !1,
    className: s,
    ...l
  }, i) => {
    const a = typeof n == "string" ? ts[n.toUpperCase()] ?? 120 : n, c = ns[r];
    let p, _;
    switch (t) {
      case "symbol":
        p = 26, _ = 12;
        break;
      case "wordmark":
        p = 34, _ = 20;
        break;
      case "full":
      default:
        p = 60, _ = 20;
        break;
    }
    const h = _ / 3, u = p + h * 2, m = _ + h * 2, k = m / u, g = Math.round(a * k), y = [
      _n.logo,
      o ? _n.tab : "",
      s ?? ""
    ].filter(Boolean).join(" ");
    return /* @__PURE__ */ d(
      "svg",
      {
        ref: i,
        className: y,
        width: a,
        height: g,
        viewBox: `0 0 ${u} ${m}`,
        xmlns: "http://www.w3.org/2000/svg",
        role: "img",
        "aria-label": "UBS Logo",
        ...l,
        children: [
          o && /* @__PURE__ */ e(
            "rect",
            {
              x: "0",
              y: "0",
              width: u,
              height: m,
              fill: r === "white" ? "rgba(0,0,0,0.6)" : "rgba(255,255,255,0.85)",
              className: _n.tabBackground
            }
          ),
          /* @__PURE__ */ d("g", { transform: `translate(${h}, ${h})`, children: [
            (t === "full" || t === "symbol") && /* @__PURE__ */ e("g", { transform: t === "full" ? `translate(0, ${(_ - 12) / 2})` : void 0, children: /* @__PURE__ */ e(rs, { fill: c }) }),
            (t === "full" || t === "wordmark") && /* @__PURE__ */ e(
              os,
              {
                fill: c,
                x: t === "full" ? 28 : 0
              }
            )
          ] })
        ]
      }
    );
  }
);
Dt.displayName = "Logo";
const ss = "_typography_48onw_8", is = "_keyline_48onw_21", as = "_infoline_48onw_30", ls = "_subheadline1_48onw_38", cs = "_subheadline2_48onw_46", ds = "_subheadline3_48onw_54", hs = "_subheadline4_48onw_62", ps = "_leadText1_48onw_70", us = "_leadText2_48onw_78", ms = "_quotes_48onw_86", _s = "_subtitles_48onw_95", ks = "_copyText_48onw_105", gs = "_pageNumbers_48onw_113", ys = "_senderInfo_48onw_121", fs = "_smallCopyText_48onw_129", bs = "_environmentalInfo_48onw_137", vs = "_captions_48onw_146", xs = "_footnote_48onw_155", Hn = {
  typography: ss,
  keyline: is,
  infoline: as,
  subheadline1: ls,
  subheadline2: cs,
  subheadline3: ds,
  subheadline4: hs,
  leadText1: ps,
  leadText2: us,
  quotes: ms,
  subtitles: _s,
  copyText: ks,
  pageNumbers: gs,
  senderInfo: ys,
  smallCopyText: fs,
  environmentalInfo: bs,
  captions: vs,
  footnote: xs
}, Ls = {
  keyline: "h1",
  infoline: "p",
  subheadline1: "h2",
  subheadline2: "h3",
  subheadline3: "h4",
  subheadline4: "h5",
  leadText1: "p",
  leadText2: "p",
  quotes: "blockquote",
  subtitles: "h6",
  copyText: "p",
  pageNumbers: "span",
  senderInfo: "span",
  smallCopyText: "p",
  environmentalInfo: "small",
  captions: "figcaption",
  footnote: "small"
};
function ws(n) {
  if (n !== void 0)
    return n === "light" ? 300 : n === "roman" ? 400 : n === "bold" ? 700 : n;
}
function lr(n) {
  return typeof n == "number" ? !0 : typeof n == "string" ? /\d/.test(n) : Array.isArray(n) ? n.some(lr) : !1;
}
function Ns(n) {
  if (!n) return !1;
  const t = n.toLowerCase().replace(/\s/g, "");
  return t === "#e60000" || t === "#d83b31" || t === "#fe6f5d" || t === "red" || t === "#bd000c";
}
const ze = B(
  ({
    variant: n = "copyText",
    as: t,
    colour: r,
    weight: o,
    children: s,
    className: l,
    style: i,
    ...a
  }, c) => {
    H(() => {
      typeof window < "u" && Ns(r) && lr(s) && console.warn(
        `[UBS Typography] Red must NOT be used for numbers. This violates UBS brand guidelines. Variant: "${n}", colour: "${r}".`
      );
    }, [r, s, n]);
    const p = t ?? Ls[n], _ = ws(o), h = [
      Hn.typography,
      Hn[n],
      l ?? ""
    ].filter(Boolean).join(" "), u = {
      ...i,
      ...r ? { color: r } : {},
      ..._ ? { fontWeight: _ } : {}
    };
    return Gt.createElement(
      p,
      {
        ref: c,
        className: h,
        style: Object.keys(u).length > 0 ? u : void 0,
        ...a
      },
      s
    );
  }
);
ze.displayName = "Typography";
const $s = "_badge_mp0d1_3", Is = "_sm_mp0d1_17", Ws = "_md_mp0d1_23", As = "_red_mp0d1_36", Bs = "_success_mp0d1_41", Cs = "_warning_mp0d1_46", Ss = "_dot_mp0d1_53", Qt = {
  badge: $s,
  sm: Is,
  md: Ws,
  default: "_default_mp0d1_31",
  red: As,
  success: Bs,
  warning: Cs,
  dot: Ss
}, Wn = B(
  ({ variant: n = "default", size: t = "md", dot: r = !1, children: o, className: s, ...l }, i) => {
    const a = [
      Qt.badge,
      Qt[n],
      Qt[t],
      r ? Qt.dot : void 0,
      s
    ].filter(Boolean).join(" ");
    return /* @__PURE__ */ e("span", { ref: i, className: a, role: "status", ...l, children: r ? null : o });
  }
);
Wn.displayName = "Badge";
const Ms = "_divider_4k0j1_3", Ts = "_horizontal_4k0j1_13", Ds = "_vertical_4k0j1_20", qn = {
  divider: Ms,
  horizontal: Ts,
  vertical: Ds
}, Es = B(
  ({
    orientation: n = "horizontal",
    colour: t,
    thickness: r,
    spacing: o,
    className: s,
    style: l,
    ...i
  }, a) => {
    const c = [qn.divider, qn[n], s].filter(Boolean).join(" "), p = {
      ...t ? { backgroundColor: t } : {},
      ...r != null ? { "--divider-thickness": `${r}px` } : {},
      ...o != null ? { "--divider-spacing": `${o}px` } : {},
      ...l
    };
    return /* @__PURE__ */ e(
      "hr",
      {
        ref: a,
        className: c,
        style: p,
        role: "separator",
        "aria-orientation": n,
        ...i
      }
    );
  }
);
Es.displayName = "Divider";
const Os = "_indicator_6dkc3_3", js = "_sm_6dkc3_15", Fs = "_arrow_6dkc3_19", Rs = "_md_6dkc3_24", Ps = "_lg_6dkc3_33", zs = "_positive_6dkc3_44", Hs = "_negative_6dkc3_48", qs = "_neutral_6dkc3_52", Gs = "_arrowDown_6dkc3_71", Et = {
  indicator: Os,
  sm: js,
  arrow: Fs,
  md: Rs,
  lg: Ps,
  positive: zs,
  negative: Hs,
  neutral: qs,
  arrowDown: Gs
}, Gn = "#498100", Un = "#C81219";
function Us(n) {
  return n === "apac" ? { positive: Un, negative: Gn } : { positive: Gn, negative: Un };
}
const Vs = () => /* @__PURE__ */ e("svg", { viewBox: "0 0 12 12", xmlns: "http://www.w3.org/2000/svg", "aria-hidden": "true", children: /* @__PURE__ */ e("path", { d: "M6 1.5L10.5 8.5H1.5L6 1.5Z" }) }), Zs = B(
  ({
    value: n,
    region: t = "emea",
    size: r = "md",
    decimals: o = 2,
    showArrow: s = !0,
    showSign: l = !0,
    asPercentage: i = !1,
    className: a,
    style: c,
    ...p
  }, _) => {
    const h = Us(t), u = n > 0, m = n < 0, k = n === 0, g = u ? "positive" : m ? "negative" : "neutral";
    u ? h.positive : m && h.negative;
    const y = Math.abs(n).toFixed(o), v = `${u && l ? "+" : m ? "−" : ""}${y}${i ? "%" : ""}`, L = [
      Et.indicator,
      Et[r],
      Et[g],
      a
    ].filter(Boolean).join(" "), x = {
      "--trading-positive": h.positive,
      "--trading-negative": h.negative,
      ...c
    };
    return /* @__PURE__ */ d(
      "span",
      {
        ref: _,
        className: L,
        style: x,
        "aria-label": `${u ? "positive" : m ? "negative" : "neutral"} ${y}${i ? " percent" : ""}`,
        ...p,
        children: [
          s && !k && /* @__PURE__ */ e("span", { className: `${Et.arrow} ${m ? Et.arrowDown : ""}`, children: /* @__PURE__ */ e(Vs, {}) }),
          /* @__PURE__ */ e("span", { children: v })
        ]
      }
    );
  }
);
Zs.displayName = "TradingIndicator";
const Ks = "_icon_1jg4d_3", Ys = "_sm_1jg4d_13", Xs = "_md_1jg4d_18", Qs = "_lg_1jg4d_23", Js = "_webApp_1jg4d_30", ei = "_illustrative_1jg4d_41", kn = {
  icon: Ks,
  sm: Ys,
  md: Xs,
  lg: Qs,
  webApp: Js,
  illustrative: ei
}, ti = {
  sm: 12,
  md: 16,
  lg: 24
}, gn = {
  black: "#000000",
  red: "#E60000",
  warmGray1: "#CCCABC",
  warmGray2: "#B8B3A2"
};
function F(n) {
  const {
    displayName: t,
    viewBox: r,
    defaultSize: o = "lg",
    illustrative: s = !1,
    path: l
  } = n, i = B(
    ({
      size: a = o,
      colour: c = gn.black,
      accentColour: p = s ? gn.red : gn.black,
      variant: _ = "default",
      className: h,
      style: u,
      ...m
    }, k) => {
      const g = typeof a == "string" ? ti[a] ?? 24 : a, y = c;
      return /* @__PURE__ */ e(
        "svg",
        {
          ref: k,
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: r,
          width: g,
          height: g,
          fill: "none",
          "aria-hidden": "true",
          role: "img",
          focusable: "false",
          className: h,
          style: u,
          ...m,
          children: l(y, _ === "black" ? y : p)
        }
      );
    }
  );
  return i.displayName = t, i;
}
const ni = F({
  displayName: "ChevronDown",
  viewBox: "0 0 24 24",
  path: (n) => /* @__PURE__ */ e(
    "polyline",
    {
      points: "6 9 12 15 18 9",
      stroke: n,
      strokeWidth: 2,
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  )
}), ri = F({
  displayName: "ChevronUp",
  viewBox: "0 0 24 24",
  path: (n) => /* @__PURE__ */ e(
    "polyline",
    {
      points: "18 15 12 9 6 15",
      stroke: n,
      strokeWidth: 2,
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  )
}), oi = F({
  displayName: "ChevronLeft",
  viewBox: "0 0 24 24",
  path: (n) => /* @__PURE__ */ e(
    "polyline",
    {
      points: "15 18 9 12 15 6",
      stroke: n,
      strokeWidth: 2,
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  )
}), si = F({
  displayName: "ChevronRight",
  viewBox: "0 0 24 24",
  path: (n) => /* @__PURE__ */ e(
    "polyline",
    {
      points: "9 6 15 12 9 18",
      stroke: n,
      strokeWidth: 2,
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  )
}), ii = F({
  displayName: "ArrowLeft",
  viewBox: "0 0 24 24",
  path: (n) => /* @__PURE__ */ d(O, { children: [
    /* @__PURE__ */ e("line", { x1: 19, y1: 12, x2: 5, y2: 12, stroke: n, strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" }),
    /* @__PURE__ */ e("polyline", { points: "12 19 5 12 12 5", stroke: n, strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" })
  ] })
}), ai = F({
  displayName: "ArrowRight",
  viewBox: "0 0 24 24",
  path: (n) => /* @__PURE__ */ d(O, { children: [
    /* @__PURE__ */ e("line", { x1: 5, y1: 12, x2: 19, y2: 12, stroke: n, strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" }),
    /* @__PURE__ */ e("polyline", { points: "12 5 19 12 12 19", stroke: n, strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" })
  ] })
}), li = F({
  displayName: "ArrowUp",
  viewBox: "0 0 24 24",
  path: (n) => /* @__PURE__ */ d(O, { children: [
    /* @__PURE__ */ e("line", { x1: 12, y1: 19, x2: 12, y2: 5, stroke: n, strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" }),
    /* @__PURE__ */ e("polyline", { points: "5 12 12 5 19 12", stroke: n, strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" })
  ] })
}), ci = F({
  displayName: "ArrowDown",
  viewBox: "0 0 24 24",
  path: (n) => /* @__PURE__ */ d(O, { children: [
    /* @__PURE__ */ e("line", { x1: 12, y1: 5, x2: 12, y2: 19, stroke: n, strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" }),
    /* @__PURE__ */ e("polyline", { points: "19 12 12 19 5 12", stroke: n, strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" })
  ] })
}), di = F({
  displayName: "Menu",
  viewBox: "0 0 24 24",
  path: (n) => /* @__PURE__ */ d(O, { children: [
    /* @__PURE__ */ e("line", { x1: 3, y1: 6, x2: 21, y2: 6, stroke: n, strokeWidth: 2, strokeLinecap: "round" }),
    /* @__PURE__ */ e("line", { x1: 3, y1: 12, x2: 21, y2: 12, stroke: n, strokeWidth: 2, strokeLinecap: "round" }),
    /* @__PURE__ */ e("line", { x1: 3, y1: 18, x2: 21, y2: 18, stroke: n, strokeWidth: 2, strokeLinecap: "round" })
  ] })
}), hi = F({
  displayName: "Close",
  viewBox: "0 0 24 24",
  path: (n) => /* @__PURE__ */ d(O, { children: [
    /* @__PURE__ */ e("line", { x1: 18, y1: 6, x2: 6, y2: 18, stroke: n, strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" }),
    /* @__PURE__ */ e("line", { x1: 6, y1: 6, x2: 18, y2: 18, stroke: n, strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" })
  ] })
}), pi = F({
  displayName: "MoreHorizontal",
  viewBox: "0 0 24 24",
  path: (n) => /* @__PURE__ */ d(O, { children: [
    /* @__PURE__ */ e("circle", { cx: 12, cy: 12, r: 1, fill: n }),
    /* @__PURE__ */ e("circle", { cx: 5, cy: 12, r: 1, fill: n }),
    /* @__PURE__ */ e("circle", { cx: 19, cy: 12, r: 1, fill: n })
  ] })
}), ui = F({
  displayName: "MoreVertical",
  viewBox: "0 0 24 24",
  path: (n) => /* @__PURE__ */ d(O, { children: [
    /* @__PURE__ */ e("circle", { cx: 12, cy: 12, r: 1, fill: n }),
    /* @__PURE__ */ e("circle", { cx: 12, cy: 5, r: 1, fill: n }),
    /* @__PURE__ */ e("circle", { cx: 12, cy: 19, r: 1, fill: n })
  ] })
}), mi = F({
  displayName: "Search",
  viewBox: "0 0 24 24",
  path: (n) => /* @__PURE__ */ d(O, { children: [
    /* @__PURE__ */ e("circle", { cx: 11, cy: 11, r: 7, stroke: n, strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" }),
    /* @__PURE__ */ e("line", { x1: 16.65, y1: 16.65, x2: 21, y2: 21, stroke: n, strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" })
  ] })
}), _i = F({
  displayName: "Filter",
  viewBox: "0 0 24 24",
  path: (n) => /* @__PURE__ */ e(
    "path",
    {
      d: "M3 4h18l-7 8.5V18l-4 2V12.5L3 4Z",
      stroke: n,
      strokeWidth: 2,
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  )
}), ki = F({
  displayName: "Sort",
  viewBox: "0 0 24 24",
  path: (n) => /* @__PURE__ */ d(O, { children: [
    /* @__PURE__ */ e("line", { x1: 4, y1: 6, x2: 20, y2: 6, stroke: n, strokeWidth: 2, strokeLinecap: "round" }),
    /* @__PURE__ */ e("line", { x1: 4, y1: 12, x2: 16, y2: 12, stroke: n, strokeWidth: 2, strokeLinecap: "round" }),
    /* @__PURE__ */ e("line", { x1: 4, y1: 18, x2: 12, y2: 18, stroke: n, strokeWidth: 2, strokeLinecap: "round" })
  ] })
}), gi = F({
  displayName: "Download",
  viewBox: "0 0 24 24",
  path: (n) => /* @__PURE__ */ d(O, { children: [
    /* @__PURE__ */ e("path", { d: "M12 3v12", stroke: n, strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" }),
    /* @__PURE__ */ e("polyline", { points: "7 10 12 15 17 10", stroke: n, strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" }),
    /* @__PURE__ */ e("path", { d: "M20 21H4", stroke: n, strokeWidth: 2, strokeLinecap: "round" })
  ] })
}), yi = F({
  displayName: "Upload",
  viewBox: "0 0 24 24",
  path: (n) => /* @__PURE__ */ d(O, { children: [
    /* @__PURE__ */ e("path", { d: "M12 15V3", stroke: n, strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" }),
    /* @__PURE__ */ e("polyline", { points: "17 8 12 3 7 8", stroke: n, strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" }),
    /* @__PURE__ */ e("path", { d: "M20 21H4", stroke: n, strokeWidth: 2, strokeLinecap: "round" })
  ] })
}), fi = F({
  displayName: "Share",
  viewBox: "0 0 24 24",
  path: (n) => /* @__PURE__ */ d(O, { children: [
    /* @__PURE__ */ e("circle", { cx: 18, cy: 5, r: 3, stroke: n, strokeWidth: 2 }),
    /* @__PURE__ */ e("circle", { cx: 6, cy: 12, r: 3, stroke: n, strokeWidth: 2 }),
    /* @__PURE__ */ e("circle", { cx: 18, cy: 19, r: 3, stroke: n, strokeWidth: 2 }),
    /* @__PURE__ */ e("line", { x1: 8.59, y1: 13.51, x2: 15.42, y2: 17.49, stroke: n, strokeWidth: 2, strokeLinecap: "round" }),
    /* @__PURE__ */ e("line", { x1: 15.41, y1: 6.51, x2: 8.59, y2: 10.49, stroke: n, strokeWidth: 2, strokeLinecap: "round" })
  ] })
}), bi = F({
  displayName: "Copy",
  viewBox: "0 0 24 24",
  path: (n) => /* @__PURE__ */ d(O, { children: [
    /* @__PURE__ */ e("rect", { x: 9, y: 9, width: 13, height: 13, rx: 2, stroke: n, strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" }),
    /* @__PURE__ */ e("path", { d: "M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1", stroke: n, strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" })
  ] })
}), vi = F({
  displayName: "Edit",
  viewBox: "0 0 24 24",
  path: (n) => /* @__PURE__ */ d(O, { children: [
    /* @__PURE__ */ e("path", { d: "M17 3a2.83 2.83 0 0 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3Z", stroke: n, strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" }),
    /* @__PURE__ */ e("line", { x1: 15, y1: 5, x2: 19, y2: 9, stroke: n, strokeWidth: 2, strokeLinecap: "round" })
  ] })
}), xi = F({
  displayName: "Trash",
  viewBox: "0 0 24 24",
  path: (n) => /* @__PURE__ */ d(O, { children: [
    /* @__PURE__ */ e("polyline", { points: "3 6 5 6 21 6", stroke: n, strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" }),
    /* @__PURE__ */ e("path", { d: "M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6", stroke: n, strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" }),
    /* @__PURE__ */ e("path", { d: "M10 6V4a2 2 0 0 1 2-2h0a2 2 0 0 1 2 2v2", stroke: n, strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" }),
    /* @__PURE__ */ e("line", { x1: 10, y1: 11, x2: 10, y2: 17, stroke: n, strokeWidth: 2, strokeLinecap: "round" }),
    /* @__PURE__ */ e("line", { x1: 14, y1: 11, x2: 14, y2: 17, stroke: n, strokeWidth: 2, strokeLinecap: "round" })
  ] })
}), Li = F({
  displayName: "Plus",
  viewBox: "0 0 24 24",
  path: (n) => /* @__PURE__ */ d(O, { children: [
    /* @__PURE__ */ e("line", { x1: 12, y1: 5, x2: 12, y2: 19, stroke: n, strokeWidth: 2, strokeLinecap: "round" }),
    /* @__PURE__ */ e("line", { x1: 5, y1: 12, x2: 19, y2: 12, stroke: n, strokeWidth: 2, strokeLinecap: "round" })
  ] })
}), wi = F({
  displayName: "Minus",
  viewBox: "0 0 24 24",
  path: (n) => /* @__PURE__ */ e("line", { x1: 5, y1: 12, x2: 19, y2: 12, stroke: n, strokeWidth: 2, strokeLinecap: "round" })
}), Ni = F({
  displayName: "Check",
  viewBox: "0 0 24 24",
  path: (n) => /* @__PURE__ */ e(
    "polyline",
    {
      points: "4 12 9 17 20 6",
      stroke: n,
      strokeWidth: 2,
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  )
}), $i = F({
  displayName: "CheckCircle",
  viewBox: "0 0 24 24",
  path: (n) => /* @__PURE__ */ d(O, { children: [
    /* @__PURE__ */ e("circle", { cx: 12, cy: 12, r: 10, stroke: n, strokeWidth: 2 }),
    /* @__PURE__ */ e("polyline", { points: "8 12 11 15 16 9", stroke: n, strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" })
  ] })
}), Ii = F({
  displayName: "XCircle",
  viewBox: "0 0 24 24",
  path: (n) => /* @__PURE__ */ d(O, { children: [
    /* @__PURE__ */ e("circle", { cx: 12, cy: 12, r: 10, stroke: n, strokeWidth: 2 }),
    /* @__PURE__ */ e("line", { x1: 15, y1: 9, x2: 9, y2: 15, stroke: n, strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" }),
    /* @__PURE__ */ e("line", { x1: 9, y1: 9, x2: 15, y2: 15, stroke: n, strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" })
  ] })
}), Wi = F({
  displayName: "Home",
  viewBox: "0 0 24 24",
  path: (n) => /* @__PURE__ */ d(O, { children: [
    /* @__PURE__ */ e("path", { d: "M3 10.5L12 3l9 7.5V20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V10.5Z", stroke: n, strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" }),
    /* @__PURE__ */ e("path", { d: "M9 21V14h6v7", stroke: n, strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" })
  ] })
}), Ai = F({
  displayName: "User",
  viewBox: "0 0 24 24",
  path: (n) => /* @__PURE__ */ d(O, { children: [
    /* @__PURE__ */ e("circle", { cx: 12, cy: 8, r: 4, stroke: n, strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" }),
    /* @__PURE__ */ e("path", { d: "M20 21c0-3.87-3.58-7-8-7s-8 3.13-8 7", stroke: n, strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" })
  ] })
}), Bi = F({
  displayName: "Users",
  viewBox: "0 0 24 24",
  path: (n) => /* @__PURE__ */ d(O, { children: [
    /* @__PURE__ */ e("circle", { cx: 9, cy: 8, r: 4, stroke: n, strokeWidth: 2 }),
    /* @__PURE__ */ e("path", { d: "M17 21c0-3.31-3.13-6-7-6h-1c-3.87 0-7 2.69-7 6", stroke: n, strokeWidth: 2, strokeLinecap: "round" }),
    /* @__PURE__ */ e("path", { d: "M17 8a4 4 0 0 1 0 0", stroke: n, strokeWidth: 2 }),
    /* @__PURE__ */ e("circle", { cx: 17, cy: 7, r: 3, stroke: n, strokeWidth: 2 }),
    /* @__PURE__ */ e("path", { d: "M22 21c0-2.76-2.24-5-5-5", stroke: n, strokeWidth: 2, strokeLinecap: "round" })
  ] })
}), Ci = F({
  displayName: "Settings",
  viewBox: "0 0 24 24",
  path: (n) => /* @__PURE__ */ d(O, { children: [
    /* @__PURE__ */ e("circle", { cx: 12, cy: 12, r: 3, stroke: n, strokeWidth: 2 }),
    /* @__PURE__ */ e(
      "path",
      {
        d: "M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09a1.65 1.65 0 0 0-1.08-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09a1.65 1.65 0 0 0 1.51-1.08 1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9c.26.6.84 1 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1Z",
        stroke: n,
        strokeWidth: 2,
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }
    )
  ] })
}), Si = F({
  displayName: "Bell",
  viewBox: "0 0 24 24",
  path: (n) => /* @__PURE__ */ d(O, { children: [
    /* @__PURE__ */ e("path", { d: "M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9Z", stroke: n, strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" }),
    /* @__PURE__ */ e("path", { d: "M13.73 21a2 2 0 0 1-3.46 0", stroke: n, strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" })
  ] })
}), Mi = F({
  displayName: "Mail",
  viewBox: "0 0 24 24",
  path: (n) => /* @__PURE__ */ d(O, { children: [
    /* @__PURE__ */ e("rect", { x: 2, y: 4, width: 20, height: 16, rx: 2, stroke: n, strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" }),
    /* @__PURE__ */ e("polyline", { points: "22 6 12 13 2 6", stroke: n, strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" })
  ] })
}), Ti = F({
  displayName: "Calendar",
  viewBox: "0 0 24 24",
  path: (n) => /* @__PURE__ */ d(O, { children: [
    /* @__PURE__ */ e("rect", { x: 3, y: 4, width: 18, height: 18, rx: 2, stroke: n, strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" }),
    /* @__PURE__ */ e("line", { x1: 16, y1: 2, x2: 16, y2: 6, stroke: n, strokeWidth: 2, strokeLinecap: "round" }),
    /* @__PURE__ */ e("line", { x1: 8, y1: 2, x2: 8, y2: 6, stroke: n, strokeWidth: 2, strokeLinecap: "round" }),
    /* @__PURE__ */ e("line", { x1: 3, y1: 10, x2: 21, y2: 10, stroke: n, strokeWidth: 2, strokeLinecap: "round" })
  ] })
}), Di = F({
  displayName: "Clock",
  viewBox: "0 0 24 24",
  path: (n) => /* @__PURE__ */ d(O, { children: [
    /* @__PURE__ */ e("circle", { cx: 12, cy: 12, r: 10, stroke: n, strokeWidth: 2 }),
    /* @__PURE__ */ e("polyline", { points: "12 6 12 12 16 14", stroke: n, strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" })
  ] })
}), Ei = F({
  displayName: "Document",
  viewBox: "0 0 24 24",
  path: (n) => /* @__PURE__ */ d(O, { children: [
    /* @__PURE__ */ e("path", { d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6Z", stroke: n, strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" }),
    /* @__PURE__ */ e("polyline", { points: "14 2 14 8 20 8", stroke: n, strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" }),
    /* @__PURE__ */ e("line", { x1: 8, y1: 13, x2: 16, y2: 13, stroke: n, strokeWidth: 2, strokeLinecap: "round" }),
    /* @__PURE__ */ e("line", { x1: 8, y1: 17, x2: 14, y2: 17, stroke: n, strokeWidth: 2, strokeLinecap: "round" })
  ] })
}), Oi = F({
  displayName: "Folder",
  viewBox: "0 0 24 24",
  path: (n) => /* @__PURE__ */ e(
    "path",
    {
      d: "M2 6a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6Z",
      stroke: n,
      strokeWidth: 2,
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  )
}), ji = F({
  displayName: "ImageIcon",
  viewBox: "0 0 24 24",
  path: (n) => /* @__PURE__ */ d(O, { children: [
    /* @__PURE__ */ e("rect", { x: 3, y: 3, width: 18, height: 18, rx: 2, stroke: n, strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" }),
    /* @__PURE__ */ e("circle", { cx: 8.5, cy: 8.5, r: 1.5, stroke: n, strokeWidth: 2 }),
    /* @__PURE__ */ e("polyline", { points: "21 15 16 10 5 21", stroke: n, strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" })
  ] })
}), Fi = F({
  displayName: "Chart",
  viewBox: "0 0 24 24",
  path: (n) => /* @__PURE__ */ d(O, { children: [
    /* @__PURE__ */ e("line", { x1: 18, y1: 20, x2: 18, y2: 10, stroke: n, strokeWidth: 2, strokeLinecap: "round" }),
    /* @__PURE__ */ e("line", { x1: 12, y1: 20, x2: 12, y2: 4, stroke: n, strokeWidth: 2, strokeLinecap: "round" }),
    /* @__PURE__ */ e("line", { x1: 6, y1: 20, x2: 6, y2: 14, stroke: n, strokeWidth: 2, strokeLinecap: "round" }),
    /* @__PURE__ */ e("line", { x1: 2, y1: 20, x2: 22, y2: 20, stroke: n, strokeWidth: 2, strokeLinecap: "round" })
  ] })
}), Ri = F({
  displayName: "DonutChart",
  viewBox: "0 0 24 24",
  path: (n) => /* @__PURE__ */ d(O, { children: [
    /* @__PURE__ */ e("circle", { cx: 12, cy: 12, r: 10, stroke: n, strokeWidth: 2 }),
    /* @__PURE__ */ e("circle", { cx: 12, cy: 12, r: 5, stroke: n, strokeWidth: 2 }),
    /* @__PURE__ */ e("line", { x1: 12, y1: 2, x2: 12, y2: 7, stroke: n, strokeWidth: 2, strokeLinecap: "round" }),
    /* @__PURE__ */ e("line", { x1: 20.66, y1: 17, x2: 16.33, y2: 14.5, stroke: n, strokeWidth: 2, strokeLinecap: "round" })
  ] })
}), Pi = F({
  displayName: "Globe",
  viewBox: "0 0 24 24",
  path: (n) => /* @__PURE__ */ d(O, { children: [
    /* @__PURE__ */ e("circle", { cx: 12, cy: 12, r: 10, stroke: n, strokeWidth: 2 }),
    /* @__PURE__ */ e("ellipse", { cx: 12, cy: 12, rx: 4, ry: 10, stroke: n, strokeWidth: 2 }),
    /* @__PURE__ */ e("line", { x1: 2, y1: 12, x2: 22, y2: 12, stroke: n, strokeWidth: 2, strokeLinecap: "round" })
  ] })
}), zi = F({
  displayName: "Info",
  viewBox: "0 0 24 24",
  path: (n) => /* @__PURE__ */ d(O, { children: [
    /* @__PURE__ */ e("circle", { cx: 12, cy: 12, r: 10, stroke: n, strokeWidth: 2 }),
    /* @__PURE__ */ e("line", { x1: 12, y1: 16, x2: 12, y2: 12, stroke: n, strokeWidth: 2, strokeLinecap: "round" }),
    /* @__PURE__ */ e("circle", { cx: 12, cy: 8, r: 0.5, fill: n, stroke: n, strokeWidth: 1 })
  ] })
}), Hi = F({
  displayName: "Warning",
  viewBox: "0 0 24 24",
  path: (n) => /* @__PURE__ */ d(O, { children: [
    /* @__PURE__ */ e("path", { d: "M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0Z", stroke: n, strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" }),
    /* @__PURE__ */ e("line", { x1: 12, y1: 9, x2: 12, y2: 13, stroke: n, strokeWidth: 2, strokeLinecap: "round" }),
    /* @__PURE__ */ e("circle", { cx: 12, cy: 17, r: 0.5, fill: n, stroke: n, strokeWidth: 1 })
  ] })
}), qi = F({
  displayName: "ErrorIcon",
  viewBox: "0 0 24 24",
  path: (n) => /* @__PURE__ */ d(O, { children: [
    /* @__PURE__ */ e("circle", { cx: 12, cy: 12, r: 10, stroke: n, strokeWidth: 2 }),
    /* @__PURE__ */ e("line", { x1: 15, y1: 9, x2: 9, y2: 15, stroke: n, strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" }),
    /* @__PURE__ */ e("line", { x1: 9, y1: 9, x2: 15, y2: 15, stroke: n, strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" })
  ] })
}), Gi = F({
  displayName: "Success",
  viewBox: "0 0 24 24",
  path: (n) => /* @__PURE__ */ d(O, { children: [
    /* @__PURE__ */ e("circle", { cx: 12, cy: 12, r: 10, stroke: n, strokeWidth: 2 }),
    /* @__PURE__ */ e("polyline", { points: "8 12 11 15 16 9", stroke: n, strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" })
  ] })
}), Ui = F({
  displayName: "Help",
  viewBox: "0 0 24 24",
  path: (n) => /* @__PURE__ */ d(O, { children: [
    /* @__PURE__ */ e("circle", { cx: 12, cy: 12, r: 10, stroke: n, strokeWidth: 2 }),
    /* @__PURE__ */ e("path", { d: "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3", stroke: n, strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" }),
    /* @__PURE__ */ e("circle", { cx: 12, cy: 17, r: 0.5, fill: n, stroke: n, strokeWidth: 1 })
  ] })
}), Vi = F({
  displayName: "Wallet",
  viewBox: "0 0 48 48",
  illustrative: !0,
  path: (n, t) => /* @__PURE__ */ d(O, { children: [
    /* @__PURE__ */ e("rect", { x: 6, y: 14, width: 36, height: 26, rx: 3, stroke: t, strokeWidth: 3, strokeLinecap: "round", strokeLinejoin: "round" }),
    /* @__PURE__ */ e("path", { d: "M6 14V12a4 4 0 0 1 4-4h24a4 4 0 0 1 4 4v2", stroke: n, strokeWidth: 1.5, strokeLinecap: "round", strokeLinejoin: "round" }),
    /* @__PURE__ */ e("rect", { x: 30, y: 22, width: 12, height: 10, rx: 2, stroke: n, strokeWidth: 1.5 }),
    /* @__PURE__ */ e("circle", { cx: 36, cy: 27, r: 2, stroke: n, strokeWidth: 1.5 }),
    /* @__PURE__ */ e("line", { x1: 10, y1: 18, x2: 28, y2: 18, stroke: n, strokeWidth: 1.5, strokeLinecap: "round", strokeDasharray: "3 3" })
  ] })
}), Zi = F({
  displayName: "CreditCard",
  viewBox: "0 0 48 48",
  illustrative: !0,
  path: (n, t) => /* @__PURE__ */ d(O, { children: [
    /* @__PURE__ */ e("rect", { x: 4, y: 10, width: 40, height: 28, rx: 4, stroke: t, strokeWidth: 3, strokeLinecap: "round", strokeLinejoin: "round" }),
    /* @__PURE__ */ e("line", { x1: 4, y1: 18, x2: 44, y2: 18, stroke: n, strokeWidth: 1.5 }),
    /* @__PURE__ */ e("line", { x1: 4, y1: 22, x2: 44, y2: 22, stroke: n, strokeWidth: 1.5 }),
    /* @__PURE__ */ e("rect", { x: 10, y: 26, width: 8, height: 6, rx: 1, stroke: n, strokeWidth: 1.5 }),
    /* @__PURE__ */ e("circle", { cx: 28, cy: 32, r: 1, fill: n }),
    /* @__PURE__ */ e("circle", { cx: 32, cy: 32, r: 1, fill: n }),
    /* @__PURE__ */ e("circle", { cx: 36, cy: 32, r: 1, fill: n }),
    /* @__PURE__ */ e("circle", { cx: 40, cy: 32, r: 1, fill: n })
  ] })
}), Ki = F({
  displayName: "BankNote",
  viewBox: "0 0 48 48",
  illustrative: !0,
  path: (n, t) => /* @__PURE__ */ d(O, { children: [
    /* @__PURE__ */ e("rect", { x: 4, y: 12, width: 40, height: 24, rx: 2, stroke: t, strokeWidth: 3, strokeLinejoin: "round" }),
    /* @__PURE__ */ e("circle", { cx: 24, cy: 24, r: 7, stroke: n, strokeWidth: 1.5 }),
    /* @__PURE__ */ e("text", { x: 24, y: 28, textAnchor: "middle", fontSize: 10, fontWeight: "bold", fill: n, fontFamily: "sans-serif", children: "£" }),
    /* @__PURE__ */ e("path", { d: "M10 16h4v4", stroke: n, strokeWidth: 1.5, strokeLinecap: "round", strokeLinejoin: "round" }),
    /* @__PURE__ */ e("path", { d: "M38 16h-4v4", stroke: n, strokeWidth: 1.5, strokeLinecap: "round", strokeLinejoin: "round" }),
    /* @__PURE__ */ e("path", { d: "M10 32h4v-4", stroke: n, strokeWidth: 1.5, strokeLinecap: "round", strokeLinejoin: "round" }),
    /* @__PURE__ */ e("path", { d: "M38 32h-4v-4", stroke: n, strokeWidth: 1.5, strokeLinecap: "round", strokeLinejoin: "round" })
  ] })
}), Yi = F({
  displayName: "Coins",
  viewBox: "0 0 48 48",
  illustrative: !0,
  path: (n, t) => /* @__PURE__ */ d(O, { children: [
    /* @__PURE__ */ e("ellipse", { cx: 28, cy: 20, rx: 14, ry: 6, stroke: t, strokeWidth: 3 }),
    /* @__PURE__ */ e("path", { d: "M14 20v8c0 3.31 6.27 6 14 6s14-2.69 14-6v-8", stroke: t, strokeWidth: 3 }),
    /* @__PURE__ */ e("ellipse", { cx: 20, cy: 28, rx: 14, ry: 6, stroke: n, strokeWidth: 1.5 }),
    /* @__PURE__ */ e("path", { d: "M6 28v8c0 3.31 6.27 6 14 6s14-2.69 14-6v-8", stroke: n, strokeWidth: 1.5 }),
    /* @__PURE__ */ e("ellipse", { cx: 20, cy: 32, rx: 14, ry: 6, stroke: n, strokeWidth: 1.5, strokeDasharray: "4 3" })
  ] })
}), Xi = F({
  displayName: "PiggyBank",
  viewBox: "0 0 48 48",
  illustrative: !0,
  path: (n, t) => /* @__PURE__ */ d(O, { children: [
    /* @__PURE__ */ e("path", { d: "M14 36c-2-2-4-6-4-10 0-7.18 6.27-13 14-13s14 5.82 14 13c0 4-2 8-4 10", stroke: t, strokeWidth: 3, strokeLinecap: "round", strokeLinejoin: "round" }),
    /* @__PURE__ */ e("line", { x1: 16, y1: 36, x2: 14, y2: 42, stroke: t, strokeWidth: 3, strokeLinecap: "round" }),
    /* @__PURE__ */ e("line", { x1: 32, y1: 36, x2: 34, y2: 42, stroke: t, strokeWidth: 3, strokeLinecap: "round" }),
    /* @__PURE__ */ e("path", { d: "M20 13c-1-4 1-7 4-8", stroke: n, strokeWidth: 1.5, strokeLinecap: "round" }),
    /* @__PURE__ */ e("circle", { cx: 20, cy: 22, r: 1.5, fill: n }),
    /* @__PURE__ */ e("ellipse", { cx: 36, cy: 24, rx: 4, ry: 3, stroke: n, strokeWidth: 1.5 }),
    /* @__PURE__ */ e("circle", { cx: 35, cy: 23.5, r: 0.8, fill: n }),
    /* @__PURE__ */ e("circle", { cx: 37, cy: 23.5, r: 0.8, fill: n }),
    /* @__PURE__ */ e("line", { x1: 22, y1: 10, x2: 28, y2: 10, stroke: n, strokeWidth: 1.5, strokeLinecap: "round" }),
    /* @__PURE__ */ e("path", { d: "M10 22c-2-1-4 0-4 2s2 3 3 2", stroke: n, strokeWidth: 1.5, strokeLinecap: "round" })
  ] })
}), Qi = F({
  displayName: "SafeBox",
  viewBox: "0 0 48 48",
  illustrative: !0,
  path: (n, t) => /* @__PURE__ */ d(O, { children: [
    /* @__PURE__ */ e("rect", { x: 6, y: 6, width: 36, height: 36, rx: 3, stroke: t, strokeWidth: 3, strokeLinejoin: "round" }),
    /* @__PURE__ */ e("rect", { x: 10, y: 10, width: 28, height: 28, rx: 1, stroke: n, strokeWidth: 1.5 }),
    /* @__PURE__ */ e("circle", { cx: 24, cy: 24, r: 8, stroke: n, strokeWidth: 1.5 }),
    /* @__PURE__ */ e("circle", { cx: 24, cy: 24, r: 3, stroke: n, strokeWidth: 1.5 }),
    /* @__PURE__ */ e("line", { x1: 24, y1: 16, x2: 24, y2: 18, stroke: n, strokeWidth: 1.5, strokeLinecap: "round" }),
    /* @__PURE__ */ e("line", { x1: 24, y1: 30, x2: 24, y2: 32, stroke: n, strokeWidth: 1.5, strokeLinecap: "round" }),
    /* @__PURE__ */ e("line", { x1: 16, y1: 24, x2: 18, y2: 24, stroke: n, strokeWidth: 1.5, strokeLinecap: "round" }),
    /* @__PURE__ */ e("line", { x1: 30, y1: 24, x2: 32, y2: 24, stroke: n, strokeWidth: 1.5, strokeLinecap: "round" }),
    /* @__PURE__ */ e("rect", { x: 36, y: 20, width: 4, height: 8, rx: 1, stroke: n, strokeWidth: 1.5 }),
    /* @__PURE__ */ e("line", { x1: 10, y1: 42, x2: 10, y2: 46, stroke: n, strokeWidth: 1.5, strokeLinecap: "round" }),
    /* @__PURE__ */ e("line", { x1: 38, y1: 42, x2: 38, y2: 46, stroke: n, strokeWidth: 1.5, strokeLinecap: "round" })
  ] })
}), Ji = F({
  displayName: "Growth",
  viewBox: "0 0 48 48",
  illustrative: !0,
  path: (n, t) => /* @__PURE__ */ d(O, { children: [
    /* @__PURE__ */ e("polyline", { points: "6 38 16 28 24 32 42 10", stroke: t, strokeWidth: 3, strokeLinecap: "round", strokeLinejoin: "round" }),
    /* @__PURE__ */ e("polyline", { points: "34 10 42 10 42 18", stroke: t, strokeWidth: 3, strokeLinecap: "round", strokeLinejoin: "round" }),
    /* @__PURE__ */ e("line", { x1: 6, y1: 42, x2: 42, y2: 42, stroke: n, strokeWidth: 1.5, strokeLinecap: "round" }),
    /* @__PURE__ */ e("line", { x1: 6, y1: 10, x2: 6, y2: 42, stroke: n, strokeWidth: 1.5, strokeLinecap: "round" }),
    /* @__PURE__ */ e("line", { x1: 6, y1: 18, x2: 42, y2: 18, stroke: n, strokeWidth: 1.5, strokeDasharray: "3 4", opacity: 0.4 }),
    /* @__PURE__ */ e("line", { x1: 6, y1: 26, x2: 42, y2: 26, stroke: n, strokeWidth: 1.5, strokeDasharray: "3 4", opacity: 0.4 }),
    /* @__PURE__ */ e("line", { x1: 6, y1: 34, x2: 42, y2: 34, stroke: n, strokeWidth: 1.5, strokeDasharray: "3 4", opacity: 0.4 })
  ] })
}), ea = F({
  displayName: "Portfolio",
  viewBox: "0 0 48 48",
  illustrative: !0,
  path: (n, t) => /* @__PURE__ */ d(O, { children: [
    /* @__PURE__ */ e("path", { d: "M4 14h40a2 2 0 0 1 2 2v24a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V16a2 2 0 0 1 2-2Z", stroke: t, strokeWidth: 3, strokeLinejoin: "round" }),
    /* @__PURE__ */ e("path", { d: "M2 14V10a2 2 0 0 1 2-2h12l4 6", stroke: n, strokeWidth: 1.5, strokeLinecap: "round", strokeLinejoin: "round" }),
    /* @__PURE__ */ e("line", { x1: 14, y1: 34, x2: 14, y2: 24, stroke: n, strokeWidth: 1.5, strokeLinecap: "round" }),
    /* @__PURE__ */ e("line", { x1: 20, y1: 34, x2: 20, y2: 28, stroke: n, strokeWidth: 1.5, strokeLinecap: "round" }),
    /* @__PURE__ */ e("line", { x1: 26, y1: 34, x2: 26, y2: 22, stroke: n, strokeWidth: 1.5, strokeLinecap: "round" }),
    /* @__PURE__ */ e("line", { x1: 32, y1: 34, x2: 32, y2: 26, stroke: n, strokeWidth: 1.5, strokeLinecap: "round" }),
    /* @__PURE__ */ e("line", { x1: 10, y1: 34, x2: 36, y2: 34, stroke: n, strokeWidth: 1.5, strokeLinecap: "round" })
  ] })
}), ta = F({
  displayName: "Briefcase",
  viewBox: "0 0 48 48",
  illustrative: !0,
  path: (n, t) => /* @__PURE__ */ d(O, { children: [
    /* @__PURE__ */ e("rect", { x: 4, y: 16, width: 40, height: 24, rx: 3, stroke: t, strokeWidth: 3, strokeLinejoin: "round" }),
    /* @__PURE__ */ e("path", { d: "M16 16V12a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v4", stroke: n, strokeWidth: 1.5, strokeLinecap: "round", strokeLinejoin: "round" }),
    /* @__PURE__ */ e("line", { x1: 4, y1: 28, x2: 44, y2: 28, stroke: n, strokeWidth: 1.5 }),
    /* @__PURE__ */ e("rect", { x: 20, y: 24, width: 8, height: 8, rx: 1, stroke: n, strokeWidth: 1.5 })
  ] })
}), na = F({
  displayName: "Handshake",
  viewBox: "0 0 48 48",
  illustrative: !0,
  path: (n, t) => /* @__PURE__ */ d(O, { children: [
    /* @__PURE__ */ e("path", { d: "M4 20l8-6h8", stroke: t, strokeWidth: 3, strokeLinecap: "round", strokeLinejoin: "round" }),
    /* @__PURE__ */ e("path", { d: "M44 20l-8-6h-8", stroke: t, strokeWidth: 3, strokeLinecap: "round", strokeLinejoin: "round" }),
    /* @__PURE__ */ e("path", { d: "M20 14l-4 8 6 4 8-4-2-8", stroke: n, strokeWidth: 1.5, strokeLinecap: "round", strokeLinejoin: "round" }),
    /* @__PURE__ */ e("path", { d: "M22 26l-4 4", stroke: n, strokeWidth: 1.5, strokeLinecap: "round" }),
    /* @__PURE__ */ e("path", { d: "M26 26l4 4", stroke: n, strokeWidth: 1.5, strokeLinecap: "round" }),
    /* @__PURE__ */ e("line", { x1: 4, y1: 20, x2: 4, y2: 32, stroke: n, strokeWidth: 1.5, strokeLinecap: "round" }),
    /* @__PURE__ */ e("line", { x1: 44, y1: 20, x2: 44, y2: 32, stroke: n, strokeWidth: 1.5, strokeLinecap: "round" }),
    /* @__PURE__ */ e("circle", { cx: 24, cy: 8, r: 1, fill: n }),
    /* @__PURE__ */ e("circle", { cx: 18, cy: 10, r: 0.8, fill: n }),
    /* @__PURE__ */ e("circle", { cx: 30, cy: 10, r: 0.8, fill: n })
  ] })
}), ra = F({
  displayName: "Target",
  viewBox: "0 0 48 48",
  illustrative: !0,
  path: (n, t) => /* @__PURE__ */ d(O, { children: [
    /* @__PURE__ */ e("circle", { cx: 24, cy: 24, r: 20, stroke: t, strokeWidth: 3 }),
    /* @__PURE__ */ e("circle", { cx: 24, cy: 24, r: 13, stroke: n, strokeWidth: 1.5 }),
    /* @__PURE__ */ e("circle", { cx: 24, cy: 24, r: 6, stroke: n, strokeWidth: 1.5 }),
    /* @__PURE__ */ e("circle", { cx: 24, cy: 24, r: 2, fill: t }),
    /* @__PURE__ */ e("line", { x1: 24, y1: 2, x2: 24, y2: 10, stroke: n, strokeWidth: 1.5, strokeLinecap: "round" }),
    /* @__PURE__ */ e("line", { x1: 24, y1: 38, x2: 24, y2: 46, stroke: n, strokeWidth: 1.5, strokeLinecap: "round" }),
    /* @__PURE__ */ e("line", { x1: 2, y1: 24, x2: 10, y2: 24, stroke: n, strokeWidth: 1.5, strokeLinecap: "round" }),
    /* @__PURE__ */ e("line", { x1: 38, y1: 24, x2: 46, y2: 24, stroke: n, strokeWidth: 1.5, strokeLinecap: "round" })
  ] })
}), oa = F({
  displayName: "Award",
  viewBox: "0 0 48 48",
  illustrative: !0,
  path: (n, t) => /* @__PURE__ */ d(O, { children: [
    /* @__PURE__ */ e("circle", { cx: 24, cy: 18, r: 14, stroke: t, strokeWidth: 3 }),
    /* @__PURE__ */ e("path", { d: "M24 8l3 6 7 1-5 5 1 7-6-3-6 3 1-7-5-5 7-1 3-6Z", stroke: n, strokeWidth: 1.5, strokeLinejoin: "round" }),
    /* @__PURE__ */ e("line", { x1: 16, y1: 30, x2: 10, y2: 44, stroke: t, strokeWidth: 3, strokeLinecap: "round" }),
    /* @__PURE__ */ e("line", { x1: 10, y1: 44, x2: 16, y2: 40, stroke: n, strokeWidth: 1.5, strokeLinecap: "round" }),
    /* @__PURE__ */ e("line", { x1: 32, y1: 30, x2: 38, y2: 44, stroke: t, strokeWidth: 3, strokeLinecap: "round" }),
    /* @__PURE__ */ e("line", { x1: 38, y1: 44, x2: 32, y2: 40, stroke: n, strokeWidth: 1.5, strokeLinecap: "round" })
  ] })
}), sa = F({
  displayName: "Lightbulb",
  viewBox: "0 0 48 48",
  illustrative: !0,
  path: (n, t) => /* @__PURE__ */ d(O, { children: [
    /* @__PURE__ */ e("path", { d: "M18 30c-1-2-4-5-4-10a10 10 0 0 1 20 0c0 5-3 8-4 10", stroke: t, strokeWidth: 3, strokeLinecap: "round", strokeLinejoin: "round" }),
    /* @__PURE__ */ e("line", { x1: 18, y1: 34, x2: 30, y2: 34, stroke: n, strokeWidth: 1.5, strokeLinecap: "round" }),
    /* @__PURE__ */ e("line", { x1: 19, y1: 38, x2: 29, y2: 38, stroke: n, strokeWidth: 1.5, strokeLinecap: "round" }),
    /* @__PURE__ */ e("path", { d: "M20 42h8", stroke: n, strokeWidth: 1.5, strokeLinecap: "round" }),
    /* @__PURE__ */ e("path", { d: "M20 30v-6l4 4 4-4v6", stroke: n, strokeWidth: 1.5, strokeLinecap: "round", strokeLinejoin: "round" }),
    /* @__PURE__ */ e("line", { x1: 24, y1: 2, x2: 24, y2: 6, stroke: n, strokeWidth: 1.5, strokeLinecap: "round" }),
    /* @__PURE__ */ e("line", { x1: 38, y1: 10, x2: 35, y2: 12, stroke: n, strokeWidth: 1.5, strokeLinecap: "round" }),
    /* @__PURE__ */ e("line", { x1: 10, y1: 10, x2: 13, y2: 12, stroke: n, strokeWidth: 1.5, strokeLinecap: "round" })
  ] })
}), ia = F({
  displayName: "Presentation",
  viewBox: "0 0 48 48",
  illustrative: !0,
  path: (n, t) => /* @__PURE__ */ d(O, { children: [
    /* @__PURE__ */ e("rect", { x: 4, y: 8, width: 40, height: 28, rx: 2, stroke: t, strokeWidth: 3, strokeLinejoin: "round" }),
    /* @__PURE__ */ e("line", { x1: 4, y1: 14, x2: 44, y2: 14, stroke: n, strokeWidth: 1.5 }),
    /* @__PURE__ */ e("line", { x1: 24, y1: 36, x2: 24, y2: 44, stroke: n, strokeWidth: 1.5, strokeLinecap: "round" }),
    /* @__PURE__ */ e("line", { x1: 18, y1: 44, x2: 30, y2: 44, stroke: n, strokeWidth: 1.5, strokeLinecap: "round" }),
    /* @__PURE__ */ e("polyline", { points: "10 32 18 24 26 28 38 18", stroke: n, strokeWidth: 1.5, strokeLinecap: "round", strokeLinejoin: "round" }),
    /* @__PURE__ */ e("polyline", { points: "34 18 38 18 38 22", stroke: n, strokeWidth: 1.5, strokeLinecap: "round", strokeLinejoin: "round" })
  ] })
}), aa = F({
  displayName: "Contract",
  viewBox: "0 0 48 48",
  illustrative: !0,
  path: (n, t) => /* @__PURE__ */ d(O, { children: [
    /* @__PURE__ */ e("path", { d: "M10 4h20l10 10v30a2 2 0 0 1-2 2H10a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z", stroke: t, strokeWidth: 3, strokeLinejoin: "round" }),
    /* @__PURE__ */ e("path", { d: "M30 4v10h10", stroke: n, strokeWidth: 1.5, strokeLinejoin: "round" }),
    /* @__PURE__ */ e("line", { x1: 16, y1: 22, x2: 32, y2: 22, stroke: n, strokeWidth: 1.5, strokeLinecap: "round" }),
    /* @__PURE__ */ e("line", { x1: 16, y1: 28, x2: 32, y2: 28, stroke: n, strokeWidth: 1.5, strokeLinecap: "round" }),
    /* @__PURE__ */ e("line", { x1: 16, y1: 34, x2: 26, y2: 34, stroke: n, strokeWidth: 1.5, strokeLinecap: "round" }),
    /* @__PURE__ */ e("line", { x1: 22, y1: 40, x2: 36, y2: 40, stroke: n, strokeWidth: 1.5, strokeLinecap: "round" }),
    /* @__PURE__ */ e("path", { d: "M24 38c2-1 3 1 5 0s2-2 4-1", stroke: n, strokeWidth: 1.5, strokeLinecap: "round" })
  ] })
}), la = F({
  displayName: "Building",
  viewBox: "0 0 48 48",
  illustrative: !0,
  path: (n, t) => /* @__PURE__ */ d(O, { children: [
    /* @__PURE__ */ e("rect", { x: 8, y: 10, width: 32, height: 34, stroke: t, strokeWidth: 3, strokeLinejoin: "round" }),
    /* @__PURE__ */ e("path", { d: "M4 10h40", stroke: t, strokeWidth: 3, strokeLinecap: "round" }),
    /* @__PURE__ */ e("line", { x1: 8, y1: 10, x2: 8, y2: 6, stroke: n, strokeWidth: 1.5, strokeLinecap: "round" }),
    /* @__PURE__ */ e("line", { x1: 40, y1: 10, x2: 40, y2: 6, stroke: n, strokeWidth: 1.5, strokeLinecap: "round" }),
    /* @__PURE__ */ e("line", { x1: 8, y1: 6, x2: 40, y2: 6, stroke: n, strokeWidth: 1.5 }),
    /* @__PURE__ */ e("rect", { x: 14, y: 16, width: 6, height: 6, stroke: n, strokeWidth: 1.5 }),
    /* @__PURE__ */ e("rect", { x: 28, y: 16, width: 6, height: 6, stroke: n, strokeWidth: 1.5 }),
    /* @__PURE__ */ e("rect", { x: 14, y: 28, width: 6, height: 6, stroke: n, strokeWidth: 1.5 }),
    /* @__PURE__ */ e("rect", { x: 28, y: 28, width: 6, height: 6, stroke: n, strokeWidth: 1.5 }),
    /* @__PURE__ */ e("rect", { x: 20, y: 36, width: 8, height: 8, rx: 1, stroke: n, strokeWidth: 1.5 }),
    /* @__PURE__ */ e("circle", { cx: 26, cy: 40, r: 0.8, fill: n })
  ] })
}), ca = F({
  displayName: "Shield",
  viewBox: "0 0 48 48",
  illustrative: !0,
  path: (n, t) => /* @__PURE__ */ d(O, { children: [
    /* @__PURE__ */ e("path", { d: "M24 4L6 12v12c0 11 8 18 18 22 10-4 18-11 18-22V12L24 4Z", stroke: t, strokeWidth: 3, strokeLinejoin: "round" }),
    /* @__PURE__ */ e("path", { d: "M24 10L12 16v8c0 8 5.5 13 12 16 6.5-3 12-8 12-16v-8L24 10Z", stroke: n, strokeWidth: 1.5, strokeLinejoin: "round" }),
    /* @__PURE__ */ e("polyline", { points: "18 24 22 28 30 20", stroke: n, strokeWidth: 1.5, strokeLinecap: "round", strokeLinejoin: "round" })
  ] })
}), da = F({
  displayName: "Lock",
  viewBox: "0 0 48 48",
  illustrative: !0,
  path: (n, t) => /* @__PURE__ */ d(O, { children: [
    /* @__PURE__ */ e("rect", { x: 10, y: 22, width: 28, height: 22, rx: 3, stroke: t, strokeWidth: 3, strokeLinejoin: "round" }),
    /* @__PURE__ */ e("path", { d: "M16 22V14a8 8 0 0 1 16 0v8", stroke: n, strokeWidth: 1.5, strokeLinecap: "round", strokeLinejoin: "round" }),
    /* @__PURE__ */ e("circle", { cx: 24, cy: 32, r: 3, stroke: n, strokeWidth: 1.5 }),
    /* @__PURE__ */ e("line", { x1: 24, y1: 35, x2: 24, y2: 39, stroke: n, strokeWidth: 1.5, strokeLinecap: "round" })
  ] })
}), ha = F({
  displayName: "Key",
  viewBox: "0 0 48 48",
  illustrative: !0,
  path: (n, t) => /* @__PURE__ */ d(O, { children: [
    /* @__PURE__ */ e("circle", { cx: 14, cy: 14, r: 10, stroke: t, strokeWidth: 3 }),
    /* @__PURE__ */ e("circle", { cx: 14, cy: 14, r: 4, stroke: n, strokeWidth: 1.5 }),
    /* @__PURE__ */ e("line", { x1: 22, y1: 22, x2: 42, y2: 42, stroke: t, strokeWidth: 3, strokeLinecap: "round" }),
    /* @__PURE__ */ e("line", { x1: 32, y1: 32, x2: 36, y2: 28, stroke: n, strokeWidth: 1.5, strokeLinecap: "round" }),
    /* @__PURE__ */ e("line", { x1: 36, y1: 36, x2: 40, y2: 32, stroke: n, strokeWidth: 1.5, strokeLinecap: "round" }),
    /* @__PURE__ */ e("line", { x1: 42, y1: 42, x2: 44, y2: 38, stroke: n, strokeWidth: 1.5, strokeLinecap: "round" })
  ] })
}), pa = F({
  displayName: "Fingerprint",
  viewBox: "0 0 48 48",
  illustrative: !0,
  path: (n, t) => /* @__PURE__ */ d(O, { children: [
    /* @__PURE__ */ e("path", { d: "M8 28c0-8.84 7.16-16 16-16s16 7.16 16 16", stroke: t, strokeWidth: 3, strokeLinecap: "round" }),
    /* @__PURE__ */ e("path", { d: "M14 28c0-5.52 4.48-10 10-10s10 4.48 10 10", stroke: n, strokeWidth: 1.5, strokeLinecap: "round" }),
    /* @__PURE__ */ e("path", { d: "M18 28a6 6 0 0 1 12 0", stroke: n, strokeWidth: 1.5, strokeLinecap: "round" }),
    /* @__PURE__ */ e("path", { d: "M22 28a2 2 0 0 1 4 0", stroke: n, strokeWidth: 1.5, strokeLinecap: "round" }),
    /* @__PURE__ */ e("path", { d: "M22 28v8", stroke: n, strokeWidth: 1.5, strokeLinecap: "round" }),
    /* @__PURE__ */ e("path", { d: "M26 28v12", stroke: n, strokeWidth: 1.5, strokeLinecap: "round" }),
    /* @__PURE__ */ e("path", { d: "M18 28v10c0 2 1 4 3 4", stroke: n, strokeWidth: 1.5, strokeLinecap: "round" }),
    /* @__PURE__ */ e("path", { d: "M30 28v6c0 3-2 5-4 6", stroke: n, strokeWidth: 1.5, strokeLinecap: "round" }),
    /* @__PURE__ */ e("path", { d: "M34 28v4c0 4-3 8-6 10", stroke: n, strokeWidth: 1.5, strokeLinecap: "round" }),
    /* @__PURE__ */ e("path", { d: "M14 28v6c0 4 2 7 5 9", stroke: t, strokeWidth: 3, strokeLinecap: "round" })
  ] })
}), ua = B(
  ({ size: n = 200, colour: t = "#000000", accentColour: r = "#E60000", className: o, ...s }, l) => {
    const i = typeof n == "number" ? n : 200, a = Math.round(i * 0.75);
    return /* @__PURE__ */ d(
      "svg",
      {
        ref: l,
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 200 150",
        width: i,
        height: a,
        fill: "none",
        "aria-hidden": "true",
        role: "img",
        focusable: "false",
        className: o,
        ...s,
        children: [
          /* @__PURE__ */ e("path", { d: "M30 105h140v4H30z", fill: "#CCCABC" }),
          /* @__PURE__ */ e("rect", { x: 30, y: 105, width: 140, height: 4, rx: 1, stroke: t, strokeWidth: 1.5 }),
          /* @__PURE__ */ e("line", { x1: 40, y1: 109, x2: 38, y2: 142, stroke: t, strokeWidth: 1.5, strokeLinecap: "round" }),
          /* @__PURE__ */ e("line", { x1: 160, y1: 109, x2: 162, y2: 142, stroke: t, strokeWidth: 1.5, strokeLinecap: "round" }),
          /* @__PURE__ */ e("path", { d: "M52 112c-1 0-3 1-3 4v20c0 2 1 3 2 3", stroke: t, strokeWidth: 1.5, strokeLinecap: "round" }),
          /* @__PURE__ */ e("path", { d: "M68 112c1 0 3 1 3 4v20c0 2-1 3-2 3", stroke: t, strokeWidth: 1.5, strokeLinecap: "round" }),
          /* @__PURE__ */ e("path", { d: "M49 116h22", stroke: t, strokeWidth: 1.5, strokeLinecap: "round" }),
          /* @__PURE__ */ e("path", { d: "M80 103h50l3-2H77l3 2Z", fill: "#B8B3A2", stroke: t, strokeWidth: 1.2, strokeLinejoin: "round" }),
          /* @__PURE__ */ e("rect", { x: 83, y: 78, width: 44, height: 25, rx: 2, stroke: t, strokeWidth: 1.5 }),
          /* @__PURE__ */ e("line", { x1: 89, y1: 85, x2: 105, y2: 85, stroke: r, strokeWidth: 1.5, strokeLinecap: "round" }),
          /* @__PURE__ */ e("line", { x1: 89, y1: 90, x2: 120, y2: 90, stroke: t, strokeWidth: 1, strokeLinecap: "round", opacity: 0.4 }),
          /* @__PURE__ */ e("line", { x1: 89, y1: 94, x2: 115, y2: 94, stroke: t, strokeWidth: 1, strokeLinecap: "round", opacity: 0.4 }),
          /* @__PURE__ */ e("circle", { cx: 60, cy: 62, r: 8, stroke: t, strokeWidth: 1.8 }),
          /* @__PURE__ */ e("path", { d: "M53 58c0-5 3-9 8-9s7 4 7 8", stroke: t, strokeWidth: 1.5, strokeLinecap: "round" }),
          /* @__PURE__ */ e("circle", { cx: 58, cy: 61, r: 1, fill: t }),
          /* @__PURE__ */ e("circle", { cx: 63, cy: 61, r: 1, fill: t }),
          /* @__PURE__ */ e("path", { d: "M57 65c1 1.5 4 1.5 5 0", stroke: t, strokeWidth: 1, strokeLinecap: "round" }),
          /* @__PURE__ */ e("line", { x1: 60, y1: 70, x2: 60, y2: 74, stroke: t, strokeWidth: 1.5, strokeLinecap: "round" }),
          /* @__PURE__ */ e("path", { d: "M50 74h20c1 0 2 1 2 2v14H48V76c0-1 1-2 2-2Z", stroke: t, strokeWidth: 1.5, strokeLinejoin: "round" }),
          /* @__PURE__ */ e("line", { x1: 60, y1: 74, x2: 60, y2: 90, stroke: r, strokeWidth: 1.5, strokeLinecap: "round" }),
          /* @__PURE__ */ e("path", { d: "M50 78c-5 2-8 8-8 15l-2 12", stroke: t, strokeWidth: 1.5, strokeLinecap: "round" }),
          /* @__PURE__ */ e("path", { d: "M70 78c4-2 10-6 16-14", stroke: t, strokeWidth: 1.5, strokeLinecap: "round" }),
          /* @__PURE__ */ e("path", { d: "M86 64c1-2 3-3 4-2s0 3-1 4l-3 3", stroke: t, strokeWidth: 1.5, strokeLinecap: "round" }),
          /* @__PURE__ */ e("line", { x1: 92, y1: 60, x2: 96, y2: 58, stroke: r, strokeWidth: 1, strokeLinecap: "round" }),
          /* @__PURE__ */ e("line", { x1: 91, y1: 64, x2: 95, y2: 63, stroke: r, strokeWidth: 1, strokeLinecap: "round" }),
          /* @__PURE__ */ e("line", { x1: 90, y1: 68, x2: 94, y2: 68, stroke: r, strokeWidth: 1, strokeLinecap: "round" }),
          /* @__PURE__ */ e("path", { d: "M52 90v18c0 1 0 3 2 4l6 2", stroke: t, strokeWidth: 1.5, strokeLinecap: "round" }),
          /* @__PURE__ */ e("path", { d: "M68 90v18c0 1 0 3-2 4l-6 2", stroke: t, strokeWidth: 1.5, strokeLinecap: "round" }),
          /* @__PURE__ */ e("path", { d: "M60 114h-8c-2 0-3 1-3 2v2h14v-2c0-1-1-2-3-2Z", stroke: t, strokeWidth: 1.2, strokeLinejoin: "round" }),
          /* @__PURE__ */ e("rect", { x: 140, y: 96, width: 8, height: 9, rx: 1, stroke: t, strokeWidth: 1.2 }),
          /* @__PURE__ */ e("path", { d: "M148 98h3a2 2 0 0 1 0 4h-3", stroke: t, strokeWidth: 1 }),
          /* @__PURE__ */ e("path", { d: "M143 94c0-2 1-3 0-5", stroke: t, strokeWidth: 0.8, strokeLinecap: "round", opacity: 0.5 }),
          /* @__PURE__ */ e("path", { d: "M146 93c0-2-1-3 0-5", stroke: t, strokeWidth: 0.8, strokeLinecap: "round", opacity: 0.5 }),
          /* @__PURE__ */ e("rect", { x: 155, y: 97, width: 10, height: 8, rx: 1, fill: "#CCCABC", stroke: t, strokeWidth: 1 }),
          /* @__PURE__ */ e("path", { d: "M160 97c0-4-3-6-5-7", stroke: t, strokeWidth: 1, strokeLinecap: "round" }),
          /* @__PURE__ */ e("path", { d: "M160 97c0-5 2-7 5-8", stroke: t, strokeWidth: 1, strokeLinecap: "round" }),
          /* @__PURE__ */ e("path", { d: "M160 93c-2-3-1-6 1-7", stroke: r, strokeWidth: 1, strokeLinecap: "round" }),
          /* @__PURE__ */ e("line", { x1: 10, y1: 143, x2: 190, y2: 143, stroke: t, strokeWidth: 1, strokeLinecap: "round", opacity: 0.3 })
        ]
      }
    );
  }
);
ua.displayName = "WelcomeScene";
const ma = B(
  ({ size: n = 200, colour: t = "#000000", accentColour: r = "#E60000", className: o, ...s }, l) => {
    const i = typeof n == "number" ? n : 200, a = Math.round(i * 0.75);
    return /* @__PURE__ */ d(
      "svg",
      {
        ref: l,
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 200 150",
        width: i,
        height: a,
        fill: "none",
        "aria-hidden": "true",
        role: "img",
        focusable: "false",
        className: o,
        ...s,
        children: [
          /* @__PURE__ */ e("rect", { x: 70, y: 20, width: 120, height: 90, rx: 3, stroke: t, strokeWidth: 1.5 }),
          /* @__PURE__ */ e("line", { x1: 85, y1: 30, x2: 85, y2: 100, stroke: t, strokeWidth: 0.8, opacity: 0.2 }),
          /* @__PURE__ */ e("line", { x1: 70, y1: 50, x2: 190, y2: 50, stroke: t, strokeWidth: 0.8, opacity: 0.2 }),
          /* @__PURE__ */ e("line", { x1: 70, y1: 70, x2: 190, y2: 70, stroke: t, strokeWidth: 0.8, opacity: 0.2 }),
          /* @__PURE__ */ e("line", { x1: 70, y1: 90, x2: 190, y2: 90, stroke: t, strokeWidth: 0.8, opacity: 0.2 }),
          /* @__PURE__ */ e("line", { x1: 85, y1: 100, x2: 182, y2: 100, stroke: t, strokeWidth: 1.2, strokeLinecap: "round" }),
          /* @__PURE__ */ e("line", { x1: 85, y1: 30, x2: 85, y2: 100, stroke: t, strokeWidth: 1.2, strokeLinecap: "round" }),
          /* @__PURE__ */ e(
            "polyline",
            {
              points: "90 92 105 85 120 78 135 70 148 55 160 40 175 28",
              stroke: r,
              strokeWidth: 2.5,
              strokeLinecap: "round",
              strokeLinejoin: "round"
            }
          ),
          /* @__PURE__ */ e("polyline", { points: "170 32 175 28 179 33", stroke: r, strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" }),
          /* @__PURE__ */ e("circle", { cx: 90, cy: 92, r: 2, fill: r }),
          /* @__PURE__ */ e("circle", { cx: 120, cy: 78, r: 2, fill: r }),
          /* @__PURE__ */ e("circle", { cx: 148, cy: 55, r: 2, fill: r }),
          /* @__PURE__ */ e("circle", { cx: 175, cy: 28, r: 2, fill: r }),
          /* @__PURE__ */ e("rect", { x: 92, y: 85, width: 8, height: 15, rx: 1, fill: "#CCCABC", stroke: t, strokeWidth: 0.8 }),
          /* @__PURE__ */ e("rect", { x: 108, y: 75, width: 8, height: 25, rx: 1, fill: "#CCCABC", stroke: t, strokeWidth: 0.8 }),
          /* @__PURE__ */ e("rect", { x: 124, y: 68, width: 8, height: 32, rx: 1, fill: "#CCCABC", stroke: t, strokeWidth: 0.8 }),
          /* @__PURE__ */ e("rect", { x: 140, y: 58, width: 8, height: 42, rx: 1, fill: "#CCCABC", stroke: t, strokeWidth: 0.8 }),
          /* @__PURE__ */ e("rect", { x: 156, y: 45, width: 8, height: 55, rx: 1, fill: "#CCCABC", stroke: t, strokeWidth: 0.8 }),
          /* @__PURE__ */ e("circle", { cx: 38, cy: 48, r: 7.5, stroke: t, strokeWidth: 1.8 }),
          /* @__PURE__ */ e("path", { d: "M31.5 44c0.5-4 3-7 7-7s6 3 6.5 6", stroke: t, strokeWidth: 1.5, strokeLinecap: "round" }),
          /* @__PURE__ */ e("circle", { cx: 36, cy: 47, r: 1, fill: t }),
          /* @__PURE__ */ e("circle", { cx: 41, cy: 47, r: 1, fill: t }),
          /* @__PURE__ */ e("path", { d: "M36 51c0.8 1 3 1 4 0", stroke: t, strokeWidth: 0.8, strokeLinecap: "round" }),
          /* @__PURE__ */ e("line", { x1: 38, y1: 55.5, x2: 38, y2: 60, stroke: t, strokeWidth: 1.5 }),
          /* @__PURE__ */ e("path", { d: "M28 60h20v18H28V60Z", stroke: t, strokeWidth: 1.5, strokeLinejoin: "round" }),
          /* @__PURE__ */ e("line", { x1: 38, y1: 60, x2: 38, y2: 78, stroke: r, strokeWidth: 1.2 }),
          /* @__PURE__ */ e("path", { d: "M34 60l4 4 4-4", stroke: t, strokeWidth: 1, strokeLinecap: "round" }),
          /* @__PURE__ */ e("path", { d: "M48 64c6 0 14-2 20-6", stroke: t, strokeWidth: 1.5, strokeLinecap: "round" }),
          /* @__PURE__ */ e("path", { d: "M68 58l4-2", stroke: t, strokeWidth: 1.5, strokeLinecap: "round" }),
          /* @__PURE__ */ e("path", { d: "M68 58l3 1", stroke: t, strokeWidth: 1, strokeLinecap: "round" }),
          /* @__PURE__ */ e("path", { d: "M28 64c-4 2-8 8-8 14v4", stroke: t, strokeWidth: 1.5, strokeLinecap: "round" }),
          /* @__PURE__ */ e("path", { d: "M32 78v32c0 2 0 4 1 5l7 3", stroke: t, strokeWidth: 1.5, strokeLinecap: "round" }),
          /* @__PURE__ */ e("path", { d: "M44 78v32c0 2 0 4-1 5l-7 3", stroke: t, strokeWidth: 1.5, strokeLinecap: "round" }),
          /* @__PURE__ */ e("path", { d: "M40 118h-10c-2 0-3 1.5-3 3h16c0-1.5-1-3-3-3Z", stroke: t, strokeWidth: 1.2 }),
          /* @__PURE__ */ e("path", { d: "M36 118h10c2 0 3 1.5 3 3H33c0-1.5 1-3 3-3Z", stroke: t, strokeWidth: 1.2 }),
          /* @__PURE__ */ e("path", { d: "M12 110h20l-3 18H15l-3-18Z", fill: "#CCCABC", stroke: t, strokeWidth: 1.2, strokeLinejoin: "round" }),
          /* @__PURE__ */ e("path", { d: "M22 110v-16", stroke: t, strokeWidth: 1.2, strokeLinecap: "round" }),
          /* @__PURE__ */ e("path", { d: "M22 100c-5-2-8 0-8 3s4 3 8 1", stroke: t, strokeWidth: 1.2, strokeLinecap: "round", fill: "#CCCABC" }),
          /* @__PURE__ */ e("path", { d: "M22 94c4-3 8-1 8 2s-4 4-8 2", stroke: t, strokeWidth: 1.2, strokeLinecap: "round", fill: "#CCCABC" }),
          /* @__PURE__ */ e("path", { d: "M22 88c-3-2-6 0-6 2s3 2 6 1", stroke: r, strokeWidth: 1, strokeLinecap: "round" }),
          /* @__PURE__ */ e("line", { x1: 5, y1: 130, x2: 195, y2: 130, stroke: t, strokeWidth: 1, opacity: 0.3 })
        ]
      }
    );
  }
);
ma.displayName = "InvestmentGrowth";
const _a = B(
  ({ size: n = 200, colour: t = "#000000", accentColour: r = "#E60000", className: o, ...s }, l) => {
    const i = typeof n == "number" ? n : 200, a = Math.round(i * 0.75);
    return /* @__PURE__ */ d(
      "svg",
      {
        ref: l,
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 200 150",
        width: i,
        height: a,
        fill: "none",
        "aria-hidden": "true",
        role: "img",
        focusable: "false",
        className: o,
        ...s,
        children: [
          /* @__PURE__ */ e("circle", { cx: 62, cy: 38, r: 8, stroke: t, strokeWidth: 1.8 }),
          /* @__PURE__ */ e("path", { d: "M55 34c1-5 4-8 8-8s6 3 7 7", stroke: t, strokeWidth: 1.5, strokeLinecap: "round" }),
          /* @__PURE__ */ e("circle", { cx: 60, cy: 37, r: 1, fill: t }),
          /* @__PURE__ */ e("circle", { cx: 65, cy: 37, r: 1, fill: t }),
          /* @__PURE__ */ e("path", { d: "M59 41c1.2 1.2 4 1.2 5 0", stroke: t, strokeWidth: 0.8, strokeLinecap: "round" }),
          /* @__PURE__ */ e("line", { x1: 62, y1: 46, x2: 62, y2: 50, stroke: t, strokeWidth: 1.5 }),
          /* @__PURE__ */ e("path", { d: "M52 50h20v16H52V50Z", stroke: t, strokeWidth: 1.5, strokeLinejoin: "round" }),
          /* @__PURE__ */ e("line", { x1: 62, y1: 50, x2: 62, y2: 66, stroke: r, strokeWidth: 1.2 }),
          /* @__PURE__ */ e("path", { d: "M52 54c-5 2-8 8-7 16", stroke: t, strokeWidth: 1.5, strokeLinecap: "round" }),
          /* @__PURE__ */ e("path", { d: "M72 54c4 2 12 8 18 12", stroke: t, strokeWidth: 1.5, strokeLinecap: "round" }),
          /* @__PURE__ */ e("path", { d: "M56 66v30c0 2 0 4 1 5l6 3", stroke: t, strokeWidth: 1.5, strokeLinecap: "round" }),
          /* @__PURE__ */ e("path", { d: "M68 66v30c0 2 0 4-1 5l-6 3", stroke: t, strokeWidth: 1.5, strokeLinecap: "round" }),
          /* @__PURE__ */ e("path", { d: "M63 104h-10c-2 0-3 1.5-3 3h16c0-1.5-1-3-3-3Z", stroke: t, strokeWidth: 1.2 }),
          /* @__PURE__ */ e("path", { d: "M61 104h10c2 0 3 1.5 3 3H58c0-1.5 1-3 3-3Z", stroke: t, strokeWidth: 1.2 }),
          /* @__PURE__ */ e("circle", { cx: 138, cy: 38, r: 8, stroke: t, strokeWidth: 1.8 }),
          /* @__PURE__ */ e("path", { d: "M131 35c0.5-4 3-7 7.5-7s7 3 7 6", stroke: t, strokeWidth: 1.5, strokeLinecap: "round" }),
          /* @__PURE__ */ e("circle", { cx: 136, cy: 37, r: 1, fill: t }),
          /* @__PURE__ */ e("circle", { cx: 141, cy: 37, r: 1, fill: t }),
          /* @__PURE__ */ e("path", { d: "M135 41c1.2 1.2 4 1.2 5 0", stroke: t, strokeWidth: 0.8, strokeLinecap: "round" }),
          /* @__PURE__ */ e("line", { x1: 138, y1: 46, x2: 138, y2: 50, stroke: t, strokeWidth: 1.5 }),
          /* @__PURE__ */ e("path", { d: "M128 50h20v16h-20V50Z", stroke: t, strokeWidth: 1.5, strokeLinejoin: "round" }),
          /* @__PURE__ */ e("path", { d: "M134 50l4 3 4-3", stroke: t, strokeWidth: 1, strokeLinecap: "round" }),
          /* @__PURE__ */ e("path", { d: "M148 54c5 2 8 8 7 16", stroke: t, strokeWidth: 1.5, strokeLinecap: "round" }),
          /* @__PURE__ */ e("path", { d: "M128 54c-4 2-12 8-18 12", stroke: t, strokeWidth: 1.5, strokeLinecap: "round" }),
          /* @__PURE__ */ e("path", { d: "M132 66v30c0 2 0 4 1 5l6 3", stroke: t, strokeWidth: 1.5, strokeLinecap: "round" }),
          /* @__PURE__ */ e("path", { d: "M144 66v30c0 2 0 4-1 5l-6 3", stroke: t, strokeWidth: 1.5, strokeLinecap: "round" }),
          /* @__PURE__ */ e("path", { d: "M139 104h-10c-2 0-3 1.5-3 3h16c0-1.5-1-3-3-3Z", stroke: t, strokeWidth: 1.2 }),
          /* @__PURE__ */ e("path", { d: "M137 104h10c2 0 3 1.5 3 3h-16c0-1.5 1-3 3-3Z", stroke: t, strokeWidth: 1.2 }),
          /* @__PURE__ */ e("path", { d: "M90 66c2 0 4 1 5 2l4-2c2-1 4 0 5 1l2 3c1 2 0 3-1 4l-6 4c-2 1-4 1-5 0l-4-4c-1-2-1-4 0-5l1-2Z", stroke: t, strokeWidth: 1.5, strokeLinejoin: "round" }),
          /* @__PURE__ */ e("path", { d: "M94 68l6 6", stroke: r, strokeWidth: 2, strokeLinecap: "round" }),
          /* @__PURE__ */ e("circle", { cx: 100, cy: 54, r: 1.5, fill: r }),
          /* @__PURE__ */ e("circle", { cx: 95, cy: 50, r: 1, fill: r }),
          /* @__PURE__ */ e("circle", { cx: 105, cy: 50, r: 1, fill: r }),
          /* @__PURE__ */ e("line", { x1: 100, y1: 46, x2: 100, y2: 42, stroke: r, strokeWidth: 1, strokeLinecap: "round" }),
          /* @__PURE__ */ e("line", { x1: 92, y1: 48, x2: 89, y2: 44, stroke: r, strokeWidth: 1, strokeLinecap: "round" }),
          /* @__PURE__ */ e("line", { x1: 108, y1: 48, x2: 111, y2: 44, stroke: r, strokeWidth: 1, strokeLinecap: "round" }),
          /* @__PURE__ */ e("rect", { x: 94, y: 82, width: 12, height: 16, rx: 1, stroke: t, strokeWidth: 1 }),
          /* @__PURE__ */ e("line", { x1: 97, y1: 87, x2: 103, y2: 87, stroke: t, strokeWidth: 0.8, strokeLinecap: "round" }),
          /* @__PURE__ */ e("line", { x1: 97, y1: 90, x2: 103, y2: 90, stroke: t, strokeWidth: 0.8, strokeLinecap: "round" }),
          /* @__PURE__ */ e("line", { x1: 97, y1: 93, x2: 101, y2: 93, stroke: t, strokeWidth: 0.8, strokeLinecap: "round" }),
          /* @__PURE__ */ e("line", { x1: 20, y1: 118, x2: 180, y2: 118, stroke: t, strokeWidth: 1, opacity: 0.3 })
        ]
      }
    );
  }
);
_a.displayName = "TeamCollaboration";
const ka = B(
  ({ size: n = 200, colour: t = "#000000", accentColour: r = "#E60000", className: o, ...s }, l) => {
    const i = typeof n == "number" ? n : 200, a = Math.round(i * 0.75);
    return /* @__PURE__ */ d(
      "svg",
      {
        ref: l,
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 200 150",
        width: i,
        height: a,
        fill: "none",
        "aria-hidden": "true",
        role: "img",
        focusable: "false",
        className: o,
        ...s,
        children: [
          /* @__PURE__ */ e(
            "path",
            {
              d: "M100 12L55 30v30c0 28 18 48 45 60 27-12 45-32 45-60V30L100 12Z",
              stroke: r,
              strokeWidth: 2.5,
              strokeLinejoin: "round"
            }
          ),
          /* @__PURE__ */ e(
            "path",
            {
              d: "M100 24L65 38v22c0 22 14 38 35 48 21-10 35-26 35-48V38L100 24Z",
              stroke: t,
              strokeWidth: 1.2,
              strokeLinejoin: "round",
              opacity: 0.3
            }
          ),
          /* @__PURE__ */ e("rect", { x: 90, y: 52, width: 20, height: 16, rx: 3, stroke: t, strokeWidth: 1.5, strokeLinejoin: "round" }),
          /* @__PURE__ */ e("path", { d: "M94 52V46a6 6 0 0 1 12 0v6", stroke: t, strokeWidth: 1.5, strokeLinecap: "round" }),
          /* @__PURE__ */ e("circle", { cx: 100, cy: 59, r: 2, fill: t }),
          /* @__PURE__ */ e("line", { x1: 100, y1: 61, x2: 100, y2: 64, stroke: t, strokeWidth: 1.5, strokeLinecap: "round" }),
          /* @__PURE__ */ e("polyline", { points: "92 80 98 86 110 74", stroke: r, strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" }),
          /* @__PURE__ */ e("circle", { cx: 44, cy: 55, r: 8, stroke: t, strokeWidth: 1.8 }),
          /* @__PURE__ */ e("path", { d: "M37 51c1-5 3.5-7 7.5-7s6 2.5 6.5 6", stroke: t, strokeWidth: 1.5, strokeLinecap: "round" }),
          /* @__PURE__ */ e("circle", { cx: 42, cy: 54, r: 1, fill: t }),
          /* @__PURE__ */ e("circle", { cx: 47, cy: 54, r: 1, fill: t }),
          /* @__PURE__ */ e("path", { d: "M42 58c1 1 3.5 1 4.5 0", stroke: t, strokeWidth: 0.8, strokeLinecap: "round" }),
          /* @__PURE__ */ e("line", { x1: 44, y1: 63, x2: 44, y2: 67, stroke: t, strokeWidth: 1.5 }),
          /* @__PURE__ */ e("path", { d: "M34 67h20v16H34V67Z", stroke: t, strokeWidth: 1.5, strokeLinejoin: "round" }),
          /* @__PURE__ */ e("line", { x1: 44, y1: 67, x2: 44, y2: 83, stroke: r, strokeWidth: 1.2 }),
          /* @__PURE__ */ e("path", { d: "M34 72c-4 3-6 8-4 14", stroke: t, strokeWidth: 1.5, strokeLinecap: "round" }),
          /* @__PURE__ */ e("path", { d: "M54 72c5 0 12 2 16 6", stroke: t, strokeWidth: 1.5, strokeLinecap: "round" }),
          /* @__PURE__ */ e("circle", { cx: 70, cy: 78, r: 2.5, stroke: t, strokeWidth: 1.2 }),
          /* @__PURE__ */ e("path", { d: "M38 83v28c0 2 0 4 1 5l6 3", stroke: t, strokeWidth: 1.5, strokeLinecap: "round" }),
          /* @__PURE__ */ e("path", { d: "M50 83v28c0 2 0 4-1 5l-6 3", stroke: t, strokeWidth: 1.5, strokeLinecap: "round" }),
          /* @__PURE__ */ e("path", { d: "M45 119h-10c-2 0-3 1.5-3 3h16c0-1.5-1-3-3-3Z", stroke: t, strokeWidth: 1.2 }),
          /* @__PURE__ */ e("path", { d: "M43 119h10c2 0 3 1.5 3 3H40c0-1.5 1-3 3-3Z", stroke: t, strokeWidth: 1.2 }),
          /* @__PURE__ */ e("circle", { cx: 150, cy: 30, r: 2, fill: r }),
          /* @__PURE__ */ e("circle", { cx: 158, cy: 42, r: 1.5, fill: r }),
          /* @__PURE__ */ e("circle", { cx: 145, cy: 45, r: 1, fill: r }),
          /* @__PURE__ */ e("line", { x1: 155, y1: 26, x2: 158, y2: 22, stroke: r, strokeWidth: 1, strokeLinecap: "round" }),
          /* @__PURE__ */ e("line", { x1: 162, y1: 36, x2: 166, y2: 34, stroke: r, strokeWidth: 1, strokeLinecap: "round" }),
          /* @__PURE__ */ e("text", { x: 155, y: 60, fontSize: 6, fill: t, fontFamily: "monospace", opacity: 0.3, children: "010" }),
          /* @__PURE__ */ e("text", { x: 148, y: 70, fontSize: 6, fill: t, fontFamily: "monospace", opacity: 0.3, children: "101" }),
          /* @__PURE__ */ e("text", { x: 160, y: 80, fontSize: 6, fill: t, fontFamily: "monospace", opacity: 0.3, children: "011" }),
          /* @__PURE__ */ e("line", { x1: 10, y1: 130, x2: 190, y2: 130, stroke: t, strokeWidth: 1, opacity: 0.3 })
        ]
      }
    );
  }
);
ka.displayName = "SecurityShield";
const ga = B(
  ({ size: n = 200, colour: t = "#000000", accentColour: r = "#E60000", className: o, ...s }, l) => {
    const i = typeof n == "number" ? n : 200, a = Math.round(i * 0.75);
    return /* @__PURE__ */ d(
      "svg",
      {
        ref: l,
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 200 150",
        width: i,
        height: a,
        fill: "none",
        "aria-hidden": "true",
        role: "img",
        focusable: "false",
        className: o,
        ...s,
        children: [
          /* @__PURE__ */ e("circle", { cx: 130, cy: 58, r: 35, stroke: t, strokeWidth: 1.8 }),
          /* @__PURE__ */ e("ellipse", { cx: 130, cy: 58, rx: 35, ry: 14, stroke: t, strokeWidth: 1, opacity: 0.3 }),
          /* @__PURE__ */ e("ellipse", { cx: 130, cy: 58, rx: 35, ry: 28, stroke: t, strokeWidth: 1, opacity: 0.3 }),
          /* @__PURE__ */ e("ellipse", { cx: 130, cy: 58, rx: 14, ry: 35, stroke: t, strokeWidth: 1, opacity: 0.3 }),
          /* @__PURE__ */ e("line", { x1: 95, y1: 58, x2: 165, y2: 58, stroke: t, strokeWidth: 1, opacity: 0.3 }),
          /* @__PURE__ */ e("line", { x1: 130, y1: 23, x2: 130, y2: 93, stroke: t, strokeWidth: 1, opacity: 0.3 }),
          /* @__PURE__ */ e("circle", { cx: 110, cy: 40, r: 3, fill: r }),
          /* @__PURE__ */ e("circle", { cx: 150, cy: 45, r: 3, fill: r }),
          /* @__PURE__ */ e("circle", { cx: 140, cy: 70, r: 3, fill: r }),
          /* @__PURE__ */ e("circle", { cx: 118, cy: 68, r: 3, fill: r }),
          /* @__PURE__ */ e("circle", { cx: 130, cy: 35, r: 3, fill: r }),
          /* @__PURE__ */ e("circle", { cx: 145, cy: 60, r: 2.5, fill: r }),
          /* @__PURE__ */ e("line", { x1: 110, y1: 40, x2: 150, y2: 45, stroke: r, strokeWidth: 1, opacity: 0.6 }),
          /* @__PURE__ */ e("line", { x1: 150, y1: 45, x2: 140, y2: 70, stroke: r, strokeWidth: 1, opacity: 0.6 }),
          /* @__PURE__ */ e("line", { x1: 140, y1: 70, x2: 118, y2: 68, stroke: r, strokeWidth: 1, opacity: 0.6 }),
          /* @__PURE__ */ e("line", { x1: 118, y1: 68, x2: 110, y2: 40, stroke: r, strokeWidth: 1, opacity: 0.6 }),
          /* @__PURE__ */ e("line", { x1: 130, y1: 35, x2: 150, y2: 45, stroke: r, strokeWidth: 1, opacity: 0.6 }),
          /* @__PURE__ */ e("line", { x1: 130, y1: 35, x2: 110, y2: 40, stroke: r, strokeWidth: 1, opacity: 0.6 }),
          /* @__PURE__ */ e("line", { x1: 145, y1: 60, x2: 140, y2: 70, stroke: r, strokeWidth: 1, opacity: 0.6 }),
          /* @__PURE__ */ e("path", { d: "M168 40c4-3 8-2 10 0", stroke: t, strokeWidth: 1, strokeLinecap: "round", opacity: 0.4 }),
          /* @__PURE__ */ e("path", { d: "M172 35c5-3 10-2 12 0", stroke: t, strokeWidth: 1, strokeLinecap: "round", opacity: 0.3 }),
          /* @__PURE__ */ e("path", { d: "M168 76c4 3 8 2 10 0", stroke: t, strokeWidth: 1, strokeLinecap: "round", opacity: 0.4 }),
          /* @__PURE__ */ e("circle", { cx: 42, cy: 50, r: 8, stroke: t, strokeWidth: 1.8 }),
          /* @__PURE__ */ e("path", { d: "M35 46c0.5-4.5 3.5-8 7.5-8s7 3.5 7 7", stroke: t, strokeWidth: 1.5, strokeLinecap: "round" }),
          /* @__PURE__ */ e("circle", { cx: 41, cy: 49, r: 1, fill: t }),
          /* @__PURE__ */ e("circle", { cx: 46, cy: 49, r: 1, fill: t }),
          /* @__PURE__ */ e("path", { d: "M40 53c1 1 3.5 1 4.5 0", stroke: t, strokeWidth: 0.8, strokeLinecap: "round" }),
          /* @__PURE__ */ e("line", { x1: 42, y1: 58, x2: 42, y2: 62, stroke: t, strokeWidth: 1.5 }),
          /* @__PURE__ */ e("path", { d: "M32 62h20v16H32V62Z", stroke: t, strokeWidth: 1.5, strokeLinejoin: "round" }),
          /* @__PURE__ */ e("line", { x1: 42, y1: 62, x2: 42, y2: 78, stroke: r, strokeWidth: 1.2 }),
          /* @__PURE__ */ e("path", { d: "M52 66c6-2 20-4 34-4", stroke: t, strokeWidth: 1.5, strokeLinecap: "round" }),
          /* @__PURE__ */ e("path", { d: "M86 62c2 0 4 1 5 3", stroke: t, strokeWidth: 1.2, strokeLinecap: "round" }),
          /* @__PURE__ */ e("path", { d: "M32 66c-4 2-7 8-6 14", stroke: t, strokeWidth: 1.5, strokeLinecap: "round" }),
          /* @__PURE__ */ e("path", { d: "M36 78v30c0 2 0 4 1 5l6 3", stroke: t, strokeWidth: 1.5, strokeLinecap: "round" }),
          /* @__PURE__ */ e("path", { d: "M48 78v30c0 2 0 4-1 5l-6 3", stroke: t, strokeWidth: 1.5, strokeLinecap: "round" }),
          /* @__PURE__ */ e("path", { d: "M43 116h-10c-2 0-3 1.5-3 3h16c0-1.5-1-3-3-3Z", stroke: t, strokeWidth: 1.2 }),
          /* @__PURE__ */ e("path", { d: "M41 116h10c2 0 3 1.5 3 3H38c0-1.5 1-3 3-3Z", stroke: t, strokeWidth: 1.2 }),
          /* @__PURE__ */ e("rect", { x: 170, y: 95, width: 18, height: 14, rx: 2, stroke: t, strokeWidth: 1 }),
          /* @__PURE__ */ e("line", { x1: 174, y1: 100, x2: 184, y2: 100, stroke: t, strokeWidth: 0.8, strokeLinecap: "round" }),
          /* @__PURE__ */ e("line", { x1: 174, y1: 104, x2: 181, y2: 104, stroke: r, strokeWidth: 0.8, strokeLinecap: "round" }),
          /* @__PURE__ */ e("line", { x1: 10, y1: 128, x2: 190, y2: 128, stroke: t, strokeWidth: 1, opacity: 0.3 })
        ]
      }
    );
  }
);
ga.displayName = "GlobalNetwork";
const ya = B(
  ({ size: n = 200, colour: t = "#000000", accentColour: r = "#E60000", className: o, ...s }, l) => {
    const i = typeof n == "number" ? n : 200, a = Math.round(i * 0.75);
    return /* @__PURE__ */ d(
      "svg",
      {
        ref: l,
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 200 150",
        width: i,
        height: a,
        fill: "none",
        "aria-hidden": "true",
        role: "img",
        focusable: "false",
        className: o,
        ...s,
        children: [
          /* @__PURE__ */ e("circle", { cx: 148, cy: 55, r: 30, stroke: "#CCCABC", strokeWidth: 12 }),
          /* @__PURE__ */ e(
            "circle",
            {
              cx: 148,
              cy: 55,
              r: 30,
              stroke: r,
              strokeWidth: 12,
              strokeDasharray: "75.4 113.1",
              strokeDashoffset: 0,
              strokeLinecap: "round"
            }
          ),
          /* @__PURE__ */ e(
            "circle",
            {
              cx: 148,
              cy: 55,
              r: 30,
              stroke: t,
              strokeWidth: 12,
              strokeDasharray: "37.7 150.8",
              strokeDashoffset: -75.4,
              strokeLinecap: "round"
            }
          ),
          /* @__PURE__ */ e("circle", { cx: 148, cy: 55, r: 19, fill: "white", stroke: t, strokeWidth: 0.8 }),
          /* @__PURE__ */ e("text", { x: 148, y: 53, textAnchor: "middle", fontSize: 8, fontWeight: "bold", fill: r, fontFamily: "sans-serif", children: "40%" }),
          /* @__PURE__ */ e("text", { x: 148, y: 62, textAnchor: "middle", fontSize: 5, fill: t, fontFamily: "sans-serif", opacity: 0.6, children: "Growth" }),
          /* @__PURE__ */ e("circle", { cx: 126, cy: 95, r: 3, fill: r }),
          /* @__PURE__ */ e("text", { x: 132, y: 97, fontSize: 5, fill: t, fontFamily: "sans-serif", children: "Equities" }),
          /* @__PURE__ */ e("circle", { cx: 155, cy: 95, r: 3, fill: t }),
          /* @__PURE__ */ e("text", { x: 161, y: 97, fontSize: 5, fill: t, fontFamily: "sans-serif", children: "Bonds" }),
          /* @__PURE__ */ e("circle", { cx: 126, cy: 105, r: 3, fill: "#CCCABC" }),
          /* @__PURE__ */ e("text", { x: 132, y: 107, fontSize: 5, fill: t, fontFamily: "sans-serif", children: "Cash" }),
          /* @__PURE__ */ e("circle", { cx: 50, cy: 40, r: 8, stroke: t, strokeWidth: 1.8 }),
          /* @__PURE__ */ e("path", { d: "M43 36c1-5 3.5-7 7.5-7s6.5 2 7 6", stroke: t, strokeWidth: 1.5, strokeLinecap: "round" }),
          /* @__PURE__ */ e("circle", { cx: 48, cy: 39.5, r: 2.5, stroke: t, strokeWidth: 0.8 }),
          /* @__PURE__ */ e("circle", { cx: 53, cy: 39.5, r: 2.5, stroke: t, strokeWidth: 0.8 }),
          /* @__PURE__ */ e("line", { x1: 50.5, y1: 39.5, x2: 50.5, y2: 39.5, stroke: t, strokeWidth: 0.8 }),
          /* @__PURE__ */ e("circle", { cx: 48, cy: 39.5, r: 0.8, fill: t }),
          /* @__PURE__ */ e("circle", { cx: 53, cy: 39.5, r: 0.8, fill: t }),
          /* @__PURE__ */ e("path", { d: "M48 44c0.8 1 3 1 4 0", stroke: t, strokeWidth: 0.8, strokeLinecap: "round" }),
          /* @__PURE__ */ e("line", { x1: 50, y1: 48, x2: 50, y2: 52, stroke: t, strokeWidth: 1.5 }),
          /* @__PURE__ */ e("path", { d: "M40 52h20v16H40V52Z", stroke: t, strokeWidth: 1.5, strokeLinejoin: "round" }),
          /* @__PURE__ */ e("line", { x1: 50, y1: 52, x2: 50, y2: 68, stroke: r, strokeWidth: 1.2 }),
          /* @__PURE__ */ e("path", { d: "M60 56c4 2 10 6 12 10", stroke: t, strokeWidth: 1.5, strokeLinecap: "round" }),
          /* @__PURE__ */ e("rect", { x: 68, y: 60, width: 24, height: 32, rx: 2, stroke: t, strokeWidth: 1.5, strokeLinejoin: "round" }),
          /* @__PURE__ */ e("rect", { x: 75, y: 57, width: 10, height: 6, rx: 1, stroke: t, strokeWidth: 1 }),
          /* @__PURE__ */ e("line", { x1: 73, y1: 70, x2: 87, y2: 70, stroke: t, strokeWidth: 0.8, strokeLinecap: "round" }),
          /* @__PURE__ */ e("line", { x1: 73, y1: 75, x2: 87, y2: 75, stroke: t, strokeWidth: 0.8, strokeLinecap: "round" }),
          /* @__PURE__ */ e("line", { x1: 73, y1: 80, x2: 84, y2: 80, stroke: t, strokeWidth: 0.8, strokeLinecap: "round" }),
          /* @__PURE__ */ e("polyline", { points: "73 70 74 71 76 69", stroke: r, strokeWidth: 1, strokeLinecap: "round" }),
          /* @__PURE__ */ e("polyline", { points: "73 75 74 76 76 74", stroke: r, strokeWidth: 1, strokeLinecap: "round" }),
          /* @__PURE__ */ e("rect", { x: 72.5, y: 78.5, width: 3, height: 3, rx: 0.5, stroke: t, strokeWidth: 0.8 }),
          /* @__PURE__ */ e("path", { d: "M40 56c-4 2-7 8-6 16", stroke: t, strokeWidth: 1.5, strokeLinecap: "round" }),
          /* @__PURE__ */ e("line", { x1: 34, y1: 72, x2: 30, y2: 78, stroke: t, strokeWidth: 1.2, strokeLinecap: "round" }),
          /* @__PURE__ */ e("path", { d: "M44 68v30c0 2 0 4 1 5l6 3", stroke: t, strokeWidth: 1.5, strokeLinecap: "round" }),
          /* @__PURE__ */ e("path", { d: "M56 68v30c0 2 0 4-1 5l-6 3", stroke: t, strokeWidth: 1.5, strokeLinecap: "round" }),
          /* @__PURE__ */ e("path", { d: "M51 106h-10c-2 0-3 1.5-3 3h16c0-1.5-1-3-3-3Z", stroke: t, strokeWidth: 1.2 }),
          /* @__PURE__ */ e("path", { d: "M49 106h10c2 0 3 1.5 3 3H46c0-1.5 1-3 3-3Z", stroke: t, strokeWidth: 1.2 }),
          /* @__PURE__ */ e("path", { d: "M92 65c10-3 22-6 34-8", stroke: t, strokeWidth: 1, strokeLinecap: "round", strokeDasharray: "4 3" }),
          /* @__PURE__ */ e("line", { x1: 10, y1: 120, x2: 190, y2: 120, stroke: t, strokeWidth: 1, opacity: 0.3 })
        ]
      }
    );
  }
);
ya.displayName = "FinancialPlanning";
const fa = B(
  ({ size: n = 200, colour: t = "#000000", accentColour: r = "#E60000", className: o, ...s }, l) => {
    const i = typeof n == "number" ? n : 200, a = Math.round(i * 0.75);
    return /* @__PURE__ */ d(
      "svg",
      {
        ref: l,
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 200 150",
        width: i,
        height: a,
        fill: "none",
        "aria-hidden": "true",
        role: "img",
        focusable: "false",
        className: o,
        ...s,
        children: [
          /* @__PURE__ */ e("rect", { x: 80, y: 110, width: 40, height: 8, rx: 2, fill: "#CCCABC", stroke: t, strokeWidth: 1.2 }),
          /* @__PURE__ */ e("rect", { x: 85, y: 102, width: 30, height: 8, rx: 1, fill: "#CCCABC", stroke: t, strokeWidth: 1.2 }),
          /* @__PURE__ */ e("text", { x: 100, y: 108, textAnchor: "middle", fontSize: 5, fontWeight: "bold", fill: r, fontFamily: "sans-serif", children: "1" }),
          /* @__PURE__ */ e("circle", { cx: 100, cy: 44, r: 9, stroke: t, strokeWidth: 1.8 }),
          /* @__PURE__ */ e("path", { d: "M92 40c1-5 4-8 9-8s7 3 7.5 7", stroke: t, strokeWidth: 1.5, strokeLinecap: "round" }),
          /* @__PURE__ */ e("circle", { cx: 97, cy: 43, r: 1.2, fill: t }),
          /* @__PURE__ */ e("circle", { cx: 103, cy: 43, r: 1.2, fill: t }),
          /* @__PURE__ */ e("path", { d: "M95 48c2 2.5 7 2.5 9 0", stroke: t, strokeWidth: 1, strokeLinecap: "round" }),
          /* @__PURE__ */ e("line", { x1: 100, y1: 53, x2: 100, y2: 57, stroke: t, strokeWidth: 1.5 }),
          /* @__PURE__ */ e("path", { d: "M90 57h20v16H90V57Z", stroke: t, strokeWidth: 1.5, strokeLinejoin: "round" }),
          /* @__PURE__ */ e("rect", { x: 90, y: 57, width: 20, height: 16, rx: 0, fill: "none", stroke: "none" }),
          /* @__PURE__ */ e("line", { x1: 100, y1: 57, x2: 100, y2: 73, stroke: r, strokeWidth: 1.5 }),
          /* @__PURE__ */ e("path", { d: "M96 57l4 3 4-3", stroke: t, strokeWidth: 1, strokeLinecap: "round" }),
          /* @__PURE__ */ e("path", { d: "M90 61c-6-4-14-14-18-24", stroke: t, strokeWidth: 1.5, strokeLinecap: "round" }),
          /* @__PURE__ */ e("path", { d: "M72 37l-3-4", stroke: t, strokeWidth: 1.5, strokeLinecap: "round" }),
          /* @__PURE__ */ e("path", { d: "M72 37l-4-1", stroke: t, strokeWidth: 1.2, strokeLinecap: "round" }),
          /* @__PURE__ */ e("path", { d: "M72 37l-2-3", stroke: t, strokeWidth: 1.2, strokeLinecap: "round" }),
          /* @__PURE__ */ e("path", { d: "M110 61c6-4 14-14 18-24", stroke: t, strokeWidth: 1.5, strokeLinecap: "round" }),
          /* @__PURE__ */ e("path", { d: "M128 37l3-4", stroke: t, strokeWidth: 1.5, strokeLinecap: "round" }),
          /* @__PURE__ */ e("path", { d: "M128 37l4-1", stroke: t, strokeWidth: 1.2, strokeLinecap: "round" }),
          /* @__PURE__ */ e("path", { d: "M128 37l2-3", stroke: t, strokeWidth: 1.2, strokeLinecap: "round" }),
          /* @__PURE__ */ e("path", { d: "M94 73v20c0 2 0 4 1 5l4 3", stroke: t, strokeWidth: 1.5, strokeLinecap: "round" }),
          /* @__PURE__ */ e("path", { d: "M106 73v20c0 2 0 4-1 5l-4 3", stroke: t, strokeWidth: 1.5, strokeLinecap: "round" }),
          /* @__PURE__ */ e("path", { d: "M99 101h-8c-2 0-3 1-3 2h14c0-1-1-2-3-2Z", stroke: t, strokeWidth: 1.2 }),
          /* @__PURE__ */ e("path", { d: "M101 101h8c2 0 3 1 3 2H98c0-1 1-2 3-2Z", stroke: t, strokeWidth: 1.2 }),
          /* @__PURE__ */ e("path", { d: "M60 20l2 4 4.5 0.7-3.2 3.1 0.8 4.5L60 30l-4.1 2.3 0.8-4.5-3.2-3.1L58 24l2-4Z", fill: r }),
          /* @__PURE__ */ e("path", { d: "M140 18l1.5 3 3.3 0.5-2.4 2.3 0.6 3.3L140 25l-3 1.6 0.6-3.3-2.4-2.3 3.3-0.5 1.5-3Z", fill: r }),
          /* @__PURE__ */ e("path", { d: "M100 10l1 2 2.2 0.3-1.6 1.6 0.4 2.2L100 14.8l-2 1.3 0.4-2.2-1.6-1.6 2.2-0.3 1-2Z", fill: r }),
          /* @__PURE__ */ e("circle", { cx: 55, cy: 35, r: 1.5, fill: r }),
          /* @__PURE__ */ e("circle", { cx: 145, cy: 32, r: 1.5, fill: r }),
          /* @__PURE__ */ e("circle", { cx: 78, cy: 15, r: 1, fill: r }),
          /* @__PURE__ */ e("circle", { cx: 122, cy: 14, r: 1, fill: r }),
          /* @__PURE__ */ e("line", { x1: 50, y1: 25, x2: 55, y2: 30, stroke: r, strokeWidth: 1.5, strokeLinecap: "round" }),
          /* @__PURE__ */ e("line", { x1: 150, y1: 22, x2: 146, y2: 28, stroke: r, strokeWidth: 1.5, strokeLinecap: "round" }),
          /* @__PURE__ */ e("line", { x1: 65, y1: 15, x2: 68, y2: 22, stroke: t, strokeWidth: 1, strokeLinecap: "round" }),
          /* @__PURE__ */ e("line", { x1: 132, y1: 13, x2: 130, y2: 20, stroke: t, strokeWidth: 1, strokeLinecap: "round" }),
          /* @__PURE__ */ e("line", { x1: 85, y1: 22, x2: 82, y2: 16, stroke: t, strokeWidth: 1, strokeLinecap: "round" }),
          /* @__PURE__ */ e("line", { x1: 115, y1: 22, x2: 118, y2: 16, stroke: t, strokeWidth: 1, strokeLinecap: "round" }),
          /* @__PURE__ */ e("line", { x1: 20, y1: 126, x2: 180, y2: 126, stroke: t, strokeWidth: 1, opacity: 0.3 })
        ]
      }
    );
  }
);
fa.displayName = "SuccessCelebration";
const ba = B(
  ({ size: n = 200, colour: t = "#000000", accentColour: r = "#E60000", className: o, ...s }, l) => {
    const i = typeof n == "number" ? n : 200, a = Math.round(i * 0.75);
    return /* @__PURE__ */ d(
      "svg",
      {
        ref: l,
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 200 150",
        width: i,
        height: a,
        fill: "none",
        "aria-hidden": "true",
        role: "img",
        focusable: "false",
        className: o,
        ...s,
        children: [
          /* @__PURE__ */ e("rect", { x: 108, y: 20, width: 50, height: 90, rx: 6, stroke: t, strokeWidth: 1.8 }),
          /* @__PURE__ */ e("rect", { x: 112, y: 28, width: 42, height: 74, rx: 2, stroke: t, strokeWidth: 0.8 }),
          /* @__PURE__ */ e("line", { x1: 116, y1: 34, x2: 128, y2: 34, stroke: t, strokeWidth: 0.8, strokeLinecap: "round", opacity: 0.4 }),
          /* @__PURE__ */ e("line", { x1: 144, y1: 34, x2: 150, y2: 34, stroke: t, strokeWidth: 0.8, strokeLinecap: "round", opacity: 0.4 }),
          /* @__PURE__ */ e("rect", { x: 116, y: 38, width: 34, height: 10, rx: 1, fill: r, opacity: 0.15 }),
          /* @__PURE__ */ e("text", { x: 133, y: 45, textAnchor: "middle", fontSize: 5, fontWeight: "bold", fill: r, fontFamily: "sans-serif", children: "UBS" }),
          /* @__PURE__ */ e("text", { x: 116, y: 58, fontSize: 4, fill: t, fontFamily: "sans-serif", opacity: 0.5, children: "Balance" }),
          /* @__PURE__ */ e("text", { x: 116, y: 65, fontSize: 6, fontWeight: "bold", fill: t, fontFamily: "sans-serif", children: "£12,450" }),
          /* @__PURE__ */ e("line", { x1: 116, y1: 70, x2: 150, y2: 70, stroke: t, strokeWidth: 0.5, opacity: 0.3 }),
          /* @__PURE__ */ e("circle", { cx: 119, cy: 76, r: 2, stroke: t, strokeWidth: 0.5 }),
          /* @__PURE__ */ e("line", { x1: 124, y1: 75, x2: 138, y2: 75, stroke: t, strokeWidth: 0.8, strokeLinecap: "round", opacity: 0.5 }),
          /* @__PURE__ */ e("text", { x: 145, y: 77, textAnchor: "end", fontSize: 3.5, fill: r, fontFamily: "sans-serif", children: "+£500" }),
          /* @__PURE__ */ e("line", { x1: 116, y1: 80, x2: 150, y2: 80, stroke: t, strokeWidth: 0.5, opacity: 0.3 }),
          /* @__PURE__ */ e("circle", { cx: 119, cy: 86, r: 2, stroke: t, strokeWidth: 0.5 }),
          /* @__PURE__ */ e("line", { x1: 124, y1: 85, x2: 136, y2: 85, stroke: t, strokeWidth: 0.8, strokeLinecap: "round", opacity: 0.5 }),
          /* @__PURE__ */ e("text", { x: 145, y: 87, textAnchor: "end", fontSize: 3.5, fill: t, fontFamily: "sans-serif", children: "-£42" }),
          /* @__PURE__ */ e("line", { x1: 116, y1: 90, x2: 150, y2: 90, stroke: t, strokeWidth: 0.5, opacity: 0.3 }),
          /* @__PURE__ */ e("line", { x1: 112, y1: 96, x2: 154, y2: 96, stroke: t, strokeWidth: 0.5, opacity: 0.3 }),
          /* @__PURE__ */ e("circle", { cx: 122, cy: 100, r: 2, stroke: t, strokeWidth: 0.6 }),
          /* @__PURE__ */ e("circle", { cx: 133, cy: 100, r: 2, fill: r }),
          /* @__PURE__ */ e("circle", { cx: 144, cy: 100, r: 2, stroke: t, strokeWidth: 0.6 }),
          /* @__PURE__ */ e("line", { x1: 128, y1: 108, x2: 138, y2: 108, stroke: t, strokeWidth: 1.5, strokeLinecap: "round" }),
          /* @__PURE__ */ e("circle", { cx: 154, cy: 24, r: 4, fill: r }),
          /* @__PURE__ */ e("text", { x: 154, y: 26, textAnchor: "middle", fontSize: 5, fill: "white", fontFamily: "sans-serif", children: "3" }),
          /* @__PURE__ */ e("circle", { cx: 60, cy: 42, r: 8, stroke: t, strokeWidth: 1.8 }),
          /* @__PURE__ */ e("path", { d: "M53 38c0.5-4.5 3.5-7 7.5-7s6.5 2.5 7 6", stroke: t, strokeWidth: 1.5, strokeLinecap: "round" }),
          /* @__PURE__ */ e("circle", { cx: 58, cy: 41, r: 1, fill: t }),
          /* @__PURE__ */ e("circle", { cx: 63, cy: 41, r: 1, fill: t }),
          /* @__PURE__ */ e("path", { d: "M57 45c1 1 4 1 5 0", stroke: t, strokeWidth: 0.8, strokeLinecap: "round" }),
          /* @__PURE__ */ e("line", { x1: 60, y1: 50, x2: 60, y2: 54, stroke: t, strokeWidth: 1.5 }),
          /* @__PURE__ */ e("path", { d: "M50 54h20v16H50V54Z", stroke: t, strokeWidth: 1.5, strokeLinejoin: "round" }),
          /* @__PURE__ */ e("line", { x1: 60, y1: 54, x2: 60, y2: 70, stroke: r, strokeWidth: 1.2 }),
          /* @__PURE__ */ e("path", { d: "M70 58c8 1 22 4 34 8", stroke: t, strokeWidth: 1.5, strokeLinecap: "round" }),
          /* @__PURE__ */ e("path", { d: "M104 66c2-1 4 0 4 2v6c0 2-2 3-4 2", stroke: t, strokeWidth: 1.2, strokeLinecap: "round" }),
          /* @__PURE__ */ e("path", { d: "M50 58c-4 2-7 8-6 16", stroke: t, strokeWidth: 1.5, strokeLinecap: "round" }),
          /* @__PURE__ */ e("path", { d: "M54 70v28c0 2 0 4 1 5l6 3", stroke: t, strokeWidth: 1.5, strokeLinecap: "round" }),
          /* @__PURE__ */ e("path", { d: "M66 70v28c0 2 0 4-1 5l-6 3", stroke: t, strokeWidth: 1.5, strokeLinecap: "round" }),
          /* @__PURE__ */ e("path", { d: "M61 106h-10c-2 0-3 1.5-3 3h16c0-1.5-1-3-3-3Z", stroke: t, strokeWidth: 1.2 }),
          /* @__PURE__ */ e("path", { d: "M59 106h10c2 0 3 1.5 3 3H56c0-1.5 1-3 3-3Z", stroke: t, strokeWidth: 1.2 }),
          /* @__PURE__ */ e("path", { d: "M160 50c3-2 6-1 7 1", stroke: r, strokeWidth: 1, strokeLinecap: "round" }),
          /* @__PURE__ */ e("path", { d: "M162 44c4-3 8-1 10 1", stroke: r, strokeWidth: 1, strokeLinecap: "round", opacity: 0.6 }),
          /* @__PURE__ */ e("path", { d: "M164 38c5-3 10-1 12 1", stroke: r, strokeWidth: 1, strokeLinecap: "round", opacity: 0.3 }),
          /* @__PURE__ */ e("line", { x1: 15, y1: 118, x2: 185, y2: 118, stroke: t, strokeWidth: 1, opacity: 0.3 })
        ]
      }
    );
  }
);
ba.displayName = "DigitalBanking";
const va = B(
  ({ size: n = 200, colour: t = "#000000", accentColour: r = "#E60000", className: o, ...s }, l) => {
    const i = typeof n == "number" ? n : 200, a = Math.round(i * 0.75);
    return /* @__PURE__ */ d(
      "svg",
      {
        ref: l,
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 200 150",
        width: i,
        height: a,
        fill: "none",
        "aria-hidden": "true",
        role: "img",
        focusable: "false",
        className: o,
        ...s,
        children: [
          /* @__PURE__ */ e("path", { d: "M140 125v-50", stroke: t, strokeWidth: 2, strokeLinecap: "round" }),
          /* @__PURE__ */ e("path", { d: "M140 75c-8 0-22-5-24-18s8-22 18-24", stroke: t, strokeWidth: 1.5, strokeLinecap: "round" }),
          /* @__PURE__ */ e("path", { d: "M140 75c8 0 22-5 24-18s-8-22-18-24", stroke: t, strokeWidth: 1.5, strokeLinecap: "round" }),
          /* @__PURE__ */ e("path", { d: "M134 33c2-8 8-12 14-10", stroke: t, strokeWidth: 1.2, strokeLinecap: "round" }),
          /* @__PURE__ */ e("path", { d: "M146 33c-2-8-8-12-14-10", stroke: t, strokeWidth: 1.2, strokeLinecap: "round" }),
          /* @__PURE__ */ e("line", { x1: 140, y1: 35, x2: 140, y2: 55, stroke: t, strokeWidth: 0.8, strokeLinecap: "round", opacity: 0.4 }),
          /* @__PURE__ */ e("line", { x1: 130, y1: 50, x2: 140, y2: 45, stroke: t, strokeWidth: 0.8, strokeLinecap: "round", opacity: 0.4 }),
          /* @__PURE__ */ e("line", { x1: 150, y1: 50, x2: 140, y2: 45, stroke: t, strokeWidth: 0.8, strokeLinecap: "round", opacity: 0.4 }),
          /* @__PURE__ */ e("path", { d: "M126 52c-4-2-5-6-3-8s6-1 7 2", stroke: r, strokeWidth: 1.2, strokeLinecap: "round" }),
          /* @__PURE__ */ e("path", { d: "M154 52c4-2 5-6 3-8s-6-1-7 2", stroke: r, strokeWidth: 1.2, strokeLinecap: "round" }),
          /* @__PURE__ */ e("path", { d: "M140 28c-2-4-1-8 2-9s6 2 5 5", stroke: r, strokeWidth: 1.2, strokeLinecap: "round" }),
          /* @__PURE__ */ e("path", { d: "M140 125c-6 2-14 2-18 0", stroke: t, strokeWidth: 1.2, strokeLinecap: "round" }),
          /* @__PURE__ */ e("path", { d: "M140 125c6 2 14 2 18 0", stroke: t, strokeWidth: 1.2, strokeLinecap: "round" }),
          /* @__PURE__ */ e("path", { d: "M140 125c-3 4-8 5-12 4", stroke: t, strokeWidth: 1, strokeLinecap: "round" }),
          /* @__PURE__ */ e("path", { d: "M140 125c3 4 8 5 12 4", stroke: t, strokeWidth: 1, strokeLinecap: "round" }),
          /* @__PURE__ */ e("rect", { x: 160, y: 80, width: 28, height: 20, rx: 2, stroke: t, strokeWidth: 1 }),
          /* @__PURE__ */ e("polyline", { points: "164 96 170 90 176 93 184 84", stroke: r, strokeWidth: 1.2, strokeLinecap: "round", strokeLinejoin: "round" }),
          /* @__PURE__ */ e("polyline", { points: "180 84 184 84 184 88", stroke: r, strokeWidth: 1, strokeLinecap: "round", strokeLinejoin: "round" }),
          /* @__PURE__ */ e("circle", { cx: 55, cy: 48, r: 8, stroke: t, strokeWidth: 1.8 }),
          /* @__PURE__ */ e("path", { d: "M48 44c0.5-4 3-7 7.5-7s6.5 3 7 6", stroke: t, strokeWidth: 1.5, strokeLinecap: "round" }),
          /* @__PURE__ */ e("circle", { cx: 53, cy: 47, r: 1, fill: t }),
          /* @__PURE__ */ e("circle", { cx: 58, cy: 47, r: 1, fill: t }),
          /* @__PURE__ */ e("path", { d: "M53 51c0.8 1 3 1 4 0", stroke: t, strokeWidth: 0.8, strokeLinecap: "round" }),
          /* @__PURE__ */ e("line", { x1: 55, y1: 56, x2: 55, y2: 60, stroke: t, strokeWidth: 1.5 }),
          /* @__PURE__ */ e("path", { d: "M45 60h20v16H45V60Z", stroke: t, strokeWidth: 1.5, strokeLinejoin: "round" }),
          /* @__PURE__ */ e("line", { x1: 55, y1: 60, x2: 55, y2: 76, stroke: r, strokeWidth: 1.2 }),
          /* @__PURE__ */ e("path", { d: "M65 64c6 0 14-2 20-6", stroke: t, strokeWidth: 1.5, strokeLinecap: "round" }),
          /* @__PURE__ */ e("path", { d: "M82 56h12v8H82V56Z", stroke: t, strokeWidth: 1.2, strokeLinejoin: "round" }),
          /* @__PURE__ */ e("path", { d: "M94 58l8-4", stroke: t, strokeWidth: 1.2, strokeLinecap: "round" }),
          /* @__PURE__ */ e("path", { d: "M82 60h-3l-1 4h4", stroke: t, strokeWidth: 1, strokeLinejoin: "round" }),
          /* @__PURE__ */ e("circle", { cx: 104, cy: 58, r: 1, fill: r }),
          /* @__PURE__ */ e("circle", { cx: 106, cy: 62, r: 0.8, fill: r }),
          /* @__PURE__ */ e("circle", { cx: 108, cy: 66, r: 0.6, fill: r }),
          /* @__PURE__ */ e("circle", { cx: 103, cy: 64, r: 0.7, fill: r }),
          /* @__PURE__ */ e("path", { d: "M45 64c-4 2-7 8-6 14", stroke: t, strokeWidth: 1.5, strokeLinecap: "round" }),
          /* @__PURE__ */ e("path", { d: "M49 76v28c0 2 0 4 1 5l6 3", stroke: t, strokeWidth: 1.5, strokeLinecap: "round" }),
          /* @__PURE__ */ e("path", { d: "M61 76v28c0 2 0 4-1 5l-6 3", stroke: t, strokeWidth: 1.5, strokeLinecap: "round" }),
          /* @__PURE__ */ e("path", { d: "M56 112h-10c-2 0-3 1.5-3 3h16c0-1.5-1-3-3-3Z", stroke: t, strokeWidth: 1.2 }),
          /* @__PURE__ */ e("path", { d: "M54 112h10c2 0 3 1.5 3 3H51c0-1.5 1-3 3-3Z", stroke: t, strokeWidth: 1.2 }),
          /* @__PURE__ */ e("line", { x1: 30, y1: 125, x2: 30, y2: 118, stroke: t, strokeWidth: 1, strokeLinecap: "round" }),
          /* @__PURE__ */ e("path", { d: "M30 118c-3-1-4-4-2-5s4 0 4 2", stroke: r, strokeWidth: 1, strokeLinecap: "round" }),
          /* @__PURE__ */ e("path", { d: "M30 120c2-2 4-3 5-2s0 3-2 4", stroke: t, strokeWidth: 1, strokeLinecap: "round" }),
          /* @__PURE__ */ e("path", { d: "M10 125c20 2 40-1 60 1s40-2 60 0 40 1 60-1", stroke: "#B8B3A2", strokeWidth: 1.5, strokeLinecap: "round" }),
          /* @__PURE__ */ e("line", { x1: 10, y1: 135, x2: 190, y2: 135, stroke: t, strokeWidth: 1, opacity: 0.3 })
        ]
      }
    );
  }
);
va.displayName = "SustainableGrowth";
const xa = B(
  ({ size: n = 200, colour: t = "#000000", accentColour: r = "#E60000", className: o, ...s }, l) => {
    const i = typeof n == "number" ? n : 200, a = Math.round(i * 0.75);
    return /* @__PURE__ */ d(
      "svg",
      {
        ref: l,
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 200 150",
        width: i,
        height: a,
        fill: "none",
        "aria-hidden": "true",
        role: "img",
        focusable: "false",
        className: o,
        ...s,
        children: [
          /* @__PURE__ */ e("circle", { cx: 55, cy: 42, r: 8, stroke: t, strokeWidth: 1.8 }),
          /* @__PURE__ */ e("path", { d: "M48 38c0.5-4 3-7 7.5-7s6.5 3 7 6", stroke: t, strokeWidth: 1.5, strokeLinecap: "round" }),
          /* @__PURE__ */ e("circle", { cx: 53, cy: 41, r: 1, fill: t }),
          /* @__PURE__ */ e("circle", { cx: 58, cy: 41, r: 1, fill: t }),
          /* @__PURE__ */ e("path", { d: "M52 45c1.2 1.5 4.5 1.5 5.5 0", stroke: t, strokeWidth: 0.8, strokeLinecap: "round" }),
          /* @__PURE__ */ e("path", { d: "M46.5 38c0-5 3.8-9 8.5-9s8.5 4 8.5 9", stroke: r, strokeWidth: 2, strokeLinecap: "round" }),
          /* @__PURE__ */ e("rect", { x: 43, y: 37, width: 4, height: 7, rx: 2, fill: r, stroke: t, strokeWidth: 0.8 }),
          /* @__PURE__ */ e("rect", { x: 63, y: 37, width: 4, height: 7, rx: 2, stroke: t, strokeWidth: 0.8 }),
          /* @__PURE__ */ e("path", { d: "M43 44c-2 0-4 2-4 4v2c0 1 1 2 2 2h2", stroke: t, strokeWidth: 1, strokeLinecap: "round" }),
          /* @__PURE__ */ e("circle", { cx: 43, cy: 52, r: 2, fill: r, stroke: t, strokeWidth: 0.8 }),
          /* @__PURE__ */ e("line", { x1: 55, y1: 50, x2: 55, y2: 54, stroke: t, strokeWidth: 1.5 }),
          /* @__PURE__ */ e("path", { d: "M45 54h20v16H45V54Z", stroke: t, strokeWidth: 1.5, strokeLinejoin: "round" }),
          /* @__PURE__ */ e("line", { x1: 55, y1: 54, x2: 55, y2: 70, stroke: r, strokeWidth: 1.2 }),
          /* @__PURE__ */ e("rect", { x: 48, y: 56, width: 5, height: 4, rx: 1, stroke: t, strokeWidth: 0.8 }),
          /* @__PURE__ */ e("circle", { cx: 50.5, cy: 57.5, r: 0.8, fill: r }),
          /* @__PURE__ */ e("path", { d: "M45 58c-5 2-10 8-8 16", stroke: t, strokeWidth: 1.5, strokeLinecap: "round" }),
          /* @__PURE__ */ e("path", { d: "M65 58c4 2 8 8 6 16", stroke: t, strokeWidth: 1.5, strokeLinecap: "round" }),
          /* @__PURE__ */ e("rect", { x: 30, y: 76, width: 50, height: 3, rx: 1, fill: "#CCCABC", stroke: t, strokeWidth: 1 }),
          /* @__PURE__ */ e("rect", { x: 40, y: 60, width: 30, height: 16, rx: 2, stroke: t, strokeWidth: 1.2 }),
          /* @__PURE__ */ e("line", { x1: 55, y1: 76, x2: 55, y2: 79, stroke: t, strokeWidth: 1 }),
          /* @__PURE__ */ e("line", { x1: 50, y1: 79, x2: 60, y2: 79, stroke: t, strokeWidth: 1, strokeLinecap: "round" }),
          /* @__PURE__ */ e("line", { x1: 44, y1: 66, x2: 56, y2: 66, stroke: t, strokeWidth: 0.6, strokeLinecap: "round", opacity: 0.4 }),
          /* @__PURE__ */ e("line", { x1: 44, y1: 69, x2: 52, y2: 69, stroke: r, strokeWidth: 0.6, strokeLinecap: "round" }),
          /* @__PURE__ */ e("line", { x1: 44, y1: 72, x2: 54, y2: 72, stroke: t, strokeWidth: 0.6, strokeLinecap: "round", opacity: 0.4 }),
          /* @__PURE__ */ e("path", { d: "M49 70v24c0 2 0 3 1 4l5 3", stroke: t, strokeWidth: 1.5, strokeLinecap: "round" }),
          /* @__PURE__ */ e("path", { d: "M61 70v24c0 2 0 3-1 4l-5 3", stroke: t, strokeWidth: 1.5, strokeLinecap: "round" }),
          /* @__PURE__ */ e("path", { d: "M55 101h-8c-2 0-3 1.5-3 3h14c0-1.5-1-3-3-3Z", stroke: t, strokeWidth: 1.2 }),
          /* @__PURE__ */ e("path", { d: "M55 101h8c2 0 3 1.5 3 3H52c0-1.5 1-3 3-3Z", stroke: t, strokeWidth: 1.2 }),
          /* @__PURE__ */ e("path", { d: "M85 35h50c3 0 5 2 5 5v20c0 3-2 5-5 5h-35l-6 8v-8h-9c-3 0-5-2-5-5V40c0-3 2-5 5-5Z", stroke: t, strokeWidth: 1.2 }),
          /* @__PURE__ */ e("line", { x1: 92, y1: 44, x2: 128, y2: 44, stroke: t, strokeWidth: 0.8, strokeLinecap: "round", opacity: 0.4 }),
          /* @__PURE__ */ e("line", { x1: 92, y1: 49, x2: 122, y2: 49, stroke: r, strokeWidth: 0.8, strokeLinecap: "round" }),
          /* @__PURE__ */ e("line", { x1: 92, y1: 54, x2: 126, y2: 54, stroke: t, strokeWidth: 0.8, strokeLinecap: "round", opacity: 0.4 }),
          /* @__PURE__ */ e("circle", { cx: 95, cy: 60, r: 1.5, fill: "#B8B3A2" }),
          /* @__PURE__ */ e("circle", { cx: 101, cy: 60, r: 1.5, fill: "#B8B3A2" }),
          /* @__PURE__ */ e("circle", { cx: 107, cy: 60, r: 1.5, fill: "#B8B3A2" }),
          /* @__PURE__ */ e("circle", { cx: 158, cy: 72, r: 7, stroke: t, strokeWidth: 1.5 }),
          /* @__PURE__ */ e("path", { d: "M152 68c0.5-3 3-6 6.5-6s5.5 3 6 5", stroke: t, strokeWidth: 1.2, strokeLinecap: "round" }),
          /* @__PURE__ */ e("circle", { cx: 156, cy: 71, r: 0.8, fill: t }),
          /* @__PURE__ */ e("circle", { cx: 160, cy: 71, r: 0.8, fill: t }),
          /* @__PURE__ */ e("path", { d: "M155 75c1 0.8 3.5 0.8 4.5 0", stroke: t, strokeWidth: 0.7, strokeLinecap: "round" }),
          /* @__PURE__ */ e("line", { x1: 158, y1: 79, x2: 158, y2: 82, stroke: t, strokeWidth: 1.2 }),
          /* @__PURE__ */ e("path", { d: "M150 82h16v12h-16V82Z", stroke: t, strokeWidth: 1.2, strokeLinejoin: "round" }),
          /* @__PURE__ */ e("path", { d: "M150 86c-3 2-5 6-4 10", stroke: t, strokeWidth: 1.2, strokeLinecap: "round" }),
          /* @__PURE__ */ e("path", { d: "M166 86c3 2 5 6 4 10", stroke: t, strokeWidth: 1.2, strokeLinecap: "round" }),
          /* @__PURE__ */ e("path", { d: "M153 94v18c0 1 0 3 0.5 4l4 2", stroke: t, strokeWidth: 1.2, strokeLinecap: "round" }),
          /* @__PURE__ */ e("path", { d: "M163 94v18c0 1 0 3-0.5 4l-4 2", stroke: t, strokeWidth: 1.2, strokeLinecap: "round" }),
          /* @__PURE__ */ e("path", { d: "M157.5 118h-7c-1.5 0-2.5 1-2.5 2.5h12c0-1.5-1-2.5-2.5-2.5Z", stroke: t, strokeWidth: 1 }),
          /* @__PURE__ */ e("path", { d: "M158.5 118h7c1.5 0 2.5 1 2.5 2.5h-12c0-1.5 1-2.5 2.5-2.5Z", stroke: t, strokeWidth: 1 }),
          /* @__PURE__ */ e("rect", { x: 168, y: 88, width: 8, height: 14, rx: 1, stroke: t, strokeWidth: 0.8 }),
          /* @__PURE__ */ e("line", { x1: 170, y1: 98, x2: 174, y2: 98, stroke: t, strokeWidth: 0.5, strokeLinecap: "round" }),
          /* @__PURE__ */ e("circle", { cx: 180, cy: 78, r: 1.5, fill: r }),
          /* @__PURE__ */ e("circle", { cx: 184, cy: 82, r: 1, fill: r }),
          /* @__PURE__ */ e("circle", { cx: 178, cy: 84, r: 1, fill: r }),
          /* @__PURE__ */ e("line", { x1: 15, y1: 128, x2: 185, y2: 128, stroke: t, strokeWidth: 1, opacity: 0.3 })
        ]
      }
    );
  }
);
xa.displayName = "CustomerSupport";
const La = {
  // Navigation
  "chevron-down": ni,
  "chevron-up": ri,
  "chevron-left": oi,
  "chevron-right": si,
  "arrow-left": ii,
  "arrow-right": ai,
  "arrow-up": li,
  "arrow-down": ci,
  menu: di,
  close: hi,
  "more-horizontal": pi,
  "more-vertical": ui,
  // Actions
  search: mi,
  filter: _i,
  sort: ki,
  download: gi,
  upload: yi,
  share: fi,
  copy: bi,
  edit: vi,
  trash: xi,
  plus: Li,
  minus: wi,
  check: Ni,
  "check-circle": $i,
  "x-circle": Ii,
  // Content
  home: Wi,
  user: Ai,
  users: Bi,
  settings: Ci,
  bell: Si,
  mail: Mi,
  calendar: Ti,
  clock: Di,
  document: Ei,
  folder: Oi,
  image: ji,
  chart: Fi,
  "donut-chart": Ri,
  globe: Pi,
  // Feedback
  info: zi,
  warning: Hi,
  error: qi,
  success: Gi,
  help: Ui,
  // Illustrative — Finance
  wallet: Vi,
  "credit-card": Zi,
  "bank-note": Ki,
  coins: Yi,
  "piggy-bank": Xi,
  "safe-box": Qi,
  growth: Ji,
  portfolio: ea,
  // Illustrative — Business
  briefcase: ta,
  handshake: na,
  target: ra,
  award: oa,
  lightbulb: sa,
  presentation: ia,
  contract: aa,
  building: la,
  // Illustrative — Digital
  shield: ca,
  lock: da,
  key: ha,
  fingerprint: pa
}, wa = {
  sm: 12,
  md: 16,
  lg: 24
}, Na = B(
  ({
    name: n,
    size: t = "md",
    colour: r,
    accentColour: o,
    variant: s = "webApp",
    children: l,
    className: i,
    style: a,
    "aria-label": c,
    ...p
  }, _) => {
    const h = s === "webApp" ? "#000000" : r ?? "#000000", u = s === "illustrative" ? o ?? "#E60000" : void 0, m = [
      kn.icon,
      kn[t],
      kn[s],
      i
    ].filter(Boolean).join(" "), k = {
      ...h && s === "illustrative" ? { color: h } : {},
      ...a
    }, g = wa[t], y = c || n, w = n ? La[n] : void 0, N = w ? Rr(w, {
      size: g,
      colour: h,
      ...u ? { accentColour: u } : {}
    }) : l;
    return /* @__PURE__ */ e(
      "span",
      {
        ref: _,
        className: m,
        style: k,
        role: y ? "img" : "presentation",
        "aria-label": y,
        "aria-hidden": !y,
        "data-icon-name": n,
        "data-icon-size": g,
        ...p,
        children: N
      }
    );
  }
);
Na.displayName = "Icon";
const $a = "_container_8lign_4", Ia = "_frame_8lign_11", Wa = "_transparent_8lign_26", Aa = "_opaque_8lign_30", Ba = "_background_8lign_36", Ca = "_content_8lign_53", Sa = "_animated_8lign_60", Ma = "_movingFrameSlideIn_8lign_1", Ta = "_contentAnimated_8lign_77", Da = "_movingFrameContentFadeIn_8lign_1", ft = {
  container: $a,
  frame: Ia,
  transparent: Wa,
  opaque: Aa,
  background: Ba,
  content: Ca,
  animated: Sa,
  movingFrameSlideIn: Ma,
  contentAnimated: Ta,
  movingFrameContentFadeIn: Da
}, cr = B(
  ({
    variant: n = "transparent",
    maxWidth: t = "50%",
    backgroundSrc: r,
    backgroundAlt: o = "",
    backgroundElement: s,
    aspectRatio: l = "16 / 9",
    animated: i = !1,
    children: a,
    className: c,
    style: p,
    ..._
  }, h) => {
    const u = {
      aspectRatio: l,
      ...p
    }, m = {
      maxWidth: t
    }, k = [ft.container, c].filter(Boolean).join(" "), g = [
      ft.frame,
      ft[n],
      i ? ft.animated : ""
    ].filter(Boolean).join(" "), y = [
      ft.content,
      i ? ft.contentAnimated : ""
    ].filter(Boolean).join(" ");
    return /* @__PURE__ */ d("div", { ref: h, className: k, style: u, ..._, children: [
      /* @__PURE__ */ e("div", { className: ft.background, "aria-hidden": "true", children: s || (r ? /* @__PURE__ */ e("img", { src: r, alt: o, loading: "lazy" }) : null) }),
      /* @__PURE__ */ e("div", { className: g, style: m, children: /* @__PURE__ */ e("div", { className: y, children: a }) })
    ] });
  }
);
cr.displayName = "MovingFrame";
const Ea = "_pattern_1nt01_4", Oa = "_patternSvg_1nt01_10", ja = "_content_1nt01_17", Fa = "_animated_1nt01_36", Jt = {
  pattern: Ea,
  patternSvg: Oa,
  content: ja,
  animated: Fa
}, Ra = {
  gray: { bg: "#404040", fg: "#5A5D5C" },
  // Gray VI bg, Gray V fg
  bordeaux: { bg: "#620004", fg: "#8A000A" },
  // Bordeaux III bg, Bordeaux II fg
  bronze: { bg: "#6C5312", fg: "#946F29" }
  // Bronze III bg, Bronze II fg
}, Pa = "M20 5L25 10L20 15L15 10ZM10 15L15 20L10 25L5 20ZM30 15L35 20L30 25L25 20ZM20 25L25 30L20 35L15 30ZM12 8L17 13L12 18L7 13ZM28 8L33 13L28 18L23 13Z", za = B(
  ({
    variant: n = "solid",
    colourDirection: t = "gray",
    animated: r = !1,
    ratio: o = "16 / 9",
    children: s,
    className: l,
    style: i,
    ...a
  }, c) => {
    const p = te(), _ = Ra[t], h = [
      Jt.pattern,
      r ? Jt.animated : void 0,
      l
    ].filter(Boolean).join(" "), u = {
      backgroundColor: _.bg,
      aspectRatio: o,
      ...i
    }, m = n === "solid" ? { fill: _.fg, stroke: "none" } : { fill: "none", stroke: _.fg, strokeWidth: 1 };
    return /* @__PURE__ */ d("div", { ref: c, className: h, style: u, ...a, children: [
      /* @__PURE__ */ d(
        "svg",
        {
          className: Jt.patternSvg,
          xmlns: "http://www.w3.org/2000/svg",
          "aria-hidden": "true",
          preserveAspectRatio: "none",
          children: [
            /* @__PURE__ */ e("defs", { children: /* @__PURE__ */ e(
              "pattern",
              {
                id: p,
                x: "0",
                y: "0",
                width: "40",
                height: "40",
                patternUnits: "userSpaceOnUse",
                children: /* @__PURE__ */ e("path", { d: Pa, ...m, opacity: 0.3 })
              }
            ) }),
            /* @__PURE__ */ e("rect", { width: "100%", height: "100%", fill: `url(#${p})` })
          ]
        }
      ),
      s && /* @__PURE__ */ e("div", { className: Jt.content, children: s })
    ] });
  }
);
za.displayName = "Pattern";
const Ha = "_template_1ksmf_3", qa = "_square_1ksmf_13", Ga = "_portrait_1ksmf_17", Ua = "_vertical_1ksmf_21", Va = "_wide_1ksmf_25", Za = "_content_1ksmf_31", Ka = "_logoTab_1ksmf_42", Ya = "_logoRight_1ksmf_52", Xa = "_logoLeft_1ksmf_58", Qa = "_logoText_1ksmf_65", Ja = "_safeZone_1ksmf_75", at = {
  template: Ha,
  square: qa,
  portrait: Ga,
  vertical: Ua,
  wide: Va,
  content: Za,
  logoTab: Ka,
  logoRight: Ya,
  logoLeft: Xa,
  logoText: Qa,
  safeZone: Ja
}, el = {
  instagram: ["square", "portrait", "vertical"],
  facebook: ["square", "wide"],
  youtube: ["wide"],
  x: ["square", "wide"],
  linkedin: ["square", "wide"]
};
function tl(n, t) {
  const r = el[n];
  return r.includes(t) ? t : (typeof console < "u" && console.warn(
    `[UBS SocialMediaTemplate] Format "${t}" is not valid for platform "${n}". Valid formats: ${r.join(", ")}. Falling back to "${r[0]}".`
  ), r[0]);
}
const nl = B(
  ({
    platform: n,
    format: t = "square",
    variant: r = "static",
    children: o,
    className: s,
    ...l
  }, i) => {
    const a = tl(n, t), p = r === "static" ? at.logoRight : at.logoLeft, _ = [
      at.template,
      at[a],
      s
    ].filter(Boolean).join(" ");
    return /* @__PURE__ */ d(
      "div",
      {
        ref: i,
        className: _,
        "data-platform": n,
        "data-format": a,
        "data-variant": r,
        ...l,
        children: [
          /* @__PURE__ */ e("div", { className: `${at.logoTab} ${p}`, children: /* @__PURE__ */ e("span", { className: at.logoText, children: "UBS" }) }),
          /* @__PURE__ */ e("div", { className: at.content, children: /* @__PURE__ */ e("div", { className: at.safeZone, children: o }) })
        ]
      }
    );
  }
);
nl.displayName = "SocialMediaTemplate";
const rl = "_container_uwrsa_5", ol = "_chart_uwrsa_13", sl = "_donutWrapper_uwrsa_20", il = "_donutSvg_uwrsa_27", al = "_donutCenter_uwrsa_33", ll = "_barWrapper_uwrsa_44", cl = "_barGroup_uwrsa_51", dl = "_bar_uwrsa_44", hl = "_barLabel_uwrsa_63", pl = "_barDimmed_uwrsa_74", ul = "_lineWrapper_uwrsa_80", ml = "_lineSvg_uwrsa_85", _l = "_insight_uwrsa_92", kl = "_insightArrow_uwrsa_101", gl = "_insightText_uwrsa_114", yl = "_legend_uwrsa_122", fl = "_legendItem_uwrsa_129", bl = "_legendSwatch_uwrsa_137", vl = "_axisLabel_uwrsa_146", xl = "_gridLine_uwrsa_153", ae = {
  container: rl,
  chart: ol,
  donutWrapper: sl,
  donutSvg: il,
  donutCenter: al,
  barWrapper: ll,
  barGroup: cl,
  bar: dl,
  barLabel: hl,
  barDimmed: pl,
  lineWrapper: ul,
  lineSvg: ml,
  insight: _l,
  insightArrow: kl,
  insightText: gl,
  legend: yl,
  legendItem: fl,
  legendSwatch: bl,
  axisLabel: vl,
  gridLine: xl
}, yn = [
  "#AF8626",
  "#00759E",
  "#879420",
  "#4B2D58",
  "#9F8865",
  "#2E476B",
  "#469A6C",
  "#AD3E4A",
  "#8489BD",
  "#0C7EC6",
  "#654D16",
  "#804C95",
  "#45999C",
  "#4972AC",
  "#CC707A",
  "#295B40",
  "#545A9C",
  "#785E4A",
  "#07476F",
  "#620004"
], Vn = ["#8E8D83", "#7A7870", "#5A5D5C", "#404040", "#000000"], Ll = "#2E476B";
function wl(n, t, r) {
  const o = r.map((s) => s.colour);
  switch (n) {
    case "monochrome":
      return Array.from({ length: t }, (s, l) => {
        if (o[l]) return o[l];
        const i = 1 - l * 0.15;
        return Nl(Ll, Math.max(0.2, i));
      });
    case "polychrome":
      return Array.from({ length: t }, (s, l) => o[l] ? o[l] : Vn[l % Vn.length]);
    case "multichrome":
    case "complex":
      return Array.from({ length: t }, (s, l) => o[l] ? o[l] : yn[l % yn.length]);
    default:
      return yn.slice(0, t);
  }
}
function Nl(n, t) {
  const r = parseInt(n.slice(1, 3), 16), o = parseInt(n.slice(3, 5), 16), s = parseInt(n.slice(5, 7), 16), l = (i) => Math.round(i * t + 255 * (1 - t));
  return `#${l(r).toString(16).padStart(2, "0")}${l(o).toString(16).padStart(2, "0")}${l(s).toString(16).padStart(2, "0")}`;
}
function $l({ data: n, colours: t, highlightIndex: r, width: o, height: s, centerContent: l }) {
  const i = n.reduce((g, y) => g + y.value, 0);
  if (i === 0) return null;
  const a = Math.min(o, s), c = a / 2, p = a / 2, _ = a * 0.45, h = a * 0.28, u = n.length > 1 ? 0.03 : 0;
  let m = 0;
  const k = n.map((g, y) => {
    const w = g.value / i, N = w * Math.PI * 2 - u;
    if (N <= 0)
      return m += w * Math.PI * 2, null;
    const v = m + u / 2, L = v + N, x = c + _ * Math.cos(v), $ = p + _ * Math.sin(v), f = c + _ * Math.cos(L), W = p + _ * Math.sin(L), b = c + h * Math.cos(L), I = p + h * Math.sin(L), S = c + h * Math.cos(v), R = p + h * Math.sin(v), D = N > Math.PI ? 1 : 0, A = [
      `M ${x} ${$}`,
      `A ${_} ${_} 0 ${D} 1 ${f} ${W}`,
      `L ${b} ${I}`,
      `A ${h} ${h} 0 ${D} 0 ${S} ${R}`,
      "Z"
    ].join(" ");
    m += w * Math.PI * 2;
    const C = r === y, T = r != null && r !== y;
    return /* @__PURE__ */ e(
      "path",
      {
        d: A,
        fill: t[y],
        opacity: T ? 0.4 : 1,
        stroke: C ? "#000000" : "none",
        strokeWidth: C ? 2 : 0,
        children: /* @__PURE__ */ e("title", { children: `${g.label}: ${g.value}` })
      },
      y
    );
  });
  return /* @__PURE__ */ d("div", { className: ae.donutWrapper, style: { width: a, height: a }, children: [
    /* @__PURE__ */ e(
      "svg",
      {
        className: ae.donutSvg,
        viewBox: `0 0 ${a} ${a}`,
        role: "img",
        "aria-label": "Donut chart",
        children: k
      }
    ),
    l && /* @__PURE__ */ e("div", { className: ae.donutCenter, children: l })
  ] });
}
function Il({ data: n, colours: t, highlightIndex: r, width: o, height: s }) {
  const l = Math.max(...n.map((_) => _.value), 1), i = n.length, c = (i - 1) * 2, p = Math.max(1, (o - c) / i);
  return /* @__PURE__ */ e("div", { className: ae.barWrapper, style: { width: o, height: s }, children: n.map((_, h) => {
    const u = _.value / l * s * 0.85, m = r != null && r !== h;
    return /* @__PURE__ */ d("div", { className: ae.barGroup, style: { width: p }, children: [
      /* @__PURE__ */ e(
        "div",
        {
          className: `${ae.bar} ${m ? ae.barDimmed : ""}`,
          style: {
            height: u,
            backgroundColor: t[h],
            width: "100%"
          },
          role: "img",
          "aria-label": `${_.label}: ${_.value}`
        }
      ),
      /* @__PURE__ */ e("span", { className: ae.barLabel, children: _.label })
    ] }, h);
  }) });
}
function Wl({ data: n, colours: t, highlightIndex: r, width: o, height: s }) {
  if (n.length === 0) return null;
  const l = Math.max(...n.map((m) => m.value), 1), i = Math.min(...n.map((m) => m.value), 0), a = l - i || 1, c = { top: 10, right: 10, bottom: 30, left: 10 }, p = o - c.left - c.right, _ = s - c.top - c.bottom, h = n.map((m, k) => {
    const g = c.left + k / Math.max(n.length - 1, 1) * p, y = c.top + _ - (m.value - i) / a * _;
    return { x: g, y, ...m };
  }), u = h.map((m, k) => `${k === 0 ? "M" : "L"} ${m.x} ${m.y}`).join(" ");
  return /* @__PURE__ */ e("div", { className: ae.lineWrapper, style: { width: o, height: s }, children: /* @__PURE__ */ d(
    "svg",
    {
      className: ae.lineSvg,
      viewBox: `0 0 ${o} ${s}`,
      role: "img",
      "aria-label": "Line chart",
      children: [
        [0, 0.25, 0.5, 0.75, 1].map((m) => {
          const k = c.top + _ * (1 - m);
          return /* @__PURE__ */ e(
            "line",
            {
              x1: c.left,
              y1: k,
              x2: o - c.right,
              y2: k,
              className: ae.gridLine
            },
            m
          );
        }),
        /* @__PURE__ */ e(
          "path",
          {
            d: u,
            fill: "none",
            stroke: t[0],
            strokeWidth: 2,
            strokeLinejoin: "round",
            strokeLinecap: "round"
          }
        ),
        h.map((m, k) => {
          const g = r === k, y = r != null && r !== k;
          return /* @__PURE__ */ e(
            "circle",
            {
              cx: m.x,
              cy: m.y,
              r: g ? 5 : 3,
              fill: t[k % t.length],
              opacity: y ? 0.4 : 1,
              stroke: g ? "#000000" : "#FFFFFF",
              strokeWidth: g ? 2 : 1,
              children: /* @__PURE__ */ e("title", { children: `${m.label}: ${m.value}` })
            },
            k
          );
        }),
        h.map((m, k) => /* @__PURE__ */ e(
          "text",
          {
            x: m.x,
            y: s - 5,
            textAnchor: "middle",
            className: ae.axisLabel,
            fontSize: 11,
            children: m.label
          },
          k
        ))
      ]
    }
  ) });
}
function Al({ text: n }) {
  return /* @__PURE__ */ d("div", { className: ae.insight, children: [
    /* @__PURE__ */ e("span", { className: ae.insightArrow, children: /* @__PURE__ */ e("svg", { viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg", "aria-hidden": "true", children: /* @__PURE__ */ e("path", { d: "M8 2L14 8L8 14M14 8H2", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }) }) }),
    /* @__PURE__ */ e("span", { className: ae.insightText, children: n })
  ] });
}
function Bl({ data: n, colours: t }) {
  return /* @__PURE__ */ e("div", { className: ae.legend, children: n.map((r, o) => /* @__PURE__ */ d("div", { className: ae.legendItem, children: [
    /* @__PURE__ */ e(
      "span",
      {
        className: ae.legendSwatch,
        style: { backgroundColor: t[o] }
      }
    ),
    /* @__PURE__ */ e("span", { children: r.label })
  ] }, o)) });
}
const dr = B(
  ({
    type: n = "donut",
    data: t,
    highlightIndex: r,
    colourSequence: o = "multichrome",
    region: s = "emea",
    insight: l,
    width: i,
    height: a,
    showLegend: c = !0,
    centerContent: p,
    className: _,
    ...h
  }, u) => {
    const m = i ?? 300, k = a ?? (n === "donut" ? 300 : 200), g = wl(o, t.length, t), y = [ae.container, _].filter(Boolean).join(" "), w = {
      data: t,
      colours: g,
      highlightIndex: r,
      width: m,
      height: k,
      centerContent: p
    };
    return /* @__PURE__ */ d("div", { ref: u, className: y, "data-chart-type": n, "data-region": s, ...h, children: [
      /* @__PURE__ */ d("div", { className: ae.chart, children: [
        n === "donut" && /* @__PURE__ */ e($l, { ...w }),
        n === "bar" && /* @__PURE__ */ e(Il, { ...w }),
        n === "line" && /* @__PURE__ */ e(Wl, { ...w })
      ] }),
      c && /* @__PURE__ */ e(Bl, { data: t, colours: g }),
      l && /* @__PURE__ */ e(Al, { text: l })
    ] });
  }
);
dr.displayName = "DataViz";
const Cl = "_wrapper_1r06f_3", Sl = "_table_1r06f_11", Ml = "_thead_1r06f_22", Tl = "_th_1r06f_22", Dl = "_alignCenter_1r06f_38", El = "_alignRight_1r06f_42", Ol = "_sortableHeader_1r06f_47", jl = "_headerContent_1r06f_61", Fl = "_sortIndicator_1r06f_67", Rl = "_sortArrow_1r06f_78", Pl = "_sortArrowActive_1r06f_84", zl = "_td_1r06f_89", Hl = "_checkboxCell_1r06f_107", ql = "_checkbox_1r06f_107", Gl = "_row_1r06f_126", Ul = "_rowSelected_1r06f_130", Vl = "_striped_1r06f_135", Zl = "_tbody_1r06f_135", Kl = "_bordered_1r06f_143", Yl = "_compact_1r06f_148", Xl = "_hoverable_1r06f_156", Ql = "_stickyHeader_1r06f_165", Jl = "_skeletonRow_1r06f_178", ec = "_skeletonCell_1r06f_182", tc = "_emptyRow_1r06f_200", G = {
  wrapper: Cl,
  table: Sl,
  thead: Ml,
  th: Tl,
  alignCenter: Dl,
  alignRight: El,
  sortableHeader: Ol,
  headerContent: jl,
  sortIndicator: Fl,
  sortArrow: Rl,
  sortArrowActive: Pl,
  td: zl,
  checkboxCell: Hl,
  checkbox: ql,
  row: Gl,
  rowSelected: Ul,
  striped: Vl,
  tbody: Zl,
  bordered: Kl,
  compact: Yl,
  hoverable: Xl,
  stickyHeader: Ql,
  skeletonRow: Jl,
  skeletonCell: ec,
  emptyRow: tc
}, hr = B(
  ({
    columns: n,
    data: t,
    sortBy: r,
    sortDirection: o,
    onSort: s,
    selectable: l = !1,
    selectedRows: i,
    onSelectionChange: a,
    striped: c = !1,
    bordered: p = !1,
    compact: _ = !1,
    hoverable: h = !1,
    stickyHeader: u = !1,
    emptyMessage: m = "No data available",
    loading: k = !1,
    skeletonRows: g = 5,
    className: y,
    ...w
  }, N) => {
    const v = i ?? /* @__PURE__ */ new Set(), L = K(
      () => t.length > 0 && v.size === t.length,
      [t.length, v.size]
    ), x = K(
      () => v.size > 0 && v.size < t.length,
      [t.length, v.size]
    ), $ = j(
      (z) => {
        a && (z.target.checked ? a(new Set(t.map((E, M) => M))) : a(/* @__PURE__ */ new Set()));
      },
      [t, a]
    ), f = j(
      (z) => {
        if (!a) return;
        const E = new Set(v);
        E.has(z) ? E.delete(z) : E.add(z), a(E);
      },
      [v, a]
    ), W = j(
      (z) => {
        if (!s) return;
        s(z, r === z && o === "asc" ? "desc" : "asc");
      },
      [s, r, o]
    ), b = (z) => r !== z.key ? "none" : o === "asc" ? "ascending" : "descending", I = [
      G.wrapper,
      y
    ].filter(Boolean).join(" "), S = [
      G.table,
      c ? G.striped : void 0,
      p ? G.bordered : void 0,
      _ ? G.compact : void 0,
      h ? G.hoverable : void 0,
      u ? G.stickyHeader : void 0
    ].filter(Boolean).join(" "), R = n.length + (l ? 1 : 0), D = (z) => {
      const E = r === z.key;
      return /* @__PURE__ */ d("span", { className: G.sortIndicator, "aria-hidden": "true", children: [
        /* @__PURE__ */ e(
          "span",
          {
            className: `${G.sortArrow} ${E && o === "asc" ? G.sortArrowActive : ""}`,
            children: "▲"
          }
        ),
        /* @__PURE__ */ e(
          "span",
          {
            className: `${G.sortArrow} ${E && o === "desc" ? G.sortArrowActive : ""}`,
            children: "▼"
          }
        )
      ] });
    }, A = () => /* @__PURE__ */ e("thead", { className: G.thead, children: /* @__PURE__ */ d("tr", { children: [
      l && /* @__PURE__ */ e("th", { className: `${G.th} ${G.checkboxCell}`, scope: "col", children: /* @__PURE__ */ e(
        "input",
        {
          type: "checkbox",
          className: G.checkbox,
          checked: L,
          ref: (z) => {
            z && (z.indeterminate = x);
          },
          onChange: $,
          "aria-label": "Select all rows"
        }
      ) }),
      n.map((z) => {
        const E = z.align === "center" ? G.alignCenter : z.align === "right" ? G.alignRight : "";
        return z.sortable ? /* @__PURE__ */ e(
          "th",
          {
            scope: "col",
            className: `${G.th} ${G.sortableHeader} ${E}`,
            style: z.width ? { width: z.width } : void 0,
            "aria-sort": b(z),
            tabIndex: 0,
            role: "columnheader",
            onClick: () => W(z.key),
            onKeyDown: (M) => {
              (M.key === "Enter" || M.key === " ") && (M.preventDefault(), W(z.key));
            },
            children: /* @__PURE__ */ d("span", { className: G.headerContent, children: [
              z.header,
              D(z)
            ] })
          },
          z.key
        ) : /* @__PURE__ */ e(
          "th",
          {
            scope: "col",
            className: `${G.th} ${E}`,
            style: z.width ? { width: z.width } : void 0,
            children: z.header
          },
          z.key
        );
      })
    ] }) }), C = () => /* @__PURE__ */ e("tbody", { className: G.tbody, children: Array.from({ length: g }, (z, E) => /* @__PURE__ */ d("tr", { className: `${G.row} ${G.skeletonRow}`, children: [
      l && /* @__PURE__ */ e("td", { className: `${G.td} ${G.checkboxCell}`, children: /* @__PURE__ */ e("div", { className: G.skeletonCell, style: { width: 16, height: 16 } }) }),
      n.map((M) => /* @__PURE__ */ e("td", { className: G.td, children: /* @__PURE__ */ e(
        "div",
        {
          className: G.skeletonCell,
          style: { width: `${60 + Math.random() * 30}%` }
        }
      ) }, M.key))
    ] }, `skeleton-${E}`)) }), T = () => /* @__PURE__ */ e("tbody", { className: G.tbody, children: /* @__PURE__ */ e("tr", { className: G.emptyRow, children: /* @__PURE__ */ e("td", { className: G.td, colSpan: R, children: m }) }) }), q = () => /* @__PURE__ */ e("tbody", { className: G.tbody, children: t.map((z, E) => {
      const M = v.has(E), V = [G.row, M ? G.rowSelected : void 0].filter(Boolean).join(" ");
      return /* @__PURE__ */ d("tr", { className: V, children: [
        l && /* @__PURE__ */ e("td", { className: `${G.td} ${G.checkboxCell}`, children: /* @__PURE__ */ e(
          "input",
          {
            type: "checkbox",
            className: G.checkbox,
            checked: M,
            onChange: () => f(E),
            "aria-label": `Select row ${E + 1}`
          }
        ) }),
        n.map((J) => {
          const Ee = z[J.key], un = J.align === "center" ? G.alignCenter : J.align === "right" ? G.alignRight : "";
          return /* @__PURE__ */ e(
            "td",
            {
              className: `${G.td} ${un}`,
              style: J.width ? { width: J.width } : void 0,
              children: J.render ? J.render(Ee, z, E) : String(Ee ?? "")
            },
            J.key
          );
        })
      ] }, E);
    }) });
    return /* @__PURE__ */ e("div", { ref: N, className: I, role: "region", "aria-label": "Data table", ...w, children: /* @__PURE__ */ d("table", { className: S, children: [
      A(),
      k ? C() : t.length === 0 ? T() : q()
    ] }) });
  }
);
hr.displayName = "Table";
const nc = "_accordion_173e9_3", rc = "_item_173e9_9", oc = "_bordered_173e9_18", sc = "_trigger_173e9_31", ic = "_chevron_173e9_72", ac = "_chevronOpen_173e9_83", lc = "_panel_173e9_92", cc = "_panelOpen_173e9_99", dc = "_panelContent_173e9_103", Ye = {
  accordion: nc,
  item: rc,
  bordered: oc,
  trigger: sc,
  chevron: ic,
  chevronOpen: ac,
  panel: lc,
  panelOpen: cc,
  panelContent: dc
}, hc = () => /* @__PURE__ */ e(
  "svg",
  {
    width: "12",
    height: "12",
    viewBox: "0 0 12 12",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    children: /* @__PURE__ */ e("path", { d: "M2 4L6 8L10 4", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" })
  }
), pc = B(
  ({ items: n, allowMultiple: t = !1, defaultOpen: r = [], variant: o = "default", className: s, ...l }, i) => {
    const [a, c] = P(new Set(r)), p = U([]), _ = U([]), h = j(
      (k) => {
        c((g) => {
          const y = new Set(g);
          return y.has(k) ? y.delete(k) : (t || y.clear(), y.add(k)), y;
        });
      },
      [t]
    );
    H(() => {
      _.current.forEach((k, g) => {
        k && (a.has(g) ? k.style.maxHeight = `${k.scrollHeight}px` : k.style.maxHeight = "0px");
      });
    }, [a]);
    const u = j(
      (k, g) => {
        var v;
        const y = n.map((L, x) => ({ disabled: L.disabled, i: x })).filter((L) => !L.disabled).map((L) => L.i), w = y.indexOf(g);
        let N;
        switch (k.key) {
          case "ArrowDown":
            k.preventDefault(), N = y[(w + 1) % y.length];
            break;
          case "ArrowUp":
            k.preventDefault(), N = y[(w - 1 + y.length) % y.length];
            break;
          case "Home":
            k.preventDefault(), N = y[0];
            break;
          case "End":
            k.preventDefault(), N = y[y.length - 1];
            break;
        }
        N !== void 0 && ((v = p.current[N]) == null || v.focus());
      },
      [n]
    ), m = [
      Ye.accordion,
      o === "bordered" ? Ye.bordered : void 0,
      s
    ].filter(Boolean).join(" ");
    return /* @__PURE__ */ e("div", { ref: i, className: m, ...l, children: n.map((k, g) => {
      const y = a.has(g), w = `accordion-trigger-${g}`, N = `accordion-panel-${g}`;
      return /* @__PURE__ */ d("div", { className: Ye.item, children: [
        /* @__PURE__ */ e("h3", { children: /* @__PURE__ */ d(
          "button",
          {
            id: w,
            ref: (v) => {
              p.current[g] = v;
            },
            className: Ye.trigger,
            type: "button",
            "aria-expanded": y,
            "aria-controls": N,
            "aria-disabled": k.disabled || void 0,
            onClick: () => !k.disabled && h(g),
            onKeyDown: (v) => u(v, g),
            tabIndex: k.disabled ? -1 : 0,
            children: [
              /* @__PURE__ */ e("span", { children: k.title }),
              /* @__PURE__ */ e("span", { className: `${Ye.chevron} ${y ? Ye.chevronOpen : ""}`, children: /* @__PURE__ */ e(hc, {}) })
            ]
          }
        ) }),
        /* @__PURE__ */ e(
          "div",
          {
            id: N,
            ref: (v) => {
              _.current[g] = v;
            },
            role: "region",
            "aria-labelledby": w,
            className: `${Ye.panel} ${y ? Ye.panelOpen : ""}`,
            hidden: !y,
            children: /* @__PURE__ */ e("div", { className: Ye.panelContent, children: k.content })
          }
        )
      ] }, g);
    }) });
  }
);
pc.displayName = "Accordion";
const uc = "_tag_fzy4q_3", mc = "_sm_fzy4q_17", _c = "_md_fzy4q_23", kc = "_red_fzy4q_36", gc = "_success_fzy4q_42", yc = "_warning_fzy4q_48", fc = "_outline_fzy4q_54", bc = "_icon_fzy4q_61", vc = "_removeButton_fzy4q_77", Ot = {
  tag: uc,
  sm: mc,
  md: _c,
  default: "_default_fzy4q_30",
  red: kc,
  success: gc,
  warning: yc,
  outline: fc,
  icon: bc,
  removeButton: vc
}, xc = B(
  ({
    label: n,
    variant: t = "default",
    size: r = "md",
    removable: o = !1,
    onRemove: s,
    icon: l,
    className: i,
    ...a
  }, c) => {
    const p = [Ot.tag, Ot[t], Ot[r], i].filter(Boolean).join(" "), _ = (h) => {
      h.stopPropagation(), s == null || s();
    };
    return /* @__PURE__ */ d("span", { ref: c, className: p, ...a, children: [
      l && /* @__PURE__ */ e("span", { className: Ot.icon, children: l }),
      n,
      o && /* @__PURE__ */ e(
        "button",
        {
          type: "button",
          className: Ot.removeButton,
          onClick: _,
          "aria-label": `Remove ${n}`,
          children: "✕"
        }
      )
    ] });
  }
);
xc.displayName = "Tag";
const Lc = "_avatar_smuoq_3", wc = "_circle_smuoq_18", Nc = "_square_smuoq_22", $c = "_xs_smuoq_27", Ic = "_sm_smuoq_33", Wc = "_md_smuoq_39", Ac = "_lg_smuoq_45", Bc = "_xl_smuoq_51", Cc = "_image_smuoq_58", Sc = "_initials_smuoq_66", Mc = "_status_smuoq_72", Tc = "_statusOnline_smuoq_106", Dc = "_statusOffline_smuoq_110", Ec = "_statusBusy_smuoq_114", Oc = "_statusAway_smuoq_118", jc = "_avatarGroup_smuoq_123", Fc = "_overflow_smuoq_139", De = {
  avatar: Lc,
  circle: wc,
  square: Nc,
  xs: $c,
  sm: Ic,
  md: Wc,
  lg: Ac,
  xl: Bc,
  image: Cc,
  initials: Sc,
  status: Mc,
  statusOnline: Tc,
  statusOffline: Dc,
  statusBusy: Ec,
  statusAway: Oc,
  avatarGroup: jc,
  overflow: Fc
}, Rc = {
  online: "Online",
  offline: "Offline",
  busy: "Busy",
  away: "Away"
}, Pc = {
  online: De.statusOnline,
  offline: De.statusOffline,
  busy: De.statusBusy,
  away: De.statusAway
};
function zc(n) {
  const t = n.trim().split(/\s+/);
  return t.length === 1 ? t[0].charAt(0).toUpperCase() : (t[0].charAt(0) + t[t.length - 1].charAt(0)).toUpperCase();
}
const pr = B(
  ({
    src: n,
    alt: t,
    name: r,
    size: o = "md",
    variant: s = "circle",
    status: l,
    imgProps: i,
    className: a,
    ...c
  }, p) => {
    const [_, h] = P(!1), u = [De.avatar, De[o], De[s], a].filter(Boolean).join(" "), m = n && !_, k = r ? zc(r) : void 0;
    return /* @__PURE__ */ d(
      "span",
      {
        ref: p,
        className: u,
        role: "img",
        "aria-label": t || r || "Avatar",
        ...c,
        children: [
          m ? /* @__PURE__ */ e(
            "img",
            {
              src: n,
              alt: t || r || "",
              className: De.image,
              onError: () => h(!0),
              ...i
            }
          ) : k ? /* @__PURE__ */ e("span", { className: De.initials, "aria-hidden": "true", children: k }) : null,
          l && /* @__PURE__ */ e(
            "span",
            {
              className: `${De.status} ${Pc[l]}`,
              "aria-label": Rc[l]
            }
          )
        ]
      }
    );
  }
);
pr.displayName = "Avatar";
const Hc = B(
  ({ max: n, size: t = "md", children: r, className: o, ...s }, l) => {
    const i = Ln.toArray(r).filter(or), a = n !== void 0 ? i.slice(0, n) : i, c = n !== void 0 ? i.length - n : 0, p = [De.avatarGroup, o].filter(Boolean).join(" "), h = { xs: 24, sm: 32, md: 40, lg: 56, xl: 80 }[t];
    return /* @__PURE__ */ d("div", { ref: l, className: p, role: "group", "aria-label": "Avatar group", ...s, children: [
      c > 0 && /* @__PURE__ */ d(
        "span",
        {
          className: `${De.overflow}`,
          style: { width: h, height: h, fontSize: h * 0.35 },
          "aria-label": `${c} more`,
          children: [
            "+",
            c
          ]
        }
      ),
      a.slice().reverse().map((u, m) => Pr(u, { key: m }))
    ] });
  }
);
Hc.displayName = "AvatarGroup";
const qc = "_list_1d1g8_3", Gc = "_listItem_1d1g8_12", Uc = "_compact_1d1g8_20", Vc = "_divided_1d1g8_26", Zc = "_hoverable_1d1g8_35", Kc = "_listItemClickable_1d1g8_40", Yc = "_icon_1d1g8_50", Xc = "_content_1d1g8_61", Qc = "_primary_1d1g8_66", Jc = "_secondary_1d1g8_73", ed = "_action_1d1g8_82", Oe = {
  list: qc,
  listItem: Gc,
  compact: Uc,
  divided: Vc,
  hoverable: Zc,
  listItemClickable: Kc,
  icon: Yc,
  content: Xc,
  primary: Qc,
  secondary: Jc,
  action: ed
}, ur = B(
  ({ items: n, variant: t = "default", hoverable: r = !1, compact: o = !1, className: s, ...l }, i) => {
    const a = [
      Oe.list,
      t === "divided" ? Oe.divided : void 0,
      r ? Oe.hoverable : void 0,
      o ? Oe.compact : void 0,
      s
    ].filter(Boolean).join(" ");
    return /* @__PURE__ */ e("ul", { ref: i, className: a, role: "list", ...l, children: n.map((c, p) => {
      const _ = [
        Oe.listItem,
        c.onClick ? Oe.listItemClickable : void 0
      ].filter(Boolean).join(" ");
      return /* @__PURE__ */ d(
        "li",
        {
          className: _,
          role: "listitem",
          tabIndex: c.onClick ? 0 : void 0,
          onClick: c.onClick,
          onKeyDown: (h) => {
            c.onClick && (h.key === "Enter" || h.key === " ") && (h.preventDefault(), c.onClick());
          },
          children: [
            c.icon && /* @__PURE__ */ e("span", { className: Oe.icon, children: c.icon }),
            /* @__PURE__ */ d("span", { className: Oe.content, children: [
              /* @__PURE__ */ e("span", { className: Oe.primary, children: c.primary }),
              c.secondary && /* @__PURE__ */ e("span", { className: Oe.secondary, children: c.secondary })
            ] }),
            c.action && /* @__PURE__ */ e("span", { className: Oe.action, children: c.action })
          ]
        },
        p
      );
    }) });
  }
);
ur.displayName = "List";
const td = "_chip_l34eh_3", nd = "_sm_l34eh_22", rd = "_md_l34eh_28", od = "_disabled_l34eh_35", sd = "_selected_l34eh_44", id = "_icon_l34eh_60", ad = "_checkmark_l34eh_68", ld = "_removeButton_l34eh_85", cd = "_chipGroup_l34eh_123", mt = {
  chip: td,
  sm: nd,
  md: rd,
  disabled: od,
  selected: sd,
  icon: id,
  checkmark: ad,
  removeButton: ld,
  chipGroup: cd
}, dd = B(
  ({
    label: n,
    selected: t = !1,
    onClick: r,
    disabled: o = !1,
    icon: s,
    variant: l = "filter",
    size: i = "md",
    onRemove: a,
    className: c,
    ...p
  }, _) => {
    const h = [
      mt.chip,
      mt[i],
      t ? mt.selected : void 0,
      o ? mt.disabled : void 0,
      c
    ].filter(Boolean).join(" "), u = (g) => {
      o || (g.preventDefault(), r == null || r());
    }, m = (g) => {
      o || (g.key === "Enter" || g.key === " ") && (g.preventDefault(), r == null || r());
    }, k = (g) => {
      g.stopPropagation(), o || a == null || a();
    };
    return /* @__PURE__ */ d(
      "span",
      {
        ref: _,
        className: h,
        role: l === "choice" ? "radio" : l === "filter" ? "checkbox" : void 0,
        "aria-checked": l !== "input" ? t : void 0,
        "aria-disabled": o || void 0,
        tabIndex: o ? -1 : 0,
        onClick: u,
        onKeyDown: m,
        ...p,
        children: [
          l === "filter" && t && /* @__PURE__ */ e("span", { className: mt.checkmark, "aria-hidden": "true", children: "✓" }),
          s && /* @__PURE__ */ e("span", { className: mt.icon, children: s }),
          n,
          l === "input" && /* @__PURE__ */ e(
            "button",
            {
              type: "button",
              className: mt.removeButton,
              onClick: k,
              "aria-label": `Remove ${n}`,
              tabIndex: -1,
              children: "✕"
            }
          )
        ]
      }
    );
  }
);
dd.displayName = "Chip";
const hd = B(
  ({ children: n, className: t, ...r }, o) => {
    const s = [mt.chipGroup, t].filter(Boolean).join(" ");
    return /* @__PURE__ */ e("div", { ref: o, className: s, role: "group", ...r, children: n });
  }
);
hd.displayName = "ChipGroup";
const pd = "_emptyState_84gzd_3", ud = "_compact_84gzd_14", md = "_icon_84gzd_19", _d = "_title_84gzd_42", kd = "_description_84gzd_56", gd = "_actionButton_84gzd_71", $t = {
  emptyState: pd,
  compact: ud,
  icon: md,
  title: _d,
  description: kd,
  actionButton: gd
}, mr = B(
  ({ icon: n, title: t, description: r, action: o, compact: s = !1, className: l, ...i }, a) => {
    const c = [
      $t.emptyState,
      s ? $t.compact : void 0,
      l
    ].filter(Boolean).join(" ");
    return /* @__PURE__ */ d("div", { ref: a, className: c, role: "status", ...i, children: [
      n && /* @__PURE__ */ e("div", { className: $t.icon, "aria-hidden": "true", children: n }),
      /* @__PURE__ */ e("h3", { className: $t.title, children: t }),
      r && /* @__PURE__ */ e("p", { className: $t.description, children: r }),
      o && /* @__PURE__ */ e(
        "button",
        {
          type: "button",
          className: $t.actionButton,
          onClick: o.onClick,
          children: o.label
        }
      )
    ] });
  }
);
mr.displayName = "EmptyState";
const yd = "_stat_1lxpt_3", fd = "_label_1lxpt_10", bd = "_sm_1lxpt_17", vd = "_md_1lxpt_21", xd = "_lg_1lxpt_25", Ld = "_valueRow_1lxpt_30", wd = "_prefix_1lxpt_36", Nd = "_suffix_1lxpt_37", $d = "_value_1lxpt_30", Id = "_change_1lxpt_77", Wd = "_changeUp_1lxpt_98", Ad = "_changeDown_1lxpt_102", Bd = "_changeFlat_1lxpt_106", Cd = "_arrow_1lxpt_110", Sd = "_skeleton_1lxpt_117", Md = "_shimmer_1lxpt_1", Td = "_skeletonLabel_1lxpt_133", Dd = "_skeletonValue_1lxpt_139", Ed = "_skeletonChange_1lxpt_154", he = {
  stat: yd,
  label: fd,
  sm: bd,
  md: vd,
  lg: xd,
  valueRow: Ld,
  prefix: wd,
  suffix: Nd,
  value: $d,
  change: Id,
  changeUp: Wd,
  changeDown: Ad,
  changeFlat: Bd,
  arrow: Cd,
  skeleton: Sd,
  shimmer: Md,
  skeletonLabel: Td,
  skeletonValue: Dd,
  skeletonChange: Ed
}, Od = {
  up: he.changeUp,
  down: he.changeDown,
  flat: he.changeFlat
}, jd = {
  up: "▲",
  down: "▼",
  flat: "–"
}, An = B(
  ({
    label: n,
    value: t,
    change: r,
    prefix: o,
    suffix: s,
    size: l = "md",
    loading: i = !1,
    className: a,
    ...c
  }, p) => {
    const _ = [he.stat, he[l], a].filter(Boolean).join(" ");
    return i ? /* @__PURE__ */ d("div", { ref: p, className: _, "aria-busy": "true", ...c, children: [
      /* @__PURE__ */ e("div", { className: `${he.skeleton} ${he.skeletonLabel}` }),
      /* @__PURE__ */ e("div", { className: `${he.skeleton} ${he.skeletonValue}` }),
      /* @__PURE__ */ e("div", { className: `${he.skeleton} ${he.skeletonChange}` })
    ] }) : /* @__PURE__ */ d("div", { ref: p, className: _, ...c, children: [
      /* @__PURE__ */ e("span", { className: he.label, children: n }),
      /* @__PURE__ */ d("span", { className: he.valueRow, children: [
        o && /* @__PURE__ */ e("span", { className: he.prefix, children: o }),
        /* @__PURE__ */ e("span", { className: he.value, children: t }),
        s && /* @__PURE__ */ e("span", { className: he.suffix, children: s })
      ] }),
      r && /* @__PURE__ */ d("span", { className: `${he.change} ${Od[r.direction]}`, children: [
        /* @__PURE__ */ e("span", { className: he.arrow, "aria-hidden": "true", children: jd[r.direction] }),
        /* @__PURE__ */ d("span", { children: [
          r.value > 0 ? "+" : "",
          r.value,
          "%"
        ] })
      ] })
    ] });
  }
);
An.displayName = "Stat";
const Fd = "_formField_zsm42_3", Rd = "_fullWidth_zsm42_10", Pd = "_label_zsm42_16", zd = "_required_zsm42_26", Hd = "_helperText_zsm42_33", qd = "_errorText_zsm42_45", It = {
  formField: Fd,
  fullWidth: Rd,
  label: Pd,
  required: zd,
  helperText: Hd,
  errorText: qd
}, Kt = B(
  ({
    label: n,
    error: t,
    helperText: r,
    required: o = !1,
    children: s,
    htmlFor: l,
    fullWidth: i = !1,
    className: a,
    errorId: c,
    helperTextId: p
  }, _) => {
    const h = [
      It.formField,
      i ? It.fullWidth : "",
      a ?? ""
    ].filter(Boolean).join(" ");
    return /* @__PURE__ */ d("div", { ref: _, className: h, children: [
      n && /* @__PURE__ */ e(
        "label",
        {
          htmlFor: l,
          className: `${It.label}${o ? ` ${It.required}` : ""}`,
          children: n
        }
      ),
      s,
      t ? /* @__PURE__ */ e("p", { id: c, className: It.errorText, role: "alert", children: t }) : r ? /* @__PURE__ */ e("p", { id: p, className: It.helperText, children: r }) : null
    ] });
  }
);
Kt.displayName = "FormField";
const Gd = "_inputWrapper_ih2x2_3", Ud = "_input_ih2x2_3", Vd = "_sm_ih2x2_37", Zd = "_md_ih2x2_43", Kd = "_lg_ih2x2_49", Yd = "_hasIconLeft_ih2x2_57", Xd = "_hasIconRight_ih2x2_61", Qd = "_iconLeft_ih2x2_67", Jd = "_iconRight_ih2x2_68", e1 = "_clearButton_ih2x2_89", t1 = "_error_ih2x2_122", n1 = "_disabled_ih2x2_131", r1 = "_readonly_ih2x2_139", je = {
  inputWrapper: Gd,
  input: Ud,
  sm: Vd,
  md: Zd,
  lg: Kd,
  hasIconLeft: Yd,
  hasIconRight: Xd,
  iconLeft: Qd,
  iconRight: Jd,
  clearButton: e1,
  error: t1,
  disabled: n1,
  readonly: r1
}, on = B(
  ({
    label: n,
    placeholder: t,
    value: r,
    onChange: o,
    error: s,
    helperText: l,
    disabled: i = !1,
    required: a = !1,
    readOnly: c = !1,
    size: p = "md",
    type: _ = "text",
    iconLeft: h,
    iconRight: u,
    clearable: m = !1,
    onClear: k,
    fullWidth: g = !1,
    className: y,
    id: w,
    ...N
  }, v) => {
    const L = te(), x = w ?? `ubs-input-${L}`, $ = s ? `${x}-error` : void 0, f = l && !s ? `${x}-helper` : void 0, W = [$, f].filter(Boolean).join(" ") || void 0, b = m && r && !i && !c, I = u || b, S = [
      je.input,
      je[p],
      h ? je.hasIconLeft : "",
      I ? je.hasIconRight : "",
      s ? je.error : "",
      i ? je.disabled : "",
      c ? je.readonly : "",
      y ?? ""
    ].filter(Boolean).join(" "), R = () => {
      k == null || k();
    };
    return /* @__PURE__ */ e(
      Kt,
      {
        label: n,
        error: s,
        helperText: l,
        required: a,
        htmlFor: x,
        fullWidth: g,
        errorId: $,
        helperTextId: f,
        children: /* @__PURE__ */ d("div", { className: je.inputWrapper, children: [
          h && /* @__PURE__ */ e("span", { className: je.iconLeft, "aria-hidden": "true", children: h }),
          /* @__PURE__ */ e(
            "input",
            {
              ref: v,
              id: x,
              type: _,
              className: S,
              placeholder: t,
              value: r,
              onChange: o,
              disabled: i,
              required: a,
              readOnly: c,
              "aria-invalid": !!s,
              "aria-describedby": W,
              ...N
            }
          ),
          b ? /* @__PURE__ */ e(
            "button",
            {
              type: "button",
              className: je.clearButton,
              onClick: R,
              "aria-label": "Clear input",
              tabIndex: -1,
              children: "✕"
            }
          ) : u ? /* @__PURE__ */ e("span", { className: je.iconRight, "aria-hidden": "true", children: u }) : null
        ] })
      }
    );
  }
);
on.displayName = "Input";
const o1 = "_selectWrapper_j8nk1_3", s1 = "_select_j8nk1_3", i1 = "_sm_j8nk1_37", a1 = "_md_j8nk1_43", l1 = "_lg_j8nk1_49", c1 = "_chevron_j8nk1_57", d1 = "_placeholder_j8nk1_76", h1 = "_error_j8nk1_82", p1 = "_disabled_j8nk1_91", u1 = "_multiple_j8nk1_101", lt = {
  selectWrapper: o1,
  select: s1,
  sm: i1,
  md: a1,
  lg: l1,
  chevron: c1,
  placeholder: d1,
  error: h1,
  disabled: p1,
  multiple: u1
}, Bn = B(
  ({
    label: n,
    options: t,
    value: r,
    onChange: o,
    error: s,
    helperText: l,
    disabled: i = !1,
    required: a = !1,
    placeholder: c,
    size: p = "md",
    multiple: _ = !1,
    fullWidth: h = !1,
    className: u,
    id: m,
    ...k
  }, g) => {
    const y = te(), w = m ?? `ubs-select-${y}`, N = s ? `${w}-error` : void 0, v = l && !s ? `${w}-helper` : void 0, L = [N, v].filter(Boolean).join(" ") || void 0, x = [
      lt.select,
      lt[p],
      _ ? lt.multiple : "",
      s ? lt.error : "",
      i ? lt.disabled : "",
      u ?? ""
    ].filter(Boolean).join(" ");
    return /* @__PURE__ */ e(
      Kt,
      {
        label: n,
        error: s,
        helperText: l,
        required: a,
        htmlFor: w,
        fullWidth: h,
        errorId: N,
        helperTextId: v,
        children: /* @__PURE__ */ d("div", { className: lt.selectWrapper, children: [
          /* @__PURE__ */ d(
            "select",
            {
              ref: g,
              id: w,
              className: x,
              value: r,
              onChange: o,
              disabled: i,
              required: a,
              multiple: _,
              "aria-invalid": !!s,
              "aria-describedby": L,
              ...k,
              children: [
                c && /* @__PURE__ */ e("option", { value: "", disabled: !0, className: lt.placeholder, children: c }),
                t.map(($) => /* @__PURE__ */ e(
                  "option",
                  {
                    value: $.value,
                    disabled: $.disabled,
                    children: $.label
                  },
                  $.value
                ))
              ]
            }
          ),
          !_ && /* @__PURE__ */ e("span", { className: lt.chevron, "aria-hidden": "true", children: /* @__PURE__ */ e(
            "svg",
            {
              viewBox: "0 0 16 16",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              children: /* @__PURE__ */ e(
                "path",
                {
                  d: "M4 6L8 10L12 6",
                  stroke: "currentColor",
                  strokeWidth: "1.5",
                  strokeLinecap: "round",
                  strokeLinejoin: "round"
                }
              )
            }
          ) })
        ] })
      }
    );
  }
);
Bn.displayName = "Select";
const m1 = "_textarea_1r5pl_3", _1 = "_resizeNone_1r5pl_34", k1 = "_resizeVertical_1r5pl_38", g1 = "_resizeBoth_1r5pl_42", y1 = "_error_1r5pl_48", f1 = "_disabled_1r5pl_57", b1 = "_readonly_1r5pl_65", v1 = "_countWrapper_1r5pl_72", x1 = "_count_1r5pl_72", L1 = "_countOver_1r5pl_85", He = {
  textarea: m1,
  resizeNone: _1,
  resizeVertical: k1,
  resizeBoth: g1,
  error: y1,
  disabled: f1,
  readonly: b1,
  countWrapper: v1,
  count: x1,
  countOver: L1
}, _r = B(
  ({
    label: n,
    value: t,
    onChange: r,
    error: o,
    helperText: s,
    disabled: l = !1,
    required: i = !1,
    readOnly: a = !1,
    rows: c = 4,
    maxLength: p,
    showCount: _ = !1,
    resize: h = "vertical",
    fullWidth: u = !1,
    className: m,
    id: k,
    ...g
  }, y) => {
    const w = te(), N = k ?? `ubs-textarea-${w}`, v = o ? `${N}-error` : void 0, L = s && !o ? `${N}-helper` : void 0, x = [v, L].filter(Boolean).join(" ") || void 0, $ = h === "none" ? He.resizeNone : h === "both" ? He.resizeBoth : He.resizeVertical, f = [
      He.textarea,
      $,
      o ? He.error : "",
      l ? He.disabled : "",
      a ? He.readonly : "",
      m ?? ""
    ].filter(Boolean).join(" "), W = typeof t == "string" ? t.length : 0, b = p !== void 0 && W > p;
    return /* @__PURE__ */ d(
      Kt,
      {
        label: n,
        error: o,
        helperText: s,
        required: i,
        htmlFor: N,
        fullWidth: u,
        errorId: v,
        helperTextId: L,
        children: [
          /* @__PURE__ */ e(
            "textarea",
            {
              ref: y,
              id: N,
              className: f,
              value: t,
              onChange: r,
              disabled: l,
              required: i,
              readOnly: a,
              rows: c,
              maxLength: p,
              "aria-invalid": !!o,
              "aria-describedby": x,
              ...g
            }
          ),
          _ && /* @__PURE__ */ e("div", { className: He.countWrapper, children: /* @__PURE__ */ d("span", { className: `${He.count}${b ? ` ${He.countOver}` : ""}`, children: [
            W,
            p !== void 0 ? ` / ${p}` : ""
          ] }) })
        ]
      }
    );
  }
);
_r.displayName = "Textarea";
const w1 = "_container_f4gek_3", N1 = "_disabled_f4gek_13", $1 = "_nativeInput_f4gek_20", I1 = "_box_f4gek_34", W1 = "_sm_f4gek_45", A1 = "_md_f4gek_50", B1 = "_checkIcon_f4gek_71", C1 = "_indeterminateIcon_f4gek_72", S1 = "_indeterminate_f4gek_72", M1 = "_error_f4gek_99", T1 = "_label_f4gek_105", D1 = "_errorText_f4gek_117", E1 = "_errorWrapper_f4gek_128", Be = {
  container: w1,
  disabled: N1,
  nativeInput: $1,
  box: I1,
  sm: W1,
  md: A1,
  checkIcon: B1,
  indeterminateIcon: C1,
  indeterminate: S1,
  error: M1,
  label: T1,
  errorText: D1,
  errorWrapper: E1
}, kr = B(
  ({
    label: n,
    checked: t = !1,
    onChange: r,
    disabled: o = !1,
    indeterminate: s = !1,
    error: l,
    size: i = "md",
    className: a,
    id: c,
    ...p
  }, _) => {
    const h = te(), u = c ?? `ubs-checkbox-${h}`, m = U(null);
    H(() => {
      m.current && (m.current.indeterminate = s);
    }, [s]);
    const k = (w) => {
      m.current = w, typeof _ == "function" ? _(w) : _ && (_.current = w);
    }, g = [
      Be.container,
      Be[i],
      o ? Be.disabled : "",
      s ? Be.indeterminate : "",
      l ? Be.error : "",
      a ?? ""
    ].filter(Boolean).join(" "), y = /* @__PURE__ */ d("label", { htmlFor: u, className: g, children: [
      /* @__PURE__ */ e(
        "input",
        {
          ref: k,
          id: u,
          type: "checkbox",
          className: Be.nativeInput,
          checked: t,
          onChange: r,
          disabled: o,
          "aria-invalid": !!l,
          ...p
        }
      ),
      /* @__PURE__ */ d("span", { className: Be.box, "aria-hidden": "true", children: [
        /* @__PURE__ */ e("span", { className: Be.checkIcon, children: /* @__PURE__ */ e(
          "svg",
          {
            viewBox: "0 0 16 16",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: /* @__PURE__ */ e(
              "path",
              {
                d: "M3 8L6.5 11.5L13 4.5",
                stroke: "currentColor",
                strokeWidth: "2",
                strokeLinecap: "round",
                strokeLinejoin: "round"
              }
            )
          }
        ) }),
        /* @__PURE__ */ e("span", { className: Be.indeterminateIcon, children: /* @__PURE__ */ e(
          "svg",
          {
            viewBox: "0 0 16 16",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: /* @__PURE__ */ e(
              "path",
              {
                d: "M4 8H12",
                stroke: "currentColor",
                strokeWidth: "2",
                strokeLinecap: "round"
              }
            )
          }
        ) })
      ] }),
      /* @__PURE__ */ e("span", { className: Be.label, children: n })
    ] });
    return l ? /* @__PURE__ */ d("div", { className: Be.errorWrapper, children: [
      y,
      /* @__PURE__ */ e("p", { className: Be.errorText, role: "alert", children: l })
    ] }) : y;
  }
);
kr.displayName = "Checkbox";
const O1 = "_container_1y99c_3", j1 = "_disabled_1y99c_13", F1 = "_nativeInput_1y99c_20", R1 = "_circle_1y99c_34", P1 = "_sm_1y99c_45", z1 = "_md_1y99c_50", H1 = "_dot_1y99c_57", q1 = "_label_1y99c_86", G1 = "_group_1y99c_98", U1 = "_groupLabel_1y99c_104", V1 = "_groupRequired_1y99c_115", Z1 = "_groupError_1y99c_120", Pe = {
  container: O1,
  disabled: j1,
  nativeInput: F1,
  circle: R1,
  sm: P1,
  md: z1,
  dot: H1,
  label: q1,
  group: G1,
  groupLabel: U1,
  groupRequired: V1,
  groupError: Z1
}, K1 = B(
  ({
    label: n,
    value: t,
    checked: r = !1,
    onChange: o,
    disabled: s = !1,
    name: l,
    size: i = "md",
    className: a,
    id: c,
    ...p
  }, _) => {
    const h = te(), u = c ?? `ubs-radio-${h}`, m = [
      Pe.container,
      Pe[i],
      s ? Pe.disabled : "",
      a ?? ""
    ].filter(Boolean).join(" ");
    return /* @__PURE__ */ d("label", { htmlFor: u, className: m, children: [
      /* @__PURE__ */ e(
        "input",
        {
          ref: _,
          id: u,
          type: "radio",
          className: Pe.nativeInput,
          name: l,
          value: t,
          checked: r,
          onChange: o,
          disabled: s,
          ...p
        }
      ),
      /* @__PURE__ */ e("span", { className: Pe.circle, "aria-hidden": "true", children: /* @__PURE__ */ e("span", { className: Pe.dot }) }),
      /* @__PURE__ */ e("span", { className: Pe.label, children: n })
    ] });
  }
);
K1.displayName = "Radio";
const Y1 = B(
  ({
    label: n,
    name: t,
    value: r,
    onChange: o,
    required: s = !1,
    disabled: l = !1,
    error: i,
    children: a,
    className: c
  }, p) => {
    const _ = (m) => {
      o == null || o(m.target.value);
    }, h = Gt.Children.map(a, (m) => Gt.isValidElement(m) ? Gt.cloneElement(m, {
      name: t,
      checked: m.props.value === r,
      onChange: _,
      disabled: l || m.props.disabled
    }) : m), u = [Pe.group, c ?? ""].filter(Boolean).join(" ");
    return /* @__PURE__ */ d("fieldset", { ref: p, className: u, role: "radiogroup", children: [
      n && /* @__PURE__ */ e(
        "legend",
        {
          className: `${Pe.groupLabel}${s ? ` ${Pe.groupRequired}` : ""}`,
          children: n
        }
      ),
      h,
      i && /* @__PURE__ */ e("p", { className: Pe.groupError, role: "alert", children: i })
    ] });
  }
);
Y1.displayName = "RadioGroup";
const X1 = "_container_1599y_3", Q1 = "_disabled_1599y_13", J1 = "_labelLeft_1599y_18", eh = "_nativeInput_1599y_24", th = "_track_1599y_38", nh = "_sm_1599y_50", rh = "_md_1599y_55", oh = "_lg_1599y_60", sh = "_thumb_1599y_67", ih = "_label_1599y_18", ct = {
  container: X1,
  disabled: Q1,
  labelLeft: J1,
  nativeInput: eh,
  track: th,
  sm: nh,
  md: rh,
  lg: oh,
  thumb: sh,
  label: ih
}, ah = B(
  ({
    label: n,
    checked: t = !1,
    onChange: r,
    disabled: o = !1,
    size: s = "md",
    labelPosition: l = "right",
    className: i,
    id: a,
    ...c
  }, p) => {
    const _ = te(), h = a ?? `ubs-toggle-${_}`, u = [
      ct.container,
      ct[s],
      o ? ct.disabled : "",
      l === "left" ? ct.labelLeft : "",
      i ?? ""
    ].filter(Boolean).join(" ");
    return /* @__PURE__ */ d("label", { htmlFor: h, className: u, children: [
      /* @__PURE__ */ e(
        "input",
        {
          ref: p,
          id: h,
          type: "checkbox",
          role: "switch",
          className: ct.nativeInput,
          checked: t,
          onChange: r,
          disabled: o,
          "aria-checked": t,
          ...c
        }
      ),
      /* @__PURE__ */ e("span", { className: ct.track, "aria-hidden": "true", children: /* @__PURE__ */ e("span", { className: ct.thumb }) }),
      /* @__PURE__ */ e("span", { className: ct.label, children: n })
    ] });
  }
);
ah.displayName = "Toggle";
const lh = "_inputWrapper_7y299_3", ch = "_input_7y299_3", dh = "_calendarIcon_7y299_50", hh = "_error_7y299_69", ph = "_disabled_7y299_78", jt = {
  inputWrapper: lh,
  input: ch,
  calendarIcon: dh,
  error: hh,
  disabled: ph
};
function fn(n) {
  if (!n) return "";
  const t = n.getFullYear(), r = String(n.getMonth() + 1).padStart(2, "0"), o = String(n.getDate()).padStart(2, "0");
  return `${t}-${r}-${o}`;
}
const uh = B(
  ({
    label: n,
    value: t,
    onChange: r,
    error: o,
    helperText: s,
    disabled: l = !1,
    required: i = !1,
    min: a,
    max: c,
    format: p = "DD/MM/YYYY",
    fullWidth: _ = !1,
    className: h,
    id: u,
    ...m
  }, k) => {
    const g = te(), y = u ?? `ubs-datepicker-${g}`, w = o ? `${y}-error` : void 0, N = s && !o ? `${y}-helper` : void 0, v = [w, N].filter(Boolean).join(" ") || void 0, L = ($) => {
      const f = $.target.value;
      if (!f) {
        r == null || r(null);
        return;
      }
      const W = /* @__PURE__ */ new Date(f + "T00:00:00");
      r == null || r(isNaN(W.getTime()) ? null : W);
    }, x = [
      jt.input,
      o ? jt.error : "",
      l ? jt.disabled : "",
      h ?? ""
    ].filter(Boolean).join(" ");
    return /* @__PURE__ */ e(
      Kt,
      {
        label: n,
        error: o,
        helperText: s,
        required: i,
        htmlFor: y,
        fullWidth: _,
        errorId: w,
        helperTextId: N,
        children: /* @__PURE__ */ d("div", { className: jt.inputWrapper, children: [
          /* @__PURE__ */ e(
            "input",
            {
              ref: k,
              id: y,
              type: "date",
              className: x,
              value: fn(t),
              onChange: L,
              disabled: l,
              required: i,
              min: a ? fn(a) : void 0,
              max: c ? fn(c) : void 0,
              "aria-invalid": !!o,
              "aria-describedby": v,
              ...m
            }
          ),
          /* @__PURE__ */ e("span", { className: jt.calendarIcon, "aria-hidden": "true", children: /* @__PURE__ */ d(
            "svg",
            {
              viewBox: "0 0 20 20",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              children: [
                /* @__PURE__ */ e(
                  "rect",
                  {
                    x: "2",
                    y: "4",
                    width: "16",
                    height: "14",
                    rx: "2",
                    stroke: "currentColor",
                    strokeWidth: "1.5"
                  }
                ),
                /* @__PURE__ */ e("path", { d: "M2 8H18", stroke: "currentColor", strokeWidth: "1.5" }),
                /* @__PURE__ */ e("path", { d: "M6 2V5", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round" }),
                /* @__PURE__ */ e("path", { d: "M14 2V5", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round" })
              ]
            }
          ) })
        ] })
      }
    );
  }
);
uh.displayName = "DatePicker";
const mh = "_navbar_yumgh_3", _h = "_sticky_yumgh_17", kh = "_light_yumgh_24", gh = "_dark_yumgh_29", yh = "_logo_yumgh_36", fh = "_desktopNav_yumgh_44", bh = "_navItem_yumgh_54", vh = "_navItemActive_yumgh_82", xh = "_navItemIcon_yumgh_93", Lh = "_actions_yumgh_101", wh = "_hamburger_yumgh_110", Nh = "_hamburgerBar_yumgh_133", $h = "_hamburgerOpen_yumgh_164", Ih = "_overlay_yumgh_180", Wh = "_overlayOpen_yumgh_190", Ah = "_mobilePanel_yumgh_194", Bh = "_mobilePanelOpen_yumgh_207", Ch = "_mobilePanelLight_yumgh_212", Sh = "_mobilePanelDark_yumgh_218", Mh = "_mobileNav_yumgh_223", Th = "_mobileNavItem_yumgh_232", Dh = "_mobileNavItemActive_yumgh_256", Eh = "_mobileActions_yumgh_261", ne = {
  navbar: mh,
  sticky: _h,
  light: kh,
  dark: gh,
  logo: yh,
  desktopNav: fh,
  navItem: bh,
  navItemActive: vh,
  navItemIcon: xh,
  actions: Lh,
  hamburger: wh,
  hamburgerBar: Nh,
  hamburgerOpen: $h,
  overlay: Ih,
  overlayOpen: Wh,
  mobilePanel: Ah,
  mobilePanelOpen: Bh,
  mobilePanelLight: Ch,
  mobilePanelDark: Sh,
  mobileNav: Mh,
  mobileNavItem: Th,
  mobileNavItemActive: Dh,
  mobileActions: Eh
}, Oh = B(function({
  logo: t,
  items: r = [],
  actions: o,
  sticky: s = !1,
  variant: l = "light",
  className: i,
  ...a
}, c) {
  const [p, _] = P(!1), h = U(null), u = j(() => {
    _((g) => !g);
  }, []), m = j(() => {
    _(!1);
  }, []);
  H(() => {
    if (p) {
      const g = document.body.style.overflow;
      return document.body.style.overflow = "hidden", () => {
        document.body.style.overflow = g;
      };
    }
  }, [p]), H(() => {
    if (!p) return;
    const g = (y) => {
      y.key === "Escape" && m();
    };
    return document.addEventListener("keydown", g), () => document.removeEventListener("keydown", g);
  }, [p, m]);
  const k = [
    ne.navbar,
    ne[l],
    s ? ne.sticky : "",
    i ?? ""
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ d(O, { children: [
    /* @__PURE__ */ d("nav", { ref: c, className: k, ...a, children: [
      t && /* @__PURE__ */ e("div", { className: ne.logo, children: t }),
      /* @__PURE__ */ e("ul", { className: ne.desktopNav, children: r.map((g) => /* @__PURE__ */ e("li", { children: /* @__PURE__ */ d(
        "a",
        {
          href: g.href,
          className: [
            ne.navItem,
            g.active ? ne.navItemActive : ""
          ].filter(Boolean).join(" "),
          "aria-current": g.active ? "page" : void 0,
          children: [
            g.icon && /* @__PURE__ */ e("span", { className: ne.navItemIcon, children: g.icon }),
            g.label
          ]
        }
      ) }, g.href)) }),
      o && /* @__PURE__ */ e("div", { className: ne.actions, children: o }),
      /* @__PURE__ */ e(
        "button",
        {
          type: "button",
          className: [ne.hamburger, p ? ne.hamburgerOpen : ""].filter(Boolean).join(" "),
          onClick: u,
          "aria-expanded": p,
          "aria-label": p ? "Close navigation menu" : "Open navigation menu",
          children: /* @__PURE__ */ e("span", { className: ne.hamburgerBar })
        }
      )
    ] }),
    /* @__PURE__ */ e(
      "div",
      {
        className: [ne.overlay, p ? ne.overlayOpen : ""].filter(Boolean).join(" "),
        onClick: m,
        "aria-hidden": "true"
      }
    ),
    /* @__PURE__ */ d(
      "div",
      {
        ref: h,
        className: [
          ne.mobilePanel,
          p ? ne.mobilePanelOpen : "",
          l === "light" ? ne.mobilePanelLight : ne.mobilePanelDark
        ].filter(Boolean).join(" "),
        role: "dialog",
        "aria-label": "Navigation menu",
        "aria-hidden": !p,
        children: [
          /* @__PURE__ */ e("ul", { className: ne.mobileNav, children: r.map((g) => /* @__PURE__ */ e("li", { children: /* @__PURE__ */ d(
            "a",
            {
              href: g.href,
              className: [
                ne.mobileNavItem,
                g.active ? ne.mobileNavItemActive : ""
              ].filter(Boolean).join(" "),
              "aria-current": g.active ? "page" : void 0,
              onClick: m,
              children: [
                g.icon && /* @__PURE__ */ e("span", { className: ne.navItemIcon, children: g.icon }),
                g.label
              ]
            }
          ) }, g.href)) }),
          o && /* @__PURE__ */ e("div", { className: ne.mobileActions, children: o })
        ]
      }
    )
  ] });
}), jh = "_tablist_k4umk_3", Fh = "_fullWidth_k4umk_11", Rh = "_tab_k4umk_3", Ph = "_underline_k4umk_21", zh = "_tabActive_k4umk_49", Hh = "_contained_k4umk_66", qh = "_tabIcon_k4umk_115", Wt = {
  tablist: jh,
  fullWidth: Fh,
  tab: Rh,
  underline: Ph,
  tabActive: zh,
  contained: Hh,
  tabIcon: qh
}, Gh = B(function({
  tabs: t,
  activeTab: r,
  onChange: o,
  variant: s = "underline",
  fullWidth: l = !1,
  className: i,
  ...a
}, c) {
  const p = U([]);
  j(
    (u) => {
      var g;
      const m = t.map((y, w) => ({ ...y, index: w })).filter((y) => !y.disabled);
      if (m.length === 0) return;
      let k = m.find((y) => y.index === u);
      k || (k = m[0]), (g = p.current[k.index]) == null || g.focus();
    },
    [t]
  );
  const _ = j(
    (u, m) => {
      var w;
      const k = t.map((N, v) => ({ disabled: N.disabled, index: v })).filter((N) => !N.disabled).map((N) => N.index), g = k.indexOf(m);
      let y = null;
      switch (u.key) {
        case "ArrowRight":
        case "ArrowDown": {
          u.preventDefault();
          const N = g + 1;
          y = k[N >= k.length ? 0 : N];
          break;
        }
        case "ArrowLeft":
        case "ArrowUp": {
          u.preventDefault();
          const N = g - 1;
          y = k[N < 0 ? k.length - 1 : N];
          break;
        }
        case "Home": {
          u.preventDefault(), y = k[0];
          break;
        }
        case "End": {
          u.preventDefault(), y = k[k.length - 1];
          break;
        }
      }
      y != null && ((w = p.current[y]) == null || w.focus(), o(t[y].value));
    },
    [t, o]
  ), h = [
    Wt.tablist,
    Wt[s],
    l ? Wt.fullWidth : "",
    i ?? ""
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ e("div", { ref: c, className: h, role: "tablist", ...a, children: t.map((u, m) => {
    const k = u.value === r;
    return /* @__PURE__ */ d(
      "button",
      {
        ref: (g) => {
          p.current[m] = g;
        },
        type: "button",
        role: "tab",
        id: `tab-${u.value}`,
        "aria-selected": k,
        "aria-controls": `tabpanel-${u.value}`,
        tabIndex: k ? 0 : -1,
        disabled: u.disabled,
        className: [Wt.tab, k ? Wt.tabActive : ""].filter(Boolean).join(" "),
        onClick: () => {
          u.disabled || o(u.value);
        },
        onKeyDown: (g) => _(g, m),
        children: [
          u.icon && /* @__PURE__ */ e("span", { className: Wt.tabIcon, children: u.icon }),
          u.label
        ]
      },
      u.value
    );
  }) });
}), Uh = "_nav_1sjqk_3", Vh = "_list_1sjqk_9", Zh = "_item_1sjqk_19", Kh = "_link_1sjqk_25", Yh = "_current_1sjqk_47", Xh = "_separator_1sjqk_56", Qh = "_ellipsis_1sjqk_62", dt = {
  nav: Uh,
  list: Vh,
  item: Zh,
  link: Kh,
  current: Yh,
  separator: Xh,
  ellipsis: Qh
}, eL = B(
  function({ items: t, separator: r = "/", maxItems: o, className: s, ...l }, i) {
    const [a, c] = P(!1), p = K(() => {
      if (!o || t.length <= o || a)
        return t.map((k, g) => ({ ...k, _collapsed: !1, _key: g }));
      const h = o - 1, u = t[0], m = t.slice(t.length - h);
      return [
        { ...u, _collapsed: !1, _key: 0 },
        {
          label: "…",
          href: void 0,
          _collapsed: !0,
          _key: -1
        },
        ...m.map((k, g) => ({
          ...k,
          _collapsed: !1,
          _key: t.length - h + g
        }))
      ];
    }, [t, o, a]), _ = [dt.nav, s ?? ""].filter(Boolean).join(" ");
    return /* @__PURE__ */ e("nav", { ref: i, className: _, "aria-label": "Breadcrumb", ...l, children: /* @__PURE__ */ e("ol", { className: dt.list, children: p.map((h, u) => {
      const m = u === p.length - 1 && !h._collapsed;
      return /* @__PURE__ */ d("li", { className: dt.item, children: [
        u > 0 && /* @__PURE__ */ e("span", { className: dt.separator, "aria-hidden": "true", children: r }),
        h._collapsed ? /* @__PURE__ */ e(
          "button",
          {
            type: "button",
            className: dt.ellipsis,
            onClick: () => c(!0),
            "aria-label": "Show all breadcrumbs",
            children: "…"
          }
        ) : m ? /* @__PURE__ */ e("span", { className: dt.current, "aria-current": "page", children: h.label }) : h.href ? /* @__PURE__ */ e("a", { href: h.href, className: dt.link, children: h.label }) : /* @__PURE__ */ e("span", { className: dt.current, children: h.label })
      ] }, h._key);
    }) }) });
  }
), Jh = "_pagination_412pm_3", ep = "_page_412pm_15", tp = "_active_412pm_31", np = "_sm_412pm_47", rp = "_ellipsis_412pm_48", op = "_md_412pm_55", sp = "_arrow_412pm_78 _page_412pm_15", Xe = {
  pagination: Jh,
  page: ep,
  active: tp,
  sm: np,
  ellipsis: rp,
  md: op,
  arrow: sp
};
function ip(n, t, r) {
  const o = [], s = Math.max(t - r, 1), l = Math.min(t + r, n), i = s > 2, a = l < n - 1;
  if (n <= r * 2 + 3) {
    for (let c = 1; c <= n; c++) o.push(c);
    return o;
  }
  if (o.push(1), i)
    o.push("ellipsis-start");
  else
    for (let c = 2; c < s; c++) o.push(c);
  for (let c = s; c <= l; c++)
    c !== 1 && c !== n && o.push(c);
  if (a)
    o.push("ellipsis-end");
  else
    for (let c = l + 1; c < n; c++) o.push(c);
  return n > 1 && o.push(n), o;
}
const ap = B(
  function({
    totalPages: t,
    currentPage: r,
    onChange: o,
    siblingCount: s = 1,
    showFirstLast: l = !1,
    showPrevNext: i = !0,
    size: a = "md",
    className: c,
    ...p
  }, _) {
    const h = K(
      () => ip(t, r, s),
      [t, r, s]
    ), u = [Xe.pagination, Xe[a], c ?? ""].filter(Boolean).join(" ");
    return /* @__PURE__ */ d("nav", { ref: _, className: u, "aria-label": "Pagination", ...p, children: [
      l && /* @__PURE__ */ e(
        "button",
        {
          type: "button",
          className: Xe.arrow,
          disabled: r <= 1,
          onClick: () => o(1),
          "aria-label": "First page",
          children: "«"
        }
      ),
      i && /* @__PURE__ */ e(
        "button",
        {
          type: "button",
          className: Xe.arrow,
          disabled: r <= 1,
          onClick: () => o(r - 1),
          "aria-label": "Previous page",
          children: "‹"
        }
      ),
      h.map((m) => {
        if (typeof m == "string")
          return /* @__PURE__ */ e("span", { className: Xe.ellipsis, "aria-hidden": "true", children: "…" }, m);
        const k = m === r;
        return /* @__PURE__ */ e(
          "button",
          {
            type: "button",
            className: [Xe.page, k ? Xe.active : ""].filter(Boolean).join(" "),
            onClick: () => o(m),
            "aria-label": `Page ${m}`,
            "aria-current": k ? "page" : void 0,
            children: m
          },
          m
        );
      }),
      i && /* @__PURE__ */ e(
        "button",
        {
          type: "button",
          className: Xe.arrow,
          disabled: r >= t,
          onClick: () => o(r + 1),
          "aria-label": "Next page",
          children: "›"
        }
      ),
      l && /* @__PURE__ */ e(
        "button",
        {
          type: "button",
          className: Xe.arrow,
          disabled: r >= t,
          onClick: () => o(t),
          "aria-label": "Last page",
          children: "»"
        }
      )
    ] });
  }
), lp = "_link_16aw4_3", cp = "_inline_16aw4_27", dp = "_standalone_16aw4_42", hp = "_arrow_16aw4_50", pp = "_external_16aw4_60", up = "_icon_16aw4_75", mp = "_label_16aw4_81", _p = "_externalIcon_16aw4_92", At = {
  link: lp,
  inline: cp,
  standalone: dp,
  arrow: hp,
  external: pp,
  icon: up,
  label: mp,
  externalIcon: _p
}, kp = B(
  ({
    variant: n = "inline",
    icon: t,
    children: r,
    className: o,
    target: s,
    rel: l,
    ...i
  }, a) => {
    const c = n === "external", p = [
      At.link,
      At[n],
      o ?? ""
    ].filter(Boolean).join(" "), _ = c ? {
      target: s ?? "_blank",
      rel: l ?? "noopener noreferrer"
    } : { target: s, rel: l };
    return /* @__PURE__ */ d(
      "a",
      {
        ref: a,
        className: p,
        "aria-label": c ? `${typeof r == "string" ? r : ""} (opens in new tab)` : void 0,
        ..._,
        ...i,
        children: [
          t && /* @__PURE__ */ e("span", { className: At.icon, "aria-hidden": "true", children: t }),
          /* @__PURE__ */ e("span", { className: At.label, children: r }),
          n === "standalone" && /* @__PURE__ */ e("span", { className: At.arrow, "aria-hidden": "true", children: /* @__PURE__ */ e(
            "svg",
            {
              width: "16",
              height: "16",
              viewBox: "0 0 16 16",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              children: /* @__PURE__ */ e(
                "path",
                {
                  d: "M6 3L11 8L6 13",
                  stroke: "currentColor",
                  strokeWidth: "1.5",
                  strokeLinecap: "round",
                  strokeLinejoin: "round"
                }
              )
            }
          ) }),
          c && /* @__PURE__ */ e("span", { className: At.externalIcon, "aria-hidden": "true", children: /* @__PURE__ */ d(
            "svg",
            {
              width: "14",
              height: "14",
              viewBox: "0 0 14 14",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              children: [
                /* @__PURE__ */ e(
                  "path",
                  {
                    d: "M11 7.5V11.5C11 12.0523 10.5523 12.5 10 12.5H2.5C1.94772 12.5 1.5 12.0523 1.5 11.5V4C1.5 3.44772 1.94772 3 2.5 3H6.5",
                    stroke: "currentColor",
                    strokeWidth: "1.5",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                  }
                ),
                /* @__PURE__ */ e(
                  "path",
                  {
                    d: "M9 1.5H12.5V5",
                    stroke: "currentColor",
                    strokeWidth: "1.5",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                  }
                ),
                /* @__PURE__ */ e(
                  "path",
                  {
                    d: "M5.5 8.5L12.5 1.5",
                    stroke: "currentColor",
                    strokeWidth: "1.5",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                  }
                )
              ]
            }
          ) })
        ]
      }
    );
  }
);
kp.displayName = "Links";
const gp = "_menuListItem_193dp_3", yp = "_disabled_193dp_21", fp = "_active_193dp_36", bp = "_icon_193dp_65", vp = "_content_193dp_78", xp = "_label_193dp_85", Lp = "_description_193dp_91", wp = "_badge_193dp_98", ht = {
  menuListItem: gp,
  disabled: yp,
  active: fp,
  icon: bp,
  content: vp,
  label: xp,
  description: Lp,
  badge: wp
}, Np = B(
  ({
    label: n,
    description: t,
    icon: r,
    badge: o,
    active: s = !1,
    disabled: l = !1,
    onClick: i,
    className: a,
    ...c
  }, p) => {
    const _ = [
      ht.menuListItem,
      s ? ht.active : "",
      l ? ht.disabled : "",
      a ?? ""
    ].filter(Boolean).join(" ");
    return /* @__PURE__ */ d(
      "li",
      {
        ref: p,
        className: _,
        role: "menuitem",
        tabIndex: l ? -1 : 0,
        "aria-disabled": l,
        "aria-current": s ? "page" : void 0,
        onClick: (m) => {
          l || i == null || i(m);
        },
        onKeyDown: (m) => {
          l || (m.key === "Enter" || m.key === " ") && (m.preventDefault(), i == null || i(m));
        },
        ...c,
        children: [
          r && /* @__PURE__ */ e("span", { className: ht.icon, "aria-hidden": "true", children: r }),
          /* @__PURE__ */ d("span", { className: ht.content, children: [
            /* @__PURE__ */ e("span", { className: ht.label, children: n }),
            t && /* @__PURE__ */ e("span", { className: ht.description, children: t })
          ] }),
          o && /* @__PURE__ */ e("span", { className: ht.badge, children: o })
        ]
      }
    );
  }
);
Np.displayName = "MenuListItem";
const $p = "_processNavigation_znqnl_3", Ip = "_stepList_znqnl_11", Wp = "_horizontal_znqnl_20", Ap = "_step_znqnl_11", Bp = "_stepIndicator_znqnl_33", Cp = "_stepCircle_znqnl_40", Sp = "_connector_znqnl_46", Mp = "_stepContent_znqnl_56", Tp = "_vertical_znqnl_64", Dp = "_stepNumber_znqnl_112", Ep = "_stepLabel_znqnl_121", Op = "_stepDescription_znqnl_129", jp = "_completed_znqnl_139", Fp = "_active_znqnl_156", Rp = "_upcoming_znqnl_173", Pp = "_error_znqnl_184", Ce = {
  processNavigation: $p,
  stepList: Ip,
  horizontal: Wp,
  step: Ap,
  stepIndicator: Bp,
  stepCircle: Cp,
  connector: Sp,
  stepContent: Mp,
  vertical: Tp,
  stepNumber: Dp,
  stepLabel: Ep,
  stepDescription: Op,
  completed: jp,
  active: Fp,
  upcoming: Rp,
  error: Pp
}, zp = B(
  ({
    steps: n,
    orientation: t = "horizontal",
    currentStep: r,
    className: o,
    ...s
  }, l) => {
    const i = [
      Ce.processNavigation,
      Ce[t],
      o ?? ""
    ].filter(Boolean).join(" ");
    return /* @__PURE__ */ e(
      "nav",
      {
        ref: l,
        className: i,
        "aria-label": "Process navigation",
        ...s,
        children: /* @__PURE__ */ e("ol", { className: Ce.stepList, role: "list", children: n.map((a, c) => {
          const p = [
            Ce.step,
            Ce[a.status]
          ].filter(Boolean).join(" "), _ = c === n.length - 1;
          return /* @__PURE__ */ d(
            "li",
            {
              className: p,
              "aria-current": a.status === "active" ? "step" : void 0,
              children: [
                /* @__PURE__ */ d("div", { className: Ce.stepIndicator, children: [
                  /* @__PURE__ */ d("span", { className: Ce.stepCircle, "aria-hidden": "true", children: [
                    a.status === "completed" && /* @__PURE__ */ e(
                      "svg",
                      {
                        width: "14",
                        height: "14",
                        viewBox: "0 0 14 14",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: /* @__PURE__ */ e(
                          "path",
                          {
                            d: "M2.5 7L5.5 10L11.5 4",
                            stroke: "currentColor",
                            strokeWidth: "2",
                            strokeLinecap: "round",
                            strokeLinejoin: "round"
                          }
                        )
                      }
                    ),
                    a.status === "error" && /* @__PURE__ */ d(
                      "svg",
                      {
                        width: "14",
                        height: "14",
                        viewBox: "0 0 14 14",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: [
                          /* @__PURE__ */ e(
                            "path",
                            {
                              d: "M7 4V7.5",
                              stroke: "currentColor",
                              strokeWidth: "2",
                              strokeLinecap: "round"
                            }
                          ),
                          /* @__PURE__ */ e("circle", { cx: "7", cy: "10", r: "1", fill: "currentColor" })
                        ]
                      }
                    ),
                    (a.status === "active" || a.status === "upcoming") && /* @__PURE__ */ e("span", { className: Ce.stepNumber, children: c + 1 })
                  ] }),
                  !_ && /* @__PURE__ */ e("span", { className: Ce.connector, "aria-hidden": "true" })
                ] }),
                /* @__PURE__ */ d("div", { className: Ce.stepContent, children: [
                  /* @__PURE__ */ e("span", { className: Ce.stepLabel, children: a.label }),
                  a.description && /* @__PURE__ */ e("span", { className: Ce.stepDescription, children: a.description })
                ] })
              ]
            },
            c
          );
        }) })
      }
    );
  }
);
zp.displayName = "ProcessNavigation";
const Hp = "_treeNavigation_1tkmu_3", qp = "_nodeList_1tkmu_11", Gp = "_nodeItem_1tkmu_18", Up = "_nodeContent_1tkmu_24", Vp = "_nodeDisabled_1tkmu_31", Zp = "_nodeActive_1tkmu_37", Kp = "_nodeLabel_1tkmu_41", Yp = "_nodeIcon_1tkmu_46", Xp = "_nodeButton_1tkmu_56", Qp = "_expandButton_1tkmu_62", Jp = "_expandButtonOpen_1tkmu_89", eu = "_expandSpacer_1tkmu_93", Me = {
  treeNavigation: Hp,
  nodeList: qp,
  nodeItem: Gp,
  nodeContent: Up,
  nodeDisabled: Vp,
  nodeActive: Zp,
  nodeLabel: Kp,
  nodeIcon: Yp,
  nodeButton: Xp,
  expandButton: Qp,
  expandButtonOpen: Jp,
  expandSpacer: eu
}, tu = B(
  ({
    items: n,
    activeId: t,
    onSelect: r,
    expandedIds: o,
    defaultExpandedIds: s,
    onExpandChange: l,
    className: i,
    ...a
  }, c) => {
    const [p, _] = P(
      s ?? /* @__PURE__ */ new Set()
    ), h = o ?? p, u = j(
      (g) => {
        const y = new Set(h);
        y.has(g) ? y.delete(g) : y.add(g), o || _(y), l == null || l(y);
      },
      [h, o, l]
    ), m = j(
      (g) => {
        r == null || r(g);
      },
      [r]
    ), k = [
      Me.treeNavigation,
      i ?? ""
    ].filter(Boolean).join(" ");
    return /* @__PURE__ */ e("nav", { ref: c, className: k, "aria-label": "Tree navigation", ...a, children: /* @__PURE__ */ e(
      gr,
      {
        items: n,
        activeId: t,
        expandedIds: h,
        onToggle: u,
        onSelect: m,
        level: 0
      }
    ) });
  }
);
tu.displayName = "TreeNavigation";
function gr({
  items: n,
  activeId: t,
  expandedIds: r,
  onToggle: o,
  onSelect: s,
  level: l
}) {
  return /* @__PURE__ */ e(
    "ul",
    {
      className: Me.nodeList,
      role: l === 0 ? "tree" : "group",
      style: { "--tree-level": l },
      children: n.map((i) => {
        const a = i.children && i.children.length > 0, c = r.has(i.id), p = t === i.id;
        return /* @__PURE__ */ d(
          "li",
          {
            className: Me.nodeItem,
            role: "treeitem",
            "aria-expanded": a ? c : void 0,
            "aria-selected": p,
            children: [
              /* @__PURE__ */ d(
                "div",
                {
                  className: [
                    Me.nodeContent,
                    p ? Me.nodeActive : "",
                    i.disabled ? Me.nodeDisabled : ""
                  ].filter(Boolean).join(" "),
                  children: [
                    a && /* @__PURE__ */ e(
                      "button",
                      {
                        type: "button",
                        className: [
                          Me.expandButton,
                          c ? Me.expandButtonOpen : ""
                        ].filter(Boolean).join(" "),
                        onClick: () => o(i.id),
                        "aria-label": c ? `Collapse ${i.label}` : `Expand ${i.label}`,
                        tabIndex: -1,
                        children: /* @__PURE__ */ e(
                          "svg",
                          {
                            width: "12",
                            height: "12",
                            viewBox: "0 0 12 12",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            "aria-hidden": "true",
                            children: /* @__PURE__ */ e(
                              "path",
                              {
                                d: "M4.5 2.5L8 6L4.5 9.5",
                                stroke: "currentColor",
                                strokeWidth: "1.5",
                                strokeLinecap: "round",
                                strokeLinejoin: "round"
                              }
                            )
                          }
                        )
                      }
                    ),
                    !a && /* @__PURE__ */ e("span", { className: Me.expandSpacer }),
                    /* @__PURE__ */ d(
                      "button",
                      {
                        type: "button",
                        className: Me.nodeButton,
                        onClick: () => {
                          i.disabled || (a && o(i.id), s(i.id));
                        },
                        disabled: i.disabled,
                        tabIndex: 0,
                        children: [
                          i.icon && /* @__PURE__ */ e("span", { className: Me.nodeIcon, "aria-hidden": "true", children: i.icon }),
                          /* @__PURE__ */ e("span", { className: Me.nodeLabel, children: i.label })
                        ]
                      }
                    )
                  ]
                }
              ),
              a && c && /* @__PURE__ */ e(
                gr,
                {
                  items: i.children,
                  activeId: t,
                  expandedIds: r,
                  onToggle: o,
                  onSelect: s,
                  level: l + 1
                }
              )
            ]
          },
          i.id
        );
      })
    }
  );
}
const nu = "_mastheadNavigation_1kn2u_3", ru = "_container_1kn2u_9", ou = "_primary_1kn2u_17", su = "_secondary_1kn2u_24", iu = "_navList_1kn2u_31", au = "_navItem_1kn2u_40", lu = "_navLink_1kn2u_46", cu = "_navTrigger_1kn2u_47", du = "_navLinkActive_1kn2u_79", hu = "_navTriggerActive_1kn2u_80", pu = "_navTriggerOpen_1kn2u_97", uu = "_dropdownChevron_1kn2u_103", mu = "_megaMenu_1kn2u_115", _u = "_megaMenuList_1kn2u_129", ku = "_megaMenuItem_1kn2u_135", gu = "_megaMenuLabel_1kn2u_153", yu = "_megaMenuDescription_1kn2u_160", pe = {
  mastheadNavigation: nu,
  container: ru,
  primary: ou,
  secondary: su,
  navList: iu,
  navItem: au,
  navLink: lu,
  navTrigger: cu,
  navLinkActive: du,
  navTriggerActive: hu,
  navTriggerOpen: pu,
  dropdownChevron: uu,
  megaMenu: mu,
  megaMenuList: _u,
  megaMenuItem: ku,
  megaMenuLabel: gu,
  megaMenuDescription: yu
}, fu = B(
  ({
    items: n,
    variant: t = "primary",
    className: r,
    ...o
  }, s) => {
    const [l, i] = P(null), a = U(null), c = [
      pe.mastheadNavigation,
      pe[t],
      r ?? ""
    ].filter(Boolean).join(" "), p = j((u, m) => {
      m && i((k) => k === u ? null : u);
    }, []), _ = j((u, m, k) => {
      u.key === "Escape" && i(null), (u.key === "Enter" || u.key === " ") && k && (u.preventDefault(), i((g) => g === m ? null : m));
    }, []);
    H(() => {
      const u = (m) => {
        a.current && !a.current.contains(m.target) && i(null);
      };
      return document.addEventListener("mousedown", u), () => document.removeEventListener("mousedown", u);
    }, []);
    const h = j(
      (u) => {
        a.current = u, typeof s == "function" ? s(u) : s && (s.current = u);
      },
      [s]
    );
    return /* @__PURE__ */ e(
      "nav",
      {
        ref: h,
        className: c,
        "aria-label": "Masthead navigation",
        ...o,
        children: /* @__PURE__ */ e("div", { className: pe.container, children: /* @__PURE__ */ e("ul", { className: pe.navList, role: "menubar", children: n.map((u, m) => {
          const k = u.children && u.children.length > 0, g = l === m;
          return /* @__PURE__ */ d(
            "li",
            {
              className: [
                pe.navItem,
                u.active ? pe.navItemActive : ""
              ].filter(Boolean).join(" "),
              role: "none",
              children: [
                k ? /* @__PURE__ */ d(
                  "button",
                  {
                    type: "button",
                    className: [
                      pe.navTrigger,
                      u.active ? pe.navTriggerActive : "",
                      g ? pe.navTriggerOpen : ""
                    ].filter(Boolean).join(" "),
                    role: "menuitem",
                    "aria-haspopup": "true",
                    "aria-expanded": g,
                    onClick: () => p(m, !0),
                    onKeyDown: (y) => _(y, m, !0),
                    children: [
                      u.label,
                      /* @__PURE__ */ e("span", { className: pe.dropdownChevron, "aria-hidden": "true", children: /* @__PURE__ */ e(
                        "svg",
                        {
                          width: "10",
                          height: "10",
                          viewBox: "0 0 10 10",
                          fill: "none",
                          xmlns: "http://www.w3.org/2000/svg",
                          children: /* @__PURE__ */ e(
                            "path",
                            {
                              d: "M2.5 3.75L5 6.25L7.5 3.75",
                              stroke: "currentColor",
                              strokeWidth: "1.5",
                              strokeLinecap: "round",
                              strokeLinejoin: "round"
                            }
                          )
                        }
                      ) })
                    ]
                  }
                ) : /* @__PURE__ */ e(
                  "a",
                  {
                    href: u.href,
                    className: [
                      pe.navLink,
                      u.active ? pe.navLinkActive : ""
                    ].filter(Boolean).join(" "),
                    role: "menuitem",
                    "aria-current": u.active ? "page" : void 0,
                    children: u.label
                  }
                ),
                k && g && /* @__PURE__ */ e("div", { className: pe.megaMenu, role: "menu", children: /* @__PURE__ */ e("ul", { className: pe.megaMenuList, children: u.children.map((y, w) => /* @__PURE__ */ e("li", { role: "none", children: /* @__PURE__ */ d(
                  "a",
                  {
                    href: y.href,
                    className: pe.megaMenuItem,
                    role: "menuitem",
                    onClick: () => i(null),
                    children: [
                      /* @__PURE__ */ e("span", { className: pe.megaMenuLabel, children: y.label }),
                      y.description && /* @__PURE__ */ e("span", { className: pe.megaMenuDescription, children: y.description })
                    ]
                  }
                ) }, w)) }) })
              ]
            },
            m
          );
        }) }) })
      }
    );
  }
);
fu.displayName = "MastheadNavigation";
const bu = "_header_1r74z_3", vu = "_sticky_1r74z_13", xu = "_container_1r74z_18", Lu = "_standard_1r74z_28", wu = "_compact_1r74z_34", Nu = "_logo_1r74z_40", $u = "_desktopNav_1r74z_49", Iu = "_navList_1r74z_55", Wu = "_navLink_1r74z_64", Au = "_navLinkActive_1r74z_88", Bu = "_rightArea_1r74z_95", Cu = "_actions_1r74z_102", Su = "_userMenu_1r74z_110", Mu = "_userMenuTrigger_1r74z_114", Tu = "_userAvatar_1r74z_139", Du = "_userName_1r74z_145", Eu = "_chevron_1r74z_149", Ou = "_userDropdown_1r74z_154", ju = "_userDropdownItem_1r74z_169", Fu = "_hamburger_1r74z_196", Ru = "_hamburgerIcon_1r74z_219", Pu = "_hamburgerOpen_1r74z_238", zu = "_mobileNav_1r74z_252", Hu = "_mobileNavList_1r74z_258", qu = "_mobileNavLink_1r74z_264", Gu = "_mobileNavLinkActive_1r74z_280", X = {
  header: bu,
  sticky: vu,
  container: xu,
  standard: Lu,
  compact: wu,
  logo: Nu,
  desktopNav: $u,
  navList: Iu,
  navLink: Wu,
  navLinkActive: Au,
  rightArea: Bu,
  actions: Cu,
  userMenu: Su,
  userMenuTrigger: Mu,
  userAvatar: Tu,
  userName: Du,
  chevron: Eu,
  userDropdown: Ou,
  userDropdownItem: ju,
  hamburger: Fu,
  hamburgerIcon: Ru,
  hamburgerOpen: Pu,
  mobileNav: zu,
  mobileNavList: Hu,
  mobileNavLink: qu,
  mobileNavLinkActive: Gu
}, Uu = B(
  ({
    logo: n,
    navItems: t,
    userMenu: r,
    actions: o,
    sticky: s = !1,
    variant: l = "standard",
    className: i,
    ...a
  }, c) => {
    const [p, _] = P(!1), [h, u] = P(!1), m = j(() => {
      _((y) => !y);
    }, []), k = j(() => {
      u((y) => !y);
    }, []), g = [
      X.header,
      X[l],
      s ? X.sticky : "",
      i ?? ""
    ].filter(Boolean).join(" ");
    return /* @__PURE__ */ d("header", { ref: c, className: g, role: "banner", ...a, children: [
      /* @__PURE__ */ d("div", { className: X.container, children: [
        n && /* @__PURE__ */ e("div", { className: X.logo, children: n }),
        t && t.length > 0 && /* @__PURE__ */ e("nav", { className: X.desktopNav, "aria-label": "Main navigation", children: /* @__PURE__ */ e("ul", { className: X.navList, role: "list", children: t.map((y, w) => /* @__PURE__ */ e("li", { children: /* @__PURE__ */ e(
          "a",
          {
            href: y.href,
            className: [
              X.navLink,
              y.active ? X.navLinkActive : ""
            ].filter(Boolean).join(" "),
            "aria-current": y.active ? "page" : void 0,
            children: y.label
          }
        ) }, w)) }) }),
        /* @__PURE__ */ d("div", { className: X.rightArea, children: [
          o && /* @__PURE__ */ e("div", { className: X.actions, children: o }),
          r && /* @__PURE__ */ d("div", { className: X.userMenu, children: [
            /* @__PURE__ */ d(
              "button",
              {
                type: "button",
                className: X.userMenuTrigger,
                onClick: k,
                "aria-expanded": h,
                "aria-haspopup": "true",
                "aria-label": `User menu for ${r.name}`,
                children: [
                  r.avatar && /* @__PURE__ */ e("span", { className: X.userAvatar, children: r.avatar }),
                  /* @__PURE__ */ e("span", { className: X.userName, children: r.name }),
                  /* @__PURE__ */ e("span", { className: X.chevron, "aria-hidden": "true", children: /* @__PURE__ */ e(
                    "svg",
                    {
                      width: "12",
                      height: "12",
                      viewBox: "0 0 12 12",
                      fill: "none",
                      xmlns: "http://www.w3.org/2000/svg",
                      children: /* @__PURE__ */ e(
                        "path",
                        {
                          d: "M3 4.5L6 7.5L9 4.5",
                          stroke: "currentColor",
                          strokeWidth: "1.5",
                          strokeLinecap: "round",
                          strokeLinejoin: "round"
                        }
                      )
                    }
                  ) })
                ]
              }
            ),
            h && /* @__PURE__ */ e("ul", { className: X.userDropdown, role: "menu", children: r.items.map((y, w) => /* @__PURE__ */ e("li", { role: "none", children: y.href ? /* @__PURE__ */ e(
              "a",
              {
                href: y.href,
                className: X.userDropdownItem,
                role: "menuitem",
                onClick: () => u(!1),
                children: y.label
              }
            ) : /* @__PURE__ */ e(
              "button",
              {
                type: "button",
                className: X.userDropdownItem,
                role: "menuitem",
                onClick: () => {
                  var N;
                  (N = y.onClick) == null || N.call(y), u(!1);
                },
                children: y.label
              }
            ) }, w)) })
          ] }),
          /* @__PURE__ */ e(
            "button",
            {
              type: "button",
              className: X.hamburger,
              onClick: m,
              "aria-expanded": p,
              "aria-label": p ? "Close menu" : "Open menu",
              children: /* @__PURE__ */ d(
                "span",
                {
                  className: [
                    X.hamburgerIcon,
                    p ? X.hamburgerOpen : ""
                  ].filter(Boolean).join(" "),
                  "aria-hidden": "true",
                  children: [
                    /* @__PURE__ */ e("span", {}),
                    /* @__PURE__ */ e("span", {}),
                    /* @__PURE__ */ e("span", {})
                  ]
                }
              )
            }
          )
        ] })
      ] }),
      p && t && t.length > 0 && /* @__PURE__ */ e("nav", { className: X.mobileNav, "aria-label": "Mobile navigation", children: /* @__PURE__ */ e("ul", { className: X.mobileNavList, role: "list", children: t.map((y, w) => /* @__PURE__ */ e("li", { children: /* @__PURE__ */ e(
        "a",
        {
          href: y.href,
          className: [
            X.mobileNavLink,
            y.active ? X.mobileNavLinkActive : ""
          ].filter(Boolean).join(" "),
          "aria-current": y.active ? "page" : void 0,
          onClick: () => _(!1),
          children: y.label
        }
      ) }, w)) }) })
    ] });
  }
);
Uu.displayName = "Header";
const Vu = "_footer_1nrzs_3", Zu = "_container_1nrzs_11", Ku = "_standard_1nrzs_19", Yu = "_main_1nrzs_19", Xu = "_logoArea_1nrzs_24", Qu = "_columns_1nrzs_30", Ju = "_column_1nrzs_30", em = "_columnTitle_1nrzs_40", tm = "_columnLinks_1nrzs_49", nm = "_link_1nrzs_58", rm = "_externalIcon_1nrzs_80", om = "_bottomBar_1nrzs_88", sm = "_legal_1nrzs_92", im = "_copyright_1nrzs_99", am = "_minimal_1nrzs_108", be = {
  footer: Vu,
  container: Zu,
  standard: Ku,
  main: Yu,
  logoArea: Xu,
  columns: Qu,
  column: Ju,
  columnTitle: em,
  columnLinks: tm,
  link: nm,
  externalIcon: rm,
  bottomBar: om,
  legal: sm,
  copyright: im,
  minimal: am
}, lm = B(
  ({
    logo: n,
    columns: t,
    legal: r,
    copyright: o,
    variant: s = "standard",
    className: l,
    ...i
  }, a) => {
    const c = [
      be.footer,
      be[s],
      l ?? ""
    ].filter(Boolean).join(" ");
    return /* @__PURE__ */ d("footer", { ref: a, className: c, role: "contentinfo", ...i, children: [
      s === "standard" && /* @__PURE__ */ e("div", { className: be.main, children: /* @__PURE__ */ d("div", { className: be.container, children: [
        n && /* @__PURE__ */ e("div", { className: be.logoArea, children: n }),
        t && t.length > 0 && /* @__PURE__ */ e("nav", { className: be.columns, "aria-label": "Footer navigation", children: t.map((p, _) => /* @__PURE__ */ d("div", { className: be.column, children: [
          /* @__PURE__ */ e("h3", { className: be.columnTitle, children: p.title }),
          /* @__PURE__ */ e("ul", { className: be.columnLinks, role: "list", children: p.links.map((h, u) => /* @__PURE__ */ e("li", { children: /* @__PURE__ */ d(
            "a",
            {
              href: h.href,
              className: be.link,
              ...h.external ? {
                target: "_blank",
                rel: "noopener noreferrer",
                "aria-label": `${h.label} (opens in new tab)`
              } : {},
              children: [
                h.label,
                h.external && /* @__PURE__ */ e("span", { className: be.externalIcon, "aria-hidden": "true", children: /* @__PURE__ */ d(
                  "svg",
                  {
                    width: "12",
                    height: "12",
                    viewBox: "0 0 12 12",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [
                      /* @__PURE__ */ e(
                        "path",
                        {
                          d: "M9 6.5V9.5C9 10.0523 8.55228 10.5 8 10.5H2.5C1.94772 10.5 1.5 10.0523 1.5 9.5V4C1.5 3.44772 1.94772 3 2.5 3H5.5",
                          stroke: "currentColor",
                          strokeWidth: "1.25",
                          strokeLinecap: "round",
                          strokeLinejoin: "round"
                        }
                      ),
                      /* @__PURE__ */ e(
                        "path",
                        {
                          d: "M7.5 1.5H10.5V4.5",
                          stroke: "currentColor",
                          strokeWidth: "1.25",
                          strokeLinecap: "round",
                          strokeLinejoin: "round"
                        }
                      ),
                      /* @__PURE__ */ e(
                        "path",
                        {
                          d: "M5 7L10.5 1.5",
                          stroke: "currentColor",
                          strokeWidth: "1.25",
                          strokeLinecap: "round",
                          strokeLinejoin: "round"
                        }
                      )
                    ]
                  }
                ) })
              ]
            }
          ) }, u)) })
        ] }, _)) })
      ] }) }),
      /* @__PURE__ */ e("div", { className: be.bottomBar, children: /* @__PURE__ */ d("div", { className: be.container, children: [
        r && /* @__PURE__ */ e("div", { className: be.legal, children: r }),
        o && /* @__PURE__ */ e("p", { className: be.copyright, children: o })
      ] }) })
    ] });
  }
);
lm.displayName = "PageFooter";
const cm = "_filter_1cr3a_3", dm = "_filterBar_1cr3a_11", hm = "_searchWrapper_1cr3a_20", pm = "_searchIcon_1cr3a_29", um = "_searchInput_1cr3a_38", mm = "_filterItems_1cr3a_71", _m = "_filterItemWrapper_1cr3a_78", km = "_filterTrigger_1cr3a_84", gm = "_filterTriggerActive_1cr3a_116", ym = "_filterTriggerOpen_1cr3a_127", fm = "_filterLabel_1cr3a_131", bm = "_filterValue_1cr3a_136", vm = "_filterChevron_1cr3a_140", xm = "_filterDropdown_1cr3a_152", Lm = "_filterOption_1cr3a_169", wm = "_filterOptionSelected_1cr3a_196", Nm = "_filterOptionLabel_1cr3a_200", $m = "_checkbox_1cr3a_206", Im = "_checkboxChecked_1cr3a_220", Wm = "_showMoreButton_1cr3a_228", Am = "_resetButton_1cr3a_255", Bm = "_resetIcon_1cr3a_284", ee = {
  filter: cm,
  filterBar: dm,
  searchWrapper: hm,
  searchIcon: pm,
  searchInput: um,
  filterItems: mm,
  filterItemWrapper: _m,
  filterTrigger: km,
  filterTriggerActive: gm,
  filterTriggerOpen: ym,
  filterLabel: fm,
  filterValue: bm,
  filterChevron: vm,
  filterDropdown: xm,
  filterOption: Lm,
  filterOptionSelected: wm,
  filterOptionLabel: Nm,
  checkbox: $m,
  checkboxChecked: Im,
  showMoreButton: Wm,
  resetButton: Am,
  resetIcon: Bm
}, Cm = B(
  ({
    filters: n,
    onFilterChange: t,
    onReset: r,
    variant: o = "standalone",
    showReset: s = !0,
    searchPlaceholder: l = "Search...",
    searchValue: i,
    onSearchChange: a,
    maxVisible: c = 4,
    className: p,
    ..._
  }, h) => {
    const [u, m] = P(null), [k, g] = P(!1), y = U(null), w = [
      ee.filter,
      ee[o],
      p ?? ""
    ].filter(Boolean).join(" "), N = n.some((b) => Array.isArray(b.value) ? b.value.length > 0 : b.value !== void 0 && b.value !== ""), v = o === "complex" && !k ? n.slice(0, c) : n, L = o === "complex" && !k ? Math.max(0, n.length - c) : 0, x = j((b) => {
      m((I) => I === b ? null : b);
    }, []), $ = j(
      (b, I) => {
        if (b.multiple) {
          const S = Array.isArray(b.value) ? b.value : b.value ? [b.value] : [], R = S.includes(I) ? S.filter((D) => D !== I) : [...S, I];
          t == null || t(b.key, R);
        } else
          t == null || t(b.key, I), m(null);
      },
      [t]
    );
    H(() => {
      const b = (I) => {
        y.current && !y.current.contains(I.target) && m(null);
      };
      return document.addEventListener("mousedown", b), () => document.removeEventListener("mousedown", b);
    }, []);
    const f = (b) => {
      if (!b.value) return null;
      if (Array.isArray(b.value)) {
        if (b.value.length === 0) return null;
        if (b.value.length === 1) {
          const S = b.options.find((R) => R.value === b.value[0]);
          return (S == null ? void 0 : S.label) ?? null;
        }
        return `${b.value.length} selected`;
      }
      const I = b.options.find((S) => S.value === b.value);
      return (I == null ? void 0 : I.label) ?? null;
    }, W = (b, I) => Array.isArray(b.value) ? b.value.includes(I) : b.value === I;
    return /* @__PURE__ */ e("div", { ref: h, className: w, ..._, children: /* @__PURE__ */ d("div", { className: ee.filterBar, ref: y, children: [
      o === "withSearch" && /* @__PURE__ */ d("div", { className: ee.searchWrapper, children: [
        /* @__PURE__ */ e("span", { className: ee.searchIcon, "aria-hidden": "true", children: /* @__PURE__ */ d(
          "svg",
          {
            width: "16",
            height: "16",
            viewBox: "0 0 16 16",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
              /* @__PURE__ */ e("circle", { cx: "7", cy: "7", r: "5", stroke: "currentColor", strokeWidth: "1.5" }),
              /* @__PURE__ */ e(
                "path",
                {
                  d: "M11 11L14 14",
                  stroke: "currentColor",
                  strokeWidth: "1.5",
                  strokeLinecap: "round"
                }
              )
            ]
          }
        ) }),
        /* @__PURE__ */ e(
          "input",
          {
            type: "search",
            className: ee.searchInput,
            placeholder: l,
            value: i ?? "",
            onChange: (b) => a == null ? void 0 : a(b.target.value),
            "aria-label": "Search filters"
          }
        )
      ] }),
      /* @__PURE__ */ d("div", { className: ee.filterItems, role: "toolbar", "aria-label": "Filters", children: [
        v.map((b) => {
          const I = u === b.key, S = f(b);
          return /* @__PURE__ */ d("div", { className: ee.filterItemWrapper, children: [
            /* @__PURE__ */ d(
              "button",
              {
                type: "button",
                className: [
                  ee.filterTrigger,
                  S ? ee.filterTriggerActive : "",
                  I ? ee.filterTriggerOpen : ""
                ].filter(Boolean).join(" "),
                onClick: () => x(b.key),
                "aria-expanded": I,
                "aria-haspopup": "listbox",
                children: [
                  /* @__PURE__ */ d("span", { className: ee.filterLabel, children: [
                    b.label,
                    S && /* @__PURE__ */ d("span", { className: ee.filterValue, children: [
                      ": ",
                      S
                    ] })
                  ] }),
                  /* @__PURE__ */ e("span", { className: ee.filterChevron, "aria-hidden": "true", children: /* @__PURE__ */ e(
                    "svg",
                    {
                      width: "10",
                      height: "10",
                      viewBox: "0 0 10 10",
                      fill: "none",
                      xmlns: "http://www.w3.org/2000/svg",
                      children: /* @__PURE__ */ e(
                        "path",
                        {
                          d: "M2.5 3.75L5 6.25L7.5 3.75",
                          stroke: "currentColor",
                          strokeWidth: "1.5",
                          strokeLinecap: "round",
                          strokeLinejoin: "round"
                        }
                      )
                    }
                  ) })
                ]
              }
            ),
            I && /* @__PURE__ */ e("div", { className: ee.filterDropdown, role: "listbox", "aria-label": b.label, children: b.options.map((R) => {
              const D = W(b, R.value);
              return /* @__PURE__ */ d(
                "button",
                {
                  type: "button",
                  className: [
                    ee.filterOption,
                    D ? ee.filterOptionSelected : ""
                  ].filter(Boolean).join(" "),
                  role: "option",
                  "aria-selected": D,
                  onClick: () => $(b, R.value),
                  children: [
                    b.multiple && /* @__PURE__ */ e(
                      "span",
                      {
                        className: [
                          ee.checkbox,
                          D ? ee.checkboxChecked : ""
                        ].filter(Boolean).join(" "),
                        "aria-hidden": "true",
                        children: D && /* @__PURE__ */ e(
                          "svg",
                          {
                            width: "10",
                            height: "10",
                            viewBox: "0 0 10 10",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: /* @__PURE__ */ e(
                              "path",
                              {
                                d: "M2 5L4 7L8 3",
                                stroke: "currentColor",
                                strokeWidth: "1.5",
                                strokeLinecap: "round",
                                strokeLinejoin: "round"
                              }
                            )
                          }
                        )
                      }
                    ),
                    /* @__PURE__ */ e("span", { className: ee.filterOptionLabel, children: R.label })
                  ]
                },
                R.value
              );
            }) })
          ] }, b.key);
        }),
        o === "complex" && L > 0 && /* @__PURE__ */ d(
          "button",
          {
            type: "button",
            className: ee.showMoreButton,
            onClick: () => g(!0),
            children: [
              "+",
              L,
              " more"
            ]
          }
        ),
        o === "complex" && k && n.length > c && /* @__PURE__ */ e(
          "button",
          {
            type: "button",
            className: ee.showMoreButton,
            onClick: () => g(!1),
            children: "Show less"
          }
        )
      ] }),
      s && N && /* @__PURE__ */ d(
        "button",
        {
          type: "button",
          className: ee.resetButton,
          onClick: r,
          "aria-label": "Reset all filters",
          children: [
            /* @__PURE__ */ e("span", { className: ee.resetIcon, "aria-hidden": "true", children: /* @__PURE__ */ e(
              "svg",
              {
                width: "14",
                height: "14",
                viewBox: "0 0 14 14",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: /* @__PURE__ */ e(
                  "path",
                  {
                    d: "M4 4L10 10M10 4L4 10",
                    stroke: "currentColor",
                    strokeWidth: "1.5",
                    strokeLinecap: "round"
                  }
                )
              }
            ) }),
            "Reset"
          ]
        }
      )
    ] }) });
  }
);
Cm.displayName = "FilterGroup";
const Sm = "_container_p51h2_5", Mm = "_toast_p51h2_19", Tm = "_slideIn_p51h2_1", Dm = "_toastExiting_p51h2_35", Em = "_slideOut_p51h2_1", Om = "_success_p51h2_63", jm = "_error_p51h2_67", Fm = "_warning_p51h2_71", Rm = "_info_p51h2_76", Pm = "_content_p51h2_82", zm = "_message_p51h2_87", Hm = "_action_p51h2_94", qm = "_close_p51h2_126", Gm = "_progress_p51h2_159", st = {
  container: Sm,
  toast: Mm,
  slideIn: Tm,
  toastExiting: Dm,
  slideOut: Em,
  success: Om,
  error: jm,
  warning: Fm,
  info: Rm,
  content: Pm,
  message: zm,
  action: Hm,
  close: qm,
  progress: Gm
};
function Um({
  toast: n,
  onRemove: t
}) {
  const [r, o] = P(!1), [s, l] = P(100), i = U(), a = n.duration ?? 5e3, c = j(() => {
    o(!0), setTimeout(() => {
      var _;
      t(n.id), (_ = n.onClose) == null || _.call(n);
    }, 200);
  }, [t, n]);
  H(() => {
    if (a <= 0) return;
    const _ = Date.now();
    return i.current = setInterval(() => {
      const h = Date.now() - _, u = Math.max(0, 100 - h / a * 100);
      l(u), u <= 0 && (clearInterval(i.current), c());
    }, 50), () => clearInterval(i.current);
  }, [a, c]);
  const p = n.variant ?? "info";
  return /* @__PURE__ */ d(
    "div",
    {
      className: [
        st.toast,
        st[p],
        r ? st.toastExiting : ""
      ].filter(Boolean).join(" "),
      role: "alert",
      "aria-live": "polite",
      children: [
        /* @__PURE__ */ d("div", { className: st.content, children: [
          /* @__PURE__ */ e("div", { className: st.message, children: n.message }),
          n.action && /* @__PURE__ */ e(
            "button",
            {
              type: "button",
              className: st.action,
              onClick: n.action.onClick,
              children: n.action.label
            }
          )
        ] }),
        /* @__PURE__ */ e(
          "button",
          {
            type: "button",
            className: st.close,
            onClick: c,
            "aria-label": "Dismiss notification",
            children: "✕"
          }
        ),
        a > 0 && /* @__PURE__ */ e(
          "div",
          {
            className: st.progress,
            style: { width: `${s}%`, transitionDuration: "50ms" },
            "aria-hidden": "true"
          }
        )
      ]
    }
  );
}
const yr = ir(null);
function tL() {
  const n = sr(yr);
  if (!n)
    throw new Error("useToast must be used within a <ToastProvider>");
  return n;
}
let Vm = 0;
function nL({ children: n }) {
  const [t, r] = P([]), o = j((i) => {
    const a = `toast-${++Vm}`;
    return r((c) => [...c, { ...i, id: a, createdAt: Date.now() }]), a;
  }, []), s = j((i) => {
    r((a) => a.filter((c) => c.id !== i));
  }, []), l = K(() => ({ show: o, dismiss: s }), [o, s]);
  return /* @__PURE__ */ d(yr.Provider, { value: l, children: [
    n,
    typeof document < "u" && ar(
      /* @__PURE__ */ e("div", { className: st.container, "aria-label": "Notifications", children: t.map((i) => /* @__PURE__ */ e(Um, { toast: i, onRemove: s }, i.id)) }),
      document.body
    )
  ] });
}
const Zm = "_backdrop_1q5ft_5", Km = "_backdropOpen_1q5ft_18", Ym = "_dialog_1q5ft_24", Xm = "_sm_1q5ft_48", Qm = "_md_1q5ft_52", Jm = "_lg_1q5ft_56", e_ = "_fullscreen_1q5ft_60", t_ = "_header_1q5ft_70", n_ = "_title_1q5ft_79", r_ = "_closeButton_1q5ft_87", o_ = "_body_1q5ft_116", s_ = "_footer_1q5ft_124", Qe = {
  backdrop: Zm,
  backdropOpen: Km,
  dialog: Ym,
  sm: Xm,
  md: Qm,
  lg: Jm,
  fullscreen: e_,
  header: t_,
  title: n_,
  closeButton: r_,
  body: o_,
  footer: s_
}, rL = B(function({
  isOpen: t,
  onClose: r,
  title: o,
  children: s,
  footer: l,
  size: i = "md",
  closeOnOverlay: a = !0,
  closeOnEscape: c = !0,
  className: p,
  ..._
}, h) {
  const u = te(), m = U(null), k = U(null), [g, y] = P(!1), [w, N] = P(!1);
  H(() => {
    if (t)
      k.current = document.activeElement, y(!0), requestAnimationFrame(() => {
        requestAnimationFrame(() => N(!0));
      });
    else {
      N(!1);
      const $ = setTimeout(() => {
        var f;
        y(!1), (f = k.current) == null || f.focus();
      }, 200);
      return () => clearTimeout($);
    }
  }, [t]), H(() => {
    if (!g) return;
    const $ = document.body.style.overflow;
    return document.body.style.overflow = "hidden", () => {
      document.body.style.overflow = $;
    };
  }, [g]), H(() => {
    if (!g || !w) return;
    const $ = m.current;
    if (!$) return;
    const f = $.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    f.length > 0 && f[0].focus();
  }, [g, w]), H(() => {
    if (!g || !c) return;
    const $ = (f) => {
      f.key === "Escape" && r();
    };
    return document.addEventListener("keydown", $), () => document.removeEventListener("keydown", $);
  }, [g, c, r]);
  const v = j(
    ($) => {
      if ($.key !== "Tab") return;
      const f = m.current;
      if (!f) return;
      const W = f.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      if (W.length === 0) return;
      const b = W[0], I = W[W.length - 1];
      $.shiftKey ? document.activeElement === b && ($.preventDefault(), I.focus()) : document.activeElement === I && ($.preventDefault(), b.focus());
    },
    []
  ), L = j(
    ($) => {
      a && $.target === $.currentTarget && r();
    },
    [a, r]
  );
  if (!g) return null;
  const x = /* @__PURE__ */ e(
    "div",
    {
      className: [Qe.backdrop, w ? Qe.backdropOpen : ""].filter(Boolean).join(" "),
      onClick: L,
      onKeyDown: v,
      "aria-hidden": !t,
      children: /* @__PURE__ */ d(
        "div",
        {
          ref: ($) => {
            m.current = $, typeof h == "function" ? h($) : h && (h.current = $);
          },
          className: [Qe.dialog, Qe[i], p ?? ""].filter(Boolean).join(" "),
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": o ? u : void 0,
          ..._,
          children: [
            o && /* @__PURE__ */ d("div", { className: Qe.header, children: [
              /* @__PURE__ */ e("h2", { id: u, className: Qe.title, children: o }),
              /* @__PURE__ */ e(
                "button",
                {
                  type: "button",
                  className: Qe.closeButton,
                  onClick: r,
                  "aria-label": "Close dialog",
                  children: "✕"
                }
              )
            ] }),
            /* @__PURE__ */ e("div", { className: Qe.body, children: s }),
            l && /* @__PURE__ */ e("div", { className: Qe.footer, children: l })
          ]
        }
      )
    }
  );
  return typeof document < "u" ? ar(x, document.body) : null;
}), i_ = "_wrapper_gl9xi_3", a_ = "_tooltip_gl9xi_8", l_ = "_visible_gl9xi_26", c_ = "_top_gl9xi_32", d_ = "_bottom_gl9xi_38", h_ = "_left_gl9xi_44", p_ = "_right_gl9xi_50", u_ = "_arrow_gl9xi_58", Ft = {
  wrapper: i_,
  tooltip: a_,
  visible: l_,
  top: c_,
  bottom: d_,
  left: h_,
  right: p_,
  arrow: u_
};
function oL({
  content: n,
  position: t = "top",
  delay: r = 300,
  children: o
}) {
  const [s, l] = P(!1), i = U(), a = te(), c = j(() => {
    i.current = setTimeout(() => l(!0), r);
  }, [r]), p = j(() => {
    clearTimeout(i.current), l(!1);
  }, []);
  return /* @__PURE__ */ d(
    "div",
    {
      className: Ft.wrapper,
      onMouseEnter: c,
      onMouseLeave: p,
      onFocus: c,
      onBlur: p,
      children: [
        Gt.cloneElement(o, {
          "aria-describedby": s ? a : void 0
        }),
        /* @__PURE__ */ d(
          "div",
          {
            id: a,
            role: "tooltip",
            className: [
              Ft.tooltip,
              Ft[t],
              s ? Ft.visible : ""
            ].filter(Boolean).join(" "),
            "aria-hidden": !s,
            children: [
              /* @__PURE__ */ e("span", { className: Ft.arrow }),
              n
            ]
          }
        )
      ]
    }
  );
}
const m_ = "_wrapper_1xern_3", __ = "_trigger_1xern_8", k_ = "_popover_1xern_12", g_ = "_visible_1xern_29", y_ = "_top_1xern_36", f_ = "_bottom_1xern_42", b_ = "_left_1xern_48", v_ = "_right_1xern_54", x_ = "_arrow_1xern_62", Bt = {
  wrapper: m_,
  trigger: __,
  popover: k_,
  visible: g_,
  top: y_,
  bottom: f_,
  left: b_,
  right: v_,
  arrow: x_
};
function sL({
  content: n,
  trigger: t,
  position: r = "bottom",
  isOpen: o,
  onOpenChange: s
}) {
  const [l, i] = P(!1), a = o ?? l, c = te(), p = U(null), _ = U(null), h = j(
    (m) => {
      s ? s(m) : i(m);
    },
    [s]
  ), u = j(() => {
    h(!a);
  }, [a, h]);
  return H(() => {
    if (!a) return;
    const m = (k) => {
      p.current && !p.current.contains(k.target) && h(!1);
    };
    return document.addEventListener("mousedown", m), () => document.removeEventListener("mousedown", m);
  }, [a, h]), H(() => {
    if (!a) return;
    const m = (k) => {
      k.key === "Escape" && h(!1);
    };
    return document.addEventListener("keydown", m), () => document.removeEventListener("keydown", m);
  }, [a, h]), H(() => {
    a && requestAnimationFrame(() => {
      const m = _.current;
      if (!m) return;
      const k = m.querySelector(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      k == null || k.focus();
    });
  }, [a]), /* @__PURE__ */ d("div", { ref: p, className: Bt.wrapper, children: [
    /* @__PURE__ */ e(
      "div",
      {
        className: Bt.trigger,
        onClick: u,
        "aria-expanded": a,
        "aria-controls": a ? c : void 0,
        children: t
      }
    ),
    /* @__PURE__ */ d(
      "div",
      {
        ref: _,
        id: c,
        className: [
          Bt.popover,
          Bt[r],
          a ? Bt.visible : ""
        ].filter(Boolean).join(" "),
        role: "dialog",
        "aria-hidden": !a,
        children: [
          /* @__PURE__ */ e("span", { className: Bt.arrow }),
          n
        ]
      }
    )
  ] });
}
const L_ = "_wrapper_2gct0_3", w_ = "_wrapperFullWidth_2gct0_12", N_ = "_track_2gct0_19", $_ = "_smTrack_2gct0_26", I_ = "_mdTrack_2gct0_30", W_ = "_lgTrack_2gct0_34", A_ = "_fill_2gct0_38", B_ = "_circle_2gct0_46", C_ = "_circleBg_2gct0_50", S_ = "_circleFill_2gct0_55", M_ = "_circleLabel_2gct0_60", T_ = "_colourRed_2gct0_70", D_ = "_colourGreen_2gct0_76", E_ = "_colourAmber_2gct0_82", O_ = "_colourGray_2gct0_88", j_ = "_label_2gct0_96", F_ = "_indeterminate_2gct0_104", de = {
  wrapper: L_,
  wrapperFullWidth: w_,
  track: N_,
  smTrack: $_,
  mdTrack: I_,
  lgTrack: W_,
  fill: A_,
  circle: B_,
  circleBg: C_,
  circleFill: S_,
  circleLabel: M_,
  colourRed: T_,
  colourGreen: D_,
  colourAmber: E_,
  colourGray: O_,
  label: j_,
  indeterminate: F_
}, R_ = { sm: 40, md: 64, lg: 96 }, P_ = { sm: 3, md: 4, lg: 6 }, Zn = {
  red: de.colourRed,
  green: de.colourGreen,
  amber: de.colourAmber,
  gray: de.colourGray
}, iL = B(
  function({
    value: t,
    variant: r = "bar",
    size: o = "md",
    colour: s = "red",
    showLabel: l = !1,
    label: i,
    className: a,
    ...c
  }, p) {
    const _ = t == null, h = _ ? 0 : Math.min(100, Math.max(0, t)), u = i ?? `${Math.round(h)}%`, m = Zn[s] ?? Zn.red;
    if (r === "circle") {
      const g = R_[o], y = P_[o], w = (g - y) / 2, N = 2 * Math.PI * w, v = _ ? N * 0.75 : N - h / 100 * N;
      return /* @__PURE__ */ e(
        "div",
        {
          ref: p,
          className: [
            de.wrapper,
            m,
            _ ? de.indeterminate : "",
            a ?? ""
          ].filter(Boolean).join(" "),
          role: "progressbar",
          "aria-valuenow": _ ? void 0 : h,
          "aria-valuemin": 0,
          "aria-valuemax": 100,
          "aria-label": c["aria-label"] ?? "Progress",
          ...c,
          children: /* @__PURE__ */ d(
            "svg",
            {
              className: de.circle,
              width: g,
              height: g,
              viewBox: `0 0 ${g} ${g}`,
              children: [
                /* @__PURE__ */ e(
                  "circle",
                  {
                    className: de.circleBg,
                    cx: g / 2,
                    cy: g / 2,
                    r: w,
                    strokeWidth: y
                  }
                ),
                /* @__PURE__ */ e(
                  "circle",
                  {
                    className: de.circleFill,
                    cx: g / 2,
                    cy: g / 2,
                    r: w,
                    strokeWidth: y,
                    strokeDasharray: N,
                    strokeDashoffset: v,
                    strokeLinecap: "round"
                  }
                ),
                l && !_ && /* @__PURE__ */ e(
                  "text",
                  {
                    className: de.circleLabel,
                    x: "50%",
                    y: "50%",
                    transform: `rotate(90, ${g / 2}, ${g / 2})`,
                    fontSize: o === "sm" ? 10 : o === "md" ? 14 : 18,
                    children: u
                  }
                )
              ]
            }
          )
        }
      );
    }
    const k = o === "sm" ? de.smTrack : o === "lg" ? de.lgTrack : de.mdTrack;
    return /* @__PURE__ */ d(
      "div",
      {
        ref: p,
        className: [
          de.wrapper,
          de.wrapperFullWidth,
          m,
          _ ? de.indeterminate : "",
          a ?? ""
        ].filter(Boolean).join(" "),
        role: "progressbar",
        "aria-valuenow": _ ? void 0 : h,
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        "aria-label": c["aria-label"] ?? "Progress",
        ...c,
        children: [
          /* @__PURE__ */ e("div", { className: [de.track, k].join(" "), children: /* @__PURE__ */ e(
            "div",
            {
              className: de.fill,
              style: _ ? void 0 : { width: `${h}%` }
            }
          ) }),
          l && !_ && /* @__PURE__ */ e("span", { className: de.label, children: u })
        ]
      }
    );
  }
), z_ = "_skeleton_bfyjc_3", H_ = "_text_bfyjc_12", q_ = "_textLine_bfyjc_18", G_ = "_textLineLast_bfyjc_26", U_ = "_circle_bfyjc_30", V_ = "_rect_bfyjc_34", Z_ = "_animate_bfyjc_40", bt = {
  skeleton: z_,
  text: H_,
  textLine: q_,
  textLineLast: G_,
  circle: U_,
  rect: V_,
  animate: Z_
}, aL = B(
  function({
    variant: t = "rect",
    width: r,
    height: o,
    lines: s = 3,
    animate: l = !0,
    className: i,
    style: a,
    ...c
  }, p) {
    const _ = l ? bt.animate : "";
    if (t === "text") {
      const m = Math.max(1, s);
      return /* @__PURE__ */ e(
        "div",
        {
          ref: p,
          className: [bt.text, _, i ?? ""].filter(Boolean).join(" "),
          style: { width: r, ...a },
          role: "status",
          "aria-label": "Loading",
          "aria-busy": "true",
          ...c,
          children: Array.from({ length: m }, (k, g) => /* @__PURE__ */ e(
            "div",
            {
              className: [
                bt.textLine,
                g === m - 1 ? bt.textLineLast : ""
              ].filter(Boolean).join(" "),
              style: { height: o ?? void 0 }
            },
            g
          ))
        }
      );
    }
    const h = typeof r == "number" ? `${r}px` : r, u = typeof o == "number" ? `${o}px` : o;
    return /* @__PURE__ */ e(
      "div",
      {
        ref: p,
        className: [
          bt.skeleton,
          t === "circle" ? bt.circle : bt.rect,
          _,
          i ?? ""
        ].filter(Boolean).join(" "),
        style: {
          width: h ?? (t === "circle" ? "48px" : "100%"),
          height: u ?? (t === "circle" ? h ?? "48px" : "48px"),
          ...a
        },
        role: "status",
        "aria-label": "Loading",
        "aria-busy": "true",
        ...c
      }
    );
  }
), K_ = "_pageHeader_zz6j5_4", Y_ = "_container_zz6j5_11", X_ = "_impulse_zz6j5_20", Q_ = "_titleBlock_zz6j5_20", J_ = "_breadcrumbs_zz6j5_27", e0 = "_breadcrumbItem_zz6j5_37", t0 = "_breadcrumbLink_zz6j5_42", n0 = "_breadcrumbCurrent_zz6j5_58", r0 = "_breadcrumbSeparator_zz6j5_63", o0 = "_title_zz6j5_20", s0 = "_subtitle_zz6j5_85", i0 = "_actions_zz6j5_95", Se = {
  pageHeader: K_,
  container: Y_,
  impulse: X_,
  titleBlock: Q_,
  breadcrumbs: J_,
  breadcrumbItem: e0,
  breadcrumbLink: t0,
  breadcrumbCurrent: n0,
  breadcrumbSeparator: r0,
  title: o0,
  subtitle: s0,
  actions: i0
}, an = B(
  ({
    title: n,
    subtitle: t,
    breadcrumbs: r,
    actions: o,
    variant: s = "default",
    className: l,
    ...i
  }, a) => {
    const c = [
      Se.pageHeader,
      s === "impulse" ? Se.impulse : "",
      l ?? ""
    ].filter(Boolean).join(" ");
    return /* @__PURE__ */ d("header", { ref: a, className: c, ...i, children: [
      r && r.length > 0 && /* @__PURE__ */ e("nav", { className: Se.breadcrumbs, "aria-label": "Breadcrumb", children: r.map((p, _) => {
        const h = _ === r.length - 1;
        return /* @__PURE__ */ d("span", { className: Se.breadcrumbItem, children: [
          _ > 0 && /* @__PURE__ */ e("span", { className: Se.breadcrumbSeparator, "aria-hidden": "true", children: "/" }),
          h || !p.href ? /* @__PURE__ */ e("span", { className: Se.breadcrumbCurrent, "aria-current": h ? "page" : void 0, children: p.label }) : /* @__PURE__ */ e("a", { href: p.href, className: Se.breadcrumbLink, children: p.label })
        ] }, _);
      }) }),
      /* @__PURE__ */ d("div", { className: Se.container, children: [
        /* @__PURE__ */ d("div", { className: Se.titleBlock, children: [
          /* @__PURE__ */ e("h1", { className: Se.title, children: n }),
          t && /* @__PURE__ */ e("p", { className: Se.subtitle, children: t })
        ] }),
        o && /* @__PURE__ */ e("div", { className: Se.actions, children: o })
      ] })
    ] });
  }
);
an.displayName = "PageHeader";
const a0 = "_section_yeuzk_4", l0 = "_bgWhite_yeuzk_13", c0 = "_bgPastel1_yeuzk_17", d0 = "_bgPastel2_yeuzk_21", h0 = "_paddingSm_yeuzk_27", p0 = "_paddingMd_yeuzk_31", u0 = "_paddingLg_yeuzk_35", m0 = "_header_yeuzk_41", _0 = "_title_yeuzk_45", k0 = "_subtitle_yeuzk_53", Ze = {
  section: a0,
  bgWhite: l0,
  bgPastel1: c0,
  bgPastel2: d0,
  paddingSm: h0,
  paddingMd: p0,
  paddingLg: u0,
  header: m0,
  title: _0,
  subtitle: k0
}, g0 = {
  sm: Ze.paddingSm,
  md: Ze.paddingMd,
  lg: Ze.paddingLg
}, y0 = {
  white: Ze.bgWhite,
  pastel1: Ze.bgPastel1,
  pastel2: Ze.bgPastel2
}, Cn = B(
  ({
    title: n,
    subtitle: t,
    children: r,
    padding: o = "md",
    background: s = "white",
    className: l,
    ...i
  }, a) => {
    const c = [
      Ze.section,
      g0[o],
      y0[s],
      l ?? ""
    ].filter(Boolean).join(" ");
    return /* @__PURE__ */ d("section", { ref: a, className: c, ...i, children: [
      (n || t) && /* @__PURE__ */ d("div", { className: Ze.header, children: [
        n && /* @__PURE__ */ e("h2", { className: Ze.title, children: n }),
        t && /* @__PURE__ */ e("p", { className: Ze.subtitle, children: t })
      ] }),
      r
    ] });
  }
);
Cn.displayName = "SectionWrapper";
const f0 = "_actionBar_102ub_4", b0 = "_sticky_102ub_19", v0 = "_alignLeft_102ub_27", x0 = "_alignRight_102ub_31", L0 = "_alignCenter_102ub_35", w0 = "_alignBetween_102ub_39", N0 = "_startGroup_102ub_45", $0 = "_endGroup_102ub_51", _t = {
  actionBar: f0,
  sticky: b0,
  alignLeft: v0,
  alignRight: x0,
  alignCenter: L0,
  alignBetween: w0,
  startGroup: N0,
  endGroup: $0
}, I0 = {
  left: _t.alignLeft,
  right: _t.alignRight,
  between: _t.alignBetween,
  center: _t.alignCenter
}, ln = B(
  ({
    primaryAction: n,
    secondaryAction: t,
    tertiaryActions: r,
    align: o = "between",
    sticky: s = !1,
    className: l,
    ...i
  }, a) => {
    const c = [
      _t.actionBar,
      I0[o],
      s ? _t.sticky : "",
      l ?? ""
    ].filter(Boolean).join(" "), p = o === "between" && (t || r && r.length > 0);
    return /* @__PURE__ */ e("div", { ref: a, className: c, role: "toolbar", "aria-label": "Page actions", ...i, children: p ? /* @__PURE__ */ d(O, { children: [
      /* @__PURE__ */ d("div", { className: _t.startGroup, children: [
        t && /* @__PURE__ */ e(
          "button",
          {
            type: "button",
            onClick: t.onClick,
            "data-variant": t.variant ?? "outline",
            children: t.label
          }
        ),
        r == null ? void 0 : r.map((_, h) => /* @__PURE__ */ e(
          "button",
          {
            type: "button",
            onClick: _.onClick,
            "data-variant": _.variant ?? "ghost",
            children: _.label
          },
          h
        ))
      ] }),
      /* @__PURE__ */ e("div", { className: _t.endGroup, children: /* @__PURE__ */ e(
        "button",
        {
          type: "button",
          onClick: n.onClick,
          "data-variant": n.variant ?? "primary",
          children: n.label
        }
      ) })
    ] }) : /* @__PURE__ */ d(O, { children: [
      r == null ? void 0 : r.map((_, h) => /* @__PURE__ */ e(
        "button",
        {
          type: "button",
          onClick: _.onClick,
          "data-variant": _.variant ?? "ghost",
          children: _.label
        },
        h
      )),
      t && /* @__PURE__ */ e(
        "button",
        {
          type: "button",
          onClick: t.onClick,
          "data-variant": t.variant ?? "outline",
          children: t.label
        }
      ),
      /* @__PURE__ */ e(
        "button",
        {
          type: "button",
          onClick: n.onClick,
          "data-variant": n.variant ?? "primary",
          children: n.label
        }
      )
    ] }) });
  }
);
ln.displayName = "ActionBar";
const fr = B(
  ({
    size: n = 16,
    strokeWidth: t = 2,
    colour: r = "currentColor",
    className: o,
    style: s,
    ...l
  }, i) => /* @__PURE__ */ d(
    "svg",
    {
      ref: i,
      xmlns: "http://www.w3.org/2000/svg",
      width: n,
      height: n,
      viewBox: "0 0 16 16",
      fill: "none",
      className: o,
      style: {
        display: "inline-block",
        verticalAlign: "middle",
        flexShrink: 0,
        ...s
      },
      "aria-hidden": "true",
      role: "presentation",
      ...l,
      children: [
        /* @__PURE__ */ e(
          "line",
          {
            x1: "2",
            y1: "8",
            x2: "12",
            y2: "8",
            stroke: r,
            strokeWidth: t,
            strokeLinecap: "square"
          }
        ),
        /* @__PURE__ */ e(
          "line",
          {
            x1: "8",
            y1: "4",
            x2: "12",
            y2: "8",
            stroke: r,
            strokeWidth: t,
            strokeLinecap: "square",
            strokeLinejoin: "miter"
          }
        ),
        /* @__PURE__ */ e(
          "line",
          {
            x1: "8",
            y1: "12",
            x2: "12",
            y2: "8",
            stroke: r,
            strokeWidth: t,
            strokeLinecap: "square",
            strokeLinejoin: "miter"
          }
        )
      ]
    }
  )
);
fr.displayName = "CTAArrow";
const W0 = "_cta_1n84w_6", A0 = "_arrow_1n84w_27", B0 = "_animated_1n84w_32", C0 = "_sm_1n84w_39", S0 = "_md_1n84w_44", M0 = "_lg_1n84w_49", T0 = "_button_1n84w_56", D0 = "_text_1n84w_89", E0 = "_url_1n84w_116", O0 = "_label_1n84w_144", Ct = {
  cta: W0,
  arrow: A0,
  animated: B0,
  sm: C0,
  md: S0,
  lg: M0,
  button: T0,
  text: D0,
  url: E0,
  label: O0
}, j0 = {
  sm: 1.5,
  md: 2,
  lg: 2.5
}, F0 = {
  sm: 14,
  md: 16,
  lg: 20
}, R0 = B(
  ({
    variant: n = "button",
    label: t,
    href: r,
    onClick: o,
    icon: s,
    size: l = "md",
    animated: i = !1,
    className: a,
    ...c
  }, p) => {
    const _ = [
      Ct.cta,
      Ct[n],
      Ct[l],
      i ? Ct.animated : "",
      a
    ].filter(Boolean).join(" "), h = s === null ? null : s ?? /* @__PURE__ */ e(
      fr,
      {
        className: Ct.arrow,
        size: F0[l],
        strokeWidth: j0[l]
      }
    ), u = /* @__PURE__ */ d(O, { children: [
      /* @__PURE__ */ e("span", { className: Ct.label, children: t }),
      h
    ] });
    return r ? /* @__PURE__ */ e(
      "a",
      {
        ref: p,
        href: r,
        className: _,
        onClick: o,
        ...c,
        children: u
      }
    ) : /* @__PURE__ */ e(
      "button",
      {
        ref: p,
        type: "button",
        className: _,
        onClick: o,
        ...c,
        children: u
      }
    );
  }
);
R0.displayName = "CTA";
const P0 = "_logoTab_1oft3_6", z0 = "_topLeft_1oft3_19", H0 = "_bottomRight_1oft3_24", q0 = "_animatedEntry_1oft3_31", G0 = "_watermark_1oft3_68", U0 = "_logo_1oft3_6", V0 = "_partnerDivider_1oft3_96", Z0 = "_partnerLogo_1oft3_103", pt = {
  logoTab: P0,
  topLeft: z0,
  bottomRight: H0,
  animatedEntry: q0,
  watermark: G0,
  logo: U0,
  partnerDivider: V0,
  partnerLogo: Z0
};
function K0({ className: n }) {
  return /* @__PURE__ */ d(
    "svg",
    {
      className: n,
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 80 24",
      height: "24",
      fill: "none",
      "aria-label": "UBS",
      role: "img",
      children: [
        /* @__PURE__ */ e("rect", { x: "0", y: "0", width: "80", height: "24", rx: "0", fill: "none" }),
        /* @__PURE__ */ e(
          "text",
          {
            x: "0",
            y: "18",
            fontFamily: "'Frutiger', Arial, sans-serif",
            fontWeight: "700",
            fontSize: "20",
            fill: "#E60000",
            children: "UBS"
          }
        )
      ]
    }
  );
}
const Y0 = B(
  ({
    position: n,
    animated: t = !1,
    watermark: r = !1,
    variant: o = "standard",
    partnerLogo: s,
    customLogo: l,
    className: i,
    ...a
  }, c) => {
    const _ = (n ?? (t ? "top-left" : "bottom-right")) === "top-left" ? pt.topLeft : pt.bottomRight, h = [
      pt.logoTab,
      _,
      t ? pt.animatedEntry : "",
      r ? pt.watermark : "",
      i
    ].filter(Boolean).join(" "), u = l ?? /* @__PURE__ */ e(K0, { className: pt.logo });
    return /* @__PURE__ */ d("div", { ref: c, className: h, ...a, children: [
      u,
      o === "partnership" && s && /* @__PURE__ */ d(O, { children: [
        /* @__PURE__ */ e("div", { className: pt.partnerDivider, "aria-hidden": "true" }),
        /* @__PURE__ */ e("div", { className: pt.partnerLogo, children: s })
      ] })
    ] });
  }
);
Y0.displayName = "LogoTab";
const X0 = "_root_185ug_3", Q0 = "_step_185ug_12", J0 = "_track_185ug_22", e2 = "_indicator_185ug_30", t2 = "_connector_185ug_42", n2 = "_completed_185ug_51", r2 = "_active_185ug_56", o2 = "_upcoming_185ug_62", s2 = "_checkIcon_185ug_77", i2 = "_dot_185ug_82", a2 = "_iconWrapper_185ug_89", l2 = "_content_185ug_99", c2 = "_timestamp_185ug_108", d2 = "_title_185ug_115", h2 = "_description_185ug_122", p2 = "_compact_185ug_141", u2 = "_srOnly_185ug_178", ve = {
  root: X0,
  step: Q0,
  track: J0,
  indicator: e2,
  connector: t2,
  completed: n2,
  active: r2,
  upcoming: o2,
  checkIcon: s2,
  dot: i2,
  iconWrapper: a2,
  content: l2,
  timestamp: c2,
  title: d2,
  description: h2,
  compact: p2,
  srOnly: u2
}, m2 = B(
  ({ steps: n, variant: t = "timeline", className: r, ...o }, s) => {
    const l = [
      ve.root,
      ve[t],
      r
    ].filter(Boolean).join(" ");
    return /* @__PURE__ */ e(
      "div",
      {
        ref: s,
        className: l,
        role: "list",
        "aria-label": "Agenda steps",
        ...o,
        children: n.map((i, a) => {
          const c = [
            ve.step,
            ve[i.status]
          ].filter(Boolean).join(" ");
          return /* @__PURE__ */ d(
            "div",
            {
              className: c,
              role: "listitem",
              "aria-current": i.status === "active" ? "step" : void 0,
              children: [
                /* @__PURE__ */ d("div", { className: ve.track, children: [
                  /* @__PURE__ */ e(
                    "div",
                    {
                      className: ve.indicator,
                      "aria-hidden": "true",
                      children: i.icon ? /* @__PURE__ */ e("span", { className: ve.iconWrapper, children: i.icon }) : i.status === "completed" ? /* @__PURE__ */ e(
                        "svg",
                        {
                          className: ve.checkIcon,
                          viewBox: "0 0 16 16",
                          fill: "none",
                          "aria-hidden": "true",
                          children: /* @__PURE__ */ e(
                            "path",
                            {
                              d: "M3.5 8.5L6.5 11.5L12.5 4.5",
                              stroke: "currentColor",
                              strokeWidth: "2",
                              strokeLinecap: "round",
                              strokeLinejoin: "round"
                            }
                          )
                        }
                      ) : /* @__PURE__ */ e("span", { className: ve.dot })
                    }
                  ),
                  a < n.length - 1 && /* @__PURE__ */ e("div", { className: ve.connector, "aria-hidden": "true" })
                ] }),
                /* @__PURE__ */ d("div", { className: ve.content, children: [
                  i.timestamp && /* @__PURE__ */ e("span", { className: ve.timestamp, children: i.timestamp }),
                  /* @__PURE__ */ e("span", { className: ve.title, children: i.title }),
                  i.description && /* @__PURE__ */ e("span", { className: ve.description, children: i.description }),
                  /* @__PURE__ */ e("span", { className: ve.srOnly, children: i.status === "completed" ? "Completed" : i.status === "active" ? "In progress" : "Upcoming" })
                ] })
              ]
            },
            a
          );
        })
      }
    );
  }
);
m2.displayName = "AgendaSteps";
const _2 = "_root_1rbix_3", k2 = "_small_1rbix_14", g2 = "_medium_1rbix_19", y2 = "_large_1rbix_24", f2 = "_neutral_1rbix_32", b2 = "_up_1rbix_36", v2 = "_down_1rbix_40", x2 = "_sign_1rbix_46", L2 = "_value_1rbix_50", w2 = "_trendIcon_1rbix_54", vt = {
  root: _2,
  small: k2,
  medium: g2,
  large: y2,
  neutral: f2,
  up: b2,
  down: v2,
  sign: x2,
  value: L2,
  trendIcon: w2
}, N2 = B(
  ({
    value: n,
    currency: t,
    locale: r = "en-GB",
    showSign: o = !1,
    showCurrency: s = !1,
    size: l = "medium",
    trend: i = "neutral",
    className: a,
    ...c
  }, p) => {
    const _ = K(() => {
      const g = {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      };
      s && t && (g.style = "currency", g.currency = t);
      const y = Math.abs(n);
      return new Intl.NumberFormat(r, g).format(y);
    }, [n, t, r, s]), h = K(() => o ? n > 0 ? "+" : n < 0 ? "−" : "" : "", [n, o]), u = [
      vt.root,
      vt[l],
      vt[i],
      a
    ].filter(Boolean).join(" "), m = i === "up" ? /* @__PURE__ */ e(
      "svg",
      {
        className: vt.trendIcon,
        viewBox: "0 0 12 12",
        fill: "none",
        "aria-hidden": "true",
        children: /* @__PURE__ */ e(
          "path",
          {
            d: "M6 2L10 7H2L6 2Z",
            fill: "currentColor"
          }
        )
      }
    ) : i === "down" ? /* @__PURE__ */ e(
      "svg",
      {
        className: vt.trendIcon,
        viewBox: "0 0 12 12",
        fill: "none",
        "aria-hidden": "true",
        children: /* @__PURE__ */ e(
          "path",
          {
            d: "M6 10L2 5H10L6 10Z",
            fill: "currentColor"
          }
        )
      }
    ) : null, k = [
      i !== "neutral" ? `${i === "up" ? "Positive" : "Negative"} trend` : "",
      h,
      _
    ].filter(Boolean).join(" ");
    return /* @__PURE__ */ d(
      "span",
      {
        ref: p,
        className: u,
        "aria-label": k,
        ...c,
        children: [
          m,
          h && /* @__PURE__ */ e("span", { className: vt.sign, children: h }),
          /* @__PURE__ */ e("span", { className: vt.value, children: _ })
        ]
      }
    );
  }
);
N2.displayName = "Amount";
const $2 = "_root_ydql5_3", I2 = "_link_ydql5_16", W2 = "_imageWrapper_ydql5_32", A2 = "_image_ydql5_32", B2 = "_body_ydql5_47", C2 = "_category_ydql5_55", S2 = "_title_ydql5_65", M2 = "_excerpt_ydql5_73", T2 = "_meta_ydql5_85", D2 = "_author_ydql5_95", E2 = "_separator_ydql5_99", O2 = "_date_ydql5_103", j2 = "_card_ydql5_109", F2 = "_horizontal_ydql5_124", R2 = "_featured_ydql5_144", $e = {
  root: $2,
  link: I2,
  imageWrapper: W2,
  image: A2,
  body: B2,
  category: C2,
  title: S2,
  excerpt: M2,
  meta: T2,
  author: D2,
  separator: E2,
  date: O2,
  card: j2,
  horizontal: F2,
  featured: R2
}, P2 = B(
  ({
    title: n,
    excerpt: t,
    image: r,
    author: o,
    date: s,
    category: l,
    href: i,
    variant: a = "card",
    className: c,
    ...p
  }, _) => {
    const h = [
      $e.root,
      $e[a],
      c
    ].filter(Boolean).join(" "), u = o || s || l, m = /* @__PURE__ */ d(O, { children: [
      r && /* @__PURE__ */ e("div", { className: $e.imageWrapper, children: /* @__PURE__ */ e(
        "img",
        {
          className: $e.image,
          src: r,
          alt: "",
          loading: "lazy"
        }
      ) }),
      /* @__PURE__ */ d("div", { className: $e.body, children: [
        l && /* @__PURE__ */ e("span", { className: $e.category, children: l }),
        /* @__PURE__ */ e("h3", { className: $e.title, children: n }),
        t && /* @__PURE__ */ e("p", { className: $e.excerpt, children: t }),
        u && /* @__PURE__ */ d("div", { className: $e.meta, children: [
          o && /* @__PURE__ */ e("span", { className: $e.author, children: o }),
          o && s && /* @__PURE__ */ e("span", { className: $e.separator, "aria-hidden": "true", children: "·" }),
          s && /* @__PURE__ */ e("time", { className: $e.date, children: s })
        ] })
      ] })
    ] });
    return i ? /* @__PURE__ */ e("article", { ref: _, className: h, ...p, children: /* @__PURE__ */ e("a", { className: $e.link, href: i, children: m }) }) : /* @__PURE__ */ e("article", { ref: _, className: h, ...p, children: m });
  }
);
P2.displayName = "Article";
const z2 = "_root_vmqe8_3", H2 = "_info_vmqe8_16", q2 = "_iconWrapper_vmqe8_22", G2 = "_promotional_vmqe8_28", U2 = "_warning_vmqe8_40", V2 = "_icon_vmqe8_22", Z2 = "_content_vmqe8_69", K2 = "_title_vmqe8_77", Y2 = "_description_vmqe8_85", X2 = "_action_vmqe8_93", Q2 = "_withImage_vmqe8_122", J2 = "_imageWrapper_vmqe8_126", ek = "_image_vmqe8_126", tk = "_dismiss_vmqe8_143", nk = "_dismissIcon_vmqe8_174", ke = {
  root: z2,
  info: H2,
  iconWrapper: q2,
  promotional: G2,
  warning: U2,
  icon: V2,
  content: Z2,
  title: K2,
  description: Y2,
  action: X2,
  withImage: Q2,
  imageWrapper: J2,
  image: ek,
  dismiss: tk,
  dismissIcon: nk
}, rk = B(
  ({
    title: n,
    description: t,
    variant: r = "info",
    action: o,
    dismissible: s = !1,
    onDismiss: l,
    image: i,
    className: a,
    ...c
  }, p) => {
    const [_, h] = P(!1);
    if (_) return null;
    const u = () => {
      h(!0), l == null || l();
    }, m = [
      ke.root,
      ke[r],
      i ? ke.withImage : "",
      a
    ].filter(Boolean).join(" ");
    return /* @__PURE__ */ d(
      "div",
      {
        ref: p,
        className: m,
        role: r === "warning" ? "alert" : "region",
        "aria-label": n,
        ...c,
        children: [
          /* @__PURE__ */ d("div", { className: ke.iconWrapper, "aria-hidden": "true", children: [
            r === "info" && /* @__PURE__ */ d("svg", { viewBox: "0 0 24 24", fill: "none", className: ke.icon, children: [
              /* @__PURE__ */ e("circle", { cx: "12", cy: "12", r: "10", stroke: "currentColor", strokeWidth: "2" }),
              /* @__PURE__ */ e("path", { d: "M12 16V12M12 8H12.01", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round" })
            ] }),
            r === "promotional" && /* @__PURE__ */ e("svg", { viewBox: "0 0 24 24", fill: "none", className: ke.icon, children: /* @__PURE__ */ e("path", { d: "M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }) }),
            r === "warning" && /* @__PURE__ */ d("svg", { viewBox: "0 0 24 24", fill: "none", className: ke.icon, children: [
              /* @__PURE__ */ e("path", { d: "M10.29 3.86L1.82 18A2 2 0 003.54 21H20.46A2 2 0 0022.18 18L13.71 3.86A2 2 0 0010.29 3.86Z", stroke: "currentColor", strokeWidth: "2" }),
              /* @__PURE__ */ e("path", { d: "M12 9V13M12 17H12.01", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round" })
            ] })
          ] }),
          /* @__PURE__ */ d("div", { className: ke.content, children: [
            /* @__PURE__ */ e("h3", { className: ke.title, children: n }),
            t && /* @__PURE__ */ e("p", { className: ke.description, children: t }),
            o && (o.href ? /* @__PURE__ */ e(
              "a",
              {
                className: ke.action,
                href: o.href,
                onClick: o.onClick,
                children: o.label
              }
            ) : /* @__PURE__ */ e(
              "button",
              {
                className: ke.action,
                type: "button",
                onClick: o.onClick,
                children: o.label
              }
            ))
          ] }),
          i && /* @__PURE__ */ e("div", { className: ke.imageWrapper, children: /* @__PURE__ */ e("img", { className: ke.image, src: i, alt: "", loading: "lazy" }) }),
          s && /* @__PURE__ */ e(
            "button",
            {
              className: ke.dismiss,
              type: "button",
              onClick: u,
              "aria-label": "Dismiss banner",
              children: /* @__PURE__ */ e("svg", { viewBox: "0 0 16 16", fill: "none", className: ke.dismissIcon, children: /* @__PURE__ */ e(
                "path",
                {
                  d: "M4 4L12 12M12 4L4 12",
                  stroke: "currentColor",
                  strokeWidth: "2",
                  strokeLinecap: "round"
                }
              ) })
            }
          )
        ]
      }
    );
  }
);
rk.displayName = "BannerBox";
const ok = "_root_9ix0c_3", sk = "_align-left_9ix0c_12", ik = "_align-center_9ix0c_17", ak = "_align-right_9ix0c_22", lk = "_highlight_9ix0c_33", ck = "_bordered_9ix0c_39", dk = "_media_9ix0c_47", hk = "_content_9ix0c_62", pk = "_title_9ix0c_76", uk = "_body_9ix0c_84", mk = "_action_9ix0c_101", Je = {
  root: ok,
  "align-left": "_align-left_9ix0c_12",
  alignLeft: sk,
  "align-center": "_align-center_9ix0c_17",
  alignCenter: ik,
  "align-right": "_align-right_9ix0c_22",
  alignRight: ak,
  default: "_default_9ix0c_29",
  highlight: lk,
  bordered: ck,
  media: dk,
  content: hk,
  title: pk,
  body: uk,
  action: mk
}, _k = B(
  ({
    title: n,
    children: t,
    media: r,
    action: o,
    variant: s = "default",
    align: l = "left",
    className: i,
    ...a
  }, c) => {
    const p = [
      Je.root,
      Je[s],
      Je[`align-${l}`],
      i
    ].filter(Boolean).join(" ");
    return /* @__PURE__ */ d("div", { ref: c, className: p, ...a, children: [
      r && /* @__PURE__ */ e("div", { className: Je.media, children: r }),
      /* @__PURE__ */ d("div", { className: Je.content, children: [
        n && /* @__PURE__ */ e("h2", { className: Je.title, children: n }),
        t && /* @__PURE__ */ e("div", { className: Je.body, children: t }),
        o && (o.href ? /* @__PURE__ */ e(
          "a",
          {
            className: Je.action,
            href: o.href,
            onClick: o.onClick,
            children: o.label
          }
        ) : /* @__PURE__ */ e(
          "button",
          {
            className: Je.action,
            type: "button",
            onClick: o.onClick,
            children: o.label
          }
        ))
      ] })
    ] });
  }
);
_k.displayName = "ContentBlock";
const kk = "_root_hb8j3_3", gk = "_flag_hb8j3_13", yk = "_small_hb8j3_22", fk = "_label_hb8j3_26", bk = "_medium_hb8j3_34", vk = "_large_hb8j3_42", en = {
  root: kk,
  flag: gk,
  small: yk,
  label: fk,
  medium: bk,
  large: vk
}, xk = {
  CH: "Switzerland",
  GB: "United Kingdom",
  US: "United States",
  DE: "Germany",
  FR: "France",
  IT: "Italy",
  JP: "Japan",
  CN: "China",
  HK: "Hong Kong",
  SG: "Singapore",
  AU: "Australia",
  BR: "Brazil",
  CA: "Canada",
  IN: "India",
  LU: "Luxembourg",
  NL: "Netherlands",
  ES: "Spain",
  SE: "Sweden",
  AE: "United Arab Emirates",
  IE: "Ireland"
};
function Lk(n) {
  const t = n.toUpperCase();
  if (t.length !== 2) return "";
  const r = [...t].map(
    (o) => 127462 + o.charCodeAt(0) - 65
  );
  return String.fromCodePoint(...r);
}
const wk = B(
  ({
    country: n,
    size: t = "medium",
    showLabel: r = !1,
    label: o,
    className: s,
    ...l
  }, i) => {
    const a = n.toUpperCase(), c = K(() => Lk(a), [a]), p = o || xk[a] || a, _ = [
      en.root,
      en[t],
      s
    ].filter(Boolean).join(" ");
    return /* @__PURE__ */ d(
      "span",
      {
        ref: i,
        className: _,
        "aria-label": `Flag of ${p}`,
        role: "img",
        ...l,
        children: [
          /* @__PURE__ */ e("span", { className: en.flag, "aria-hidden": "true", children: c }),
          (r || o) && /* @__PURE__ */ e("span", { className: en.label, children: p })
        ]
      }
    );
  }
);
wk.displayName = "CountryFlag";
const Nk = "_root_1kadt_3", $k = "_standard_1kadt_19", Ik = "_premium_1kadt_26", Wk = "_black_1kadt_33", Ak = "_header_1kadt_40", Bk = "_chip_1kadt_46", Ck = "_chipSvg_1kadt_56", Sk = "_network_1kadt_61", Mk = "_networkText_1kadt_66", Tk = "_networkSvg_1kadt_73", Dk = "_number_1kadt_80", Ek = "_footer_1kadt_90", Ok = "_detail_1kadt_96", jk = "_detailLabel_1kadt_102", Fk = "_detailValue_1kadt_110", ue = {
  root: Nk,
  standard: $k,
  premium: Ik,
  black: Wk,
  header: Ak,
  chip: Bk,
  chipSvg: Ck,
  network: Sk,
  networkText: Mk,
  networkSvg: Tk,
  number: Dk,
  footer: Ek,
  detail: Ok,
  detailLabel: jk,
  detailValue: Fk
};
function Rk(n, t) {
  const o = n.replace(/\D/g, "").slice(-4);
  return t === "amex" ? `•••• •••••• •${o}` : `•••• •••• •••• ${o}`;
}
const Pk = B(
  ({
    number: n,
    name: t,
    expiry: r,
    type: o = "visa",
    variant: s = "standard",
    className: l,
    ...i
  }, a) => {
    const c = K(() => Rk(n, o), [n, o]), p = n.replace(/\D/g, "").slice(-4), _ = [
      ue.root,
      ue[s],
      l
    ].filter(Boolean).join(" ");
    return /* @__PURE__ */ d(
      "div",
      {
        ref: a,
        className: _,
        role: "img",
        "aria-label": `${o} card ending in ${p}, ${t}, expires ${r}`,
        ...i,
        children: [
          /* @__PURE__ */ d("div", { className: ue.header, children: [
            /* @__PURE__ */ e("div", { className: ue.chip, "aria-hidden": "true", children: /* @__PURE__ */ d("svg", { viewBox: "0 0 40 30", className: ue.chipSvg, children: [
              /* @__PURE__ */ e("rect", { x: "2", y: "2", width: "36", height: "26", rx: "4", fill: "currentColor", opacity: "0.3" }),
              /* @__PURE__ */ e("rect", { x: "6", y: "6", width: "28", height: "18", rx: "2", fill: "currentColor", opacity: "0.5" }),
              /* @__PURE__ */ e("line", { x1: "20", y1: "6", x2: "20", y2: "24", stroke: "currentColor", opacity: "0.3", strokeWidth: "1" }),
              /* @__PURE__ */ e("line", { x1: "6", y1: "15", x2: "34", y2: "15", stroke: "currentColor", opacity: "0.3", strokeWidth: "1" })
            ] }) }),
            /* @__PURE__ */ d("div", { className: ue.network, "aria-hidden": "true", children: [
              o === "visa" && /* @__PURE__ */ e("span", { className: ue.networkText, children: "VISA" }),
              o === "mastercard" && /* @__PURE__ */ d("svg", { viewBox: "0 0 48 30", className: ue.networkSvg, children: [
                /* @__PURE__ */ e("circle", { cx: "18", cy: "15", r: "12", fill: "#eb001b", opacity: "0.8" }),
                /* @__PURE__ */ e("circle", { cx: "30", cy: "15", r: "12", fill: "#f79e1b", opacity: "0.8" })
              ] }),
              o === "amex" && /* @__PURE__ */ e("span", { className: ue.networkText, children: "AMEX" })
            ] })
          ] }),
          /* @__PURE__ */ e("div", { className: ue.number, "aria-hidden": "true", children: c }),
          /* @__PURE__ */ d("div", { className: ue.footer, children: [
            /* @__PURE__ */ d("div", { className: ue.detail, children: [
              /* @__PURE__ */ e("span", { className: ue.detailLabel, children: "Card Holder" }),
              /* @__PURE__ */ e("span", { className: ue.detailValue, children: t })
            ] }),
            /* @__PURE__ */ d("div", { className: ue.detail, children: [
              /* @__PURE__ */ e("span", { className: ue.detailLabel, children: "Expires" }),
              /* @__PURE__ */ e("span", { className: ue.detailValue, children: r })
            ] })
          ] })
        ]
      }
    );
  }
);
Pk.displayName = "CreditCard";
const zk = "_backdrop_3u3s1_3", Hk = "_dialog_3u3s1_16", qk = "_small_3u3s1_33", Gk = "_medium_3u3s1_38", Uk = "_large_3u3s1_43", Vk = "_fullscreen_3u3s1_48", Zk = "_header_3u3s1_61", Kk = "_title_3u3s1_70", Yk = "_close_3u3s1_80", Xk = "_closeIcon_3u3s1_109", Qk = "_body_3u3s1_116", Jk = "_footer_3u3s1_127", et = {
  backdrop: zk,
  dialog: Hk,
  small: qk,
  medium: Gk,
  large: Uk,
  fullscreen: Vk,
  header: Zk,
  title: Kk,
  close: Yk,
  closeIcon: Xk,
  body: Qk,
  footer: Jk
}, eg = B(
  ({
    open: n,
    onClose: t,
    title: r,
    children: o,
    footer: s,
    size: l = "medium",
    closeOnBackdrop: i = !0,
    className: a,
    ...c
  }, p) => {
    const _ = U(null), h = j(
      (k) => {
        k.key === "Escape" && t();
      },
      [t]
    );
    if (H(() => {
      if (n) {
        document.addEventListener("keydown", h);
        const k = document.body.style.overflow;
        return document.body.style.overflow = "hidden", () => {
          document.removeEventListener("keydown", h), document.body.style.overflow = k;
        };
      }
    }, [n, h]), H(() => {
      n && _.current && _.current.focus();
    }, [n]), !n) return null;
    const u = (k) => {
      i && k.target === k.currentTarget && t();
    }, m = [
      et.dialog,
      et[l],
      a
    ].filter(Boolean).join(" ");
    return /* @__PURE__ */ e(
      "div",
      {
        className: et.backdrop,
        onClick: u,
        "aria-hidden": "true",
        children: /* @__PURE__ */ d(
          "div",
          {
            ref: (k) => {
              _.current = k, typeof p == "function" ? p(k) : p && (p.current = k);
            },
            className: m,
            role: "dialog",
            "aria-modal": "true",
            "aria-label": typeof r == "string" ? r : void 0,
            tabIndex: -1,
            ...c,
            children: [
              /* @__PURE__ */ d("div", { className: et.header, children: [
                r && /* @__PURE__ */ e("h2", { className: et.title, children: r }),
                /* @__PURE__ */ e(
                  "button",
                  {
                    className: et.close,
                    type: "button",
                    onClick: t,
                    "aria-label": "Close dialog",
                    children: /* @__PURE__ */ e("svg", { viewBox: "0 0 16 16", fill: "none", className: et.closeIcon, children: /* @__PURE__ */ e(
                      "path",
                      {
                        d: "M4 4L12 12M12 4L4 12",
                        stroke: "currentColor",
                        strokeWidth: "2",
                        strokeLinecap: "round"
                      }
                    ) })
                  }
                )
              ] }),
              /* @__PURE__ */ e("div", { className: et.body, children: o }),
              s && /* @__PURE__ */ e("div", { className: et.footer, children: s })
            ]
          }
        )
      }
    );
  }
);
eg.displayName = "Overlay";
const tg = "_root_2i5hy_3", ng = "_bordered_2i5hy_15", rg = "_elevated_2i5hy_20", og = "_header_2i5hy_27", sg = "_headerButton_2i5hy_31", ig = "_headerStatic_2i5hy_55", ag = "_titleText_2i5hy_62", lg = "_headerRight_2i5hy_69", cg = "_headerAction_2i5hy_76", dg = "_chevron_2i5hy_83", hg = "_chevronOpen_2i5hy_91", pg = "_content_2i5hy_97", ug = "_contentOpen_2i5hy_101", mg = "_contentClosed_2i5hy_105", _g = "_contentInner_2i5hy_109", ge = {
  root: tg,
  default: "_default_2i5hy_11",
  bordered: ng,
  elevated: rg,
  header: og,
  headerButton: sg,
  headerStatic: ig,
  titleText: ag,
  headerRight: lg,
  headerAction: cg,
  chevron: dg,
  chevronOpen: hg,
  content: pg,
  contentOpen: ug,
  contentClosed: mg,
  contentInner: _g
}, kg = B(
  ({
    title: n,
    children: t,
    defaultOpen: r = !0,
    collapsible: o = !1,
    variant: s = "default",
    headerAction: l,
    className: i,
    ...a
  }, c) => {
    const [p, _] = P(r), h = te(), u = te(), m = j(() => {
      o && _((y) => !y);
    }, [o]), k = [
      ge.root,
      ge[s],
      i
    ].filter(Boolean).join(" "), g = o ? /* @__PURE__ */ d(
      "button",
      {
        className: ge.headerButton,
        type: "button",
        id: u,
        onClick: m,
        "aria-expanded": p,
        "aria-controls": h,
        children: [
          /* @__PURE__ */ e("span", { className: ge.titleText, children: n }),
          /* @__PURE__ */ d("div", { className: ge.headerRight, children: [
            l && /* @__PURE__ */ e(
              "span",
              {
                className: ge.headerAction,
                onClick: (y) => y.stopPropagation(),
                onKeyDown: (y) => y.stopPropagation(),
                role: "presentation",
                children: l
              }
            ),
            /* @__PURE__ */ e(
              "svg",
              {
                className: `${ge.chevron} ${p ? ge.chevronOpen : ""}`,
                viewBox: "0 0 16 16",
                fill: "none",
                "aria-hidden": "true",
                children: /* @__PURE__ */ e(
                  "path",
                  {
                    d: "M4 6L8 10L12 6",
                    stroke: "currentColor",
                    strokeWidth: "2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                  }
                )
              }
            )
          ] })
        ]
      }
    ) : /* @__PURE__ */ d("div", { className: ge.headerStatic, id: u, children: [
      /* @__PURE__ */ e("span", { className: ge.titleText, children: n }),
      l && /* @__PURE__ */ e("span", { className: ge.headerAction, children: l })
    ] });
    return /* @__PURE__ */ d("div", { ref: c, className: k, ...a, children: [
      /* @__PURE__ */ e("div", { className: ge.header, children: g }),
      /* @__PURE__ */ e(
        "div",
        {
          id: h,
          className: `${ge.content} ${p ? ge.contentOpen : ge.contentClosed}`,
          role: "region",
          "aria-labelledby": u,
          hidden: !p,
          children: /* @__PURE__ */ e("div", { className: ge.contentInner, children: t })
        }
      )
    ] });
  }
);
kg.displayName = "Panel";
const gg = "_root_r5lgl_3", yg = "_light_r5lgl_16", fg = "_dark_r5lgl_22", bg = "_collapseToggle_r5lgl_30", vg = "_collapseIcon_r5lgl_57", xg = "_collapseIconFlipped_r5lgl_63", Lg = "_list_r5lgl_69", wg = "_subList_r5lgl_75", Ng = "_listItem_r5lgl_81", $g = "_item_r5lgl_87", Ig = "_collapsed_r5lgl_106", Wg = "_itemDisabled_r5lgl_111", Ag = "_itemActive_r5lgl_126", Bg = "_itemGroupActive_r5lgl_155", Cg = "_icon_r5lgl_172", Sg = "_label_r5lgl_183", Mg = "_chevron_r5lgl_192", Tg = "_chevronOpen_r5lgl_200", me = {
  root: gg,
  light: yg,
  dark: fg,
  collapseToggle: bg,
  collapseIcon: vg,
  collapseIconFlipped: xg,
  list: Lg,
  subList: wg,
  listItem: Ng,
  item: $g,
  collapsed: Ig,
  itemDisabled: Wg,
  itemActive: Ag,
  itemGroupActive: Bg,
  icon: Cg,
  label: Sg,
  chevron: Mg,
  chevronOpen: Tg
};
function wn(n, t) {
  return n.id === t ? !0 : n.children ? n.children.some((r) => wn(r, t)) : !1;
}
const Dg = B(
  ({
    items: n,
    activeId: t,
    onSelect: r,
    collapsed: o = !1,
    onCollapse: s,
    width: l = 260,
    variant: i = "light",
    className: a,
    style: c,
    ...p
  }, _) => {
    const [h, u] = P(() => {
      const v = /* @__PURE__ */ new Set(), L = (x) => {
        for (const $ of x)
          $.children && wn($, t) && (v.add($.id), L($.children));
      };
      return L(n), v;
    }), m = j((v) => {
      u((L) => {
        const x = new Set(L);
        return x.has(v) ? x.delete(v) : x.add(v), x;
      });
    }, []), k = j(
      (v) => {
        r == null || r(v);
      },
      [r]
    ), g = j(() => {
      s == null || s(!o);
    }, [o, s]), y = [
      me.root,
      me[i],
      o ? me.collapsed : "",
      a
    ].filter(Boolean).join(" "), w = {
      ...c,
      width: o ? 64 : l
    }, N = (v, L = 0) => {
      const x = v.children && v.children.length > 0, $ = h.has(v.id), f = v.id === t, W = x && wn(v, t), b = [
        me.item,
        f ? me.itemActive : "",
        W && !f ? me.itemGroupActive : "",
        v.disabled ? me.itemDisabled : ""
      ].filter(Boolean).join(" "), I = o ? 0 : 16 + L * 16;
      return /* @__PURE__ */ d("li", { className: me.listItem, role: "none", children: [
        /* @__PURE__ */ d(
          "button",
          {
            className: b,
            type: "button",
            style: { paddingLeft: I },
            onClick: () => {
              v.disabled || (x ? m(v.id) : k(v.id));
            },
            "aria-current": f ? "page" : void 0,
            "aria-expanded": x ? $ : void 0,
            "aria-disabled": v.disabled || void 0,
            title: o ? v.label : void 0,
            role: "menuitem",
            children: [
              v.icon && /* @__PURE__ */ e("span", { className: me.icon, "aria-hidden": "true", children: v.icon }),
              !o && /* @__PURE__ */ e("span", { className: me.label, children: v.label }),
              !o && x && /* @__PURE__ */ e(
                "svg",
                {
                  className: `${me.chevron} ${$ ? me.chevronOpen : ""}`,
                  viewBox: "0 0 16 16",
                  fill: "none",
                  "aria-hidden": "true",
                  children: /* @__PURE__ */ e(
                    "path",
                    {
                      d: "M4 6L8 10L12 6",
                      stroke: "currentColor",
                      strokeWidth: "2",
                      strokeLinecap: "round",
                      strokeLinejoin: "round"
                    }
                  )
                }
              )
            ]
          }
        ),
        x && $ && !o && /* @__PURE__ */ e("ul", { className: me.subList, role: "menu", children: v.children.map((S) => N(S, L + 1)) })
      ] }, v.id);
    };
    return /* @__PURE__ */ d(
      "nav",
      {
        ref: _,
        className: y,
        style: w,
        "aria-label": "Sidebar navigation",
        ...p,
        children: [
          s && /* @__PURE__ */ e(
            "button",
            {
              className: me.collapseToggle,
              type: "button",
              onClick: g,
              "aria-label": o ? "Expand sidebar" : "Collapse sidebar",
              children: /* @__PURE__ */ e(
                "svg",
                {
                  className: `${me.collapseIcon} ${o ? me.collapseIconFlipped : ""}`,
                  viewBox: "0 0 16 16",
                  fill: "none",
                  "aria-hidden": "true",
                  children: /* @__PURE__ */ e(
                    "path",
                    {
                      d: "M10 4L6 8L10 12",
                      stroke: "currentColor",
                      strokeWidth: "2",
                      strokeLinecap: "round",
                      strokeLinejoin: "round"
                    }
                  )
                }
              )
            }
          ),
          /* @__PURE__ */ e("ul", { className: me.list, role: "menu", children: n.map((v) => N(v)) })
        ]
      }
    );
  }
);
Dg.displayName = "Sidebar";
const Eg = "_root_w3eox_3", Og = "_interactive_w3eox_18", jg = "_selected_w3eox_34", Fg = "_small_w3eox_41", Rg = "_title_w3eox_45", Pg = "_description_w3eox_49", zg = "_iconWrapper_w3eox_53", Hg = "_medium_w3eox_59", qg = "_large_w3eox_77", Gg = "_imageWrapper_w3eox_97", Ug = "_image_w3eox_97", Vg = "_content_w3eox_130", Zg = "_checkWrapper_w3eox_151", Kg = "_check_w3eox_151", Yg = "_action_w3eox_164", Xg = "_arrow_w3eox_178", Qg = "_arrowIcon_w3eox_186", ye = {
  root: Eg,
  interactive: Og,
  selected: jg,
  small: Fg,
  title: Rg,
  description: Pg,
  iconWrapper: zg,
  medium: Hg,
  large: qg,
  imageWrapper: Gg,
  image: Ug,
  content: Vg,
  checkWrapper: Zg,
  check: Kg,
  action: Yg,
  arrow: Xg,
  arrowIcon: Qg
}, Jg = B(
  ({
    title: n,
    description: t,
    icon: r,
    image: o,
    selected: s = !1,
    onClick: l,
    variant: i = "default",
    size: a = "medium",
    className: c,
    ...p
  }, _) => {
    const h = !!l, u = i === "selectable", m = j(
      (g) => {
        h && (g.key === "Enter" || g.key === " ") && (g.preventDefault(), l == null || l(g));
      },
      [h, l]
    ), k = [
      ye.root,
      ye[i],
      ye[a],
      s ? ye.selected : "",
      h ? ye.interactive : "",
      c
    ].filter(Boolean).join(" ");
    return /* @__PURE__ */ d(
      "div",
      {
        ref: _,
        className: k,
        role: u ? "option" : h ? "button" : void 0,
        "aria-selected": u ? s : void 0,
        tabIndex: h ? 0 : void 0,
        onClick: l,
        onKeyDown: m,
        ...p,
        children: [
          o && /* @__PURE__ */ e("div", { className: ye.imageWrapper, children: /* @__PURE__ */ e("img", { className: ye.image, src: o, alt: "", loading: "lazy" }) }),
          r && !o && /* @__PURE__ */ e("div", { className: ye.iconWrapper, "aria-hidden": "true", children: r }),
          /* @__PURE__ */ d("div", { className: ye.content, children: [
            /* @__PURE__ */ e("span", { className: ye.title, children: n }),
            t && /* @__PURE__ */ e("span", { className: ye.description, children: t })
          ] }),
          u && /* @__PURE__ */ e("div", { className: ye.checkWrapper, "aria-hidden": "true", children: s ? /* @__PURE__ */ d("svg", { viewBox: "0 0 20 20", className: ye.check, children: [
            /* @__PURE__ */ e("circle", { cx: "10", cy: "10", r: "10", fill: "#e60000" }),
            /* @__PURE__ */ e(
              "path",
              {
                d: "M6 10L9 13L14 7",
                stroke: "#ffffff",
                strokeWidth: "2",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                fill: "none"
              }
            )
          ] }) : /* @__PURE__ */ e("svg", { viewBox: "0 0 20 20", className: ye.check, children: /* @__PURE__ */ e("circle", { cx: "10", cy: "10", r: "9", stroke: "#cccabc", strokeWidth: "2", fill: "none" }) }) }),
          i === "action" && /* @__PURE__ */ e("div", { className: ye.arrow, "aria-hidden": "true", children: /* @__PURE__ */ e("svg", { viewBox: "0 0 16 16", fill: "none", className: ye.arrowIcon, children: /* @__PURE__ */ e(
            "path",
            {
              d: "M6 4L10 8L6 12",
              stroke: "currentColor",
              strokeWidth: "2",
              strokeLinecap: "round",
              strokeLinejoin: "round"
            }
          ) }) })
        ]
      }
    );
  }
);
Jg.displayName = "Tile";
const ey = "_container_10xpt_3", ty = "_button_10xpt_8", ny = "_small_10xpt_33", ry = "_medium_10xpt_39", oy = "_large_10xpt_45", sy = "_primary_10xpt_53", iy = "_secondary_10xpt_64", ay = "_outline_10xpt_75", ly = "_chevron_10xpt_93", cy = "_open_10xpt_98", dy = "_label_10xpt_102", hy = "_menu_10xpt_108", py = "_menuItem_10xpt_125", uy = "_menuItemFocused_10xpt_139", my = "_menuItemDisabled_10xpt_143", _y = "_menuItemIcon_10xpt_152", ky = "_menuItemLabel_10xpt_161", gy = "_divider_10xpt_165", we = {
  container: ey,
  button: ty,
  small: ny,
  medium: ry,
  large: oy,
  primary: sy,
  secondary: iy,
  outline: ay,
  chevron: ly,
  open: cy,
  label: dy,
  menu: hy,
  menuItem: py,
  menuItemFocused: uy,
  menuItemDisabled: my,
  menuItemIcon: _y,
  menuItemLabel: ky,
  divider: gy
}, yy = B(
  ({
    label: n,
    items: t,
    variant: r = "primary",
    size: o = "medium",
    disabled: s = !1,
    className: l,
    ...i
  }, a) => {
    const [c, p] = P(!1), [_, h] = P(-1), u = U(null), m = U(null), g = `ubs-menu-${te()}`, y = t.map((x, $) => ({ item: x, index: $ })).filter(({ item: x }) => !x.divider && !x.disabled), w = j(() => {
      p(!1), h(-1);
    }, []);
    H(() => {
      const x = ($) => {
        u.current && !u.current.contains($.target) && w();
      };
      return c && document.addEventListener("mousedown", x), () => document.removeEventListener("mousedown", x);
    }, [c, w]), H(() => {
      var x;
      c && _ >= 0 && m.current && ((x = m.current.querySelectorAll('[role="menuitem"]')[_]) == null || x.focus());
    }, [_, c]);
    const N = () => {
      s || (c ? w() : (p(!0), h(0)));
    }, v = (x) => {
      var $;
      if (!c) {
        (x.key === "ArrowDown" || x.key === "Enter" || x.key === " ") && (x.preventDefault(), p(!0), h(0));
        return;
      }
      switch (x.key) {
        case "ArrowDown": {
          x.preventDefault();
          const f = y.findIndex((b) => b.index === _), W = y[(f + 1) % y.length];
          W && h(W.index);
          break;
        }
        case "ArrowUp": {
          x.preventDefault();
          const f = y.findIndex((b) => b.index === _), W = y[(f - 1 + y.length) % y.length];
          W && h(W.index);
          break;
        }
        case "Escape":
          x.preventDefault(), w();
          break;
        case "Tab":
          w();
          break;
        case "Enter":
        case " ": {
          x.preventDefault();
          const f = t[_];
          f && !f.divider && !f.disabled && (($ = f.onClick) == null || $.call(f), w());
          break;
        }
        case "Home": {
          x.preventDefault();
          const f = y[0];
          f && h(f.index);
          break;
        }
        case "End": {
          x.preventDefault();
          const f = y[y.length - 1];
          f && h(f.index);
          break;
        }
      }
    }, L = [
      we.button,
      we[r],
      we[o],
      c ? we.open : "",
      l ?? ""
    ].filter(Boolean).join(" ");
    return /* @__PURE__ */ d("div", { className: we.container, ref: u, children: [
      /* @__PURE__ */ d(
        "button",
        {
          ref: a,
          type: "button",
          className: L,
          disabled: s,
          "aria-disabled": s,
          "aria-haspopup": "true",
          "aria-expanded": c,
          "aria-controls": c ? g : void 0,
          onClick: N,
          onKeyDown: v,
          ...i,
          children: [
            /* @__PURE__ */ e("span", { className: we.label, children: n }),
            /* @__PURE__ */ e(
              "svg",
              {
                className: we.chevron,
                width: "12",
                height: "12",
                viewBox: "0 0 12 12",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                "aria-hidden": "true",
                children: /* @__PURE__ */ e(
                  "path",
                  {
                    d: "M3 4.5L6 7.5L9 4.5",
                    stroke: "currentColor",
                    strokeWidth: "1.5",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                  }
                )
              }
            )
          ]
        }
      ),
      c && /* @__PURE__ */ e(
        "ul",
        {
          ref: m,
          id: g,
          role: "menu",
          className: we.menu,
          "aria-label": n,
          onKeyDown: v,
          children: t.map((x, $) => x.divider ? /* @__PURE__ */ e("li", { role: "separator", className: we.divider }, $) : /* @__PURE__ */ d(
            "li",
            {
              role: "menuitem",
              className: [
                we.menuItem,
                x.disabled ? we.menuItemDisabled : "",
                _ === $ ? we.menuItemFocused : ""
              ].filter(Boolean).join(" "),
              tabIndex: _ === $ ? 0 : -1,
              "aria-disabled": x.disabled,
              onClick: () => {
                var f;
                x.disabled || ((f = x.onClick) == null || f.call(x), w());
              },
              children: [
                x.icon && /* @__PURE__ */ e("span", { className: we.menuItemIcon, children: x.icon }),
                /* @__PURE__ */ e("span", { className: we.menuItemLabel, children: x.label })
              ]
            },
            $
          ))
        }
      )
    ] });
  }
);
yy.displayName = "MenuButton";
const fy = "_container_u5g70_3", by = "_wrapper_u5g70_7", vy = "_primary_u5g70_12", xy = "_toggle_u5g70_13", Ly = "_small_u5g70_50", wy = "_medium_u5g70_61", Ny = "_large_u5g70_72", $y = "_secondary_u5g70_108", Iy = "_outline_u5g70_126", Wy = "_disabled_u5g70_145", Ay = "_chevron_u5g70_153", By = "_label_u5g70_157", Cy = "_menu_u5g70_163", Sy = "_menuItem_u5g70_180", My = "_menuItemFocused_u5g70_194", Ty = "_menuItemDisabled_u5g70_198", Dy = "_menuItemIcon_u5g70_207", Ey = "_menuItemLabel_u5g70_216", xe = {
  container: fy,
  wrapper: by,
  primary: vy,
  toggle: xy,
  small: Ly,
  medium: wy,
  large: Ny,
  secondary: $y,
  outline: Iy,
  disabled: Wy,
  chevron: Ay,
  label: By,
  menu: Cy,
  menuItem: Sy,
  menuItemFocused: My,
  menuItemDisabled: Ty,
  menuItemIcon: Dy,
  menuItemLabel: Ey
}, Oy = B(
  ({
    label: n,
    onClick: t,
    items: r,
    variant: o = "primary",
    size: s = "medium",
    disabled: l = !1,
    className: i
  }, a) => {
    const [c, p] = P(!1), [_, h] = P(-1), u = U(null), m = U(null), g = `ubs-split-menu-${te()}`, y = r.map((L, x) => ({ item: L, index: x })).filter(({ item: L }) => !L.disabled), w = j(() => {
      p(!1), h(-1);
    }, []);
    H(() => {
      const L = (x) => {
        u.current && !u.current.contains(x.target) && w();
      };
      return c && document.addEventListener("mousedown", L), () => document.removeEventListener("mousedown", L);
    }, [c, w]), H(() => {
      var L;
      c && _ >= 0 && m.current && ((L = m.current.querySelectorAll('[role="menuitem"]')[_]) == null || L.focus());
    }, [_, c]);
    const N = (L) => {
      var x;
      if (!c) {
        (L.key === "ArrowDown" || L.key === "Enter" || L.key === " ") && (L.preventDefault(), p(!0), h(0));
        return;
      }
      switch (L.key) {
        case "ArrowDown": {
          L.preventDefault();
          const $ = y.findIndex((W) => W.index === _), f = y[($ + 1) % y.length];
          f && h(f.index);
          break;
        }
        case "ArrowUp": {
          L.preventDefault();
          const $ = y.findIndex((W) => W.index === _), f = y[($ - 1 + y.length) % y.length];
          f && h(f.index);
          break;
        }
        case "Escape":
          L.preventDefault(), w();
          break;
        case "Tab":
          w();
          break;
        case "Enter":
        case " ": {
          L.preventDefault();
          const $ = r[_];
          $ && !$.disabled && ((x = $.onClick) == null || x.call($), w());
          break;
        }
      }
    }, v = [
      xe.container,
      xe[o],
      xe[s],
      l ? xe.disabled : "",
      i ?? ""
    ].filter(Boolean).join(" ");
    return /* @__PURE__ */ e("div", { ref: a ?? u, className: v, children: /* @__PURE__ */ d("div", { className: xe.wrapper, ref: u, children: [
      /* @__PURE__ */ e(
        "button",
        {
          type: "button",
          className: xe.primary,
          disabled: l,
          "aria-disabled": l,
          onClick: () => {
            l || t == null || t();
          },
          children: /* @__PURE__ */ e("span", { className: xe.label, children: n })
        }
      ),
      /* @__PURE__ */ e(
        "button",
        {
          type: "button",
          className: xe.toggle,
          disabled: l,
          "aria-disabled": l,
          "aria-haspopup": "true",
          "aria-expanded": c,
          "aria-controls": c ? g : void 0,
          "aria-label": "More options",
          onClick: () => {
            l || (c ? w() : (p(!0), h(0)));
          },
          onKeyDown: N,
          children: /* @__PURE__ */ e(
            "svg",
            {
              className: xe.chevron,
              width: "12",
              height: "12",
              viewBox: "0 0 12 12",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              "aria-hidden": "true",
              children: /* @__PURE__ */ e(
                "path",
                {
                  d: "M3 4.5L6 7.5L9 4.5",
                  stroke: "currentColor",
                  strokeWidth: "1.5",
                  strokeLinecap: "round",
                  strokeLinejoin: "round"
                }
              )
            }
          )
        }
      ),
      c && /* @__PURE__ */ e(
        "ul",
        {
          ref: m,
          id: g,
          role: "menu",
          className: xe.menu,
          "aria-label": `${n} options`,
          onKeyDown: N,
          children: r.map((L, x) => /* @__PURE__ */ d(
            "li",
            {
              role: "menuitem",
              className: [
                xe.menuItem,
                L.disabled ? xe.menuItemDisabled : "",
                _ === x ? xe.menuItemFocused : ""
              ].filter(Boolean).join(" "),
              tabIndex: _ === x ? 0 : -1,
              "aria-disabled": L.disabled,
              onClick: () => {
                var $;
                L.disabled || (($ = L.onClick) == null || $.call(L), w());
              },
              children: [
                L.icon && /* @__PURE__ */ e("span", { className: xe.menuItemIcon, children: L.icon }),
                /* @__PURE__ */ e("span", { className: xe.menuItemLabel, children: L.label })
              ]
            },
            x
          ))
        }
      )
    ] }) });
  }
);
Oy.displayName = "SplitButton";
const jy = "_group_1wdjo_3", Fy = "_horizontal_1wdjo_7", Ry = "_vertical_1wdjo_11", Py = "_primary_1wdjo_40", zy = "_secondary_1wdjo_54", Hy = "_outline_1wdjo_68", qy = "_small_1wdjo_84", Gy = "_medium_1wdjo_90", Uy = "_large_1wdjo_96", tn = {
  group: jy,
  horizontal: Fy,
  vertical: Ry,
  primary: Py,
  secondary: zy,
  outline: Hy,
  small: qy,
  medium: Gy,
  large: Uy
}, Vy = B(
  ({
    children: n,
    variant: t = "outline",
    size: r = "medium",
    orientation: o = "horizontal",
    className: s,
    ...l
  }, i) => {
    const a = [
      tn.group,
      tn[t],
      tn[r],
      tn[o],
      s ?? ""
    ].filter(Boolean).join(" ");
    return /* @__PURE__ */ e(
      "div",
      {
        ref: i,
        role: "group",
        className: a,
        "aria-orientation": o,
        ...l,
        children: n
      }
    );
  }
);
Vy.displayName = "ButtonGroup";
const Zy = "_container_1e0f3_3", Ky = "_button_1e0f3_20", Yy = "_selected_1e0f3_39", Xy = "_small_1e0f3_64", Qy = "_medium_1e0f3_70", Jy = "_large_1e0f3_76", ef = "_buttonDisabled_1e0f3_84", tf = "_icon_1e0f3_91", nf = "_label_1e0f3_99", xt = {
  container: Zy,
  button: Ky,
  selected: Yy,
  small: Xy,
  medium: Qy,
  large: Jy,
  buttonDisabled: ef,
  icon: tf,
  label: nf
}, rf = B(
  ({
    options: n,
    value: t,
    onChange: r,
    multiple: o = !1,
    size: s = "medium",
    disabled: l = !1,
    className: i,
    ...a
  }, c) => {
    const p = Array.isArray(t) ? t : t !== void 0 ? [t] : [], _ = j(
      (m) => p.includes(m),
      [p]
    ), h = (m) => {
      if (!l && r)
        if (o) {
          const k = _(m) ? p.filter((g) => g !== m) : [...p, m];
          r(k);
        } else
          r(m);
    }, u = [
      xt.container,
      xt[s],
      i ?? ""
    ].filter(Boolean).join(" ");
    return /* @__PURE__ */ e(
      "div",
      {
        ref: c,
        role: o ? "group" : "radiogroup",
        className: u,
        "aria-disabled": l,
        ...a,
        children: n.map((m) => {
          const k = _(m.value), g = l || m.disabled, y = [
            xt.button,
            k ? xt.selected : "",
            g ? xt.buttonDisabled : ""
          ].filter(Boolean).join(" ");
          return /* @__PURE__ */ d(
            "button",
            {
              type: "button",
              role: o ? "checkbox" : "radio",
              className: y,
              disabled: g,
              "aria-checked": k,
              "aria-disabled": g,
              onClick: () => h(m.value),
              children: [
                m.icon && /* @__PURE__ */ e("span", { className: xt.icon, children: m.icon }),
                /* @__PURE__ */ e("span", { className: xt.label, children: m.label })
              ]
            },
            m.value
          );
        })
      }
    );
  }
);
rf.displayName = "ButtonSelect";
const of = "_container_1xcm5_3", sf = "_button_1xcm5_8", af = "_small_1xcm5_32", lf = "_medium_1xcm5_38", cf = "_large_1xcm5_44", df = "_primary_1xcm5_52", hf = "_secondary_1xcm5_63", pf = "_outline_1xcm5_74", uf = "_chevron_1xcm5_92", mf = "_open_1xcm5_97", _f = "_label_1xcm5_101", kf = "_menu_1xcm5_107", gf = "_menuStart_1xcm5_123", yf = "_menuEnd_1xcm5_127", ff = "_menuItem_1xcm5_131", bf = "_menuItemFocused_1xcm5_145", vf = "_menuItemDisabled_1xcm5_149", xf = "_menuItemIcon_1xcm5_158", Lf = "_menuItemLabel_1xcm5_167", wf = "_divider_1xcm5_171", fe = {
  container: of,
  button: sf,
  small: af,
  medium: lf,
  large: cf,
  primary: df,
  secondary: hf,
  outline: pf,
  chevron: uf,
  open: mf,
  label: _f,
  menu: kf,
  menuStart: gf,
  menuEnd: yf,
  menuItem: ff,
  menuItemFocused: bf,
  menuItemDisabled: vf,
  menuItemIcon: xf,
  menuItemLabel: Lf,
  divider: wf
}, Nf = B(
  ({
    label: n,
    items: t,
    variant: r = "primary",
    size: o = "medium",
    placement: s = "bottom-start",
    disabled: l = !1,
    className: i,
    ...a
  }, c) => {
    const [p, _] = P(!1), [h, u] = P(-1), m = U(null), k = U(null), y = `ubs-dropdown-btn-${te()}`, w = t.map((f, W) => ({ item: f, index: W })).filter(({ item: f }) => !f.divider && !f.disabled), N = j(() => {
      _(!1), u(-1);
    }, []);
    H(() => {
      const f = (W) => {
        m.current && !m.current.contains(W.target) && N();
      };
      return p && document.addEventListener("mousedown", f), () => document.removeEventListener("mousedown", f);
    }, [p, N]), H(() => {
      var f;
      p && h >= 0 && k.current && ((f = k.current.querySelectorAll('[role="menuitem"]')[h]) == null || f.focus());
    }, [h, p]);
    const v = (f) => {
      var W;
      if (!p) {
        (f.key === "ArrowDown" || f.key === "Enter" || f.key === " ") && (f.preventDefault(), _(!0), u(0));
        return;
      }
      switch (f.key) {
        case "ArrowDown": {
          f.preventDefault();
          const b = w.findIndex((S) => S.index === h), I = w[(b + 1) % w.length];
          I && u(I.index);
          break;
        }
        case "ArrowUp": {
          f.preventDefault();
          const b = w.findIndex((S) => S.index === h), I = w[(b - 1 + w.length) % w.length];
          I && u(I.index);
          break;
        }
        case "Escape":
          f.preventDefault(), N();
          break;
        case "Tab":
          N();
          break;
        case "Enter":
        case " ": {
          f.preventDefault();
          const b = t[h];
          b && !b.divider && !b.disabled && ((W = b.onClick) == null || W.call(b), N());
          break;
        }
      }
    }, L = () => {
      l || (p ? N() : (_(!0), u(0)));
    }, x = [
      fe.button,
      fe[r],
      fe[o],
      p ? fe.open : "",
      i ?? ""
    ].filter(Boolean).join(" "), $ = [
      fe.menu,
      s === "bottom-end" ? fe.menuEnd : fe.menuStart
    ].join(" ");
    return /* @__PURE__ */ d("div", { className: fe.container, ref: m, children: [
      /* @__PURE__ */ d(
        "button",
        {
          ref: c,
          type: "button",
          className: x,
          disabled: l,
          "aria-disabled": l,
          "aria-haspopup": "true",
          "aria-expanded": p,
          "aria-controls": p ? y : void 0,
          onClick: L,
          onKeyDown: v,
          ...a,
          children: [
            /* @__PURE__ */ e("span", { className: fe.label, children: n }),
            /* @__PURE__ */ e(
              "svg",
              {
                className: fe.chevron,
                width: "12",
                height: "12",
                viewBox: "0 0 12 12",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                "aria-hidden": "true",
                children: /* @__PURE__ */ e(
                  "path",
                  {
                    d: "M3 4.5L6 7.5L9 4.5",
                    stroke: "currentColor",
                    strokeWidth: "1.5",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                  }
                )
              }
            )
          ]
        }
      ),
      p && /* @__PURE__ */ e(
        "ul",
        {
          ref: k,
          id: y,
          role: "menu",
          className: $,
          "aria-label": n,
          onKeyDown: v,
          children: t.map((f, W) => f.divider ? /* @__PURE__ */ e("li", { role: "separator", className: fe.divider }, W) : /* @__PURE__ */ d(
            "li",
            {
              role: "menuitem",
              className: [
                fe.menuItem,
                f.disabled ? fe.menuItemDisabled : "",
                h === W ? fe.menuItemFocused : ""
              ].filter(Boolean).join(" "),
              tabIndex: h === W ? 0 : -1,
              "aria-disabled": f.disabled,
              onClick: () => {
                var b;
                f.disabled || ((b = f.onClick) == null || b.call(f), N());
              },
              children: [
                f.icon && /* @__PURE__ */ e("span", { className: fe.menuItemIcon, children: f.icon }),
                /* @__PURE__ */ e("span", { className: fe.menuItemLabel, children: f.label })
              ]
            },
            W
          ))
        }
      )
    ] });
  }
);
Nf.displayName = "DropdownButton";
const $f = "_container_1du8g_3", If = "_label_1du8g_10", Wf = "_inputWrapper_1du8g_18", Af = "_disabled_1du8g_33", Bf = "_open_1du8g_37", Cf = "_error_1du8g_41", Sf = "_input_1du8g_18", Mf = "_chevron_1du8g_74", Tf = "_tags_1du8g_90", Df = "_tag_1du8g_90", Ef = "_tagLabel_1du8g_109", Of = "_tagRemove_1du8g_116", jf = "_listbox_1du8g_138", Ff = "_option_1du8g_155", Rf = "_optionFocused_1du8g_169", Pf = "_optionSelected_1du8g_173", zf = "_optionDisabled_1du8g_178", Hf = "_optionLabel_1du8g_187", qf = "_checkbox_1du8g_191", Gf = "_loading_1du8g_212", Uf = "_noResults_1du8g_213", Vf = "_spinner_1du8g_223", Zf = "_errorText_1du8g_237", re = {
  container: $f,
  label: If,
  inputWrapper: Wf,
  disabled: Af,
  open: Bf,
  error: Cf,
  input: Sf,
  chevron: Mf,
  tags: Tf,
  tag: Df,
  tagLabel: Ef,
  tagRemove: Of,
  listbox: jf,
  option: Ff,
  optionFocused: Rf,
  optionSelected: Pf,
  optionDisabled: zf,
  optionLabel: Hf,
  checkbox: qf,
  loading: Gf,
  noResults: Uf,
  spinner: Vf,
  errorText: Zf
}, Kf = B(
  ({
    options: n,
    value: t,
    onChange: r,
    placeholder: o = "Search...",
    multiple: s = !1,
    searchable: l = !0,
    loading: i = !1,
    noResultsText: a = "No results found",
    disabled: c = !1,
    error: p,
    label: _,
    className: h,
    ...u
  }, m) => {
    const [k, g] = P(!1), [y, w] = P(""), [N, v] = P(-1), L = U(null), x = U(null), $ = U(null), f = te(), W = `ubs-combobox-list-${f}`, b = `ubs-combobox-input-${f}`, I = Array.isArray(t) ? t : t !== void 0 ? [t] : [], S = K(() => {
      if (!l || !y.trim()) return n;
      const E = y.toLowerCase();
      return n.filter((M) => M.label.toLowerCase().includes(E));
    }, [n, y, l]), R = j(() => {
      g(!1), v(-1);
    }, []);
    H(() => {
      const E = (M) => {
        if (L.current && !L.current.contains(M.target))
          if (R(), !s && I.length > 0) {
            const V = n.find((J) => J.value === I[0]);
            w((V == null ? void 0 : V.label) ?? "");
          } else s || w("");
      };
      return k && document.addEventListener("mousedown", E), () => document.removeEventListener("mousedown", E);
    }, [k, R, s, I, n]), H(() => {
      if (k && N >= 0 && $.current) {
        const M = $.current.querySelectorAll('[role="option"]')[N];
        M == null || M.scrollIntoView({ block: "nearest" });
      }
    }, [N, k]), H(() => {
      if (!s && !k && I.length > 0) {
        const E = n.find((M) => M.value === I[0]);
        E && w(E.label);
      }
    }, [t, n, s, k, I]);
    const D = (E) => {
      var M;
      if (r)
        if (s) {
          const V = I.includes(E) ? I.filter((J) => J !== E) : [...I, E];
          r(V), w(""), (M = x.current) == null || M.focus();
        } else {
          r(E);
          const V = n.find((J) => J.value === E);
          w((V == null ? void 0 : V.label) ?? ""), R();
        }
    }, A = (E) => {
      !r || c || r(I.filter((M) => M !== E));
    }, C = (E) => {
      w(E.target.value), k || g(!0), v(-1);
    }, T = () => {
      c || g(!0);
    }, q = (E) => {
      if (!k && (E.key === "ArrowDown" || E.key === "Enter")) {
        E.preventDefault(), g(!0), v(0);
        return;
      }
      if (k)
        switch (E.key) {
          case "ArrowDown":
            E.preventDefault(), v(
              (M) => M < S.length - 1 ? M + 1 : 0
            );
            break;
          case "ArrowUp":
            E.preventDefault(), v(
              (M) => M > 0 ? M - 1 : S.length - 1
            );
            break;
          case "Enter": {
            E.preventDefault();
            const M = S[N];
            M && !M.disabled && D(M.value);
            break;
          }
          case "Escape":
            E.preventDefault(), R();
            break;
          case "Backspace":
            s && !y && I.length > 0 && A(I[I.length - 1]);
            break;
        }
    }, z = [
      re.container,
      c ? re.disabled : "",
      p ? re.error : "",
      k ? re.open : "",
      h ?? ""
    ].filter(Boolean).join(" ");
    return /* @__PURE__ */ d("div", { ref: m, className: z, ...u, children: [
      _ && /* @__PURE__ */ e("label", { htmlFor: b, className: re.label, children: _ }),
      /* @__PURE__ */ d(
        "div",
        {
          className: re.inputWrapper,
          ref: L,
          onClick: () => {
            var E;
            return (E = x.current) == null ? void 0 : E.focus();
          },
          children: [
            s && I.length > 0 && /* @__PURE__ */ e("div", { className: re.tags, children: I.map((E) => {
              const M = n.find((V) => V.value === E);
              return /* @__PURE__ */ d("span", { className: re.tag, children: [
                /* @__PURE__ */ e("span", { className: re.tagLabel, children: (M == null ? void 0 : M.label) ?? E }),
                /* @__PURE__ */ e(
                  "button",
                  {
                    type: "button",
                    className: re.tagRemove,
                    "aria-label": `Remove ${(M == null ? void 0 : M.label) ?? E}`,
                    onClick: (V) => {
                      V.stopPropagation(), A(E);
                    },
                    tabIndex: -1,
                    children: /* @__PURE__ */ e("svg", { width: "10", height: "10", viewBox: "0 0 10 10", fill: "none", "aria-hidden": "true", children: /* @__PURE__ */ e("path", { d: "M2 2L8 8M8 2L2 8", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round" }) })
                  }
                )
              ] }, E);
            }) }),
            /* @__PURE__ */ e(
              "input",
              {
                ref: x,
                id: b,
                type: "text",
                className: re.input,
                role: "combobox",
                "aria-expanded": k,
                "aria-controls": k ? W : void 0,
                "aria-autocomplete": "list",
                "aria-activedescendant": N >= 0 ? `${W}-option-${N}` : void 0,
                "aria-invalid": !!p,
                placeholder: s && I.length > 0 ? "" : o,
                value: y,
                disabled: c,
                onChange: C,
                onFocus: T,
                onKeyDown: q,
                readOnly: !l
              }
            ),
            /* @__PURE__ */ e(
              "svg",
              {
                className: re.chevron,
                width: "12",
                height: "12",
                viewBox: "0 0 12 12",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                "aria-hidden": "true",
                children: /* @__PURE__ */ e(
                  "path",
                  {
                    d: "M3 4.5L6 7.5L9 4.5",
                    stroke: "currentColor",
                    strokeWidth: "1.5",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                  }
                )
              }
            ),
            k && /* @__PURE__ */ e(
              "ul",
              {
                ref: $,
                id: W,
                role: "listbox",
                className: re.listbox,
                "aria-multiselectable": s,
                "aria-label": _ ?? "Options",
                children: i ? /* @__PURE__ */ d("li", { className: re.loading, role: "presentation", children: [
                  /* @__PURE__ */ e("span", { className: re.spinner, "aria-hidden": "true" }),
                  "Loading..."
                ] }) : S.length === 0 ? /* @__PURE__ */ e("li", { className: re.noResults, role: "presentation", children: a }) : S.map((E, M) => {
                  const V = I.includes(E.value);
                  return /* @__PURE__ */ d(
                    "li",
                    {
                      id: `${W}-option-${M}`,
                      role: "option",
                      className: [
                        re.option,
                        V ? re.optionSelected : "",
                        E.disabled ? re.optionDisabled : "",
                        N === M ? re.optionFocused : ""
                      ].filter(Boolean).join(" "),
                      "aria-selected": V,
                      "aria-disabled": E.disabled,
                      onClick: () => {
                        E.disabled || D(E.value);
                      },
                      children: [
                        s && /* @__PURE__ */ e("span", { className: re.checkbox, "aria-hidden": "true", children: V && /* @__PURE__ */ e("svg", { width: "10", height: "10", viewBox: "0 0 10 10", fill: "none", children: /* @__PURE__ */ e("path", { d: "M2 5L4 7L8 3", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }) }) }),
                        /* @__PURE__ */ e("span", { className: re.optionLabel, children: E.label })
                      ]
                    },
                    E.value
                  );
                })
              }
            )
          ]
        }
      ),
      p && /* @__PURE__ */ e("span", { className: re.errorText, role: "alert", children: p })
    ] });
  }
);
Kf.displayName = "ComboBox";
const Yf = "_container_2468r_3", Xf = "_wrapper_2468r_9", Qf = "_label_2468r_13", Jf = "_disabled_2468r_23", eb = "_trigger_2468r_30", tb = "_triggerOpen_2468r_50", nb = "_triggerIcon_2468r_59", rb = "_triggerContent_2468r_72", ob = "_triggerLabel_2468r_79", sb = "_triggerDescription_2468r_89", ib = "_triggerPlaceholder_2468r_98", ab = "_chevron_2468r_103", lb = "_dropdown_2468r_115", cb = "_searchWrapper_2468r_130", db = "_searchIcon_2468r_138", hb = "_search_2468r_130", pb = "_listbox_2468r_160", ub = "_option_2468r_168", mb = "_optionFocused_2468r_179", _b = "_optionSelected_2468r_183", kb = "_optionDisabled_2468r_187", gb = "_optionIcon_2468r_196", yb = "_optionContent_2468r_209", fb = "_optionLabel_2468r_216", bb = "_optionDescription_2468r_223", vb = "_checkmark_2468r_229", xb = "_noResults_2468r_234", Y = {
  container: Yf,
  wrapper: Xf,
  label: Qf,
  disabled: Jf,
  trigger: eb,
  triggerOpen: tb,
  triggerIcon: nb,
  triggerContent: rb,
  triggerLabel: ob,
  triggerDescription: sb,
  triggerPlaceholder: ib,
  chevron: ab,
  dropdown: lb,
  searchWrapper: cb,
  searchIcon: db,
  search: hb,
  listbox: pb,
  option: ub,
  optionFocused: mb,
  optionSelected: _b,
  optionDisabled: kb,
  optionIcon: gb,
  optionContent: yb,
  optionLabel: fb,
  optionDescription: bb,
  checkmark: vb,
  noResults: xb
}, Lb = B(
  ({
    options: n,
    value: t,
    onChange: r,
    label: o,
    icon: s,
    searchable: l = !0,
    disabled: i = !1,
    placeholder: a = "Select context...",
    className: c,
    ...p
  }, _) => {
    const [h, u] = P(!1), [m, k] = P(""), [g, y] = P(-1), w = U(null), N = U(null), v = U(null), L = te(), x = `ubs-context-list-${L}`, $ = `ubs-context-trigger-${L}`, f = n.find((A) => A.value === t), W = K(() => {
      if (!l || !m.trim()) return n;
      const A = m.toLowerCase();
      return n.filter(
        (C) => {
          var T;
          return C.label.toLowerCase().includes(A) || ((T = C.description) == null ? void 0 : T.toLowerCase().includes(A));
        }
      );
    }, [n, m, l]), b = j(() => {
      u(!1), k(""), y(-1);
    }, []);
    H(() => {
      const A = (C) => {
        w.current && !w.current.contains(C.target) && b();
      };
      return h && document.addEventListener("mousedown", A), () => document.removeEventListener("mousedown", A);
    }, [h, b]), H(() => {
      h && l && setTimeout(() => {
        var A;
        return (A = N.current) == null ? void 0 : A.focus();
      }, 0);
    }, [h, l]), H(() => {
      var A;
      h && g >= 0 && v.current && ((A = v.current.querySelectorAll('[role="option"]')[g]) == null || A.scrollIntoView({ block: "nearest" }));
    }, [g, h]);
    const I = () => {
      i || (h ? b() : (u(!0), y(-1)));
    }, S = (A) => {
      r == null || r(A), b();
    }, R = (A) => {
      if (!h) {
        (A.key === "ArrowDown" || A.key === "Enter" || A.key === " ") && (A.preventDefault(), u(!0), y(0));
        return;
      }
      switch (A.key) {
        case "ArrowDown":
          A.preventDefault(), y(
            (C) => C < W.length - 1 ? C + 1 : 0
          );
          break;
        case "ArrowUp":
          A.preventDefault(), y(
            (C) => C > 0 ? C - 1 : W.length - 1
          );
          break;
        case "Enter": {
          A.preventDefault();
          const C = W[g];
          C && !C.disabled && S(C.value);
          break;
        }
        case "Escape":
          A.preventDefault(), b();
          break;
      }
    }, D = [
      Y.container,
      i ? Y.disabled : "",
      c ?? ""
    ].filter(Boolean).join(" ");
    return /* @__PURE__ */ d("div", { ref: _, className: D, ...p, children: [
      o && /* @__PURE__ */ e("span", { className: Y.label, children: o }),
      /* @__PURE__ */ d("div", { ref: w, className: Y.wrapper, children: [
        /* @__PURE__ */ d(
          "button",
          {
            type: "button",
            id: $,
            className: [Y.trigger, h ? Y.triggerOpen : ""].filter(Boolean).join(" "),
            disabled: i,
            "aria-disabled": i,
            "aria-haspopup": "listbox",
            "aria-expanded": h,
            "aria-controls": h ? x : void 0,
            onClick: I,
            onKeyDown: R,
            children: [
              (s || (f == null ? void 0 : f.icon)) && /* @__PURE__ */ e("span", { className: Y.triggerIcon, children: (f == null ? void 0 : f.icon) ?? s }),
              /* @__PURE__ */ e("span", { className: Y.triggerContent, children: f ? /* @__PURE__ */ d(O, { children: [
                /* @__PURE__ */ e("span", { className: Y.triggerLabel, children: f.label }),
                f.description && /* @__PURE__ */ e("span", { className: Y.triggerDescription, children: f.description })
              ] }) : /* @__PURE__ */ e("span", { className: Y.triggerPlaceholder, children: a }) }),
              /* @__PURE__ */ e(
                "svg",
                {
                  className: Y.chevron,
                  width: "12",
                  height: "12",
                  viewBox: "0 0 12 12",
                  fill: "none",
                  xmlns: "http://www.w3.org/2000/svg",
                  "aria-hidden": "true",
                  children: /* @__PURE__ */ e(
                    "path",
                    {
                      d: "M3 4.5L6 7.5L9 4.5",
                      stroke: "currentColor",
                      strokeWidth: "1.5",
                      strokeLinecap: "round",
                      strokeLinejoin: "round"
                    }
                  )
                }
              )
            ]
          }
        ),
        h && /* @__PURE__ */ d("div", { className: Y.dropdown, children: [
          l && /* @__PURE__ */ d("div", { className: Y.searchWrapper, children: [
            /* @__PURE__ */ d(
              "svg",
              {
                className: Y.searchIcon,
                width: "14",
                height: "14",
                viewBox: "0 0 14 14",
                fill: "none",
                "aria-hidden": "true",
                children: [
                  /* @__PURE__ */ e("circle", { cx: "6", cy: "6", r: "4.5", stroke: "currentColor", strokeWidth: "1.5" }),
                  /* @__PURE__ */ e("path", { d: "M9.5 9.5L13 13", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round" })
                ]
              }
            ),
            /* @__PURE__ */ e(
              "input",
              {
                ref: N,
                type: "text",
                className: Y.search,
                placeholder: "Search...",
                value: m,
                onChange: (A) => {
                  k(A.target.value), y(-1);
                },
                onKeyDown: R,
                "aria-label": "Search options",
                "aria-controls": x
              }
            )
          ] }),
          /* @__PURE__ */ e(
            "ul",
            {
              ref: v,
              id: x,
              role: "listbox",
              className: Y.listbox,
              "aria-label": o ?? "Context options",
              "aria-activedescendant": g >= 0 ? `${x}-option-${g}` : void 0,
              children: W.length === 0 ? /* @__PURE__ */ e("li", { className: Y.noResults, role: "presentation", children: "No results found" }) : W.map((A, C) => {
                const T = A.value === t;
                return /* @__PURE__ */ d(
                  "li",
                  {
                    id: `${x}-option-${C}`,
                    role: "option",
                    className: [
                      Y.option,
                      T ? Y.optionSelected : "",
                      A.disabled ? Y.optionDisabled : "",
                      g === C ? Y.optionFocused : ""
                    ].filter(Boolean).join(" "),
                    "aria-selected": T,
                    "aria-disabled": A.disabled,
                    onClick: () => {
                      A.disabled || S(A.value);
                    },
                    children: [
                      A.icon && /* @__PURE__ */ e("span", { className: Y.optionIcon, children: A.icon }),
                      /* @__PURE__ */ d("span", { className: Y.optionContent, children: [
                        /* @__PURE__ */ e("span", { className: Y.optionLabel, children: A.label }),
                        A.description && /* @__PURE__ */ e("span", { className: Y.optionDescription, children: A.description })
                      ] }),
                      T && /* @__PURE__ */ e(
                        "svg",
                        {
                          className: Y.checkmark,
                          width: "14",
                          height: "14",
                          viewBox: "0 0 14 14",
                          fill: "none",
                          "aria-hidden": "true",
                          children: /* @__PURE__ */ e("path", { d: "M3 7L6 10L11 4", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" })
                        }
                      )
                    ]
                  },
                  A.value
                );
              })
            }
          )
        ] })
      ] })
    ] });
  }
);
Lb.displayName = "ContextSelector";
const wb = "_container_139st_3", Nb = "_wrapper_139st_10", $b = "_label_139st_14", Ib = "_disabled_139st_22", Wb = "_trigger_139st_29", Ab = "_triggerOpen_139st_47", Bb = "_error_139st_56", Cb = "_small_139st_62", Sb = "_medium_139st_68", Mb = "_large_139st_74", Tb = "_triggerValue_139st_82", Db = "_triggerPlaceholder_139st_90", Eb = "_chevron_139st_98", Ob = "_listbox_139st_110", jb = "_groupLabel_139st_127", Fb = "_group_139st_127", Rb = "_option_139st_145", Pb = "_optionFocused_139st_159", zb = "_optionSelected_139st_163", Hb = "_optionDisabled_139st_167", qb = "_optionLabel_139st_176", Gb = "_checkmark_139st_180", Ub = "_errorText_139st_187", Vb = "_helperText_139st_194", oe = {
  container: wb,
  wrapper: Nb,
  label: $b,
  disabled: Ib,
  trigger: Wb,
  triggerOpen: Ab,
  error: Bb,
  small: Cb,
  medium: Sb,
  large: Mb,
  triggerValue: Tb,
  triggerPlaceholder: Db,
  chevron: Eb,
  listbox: Ob,
  groupLabel: jb,
  group: Fb,
  option: Rb,
  optionFocused: Pb,
  optionSelected: zb,
  optionDisabled: Hb,
  optionLabel: qb,
  checkmark: Gb,
  errorText: Ub,
  helperText: Vb
}, Zb = B(
  ({
    options: n,
    value: t,
    onChange: r,
    placeholder: o = "Select...",
    disabled: s = !1,
    size: l = "medium",
    error: i,
    label: a,
    helperText: c,
    className: p,
    ..._
  }, h) => {
    const [u, m] = P(!1), [k, g] = P(-1), y = U(null), w = U(null), N = te(), v = `ubs-dropdown-list-${N}`, L = `ubs-dropdown-trigger-${N}`, x = `ubs-dropdown-label-${N}`, $ = K(() => {
      const T = [];
      for (const q of n)
        "options" in q ? T.push(...q.options) : T.push(q);
      return T;
    }, [n]), f = $.find((T) => T.value === t), W = j(() => {
      m(!1), g(-1);
    }, []);
    H(() => {
      const T = (q) => {
        y.current && !y.current.contains(q.target) && W();
      };
      return u && document.addEventListener("mousedown", T), () => document.removeEventListener("mousedown", T);
    }, [u, W]), H(() => {
      var T;
      u && k >= 0 && w.current && ((T = w.current.querySelectorAll('[role="option"]')[k]) == null || T.scrollIntoView({ block: "nearest" }));
    }, [k, u]);
    const b = () => {
      if (!s)
        if (u)
          W();
        else {
          m(!0);
          const T = $.findIndex((q) => q.value === t);
          g(T >= 0 ? T : 0);
        }
    }, I = (T) => {
      r == null || r(T), W();
    }, S = $.map((T, q) => ({ opt: T, index: q })).filter(({ opt: T }) => !T.disabled), R = (T) => {
      if (!u) {
        (T.key === "ArrowDown" || T.key === "Enter" || T.key === " ") && (T.preventDefault(), b());
        return;
      }
      switch (T.key) {
        case "ArrowDown": {
          T.preventDefault();
          const q = S.findIndex((E) => E.index === k), z = S[(q + 1) % S.length];
          z && g(z.index);
          break;
        }
        case "ArrowUp": {
          T.preventDefault();
          const q = S.findIndex((E) => E.index === k), z = S[(q - 1 + S.length) % S.length];
          z && g(z.index);
          break;
        }
        case "Enter":
        case " ": {
          T.preventDefault();
          const q = $[k];
          q && !q.disabled && I(q.value);
          break;
        }
        case "Escape":
          T.preventDefault(), W();
          break;
        case "Tab":
          W();
          break;
        case "Home": {
          T.preventDefault();
          const q = S[0];
          q && g(q.index);
          break;
        }
        case "End": {
          T.preventDefault();
          const q = S[S.length - 1];
          q && g(q.index);
          break;
        }
      }
    }, D = [
      oe.container,
      oe[l],
      s ? oe.disabled : "",
      i ? oe.error : "",
      p ?? ""
    ].filter(Boolean).join(" ");
    let A = 0;
    const C = (T) => {
      const q = A++, z = T.value === t;
      return /* @__PURE__ */ d(
        "li",
        {
          id: `${v}-option-${q}`,
          role: "option",
          className: [
            oe.option,
            z ? oe.optionSelected : "",
            T.disabled ? oe.optionDisabled : "",
            k === q ? oe.optionFocused : ""
          ].filter(Boolean).join(" "),
          "aria-selected": z,
          "aria-disabled": T.disabled,
          onClick: () => {
            T.disabled || I(T.value);
          },
          children: [
            /* @__PURE__ */ e("span", { className: oe.optionLabel, children: T.label }),
            z && /* @__PURE__ */ e(
              "svg",
              {
                className: oe.checkmark,
                width: "14",
                height: "14",
                viewBox: "0 0 14 14",
                fill: "none",
                "aria-hidden": "true",
                children: /* @__PURE__ */ e("path", { d: "M3 7L6 10L11 4", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" })
              }
            )
          ]
        },
        T.value
      );
    };
    return /* @__PURE__ */ d("div", { ref: h, className: D, ..._, children: [
      a && /* @__PURE__ */ e("label", { id: x, className: oe.label, children: a }),
      /* @__PURE__ */ d("div", { ref: y, className: oe.wrapper, children: [
        /* @__PURE__ */ d(
          "button",
          {
            type: "button",
            id: L,
            className: [oe.trigger, u ? oe.triggerOpen : ""].filter(Boolean).join(" "),
            disabled: s,
            "aria-disabled": s,
            "aria-haspopup": "listbox",
            "aria-expanded": u,
            "aria-controls": u ? v : void 0,
            "aria-labelledby": a ? `${x} ${L}` : void 0,
            "aria-invalid": !!i,
            onClick: b,
            onKeyDown: R,
            children: [
              /* @__PURE__ */ e("span", { className: f ? oe.triggerValue : oe.triggerPlaceholder, children: (f == null ? void 0 : f.label) ?? o }),
              /* @__PURE__ */ e(
                "svg",
                {
                  className: oe.chevron,
                  width: "12",
                  height: "12",
                  viewBox: "0 0 12 12",
                  fill: "none",
                  xmlns: "http://www.w3.org/2000/svg",
                  "aria-hidden": "true",
                  children: /* @__PURE__ */ e(
                    "path",
                    {
                      d: "M3 4.5L6 7.5L9 4.5",
                      stroke: "currentColor",
                      strokeWidth: "1.5",
                      strokeLinecap: "round",
                      strokeLinejoin: "round"
                    }
                  )
                }
              )
            ]
          }
        ),
        u && /* @__PURE__ */ e(
          "ul",
          {
            ref: w,
            id: v,
            role: "listbox",
            className: oe.listbox,
            "aria-label": a ?? "Options",
            "aria-activedescendant": k >= 0 ? `${v}-option-${k}` : void 0,
            onKeyDown: R,
            tabIndex: -1,
            children: n.map((T, q) => "options" in T ? /* @__PURE__ */ d("li", { role: "presentation", children: [
              /* @__PURE__ */ e("span", { className: oe.groupLabel, children: T.label }),
              /* @__PURE__ */ e("ul", { role: "group", "aria-label": T.label, className: oe.group, children: T.options.map(C) })
            ] }, q) : C(T))
          }
        )
      ] }),
      i && /* @__PURE__ */ e("span", { className: oe.errorText, role: "alert", children: i }),
      c && !i && /* @__PURE__ */ e("span", { className: oe.helperText, children: c })
    ] });
  }
);
Zb.displayName = "Dropdown";
const Kb = "_container_1iy63_3", Yb = "_label_1iy63_10", Xb = "_disabled_1iy63_18", Qb = "_sliderWrapper_1iy63_25", Jb = "_minLabel_1iy63_31", ev = "_maxLabel_1iy63_32", tv = "_trackWrapper_1iy63_39", nv = "_track_1iy63_39", rv = "_fill_1iy63_58", ov = "_thumb_1iy63_69", sv = "_valueLabel_1iy63_100", iv = "_mark_1iy63_128", av = "_markDot_1iy63_135", lv = "_markLabel_1iy63_145", Ne = {
  container: Kb,
  label: Yb,
  disabled: Xb,
  sliderWrapper: Qb,
  minLabel: Jb,
  maxLabel: ev,
  trackWrapper: tv,
  track: nv,
  fill: rv,
  thumb: ov,
  valueLabel: sv,
  mark: iv,
  markDot: av,
  markLabel: lv
}, cv = B(
  ({
    min: n = 0,
    max: t = 100,
    step: r = 1,
    value: o,
    onChange: s,
    range: l = !1,
    showValue: i = !0,
    marks: a,
    disabled: c = !1,
    label: p,
    className: _,
    ...h
  }, u) => {
    te();
    const m = U(null), k = l ? [n, t] : [n, n], g = Array.isArray(o) ? o : o !== void 0 ? [o, o] : k, [y, w] = P(null), N = (D) => Math.min(t, Math.max(n, D)), v = (D) => Math.round((D - n) / r) * r + n, L = (D) => (D - n) / (t - n) * 100, x = j(
      (D) => {
        if (!m.current) return n;
        const A = m.current.getBoundingClientRect(), C = (D - A.left) / A.width;
        return v(N(n + C * (t - n)));
      },
      [n, t, r]
    ), $ = j(
      (D, A) => {
        if (s)
          if (l) {
            const C = D === "low" ? [Math.min(A, g[1]), g[1]] : [g[0], Math.max(A, g[0])];
            s(C);
          } else
            s(A);
      },
      [s, l, g]
    ), f = (D) => {
      if (c) return;
      const A = x(D.clientX);
      if (l) {
        const C = Math.abs(A - g[0]), T = Math.abs(A - g[1]);
        $(C <= T ? "low" : "high", A);
      } else
        $("low", A);
    };
    H(() => {
      if (!y) return;
      const D = (C) => {
        const T = x(C.clientX);
        $(y, T);
      }, A = () => w(null);
      return document.addEventListener("mousemove", D), document.addEventListener("mouseup", A), () => {
        document.removeEventListener("mousemove", D), document.removeEventListener("mouseup", A);
      };
    }, [y, x, $]);
    const W = (D) => (A) => {
      let C = null;
      const T = D === "low" ? g[0] : g[1];
      switch (A.key) {
        case "ArrowRight":
        case "ArrowUp":
          A.preventDefault(), C = N(v(T + r));
          break;
        case "ArrowLeft":
        case "ArrowDown":
          A.preventDefault(), C = N(v(T - r));
          break;
        case "Home":
          A.preventDefault(), C = n;
          break;
        case "End":
          A.preventDefault(), C = t;
          break;
        case "PageUp":
          A.preventDefault(), C = N(v(T + r * 10));
          break;
        case "PageDown":
          A.preventDefault(), C = N(v(T - r * 10));
          break;
      }
      C !== null && $(D, C);
    }, b = L(g[0]), I = l ? L(g[1]) : b, S = [
      Ne.container,
      c ? Ne.disabled : "",
      _ ?? ""
    ].filter(Boolean).join(" "), R = (D, A, C) => /* @__PURE__ */ e(
      "div",
      {
        className: Ne.thumb,
        role: "slider",
        tabIndex: c ? -1 : 0,
        "aria-valuenow": A,
        "aria-valuemin": n,
        "aria-valuemax": t,
        "aria-label": l ? D === "low" ? `${p ?? "Slider"} minimum` : `${p ?? "Slider"} maximum` : p ?? "Slider",
        "aria-disabled": c,
        style: { left: `${C}%` },
        onMouseDown: (T) => {
          T.preventDefault(), c || w(D);
        },
        onKeyDown: W(D),
        children: i && /* @__PURE__ */ e("span", { className: Ne.valueLabel, "aria-hidden": "true", children: A })
      }
    );
    return /* @__PURE__ */ d("div", { ref: u, className: S, ...h, children: [
      p && /* @__PURE__ */ e("span", { className: Ne.label, children: p }),
      /* @__PURE__ */ d("div", { className: Ne.sliderWrapper, children: [
        /* @__PURE__ */ e("span", { className: Ne.minLabel, "aria-hidden": "true", children: n }),
        /* @__PURE__ */ d("div", { className: Ne.trackWrapper, children: [
          /* @__PURE__ */ d(
            "div",
            {
              ref: m,
              className: Ne.track,
              onClick: f,
              children: [
                /* @__PURE__ */ e(
                  "div",
                  {
                    className: Ne.fill,
                    style: l ? { left: `${b}%`, width: `${I - b}%` } : { left: "0%", width: `${b}%` }
                  }
                ),
                a == null ? void 0 : a.map((D) => {
                  const A = L(D.value);
                  return /* @__PURE__ */ d(
                    "div",
                    {
                      className: Ne.mark,
                      style: { left: `${A}%` },
                      children: [
                        /* @__PURE__ */ e("span", { className: Ne.markDot }),
                        D.label && /* @__PURE__ */ e("span", { className: Ne.markLabel, children: D.label })
                      ]
                    },
                    D.value
                  );
                })
              ]
            }
          ),
          R("low", g[0], b),
          l && R("high", g[1], I)
        ] }),
        /* @__PURE__ */ e("span", { className: Ne.maxLabel, "aria-hidden": "true", children: t })
      ] })
    ] });
  }
);
cv.displayName = "Slider";
const dv = "_container_qzyn3_3", hv = "_labelLeft_qzyn3_11", pv = "_labelRight_qzyn3_15", uv = "_disabled_qzyn3_19", mv = "_label_qzyn3_11", _v = "_input_qzyn3_34", kv = "_switchWrapper_qzyn3_48", gv = "_track_qzyn3_57", yv = "_trackOff_qzyn3_64", fv = "_trackOn_qzyn3_68", bv = "_thumb_qzyn3_74", vv = "_small_qzyn3_86", xv = "_medium_qzyn3_104", Lv = "_large_qzyn3_122", Ie = {
  container: dv,
  labelLeft: hv,
  labelRight: pv,
  disabled: uv,
  label: mv,
  input: _v,
  switchWrapper: kv,
  track: gv,
  trackOff: yv,
  trackOn: fv,
  thumb: bv,
  small: vv,
  medium: xv,
  large: Lv
}, wv = B(
  ({
    checked: n = !1,
    onChange: t,
    label: r,
    labelPosition: o = "right",
    disabled: s = !1,
    size: l = "medium",
    className: i,
    id: a,
    ...c
  }, p) => {
    const _ = te(), h = a ?? `ubs-switch-${_}`, u = [
      Ie.container,
      Ie[l],
      o === "left" ? Ie.labelLeft : Ie.labelRight,
      s ? Ie.disabled : "",
      i ?? ""
    ].filter(Boolean).join(" ");
    return /* @__PURE__ */ d("label", { htmlFor: h, className: u, children: [
      r && o === "left" && /* @__PURE__ */ e("span", { className: Ie.label, children: r }),
      /* @__PURE__ */ d("span", { className: Ie.switchWrapper, children: [
        /* @__PURE__ */ e(
          "input",
          {
            ref: p,
            id: h,
            type: "checkbox",
            role: "switch",
            className: Ie.input,
            checked: n,
            onChange: t,
            disabled: s,
            "aria-checked": n,
            "aria-disabled": s,
            ...c
          }
        ),
        /* @__PURE__ */ e(
          "span",
          {
            className: [Ie.track, n ? Ie.trackOn : Ie.trackOff].filter(Boolean).join(" "),
            "aria-hidden": "true",
            children: /* @__PURE__ */ e("span", { className: Ie.thumb })
          }
        )
      ] }),
      r && o === "right" && /* @__PURE__ */ e("span", { className: Ie.label, children: r })
    ] });
  }
);
wv.displayName = "Switch";
const Nv = "_container_balsd_3", $v = "_label_balsd_10", Iv = "_disabled_balsd_18", Wv = "_hiddenInput_balsd_23", Av = "_dropzone_balsd_37", Bv = "_dropzoneActive_balsd_55", Cv = "_error_balsd_65", Sv = "_uploadIcon_balsd_69", Mv = "_dropzoneText_balsd_73", Tv = "_dropzoneHint_balsd_86", Dv = "_browseButton_balsd_95", Ev = "_compact_balsd_129", Ov = "_compactButton_balsd_135", jv = "_compactText_balsd_156", Fv = "_fileList_balsd_164", Rv = "_fileItem_balsd_173", Pv = "_fileIcon_balsd_182", zv = "_fileName_balsd_187", Hv = "_fileSize_balsd_198", qv = "_fileRemove_balsd_205", Gv = "_errorText_balsd_233", Uv = "_helperText_balsd_240", se = {
  container: Nv,
  label: $v,
  disabled: Iv,
  hiddenInput: Wv,
  dropzone: Av,
  dropzoneActive: Bv,
  error: Cv,
  uploadIcon: Sv,
  dropzoneText: Mv,
  dropzoneHint: Tv,
  browseButton: Dv,
  compact: Ev,
  compactButton: Ov,
  compactText: jv,
  fileList: Fv,
  fileItem: Rv,
  fileIcon: Pv,
  fileName: zv,
  fileSize: Hv,
  fileRemove: qv,
  errorText: Gv,
  helperText: Uv
}, Vv = B(
  ({
    accept: n,
    multiple: t = !0,
    maxSize: r,
    maxFiles: o,
    onUpload: s,
    onRemove: l,
    files: i = [],
    variant: a = "dropzone",
    disabled: c = !1,
    label: p,
    helperText: _,
    error: h,
    className: u,
    ...m
  }, k) => {
    const [g, y] = P(!1), w = U(null), v = `ubs-fileupload-${te()}`, L = (C) => C < 1024 ? `${C} B` : C < 1024 * 1024 ? `${(C / 1024).toFixed(1)} KB` : `${(C / (1024 * 1024)).toFixed(1)} MB`, x = j(
      (C) => {
        if (!C || c) return;
        const T = [], q = i.length, z = o ? o - q : 1 / 0;
        for (let E = 0; E < Math.min(C.length, z); E++) {
          const M = C[E];
          r && M.size > r || T.push({
            id: `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`,
            name: M.name,
            size: M.size,
            type: M.type,
            file: M
          });
        }
        T.length > 0 && (s == null || s(T));
      },
      [c, i.length, o, r, s]
    ), $ = (C) => {
      C.preventDefault(), C.stopPropagation(), c || y(!0);
    }, f = (C) => {
      C.preventDefault(), C.stopPropagation(), y(!1);
    }, W = (C) => {
      C.preventDefault(), C.stopPropagation(), y(!1), x(C.dataTransfer.files);
    }, b = (C) => {
      x(C.target.files), w.current && (w.current.value = "");
    }, I = () => {
      var C;
      c || (C = w.current) == null || C.click();
    }, S = [
      se.container,
      c ? se.disabled : "",
      h ? se.error : "",
      u ?? ""
    ].filter(Boolean).join(" "), R = () => /* @__PURE__ */ d(
      "div",
      {
        className: [
          se.dropzone,
          g ? se.dropzoneActive : ""
        ].filter(Boolean).join(" "),
        onDragOver: $,
        onDragLeave: f,
        onDrop: W,
        onClick: I,
        role: "button",
        tabIndex: c ? -1 : 0,
        "aria-label": "Upload files by clicking or dragging",
        onKeyDown: (C) => {
          (C.key === "Enter" || C.key === " ") && (C.preventDefault(), I());
        },
        children: [
          /* @__PURE__ */ d(
            "svg",
            {
              className: se.uploadIcon,
              width: "32",
              height: "32",
              viewBox: "0 0 32 32",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              "aria-hidden": "true",
              children: [
                /* @__PURE__ */ e(
                  "path",
                  {
                    d: "M16 4L16 22M16 4L10 10M16 4L22 10",
                    stroke: "currentColor",
                    strokeWidth: "2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                  }
                ),
                /* @__PURE__ */ e(
                  "path",
                  {
                    d: "M6 20V26C6 27.1046 6.89543 28 8 28H24C25.1046 28 26 27.1046 26 26V20",
                    stroke: "currentColor",
                    strokeWidth: "2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ d("span", { className: se.dropzoneText, children: [
            /* @__PURE__ */ e("strong", { children: "Click to upload" }),
            " or drag and drop"
          ] }),
          (n || r) && /* @__PURE__ */ d("span", { className: se.dropzoneHint, children: [
            n && `Accepted: ${n}`,
            n && r && " · ",
            r && `Max size: ${L(r)}`
          ] })
        ]
      }
    ), D = () => /* @__PURE__ */ d(
      "button",
      {
        type: "button",
        className: se.browseButton,
        onClick: I,
        disabled: c,
        "aria-disabled": c,
        children: [
          /* @__PURE__ */ d(
            "svg",
            {
              width: "16",
              height: "16",
              viewBox: "0 0 16 16",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              "aria-hidden": "true",
              children: [
                /* @__PURE__ */ e(
                  "path",
                  {
                    d: "M8 2L8 12M8 2L5 5M8 2L11 5",
                    stroke: "currentColor",
                    strokeWidth: "1.5",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                  }
                ),
                /* @__PURE__ */ e(
                  "path",
                  {
                    d: "M3 10V13C3 13.5523 3.44772 14 4 14H12C12.5523 14 13 13.5523 13 13V10",
                    stroke: "currentColor",
                    strokeWidth: "1.5",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                  }
                )
              ]
            }
          ),
          "Upload files"
        ]
      }
    ), A = () => /* @__PURE__ */ d("div", { className: se.compact, children: [
      /* @__PURE__ */ e(
        "button",
        {
          type: "button",
          className: se.compactButton,
          onClick: I,
          disabled: c,
          "aria-disabled": c,
          children: "Browse..."
        }
      ),
      /* @__PURE__ */ e("span", { className: se.compactText, children: i.length > 0 ? `${i.length} file${i.length > 1 ? "s" : ""} selected` : "No file selected" })
    ] });
    return /* @__PURE__ */ d("div", { ref: k, className: S, ...m, children: [
      p && /* @__PURE__ */ e("label", { htmlFor: v, className: se.label, children: p }),
      /* @__PURE__ */ e(
        "input",
        {
          ref: w,
          id: v,
          type: "file",
          className: se.hiddenInput,
          accept: n,
          multiple: t,
          disabled: c,
          onChange: b,
          tabIndex: -1,
          "aria-hidden": "true"
        }
      ),
      a === "dropzone" && R(),
      a === "button" && D(),
      a === "compact" && A(),
      i.length > 0 && /* @__PURE__ */ e("ul", { className: se.fileList, "aria-label": "Uploaded files", children: i.map((C) => /* @__PURE__ */ d("li", { className: se.fileItem, children: [
        /* @__PURE__ */ d(
          "svg",
          {
            className: se.fileIcon,
            width: "16",
            height: "16",
            viewBox: "0 0 16 16",
            fill: "none",
            "aria-hidden": "true",
            children: [
              /* @__PURE__ */ e(
                "path",
                {
                  d: "M4 2H9L12 5V14H4V2Z",
                  stroke: "currentColor",
                  strokeWidth: "1.5",
                  strokeLinejoin: "round"
                }
              ),
              /* @__PURE__ */ e("path", { d: "M9 2V5H12", stroke: "currentColor", strokeWidth: "1.5", strokeLinejoin: "round" })
            ]
          }
        ),
        /* @__PURE__ */ e("span", { className: se.fileName, children: C.name }),
        /* @__PURE__ */ e("span", { className: se.fileSize, children: L(C.size) }),
        /* @__PURE__ */ e(
          "button",
          {
            type: "button",
            className: se.fileRemove,
            "aria-label": `Remove ${C.name}`,
            onClick: () => l == null ? void 0 : l(C.id),
            disabled: c,
            children: /* @__PURE__ */ e("svg", { width: "12", height: "12", viewBox: "0 0 12 12", fill: "none", "aria-hidden": "true", children: /* @__PURE__ */ e("path", { d: "M3 3L9 9M9 3L3 9", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round" }) })
          }
        )
      ] }, C.id)) }),
      h && /* @__PURE__ */ e("span", { className: se.errorText, role: "alert", children: h }),
      _ && !h && /* @__PURE__ */ e("span", { className: se.helperText, children: _ })
    ] });
  }
);
Vv.displayName = "FileUpload";
const Zv = "_container_1ddix_3", Kv = "_wrapper_1ddix_10", Yv = "_label_1ddix_14", Xv = "_disabled_1ddix_22", Qv = "_trigger_1ddix_29", Jv = "_triggerOpen_1ddix_50", e4 = "_error_1ddix_59", t4 = "_clockIcon_1ddix_63", n4 = "_triggerValue_1ddix_68", r4 = "_triggerPlaceholder_1ddix_74", o4 = "_chevron_1ddix_79", s4 = "_dropdown_1ddix_91", i4 = "_columns_1ddix_105", a4 = "_column_1ddix_105", l4 = "_columnLabel_1ddix_116", c4 = "_columnList_1ddix_129", d4 = "_columnItem_1ddix_138", h4 = "_columnItemSelected_1ddix_156", p4 = "_periodItem_1ddix_166", u4 = "_separator_1ddix_171", m4 = "_footer_1ddix_184", _4 = "_nowButton_1ddix_192", k4 = "_doneButton_1ddix_193", g4 = "_errorText_1ddix_231", y4 = "_helperText_1ddix_238", Z = {
  container: Zv,
  wrapper: Kv,
  label: Yv,
  disabled: Xv,
  trigger: Qv,
  triggerOpen: Jv,
  error: e4,
  clockIcon: t4,
  triggerValue: n4,
  triggerPlaceholder: r4,
  chevron: o4,
  dropdown: s4,
  columns: i4,
  column: a4,
  columnLabel: l4,
  columnList: c4,
  columnItem: d4,
  columnItemSelected: h4,
  periodItem: p4,
  separator: u4,
  footer: m4,
  nowButton: _4,
  doneButton: k4,
  errorText: g4,
  helperText: y4
}, f4 = B(
  ({
    value: n,
    onChange: t,
    format: r = "24h",
    showSeconds: o = !1,
    min: s,
    max: l,
    disabled: i = !1,
    label: a,
    error: c,
    helperText: p,
    placeholder: _ = "Select time",
    className: h,
    ...u
  }, m) => {
    const [k, g] = P(!1), y = U(null), w = te(), N = `ubs-timepicker-${w}`, v = `ubs-timepicker-input-${w}`, x = n ?? {
      hours: r === "12h" ? 12 : 0,
      minutes: 0,
      seconds: 0,
      period: r === "12h" ? "AM" : void 0
    }, $ = j(() => g(!1), []);
    H(() => {
      const M = (V) => {
        y.current && !y.current.contains(V.target) && $();
      };
      return k && document.addEventListener("mousedown", M), () => document.removeEventListener("mousedown", M);
    }, [k, $]);
    const f = () => {
      if (!n) return "";
      const M = String(n.hours).padStart(2, "0"), V = String(n.minutes).padStart(2, "0"), J = String(n.seconds).padStart(2, "0");
      let Ee = `${M}:${V}`;
      return o && (Ee += `:${J}`), r === "12h" && n.period && (Ee += ` ${n.period}`), Ee;
    }, W = (M) => {
      t && t({ ...x, ...M });
    }, b = K(() => r === "12h" ? Array.from({ length: 12 }, (M, V) => V + 1) : Array.from({ length: 24 }, (M, V) => V), [r]), I = K(
      () => Array.from({ length: 60 }, (M, V) => V),
      []
    ), S = K(
      () => Array.from({ length: 60 }, (M, V) => V),
      []
    ), R = () => {
      i || g((M) => !M);
    }, D = (M) => {
      M.key === "Escape" ? (M.preventDefault(), $()) : !k && (M.key === "Enter" || M.key === " " || M.key === "ArrowDown") && (M.preventDefault(), g(!0));
    }, A = (M, V) => {
      if (!M) return;
      const J = M.querySelectorAll('[role="option"]');
      for (const Ee of J)
        if (Number(Ee.dataset.value) === V) {
          Ee.scrollIntoView({ block: "nearest" });
          break;
        }
    }, C = U(null), T = U(null), q = U(null);
    H(() => {
      k && requestAnimationFrame(() => {
        A(C.current, x.hours), A(T.current, x.minutes), o && A(q.current, x.seconds);
      });
    }, [k]);
    const z = [
      Z.container,
      i ? Z.disabled : "",
      c ? Z.error : "",
      h ?? ""
    ].filter(Boolean).join(" "), E = (M, V, J, Ee, un) => /* @__PURE__ */ d("div", { className: Z.column, children: [
      /* @__PURE__ */ e("span", { className: Z.columnLabel, "aria-hidden": "true", children: M }),
      /* @__PURE__ */ e(
        "ul",
        {
          ref: un,
          role: "listbox",
          className: Z.columnList,
          "aria-label": M,
          children: V.map((yt) => /* @__PURE__ */ e(
            "li",
            {
              role: "option",
              className: [
                Z.columnItem,
                yt === J ? Z.columnItemSelected : ""
              ].filter(Boolean).join(" "),
              "data-value": yt,
              "aria-selected": yt === J,
              onClick: () => Ee(yt),
              tabIndex: yt === J ? 0 : -1,
              children: String(yt).padStart(2, "0")
            },
            yt
          ))
        }
      )
    ] });
    return /* @__PURE__ */ d("div", { ref: m, className: z, ...u, children: [
      a && /* @__PURE__ */ e("label", { htmlFor: v, className: Z.label, children: a }),
      /* @__PURE__ */ d("div", { ref: y, className: Z.wrapper, children: [
        /* @__PURE__ */ d(
          "button",
          {
            type: "button",
            id: v,
            className: [Z.trigger, k ? Z.triggerOpen : ""].filter(Boolean).join(" "),
            disabled: i,
            "aria-disabled": i,
            "aria-haspopup": "dialog",
            "aria-expanded": k,
            "aria-controls": k ? N : void 0,
            "aria-invalid": !!c,
            onClick: R,
            onKeyDown: D,
            children: [
              /* @__PURE__ */ d(
                "svg",
                {
                  className: Z.clockIcon,
                  width: "16",
                  height: "16",
                  viewBox: "0 0 16 16",
                  fill: "none",
                  xmlns: "http://www.w3.org/2000/svg",
                  "aria-hidden": "true",
                  children: [
                    /* @__PURE__ */ e("circle", { cx: "8", cy: "8", r: "6.5", stroke: "currentColor", strokeWidth: "1.5" }),
                    /* @__PURE__ */ e("path", { d: "M8 4.5V8L10.5 9.5", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" })
                  ]
                }
              ),
              /* @__PURE__ */ e("span", { className: n ? Z.triggerValue : Z.triggerPlaceholder, children: n ? f() : _ }),
              /* @__PURE__ */ e(
                "svg",
                {
                  className: Z.chevron,
                  width: "12",
                  height: "12",
                  viewBox: "0 0 12 12",
                  fill: "none",
                  xmlns: "http://www.w3.org/2000/svg",
                  "aria-hidden": "true",
                  children: /* @__PURE__ */ e(
                    "path",
                    {
                      d: "M3 4.5L6 7.5L9 4.5",
                      stroke: "currentColor",
                      strokeWidth: "1.5",
                      strokeLinecap: "round",
                      strokeLinejoin: "round"
                    }
                  )
                }
              )
            ]
          }
        ),
        k && /* @__PURE__ */ d(
          "div",
          {
            id: N,
            role: "dialog",
            className: Z.dropdown,
            "aria-label": "Time picker",
            children: [
              /* @__PURE__ */ d("div", { className: Z.columns, children: [
                E(
                  "Hours",
                  b,
                  x.hours,
                  (M) => W({ hours: M }),
                  C
                ),
                /* @__PURE__ */ e("div", { className: Z.separator, "aria-hidden": "true", children: ":" }),
                E(
                  "Minutes",
                  I,
                  x.minutes,
                  (M) => W({ minutes: M }),
                  T
                ),
                o && /* @__PURE__ */ d(O, { children: [
                  /* @__PURE__ */ e("div", { className: Z.separator, "aria-hidden": "true", children: ":" }),
                  E(
                    "Seconds",
                    S,
                    x.seconds,
                    (M) => W({ seconds: M }),
                    q
                  )
                ] }),
                r === "12h" && /* @__PURE__ */ d("div", { className: Z.column, children: [
                  /* @__PURE__ */ e("span", { className: Z.columnLabel, "aria-hidden": "true", children: "Period" }),
                  /* @__PURE__ */ e(
                    "ul",
                    {
                      role: "listbox",
                      className: Z.columnList,
                      "aria-label": "AM/PM",
                      children: ["AM", "PM"].map((M) => /* @__PURE__ */ e(
                        "li",
                        {
                          role: "option",
                          className: [
                            Z.columnItem,
                            Z.periodItem,
                            x.period === M ? Z.columnItemSelected : ""
                          ].filter(Boolean).join(" "),
                          "aria-selected": x.period === M,
                          onClick: () => W({ period: M }),
                          tabIndex: x.period === M ? 0 : -1,
                          children: M
                        },
                        M
                      ))
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ d("div", { className: Z.footer, children: [
                /* @__PURE__ */ e(
                  "button",
                  {
                    type: "button",
                    className: Z.nowButton,
                    onClick: () => {
                      const M = /* @__PURE__ */ new Date();
                      let V = M.getHours(), J;
                      r === "12h" && (J = V >= 12 ? "PM" : "AM", V = V % 12 || 12), t == null || t({
                        hours: V,
                        minutes: M.getMinutes(),
                        seconds: M.getSeconds(),
                        period: J
                      });
                    },
                    children: "Now"
                  }
                ),
                /* @__PURE__ */ e(
                  "button",
                  {
                    type: "button",
                    className: Z.doneButton,
                    onClick: $,
                    children: "Done"
                  }
                )
              ] })
            ]
          }
        )
      ] }),
      c && /* @__PURE__ */ e("span", { className: Z.errorText, role: "alert", children: c }),
      p && !c && /* @__PURE__ */ e("span", { className: Z.helperText, children: p })
    ] });
  }
);
f4.displayName = "TimePicker";
const b4 = "_messageBox_n3qg8_5", v4 = "_messageBoxFadeIn_n3qg8_1", x4 = "_info_n3qg8_32", L4 = "_icon_n3qg8_38", w4 = "_warning_n3qg8_42", N4 = "_error_n3qg8_52", $4 = "_success_n3qg8_62", I4 = "_iconWrapper_n3qg8_74", W4 = "_content_n3qg8_87", A4 = "_title_n3qg8_92", B4 = "_description_n3qg8_99", C4 = "_actions_n3qg8_108", S4 = "_actionButton_n3qg8_114", M4 = "_actionPrimary_n3qg8_126", T4 = "_actionSecondary_n3qg8_142", D4 = "_closeButton_n3qg8_159", Te = {
  messageBox: b4,
  messageBoxFadeIn: v4,
  info: x4,
  icon: L4,
  warning: w4,
  error: N4,
  success: $4,
  iconWrapper: I4,
  content: W4,
  title: A4,
  description: B4,
  actions: C4,
  actionButton: S4,
  actionPrimary: M4,
  actionSecondary: T4,
  closeButton: D4
}, E4 = ({ variant: n }) => {
  const t = {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": !0,
    className: Te.icon
  };
  switch (n) {
    case "error":
      return /* @__PURE__ */ e("svg", { ...t, children: /* @__PURE__ */ e("path", { d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" }) });
    case "warning":
      return /* @__PURE__ */ e("svg", { ...t, children: /* @__PURE__ */ e("path", { d: "M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z" }) });
    case "success":
      return /* @__PURE__ */ e("svg", { ...t, children: /* @__PURE__ */ e("path", { d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" }) });
    case "info":
    default:
      return /* @__PURE__ */ e("svg", { ...t, children: /* @__PURE__ */ e("path", { d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-6h2v6zm0-8h-2V7h2v4z" }) });
  }
}, O4 = B(
  ({
    variant: n = "info",
    title: t,
    children: r,
    actions: o,
    icon: s,
    closable: l = !1,
    onClose: i,
    className: a,
    ...c
  }, p) => {
    const [_, h] = P(!0), u = j(() => {
      h(!1), i == null || i();
    }, [i]);
    return _ ? /* @__PURE__ */ d(
      "div",
      {
        ref: p,
        role: {
          error: "alert",
          warning: "alert",
          success: "status",
          info: "status"
        }[n],
        "aria-live": n === "error" || n === "warning" ? "assertive" : "polite",
        className: [Te.messageBox, Te[n], a].filter(Boolean).join(" "),
        ...c,
        children: [
          /* @__PURE__ */ e("span", { className: Te.iconWrapper, children: s ?? /* @__PURE__ */ e(E4, { variant: n }) }),
          /* @__PURE__ */ d("div", { className: Te.content, children: [
            t && /* @__PURE__ */ e("p", { className: Te.title, children: t }),
            r && /* @__PURE__ */ e("div", { className: Te.description, children: r }),
            o && o.length > 0 && /* @__PURE__ */ e("div", { className: Te.actions, children: o.map((k, g) => /* @__PURE__ */ e(
              "button",
              {
                type: "button",
                className: [Te.actionButton, k.primary ? Te.actionPrimary : Te.actionSecondary].join(" "),
                onClick: k.onClick,
                children: k.label
              },
              g
            )) })
          ] }),
          l && /* @__PURE__ */ e(
            "button",
            {
              type: "button",
              className: Te.closeButton,
              onClick: u,
              "aria-label": "Close message",
              children: /* @__PURE__ */ e("svg", { width: "16", height: "16", viewBox: "0 0 16 16", fill: "currentColor", "aria-hidden": "true", children: /* @__PURE__ */ e("path", { d: "M12.207 4.793a1 1 0 0 0-1.414 0L8 7.586 5.207 4.793a1 1 0 1 0-1.414 1.414L6.586 9l-2.793 2.793a1 1 0 1 0 1.414 1.414L8 10.414l2.793 2.793a1 1 0 0 0 1.414-1.414L9.414 9l2.793-2.793a1 1 0 0 0 0-1.414z" }) })
            }
          )
        ]
      }
    ) : null;
  }
);
O4.displayName = "MessageBox";
const j4 = "_summary_17qi2_6", F4 = "_summaryHeader_17qi2_29", R4 = "_summaryIcon_17qi2_36", P4 = "_summaryTitle_17qi2_41", z4 = "_errorList_17qi2_49", H4 = "_errorItem_17qi2_55", q4 = "_fieldName_17qi2_66", G4 = "_errorMessage_17qi2_71", U4 = "_fieldLink_17qi2_75", V4 = "_inlineContainer_17qi2_102", Z4 = "_inlineError_17qi2_108", K4 = "_inlineIcon_17qi2_121", Y4 = "_inlineMessage_17qi2_126", Le = {
  summary: j4,
  summaryHeader: F4,
  summaryIcon: R4,
  summaryTitle: P4,
  errorList: z4,
  errorItem: H4,
  fieldName: q4,
  errorMessage: G4,
  fieldLink: U4,
  inlineContainer: V4,
  inlineError: Z4,
  inlineIcon: K4,
  inlineMessage: Y4
}, X4 = B(
  ({
    errors: n,
    variant: t = "summary",
    title: r = "Please correct the following errors",
    onFieldClick: o,
    className: s,
    ...l
  }, i) => !n || n.length === 0 ? null : t === "inline" ? /* @__PURE__ */ e(
    "div",
    {
      ref: i,
      className: [Le.inlineContainer, s].filter(Boolean).join(" "),
      ...l,
      children: n.map((a, c) => /* @__PURE__ */ d(
        "p",
        {
          className: Le.inlineError,
          role: "alert",
          "aria-live": "polite",
          children: [
            /* @__PURE__ */ e(
              "svg",
              {
                width: "14",
                height: "14",
                viewBox: "0 0 20 20",
                fill: "currentColor",
                "aria-hidden": "true",
                className: Le.inlineIcon,
                children: /* @__PURE__ */ e("path", { d: "M10 0C4.48 0 0 4.48 0 10s4.48 10 10 10 10-4.48 10-10S15.52 0 10 0zm1 15H9v-2h2v2zm0-4H9V5h2v6z" })
              }
            ),
            /* @__PURE__ */ e("span", { className: Le.inlineMessage, children: a.message })
          ]
        },
        `${a.field}-${c}`
      ))
    }
  ) : /* @__PURE__ */ d(
    "div",
    {
      ref: i,
      role: "alert",
      "aria-live": "assertive",
      className: [Le.summary, s].filter(Boolean).join(" "),
      ...l,
      children: [
        /* @__PURE__ */ d("div", { className: Le.summaryHeader, children: [
          /* @__PURE__ */ e(
            "svg",
            {
              width: "20",
              height: "20",
              viewBox: "0 0 20 20",
              fill: "currentColor",
              "aria-hidden": "true",
              className: Le.summaryIcon,
              children: /* @__PURE__ */ e("path", { d: "M10 0C4.48 0 0 4.48 0 10s4.48 10 10 10 10-4.48 10-10S15.52 0 10 0zm1 15H9v-2h2v2zm0-4H9V5h2v6z" })
            }
          ),
          /* @__PURE__ */ e("p", { className: Le.summaryTitle, children: r })
        ] }),
        /* @__PURE__ */ e("ul", { className: Le.errorList, children: n.map((a, c) => /* @__PURE__ */ e("li", { className: Le.errorItem, children: o ? /* @__PURE__ */ d(
          "button",
          {
            type: "button",
            className: Le.fieldLink,
            onClick: () => o(a.field),
            "aria-label": `Go to ${a.field}: ${a.message}`,
            children: [
              /* @__PURE__ */ d("span", { className: Le.fieldName, children: [
                a.field,
                ":"
              ] }),
              " ",
              /* @__PURE__ */ e("span", { className: Le.errorMessage, children: a.message })
            ]
          }
        ) : /* @__PURE__ */ d(O, { children: [
          /* @__PURE__ */ d("span", { className: Le.fieldName, children: [
            a.field,
            ":"
          ] }),
          " ",
          /* @__PURE__ */ e("span", { className: Le.errorMessage, children: a.message })
        ] }) }, `${a.field}-${c}`)) })
      ]
    }
  )
);
X4.displayName = "FormValidation";
const Q4 = "_snackbar_1kke3_4", J4 = "_bottomLeft_1kke3_23", e5 = "_bottomCenter_1kke3_28", t5 = "_bottomRight_1kke3_34", n5 = "_enter_1kke3_41", r5 = "_snackbarSlideIn_1kke3_1", o5 = "_exit_1kke3_45", s5 = "_snackbarSlideOut_1kke3_1", i5 = "_snackbarSlideInCenter_1kke3_1", a5 = "_snackbarSlideOutCenter_1kke3_1", l5 = "_info_1kke3_103", c5 = "_success_1kke3_108", d5 = "_error_1kke3_113", h5 = "_warning_1kke3_118", p5 = "_message_1kke3_126", u5 = "_actionButton_1kke3_135", m5 = "_closeButton_1kke3_162", qe = {
  snackbar: Q4,
  bottomLeft: J4,
  bottomCenter: e5,
  bottomRight: t5,
  enter: n5,
  snackbarSlideIn: r5,
  exit: o5,
  snackbarSlideOut: s5,
  snackbarSlideInCenter: i5,
  snackbarSlideOutCenter: a5,
  info: l5,
  success: c5,
  error: d5,
  warning: h5,
  message: p5,
  actionButton: u5,
  closeButton: m5
}, _5 = B(
  ({
    message: n,
    variant: t = "info",
    duration: r = 5e3,
    action: o,
    onClose: s,
    position: l = "bottom-left",
    open: i = !0,
    className: a,
    ...c
  }, p) => {
    const [_, h] = P(i), [u, m] = P(!1), k = U(null), g = j(() => {
      m(!0), setTimeout(() => {
        h(!1), s == null || s();
      }, 200);
    }, [s]);
    if (H(() => {
      h(i), m(!1);
    }, [i]), H(() => {
      if (_ && r > 0)
        return k.current = setTimeout(g, r), () => {
          k.current && clearTimeout(k.current);
        };
    }, [_, r, g]), !_) return null;
    const y = l === "bottom-center" ? qe.bottomCenter : l === "bottom-right" ? qe.bottomRight : qe.bottomLeft;
    return /* @__PURE__ */ d(
      "div",
      {
        ref: p,
        role: "status",
        "aria-live": "polite",
        "aria-atomic": "true",
        className: [
          qe.snackbar,
          qe[t],
          y,
          u ? qe.exit : qe.enter,
          a
        ].filter(Boolean).join(" "),
        ...c,
        children: [
          /* @__PURE__ */ e("span", { className: qe.message, children: n }),
          o && /* @__PURE__ */ e(
            "button",
            {
              type: "button",
              className: qe.actionButton,
              onClick: (w) => {
                o.onClick(), g();
              },
              children: o.label
            }
          ),
          /* @__PURE__ */ e(
            "button",
            {
              type: "button",
              className: qe.closeButton,
              onClick: g,
              "aria-label": "Dismiss notification",
              children: /* @__PURE__ */ e("svg", { width: "14", height: "14", viewBox: "0 0 16 16", fill: "currentColor", "aria-hidden": "true", children: /* @__PURE__ */ e("path", { d: "M12.207 4.793a1 1 0 0 0-1.414 0L8 7.586 5.207 4.793a1 1 0 1 0-1.414 1.414L6.586 9l-2.793 2.793a1 1 0 1 0 1.414 1.414L8 10.414l2.793 2.793a1 1 0 0 0 1.414-1.414L9.414 9l2.793-2.793a1 1 0 0 0 0-1.414z" }) })
            }
          )
        ]
      }
    );
  }
);
_5.displayName = "Snackbar";
const k5 = "_backdrop_b0k7a_4", g5 = "_backdropFadeIn_b0k7a_1", y5 = "_overlay_b0k7a_20", f5 = "_overlayScaleIn_b0k7a_1", b5 = "_iconWrapper_b0k7a_49", v5 = "_icon_b0k7a_49", x5 = "_success_b0k7a_65", L5 = "_error_b0k7a_70", w5 = "_warning_b0k7a_75", N5 = "_info_b0k7a_80", $5 = "_title_b0k7a_87", I5 = "_message_b0k7a_97", W5 = "_actions_b0k7a_107", A5 = "_actionButton_b0k7a_114", B5 = "_actionPrimary_b0k7a_126", C5 = "_actionSecondary_b0k7a_142", Re = {
  backdrop: k5,
  backdropFadeIn: g5,
  overlay: y5,
  overlayScaleIn: f5,
  iconWrapper: b5,
  icon: v5,
  success: x5,
  error: L5,
  warning: w5,
  info: N5,
  title: $5,
  message: I5,
  actions: W5,
  actionButton: A5,
  actionPrimary: B5,
  actionSecondary: C5
}, S5 = ({ variant: n }) => {
  const t = {
    width: 48,
    height: 48,
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": !0,
    className: Re.icon
  };
  switch (n) {
    case "success":
      return /* @__PURE__ */ e("svg", { ...t, children: /* @__PURE__ */ e("path", { d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" }) });
    case "error":
      return /* @__PURE__ */ e("svg", { ...t, children: /* @__PURE__ */ e("path", { d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" }) });
    case "warning":
      return /* @__PURE__ */ e("svg", { ...t, children: /* @__PURE__ */ e("path", { d: "M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z" }) });
    case "info":
    default:
      return /* @__PURE__ */ e("svg", { ...t, children: /* @__PURE__ */ e("path", { d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-6h2v6zm0-8h-2V7h2v4z" }) });
  }
}, M5 = B(
  ({
    variant: n = "info",
    title: t,
    message: r,
    icon: o,
    actions: s,
    open: l = !1,
    onClose: i,
    className: a,
    ...c
  }, p) => {
    const _ = j(
      (h) => {
        h.key === "Escape" && (i == null || i());
      },
      [i]
    );
    return H(() => {
      if (l)
        return document.addEventListener("keydown", _), () => document.removeEventListener("keydown", _);
    }, [l, _]), l ? /* @__PURE__ */ e(
      "div",
      {
        className: Re.backdrop,
        onClick: (h) => {
          h.target === h.currentTarget && (i == null || i());
        },
        "aria-hidden": "true",
        children: /* @__PURE__ */ d(
          "div",
          {
            ref: p,
            role: "alertdialog",
            "aria-modal": "true",
            "aria-labelledby": t ? "ubs-overlay-title" : void 0,
            "aria-describedby": r ? "ubs-overlay-message" : void 0,
            className: [Re.overlay, Re[n], a].filter(Boolean).join(" "),
            ...c,
            children: [
              /* @__PURE__ */ e("span", { className: Re.iconWrapper, children: o ?? /* @__PURE__ */ e(S5, { variant: n }) }),
              t && /* @__PURE__ */ e("h2", { id: "ubs-overlay-title", className: Re.title, children: t }),
              r && /* @__PURE__ */ e("p", { id: "ubs-overlay-message", className: Re.message, children: r }),
              s && s.length > 0 && /* @__PURE__ */ e("div", { className: Re.actions, children: s.map((h, u) => /* @__PURE__ */ e(
                "button",
                {
                  type: "button",
                  className: [
                    Re.actionButton,
                    h.primary ? Re.actionPrimary : Re.actionSecondary
                  ].join(" "),
                  onClick: h.onClick,
                  children: h.label
                },
                u
              )) })
            ]
          }
        )
      }
    ) : null;
  }
);
M5.displayName = "OverlayMessage";
const T5 = "_timer_98rfo_4", D5 = "_display_98rfo_22", E5 = "_compact_98rfo_29", O5 = "_running_98rfo_44", j5 = "_paused_98rfo_48", F5 = "_expired_98rfo_56", R5 = "_expiredLabel_98rfo_70", ut = {
  timer: T5,
  default: "_default_98rfo_16",
  display: D5,
  compact: E5,
  running: O5,
  paused: j5,
  expired: F5,
  expiredLabel: R5
};
function P5(n, t) {
  const r = Math.max(0, Math.floor(n)), o = Math.floor(r / 3600), s = Math.floor(r % 3600 / 60), l = r % 60, i = (a) => String(a).padStart(2, "0");
  switch (t) {
    case "hh:mm:ss":
      return `${i(o)}:${i(s)}:${i(l)}`;
    case "ss":
      return `${r}`;
    case "mm:ss":
    default:
      return `${i(s)}:${i(l)}`;
  }
}
const z5 = B(
  ({
    initialSeconds: n = 0,
    direction: t = "down",
    autoStart: r = !1,
    onComplete: o,
    onTick: s,
    format: l = "mm:ss",
    variant: i = "default",
    className: a,
    ...c
  }, p) => {
    const [_, h] = P(n), [u, m] = P(r ? "running" : "paused"), k = U(null), g = U(o), y = U(s);
    H(() => {
      g.current = o;
    }, [o]), H(() => {
      y.current = s;
    }, [s]);
    const w = j(() => {
      k.current && (clearInterval(k.current), k.current = null);
    }, []);
    H(() => {
      if (u !== "running") {
        w();
        return;
      }
      return k.current = setInterval(() => {
        h((L) => {
          var $, f;
          const x = t === "down" ? L - 1 : L + 1;
          return t === "down" && x <= 0 ? (w(), m("expired"), ($ = g.current) == null || $.call(g), 0) : ((f = y.current) == null || f.call(y, x), x);
        });
      }, 1e3), w;
    }, [u, t, w]);
    const N = K(() => P5(_, l), [_, l]), v = u === "expired" ? ut.expired : u === "paused" ? ut.paused : ut.running;
    return /* @__PURE__ */ d(
      "div",
      {
        ref: p,
        role: "timer",
        "aria-live": "polite",
        "aria-atomic": "true",
        "aria-label": `Timer: ${N}, ${u}`,
        className: [
          ut.timer,
          i === "compact" ? ut.compact : ut.default,
          v,
          a
        ].filter(Boolean).join(" "),
        ...c,
        children: [
          /* @__PURE__ */ e("span", { className: ut.display, "aria-hidden": "true", children: N }),
          u === "expired" && i !== "compact" && /* @__PURE__ */ e("span", { className: ut.expiredLabel, children: "Expired" })
        ]
      }
    );
  }
);
z5.displayName = "Timer";
const H5 = "_container_h6x2k_4", q5 = "_svg_h6x2k_11", G5 = "_animateSegment_h6x2k_17", U5 = "_centerLabel_h6x2k_31", V5 = "_percentageLabel_h6x2k_38", Z5 = "_legendText_h6x2k_46", Lt = {
  container: H5,
  svg: q5,
  animateSegment: G5,
  centerLabel: U5,
  percentageLabel: V5,
  legendText: Z5
}, Kn = [
  "#E60000",
  "#8A000A",
  "#B98E2C",
  "#6F7A1A",
  "#5A5D5C",
  "#CCCABC"
];
function Nn(n, t, r, o) {
  const s = (o - 90) * Math.PI / 180;
  return { x: n + r * Math.cos(s), y: t + r * Math.sin(s) };
}
function K5(n, t, r, o, s) {
  const l = Nn(n, t, r, s), i = Nn(n, t, r, o), a = s - o > 180 ? 1 : 0;
  return `M ${l.x} ${l.y} A ${r} ${r} 0 ${a} 0 ${i.x} ${i.y}`;
}
const Y5 = B(
  ({
    data: n,
    size: t = 200,
    thickness: r = 0.35,
    showLabels: o = !1,
    showPercentages: s = !0,
    centerLabel: l,
    animate: i = !0,
    className: a,
    ...c
  }, p) => {
    te();
    const _ = K(() => n.reduce((L, x) => L + x.value, 0), [n]), h = K(() => {
      let L = 0;
      return n.map((x, $) => {
        const f = _ > 0 ? x.value / _ * 100 : 0, W = f / 100 * 360, b = L, I = L + W;
        return L = I, {
          label: x.label,
          value: x.value,
          percentage: f,
          color: x.color ?? Kn[$ % Kn.length],
          startAngle: b,
          endAngle: I
        };
      });
    }, [n, _]), u = t / 2, m = t / 2, k = t / 2 - 2, g = k * (1 - r), y = (k + g) / 2, w = k - g, v = t + (o ? 160 : 0);
    return /* @__PURE__ */ e(
      "div",
      {
        ref: p,
        role: "img",
        "aria-label": `Donut chart with ${n.length} segments. ${n.map((L) => `${L.label}: ${_ > 0 ? (L.value / _ * 100).toFixed(1) : 0}%`).join(", ")}`,
        className: [Lt.container, a].filter(Boolean).join(" "),
        ...c,
        children: /* @__PURE__ */ d(
          "svg",
          {
            width: v,
            height: t,
            viewBox: `0 0 ${v} ${t}`,
            className: Lt.svg,
            children: [
              h.map((L, x) => {
                if (L.percentage >= 99.99)
                  return /* @__PURE__ */ e(
                    "circle",
                    {
                      cx: u,
                      cy: m,
                      r: y,
                      fill: "none",
                      stroke: L.color,
                      strokeWidth: w,
                      className: i ? Lt.animateSegment : void 0,
                      style: i ? { animationDelay: `${x * 100}ms` } : void 0
                    },
                    x
                  );
                if (L.percentage <= 0) return null;
                const $ = K5(u, m, y, L.startAngle, L.endAngle);
                return /* @__PURE__ */ e(
                  "path",
                  {
                    d: $,
                    fill: "none",
                    stroke: L.color,
                    strokeWidth: w,
                    strokeLinecap: "butt",
                    className: i ? Lt.animateSegment : void 0,
                    style: i ? { animationDelay: `${x * 100}ms` } : void 0,
                    children: /* @__PURE__ */ e("title", { children: `${L.label}: ${L.percentage.toFixed(1)}%` })
                  },
                  x
                );
              }),
              s && h.filter((L) => L.percentage > 5).map((L, x) => {
                const $ = (L.startAngle + L.endAngle) / 2, f = Nn(u, m, y, $);
                return /* @__PURE__ */ e(
                  "text",
                  {
                    x: f.x,
                    y: f.y,
                    textAnchor: "middle",
                    dominantBaseline: "central",
                    className: Lt.percentageLabel,
                    "aria-hidden": "true",
                    children: `${L.percentage.toFixed(0)}%`
                  },
                  `pct-${x}`
                );
              }),
              l && /* @__PURE__ */ e(
                "text",
                {
                  x: u,
                  y: m,
                  textAnchor: "middle",
                  dominantBaseline: "central",
                  className: Lt.centerLabel,
                  "aria-hidden": "true",
                  children: l
                }
              ),
              o && /* @__PURE__ */ e("g", { transform: `translate(${t + 16}, 0)`, children: h.map((L, x) => /* @__PURE__ */ d("g", { transform: `translate(0, ${x * 24 + 20})`, children: [
                /* @__PURE__ */ e(
                  "rect",
                  {
                    x: 0,
                    y: -6,
                    width: 12,
                    height: 12,
                    rx: 2,
                    fill: L.color
                  }
                ),
                /* @__PURE__ */ e(
                  "text",
                  {
                    x: 18,
                    y: 0,
                    dominantBaseline: "central",
                    className: Lt.legendText,
                    "aria-hidden": "true",
                    children: L.label
                  }
                )
              ] }, `legend-${x}`)) })
            ]
          }
        )
      }
    );
  }
);
Y5.displayName = "DonutChart";
const X5 = "_container_agxyi_4", Q5 = "_svg_agxyi_13", J5 = "_gridLine_agxyi_19", ex = "_axis_agxyi_27", tx = "_axisLabel_agxyi_32", nx = "_tickLabel_agxyi_39", rx = "_valueLabel_agxyi_48", ox = "_legendText_agxyi_57", sx = "_animateBar_agxyi_66", ix = "_animateBarH_agxyi_82", Q = {
  container: X5,
  svg: Q5,
  gridLine: J5,
  axis: ex,
  axisLabel: tx,
  tickLabel: nx,
  valueLabel: rx,
  legendText: ox,
  animateBar: sx,
  animateBarH: ix
}, Ge = [
  "#E60000",
  "#8A000A",
  "#B98E2C",
  "#6F7A1A",
  "#5A5D5C",
  "#CCCABC"
], Rt = 500, Ue = 300, tt = { top: 20, right: 20, bottom: 50, left: 60 }, ax = B(
  ({
    data: n,
    orientation: t = "vertical",
    stacked: r = !1,
    showGrid: o = !0,
    showValues: s = !1,
    xLabel: l,
    yLabel: i,
    seriesNames: a,
    animate: c = !0,
    className: p,
    ..._
  }, h) => {
    const u = Rt - tt.left - tt.right, m = Ue - tt.top - tt.bottom, k = K(
      () => Math.max(...n.map((f) => f.values.length), 1),
      [n]
    ), g = K(() => Math.max(...r ? n.map((f) => f.values.reduce((W, b) => W + b, 0)) : n.flatMap((f) => f.values), 1), [n, r]), y = K(() => {
      const W = Math.ceil(g / 5 / 10) * 10 || 1, b = [];
      for (let I = 0; I <= g + W && (b.push(I), !(b.length >= 6)); I += W)
        ;
      return b;
    }, [g]), w = y[y.length - 1] || g, N = t === "vertical", v = `Bar chart. ${n.length} categories. ${n.map((f) => `${f.label}: ${f.values.join(", ")}`).join("; ")}`;
    if (N) {
      const f = u / n.length, W = 4, b = r ? f * 0.6 : (f - W * (k + 1)) / k;
      return /* @__PURE__ */ e(
        "div",
        {
          ref: h,
          role: "img",
          "aria-label": v,
          className: [Q.container, p].filter(Boolean).join(" "),
          ..._,
          children: /* @__PURE__ */ d(
            "svg",
            {
              width: "100%",
              viewBox: `0 0 ${Rt} ${Ue}`,
              className: Q.svg,
              preserveAspectRatio: "xMidYMid meet",
              children: [
                /* @__PURE__ */ d("g", { transform: `translate(${tt.left}, ${tt.top})`, children: [
                  o && y.map((I, S) => {
                    const R = m - I / w * m;
                    return /* @__PURE__ */ e(
                      "line",
                      {
                        x1: 0,
                        y1: R,
                        x2: u,
                        y2: R,
                        className: Q.gridLine
                      },
                      `grid-${S}`
                    );
                  }),
                  y.map((I, S) => {
                    const R = m - I / w * m;
                    return /* @__PURE__ */ e(
                      "text",
                      {
                        x: -8,
                        y: R,
                        textAnchor: "end",
                        dominantBaseline: "central",
                        className: Q.tickLabel,
                        "aria-hidden": "true",
                        children: I
                      },
                      `ytick-${S}`
                    );
                  }),
                  n.map((I, S) => {
                    const R = S * f;
                    if (r) {
                      let D = 0;
                      return /* @__PURE__ */ e("g", { children: I.values.map((A, C) => {
                        const T = A / w * m, q = m - D / w * m - T;
                        D += A;
                        const z = Ge[C % Ge.length];
                        return /* @__PURE__ */ d("g", { children: [
                          /* @__PURE__ */ e(
                            "rect",
                            {
                              x: R + (f - b) / 2,
                              y: q,
                              width: b,
                              height: T,
                              fill: z,
                              className: c ? Q.animateBar : void 0,
                              style: c ? { animationDelay: `${S * 80 + C * 40}ms` } : void 0,
                              children: /* @__PURE__ */ e("title", { children: `${I.label}${a != null && a[C] ? ` - ${a[C]}` : ""}: ${A}` })
                            }
                          ),
                          s && T > 16 && /* @__PURE__ */ e(
                            "text",
                            {
                              x: R + f / 2,
                              y: q + T / 2,
                              textAnchor: "middle",
                              dominantBaseline: "central",
                              className: Q.valueLabel,
                              "aria-hidden": "true",
                              children: A
                            }
                          )
                        ] }, `bar-${S}-${C}`);
                      }) }, `bar-${S}`);
                    }
                    return /* @__PURE__ */ e("g", { children: I.values.map((D, A) => {
                      const C = D / w * m, T = R + W + A * (b + W), q = Ge[A % Ge.length];
                      return /* @__PURE__ */ d("g", { children: [
                        /* @__PURE__ */ e(
                          "rect",
                          {
                            x: T,
                            y: m - C,
                            width: b,
                            height: C,
                            fill: q,
                            className: c ? Q.animateBar : void 0,
                            style: c ? { animationDelay: `${S * 80 + A * 40}ms` } : void 0,
                            children: /* @__PURE__ */ e("title", { children: `${I.label}${a != null && a[A] ? ` - ${a[A]}` : ""}: ${D}` })
                          }
                        ),
                        s && /* @__PURE__ */ e(
                          "text",
                          {
                            x: T + b / 2,
                            y: m - C - 6,
                            textAnchor: "middle",
                            className: Q.valueLabel,
                            "aria-hidden": "true",
                            children: D
                          }
                        )
                      ] }, `bar-${S}-${A}`);
                    }) }, `bar-${S}`);
                  }),
                  n.map((I, S) => /* @__PURE__ */ e(
                    "text",
                    {
                      x: S * f + f / 2,
                      y: m + 20,
                      textAnchor: "middle",
                      className: Q.tickLabel,
                      "aria-hidden": "true",
                      children: I.label
                    },
                    `xlabel-${S}`
                  )),
                  /* @__PURE__ */ e("line", { x1: 0, y1: 0, x2: 0, y2: m, className: Q.axis }),
                  /* @__PURE__ */ e("line", { x1: 0, y1: m, x2: u, y2: m, className: Q.axis })
                ] }),
                l && /* @__PURE__ */ e(
                  "text",
                  {
                    x: Rt / 2,
                    y: Ue - 4,
                    textAnchor: "middle",
                    className: Q.axisLabel,
                    "aria-hidden": "true",
                    children: l
                  }
                ),
                i && /* @__PURE__ */ e(
                  "text",
                  {
                    x: 14,
                    y: Ue / 2,
                    textAnchor: "middle",
                    transform: `rotate(-90, 14, ${Ue / 2})`,
                    className: Q.axisLabel,
                    "aria-hidden": "true",
                    children: i
                  }
                ),
                a && a.length > 1 && /* @__PURE__ */ e("g", { transform: `translate(${tt.left}, ${Ue - 8})`, children: a.map((I, S) => /* @__PURE__ */ d("g", { transform: `translate(${S * 100}, 0)`, children: [
                  /* @__PURE__ */ e("rect", { width: 10, height: 10, rx: 2, fill: Ge[S % Ge.length] }),
                  /* @__PURE__ */ e("text", { x: 14, y: 9, className: Q.legendText, "aria-hidden": "true", children: I })
                ] }, `legend-${S}`)) })
              ]
            }
          )
        }
      );
    }
    const L = m / n.length, x = 4, $ = r ? L * 0.6 : (L - x * (k + 1)) / k;
    return /* @__PURE__ */ e(
      "div",
      {
        ref: h,
        role: "img",
        "aria-label": v,
        className: [Q.container, p].filter(Boolean).join(" "),
        ..._,
        children: /* @__PURE__ */ d(
          "svg",
          {
            width: "100%",
            viewBox: `0 0 ${Rt} ${Ue}`,
            className: Q.svg,
            preserveAspectRatio: "xMidYMid meet",
            children: [
              /* @__PURE__ */ d("g", { transform: `translate(${tt.left}, ${tt.top})`, children: [
                o && y.map((f, W) => {
                  const b = f / w * u;
                  return /* @__PURE__ */ e(
                    "line",
                    {
                      x1: b,
                      y1: 0,
                      x2: b,
                      y2: m,
                      className: Q.gridLine
                    },
                    `grid-${W}`
                  );
                }),
                y.map((f, W) => {
                  const b = f / w * u;
                  return /* @__PURE__ */ e(
                    "text",
                    {
                      x: b,
                      y: m + 20,
                      textAnchor: "middle",
                      className: Q.tickLabel,
                      "aria-hidden": "true",
                      children: f
                    },
                    `xtick-${W}`
                  );
                }),
                n.map((f, W) => {
                  const b = W * L;
                  if (r) {
                    let I = 0;
                    return /* @__PURE__ */ e("g", { children: f.values.map((S, R) => {
                      const D = S / w * u, A = I / w * u;
                      I += S;
                      const C = Ge[R % Ge.length];
                      return /* @__PURE__ */ e(
                        "rect",
                        {
                          x: A,
                          y: b + (L - $) / 2,
                          width: D,
                          height: $,
                          fill: C,
                          className: c ? Q.animateBarH : void 0,
                          style: c ? { animationDelay: `${W * 80}ms` } : void 0,
                          children: /* @__PURE__ */ e("title", { children: `${f.label}${a != null && a[R] ? ` - ${a[R]}` : ""}: ${S}` })
                        },
                        `bar-${W}-${R}`
                      );
                    }) }, `bar-${W}`);
                  }
                  return /* @__PURE__ */ e("g", { children: f.values.map((I, S) => {
                    const R = I / w * u, D = b + x + S * ($ + x), A = Ge[S % Ge.length];
                    return /* @__PURE__ */ d("g", { children: [
                      /* @__PURE__ */ e(
                        "rect",
                        {
                          x: 0,
                          y: D,
                          width: R,
                          height: $,
                          fill: A,
                          className: c ? Q.animateBarH : void 0,
                          style: c ? { animationDelay: `${W * 80 + S * 40}ms` } : void 0,
                          children: /* @__PURE__ */ e("title", { children: `${f.label}${a != null && a[S] ? ` - ${a[S]}` : ""}: ${I}` })
                        }
                      ),
                      s && /* @__PURE__ */ e(
                        "text",
                        {
                          x: R + 6,
                          y: D + $ / 2,
                          dominantBaseline: "central",
                          className: Q.valueLabel,
                          "aria-hidden": "true",
                          children: I
                        }
                      )
                    ] }, `bar-${W}-${S}`);
                  }) }, `bar-${W}`);
                }),
                n.map((f, W) => /* @__PURE__ */ e(
                  "text",
                  {
                    x: -8,
                    y: W * L + L / 2,
                    textAnchor: "end",
                    dominantBaseline: "central",
                    className: Q.tickLabel,
                    "aria-hidden": "true",
                    children: f.label
                  },
                  `ylabel-${W}`
                )),
                /* @__PURE__ */ e("line", { x1: 0, y1: 0, x2: 0, y2: m, className: Q.axis }),
                /* @__PURE__ */ e("line", { x1: 0, y1: m, x2: u, y2: m, className: Q.axis })
              ] }),
              l && /* @__PURE__ */ e(
                "text",
                {
                  x: Rt / 2,
                  y: Ue - 4,
                  textAnchor: "middle",
                  className: Q.axisLabel,
                  "aria-hidden": "true",
                  children: l
                }
              ),
              i && /* @__PURE__ */ e(
                "text",
                {
                  x: 14,
                  y: Ue / 2,
                  textAnchor: "middle",
                  transform: `rotate(-90, 14, ${Ue / 2})`,
                  className: Q.axisLabel,
                  "aria-hidden": "true",
                  children: i
                }
              )
            ]
          }
        )
      }
    );
  }
);
ax.displayName = "BarChart";
const lx = "_container_1sgi4_4", cx = "_svg_1sgi4_13", dx = "_gridLine_1sgi4_19", hx = "_axis_1sgi4_27", px = "_axisLabel_1sgi4_32", ux = "_tickLabel_1sgi4_39", mx = "_legendText_1sgi4_48", _x = "_animateLine_1sgi4_57", kx = "_animateArea_1sgi4_69", gx = "_animatePoint_1sgi4_80", We = {
  container: lx,
  svg: cx,
  gridLine: dx,
  axis: hx,
  axisLabel: px,
  tickLabel: ux,
  legendText: mx,
  animateLine: _x,
  animateArea: kx,
  animatePoint: gx
}, nn = [
  "#E60000",
  "#8A000A",
  "#B98E2C",
  "#6F7A1A",
  "#5A5D5C",
  "#CCCABC"
], bn = 500, St = 300, wt = { top: 20, right: 20, bottom: 50, left: 60 };
function yx(n) {
  if (n.length < 2) return "";
  if (n.length === 2)
    return `M ${n[0].x} ${n[0].y} L ${n[1].x} ${n[1].y}`;
  let t = `M ${n[0].x} ${n[0].y}`;
  for (let r = 0; r < n.length - 1; r++) {
    const o = n[Math.max(0, r - 1)], s = n[r], l = n[r + 1], i = n[Math.min(n.length - 1, r + 2)], a = s.x + (l.x - o.x) / 6, c = s.y + (l.y - o.y) / 6, p = l.x - (i.x - s.x) / 6, _ = l.y - (i.y - s.y) / 6;
    t += ` C ${a} ${c}, ${p} ${_}, ${l.x} ${l.y}`;
  }
  return t;
}
function fx(n) {
  return n.length === 0 ? "" : n.map((t, r) => `${r === 0 ? "M" : "L"} ${t.x} ${t.y}`).join(" ");
}
const bx = B(
  ({
    data: n,
    showPoints: t = !0,
    showArea: r = !1,
    showGrid: o = !0,
    xLabel: s,
    yLabel: l,
    animate: i = !0,
    curved: a = !1,
    className: c,
    ...p
  }, _) => {
    const h = bn - wt.left - wt.right, u = St - wt.top - wt.bottom, m = K(() => n.length === 0 ? [] : n[0].series.map((b) => b.name), [n]), k = K(() => m.map(
      (b, I) => n.map((S) => {
        const R = S.series.find((D) => D.name === b);
        return R ? R.values[0] ?? 0 : 0;
      })
    ), [n, m]), g = k.flat(), y = Math.min(...g, 0), w = Math.max(...g, 1), N = K(() => {
      const I = w - Math.min(y, 0), S = Math.ceil(I / 5 / 10) * 10 || 1, R = Math.floor(Math.min(y, 0) / S) * S, D = [];
      for (let A = R; A <= w + S && (D.push(A), !(D.length >= 7)); A += S)
        ;
      return D;
    }, [w, y]), v = N[0], x = N[N.length - 1] - v || 1, $ = (b) => n.length > 1 ? b / (n.length - 1) * h : h / 2, f = (b) => u - (b - v) / x * u, W = `Line chart. ${m.length} series over ${n.length} points. ${m.map((b, I) => `${b}: ${k[I].join(", ")}`).join("; ")}`;
    return /* @__PURE__ */ e(
      "div",
      {
        ref: _,
        role: "img",
        "aria-label": W,
        className: [We.container, c].filter(Boolean).join(" "),
        ...p,
        children: /* @__PURE__ */ d(
          "svg",
          {
            width: "100%",
            viewBox: `0 0 ${bn} ${St}`,
            className: We.svg,
            preserveAspectRatio: "xMidYMid meet",
            children: [
              /* @__PURE__ */ d("g", { transform: `translate(${wt.left}, ${wt.top})`, children: [
                o && N.map((b, I) => {
                  const S = f(b);
                  return /* @__PURE__ */ e(
                    "line",
                    {
                      x1: 0,
                      y1: S,
                      x2: h,
                      y2: S,
                      className: We.gridLine
                    },
                    `grid-${I}`
                  );
                }),
                N.map((b, I) => /* @__PURE__ */ e(
                  "text",
                  {
                    x: -8,
                    y: f(b),
                    textAnchor: "end",
                    dominantBaseline: "central",
                    className: We.tickLabel,
                    "aria-hidden": "true",
                    children: b
                  },
                  `ytick-${I}`
                )),
                n.map((b, I) => /* @__PURE__ */ e(
                  "text",
                  {
                    x: $(I),
                    y: u + 20,
                    textAnchor: "middle",
                    className: We.tickLabel,
                    "aria-hidden": "true",
                    children: b.label
                  },
                  `xtick-${I}`
                )),
                k.map((b, I) => {
                  const S = nn[I % nn.length], R = b.map((C, T) => ({ x: $(T), y: f(C) })), D = a ? yx(R) : fx(R), A = D ? `${D} L ${R[R.length - 1].x} ${u} L ${R[0].x} ${u} Z` : "";
                  return /* @__PURE__ */ d("g", { children: [
                    r && A && /* @__PURE__ */ e(
                      "path",
                      {
                        d: A,
                        fill: S,
                        opacity: 0.12,
                        className: i ? We.animateArea : void 0
                      }
                    ),
                    /* @__PURE__ */ e(
                      "path",
                      {
                        d: D,
                        fill: "none",
                        stroke: S,
                        strokeWidth: 2,
                        strokeLinejoin: "round",
                        strokeLinecap: "round",
                        className: i ? We.animateLine : void 0
                      }
                    ),
                    t && R.map((C, T) => /* @__PURE__ */ e(
                      "circle",
                      {
                        cx: C.x,
                        cy: C.y,
                        r: 4,
                        fill: "#FFFFFF",
                        stroke: S,
                        strokeWidth: 2,
                        className: i ? We.animatePoint : void 0,
                        style: i ? { animationDelay: `${T * 60 + I * 100}ms` } : void 0,
                        children: /* @__PURE__ */ e("title", { children: `${m[I]}: ${b[T]}` })
                      },
                      `point-${I}-${T}`
                    ))
                  ] }, `series-${I}`);
                }),
                /* @__PURE__ */ e("line", { x1: 0, y1: 0, x2: 0, y2: u, className: We.axis }),
                /* @__PURE__ */ e("line", { x1: 0, y1: u, x2: h, y2: u, className: We.axis })
              ] }),
              s && /* @__PURE__ */ e(
                "text",
                {
                  x: bn / 2,
                  y: St - 4,
                  textAnchor: "middle",
                  className: We.axisLabel,
                  "aria-hidden": "true",
                  children: s
                }
              ),
              l && /* @__PURE__ */ e(
                "text",
                {
                  x: 14,
                  y: St / 2,
                  textAnchor: "middle",
                  transform: `rotate(-90, 14, ${St / 2})`,
                  className: We.axisLabel,
                  "aria-hidden": "true",
                  children: l
                }
              ),
              m.length > 1 && /* @__PURE__ */ e("g", { transform: `translate(${wt.left}, ${St - 8})`, children: m.map((b, I) => /* @__PURE__ */ d("g", { transform: `translate(${I * 100}, 0)`, children: [
                /* @__PURE__ */ e(
                  "line",
                  {
                    x1: 0,
                    y1: 5,
                    x2: 16,
                    y2: 5,
                    stroke: nn[I % nn.length],
                    strokeWidth: 2
                  }
                ),
                /* @__PURE__ */ e("text", { x: 20, y: 9, className: We.legendText, "aria-hidden": "true", children: b })
              ] }, `legend-${I}`)) })
            ]
          }
        )
      }
    );
  }
);
bx.displayName = "LineChart";
const vx = "_container_chujr_4", xx = "_svg_chujr_11", Lx = "_animateSlice_chujr_17", wx = "_sliceLabel_chujr_33", Nx = "_legendText_chujr_41", Pt = {
  container: vx,
  svg: xx,
  animateSlice: Lx,
  sliceLabel: wx,
  legendText: Nx
}, Yn = [
  "#E60000",
  "#8A000A",
  "#B98E2C",
  "#6F7A1A",
  "#5A5D5C",
  "#CCCABC"
];
function qt(n, t, r, o) {
  const s = (o - 90) * Math.PI / 180;
  return { x: n + r * Math.cos(s), y: t + r * Math.sin(s) };
}
function $x(n, t, r, o, s, l) {
  const a = l - s > 180 ? 1 : 0, c = qt(n, t, r, s), p = qt(n, t, r, l);
  if (o <= 0)
    return [
      `M ${n} ${t}`,
      `L ${c.x} ${c.y}`,
      `A ${r} ${r} 0 ${a} 1 ${p.x} ${p.y}`,
      "Z"
    ].join(" ");
  const _ = qt(n, t, o, s), h = qt(n, t, o, l);
  return [
    `M ${c.x} ${c.y}`,
    `A ${r} ${r} 0 ${a} 1 ${p.x} ${p.y}`,
    `L ${h.x} ${h.y}`,
    `A ${o} ${o} 0 ${a} 0 ${_.x} ${_.y}`,
    "Z"
  ].join(" ");
}
const Ix = B(
  ({
    data: n,
    size: t = 200,
    showLabels: r = !0,
    showLegend: o = !1,
    animate: s = !0,
    donut: l = !1,
    className: i,
    ...a
  }, c) => {
    const p = K(() => n.reduce((v, L) => v + L.value, 0), [n]), _ = K(() => {
      let v = 0;
      return n.map((L, x) => {
        const $ = p > 0 ? L.value / p * 100 : 0, f = $ / 100 * 360, W = v, b = v + Math.min(f, 359.99);
        return v += f, {
          ...L,
          percentage: $,
          color: L.color ?? Yn[x % Yn.length],
          startAngle: W,
          endAngle: b
        };
      });
    }, [n, p]), h = t / 2, u = t / 2, m = t / 2 - 2, k = l ? m * 0.55 : 0, g = l ? (m + k) / 2 : m * 0.65, w = t + (o ? 160 : 0), N = `Pie chart with ${n.length} segments. ${n.map((v) => `${v.label}: ${p > 0 ? (v.value / p * 100).toFixed(1) : 0}%`).join(", ")}`;
    return /* @__PURE__ */ e(
      "div",
      {
        ref: c,
        role: "img",
        "aria-label": N,
        className: [Pt.container, i].filter(Boolean).join(" "),
        ...a,
        children: /* @__PURE__ */ d(
          "svg",
          {
            width: w,
            height: t,
            viewBox: `0 0 ${w} ${t}`,
            className: Pt.svg,
            children: [
              _.map((v, L) => {
                if (v.percentage <= 0) return null;
                const x = $x(h, u, m, k, v.startAngle, v.endAngle);
                return /* @__PURE__ */ e(
                  "path",
                  {
                    d: x,
                    fill: v.color,
                    stroke: "#FFFFFF",
                    strokeWidth: 1.5,
                    className: s ? Pt.animateSlice : void 0,
                    style: s ? { animationDelay: `${L * 80}ms` } : void 0,
                    children: /* @__PURE__ */ e("title", { children: `${v.label}: ${v.percentage.toFixed(1)}%` })
                  },
                  L
                );
              }),
              r && _.filter((v) => v.percentage > 4).map((v, L) => {
                const x = (v.startAngle + v.endAngle) / 2, $ = qt(h, u, g, x);
                return /* @__PURE__ */ e(
                  "text",
                  {
                    x: $.x,
                    y: $.y,
                    textAnchor: "middle",
                    dominantBaseline: "central",
                    className: Pt.sliceLabel,
                    "aria-hidden": "true",
                    children: `${v.percentage.toFixed(0)}%`
                  },
                  `label-${L}`
                );
              }),
              o && /* @__PURE__ */ e("g", { transform: `translate(${t + 16}, 0)`, children: _.map((v, L) => /* @__PURE__ */ d("g", { transform: `translate(0, ${L * 26 + 20})`, children: [
                /* @__PURE__ */ e(
                  "rect",
                  {
                    x: 0,
                    y: -6,
                    width: 12,
                    height: 12,
                    rx: 2,
                    fill: v.color
                  }
                ),
                /* @__PURE__ */ d(
                  "text",
                  {
                    x: 18,
                    y: 0,
                    dominantBaseline: "central",
                    className: Pt.legendText,
                    "aria-hidden": "true",
                    children: [
                      v.label,
                      " (",
                      v.percentage.toFixed(1),
                      "%)"
                    ]
                  }
                )
              ] }, `legend-${L}`)) })
            ]
          }
        )
      }
    );
  }
);
Ix.displayName = "PieChart";
const kt = "#FFFFFF", sn = "#E60000", gt = "#000000", Sn = "#CCCABC", Zt = "#B8B3A2", cn = "#8E8D83", dn = "#7A7870", Yt = "#5A5D5C", Xt = "#404040", Mn = "#BD000C", Tn = "#8A000A", br = "#620004", vr = "#B98E2C", xr = "#946F29", Lr = "#6C5312", Dn = "#ECEBE4", En = "#F5F0E1", On = "#D83B31", Ut = "#FE6F5D", jn = "#BD000C", hn = "#E4A911", pn = "#6F7A1A", wr = "#498100", Nr = "#C81219", $r = "#BEBEBE", Wx = [
  "#AF8626",
  // 01 Bronze 50
  "#00759E",
  // 02 Lagoon 60
  "#879420",
  // 03 Kiwi 60
  "#4B2D58",
  // 04 Aubergine 90
  "#9F8865",
  // 05 Sand 50
  "#2E476B",
  // 06 Plum 90
  "#469A6C",
  // 07 Sage 50
  "#AD3E4A",
  // 08 Blush 60
  "#8489BD",
  // 09 Lavender 50
  "#0C7EC6",
  // 10 Lake 50
  "#654D16",
  // 11 Bronze 80
  "#804C95",
  // 12 Aubergine 60
  "#45999C",
  // 13 Mint 50
  "#4972AC",
  // 14 Plum 60
  "#CC707A",
  // 15 Blush 40
  "#295B40",
  // 16 Sage 80
  "#545A9C",
  // 17 Lavender 70
  "#785E4A",
  // 18 Chocolate 60
  "#07476F",
  // 19 Lake 90
  "#620004"
  // 20 Bordeaux 90
], lL = [
  "Bronze 50",
  "Lagoon 60",
  "Kiwi 60",
  "Aubergine 90",
  "Sand 50",
  "Plum 90",
  "Sage 50",
  "Blush 60",
  "Lavender 50",
  "Lake 50",
  "Bronze 80",
  "Aubergine 60",
  "Mint 50",
  "Plum 60",
  "Blush 40",
  "Sage 80",
  "Lavender 70",
  "Chocolate 60",
  "Lake 90",
  "Bordeaux 90"
], cL = [
  cn,
  dn,
  Yt,
  Xt,
  gt
], dL = {
  White: kt,
  Red: sn,
  Black: gt,
  "Gray I": Sn,
  "Gray II": Zt,
  "Gray III": cn,
  "Gray IV": dn,
  "Gray V": Yt,
  "Gray VI": Xt,
  "Bordeaux I": Mn,
  "Bordeaux II": Tn,
  "Bordeaux III": br,
  "Bronze I": vr,
  "Bronze II": xr,
  "Bronze III": Lr,
  "Pastel I": Dn,
  "Pastel II": En,
  "Dark Mode Primary Red": On,
  "Dark Mode Secondary Red": Ut,
  "RAG Red": jn,
  "RAG Amber": hn,
  "RAG Green": pn,
  "Trading Green": wr,
  "Trading Red": Nr,
  "Metallic Silver": $r
}, hL = "Frutiger", pL = "Arial", uL = '"Frutiger", Arial, sans-serif', mL = {
  /** General use. Default weight for body text. */
  light: "Frutiger 45 Light",
  /** Call-outs within body copy. */
  lightItalic: "Frutiger 45 Light Italic",
  /** Specific highlights only. */
  lightBold: "Frutiger 45 Light Bold",
  /** Extra-small text sizes for improved legibility. */
  roman: "Frutiger 55 Roman",
  /** Additional weight for diagrams only. */
  lightCondensed: "Frutiger 47 Light CN"
}, _L = {
  /** Free selectable size. Minimum 2x the infoline size. */
  keyline: {
    lineSpacingMultiplier: 1.05,
    fontWeight: "light",
    colour: "black",
    description: "Free selectable size. Minimum 2x the infoline size."
  },
  /** Free selectable size. Max half the keyline size. */
  infoline: {
    lineSpacingMultiplier: 1.2,
    fontWeight: "light",
    colour: "black",
    description: "Free selectable size. Max half the keyline size."
  },
  subheadline1: {
    fontSize: "20pt",
    lineSpacing: "24pt",
    fontWeight: "light",
    colour: "black",
    description: "Primary subheadline."
  },
  subheadline2: {
    fontSize: "13.5pt",
    lineSpacing: "16pt",
    fontWeight: "light",
    colour: "black",
    description: "Secondary subheadline."
  },
  subheadline3: {
    fontSize: "9.5pt",
    lineSpacing: "12pt",
    fontWeight: "bold",
    colour: "black",
    description: "Tertiary subheadline. Bold weight."
  },
  subheadline4: {
    fontSize: "9.5pt",
    lineSpacing: "12pt",
    fontWeight: "bold",
    colour: "red",
    description: "Quaternary subheadline. Bold weight, UBS Red."
  },
  leadText1: {
    fontSize: "20pt",
    lineSpacing: "24pt",
    fontWeight: "light",
    colour: "black",
    description: "Primary lead text. Same spec as subheadline1."
  },
  leadText2: {
    fontSize: "13.5pt",
    lineSpacing: "16pt",
    fontWeight: "light",
    colour: "black",
    description: "Secondary lead text. Same spec as subheadline2."
  },
  quotes: {
    fontSize: "13.5pt",
    lineSpacing: "16pt",
    fontWeight: "light",
    colour: "black",
    description: "Pull quotes and quotations."
  },
  subtitles: {
    fontSize: "9.5pt",
    lineSpacing: "12pt",
    fontWeight: "bold",
    colour: "black or red",
    description: "Subtitles. Can be black or UBS Red."
  },
  copyText: {
    fontSize: "9.5pt",
    lineSpacing: "12pt",
    fontWeight: "light",
    colour: "black",
    description: "Standard body copy."
  },
  pageNumbers: {
    fontSize: "9.5pt",
    lineSpacing: "12pt",
    fontWeight: "light",
    colour: "black",
    description: "Page numbering."
  },
  senderInfo: {
    fontSize: "9.5pt",
    lineSpacing: "12pt",
    fontWeight: "light",
    colour: "black",
    description: "Sender information blocks."
  },
  smallCopyText: {
    fontSize: "8pt",
    lineSpacing: "10pt",
    fontWeight: "light",
    colour: "black",
    description: "Smaller body copy for secondary content."
  },
  environmentalInfo: {
    fontSize: "8pt",
    lineSpacing: "10pt",
    fontWeight: "light",
    colour: "black",
    description: "Environmental and regulatory information."
  },
  captions: {
    fontSize: "7.5pt",
    lineSpacing: "9.5pt",
    fontWeight: "light",
    colour: "black or red",
    description: "Image and figure captions. Can be black or UBS Red."
  },
  footnote: {
    fontSize: "6.5pt",
    lineSpacing: "7.5pt",
    fontWeight: "light",
    colour: "black",
    description: "Footnotes and legal disclaimers."
  }
}, kL = {
  /** Minimum accessible font size (10.5pt). */
  minimumFontSizePx: 14,
  /** Recommended body text size (12pt). */
  bodyFontSizePx: 16,
  /** Recommended line height for body text (17pt). */
  bodyLineHeightPx: 22,
  /** Threshold above which text qualifies as "large text" for WCAG contrast. */
  largeTextThresholdPx: 25
}, gL = {
  arabic: {
    primary: "Frutiger Arabic",
    fallback: "Segoe UI Semilight"
  },
  cyrillic: {
    primary: "Frutiger Cyrillic",
    fallback: "Segoe UI Semilight"
  },
  greek: {
    primary: "Frutiger Greek",
    fallback: "Segoe UI Semilight"
  },
  hebrew: {
    primary: "Segoe UI Semilight",
    bold: "Segoe UI Semibold"
  },
  japanese: {
    primary: "MS P Gothic",
    macLight: "Hiragino Kaku Gothic ProN W2",
    macKeyline: "Hiragino Kaku Gothic ProN W4",
    macBold: "Hiragino Kaku Gothic ProN W6"
  },
  korean: {
    primary: "Gulim",
    macAll: "DFKGothic W5",
    macBold: "DFKGothic W7"
  },
  simplifiedChinese: {
    primary: "DFP Hei",
    macLight: "DFP Hei W3",
    macBold: "DFP Hei W5",
    fallback: "STXihei"
  },
  traditionalChinese: {
    primary: "DF Hei",
    macLight: "DF Hei W3",
    macBold: "DF Hei W5"
  },
  thai: {
    primary: "Leelawadee",
    macAll: "Lily UPC"
  }
}, yL = {
  /** Never use UBS Red for numbers. */
  noRedForNumbers: !0,
  /** Never apply opacity/transparency to text. */
  noOpacity: !0,
  /** Small caps are not permitted in UBS typography. */
  noSmallCaps: !0,
  /** Never justify text. Always left-aligned (or right-aligned for RTL). */
  noJustification: !0,
  /** Right-aligned text is not permitted (except RTL scripts). */
  noRightAligned: !0,
  /** No drop shadows on text. */
  noShadow: !0,
  /** No centred text blocks. */
  noCentredBlock: !0,
  /** No staircase/stepped text layouts. */
  noStairs: !0,
  /** Never mix different font sizes within one sentence. */
  noDifferentSizesInOneSentence: !0,
  /** No text wrapping around objects. */
  noWrap: !0,
  /** Red highlighting in messages no longer permitted for accessibility. */
  noHighlightingInUBSRed: !0
}, fL = {
  A8: { format: "52x74mm", margin: "6.0mm" },
  A7: { format: "74x105mm", margin: "9.0mm" },
  A6: { format: "105x148mm", margin: "11.0mm" },
  "A6-5": { format: "105x210mm", margin: "12.5mm" },
  A5: { format: "148x210mm", margin: "12.5mm" },
  A4: { format: "210x297mm", margin: "15.5mm" },
  A3: { format: "297x420mm", margin: "22.1mm" },
  A2: { format: "420x594mm", margin: "31.0mm" },
  A1: { format: "594x841mm", margin: "44.2mm" },
  A0: { format: "841x1189mm", margin: "62.1mm" }
}, bL = "#E60000", vL = {
  A8: "1.2pt",
  A7: "1.9pt",
  A6: "2.6pt",
  "A6-5": "2.6pt",
  A5: "3.2pt",
  A4: "4.5pt",
  A3: "6.7pt",
  A2: "9.0pt",
  A1: "12.7pt",
  A0: "18.0pt"
}, xL = {
  A8: "1.8mm",
  A7: "2.4mm",
  A6: "3.0mm",
  "A6-5": "3.5mm",
  A5: "4.9mm",
  A4: "7.0mm",
  A3: "9.9mm",
  A2: "14.0mm",
  A1: "19.8mm",
  A0: "28.0mm"
}, LL = {
  /** Cap height of first word to baseline of last line. Last line left blank. */
  keylineOnly: "Cap height of first word to baseline of last line. Last line left blank.",
  /** Cap height of first keyline word to baseline of infoline. First infoline line left blank. */
  keylineAndInfoline: "Cap height of first keyline word to baseline of infoline. First infoline line left blank."
}, wL = {
  /** Impulse must not extend beyond the baseline of the second message. */
  noLongerThanBaselineOfSecondMessage: !0,
  /** Never centre text alongside an Impulse with a keyline. */
  noCentreWithKeyline: !0,
  /** Multiple Impulses cannot be used together. */
  noMultipleUseTogether: !0,
  /** On gray/bordeaux/bronze: Impulse allowed on Pastel I and Pastel II only. */
  onGrayBordeauxBronze: "Impulse allowed on Pastel I and Pastel II only",
  /** No red highlighting on front pages. */
  noRedHighlightOnFrontPages: !0
}, NL = {
  A8: "10%",
  A7: "15%",
  A6: "18%",
  "A6-5": "21%",
  A5: "21%",
  A4: "26%",
  A3: "37%",
  A2: "52%",
  A1: "74%",
  A0: "104%"
}, $L = {
  /** Default logo placement. */
  standard: "bottom-right",
  /** Alternative logo placement. */
  alternative: "top-left",
  /** Logo must align to the page margin. */
  marginAlignment: "Align to page margin",
  /** Clear space from key to upper/lower edge of format. */
  clearSpace: "Height of Key Symbol (k) from key to upper/lower edge of format"
}, IL = {
  /** Standard tab position. */
  standard: "bottom-right-aligned",
  /** Alternative tab position. */
  alternative: "top-left-aligned"
}, WL = {
  /** Minimum clear space around the key symbol. k = height of Key Symbol. */
  clearSpace: "⅓k minimum",
  /** Permitted colours for the key symbol. */
  colours: ["black", "white", "gray"],
  /** Accent colours permitted for the key symbol. */
  accentColours: ["bordeaux", "bronze"]
}, AL = {
  /** Never alter the key symbol design. */
  neverAlter: !0,
  /** Never deconstruct the key symbol. */
  neverDeconstruct: !0,
  /** Never separate the three keys. */
  neverSeparateKeys: !0,
  /** No drop shadows. */
  noShadow: !0,
  /** No outlines or strokes. */
  noOutline: !0,
  /** No rotation of any kind. */
  noRotation: !0,
  /** Only use approved colours. */
  noUnapprovedColours: !0
}, BL = {
  /** Opacity for transparent variant. */
  transparentOpacity: "80%",
  /** Opacity for opaque variant. */
  opaqueOpacity: "100%",
  /** Maximum frame size relative to the image. */
  maxSize: {
    /** Portrait and square images: max half the width. */
    portraitAndSquare: "max half the width",
    /** Landscape images: max half the height. */
    landscape: "max half the height"
  },
  /** Spacing: half the height of Key Symbol (k). */
  spacing: "half the height of Key Symbol (k)",
  /** Frame is right-aligned at variable height. */
  position: "right-aligned at variable height"
}, CL = {
  /** Never place the Moving Frame in the centre. */
  noCentredPlacement: !0,
  /** No left-aligned logo when using Moving Frame. */
  noLeftAlignedLogo: !0,
  /** Frame must not bleed to the edge of the format. */
  noBleedingToEdge: !0,
  /** No red highlighting within the Moving Frame. */
  noRedHighlighting: !0,
  /** Opacity must not be below 80%. */
  noOpacityBelow80: !0,
  /** No transparency on monochrome backgrounds. */
  noTransparencyOnMonochrome: !0,
  /** No transparency on pattern backgrounds. */
  noTransparencyOnPatterns: !0
}, SL = [
  "coverAndBackPage",
  "insidePage",
  "insidePageWithAdditionalMargin"
], ML = "full-bleed whenever possible", TL = [
  "Full bleed with Moving Frame (recommended)",
  "Full bleed with Logo Tab",
  "Vertical two-thirds",
  "Vertical half",
  "Vertical one-thirds",
  "Without image"
], DL = {
  /** Margins should not appear on more than two sides. */
  noMarginOnMoreThanTwoSides: !0,
  /** No frameless white box on layouts. */
  noFramelessWhiteBox: !0,
  /** Images must not originate from another corner. */
  noImageFromAnotherCorner: !0,
  /** No diagonal image cropping. */
  noDiagonalImageCrop: !0
}, EL = "WCAG 2.2 Level AA", OL = {
  /** Minimum contrast ratio for standard text against background. */
  text: 4.5,
  /** Minimum contrast ratio for text over 18pt (25 CSS px). */
  largeText: 3,
  /** Minimum contrast ratio for icons and graphic objects against background or adjacent colours. */
  iconsAndGraphics: 3
}, jL = "2px", FL = {
  /** Minimum accessible font size: 10.5pt (14 CSS px). */
  minimumFontSize: "10.5pt",
  /** Minimum font size in CSS pixels. */
  minimumFontSizePx: 14,
  /** Recommended body font size: 12pt (16 CSS px). */
  recommendedFontSize: "12pt",
  /** Recommended font size in CSS pixels. */
  recommendedFontSizePx: 16,
  /** Recommended line height for 12pt body text: 17pt (22 CSS px). */
  recommendedLineHeight: "17pt",
  /** Recommended line height in CSS pixels. */
  recommendedLineHeightPx: 22,
  /** PDF content must work for enlargement up to this percentage. */
  pdfReflowMaxZoom: 400
}, RL = {
  /** Minimum gap for print media. */
  print: "1.5pt",
  /** Minimum gap for screen/digital media. */
  screen: "2px",
  /** Charts must always be 2D, never 3D. */
  dimension: "always 2D, never 3D",
  /** Never rely on colour alone to convey meaning in charts. */
  neverRelyOnColourAlone: !0,
  /** Use different line types for complex line charts and monochrome sequences. */
  useLineTypes: "Different line types for complex line charts and monochrome sequences"
}, PL = {
  /** Avoid placing text within images wherever possible. */
  avoidTextInImages: !0,
  /** If text must appear in images, minimum contrast is 4.5:1. */
  textInImagesMinContrast: "4.5:1",
  /** All non-decorative images must have alternative text. */
  alternativeTextRequired: !0,
  /** Colourblind users need additional design features beyond colour alone. */
  noColourAlone: !0,
  /** Documents must have a logical heading structure. */
  logicalHeadingStructure: !0,
  /** Documents must have a meaningful title. */
  documentTitle: !0,
  /** Documents must declare their language. */
  documentLanguage: !0
}, zL = {
  /** Desktop contrast checker application. */
  desktop: "Colour Contrast Analyser (Paciello Group)",
  /** Online contrast checker. */
  online: "contrastchecker.com"
}, HL = {
  /** Minimum display size for illustrative icons. */
  minSize: 24,
  /** Line weight ratio (thin:thick). */
  lineWeightRatio: "1:2",
  /** Red accent configuration. */
  redAccent: {
    /** Red accent is always placed on the thicker line. */
    placement: "always on the thicker line",
    /** Use sparingly and only in meaningful context. */
    usage: "sparingly and in context"
  },
  /** Visual character of illustrative icons. */
  character: {
    /** Shapes are geometric and open. */
    shapes: "geometric and open",
    /** Straight line ends, sharp corners mixed with rounded where content fits. */
    corners: "straight line ends, sharp corners mixed with rounded where content fits"
  }
}, qL = [
  "black with red accent",
  "all black"
], GL = {
  /** Don't cram too many ideas into one icon. */
  noTooManyIdeasInOneIcon: !0,
  /** Icons must convey meaning, not be decorative. */
  noDecorativeUsage: !0,
  /** Icon meaning must be immediately clear. */
  noUnclearMeaning: !0,
  /** Icons must not substitute for photographs or illustrations. */
  noSubstitutionOfImages: !0
}, UL = {
  /** Small icon: 12px. For compact UI elements. */
  small: 12,
  /** Medium icon: 16px. Default functional icon size. */
  medium: 16,
  /** Large icon: 24px. For prominent UI elements. */
  large: 24
}, VL = "black only", ZL = {
  /** Icons are pixel-perfect. Do not resize from library. */
  noResize: !0,
  /** Keep icons simple and clear. */
  keepSimple: !0,
  /** Open line ends for a light look and optimistic touch. */
  openEnds: !0,
  /** Safe zone applied to balance differently shaped icons. */
  safeZone: !0
}, KL = {
  /** Red accent appears at the end to underline the message. */
  redAccentAppearance: "at the end to underline the message",
  /** Animation pace: fast with eased movement. */
  pace: "fast with eased movement",
  /** Animation should loop smoothly. */
  loop: "smooth presentation"
}, YL = [
  "GIF",
  "MP4",
  "MOV with transparency",
  "SVG (static)"
], XL = {
  /** Hand-drawn characteristics created digitally. */
  technique: "Hand-drawn characteristics created digitally",
  /** Firm pen stroke. Minimum 1px in digital. Optically adjust when scaling. */
  lineWeight: "Firm pen stroke. Minimum 1px in digital. Optically adjust when scaling.",
  /** Abstract where possible, accurate where appropriate. Grasp the essence. */
  levelOfDetail: "Abstract where possible, accurate where appropriate. Grasp the essence.",
  /** NOT realistic: small head, short torso, long legs, large feet. */
  humanProportions: "NOT realistic: small head, short torso, long legs, large feet",
  /** Illustrations must not include facial expressions. */
  noFacialExpressions: !0
}, QL = [
  "Black lines with accent Red lines",
  "Black lines with accent Red fill",
  "Black lines, Red accent fill, Black fill",
  "Black lines, Red accent fill, Black and Warm Grays fill"
], JL = "white", e6 = {
  /** Colour name in the UBS palette. */
  name: "Bordeaux II",
  /** Hex value. */
  hex: "#8A000A",
  /** Target usage as percentage of illustration area. */
  usage: "~10% of illustration. For large/complex illustrations only."
}, t6 = {
  /** 2D animation maintaining flat illustration style. */
  style: "2D animation maintaining flat illustration style",
  /** Natural, human-like movement. No stiffness or cartoonish behaviour. */
  movement: "Natural, human-like. No stiffness or cartoonish.",
  /** Vary speed for realistic movement. */
  easing: "Vary speed for realistic movement",
  /** Subtle effect for hand-drawn charm. */
  boilingLineEffect: "Subtle, for hand-drawn charm"
}, n6 = {
  /** Animation must not disrupt the shape of illustrated objects. */
  noDisruptionOfShape: !0,
  /** Movement must not be cartoonish or exaggerated. */
  noCartoonishMovement: !0,
  /** Avoid overcomplicated animation sequences. */
  noOvercomplicatedAnimation: !0,
  /** Only animate elements that are essential to the message. */
  animateOnlyEssential: !0
}, r6 = {
  /** Do not overuse colours beyond the layering system. */
  noOveruseOfColours: !0,
  /** Avoid too many filled areas; white should dominate. */
  noTooManyFilledAreas: !0,
  /** Only use colours from the UBS palette. */
  noOtherColoursBeyondPalette: !0,
  /** Lines must not be too thin and rigid. */
  noTooThinAndRigid: !0,
  /** Lines must not be too thick and rigid. */
  noTooThickAndRigid: !0,
  /** Lines must not be too wobbly. */
  noTooWobbly: !0,
  /** Maintain consistent line width throughout. */
  noDifferentLineWidths: !0,
  /** Avoid excessive detail; grasp the essence. */
  noTooManyDetails: !0,
  /** Style must not become too cartoonish. */
  noTooCartoonish: !0,
  /** Do not fill backgrounds with colour. */
  noFilledWithBackgroundColour: !0,
  /** No close-up compositions. */
  noCloseUps: !0,
  /** No obvious 3D effects. */
  noObvious3D: !0,
  /** Never combine illustrations with photography. */
  noCombinationWithPhotography: !0,
  /** Illustrations must not be used as icons. */
  noIllustrationsAsIcons: !0,
  /** Style must not be too sketchy. */
  noTooSketchy: !0
}, o6 = "always 2D", s6 = "donut over pie", i6 = "#E60000", a6 = {
  /** Minimum gap for print media. */
  print: "1.5pt",
  /** Minimum gap for screen/digital media. */
  screen: "2px"
}, Ax = {
  description: "Standard. One colour + UBS Red for highlights.",
  usage: "Default for simple charts"
}, Bx = {
  description: "Gray III-VI and Black (up to 5 blocks) + UBS Red for highlights.",
  colours: ["#8E8D83", "#7A7870", "#5A5D5C", "#404040", "#000000"],
  arrangement: "light to dark",
  usage: "Standard for multi-segment charts"
}, Cx = {
  description: "Gray III-VI + Black, Bordeaux I-III, Bronze I-III mixed. Up to 9 blocks.",
  usage: "Extended palette when polychrome insufficient"
}, Sx = {
  description: "20 additional chart colours. Use only when more colours needed and info is equal weight.",
  usage: "Special cases only. Must follow defined sequence order."
}, l6 = {
  monochrome: Ax,
  polychrome: Bx,
  multichrome: Cx,
  complex: Sx
}, c6 = {
  /** Visual element used for the insight flag. */
  element: "red arrow",
  /** Purpose of the insight flag. */
  purpose: "Point to an insight with summary in plain language"
}, d6 = {
  /** Primary font for data visualisations. */
  primary: "Frutiger Light",
  /** Alternative fonts (use only one per visualisation). */
  alternative: ["Frutiger Bold", "Frutiger Light Condensed"],
  /** Never mix font weights within one visualisation. */
  rule: "Don't mix within one visualisation"
}, h6 = {
  /** Line weight ratio for icons and arrows. */
  ratio: "1:2",
  /** Maximum arrow angle. */
  arrowAngle: "maximum 90 degrees",
  /** Divider lines must have sufficient contrast against chart lines. */
  sufficientContrastBetweenDividerAndChartLines: !0
}, p6 = [
  "colour",
  "contrast",
  "stroke contrast",
  "scale",
  "proximity",
  "negative space",
  "repetition",
  "dashed/dotted lines",
  "big numbers"
], u6 = {
  /** Changes of acceleration for realism. No abrupt starts/stops. */
  easing: "Changes of acceleration for realism. No abrupt starts/stops.",
  /** Straight, concise paths. No curved/organic motion. */
  direction: "Straight, concise paths. No curved/organic.",
  /** Transitions add meaning, not embellishment. Opacity, scale, colour, position. */
  transitions: "Add meaning, not embellishment. Opacity, scale, colour, position.",
  /** Consistent timing. Define smallest duration and multiply. */
  pace: "Consistent timing. Define smallest duration and multiply."
}, m6 = {
  /** Only use UBS-approved icons in visualisations. */
  noNonUBSIcons: !0,
  /** No drop shadows in charts. */
  noShadows: !0,
  /** Highlight colour (Red) must not dominate the visualisation. */
  noDominantHighlightColour: !0,
  /** Do not mix light-to-dark and dark-to-light colour directions. */
  noMixedColourDirections: !0,
  /** No gradient fills in chart elements. */
  noGradients: !0,
  /** No angled or tilted chart elements. */
  noAngles: !0,
  /** Only use UBS corporate colours. */
  noNonCorporateColours: !0,
  /** Charts must always be 2D. */
  no3D: !0,
  /** Contrast ratios must meet WCAG requirements. */
  noWrongContrastRatio: !0
}, _6 = [
  "solid",
  "outline",
  "solid animated",
  "outline animated"
], k6 = {
  /** Always measure against the short side of the format. */
  description: "Always measure against the short side of the format.",
  /** Maximum pattern element size: 3h (h = height of base element). */
  maximum: "3h",
  /** Minimum pattern element size: ⅓h. */
  minimum: "⅓h"
}, Mx = [
  ["#FFFFFF", "#ECEBE4"],
  ["#ECEBE4", "#CCCABC"],
  ["#CCCABC", "#B8B3A2"],
  ["#B8B3A2", "#8E8D83"],
  ["#8E8D83", "#7A7870"],
  ["#7A7870", "#5A5D5C"],
  ["#5A5D5C", "#404040"]
], Tx = [
  ["#E60000", "#BD000C"],
  ["#BD000C", "#8A000A"],
  ["#8A000A", "#620004"]
], Dx = [
  ["#FFFFFF", "#F5F0E1"],
  ["#B98E2C", "#946F29"],
  ["#946F29", "#6C5312"]
], g6 = {
  gray: Mx,
  bordeaux: Tx,
  bronze: Dx
}, y6 = {
  /** Default colour direction using grays. */
  basis: {
    name: "Gray",
    colours: ["White", "Pastel I", "Gray I", "Gray II", "Gray III", "Gray IV", "Gray V", "Gray VI", "Black"]
  },
  /** Bordeaux accent colour direction. */
  specificI: {
    name: "Bordeaux",
    colours: ["White", "Pastel I", "Gray I", "Gray II", "Gray III", "Gray IV", "Gray V", "Gray VI", "Black", "UBS Red", "Bordeaux I", "Bordeaux II", "Bordeaux III"]
  },
  /** Bronze accent colour direction. */
  specificII: {
    name: "Bronze",
    colours: ["White", "Gray I", "Gray II", "Gray III", "Gray IV", "Gray V", "Gray VI", "Black", "Pastel I", "Bronze I", "Bronze II", "Bronze III"]
  }
}, f6 = {
  /** Stainless steel: engraving. */
  stainlessSteel: "engraving",
  /** Stone: embossing. */
  stone: "embossing",
  /** Leather: embossing. */
  leather: "embossing",
  /** Fabric: embroidery. */
  fabric: "embroidery",
  /** Cardboard: wrapping. */
  cardboard: "wrapping",
  /** Foil/glass: wrapping. */
  foilGlass: "wrapping",
  /** Wood: milling. */
  wood: "milling",
  /** Paper: watermarking. */
  paper: "watermarking"
}, b6 = {
  /** Never distort the pattern. */
  noDistortion: !0,
  /** No Logo Tab on white backgrounds. */
  noLogoTabOnWhiteBackground: !0,
  /** Key symbol must not appear on top of patterns. */
  noKeySymbolOnPattern: !0,
  /** Pattern ratio must match format specifications. */
  noWrongFormatRatio: !0,
  /** No front page layout or Impulse on patterns. */
  noFrontPageAndImpulseOnPattern: !0,
  /** Do not use multiple pattern variations together. */
  noMultipleVariations: !0,
  /** Never mirror the pattern. */
  noMirroring: !0,
  /** Patterns must not be used as backgrounds for portrait photography. */
  noBackgroundForPortraitPhotography: !0,
  /** Only use UBS palette colours. */
  noOtherColours: !0,
  /** Never combine two colour directions. */
  noCombinationOfTwoColourDirections: !0,
  /** Never rotate the pattern. */
  noRotation: !0,
  /** No icons, illustrations, or charts placed on patterns. */
  noIconIllustrationChartOnPattern: !0,
  /** Pattern must not bleed on one, two, or three sides only. */
  noBleedingOnOneTwoThreeSides: !0,
  /** Colour contrast must meet accessibility requirements. */
  noWrongColourContrast: !0
}, v6 = {
  /** Logo position for static posts. */
  logoPosition: "right-aligned Logo Tab (bottom-right corner)",
  /** No logo on gallery uploads where cropped in preview. */
  logoOnGallery: "No logo on gallery uploads where cropped in preview",
  /** Logo on first and last image of slider content. */
  logoOnSlider: "Logo on first and last image"
}, x6 = {
  /** Logo position for animated content. */
  logoPosition: "left-aligned Logo Tab animation with watermark (top-left corner)",
  /** Logo outro with sound per motion design guidelines. */
  logoOutro: "Logo outro with sound per motion design guidelines"
}, L6 = {
  /** Default warm gray colour direction. */
  basis: {
    name: "Gray",
    colours: ["Warm Gray", "Pastel I"]
  },
  /** Bordeaux accent colour direction. */
  specificI: {
    name: "Bordeaux",
    colours: ["Warm Gray", "Bordeaux accents", "Pastel I or Pastel II"]
  },
  /** Bronze accent colour direction. */
  specificII: {
    name: "Bronze",
    colours: ["Warm Gray", "Bronze accents", "Pastel II"]
  }
}, w6 = {
  instagram: [
    "Feed",
    "Feed with source",
    "Story",
    "Story with source",
    "Reel with source",
    "Paid ad",
    "Reel with chart"
  ],
  facebook: [
    "Cover",
    "Post",
    "Video",
    "Carousel",
    "Gallery",
    "Single image"
  ],
  youtube: [
    "Video",
    "Short",
    "Thumbnail"
  ],
  x: [
    "Single image",
    "Multiple images"
  ],
  linkedin: [
    "Post",
    "Gallery",
    "Single image",
    "Slideshow"
  ]
}, N6 = [
  "Square 1:1",
  "Portrait 4:5",
  "Vertical 9:16",
  "Wide 16:9"
], $6 = {
  /** Logo Tab must not be cropped in gallery previews. */
  noCroppedLogoTabInGallery: !0,
  /** Watermarks are only for animated/video content, never static. */
  noWatermarkOnStaticContent: !0,
  /** Logo Tab must not appear on multiple images in a set. */
  noLogoTabOnMultipleImages: !0,
  /** Content must not overlay permanent navigation elements. */
  noOverlayOfPermanentNavElements: !0,
  /** No collage-style layouts. */
  noCollageLayouts: !0,
  /** Source attribution must not connect to the Impulse. */
  noSourceConnectedToImpulse: !0
}, I6 = {
  /** Musical key. */
  key: "E major",
  /** Relative minor key. */
  relativeMinor: "C# minor",
  /** Permitted instruments. */
  instruments: ["synth", "mallets", "harp", "plucked sounds"],
  /** Musical styles. */
  styles: ["minimal", "electronic", "downtempo"],
  /** Energy characteristics. */
  energy: ["lively", "delicate", "dynamic"],
  /** Always the first choice for UBS sound. */
  description: "Always first choice."
}, W6 = {
  /** Funky, upbeat adaptation for energetic content. */
  funkyAndUpbeat: {
    instruments: ["drums", "electric bass", "rhythm guitars", "brass"],
    styles: ["funk", "breakbeat", "soul", "disco"],
    energy: ["syncopated", "groovy", "upbeat"]
  },
  /** Subtle, spacious adaptation for calm contexts. */
  subtleAndSpacious: {
    instruments: ["synth pads", "strings", "piano", "textures"],
    styles: ["minimal", "textural", "ambient"],
    energy: ["calm", "flowing"]
  },
  /** Inspiring, serene adaptation for reflective content. */
  inspiringAndSerene: {
    instruments: ["synth pads", "piano", "textures"],
    styles: ["chillout", "ambient", "cinematic"],
    energy: ["laidback", "soft", "flowing"]
  },
  /** Vibrant, enthusiastic adaptation for celebratory content. */
  vibrantAndEnthusiastic: {
    instruments: ["acoustic drums", "percussions", "basslines"],
    styles: ["percussive", "celebratory", "dance"],
    energy: ["active", "energetic", "lively"]
  },
  /** Bold, uplifting adaptation for high-energy content. */
  boldAndUplifting: {
    instruments: ["drums", "sub-bass", "synth"],
    styles: ["electronic", "trap", "hip-hop", "dance"],
    energy: ["bouncy", "bold", "active"]
  },
  /** Elegant, refined adaptation for premium/formal content. */
  elegantAndRefined: {
    instruments: ["strings", "piano", "harp", "woodwinds"],
    styles: ["intimate", "cinematic", "classical", "luxurious"],
    energy: ["stately", "delicate"]
  }
}, A6 = [
  "E major",
  "C major",
  "D major",
  "G major",
  "A major"
], B6 = [
  "C# minor",
  "A minor",
  "B minor",
  "E minor",
  "F# minor"
], C6 = "Never modify sound logos. They are finalised assets.", S6 = {
  /** Gap between end of preceding audio and start of sound logo. */
  gapAfterAudio: "0-350ms after music/background/voice-over ends",
  /** Let previous audio fade naturally, no abrupt cuts. */
  fadeOut: "Let previous audio fade naturally, no abrupt cuts"
}, M6 = {
  /** Sound logo mastered level. Maximum peak, full dynamic range. */
  soundLogo: {
    value: "-12 LUFS",
    description: "Mastered to maximum peak and full dynamic range."
  },
  /** EBU R128 broadcast standard. */
  broadcast: {
    value: "-23 LKFS",
    description: "EBU R128 broadcast standard."
  },
  /** Digital/streaming platforms. */
  digital: {
    value: "-16 LKFS",
    description: "Digital/streaming platforms."
  }
}, T6 = {
  /** Never modify sound logo files. */
  noModification: !0,
  /** Never re-encode or convert sound logo formats. */
  noFormatConversion: !0,
  /** Never increase the loudness of sound logos. */
  noLoudnessIncrease: !0,
  /** No abrupt transitions into or out of sound logos. */
  noAbruptTransitions: !0,
  /** Only use official sound logo files. */
  useOnlyOfficialFiles: !0
}, D6 = {
  /** Available durations. */
  lengths: ["17s", "60s", "78s"],
  /** Primary usage context. */
  usage: "Podcast intros, branded assets requiring longer UBS sound",
  /** Licensing terms. */
  license: "Global usage rights, limitless in time, all media"
}, E6 = {
  /**
   * Clear writing: simple, direct, scannable.
   * Write like you speak. Short sentences. Main point first.
   */
  clear: {
    principles: [
      "Write like you speak",
      "Use contractions (we've, it's)",
      "Short sentences",
      "Put the main point first",
      "No business speak or jargon",
      "Use everyday words and phrases",
      "Break content up with subheadings",
      "Use bullet points for instructions (each starting with a verb)"
    ]
  },
  /**
   * Convincing writing: focused, benefit-led, concrete.
   * Only say what you need to. Lead on the benefit to users.
   */
  convincing: {
    principles: [
      "Only say what you need to",
      "Lead on the benefit to users, not the process",
      "Remove empty adjectives (global, unique, robust, state-of-the-art)",
      "Remove jargon (leverage, solutions)",
      "Talk about what matters to readers first",
      "Be concrete and less abstract",
      "See things from the reader's point of view"
    ]
  },
  /**
   * Writing with charm: engaging, personal, memorable.
   * Draw readers in. Be personal. Create rhythm.
   */
  withCharm: {
    principles: [
      "Draw readers in with an observation or intriguing headline",
      "Be personal: use 'we' and 'us', not 'UBS'",
      "Create rhythm with repetition and mixed sentence lengths",
      "Ask questions to intrigue readers",
      "Use natural-sounding phrases that paint pictures",
      "Be memorable through personality"
    ]
  }
}, O6 = [
  {
    trait: "Positive",
    description: "We are optimistic by nature"
  },
  {
    trait: "Forward looking",
    description: "We are contemporary with purposeful intelligence"
  },
  {
    trait: "Empowering",
    description: "We inspire connections in the hands of our clients"
  },
  {
    trait: "Warm and human",
    description: "We are always listening to clients' unique needs to realise their ambitions"
  }
], j6 = [
  {
    level: 1,
    name: "Just the Facts",
    description: "Infoline black only"
  },
  {
    level: 2,
    name: "Facts Plus / Catchy",
    description: "Keyline hooks, infoline explains"
  },
  {
    level: 3,
    name: "Communicative",
    description: "Tells a story"
  }
], F6 = "1-2 punch: big catchy keyline + smaller informative infoline", R6 = {
  /** Red highlighting in infoline/keyline no longer permitted for accessibility. */
  noRedHighlightInMessages: !0
}, Mt = {
  mobile: 320,
  tablet: 768,
  desktop: 1024,
  wide: 1440
}, Ir = {
  mobile: `(min-width: ${Mt.mobile}px)`,
  tablet: `(min-width: ${Mt.tablet}px)`,
  desktop: `(min-width: ${Mt.desktop}px)`,
  wide: `(min-width: ${Mt.wide}px)`
}, Wr = [0, 4, 8, 12, 16, 24, 32, 48, 64, 96], Ar = {
  none: 0,
  "4xs": 4,
  "3xs": 8,
  "2xs": 12,
  xs: 16,
  sm: 24,
  md: 32,
  lg: 48,
  xl: 64,
  "2xl": 96
}, Ex = {
  primary: "'Frutiger', 'Frutiger Neue', Arial, Helvetica, sans-serif",
  mono: "'Frutiger Mono', 'SF Mono', 'Fira Code', 'Fira Mono', monospace"
}, Ox = {
  light: 300,
  regular: 400,
  medium: 500,
  bold: 700
}, jx = {
  /** Minimum enforced size */
  min: 14,
  /** Body copy */
  body: 16,
  /** Small text (never below min) */
  small: 14,
  /** Subheading */
  h6: 16,
  h5: 18,
  h4: 20,
  h3: 24,
  h2: 28,
  h1: 32,
  /** Display / hero headings */
  display: 40,
  displayLg: 48
}, Fx = {
  /** Body text: 22px at 16px font */
  body: 1.375,
  /** Tight for headings */
  heading: 1.2,
  /** Comfortable for large text */
  relaxed: 1.5,
  /** Single line / buttons */
  none: 1
}, Br = {
  fontFamily: Ex,
  fontWeight: Ox,
  fontSize: jx,
  lineHeight: Fx
}, Cr = {
  corporate: {
    white: kt,
    red: sn,
    black: gt
  },
  gray: {
    i: Sn,
    ii: Zt,
    iii: cn,
    iv: dn,
    v: Yt,
    vi: Xt
  },
  bordeaux: {
    i: Mn,
    ii: Tn,
    iii: br
  },
  bronze: {
    i: vr,
    ii: xr,
    iii: Lr
  },
  pastel: {
    i: Dn,
    ii: En
  },
  darkMode: {
    primaryRed: On,
    secondaryRed: Ut
  },
  rag: {
    red: jn,
    amber: hn,
    green: pn
  },
  trading: {
    green: wr,
    red: Nr
  },
  metallic: {
    silver: $r
  },
  chart: Wx
}, Rx = {
  text: {
    primary: gt,
    secondary: Yt,
    tertiary: dn,
    inverse: kt,
    link: sn,
    error: jn,
    warning: hn,
    success: pn
  },
  background: {
    primary: kt,
    secondary: Dn,
    tertiary: En,
    inverse: gt
  },
  border: {
    primary: Zt,
    secondary: Sn,
    focus: gt
  },
  interactive: {
    primary: sn,
    primaryHover: Mn,
    primaryActive: Tn,
    secondary: gt,
    secondaryHover: Xt
  }
}, Px = {
  text: {
    primary: kt,
    secondary: Zt,
    tertiary: cn,
    inverse: gt,
    link: Ut,
    error: Ut,
    warning: hn,
    success: pn
  },
  background: {
    primary: "#1A1A1A",
    secondary: "#2A2A2A",
    tertiary: "#333333",
    inverse: kt
  },
  border: {
    primary: Yt,
    secondary: Xt,
    focus: kt
  },
  interactive: {
    primary: On,
    primaryHover: Ut,
    primaryActive: "#FF8A7A",
    secondary: kt,
    secondaryHover: Zt
  }
}, Sr = {
  /** Max content width */
  maxWidth: 1440,
  /** Content gutter / side padding */
  gutter: {
    mobile: 16,
    tablet: 24,
    desktop: 32,
    wide: 48
  },
  /** Grid columns */
  columns: {
    mobile: 4,
    tablet: 8,
    desktop: 12,
    wide: 12
  },
  /** Column gap */
  columnGap: {
    mobile: 16,
    tablet: 24,
    desktop: 24,
    wide: 32
  },
  /** Border radius */
  borderRadius: {
    none: 0,
    sm: 2,
    md: 4,
    lg: 8,
    xl: 12,
    full: 9999
  }
}, Mr = {
  /** WCAG 2.2 AA contrast ratio requirements */
  contrast: {
    /** Normal text (<25px / <18.7px bold): 4.5:1 */
    normalText: 4.5,
    /** Large text (≥25px / ≥18.7px bold): 3:1 */
    largeText: 3,
    /** Non-text graphics and UI components: 3:1 */
    graphics: 3
  },
  /** Threshold in px for "large text" classification */
  largeTextThreshold: 25,
  /** Threshold in px for bold "large text" classification */
  largeTextBoldThreshold: 18.7,
  /** Minimum touch target size (px) for WCAG 2.5.8 */
  minTouchTarget: 44,
  /** Minimum font size enforced across all text */
  minFontSize: 14,
  /** Focus indicator minimum width */
  focusIndicatorWidth: 2
}, Tr = {
  duration: {
    fast: "100ms",
    normal: "200ms",
    slow: "300ms",
    slower: "500ms"
  },
  easing: {
    /** Standard UBS easing for most interactions */
    default: "cubic-bezier(0.4, 0, 0.2, 1)",
    /** Enter / appear */
    easeOut: "cubic-bezier(0, 0, 0.2, 1)",
    /** Exit / disappear */
    easeIn: "cubic-bezier(0.4, 0, 1, 1)",
    /** Impulse / spring-like */
    impulse: "cubic-bezier(0.22, 1, 0.36, 1)"
  }
}, Dr = {
  base: 0,
  dropdown: 100,
  sticky: 200,
  overlay: 300,
  modal: 400,
  popover: 500,
  toast: 600,
  tooltip: 700
}, Er = {
  colours: Cr,
  semantic: Rx,
  typography: Br,
  spacing: Ar,
  spacingScale: Wr,
  breakpoints: Mt,
  mediaQueries: Ir,
  layout: Sr,
  accessibility: Mr,
  transitions: Tr,
  zIndex: Dr,
  isDarkMode: !1
}, zx = {
  colours: Cr,
  semantic: Px,
  typography: Br,
  spacing: Ar,
  spacingScale: Wr,
  breakpoints: Mt,
  mediaQueries: Ir,
  layout: Sr,
  accessibility: Mr,
  transitions: Tr,
  zIndex: Dr,
  isDarkMode: !0
}, P6 = Er, Fn = ir(null);
Fn.displayName = "UBSThemeContext";
function Hx() {
  return typeof window > "u" ? !1 : window.matchMedia("(prefers-color-scheme: dark)").matches;
}
function qx(n) {
  if (typeof document > "u") return;
  const t = document.documentElement, { semantic: r, spacing: o, typography: s, layout: l, transitions: i, zIndex: a } = n;
  t.style.setProperty("--ubs-color-text-primary", r.text.primary), t.style.setProperty("--ubs-color-text-secondary", r.text.secondary), t.style.setProperty("--ubs-color-text-tertiary", r.text.tertiary), t.style.setProperty("--ubs-color-text-inverse", r.text.inverse), t.style.setProperty("--ubs-color-text-link", r.text.link), t.style.setProperty("--ubs-color-text-error", r.text.error), t.style.setProperty("--ubs-color-text-warning", r.text.warning), t.style.setProperty("--ubs-color-text-success", r.text.success), t.style.setProperty("--ubs-color-bg-primary", r.background.primary), t.style.setProperty("--ubs-color-bg-secondary", r.background.secondary), t.style.setProperty("--ubs-color-bg-tertiary", r.background.tertiary), t.style.setProperty("--ubs-color-bg-inverse", r.background.inverse), t.style.setProperty("--ubs-color-border-primary", r.border.primary), t.style.setProperty("--ubs-color-border-secondary", r.border.secondary), t.style.setProperty("--ubs-color-border-focus", r.border.focus), t.style.setProperty("--ubs-color-interactive-primary", r.interactive.primary), t.style.setProperty("--ubs-color-interactive-primary-hover", r.interactive.primaryHover), t.style.setProperty("--ubs-color-interactive-primary-active", r.interactive.primaryActive), t.style.setProperty("--ubs-color-interactive-secondary", r.interactive.secondary), t.style.setProperty("--ubs-color-interactive-secondary-hover", r.interactive.secondaryHover), t.style.setProperty("--ubs-color-red", n.colours.corporate.red), t.style.setProperty("--ubs-color-black", n.colours.corporate.black), t.style.setProperty("--ubs-color-white", n.colours.corporate.white), Object.entries(o).forEach(([c, p]) => {
    t.style.setProperty(`--ubs-spacing-${c}`, `${p}px`);
  }), t.style.setProperty("--ubs-font-family-primary", s.fontFamily.primary), t.style.setProperty("--ubs-font-family-mono", s.fontFamily.mono), t.style.setProperty("--ubs-font-weight-light", String(s.fontWeight.light)), t.style.setProperty("--ubs-font-weight-regular", String(s.fontWeight.regular)), t.style.setProperty("--ubs-font-weight-medium", String(s.fontWeight.medium)), t.style.setProperty("--ubs-font-weight-bold", String(s.fontWeight.bold)), t.style.setProperty("--ubs-font-size-body", `${s.fontSize.body}px`), t.style.setProperty("--ubs-font-size-min", `${s.fontSize.min}px`), t.style.setProperty("--ubs-line-height-body", String(s.lineHeight.body)), t.style.setProperty("--ubs-line-height-heading", String(s.lineHeight.heading)), t.style.setProperty("--ubs-layout-max-width", `${l.maxWidth}px`), Object.entries(l.borderRadius).forEach(([c, p]) => {
    t.style.setProperty(`--ubs-radius-${c}`, p === 9999 ? "9999px" : `${p}px`);
  }), Object.entries(i.duration).forEach(([c, p]) => {
    t.style.setProperty(`--ubs-duration-${c}`, p);
  }), Object.entries(i.easing).forEach(([c, p]) => {
    t.style.setProperty(`--ubs-easing-${c}`, p);
  }), Object.entries(a).forEach(([c, p]) => {
    t.style.setProperty(`--ubs-z-${c}`, String(p));
  }), t.setAttribute("data-ubs-theme", n.isDarkMode ? "dark" : "light");
}
function z6({
  children: n,
  defaultColourMode: t = "system",
  theme: r
}) {
  const [o, s] = P(() => t === "system" ? Hx() : t === "dark");
  H(() => {
    if (t !== "system" || typeof window > "u") return;
    const p = window.matchMedia("(prefers-color-scheme: dark)"), _ = (h) => s(h.matches);
    return p.addEventListener("change", _), () => p.removeEventListener("change", _);
  }, [t]);
  const l = j(() => {
    s((p) => !p);
  }, []), i = j((p) => {
    s(p);
  }, []), a = r ?? (o ? zx : Er);
  H(() => {
    qx(a);
  }, [a]);
  const c = K(
    () => ({
      theme: a,
      isDarkMode: o,
      toggleDarkMode: l,
      setDarkMode: i,
      colourMode: o ? "dark" : "light"
    }),
    [a, o, l, i]
  );
  return /* @__PURE__ */ e(Fn.Provider, { value: c, children: n });
}
function H6() {
  const n = sr(Fn);
  if (!n)
    throw new Error(
      "useUBSTheme must be used within a <UBSThemeProvider>. Wrap your application in <UBSThemeProvider> to use UBS theme hooks."
    );
  return n;
}
const vn = "ubs-design-system-global-styles", Or = `
/* ─── Modern CSS Reset ──────────────────────────────────────────── */

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  -webkit-text-size-adjust: 100%;
  -moz-text-size-adjust: 100%;
  text-size-adjust: 100%;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: optimizeLegibility;
  line-height: 1.15;
  tab-size: 4;
}

body {
  min-height: 100vh;
  line-height: var(--ubs-line-height-body, 1.375);
}

img,
picture,
video,
canvas,
svg {
  display: block;
  max-width: 100%;
}

input,
button,
textarea,
select {
  font: inherit;
  color: inherit;
}

p,
h1,
h2,
h3,
h4,
h5,
h6 {
  overflow-wrap: break-word;
}

a {
  color: inherit;
  text-decoration: inherit;
}

ol,
ul {
  list-style: none;
}

table {
  border-collapse: collapse;
  border-spacing: 0;
}

/* Remove default button styles */
button {
  background: none;
  border: none;
  cursor: pointer;
}

/* Ensure consistent fieldset */
fieldset {
  border: none;
}

/* ─── UBS Base Styles ───────────────────────────────────────────── */

:root {
  /* Typography */
  --ubs-font-family-primary: 'Frutiger', 'Frutiger Neue', Arial, Helvetica, sans-serif;
  --ubs-font-family-mono: 'Frutiger Mono', 'SF Mono', 'Fira Code', 'Fira Mono', monospace;
  --ubs-font-size-body: 16px;
  --ubs-font-size-min: 14px;
  --ubs-line-height-body: 1.375;

  /* Light mode semantic colours */
  --ubs-color-text-primary: #000000;
  --ubs-color-text-secondary: #5A5D5C;
  --ubs-color-text-tertiary: #7A7870;
  --ubs-color-text-inverse: #FFFFFF;
  --ubs-color-text-link: #E60000;
  --ubs-color-text-error: #BD000C;
  --ubs-color-text-warning: #E4A911;
  --ubs-color-text-success: #6F7A1A;

  --ubs-color-bg-primary: #FFFFFF;
  --ubs-color-bg-secondary: #ECEBE4;
  --ubs-color-bg-tertiary: #F5F0E1;
  --ubs-color-bg-inverse: #000000;

  --ubs-color-border-primary: #B8B3A2;
  --ubs-color-border-secondary: #CCCABC;
  --ubs-color-border-focus: #000000;

  --ubs-color-interactive-primary: #E60000;
  --ubs-color-interactive-primary-hover: #BD000C;
  --ubs-color-interactive-primary-active: #8A000A;
  --ubs-color-interactive-secondary: #000000;
  --ubs-color-interactive-secondary-hover: #404040;

  /* Corporate (constant across modes) */
  --ubs-color-red: #E60000;
  --ubs-color-black: #000000;
  --ubs-color-white: #FFFFFF;
}

html {
  font-family: var(--ubs-font-family-primary);
  font-size: var(--ubs-font-size-body);
  color: var(--ubs-color-text-primary);
  background-color: var(--ubs-color-bg-primary);
}

body {
  font-family: var(--ubs-font-family-primary);
  font-size: var(--ubs-font-size-body);
  line-height: var(--ubs-line-height-body);
  color: var(--ubs-color-text-primary);
  background-color: var(--ubs-color-bg-primary);
}

/*
 * Enforce minimum font size of 14px.
 * Applied broadly; components can override upward only.
 */
body * {
  font-size: max(var(--ubs-font-size-min), inherit);
}

/* Links */
a {
  color: var(--ubs-color-text-link);
  text-decoration: underline;
  text-underline-offset: 2px;
}

a:hover {
  text-decoration-thickness: 2px;
}

a:focus-visible {
  outline: 2px solid var(--ubs-color-border-focus);
  outline-offset: 2px;
  border-radius: 2px;
}

/* Focus visible for all interactive elements */
:focus-visible {
  outline: 2px solid var(--ubs-color-border-focus);
  outline-offset: 2px;
}

/* Selection */
::selection {
  background-color: var(--ubs-color-interactive-primary);
  color: var(--ubs-color-white);
}

/* Reduced motion */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}

/* ─── Dark Mode ─────────────────────────────────────────────────── */

@media (prefers-color-scheme: dark) {
  :root:not([data-ubs-theme="light"]) {
    --ubs-color-text-primary: #FFFFFF;
    --ubs-color-text-secondary: #B8B3A2;
    --ubs-color-text-tertiary: #8E8D83;
    --ubs-color-text-inverse: #000000;
    --ubs-color-text-link: #FE6F5D;
    --ubs-color-text-error: #FE6F5D;

    --ubs-color-bg-primary: #1A1A1A;
    --ubs-color-bg-secondary: #2A2A2A;
    --ubs-color-bg-tertiary: #333333;
    --ubs-color-bg-inverse: #FFFFFF;

    --ubs-color-border-primary: #5A5D5C;
    --ubs-color-border-secondary: #404040;
    --ubs-color-border-focus: #FFFFFF;

    --ubs-color-interactive-primary: #D83B31;
    --ubs-color-interactive-primary-hover: #FE6F5D;
    --ubs-color-interactive-primary-active: #FF8A7A;
    --ubs-color-interactive-secondary: #FFFFFF;
    --ubs-color-interactive-secondary-hover: #B8B3A2;
  }
}

/* Explicit dark mode via data attribute */
[data-ubs-theme="dark"] {
  --ubs-color-text-primary: #FFFFFF;
  --ubs-color-text-secondary: #B8B3A2;
  --ubs-color-text-tertiary: #8E8D83;
  --ubs-color-text-inverse: #000000;
  --ubs-color-text-link: #FE6F5D;
  --ubs-color-text-error: #FE6F5D;

  --ubs-color-bg-primary: #1A1A1A;
  --ubs-color-bg-secondary: #2A2A2A;
  --ubs-color-bg-tertiary: #333333;
  --ubs-color-bg-inverse: #FFFFFF;

  --ubs-color-border-primary: #5A5D5C;
  --ubs-color-border-secondary: #404040;
  --ubs-color-border-focus: #FFFFFF;

  --ubs-color-interactive-primary: #D83B31;
  --ubs-color-interactive-primary-hover: #FE6F5D;
  --ubs-color-interactive-primary-active: #FF8A7A;
  --ubs-color-interactive-secondary: #FFFFFF;
  --ubs-color-interactive-secondary-hover: #B8B3A2;
}
`;
function q6() {
  return H(() => {
    if (typeof document > "u" || document.getElementById(vn)) return;
    const n = document.createElement("style");
    return n.id = vn, n.textContent = Or, document.head.appendChild(n), () => {
      const t = document.getElementById(vn);
      t && t.remove();
    };
  }, []), null;
}
const G6 = Or, Xn = "(prefers-color-scheme: dark)";
function U6() {
  const [n, t] = P(() => typeof window > "u" ? !1 : window.matchMedia(Xn).matches);
  return H(() => {
    if (typeof window > "u") return;
    const r = window.matchMedia(Xn), o = (s) => {
      t(s.matches);
    };
    return t(r.matches), r.addEventListener("change", o), () => r.removeEventListener("change", o);
  }, []), n;
}
function Qn(n) {
  let t = n.replace("#", "");
  (t.length === 3 || t.length === 4) && (t = t.split("").map((l) => l + l).join(""));
  const r = parseInt(t.substring(0, 2), 16), o = parseInt(t.substring(2, 4), 16), s = parseInt(t.substring(4, 6), 16);
  if (isNaN(r) || isNaN(o) || isNaN(s))
    throw new Error(`Invalid hex colour: ${n}`);
  return { r, g: o, b: s };
}
function xn(n) {
  const t = n / 255;
  return t <= 0.04045 ? t / 12.92 : Math.pow((t + 0.055) / 1.055, 2.4);
}
function Jn(n) {
  const t = xn(n.r), r = xn(n.g), o = xn(n.b);
  return 0.2126 * t + 0.7152 * r + 0.0722 * o;
}
function Gx(n, t) {
  const r = Math.max(n, t), o = Math.min(n, t);
  return (r + 0.05) / (o + 0.05);
}
const er = 4.5, tr = 3, Ux = 3;
function Vx(n, t) {
  const r = Qn(n), o = Qn(t), s = Jn(r), l = Jn(o), i = Gx(s, l), a = Math.round(i * 100) / 100, c = i >= er, p = i >= tr, _ = i >= Ux;
  let h;
  return i >= 7 ? h = "AAA" : i >= er ? h = "AA" : i >= tr ? h = "AA-large" : h = "fail", {
    ratio: a,
    ratioString: `${a}:1`,
    passesNormalText: c,
    passesLargeText: p,
    passesGraphics: _,
    foreground: n,
    background: t,
    level: h
  };
}
function V6(n, t) {
  return K(
    () => Vx(n, t),
    [n, t]
  );
}
const nt = 100, le = {
  /** 100ms — micro-interactions, instant feedback */
  fast: nt,
  /** 200ms — fade, scale, standard transitions */
  normal: nt * 2,
  /** 300ms — slide, medium complexity */
  slow: nt * 3,
  /** 400ms — impulse reveal */
  impulse: nt * 4,
  /** 500ms — logo tab, complex reveals */
  complex: nt * 5,
  /** 600ms — moving frame, spring-based */
  spring: nt * 6,
  /** 1500ms — shimmer loop */
  shimmer: nt * 15,
  /** 1000ms — spinner rotation */
  spin: nt * 10,
  /** 2000ms — gentle pulse */
  pulse: nt * 20
}, ce = {
  /** Standard motion. Smooth acceleration and deceleration. */
  standard: "cubic-bezier(0.4, 0, 0.2, 1)",
  /** Impulse/spring. Fast start, gentle settle. For reveals and emphasis. */
  impulse: "cubic-bezier(0.22, 1, 0.36, 1)",
  /** Ease out. For elements leaving. */
  easeOut: "cubic-bezier(0, 0, 0.2, 1)",
  /** Ease in. For elements entering. */
  easeIn: "cubic-bezier(0.4, 0, 1, 1)",
  /** Linear. For continuous animations (spin). */
  linear: "linear"
}, nr = {
  fadeIn: "fadeOut",
  slideInUp: "slideOutUp",
  slideInDown: "slideOutDown",
  slideInLeft: "slideOutLeft",
  slideInRight: "slideOutRight",
  scaleIn: "scaleOut"
}, Rn = {
  fadeIn: {
    keyframes: "ubs-fadeIn",
    duration: le.normal,
    easing: ce.standard,
    fillMode: "both",
    iterations: 1,
    direction: "normal"
  },
  fadeOut: {
    keyframes: "ubs-fadeOut",
    duration: le.normal,
    easing: ce.standard,
    fillMode: "both",
    iterations: 1,
    direction: "normal"
  },
  slideInUp: {
    keyframes: "ubs-slideInUp",
    duration: le.slow,
    easing: ce.standard,
    fillMode: "both",
    iterations: 1,
    direction: "normal"
  },
  slideInDown: {
    keyframes: "ubs-slideInDown",
    duration: le.slow,
    easing: ce.standard,
    fillMode: "both",
    iterations: 1,
    direction: "normal"
  },
  slideInLeft: {
    keyframes: "ubs-slideInLeft",
    duration: le.slow,
    easing: ce.standard,
    fillMode: "both",
    iterations: 1,
    direction: "normal"
  },
  slideInRight: {
    keyframes: "ubs-slideInRight",
    duration: le.slow,
    easing: ce.standard,
    fillMode: "both",
    iterations: 1,
    direction: "normal"
  },
  slideOutUp: {
    keyframes: "ubs-slideOutUp",
    duration: le.slow,
    easing: ce.standard,
    fillMode: "both",
    iterations: 1,
    direction: "normal"
  },
  slideOutDown: {
    keyframes: "ubs-slideOutDown",
    duration: le.slow,
    easing: ce.standard,
    fillMode: "both",
    iterations: 1,
    direction: "normal"
  },
  slideOutLeft: {
    keyframes: "ubs-slideOutLeft",
    duration: le.slow,
    easing: ce.standard,
    fillMode: "both",
    iterations: 1,
    direction: "normal"
  },
  slideOutRight: {
    keyframes: "ubs-slideOutRight",
    duration: le.slow,
    easing: ce.standard,
    fillMode: "both",
    iterations: 1,
    direction: "normal"
  },
  scaleIn: {
    keyframes: "ubs-scaleIn",
    duration: le.normal,
    easing: ce.standard,
    fillMode: "both",
    iterations: 1,
    direction: "normal"
  },
  scaleOut: {
    keyframes: "ubs-scaleOut",
    duration: le.normal,
    easing: ce.standard,
    fillMode: "both",
    iterations: 1,
    direction: "normal"
  },
  revealImpulse: {
    keyframes: "ubs-revealImpulse",
    duration: le.impulse,
    easing: ce.impulse,
    fillMode: "both",
    iterations: 1,
    direction: "normal"
  },
  logoTabIn: {
    keyframes: "ubs-logoTabIn",
    duration: le.complex,
    easing: ce.impulse,
    fillMode: "both",
    iterations: 1,
    direction: "normal"
  },
  movingFrameReveal: {
    keyframes: "ubs-movingFrameReveal",
    duration: le.spring,
    easing: ce.impulse,
    fillMode: "both",
    iterations: 1,
    direction: "normal"
  },
  shimmer: {
    keyframes: "ubs-shimmer",
    duration: le.shimmer,
    easing: ce.linear,
    fillMode: "none",
    iterations: 1 / 0,
    direction: "normal"
  },
  spin: {
    keyframes: "ubs-spin",
    duration: le.spin,
    easing: ce.linear,
    fillMode: "none",
    iterations: 1 / 0,
    direction: "normal"
  },
  pulse: {
    keyframes: "ubs-pulse",
    duration: le.pulse,
    easing: ce.standard,
    fillMode: "none",
    iterations: 1 / 0,
    direction: "normal"
  },
  contentFadeIn: {
    keyframes: "ubs-contentFadeIn",
    duration: le.normal,
    easing: ce.standard,
    fillMode: "both",
    iterations: 1,
    direction: "normal"
  }
};
function Z6(n, t = 0, r = 50) {
  return Array.from({ length: n }, (o, s) => t + s * r);
}
function rr(n, t) {
  const r = Rn[n], o = (t == null ? void 0 : t.duration) ?? r.duration, s = (t == null ? void 0 : t.easing) ?? r.easing, l = (t == null ? void 0 : t.delay) ?? 0, i = r.iterations === 1 / 0 ? "infinite" : r.iterations;
  return `${r.keyframes} ${o}ms ${s} ${l}ms ${r.fillMode} ${i} ${r.direction}`;
}
function K6(n, t, r = {}) {
  const {
    duration: o,
    delay: s = 0,
    easing: l,
    autoPlay: i = !0,
    onFinish: a,
    onCancel: c,
    respectReducedMotion: p = !0
  } = r, [_, h] = P(!1), u = U(null), m = Rn[t], k = o ?? m.duration, g = l ?? m.easing, y = j(() => !p || typeof window > "u" ? !1 : window.matchMedia("(prefers-reduced-motion: reduce)").matches, [p]), w = j(() => {
    const x = y() ? 0 : k;
    return {
      keyframes: {
        "ubs-fadeIn": [{ opacity: 0 }, { opacity: 1 }],
        "ubs-fadeOut": [{ opacity: 1 }, { opacity: 0 }],
        "ubs-slideInUp": [
          { opacity: 0, transform: "translateY(16px)" },
          { opacity: 1, transform: "translateY(0)" }
        ],
        "ubs-slideInDown": [
          { opacity: 0, transform: "translateY(-16px)" },
          { opacity: 1, transform: "translateY(0)" }
        ],
        "ubs-slideInLeft": [
          { opacity: 0, transform: "translateX(-16px)" },
          { opacity: 1, transform: "translateX(0)" }
        ],
        "ubs-slideInRight": [
          { opacity: 0, transform: "translateX(16px)" },
          { opacity: 1, transform: "translateX(0)" }
        ],
        "ubs-slideOutUp": [
          { opacity: 1, transform: "translateY(0)" },
          { opacity: 0, transform: "translateY(-16px)" }
        ],
        "ubs-slideOutDown": [
          { opacity: 1, transform: "translateY(0)" },
          { opacity: 0, transform: "translateY(16px)" }
        ],
        "ubs-slideOutLeft": [
          { opacity: 1, transform: "translateX(0)" },
          { opacity: 0, transform: "translateX(-16px)" }
        ],
        "ubs-slideOutRight": [
          { opacity: 1, transform: "translateX(0)" },
          { opacity: 0, transform: "translateX(16px)" }
        ],
        "ubs-scaleIn": [
          { opacity: 0, transform: "scale(0.95)" },
          { opacity: 1, transform: "scale(1)" }
        ],
        "ubs-scaleOut": [
          { opacity: 1, transform: "scale(1)" },
          { opacity: 0, transform: "scale(0.95)" }
        ],
        "ubs-revealImpulse": [
          { transform: "scaleY(0)", transformOrigin: "top" },
          { transform: "scaleY(1)", transformOrigin: "top" }
        ],
        "ubs-logoTabIn": [
          { opacity: 0, transform: "translate(-24px, -24px)" },
          { opacity: 1, transform: "translate(0, 0)" }
        ],
        "ubs-movingFrameReveal": [
          { opacity: 0, transform: "translateX(100%)" },
          { opacity: 1, transform: "translateX(0)" }
        ],
        "ubs-shimmer": [
          { backgroundPosition: "-200% 0" },
          { backgroundPosition: "200% 0" }
        ],
        "ubs-spin": [
          { transform: "rotate(0deg)" },
          { transform: "rotate(360deg)" }
        ],
        "ubs-pulse": [
          { opacity: 1, transform: "scale(1)" },
          { opacity: 0.7, transform: "scale(1.05)", offset: 0.5 },
          { opacity: 1, transform: "scale(1)" }
        ],
        "ubs-contentFadeIn": [
          { opacity: 0, transform: "translateY(8px)" },
          { opacity: 1, transform: "translateY(0)" }
        ]
      }[m.keyframes] ?? [{ opacity: 0 }, { opacity: 1 }],
      options: {
        duration: x,
        delay: s,
        easing: g,
        fill: m.fillMode,
        iterations: m.iterations,
        direction: m.direction
      }
    };
  }, [m, k, g, s, y]), N = j(() => {
    const x = n.current;
    if (!x) return;
    u.current && u.current.cancel();
    const { keyframes: $, options: f } = w(), W = x.animate($, f);
    u.current = W, h(!0), W.onfinish = () => {
      h(!1), a == null || a();
    }, W.oncancel = () => {
      h(!1), c == null || c();
    };
  }, [n, w, a, c]), v = j(() => {
    var x;
    (x = u.current) == null || x.pause();
  }, []), L = j(() => {
    u.current && (u.current.cancel(), u.current = null), h(!1);
  }, []);
  return H(() => (i && N(), () => {
    var x;
    (x = u.current) == null || x.cancel();
  }), [i, N]), { isAnimating: _, play: N, pause: v, reset: L };
}
function Zx({
  animation: n = "fadeIn",
  exitAnimation: t,
  duration: r,
  delay: o = 0,
  stagger: s = 50,
  respectReducedMotion: l = !0,
  children: i
}) {
  const [a, c] = P(!1), [p, _] = P(!1), h = Ln.count(i) > 0, u = U(h), m = U(null), k = l && typeof window < "u" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (H(() => {
    if (h)
      _(!0), requestAnimationFrame(() => {
        c(!0);
      });
    else if (u.current && !h)
      if (c(!1), k)
        _(!1);
      else {
        const N = t ?? nr[n], v = N ? r ?? Rn[N].duration : 0, L = setTimeout(() => {
          _(!1);
        }, v + o);
        return () => clearTimeout(L);
      }
    u.current = h;
  }, [h, n, t, r, o, k]), !p) return null;
  const g = t ?? nr[n], y = a ? n : g;
  if (!y)
    return /* @__PURE__ */ e(O, { children: i });
  if (k)
    return /* @__PURE__ */ e(O, { children: i });
  const w = Ln.toArray(i).filter(or);
  if (w.length === 0) return null;
  if (w.length === 1) {
    const N = rr(y, {
      duration: r,
      delay: o
    }), v = w[0];
    return /* @__PURE__ */ e(
      "div",
      {
        ref: m,
        style: { animation: N },
        children: v
      }
    );
  }
  return /* @__PURE__ */ e("div", { ref: m, children: w.map((N, v) => {
    const L = o + v * s, x = rr(y, {
      duration: r,
      delay: L
    });
    return /* @__PURE__ */ e(
      "div",
      {
        style: {
          animation: x,
          // Start invisible for enter animations, visible for exit
          opacity: void 0
        },
        children: N
      },
      N.key ?? v
    );
  }) });
}
Zx.displayName = "AnimatePresence";
const Kx = "_sidebar_fjvlm_3", Yx = "_collapsed_fjvlm_16", Xx = "_toggleButton_fjvlm_22", Qx = "_toggleIcon_fjvlm_46", Jx = "_nav_fjvlm_52", e3 = "_navList_fjvlm_58", t3 = "_navItem_fjvlm_66", n3 = "_navItemActive_fjvlm_95", r3 = "_navItemIcon_fjvlm_110", o3 = "_navItemLabel_fjvlm_121", Ve = {
  sidebar: Kx,
  collapsed: Yx,
  toggleButton: Xx,
  toggleIcon: Qx,
  nav: Jx,
  navList: e3,
  navItem: t3,
  navItemActive: n3,
  navItemIcon: r3,
  navItemLabel: o3
}, jr = B(
  ({ items: n, collapsed: t = !1, onToggle: r, className: o, ...s }, l) => {
    const i = [
      Ve.sidebar,
      t ? Ve.collapsed : "",
      o ?? ""
    ].filter(Boolean).join(" ");
    return /* @__PURE__ */ d("aside", { ref: l, className: i, "aria-label": "Sidebar navigation", ...s, children: [
      /* @__PURE__ */ e(
        "button",
        {
          type: "button",
          className: Ve.toggleButton,
          onClick: r,
          "aria-label": t ? "Expand sidebar" : "Collapse sidebar",
          children: /* @__PURE__ */ e("span", { className: Ve.toggleIcon, "aria-hidden": "true", children: t ? "›" : "‹" })
        }
      ),
      /* @__PURE__ */ e("nav", { className: Ve.nav, children: /* @__PURE__ */ e("ul", { className: Ve.navList, children: n.map((a) => {
        const c = [
          Ve.navItem,
          a.active ? Ve.navItemActive : ""
        ].filter(Boolean).join(" ");
        return /* @__PURE__ */ e("li", { children: /* @__PURE__ */ d(
          "a",
          {
            href: a.href,
            className: c,
            "aria-current": a.active ? "page" : void 0,
            title: t ? a.label : void 0,
            children: [
              a.icon && /* @__PURE__ */ e("span", { className: Ve.navItemIcon, children: a.icon }),
              !t && /* @__PURE__ */ e("span", { className: Ve.navItemLabel, children: a.label }),
              a.badge && !t && /* @__PURE__ */ e(Wn, { variant: "red", size: "sm", children: a.badge })
            ]
          }
        ) }, a.href);
      }) }) })
    ] });
  }
);
jr.displayName = "Sidebar";
const s3 = "_footer_unkxn_3", i3 = "_inner_unkxn_10", a3 = "_top_unkxn_18", l3 = "_logoArea_unkxn_25", c3 = "_linkColumns_unkxn_32", d3 = "_linkGroup_unkxn_39", h3 = "_groupTitle_unkxn_43", p3 = "_linkList_unkxn_51", u3 = "_link_unkxn_32", m3 = "_bottom_unkxn_82", _3 = "_copyright_unkxn_86", Fe = {
  footer: s3,
  inner: i3,
  top: a3,
  logoArea: l3,
  linkColumns: c3,
  linkGroup: d3,
  groupTitle: h3,
  linkList: p3,
  link: u3,
  bottom: m3,
  copyright: _3
}, Fr = B(
  ({ links: n = [], copyright: t, showLogo: r = !0, className: o, ...s }, l) => {
    const i = [Fe.footer, o ?? ""].filter(Boolean).join(" ");
    return /* @__PURE__ */ e("footer", { ref: l, className: i, ...s, children: /* @__PURE__ */ d("div", { className: Fe.inner, children: [
      /* @__PURE__ */ d("div", { className: Fe.top, children: [
        r && /* @__PURE__ */ e("div", { className: Fe.logoArea, children: /* @__PURE__ */ e(Dt, { variant: "full", colour: "black", size: 100 }) }),
        n.length > 0 && /* @__PURE__ */ e("div", { className: Fe.linkColumns, children: n.map((a) => /* @__PURE__ */ d("div", { className: Fe.linkGroup, children: [
          /* @__PURE__ */ e("h3", { className: Fe.groupTitle, children: a.group }),
          /* @__PURE__ */ e("ul", { className: Fe.linkList, children: a.items.map((c) => /* @__PURE__ */ e("li", { children: /* @__PURE__ */ e("a", { href: c.href, className: Fe.link, children: c.label }) }, c.href)) })
        ] }, a.group)) })
      ] }),
      t && /* @__PURE__ */ e("div", { className: Fe.bottom, children: /* @__PURE__ */ e("p", { className: Fe.copyright, children: t }) })
    ] }) });
  }
);
Fr.displayName = "Footer";
const k3 = "_dashboard_1f8vp_3", g3 = "_navbarActions_1f8vp_13", y3 = "_notificationBadge_1f8vp_19", f3 = "_userName_1f8vp_24", b3 = "_body_1f8vp_39", v3 = "_mobileMenuButton_1f8vp_47", x3 = "_sidebarWrapper_1f8vp_79", L3 = "_sidebarOpen_1f8vp_94", w3 = "_sidebarOverlay_1f8vp_98", N3 = "_main_1f8vp_108", $3 = "_pageTitle_1f8vp_115", I3 = "_statsSection_1f8vp_125", W3 = "_statCard_1f8vp_129", A3 = "_chartsSection_1f8vp_138", B3 = "_chartCard_1f8vp_142", C3 = "_activitySection_1f8vp_151", S3 = "_sectionTitle_1f8vp_159", _e = {
  dashboard: k3,
  navbarActions: g3,
  notificationBadge: y3,
  userName: f3,
  body: b3,
  mobileMenuButton: v3,
  sidebarWrapper: x3,
  sidebarOpen: L3,
  sidebarOverlay: w3,
  main: N3,
  pageTitle: $3,
  statsSection: I3,
  statCard: W3,
  chartsSection: A3,
  chartCard: B3,
  activitySection: C3,
  sectionTitle: S3
}, M3 = B(
  ({
    title: n,
    user: t,
    stats: r = [],
    charts: o = [],
    recentActivity: s,
    notifications: l,
    sidebarItems: i = [],
    navItems: a = [],
    primaryAction: c,
    secondaryAction: p,
    className: _,
    ...h
  }, u) => {
    const [m, k] = P(!1), [g, y] = P(!1), w = j(() => {
      k((L) => !L);
    }, []), N = j(() => {
      y((L) => !L);
    }, []), v = [_e.dashboard, _ ?? ""].filter(Boolean).join(" ");
    return /* @__PURE__ */ d("div", { ref: u, className: v, ...h, children: [
      /* @__PURE__ */ e(
        Oh,
        {
          logo: /* @__PURE__ */ e(Dt, { variant: "full", colour: "black", size: 80 }),
          items: a,
          sticky: !0,
          actions: /* @__PURE__ */ d("div", { className: _e.navbarActions, children: [
            l && l.count > 0 && /* @__PURE__ */ e("span", { className: _e.notificationBadge, children: /* @__PURE__ */ e(Wn, { variant: "red", size: "sm", children: l.count }) }),
            /* @__PURE__ */ e("span", { className: _e.userName, children: t.name }),
            /* @__PURE__ */ e(
              pr,
              {
                name: t.name,
                src: t.avatar,
                size: "sm"
              }
            )
          ] })
        }
      ),
      /* @__PURE__ */ d("div", { className: _e.body, children: [
        /* @__PURE__ */ e(
          "button",
          {
            type: "button",
            className: _e.mobileMenuButton,
            onClick: N,
            "aria-label": "Toggle sidebar",
            children: "☰"
          }
        ),
        i.length > 0 && /* @__PURE__ */ d(O, { children: [
          g && // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
          /* @__PURE__ */ e(
            "div",
            {
              className: _e.sidebarOverlay,
              onClick: N,
              "aria-hidden": "true"
            }
          ),
          /* @__PURE__ */ e("div", { className: `${_e.sidebarWrapper} ${g ? _e.sidebarOpen : ""}`, children: /* @__PURE__ */ e(
            jr,
            {
              items: i,
              collapsed: m,
              onToggle: w
            }
          ) })
        ] }),
        /* @__PURE__ */ d("main", { className: _e.main, children: [
          /* @__PURE__ */ e("h1", { className: _e.pageTitle, children: n }),
          r.length > 0 && /* @__PURE__ */ e("section", { className: _e.statsSection, "aria-label": "Key statistics", children: /* @__PURE__ */ e(Tt, { columns: { mobile: 1, tablet: 2, desktop: 4 }, gap: "medium", children: r.map((L, x) => /* @__PURE__ */ e("div", { className: _e.statCard, children: /* @__PURE__ */ e(An, { ...L }) }, x)) }) }),
          o.length > 0 && /* @__PURE__ */ e("section", { className: _e.chartsSection, "aria-label": "Charts", children: /* @__PURE__ */ e(
            Tt,
            {
              columns: { mobile: 1, tablet: 1, desktop: Math.min(o.length, 3) },
              gap: "medium",
              children: o.map((L, x) => /* @__PURE__ */ e("div", { className: _e.chartCard, children: /* @__PURE__ */ e(dr, { ...L }) }, x))
            }
          ) }),
          s && s.items.length > 0 && /* @__PURE__ */ d("section", { className: _e.activitySection, "aria-label": "Recent activity", children: [
            /* @__PURE__ */ e("h2", { className: _e.sectionTitle, children: "Recent Activity" }),
            /* @__PURE__ */ e(
              ur,
              {
                items: s.items,
                variant: "divided",
                hoverable: !0
              }
            )
          ] }),
          c && /* @__PURE__ */ e(
            ln,
            {
              primaryAction: c,
              secondaryAction: p,
              sticky: !0
            }
          )
        ] })
      ] })
    ] });
  }
);
M3.displayName = "DashboardTemplate";
const T3 = "_formPage_1iu7d_3", D3 = "_alertWrapper_1iu7d_11", E3 = "_form_1iu7d_3", O3 = "_fieldGrid_1iu7d_27", zt = {
  formPage: T3,
  alertWrapper: D3,
  form: E3,
  fieldGrid: O3
}, j3 = B(
  ({
    title: n,
    subtitle: t,
    breadcrumbs: r,
    sections: o,
    onSubmit: s,
    onCancel: l,
    loading: i = !1,
    submitLabel: a = "Submit",
    cancelLabel: c = "Cancel",
    className: p,
    ..._
  }, h) => {
    const [u, m] = P(() => {
      const f = {};
      return o.forEach((W) => {
        W.fields.forEach((b) => {
          b.defaultValue !== void 0 ? f[b.name] = b.defaultValue : f[b.name] = b.type === "checkbox" ? !1 : "";
        });
      }), f;
    }), [k, g] = P({}), [y, w] = P(null), N = j((f, W) => {
      m((b) => ({ ...b, [f]: W })), g((b) => {
        if (b[f]) {
          const I = { ...b };
          return delete I[f], I;
        }
        return b;
      });
    }, []), v = j(() => {
      const f = {};
      return o.forEach((W) => {
        W.fields.forEach((b) => {
          if (b.required) {
            const I = u[b.name];
            (I === "" || I === void 0 || I === !1) && (f[b.name] = `${b.label} is required`);
          }
          if (b.type === "email" && u[b.name]) {
            const I = String(u[b.name]);
            I && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(I) && (f[b.name] = "Please enter a valid email address");
          }
        });
      }), g(f), Object.keys(f).length === 0;
    }, [o, u]), L = j(
      (f) => {
        if (f.preventDefault(), w(null), v())
          try {
            s(u);
          } catch (W) {
            w(W instanceof Error ? W.message : "An error occurred");
          }
      },
      [v, s, u]
    ), x = (f) => {
      const W = k[f.name];
      switch (f.type) {
        case "select":
          return /* @__PURE__ */ e(
            Bn,
            {
              label: f.label,
              options: f.options ?? [],
              value: String(u[f.name] ?? ""),
              onChange: (b) => N(f.name, b.target.value),
              placeholder: f.placeholder,
              required: f.required,
              error: W,
              helperText: f.helperText
            },
            f.name
          );
        case "textarea":
          return /* @__PURE__ */ e(
            _r,
            {
              label: f.label,
              value: String(u[f.name] ?? ""),
              onChange: (b) => N(f.name, b.target.value),
              placeholder: f.placeholder,
              required: f.required,
              error: W,
              helperText: f.helperText
            },
            f.name
          );
        case "checkbox":
          return /* @__PURE__ */ e(
            kr,
            {
              label: f.label,
              checked: !!u[f.name],
              onChange: (b) => N(f.name, b.target.checked)
            },
            f.name
          );
        default:
          return /* @__PURE__ */ e(
            on,
            {
              type: f.type,
              label: f.label,
              value: String(u[f.name] ?? ""),
              onChange: (b) => N(f.name, b.target.value),
              placeholder: f.placeholder,
              required: f.required,
              error: W,
              helperText: f.helperText
            },
            f.name
          );
      }
    }, $ = [zt.formPage, p ?? ""].filter(Boolean).join(" ");
    return /* @__PURE__ */ d("div", { ref: h, className: $, ..._, children: [
      /* @__PURE__ */ e(
        an,
        {
          title: n,
          subtitle: t,
          breadcrumbs: r,
          variant: "impulse"
        }
      ),
      y && /* @__PURE__ */ e("div", { className: zt.alertWrapper, children: /* @__PURE__ */ e($n, { variant: "error", children: y }) }),
      /* @__PURE__ */ d("form", { onSubmit: L, noValidate: !0, className: zt.form, children: [
        o.map((f, W) => /* @__PURE__ */ e(
          Cn,
          {
            title: f.title,
            subtitle: f.description,
            padding: "lg",
            children: /* @__PURE__ */ e("div", { className: zt.fieldGrid, children: f.fields.map(x) })
          },
          W
        )),
        /* @__PURE__ */ e(
          ln,
          {
            primaryAction: {
              label: i ? "Submitting..." : a,
              onClick: () => {
                const f = document.querySelector(`.${zt.form}`);
                f == null || f.requestSubmit();
              }
            },
            secondaryAction: l ? { label: c, onClick: l } : void 0,
            sticky: !0
          }
        )
      ] })
    ] });
  }
);
j3.displayName = "FormPageTemplate";
const F3 = "_contentPage_1ud3r_3", R3 = "_heroSection_1ud3r_11", P3 = "_heroImage_1ud3r_17", z3 = "_headerWrapper_1ud3r_26", H3 = "_body_1ud3r_34", q3 = "_bodyWithSidebar_1ud3r_40", G3 = "_mainContent_1ud3r_48", U3 = "_typographyContent_1ud3r_53", V3 = "_sidebar_1ud3r_100", Z3 = "_relatedSection_1ud3r_108", K3 = "_relatedInner_1ud3r_114", Y3 = "_relatedGrid_1ud3r_120", X3 = "_relatedLink_1ud3r_127", Ae = {
  contentPage: F3,
  heroSection: R3,
  heroImage: P3,
  headerWrapper: z3,
  body: H3,
  bodyWithSidebar: q3,
  mainContent: G3,
  typographyContent: U3,
  sidebar: V3,
  relatedSection: Z3,
  relatedInner: K3,
  relatedGrid: Y3,
  relatedLink: X3
}, Q3 = B(
  ({
    title: n,
    subtitle: t,
    heroImage: r,
    breadcrumbs: o,
    content: s,
    sidebar: l,
    relatedItems: i,
    className: a,
    ...c
  }, p) => {
    const _ = [Ae.contentPage, a ?? ""].filter(Boolean).join(" "), h = !!r, u = !!l;
    return /* @__PURE__ */ d("div", { ref: p, className: _, ...c, children: [
      h && /* @__PURE__ */ e("div", { className: Ae.heroSection, children: /* @__PURE__ */ e(cr, { variant: "transparent", children: /* @__PURE__ */ e(
        "img",
        {
          src: r,
          alt: "",
          className: Ae.heroImage,
          role: "presentation"
        }
      ) }) }),
      /* @__PURE__ */ e("div", { className: Ae.headerWrapper, children: /* @__PURE__ */ e(
        an,
        {
          title: n,
          subtitle: t,
          breadcrumbs: o,
          variant: "impulse"
        }
      ) }),
      /* @__PURE__ */ d("div", { className: `${Ae.body} ${u ? Ae.bodyWithSidebar : ""}`, children: [
        /* @__PURE__ */ e("main", { className: Ae.mainContent, children: /* @__PURE__ */ e("div", { className: Ae.typographyContent, children: s }) }),
        u && /* @__PURE__ */ e("aside", { className: Ae.sidebar, "aria-label": "Sidebar", children: l })
      ] }),
      i && i.length > 0 && /* @__PURE__ */ e("section", { className: Ae.relatedSection, "aria-label": "Related content", children: /* @__PURE__ */ d("div", { className: Ae.relatedInner, children: [
        /* @__PURE__ */ e(ze, { variant: "subheadline1", children: "Related" }),
        /* @__PURE__ */ e("div", { className: Ae.relatedGrid, children: i.map((m) => /* @__PURE__ */ e(
          "a",
          {
            href: m.href,
            className: Ae.relatedLink,
            children: /* @__PURE__ */ d(In, { padding: "medium", children: [
              /* @__PURE__ */ e(ze, { variant: "subheadline2", children: m.title }),
              m.description && /* @__PURE__ */ e(ze, { variant: "smallCopyText", children: m.description })
            ] })
          },
          m.href
        )) })
      ] }) })
    ] });
  }
);
Q3.displayName = "ContentPageTemplate";
const J3 = "_landingPage_1vwgu_3", e8 = "_hero_1vwgu_13", t8 = "_heroWithImage_1vwgu_23", n8 = "_heroInner_1vwgu_27", r8 = "_heroTitle_1vwgu_35", o8 = "_heroTitleLight_1vwgu_44", s8 = "_heroSubtitle_1vwgu_48", i8 = "_heroSubtitleLight_1vwgu_57", a8 = "_sectionInner_1vwgu_63", l8 = "_featuresSection_1vwgu_71", c8 = "_featureCard_1vwgu_76", d8 = "_featureIcon_1vwgu_81", h8 = "_statsSection_1vwgu_95", p8 = "_statCard_1vwgu_100", u8 = "_testimonialsSection_1vwgu_109", m8 = "_testimonialCard_1vwgu_114", _8 = "_testimonialQuote_1vwgu_122", k8 = "_testimonialAuthor_1vwgu_131", ie = {
  landingPage: J3,
  hero: e8,
  heroWithImage: t8,
  heroInner: n8,
  heroTitle: r8,
  heroTitleLight: o8,
  heroSubtitle: s8,
  heroSubtitleLight: i8,
  sectionInner: a8,
  featuresSection: l8,
  featureCard: c8,
  featureIcon: d8,
  statsSection: h8,
  statCard: p8,
  testimonialsSection: u8,
  testimonialCard: m8,
  testimonialQuote: _8,
  testimonialAuthor: k8
}, g8 = B(
  ({
    hero: n,
    features: t = [],
    testimonials: r = [],
    stats: o = [],
    footer: s,
    className: l,
    ...i
  }, a) => {
    const c = [ie.landingPage, l ?? ""].filter(Boolean).join(" "), p = n.backgroundImage ? {
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.6)), url(${n.backgroundImage})`,
      backgroundSize: "cover",
      backgroundPosition: "center"
    } : {}, _ = n.backgroundImage ? "white" : "black";
    return /* @__PURE__ */ d("div", { ref: a, className: c, ...i, children: [
      /* @__PURE__ */ e(
        "section",
        {
          className: `${ie.hero} ${n.backgroundImage ? ie.heroWithImage : ""}`,
          style: p,
          children: /* @__PURE__ */ d("div", { className: ie.heroInner, children: [
            /* @__PURE__ */ e(
              Dt,
              {
                variant: "full",
                colour: _ === "white" ? "white" : "black",
                size: 100
              }
            ),
            /* @__PURE__ */ e("h1", { className: `${ie.heroTitle} ${n.backgroundImage ? ie.heroTitleLight : ""}`, children: n.title }),
            n.subtitle && /* @__PURE__ */ e("p", { className: `${ie.heroSubtitle} ${n.backgroundImage ? ie.heroSubtitleLight : ""}`, children: n.subtitle }),
            /* @__PURE__ */ e(
              Vt,
              {
                variant: "primary",
                size: "large",
                onClick: n.cta.onClick,
                children: n.cta.label
              }
            )
          ] })
        }
      ),
      t.length > 0 && /* @__PURE__ */ e("section", { className: ie.featuresSection, "aria-label": "Features", children: /* @__PURE__ */ e("div", { className: ie.sectionInner, children: /* @__PURE__ */ e(Tt, { columns: { mobile: 1, tablet: 2, desktop: 3 }, gap: "large", children: t.map((h, u) => /* @__PURE__ */ d("div", { className: ie.featureCard, children: [
        /* @__PURE__ */ e("div", { className: ie.featureIcon, children: h.icon }),
        /* @__PURE__ */ e(ze, { variant: "subheadline2", children: h.title }),
        /* @__PURE__ */ e(ze, { variant: "smallCopyText", children: h.description })
      ] }, u)) }) }) }),
      o.length > 0 && /* @__PURE__ */ e("section", { className: ie.statsSection, "aria-label": "Key statistics", children: /* @__PURE__ */ e("div", { className: ie.sectionInner, children: /* @__PURE__ */ e(Tt, { columns: { mobile: 1, tablet: 2, desktop: 4 }, gap: "medium", children: o.map((h, u) => /* @__PURE__ */ e("div", { className: ie.statCard, children: /* @__PURE__ */ e(An, { ...h }) }, u)) }) }) }),
      r.length > 0 && /* @__PURE__ */ e("section", { className: ie.testimonialsSection, "aria-label": "Testimonials", children: /* @__PURE__ */ e("div", { className: ie.sectionInner, children: /* @__PURE__ */ e(Tt, { columns: { mobile: 1, tablet: 2 }, gap: "large", children: r.map((h, u) => /* @__PURE__ */ d("blockquote", { className: ie.testimonialCard, children: [
        /* @__PURE__ */ d("p", { className: ie.testimonialQuote, children: [
          "“",
          h.quote,
          "”"
        ] }),
        /* @__PURE__ */ d("footer", { className: ie.testimonialAuthor, children: [
          /* @__PURE__ */ e(ze, { variant: "copyText", weight: "bold", children: h.author }),
          h.role && /* @__PURE__ */ e(ze, { variant: "smallCopyText", children: h.role })
        ] })
      ] }, u)) }) }) }),
      /* @__PURE__ */ e(
        Fr,
        {
          links: s == null ? void 0 : s.links,
          copyright: (s == null ? void 0 : s.copyright) ?? `© ${(/* @__PURE__ */ new Date()).getFullYear()} UBS Group AG. All rights reserved.`,
          showLogo: !0
        }
      )
    ] });
  }
);
g8.displayName = "LandingPageTemplate";
const y8 = "_tablePage_1ebn0_3", f8 = "_headerActionsRow_1ebn0_14", b8 = "_filterBar_1ebn0_22", v8 = "_filterItem_1ebn0_31", x8 = "_bulkActionBar_1ebn0_38", L8 = "_selectionCount_1ebn0_48", w8 = "_bulkActions_1ebn0_54", N8 = "_tableWrapper_1ebn0_61", $8 = "_paginationWrapper_1ebn0_69", rt = {
  tablePage: y8,
  headerActionsRow: f8,
  filterBar: b8,
  filterItem: v8,
  bulkActionBar: x8,
  selectionCount: L8,
  bulkActions: w8,
  tableWrapper: N8,
  paginationWrapper: $8
}, I8 = B(
  ({
    title: n,
    breadcrumbs: t,
    columns: r,
    data: o,
    filters: s = [],
    actions: l = [],
    onExport: i,
    headerActions: a,
    pageSize: c = 20,
    loading: p = !1,
    className: _,
    ...h
  }, u) => {
    const [m, k] = P(void 0), [g, y] = P("asc"), [w, N] = P(/* @__PURE__ */ new Set()), [v, L] = P(1), [x, $] = P({}), f = j((D, A) => {
      k(D), y(A);
    }, []), W = j((D, A) => {
      $((C) => ({ ...C, [D]: A })), L(1);
    }, []), b = Math.max(1, Math.ceil(o.length / c)), I = K(() => {
      const D = (v - 1) * c;
      return o.slice(D, D + c);
    }, [o, v, c]), S = w.size > 0, R = [rt.tablePage, _ ?? ""].filter(Boolean).join(" ");
    return /* @__PURE__ */ d("div", { ref: u, className: R, ...h, children: [
      /* @__PURE__ */ e(
        an,
        {
          title: n,
          breadcrumbs: t,
          actions: /* @__PURE__ */ d("div", { className: rt.headerActionsRow, children: [
            a,
            i && /* @__PURE__ */ e(Vt, { variant: "outline", size: "small", onClick: i, children: "Export" })
          ] })
        }
      ),
      s.length > 0 && /* @__PURE__ */ e("div", { className: rt.filterBar, role: "toolbar", "aria-label": "Table filters", children: s.map((D) => /* @__PURE__ */ e("div", { className: rt.filterItem, children: /* @__PURE__ */ e(
        Bn,
        {
          label: D.label,
          options: D.options,
          value: x[D.label] ?? "",
          onChange: (A) => W(D.label, A.target.value),
          size: "sm",
          placeholder: `All ${D.label}`
        }
      ) }, D.label)) }),
      S && l.length > 0 && /* @__PURE__ */ d("div", { className: rt.bulkActionBar, role: "toolbar", "aria-label": "Bulk actions", children: [
        /* @__PURE__ */ d("span", { className: rt.selectionCount, children: [
          w.size,
          " row",
          w.size !== 1 ? "s" : "",
          " selected"
        ] }),
        /* @__PURE__ */ e("div", { className: rt.bulkActions, children: l.map((D, A) => /* @__PURE__ */ e(
          Vt,
          {
            variant: D.variant ?? "outline",
            size: "small",
            onClick: () => D.onClick(w),
            children: D.label
          },
          A
        )) })
      ] }),
      /* @__PURE__ */ e("div", { className: rt.tableWrapper, children: /* @__PURE__ */ e(
        hr,
        {
          columns: r,
          data: I,
          sortBy: m,
          sortDirection: g,
          onSort: f,
          selectable: !0,
          selectedRows: w,
          onSelectionChange: N,
          striped: !0,
          hoverable: !0,
          stickyHeader: !0,
          loading: p
        }
      ) }),
      b > 1 && /* @__PURE__ */ e("div", { className: rt.paginationWrapper, children: /* @__PURE__ */ e(
        ap,
        {
          currentPage: v,
          totalPages: b,
          onChange: L
        }
      ) })
    ] });
  }
);
I8.displayName = "TablePageTemplate";
const W8 = "_loginPage_1n6c2_3", A8 = "_loginCard_1n6c2_15", B8 = "_logoWrapper_1n6c2_22", C8 = "_titleBlock_1n6c2_30", S8 = "_errorAlert_1n6c2_37", M8 = "_form_1n6c2_43", T8 = "_submitButton_1n6c2_51", D8 = "_forgotLink_1n6c2_58", E8 = "_forgotButton_1n6c2_63", ot = {
  loginPage: W8,
  loginCard: A8,
  logoWrapper: B8,
  titleBlock: C8,
  errorAlert: S8,
  form: M8,
  submitButton: T8,
  forgotLink: D8,
  forgotButton: E8
}, O8 = B(
  ({
    onLogin: n,
    onForgotPassword: t,
    logo: r,
    title: o = "Sign In",
    subtitle: s,
    error: l,
    loading: i = !1,
    className: a,
    ...c
  }, p) => {
    const [_, h] = P(""), [u, m] = P(""), [k, g] = P({}), y = j(() => {
      const v = {};
      return _.trim() ? /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(_) || (v.email = "Please enter a valid email address") : v.email = "Email is required", u || (v.password = "Password is required"), g(v), Object.keys(v).length === 0;
    }, [_, u]), w = j(
      (v) => {
        v.preventDefault(), y() && n(_, u);
      },
      [y, n, _, u]
    ), N = [ot.loginPage, a ?? ""].filter(Boolean).join(" ");
    return /* @__PURE__ */ e("div", { ref: p, className: N, ...c, children: /* @__PURE__ */ e("div", { className: ot.loginCard, children: /* @__PURE__ */ d(In, { padding: "large", children: [
      /* @__PURE__ */ e("div", { className: ot.logoWrapper, children: r ?? /* @__PURE__ */ e(Dt, { variant: "full", colour: "black", size: 100 }) }),
      /* @__PURE__ */ d("div", { className: ot.titleBlock, children: [
        /* @__PURE__ */ e(ze, { variant: "keyline", children: o }),
        s && /* @__PURE__ */ e(ze, { variant: "smallCopyText", children: s })
      ] }),
      l && /* @__PURE__ */ e("div", { className: ot.errorAlert, children: /* @__PURE__ */ e($n, { variant: "error", children: l }) }),
      /* @__PURE__ */ d("form", { onSubmit: w, noValidate: !0, className: ot.form, children: [
        /* @__PURE__ */ e(
          on,
          {
            type: "email",
            label: "Email",
            placeholder: "you@example.com",
            value: _,
            onChange: (v) => {
              h(v.target.value), k.email && g((L) => ({ ...L, email: void 0 }));
            },
            error: k.email,
            required: !0
          }
        ),
        /* @__PURE__ */ e(
          on,
          {
            type: "password",
            label: "Password",
            placeholder: "Enter your password",
            value: u,
            onChange: (v) => {
              m(v.target.value), k.password && g((L) => ({ ...L, password: void 0 }));
            },
            error: k.password,
            required: !0
          }
        ),
        /* @__PURE__ */ e(
          Vt,
          {
            variant: "primary",
            size: "large",
            type: "submit",
            disabled: i,
            className: ot.submitButton,
            children: i ? "Signing in..." : "Sign In"
          }
        )
      ] }),
      t && /* @__PURE__ */ e("div", { className: ot.forgotLink, children: /* @__PURE__ */ e(
        "button",
        {
          type: "button",
          className: ot.forgotButton,
          onClick: t,
          children: "Forgot password?"
        }
      ) })
    ] }) }) });
  }
);
O8.displayName = "LoginTemplate";
const j8 = "_errorPage_cboyq_3", F8 = "_content_cboyq_13", R8 = "_logoWrapper_cboyq_20", P8 = "_errorCode_cboyq_26", rn = {
  errorPage: j8,
  content: F8,
  logoWrapper: R8,
  errorCode: P8
}, z8 = {
  404: "Page not found",
  500: "Something went wrong",
  403: "Access denied"
}, H8 = {
  404: "The page you are looking for does not exist or has been moved.",
  500: "We encountered an unexpected error. Please try again later.",
  403: "You do not have permission to access this page."
}, q8 = B(
  ({
    code: n,
    title: t,
    message: r,
    actionLabel: o = "Go Home",
    onAction: s,
    className: l,
    ...i
  }, a) => {
    const c = t ?? z8[n], p = r ?? H8[n], _ = [rn.errorPage, l ?? ""].filter(Boolean).join(" ");
    return /* @__PURE__ */ e("div", { ref: a, className: _, ...i, children: /* @__PURE__ */ d("div", { className: rn.content, children: [
      /* @__PURE__ */ e("div", { className: rn.logoWrapper, children: /* @__PURE__ */ e(Dt, { variant: "full", colour: "black", size: 80 }) }),
      /* @__PURE__ */ e("div", { className: rn.errorCode, "aria-hidden": "true", children: n }),
      /* @__PURE__ */ e(
        mr,
        {
          title: c,
          description: p,
          action: s ? { label: o, onClick: s } : void 0
        }
      )
    ] }) });
  }
);
q8.displayName = "ErrorPageTemplate";
const G8 = "_settingsPage_20int_3", U8 = "_header_20int_13", V8 = "_body_20int_23", Z8 = "_sidebarNav_20int_37", K8 = "_content_20int_45", Ht = {
  settingsPage: G8,
  header: U8,
  body: V8,
  sidebarNav: Z8,
  content: K8
}, Y8 = B(
  ({
    sections: n,
    onSave: t,
    onCancel: r,
    unsavedChanges: o = !1,
    title: s = "Settings",
    className: l,
    ...i
  }, a) => {
    const [c, p] = P(
      n.length > 0 ? n[0].title : ""
    ), _ = K(
      () => n.map((k) => ({
        label: k.title,
        value: k.title
      })),
      [n]
    ), h = K(
      () => n.find((k) => k.title === c) ?? n[0],
      [n, c]
    ), u = j(() => {
      r && r();
    }, [r]), m = [Ht.settingsPage, l ?? ""].filter(Boolean).join(" ");
    return /* @__PURE__ */ d("div", { ref: a, className: m, ...i, children: [
      /* @__PURE__ */ e("div", { className: Ht.header, children: /* @__PURE__ */ e(ze, { variant: "keyline", children: s }) }),
      /* @__PURE__ */ d("div", { className: Ht.body, children: [
        /* @__PURE__ */ e("div", { className: Ht.sidebarNav, children: /* @__PURE__ */ e(
          Gh,
          {
            tabs: _,
            activeTab: c,
            onChange: p,
            variant: "contained"
          }
        ) }),
        /* @__PURE__ */ e("main", { className: Ht.content, children: h && /* @__PURE__ */ e(
          Cn,
          {
            title: h.title,
            subtitle: h.description,
            padding: "lg",
            children: h.content
          }
        ) })
      ] }),
      o && /* @__PURE__ */ e(
        ln,
        {
          primaryAction: { label: "Save Changes", onClick: t },
          secondaryAction: r ? { label: "Cancel", onClick: u } : void 0,
          sticky: !0
        }
      )
    ] });
  }
);
Y8.displayName = "SettingsTemplate";
export {
  PL as ACCESSIBILITY_RULES,
  EL as ACCESSIBILITY_STANDARD,
  zL as ACCESSIBILITY_TOOLS,
  FL as ACCESSIBLE_TYPOGRAPHY,
  x6 as ANIMATED_CONTENT,
  A6 as AVAILABLE_KEYS,
  B6 as AVAILABLE_RELATIVE_MINORS,
  pc as Accordion,
  ln as ActionBar,
  m2 as AgendaSteps,
  $n as Alert,
  N2 as Amount,
  Zx as AnimatePresence,
  ci as ArrowDown,
  ii as ArrowLeft,
  ai as ArrowRight,
  li as ArrowUp,
  P2 as Article,
  pr as Avatar,
  Hc as AvatarGroup,
  oa as Award,
  Mn as BORDEAUX_I,
  Tn as BORDEAUX_II,
  br as BORDEAUX_III,
  D6 as BRANDED_MUSIC,
  O6 as BRAND_PERSONALITY,
  vr as BRONZE_I,
  xr as BRONZE_II,
  Lr as BRONZE_III,
  Wn as Badge,
  Ki as BankNote,
  rk as BannerBox,
  ax as BarChart,
  Si as Bell,
  eL as Breadcrumbs,
  ta as Briefcase,
  la as Building,
  Vt as Button,
  Vy as ButtonGroup,
  rf as ButtonSelect,
  Wx as CHART_COLOURS,
  lL as CHART_COLOUR_NAMES,
  o6 as CHART_DIMENSION,
  a6 as CHART_GAPS,
  RL as CHART_GAP_SPECS,
  jL as CHART_SEPARATOR_MIN,
  s6 as CIRCULAR_PREFERENCE,
  y6 as COLOUR_DIRECTIONS,
  QL as COLOUR_LAYERS,
  l6 as COLOUR_SEQUENCES,
  Sx as COLOUR_SEQUENCE_COMPLEX,
  Ax as COLOUR_SEQUENCE_MONOCHROME,
  Cx as COLOUR_SEQUENCE_MULTICHROME,
  Bx as COLOUR_SEQUENCE_POLYCHROME,
  OL as CONTRAST_RATIOS,
  R0 as CTA,
  fr as CTAArrow,
  Ti as Calendar,
  In as Card,
  Fi as Chart,
  Ni as Check,
  $i as CheckCircle,
  kr as Checkbox,
  ni as ChevronDown,
  oi as ChevronLeft,
  si as ChevronRight,
  ri as ChevronUp,
  dd as Chip,
  hd as ChipGroup,
  Di as Clock,
  hi as Close,
  Yi as Coins,
  Kf as ComboBox,
  _k as ContentBlock,
  Q3 as ContentPageTemplate,
  Lb as ContextSelector,
  aa as Contract,
  bi as Copy,
  wk as CountryFlag,
  Zi as CreditCard,
  Pk as CreditCardDisplay,
  xa as CustomerSupport,
  On as DARK_MODE_PRIMARY_RED,
  Ut as DARK_MODE_SECONDARY_RED,
  h6 as DATA_VIZ_LINES,
  u6 as DATA_VIZ_MOTION,
  m6 as DATA_VIZ_RULES,
  d6 as DATA_VIZ_TYPOGRAPHY,
  M3 as DashboardTemplate,
  dr as DataViz,
  uh as DatePicker,
  ba as DigitalBanking,
  Es as Divider,
  Ei as Document,
  Ri as DonutChart,
  Y5 as DonutChartWidget,
  gi as Download,
  Zb as Dropdown,
  Nf as DropdownButton,
  p6 as EMPHASIS_OPTIONS,
  nr as EXIT_ANIMATION_MAP,
  vi as Edit,
  mr as EmptyState,
  qi as ErrorIcon,
  q8 as ErrorPageTemplate,
  pL as FONT_FAMILY_FALLBACK,
  hL as FONT_FAMILY_PRIMARY,
  uL as FONT_STACK,
  mL as FONT_WEIGHTS,
  Vv as FileUpload,
  _i as Filter,
  Cm as FilterGroup,
  ya as FinancialPlanning,
  pa as Fingerprint,
  Oi as Folder,
  Fr as Footer,
  Kt as FormField,
  j3 as FormPageTemplate,
  X4 as FormValidation,
  Sn as GRAY_I,
  Zt as GRAY_II,
  cn as GRAY_III,
  dn as GRAY_IV,
  Yt as GRAY_V,
  Xt as GRAY_VI,
  DL as GRID_RULES,
  SL as GRID_TYPES,
  ga as GlobalNetwork,
  Pi as Globe,
  Tt as Grid,
  Ji as Growth,
  i6 as HIGHLIGHT_COLOUR,
  na as Handshake,
  Uu as Header,
  Ui as Help,
  Wi as Home,
  KL as ICON_ANIMATION,
  YL as ICON_ANIMATION_FORMATS,
  wa as ICON_SIZE_MAP,
  e6 as ILLUSTRATION_ADDITIONAL_COLOUR,
  t6 as ILLUSTRATION_ANIMATION,
  n6 as ILLUSTRATION_ANIMATION_RULES,
  JL as ILLUSTRATION_DOMINANT_COLOUR,
  r6 as ILLUSTRATION_RULES,
  XL as ILLUSTRATION_STYLE,
  HL as ILLUSTRATIVE_ICON,
  GL as ILLUSTRATIVE_ICON_RULES,
  qL as ILLUSTRATIVE_ICON_VARIANTS,
  ML as IMAGE_PREFERENCE,
  bL as IMPULSE_COLOUR,
  LL as IMPULSE_HEIGHT,
  wL as IMPULSE_RULES,
  xL as IMPULSE_SPACE,
  vL as IMPULSE_WIDTH,
  c6 as INSIGHT_FLAG,
  fL as ISO_MARGINS,
  Na as Icon,
  ji as ImageIcon,
  Fo as Impulse,
  zi as Info,
  on as Input,
  ma as InvestmentGrowth,
  WL as KEY_SYMBOL,
  AL as KEY_SYMBOL_RULES,
  ha as Key,
  TL as LAYOUT_OPTIONS,
  $L as LOGO_POSITION,
  NL as LOGO_SIZE,
  IL as LOGO_TAB,
  M6 as LOUDNESS_STANDARDS,
  g8 as LandingPageTemplate,
  Xo as Layout,
  sa as Lightbulb,
  bx as LineChart,
  kp as Links,
  ur as List,
  da as Lock,
  O8 as LoginTemplate,
  Dt as Logo,
  Y0 as LogoTab,
  f6 as MATERIAL_APPLICATIONS,
  F6 as MESSAGING_PRINCIPLE,
  R6 as MESSAGING_RULES,
  j6 as MESSAGING_STYLES,
  $r as METALLIC_SILVER,
  BL as MOVING_FRAME,
  CL as MOVING_FRAME_RULES,
  Mi as Mail,
  fu as MastheadNavigation,
  di as Menu,
  yy as MenuButton,
  Np as MenuListItem,
  O4 as MessageBox,
  wi as Minus,
  rL as Modal,
  pi as MoreHorizontal,
  ui as MoreVertical,
  cr as MovingFrame,
  gL as NON_LATIN_FONTS,
  Oh as Navbar,
  eg as Overlay,
  M5 as OverlayMessage,
  Dn as PASTEL_I,
  En as PASTEL_II,
  g6 as PATTERN_COLOURS,
  Tx as PATTERN_COLOURS_BORDEAUX,
  Dx as PATTERN_COLOURS_BRONZE,
  Mx as PATTERN_COLOURS_GRAY,
  k6 as PATTERN_RATIO,
  b6 as PATTERN_RULES,
  _6 as PATTERN_VARIANTS,
  w6 as PLATFORM_SPECS,
  cL as POLYCHROME_COLOURS,
  lm as PageFooter,
  an as PageHeader,
  ap as Pagination,
  kg as Panel,
  za as Pattern,
  Ix as PieChart,
  Xi as PiggyBank,
  Li as Plus,
  sL as Popover,
  ea as Portfolio,
  ia as Presentation,
  zp as ProcessNavigation,
  iL as Progress,
  hn as RAG_AMBER,
  pn as RAG_GREEN,
  jn as RAG_RED,
  K1 as Radio,
  Y1 as RadioGroup,
  ti as SIZE_MAP,
  L6 as SOCIAL_MEDIA_COLOUR_DIRECTIONS,
  $6 as SOCIAL_MEDIA_RULES,
  W6 as SOUND_ADAPTATIONS,
  C6 as SOUND_INTEGRITY,
  I6 as SOUND_LOGO_PRINCIPAL,
  S6 as SOUND_POSITION,
  T6 as SOUND_RULES,
  v6 as STATIC_CONTENT,
  Qi as SafeBox,
  mi as Search,
  Cn as SectionWrapper,
  ka as SecurityShield,
  Bn as Select,
  Ci as Settings,
  Y8 as SettingsTemplate,
  fi as Share,
  ca as Shield,
  jr as Sidebar,
  Dg as SidebarNav,
  aL as Skeleton,
  cv as Slider,
  _5 as Snackbar,
  nl as SocialMediaTemplate,
  ki as Sort,
  Oy as SplitButton,
  An as Stat,
  Gi as Success,
  fa as SuccessCelebration,
  va as SustainableGrowth,
  wv as Switch,
  N6 as TEMPLATE_FORMATS,
  E6 as TONE_PILLARS,
  wr as TRADING_GREEN,
  Nr as TRADING_RED,
  _L as TYPOGRAPHY_HIERARCHY,
  yL as TYPOGRAPHY_RULES,
  hr as Table,
  I8 as TablePageTemplate,
  Gh as Tabs,
  xc as Tag,
  ra as Target,
  _a as TeamCollaboration,
  _r as Textarea,
  Jg as Tile,
  f4 as TimePicker,
  z5 as Timer,
  nL as ToastProvider,
  ah as Toggle,
  oL as Tooltip,
  Zs as TradingIndicator,
  xi as Trash,
  tu as TreeNavigation,
  ze as Typography,
  q6 as UBSGlobalStyles,
  Fn as UBSThemeContext,
  z6 as UBSThemeProvider,
  gt as UBS_BLACK,
  nt as UBS_DURATION_BASE,
  gn as UBS_ICON_COLOURS,
  dL as UBS_PALETTE,
  sn as UBS_RED,
  kt as UBS_WHITE,
  yi as Upload,
  Ai as User,
  Bi as Users,
  VL as WEB_APP_ICON_COLOUR,
  ZL as WEB_APP_ICON_RULES,
  UL as WEB_APP_ICON_SIZES,
  kL as WEB_TYPOGRAPHY,
  Vi as Wallet,
  Hi as Warning,
  ua as WelcomeScene,
  Ii as XCircle,
  Mr as accessibility,
  Rn as animationPresets,
  Mt as breakpoints,
  rr as buildAnimationCSS,
  Vx as checkContrast,
  Cr as colours,
  F as createIcon,
  Ex as fontFamily,
  jx as fontSize,
  Ox as fontWeight,
  Z6 as getStaggerDelays,
  Sr as layout,
  Fx as lineHeight,
  Ir as mediaQueries,
  Rx as semanticColours,
  Px as semanticColoursDark,
  Ar as spacing,
  Wr as spacingScale,
  Tr as transitions,
  Br as typography,
  le as ubsDurations,
  ce as ubsEasings,
  G6 as ubsGlobalCSS,
  P6 as ubsTheme,
  zx as ubsThemeDark,
  Er as ubsThemeLight,
  K6 as useAnimation,
  V6 as useContrastCheck,
  U6 as useDarkMode,
  tL as useToast,
  H6 as useUBSTheme,
  Dr as zIndex
};
//# sourceMappingURL=ubs-design-system.es.js.map
