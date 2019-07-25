import React from "react";
import "antd/dist/antd.css";
import { Upload, Icon, Modal } from "antd";
import GlobalService from "services/GlobalService";
import { Services } from "constants/AppConstants";

function getBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });
}

class MultipleSelectImage extends React.Component {
  state = {
    previewVisible: false,
    previewImage: "",
    fileList: []
  };

  handleCancel = () => this.setState({ previewVisible: false });

  handlePreview = async file => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }

    this.setState({
      previewImage: file.url || file.preview,
      previewVisible: true
    });
  };

  handleChange = fileList => {
    if (
        fileList.file.originFileObj != null &&
        fileList.file.originFileObj != undefined
  ) {
    const token = {
      headers: {
        "Authorization": `Bearer ${this.props.accessToken}`
      }
    };

    var imageFile = new FormData();
    imageFile.append("file",        fileList.file.originFileObj);
    console.log("file", imageFile);
    this._globalService
      .globalService(
        Services.GlobalVariables.GETIMAGEID,
        this.props.accessToken,
        imageFile
      )
      .then(res => {
        console.log("imageid", res.data);
        this.props.handleImage(res.data.fileDataId);
      });
  }
}


  render() {
    const { previewVisible, previewImage, fileList } = this.state;
    const props = {
      action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
      onChange: this.handleChange,
      multiple: true
    };
    const uploadButton = (
      <div>
        <Icon type="plus" />
        <div className="ant-upload-text">Upload</div>
      </div>
    );
    return (
      <div className="clearfix">
        <Upload
          {...props}
          action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
          listType="picture-card"
          fileList={fileList}
          onPreview={this.handlePreview}
          onChange={this.handleChange}
        >
          {fileList.length >= 20 ? null : uploadButton}
        </Upload>
        <Modal
          visible={previewVisible}
          footer={null}
          onCancel={this.handleCancel}
        >
          <img alt="example" style={{ width: "100%" }} src={previewImage} />
        </Modal>
      </div>
    );
  }
}

export default MultipleSelectImage;