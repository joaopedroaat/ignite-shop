import { styled } from "..";

export const ShoppingCartContainer = styled('div', {
  position: 'absolute',
  right: 0,
  bottom: '0',
  height: '100vh',
  width: '30rem',
  maxWidth: 480,
  background: '$gray800',
  padding: '3rem',

  display: 'flex',
  flexDirection: 'column',

  '-webkit-box-shadow': '-4px 0px 30px 0px rgba(0,0,0,0.8)',
  '-moz-box-shadow': '-4px 0px 30px 0px rgba(0,0,0,0.8)',
  boxShadow: '-4px 0px 30px 0px rgba(0,0,0,0.8)',

  h1: {
    marginTop: '1.5rem',
    marginBottom: '2rem',
    fontSize: '$lg',
  },

  footer: {
    marginTop: 'auto',
    display: 'flex',
    flexDirection: 'column',

    'small, strong': {
      display: 'flex',
      alignItens: 'center',
      justifyContent: 'space-between',
    },

    small: {
      span: {
        fontSize: '$md',
      }
    },

    strong: {
      marginTop: '0.5rem',

      fontSize: '$md',
      span: {
        fontSize: '$xl'
      }
    },

    button: {
      padding: '1.125rem',
      background: '$green500',
      textAlignment: 'center',
      border: 'none',
      borderRadius: 8,
      color: '$white',
      cursor: 'pointer',
      fontWeight: 'bold',
      fontSize: '$md',
      marginTop: '3.5rem',
    }
  }
})

export const CloseButton = styled('button', {
  border: 'none',
  background: 'none',
  color: '$gray500',
  cursor: 'pointer',
  marginLeft: 'auto'
})

export const CartItem = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '1.25rem',

  width: '100%',

  marginBottom: '2rem'
})

export const ItemImage = styled('div', {
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  borderRadius: 8,

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  maxWidth: 94,
  maxHeight: 94,

  img: {
    objectFit: 'cover',
  }
})

export const ItemDetails = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  fontSize: '$md',
  p: {
    color: '$gray300',
  },

  span: {
    marginTop: '0.125rem',
    display: 'block',
    color: '$gray100',
    fontWeight: 'bold'
  },

  button: {
    cursor: 'pointer',
    background: 'none',
    border: 'none',
    color: '$green500',
    fontWeight: 'bold',
    fontSize: '1rem',
    alignSelf: 'flex-start',
    '&:hover': {
      textDecoration: 'underline'
    },
    marginTop: '0.5rem',
  }
})