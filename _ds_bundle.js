/* @ds-bundle: {"format":4,"namespace":"PizzaWebsiteDesignSystem_ca709c","components":[{"name":"Button","sourcePath":"components/actions/Button.jsx"},{"name":"IconButton","sourcePath":"components/actions/IconButton.jsx"},{"name":"TextLink","sourcePath":"components/actions/TextLink.jsx"},{"name":"Headline","sourcePath":"components/brand/Headline.jsx"},{"name":"ScriptLabel","sourcePath":"components/brand/ScriptLabel.jsx"},{"name":"Wordmark","sourcePath":"components/brand/Wordmark.jsx"},{"name":"MenuCard","sourcePath":"components/content/MenuCard.jsx"},{"name":"Placeholder","sourcePath":"components/content/Placeholder.jsx"},{"name":"SizeLineup","sourcePath":"components/content/SizeLineup.jsx"},{"name":"StatPanel","sourcePath":"components/content/StatPanel.jsx"},{"name":"VideoCard","sourcePath":"components/content/VideoCard.jsx"},{"name":"Badge","sourcePath":"components/feedback/Badge.jsx"},{"name":"Dialog","sourcePath":"components/feedback/Dialog.jsx"},{"name":"Tag","sourcePath":"components/feedback/Tag.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"Tooltip","sourcePath":"components/feedback/Tooltip.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"QuantityStepper","sourcePath":"components/forms/QuantityStepper.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"IconNames","sourcePath":"components/icons/Icon.jsx"},{"name":"Icon","sourcePath":"components/icons/Icon.jsx"},{"name":"RailNav","sourcePath":"components/navigation/RailNav.jsx"},{"name":"SiteHeader","sourcePath":"components/navigation/SiteHeader.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"}],"sourceHashes":{"components/actions/Button.jsx":"264fb86e6a3f","components/actions/IconButton.jsx":"4d6a0a5c9d67","components/actions/TextLink.jsx":"621970220145","components/brand/Headline.jsx":"078e01d0c4c2","components/brand/ScriptLabel.jsx":"db539ebf649f","components/brand/Wordmark.jsx":"9ff88f4a78cc","components/content/MenuCard.jsx":"1ecd2db1142f","components/content/Placeholder.jsx":"fa33567ba590","components/content/SizeLineup.jsx":"96937760f11b","components/content/StatPanel.jsx":"5919912ffc0c","components/content/VideoCard.jsx":"ba5f6b3a45a6","components/feedback/Badge.jsx":"cb3f98aa2dab","components/feedback/Dialog.jsx":"b480a64d6061","components/feedback/Tag.jsx":"e1bbed780de5","components/feedback/Toast.jsx":"cf831c535366","components/feedback/Tooltip.jsx":"d1163f7a8882","components/forms/Checkbox.jsx":"4e6ad2db05e9","components/forms/Input.jsx":"95251525cf92","components/forms/QuantityStepper.jsx":"255a7521edc4","components/forms/Radio.jsx":"959124f28975","components/forms/Select.jsx":"ac7c7883bd51","components/forms/Switch.jsx":"fab52e67e3ec","components/icons/Icon.jsx":"f57a695398bc","components/navigation/RailNav.jsx":"323adcffee9b","components/navigation/SiteHeader.jsx":"feb478ba3579","components/navigation/Tabs.jsx":"0a189102420b","ui_kits/website/App.jsx":"09606d26609a","ui_kits/website/CartDrawer.jsx":"f2a4efc95217","ui_kits/website/Chrome.jsx":"bbde5f76b6e5","ui_kits/website/CustomizeDialog.jsx":"9f17a291658e","ui_kits/website/HeroMarquee.jsx":"14d86a35f831","ui_kits/website/MenuPage.jsx":"a78b39ea8800","ui_kits/website/PizzaPage.jsx":"f71ff7836ff5","ui_kits/website/data.js":"b4473acd47b3","ui_kits/website/image-slot.js":"fff26d081c8d"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.PizzaWebsiteDesignSystem_ca709c = window.PizzaWebsiteDesignSystem_ca709c || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/brand/Headline.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const TAG = {
  mega: "h1",
  display: "h2",
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4"
};
function Headline({
  level = "display",
  as,
  tone,
  distressed,
  align,
  className = "",
  style,
  children,
  ...rest
}) {
  const El = as || TAG[level] || "h2";
  const t = tone || (level === "mega" ? "brand" : "ink");
  const d = distressed ?? (level === "mega" || level === "display");
  const cls = ["pz-headline", `pz-${level}`, `pz-headline--${t}`, d && (level === "mega" ? "pz-distress-heavy" : "pz-distress"), className].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement(El, _extends({
    className: cls,
    style: align ? {
      textAlign: align,
      ...style
    } : style
  }, rest), children);
}
Object.assign(__ds_scope, { Headline });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Headline.jsx", error: String((e && e.message) || e) }); }

// components/brand/ScriptLabel.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function ScriptLabel({
  as: El = "p",
  size = "md",
  tone = "ink",
  className = "",
  children,
  ...rest
}) {
  return /*#__PURE__*/React.createElement(El, _extends({
    className: ["pz-scriptlabel", size !== "md" && `pz-scriptlabel--${size}`, tone !== "ink" && `pz-scriptlabel--${tone}`, className].filter(Boolean).join(" ")
  }, rest), children);
}
Object.assign(__ds_scope, { ScriptLabel });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/ScriptLabel.jsx", error: String((e && e.message) || e) }); }

// components/brand/Wordmark.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Wordmark({
  name = "Yuji’s",
  tagline,
  size = "md",
  tone = "brand",
  href,
  className = "",
  ...rest
}) {
  const El = href ? "a" : "span";
  return /*#__PURE__*/React.createElement(El, _extends({
    href: href,
    className: ["pz-wordmark", size !== "md" && `pz-wordmark--${size}`, tone !== "brand" && `pz-wordmark--${tone}`, className].filter(Boolean).join(" ")
  }, rest), /*#__PURE__*/React.createElement("span", {
    className: "pz-wordmark__name"
  }, name), tagline && /*#__PURE__*/React.createElement("span", {
    className: "pz-wordmark__tag"
  }, tagline));
}
Object.assign(__ds_scope, { Wordmark });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Wordmark.jsx", error: String((e && e.message) || e) }); }

// components/content/Placeholder.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Placeholder({
  label = "Image",
  shape = "rect",
  tone = "light",
  ratio,
  className = "",
  style,
  ...rest
}) {
  const cls = ["pz-placeholder", shape === "circle" && "pz-placeholder--circle", tone === "dark" && "pz-placeholder--dark", className].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "img",
    "aria-label": label,
    className: cls,
    style: ratio ? {
      aspectRatio: ratio,
      ...style
    } : style
  }, rest), /*#__PURE__*/React.createElement("span", {
    className: "pz-placeholder__label"
  }, label));
}
Object.assign(__ds_scope, { Placeholder });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Placeholder.jsx", error: String((e && e.message) || e) }); }

// components/content/SizeLineup.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function SizeLineup({
  items = [],
  value,
  onChange,
  className = "",
  ...rest
}) {
  const pick = !!onChange;
  return /*#__PURE__*/React.createElement("div", _extends({
    className: ["pz-lineup", className].filter(Boolean).join(" "),
    role: pick ? "radiogroup" : undefined
  }, rest), items.map(it => {
    const sel = value != null && it.id === value;
    const El = pick ? "button" : "div";
    return /*#__PURE__*/React.createElement(El, {
      key: it.id,
      type: pick ? "button" : undefined,
      role: pick ? "radio" : undefined,
      "aria-checked": pick ? sel : undefined,
      className: ["pz-lineup__item", sel && "is-selected"].filter(Boolean).join(" "),
      onClick: pick ? () => onChange(it.id) : undefined
    }, /*#__PURE__*/React.createElement("span", {
      className: "pz-lineup__media",
      style: {
        width: it.width || 160,
        height: it.height || it.width || 160
      }
    }, it.media || (it.image ? /*#__PURE__*/React.createElement("img", {
      src: it.image,
      alt: it.alt || "",
      className: "pz-cutout",
      style: {
        objectFit: "contain"
      }
    }) : /*#__PURE__*/React.createElement(__ds_scope.Placeholder, {
      shape: it.shape || "circle",
      label: it.placeholder || it.label
    }))), /*#__PURE__*/React.createElement("span", {
      className: "pz-lineup__label"
    }, /*#__PURE__*/React.createElement("span", {
      style: it.labelSize ? {
        fontSize: it.labelSize
      } : undefined
    }, it.label), it.sublabel && /*#__PURE__*/React.createElement("span", {
      className: "pz-lineup__sublabel"
    }, it.sublabel)));
  }));
}
Object.assign(__ds_scope, { SizeLineup });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/SizeLineup.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Badge({
  tone = "brand",
  shape = "square",
  size = "md",
  className = "",
  children,
  ...rest
}) {
  const cls = ["pz-badge", tone !== "brand" && `pz-badge--${tone}`, shape === "round" && "pz-badge--round", size === "sm" && "pz-badge--sm", className].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement("span", _extends({
    className: cls
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Badge.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tooltip.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Tooltip({
  content,
  side = "top",
  open = false,
  className = "",
  children,
  ...rest
}) {
  const id = React.useId();
  return /*#__PURE__*/React.createElement("span", _extends({
    className: ["pz-tooltip-wrap", className].filter(Boolean).join(" "),
    "aria-describedby": id
  }, rest), children, /*#__PURE__*/React.createElement("span", {
    role: "tooltip",
    id: id,
    className: ["pz-tooltip", side === "bottom" && "pz-tooltip--bottom", open && "pz-tooltip--open"].filter(Boolean).join(" ")
  }, content));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Radio({
  label,
  description,
  meta,
  variant = "default",
  checked,
  disabled,
  className = "",
  ...rest
}) {
  if (variant === "tile") {
    return /*#__PURE__*/React.createElement("label", {
      className: ["pz-tile", checked && "pz-tile--checked", disabled && "pz-check--disabled", className].filter(Boolean).join(" ")
    }, /*#__PURE__*/React.createElement("input", _extends({
      type: "radio",
      checked: checked,
      disabled: disabled
    }, rest)), label && /*#__PURE__*/React.createElement("span", {
      className: "pz-tile__title"
    }, label), description && /*#__PURE__*/React.createElement("span", {
      className: "pz-tile__desc"
    }, description), meta && /*#__PURE__*/React.createElement("span", {
      className: "pz-tile__meta"
    }, meta));
  }
  return /*#__PURE__*/React.createElement("label", {
    className: ["pz-check", "pz-radio", disabled && "pz-check--disabled", className].filter(Boolean).join(" ")
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "radio",
    checked: checked,
    disabled: disabled
  }, rest)), /*#__PURE__*/React.createElement("span", {
    className: "pz-check__box",
    "aria-hidden": "true"
  }), (label || description) && /*#__PURE__*/React.createElement("span", {
    className: "pz-check__text"
  }, label && /*#__PURE__*/React.createElement("span", null, label), description && /*#__PURE__*/React.createElement("span", {
    className: "pz-check__desc"
  }, description)), meta && /*#__PURE__*/React.createElement("span", {
    className: "pz-check__meta"
  }, meta));
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Switch({
  label,
  description,
  disabled,
  className = "",
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", {
    className: ["pz-switch", disabled && "pz-check--disabled", className].filter(Boolean).join(" ")
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox",
    role: "switch",
    disabled: disabled
  }, rest)), /*#__PURE__*/React.createElement("span", {
    className: "pz-switch__track",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("span", {
    className: "pz-switch__thumb"
  })), (label || description) && /*#__PURE__*/React.createElement("span", {
    className: "pz-check__text"
  }, label && /*#__PURE__*/React.createElement("span", null, label), description && /*#__PURE__*/React.createElement("span", {
    className: "pz-check__desc"
  }, description)));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/icons/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// Lucide v1.61.0 (ISC) — path data copied programmatically from lucide-static. Do not hand-edit.
const ICONS = {
  "menu": "<path d=\"M4 5h16\" /><path d=\"M4 12h16\" /><path d=\"M4 19h16\" />",
  "search": "<path d=\"m21 21-4.34-4.34\" /><circle cx=\"11\" cy=\"11\" r=\"8\" />",
  "x": "<path d=\"M18 6 6 18\" /><path d=\"m6 6 12 12\" />",
  "plus": "<path d=\"M5 12h14\" /><path d=\"M12 5v14\" />",
  "minus": "<path d=\"M5 12h14\" />",
  "shopping-bag": "<path d=\"M16 10a4 4 0 0 1-8 0\" /><path d=\"M3.103 6.034h17.794\" /><path d=\"M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z\" />",
  "map-pin": "<path d=\"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0\" /><circle cx=\"12\" cy=\"10\" r=\"3\" />",
  "clock": "<circle cx=\"12\" cy=\"12\" r=\"10\" /><path d=\"M12 6v6l4 2\" />",
  "check": "<path d=\"M20 6 9 17l-5-5\" />",
  "chevron-down": "<path d=\"m6 9 6 6 6-6\" />",
  "chevron-right": "<path d=\"m9 18 6-6-6-6\" />",
  "chevron-left": "<path d=\"m15 18-6-6 6-6\" />",
  "arrow-right": "<path d=\"M5 12h14\" /><path d=\"m12 5 7 7-7 7\" />",
  "arrow-up-right": "<path d=\"M7 7h10v10\" /><path d=\"M7 17 17 7\" />",
  "info": "<circle cx=\"12\" cy=\"12\" r=\"10\" /><path d=\"M12 16v-4\" /><path d=\"M12 8h.01\" />",
  "play": "<path d=\"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z\" />",
  "flame": "<path d=\"M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4\" />",
  "leaf": "<path d=\"M11 20a10 10 0 0010-10 25.9 25.9 0 00-1.04-7.281 1 1 0 00-1.755-.325C15.833 5.5 13 5.5 9.8 6.1A7 7 0 0011 20\" /><path d=\"M2 21a5 5 0 012.911-4.544C7.613 15.212 8.351 15.24 11 13\" />",
  "wheat-off": "<path d=\"m2 22 10-10\" /><path d=\"m16 8-1.17 1.17\" /><path d=\"M3.47 12.53 5 11l1.53 1.53a3.5 3.5 0 0 1 0 4.94L5 19l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z\" /><path d=\"m8 8-.53.53a3.5 3.5 0 0 0 0 4.94L9 15l1.53-1.53c.55-.55.88-1.25.98-1.97\" /><path d=\"M10.91 5.26c.15-.26.34-.51.56-.73L13 3l1.53 1.53a3.5 3.5 0 0 1 .28 4.62\" /><path d=\"M20 2h2v2a4 4 0 0 1-4 4h-2V6a4 4 0 0 1 4-4Z\" /><path d=\"M11.47 17.47 13 19l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L5 19l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z\" /><path d=\"m16 16-.53.53a3.5 3.5 0 0 1-4.94 0L9 15l1.53-1.53a3.49 3.49 0 0 1 1.97-.98\" /><path d=\"M18.74 13.09c.26-.15.51-.34.73-.56L21 11l-1.53-1.53a3.5 3.5 0 0 0-4.62-.28\" /><line x1=\"2\" x2=\"22\" y1=\"2\" y2=\"22\" />",
  "pizza": "<path d=\"m12 14-1 1\" /><path d=\"m13.75 18.25-1.25 1.42\" /><path d=\"M17.775 5.654a15.68 15.68 0 0 0-12.121 12.12\" /><path d=\"M18.8 9.3a1 1 0 0 0 2.1 7.7\" /><path d=\"M21.964 20.732a1 1 0 0 1-1.232 1.232l-18-5a1 1 0 0 1-.695-1.232A19.68 19.68 0 0 1 15.732 2.037a1 1 0 0 1 1.232.695z\" />",
  "phone": "<path d=\"M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384\" />",
  "truck": "<path d=\"M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2\" /><path d=\"M15 18H9\" /><path d=\"M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14\" /><circle cx=\"17\" cy=\"18\" r=\"2\" /><circle cx=\"7\" cy=\"18\" r=\"2\" />",
  "store": "<path d=\"M15 21v-5a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v5\" /><path d=\"M17.774 10.31a1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.451 0 1.12 1.12 0 0 0-1.548 0 2.5 2.5 0 0 1-3.452 0 1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.77-3.248l2.889-4.184A2 2 0 0 1 7 2h10a2 2 0 0 1 1.653.873l2.895 4.192a2.5 2.5 0 0 1-3.774 3.244\" /><path d=\"M4 10.95V19a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8.05\" />",
  "star": "<path d=\"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z\" />",
  "heart": "<path d=\"M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5\" />",
  "user": "<path d=\"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2\" /><circle cx=\"12\" cy=\"7\" r=\"4\" />",
  "circle-alert": "<circle cx=\"12\" cy=\"12\" r=\"10\" /><line x1=\"12\" x2=\"12\" y1=\"8\" y2=\"12\" /><line x1=\"12\" x2=\"12.01\" y1=\"16\" y2=\"16\" />",
  "trash-2": "<path d=\"M10 11v6\" /><path d=\"M14 11v6\" /><path d=\"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6\" /><path d=\"M3 6h18\" /><path d=\"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2\" />",
  "utensils": "<path d=\"M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2\" /><path d=\"M7 2v20\" /><path d=\"M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7\" />"
};
const IconNames = Object.keys(ICONS);
function Icon({
  name,
  size = 20,
  strokeWidth = 1.75,
  filled = false,
  title,
  className,
  style,
  ...rest
}) {
  const body = ICONS[name];
  if (!body) return null;
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: filled ? "currentColor" : "none",
    stroke: "currentColor",
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    role: title ? "img" : undefined,
    "aria-hidden": title ? undefined : true,
    "aria-label": title,
    className: className,
    style: {
      display: "block",
      flex: "none",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("g", {
    dangerouslySetInnerHTML: {
      __html: body
    }
  }));
}
Object.assign(__ds_scope, { IconNames, Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/icons/Icon.jsx", error: String((e && e.message) || e) }); }

// components/actions/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Button({
  variant = "primary",
  size = "md",
  icon,
  iconRight,
  block = false,
  href,
  type = "button",
  disabled = false,
  className = "",
  children,
  ...rest
}) {
  const cls = ["pz-btn", variant !== "primary" && `pz-btn--${variant}`, size !== "md" && `pz-btn--${size}`, block && "pz-btn--block", className].filter(Boolean).join(" ");
  const s = size === "sm" ? 14 : size === "lg" ? 20 : 16;
  const content = /*#__PURE__*/React.createElement(React.Fragment, null, icon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: s,
    strokeWidth: 2.25
  }), children != null && /*#__PURE__*/React.createElement("span", null, children), iconRight && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: iconRight,
    size: s,
    strokeWidth: 2.25
  }));
  if (href) {
    return /*#__PURE__*/React.createElement("a", _extends({
      href: disabled ? undefined : href,
      className: cls,
      "aria-disabled": disabled || undefined
    }, rest), content);
  }
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    className: cls,
    disabled: disabled
  }, rest), content);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/Button.jsx", error: String((e && e.message) || e) }); }

