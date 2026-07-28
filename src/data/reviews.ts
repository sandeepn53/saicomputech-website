export type Review = {
  id: number;
  name: string;
  role: string;
  quote: string;
  rating: number;
  source: string;
  verified: boolean;
};

export const reviews: Review[] = [
  {
    "id": 1,
    "name": "Asha R.",
    "role": "Operations Manager",
    "quote": "Excellent service and genuine products. The team was very professional and completed the installation on time.",
    "rating": 5,
    "source": "Google",
    "verified": true
  },
  {
    "id": 2,
    "name": "Ravi K.",
    "role": "Business Client",
    "quote": "Best place for CCTV, laptops, networking, and IT support. Highly recommended for any business setup.",
    "rating": 5,
    "source": "Google",
    "verified": true
  },
  {
    "id": 3,
    "name": "Meera S.",
    "role": "Verified Customer",
    "quote": "Fast response, genuine pricing, and excellent after-sales support. The service experience was smooth from start to finish.",
    "rating": 5,
    "source": "Google",
    "verified": true
  }
];

