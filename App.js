import React, {Fragment} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  TextInput,
  Button,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import randomColor from 'randomcolor';
import SwipeableViews from 'react-swipeable-views-native';

const Slide = ({children}) => (
  <View
    style={[
      styles.slide,
      {backgroundColor: randomColor({luminosity: 'light'})},
    ]}>
    {children}
  </View>
);

const App = () => {
  return (
    <Fragment>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <Header />
          {global.HermesInternal == null ? null : (
            <View style={styles.engine}>
              <Text style={styles.footer}>Engine: Hermes</Text>
            </View>
          )}

          <View style={styles.body}>
            <SwipeableViews testID="slides">
              <Slide>
                <Text style={styles.sectionTitle}>Step One</Text>
                <Text style={styles.sectionDescription}>
                  Edit <Text style={styles.highlight}>App.js</Text> to change
                  this screen and then come back to see your edits.
                </Text>
              </Slide>
              <Slide>
                <Text style={styles.sectionTitle}>See Your Changes</Text>
                <Text style={styles.sectionDescription}>
                  <ReloadInstructions />
                </Text>
              </Slide>
              <Slide>
                <Text style={styles.sectionTitle}>Debug</Text>
                <Text style={styles.sectionDescription}>
                  <DebugInstructions />
                </Text>
                <Button onPress={() => alert('Clicked!')} title="Click here!" />
              </Slide>
              <Slide>
                <Text style={styles.sectionTitle}>Learn More</Text>
                <TextInput
                  testID="docsInput"
                  multiline
                  style={styles.sectionDescription}>
                  Read the docs to discover what to do next:
                </TextInput>
              </Slide>
            </SwipeableViews>

            <LearnMoreLinks />
          </View>
        </ScrollView>
      </SafeAreaView>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
  slide: {
    padding: 24,
    height: 200,
    display: 'flex',
    justifyContent: 'center',
  },
});

export default App;
