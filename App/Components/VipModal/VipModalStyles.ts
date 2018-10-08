import { StyleSheet, ViewStyle } from 'react-native';
import { ApplicationStyles, Colors } from '../../Themes';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';

export default StyleSheet.create({
    ...ApplicationStyles.screen,
    ...ApplicationStyles.texts,
    gradientView: {
        position: 'absolute',
        bottom: 0,
        height: 5,
        width: '100%',
        padding: 0,
        margin: 0
    } as ViewStyle,
    icon: {
        width: responsiveWidth(20),
        height: responsiveWidth(20),
        alignSelf: 'center'
    } as ViewStyle,
    alertRow: {
        marginBottom: responsiveWidth(8),
        width: responsiveWidth(80)
    } as ViewStyle,
    gradientButton: {
        width: 50,
        height: 50,
        backgroundColor: Colors.colors.white_two,
        padding: 5,
        borderRadius: 5
    } as ViewStyle,
    gradientButtonView: {
        width: '100%',
        height: '100%'
    } as ViewStyle
});
