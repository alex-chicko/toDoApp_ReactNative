import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  ScrollView,
  FlatList
} from "react-native";

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';


export default function App() {
  
  const [courseGoals, setCourseGoals] = useState([]);

  
  const addGoalHandler = goalTitle => {
    
    setCourseGoals(currentGoals =>  [
      
      ...currentGoals,
      { id: Math.random().toString(), value: goalTitle }
    ]);
    setIsAddMode(false);
  };

const removeGoalHandler = goalId =>{
  setCourseGoals(currentGoals =>{
    return currentGoals.filter((goal)=> goal.id !== goalId);
  });
}

const cancelGoalAdditionHandel = () => {
  setIsAddMode(false);
};
const [isAddMode,setIsAddMode]= useState(false);
  return (
    <View style={styles.screen}>
      <Button title="Add New Goal" onPress={()=> setIsAddMode(true)}/>
     <GoalInput visible={isAddMode} onAddGoal={addGoalHandler} onCancel={cancelGoalAdditionHandel}/>
      <FlatList
        data={courseGoals}
        renderItem={itemData => <GoalItem id={itemData.item.id} title={itemData.item.value} onDelete={removeGoalHandler}/>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  }
  
});
