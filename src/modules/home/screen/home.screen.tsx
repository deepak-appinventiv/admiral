import * as React from 'react';
import { View, StyleSheet, Text, ScrollView, FlatList } from 'react-native';
import { connect } from "react-redux";
import { getMovieListing } from "../";
import CategoryCard from "../../../component/category";
import MovieCard from "../../../component/movieCard";
import { Header } from "../../../component/header";
import Utils from "../../../utils";
import { MovieModal } from "../../../modal";
import Loader from "../../../component/loader";
interface HomeProps {
  navigation: any;
  movies: Array<MovieModal>;
  getMovieListing: Function;
}
interface State {
  isLoading: Boolean;
}

class HomeScreen extends React.PureComponent<HomeProps, State> {
  constructor(props: HomeProps) {
    super(props);
    this.state = {
      isLoading: true
    }
  }
  componentDidMount() {
    this.props.getMovieListing(() => {
      this.setState({ isLoading: false })
    });
  }

  render() {
    return (
      <>
        <Header />
        {
          !this.state.isLoading ?
            <ScrollView
              style={styles.container}
              bounces={false}
              showsVerticalScrollIndicator={false}
            >

              <>
                <View>
                  <Text style={styles.heading}>Cinema around your area</Text>
                  <FlatList
                    data={Utils.Constant.cattegory}
                    horizontal={true}
                    keyExtractor={(item: any, index: any) => index.toString()}
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item, index }) => (
                      <CategoryCard
                        {...item}
                      />
                    )}
                  />
                </View>
                <View>
                  <Text style={styles.heading}>New Relesae</Text>
                  <FlatList
                    data={this.props.movies}
                    horizontal={true}
                    keyExtractor={(item: any, index: any) => index.toString()}
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item, index }) => (
                      <MovieCard
                        {...item}
                        itemIndex={index}
                      />
                    )}
                  />
                </View>
                <View>
                  <Text style={styles.heading}>You might want to see this</Text>
                  <FlatList
                    data={this.props.movies}
                    horizontal={true}
                    keyExtractor={(item: any, index: any) => index.toString()}
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item, index }) => (
                      <MovieCard
                        {...item}
                        itemIndex={index}
                      />
                    )}
                  />
                </View>
              </>

            </ScrollView>
            :
            <Loader />
        }
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  heading: {
    fontSize: 18,
    fontWeight: "600",
    marginTop: 20,
    marginBottom: 20,
    paddingHorizontal: 10,
  }

})

function mapStateToProps(state: any) {
  const { movies } = state.homeReducer;
  return {
    movies,
  }
}
function mapDispatchToProps(dispatch: Function) {
  return (
    {
      getMovieListing: (callback: Function) => dispatch(getMovieListing(callback)),
    }
  )
}
export const Home = connect(mapStateToProps, mapDispatchToProps)(HomeScreen);

