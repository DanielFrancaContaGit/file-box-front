import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Row } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';
import axios from 'axios';
import { Root, ContainerBox, Box, style } from './styles';
import UploadBox from '../UploadBox/upload';
import baseUrl from '../../global';

const Container: React.FC = () => {
  const [fileList, setFileList] = useState([]);
  const [uploadFileList, setUploadFilelist] = useState([]);
  const [reload, setReload] = useState(false);

  const getFiles = async () => {
    const files: Array<string> = await (await axios.get(`${baseUrl}/files`))
      .data;
    const index = files.indexOf('index.ts');

    files.splice(index, 1);
    setFileList(files);
  };

  const treatFilename = (fileName: String) => {
    const simplifiedName = fileName.split('-');
    return simplifiedName[1];
  };

  const sedFile = () => {
    const url = `${baseUrl}/files`;
    const formData = new FormData();

    if (uploadFileList[0]) {
      uploadFileList.map((file, index) => {
        return formData.append(`${index}`, file.originFileObj);
      });
      setReload(!reload);
      return axios.post(url, formData);
    }
    setReload(!reload);
    return false;
  };

  useEffect(() => {
    getFiles();
  }, [reload]);

  return (
    <Root>
      <ContainerBox>
        <UploadBox setFileList={setUploadFilelist} />
        <Button
          style={{ marginTop: '10px' }}
          type='primary'
          block
          onClick={() => {
            sedFile();
          }}
        >
          Enviar
        </Button>
      </ContainerBox>
      <Box>
        <Card title='Arquivos armazenados'>
          <Col>
            {fileList.map((fileName) => (
              <Card.Grid style={style} key={fileName}>
                <Row>
                  <Col span={8}>
                    <h3>{treatFilename(fileName)}</h3>
                  </Col>
                  <Col span={8} offset={8}>
                    <a href={`${baseUrl}/file-download/${fileName}`}>
                      <Button
                        type='primary'
                        icon={<DownloadOutlined />}
                        size='large'
                      />
                    </a>
                  </Col>
                </Row>
              </Card.Grid>
            ))}
          </Col>
        </Card>
      </Box>
    </Root>
  );
};

export default Container;
