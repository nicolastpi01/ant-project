import { Button, message, Upload } from 'antd';
import { InboxOutlined } from '@ant-design/icons';
import React, { useState } from 'react';
import { time } from 'console';
import { withAuth0 } from '@auth0/auth0-react';


const { Dragger } = Upload;

const Home:React.FC<any> = (args) => {

  const [fileList, setFileList] =  useState<any[]>([])
  const [uploading, setUploading] = useState<boolean>(false)
  const { isAuthenticated } = args.auth0;

  const props = {
    name: 'file',
    multiple: true,
    fileList: fileList,
    //action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    onChange(info: any) {
      console.log("ejecuta onChange ?")
      

      const { status } = info.file;
      if(status !== 'removed') {
        const newFileList = [...fileList, info.file]; 
        setFileList(newFileList)
      }
      if (status === 'uploading') {
        setUploading(true);
      }
      if (status !== 'uploading') {
        setUploading(false);
        //console.log(info.file, info.fileList);
      }
      if (status === 'done') {
        //console.log("done")
        message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
    
    
    onRemove(file: any) {
        console.log("Ejecute onRemove")
        const index = fileList.indexOf(file);
          const newFileList = fileList.slice();
          newFileList.splice(index, 1);
          setFileList(newFileList);
        
    },
  
    beforeUpload(file: any, fileList: any[]) {
      /*
      this.setState(state => ({
        fileList: [...state.fileList, file],
      }));
      return false;
    },
    fileList,
    */
    console.log("before upload")
    
    //if(fileList.indexOf(file) === -1) {
      //const newFileList = [...fileList, file]; 
      //setFileList(newFileList)
    //}
    
    
    //fileList.push(file)
    //setFileList(fileList)
    //console.log("before upload list result :",  newFileList)
    //console.log("size :",  newFileList.length)
    return false;
  },
  
  
    onDrop(e: any) {
      //console.log('Dropped files', e.dataTransfer.files);
    },
  };

  const handleUpload = async () => {
    setUploading(true);

    await new Promise(r => setTimeout(r, 4000));
    setFileList([]);
    setUploading(false);
    //message.success('upload successfully.');
    success("upload successfully.")
    /*
    const { fileList } = this.state;
    const formData = new FormData();
    fileList.forEach(file => {
      formData.append('files[]', file);
    });

    this.setState({
      uploading: true,
    });

    // You can use any AJAX library you like
    reqwest({
      url: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
      method: 'post',
      processData: false,
      data: formData,
      success: () => {
        this.setState({
          fileList: [],
          uploading: false,
        });
        message.success('upload successfully.');
      },
      error: () => {
        this.setState({
          uploading: false,
        });
        message.error('upload failed.');
      },
    });
    */
  };

  const success = (content: string) => {
    message.success({
      content: content,
      className: 'custom-class',
      style: {
        marginLeft: '20vh',
      },
    });
  };
  
  return (
  <div style={{ maxWidth: "50%",margin: "auto", marginTop:"20px"}}>
    {
      isAuthenticated &&
      <><Dragger {...props}>
          <p className="ant-upload-drag-icon">
            <InboxOutlined />
          </p>
          <p className="ant-upload-text">Click or drag file to this area to upload</p>
          <p className="ant-upload-hint">
            Support for a single or bulk upload. Strictly prohibit from uploading company data or other
            band files
          </p>
        </Dragger>
        <Button
          type="primary"
          onClick={handleUpload}
          disabled={fileList.length === 0}
          loading={uploading}
          style={{ marginTop: 16, float: "right" }}
        >
            {uploading ? 'Uploading' : 'Start Upload'}
        </Button></>
    } 
  </div>
  );
}

export default  withAuth0(Home);