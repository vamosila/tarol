
import { Button, StyleSheet, Text, View } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'

const Solution = () => {

    function storage() {
        console.log("tárol...");
        AsyncStorage.setItem('name', 'Lajos');
    }
    function getName() {
        AsyncStorage.getItem('name').then((data)=>{
            console.log(data)
        })
    }

  return (
    <View>
      <Text style={{marginBottom: 10}}>Solution</Text>
      <View style={{marginBottom: 10}}>
        <Button
            title="Mentés"
            onPress={() => storage()}
        />
      </View>
      <View style={{marginBottom: 10}}>
          <Button
            title="Lekér"
            onPress={() => getName()}
          />
      </View>
    </View>
  )
}

export default Solution

const styles = StyleSheet.create({})