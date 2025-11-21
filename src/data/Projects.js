// src/data/Projects.js
export const PROJECT_CATEGORIES = [
  "Web Development",
  "Brand/Client",
  "Graphic Design",
];

export const projects = [
  // ===================== WEB DEVELOPMENT =====================
  {
    id: "henrietta-finds-a-nest",
    title: "Henrietta Finds A Nest",
    category: "Web Development",
    role: "Front-end development",
    tools: ["HTML", "CSS", "JavaScript", "WordPress"],
    year: "",
    summary:
      "Front-end build for the Henrietta Finds a Nest film site, with a responsive layout highlighting the film’s synopsis, trailer, festival selections, and calls-to-action.",
    link: "https://henriettafilm.com/",
    thumbnail: "/images/mfa/Henrietta_Finds_A_Nest_Thumbnail.webp",
    thumbnailAlt: "Henrietta Finds A Nest website design thumbnail",
    images: [
      {
        src: "/images/mfa/Henrietta_Finds_A_Nest.webp",
        alt: "Henrietta Finds A Nest website design",
      },
    ],
    highlights: [
      "Structured content so visitors can quickly access synopsis, trailer, festival selections, and merch.",
      "Focused on accessible layout and typography across devices.",
      "Integrated with WordPress so the campaign can update content easily.",
    ],
  },

  {
    id: "peoples-fund",
    title: "The People’s Fund",
    category: "Web Development",
    role: "Front-end development",
    tools: ["HTML", "CSS", "JavaScript", "WordPress"],
    year: "",
    summary:
      "Front-end build for Mercy For Animals’ People’s Fund site, highlighting its mission of advancing equity in the animal-protection movement.",
    link: "https://mfapeoplesfund.com/",
    thumbnail: "/images/mfa/Peoples_Fund_Thumbnail.webp",
    thumbnailAlt: "The People's Fund website design thumbnail",
    images: [
      {
        src: "/images/mfa/Peoples_Fund_Homepage.webp",
        alt: "The People's Fund homepage",
      },
      {
        src: "/images/mfa/Peoples_Fund_About.webp",
        alt: "The People's Fund about page",
      },
    ],
    highlights: [
      "Used motion to bring key impact metrics into view in an engaging way.",
      "Worked within the brand’s visual language while prioritizing performance and accessibility.",
      "Ensured the layout adapts cleanly from mobile to large screens.",
    ],
  },

  {
    id: "cca-joyrx",
    title: "Children’s Cancer Association – JoyRX",
    category: "Web Development",
    role: "Website development",
    tools: ["WordPress", "HTML", "CSS", "PHP", "JavaScript"],
    year: "",
    summary:
      "Modular WordPress build for JoyRX, allowing the team to compose pages from reusable content blocks.",
    thumbnail: "/images/cca/Get-Involved.webp",
    thumbnailAlt: "JoyRX Get Involved page design thumbnail",
    images: [
      {
        src: "/images/cca/Get-Involved.webp",
        alt: "JoyRX Get Involved page",
      },
      {
        src: "/images/cca/Programs-MyMusicRX.webp",
        alt: "JoyRX Programs page with MyMusicRX section",
      },
    ],
    highlights: [
      "Built a modular component system so staff can customize both layout and content per page.",
      "Collaborated closely with the JoyRX team to capture tone and mission in the front-end.",
      "Focused on maintainability so the site can evolve with the organization.",
    ],
  },

  {
    id: "keep-oregon-green",
    title: "Keep Oregon Green",
    category: "Web Development",
    role: "Website development",
    tools: ["WordPress", "HTML", "CSS", "PHP", "JavaScript"],
    year: "",
    summary:
      "WordPress site build for Keep Oregon Green, including full development and select design contributions.",
    thumbnail: "/images/kog/Home-kog.webp",
    thumbnailAlt: "Keep Oregon Green website design thumbnail",
    images: [
      {
        src: "/images/kog/Home-kog.webp",
        alt: "Keep Oregon Green homepage",
      },
      {
        src: "/images/kog/Contribute-kog.webp",
        alt: "Keep Oregon Green contribute page",
      },
      {
        src: "/images/kog/On-The-Job-kog.webp",
        alt: "Keep Oregon Green on the job page",
      },
    ],
    highlights: [
      "Handled all front-end development for the site.",
      "Contributed design work on key templates, including the donation page.",
      "Delivered a CMS-driven site the organization can manage internally.",
    ],
  },

  {
    id: "ofri",
    title: "Oregon Forest Resources Institute",
    category: "Web Development",
    role: "Front-end development & project support",
    tools: ["Drupal 8", "Twig", "HTML", "CSS"],
    year: "",
    summary:
      "Front-end development and project coordination on a full-scale redesign of oregonforests.org.",
    thumbnail: "/images/ofri/OFRI_Homepage.webp",
    thumbnailAlt: "OFRI website design thumbnail",
    images: [
      {
        src: "/images/ofri/OFRI_Homepage.webp",
        alt: "OFRI homepage design",
      },
      {
        src: "/images/ofri/Video_Library_Expanded.webp",
        alt: "OFRI video library page",
      },
      {
        src: "/images/ofri/TreeGuide.webp",
        alt: "OFRI tree guide page",
      },
    ],
    highlights: [
      "Implemented Drupal 8 and Twig templates for a large, content-heavy site.",
      "Collaborated on layout and interaction design across multiple page types.",
      "Gained deep experience working within a modern Drupal workflow.",
    ],
  },

  {
    id: "bobs-blog",
    title: "Bob’s Red Mill Blog",
    category: "Web Development",
    role: "Website design & development",
    tools: ["WordPress", "HTML", "CSS", "JavaScript"],
    year: "2011–2016",
    summary:
      "First-ever blog for Bob’s Red Mill, built on WordPress with a fully custom, brand-aligned theme.",
    thumbnail: "/images/bobs_red_mill/bobs-blog.webp",
    thumbnailAlt: "Bob's Red Mill blog design thumbnail",
    images: [
      {
        src: "/images/bobs_red_mill/bobs-blog.webp",
        alt: "Bob's Red Mill blog design",
      },
    ],
    highlights: [
      "Created a ground-up WordPress theme matching the brand’s rustic, old-time aesthetic.",
      "Enabled the social media team to publish and manage content independently.",
      "Supported both desktop and mobile experiences during the early days of responsive design.",
    ],
  },

  {
    id: "bobs-red-mill-site",
    title: "Bob’s Red Mill Website",
    category: "Web Development",
    role: "Website design & development",
    tools: ["HTML", "CSS", "JavaScript"],
    year: "",
    summary:
      "Website design and development work for Bob’s Red Mill, extending the core brand into a cohesive site experience.",
    thumbnail: "/images/bobs_red_mill/bobs-red-mill.webp",
    thumbnailAlt: "Bob's Red Mill website design thumbnail",
    images: [
      {
        src: "/images/bobs_red_mill/bobs-red-mill.webp",
        alt: "Bob's Red Mill website design",
      },
    ],
    highlights: [
      "Designed and built key pages emphasizing product and brand personality.",
      "Worked within established brand assets while introducing new layouts.",
      "Prioritized clarity and usability for a broad audience of shoppers and fans.",
    ],
  },

  {
    id: "grains-of-discovery",
    title: "Grains of Discovery",
    category: "Web Development",
    role: "Website design & development",
    tools: ["HTML", "CSS", "JavaScript", "jQuery"],
    year: "",
    summary:
      "Microsite design and build for Bob’s Red Mill’s Grains of Discovery campaign.",
    thumbnail: "/images/bobs_red_mill/grains-of-discovery.webp",
    thumbnailAlt: "Grains of Discovery website design thumbnail",
    images: [
      {
        src: "/images/bobs_red_mill/grains-of-discovery.webp",
        alt: "Grains of Discovery website design",
      },
    ],
    highlights: [
      "Designed a campaign-specific experience within existing brand constraints.",
      "Used JavaScript and jQuery to add subtle interactivity.",
      "Balanced visual richness with performance and simplicity.",
    ],
  },

  // ===================== BRAND / CLIENT =====================
  {
    id: "rogue-design-composition",
    title: "Rogue Ales Design Composition",
    category: "Brand/Client",
    role: "Website design comps",
    tools: ["Adobe Photoshop", "Adobe Illustrator"],
    year: "",
    summary:
      "Proposed redesign concepts for Rogue Ales & Spirits, centered around their mission statement and brand story.",
    thumbnail: "/images/other/rogue-landing-page.webp",
    thumbnailAlt: "Rogue website design composition thumbnail",
    images: [
      {
        src: "/images/other/rogue-landing-page.webp",
        alt: "Rogue homepage design composition",
      },
      {
        src: "/images/other/rogue-beer-page.webp",
        alt: "Rogue beer page design composition",
      },
    ],
    highlights: [
      "Explored layouts that place the Rogue mission front and center on the homepage.",
      "Reflected on how to refine copy load and hierarchy in future iterations.",
    ],
  },

  {
    id: "bobs-marquees",
    title: "Bob’s Red Mill Marquees",
    category: "Brand/Client",
    role: "Graphic design",
    tools: ["Adobe Photoshop", "Adobe Illustrator"],
    year: "",
    summary:
      "A series of homepage marquee designs for Bob’s Red Mill, featuring multiple product campaigns.",
    thumbnail: "/images/bobs_red_mill/grains-of-discovery-marquee.webp",
    thumbnailAlt: "Grains of Discovery marquee design thumbnail",
    images: [
      {
        src: "/images/bobs_red_mill/grains-of-discovery-marquee.webp",
        alt: "Grains of Discovery website marquee design",
      },
      {
        src: "/images/bobs_red_mill/pie-crust-marquee.webp",
        alt: "Gluten Free Pie Crust Mix website marquee design",
      },
      {
        src: "/images/bobs_red_mill/oatmeal-marquee.webp",
        alt: "World's Best Oatmeal website marquee design",
      },
      {
        src: "/images/bobs_red_mill/coconut-flour-marquee.webp",
        alt: "Coconut Flour website marquee design",
      },
      {
        src: "/images/bobs_red_mill/gluten-free-muesli-marquee.webp",
        alt: "Gluten Free Muesli website marquee design",
      },
      {
        src: "/images/bobs_red_mill/holiday-marquee.webp",
        alt: "Holiday website marquee design",
      },
    ],
    highlights: [
      "Created a collection of marquees for multiple campaigns, from grains to seasonal promotions.",
      "Worked within existing brand illustration and typography while pushing layout variety.",
      "Delivered production-ready artwork for the site’s homepage hero areas.",
    ],
  },

  {
    id: "lamarzocco-home",
    title: "LaMarzocco Home Website",
    category: "Brand/Client",
    role: "Website development",
    tools: ["WordPress", "HTML", "CSS", "PHP", "JavaScript"],
    year: "",
    summary:
      "",
    thumbnail: "/images/lamarzocco/Home.webp",
    thumbnailAlt: "LaMarzocco Home website design thumbnail",
    images: [
      {
        src: "/images/lamarzocco/Home.webp",
        alt: "LaMarzocco Home website homepage",
      },
      {
        src: "/images/lamarzocco/Office-Coffee.webp",
        alt: "LaMarzocco office coffee page",
      },
    ],
    highlights: [
      "Implemented the front-end for key pages including the home and office coffee sections.",
      "Balanced premium brand aesthetics with performance and maintainability.",
      "Collaborated with the broader team on structure and layout decisions.",
    ],
  },

  {
    id: "progressive-doors-windows",
    title: "Progressive Doors & Windows Website",
    category: "Brand/Client",
    role: "Website development",
    tools: ["WordPress", "HTML", "CSS", "PHP", "JavaScript"],
    year: "",
    summary:
      "Website build for Progressive Doors & Windows, highlighting products and service offerings.",
    thumbnail: "/images/progressive/Home.webp",
    thumbnailAlt: "Progressive Doors & Windows homepage thumbnail",
    images: [
      {
        src: "/images/progressive/Home.webp",
        alt: "Progressive Doors & Windows homepage",
      },
      {
        src: "/images/progressive/Doors.webp",
        alt: "Progressive Doors & Windows doors page",
      },
    ],
    highlights: [
      "Developed front-end templates for key product and landing pages.",
      "Focused on clear navigation and product exploration.",
      "Delivered a maintainable WordPress implementation for the client.",
    ],
  },

  {
    id: "supercrown-website",
    title: "Supercrown Website",
    category: "Brand/Client",
    role: "Website development",
    tools: ["WordPress", "WooCommerce", "HTML", "CSS", "PHP", "JavaScript"],
    year: "",
    summary:
      "WordPress and WooCommerce build for Supercrown, blending editorial content with ecommerce functionality.",
    thumbnail: "/images/supercrown/Home.webp",
    thumbnailAlt: "Supercrown website design thumbnail",
    images: [
      {
        src: "/images/supercrown/Home.webp",
        alt: "Supercrown homepage",
      },
      {
        src: "/images/supercrown/Journal-Coffee-Entry.webp",
        alt: "Supercrown journal coffee entry page",
      },
    ],
    highlights: [
      "Implemented storefront and journal-style content in a cohesive experience.",
      "Integrated WooCommerce while preserving a strong editorial feel.",
      "Built flexible templates for product stories and journal entries.",
    ],
  },

  // ===================== GRAPHIC DESIGN / POSTERS / ALBUMS =====================
  {
    id: "explosions-in-the-sky",
    title: "Explosions In The Sky at The Granada",
    category: "Graphic Design",
    role: "Poster design",
    tools: ["Adobe Illustrator", "Adobe Photoshop"],
    year: "",
    summary:
      "Poster design for Explosions In The Sky at The Granada, focused on mood and atmosphere.",
    thumbnail: "/images/other/explosions-in-the-sky.webp",
    thumbnailAlt: "Explosions in the Sky flier design thumbnail",
    images: [
      {
        src: "/images/other/explosions-in-the-sky.webp",
        alt: "Explosions In The Sky flier",
      },
    ],
    highlights: [
      "Designed a large-format concert poster.",
      "Used layered illustration and texture to reflect the band’s sound.",
      "Prepared final artwork for print production.",
    ],
  },

  {
    id: "fairbanks-mr-history",
    title: "Fairbanks With Mr. History at Record Bar",
    category: "Graphic Design",
    role: "Poster design",
    tools: ["Adobe Illustrator"],
    year: "",
    summary:
      "Poster design for Fairbanks with Mr. History at Record Bar.",
    thumbnail: "/images/other/fairbanks-mr-history.webp",
    thumbnailAlt: "Fairbanks with Mr. History flier design thumbnail",
    images: [
      {
        src: "/images/other/fairbanks-mr-history.webp",
        alt: "Fairbanks with Mr. History flier",
      },
    ],
    highlights: [
      "Designed an 11x17 inch flier for a live show.",
      "Used illustration to convey the energy of the lineup.",
      "Prepared final art suitable for print and digital promotion.",
    ],
  },

  {
    id: "mr-history-cousin-sleep",
    title: "Mr. History “Cousin Sleep Cousin Death” Album Artwork",
    category: "Graphic Design",
    role: "Album cover illustration",
    tools: ["Adobe Illustrator"],
    year: "",
    summary:
      "Album artwork for Mr. History’s release “Cousin Sleep Cousin Death,” with detailed illustration.",
    thumbnail: "/images/other/mr-history-cousin-sleep-cousin-death.webp",
    thumbnailAlt:
      "Mr History Cousin Sleep Cousin Death album artwork thumbnail",
    images: [
      {
        src: "/images/other/mr-history-cousin-sleep-cousin-death.webp",
        alt: "Mr History Cousin Sleep Cousin Death album artwork",
      },
    ],
    highlights: [
      "Handled full-cover illustration for the album.",
      "Developed a visual language that supports the record’s themes.",
      "Prepared final files for print-ready production.",
    ],
  },

  {
    id: "good-foot-stock",
    title: "Good Foot Stock Fliers",
    category: "Graphic Design",
    role: "Poster design",
    tools: ["Adobe Illustrator"],
    year: "",
    summary:
      "A pair of stock fliers for Good Foot, designed so that the band could use them for multiple events.",
    thumbnail: "/images/other/good-foot-stock-one.webp",
    thumbnailAlt: "Good Foot Stock flier design thumbnail one",
    images: [
      {
        src: "/images/other/good-foot-stock-one.webp",
        alt: "Good Foot Stock flier one",
      },
      {
        src: "/images/other/good-foot-stock-two.webp",
        alt: "Good Foot Stock flier two",
      },
    ],
    highlights: [
      "Designed multiple flier variations within a unified visual system.",
      "Worked at an 11x17 inch scale for print.",
      "Balanced hand-crafted illustration with clear event information.",
    ],
  },

  {
    id: "cobra-skulls-bent-left",
    title: "Cobra Skulls w/ Bent Left Flier",
    category: "Graphic Design",
    role: "Poster design",
    tools: ["Adobe Illustrator", "Adobe Photoshop"],
    year: "",
    summary:
      "Poster design for Cobra Skulls with Bent Left, blending illustration and texture.",
    thumbnail: "/images/other/cobra-skulls-bent-left.webp",
    thumbnailAlt: "Cobra Skulls with Bent Left flier design thumbnail",
    images: [
      {
        src: "/images/other/cobra-skulls-bent-left.webp",
        alt: "Cobra Skulls with Bent Left flier",
      },
    ],
    highlights: [
      "Created an 11x17 inch concert flier.",
      "Combined Illustrator vector art with Photoshop finishing.",
      "Kept event info legible within a strong punk-inspired aesthetic.",
    ],
  },

  {
    id: "dj-red-beard",
    title: "DJ Red Beard Flier",
    category: "Graphic Design",
    role: "Poster design",
    tools: ["Adobe Illustrator"],
    year: "",
    summary:
      "Flier design for DJ Red Beard, with a strong illustrative focal point.",
    thumbnail: "/images/other/dj-red-beard.webp",
    thumbnailAlt: "DJ Red Beard flier design thumbnail",
    images: [
      {
        src: "/images/other/dj-red-beard.webp",
        alt: "DJ Red Beard flier",
      },
    ],
    highlights: [
      "Designed an 11x17 inch flier using vector illustration.",
      "Emphasized the personality of the DJ while keeping event details clear.",
      "Prepared artwork for print output.",
    ],
  },

  {
    id: "radiohead-flier",
    title: "Radiohead Flier",
    category: "Graphic Design",
    role: "Poster design",
    tools: ["Adobe Illustrator", "Adobe Photoshop"],
    year: "",
    summary:
      "Illustrated flier inspired by Radiohead, emphasizing bold composition and typography.",
    thumbnail: "/images/other/radiohead.webp",
    thumbnailAlt: "Radiohead flier design thumbnail",
    images: [
      {
        src: "/images/other/radiohead.webp",
        alt: "Radiohead flier",
      },
    ],
    highlights: [
      "Created an 11x17 inch flier layout.",
      "Explored color, shape, and type to capture the band’s aesthetic.",
      "Prepared artwork for both print and digital sharing.",
    ],
  },

  {
    id: "mr-history-six",
    title: "Mr. History at Riot Room – August 24",
    category: "Graphic Design",
    role: "Poster design",
    tools: ["Adobe Illustrator"],
    year: "",
    summary:
      "Flier for Mr. History at Riot Room, featuring bold illustration and typography.",
    thumbnail: "/images/other/mr-history-six-recolor.webp",
    thumbnailAlt: "Mr History at Riot Room flier design thumbnail",
    images: [
      {
        src: "/images/other/mr-history-six-recolor.webp",
        alt: "Mr History at Riot Room flier",
      },
    ],
    highlights: [
      "Designed an 11x17 inch flier for a specific date and venue.",
      "Used illustration to create a distinct visual identity for the show.",
      "Prepared print-ready artwork.",
    ],
  },

  {
    id: "mr-history-one",
    title: "Mr. History at Crosstown Station",
    category: "Graphic Design",
    role: "Poster design",
    tools: ["Adobe Illustrator"],
    year: "",
    summary:
      "Flier for Mr. History at Crosstown Station, with bold illustration and type.",
    thumbnail: "/images/other/mr-history-one.webp",
    thumbnailAlt: "Mr History Crosstown flier design thumbnail",
    images: [
      {
        src: "/images/other/mr-history-one.webp",
        alt: "Mr History Crosstown flier",
      },
    ],
    highlights: [
      "Created an 11x17 inch poster for the show.",
      "Focused on a strong central illustration to draw attention.",
      "Prepared artwork suitable for street and venue posting.",
    ],
  },

  {
    id: "mr-history-five",
    title: "Mr. History at Davies Uptown",
    category: "Graphic Design",
    role: "Poster design",
    tools: ["Adobe Illustrator"],
    year: "",
    summary:
      "Flier for Mr. History at Davies Uptown, with a bold, illustrative style.",
    thumbnail: "/images/other/mr-history-five.webp",
    thumbnailAlt: "Mr History at Davies Uptown flier design thumbnail",
    images: [
      {
        src: "/images/other/mr-history-five.webp",
        alt: "Mr History at Davies Uptown flier",
      },
    ],
    highlights: [
      "Designed an 11x17 inch flier using vector art.",
      "Kept event information clear and readable at a distance.",
      "Delivered print-ready files for promotion.",
    ],
  },

  {
    id: "mr-history-four",
    title: "Mr. History at The Riot Room",
    category: "Graphic Design",
    role: "Poster design",
    tools: ["Adobe Illustrator"],
    year: "",
    summary:
      "Flier for Mr. History at The Riot Room, with a high-contrast illustration.",
    thumbnail: "/images/other/mr-history-four-recolor.webp",
    thumbnailAlt:
      "Mr. History at the Riot Room flier design thumbnail",
    images: [
      {
        src: "/images/other/mr-history-four-recolor.webp",
        alt: "Mr. History at the Riot Room flier",
      },
    ],
    highlights: [
      "Created a visually striking poster using simplified forms and bold color.",
      "Kept typography legible while integrating with the illustration.",
      "Prepared artwork for print.",
    ],
  },

  {
    id: "mr-history-gene",
    title: "Mr. History “Gene” Album Artwork",
    category: "Graphic Design",
    role: "Album cover illustration",
    tools: ["Adobe Illustrator"],
    year: "",
    summary:
      "Album cover artwork for Mr. History’s release “Gene,” focused on bold illustration.",
    thumbnail: "/images/other/mr-history-gene-final.webp",
    thumbnailAlt: "Mr History Gene album artwork thumbnail",
    images: [
      {
        src: "/images/other/mr-history-gene-final.webp",
        alt: "Mr History Gene album artwork",
      },
    ],
    highlights: [
      "Designed full album cover illustration in Illustrator.",
      "Optimized artwork for print packaging needs.",
      "Created visuals aligned with the band’s sound and identity.",
    ],
  },
];
