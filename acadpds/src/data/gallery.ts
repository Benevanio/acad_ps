export type GalleryItem = {
  id: number;
  src: string;
  alt: string;
};

export const galleryItems: GalleryItem[] = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=900&q=80',
    alt: 'Academia com área de musculação',
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=900&q=80',
    alt: 'Pessoa treinando com pesos',
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=900&q=80',
    alt: 'Atleta em treino de força',
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=900&q=80',
    alt: 'Área de cardio com equipamentos',
  },
  {
    id: 5,
    src: 'https://images.unsplash.com/photo-1541534401786-2077eed87a74?auto=format&fit=crop&w=900&q=80',
    alt: 'Recepção da academia',
  },
  {
    id: 6,
    src: 'https://images.unsplash.com/photo-1594381898411-846e7d193883?auto=format&fit=crop&w=900&q=80',
    alt: 'Treinamento funcional em equipe',
  },
];
