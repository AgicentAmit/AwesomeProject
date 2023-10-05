// import {Pressable, StyleSheet, Text, View} from 'react-native';
// import React, {useState} from 'react';

// const Switch = (isEnabled, toggleSwitch) => {
//   // const [isEnabled, setIsEnabled] = useState(false);
//   // const toggleSwitch = () => setIsEnabled(previousState => !previousState);
//   return (
//     <View style={styles.container}>
//       {/* <Text>{isEnabled ? 'Switch is ON' : 'Switch is OFF'}</Text> */}
//       <Pressable
//         onPress={toggleSwitch}
//         style={{
//           width: 60,
//           height: 35,
//           backgroundColor: isEnabled ? '#66902F' : 'red',
//           borderRadius: 20,
//           position: 'relative',
//           justifyContent: 'center',
//         }}>
//         <View
//           style={{
//             width: 30,
//             height: 30,
//             borderRadius: 30,
//             backgroundColor: 'white',
//             position: 'absolute',
//             left: !isEnabled && 3,
//             right: isEnabled && 3,
//           }}
//         />
//       </Pressable>
//     </View>
//   );
// };

// export default Switch;

// const styles = StyleSheet.create({
//   container: {},
// });

import {Pressable, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';

const Switch = ({isEnabled, toggleSwitch}) => {
  // const [isEnabled, setIsEnabled] = useState(false);
  // const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
    <View style={styles.container}>
      <Pressable
        onPress={toggleSwitch}
        style={{
          width: 60,
          height: 35,
          backgroundColor: isEnabled ? '#66902F' : 'red',
          borderRadius: 20,
          position: 'relative',
          justifyContent: 'center',
        }}>
        <View
          style={{
            width: 30,
            height: 30,
            borderRadius: 30,
            backgroundColor: 'white',
            position: 'absolute',
            left: !isEnabled && 3,
            right: isEnabled && 3,
          }}
        />
      </Pressable>
    </View>
  );
};

export default Switch;

const styles = StyleSheet.create({
  container: {},
});
