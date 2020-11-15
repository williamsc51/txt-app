import React, { Component } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import BookItem from './bookitem';
import BookDetail from './bookdetail';
import Search from './search';
import api from '../../api';

class booklist extends Component {
  constructor(props) {
    super(props);

    this.state = {
      books: [],
      book: {},
      currentBook: null,
    };
  }

  setCurrentBook = (id) => {
    this.setState({ currentBook: id });
  };

  unsetCurrentBook = () => {
    this.setState({ currentBook: null });
  };

  getBooks = async () => {
    const response = await api.fetchBooks();
    this.setState({ books: response });
  };

  getBookDetails = () => {
    return this.state.books.find((book) => book.id === this.state.currentBook);
  };

  componentDidMount = async () => {
    await this.getBooks();
  };

  render() {
    return (
      <SafeAreaView>
        <View style={styles.container}>
          <Search />
          {this.state.currentBook ? (
            <BookDetail
              book={this.getBookDetails()}
              backButton={this.unsetCurrentBook}
            />
          ) : (
            <FlatList
              data={this.state.books}
              renderItem={({ item }) => (
                <BookItem
                  book={item}
                  onBookPress={this.setCurrentBook}
                  key={item.id}
                />
              )}
            />
          )}
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  conatainer: {
    flex: 1,
    flexDirection: 'column',
  },
});

export default booklist;
