import React, { PureComponent, Component } from 'react';
import {
  StyleSheet, View, Text, FlatList
} from 'react-native';
import theme from '../../../utils/AppTheme';
import TextButton from '../commons/TextButton';
import MovieHorizontalCard from './MovieHorizontalCard';

class MovieSectionList extends Component {
  renderItem = ({ item }) => (
    <MovieHorizontalCard movie={item} navigation={this.props.navigation} />
  )

  render() {
    const { title } = this.props;
    const data = this.props.listData;

    return (
      <View style={styles.container}>
        <View style={styles.topContainer}>
          <Text style={styles.title}>{title}</Text>
        </View>
        <FlatList
          horizontal
          renderItem={(item) => this.renderItem(item)}
          keyExtractor={(item) => item.id.toString()}
          data={data}
          initialNumToRender={5}
          maxToRenderPerBatch={10}
          showsHorizontalScrollIndicator={false}
          ListEmptyComponent={this.renderEmptyContainer}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginVertical: theme.spacing.small,
  },
  topContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    marginLeft: theme.spacing.small,
    ...theme.typography.title2,
    color: theme.colors.white,
    padding: theme.spacing.tiny,
  },
  moreButtonText: {
    ...theme.typography.caption1,
    color: theme.colors.primary
  },
});

export default MovieSectionList;
