import { whatsappConfig } from '../data/contact';

export const buildWhatsAppLink = (message?: string) => {
  const text = encodeURIComponent(message ?? whatsappConfig.defaultMessage);
  const number = whatsappConfig.number || '5511999999999';
  return `https://wa.me/${number}?text=${text}`;
};
