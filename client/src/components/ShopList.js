import React, { Component } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
import { connect } from "react-redux";
import { Button } from "reactstrap";
import { deleteItemAction } from "../actions/itemActions";

class ShopList extends Component {
  deleteItem = _id => {
    this.props.deleteItemAction(_id);
  };
  render() {
    return this.props.auth.isAuthenticated ? (
      <ListGroup>
        {this.props.items.map(item => {
          return (
            <ListGroupItem key={item._id}>
              <Button
                color="danger"
                style={{ float: "right" }}
                onClick={this.deleteItem.bind(this, item._id)}
              >
                x
              </Button>
              {item.name}
            </ListGroupItem>
          );
        })}
      </ListGroup>
    ) : (
      <h1>Please Log in</h1>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth,
    items: state.items
  };
};

export default connect(
  mapStateToProps,
  { deleteItemAction }
)(ShopList);
