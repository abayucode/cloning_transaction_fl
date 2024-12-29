import * as React from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import { styles, fillCircle, circle } from './styles';

export default function RadioButton(props: any) {

  const {
    listItems,
    radioSelected,
    radioBorderColor,
    radioSelectedColor,
  } = props;

  React.useEffect(() => {
    console.log(props);
  }, [props]);

  return (
    <FlatList
      data={listItems}
      renderItem={({item}) => (
        <TouchableOpacity
          style={styles.container}
          onPress={item.action}
        >
          <View style={circle(radioBorderColor)}>
            <View style={fillCircle(item.id === radioSelected, radioSelectedColor)} />
          </View>
          <Text style={styles.txtRadio}>{item.name}</Text>
        </TouchableOpacity>
      )}
      keyExtractor={(item) => item.name}
    />
  );
}
