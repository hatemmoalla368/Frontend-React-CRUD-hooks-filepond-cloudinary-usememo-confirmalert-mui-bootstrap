import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Modal from 'react-bootstrap/Modal';
import { editSCategorie } from '../../services/scategorieservice';
import {fetchCategories} from '../../services/categorieservice'
import axios from "axios"
import { FilePond,registerPlugin } from 'react-filepond'
import 'filepond/dist/filepond.min.css';

import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation'

import FilePondPluginImagePreview from 'filepond-plugin-image-preview'

import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css'

registerPlugin(FilePondPluginImageExifOrientation,FilePondPluginImagePreview)

const Editscategorie = ({art, updateProduct}) => {
  const [scategorie, setScategorie] = useState({});
 
  const [files, setFiles] = useState([]);
  const [categories, setCategories] = useState([]);
  const [validated, setValidated] = useState(false);
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
    handleReset();
  };
  
  const handleShow = () => {
    setScategorie(art)
    setFiles([{
      source: art.imagescat || art.imagescategorie,
      options: { type: 'local' }
    }]);
    setShow(true);
   
     
  };
  
  useEffect(() => {
    getcategories();
    setScategorie(art)
    
  }, []);

  const getcategories = async () => {
    await fetchCategories().then(res => {
      setCategories(res.data);
    });
  };

  const handlechange = (e) => {
    setScategorie({ ...scategorie, [e.target.name]: e.target.value });
  };
  
  

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (form.checkValidity() === true) {
      editSCategorie(scategorie)
        .then(res => {
          updateProduct(scategorie);
          handleReset();
          setValidated(false);
          handleClose()
        })
        .catch(error => {
          console.log(error);
          alert("Erreur ! Insertion non effectuée");
        });
    }
    setValidated(true);
  };

  const handleReset = () => {
    setScategorie({});
    setFiles([]);
    setValidated(false);
  };

    const serverOptions = () => { console.log('server pond');
      return {
      load: (source, load, error, progress, abort, headers) => {
      var myRequest = new Request(source);
      fetch(myRequest).then(function(response) {
      response.blob().then(function(myBlob) {
      load(myBlob);
      });
      });
      },
      process: (fieldName, file, metadata, load, error, progress, abort) => {
      console.log(file)
      const data = new FormData();
      data.append('file', file);
data.append('upload_preset', 'espssoir2023');
data.append('cloud_name', 'dlaeaf1g1');
data.append('public_id', file.name);
axios.post('https://api.cloudinary.com/v1_1/dlaeaf1g1/image/upload', data)
.then((response) => response.data)
.then((data) => {
console.log(data);
setScategorie({...scategorie,imagescat:data.url}) ;
load(data);
})
.catch((error) => {
console.error('Error uploading file:', error);
error('Upload failed');
abort();
});
},
};
};
console.log(scategorie)
  
  return (
    <div>
    
    <Button
    onClick={handleShow}
    variant="danger"
            size="md"
            className="text-danger btn-link warning"
    >
    <i className="fa-solid fa-pen-to-square"></i>
    
    </Button>

    <Modal show={show} onHide={handleClose}>
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
    <Modal.Header closeButton>
    <h2>modifier Product</h2>
    </Modal.Header>
    <Modal.Body>
    <div className="container w-100 d-flex justify-content-center">
    <div>
    <div className='form mt-3'>
    <Row className="mb-2">
<Form.Group as={Col} md="12" >
<Form.Label >Nom *</Form.Label>
<Form.Control
required
type="text"
placeholder="Nom"
name='nomscategorie'
value={scategorie.nomscategorie}
onChange={(e)=>handlechange(e)}
/>
<Form.Control.Feedback type="invalid">
Saisir le nom du scategorie
</Form.Control.Feedback>
</Form.Group>

</Row>

<Row className="mb-3">
<Form.Group as={Col} md="12">
<Form.Label>Catégorie</Form.Label>
<Form.Control
as="select"
type="select"
value={scategorie.categorieID?.["_id"]}
name='categorieID'
onChange={(e)=>handlechange(e)}
>
<option></option>
{categories.map((cat)=><option key={cat._id}
value={cat._id}>{cat.nomcategorie}</option>
)}
</Form.Control>
</Form.Group>
</Row>
<div style={{ width: "80%", margin: "auto", padding: "1%" }}>
<FilePond

files={files}
acceptedFileTypes="image/*"
onupdatefiles={setFiles}
allowMultiple={true}
server={serverOptions()}
name="file"

/>
</div>
</div>
</div>
</div>
</Modal.Body>
<Modal.Footer>
<Button type="submit">Enregistrer</Button>
<Button type="button" className="btn btn-warning"
onClick={()=>handleReset()}>Annuler</Button>
</Modal.Footer>
</Form>
</Modal>
</div>
  )
}

export default Editscategorie
