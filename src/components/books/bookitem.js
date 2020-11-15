import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

class BookItem extends Component {
  constructor(props) {
    super(props);
  }

  handlePress = () => {
    this.props.onBookPress(this.props.book.id);
  };

  render() {
    const { book } = this.props;
    return (
      <TouchableOpacity onPress={this.handlePress} style={styles.book}>
        <View>
          <Image
            source={{
              uri: book.attributes.thumbnail
                ? book.attributes.thumbnail
                : 'https://s3.us-east-2.amazonaws.com/txt-covers/uploads/cover/NoImage/nopicture.gif',
            }}
            style={styles.img}
          />
        </View>
        <View style={styles.bookInfo}>
          <Text style={[{ fontSize: 25 }, styles.bookText]}>
            {book.attributes.title}
          </Text>
          <Text style={styles.bookText}>{book.attributes.author}</Text>
          <Text style={styles.bookText}>${book.attributes.price}</Text>
          <TouchableOpacity>
            <Ionicons
              name="add-circle"
              size={18}
              color="#ffffff"
              style={styles.addToCart}
            />
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  containter: {
    flex: 1,
    flexDirection: 'column',
    padding: 10,
  },
  addToCart: {
    position: 'absolute',
    bottom: 10,
    right: 10,
  },
  header: {
    width: '100%',
  },
  headerTitle: {
    fontSize: 35,
    color: '#ffffff',
  },
  book: {
    flex: 1,
    flexDirection: 'row',
    padding: 10,
    borderBottomColor: '#ffffff',
    borderBottomWidth: 1,
    borderStyle: 'solid',
  },
  bookInfo: {
    width: '80%',
    position: 'relative',
  },
  bookText: {
    color: '#ffffff',
    padding: 5,
  },
  img: {
    width: 75,
    height: 100,
  },
});

export default BookItem;
