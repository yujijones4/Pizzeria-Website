// Sample content for the website UI kit. Brand name is a placeholder.
window.PZ_FMT = (n) => "$" + (Number.isInteger(n) ? n : n.toFixed(2));
window.PZ_DATA = {
  brand: { name: "Yuji’s", tagline: "Pizzeria" },
  categories: [
    { id: "pizza", label: "Pizzas" }, { id: "sides", label: "Sides" },
    { id: "drinks", label: "Drinks" }
  ],
  tags: {
    veg: { label: "Veg", tone: "basil", icon: "leaf" },
    vegan: { label: "Vegan", tone: "basil", icon: "leaf" },
    spicy: { label: "Spicy", tone: "brand", icon: "flame" },
    nuts: { label: "Nuts", tone: "ochre", icon: "info" }
  },
  items: [
    { id: "margherita", cat: "pizza", name: "Margherita", price: 18, desc: "San Marzano tomato, fior di latte, basil, good olive oil.", tags: ["veg"], img: "../../assets/photos/pizza-margherita.png" },
    { id: "pepperoni", cat: "pizza", name: "Pepperoni", price: 20, desc: "Cup-and-char pepperoni, mozzarella, rosemary.", tags: [], badge: "Bestseller", img: "../../assets/photos/pizza-pepperoni.png" },
    { id: "supreme", cat: "pizza", name: "Supreme", price: 23, desc: "Pepperoni, sausage, mushrooms, peppers, red onion, black olives. Everything, on purpose.", tags: [], img: "../../assets/photos/pizza-supreme.png" },
    { id: "hot-honey", cat: "pizza", name: "Hot Honey", price: 20, desc: "Sausage, roasted peppers, mozzarella, parsley and a hot-honey drizzle. Sweet, then trouble.", tags: ["spicy"], badge: "New", img: "../../assets/photos/pizza-hot-honey.png" },
    { id: "funghi", cat: "pizza", name: "Funghi", price: 18, desc: "Roasted mushrooms, wilted spinach, garlic cream, mozzarella.", tags: ["veg"], img: "../../assets/photos/pizza-funghi.png" },
    { id: "quattro", cat: "pizza", name: "Quattro Formaggi", price: 20, desc: "Mozzarella, fontina, gorgonzola, parm, a sprig of basil. No tomato, no regrets.", tags: ["veg"], img: "../../assets/photos/pizza-quattro.png" },
    { id: "verde", cat: "pizza", name: "Verde & Rosso", price: 20, desc: "Half basil pesto with salami, half San Marzano tomato — fior di latte and basil across both.", tags: [], img: "../../assets/photos/pizza-verde.png" },
    { id: "diavola", cat: "pizza", name: "Diavola", price: 18, desc: "Spicy salami, cherry tomatoes, fior di latte, basil.", tags: ["spicy"], img: "../../assets/photos/pizza-diavola.png" },
    { id: "marinara", cat: "pizza", name: "Marinara", price: 18, desc: "Tomato, garlic, oregano, basil, olive oil. The original — no cheese.", tags: ["vegan"], img: "../../assets/photos/pizza-marinara.png" },
    { id: "garlic-bread", cat: "sides", name: "Cheesy garlic bread", price: 6, desc: "Garlic-butter bread under a blanket of melted mozzarella and parsley.", tags: [], img: "../../assets/photos/side-garlic-bread.png", cut: true },
    { id: "meatballs", cat: "sides", name: "Meatball skewer", price: 8, desc: "Sticky-glazed meatballs on a stick, scallions and sesame on top.", tags: [], img: "../../assets/photos/side-meatballs-v2.png", cut: true },
    { id: "fries", cat: "sides", name: "House French fries", price: 3, desc: "Skin-off, double-fried, salted the second they land.", tags: [], img: "../../assets/photos/side-fries.png", cut: true },
    { id: "loaded-fries", cat: "sides", name: "Ultimate loaded fries", price: 7, desc: "Fries buried in seasoned beef, cheddar sauce, crema, tomato, onion and cilantro.", tags: [], img: "../../assets/photos/side-loaded-fries.png", cut: true },
    { id: "sweet-tea", cat: "drinks", name: "Sweet tea", price: 3, desc: "Brewed strong, sugared while it’s hot. Southern-sweet.", tags: ["vegan"], img: "../../assets/photos/drink-sweet-tea-v2.png", cut: true },
    { id: "unsweet-tea", cat: "drinks", name: "Unsweet tea", price: 2, desc: "Same black tea, nothing added. Lemon on request.", tags: ["vegan"], img: "../../assets/photos/drink-unsweet-tea-v2.png", cut: true },
    { id: "olipop-ginger-ale", cat: "drinks", name: "Olipop Ginger Ale", price: 3, desc: "Crisp, gingery, 5g of sugar. Served cold in the can.", tags: ["vegan"], img: "../../assets/photos/drink-olipop-ginger-ale.png", cut: true },
    { id: "lemonade", cat: "drinks", name: "House lemonade", price: 3, desc: "Squeezed every morning.", tags: ["vegan"], img: "../../assets/photos/drink-lemonade-v3.png", cut: true }
  ],
  sizes: [
    { id: "10", label: "10 in", serves: "Personal", delta: -4 },
    { id: "14", label: "14 in", serves: "Serves 2–3", delta: 0 },
    { id: "18", label: "18 in", serves: "Serves 4–6", delta: 6 }
  ],
  crusts: [
    { id: "classic", label: "Classic", price: 0 },
    { id: "thin", label: "Thin & crispy", price: 0 },
    { id: "gf", label: "Gluten-free", price: 3 }
  ],
  toppings: [
    { id: "honey", label: "Hot honey", price: 2 },
    { id: "pepperoni", label: "Pepperoni", price: 3 },
    { id: "chili", label: "Calabrian chili", price: 1 },
    { id: "basil", label: "Extra basil", price: 0 },
    { id: "garlic", label: "Roasted garlic", price: 1 }
  ],
  lineup: [
    { id: "10", label: "10 in", sublabel: "Personal", width: 150, cta: "the 10 in" },
    { id: "14", label: "14 in", sublabel: "Serves 2–3", width: 200, cta: "the 14 in" },
    { id: "18", label: "18 in", sublabel: "Serves 4–6", width: 250, cta: "the 18 in" }
  ],
  stats: [
    { label: "Heat", sublabel: "Degrees in the dome", value: "900", fraction: "°F", description: "Hot enough to spot the crust before the cheese gives up." },
    { label: "Bake", sublabel: "Seconds, door to plate", value: "90", fraction: "s", description: "Fast and loud keeps the middle tender." },
    { label: "Dough", sublabel: "Hours of cold rise", value: "72", fraction: "h", description: "Three days in the walk-in for a tangy, airy crumb." }
  ],
  locations: [
    { value: "downtown", label: "Downtown shop" },
    { value: "eastside", label: "Eastside shop" }
  ]
};
