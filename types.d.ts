interface RestaurantDetails {
  id: string;
  name: string;
  rating: number;
  price: number;
  distance: string;
  delivery: string;
  profileImage: string;
  about: string;
  food: Food[];
}

interface Food {
  category: string;
  meals: Meal[];
}

interface Meal {
  id: number;
  name: string;
  price: number;
  info: string;
  img: string;
}
