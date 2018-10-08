import * as React from 'react';
import { Text, View, FlatList, ListRenderItemInfo, ImageRequireSource, TouchableOpacity, Image } from 'react-native';
import styles from './ListScreenStyles';
import { NavigationScreenProp } from 'react-navigation';
import { Color } from 'csstype';
import Interactable from 'react-native-interactable';
import VipModal from '../../Components/VipModal/VipModal';
import { Colors } from '../../Themes';
import LinearGradient from 'react-native-linear-gradient';
import lodash from 'lodash';
import uuid from 'react-native-uuid';
import { GradientPallete } from '../../Components/VipAlert/VipAlert';
import * as Animatable from 'react-native-animatable';

export namespace ListScreen {
    export interface Props {
        navigation: NavigationScreenProp<any, any>;
    }

    export interface State {
        todos: Todo[];
    }
}

export interface Todo {
    icon?: ImageRequireSource;
    description: string;
    name: string;
    color?: GradientPallete;
    id: string;
}

export class ListScreen extends React.Component<ListScreen.Props, ListScreen.State> {
    modal: VipModal | null = null;
    cards: Animatable.View[] = [];
    constructor(props: ListScreen.Props, context?: any) {
        super(props, context);
        this.state = {
            todos: [] as Todo[]
        };
    }

    componentWillReceiveProps(newProps: ListScreen.Props) {
        //
    }

    removeItem = (todo: Todo) => {
        const survivedTodos = lodash.filter(this.state.todos, (currentTodo: Todo) => {
            console.tron.log(todo.id + ' ' + currentTodo.id);
            return currentTodo.id !== todo.id;
        });
        console.tron.log(survivedTodos);
        this.setState({
            todos: survivedTodos
        });
    };

    renderCard = (todo: ListRenderItemInfo<Todo>) => {
        return (
            <Animatable.View
                ref={(ref) => {
                    this.cards[todo.index] = ref;
                }}
                style={[
                    styles.card,
                    {
                        marginBottom: '5%'
                    }
                ]}>
                <TouchableOpacity
                    style={styles.cardBackground}
                    onPress={() => {
                        if (this.cards[todo.index] && this.cards[todo.index].fadeOutLeft) {
                            this.cards[todo.index].fadeOutLeft!(400).then(() => {
                                this.removeItem(todo.item);
                            });
                        }
                    }}>
                    <Text style={styles.headerText}>Deletar</Text>
                </TouchableOpacity>
                <Interactable.View
                    boundaries={{ left: -100, right: 0, bounce: 0.5 }}
                    horizontalOnly={true}
                    snapPoints={[{ x: 0 }, { x: -100 }]}
                    style={styles.card}>
                    <LinearGradient
                        style={styles.card}
                        start={{ x: 0.0, y: 0.0 }}
                        end={{ x: 1.0, y: 0.0 }}
                        colors={todo.item.color && todo.item.color.colors ? todo.item.color.colors : [Colors.colors.turquoise_blue]}>
                        <View style={styles.startColumn}>
                            <Text style={styles.headerText}>{todo.item.name.toUpperCase()}</Text>
                            <Text style={styles.whiteButtonText}>{todo.item.description}</Text>
                        </View>
                    </LinearGradient>
                </Interactable.View>
            </Animatable.View>
        );
    };

    openModal = () => {
        this.modal!.openModal();
    };

    addTodoCard = (na: string, des: string, col: GradientPallete) => {
        const newTodo = { name: na, description: des, id: uuid.v1(), color: col } as Todo;
        const newTodos = this.state.todos;
        newTodos.push(newTodo);
        this.setState({
            todos: newTodos
        });
    };

    public render() {
        return (
            <View style={styles.background}>
                <View style={styles.marginTop}>
                    <Text style={styles.giantHeaderText}>Minha lista</Text>
                </View>
                <View style={styles.marginTop}>
                    <Text style={styles.blackHeaderText}>Adicionar tarefa</Text>
                </View>
                <TouchableOpacity onPress={this.openModal} style={styles.todoHeader}>
                    <View style={styles.plusIcon}>
                        <Image style={styles.plusIcon} source={require('../../Images/Icons/icAdd.png')} />
                    </View>
                </TouchableOpacity>
                <View style={styles.cardsContainer}>
                    <FlatList
                        renderItem={this.renderCard}
                        extraData={this.state}
                        data={this.state.todos}
                        keyExtractor={(item: any, index: number) => index.toString()}
                    />
                </View>
                <VipModal
                    colorPalletes={[Colors.gradients.burningOrange, Colors.gradients.summerDog, Colors.gradients.tuttifrutti, Colors.gradients.cottonCandy]}
                    onPress={this.addTodoCard}
                    ref={(ref: VipModal) => (this.modal = ref)}
                />
            </View>
        );
    }
}
