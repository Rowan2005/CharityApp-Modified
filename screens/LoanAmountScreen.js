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
    import MyHeader from '../components/MyHeader';

    export default class LoanAmountScreen extends Component{
        constructor(){
            super()
            this.state={
                LoanIDNo:"",
                AmountDisbursed:0,
                MonthlyEMI:0,
                DateLastPaid:"",
                AmountLastPaid:0,
                TotalPaid:0,
                BalanceOutstanding:0,
            }
        }
        render(){
            return(
                <View>
                  <MyHeader title="Loan Details" navigation={this.props.navigation}/>
                    <Text>Loan Details</Text>
                    <TextInput
                 style={styles.formTextInput}
                 placeholder ={"LoanID Number"}
                 maxLength ={14}
                 onChangeText={(text)=>{
                   this.setState({
                     LoanIDNo: text
                   })
                 }}
               />
                <TextInput
              style={styles.formTextInput}
              placeholder ={"Amount Disbursed"}
              maxLength ={6}
              keyboardType={'numeric'}
              onChangeText={(text)=>{
                this.setState({
                  AmountDisbursed: text
                })
              }}
            />
             <TextInput
              style={styles.formTextInput}
              placeholder ={"Monthly EMI"}
              maxLength ={6}
              keyboardType={'numeric'}
              onChangeText={(text)=>{
                this.setState({
                  MonthlyEMI: text
                })
              }}
            />
             <TextInput
              style={styles.formTextInput}
              placeholder ={"Amount Last Paid"}
              maxLength ={6}
              keyboardType={'numeric'}
              onChangeText={(text)=>{
                this.setState({
                  AmountLastPaid: text
                })
              }}
            />
             <TextInput
              style={styles.formTextInput}
              placeholder ={"Total Paid"}
              maxLength ={6}
              keyboardType={'numeric'}
              onChangeText={(text)=>{
                this.setState({
                  TotalPaid: text
                })
              }}
            />
             <TextInput
              style={styles.formTextInput}
              placeholder ={"Balance Outstanding"}
              maxLength ={6}
              keyboardType={'numeric'}
              onChangeText={(text)=>{
                this.setState({
                  BalanceOutstanding: text
                })
              }}
            />
             <TouchableOpacity style = {{backgroundColor:'gold'}}>
                <Text>I Need a Loan</Text>
        </TouchableOpacity>
                </View>
            )
        }
    }
    const styles = StyleSheet.create({

    }) 