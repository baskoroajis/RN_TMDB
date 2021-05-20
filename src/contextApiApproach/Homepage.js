import React, { Component } from 'react';

import { ScrollView } from 'react-native-gesture-handler';
import MovieSectionList from '../views/components/homepage/MovieSectionList';
import Container from '../views/components/commons/Container';
import Context from './HomepageContext';

export default class HomePage extends Component {
  static contextType = Context;

  static navigationOptions = ({ navigation }) => ({
    headerShown: false
  })

  componentDidMount() {
    this.context.getNowPlaying();
    console.log('get now playingss ', this.context);
  }

  render() {
    return (
      <Container headerTransparent>
        <ScrollView>
          <MovieSectionList title="Now Playing" navigation={this.props.navigation} listData={this.context.latest_movie} />
          <MovieSectionList title="Popular Movie" navigation={this.props.navigation} listData={this.context.popular_movie} />
          <MovieSectionList title="Top Rated" navigation={this.props.navigation} listData={this.context.toprated_movie} />
          <MovieSectionList title="Upcoming Movie" navigation={this.props.navigation} listData={this.context.upcoming_movie} />
        </ScrollView>
      </Container>
    );
  }
}
