import React, { Component } from 'react';
import { FlatList } from 'react-native';
import MovieListCard from './MovieListCard';

class MovieList extends Component {
  constructor(props) {
    super(props);
    console.log('navigation ', props.navigation);
  }

    renderItem = ({ item }) => (
      <MovieListCard movie={item} navigation={this.props.navigation} />
    )

    render() {
      return (
        <FlatList
          renderItem={(item) => this.renderItem(item)}
          keyExtractor={(item) => item.id.toString()}
          data={this.props.movies}
          initialNumToRender={5}
          maxToRenderPerBatch={10}
          showsHorizontalScrollIndicator={false}
          ListEmptyComponent={this.renderEmptyContainer}
        />
      );
    }
}

export default MovieList;
