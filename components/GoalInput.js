import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet, Modal } from "react-native";

const GoalInput = props => {
  const [enteredGoal, setEnteredGoal] = useState("");

  const goalInputHandler = enteredText => {

    setEnteredGoal(enteredText);
  };

  const addGoalHandler = () => {
      const inputGoal=enteredGoal.trim();
      if(inputGoal===""){
          return ;
      }else{

          props.onAddGoal(inputGoal);
          setEnteredGoal("");
      }
  };

  return (
    <Modal visible={props.visible} animationType="slide ">
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Course goals"
          style={styles.input}
          onChangeText={goalInputHandler}
          value={enteredGoal}
        />
        <View style={styles.buttonContainer}>
            <View style={styles.btn} backgroundColor="red">

          <Button title="CANCEL" onPress={props.onCancel} color="white" />
            </View>
            <View style={styles.btn}>

          <Button title="ADD" onPress={addGoalHandler} color="white"/>
            </View>
        </View>
      </View>
    </Modal>
  );
};
const styles = StyleSheet.create({
  inputContainer: {
    // flexDirection: "row",
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  input: {
    width: "80%",
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
    color: "black"
  },
  buttonContainer:{
      flexDirection:"row",
      justifyContent:"space-between",
      width:"60%"
  },
  btn:{
      backgroundColor:"#76B3FA",
      borderRadius:100,
      width:"40%",
      margin:10,
  }

});
export default GoalInput;
