import { StyleSheet, ViewStyle } from 'react-native';
import { ApplicationStyles } from '../../Themes';
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
        marginBottom: responsiveWidth(6)
    } as ViewStyle
});
