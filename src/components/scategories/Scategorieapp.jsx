import React,{useEffect,useState} from 'react'
import { deleteSCategorie, fetchSCategories } from '../../services/scategorieservice';

import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import Scategorielist from './Scategorielist';
import Insertscategorie from './Insertscategorie';


const Scategorieapp = () => {
    const [products,setProducts]=useState([])

    useEffect(() => {
        listproduits()
        
    },[])

    const listproduits=async()=>{
        try {
            await fetchSCategories()
        .then(res=>setProducts(res.data))
        } catch (error) {
            console.log(error)
        }        
        }

        const addproduct=(newproduit)=>{
            setProducts([newproduit,...products])
            }
            const deleteProduct = (productId,ref) => {
                confirmAlert({
                title: "Confirm delete...",
                message: " supprimer le scategorie: " + ref,
                buttons: [
                {
                label: 'Oui',
                onClick: () => deleteSCategorie(productId)
                .then(res=>
                setProducts(products.filter((product) => product._id !== productId)))
                //.then(console.log("suppression effectuée avec success"))
                .catch(error=>console.log(error))
                },
                {
                label: 'Non',
                }
                ]
                });
                }
            const updateProduct = (prmod) => {
            setProducts(
            products.map((product) =>
            product._id === prmod._id ? prmod : product
            )
            );
            };
  return (
    <div>
        <Insertscategorie addproduct={addproduct}/>
      <Scategorielist products={products} deleteProduct={deleteProduct} updateProduct={updateProduct}/>
    </div>
  )
}

export default Scategorieapp
