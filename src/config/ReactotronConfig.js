import Reactotron from 'reactotron-react-native';

if (__DEV__) {
  const tron = Reactotron.configure({ host: '10.11.5.127' }).useReactNative().connect();

  console.tron = tron;

  tron.clear();
}
