// Header: solid background after scrolling past hero
const header = document.getElementById('siteHeader');
function updateHeader() {
  if (window.scrollY > 60) header.classList.add('solid');
  else header.classList.remove('solid');
}
window.addEventListener('scroll', updateHeader);
updateHeader();

// Side nav
const sideNav = document.getElementById('sideNav');
const sideNavOverlay = document.getElementById('sideNavOverlay');
const hamburgerBtn = document.getElementById('hamburgerBtn');
const sideNavClose = document.getElementById('sideNavClose');

function openNav() {
  sideNav.classList.add('open');
  sideNavOverlay.classList.add('open');
}
function closeNav() {
  sideNav.classList.remove('open');
  sideNavOverlay.classList.remove('open');
}
hamburgerBtn.addEventListener('click', openNav);
sideNavClose.addEventListener('click', closeNav);
sideNavOverlay.addEventListener('click', closeNav);
document.querySelectorAll('.nav-link').forEach(link => link.addEventListener('click', closeNav));

// Tabs
const tabBtns = document.querySelectorAll('.tab-btn');
const tabPanels = document.querySelectorAll('.tab-panel');
tabBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    tabBtns.forEach(b => b.classList.remove('active'));
    tabPanels.forEach(p => p.classList.remove('active'));
    btn.classList.add('active');
    document.querySelector(`.tab-panel[data-panel="${btn.dataset.tab}"]`).classList.add('active');
  });
});

// Carousel
const carouselImgs = document.querySelectorAll('.carousel-img');
const carIndexEl = document.getElementById('carIndex');
let carIndex = 0;

function showCarousel(i) {
  carIndex = (i + carouselImgs.length) % carouselImgs.length;
  carouselImgs.forEach((img, idx) => img.classList.toggle('active', idx === carIndex));
  carIndexEl.textContent = String(carIndex + 1).padStart(2, '0');
}
document.getElementById('carPrev').addEventListener('click', () => showCarousel(carIndex - 1));
document.getElementById('carNext').addEventListener('click', () => showCarousel(carIndex + 1));

let carouselTimer = setInterval(() => showCarousel(carIndex + 1), 5000);
document.getElementById('carousel').addEventListener('mouseenter', () => clearInterval(carouselTimer));

