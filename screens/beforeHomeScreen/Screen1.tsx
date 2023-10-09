import {
  Image,
  ImageBackground,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useRef} from 'react';
import {styles} from './Screen1Style';
import RBSheet from 'react-native-raw-bottom-sheet';
import {Picker} from 'react-native-wheel-pick';
import {useNavigation} from '@react-navigation/native';

const Screen1 = () => {
  // const [state, setState] = useState(false);
  const Navigation = useNavigation();
  const refRBSheet = useRef();

  const NumberData = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];

  const Validation = () => {
    refRBSheet.current.close();
    Navigation.navigate('bottomTab');
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="white" barStyle={'dark-content'} />
      <Text style={styles.TitleText}>Today's Games</Text>

      <View style={styles.subContainer}>
        <ImageBackground
          source={require('../../assests/icons/bgImage.png')}
          imageStyle={{
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
          }}>
          <View style={{padding: 15}}>
            <View style={styles.containerAlignment}>
              <View
                style={{alignItems: 'center', flexDirection: 'row', gap: 10}}>
                <Text style={styles.textMid}>UNDER OR OVER</Text>
                <Image source={require('../../assests/icons/info.png')} />
              </View>
              <View
                style={{alignItems: 'center', flexDirection: 'row', gap: 10}}>
                <Text style={styles.textLight}>Starting in</Text>
                <Image source={require('../../assests/icons/timer.png')} />
                <Text style={styles.textLight}>03:23:12</Text>
              </View>
            </View>
            <View style={{paddingTop: 16}}>
              <Text style={styles.textMid}>
                Bitcoin price will be under{'\n'}
                <Text style={{fontSize: 16, color: 'white'}}>
                  $24,524 at 7 a ET on 22nd Jan'21
                </Text>
              </Text>
            </View>
          </View>
        </ImageBackground>
        <View
          style={[
            styles.containerAlignment,
            {
              padding: 16,
            },
          ]}>
          <View>
            <Text style={styles.textExtraLight}>PRIZE POOL</Text>
            <Text style={{color: 'black', textAlign: 'center'}}>$12,000</Text>
          </View>
          <View>
            <Text style={styles.textExtraLight}>UNDER</Text>
            <Text style={{color: 'black', textAlign: 'center'}}>3.25x</Text>
          </View>
          <View>
            <Text style={styles.textExtraLight}>OVER</Text>
            <Text style={{color: 'black', textAlign: 'center'}}>1.25x</Text>
          </View>
          <View>
            <Text style={styles.textExtraLight}>ENTRY FEES</Text>
            <Text style={{color: 'black', textAlign: 'center'}}>
              5{'  '}
              <Image source={require('../../assests/icons/coin.png')} />
            </Text>
          </View>
        </View>
        <View style={{marginHorizontal: 16}}>
          <Text style={styles.textGrey}>What's your prediction?</Text>
          <View
            style={[
              styles.containerAlignment,
              {
                marginVertical: 14,
              },
            ]}>
            <TouchableOpacity style={styles.buttonUnder}>
              <Image source={require('../../assests/icons/down.png')} />
              <Text style={{color: '#FFFFFF', fontWeight: '500'}}>Under</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.buttonOver}
              onPress={() => refRBSheet.current.open()}>
              <Image source={require('../../assests/icons/up.png')} />
              <Text style={{color: '#FFFFFF', fontWeight: '500'}}>Over</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View
          style={{
            backgroundColor: '#F6F3FA',
            borderBottomLeftRadius: 10,
            borderBottomRightRadius: 10,
          }}>
          <View style={styles.containerAlignment}>
            <View style={styles.alignmentsTextWithIcon}>
              <Image source={require('../../assests/icons/user.png')} />
              <Text style={{fontWeight: '600'}}>355 Players</Text>
            </View>
            <View style={styles.alignmentsTextWithIcon}>
              <Image source={require('../../assests/icons/Vector.png')} />
              <Text style={{fontWeight: '600'}}>View chart</Text>
            </View>
          </View>
          <View style={styles.progressLine}>
            <View style={styles.progress} />
          </View>
          <View style={[styles.containerAlignment, {margin: 14}]}>
            <Text style={styles.textExtraLight}>232 predicted under</Text>
            <Text style={styles.textExtraLight}>123 predicted over</Text>
          </View>
        </View>
      </View>

      <RBSheet
        ref={refRBSheet}
        closeOnDragDown={true}
        closeOnPressMask={true}
        customStyles={{
          draggableIcon: {
            backgroundColor: '#B5C0C8',
          },
          container: {
            height: '50%',
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            padding: 18,
          },
        }}>
        <Text style={{fontSize: 16, fontWeight: '600', color: '#333333'}}>
          Your Prediction is Under
        </Text>
        <View style={{marginTop: 16}}>
          <Text style={{color: '#727682', fontSize: 12}}>ENTRY TICKETS</Text>
          <Picker
            style={{backgroundColor: 'white', height: 200}}
            textSize={16}
            selectedValue="5"
            pickerData={NumberData}
            onValueChange={value => {
              console.log(value);
            }}
          />
          <Text style={{color: '#B5C0C8', fontSize: 12}}>You can win</Text>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text>$2000</Text>
            <Text>
              Total <Image source={require('../../assests/icons/coin.png')} />{' '}
              <Text>5</Text>
            </Text>
          </View>
          <TouchableOpacity style={styles.SubmitButton} onPress={Validation}>
            <Text style={{color: '#FFFFFF', fontWeight: '500'}}>
              Submit my prediction
            </Text>
          </TouchableOpacity>
        </View>
      </RBSheet>
    </View>
  );
};

export default Screen1;
