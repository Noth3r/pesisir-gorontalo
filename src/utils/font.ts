
import localFont from 'next/font/local'
import {Montserrat} from 'next/font/google'

export const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
})

export const beach = localFont({
  src: [{
    path: '../styles/fonts/beach/bl.ttf',
    weight: '400',
    style: 'normal',
  },
  {
    path: '../styles/fonts/beach/bl_italic.ttf',
    weight: '400',
    style: 'italic',
  },],
  variable: '--font-beach',
})

export const cocogoose = localFont({
  src: [{
    path: '../styles/fonts/cocogoose/cc-300.ttf',
    weight: '300',
    style: 'normal',
  },
  {
    path: '../styles/fonts/cocogoose/cc-350.ttf',
    weight: '350',
    style: 'normal',
  },
  {
    path: '../styles/fonts/cocogoose/cc-400.ttf',
    weight: '400',
    style: 'normal',
  },  {
    path: '../styles/fonts/cocogoose/cc-700.ttf',
    weight: '700',
    style: 'normal',
  },
],
variable: '--font-cocogoose',
})

export const futura = localFont({
  src: [{
    path: '../styles/fonts/futura/ft-500.ttf',
    weight: '500',
    style: 'normal',
  },
  {
    path: '../styles/fonts/futura/ft-book.ttf',
    weight: '300',
    style: 'normal',
  },],
  variable: '--font-futura',
})