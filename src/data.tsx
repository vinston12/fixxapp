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
  { id: '10', name: 'Roman', category: 'naprawa-agd', image: 'https://i.pravatar.cc/400?img=21', rating: 4.8, reviewCount: 98, priceFrom: 100, availabilityLabel: 'Dostępny od dziś', verified: true, city: 'Kraków', phone: '662 855 697' },
  { id: '11', name: 'Jakub', category: 'naprawa-agd', image: 'https://i.pravatar.cc/400?img=22', rating: 4.7, reviewCount: 74, priceFrom: 90, availabilityLabel: 'Dostępny jutro', verified: true, city: 'Kraków', phone: '791 044 688' },
  { id: '12', name: 'Andrzej', category: 'naprawa-agd', image: 'https://i.pravatar.cc/400?img=23', rating: 4.9, reviewCount: 130, priceFrom: 110, availabilityLabel: 'Dostępny od dziś', verified: true, city: 'Kraków', phone: '666 699 248' },
];
