import { StyleSheet } from 'react-native';
import { Colors, Fonts, ApplicationStyles } from '../../Themes/index';
import RF from 'react-native-responsive-fontsize';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';

export default StyleSheet.create({
    labelStyleBlur: {
        fontFamily: 'Panefresco400wt-Regular',
        fontSize: RF(3),
        position: 'absolute',
        marginLeft: '14%',
        paddingTop: '5%',
        color: Colors.colors.greyish,
        backgroundColor: 'transparent'
    },

    labelStyleFocused: {
        fontFamily: 'Panefresco400wt-Regular',
        fontSize: RF(2.5),
        marginLeft: '14%',
        marginBottom: '40%',
        position: 'absolute',
        color: Colors.colors.greyish,
        backgroundColor: 'transparent'
    },

    labelStyleWithoutMarginLeft: {
        marginLeft: '0%'
    },

    inputStyleWithoutPaddingLeft: {
        paddingLeft: '0%'
    },

    iconStyle: {
        position: 'absolute',
        height: 24,
        width: 24,
        resizeMode: 'contain'
    },

    underlineStyle: {
        height: 1,
        marginTop: -10,
        backgroundColor: Colors.colors.white_three
    },

    underlineStyleFocused: {
        backgroundColor: Colors.colors.greenblue
    },

    underlineStyleError: {
        backgroundColor: Colors.colors.waterMelon
    },

    underlineStyleCorrect: {
        backgroundColor: Colors.colors.emerald
    },

    inputStyle: {
        ...ApplicationStyles.texts.inputText,
        height: 70,
        paddingLeft: '14%',
        paddingRight: '18%',
        backgroundColor: 'transparent'
    },

    inputValidationIcon: {
        width: 17,
        height: 13,
        position: 'absolute',
        right: 20,
        backgroundColor: 'transparent'
    },

    floatingLabelStyle: {
        justifyContent: 'center'
    }
});
