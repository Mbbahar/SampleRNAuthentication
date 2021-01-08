import React, {useState, useEffect} from 'react';
import { ScrollView, View, KeyboardAvoidingView, TouchableOpacity, Text } from 'react-native';
import {login_screen} from '../styles/page_style';
import {FormComponent} from '../components';

function SignIn(props) {
  const [UserEmail, setUserEmail] = useState('');
  const [UserPassword, setUserPassword] = useState('');

  return (
    <ScrollView>
      <KeyboardAvoidingView
        style={login_screen.keyboard_view}
        keyboardVerticalOffset={10}
        behavior={'position'}>
        <View style={login_screen.container}>
          <View style={login_screen.box}>
            <FormComponent
              setEmail={(email) => setUserEmail(email)}
              setPassword={(password) => setUserPassword(password)}
              onButtonText="LOGIN"
            />

            <TouchableOpacity
              style={login_screen.navButton}
              onPress={() => props.navigation.navigate('SignUp')}>
              <Text style={login_screen.navButtonText}>
                New user? Join here
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
}
export {SignIn};
