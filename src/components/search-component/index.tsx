import * as React from 'react';
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';
import PopupSort from '../popup-sort';

export default function SearchComponent(props: any) {

  console.log(props);

  const [isToggleSort, setIsToggleSort] = React.useState(false);

  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Image
          source={require('../../../assets/icons/ic_search.png')}
          alt="ic_search"
          style={styles.icSearch}
        />
      </TouchableOpacity>
      <TextInput
        placeholder="Cari nama, bank, atau nominal"
        style={styles.searchInput}
        placeholderTextColor="#B0B0B0"
      />
      <TouchableOpacity
        style={styles.wrapperSort}
        onPress={() => setIsToggleSort(!isToggleSort)}
      >
        <Text style={styles.txtSort}>URUTKAN</Text>
        <Image
          source={require('../../../assets/icons/ic_arrow_1.png')}
          style={styles.icArrowSort}
        />
      </TouchableOpacity>

      <PopupSort isVisible={isToggleSort} />
    </View>
  );
}
