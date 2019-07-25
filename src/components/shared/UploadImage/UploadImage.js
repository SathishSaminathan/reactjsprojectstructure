import React from "react";
import { connect } from "react-redux";
import { Upload, Icon, message } from "antd";
import PropTypes from "prop-types";
import GlobalService from "services/GlobalService";
import { Services } from "constants/AppConstants";

function getBase64(img, callback) {
  const reader = new FileReader();
  reader.addEventListener("load", () => callback(reader.result));
  reader.readAsDataURL(img);
}

function beforeUpload(file) {
  const isJPG =
    file.type === "image/jpeg" ||
    file.type === "image/png" ||
    file.type === "image/jpg";
  if (!isJPG) {
    message.error("You can only upload JPG, PNG and JPEG file !");
  }
  const isLt2M = file.size / 1024 / 1024 / 1024 / 1024 / 1024 < 5;
  if (!isLt2M) {
    message.error("Image must smaller than 5MB!");
  }
  return isJPG && isLt2M;
}

class UploadImage extends React.Component {
  constructor(props) {
    super(props);
    this._globalService = new GlobalService();
  }

  state = {
    loading: false
  };

  handleChange = info => {
    if (info.file.status === "uploading") {
      this.setState({ loading: true });
      return;
    }
    if (info.file.status === "done") {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, imageUrl => {
        this.setState({
          imageUrl,
          loading: false
        });
      });

      if (
        info.file.originFileObj != null &&
        info.file.originFileObj != undefined
      ) {
        var imageFile = new FormData();
        imageFile.append("file", info.file.originFileObj);
        console.log("file image", imageFile);
        this._globalService
          .globalService(
            Services.GlobalVariables.GET_IMAGE_ID,
            imageFile
          )
          .then(res => {
        console.log("imageid", res.data);

            this.props.handleImage(res.data.fileDataId);
            console.log("photoid", res.data.fileDataId);
  
          });
      }
    }
  };

  render() {
    const { imageUrl } = this.state;
    const { text } = this.props;
    const uploadButton = (
      <div>
        <Icon type={this.state.loading ? "loading" : "plus"} />
        <div className="ant-upload-text">{text}</div>
      </div>
    );

    return (
      <Upload
        name="avatar"
        listType="picture-card"
        className="avatar-uploader"
        showUploadList={false}
        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
        beforeUpload={beforeUpload}
        onChange={this.handleChange}
      >
        {imageUrl ? (
          <img
            src={imageUrl}
            alt="avatar"
            style={{ height: "105px", width: "105px" }}
          />
        ) : (
          uploadButton
        )}
      </Upload>
    );
  }
}

UploadImage.propTypes = {
  text: PropTypes.string.isRequired
};

UploadImage.defaultProps = {
  text: "Upload Image"
};

const mapStateToProps = ({ user }) => {
  return {
    currentUser: user.currentUser,
    accessToken: user.accessToken
  };
};

export default connect(mapStateToProps)(UploadImage);
