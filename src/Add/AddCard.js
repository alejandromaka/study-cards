// @flow
import React, { Component } from 'react';
import { Button, View } from 'react-native';
import EditCard from './EditCard';
import styles from './AddCard.styles';

type Props = {
  handleClose: () => void,
  handleSave: () => void
};

type State = {
  front: string,
  back: string
};

class AddCard extends Component<Props, State> {
  state = {
    front: '',
    back: ''
  };

  handleFrontChange = (text: string): void => {
    this.setState({ front: text });
  };

  handleBackChange = (text: string): void => {
    this.setState({ back: text });
  };

  render() {
    const { handleClose, handleSave } = this.props;
    const { front, back } = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.buttonsContainer}>
          <Button onPress={handleClose} title="Cancel" />
          <Button onPress={() => handleSave(this.state)} title="Save" />
        </View>
        <EditCard
          card={this.state}
          handleFrontChange={this.handleFrontChange}
          handleBackChange={this.handleBackChange}
        />
      </View>
    );
  }
}

export default AddCard;
