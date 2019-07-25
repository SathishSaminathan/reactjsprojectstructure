import React from "react";
import "antd/dist/antd.css";
import { Upload, Button, Icon } from "antd";
import GlobalService from "services/GlobalService";
import { Services } from "constants/AppConstants";

class Uploaddocumentfile extends React.Component {
  constructor(props) {
    super(props);
    this._globalService = new GlobalService();
  }

  state = {
    fileList: [
      // {
      //   uid: "-1",
      //   name: "xxx.png",
      //   status: "done",
      //   url: "http://www.baidu.com/xxx.png"
      // }
    ]
  };

  handleChange = info => {
    let fileList = [...info.fileList];

    // 1. Limit the number of uploaded files
    // Only to show two recent uploaded files, and old ones will be replaced by the new
    fileList = fileList.slice(-2);

    // 2. Read from response and show file link
    fileList = fileList.map(file => {
      if (file.response) {
        // Component will show file.url as link
        file.url = file.response.url;
      }
      return file;
    });

    this.setState({ fileList });
    console.log( "uploadfile list",this.state.fileList);

    if (
      info.file.originFileObj != null &&
      info.file.originFileObj != undefined
    ) {
      const token = {
        headers: {
          "Authorization": `Bearer ${this.props.accessToken}`
        }
      };

      var documentlist = new FormData();
      documentlist.append("file", info.file.originFileObj);
      console.log("file list", documentlist);
      this._globalService
        .globalService(
          Services.GlobalVariables.GETIMAGEID,
          this.props.accessToken,
          documentlist
        )
        .then(res => {

      console.log("fileid", res.data);
          this.props.handleDocument(res.data.fileDataId);
        });
    }
  };

  render() {
    const props = {
      action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
      onChange: this.handleChange,
      multiple: true
    };
    return (
      <Upload {...props} fileList={this.state.fileList}>
        <Button>
          <Icon type="upload" /> Upload Documents
        </Button>
      </Upload>
    );
  }
}

export default Uploaddocumentfile;
