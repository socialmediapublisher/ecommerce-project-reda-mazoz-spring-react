/* import { Typography } from '@material-ui/core'; */
import { Typography, Button, Form, message, Input, Icon } from 'antd';
import React, {useState, useEffect} from 'react';
import CategoriesService from '../components/CategoriesService/CategoriesService';
import FileUpload from '../components/FileUpload/FileUpload';
import Navbar from '../components/Navbar/Navbar';
import Axios from 'axios';
import { useHistory } from 'react-router-dom';
/* import Categories from '../components/Sidebar/Sidebar'; */

const {Title} = Typography;
const {TextArea} = Input;


const UploadProduct = () => {
    const [title,setTitle] = useState("");
    const [description,setDescription] = useState("");
    const [price,setPrice] = useState(0);
    const [categoryId,setCategoryId] = useState(0);
    const [categories,setCategories] = useState([]);
    const [imageFile,setImageFile] = useState("");
    const history = useHistory();

    useEffect(() => {
        CategoriesService.getCategories().then((response) => {
            console.log(response.data);
            let temp = [];
            response.data.map(item => (
                temp.push(
                {
                    key: item.id,
                    value: item.name,
                })
            ))

            setCategories(temp);
       });
    }, []);
    
    const onTitleChange = (event) => {
        setTitle(event.currentTarget.value);
    }
    const onDescriptionChange = (event) => {
        setDescription(event.currentTarget.value);
    }
    const onPriceChange = (event) => {
        setPrice(event.currentTarget.value);
    }
    const onCategoryChange = (event) => {
        setCategoryId(event.currentTarget.key);
    }

    const updateImageInfo = (file) => { setImageFile(file);}

    const onSubmitProduct = (event) =>
    {
        event.preventDefault();
        let formularData = new FormData();
    const config = {
        header: {"content-type": "multipart/form-data"}
    }
    formularData.append("image", imageFile);
    formularData.append("name", title);
    formularData.append("description", description);
    formularData.append("price", price);
    formularData.append("categoryId", categoryId);

        Axios.post("http://localhost:8080/api/product/upload", formularData, config).then(res => {
            console.log("product upload request sent");
            history.push("/");
    })
    }
    


  return (
    <>
    <Navbar style={Navbar ? {transform: "translateX(100px)",} : {transform: "translateX(0)",}} />
    <div style= {{ maxWidth: "700px", margin: "2rem auto"}}>
        <div style={{textAlign: "center", marginBottom: "2rem"}}>
        <br /><br /><br />
        <Title level={2}>Upload Product</Title>
        </div>
        <FileUpload name={title} description={description} price={price} categoryId={categoryId} updateImageInfoParent={updateImageInfo}/>
        <Form onSubmit={onSubmitProduct} >
            <br />
            <br />
            <label>Title</label>
            <Input
                
                onChange={onTitleChange}
                value={title}
             />
            <br />
            <br />
            <label>Description</label>
            <TextArea
                
                onChange={onDescriptionChange}
                value={description}>
             </TextArea>
            <br />
            <br />
            <label>Price($)</label>
            <Input
                type="number"
                onChange={onPriceChange}
                value={price}
             />
            <br />
            <br />
             <select onChange={onCategoryChange}>
                 {categories.map(item => (
                    <option key={item.key}>
                    {item.value}
                </option>))}
             </select>
            <br />
            <br />
            <Button
                onClick={onSubmitProduct}>
                    Submit
            </Button>
        </Form>
    </div>
    </>
  )
}

export default UploadProduct