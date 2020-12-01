import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import FeedRecetas from './FeedRecetaScreen'
import Login from './LoginScreen'
import Register from './RegisterScreen'
import Recipe from "./SingleRecipeScreen";
import SingleCategory from './SingleCategoryScreen'
import Header from './Header'
import BottomNav from './BottomNav'
import CookToday from './CookTodayScreen'

const Stack = createStackNavigator()

const FeedStack = () => {
  return (
    <Stack.Navigator
     initialRouteName= "Feed"
     headerMode="screen"
      screenOptions={{
        header: ({ scene, previous, navigation }) => (
          <Header scene={scene} previous={previous} navigation={navigation} />
        ),
      }}
     >
     <Stack.Screen
       name="Bottom"
       component={BottomNav}
     />
       <Stack.Screen
         name="Recipe"
         component={Recipe}
       />
       <Stack.Screen
         name="SingleCategory"
         component={SingleCategory}
       />
       <Stack.Screen
         name="CookToday"
         component={CookToday}
       />

    </Stack.Navigator>
  )
}

export default FeedStack