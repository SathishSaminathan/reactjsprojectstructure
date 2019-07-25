import React from 'react';
import { Upload, Icon, message } from 'antd';
import PropTypes from "prop-types";

function getBase64(img, callback) {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
}

function beforeUpload(file) {
    const isJPG = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJPG) {
        message.error('You can only upload JPG and PNG file!');
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
        message.error('Image must smaller than 2MB!');
    }
    return isJPG && isLt2M;
}

class Uploadactorimage extends React.Component {
    state = {
        loading: false,
    };

    handleChange = info => {
        if (info.file.status === 'uploading') {
            this.setState({ loading: true });
            return;
        }
        if (info.file.status === 'done') {
            // Get this url from response in real world.
            getBase64(info.file.originFileObj, imageUrl => {
                this.setState({
                    imageUrl,
                    loading: false,
                })
                this.props.handleImage(imageUrl)
            });
        }
    };

    render() {

        const { imageUrl } = this.state;
        const { text } = this.props
        const uploadButton = (
            <div>
                <Icon type={this.state.loading ? 'loading' : 'plus'} />
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
                {imageUrl ? <img src={imageUrl} alt="avatar" style={{ height: '95px', width: '95px' }} /> : uploadButton}
            </Upload>
        );
    }
}

Uploadactorimage.propTypes = {
    text: PropTypes.string.isRequired
}

Uploadactorimage.defaultProps = {
    text: 'Upload Image'
}

export default Uploadactorimage;