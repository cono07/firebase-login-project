import React from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { Input, Button } from "react-native-elements";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";


const auth = getAuth();

console.log(getAuth);

const SignUpScreen = ({ navigation }) => {
  const [value, setValue] = React.useState({
    email: "",
    password: "",
    username:"",
    error: "",
  });



  const signUpFunc=(()=>{
    if (value.email === "" || value.password === "") {
      setValue({
        ...value,
        error: "Email and password are mandatory.",
      });
  }
  createUserWithEmailAndPassword(auth, value.email, value.password)
  .then((userCredential)=>{
      navigation.navigate("Sign In")
       return console.log('result' ,userCredential)
    })
    .catch((error)=>{
      setValue({
        ...value,
        error: error.message,
      });
    })

})
// signUpFunc();


  // async function signUp() {
  //   if (value.email === "" || value.password === "") {
  //     setValue({
  //       ...value,
  //       error: "Email and password are mandatory.",
  //     });
  //     return;
  //   }

  //   try {
  //     await createUserWithEmailAndPassword(auth, value.email, value.password);
  //     navigation.navigate("Sign In")
  //   } catch (error) {
  //     setValue({
  //       ...value,
  //       error: error.message,
  //     });
  //   }
  // }

  return (
    <View style={styles.container}>
      <Text>Signup screen!</Text>

      {!!value.error && (
        <View style={styles.error}>
          <Text>{value.error}</Text>
        </View>
      )}

      <View style={styles.controls}>

        <TextInput placeholder="username" containerStycontainerStyle={styles.control}
          value={value.username}
          onChangeText={(text) => setValue({ ...value, email: text })}
          leftIcon={<Icon name="envelope" size={16} />} />

        <TextInput
          placeholder="Email"
          containerStyle={styles.control}
          value={value.email}
          onChangeText={(text) => setValue({ ...value, email: text })}
          leftIcon={<Icon name="envelope" size={16} />}
        />

        <TextInput
          placeholder="Password"
          containerStyle={styles.control}
          value={value.password}
          onChangeText={(text) => setValue({ ...value, password: text })}
          secureTextEntry={true}
          leftIcon={<Icon name="key" size={16} />}
        />

        <Button title="Sign up" buttonStyle={styles.control} onPress={signUpFunc} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  controls: {
    flex: 1,
  },

  control: {
    marginTop: 10,
  },

  error: {
    marginTop: 10,
    padding: 10,
    color: "#fff",
    backgroundColor: "#D54826FF",
  },
});

export default SignUpScreen;
