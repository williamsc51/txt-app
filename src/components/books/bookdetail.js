import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

class BookDetail extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { book } = this.props;
    return (
      <View>
        <TouchableOpacity onPress={this.props.backButton}>
          <Text style={styles.bookText}> &#60; Back to list </Text>
        </TouchableOpacity>
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
          <View>
            <Text style={[{ fontSize: 25 }, styles.bookText]}>
              {book.attributes.title}
            </Text>
            <Text style={styles.bookText}>{book.attributes.author}</Text>
            <Text style={styles.bookText}>{book.attributes.isbn}</Text>
            <Text style={styles.bookText}>
              Condition: {book.attributes.condition}
            </Text>
            <Text style={styles.bookText}>
              {' '}
              Category: {book.attributes.category}
            </Text>
          </View>
          <View style={styles.bookInfo}>
            <Text style={styles.bookText}>${book.attributes.price}</Text>
          </View>
        </View>
        <View>
          <Text style={styles.bookText}>{book.attributes.description}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
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
    flexDirection: 'row',
  },
  bookText: {
    fontSize: 16,
    color: '#ffffff',
    padding: 5,
  },
  img: {
    width: '100%',
    height: 400,
  },
});

export default BookDetail;
