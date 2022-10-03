import React, { Component } from 'react';
import { BsTrash } from 'react-icons/bs';
import { Li, Label, Button } from './ContactItem.styled';
import PropTypes from 'prop-types';

export default class ContactItem extends Component {
static propTypes = {
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    handleDelete: PropTypes.func.isRequired,
};

render() {
    return (
    <Li>
        <Label>{this.props.name}</Label>
        <Label>{this.props.number}</Label>
        <Button onClick={this.props.handleDelete}>
        <BsTrash color="rgb(255, 245, 238)" />
        </Button>
    </Li>
    );
}
}