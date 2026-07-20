export type SpecialistCategory = 'elektryk' | 'naprawa-agd';

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
  phone: string;
};

export const mockSpecialists: SpecialistCard[] = [
  // Elektrycy
  { id: '1', name: 'Konrad', category: 'elektryk', image: 'https://i.pravatar.cc/400?img=11', rating: 4.9, reviewCount: 124, priceFrom: 150, availabilityLabel: 'Dostępny jutro', verified: true, city: 'Kraków', phone: '537 034 780' },
  { id: '2', name: 'Andrzej', category: 'elektryk', image: 'https://i.pravatar.cc/400?img=12', rating: 4.7, reviewCount: 89, priceFrom: 120, availabilityLabel: 'Dostępny od dziś', verified: true, city: 'Kraków', phone: '509 446 492' },
  { id: '3', name: 'Grzegorz', category: 'elektryk', image: 'https://i.pravatar.cc/400?img=13', rating: 5.0, reviewCount: 200, priceFrom: 180, availabilityLabel: 'Dostępny w tym tygodniu', verified: true, city: 'Kraków', phone: '721 156 843' },
  // Naprawa AGD
  { id: '10', name: 'Roman', category: 'naprawa-agd', image: 'https://i.ibb.co/XZ7PnzYq/4fb9b2c7-b76e-45cd-abfa-a0eaa9c4f176.png', rating: 4.8, reviewCount: 98, priceFrom: 100, availabilityLabel: 'Dostępny od dziś', verified: true, city: 'Kraków', phone: '662 855 697' },
  { id: '11', name: 'Jakub', category: 'naprawa-agd', image: 'https://i.ibb.co/CpK0jV8Y/b03cb745-9449-4723-ad47-d6eccc2911a5.png', rating: 4.7, reviewCount: 74, priceFrom: 90, availabilityLabel: 'Dostępny jutro', verified: true, city: 'Kraków', phone: '791 044 688' },
  { id: '12', name: 'Andrzej', category: 'naprawa-agd', image: 'https://i.ibb.co/spbqn6tk/cd0a5b19-ac9a-4dfd-a9f3-63b9b03f82d4.png', rating: 4.9, reviewCount: 130, priceFrom: 110, availabilityLabel: 'Dostępny od dziś', verified: true, city: 'Kraków', phone: '666 699 248' },
];
