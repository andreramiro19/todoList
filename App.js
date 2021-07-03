import React, {useRef, useState} from 'react';
import { KeyboardAvoidingView, StyleSheet, Text, View, TextInput, TouchableOpacity, Animated } from 'react-native';
import Task from './components/Task';
import LottieView from 'lottie-react-native'
import pixelMario from './marioJumpingAgain.json';

export default function App() {

  const progress = useRef(new Animated.Value(0)).current;
  const [hasMario, setHasMario] = useState(false);
  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);

  const handleMarioAnimation = () => {
    setTaskItems([...taskItems, task]);
    setTask(null);

    const newValue = hasMario ? 0 : 1;

    Animated.timing(progress, {
      toValue: newValue,
      duration: 1000,
      useNativeDriver: true,
      }).start();
      setHasMario(!hasMario)
    
  }

  const completeTask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);
  }

  return (
    <React.Fragment>          
      <View style={styles.container}> 
        <LottieView style={styles.mario} progress={progress} source={pixelMario}></LottieView>                                
      
          {/*Todays Tasks */}
          <View style={styles.tasksWrapper}>
            <Text style={styles.sectionTitle}>Today's Tasks</Text>      
              <View style={styles.items}>          
        
                {/* This is where the tasks will go! */}
                {
                  taskItems.map((item, index) => {
                  return (
                  <TouchableOpacity key={index} onPress={() => completeTask(index)}>
                    <Task text={item}></Task>                                                        
                  </TouchableOpacity>                                                  
                  )                                     
                })
            
                }        
         
              </View>        
        
          </View>

        {/* Write a task */}
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={styles.writeTaskWrapper}
          >
          <TextInput style={styles.input} placeholder={'Write a task'} value={task} onChangeText={text => setTask(text)}></TextInput>

          <TouchableOpacity onPress={handleMarioAnimation}>          
            <LottieView
              style={styles.plus}
              source={require('../todoList/plus.json')}
              resizeMode= "contain"
              autoPlay
            ></LottieView>
          </TouchableOpacity> 

        </KeyboardAvoidingView>      

      </View>              
    </React.Fragment>    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#373970',    
  },
  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  items: {
    marginTop: 30,
  },
  writeTaskWrapper: {
    position: 'absolute',
    bottom: 10,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: '#FFF',
    borderRadius: 60,
    borderColor: '#C0C0C0',
    borderWidth: 1,
    width: 250,
  },
  plus: {
    width: 70,
    height: 70,
  },
  addText: {},  
  heartLottie: {
    paddingTop: 10,    
  },
  mario: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
});
