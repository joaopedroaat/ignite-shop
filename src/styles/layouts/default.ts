import { styled } from "..";

export const DefaultLayoutContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'center',
  minHeight: '100vh',
  position: 'relative',
})

export const Header = styled('header', {
  padding: '2rem 0',
  width: '100%',
  maxWidth: 1100,
  margin: '0 auto',

  display: 'flex',
  justifyContent: 'space-between',
})

export const ShoppingCartButton = styled('button', {
    background: '$gray800',
    maxWidth: 48,
    maxHeight: 48,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '$gray500',
    padding: '0.75rem',
    cursor: 'pointer',
    border: 'none',
    borderRadius: 6,
    position: 'relative',
  }
)