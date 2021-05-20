import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import React, { Component } from 'react';

// import HomeScreen from './src/views/screens/HomePage';
// reduxsaga
// import HomeScreen from './src/reduxsagaApproach/views/homepage/HomePage';
// contextAPI
import HomeScreen from './src/contextApiApproach/Homepage';
import HomePageProvider from './src/contextApiApproach/HomePageProvider';

import MovieDetailScreen from './src/views/screens/MovieDetailPage';
import BookmarkListScreen from './src/views/screens/BookmarkListPage';

import {
  activeMovieTabIcon, inactiveMovieTabIcon, activeBookmarkTabIcon, inactiveBookmarkTabIcon
} from './src/utils/Icons';
import theme from './src/utils/AppTheme';

const HomePageScreenProvider = () => (
  <HomePageProvider>
    <HomeScreen />
  </HomePageProvider>
);
const HomepageStack = createStackNavigator({
  HomePage: { screen: HomePageScreenProvider },
  MovieDetail: { screen: MovieDetailScreen },
});

HomepageStack.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true;
  if (navigation.state.index > 0) {
    tabBarVisible = false;
  }
  return {
    tabBarVisible,
    headerShown: false,
    header: null
  };
};

const BookmarkDetailScreen = MovieDetailScreen;
const BookmarkStack = createStackNavigator({
  BookmarkListPage: { screen: BookmarkListScreen },
  BookmarkDetail: { screen: BookmarkDetailScreen }
});

BookmarkStack.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true;
  if (navigation.state.index > 0) {
    tabBarVisible = false;
  }
  return {
    tabBarVisible,
    headerShown: false,
    header: null
  };
};

const MainTabs = createBottomTabNavigator(
  {
    Movies: {
      screen: HomepageStack,
      navigationOptions: {
        tabBarLabel: 'Movies',
      },
    },
    Bookmark: {
      screen: BookmarkStack,
      navigationOptions: {
        tabBarLabel: 'Bookmark',
        header: null,
      },
    },
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        if (routeName === 'Movies') {
          return (
            focused ? activeMovieTabIcon() : inactiveMovieTabIcon()
          );
        } if (routeName === 'Bookmark') {
          return (
            focused ? activeBookmarkTabIcon() : inactiveBookmarkTabIcon()
          );
        }
      },
    }),
    tabBarOptions: {
      activeTintColor: theme.colors.white,
      inactiveTintColor: theme.colors.inactive,
      padding: theme.spacing.large,
      style: {
        backgroundColor: theme.colors.background
      }
    },
  }
);

const AppSwitchNavigator = createSwitchNavigator(
  {
    App: MainTabs,
  },
  {
    initialRouteName: 'App',
  }
);

const App = createAppContainer(AppSwitchNavigator);
export default App;
