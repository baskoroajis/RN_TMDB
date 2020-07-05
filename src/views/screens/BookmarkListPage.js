import React, { Component } from 'react';
import { connect } from 'react-redux';
import MovieListPage from '../components/commons/MovieList';
import Container from '../components/commons/Container';

class BookmarkListPage extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerShown: false
  })

  render() {
    return (
      <Container headerTransparent>
        <MovieListPage movies={this.props.savedMovies} navigation={this.props.navigation}/>
      </Container>
    );
  }
}  

const mapStateToProps = (state) => ({
  savedMovies: state.storage.movies,
});

export default connect(mapStateToProps)(BookmarkListPage);
