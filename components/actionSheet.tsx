// import React, {useState} from 'react';
// import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
// import {BottomSheet, ListItem} from '@rneui/themed';

// const ActionSheet = () => {
//   const [isVisible, setIsVisible] = useState(false);

//   const options = [
//     {title: 'Option 1', onPress: () => console.log('Option 1 selected')},
//     {title: 'Option 2', onPress: () => console.log('Option 2 selected')},
//     {title: 'Cancel', onPress: () => setIsVisible(false), containerStyle: {backgroundColor: 'red'}},
//   ];

//   return (
//     <View style={styles.container}>
//       <TouchableOpacity onPress={() => setIsVisible(true)} style={styles.button}>
//         <Text style={styles.buttonText}>Show ActionSheet</Text>
//       </TouchableOpacity>
//       <BottomSheet isVisible={isVisible} onBackdropPress={() => setIsVisible(false)}>
//         {options.map((option, index) => (
//           <ListItem key={index} onPress={option.onPress} containerStyle={option.containerStyle}>
//             <ListItem.Content>
//               <ListItem.Title>{option.title}</ListItem.Title>
//             </ListItem.Content>
//           </ListItem>
//         ))}
//       </BottomSheet>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#f5f5f5',
//   },
//   button: {
//     backgroundColor: '#007bff',
//     paddingVertical: 10,
//     paddingHorizontal: 20,
//     borderRadius: 5,
//   },
//   buttonText: {
//     color: '#fff',
//     fontSize: 16,
//   },
// });

// export default ActionSheet;
