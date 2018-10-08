import { GradientPallete } from '../Components/ProgressBar/ProgressBar';
import { Colors } from '.';
import { GradientPallete, GradientPallete } from '../Components/VipAlert/VipAlert';

const colors = {
    // Vereficar quais não estão sendo utilizadas
    background: '#1F0808',
    clear: 'rgba(0,0,0,0)',
    facebook: '#3b5998',
    transparent: 'rgba(0,0,0,0)',
    silver: '#F7F7F7',
    steel: '#CCCCCC',
    error: 'rgba(200, 0, 0, 0.8)',
    ricePaper: 'rgba(255,255,255, 0.75)',
    frost: '#D8D8D8',
    cloud: 'rgba(200,200,200, 0.35)',
    windowTint: 'rgba(0, 0, 0, 0.4)',
    panther: '#161616',
    charcoal: '#595959',
    coal: '#2d2d2d',
    bloodOrange: '#fb5f26',
    snow: 'white',
    ember: 'rgba(164, 0, 48, 0.5)',
    fire: '#e73536',
    drawer: 'rgba(30, 30, 29, 0.95)',
    eggplant: '#251a34',
    border: '#483F53',
    banner: '#5F3E63',
    text: '#E0D7E5',
    lochmara: '#286AA8',
    link: '#417BB0',
    darkBlueGrey: '#183541',
    title: '#6d6d6d',
    coolGrey: '#A3AEB3',
    waterMelon: '#fa3e55',
    aquaBlue: '#00efeb',

    black_12: 'rgba(0, 0, 0, 0.12)',
    emerald: '#019949',
    mid_blue: '#286aa6',
    aqua_marine: '#50e3c2',
    tealish: '#35aec4',
    greyish_brown_87: 'rgba(66, 66, 66, 0.87)',
    warm_grey: '#9b9b9b',
    black__19: 'rgba(0, 0, 0, 0.19)',
    black__16: 'rgba(0, 0, 0, 0.16)',
    charcoal_grey: '#303b3f',
    black_87: 'rgba(0, 0, 0, 0.87)',
    cool_grey: '#9a9a9b',
    black: '#1a1919',
    lipstick: '#d8222a',
    black_two: '#000000',
    black_38: 'rgba(0, 0, 0, 0.38)',
    cool_grey_two: '#8e9090',

    // Vip
    white: '#fcfcfc',
    white_two: '#d8d8d8',
    greenblue: '#27ce98',
    greyish_brown: '#4a4a4a',
    white_three: '#e3e3e3',
    greyish: '#b0b0b0',
    brownish_grey: '#606060',
    turquoise_green: '#00e57e',
    cerulean: '#0088c8',
    turquoise_blue: '#01aaae',
    white_four: '#fefefe',
    tangerine: '#fa9a18',
    sun_yellow: '#ffd134',
    pumpkin_orange: '#f87b06',
    darkish_purple: '#441b7a',
    purple: '#592c97',
    black_65: '#FFF00000'
};

const gradients = {
    turquoiseGradient: {
        beginColor: colors.turquoise_green,
        endColor: colors.cerulean
    } as GradientPallete,
    vipMajorGradient: {
        colors: [colors.turquoise_green, colors.cerulean, colors.tangerine, colors.sun_yellow, colors.pumpkin_orange, colors.darkish_purple, colors.purple]
    } as GradientPallete,
    tuttifrutti: {
        colors: ['#8360c3', '#2ebf91']
    } as GradientPallete,
    cottonCandy: {
        colors: ['#009FFF', '#ec2F4B']
    } as GradientPallete,
    burningOrange: {
        colors: ['#FF416C', '#FF4B2B']
    } as GradientPallete,
    summerDog: {
        colors: ['#a8ff78', '#78ffd6']
    } as GradientPallete
};

export default {
    colors,
    gradients
};
