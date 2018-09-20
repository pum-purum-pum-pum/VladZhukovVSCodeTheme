import * as path from 'path';
import { generateTheme, IColorSet } from 'vscode-theme-generator';

const themeName = 'VladZhukov';
const colors = {
  black: '#111111',
  white: '#FFFFFF',
  blue: '#5555FF',
  red: '#FF5555',
  green: '#55FF55',
  yellow: '#FFFF33',

  dark_green: '#0A1A00',
  light_green: '#8D9C6A',
  pastel_blue: '#6A9C97',
  darker_pastel_blue: '#6A759C',
  pastel_yellow: '#E9ED79'
}

const colorSet: IColorSet = {
  base: {
    background: colors.dark_green,
    foreground: colors.white,
    color1: colors.light_green,
    color2: colors.darker_pastel_blue,
    color3: colors.pastel_yellow,
    color4: colors.pastel_blue
  }
};

generateTheme(themeName, colorSet, path.join(__dirname, 'theme.json'));
