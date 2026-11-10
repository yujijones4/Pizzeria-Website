(() => {
  const { Toast, Dialog, Placeholder } = window.PizzaWebsiteDesignSystem_ca709c;
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

    const go = (r) => {
      setMenuOpen(false);
      if (r === "order") { setCartOpen(true); return; }
      const target = r === "about" ? "pizza" : r;
      setRoute(target);
      if (!window.PZ_START) localStorage.setItem(ROUTE_KEY, target);
      if (r === "about") {
        setTimeout(() => { const el = document.getElementById("about"); if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY, behavior: "smooth" }); }, 60);
      } else window.scrollTo(0, 0);
    };
    const dismiss = (id) => setToasts((ts) => ts.filter((x) => x.id !== id));
    const toast = (t) => {
      const id = Date.now() + Math.random();
      setToasts((ts) => [...ts.slice(-2), { ...t, id }]);
      setTimeout(() => dismiss(id), 4200);
    };
    const addLine = (line) => {
      setPlaced(false);
      setLines((ls) => [...ls, { ...line, key: Date.now() + Math.random() }]);
      toast({ title: "Added to your order", message: (line.qty > 1 ? line.qty + " × " : "") + line.name + (line.summary ? " · " + line.summary : ""), actionLabel: "View order", onAction: () => setCartOpen(true) });
    };
    const pick = (item) => (item.cat === "pizza" ? setCustomizing(item) : addLine({ id: item.id, name: item.name, unit: item.price, qty: 1, summary: "" }));
    const orderSize = (sizeId) => {
      const s = D.lineup.find((x) => x.id === sizeId);
      if (s && s.price != null) addLine({ id: "margherita-" + s.id, name: "Margherita", unit: s.price, qty: 1, summary: s.label });
      else setCustomizing({ ...D.items[0], presetSize: sizeId });
    };
    const cartCount = lines.reduce((n, l) => n + l.qty, 0);

    return (
      <>
        <SiteChrome route={route} menuOpen={menuOpen} setMenuOpen={setMenuOpen} onSearch={() => setSearchOpen(true)} cartCount={cartCount} onCart={() => setCartOpen(true)} onNav={go} />
        {route === "menu" ? <MenuPage onPick={pick} /> : <PizzaPage onPick={pick} onOrder={orderSize} onMenu={() => go("menu")} onPlay={() => setVideo(true)} />}
        {searchOpen && <SearchDialog onClose={() => setSearchOpen(false)} onPick={(it) => { setSearchOpen(false); pick(it); }} />}
        {customizing && <CustomizeDialog item={customizing} onClose={() => setCustomizing(null)} onAdd={(line) => { setCustomizing(null); addLine(line); }} />}
        {cartOpen && (
          <CartDrawer lines={lines} setLines={setLines} placed={placed}
            onPlace={() => { setPlaced(true); toast({ tone: "brand", title: "Order’s in", message: "We’ll text you when it’s out the door." }); }}
            onClose={() => { setCartOpen(false); if (placed) { setLines([]); setPlaced(false); } }}
            onBrowse={() => { setCartOpen(false); if (placed) { setLines([]); setPlaced(false); } go("menu"); }} />
        )}
        {video && (
          <Dialog size="lg" eyebrow="From the oven" title="Meet the pizzaiolo" onClose={() => setVideo(false)}>
            <Placeholder tone="dark" ratio="16 / 9" label="Video player — supply the clip" />
          </Dialog>
        )}
        <div className="kit-toasts">
          {toasts.map(({ id, ...t }) => <Toast key={id} {...t} onAction={t.onAction ? () => { dismiss(id); t.onAction(); } : undefined} onClose={() => dismiss(id)} />)}
        </div>
      </>
    );
  }

  ReactDOM.createRoot(document.getElementById("root")).render(<App />);
})();
