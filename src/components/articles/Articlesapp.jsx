import React,{useEffect,useState} from 'react'
import { deleteArticle, fetchArticles } from '../../services/articleservice';
import Articlelist from './Articlelist';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import Insertarticle from './Insertarticle';

const Articlesapp = () => {
    const [products,setProducts]=useState([])

    useEffect(() => {
        listproduits()
        
    },[])

    const listproduits=async()=>{
        try {
            await fetchArticles()
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
                message: " supprimer l' article: " + ref,
                buttons: [
                {
                label: 'Oui',
                onClick: () => deleteArticle(productId)
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
        <Insertarticle addproduct={addproduct}/>
      <Articlelist  products={products} deleteProduct={deleteProduct} updateProduct={updateProduct}/>
    </div>
  )
}

export default Articlesapp
