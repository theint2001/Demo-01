import { JournalArticle } from '@/types/journal';

export const JOURNAL_ARTICLES: JournalArticle[] = [
  {
    slug: "a-room-begins-with-light",
    title: "A Room Begins With Light",
    category: "Daylight Architecture",
    date: "October 14, 2025",
    readingTime: "5 min read",
    excerpt: "Before furniture, color, or wall finish, architecture is defined by how daylight enters a volume and settles across surface textures.",
    heroImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop",
    heroImageCaption: "Morning light washing across hand-troweled lime plaster at Casa Lume.",
    content: {
      intro: "In modern living, we often treat lighting as a electrical fixture problem solved at the end of interior design. But true architectural calm begins far earlier—in how a building captures sun trajectories, softens harsh glares, and celebrates the arrival of shadow.",
      sections: [
        {
          heading: "The Quality of Diffuse Rays",
          body: "Direct sunlight can be overwhelming in residential spaces. By utilizing deep window reveals, translucent drapery, or internal light wells, we transform intense external sun rays into a ambient glow that fills rooms evenly.",
          quote: "Light does not merely illuminate a room; it sculpts time inside your living home."
        },
        {
          heading: "Shadow as a Design Element",
          body: "Without shadow, light loses its depth. The gentle gradation from high brightness to quiet shadow gives walls physical weight and material presence. In our projects, we purposefully design shadow alcoves where the eyes can rest."
        }
      ]
    },
    relatedProjects: ["casa-lume", "sora-residence"],
    relatedArticles: ["the-quiet-geometry-of-a-home", "what-makes-a-room-feel-calm"]
  },
  {
    slug: "the-quiet-geometry-of-a-home",
    title: "The Quiet Geometry of a Home",
    category: "Spatial Composition",
    date: "August 22, 2025",
    readingTime: "6 min read",
    excerpt: "Harmonious spatial proportion creates a subtle sense of ease before decorative items ever enter a room.",
    heroImage: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?q=80&w=2070&auto=format&fit=crop",
    heroImageCaption: "Horizontal elevation alignments at Still House.",
    content: {
      intro: "When you enter a room that feels intuitively right, it is rarely because of expensive decoration. It is because the proportions—the ratio of height to width, the alignment of doorframes with window reveals, the sightlines across rooms—create subtle visual equilibrium.",
      sections: [
        {
          heading: "Controlling Sightlines",
          body: "A well-designed home reveals itself in layers. Rather than exposing the entire floorplate upon entry, framed views encourage gradual discovery. Long vistas through multiple doorways visually extend smaller footprints.",
          quote: "Proportion is the silent rhythm of architecture; when tuned correctly, you feel it before you see it."
        },
        {
          heading: "The Datum Line",
          body: "Using a consistent architectural datum line—whether a low timber wall panelling height or window transom level—anchors human scale across large double-height spaces."
        }
      ]
    },
    relatedProjects: ["still-house", "fold-house"],
    relatedArticles: ["a-room-begins-with-light", "when-less-becomes-more"]
  },
  {
    slug: "why-materials-matter",
    title: "Why Materials Matter",
    category: "Materiality",
    date: "June 10, 2025",
    readingTime: "4 min read",
    excerpt: "Honest materials—untreated oak, honed stone, raw clay—age gracefully, recording the passage of daily life.",
    heroImage: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop",
    heroImageCaption: "Honed limestone slab paired with untreated white oak joinery.",
    content: {
      intro: "Synthetic, gloss-lacquered surfaces look perfect on day one but degrade awkwardly over time. Natural materials possess an innate honesty: they accept fingerprints, sunshine, and air with graceful patina.",
      sections: [
        {
          heading: "Tactile Intelligence",
          body: "Our hands and feet touch architecture constantly. Walking barefoot across brushed limestone or opening a heavy cast-bronze door lever provides an immediate, subconscious connection to physical reality.",
          quote: "A good material does not hide its age; it wears its history with dignity."
        }
      ]
    },
    relatedProjects: ["clay-house", "north-room"],
    relatedArticles: ["the-beauty-of-imperfect-stone", "objects-space-and-everyday-life"]
  },
  {
    slug: "designing-around-the-courtyard",
    title: "Designing Around the Courtyard",
    category: "Landscape & Interior",
    date: "April 18, 2025",
    readingTime: "7 min read",
    excerpt: "How bringing a patch of sky and nature into the heart of a building transforms urban living.",
    heroImage: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop",
    heroImageCaption: "The central water patio at Mizu Courtyard.",
    content: {
      intro: "Historically, the central courtyard was the sanctuary of the home. In modern architecture, reintroducing an internal open-air void offers cross-ventilation, dual-aspect light, and a personal slice of nature within high-density settings.",
      sections: [
        {
          heading: "Micro-Climates and Airflow",
          body: "Courtyards create natural thermal chimneys. Warm interior air escapes upward through open roof apertures, pulling cool air across courtyard gardens and through ground-floor living areas without mechanical fan noise.",
          quote: "An interior garden turns weather—rain, wind, drift of leaves—into a living theater inside the house."
        }
      ]
    },
    relatedProjects: ["mizu-courtyard", "casa-lume"],
    relatedArticles: ["a-room-begins-with-light", "what-makes-a-room-feel-calm"]
  },
  {
    slug: "the-beauty-of-imperfect-stone",
    title: "The Beauty of Imperfect Stone",
    category: "Materiality",
    date: "February 04, 2025",
    readingTime: "5 min read",
    excerpt: "Celebrating natural veining, split faces, and quarry marks in contemporary stone masonry.",
    heroImage: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?q=80&w=2070&auto=format&fit=crop",
    heroImageCaption: "Textured split-face stone wall at Monument House.",
    content: {
      intro: "Commercial stone manufacturing often discards slabs with irregular fossil inclusions or dramatic color variation in favor of uniform pattern copy. At Forma Atelier, we seek out stone blocks with unique geological character.",
      sections: [
        {
          heading: "Geological Storytelling",
          body: "When stone features ancient marine shell deposits or iron veining, it brings millions of years of natural formation into a dining room or bathroom.",
          quote: "Imperfection in stone is not a defect; it is proof of origin."
        }
      ]
    },
    relatedProjects: ["monument-house", "clay-house"],
    relatedArticles: ["why-materials-matter", "objects-space-and-everyday-life"]
  },
  {
    slug: "when-less-becomes-more",
    title: "When Less Becomes More",
    category: "Design Philosophy",
    date: "December 12, 2024",
    readingTime: "4 min read",
    excerpt: "Restraint is not about deprivation; it is about liberating space so daily rituals take center stage.",
    heroImage: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop",
    heroImageCaption: "Quiet spatial clarity at Atelier No. 4.",
    content: {
      intro: "Minimalism is frequently misunderstood as coldness or sterility. True spatial restraint simply means removing visual clutter so that light, air, human movement, and conversation become the primary elements of the room.",
      sections: [
        {
          heading: "Concealed Function",
          body: "By integrating kitchen appliances, storage, and HVAC diffusers into seamless flush wall joinery, living spaces maintain an uninterrupted architectural canvas.",
          quote: "When a room is unburdened by excess visual noise, your thoughts have room to settle."
        }
      ]
    },
    relatedProjects: ["atelier-no-4", "frame-office"],
    relatedArticles: ["the-quiet-geometry-of-a-home", "what-makes-a-room-feel-calm"]
  },
  {
    slug: "what-makes-a-room-feel-calm",
    title: "What Makes a Room Feel Calm?",
    category: "Living Experience",
    date: "November 05, 2024",
    readingTime: "6 min read",
    excerpt: "Analyzing acoustic absorption, low-glare lighting, and natural textures in creating restorative interiors.",
    heroImage: "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?q=80&w=2070&auto=format&fit=crop",
    heroImageCaption: "Low-glare lighting and terracotta plaster at The Quiet Table.",
    content: {
      intro: "Spatial calm is a multi-sensory condition. Beyond visual aesthetics, a room must sound peaceful, smell natural, and feel thermally comfortable without cold drafts.",
      sections: [
        {
          heading: "Acoustic Comfort",
          body: "Hard surfaces reflect sound waves, creating echoes that elevate subconscious stress. Soft textiles, textured clay wall finishes, and timber slatted ceilings trap echo, producing soft acoustic intimacy.",
          quote: "Quiet is not merely the absence of noise; it is an active physical quality of space."
        }
      ]
    },
    relatedProjects: ["the-quiet-table", "kado-retreat"],
    relatedArticles: ["a-room-begins-with-light", "designing-around-the-courtyard"]
  },
  {
    slug: "objects-space-and-everyday-life",
    title: "Objects, Space and Everyday Life",
    category: "Interior Curation",
    date: "September 19, 2024",
    readingTime: "5 min read",
    excerpt: "Curating handcrafted ceramics, vintage chairs, and utilitarian tools within custom architectural niches.",
    heroImage: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1974&auto=format&fit=crop",
    heroImageCaption: "Curated handcrafted ceramic object in custom oak wall niche.",
    content: {
      intro: "Architecture provides the framing container, but the objects we collect and use daily lend a home its personal spirit. We design custom ledges and recessed niches specifically tailored to honor personal art and functional tools.",
      sections: [
        {
          heading: "The Art of the Display Niche",
          body: "Rather than adding freestanding shelves after construction, building integrated wall alcoves during architectural planning embeds display naturally into the home’s structure.",
          quote: "An object placed in thoughtful light ceases to be clutter and becomes a contemplative anchor."
        }
      ]
    },
    relatedProjects: ["north-room", "the-quiet-table"],
    relatedArticles: ["why-materials-matter", "the-beauty-of-imperfect-stone"]
  }
];