// components/actions/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SIZES = {
  sm: 18,
  md: 20,
  lg: 24,
  xl: 30
};
function IconButton({
  icon,
  label,
  variant = "plain",
  size = "md",
  shape = "square",
  filled = false,
  badge,
  className = "",
  ...rest
}) {
  const cls = ["pz-iconbtn", variant !== "plain" && `pz-iconbtn--${variant}`, size !== "md" && `pz-iconbtn--${size}`, shape === "round" && "pz-iconbtn--round", className].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    className: cls,
    "aria-label": label,
    title: label
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: SIZES[size] || 20,
    filled: filled,
    strokeWidth: filled ? 1.5 : 1.75
  }), badge != null && badge !== 0 && badge !== false && /*#__PURE__*/React.createElement("span", {
    className: "pz-iconbtn__badge"
  }, badge));
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/actions/TextLink.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function TextLink({
  href,
  size = "sm",
  tone = "ink",
  arrow = false,
  className = "",
  children,
  ...rest
}) {
  const cls = ["pz-link", size === "md" && "pz-link--md", tone !== "ink" && `pz-link--${tone}`, className].filter(Boolean).join(" ");
  const inner = /*#__PURE__*/React.createElement(React.Fragment, null, children, arrow && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "arrow-right",
    size: size === "md" ? 15 : 13,
    strokeWidth: 2.5
  }));
  return href ? /*#__PURE__*/React.createElement("a", _extends({
    href: href,
    className: cls
  }, rest), inner) : /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    className: cls
  }, rest), inner);
}
Object.assign(__ds_scope, { TextLink });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/TextLink.jsx", error: String((e && e.message) || e) }); }

// components/content/StatPanel.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function StatPanel({
  stats = [],
  className = "",
  ...rest
}) {
  return /*#__PURE__*/React.createElement("dl", _extends({
    className: ["pz-stats", className].filter(Boolean).join(" ")
  }, rest), stats.map((s, i) => /*#__PURE__*/React.createElement("div", {
    className: "pz-stat",
    key: (s.label || "") + i
  }, /*#__PURE__*/React.createElement("dt", {
    className: "pz-stat__head"
  }, /*#__PURE__*/React.createElement("span", {
    className: "pz-stat__label"
  }, s.label), s.sublabel && /*#__PURE__*/React.createElement("span", {
    className: "pz-stat__sublabel"
  }, s.sublabel)), /*#__PURE__*/React.createElement("dd", {
    className: "pz-stat__body"
  }, /*#__PURE__*/React.createElement("span", {
    className: "pz-stat__value"
  }, s.value, s.fraction && /*#__PURE__*/React.createElement("span", {
    className: "pz-stat__fraction"
  }, s.fraction)), (s.description || s.linkLabel) && /*#__PURE__*/React.createElement("span", {
    className: "pz-stat__desc"
  }, s.description, " ", s.linkLabel && /*#__PURE__*/React.createElement(__ds_scope.TextLink, {
    href: s.href,
    onClick: s.onLinkClick
  }, s.linkLabel))))));
}
Object.assign(__ds_scope, { StatPanel });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/StatPanel.jsx", error: String((e && e.message) || e) }); }

// components/content/VideoCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function VideoCard({
  poster,
  media,
  alt = "",
  caption,
  duration,
  onPlay,
  aspect = "16 / 9",
  className = "",
  ...rest
}) {
  return /*#__PURE__*/React.createElement("figure", _extends({
    className: ["pz-video", className].filter(Boolean).join(" ")
  }, rest), /*#__PURE__*/React.createElement("div", {
    className: "pz-video__frame",
    style: {
      aspectRatio: aspect
    },
    onClick: onPlay
  }, media || (poster ? /*#__PURE__*/React.createElement("img", {
    src: poster,
    alt: alt
  }) : /*#__PURE__*/React.createElement(__ds_scope.Placeholder, {
    tone: "dark",
    label: "Video still"
  })), /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "play",
    label: "Play video",
    variant: "primary",
    shape: "round",
    size: "xl",
    filled: true,
    className: "pz-video__play",
    onClick: e => {
      e.stopPropagation();
      onPlay && onPlay();
    }
  }), duration && /*#__PURE__*/React.createElement("span", {
    className: "pz-video__duration"
  }, duration)), caption && /*#__PURE__*/React.createElement("figcaption", {
    className: "pz-video__caption"
  }, caption));
}
Object.assign(__ds_scope, { VideoCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/VideoCard.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Dialog.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Dialog({
  open = true,
  onClose,
  eyebrow,
  title,
  children,
  footer,
  size = "md",
  placement = "center",
  inline = false,
  className = "",
  ...rest
}) {
  React.useEffect(() => {
    if (!open || inline || !onClose) return undefined;
    const onKey = e => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, inline, onClose]);
  if (!open) return null;
  const right = placement === "right";
  const panel = /*#__PURE__*/React.createElement("div", _extends({
    role: "dialog",
    "aria-modal": inline ? undefined : true,
    "aria-label": typeof title === "string" ? title : undefined,
    className: ["pz-dialog", size !== "md" && `pz-dialog--${size}`, right && "pz-dialog--right", className].filter(Boolean).join(" "),
    onClick: e => e.stopPropagation()
  }, rest), /*#__PURE__*/React.createElement("div", {
    className: "pz-dialog__head"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pz-dialog__titles"
  }, eyebrow && /*#__PURE__*/React.createElement(__ds_scope.ScriptLabel, {
    size: "sm"
  }, eyebrow), title && /*#__PURE__*/React.createElement("h2", {
    className: "pz-dialog__title"
  }, title)), onClose && /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "x",
    label: "Close",
    variant: "outline",
    size: "sm",
    onClick: onClose
  })), /*#__PURE__*/React.createElement("div", {
    className: "pz-dialog__body"
  }, children), footer && /*#__PURE__*/React.createElement("div", {
    className: "pz-dialog__foot"
  }, footer));
  if (inline) return panel;
  return /*#__PURE__*/React.createElement("div", {
    className: ["pz-dialog-scrim", right && "pz-dialog-scrim--right"].filter(Boolean).join(" "),
    onClick: onClose
  }, panel);
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Tag({
  tone = "ink",
  icon,
  size = "md",
  selected,
  onClick,
  onRemove,
  className = "",
  children,
  ...rest
}) {
  const interactive = !!onClick;
  const cls = ["pz-tag", tone !== "ink" && `pz-tag--${tone}`, size === "sm" && "pz-tag--sm", interactive && "pz-tag--interactive", className].filter(Boolean).join(" ");
  const s = size === "sm" ? 12 : 14;
  const inner = /*#__PURE__*/React.createElement(React.Fragment, null, icon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: s,
    strokeWidth: 2.25
  }), /*#__PURE__*/React.createElement("span", null, children), onRemove && /*#__PURE__*/React.createElement("span", {
    role: "button",
    tabIndex: 0,
    "aria-label": "Remove",
    className: "pz-tag__remove",
    onClick: e => {
      e.stopPropagation();
      onRemove();
    },
    onKeyDown: e => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        onRemove();
      }
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "x",
    size: s,
    strokeWidth: 2.5
  })));
  if (interactive) return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    className: cls,
    "aria-pressed": !!selected,
    onClick: onClick
  }, rest), inner);
  return /*#__PURE__*/React.createElement("span", _extends({
    className: cls
  }, rest), inner);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tag.jsx", error: String((e && e.message) || e) }); }

// components/content/MenuCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function MenuCard({
  name,
  description,
  price,
  image,
  media,
  alt = "",
  tags = [],
  badge,
  onAdd,
  addLabel = "Add",
  onClick,
  layout = "stack",
  framed = true,
  className = "",
  ...rest
}) {
  const cls = ["pz-menucard", layout === "row" && "pz-menucard--row", !framed && "pz-menucard--bare", onClick && "pz-menucard--clickable", className].filter(Boolean).join(" ");
  const p = typeof price === "number" ? "$" + (Number.isInteger(price) ? price : price.toFixed(2)) : price;
  return /*#__PURE__*/React.createElement("article", _extends({
    className: cls,
    onClick: onClick
  }, rest), /*#__PURE__*/React.createElement("div", {
    className: "pz-menucard__media"
  }, media || (image ? /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: alt,
    className: "pz-cutout"
  }) : /*#__PURE__*/React.createElement(__ds_scope.Placeholder, {
    shape: "circle",
    label: name ? name + " — cutout" : "Cutout"
  })), badge && /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    className: "pz-menucard__badge"
  }, badge)), /*#__PURE__*/React.createElement("div", {
    className: "pz-menucard__body"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "pz-menucard__name"
  }, name), description && /*#__PURE__*/React.createElement("p", {
    className: "pz-menucard__desc"
  }, description), tags.length > 0 && /*#__PURE__*/React.createElement("div", {
    className: "pz-menucard__tags"
  }, tags.map(t => typeof t === "string" ? /*#__PURE__*/React.createElement(__ds_scope.Tag, {
    key: t,
    size: "sm"
  }, t) : /*#__PURE__*/React.createElement(__ds_scope.Tag, {
    key: t.label,
    size: "sm",
    tone: t.tone,
    icon: t.icon
  }, t.label))), /*#__PURE__*/React.createElement("div", {
    className: "pz-menucard__foot"
  }, /*#__PURE__*/React.createElement("span", {
    className: "pz-menucard__price"
  }, p), onAdd && /*#__PURE__*/React.createElement(__ds_scope.Button, {
    size: "sm",
    variant: "ink",
    icon: "plus",
    onClick: e => {
      e.stopPropagation();
      onAdd();
    }
  }, addLabel))));
}
Object.assign(__ds_scope, { MenuCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/MenuCard.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const TONE_ICON = {
  info: "info",
  success: "check",
  error: "circle-alert",
  brand: "pizza"
};
function Toast({
  tone = "success",
  title,
  message,
  icon,
  actionLabel,
  onAction,
  onClose,
  className = "",
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "status",
    className: ["pz-toast", `pz-toast--${tone}`, className].filter(Boolean).join(" ")
  }, rest), /*#__PURE__*/React.createElement("span", {
    className: "pz-toast__icon"
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon || TONE_ICON[tone] || "info",
    size: 16,
    strokeWidth: 2.5
  })), /*#__PURE__*/React.createElement("div", {
    className: "pz-toast__text"
  }, title && /*#__PURE__*/React.createElement("div", {
    className: "pz-toast__title"
  }, title), message && /*#__PURE__*/React.createElement("div", {
    className: "pz-toast__msg"
  }, message), actionLabel && /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "pz-toast__action",
    onClick: onAction
  }, actionLabel)), onClose && /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "pz-toast__close",
    "aria-label": "Dismiss",
    onClick: onClose
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "x",
    size: 16,
    strokeWidth: 2
  })));
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Checkbox({
  label,
  description,
  meta,
  disabled,
  className = "",
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", {
    className: ["pz-check", disabled && "pz-check--disabled", className].filter(Boolean).join(" ")
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox",
    disabled: disabled
  }, rest)), /*#__PURE__*/React.createElement("span", {
    className: "pz-check__box",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "check",
    size: 16,
    strokeWidth: 3
  })), (label || description) && /*#__PURE__*/React.createElement("span", {
    className: "pz-check__text"
  }, label && /*#__PURE__*/React.createElement("span", null, label), description && /*#__PURE__*/React.createElement("span", {
    className: "pz-check__desc"
  }, description)), meta && /*#__PURE__*/React.createElement("span", {
    className: "pz-check__meta"
  }, meta));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Input({
  label,
  hint,
  error,
  icon,
  suffix,
  size = "md",
  id,
  disabled,
  className = "",
  style,
  ...rest
}) {
  const auto = React.useId();
  const inputId = id || auto;
  const box = ["pz-input", size !== "md" && `pz-input--${size}`, error && "pz-input--error", disabled && "pz-input--disabled"].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement("div", {
    className: ["pz-field", className].filter(Boolean).join(" "),
    style: style
  }, label && /*#__PURE__*/React.createElement("label", {
    className: "pz-field__label",
    htmlFor: inputId
  }, label), /*#__PURE__*/React.createElement("div", {
    className: box
  }, icon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 18,
    className: "pz-input__icon"
  }), /*#__PURE__*/React.createElement("input", _extends({
    id: inputId,
    disabled: disabled,
    "aria-invalid": error ? true : undefined
  }, rest)), suffix && /*#__PURE__*/React.createElement("span", {
    className: "pz-input__suffix"
  }, suffix)), error ? /*#__PURE__*/React.createElement("span", {
    className: "pz-field__error"
  }, error) : hint ? /*#__PURE__*/React.createElement("span", {
    className: "pz-field__hint"
  }, hint) : null);
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/QuantityStepper.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function QuantityStepper({
  value = 1,
  min = 1,
  max = 20,
  onChange,
  size = "md",
  label = "Quantity",
  className = "",
  ...rest
}) {
  const set = v => onChange && onChange(Math.max(min, Math.min(max, v)));
  const s = size === "sm" ? 14 : 18;
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "group",
    "aria-label": label,
    className: ["pz-stepper", size === "sm" && "pz-stepper--sm", className].filter(Boolean).join(" ")
  }, rest), /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "Decrease",
    onClick: () => set(value - 1),
    disabled: value <= min
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "minus",
    size: s,
    strokeWidth: 2.5
  })), /*#__PURE__*/React.createElement("span", {
    className: "pz-stepper__value",
    "aria-live": "polite"
  }, value), /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "Increase",
    onClick: () => set(value + 1),
    disabled: value >= max
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "plus",
    size: s,
    strokeWidth: 2.5
  })));
}
Object.assign(__ds_scope, { QuantityStepper });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/QuantityStepper.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Select({
  label,
  hint,
  error,
  options = [],
  placeholder,
  size = "md",
  id,
  disabled,
  className = "",
  style,
  ...rest
}) {
  const auto = React.useId();
  const selectId = id || auto;
  const box = ["pz-input", "pz-select", size !== "md" && `pz-input--${size}`, error && "pz-input--error", disabled && "pz-input--disabled"].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement("div", {
    className: ["pz-field", className].filter(Boolean).join(" "),
    style: style
  }, label && /*#__PURE__*/React.createElement("label", {
    className: "pz-field__label",
    htmlFor: selectId
  }, label), /*#__PURE__*/React.createElement("div", {
    className: box
  }, /*#__PURE__*/React.createElement("select", _extends({
    id: selectId,
    disabled: disabled,
    "aria-invalid": error ? true : undefined
  }, rest), placeholder && /*#__PURE__*/React.createElement("option", {
    value: "",
    disabled: true
  }, placeholder), options.map(o => {
    const opt = typeof o === "string" ? {
      value: o,
      label: o
    } : o;
    return /*#__PURE__*/React.createElement("option", {
      key: opt.value,
      value: opt.value,
      disabled: opt.disabled
    }, opt.label);
  })), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-down",
    size: 18,
    strokeWidth: 2,
    className: "pz-select__chev"
  })), error ? /*#__PURE__*/React.createElement("span", {
    className: "pz-field__error"
  }, error) : hint ? /*#__PURE__*/React.createElement("span", {
    className: "pz-field__hint"
  }, hint) : null);
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/navigation/RailNav.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function RailNav({
  menuOpen = false,
  onMenuClick,
  onSearchClick,
  items = [],
  className = "",
  ...rest
}) {
  return /*#__PURE__*/React.createElement("nav", _extends({
    className: ["pz-rail", className].filter(Boolean).join(" "),
    "aria-label": "Site"
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: menuOpen ? "x" : "menu",
    label: menuOpen ? "Close menu" : "Open menu",
    size: "sm",
    onClick: onMenuClick,
    "aria-expanded": menuOpen
  }), /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "search",
    label: "Search",
    size: "sm",
    onClick: onSearchClick
  }), items.map(it => /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    key: it.label,
    icon: it.icon,
    label: it.label,
    size: "sm",
    onClick: it.onClick,
    badge: it.badge
  })));
}
Object.assign(__ds_scope, { RailNav });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/RailNav.jsx", error: String((e && e.message) || e) }); }

