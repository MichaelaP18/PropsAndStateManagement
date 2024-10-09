import React from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  TextInput,
  Button,
  ScrollView,
  Pressable,
  Text
} from 'react-native';

const ToDoList = ({ tasks }) => {
    return (
        <View>
        <View>
            {tasks.map((task, index) => (<View key={index} style={[styles.task, styles.completed]}>
                <Text>{task}</Text>
                </View>
                ))}
            </View>

        <View style={styles.form}>
            <TextInput style={styles.input}
                   placeholder="Add a new task..." />
            <Button title="Add" />
        </View>
        </View>
        );

    }

const styles = StyleSheet.create({
    form: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 20,
        marginTop: 20,
        },
    input: {
        flex: 1,
        borderWidth: 1,
        borderColor: '#ccc',
        paddingHorizontal: 10,
        paddingVertical: 5,
        marginRight: 10,
    },
    task: {
        padding: 10,
        borderBottomWidth: 1,
        borderColor: '#ccc',
        textDecoration: 'none',
    },
    completed: {
        backgroundColor: '#e0e0e0',
    },
    taskText: {
        fontSize: 16,
    },

});


export default ToDoList;