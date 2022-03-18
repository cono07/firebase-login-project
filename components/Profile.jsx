import React from 'react'
import { StyleSheet, Text, View } from "react-native";
import { useAuthentication } from "../utils/hooks/useAuthentication";
import { Button } from "react-native-elements";
import { getAuth, signOut } from "firebase/auth";

export const Profile = () => {

    const { user } = useAuthentication();
  const auth = getAuth();
  return (
      <View>
          <Text>Welcome {user.email} to your profile page!</Text>
      </View>
    
  )
}
