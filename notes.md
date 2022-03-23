#Error of: Android Bundling failed 10535ms
``awer\src\views\DrawerView.tsx: react-native-reanimated could not be found within the project or in these directories:
  node_modules``

Fix:
1. expo install react-native-reanimated
2. Had to add to the babel.config.js file: 
``plugins: [
      'react-native-reanimated/plugin',``

3. After you add the Babel plugin, restart your development server and clear the bundler cache: 
  ``expo start --clear``




