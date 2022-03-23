import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useAuthentication } from "../utils/hooks/useAuthentication";
import { Button } from "react-native-elements";
import { getAuth, signOut } from "firebase/auth";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';


export default function HomeScreen() {
  const { user } = useAuthentication();
  const auth = getAuth();

  const Drawer = createDrawerNavigator();
  // console.log(user)

  return (

    <View style={styles.container}>
      <Text>Welcome {user.email}!</Text>

      <Button
        title="Sign Out"
        style={styles.button}
        onPress={() => signOut(auth)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    marginTop: 10,
  },
});
