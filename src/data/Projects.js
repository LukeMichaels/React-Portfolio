// src/data/Projects.js
export const PROJECT_CATEGORIES = [
  "Web Development",
  //"Brand/Client",
  "Graphic Design",
];

export const projects = [
  // ===================== WEB DEVELOPMENT =====================
  {
    id: "henrietta-finds-a-nest",
    title: "Henrietta Finds A Nest",
    categories: "Web Development",
    role: "Front-end development",
    tools: ["HTML", "CSS", "JavaScript", "WordPress"],
    year: "",
    summary:
      "Front-end build for the Henrietta Finds a Nest film site, with a responsive layout highlighting the film’s synopsis, trailer, festival selections, and calls-to-action.",
    link: "https://henriettafilm.com/",
    thumbnail: "/images/mfa/Mercy_For_Animals_Henrietta_Finds_A_Nest_508.webp",
    thumbnail2x: "/images/mfa/Mercy_For_Animals_Henrietta_Finds_A_Nest_1016.webp",
    thumbnailAlt: "Henrietta Finds A Nest website design thumbnail",
    images: [
      {
        src: "/images/mfa/Mercy_For_Animals_Henrietta_Finds_A_Nest_630.webp",
        src2x: "/images/mfa/Mercy_For_Animals_Henrietta_Finds_A_Nest_1260.webp",
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
    categories: "Web Development",
    role: "Front-end development",
    tools: ["HTML", "CSS", "JavaScript", "WordPress"],
    year: "",
    summary:
      "Front-end build for Mercy For Animals’ People’s Fund site, highlighting its mission of advancing equity in the animal-protection movement.",
    link: "https://mfapeoplesfund.com/",
    thumbnail: "/images/mfa/Mercy_For_Animals_Peoples_Fund_Homepage_508.webp",
    thumbnail2x: "/images/mfa/Mercy_For_Animals_Peoples_Fund_Homepage_1016.webp",
    thumbnailAlt: "The People's Fund website design thumbnail",
    images: [
      {
        src: "/images/mfa/Mercy_For_Animals_Peoples_Fund_Homepage_630.webp",
        src2x: "/images/mfa/Mercy_For_Animals_Peoples_Fund_Homepage_1260.webp",
        alt: "The People's Fund homepage",
      },
      {
        src: "/images/mfa/Mercy_For_Animals_Peoples_Fund_About_630.webp",
        src2x: "/images/mfa/Mercy_For_Animals_Peoples_Fund_About_950.webp",
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
    categories: "Web Development",
    role: "Website development",
    tools: ["WordPress", "HTML", "CSS", "PHP", "JavaScript"],
    year: "",
    summary:
      "Modular WordPress build for JoyRX, allowing the team to compose pages from reusable content blocks.",
    thumbnail: "/images/cca/CCA_Get_Involved_508.webp",
    thumbnail2x: "/images/cca/CCA_Get_Involved_1016.webp",
    thumbnailAlt: "JoyRX Get Involved page design thumbnail",
    images: [
      {
        src: "/images/cca/CCA_Get_Involved_630.webp",
        src2x: "/images/cca/CCA_Get_Involved_1260.webp",
        alt: "JoyRX Get Involved page",
      },
      {
        src: "/images/cca/CCA_Programs_MyMusicRX_630.webp",
        src2x: "/images/cca/CCA_Programs_MyMusicRX_1260.webp",
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
    categories: "Web Development",
    role: "Website development",
    tools: ["WordPress", "HTML", "CSS", "PHP", "JavaScript"],
    year: "",
    summary:
      "WordPress site build for Keep Oregon Green, including full development and select design contributions.",
    thumbnail: "/images/kog/Keep_Oregon_Green_Home_508.webp",
    thumbnail2x: "/images/kog/Keep_Oregon_Green_Home_1016.webp",
    thumbnailAlt: "Keep Oregon Green website design thumbnail",
    images: [
      {
        src: "/images/kog/Keep_Oregon_Green_Home_630.webp",
        src2x: "/images/kog/Keep_Oregon_Green_Home_1260.webp",
        alt: "Keep Oregon Green homepage",
      },
      {
        src: "/images/kog/Keep_Oregon_Green_Contribute_630.webp",
        src2x: "/images/kog/Keep_Oregon_Green_Contribute_1260.webp",
        alt: "Keep Oregon Green contribute page",
      },
      {
        src: "/images/kog/Keep_Oregon_Green_On_The_Job_630.webp",
        src2x: "/images/kog/Keep_Oregon_Green_On_The_Job_1260.webp",
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
    id: "new-year-new-choices",
    title: "New Year New Choices",
    categories: "Web Development",
    role: "Website design & development",
    tools: ["WordPress", "HTML", "CSS", "JavaScript"],
    year: "",
    summary:
      "New Years campaign site with a lot of fun animations.",
    link: "https://newyearnewchoices.com/",
    thumbnail: "/images/mfa/Mercy_For_Animals_New_Year_New_Choices_508.webp",
    thumbnail2x: "/images/mfa/Mercy_For_Animals_New_Year_New_Choices_1016.webp",
    thumbnailAlt: "New Year New Choices website thumbnail",
    images: [
      {
        src: "/images/mfa/Mercy_For_Animals_New_Year_New_Choices_630.webp",
        src2x: "/images/mfa/Mercy_For_Animals_New_Year_New_Choices_1260.webp",
        alt: "New Year New Choices website thumbnail",
      },
    ],
    highlights: [
      "Used GSAP to create a bunch of ambient and scrolling animations.",
      "Built a fully responsive and accessible slider that maintained the designers original vision.",
    ],
  },

  {
    id: "ofri",
    title: "Oregon Forest Resources Institute",
    categories: "Web Development",
    role: "Front-end development & project support",
    tools: ["Drupal 8", "Twig", "HTML", "CSS"],
    year: "",
    summary:
      "Front-end development and project coordination on a full-scale redesign of oregonforests.org.",
    thumbnail: "/images/ofri/Oregon_Forest_Research_Institute_Homepage_508.webp",
    thumbnail2x: "/images/ofri/Oregon_Forest_Research_Institute_Homepage_1016.webp",
    thumbnailAlt: "OFRI website design thumbnail",
    images: [
      {
        src: "/images/ofri/Oregon_Forest_Research_Institute_Homepage_630.webp",
        src2x: "/images/ofri/Oregon_Forest_Research_Institute_Homepage_1260.webp",
        alt: "OFRI homepage design",
      },
      {
        src: "/images/ofri/Oregon_Forest_Research_Institute_Video_Library_Expanded_630.webp",
        src2x: "/images/ofri/Oregon_Forest_Research_Institute_Video_Library_Expanded_1260.webp",
        alt: "OFRI video library page",
      },
      {
        src: "/images/ofri/Oregon_Forest_Research_Institute_Tree_Guide_630.webp",
        src2x: "/images/ofri/Oregon_Forest_Research_Institute_Tree_Guide_1260.webp",
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
    categories: ["Graphic Design", "Web Development"],
    role: "Website design & development",
    tools: ["WordPress", "HTML", "CSS", "JavaScript"],
    year: "",
    summary:
      "First-ever blog for Bob’s Red Mill, built on WordPress with a fully custom, brand-aligned theme.",
    thumbnail: "/images/bobs_red_mill/Bobs_Red_Mill_Bobs_Blog_508.webp",
    thumbnail2x: "/images/bobs_red_mill/Bobs_Red_Mill_Bobs_Blog_800.webp",
    thumbnailAlt: "Bob's Red Mill blog design thumbnail",
    images: [
      {
        src: "/images/bobs_red_mill/Bobs_Red_Mill_Bobs_Blog_630.webp",
        src2x: "/images/bobs_red_mill/Bobs_Red_Mill_Bobs_Blog_800.webp",
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
    categories: "Web Development",
    role: "Website design & development",
    tools: ["HTML", "CSS", "JavaScript"],
    year: "",
    summary:
      "Website design and development work for Bob’s Red Mill, extending the core brand into a cohesive site experience.",
    thumbnail: "/images/bobs_red_mill/Bobs_Red_Mill_Website_Homepage_508.webp",
    thumbnail2x: "/images/bobs_red_mill/Bobs_Red_Mill_Website_Homepage_800.webp",
    thumbnailAlt: "Bob's Red Mill website design thumbnail",
    images: [
      {
        src: "/images/bobs_red_mill/Bobs_Red_Mill_Website_Homepage_630.webp",
        src2x: "/images/bobs_red_mill/Bobs_Red_Mill_Website_Homepage_800.webp",
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
    id: "lamarzocco-home",
    title: "LaMarzocco Home Website",
    categories: "Web Development",
    role: "Website development",
    tools: ["WordPress", "HTML", "CSS", "PHP", "JavaScript"],
    year: "",
    summary:
      "",
    thumbnail: "/images/lamarzocco/LaMarzocco_Home_508.webp",
    thumbnail2x: "/images/lamarzocco/LaMarzocco_Home_1016.webp",
    thumbnailAlt: "LaMarzocco Home website design thumbnail",
    images: [
      {
        src: "/images/lamarzocco/LaMarzocco_Home_630.webp",
        src2x: "/images/lamarzocco/LaMarzocco_Home_1260.webp",
        alt: "LaMarzocco Home website homepage",
      },
      {
        src: "/images/lamarzocco/LaMarzocco_Office-Coffee_630.webp",
        src2x: "/images/lamarzocco/LaMarzocco_Office-Coffee_1260.webp",
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
    id: "supercrown-website",
    title: "Supercrown Website",
    categories: "Web Development",
    role: "Website development",
    tools: ["WordPress", "WooCommerce", "HTML", "CSS", "PHP", "JavaScript"],
    year: "",
    summary:
      "WordPress and WooCommerce build for Supercrown, blending editorial content with ecommerce functionality.",
    thumbnail: "/images/supercrown/Supercrown_Home_508.webp",
    thumbnail2x: "/images/supercrown/Supercrown_Home_1016.webp",
    thumbnailAlt: "Supercrown website design thumbnail",
    images: [
      {
        src: "/images/supercrown/Supercrown_Home_630.webp",
        src2x: "/images/supercrown/Supercrown_Home_1260.webp",
        alt: "Supercrown homepage",
      },
      {
        src: "/images/supercrown/Supercrown_Journal_Coffee_Entry_630.webp",
        src2x: "/images/supercrown/Supercrown_Journal_Coffee_Entry_1260.webp",
        alt: "Supercrown journal coffee entry page",
      },
    ],
    highlights: [
      "Implemented storefront and journal-style content in a cohesive experience.",
      "Integrated WooCommerce while preserving a strong editorial feel.",
      "Built flexible templates for product stories and journal entries.",
    ],
  },

  {
    id: "mfa-gala-2024",
    title: "Mercy For Animals Gala",
    categories: "Web Development",
    role: "Front-end development",
    tools: ["HTML", "CSS", "JavaScript", "WordPress"],
    year: "",
    summary:
      "Front-end build for Mercy For Animals’ 25th Anniversary Gala website.",
    link: "https://mfagala.com/",
    thumbnail: "/images/mfa/Mercy_For_Animals_Gala_2024_508.webp",
    thumbnail2x: "/images/mfa/Mercy_For_Animals_Gala_2024_1016.webp",
    thumbnailAlt: "Mercy For Animals Gala website design thumbnail",
    images: [
      {
        src: "/images/mfa/Mercy_For_Animals_Gala_2024_630.webp",
        src2x: "/images/mfa/Mercy_For_Animals_Gala_2024_1027.webp",
        alt: "Mercy For Animals Gala homepage",
      },
    ],
    highlights: [
      "Used motion to give the site a more celebratory feel.",
      "Ensured the site was accessible and easy to navigate, even with very large celebrity host and sponsor sections.",
      "Ensured the layout adapts cleanly from mobile to large screens.",
    ],
  },

  // {
  //   id: "grains-of-discovery",
  //   title: "Grains of Discovery",
  //   categories: "Web Development",
  //   role: "Website design & development",
  //   tools: ["HTML", "CSS", "JavaScript", "jQuery"],
  //   year: "",
  //   summary:
  //     "Microsite design and build for Bob’s Red Mill’s Grains of Discovery campaign.",
  //   thumbnail: "/images/bobs_red_mill/Bobs_Red_Mill_Grains_Of_Discovery_Homepage_508.webp",
  //   thumbnail2x: "/images/bobs_red_mill/Bobs_Red_Mill_Grains_Of_Discovery_Homepage_800.webp",
  //   thumbnailAlt: "Grains of Discovery website design thumbnail",
  //   images: [
  //     {
  //       src: "/images/bobs_red_mill/Bobs_Red_Mill_Grains_Of_Discovery_Homepage_630.webp",
  //       src2x: "/images/bobs_red_mill/Bobs_Red_Mill_Grains_Of_Discovery_Homepage_800.webp",
  //       alt: "Grains of Discovery website design",
  //     },
  //   ],
  //   highlights: [
  //     "Designed a campaign-specific experience within existing brand constraints.",
  //     "Used JavaScript and jQuery to add subtle interactivity.",
  //     "Balanced visual richness with performance and simplicity.",
  //   ],
  // },

  // ===================== BRAND / CLIENT =====================
  



  // {
  //   id: "progressive-doors-windows",
  //   title: "Progressive Doors & Windows Website",
  //   categories: "Brand/Client",
  //   role: "Website development",
  //   tools: ["WordPress", "HTML", "CSS", "PHP", "JavaScript"],
  //   year: "",
  //   summary:
  //     "Website build for Progressive Doors & Windows, highlighting products and service offerings.",
  //   thumbnail: "/images/progressive/Progressive_Home_508.webp",
  //   thumbnail2x: "/images/progressive/Progressive_Home_1016.webp",
  //   thumbnailAlt: "Progressive Doors & Windows homepage thumbnail",
  //   images: [
  //     {
  //       src: "/images/progressive/Progressive_Home_630.webp",
  //       src2x: "/images/progressive/Progressive_Home_1260.webp",
  //       alt: "Progressive Doors & Windows homepage",
  //     },
  //     {
  //       src: "/images/progressive/Progressive_Doors_630.webp",
  //       src2x: "/images/progressive/Progressive_Doors_1260.webp",
  //       alt: "Progressive Doors & Windows doors page",
  //     },
  //   ],
  //   highlights: [
  //     "Developed front-end templates for key product and landing pages.",
  //     "Focused on clear navigation and product exploration.",
  //     "Delivered a maintainable WordPress implementation for the client.",
  //   ],
  // },

  // ===================== GRAPHIC DESIGN / POSTERS / ALBUMS =====================
  {
    id: "rogue-design-composition",
    title: "Rogue Ales Design Composition",
    categories: "Graphic Design",
    role: "Website design comps",
    tools: ["Adobe Photoshop", "Adobe Illustrator"],
    year: "",
    summary:
      "Proposed redesign concepts for Rogue Ales & Spirits, centered around their mission statement and brand story.",
    thumbnail: "/images/other/Rogue_Landing_Page_508.webp",
    thumbnail2x: "/images/other/Rogue_Landing_Page_800.webp",
    thumbnailAlt: "Rogue website design composition thumbnail",
    images: [
      {
        src: "/images/other/Rogue_Landing_Page_630.webp",
        src2x: "/images/other/Rogue_Landing_Page_800.webp",
        alt: "Rogue homepage design composition",
      },
      {
        src: "/images/other/Rogue_Beer_Page_630.webp",
        src2x: "/images/other/Rogue_Beer_Page_800.webp",
        alt: "Rogue beer page design composition",
      },
    ],
    highlights: [
      "Explored layouts that place the Rogue mission front and center on the homepage.",
      "Reflected on how to refine copy load and hierarchy in future iterations.",
    ],
  },

{
    id: "mr-history-gene",
    title: "Mr. History “Gene” Album Artwork",
    categories: "Graphic Design",
    role: "Album cover illustration",
    tools: ["Adobe Illustrator"],
    year: "",
    summary:
      "Album cover artwork for Mr. History’s release “Gene,” focused on bold illustration.",
    thumbnail: "/images/other/Mr_History_Gene_Album_Art_508.webp",
    thumbnail2x: "/images/other/Mr_History_Gene_Album_Art_800.webp",
    thumbnailAlt: "Mr History Gene album artwork thumbnail",
    images: [
      {
        src: "/images/other/Mr_History_Gene_Album_Art_630.webp",
        src2x: "/images/other/Mr_History_Gene_Album_Art_800.webp",
        alt: "Mr History Gene album artwork",
      },
    ],
    highlights: [
      "Designed full album cover illustration in Illustrator.",
      "Optimized artwork for print packaging needs.",
      "Created visuals aligned with the band’s sound and identity.",
    ],
  },

  {
    id: "explosions-in-the-sky",
    title: "Explosions In The Sky at The Granada",
    categories: "Graphic Design",
    role: "Poster design",
    tools: ["Adobe Illustrator", "Adobe Photoshop"],
    year: "",
    summary:
      "Poster design for Explosions In The Sky at The Granada, focused on mood and atmosphere.",
    thumbnail: "/images/other/Explosions_In_The_Sky_Flier_508.webp",
    thumbnail2x: "/images/other/Explosions_In_The_Sky_Flier_800.webp",
    thumbnailAlt: "Explosions in the Sky flier design thumbnail",
    images: [
      {
        src: "/images/other/Explosions_In_The_Sky_Flier_630.webp",
        src2x: "/images/other/Explosions_In_The_Sky_Flier_800.webp",
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
    categories: "Graphic Design",
    role: "Poster design",
    tools: ["Adobe Illustrator"],
    year: "",
    summary:
      "Poster design for Fairbanks with Mr. History at Record Bar.",
    thumbnail: "/images/other/Fairbanks_Mr_History_Flier_508.webp",
    thumbnail2x: "/images/other/Fairbanks_Mr_History_Flier_800.webp",
    thumbnailAlt: "Fairbanks with Mr. History flier design thumbnail",
    images: [
      {
        src: "/images/other/Fairbanks_Mr_History_Flier_630.webp",
        src2x: "/images/other/Fairbanks_Mr_History_Flier_800.webp",
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
    categories: "Graphic Design",
    role: "Album cover illustration",
    tools: ["Adobe Illustrator"],
    year: "",
    summary:
      "Album artwork for Mr. History’s release “Cousin Sleep Cousin Death,” with detailed illustration.",
    thumbnail: "/images/other/Mr_History_Cousin_Sleep_Cousin_Death_Album_Art_508.webp",
    thumbnail2x: "/images/other/Mr_History_Cousin_Sleep_Cousin_Death_Album_Art_800.webp",
    thumbnailAlt:
      "Mr History Cousin Sleep Cousin Death album artwork thumbnail",
    images: [
      {
        src: "/images/other/Mr_History_Cousin_Sleep_Cousin_Death_Album_Art_630.webp",
        src2x: "/images/other/Mr_History_Cousin_Sleep_Cousin_Death_Album_Art_800.webp",
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
    categories: "Graphic Design",
    role: "Poster design",
    tools: ["Adobe Illustrator"],
    year: "",
    summary:
      "A pair of stock fliers for Good Foot, designed so that the band could use them for multiple events.",
    thumbnail: "/images/other/Good_Foot_Stock_Flier_One_508.webp",
    thumbnail2x: "/images/other/Good_Foot_Stock_Flier_One_800.webp",
    thumbnailAlt: "Good Foot Stock flier design thumbnail one",
    images: [
      {
        src: "/images/other/Good_Foot_Stock_Flier_One_630.webp",
        src2x: "/images/other/Good_Foot_Stock_Flier_One_800.webp",
        alt: "Good Foot Stock flier one",
      },
      {
        src: "/images/other/Good_Foot_Stock_Flier_Two_630.webp",
        src2x: "/images/other/Good_Foot_Stock_Flier_Two_800.webp",
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
    categories: "Graphic Design",
    role: "Poster design",
    tools: ["Adobe Illustrator", "Adobe Photoshop"],
    year: "",
    summary:
      "Poster design for Cobra Skulls with Bent Left, blending illustration and texture.",
    thumbnail: "/images/other/Cobra_Skulls_Flier_508.webp",
    thumbnail2x: "/images/other/Cobra_Skulls_Flier_800.webp",
    thumbnailAlt: "Cobra Skulls with Bent Left flier design thumbnail",
    images: [
      {
        src: "/images/other/Cobra_Skulls_Flier_630.webp",
        src2x: "/images/other/Cobra_Skulls_Flier_800.webp",
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
    categories: "Graphic Design",
    role: "Poster design",
    tools: ["Adobe Illustrator"],
    year: "",
    summary:
      "Flier design for DJ Red Beard, with a strong illustrative focal point.",
    thumbnail: "/images/other/DJ_Red_Beard_Flier_508.webp",
    thumbnail2x: "/images/other/DJ_Red_Beard_Flier_800.webp",
    thumbnailAlt: "DJ Red Beard flier design thumbnail",
    images: [
      {
        src: "/images/other/DJ_Red_Beard_Flier_630.webp",
        src2x: "/images/other/DJ_Red_Beard_Flier_800.webp",
        alt: "DJ Red Beard flier",
      },
    ],
    highlights: [
      "Designed an 11x17 inch flier using vector illustration.",
      "Emphasized the personality of the DJ while keeping event details clear.",
      "Prepared artwork for print output.",
    ],
  },

  // {
  //   id: "radiohead-flier",
  //   title: "Radiohead Flier",
  //   categories: "Graphic Design",
  //   role: "Poster design",
  //   tools: ["Adobe Illustrator", "Adobe Photoshop"],
  //   year: "",
  //   summary:
  //     "Illustrated flier inspired by Radiohead, emphasizing bold composition and typography.",
  //   thumbnail: "/images/other/Radiohead_Flier_508.webp",
  //   thumbnail2x: "/images/other/Radiohead_Flier_800.webp",
  //   thumbnailAlt: "Radiohead flier design thumbnail",
  //   images: [
  //     {
  //       src: "/images/other/Radiohead_Flier_630.webp",
  //       src2x: "/images/other/Radiohead_Flier_800.webp",
  //       alt: "Radiohead flier",
  //     },
  //   ],
  //   highlights: [
  //     "Created an 11x17 inch flier layout.",
  //     "Explored color, shape, and type to capture the band’s aesthetic.",
  //     "Prepared artwork for both print and digital sharing.",
  //   ],
  // },

  {
    id: "mr-history-six",
    title: "Mr. History at Riot Room – August 24",
    categories: "Graphic Design",
    role: "Poster design",
    tools: ["Adobe Illustrator"],
    year: "",
    summary:
      "Flier for Mr. History at Riot Room, featuring bold illustration and typography.",
    thumbnail: "/images/other/Mr_History_Six_Flier_Recolor_508.webp",
    thumbnail2x: "/images/other/Mr_History_Six_Flier_Recolor_800.webp",
    thumbnailAlt: "Mr History at Riot Room flier design thumbnail",
    images: [
      {
        src: "/images/other/Mr_History_Six_Flier_Recolor_630.webp",
        src2x: "/images/other/Mr_History_Six_Flier_Recolor_800.webp",
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
    categories: "Graphic Design",
    role: "Poster design",
    tools: ["Adobe Illustrator"],
    year: "",
    summary:
      "Flier for Mr. History at Crosstown Station, with bold illustration and type.",
    thumbnail: "/images/other/Mr_History_One_Flier_508.webp",
    thumbnail2: "/images/other/Mr_History_One_Flier_800.webp",
    thumbnailAlt: "Mr History Crosstown flier design thumbnail",
    images: [
      {
        src: "/images/other/Mr_History_One_Flier_630.webp",
        src2: "/images/other/Mr_History_One_Flier_800.webp",
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
    categories: "Graphic Design",
    role: "Poster design",
    tools: ["Adobe Illustrator"],
    year: "",
    summary:
      "Flier for Mr. History at Davies Uptown, with a bold, illustrative style.",
    thumbnail: "/images/other/Mr_History_Five_Flier_508.webp",
    thumbnail2x: "/images/other/Mr_History_Five_Flier_800.webp",
    thumbnailAlt: "Mr History at Davies Uptown flier design thumbnail",
    images: [
      {
        src: "/images/other/Mr_History_Five_Flier_630.webp",
        src2x: "/images/other/Mr_History_Five_Flier_800.webp",
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
    categories: "Graphic Design",
    role: "Poster design",
    tools: ["Adobe Illustrator"],
    year: "",
    summary:
      "Flier for Mr. History at The Riot Room, with a high-contrast illustration.",
    thumbnail: "/images/other/Mr_History_Four_Flier_Recolor_508.webp",
    thumbnail2x: "/images/other/Mr_History_Four_Flier_Recolor_800.webp",
    thumbnailAlt:
      "Mr. History at the Riot Room flier design thumbnail",
    images: [
      {
        src: "/images/other/Mr_History_Four_Flier_Recolor_630.webp",
        src2x: "/images/other/Mr_History_Four_Flier_Recolor_800.webp",
        alt: "Mr. History at the Riot Room flier",
      },
    ],
    highlights: [
      "Created a visually striking poster using simplified forms and bold color.",
      "Kept typography legible while integrating with the illustration.",
      "Prepared artwork for print.",
    ],
  },

  // {
  //   id: "bobs-marquees",
  //   title: "Bob’s Red Mill Marquees",
  //   categories: "Graphic Design",
  //   role: "Graphic design",
  //   tools: ["Adobe Photoshop", "Adobe Illustrator"],
  //   year: "",
  //   summary:
  //     "A series of homepage marquee designs for Bob’s Red Mill, featuring multiple product campaigns.",
  //   thumbnail: "/images/bobs_red_mill/Bobs_Red_Mill_Grains_Of_Discovery_Marquee_508.webp",
  //   thumbnail2x: "/images/bobs_red_mill/Bobs_Red_Mill_Grains_Of_Discovery_Marquee_800.webp",
  //   thumbnailAlt: "Grains of Discovery marquee design thumbnail",
  //   images: [
  //     {
  //       src: "/images/bobs_red_mill/Bobs_Red_Mill_Grains_Of_Discovery_Marquee_630.webp",
  //       src2x: "/images/bobs_red_mill/Bobs_Red_Mill_Grains_Of_Discovery_Marquee_800.webp",
  //       alt: "Grains of Discovery website marquee design",
  //     },
  //     {
  //       src: "/images/bobs_red_mill/Bobs_Red_Mill_Pie_Crust_Marquee_630.webp",
  //       src2x: "/images/bobs_red_mill/Bobs_Red_Mill_Pie_Crust_Marquee_800.webp",
  //       alt: "Gluten Free Pie Crust Mix website marquee design",
  //     },
  //     {
  //       src: "/images/bobs_red_mill/Bobs_Red_Mill_Oatmeal_Marquee_630.webp",
  //       src2x: "/images/bobs_red_mill/Bobs_Red_Mill_Oatmeal_Marquee_800.webp",
  //       alt: "World's Best Oatmeal website marquee design",
  //     },
  //     {
  //       src: "/images/bobs_red_mill/Bobs_Red_Mill_Coconut_Flour_Marquee_630.webp",
  //       src2x: "/images/bobs_red_mill/Bobs_Red_Mill_Coconut_Flour_Marquee_800.webp",
  //       alt: "Coconut Flour website marquee design",
  //     },
  //     {
  //       src: "/images/bobs_red_mill/Bobs_Red_Mill_Gluten_Free_Muesli_Marquee_630.webp",
  //       src2x: "/images/bobs_red_mill/Bobs_Red_Mill_Gluten_Free_Muesli_Marquee_800.webp",
  //       alt: "Gluten Free Muesli website marquee design",
  //     },
  //     {
  //       src: "/images/bobs_red_mill/Bobs_Red_Mill_Holiday_Marquee_630.webp",
  //       src2x: "/images/bobs_red_mill/Bobs_Red_Mill_Holiday_Marquee_800.webp",
  //       alt: "Holiday website marquee design",
  //     },
  //   ],
  //   highlights: [
  //     "Created a collection of marquees for multiple campaigns, from grains to seasonal promotions.",
  //     "Worked within existing brand illustration and typography while pushing layout variety.",
  //     "Delivered production-ready artwork for the site’s homepage hero areas.",
  //   ],
  // },

];
