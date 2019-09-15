# e2e-react-native-detox

> Project bootstrap with `react-native init` and configured with Detox to provide End-to-End testing

## Setup project

```bash
~ git clone https://github.com/EmaSuriano/e2e-react-native-detox.git
~ cd e2e-react-native-detox
~ yarn
```

## Running iOS

```bash
~ cd ios; pod install; cd --;
~ react-native run-ios
```

## Running Android

```bash
~ react-native run-android
```

## Running Detox Tests

Detox is a End-to-End framework focused in mobile applications, in this case it's being used to run tests for a React Native application.

In order to run the tests, first you need to compile the application:

```bash
~ yarn e2e:build
```

Once the command is done you should have a new folder inside
