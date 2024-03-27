import React, { useState } from 'react';
import { Text,View, TextInput, Button, StyleSheet, KeyboardAvoidingView, TouchableOpacity } from 'react-native';

const LoginScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Handle login logic here
    console.log('Logging in with:', { username, password });
  };

  return (
    <KeyboardAvoidingView 
    style = {styles.container}
    behavior='padding'
    >
        <View style = {styles.inputContainer}>
            <TextInput
                style={styles.input}
                placeholder="Username"
                value={username}
                onChangeText={setUsername}
            />
            <TextInput
                style={styles.input}
                placeholder="Password"
                secureTextEntry
                value={password}
                onChangeText={setPassword}
            />
            <TextInput
                style={styles.input}
                placeholder="Username"
                value={username}
                onChangeText={setUsername}
            />
            <TextInput
                style={styles.input}
                placeholder="Username"
                value={username}
                onChangeText={setUsername}
            />
            <TextInput
                style={styles.input}
                placeholder="Username"
                value={username}
                onChangeText={setUsername}
            />
            <TextInput
                style={styles.input}
                placeholder="Username"
                value={username}
                onChangeText={setUsername}
            />
            
      </View>
      <View style = {styles.buttonContainer}>
         <TouchableOpacity
        onPress={() => { }}
        style= {styles.button}
        >
            <Text style= {styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
        onPress={() => { }}
        style= {[styles.button, styles.buttonOutline]}
        >
            <Text style= {styles.buttonOutlineText}>Sign Up</Text>
        </TouchableOpacity> 
        
        
      </View>
    </KeyboardAvoidingView>

    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

  },
  inputContainer: {
    width: '80%'
  },
  input: {
    paddingHorizontal: 15,
    paddingVertical: 20,
    marginTop: 10,
    borderRadius: 15,
    color: 'black',
    borderWidth: 2,
    fontSize: 18,
    

  },
  buttonContainer:{ 
    width: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40
  },
  button: {
    width: '100%',
    backgroundColor: 'blue',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 20
  },
  buttonOutline:{
    backgroundColor: 'white',
   borderColor: 'white',
   borderWidth: 2
  },
  buttonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 20,
   

  },
  buttonOutlineText: {
    fontWeight: '700',
    fontSize: 20,
    color: 'blue'

  }

  

  

  
});

export default LoginScreen;
