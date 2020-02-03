import Reactotron from 'reactotron-react-native';

if (__DEV__) {
  // const tron = Reactotron.configure({ host: '10.11.5.10' }).useReactNative().connect();
  const tron = Reactotron.configure({ host: '10.11.5.174' }).useReactNative().connect();

  console.tron = tron;

  tron.clear();
}