// ===== Language switch (FR / EN / ES) =====
const translations = {
  en: {
    header_cta: "View menu",
    nav_accueil: "Home", nav_histoire: "Our story", nav_carte: "Menu", nav_catering: "Catering", nav_instagram: "Instagram", nav_contact: "Find us",
    hero_badge: "126 Google reviews",
    hero_title: "<span class=\"outline\">GOLDEN COOKIES.</span><br>FRESH SMOOTHIES.",
    hero_text: "Something fresh is brewing in <strong>Bécon</strong>. Soft-baked cookies made every morning, smoothies pressed to order. A new recipe every week, the classics that stay, and a little something for everyone.",
    hero_cta1: "Find your favourite", hero_cta2: "About Mimi",
    scroll_badge: "KEEP SCROLLING · KEEP SCROLLING ·",
    story_eyebrow: "Our story",
    story_title: "A RECIPE<br><em>reinvented</em>",
    story_p1: "At Mimi, we believe a cookie and a smoothie can tell you a lot more than just a craving for something sweet.",
    story_p2: "It all starts with an American-style cookie dough and fruit blended to order, nothing artificial. A simple, generous, careful preparation, made for everyday breaks in Asnières.",
    story_p3: "That standard is the heart of <strong>MIMI</strong>.",
    story_dark_text: "MIMI was born from the idea of <strong>reinventing the snack break</strong>. Mixing the comfort of a cookie fresh out of the oven with the freshness of pressed fruit, America and Asnières, indulgent and wholesome.",
    menu_eyebrow: "Menu",
    menu_title: "OUR<br><span>TREATS</span>",
    menu_intro: "Made fresh every morning to our own recipes. Crisp on the edges, soft at the heart for the cookies. Fruit blended to order for the smoothies. Every recipe, a story.",
    tab_cookies: "Cookies", tab_smoothies: "Smoothies", tab_emporter: "To go",
    cat_classiques: "Classics", cat_speciales: "Specials", cat_formules: "Combos",
    item_choc_name: "Melty Chocolate", item_choc_desc: "Dark chocolate chunks, gooey centre and a pinch of sea salt. The unmissable classic.",
    item_pepites_name: "Classic Chip", item_pepites_desc: "Soft dough, milk chocolate chips. Simple, golden, perfect with a coffee.",
    item_pecan_name: "Golden Pecan", item_pecan_desc: "Toasted pecans and a drizzle of milk chocolate. Crunchy in every bite.",
    item_amande_name: "Almond Caramel", item_amande_desc: "Flaked almonds over a caramel butter base. Crunchy and indulgent.",
    item_lait_name: "Break & Dip", item_lait_desc: "Gooey centre, crisp edges, made for dipping. The snack that tastes like childhood.",
    item_fraise_name: "Strawberry-Raspberry", item_fraise_desc: "Fresh strawberries and raspberries, a hint of banana. Sweet, fruity, refreshing.",
    item_mangue_name: "Mango-Passion", item_mangue_desc: "Ripe mango and passion fruit. A tropical burst in every sip.",
    item_myrtille_name: "Blueberry Intense", item_myrtille_desc: "Wild blueberries, banana and oat milk. Antioxidant, indulgent, wonderfully thick.",
    item_vert_name: "Green Detox", item_vert_desc: "Spinach, green apple, lemon and ginger. Fresh, bright, full of energy.",
    item_ananas_name: "Pineapple-Coconut", item_ananas_desc: "Roasted pineapple, coconut milk and a touch of vanilla. A taste of holidays.",
    item_latte_name: "Iced Vanilla Latte", item_latte_desc: "Coffee, banana and vanilla, iced and creamy. The perfect coffee-smoothie compromise.",
    tag_bestseller: "Best-seller", allergen_nuts: "tree nuts",
    take_box_name: "Discovery Box", take_box_desc: "6 cookies of your choice, in a box ready to gift.",
    take_pack_name: "Smoothie Pack x3", take_pack_desc: "3 smoothies of your choice, 33cl, to take to the office.",
    take_duo_name: "Duo Formula", take_duo_desc: "1 cookie + 1 seasonal smoothie. The break that hits just right.",
    catering_eyebrow: "Catering",
    catering_title_1: "LITTLE MOMENTS OF JOY", catering_title_2: "TO SHARE WITH MIMI",
    catering_text: "Birthdays, office parties, a Monday that could use being a little less Monday. We prepare <strong>custom trays</strong> of cookies and smoothies for every occasion.",
    catering_cta: "Order now",
    insta_eyebrow: "MIMI ON INSTAGRAM",
    insta_title_1: "SEE WHAT'S COMING UP", insta_title_2: "BEFORE ANYONE ELSE.",
    insta_side_text: "Join the <strong>1,842</strong> others who never miss a fresh batch — every new creation and seasonal drink lands on our Instagram first.",
    insta_cta: "@mimi.asnieres on IG",
    location_eyebrow: "Come say hi",
    location_title_1: "FIND US", location_title_2: "IN",
    map_open: "Open in Maps",
    info_horaires: "Opening hours", info_telephone: "Phone", info_commandes: "Orders", info_suis: "Follow us",
    day_lun: "Mon", day_mar: "Tue", day_mer: "Wed", day_jeu: "Thu", day_ven: "Fri", day_sam: "Sat", day_dim: "Sun",
    footer_copy: "© 2026 Mimi — All rights reserved", footer_privacy: "Privacy", footer_terms: "Terms"
  },
  es: {
    header_cta: "Ver la carta",
    nav_accueil: "Inicio", nav_histoire: "Nuestra historia", nav_carte: "Carta", nav_catering: "Catering", nav_instagram: "Instagram", nav_contact: "Encuéntranos",
    hero_badge: "126 reseñas de Google",
    hero_title: "<span class=\"outline\">COOKIES DORADAS.</span><br>SMOOTHIES FRESCOS.",
    hero_text: "Algo fresco se está preparando en <strong>Bécon</strong>. Cookies tiernas horneadas cada mañana, smoothies recién exprimidos. Una receta nueva cada semana, los clásicos de siempre, y un poco de todo para todos.",
    hero_cta1: "Encuentra tu favorito", hero_cta2: "Sobre Mimi",
    scroll_badge: "SIGUE BAJANDO · SIGUE BAJANDO ·",
    story_eyebrow: "Nuestra historia",
    story_title: "UNA RECETA<br><em>reinventada</em>",
    story_p1: "En Mimi creemos que una cookie y un smoothie cuentan mucho más que un simple antojo de merienda.",
    story_p2: "Todo empieza con una masa de cookie de tradición americana y fruta recién batida, sin artificios. Una preparación simple, generosa y cuidada, pensada para las pausas del día a día en Asnières.",
    story_p3: "Esa exigencia es el corazón de <strong>MIMI</strong>.",
    story_dark_text: "MIMI nació de la idea de <strong>reinventar la pausa de la merienda</strong>. Mezclar el confort de una cookie recién salida del horno con la frescura de una fruta exprimida, América y Asnières, lo goloso y lo sano.",
    menu_eyebrow: "Carta",
    menu_title: "NUESTRAS<br><span>DELICIAS</span>",
    menu_intro: "Preparados cada mañana según nuestras propias recetas. Crujientes por fuera, tiernas por dentro para las cookies. Fruta batida al momento para los smoothies. Cada receta, una historia.",
    tab_cookies: "Cookies", tab_smoothies: "Smoothies", tab_emporter: "Para llevar",
    cat_classiques: "Clásicos", cat_speciales: "Especiales", cat_formules: "Fórmulas",
    item_choc_name: "Chocolate Fundente", item_choc_desc: "Trozos de chocolate negro, corazón fundente y un toque de flor de sal. El clásico imprescindible.",
    item_pepites_name: "Pepitas Tradicional", item_pepites_desc: "Masa tierna, pepitas de chocolate con leche. Sencilla, dorada, perfecta con un café.",
    item_pecan_name: "Pecana Dorada", item_pecan_desc: "Nueces pecanas tostadas y un hilo de chocolate con leche. Crujiente en cada bocado.",
    item_amande_name: "Almendra Caramelo", item_amande_desc: "Almendras laminadas sobre una base de mantequilla de caramelo. Crujiente y goloso.",
    item_lait_name: "Para Mojar", item_lait_desc: "Corazón fundente, bordes crujientes, para mojar. La merienda que sabe a infancia.",
    item_fraise_name: "Fresa-Frambuesa", item_fraise_desc: "Fresas y frambuesas frescas, un toque de plátano. Dulce, afrutado, refrescante.",
    item_mangue_name: "Mango-Maracuyá", item_mangue_desc: "Mango bien maduro y maracuyá. Una explosión tropical en cada sorbo.",
    item_myrtille_name: "Arándano Intenso", item_myrtille_desc: "Arándanos silvestres, plátano y leche de avena. Antioxidante, goloso y bien espeso.",
    item_vert_name: "Verde Detox", item_vert_desc: "Espinaca, manzana verde, limón y jengibre. Fresco, vivo, lleno de energía.",
    item_ananas_name: "Piña-Coco", item_ananas_desc: "Piña asada, leche de coco y un toque de vainilla. Un sabor a vacaciones.",
    item_latte_name: "Latte Helado de Vainilla", item_latte_desc: "Café, plátano y vainilla, helado y cremoso. El compromiso perfecto entre café y smoothie.",
    tag_bestseller: "Más vendido", allergen_nuts: "frutos secos",
    take_box_name: "Caja Descubrimiento", take_box_desc: "6 cookies a elegir, en una caja lista para regalar.",
    take_pack_name: "Pack Smoothies x3", take_pack_desc: "3 smoothies de 33cl a elegir, para llevar a la oficina.",
    take_duo_name: "Fórmula Dúo", take_duo_desc: "1 cookie + 1 smoothie de temporada. La pausa perfecta.",
    catering_eyebrow: "Catering",
    catering_title_1: "PEQUEÑOS MOMENTOS DE ALEGRÍA", catering_title_2: "PARA COMPARTIR CON MIMI",
    catering_text: "Cumpleaños, celebraciones de oficina, un lunes que necesita serlo un poco menos. Preparamos <strong>bandejas a medida</strong> de cookies y smoothies para cada ocasión.",
    catering_cta: "Pedir ahora",
    insta_eyebrow: "MIMI EN INSTAGRAM",
    insta_title_1: "DESCUBRE LO QUE SE PREPARA", insta_title_2: "ANTES QUE NADIE.",
    insta_side_text: "Únete a los <strong>1842</strong> que nunca se pierden una hornada — cada creación y bebida de temporada llega antes a nuestro Instagram.",
    insta_cta: "@mimi.asnieres en IG",
    location_eyebrow: "Ven a vernos",
    location_title_1: "ENCUÉNTRANOS", location_title_2: "EN",
    map_open: "Abrir en Maps",
    info_horaires: "Horario", info_telephone: "Teléfono", info_commandes: "Pedidos", info_suis: "Síguenos",
    day_lun: "Lun", day_mar: "Mar", day_mer: "Mié", day_jeu: "Jue", day_ven: "Vie", day_sam: "Sáb", day_dim: "Dom",
    footer_copy: "© 2026 Mimi — Todos los derechos reservados", footer_privacy: "Privacidad", footer_terms: "Términos"
  }
};

