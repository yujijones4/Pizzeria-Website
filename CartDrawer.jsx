(() => {
  const { Dialog, Tabs, Input, Select, QuantityStepper, TextLink, Button, ScriptLabel } = window.PizzaWebsiteDesignSystem_ca709c;
  const D = window.PZ_DATA;
  const fmt = window.PZ_FMT;

  function CartDrawer({ lines, setLines, placed, onPlace, onClose, onBrowse }) {
    const [mode, setMode] = React.useState("delivery");
    const [addr, setAddr] = React.useState("");
    const [loc, setLoc] = React.useState(D.locations[0].value);
    const [err, setErr] = React.useState(null);
    const sub = lines.reduce((n, l) => n + l.unit * l.qty, 0);
    const fee = mode === "delivery" && lines.length ? 3.99 : 0;
    const total = sub + fee;
    const setQty = (key, q) => setLines((ls) => (q <= 0 ? ls.filter((l) => l.key !== key) : ls.map((l) => (l.key === key ? { ...l, qty: q } : l))));
    const place = () => {
      if (mode === "delivery" && !addr.trim()) { setErr("We need somewhere to bring it."); return; }
      onPlace();
    };

    if (placed) {
      const where = mode === "delivery" ? "Heading to " + addr + ". We’ll text when it’s out the door." : "Pick up at the " + D.locations.find((l) => l.value === loc).label + ". Your name’s on the box.";
      return (
        <Dialog placement="right" eyebrow="Order’s in!" title={mode === "delivery" ? "See you in 35" : "Ready in 20"} onClose={onClose}>
          <div className="cart">
            <p className="pz-body">{where}</p>
            <div className="cart__lines">
              {lines.map((l) => <div className="cart__line" key={l.key}><div><div className="cart__name">{l.qty + " × " + l.name}</div><div className="cart__meta">{l.summary}</div></div><div className="cart__price">{fmt(l.unit * l.qty)}</div></div>)}
            </div>
            <div className="cart__total"><span>Paid</span><span>{fmt(total)}</span></div>
            <div><Button variant="ink" iconRight="arrow-right" onClick={onBrowse}>Back to the menu</Button></div>
          </div>
        </Dialog>
      );
    }

    const footer = lines.length ? (
      <div className="cart__foot">
        <div className="cart__sum"><span>Subtotal</span><span>{fmt(sub)}</span></div>
        {mode === "delivery" && <div className="cart__sum"><span>Delivery</span><span>{fmt(fee)}</span></div>}
        <div className="cart__total"><span>Total</span><span>{fmt(total)}</span></div>
        <Button block size="lg" onClick={place}>{"Place order — " + fmt(total)}</Button>
      </div>
    ) : null;

    return (
      <Dialog placement="right" eyebrow="Almost there" title="Your order" onClose={onClose} footer={footer}>
        {lines.length === 0 ? (
          <div className="cart__empty">
            <ScriptLabel>Nothing in here yet.</ScriptLabel>
            <p className="pz-small">The oven’s hot. Go pick something.</p>
            <Button variant="ink" iconRight="arrow-right" onClick={onBrowse}>See the menu</Button>
          </div>
        ) : (
          <div className="cart">
            <Tabs variant="segmented" value={mode} onChange={setMode} style={{ width: "100%" }} items={[{ id: "delivery", label: "Delivery", icon: "truck" }, { id: "pickup", label: "Pickup", icon: "store" }]} />
            {mode === "delivery"
              ? <Input label="Deliver to" icon="map-pin" placeholder="Street address" value={addr} onChange={(e) => { setAddr(e.target.value); setErr(null); }} error={err} hint="About 35 min" />
              : <Select label="Pick up from" value={loc} onChange={(e) => setLoc(e.target.value)} options={D.locations} hint="Ready in about 20 min" />}
            <div className="cart__lines">
              {lines.map((l) => (
                <div className="cart__line" key={l.key}>
                  <div><div className="cart__name">{l.name}</div><div className="cart__meta">{l.summary}</div></div>
                  <div className="cart__price">{fmt(l.unit * l.qty)}</div>
                  <div className="cart__row"><QuantityStepper size="sm" value={l.qty} min={0} onChange={(q) => setQty(l.key, q)} /><TextLink onClick={() => setQty(l.key, 0)}>Remove</TextLink></div>
                </div>
              ))}
            </div>
          </div>
        )}
      </Dialog>
    );
  }

  Object.assign(window, { CartDrawer });
})();
