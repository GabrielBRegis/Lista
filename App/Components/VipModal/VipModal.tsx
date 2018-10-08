import * as React from 'react';
import { View, TextInput, ViewStyle, KeyboardType, Modal, Text, Image, TouchableOpacity } from 'react-native';
import styles from './VipModalStyles';
import { Ref } from 'react';
import I18n from '../../I18n/I18n';
import VipAlert, { AlertVip, GradientPallete } from '../VipAlert/VipAlert';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import { Colors } from '../../Themes';
import GradientButton from '../GradientButton/GradientButton';
import FloatingLabelInput from '../FloatingLabelInput/FloatingLabelInput';

export namespace VipModal {
    export interface Props {
        isVisible?: boolean;
        onPress?: (name: string, description: string, gradientPallete: GradientPallete) => void;
        alert?: AlertVip | null;
        colorPalletes: GradientPallete[];
    }

    export interface State {
        isModalVisible: boolean;
        name: string;
        description: string;
        color: GradientPallete;
        index: number;
        maxLenght: number;
    }
}

// tslint:disable-next-line:no-empty
export default class VipModal extends React.Component<VipModal.Props, VipModal.State> {
    animatedView: Animatable.View | null = null;
    constructor(props: VipModal.Props) {
        super(props);

        this.state = {
            isModalVisible: this.props.isVisible ? this.props.isVisible : false,
            name: '',
            description: '',
            color: props.colorPalletes[0],
            index: 0,
            maxLenght: props.colorPalletes.length
        };
    }

    openModal = () => {
        this.setState({
            isModalVisible: true,
            name: '',
            description: ''
        });
        setTimeout(() => {
            if (this.animatedView) {
                this.animatedView.transition(
                    {
                        opacity: 0
                    },
                    {
                        opacity: 0.6
                    },
                    200
                );
            }
        }, 200);
    };

    closeModal = () => {
        if (this.animatedView) {
            setTimeout(() => {
                this.setState({
                    isModalVisible: false
                });
                if (this.props.onPress) {
                    this.props.onPress(this.state.name, this.state.description, this.state.color);
                }
            }, 200);
            this.animatedView.transition(
                {
                    opacity: 0.6
                },
                {
                    opacity: 0
                },
                200
            );
        }
    };

    onNameChanged = (text: string) => {
        this.setState({
            name: text
        });
    };

    onDescriptionChanged = (text: string) => {
        this.setState({
            description: text
        });
    };

    gradientPressed = () => {
        const newIndex = this.state.index + 1;
        this.setState({
            index: newIndex,
            color: this.props.colorPalletes[newIndex % this.state.maxLenght]
        });
    };

    render() {
        return (
            this.state.isModalVisible && (
                <Animatable.View
                    ref={(ref) => {
                        this.animatedView = ref;
                    }}
                    style={styles.modalBackground}>
                    <Modal transparent={true} visible={this.state.isModalVisible} animationType={'slide'}>
                        <View style={styles.modalView}>
                            <View style={styles.centeredColumn}>
                                <View style={styles.alertRow}>
                                    <Image style={styles.icon} source={require('../../Images/Icons/ok_grad_orange.png')} />
                                </View>
                                <View style={styles.alertRow}>
                                    <Text style={styles.giantHeaderText}>Nova tarefa</Text>
                                </View>
                                <View style={styles.alertRow}>
                                    <FloatingLabelInput onChangeText={this.onNameChanged} value={this.state.name} label={'Nome da sua tarefa'} />
                                </View>
                                <View style={styles.alertRow}>
                                    <FloatingLabelInput
                                        onChangeText={this.onDescriptionChanged}
                                        value={this.state.description}
                                        label={'Descreva da sua tarefa'}
                                    />
                                </View>
                                <TouchableOpacity style={styles.gradientButton} onPress={this.gradientPressed}>
                                    <LinearGradient
                                        start={{ x: 0.0, y: 0.0 }}
                                        end={{ x: 1.0, y: 0.0 }}
                                        style={styles.gradientButtonView}
                                        colors={this.state.color.colors ? this.state.color.colors : [Colors.colors.turquoise_blue]}
                                    />
                                </TouchableOpacity>
                                <View style={styles.alertRow} />
                                <GradientButton
                                    text={'Salvar tarefa'}
                                    textStyle={styles.whiteButtonText}
                                    style={styles.roundedButton}
                                    colorPallete={Colors.gradients.turquoiseGradient}
                                    onPress={this.closeModal}
                                />
                            </View>
                            <LinearGradient
                                style={styles.gradientView}
                                colors={Colors.gradients.vipMajorGradient.colors ? Colors.gradients.vipMajorGradient.colors : [Colors.colors.turquoise_green]}
                                start={{ x: 0.0, y: 0.0 }}
                                end={{ x: 1.0, y: 0.0 }}
                            />
                        </View>
                    </Modal>
                </Animatable.View>
            )
        );
    }
}
