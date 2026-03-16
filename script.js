/* ═══════════════════════════════════════════
   MEMORY MAP MOROCCO — SCRIPT.JS
   Carte interactive avec Leaflet.js
═══════════════════════════════════════════ */

// ── Données historiques ──────────────────────────────────────
const evenementsHistoriques = [
  {
    id: 1,
    nom: "Visite de Mohammed V dans les Provinces du Sud",
    date: "Février 1958",
    categorie: "royal",
    couleur: "#006233",
    lat: 27.1536,
    lng: -13.2033,
    ville: "M'hamid El Ghizlane (région de Zagora)",
    description:
      "Le 25 février 1958, Sa Majesté Mohammed V prononce le discours historique de M'hamid, réaffirmant la souveraineté marocaine sur les provinces sahariennes. Ce voyage symbolique dans le Grand Sud marqua un tournant dans la conscience nationale et l'affirmation de l'intégrité territoriale du Royaume.",
    importance:
      "Discours fondateur de la politique marocaine sur la question saharienne.",
    tag: "Événement royal & politique",
  },
  {
    id: 2,
    nom: "Bataille de Dchira (Ighir Ouchène)",
    date: "1944",
    categorie: "militaire",
    couleur: "#C1272D",
    lat: 29.7095,
    lng: -10.1,
    ville: "Région de Tiznit / Anti-Atlas",
    description:
      "La Bataille de Dchira fut l'un des derniers et des plus farouches affrontements de la résistance marocaine contre le protectorat français dans le Sud. Des combattants de la région de Tiznit, sous l'impulsion de résistants locaux, tinrent tête aux forces coloniales dans un engagement armé qui incarna l'esprit indomptable de la résistance nationale.",
    importance:
      "Symbole de la résistance du Sud marocain contre la colonisation.",
    tag: "Résistance militaire",
  },
  {
    id: 3,
    nom: "Fondation de la ville de Fès par Idris II",
    date: "809 ap. J.-C.",
    categorie: "patrimoine",
    couleur: "#C9A84C",
    lat: 34.0331,
    lng: -5.0003,
    ville: "Fès",
    description:
      "En 809, le sultan Idris II fonde la rive Al-Andalous de Fès, développant la cité déjà initiée par son père Idris I. La ville devient rapidement la capitale politique, religieuse et intellectuelle du Maroc, accueillant notamment l'université Al-Qarawiyyin, considérée comme la plus ancienne université du monde encore en activité.",
    importance:
      "Naissance du premier État marocain unifié et de son capital culturel.",
    tag: "Patrimoine & civilisation",
  },
];

// ── Icônes personnalisées par catégorie ──────────────────────
function creerIcone(couleur) {
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 42" width="32" height="42">
      <defs>
        <filter id="ombre" x="-30%" y="-20%" width="160%" height="160%">
          <feDropShadow dx="0" dy="3" stdDeviation="3" flood-color="rgba(0,0,0,0.35)"/>
        </filter>
      </defs>
      <!-- Corps du pin -->
      <path d="M16 0C8.268 0 2 6.268 2 14c0 9.941 14 28 14 28S30 23.941 30 14C30 6.268 23.732 0 16 0z"
            fill="${couleur}" filter="url(#ombre)"/>
      <!-- Cercle intérieur -->
      <circle cx="16" cy="14" r="6" fill="white" opacity="0.95"/>
      <!-- Étoile marocaine stylisée -->
      <text x="16" y="18" text-anchor="middle" font-size="8" fill="${couleur}" font-weight="bold">✦</text>
    </svg>
  `;
  return L.divIcon({
    html: svg,
    className: "",
    iconSize: [32, 42],
    iconAnchor: [16, 42],
    popupAnchor: [0, -44],
  });
}

// ── Contenu HTML du popup ────────────────────────────────────
function creerPopup(evt) {
  return `
    <div style="min-width:260px; max-width:320px; padding:0.5rem 0.2rem;">
      <div class="popup-date">${evt.date} · ${evt.ville}</div>
      <div class="popup-title">${evt.nom}</div>
      <div class="popup-desc">${evt.description}</div>
      <div class="popup-desc" style="margin-top:0.5rem; font-style:italic; font-size:0.82rem;">
        💡 <strong>Importance :</strong> ${evt.importance}
      </div>
      <span class="popup-tag">${evt.tag}</span>
    </div>
  `;
}

// ── Initialisation de la carte ───────────────────────────────
document.addEventListener("DOMContentLoaded", () => {
  // Centre sur le Maroc, zoom 5
  const carte = L.map("map", {
    center: [31.5, -7.0],
    zoom: 5,
    zoomControl: true,
    scrollWheelZoom: false, // évite le scroll accidentel sur mobile
  });

  // Fond de carte — style clair et épuré
  L.tileLayer(
    "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png",
    {
      attribution:
        '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors © <a href="https://carto.com/">CARTO</a>',
      subdomains: "abcd",
      maxZoom: 19,
    }
  ).addTo(carte);

  // Ajouter les marqueurs
  evenementsHistoriques.forEach((evt) => {
    const marqueur = L.marker([evt.lat, evt.lng], {
      icon: creerIcone(evt.couleur),
      title: evt.nom,
    }).addTo(carte);

    marqueur.bindPopup(creerPopup(evt), {
      maxWidth: 360,
      className: "popup-custom",
    });

    // Animation légère à l'ouverture
    marqueur.on("click", function () {
      this.openPopup();
    });

    // Tooltip au survol
    marqueur.bindTooltip(evt.nom, {
      direction: "top",
      offset: [0, -44],
      className: "tooltip-custom",
    });
  });

  // Activer le scroll wheel zoom uniquement si l'utilisateur interagit avec la carte
  carte.on("focus", () => carte.scrollWheelZoom.enable());
  carte.on("blur", () => carte.scrollWheelZoom.disable());
});

// ── Animations au scroll (Intersection Observer) ─────────────
const observateur = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.15 }
);

// Ajouter la classe d'animation aux éléments cibles
document.addEventListener("DOMContentLoaded", () => {
  const elementsAnimes = document.querySelectorAll(
    ".stat-card, .sol-card, .impact-list li, .section-text"
  );

  elementsAnimes.forEach((el, i) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(24px)";
    el.style.transition = `opacity 0.6s ease ${i * 0.08}s, transform 0.6s ease ${i * 0.08}s`;
    observateur.observe(el);
  });

  // Callback de l'observer
  const observateurAnim = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1";
          entry.target.style.transform = "translateY(0)";
        }
      });
    },
    { threshold: 0.12 }
  );

  elementsAnimes.forEach((el) => observateurAnim.observe(el));
});