const langMeta = {
  fr: { title: "Mimi — Cookies dorés & Smoothies frais à Asnières-sur-Seine", desc: "Mimi, cookies moelleux préparés chaque matin et smoothies frais pressés, à Bécon, Asnières-sur-Seine." },
  en: { title: "Mimi — Golden Cookies & Fresh Smoothies in Asnières-sur-Seine", desc: "Mimi, soft-baked cookies made every morning and fresh pressed smoothies, in Bécon, Asnières-sur-Seine." },
  es: { title: "Mimi — Cookies Doradas y Smoothies Frescos en Asnières-sur-Seine", desc: "Mimi, cookies tiernas horneadas cada mañana y smoothies recién exprimidos, en Bécon, Asnières-sur-Seine." }
};

const originalFr = {};
document.querySelectorAll('[data-i18n]').forEach(el => { originalFr[el.dataset.i18n] = el.innerHTML; });

function setLang(lang) {
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (lang === 'fr') {
      el.innerHTML = originalFr[key];
    } else if (translations[lang] && translations[lang][key] !== undefined) {
      el.innerHTML = translations[lang][key];
    }
  });
  const meta = langMeta[lang] || langMeta.fr;
  document.title = meta.title;
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) metaDesc.setAttribute('content', meta.desc);
  document.querySelectorAll('.lang-btn').forEach(b => b.classList.toggle('active', b.dataset.lang === lang));
  try { localStorage.setItem('mimi-lang', lang); } catch (e) {}
}

document.querySelectorAll('.lang-btn').forEach(btn => {
  btn.addEventListener('click', () => setLang(btn.dataset.lang));
});

let savedLang = 'fr';
try { savedLang = localStorage.getItem('mimi-lang') || 'fr'; } catch (e) {}
if (savedLang !== 'fr') setLang(savedLang);
