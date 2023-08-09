export function formatPrice(priceInCents: number) {
  const formattedPrice = (priceInCents / 100).toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });

  return formattedPrice;
}