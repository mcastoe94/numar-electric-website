export type ServiceFaq = { question: string; answer: string };
export type ServiceListGroup = { title?: string; items: string[] };
export type ServiceSection =
  | { type: "prose"; heading: string; paragraphs: string[] }
  | { type: "list"; heading: string; intro?: string; groups: ServiceListGroup[] }
  | { type: "faq"; heading: string; items: ServiceFaq[] }
  | { type: "cta"; heading: string; body: string };

export type ServicePage = {
  slug: string;
  navLabel: string;
  title: string;
  description: string;
  h1: string;
  intro: string[];
  image: {
    src: string;
    alt: string;
    objectPosition?: string;
    /** `aside` / `aside-left` place the image left of the intro; default is a full-width band below. */
    placement?: "aside" | "aside-left" | "banner";
  };
  sections: ServiceSection[];
  related: { label: string; href: string }[];
};

export const SERVICE_PAGES: ServicePage[] = [
  {
    slug: "commercial-electrical",
    navLabel: "Commercial Electrical",
    title: "Commercial Electrical Contractor | Scottsdale & Arizona",
    description: "Commercial electrical contractor. Scottsdale, Phoenix, Tucson, Flagstaff, all of AZ. Tenant improvements and new builds. CR-11 licensed. Call [PHONE].",
    h1: "Commercial Electrical Contractor",
    intro: [
      "Numar Electric is a licensed commercial electrical contractor. We hold ROC #366059 with a CR-11 classification. That license covers commercial and residential work.",
      "We work with general contractors, property managers, and business owners across all of Arizona.",
    ],
    image: {
      src: "/service-commercial-warehouse.jpg",
      alt: "Commercial warehouse with high-bay lighting and industrial electrical infrastructure",
      objectPosition: "50% 35%",
      placement: "aside-left",
    },
    sections: [
      {
        type: "list",
        heading: "Commercial Services We Provide",
        groups: [
          {
            items: [
              "Tenant improvement (TI) electrical",
              "Restaurant and retail buildouts",
              "Office electrical fit-out",
              "Service and panel upgrades",
              "Three-phase power distribution",
              "Transformer installation and replacement",
              "Panelboard and switchgear installation",
              "Feeder and branch circuit installation",
              "Commercial lighting and lighting controls",
              "Emergency and exit lighting",
              "Data and low-voltage rough-in",
              "Equipment connections",
              "Code correction work",
            ],
          },
        ],
      },
      {
        type: "list",
        heading: "We Bid Complete Plan Sets",
        intro: "Send us your plans. We do a full electrical takeoff. Our estimate includes:",
        groups: [
          {
            items: [
              "Fixture and device counts",
              "Feeder and panel schedules",
              "Conduit and conductor quantities",
              "Gear and equipment costs",
              "Labor hours by phase",
              "Classified location requirements where they apply",
            ],
          },
        ],
      },
      {
        type: "prose",
        heading: "We Bid Complete Plan Sets",
        paragraphs: [
          "You get a detailed number. You do not get a guess.",
        ],
      },
      {
        type: "prose",
        heading: "We Work Around Your Business",
        paragraphs: [
          "Downtime costs you money. We schedule work at night or on weekends when the job requires it. We keep the work area clean. We keep your staff and customers safe.",
        ],
      },
      {
        type: "prose",
        heading: "Project Types We Handle",
        paragraphs: [
          "Restaurant buildouts. Kitchen equipment needs dedicated circuits and correct grounding. We coordinate with your equipment schedule.",
          "Retail and office TI. We work from the architect's plan set. We coordinate with the GC and other trades.",
          "Aviation and industrial. We understand classified location requirements under NEC Article 513 and related articles.",
          "Service upgrades. We coordinate with APS or SRP on every service change.",
        ],
      },
      {
        type: "prose",
        heading: "Areas We Serve",
        paragraphs: [
          "Numar Electric takes commercial work across all of Arizona. That includes the Phoenix metro area, Tucson, Flagstaff, Prescott, Sedona, Yuma, Casa Grande, and remote sites statewide.",
          "We travel for the right project. Send us your location and your scope.",
        ],
      },
      {
        type: "prose",
        heading: "Free Site Visits in the Phoenix Metro Area",
        paragraphs: [
          "We give free site visits and free written estimates throughout the Phoenix metro area.",
          "Outside the metro area we charge a trip fee. The fee covers travel to your site. We tell you the exact fee before we schedule. We apply the fee to your invoice when you award us the job.",
        ],
      },
      {
        type: "prose",
        heading: "General Contractors — Add Us to Your Bid List",
        paragraphs: [
          "We bid through BuildingConnected. We also accept plans direct. Send your invitation to bid to [EMAIL].",
        ],
      },
      {
        type: "faq",
        heading: "Frequently Asked Questions",
        items: [
          {
            question: "What size projects do you take?",
            answer: "We handle small service calls and full buildouts. Contact us with your scope.",
          },
          {
            question: "Do you carry commercial insurance?",
            answer: "Yes. We provide a certificate of insurance on request.",
          },
          {
            question: "How fast can you return a bid?",
            answer: "Turnaround depends on the plan set size. We confirm a date when we receive the invitation.",
          },
          {
            question: "Do you charge for a site walk?",
            answer: "Not in the Phoenix metro area. Outside the metro area we charge a trip fee. We credit the fee to the contract when you award us the job.",
          },
          {
            question: "Do you work with the utility?",
            answer: "Yes. We coordinate with APS and SRP on service work.",
          },
        ],
      },
      {
        type: "cta",
        heading: "Request a Commercial Bid",
        body: "Call [PHONE] or send plans to [EMAIL].",
      },
    ],
    related: [
      {
        label: "New Construction Wiring",
        href: "/new-construction-wiring",
      },
      {
        label: "Service & Panel Upgrades",
        href: "/electrical-service-panel-upgrades",
      },
      {
        label: "Lighting Installation",
        href: "/lighting-installation",
      },
    ],
  },
  {
    slug: "residential-electrical",
    navLabel: "Residential Electrical",
    title: "Residential Electrician | Scottsdale & All of Arizona",
    description: "Residential electricians in Scottsdale, Phoenix, Tucson, Flagstaff, and all of Arizona. Wiring, outlets, panels, repairs. Free metro estimates. [PHONE]",
    h1: "Residential Electrician",
    intro: [
      "Your home depends on safe electrical work. Numar Electric is a licensed electrical contractor in Scottsdale, Arizona. We hold ROC license #366059 with a CR-11 classification. We do all residential electrical work to National Electrical Code standards.",
      "We serve homeowners across all of Arizona.",
    ],
    image: {
      src: "/service-residential-outlet.jpg",
      alt: "Electrician installing a residential wall outlet with a power drill",
      objectPosition: "50% 40%",
      placement: "aside-left",
    },
    sections: [
      {
        type: "list",
        heading: "Residential Electrical Services We Provide",
        groups: [
          {
            items: [
              "Outlet and switch installation",
              "Ceiling fan and light fixture installation",
              "Whole-home rewiring",
              "GFCI and AFCI protection",
              "Dedicated appliance circuits",
              "Pool and spa wiring",
              "Hot tub circuits and bonding",
              "Smoke detector and carbon monoxide detector wiring",
              "Surge protection",
              "Electrical safety inspections",
            ],
          },
        ],
      },
      {
        type: "prose",
        heading: "Why Homeowners Choose Numar Electric",
        paragraphs: [
          "We are licensed and bonded. Arizona requires an ROC license for electrical work over $1,000. We hold ROC #366059. Ask any contractor for their license number before you hire them.",
          "We pull the permits. Most electrical work requires a permit. We handle the permit and the inspection. You do not manage that process.",
          "We follow the code. We install every circuit to current NEC requirements. Correct work protects your home and your insurance coverage.",
          "We give clear pricing. We give you a written estimate before we start. You approve the price first.",
        ],
      },
      {
        type: "list",
        heading: "Signs Your Home Needs an Electrician",
        intro: "Call an electrician when you see these conditions:",
        groups: [
          {
            items: [
              "Breakers trip again and again",
              "Lights flicker or dim",
              "Outlets feel warm",
              "You smell burning near a panel or outlet",
              "You see scorch marks on an outlet or switch",
              "Your home has two-prong outlets",
              "Your home has aluminum branch wiring",
              "Your panel is a Federal Pacific or Zinsco brand",
            ],
          },
        ],
      },
      {
        type: "prose",
        heading: "Signs Your Home Needs an Electrician",
        paragraphs: [
          "Do not ignore these signs. Damaged wiring causes fires.",
        ],
      },
      {
        type: "prose",
        heading: "Older Homes in Arizona",
        paragraphs: [
          "Many Arizona homes were built before 1980. These homes often have limited circuit capacity. Modern appliances draw more current than old wiring supports. We inspect the existing system first. Then we tell you what the home needs.",
        ],
      },
      {
        type: "prose",
        heading: "Areas We Serve",
        paragraphs: [
          "Numar Electric serves all of Arizona. We work in the Phoenix metro area, Tucson, Flagstaff, Prescott, Sedona, Yuma, Casa Grande, Payson, and the surrounding communities.",
          "Call us for residential work anywhere in the state.",
        ],
      },
      {
        type: "faq",
        heading: "Frequently Asked Questions",
        items: [
          {
            question: "Do I need a permit for residential electrical work?",
            answer: "Most new circuits, panel work, and service changes require a permit. We pull the permit for you.",
          },
          {
            question: "How much does an electrician cost in Scottsdale?",
            answer: "Cost depends on the scope. Small jobs start lower than remodel work. We give a written estimate at no charge in the Phoenix metro area. A trip fee applies outside the metro area.",
          },
          {
            question: "Are you licensed and insured?",
            answer: "Yes. We hold ROC #366059 and we carry liability insurance.",
          },
          {
            question: "Do you work on weekends?",
            answer: "Contact us at [PHONE] for current availability.",
          },
          {
            question: "Is the estimate free?",
            answer: "Yes, in the Phoenix metro area. We charge a trip fee outside the metro area. We apply the fee to your invoice when you award us the work.",
          },
        ],
      },
      {
        type: "prose",
        heading: "Free Site Visits in the Phoenix Metro Area",
        paragraphs: [
          "We give free site visits and free written estimates throughout the Phoenix metro area.",
          "Outside the metro area we charge a trip fee. The fee covers travel to your site. We tell you the exact fee before we schedule. We apply the fee to your invoice when you award us the job.",
        ],
      },
      {
        type: "cta",
        heading: "Get an Estimate",
        body: "Call [PHONE] or email [EMAIL]. We respond fast. We give you an honest price.",
      },
    ],
    related: [
      {
        label: "Service & Panel Upgrades",
        href: "/electrical-service-panel-upgrades",
      },
      {
        label: "Troubleshooting, Repairs & Service Calls",
        href: "/electrical-troubleshooting-repairs-service-calls",
      },
      {
        label: "Remodel Electrical",
        href: "/remodel-electrical",
      },
    ],
  },
  {
    slug: "electrical-service-panel-upgrades",
    navLabel: "Service & Panel Upgrades",
    title: "Service & Panel Upgrades | Scottsdale, Arizona",
    description: "200 amp service and panel upgrades in Scottsdale, Phoenix, Tucson, Prescott, and all of Arizona. Permits and utility coordination included. [PHONE]",
    h1: "Service & Panel Upgrades",
    intro: [
      "Your electrical service brings power to the house. Your panel distributes it. An old or undersized service limits what your home can do. It can also create a fire risk.",
      "Numar Electric installs new panels and complete service upgrades. We hold ROC #366059.",
    ],
    image: {
      src: "/service-residential-panel.jpg",
      alt: "Electrician inspecting a residential electrical panel with a flashlight",
      objectPosition: "50% 45%",
      placement: "aside-left",
    },
    sections: [
      {
        type: "list",
        heading: "When You Need a Service or Panel Upgrade",
        intro: "Upgrade your service or panel when any of these apply:",
        groups: [
          {
            items: [
              "Your service is 100 amps or less",
              "Your panel uses fuses",
              "Breakers trip often",
              "You plan to add an EV charger",
              "You plan to add a pool, spa, or HVAC system",
              "You plan a room addition",
              "Your panel is full and has no open spaces",
              "Your panel is a Federal Pacific Stab-Lok, Zinsco, or Challenger brand",
            ],
          },
        ],
      },
      {
        type: "prose",
        heading: "When You Need a Service or Panel Upgrade",
        paragraphs: [
          "Federal Pacific and Zinsco panels have a known failure record. Breakers in these panels can fail to trip. Replace them.",
        ],
      },
      {
        type: "list",
        heading: "What a 200 Amp Service Upgrade Includes",
        intro: "A complete service upgrade includes these items:",
        groups: [
          {
            items: [
              "New meter and main combination panel or new main panel",
              "New service entrance conductors",
              "New service mast or lateral connection",
              "New grounding electrode system",
              "New ground rods and water bond",
              "Transfer of all existing circuits",
              "New breakers as required",
              "Permit and inspection",
              "Utility coordination and reconnection",
            ],
          },
        ],
      },
      {
        type: "prose",
        heading: "What a 200 Amp Service Upgrade Includes",
        paragraphs: [
          "We use utility-approved equipment. We install panels that APS accepts on their approved list.",
        ],
      },
      {
        type: "prose",
        heading: "How Long Does a Panel Upgrade Take?",
        paragraphs: [
          "Most residential service upgrades take one day of field work. Power is off for part of that day. The full schedule includes permit time, the utility disconnect, and the inspection. We give you the full timeline before we start.",
        ],
      },
      {
        type: "prose",
        heading: "We Handle the Permit and the Utility",
        paragraphs: [
          "A service upgrade requires a permit. It also requires a utility disconnect and reconnect. We manage both. We coordinate with APS or SRP. We schedule the inspection.",
        ],
      },
      {
        type: "list",
        heading: "Service and Panel Upgrade Cost in Arizona",
        intro: "Cost depends on these factors:",
        groups: [
          {
            items: [
              "Service size (200 amp is standard)",
              "Overhead or underground service",
              "Panel location and access",
              "Meter and main combo or separate main",
              "Grounding system condition",
              "Circuit count",
              "Utility requirements",
            ],
          },
        ],
      },
      {
        type: "prose",
        heading: "Service and Panel Upgrade Cost in Arizona",
        paragraphs: [
          "We give a firm written price after we look at the site. The site visit is free in the Phoenix metro area. A trip fee applies in greater Arizona.",
        ],
      },
      {
        type: "faq",
        heading: "Frequently Asked Questions",
        items: [
          {
            question: "How long is the power off?",
            answer: "Plan for most of the work day. We tell you the exact window before we start.",
          },
          {
            question: "Do I need 200 amps?",
            answer: "Most homes do. A load calculation gives the exact answer. We do that calculation.",
          },
          {
            question: "Do you charge for the estimate?",
            answer: "No, not in the Phoenix metro area. A trip fee applies in greater Arizona. We apply the fee to your invoice when you hire us.",
          },
          {
            question: "Can you add a subpanel instead?",
            answer: "Sometimes. A subpanel adds spaces. It does not add service capacity. We tell you which one your home needs.",
          },
          {
            question: "Do you replace Federal Pacific panels?",
            answer: "Yes. We replace them often. Call us.",
          },
        ],
      },
      {
        type: "prose",
        heading: "Areas We Serve",
        paragraphs: [
          "Numar Electric upgrades services and panels across all of Arizona. That includes Scottsdale, Phoenix, Tucson, Flagstaff, Prescott, Sedona, and Yuma.",
        ],
      },
      {
        type: "prose",
        heading: "Free Site Visits in the Phoenix Metro Area",
        paragraphs: [
          "We give free site visits and free written estimates throughout the Phoenix metro area.",
          "Outside the metro area we charge a trip fee. The fee covers travel to your site. We tell you the exact fee before we schedule. We apply the fee to your invoice when you award us the job.",
        ],
      },
      {
        type: "cta",
        heading: "Get a Service or Panel Upgrade Quote",
        body: "Call [PHONE]. We give you a written price.",
      },
    ],
    related: [
      {
        label: "EV Charger Installation",
        href: "/ev-charger-installation",
      },
      {
        label: "Residential Electrical",
        href: "/residential-electrical",
      },
      {
        label: "Troubleshooting, Repairs & Service Calls",
        href: "/electrical-troubleshooting-repairs-service-calls",
      },
    ],
  },
  {
    slug: "ev-charger-installation",
    navLabel: "EV Charger Installation",
    title: "EV Charger Installation | Scottsdale & All of Arizona",
    description: "Level 2 EV charger installation in Scottsdale, Phoenix, Tucson, Sedona, and all of Arizona. Tesla, ChargePoint, and all brands. Call [PHONE] today.",
    h1: "EV Charger Installation",
    intro: [
      "A Level 2 charger fills your battery overnight. A standard wall outlet does not. Numar Electric installs home and commercial EV charging equipment across all of Arizona.",
      "We are licensed under ROC #366059.",
    ],
    image: {
      src: "/service-ev-charger.jpg",
      alt: "Commercial EV charging station installation",
      objectPosition: "50% 40%",
      placement: "aside-left",
    },
    sections: [
      {
        type: "list",
        heading: "Chargers We Install",
        groups: [
          {
            items: [
              "Tesla Wall Connector",
              "ChargePoint Home Flex",
              "Emporia, Grizzl-E, and Wallbox units",
              "Ford, Rivian, and other OEM chargers",
              "Commercial and multi-unit charging stations",
            ],
          },
        ],
      },
      {
        type: "prose",
        heading: "Chargers We Install",
        paragraphs: [
          "We install any listed Level 2 charger. Buy your own unit or ask us to supply one.",
        ],
      },
      {
        type: "list",
        heading: "What the Installation Includes",
        groups: [
          {
            items: [
              "Load calculation on your existing service",
              "Dedicated 240-volt circuit",
              "Correct breaker and conductor sizing",
              "Conduit run to the charger location",
              "Charger mounting and connection",
              "Permit and inspection",
              "Test and commissioning",
            ],
          },
        ],
      },
      {
        type: "prose",
        heading: "What the Installation Includes",
        paragraphs: [
          "We size the circuit to the charger nameplate. We follow NEC Article 625.",
        ],
      },
      {
        type: "prose",
        heading: "Do You Need a Panel Upgrade First?",
        paragraphs: [
          "Not always. We run a load calculation first. The calculation shows if your service supports the new load.",
          "Many older homes have 100 amp service. A 48 amp charger needs a 60 amp circuit. That load often exceeds what a small service supports. If your service is too small, we quote a service upgrade with the charger install. See our electrical service and panel upgrade page.",
          "Some chargers support load sharing. That feature can avoid a service upgrade. We tell you the options.",
        ],
      },
      {
        type: "list",
        heading: "Garage, Driveway, and Detached Locations",
        intro: "We install chargers in these locations:",
        groups: [
          {
            items: [
              "Attached garage",
              "Detached garage",
              "Carport",
              "Driveway pedestal",
              "Outdoor wall",
            ],
          },
        ],
      },
      {
        type: "prose",
        heading: "Garage, Driveway, and Detached Locations",
        paragraphs: [
          "Long runs need larger conductors. Outdoor runs need weather-rated equipment. We size and install both correctly.",
        ],
      },
      {
        type: "prose",
        heading: "Commercial and Multi-Family EV Charging",
        paragraphs: [
          "Property managers add chargers to attract tenants. We install multi-port stations for offices, retail centers, and apartment complexes. We handle the service capacity study and the full installation.",
        ],
      },
      {
        type: "faq",
        heading: "Frequently Asked Questions",
        items: [
          {
            question: "How long does the install take?",
            answer: "Most home installs take one day.",
          },
          {
            question: "Do I need a permit?",
            answer: "Yes. A new 240-volt circuit requires a permit. We pull it.",
          },
          {
            question: "Can I install it myself?",
            answer: "Arizona requires a licensed contractor for permitted electrical work. Unpermitted work can void your insurance.",
          },
          {
            question: "Are there rebates in Arizona?",
            answer: "Rebate programs change. Check the current APS and SRP programs. We supply the paperwork the utility requires.",
          },
        ],
      },
      {
        type: "prose",
        heading: "Areas We Serve",
        paragraphs: [
          "We install EV chargers statewide. That includes Scottsdale, Phoenix, Tucson, Flagstaff, Prescott, Sedona, Yuma, and the surrounding communities.",
        ],
      },
      {
        type: "prose",
        heading: "Free Site Visits in the Phoenix Metro Area",
        paragraphs: [
          "We give free site visits and free written estimates throughout the Phoenix metro area.",
          "Outside the metro area we charge a trip fee. The fee covers travel to your site. We tell you the exact fee before we schedule. We apply the fee to your invoice when you award us the job.",
        ],
      },
      {
        type: "cta",
        heading: "Book Your EV Charger Install",
        body: "Call [PHONE] or email [EMAIL].",
      },
    ],
    related: [
      {
        label: "Service & Panel Upgrades",
        href: "/electrical-service-panel-upgrades",
      },
      {
        label: "Residential Electrical",
        href: "/residential-electrical",
      },
    ],
  },
  {
    slug: "electrical-troubleshooting-repairs-service-calls",
    navLabel: "Troubleshooting, Repairs & Service Calls",
    title: "Troubleshooting, Repairs & Service Calls | Phoenix Metro AZ",
    description: "Electrical troubleshooting, repairs, and service calls across the Phoenix metro area. Dead outlets, tripping breakers, flickering lights. Call [PHONE].",
    h1: "Troubleshooting, Repairs & Service Calls",
    intro: [
      "Electrical faults are hard to find. A dead outlet can have five different causes. Numar Electric finds the fault and repairs it correctly.",
      "We take service calls across the Phoenix metro area. We are a licensed contractor. Our ROC number is #366059.",
    ],
    image: {
      src: "/service-troubleshooting.jpg",
      alt: "Electrician troubleshooting a control panel with a digital multimeter",
      objectPosition: "50% 40%",
      placement: "aside-left",
    },
    sections: [
      {
        type: "list",
        heading: "Problems We Repair",
        groups: [
          {
            items: [
              "Dead outlets and switches",
              "Breakers that trip again and again",
              "Lights that flicker or dim",
              "Partial power loss in the house",
              "Burning smell near an outlet or panel",
              "Buzzing or humming from a panel",
              "Warm or discolored outlets",
              "GFCI outlets that will not reset",
              "Loose or damaged wiring",
              "Failed circuits after a storm",
              "Rodent damage to wiring",
              "Water damage to electrical equipment",
            ],
          },
        ],
      },
      {
        type: "list",
        heading: "How We Troubleshoot",
        groups: [
          {
            items: [
              "We ask what changed and when the problem started.",
              "We test the circuit with a meter.",
              "We isolate the fault to a device, a splice, or a run.",
              "We show you what we found.",
              "We give you a repair price.",
              "We repair the fault and test the circuit.",
            ],
          },
        ],
      },
      {
        type: "prose",
        heading: "How We Troubleshoot",
        paragraphs: [
          "We find the cause. We do not replace parts and hope.",
        ],
      },
      {
        type: "list",
        heading: "Stop and Call Right Away",
        intro: "Turn off the breaker and call an electrician if you see these conditions:",
        groups: [
          {
            items: [
              "You smell burning plastic",
              "You see smoke or sparks",
              "An outlet or panel is hot",
              "Water reached the panel or a device",
              "You get a shock from an appliance or a switch",
            ],
          },
        ],
      },
      {
        type: "prose",
        heading: "Stop and Call Right Away",
        paragraphs: [
          "These are urgent conditions. Do not wait.",
        ],
      },
      {
        type: "list",
        heading: "Service Call Areas",
        intro: "We run service calls in the Phoenix metro area only. That includes:",
        groups: [
          {
            items: [
              "Scottsdale",
              "Phoenix",
              "Tempe",
              "Mesa",
              "Chandler",
              "Gilbert",
              "Glendale",
              "Paradise Valley",
              "Peoria",
              "Cave Creek",
              "Fountain Hills",
              "Queen Creek",
            ],
          },
        ],
      },
      {
        type: "prose",
        heading: "Service Call Areas",
        paragraphs: [
          "We take project work across the rest of Arizona. Scheduled service calls stay local so we can respond fast.",
          "Emergencies are the exception. We take emergency calls in the Phoenix metro area, Tucson, Flagstaff, Prescott, and Sedona. See our emergency service call page.",
        ],
      },
      {
        type: "prose",
        heading: "Common Causes in Phoenix Homes",
        paragraphs: [
          "Heat. Attic temperatures break down insulation and loosen connections.",
          "Monsoon storms. Surges damage electronics and equipment.",
          "Rodents. Roof rats chew wire insulation in attics.",
          "Old aluminum wiring. Aluminum branch wiring expands and loosens at terminals. It needs correct connectors.",
          "Overloaded circuits. Old homes were not wired for modern loads.",
        ],
      },
      {
        type: "faq",
        heading: "Frequently Asked Questions",
        items: [
          {
            question: "What does a service call cost?",
            answer: "We charge a diagnostic fee. Call [PHONE] for the current rate. We apply the fee to the repair when you approve the work.",
          },
          {
            question: "Can you find a fault inside a wall?",
            answer: "Yes. We trace circuits and isolate faults with test equipment.",
          },
          {
            question: "Do you fix work another contractor did?",
            answer: "Yes. We correct failed and unpermitted work often.",
          },
          {
            question: "How fast can you get here?",
            answer: "Call [PHONE]. We give you the next open time.",
          },
        ],
      },
      {
        type: "cta",
        heading: "Call for a Repair",
        body: "Call [PHONE]. Tell us what the system is doing. We take it from there.\n\nDo you have an urgent electrical problem? See our emergency service call page.",
      },
    ],
    related: [
      {
        label: "Service & Panel Upgrades",
        href: "/electrical-service-panel-upgrades",
      },
      {
        label: "Residential Electrical",
        href: "/residential-electrical",
      },
      {
        label: "Lighting Installation",
        href: "/lighting-installation",
      },
    ],
  },
  {
    slug: "lighting-installation",
    navLabel: "Lighting Installation",
    title: "Lighting Installation | Scottsdale & All of Arizona",
    description: "Indoor, outdoor, and landscape lighting in Scottsdale, Phoenix, Tucson, Sedona, and all of Arizona. Recessed lights and LED retrofits. Call [PHONE].",
    h1: "Lighting Installation",
    intro: [
      "Good lighting changes a room. Numar Electric installs interior, exterior, and landscape lighting for homes and businesses across all of Arizona.",
      "We hold ROC #366059.",
    ],
    image: {
      src: "/service-lighting.jpg",
      alt: "Electrician installing high-bay lighting from a scissor lift in a commercial building",
      objectPosition: "50% 35%",
      placement: "aside-left",
    },
    sections: [
      {
        type: "list",
        heading: "Lighting Services We Provide",
        groups: [
          {
            title: "Interior lighting",
            items: [
              "Recessed can lights and LED downlights",
              "Chandeliers and pendants",
              "Under-cabinet lighting",
              "Track lighting",
              "Ceiling fans with light kits",
              "Vanity and bath lighting",
              "Dimmer and smart switch installation",
            ],
          },
          {
            title: "Exterior lighting",
            items: [
              "Landscape and path lighting",
              "Security and motion lighting",
              "Patio and pergola lighting",
              "Wall sconces and entry lighting",
              "Pool and deck lighting",
              "Low-voltage transformer installation",
            ],
          },
          {
            title: "Commercial lighting",
            items: [
              "LED retrofits",
              "Parking lot and pole lighting",
              "Warehouse high-bay lighting",
              "Retail display lighting",
              "Emergency and exit lighting",
              "Occupancy sensors and lighting controls",
            ],
          },
        ],
      },
      {
        type: "list",
        heading: "LED Retrofits Cut Your Power Bill",
        intro: "LED fixtures use much less power than older lamps. They also last longer. That reduces both energy cost and maintenance cost. We retrofit these systems:",
        groups: [
          {
            items: [
              "Fluorescent troffers to LED panels",
              "Metal halide high-bays to LED",
              "Incandescent and halogen cans to LED",
              "HID pole lights to LED",
            ],
          },
        ],
      },
      {
        type: "prose",
        heading: "LED Retrofits Cut Your Power Bill",
        paragraphs: [
          "Commercial retrofits often qualify for utility rebates. Ask us about current APS and SRP programs.",
        ],
      },
      {
        type: "prose",
        heading: "Recessed Lighting Installation",
        paragraphs: [
          "Recessed lights give clean, even light. Installation requires correct layout and correct spacing. We plan the layout first. Then we cut, wire, and install.",
          "We install in existing ceilings and in new construction. We add dimmers where you want them.",
        ],
      },
      {
        type: "prose",
        heading: "Landscape Lighting for Desert Homes",
        paragraphs: [
          "Desert landscaping looks best with correct lighting. We install low-voltage systems that highlight trees, walls, and paths. We use weather-rated fixtures and buried conduit. We set the timer and the transformer.",
        ],
      },
      {
        type: "faq",
        heading: "Frequently Asked Questions",
        items: [
          {
            question: "Can you replace a fixture in a high ceiling?",
            answer: "Yes. We carry the equipment for high ceilings.",
          },
          {
            question: "Do you supply the fixtures?",
            answer: "We install fixtures you buy. We can also supply them. Tell us which you prefer.",
          },
          {
            question: "Can you add lights where there is no wiring?",
            answer: "Yes. We run new circuits and install new switch locations.",
          },
          {
            question: "Do you install smart lighting?",
            answer: "Yes. We install smart switches, dimmers, and control systems.",
          },
        ],
      },
      {
        type: "prose",
        heading: "Areas We Serve",
        paragraphs: [
          "We install lighting across all of Arizona. That includes Scottsdale, Phoenix, Tucson, Flagstaff, Prescott, Sedona, and Yuma.",
        ],
      },
      {
        type: "prose",
        heading: "Free Site Visits in the Phoenix Metro Area",
        paragraphs: [
          "We give free site visits and free written estimates throughout the Phoenix metro area.",
          "Outside the metro area we charge a trip fee. The fee covers travel to your site. We tell you the exact fee before we schedule. We apply the fee to your invoice when you award us the job.",
        ],
      },
      {
        type: "cta",
        heading: "Get a Lighting Quote",
        body: "Call [PHONE] or email [EMAIL].",
      },
    ],
    related: [
      {
        label: "Remodel Electrical",
        href: "/remodel-electrical",
      },
      {
        label: "Residential Electrical",
        href: "/residential-electrical",
      },
      {
        label: "Commercial Electrical",
        href: "/commercial-electrical",
      },
    ],
  },
  {
    slug: "remodel-electrical",
    navLabel: "Remodel Electrical",
    title: "Remodel Electrician | Scottsdale, Phoenix & All Arizona",
    description: "Kitchen, bath, and whole-home remodel electrical in Scottsdale, Phoenix, Tucson, Prescott, and all of Arizona. Permits handled. Call [PHONE].",
    h1: "Remodel Electrical",
    intro: [
      "A remodel changes how a space works. The electrical system has to change with it. Numar Electric handles the electrical scope on kitchen, bath, and whole-home remodels.",
      "We hold ROC #366059. We work with homeowners, designers, and general contractors.",
    ],
    image: {
      src: "/service-remodel.jpg",
      alt: "Home remodel in progress with recessed lighting and electrical rough-in",
      objectPosition: "50% 40%",
      placement: "aside-left",
    },
    sections: [
      {
        type: "list",
        heading: "Remodel Projects We Wire",
        groups: [
          {
            items: [
              "Kitchen remodels",
              "Bathroom remodels",
              "Room additions",
              "Garage conversions",
              "Casita and guest house builds",
              "Basement and bonus room finishes",
              "Whole-home renovations",
              "Patio and outdoor living spaces",
            ],
          },
        ],
      },
      {
        type: "list",
        heading: "Kitchen Remodel Electrical",
        intro: "A modern kitchen needs more circuits than an old one. The code requires specific circuits for specific loads. Our kitchen scope covers these items:",
        groups: [
          {
            items: [
              "Two or more small appliance branch circuits",
              "A dedicated refrigerator circuit",
              "A dedicated dishwasher circuit",
              "A dedicated disposal circuit",
              "A dedicated microwave circuit",
              "Range or cooktop circuits",
              "GFCI protection at all countertop outlets",
              "Correct outlet spacing along countertops",
              "Island and peninsula outlets",
              "Under-cabinet lighting",
              "Recessed and pendant lighting",
              "Hood and vent connections",
            ],
          },
        ],
      },
      {
        type: "list",
        heading: "Bathroom Remodel Electrical",
        intro: "Bathrooms need GFCI protection and correct clearances. Our bath scope covers:",
        groups: [
          {
            items: [
              "A dedicated 20 amp bathroom circuit",
              "GFCI protection at all outlets",
              "Vanity lighting",
              "Shower and tub lighting rated for wet or damp locations",
              "Exhaust fan wiring and controls",
              "Heated floor connections",
              "Correct clearances from tubs and showers",
            ],
          },
        ],
      },
      {
        type: "prose",
        heading: "We Coordinate With Your Other Trades",
        paragraphs: [
          "A remodel has a schedule. Our work fits into it. We do the rough-in before drywall. We do the trim-out after paint. We coordinate with the framer, the plumber, the HVAC crew, and the drywall crew.",
          "We show up when the schedule says to show up.",
        ],
      },
      {
        type: "list",
        heading: "Old Wiring in Remodel Work",
        intro: "Older homes hide problems inside the walls. When we open a wall, we often find:",
        groups: [
          {
            items: [
              "Cloth-insulated wiring",
              "Ungrounded circuits",
              "Aluminum branch wiring",
              "Junction boxes buried in walls",
              "Overloaded circuits",
              "Unpermitted work",
            ],
          },
        ],
      },
      {
        type: "prose",
        heading: "Old Wiring in Remodel Work",
        paragraphs: [
          "We tell you what we find. We give you a price to correct it. You decide what to do.",
        ],
      },
      {
        type: "prose",
        heading: "Permits and Inspections",
        paragraphs: [
          "Remodel electrical work requires a permit. We pull the permit. We schedule the rough inspection and the final inspection. You get a closed permit at the end.",
          "An open or missing permit creates problems when you sell the house. We close ours.",
        ],
      },
      {
        type: "faq",
        heading: "Frequently Asked Questions",
        items: [
          {
            question: "Can you work from my designer's plans?",
            answer: "Yes. Send them to [EMAIL].",
          },
          {
            question: "Do you give a fixed price?",
            answer: "Yes, for a defined scope. Hidden conditions inside walls are the exception. We quote those as we find them.",
          },
          {
            question: "When do you need to be on site?",
            answer: "We need two visits at minimum. One for rough-in before drywall. One for trim after paint.",
          },
          {
            question: "Do you provide a warranty?",
            answer: "Yes. We warranty our workmanship for [WARRANTY].",
          },
        ],
      },
      {
        type: "prose",
        heading: "Areas We Serve",
        paragraphs: [
          "We handle remodel electrical across all of Arizona. That includes Scottsdale, Phoenix, Tucson, Flagstaff, Prescott, Sedona, and Yuma.",
        ],
      },
      {
        type: "prose",
        heading: "Free Site Visits in the Phoenix Metro Area",
        paragraphs: [
          "We give free site visits and free written estimates throughout the Phoenix metro area.",
          "Outside the metro area we charge a trip fee. The fee covers travel to your site. We tell you the exact fee before we schedule. We apply the fee to your invoice when you award us the job.",
        ],
      },
      {
        type: "cta",
        heading: "Start Your Remodel",
        body: "Call [PHONE] or email [EMAIL].",
      },
    ],
    related: [
      {
        label: "Lighting Installation",
        href: "/lighting-installation",
      },
      {
        label: "Service & Panel Upgrades",
        href: "/electrical-service-panel-upgrades",
      },
      {
        label: "Residential Electrical",
        href: "/residential-electrical",
      },
    ],
  },
  {
    slug: "new-construction-wiring",
    navLabel: "New Construction Wiring",
    title: "New Construction Electrical | Scottsdale & All Arizona",
    description: "New construction electrical wiring in Scottsdale, Phoenix, Tucson, Flagstaff, and all of Arizona. Custom homes, shops, commercial. Call [PHONE] to bid.",
    h1: "New Construction Wiring",
    intro: [
      "New construction gives you one chance to do the electrical right. Numar Electric wires custom homes, shops, and commercial buildings across all of Arizona.",
      "We hold ROC #366059 with a CR-11 classification. That covers commercial and residential construction.",
    ],
    image: {
      src: "/service-new-construction.jpg",
      alt: "Electrician installing new construction conduit and rough-in wiring",
      objectPosition: "50% 40%",
      placement: "aside-left",
    },
    sections: [
      {
        type: "list",
        heading: "New Construction Projects We Wire",
        groups: [
          {
            items: [
              "Custom homes",
              "Spec homes",
              "Casitas and guest houses",
              "Detached shops and workshops",
              "Garages and RV garages",
              "Barns and outbuildings",
              "Commercial ground-up builds",
              "Restaurant and retail shells",
              "Warehouse and industrial buildings",
            ],
          },
        ],
      },
      {
        type: "list",
        heading: "Our New Construction Scope",
        groups: [
          {
            title: "Temporary power",
            items: [
              "We set the temp pole so the other trades can work.",
            ],
          },
          {
            title: "Underground and slab work",
            items: [
              "We install conduit and stub-ups before the pour.",
            ],
          },
          {
            title: "Rough-in",
            items: [
              "We install all boxes, cans, conduit, and wire after framing and before insulation. We coordinate with the plumber and the HVAC crew.",
            ],
          },
          {
            title: "Service and gear",
            items: [
              "We set the panel or switchgear. We install feeders and subpanels. We coordinate the utility connection with APS or SRP.",
            ],
          },
          {
            title: "Trim-out",
            items: [
              "We install devices, fixtures, covers, and breakers after paint.",
            ],
          },
          {
            title: "Final and commissioning",
            items: [
              "We test every circuit. We label the panel. We walk the job with you.",
            ],
          },
        ],
      },
      {
        type: "list",
        heading: "We Bid From Plans",
        intro: "Send your plan set. We do a full takeoff. Our bid gives you:",
        groups: [
          {
            items: [
              "Device and fixture counts",
              "Panel and feeder schedules",
              "Conduit and wire quantities",
              "Gear and material costs",
              "Labor hours by phase",
              "A clear scope of inclusions and exclusions",
            ],
          },
        ],
      },
      {
        type: "prose",
        heading: "We Bid From Plans",
        paragraphs: [
          "You see what is in the number. You see what is out.",
        ],
      },
      {
        type: "list",
        heading: "Plan the Electrical Early",
        intro: "Change costs less on paper than in the field. Talk to us during design. We help you decide:",
        groups: [
          {
            items: [
              "Service size and future capacity",
              "Panel location and spare spaces",
              "EV charger provisions",
              "Solar and battery provisions",
              "Generator and transfer switch provisions",
              "Shop and workshop circuits",
              "Outdoor kitchen and pool provisions",
              "Data and low-voltage pathways",
            ],
          },
        ],
      },
      {
        type: "prose",
        heading: "Plan the Electrical Early",
        paragraphs: [
          "A conduit stub costs very little during construction. It costs much more later.",
        ],
      },
      {
        type: "prose",
        heading: "Shops, Garages, and Outbuildings",
        paragraphs: [
          "Detached buildings need a feeder, a subpanel, and a separate grounding electrode system. We size the feeder for the load you plan to run. We install correct equipment for welders, compressors, lifts, and dust collection.",
        ],
      },
      {
        type: "prose",
        heading: "General Contractors and Builders",
        paragraphs: [
          "We work as a subcontractor on residential and commercial builds. We hold current insurance. We provide a certificate on request. We keep the schedule.",
          "Send bid invitations to [EMAIL]. We also bid through BuildingConnected.",
        ],
      },
      {
        type: "faq",
        heading: "Frequently Asked Questions",
        items: [
          {
            question: "How early should I contact you?",
            answer: "Contact us during design. Early input saves money.",
          },
          {
            question: "Do you do design-build?",
            answer: "Yes. We can design the electrical scope and build it.",
          },
          {
            question: "Do you handle the utility connection?",
            answer: "Yes. We coordinate with APS and SRP.",
          },
          {
            question: "What areas do you build in?",
            answer: "All of Arizona. That includes the Phoenix metro area, Tucson, Flagstaff, Prescott, Sedona, Yuma, and remote sites statewide.",
          },
        ],
      },
      {
        type: "prose",
        heading: "Free Site Visits in the Phoenix Metro Area",
        paragraphs: [
          "We give free site visits and free written estimates throughout the Phoenix metro area.",
          "Outside the metro area we charge a trip fee. The fee covers travel to your site. We tell you the exact fee before we schedule. We apply the fee to your invoice when you award us the job.",
        ],
      },
      {
        type: "cta",
        heading: "Bid Your Project",
        body: "Call [PHONE] or send plans to [EMAIL].",
      },
    ],
    related: [
      {
        label: "Commercial Electrical",
        href: "/commercial-electrical",
      },
      {
        label: "Lighting Installation",
        href: "/lighting-installation",
      },
      {
        label: "Service & Panel Upgrades",
        href: "/electrical-service-panel-upgrades",
      },
    ],
  },
];

export function getServicePage(slug: string): ServicePage | undefined {
  return SERVICE_PAGES.find((page) => page.slug === slug);
}

export function getAllServiceSlugs(): string[] {
  return SERVICE_PAGES.map((page) => page.slug);
}

