import { StackNavigator } from 'react-navigation';
import { Colors } from '../Themes/index';
import styles from './Styles/NavigationStyles';
import ForgotPasswordScreen from '../Containers/ForgotPasswordScreen/ForgotPasswordScreen';
import { ListScreen } from '../Containers/ListScreen/ListScreen';
import I18n from '../I18n/I18n';

// Manifest of possible screens
const PrimaryNav = StackNavigator(
    {
        ForgotPasswordScreen: {
            screen: ForgotPasswordScreen,
            navigationOptions: {
                headerTitle: 'Esqueci a senha',
                headerTitleStyle: styles.title,
                headerStyle: styles.header,
                headerTintColor: Colors.title
            }
        },
        ListScreen: {
            screen: ListScreen,
            navigationOptions: {
                header: null,
                headerBackTitle: null
            }
        }
    },
    {
        // Default config for all screens
        headerMode: 'screen',
        initialRouteName: 'ListScreen'
    }
);

export default PrimaryNav;
