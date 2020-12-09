import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  Image,
  Modal,
  TextInput,
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import {addTask, deleteTask} from '../../redux/actions/taskActions';

import {useSelector, useDispatch} from 'react-redux';
export const TodosList = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [title, setTitle] = useState('');

  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks);
  console.log(tasks);

  const renderItem = ({item, index}) => {
    return (
      <View style={styles.TaskItem}>
        <CheckBox
          disabled={false}
          value={item.active}
          onValueChange={(newValue) => setToggleCheckBox(newValue, index)}
        />
        <Text
          style={[
            styles.SubTitle,
            {textDecorationLine: item.active ? 'line-through' : 'none'},
          ]}>
          {item.title}
        </Text>
      </View>
    );
  };
  const openModal = () => {
    setIsModalVisible(true);
  };
  const saveTitle = () => {
    dispatch(
      addTask({id: tasks.tasks.length + 1, title: title, active: false}),
    );
  };
  const setToggleCheckBox = (value, index) => {
    /*   let newArr = [...data];

    newArr[index].active = !newArr[index].active;
    setData(newArr); */
    dispatch(deleteTask(index));
  };
  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.contentContainer}>
        <Text style={styles.title}>Todos</Text>
        <FlatList data={tasks.tasks} renderItem={renderItem} />
        <TouchableOpacity style={styles.AddBtnWrapper} onPress={openModal}>
          <Image
            style={styles.addIcon}
            source={require('../../../assets/images/add.png')}
          />
        </TouchableOpacity>
      </SafeAreaView>
      <Modal transparent={true} visible={isModalVisible}>
        <View style={styles.modalContentWrapper}>
          <TouchableOpacity
            style={styles.closeBtnWrapper}
            onPress={() => setIsModalVisible(false)}>
            <Image
              style={styles.closeIcon}
              source={require('../../../assets/images/close.png')}
            />
          </TouchableOpacity>

          <View style={styles.inputWrapper}>
            <TextInput
              style={styles.textInput}
              placeholder={'Please enter the task title'}
              onChangeText={(text) => setTitle(text)}
            />
            <TouchableOpacity style={styles.btnWrapper} onPress={saveTitle}>
              <Text style={{textAlign: 'center'}}>SAVE</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  contentContainer: {
    display: 'flex',
    flex: 1,
  },
  addIcon: {
    width: 50,
    height: 50,
  },
  AddBtnWrapper: {
    alignItems: 'center',
  },

  modalContentWrapper: {
    height: '50%',
    marginTop: 'auto',
    backgroundColor: 'green',
    padding: 15,
  },
  closeIcon: {
    width: 20,
    height: 20,
  },
  closeBtnWrapper: {
    alignItems: 'flex-end',
  },
  inputWrapper: {
    marginTop: 60,
  },
  textInput: {
    padding: 15,
    backgroundColor: 'white',
    fontSize: 20,
  },
  btnWrapper: {
    backgroundColor: 'white',
    marginTop: 30,
    padding: 15,
  },
  TaskItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    padding: 15,
  },
  SubTitle: {
    fontSize: 20,
    marginLeft: 15,
  },
});
