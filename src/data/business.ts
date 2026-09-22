export const BUSINESS_DATA = {
  name: "Kaltseis",
  category: "Auto Garage",
  description: "Local automotive garage",
  address: {
    street: "Sagi 2",
    postalCode: "3324",
    city: "Hindelbank",
    country: "Switzerland",
    full: "Sagi 2, 3324 Hindelbank, Switzerland",
    canton: "Canton of Bern (BE)",
    coordinates: "47°02'28.5\"N 7°32'34.8\"E",
    swissGrid: "LV95: 2'607'100 / 1'210'200",
  },
  phone: "034 411 17 16",
  phoneFormatted: "+41 34 411 17 16",
  phoneTel: "tel:0344111716",
  localChReviews: "0 listed",
  googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Kaltseis+Sagi+2+3324+Hindelbank+Switzerland",
  appleMapsUrl: "https://maps.apple.com/?q=Kaltseis+Sagi+2+Hindelbank",
};

export const WORKSHOP_SECTORS = [
  {
    index: "01",
    code: "MEC-01",
    title: "Mechanical Repairs & Diagnostics",
    category: "General Workshop",
    summary: "Investigation and repair of vehicle mechanical issues, abnormal noises, engine performance concerns, and fault code diagnostics.",
    details: [
      "Engine bay and mechanical component troubleshooting",
      "Computerized electronic fault code diagnosis",
      "Exhaust and emissions system check",
      "Cooling, heating, and alternator systems"
    ]
  },
  {
    index: "02",
    code: "MAINT-02",
    title: "Periodic Maintenance & Servicing",
    category: "Preventative Care",
    summary: "Routine servicing according to vehicle requirements to maintain operational safety, reliability, and engine longevity.",
    details: [
      "Engine oil and filter replacements",
      "Brake fluid, coolant, and transmission fluid inspections",
      "Cabin and intake air filtration checks",
      "Multi-point safety and roadworthiness review"
    ]
  },
  {
    index: "03",
    code: "CHAS-03",
    title: "Brake Systems & Running Gear",
    category: "Chassis & Safety",
    summary: "Critical inspection and replacement of wear components ensuring optimal stopping power and road stability.",
    details: [
      "Brake pads, discs, lines, and caliper inspection",
      "Suspension struts, shock absorbers, and coil springs",
      "Steering linkages, ball joints, and tie rod ends",
      "Wheel bearings and drive axle checks"
    ]
  },
  {
    index: "04",
    code: "TIRE-04",
    title: "Tire & Wheel Services",
    category: "Running Gear",
    summary: "Seasonal tire changes, balancing, and wheel inspections for safe driving conditions on Swiss roads.",
    details: [
      "Seasonal summer and winter tire mounting",
      "Tire wear, tread depth, and air pressure verification",
      "Wheel balancing and rim inspection",
      "Tire pressure monitoring system (TPMS) verification"
    ]
  },
  {
    index: "05",
    code: "INSP-05",
    title: "Pre-Inspection Preparation (MFK)",
    category: "Vehicle Compliance",
    summary: "Pre-check of essential mechanical, lighting, and environmental safety elements prior to official vehicle inspection.",
    details: [
      "Undercarriage cleaning and visual leak inspection",
      "Headlamp beam alignment and lighting systems check",
      "Braking efficiency test check",
      "Body corrosion and structural mount verification"
    ]
  },
  {
    index: "06",
    code: "BAT-06",
    title: "Electrical, Battery & Starter Systems",
    category: "Vehicle Electrics",
    summary: "Testing and replacement of starter batteries, charging systems, and vehicle electrical components.",
    details: [
      "12V starter battery health and load testing",
      "Alternator charging voltage verification",
      "Starter motor and ignition circuit troubleshooting",
      "Fuse and vehicle lighting circuit checks"
    ]
  }
];

export const ACCESS_ROUTES = [
  {
    from: "From Burgdorf",
    distance: "Approx. 6 km",
    travelTime: "8–10 min",
    directions: "Take Route 23 southbound towards Hindelbank. Sagi 2 is situated just off the main road entering the locality."
  },
  {
    from: "From Bern / Schönbühl",
    distance: "Approx. 16 km",
    travelTime: "15–18 min",
    directions: "Follow A1/A6 to Schönbühl, then take Bernstrasse towards Hindelbank. Convenient access for local Bernese drivers."
  },
  {
    from: "From Kirchberg",
    distance: "Approx. 5 km",
    travelTime: "6–8 min",
    directions: "Drive south via Alchenflüh and Hindelbankstrasse directly towards Sagi in Hindelbank."
  }
];
