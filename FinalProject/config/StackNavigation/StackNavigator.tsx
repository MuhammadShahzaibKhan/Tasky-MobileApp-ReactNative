import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignUp from '../../screens/SignUp';
import Login from '../../screens/Login';
import Cover from '../../screens/Cover';
import Intro1 from '../../screens/Intro1';
import Intro2 from '../../screens/Intro2';
import Intro3 from '../../screens/Intro3';
import TabNavigator from './TabNavigatior';
import SingleProject from '../../screens/SingleProject';
import TodoProjects from '../../screens/TodoProjects';
import ProgessProjects from '../../screens/ProgessProjects';
import CompletedProjects from '../../screens/CompletedProjects';

const Stack = createNativeStackNavigator();

function StackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          headerTitleAlign: 'center',
        }}>
        <Stack.Screen name="Cover" component={Cover} />
        <Stack.Screen name="Intro1" component={Intro1} />
        <Stack.Screen name="Intro2" component={Intro2} />
        <Stack.Screen name="Intro3" component={Intro3} />
        <Stack.Screen
          options={{
            headerShown: true,
            headerShadowVisible: false,
          }}
          name="Sign In"
          component={Login}
        />
        <Stack.Screen
          options={{
            headerShown: true,
            headerShadowVisible: false,
          }}
          name="Sign Up"
          component={SignUp}
        />
        <Stack.Screen name="Tab" component={TabNavigator} />
        <Stack.Screen
          options={{
            headerShown: true,
            headerShadowVisible: false,
          }}
          name="Project Details"
          component={SingleProject}
        />
        <Stack.Screen
          options={{
            headerShown: true,
            headerShadowVisible: false,
          }}
          name="Todo Projects"
          component={TodoProjects}
        />
        <Stack.Screen
          options={{
            headerShown: true,
            headerShadowVisible: false,
          }}
          name="In Progess Projects"
          component={ProgessProjects}
        />
        <Stack.Screen
          options={{
            headerShown: true,
            headerShadowVisible: false,
          }}
          name="Completed Projects"
          component={CompletedProjects}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default StackNavigator;
