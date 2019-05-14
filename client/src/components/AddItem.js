import React, { Component } from "react";
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap";
import { Form, FormGroup, Label, Input } from "reactstrap";
import { addItemAction } from "../actions/itemActions";
import { connect } from "react-redux";

class AddItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      name: ""
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }
  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  onSubmit = e => {
    e.preventDefault();
    this.props.addItemAction(this.state.name);
  };

  render() {
    return this.props.auth.isAuthenticated ? (
      <div>
        <Button color="danger" onClick={this.toggle}>
          Add Item
        </Button>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
        >
          <ModalHeader toggle={this.toggle}>Add Item</ModalHeader>
          <ModalBody>
            <Form onSubmit={this.onSubmit}>
              <FormGroup>
                <Label for="exampleName">Name</Label>
                <Input
                  type="name"
                  name="name"
                  id="exampleName"
                  placeholder="Name"
                  onChange={this.onChange}
                />
              </FormGroup>

              <Button>Submit</Button>
            </Form>
          </ModalBody>
        </Modal>
      </div>
    ) : (
      <p />
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth
  };
};

export default connect(
  mapStateToProps,
  { addItemAction }
)(AddItem);
