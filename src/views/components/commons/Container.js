import React from 'react';
import {
  SafeAreaView,
  View,
  KeyboardAvoidingView,
  StyleSheet,
} from 'react-native';
import { isIPhone } from '../../../utils/Helper';
import Theme from '../../../utils/AppTheme';

const Container = ({
  safeArea, style, headerTransparent, children
}) => {
  const mainStyle = [styles.container, style];
  if (headerTransparent) {
    mainStyle.push(styles.headerTransparent);
  }

  let ContainerElement = (
    <KeyboardAvoidingView
      style={mainStyle}
      behavior={isIPhone() ? 'padding' : null}
    >
      {children}
    </KeyboardAvoidingView>
  );

  if (safeArea === true) {
    ContainerElement = (
      <SafeAreaView style={styles.container}>{ContainerElement}</SafeAreaView>
    );
  } else {
    ContainerElement = <View style={styles.container}>{ContainerElement}</View>;
  }

  return ContainerElement;
};

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.colors.background
  },
  headerTransparent: {
    paddingTop: Theme.specifications.statusBarHeight
  }
});

export default Container;
