export type ContactInfo = {
  address: string;
  phone: string;
  whatsapp: string;
  instagram: string;
  openingHours: {
    monday: string;
    tuesday: string;
    wednesday: string;
    thursday: string;
    friday: string;
    saturday: string;
    sunday: string;
  };
};

export const contact: ContactInfo = {
  address: 'ENDEREÇO A DEFINIR',
  phone: 'TELEFONE A DEFINIR',
  whatsapp: 'WHATSAPP A DEFINIR',
  instagram: 'https://www.instagram.com/acad_ps/',
  openingHours: {
    monday: 'A DEFINIR',
    tuesday: 'A DEFINIR',
    wednesday: 'A DEFINIR',
    thursday: 'A DEFINIR',
    friday: 'A DEFINIR',
    saturday: 'A DEFINIR',
    sunday: 'A DEFINIR',
  },
};

export const whatsappConfig = {
  number: '',
  defaultMessage:
    'Olá! Gostaria de conhecer a Academia Pro Saúde e saber mais sobre os planos.',
};
