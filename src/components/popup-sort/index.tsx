import * as React from 'react';
import { Modal, View } from 'react-native';
import { styles } from './styles';
import RadioButton from '../radiobutton';

export default function PopupSort(props: any) {

  const {
    isVisible,
  } = props;

  const [radioSelected, setRadioSelected] = React.useState(1);

  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    setVisible(isVisible);
  }, [isVisible]);

  const handleSortAsc = () => {
    setRadioSelected(2);
    setVisible(!visible);
  };

  const handleSortDesc = () => {
    setRadioSelected(3);
  };

  const handleSortCurrentDate = () => {
    setRadioSelected(4);
  };

  const handleSortOldDate = () => {
    setRadioSelected(5);
  };

  const items = [
    {
      id: 1,
      name: 'URUTKAN',
      action: null,
    },
    {
      id: 2,
      name: 'Nama A-Z',
      action: handleSortAsc,
    },
    {
      id: 3,
      name: 'Nama Z-A',
      action: handleSortDesc,
    },
    {
      id: 4,
      name: 'Tanggal Terbaru',
      action: handleSortCurrentDate,
    },
    {
      id: 5,
      name: 'Tanggal Terlama',
      action: handleSortOldDate,
    },
  ];

  return (
    <Modal
      visible={visible}
      animationType="fade"
      transparent={true}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <RadioButton
            listItems={items}
            radioSelected={radioSelected}
            radioBorderColor="#FD6442"
            radioSelectedColor="#E07E5F"
          />
        </View>
      </View>
    </Modal>
  );
}
