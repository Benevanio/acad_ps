export type Plan = {
  id: string;
  name: string;
  price: string;
  period: string;
  recommended: boolean;
  benefits: string[];
};

export const plans: Plan[] = [
  {
    id: 'monthly',
    name: 'Plano Mensal',
    price: 'XX,XX',
    period: '/mês',
    recommended: false,
    benefits: [
      'Acesso à musculação',
      'Área cardio',
      'Avaliação inicial',
      'Horários flexíveis',
    ],
  },
  {
    id: 'quarterly',
    name: 'Plano Trimestral',
    price: 'XX,XX',
    period: '/mês',
    recommended: true,
    benefits: [
      'Acesso completo',
      'Avaliação física',
      'Treinos personalizados',
      'Benefícios exclusivos',
    ],
  },
  {
    id: 'annual',
    name: 'Plano Anual',
    price: 'XX,XX',
    period: '/mês',
    recommended: false,
    benefits: [
      'Acesso completo',
      'Avaliação física',
      'Treino personalizado',
      'Acompanhamento',
      'Melhor custo-benefício',
    ],
  },
];