// components/navigation/SiteHeader.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function SiteHeader({
  brandName = "Yuji’s",
  tagline,
  onBrandClick,
  links = [],
  activeLink,
  onLinkClick,
  ctaLabel = "Order now",
  onCtaClick,
  cartCount,
  onCartClick,
  className = "",
  ...rest
}) {
  const go = (fn, arg) => e => {
    if (fn) {
      e.preventDefault();
      fn(arg);
    }
  };
  return /*#__PURE__*/React.createElement("header", _extends({
    className: ["pz-header", className].filter(Boolean).join(" ")
  }, rest), /*#__PURE__*/React.createElement("a", {
    className: "pz-header__brand",
    href: "#",
    onClick: go(onBrandClick),
    "aria-label": brandName + " home"
  }, /*#__PURE__*/React.createElement(__ds_scope.Wordmark, {
    name: brandName,
    tagline: tagline
  })), links.length > 0 && /*#__PURE__*/React.createElement("nav", {
    className: "pz-header__nav"
  }, links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l.id,
    href: l.href || "#",
    className: "pz-header__link",
    "aria-current": activeLink === l.id ? "page" : undefined,
    onClick: go(onLinkClick, l.id)
  }, l.label))), /*#__PURE__*/React.createElement("div", {
    className: "pz-header__actions"
  }, cartCount !== undefined && /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "shopping-bag",
    label: "Your order",
    onClick: onCartClick,
    badge: cartCount || null
  }), ctaLabel && /*#__PURE__*/React.createElement(__ds_scope.Button, {
    size: "sm",
    onClick: onCtaClick
  }, ctaLabel)));
}
Object.assign(__ds_scope, { SiteHeader });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/SiteHeader.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Tabs({
  items = [],
  value,
  onChange,
  variant = "underline",
  size = "md",
  className = "",
  ...rest
}) {
  const seg = variant === "segmented";
  const cls = [seg ? "pz-segmented" : "pz-tabs", size === "sm" && (seg ? "pz-segmented--sm" : "pz-tabs--sm"), className].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "tablist",
    className: cls
  }, rest), items.map(it => {
    const id = it.id;
    const sel = id === value;
    return /*#__PURE__*/React.createElement("button", {
      key: id,
      type: "button",
      role: "tab",
      "aria-selected": sel,
      disabled: it.disabled,
      className: seg ? "pz-segment" : "pz-tab",
      onClick: () => onChange && onChange(id)
    }, it.icon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: it.icon,
      size: seg ? 16 : 18,
      strokeWidth: 2
    }), /*#__PURE__*/React.createElement("span", null, it.label), it.count != null && /*#__PURE__*/React.createElement("span", {
      className: "pz-tab__count"
    }, it.count));
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/App.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
(() => {
  const {
    Toast,
    Dialog,
    Placeholder
  } = window.PizzaWebsiteDesignSystem_ca709c;
  const D = window.PZ_DATA;
  const fmt = window.PZ_FMT;
  const ROUTE_KEY = "pz-kit-route";
  function App() {
    const [route, setRoute] = React.useState(() => window.PZ_START || localStorage.getItem(ROUTE_KEY) || "pizza");
    const [menuOpen, setMenuOpen] = React.useState(false);
    const [searchOpen, setSearchOpen] = React.useState(false);
    const [customizing, setCustomizing] = React.useState(null);
    const [lines, setLines] = React.useState([]);
    const [cartOpen, setCartOpen] = React.useState(false);
    const [placed, setPlaced] = React.useState(false);
    const [video, setVideo] = React.useState(false);
    const [toasts, setToasts] = React.useState([]);
    const go = r => {
      setMenuOpen(false);
      if (r === "order") {
        setCartOpen(true);
        return;
      }
      const target = r === "about" ? "pizza" : r;
      setRoute(target);
      if (!window.PZ_START) localStorage.setItem(ROUTE_KEY, target);
      if (r === "about") {
        setTimeout(() => {
          const el = document.getElementById("about");
          if (el) window.scrollTo({
            top: el.getBoundingClientRect().top + window.scrollY,
            behavior: "smooth"
          });
        }, 60);
      } else window.scrollTo(0, 0);
    };
    const dismiss = id => setToasts(ts => ts.filter(x => x.id !== id));
    const toast = t => {
      const id = Date.now() + Math.random();
      setToasts(ts => [...ts.slice(-2), {
        ...t,
        id
      }]);
      setTimeout(() => dismiss(id), 4200);
    };
    const addLine = line => {
      setPlaced(false);
      setLines(ls => [...ls, {
        ...line,
        key: Date.now() + Math.random()
      }]);
      toast({
        title: "Added to your order",
        message: (line.qty > 1 ? line.qty + " × " : "") + line.name + (line.summary ? " · " + line.summary : ""),
        actionLabel: "View order",
        onAction: () => setCartOpen(true)
      });
    };
    const pick = item => item.cat === "pizza" ? setCustomizing(item) : addLine({
      id: item.id,
      name: item.name,
      unit: item.price,
      qty: 1,
      summary: ""
    });
    const orderSize = sizeId => {
      const s = D.lineup.find(x => x.id === sizeId);
      if (s && s.price != null) addLine({
        id: "margherita-" + s.id,
        name: "Margherita",
        unit: s.price,
        qty: 1,
        summary: s.label
      });else setCustomizing({
        ...D.items[0],
        presetSize: sizeId
      });
    };
    const cartCount = lines.reduce((n, l) => n + l.qty, 0);
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(SiteChrome, {
      route: route,
      menuOpen: menuOpen,
      setMenuOpen: setMenuOpen,
      onSearch: () => setSearchOpen(true),
      cartCount: cartCount,
      onCart: () => setCartOpen(true),
      onNav: go
    }), route === "menu" ? /*#__PURE__*/React.createElement(MenuPage, {
      onPick: pick
    }) : /*#__PURE__*/React.createElement(PizzaPage, {
      onPick: pick,
      onOrder: orderSize,
      onMenu: () => go("menu"),
      onPlay: () => setVideo(true)
    }), searchOpen && /*#__PURE__*/React.createElement(SearchDialog, {
      onClose: () => setSearchOpen(false),
      onPick: it => {
        setSearchOpen(false);
        pick(it);
      }
    }), customizing && /*#__PURE__*/React.createElement(CustomizeDialog, {
      item: customizing,
      onClose: () => setCustomizing(null),
      onAdd: line => {
        setCustomizing(null);
        addLine(line);
      }
    }), cartOpen && /*#__PURE__*/React.createElement(CartDrawer, {
      lines: lines,
      setLines: setLines,
      placed: placed,
      onPlace: () => {
        setPlaced(true);
        toast({
          tone: "brand",
          title: "Order’s in",
          message: "We’ll text you when it’s out the door."
        });
      },
      onClose: () => {
        setCartOpen(false);
        if (placed) {
          setLines([]);
          setPlaced(false);
        }
      },
      onBrowse: () => {
        setCartOpen(false);
        if (placed) {
          setLines([]);
          setPlaced(false);
        }
        go("menu");
      }
    }), video && /*#__PURE__*/React.createElement(Dialog, {
      size: "lg",
      eyebrow: "From the oven",
      title: "Meet the pizzaiolo",
      onClose: () => setVideo(false)
    }, /*#__PURE__*/React.createElement(Placeholder, {
      tone: "dark",
      ratio: "16 / 9",
      label: "Video player \u2014 supply the clip"
    })), /*#__PURE__*/React.createElement("div", {
      className: "kit-toasts"
    }, toasts.map(({
      id,
      ...t
    }) => /*#__PURE__*/React.createElement(Toast, _extends({
      key: id
    }, t, {
      onAction: t.onAction ? () => {
        dismiss(id);
        t.onAction();
      } : undefined,
      onClose: () => dismiss(id)
    })))));
  }
  ReactDOM.createRoot(document.getElementById("root")).render(/*#__PURE__*/React.createElement(App, null));
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/App.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/CartDrawer.jsx
try { (() => {
(() => {
  const {
    Dialog,
    Tabs,
    Input,
    Select,
    QuantityStepper,
    TextLink,
    Button,
    ScriptLabel
  } = window.PizzaWebsiteDesignSystem_ca709c;
  const D = window.PZ_DATA;
  const fmt = window.PZ_FMT;
  function CartDrawer({
    lines,
    setLines,
    placed,
    onPlace,
    onClose,
    onBrowse
  }) {
    const [mode, setMode] = React.useState("delivery");
    const [addr, setAddr] = React.useState("");
    const [loc, setLoc] = React.useState(D.locations[0].value);
    const [err, setErr] = React.useState(null);
    const sub = lines.reduce((n, l) => n + l.unit * l.qty, 0);
    const fee = mode === "delivery" && lines.length ? 3.99 : 0;
    const total = sub + fee;
    const setQty = (key, q) => setLines(ls => q <= 0 ? ls.filter(l => l.key !== key) : ls.map(l => l.key === key ? {
      ...l,
      qty: q
    } : l));
    const place = () => {
      if (mode === "delivery" && !addr.trim()) {
        setErr("We need somewhere to bring it.");
        return;
      }
      onPlace();
    };
    if (placed) {
      const where = mode === "delivery" ? "Heading to " + addr + ". We’ll text when it’s out the door." : "Pick up at the " + D.locations.find(l => l.value === loc).label + ". Your name’s on the box.";
      return /*#__PURE__*/React.createElement(Dialog, {
        placement: "right",
        eyebrow: "Order\u2019s in!",
        title: mode === "delivery" ? "See you in 35" : "Ready in 20",
        onClose: onClose
      }, /*#__PURE__*/React.createElement("div", {
        className: "cart"
      }, /*#__PURE__*/React.createElement("p", {
        className: "pz-body"
      }, where), /*#__PURE__*/React.createElement("div", {
        className: "cart__lines"
      }, lines.map(l => /*#__PURE__*/React.createElement("div", {
        className: "cart__line",
        key: l.key
      }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
        className: "cart__name"
      }, l.qty + " × " + l.name), /*#__PURE__*/React.createElement("div", {
        className: "cart__meta"
      }, l.summary)), /*#__PURE__*/React.createElement("div", {
        className: "cart__price"
      }, fmt(l.unit * l.qty))))), /*#__PURE__*/React.createElement("div", {
        className: "cart__total"
      }, /*#__PURE__*/React.createElement("span", null, "Paid"), /*#__PURE__*/React.createElement("span", null, fmt(total))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Button, {
        variant: "ink",
        iconRight: "arrow-right",
        onClick: onBrowse
      }, "Back to the menu"))));
    }
    const footer = lines.length ? /*#__PURE__*/React.createElement("div", {
      className: "cart__foot"
    }, /*#__PURE__*/React.createElement("div", {
      className: "cart__sum"
    }, /*#__PURE__*/React.createElement("span", null, "Subtotal"), /*#__PURE__*/React.createElement("span", null, fmt(sub))), mode === "delivery" && /*#__PURE__*/React.createElement("div", {
      className: "cart__sum"
    }, /*#__PURE__*/React.createElement("span", null, "Delivery"), /*#__PURE__*/React.createElement("span", null, fmt(fee))), /*#__PURE__*/React.createElement("div", {
      className: "cart__total"
    }, /*#__PURE__*/React.createElement("span", null, "Total"), /*#__PURE__*/React.createElement("span", null, fmt(total))), /*#__PURE__*/React.createElement(Button, {
      block: true,
      size: "lg",
      onClick: place
    }, "Place order — " + fmt(total))) : null;
    return /*#__PURE__*/React.createElement(Dialog, {
      placement: "right",
      eyebrow: "Almost there",
      title: "Your order",
      onClose: onClose,
      footer: footer
    }, lines.length === 0 ? /*#__PURE__*/React.createElement("div", {
      className: "cart__empty"
    }, /*#__PURE__*/React.createElement(ScriptLabel, null, "Nothing in here yet."), /*#__PURE__*/React.createElement("p", {
      className: "pz-small"
    }, "The oven\u2019s hot. Go pick something."), /*#__PURE__*/React.createElement(Button, {
      variant: "ink",
      iconRight: "arrow-right",
      onClick: onBrowse
    }, "See the menu")) : /*#__PURE__*/React.createElement("div", {
      className: "cart"
    }, /*#__PURE__*/React.createElement(Tabs, {
      variant: "segmented",
      value: mode,
      onChange: setMode,
      style: {
        width: "100%"
      },
      items: [{
        id: "delivery",
        label: "Delivery",
        icon: "truck"
      }, {
        id: "pickup",
        label: "Pickup",
        icon: "store"
      }]
    }), mode === "delivery" ? /*#__PURE__*/React.createElement(Input, {
      label: "Deliver to",
      icon: "map-pin",
      placeholder: "Street address",
      value: addr,
      onChange: e => {
        setAddr(e.target.value);
        setErr(null);
      },
      error: err,
      hint: "About 35 min"
    }) : /*#__PURE__*/React.createElement(Select, {
      label: "Pick up from",
      value: loc,
      onChange: e => setLoc(e.target.value),
      options: D.locations,
      hint: "Ready in about 20 min"
    }), /*#__PURE__*/React.createElement("div", {
      className: "cart__lines"
    }, lines.map(l => /*#__PURE__*/React.createElement("div", {
      className: "cart__line",
      key: l.key
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      className: "cart__name"
    }, l.name), /*#__PURE__*/React.createElement("div", {
      className: "cart__meta"
    }, l.summary)), /*#__PURE__*/React.createElement("div", {
      className: "cart__price"
    }, fmt(l.unit * l.qty)), /*#__PURE__*/React.createElement("div", {
      className: "cart__row"
    }, /*#__PURE__*/React.createElement(QuantityStepper, {
      size: "sm",
      value: l.qty,
      min: 0,
      onChange: q => setQty(l.key, q)
    }), /*#__PURE__*/React.createElement(TextLink, {
      onClick: () => setQty(l.key, 0)
    }, "Remove")))))));
  }
  Object.assign(window, {
    CartDrawer
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/CartDrawer.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Chrome.jsx
try { (() => {
(() => {
  const {
    RailNav,
    SiteHeader,
    Dialog,
    Input
  } = window.PizzaWebsiteDesignSystem_ca709c;
  const D = window.PZ_DATA;
  const fmt = window.PZ_FMT;
  function SiteChrome({
    route,
    menuOpen,
    setMenuOpen,
    onSearch,
    cartCount,
    onCart,
    onNav
  }) {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
      className: "kit-rail"
    }, /*#__PURE__*/React.createElement(RailNav, {
      menuOpen: menuOpen,
      onMenuClick: () => setMenuOpen(!menuOpen),
      onSearchClick: onSearch
    })), menuOpen && /*#__PURE__*/React.createElement(MenuOverlay, {
      route: route,
      cartCount: cartCount,
      onNav: onNav
    }), /*#__PURE__*/React.createElement(SiteHeader, {
      className: "kit-header",
      brandName: D.brand.name,
      tagline: D.brand.tagline,
      cartCount: cartCount,
      onCartClick: onCart,
      onBrandClick: () => onNav("pizza"),
      onCtaClick: () => onNav("menu")
    }));
  }
  function MenuOverlay({
    route,
    cartCount,
    onNav
  }) {
    const links = [["pizza", "Our pizza", "The Margherita, start to finish"], ["menu", "The menu", "See all nine pies here"], ["about", "About us", "The shop and the oven"], ["order", "Your order", cartCount ? cartCount + " in the bag" : "Watchu feeling?"]];
    return /*#__PURE__*/React.createElement("div", {
      className: "kit-overlay"
    }, /*#__PURE__*/React.createElement("nav", {
      className: "kit-overlay__nav"
    }, links.map(([id, label, note]) => /*#__PURE__*/React.createElement("button", {
      key: id,
      className: "kit-overlay__link",
      "aria-current": route === id ? "page" : undefined,
      onClick: () => onNav(id)
    }, label, /*#__PURE__*/React.createElement("small", null, note)))));
  }
  function SearchDialog({
    onClose,
    onPick
  }) {
    const [q, setQ] = React.useState("");
    const term = q.trim().toLowerCase();
    const res = term ? D.items.filter(i => (i.name + " " + i.desc).toLowerCase().includes(term)) : D.items.filter(i => i.badge);
    return /*#__PURE__*/React.createElement(Dialog, {
      size: "sm",
      eyebrow: "Hungry for something?",
      title: "Search",
      onClose: onClose
    }, /*#__PURE__*/React.createElement("div", {
      className: "srch"
    }, /*#__PURE__*/React.createElement(Input, {
      icon: "search",
      placeholder: "Try \u201Choney\u201D or \u201Cfries\u201D",
      value: q,
      onChange: e => setQ(e.target.value),
      autoFocus: true
    }), /*#__PURE__*/React.createElement("span", {
      className: "pz-field__label"
    }, term ? res.length + " found" : "Popular right now"), /*#__PURE__*/React.createElement("div", {
      className: "srch__list"
    }, res.slice(0, 6).map(i => /*#__PURE__*/React.createElement("button", {
      key: i.id,
      className: "srch__item",
      onClick: () => onPick(i)
    }, /*#__PURE__*/React.createElement("span", null, i.name), /*#__PURE__*/React.createElement("span", null, fmt(i.price)))), term && !res.length && /*#__PURE__*/React.createElement("p", {
      className: "pz-small"
    }, "Nothing by that name. Yet."))));
  }
  Object.assign(window, {
    SiteChrome,
    SearchDialog
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Chrome.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/CustomizeDialog.jsx
try { (() => {
(() => {
  const {
    Dialog,
    Radio,
    Select,
    Checkbox,
    Switch,
    QuantityStepper,
    Button,
    Tag
  } = window.PizzaWebsiteDesignSystem_ca709c;
  const D = window.PZ_DATA;
  const fmt = window.PZ_FMT;
  function CustomizeDialog({
    item,
    onClose,
    onAdd
  }) {
    const [size, setSize] = React.useState(D.sizes.some(s => s.id === item.presetSize) ? item.presetSize : "14");
    const [crust, setCrust] = React.useState("classic");
    const [tops, setTops] = React.useState({});
    const [well, setWell] = React.useState(false);
    const [qty, setQty] = React.useState(1);
    const sz = D.sizes.find(s => s.id === size);
    const cr = D.crusts.find(c => c.id === crust);
    const extras = D.toppings.filter(t => tops[t.id]);
    const unit = item.price + sz.delta + cr.price + extras.reduce((n, t) => n + t.price, 0);
    const summary = [sz.label, cr.label, ...extras.map(e => e.label), well && "Well done"].filter(Boolean).join(" · ");
    return /*#__PURE__*/React.createElement(Dialog, {
      size: "lg",
      eyebrow: "Make it yours",
      title: item.name,
      onClose: onClose,
      footer: /*#__PURE__*/React.createElement("div", {
        className: "cz__foot"
      }, /*#__PURE__*/React.createElement(QuantityStepper, {
        value: qty,
        onChange: setQty
      }), /*#__PURE__*/React.createElement(Button, {
        size: "lg",
        onClick: () => onAdd({
          id: item.id,
          name: item.name,
          unit,
          qty,
          summary
        })
      }, "Add to order — " + fmt(unit * qty)))
    }, /*#__PURE__*/React.createElement("div", {
      className: "cz"
    }, /*#__PURE__*/React.createElement("div", {
      className: "cz__media"
    }, /*#__PURE__*/React.createElement("div", {
      className: "cz__cut"
    }, item.img ? /*#__PURE__*/React.createElement("img", {
      src: item.img,
      alt: item.name
    }) : /*#__PURE__*/React.createElement("image-slot", {
      id: "dlg-" + item.id,
      shape: "circle",
      placeholder: item.name + " cutout"
    })), /*#__PURE__*/React.createElement("p", {
      className: "pz-small"
    }, item.desc), item.tags.length > 0 && /*#__PURE__*/React.createElement("div", {
      className: "cz__tags"
    }, item.tags.map(t => /*#__PURE__*/React.createElement(Tag, {
      key: t,
      size: "sm",
      tone: D.tags[t].tone,
      icon: D.tags[t].icon
    }, D.tags[t].label)))), /*#__PURE__*/React.createElement("div", {
      className: "cz__form"
    }, /*#__PURE__*/React.createElement("div", {
      className: "cz__group"
    }, /*#__PURE__*/React.createElement("span", {
      className: "pz-field__label"
    }, "Size"), /*#__PURE__*/React.createElement("div", {
      className: "cz__sizes"
    }, D.sizes.map(s => /*#__PURE__*/React.createElement(Radio, {
      key: s.id,
      variant: "tile",
      name: "cz-size",
      label: s.label,
      description: s.serves,
      meta: fmt(item.price + s.delta),
      checked: size === s.id,
      onChange: () => setSize(s.id)
    })))), /*#__PURE__*/React.createElement(Select, {
      label: "Crust",
      value: crust,
      onChange: e => setCrust(e.target.value),
      options: D.crusts.map(c => ({
        value: c.id,
        label: c.label + (c.price ? " (+$" + c.price + ")" : "")
      }))
    }), /*#__PURE__*/React.createElement("div", {
      className: "cz__group"
    }, /*#__PURE__*/React.createElement("span", {
      className: "pz-field__label"
    }, "Extras"), /*#__PURE__*/React.createElement("div", {
      className: "cz__extras"
    }, D.toppings.map(t => /*#__PURE__*/React.createElement(Checkbox, {
      key: t.id,
      label: t.label,
      meta: t.price ? "+$" + t.price : "Free",
      checked: !!tops[t.id],
      onChange: e => setTops({
        ...tops,
        [t.id]: e.target.checked
      })
    })))), /*#__PURE__*/React.createElement(Switch, {
      label: "Well done",
      description: "Extra char on the crust.",
      checked: well,
      onChange: e => setWell(e.target.checked)
    }))));
  }
  Object.assign(window, {
    CustomizeDialog
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/CustomizeDialog.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/HeroMarquee.jsx
try { (() => {
(() => {
  const {
    Headline,
    ScriptLabel,
    Button
  } = window.PizzaWebsiteDesignSystem_ca709c;
  const D = window.PZ_DATA;
  const fmt = window.PZ_FMT;

  // Continuous horizontal conveyor of every photographed pie. Two identical halves → translateX(-50%) loops seamlessly.
  function HeroMarquee({
    onPick,
    onMenu
  }) {
    const pies = D.items.filter(i => i.cat === "pizza" && i.img);
    const set = [...pies, ...pies];
    const total = D.items.filter(i => i.cat === "pizza").length;
    return /*#__PURE__*/React.createElement("section", {
      className: "hero"
    }, /*#__PURE__*/React.createElement("div", {
      className: "hero__head"
    }, /*#__PURE__*/React.createElement(ScriptLabel, null, "Wood-fired pizza, handcrafted excellence.")), /*#__PURE__*/React.createElement(Headline, {
      level: "mega",
      align: "center",
      className: "hero__word"
    }, D.brand.name), /*#__PURE__*/React.createElement("div", {
      className: "hero__marquee",
      "aria-label": "Our pizzas"
    }, /*#__PURE__*/React.createElement("div", {
      className: "hero__track"
    }, [0, 1].map(half => set.map((p, i) => /*#__PURE__*/React.createElement("button", {
      key: half + "-" + i,
      type: "button",
      className: "hero__pie",
      onClick: () => onPick(p),
      "aria-hidden": half === 1 ? true : undefined,
      tabIndex: half === 1 ? -1 : 0
    }, /*#__PURE__*/React.createElement("span", {
      className: "hero__disc"
    }, /*#__PURE__*/React.createElement("img", {
      src: p.img,
      alt: half ? "" : p.name,
      className: "hero__img",
      style: {
        animationDelay: -(i * 4.4) + "s"
      }
    })), /*#__PURE__*/React.createElement("span", {
      className: "hero__cap"
    }, /*#__PURE__*/React.createElement("span", {
      className: "hero__name"
    }, p.name))))))), /*#__PURE__*/React.createElement("div", {
      className: "hero__foot"
    }, /*#__PURE__*/React.createElement("p", {
      className: "pz-lead"
    }, "All handcrafted and made at an order\u2019s notice. See our menu for all options."), /*#__PURE__*/React.createElement("div", {
      className: "hero__ctas"
    }, /*#__PURE__*/React.createElement(Button, {
      size: "lg",
      onClick: onMenu
    }, "Order now"), /*#__PURE__*/React.createElement(Button, {
      size: "lg",
      variant: "outline",
      onClick: onMenu
    }, "See the menu"))));
  }
  Object.assign(window, {
    HeroMarquee
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/HeroMarquee.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/MenuPage.jsx
try { (() => {
(() => {
  const {
    ScriptLabel,
    Headline,
    Tabs,
    Tag,
    MenuCard,
    TextLink
  } = window.PizzaWebsiteDesignSystem_ca709c;
  const D = window.PZ_DATA;
  function MenuPage({
    onPick
  }) {
    const [cat, setCat] = React.useState("pizza");
    const [f, setF] = React.useState({
      veg: false,
      spicy: false
    });
    const toggle = k => setF(s => ({
      ...s,
      [k]: !s[k]
    }));
    const shown = D.items.filter(i => i.cat === cat && (!f.veg || i.tags.includes("veg") || i.tags.includes("vegan")) && (!f.spicy || i.tags.includes("spicy")));
    const rows = cat !== "pizza";
    return /*#__PURE__*/React.createElement("main", {
      className: "kit-main"
    }, /*#__PURE__*/React.createElement("div", {
      className: "menu"
    }, /*#__PURE__*/React.createElement("div", {
      className: "menu__head"
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(ScriptLabel, null, "Fresh out the oven"), /*#__PURE__*/React.createElement(Headline, {
      level: "display"
    }, "The menu")), /*#__PURE__*/React.createElement("p", {
      className: "pz-small menu__note"
    }, "Pizzas are 14in in diameter, unless you say otherwise!")), /*#__PURE__*/React.createElement("div", {
      className: "menu__bar"
    }, /*#__PURE__*/React.createElement(Tabs, {
      value: cat,
      onChange: setCat,
      items: D.categories.map(c => ({
        ...c,
        count: D.items.filter(i => i.cat === c.id).length
      }))
    }), /*#__PURE__*/React.createElement("div", {
      className: "menu__filters"
    }, /*#__PURE__*/React.createElement(Tag, {
      icon: "leaf",
      onClick: () => toggle("veg"),
      selected: f.veg
    }, "Veg"), /*#__PURE__*/React.createElement(Tag, {
      icon: "flame",
      onClick: () => toggle("spicy"),
      selected: f.spicy
    }, "Spicy"))), shown.length ? /*#__PURE__*/React.createElement("div", {
      className: "menu__grid" + (rows ? " menu__grid--rows" : "")
    }, shown.map(it => /*#__PURE__*/React.createElement(MenuCard, {
      key: it.id,
      layout: rows ? "row" : "stack",
      name: it.name,
      price: it.price,
      badge: it.badge,
      description: it.desc,
      tags: it.tags.map(t => D.tags[t]),
      image: rows ? undefined : it.img,
      alt: it.name,
      media: rows && it.img ? /*#__PURE__*/React.createElement("img", {
        src: it.img,
        alt: it.name,
        className: "kit-side-photo" + (it.cut ? " kit-side-cut" : "")
      }) : it.img ? undefined : /*#__PURE__*/React.createElement("image-slot", {
        id: "cut-" + it.id,
        shape: rows ? "rect" : "circle",
        placeholder: it.name
      }),
      onClick: () => onPick(it),
      onAdd: () => onPick(it)
    }))) : /*#__PURE__*/React.createElement("div", {
      className: "menu__empty"
    }, /*#__PURE__*/React.createElement(ScriptLabel, null, "Nothing matches that combo."), /*#__PURE__*/React.createElement(TextLink, {
      size: "md",
      onClick: () => setF({
        veg: false,
        spicy: false
      })
    }, "Clear filters"))));
  }
  Object.assign(window, {
    MenuPage
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/MenuPage.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/PizzaPage.jsx
try { (() => {
(() => {
  const {
    Headline,
    ScriptLabel,
    Button,
    StatPanel,
    VideoCard,
    SizeLineup,
    TextLink
  } = window.PizzaWebsiteDesignSystem_ca709c;
  const D = window.PZ_DATA;
  const fmt = window.PZ_FMT;
  function PizzaPage({
    onOrder,
    onMenu,
    onPlay,
    onPick
  }) {
    const storyRef = React.useRef(null);
    const cutRef = React.useRef(null);
    const [size, setSize] = React.useState("14");
    const [vw, setVw] = React.useState(window.innerWidth);
    React.useEffect(() => {
      let raf = 0;
      const update = () => {
        raf = 0;
        const el = storyRef.current,
          cut = cutRef.current;
        if (!el || !cut) return;
        const r = el.getBoundingClientRect();
        const h = cut.offsetHeight;
        const y = Math.min(r.height - h, Math.max(0, -r.top + (window.innerHeight - h) / 2));
        const p = Math.min(1, Math.max(0, -r.top / Math.max(1, r.height - window.innerHeight)));
        cut.style.transform = "translate3d(0," + y.toFixed(1) + "px,0) rotate(" + (-18 + p * 200).toFixed(2) + "deg)";
      };
      const onScroll = () => {
        if (!raf) raf = requestAnimationFrame(update);
      };
      const onResize = () => {
        setVw(window.innerWidth);
        onScroll();
      };
      update();
      window.addEventListener("scroll", onScroll, {
        passive: true
      });
      window.addEventListener("resize", onResize);
      return () => {
        window.removeEventListener("scroll", onScroll);
        window.removeEventListener("resize", onResize);
        cancelAnimationFrame(raf);
      };
    }, []);
    const base = D.items[0];
    const k = Math.min(1, Math.max(0.5, (vw - 280) / 1160));
    const sel = D.lineup.find(s => s.id === size);
    const selPrice = sel.price != null ? sel.price : base.price + D.sizes.find(s => s.id === size).delta;
    return /*#__PURE__*/React.createElement("main", {
      className: "kit-main"
    }, /*#__PURE__*/React.createElement(HeroMarquee, {
      onPick: onPick,
      onMenu: onMenu
    }), /*#__PURE__*/React.createElement("div", {
      className: "story",
      ref: storyRef
    }, /*#__PURE__*/React.createElement("div", {
      className: "story__layer"
    }, /*#__PURE__*/React.createElement("div", {
      className: "story__cutout",
      ref: cutRef
    }, /*#__PURE__*/React.createElement("img", {
      src: base.img,
      alt: "Margherita"
    }))), /*#__PURE__*/React.createElement("section", {
      className: "intro"
    }, /*#__PURE__*/React.createElement("div", {
      className: "intro__copy"
    }, /*#__PURE__*/React.createElement(ScriptLabel, null, "House classic"), /*#__PURE__*/React.createElement(Headline, {
      level: "display",
      className: "kit-display-sm"
    }, "Classic", /*#__PURE__*/React.createElement("br", null), "Margherita"), /*#__PURE__*/React.createElement("p", {
      className: "pz-small"
    }, "Our first pie and still the one we judge ourselves by. Hand-crushed San Marzano tomatoes, torn fior di latte, a fistful of basil and a slick of good olive oil \u2014 then ninety seconds in a 900\xB0 dome until the edge blisters and the middle stays soft. Simple on paper, stubborn in practice. Fold it, don\u2019t fight it."), /*#__PURE__*/React.createElement(Button, {
      variant: "ink",
      onClick: () => onOrder("14")
    }, "Order now")), /*#__PURE__*/React.createElement("div", {
      "aria-hidden": "true"
    }), /*#__PURE__*/React.createElement(StatPanel, {
      stats: D.stats
    })), /*#__PURE__*/React.createElement("section", {
      className: "taste"
    }, /*#__PURE__*/React.createElement(Headline, {
      level: "mega",
      as: "h2",
      className: "taste__word"
    }, "Blistered"), /*#__PURE__*/React.createElement("div", {
      className: "taste__grid"
    }, /*#__PURE__*/React.createElement("div", {
      "aria-hidden": "true"
    }), /*#__PURE__*/React.createElement("div", {
      "aria-hidden": "true"
    }), /*#__PURE__*/React.createElement("div", {
      className: "taste__copy"
    }, /*#__PURE__*/React.createElement("p", {
      className: "pz-small"
    }, "A charred, chewy, gently tangy crust with bright tomato, milky mozzarella and a peppery hit of basil. It\u2019s the pie we eat on our day off, which tells you everything."), /*#__PURE__*/React.createElement(Headline, {
      level: "h4"
    }, "The bake"), /*#__PURE__*/React.createElement("p", {
      className: "pz-small"
    }, "Neapolitan at heart, but we don\u2019t sweat the rulebook. High-hydration dough, cold-fermented for three days, stretched by hand to order and baked right on the oven floor until it\u2019s spotted like a leopard. Eat it quick, while it\u2019s still talking back."))))), /*#__PURE__*/React.createElement("section", {
      className: "sizes"
    }, /*#__PURE__*/React.createElement(ScriptLabel, null, "Hungry level:"), /*#__PURE__*/React.createElement(Headline, {
      level: "display",
      align: "center"
    }, "Pick your size"), /*#__PURE__*/React.createElement(SizeLineup, {
      value: size,
      onChange: setSize,
      items: D.lineup.map((s, i) => ({
        ...s,
        labelSize: [17, 20, 25][i],
        width: Math.round(s.width * k),
        height: s.height ? Math.round(s.height * k) : undefined,
        media: s.shape === "rect" ? /*#__PURE__*/React.createElement("image-slot", {
          id: "size-" + s.id,
          shape: "rect",
          placeholder: s.label
        }) : i === 2 ? /*#__PURE__*/React.createElement("span", {
          style: {
            position: "relative",
            display: "block",
            width: "100%",
            height: "100%"
          }
        }, /*#__PURE__*/React.createElement("img", {
          src: base.img,
          alt: s.label + " Margherita",
          className: "pz-cutout",
          style: {
            objectFit: "contain"
          }
        }), /*#__PURE__*/React.createElement("svg", {
          viewBox: "0 0 100 100",
          "aria-hidden": "true",
          style: {
            position: "absolute",
            left: "-12%",
            top: "-12%",
            width: "124%",
            height: "124%",
            overflow: "visible",
            pointerEvents: "none"
          }
        }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("path", {
          id: "crust-arc",
          d: "M 8,50 A 42,42 0 0 1 92,50",
          fill: "none"
        })), /*#__PURE__*/React.createElement("text", {
          style: {
            fontFamily: "var(--font-display)",
            fontSize: 9,
            letterSpacing: 2.5,
            fill: "var(--text-brand)",
            textTransform: "uppercase"
          }
        }, /*#__PURE__*/React.createElement("textPath", {
          href: "#crust-arc",
          startOffset: "50%",
          textAnchor: "middle"
        }, "Margherita")))) : /*#__PURE__*/React.createElement("img", {
          src: base.img,
          alt: s.label + " Margherita",
          className: "pz-cutout",
          style: {
            objectFit: "contain"
          }
        })
      }))
    }), /*#__PURE__*/React.createElement("div", {
      className: "sizes__cta"
    }, /*#__PURE__*/React.createElement(TextLink, {
      size: "md",
      arrow: true,
      onClick: () => onOrder(size)
    }, "Order " + sel.cta + " — " + fmt(selPrice)))), /*#__PURE__*/React.createElement("section", {
      className: "pairings"
    }, /*#__PURE__*/React.createElement("div", {
      className: "pairings__photo pairings__duo"
    }, /*#__PURE__*/React.createElement("img", {
      src: "pairing-loaded-fries.png",
      alt: "Loaded fries with cheese sauce and bacon"
    })), /*#__PURE__*/React.createElement("div", {
      className: "pairings__copy"
    }, /*#__PURE__*/React.createElement(ScriptLabel, null, "Pairings"), /*#__PURE__*/React.createElement(Headline, {
      level: "display",
      className: "kit-display-sm"
    }, "Don\u2019t forget", /*#__PURE__*/React.createElement("br", null), "the fries"), /*#__PURE__*/React.createElement("p", {
      className: "pz-small",
      style: {
        fontSize: 15
      }
    }, "Cheesy garlic bread for the table, a basket of fries (or the loaded ones), and an ice-cold Olipop to wash it down."), /*#__PURE__*/React.createElement(Button, {
      variant: "ink",
      iconRight: "arrow-right",
      onClick: onMenu
    }, "See the full menu"))), /*#__PURE__*/React.createElement("section", {
      className: "about",
      id: "about"
    }, /*#__PURE__*/React.createElement("div", {
      className: "about__panel"
    }, /*#__PURE__*/React.createElement(ScriptLabel, null, "About ", D.brand.name), /*#__PURE__*/React.createElement(Headline, {
      level: "display",
      className: "kit-display-sm"
    }, "Pull up", /*#__PURE__*/React.createElement("br", null), "a chair"), /*#__PURE__*/React.createElement("p", {
      className: "pz-body"
    }, D.brand.name, " is a neighborhood pizzeria with one big oven and a short list of rules: real fire, slow dough, good tomatoes, and nothing on the menu we wouldn\u2019t eat on our day off."), /*#__PURE__*/React.createElement("p", {
      className: "pz-body"
    }, "Grab a slice at the counter, stay for a whole pie by the window, or take one home still talking back. Either way, the oven\u2019s on and there\u2019s a seat with your name on it."), /*#__PURE__*/React.createElement(Button, {
      variant: "ink",
      iconRight: "arrow-right",
      onClick: onMenu
    }, "See the menu"))));
  }
  Object.assign(window, {
    PizzaPage
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/PizzaPage.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/data.js
try { (() => {
// Sample content for the website UI kit. Brand name is a placeholder.
window.PZ_FMT = n => "$" + (Number.isInteger(n) ? n : n.toFixed(2));
window.PZ_DATA = {
  brand: {
    name: "Yuji’s",
    tagline: "Pizzeria"
  },
  categories: [{
    id: "pizza",
    label: "Pizzas"
  }, {
    id: "sides",
    label: "Sides"
  }, {
    id: "drinks",
    label: "Drinks"
  }],
  tags: {
    veg: {
      label: "Veg",
      tone: "basil",
      icon: "leaf"
    },
    vegan: {
      label: "Vegan",
      tone: "basil",
      icon: "leaf"
    },
    spicy: {
      label: "Spicy",
      tone: "brand",
      icon: "flame"
    },
    nuts: {
      label: "Nuts",
      tone: "ochre",
      icon: "info"
    }
  },
  items: [{
    id: "margherita",
    cat: "pizza",
    name: "Margherita",
    price: 18,
    desc: "San Marzano tomato, fior di latte, basil, good olive oil.",
    tags: ["veg"],
    img: "pizza-margherita.png"
  }, {
    id: "pepperoni",
    cat: "pizza",
    name: "Pepperoni",
    price: 20,
    desc: "Cup-and-char pepperoni, mozzarella, rosemary.",
    tags: [],
    badge: "Bestseller",
    img: "pizza-pepperoni.png"
  }, {
    id: "supreme",
    cat: "pizza",
    name: "Supreme",
    price: 23,
    desc: "Pepperoni, sausage, mushrooms, peppers, red onion, black olives. Everything, on purpose.",
    tags: [],
    img: "pizza-supreme.png"
  }, {
    id: "hot-honey",
    cat: "pizza",
    name: "Hot Honey",
    price: 20,
    desc: "Sausage, roasted peppers, mozzarella, parsley and a hot-honey drizzle. Sweet, then trouble.",
    tags: ["spicy"],
    badge: "New",
    img: "pizza-hot-honey.png"
  }, {
    id: "funghi",
    cat: "pizza",
    name: "Funghi",
    price: 18,
    desc: "Roasted mushrooms, wilted spinach, garlic cream, mozzarella.",
    tags: ["veg"],
    img: "pizza-funghi.png"
  }, {
    id: "quattro",
    cat: "pizza",
    name: "Quattro Formaggi",
    price: 20,
    desc: "Mozzarella, fontina, gorgonzola, parm, a sprig of basil. No tomato, no regrets.",
    tags: ["veg"],
    img: "pizza-quattro.png"
  }, {
    id: "verde",
    cat: "pizza",
    name: "Verde & Rosso",
    price: 20,
    desc: "Half basil pesto with salami, half San Marzano tomato — fior di latte and basil across both.",
    tags: [],
    img: "pizza-verde.png"
  }, {
    id: "diavola",
    cat: "pizza",
    name: "Diavola",
    price: 18,
    desc: "Spicy salami, cherry tomatoes, fior di latte, basil.",
    tags: ["spicy"],
    img: "pizza-diavola.png"
  }, {
    id: "marinara",
    cat: "pizza",
    name: "Marinara",
    price: 18,
    desc: "Tomato, garlic, oregano, basil, olive oil. The original — no cheese.",
    tags: ["vegan"],
    img: "pizza-marinara.png"
  }, {
    id: "garlic-bread",
    cat: "sides",
    name: "Cheesy garlic bread",
    price: 6,
    desc: "Garlic-butter bread under a blanket of melted mozzarella and parsley.",
    tags: [],
    img: "side-garlic-bread.png",
    cut: true
  }, {
    id: "meatballs",
    cat: "sides",
    name: "Meatball skewer",
    price: 8,
    desc: "Sticky-glazed meatballs on a stick, scallions and sesame on top.",
    tags: [],
    img: "side-meatballs-v2.png",
    cut: true
  }, {
    id: "fries",
    cat: "sides",
    name: "House French fries",
    price: 3,
    desc: "Skin-off, double-fried, salted the second they land.",
    tags: [],
    img: "side-fries.png",
    cut: true
  }, {
    id: "loaded-fries",
    cat: "sides",
    name: "Ultimate loaded fries",
    price: 7,
    desc: "Fries buried in seasoned beef, cheddar sauce, crema, tomato, onion and cilantro.",
    tags: [],
    img: "side-loaded-fries.png",
    cut: true
  }, {
    id: "sweet-tea",
    cat: "drinks",
    name: "Sweet tea",
    price: 3,
    desc: "Brewed strong, sugared while it’s hot. Southern-sweet.",
    tags: ["vegan"],
    img: "drink-sweet-tea-v2.png",
    cut: true
  }, {
    id: "unsweet-tea",
    cat: "drinks",
    name: "Unsweet tea",
    price: 2,
    desc: "Same black tea, nothing added. Lemon on request.",
    tags: ["vegan"],
    img: "drink-unsweet-tea-v2.png",
    cut: true
  }, {
    id: "olipop-ginger-ale",
    cat: "drinks",
    name: "Olipop Ginger Ale",
    price: 3,
    desc: "Crisp, gingery, 5g of sugar. Served cold in the can.",
    tags: ["vegan"],
    img: "drink-olipop-ginger-ale.png",
    cut: true
  }, {
    id: "lemonade",
    cat: "drinks",
    name: "House lemonade",
    price: 3,
    desc: "Squeezed every morning.",
    tags: ["vegan"],
    img: "drink-lemonade-v3.png",
    cut: true
  }],
  sizes: [{
    id: "10",
    label: "10 in",
    serves: "Personal",
    delta: -4
  }, {
    id: "14",
    label: "14 in",
    serves: "Serves 2–3",
    delta: 0
  }, {
    id: "18",
    label: "18 in",
    serves: "Serves 4–6",
    delta: 6
  }],
  crusts: [{
    id: "classic",
    label: "Classic",
    price: 0
  }, {
    id: "thin",
    label: "Thin & crispy",
    price: 0
  }, {
    id: "gf",
    label: "Gluten-free",
    price: 3
  }],
  toppings: [{
    id: "honey",
    label: "Hot honey",
    price: 2
  }, {
    id: "pepperoni",
    label: "Pepperoni",
    price: 3
  }, {
    id: "chili",
    label: "Calabrian chili",
    price: 1
  }, {
    id: "basil",
    label: "Extra basil",
    price: 0
  }, {
    id: "garlic",
    label: "Roasted garlic",
    price: 1
  }],
  lineup: [{
    id: "10",
    label: "10 in",
    sublabel: "Personal",
    width: 150,
    cta: "the 10 in"
  }, {
    id: "14",
    label: "14 in",
    sublabel: "Serves 2–3",
    width: 200,
    cta: "the 14 in"
  }, {
    id: "18",
    label: "18 in",
    sublabel: "Serves 4–6",
    width: 250,
    cta: "the 18 in"
  }],
  stats: [{
    label: "Heat",
    sublabel: "Degrees in the dome",
    value: "900",
    fraction: "°F",
    description: "Hot enough to spot the crust before the cheese gives up."
  }, {
    label: "Bake",
    sublabel: "Seconds, door to plate",
    value: "90",
    fraction: "s",
    description: "Fast and loud keeps the middle tender."
  }, {
    label: "Dough",
    sublabel: "Hours of cold rise",
    value: "72",
    fraction: "h",
    description: "Three days in the walk-in for a tangy, airy crumb."
  }],
  locations: [{
    value: "downtown",
    label: "Downtown shop"
  }, {
    value: "eastside",
    label: "Eastside shop"
  }]
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/data.js", error: String((e && e.message) || e) }); }

// ui_kits/website/image-slot.js
try { (() => {
// @ds-adherence-ignore -- omelette starter scaffold (raw elements/hex/px by design)
// Copied omelette starter. Re-running copy_starter_component with this kind overwrites this file with the latest version (page content is unaffected).
/* BEGIN USAGE */
/**
 * <image-slot> — user-fillable image placeholder.
 *
 * Drop this into a deck, mockup, or page wherever a design needs an image.
 * You control the slot's shape; it sizes to its container by default. When the search_stock_photos tool
 * is available, prefill the slot by default — write the photo's URL into
 * src (with credit/credit-href); the user can still fill or replace it
 * by dragging an image file onto it (or clicking to browse). The dropped
 * image persists across reloads via a .image-slots.state.json sidecar —
 * same read-via-fetch / write-via-window.omelette pattern as
 * design_canvas.jsx, so the filled slot shows on share links, downloaded
 * zips, and PPTX export. Outside the omelette runtime the slot is read-only.
 *
 * The sidecar is a SIBLING of the HTML file that uses this component: the
 * read is a document-relative fetch, and the host resolves the bridge's
 * sidecar writes into the previewed file's directory to match (same
 * contract as design_canvas.jsx). Pages in the same directory share one
 * sidecar; keep slot ids distinct across them.
 *
 * Attributes:
 *   id           Persistence key. REQUIRED for the drop to survive reload —
 *                every slot on the page needs a distinct id.
 *   shape        'rect' | 'rounded' | 'circle' | 'pill'   (default 'rounded')
 *                'circle' applies 50% border-radius; on a non-square slot
 *                that's an ellipse — set equal width and height for a true
 *                circle.
 *   radius       Corner radius in px for 'rounded'.       (default 12)
 *   mask         Any CSS clip-path value. Overrides `shape` — use this for
 *                hexagons, blobs, arbitrary polygons.
 *   fit          Initial framing baseline: cover | contain.   (default 'cover')
 *                cover starts the image filling the frame (overflow cropped);
 *                contain starts it fully visible (letterboxed). Either way the
 *                user can always pan/scale from there — double-click, or the
 *                Edit control, enters reframe mode (drag to move, scroll or
 *                corner-handles to scale; Escape / click-out commits). The
 *                crop persists alongside the image in the sidecar.
 *   placeholder  Empty-state caption.                      (default 'Drop an image')
 *   src          Optional initial/fallback image URL. Prefill it with a real
 *                photo via search_stock_photos when that tool is available
 *                (set credit/credit-href from the result). A user drop
 *                overrides it; clearing the drop reveals src again.
 *   credit       Attribution text shown as a small overlay at the
 *                bottom-left of the filled slot. REQUIRED whenever src
 *                points at any Unsplash host (images.unsplash.com,
 *                plus.unsplash.com, …): an Unsplash src with no credit
 *                renders an error tile INSTEAD of the photo (Unsplash
 *                terms forbid showing their photos unattributed). Use the
 *                exact form 'Photo by {photographer name} on Unsplash' —
 *                the overlay then links the name to credit-href and
 *                'Unsplash' to the Unsplash homepage, and links back to
 *                unsplash.com automatically get the required utm referral
 *                params appended at render time. The credit belongs to
 *                the src image, so it only shows while src is what's
 *                displayed — a user-dropped image hides it.
 *   credit-href  Link for the photographer's name in the credit overlay
 *                (their Unsplash profile URL from the stock-photo search
 *                results). http(s) URLs only — anything else renders the
 *                name as plain text.
 *
 * Sizing: the slot fills its container by default (width/height 100%).
 * Put it in a sized wrapper — absolutely positioned, a grid cell, a fixed
 * frame — and it takes exactly that box. When the parent's height is
 * indefinite (ordinary flow), it falls back to full width at a 3:2 aspect
 * ratio instead of collapsing. In a shrink-to-fit parent (a float,
 * width:max-content, an unsized absolute wrapper), percentages have
 * nothing to resolve against — size the slot or its wrapper explicitly
 * there. For a fixed-size slot, set
 * width/height on the element itself (inline style), which overrides the
 * default. When
 * layering content above a slot (full-bleed layouts), make the overlay
 * click-through — pointer-events: none on scrims/text plates, re-enabled
 * on interactive children — so the slot's hover controls stay reachable.
 * Keep the slot's bottom-left corner visually clear as well: the credit
 * overlay renders there, and a dark fade or text plate covering it hides
 * the attribution Unsplash's terms require — end the fade above that
 * corner, or keep it nearly transparent where the credit sits.
 *
 * Usage:
 *   <div style="position:relative;width:100%;height:100%">      <!-- full-bleed: -->
 *     <image-slot id="bg" shape="rect"></image-slot>            <!-- fills the wrapper -->
 *   </div>
 *   <image-slot id="hero"   style="width:800px;height:450px" shape="rounded" radius="20"
 *               placeholder="Drop a hero image"></image-slot>
 *   <image-slot id="avatar" style="width:120px;height:120px" shape="circle"></image-slot>
 *   <image-slot id="kite"   style="width:300px;height:300px"
 *               mask="polygon(50% 0, 100% 50%, 50% 100%, 0 50%)"></image-slot>
 */
/* END USAGE */

(() => {
  const STATE_FILE = '.image-slots.state.json';

  // Unsplash terms require visible attribution wherever their photos
  // display, and every link back to unsplash.com must carry utm referral
  // params. Two render-time rules enforce that here:
  //  - an Unsplash-src slot with NO credit attribute renders an error
  //    tile INSTEAD of the photo (an uncredited Unsplash photo on screen
  //    is itself the terms violation, so it never renders bare);
  //  - rendered credit links pointing at unsplash.com get the referral
  //    params appended when absent (credit-href values live in page
  //    content that can't be edited after the fact).
  // Keep the utm_source value in sync with UTM_SOURCE in
  // platform/web-agent/unsplash.ts — this file is a project-local
  // artifact and cannot import it (equality is pinned by tests).
  const UNSPLASH_HOMEPAGE_HREF = 'https://unsplash.com/?utm_source=claude_design&utm_medium=referral';
  // Host rule mirrors the hotlink validator that admits Unsplash srcs into
  // pages in the first place (cdn$ in unsplash.ts: apex or any subdomain)
  // — Unsplash+ results serve from plus.unsplash.com, not just images.*,
  // and an admitted-but-uncredited photo must error whatever unsplash
  // host it rides on.
  // Trailing-dot FQDNs (images.unsplash.com.) are the same host to the
  // browser but would miss the regex — strip one dot so the check fails
  // CLOSED (unrecognized-but-real Unsplash srcs must error, not render).
  const isUnsplashHost = u => {
    try {
      return /(^|\.)unsplash\.com$/.test(new URL(u, document.baseURI).hostname.replace(/\.$/, ''));
    } catch {
      return false;
    }
  };
  // Render-time referral normalization for links back to Unsplash:
  // appends utm_source/utm_medium when absent, preserves every existing
  // query param, never overwrites an existing utm_source, and passes
  // non-Unsplash URLs through untouched. Input is an ABSOLUTE validated
  // http(s) URL (the credit render funnel resolves + validates first).
  const withReferral = href => {
    try {
      const u = new URL(href);
      if (!/(^|\.)unsplash\.com$/.test(u.hostname.replace(/\.$/, ''))) {
        return href;
      }
      if (!u.searchParams.has('utm_source')) {
        u.searchParams.set('utm_source', 'claude_design');
      }
      if (!u.searchParams.has('utm_medium')) {
        u.searchParams.set('utm_medium', 'referral');
      }
      return u.toString();
    } catch (e) {
      return href;
    }
  };
  // 2× a ~600px slot in a 1920-wide deck — retina-sharp without making the
  // sidecar enormous. A 1200px WebP at q=0.85 is ~150-300KB.
  const MAX_DIM = 1200;
  // Raster formats only. SVG is excluded (can carry script; createImageBitmap
  // on SVG blobs is inconsistent). GIF is excluded because the canvas
  // re-encode keeps only the first frame, so an animated GIF would silently
  // go still — better to reject than surprise.
  const ACCEPT = ['image/png', 'image/jpeg', 'image/webp', 'image/avif'];

  // ── Shared sidecar store ────────────────────────────────────────────────
  // One fetch + immediate write-on-change for every <image-slot> on the
  // page. Reads via fetch() so viewing works anywhere the HTML and sidecar
  // are served together; writes go through window.omelette.writeFile, which
  // the host allowlists to *.state.json basenames only.
  const subs = new Set();
  let slots = {};
  // ids explicitly cleared before the sidecar fetch resolved — otherwise
  // the merge below can't tell "never set" from "just deleted" and would
  // resurrect the sidecar's stale value.
  const tombstones = new Set();
  let loaded = false;
  let loadP = null;
  function load() {
    if (loadP) return loadP;
    loadP = fetch(STATE_FILE).then(r => r.ok ? r.json() : null).then(j => {
      // Merge: sidecar loses to any in-memory change that raced ahead of
      // the fetch (drop or clear) so neither is clobbered by hydration.
      if (j && typeof j === 'object') {
        const merged = Object.assign({}, j, slots);
        // A framing-only write that raced ahead of hydration must not
        // drop a user image that's only on disk — inherit u from the
        // sidecar for any in-memory entry that lacks one.
        for (const k in slots) {
          if (merged[k] && !merged[k].u && j[k]) {
            merged[k].u = typeof j[k] === 'string' ? j[k] : j[k].u;
          }
        }
        for (const id of tombstones) delete merged[id];
        slots = merged;
      }
      tombstones.clear();
    }).catch(() => {}).then(() => {
      loaded = true;
      subs.forEach(fn => fn());
    });
    return loadP;
  }

  // Serialize writes so two near-simultaneous drops on different slots
  // can't reorder at the backend and leave the sidecar with only the
  // first. A save requested mid-flight just marks dirty and re-fires on
  // completion with the then-current slots.
  let saving = false;
  let saveDirty = false;
  // Unload-time flush: save()'s serialization defers a mid-RTT re-fire to a
  // .then that never runs in an unloading document, silently dropping a
  // pagehide commit. Post the current slots immediately instead — content
  // is a superset snapshot of any in-flight save's, the write is a
  // whole-file last-writer-wins replace, and postMessage FIFO delivers it
  // to the host after the in-flight one, so a backend-side reorder at
  // worst reproduces the dropped-commit outcome this flush improves on.
  // Guarded on the initial sidecar read: pre-hydration slots can miss
  // other slots' persisted entries, and flushing it would clobber them —
  // that narrow case stays best-effort (the in-memory merge in load()
  // cannot happen in an unloading document anyway).
  function flushNow() {
    if (!loaded) return;
    const w = window.omelette && window.omelette.writeFile;
    if (!w) return;
    try {
      Promise.resolve(w(STATE_FILE, JSON.stringify(slots))).catch(() => {});
    } catch (e) {}
  }
  function save() {
    if (saving) {
      saveDirty = true;
      return;
    }
    const w = window.omelette && window.omelette.writeFile;
    if (!w) return;
    saving = true;
    Promise.resolve(w(STATE_FILE, JSON.stringify(slots))).catch(() => {}).then(() => {
      saving = false;
      if (saveDirty) {
        saveDirty = false;
        save();
      }
    });
  }
  const S_MAX = 5;
  const clampS = s => Math.max(1, Math.min(S_MAX, s));

  // Normalize a stored slot value. Pre-reframe sidecars stored a bare
  // data-URL string; newer ones store {u, s, x, y}. Either shape is valid.
  function getSlot(id) {
    const v = slots[id];
    if (!v) return null;
    return typeof v === 'string' ? {
      u: v,
      s: 1,
      x: 0,
      y: 0
    } : v;
  }
  function setSlot(id, val) {
    if (!id) return;
    if (val) {
      slots[id] = val;
      tombstones.delete(id);
    } else {
      delete slots[id];
      if (!loaded) tombstones.add(id);
    }
    subs.forEach(fn => fn());
    // A drop is rare + high-value — write immediately so nav-away can't lose
    // it. Gate on the initial read so we don't overwrite a sidecar we haven't
    // merged yet; the merge in load() keeps this change once the read lands.
    if (loaded) save();else load().then(save);
  }

  // ── Image downscale ─────────────────────────────────────────────────────
  // Encode through a canvas so the sidecar carries resized bytes, not the
  // raw upload. Longest side is capped at 2× the slot's rendered width
  // (retina) and at MAX_DIM. WebP keeps alpha and is ~10× smaller than PNG
  // for photos, so there's no need for per-image format picking.
  async function toDataUrl(file, targetW) {
    const bitmap = await createImageBitmap(file);
    try {
      const cap = Math.min(MAX_DIM, Math.max(1, Math.round(targetW * 2)) || MAX_DIM);
      const scale = Math.min(1, cap / Math.max(bitmap.width, bitmap.height));
      const w = Math.max(1, Math.round(bitmap.width * scale));
      const h = Math.max(1, Math.round(bitmap.height * scale));
      const canvas = document.createElement('canvas');
      canvas.width = w;
      canvas.height = h;
      canvas.getContext('2d').drawImage(bitmap, 0, 0, w, h);
      return canvas.toDataURL('image/webp', 0.85);
    } finally {
      bitmap.close && bitmap.close();
    }
  }

  // ── Custom element ──────────────────────────────────────────────────────
  const stylesheet =
  // Fill the container by default: slots are usually placed inside a
  // sized wrapper (a hero frame, a grid cell, an inset:0 layer) and are
  // expected to take that box — a fixed intrinsic size would render as
  // a small tile in the corner of a full-bleed wrapper instead.
  // aspect-ratio is the companion fallback that keeps a bare slot
  // visible when the parent's height is indefinite: height:100%
  // resolves to auto there, and the ratio then derives height from
  // width instead of letting the slot collapse to zero height.
  // Explicit width/height on the element override all of this.
  // color:inherit (not a fixed near-black): the placeholder chrome —
  // empty-state icon/caption (currentColor) and the dashed ring — must
  // read on dark decks too, and the slide's own text color is the one
  // color guaranteed to contrast with the slide background. The soft
  // look comes from opacity on those parts, not from a baked-in alpha.
  ':host{display:block;position:relative;' + '  font:13px/1.3 system-ui,-apple-system,sans-serif;' + '  width:100%;height:100%;aspect-ratio:3/2}' + '.empty .cap,.empty .sub{opacity:.75}' + '.frame{position:absolute;inset:0;overflow:hidden;background:rgba(127,127,127,.08)}' +
  // .frame img (clipped) and .spill (unclipped ghost + handles) share the
  // same left/top/width/height in frame-%, computed by _applyView(), so the
  // inside-mask crop and the outside-mask spill stay pixel-aligned.
  '.frame img{position:absolute;max-width:none;transform:translate(-50%,-50%);' + '  -webkit-user-drag:none;user-select:none;touch-action:none}' +
  // Reframe mode (double-click): the full image spills past the mask. The
  // spill layer is sized to the IMAGE bounds so its corners are where the
  // resize handles belong. The ghost <img> inside is translucent; the real
  // clipped <img> underneath shows the opaque in-mask crop.
  // popover=manual promotes the spill to the top layer on reframe, so it is
  // not clipped by any overflow:hidden / clip-path / scroll-container
  // ancestor (a plain z-index can't escape overflow clipping). UA popover
  // defaults (inset:0;margin:auto) are reset; _applyView sets viewport px.
  '.spill{position:fixed;margin:0;inset:auto;border:0;padding:0;background:transparent;' + '  overflow:visible;transform:translate(-50%,-50%);z-index:1;cursor:grab;touch-action:none}' + ':host([data-panning]) .spill{cursor:grabbing}' + '.spill .ghost{position:absolute;inset:0;width:100%;height:100%;opacity:.35;' + '  pointer-events:none;-webkit-user-drag:none;user-select:none;' + '  box-shadow:0 0 0 1px rgba(0,0,0,.2),0 12px 32px rgba(0,0,0,.2)}' + '.spill .handle{position:absolute;width:12px;height:12px;border-radius:50%;' + '  background:#fff;box-shadow:0 0 0 1.5px #c96442,0 1px 3px rgba(0,0,0,.3);' + '  transform:translate(-50%,-50%)}' + '.spill .handle[data-c=nw]{left:0;top:0;cursor:nwse-resize}' + '.spill .handle[data-c=ne]{left:100%;top:0;cursor:nesw-resize}' + '.spill .handle[data-c=sw]{left:0;top:100%;cursor:nesw-resize}' + '.spill .handle[data-c=se]{left:100%;top:100%;cursor:nwse-resize}' + ':host([data-reframe]){z-index:10}' + ':host([data-reframe]) .frame{box-shadow:0 0 0 2px #c96442}' + '.empty{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;' + '  justify-content:center;gap:6px;text-align:center;padding:12px;box-sizing:border-box;' + '  cursor:pointer;user-select:none}' + '.empty svg{opacity:.45}' + '.empty .cap{max-width:90%;font-weight:500;letter-spacing:.01em}' + '.empty .sub{font-size:11px}' + '.empty .sub u{text-underline-offset:2px}' + '.empty:hover .sub{opacity:1}' + ':host([data-over]) .frame{outline:2px solid #c96442;outline-offset:-2px;' + '  background:rgba(201,100,66,.10)}' + '.ring{position:absolute;inset:0;pointer-events:none;border:1.5px dashed currentColor;' + '  opacity:.35;transition:border-color .12s,opacity .12s}' + ':host([data-over]) .ring{border-color:#c96442;opacity:1}' + ':host([data-filled]) .ring{display:none}' +
  // Controls overlay INSIDE the frame, pinned to the top-right corner, so
  // a full-bleed slot in an overflow:hidden container still shows them
  // (the old below-mask placement got clipped). Credit sits bottom-left,
  // so top-right avoids collision. The blurred pill background keeps them
  // legible over the image.
  // The UA [popover] base rule styles the element in EVERY state (only
  // display:none is gated on :not(:popover-open), and the display:flex
  // below overrides that) — so the UA resets live HERE, like .spill's,
  // or the ordinary hover-state strip renders as a bordered Canvas box
  // centered by margin:auto. inset:auto precedes top/right (shorthand).
  '.ctl{position:absolute;inset:auto;top:8px;right:8px;margin:0;border:0;padding:0;' + '  background:transparent;overflow:visible;' + '  display:flex;gap:6px;opacity:0;pointer-events:none;transition:opacity .12s;z-index:2;' + '  white-space:nowrap}' +
  // While reframing, the spill owns the top layer and would swallow every
  // click on the in-frame controls. Promoting .ctl into the top layer
  // ABOVE the spill (shown after it — later popovers stack higher) keeps
  // Edit-as-toggle and Replace clickable mid-reframe. _applyView pins it
  // to the frame's top-right in viewport px (translateX(-100%)
  // right-aligns against the computed left edge); inset:auto clears the
  // base rule's top/right so the inline left/top position it alone.
  '.ctl:popover-open{position:fixed;inset:auto;transform:translateX(-100%)}' + ':host([data-filled][data-editable]:hover) .ctl,:host([data-reframe]) .ctl' + '  {opacity:1;pointer-events:auto}' + '.ctl button{appearance:none;border:0;border-radius:6px;padding:5px 10px;cursor:pointer;' + '  background:rgba(0,0,0,.65);color:#fff;font:11px/1 system-ui,-apple-system,sans-serif;' + '  backdrop-filter:blur(6px)}' + '.ctl button:hover{background:rgba(0,0,0,.8)}' + '.err{position:absolute;left:8px;bottom:8px;right:8px;color:#b3261e;font-size:11px;' + '  background:rgba(255,255,255,.85);padding:4px 6px;border-radius:5px;pointer-events:none}' +
  // Replacement in flight: after a src swap the browser keeps painting
  // the PREVIOUS image until the new one decodes, so a Replace would
  // flash the old photo and then pop. Hide the stale frame (visibility,
  // not display — _applyView geometry still applies) and spin until the
  // new image reports in (load/error clears data-swapping).
  ':host([data-swapping]) .frame img{visibility:hidden}' + '.loading{position:absolute;inset:0;display:none;align-items:center;' + '  justify-content:center;pointer-events:none}' + ':host([data-swapping]) .loading{display:flex}' + '.loading::after{content:"";width:22px;height:22px;border-radius:50%;' + '  border:2px solid rgba(127,127,127,.25);border-top-color:currentColor;' + '  animation:om-slot-spin .7s linear infinite}' + '@keyframes om-slot-spin{to{transform:rotate(360deg)}}' +
  // Reduced motion: the static two-tone ring still reads as "working".
  '@media (prefers-reduced-motion:reduce){.loading::after{animation:none}}' + '.credit{position:absolute;left:6px;bottom:6px;max-width:calc(100% - 12px);display:none;' + '  padding:3px 7px;border-radius:5px;background:rgba(0,0,0,.55);color:#fff;' + '  font:10px/1.2 system-ui,-apple-system,sans-serif;text-decoration:none;' + '  white-space:nowrap;overflow:hidden;text-overflow:ellipsis;backdrop-filter:blur(6px)}' +
  // The credit is a SPAN holding one or two <a>s (Unsplash's prescribed
  // form links the photographer AND Unsplash) — anchors style inline so
  // the overlay reads as one line of text.
  '.credit a{color:inherit;text-decoration:none}' + '.credit a:hover,.credit a:focus-visible{text-decoration:underline}' + ':host([data-filled][data-credit]) .credit{display:block}' +
  // Exports must ship JUST the image — no hover controls, no credit chip
  // (the host marks <html data-om-exporting> for the capture window; the
  // page-level hide script can't reach shadow DOM, this rule can).
  ':host-context([data-om-exporting]) .ctl,' + ':host-context([data-om-exporting]) .credit{display:none !important}' +
  // Print must ship just the image too: the hover-gated controls can be
  // mid-hover when print() fires, and the credit chip is screen chrome —
  // the same rule the capture window gets, keyed on print media instead
  // of the host's data-om-exporting mark (the print path sets no mark).
  '@media print{.ctl,.credit{display:none !important}}' +
  // No export-window mask rules here on purpose: the export capture
  // releases the replacement mask by REMOVING data-swapping (the
  // shadow-root pass in pages/export/shared.ts HIDE_EXPORT_CHROME_SCRIPT)
  // — attribute removal works in every engine (:host-context is
  // Chromium-only), is scoped by construction to slots actually
  // mid-swap, and hides the spinner through the same gate. A masked img
  // would otherwise be silently dropped from PPTX decks (the capture
  // walk skips visibility:hidden imgs).
  // Attribution error tile: REPLACES the photo when an Unsplash src has
  // no credit attribute — rendering the photo uncredited is the terms
  // violation, so the photo must not appear at all.
  // Calm and neutral on purpose (review feedback): the tile informs the
  // user; the fix instructions are machine-facing (usage docblock, tool
  // description, and the turn-end scan's bounce copy name the attributes
  // for the agent).
  '.attr-error{position:absolute;inset:0;display:none;flex-direction:column;align-items:center;' + '  justify-content:center;gap:6px;text-align:center;padding:12px;box-sizing:border-box;' + '  background:#f2f1ef;color:#6e6c66;user-select:none;' + '  font:13px/1.45 system-ui,-apple-system,sans-serif}' + '.attr-error svg{opacity:.55}' + '.attr-error .cap{max-width:92%;font-weight:500;letter-spacing:.01em}' + ':host([data-attribution-error]) .attr-error{display:flex}' + ':host([data-attribution-error]) .ring{display:none}';
  const icon = '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" ' + 'stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">' + '<rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/>' + '<path d="m21 15-5-5L5 21"/></svg>';
  const warnIcon = '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" ' + 'stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">' + '<path d="m21.73 18-8-14a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"/>' + '<path d="M12 9v4"/><path d="M12 17h.01"/></svg>';
  class ImageSlot extends HTMLElement {
    static get observedAttributes() {
      return ['shape', 'radius', 'mask', 'fit', 'placeholder', 'src', 'id', 'credit', 'credit-href'];
    }

    /** Duplicate-slide hook (called by deck-stage, see its
     *  _remintDuplicateIds): copy this id's stored image, if any, under a
     *  freshly minted key and return that key — so a duplicated slide's
     *  slot keeps its dropped photo instead of reverting to the
     *  placeholder. 'isFree' is the caller's uniqueness check (document
     *  ids); candidates must ALSO be unused in the sidecar, which can
     *  hold keys from other pages sharing the project root. (An EMPTY
     *  slot on another page leaves no sidecar entry, so its id is not
     *  detectable here — a minted key can collide with it and that slot
     *  would show this photo. Same blast radius as two pages reusing an
     *  id by hand, which the shared sidecar already permits.) Returns null
     *  when no id could be minted (caller strips the id, today's
     *  behavior). */
    static cloneSlot(fromId, isFree) {
      if (typeof fromId !== 'string' || !fromId) return null;
      // Pre-hydration the store can't veto candidates or source the copy
      // — degrade to the strip (today's behavior) rather than mint
      // against keys we can't see yet. Any rendered (= droppable) slot
      // means load() has already settled.
      if (!loaded) return null;
      const stem = fromId.replace(/-\d+$/, '') || fromId;
      for (let n = 2; n < 100; n++) {
        const toId = stem + '-' + n;
        if (toId === fromId) continue;
        if (slots[toId] !== undefined) {
          // Reuse a key holding this exact value (bytes AND crop) if no
          // live element here owns it — a duplicate op the host refused
          // after minting leaves such a key behind, and reusing keeps
          // refused retries from accumulating one orphaned copy per
          // attempt. Full equality (not just bytes) so a byte-identical
          // key another PAGE owns with its own crop is stepped past, not
          // adopted or rewritten. (Entries without .u never match.)
          const prev = getSlot(toId);
          const cur = getSlot(fromId);
          if (!(prev && cur && prev.u && prev.u === cur.u && prev.s === cur.s && prev.x === cur.x && prev.y === cur.y && (typeof isFree !== 'function' || isFree(toId)))) continue;
          return toId;
        }
        if (typeof isFree === 'function' && !isFree(toId)) continue;
        const v = getSlot(fromId);
        if (v) setSlot(toId, Object.assign({}, v));
        return toId;
      }
      return null;
    }
    constructor() {
      super();
      // clonable: rail thumbnails deep-clone slides and carry this shadow
      // along; reuse an already-cloned root so upgrade-after-clone works.
      // (Deliberately NOT serializable — a getHTML consumer would embed
      // multi-MB sidecar data-URLs into serialized page HTML.)
      const root = this.shadowRoot || this.attachShadow({
        mode: 'open',
        clonable: true
      });
      // .spill and .ctl sit OUTSIDE .frame so overflow:hidden + border-radius
      // on the frame (circle, pill, rounded) can't clip them.
      root.innerHTML = '<style>' + stylesheet + '</style>' + '<div class="frame" part="frame">' + '  <img part="image" alt="" draggable="false" style="display:none">' + '  <div class="empty" part="empty">' + icon + '    <div class="cap"></div>' + '    <div class="sub">or <u>browse files</u></div></div>' + '  <div class="attr-error" part="attribution-error">' + warnIcon + '    <div class="cap">This photo needs attribution</div></div>' + '  <div class="loading" part="loading"></div>' + '  <div class="ring" part="ring"></div>' + '</div>' +
      // Outside .frame, like .spill/.ctl — the frame's overflow:hidden +
      // border-radius/clip-path would cut the credit off on circle/pill/mask.
      // A SPAN, not an <a>: the prescribed Unsplash credit holds two links
      // (photographer + Unsplash), built per-render in _render().
      '<span class="credit" part="credit"></span>' + '<div class="spill" popover="manual" data-dc-edit-transparent>' + '  <img class="ghost" alt="" draggable="false">' + '  <div class="handle" data-c="nw"></div><div class="handle" data-c="ne"></div>' + '  <div class="handle" data-c="sw"></div><div class="handle" data-c="se"></div>' + '</div>' +
      // data-dc-edit-transparent: the DC editor's edit-mode picker lets
      // clicks through for chrome marked with it (EDIT_TRANSPARENT_SEL)
      // — without it, Replace/Edit clicks in Edit mode are swallowed by
      // element selection and the controls look dead.
      '<div class="ctl" popover="manual" data-dc-edit-transparent><button data-act="replace" title="Replace image">Replace</button>' + '  <button data-act="edit" title="Reframe image">Edit</button></div>' + '<input type="file" accept="' + ACCEPT.join(',') + '" hidden>';
      this._frame = root.querySelector('.frame');
      this._ring = root.querySelector('.ring');
      this._img = root.querySelector('.frame img');
      this._empty = root.querySelector('.empty');
      this._cap = root.querySelector('.cap');
      this._sub = root.querySelector('.sub');
      this._spill = root.querySelector('.spill');
      this._ctl = root.querySelector('.ctl');
      this._credit = root.querySelector('.credit');
      this._attrError = root.querySelector('.attr-error');
      // Credit clicks open the link, not browse/reframe.
      this._credit.addEventListener('click', e => e.stopPropagation());
      this._credit.addEventListener('dblclick', e => e.stopPropagation());
      this._ghost = root.querySelector('.ghost');
      this._err = null;
      this._input = root.querySelector('input');
      this._depth = 0;
      this._gen = 0;
      // Encode-in-flight marker (the owning _ingest generation): while set,
      // the same-src "nothing in flight" clear in _render must not fire —
      // the stored value still points at the OLD image until the encode
      // lands, so that clear would unmask the stale image mid-replace.
      this._swapGen = 0;
      // Render-owned swap in flight: set when _render assigns a new src,
      // cleared only by the img's own load/error (or the empty branch).
      // img.complete CANNOT stand in for this — setting src only QUEUES
      // the current-request swap (a microtask), so synchronously after an
      // assignment, complete still reports the OLD settled request. The
      // pick path does exactly that: the host sets src, credit, and
      // credit-href back-to-back in one task, and renders #2/#3 would
      // read the stale complete === true and drop the mask one render
      // after it was set.
      this._loadPending = false;
      // See _render's empty branch: a transient attribution-error wipe of a
      // showing image must make the follow-up render a replacement (spinner),
      // not a first fill (blank frame).
      this._hidShowing = false;
      this._view = {
        s: 1,
        x: 0,
        y: 0
      };
      this._subFn = () => this._render();
      // Shadow-DOM listeners live with the shadow DOM — bound once here so
      // disconnect/reconnect (e.g. React remount) doesn't stack handlers.
      this._empty.addEventListener('click', () => this._input.click());
      root.addEventListener('click', e => {
        const act = e.target && e.target.getAttribute && e.target.getAttribute('data-act');
        if (!act) return;
        // The hidden controls are opacity-0 but still tabbable — without
        // this gate a keyboard user could drive them on a read-only share
        // link (mirrors the dblclick handler's editable gate).
        if (!this.hasAttribute('data-editable')) return;
        if (act === 'replace') {
          this._exitReframe(true);
          // Host-owned picker (Unsplash modal; it also offers local import).
          this.dispatchEvent(new CustomEvent('image-slot:pick', {
            bubbles: true,
            composed: true,
            detail: {
              id: this.id || null
            }
          }));
        }
        if (act === 'edit') {
          if (!this._reframes()) return;
          if (this.hasAttribute('data-reframe')) this._exitReframe(true);else this._enterReframe();
        }
      });
      this._input.addEventListener('change', () => {
        const f = this._input.files && this._input.files[0];
        if (f) this._ingest(f);
        this._input.value = '';
      });
      // naturalWidth/Height aren't known until load — re-apply so the cover
      // baseline is computed from real dimensions, not the 100%×100% fallback.
      // load/error also release the replacement-in-flight mask (via the
      // single discipline in _releaseMask): the swap is only revealed once
      // the new image can actually paint (on error the frame shows its
      // background, same as a fresh slot with a broken src).
      this._img.addEventListener('load', () => {
        this._loadPending = false;
        this._releaseMask(true);
        this._applyView();
      });
      this._img.addEventListener('error', () => {
        this._loadPending = false;
        this._releaseMask(true);
      });
      // Gated only on editable — any filled slot can be repositioned/scaled,
      // regardless of fit. Share links (no writeFile) stay static.
      this.addEventListener('dblclick', e => {
        if (!this.hasAttribute('data-editable') || !this._reframes()) return;
        e.preventDefault();
        if (this.hasAttribute('data-reframe')) this._exitReframe(true);else this._enterReframe();
      });
      // Pan + resize both originate on the spill layer. A handle pointerdown
      // drives an aspect-locked resize anchored at the opposite corner; any
      // other pointerdown on the spill pans. Offsets are frame-% so a
      // reframed slot survives responsive resize / PPTX export.
      this._spill.addEventListener('pointerdown', e => {
        if (e.button !== 0 || !this.hasAttribute('data-reframe')) return;
        e.preventDefault();
        e.stopPropagation();
        this._spill.setPointerCapture(e.pointerId);
        const rect = this.getBoundingClientRect();
        const fw = rect.width || 1,
          fh = rect.height || 1;
        const corner = e.target.getAttribute && e.target.getAttribute('data-c');
        let move;
        if (corner) {
          // Resize about the OPPOSITE corner. Viewport-px throughout (rect
          // fw/fh, not clientWidth) so the math survives a transform:scale()
          // ancestor — deck_stage renders slides scaled-to-fit.
          const iw = this._img.naturalWidth || 1,
            ih = this._img.naturalHeight || 1;
          const contain = (this.getAttribute('fit') || 'cover').toLowerCase() === 'contain';
          const base = contain ? Math.min(fw / iw, fh / ih) : Math.max(fw / iw, fh / ih);
          const sx = corner.includes('e') ? 1 : -1;
          const sy = corner.includes('s') ? 1 : -1;
          const s0 = this._view.s;
          const w0 = iw * base * s0,
            h0 = ih * base * s0;
          const cx0 = (50 + this._view.x) / 100 * fw;
          const cy0 = (50 + this._view.y) / 100 * fh;
          const ox = cx0 - sx * w0 / 2,
            oy = cy0 - sy * h0 / 2;
          const diag0 = Math.hypot(w0, h0);
          const ux = sx * w0 / diag0,
            uy = sy * h0 / diag0;
          move = ev => {
            const proj = (ev.clientX - rect.left - ox) * ux + (ev.clientY - rect.top - oy) * uy;
            const s = clampS(s0 * proj / diag0);
            const d = diag0 * s / s0;
            this._view.s = s;
            this._view.x = (ox + ux * d / 2) / fw * 100 - 50;
            this._view.y = (oy + uy * d / 2) / fh * 100 - 50;
            this._clampView();
            this._applyView();
          };
        } else {
          this.setAttribute('data-panning', '');
          const start = {
            px: e.clientX,
            py: e.clientY,
            x: this._view.x,
            y: this._view.y
          };
          move = ev => {
            this._view.x = start.x + (ev.clientX - start.px) / fw * 100;
            this._view.y = start.y + (ev.clientY - start.py) / fh * 100;
            this._clampView();
            this._applyView();
          };
        }
        const up = () => {
          try {
            this._spill.releasePointerCapture(e.pointerId);
          } catch {}
          this._spill.removeEventListener('pointermove', move);
          this._spill.removeEventListener('pointerup', up);
          this._spill.removeEventListener('pointercancel', up);
          this.removeAttribute('data-panning');
          this._dragUp = null;
        };
        // Stashed so _exitReframe (Escape / outside-click mid-drag) can
        // tear the capture + listeners down synchronously.
        this._dragUp = up;
        this._spill.addEventListener('pointermove', move);
        this._spill.addEventListener('pointerup', up);
        this._spill.addEventListener('pointercancel', up);
      });
      // Wheel zoom stays available inside reframe mode as a trackpad nicety —
      // zooms toward the cursor (offset' = cursor·(1-k) + offset·k).
      this.addEventListener('wheel', e => {
        if (!this.hasAttribute('data-reframe')) return;
        e.preventDefault();
        const r = this.getBoundingClientRect();
        const cx = (e.clientX - r.left) / r.width * 100 - 50;
        const cy = (e.clientY - r.top) / r.height * 100 - 50;
        const prev = this._view.s;
        const next = clampS(prev * Math.pow(1.0015, -e.deltaY));
        if (next === prev) return;
        const k = next / prev;
        this._view.s = next;
        this._view.x = cx * (1 - k) + this._view.x * k;
        this._view.y = cy * (1 - k) + this._view.y * k;
        this._clampView();
        this._applyView();
      }, {
        passive: false
      });
    }
    connectedCallback() {
      // Warn once per page — an id-less slot works for the session but
      // cannot persist, and two id-less slots would share nothing.
      if (!this.id && !ImageSlot._warned) {
        ImageSlot._warned = true;
        console.warn('<image-slot> without an id will not persist its dropped image.');
      }
      this.addEventListener('dragenter', this);
      this.addEventListener('dragover', this);
      this.addEventListener('dragleave', this);
      this.addEventListener('drop', this);
      subs.add(this._subFn);
      // The host may inject window.omelette.writeFile AFTER the first render;
      // re-render on hover so the editable-gated controls reliably appear.
      this.addEventListener('pointerenter', this._subFn);
      // width%/height% in _applyView encode the frame aspect at call time —
      // a host resize (responsive grid, pane divider) would stretch the
      // image until the next _render. Re-render on size change: _render()
      // re-seeds _view from stored before clamp/apply, so a shrink→grow
      // cycle round-trips instead of ratcheting x/y toward the narrower
      // frame's clamp range.
      this._ro = new ResizeObserver(() => this._render());
      this._ro.observe(this);
      load();
      this._render();
    }
    disconnectedCallback() {
      subs.delete(this._subFn);
      this.removeEventListener('pointerenter', this._subFn);
      this.removeEventListener('dragenter', this);
      this.removeEventListener('dragover', this);
      this.removeEventListener('dragleave', this);
      this.removeEventListener('drop', this);
      if (this._ro) {
        this._ro.disconnect();
        this._ro = null;
      }
      // commit=false: a disconnect is not a user intent — committing here
      // would persist whatever half-finished drag a React remount or DOM
      // splice happened to interrupt. Deliberate exits commit on their own
      // paths (Escape/click-out/toggle), and unloads commit via pagehide.
      this._exitReframe(false);
    }
    _enterReframe() {
      if (this.hasAttribute('data-reframe')) return;
      this.setAttribute('data-reframe', '');
      this._signalReframe(true);
      // Best-effort commit when the document unloads mid-reframe (a host
      // navigation racing the enter signal, a manual reload, tab close):
      // the sidecar write rides the host bridge, which outlives this
      // document, so the crop survives even though the mode dies with the
      // DOM. Held on the instance so _exitReframe detaches exactly what
      // was attached.
      this._pagehide = () => {
        this._exitReframe(true);
        flushNow();
      };
      window.addEventListener('pagehide', this._pagehide);
      // Promote spill to the top layer, then keep it pinned over the frame:
      // scroll/resize cover the common cases, and a per-frame rect check
      // catches layout shifts that fire neither (an image above finishing
      // load, streamed DOM pushing the slot down, an ancestor transform
      // change) so the overlay can't detach from the frame.
      try {
        this._spill.showPopover();
      } catch {}
      // After the spill, so the controls stack above it in the top layer.
      try {
        this._ctl.showPopover();
      } catch {}
      this._reposition = () => {
        if (this.hasAttribute('data-reframe')) this._applyView();
      };
      window.addEventListener('scroll', this._reposition, true);
      window.addEventListener('resize', this._reposition);
      this._lastRect = '';
      this._watch = () => {
        if (!this.hasAttribute('data-reframe')) return;
        const r = this.getBoundingClientRect();
        const key = r.left + ',' + r.top + ',' + r.width + ',' + r.height;
        if (key !== this._lastRect) {
          this._lastRect = key;
          this._applyView();
        }
        this._watchId = requestAnimationFrame(this._watch);
      };
      this._watchId = requestAnimationFrame(this._watch);
      this._applyView();
      // Close on click outside (the spill handler stopPropagation()s so
      // in-image drags don't reach this) and on Escape. Listeners are held
      // on the instance so _exitReframe / disconnectedCallback can detach
      // exactly what was attached.
      this._outside = e => {
        if (e.composedPath && e.composedPath().includes(this)) return;
        this._exitReframe(true);
      };
      this._esc = e => {
        if (e.key === 'Escape') this._exitReframe(true);
      };
      document.addEventListener('pointerdown', this._outside, true);
      document.addEventListener('keydown', this._esc, true);
    }
    _exitReframe(commit) {
      if (!this.hasAttribute('data-reframe')) return;
      if (this._dragUp) this._dragUp();
      this.removeAttribute('data-reframe');
      this.removeAttribute('data-panning');
      if (this._outside) document.removeEventListener('pointerdown', this._outside, true);
      if (this._esc) document.removeEventListener('keydown', this._esc, true);
      this._outside = this._esc = null;
      if (this._reposition) {
        window.removeEventListener('scroll', this._reposition, true);
        window.removeEventListener('resize', this._reposition);
        this._reposition = null;
      }
      if (this._watchId) {
        cancelAnimationFrame(this._watchId);
        this._watchId = 0;
      }
      if (this._pagehide) {
        window.removeEventListener('pagehide', this._pagehide);
        this._pagehide = null;
      }
      try {
        this._spill.hidePopover();
      } catch {}
      try {
        this._ctl.hidePopover();
      } catch {}
      this._ctl.style.left = '';
      this._ctl.style.top = '';
      if (commit) this._commitView();
      this._signalReframe(false);
    }

    // Reframe state lives only in this DOM until commit, invisible to the
    // host's dirty signals — announce enter/exit so the host can hold
    // auto-reloads for exactly the gesture (the guest bundle forwards
    // image-slot:reframe to the host as imageSlotReframe). Dispatched on
    // the element (composed, so it escapes shadow roots) while connected;
    // a disconnected exit (disconnectedCallback) falls back to document so
    // the host still hears it.
    _signalReframe(active) {
      const target = this.isConnected ? this : document;
      target.dispatchEvent(new CustomEvent('image-slot:reframe', {
        bubbles: true,
        composed: true,
        detail: {
          active: active,
          id: this.id || null
        }
      }));
    }

    // Public: host's "Import from computer" calls this to run local browse.
    openFilePicker() {
      this._exitReframe(true);
      this._input.click();
    }

    // A src write is a newer intent for this slot's content — the host
    // pick path (setImageSlotImage) or an agent edit — so it must win
    // over any encode still in flight from an earlier drop: left live,
    // that encode lands later, passes _ingest's gen guard, and its
    // setSlot silently overwrites the pick (the stored value shadows
    // src in _render). Bumping _gen kills the encode before its own
    // _swapGen clear runs, so clear the dead claim here too — otherwise
    // _releaseMask (gated on !_swapGen) never fires and the pick's
    // spinner is stranded. src ONLY: the pick sets credit/credit-href
    // in the same task, and clearing _swapGen on those would let the
    // same-src branch unmask the old image mid-encode.
    attributeChangedCallback(name, oldVal, newVal) {
      if (name === 'src' && oldVal !== newVal) {
        this._gen++;
        this._swapGen = 0;
      }
      if (this.shadowRoot) this._render();
    }

    // handleEvent — one listener object for all four drag events keeps the
    // add/remove symmetric and the depth counter correct.
    handleEvent(e) {
      if (e.type === 'dragenter' || e.type === 'dragover') {
        // Without preventDefault the browser never fires 'drop'.
        e.preventDefault();
        e.stopPropagation();
        if (e.dataTransfer) e.dataTransfer.dropEffect = 'copy';
        if (e.type === 'dragenter') this._depth++;
        this.setAttribute('data-over', '');
      } else if (e.type === 'dragleave') {
        // dragenter/leave fire for every descendant crossing — count depth
        // so hovering the icon inside the empty state doesn't flicker.
        if (--this._depth <= 0) {
          this._depth = 0;
          this.removeAttribute('data-over');
        }
      } else if (e.type === 'drop') {
        e.preventDefault();
        e.stopPropagation();
        this._depth = 0;
        this.removeAttribute('data-over');
        const f = e.dataTransfer && e.dataTransfer.files && e.dataTransfer.files[0];
        if (f) this._ingest(f);
      }
    }
    async _ingest(file) {
      this._setError(null);
      if (!file || ACCEPT.indexOf(file.type) < 0) {
        this._setError('Drop a PNG, JPEG, WebP, or AVIF image.');
        return;
      }
      // toDataUrl can take hundreds of ms on a large photo. A Clear or a
      // newer drop during that window would be clobbered when this await
      // resumes — bump + capture a generation so stale encodes bail.
      const gen = ++this._gen;
      // Replacing a shown image: surface the swap through the encode too,
      // not just the decode — otherwise the old photo sits there with no
      // feedback while the canvas re-encode runs. An empty slot keeps its
      // placeholder (no spinner) until the encode lands, as before.
      // _swapGen guards the mask against re-renders DURING the encode
      // (pointerenter, ResizeObserver, another slot's store write): the
      // stored value still resolves to the old image there, so _render's
      // same-src clear would otherwise unmask it mid-replace.
      if (this.hasAttribute('data-filled')) {
        this.setAttribute('data-swapping', '');
        this._swapGen = gen;
      }
      try {
        const w = this.clientWidth || this.offsetWidth || MAX_DIM;
        const url = await toDataUrl(file, w);
        if (gen !== this._gen) return;
        // Only exit reframe once the new image is in hand — a rejected type
        // or decode failure leaves the in-progress crop untouched.
        this._exitReframe(false);
        // Clear BEFORE setSlot: its synchronous re-render must see no
        // pending encode, so a byte-identical re-upload (same data URL, no
        // load event coming) still clears the mask via the complete branch.
        this._swapGen = 0;
        const val = {
          u: url,
          s: 1,
          x: 0,
          y: 0
        };
        setSlot(this.id || '', val);
        // Keep a session-local copy for id-less slots so the drop still
        // shows, even though it cannot persist.
        if (!this.id) {
          this._local = val;
          this._render();
        }
      } catch (err) {
        if (gen !== this._gen) return;
        this._swapGen = 0;
        // Reveal the kept old image — unless another replacement (a
        // remote pick's src swap) is still in flight, in which case the
        // mask stays until THAT image settles (its load/error releases).
        this._releaseMask();
        this._setError('Could not read that image.');
        console.warn('<image-slot> ingest failed:', err);
      }
    }
    _setError(msg) {
      if (this._err) {
        this._err.remove();
        this._err = null;
      }
      if (!msg) return;
      const d = document.createElement('div');
      d.className = 'err';
      d.textContent = msg;
      this.shadowRoot.appendChild(d);
      this._err = d;
      setTimeout(() => {
        if (this._err === d) {
          d.remove();
          this._err = null;
        }
      }, 3000);
    }

    // Reframing (pan/resize) is available on any filled slot — the user can
    // always reposition/scale. `fit` only sets the initial baseline (see
    // _geom): contain starts fully-visible, cover starts frame-filling.
    _reframes() {
      return this.hasAttribute('data-filled');
    }

    // The single release discipline for the replacement-in-flight mask
    // (data-swapping). The mask comes off only when BOTH hold:
    //  - no encode is pending (_swapGen) — mid-encode the stored value
    //    still resolves to the old image, so any reveal paints it;
    //  - the frame img has settled on its current src — an unsettled src
    //    means some replacement is still in flight (e.g. a remote pick),
    //    whoever started it, and revealing would paint the previous
    //    frame. The load/error listeners pass settled=true (the event IS
    //    the settlement signal, per spec complete is true by then);
    //    other callers rely on the complete flag (covers loaded AND
    //    failed).
    // Every release path funnels through here EXCEPT _render's empty
    // branch (the img is being cleared — nothing will ever settle).
    _releaseMask(settled) {
      if (!this._swapGen && !this._loadPending && (settled || this._img.complete)) {
        this.removeAttribute('data-swapping');
      }
    }

    // Baseline geometry, shared by clamp/apply/resize. `base` is the scale at
    // view-scale s=1: cover = fill the frame (overflow on the looser axis),
    // contain = fit fully inside (letterboxed). Zooming a contain image past
    // s where it overflows naturally becomes a crop. Null until the img has
    // loaded (naturalWidth is 0 before that) or when the slot has no layout
    // box — ResizeObserver fires with a 0×0 rect under display:none, and
    // clamping against a degenerate 1×1 frame would silently pull the stored
    // pan toward zero.
    _geom() {
      const iw = this._img.naturalWidth,
        ih = this._img.naturalHeight;
      const fw = this.clientWidth,
        fh = this.clientHeight;
      if (!iw || !ih || !fw || !fh) return null;
      const contain = (this.getAttribute('fit') || 'cover').toLowerCase() === 'contain';
      const base = contain ? Math.min(fw / iw, fh / ih) : Math.max(fw / iw, fh / ih);
      return {
        iw,
        ih,
        fw,
        fh,
        base
      };
    }
    _clampView() {
      // Pan range on each axis is half the overflow past the frame edge.
      const g = this._geom();
      if (!g) return;
      const mx = Math.max(0, (g.iw * g.base * this._view.s / g.fw - 1) * 50);
      const my = Math.max(0, (g.ih * g.base * this._view.s / g.fh - 1) * 50);
      this._view.x = Math.max(-mx, Math.min(mx, this._view.x));
      this._view.y = Math.max(-my, Math.min(my, this._view.y));
    }
    _applyView() {
      const g = this._geom();
      // Top-layer controls: pin to the frame's top-right in viewport px
      // (the same 8px inset as the in-frame layout; unscaled — top-layer UI
      // reads as chrome, not page content). BEFORE the geometry branch:
      // placement needs only the frame rect, and a not-yet-loaded or broken
      // src must not leave the promoted strip floating unpositioned. Gated
      // on the popover actually being open: without the Popover API,
      // showPopover() threw (swallowed in _enterReframe), .ctl stays in
      // its in-frame absolute layout, and viewport-px coordinates would
      // shove it off-frame — and matches(':popover-open') itself throws
      // there (unknown pseudo-class), hence the try/catch.
      if (this.hasAttribute('data-reframe')) {
        let onTop = false;
        try {
          onTop = this._ctl.matches(':popover-open');
        } catch {}
        if (onTop) {
          const r = this.getBoundingClientRect();
          this._ctl.style.left = r.right - 8 + 'px';
          this._ctl.style.top = r.top + 8 + 'px';
        }
      }
      if (!g) {
        // Dimensions not known yet (before img load) — centered fit so there
        // is no flash of an unpositioned image before the geometry lands.
        const contain = (this.getAttribute('fit') || 'cover').toLowerCase() === 'contain';
        this._img.style.width = '100%';
        this._img.style.height = '100%';
        this._img.style.left = '50%';
        this._img.style.top = '50%';
        this._img.style.objectFit = contain ? 'contain' : 'cover';
        return;
      }
      // Baseline (cover-fill or contain-fit) × view scale. Width/height and
      // left/top are all frame-% — depends only on the frame aspect ratio, so
      // a responsive resize keeps the same crop. The spill layer mirrors the
      // same box so its corners = image corners.
      const k = g.base * this._view.s;
      const w = g.iw * k / g.fw * 100 + '%';
      const h = g.ih * k / g.fh * 100 + '%';
      const l = 50 + this._view.x + '%';
      const t = 50 + this._view.y + '%';
      this._img.style.width = w;
      this._img.style.height = h;
      this._img.style.left = l;
      this._img.style.top = t;
      this._img.style.objectFit = '';
      if (this.hasAttribute('data-reframe')) {
        // Top-layer spill: position in viewport px over the frame. The top
        // layer escapes ancestor transforms entirely, so EVERY term must be
        // in viewport units: getBoundingClientRect gives the frame's scaled
        // origin AND size, and the rect/layout ratio rescales the ghost —
        // sizing from layout px alone renders it 1/scale too large under a
        // scaled deck slide. Inner ghost + handles stay box-relative.
        const r = this.getBoundingClientRect();
        const sx = g.fw ? r.width / g.fw : 1;
        const sy = g.fh ? r.height / g.fh : 1;
        this._spill.style.width = g.iw * k * sx + 'px';
        this._spill.style.height = g.ih * k * sy + 'px';
        this._spill.style.left = r.left + (50 + this._view.x) / 100 * r.width + 'px';
        this._spill.style.top = r.top + (50 + this._view.y) / 100 * r.height + 'px';
      }
    }
    _commitView() {
      const v = {
        s: this._view.s,
        x: this._view.x,
        y: this._view.y
      };
      if (this._userUrl) v.u = this._userUrl;
      // Framing-only (no u) persists too so an author-src slot remembers its
      // crop; clearing the sidecar still falls through to src=.
      if (this.id) setSlot(this.id, v);else {
        this._local = v;
      }
    }
    _render() {
      // Shape / mask. Presets use border-radius so the dashed ring can
      // follow the rounded outline; clip-path is only applied for an
      // explicit `mask` (the ring is hidden there since a rectangle
      // dashed border chopped by an arbitrary polygon looks broken).
      const mask = this.getAttribute('mask');
      const shape = (this.getAttribute('shape') || 'rounded').toLowerCase();
      let radius = '';
      if (shape === 'circle') radius = '50%';else if (shape === 'pill') radius = '9999px';else if (shape === 'rounded') {
        const n = parseFloat(this.getAttribute('radius'));
        radius = (Number.isFinite(n) ? n : 12) + 'px';
      }
      this._frame.style.borderRadius = mask ? '' : radius;
      this._frame.style.clipPath = mask || '';
      this._ring.style.borderRadius = mask ? '' : radius;
      this._ring.style.display = mask ? 'none' : '';

      // Controls and reframe entry gate on this so share links stay read-only.
      const editable = !!(window.omelette && window.omelette.writeFile);
      this.toggleAttribute('data-editable', editable);
      this._sub.style.display = editable ? '' : 'none';

      // Content. The sidecar is also writable by the agent's write_file
      // tool, so its value isn't guaranteed canvas-originated — only accept
      // data:image/ URLs from it. The `src` attribute is author-controlled
      // (Claude wrote it into the HTML) so it passes through unchanged.
      let stored = this.id ? getSlot(this.id) : this._local;
      if (stored && stored.u && !/^data:image\//i.test(stored.u)) stored = null;
      const srcAttr = this.getAttribute('src') || '';
      this._userUrl = stored && stored.u || null;
      const url = this._userUrl || srcAttr;
      // Don't clobber an in-flight reframe with a store-triggered re-render.
      if (!this.hasAttribute('data-reframe')) {
        this._view = {
          s: stored && Number.isFinite(stored.s) ? clampS(stored.s) : 1,
          x: stored && Number.isFinite(stored.x) ? stored.x : 0,
          y: stored && Number.isFinite(stored.y) ? stored.y : 0
        };
      }
      this._cap.textContent = this.getAttribute('placeholder') || 'Drop an image';
      // Toggle via style.display — the [hidden] attribute alone loses to
      // the display:flex / display:block rules in the stylesheet above.
      // An Unsplash src with no credit attribute must NOT render — showing
      // the photo uncredited is the Unsplash-terms violation itself. The
      // error tile replaces the photo until the credit is written. A
      // user-dropped image is the user's own content and always renders.
      // Trimmed: credit is agent/user-editable content, and a whitespace-
      // only value must count as missing — otherwise it would suppress the
      // error tile AND render an empty credit box (no text, no links),
      // exactly the unattributed state this gate exists to prevent.
      const credit = (this.getAttribute('credit') || '').trim();
      const attrError = !!(!credit && !this._userUrl && srcAttr && isUnsplashHost(srcAttr));
      this.toggleAttribute('data-attribution-error', attrError);
      if (url && !attrError) {
        const prev = this._img.getAttribute('src');
        if (prev !== url) {
          // Replacing an already-shown image: mark the swap BEFORE setting
          // src so the stale frame is never revealed (see the data-swapping
          // stylesheet rules). First fill (prev empty) keeps the existing
          // placeholder-until-load behavior — no spinner. _hidShowing
          // covers the pick path's transient attribution-error wipe: prev
          // is gone, but an image WAS showing, so this is a replacement.
          if (prev || this._hidShowing) this.setAttribute('data-swapping', '');
          // Mark the swap BEFORE assigning src: complete keeps reporting
          // the old settled request until the browser's
          // update-the-image-data microtask runs, so same-task re-renders
          // (the pick path's credit/credit-href setAttributes) need this
          // flag, not complete, to know a load is in flight.
          this._loadPending = true;
          this._img.src = url;
          this._ghost.src = url;
        } else {
          // Same-src re-render — release if settled, so an ingest-set
          // spinner can't stick after a byte-identical re-upload (same
          // data URL, no further load event ever fires).
          this._releaseMask();
        }
        this._hidShowing = false;
        this._img.style.display = 'block';
        this._empty.style.display = 'none';
        this.setAttribute('data-filled', '');
        this._clampView();
        this._applyView();
      } else {
        this.removeAttribute('data-swapping');
        // The src is being removed — no load/error will ever fire for it.
        this._loadPending = false;
        // A transient attribution-error wipe of a showing image happens on
        // the pick path: the host sets src one setAttribute before credit,
        // so render N hides the old image (attrError) and render N+1
        // restores a URL. Remember the wipe so that restore renders as a
        // replacement (spinner), not a first fill (blank frame).
        this._hidShowing = attrError && !!this._img.getAttribute('src');
        this._img.style.display = 'none';
        this._img.removeAttribute('src');
        this._ghost.removeAttribute('src');
        // The error tile owns the blocked-photo state; .empty stays for
        // the genuinely-empty slot.
        this._empty.style.display = attrError ? 'none' : 'flex';
        this.removeAttribute('data-filled');
      }

      // Credit belongs to the author src, so a user drop hides it.
      // textContent + the http(s)-only funnel keep external strings inert.
      const showCredit = !!(url && credit && !this._userUrl && !attrError);
      this._credit.textContent = '';
      if (showCredit) {
        // Validate once (resolved against the document, http(s) only),
        // then append the terms-required utm referral params to links
        // that point back at unsplash.com.
        let href = '';
        const rawHref = this.getAttribute('credit-href') || '';
        if (rawHref) {
          try {
            const u = new URL(rawHref, document.baseURI);
            if (u.protocol === 'http:' || u.protocol === 'https:') {
              href = withReferral(u.href);
            }
          } catch {}
        }
        const mkLink = (text, linkHref) => {
          const a = document.createElement('a');
          a.setAttribute('target', '_blank');
          a.setAttribute('rel', 'noopener noreferrer');
          a.setAttribute('href', linkHref);
          a.textContent = text;
          return a;
        };
        // Unsplash's prescribed credit is TWO links — the photographer's
        // name to their profile (credit-href) and 'Unsplash' to the
        // homepage. Render that split whenever the text has the canonical
        // shape; other text keeps the legacy single-link rendering.
        const m = /^Photo by (.+) on Unsplash$/.exec(credit);
        if (m) {
          this._credit.appendChild(document.createTextNode('Photo by '));
          this._credit.appendChild(href ? mkLink(m[1], href) : document.createTextNode(m[1]));
          this._credit.appendChild(document.createTextNode(' on '));
          this._credit.appendChild(mkLink('Unsplash', UNSPLASH_HOMEPAGE_HREF));
        } else if (href) {
          this._credit.appendChild(mkLink(credit, href));
        } else {
          this._credit.textContent = credit;
        }
      }
      this.toggleAttribute('data-credit', showCredit);
    }
  }
  if (!customElements.get('image-slot')) {
    customElements.define('image-slot', ImageSlot);
  }
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/image-slot.js", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.TextLink = __ds_scope.TextLink;

__ds_ns.Headline = __ds_scope.Headline;

__ds_ns.ScriptLabel = __ds_scope.ScriptLabel;

__ds_ns.Wordmark = __ds_scope.Wordmark;

__ds_ns.MenuCard = __ds_scope.MenuCard;

__ds_ns.Placeholder = __ds_scope.Placeholder;

__ds_ns.SizeLineup = __ds_scope.SizeLineup;

__ds_ns.StatPanel = __ds_scope.StatPanel;

__ds_ns.VideoCard = __ds_scope.VideoCard;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.QuantityStepper = __ds_scope.QuantityStepper;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.IconNames = __ds_scope.IconNames;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.RailNav = __ds_scope.RailNav;

__ds_ns.SiteHeader = __ds_scope.SiteHeader;

__ds_ns.Tabs = __ds_scope.Tabs;

})();
