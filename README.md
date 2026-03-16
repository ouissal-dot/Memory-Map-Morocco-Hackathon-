# 🗺️ Memory Map Morocco

> **Redécouvrez les moments fondateurs du Maroc sur une carte interactive et vivante.**

A hackathon project that brings Moroccan history to life through an interactive, geolocated web map — making centuries of heritage accessible, engaging, and unforgettable for the next generation.

---

## 📸 Preview

| Section | Description |
|--------|-------------|
| 🏠 Hero | Animated landing with Moroccan-inspired palette |
| ❓ Problème | Why historical memory matters for Moroccan youth |
| 💡 Solution | How the interactive map works |
| 🌍 Impact | Benefits for students, diaspora, and researchers |
| 🗺️ Prototype | Live Leaflet.js map with clickable historical markers |

---

## ✨ Features

- **Interactive map** powered by [Leaflet.js](https://leafletjs.com/) and OpenStreetMap
- **3 historical events** with geolocated markers, popups and tooltips:
  - 📍 Visite de Mohammed V dans les Provinces du Sud *(1958)*
  - 📍 Bataille de Dchira *(1944)*
  - 📍 Fondation de Fès par Idris II *(809 ap. J.-C.)*
- **Color-coded legend** by event category (royal, military, cultural heritage)
- **Scroll animations** with Intersection Observer API
- **Fully responsive** — mobile, tablet & desktop
- **Zero dependencies** beyond Leaflet — pure HTML, CSS & JS

---

## 🚀 Getting Started

No installation or build step required. Just open the file in your browser.

```bash
# Clone the repository
git clone https://github.com/your-username/memory-map-morocco.git

# Navigate to the project folder
cd memory-map-morocco

# Open in browser
open index.html
# — or double-click index.html in your file explorer
```

---

## 📁 Project Structure

```
memory-map-morocco/
│
├── index.html          # Main page — all sections & map container
├── style.css           # Moroccan-themed styles, responsive layout
├── script.js           # Leaflet map logic, historical data, animations
│
├── MemoryMapMorocco.pptx   # Hackathon pitch deck (7 slides)
└── README.md           # You are here
```

---

## 🗺️ Adding New Historical Events

Historical events are defined as a plain JavaScript array in `script.js`. To add a new event, append an object to `evenementsHistoriques`:

```js
{
  id: 4,
  nom: "Nom de l'événement",
  date: "Année ou période",
  categorie: "militaire" | "royal" | "patrimoine",
  couleur: "#C1272D",   // rouge, vert ou or
  lat: 33.9716,         // latitude GPS
  lng: -6.8498,         // longitude GPS
  ville: "Rabat",
  description: "Description complète de l'événement...",
  importance: "Pourquoi cet événement est fondateur.",
  tag: "Label affiché dans le popup",
}
```

Save the file and refresh your browser — the marker appears instantly on the map.

---

## 🎨 Design System

The visual identity draws from Moroccan heritage:

| Token | Value | Usage |
|-------|-------|-------|
| `--rouge` | `#C1272D` | Military events, CTAs, accents |
| `--vert` | `#006233` | Royal/political events, borders |
| `--or` | `#C9A84C` | Cultural heritage, headings |
| `--ivoire` | `#F7F0E3` | Light section backgrounds |
| `--brun` | `#3D2B1F` | Dark section backgrounds |

Fonts: **Playfair Display** (headings) + **Tajawal** (body) — loaded from Google Fonts.

---

## 🛠️ Tech Stack

| Technology | Role |
|------------|------|
| HTML5 | Page structure & semantic markup |
| CSS3 | Custom properties, animations, responsive grid |
| JavaScript (ES6+) | Map logic, Intersection Observer animations |
| [Leaflet.js 1.9.4](https://leafletjs.com/) | Interactive map rendering |
| [OpenStreetMap / CARTO](https://carto.com/) | Map tile provider |
| [Google Fonts](https://fonts.google.com/) | Typography |

---

## 🌱 Roadmap

- [ ] Filter events by era (Antiquité, Médiéval, Contemporain)
- [ ] Search bar to find events by name or city
- [ ] Photo gallery inside each popup
- [ ] Multilingual support (🇫🇷 French · 🇲🇦 Arabic · 🇬🇧 English)
- [ ] Community contribution form for local historians
- [ ] Timeline view alongside the map

---

## 👩‍💻 Author

**Ouissal Attaaricha**
📍 Marrakech, Maroc


---

## 📄 License

This project was created for a hackathon. Feel free to fork, adapt, and build upon it to help preserve Moroccan history. 🇲🇦

---

<p align="center">
  <em>"Un peuple sans mémoire est un peuple sans avenir."</em><br/>
  <strong>— Devise du projet Memory Map Morocco</strong>
</p>
