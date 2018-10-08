import { TextStyle, ViewStyle } from 'react-native';
import RF from 'react-native-responsive-fontsize';
import Colors from './Colors';
import Fonts from './Fonts';
import Metrics from './Metrics';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';

// This file is for a reusable grouping of Theme items.
// Similar to an XML fragment layout in Android

const ApplicationStyles = {
    screen: {
        roundedButton: {
            height: 56,
            width: responsiveWidth(75),
            borderRadius: 28
        } as ViewStyle,
        modalContainer: {
            justifyContent: 'flex-start',
            position: 'absolute',
            bottom: 0,
            paddingTop: responsiveWidth(5),
            zIndex: 100
        } as ViewStyle,
        modalBackground: {
            backgroundColor: Colors.colors.black,
            height: responsiveHeight(100),
            width: responsiveWidth(100),
            position: 'absolute',
            opacity: 0,
            zIndex: 0
        } as ViewStyle,
        transparentView: {
            backgroundColor: Colors.colors.black,
            opacity: 0
        },
        modalView: {
            backgroundColor: Colors.colors.white,
            height: responsiveHeight(100),
            width: responsiveWidth(100),
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'flex-start'
        } as ViewStyle,
        centeredRow: {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%'
        } as ViewStyle,
        row: {
            flexDirection: 'row',
            alignItems: 'center',
            width: '100%',
            marginBottom: responsiveWidth(8)
        } as ViewStyle,
        centeredColumn: {
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'center',
            height: '100%',
            padding: responsiveWidth(10)
        } as ViewStyle,
        startColumn: {
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'flex-start',
            padding: responsiveWidth(8),
            height: '100%'
        } as ViewStyle,
        backgroundContainer: {
            width: '100%',
            height: '100%',
            backgroundColor: Colors.colors.white,
            padding: '3%',
            alignItems: 'center'
        } as ViewStyle,
        headerView: {
            marginTop: responsiveWidth(3),
            marginBottom: responsiveWidth(8)
        },
        foregroundContainer: {
            width: '100%',
            height: '100%',
            margin: '3%'
        } as ViewStyle,
        mainContainer: {
            flex: 1,
            backgroundColor: Colors.colors.white
        } as ViewStyle,
        textInputView: {
            width: responsiveWidth(90),
            marginBottom: responsiveWidth(2)
        } as ViewStyle,
        container: {
            flex: 1,
            flexDirection: 'row',
            alignItems: 'flex-start',
            justifyContent: 'space-between',
            backgroundColor: Colors.colors.white
        } as ViewStyle,
        formContainer: {
            marginHorizontal: Metrics.doubleBaseMargin,
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'space-around'
        } as ViewStyle,
        titleScreenText: {
            fontFamily: 'Arial',
            fontSize: 18,
            lineHeight: 28,
            color: Colors.colors.greyish_brown_87
        } as TextStyle,
        titleText: {
            color: Colors.colors.black,
            fontSize: 14,
            fontFamily: Fonts.type.arial,
            fontWeight: 'bold',
            fontStyle: 'normal',
            letterSpacing: 0,
            textAlign: 'left'
        } as TextStyle
    },
    flatList: {
        lineContainer: {
            flex: 2,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: Metrics.lineListSize,
            paddingHorizontal: 31,
            borderBottomWidth: 2,
            borderColor: Colors.colors.cool_grey_two
        } as TextStyle,
        itemText: {
            fontFamily: Fonts.type.roboto,
            fontSize: Fonts.size.medium,
            fontWeight: '500',
            letterSpacing: 0,
            textAlign: 'left',
            color: Colors.colors.white
        } as TextStyle
    },
    buttons: {
        buttonText: {
            color: Colors.colors.white,
            fontSize: Fonts.size.medium,
            fontWeight: 'normal',
            fontFamily: 'Arial',
            letterSpacing: 0,
            textAlign: 'left'
        } as TextStyle
    },
    texts: {
        giantHeaderText: {
            fontFamily: 'Panefresco400wt-Regular',
            alignSelf: 'center',
            fontSize: RF(4),
            color: Colors.colors.greyish_brown,
            textAlign: 'center'
        } as TextStyle,
        headerText: {
            fontFamily: 'Panefresco400wt-Regular',
            alignSelf: 'center',
            fontSize: RF(3),
            color: Colors.colors.white_four,
            textAlign: 'center'
        } as TextStyle,
        blackHeaderText: {
            fontFamily: 'Panefresco400wt-Regular',
            alignSelf: 'center',
            fontSize: RF(3),
            color: Colors.colors.greyish_brown,
            textAlign: 'center'
        } as TextStyle,
        inputText: {
            fontFamily: 'Panefresco400wt-Regular',
            fontSize: RF(3),
            color: Colors.colors.greyish_brown
        } as TextStyle,
        buttonText: {
            fontFamily: 'Panefresco400wt-Regular',
            alignSelf: 'center',
            fontSize: RF(2.5),
            color: Colors.colors.turquoise_blue
        } as TextStyle,
        whiteButtonText: {
            fontFamily: 'Panefresco400wt-Regular',
            alignSelf: 'flex-start',
            fontSize: RF(2.5),
            marginTop: responsiveWidth(3),
            color: Colors.colors.white_four
        } as TextStyle
    },
    icons: {
        menuIcon: {
            width: 18,
            height: 12
        } as TextStyle,
        darkMenuIcon: {
            width: 24,
            height: 24
        } as TextStyle,
        arrowIcon: {
            width: 7,
            height: 11.5
        } as TextStyle
    }
};

export default ApplicationStyles;
