import type { ServiceFaq, ServiceListGroup, ServiceSection } from "./service-pages";

export type CityPage = {
  slug: string;
  city: string;
  navLabel: string;
  title: string;
  description: string;
  h1: string;
  intro: string[];
  image: { src: string; alt: string };
  sections: ServiceSection[];
  related: { label: string; href: string }[];
};

export const CITY_PAGES: CityPage[] = [
  {
    slug: "electrician-scottsdale-az",
    city: "Scottsdale",
    navLabel: "Scottsdale",
    title: "Electrician in Scottsdale, AZ | Numar Electric",
    description:
      "Licensed electrician serving Scottsdale, AZ. Remodels, custom homes, TI, EV chargers, and lighting. ROC #366059, CR-11. Call {{PHONE}}.",
    h1: "Electrician in Scottsdale, Arizona",
    intro: [
      "Scottsdale properties ask a lot from their electrical systems—custom kitchens, outdoor living, pool equipment, and lighting that has to look intentional after dark. Numar Electric is a licensed electrical contractor (ROC #366059, CR-11) serving homeowners, builders, and commercial clients across Scottsdale and the Phoenix metro.",
      "Whether you are updating an older home near Old Town, finishing a remodel in North Scottsdale, or coordinating tenant improvement electrical for a retail suite, we focus on clear communication, clean workmanship, and code-compliant installs. Call Numar Electric at {{PHONE}} or email {{EMAIL}} to discuss your project.",
    ],
    image: {
      src: "/slideshow/slide-1-lighting.png",
      alt: "Numar Electric lighting and fixture installation work",
    },
    sections: [
      {
        type: "prose",
        heading: "Residential and Commercial Electrical Services in Scottsdale",
        paragraphs: [
          "Scottsdale’s mix of custom residences, remodel-heavy neighborhoods, and active commercial corridors means electrical work rarely looks the same twice. On the residential side, we handle [[residential electrical|/residential-electrical]] projects ranging from circuit additions to full remodel coordination. On the commercial side, our [[commercial electrical|/commercial-electrical]] work supports offices, retail spaces, and tenant improvements where schedules and inspections matter.",
          "Many Scottsdale homes combine older branch circuits with newer loads—EV charging, spa equipment, and layered lighting. We evaluate capacity, plan upgrades when needed, and coordinate permits and utility requirements as part of standard contractor practice. You get a straightforward scope, not a surprise punch list after the walls are closed.",
        ],
      },
      {
        type: "list",
        heading: "Electrical Services We Provide",
        intro:
          "Common Scottsdale projects we take on include:",
        groups: [
          {
            items: [
              "[[Residential electrical|/residential-electrical]] for homes, casitas, and outdoor living spaces",
              "[[Commercial electrical|/commercial-electrical]] and tenant improvement buildouts",
              "[[Service and panel upgrades|/electrical-service-panel-upgrades]] for remodeled and custom homes",
              "[[EV charger installation|/ev-charger-installation]] in garages and dedicated parking areas",
              "[[Troubleshooting and repairs|/electrical-troubleshooting-repairs-service-calls]] for nuisance trips and intermittent faults",
              "[[Lighting installation|/lighting-installation]] indoors, outdoors, and for landscape accents",
              "[[Remodel electrical|/remodel-electrical]] for kitchens, baths, and whole-home updates",
              "[[New construction wiring|/new-construction-wiring]] for custom builds and additions",
            ],
          },
        ],
      },
      {
        type: "prose",
        heading: "Panel Upgrades and Electrical Service Changes",
        paragraphs: [
          "Custom homes and major remodeled properties in Scottsdale often outgrow an older panel. Adding a spa, outdoor kitchen, or multiple high-draw appliances can push a 100-amp or early 200-amp setup past practical limits. Our [[electrical service and panel upgrades|/electrical-service-panel-upgrades]] work covers load evaluation, panel replacement, and service changes when the utility side of the job requires coordination.",
          "We keep the conversation practical: what your home needs now, what a remodel will add, and how to stage the work so inspection and utility steps stay organized. Clean labeling, neat gear, and a finished look that matches the rest of a high-end Scottsdale property are part of how we approach every service change.",
        ],
      },
      {
        type: "prose",
        heading: "EV Charger Installation in Scottsdale",
        paragraphs: [
          "Homeowners from Grayhawk to South Scottsdale increasingly want dedicated Level 2 charging without improvising circuits. Numar Electric installs [[EV chargers|/ev-charger-installation]] with proper circuit design, clean cable routing, and permit-ready work. We check panel capacity first so the charger does not create ongoing breaker issues.",
          "Garage layouts vary widely in Scottsdale—especially on custom lots with detached structures or shared parking. We plan mounting location, conduit path, and disconnect requirements so the finished install looks intentional and meets code.",
        ],
      },
      {
        type: "prose",
        heading: "Electrical Troubleshooting and Repairs",
        paragraphs: [
          "Flickering landscape lights, warm outlets near outdoor kitchens, or breakers that trip when the spa and AC run together are common calls in Scottsdale. Our [[troubleshooting and repair|/electrical-troubleshooting-repairs-service-calls]] work starts with diagnosis—finding the failed connection, overloaded circuit, or aging device—then correcting it cleanly.",
          "We explain what we find in plain language so you can decide on a repair now versus a broader upgrade if the system is showing its age. For remodel-prone neighborhoods, that honesty matters before you invest in finish work.",
        ],
      },
      {
        type: "prose",
        heading: "Lighting, Remodels, and New Construction",
        paragraphs: [
          "Scottsdale remodels often revolve around lighting: recessed layouts, dimming scenes, patio and pool lighting, and accent circuits that need careful switching. We provide [[lighting installation|/lighting-installation]] alongside [[remodel electrical|/remodel-electrical]] so fixture plans, switch locations, and load calculations stay aligned with the rest of the project.",
          "For custom homes and additions, [[new construction wiring|/new-construction-wiring]] covers rough-in through trim. We coordinate with builders and designers when schedules require it, and we keep workmanship tidy—because unfinished electrical details show up fast in open-plan Scottsdale interiors.",
        ],
      },
      {
        type: "prose",
        heading: "Why Choose Numar Electric",
        paragraphs: [
          "Numar Electric is licensed under ROC #366059 with a CR-11 classification for electrical contracting. We are licensed and insured, and we work on both residential and commercial projects across Arizona with a Phoenix metro focus.",
          "Clients hire us for clear communication from estimate through inspection, clean workmanship on panels and finishes, and a code-focused approach to every install. Our workmanship warranty covers the work we perform—ask us for details when we scope your job.",
        ],
      },
      {
        type: "prose",
        heading: "Neighborhoods and Areas We Serve",
        paragraphs: [
          "We regularly work throughout Scottsdale, including Old Town, North Scottsdale, McCormick Ranch, Gainey Ranch, DC Ranch, Grayhawk, Troon, and South Scottsdale. From hillside custom homes to established ranch communities and downtown commercial suites, the electrical needs shift with the property type.",
          "If your project sits just outside these areas but still in the Scottsdale corridor, reach out with the address and scope. We will tell you whether we are a fit and what the next step looks like.",
        ],
      },
      {
        type: "faq",
        heading: "Frequently Asked Questions",
        items: [
          {
            question: "Do you handle electrical for Scottsdale custom home remodels?",
            answer:
              "Yes. Remodel electrical is a core part of our Scottsdale work—kitchens, outdoor living, lighting plans, and related circuit upgrades. We coordinate with your GC or work directly with homeowners depending on how the project is organized.",
          },
          {
            question: "Can you install an EV charger if my Scottsdale panel is older?",
            answer:
              "Often yes, but we evaluate capacity first. Some homes need a panel or service upgrade before a Level 2 charger is practical. We explain options before any work starts.",
          },
          {
            question: "Do you work on pool and spa electrical in Scottsdale?",
            answer:
              "We handle pool and spa related electrical work as part of residential projects, including circuits and bonding coordination typical for Arizona outdoor living. Scope depends on the equipment and existing system.",
          },
          {
            question: "Will you coordinate permits for a Scottsdale electrical project?",
            answer:
              "Permit and inspection coordination is part of how we run contractor work when the job requires it. We outline what applies when we review your scope.",
          },
        ],
      },
      {
        type: "cta",
        heading: "Request an Electrical Estimate in Scottsdale",
        body: "Tell us about your Scottsdale project—remodel, panel work, EV charger, lighting, or commercial TI. Call {{PHONE}}, email {{EMAIL}}, or use our [[contact form|/#contact]].",
      },
    ],
    related: [
      { label: "Residential Electrical Services", href: "/residential-electrical" },
      { label: "Commercial & Tenant Improvement Electrical", href: "/commercial-electrical" },
      { label: "Panel and Service Upgrades", href: "/electrical-service-panel-upgrades" },
      { label: "EV Charger Installation", href: "/ev-charger-installation" },
      { label: "Remodel Electrical", href: "/remodel-electrical" },
      { label: "Lighting Installation", href: "/lighting-installation" },
    ],
  },
  {
    slug: "electrician-phoenix-az",
    city: "Phoenix",
    navLabel: "Phoenix",
    title: "Phoenix Electrician | Licensed Electrical Contractor",
    description:
      "Phoenix electrician for older homes, panels, rewiring, remodels, and commercial TI. Licensed ROC #366059. Residential and commercial across the metro.",
    h1: "Electrician in Phoenix, Arizona",
    intro: [
      "Phoenix is a city of electrical contrasts: mid-century homes with original panels, downtown commercial buildouts, and new construction pushing into every corridor. Numar Electric serves Phoenix as a licensed electrical contractor—ROC #366059, CR-11—working residential and commercial jobs with the same standards for communication and workmanship.",
      "From Arcadia remodels to central Phoenix service upgrades and tenant improvements near Roosevelt Row, we help property owners solve real capacity and safety problems. Reach Numar Electric at {{PHONE}} or {{EMAIL}} to start a conversation about your scope.",
    ],
    image: {
      src: "/slideshow/slide-2-commercial.png",
      alt: "Numar Electric commercial electrical conduit and panel work",
    },
    sections: [
      {
        type: "prose",
        heading: "Residential and Commercial Electrical Services in Phoenix",
        paragraphs: [
          "Older Phoenix neighborhoods often need careful evaluation before a remodel or addition. Knob-and-tube is uncommon, but undersized services, shared neutrals, and overloaded panels show up regularly. Our [[residential electrical|/residential-electrical]] team addresses rewiring needs, circuit additions, and whole-home updates while keeping disruption realistic for occupied houses.",
          "On the commercial side, Phoenix offices, retail spaces, and restaurants rely on predictable [[commercial electrical|/commercial-electrical]] work—especially for TI schedules. We coordinate with general contractors, keep job sites clean, and plan feeder and branch work so inspections do not stall the rest of the build.",
        ],
      },
      {
        type: "list",
        heading: "Electrical Services We Provide",
        intro: "Phoenix projects we commonly support:",
        groups: [
          {
            items: [
              "[[Residential electrical|/residential-electrical]] for rewiring, circuits, and home upgrades",
              "[[Commercial electrical|/commercial-electrical]] for offices, retail, and TI",
              "[[Panel upgrades|/electrical-service-panel-upgrades]] and utility service changes",
              "[[EV charger installation|/ev-charger-installation]] for homes and select commercial sites",
              "[[Service calls and repairs|/electrical-troubleshooting-repairs-service-calls]] across Phoenix neighborhoods",
              "[[Lighting installation|/lighting-installation]] for interiors and exterior spaces",
              "[[Remodel electrical|/remodel-electrical]] for kitchens, additions, and whole-home updates",
              "[[New construction wiring|/new-construction-wiring]] for homes and commercial buildouts",
            ],
          },
        ],
      },
      {
        type: "prose",
        heading: "Panel Upgrades and Electrical Service Changes",
        paragraphs: [
          "Many Phoenix homes still run on panels that were adequate decades ago but struggle with modern AC, kitchen loads, and home offices. [[Electrical service panel upgrades|/electrical-service-panel-upgrades]] give you room for remodel circuits and safer overcurrent protection. When a service change is required, we coordinate with the utility—APS or SRP, depending on your address—as part of normal project workflow.",
          "We do not treat a panel swap as a mystery quote. You get a clear explanation of what is changing, why it matters for your loads, and how permitting and inspection typically sequence in Phoenix.",
        ],
      },
      {
        type: "prose",
        heading: "EV Charger Installation in Phoenix",
        paragraphs: [
          "Commuters across North Phoenix, Ahwatukee, and central neighborhoods often want garage charging that does not rely on a shared dryer circuit. We install [[EV chargers|/ev-charger-installation]] with dedicated circuits, correct breaker sizing, and clean routing through finished or unfinished garages.",
          "If your panel cannot support a new Level 2 circuit, we discuss upgrade paths before committing to a charger location. That sequence protects both the install and the rest of your home’s electrical system.",
        ],
      },
      {
        type: "prose",
        heading: "Electrical Troubleshooting and Repairs",
        paragraphs: [
          "Phoenix heat and age take a toll on connections, breakers, and outdoor equipment circuits. Our [[troubleshooting and repair service|/electrical-troubleshooting-repairs-service-calls]] focuses on finding the fault—loose neutrals, failing GFCI devices, overloaded multi-wire branches—rather than swapping parts blindly.",
          "For landlords and homeowners planning a sale or remodel, documenting what we find helps you prioritize safety fixes versus cosmetic electrical updates.",
        ],
      },
      {
        type: "prose",
        heading: "Lighting, Remodels, and New Construction",
        paragraphs: [
          "Phoenix remodels frequently expand kitchens into open living areas and add outdoor rooms that need dedicated power and lighting. We support [[remodel electrical|/remodel-electrical]] and [[lighting installation|/lighting-installation]] so switch legs, dimmers, and exterior circuits are planned before drywall closes.",
          "When you are building new or adding square footage, [[new construction wiring|/new-construction-wiring]] covers rough-in, device placement, and finish. Whether the project is a Biltmore-area addition or a Desert Ridge commercial shell, we keep the electrical package organized for inspection.",
        ],
      },
      {
        type: "prose",
        heading: "Why Choose Numar Electric",
        paragraphs: [
          "We are a licensed and insured Arizona electrical contractor, ROC #366059, CR-11 classification. Our work spans residential and commercial projects throughout the Phoenix metro and across the state when the job calls for it.",
          "Expect clear communication, clean workmanship, and a code-focused process. Our workmanship warranty applies to the work we install—ask about coverage when we prepare your estimate.",
        ],
      },
      {
        type: "prose",
        heading: "Neighborhoods and Areas We Serve",
        paragraphs: [
          "Numar Electric serves Phoenix neighborhoods including Arcadia, Biltmore, Downtown Phoenix, North Phoenix, Ahwatukee, Desert Ridge, Central Phoenix, and Roosevelt Row. Housing stock ranges from historic and mid-century residences to newer planned communities and dense commercial corridors.",
          "Utility territory can split across APS and SRP within the city. We account for that when planning service work and will confirm requirements against your specific address.",
        ],
      },
      {
        type: "faq",
        heading: "Frequently Asked Questions",
        items: [
          {
            question: "Can you rewire part of an older Phoenix home without opening every wall?",
            answer:
              "Sometimes. Partial rewiring and targeted circuit upgrades are common when a full gut remodel is not planned. We assess access, load needs, and safety priorities, then recommend the least-disruptive approach that still meets code.",
          },
          {
            question: "Do you coordinate with APS or SRP on Phoenix service upgrades?",
            answer:
              "Yes. Utility coordination is a normal part of service-change work. Which utility applies depends on your address, and we plan the project steps accordingly.",
          },
          {
            question: "Do you take commercial TI electrical jobs in downtown Phoenix?",
            answer:
              "We do commercial and tenant improvement electrical for offices, retail, and similar spaces. Send plans or a scope description to {{EMAIL}} and we will review fit and timing.",
          },
          {
            question: "What should I prepare before requesting a Phoenix electrical estimate?",
            answer:
              "A short description of the problem or remodel goals, photos of your panel if relevant, and your address help us respond with useful next steps. Call {{PHONE}} if you prefer to talk it through.",
          },
        ],
      },
      {
        type: "cta",
        heading: "Request an Electrical Estimate in Phoenix",
        body: "Whether you need a panel upgrade, remodel wiring, commercial TI, or a repair diagnosis, contact Numar Electric at {{PHONE}}, {{EMAIL}}, or through our [[contact page|/#contact]].",
      },
    ],
    related: [
      { label: "Panel Upgrades for Phoenix Homes", href: "/electrical-service-panel-upgrades" },
      { label: "Residential Electrical & Rewiring", href: "/residential-electrical" },
      { label: "Commercial Electrical & TI", href: "/commercial-electrical" },
      { label: "Troubleshooting & Service Calls", href: "/electrical-troubleshooting-repairs-service-calls" },
      { label: "Remodel Electrical Support", href: "/remodel-electrical" },
      { label: "New Construction Wiring", href: "/new-construction-wiring" },
    ],
  },
  {
    slug: "electrician-tempe-az",
    city: "Tempe",
    navLabel: "Tempe",
    title: "Electrician in Tempe, AZ | Numar Electric",
    description:
      "Tempe electrician for older homes, rentals, multifamily, restaurants, and office buildouts. Licensed & insured. ROC #366059. Call {{PHONE}}.",
    h1: "Electrician in Tempe, Arizona",
    intro: [
      "Tempe packs a wide range of electrical needs into a compact city: older bungalows near Maple-Ash, rental and multifamily properties, restaurant and retail corridors, and office suites that turn over with every lease cycle. Numar Electric is the licensed electrical contractor (ROC #366059, CR-11) many property owners call when they need residential or commercial work done cleanly and communicated clearly.",
      "We are based in the Phoenix metro and serve Tempe without claiming affiliation with any campus or institution—just practical electrical contracting for homes and businesses. Call {{PHONE}} or email {{EMAIL}} to describe your project.",
    ],
    image: {
      src: "/slideshow/slide-3-team.png",
      alt: "Numar Electric team performing electrical installation",
    },
    sections: [
      {
        type: "prose",
        heading: "Residential and Commercial Electrical Services in Tempe",
        paragraphs: [
          "Tempe’s older housing stock and active rental market create steady demand for safe, code-minded electrical updates. Landlords often need outlet replacements, panel corrections, and lighting refreshes between tenants. Homeowners in Broadmor and North Tempe frequently combine [[residential electrical|/residential-electrical]] repairs with remodel work as kitchens and baths get updated.",
          "Commercially, Tempe’s restaurants, storefronts, and professional offices need [[commercial electrical|/commercial-electrical]] support for buildouts, equipment circuits, and lighting changes that fit lease timelines. We work from plans when available and from a clear written scope when the project is smaller.",
        ],
      },
      {
        type: "list",
        heading: "Electrical Services We Provide",
        intro: "Services Tempe clients request most often:",
        groups: [
          {
            items: [
              "[[Residential electrical|/residential-electrical]] for homes, rentals, and small multifamily updates",
              "[[Commercial electrical|/commercial-electrical]] for restaurants, offices, and retail TI",
              "[[Panel and service upgrades|/electrical-service-panel-upgrades]] for aging Tempe properties",
              "[[EV charger installation|/ev-charger-installation]] where panel capacity allows",
              "[[Troubleshooting and repairs|/electrical-troubleshooting-repairs-service-calls]] for breakers, outlets, and lighting faults",
              "[[Lighting installation|/lighting-installation]] for interiors, patios, and storefronts",
              "[[Remodel electrical|/remodel-electrical]] for kitchen and bath updates",
              "[[New construction wiring|/new-construction-wiring]] for additions and selected new builds",
            ],
          },
        ],
      },
      {
        type: "prose",
        heading: "Panel Upgrades and Electrical Service Changes",
        paragraphs: [
          "Many Tempe homes and small commercial spaces still carry panels that were never designed for today’s plug loads—window units replaced by central AC, kitchen appliances stacked on shared circuits, and added laundry or workshop gear. [[Service and panel upgrades|/electrical-service-panel-upgrades]] create headroom and improve overcurrent protection.",
          "When a service change involves the utility, we treat permit and coordination steps as part of the job plan. You will know what depends on inspection timing versus what we can complete on our schedule.",
        ],
      },
      {
        type: "prose",
        heading: "EV Charger Installation in Tempe",
        paragraphs: [
          "Garage parking is common across South Tempe and Warner Ranch, and dedicated charging is a frequent upgrade for residents who drive electric. Our [[EV charger installation|/ev-charger-installation]] work includes circuit design, mounting, and permit-ready detailing.",
          "Townhome and condo situations can be more constrained. We review access, panel location, and any HOA or property-manager requirements you share before recommending a path forward.",
        ],
      },
      {
        type: "prose",
        heading: "Electrical Troubleshooting and Repairs",
        paragraphs: [
          "Rental turnovers and older branch wiring mean Tempe properties see a lot of intermittent issues: dead outlets after tenant changes, GFCI devices that will not reset, and lighting circuits that fail under load. [[Electrical troubleshooting and repairs|/electrical-troubleshooting-repairs-service-calls]] is how we get those systems stable again.",
          "We document findings when that helps a property manager prioritize repairs across units, and we keep the work area tidy in occupied homes and businesses.",
        ],
      },
      {
        type: "prose",
        heading: "Lighting, Remodels, and New Construction",
        paragraphs: [
          "Tempe remodels often balance budget with livability—better kitchen lighting, added circuits for appliances, and exterior lighting for alley or patio access. We provide [[lighting installation|/lighting-installation]] and [[remodel electrical|/remodel-electrical]] that matches the scale of the project rather than forcing a full-home scope.",
          "For additions and new structures, [[new construction wiring|/new-construction-wiring]] covers rough-in and finish. Commercial buildouts follow the same discipline: labeled circuits, clean terminations, and inspection readiness.",
        ],
      },
      {
        type: "prose",
        heading: "Why Choose Numar Electric",
        paragraphs: [
          "Licensed ROC #366059, CR-11. Licensed and insured. Residential and commercial. Those credentials matter in a city where landlords, GCs, and homeowners all need a contractor who shows up prepared.",
          "We emphasize clear communication, clean workmanship, and code-focused installs. Our workmanship warranty covers the electrical work we perform—confirm terms when we scope your Tempe project.",
        ],
      },
      {
        type: "prose",
        heading: "Neighborhoods and Areas We Serve",
        paragraphs: [
          "We serve Downtown Tempe, South Tempe, North Tempe, Maple-Ash, Broadmor, Warner Ranch, and surrounding neighborhoods in the ASU-area corridor—without any institutional affiliation. The mix of student-adjacent rentals, long-term owner-occupied homes, and commercial storefronts shapes how we schedule and communicate on each job.",
          "If your Tempe property sits near city borders with Mesa, Chandler, or Phoenix, include the address when you contact us so we can confirm service coverage.",
        ],
      },
      {
        type: "faq",
        heading: "Frequently Asked Questions",
        items: [
          {
            question: "Do you work on Tempe rental and small multifamily electrical issues?",
            answer:
              "Yes. We handle repairs, lighting updates, panel corrections, and related residential electrical work for rental properties. Property managers can email scope details to {{EMAIL}}.",
          },
          {
            question: "Can you support restaurant or retail electrical buildouts in Tempe?",
            answer:
              "Commercial buildouts and TI electrical are part of our commercial services. Kitchen equipment circuits, lighting, and panel work are common scopes—send plans when you have them.",
          },
          {
            question: "My Tempe home’s breakers trip when multiple appliances run. What next?",
            answer:
              "That often points to overloaded circuits or an undersized panel for current use. We diagnose the issue through a service call and recommend repair or upgrade options based on what we find.",
          },
          {
            question: "Do you need access during business hours for a Tempe commercial repair?",
            answer:
              "We schedule around how your business operates when possible. Share preferred windows when you request service so we can plan accordingly.",
          },
        ],
      },
      {
        type: "cta",
        heading: "Request an Electrical Estimate in Tempe",
        body: "Share your Tempe address and project details with Numar Electric. Call {{PHONE}}, write {{EMAIL}}, or visit [[contact form|/#contact]] to request an estimate.",
      },
    ],
    related: [
      { label: "Commercial Electrical Buildouts", href: "/commercial-electrical" },
      { label: "Residential Electrical Services", href: "/residential-electrical" },
      { label: "Troubleshooting & Repairs", href: "/electrical-troubleshooting-repairs-service-calls" },
      { label: "Remodel Electrical", href: "/remodel-electrical" },
      { label: "Panel Upgrades", href: "/electrical-service-panel-upgrades" },
    ],
  },
  {
    slug: "electrician-mesa-az",
    city: "Mesa",
    navLabel: "Mesa",
    title: "Mesa, AZ Electrician | Numar Electric ROC #366059",
    description:
      "Electrician in Mesa, Arizona for panels, pools, garages, EV chargers, remodels, and commercial work. Established and new communities. Call {{PHONE}}.",
    h1: "Electrician in Mesa, Arizona",
    intro: [
      "Mesa stretches from established ranch neighborhoods to fast-growing communities like Eastmark, and the electrical work follows that range. Numar Electric serves Mesa homeowners and businesses as a licensed CR-11 contractor under ROC #366059—covering residential upgrades, commercial projects, and the practical jobs that keep Arizona properties usable: panels, garages, workshops, and outdoor living power.",
      "If you need an electrician who will walk through capacity, permitting steps, and finish quality without overselling, contact us at {{PHONE}} or {{EMAIL}}.",
    ],
    image: {
      src: "/slideshow/slide-4-fleet.png",
      alt: "Numar Electric service vehicles ready for Arizona electrical projects",
    },
    sections: [
      {
        type: "prose",
        heading: "Residential and Commercial Electrical Services in Mesa",
        paragraphs: [
          "In older Mesa neighborhoods, panels and branch circuits often need attention before a kitchen remodel or workshop addition. In newer communities, homeowners more often add EV charging, pool equipment circuits, and garage shop power on top of an otherwise modern service. Our [[residential electrical|/residential-electrical]] work covers both ends of that spectrum.",
          "Mesa’s commercial corridors and business parks call for [[commercial electrical|/commercial-electrical]] support—tenant improvements, lighting refreshes, and equipment connections. We keep communication clear with owners and GCs so schedules stay realistic.",
        ],
      },
      {
        type: "list",
        heading: "Electrical Services We Provide",
        intro: "Mesa electrical work we regularly perform:",
        groups: [
          {
            items: [
              "[[Residential electrical|/residential-electrical]] for homes, garages, and workshops",
              "[[Commercial electrical|/commercial-electrical]] for offices, retail, and light commercial spaces",
              "[[Electrical service panel upgrades|/electrical-service-panel-upgrades]] for growing household loads",
              "[[EV charger installation|/ev-charger-installation]] in attached and detached garages",
              "[[Troubleshooting and repairs|/electrical-troubleshooting-repairs-service-calls]] for everyday electrical faults",
              "[[Lighting installation|/lighting-installation]] indoors and for outdoor living areas",
              "[[Remodel electrical|/remodel-electrical]] for kitchens, baths, and room additions",
              "[[New construction wiring|/new-construction-wiring]] in growing Mesa communities",
            ],
          },
        ],
      },
      {
        type: "prose",
        heading: "Panel Upgrades and Electrical Service Changes",
        paragraphs: [
          "Adding a pool, converting a garage into a workshop, or stacking EV charging on an older Mesa panel is a common path to a service upgrade. We perform [[panel upgrades|/electrical-service-panel-upgrades]] with load calculations, neat gear installation, and coordination for utility and permit steps when required.",
          "Homeowners in Red Mountain Ranch and Alta Mesa often want the upgrade to look finished—not just functional. We treat labeling, cover fit, and workmanship as part of the deliverable.",
        ],
      },
      {
        type: "prose",
        heading: "EV Charger Installation in Mesa",
        paragraphs: [
          "Eastmark and other newer Mesa communities see strong interest in Level 2 home charging. [[EV charger installation|/ev-charger-installation]] from Numar Electric includes verifying panel capacity, selecting a practical mounting location, and completing a clean, inspectable install.",
          "If your garage is detached or the run from the panel is long, we plan conduit routing carefully so the finished path is durable and code-compliant.",
        ],
      },
      {
        type: "prose",
        heading: "Electrical Troubleshooting and Repairs",
        paragraphs: [
          "Pool timers that fail after monsoon season, workshop tools that trip a shared circuit, and outdoor receptacles that lose power are typical Mesa service calls. Our [[troubleshooting and repair|/electrical-troubleshooting-repairs-service-calls]] process isolates the fault and corrects it without unnecessary replacement.",
          "When a repair reveals a broader capacity problem, we explain that clearly so you can plan a panel or circuit upgrade on your timeline.",
        ],
      },
      {
        type: "prose",
        heading: "Lighting, Remodels, and New Construction",
        paragraphs: [
          "Mesa outdoor living—patios, pools, and yard workshops—depends on thoughtful lighting and dedicated power. We handle [[lighting installation|/lighting-installation]] alongside [[remodel electrical|/remodel-electrical]] when interiors and exteriors are updated together.",
          "In developing areas of Mesa, [[new construction wiring|/new-construction-wiring]] supports builders and owners who need consistent rough-in quality and a clean finish. Downtown Mesa commercial refreshes get the same attention to detail.",
        ],
      },
      {
        type: "prose",
        heading: "Why Choose Numar Electric",
        paragraphs: [
          "Numar Electric is licensed and insured in Arizona, holding ROC #366059 with a CR-11 electrical classification. We work residential and commercial projects with a Phoenix metro focus that includes Mesa’s established and new communities.",
          "Clear communication, clean workmanship, and code-focused installs are how we operate. Ask about our workmanship warranty when we review your scope.",
        ],
      },
      {
        type: "prose",
        heading: "Neighborhoods and Areas We Serve",
        paragraphs: [
          "We serve Mesa areas including Eastmark, Las Sendas, Red Mountain Ranch, Dobson Ranch, Alta Mesa, Downtown Mesa, and Northeast Mesa. Each area brings different housing ages and commercial patterns—from ranch-style homes to newer master-planned streets.",
          "Large-lot properties and garage workshop builds are common east of the city core; downtown and central Mesa more often need updates to existing systems. Tell us your neighborhood and goals when you reach out.",
        ],
      },
      {
        type: "faq",
        heading: "Frequently Asked Questions",
        items: [
          {
            question: "Can you add power for a Mesa garage workshop or detached structure?",
            answer:
              "Yes. Garage and workshop circuits, subpanels, and related residential electrical work are common Mesa projects. We size the feed based on the tools and equipment you plan to run.",
          },
          {
            question: "Do you handle pool-related electrical work in Mesa?",
            answer:
              "We perform pool and spa related electrical work as part of residential projects, including equipment circuits and associated safety requirements typical for Arizona installs. Exact scope depends on your equipment and existing system.",
          },
          {
            question: "Is a panel upgrade required before an EV charger in Eastmark?",
            answer:
              "Not always. Newer homes sometimes have capacity; others do not once you add charging on top of existing loads. We verify before recommending a charger circuit or a panel upgrade.",
          },
          {
            question: "Do you take commercial electrical work in Mesa business parks?",
            answer:
              "Yes. Commercial electrical and TI-style scopes are part of our services. Call {{PHONE}} with the site address and a short description of the work.",
          },
          {
            question: "How do I start an estimate for a Mesa remodel’s electrical?",
            answer:
              "Share remodel plans or a room-by-room list of electrical changes. Photos of the panel help. Email {{EMAIL}} or use our [[contact form|/#contact]].",
          },
        ],
      },
      {
        type: "cta",
        heading: "Request an Electrical Estimate in Mesa",
        body: "Ready to talk through a Mesa electrical project? Contact Numar Electric at {{PHONE}} or {{EMAIL}}, or request a callback through [[contact form|/#contact]].",
      },
    ],
    related: [
      { label: "EV Charger Installation", href: "/ev-charger-installation" },
      { label: "Panel & Service Upgrades", href: "/electrical-service-panel-upgrades" },
      { label: "Residential Electrical", href: "/residential-electrical" },
      { label: "Lighting Installation", href: "/lighting-installation" },
      { label: "New Construction Wiring", href: "/new-construction-wiring" },
      { label: "Commercial Electrical", href: "/commercial-electrical" },
    ],
  },
  {
    slug: "electrician-chandler-az",
    city: "Chandler",
    navLabel: "Chandler",
    title: "Electrician in Chandler, Arizona | Numar Electric",
    description:
      "Chandler electrician for newer homes, tech/office TI, EV chargers, lighting, and service upgrades. Licensed CR-11 contractor. Email {{EMAIL}}.",
    h1: "Electrician in Chandler, Arizona",
    intro: [
      "Chandler’s neighborhoods and employment corridors create a different electrical profile than older East Valley cities: newer homes with growing accessory loads, office and tech-adjacent tenant improvements, and homeowners who want lighting and EV charging finished to a high standard. Numar Electric provides licensed residential and commercial electrical contracting (ROC #366059, CR-11) throughout Chandler.",
      "From Ocotillo remodels to downtown commercial suites and South Chandler service upgrades, we keep scopes clear and workmanship clean. Reach us at {{PHONE}} or {{EMAIL}}.",
    ],
    image: {
      src: "/commercial-electrical-work.png",
      alt: "Numar Electric residential electrical panel installation",
    },
    sections: [
      {
        type: "prose",
        heading: "Residential and Commercial Electrical Services in Chandler",
        paragraphs: [
          "Even in newer Chandler homes, electrical systems get pressed by home offices, EV charging, outdoor kitchens, and lighting upgrades that were never in the original builder package. [[Residential electrical|/residential-electrical]] work here often means thoughtful additions rather than full rewires—though older pockets of the city still need deeper updates.",
          "Chandler’s office and commercial spaces turn over regularly. Our [[commercial electrical|/commercial-electrical]] services support TI lighting, power distribution changes, and equipment circuits that have to meet inspection on a lease-driven schedule.",
        ],
      },
      {
        type: "list",
        heading: "Electrical Services We Provide",
        intro: "Chandler services we deliver:",
        groups: [
          {
            items: [
              "[[Residential electrical|/residential-electrical]] for homes across Chandler’s growth areas",
              "[[Commercial electrical|/commercial-electrical]] and office/retail TI",
              "[[Service panel upgrades|/electrical-service-panel-upgrades]] when loads outgrow the existing gear",
              "[[EV charger installation|/ev-charger-installation]] with clean garage routing",
              "[[Troubleshooting and repairs|/electrical-troubleshooting-repairs-service-calls]] for homes and businesses",
              "[[Lighting installation|/lighting-installation]] including dimming and exterior accents",
              "[[Remodel electrical|/remodel-electrical]] for kitchens, baths, and open-concept updates",
              "[[New construction wiring|/new-construction-wiring]] for additions and select new builds",
            ],
          },
        ],
      },
      {
        type: "prose",
        heading: "Panel Upgrades and Electrical Service Changes",
        paragraphs: [
          "Chandler homeowners often assume a newer panel means unlimited capacity. In practice, builder panels can fill up quickly once you add a charger, spa, or workshop circuit. [[Electrical service panel upgrades|/electrical-service-panel-upgrades]] restore practical headroom and modernize protection devices where needed.",
          "We walk through load needs in plain language and outline permit and utility coordination when a service change is part of the plan—standard contractor practice, not an afterthought.",
        ],
      },
      {
        type: "prose",
        heading: "EV Charger Installation in Chandler",
        paragraphs: [
          "Fulton Ranch, Sun Groves, and West Chandler neighborhoods see steady demand for dedicated charging. Numar Electric’s [[EV charger installation|/ev-charger-installation]] focuses on correct circuit design, neat conduit or cable paths, and an install that passes inspection without rework.",
          "If your panel schedule is already tight, we discuss upgrade options before locking a charger location on the wall.",
        ],
      },
      {
        type: "prose",
        heading: "Electrical Troubleshooting and Repairs",
        paragraphs: [
          "Even newer Chandler homes develop issues: AFCI nuisance trips, failed dimmers on LED loads, and outdoor circuits that degrade under heat. [[Troubleshooting and repairs|/electrical-troubleshooting-repairs-service-calls]] start with diagnosis so repairs address the cause.",
          "Commercial sites often need after-hours or carefully timed access. Tell us how your space operates and we will schedule within workable windows when possible.",
        ],
      },
      {
        type: "prose",
        heading: "Lighting, Remodels, and New Construction",
        paragraphs: [
          "Chandler remodel trends lean toward brighter kitchens, layered living-room lighting, and patio entertainment circuits. We provide [[lighting installation|/lighting-installation]] and [[remodel electrical|/remodel-electrical]] that respects finish schedules and keeps device placement intentional.",
          "For additions and new construction packages, [[new construction wiring|/new-construction-wiring]] covers rough-in through trim with the clean labeling and workmanship we bring to every Phoenix metro job.",
        ],
      },
      {
        type: "prose",
        heading: "Why Choose Numar Electric",
        paragraphs: [
          "We are a licensed and insured electrical contractor serving Arizona with ROC #366059 and a CR-11 classification. Residential and commercial work both sit inside our scope, with a strong Phoenix metro presence that includes Chandler.",
          "Clients choose Numar Electric for clear communication, clean workmanship, and a code-focused approach. Our workmanship warranty covers the work we install—ask us to confirm details with your estimate.",
        ],
      },
      {
        type: "prose",
        heading: "Neighborhoods and Areas We Serve",
        paragraphs: [
          "We work throughout Chandler, including Downtown Chandler, Ocotillo, Fulton Ranch, Sun Groves, South Chandler, West Chandler, and North Chandler. Tech and office corridors sit alongside master-planned residential streets, so project types shift quickly from home upgrades to TI electrical.",
          "If you are near the Chandler borders with Gilbert, Tempe, or Ahwatukee, include your address when contacting us so we can confirm coverage and logistics.",
        ],
      },
      {
        type: "faq",
        heading: "Frequently Asked Questions",
        items: [
          {
            question: "Do you handle office tenant improvement electrical in Chandler?",
            answer:
              "Yes. Lighting, power, and related TI electrical are part of our commercial services. Plans or a marked-up floor plan help us estimate accurately.",
          },
          {
            question: "Can you upgrade lighting in a Chandler home without a full remodel?",
            answer:
              "Often yes. Recessed lighting additions, fixture swaps, and dimmer updates are common standalone projects. We review access and circuit capacity first.",
          },
          {
            question: "What if my Chandler panel is full but I want an EV charger?",
            answer:
              "We evaluate load calculations and discuss options such as circuit reorganization or a panel upgrade. The right path depends on your existing loads and service size.",
          },
          {
            question: "Are you licensed for electrical work in Chandler?",
            answer:
              "Numar Electric holds Arizona ROC #366059 with a CR-11 electrical classification and is licensed and insured for the residential and commercial work we perform.",
          },
        ],
      },
      {
        type: "cta",
        heading: "Request an Electrical Estimate in Chandler",
        body: "Describe your Chandler electrical project—home upgrade, TI, lighting, or EV charging—and we will outline next steps. Call {{PHONE}}, email {{EMAIL}}, or use [[contact|/#contact]].",
      },
    ],
    related: [
      { label: "Commercial Electrical & TI", href: "/commercial-electrical" },
      { label: "EV Charger Installation", href: "/ev-charger-installation" },
      { label: "Lighting Installation", href: "/lighting-installation" },
      { label: "Panel Upgrades", href: "/electrical-service-panel-upgrades" },
      { label: "Remodel Electrical", href: "/remodel-electrical" },
    ],
  },
  {
    slug: "electrician-gilbert-az",
    city: "Gilbert",
    navLabel: "Gilbert",
    title: "Gilbert Electrician | Residential & Commercial",
    description:
      "Gilbert, AZ electrician for newer homes, remodels, pools, outdoor living, EV chargers, and lighting. Licensed ROC #366059. Call Numar Electric.",
    h1: "Electrician in Gilbert, Arizona",
    intro: [
      "Gilbert’s master-planned neighborhoods and active remodel market put pressure on electrical systems that looked complete on closing day. Outdoor kitchens, pool equipment, casitas, and EV charging all compete for panel space. Numar Electric serves Gilbert as a licensed electrical contractor—ROC #366059, CR-11—focused on residential upgrades and commercial work with clear communication and clean finishes.",
      "Whether you are updating a home in Agritopia or adding power for a detached shop in East Gilbert, call {{PHONE}} or email {{EMAIL}} to talk through the scope.",
    ],
    image: {
      src: "/slideshow/slide-1-lighting.png",
      alt: "Numar Electric interior and exterior lighting installation",
    },
    sections: [
      {
        type: "prose",
        heading: "Residential and Commercial Electrical Services in Gilbert",
        paragraphs: [
          "Gilbert homeowners frequently expand how they use their property: covered patios, pool decks, and workshop spaces that need dedicated circuits and thoughtful lighting. Our [[residential electrical|/residential-electrical]] services cover those additions along with kitchen and bath remodel wiring.",
          "Local shops, offices, and small commercial suites rely on [[commercial electrical|/commercial-electrical]] support for buildouts and lighting changes. We keep job sites organized and scopes written so owners and managers know what is included.",
        ],
      },
      {
        type: "list",
        heading: "Electrical Services We Provide",
        intro: "Gilbert projects we commonly take on:",
        groups: [
          {
            items: [
              "[[Residential electrical|/residential-electrical]] for homes, casitas, and outdoor living",
              "[[Commercial electrical|/commercial-electrical]] for shops and office suites",
              "[[Panel upgrades|/electrical-service-panel-upgrades]] for growing household and outdoor loads",
              "[[EV charger installation|/ev-charger-installation]] in Gilbert garages",
              "[[Troubleshooting and repairs|/electrical-troubleshooting-repairs-service-calls]] when circuits misbehave",
              "[[Lighting installation|/lighting-installation]] for interiors, patios, and landscape accents",
              "[[Remodel electrical|/remodel-electrical]] for kitchens, baths, and additions",
              "[[New construction wiring|/new-construction-wiring]] for additions and detached structures",
            ],
          },
        ],
      },
      {
        type: "prose",
        heading: "Panel Upgrades and Electrical Service Changes",
        paragraphs: [
          "Pooling outdoor entertainment loads onto a builder panel is a familiar Gilbert story. When breakers start tripping or there is no space left for a legitimate new circuit, [[electrical service panel upgrades|/electrical-service-panel-upgrades]] become the practical next step.",
          "We calculate loads, explain service-size options, and coordinate permits and utility steps when a service change is required. The goal is a panel that supports how you actually live outdoors and indoors—not just what the home shipped with.",
        ],
      },
      {
        type: "prose",
        heading: "EV Charger Installation in Gilbert",
        paragraphs: [
          "Families in Power Ranch, Morrison Ranch, and Seville often want Level 2 charging without cluttering the garage with temporary cords. [[EV charger installation|/ev-charger-installation]] from Numar Electric includes capacity checks, clean mounting, and permit-ready workmanship.",
          "If a subpanel or feeder upgrade is needed to reach a detached garage, we plan that as part of the same conversation so you are not surprised mid-project.",
        ],
      },
      {
        type: "prose",
        heading: "Electrical Troubleshooting and Repairs",
        paragraphs: [
          "Landscape lighting that flickers after rain, GFCI devices that will not hold on patio circuits, and shared garage circuits that trip under tool loads are frequent Gilbert calls. [[Electrical troubleshooting and repairs|/electrical-troubleshooting-repairs-service-calls]] isolate those problems and restore reliable operation.",
          "We prefer fixing the root cause over temporary resets. If the repair points to a larger capacity issue, we say so directly.",
        ],
      },
      {
        type: "prose",
        heading: "Lighting, Remodels, and New Construction",
        paragraphs: [
          "Gilbert remodels and outdoor living projects succeed when lighting and power are planned together. We provide [[lighting installation|/lighting-installation]] and [[remodel electrical|/remodel-electrical]] so switch locations, dimming, and exterior circuits match how you use each space.",
          "Additions and detached structures need proper [[new construction wiring|/new-construction-wiring]]—feeders, subpanels when appropriate, and finish devices that look intentional. Val Vista Lakes and Downtown Gilbert projects get the same standards we apply across the East Valley.",
        ],
      },
      {
        type: "prose",
        heading: "Why Choose Numar Electric",
        paragraphs: [
          "Licensed under ROC #366059 (CR-11), insured, and experienced with both residential and commercial electrical work across Arizona’s Phoenix metro. Those are the fundamentals.",
          "Beyond credentials, we are known for clear communication and clean workmanship. Our workmanship warranty covers the electrical work we install—ask for specifics when we prepare your Gilbert estimate.",
        ],
      },
      {
        type: "prose",
        heading: "Neighborhoods and Areas We Serve",
        paragraphs: [
          "Numar Electric serves Gilbert neighborhoods including Agritopia, Power Ranch, Morrison Ranch, Val Vista Lakes, Seville, Downtown Gilbert, and East Gilbert. Newer planned communities dominate, but remodel intensity and outdoor living upgrades vary block by block.",
          "Detached shops, casitas, and pool-centered backyards are common project drivers here. Share your neighborhood and a short project list when you contact us.",
        ],
      },
      {
        type: "faq",
        heading: "Frequently Asked Questions",
        items: [
          {
            question: "Can you wire a detached shop or casita in Gilbert?",
            answer:
              "Yes. Detached structures often need feeders, subpanels, lighting, and receptacle circuits. We design the electrical package based on how you will use the building.",
          },
          {
            question: "Do you install landscape and patio lighting in Gilbert?",
            answer:
              "Lighting installation for patios, yards, and accent areas is part of our services. We coordinate power, switching, and fixture requirements with your plan.",
          },
          {
            question: "Will adding a pool in Gilbert require an electrical upgrade?",
            answer:
              "Often the pool equipment needs dedicated circuits and sometimes a panel upgrade depending on existing capacity. We review the equipment list and your panel before recommending a path.",
          },
          {
            question: "How do I request an estimate for Gilbert remodel electrical?",
            answer:
              "Send remodel plans or a room list to {{EMAIL}}, or call {{PHONE}}. Photos of the existing panel help us give more useful guidance early.",
          },
        ],
      },
      {
        type: "cta",
        heading: "Request an Electrical Estimate in Gilbert",
        body: "Planning a Gilbert remodel, outdoor living upgrade, EV charger, or commercial electrical project? Contact Numar Electric at {{PHONE}}, {{EMAIL}}, or [[contact form|/#contact]].",
      },
    ],
    related: [
      { label: "Remodel Electrical", href: "/remodel-electrical" },
      { label: "Lighting Installation", href: "/lighting-installation" },
      { label: "EV Charger Installation", href: "/ev-charger-installation" },
      { label: "New Construction Wiring", href: "/new-construction-wiring" },
      { label: "Residential Electrical", href: "/residential-electrical" },
      { label: "Panel Upgrades", href: "/electrical-service-panel-upgrades" },
    ],
  },
  {
    slug: "electrician-paradise-valley-az",
    city: "Paradise Valley",
    navLabel: "Paradise Valley",
    title: "Electrician in Paradise Valley, AZ | Numar Electric",
    description:
      "Paradise Valley electrician for custom homes, lighting, remodels, service upgrades, and outdoor electrical. Licensed & insured. Call {{PHONE}}.",
    h1: "Electrician in Paradise Valley, Arizona",
    intro: [
      "Paradise Valley homes are built and remodeled with high expectations for finish quality—lighting that layers correctly, service equipment that stays discreet, and outdoor living power that does not look improvised. Numar Electric is a licensed electrical contractor (ROC #366059, CR-11) serving Paradise Valley residential projects and related commercial coordination with a code-focused, careful approach.",
      "We work with homeowners, builders, and designers when projects require close sequencing. Call Numar Electric at {{PHONE}} or email {{EMAIL}} to discuss lighting plans, remodel electrical, or a service upgrade.",
    ],
    image: {
      src: "/slideshow/slide-2-commercial.png",
      alt: "Numar Electric clean electrical rough-in and panel work",
    },
    sections: [
      {
        type: "prose",
        heading: "Residential and Commercial Electrical Services in Paradise Valley",
        paragraphs: [
          "Most Paradise Valley work is residential at a custom level: remodel electrical, lighting design support, pool and spa circuits, and service upgrades that protect capacity for future additions. Our [[residential electrical|/residential-electrical]] services emphasize neat terminations, thoughtful device placement, and communication that keeps decision-makers informed.",
          "When a property includes a small commercial component or when we are hired alongside a larger construction team, our [[commercial electrical|/commercial-electrical]] experience helps with coordination, documentation, and inspection readiness.",
        ],
      },
      {
        type: "list",
        heading: "Electrical Services We Provide",
        intro: "Services aligned with Paradise Valley property needs:",
        groups: [
          {
            items: [
              "[[Residential electrical|/residential-electrical]] for custom homes and major updates",
              "[[Commercial electrical|/commercial-electrical]] coordination when projects require it",
              "[[Service and panel upgrades|/electrical-service-panel-upgrades]] for remodel-ready capacity",
              "[[EV charger installation|/ev-charger-installation]] with discreet routing where possible",
              "[[Troubleshooting and repairs|/electrical-troubleshooting-repairs-service-calls]] for intermittent faults",
              "[[Lighting installation|/lighting-installation]] including landscape and architectural lighting",
              "[[Remodel electrical|/remodel-electrical]] for kitchens, living areas, and additions",
              "[[New construction wiring|/new-construction-wiring]] for custom builds and expansions",
            ],
          },
        ],
      },
      {
        type: "prose",
        heading: "Panel Upgrades and Electrical Service Changes",
        paragraphs: [
          "Custom remodels in Paradise Valley regularly add loads that older or mid-size services cannot support: spa equipment, expanded HVAC, outdoor kitchens, and extensive lighting. [[Electrical service panel upgrades|/electrical-service-panel-upgrades]] are planned with aesthetics and access in mind—not only ampacity.",
          "Utility coordination and permitting are handled as part of professional contractor practice. We keep the homeowner or project lead informed about sequencing so finish trades are not waiting on surprises.",
        ],
      },
      {
        type: "prose",
        heading: "EV Charger Installation in Paradise Valley",
        paragraphs: [
          "Garage and motor-court charging should look intentional on a custom property. Our [[EV charger installation|/ev-charger-installation]] work prioritizes clean routing, correct circuit design, and placement that fits how the space is used.",
          "When panel capacity is limited, we discuss upgrade options early so the charger project does not conflict with a larger remodel already underway.",
        ],
      },
      {
        type: "prose",
        heading: "Electrical Troubleshooting and Repairs",
        paragraphs: [
          "Complex lighting systems and outdoor equipment create troubleshooting challenges that go beyond a simple breaker reset. [[Troubleshooting and repair|/electrical-troubleshooting-repairs-service-calls]] from Numar Electric focuses on methodical diagnosis—finding failing connections, control issues, or overloaded branches—then correcting them cleanly.",
          "On occupied custom homes, we work carefully around finishes and keep communication tight with the homeowner or site contact.",
        ],
      },
      {
        type: "prose",
        heading: "Lighting, Remodels, and New Construction",
        paragraphs: [
          "Lighting is often the centerpiece of a Paradise Valley remodel: interior scenes, pathway lighting, and landscape accents that need reliable power and thoughtful switching. We provide [[lighting installation|/lighting-installation]] and [[remodel electrical|/remodel-electrical]] in coordination with designers and builders when those relationships are part of the project.",
          "For additions and new custom construction, [[new construction wiring|/new-construction-wiring]] covers rough-in through trim with the cleanliness expected on high-finish job sites. Pool and spa electrical is planned with the outdoor living package rather than bolted on at the end.",
        ],
      },
      {
        type: "prose",
        heading: "Why Choose Numar Electric",
        paragraphs: [
          "ROC #366059, CR-11 licensed. Licensed and insured. Residential and commercial capability with an Arizona, Phoenix metro focus. Those credentials are the baseline for working on Paradise Valley properties.",
          "We earn trust through clear communication, clean workmanship, and code-focused installs. Our workmanship warranty applies to the work we perform—ask us to review coverage when we scope your project.",
        ],
      },
      {
        type: "prose",
        heading: "Neighborhoods and Areas We Serve",
        paragraphs: [
          "We serve Paradise Valley’s residential areas throughout the town, including custom home corridors and remodel-active streets where outdoor living and lighting upgrades are common. Properties here vary widely in age, service size, and architectural style.",
          "If your project sits near bordering Scottsdale or Phoenix neighborhoods, include the address when you contact us. Coverage across the Paradise Valley area is part of our Phoenix metro service.",
        ],
      },
      {
        type: "faq",
        heading: "Frequently Asked Questions",
        items: [
          {
            question: "Do you coordinate with builders and designers in Paradise Valley?",
            answer:
              "Yes. Many custom and remodel projects require coordination on lighting layouts, device schedules, and rough-in timing. We communicate with your project team when that is part of the engagement.",
          },
          {
            question: "Can you upgrade service equipment without leaving a unfinished look?",
            answer:
              "Clean workmanship is a priority on Paradise Valley service and panel upgrades. We plan placement, labeling, and finish details as part of the job—not as optional extras.",
          },
          {
            question: "Do you install landscape lighting electrical in Paradise Valley?",
            answer:
              "We handle lighting installation that includes landscape and exterior accent work, coordinating power and controls with your lighting plan.",
          },
          {
            question: "What information helps for a Paradise Valley remodel electrical estimate?",
            answer:
              "Architectural or lighting plans, a description of outdoor equipment, and panel photos are useful. Email {{EMAIL}} or call {{PHONE}} to start.",
          },
          {
            question: "Do you work on pool and spa electrical for custom homes?",
            answer:
              "Yes. Pool and spa related electrical is a frequent part of Paradise Valley outdoor living projects. Scope depends on equipment and the existing electrical system.",
          },
        ],
      },
      {
        type: "cta",
        heading: "Request an Electrical Estimate in Paradise Valley",
        body: "For lighting, remodel electrical, service upgrades, or custom-home electrical work in Paradise Valley, contact Numar Electric at {{PHONE}}, {{EMAIL}}, or [[contact form|/#contact]].",
      },
    ],
    related: [
      { label: "Lighting Installation", href: "/lighting-installation" },
      { label: "Remodel Electrical", href: "/remodel-electrical" },
      { label: "Panel & Service Upgrades", href: "/electrical-service-panel-upgrades" },
      { label: "New Construction Wiring", href: "/new-construction-wiring" },
      { label: "Residential Electrical", href: "/residential-electrical" },
    ],
  },
  {
    slug: "electrician-glendale-az",
    city: "Glendale",
    navLabel: "Glendale",
    title: "Glendale AZ Electrician | Numar Electric",
    description:
      "Electrician in Glendale, AZ for older homes, panels, repairs, commercial lighting, and additions. ROC #366059, CR-11 licensed. Call {{PHONE}}.",
    h1: "Electrician in Glendale, Arizona",
    intro: [
      "Glendale blends historic districts, established suburban neighborhoods, and busy commercial zones around Westgate and beyond. That mix creates electrical work ranging from panel upgrades in older homes to lighting and TI in retail and entertainment corridors. Numar Electric serves Glendale as a licensed CR-11 contractor under ROC #366059, with residential and commercial capability across the west side of the Phoenix metro.",
      "If you need repairs, a service upgrade, remodel wiring, or commercial electrical support, call {{PHONE}} or email {{EMAIL}}.",
    ],
    image: {
      src: "/slideshow/slide-3-team.png",
      alt: "Numar Electric electricians completing installation work",
    },
    sections: [
      {
        type: "prose",
        heading: "Residential and Commercial Electrical Services in Glendale",
        paragraphs: [
          "Older Glendale homes often need practical electrical attention: worn receptacles, overloaded panels, and circuits that were never intended for modern kitchen and cooling loads. Our [[residential electrical|/residential-electrical]] work addresses repairs and upgrades with respect for occupied homes and realistic access constraints.",
          "Commercially, Glendale’s retail, dining, and office spaces need [[commercial electrical|/commercial-electrical]] partners who can execute lighting changes, power updates, and TI scopes without derailing business operations. We communicate schedule needs clearly up front.",
        ],
      },
      {
        type: "list",
        heading: "Electrical Services We Provide",
        intro: "Glendale electrical services include:",
        groups: [
          {
            items: [
              "[[Residential electrical|/residential-electrical]] for older and newer Glendale homes",
              "[[Commercial electrical|/commercial-electrical]] for retail, dining, and office spaces",
              "[[Panel upgrades|/electrical-service-panel-upgrades]] and service changes",
              "[[EV charger installation|/ev-charger-installation]] where capacity supports it",
              "[[Troubleshooting and repairs|/electrical-troubleshooting-repairs-service-calls]] for homes and businesses",
              "[[Lighting installation|/lighting-installation]] indoors and for exterior areas",
              "[[Remodel electrical|/remodel-electrical]] for additions and interior updates",
              "[[New construction wiring|/new-construction-wiring]] for new residential development and buildouts",
            ],
          },
        ],
      },
      {
        type: "prose",
        heading: "Panel Upgrades and Electrical Service Changes",
        paragraphs: [
          "Many Glendale properties still rely on panels that trip under ordinary evening loads. [[Electrical service panel upgrades|/electrical-service-panel-upgrades]] improve safety and create room for remodel circuits, garage shops, and outdoor equipment.",
          "When utility involvement is required, we coordinate those steps as part of the project plan and keep you informed about inspection timing so the rest of your remodel or addition can stay organized.",
        ],
      },
      {
        type: "prose",
        heading: "EV Charger Installation in Glendale",
        paragraphs: [
          "Homeowners in Arrowhead Ranch and North Glendale increasingly request dedicated charging. [[EV charger installation|/ev-charger-installation]] includes verifying your panel, planning a clean run, and completing an inspectable install.",
          "If your service is already strained, we discuss upgrade paths before committing to charger hardware placement.",
        ],
      },
      {
        type: "prose",
        heading: "Electrical Troubleshooting and Repairs",
        paragraphs: [
          "Historic-district homes and aging west-side stock produce classic repair calls: dead circuits, warm switches, and outdoor receptacles that fail after summer heat. Our [[troubleshooting and repair|/electrical-troubleshooting-repairs-service-calls]] work finds the fault and restores safe operation.",
          "Commercial lighting failures and breaker issues around busy corridors need fast, clear diagnosis. We focus on durable corrections, not temporary workarounds that fail the next week.",
        ],
      },
      {
        type: "prose",
        heading: "Lighting, Remodels, and New Construction",
        paragraphs: [
          "Glendale additions and remodels—especially in established neighborhoods—need electrical that matches both old and new construction conditions. We provide [[remodel electrical|/remodel-electrical]] and [[lighting installation|/lighting-installation]] that bridge those conditions carefully.",
          "Where new residential development or commercial buildouts are underway, [[new construction wiring|/new-construction-wiring]] covers rough-in and finish. Shop spaces and garage conversions get dedicated circuits planned for real tool and equipment loads.",
        ],
      },
      {
        type: "prose",
        heading: "Why Choose Numar Electric",
        paragraphs: [
          "Numar Electric is licensed and insured, holding Arizona ROC #366059 with a CR-11 classification. We handle residential and commercial electrical work with a Phoenix metro focus that includes Glendale’s neighborhoods and commercial districts.",
          "Expect clear communication, clean workmanship, and code-focused installs. Our workmanship warranty covers the work we perform—ask about details with your estimate.",
        ],
      },
      {
        type: "prose",
        heading: "Neighborhoods and Areas We Serve",
        paragraphs: [
          "We serve Downtown Glendale, Arrowhead Ranch, North Glendale, the Westgate area, historic districts, and the Deer Valley area corridor as it relates to nearby Glendale properties. Housing ages and commercial intensity vary sharply across these zones.",
          "Whether your project is an older home panel upgrade or lighting for a commercial suite, include your Glendale address and a short scope description when you contact us.",
        ],
      },
      {
        type: "faq",
        heading: "Frequently Asked Questions",
        items: [
          {
            question: "Can you upgrade the panel in an older Glendale home?",
            answer:
              "Yes. Panel and service upgrades are common on older Glendale properties. We evaluate existing gear, load needs, and utility requirements before recommending a specific approach.",
          },
          {
            question: "Do you do electrical repairs for Glendale small businesses?",
            answer:
              "We handle commercial troubleshooting, lighting repairs, and related electrical service work. Call {{PHONE}} with the business address and a description of the issue.",
          },
          {
            question: "Can you wire a garage shop addition in Glendale?",
            answer:
              "Garage and shop electrical—receptacles, lighting, and sometimes a subpanel—are part of our residential services. Tell us what equipment you plan to run so we size circuits correctly.",
          },
          {
            question: "Do you work near Westgate and surrounding commercial areas?",
            answer:
              "Yes. Commercial electrical work in and around Glendale’s retail and entertainment corridors is within our service area. Share plans or a scope for TI and lighting projects.",
          },
        ],
      },
      {
        type: "cta",
        heading: "Request an Electrical Estimate in Glendale",
        body: "Contact Numar Electric for Glendale repairs, panel upgrades, remodel wiring, or commercial electrical work. Call {{PHONE}}, email {{EMAIL}}, or use [[contact form|/#contact]].",
      },
    ],
    related: [
      { label: "Troubleshooting & Service Calls", href: "/electrical-troubleshooting-repairs-service-calls" },
      { label: "Panel Upgrades", href: "/electrical-service-panel-upgrades" },
      { label: "Commercial Electrical", href: "/commercial-electrical" },
      { label: "Residential Electrical", href: "/residential-electrical" },
      { label: "Remodel Electrical", href: "/remodel-electrical" },
      { label: "Lighting Installation", href: "/lighting-installation" },
    ],
  },
  {
    slug: "electrician-cave-creek-az",
    city: "Cave Creek",
    navLabel: "Cave Creek",
    title: "Electrician in Cave Creek, AZ | Numar Electric",
    description:
      "Cave Creek electrician for custom homes, workshops, barns, outbuildings, outdoor lighting, and service upgrades. Licensed CR-11. {{PHONE}}.",
    h1: "Electrician in Cave Creek, Arizona",
    intro: [
      "Cave Creek properties often sit on larger lots with custom homes, detached garages, workshops, barns, and outbuildings that need real electrical planning—not a single shared circuit stretched too far. Numar Electric serves Cave Creek as a licensed electrical contractor (ROC #366059, CR-11), focusing on residential and related commercial work with clean workmanship and clear communication.",
      "Long feeder runs, outdoor lighting, and service upgrades are common here. Call {{PHONE}} or email {{EMAIL}} to describe your property and goals.",
    ],
    image: {
      src: "/slideshow/slide-4-fleet.png",
      alt: "Numar Electric fleet supporting Arizona electrical service calls",
    },
    sections: [
      {
        type: "prose",
        heading: "Residential and Commercial Electrical Services in Cave Creek",
        paragraphs: [
          "Custom Cave Creek homes and acreage-style lots create electrical scopes that differ from dense suburban streets. Detached structures need properly sized feeders. Workshops need dedicated tool circuits. Outdoor lighting has to survive heat and exposure. Our [[residential electrical|/residential-electrical]] work is planned for those realities.",
          "When a property includes a small commercial use or when we support a builder on a custom site, [[commercial electrical|/commercial-electrical]] experience helps with documentation, load planning, and inspection readiness.",
        ],
      },
      {
        type: "list",
        heading: "Electrical Services We Provide",
        intro: "Cave Creek services we provide:",
        groups: [
          {
            items: [
              "[[Residential electrical|/residential-electrical]] for custom homes and outbuildings",
              "[[Commercial electrical|/commercial-electrical]] support for applicable site projects",
              "[[Service and panel upgrades|/electrical-service-panel-upgrades]] for growing property loads",
              "[[EV charger installation|/ev-charger-installation]] in garages and dedicated parking areas",
              "[[Troubleshooting and repairs|/electrical-troubleshooting-repairs-service-calls]] across main and detached structures",
              "[[Lighting installation|/lighting-installation]] for homes, yards, and pathways",
              "[[Remodel electrical|/remodel-electrical]] for interior updates and outdoor living additions",
              "[[New construction wiring|/new-construction-wiring]] for custom builds and new outbuildings",
            ],
          },
        ],
      },
      {
        type: "prose",
        heading: "Panel Upgrades and Electrical Service Changes",
        paragraphs: [
          "Adding a workshop, barn circuits, or multiple outdoor living loads can overwhelm a service that was sized only for the main house. [[Electrical service panel upgrades|/electrical-service-panel-upgrades]] give Cave Creek properties the capacity to feed detached structures correctly.",
          "Long runs between structures require careful conductor and raceway planning. We treat permit and utility coordination as part of standard contractor practice when a service change is involved, and we explain sequencing before work begins.",
        ],
      },
      {
        type: "prose",
        heading: "EV Charger Installation in Cave Creek",
        paragraphs: [
          "Custom garages and detached parking structures are common charger locations in Cave Creek. [[EV charger installation|/ev-charger-installation]] starts with capacity and routing—especially when the panel is in the main house and the parking is not.",
          "We plan a durable, code-compliant path rather than a temporary cord solution, and we discuss any needed feeder or panel work up front.",
        ],
      },
      {
        type: "prose",
        heading: "Electrical Troubleshooting and Repairs",
        paragraphs: [
          "Outbuilding circuits that fail under load, outdoor lighting that goes dark in sections, and nuisance trips that appear only when multiple structures are in use are typical Cave Creek calls. [[Troubleshooting and repairs|/electrical-troubleshooting-repairs-service-calls]] isolate whether the issue is a local fault, a shared feeder problem, or an overloaded panel.",
          "On larger lots, clear diagnosis saves time. We explain findings in plain language so you can prioritize repairs versus broader upgrades.",
        ],
      },
      {
        type: "prose",
        heading: "Lighting, Remodels, and New Construction",
        paragraphs: [
          "Outdoor and pathway lighting matter on Cave Creek properties where distances between house, garage, and outbuildings are significant. We provide [[lighting installation|/lighting-installation]] planned for those layouts, along with [[remodel electrical|/remodel-electrical]] when interiors and outdoor living spaces are updated together.",
          "New custom homes and new outbuildings rely on [[new construction wiring|/new-construction-wiring]]—rough-in, feeders, and finish—that anticipates how the property will actually be used, including workshops and barns where appropriate.",
        ],
      },
      {
        type: "prose",
        heading: "Why Choose Numar Electric",
        paragraphs: [
          "Licensed ROC #366059, CR-11. Licensed and insured. Residential and commercial work across Arizona with a Phoenix metro focus that includes Cave Creek.",
          "We emphasize clear communication on larger-lot logistics, clean workmanship on panels and outbuilding gear, and code-focused installs. Our workmanship warranty covers the electrical work we perform—ask for details when we scope your project.",
        ],
      },
      {
        type: "prose",
        heading: "Neighborhoods and Areas We Serve",
        paragraphs: [
          "We serve Cave Creek’s custom home areas and surrounding residential pockets where detached garages, workshops, barns, and outbuildings are part of everyday property use. Lot sizes and terrain vary, so site access and feeder distances are part of how we plan each job.",
          "If your property sits near town borders or in a neighboring foothills community, include the address and a description of each structure that needs power when you contact us.",
        ],
      },
      {
        type: "faq",
        heading: "Frequently Asked Questions",
        items: [
          {
            question: "Can you run power to a Cave Creek workshop, barn, or outbuilding?",
            answer:
              "Yes. Feeding detached structures with properly sized circuits or subpanels is a common Cave Creek project. We plan the run based on distance, load, and how the building will be used.",
          },
          {
            question: "Do long electrical runs on large lots change the approach?",
            answer:
              "Distance affects conductor sizing, raceway choices, and sometimes whether a subpanel is the better solution. We account for those factors in the estimate rather than stretching an undersized circuit.",
          },
          {
            question: "Can you handle outdoor lighting across a Cave Creek property?",
            answer:
              "Outdoor and pathway lighting installation is part of our services. We coordinate power and switching for the areas you want illuminated.",
          },
          {
            question: "Do you do new construction electrical for custom Cave Creek homes?",
            answer:
              "New construction wiring for custom homes and related structures is within our services. Builder coordination is available when the project requires it.",
          },
        ],
      },
      {
        type: "cta",
        heading: "Request an Electrical Estimate in Cave Creek",
        body: "Tell Numar Electric about your Cave Creek home, garage, workshop, or outbuilding project. Call {{PHONE}}, email {{EMAIL}}, or reach us through [[contact form|/#contact]].",
      },
    ],
    related: [
      { label: "New Construction Wiring", href: "/new-construction-wiring" },
      { label: "Residential Electrical", href: "/residential-electrical" },
      { label: "Panel & Service Upgrades", href: "/electrical-service-panel-upgrades" },
      { label: "Lighting Installation", href: "/lighting-installation" },
      { label: "Remodel Electrical", href: "/remodel-electrical" },
    ],
  },
  {
    slug: "electrician-fountain-hills-az",
    city: "Fountain Hills",
    navLabel: "Fountain Hills",
    title: "Fountain Hills Electrician | Numar Electric",
    description:
      "Fountain Hills electrician for custom homes, landscape lighting, pools/spas, panels, EV chargers, and remodels. Licensed ROC #366059. {{EMAIL}}.",
    h1: "Electrician in Fountain Hills, Arizona",
    intro: [
      "Fountain Hills combines custom residential architecture with hillside lots and outdoor living that depends on reliable electrical work—landscape lighting, pool and spa circuits, and panel capacity for modern loads. Numar Electric is a licensed electrical contractor serving Fountain Hills under ROC #366059 (CR-11), providing residential and commercial-capable electrical services with clear communication and clean workmanship.",
      "We plan outdoor electrical and remodel work for how Fountain Hills homes are actually used. Contact us at {{PHONE}} or {{EMAIL}} to discuss your project.",
    ],
    image: {
      src: "/commercial-electrical-work.png",
      alt: "Numar Electric electrical panel and wiring installation",
    },
    sections: [
      {
        type: "prose",
        heading: "Residential and Commercial Electrical Services in Fountain Hills",
        paragraphs: [
          "Fountain Hills homes often pair interior remodel goals with exterior priorities: pathway lighting, patio power, and pool equipment that must stay dependable. Our [[residential electrical|/residential-electrical]] services cover those needs along with everyday circuit and device work inside the home.",
          "For local businesses and professional spaces, [[commercial electrical|/commercial-electrical]] support includes lighting updates, power changes, and TI-style scopes sized to the town’s commercial footprint.",
        ],
      },
      {
        type: "list",
        heading: "Electrical Services We Provide",
        intro: "Fountain Hills electrical services include:",
        groups: [
          {
            items: [
              "[[Residential electrical|/residential-electrical]] for custom and remodeled homes",
              "[[Commercial electrical|/commercial-electrical]] for local business spaces",
              "[[Panel upgrades|/electrical-service-panel-upgrades]] for outdoor living and remodel loads",
              "[[EV charger installation|/ev-charger-installation]] in Fountain Hills garages",
              "[[Troubleshooting and repairs|/electrical-troubleshooting-repairs-service-calls]] for indoor and outdoor circuits",
              "[[Lighting installation|/lighting-installation]] including landscape and architectural lighting",
              "[[Remodel electrical|/remodel-electrical]] for kitchens, living areas, and outdoor rooms",
              "[[New construction wiring|/new-construction-wiring]] for additions and selected new homes",
            ],
          },
        ],
      },
      {
        type: "prose",
        heading: "Panel Upgrades and Electrical Service Changes",
        paragraphs: [
          "Hillside and custom Fountain Hills properties frequently add loads over time—spas, expanded HVAC, and outdoor entertainment—until the original panel no longer keeps up. [[Electrical service panel upgrades|/electrical-service-panel-upgrades]] restore capacity and improve protection devices where needed.",
          "We outline permit and utility coordination when a service change is part of the work, and we keep the plan practical for sites where equipment access and routing take extra attention. We do not claim specialized structural or geotechnical engineering; we focus on sound electrical installation practices for the conditions on site.",
        ],
      },
      {
        type: "prose",
        heading: "EV Charger Installation in Fountain Hills",
        paragraphs: [
          "Dedicated Level 2 charging is a frequent upgrade for Fountain Hills residents who want a finished garage solution. [[EV charger installation|/ev-charger-installation]] includes capacity verification, clean routing, and an inspectable install.",
          "If your panel is already supporting pool equipment and remodel circuits, we discuss whether a charger fits now or whether an upgrade should come first.",
        ],
      },
      {
        type: "prose",
        heading: "Electrical Troubleshooting and Repairs",
        paragraphs: [
          "Outdoor circuits and landscape lighting see hard use in Fountain Hills. Failed transformers, intermittent patio receptacles, and breakers that trip when spa equipment starts are common service issues. [[Troubleshooting and repairs|/electrical-troubleshooting-repairs-service-calls]] identify the fault and correct it cleanly.",
          "Indoor remodel-era problems—shared neutrals, overloaded kitchen circuits, aging devices—get the same methodical approach.",
        ],
      },
      {
        type: "prose",
        heading: "Lighting, Remodels, and New Construction",
        paragraphs: [
          "Landscape and exterior lighting are central to how Fountain Hills homes present after dark. We provide [[lighting installation|/lighting-installation]] planned with switching and power needs in mind, alongside [[remodel electrical|/remodel-electrical]] for kitchens, great rooms, and outdoor living additions.",
          "Additions and new construction packages use [[new construction wiring|/new-construction-wiring]] for rough-in through trim. Pool and spa electrical is coordinated with the outdoor living scope so equipment circuits are not an afterthought.",
        ],
      },
      {
        type: "prose",
        heading: "Why Choose Numar Electric",
        paragraphs: [
          "Numar Electric holds Arizona ROC #366059 with a CR-11 electrical classification. We are licensed and insured, and we perform residential and commercial electrical work across the Phoenix metro—including Fountain Hills.",
          "Clear communication, clean workmanship, and code-focused installs define how we work. Our workmanship warranty covers the electrical work we install; ask us to confirm coverage when we prepare your estimate.",
        ],
      },
      {
        type: "prose",
        heading: "Neighborhoods and Areas We Serve",
        paragraphs: [
          "We serve Fountain Hills residential areas throughout the town, including custom home streets and hillside properties where outdoor living, landscape lighting, and pool equipment are common. Access and routing can vary with lot layout, so we plan site visits and conduit paths accordingly.",
          "If your project is near the edges of town toward neighboring communities, include the full address when you contact us so we can confirm service logistics.",
        ],
      },
      {
        type: "faq",
        heading: "Frequently Asked Questions",
        items: [
          {
            question: "Can you install landscape lighting electrical on a Fountain Hills hillside lot?",
            answer:
              "Yes. Landscape and exterior lighting installation is part of our services. We plan power and switching for the areas you want lit and account for practical routing on the site—without making structural or engineering claims beyond electrical work.",
          },
          {
            question: "Do Fountain Hills pool and spa projects need electrical upgrades?",
            answer:
              "Many do, depending on equipment and existing panel capacity. We review the load and recommend dedicated circuits or a panel upgrade when needed.",
          },
          {
            question: "Can you handle a kitchen remodel’s electrical in Fountain Hills?",
            answer:
              "Remodel electrical for kitchens and living areas is a core service. Share plans or a fixture and appliance list so we can scope circuits, lighting, and device placement.",
          },
          {
            question: "How do I get an estimate for Fountain Hills electrical work?",
            answer:
              "Call {{PHONE}}, email {{EMAIL}}, or use our [[contact form|/#contact]]. Include your address, a short project description, and panel photos if the work involves capacity or a charger.",
          },
        ],
      },
      {
        type: "cta",
        heading: "Request an Electrical Estimate in Fountain Hills",
        body: "Ready to plan lighting, a remodel, a panel upgrade, or EV charging in Fountain Hills? Contact Numar Electric at {{PHONE}} or {{EMAIL}}, or visit [[contact form|/#contact]].",
      },
    ],
    related: [
      { label: "Lighting Installation", href: "/lighting-installation" },
      { label: "Panel & Service Upgrades", href: "/electrical-service-panel-upgrades" },
      { label: "EV Charger Installation", href: "/ev-charger-installation" },
      { label: "Remodel Electrical", href: "/remodel-electrical" },
      { label: "Residential Electrical", href: "/residential-electrical" },
      { label: "New Construction Wiring", href: "/new-construction-wiring" },
    ],
  },
];

export function getCityPage(slug: string): CityPage | undefined {
  return CITY_PAGES.find((page) => page.slug === slug);
}

export function getAllCitySlugs(): string[] {
  return CITY_PAGES.map((page) => page.slug);
}
