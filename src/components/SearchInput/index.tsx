import React, {useCallback} from 'react';
import {TextInput, useColorScheme} from 'react-native';
import {useDispatch} from 'react-redux';
import {resetSearchResults, searchNews} from '../../redux/actions';
import styles from './styles';
import {debounce} from 'lodash';

export const SearchInput: React.FC<{
  searchText: string;
  setSearchText: Function;
  setIsLoading: Function;
}> = ({searchText, setSearchText, setIsLoading}) => {
  const backgroundColor = useColorScheme() === 'dark' ? '#333' : '#ddd';
  const placeholderColor = useColorScheme() === 'dark' ? '#eee' : '#111';
  const color = useColorScheme() === 'dark' ? '#fff' : '#000';
  const dispatch: Function = useDispatch();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const searchForText = useCallback(
    debounce((text: string) => {
      if (text?.trim().length > 0) {
        dispatch(searchNews(text, setIsLoading));
      } else {
        dispatch(resetSearchResults());
      }
    }, 1000),
    [setSearchText, dispatch, setIsLoading],
  );

  return (
    <TextInput
      placeholder={'Search'}
      placeholderTextColor={placeholderColor}
      style={[styles.container, {backgroundColor, color}]}
      value={searchText}
      onChangeText={(text: string) => {
        setSearchText(text);
        searchForText(text);
      }}
      maxLength={40}
      returnKeyType={'search'}
    />
  );
};
