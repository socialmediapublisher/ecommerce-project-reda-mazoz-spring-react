import { PlusOutlined } from "@ant-design/icons"
import Axios from 'axios'
import { React, useState} from 'react'
import Dropzone from 'react-dropzone'

const FileUpload = (props) => {
    const [img,setImg] = useState();
    const deleteImage = () =>
    {
        setImg("");
        props.updateImageInfoParent(0);
    }
    const onDropFile = (files) =>
{

    var reader = new FileReader();
    reader.onload = function(event) {
        var base64String = event.target.result;
        setImg(<img src={base64String} style={{minWidth:"300px", width:"300px", height: "240px"}} alt="Product" />);
    };
    reader.readAsDataURL(files[0]);

    props.updateImageInfoParent(files[0]);
}
  return (
    <div style = {{ display:"flex", justifyContent:"space-between", }}>
        <Dropzone
        onDrop={onDropFile}
        multiple
        >
            {({getRootProps, getInputProps}) => (
            <div style={{ width: "300px", height:"240px", border: "1px solid lightgray", display:"flex",  alignItems: "center", justifyContent:"center",}}
                {...getRootProps()}>
                <input {...getInputProps()} />
                <PlusOutlined style = {{ fontSize: "3rem",}} />
            </div>
            )}
        </Dropzone>

        <div style={{ display:"flex", width:"350px", height:"240px", overflowX: "scroll"}}>

                <div onClick={deleteImage}>
                    {img}
                </div>

        </div>

  </div>
  )
}

export default FileUpload