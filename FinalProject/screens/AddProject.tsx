import React, {useState} from 'react';
import {Text, ToastAndroid, View} from 'react-native';
import rncStyles from 'rncstyles';
import SKButton from '../components/SKButton';
import SKInput from '../components/SKInput';
import {Post} from '../config/ApiMethods/ApiMethods';
import {useSelector} from 'react-redux';
import {TouchableOpacity} from 'react-native';

export default function AddProject() {
  const [model, setModel] = useState<any>({});
  const [selectedBox, setSelectedBox] = useState<string>('Todo');
  const user = useSelector((a: any) => a.login.user);

  const saveTask = () => {
    const taskData = {
      ...model,
      createdBy: user.userName,
    };

    Post('task/addTask', taskData)
      .then(() => {
        ToastAndroid.show('Successfully Added Task', ToastAndroid.SHORT);
        setModel('');
      })
      .catch(err => {
        console.log(err);
      });
  };

  const handleBoxSelection = (box: string) => {
    setSelectedBox(box);

    setModel({...model, isWork: box});
    console.log(model);
  };

  return (
    <View style={[rncStyles.p2, rncStyles.bgWhite]}>
      <View style={[rncStyles.pt1]}>
        <SKInput
          value={model.taskName}
          onChangeText={(e: any) => {
            setModel({...model, taskName: e});
          }}
          label="Task Name"
          placeholder="Enter Task Name"
        />
      </View>
      <View style={[rncStyles.pt1]}>
        <SKInput
          value={model.taskDescription}
          onChangeText={(e: any) => {
            setModel({...model, taskDescription: e});
          }}
          label="Task Description"
          placeholder="Enter Task Description"
        />
      </View>
      <View style={[rncStyles.pt1]}>
        <SKInput
          value={model.date}
          onChangeText={(e: any) => {
            setModel({...model, date: e});
          }}
          label="Date"
          placeholder="Enter Date"
        />
      </View>

      <View
        style={[
          rncStyles.flexRow,
          rncStyles.justifyContentAround,
          rncStyles.py2,
        ]}>
        <View style={[rncStyles.px5]}>
          <SKInput
            value={model.startTime}
            onChangeText={(e: any) => {
              setModel({...model, startTime: e});
            }}
            label="Start Time"
            placeholder="9:30 am"
          />
        </View>
        <View style={[rncStyles.px5]}>
          <SKInput
            value={model.endTime}
            onChangeText={(e: any) => {
              setModel({...model, endTime: e});
            }}
            label="End Time"
            placeholder="3:30 am"
          />
        </View>
      </View>

      <View
        style={[
          rncStyles.flexRow,
          rncStyles.my2,
          rncStyles.justifyContentAround,
        ]}>
        {['Todo', 'In Progress', 'Completed'].map((box, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => handleBoxSelection(box)}
            activeOpacity={0.7}>
            <View
              style={[
                rncStyles.mx1,
                rncStyles.border1,
                rncStyles.rounded,
                {
                  borderColor: selectedBox === box ? '#756ef3' : 'transparent',
                  paddingVertical: 6,
                  paddingHorizontal: 13,
                },
              ]}>
              <Text style={[rncStyles.fs5]}>{box}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>

      {/* <Text style={[rncStyles.fs5, {color: '#868b95'}]}>Board</Text>

      <View
        style={[
          rncStyles.flexRow,
          rncStyles.justifyContentAround,
          rncStyles.py2,
        ]}>
        <Text style={[rncStyles.p1, rncStyles.px3]}>Urgent</Text>
        <Text
          style={[
            rncStyles.textCenter,
            rncStyles.p1,
            rncStyles.px3,
            rncStyles.textPrimary,
            rncStyles.textBold,
            rncStyles.border1,
            rncStyles.rounded,
            {borderColor: '#868b95'},
          ]}>
          Running
        </Text>
        <Text style={[rncStyles.p1, rncStyles.px3]}>ongoing</Text>
      </View> */}

      <View style={rncStyles.py2}>
        <SKButton color="purple" label="Save" onPress={saveTask} />
      </View>
    </View>
  );
}
