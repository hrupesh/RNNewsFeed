import React, {useCallback, useEffect, useState} from 'react';
import {FlatList, RefreshControl, useColorScheme, View} from 'react-native';
import uuid from 'react-native-uuid';
import {useDispatch, useSelector} from 'react-redux';
import {NewsArticle, NewsTags, SearchInput} from '../../components';
import {NewsCategory} from '../../constants';
import {getNewsFeed} from '../../redux/actions';
import styles from './styles';

export const Feed: React.FC = () => {
  const {newsFeed, searchResults} = useSelector(
    (state: any) => state.feedReducer,
  );
  const [isLoading, setIsLoading] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(
    NewsCategory.business,
  );
  const [searchText, setSearchText] = useState('');

  const dispatch: Function = useDispatch();

  useEffect(() => {
    dispatch(getNewsFeed(setIsLoading, selectedCategory));
  }, [dispatch, selectedCategory]);

  const handleRefresh = useCallback(() => {
    dispatch(getNewsFeed(setIsLoading, selectedCategory));
  }, [dispatch, selectedCategory]);

  const backgroundColor = useColorScheme() === 'dark' ? '#000' : '#fff';

  return (
    <View style={[styles.container, {backgroundColor}]}>
      <SearchInput
        searchText={searchText}
        setSearchText={setSearchText}
        setIsLoading={setIsLoading}
      />
      {!searchText?.trim() && (
        <NewsTags
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
      )}
      <FlatList
        keyExtractor={() => uuid.v4()?.toString()}
        showsVerticalScrollIndicator={false}
        data={searchText?.trim() ? searchResults : newsFeed}
        renderItem={({item, index}: any) => (
          <NewsArticle post={item} index={index} />
        )}
        refreshControl={
          <RefreshControl refreshing={isLoading} onRefresh={handleRefresh} />
        }
        style={styles.list}
      />
    </View>
  );
};
