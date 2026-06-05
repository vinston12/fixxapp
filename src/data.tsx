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
  { id: '5', name: 'Krzysztof Kamiński', category: 'hydraulik', image: 'https://storage.filebin.net/filebin/51e961ef044bf24725edc6fc6d916c1f671ae00db4994edc8201f558514f64d5?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=GK352fd2505074fc9dde7fd2cb%2F20260605%2Fhel1-dc4%2Fs3%2Faws4_request&X-Amz-Date=20260605T103733Z&X-Amz-Expires=900&X-Amz-SignedHeaders=host&response-cache-control=max-age%3D900&response-content-disposition=inline%3B%20filename%3D%22008e91a2-f544-42eb-bc65-4fd0014fa42e.png%22&response-content-type=image%2Fpng&x-id=GetObject&X-Amz-Signature=a25606832683ec7939fe8ee1da499f1869c378eda6a5c4bd840c7690cd199e17', rating: 4.6, reviewCount: 67, priceFrom: 100, availabilityLabel: 'Dostępny jutro', verified: true, city: 'Kraków' },
  { id: '6', name: 'Adam Kolarz', category: 'hydraulik', image: 'https://storage.filebin.net/filebin/6317d799855aa01441a5350700560451508b9720d711c20c00caa5213e885a18?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=GK352fd2505074fc9dde7fd2cb%2F20260605%2Fhel1-dc4%2Fs3%2Faws4_request&X-Amz-Date=20260605T103647Z&X-Amz-Expires=900&X-Amz-SignedHeaders=host&response-cache-control=max-age%3D900&response-content-disposition=inline%3B%20filename%3D%22Screenshot%202026-06-05%20123427.png%22&response-content-type=image%2Fpng&x-id=GetObject&X-Amz-Signature=657336f5c3ca8415dd4968aba680f86d2d52dfdcf9076c07ca850c8e9a696da1', rating: 4.9, reviewCount: 312, priceFrom: 160, availabilityLabel: 'Dostępny od dziś', verified: true, city: 'Kraków' },
  // Złota rączka
  { id: '7', name: 'Michał Lewandowski', category: 'zlota-raczka', image: 'https://i.pravatar.cc/400?img=17', rating: 4.9, reviewCount: 420, priceFrom: 80, availabilityLabel: 'Dostępny od dziś', verified: true, city: 'Kraków' },
  { id: '8', name: 'Andrzej Gromadzki', category: 'zlota-raczka', image: 'https://i.pravatar.cc/400?img=18', rating: 4.5, reviewCount: 45, priceFrom: 90, availabilityLabel: 'Dostępny jutro', verified: true, city: 'Kraków' },
  { id: '9', name: 'Kamil Sowa', category: 'zlota-raczka', image: 'https://storage.filebin.net/filebin/ed75733e0019a09f884fc31d41c8ff2f2012701a5394f5a55ec197fe5e505dd9?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=GK352fd2505074fc9dde7fd2cb%2F20260605%2Fhel1-dc4%2Fs3%2Faws4_request&X-Amz-Date=20260605T103834Z&X-Amz-Expires=900&X-Amz-SignedHeaders=host&response-cache-control=max-age%3D900&response-content-disposition=inline%3B%20filename%3D%22Screenshot%202026-06-05%20123423.png%22&response-content-type=image%2Fpng&x-id=GetObject&X-Amz-Signature=dcbdfd1c71c9f30acff3f5216a9cfda9a73a2758c0fff17084c7ab0da45e5b73', rating: 4.7, reviewCount: 110, priceFrom: 100, availabilityLabel: 'Dostępny w tym tygodniu', verified: true, city: 'Kraków' },
];

