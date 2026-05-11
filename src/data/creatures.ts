export type Diet = 'carnivore' | 'herbivore' | 'omnivore';
export type CreatureType = 'real' | 'ingen_hybrid';

export interface FossilSection {
  description: string;
  discovery: string;
  accuracy_rating: 'ACCURATE' | 'MOSTLY ACCURATE' | 'EXAGGERATED' | 'CREATIVE LICENCE' | 'FICTIONAL';
  film_accuracy_notes: string[];
  extended_trivia?: string[];
  diet_details?: string;
}

export interface InGenSection {
  file_number: string;
  classification: 'Public' | 'Restricted' | 'Classified';
  creation_date: string;
  dna_donors: string[];
  modifications: string[];
  containment: string;
  incidents: string[];
  clone_species_count?: number;
  notable_traits?: string[];
  expanded_lore?: string;
}

export interface HybridDonor {
  species: string;
  trait: string;
  pct: number;
}

export interface HybridGenome {
  base_species: string;
  base_percentage: number;
  donors: HybridDonor[];
  modification_notes: string;
}

export interface Creature {
  id: string;
  slug: string;
  common_name: string;
  scientific_name: string;
  type: CreatureType;
  diet: Diet;
  era: string;
  threat_level: number;
  real_length_m: number;
  movie_length_m: number;
  real_weight_kg: number;
  movie_weight_kg: number;
  fossil_section?: FossilSection;
  ingen_section: InGenSection;
  hybrid_genome?: HybridGenome;
  film_appearances: string[];
  silhouette_url?: string;
  model_url?: string;
  fandom_picture?: string;
  scientific_picture?: string;
  tier: 1 | 2 | 3;
}

