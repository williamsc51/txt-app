import React, { Component } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet, View, Image, ScrollView, Dimensions } from 'react-native';
import Category from './category';

const win = Dimensions.get('window');
const ratio = win.width / 4000;

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      category: [],
      sale: [],
    };
  }

  api = async (url, state) => {
    let response = await fetch(url).then((data) => {
      return data.json();
    });
    let stateName = state;
    this.setState({ [stateName]: response.data });
  };

  componentDidMount = async () => {
    await this.getCategory();
    await this.getSale();
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <View>
            <Header />
            <Category
              title="Sale"
              data={this.state.sale}
              navigation={this.props.navigation}
            />
            <Category title="College" data={this.state.category} />
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }

  getCategory = async () => {
    let state = 'category';
    await this.api('http://10.0.0.186:3000/api/v1/books?limit=2', state);
  };

  getSale = async () => {
    let state = 'sale';
    await this.api('http://10.0.0.186:3000/api/v1/books?limit=4', state);
  };
}

const Header = () => {
  return (
    <View>
      <Image
        style={styles.headerImg}
        source={require('../images/banner-bg.jpg')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#202E32',
    color: 'red',
    justifyContent: 'flex-start',
  },
  headerImg: {
    width: win.width,
    height: 6000 * ratio,
    resizeMode: 'cover',
  },
});

export default Main;
