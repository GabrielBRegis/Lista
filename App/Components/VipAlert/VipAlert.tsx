import * as React from 'react';
import { View, Text, ViewStyle, Image } from 'react-native';
import styles from './VipAlertStyles';
import { Ref } from 'react';
import I18n from '../../I18n/I18n';
import LinearGradient from 'react-native-linear-gradient';
import { Colors } from '../../Themes';
import GradientButton from '../GradientButton/GradientButton';
import { Color } from 'csstype';
import FloatingLabelInput from '../FloatingLabelInput/FloatingLabelInput';

export interface GradientPallete {
    beginColor: Color;
    endColor: Color;
    colors?: Color[] | null;
}

export namespace VipAlert {
    export interface Props {
        style?: ViewStyle | null;
        alert?: AlertVip | null;
        onPress?: () => void;
    }

    export interface State {}
}

export interface AlertVip {
    type?: string | null;
    headerMessage?: string | null;
    message?: string | null;
    buttonMessage?: string | null;
}

// tslint:disable-next-line:no-empty
export default class VipAlert extends React.Component<VipAlert.Props, VipAlert.State> {
    constructor(props: VipAlert.Props) {
        super(props);
    }

    render() {
        return (
            <View style={[styles.modalView, this.props.style]}>
                <View style={styles.centeredColumn}>
                    <View style={styles.alertRow}>
                        <Image style={styles.icon} source={require('../../Images/Icons/ok_grad_orange.png')} />
                    </View>
                    <View style={styles.alertRow}>
                        <Text style={styles.giantHeaderText}>Nova tarefa</Text>
                    </View>
                    <View style={styles.alertRow}>
                        <FloatingLabelInput label={'Nome da sua tarefa'} />
                        <FloatingLabelInput label={'Descreva da sua tarefa'} />
                    </View>
                    <GradientButton
                        text={'Salvar tarefa'}
                        textStyle={styles.whiteButtonText}
                        style={styles.roundedButton}
                        colorPallete={Colors.gradients.turquoiseGradient}
                        onPress={this.props.onPress}
                    />
                </View>
                <LinearGradient
                    style={styles.gradientView}
                    colors={Colors.gradients.vipMajorGradient.colors ? Colors.gradients.vipMajorGradient.colors : [Colors.colors.turquoise_green]}
                    start={{ x: 0.0, y: 0.0 }}
                    end={{ x: 1.0, y: 0.0 }}
                />
            </View>
        );
    }
}
