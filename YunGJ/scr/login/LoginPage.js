import React,{Component} from 'react'
import{Alert,View,Image,TextInput,StyleSheet,Dimensions,Button} from 'react-native'
const window = Dimensions.get('window')

export default class LoginPage extends Component
{
   render(){
       return(
           <View style={styles.containt}>
              {/* 商标 */}
              <Image source={require('../images/login/welcome.png')} style={styles.welcomIocn} resizeMode={'center'} />
              {/* 输入框 */}
              <View style={styles.userInfo}>
                <TextInput style={styles.txtInput}  placeholder={'商户号'} clearButtonMode={'while-editing'}/>
                <TextInput style={styles.txtInput}  placeholder={'账号'} clearButtonMode={'while-editing'}/>
                <TextInput style={styles.txtInput}  placeholder={'密码'} clearButtonMode={'while-editing'} secureTextEntry={true}/>
                {/* 确定按钮 */}
                <View style={styles.sureButton}> 
                  <Button title='确定' color='white'  onPress={this._loginBtnClick}/>
                </View>
              </View>

              {/* 其他登录 */}
            <Image style={styles.otherLoginFlag} source={require('../images/login/otherCard.png')} resizeMode={'contain'}/>
            <View style={styles.otherLogin} onPress={this._otherLoginClick}> 
                <Button title='商户身份登录' color='#3dc158' onPress={this._otherLoginClick}/>
            </View>
           </View>
       )
   }

   _loginBtnClick(){
       Alert.alert('124')
   }
   _otherLoginClick(){
      Alert.alert('124')
   }
}


const styles = StyleSheet.create({
    containt:{
        flex: 1,
        backgroundColor: '#F2F2F2',
    },
    welcomIocn:{
       width:window.width-60,
       height:100,
       alignSelf:'center',
       marginTop:60,
    },
    userInfo:{
        marginTop:50,
        justifyContent:'center',
        alignItems:'center'
    },
    txtInput:{
        height:44,
        width:window.width-60,
        alignSelf:'center',
        borderColor:'#dbdbdb',
        borderWidth:1,
        borderRadius:3,
        textAlign:'center'
    },
    sureButton:{
        marginTop:30,
        width:window.width-60,
        height:44,
        backgroundColor:'#3dc158',
        borderRadius:5,
        justifyContent:'center',
    },
    otherLoginFlag:{
        position:'absolute',
        width:window.width,
        bottom:100,
        height:14,
    },
    otherLogin:{
        position:"absolute",
        left:(window.width-180)/2,
        bottom:30,
        backgroundColor:'#F2F2F2',
        width:180,
        height:44,
        borderRadius:22,
        borderWidth:1,
        borderColor:'#3dc158',
        justifyContent:'center',
    },

})