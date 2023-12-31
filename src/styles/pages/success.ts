import { styled } from "..";

export const SuccessContainer = styled('main', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '0 auto',
  height: '656',

  header: {
    marginTop: '3rem',
    marginBottom: '6.5rem'
  },

  h1: {
    fontSize: '$2xl',
    color: '$gray100',
    marginTop: '3rem',
  },

  p: {
    fontSize: '$xl',
    color: '$gray300',
    maxWidth: 560,
    textAlign: 'center',
    marginTop: '2rem'
  },

  a: {
    marginTop: '5rem',
    display: 'block',
    fontSize: '$lg',
    color: '$green500',
    textDecoration: 'none',
    fontWeight: 'bold',
    '&:hover': {
      color: '$green300'
    }
  },
})

export const ImageContainer = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  img: {
    background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
    
    objectFit: 'cover',

    borderRadius: '50%',

    boxShadow: '0px 0px 60px 0px rgba(0,0,0,0.8)',

    '&:not(:first-child)': {
      marginLeft: '-15%'
    }
  }
})