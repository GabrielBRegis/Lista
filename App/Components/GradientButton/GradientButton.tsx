import * as React from 'react';
import { Text, TouchableOpacity, ViewStyle, TextStyle, Image, View } from 'react-native';
import styles from './GradientButtonStyles';
import LinearGradient from 'react-native-linear-gradient';
import { Colors } from '../../Themes';
import * as Animatable from 'react-native-animatable';
import { GradientPallete } from '../ProgressBar/ProgressBar';

export interface Coordinate {
    x: number;
    y: number;
    Z?: number;
}

interface Props {
    onPress?: () => void;
    style?: ViewStyle | ViewStyle[];
    textStyle?: TextStyle;
    imageStyle?: ViewStyle;
    text?: string | string[];
    colorPallete: GradientPallete;
    startCoordinates?: Coordinate;
    endCoordinates?: Coordinate;
    location?: number[];
    isLoading?: boolean;
    imageSource?: any;
}

export interface State {
    isLoading: boolean;
}

// tslint:disable-next-line:no-empty
export default class GradientButton extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            isLoading: this.props.isLoading ? this.props.isLoading : false
        };
    }

    componentWillReceiveProps(newProps: Props) {
        this.setState({
            isLoading: newProps.isLoading ? newProps.isLoading : false
        });
    }

    public render() {
        return (
            <TouchableOpacity style={[styles.button, this.props.style]} onPress={this.props.onPress}>
                <LinearGradient
                    style={styles.gradientView}
                    colors={
                        this.props.colorPallete
                            ? [this.props.colorPallete.beginColor, this.props.colorPallete.endColor]
                            : [Colors.colors.turquoise_green, Colors.colors.cerulean]
                    }
                    start={this.props.startCoordinates ? this.props.startCoordinates : { x: 0.0, y: 0.0 }}
                    end={this.props.endCoordinates ? this.props.endCoordinates : { x: 1.0, y: 0.0 }}
                    locations={this.props.location ? this.props.location : [0, 1]}>
                    <View style={styles.buttonTextContainer}>
                        <Text style={[styles.buttonText, this.props.textStyle]}>{this.props.text}</Text>
                    </View>

                    {this.props.imageSource &&
                        !this.state.isLoading && (
                            <Image style={[styles.buttonImage, this.props.imageStyle]} resizeMode={'contain'} source={this.props.imageSource} />
                        )}
                    {this.state.isLoading && (
                        <Animatable.Image
                            style={styles.loadingImage}
                            animation={'rotate'}
                            iterationCount={'infinite'}
                            resizeMode={'contain'}
                            source={require('../../Images/Icons/preloader.png')}
                        />
                    )}
                </LinearGradient>
            </TouchableOpacity>
        );
    }
}
