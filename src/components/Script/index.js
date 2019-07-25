import React from "react";
import "antd/dist/antd.css";
import { Table, Select } from "antd";
import { DndProvider, DragSource, DropTarget } from "react-dnd";
import HTML5Backend from "react-dnd-html5-backend";
import update from "immutability-helper";
import { Link } from "react-router-dom";
import Axios from "axios";
import { LocalStorage } from "constants/AppConstants";

let dragingIndex = -1;

class BodyRow extends React.Component {
  render() {
    const {
      isOver,
      connectDragSource,
      connectDropTarget,
      moveRow,
      ...restProps
    } = this.props;
    const style = { ...restProps.style, cursor: "move" };

    let { className } = restProps;
    if (isOver) {
      if (restProps.index > dragingIndex) {
        className += " drop-over-downward";
      }
      if (restProps.index < dragingIndex) {
        className += " drop-over-upward";
      }
    }

    return connectDragSource(
      connectDropTarget(
        <tr {...restProps} className={className} style={style} />
      )
    );
  }
}

const rowSource = {
  beginDrag(props) {
    dragingIndex = props.index;
    return {
      index: props.index
    };
  }
};

const rowTarget = {
  drop(props, monitor) {
    const dragIndex = monitor.getItem().index;
    const hoverIndex = props.index;

    // Don't replace items with themselves
    if (dragIndex === hoverIndex) {
      return;
    }

    // Time to actually perform the action
    props.moveRow(dragIndex, hoverIndex);

    // Note: we're mutating the monitor item here!
    // Generally it's better to avoid mutations,
    // but it's good here for the sake of performance
    // to avoid expensive index searches.
    monitor.getItem().index = hoverIndex;
  }
};

const DragableBodyRow = DropTarget("row", rowTarget, (connect, monitor) => ({
  connectDropTarget: connect.dropTarget(),
  isOver: monitor.isOver()
}))(
  DragSource("row", rowSource, connect => ({
    connectDragSource: connect.dragSource()
  }))(BodyRow)
);

class Script extends React.Component {

  state = {
    isDataFetched: false
  };

  components = {
    body: {
      row: DragableBodyRow
    }
  };

  moveRow = (dragIndex, hoverIndex) => {
    const { data } = this.state;
    const dragRow = data[dragIndex];

    this.setState(
      update(this.state, {
        data: {
          $splice: [[dragIndex, 1], [hoverIndex, 0, dragRow]]
        }
      })
    );
  };

  componentDidMount() {
    const config = {
      headers: {
        Authorization:
          `Bearer ${JSON.parse(localStorage.getItem(LocalStorage.ACCESS_TOKEN))}`
      }
    };
    console.log("access", config);
    Axios.get(
      "http://122.165.203.72:5051/script/api/v1/project/9/scenes",
      config
    ).then(res => {
      console.log(res.data.scenes);

      this.setState({ data: res.data.scenes, isDataFetched:true });
    });
  }
  state = {
    data: []
  };

  render() {
    const { Option } = Select;
    const { isDataFetched } = this.state
    const columns = [
      {
        title: "Scene No",
        dataIndex: "sceneNumber",
        className: "center",
        // align: "center"
      },
      {
        title: "Location",
        dataIndex: "location",
        align: "center"
      },
      {
        title: "INT/EXT",
        dataIndex: "environmentType",
        className: "center",
        // align: "center",
        render: (text, record) => (
          <span>
            <Select
              defaultValue={record.environmentType}
              style={{ width: "100px" }}
            >
              <Option value="INT">INT</Option>
              <Option value="EXT">EXT</Option>
              <Option value="INT/EXT">INT/EXT</Option>
            </Select>
          </span>
        )
      },
      {
        title: "Day/Night",
        dataIndex: "timeType",
        className: "center",
        // align: "center",
        render: (text, record) => (
          <span>
            <Select defaultValue={record.timeType} style={{ width: "100px" }}>
              <Option value="day">Day</Option>
              <Option value="evening">EVENING</Option>
              <Option value="night">NIGHT</Option>
            </Select>
          </span>
        )
      },
      {
        title: "Description",
        dataIndex: "description",
        // align: "center"
      },
      // {
      //   title: "Main Cast",
      //   dataIndex: "mainCharacterCount",
      //   className: "center",
      //   align: "center",
      //   render: text => <a href="javascript:;">{text}</a>
      // },
      // {
      //   title: "Supporting Cast",
      //   dataIndex: "supportingCharacterCount",
      //   className: "center",
      //   align: "center",
      //   render: text => <a href="javascript:;">{text}</a>
      // },
      {
        title: "Action",
        //key: "action",
        // align: "center",
        render: (text, record) => (
          <span>
            <a className="primary-font-color" href="javascript:;">
              <Link to="/project/sceen-overview">More</Link>
            </a>
          </span>
        )
      }
    ];
    return (
      <DndProvider backend={HTML5Backend}>
        <Table
          pagination={false}
          columns={columns}
          dataSource={this.state.data}
          components={this.components}
          onRow={(record, index) => ({
            index,
            moveRow: this.moveRow
          })}
          loading={!isDataFetched}
        />
      </DndProvider>
    );
  }
}

export default Script;
