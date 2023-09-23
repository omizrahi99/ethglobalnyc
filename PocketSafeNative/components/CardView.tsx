import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const CardView = ({children}: {children: JSX.Element}) => {
  return (
    <View style={styles.card}>
      <Text style={styles.cardText}>{children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 16,
    shadowColor: 'rgba(0, 0, 0, 0.2)',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
    shadowRadius: 4,
    elevation: 5, // For Android
  },
  cardText: {
    fontSize: 16,
    color: 'black',
  },
});

export default CardView;
