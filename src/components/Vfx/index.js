import React, { Component } from "react";
import { Table, Button, Select } from "antd";

const data = [
  {
    sceneno: "12",
    discrption: "Announcement heard over speaker",
    scenelocation: "STATE YOUTH CENTRE",
    actuallocation: "Suchitra Film Society",
    mainactors: 'Naman, Ajay, Ramu, Randy'
  },
  {
    sceneno: "13",
    discrption: "Boys drinking in the toilet",
    scenelocation: "STATE YOUTH CENTRE,TOILET",
    actuallocation: "Suchitra Film Society",
    mainactors: 'Naman, Ajay, Ramu, Randy'
  },
  {
    sceneno: "14",
    discrption: "Boys enter hall, Ash joins their team",
    scenelocation: "STATE YOUTH CENTRE, STAGE",
    actuallocation: "Suchitra Film Society",
    mainactors: 'Naman, Ajay, Ramu, Randy'
  },
  {
    sceneno: "14a",
    discrption: "Quiz in progress, Naman and team win with Ash's help",
    scenelocation: "STATE YOUTH CENTRE,STAGE",
    actuallocation: "Suchitra Film Society",
    mainactors: 'Naman, Ajay, Ramu, Randy'
  },
  {
    sceneno: "11",
    discrption: "Bernie calls the boys for the quiz. Ronnie is seen for the first time",
    scenelocation: "St John's College",
    actuallocation: "ST. JAMES' COLLEGE",
    mainactors: 'Naman, Ajay, Ramu'
  },
  {
    sceneno: "19",
    discrption: "Boys are hanging out by the court, Ilash's train from Hyserabad story",
    scenelocation: "St John's College",
    actuallocation: "ST. JAMES' COLLEGE",
    mainactors: 'Naman, Ajay, Ramu'
  },
  {
    sceneno: "31",
    discrption: "Girls find photographs in their books, get thrown out of class",
    scenelocation: "St John's College",
    actuallocation: "ST. JAMES' COLLEGE",
    mainactors: 'Naman, Ajay, Ramu'
  },
  {
    sceneno: "32",
    discrption: "Ronnie's Jocks and Anita's friends pair off leaving Naman frustrated. Naman curses Ronnie",
    scenelocation: "St John's College",
    actuallocation: "ST. JAMES' COLLEGE",
    mainactors: 'Naman, Ajay, Ramu'
  },
  {
    sceneno: "26",
    discrption: "Naman and gang get off an pay the auto guy",
    scenelocation: "RONNIE’S HOUSE",
    actuallocation: "Vidyaranapura House",
    mainactors: 'Naman, Ajay, Ramu'
  },
  {
    sceneno: "27",
    discrption: "Ramu admires the Bugati",
    scenelocation: "RONNIE’S HOUSE, DRIVEWAY",
    actuallocation: "Vidyaranapura House",
    mainactors: 'Naman, Ajay, Ramu'
  },
  {
    sceneno: "28a",
    discrption: "Drink off between naman's gang and Ronnie's gang",
    scenelocation: "RONNIE’S HOUSE, POOL AREA",
    actuallocation: "Vidyaranapura House",
    mainactors: 'Naman, Ajay, Ramu'
  },
  {
    sceneno: "28b",
    discrption: "Naman and Ajay take pics of guys face",
    scenelocation: "RONNIE’S HOUSE, POOL AREA",
    actuallocation: "Vidyaranapura House",
    mainactors: 'Naman, Ajay, Ramu'
  }
];

class VFX extends Component {
  state = { visible: false };
  showModal = () => {
    this.setState({
      visible: true
    });
  };
  handleOk = e => {
    console.log(e);
    this.setState({
      visible: false
    });
  };
  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false
    });
  };
  componentDidMount() {
    console.log("componentDidMount VFX");
  }

  render() {
    function handleChange(value) {
      console.log(`selected ${value}`);
    }
    const { Option } = Select;
    const columns = [
      {
        title: "Schedule",
        dataIndex: "schedule",
        align: "center"
      },
      {
        title: "Scene No",
        dataIndex: "sceneno",
        align: "center"
      },
      {
        title: "INT/EXT",
        dataIndex: "intext",
        align: "center",
        render: (text, record) => (
          <span>
            <Select
              defaultValue="Int/Ext"
              style={{ width: "100px" }}
              onChange={{ handleChange }}
            >
              <Option value="int">INT</Option>
              <Option value="ext">EXT</Option>
            </Select>
          </span>
        )
      },
      {
        title: "DAY/NIGHT",
        dataIndex: "day",
        align: "center",
        render: (text, record) => (
          <span>
            <Select
              defaultValue="Day/Night"
              style={{ width: "120px" }}
              onChange={{ handleChange }}
            >
              <Option value="day">Day</Option>
              <Option value="night">Night</Option>
            </Select>
          </span>
        )
      },
      {
        title: "Scene Discription",
        dataIndex: "discrption",
        align: "center",
        width: '200px'
      },
      {
        title: "Scene Location",
        dataIndex: "scenelocation",
        align: "center"
      },
      {
        title: "Actual Location",
        dataIndex: "actuallocation",
        align: "center"
      },
      {
        title: "Main Actors",
        dataIndex: "mainactors",
        align: "center"
      },
      {
        dataIndex: "action",
        align: "center",
        render: (text, record) => (
          <span>
            <Button type="link" onClick={this.showModal}>
              More
            </Button>
          </span>
        )
      }
    ];
    return (
      <div>
        <Table columns={columns} dataSource={data} pagination={false} />
      </div>
    );
  }
}

export default VFX;
