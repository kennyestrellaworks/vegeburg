import { ben, dave, hannah, steve } from "../assets";
import {
  gallery1,
  gallery2,
  gallery3,
  gallery4,
  gallery5,
  gallery6,
  gallery7,
  gallery8,
  gallery9,
  gallery10,
  gallery11,
  gallery12,
} from "../assets";

import {
  chloeMartin,
  ethanCole,
  jamesBurgmann,
  liamTurner,
  marieBurgmann,
  sophiaAllen,
  chloeMartinThumb,
  ethanColeThumb,
  jamesBurgmannThumb,
  liamTurnerThumb,
  marieBurgmannThumb,
  sophiaAllenThumb,
} from "../assets";

export const persons = [
  {
    id: "2516854kfiurjf",
    fullName: "Hannah Smith",
    rating: 4.5,
    feedback:
      "I got Vegeburg for the whole family, and it frees up so much time! Plus, everything is organic and vegan and without plastic.",
    image: hannah,
  },
  {
    id: "5218647koijhti",
    fullName: "Steve Miller",
    rating: 3.6,
    feedback:
      "Vegeburg is a life saver! I just started a company, so there's no time for cooking. I couldn't live without my daily meals now!",
    image: steve,
  },
  {
    id: "2395246zlfopdi",
    fullName: "Ben Hardley",
    rating: 4.8,
    feedback:
      "The AI algorithm is crazy good, it chooses the right meals for me every time. It's amazing not to worry about food anymore!",
    image: ben,
  },
  {
    id: "2685173mkiplse",
    fullName: "Dave Bryson",
    rating: 4.6,
    feedback:
      "Inexpensive, healthy and great-tasting meals, without even having to order manually! It feels truly magical.",
    image: dave,
  },
];

export const blogCategories = [
  { id: "3221584logifsu", name: "recipes" },
  { id: "2584637kifnvbx", name: "nutrition" },
  { id: "1293547mcnzxei", name: "reviews" },
  { id: "5238496juidgft", name: "tips" },
  { id: "8456219jncgdtr", name: "lifestyle" },
];

export const admins = [
  {
    id: "3287594xkdufhs",
    fullName: "Marie Burgmann",
    role: "Co-Founder / Gourmet Chef",
    image: marieBurgmann,
    thumb: marieBurgmannThumb,
  },
  {
    id: "4820103nbdjwke",
    fullName: "James Burgmann",
    role: "Co-Founder / Pastry Chef",
    image: jamesBurgmann,
    thumb: jamesBurgmannThumb,
  },
  {
    id: "1193846zpqowid",
    fullName: "Sophia Allen",
    role: "Sous Chef",
    image: sophiaAllen,
    thumb: sophiaAllenThumb,
  },
  {
    id: "7326591mvxizpo",
    fullName: "Liam Turner",
    role: "Burger Chef",
    image: liamTurner,
    thumb: liamTurnerThumb,
  },
  {
    id: "5642019asldkfj",
    fullName: "Chloe Martin",
    role: "Head Chef",
    image: chloeMartin,
    thumb: chloeMartinThumb,
  },
  {
    id: "2073850qweirut",
    fullName: "Ethan Cole",
    role: "Line Cook",
    image: ethanCole,
    thumb: ethanColeThumb,
  },
];

export const images = [
  gallery1,
  gallery2,
  gallery3,
  gallery4,
  gallery5,
  gallery6,
  gallery7,
  gallery8,
  gallery9,
  gallery10,
  gallery11,
  gallery12,
];

export const plans = [
  {
    title: "Green Feast",
    price: 99,
    description: "Great for families or dedicated plant-based foodies.",
    includes: [
      "12 Vegan Burgers per month",
      "4 sides + 4 drinks",
      "Priority delivery scheduling",
      "1 bonus burger every month",
    ],
    type: "annually",
  },
  {
    title: "Balanced Bite",
    price: 699,
    description:
      "Ideal for couples or those wanting more variety and value — plus added perks for loyal members.",
    includes: [
      "8 Vegan Burgers per month",
      "2 sides (fries or salad) per delivery",
      "Free delivery + priority support",
      "Free dessert on first order",
      "Exclusive quarterly surprise item (dessert, drink, or merch)",
    ],
    type: "annually",
  },
  {
    title: "Green Feast",
    price: 999,
    description:
      "Great for families or dedicated plant-based foodies who want the best value and priority access.",
    includes: [
      "12 Vegan Burgers per month",
      "4 sides + 4 drinks",
      "Priority delivery scheduling",
      "1 bonus burger every month",
      "VIP access to new burger launches and seasonal events",
      "Annual gift box (merch or plant-based treats)",
    ],
    type: "annually",
  },
  {
    title: "Starter Pack",
    price: 39,
    description:
      "Perfect for individuals who want a healthy burger fix every week.",
    includes: [
      "4 Vegan Burgers per month",
      "Free delivery within city limits",
      "Access to seasonal burger flavors",
      "Cancel anytime",
    ],
    type: "monthly",
  },
  {
    title: "Balanced Bite",
    price: 69,
    description: "Ideal for couples or those wanting more variety and value.",
    includes: [
      "8 Vegan Burgers per month",
      "2 sides (fries or salad) per delivery",
      "Free delivery + priority support",
      "Free dessert on first order",
    ],
    type: "monthly",
  },
  {
    title: "Green Feast",
    price: 99,
    description: "Great for families or dedicated plant-based foodies.",
    includes: [
      "12 Vegan Burgers per month",
      "4 sides + 4 drinks",
      "Priority delivery scheduling",
      "1 bonus burger every month",
    ],
    type: "monthly",
  },
];
