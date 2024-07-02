// components/StatItem.tsx
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const StatItem = ({statName, statValue, maxStat}) => {
  const progress = (statValue / maxStat) * 100;

  if (statName.toLowerCase() === 'hp') {
    return null;
  }

  return (
    <View style={styles.statItem}>
      <Text style={styles.statName}>
        {statName.replace(/^\w/, c => c.toUpperCase())}
      </Text>
      <View style={styles.infoContainer}>
        <Text style={styles.statValue}>{statValue}</Text>
        <View style={styles.progressBarBackground}>
          <View style={[styles.progressBar, {width: `${progress}%`}]} />
        </View>
      </View>
    </View>
  );
};

export default StatItem;

const styles = StyleSheet.create({
  statItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 8,
  },
  statName: {
    width: 80,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  statValue: {
    marginRight: 10,
    fontSize: 14,
    color: '#333',
    fontWeight: 'bold',
  },
  progressBarBackground: {
    flex: 1,
    height: 10,
    backgroundColor: '#ddd',
    borderRadius: 12,
    overflow: 'hidden',
    marginTop: 5,
  },
  progressBar: {
    height: '100%',
    backgroundColor: '#333',
  },
});
