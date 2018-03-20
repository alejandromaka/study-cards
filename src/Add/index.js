// @flow
import React, { Component } from 'react';
import { Modal } from 'react-native';
import { connect } from 'react-redux';
import AddCard from './AddCard';
import { changeView } from '../actionCreators';
import { addCard } from '../Cards/actionCreators';
import type { Dispatch } from 'redux';
import type { Card } from '../Cards/actions';

type Props = {
  dispatch: Dispatch
};

type State = {
  modalVisible: boolean
};

class Add extends Component<Props, State> {
  state = {
    modalVisible: false
  };

  componentDidMount(): void {
    this.setState({ modalVisible: true });
  }

  closeModal = (): void => {
    this.setState({ modalVisible: false }, () => {
      this.props.dispatch(changeView('list'));
    });
  };

  saveCard = (card: Card): void => {
    this.props.dispatch(addCard(card)).then(this.closeModal);
  };

  render() {
    return (
      <Modal
        visible={this.state.modalVisible}
        animationType="slide"
        onRequestClose={this.closeModal}
      >
        <AddCard handleClose={this.closeModal} handleSave={this.saveCard} />
      </Modal>
    );
  }
}

export default connect()(Add);
