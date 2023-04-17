import React from 'react';
import { StyleSheet, View } from 'react-native';

const ChessBoard = () => {
  const board = [];

  // creating rows
  for (let i = 0; i < 8; i++) {
    const row = [];
    
    // creating columns
    for (let j = 0; j < 8; j++) {
      const backgroundColor = (i + j) % 2 === 0 ? 'white' : 'brown';
      
      row.push(
        <View
          key={`${i}${j}`}
          style={[styles.square, { backgroundColor }]}
        />
      );
    }
    
    // Pushing rows
    board.push(
      <View key={i} style={styles.row}>
        {row}
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {board}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    aspectRatio: 1,
    borderWidth: 1,
    borderColor: 'black',
    overflow: 'hidden', 
    bottom: 200,
    top:200,
  },
  row: {
    flex: 1,
    flexDirection: 'row',
  },
  square: {
    flex: 1,
    borderWidth: 1,
    borderColor: 'black',
  },
});

export default ChessBoard;
