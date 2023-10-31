import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, Button } from 'react-native';

export default function App() {
  const [isContentVisible, setContentVisible] = useState(false);
  const [message, setMessage] = useState(' ');
  const [imageSource, setImageSource] = useState('https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-off-img.png');
  const [buttonText, setButtonText] = useState('Show');
  const [buttonBackgroundColor, setButtonBackgroundColor] = useState('#22c55e');
  const [counter, setCounter] = useState(0);

  const toggleContentVisibility = () => {
    const prevMessage = message;
    if (prevMessage === ' ') {
      setMessage('Hello World');
      setImageSource('https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-on-img.png');
      setButtonText('Hide');
      setButtonBackgroundColor('#e12d39');
      setContentVisible(true)
    } else {
      setMessage(' ');
      setImageSource('https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-off-img.png');
      setButtonText('Show');
      setButtonBackgroundColor('#22c55e');
    }
    setCounter((prevCounter) => prevCounter + 1);
  };

  return (
    <View style={styles.container}>
      <View style={[styles.darkBackground, { backgroundColor: '#0b0b0b' }]}>
        <View>
          <Image source={{ uri: imageSource }} style={styles.bulbImage} />
        </View>
        {isContentVisible && (
          <View>
            <Text style={styles.textMsg}>{message}</Text>
          </View>
        )}
        <Text style={styles.cntCss}>Count : {counter}</Text>
        <View>
          <Button 
            title={buttonText}
            style = {styles.button}
            color={buttonBackgroundColor}
            onPress={toggleContentVisibility} 
            />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0b0b0b'
  },
  darkBackground: {
    alignItems: 'center',
  },
  bulbImage: {
    flex: .7,
    width: 160,
    resizeMode: 'contain'
  },
  textMsg: {
    color: '#e3ca2d',
    fontSize: 40,
  },
  cntCss: {
    color: 'grey',
    fontSize: 20,
    marginBottom: 10
  },
});
