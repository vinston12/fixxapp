export type SpecialistCategory = 'elektryk' | 'hydraulik' | 'zlota-raczka';

export type SpecialistCard = {
  id: string;
  name: string;
  category: SpecialistCategory;
  image: string;
  rating: number;
  reviewCount?: number;
  priceFrom: number;
  availabilityLabel: string;
  city?: string;
  verified: boolean;
};

export const mockSpecialists: SpecialistCard[] = [
  // Elektrycy
  { id: '1', name: 'Tomasz Nowak', category: 'elektryk', image: 'https://i.pravatar.cc/400?img=11', rating: 4.9, reviewCount: 124, priceFrom: 150, availabilityLabel: 'Dostępny jutro', verified: true, city: 'Kraków' },
  { id: '2', name: 'Marek Kowalski', category: 'elektryk', image: 'https://i.pravatar.cc/400?img=12', rating: 4.7, reviewCount: 89, priceFrom: 120, availabilityLabel: 'Dostępny od dziś', verified: true, city: 'Kraków' },
  { id: '3', name: 'Jan Wiśniewski', category: 'elektryk', image: 'https://i.pravatar.cc/400?img=13', rating: 5.0, reviewCount: 200, priceFrom: 180, availabilityLabel: 'Dostępny w tym tygodniu', verified: true, city: 'Kraków' },
  // Hydraulicy
  { id: '4', name: 'Piotr Zieliński', category: 'hydraulik', image: 'https://i.pravatar.cc/400?img=14', rating: 4.8, reviewCount: 156, priceFrom: 130, availabilityLabel: 'Dostępny od zaraz', verified: true, city: 'Kraków' },
  { id: '5', name: 'Krzysztof Kamiński', category: 'hydraulik', image: 'https://i.pravatar.cc/400?img=15', rating: 4.6, reviewCount: 67, priceFrom: 100, availabilityLabel: 'Dostępny jutro', verified: true, city: 'Kraków' },
  { id: '6', name: 'Adam Kolarz', category: 'hydraulik', image: 'https://i.pravatar.cc/400?img=16', rating: 4.9, reviewCount: 312, priceFrom: 160, availabilityLabel: 'Dostępny od dziś', verified: true, city: 'Kraków' },
  // Złota rączka
  { id: '7', name: 'Michał Lewandowski', category: 'zlota-raczka', image: 'https://i.pravatar.cc/400?img=17', rating: 4.9, reviewCount: 420, priceFrom: 80, availabilityLabel: 'Dostępny od dziś', verified: true, city: 'Kraków' },
  { id: '8', name: 'Andrzej Gromadzki', category: 'zlota-raczka', image: 'https://i.pravatar.cc/400?img=18', rating: 4.5, reviewCount: 45, priceFrom: 90, availabilityLabel: 'Dostępny jutro', verified: true, city: 'Kraków' },
  { id: '9', name: 'Kamil Sowa', category: 'zlota-raczka', image: 'https://i.pravatar.cc/400?img=19', rating: 4.7, reviewCount: 110, priceFrom: 100, availabilityLabel: 'Dostępny w tym tygodniu', verified: true, city: 'Kraków' },
];

