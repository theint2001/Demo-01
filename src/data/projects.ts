import { Project } from '@/types/project';

export const PROJECTS: Project[] = [
  {
    slug: "casa-lume",
    title: "Casa Lume",
    category: "Residential",
    year: "2025",
    location: "Northern Coast",
    status: "Completed Concept",
    area: "480 m² / 5,160 sq ft",
    type: "Single-Family Residence",
    description: "A light-filled residence shaped around courtyard living, natural materials, and long ocean horizon views.",
    longDescription: "Casa Lume is an exploration into how natural light shifts across untreated lime plaster walls throughout the day. Situated on a wind-swept coastal promontory, the residence sits low within the terrain, framing privacy while maintaining an intimate dialogue with the horizon.",
    challenge: "Designing a open, light-filled structure on an exposed coastal plot required protecting living areas from ocean gales while capturing winter sunlight and preserving total acoustic stillness inside.",
    approach: "We conceived the building as three low limestone volumes wrapping around a recessed central courtyard. Deeply recessed apertures frame panoramic sea views while acting as natural shading fins.",
    designConcept: "The light well as an anchor. By carving internal courtyards into the massing, daylight penetrates every room from multiple axes, eliminating harsh direct glare.",
    materials: ["Hand-troweled Lime Plaster", "Honed Travertine", "Reclaimed White Oak", "Weathered Zinc roofing", "Fluted Glass"],
    projectTags: ["Coastal", "Courtyard", "Lime Plaster", "Daylight Design"],
    featured: true,
    coverImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop",
    galleryImages: [
      {
        url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop",
        caption: "Main living gallery featuring double-height lime plaster walls and continuous ocean horizon view.",
        aspectRatio: "wide"
      },
      {
        url: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop",
        caption: "The central interior courtyard framing a single pine tree and morning shadow patterns.",
        aspectRatio: "tall"
      },
      {
        url: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop",
        caption: "Kitchen island constructed from a monolithic slab of honed travertine.",
        aspectRatio: "square"
      },
      {
        url: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?q=80&w=2070&auto=format&fit=crop",
        caption: "Primary bedroom suite opens directly to the secluded eastern garden terrace.",
        aspectRatio: "wide"
      }
    ],
    relatedProjects: ["still-house", "mizu-courtyard", "clay-house"],
    relatedJournal: ["a-room-begins-with-light", "designing-around-the-courtyard"],
    servicesProvided: ["Architecture", "Interior Architecture", "Spatial Strategy"],
    clientScope: "Full architectural design, interior material sourcing, and lighting integration strategy."
  },
  {
    slug: "still-house",
    title: "Still House",
    category: "Residential",
    year: "2024",
    location: "Hill Country",
    status: "Completed Concept",
    area: "360 m² / 3,870 sq ft",
    type: "Mountain Sanctuary",
    description: "A serene retreat crafted from rammed earth and brushed cedar, designed for silence and deep landscape integration.",
    longDescription: "Still House rests on a steep pine hillside. The home is built into the topography, utilizing thick earthen walls to maintain internal thermal stability and acoustic isolation from mountain winds.",
    challenge: "Integrating a substantial modern home into a protected pine slope without scarring the natural contours or disrupting existing rainwater drainage channels.",
    approach: "The building cascades across three staggered terraces. Rammed earth walls made from local clay form the spine, topped by delicate cantilevered timber roofs.",
    designConcept: "Horizontal continuity. Glazing runs uninterrupted from wall to wall, blurring the boundary between interior oak floorboards and the forest floor.",
    materials: ["Stabilized Rammed Earth", "Brushed Japanese Cedar", "Burnished Steel", "Honed Basalt Stone"],
    projectTags: ["Rammed Earth", "Mountain", "Sustainable", "Quiet Living"],
    featured: true,
    coverImage: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?q=80&w=2070&auto=format&fit=crop",
    galleryImages: [
      {
        url: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?q=80&w=2070&auto=format&fit=crop",
        caption: "Exterior facade featuring exposed rammed earth wall and cantilevered cedar canopy.",
        aspectRatio: "wide"
      },
      {
        url: "https://images.unsplash.com/photo-1600573472592-401b489a3cdc?q=80&w=2070&auto=format&fit=crop",
        caption: "Sunken hearth seating area overlooking the pine forest canopy.",
        aspectRatio: "tall"
      },
      {
        url: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2070&auto=format&fit=crop",
        caption: "Minimalist bath hall clad in custom hone basalt stone tiles.",
        aspectRatio: "square"
      }
    ],
    relatedProjects: ["casa-lume", "monument-house", "fold-house"],
    relatedJournal: ["the-quiet-geometry-of-a-home", "why-materials-matter"],
    servicesProvided: ["Architecture", "Interior Design"],
    clientScope: "Concept development and complete internal spatial planning."
  },
  {
    slug: "mizu-courtyard",
    title: "Mizu Courtyard",
    category: "Residential",
    year: "2025",
    location: "Riverside District",
    status: "Ongoing Concept",
    area: "520 m² / 5,600 sq ft",
    type: "Urban Courtyard House",
    description: "An introverted urban residence organized around a reflecting basin and layered timber screens.",
    longDescription: "In a dense historic quarter, Mizu Courtyard turns inward. The street elevation presents an unbroken wall of micro-textured grey brick, shielding a contemplative inner world centered on water and shadow.",
    challenge: "Providing absolute privacy and sound damping on a busy urban corner site while admitting maximum morning daylight.",
    approach: "A series of perimeter garden zones surround an internal open-air pool. Operable cedar louver screens allow occupants to adjust air circulation and privacy levels dynamically.",
    designConcept: "Water as a light reflector. Sky light reflects off the central basin pool up onto raw concrete ceilings, creating soft undulating water light motifs inside.",
    materials: ["Hand-formed Grey Clay Brick", "Matte Cast Concrete", "Oil-rubbed Cedar", "Black Granite"],
    projectTags: ["Urban Privacy", "Reflecting Pool", "Timber Louvers", "Water Architecture"],
    featured: true,
    coverImage: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop",
    galleryImages: [
      {
        url: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop",
        caption: "The central reflecting basin at twilight reflecting timber louvers and interior warm lights.",
        aspectRatio: "wide"
      },
      {
        url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop",
        caption: "Dining pavilion flanked by dual garden courtyards.",
        aspectRatio: "tall"
      }
    ],
    relatedProjects: ["casa-lume", "north-room", "sora-residence"],
    relatedJournal: ["designing-around-the-courtyard", "what-makes-a-room-feel-calm"],
    servicesProvided: ["Architecture", "Interior Architecture"],
    clientScope: "Architectural design, courtyard landscape strategy, and lighting specification."
  },
  {
    slug: "north-room",
    title: "North Room",
    category: "Objects / Interior",
    year: "2024",
    location: "Old Quarter",
    status: "Completed Concept",
    area: "210 m² / 2,260 sq ft",
    type: "Apartment Renovation",
    description: "Refining a 19th-century brick storehouse into an understated residential loft of wood and warm limestone.",
    longDescription: "North Room honors historic masonry while inserting a light, modular timber core. The design removes non-structural partitions to reveal 4-meter tall vaulted ceilings and soft north-facing light.",
    challenge: "Balancing heritage preservation regulations with modern thermal insulation requirements and acoustic separation.",
    approach: "We inserted an autonomous oak storage box that houses bath, laundry, and kitchen equipment, keeping historical brick perimeter walls free and untouched.",
    designConcept: "The furniture-scale spatial box. A singular crafted element organizes circulation without dividing light.",
    materials: ["Exposed Historic Brick", "Smoked European Oak", "Warm Limestone Slab", "Brushed Brass"],
    projectTags: ["Adaptive Reuse", "Loft", "Heritage", "Oak Joinery"],
    featured: false,
    coverImage: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1974&auto=format&fit=crop",
    galleryImages: [
      {
        url: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1974&auto=format&fit=crop",
        caption: "Main vaulted living studio showing exposed historic brick work and custom oak cabinetry.",
        aspectRatio: "wide"
      },
      {
        url: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?q=80&w=2070&auto=format&fit=crop",
        caption: "Detail of brushed brass shadow gap junction between oak wall and limestone floor.",
        aspectRatio: "square"
      }
    ],
    relatedProjects: ["the-quiet-table", "atelier-no-4", "clay-house"],
    relatedJournal: ["the-beauty-of-imperfect-stone", "objects-space-and-everyday-life"],
    servicesProvided: ["Interior Architecture", "Interior Design"],
    clientScope: "Full interior remodelling, millwork design, and custom lighting."
  },
  {
    slug: "atelier-no-4",
    title: "Atelier No. 4",
    category: "Workplace",
    year: "2025",
    location: "Central City",
    status: "Completed Concept",
    area: "650 m² / 7,000 sq ft",
    type: "Creative Studio Headquarters",
    description: "A sanctuary workplace for a design agency featuring tactile acoustic drapery, oak workstations, and shadow gardens.",
    longDescription: "Atelier No. 4 reimagines office culture as a calm studio laboratory. High-density open seating is discarded in favor of generous shared tables, private reading nooks, and acoustic wool curtains.",
    challenge: "Fostering collaboration while ensuring distraction-free deep concentration in a open-plan urban concrete floorplate.",
    approach: "Using linen acoustic partitions and micro-architectural alcoves to create intuitive zones without visual clutter.",
    designConcept: "The studio as gallery. Flexible display walls and tactile sample tables encourage physical material exploration.",
    materials: ["Acoustic Belgian Linen", "Fumed Ash Wood", "Raw Pigmented Concrete", "Anodized Aluminum"],
    projectTags: ["Workplace", "Acoustics", "Ash Wood", "Studio Culture"],
    featured: true,
    coverImage: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop",
    galleryImages: [
      {
        url: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop",
        caption: "Central reading gallery and communal library table under diffuse indirect lighting.",
        aspectRatio: "wide"
      },
      {
        url: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2070&auto=format&fit=crop",
        caption: "Focus booth with integrated acoustic linen drapery.",
        aspectRatio: "tall"
      }
    ],
    relatedProjects: ["frame-office", "the-quiet-table", "north-room"],
    relatedJournal: ["when-less-becomes-more", "why-materials-matter"],
    servicesProvided: ["Workplace Design", "Interior Architecture"],
    clientScope: "Space planning, custom furniture design, and workplace acoustic strategy."
  },
  {
    slug: "the-quiet-table",
    title: "The Quiet Table",
    category: "Hospitality",
    year: "2024",
    location: "Old Quarter",
    status: "Completed Concept",
    area: "310 m² / 3,330 sq ft",
    type: "Intimate Dining Room",
    description: "A 24-seat dining experience framed by clay plaster walls, low ambient lighting, and bespoke cedar tables.",
    longDescription: "The Quiet Table is designed as an antidote to noisy urban dining. The space embraces dark, warm hues, hand-troweled clay finishes, and focused spot lighting over each table to create personal spheres of intimacy.",
    challenge: "Creating optimal acoustic dampening in a high-turnover culinary space without using industrial ceiling acoustic panels.",
    approach: "We applied porous terracotta plaster to walls and ceilings and integrated sound-absorbent wool sub-layers beneath all bench seating.",
    designConcept: "Chiaroscuro lighting. Pools of warm light illuminate only the table surface, leaving surrounding architecture in soft twilight.",
    materials: ["Terracotta Clay Plaster", "Burnished Chestnut Wood", "Dark Basalt Stone", "Woven Wool Felt"],
    projectTags: ["Hospitality", "Lighting Design", "Clay Finish", "Acoustics"],
    featured: true,
    coverImage: "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?q=80&w=2070&auto=format&fit=crop",
    galleryImages: [
      {
        url: "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?q=80&w=2070&auto=format&fit=crop",
        caption: "Main dining pavilion featuring custom chestnut tables and focused spot lighting.",
        aspectRatio: "wide"
      },
      {
        url: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop",
        caption: "Private diningalcove framed by handcrafted terracotta plaster wall textures.",
        aspectRatio: "tall"
      }
    ],
    relatedProjects: ["kado-retreat", "north-room", "atelier-no-4"],
    relatedJournal: ["what-makes-a-room-feel-calm", "objects-space-and-everyday-life"],
    servicesProvided: ["Hospitality Design", "Interior Design", "Spatial Strategy"],
    clientScope: "Concept creation, dining layout, bespoke furniture production."
  },
  {
    slug: "sora-residence",
    title: "Sora Residence",
    category: "Residential",
    year: "2025",
    location: "Valley Ridge",
    status: "Concept",
    area: "610 m² / 6,560 sq ft",
    type: "Hillside Villa",
    description: "A series of floating concrete platforms cantilevered over a misty pine valley.",
    longDescription: "Sora Residence anchors itself to a rocky granite ridge. Its floating floor slabs project out into open air, giving living rooms the feeling of hovering inside cloud and pine forest.",
    challenge: "Engineering heavy structural concrete cantilevers on steep hillside rock formations while maintaining minimal visual bulk.",
    approach: "A central vertical concrete core anchors post-tensioned floor slabs that taper down to knife-edge slab profiles at the perimeter.",
    designConcept: "Framing the horizon. Floor-to-ceiling slender glass panels retract fully into recessed pocket walls during summer months.",
    materials: ["Board-formed White Concrete", "Polished Terrazzo", "Anodized Bronze Frame", "Walnut Panel"],
    projectTags: ["Cantilever", "Concrete", "Valley View", "Floor-to-Ceiling Glass"],
    featured: false,
    coverImage: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=2070&auto=format&fit=crop",
    galleryImages: [
      {
        url: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=2070&auto=format&fit=crop",
        caption: "Cantilevered living platform projecting over the foggy valley floor.",
        aspectRatio: "wide"
      },
      {
        url: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2070&auto=format&fit=crop",
        caption: "Polished terrazzo hallway with continuous ceiling skylight slot.",
        aspectRatio: "tall"
      }
    ],
    relatedProjects: ["casa-lume", "still-house", "monument-house"],
    relatedJournal: ["a-room-begins-with-light", "the-quiet-geometry-of-a-home"],
    servicesProvided: ["Architecture", "Interior Architecture"],
    clientScope: "Structural concept design and interior spatial layout."
  },
  {
    slug: "clay-house",
    title: "Clay House",
    category: "Objects / Interior",
    year: "2024",
    location: "South Coast",
    status: "Completed Concept",
    area: "290 m² / 3,120 sq ft",
    type: "Coastal Pavilion",
    description: "Warm tactile earth tones, terracotta flooring, and rounded interior lime geometry near the sea.",
    longDescription: "Clay House explores organic spatial transitions. Curved lime plaster walls guide movement through the home without sharp corners, reflecting gentle daylight around every turn.",
    challenge: "Eliminating harsh interior shadows in a bright, high-ultraviolet coastal climate.",
    approach: "Softly curved ceiling coves and matte earth pigments absorb harsh sun glares, turning bright light into a warm glow.",
    designConcept: "The sculptured interior. Wall niches, bench seating, and shelving are carved directly into plaster volumes.",
    materials: ["Raw Terracotta Tile", "Earthy Lime Render", "Bleached Teak", "Natural Linen"],
    projectTags: ["Terracotta", "Sculptural", "Curved Walls", "Earth Palette"],
    featured: false,
    coverImage: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2070&auto=format&fit=crop",
    galleryImages: [
      {
        url: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2070&auto=format&fit=crop",
        caption: "Living sanctuary featuring integrated plaster bench seating and terracotta tile flooring.",
        aspectRatio: "wide"
      },
      {
        url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop",
        caption: "Open air shower courtyard carved into terracotta brickwork.",
        aspectRatio: "tall"
      }
    ],
    relatedProjects: ["casa-lume", "still-house", "kado-retreat"],
    relatedJournal: ["why-materials-matter", "the-beauty-of-imperfect-stone"],
    servicesProvided: ["Architecture", "Interior Design"],
    clientScope: "Architectural concept and custom interior joinery."
  },
  {
    slug: "monument-house",
    title: "Monument House",
    category: "Residential",
    year: "2025",
    location: "Northern Plateau",
    status: "Ongoing Concept",
    area: "750 m² / 8,070 sq ft",
    type: "Monolithic Residence",
    description: "Thick stone masonry walls and narrow light slits create an enduring fortress of quiet beauty.",
    longDescription: "Monument House rises like an ancient outcrop on the high desert plateau. Built with thick granite blocks sourced within 10 miles of the site, the home offers shelter against extreme seasonal temperature shifts.",
    challenge: "Constructing a massive stone envelope that meets high energy-efficiency metrics and modern low-carbon standards.",
    approach: "Dual-leaf stone walls separated by high-performance insulation, paired with deep south-facing thermal mass floors.",
    designConcept: "Light slits as artwork. Narrow, high-level light slits cast shifting sunbeams across raw stone slabs.",
    materials: ["Local Quarried Granite", "Brushed Bronze Hardware", "Smoked Larch Wood", "Poured Concrete"],
    projectTags: ["Monolithic", "Granite", "Desert Architecture", "Thermal Mass"],
    featured: false,
    coverImage: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop",
    galleryImages: [
      {
        url: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop",
        caption: "Monolithic stone entry portal framed by high granite walls and shadow gaps.",
        aspectRatio: "wide"
      },
      {
        url: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?q=80&w=2070&auto=format&fit=crop",
        caption: "Internal courtyard with solitary stone fountain.",
        aspectRatio: "tall"
      }
    ],
    relatedProjects: ["still-house", "sora-residence", "fold-house"],
    relatedJournal: ["the-quiet-geometry-of-a-home", "the-beauty-of-imperfect-stone"],
    servicesProvided: ["Architecture", "Spatial Strategy"],
    clientScope: "Masterplanning and architectural massing design."
  },
  {
    slug: "fold-house",
    title: "Fold House",
    category: "Residential",
    year: "2024",
    location: "Forest Edge",
    status: "Completed Concept",
    area: "340 m² / 3,660 sq ft",
    type: "Timber Pavilion",
    description: "A folded roof structure that mimics the canopy slope of surrounding ancient beech trees.",
    longDescription: "Fold House uses geometric roof folds to create varying interior ceiling heights—soaring high in living areas and dropping low over intimate sleeping alcoves.",
    challenge: "Designing a complex multi-pitched timber roof that handles heavy winter snowfall without unsightly structural tie-rods.",
    approach: "Glulam timber portal frames joined with hidden steel connectors, creating an unbroken internal wooden canopy.",
    designConcept: "Topography of ceiling. The roof plane becomes the main interior design driver.",
    materials: ["Cross-Laminated Beech", "Zinc Shingles", "Burnished Iron", "Linen Wall Coverings"],
    projectTags: ["Glulam Roof", "Forest", "Timber Architecture", "Dynamic Ceiling"],
    featured: false,
    coverImage: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?q=80&w=2070&auto=format&fit=crop",
    galleryImages: [
      {
        url: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?q=80&w=2070&auto=format&fit=crop",
        caption: "Living hall with soaring folded timber ceiling structure.",
        aspectRatio: "wide"
      }
    ],
    relatedProjects: ["still-house", "monument-house", "sora-residence"],
    relatedJournal: ["the-quiet-geometry-of-a-home", "when-less-becomes-more"],
    servicesProvided: ["Architecture", "Interior Architecture"],
    clientScope: "Timber engineering concept and interior finishing."
  },
  {
    slug: "kado-retreat",
    title: "Kado Retreat",
    category: "Hospitality",
    year: "2025",
    location: "Coastal Cliffs",
    status: "Concept",
    area: "1,200 m² / 12,900 sq ft",
    type: "Boutique Wellness Lodge",
    description: "Eight private cliffside pavilions centered on thermal mineral baths and meditative gardens.",
    longDescription: "Kado Retreat is designed for complete mental restoration. Isolated pavilions are linked by sunken timber walkways, ensuring guests move through open air between bathing, dining, and sleeping spaces.",
    challenge: "Structuring high-moisture thermal bath houses on cliff edges while protecting fragile coastal flora.",
    approach: "Elevated timber walkways and micropile foundations anchor structures with minimal site excavation.",
    designConcept: "Sensory ritual. Transition spaces utilize changing floor materials—from smooth stone to cedar slats—to heighten foot feel.",
    materials: ["Hinoki Cypress", "Black Slate Stone", "Washi Paper Screens", "Raw Copper"],
    projectTags: ["Wellness", "Boutique Hotel", "Cliffside", "Thermal Baths"],
    featured: true,
    coverImage: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=2070&auto=format&fit=crop",
    galleryImages: [
      {
        url: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=2070&auto=format&fit=crop",
        caption: "Thermal mineral bath hall overlooking the ocean cliff edge.",
        aspectRatio: "wide"
      },
      {
        url: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2070&auto=format&fit=crop",
        caption: "Private guest pavilion room featuring Hinoki wood bath tub.",
        aspectRatio: "tall"
      }
    ],
    relatedProjects: ["the-quiet-table", "casa-lume", "mizu-courtyard"],
    relatedJournal: ["what-makes-a-room-feel-calm", "a-room-begins-with-light"],
    servicesProvided: ["Hospitality Design", "Architecture", "Spatial Strategy"],
    clientScope: "Masterplan, architectural design, and interior wellness concept."
  },
  {
    slug: "frame-office",
    title: "Frame Office",
    category: "Workplace",
    year: "2024",
    location: "Financial District",
    status: "Completed Concept",
    area: "880 m² / 9,470 sq ft",
    type: "Executive Boardroom & Suite",
    description: "An understated financial family office wrapped in dark oak panelling and soundproof leather alcoves.",
    longDescription: "Frame Office replaces sterile corporate glass towers with a warm, residential-feeling workspace. High-level executive suites feel like private reading libraries.",
    challenge: "Delivering top-tier acoustic security (STC 60+) without creating heavy, oppressive walls.",
    approach: "Triple-glazed acoustic glass hidden behind dark fumed oak timber frames with concealed wool insulation cavities.",
    designConcept: "The warm sanctuary in the tower. Soft wool carpets and warm perimeter LED coves quiet high-stress decision making.",
    materials: ["Fumed Dark Oak", "Saddled Leather", "Calacatta Marble", "Acoustic Glass"],
    projectTags: ["Executive Suite", "Dark Oak", "High STC", "Family Office"],
    featured: false,
    coverImage: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2070&auto=format&fit=crop",
    galleryImages: [
      {
        url: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2070&auto=format&fit=crop",
        caption: "Executive boardroom suite with custom fumed dark oak table and leather seating.",
        aspectRatio: "wide"
      }
    ],
    relatedProjects: ["atelier-no-4", "the-quiet-table", "north-room"],
    relatedJournal: ["when-less-becomes-more", "why-materials-matter"],
    servicesProvided: ["Workplace Design", "Interior Design"],
    clientScope: "Full interior design, acoustic planning, and custom joinery."
  }
];
