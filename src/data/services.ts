export interface ServiceDetail {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  coverImage: string;
  idealFor: string[];
  scope: string[];
  processHighlights: string[];
}

export const SERVICES: ServiceDetail[] = [
  {
    slug: "architecture",
    title: "Architecture",
    tagline: "Shaping new buildings from landscape context, natural light, and structural proportion.",
    coverImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop",
    description: "We design bespoke private residences, mountain retreats, and cultural pavilions. Our architectural practice begins with deep site analysis—studying sun paths, wind patterns, local stone quarries, and natural terrain contours.",
    idealFor: [
      "New-build private residences & coastal estates",
      "Mountain sanctuaries & rural retreats",
      "Boutique cultural & hospitality pavilions"
    ],
    scope: [
      "Site analysis & environmental orientation",
      "Concept design & architectural massing",
      "Planning & building envelope resolution",
      "Facade detail & material specification",
      "Lighting & landscape integration planning"
    ],
    processHighlights: [
      "01 Discover — Site exploration and light study",
      "02 Define — Spatial massing models",
      "03 Design — Envelope and material detailing",
      "04 Refine — Technical resolution",
      "05 Deliver — Comprehensive execution package"
    ]
  },
  {
    slug: "interior-architecture",
    title: "Interior Architecture",
    tagline: "Re-imagining internal spatial flow, ceiling heights, and integrated architectural joinery.",
    coverImage: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1974&auto=format&fit=crop",
    description: "Interior architecture bridges structural building envelopes with intimate human scale. We reconfigure floorplates, insert sculptural timber storage boxes, frame internal courtyards, and curate continuous flooring materials.",
    idealFor: [
      "Historic building remodels & loft conversions",
      "Full internal spatial reconfigurations",
      "High-end residential floorplate redesigns"
    ],
    scope: [
      "Internal floorplate re-planning",
      "Acoustic strategy & ceiling height geometry",
      "Custom millwork & built-in furniture design",
      "Wet room & bath hall architectural detailing",
      "Integrated architectural lighting design"
    ],
    processHighlights: [
      "Spatial flow diagrams & wall removal plans",
      "1:10 joinery junction detailing",
      "Material mock-up reviews"
    ]
  },
  {
    slug: "interior-design",
    title: "Interior Design",
    tagline: "Tactile material selection, handcrafted furniture curation, and atmospheric illumination.",
    coverImage: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2070&auto=format&fit=crop",
    description: "Our interior design service focuses on tactile materiality—sourcing raw terracotta tiles, hand-troweled lime renders, custom linen drapery, and vintage furniture pieces that bring quiet warmth to daily living.",
    idealFor: [
      "Complete residential interior fit-outs",
      "Bespoke furniture curation & custom joinery",
      "Material, texture & color palette development"
    ],
    scope: [
      "Furniture, fixtures & hardware curation (FF&E)",
      "Custom furniture design & fabrication coordination",
      "Soft furnishings, drapery & rug sourcing",
      "Art & ceramic curation",
      "Decorative & ambient lighting selection"
    ],
    processHighlights: [
      "Material palette trays & physical samples",
      "Custom furniture shop drawing reviews",
      "On-site styling and installation"
    ]
  },
  {
    slug: "hospitality-design",
    title: "Hospitality Design",
    tagline: "Creating memorable dining rooms, boutique hotels, and wellness sanctuaries.",
    coverImage: "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?q=80&w=2070&auto=format&fit=crop",
    description: "We craft immersive hospitality spaces where lighting, acoustics, and tactile textures work together to create intimacy and emotional resonance for guests.",
    idealFor: [
      "Intimate dining rooms & tasting bars",
      "Boutique hotels & wellness retreats",
      "Private member lounges & spas"
    ],
    scope: [
      "Guest journey & spatial zoning strategy",
      "Dining layout & seating acoustic design",
      "Atmospheric lighting & twilight scene controls",
      "Bespoke bar & banquette seating joinery",
      "Material durability & maintenance specification"
    ],
    processHighlights: [
      "Guest arrival experience modeling",
      "Acoustic testing & material selection",
      "Operational flow integration"
    ]
  },
  {
    slug: "workplace-design",
    title: "Workplace Design",
    tagline: "Sanctuary environments engineered for deep focus, quiet collaboration, and well-being.",
    coverImage: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop",
    description: "Replacing sterile corporate offices with calm, studio-like environments that support deep focus, acoustic privacy, and natural light access for creative teams.",
    idealFor: [
      "Creative agency studios & headquarters",
      "Executive family office suites",
      "Boutique professional firm offices"
    ],
    scope: [
      "Workplace spatial strategy & density planning",
      "Acoustic zoning (focus vs collaboration)",
      "Custom workstation & communal library table design",
      "Integrated greenery & shadow garden planning",
      "Lighting for digital & analog focus tasks"
    ],
    processHighlights: [
      "Deep focus spatial audits",
      "Acoustic baffle and drapery integration",
      "Ergonomic & atmospheric testing"
    ]
  },
  {
    slug: "spatial-strategy",
    title: "Spatial Strategy",
    tagline: "Early-stage masterplanning, vision framing, and material research for future developments.",
    coverImage: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop",
    description: "Before committing to construction, our spatial strategy service helps clients evaluate site potential, define spatial program requirements, and establish cohesive design vision documents.",
    idealFor: [
      "Property developers & private landowners",
      "Brand vision framing for new developments",
      "Pre-acquisition architectural feasibility"
    ],
    scope: [
      "Site zoning & environmental potential studies",
      "Architectural program definition",
      "Concept narrative & mood framing",
      "Material sourcing & sustainability guidelines",
      "Design intent guidelines for execution teams"
    ],
    processHighlights: [
      "Vision workshops & site walkthroughs",
      "Strategic spatial masterplan reports",
      "Brand & spatial alignment guides"
    ]
  }
];
