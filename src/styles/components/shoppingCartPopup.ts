import { styled } from "..";


export const ShoppingCartPopupContainer = styled('span', {
  position: 'absolute',
  top: -10,
  right: -10,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  background: '$green500',

  border: '3px solid $gray900',
  borderRadius: '50%',

  width: '1.5rem',
  height: '1.5rem',
  
  color: '$white',

  fontWeight: 'bold',
  padding: '0.625rem',
})