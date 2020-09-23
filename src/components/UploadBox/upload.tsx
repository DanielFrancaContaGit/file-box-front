import React from 'react';
import { Upload, message } from 'antd';
import { InboxOutlined } from '@ant-design/icons';

interface UploadBoxProps {
  setFileList: Function;
}

const UploadBox: React.FC<UploadBoxProps> = (props) => {
  const { Dragger } = Upload;

  const draggerProps = {
    name: 'file',
    multiple: true,
    onChange(info) {
      const { status } = info.file;
      if (status !== 'uploading') {
        props.setFileList(info.fileList);
      }
      if (status === 'done') {
        message.success(`${info.file.name} file uploaded successfully.`);
        props.setFileList(info.fileList);
      } else if (status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };

  return (
    <Dragger {...draggerProps}>
      <p className='ant-upload-drag-icon'>
        <InboxOutlined />
      </p>
      <p className='ant-upload-text'>
        Clique ou arraste o arquivo para esta area para pode fazer o upload
      </p>
      <p className='ant-upload-hint'>Suporte para upload único ou em massa.</p>
    </Dragger>
  );
};

export default UploadBox;