// Full 37 Roster built from PRD rules.
export const creatures: Creature[] = [
  {
    id: '1', slug: 'tyrannosaurus-rex', common_name: 'Tyrannosaurus Rex', scientific_name: 'Tyrannosaurus rex',
    scientific_picture: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Tyrannosaurus_Rex_Holotype.jpg/1280px-Tyrannosaurus_Rex_Holotype.jpg',
    fandom_picture: "https://static.wikia.nocookie.net/jurassicpark/images/0/02/Ember_new_render.png/revision/latest?cb=20251006213308",
    type: 'real', diet: 'carnivore', era: 'Late Cretaceous (68-66 Ma)', threat_level: 5, tier: 1,
    real_length_m: 12.3, movie_length_m: 13.5, real_weight_kg: 8400, movie_weight_kg: 9000,
    fossil_section: {
      description: "Tyrannosaurus is a genus of large theropod dinosaur. The type species Tyrannosaurus rex, often shortened to T. rex or colloquially t-rex, is one of the best represented theropods. It lived throughout what is now western North America, on what was then an island continent known as Laramidia. Tyrannosaurus had a much wider range than other tyrannosaurids. Fossils are found in a variety of geological formations dating to the late Maastrichtian age of the late Cretaceous period, 69 to 66 million years ago, with isolated specimens possibly indicating an earlier origin in the middle Campanian age. It was one of the last known members of the tyrannosaurids and among the last non-avian dinosaurs to exist before the Cretaceous–Paleogene extinction event.",
      discovery: "First discovered in 1902 by Barnum Brown in Hell Creek, Montana.",
      accuracy_rating: 'CREATIVE LICENCE',
      film_accuracy_notes: ["Movement-based vision is completely fictional.", "They likely had excellent binocular vision, akin to an eagle.", "Max running speed was closer to 20 km/h, not 50 km/h."],
      diet_details: "Apex predator; primarily hunted hadrosaurs and ceratopsians.",
      extended_trivia: ["Fossil evidence shows they had the strongest bite force of any terrestrial animal.","T. rex had forward-facing eyes, giving them binocular vision and excellent depth perception, unlike the film's depiction."]
    },
    ingen_section: {
      file_number: 'ING-001-TREX', classification: 'Restricted', creation_date: '1989',
      dna_donors: ["100% Tyrannosaurus genome with standard gap-filling from Common Reed Frog."],
      modifications: ["Vision altered to be movement-based (unintended side effect).", "Slightly scaled up dimensions."],
      containment: "Tier 5 High Security Paddock. 10,000 volt fencing.",
      incidents: ["1993: Containment breach during Isla Nublar incident.", "1997: San Diego incident involving adult male and infant."],
      clone_species_count: 2,
      notable_traits: ["Motion-based vision","Immense bite force","Lysine contingency response"],
      expanded_lore: "The Tyrannosaurus rex serves as the mascot and prime attraction of InGen's projects. Secretly cloned on Isla Sorna before being moved to Nublar, it was given the file name ING-001-TREX. Due to frog DNA, it inadvertently inherited amphibian-like vision to movement."
    },
    film_appearances: ['JP1', 'TLW', 'JP3', 'JW', 'JWFK', 'Dom', 'Rebirth']
  },
  {
    id: '2', slug: 'velociraptor', common_name: 'Velociraptor', scientific_name: 'Velociraptor mongoliensis',
    scientific_picture: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Velociraptor_skeleton_white_background.jpg/1280px-Velociraptor_skeleton_white_background.jpg',
    fandom_picture: "https://static.wikia.nocookie.net/jurassicpark/images/e/e8/Velociraptor_Rebirth.webp/revision/latest?cb=20250602211821",
    type: 'real', diet: 'carnivore', era: 'Late Cretaceous (75-71 Ma)', threat_level: 4, tier: 1,
    real_length_m: 2.0, movie_length_m: 4.0, real_weight_kg: 15, movie_weight_kg: 150,
    fossil_section: {
      description: "Velociraptor is a genus of small dromaeosaurid dinosaurs that lived in Asia during the Late Cretaceous epoch, about 75 million to 71 million years ago (Mya). Two species are currently recognized, although others have been assigned in the past. The type species is V. mongoliensis, named and described in 1924. Fossils of this species have been discovered in the Djadochta Formation, Mongolia. A second species, V. osmolskae, was named in 2008 for skull material from the Bayan Mandahu Formation, China. A possible record is known from the Nemegt Formation.",
      discovery: "First discovered in 1923 by Peter Kaisen in the Gobi Desert.",
      accuracy_rating: 'EXAGGERATED',
      film_accuracy_notes: ["Real velociraptors were the size of a turkey.", "They were entirely covered in feathers.", "Film anatomy resembles Deinonychus or Utahraptor."],
      diet_details: "Small opportunistic pack hunter; hunted small to medium dinosaurs.",
      extended_trivia: ["Real Velociraptors were fully feathered and roughly the size of a modern turkey.","Fossilized encounters show they actively engaged with Protoceratops in lethal combat."]
    },
    ingen_section: {
      file_number: 'ING-002-VRAP', classification: 'Classified', creation_date: '1991',
      dna_donors: ["Velociraptor base", "Deinonychus traits (unconfirmed)", "Cane Toad"],
      modifications: ["Exponentially increased size.", "Feather inhibition.", "Hyper-intelligence conditioning."],
      containment: "Reinforced steel holding pen. Observation from elevated gantry only.",
      incidents: ["1993: Fatalities prior to park opening. Full breach during storm.", "2015: Field testing gone wrong during Indominus asset retrieval."],
      clone_species_count: 3,
      notable_traits: ["Hyper-intelligence","Pack coordination","Complex vocalization"],
      expanded_lore: "InGen's Velociraptors were fundamentally modified to be much larger than reality, potentially mixing DNA with Deinonychus or Utahraptor without public disclosure. They quickly became the most dangerous liability in the park."
    },
    film_appearances: ['JP1', 'TLW', 'JP3', 'JW', 'JWFK', 'Dom', 'Rebirth', 'CC']
  },
  {
    id: '3', slug: 'mosasaurus', common_name: 'Mosasaurus', scientific_name: 'Mosasaurus hoffmannii',
    scientific_picture: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Mosasaurus_hoffmannii_-_skeleton.jpg/1280px-Mosasaurus_hoffmannii_-_skeleton.jpg',
    fandom_picture: "https://static.wikia.nocookie.net/jurassicpark/images/d/d3/RebbirthMosasaurusrender.PNG/revision/latest/scale-to-width-down/1000?cb=20260104063438",
    type: 'real', diet: 'carnivore', era: 'Late Cretaceous (82-66 Ma)', threat_level: 5, tier: 1,
    real_length_m: 17.0, movie_length_m: 25.9, real_weight_kg: 14000, movie_weight_kg: 28000,
    fossil_section: {
      description: "Mosasaurus is the type genus of the Mosasauridae, an extinct group of aquatic squamate reptiles. It lived from about 82 to 66 million years ago during the Campanian and Maastrichtian stages of the Late Cretaceous. The genus was one of the first Mesozoic marine reptiles known to science—the first fossils of Mosasaurus were found as skulls in a chalk quarry near the Dutch city of Maastricht in the late 18th century, and were initially thought to be crocodiles or whales. One skull discovered around 1780 was famously nicknamed the \"great animal of Maastricht\". In 1808, naturalist Georges Cuvier concluded that it belonged to a giant marine lizard with similarities to monitor lizards but otherwise unlike any known living animal. This concept was revolutionary at the time and helped support the then-developing ideas of extinction. Cuvier did not designate a scientific name for the animal; this was done by William Daniel Conybeare in 1822 when he named it Mosasaurus in reference to its origin in fossil deposits near the Meuse River. The exact affinities of Mosasaurus as a squamate remain controversial, and scientists continue to debate whether its closest living relatives are monitor lizards or snakes.",
      discovery: "First remains found in 1764 near Maastricht, Netherlands.",
      accuracy_rating: 'EXAGGERATED',
      film_accuracy_notes: ["The film version is remarkably oversized, approaching blue whale dimensions at times.", "Real mosasaurs had a fluked tail like a shark, not an eel-like paddle as initially depicted."],
      diet_details: "Toothed apex marine predator; ate fish, turtles, ammonites, and smaller mosasaurs.",
      extended_trivia: ["Mosasaurus lived near the ocean's surface and possessed a shark-like fluked tail.","Their jaw possessed a second set of teeth farther back, similar to snakes."]
    },
    ingen_section: {
      file_number: 'ING-003-MOSA', classification: 'Restricted', creation_date: '2014',
      dna_donors: ["Mosasaurus genome", "Various modern marine life for scale adaptation"],
      modifications: ["Significant size augmentation for stadium spectacle.", "Accelerated growth."],
      containment: "Jurassic World Lagoon. 3 million gallon tank with reinforced observation deck.",
      incidents: ["2015: Consumed Indominus Rex asset during containment breach.", "2018: Escaped into open ocean via lagoon gate."],
      clone_species_count: 3,
      notable_traits: ["Gigantism syndrome","Amphibious adaptation"],
      expanded_lore: "Added as the star attraction to Jurassic World, the Mosasaurus was kept in a massive lagoon. It was severely over-scaled for spectacle, and eventually became the first known cloned asset to reach the global oceans following the Blackwood incident."
    },
    film_appearances: ['JW', 'JWFK', 'Dom', 'Rebirth']
  },
  {
    id: '4', slug: 'spinosaurus', common_name: 'Spinosaurus', scientific_name: 'Spinosaurus aegyptiacus',
    scientific_picture: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/FSAC-KK-11888.jpg/1280px-FSAC-KK-11888.jpg',
    fandom_picture: "https://static.wikia.nocookie.net/jurassicpark/images/1/1d/Spinosaurus_Rebirth_Render.webp/revision/latest?cb=20250602211356",
    type: 'real', diet: 'carnivore', era: 'Late Cretaceous (99-93 Ma)', threat_level: 5, tier: 1,
    real_length_m: 15.0, movie_length_m: 15.3, real_weight_kg: 7400, movie_weight_kg: 8000,
    fossil_section: {
      description: "Spinosaurus is a genus of large spinosaurid theropod dinosaurs that lived in what is now North Africa during the Cenomanian stage of the Late Cretaceous period, about 100 to 94 million years ago. The genus was known first from Egyptian remains discovered in 1912 and described by German palaeontologist Ernst Stromer in 1915. The original remains were destroyed in World War II, but additional material came to light in the early 21st century. It is unclear whether one or two species are represented in the fossils reported in the scientific literature. The type species, S. aegyptiacus, is mainly known from the Bahariya Formation in Egypt and the Kem Kem beds in Morocco. The other species, S. mirabilis, is known from the Farak Formation in Niger. Although another potential species, S. maroccanus, has been recovered from the Kem Kem beds, this dubious species is likely a junior synonym of S. aegyptiacus. Other possible junior synonyms include Sigilmassasaurus from the Kem Kem beds and Oxalaia from the Alcântara Formation in Brazil, though other researchers propose both genera to be distinct taxa.",
      discovery: "Discovered in 1912 by Richard Markgraf in Egypt.",
      accuracy_rating: 'FICTIONAL',
      film_accuracy_notes: ["Real spinosaurus was semi-aquatic with short legs, heavily adapted for swimming, not chasing humans on land.", "Its jaws were suited for catching fish, not snapping a T-rex's neck."],
      diet_details: "Piscivore primarily adapted for coastal fishing.",
      extended_trivia: ["The first Spinosaurus fossils discovered in Egypt were destroyed during WWII bombings of Munich.","Recent discoveries confirmed it had dense bones acting as diving ballast and a paddle-like tail."]
    },
    ingen_section: {
      file_number: 'ING-004-SPIN', classification: 'Classified', creation_date: '1999',
      dna_donors: ["Spinosaurus genome", "Baryonyx", "Unknown hyper-aggressive strain"],
      modifications: ["Illegal Amalgam Testing phase 1.", "Terrestrial adaptation (lengthened legs).", "Extreme hyper-aggression."],
      containment: "Isla Sorna Sector 4. Uncontained.",
      incidents: ["2001: Pursued marooned visitors across Isla Sorna.", "Classified as an illegal hybrid experiment by InGen internally."],
      clone_species_count: 4,
      notable_traits: ["Amalgam testing anomaly","Hyper-aggression","Terrain amphibious mobility"],
      expanded_lore: "Classified internally as an 'amalgam', it bypassed traditional InGen clearance logs in the late 90s on Site B. Built for maximum lethality and lacking natural biological behaviors, it ruthlessly hunted humans during the 2001 incident."
    },
    film_appearances: ['JP3', 'Rebirth']
  },
  {
    id: '5', slug: 'giganotosaurus', common_name: 'Giganotosaurus', scientific_name: 'Giganotosaurus carolinii',
    scientific_picture: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Giganotosaurus_at_Fernbank.jpg/1280px-Giganotosaurus_at_Fernbank.jpg',
    fandom_picture: "https://static.wikia.nocookie.net/jurassicpark/images/1/1c/Giganotasaurus_Jurassic_World_Dominion.png/revision/latest/scale-to-width-down/1000?cb=20220615052318",
    type: 'real', diet: 'carnivore', era: 'Late Cretaceous (99-97 Ma)', threat_level: 5, tier: 2,
    real_length_m: 13.2, movie_length_m: 15.5, real_weight_kg: 8200, movie_weight_kg: 10000,
    fossil_section: {
      description: "Giganotosaurus is a genus of large theropod dinosaur that lived in what is now Argentina, during the early Cenomanian age of the Late Cretaceous period, approximately 99.6 to 95 million years ago. The holotype specimen was discovered in the Candeleros Formation of Patagonia in 1993 and is almost 70% complete. The animal was named Giganotosaurus carolinii in 1995; the genus name translates to \"giant southern lizard\", and the specific name honors the discoverer, Ruben Carolini. A dentary bone, a tooth, and some tracks, discovered before the holotype, were later assigned to this animal. The genus attracted much interest and became part of a scientific debate about the maximum sizes of theropod dinosaurs.",
      discovery: "Discovered in 1993 by Rubén Carolini in Patagonia, Argentina.",
      accuracy_rating: 'EXAGGERATED',
      film_accuracy_notes: ["Spikes and jagged osteoderms on its back are exaggerated.", "Slightly oversized compared to current maximum estimates."],
      diet_details: "Apex predator capable of taking down massive sauropods in packs.",
      extended_trivia: ["It is slightly longer but more lightly built than Tyrannosaurus Rex.","Fossil trackways suggest Giganotosaurini hunted in packs to bring down giant titanosaurs."]
    },
    ingen_section: {
      file_number: 'ING-005-GIGA', classification: 'Restricted', creation_date: '2021',
      dna_donors: ["100% Giganotosaurus genome reconstructed by BioSyn."],
      modifications: ["None officially (BioSyn purist initiative), but exhibits unusual behavioral dominance displays."],
      containment: "BioSyn Sanctuary, Italy.",
      incidents: ["2022: Territory conflict with native T-rex and Therizinosaurus clone."],
      clone_species_count: 1,
      notable_traits: ["BioSyn 100% genome purity","Territorial dominance displays"],
      expanded_lore: "Cloned by BioSyn under Lewis Dodgson's pure-genome initiative. Introduced into the Italian sanctuary to act as the apex predator, it directly challenged the native Tyrannosaurus for dominance over the valley."
    },
    film_appearances: ['Dom']
  },
  {
    id: '6', slug: 'therizinosaurus', common_name: 'Therizinosaurus', scientific_name: 'Therizinosaurus cheloniformis',
    scientific_picture: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Therizinosaurus_arms.jpg/1280px-Therizinosaurus_arms.jpg',
    fandom_picture: "https://static.wikia.nocookie.net/jurassicpark/images/7/7f/JWD_Therizinosaurus.png/revision/latest/scale-to-width-down/1000?cb=20250805163424",
    type: 'real', diet: 'herbivore', era: 'Late Cretaceous (70 Ma)', threat_level: 4, tier: 2,
    real_length_m: 10.0, movie_length_m: 10.0, real_weight_kg: 5000, movie_weight_kg: 5000,
    fossil_section: {
      description: "Therizinosaurus is a genus of very large therizinosaurid dinosaurs that lived during the Late Cretaceous period in what is now Asia. It contains a single species, Therizinosaurus cheloniformis, known from the fossiliferous Nemegt Formation. The first remains of Therizinosaurus were found in 1948 by a Mongolian field expedition in the Gobi Desert and later described by Evgeny Maleev in 1954. The genus is only known from a few bones, including gigantic manual unguals, from which it gets its name, and additional findings comprising fore and hindlimb elements that were discovered from the 1960s through the 1980s.",
      discovery: "First found in 1948 by a Soviet-Mongolian expedition.",
      accuracy_rating: 'MOSTLY ACCURATE',
      film_accuracy_notes: ["Its blindness in the film is specific to that individual, not a species trait.", "It is correctly shown as feathered."],
      diet_details: "Strictly herbivorous; utilized long claws for stripping high foliage.",
      extended_trivia: ["Possessed the longest claws of any known animal, reaching up to 1 meter (3.3 feet) in length.","Despite its terrifying claws, it was absolutely a slow-moving herbivore."]
    },
    ingen_section: {
      file_number: 'ING-006-THER', classification: 'Public', creation_date: '2021',
      dna_donors: ["Therizinosaurus base from BioSyn archives."],
      modifications: ["No notable genetic tampering. BioSyn asset."],
      containment: "BioSyn Sanctuary.",
      incidents: ["2022: Defensive engagement terminating Giganotosaurus asset."],
      clone_species_count: 1,
      notable_traits: ["Aggressive territoriality","Plumage presence"],
      expanded_lore: "A BioSyn creation that thrived in the Sanctuary. A notable blind individual adapted to its visual impairment by using advanced echolocation-adjacent hearing and sweeping its massive claws to sense its immediate surroundings."
    },
    film_appearances: ['Dom']
  },
  {
    id: '7', slug: 'carnotaurus', common_name: 'Carnotaurus', scientific_name: 'Carnotaurus sastrei',
    scientific_picture: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Carnotaurus%2C_Chlup%C3%A1%C4%8D_Museum%2C_Prague-2.jpg/1280px-Carnotaurus%2C_Chlup%C3%A1%C4%8D_Museum%2C_Prague-2.jpg',
    fandom_picture: "https://static.wikia.nocookie.net/jurassicpark/images/d/da/3782_camotaurus_jw3d_46.png/revision/latest/scale-to-width-down/713?cb=20250716204358",
    type: 'real', diet: 'carnivore', era: 'Late Cretaceous (72-69 Ma)', threat_level: 4, tier: 2,
    real_length_m: 7.8, movie_length_m: 10.4, real_weight_kg: 1300, movie_weight_kg: 2000,
    fossil_section: {
      description: "Carnotaurus is a genus of theropod dinosaur that lived in South America during the Late Cretaceous period, between 69 and 66 million years ago. The only species is Carnotaurus sastrei. Known from a single well-preserved skeleton, it is one of the best-understood theropods from the Southern Hemisphere. The skeleton, found in 1984, was uncovered in the Chubut Province of Argentina from rocks of the La Colonia Formation. Carnotaurus is a derived member of the Abelisauridae, a group of large theropods that occupied the large predatorial niche in the southern landmasses of Gondwana during the late Cretaceous. Within the Abelisauridae, the genus is often considered a member of the Brachyrostra, a clade of short-snouted forms restricted to South America.",
      discovery: "Discovered in 1984 by José Bonaparte in Argentina.",
      accuracy_rating: 'CREATIVE LICENCE',
      film_accuracy_notes: ["Significantly oversized in the films.", "Did not have the thick armor plating shown on its back."],
      diet_details: "Fast runner targeting small, swift prey.",
      extended_trivia: ["Its name means 'meat-eating bull' referring to its unique demonic horns.","It has the shortest, most reduced forelimbs of any large theropod, smaller even than T. rex's."]
    },
    ingen_section: {
      file_number: 'ING-007-CARN', classification: 'Restricted', creation_date: '2004',
      dna_donors: ["Carnotaurus genome", "Tree frog"],
      modifications: ["Size upscaling for intimidation factor.", "Accelerated aggressive tendencies."],
      containment: "Isla Nublar North sector.",
      incidents: ["2018: Free roaming during Mt. Sibo eruption."],
      clone_species_count: 2,
      notable_traits: ["Thickened armor plating","Active camouflage capabilities (Chameleon DNA)"],
      expanded_lore: "Initially housed in a restricted paddock, the Carnotaur displayed startling active camouflage in early novel tests, traits that later resurfaced during the Mount Sibo eruption where they demonstrated extreme speed."
    },
    film_appearances: ['JWFK', 'Dom', 'CC']
  },
  {
    id: '8', slug: 'allosaurus', common_name: 'Allosaurus', scientific_name: 'Allosaurus fragilis',
    scientific_picture: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/WLA_hmns_Allosaurus_White_Background.jpg/1280px-WLA_hmns_Allosaurus_White_Background.jpg',
    fandom_picture: "https://static.wikia.nocookie.net/jurassicpark/images/b/bb/AlloRenderDominion.png/revision/latest?cb=20240817200513",
    type: 'real', diet: 'carnivore', era: 'Late Jurassic (155-145 Ma)', threat_level: 4, tier: 2,
    real_length_m: 8.5, movie_length_m: 10.2, real_weight_kg: 1700, movie_weight_kg: 2500,
    fossil_section: {
      description: "Allosaurus is a genus of theropod dinosaur that lived 155 to 145 million years ago during the Late Jurassic period. The first fossil remains that could definitively be ascribed to this genus were described in 1877 by Othniel C. Marsh. The name \"Allosaurus\" means \"different lizard\", alluding to its lightweight vertebrae, which Marsh believed were unique. The genus has a very complicated taxonomy and includes at least three valid species, the best known of which is A. fragilis. The bulk of Allosaurus remains come from North America's Morrison Formation, with material also known from the Alcobaça, Bombarral, and Lourinhã formations in Portugal. It was known for over half of the 20th century as Antrodemus, but a study of the abundant remains from the Cleveland-Lloyd Dinosaur Quarry returned the name \"Allosaurus\" to prominence. As one of the first well-known theropod dinosaurs, it has long attracted attention outside of paleontological circles.",
      discovery: "First described by Othniel Charles Marsh in 1877.",
      accuracy_rating: 'MOSTLY ACCURATE',
      film_accuracy_notes: ["Appearance is somewhat shrink-wrapped but generally adheres to paleontological norms.", "Juvenile portrayed initially, adults appear later."],
      diet_details: "Varied diet, famous for preying on heavily armored dinosaurs like Stegosaurus.",
      extended_trivia: ["Allosaurus jaws could act like a hatchet, slamming down on prey to inflict maximum bleeding.","Fossil evidence shows extensive combat injuries, particularly spiked tail punctures from Stegosaurus."]
    },
    ingen_section: {
      file_number: 'ING-008-ALLO', classification: 'Restricted', creation_date: '1999',
      dna_donors: ["Allosaurus baseline."],
      modifications: ["Minor genetic smoothing.", "Growth acceleration."],
      containment: "Isla Nublar Paddock 9.",
      incidents: ["2018: Captured by mercenaries during Nublar evacuation."],
      clone_species_count: 1,
      notable_traits: ["Growth acceleration"],
      expanded_lore: "Populations were bred relatively late into Jurassic World's history. Several were trapped on the island during the eruption and subsequently sold into the black market, adapting surprisingly well to human-populated outskirts."
    },
    film_appearances: ['JWFK', 'Dom', 'Rebirth']
  },
  {
    id: '9', slug: 'baryonyx', common_name: 'Baryonyx', scientific_name: 'Baryonyx walkeri',
    scientific_picture: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Baryonyx_walkeri_mount_NMNS.jpg/1280px-Baryonyx_walkeri_mount_NMNS.jpg',
    fandom_picture: "https://static.wikia.nocookie.net/jurassicpark/images/8/8a/1440x651_0012_baryonyx.png/revision/latest?cb=20190703043626",
    type: 'real', diet: 'carnivore', era: 'Early Cretaceous (130-125 Ma)', threat_level: 4, tier: 2,
    real_length_m: 9.5, movie_length_m: 9.5, real_weight_kg: 1700, movie_weight_kg: 2000,
    fossil_section: {
      description: "Baryonyx is a genus of theropod dinosaur which lived in the Barremian stage of the Early Cretaceous period, about 130–125 million years ago. The first skeleton was discovered in 1983 in the Smokejack Clay Pit, of Surrey, England, in sediments of the Weald Clay Formation, and became the holotype specimen of Baryonyx walkeri, named by palaeontologists Alan J. Charig and Angela C. Milner in 1986. The genus name Baryonyx comes from Ancient Greek βαρύς (barús), meaning \"heavy\" or \"strong\", and ὄνυξ (ónux), meaning \"claw\", alluding to the animal's very large claw on the first finger; the specific name, walkeri, refers to its discoverer, amateur fossil collector William J. Walker. The holotype specimen is one of the most complete theropod skeletons from the UK, and its discovery attracted media attention. Specimens later discovered in other parts of the United Kingdom and Iberia have also been assigned to the genus, though many have since been moved to new genera.",
      discovery: "Discovered in 1983 by William Walker in Surrey, England.",
      accuracy_rating: 'CREATIVE LICENCE',
      film_accuracy_notes: ["Skull is too broad and boxy compared to the narrow, crocodile-like real skull.", "Real animal was likely semi-aquatic like a heron."],
      diet_details: "Semi-aquatic piscivore; hook-like claws evolved to snatch fish.",
      extended_trivia: ["The original fossil found in Surrey, England, still contained fossilized fish scales in its stomach region.","It had an elongated snout filled with conical, crocodile-like teeth."]
    },
    ingen_section: {
      file_number: 'ING-009-BARY', classification: 'Restricted', creation_date: '1995',
      dna_donors: ["Baryonyx genome."],
      modifications: ["Jaw structure thickened for terrestrial prey consumption.", "Aggression elevated."],
      containment: "Isla Nublar River Region.",
      incidents: ["2018: Lava bunker encounter tracking Claire Dearing."],
      clone_species_count: 1,
      notable_traits: ["Thermal vision","Aquatic agility"],
      expanded_lore: "Bred for the river cruise attraction. When contained on Nublar, they thrived in the island's drainage pipes. A notable encounter occurred deep within the Lockwood Manor lava bunker during the 2018 evacuation."
    },
    film_appearances: ['JWFK', 'CC']
  },
  {
    id: '10', slug: 'pyroraptor', common_name: 'Pyroraptor', scientific_name: 'Pyroraptor olympius',
    scientific_picture: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/PyroScaleSilhouetWiki.png/1280px-PyroScaleSilhouetWiki.png',
    fandom_picture: "https://static.wikia.nocookie.net/jurassicpark/images/1/16/JWD_Pyroraptor.png/revision/latest?cb=20241117125052",
    type: 'real', diet: 'carnivore', era: 'Late Cretaceous (70 Ma)', threat_level: 4, tier: 2,
    real_length_m: 2.5, movie_length_m: 3.5, real_weight_kg: 30, movie_weight_kg: 60,
    fossil_section: {
      description: "Pyroraptor is an extinct genus of paravian dinosaur, probably a dromaeosaurid or unenlagiid, from the Late Cretaceous Ibero-Armorican island, of what is now southern France. It lived during the late Campanian and early Maastrichtian stages, approximately 72 million years ago. It is known from a single partial specimen that was found in Provence in 1992, after a forest fire. The animal was named Pyroraptor olympius by Allain and Taquet in 2000.",
      discovery: "Found in Provence, France, after a forest fire in 1992.",
      accuracy_rating: 'FICTIONAL',
      film_accuracy_notes: ["Shown as fully feathered, which is good.", "Swimming in freezing sub-zero conditions is highly improbable for this species."],
      diet_details: "Opportunistic small pack hunter.",
      extended_trivia: ["Its name translates directly as 'fire thief', inspired by its discovery area recovering from a wildfire.","As a Dromaeosaur, it possessed the distinct 'killing claw' characteristic of the raptor family."]
    },
    ingen_section: {
      file_number: 'ING-010-PYRO', classification: 'Classified', creation_date: '2020',
      dna_donors: ["Pyroraptor fragments reconstructed by BioSyn."],
      modifications: ["Cold resistance.", "Amphibious adaptation for ice water diving.", "Full feather plumage intact."],
      containment: "BioSyn frozen valley sector.",
      incidents: ["2022: Attacked intruders on frozen lake."],
      clone_species_count: 2,
      notable_traits: ["Cold resistance","Sub-zero aquatic adaptation"],
      expanded_lore: "A uniquely tailored BioSyn asset covered entirely in red plumage. Adapted for the freezing climates of the Italian Alps sanctuary, it demonstrated shocking capability by swimming powerfully under frozen lake ice."
    },
    film_appearances: ['Dom']
  },
  {
    id: '11', slug: 'quetzalcoatlus', common_name: 'Quetzalcoatlus', scientific_name: 'Quetzalcoatlus northropi',
    scientific_picture: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Quetzalcoatlus_northropi.jpg/1280px-Quetzalcoatlus_northropi.jpg',
    fandom_picture: "https://static.wikia.nocookie.net/jurassicpark/images/9/9a/Quetzalcoatlus_Rebirth_Render.webp/revision/latest?cb=20250602211201",
    type: 'real', diet: 'carnivore', era: 'Late Cretaceous (68-66 Ma)', threat_level: 4, tier: 2,
    real_length_m: 11.0, movie_length_m: 12.0, real_weight_kg: 200, movie_weight_kg: 250,
    fossil_section: {
      description: "Quetzalcoatlus is a genus of azhdarchid pterosaur that lived during the Maastrichtian age of the Late Cretaceous in North America. The type specimen, recovered in 1971 from the Javelina Formation of Texas, United States, consists of several wing fragments and was described as Quetzalcoatlus northropi in 1975 by Douglas Lawson. The generic name refers to the Aztec serpent god of the sky, Quetzalcōātl, while the specific name honors Jack Northrop, designer of a tailless fixed-wing aircraft. The remains of a second species were found between 1972 and 1974, also by Lawson, around 40 km (25 mi) from the Q. northropi locality. In 2021, these remains were assigned to the name Quetzalcoatlus lawsoni by Brian Andres and (posthumously) Wann Langston Jr., as part of a series of publications on the genus.",
      discovery: "Discovered in Texas in 1971 by Douglas A. Lawson.",
      accuracy_rating: 'ACCURATE',
      film_accuracy_notes: ["Mostly accurate scale and appearance.", "It carried pycnofibers (fuzz), true to life.", "Its ability to take down planes is physically questionable but cinematic."],
      diet_details: "Terrestrial stalker; consumed small dinosaurs on the ground rather than skimming waters.",
      extended_trivia: ["The largest flying animal in Earth's history, standing as tall as a giraffe when grounded.","It did not hunt by plucking fish from the ocean, opting instead to stalk across plains like a giant heron."]
    },
    ingen_section: {
      file_number: 'ING-011-QUET', classification: 'Public', creation_date: '2021',
      dna_donors: ["BioSyn asset reconstruction."],
      modifications: ["Aggressive territorial expansion."],
      containment: "Uncontained. BioSyn aerial dampening field.",
      incidents: ["2022: Brought down the C-119 cargo plane over BioSyn valley."],
      clone_species_count: 1,
      notable_traits: ["Aerial supremacy"],
      expanded_lore: "Brought to life by BioSyn, these colossal pterosaurs were completely uncontained save for the aerial dampening fields over the valley. They possessed the sheer mass required to destabilize heavy aircraft."
    },
    film_appearances: ['Dom', 'Rebirth']
  },
  {
    id: '12', slug: 'pteranodon', common_name: 'Pteranodon', scientific_name: 'Pteranodon longiceps',
    scientific_picture: 'https://upload.wikimedia.org/wikipedia/commons/7/77/Pteranodon_amnh_martyniuk.jpg',
    fandom_picture: "https://static.wikia.nocookie.net/jurassicpark/images/1/1a/Pteranodon_render.png/revision/latest/scale-to-width-down/1000?cb=20180723084903",
    type: 'real', diet: 'carnivore', era: 'Late Cretaceous (86-84 Ma)', threat_level: 3, tier: 2,
    real_length_m: 7.0, movie_length_m: 8.0, real_weight_kg: 50, movie_weight_kg: 80,
    fossil_section: {
      description: "Pteranodon (; from Ancient Greek pteron 'wing', an- 'without', and odon 'tooth' is a genus of pterosaur that included some of the largest known flying reptiles, with P. longiceps having a wingspan of over 6 m. They lived during the late Cretaceous geological period of North America in present-day Kansas, Nebraska, Wyoming, South Dakota and Alabama. More fossil specimens of Pteranodon have been found than any other pterosaur, with about 1,200 specimens known to science, many of them well preserved with nearly complete skulls and articulated skeletons. It was an important part of the animal community in the Western Interior Seaway.",
      discovery: "First described by O.C. Marsh in 1876.",
      accuracy_rating: 'EXAGGERATED',
      film_accuracy_notes: ["Pteranodons completely lacked teeth (the name means 'wing without tooth'). The JW versions have teeth.", "Their feet were not capable of grasping prey like an eagle."],
      diet_details: "Coastal fish-eater (piscivore).",
      extended_trivia: ["Pteranodon means 'winged and toothless', making the Jurassic clones structurally paradoxical.","Males possessed massive cranial crests primarily used for sexual display rather than flight aerodynamics."]
    },
    ingen_section: {
      file_number: 'ING-012-PTER', classification: 'Restricted', creation_date: '1998',
      dna_donors: ["Pteranodon genome", "Avian donors (Eagle)"],
      modifications: ["Prehensile feet capable of lifting heavy loads.", "Teeth reintroduced via genetic anomaly.", "Aggression heightened towards humans."],
      containment: "Jurassic World Aviary. Shatter-proof glass.",
      incidents: ["2001: Isla Sorna Aviary breach.", "2015: Main Street assault during JW incident."],
      clone_species_count: 2,
      notable_traits: ["Re-introduced dentition","Enhanced lifting capacity"],
      expanded_lore: "The InGen variants experienced heavy mutation, resulting in sharp teeth despite the original animal being toothless. They demonstrated highly aggressive flocking patterns and posed persistent threats to aerial transport across Costa Rica."
    },
    film_appearances: ['JP3', 'JW', 'JWFK', 'Dom', 'CC']
  },
  {
    id: '13', slug: 'dimorphodon', common_name: 'Dimorphodon', scientific_name: 'Dimorphodon macronyx',
    scientific_picture: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Dimorphodon_Flight_Pose.png/1280px-Dimorphodon_Flight_Pose.png',
    fandom_picture: "https://static.wikia.nocookie.net/jurassicpark/images/2/20/Dino_a.png/revision/latest?cb=20150419231744",
    type: 'real', diet: 'carnivore', era: 'Early Jurassic (195-190 Ma)', threat_level: 3, tier: 3,
    real_length_m: 1.4, movie_length_m: 1.4, real_weight_kg: 2, movie_weight_kg: 5,
    fossil_section: {
      description: "Dimorphodon is a genus of medium-sized pterosaur that lived in Europe during the early Jurassic Period. It was named by paleontologist Richard Owen in 1859. Dimorphodon means \"two-form tooth\", derived from the Greek di- (δι-) meaning 'two', morphḗ (μορφή) meaning 'shape' and odṓn (ὀδών) meaning 'tooth', referring to the fact that it had two distinct types of teeth in its jaws – which is comparatively rare among reptiles. The diet of Dimorphodon has been questioned among researchers, with earlier interpretations depicting it as an insectivore or a piscivore. Recent studies have suggested that Dimorphodon likely hunted small vertebrates, though it still would have consumed small invertebrates like insects.",
      discovery: "Found in Dorset, England in 1828 by Mary Anning.",
      accuracy_rating: 'CREATIVE LICENCE',
      film_accuracy_notes: ["Rendered with a more theropod-like face.", "Extremely aggressive in the film, unlike the likely timid real-world counterpart."],
      diet_details: "Insectivore / small vertebrates.",
      extended_trivia: ["It possessed two fully distinct types of teeth, a trait extremely rare among reptiles.","Its flight capabilities were likely clumsy, relying heavily on climbing and gliding."]
    },
    ingen_section: {
      file_number: 'ING-013-DIMO', classification: 'Public', creation_date: '2004',
      dna_donors: ["Dimorphodon base."],
      modifications: ["None."],
      containment: "Jurassic World Aviary alongside Pteranodons.",
      incidents: ["2015: Main Street assault."],
      clone_species_count: 1,
      notable_traits: ["Aggressive flocking"],
      expanded_lore: "Displayed in the Jurassic World Aviary alongside larger pterosaurs. Though harmless alone, their genetically altered temperament caused them to swarm visitors in massive violent flocks during the 2015 breach."
    },
    film_appearances: ['JW', 'CC']
  },
  {
    id: '14', slug: 'dilophosaurus', common_name: 'Dilophosaurus', scientific_name: 'Dilophosaurus wetherilli',
    scientific_picture: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/DilophosaurusROM1.JPG/1280px-DilophosaurusROM1.JPG',
    fandom_picture: "https://static.wikia.nocookie.net/jurassicpark/images/6/6f/Dilophosaurus_Rebirth_Render.webp/revision/latest?cb=20250602210751",
    type: 'real', diet: 'carnivore', era: 'Early Jurassic (193 Ma)', threat_level: 3, tier: 3,
    real_length_m: 7.0, movie_length_m: 3.0, real_weight_kg: 400, movie_weight_kg: 100,
    fossil_section: {
      description: "Dilophosaurus is a genus of theropod dinosaurs that lived in what is now North America during the Early Jurassic, about 186 million years ago. Three skeletons were discovered in northern Arizona in 1940, and the two best preserved were collected in 1942. The most complete specimen became the holotype of a new species in the genus Megalosaurus, named M. wetherilli by Samuel P. Welles in 1954. Welles found a larger skeleton in the same region belonging to the same species in 1964. Realizing it bore crests on its skull, he assigned the species to the new genus Dilophosaurus in 1970, as Dilophosaurus wetherilli. The genus name means \"two-crested lizard\", and the species name honors John Wetherill, an explorer and amateur archeologist. Further specimens have since been found, including an infant. Fossil footprints have also been attributed to the animal, including resting traces. Another species, Dilophosaurus sinensis from China, was named in 1993, but was later found to belong to the genus Sinosaurus.",
      discovery: "Discovered in 1942 in Arizona.",
      accuracy_rating: 'FICTIONAL',
      film_accuracy_notes: ["The neck frill is completely fictional.", "The venom-spitting capability has no basis in the fossil record.", "The animal is massively scaled down; real Dilophosaurus was over 6 meters long."],
      diet_details: "Carnivore with a weakly muscled jaw, hypothesized to hunt fish or smaller prey.",
      extended_trivia: ["The real animal did not spit venom or have a frill—those were pure InGen genetic artifacts.","It was actually the apex predator of the Early Jurassic, reaching over 20 feet in length."]
    },
    ingen_section: {
      file_number: 'ING-014-DILO', classification: 'Restricted', creation_date: '1992',
      dna_donors: ["Dilophosaurus genome", "Poison Dart Frog", "Frilled Lizard"],
      modifications: ["Added venom glands.", "Added expandable neck frill.", "Size stunting."],
      containment: "Isla Nublar Tour Route.",
      incidents: ["1993: Fatal encounter with Dennis Nedry."],
      clone_species_count: 3,
      notable_traits: ["Toxic venom glands","Expandable defensive neck frill","Size stunting"],
      expanded_lore: "One of InGen's earliest DNA anomalies. The integration of poison dart frog DNA resulted in highly toxic venom sprayed at prey's eyes. It was notoriously responsible for the downfall of Dennis Nedry."
    },
    film_appearances: ['JP1', 'Dom', 'Rebirth']
  },
  {
    id: '15', slug: 'compsognathus', common_name: 'Compsognathus', scientific_name: 'Compsognathus longipes',
    scientific_picture: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Compy.jpg/1280px-Compy.jpg',
    fandom_picture: "https://static.wikia.nocookie.net/jurassicpark/images/8/87/Compy_JWR.jpg/revision/latest?cb=20260316020859",
    type: 'real', diet: 'carnivore', era: 'Late Jurassic (150 Ma)', threat_level: 2, tier: 3,
    real_length_m: 1.0, movie_length_m: 1.0, real_weight_kg: 3, movie_weight_kg: 3,
    fossil_section: {
      description: "Compsognathus is a genus of small, bipedal, carnivorous theropod dinosaur. Members of its single species Compsognathus longipes could grow to around the size of a chicken. They lived about 150 million years ago, during the Tithonian age of the late Jurassic period, in what is now Europe. Paleontologists have found two well-preserved fossils, one in Germany in the 1850s and the second in France more than a century later. Today, C. longipes is the only recognized species, although the French specimen was once thought to belong to a separate species named C. corallestris.",
      discovery: "First specimen discovered in Bavaria, Germany in the 1850s.",
      accuracy_rating: 'ACCURATE',
      film_accuracy_notes: ["Size is generally accurate.", "Social pack-behavior is plausible but unconfirmed in fossils.", "Lacks feathers."],
      diet_details: "Scavenger and insect hunter.",
      extended_trivia: ["It was historically the first dinosaur recognized from a reasonably complete skeleton.","For decades, it was the smallest known non-avian dinosaur globally."]
    },
    ingen_section: {
      file_number: 'ING-015-COMP', classification: 'Public', creation_date: '1995',
      dna_donors: ["Compsognathus genome"],
      modifications: ["Feather suppression."],
      containment: "Unable to contain natively due to small size. Frequently escapes paddocks.",
      incidents: ["1997: Attack on Isla Sorna beach group.", "1997: Consumption of Dieter Stark."],
      clone_species_count: 1,
      notable_traits: ["Feather suppression","Swarm intelligence"],
      expanded_lore: "Colloquially known as 'Compies'. Too small to reliably contain, they freely roamed Site B and eventually spread across the Costa Rican mainland via cargo ships, establishing wild populations in the dense jungles."
    },
    film_appearances: ['TLW', 'JP3']
  },
  {
    id: '16', slug: 'dimetrodon', common_name: 'Dimetrodon', scientific_name: 'Dimetrodon grandis',
    scientific_picture: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Dimetrodon_incisivum_01.jpg/1280px-Dimetrodon_incisivum_01.jpg',
    fandom_picture: "https://static.wikia.nocookie.net/jurassicpark/images/4/4a/JWD_Dimetrodon_render.png/revision/latest/scale-to-width-down/1000?cb=20240213160809",
    type: 'real', diet: 'carnivore', era: 'Early Permian (295-272 Ma)', threat_level: 3, tier: 3,
    real_length_m: 4.6, movie_length_m: 4.6, real_weight_kg: 250, movie_weight_kg: 250,
    fossil_section: {
      description: "Dimetrodon is an extinct genus of sphenacodontid synapsid that lived during the Cisuralian epoch of the Permian period, around 295–272 million years ago. With most species measuring 1.7–4.6 m (5.6–15.1 ft) long and weighing 28–250 kg (62–551 lb), the most prominent feature of Dimetrodon is the large neural spine sail on its back formed by elongated spines extending from the vertebrae. It was an obligate quadruped and had a tall, curved skull with large teeth of different sizes set along the jaws. Most fossils have been found in the Southwestern United States, the majority of these coming from a geological deposit called the Red Beds of Texas and Oklahoma. More recently, its fossils have also been found in Germany and over a dozen species have been named since the genus was first erected in 1878.",
      discovery: "Described in 1878 by Edward Drinker Cope.",
      accuracy_rating: 'MOSTLY ACCURATE',
      film_accuracy_notes: ["Appearance is good, but they lived millions of years before the first dinosaurs."],
      diet_details: "Apex predator of the Permian, tracking prey via smell.",
      extended_trivia: ["It is not a dinosaur at all; it's a synapsid, placing it closer to mammals than to reptiles on the evolutionary tree.","It went completely extinct 40 million years before the first true dinosaur existed."]
    },
    ingen_section: {
      file_number: 'ING-016-DIME', classification: 'Public', creation_date: '2021',
      dna_donors: ["BioSyn extraction efforts."],
      modifications: ["None."],
      containment: "BioSyn amber mine caverns.",
      incidents: ["2022: Pursued Dr. Grant and colleagues in the mine complex."],
      clone_species_count: 1,
      notable_traits: ["Cave thermal regulation"],
      expanded_lore: "Extracted exclusively by BioSyn for amber-mining operations security. Thriving in the damp, dark caverns of the Sanctuary, they regulated their temperatures via their iconic sails near geothermal vents."
    },
    film_appearances: ['Dom']
  },
  {
    id: '17', slug: 'pachycephalosaurus', common_name: 'Pachycephalosaurus', scientific_name: 'Pachycephalosaurus wyomingensis',
    scientific_picture: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Pachycephalosaurus_wyomingensis_ROM.jpg/1280px-Pachycephalosaurus_wyomingensis_ROM.jpg',
    fandom_picture: "https://static.wikia.nocookie.net/jurassicpark/images/7/73/Pachycephalosaurus-info-graphic.png/revision/latest?cb=20150420212950",
    type: 'real', diet: 'herbivore', era: 'Late Cretaceous (70-66 Ma)', threat_level: 2, tier: 3,
    real_length_m: 4.5, movie_length_m: 4.5, real_weight_kg: 450, movie_weight_kg: 500,
    fossil_section: {
      description: "Pachycephalosaurus is a genus of pachycephalosaurid ornithischian dinosaur. The type species, P. wyomingensis, is the only known definitive species. The possibly synonymous taxon, Stygimoloch, might represent a distinct genus or a second species, P. spinifer. It lived during the Maastrichtian age of the Late Cretaceous period in what is now western North America. Remains have been excavated in Montana, South Dakota, Wyoming, and Alberta. Mainly known from a single skull and a few extremely thick skull roofs, Pachycephalosaurus is estimated to have reached 4.5 m (15 ft) long and weighed 370–450 kg (820–990 lb). More complete fossils would come to be found in the following years.",
      discovery: "First fragments found in the 1850s in North America.",
      accuracy_rating: 'ACCURATE',
      film_accuracy_notes: ["Behavior as aggressive head-butters is accurate relative to modern bighorn sheep models."],
      diet_details: "Low browsing herbivore, chewing on leaves, seeds, and fruit.",
      extended_trivia: ["The dome atop its skull could grow up to 10 inches thick.","Recent theories suggest different named 'species' like Dracorex are actually just juvenile states of Pachycephalosaurus."]
    },
    ingen_section: {
      file_number: 'ING-017-PACH', classification: 'Public', creation_date: '1995',
      dna_donors: ["Pachycephalosaurus genome."],
      modifications: ["Enhanced skull density."],
      containment: "Standard herbivore paddock.",
      incidents: ["1997: Game trail capture sequence."],
      clone_species_count: 1,
      notable_traits: ["Enhanced cranial density"],
      expanded_lore: "Famously captured by the InGen harvest team on the Site B game trail (earning the nickname 'Friar Tuck'). Their thick skulls were tested internally to withstand immense kinetic impacts without internal hemorrhaging."
    },
    film_appearances: ['TLW', 'JW', 'CC']
  },
  {
    id: '18', slug: 'ankylosaurus', common_name: 'Ankylosaurus', scientific_name: 'Ankylosaurus magniventris',
    scientific_picture: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Ankylosaur_head_-_cast_-_Custer_County_Montana_-_Museum_of_the_Rockies_-_2013-07-08.jpg/1280px-Ankylosaur_head_-_cast_-_Custer_County_Montana_-_Museum_of_the_Rockies_-_2013-07-08.jpg',
    fandom_picture: "https://static.wikia.nocookie.net/jurassicpark/images/4/47/RebirthAnkylosaurus.png/revision/latest/scale-to-width-down/1000?cb=20250411015057",
    type: 'real', diet: 'herbivore', era: 'Late Cretaceous (68-66 Ma)', threat_level: 2, tier: 2,
    real_length_m: 8.0, movie_length_m: 8.0, real_weight_kg: 6000, movie_weight_kg: 6000,
    fossil_section: {
      description: "Ankylosaurus is a genus of armored dinosaur. Its fossils have been found in geological formations dating to the very end of the Cretaceous Period, about 70-66 million years ago, in western North America, making it among the last of the non-avian dinosaurs. It was named by Barnum Brown in 1908; it is monotypic, containing only A. magniventris. The generic name means \"fused\" or \"bent lizard\", and the specific name means \"great belly\". A handful of specimens have been excavated to date, but a complete skeleton has not been discovered. Though other members of Ankylosauria are represented by more extensive fossil material, Ankylosaurus is often considered the archetypal member of its group, despite having some unusual features.",
      discovery: "Discovered by Barnum Brown in 1906.",
      accuracy_rating: 'ACCURATE',
      film_accuracy_notes: ["Armor depiction is quite accurate.", "Movement is shown somewhat faster than realistically plausible."],
      diet_details: "Ground level forager, equipped with a uniquely complex nasal passage.",
      extended_trivia: ["Its massive tail club was highly effective at shattering the bones of attacking Tyrannosaurs.","It was practically immune to predators from the top, requiring them to be flipped over to be vulnerable."]
    },
    ingen_section: {
      file_number: 'ING-018-ANKY', classification: 'Public', creation_date: '2001',
      dna_donors: ["Base Ankylosaurus."],
      modifications: ["Slight armor density augmentation via crocodile DNA."],
      containment: "Valley Explorer Area.",
      incidents: ["2015: Indominus Rex encounter in restricted zone."],
      clone_species_count: 2,
      notable_traits: ["Augmented scute calcification"],
      expanded_lore: "Heavily utilized in the Gyrosphere attraction. Its genetic modifications resulted in sharper osteoderm spikes along its back compared to its real-world counterpart. One notoriously fought the Indominus Rex to a lethal standstill."
    },
    film_appearances: ['JW', 'JWFK', 'Dom', 'CC']
  },
  {
    id: '19', slug: 'stegosaurus', common_name: 'Stegosaurus', scientific_name: 'Stegosaurus stenops',
    scientific_picture: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Journal.pone.0138352.g001A.jpg/1280px-Journal.pone.0138352.g001A.jpg',
    fandom_picture: "https://static.wikia.nocookie.net/jurassicpark/images/8/8f/Jurassic_world_fallen_kingdom_stegosaurus_v4_by_sonichedgehog2-dco06sh.png/revision/latest/scale-to-width-down/1000?cb=20180928221819",
    type: 'real', diet: 'herbivore', era: 'Late Jurassic (155-150 Ma)', threat_level: 2, tier: 3,
    real_length_m: 9.0, movie_length_m: 9.0, real_weight_kg: 5000, movie_weight_kg: 5500,
    fossil_section: {
      description: "Stegosaurus is a genus of herbivorous four-legged armored dinosaurs from the Late Jurassic, characterized by the distinctive kite-shaped upright plates along their backs and spikes on their tails. Fossils of the genus have been found in the western United States and in Portugal, where they are found in Kimmeridgian- to Tithonian-aged strata, dating to between 155 and 145 million years ago. Of the species that have been classified in the upper Morrison Formation of the western US, only three are universally recognized: S. stenops, S. ungulatus and S. sulcatus. The remains of over 80 individual animals of this genus have been found. Stegosaurus would have lived alongside dinosaurs such as Apatosaurus, Diplodocus, Camarasaurus and Allosaurus, the latter of which may have preyed on it.",
      discovery: "Found during the Bone Wars by O.C. Marsh in 1877.",
      accuracy_rating: 'MOSTLY ACCURATE',
      film_accuracy_notes: ["Tail drags on the ground in early films, which is inaccurate. It should point straight back."],
      diet_details: "Ground-level browser; strictly fed on low mosses and ferns.",
      extended_trivia: ["Its brain was roughly the size of a modern walnut.","The distinct spiked arrangement on the end of its tail is officially called a 'thagomizer' by paleontologists."]
    },
    ingen_section: {
      file_number: 'ING-019-STEG', classification: 'Public', creation_date: '1995',
      dna_donors: ["Stegosaurus genome."],
      modifications: ["None significant."],
      containment: "Isla Sorna wide grazing.",
      incidents: ["1997: Defensive attack on Sarah Harding during photography."],
      clone_species_count: 1,
      notable_traits: ["Amplified size"],
      expanded_lore: "A massive herbivore documented extensively on Isla Sorna. They exhibited highly organized herd behavior and extreme hostility when their infants were threatened. Later relocated to Isla Nublar and ultimately the mainland."
    },
    film_appearances: ['TLW', 'JW', 'JWFK']
  },
  {
    id: '20', slug: 'triceratops', common_name: 'Triceratops', scientific_name: 'Triceratops horridus',
    scientific_picture: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/LA-Triceratops_mount-2.jpg/1280px-LA-Triceratops_mount-2.jpg',
    fandom_picture: "https://static.wikia.nocookie.net/jurassicpark/images/5/52/Jurassic_world_fallen_kingdom_triceratops_by_sonichedgehog2-dc9dwcu.png/revision/latest?cb=20180427200649",
    type: 'real', diet: 'herbivore', era: 'Late Cretaceous (68-66 Ma)', threat_level: 2, tier: 1,
    real_length_m: 9.0, movie_length_m: 9.0, real_weight_kg: 9000, movie_weight_kg: 10000,
    fossil_section: {
      description: "Triceratops is a genus of chasmosaurine ceratopsian dinosaur that lived during the late Maastrichtian age of the Late Cretaceous period, about 68 to 66 million years ago on the island continent of Laramidia, now forming western North America. It was one of the last-known non-avian dinosaurs and lived until the Cretaceous–Paleogene extinction event 66 million years ago. The name Triceratops, which means 'three-horned face', is derived from the Ancient Greek words τρί-, meaning \"three\", κέρας, meaning \"horn\", and ὤψ, meaning \"face\".",
      discovery: "First described by O.C. Marsh in 1889.",
      accuracy_rating: 'ACCURATE',
      film_accuracy_notes: ["Depicted largely accurately in terms of size, shape, and suspected herding behavior."],
      diet_details: "Powerful bite capable of shearing thick cycads and palm fronds.",
      extended_trivia: ["A third of its entire body length consisted of its massive skull.","Its neck frill was likely used more for species recognition and sexual display than for physical combat."]
    },
    ingen_section: {
      file_number: 'ING-020-TRIC', classification: 'Public', creation_date: '1992',
      dna_donors: ["Triceratops genome."],
      modifications: ["West Indian Lilac allergy due to minor genetic miscoding."],
      containment: "Isla Nublar Herbivore Enclosure.",
      incidents: ["1993: Park sickness due to plant consumption."],
      clone_species_count: 1,
      notable_traits: ["West Indian Lilac intolerance"],
      expanded_lore: "The favorite dinosaur of many, including Dr. Ellie Sattler. A minor miscoding in InGen's cloning process left them uniquely vulnerable to the toxic berries of the West Indian Lilac, resulting in periodic park sickness."
    },
    film_appearances: ['JP1', 'JW', 'Dom']
  },
  {
    id: '21', slug: 'sinoceratops', common_name: 'Sinoceratops', scientific_name: 'Sinoceratops zhuchengensis',
    scientific_picture: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Sinoceratops_skeleton.jpg/1280px-Sinoceratops_skeleton.jpg',
    fandom_picture: "https://static.wikia.nocookie.net/jurassicpark/images/a/ad/Jurassic_world_sinoceratops_by_sonichedgehog2-dc9dg8x.png/revision/latest?cb=20180427200509",
    type: 'real', diet: 'herbivore', era: 'Late Cretaceous (73 Ma)', threat_level: 2, tier: 3,
    real_length_m: 6.0, movie_length_m: 6.0, real_weight_kg: 2000, movie_weight_kg: 2500,
    fossil_section: {
      description: "Sinoceratops is an extinct genus of ceratopsian dinosaur that lived from 77.3 to 73.5 million years ago during the latter part of the Cretaceous Period in what is now Shandong province in China. It was named in 2010 by Xu Xing et al. for three skulls from Zhucheng, China. The name of the type species Sinoceratops zhuchengensis means \"Chinese horned face from Zhucheng\", after the location of its discovery. Sinoceratops was a medium-sized, averagely-built, ground-dwelling, quadrupedal herbivore. It could grow up to an estimated 5 metres (16 ft) in length and weigh up to 2 tonnes.",
      discovery: "Discovered in 2010 in Shandong province, China.",
      accuracy_rating: 'MOSTLY ACCURATE',
      film_accuracy_notes: ["Two holes in the frill are visible in the film design which is not anatomically normal for living animals (they would be covered in skin)."],
      diet_details: "Bulk feeder in dense prehistoric scrubland.",
      extended_trivia: ["It is the first incredibly large ceratopsid ever discovered in China.","Unlike Triceratops, it possessed a large nasal horn but entirely lacked brow horns."]
    },
    ingen_section: {
      file_number: 'ING-021-SINC', classification: 'Public', creation_date: '2016',
      dna_donors: ["Sinoceratops genome."],
      modifications: ["Pachyrhinosaurus sequence gap-filling causing skull holes."],
      containment: "Isla Nublar Sector 6.",
      incidents: ["2018: Carnotaurus altercation during eruption."],
      clone_species_count: 2,
      notable_traits: ["Pachyrhinosaurus gene-splice anomalies"],
      expanded_lore: "Created relatively late into the existence of Jurassic World. The visual gaps in its frill are genetic side effects from splicing with Pachyrhinosaurus sequence gaps. Surviving the eruption, they adapted well to Californian climates."
    },
    film_appearances: ['JWFK', 'Dom']
  },
  {
    id: '22', slug: 'nasutoceratops', common_name: 'Nasutoceratops', scientific_name: 'Nasutoceratops titusi',
    scientific_picture: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/NasutoceratopsArizona.jpg/1280px-NasutoceratopsArizona.jpg',
    fandom_picture: "https://static.wikia.nocookie.net/jurassicpark/images/8/82/Nasutoceratops_Chaos_Theory_Render.png/revision/latest?cb=20240818214334",
    type: 'real', diet: 'herbivore', era: 'Late Cretaceous (76-75 Ma)', threat_level: 2, tier: 3,
    real_length_m: 4.5, movie_length_m: 4.5, real_weight_kg: 1500, movie_weight_kg: 1500,
    fossil_section: {
      description: "Nasutoceratops is a genus of ceratopsid dinosaur that lived in North America during the Late Cretaceous period, about 76.0–75.5 million years ago. The first known specimens were discovered in Utah in the Kaiparowits Formation of the Grand Staircase–Escalante National Monument (GSENM) from 2006 onwards, including a subadult skull with both a partial postcranial skeleton and rare skin impressions, and two other partial skulls. In 2013, the subadult was made the holotype of the new genus and species Nasutoceratops titusi; the generic name means \"large-nosed horned face\", and the specific name honors the paleontologist Alan L. Titus for his work at the GSENM. The dinosaur was noted for its large nose in news reports, and later featured in Jurassic World films.",
      discovery: "Discovered in Utah, USA in 2013.",
      accuracy_rating: 'ACCURATE',
      film_accuracy_notes: ["Size and appearance are very accurate."],
      diet_details: "Swamp and marshland grazer.",
      extended_trivia: ["Its name means 'large-nosed horned face', recognizing its unusually oversized nasal region.","Its horns point forward like a modern bull's, differentiating it widely from its cousins."]
    },
    ingen_section: {
      file_number: 'ING-022-NASU', classification: 'Public', creation_date: '2020',
      dna_donors: ["BioSyn extraction."],
      modifications: ["None."],
      containment: "Found roaming wild post-Dominion.",
      incidents: ["2019: Encounter at Baako campground ('Battle at Big Rock')."],
      clone_species_count: 1,
      notable_traits: ["Heavy muscular charge capacity"],
      expanded_lore: "Not originally on the InGen roster, introduced predominantly following the Lockwood breakout. Demonstrated high aggression defensively against Allosaurus at Big Rock National Park in a notable civilian encounter."
    },
    film_appearances: ['Dom']
  },
  {
    id: '23', slug: 'stygimoloch', common_name: 'Stygimoloch', scientific_name: 'Stygimoloch spinifer',
    fandom_picture: "https://static.wikia.nocookie.net/jurassicpark/images/e/eb/DXpxouxXUAArogv.png/revision/latest?cb=20180307190144",
    type: 'real', diet: 'herbivore', era: 'Late Cretaceous (66 Ma)', threat_level: 2, tier: 3,
    real_length_m: 3.0, movie_length_m: 3.0, real_weight_kg: 80, movie_weight_kg: 100,
    fossil_section: {
      description: "Pachycephalosaurus is a genus of pachycephalosaurid ornithischian dinosaur. The type species, P. wyomingensis, is the only known definitive species. The possibly synonymous taxon, Stygimoloch, might represent a distinct genus or a second species, P. spinifer. It lived during the Maastrichtian age of the Late Cretaceous period in what is now western North America. Remains have been excavated in Montana, South Dakota, Wyoming, and Alberta. Mainly known from a single skull and a few extremely thick skull roofs, Pachycephalosaurus is estimated to have reached 4.5 m (15 ft) long and weighed 370–450 kg (820–990 lb). More complete fossils would come to be found in the following years.",
      discovery: "Discovered in the Hell Creek Formation, 1983.",
      accuracy_rating: 'MOSTLY ACCURATE',
      film_accuracy_notes: ["Its headbutting power capable of destroying brick walls is greatly exaggerated."],
      diet_details: "Soft vegetation browser.",
      extended_trivia: ["Meaning 'demon from the River Styx', referring to its hellish spiked appearance.","It is heavily debated by the scientific community whether this is actually just a teenage Pachycephalosaurus."]
    },
    ingen_section: {
      file_number: 'ING-023-STYG', classification: 'Public', creation_date: '2015',
      dna_donors: ["Stygimoloch genome."],
      modifications: ["Oversized kinetic skull density."],
      containment: "Lockwood Manor holding cells.",
      incidents: ["2018: Escaped and caused chaos at Lockwood auction."],
      clone_species_count: 1,
      notable_traits: ["Elevated kinetic resistance","Aggressive charge responses"],
      expanded_lore: "Housed in the Lockwood Manor sub-basement auctions. Capitalizing on their naturally thick skulls and InGen's aggression spikes, a notable specimen ('Stiggy') shattered brick walls to aid an escape."
    },
    film_appearances: ['JWFK']
  },
  {
    id: '24', slug: 'aquilops', common_name: 'Aquilops', scientific_name: 'Aquilops americanus',
    scientific_picture: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Aquilops_americanus.png/1280px-Aquilops_americanus.png',
    fandom_picture: "https://static.wikia.nocookie.net/jurassicpark/images/d/d1/Aquilops_Rebirth.webp/revision/latest?cb=20250602210649",
    type: 'real', diet: 'herbivore', era: 'Early Cretaceous (108-104 Ma)', threat_level: 1, tier: 3,
    real_length_m: 0.6, movie_length_m: 0.6, real_weight_kg: 1.5, movie_weight_kg: 2,
    fossil_section: {
      description: "Aquilops is an early herbivorous ceratopsian dinosaur dating from the Early Cretaceous of North America, approximately 109 million to 104 million years ago. The type species is A. americanus.",
      discovery: "Discovered in 1997 in Montana.",
      accuracy_rating: 'ACCURATE',
      film_accuracy_notes: ["Accurate in size and harmlessness."],
      diet_details: "Small ferns and seeds.",
      extended_trivia: ["It is one of the oldest known ceratopsian species.","Unlike later relatives, it possessed absolutely no neck frill or horns."]
    },
    ingen_section: {
      file_number: 'ING-024-AQUI', classification: 'Public', creation_date: '2024',
      dna_donors: ["Base Aquilops."],
      modifications: ["None."],
      containment: "Île Saint-Hubert.",
      incidents: ["Minimal threat. Primarily a prey item for island predators."],
      clone_species_count: 1,
      notable_traits: ["Extreme docility"],
      expanded_lore: "A late-stage cloning project kept primarily entirely contained. Given its minimal threat and completely docile behavior, it frequently falls prey to escaped predators in unregulated environments."
    },
    film_appearances: ['Rebirth']
  },
  {
    id: '25', slug: 'titanosaurus', common_name: 'Titanosaurus', scientific_name: 'Titanosaurus indicus',
    scientific_picture: 'https://upload.wikimedia.org/wikipedia/commons/2/29/Titanosaurus.jpg',
    fandom_picture: "https://static.wikia.nocookie.net/jurassicpark/images/3/37/Full_Titanosaurus_Render.png/revision/latest?cb=20250729092417",
    type: 'real', diet: 'herbivore', era: 'Late Cretaceous (70-65 Ma)', threat_level: 1, tier: 3,
    real_length_m: 12.0, movie_length_m: 14.0, real_weight_kg: 13000, movie_weight_kg: 15000,
    fossil_section: {
      description: "Titanosaurus is a dubious genus of sauropod dinosaurs, first described by Richard Lydekker in 1877. It is known from the Maastrichtian Lameta and Kallakurichi Formations of India.",
      discovery: "Named by Richard Lydekker in 1877.",
      accuracy_rating: 'CREATIVE LICENCE',
      film_accuracy_notes: ["Highly speculative physical appearance based on other titanosaurs like Saltasaurus."],
      diet_details: "High-level canopy grazer.",
      extended_trivia: ["It is considered a 'nomen dubium' in paleontology due to the fragmentary nature of original discoveries.","Many titanosaurs laid their eggs in massive communal nesting grounds."]
    },
    ingen_section: {
      file_number: 'ING-025-TITA', classification: 'Public', creation_date: '2023',
      dna_donors: ["Titanosaurus sequence.", "Saltasaurus gap filler."],
      modifications: ["Armor plates along back enhanced."],
      containment: "Île Saint-Hubert.",
      incidents: ["No major hostile incidents known."],
      clone_species_count: 2,
      notable_traits: ["Reinforced dermal plating"],
      expanded_lore: "Spliced heavily with Saltasaurus DNA to finalize the visual aesthetic. Resulted in thick armor plating across its massive back, successfully introduced into the sanctuary zones by late 2023."
    },
    film_appearances: ['Rebirth']
  },
  {
    id: '26', slug: 'brachiosaurus', common_name: 'Brachiosaurus', scientific_name: 'Brachiosaurus altithorax',
    scientific_picture: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Brachiosaurus_mount.jpg/1280px-Brachiosaurus_mount.jpg',
    fandom_picture: "https://static.wikia.nocookie.net/jurassicpark/images/0/00/JWFKBrachiosaurusRender.png/revision/latest?cb=20180427201052",
    type: 'real', diet: 'herbivore', era: 'Late Jurassic (154-153 Ma)', threat_level: 1, tier: 2,
    real_length_m: 21.0, movie_length_m: 25.0, real_weight_kg: 40000, movie_weight_kg: 45000,
    fossil_section: {
      description: "Brachiosaurus is a genus of sauropod dinosaur that lived in North America during the Late Jurassic, about 155.6 to 145.5 million years ago. It was first described by American paleontologist Elmer S. Riggs in 1903 from fossils found in the Colorado River valley in western Colorado, United States. Riggs named the dinosaur Brachiosaurus altithorax; the generic name is Greek for \"arm lizard\", in reference to its proportionately long arms, and the specific name means \"deep chest\". Brachiosaurus is estimated to have been between 18 and 22 meters long; body mass estimates of the subadult holotype specimen range from 28.3 to 46.9 metric tons. It had a disproportionately long neck, small skull, and large overall size, all of which are typical for sauropods. Atypically, Brachiosaurus had longer forelimbs than hindlimbs, which resulted in a steeply inclined trunk, and a proportionally shorter tail.",
      discovery: "Discovered by Elmer Riggs in 1900, Colorado.",
      accuracy_rating: 'ACCURATE',
      film_accuracy_notes: ["Often depicted chewing like a cow, which sauropods could not physically do.", "Rearing on hind legs is debated due to immense weight."],
      diet_details: "Strict canopy browser, capable of eating hundreds of pounds of leaves daily.",
      extended_trivia: ["It had proportionally massive front legs, sloping its massive back steeply downwards.","Unlike depictions in early cinema, it physically couldn't rear up on its hind legs without breaking its own spine."]
    },
    ingen_section: {
      file_number: 'ING-026-BRAC', classification: 'Public', creation_date: '1990',
      dna_donors: ["Brachiosaurus genome."],
      modifications: ["Vocal cord enhancements to produce whale-like calls."],
      containment: "Isla Nublar plains.",
      incidents: ["2018: Specimen left behind during Mt. Sibo eruption."],
      clone_species_count: 1,
      notable_traits: ["Vocal cord amplification","Heightened emotional complexity"],
      expanded_lore: "The very first dinosaur witnessed by the endorsing team in 1993. It served as the majestic symbol of InGen's success. Tragically, the final living specimen from the original park perished during the sudden Mount Sibo eruption."
    },
    film_appearances: ['JP1', 'JW', 'Dom']
  },
  {
    id: '27', slug: 'apatosaurus', common_name: 'Apatosaurus', scientific_name: 'Apatosaurus ajax',
    scientific_picture: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Apatosaurus_louisae_-_CM.jpg/1280px-Apatosaurus_louisae_-_CM.jpg',
    fandom_picture: "https://static.wikia.nocookie.net/jurassicpark/images/1/13/JWFKApatosaurusRender.png/revision/latest?cb=20180427200403",
    type: 'real', diet: 'herbivore', era: 'Late Jurassic (152-151 Ma)', threat_level: 1, tier: 3,
    real_length_m: 22.0, movie_length_m: 22.0, real_weight_kg: 20000, movie_weight_kg: 22000,
    fossil_section: {
      description: "Apatosaurus is a genus of herbivorous sauropod dinosaur that lived in North America during the Late Jurassic period. Othniel Charles Marsh described and named the first-known species, Apatosaurus ajax, in 1877, and a second species, Apatosaurus louisae, was discovered and named by William H. Holland in 1916. Apatosaurus lived about 152 to 151 million years ago (mya), during the late Kimmeridgian to early Tithonian age, and are now known from fossils in the Morrison Formation of modern-day Colorado, Oklahoma, New Mexico, Wyoming, and Utah in the United States. Apatosaurus had an average length of 21–23 m (69–75 ft), and an average mass of 16.4–22.4 t. A few specimens indicate a maximum length of 11–30% greater than average and a mass of approximately 33 t.",
      discovery: "Discovered by O.C. Marsh in 1877.",
      accuracy_rating: 'ACCURATE',
      film_accuracy_notes: ["Physical model accurately displays the low, sweeping neck posture typical of diplodocids."],
      diet_details: "Low browsing on ferns and club-mosses using peg-like teeth.",
      extended_trivia: ["The famous 'Brontosaurus' was actually incorrectly identified Apatosaurus bones for a century.","Its long sweeping tail could break the sound barrier like a bullwhip to scare predators."]
    },
    ingen_section: {
      file_number: 'ING-027-APAT', classification: 'Public', creation_date: '2010',
      dna_donors: ["Apatosaurus baseline."],
      modifications: ["None."],
      containment: "Gyrosphere valley, Jurassic World.",
      incidents: ["2015: Indominus Rex sport hunting decimated a herd."],
      clone_species_count: 1,
      notable_traits: ["Whip-scale tail structure"],
      expanded_lore: "Placed heavily inside the Gyrosphere Safari zones. Known to be highly passive and extremely durable, though they were tragically targeted for sport by the Indominus Rex during the 2015 breach."
    },
    film_appearances: ['JW']
  },
  {
    id: '28', slug: 'dreadnoughtus', common_name: 'Dreadnoughtus', scientific_name: 'Dreadnoughtus schrani',
    scientific_picture: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Dreadnoughtus_Published_Reconstruction_%28Version_2%29.jpg/1280px-Dreadnoughtus_Published_Reconstruction_%28Version_2%29.jpg',
    fandom_picture: "https://static.wikia.nocookie.net/jurassicpark/images/e/e5/Dreadnoughtus_Render.png/revision/latest/scale-to-width-down/1000?cb=20220722190908",
    type: 'real', diet: 'herbivore', era: 'Late Cretaceous (76-70 Ma)', threat_level: 1, tier: 3,
    real_length_m: 26.0, movie_length_m: 26.0, real_weight_kg: 59000, movie_weight_kg: 65000,
    fossil_section: {
      description: "Dreadnoughtus is a genus of titanosaurian sauropod dinosaur containing a single species, Dreadnoughtus schrani. It is known from two partial skeletons discovered in Upper Cretaceous rocks of the Cerro Fortaleza Formation in Santa Cruz Province, Argentina. It is one of the largest terrestrial vertebrates known from reasonably complete remains, with the immature type specimen measuring 26 metres (85 ft) in total body length and weighing up to 48–49 metric tons.",
      discovery: "Discovered in 2005 by Kenneth Lacovara in Argentina.",
      accuracy_rating: 'ACCURATE',
      film_accuracy_notes: ["Size is accurately immense, representing one of the largest land animals in Earth's history."],
      diet_details: "Sustained massive tree-top consumption.",
      extended_trivia: ["Meaning 'fears nothing', rightfully named as an adult had zero natural predators.","It is one of the best-preserved super-massive titanosaurs ever discovered."]
    },
    ingen_section: {
      file_number: 'ING-028-DREA', classification: 'Public', creation_date: '2020',
      dna_donors: ["BioSyn extraction."],
      modifications: ["None."],
      containment: "BioSyn Sanctuary.",
      incidents: ["None recorded."],
      clone_species_count: 1,
      notable_traits: ["Scale amplification"],
      expanded_lore: "Cloned by BioSyn to represent the ultimate pinnacle of massive terrestrial cloning. Thriving in the sanctuary, their immense size effectively prevented any predator from even attempting an attack."
    },
    film_appearances: ['JWFK']
  },
  {
    id: '29', slug: 'edmontosaurus', common_name: 'Edmontosaurus', scientific_name: 'Edmontosaurus annectens',
    scientific_picture: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Oxford_Edmontosaurus.jpg/1280px-Oxford_Edmontosaurus.jpg',
    fandom_picture: "https://static.wikia.nocookie.net/jurassicpark/images/e/e3/Edmontosaurus-detail-header.png/revision/latest/scale-to-width-down/1000?cb=20150227001909",
    type: 'real', diet: 'herbivore', era: 'Late Cretaceous (73-66 Ma)', threat_level: 1, tier: 3,
    real_length_m: 12.0, movie_length_m: 12.0, real_weight_kg: 4000, movie_weight_kg: 4000,
    fossil_section: {
      description: "Edmontosaurus, often colloquially and historically known as Anatosaurus or Anatotitan, is a genus of hadrosaurid (duck-billed) dinosaur. It contains two known species: Edmontosaurus regalis and Edmontosaurus annectens. Fossils of E. regalis have been found in rocks of western North America that date from the late Campanian age of the Cretaceous period 73 million years ago, while those of E. annectens were found in the same geographic region from rocks dated to the end of the Maastrichtian age, 66 million years ago. Edmontosaurus was one of the last non-avian dinosaurs ever to exist, and lived alongside dinosaurs like Triceratops, Tyrannosaurus, Ankylosaurus, and Pachycephalosaurus shortly before the Cretaceous–Paleogene extinction event.",
      discovery: "Found in North America throughout the late 19th and early 20th centuries.",
      accuracy_rating: 'ACCURATE',
      film_accuracy_notes: ["In real life, they possessed a fleshy nasal comb like a rooster, missing in earlier Jurassic park cloned versions."],
      diet_details: "Efficient bulk-feeder across wide plains.",
      extended_trivia: ["One of the few species where mummified scale and skin impressions have been entirely preserved.","They could run efficiently on two legs to escape danger, dropping to four to graze."]
    },
    ingen_section: {
      file_number: 'ING-029-EDMO', classification: 'Public', creation_date: '1996',
      dna_donors: ["Edmontosaurus genome."],
      modifications: ["Fleshy crest suppressed."],
      containment: "Isla Sorna wide areas.",
      incidents: ["Primary prey source for large theropods on Isla Sorna."],
      clone_species_count: 1,
      notable_traits: ["Fleshy crest suppression"],
      expanded_lore: "Extensively cultivated on Isla Sorna as the primary prey source for the apex theropods to maintain an open ecosystem. InGen modified them heavily, famously suppressing the natural fleshy comb found on their skulls."
    },
    film_appearances: ['Dom']
  },
  {
    id: '30', slug: 'iguanodon', common_name: 'Iguanodon', scientific_name: 'Iguanodon bernissartensis',
    scientific_picture: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Iguanodon_de_Bernissart_IRSNB_01.JPG/1280px-Iguanodon_de_Bernissart_IRSNB_01.JPG',
    fandom_picture: "https://static.wikia.nocookie.net/jurassicpark/images/c/c6/Iguanodon_render.png/revision/latest/scale-to-width-down/1000?cb=20240531104621",
    type: 'real', diet: 'herbivore', era: 'Early Cretaceous (126-122 Ma)', threat_level: 1, tier: 3,
    real_length_m: 10.0, movie_length_m: 10.0, real_weight_kg: 3000, movie_weight_kg: 3000,
    fossil_section: {
      description: "Iguanodon, named in 1825, is a genus of iguanodontian dinosaur. While many species found worldwide have been classified in the genus Iguanodon, dating from the Late Jurassic to Early Cretaceous, taxonomic revision in the early 21st century has defined Iguanodon to be based on at least one well-substantiated species: Iguanodon bernissartensis, which lived during the Barremian to early Aptian ages of the Early Cretaceous in Belgium, Germany, England, and Spain, between about 126 and 122 million years ago. Iguanodon was a large, bulky herbivore, measuring up to 9–11 metres (30–36 ft) in length and 4.5 metric tons in body mass. Distinctive features include large thumb spikes, which were possibly used for defense against predators, combined with long prehensile fifth fingers able to forage for food.",
      discovery: "One of the first dinosaurs ever discovered, named by Gideon Mantell in 1825.",
      accuracy_rating: 'ACCURATE',
      film_accuracy_notes: ["Thumb spike logic and movement portrayed accurately."],
      diet_details: "Ground cycads and tough ferns.",
      extended_trivia: ["It was only the second dinosaur ever formally named in history.","Early Victorian scientists famously assembled the skeleton incorrectly, placing its thumb spike on the end of its nose."]
    },
    ingen_section: {
      file_number: 'ING-030-IGUA', classification: 'Public', creation_date: '2021',
      dna_donors: ["BioSyn extraction."],
      modifications: ["None."],
      containment: "BioSyn Sanctuary.",
      incidents: ["None."],
      clone_species_count: 1,
      notable_traits: ["Robust thumb spikes"],
      expanded_lore: "Recovered and hosted in the BioSyn Sanctuary valley. An incredibly bulky herbivore that proved highly resilient to the chaotic climate interactions resulting from the locust plague anomalies."
    },
    film_appearances: ['Dom']
  },
  {
    id: '31', slug: 'parasaurolophus', common_name: 'Parasaurolophus', scientific_name: 'Parasaurolophus walkeri',
    scientific_picture: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/FMNH_Parasaurolophus_fossil.jpg/1280px-FMNH_Parasaurolophus_fossil.jpg',
    fandom_picture: "https://static.wikia.nocookie.net/jurassicpark/images/d/d1/JWD_Parasaurolophus.png/revision/latest?cb=20220618082154",
    type: 'real', diet: 'herbivore', era: 'Late Cretaceous (76-73 Ma)', threat_level: 1, tier: 3,
    real_length_m: 9.5, movie_length_m: 9.5, real_weight_kg: 2500, movie_weight_kg: 3000,
    fossil_section: {
      description: "Parasaurolophus is a genus of hadrosaurid \"duck-billed\" dinosaur that lived in what is now western North America and possibly Asia during the Late Cretaceous period, about 76.5–73 million years ago. It was a large herbivore that could reach over 9 metres (30 ft) long and weigh over 5 metric tons, and were able to move as a biped and a quadruped. Three species are universally recognized: P. walkeri, P. tubicen, and the short-crested P. cyrtocristatus. Additionally, a fourth species, P. jiayinensis, has been proposed, although it is more commonly placed in the separate genus Charonosaurus. Remains are known from Alberta, New Mexico, and Utah, as well as possibly Heilongjiang if Charonosaurus is in fact part of the genus. The genus was first described in 1922 by William Parks from a skull and partial skeleton found in Alberta.",
      discovery: "Described in 1922 by William Parks.",
      accuracy_rating: 'ACCURATE',
      film_accuracy_notes: ["The distinct calls made by the animal in the films align with paleotonlogy models of air resonating in its crest."],
      diet_details: "Standard herding browser.",
      extended_trivia: ["The giant crest contained complex respiratory tubes used to amplify sound across miles like a trombone.","Most of its distinct features evolved for herd communication and mating rights."]
    },
    ingen_section: {
      file_number: 'ING-031-PARA', classification: 'Public', creation_date: '1991',
      dna_donors: ["Parasaurolophus genome."],
      modifications: ["Vivid bio-luminescent skin patterning in Camp Cretaceous variant."],
      containment: "Isla Nublar River Tour.",
      incidents: ["Captured consistently by InGen mercs for auction due to docile nature."],
      clone_species_count: 1,
      notable_traits: ["Crest bio-luminescence (Camp Cretaceous mutation)"],
      expanded_lore: "A staple in almost every iteration of the parks due to its visually striking crest and distinct vocalizations. Certain modified variants featured heavy bio-luminescence capabilities, glowing vividly in dark caves."
    },
    film_appearances: ['JP1', 'TLW', 'JW', 'Dom']
  },
  {
    id: '32', slug: 'gallimimus', common_name: 'Gallimimus', scientific_name: 'Gallimimus bullatus',
    scientific_picture: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Gallimimus_bullatus.001_-_Natural_History_Museum_of_London.JPG/1280px-Gallimimus_bullatus.001_-_Natural_History_Museum_of_London.JPG',
    fandom_picture: "https://static.wikia.nocookie.net/jurassicpark/images/9/9e/GebaRender.png/revision/latest?cb=20251224164022",
    type: 'real', diet: 'omnivore', era: 'Late Cretaceous (70 Ma)', threat_level: 1, tier: 3,
    real_length_m: 6.0, movie_length_m: 6.0, real_weight_kg: 400, movie_weight_kg: 450,
    fossil_section: {
      description: "Gallimimus is a genus of theropod dinosaur that lived in what is now Mongolia during the Late Cretaceous period. Several fossils in various stages of growth were discovered by Polish-Mongolian expeditions in the Gobi Desert of Mongolia during the 1960s; a large skeleton discovered in this region was made the holotype specimen of the new genus and species Gallimimus bullatus in 1972. The generic name means \"chicken mimic\", referring to the similarities between its neck vertebrae and those of the Galliformes. The specific name is derived from bulla, a golden capsule worn by Roman youth, in reference to a bulbous structure at the base of the skull of Gallimimus. At the time it was named, the fossils of Gallimimus represented the most complete and best preserved ornithomimid material yet discovered, and the genus remains one of the best known members of the group.",
      discovery: "Found in the Gobi Desert of Mongolia in the early 1960s.",
      accuracy_rating: 'CREATIVE LICENCE',
      film_accuracy_notes: ["Entirely lacked feathers in the film. Real Gallimimus was heavily feathered.", "Shown exclusively flocking, behavior extrapolated from modern birds."],
      diet_details: "Opportunistic omnivore lacking teeth.",
      extended_trivia: ["The largest ornithomimid known, approaching the weight of a modern horse.","It possessed large eyes placed on the sides of its head, granting massive peripheral vision to dodge predators."]
    },
    ingen_section: {
      file_number: 'ING-032-GALL', classification: 'Public', creation_date: '1992',
      dna_donors: ["Gallimimus genome.", "Ostrich (for gap filling and speed constraints)"],
      modifications: ["Feather suppression.", "Herd coordination enhanced."],
      containment: "Gallimimus Valley, Isla Nublar.",
      incidents: ["1993: Herd stampede during Nublar incident."],
      clone_species_count: 2,
      notable_traits: ["Feather suppression","Flightless bird sequencing"],
      expanded_lore: "Famous for their highly coordinated flocking behavior ('flocking this way'). InGen used ostrich DNA to fill gaps, resulting in phenomenal running speeds but completely erasing genuine fossil-supported feathering."
    },
    film_appearances: ['JP1', 'JW']
  },

  /* -------- HYBRIDS -------- */
  {
    id: '33', slug: 'indominus-rex', common_name: 'Indominus Rex', scientific_name: 'Fierce or Untameable King',
    fandom_picture: "https://static.wikia.nocookie.net/jurassicpark/images/9/96/Indominus_Rex_New.png/revision/latest/scale-to-width-down/1000?cb=20250701022405",
    type: 'ingen_hybrid', diet: 'carnivore', era: 'Modern (InGen)', threat_level: 5, tier: 1,
    real_length_m: 0, movie_length_m: 15.2, real_weight_kg: 0, movie_weight_kg: 7000,
    ingen_section: {
      file_number: 'ING-015-IREX', classification: 'Classified', creation_date: '2012',
      dna_donors: ["Tyrannosaurus rex", "Velociraptor", "Cuttlefish", "Tree Frog", "Giganotosaurus", "Majungasaurus", "Carnotaurus", "Rugops"],
      modifications: ["Adaptive camouflage.", "Thermal regulation suppression.", "Hyper-intelligence.", "Rapid growth rate."],
      containment: "Asset Containment Paddock 11. 40ft walls.",
      incidents: ["2015: Orchestrated a containment breach, leading to the fall of Jurassic World."],
      clone_species_count: 8,
      notable_traits: ["Adaptive camouflage","Thermal shielding","Language acquisition"],
      expanded_lore: "Designed as the ultimate asset 'with more teeth'. Dr. Wu compounded cuttlefish and tree frog genes to yield unintended, apocalyptic combat advantage. The creature hunted for sport, bringing Jurassic World to absolute ruin."
    },
    hybrid_genome: {
      base_species: 'Tyrannosaurus rex', base_percentage: 40,
      donors: [
        { species: 'Velociraptor', trait: 'Intelligence, pack coordination', pct: 20 },
        { species: 'Cuttlefish', trait: 'Adaptive camouflage, changing chromatophores', pct: 15 },
        { species: 'Tree frog', trait: 'Thermal regulation, hiding from infrared', pct: 15 },
        { species: 'Assorted Abelisaurids', trait: 'Osteoderms, robust skull structure', pct: 10 }
      ],
      modification_notes: 'Highly unpredictable sport hunter.'
    },
    film_appearances: ['JW']
  },
  {
    id: '34', slug: 'indoraptor', common_name: 'Indoraptor', scientific_name: 'Untameable Thief',
    fandom_picture: "https://static.wikia.nocookie.net/jurassicpark/images/e/eb/Jurassic_world_fallen_kingdom_indoraptor_3.0_by_sonichedgehog2-dcc96yw.png/revision/latest/scale-to-width-down/1000?cb=20250701022509",
    type: 'ingen_hybrid', diet: 'carnivore', era: 'Modern (InGen)', threat_level: 5, tier: 1,
    real_length_m: 0, movie_length_m: 7.3, real_weight_kg: 0, movie_weight_kg: 1000,
    ingen_section: {
      file_number: 'ING-034-IRAP', classification: 'Classified', creation_date: '2018',
      dna_donors: ["Indominus Rex genome baseline", "Pure Velociraptor (Blue)"],
      modifications: ["Echolocation properties.", "Acoustic-targeting response (laser and sound conditioned trigger).", "Scaled down for interior navigation."],
      containment: "Lockwood Manor Level 3 Sub-Basement.",
      incidents: ["2018: Escaped confinement during auction, eliminated multiple targets before falling onto a Triceratops fossil display."],
      clone_species_count: 3,
      notable_traits: ["Echolocation","Laser-targeted rage induction","Quadrupedal sprint adaptation"],
      expanded_lore: "The final attempt at creating a manageable biological weapon. It required a 'mother' figure to instill loyalty but was forced to scale without one, resulting in a wildly unpredictable, completely psychopathic killer deployed in enclosed urban environments."
    },
    hybrid_genome: {
      base_species: 'Indominus Rex (Prototype)', base_percentage: 50,
      donors: [
        { species: 'Velociraptor', trait: 'Empathy/Obedience conditioning (Failed)', pct: 40 },
        { species: 'Unknown', trait: 'Conditioned audio-visual attack response', pct: 10 }
      ],
      modification_notes: 'Designed solely for weaponization. Prototype lacked necessary empathy trait.'
    },
    film_appearances: ['JWFK']
  },
  {
    id: '35', slug: 'scorpios-rex', common_name: 'Scorpios Rex', scientific_name: 'Scorpion King',
    scientific_picture: 'https://upload.wikimedia.org/wikipedia/commons/f/fe/Scorpion_Photograph_By_Shantanu_Kuveskar.jpg',
    fandom_picture: "https://static.wikia.nocookie.net/jurassicpark/images/0/08/Scorpios_Rex_Steamblust_Render.png/revision/latest/scale-to-width-down/1000?cb=20240920043334",
    type: 'ingen_hybrid', diet: 'carnivore', era: 'Modern (InGen)', threat_level: 5, tier: 2,
    real_length_m: 0, movie_length_m: 8.0, real_weight_kg: 0, movie_weight_kg: 1500,
    ingen_section: {
      file_number: 'ING-035-SREX', classification: 'Classified', creation_date: '2009',
      dna_donors: ["Carnotaurus", "Velociraptor", "Scorpionfish"],
      modifications: ["Venomous quills.", "Arboreal climbing adaptation.", "Asexual reproduction capabilities."],
      containment: "Cryogenic suspension in secret lab. E750.",
      incidents: ["2015: Thawed and escaped during Jurassic World breakdown.", "Killed multiple park assets via venom."],
      clone_species_count: 3,
      notable_traits: ["Lethal neurotoxin via quills","Parthenogenesis (asexual reproduction)","Thermal sensory pits"],
      expanded_lore: "Dr. Wu's absolute first test hybrid (E750). Rendered horribly deformed, erratic, and fatally dangerous due to the inclusion of scorpionfish DNA. Kept in cryogenic stasis on extreme lockdown until accidentally thawed."
    },
    hybrid_genome: {
      base_species: 'Carnotaurus', base_percentage: 40,
      donors: [
        { species: 'Velociraptor', trait: 'Claws, speed', pct: 30 },
        { species: 'Scorpionfish', trait: 'Lethal neurotoxin quills', pct: 20 },
        { species: 'Tree frog', trait: 'Parthenogenesis', pct: 10 }
      ],
      modification_notes: 'Dr. Wu\'s first attempt at a hybrid. Deemed too unstable and ugly for public display.'
    },
    film_appearances: ['CC']
  },
  {
    id: '36', slug: 'distortus-rex', common_name: 'Distortus Rex', scientific_name: 'Deformed King',
    fandom_picture: "https://static.wikia.nocookie.net/jurassicpark/images/f/fa/DrexRender2.png/revision/latest?cb=20251006221036",
    type: 'ingen_hybrid', diet: 'carnivore', era: 'Modern (InGen)', threat_level: 5, tier: 1,
    real_length_m: 0, movie_length_m: 14.5, real_weight_kg: 0, movie_weight_kg: 10000,
    ingen_section: {
      file_number: 'ING-036-DREX', classification: 'Classified', creation_date: '2008',
      dna_donors: ["Tyrannosaurus rex", "Unidentified Deep-Sea Organisms"],
      modifications: ["Six-limbed structure.", "Hyper-regenerative tissue.", "Bioluminescent capabilities."],
      containment: "Île Saint-Hubert underground bunker. Currently breached.",
      incidents: ["2008: Immediate violence upon hatching.", "2025: Encounters with asset retrieval teams."],
      clone_species_count: 3,
      notable_traits: ["Multi-limb regeneration","Deep pressure resistance","Bio-electricity"],
      expanded_lore: "A monstrously failed deep-sea InGen experiment blending T-Rex DNA with abyssal gigantism species. Possessing six limbs and generating bio-electric shocks, it shattered the subterranean Saint-Hubert containment bunker."
    },
    hybrid_genome: {
      base_species: 'Tyrannosaurus rex', base_percentage: 50,
      donors: [
        { species: 'Unknown', trait: 'Multi-limb generation', pct: 30 },
        { species: 'Deep Sea Fauna', trait: 'Bioluminescence, pressure resistance', pct: 20 }
      ],
      modification_notes: 'Failed experiment resulting in a deformed but highly lethal apex predator.'
    },
    film_appearances: ['Rebirth']
  },
  {
    id: '37', slug: 'mutadon', common_name: 'Mutadon', scientific_name: 'Mutated Tooth',
    fandom_picture: "https://static.wikia.nocookie.net/jurassicpark/images/a/a9/Mutadon_Standing.png/revision/latest?cb=20260323160601",
    type: 'ingen_hybrid', diet: 'carnivore', era: 'Modern (InGen)', threat_level: 5, tier: 2,
    real_length_m: 0, movie_length_m: 6.0, real_weight_kg: 0, movie_weight_kg: 800,
    ingen_section: {
      file_number: 'ING-037-MUTA', classification: 'Classified', creation_date: '2023',
      dna_donors: ["Velociraptor", "Pteranodon", "Bat"],
      modifications: ["Capable of both sustained flight and bipedal running.", "Echolocation hunting logic.", "Pack mentality."],
      containment: "Uncontained. Roaming Île Saint-Hubert.",
      incidents: ["2025: Swarmed Zora Bennett's retrieval team in Rebirth."],
      clone_species_count: 3,
      notable_traits: ["Powered flight capability","Mammalian echolocation","Nocturnal superiority"],
      expanded_lore: "An unsettling attempt to create an aerial raptor unit. Combining the lethal intellect of velocities, flight of pteranodon, and bat sonar mechanics, this beast terrorizes dense canopies in total darkness."
    },
    hybrid_genome: {
      base_species: 'Velociraptor', base_percentage: 45,
      donors: [
        { species: 'Pteranodon', trait: 'Wing structure, hollow bones', pct: 35 },
        { species: 'Vampire Bat', trait: 'Echolocation, blood-thirst', pct: 20 }
      ],
      modification_notes: 'A terrifying fusion of aerial mobility and grounded lethal speed.'
    },
    film_appearances: ['Rebirth']
  }
];

import { getPhyloPicSilhouette } from '@/lib/api';

let cachedCreatures: Creature[] | null = null;

export async function getCreatures(): Promise<Creature[]> {
  if (cachedCreatures) return cachedCreatures;

  const resolvedCreatures: Creature[] = [];
  for (const c of creatures) {
    if (c.type === 'real') {
      try {
        const url = await getPhyloPicSilhouette(c.scientific_name);
        if (url) {
          resolvedCreatures.push({ ...c, silhouette_url: url });
          continue;
        }
      } catch (err) {
        console.error(`Failed to fetch silhouette for ${c.scientific_name}`, err);
      }
    }
    resolvedCreatures.push(c);
  }
  
  cachedCreatures = resolvedCreatures;
  return cachedCreatures;
}

export async function getCreatureBySlug(slug: string): Promise<Creature | undefined> {
  const allCreatures = await getCreatures();
  return allCreatures.find((c) => c.slug === slug);
}

// Dev Cache Buster