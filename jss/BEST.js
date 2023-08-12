const packages = [
  {
    title: "Tanzania Grand Tour",
    description:
      "Embark on a grand adventure and explore the best of Tanzania's diverse landscapes.",
    duration: "14 days",
    locations: ["Serengeti", "Ngorongoro", "Zanzibar", "Kilimanjaro"],
    price: "$9000",
    image: "/Ngorongoro/Image/IMG_5508.JPG",
  },
  {
    title: "Coastal Delights",
    description:
      "Experience the charm of Tanzania's coastal towns and relax on pristine beaches.",
    duration: "10 days",
    locations: ["Dar es Salaam", "Bagamoyo", "Pangani", "Tanga"],
    price: "$6500",
    image: "/Ngorongoro/Image/IMG_5595.JPG",
  },
  {
    title: "Northern Adventure",
    description:
      "Embark on an adrenaline-pumping journey through the northern circuit of Tanzania.",
    duration: "12 days",
    locations: [
      "Arusha",
      "Lake Manyara",
      "Serengeti",
      "Ngorongoro",
      "Tarangire",
    ],
    price: "$7500",
    image: "/Ngorongoro/Image/IMG_5591.JPG",
  },
  {
    title: "Southern Circuit Explorer",
    description:
      "Discover the hidden gems of Southern Tanzania, from Mikumi to Selous.",
    duration: "9 days",
    locations: ["Mikumi", "Ruaha", "Selous Game Reserve"],
    price: "$6000",
    image: "/Ngorongoro/Image/IMG_5608.JPG",
  },
  {
    title: "Island Hopping Adventure",
    description:
      "Hop between the stunning islands of Zanzibar, Mafia, and Pemba for an island experience.",
    duration: "11 days",
    locations: ["Zanzibar", "Mafia Island", "Pemba Island"],
    price: "$8000",
    image: "/Ngorongoro/Image/IMG_5605.JPG",
  },
  {
    title: "Wildlife & Cultural Fusion",
    description:
      "Immerse in both wildlife encounters and cultural experiences in Tanzania.",
    duration: "13 days",
    locations: ["Tarangire", "Serengeti", "Ngorongoro", "Mwanza"],
    price: "$8500",
    image: "/Ngorongoro/Image/IMG_5592.JPG",
  },
  {
    title: "Tanzania Balloon Safari",
    description:
      "Experience the Serengeti like never before with a breathtaking hot air balloon safari.",
    duration: "2 days",
    locations: ["Serengeti"],
    price: "$3000",
    image: "/Ngorongoro/Image/IMG_5596.JPG",
  },
  {
    title: "Nungwi Beach Hideaway",
    description:
      "Enjoy a secluded beach hideaway in the picturesque village of Nungwi.",
    duration: "5 days",
    locations: ["Zanzibar", "Mafia Island"],
    price: "$5800",
    image: "/Ngorongoro/Image/IMG_5564.JPG",
  },
  {
    title: "Cultural & Wildlife Escape",
    description:
      "Blend romance with culture and wildlife encounters on this unforgettable escape.",
    duration: "9 days",
    locations: ["Arusha, Manyara"],
    price: "$8500",
    image: "/Ngorongoro/Image/IMG_5584.JPG",
  },
];

function createPackageCard(package) {
  const card = document.createElement("div");
  card.classList.add("package");

  const imageElement = document.createElement("img");
  imageElement.src = package.image;
  imageElement.alt = package.title;
  card.appendChild(imageElement);

  const titleElement = document.createElement("h2");
  titleElement.textContent = package.title;
  card.appendChild(titleElement);

  const descriptionElement = document.createElement("p");
  descriptionElement.textContent = package.description;
  card.appendChild(descriptionElement);

  const durationElement = document.createElement("p");
  durationElement.textContent = `Duration: ${package.duration}`;
  card.appendChild(durationElement);

  const locationsElement = document.createElement("p");
  locationsElement.textContent = `Destinations: ${package.locations.join(
    ", "
  )}`;
  card.appendChild(locationsElement);

  const priceElement = document.createElement("p");
  priceElement.textContent = `Price: ${package.price}`;
  card.appendChild(priceElement);

  const button = document.createElement("button");
  button.textContent = "Book Now";
  card.appendChild(button);

  return card;
}

function displayPackages() {
  const packagesContainer = document.getElementById("packages");

  packagesContainer.innerHTML = "";

  packages.forEach((package) => {
    const card = createPackageCard(package);
    packagesContainer.appendChild(card);
  });
}

displayPackages();
