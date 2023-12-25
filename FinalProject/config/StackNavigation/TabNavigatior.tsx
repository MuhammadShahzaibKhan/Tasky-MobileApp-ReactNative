import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../../screens/Home';
import Projects from '../../screens/Projects';
import AddProject from '../../screens/AddProject';
import Chats from '../../screens/Chats';
import Profile from '../../screens/Profile';
import {StyleSheet} from 'react-native';
import SKIcon from '../../components/SKIcon';
import rncStyles from 'rncstyles';
import SKIconButton from '../../components/SKIconButton';

const Tab = createBottomTabNavigator();

const styles = StyleSheet.create({
  selectedTab: {
    color: '#756ef3',
  },
});

function TabNavigator({navigation}: any) {
  return (
    <Tab.Navigator
      tabBarOptions={{
        labelStyle: {
          fontSize: 12,
        },
        activeTintColor: styles.selectedTab.color,
      }}>
      <Tab.Screen
        options={{
          headerTitleAlign: 'center',
          headerShadowVisible: false,
          tabBarIcon: ({color}) => (
            <SKIcon name="home" size={30} color={color} />
          ),
        }}
        name="Task Status"
        component={Home}
      />
      <Tab.Screen
        options={{
          headerTitleAlign: 'center',
          headerShadowVisible: false,
          tabBarIcon: ({color}) => <SKIcon name="folder" color={color} />,
          headerRight: () => (
            <SKIcon
              onPress={() => {
                navigation.navigate('Add Projects');
              }}
              name="add"
              color="#102e60"
              style={[rncStyles.p1]}
            />
          ),
        }}
        name="Projects"
        component={Projects}
      />
      <Tab.Screen
        options={{
          headerTitleAlign: 'center',
          headerShadowVisible: false,
          tabBarIcon: ({color}) => (
            <SKIcon name="add-circle" color={color} size={30} />
          ),
        }}
        name="Add Projects"
        component={AddProject}
      />
      <Tab.Screen
        options={{
          headerTitleAlign: 'center',
          headerShadowVisible: false,
          tabBarIcon: ({color}) => <SKIcon name="chat" color={color} />,
        }}
        name="Chats"
        component={Chats}
      />
      <Tab.Screen
        options={{
          headerTitleAlign: 'center',
          headerShadowVisible: false,
          tabBarIcon: ({color}) => <SKIcon name="person" color={color} />,
        }}
        name="Profile"
        component={Profile}
      />
    </Tab.Navigator>
  );
}

export default TabNavigator;
