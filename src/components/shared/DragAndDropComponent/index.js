import React, { Component } from "react";
import {
  sortableContainer,
  sortableElement,
  sortableHandle
} from "react-sortable-hoc";

import "./dnd.css";

const inlineListStyle = {
  height: "150px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  border: "1px solid red",
  backgroundColor: "white",
  position: "relative"
};

const dragHandleStyle = {
  fontSize: "40px",
  position: "absolute",
  top: "50%",
  left: " 10px",
  transform: " translateY(-50%)"
};

const DragHandle = sortableHandle(() => (
  <span className="dragHandle" style={dragHandleStyle}>
    ::
  </span>
));

const SortableItem = sortableElement(({ value }) => (
  <li className="listStyle" style={inlineListStyle}>
    <DragHandle />
    {value}
    <div style={{ width: "100px", height: "100px" }} />
  </li>
));

const SortableContainer = sortableContainer(({ children }) => {
  return <ul style={{ backgroundColor: "lightgrey" }}>{children}</ul>;
});

class DragAndDropComponent extends Component {
  componentDidMount() {
    console.log("didmount DragAndDropComponent");
  }

  componentWillReceiveProps() {
    console.log("WillReceiveProps DragAndDropComponent");
  }

  onSortEnd = ({ oldIndex, newIndex }) => {
    this.props.onSortEnd(this.props.items, oldIndex, newIndex);
  };

  render() {
    const { items } = this.props;

    return (
      <SortableContainer lockAxis="y" onSortEnd={this.onSortEnd} useDragHandle>
        {items.map((value, index) => (
          <SortableItem
            key={`item-${index}`}
            index={index}
            value={value.Item}
          />
        ))}
      </SortableContainer>
    );
  }
}

export default DragAndDropComponent;
