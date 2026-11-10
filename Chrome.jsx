(() => {
  const { RailNav, SiteHeader, Dialog, Input } = window.PizzaWebsiteDesignSystem_ca709c;
  const D = window.PZ_DATA;
  const fmt = window.PZ_FMT;

  function SiteChrome({ route, menuOpen, setMenuOpen, onSearch, cartCount, onCart, onNav }) {
    return (
      <>
        <div className="kit-rail"><RailNav menuOpen={menuOpen} onMenuClick={() => setMenuOpen(!menuOpen)} onSearchClick={onSearch} /></div>
        {menuOpen && <MenuOverlay route={route} cartCount={cartCount} onNav={onNav} />}
        <SiteHeader className="kit-header" brandName={D.brand.name} tagline={D.brand.tagline} cartCount={cartCount} onCartClick={onCart} onBrandClick={() => onNav("pizza")} onCtaClick={() => onNav("menu")} />
      </>
    );
  }

  function MenuOverlay({ route, cartCount, onNav }) {
    const links = [["pizza", "Our pizza", "The Margherita, start to finish"], ["menu", "The menu", "See all nine pies here"], ["about", "About us", "The shop and the oven"], ["order", "Your order", cartCount ? cartCount + " in the bag" : "Watchu feeling?"]];
    return (
      <div className="kit-overlay">
        <nav className="kit-overlay__nav">
          {links.map(([id, label, note]) => (
            <button key={id} className="kit-overlay__link" aria-current={route === id ? "page" : undefined} onClick={() => onNav(id)}>{label}<small>{note}</small></button>
          ))}
        </nav>
      </div>
    );
  }

  function SearchDialog({ onClose, onPick }) {
    const [q, setQ] = React.useState("");
    const term = q.trim().toLowerCase();
    const res = term ? D.items.filter((i) => (i.name + " " + i.desc).toLowerCase().includes(term)) : D.items.filter((i) => i.badge);
    return (
      <Dialog size="sm" eyebrow="Hungry for something?" title="Search" onClose={onClose}>
        <div className="srch">
          <Input icon="search" placeholder="Try “honey” or “fries”" value={q} onChange={(e) => setQ(e.target.value)} autoFocus />
          <span className="pz-field__label">{term ? res.length + " found" : "Popular right now"}</span>
          <div className="srch__list">
            {res.slice(0, 6).map((i) => <button key={i.id} className="srch__item" onClick={() => onPick(i)}><span>{i.name}</span><span>{fmt(i.price)}</span></button>)}
            {term && !res.length && <p className="pz-small">Nothing by that name. Yet.</p>}
          </div>
        </div>
      </Dialog>
    );
  }

  Object.assign(window, { SiteChrome, SearchDialog });
})();
