import React from 'react';
import {Image, Modal, TouchableOpacity} from 'react-native';
import WebView from 'react-native-webview';
import {Close} from '../../../assets';
import styles from './styles';

export const WebViewScreen: React.FC<{
  url: string;
  isVisible: boolean;
  setIsVisible: Function;
}> = ({url, isVisible, setIsVisible}) => {
  return (
    <Modal
      visible={isVisible}
      animationType={'slide'}
      presentationStyle="pageSheet"
      style={styles.container}
      onDismiss={() => setIsVisible(false)}>
      <WebView
        showsVerticalScrollIndicator={false}
        style={styles.container}
        source={{uri: url}}
        originWhitelist={['*']}
        sharedCookiesEnabled={true}
        pullToRefreshEnabled={true}
        useWebView2={true}
        useSharedProcessPool={true}
      />
      <TouchableOpacity
        onPress={() => setIsVisible(false)}
        style={styles.backImageContainer}>
        <Image style={styles.backImage} source={Close} />
      </TouchableOpacity>
    </Modal>
  );
};
