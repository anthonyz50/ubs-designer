import { jsxs as d, jsx as e, Fragment as w } from "react/jsx-runtime";
import Ye, { forwardRef as L, useState as T, useCallback as C, useEffect as G, createElement as Fr, useId as oe, useMemo as ce, useRef as V, Children as vt, isValidElement as er, cloneElement as Or, useContext as tr, createContext as rr } from "react";
import { createPortal as nr } from "react-dom";
const Pr = "_alert_1n9gp_5", Dr = "_alertFadeIn_1n9gp_1", qr = "_error_1n9gp_32", zr = "_icon_1n9gp_38", Gr = "_warning_1n9gp_42", Ur = "_success_1n9gp_52", Hr = "_info_1n9gp_62", Vr = "_content_1n9gp_81", Zr = "_title_1n9gp_86", Yr = "_message_1n9gp_93", Kr = "_dismiss_1n9gp_101", $e = {
  alert: Pr,
  alertFadeIn: Dr,
  error: qr,
  icon: zr,
  warning: Gr,
  success: Ur,
  info: Hr,
  content: Vr,
  title: Zr,
  message: Yr,
  dismiss: Kr
}, Xr = ({ variant: r }) => {
  const t = {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": !0,
    className: $e.icon
  };
  switch (r) {
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
}, Lt = L(
  ({
    variant: r = "info",
    title: t,
    dismissible: n = !1,
    onDismiss: o,
    children: s,
    className: l,
    ...a
  }, i) => {
    const [c, p] = T(!1), m = C(() => {
      p(!0), o == null || o();
    }, [o]);
    if (c) return null;
    const h = [
      $e.alert,
      $e[r],
      l ?? ""
    ].filter(Boolean).join(" ");
    return /* @__PURE__ */ d(
      "div",
      {
        ref: i,
        className: h,
        role: "alert",
        "aria-live": r === "error" ? "assertive" : "polite",
        ...a,
        children: [
          /* @__PURE__ */ e(Xr, { variant: r }),
          /* @__PURE__ */ d("div", { className: $e.content, children: [
            t && /* @__PURE__ */ e("div", { className: $e.title, children: t }),
            s && /* @__PURE__ */ e("div", { className: $e.message, children: s })
          ] }),
          n && /* @__PURE__ */ e(
            "button",
            {
              type: "button",
              className: $e.dismiss,
              onClick: m,
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
Lt.displayName = "Alert";
const Qr = "_button_1nqd0_3", Jr = "_small_1nqd0_34", en = "_medium_1nqd0_40", tn = "_large_1nqd0_46", rn = "_primary_1nqd0_55", nn = "_secondary_1nqd0_72", on = "_outline_1nqd0_89", sn = "_ghost_1nqd0_107", an = "_fullWidth_1nqd0_128", ln = "_loading_1nqd0_134", cn = "_spinner_1nqd0_139", dn = "_spinnerIcon_1nqd0_145", hn = "_spin_1nqd0_139", pn = "_icon_1nqd0_162", mn = "_label_1nqd0_169", de = {
  button: Qr,
  small: Jr,
  medium: en,
  large: tn,
  primary: rn,
  secondary: nn,
  outline: on,
  ghost: sn,
  fullWidth: an,
  loading: ln,
  spinner: cn,
  spinnerIcon: dn,
  spin: hn,
  icon: pn,
  label: mn
}, Xe = L(
  ({
    variant: r = "primary",
    size: t = "medium",
    loading: n = !1,
    fullWidth: o = !1,
    disabled: s = !1,
    icon: l,
    children: a,
    className: i,
    type: c = "button",
    ...p
  }, m) => {
    const h = s || n, k = [
      de.button,
      de[r],
      de[t],
      o ? de.fullWidth : "",
      n ? de.loading : "",
      i ?? ""
    ].filter(Boolean).join(" ");
    return /* @__PURE__ */ d(
      "button",
      {
        ref: m,
        type: c,
        className: k,
        disabled: h,
        "aria-disabled": h,
        "aria-busy": n,
        ...p,
        children: [
          n && /* @__PURE__ */ e("span", { className: de.spinner, "aria-hidden": "true", children: /* @__PURE__ */ e(
            "svg",
            {
              className: de.spinnerIcon,
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
          l && !n && /* @__PURE__ */ e("span", { className: de.icon, children: l }),
          a && /* @__PURE__ */ e("span", { className: de.label, children: a })
        ]
      }
    );
  }
);
Xe.displayName = "Button";
const kn = "_card_1mi5m_4", un = "_pastel1_1mi5m_23", _n = "_pastel2_1mi5m_29", yn = "_gray_1mi5m_35", gn = "_padding-none_1mi5m_43", fn = "_padding-small_1mi5m_47", bn = "_header_1mi5m_47", xn = "_body_1mi5m_48", vn = "_footer_1mi5m_49", Ln = "_padding-medium_1mi5m_53", wn = "_padding-large_1mi5m_59", Wn = "_interactive_1mi5m_93", Nn = "_hoverable_1mi5m_103", fe = {
  card: kn,
  default: "_default_1mi5m_17",
  pastel1: un,
  pastel2: _n,
  gray: yn,
  "padding-none": "_padding-none_1mi5m_43",
  paddingNone: gn,
  "padding-small": "_padding-small_1mi5m_47",
  paddingSmall: fn,
  header: bn,
  body: xn,
  footer: vn,
  "padding-medium": "_padding-medium_1mi5m_53",
  paddingMedium: Ln,
  "padding-large": "_padding-large_1mi5m_59",
  paddingLarge: wn,
  interactive: Wn,
  hoverable: Nn
}, wt = L(
  ({
    variant: r = "default",
    padding: t = "medium",
    hoverable: n = !1,
    header: o,
    footer: s,
    children: l,
    className: a,
    onClick: i,
    role: c,
    tabIndex: p,
    ...m
  }, h) => {
    const k = n || !!i, u = [
      fe.card,
      fe[r],
      fe[`padding-${t}`],
      n ? fe.hoverable : "",
      k ? fe.interactive : "",
      a ?? ""
    ].filter(Boolean).join(" ");
    return /* @__PURE__ */ d(
      "div",
      {
        ref: h,
        className: u,
        onClick: i,
        role: c ?? (k ? "button" : void 0),
        tabIndex: p ?? (k ? 0 : void 0),
        ...m,
        children: [
          o && /* @__PURE__ */ e("div", { className: fe.header, children: o }),
          /* @__PURE__ */ e("div", { className: fe.body, children: l }),
          s && /* @__PURE__ */ e("div", { className: fe.footer, children: s })
        ]
      }
    );
  }
);
wt.displayName = "Card";
const An = "_grid_ootzu_5", In = "_gap-none_ootzu_13", Sn = "_gap-small_ootzu_17", Bn = "_gap-medium_ootzu_21", Mn = "_gap-large_ootzu_25", Ot = {
  grid: An,
  "gap-none": "_gap-none_ootzu_13",
  gapNone: In,
  "gap-small": "_gap-small_ootzu_17",
  gapSmall: Sn,
  "gap-medium": "_gap-medium_ootzu_21",
  gapMedium: Bn,
  "gap-large": "_gap-large_ootzu_25",
  gapLarge: Mn
}, De = L(
  ({
    columns: r = { mobile: 1, tablet: 2, desktop: 3, wide: 4 },
    gap: t = "medium",
    children: n,
    className: o,
    style: s,
    ...l
  }, a) => {
    const i = typeof r == "number" ? { mobile: r, tablet: r, desktop: r, wide: r } : {
      mobile: r.mobile ?? 1,
      tablet: r.tablet ?? 2,
      desktop: r.desktop ?? 3,
      wide: r.wide ?? 4
    }, c = {
      "--grid-cols-mobile": i.mobile,
      "--grid-cols-tablet": i.tablet,
      "--grid-cols-desktop": i.desktop,
      "--grid-cols-wide": i.wide,
      ...s
    }, p = [
      Ot.grid,
      Ot[`gap-${t}`],
      o ?? ""
    ].filter(Boolean).join(" ");
    return /* @__PURE__ */ e(
      "div",
      {
        ref: a,
        className: p,
        style: c,
        ...l,
        children: n
      }
    );
  }
);
De.displayName = "Grid";
const Cn = "_impulse_udj4a_6", $n = "_line_udj4a_12", Tn = "_content_udj4a_30", kt = {
  impulse: Cn,
  line: $n,
  content: Tn
}, En = {
  A0: 8,
  A1: 7,
  A2: 6,
  A3: 5,
  A4: 4,
  A5: 3,
  A6: 3,
  A7: 2,
  A8: 2
}, jn = {
  A0: 24,
  A1: 20,
  A2: 18,
  A3: 16,
  A4: 14,
  A5: 12,
  A6: 10,
  A7: 8,
  A8: 6
}, Rn = L(
  ({
    format: r = "A4",
    children: t,
    className: n,
    style: o,
    ...s
  }, l) => {
    const a = En[r], i = jn[r], c = {
      "--impulse-line-width": `${a}px`,
      "--impulse-spacing": `${i}px`,
      ...o
    }, p = [
      kt.impulse,
      n ?? ""
    ].filter(Boolean).join(" ");
    return /* @__PURE__ */ d(
      "div",
      {
        ref: l,
        className: p,
        style: c,
        ...s,
        children: [
          /* @__PURE__ */ e("span", { className: kt.line, "aria-hidden": "true" }),
          /* @__PURE__ */ e("div", { className: kt.content, children: t })
        ]
      }
    );
  }
);
Rn.displayName = "Impulse";
const Fn = "_layout_vm1rm_5", On = "_format-a0_vm1rm_21", Pn = "_format-a1_vm1rm_25", Dn = "_format-a2_vm1rm_29", qn = "_format-a3_vm1rm_33", zn = "_format-a4_vm1rm_37", Gn = "_format-a5_vm1rm_41", Un = "_format-a6_vm1rm_45", Hn = "_format-a7_vm1rm_49", Vn = "_format-a8_vm1rm_53", Pt = {
  layout: Fn,
  "format-a0": "_format-a0_vm1rm_21",
  formatA0: On,
  "format-a1": "_format-a1_vm1rm_25",
  formatA1: Pn,
  "format-a2": "_format-a2_vm1rm_29",
  formatA2: Dn,
  "format-a3": "_format-a3_vm1rm_33",
  formatA3: qn,
  "format-a4": "_format-a4_vm1rm_37",
  formatA4: zn,
  "format-a5": "_format-a5_vm1rm_41",
  formatA5: Gn,
  "format-a6": "_format-a6_vm1rm_45",
  formatA6: Un,
  "format-a7": "_format-a7_vm1rm_49",
  formatA7: Hn,
  "format-a8": "_format-a8_vm1rm_53",
  formatA8: Vn
}, Zn = {
  A0: { top: 40, right: 40, bottom: 40, left: 40 },
  A1: { top: 35, right: 35, bottom: 35, left: 35 },
  A2: { top: 28, right: 28, bottom: 28, left: 28 },
  A3: { top: 22, right: 22, bottom: 22, left: 22 },
  A4: { top: 18, right: 18, bottom: 18, left: 18 },
  A5: { top: 14, right: 14, bottom: 14, left: 14 },
  A6: { top: 10, right: 10, bottom: 10, left: 10 },
  A7: { top: 8, right: 8, bottom: 8, left: 8 },
  A8: { top: 6, right: 6, bottom: 6, left: 6 }
}, Yn = L(
  ({
    format: r = "A4",
    children: t,
    className: n,
    style: o,
    ...s
  }, l) => {
    const a = Zn[r], i = {
      paddingTop: `${a.top * 0.25}rem`,
      paddingRight: `${a.right * 0.25}rem`,
      paddingBottom: `${a.bottom * 0.25}rem`,
      paddingLeft: `${a.left * 0.25}rem`,
      ...o
    }, c = [
      Pt.layout,
      Pt[`format-${r.toLowerCase()}`],
      n ?? ""
    ].filter(Boolean).join(" ");
    return /* @__PURE__ */ e(
      "div",
      {
        ref: l,
        className: c,
        style: i,
        "data-format": r,
        ...s,
        children: t
      }
    );
  }
);
Yn.displayName = "Layout";
const Kn = "_logo_q7uom_5", Xn = "_tab_q7uom_12", Qn = "_tabBackground_q7uom_16", ut = {
  logo: Kn,
  tab: Xn,
  tabBackground: Qn
}, Jn = {
  A0: 400,
  A1: 320,
  A2: 240,
  A3: 180,
  A4: 140,
  A5: 110,
  A6: 80,
  A7: 60,
  A8: 48
}, eo = {
  black: "#000000",
  white: "#FFFFFF",
  gray: "#7A7870"
}, to = ({ fill: r }) => /* @__PURE__ */ d("g", { fill: r, children: [
  /* @__PURE__ */ e("path", { d: "M4 2C4 0.9 4.9 0 6 0C7.1 0 8 0.9 8 2C8 2.74 7.6 3.39 7 3.73V8H5V3.73C4.4 3.39 4 2.74 4 2ZM5.5 8.5H6.5V10H5.5V8.5ZM5 10.5H7V12H5V10.5Z" }),
  /* @__PURE__ */ e("path", { d: "M11 2C11 0.9 11.9 0 13 0C14.1 0 15 0.9 15 2C15 2.74 14.6 3.39 14 3.73V8H12V3.73C11.4 3.39 11 2.74 11 2ZM12.5 8.5H13.5V10H12.5V8.5ZM12 10.5H14V12H12V10.5Z" }),
  /* @__PURE__ */ e("path", { d: "M18 2C18 0.9 18.9 0 20 0C21.1 0 22 0.9 22 2C22 2.74 21.6 3.39 21 3.73V8H19V3.73C18.4 3.39 18 2.74 18 2ZM19.5 8.5H20.5V10H19.5V8.5ZM19 10.5H21V12H19V10.5Z" })
] }), ro = ({ fill: r, x: t }) => /* @__PURE__ */ e(
  "text",
  {
    x: t,
    y: "10",
    fill: r,
    fontFamily: "'Frutiger', Arial, sans-serif",
    fontWeight: "700",
    fontSize: "14",
    letterSpacing: "0.1em",
    dominantBaseline: "central",
    textAnchor: "start",
    children: "UBS"
  }
), qe = L(
  ({
    size: r = 120,
    variant: t = "full",
    colour: n = "black",
    tab: o = !1,
    className: s,
    ...l
  }, a) => {
    const i = typeof r == "string" ? Jn[r.toUpperCase()] ?? 120 : r, c = eo[n];
    let p, m;
    switch (t) {
      case "symbol":
        p = 26, m = 12;
        break;
      case "wordmark":
        p = 34, m = 20;
        break;
      case "full":
      default:
        p = 60, m = 20;
        break;
    }
    const h = m / 3, k = p + h * 2, u = m + h * 2, y = u / k, _ = Math.round(i * y), g = [
      ut.logo,
      o ? ut.tab : "",
      s ?? ""
    ].filter(Boolean).join(" ");
    return /* @__PURE__ */ d(
      "svg",
      {
        ref: a,
        className: g,
        width: i,
        height: _,
        viewBox: `0 0 ${k} ${u}`,
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
              width: k,
              height: u,
              fill: n === "white" ? "rgba(0,0,0,0.6)" : "rgba(255,255,255,0.85)",
              className: ut.tabBackground
            }
          ),
          /* @__PURE__ */ d("g", { transform: `translate(${h}, ${h})`, children: [
            (t === "full" || t === "symbol") && /* @__PURE__ */ e("g", { transform: t === "full" ? `translate(0, ${(m - 12) / 2})` : void 0, children: /* @__PURE__ */ e(to, { fill: c }) }),
            (t === "full" || t === "wordmark") && /* @__PURE__ */ e(
              ro,
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
qe.displayName = "Logo";
const no = "_typography_7my68_7", oo = "_keyline_7my68_20", so = "_infoline_7my68_29", io = "_subheadline1_7my68_36", ao = "_subheadline2_7my68_42", lo = "_subheadline3_7my68_48", co = "_subheadline4_7my68_54", ho = "_leadText1_7my68_61", po = "_leadText2_7my68_67", mo = "_quotes_7my68_74", ko = "_subtitles_7my68_82", uo = "_copyText_7my68_91", _o = "_pageNumbers_7my68_99", yo = "_senderInfo_7my68_106", go = "_smallCopyText_7my68_113", fo = "_environmentalInfo_7my68_121", bo = "_captions_7my68_130", xo = "_footnote_7my68_139", Dt = {
  typography: no,
  keyline: oo,
  infoline: so,
  subheadline1: io,
  subheadline2: ao,
  subheadline3: lo,
  subheadline4: co,
  leadText1: ho,
  leadText2: po,
  quotes: mo,
  subtitles: ko,
  copyText: uo,
  pageNumbers: _o,
  senderInfo: yo,
  smallCopyText: go,
  environmentalInfo: fo,
  captions: bo,
  footnote: xo
}, vo = {
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
function Lo(r) {
  if (r !== void 0)
    return r === "light" ? 300 : r === "roman" ? 400 : r === "bold" ? 700 : r;
}
function or(r) {
  return typeof r == "number" ? !0 : typeof r == "string" ? /\d/.test(r) : Array.isArray(r) ? r.some(or) : !1;
}
function wo(r) {
  if (!r) return !1;
  const t = r.toLowerCase().replace(/\s/g, "");
  return t === "#e60000" || t === "#d83b31" || t === "#fe6f5d" || t === "red" || t === "#bd000c";
}
const ne = L(
  ({
    variant: r = "copyText",
    as: t,
    colour: n,
    weight: o,
    children: s,
    className: l,
    style: a,
    ...i
  }, c) => {
    G(() => {
      typeof window < "u" && wo(n) && or(s) && console.warn(
        `[UBS Typography] Red must NOT be used for numbers. This violates UBS brand guidelines. Variant: "${r}", colour: "${n}".`
      );
    }, [n, s, r]);
    const p = t ?? vo[r], m = Lo(o), h = [
      Dt.typography,
      Dt[r],
      l ?? ""
    ].filter(Boolean).join(" "), k = {
      ...a,
      ...n ? { color: n } : {},
      ...m ? { fontWeight: m } : {}
    };
    return Ye.createElement(
      p,
      {
        ref: c,
        className: h,
        style: Object.keys(k).length > 0 ? k : void 0,
        ...i
      },
      s
    );
  }
);
ne.displayName = "Typography";
const Wo = "_badge_1kkst_3", No = "_sm_1kkst_17", Ao = "_md_1kkst_23", Io = "_red_1kkst_36", So = "_success_1kkst_41", Bo = "_warning_1kkst_46", Mo = "_dot_1kkst_53", rt = {
  badge: Wo,
  sm: No,
  md: Ao,
  default: "_default_1kkst_31",
  red: Io,
  success: So,
  warning: Bo,
  dot: Mo
}, Wt = L(
  ({ variant: r = "default", size: t = "md", dot: n = !1, children: o, className: s, ...l }, a) => {
    const i = [
      rt.badge,
      rt[r],
      rt[t],
      n ? rt.dot : void 0,
      s
    ].filter(Boolean).join(" ");
    return /* @__PURE__ */ e("span", { ref: a, className: i, role: "status", ...l, children: n ? null : o });
  }
);
Wt.displayName = "Badge";
const Co = "_divider_1c0wo_3", $o = "_horizontal_1c0wo_13", To = "_vertical_1c0wo_20", qt = {
  divider: Co,
  horizontal: $o,
  vertical: To
}, Eo = L(
  ({
    orientation: r = "horizontal",
    colour: t,
    thickness: n,
    spacing: o,
    className: s,
    style: l,
    ...a
  }, i) => {
    const c = [qt.divider, qt[r], s].filter(Boolean).join(" "), p = {
      ...t ? { backgroundColor: t } : {},
      ...n != null ? { "--divider-thickness": `${n}px` } : {},
      ...o != null ? { "--divider-spacing": `${o}px` } : {},
      ...l
    };
    return /* @__PURE__ */ e(
      "hr",
      {
        ref: i,
        className: c,
        style: p,
        role: "separator",
        "aria-orientation": r,
        ...a
      }
    );
  }
);
Eo.displayName = "Divider";
const jo = "_indicator_1cspq_3", Ro = "_sm_1cspq_15", Fo = "_arrow_1cspq_19", Oo = "_md_1cspq_24", Po = "_lg_1cspq_33", Do = "_positive_1cspq_44", qo = "_negative_1cspq_48", zo = "_neutral_1cspq_52", Go = "_arrowDown_1cspq_71", ze = {
  indicator: jo,
  sm: Ro,
  arrow: Fo,
  md: Oo,
  lg: Po,
  positive: Do,
  negative: qo,
  neutral: zo,
  arrowDown: Go
}, zt = "#498100", Gt = "#C81219";
function Uo(r) {
  return r === "apac" ? { positive: Gt, negative: zt } : { positive: zt, negative: Gt };
}
const Ho = () => /* @__PURE__ */ e("svg", { viewBox: "0 0 12 12", xmlns: "http://www.w3.org/2000/svg", "aria-hidden": "true", children: /* @__PURE__ */ e("path", { d: "M6 1.5L10.5 8.5H1.5L6 1.5Z" }) }), Vo = L(
  ({
    value: r,
    region: t = "emea",
    size: n = "md",
    decimals: o = 2,
    showArrow: s = !0,
    showSign: l = !0,
    asPercentage: a = !1,
    className: i,
    style: c,
    ...p
  }, m) => {
    const h = Uo(t), k = r > 0, u = r < 0, y = r === 0, _ = k ? "positive" : u ? "negative" : "neutral";
    k ? h.positive : u && h.negative;
    const g = Math.abs(r).toFixed(o), x = `${k && l ? "+" : u ? "−" : ""}${g}${a ? "%" : ""}`, N = [
      ze.indicator,
      ze[n],
      ze[_],
      i
    ].filter(Boolean).join(" "), B = {
      "--trading-positive": h.positive,
      "--trading-negative": h.negative,
      ...c
    };
    return /* @__PURE__ */ d(
      "span",
      {
        ref: m,
        className: N,
        style: B,
        "aria-label": `${k ? "positive" : u ? "negative" : "neutral"} ${g}${a ? " percent" : ""}`,
        ...p,
        children: [
          s && !y && /* @__PURE__ */ e("span", { className: `${ze.arrow} ${u ? ze.arrowDown : ""}`, children: /* @__PURE__ */ e(Ho, {}) }),
          /* @__PURE__ */ e("span", { children: x })
        ]
      }
    );
  }
);
Vo.displayName = "TradingIndicator";
const Zo = "_icon_15bim_3", Yo = "_sm_15bim_13", Ko = "_md_15bim_18", Xo = "_lg_15bim_23", Qo = "_webApp_15bim_30", Jo = "_illustrative_15bim_41", _t = {
  icon: Zo,
  sm: Yo,
  md: Ko,
  lg: Xo,
  webApp: Qo,
  illustrative: Jo
}, es = {
  sm: 12,
  md: 16,
  lg: 24
}, yt = {
  black: "#000000",
  red: "#E60000",
  warmGray1: "#CCCABC",
  warmGray2: "#B8B3A2"
};
function W(r) {
  const {
    displayName: t,
    viewBox: n,
    defaultSize: o = "lg",
    illustrative: s = !1,
    path: l
  } = r, a = L(
    ({
      size: i = o,
      colour: c = yt.black,
      accentColour: p = s ? yt.red : yt.black,
      variant: m = "default",
      className: h,
      style: k,
      ...u
    }, y) => {
      const _ = typeof i == "string" ? es[i] ?? 24 : i, g = c;
      return /* @__PURE__ */ e(
        "svg",
        {
          ref: y,
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: n,
          width: _,
          height: _,
          fill: "none",
          "aria-hidden": "true",
          role: "img",
          focusable: "false",
          className: h,
          style: k,
          ...u,
          children: l(g, m === "black" ? g : p)
        }
      );
    }
  );
  return a.displayName = t, a;
}
const ts = W({
  displayName: "ChevronDown",
  viewBox: "0 0 24 24",
  path: (r) => /* @__PURE__ */ e(
    "polyline",
    {
      points: "6 9 12 15 18 9",
      stroke: r,
      strokeWidth: 2,
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  )
}), rs = W({
  displayName: "ChevronUp",
  viewBox: "0 0 24 24",
  path: (r) => /* @__PURE__ */ e(
    "polyline",
    {
      points: "18 15 12 9 6 15",
      stroke: r,
      strokeWidth: 2,
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  )
}), ns = W({
  displayName: "ChevronLeft",
  viewBox: "0 0 24 24",
  path: (r) => /* @__PURE__ */ e(
    "polyline",
    {
      points: "15 18 9 12 15 6",
      stroke: r,
      strokeWidth: 2,
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  )
}), os = W({
  displayName: "ChevronRight",
  viewBox: "0 0 24 24",
  path: (r) => /* @__PURE__ */ e(
    "polyline",
    {
      points: "9 6 15 12 9 18",
      stroke: r,
      strokeWidth: 2,
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  )
}), ss = W({
  displayName: "ArrowLeft",
  viewBox: "0 0 24 24",
  path: (r) => /* @__PURE__ */ d(w, { children: [
    /* @__PURE__ */ e("line", { x1: 19, y1: 12, x2: 5, y2: 12, stroke: r, strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" }),
    /* @__PURE__ */ e("polyline", { points: "12 19 5 12 12 5", stroke: r, strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" })
  ] })
}), is = W({
  displayName: "ArrowRight",
  viewBox: "0 0 24 24",
  path: (r) => /* @__PURE__ */ d(w, { children: [
    /* @__PURE__ */ e("line", { x1: 5, y1: 12, x2: 19, y2: 12, stroke: r, strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" }),
    /* @__PURE__ */ e("polyline", { points: "12 5 19 12 12 19", stroke: r, strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" })
  ] })
}), as = W({
  displayName: "ArrowUp",
  viewBox: "0 0 24 24",
  path: (r) => /* @__PURE__ */ d(w, { children: [
    /* @__PURE__ */ e("line", { x1: 12, y1: 19, x2: 12, y2: 5, stroke: r, strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" }),
    /* @__PURE__ */ e("polyline", { points: "5 12 12 5 19 12", stroke: r, strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" })
  ] })
}), ls = W({
  displayName: "ArrowDown",
  viewBox: "0 0 24 24",
  path: (r) => /* @__PURE__ */ d(w, { children: [
    /* @__PURE__ */ e("line", { x1: 12, y1: 5, x2: 12, y2: 19, stroke: r, strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" }),
    /* @__PURE__ */ e("polyline", { points: "19 12 12 19 5 12", stroke: r, strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" })
  ] })
}), cs = W({
  displayName: "Menu",
  viewBox: "0 0 24 24",
  path: (r) => /* @__PURE__ */ d(w, { children: [
    /* @__PURE__ */ e("line", { x1: 3, y1: 6, x2: 21, y2: 6, stroke: r, strokeWidth: 2, strokeLinecap: "round" }),
    /* @__PURE__ */ e("line", { x1: 3, y1: 12, x2: 21, y2: 12, stroke: r, strokeWidth: 2, strokeLinecap: "round" }),
    /* @__PURE__ */ e("line", { x1: 3, y1: 18, x2: 21, y2: 18, stroke: r, strokeWidth: 2, strokeLinecap: "round" })
  ] })
}), ds = W({
  displayName: "Close",
  viewBox: "0 0 24 24",
  path: (r) => /* @__PURE__ */ d(w, { children: [
    /* @__PURE__ */ e("line", { x1: 18, y1: 6, x2: 6, y2: 18, stroke: r, strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" }),
    /* @__PURE__ */ e("line", { x1: 6, y1: 6, x2: 18, y2: 18, stroke: r, strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" })
  ] })
}), hs = W({
  displayName: "MoreHorizontal",
  viewBox: "0 0 24 24",
  path: (r) => /* @__PURE__ */ d(w, { children: [
    /* @__PURE__ */ e("circle", { cx: 12, cy: 12, r: 1, fill: r }),
    /* @__PURE__ */ e("circle", { cx: 5, cy: 12, r: 1, fill: r }),
    /* @__PURE__ */ e("circle", { cx: 19, cy: 12, r: 1, fill: r })
  ] })
}), ps = W({
  displayName: "MoreVertical",
  viewBox: "0 0 24 24",
  path: (r) => /* @__PURE__ */ d(w, { children: [
    /* @__PURE__ */ e("circle", { cx: 12, cy: 12, r: 1, fill: r }),
    /* @__PURE__ */ e("circle", { cx: 12, cy: 5, r: 1, fill: r }),
    /* @__PURE__ */ e("circle", { cx: 12, cy: 19, r: 1, fill: r })
  ] })
}), ms = W({
  displayName: "Search",
  viewBox: "0 0 24 24",
  path: (r) => /* @__PURE__ */ d(w, { children: [
    /* @__PURE__ */ e("circle", { cx: 11, cy: 11, r: 7, stroke: r, strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" }),
    /* @__PURE__ */ e("line", { x1: 16.65, y1: 16.65, x2: 21, y2: 21, stroke: r, strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" })
  ] })
}), ks = W({
  displayName: "Filter",
  viewBox: "0 0 24 24",
  path: (r) => /* @__PURE__ */ e(
    "path",
    {
      d: "M3 4h18l-7 8.5V18l-4 2V12.5L3 4Z",
      stroke: r,
      strokeWidth: 2,
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  )
}), us = W({
  displayName: "Sort",
  viewBox: "0 0 24 24",
  path: (r) => /* @__PURE__ */ d(w, { children: [
    /* @__PURE__ */ e("line", { x1: 4, y1: 6, x2: 20, y2: 6, stroke: r, strokeWidth: 2, strokeLinecap: "round" }),
    /* @__PURE__ */ e("line", { x1: 4, y1: 12, x2: 16, y2: 12, stroke: r, strokeWidth: 2, strokeLinecap: "round" }),
    /* @__PURE__ */ e("line", { x1: 4, y1: 18, x2: 12, y2: 18, stroke: r, strokeWidth: 2, strokeLinecap: "round" })
  ] })
}), _s = W({
  displayName: "Download",
  viewBox: "0 0 24 24",
  path: (r) => /* @__PURE__ */ d(w, { children: [
    /* @__PURE__ */ e("path", { d: "M12 3v12", stroke: r, strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" }),
    /* @__PURE__ */ e("polyline", { points: "7 10 12 15 17 10", stroke: r, strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" }),
    /* @__PURE__ */ e("path", { d: "M20 21H4", stroke: r, strokeWidth: 2, strokeLinecap: "round" })
  ] })
}), ys = W({
  displayName: "Upload",
  viewBox: "0 0 24 24",
  path: (r) => /* @__PURE__ */ d(w, { children: [
    /* @__PURE__ */ e("path", { d: "M12 15V3", stroke: r, strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" }),
    /* @__PURE__ */ e("polyline", { points: "17 8 12 3 7 8", stroke: r, strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" }),
    /* @__PURE__ */ e("path", { d: "M20 21H4", stroke: r, strokeWidth: 2, strokeLinecap: "round" })
  ] })
}), gs = W({
  displayName: "Share",
  viewBox: "0 0 24 24",
  path: (r) => /* @__PURE__ */ d(w, { children: [
    /* @__PURE__ */ e("circle", { cx: 18, cy: 5, r: 3, stroke: r, strokeWidth: 2 }),
    /* @__PURE__ */ e("circle", { cx: 6, cy: 12, r: 3, stroke: r, strokeWidth: 2 }),
    /* @__PURE__ */ e("circle", { cx: 18, cy: 19, r: 3, stroke: r, strokeWidth: 2 }),
    /* @__PURE__ */ e("line", { x1: 8.59, y1: 13.51, x2: 15.42, y2: 17.49, stroke: r, strokeWidth: 2, strokeLinecap: "round" }),
    /* @__PURE__ */ e("line", { x1: 15.41, y1: 6.51, x2: 8.59, y2: 10.49, stroke: r, strokeWidth: 2, strokeLinecap: "round" })
  ] })
}), fs = W({
  displayName: "Copy",
  viewBox: "0 0 24 24",
  path: (r) => /* @__PURE__ */ d(w, { children: [
    /* @__PURE__ */ e("rect", { x: 9, y: 9, width: 13, height: 13, rx: 2, stroke: r, strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" }),
    /* @__PURE__ */ e("path", { d: "M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1", stroke: r, strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" })
  ] })
}), bs = W({
  displayName: "Edit",
  viewBox: "0 0 24 24",
  path: (r) => /* @__PURE__ */ d(w, { children: [
    /* @__PURE__ */ e("path", { d: "M17 3a2.83 2.83 0 0 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3Z", stroke: r, strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" }),
    /* @__PURE__ */ e("line", { x1: 15, y1: 5, x2: 19, y2: 9, stroke: r, strokeWidth: 2, strokeLinecap: "round" })
  ] })
}), xs = W({
  displayName: "Trash",
  viewBox: "0 0 24 24",
  path: (r) => /* @__PURE__ */ d(w, { children: [
    /* @__PURE__ */ e("polyline", { points: "3 6 5 6 21 6", stroke: r, strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" }),
    /* @__PURE__ */ e("path", { d: "M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6", stroke: r, strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" }),
    /* @__PURE__ */ e("path", { d: "M10 6V4a2 2 0 0 1 2-2h0a2 2 0 0 1 2 2v2", stroke: r, strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" }),
    /* @__PURE__ */ e("line", { x1: 10, y1: 11, x2: 10, y2: 17, stroke: r, strokeWidth: 2, strokeLinecap: "round" }),
    /* @__PURE__ */ e("line", { x1: 14, y1: 11, x2: 14, y2: 17, stroke: r, strokeWidth: 2, strokeLinecap: "round" })
  ] })
}), vs = W({
  displayName: "Plus",
  viewBox: "0 0 24 24",
  path: (r) => /* @__PURE__ */ d(w, { children: [
    /* @__PURE__ */ e("line", { x1: 12, y1: 5, x2: 12, y2: 19, stroke: r, strokeWidth: 2, strokeLinecap: "round" }),
    /* @__PURE__ */ e("line", { x1: 5, y1: 12, x2: 19, y2: 12, stroke: r, strokeWidth: 2, strokeLinecap: "round" })
  ] })
}), Ls = W({
  displayName: "Minus",
  viewBox: "0 0 24 24",
  path: (r) => /* @__PURE__ */ e("line", { x1: 5, y1: 12, x2: 19, y2: 12, stroke: r, strokeWidth: 2, strokeLinecap: "round" })
}), ws = W({
  displayName: "Check",
  viewBox: "0 0 24 24",
  path: (r) => /* @__PURE__ */ e(
    "polyline",
    {
      points: "4 12 9 17 20 6",
      stroke: r,
      strokeWidth: 2,
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  )
}), Ws = W({
  displayName: "CheckCircle",
  viewBox: "0 0 24 24",
  path: (r) => /* @__PURE__ */ d(w, { children: [
    /* @__PURE__ */ e("circle", { cx: 12, cy: 12, r: 10, stroke: r, strokeWidth: 2 }),
    /* @__PURE__ */ e("polyline", { points: "8 12 11 15 16 9", stroke: r, strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" })
  ] })
}), Ns = W({
  displayName: "XCircle",
  viewBox: "0 0 24 24",
  path: (r) => /* @__PURE__ */ d(w, { children: [
    /* @__PURE__ */ e("circle", { cx: 12, cy: 12, r: 10, stroke: r, strokeWidth: 2 }),
    /* @__PURE__ */ e("line", { x1: 15, y1: 9, x2: 9, y2: 15, stroke: r, strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" }),
    /* @__PURE__ */ e("line", { x1: 9, y1: 9, x2: 15, y2: 15, stroke: r, strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" })
  ] })
}), As = W({
  displayName: "Home",
  viewBox: "0 0 24 24",
  path: (r) => /* @__PURE__ */ d(w, { children: [
    /* @__PURE__ */ e("path", { d: "M3 10.5L12 3l9 7.5V20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V10.5Z", stroke: r, strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" }),
    /* @__PURE__ */ e("path", { d: "M9 21V14h6v7", stroke: r, strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" })
  ] })
}), Is = W({
  displayName: "User",
  viewBox: "0 0 24 24",
  path: (r) => /* @__PURE__ */ d(w, { children: [
    /* @__PURE__ */ e("circle", { cx: 12, cy: 8, r: 4, stroke: r, strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" }),
    /* @__PURE__ */ e("path", { d: "M20 21c0-3.87-3.58-7-8-7s-8 3.13-8 7", stroke: r, strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" })
  ] })
}), Ss = W({
  displayName: "Users",
  viewBox: "0 0 24 24",
  path: (r) => /* @__PURE__ */ d(w, { children: [
    /* @__PURE__ */ e("circle", { cx: 9, cy: 8, r: 4, stroke: r, strokeWidth: 2 }),
    /* @__PURE__ */ e("path", { d: "M17 21c0-3.31-3.13-6-7-6h-1c-3.87 0-7 2.69-7 6", stroke: r, strokeWidth: 2, strokeLinecap: "round" }),
    /* @__PURE__ */ e("path", { d: "M17 8a4 4 0 0 1 0 0", stroke: r, strokeWidth: 2 }),
    /* @__PURE__ */ e("circle", { cx: 17, cy: 7, r: 3, stroke: r, strokeWidth: 2 }),
    /* @__PURE__ */ e("path", { d: "M22 21c0-2.76-2.24-5-5-5", stroke: r, strokeWidth: 2, strokeLinecap: "round" })
  ] })
}), Bs = W({
  displayName: "Settings",
  viewBox: "0 0 24 24",
  path: (r) => /* @__PURE__ */ d(w, { children: [
    /* @__PURE__ */ e("circle", { cx: 12, cy: 12, r: 3, stroke: r, strokeWidth: 2 }),
    /* @__PURE__ */ e(
      "path",
      {
        d: "M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09a1.65 1.65 0 0 0-1.08-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09a1.65 1.65 0 0 0 1.51-1.08 1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9c.26.6.84 1 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1Z",
        stroke: r,
        strokeWidth: 2,
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }
    )
  ] })
}), Ms = W({
  displayName: "Bell",
  viewBox: "0 0 24 24",
  path: (r) => /* @__PURE__ */ d(w, { children: [
    /* @__PURE__ */ e("path", { d: "M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9Z", stroke: r, strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" }),
    /* @__PURE__ */ e("path", { d: "M13.73 21a2 2 0 0 1-3.46 0", stroke: r, strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" })
  ] })
}), Cs = W({
  displayName: "Mail",
  viewBox: "0 0 24 24",
  path: (r) => /* @__PURE__ */ d(w, { children: [
    /* @__PURE__ */ e("rect", { x: 2, y: 4, width: 20, height: 16, rx: 2, stroke: r, strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" }),
    /* @__PURE__ */ e("polyline", { points: "22 6 12 13 2 6", stroke: r, strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" })
  ] })
}), $s = W({
  displayName: "Calendar",
  viewBox: "0 0 24 24",
  path: (r) => /* @__PURE__ */ d(w, { children: [
    /* @__PURE__ */ e("rect", { x: 3, y: 4, width: 18, height: 18, rx: 2, stroke: r, strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" }),
    /* @__PURE__ */ e("line", { x1: 16, y1: 2, x2: 16, y2: 6, stroke: r, strokeWidth: 2, strokeLinecap: "round" }),
    /* @__PURE__ */ e("line", { x1: 8, y1: 2, x2: 8, y2: 6, stroke: r, strokeWidth: 2, strokeLinecap: "round" }),
    /* @__PURE__ */ e("line", { x1: 3, y1: 10, x2: 21, y2: 10, stroke: r, strokeWidth: 2, strokeLinecap: "round" })
  ] })
}), Ts = W({
  displayName: "Clock",
  viewBox: "0 0 24 24",
  path: (r) => /* @__PURE__ */ d(w, { children: [
    /* @__PURE__ */ e("circle", { cx: 12, cy: 12, r: 10, stroke: r, strokeWidth: 2 }),
    /* @__PURE__ */ e("polyline", { points: "12 6 12 12 16 14", stroke: r, strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" })
  ] })
}), Es = W({
  displayName: "Document",
  viewBox: "0 0 24 24",
  path: (r) => /* @__PURE__ */ d(w, { children: [
    /* @__PURE__ */ e("path", { d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6Z", stroke: r, strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" }),
    /* @__PURE__ */ e("polyline", { points: "14 2 14 8 20 8", stroke: r, strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" }),
    /* @__PURE__ */ e("line", { x1: 8, y1: 13, x2: 16, y2: 13, stroke: r, strokeWidth: 2, strokeLinecap: "round" }),
    /* @__PURE__ */ e("line", { x1: 8, y1: 17, x2: 14, y2: 17, stroke: r, strokeWidth: 2, strokeLinecap: "round" })
  ] })
}), js = W({
  displayName: "Folder",
  viewBox: "0 0 24 24",
  path: (r) => /* @__PURE__ */ e(
    "path",
    {
      d: "M2 6a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6Z",
      stroke: r,
      strokeWidth: 2,
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  )
}), Rs = W({
  displayName: "ImageIcon",
  viewBox: "0 0 24 24",
  path: (r) => /* @__PURE__ */ d(w, { children: [
    /* @__PURE__ */ e("rect", { x: 3, y: 3, width: 18, height: 18, rx: 2, stroke: r, strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" }),
    /* @__PURE__ */ e("circle", { cx: 8.5, cy: 8.5, r: 1.5, stroke: r, strokeWidth: 2 }),
    /* @__PURE__ */ e("polyline", { points: "21 15 16 10 5 21", stroke: r, strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" })
  ] })
}), Fs = W({
  displayName: "Chart",
  viewBox: "0 0 24 24",
  path: (r) => /* @__PURE__ */ d(w, { children: [
    /* @__PURE__ */ e("line", { x1: 18, y1: 20, x2: 18, y2: 10, stroke: r, strokeWidth: 2, strokeLinecap: "round" }),
    /* @__PURE__ */ e("line", { x1: 12, y1: 20, x2: 12, y2: 4, stroke: r, strokeWidth: 2, strokeLinecap: "round" }),
    /* @__PURE__ */ e("line", { x1: 6, y1: 20, x2: 6, y2: 14, stroke: r, strokeWidth: 2, strokeLinecap: "round" }),
    /* @__PURE__ */ e("line", { x1: 2, y1: 20, x2: 22, y2: 20, stroke: r, strokeWidth: 2, strokeLinecap: "round" })
  ] })
}), Os = W({
  displayName: "DonutChart",
  viewBox: "0 0 24 24",
  path: (r) => /* @__PURE__ */ d(w, { children: [
    /* @__PURE__ */ e("circle", { cx: 12, cy: 12, r: 10, stroke: r, strokeWidth: 2 }),
    /* @__PURE__ */ e("circle", { cx: 12, cy: 12, r: 5, stroke: r, strokeWidth: 2 }),
    /* @__PURE__ */ e("line", { x1: 12, y1: 2, x2: 12, y2: 7, stroke: r, strokeWidth: 2, strokeLinecap: "round" }),
    /* @__PURE__ */ e("line", { x1: 20.66, y1: 17, x2: 16.33, y2: 14.5, stroke: r, strokeWidth: 2, strokeLinecap: "round" })
  ] })
}), Ps = W({
  displayName: "Globe",
  viewBox: "0 0 24 24",
  path: (r) => /* @__PURE__ */ d(w, { children: [
    /* @__PURE__ */ e("circle", { cx: 12, cy: 12, r: 10, stroke: r, strokeWidth: 2 }),
    /* @__PURE__ */ e("ellipse", { cx: 12, cy: 12, rx: 4, ry: 10, stroke: r, strokeWidth: 2 }),
    /* @__PURE__ */ e("line", { x1: 2, y1: 12, x2: 22, y2: 12, stroke: r, strokeWidth: 2, strokeLinecap: "round" })
  ] })
}), Ds = W({
  displayName: "Info",
  viewBox: "0 0 24 24",
  path: (r) => /* @__PURE__ */ d(w, { children: [
    /* @__PURE__ */ e("circle", { cx: 12, cy: 12, r: 10, stroke: r, strokeWidth: 2 }),
    /* @__PURE__ */ e("line", { x1: 12, y1: 16, x2: 12, y2: 12, stroke: r, strokeWidth: 2, strokeLinecap: "round" }),
    /* @__PURE__ */ e("circle", { cx: 12, cy: 8, r: 0.5, fill: r, stroke: r, strokeWidth: 1 })
  ] })
}), qs = W({
  displayName: "Warning",
  viewBox: "0 0 24 24",
  path: (r) => /* @__PURE__ */ d(w, { children: [
    /* @__PURE__ */ e("path", { d: "M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0Z", stroke: r, strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" }),
    /* @__PURE__ */ e("line", { x1: 12, y1: 9, x2: 12, y2: 13, stroke: r, strokeWidth: 2, strokeLinecap: "round" }),
    /* @__PURE__ */ e("circle", { cx: 12, cy: 17, r: 0.5, fill: r, stroke: r, strokeWidth: 1 })
  ] })
}), zs = W({
  displayName: "ErrorIcon",
  viewBox: "0 0 24 24",
  path: (r) => /* @__PURE__ */ d(w, { children: [
    /* @__PURE__ */ e("circle", { cx: 12, cy: 12, r: 10, stroke: r, strokeWidth: 2 }),
    /* @__PURE__ */ e("line", { x1: 15, y1: 9, x2: 9, y2: 15, stroke: r, strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" }),
    /* @__PURE__ */ e("line", { x1: 9, y1: 9, x2: 15, y2: 15, stroke: r, strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" })
  ] })
}), Gs = W({
  displayName: "Success",
  viewBox: "0 0 24 24",
  path: (r) => /* @__PURE__ */ d(w, { children: [
    /* @__PURE__ */ e("circle", { cx: 12, cy: 12, r: 10, stroke: r, strokeWidth: 2 }),
    /* @__PURE__ */ e("polyline", { points: "8 12 11 15 16 9", stroke: r, strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" })
  ] })
}), Us = W({
  displayName: "Help",
  viewBox: "0 0 24 24",
  path: (r) => /* @__PURE__ */ d(w, { children: [
    /* @__PURE__ */ e("circle", { cx: 12, cy: 12, r: 10, stroke: r, strokeWidth: 2 }),
    /* @__PURE__ */ e("path", { d: "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3", stroke: r, strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" }),
    /* @__PURE__ */ e("circle", { cx: 12, cy: 17, r: 0.5, fill: r, stroke: r, strokeWidth: 1 })
  ] })
}), Hs = W({
  displayName: "Wallet",
  viewBox: "0 0 48 48",
  illustrative: !0,
  path: (r, t) => /* @__PURE__ */ d(w, { children: [
    /* @__PURE__ */ e("rect", { x: 6, y: 14, width: 36, height: 26, rx: 3, stroke: t, strokeWidth: 3, strokeLinecap: "round", strokeLinejoin: "round" }),
    /* @__PURE__ */ e("path", { d: "M6 14V12a4 4 0 0 1 4-4h24a4 4 0 0 1 4 4v2", stroke: r, strokeWidth: 1.5, strokeLinecap: "round", strokeLinejoin: "round" }),
    /* @__PURE__ */ e("rect", { x: 30, y: 22, width: 12, height: 10, rx: 2, stroke: r, strokeWidth: 1.5 }),
    /* @__PURE__ */ e("circle", { cx: 36, cy: 27, r: 2, stroke: r, strokeWidth: 1.5 }),
    /* @__PURE__ */ e("line", { x1: 10, y1: 18, x2: 28, y2: 18, stroke: r, strokeWidth: 1.5, strokeLinecap: "round", strokeDasharray: "3 3" })
  ] })
}), Vs = W({
  displayName: "CreditCard",
  viewBox: "0 0 48 48",
  illustrative: !0,
  path: (r, t) => /* @__PURE__ */ d(w, { children: [
    /* @__PURE__ */ e("rect", { x: 4, y: 10, width: 40, height: 28, rx: 4, stroke: t, strokeWidth: 3, strokeLinecap: "round", strokeLinejoin: "round" }),
    /* @__PURE__ */ e("line", { x1: 4, y1: 18, x2: 44, y2: 18, stroke: r, strokeWidth: 1.5 }),
    /* @__PURE__ */ e("line", { x1: 4, y1: 22, x2: 44, y2: 22, stroke: r, strokeWidth: 1.5 }),
    /* @__PURE__ */ e("rect", { x: 10, y: 26, width: 8, height: 6, rx: 1, stroke: r, strokeWidth: 1.5 }),
    /* @__PURE__ */ e("circle", { cx: 28, cy: 32, r: 1, fill: r }),
    /* @__PURE__ */ e("circle", { cx: 32, cy: 32, r: 1, fill: r }),
    /* @__PURE__ */ e("circle", { cx: 36, cy: 32, r: 1, fill: r }),
    /* @__PURE__ */ e("circle", { cx: 40, cy: 32, r: 1, fill: r })
  ] })
}), Zs = W({
  displayName: "BankNote",
  viewBox: "0 0 48 48",
  illustrative: !0,
  path: (r, t) => /* @__PURE__ */ d(w, { children: [
    /* @__PURE__ */ e("rect", { x: 4, y: 12, width: 40, height: 24, rx: 2, stroke: t, strokeWidth: 3, strokeLinejoin: "round" }),
    /* @__PURE__ */ e("circle", { cx: 24, cy: 24, r: 7, stroke: r, strokeWidth: 1.5 }),
    /* @__PURE__ */ e("text", { x: 24, y: 28, textAnchor: "middle", fontSize: 10, fontWeight: "bold", fill: r, fontFamily: "sans-serif", children: "£" }),
    /* @__PURE__ */ e("path", { d: "M10 16h4v4", stroke: r, strokeWidth: 1.5, strokeLinecap: "round", strokeLinejoin: "round" }),
    /* @__PURE__ */ e("path", { d: "M38 16h-4v4", stroke: r, strokeWidth: 1.5, strokeLinecap: "round", strokeLinejoin: "round" }),
    /* @__PURE__ */ e("path", { d: "M10 32h4v-4", stroke: r, strokeWidth: 1.5, strokeLinecap: "round", strokeLinejoin: "round" }),
    /* @__PURE__ */ e("path", { d: "M38 32h-4v-4", stroke: r, strokeWidth: 1.5, strokeLinecap: "round", strokeLinejoin: "round" })
  ] })
}), Ys = W({
  displayName: "Coins",
  viewBox: "0 0 48 48",
  illustrative: !0,
  path: (r, t) => /* @__PURE__ */ d(w, { children: [
    /* @__PURE__ */ e("ellipse", { cx: 28, cy: 20, rx: 14, ry: 6, stroke: t, strokeWidth: 3 }),
    /* @__PURE__ */ e("path", { d: "M14 20v8c0 3.31 6.27 6 14 6s14-2.69 14-6v-8", stroke: t, strokeWidth: 3 }),
    /* @__PURE__ */ e("ellipse", { cx: 20, cy: 28, rx: 14, ry: 6, stroke: r, strokeWidth: 1.5 }),
    /* @__PURE__ */ e("path", { d: "M6 28v8c0 3.31 6.27 6 14 6s14-2.69 14-6v-8", stroke: r, strokeWidth: 1.5 }),
    /* @__PURE__ */ e("ellipse", { cx: 20, cy: 32, rx: 14, ry: 6, stroke: r, strokeWidth: 1.5, strokeDasharray: "4 3" })
  ] })
}), Ks = W({
  displayName: "PiggyBank",
  viewBox: "0 0 48 48",
  illustrative: !0,
  path: (r, t) => /* @__PURE__ */ d(w, { children: [
    /* @__PURE__ */ e("path", { d: "M14 36c-2-2-4-6-4-10 0-7.18 6.27-13 14-13s14 5.82 14 13c0 4-2 8-4 10", stroke: t, strokeWidth: 3, strokeLinecap: "round", strokeLinejoin: "round" }),
    /* @__PURE__ */ e("line", { x1: 16, y1: 36, x2: 14, y2: 42, stroke: t, strokeWidth: 3, strokeLinecap: "round" }),
    /* @__PURE__ */ e("line", { x1: 32, y1: 36, x2: 34, y2: 42, stroke: t, strokeWidth: 3, strokeLinecap: "round" }),
    /* @__PURE__ */ e("path", { d: "M20 13c-1-4 1-7 4-8", stroke: r, strokeWidth: 1.5, strokeLinecap: "round" }),
    /* @__PURE__ */ e("circle", { cx: 20, cy: 22, r: 1.5, fill: r }),
    /* @__PURE__ */ e("ellipse", { cx: 36, cy: 24, rx: 4, ry: 3, stroke: r, strokeWidth: 1.5 }),
    /* @__PURE__ */ e("circle", { cx: 35, cy: 23.5, r: 0.8, fill: r }),
    /* @__PURE__ */ e("circle", { cx: 37, cy: 23.5, r: 0.8, fill: r }),
    /* @__PURE__ */ e("line", { x1: 22, y1: 10, x2: 28, y2: 10, stroke: r, strokeWidth: 1.5, strokeLinecap: "round" }),
    /* @__PURE__ */ e("path", { d: "M10 22c-2-1-4 0-4 2s2 3 3 2", stroke: r, strokeWidth: 1.5, strokeLinecap: "round" })
  ] })
}), Xs = W({
  displayName: "SafeBox",
  viewBox: "0 0 48 48",
  illustrative: !0,
  path: (r, t) => /* @__PURE__ */ d(w, { children: [
    /* @__PURE__ */ e("rect", { x: 6, y: 6, width: 36, height: 36, rx: 3, stroke: t, strokeWidth: 3, strokeLinejoin: "round" }),
    /* @__PURE__ */ e("rect", { x: 10, y: 10, width: 28, height: 28, rx: 1, stroke: r, strokeWidth: 1.5 }),
    /* @__PURE__ */ e("circle", { cx: 24, cy: 24, r: 8, stroke: r, strokeWidth: 1.5 }),
    /* @__PURE__ */ e("circle", { cx: 24, cy: 24, r: 3, stroke: r, strokeWidth: 1.5 }),
    /* @__PURE__ */ e("line", { x1: 24, y1: 16, x2: 24, y2: 18, stroke: r, strokeWidth: 1.5, strokeLinecap: "round" }),
    /* @__PURE__ */ e("line", { x1: 24, y1: 30, x2: 24, y2: 32, stroke: r, strokeWidth: 1.5, strokeLinecap: "round" }),
    /* @__PURE__ */ e("line", { x1: 16, y1: 24, x2: 18, y2: 24, stroke: r, strokeWidth: 1.5, strokeLinecap: "round" }),
    /* @__PURE__ */ e("line", { x1: 30, y1: 24, x2: 32, y2: 24, stroke: r, strokeWidth: 1.5, strokeLinecap: "round" }),
    /* @__PURE__ */ e("rect", { x: 36, y: 20, width: 4, height: 8, rx: 1, stroke: r, strokeWidth: 1.5 }),
    /* @__PURE__ */ e("line", { x1: 10, y1: 42, x2: 10, y2: 46, stroke: r, strokeWidth: 1.5, strokeLinecap: "round" }),
    /* @__PURE__ */ e("line", { x1: 38, y1: 42, x2: 38, y2: 46, stroke: r, strokeWidth: 1.5, strokeLinecap: "round" })
  ] })
}), Qs = W({
  displayName: "Growth",
  viewBox: "0 0 48 48",
  illustrative: !0,
  path: (r, t) => /* @__PURE__ */ d(w, { children: [
    /* @__PURE__ */ e("polyline", { points: "6 38 16 28 24 32 42 10", stroke: t, strokeWidth: 3, strokeLinecap: "round", strokeLinejoin: "round" }),
    /* @__PURE__ */ e("polyline", { points: "34 10 42 10 42 18", stroke: t, strokeWidth: 3, strokeLinecap: "round", strokeLinejoin: "round" }),
    /* @__PURE__ */ e("line", { x1: 6, y1: 42, x2: 42, y2: 42, stroke: r, strokeWidth: 1.5, strokeLinecap: "round" }),
    /* @__PURE__ */ e("line", { x1: 6, y1: 10, x2: 6, y2: 42, stroke: r, strokeWidth: 1.5, strokeLinecap: "round" }),
    /* @__PURE__ */ e("line", { x1: 6, y1: 18, x2: 42, y2: 18, stroke: r, strokeWidth: 1.5, strokeDasharray: "3 4", opacity: 0.4 }),
    /* @__PURE__ */ e("line", { x1: 6, y1: 26, x2: 42, y2: 26, stroke: r, strokeWidth: 1.5, strokeDasharray: "3 4", opacity: 0.4 }),
    /* @__PURE__ */ e("line", { x1: 6, y1: 34, x2: 42, y2: 34, stroke: r, strokeWidth: 1.5, strokeDasharray: "3 4", opacity: 0.4 })
  ] })
}), Js = W({
  displayName: "Portfolio",
  viewBox: "0 0 48 48",
  illustrative: !0,
  path: (r, t) => /* @__PURE__ */ d(w, { children: [
    /* @__PURE__ */ e("path", { d: "M4 14h40a2 2 0 0 1 2 2v24a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V16a2 2 0 0 1 2-2Z", stroke: t, strokeWidth: 3, strokeLinejoin: "round" }),
    /* @__PURE__ */ e("path", { d: "M2 14V10a2 2 0 0 1 2-2h12l4 6", stroke: r, strokeWidth: 1.5, strokeLinecap: "round", strokeLinejoin: "round" }),
    /* @__PURE__ */ e("line", { x1: 14, y1: 34, x2: 14, y2: 24, stroke: r, strokeWidth: 1.5, strokeLinecap: "round" }),
    /* @__PURE__ */ e("line", { x1: 20, y1: 34, x2: 20, y2: 28, stroke: r, strokeWidth: 1.5, strokeLinecap: "round" }),
    /* @__PURE__ */ e("line", { x1: 26, y1: 34, x2: 26, y2: 22, stroke: r, strokeWidth: 1.5, strokeLinecap: "round" }),
    /* @__PURE__ */ e("line", { x1: 32, y1: 34, x2: 32, y2: 26, stroke: r, strokeWidth: 1.5, strokeLinecap: "round" }),
    /* @__PURE__ */ e("line", { x1: 10, y1: 34, x2: 36, y2: 34, stroke: r, strokeWidth: 1.5, strokeLinecap: "round" })
  ] })
}), ei = W({
  displayName: "Briefcase",
  viewBox: "0 0 48 48",
  illustrative: !0,
  path: (r, t) => /* @__PURE__ */ d(w, { children: [
    /* @__PURE__ */ e("rect", { x: 4, y: 16, width: 40, height: 24, rx: 3, stroke: t, strokeWidth: 3, strokeLinejoin: "round" }),
    /* @__PURE__ */ e("path", { d: "M16 16V12a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v4", stroke: r, strokeWidth: 1.5, strokeLinecap: "round", strokeLinejoin: "round" }),
    /* @__PURE__ */ e("line", { x1: 4, y1: 28, x2: 44, y2: 28, stroke: r, strokeWidth: 1.5 }),
    /* @__PURE__ */ e("rect", { x: 20, y: 24, width: 8, height: 8, rx: 1, stroke: r, strokeWidth: 1.5 })
  ] })
}), ti = W({
  displayName: "Handshake",
  viewBox: "0 0 48 48",
  illustrative: !0,
  path: (r, t) => /* @__PURE__ */ d(w, { children: [
    /* @__PURE__ */ e("path", { d: "M4 20l8-6h8", stroke: t, strokeWidth: 3, strokeLinecap: "round", strokeLinejoin: "round" }),
    /* @__PURE__ */ e("path", { d: "M44 20l-8-6h-8", stroke: t, strokeWidth: 3, strokeLinecap: "round", strokeLinejoin: "round" }),
    /* @__PURE__ */ e("path", { d: "M20 14l-4 8 6 4 8-4-2-8", stroke: r, strokeWidth: 1.5, strokeLinecap: "round", strokeLinejoin: "round" }),
    /* @__PURE__ */ e("path", { d: "M22 26l-4 4", stroke: r, strokeWidth: 1.5, strokeLinecap: "round" }),
    /* @__PURE__ */ e("path", { d: "M26 26l4 4", stroke: r, strokeWidth: 1.5, strokeLinecap: "round" }),
    /* @__PURE__ */ e("line", { x1: 4, y1: 20, x2: 4, y2: 32, stroke: r, strokeWidth: 1.5, strokeLinecap: "round" }),
    /* @__PURE__ */ e("line", { x1: 44, y1: 20, x2: 44, y2: 32, stroke: r, strokeWidth: 1.5, strokeLinecap: "round" }),
    /* @__PURE__ */ e("circle", { cx: 24, cy: 8, r: 1, fill: r }),
    /* @__PURE__ */ e("circle", { cx: 18, cy: 10, r: 0.8, fill: r }),
    /* @__PURE__ */ e("circle", { cx: 30, cy: 10, r: 0.8, fill: r })
  ] })
}), ri = W({
  displayName: "Target",
  viewBox: "0 0 48 48",
  illustrative: !0,
  path: (r, t) => /* @__PURE__ */ d(w, { children: [
    /* @__PURE__ */ e("circle", { cx: 24, cy: 24, r: 20, stroke: t, strokeWidth: 3 }),
    /* @__PURE__ */ e("circle", { cx: 24, cy: 24, r: 13, stroke: r, strokeWidth: 1.5 }),
    /* @__PURE__ */ e("circle", { cx: 24, cy: 24, r: 6, stroke: r, strokeWidth: 1.5 }),
    /* @__PURE__ */ e("circle", { cx: 24, cy: 24, r: 2, fill: t }),
    /* @__PURE__ */ e("line", { x1: 24, y1: 2, x2: 24, y2: 10, stroke: r, strokeWidth: 1.5, strokeLinecap: "round" }),
    /* @__PURE__ */ e("line", { x1: 24, y1: 38, x2: 24, y2: 46, stroke: r, strokeWidth: 1.5, strokeLinecap: "round" }),
    /* @__PURE__ */ e("line", { x1: 2, y1: 24, x2: 10, y2: 24, stroke: r, strokeWidth: 1.5, strokeLinecap: "round" }),
    /* @__PURE__ */ e("line", { x1: 38, y1: 24, x2: 46, y2: 24, stroke: r, strokeWidth: 1.5, strokeLinecap: "round" })
  ] })
}), ni = W({
  displayName: "Award",
  viewBox: "0 0 48 48",
  illustrative: !0,
  path: (r, t) => /* @__PURE__ */ d(w, { children: [
    /* @__PURE__ */ e("circle", { cx: 24, cy: 18, r: 14, stroke: t, strokeWidth: 3 }),
    /* @__PURE__ */ e("path", { d: "M24 8l3 6 7 1-5 5 1 7-6-3-6 3 1-7-5-5 7-1 3-6Z", stroke: r, strokeWidth: 1.5, strokeLinejoin: "round" }),
    /* @__PURE__ */ e("line", { x1: 16, y1: 30, x2: 10, y2: 44, stroke: t, strokeWidth: 3, strokeLinecap: "round" }),
    /* @__PURE__ */ e("line", { x1: 10, y1: 44, x2: 16, y2: 40, stroke: r, strokeWidth: 1.5, strokeLinecap: "round" }),
    /* @__PURE__ */ e("line", { x1: 32, y1: 30, x2: 38, y2: 44, stroke: t, strokeWidth: 3, strokeLinecap: "round" }),
    /* @__PURE__ */ e("line", { x1: 38, y1: 44, x2: 32, y2: 40, stroke: r, strokeWidth: 1.5, strokeLinecap: "round" })
  ] })
}), oi = W({
  displayName: "Lightbulb",
  viewBox: "0 0 48 48",
  illustrative: !0,
  path: (r, t) => /* @__PURE__ */ d(w, { children: [
    /* @__PURE__ */ e("path", { d: "M18 30c-1-2-4-5-4-10a10 10 0 0 1 20 0c0 5-3 8-4 10", stroke: t, strokeWidth: 3, strokeLinecap: "round", strokeLinejoin: "round" }),
    /* @__PURE__ */ e("line", { x1: 18, y1: 34, x2: 30, y2: 34, stroke: r, strokeWidth: 1.5, strokeLinecap: "round" }),
    /* @__PURE__ */ e("line", { x1: 19, y1: 38, x2: 29, y2: 38, stroke: r, strokeWidth: 1.5, strokeLinecap: "round" }),
    /* @__PURE__ */ e("path", { d: "M20 42h8", stroke: r, strokeWidth: 1.5, strokeLinecap: "round" }),
    /* @__PURE__ */ e("path", { d: "M20 30v-6l4 4 4-4v6", stroke: r, strokeWidth: 1.5, strokeLinecap: "round", strokeLinejoin: "round" }),
    /* @__PURE__ */ e("line", { x1: 24, y1: 2, x2: 24, y2: 6, stroke: r, strokeWidth: 1.5, strokeLinecap: "round" }),
    /* @__PURE__ */ e("line", { x1: 38, y1: 10, x2: 35, y2: 12, stroke: r, strokeWidth: 1.5, strokeLinecap: "round" }),
    /* @__PURE__ */ e("line", { x1: 10, y1: 10, x2: 13, y2: 12, stroke: r, strokeWidth: 1.5, strokeLinecap: "round" })
  ] })
}), si = W({
  displayName: "Presentation",
  viewBox: "0 0 48 48",
  illustrative: !0,
  path: (r, t) => /* @__PURE__ */ d(w, { children: [
    /* @__PURE__ */ e("rect", { x: 4, y: 8, width: 40, height: 28, rx: 2, stroke: t, strokeWidth: 3, strokeLinejoin: "round" }),
    /* @__PURE__ */ e("line", { x1: 4, y1: 14, x2: 44, y2: 14, stroke: r, strokeWidth: 1.5 }),
    /* @__PURE__ */ e("line", { x1: 24, y1: 36, x2: 24, y2: 44, stroke: r, strokeWidth: 1.5, strokeLinecap: "round" }),
    /* @__PURE__ */ e("line", { x1: 18, y1: 44, x2: 30, y2: 44, stroke: r, strokeWidth: 1.5, strokeLinecap: "round" }),
    /* @__PURE__ */ e("polyline", { points: "10 32 18 24 26 28 38 18", stroke: r, strokeWidth: 1.5, strokeLinecap: "round", strokeLinejoin: "round" }),
    /* @__PURE__ */ e("polyline", { points: "34 18 38 18 38 22", stroke: r, strokeWidth: 1.5, strokeLinecap: "round", strokeLinejoin: "round" })
  ] })
}), ii = W({
  displayName: "Contract",
  viewBox: "0 0 48 48",
  illustrative: !0,
  path: (r, t) => /* @__PURE__ */ d(w, { children: [
    /* @__PURE__ */ e("path", { d: "M10 4h20l10 10v30a2 2 0 0 1-2 2H10a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z", stroke: t, strokeWidth: 3, strokeLinejoin: "round" }),
    /* @__PURE__ */ e("path", { d: "M30 4v10h10", stroke: r, strokeWidth: 1.5, strokeLinejoin: "round" }),
    /* @__PURE__ */ e("line", { x1: 16, y1: 22, x2: 32, y2: 22, stroke: r, strokeWidth: 1.5, strokeLinecap: "round" }),
    /* @__PURE__ */ e("line", { x1: 16, y1: 28, x2: 32, y2: 28, stroke: r, strokeWidth: 1.5, strokeLinecap: "round" }),
    /* @__PURE__ */ e("line", { x1: 16, y1: 34, x2: 26, y2: 34, stroke: r, strokeWidth: 1.5, strokeLinecap: "round" }),
    /* @__PURE__ */ e("line", { x1: 22, y1: 40, x2: 36, y2: 40, stroke: r, strokeWidth: 1.5, strokeLinecap: "round" }),
    /* @__PURE__ */ e("path", { d: "M24 38c2-1 3 1 5 0s2-2 4-1", stroke: r, strokeWidth: 1.5, strokeLinecap: "round" })
  ] })
}), ai = W({
  displayName: "Building",
  viewBox: "0 0 48 48",
  illustrative: !0,
  path: (r, t) => /* @__PURE__ */ d(w, { children: [
    /* @__PURE__ */ e("rect", { x: 8, y: 10, width: 32, height: 34, stroke: t, strokeWidth: 3, strokeLinejoin: "round" }),
    /* @__PURE__ */ e("path", { d: "M4 10h40", stroke: t, strokeWidth: 3, strokeLinecap: "round" }),
    /* @__PURE__ */ e("line", { x1: 8, y1: 10, x2: 8, y2: 6, stroke: r, strokeWidth: 1.5, strokeLinecap: "round" }),
    /* @__PURE__ */ e("line", { x1: 40, y1: 10, x2: 40, y2: 6, stroke: r, strokeWidth: 1.5, strokeLinecap: "round" }),
    /* @__PURE__ */ e("line", { x1: 8, y1: 6, x2: 40, y2: 6, stroke: r, strokeWidth: 1.5 }),
    /* @__PURE__ */ e("rect", { x: 14, y: 16, width: 6, height: 6, stroke: r, strokeWidth: 1.5 }),
    /* @__PURE__ */ e("rect", { x: 28, y: 16, width: 6, height: 6, stroke: r, strokeWidth: 1.5 }),
    /* @__PURE__ */ e("rect", { x: 14, y: 28, width: 6, height: 6, stroke: r, strokeWidth: 1.5 }),
    /* @__PURE__ */ e("rect", { x: 28, y: 28, width: 6, height: 6, stroke: r, strokeWidth: 1.5 }),
    /* @__PURE__ */ e("rect", { x: 20, y: 36, width: 8, height: 8, rx: 1, stroke: r, strokeWidth: 1.5 }),
    /* @__PURE__ */ e("circle", { cx: 26, cy: 40, r: 0.8, fill: r })
  ] })
}), li = W({
  displayName: "Shield",
  viewBox: "0 0 48 48",
  illustrative: !0,
  path: (r, t) => /* @__PURE__ */ d(w, { children: [
    /* @__PURE__ */ e("path", { d: "M24 4L6 12v12c0 11 8 18 18 22 10-4 18-11 18-22V12L24 4Z", stroke: t, strokeWidth: 3, strokeLinejoin: "round" }),
    /* @__PURE__ */ e("path", { d: "M24 10L12 16v8c0 8 5.5 13 12 16 6.5-3 12-8 12-16v-8L24 10Z", stroke: r, strokeWidth: 1.5, strokeLinejoin: "round" }),
    /* @__PURE__ */ e("polyline", { points: "18 24 22 28 30 20", stroke: r, strokeWidth: 1.5, strokeLinecap: "round", strokeLinejoin: "round" })
  ] })
}), ci = W({
  displayName: "Lock",
  viewBox: "0 0 48 48",
  illustrative: !0,
  path: (r, t) => /* @__PURE__ */ d(w, { children: [
    /* @__PURE__ */ e("rect", { x: 10, y: 22, width: 28, height: 22, rx: 3, stroke: t, strokeWidth: 3, strokeLinejoin: "round" }),
    /* @__PURE__ */ e("path", { d: "M16 22V14a8 8 0 0 1 16 0v8", stroke: r, strokeWidth: 1.5, strokeLinecap: "round", strokeLinejoin: "round" }),
    /* @__PURE__ */ e("circle", { cx: 24, cy: 32, r: 3, stroke: r, strokeWidth: 1.5 }),
    /* @__PURE__ */ e("line", { x1: 24, y1: 35, x2: 24, y2: 39, stroke: r, strokeWidth: 1.5, strokeLinecap: "round" })
  ] })
}), di = W({
  displayName: "Key",
  viewBox: "0 0 48 48",
  illustrative: !0,
  path: (r, t) => /* @__PURE__ */ d(w, { children: [
    /* @__PURE__ */ e("circle", { cx: 14, cy: 14, r: 10, stroke: t, strokeWidth: 3 }),
    /* @__PURE__ */ e("circle", { cx: 14, cy: 14, r: 4, stroke: r, strokeWidth: 1.5 }),
    /* @__PURE__ */ e("line", { x1: 22, y1: 22, x2: 42, y2: 42, stroke: t, strokeWidth: 3, strokeLinecap: "round" }),
    /* @__PURE__ */ e("line", { x1: 32, y1: 32, x2: 36, y2: 28, stroke: r, strokeWidth: 1.5, strokeLinecap: "round" }),
    /* @__PURE__ */ e("line", { x1: 36, y1: 36, x2: 40, y2: 32, stroke: r, strokeWidth: 1.5, strokeLinecap: "round" }),
    /* @__PURE__ */ e("line", { x1: 42, y1: 42, x2: 44, y2: 38, stroke: r, strokeWidth: 1.5, strokeLinecap: "round" })
  ] })
}), hi = W({
  displayName: "Fingerprint",
  viewBox: "0 0 48 48",
  illustrative: !0,
  path: (r, t) => /* @__PURE__ */ d(w, { children: [
    /* @__PURE__ */ e("path", { d: "M8 28c0-8.84 7.16-16 16-16s16 7.16 16 16", stroke: t, strokeWidth: 3, strokeLinecap: "round" }),
    /* @__PURE__ */ e("path", { d: "M14 28c0-5.52 4.48-10 10-10s10 4.48 10 10", stroke: r, strokeWidth: 1.5, strokeLinecap: "round" }),
    /* @__PURE__ */ e("path", { d: "M18 28a6 6 0 0 1 12 0", stroke: r, strokeWidth: 1.5, strokeLinecap: "round" }),
    /* @__PURE__ */ e("path", { d: "M22 28a2 2 0 0 1 4 0", stroke: r, strokeWidth: 1.5, strokeLinecap: "round" }),
    /* @__PURE__ */ e("path", { d: "M22 28v8", stroke: r, strokeWidth: 1.5, strokeLinecap: "round" }),
    /* @__PURE__ */ e("path", { d: "M26 28v12", stroke: r, strokeWidth: 1.5, strokeLinecap: "round" }),
    /* @__PURE__ */ e("path", { d: "M18 28v10c0 2 1 4 3 4", stroke: r, strokeWidth: 1.5, strokeLinecap: "round" }),
    /* @__PURE__ */ e("path", { d: "M30 28v6c0 3-2 5-4 6", stroke: r, strokeWidth: 1.5, strokeLinecap: "round" }),
    /* @__PURE__ */ e("path", { d: "M34 28v4c0 4-3 8-6 10", stroke: r, strokeWidth: 1.5, strokeLinecap: "round" }),
    /* @__PURE__ */ e("path", { d: "M14 28v6c0 4 2 7 5 9", stroke: t, strokeWidth: 3, strokeLinecap: "round" })
  ] })
}), pi = L(
  ({ size: r = 200, colour: t = "#000000", accentColour: n = "#E60000", className: o, ...s }, l) => {
    const a = typeof r == "number" ? r : 200, i = Math.round(a * 0.75);
    return /* @__PURE__ */ d(
      "svg",
      {
        ref: l,
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 200 150",
        width: a,
        height: i,
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
          /* @__PURE__ */ e("line", { x1: 89, y1: 85, x2: 105, y2: 85, stroke: n, strokeWidth: 1.5, strokeLinecap: "round" }),
          /* @__PURE__ */ e("line", { x1: 89, y1: 90, x2: 120, y2: 90, stroke: t, strokeWidth: 1, strokeLinecap: "round", opacity: 0.4 }),
          /* @__PURE__ */ e("line", { x1: 89, y1: 94, x2: 115, y2: 94, stroke: t, strokeWidth: 1, strokeLinecap: "round", opacity: 0.4 }),
          /* @__PURE__ */ e("circle", { cx: 60, cy: 62, r: 8, stroke: t, strokeWidth: 1.8 }),
          /* @__PURE__ */ e("path", { d: "M53 58c0-5 3-9 8-9s7 4 7 8", stroke: t, strokeWidth: 1.5, strokeLinecap: "round" }),
          /* @__PURE__ */ e("circle", { cx: 58, cy: 61, r: 1, fill: t }),
          /* @__PURE__ */ e("circle", { cx: 63, cy: 61, r: 1, fill: t }),
          /* @__PURE__ */ e("path", { d: "M57 65c1 1.5 4 1.5 5 0", stroke: t, strokeWidth: 1, strokeLinecap: "round" }),
          /* @__PURE__ */ e("line", { x1: 60, y1: 70, x2: 60, y2: 74, stroke: t, strokeWidth: 1.5, strokeLinecap: "round" }),
          /* @__PURE__ */ e("path", { d: "M50 74h20c1 0 2 1 2 2v14H48V76c0-1 1-2 2-2Z", stroke: t, strokeWidth: 1.5, strokeLinejoin: "round" }),
          /* @__PURE__ */ e("line", { x1: 60, y1: 74, x2: 60, y2: 90, stroke: n, strokeWidth: 1.5, strokeLinecap: "round" }),
          /* @__PURE__ */ e("path", { d: "M50 78c-5 2-8 8-8 15l-2 12", stroke: t, strokeWidth: 1.5, strokeLinecap: "round" }),
          /* @__PURE__ */ e("path", { d: "M70 78c4-2 10-6 16-14", stroke: t, strokeWidth: 1.5, strokeLinecap: "round" }),
          /* @__PURE__ */ e("path", { d: "M86 64c1-2 3-3 4-2s0 3-1 4l-3 3", stroke: t, strokeWidth: 1.5, strokeLinecap: "round" }),
          /* @__PURE__ */ e("line", { x1: 92, y1: 60, x2: 96, y2: 58, stroke: n, strokeWidth: 1, strokeLinecap: "round" }),
          /* @__PURE__ */ e("line", { x1: 91, y1: 64, x2: 95, y2: 63, stroke: n, strokeWidth: 1, strokeLinecap: "round" }),
          /* @__PURE__ */ e("line", { x1: 90, y1: 68, x2: 94, y2: 68, stroke: n, strokeWidth: 1, strokeLinecap: "round" }),
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
          /* @__PURE__ */ e("path", { d: "M160 93c-2-3-1-6 1-7", stroke: n, strokeWidth: 1, strokeLinecap: "round" }),
          /* @__PURE__ */ e("line", { x1: 10, y1: 143, x2: 190, y2: 143, stroke: t, strokeWidth: 1, strokeLinecap: "round", opacity: 0.3 })
        ]
      }
    );
  }
);
pi.displayName = "WelcomeScene";
const mi = L(
  ({ size: r = 200, colour: t = "#000000", accentColour: n = "#E60000", className: o, ...s }, l) => {
    const a = typeof r == "number" ? r : 200, i = Math.round(a * 0.75);
    return /* @__PURE__ */ d(
      "svg",
      {
        ref: l,
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 200 150",
        width: a,
        height: i,
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
              stroke: n,
              strokeWidth: 2.5,
              strokeLinecap: "round",
              strokeLinejoin: "round"
            }
          ),
          /* @__PURE__ */ e("polyline", { points: "170 32 175 28 179 33", stroke: n, strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" }),
          /* @__PURE__ */ e("circle", { cx: 90, cy: 92, r: 2, fill: n }),
          /* @__PURE__ */ e("circle", { cx: 120, cy: 78, r: 2, fill: n }),
          /* @__PURE__ */ e("circle", { cx: 148, cy: 55, r: 2, fill: n }),
          /* @__PURE__ */ e("circle", { cx: 175, cy: 28, r: 2, fill: n }),
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
          /* @__PURE__ */ e("line", { x1: 38, y1: 60, x2: 38, y2: 78, stroke: n, strokeWidth: 1.2 }),
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
          /* @__PURE__ */ e("path", { d: "M22 88c-3-2-6 0-6 2s3 2 6 1", stroke: n, strokeWidth: 1, strokeLinecap: "round" }),
          /* @__PURE__ */ e("line", { x1: 5, y1: 130, x2: 195, y2: 130, stroke: t, strokeWidth: 1, opacity: 0.3 })
        ]
      }
    );
  }
);
mi.displayName = "InvestmentGrowth";
const ki = L(
  ({ size: r = 200, colour: t = "#000000", accentColour: n = "#E60000", className: o, ...s }, l) => {
    const a = typeof r == "number" ? r : 200, i = Math.round(a * 0.75);
    return /* @__PURE__ */ d(
      "svg",
      {
        ref: l,
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 200 150",
        width: a,
        height: i,
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
          /* @__PURE__ */ e("line", { x1: 62, y1: 50, x2: 62, y2: 66, stroke: n, strokeWidth: 1.2 }),
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
          /* @__PURE__ */ e("path", { d: "M94 68l6 6", stroke: n, strokeWidth: 2, strokeLinecap: "round" }),
          /* @__PURE__ */ e("circle", { cx: 100, cy: 54, r: 1.5, fill: n }),
          /* @__PURE__ */ e("circle", { cx: 95, cy: 50, r: 1, fill: n }),
          /* @__PURE__ */ e("circle", { cx: 105, cy: 50, r: 1, fill: n }),
          /* @__PURE__ */ e("line", { x1: 100, y1: 46, x2: 100, y2: 42, stroke: n, strokeWidth: 1, strokeLinecap: "round" }),
          /* @__PURE__ */ e("line", { x1: 92, y1: 48, x2: 89, y2: 44, stroke: n, strokeWidth: 1, strokeLinecap: "round" }),
          /* @__PURE__ */ e("line", { x1: 108, y1: 48, x2: 111, y2: 44, stroke: n, strokeWidth: 1, strokeLinecap: "round" }),
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
ki.displayName = "TeamCollaboration";
const ui = L(
  ({ size: r = 200, colour: t = "#000000", accentColour: n = "#E60000", className: o, ...s }, l) => {
    const a = typeof r == "number" ? r : 200, i = Math.round(a * 0.75);
    return /* @__PURE__ */ d(
      "svg",
      {
        ref: l,
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 200 150",
        width: a,
        height: i,
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
              stroke: n,
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
          /* @__PURE__ */ e("polyline", { points: "92 80 98 86 110 74", stroke: n, strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" }),
          /* @__PURE__ */ e("circle", { cx: 44, cy: 55, r: 8, stroke: t, strokeWidth: 1.8 }),
          /* @__PURE__ */ e("path", { d: "M37 51c1-5 3.5-7 7.5-7s6 2.5 6.5 6", stroke: t, strokeWidth: 1.5, strokeLinecap: "round" }),
          /* @__PURE__ */ e("circle", { cx: 42, cy: 54, r: 1, fill: t }),
          /* @__PURE__ */ e("circle", { cx: 47, cy: 54, r: 1, fill: t }),
          /* @__PURE__ */ e("path", { d: "M42 58c1 1 3.5 1 4.5 0", stroke: t, strokeWidth: 0.8, strokeLinecap: "round" }),
          /* @__PURE__ */ e("line", { x1: 44, y1: 63, x2: 44, y2: 67, stroke: t, strokeWidth: 1.5 }),
          /* @__PURE__ */ e("path", { d: "M34 67h20v16H34V67Z", stroke: t, strokeWidth: 1.5, strokeLinejoin: "round" }),
          /* @__PURE__ */ e("line", { x1: 44, y1: 67, x2: 44, y2: 83, stroke: n, strokeWidth: 1.2 }),
          /* @__PURE__ */ e("path", { d: "M34 72c-4 3-6 8-4 14", stroke: t, strokeWidth: 1.5, strokeLinecap: "round" }),
          /* @__PURE__ */ e("path", { d: "M54 72c5 0 12 2 16 6", stroke: t, strokeWidth: 1.5, strokeLinecap: "round" }),
          /* @__PURE__ */ e("circle", { cx: 70, cy: 78, r: 2.5, stroke: t, strokeWidth: 1.2 }),
          /* @__PURE__ */ e("path", { d: "M38 83v28c0 2 0 4 1 5l6 3", stroke: t, strokeWidth: 1.5, strokeLinecap: "round" }),
          /* @__PURE__ */ e("path", { d: "M50 83v28c0 2 0 4-1 5l-6 3", stroke: t, strokeWidth: 1.5, strokeLinecap: "round" }),
          /* @__PURE__ */ e("path", { d: "M45 119h-10c-2 0-3 1.5-3 3h16c0-1.5-1-3-3-3Z", stroke: t, strokeWidth: 1.2 }),
          /* @__PURE__ */ e("path", { d: "M43 119h10c2 0 3 1.5 3 3H40c0-1.5 1-3 3-3Z", stroke: t, strokeWidth: 1.2 }),
          /* @__PURE__ */ e("circle", { cx: 150, cy: 30, r: 2, fill: n }),
          /* @__PURE__ */ e("circle", { cx: 158, cy: 42, r: 1.5, fill: n }),
          /* @__PURE__ */ e("circle", { cx: 145, cy: 45, r: 1, fill: n }),
          /* @__PURE__ */ e("line", { x1: 155, y1: 26, x2: 158, y2: 22, stroke: n, strokeWidth: 1, strokeLinecap: "round" }),
          /* @__PURE__ */ e("line", { x1: 162, y1: 36, x2: 166, y2: 34, stroke: n, strokeWidth: 1, strokeLinecap: "round" }),
          /* @__PURE__ */ e("text", { x: 155, y: 60, fontSize: 6, fill: t, fontFamily: "monospace", opacity: 0.3, children: "010" }),
          /* @__PURE__ */ e("text", { x: 148, y: 70, fontSize: 6, fill: t, fontFamily: "monospace", opacity: 0.3, children: "101" }),
          /* @__PURE__ */ e("text", { x: 160, y: 80, fontSize: 6, fill: t, fontFamily: "monospace", opacity: 0.3, children: "011" }),
          /* @__PURE__ */ e("line", { x1: 10, y1: 130, x2: 190, y2: 130, stroke: t, strokeWidth: 1, opacity: 0.3 })
        ]
      }
    );
  }
);
ui.displayName = "SecurityShield";
const _i = L(
  ({ size: r = 200, colour: t = "#000000", accentColour: n = "#E60000", className: o, ...s }, l) => {
    const a = typeof r == "number" ? r : 200, i = Math.round(a * 0.75);
    return /* @__PURE__ */ d(
      "svg",
      {
        ref: l,
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 200 150",
        width: a,
        height: i,
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
          /* @__PURE__ */ e("circle", { cx: 110, cy: 40, r: 3, fill: n }),
          /* @__PURE__ */ e("circle", { cx: 150, cy: 45, r: 3, fill: n }),
          /* @__PURE__ */ e("circle", { cx: 140, cy: 70, r: 3, fill: n }),
          /* @__PURE__ */ e("circle", { cx: 118, cy: 68, r: 3, fill: n }),
          /* @__PURE__ */ e("circle", { cx: 130, cy: 35, r: 3, fill: n }),
          /* @__PURE__ */ e("circle", { cx: 145, cy: 60, r: 2.5, fill: n }),
          /* @__PURE__ */ e("line", { x1: 110, y1: 40, x2: 150, y2: 45, stroke: n, strokeWidth: 1, opacity: 0.6 }),
          /* @__PURE__ */ e("line", { x1: 150, y1: 45, x2: 140, y2: 70, stroke: n, strokeWidth: 1, opacity: 0.6 }),
          /* @__PURE__ */ e("line", { x1: 140, y1: 70, x2: 118, y2: 68, stroke: n, strokeWidth: 1, opacity: 0.6 }),
          /* @__PURE__ */ e("line", { x1: 118, y1: 68, x2: 110, y2: 40, stroke: n, strokeWidth: 1, opacity: 0.6 }),
          /* @__PURE__ */ e("line", { x1: 130, y1: 35, x2: 150, y2: 45, stroke: n, strokeWidth: 1, opacity: 0.6 }),
          /* @__PURE__ */ e("line", { x1: 130, y1: 35, x2: 110, y2: 40, stroke: n, strokeWidth: 1, opacity: 0.6 }),
          /* @__PURE__ */ e("line", { x1: 145, y1: 60, x2: 140, y2: 70, stroke: n, strokeWidth: 1, opacity: 0.6 }),
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
          /* @__PURE__ */ e("line", { x1: 42, y1: 62, x2: 42, y2: 78, stroke: n, strokeWidth: 1.2 }),
          /* @__PURE__ */ e("path", { d: "M52 66c6-2 20-4 34-4", stroke: t, strokeWidth: 1.5, strokeLinecap: "round" }),
          /* @__PURE__ */ e("path", { d: "M86 62c2 0 4 1 5 3", stroke: t, strokeWidth: 1.2, strokeLinecap: "round" }),
          /* @__PURE__ */ e("path", { d: "M32 66c-4 2-7 8-6 14", stroke: t, strokeWidth: 1.5, strokeLinecap: "round" }),
          /* @__PURE__ */ e("path", { d: "M36 78v30c0 2 0 4 1 5l6 3", stroke: t, strokeWidth: 1.5, strokeLinecap: "round" }),
          /* @__PURE__ */ e("path", { d: "M48 78v30c0 2 0 4-1 5l-6 3", stroke: t, strokeWidth: 1.5, strokeLinecap: "round" }),
          /* @__PURE__ */ e("path", { d: "M43 116h-10c-2 0-3 1.5-3 3h16c0-1.5-1-3-3-3Z", stroke: t, strokeWidth: 1.2 }),
          /* @__PURE__ */ e("path", { d: "M41 116h10c2 0 3 1.5 3 3H38c0-1.5 1-3 3-3Z", stroke: t, strokeWidth: 1.2 }),
          /* @__PURE__ */ e("rect", { x: 170, y: 95, width: 18, height: 14, rx: 2, stroke: t, strokeWidth: 1 }),
          /* @__PURE__ */ e("line", { x1: 174, y1: 100, x2: 184, y2: 100, stroke: t, strokeWidth: 0.8, strokeLinecap: "round" }),
          /* @__PURE__ */ e("line", { x1: 174, y1: 104, x2: 181, y2: 104, stroke: n, strokeWidth: 0.8, strokeLinecap: "round" }),
          /* @__PURE__ */ e("line", { x1: 10, y1: 128, x2: 190, y2: 128, stroke: t, strokeWidth: 1, opacity: 0.3 })
        ]
      }
    );
  }
);
_i.displayName = "GlobalNetwork";
const yi = L(
  ({ size: r = 200, colour: t = "#000000", accentColour: n = "#E60000", className: o, ...s }, l) => {
    const a = typeof r == "number" ? r : 200, i = Math.round(a * 0.75);
    return /* @__PURE__ */ d(
      "svg",
      {
        ref: l,
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 200 150",
        width: a,
        height: i,
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
              stroke: n,
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
          /* @__PURE__ */ e("text", { x: 148, y: 53, textAnchor: "middle", fontSize: 8, fontWeight: "bold", fill: n, fontFamily: "sans-serif", children: "40%" }),
          /* @__PURE__ */ e("text", { x: 148, y: 62, textAnchor: "middle", fontSize: 5, fill: t, fontFamily: "sans-serif", opacity: 0.6, children: "Growth" }),
          /* @__PURE__ */ e("circle", { cx: 126, cy: 95, r: 3, fill: n }),
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
          /* @__PURE__ */ e("line", { x1: 50, y1: 52, x2: 50, y2: 68, stroke: n, strokeWidth: 1.2 }),
          /* @__PURE__ */ e("path", { d: "M60 56c4 2 10 6 12 10", stroke: t, strokeWidth: 1.5, strokeLinecap: "round" }),
          /* @__PURE__ */ e("rect", { x: 68, y: 60, width: 24, height: 32, rx: 2, stroke: t, strokeWidth: 1.5, strokeLinejoin: "round" }),
          /* @__PURE__ */ e("rect", { x: 75, y: 57, width: 10, height: 6, rx: 1, stroke: t, strokeWidth: 1 }),
          /* @__PURE__ */ e("line", { x1: 73, y1: 70, x2: 87, y2: 70, stroke: t, strokeWidth: 0.8, strokeLinecap: "round" }),
          /* @__PURE__ */ e("line", { x1: 73, y1: 75, x2: 87, y2: 75, stroke: t, strokeWidth: 0.8, strokeLinecap: "round" }),
          /* @__PURE__ */ e("line", { x1: 73, y1: 80, x2: 84, y2: 80, stroke: t, strokeWidth: 0.8, strokeLinecap: "round" }),
          /* @__PURE__ */ e("polyline", { points: "73 70 74 71 76 69", stroke: n, strokeWidth: 1, strokeLinecap: "round" }),
          /* @__PURE__ */ e("polyline", { points: "73 75 74 76 76 74", stroke: n, strokeWidth: 1, strokeLinecap: "round" }),
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
yi.displayName = "FinancialPlanning";
const gi = L(
  ({ size: r = 200, colour: t = "#000000", accentColour: n = "#E60000", className: o, ...s }, l) => {
    const a = typeof r == "number" ? r : 200, i = Math.round(a * 0.75);
    return /* @__PURE__ */ d(
      "svg",
      {
        ref: l,
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 200 150",
        width: a,
        height: i,
        fill: "none",
        "aria-hidden": "true",
        role: "img",
        focusable: "false",
        className: o,
        ...s,
        children: [
          /* @__PURE__ */ e("rect", { x: 80, y: 110, width: 40, height: 8, rx: 2, fill: "#CCCABC", stroke: t, strokeWidth: 1.2 }),
          /* @__PURE__ */ e("rect", { x: 85, y: 102, width: 30, height: 8, rx: 1, fill: "#CCCABC", stroke: t, strokeWidth: 1.2 }),
          /* @__PURE__ */ e("text", { x: 100, y: 108, textAnchor: "middle", fontSize: 5, fontWeight: "bold", fill: n, fontFamily: "sans-serif", children: "1" }),
          /* @__PURE__ */ e("circle", { cx: 100, cy: 44, r: 9, stroke: t, strokeWidth: 1.8 }),
          /* @__PURE__ */ e("path", { d: "M92 40c1-5 4-8 9-8s7 3 7.5 7", stroke: t, strokeWidth: 1.5, strokeLinecap: "round" }),
          /* @__PURE__ */ e("circle", { cx: 97, cy: 43, r: 1.2, fill: t }),
          /* @__PURE__ */ e("circle", { cx: 103, cy: 43, r: 1.2, fill: t }),
          /* @__PURE__ */ e("path", { d: "M95 48c2 2.5 7 2.5 9 0", stroke: t, strokeWidth: 1, strokeLinecap: "round" }),
          /* @__PURE__ */ e("line", { x1: 100, y1: 53, x2: 100, y2: 57, stroke: t, strokeWidth: 1.5 }),
          /* @__PURE__ */ e("path", { d: "M90 57h20v16H90V57Z", stroke: t, strokeWidth: 1.5, strokeLinejoin: "round" }),
          /* @__PURE__ */ e("rect", { x: 90, y: 57, width: 20, height: 16, rx: 0, fill: "none", stroke: "none" }),
          /* @__PURE__ */ e("line", { x1: 100, y1: 57, x2: 100, y2: 73, stroke: n, strokeWidth: 1.5 }),
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
          /* @__PURE__ */ e("path", { d: "M60 20l2 4 4.5 0.7-3.2 3.1 0.8 4.5L60 30l-4.1 2.3 0.8-4.5-3.2-3.1L58 24l2-4Z", fill: n }),
          /* @__PURE__ */ e("path", { d: "M140 18l1.5 3 3.3 0.5-2.4 2.3 0.6 3.3L140 25l-3 1.6 0.6-3.3-2.4-2.3 3.3-0.5 1.5-3Z", fill: n }),
          /* @__PURE__ */ e("path", { d: "M100 10l1 2 2.2 0.3-1.6 1.6 0.4 2.2L100 14.8l-2 1.3 0.4-2.2-1.6-1.6 2.2-0.3 1-2Z", fill: n }),
          /* @__PURE__ */ e("circle", { cx: 55, cy: 35, r: 1.5, fill: n }),
          /* @__PURE__ */ e("circle", { cx: 145, cy: 32, r: 1.5, fill: n }),
          /* @__PURE__ */ e("circle", { cx: 78, cy: 15, r: 1, fill: n }),
          /* @__PURE__ */ e("circle", { cx: 122, cy: 14, r: 1, fill: n }),
          /* @__PURE__ */ e("line", { x1: 50, y1: 25, x2: 55, y2: 30, stroke: n, strokeWidth: 1.5, strokeLinecap: "round" }),
          /* @__PURE__ */ e("line", { x1: 150, y1: 22, x2: 146, y2: 28, stroke: n, strokeWidth: 1.5, strokeLinecap: "round" }),
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
gi.displayName = "SuccessCelebration";
const fi = L(
  ({ size: r = 200, colour: t = "#000000", accentColour: n = "#E60000", className: o, ...s }, l) => {
    const a = typeof r == "number" ? r : 200, i = Math.round(a * 0.75);
    return /* @__PURE__ */ d(
      "svg",
      {
        ref: l,
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 200 150",
        width: a,
        height: i,
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
          /* @__PURE__ */ e("rect", { x: 116, y: 38, width: 34, height: 10, rx: 1, fill: n, opacity: 0.15 }),
          /* @__PURE__ */ e("text", { x: 133, y: 45, textAnchor: "middle", fontSize: 5, fontWeight: "bold", fill: n, fontFamily: "sans-serif", children: "UBS" }),
          /* @__PURE__ */ e("text", { x: 116, y: 58, fontSize: 4, fill: t, fontFamily: "sans-serif", opacity: 0.5, children: "Balance" }),
          /* @__PURE__ */ e("text", { x: 116, y: 65, fontSize: 6, fontWeight: "bold", fill: t, fontFamily: "sans-serif", children: "£12,450" }),
          /* @__PURE__ */ e("line", { x1: 116, y1: 70, x2: 150, y2: 70, stroke: t, strokeWidth: 0.5, opacity: 0.3 }),
          /* @__PURE__ */ e("circle", { cx: 119, cy: 76, r: 2, stroke: t, strokeWidth: 0.5 }),
          /* @__PURE__ */ e("line", { x1: 124, y1: 75, x2: 138, y2: 75, stroke: t, strokeWidth: 0.8, strokeLinecap: "round", opacity: 0.5 }),
          /* @__PURE__ */ e("text", { x: 145, y: 77, textAnchor: "end", fontSize: 3.5, fill: n, fontFamily: "sans-serif", children: "+£500" }),
          /* @__PURE__ */ e("line", { x1: 116, y1: 80, x2: 150, y2: 80, stroke: t, strokeWidth: 0.5, opacity: 0.3 }),
          /* @__PURE__ */ e("circle", { cx: 119, cy: 86, r: 2, stroke: t, strokeWidth: 0.5 }),
          /* @__PURE__ */ e("line", { x1: 124, y1: 85, x2: 136, y2: 85, stroke: t, strokeWidth: 0.8, strokeLinecap: "round", opacity: 0.5 }),
          /* @__PURE__ */ e("text", { x: 145, y: 87, textAnchor: "end", fontSize: 3.5, fill: t, fontFamily: "sans-serif", children: "-£42" }),
          /* @__PURE__ */ e("line", { x1: 116, y1: 90, x2: 150, y2: 90, stroke: t, strokeWidth: 0.5, opacity: 0.3 }),
          /* @__PURE__ */ e("line", { x1: 112, y1: 96, x2: 154, y2: 96, stroke: t, strokeWidth: 0.5, opacity: 0.3 }),
          /* @__PURE__ */ e("circle", { cx: 122, cy: 100, r: 2, stroke: t, strokeWidth: 0.6 }),
          /* @__PURE__ */ e("circle", { cx: 133, cy: 100, r: 2, fill: n }),
          /* @__PURE__ */ e("circle", { cx: 144, cy: 100, r: 2, stroke: t, strokeWidth: 0.6 }),
          /* @__PURE__ */ e("line", { x1: 128, y1: 108, x2: 138, y2: 108, stroke: t, strokeWidth: 1.5, strokeLinecap: "round" }),
          /* @__PURE__ */ e("circle", { cx: 154, cy: 24, r: 4, fill: n }),
          /* @__PURE__ */ e("text", { x: 154, y: 26, textAnchor: "middle", fontSize: 5, fill: "white", fontFamily: "sans-serif", children: "3" }),
          /* @__PURE__ */ e("circle", { cx: 60, cy: 42, r: 8, stroke: t, strokeWidth: 1.8 }),
          /* @__PURE__ */ e("path", { d: "M53 38c0.5-4.5 3.5-7 7.5-7s6.5 2.5 7 6", stroke: t, strokeWidth: 1.5, strokeLinecap: "round" }),
          /* @__PURE__ */ e("circle", { cx: 58, cy: 41, r: 1, fill: t }),
          /* @__PURE__ */ e("circle", { cx: 63, cy: 41, r: 1, fill: t }),
          /* @__PURE__ */ e("path", { d: "M57 45c1 1 4 1 5 0", stroke: t, strokeWidth: 0.8, strokeLinecap: "round" }),
          /* @__PURE__ */ e("line", { x1: 60, y1: 50, x2: 60, y2: 54, stroke: t, strokeWidth: 1.5 }),
          /* @__PURE__ */ e("path", { d: "M50 54h20v16H50V54Z", stroke: t, strokeWidth: 1.5, strokeLinejoin: "round" }),
          /* @__PURE__ */ e("line", { x1: 60, y1: 54, x2: 60, y2: 70, stroke: n, strokeWidth: 1.2 }),
          /* @__PURE__ */ e("path", { d: "M70 58c8 1 22 4 34 8", stroke: t, strokeWidth: 1.5, strokeLinecap: "round" }),
          /* @__PURE__ */ e("path", { d: "M104 66c2-1 4 0 4 2v6c0 2-2 3-4 2", stroke: t, strokeWidth: 1.2, strokeLinecap: "round" }),
          /* @__PURE__ */ e("path", { d: "M50 58c-4 2-7 8-6 16", stroke: t, strokeWidth: 1.5, strokeLinecap: "round" }),
          /* @__PURE__ */ e("path", { d: "M54 70v28c0 2 0 4 1 5l6 3", stroke: t, strokeWidth: 1.5, strokeLinecap: "round" }),
          /* @__PURE__ */ e("path", { d: "M66 70v28c0 2 0 4-1 5l-6 3", stroke: t, strokeWidth: 1.5, strokeLinecap: "round" }),
          /* @__PURE__ */ e("path", { d: "M61 106h-10c-2 0-3 1.5-3 3h16c0-1.5-1-3-3-3Z", stroke: t, strokeWidth: 1.2 }),
          /* @__PURE__ */ e("path", { d: "M59 106h10c2 0 3 1.5 3 3H56c0-1.5 1-3 3-3Z", stroke: t, strokeWidth: 1.2 }),
          /* @__PURE__ */ e("path", { d: "M160 50c3-2 6-1 7 1", stroke: n, strokeWidth: 1, strokeLinecap: "round" }),
          /* @__PURE__ */ e("path", { d: "M162 44c4-3 8-1 10 1", stroke: n, strokeWidth: 1, strokeLinecap: "round", opacity: 0.6 }),
          /* @__PURE__ */ e("path", { d: "M164 38c5-3 10-1 12 1", stroke: n, strokeWidth: 1, strokeLinecap: "round", opacity: 0.3 }),
          /* @__PURE__ */ e("line", { x1: 15, y1: 118, x2: 185, y2: 118, stroke: t, strokeWidth: 1, opacity: 0.3 })
        ]
      }
    );
  }
);
fi.displayName = "DigitalBanking";
const bi = L(
  ({ size: r = 200, colour: t = "#000000", accentColour: n = "#E60000", className: o, ...s }, l) => {
    const a = typeof r == "number" ? r : 200, i = Math.round(a * 0.75);
    return /* @__PURE__ */ d(
      "svg",
      {
        ref: l,
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 200 150",
        width: a,
        height: i,
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
          /* @__PURE__ */ e("path", { d: "M126 52c-4-2-5-6-3-8s6-1 7 2", stroke: n, strokeWidth: 1.2, strokeLinecap: "round" }),
          /* @__PURE__ */ e("path", { d: "M154 52c4-2 5-6 3-8s-6-1-7 2", stroke: n, strokeWidth: 1.2, strokeLinecap: "round" }),
          /* @__PURE__ */ e("path", { d: "M140 28c-2-4-1-8 2-9s6 2 5 5", stroke: n, strokeWidth: 1.2, strokeLinecap: "round" }),
          /* @__PURE__ */ e("path", { d: "M140 125c-6 2-14 2-18 0", stroke: t, strokeWidth: 1.2, strokeLinecap: "round" }),
          /* @__PURE__ */ e("path", { d: "M140 125c6 2 14 2 18 0", stroke: t, strokeWidth: 1.2, strokeLinecap: "round" }),
          /* @__PURE__ */ e("path", { d: "M140 125c-3 4-8 5-12 4", stroke: t, strokeWidth: 1, strokeLinecap: "round" }),
          /* @__PURE__ */ e("path", { d: "M140 125c3 4 8 5 12 4", stroke: t, strokeWidth: 1, strokeLinecap: "round" }),
          /* @__PURE__ */ e("rect", { x: 160, y: 80, width: 28, height: 20, rx: 2, stroke: t, strokeWidth: 1 }),
          /* @__PURE__ */ e("polyline", { points: "164 96 170 90 176 93 184 84", stroke: n, strokeWidth: 1.2, strokeLinecap: "round", strokeLinejoin: "round" }),
          /* @__PURE__ */ e("polyline", { points: "180 84 184 84 184 88", stroke: n, strokeWidth: 1, strokeLinecap: "round", strokeLinejoin: "round" }),
          /* @__PURE__ */ e("circle", { cx: 55, cy: 48, r: 8, stroke: t, strokeWidth: 1.8 }),
          /* @__PURE__ */ e("path", { d: "M48 44c0.5-4 3-7 7.5-7s6.5 3 7 6", stroke: t, strokeWidth: 1.5, strokeLinecap: "round" }),
          /* @__PURE__ */ e("circle", { cx: 53, cy: 47, r: 1, fill: t }),
          /* @__PURE__ */ e("circle", { cx: 58, cy: 47, r: 1, fill: t }),
          /* @__PURE__ */ e("path", { d: "M53 51c0.8 1 3 1 4 0", stroke: t, strokeWidth: 0.8, strokeLinecap: "round" }),
          /* @__PURE__ */ e("line", { x1: 55, y1: 56, x2: 55, y2: 60, stroke: t, strokeWidth: 1.5 }),
          /* @__PURE__ */ e("path", { d: "M45 60h20v16H45V60Z", stroke: t, strokeWidth: 1.5, strokeLinejoin: "round" }),
          /* @__PURE__ */ e("line", { x1: 55, y1: 60, x2: 55, y2: 76, stroke: n, strokeWidth: 1.2 }),
          /* @__PURE__ */ e("path", { d: "M65 64c6 0 14-2 20-6", stroke: t, strokeWidth: 1.5, strokeLinecap: "round" }),
          /* @__PURE__ */ e("path", { d: "M82 56h12v8H82V56Z", stroke: t, strokeWidth: 1.2, strokeLinejoin: "round" }),
          /* @__PURE__ */ e("path", { d: "M94 58l8-4", stroke: t, strokeWidth: 1.2, strokeLinecap: "round" }),
          /* @__PURE__ */ e("path", { d: "M82 60h-3l-1 4h4", stroke: t, strokeWidth: 1, strokeLinejoin: "round" }),
          /* @__PURE__ */ e("circle", { cx: 104, cy: 58, r: 1, fill: n }),
          /* @__PURE__ */ e("circle", { cx: 106, cy: 62, r: 0.8, fill: n }),
          /* @__PURE__ */ e("circle", { cx: 108, cy: 66, r: 0.6, fill: n }),
          /* @__PURE__ */ e("circle", { cx: 103, cy: 64, r: 0.7, fill: n }),
          /* @__PURE__ */ e("path", { d: "M45 64c-4 2-7 8-6 14", stroke: t, strokeWidth: 1.5, strokeLinecap: "round" }),
          /* @__PURE__ */ e("path", { d: "M49 76v28c0 2 0 4 1 5l6 3", stroke: t, strokeWidth: 1.5, strokeLinecap: "round" }),
          /* @__PURE__ */ e("path", { d: "M61 76v28c0 2 0 4-1 5l-6 3", stroke: t, strokeWidth: 1.5, strokeLinecap: "round" }),
          /* @__PURE__ */ e("path", { d: "M56 112h-10c-2 0-3 1.5-3 3h16c0-1.5-1-3-3-3Z", stroke: t, strokeWidth: 1.2 }),
          /* @__PURE__ */ e("path", { d: "M54 112h10c2 0 3 1.5 3 3H51c0-1.5 1-3 3-3Z", stroke: t, strokeWidth: 1.2 }),
          /* @__PURE__ */ e("line", { x1: 30, y1: 125, x2: 30, y2: 118, stroke: t, strokeWidth: 1, strokeLinecap: "round" }),
          /* @__PURE__ */ e("path", { d: "M30 118c-3-1-4-4-2-5s4 0 4 2", stroke: n, strokeWidth: 1, strokeLinecap: "round" }),
          /* @__PURE__ */ e("path", { d: "M30 120c2-2 4-3 5-2s0 3-2 4", stroke: t, strokeWidth: 1, strokeLinecap: "round" }),
          /* @__PURE__ */ e("path", { d: "M10 125c20 2 40-1 60 1s40-2 60 0 40 1 60-1", stroke: "#B8B3A2", strokeWidth: 1.5, strokeLinecap: "round" }),
          /* @__PURE__ */ e("line", { x1: 10, y1: 135, x2: 190, y2: 135, stroke: t, strokeWidth: 1, opacity: 0.3 })
        ]
      }
    );
  }
);
bi.displayName = "SustainableGrowth";
const xi = L(
  ({ size: r = 200, colour: t = "#000000", accentColour: n = "#E60000", className: o, ...s }, l) => {
    const a = typeof r == "number" ? r : 200, i = Math.round(a * 0.75);
    return /* @__PURE__ */ d(
      "svg",
      {
        ref: l,
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 200 150",
        width: a,
        height: i,
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
          /* @__PURE__ */ e("path", { d: "M46.5 38c0-5 3.8-9 8.5-9s8.5 4 8.5 9", stroke: n, strokeWidth: 2, strokeLinecap: "round" }),
          /* @__PURE__ */ e("rect", { x: 43, y: 37, width: 4, height: 7, rx: 2, fill: n, stroke: t, strokeWidth: 0.8 }),
          /* @__PURE__ */ e("rect", { x: 63, y: 37, width: 4, height: 7, rx: 2, stroke: t, strokeWidth: 0.8 }),
          /* @__PURE__ */ e("path", { d: "M43 44c-2 0-4 2-4 4v2c0 1 1 2 2 2h2", stroke: t, strokeWidth: 1, strokeLinecap: "round" }),
          /* @__PURE__ */ e("circle", { cx: 43, cy: 52, r: 2, fill: n, stroke: t, strokeWidth: 0.8 }),
          /* @__PURE__ */ e("line", { x1: 55, y1: 50, x2: 55, y2: 54, stroke: t, strokeWidth: 1.5 }),
          /* @__PURE__ */ e("path", { d: "M45 54h20v16H45V54Z", stroke: t, strokeWidth: 1.5, strokeLinejoin: "round" }),
          /* @__PURE__ */ e("line", { x1: 55, y1: 54, x2: 55, y2: 70, stroke: n, strokeWidth: 1.2 }),
          /* @__PURE__ */ e("rect", { x: 48, y: 56, width: 5, height: 4, rx: 1, stroke: t, strokeWidth: 0.8 }),
          /* @__PURE__ */ e("circle", { cx: 50.5, cy: 57.5, r: 0.8, fill: n }),
          /* @__PURE__ */ e("path", { d: "M45 58c-5 2-10 8-8 16", stroke: t, strokeWidth: 1.5, strokeLinecap: "round" }),
          /* @__PURE__ */ e("path", { d: "M65 58c4 2 8 8 6 16", stroke: t, strokeWidth: 1.5, strokeLinecap: "round" }),
          /* @__PURE__ */ e("rect", { x: 30, y: 76, width: 50, height: 3, rx: 1, fill: "#CCCABC", stroke: t, strokeWidth: 1 }),
          /* @__PURE__ */ e("rect", { x: 40, y: 60, width: 30, height: 16, rx: 2, stroke: t, strokeWidth: 1.2 }),
          /* @__PURE__ */ e("line", { x1: 55, y1: 76, x2: 55, y2: 79, stroke: t, strokeWidth: 1 }),
          /* @__PURE__ */ e("line", { x1: 50, y1: 79, x2: 60, y2: 79, stroke: t, strokeWidth: 1, strokeLinecap: "round" }),
          /* @__PURE__ */ e("line", { x1: 44, y1: 66, x2: 56, y2: 66, stroke: t, strokeWidth: 0.6, strokeLinecap: "round", opacity: 0.4 }),
          /* @__PURE__ */ e("line", { x1: 44, y1: 69, x2: 52, y2: 69, stroke: n, strokeWidth: 0.6, strokeLinecap: "round" }),
          /* @__PURE__ */ e("line", { x1: 44, y1: 72, x2: 54, y2: 72, stroke: t, strokeWidth: 0.6, strokeLinecap: "round", opacity: 0.4 }),
          /* @__PURE__ */ e("path", { d: "M49 70v24c0 2 0 3 1 4l5 3", stroke: t, strokeWidth: 1.5, strokeLinecap: "round" }),
          /* @__PURE__ */ e("path", { d: "M61 70v24c0 2 0 3-1 4l-5 3", stroke: t, strokeWidth: 1.5, strokeLinecap: "round" }),
          /* @__PURE__ */ e("path", { d: "M55 101h-8c-2 0-3 1.5-3 3h14c0-1.5-1-3-3-3Z", stroke: t, strokeWidth: 1.2 }),
          /* @__PURE__ */ e("path", { d: "M55 101h8c2 0 3 1.5 3 3H52c0-1.5 1-3 3-3Z", stroke: t, strokeWidth: 1.2 }),
          /* @__PURE__ */ e("path", { d: "M85 35h50c3 0 5 2 5 5v20c0 3-2 5-5 5h-35l-6 8v-8h-9c-3 0-5-2-5-5V40c0-3 2-5 5-5Z", stroke: t, strokeWidth: 1.2 }),
          /* @__PURE__ */ e("line", { x1: 92, y1: 44, x2: 128, y2: 44, stroke: t, strokeWidth: 0.8, strokeLinecap: "round", opacity: 0.4 }),
          /* @__PURE__ */ e("line", { x1: 92, y1: 49, x2: 122, y2: 49, stroke: n, strokeWidth: 0.8, strokeLinecap: "round" }),
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
          /* @__PURE__ */ e("circle", { cx: 180, cy: 78, r: 1.5, fill: n }),
          /* @__PURE__ */ e("circle", { cx: 184, cy: 82, r: 1, fill: n }),
          /* @__PURE__ */ e("circle", { cx: 178, cy: 84, r: 1, fill: n }),
          /* @__PURE__ */ e("line", { x1: 15, y1: 128, x2: 185, y2: 128, stroke: t, strokeWidth: 1, opacity: 0.3 })
        ]
      }
    );
  }
);
xi.displayName = "CustomerSupport";
const vi = {
  // Navigation
  "chevron-down": ts,
  "chevron-up": rs,
  "chevron-left": ns,
  "chevron-right": os,
  "arrow-left": ss,
  "arrow-right": is,
  "arrow-up": as,
  "arrow-down": ls,
  menu: cs,
  close: ds,
  "more-horizontal": hs,
  "more-vertical": ps,
  // Actions
  search: ms,
  filter: ks,
  sort: us,
  download: _s,
  upload: ys,
  share: gs,
  copy: fs,
  edit: bs,
  trash: xs,
  plus: vs,
  minus: Ls,
  check: ws,
  "check-circle": Ws,
  "x-circle": Ns,
  // Content
  home: As,
  user: Is,
  users: Ss,
  settings: Bs,
  bell: Ms,
  mail: Cs,
  calendar: $s,
  clock: Ts,
  document: Es,
  folder: js,
  image: Rs,
  chart: Fs,
  "donut-chart": Os,
  globe: Ps,
  // Feedback
  info: Ds,
  warning: qs,
  error: zs,
  success: Gs,
  help: Us,
  // Illustrative — Finance
  wallet: Hs,
  "credit-card": Vs,
  "bank-note": Zs,
  coins: Ys,
  "piggy-bank": Ks,
  "safe-box": Xs,
  growth: Qs,
  portfolio: Js,
  // Illustrative — Business
  briefcase: ei,
  handshake: ti,
  target: ri,
  award: ni,
  lightbulb: oi,
  presentation: si,
  contract: ii,
  building: ai,
  // Illustrative — Digital
  shield: li,
  lock: ci,
  key: di,
  fingerprint: hi
}, Li = {
  sm: 12,
  md: 16,
  lg: 24
}, wi = L(
  ({
    name: r,
    size: t = "md",
    colour: n,
    accentColour: o,
    variant: s = "webApp",
    children: l,
    className: a,
    style: i,
    "aria-label": c,
    ...p
  }, m) => {
    const h = s === "webApp" ? "#000000" : n ?? "#000000", k = s === "illustrative" ? o ?? "#E60000" : void 0, u = [
      _t.icon,
      _t[t],
      _t[s],
      a
    ].filter(Boolean).join(" "), y = {
      ...h && s === "illustrative" ? { color: h } : {},
      ...i
    }, _ = Li[t], g = c || r, v = r ? vi[r] : void 0, b = v ? Fr(v, {
      size: _,
      colour: h,
      ...k ? { accentColour: k } : {}
    }) : l;
    return /* @__PURE__ */ e(
      "span",
      {
        ref: m,
        className: u,
        style: y,
        role: g ? "img" : "presentation",
        "aria-label": g,
        "aria-hidden": !g,
        "data-icon-name": r,
        "data-icon-size": _,
        ...p,
        children: b
      }
    );
  }
);
wi.displayName = "Icon";
const Wi = "_container_tme44_4", Ni = "_frame_tme44_11", Ai = "_transparent_tme44_26", Ii = "_opaque_tme44_30", Si = "_background_tme44_36", Bi = "_content_tme44_53", Mi = "_animated_tme44_60", Ci = "_movingFrameSlideIn_tme44_1", $i = "_contentAnimated_tme44_77", Ti = "_movingFrameContentFadeIn_tme44_1", Me = {
  container: Wi,
  frame: Ni,
  transparent: Ai,
  opaque: Ii,
  background: Si,
  content: Bi,
  animated: Mi,
  movingFrameSlideIn: Ci,
  contentAnimated: $i,
  movingFrameContentFadeIn: Ti
}, sr = L(
  ({
    variant: r = "transparent",
    maxWidth: t = "50%",
    backgroundSrc: n,
    backgroundAlt: o = "",
    backgroundElement: s,
    aspectRatio: l = "16 / 9",
    animated: a = !1,
    children: i,
    className: c,
    style: p,
    ...m
  }, h) => {
    const k = {
      aspectRatio: l,
      ...p
    }, u = {
      maxWidth: t
    }, y = [Me.container, c].filter(Boolean).join(" "), _ = [
      Me.frame,
      Me[r],
      a ? Me.animated : ""
    ].filter(Boolean).join(" "), g = [
      Me.content,
      a ? Me.contentAnimated : ""
    ].filter(Boolean).join(" ");
    return /* @__PURE__ */ d("div", { ref: h, className: y, style: k, ...m, children: [
      /* @__PURE__ */ e("div", { className: Me.background, "aria-hidden": "true", children: s || (n ? /* @__PURE__ */ e("img", { src: n, alt: o, loading: "lazy" }) : null) }),
      /* @__PURE__ */ e("div", { className: _, style: u, children: /* @__PURE__ */ e("div", { className: g, children: i }) })
    ] });
  }
);
sr.displayName = "MovingFrame";
const Ei = "_pattern_1nt01_4", ji = "_patternSvg_1nt01_10", Ri = "_content_1nt01_17", Fi = "_animated_1nt01_36", nt = {
  pattern: Ei,
  patternSvg: ji,
  content: Ri,
  animated: Fi
}, Oi = {
  gray: { bg: "#404040", fg: "#5A5D5C" },
  // Gray VI bg, Gray V fg
  bordeaux: { bg: "#620004", fg: "#8A000A" },
  // Bordeaux III bg, Bordeaux II fg
  bronze: { bg: "#6C5312", fg: "#946F29" }
  // Bronze III bg, Bronze II fg
}, Pi = "M20 5L25 10L20 15L15 10ZM10 15L15 20L10 25L5 20ZM30 15L35 20L30 25L25 20ZM20 25L25 30L20 35L15 30ZM12 8L17 13L12 18L7 13ZM28 8L33 13L28 18L23 13Z", Di = L(
  ({
    variant: r = "solid",
    colourDirection: t = "gray",
    animated: n = !1,
    ratio: o = "16 / 9",
    children: s,
    className: l,
    style: a,
    ...i
  }, c) => {
    const p = oe(), m = Oi[t], h = [
      nt.pattern,
      n ? nt.animated : void 0,
      l
    ].filter(Boolean).join(" "), k = {
      backgroundColor: m.bg,
      aspectRatio: o,
      ...a
    }, u = r === "solid" ? { fill: m.fg, stroke: "none" } : { fill: "none", stroke: m.fg, strokeWidth: 1 };
    return /* @__PURE__ */ d("div", { ref: c, className: h, style: k, ...i, children: [
      /* @__PURE__ */ d(
        "svg",
        {
          className: nt.patternSvg,
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
                children: /* @__PURE__ */ e("path", { d: Pi, ...u, opacity: 0.3 })
              }
            ) }),
            /* @__PURE__ */ e("rect", { width: "100%", height: "100%", fill: `url(#${p})` })
          ]
        }
      ),
      s && /* @__PURE__ */ e("div", { className: nt.content, children: s })
    ] });
  }
);
Di.displayName = "Pattern";
const qi = "_template_1t9ym_3", zi = "_square_1t9ym_13", Gi = "_portrait_1t9ym_17", Ui = "_vertical_1t9ym_21", Hi = "_wide_1t9ym_25", Vi = "_content_1t9ym_31", Zi = "_logoTab_1t9ym_42", Yi = "_logoRight_1t9ym_52", Ki = "_logoLeft_1t9ym_58", Xi = "_logoText_1t9ym_65", Qi = "_safeZone_1t9ym_75", be = {
  template: qi,
  square: zi,
  portrait: Gi,
  vertical: Ui,
  wide: Hi,
  content: Vi,
  logoTab: Zi,
  logoRight: Yi,
  logoLeft: Ki,
  logoText: Xi,
  safeZone: Qi
}, Ji = {
  instagram: ["square", "portrait", "vertical"],
  facebook: ["square", "wide"],
  youtube: ["wide"],
  x: ["square", "wide"],
  linkedin: ["square", "wide"]
};
function ea(r, t) {
  const n = Ji[r];
  return n.includes(t) ? t : (typeof console < "u" && console.warn(
    `[UBS SocialMediaTemplate] Format "${t}" is not valid for platform "${r}". Valid formats: ${n.join(", ")}. Falling back to "${n[0]}".`
  ), n[0]);
}
const ta = L(
  ({
    platform: r,
    format: t = "square",
    variant: n = "static",
    children: o,
    className: s,
    ...l
  }, a) => {
    const i = ea(r, t), p = n === "static" ? be.logoRight : be.logoLeft, m = [
      be.template,
      be[i],
      s
    ].filter(Boolean).join(" ");
    return /* @__PURE__ */ d(
      "div",
      {
        ref: a,
        className: m,
        "data-platform": r,
        "data-format": i,
        "data-variant": n,
        ...l,
        children: [
          /* @__PURE__ */ e("div", { className: `${be.logoTab} ${p}`, children: /* @__PURE__ */ e("span", { className: be.logoText, children: "UBS" }) }),
          /* @__PURE__ */ e("div", { className: be.content, children: /* @__PURE__ */ e("div", { className: be.safeZone, children: o }) })
        ]
      }
    );
  }
);
ta.displayName = "SocialMediaTemplate";
const ra = "_container_1jqmp_5", na = "_chart_1jqmp_13", oa = "_donutWrapper_1jqmp_20", sa = "_donutSvg_1jqmp_27", ia = "_donutCenter_1jqmp_33", aa = "_barWrapper_1jqmp_44", la = "_barGroup_1jqmp_51", ca = "_bar_1jqmp_44", da = "_barLabel_1jqmp_63", ha = "_barDimmed_1jqmp_74", pa = "_lineWrapper_1jqmp_80", ma = "_lineSvg_1jqmp_85", ka = "_insight_1jqmp_92", ua = "_insightArrow_1jqmp_101", _a = "_insightText_1jqmp_114", ya = "_legend_1jqmp_122", ga = "_legendItem_1jqmp_129", fa = "_legendSwatch_1jqmp_137", ba = "_axisLabel_1jqmp_146", xa = "_gridLine_1jqmp_153", P = {
  container: ra,
  chart: na,
  donutWrapper: oa,
  donutSvg: sa,
  donutCenter: ia,
  barWrapper: aa,
  barGroup: la,
  bar: ca,
  barLabel: da,
  barDimmed: ha,
  lineWrapper: pa,
  lineSvg: ma,
  insight: ka,
  insightArrow: ua,
  insightText: _a,
  legend: ya,
  legendItem: ga,
  legendSwatch: fa,
  axisLabel: ba,
  gridLine: xa
}, gt = [
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
], Ut = ["#8E8D83", "#7A7870", "#5A5D5C", "#404040", "#000000"], va = "#2E476B";
function La(r, t, n) {
  const o = n.map((s) => s.colour);
  switch (r) {
    case "monochrome":
      return Array.from({ length: t }, (s, l) => {
        if (o[l]) return o[l];
        const a = 1 - l * 0.15;
        return wa(va, Math.max(0.2, a));
      });
    case "polychrome":
      return Array.from({ length: t }, (s, l) => o[l] ? o[l] : Ut[l % Ut.length]);
    case "multichrome":
    case "complex":
      return Array.from({ length: t }, (s, l) => o[l] ? o[l] : gt[l % gt.length]);
    default:
      return gt.slice(0, t);
  }
}
function wa(r, t) {
  const n = parseInt(r.slice(1, 3), 16), o = parseInt(r.slice(3, 5), 16), s = parseInt(r.slice(5, 7), 16), l = (a) => Math.round(a * t + 255 * (1 - t));
  return `#${l(n).toString(16).padStart(2, "0")}${l(o).toString(16).padStart(2, "0")}${l(s).toString(16).padStart(2, "0")}`;
}
function Wa({ data: r, colours: t, highlightIndex: n, width: o, height: s, centerContent: l }) {
  const a = r.reduce((_, g) => _ + g.value, 0);
  if (a === 0) return null;
  const i = Math.min(o, s), c = i / 2, p = i / 2, m = i * 0.45, h = i * 0.28, k = r.length > 1 ? 0.03 : 0;
  let u = 0;
  const y = r.map((_, g) => {
    const v = _.value / a, b = v * Math.PI * 2 - k;
    if (b <= 0)
      return u += v * Math.PI * 2, null;
    const x = u + k / 2, N = x + b, B = c + m * Math.cos(x), A = p + m * Math.sin(x), f = c + m * Math.cos(N), M = p + m * Math.sin(N), I = c + h * Math.cos(N), R = p + h * Math.sin(N), Se = c + h * Math.cos(x), Be = p + h * Math.sin(x), j = b > Math.PI ? 1 : 0, Q = [
      `M ${B} ${A}`,
      `A ${m} ${m} 0 ${j} 1 ${f} ${M}`,
      `L ${I} ${R}`,
      `A ${h} ${h} 0 ${j} 0 ${Se} ${Be}`,
      "Z"
    ].join(" ");
    u += v * Math.PI * 2;
    const Te = n === g, mt = n != null && n !== g;
    return /* @__PURE__ */ e(
      "path",
      {
        d: Q,
        fill: t[g],
        opacity: mt ? 0.4 : 1,
        stroke: Te ? "#000000" : "none",
        strokeWidth: Te ? 2 : 0,
        children: /* @__PURE__ */ e("title", { children: `${_.label}: ${_.value}` })
      },
      g
    );
  });
  return /* @__PURE__ */ d("div", { className: P.donutWrapper, style: { width: i, height: i }, children: [
    /* @__PURE__ */ e(
      "svg",
      {
        className: P.donutSvg,
        viewBox: `0 0 ${i} ${i}`,
        role: "img",
        "aria-label": "Donut chart",
        children: y
      }
    ),
    l && /* @__PURE__ */ e("div", { className: P.donutCenter, children: l })
  ] });
}
function Na({ data: r, colours: t, highlightIndex: n, width: o, height: s }) {
  const l = Math.max(...r.map((m) => m.value), 1), a = r.length, c = (a - 1) * 2, p = Math.max(1, (o - c) / a);
  return /* @__PURE__ */ e("div", { className: P.barWrapper, style: { width: o, height: s }, children: r.map((m, h) => {
    const k = m.value / l * s * 0.85, u = n != null && n !== h;
    return /* @__PURE__ */ d("div", { className: P.barGroup, style: { width: p }, children: [
      /* @__PURE__ */ e(
        "div",
        {
          className: `${P.bar} ${u ? P.barDimmed : ""}`,
          style: {
            height: k,
            backgroundColor: t[h],
            width: "100%"
          },
          role: "img",
          "aria-label": `${m.label}: ${m.value}`
        }
      ),
      /* @__PURE__ */ e("span", { className: P.barLabel, children: m.label })
    ] }, h);
  }) });
}
function Aa({ data: r, colours: t, highlightIndex: n, width: o, height: s }) {
  if (r.length === 0) return null;
  const l = Math.max(...r.map((u) => u.value), 1), a = Math.min(...r.map((u) => u.value), 0), i = l - a || 1, c = { top: 10, right: 10, bottom: 30, left: 10 }, p = o - c.left - c.right, m = s - c.top - c.bottom, h = r.map((u, y) => {
    const _ = c.left + y / Math.max(r.length - 1, 1) * p, g = c.top + m - (u.value - a) / i * m;
    return { x: _, y: g, ...u };
  }), k = h.map((u, y) => `${y === 0 ? "M" : "L"} ${u.x} ${u.y}`).join(" ");
  return /* @__PURE__ */ e("div", { className: P.lineWrapper, style: { width: o, height: s }, children: /* @__PURE__ */ d(
    "svg",
    {
      className: P.lineSvg,
      viewBox: `0 0 ${o} ${s}`,
      role: "img",
      "aria-label": "Line chart",
      children: [
        [0, 0.25, 0.5, 0.75, 1].map((u) => {
          const y = c.top + m * (1 - u);
          return /* @__PURE__ */ e(
            "line",
            {
              x1: c.left,
              y1: y,
              x2: o - c.right,
              y2: y,
              className: P.gridLine
            },
            u
          );
        }),
        /* @__PURE__ */ e(
          "path",
          {
            d: k,
            fill: "none",
            stroke: t[0],
            strokeWidth: 2,
            strokeLinejoin: "round",
            strokeLinecap: "round"
          }
        ),
        h.map((u, y) => {
          const _ = n === y, g = n != null && n !== y;
          return /* @__PURE__ */ e(
            "circle",
            {
              cx: u.x,
              cy: u.y,
              r: _ ? 5 : 3,
              fill: t[y % t.length],
              opacity: g ? 0.4 : 1,
              stroke: _ ? "#000000" : "#FFFFFF",
              strokeWidth: _ ? 2 : 1,
              children: /* @__PURE__ */ e("title", { children: `${u.label}: ${u.value}` })
            },
            y
          );
        }),
        h.map((u, y) => /* @__PURE__ */ e(
          "text",
          {
            x: u.x,
            y: s - 5,
            textAnchor: "middle",
            className: P.axisLabel,
            fontSize: 11,
            children: u.label
          },
          y
        ))
      ]
    }
  ) });
}
function Ia({ text: r }) {
  return /* @__PURE__ */ d("div", { className: P.insight, children: [
    /* @__PURE__ */ e("span", { className: P.insightArrow, children: /* @__PURE__ */ e("svg", { viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg", "aria-hidden": "true", children: /* @__PURE__ */ e("path", { d: "M8 2L14 8L8 14M14 8H2", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }) }) }),
    /* @__PURE__ */ e("span", { className: P.insightText, children: r })
  ] });
}
function Sa({ data: r, colours: t }) {
  return /* @__PURE__ */ e("div", { className: P.legend, children: r.map((n, o) => /* @__PURE__ */ d("div", { className: P.legendItem, children: [
    /* @__PURE__ */ e(
      "span",
      {
        className: P.legendSwatch,
        style: { backgroundColor: t[o] }
      }
    ),
    /* @__PURE__ */ e("span", { children: n.label })
  ] }, o)) });
}
const ir = L(
  ({
    type: r = "donut",
    data: t,
    highlightIndex: n,
    colourSequence: o = "multichrome",
    region: s = "emea",
    insight: l,
    width: a,
    height: i,
    showLegend: c = !0,
    centerContent: p,
    className: m,
    ...h
  }, k) => {
    const u = a ?? 300, y = i ?? (r === "donut" ? 300 : 200), _ = La(o, t.length, t), g = [P.container, m].filter(Boolean).join(" "), v = {
      data: t,
      colours: _,
      highlightIndex: n,
      width: u,
      height: y,
      centerContent: p
    };
    return /* @__PURE__ */ d("div", { ref: k, className: g, "data-chart-type": r, "data-region": s, ...h, children: [
      /* @__PURE__ */ d("div", { className: P.chart, children: [
        r === "donut" && /* @__PURE__ */ e(Wa, { ...v }),
        r === "bar" && /* @__PURE__ */ e(Na, { ...v }),
        r === "line" && /* @__PURE__ */ e(Aa, { ...v })
      ] }),
      c && /* @__PURE__ */ e(Sa, { data: t, colours: _ }),
      l && /* @__PURE__ */ e(Ia, { text: l })
    ] });
  }
);
ir.displayName = "DataViz";
const Ba = "_wrapper_6nyj5_3", Ma = "_table_6nyj5_11", Ca = "_thead_6nyj5_22", $a = "_th_6nyj5_22", Ta = "_alignCenter_6nyj5_38", Ea = "_alignRight_6nyj5_42", ja = "_sortableHeader_6nyj5_47", Ra = "_headerContent_6nyj5_61", Fa = "_sortIndicator_6nyj5_67", Oa = "_sortArrow_6nyj5_78", Pa = "_sortArrowActive_6nyj5_84", Da = "_td_6nyj5_89", qa = "_checkboxCell_6nyj5_107", za = "_checkbox_6nyj5_107", Ga = "_row_6nyj5_126", Ua = "_rowSelected_6nyj5_130", Ha = "_striped_6nyj5_135", Va = "_tbody_6nyj5_135", Za = "_bordered_6nyj5_143", Ya = "_compact_6nyj5_148", Ka = "_hoverable_6nyj5_156", Xa = "_stickyHeader_6nyj5_165", Qa = "_skeletonRow_6nyj5_178", Ja = "_skeletonCell_6nyj5_182", el = "_emptyRow_6nyj5_200", S = {
  wrapper: Ba,
  table: Ma,
  thead: Ca,
  th: $a,
  alignCenter: Ta,
  alignRight: Ea,
  sortableHeader: ja,
  headerContent: Ra,
  sortIndicator: Fa,
  sortArrow: Oa,
  sortArrowActive: Pa,
  td: Da,
  checkboxCell: qa,
  checkbox: za,
  row: Ga,
  rowSelected: Ua,
  striped: Ha,
  tbody: Va,
  bordered: Za,
  compact: Ya,
  hoverable: Ka,
  stickyHeader: Xa,
  skeletonRow: Qa,
  skeletonCell: Ja,
  emptyRow: el
}, ar = L(
  ({
    columns: r,
    data: t,
    sortBy: n,
    sortDirection: o,
    onSort: s,
    selectable: l = !1,
    selectedRows: a,
    onSelectionChange: i,
    striped: c = !1,
    bordered: p = !1,
    compact: m = !1,
    hoverable: h = !1,
    stickyHeader: k = !1,
    emptyMessage: u = "No data available",
    loading: y = !1,
    skeletonRows: _ = 5,
    className: g,
    ...v
  }, b) => {
    const x = a ?? /* @__PURE__ */ new Set(), N = ce(
      () => t.length > 0 && x.size === t.length,
      [t.length, x.size]
    ), B = ce(
      () => x.size > 0 && x.size < t.length,
      [t.length, x.size]
    ), A = C(
      ($) => {
        i && ($.target.checked ? i(new Set(t.map((F, se) => se))) : i(/* @__PURE__ */ new Set()));
      },
      [t, i]
    ), f = C(
      ($) => {
        if (!i) return;
        const F = new Set(x);
        F.has($) ? F.delete($) : F.add($), i(F);
      },
      [x, i]
    ), M = C(
      ($) => {
        if (!s) return;
        s($, n === $ && o === "asc" ? "desc" : "asc");
      },
      [s, n, o]
    ), I = ($) => n !== $.key ? "none" : o === "asc" ? "ascending" : "descending", R = [
      S.wrapper,
      g
    ].filter(Boolean).join(" "), Se = [
      S.table,
      c ? S.striped : void 0,
      p ? S.bordered : void 0,
      m ? S.compact : void 0,
      h ? S.hoverable : void 0,
      k ? S.stickyHeader : void 0
    ].filter(Boolean).join(" "), Be = r.length + (l ? 1 : 0), j = ($) => {
      const F = n === $.key;
      return /* @__PURE__ */ d("span", { className: S.sortIndicator, "aria-hidden": "true", children: [
        /* @__PURE__ */ e(
          "span",
          {
            className: `${S.sortArrow} ${F && o === "asc" ? S.sortArrowActive : ""}`,
            children: "▲"
          }
        ),
        /* @__PURE__ */ e(
          "span",
          {
            className: `${S.sortArrow} ${F && o === "desc" ? S.sortArrowActive : ""}`,
            children: "▼"
          }
        )
      ] });
    }, Q = () => /* @__PURE__ */ e("thead", { className: S.thead, children: /* @__PURE__ */ d("tr", { children: [
      l && /* @__PURE__ */ e("th", { className: `${S.th} ${S.checkboxCell}`, scope: "col", children: /* @__PURE__ */ e(
        "input",
        {
          type: "checkbox",
          className: S.checkbox,
          checked: N,
          ref: ($) => {
            $ && ($.indeterminate = B);
          },
          onChange: A,
          "aria-label": "Select all rows"
        }
      ) }),
      r.map(($) => {
        const F = $.align === "center" ? S.alignCenter : $.align === "right" ? S.alignRight : "";
        return $.sortable ? /* @__PURE__ */ e(
          "th",
          {
            scope: "col",
            className: `${S.th} ${S.sortableHeader} ${F}`,
            style: $.width ? { width: $.width } : void 0,
            "aria-sort": I($),
            tabIndex: 0,
            role: "columnheader",
            onClick: () => M($.key),
            onKeyDown: (se) => {
              (se.key === "Enter" || se.key === " ") && (se.preventDefault(), M($.key));
            },
            children: /* @__PURE__ */ d("span", { className: S.headerContent, children: [
              $.header,
              j($)
            ] })
          },
          $.key
        ) : /* @__PURE__ */ e(
          "th",
          {
            scope: "col",
            className: `${S.th} ${F}`,
            style: $.width ? { width: $.width } : void 0,
            children: $.header
          },
          $.key
        );
      })
    ] }) }), Te = () => /* @__PURE__ */ e("tbody", { className: S.tbody, children: Array.from({ length: _ }, ($, F) => /* @__PURE__ */ d("tr", { className: `${S.row} ${S.skeletonRow}`, children: [
      l && /* @__PURE__ */ e("td", { className: `${S.td} ${S.checkboxCell}`, children: /* @__PURE__ */ e("div", { className: S.skeletonCell, style: { width: 16, height: 16 } }) }),
      r.map((se) => /* @__PURE__ */ e("td", { className: S.td, children: /* @__PURE__ */ e(
        "div",
        {
          className: S.skeletonCell,
          style: { width: `${60 + Math.random() * 30}%` }
        }
      ) }, se.key))
    ] }, `skeleton-${F}`)) }), mt = () => /* @__PURE__ */ e("tbody", { className: S.tbody, children: /* @__PURE__ */ e("tr", { className: S.emptyRow, children: /* @__PURE__ */ e("td", { className: S.td, colSpan: Be, children: u }) }) }), Er = () => /* @__PURE__ */ e("tbody", { className: S.tbody, children: t.map(($, F) => {
      const se = x.has(F), jr = [S.row, se ? S.rowSelected : void 0].filter(Boolean).join(" ");
      return /* @__PURE__ */ d("tr", { className: jr, children: [
        l && /* @__PURE__ */ e("td", { className: `${S.td} ${S.checkboxCell}`, children: /* @__PURE__ */ e(
          "input",
          {
            type: "checkbox",
            className: S.checkbox,
            checked: se,
            onChange: () => f(F),
            "aria-label": `Select row ${F + 1}`
          }
        ) }),
        r.map((ge) => {
          const Ft = $[ge.key], Rr = ge.align === "center" ? S.alignCenter : ge.align === "right" ? S.alignRight : "";
          return /* @__PURE__ */ e(
            "td",
            {
              className: `${S.td} ${Rr}`,
              style: ge.width ? { width: ge.width } : void 0,
              children: ge.render ? ge.render(Ft, $, F) : String(Ft ?? "")
            },
            ge.key
          );
        })
      ] }, F);
    }) });
    return /* @__PURE__ */ e("div", { ref: b, className: R, role: "region", "aria-label": "Data table", ...v, children: /* @__PURE__ */ d("table", { className: Se, children: [
      Q(),
      y ? Te() : t.length === 0 ? mt() : Er()
    ] }) });
  }
);
ar.displayName = "Table";
const tl = "_accordion_1f62q_3", rl = "_item_1f62q_9", nl = "_bordered_1f62q_18", ol = "_trigger_1f62q_31", sl = "_chevron_1f62q_72", il = "_chevronOpen_1f62q_83", al = "_panel_1f62q_92", ll = "_panelOpen_1f62q_99", cl = "_panelContent_1f62q_103", he = {
  accordion: tl,
  item: rl,
  bordered: nl,
  trigger: ol,
  chevron: sl,
  chevronOpen: il,
  panel: al,
  panelOpen: ll,
  panelContent: cl
}, dl = () => /* @__PURE__ */ e(
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
), hl = L(
  ({ items: r, allowMultiple: t = !1, defaultOpen: n = [], variant: o = "default", className: s, ...l }, a) => {
    const [i, c] = T(new Set(n)), p = V([]), m = V([]), h = C(
      (y) => {
        c((_) => {
          const g = new Set(_);
          return g.has(y) ? g.delete(y) : (t || g.clear(), g.add(y)), g;
        });
      },
      [t]
    );
    G(() => {
      m.current.forEach((y, _) => {
        y && (i.has(_) ? y.style.maxHeight = `${y.scrollHeight}px` : y.style.maxHeight = "0px");
      });
    }, [i]);
    const k = C(
      (y, _) => {
        var x;
        const g = r.map((N, B) => ({ disabled: N.disabled, i: B })).filter((N) => !N.disabled).map((N) => N.i), v = g.indexOf(_);
        let b;
        switch (y.key) {
          case "ArrowDown":
            y.preventDefault(), b = g[(v + 1) % g.length];
            break;
          case "ArrowUp":
            y.preventDefault(), b = g[(v - 1 + g.length) % g.length];
            break;
          case "Home":
            y.preventDefault(), b = g[0];
            break;
          case "End":
            y.preventDefault(), b = g[g.length - 1];
            break;
        }
        b !== void 0 && ((x = p.current[b]) == null || x.focus());
      },
      [r]
    ), u = [
      he.accordion,
      o === "bordered" ? he.bordered : void 0,
      s
    ].filter(Boolean).join(" ");
    return /* @__PURE__ */ e("div", { ref: a, className: u, ...l, children: r.map((y, _) => {
      const g = i.has(_), v = `accordion-trigger-${_}`, b = `accordion-panel-${_}`;
      return /* @__PURE__ */ d("div", { className: he.item, children: [
        /* @__PURE__ */ e("h3", { children: /* @__PURE__ */ d(
          "button",
          {
            id: v,
            ref: (x) => {
              p.current[_] = x;
            },
            className: he.trigger,
            type: "button",
            "aria-expanded": g,
            "aria-controls": b,
            "aria-disabled": y.disabled || void 0,
            onClick: () => !y.disabled && h(_),
            onKeyDown: (x) => k(x, _),
            tabIndex: y.disabled ? -1 : 0,
            children: [
              /* @__PURE__ */ e("span", { children: y.title }),
              /* @__PURE__ */ e("span", { className: `${he.chevron} ${g ? he.chevronOpen : ""}`, children: /* @__PURE__ */ e(dl, {}) })
            ]
          }
        ) }),
        /* @__PURE__ */ e(
          "div",
          {
            id: b,
            ref: (x) => {
              m.current[_] = x;
            },
            role: "region",
            "aria-labelledby": v,
            className: `${he.panel} ${g ? he.panelOpen : ""}`,
            hidden: !g,
            children: /* @__PURE__ */ e("div", { className: he.panelContent, children: y.content })
          }
        )
      ] }, _);
    }) });
  }
);
hl.displayName = "Accordion";
const pl = "_tag_1dcvh_3", ml = "_sm_1dcvh_17", kl = "_md_1dcvh_23", ul = "_red_1dcvh_36", _l = "_success_1dcvh_42", yl = "_warning_1dcvh_48", gl = "_outline_1dcvh_54", fl = "_icon_1dcvh_61", bl = "_removeButton_1dcvh_77", Ge = {
  tag: pl,
  sm: ml,
  md: kl,
  default: "_default_1dcvh_30",
  red: ul,
  success: _l,
  warning: yl,
  outline: gl,
  icon: fl,
  removeButton: bl
}, xl = L(
  ({
    label: r,
    variant: t = "default",
    size: n = "md",
    removable: o = !1,
    onRemove: s,
    icon: l,
    className: a,
    ...i
  }, c) => {
    const p = [Ge.tag, Ge[t], Ge[n], a].filter(Boolean).join(" "), m = (h) => {
      h.stopPropagation(), s == null || s();
    };
    return /* @__PURE__ */ d("span", { ref: c, className: p, ...i, children: [
      l && /* @__PURE__ */ e("span", { className: Ge.icon, children: l }),
      r,
      o && /* @__PURE__ */ e(
        "button",
        {
          type: "button",
          className: Ge.removeButton,
          onClick: m,
          "aria-label": `Remove ${r}`,
          children: "✕"
        }
      )
    ] });
  }
);
xl.displayName = "Tag";
const vl = "_avatar_zi7c1_3", Ll = "_circle_zi7c1_18", wl = "_square_zi7c1_22", Wl = "_xs_zi7c1_27", Nl = "_sm_zi7c1_33", Al = "_md_zi7c1_39", Il = "_lg_zi7c1_45", Sl = "_xl_zi7c1_51", Bl = "_image_zi7c1_58", Ml = "_initials_zi7c1_66", Cl = "_status_zi7c1_72", $l = "_statusOnline_zi7c1_106", Tl = "_statusOffline_zi7c1_110", El = "_statusBusy_zi7c1_114", jl = "_statusAway_zi7c1_118", Rl = "_avatarGroup_zi7c1_123", Fl = "_overflow_zi7c1_139", X = {
  avatar: vl,
  circle: Ll,
  square: wl,
  xs: Wl,
  sm: Nl,
  md: Al,
  lg: Il,
  xl: Sl,
  image: Bl,
  initials: Ml,
  status: Cl,
  statusOnline: $l,
  statusOffline: Tl,
  statusBusy: El,
  statusAway: jl,
  avatarGroup: Rl,
  overflow: Fl
}, Ol = {
  online: "Online",
  offline: "Offline",
  busy: "Busy",
  away: "Away"
}, Pl = {
  online: X.statusOnline,
  offline: X.statusOffline,
  busy: X.statusBusy,
  away: X.statusAway
};
function Dl(r) {
  const t = r.trim().split(/\s+/);
  return t.length === 1 ? t[0].charAt(0).toUpperCase() : (t[0].charAt(0) + t[t.length - 1].charAt(0)).toUpperCase();
}
const lr = L(
  ({
    src: r,
    alt: t,
    name: n,
    size: o = "md",
    variant: s = "circle",
    status: l,
    imgProps: a,
    className: i,
    ...c
  }, p) => {
    const [m, h] = T(!1), k = [X.avatar, X[o], X[s], i].filter(Boolean).join(" "), u = r && !m, y = n ? Dl(n) : void 0;
    return /* @__PURE__ */ d(
      "span",
      {
        ref: p,
        className: k,
        role: "img",
        "aria-label": t || n || "Avatar",
        ...c,
        children: [
          u ? /* @__PURE__ */ e(
            "img",
            {
              src: r,
              alt: t || n || "",
              className: X.image,
              onError: () => h(!0),
              ...a
            }
          ) : y ? /* @__PURE__ */ e("span", { className: X.initials, "aria-hidden": "true", children: y }) : null,
          l && /* @__PURE__ */ e(
            "span",
            {
              className: `${X.status} ${Pl[l]}`,
              "aria-label": Ol[l]
            }
          )
        ]
      }
    );
  }
);
lr.displayName = "Avatar";
const ql = L(
  ({ max: r, size: t = "md", children: n, className: o, ...s }, l) => {
    const a = vt.toArray(n).filter(er), i = r !== void 0 ? a.slice(0, r) : a, c = r !== void 0 ? a.length - r : 0, p = [X.avatarGroup, o].filter(Boolean).join(" "), h = { xs: 24, sm: 32, md: 40, lg: 56, xl: 80 }[t];
    return /* @__PURE__ */ d("div", { ref: l, className: p, role: "group", "aria-label": "Avatar group", ...s, children: [
      c > 0 && /* @__PURE__ */ d(
        "span",
        {
          className: `${X.overflow}`,
          style: { width: h, height: h, fontSize: h * 0.35 },
          "aria-label": `${c} more`,
          children: [
            "+",
            c
          ]
        }
      ),
      i.slice().reverse().map((k, u) => Or(k, { key: u }))
    ] });
  }
);
ql.displayName = "AvatarGroup";
const zl = "_list_has26_3", Gl = "_listItem_has26_12", Ul = "_compact_has26_20", Hl = "_divided_has26_26", Vl = "_hoverable_has26_35", Zl = "_listItemClickable_has26_40", Yl = "_icon_has26_50", Kl = "_content_has26_61", Xl = "_primary_has26_66", Ql = "_secondary_has26_73", Jl = "_action_has26_82", J = {
  list: zl,
  listItem: Gl,
  compact: Ul,
  divided: Hl,
  hoverable: Vl,
  listItemClickable: Zl,
  icon: Yl,
  content: Kl,
  primary: Xl,
  secondary: Ql,
  action: Jl
}, cr = L(
  ({ items: r, variant: t = "default", hoverable: n = !1, compact: o = !1, className: s, ...l }, a) => {
    const i = [
      J.list,
      t === "divided" ? J.divided : void 0,
      n ? J.hoverable : void 0,
      o ? J.compact : void 0,
      s
    ].filter(Boolean).join(" ");
    return /* @__PURE__ */ e("ul", { ref: a, className: i, role: "list", ...l, children: r.map((c, p) => {
      const m = [
        J.listItem,
        c.onClick ? J.listItemClickable : void 0
      ].filter(Boolean).join(" ");
      return /* @__PURE__ */ d(
        "li",
        {
          className: m,
          role: "listitem",
          tabIndex: c.onClick ? 0 : void 0,
          onClick: c.onClick,
          onKeyDown: (h) => {
            c.onClick && (h.key === "Enter" || h.key === " ") && (h.preventDefault(), c.onClick());
          },
          children: [
            c.icon && /* @__PURE__ */ e("span", { className: J.icon, children: c.icon }),
            /* @__PURE__ */ d("span", { className: J.content, children: [
              /* @__PURE__ */ e("span", { className: J.primary, children: c.primary }),
              c.secondary && /* @__PURE__ */ e("span", { className: J.secondary, children: c.secondary })
            ] }),
            c.action && /* @__PURE__ */ e("span", { className: J.action, children: c.action })
          ]
        },
        p
      );
    }) });
  }
);
cr.displayName = "List";
const ec = "_chip_2n81q_3", tc = "_sm_2n81q_22", rc = "_md_2n81q_28", nc = "_disabled_2n81q_35", oc = "_selected_2n81q_44", sc = "_icon_2n81q_60", ic = "_checkmark_2n81q_68", ac = "_removeButton_2n81q_85", lc = "_chipGroup_2n81q_123", We = {
  chip: ec,
  sm: tc,
  md: rc,
  disabled: nc,
  selected: oc,
  icon: sc,
  checkmark: ic,
  removeButton: ac,
  chipGroup: lc
}, cc = L(
  ({
    label: r,
    selected: t = !1,
    onClick: n,
    disabled: o = !1,
    icon: s,
    variant: l = "filter",
    size: a = "md",
    onRemove: i,
    className: c,
    ...p
  }, m) => {
    const h = [
      We.chip,
      We[a],
      t ? We.selected : void 0,
      o ? We.disabled : void 0,
      c
    ].filter(Boolean).join(" "), k = (_) => {
      o || (_.preventDefault(), n == null || n());
    }, u = (_) => {
      o || (_.key === "Enter" || _.key === " ") && (_.preventDefault(), n == null || n());
    }, y = (_) => {
      _.stopPropagation(), o || i == null || i();
    };
    return /* @__PURE__ */ d(
      "span",
      {
        ref: m,
        className: h,
        role: l === "choice" ? "radio" : l === "filter" ? "checkbox" : void 0,
        "aria-checked": l !== "input" ? t : void 0,
        "aria-disabled": o || void 0,
        tabIndex: o ? -1 : 0,
        onClick: k,
        onKeyDown: u,
        ...p,
        children: [
          l === "filter" && t && /* @__PURE__ */ e("span", { className: We.checkmark, "aria-hidden": "true", children: "✓" }),
          s && /* @__PURE__ */ e("span", { className: We.icon, children: s }),
          r,
          l === "input" && /* @__PURE__ */ e(
            "button",
            {
              type: "button",
              className: We.removeButton,
              onClick: y,
              "aria-label": `Remove ${r}`,
              tabIndex: -1,
              children: "✕"
            }
          )
        ]
      }
    );
  }
);
cc.displayName = "Chip";
const dc = L(
  ({ children: r, className: t, ...n }, o) => {
    const s = [We.chipGroup, t].filter(Boolean).join(" ");
    return /* @__PURE__ */ e("div", { ref: o, className: s, role: "group", ...n, children: r });
  }
);
dc.displayName = "ChipGroup";
const hc = "_emptyState_1e9xk_3", pc = "_compact_1e9xk_14", mc = "_icon_1e9xk_19", kc = "_title_1e9xk_42", uc = "_description_1e9xk_56", _c = "_actionButton_1e9xk_71", Ee = {
  emptyState: hc,
  compact: pc,
  icon: mc,
  title: kc,
  description: uc,
  actionButton: _c
}, dr = L(
  ({ icon: r, title: t, description: n, action: o, compact: s = !1, className: l, ...a }, i) => {
    const c = [
      Ee.emptyState,
      s ? Ee.compact : void 0,
      l
    ].filter(Boolean).join(" ");
    return /* @__PURE__ */ d("div", { ref: i, className: c, role: "status", ...a, children: [
      r && /* @__PURE__ */ e("div", { className: Ee.icon, "aria-hidden": "true", children: r }),
      /* @__PURE__ */ e("h3", { className: Ee.title, children: t }),
      n && /* @__PURE__ */ e("p", { className: Ee.description, children: n }),
      o && /* @__PURE__ */ e(
        "button",
        {
          type: "button",
          className: Ee.actionButton,
          onClick: o.onClick,
          children: o.label
        }
      )
    ] });
  }
);
dr.displayName = "EmptyState";
const yc = "_stat_dkvuq_3", gc = "_label_dkvuq_10", fc = "_sm_dkvuq_17", bc = "_md_dkvuq_21", xc = "_lg_dkvuq_25", vc = "_valueRow_dkvuq_30", Lc = "_prefix_dkvuq_36", wc = "_suffix_dkvuq_37", Wc = "_value_dkvuq_30", Nc = "_change_dkvuq_77", Ac = "_changeUp_dkvuq_98", Ic = "_changeDown_dkvuq_102", Sc = "_changeFlat_dkvuq_106", Bc = "_arrow_dkvuq_110", Mc = "_skeleton_dkvuq_117", Cc = "_shimmer_dkvuq_1", $c = "_skeletonLabel_dkvuq_133", Tc = "_skeletonValue_dkvuq_139", Ec = "_skeletonChange_dkvuq_154", U = {
  stat: yc,
  label: gc,
  sm: fc,
  md: bc,
  lg: xc,
  valueRow: vc,
  prefix: Lc,
  suffix: wc,
  value: Wc,
  change: Nc,
  changeUp: Ac,
  changeDown: Ic,
  changeFlat: Sc,
  arrow: Bc,
  skeleton: Mc,
  shimmer: Cc,
  skeletonLabel: $c,
  skeletonValue: Tc,
  skeletonChange: Ec
}, jc = {
  up: U.changeUp,
  down: U.changeDown,
  flat: U.changeFlat
}, Rc = {
  up: "▲",
  down: "▼",
  flat: "–"
}, Nt = L(
  ({
    label: r,
    value: t,
    change: n,
    prefix: o,
    suffix: s,
    size: l = "md",
    loading: a = !1,
    className: i,
    ...c
  }, p) => {
    const m = [U.stat, U[l], i].filter(Boolean).join(" ");
    return a ? /* @__PURE__ */ d("div", { ref: p, className: m, "aria-busy": "true", ...c, children: [
      /* @__PURE__ */ e("div", { className: `${U.skeleton} ${U.skeletonLabel}` }),
      /* @__PURE__ */ e("div", { className: `${U.skeleton} ${U.skeletonValue}` }),
      /* @__PURE__ */ e("div", { className: `${U.skeleton} ${U.skeletonChange}` })
    ] }) : /* @__PURE__ */ d("div", { ref: p, className: m, ...c, children: [
      /* @__PURE__ */ e("span", { className: U.label, children: r }),
      /* @__PURE__ */ d("span", { className: U.valueRow, children: [
        o && /* @__PURE__ */ e("span", { className: U.prefix, children: o }),
        /* @__PURE__ */ e("span", { className: U.value, children: t }),
        s && /* @__PURE__ */ e("span", { className: U.suffix, children: s })
      ] }),
      n && /* @__PURE__ */ d("span", { className: `${U.change} ${jc[n.direction]}`, children: [
        /* @__PURE__ */ e("span", { className: U.arrow, "aria-hidden": "true", children: Rc[n.direction] }),
        /* @__PURE__ */ d("span", { children: [
          n.value > 0 ? "+" : "",
          n.value,
          "%"
        ] })
      ] })
    ] });
  }
);
Nt.displayName = "Stat";
const Fc = "_formField_pwefl_3", Oc = "_fullWidth_pwefl_10", Pc = "_label_pwefl_16", Dc = "_required_pwefl_26", qc = "_helperText_pwefl_33", zc = "_errorText_pwefl_45", je = {
  formField: Fc,
  fullWidth: Oc,
  label: Pc,
  required: Dc,
  helperText: qc,
  errorText: zc
}, Je = L(
  ({
    label: r,
    error: t,
    helperText: n,
    required: o = !1,
    children: s,
    htmlFor: l,
    fullWidth: a = !1,
    className: i,
    errorId: c,
    helperTextId: p
  }, m) => {
    const h = [
      je.formField,
      a ? je.fullWidth : "",
      i ?? ""
    ].filter(Boolean).join(" ");
    return /* @__PURE__ */ d("div", { ref: m, className: h, children: [
      r && /* @__PURE__ */ e(
        "label",
        {
          htmlFor: l,
          className: `${je.label}${o ? ` ${je.required}` : ""}`,
          children: r
        }
      ),
      s,
      t ? /* @__PURE__ */ e("p", { id: c, className: je.errorText, role: "alert", children: t }) : n ? /* @__PURE__ */ e("p", { id: p, className: je.helperText, children: n }) : null
    ] });
  }
);
Je.displayName = "FormField";
const Gc = "_inputWrapper_t5jxw_3", Uc = "_input_t5jxw_3", Hc = "_sm_t5jxw_37", Vc = "_md_t5jxw_43", Zc = "_lg_t5jxw_49", Yc = "_hasIconLeft_t5jxw_57", Kc = "_hasIconRight_t5jxw_61", Xc = "_iconLeft_t5jxw_67", Qc = "_iconRight_t5jxw_68", Jc = "_clearButton_t5jxw_89", ed = "_error_t5jxw_122", td = "_disabled_t5jxw_131", rd = "_readonly_t5jxw_139", ee = {
  inputWrapper: Gc,
  input: Uc,
  sm: Hc,
  md: Vc,
  lg: Zc,
  hasIconLeft: Yc,
  hasIconRight: Kc,
  iconLeft: Xc,
  iconRight: Qc,
  clearButton: Jc,
  error: ed,
  disabled: td,
  readonly: rd
}, st = L(
  ({
    label: r,
    placeholder: t,
    value: n,
    onChange: o,
    error: s,
    helperText: l,
    disabled: a = !1,
    required: i = !1,
    readOnly: c = !1,
    size: p = "md",
    type: m = "text",
    iconLeft: h,
    iconRight: k,
    clearable: u = !1,
    onClear: y,
    fullWidth: _ = !1,
    className: g,
    id: v,
    ...b
  }, x) => {
    const N = oe(), B = v ?? `ubs-input-${N}`, A = s ? `${B}-error` : void 0, f = l && !s ? `${B}-helper` : void 0, M = [A, f].filter(Boolean).join(" ") || void 0, I = u && n && !a && !c, R = k || I, Se = [
      ee.input,
      ee[p],
      h ? ee.hasIconLeft : "",
      R ? ee.hasIconRight : "",
      s ? ee.error : "",
      a ? ee.disabled : "",
      c ? ee.readonly : "",
      g ?? ""
    ].filter(Boolean).join(" "), Be = () => {
      y == null || y();
    };
    return /* @__PURE__ */ e(
      Je,
      {
        label: r,
        error: s,
        helperText: l,
        required: i,
        htmlFor: B,
        fullWidth: _,
        errorId: A,
        helperTextId: f,
        children: /* @__PURE__ */ d("div", { className: ee.inputWrapper, children: [
          h && /* @__PURE__ */ e("span", { className: ee.iconLeft, "aria-hidden": "true", children: h }),
          /* @__PURE__ */ e(
            "input",
            {
              ref: x,
              id: B,
              type: m,
              className: Se,
              placeholder: t,
              value: n,
              onChange: o,
              disabled: a,
              required: i,
              readOnly: c,
              "aria-invalid": !!s,
              "aria-describedby": M,
              ...b
            }
          ),
          I ? /* @__PURE__ */ e(
            "button",
            {
              type: "button",
              className: ee.clearButton,
              onClick: Be,
              "aria-label": "Clear input",
              tabIndex: -1,
              children: "✕"
            }
          ) : k ? /* @__PURE__ */ e("span", { className: ee.iconRight, "aria-hidden": "true", children: k }) : null
        ] })
      }
    );
  }
);
st.displayName = "Input";
const nd = "_selectWrapper_mdll7_3", od = "_select_mdll7_3", sd = "_sm_mdll7_37", id = "_md_mdll7_43", ad = "_lg_mdll7_49", ld = "_chevron_mdll7_57", cd = "_placeholder_mdll7_76", dd = "_error_mdll7_82", hd = "_disabled_mdll7_91", pd = "_multiple_mdll7_101", xe = {
  selectWrapper: nd,
  select: od,
  sm: sd,
  md: id,
  lg: ad,
  chevron: ld,
  placeholder: cd,
  error: dd,
  disabled: hd,
  multiple: pd
}, At = L(
  ({
    label: r,
    options: t,
    value: n,
    onChange: o,
    error: s,
    helperText: l,
    disabled: a = !1,
    required: i = !1,
    placeholder: c,
    size: p = "md",
    multiple: m = !1,
    fullWidth: h = !1,
    className: k,
    id: u,
    ...y
  }, _) => {
    const g = oe(), v = u ?? `ubs-select-${g}`, b = s ? `${v}-error` : void 0, x = l && !s ? `${v}-helper` : void 0, N = [b, x].filter(Boolean).join(" ") || void 0, B = [
      xe.select,
      xe[p],
      m ? xe.multiple : "",
      s ? xe.error : "",
      a ? xe.disabled : "",
      k ?? ""
    ].filter(Boolean).join(" ");
    return /* @__PURE__ */ e(
      Je,
      {
        label: r,
        error: s,
        helperText: l,
        required: i,
        htmlFor: v,
        fullWidth: h,
        errorId: b,
        helperTextId: x,
        children: /* @__PURE__ */ d("div", { className: xe.selectWrapper, children: [
          /* @__PURE__ */ d(
            "select",
            {
              ref: _,
              id: v,
              className: B,
              value: n,
              onChange: o,
              disabled: a,
              required: i,
              multiple: m,
              "aria-invalid": !!s,
              "aria-describedby": N,
              ...y,
              children: [
                c && /* @__PURE__ */ e("option", { value: "", disabled: !0, className: xe.placeholder, children: c }),
                t.map((A) => /* @__PURE__ */ e(
                  "option",
                  {
                    value: A.value,
                    disabled: A.disabled,
                    children: A.label
                  },
                  A.value
                ))
              ]
            }
          ),
          !m && /* @__PURE__ */ e("span", { className: xe.chevron, "aria-hidden": "true", children: /* @__PURE__ */ e(
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
At.displayName = "Select";
const md = "_textarea_1yp3y_3", kd = "_resizeNone_1yp3y_34", ud = "_resizeVertical_1yp3y_38", _d = "_resizeBoth_1yp3y_42", yd = "_error_1yp3y_48", gd = "_disabled_1yp3y_57", fd = "_readonly_1yp3y_65", bd = "_countWrapper_1yp3y_72", xd = "_count_1yp3y_72", vd = "_countOver_1yp3y_85", ie = {
  textarea: md,
  resizeNone: kd,
  resizeVertical: ud,
  resizeBoth: _d,
  error: yd,
  disabled: gd,
  readonly: fd,
  countWrapper: bd,
  count: xd,
  countOver: vd
}, hr = L(
  ({
    label: r,
    value: t,
    onChange: n,
    error: o,
    helperText: s,
    disabled: l = !1,
    required: a = !1,
    readOnly: i = !1,
    rows: c = 4,
    maxLength: p,
    showCount: m = !1,
    resize: h = "vertical",
    fullWidth: k = !1,
    className: u,
    id: y,
    ..._
  }, g) => {
    const v = oe(), b = y ?? `ubs-textarea-${v}`, x = o ? `${b}-error` : void 0, N = s && !o ? `${b}-helper` : void 0, B = [x, N].filter(Boolean).join(" ") || void 0, A = h === "none" ? ie.resizeNone : h === "both" ? ie.resizeBoth : ie.resizeVertical, f = [
      ie.textarea,
      A,
      o ? ie.error : "",
      l ? ie.disabled : "",
      i ? ie.readonly : "",
      u ?? ""
    ].filter(Boolean).join(" "), M = typeof t == "string" ? t.length : 0, I = p !== void 0 && M > p;
    return /* @__PURE__ */ d(
      Je,
      {
        label: r,
        error: o,
        helperText: s,
        required: a,
        htmlFor: b,
        fullWidth: k,
        errorId: x,
        helperTextId: N,
        children: [
          /* @__PURE__ */ e(
            "textarea",
            {
              ref: g,
              id: b,
              className: f,
              value: t,
              onChange: n,
              disabled: l,
              required: a,
              readOnly: i,
              rows: c,
              maxLength: p,
              "aria-invalid": !!o,
              "aria-describedby": B,
              ..._
            }
          ),
          m && /* @__PURE__ */ e("div", { className: ie.countWrapper, children: /* @__PURE__ */ d("span", { className: `${ie.count}${I ? ` ${ie.countOver}` : ""}`, children: [
            M,
            p !== void 0 ? ` / ${p}` : ""
          ] }) })
        ]
      }
    );
  }
);
hr.displayName = "Textarea";
const Ld = "_container_pa1o4_3", wd = "_disabled_pa1o4_13", Wd = "_nativeInput_pa1o4_20", Nd = "_box_pa1o4_34", Ad = "_sm_pa1o4_45", Id = "_md_pa1o4_50", Sd = "_checkIcon_pa1o4_71", Bd = "_indeterminateIcon_pa1o4_72", Md = "_indeterminate_pa1o4_72", Cd = "_error_pa1o4_99", $d = "_label_pa1o4_105", Td = "_errorText_pa1o4_117", Ed = "_errorWrapper_pa1o4_128", Y = {
  container: Ld,
  disabled: wd,
  nativeInput: Wd,
  box: Nd,
  sm: Ad,
  md: Id,
  checkIcon: Sd,
  indeterminateIcon: Bd,
  indeterminate: Md,
  error: Cd,
  label: $d,
  errorText: Td,
  errorWrapper: Ed
}, pr = L(
  ({
    label: r,
    checked: t = !1,
    onChange: n,
    disabled: o = !1,
    indeterminate: s = !1,
    error: l,
    size: a = "md",
    className: i,
    id: c,
    ...p
  }, m) => {
    const h = oe(), k = c ?? `ubs-checkbox-${h}`, u = V(null);
    G(() => {
      u.current && (u.current.indeterminate = s);
    }, [s]);
    const y = (v) => {
      u.current = v, typeof m == "function" ? m(v) : m && (m.current = v);
    }, _ = [
      Y.container,
      Y[a],
      o ? Y.disabled : "",
      s ? Y.indeterminate : "",
      l ? Y.error : "",
      i ?? ""
    ].filter(Boolean).join(" "), g = /* @__PURE__ */ d("label", { htmlFor: k, className: _, children: [
      /* @__PURE__ */ e(
        "input",
        {
          ref: y,
          id: k,
          type: "checkbox",
          className: Y.nativeInput,
          checked: t,
          onChange: n,
          disabled: o,
          "aria-invalid": !!l,
          ...p
        }
      ),
      /* @__PURE__ */ d("span", { className: Y.box, "aria-hidden": "true", children: [
        /* @__PURE__ */ e("span", { className: Y.checkIcon, children: /* @__PURE__ */ e(
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
        /* @__PURE__ */ e("span", { className: Y.indeterminateIcon, children: /* @__PURE__ */ e(
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
      /* @__PURE__ */ e("span", { className: Y.label, children: r })
    ] });
    return l ? /* @__PURE__ */ d("div", { className: Y.errorWrapper, children: [
      g,
      /* @__PURE__ */ e("p", { className: Y.errorText, role: "alert", children: l })
    ] }) : g;
  }
);
pr.displayName = "Checkbox";
const jd = "_container_1xkbu_3", Rd = "_disabled_1xkbu_13", Fd = "_nativeInput_1xkbu_20", Od = "_circle_1xkbu_34", Pd = "_sm_1xkbu_45", Dd = "_md_1xkbu_50", qd = "_dot_1xkbu_57", zd = "_label_1xkbu_86", Gd = "_group_1xkbu_98", Ud = "_groupLabel_1xkbu_104", Hd = "_groupRequired_1xkbu_115", Vd = "_groupError_1xkbu_120", re = {
  container: jd,
  disabled: Rd,
  nativeInput: Fd,
  circle: Od,
  sm: Pd,
  md: Dd,
  dot: qd,
  label: zd,
  group: Gd,
  groupLabel: Ud,
  groupRequired: Hd,
  groupError: Vd
}, Zd = L(
  ({
    label: r,
    value: t,
    checked: n = !1,
    onChange: o,
    disabled: s = !1,
    name: l,
    size: a = "md",
    className: i,
    id: c,
    ...p
  }, m) => {
    const h = oe(), k = c ?? `ubs-radio-${h}`, u = [
      re.container,
      re[a],
      s ? re.disabled : "",
      i ?? ""
    ].filter(Boolean).join(" ");
    return /* @__PURE__ */ d("label", { htmlFor: k, className: u, children: [
      /* @__PURE__ */ e(
        "input",
        {
          ref: m,
          id: k,
          type: "radio",
          className: re.nativeInput,
          name: l,
          value: t,
          checked: n,
          onChange: o,
          disabled: s,
          ...p
        }
      ),
      /* @__PURE__ */ e("span", { className: re.circle, "aria-hidden": "true", children: /* @__PURE__ */ e("span", { className: re.dot }) }),
      /* @__PURE__ */ e("span", { className: re.label, children: r })
    ] });
  }
);
Zd.displayName = "Radio";
const Yd = L(
  ({
    label: r,
    name: t,
    value: n,
    onChange: o,
    required: s = !1,
    disabled: l = !1,
    error: a,
    children: i,
    className: c
  }, p) => {
    const m = (u) => {
      o == null || o(u.target.value);
    }, h = Ye.Children.map(i, (u) => Ye.isValidElement(u) ? Ye.cloneElement(u, {
      name: t,
      checked: u.props.value === n,
      onChange: m,
      disabled: l || u.props.disabled
    }) : u), k = [re.group, c ?? ""].filter(Boolean).join(" ");
    return /* @__PURE__ */ d("fieldset", { ref: p, className: k, role: "radiogroup", children: [
      r && /* @__PURE__ */ e(
        "legend",
        {
          className: `${re.groupLabel}${s ? ` ${re.groupRequired}` : ""}`,
          children: r
        }
      ),
      h,
      a && /* @__PURE__ */ e("p", { className: re.groupError, role: "alert", children: a })
    ] });
  }
);
Yd.displayName = "RadioGroup";
const Kd = "_container_u775n_3", Xd = "_disabled_u775n_13", Qd = "_labelLeft_u775n_18", Jd = "_nativeInput_u775n_24", e1 = "_track_u775n_38", t1 = "_sm_u775n_50", r1 = "_md_u775n_55", n1 = "_lg_u775n_60", o1 = "_thumb_u775n_67", s1 = "_label_u775n_18", ve = {
  container: Kd,
  disabled: Xd,
  labelLeft: Qd,
  nativeInput: Jd,
  track: e1,
  sm: t1,
  md: r1,
  lg: n1,
  thumb: o1,
  label: s1
}, i1 = L(
  ({
    label: r,
    checked: t = !1,
    onChange: n,
    disabled: o = !1,
    size: s = "md",
    labelPosition: l = "right",
    className: a,
    id: i,
    ...c
  }, p) => {
    const m = oe(), h = i ?? `ubs-toggle-${m}`, k = [
      ve.container,
      ve[s],
      o ? ve.disabled : "",
      l === "left" ? ve.labelLeft : "",
      a ?? ""
    ].filter(Boolean).join(" ");
    return /* @__PURE__ */ d("label", { htmlFor: h, className: k, children: [
      /* @__PURE__ */ e(
        "input",
        {
          ref: p,
          id: h,
          type: "checkbox",
          role: "switch",
          className: ve.nativeInput,
          checked: t,
          onChange: n,
          disabled: o,
          "aria-checked": t,
          ...c
        }
      ),
      /* @__PURE__ */ e("span", { className: ve.track, "aria-hidden": "true", children: /* @__PURE__ */ e("span", { className: ve.thumb }) }),
      /* @__PURE__ */ e("span", { className: ve.label, children: r })
    ] });
  }
);
i1.displayName = "Toggle";
const a1 = "_inputWrapper_5elnq_3", l1 = "_input_5elnq_3", c1 = "_calendarIcon_5elnq_50", d1 = "_error_5elnq_69", h1 = "_disabled_5elnq_78", Ue = {
  inputWrapper: a1,
  input: l1,
  calendarIcon: c1,
  error: d1,
  disabled: h1
};
function ft(r) {
  if (!r) return "";
  const t = r.getFullYear(), n = String(r.getMonth() + 1).padStart(2, "0"), o = String(r.getDate()).padStart(2, "0");
  return `${t}-${n}-${o}`;
}
const p1 = L(
  ({
    label: r,
    value: t,
    onChange: n,
    error: o,
    helperText: s,
    disabled: l = !1,
    required: a = !1,
    min: i,
    max: c,
    format: p = "DD/MM/YYYY",
    fullWidth: m = !1,
    className: h,
    id: k,
    ...u
  }, y) => {
    const _ = oe(), g = k ?? `ubs-datepicker-${_}`, v = o ? `${g}-error` : void 0, b = s && !o ? `${g}-helper` : void 0, x = [v, b].filter(Boolean).join(" ") || void 0, N = (A) => {
      const f = A.target.value;
      if (!f) {
        n == null || n(null);
        return;
      }
      const M = /* @__PURE__ */ new Date(f + "T00:00:00");
      n == null || n(isNaN(M.getTime()) ? null : M);
    }, B = [
      Ue.input,
      o ? Ue.error : "",
      l ? Ue.disabled : "",
      h ?? ""
    ].filter(Boolean).join(" ");
    return /* @__PURE__ */ e(
      Je,
      {
        label: r,
        error: o,
        helperText: s,
        required: a,
        htmlFor: g,
        fullWidth: m,
        errorId: v,
        helperTextId: b,
        children: /* @__PURE__ */ d("div", { className: Ue.inputWrapper, children: [
          /* @__PURE__ */ e(
            "input",
            {
              ref: y,
              id: g,
              type: "date",
              className: B,
              value: ft(t),
              onChange: N,
              disabled: l,
              required: a,
              min: i ? ft(i) : void 0,
              max: c ? ft(c) : void 0,
              "aria-invalid": !!o,
              "aria-describedby": x,
              ...u
            }
          ),
          /* @__PURE__ */ e("span", { className: Ue.calendarIcon, "aria-hidden": "true", children: /* @__PURE__ */ d(
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
p1.displayName = "DatePicker";
const m1 = "_navbar_fjnru_3", k1 = "_sticky_fjnru_17", u1 = "_light_fjnru_24", _1 = "_dark_fjnru_29", y1 = "_logo_fjnru_36", g1 = "_desktopNav_fjnru_44", f1 = "_navItem_fjnru_54", b1 = "_navItemActive_fjnru_82", x1 = "_navItemIcon_fjnru_93", v1 = "_actions_fjnru_101", L1 = "_hamburger_fjnru_110", w1 = "_hamburgerBar_fjnru_133", W1 = "_hamburgerOpen_fjnru_164", N1 = "_overlay_fjnru_180", A1 = "_overlayOpen_fjnru_190", I1 = "_mobilePanel_fjnru_194", S1 = "_mobilePanelOpen_fjnru_207", B1 = "_mobilePanelLight_fjnru_212", M1 = "_mobilePanelDark_fjnru_218", C1 = "_mobileNav_fjnru_223", $1 = "_mobileNavItem_fjnru_232", T1 = "_mobileNavItemActive_fjnru_256", E1 = "_mobileActions_fjnru_261", E = {
  navbar: m1,
  sticky: k1,
  light: u1,
  dark: _1,
  logo: y1,
  desktopNav: g1,
  navItem: f1,
  navItemActive: b1,
  navItemIcon: x1,
  actions: v1,
  hamburger: L1,
  hamburgerBar: w1,
  hamburgerOpen: W1,
  overlay: N1,
  overlayOpen: A1,
  mobilePanel: I1,
  mobilePanelOpen: S1,
  mobilePanelLight: B1,
  mobilePanelDark: M1,
  mobileNav: C1,
  mobileNavItem: $1,
  mobileNavItemActive: T1,
  mobileActions: E1
}, j1 = L(function({
  logo: t,
  items: n = [],
  actions: o,
  sticky: s = !1,
  variant: l = "light",
  className: a,
  ...i
}, c) {
  const [p, m] = T(!1), h = V(null), k = C(() => {
    m((_) => !_);
  }, []), u = C(() => {
    m(!1);
  }, []);
  G(() => {
    if (p) {
      const _ = document.body.style.overflow;
      return document.body.style.overflow = "hidden", () => {
        document.body.style.overflow = _;
      };
    }
  }, [p]), G(() => {
    if (!p) return;
    const _ = (g) => {
      g.key === "Escape" && u();
    };
    return document.addEventListener("keydown", _), () => document.removeEventListener("keydown", _);
  }, [p, u]);
  const y = [
    E.navbar,
    E[l],
    s ? E.sticky : "",
    a ?? ""
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ d(w, { children: [
    /* @__PURE__ */ d("nav", { ref: c, className: y, ...i, children: [
      t && /* @__PURE__ */ e("div", { className: E.logo, children: t }),
      /* @__PURE__ */ e("ul", { className: E.desktopNav, children: n.map((_) => /* @__PURE__ */ e("li", { children: /* @__PURE__ */ d(
        "a",
        {
          href: _.href,
          className: [
            E.navItem,
            _.active ? E.navItemActive : ""
          ].filter(Boolean).join(" "),
          "aria-current": _.active ? "page" : void 0,
          children: [
            _.icon && /* @__PURE__ */ e("span", { className: E.navItemIcon, children: _.icon }),
            _.label
          ]
        }
      ) }, _.href)) }),
      o && /* @__PURE__ */ e("div", { className: E.actions, children: o }),
      /* @__PURE__ */ e(
        "button",
        {
          type: "button",
          className: [E.hamburger, p ? E.hamburgerOpen : ""].filter(Boolean).join(" "),
          onClick: k,
          "aria-expanded": p,
          "aria-label": p ? "Close navigation menu" : "Open navigation menu",
          children: /* @__PURE__ */ e("span", { className: E.hamburgerBar })
        }
      )
    ] }),
    /* @__PURE__ */ e(
      "div",
      {
        className: [E.overlay, p ? E.overlayOpen : ""].filter(Boolean).join(" "),
        onClick: u,
        "aria-hidden": "true"
      }
    ),
    /* @__PURE__ */ d(
      "div",
      {
        ref: h,
        className: [
          E.mobilePanel,
          p ? E.mobilePanelOpen : "",
          l === "light" ? E.mobilePanelLight : E.mobilePanelDark
        ].filter(Boolean).join(" "),
        role: "dialog",
        "aria-label": "Navigation menu",
        "aria-hidden": !p,
        children: [
          /* @__PURE__ */ e("ul", { className: E.mobileNav, children: n.map((_) => /* @__PURE__ */ e("li", { children: /* @__PURE__ */ d(
            "a",
            {
              href: _.href,
              className: [
                E.mobileNavItem,
                _.active ? E.mobileNavItemActive : ""
              ].filter(Boolean).join(" "),
              "aria-current": _.active ? "page" : void 0,
              onClick: u,
              children: [
                _.icon && /* @__PURE__ */ e("span", { className: E.navItemIcon, children: _.icon }),
                _.label
              ]
            }
          ) }, _.href)) }),
          o && /* @__PURE__ */ e("div", { className: E.mobileActions, children: o })
        ]
      }
    )
  ] });
}), R1 = "_tablist_i1bly_3", F1 = "_fullWidth_i1bly_11", O1 = "_tab_i1bly_3", P1 = "_underline_i1bly_21", D1 = "_tabActive_i1bly_49", q1 = "_contained_i1bly_66", z1 = "_tabIcon_i1bly_115", Re = {
  tablist: R1,
  fullWidth: F1,
  tab: O1,
  underline: P1,
  tabActive: D1,
  contained: q1,
  tabIcon: z1
}, G1 = L(function({
  tabs: t,
  activeTab: n,
  onChange: o,
  variant: s = "underline",
  fullWidth: l = !1,
  className: a,
  ...i
}, c) {
  const p = V([]);
  C(
    (k) => {
      var _;
      const u = t.map((g, v) => ({ ...g, index: v })).filter((g) => !g.disabled);
      if (u.length === 0) return;
      let y = u.find((g) => g.index === k);
      y || (y = u[0]), (_ = p.current[y.index]) == null || _.focus();
    },
    [t]
  );
  const m = C(
    (k, u) => {
      var v;
      const y = t.map((b, x) => ({ disabled: b.disabled, index: x })).filter((b) => !b.disabled).map((b) => b.index), _ = y.indexOf(u);
      let g = null;
      switch (k.key) {
        case "ArrowRight":
        case "ArrowDown": {
          k.preventDefault();
          const b = _ + 1;
          g = y[b >= y.length ? 0 : b];
          break;
        }
        case "ArrowLeft":
        case "ArrowUp": {
          k.preventDefault();
          const b = _ - 1;
          g = y[b < 0 ? y.length - 1 : b];
          break;
        }
        case "Home": {
          k.preventDefault(), g = y[0];
          break;
        }
        case "End": {
          k.preventDefault(), g = y[y.length - 1];
          break;
        }
      }
      g != null && ((v = p.current[g]) == null || v.focus(), o(t[g].value));
    },
    [t, o]
  ), h = [
    Re.tablist,
    Re[s],
    l ? Re.fullWidth : "",
    a ?? ""
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ e("div", { ref: c, className: h, role: "tablist", ...i, children: t.map((k, u) => {
    const y = k.value === n;
    return /* @__PURE__ */ d(
      "button",
      {
        ref: (_) => {
          p.current[u] = _;
        },
        type: "button",
        role: "tab",
        id: `tab-${k.value}`,
        "aria-selected": y,
        "aria-controls": `tabpanel-${k.value}`,
        tabIndex: y ? 0 : -1,
        disabled: k.disabled,
        className: [Re.tab, y ? Re.tabActive : ""].filter(Boolean).join(" "),
        onClick: () => {
          k.disabled || o(k.value);
        },
        onKeyDown: (_) => m(_, u),
        children: [
          k.icon && /* @__PURE__ */ e("span", { className: Re.tabIcon, children: k.icon }),
          k.label
        ]
      },
      k.value
    );
  }) });
}), U1 = "_nav_1gq7p_3", H1 = "_list_1gq7p_9", V1 = "_item_1gq7p_19", Z1 = "_link_1gq7p_25", Y1 = "_current_1gq7p_47", K1 = "_separator_1gq7p_56", X1 = "_ellipsis_1gq7p_62", Le = {
  nav: U1,
  list: H1,
  item: V1,
  link: Z1,
  current: Y1,
  separator: K1,
  ellipsis: X1
}, Qm = L(
  function({ items: t, separator: n = "/", maxItems: o, className: s, ...l }, a) {
    const [i, c] = T(!1), p = ce(() => {
      if (!o || t.length <= o || i)
        return t.map((y, _) => ({ ...y, _collapsed: !1, _key: _ }));
      const h = o - 1, k = t[0], u = t.slice(t.length - h);
      return [
        { ...k, _collapsed: !1, _key: 0 },
        {
          label: "…",
          href: void 0,
          _collapsed: !0,
          _key: -1
        },
        ...u.map((y, _) => ({
          ...y,
          _collapsed: !1,
          _key: t.length - h + _
        }))
      ];
    }, [t, o, i]), m = [Le.nav, s ?? ""].filter(Boolean).join(" ");
    return /* @__PURE__ */ e("nav", { ref: a, className: m, "aria-label": "Breadcrumb", ...l, children: /* @__PURE__ */ e("ol", { className: Le.list, children: p.map((h, k) => {
      const u = k === p.length - 1 && !h._collapsed;
      return /* @__PURE__ */ d("li", { className: Le.item, children: [
        k > 0 && /* @__PURE__ */ e("span", { className: Le.separator, "aria-hidden": "true", children: n }),
        h._collapsed ? /* @__PURE__ */ e(
          "button",
          {
            type: "button",
            className: Le.ellipsis,
            onClick: () => c(!0),
            "aria-label": "Show all breadcrumbs",
            children: "…"
          }
        ) : u ? /* @__PURE__ */ e("span", { className: Le.current, "aria-current": "page", children: h.label }) : h.href ? /* @__PURE__ */ e("a", { href: h.href, className: Le.link, children: h.label }) : /* @__PURE__ */ e("span", { className: Le.current, children: h.label })
      ] }, h._key);
    }) }) });
  }
), Q1 = "_pagination_185pj_3", J1 = "_page_185pj_15", eh = "_active_185pj_31", th = "_sm_185pj_47", rh = "_ellipsis_185pj_48", nh = "_md_185pj_55", oh = "_arrow_185pj_78 _page_185pj_15", pe = {
  pagination: Q1,
  page: J1,
  active: eh,
  sm: th,
  ellipsis: rh,
  md: nh,
  arrow: oh
};
function sh(r, t, n) {
  const o = [], s = Math.max(t - n, 1), l = Math.min(t + n, r), a = s > 2, i = l < r - 1;
  if (r <= n * 2 + 3) {
    for (let c = 1; c <= r; c++) o.push(c);
    return o;
  }
  if (o.push(1), a)
    o.push("ellipsis-start");
  else
    for (let c = 2; c < s; c++) o.push(c);
  for (let c = s; c <= l; c++)
    c !== 1 && c !== r && o.push(c);
  if (i)
    o.push("ellipsis-end");
  else
    for (let c = l + 1; c < r; c++) o.push(c);
  return r > 1 && o.push(r), o;
}
const ih = L(
  function({
    totalPages: t,
    currentPage: n,
    onChange: o,
    siblingCount: s = 1,
    showFirstLast: l = !1,
    showPrevNext: a = !0,
    size: i = "md",
    className: c,
    ...p
  }, m) {
    const h = ce(
      () => sh(t, n, s),
      [t, n, s]
    ), k = [pe.pagination, pe[i], c ?? ""].filter(Boolean).join(" ");
    return /* @__PURE__ */ d("nav", { ref: m, className: k, "aria-label": "Pagination", ...p, children: [
      l && /* @__PURE__ */ e(
        "button",
        {
          type: "button",
          className: pe.arrow,
          disabled: n <= 1,
          onClick: () => o(1),
          "aria-label": "First page",
          children: "«"
        }
      ),
      a && /* @__PURE__ */ e(
        "button",
        {
          type: "button",
          className: pe.arrow,
          disabled: n <= 1,
          onClick: () => o(n - 1),
          "aria-label": "Previous page",
          children: "‹"
        }
      ),
      h.map((u) => {
        if (typeof u == "string")
          return /* @__PURE__ */ e("span", { className: pe.ellipsis, "aria-hidden": "true", children: "…" }, u);
        const y = u === n;
        return /* @__PURE__ */ e(
          "button",
          {
            type: "button",
            className: [pe.page, y ? pe.active : ""].filter(Boolean).join(" "),
            onClick: () => o(u),
            "aria-label": `Page ${u}`,
            "aria-current": y ? "page" : void 0,
            children: u
          },
          u
        );
      }),
      a && /* @__PURE__ */ e(
        "button",
        {
          type: "button",
          className: pe.arrow,
          disabled: n >= t,
          onClick: () => o(n + 1),
          "aria-label": "Next page",
          children: "›"
        }
      ),
      l && /* @__PURE__ */ e(
        "button",
        {
          type: "button",
          className: pe.arrow,
          disabled: n >= t,
          onClick: () => o(t),
          "aria-label": "Last page",
          children: "»"
        }
      )
    ] });
  }
), ah = "_container_ff5yu_5", lh = "_toast_ff5yu_19", ch = "_slideIn_ff5yu_1", dh = "_toastExiting_ff5yu_35", hh = "_slideOut_ff5yu_1", ph = "_success_ff5yu_63", mh = "_error_ff5yu_67", kh = "_warning_ff5yu_71", uh = "_info_ff5yu_76", _h = "_content_ff5yu_82", yh = "_message_ff5yu_87", gh = "_action_ff5yu_94", fh = "_close_ff5yu_126", bh = "_progress_ff5yu_159", ye = {
  container: ah,
  toast: lh,
  slideIn: ch,
  toastExiting: dh,
  slideOut: hh,
  success: ph,
  error: mh,
  warning: kh,
  info: uh,
  content: _h,
  message: yh,
  action: gh,
  close: fh,
  progress: bh
};
function xh({
  toast: r,
  onRemove: t
}) {
  const [n, o] = T(!1), [s, l] = T(100), a = V(), i = r.duration ?? 5e3, c = C(() => {
    o(!0), setTimeout(() => {
      var m;
      t(r.id), (m = r.onClose) == null || m.call(r);
    }, 200);
  }, [t, r]);
  G(() => {
    if (i <= 0) return;
    const m = Date.now();
    return a.current = setInterval(() => {
      const h = Date.now() - m, k = Math.max(0, 100 - h / i * 100);
      l(k), k <= 0 && (clearInterval(a.current), c());
    }, 50), () => clearInterval(a.current);
  }, [i, c]);
  const p = r.variant ?? "info";
  return /* @__PURE__ */ d(
    "div",
    {
      className: [
        ye.toast,
        ye[p],
        n ? ye.toastExiting : ""
      ].filter(Boolean).join(" "),
      role: "alert",
      "aria-live": "polite",
      children: [
        /* @__PURE__ */ d("div", { className: ye.content, children: [
          /* @__PURE__ */ e("div", { className: ye.message, children: r.message }),
          r.action && /* @__PURE__ */ e(
            "button",
            {
              type: "button",
              className: ye.action,
              onClick: r.action.onClick,
              children: r.action.label
            }
          )
        ] }),
        /* @__PURE__ */ e(
          "button",
          {
            type: "button",
            className: ye.close,
            onClick: c,
            "aria-label": "Dismiss notification",
            children: "✕"
          }
        ),
        i > 0 && /* @__PURE__ */ e(
          "div",
          {
            className: ye.progress,
            style: { width: `${s}%`, transitionDuration: "50ms" },
            "aria-hidden": "true"
          }
        )
      ]
    }
  );
}
const mr = rr(null);
function Jm() {
  const r = tr(mr);
  if (!r)
    throw new Error("useToast must be used within a <ToastProvider>");
  return r;
}
let vh = 0;
function ek({ children: r }) {
  const [t, n] = T([]), o = C((a) => {
    const i = `toast-${++vh}`;
    return n((c) => [...c, { ...a, id: i, createdAt: Date.now() }]), i;
  }, []), s = C((a) => {
    n((i) => i.filter((c) => c.id !== a));
  }, []), l = ce(() => ({ show: o, dismiss: s }), [o, s]);
  return /* @__PURE__ */ d(mr.Provider, { value: l, children: [
    r,
    typeof document < "u" && nr(
      /* @__PURE__ */ e("div", { className: ye.container, "aria-label": "Notifications", children: t.map((a) => /* @__PURE__ */ e(xh, { toast: a, onRemove: s }, a.id)) }),
      document.body
    )
  ] });
}
const Lh = "_backdrop_dof22_5", wh = "_backdropOpen_dof22_18", Wh = "_dialog_dof22_24", Nh = "_sm_dof22_48", Ah = "_md_dof22_52", Ih = "_lg_dof22_56", Sh = "_fullscreen_dof22_60", Bh = "_header_dof22_70", Mh = "_title_dof22_79", Ch = "_closeButton_dof22_87", $h = "_body_dof22_116", Th = "_footer_dof22_124", me = {
  backdrop: Lh,
  backdropOpen: wh,
  dialog: Wh,
  sm: Nh,
  md: Ah,
  lg: Ih,
  fullscreen: Sh,
  header: Bh,
  title: Mh,
  closeButton: Ch,
  body: $h,
  footer: Th
}, tk = L(function({
  isOpen: t,
  onClose: n,
  title: o,
  children: s,
  footer: l,
  size: a = "md",
  closeOnOverlay: i = !0,
  closeOnEscape: c = !0,
  className: p,
  ...m
}, h) {
  const k = oe(), u = V(null), y = V(null), [_, g] = T(!1), [v, b] = T(!1);
  G(() => {
    if (t)
      y.current = document.activeElement, g(!0), requestAnimationFrame(() => {
        requestAnimationFrame(() => b(!0));
      });
    else {
      b(!1);
      const A = setTimeout(() => {
        var f;
        g(!1), (f = y.current) == null || f.focus();
      }, 200);
      return () => clearTimeout(A);
    }
  }, [t]), G(() => {
    if (!_) return;
    const A = document.body.style.overflow;
    return document.body.style.overflow = "hidden", () => {
      document.body.style.overflow = A;
    };
  }, [_]), G(() => {
    if (!_ || !v) return;
    const A = u.current;
    if (!A) return;
    const f = A.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    f.length > 0 && f[0].focus();
  }, [_, v]), G(() => {
    if (!_ || !c) return;
    const A = (f) => {
      f.key === "Escape" && n();
    };
    return document.addEventListener("keydown", A), () => document.removeEventListener("keydown", A);
  }, [_, c, n]);
  const x = C(
    (A) => {
      if (A.key !== "Tab") return;
      const f = u.current;
      if (!f) return;
      const M = f.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      if (M.length === 0) return;
      const I = M[0], R = M[M.length - 1];
      A.shiftKey ? document.activeElement === I && (A.preventDefault(), R.focus()) : document.activeElement === R && (A.preventDefault(), I.focus());
    },
    []
  ), N = C(
    (A) => {
      i && A.target === A.currentTarget && n();
    },
    [i, n]
  );
  if (!_) return null;
  const B = /* @__PURE__ */ e(
    "div",
    {
      className: [me.backdrop, v ? me.backdropOpen : ""].filter(Boolean).join(" "),
      onClick: N,
      onKeyDown: x,
      "aria-hidden": !t,
      children: /* @__PURE__ */ d(
        "div",
        {
          ref: (A) => {
            u.current = A, typeof h == "function" ? h(A) : h && (h.current = A);
          },
          className: [me.dialog, me[a], p ?? ""].filter(Boolean).join(" "),
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": o ? k : void 0,
          ...m,
          children: [
            o && /* @__PURE__ */ d("div", { className: me.header, children: [
              /* @__PURE__ */ e("h2", { id: k, className: me.title, children: o }),
              /* @__PURE__ */ e(
                "button",
                {
                  type: "button",
                  className: me.closeButton,
                  onClick: n,
                  "aria-label": "Close dialog",
                  children: "✕"
                }
              )
            ] }),
            /* @__PURE__ */ e("div", { className: me.body, children: s }),
            l && /* @__PURE__ */ e("div", { className: me.footer, children: l })
          ]
        }
      )
    }
  );
  return typeof document < "u" ? nr(B, document.body) : null;
}), Eh = "_wrapper_t7o05_3", jh = "_tooltip_t7o05_8", Rh = "_visible_t7o05_26", Fh = "_top_t7o05_32", Oh = "_bottom_t7o05_38", Ph = "_left_t7o05_44", Dh = "_right_t7o05_50", qh = "_arrow_t7o05_58", He = {
  wrapper: Eh,
  tooltip: jh,
  visible: Rh,
  top: Fh,
  bottom: Oh,
  left: Ph,
  right: Dh,
  arrow: qh
};
function rk({
  content: r,
  position: t = "top",
  delay: n = 300,
  children: o
}) {
  const [s, l] = T(!1), a = V(), i = oe(), c = C(() => {
    a.current = setTimeout(() => l(!0), n);
  }, [n]), p = C(() => {
    clearTimeout(a.current), l(!1);
  }, []);
  return /* @__PURE__ */ d(
    "div",
    {
      className: He.wrapper,
      onMouseEnter: c,
      onMouseLeave: p,
      onFocus: c,
      onBlur: p,
      children: [
        Ye.cloneElement(o, {
          "aria-describedby": s ? i : void 0
        }),
        /* @__PURE__ */ d(
          "div",
          {
            id: i,
            role: "tooltip",
            className: [
              He.tooltip,
              He[t],
              s ? He.visible : ""
            ].filter(Boolean).join(" "),
            "aria-hidden": !s,
            children: [
              /* @__PURE__ */ e("span", { className: He.arrow }),
              r
            ]
          }
        )
      ]
    }
  );
}
const zh = "_wrapper_659zt_3", Gh = "_trigger_659zt_8", Uh = "_popover_659zt_12", Hh = "_visible_659zt_29", Vh = "_top_659zt_36", Zh = "_bottom_659zt_42", Yh = "_left_659zt_48", Kh = "_right_659zt_54", Xh = "_arrow_659zt_62", Fe = {
  wrapper: zh,
  trigger: Gh,
  popover: Uh,
  visible: Hh,
  top: Vh,
  bottom: Zh,
  left: Yh,
  right: Kh,
  arrow: Xh
};
function nk({
  content: r,
  trigger: t,
  position: n = "bottom",
  isOpen: o,
  onOpenChange: s
}) {
  const [l, a] = T(!1), i = o ?? l, c = oe(), p = V(null), m = V(null), h = C(
    (u) => {
      s ? s(u) : a(u);
    },
    [s]
  ), k = C(() => {
    h(!i);
  }, [i, h]);
  return G(() => {
    if (!i) return;
    const u = (y) => {
      p.current && !p.current.contains(y.target) && h(!1);
    };
    return document.addEventListener("mousedown", u), () => document.removeEventListener("mousedown", u);
  }, [i, h]), G(() => {
    if (!i) return;
    const u = (y) => {
      y.key === "Escape" && h(!1);
    };
    return document.addEventListener("keydown", u), () => document.removeEventListener("keydown", u);
  }, [i, h]), G(() => {
    i && requestAnimationFrame(() => {
      const u = m.current;
      if (!u) return;
      const y = u.querySelector(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      y == null || y.focus();
    });
  }, [i]), /* @__PURE__ */ d("div", { ref: p, className: Fe.wrapper, children: [
    /* @__PURE__ */ e(
      "div",
      {
        className: Fe.trigger,
        onClick: k,
        "aria-expanded": i,
        "aria-controls": i ? c : void 0,
        children: t
      }
    ),
    /* @__PURE__ */ d(
      "div",
      {
        ref: m,
        id: c,
        className: [
          Fe.popover,
          Fe[n],
          i ? Fe.visible : ""
        ].filter(Boolean).join(" "),
        role: "dialog",
        "aria-hidden": !i,
        children: [
          /* @__PURE__ */ e("span", { className: Fe.arrow }),
          r
        ]
      }
    )
  ] });
}
const Qh = "_wrapper_e2ui0_3", Jh = "_wrapperFullWidth_e2ui0_12", ep = "_track_e2ui0_19", tp = "_smTrack_e2ui0_26", rp = "_mdTrack_e2ui0_30", np = "_lgTrack_e2ui0_34", op = "_fill_e2ui0_38", sp = "_circle_e2ui0_46", ip = "_circleBg_e2ui0_50", ap = "_circleFill_e2ui0_55", lp = "_circleLabel_e2ui0_60", cp = "_colourRed_e2ui0_70", dp = "_colourGreen_e2ui0_76", hp = "_colourAmber_e2ui0_82", pp = "_colourGray_e2ui0_88", mp = "_label_e2ui0_96", kp = "_indeterminate_e2ui0_104", z = {
  wrapper: Qh,
  wrapperFullWidth: Jh,
  track: ep,
  smTrack: tp,
  mdTrack: rp,
  lgTrack: np,
  fill: op,
  circle: sp,
  circleBg: ip,
  circleFill: ap,
  circleLabel: lp,
  colourRed: cp,
  colourGreen: dp,
  colourAmber: hp,
  colourGray: pp,
  label: mp,
  indeterminate: kp
}, up = { sm: 40, md: 64, lg: 96 }, _p = { sm: 3, md: 4, lg: 6 }, Ht = {
  red: z.colourRed,
  green: z.colourGreen,
  amber: z.colourAmber,
  gray: z.colourGray
}, ok = L(
  function({
    value: t,
    variant: n = "bar",
    size: o = "md",
    colour: s = "red",
    showLabel: l = !1,
    label: a,
    className: i,
    ...c
  }, p) {
    const m = t == null, h = m ? 0 : Math.min(100, Math.max(0, t)), k = a ?? `${Math.round(h)}%`, u = Ht[s] ?? Ht.red;
    if (n === "circle") {
      const _ = up[o], g = _p[o], v = (_ - g) / 2, b = 2 * Math.PI * v, x = m ? b * 0.75 : b - h / 100 * b;
      return /* @__PURE__ */ e(
        "div",
        {
          ref: p,
          className: [
            z.wrapper,
            u,
            m ? z.indeterminate : "",
            i ?? ""
          ].filter(Boolean).join(" "),
          role: "progressbar",
          "aria-valuenow": m ? void 0 : h,
          "aria-valuemin": 0,
          "aria-valuemax": 100,
          "aria-label": c["aria-label"] ?? "Progress",
          ...c,
          children: /* @__PURE__ */ d(
            "svg",
            {
              className: z.circle,
              width: _,
              height: _,
              viewBox: `0 0 ${_} ${_}`,
              children: [
                /* @__PURE__ */ e(
                  "circle",
                  {
                    className: z.circleBg,
                    cx: _ / 2,
                    cy: _ / 2,
                    r: v,
                    strokeWidth: g
                  }
                ),
                /* @__PURE__ */ e(
                  "circle",
                  {
                    className: z.circleFill,
                    cx: _ / 2,
                    cy: _ / 2,
                    r: v,
                    strokeWidth: g,
                    strokeDasharray: b,
                    strokeDashoffset: x,
                    strokeLinecap: "round"
                  }
                ),
                l && !m && /* @__PURE__ */ e(
                  "text",
                  {
                    className: z.circleLabel,
                    x: "50%",
                    y: "50%",
                    transform: `rotate(90, ${_ / 2}, ${_ / 2})`,
                    fontSize: o === "sm" ? 10 : o === "md" ? 14 : 18,
                    children: k
                  }
                )
              ]
            }
          )
        }
      );
    }
    const y = o === "sm" ? z.smTrack : o === "lg" ? z.lgTrack : z.mdTrack;
    return /* @__PURE__ */ d(
      "div",
      {
        ref: p,
        className: [
          z.wrapper,
          z.wrapperFullWidth,
          u,
          m ? z.indeterminate : "",
          i ?? ""
        ].filter(Boolean).join(" "),
        role: "progressbar",
        "aria-valuenow": m ? void 0 : h,
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        "aria-label": c["aria-label"] ?? "Progress",
        ...c,
        children: [
          /* @__PURE__ */ e("div", { className: [z.track, y].join(" "), children: /* @__PURE__ */ e(
            "div",
            {
              className: z.fill,
              style: m ? void 0 : { width: `${h}%` }
            }
          ) }),
          l && !m && /* @__PURE__ */ e("span", { className: z.label, children: k })
        ]
      }
    );
  }
), yp = "_skeleton_18fpa_3", gp = "_text_18fpa_12", fp = "_textLine_18fpa_18", bp = "_textLineLast_18fpa_26", xp = "_circle_18fpa_30", vp = "_rect_18fpa_34", Lp = "_animate_18fpa_40", Ce = {
  skeleton: yp,
  text: gp,
  textLine: fp,
  textLineLast: bp,
  circle: xp,
  rect: vp,
  animate: Lp
}, sk = L(
  function({
    variant: t = "rect",
    width: n,
    height: o,
    lines: s = 3,
    animate: l = !0,
    className: a,
    style: i,
    ...c
  }, p) {
    const m = l ? Ce.animate : "";
    if (t === "text") {
      const u = Math.max(1, s);
      return /* @__PURE__ */ e(
        "div",
        {
          ref: p,
          className: [Ce.text, m, a ?? ""].filter(Boolean).join(" "),
          style: { width: n, ...i },
          role: "status",
          "aria-label": "Loading",
          "aria-busy": "true",
          ...c,
          children: Array.from({ length: u }, (y, _) => /* @__PURE__ */ e(
            "div",
            {
              className: [
                Ce.textLine,
                _ === u - 1 ? Ce.textLineLast : ""
              ].filter(Boolean).join(" "),
              style: { height: o ?? void 0 }
            },
            _
          ))
        }
      );
    }
    const h = typeof n == "number" ? `${n}px` : n, k = typeof o == "number" ? `${o}px` : o;
    return /* @__PURE__ */ e(
      "div",
      {
        ref: p,
        className: [
          Ce.skeleton,
          t === "circle" ? Ce.circle : Ce.rect,
          m,
          a ?? ""
        ].filter(Boolean).join(" "),
        style: {
          width: h ?? (t === "circle" ? "48px" : "100%"),
          height: k ?? (t === "circle" ? h ?? "48px" : "48px"),
          ...i
        },
        role: "status",
        "aria-label": "Loading",
        "aria-busy": "true",
        ...c
      }
    );
  }
), wp = "_pageHeader_na0br_4", Wp = "_container_na0br_11", Np = "_impulse_na0br_20", Ap = "_titleBlock_na0br_20", Ip = "_breadcrumbs_na0br_27", Sp = "_breadcrumbItem_na0br_37", Bp = "_breadcrumbLink_na0br_42", Mp = "_breadcrumbCurrent_na0br_58", Cp = "_breadcrumbSeparator_na0br_63", $p = "_title_na0br_20", Tp = "_subtitle_na0br_85", Ep = "_actions_na0br_95", K = {
  pageHeader: wp,
  container: Wp,
  impulse: Np,
  titleBlock: Ap,
  breadcrumbs: Ip,
  breadcrumbItem: Sp,
  breadcrumbLink: Bp,
  breadcrumbCurrent: Mp,
  breadcrumbSeparator: Cp,
  title: $p,
  subtitle: Tp,
  actions: Ep
}, at = L(
  ({
    title: r,
    subtitle: t,
    breadcrumbs: n,
    actions: o,
    variant: s = "default",
    className: l,
    ...a
  }, i) => {
    const c = [
      K.pageHeader,
      s === "impulse" ? K.impulse : "",
      l ?? ""
    ].filter(Boolean).join(" ");
    return /* @__PURE__ */ d("header", { ref: i, className: c, ...a, children: [
      n && n.length > 0 && /* @__PURE__ */ e("nav", { className: K.breadcrumbs, "aria-label": "Breadcrumb", children: n.map((p, m) => {
        const h = m === n.length - 1;
        return /* @__PURE__ */ d("span", { className: K.breadcrumbItem, children: [
          m > 0 && /* @__PURE__ */ e("span", { className: K.breadcrumbSeparator, "aria-hidden": "true", children: "/" }),
          h || !p.href ? /* @__PURE__ */ e("span", { className: K.breadcrumbCurrent, "aria-current": h ? "page" : void 0, children: p.label }) : /* @__PURE__ */ e("a", { href: p.href, className: K.breadcrumbLink, children: p.label })
        ] }, m);
      }) }),
      /* @__PURE__ */ d("div", { className: K.container, children: [
        /* @__PURE__ */ d("div", { className: K.titleBlock, children: [
          /* @__PURE__ */ e("h1", { className: K.title, children: r }),
          t && /* @__PURE__ */ e("p", { className: K.subtitle, children: t })
        ] }),
        o && /* @__PURE__ */ e("div", { className: K.actions, children: o })
      ] })
    ] });
  }
);
at.displayName = "PageHeader";
const jp = "_section_1938c_4", Rp = "_bgWhite_1938c_13", Fp = "_bgPastel1_1938c_17", Op = "_bgPastel2_1938c_21", Pp = "_paddingSm_1938c_27", Dp = "_paddingMd_1938c_31", qp = "_paddingLg_1938c_35", zp = "_header_1938c_41", Gp = "_title_1938c_45", Up = "_subtitle_1938c_53", le = {
  section: jp,
  bgWhite: Rp,
  bgPastel1: Fp,
  bgPastel2: Op,
  paddingSm: Pp,
  paddingMd: Dp,
  paddingLg: qp,
  header: zp,
  title: Gp,
  subtitle: Up
}, Hp = {
  sm: le.paddingSm,
  md: le.paddingMd,
  lg: le.paddingLg
}, Vp = {
  white: le.bgWhite,
  pastel1: le.bgPastel1,
  pastel2: le.bgPastel2
}, It = L(
  ({
    title: r,
    subtitle: t,
    children: n,
    padding: o = "md",
    background: s = "white",
    className: l,
    ...a
  }, i) => {
    const c = [
      le.section,
      Hp[o],
      Vp[s],
      l ?? ""
    ].filter(Boolean).join(" ");
    return /* @__PURE__ */ d("section", { ref: i, className: c, ...a, children: [
      (r || t) && /* @__PURE__ */ d("div", { className: le.header, children: [
        r && /* @__PURE__ */ e("h2", { className: le.title, children: r }),
        t && /* @__PURE__ */ e("p", { className: le.subtitle, children: t })
      ] }),
      n
    ] });
  }
);
It.displayName = "SectionWrapper";
const Zp = "_actionBar_f7519_4", Yp = "_sticky_f7519_19", Kp = "_alignLeft_f7519_27", Xp = "_alignRight_f7519_31", Qp = "_alignCenter_f7519_35", Jp = "_alignBetween_f7519_39", e0 = "_startGroup_f7519_45", t0 = "_endGroup_f7519_51", Ne = {
  actionBar: Zp,
  sticky: Yp,
  alignLeft: Kp,
  alignRight: Xp,
  alignCenter: Qp,
  alignBetween: Jp,
  startGroup: e0,
  endGroup: t0
}, r0 = {
  left: Ne.alignLeft,
  right: Ne.alignRight,
  between: Ne.alignBetween,
  center: Ne.alignCenter
}, lt = L(
  ({
    primaryAction: r,
    secondaryAction: t,
    tertiaryActions: n,
    align: o = "between",
    sticky: s = !1,
    className: l,
    ...a
  }, i) => {
    const c = [
      Ne.actionBar,
      r0[o],
      s ? Ne.sticky : "",
      l ?? ""
    ].filter(Boolean).join(" "), p = o === "between" && (t || n && n.length > 0);
    return /* @__PURE__ */ e("div", { ref: i, className: c, role: "toolbar", "aria-label": "Page actions", ...a, children: p ? /* @__PURE__ */ d(w, { children: [
      /* @__PURE__ */ d("div", { className: Ne.startGroup, children: [
        t && /* @__PURE__ */ e(
          "button",
          {
            type: "button",
            onClick: t.onClick,
            "data-variant": t.variant ?? "outline",
            children: t.label
          }
        ),
        n == null ? void 0 : n.map((m, h) => /* @__PURE__ */ e(
          "button",
          {
            type: "button",
            onClick: m.onClick,
            "data-variant": m.variant ?? "ghost",
            children: m.label
          },
          h
        ))
      ] }),
      /* @__PURE__ */ e("div", { className: Ne.endGroup, children: /* @__PURE__ */ e(
        "button",
        {
          type: "button",
          onClick: r.onClick,
          "data-variant": r.variant ?? "primary",
          children: r.label
        }
      ) })
    ] }) : /* @__PURE__ */ d(w, { children: [
      n == null ? void 0 : n.map((m, h) => /* @__PURE__ */ e(
        "button",
        {
          type: "button",
          onClick: m.onClick,
          "data-variant": m.variant ?? "ghost",
          children: m.label
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
          onClick: r.onClick,
          "data-variant": r.variant ?? "primary",
          children: r.label
        }
      )
    ] }) });
  }
);
lt.displayName = "ActionBar";
const kr = L(
  ({
    size: r = 16,
    strokeWidth: t = 2,
    colour: n = "currentColor",
    className: o,
    style: s,
    ...l
  }, a) => /* @__PURE__ */ d(
    "svg",
    {
      ref: a,
      xmlns: "http://www.w3.org/2000/svg",
      width: r,
      height: r,
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
            stroke: n,
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
            stroke: n,
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
            stroke: n,
            strokeWidth: t,
            strokeLinecap: "square",
            strokeLinejoin: "miter"
          }
        )
      ]
    }
  )
);
kr.displayName = "CTAArrow";
const n0 = "_cta_vg9yy_6", o0 = "_arrow_vg9yy_27", s0 = "_animated_vg9yy_32", i0 = "_sm_vg9yy_39", a0 = "_md_vg9yy_44", l0 = "_lg_vg9yy_49", c0 = "_button_vg9yy_56", d0 = "_text_vg9yy_89", h0 = "_url_vg9yy_116", p0 = "_label_vg9yy_144", Oe = {
  cta: n0,
  arrow: o0,
  animated: s0,
  sm: i0,
  md: a0,
  lg: l0,
  button: c0,
  text: d0,
  url: h0,
  label: p0
}, m0 = {
  sm: 1.5,
  md: 2,
  lg: 2.5
}, k0 = {
  sm: 14,
  md: 16,
  lg: 20
}, u0 = L(
  ({
    variant: r = "button",
    label: t,
    href: n,
    onClick: o,
    icon: s,
    size: l = "md",
    animated: a = !1,
    className: i,
    ...c
  }, p) => {
    const m = [
      Oe.cta,
      Oe[r],
      Oe[l],
      a ? Oe.animated : "",
      i
    ].filter(Boolean).join(" "), h = s === null ? null : s ?? /* @__PURE__ */ e(
      kr,
      {
        className: Oe.arrow,
        size: k0[l],
        strokeWidth: m0[l]
      }
    ), k = /* @__PURE__ */ d(w, { children: [
      /* @__PURE__ */ e("span", { className: Oe.label, children: t }),
      h
    ] });
    return n ? /* @__PURE__ */ e(
      "a",
      {
        ref: p,
        href: n,
        className: m,
        onClick: o,
        ...c,
        children: k
      }
    ) : /* @__PURE__ */ e(
      "button",
      {
        ref: p,
        type: "button",
        className: m,
        onClick: o,
        ...c,
        children: k
      }
    );
  }
);
u0.displayName = "CTA";
const _0 = "_logoTab_hzgyr_6", y0 = "_topLeft_hzgyr_19", g0 = "_bottomRight_hzgyr_24", f0 = "_animatedEntry_hzgyr_31", b0 = "_watermark_hzgyr_68", x0 = "_logo_hzgyr_6", v0 = "_partnerDivider_hzgyr_96", L0 = "_partnerLogo_hzgyr_103", we = {
  logoTab: _0,
  topLeft: y0,
  bottomRight: g0,
  animatedEntry: f0,
  watermark: b0,
  logo: x0,
  partnerDivider: v0,
  partnerLogo: L0
};
function w0({ className: r }) {
  return /* @__PURE__ */ d(
    "svg",
    {
      className: r,
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
const W0 = L(
  ({
    position: r,
    animated: t = !1,
    watermark: n = !1,
    variant: o = "standard",
    partnerLogo: s,
    customLogo: l,
    className: a,
    ...i
  }, c) => {
    const m = (r ?? (t ? "top-left" : "bottom-right")) === "top-left" ? we.topLeft : we.bottomRight, h = [
      we.logoTab,
      m,
      t ? we.animatedEntry : "",
      n ? we.watermark : "",
      a
    ].filter(Boolean).join(" "), k = l ?? /* @__PURE__ */ e(w0, { className: we.logo });
    return /* @__PURE__ */ d("div", { ref: c, className: h, ...i, children: [
      k,
      o === "partnership" && s && /* @__PURE__ */ d(w, { children: [
        /* @__PURE__ */ e("div", { className: we.partnerDivider, "aria-hidden": "true" }),
        /* @__PURE__ */ e("div", { className: we.partnerLogo, children: s })
      ] })
    ] });
  }
);
W0.displayName = "LogoTab";
const Ae = "#FFFFFF", it = "#E60000", Ie = "#000000", St = "#CCCABC", Qe = "#B8B3A2", ct = "#8E8D83", dt = "#7A7870", et = "#5A5D5C", tt = "#404040", Bt = "#BD000C", Mt = "#8A000A", ur = "#620004", _r = "#B98E2C", yr = "#946F29", gr = "#6C5312", Ct = "#ECEBE4", $t = "#F5F0E1", Tt = "#D83B31", Ke = "#FE6F5D", Et = "#BD000C", ht = "#E4A911", pt = "#6F7A1A", fr = "#498100", br = "#C81219", xr = "#BEBEBE", N0 = [
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
], ik = [
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
], ak = [
  ct,
  dt,
  et,
  tt,
  Ie
], lk = {
  White: Ae,
  Red: it,
  Black: Ie,
  "Gray I": St,
  "Gray II": Qe,
  "Gray III": ct,
  "Gray IV": dt,
  "Gray V": et,
  "Gray VI": tt,
  "Bordeaux I": Bt,
  "Bordeaux II": Mt,
  "Bordeaux III": ur,
  "Bronze I": _r,
  "Bronze II": yr,
  "Bronze III": gr,
  "Pastel I": Ct,
  "Pastel II": $t,
  "Dark Mode Primary Red": Tt,
  "Dark Mode Secondary Red": Ke,
  "RAG Red": Et,
  "RAG Amber": ht,
  "RAG Green": pt,
  "Trading Green": fr,
  "Trading Red": br,
  "Metallic Silver": xr
}, ck = "Frutiger", dk = "Arial", hk = '"Frutiger", Arial, sans-serif', pk = {
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
}, mk = {
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
}, kk = {
  /** Minimum accessible font size (10.5pt). */
  minimumFontSizePx: 14,
  /** Recommended body text size (12pt). */
  bodyFontSizePx: 16,
  /** Recommended line height for body text (17pt). */
  bodyLineHeightPx: 22,
  /** Threshold above which text qualifies as "large text" for WCAG contrast. */
  largeTextThresholdPx: 25
}, uk = {
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
}, _k = {
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
}, yk = {
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
}, gk = "#E60000", fk = {
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
}, bk = {
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
}, xk = {
  /** Cap height of first word to baseline of last line. Last line left blank. */
  keylineOnly: "Cap height of first word to baseline of last line. Last line left blank.",
  /** Cap height of first keyline word to baseline of infoline. First infoline line left blank. */
  keylineAndInfoline: "Cap height of first keyline word to baseline of infoline. First infoline line left blank."
}, vk = {
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
}, Lk = {
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
}, wk = {
  /** Default logo placement. */
  standard: "bottom-right",
  /** Alternative logo placement. */
  alternative: "top-left",
  /** Logo must align to the page margin. */
  marginAlignment: "Align to page margin",
  /** Clear space from key to upper/lower edge of format. */
  clearSpace: "Height of Key Symbol (k) from key to upper/lower edge of format"
}, Wk = {
  /** Standard tab position. */
  standard: "bottom-right-aligned",
  /** Alternative tab position. */
  alternative: "top-left-aligned"
}, Nk = {
  /** Minimum clear space around the key symbol. k = height of Key Symbol. */
  clearSpace: "⅓k minimum",
  /** Permitted colours for the key symbol. */
  colours: ["black", "white", "gray"],
  /** Accent colours permitted for the key symbol. */
  accentColours: ["bordeaux", "bronze"]
}, Ak = {
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
}, Ik = {
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
}, Sk = {
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
}, Bk = [
  "coverAndBackPage",
  "insidePage",
  "insidePageWithAdditionalMargin"
], Mk = "full-bleed whenever possible", Ck = [
  "Full bleed with Moving Frame (recommended)",
  "Full bleed with Logo Tab",
  "Vertical two-thirds",
  "Vertical half",
  "Vertical one-thirds",
  "Without image"
], $k = {
  /** Margins should not appear on more than two sides. */
  noMarginOnMoreThanTwoSides: !0,
  /** No frameless white box on layouts. */
  noFramelessWhiteBox: !0,
  /** Images must not originate from another corner. */
  noImageFromAnotherCorner: !0,
  /** No diagonal image cropping. */
  noDiagonalImageCrop: !0
}, Tk = "WCAG 2.2 Level AA", Ek = {
  /** Minimum contrast ratio for standard text against background. */
  text: 4.5,
  /** Minimum contrast ratio for text over 18pt (25 CSS px). */
  largeText: 3,
  /** Minimum contrast ratio for icons and graphic objects against background or adjacent colours. */
  iconsAndGraphics: 3
}, jk = "2px", Rk = {
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
}, Fk = {
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
}, Ok = {
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
}, Pk = {
  /** Desktop contrast checker application. */
  desktop: "Colour Contrast Analyser (Paciello Group)",
  /** Online contrast checker. */
  online: "contrastchecker.com"
}, Dk = {
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
}, qk = [
  "black with red accent",
  "all black"
], zk = {
  /** Don't cram too many ideas into one icon. */
  noTooManyIdeasInOneIcon: !0,
  /** Icons must convey meaning, not be decorative. */
  noDecorativeUsage: !0,
  /** Icon meaning must be immediately clear. */
  noUnclearMeaning: !0,
  /** Icons must not substitute for photographs or illustrations. */
  noSubstitutionOfImages: !0
}, Gk = {
  /** Small icon: 12px. For compact UI elements. */
  small: 12,
  /** Medium icon: 16px. Default functional icon size. */
  medium: 16,
  /** Large icon: 24px. For prominent UI elements. */
  large: 24
}, Uk = "black only", Hk = {
  /** Icons are pixel-perfect. Do not resize from library. */
  noResize: !0,
  /** Keep icons simple and clear. */
  keepSimple: !0,
  /** Open line ends for a light look and optimistic touch. */
  openEnds: !0,
  /** Safe zone applied to balance differently shaped icons. */
  safeZone: !0
}, Vk = {
  /** Red accent appears at the end to underline the message. */
  redAccentAppearance: "at the end to underline the message",
  /** Animation pace: fast with eased movement. */
  pace: "fast with eased movement",
  /** Animation should loop smoothly. */
  loop: "smooth presentation"
}, Zk = [
  "GIF",
  "MP4",
  "MOV with transparency",
  "SVG (static)"
], Yk = {
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
}, Kk = [
  "Black lines with accent Red lines",
  "Black lines with accent Red fill",
  "Black lines, Red accent fill, Black fill",
  "Black lines, Red accent fill, Black and Warm Grays fill"
], Xk = "white", Qk = {
  /** Colour name in the UBS palette. */
  name: "Bordeaux II",
  /** Hex value. */
  hex: "#8A000A",
  /** Target usage as percentage of illustration area. */
  usage: "~10% of illustration. For large/complex illustrations only."
}, Jk = {
  /** 2D animation maintaining flat illustration style. */
  style: "2D animation maintaining flat illustration style",
  /** Natural, human-like movement. No stiffness or cartoonish behaviour. */
  movement: "Natural, human-like. No stiffness or cartoonish.",
  /** Vary speed for realistic movement. */
  easing: "Vary speed for realistic movement",
  /** Subtle effect for hand-drawn charm. */
  boilingLineEffect: "Subtle, for hand-drawn charm"
}, eu = {
  /** Animation must not disrupt the shape of illustrated objects. */
  noDisruptionOfShape: !0,
  /** Movement must not be cartoonish or exaggerated. */
  noCartoonishMovement: !0,
  /** Avoid overcomplicated animation sequences. */
  noOvercomplicatedAnimation: !0,
  /** Only animate elements that are essential to the message. */
  animateOnlyEssential: !0
}, tu = {
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
}, ru = "always 2D", nu = "donut over pie", ou = "#E60000", su = {
  /** Minimum gap for print media. */
  print: "1.5pt",
  /** Minimum gap for screen/digital media. */
  screen: "2px"
}, A0 = {
  description: "Standard. One colour + UBS Red for highlights.",
  usage: "Default for simple charts"
}, I0 = {
  description: "Gray III-VI and Black (up to 5 blocks) + UBS Red for highlights.",
  colours: ["#8E8D83", "#7A7870", "#5A5D5C", "#404040", "#000000"],
  arrangement: "light to dark",
  usage: "Standard for multi-segment charts"
}, S0 = {
  description: "Gray III-VI + Black, Bordeaux I-III, Bronze I-III mixed. Up to 9 blocks.",
  usage: "Extended palette when polychrome insufficient"
}, B0 = {
  description: "20 additional chart colours. Use only when more colours needed and info is equal weight.",
  usage: "Special cases only. Must follow defined sequence order."
}, iu = {
  monochrome: A0,
  polychrome: I0,
  multichrome: S0,
  complex: B0
}, au = {
  /** Visual element used for the insight flag. */
  element: "red arrow",
  /** Purpose of the insight flag. */
  purpose: "Point to an insight with summary in plain language"
}, lu = {
  /** Primary font for data visualisations. */
  primary: "Frutiger Light",
  /** Alternative fonts (use only one per visualisation). */
  alternative: ["Frutiger Bold", "Frutiger Light Condensed"],
  /** Never mix font weights within one visualisation. */
  rule: "Don't mix within one visualisation"
}, cu = {
  /** Line weight ratio for icons and arrows. */
  ratio: "1:2",
  /** Maximum arrow angle. */
  arrowAngle: "maximum 90 degrees",
  /** Divider lines must have sufficient contrast against chart lines. */
  sufficientContrastBetweenDividerAndChartLines: !0
}, du = [
  "colour",
  "contrast",
  "stroke contrast",
  "scale",
  "proximity",
  "negative space",
  "repetition",
  "dashed/dotted lines",
  "big numbers"
], hu = {
  /** Changes of acceleration for realism. No abrupt starts/stops. */
  easing: "Changes of acceleration for realism. No abrupt starts/stops.",
  /** Straight, concise paths. No curved/organic motion. */
  direction: "Straight, concise paths. No curved/organic.",
  /** Transitions add meaning, not embellishment. Opacity, scale, colour, position. */
  transitions: "Add meaning, not embellishment. Opacity, scale, colour, position.",
  /** Consistent timing. Define smallest duration and multiply. */
  pace: "Consistent timing. Define smallest duration and multiply."
}, pu = {
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
}, mu = [
  "solid",
  "outline",
  "solid animated",
  "outline animated"
], ku = {
  /** Always measure against the short side of the format. */
  description: "Always measure against the short side of the format.",
  /** Maximum pattern element size: 3h (h = height of base element). */
  maximum: "3h",
  /** Minimum pattern element size: ⅓h. */
  minimum: "⅓h"
}, M0 = [
  ["#FFFFFF", "#ECEBE4"],
  ["#ECEBE4", "#CCCABC"],
  ["#CCCABC", "#B8B3A2"],
  ["#B8B3A2", "#8E8D83"],
  ["#8E8D83", "#7A7870"],
  ["#7A7870", "#5A5D5C"],
  ["#5A5D5C", "#404040"]
], C0 = [
  ["#E60000", "#BD000C"],
  ["#BD000C", "#8A000A"],
  ["#8A000A", "#620004"]
], $0 = [
  ["#FFFFFF", "#F5F0E1"],
  ["#B98E2C", "#946F29"],
  ["#946F29", "#6C5312"]
], uu = {
  gray: M0,
  bordeaux: C0,
  bronze: $0
}, _u = {
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
}, yu = {
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
}, gu = {
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
}, fu = {
  /** Logo position for static posts. */
  logoPosition: "right-aligned Logo Tab (bottom-right corner)",
  /** No logo on gallery uploads where cropped in preview. */
  logoOnGallery: "No logo on gallery uploads where cropped in preview",
  /** Logo on first and last image of slider content. */
  logoOnSlider: "Logo on first and last image"
}, bu = {
  /** Logo position for animated content. */
  logoPosition: "left-aligned Logo Tab animation with watermark (top-left corner)",
  /** Logo outro with sound per motion design guidelines. */
  logoOutro: "Logo outro with sound per motion design guidelines"
}, xu = {
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
}, vu = {
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
}, Lu = [
  "Square 1:1",
  "Portrait 4:5",
  "Vertical 9:16",
  "Wide 16:9"
], wu = {
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
}, Wu = {
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
}, Nu = {
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
}, Au = [
  "E major",
  "C major",
  "D major",
  "G major",
  "A major"
], Iu = [
  "C# minor",
  "A minor",
  "B minor",
  "E minor",
  "F# minor"
], Su = "Never modify sound logos. They are finalised assets.", Bu = {
  /** Gap between end of preceding audio and start of sound logo. */
  gapAfterAudio: "0-350ms after music/background/voice-over ends",
  /** Let previous audio fade naturally, no abrupt cuts. */
  fadeOut: "Let previous audio fade naturally, no abrupt cuts"
}, Mu = {
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
}, Cu = {
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
}, $u = {
  /** Available durations. */
  lengths: ["17s", "60s", "78s"],
  /** Primary usage context. */
  usage: "Podcast intros, branded assets requiring longer UBS sound",
  /** Licensing terms. */
  license: "Global usage rights, limitless in time, all media"
}, Tu = {
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
}, Eu = [
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
], ju = [
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
], Ru = "1-2 punch: big catchy keyline + smaller informative infoline", Fu = {
  /** Red highlighting in infoline/keyline no longer permitted for accessibility. */
  noRedHighlightInMessages: !0
}, Pe = {
  mobile: 320,
  tablet: 768,
  desktop: 1024,
  wide: 1440
}, vr = {
  mobile: `(min-width: ${Pe.mobile}px)`,
  tablet: `(min-width: ${Pe.tablet}px)`,
  desktop: `(min-width: ${Pe.desktop}px)`,
  wide: `(min-width: ${Pe.wide}px)`
}, Lr = [0, 4, 8, 12, 16, 24, 32, 48, 64, 96], wr = {
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
}, T0 = {
  primary: "'Frutiger', 'Frutiger Neue', Arial, Helvetica, sans-serif",
  mono: "'Frutiger Mono', 'SF Mono', 'Fira Code', 'Fira Mono', monospace"
}, E0 = {
  light: 300,
  regular: 400,
  medium: 500,
  bold: 700
}, j0 = {
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
}, R0 = {
  /** Body text: 22px at 16px font */
  body: 1.375,
  /** Tight for headings */
  heading: 1.2,
  /** Comfortable for large text */
  relaxed: 1.5,
  /** Single line / buttons */
  none: 1
}, Wr = {
  fontFamily: T0,
  fontWeight: E0,
  fontSize: j0,
  lineHeight: R0
}, Nr = {
  corporate: {
    white: Ae,
    red: it,
    black: Ie
  },
  gray: {
    i: St,
    ii: Qe,
    iii: ct,
    iv: dt,
    v: et,
    vi: tt
  },
  bordeaux: {
    i: Bt,
    ii: Mt,
    iii: ur
  },
  bronze: {
    i: _r,
    ii: yr,
    iii: gr
  },
  pastel: {
    i: Ct,
    ii: $t
  },
  darkMode: {
    primaryRed: Tt,
    secondaryRed: Ke
  },
  rag: {
    red: Et,
    amber: ht,
    green: pt
  },
  trading: {
    green: fr,
    red: br
  },
  metallic: {
    silver: xr
  },
  chart: N0
}, F0 = {
  text: {
    primary: Ie,
    secondary: et,
    tertiary: dt,
    inverse: Ae,
    link: it,
    error: Et,
    warning: ht,
    success: pt
  },
  background: {
    primary: Ae,
    secondary: Ct,
    tertiary: $t,
    inverse: Ie
  },
  border: {
    primary: Qe,
    secondary: St,
    focus: Ie
  },
  interactive: {
    primary: it,
    primaryHover: Bt,
    primaryActive: Mt,
    secondary: Ie,
    secondaryHover: tt
  }
}, O0 = {
  text: {
    primary: Ae,
    secondary: Qe,
    tertiary: ct,
    inverse: Ie,
    link: Ke,
    error: Ke,
    warning: ht,
    success: pt
  },
  background: {
    primary: "#1A1A1A",
    secondary: "#2A2A2A",
    tertiary: "#333333",
    inverse: Ae
  },
  border: {
    primary: et,
    secondary: tt,
    focus: Ae
  },
  interactive: {
    primary: Tt,
    primaryHover: Ke,
    primaryActive: "#FF8A7A",
    secondary: Ae,
    secondaryHover: Qe
  }
}, Ar = {
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
}, Ir = {
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
}, Sr = {
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
}, Br = {
  base: 0,
  dropdown: 100,
  sticky: 200,
  overlay: 300,
  modal: 400,
  popover: 500,
  toast: 600,
  tooltip: 700
}, Mr = {
  colours: Nr,
  semantic: F0,
  typography: Wr,
  spacing: wr,
  spacingScale: Lr,
  breakpoints: Pe,
  mediaQueries: vr,
  layout: Ar,
  accessibility: Ir,
  transitions: Sr,
  zIndex: Br,
  isDarkMode: !1
}, P0 = {
  colours: Nr,
  semantic: O0,
  typography: Wr,
  spacing: wr,
  spacingScale: Lr,
  breakpoints: Pe,
  mediaQueries: vr,
  layout: Ar,
  accessibility: Ir,
  transitions: Sr,
  zIndex: Br,
  isDarkMode: !0
}, Ou = Mr, jt = rr(null);
jt.displayName = "UBSThemeContext";
function D0() {
  return typeof window > "u" ? !1 : window.matchMedia("(prefers-color-scheme: dark)").matches;
}
function q0(r) {
  if (typeof document > "u") return;
  const t = document.documentElement, { semantic: n, spacing: o, typography: s, layout: l, transitions: a, zIndex: i } = r;
  t.style.setProperty("--ubs-color-text-primary", n.text.primary), t.style.setProperty("--ubs-color-text-secondary", n.text.secondary), t.style.setProperty("--ubs-color-text-tertiary", n.text.tertiary), t.style.setProperty("--ubs-color-text-inverse", n.text.inverse), t.style.setProperty("--ubs-color-text-link", n.text.link), t.style.setProperty("--ubs-color-text-error", n.text.error), t.style.setProperty("--ubs-color-text-warning", n.text.warning), t.style.setProperty("--ubs-color-text-success", n.text.success), t.style.setProperty("--ubs-color-bg-primary", n.background.primary), t.style.setProperty("--ubs-color-bg-secondary", n.background.secondary), t.style.setProperty("--ubs-color-bg-tertiary", n.background.tertiary), t.style.setProperty("--ubs-color-bg-inverse", n.background.inverse), t.style.setProperty("--ubs-color-border-primary", n.border.primary), t.style.setProperty("--ubs-color-border-secondary", n.border.secondary), t.style.setProperty("--ubs-color-border-focus", n.border.focus), t.style.setProperty("--ubs-color-interactive-primary", n.interactive.primary), t.style.setProperty("--ubs-color-interactive-primary-hover", n.interactive.primaryHover), t.style.setProperty("--ubs-color-interactive-primary-active", n.interactive.primaryActive), t.style.setProperty("--ubs-color-interactive-secondary", n.interactive.secondary), t.style.setProperty("--ubs-color-interactive-secondary-hover", n.interactive.secondaryHover), t.style.setProperty("--ubs-color-red", r.colours.corporate.red), t.style.setProperty("--ubs-color-black", r.colours.corporate.black), t.style.setProperty("--ubs-color-white", r.colours.corporate.white), Object.entries(o).forEach(([c, p]) => {
    t.style.setProperty(`--ubs-spacing-${c}`, `${p}px`);
  }), t.style.setProperty("--ubs-font-family-primary", s.fontFamily.primary), t.style.setProperty("--ubs-font-family-mono", s.fontFamily.mono), t.style.setProperty("--ubs-font-weight-light", String(s.fontWeight.light)), t.style.setProperty("--ubs-font-weight-regular", String(s.fontWeight.regular)), t.style.setProperty("--ubs-font-weight-medium", String(s.fontWeight.medium)), t.style.setProperty("--ubs-font-weight-bold", String(s.fontWeight.bold)), t.style.setProperty("--ubs-font-size-body", `${s.fontSize.body}px`), t.style.setProperty("--ubs-font-size-min", `${s.fontSize.min}px`), t.style.setProperty("--ubs-line-height-body", String(s.lineHeight.body)), t.style.setProperty("--ubs-line-height-heading", String(s.lineHeight.heading)), t.style.setProperty("--ubs-layout-max-width", `${l.maxWidth}px`), Object.entries(l.borderRadius).forEach(([c, p]) => {
    t.style.setProperty(`--ubs-radius-${c}`, p === 9999 ? "9999px" : `${p}px`);
  }), Object.entries(a.duration).forEach(([c, p]) => {
    t.style.setProperty(`--ubs-duration-${c}`, p);
  }), Object.entries(a.easing).forEach(([c, p]) => {
    t.style.setProperty(`--ubs-easing-${c}`, p);
  }), Object.entries(i).forEach(([c, p]) => {
    t.style.setProperty(`--ubs-z-${c}`, String(p));
  }), t.setAttribute("data-ubs-theme", r.isDarkMode ? "dark" : "light");
}
function Pu({
  children: r,
  defaultColourMode: t = "system",
  theme: n
}) {
  const [o, s] = T(() => t === "system" ? D0() : t === "dark");
  G(() => {
    if (t !== "system" || typeof window > "u") return;
    const p = window.matchMedia("(prefers-color-scheme: dark)"), m = (h) => s(h.matches);
    return p.addEventListener("change", m), () => p.removeEventListener("change", m);
  }, [t]);
  const l = C(() => {
    s((p) => !p);
  }, []), a = C((p) => {
    s(p);
  }, []), i = n ?? (o ? P0 : Mr);
  G(() => {
    q0(i);
  }, [i]);
  const c = ce(
    () => ({
      theme: i,
      isDarkMode: o,
      toggleDarkMode: l,
      setDarkMode: a,
      colourMode: o ? "dark" : "light"
    }),
    [i, o, l, a]
  );
  return /* @__PURE__ */ e(jt.Provider, { value: c, children: r });
}
function Du() {
  const r = tr(jt);
  if (!r)
    throw new Error(
      "useUBSTheme must be used within a <UBSThemeProvider>. Wrap your application in <UBSThemeProvider> to use UBS theme hooks."
    );
  return r;
}
const bt = "ubs-design-system-global-styles", Cr = `
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
function qu() {
  return G(() => {
    if (typeof document > "u" || document.getElementById(bt)) return;
    const r = document.createElement("style");
    return r.id = bt, r.textContent = Cr, document.head.appendChild(r), () => {
      const t = document.getElementById(bt);
      t && t.remove();
    };
  }, []), null;
}
const zu = Cr, Vt = "(prefers-color-scheme: dark)";
function Gu() {
  const [r, t] = T(() => typeof window > "u" ? !1 : window.matchMedia(Vt).matches);
  return G(() => {
    if (typeof window > "u") return;
    const n = window.matchMedia(Vt), o = (s) => {
      t(s.matches);
    };
    return t(n.matches), n.addEventListener("change", o), () => n.removeEventListener("change", o);
  }, []), r;
}
function Zt(r) {
  let t = r.replace("#", "");
  (t.length === 3 || t.length === 4) && (t = t.split("").map((l) => l + l).join(""));
  const n = parseInt(t.substring(0, 2), 16), o = parseInt(t.substring(2, 4), 16), s = parseInt(t.substring(4, 6), 16);
  if (isNaN(n) || isNaN(o) || isNaN(s))
    throw new Error(`Invalid hex colour: ${r}`);
  return { r: n, g: o, b: s };
}
function xt(r) {
  const t = r / 255;
  return t <= 0.04045 ? t / 12.92 : Math.pow((t + 0.055) / 1.055, 2.4);
}
function Yt(r) {
  const t = xt(r.r), n = xt(r.g), o = xt(r.b);
  return 0.2126 * t + 0.7152 * n + 0.0722 * o;
}
function z0(r, t) {
  const n = Math.max(r, t), o = Math.min(r, t);
  return (n + 0.05) / (o + 0.05);
}
const Kt = 4.5, Xt = 3, G0 = 3;
function U0(r, t) {
  const n = Zt(r), o = Zt(t), s = Yt(n), l = Yt(o), a = z0(s, l), i = Math.round(a * 100) / 100, c = a >= Kt, p = a >= Xt, m = a >= G0;
  let h;
  return a >= 7 ? h = "AAA" : a >= Kt ? h = "AA" : a >= Xt ? h = "AA-large" : h = "fail", {
    ratio: i,
    ratioString: `${i}:1`,
    passesNormalText: c,
    passesLargeText: p,
    passesGraphics: m,
    foreground: r,
    background: t,
    level: h
  };
}
function Uu(r, t) {
  return ce(
    () => U0(r, t),
    [r, t]
  );
}
const ke = 100, D = {
  /** 100ms — micro-interactions, instant feedback */
  fast: ke,
  /** 200ms — fade, scale, standard transitions */
  normal: ke * 2,
  /** 300ms — slide, medium complexity */
  slow: ke * 3,
  /** 400ms — impulse reveal */
  impulse: ke * 4,
  /** 500ms — logo tab, complex reveals */
  complex: ke * 5,
  /** 600ms — moving frame, spring-based */
  spring: ke * 6,
  /** 1500ms — shimmer loop */
  shimmer: ke * 15,
  /** 1000ms — spinner rotation */
  spin: ke * 10,
  /** 2000ms — gentle pulse */
  pulse: ke * 20
}, q = {
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
}, Qt = {
  fadeIn: "fadeOut",
  slideInUp: "slideOutUp",
  slideInDown: "slideOutDown",
  slideInLeft: "slideOutLeft",
  slideInRight: "slideOutRight",
  scaleIn: "scaleOut"
}, Rt = {
  fadeIn: {
    keyframes: "ubs-fadeIn",
    duration: D.normal,
    easing: q.standard,
    fillMode: "both",
    iterations: 1,
    direction: "normal"
  },
  fadeOut: {
    keyframes: "ubs-fadeOut",
    duration: D.normal,
    easing: q.standard,
    fillMode: "both",
    iterations: 1,
    direction: "normal"
  },
  slideInUp: {
    keyframes: "ubs-slideInUp",
    duration: D.slow,
    easing: q.standard,
    fillMode: "both",
    iterations: 1,
    direction: "normal"
  },
  slideInDown: {
    keyframes: "ubs-slideInDown",
    duration: D.slow,
    easing: q.standard,
    fillMode: "both",
    iterations: 1,
    direction: "normal"
  },
  slideInLeft: {
    keyframes: "ubs-slideInLeft",
    duration: D.slow,
    easing: q.standard,
    fillMode: "both",
    iterations: 1,
    direction: "normal"
  },
  slideInRight: {
    keyframes: "ubs-slideInRight",
    duration: D.slow,
    easing: q.standard,
    fillMode: "both",
    iterations: 1,
    direction: "normal"
  },
  slideOutUp: {
    keyframes: "ubs-slideOutUp",
    duration: D.slow,
    easing: q.standard,
    fillMode: "both",
    iterations: 1,
    direction: "normal"
  },
  slideOutDown: {
    keyframes: "ubs-slideOutDown",
    duration: D.slow,
    easing: q.standard,
    fillMode: "both",
    iterations: 1,
    direction: "normal"
  },
  slideOutLeft: {
    keyframes: "ubs-slideOutLeft",
    duration: D.slow,
    easing: q.standard,
    fillMode: "both",
    iterations: 1,
    direction: "normal"
  },
  slideOutRight: {
    keyframes: "ubs-slideOutRight",
    duration: D.slow,
    easing: q.standard,
    fillMode: "both",
    iterations: 1,
    direction: "normal"
  },
  scaleIn: {
    keyframes: "ubs-scaleIn",
    duration: D.normal,
    easing: q.standard,
    fillMode: "both",
    iterations: 1,
    direction: "normal"
  },
  scaleOut: {
    keyframes: "ubs-scaleOut",
    duration: D.normal,
    easing: q.standard,
    fillMode: "both",
    iterations: 1,
    direction: "normal"
  },
  revealImpulse: {
    keyframes: "ubs-revealImpulse",
    duration: D.impulse,
    easing: q.impulse,
    fillMode: "both",
    iterations: 1,
    direction: "normal"
  },
  logoTabIn: {
    keyframes: "ubs-logoTabIn",
    duration: D.complex,
    easing: q.impulse,
    fillMode: "both",
    iterations: 1,
    direction: "normal"
  },
  movingFrameReveal: {
    keyframes: "ubs-movingFrameReveal",
    duration: D.spring,
    easing: q.impulse,
    fillMode: "both",
    iterations: 1,
    direction: "normal"
  },
  shimmer: {
    keyframes: "ubs-shimmer",
    duration: D.shimmer,
    easing: q.linear,
    fillMode: "none",
    iterations: 1 / 0,
    direction: "normal"
  },
  spin: {
    keyframes: "ubs-spin",
    duration: D.spin,
    easing: q.linear,
    fillMode: "none",
    iterations: 1 / 0,
    direction: "normal"
  },
  pulse: {
    keyframes: "ubs-pulse",
    duration: D.pulse,
    easing: q.standard,
    fillMode: "none",
    iterations: 1 / 0,
    direction: "normal"
  },
  contentFadeIn: {
    keyframes: "ubs-contentFadeIn",
    duration: D.normal,
    easing: q.standard,
    fillMode: "both",
    iterations: 1,
    direction: "normal"
  }
};
function Hu(r, t = 0, n = 50) {
  return Array.from({ length: r }, (o, s) => t + s * n);
}
function Jt(r, t) {
  const n = Rt[r], o = (t == null ? void 0 : t.duration) ?? n.duration, s = (t == null ? void 0 : t.easing) ?? n.easing, l = (t == null ? void 0 : t.delay) ?? 0, a = n.iterations === 1 / 0 ? "infinite" : n.iterations;
  return `${n.keyframes} ${o}ms ${s} ${l}ms ${n.fillMode} ${a} ${n.direction}`;
}
function Vu(r, t, n = {}) {
  const {
    duration: o,
    delay: s = 0,
    easing: l,
    autoPlay: a = !0,
    onFinish: i,
    onCancel: c,
    respectReducedMotion: p = !0
  } = n, [m, h] = T(!1), k = V(null), u = Rt[t], y = o ?? u.duration, _ = l ?? u.easing, g = C(() => !p || typeof window > "u" ? !1 : window.matchMedia("(prefers-reduced-motion: reduce)").matches, [p]), v = C(() => {
    const B = g() ? 0 : y;
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
      }[u.keyframes] ?? [{ opacity: 0 }, { opacity: 1 }],
      options: {
        duration: B,
        delay: s,
        easing: _,
        fill: u.fillMode,
        iterations: u.iterations,
        direction: u.direction
      }
    };
  }, [u, y, _, s, g]), b = C(() => {
    const B = r.current;
    if (!B) return;
    k.current && k.current.cancel();
    const { keyframes: A, options: f } = v(), M = B.animate(A, f);
    k.current = M, h(!0), M.onfinish = () => {
      h(!1), i == null || i();
    }, M.oncancel = () => {
      h(!1), c == null || c();
    };
  }, [r, v, i, c]), x = C(() => {
    var B;
    (B = k.current) == null || B.pause();
  }, []), N = C(() => {
    k.current && (k.current.cancel(), k.current = null), h(!1);
  }, []);
  return G(() => (a && b(), () => {
    var B;
    (B = k.current) == null || B.cancel();
  }), [a, b]), { isAnimating: m, play: b, pause: x, reset: N };
}
function H0({
  animation: r = "fadeIn",
  exitAnimation: t,
  duration: n,
  delay: o = 0,
  stagger: s = 50,
  respectReducedMotion: l = !0,
  children: a
}) {
  const [i, c] = T(!1), [p, m] = T(!1), h = vt.count(a) > 0, k = V(h), u = V(null), y = l && typeof window < "u" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (G(() => {
    if (h)
      m(!0), requestAnimationFrame(() => {
        c(!0);
      });
    else if (k.current && !h)
      if (c(!1), y)
        m(!1);
      else {
        const b = t ?? Qt[r], x = b ? n ?? Rt[b].duration : 0, N = setTimeout(() => {
          m(!1);
        }, x + o);
        return () => clearTimeout(N);
      }
    k.current = h;
  }, [h, r, t, n, o, y]), !p) return null;
  const _ = t ?? Qt[r], g = i ? r : _;
  if (!g)
    return /* @__PURE__ */ e(w, { children: a });
  if (y)
    return /* @__PURE__ */ e(w, { children: a });
  const v = vt.toArray(a).filter(er);
  if (v.length === 0) return null;
  if (v.length === 1) {
    const b = Jt(g, {
      duration: n,
      delay: o
    }), x = v[0];
    return /* @__PURE__ */ e(
      "div",
      {
        ref: u,
        style: { animation: b },
        children: x
      }
    );
  }
  return /* @__PURE__ */ e("div", { ref: u, children: v.map((b, x) => {
    const N = o + x * s, B = Jt(g, {
      duration: n,
      delay: N
    });
    return /* @__PURE__ */ e(
      "div",
      {
        style: {
          animation: B,
          // Start invisible for enter animations, visible for exit
          opacity: void 0
        },
        children: b
      },
      b.key ?? x
    );
  }) });
}
H0.displayName = "AnimatePresence";
const V0 = "_sidebar_1j4mj_3", Z0 = "_collapsed_1j4mj_16", Y0 = "_toggleButton_1j4mj_22", K0 = "_toggleIcon_1j4mj_46", X0 = "_nav_1j4mj_52", Q0 = "_navList_1j4mj_58", J0 = "_navItem_1j4mj_66", e2 = "_navItemActive_1j4mj_95", t2 = "_navItemIcon_1j4mj_110", r2 = "_navItemLabel_1j4mj_121", ae = {
  sidebar: V0,
  collapsed: Z0,
  toggleButton: Y0,
  toggleIcon: K0,
  nav: X0,
  navList: Q0,
  navItem: J0,
  navItemActive: e2,
  navItemIcon: t2,
  navItemLabel: r2
}, $r = L(
  ({ items: r, collapsed: t = !1, onToggle: n, className: o, ...s }, l) => {
    const a = [
      ae.sidebar,
      t ? ae.collapsed : "",
      o ?? ""
    ].filter(Boolean).join(" ");
    return /* @__PURE__ */ d("aside", { ref: l, className: a, "aria-label": "Sidebar navigation", ...s, children: [
      /* @__PURE__ */ e(
        "button",
        {
          type: "button",
          className: ae.toggleButton,
          onClick: n,
          "aria-label": t ? "Expand sidebar" : "Collapse sidebar",
          children: /* @__PURE__ */ e("span", { className: ae.toggleIcon, "aria-hidden": "true", children: t ? "›" : "‹" })
        }
      ),
      /* @__PURE__ */ e("nav", { className: ae.nav, children: /* @__PURE__ */ e("ul", { className: ae.navList, children: r.map((i) => {
        const c = [
          ae.navItem,
          i.active ? ae.navItemActive : ""
        ].filter(Boolean).join(" ");
        return /* @__PURE__ */ e("li", { children: /* @__PURE__ */ d(
          "a",
          {
            href: i.href,
            className: c,
            "aria-current": i.active ? "page" : void 0,
            title: t ? i.label : void 0,
            children: [
              i.icon && /* @__PURE__ */ e("span", { className: ae.navItemIcon, children: i.icon }),
              !t && /* @__PURE__ */ e("span", { className: ae.navItemLabel, children: i.label }),
              i.badge && !t && /* @__PURE__ */ e(Wt, { variant: "red", size: "sm", children: i.badge })
            ]
          }
        ) }, i.href);
      }) }) })
    ] });
  }
);
$r.displayName = "Sidebar";
const n2 = "_footer_zhdgs_3", o2 = "_inner_zhdgs_10", s2 = "_top_zhdgs_18", i2 = "_logoArea_zhdgs_25", a2 = "_linkColumns_zhdgs_32", l2 = "_linkGroup_zhdgs_39", c2 = "_groupTitle_zhdgs_43", d2 = "_linkList_zhdgs_51", h2 = "_link_zhdgs_32", p2 = "_bottom_zhdgs_82", m2 = "_copyright_zhdgs_86", te = {
  footer: n2,
  inner: o2,
  top: s2,
  logoArea: i2,
  linkColumns: a2,
  linkGroup: l2,
  groupTitle: c2,
  linkList: d2,
  link: h2,
  bottom: p2,
  copyright: m2
}, Tr = L(
  ({ links: r = [], copyright: t, showLogo: n = !0, className: o, ...s }, l) => {
    const a = [te.footer, o ?? ""].filter(Boolean).join(" ");
    return /* @__PURE__ */ e("footer", { ref: l, className: a, ...s, children: /* @__PURE__ */ d("div", { className: te.inner, children: [
      /* @__PURE__ */ d("div", { className: te.top, children: [
        n && /* @__PURE__ */ e("div", { className: te.logoArea, children: /* @__PURE__ */ e(qe, { variant: "full", colour: "black", size: 100 }) }),
        r.length > 0 && /* @__PURE__ */ e("div", { className: te.linkColumns, children: r.map((i) => /* @__PURE__ */ d("div", { className: te.linkGroup, children: [
          /* @__PURE__ */ e("h3", { className: te.groupTitle, children: i.group }),
          /* @__PURE__ */ e("ul", { className: te.linkList, children: i.items.map((c) => /* @__PURE__ */ e("li", { children: /* @__PURE__ */ e("a", { href: c.href, className: te.link, children: c.label }) }, c.href)) })
        ] }, i.group)) })
      ] }),
      t && /* @__PURE__ */ e("div", { className: te.bottom, children: /* @__PURE__ */ e("p", { className: te.copyright, children: t }) })
    ] }) });
  }
);
Tr.displayName = "Footer";
const k2 = "_dashboard_d1qee_3", u2 = "_navbarActions_d1qee_13", _2 = "_notificationBadge_d1qee_19", y2 = "_userName_d1qee_24", g2 = "_body_d1qee_39", f2 = "_mobileMenuButton_d1qee_47", b2 = "_sidebarWrapper_d1qee_79", x2 = "_sidebarOpen_d1qee_94", v2 = "_sidebarOverlay_d1qee_98", L2 = "_main_d1qee_108", w2 = "_pageTitle_d1qee_115", W2 = "_statsSection_d1qee_125", N2 = "_statCard_d1qee_129", A2 = "_chartsSection_d1qee_138", I2 = "_chartCard_d1qee_142", S2 = "_activitySection_d1qee_151", B2 = "_sectionTitle_d1qee_159", H = {
  dashboard: k2,
  navbarActions: u2,
  notificationBadge: _2,
  userName: y2,
  body: g2,
  mobileMenuButton: f2,
  sidebarWrapper: b2,
  sidebarOpen: x2,
  sidebarOverlay: v2,
  main: L2,
  pageTitle: w2,
  statsSection: W2,
  statCard: N2,
  chartsSection: A2,
  chartCard: I2,
  activitySection: S2,
  sectionTitle: B2
}, M2 = L(
  ({
    title: r,
    user: t,
    stats: n = [],
    charts: o = [],
    recentActivity: s,
    notifications: l,
    sidebarItems: a = [],
    navItems: i = [],
    primaryAction: c,
    secondaryAction: p,
    className: m,
    ...h
  }, k) => {
    const [u, y] = T(!1), [_, g] = T(!1), v = C(() => {
      y((N) => !N);
    }, []), b = C(() => {
      g((N) => !N);
    }, []), x = [H.dashboard, m ?? ""].filter(Boolean).join(" ");
    return /* @__PURE__ */ d("div", { ref: k, className: x, ...h, children: [
      /* @__PURE__ */ e(
        j1,
        {
          logo: /* @__PURE__ */ e(qe, { variant: "full", colour: "black", size: 80 }),
          items: i,
          sticky: !0,
          actions: /* @__PURE__ */ d("div", { className: H.navbarActions, children: [
            l && l.count > 0 && /* @__PURE__ */ e("span", { className: H.notificationBadge, children: /* @__PURE__ */ e(Wt, { variant: "red", size: "sm", children: l.count }) }),
            /* @__PURE__ */ e("span", { className: H.userName, children: t.name }),
            /* @__PURE__ */ e(
              lr,
              {
                name: t.name,
                src: t.avatar,
                size: "sm"
              }
            )
          ] })
        }
      ),
      /* @__PURE__ */ d("div", { className: H.body, children: [
        /* @__PURE__ */ e(
          "button",
          {
            type: "button",
            className: H.mobileMenuButton,
            onClick: b,
            "aria-label": "Toggle sidebar",
            children: "☰"
          }
        ),
        a.length > 0 && /* @__PURE__ */ d(w, { children: [
          _ && // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
          /* @__PURE__ */ e(
            "div",
            {
              className: H.sidebarOverlay,
              onClick: b,
              "aria-hidden": "true"
            }
          ),
          /* @__PURE__ */ e("div", { className: `${H.sidebarWrapper} ${_ ? H.sidebarOpen : ""}`, children: /* @__PURE__ */ e(
            $r,
            {
              items: a,
              collapsed: u,
              onToggle: v
            }
          ) })
        ] }),
        /* @__PURE__ */ d("main", { className: H.main, children: [
          /* @__PURE__ */ e("h1", { className: H.pageTitle, children: r }),
          n.length > 0 && /* @__PURE__ */ e("section", { className: H.statsSection, "aria-label": "Key statistics", children: /* @__PURE__ */ e(De, { columns: { mobile: 1, tablet: 2, desktop: 4 }, gap: "medium", children: n.map((N, B) => /* @__PURE__ */ e("div", { className: H.statCard, children: /* @__PURE__ */ e(Nt, { ...N }) }, B)) }) }),
          o.length > 0 && /* @__PURE__ */ e("section", { className: H.chartsSection, "aria-label": "Charts", children: /* @__PURE__ */ e(
            De,
            {
              columns: { mobile: 1, tablet: 1, desktop: Math.min(o.length, 3) },
              gap: "medium",
              children: o.map((N, B) => /* @__PURE__ */ e("div", { className: H.chartCard, children: /* @__PURE__ */ e(ir, { ...N }) }, B))
            }
          ) }),
          s && s.items.length > 0 && /* @__PURE__ */ d("section", { className: H.activitySection, "aria-label": "Recent activity", children: [
            /* @__PURE__ */ e("h2", { className: H.sectionTitle, children: "Recent Activity" }),
            /* @__PURE__ */ e(
              cr,
              {
                items: s.items,
                variant: "divided",
                hoverable: !0
              }
            )
          ] }),
          c && /* @__PURE__ */ e(
            lt,
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
M2.displayName = "DashboardTemplate";
const C2 = "_formPage_ci19d_3", $2 = "_alertWrapper_ci19d_11", T2 = "_form_ci19d_3", E2 = "_fieldGrid_ci19d_27", Ve = {
  formPage: C2,
  alertWrapper: $2,
  form: T2,
  fieldGrid: E2
}, j2 = L(
  ({
    title: r,
    subtitle: t,
    breadcrumbs: n,
    sections: o,
    onSubmit: s,
    onCancel: l,
    loading: a = !1,
    submitLabel: i = "Submit",
    cancelLabel: c = "Cancel",
    className: p,
    ...m
  }, h) => {
    const [k, u] = T(() => {
      const f = {};
      return o.forEach((M) => {
        M.fields.forEach((I) => {
          I.defaultValue !== void 0 ? f[I.name] = I.defaultValue : f[I.name] = I.type === "checkbox" ? !1 : "";
        });
      }), f;
    }), [y, _] = T({}), [g, v] = T(null), b = C((f, M) => {
      u((I) => ({ ...I, [f]: M })), _((I) => {
        if (I[f]) {
          const R = { ...I };
          return delete R[f], R;
        }
        return I;
      });
    }, []), x = C(() => {
      const f = {};
      return o.forEach((M) => {
        M.fields.forEach((I) => {
          if (I.required) {
            const R = k[I.name];
            (R === "" || R === void 0 || R === !1) && (f[I.name] = `${I.label} is required`);
          }
          if (I.type === "email" && k[I.name]) {
            const R = String(k[I.name]);
            R && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(R) && (f[I.name] = "Please enter a valid email address");
          }
        });
      }), _(f), Object.keys(f).length === 0;
    }, [o, k]), N = C(
      (f) => {
        if (f.preventDefault(), v(null), x())
          try {
            s(k);
          } catch (M) {
            v(M instanceof Error ? M.message : "An error occurred");
          }
      },
      [x, s, k]
    ), B = (f) => {
      const M = y[f.name];
      switch (f.type) {
        case "select":
          return /* @__PURE__ */ e(
            At,
            {
              label: f.label,
              options: f.options ?? [],
              value: String(k[f.name] ?? ""),
              onChange: (I) => b(f.name, I.target.value),
              placeholder: f.placeholder,
              required: f.required,
              error: M,
              helperText: f.helperText
            },
            f.name
          );
        case "textarea":
          return /* @__PURE__ */ e(
            hr,
            {
              label: f.label,
              value: String(k[f.name] ?? ""),
              onChange: (I) => b(f.name, I.target.value),
              placeholder: f.placeholder,
              required: f.required,
              error: M,
              helperText: f.helperText
            },
            f.name
          );
        case "checkbox":
          return /* @__PURE__ */ e(
            pr,
            {
              label: f.label,
              checked: !!k[f.name],
              onChange: (I) => b(f.name, I.target.checked)
            },
            f.name
          );
        default:
          return /* @__PURE__ */ e(
            st,
            {
              type: f.type,
              label: f.label,
              value: String(k[f.name] ?? ""),
              onChange: (I) => b(f.name, I.target.value),
              placeholder: f.placeholder,
              required: f.required,
              error: M,
              helperText: f.helperText
            },
            f.name
          );
      }
    }, A = [Ve.formPage, p ?? ""].filter(Boolean).join(" ");
    return /* @__PURE__ */ d("div", { ref: h, className: A, ...m, children: [
      /* @__PURE__ */ e(
        at,
        {
          title: r,
          subtitle: t,
          breadcrumbs: n,
          variant: "impulse"
        }
      ),
      g && /* @__PURE__ */ e("div", { className: Ve.alertWrapper, children: /* @__PURE__ */ e(Lt, { variant: "error", children: g }) }),
      /* @__PURE__ */ d("form", { onSubmit: N, noValidate: !0, className: Ve.form, children: [
        o.map((f, M) => /* @__PURE__ */ e(
          It,
          {
            title: f.title,
            subtitle: f.description,
            padding: "lg",
            children: /* @__PURE__ */ e("div", { className: Ve.fieldGrid, children: f.fields.map(B) })
          },
          M
        )),
        /* @__PURE__ */ e(
          lt,
          {
            primaryAction: {
              label: a ? "Submitting..." : i,
              onClick: () => {
                const f = document.querySelector(`.${Ve.form}`);
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
j2.displayName = "FormPageTemplate";
const R2 = "_contentPage_btl4q_3", F2 = "_heroSection_btl4q_11", O2 = "_heroImage_btl4q_17", P2 = "_headerWrapper_btl4q_26", D2 = "_body_btl4q_34", q2 = "_bodyWithSidebar_btl4q_40", z2 = "_mainContent_btl4q_48", G2 = "_typographyContent_btl4q_53", U2 = "_sidebar_btl4q_100", H2 = "_relatedSection_btl4q_108", V2 = "_relatedInner_btl4q_114", Z2 = "_relatedGrid_btl4q_120", Y2 = "_relatedLink_btl4q_127", Z = {
  contentPage: R2,
  heroSection: F2,
  heroImage: O2,
  headerWrapper: P2,
  body: D2,
  bodyWithSidebar: q2,
  mainContent: z2,
  typographyContent: G2,
  sidebar: U2,
  relatedSection: H2,
  relatedInner: V2,
  relatedGrid: Z2,
  relatedLink: Y2
}, K2 = L(
  ({
    title: r,
    subtitle: t,
    heroImage: n,
    breadcrumbs: o,
    content: s,
    sidebar: l,
    relatedItems: a,
    className: i,
    ...c
  }, p) => {
    const m = [Z.contentPage, i ?? ""].filter(Boolean).join(" "), h = !!n, k = !!l;
    return /* @__PURE__ */ d("div", { ref: p, className: m, ...c, children: [
      h && /* @__PURE__ */ e("div", { className: Z.heroSection, children: /* @__PURE__ */ e(sr, { variant: "transparent", children: /* @__PURE__ */ e(
        "img",
        {
          src: n,
          alt: "",
          className: Z.heroImage,
          role: "presentation"
        }
      ) }) }),
      /* @__PURE__ */ e("div", { className: Z.headerWrapper, children: /* @__PURE__ */ e(
        at,
        {
          title: r,
          subtitle: t,
          breadcrumbs: o,
          variant: "impulse"
        }
      ) }),
      /* @__PURE__ */ d("div", { className: `${Z.body} ${k ? Z.bodyWithSidebar : ""}`, children: [
        /* @__PURE__ */ e("main", { className: Z.mainContent, children: /* @__PURE__ */ e("div", { className: Z.typographyContent, children: s }) }),
        k && /* @__PURE__ */ e("aside", { className: Z.sidebar, "aria-label": "Sidebar", children: l })
      ] }),
      a && a.length > 0 && /* @__PURE__ */ e("section", { className: Z.relatedSection, "aria-label": "Related content", children: /* @__PURE__ */ d("div", { className: Z.relatedInner, children: [
        /* @__PURE__ */ e(ne, { variant: "subheadline1", children: "Related" }),
        /* @__PURE__ */ e("div", { className: Z.relatedGrid, children: a.map((u) => /* @__PURE__ */ e(
          "a",
          {
            href: u.href,
            className: Z.relatedLink,
            children: /* @__PURE__ */ d(wt, { padding: "medium", children: [
              /* @__PURE__ */ e(ne, { variant: "subheadline2", children: u.title }),
              u.description && /* @__PURE__ */ e(ne, { variant: "smallCopyText", children: u.description })
            ] })
          },
          u.href
        )) })
      ] }) })
    ] });
  }
);
K2.displayName = "ContentPageTemplate";
const X2 = "_landingPage_1khfs_3", Q2 = "_hero_1khfs_13", J2 = "_heroWithImage_1khfs_23", em = "_heroInner_1khfs_27", tm = "_heroTitle_1khfs_35", rm = "_heroTitleLight_1khfs_44", nm = "_heroSubtitle_1khfs_48", om = "_heroSubtitleLight_1khfs_57", sm = "_sectionInner_1khfs_63", im = "_featuresSection_1khfs_71", am = "_featureCard_1khfs_76", lm = "_featureIcon_1khfs_81", cm = "_statsSection_1khfs_95", dm = "_statCard_1khfs_100", hm = "_testimonialsSection_1khfs_109", pm = "_testimonialCard_1khfs_114", mm = "_testimonialQuote_1khfs_122", km = "_testimonialAuthor_1khfs_131", O = {
  landingPage: X2,
  hero: Q2,
  heroWithImage: J2,
  heroInner: em,
  heroTitle: tm,
  heroTitleLight: rm,
  heroSubtitle: nm,
  heroSubtitleLight: om,
  sectionInner: sm,
  featuresSection: im,
  featureCard: am,
  featureIcon: lm,
  statsSection: cm,
  statCard: dm,
  testimonialsSection: hm,
  testimonialCard: pm,
  testimonialQuote: mm,
  testimonialAuthor: km
}, um = L(
  ({
    hero: r,
    features: t = [],
    testimonials: n = [],
    stats: o = [],
    footer: s,
    className: l,
    ...a
  }, i) => {
    const c = [O.landingPage, l ?? ""].filter(Boolean).join(" "), p = r.backgroundImage ? {
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.6)), url(${r.backgroundImage})`,
      backgroundSize: "cover",
      backgroundPosition: "center"
    } : {}, m = r.backgroundImage ? "white" : "black";
    return /* @__PURE__ */ d("div", { ref: i, className: c, ...a, children: [
      /* @__PURE__ */ e(
        "section",
        {
          className: `${O.hero} ${r.backgroundImage ? O.heroWithImage : ""}`,
          style: p,
          children: /* @__PURE__ */ d("div", { className: O.heroInner, children: [
            /* @__PURE__ */ e(
              qe,
              {
                variant: "full",
                colour: m === "white" ? "white" : "black",
                size: 100
              }
            ),
            /* @__PURE__ */ e("h1", { className: `${O.heroTitle} ${r.backgroundImage ? O.heroTitleLight : ""}`, children: r.title }),
            r.subtitle && /* @__PURE__ */ e("p", { className: `${O.heroSubtitle} ${r.backgroundImage ? O.heroSubtitleLight : ""}`, children: r.subtitle }),
            /* @__PURE__ */ e(
              Xe,
              {
                variant: "primary",
                size: "large",
                onClick: r.cta.onClick,
                children: r.cta.label
              }
            )
          ] })
        }
      ),
      t.length > 0 && /* @__PURE__ */ e("section", { className: O.featuresSection, "aria-label": "Features", children: /* @__PURE__ */ e("div", { className: O.sectionInner, children: /* @__PURE__ */ e(De, { columns: { mobile: 1, tablet: 2, desktop: 3 }, gap: "large", children: t.map((h, k) => /* @__PURE__ */ d("div", { className: O.featureCard, children: [
        /* @__PURE__ */ e("div", { className: O.featureIcon, children: h.icon }),
        /* @__PURE__ */ e(ne, { variant: "subheadline2", children: h.title }),
        /* @__PURE__ */ e(ne, { variant: "smallCopyText", children: h.description })
      ] }, k)) }) }) }),
      o.length > 0 && /* @__PURE__ */ e("section", { className: O.statsSection, "aria-label": "Key statistics", children: /* @__PURE__ */ e("div", { className: O.sectionInner, children: /* @__PURE__ */ e(De, { columns: { mobile: 1, tablet: 2, desktop: 4 }, gap: "medium", children: o.map((h, k) => /* @__PURE__ */ e("div", { className: O.statCard, children: /* @__PURE__ */ e(Nt, { ...h }) }, k)) }) }) }),
      n.length > 0 && /* @__PURE__ */ e("section", { className: O.testimonialsSection, "aria-label": "Testimonials", children: /* @__PURE__ */ e("div", { className: O.sectionInner, children: /* @__PURE__ */ e(De, { columns: { mobile: 1, tablet: 2 }, gap: "large", children: n.map((h, k) => /* @__PURE__ */ d("blockquote", { className: O.testimonialCard, children: [
        /* @__PURE__ */ d("p", { className: O.testimonialQuote, children: [
          "“",
          h.quote,
          "”"
        ] }),
        /* @__PURE__ */ d("footer", { className: O.testimonialAuthor, children: [
          /* @__PURE__ */ e(ne, { variant: "copyText", weight: "bold", children: h.author }),
          h.role && /* @__PURE__ */ e(ne, { variant: "smallCopyText", children: h.role })
        ] })
      ] }, k)) }) }) }),
      /* @__PURE__ */ e(
        Tr,
        {
          links: s == null ? void 0 : s.links,
          copyright: (s == null ? void 0 : s.copyright) ?? `© ${(/* @__PURE__ */ new Date()).getFullYear()} UBS Group AG. All rights reserved.`,
          showLogo: !0
        }
      )
    ] });
  }
);
um.displayName = "LandingPageTemplate";
const _m = "_tablePage_m74d3_3", ym = "_headerActionsRow_m74d3_14", gm = "_filterBar_m74d3_22", fm = "_filterItem_m74d3_31", bm = "_bulkActionBar_m74d3_38", xm = "_selectionCount_m74d3_48", vm = "_bulkActions_m74d3_54", Lm = "_tableWrapper_m74d3_61", wm = "_paginationWrapper_m74d3_69", ue = {
  tablePage: _m,
  headerActionsRow: ym,
  filterBar: gm,
  filterItem: fm,
  bulkActionBar: bm,
  selectionCount: xm,
  bulkActions: vm,
  tableWrapper: Lm,
  paginationWrapper: wm
}, Wm = L(
  ({
    title: r,
    breadcrumbs: t,
    columns: n,
    data: o,
    filters: s = [],
    actions: l = [],
    onExport: a,
    headerActions: i,
    pageSize: c = 20,
    loading: p = !1,
    className: m,
    ...h
  }, k) => {
    const [u, y] = T(void 0), [_, g] = T("asc"), [v, b] = T(/* @__PURE__ */ new Set()), [x, N] = T(1), [B, A] = T({}), f = C((j, Q) => {
      y(j), g(Q);
    }, []), M = C((j, Q) => {
      A((Te) => ({ ...Te, [j]: Q })), N(1);
    }, []), I = Math.max(1, Math.ceil(o.length / c)), R = ce(() => {
      const j = (x - 1) * c;
      return o.slice(j, j + c);
    }, [o, x, c]), Se = v.size > 0, Be = [ue.tablePage, m ?? ""].filter(Boolean).join(" ");
    return /* @__PURE__ */ d("div", { ref: k, className: Be, ...h, children: [
      /* @__PURE__ */ e(
        at,
        {
          title: r,
          breadcrumbs: t,
          actions: /* @__PURE__ */ d("div", { className: ue.headerActionsRow, children: [
            i,
            a && /* @__PURE__ */ e(Xe, { variant: "outline", size: "small", onClick: a, children: "Export" })
          ] })
        }
      ),
      s.length > 0 && /* @__PURE__ */ e("div", { className: ue.filterBar, role: "toolbar", "aria-label": "Table filters", children: s.map((j) => /* @__PURE__ */ e("div", { className: ue.filterItem, children: /* @__PURE__ */ e(
        At,
        {
          label: j.label,
          options: j.options,
          value: B[j.label] ?? "",
          onChange: (Q) => M(j.label, Q.target.value),
          size: "sm",
          placeholder: `All ${j.label}`
        }
      ) }, j.label)) }),
      Se && l.length > 0 && /* @__PURE__ */ d("div", { className: ue.bulkActionBar, role: "toolbar", "aria-label": "Bulk actions", children: [
        /* @__PURE__ */ d("span", { className: ue.selectionCount, children: [
          v.size,
          " row",
          v.size !== 1 ? "s" : "",
          " selected"
        ] }),
        /* @__PURE__ */ e("div", { className: ue.bulkActions, children: l.map((j, Q) => /* @__PURE__ */ e(
          Xe,
          {
            variant: j.variant ?? "outline",
            size: "small",
            onClick: () => j.onClick(v),
            children: j.label
          },
          Q
        )) })
      ] }),
      /* @__PURE__ */ e("div", { className: ue.tableWrapper, children: /* @__PURE__ */ e(
        ar,
        {
          columns: n,
          data: R,
          sortBy: u,
          sortDirection: _,
          onSort: f,
          selectable: !0,
          selectedRows: v,
          onSelectionChange: b,
          striped: !0,
          hoverable: !0,
          stickyHeader: !0,
          loading: p
        }
      ) }),
      I > 1 && /* @__PURE__ */ e("div", { className: ue.paginationWrapper, children: /* @__PURE__ */ e(
        ih,
        {
          currentPage: x,
          totalPages: I,
          onChange: N
        }
      ) })
    ] });
  }
);
Wm.displayName = "TablePageTemplate";
const Nm = "_loginPage_1wopm_3", Am = "_loginCard_1wopm_15", Im = "_logoWrapper_1wopm_22", Sm = "_titleBlock_1wopm_30", Bm = "_errorAlert_1wopm_37", Mm = "_form_1wopm_43", Cm = "_submitButton_1wopm_51", $m = "_forgotLink_1wopm_58", Tm = "_forgotButton_1wopm_63", _e = {
  loginPage: Nm,
  loginCard: Am,
  logoWrapper: Im,
  titleBlock: Sm,
  errorAlert: Bm,
  form: Mm,
  submitButton: Cm,
  forgotLink: $m,
  forgotButton: Tm
}, Em = L(
  ({
    onLogin: r,
    onForgotPassword: t,
    logo: n,
    title: o = "Sign In",
    subtitle: s,
    error: l,
    loading: a = !1,
    className: i,
    ...c
  }, p) => {
    const [m, h] = T(""), [k, u] = T(""), [y, _] = T({}), g = C(() => {
      const x = {};
      return m.trim() ? /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(m) || (x.email = "Please enter a valid email address") : x.email = "Email is required", k || (x.password = "Password is required"), _(x), Object.keys(x).length === 0;
    }, [m, k]), v = C(
      (x) => {
        x.preventDefault(), g() && r(m, k);
      },
      [g, r, m, k]
    ), b = [_e.loginPage, i ?? ""].filter(Boolean).join(" ");
    return /* @__PURE__ */ e("div", { ref: p, className: b, ...c, children: /* @__PURE__ */ e("div", { className: _e.loginCard, children: /* @__PURE__ */ d(wt, { padding: "large", children: [
      /* @__PURE__ */ e("div", { className: _e.logoWrapper, children: n ?? /* @__PURE__ */ e(qe, { variant: "full", colour: "black", size: 100 }) }),
      /* @__PURE__ */ d("div", { className: _e.titleBlock, children: [
        /* @__PURE__ */ e(ne, { variant: "keyline", children: o }),
        s && /* @__PURE__ */ e(ne, { variant: "smallCopyText", children: s })
      ] }),
      l && /* @__PURE__ */ e("div", { className: _e.errorAlert, children: /* @__PURE__ */ e(Lt, { variant: "error", children: l }) }),
      /* @__PURE__ */ d("form", { onSubmit: v, noValidate: !0, className: _e.form, children: [
        /* @__PURE__ */ e(
          st,
          {
            type: "email",
            label: "Email",
            placeholder: "you@example.com",
            value: m,
            onChange: (x) => {
              h(x.target.value), y.email && _((N) => ({ ...N, email: void 0 }));
            },
            error: y.email,
            required: !0
          }
        ),
        /* @__PURE__ */ e(
          st,
          {
            type: "password",
            label: "Password",
            placeholder: "Enter your password",
            value: k,
            onChange: (x) => {
              u(x.target.value), y.password && _((N) => ({ ...N, password: void 0 }));
            },
            error: y.password,
            required: !0
          }
        ),
        /* @__PURE__ */ e(
          Xe,
          {
            variant: "primary",
            size: "large",
            type: "submit",
            disabled: a,
            className: _e.submitButton,
            children: a ? "Signing in..." : "Sign In"
          }
        )
      ] }),
      t && /* @__PURE__ */ e("div", { className: _e.forgotLink, children: /* @__PURE__ */ e(
        "button",
        {
          type: "button",
          className: _e.forgotButton,
          onClick: t,
          children: "Forgot password?"
        }
      ) })
    ] }) }) });
  }
);
Em.displayName = "LoginTemplate";
const jm = "_errorPage_1beu1_3", Rm = "_content_1beu1_13", Fm = "_logoWrapper_1beu1_20", Om = "_errorCode_1beu1_26", ot = {
  errorPage: jm,
  content: Rm,
  logoWrapper: Fm,
  errorCode: Om
}, Pm = {
  404: "Page not found",
  500: "Something went wrong",
  403: "Access denied"
}, Dm = {
  404: "The page you are looking for does not exist or has been moved.",
  500: "We encountered an unexpected error. Please try again later.",
  403: "You do not have permission to access this page."
}, qm = L(
  ({
    code: r,
    title: t,
    message: n,
    actionLabel: o = "Go Home",
    onAction: s,
    className: l,
    ...a
  }, i) => {
    const c = t ?? Pm[r], p = n ?? Dm[r], m = [ot.errorPage, l ?? ""].filter(Boolean).join(" ");
    return /* @__PURE__ */ e("div", { ref: i, className: m, ...a, children: /* @__PURE__ */ d("div", { className: ot.content, children: [
      /* @__PURE__ */ e("div", { className: ot.logoWrapper, children: /* @__PURE__ */ e(qe, { variant: "full", colour: "black", size: 80 }) }),
      /* @__PURE__ */ e("div", { className: ot.errorCode, "aria-hidden": "true", children: r }),
      /* @__PURE__ */ e(
        dr,
        {
          title: c,
          description: p,
          action: s ? { label: o, onClick: s } : void 0
        }
      )
    ] }) });
  }
);
qm.displayName = "ErrorPageTemplate";
const zm = "_settingsPage_18qk2_3", Gm = "_header_18qk2_13", Um = "_body_18qk2_23", Hm = "_sidebarNav_18qk2_37", Vm = "_content_18qk2_45", Ze = {
  settingsPage: zm,
  header: Gm,
  body: Um,
  sidebarNav: Hm,
  content: Vm
}, Zm = L(
  ({
    sections: r,
    onSave: t,
    onCancel: n,
    unsavedChanges: o = !1,
    title: s = "Settings",
    className: l,
    ...a
  }, i) => {
    const [c, p] = T(
      r.length > 0 ? r[0].title : ""
    ), m = ce(
      () => r.map((y) => ({
        label: y.title,
        value: y.title
      })),
      [r]
    ), h = ce(
      () => r.find((y) => y.title === c) ?? r[0],
      [r, c]
    ), k = C(() => {
      n && n();
    }, [n]), u = [Ze.settingsPage, l ?? ""].filter(Boolean).join(" ");
    return /* @__PURE__ */ d("div", { ref: i, className: u, ...a, children: [
      /* @__PURE__ */ e("div", { className: Ze.header, children: /* @__PURE__ */ e(ne, { variant: "keyline", children: s }) }),
      /* @__PURE__ */ d("div", { className: Ze.body, children: [
        /* @__PURE__ */ e("div", { className: Ze.sidebarNav, children: /* @__PURE__ */ e(
          G1,
          {
            tabs: m,
            activeTab: c,
            onChange: p,
            variant: "contained"
          }
        ) }),
        /* @__PURE__ */ e("main", { className: Ze.content, children: h && /* @__PURE__ */ e(
          It,
          {
            title: h.title,
            subtitle: h.description,
            padding: "lg",
            children: h.content
          }
        ) })
      ] }),
      o && /* @__PURE__ */ e(
        lt,
        {
          primaryAction: { label: "Save Changes", onClick: t },
          secondaryAction: n ? { label: "Cancel", onClick: k } : void 0,
          sticky: !0
        }
      )
    ] });
  }
);
Zm.displayName = "SettingsTemplate";
export {
  Ok as ACCESSIBILITY_RULES,
  Tk as ACCESSIBILITY_STANDARD,
  Pk as ACCESSIBILITY_TOOLS,
  Rk as ACCESSIBLE_TYPOGRAPHY,
  bu as ANIMATED_CONTENT,
  Au as AVAILABLE_KEYS,
  Iu as AVAILABLE_RELATIVE_MINORS,
  hl as Accordion,
  lt as ActionBar,
  Lt as Alert,
  H0 as AnimatePresence,
  ls as ArrowDown,
  ss as ArrowLeft,
  is as ArrowRight,
  as as ArrowUp,
  lr as Avatar,
  ql as AvatarGroup,
  ni as Award,
  Bt as BORDEAUX_I,
  Mt as BORDEAUX_II,
  ur as BORDEAUX_III,
  $u as BRANDED_MUSIC,
  Eu as BRAND_PERSONALITY,
  _r as BRONZE_I,
  yr as BRONZE_II,
  gr as BRONZE_III,
  Wt as Badge,
  Zs as BankNote,
  Ms as Bell,
  Qm as Breadcrumbs,
  ei as Briefcase,
  ai as Building,
  Xe as Button,
  N0 as CHART_COLOURS,
  ik as CHART_COLOUR_NAMES,
  ru as CHART_DIMENSION,
  su as CHART_GAPS,
  Fk as CHART_GAP_SPECS,
  jk as CHART_SEPARATOR_MIN,
  nu as CIRCULAR_PREFERENCE,
  _u as COLOUR_DIRECTIONS,
  Kk as COLOUR_LAYERS,
  iu as COLOUR_SEQUENCES,
  B0 as COLOUR_SEQUENCE_COMPLEX,
  A0 as COLOUR_SEQUENCE_MONOCHROME,
  S0 as COLOUR_SEQUENCE_MULTICHROME,
  I0 as COLOUR_SEQUENCE_POLYCHROME,
  Ek as CONTRAST_RATIOS,
  u0 as CTA,
  kr as CTAArrow,
  $s as Calendar,
  wt as Card,
  Fs as Chart,
  ws as Check,
  Ws as CheckCircle,
  pr as Checkbox,
  ts as ChevronDown,
  ns as ChevronLeft,
  os as ChevronRight,
  rs as ChevronUp,
  cc as Chip,
  dc as ChipGroup,
  Ts as Clock,
  ds as Close,
  Ys as Coins,
  K2 as ContentPageTemplate,
  ii as Contract,
  fs as Copy,
  Vs as CreditCard,
  xi as CustomerSupport,
  Tt as DARK_MODE_PRIMARY_RED,
  Ke as DARK_MODE_SECONDARY_RED,
  cu as DATA_VIZ_LINES,
  hu as DATA_VIZ_MOTION,
  pu as DATA_VIZ_RULES,
  lu as DATA_VIZ_TYPOGRAPHY,
  M2 as DashboardTemplate,
  ir as DataViz,
  p1 as DatePicker,
  fi as DigitalBanking,
  Eo as Divider,
  Es as Document,
  Os as DonutChart,
  _s as Download,
  du as EMPHASIS_OPTIONS,
  Qt as EXIT_ANIMATION_MAP,
  bs as Edit,
  dr as EmptyState,
  zs as ErrorIcon,
  qm as ErrorPageTemplate,
  dk as FONT_FAMILY_FALLBACK,
  ck as FONT_FAMILY_PRIMARY,
  hk as FONT_STACK,
  pk as FONT_WEIGHTS,
  ks as Filter,
  yi as FinancialPlanning,
  hi as Fingerprint,
  js as Folder,
  Tr as Footer,
  Je as FormField,
  j2 as FormPageTemplate,
  St as GRAY_I,
  Qe as GRAY_II,
  ct as GRAY_III,
  dt as GRAY_IV,
  et as GRAY_V,
  tt as GRAY_VI,
  $k as GRID_RULES,
  Bk as GRID_TYPES,
  _i as GlobalNetwork,
  Ps as Globe,
  De as Grid,
  Qs as Growth,
  ou as HIGHLIGHT_COLOUR,
  ti as Handshake,
  Us as Help,
  As as Home,
  Vk as ICON_ANIMATION,
  Zk as ICON_ANIMATION_FORMATS,
  Li as ICON_SIZE_MAP,
  Qk as ILLUSTRATION_ADDITIONAL_COLOUR,
  Jk as ILLUSTRATION_ANIMATION,
  eu as ILLUSTRATION_ANIMATION_RULES,
  Xk as ILLUSTRATION_DOMINANT_COLOUR,
  tu as ILLUSTRATION_RULES,
  Yk as ILLUSTRATION_STYLE,
  Dk as ILLUSTRATIVE_ICON,
  zk as ILLUSTRATIVE_ICON_RULES,
  qk as ILLUSTRATIVE_ICON_VARIANTS,
  Mk as IMAGE_PREFERENCE,
  gk as IMPULSE_COLOUR,
  xk as IMPULSE_HEIGHT,
  vk as IMPULSE_RULES,
  bk as IMPULSE_SPACE,
  fk as IMPULSE_WIDTH,
  au as INSIGHT_FLAG,
  yk as ISO_MARGINS,
  wi as Icon,
  Rs as ImageIcon,
  Rn as Impulse,
  Ds as Info,
  st as Input,
  mi as InvestmentGrowth,
  Nk as KEY_SYMBOL,
  Ak as KEY_SYMBOL_RULES,
  di as Key,
  Ck as LAYOUT_OPTIONS,
  wk as LOGO_POSITION,
  Lk as LOGO_SIZE,
  Wk as LOGO_TAB,
  Mu as LOUDNESS_STANDARDS,
  um as LandingPageTemplate,
  Yn as Layout,
  oi as Lightbulb,
  cr as List,
  ci as Lock,
  Em as LoginTemplate,
  qe as Logo,
  W0 as LogoTab,
  yu as MATERIAL_APPLICATIONS,
  Ru as MESSAGING_PRINCIPLE,
  Fu as MESSAGING_RULES,
  ju as MESSAGING_STYLES,
  xr as METALLIC_SILVER,
  Ik as MOVING_FRAME,
  Sk as MOVING_FRAME_RULES,
  Cs as Mail,
  cs as Menu,
  Ls as Minus,
  tk as Modal,
  hs as MoreHorizontal,
  ps as MoreVertical,
  sr as MovingFrame,
  uk as NON_LATIN_FONTS,
  j1 as Navbar,
  Ct as PASTEL_I,
  $t as PASTEL_II,
  uu as PATTERN_COLOURS,
  C0 as PATTERN_COLOURS_BORDEAUX,
  $0 as PATTERN_COLOURS_BRONZE,
  M0 as PATTERN_COLOURS_GRAY,
  ku as PATTERN_RATIO,
  gu as PATTERN_RULES,
  mu as PATTERN_VARIANTS,
  vu as PLATFORM_SPECS,
  ak as POLYCHROME_COLOURS,
  at as PageHeader,
  ih as Pagination,
  Di as Pattern,
  Ks as PiggyBank,
  vs as Plus,
  nk as Popover,
  Js as Portfolio,
  si as Presentation,
  ok as Progress,
  ht as RAG_AMBER,
  pt as RAG_GREEN,
  Et as RAG_RED,
  Zd as Radio,
  Yd as RadioGroup,
  es as SIZE_MAP,
  xu as SOCIAL_MEDIA_COLOUR_DIRECTIONS,
  wu as SOCIAL_MEDIA_RULES,
  Nu as SOUND_ADAPTATIONS,
  Su as SOUND_INTEGRITY,
  Wu as SOUND_LOGO_PRINCIPAL,
  Bu as SOUND_POSITION,
  Cu as SOUND_RULES,
  fu as STATIC_CONTENT,
  Xs as SafeBox,
  ms as Search,
  It as SectionWrapper,
  ui as SecurityShield,
  At as Select,
  Bs as Settings,
  Zm as SettingsTemplate,
  gs as Share,
  li as Shield,
  $r as Sidebar,
  sk as Skeleton,
  ta as SocialMediaTemplate,
  us as Sort,
  Nt as Stat,
  Gs as Success,
  gi as SuccessCelebration,
  bi as SustainableGrowth,
  Lu as TEMPLATE_FORMATS,
  Tu as TONE_PILLARS,
  fr as TRADING_GREEN,
  br as TRADING_RED,
  mk as TYPOGRAPHY_HIERARCHY,
  _k as TYPOGRAPHY_RULES,
  ar as Table,
  Wm as TablePageTemplate,
  G1 as Tabs,
  xl as Tag,
  ri as Target,
  ki as TeamCollaboration,
  hr as Textarea,
  ek as ToastProvider,
  i1 as Toggle,
  rk as Tooltip,
  Vo as TradingIndicator,
  xs as Trash,
  ne as Typography,
  qu as UBSGlobalStyles,
  jt as UBSThemeContext,
  Pu as UBSThemeProvider,
  Ie as UBS_BLACK,
  ke as UBS_DURATION_BASE,
  yt as UBS_ICON_COLOURS,
  lk as UBS_PALETTE,
  it as UBS_RED,
  Ae as UBS_WHITE,
  ys as Upload,
  Is as User,
  Ss as Users,
  Uk as WEB_APP_ICON_COLOUR,
  Hk as WEB_APP_ICON_RULES,
  Gk as WEB_APP_ICON_SIZES,
  kk as WEB_TYPOGRAPHY,
  Hs as Wallet,
  qs as Warning,
  pi as WelcomeScene,
  Ns as XCircle,
  Ir as accessibility,
  Rt as animationPresets,
  Pe as breakpoints,
  Jt as buildAnimationCSS,
  U0 as checkContrast,
  Nr as colours,
  W as createIcon,
  T0 as fontFamily,
  j0 as fontSize,
  E0 as fontWeight,
  Hu as getStaggerDelays,
  Ar as layout,
  R0 as lineHeight,
  vr as mediaQueries,
  F0 as semanticColours,
  O0 as semanticColoursDark,
  wr as spacing,
  Lr as spacingScale,
  Sr as transitions,
  Wr as typography,
  D as ubsDurations,
  q as ubsEasings,
  zu as ubsGlobalCSS,
  Ou as ubsTheme,
  P0 as ubsThemeDark,
  Mr as ubsThemeLight,
  Vu as useAnimation,
  Uu as useContrastCheck,
  Gu as useDarkMode,
  Jm as useToast,
  Du as useUBSTheme,
  Br as zIndex
};
//# sourceMappingURL=ubs-design-system.es.js.map
