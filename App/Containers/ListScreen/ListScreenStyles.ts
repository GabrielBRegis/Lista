import { StyleSheet, ViewStyle, TextStyle } from 'react-native';
import { ApplicationStyles, Metrics, Colors, Fonts } from '../../Themes/index';
import RF from 'react-native-responsive-fontsize';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';

export default StyleSheet.create({
    ...ApplicationStyles.screen,
    ...ApplicationStyles.texts,
    background: {
        width: '100%',
        backgroundColor: '#F9FAFC',
        alignItems: 'center'
    } as ViewStyle,
    card: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 1,
        borderRadius: 5,
        width: '100%',
        height: 100
    } as ViewStyle,

    marginTop: {
        marginTop: responsiveWidth(5)
    },

    cardBackground: {
        width: '100%',
        height: '88%',
        backgroundColor: '#D9005B',
        position: 'absolute',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        borderRadius: 5,
        padding: responsiveWidth(5)
    } as ViewStyle,

    cardsContainer: {
        width: '95%',
        height: '100%'
    } as ViewStyle,

    navBar: {
        width: '100%',
        backgroundColor: '#FFFFFF',
        height: 90
    } as ViewStyle,

    todoHeader: {
        width: responsiveWidth(95),
        height: '7%',
        margin: responsiveWidth(5),
        marginTop: responsiveWidth(10),
        borderRadius: 5,
        backgroundColor: Colors.colors.cerulean,
        overflow: 'hidden',
        justifyContent: 'center',
        alignItems: 'center'
    } as ViewStyle,

    plusIcon: {
        width: 35,
        height: 35,
        position: 'absolute'
    } as ViewStyle
});
