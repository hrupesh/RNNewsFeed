import React, {useCallback} from 'react';
import {Text, TouchableOpacity, useColorScheme} from 'react-native';
import styles from './styles';

export const Tag: React.FC<{
  category: String;
  selectedCategory: String;
  setSelectedCategory: Function;
}> = ({category, selectedCategory, setSelectedCategory}) => {
  const textColor = useColorScheme() === 'dark' ? '#fff' : '#000';
  const handlePress = useCallback(() => {
    setSelectedCategory(category);
  }, [category, setSelectedCategory]);
  return (
    <TouchableOpacity
      style={[
        styles.container,
        selectedCategory === category && styles.selected,
      ]}
      onPress={handlePress}>
      <Text style={[styles.text, {color: textColor}]}>{`${
        category.charAt(0).toUpperCase() + category.slice(1)
      }`}</Text>
    </TouchableOpacity>
  );
};
