import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

class Category extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.containter}>
        <View style={styles.header}>
          <View style={styles.headerTitle}>
            <Text style={styles.headerText}>{this.props.title}</Text>
          </View>
          <View style={styles.headerButton}>
            <TouchableOpacity>
              <Text style={styles.headerSubTitle}>View More</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.category}>
          {this.props.data.map((book) => (
            <View key={book.id} style={styles.categoryItem}>
              <Image
                source={{
                  uri: book.attributes.thumbnail
                    ? book.attributes.thumbnail
                    : 'https://s3.us-east-2.amazonaws.com/txt-covers/uploads/cover/NoImage/nopicture.gif',
                }}
                style={styles.img}
              />
              <Text style={styles.categoryTitle}>{book.attributes.title}</Text>
              <Text style={styles.categoryTitle}>{book.attributes.author}</Text>
              <Text style={styles.categoryTitle}>${book.attributes.price}</Text>
            </View>
          ))}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containter: {
    flex: 1,
    flexDirection: 'column',
    padding: 10,
    borderBottomColor: '#ffffff',
    borderBottomWidth: 1,
    borderStyle: 'solid',
  },
  category: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  categoryItem: {
    width: '50%',
  },
  header: {
    flex: 1,
    flexDirection: 'row',
  },
  headerTitle: {
    width: '50%',
    fontSize: 35,
    color: '#ffffff',
  },
  headerText: {
    fontSize: 35,
    color: '#ffffff',
  },
  headerSubTitle: {
    width: '50%',
    fontSize: 15,
    color: '#ffffff',
    textAlign: 'right',
    alignSelf: 'center',
  },
  headerButton: {
    width: '50%',
    justifyContent: 'flex-end',
    textAlign: 'right',
  },
  categoryTitle: {
    color: '#ffffff',
  },
  img: {
    width: 162,
    height: 183,
    borderRadius: 10,
  },
});

export default Category;
