(() => {
  const { Headline, ScriptLabel, Button } = window.PizzaWebsiteDesignSystem_ca709c;
  const D = window.PZ_DATA;
  const fmt = window.PZ_FMT;

  // Continuous horizontal conveyor of every photographed pie. Two identical halves → translateX(-50%) loops seamlessly.
  function HeroMarquee({ onPick, onMenu }) {
    const pies = D.items.filter((i) => i.cat === "pizza" && i.img);
    const set = [...pies, ...pies];
    const total = D.items.filter((i) => i.cat === "pizza").length;
    return (
      <section className="hero">
        <div className="hero__head"><ScriptLabel>Wood-fired pizza, handcrafted excellence.</ScriptLabel></div>
        <Headline level="mega" align="center" className="hero__word">{D.brand.name}</Headline>
        <div className="hero__marquee" aria-label="Our pizzas">
          <div className="hero__track">
            {[0, 1].map((half) => set.map((p, i) => (
              <button key={half + "-" + i} type="button" className="hero__pie" onClick={() => onPick(p)} aria-hidden={half === 1 ? true : undefined} tabIndex={half === 1 ? -1 : 0}>
                <span className="hero__disc"><img src={p.img} alt={half ? "" : p.name} className="hero__img" style={{ animationDelay: -(i * 4.4) + "s" }} /></span>
                <span className="hero__cap"><span className="hero__name">{p.name}</span></span>
              </button>
            )))}
          </div>
        </div>
        <div className="hero__foot">
          <p className="pz-lead">All handcrafted and made at an order’s notice. See our menu for all options.</p>
          <div className="hero__ctas"><Button size="lg" onClick={onMenu}>Order now</Button><Button size="lg" variant="outline" onClick={onMenu}>See the menu</Button></div>
        </div>
      </section>
    );
  }

  Object.assign(window, { HeroMarquee });
})();
