export type PaletteProp =
	| "--text-navbar--alt"
	| "--br-secondary"
	| "--br-circuit-cur"
	| "--br-circuit"
	| "--cus-radio_label"
	| "--primary"
	| "--text-lite"
	| "--text-dark"
	| "--text-panel"
	| "--bg-navbar"
	| "--qp-br-tl"
	| "--qp-br-rd"
	| "--qp-box-shadow-1"
	| "--qp-box-shadow-2"
	| "--bg-circuit"
	| "--br-primary"
	| "--bg-primary-moz"
	| "--bg-primary-chr"
	| "--bg-tabs"
	| "--bg-icons"
	| "--bg-text"
	| "--bg-secondary"
	| "--canvas-stroke"
	| "--canvas-fill"
	| "--context-text"
	| "--bg-toggle-btn-primary"
	| "--primary-btn-hov"
	| "--btn-danger"
	| "--btn-danger-darken"
	| "--disable"
	| "--cus-btn-hov--bg"
	| "--cus-btn-hov-text"
	| "--node"
	| "--stroke"
	| "--fill"
	| "--hover-and-sel"
	| "--wire-draw"
	| "--wire-cnt"
	| "--wire-pow"
	| "--wire-sel"
	| "--wire-lose"
	| "--mini-map"
	| "--mini-map-stroke"
	| "--input-text"
	| "--secondary-stroke"
	| "--text"
	| "--wire-norm"
	| "--node-norm"
	| "--splitter"
	| "--output-rect"
	| "--table-head-dark";

export type IPalette = {
	[P in PaletteProp]: string;
};

export type ThemeNames =
	| "Default Theme"
	| "Night Sky"
	| "Lite-born"
	| "G&W"
	| "High Contrast"
	| "Color Blind"
	| "Custom Theme";

export type IPALETTES = {
	[T in ThemeNames]: IPalette;
};

