export type PersonalTrainer = {
  id: number;
  name: string;
  specialty: string;
  description: string;
  instagram: string;
  whatsapp: string;
  image: string;
};

export const personalTrainers: PersonalTrainer[] = [
  {
    id: 1,
    name: 'Nome do profissional',
    specialty: 'Especialidade',
    description: 'Descrição do profissional. Ajuste os dados para refletir o perfil real do time.',
    instagram: '#',
    whatsapp: '#',
    image:
      'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 2,
    name: 'Nome do profissional',
    specialty: 'Especialidade',
    description: 'Descrição do profissional. Ajuste os dados para refletir o perfil real do time.',
    instagram: '#',
    whatsapp: '#',
    image:
      'https://images.unsplash.com/photo-1594381898411-846e7d193883?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 3,
    name: 'Nome do profissional',
    specialty: 'Especialidade',
    description: 'Descrição do profissional. Ajuste os dados para refletir o perfil real do time.',
    instagram: '#',
    whatsapp: '#',
    image:
      'https://images.unsplash.com/photo-1541534401786-2077eed87a74?auto=format&fit=crop&w=900&q=80',
  },
];
