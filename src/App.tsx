

import React { useState } from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  Text,
} from 'react-native';
import ToDoList from './ToDoList';


function App: React.FC = () => {
    const [tasks, newTasks] = useState<String[]>([
        'Do Laundry',
        'Go to gym',
        'Walk dog'
        ]);
  return (
    <SafeAreaView>
        <View>
            <Text>My To Do List</Text>
            <ToDoList tasks={tasks} />
        </View>
    </SafeAreaView>
  );
}

export default App;
