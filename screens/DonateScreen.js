import React,{Component}from 'react';
import {
    View,
    Text,
    TextInput,
    Modal,
    KeyboardAvoidingView,
    StyleSheet,
    TouchableOpacity,
    Alert,
    ScrollView} from 'react-native';
    import firebase from 'firebase';
    import db from '../config';
    import Hyperlink from 'react-native-hyperlink'
    import MyHeader from '../components/MyHeader';

    export default class DonateScreen extends Component{
        render(){
            return(
                <View>
                    <MyHeader title="Donate" navigation={this.props.navigation}/>
                    <Text>Why SM3?</Text> 
                    <Text>Student Micro Money Management leads to macro savings and small investments for future studies or extra-curricular activities.</Text>

                    <Text>"TINY DROPS MAKES MIGHTY OCEAN".</Text>

                    <Text></Text>

                    <Text>Daily savings brings in good habit and develops your personal character to manage money efficiently.</Text>

                    <Text></Text>

                    <Text>Why Donate to us?</Text> 
                    <Text>Donation is something which helps people who are need of money for a good cause. </Text>

                    <Text>"CHARITY IS THE GRAVITY TOWARDS DIVINITY".</Text>

                    <Text></Text>

                    <Text>When a student enrolls in SM3 he learns how to save and he also learns how to support others. </Text>

                    <Text>Practice from childhood shapes up your adulthood in the right direction for a better future.</Text>

                    <Text></Text>
                    
                    <Hyperlink linkDefault={true}>
  <Text style={styles.sectionDescription}>
    Please click on this link to donate.   
  </Text>
  <Text></Text>
  <Text>https://www.instamojo.com/@Askrbruno</Text>
</Hyperlink>
                </View>
            )
        }
    }
    const styles = StyleSheet.create({

    }) 