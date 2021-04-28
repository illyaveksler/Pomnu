// A menu initiated by the add button, to create a new task.
import React, { useCallback, useMemo, useRef } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import BottomSheet from '@gorhom/bottom-sheet'

const AddTaskMenu = () => {
    // ref
    const bottomSheetRef = useRef<BottomSheet>(null)

    // variables
    const snapPoints = useMemo(() => ['25%', '50%'], [])

    // callbacks
    const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
    }, [])

    // renders
    return (
        <View style={styles.container}>
          <BottomSheet
            ref={bottomSheetRef}
            index={1}
            snapPoints={snapPoints}
            onChange={handleSheetChanges}
          >
            <View style={styles.contentContainer}>
              <Text>Awesome 🎉</Text>
            </View>
          </BottomSheet>
        </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: '50%',
      backgroundColor: 'grey',
    },
    contentContainer: {
      flex: 1,
      alignItems: 'center',
    },
  });
  
  export default AddTaskMenu;