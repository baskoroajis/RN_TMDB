import React, { Component } from 'react';
import { FlatList, Text, View } from 'react-native';
import MovieListCard from './MovieListCard';
import { filmIcon } from '../../../utils/Icons';
import theme from '../../../utils/AppTheme';

class MovieList extends Component {
  constructor(props) {
    super(props);
  }

    renderItem = ({ item }) => (
      <MovieListCard movie={item} navigation={this.props.navigation} />
    )

    renderEmptyContainer() {
      return (
        <View style={{ alignItems: 'center', paddingTop: 300 }}>
          {filmIcon()}
          <Text style={{
            ...theme.typography.title1, color: theme.colors.white, marginTop: 30
          }}
          >
            NO SAVED MOVIE
          </Text>
        </View>

      );
    }

    render() {
      return (
        <FlatList
          renderItem={(item) => this.renderItem(item)}
          keyExtractor={(item) => item.id.toString()}
          data={this.props.movies}
          initialNumToRender={5}
          maxToRenderPerBatch={10}
          showsHorizontalScrollIndicator={false}
          ListEmptyComponent={() => this.renderEmptyContainer()}
        />
      );
    }
}

export default MovieList;
