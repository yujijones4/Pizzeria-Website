# Website UI kit

Interactive recreation of the pizzeria website in the system's visual language. Desktop-first (1440).

**Screens**
- **Hero** (`HeroMarquee.jsx`) — giant red "YUJI’S" with every photographed pie rolling left in a continuous loop (pauses on hover); click a pie to customize it.
- **About** (end of `PizzaPage.jsx`) — full-bleed shop photo with a framed paper panel. Also reachable from the rail menu.
- **Story page** (`PizzaPage.jsx`) — mirrors the reference layout: a Margherita cutout follows the viewport and spins on scroll; intro (script eyebrow, display head, body, ink CTA) + StatPanel; "Blistered" section with VideoCard + copy; size lineup; pairings teaser.
- **Menu** (`MenuPage.jsx`) — category Tabs with counts, Veg/Spicy filter Tags, MenuCard grid (stack for pizzas, row for everything else). *Extrapolated.*
- **Customizer** (`CustomizeDialog.jsx`) — size Radio tiles, crust Select, extras Checkboxes, well-done Switch, QuantityStepper, live price. *Extrapolated.*
- **Order drawer** (`CartDrawer.jsx`) — Delivery/Pickup segmented Tabs, address Input with validation or pickup Select, line items, totals, place order → confirmation. *Extrapolated.*
- **Chrome** (`Chrome.jsx`) — fixed RailNav + SiteHeader, full-page menu overlay, search dialog.

**Click-through:** Order now (header) → menu → click a pizza → add → toast → bag icon → drawer → place order. Rail ☰ opens the overlay; 🔍 opens search.

**Images:** supplied photos come from `../../assets/photos/`. Items without a photo still use `<image-slot>` (`image-slot.js`) — drag a cutout onto it and it stays.

**Files:** `index.html` (card), `start-pizza-page.html` + `start-menu.html` (starting points), `data.js` (sample menu/copy), `kit.css` (layout only — all component styling comes from `../../styles.css`).
