import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from "react-native"


const { height, width } = Dimensions.get("window")
class Todo extends React.Component {
    state = {
        isEditing: false,
        isCompleted: false
    }
    render(){
        const { isCompleted, isEditing } = this.state;
        const { text } = this.props;
        return(
        <View style={styles.container}>
            <View style={styles.column}>
            <TouchableOpacity onPress={this._toggleComplete}>
                <View style={[styles.radio,
                 isCompleted ? styles.completedCircle : styles.uncompletedCircle 
                ]}>
                </View>
            </TouchableOpacity>
            <Text style={[styles.text,
                 isCompleted ? styles.completedText : styles.uncompletedText]}>{text}
            </Text>
            </View>
              {isEditing ? (
                  <View style={styles.actions}>
                    <TouchableOpacity onPressOut={this._finishEditing}>
                        <View style={styles.actionContainer}>
                            <Text style={styles.actionText}>✅</Text>
                        </View>
                    </TouchableOpacity>
                  </View> 
                  ) : ( 
                    <View style={styles.actions}>
                        <TouchableOpacity onPressOut={this._startEditing}>
                        <View style={styles.actionContainer}>
                            <Text style={styles.actionText}>✏️</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                    <View style={styles.actionContainer}>
                          <Text style={styles.actionText}>❌</Text>
                      </View>
                  </TouchableOpacity>
                  </View> 
                )}
        </View>
        );
    }
    _toggleComplete = () => {
        this.setState(prevState => {
            return{
                isCompleted: !prevState.isCompleted
            };
        });
    };
    _startEditing = () => {
        this.setState({
            isEditing: true
        })
    }
    _finishEditing = () => {
        this.setState({
            isEditing: false
        })
    }
}

const styles = StyleSheet.create({
    container: {
        width: width -80,
        borderBottomColor: "#375D7C",
        borderBottomWidth:StyleSheet.hairlineWidth,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    radio:{
        width: 20,
        height: 20,
        borderRadius: 10,
        borderColor:"#375D7C",
        borderWidth: 3,
        marginRight: 20
    }, 
    completedCircle:{
        borderColor:"#D94754"
    },
    uncompletedCircle:{
        borderColor:"#375D7C"
    },
    completedText:{
        color:"#bbb",
        textDecorationLine: "line-through"
    },
    uncompletedText:{
        color: "#353839"
    },
    column: {
        flexDirection: "row",
        alignItems: "center",
        width: width /2,
        justifyContent: "space-between"
    },
    actions: {
        flexDirection:"row"
    },
    text:{
        fontWeight:"600",
        fontSize: 15,
        marginVertical: 15
    },
    actionContainer:{
        marginVertical: 10,
        marginHorizontal: 10
    }
})
export default Todo;