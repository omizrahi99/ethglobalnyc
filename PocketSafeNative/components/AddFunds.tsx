import React from 'react';
import WebView from 'react-native-webview';

const AddFunds = () => {
  return (
    <WebView
      source={{uri: 'https://a475-208-123-173-93.ngrok-free.app/add-funds'}}
      injectedJavaScript={`const meta = document.createElement('meta'); meta.setAttribute('content', 'width=device-width, initial-scale=0.5, maximum-scale=0.5, user-scalable=0'); meta.setAttribute('name', 'viewport'); document.getElementsByTagName('head')[0].appendChild(meta); `}
      scalesPageToFit={false}
    />
  );
};

export default AddFunds;
