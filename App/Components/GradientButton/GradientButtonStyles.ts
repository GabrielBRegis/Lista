import { StyleSheet } from 'react-native';
import Colors from '../../Themes/Colors';
import Fonts from '../../Themes/Fonts';
import Metrics from '../../Themes/Metrics';
import { ApplicationStyles } from '../../Themes';

export default StyleSheet.create({
    button: {
        ...ApplicationStyles.buttons.roundedCornerButton,
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden'
    },
    buttonText: {
        color: Colors.snow,
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: Fonts.size.medium,
        marginVertical: Metrics.baseMargin
    },
    gradientView: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        width: '100%',
        height: '100%'
    },
    buttonTextContainer: {},
    buttonImage: {
        marginLeft: 10
    },
    loadingImage: {
        width: 30,
        height: 30,
        marginLeft: 10
    }
});
