import React from 'react'
import { useMemo } from 'react';
import {
  MaterialReactTable,
  useMaterialReactTable,
} from 'material-react-table';
import { Box } from '@mui/material';
import Button from 'react-bootstrap/Button';
import Viewscategorie from './Viewscategorie';
import Editscategorie from './Editscategorie'


const Scategorielist = ({products, deleteProduct, updateProduct}) => {
  const columns = useMemo(
    () => [
      {
        accessorKey: 'imageUrl', // This should point to a key that holds the image URL
        header: 'Image',
        Cell: ({ cell }) => (
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
            }}
          >
            <img
              alt=""
              height={100}
              src={cell.row.original.imagescat || cell.row.original.imagescategorie}
              loading="lazy"
              style={{ borderRadius: '20%' }}
            />
          </Box>
        ),
      },
      {
        accessorKey: 'nomscategorie',
        header: 'Nom',
        size: 150,
      },
      {
        accessorKey: 'categorieID.nomcategorie',
        header: 'Categorie',
        size: 100,
      },
      {
        accessorKey: '_id',
        header: 'actions',
        size: 100,
        Cell: ({ cell, row }) => (
        <div >
          <Viewscategorie art={cell.row.original}/>
        <Editscategorie   art={cell.row.original} updateProduct={updateProduct}/>
        <Button
        onClick={(e) => {
            deleteProduct(cell.row.original._id,cell.row.original.reference, e);
        
        }}
        variant="danger"
        size="md"
        className="text-danger btn-link delete"
        >
        <i className="fa fa-trash" />
        </Button>
        </div>
        ),
        },
    ],
    [products]
  );
  

      const table = useMaterialReactTable({
        columns,
        data : products, //data must be memoized or stable (useState, useMemo, defined outside of this component, etc.)
      });
  return (
    <div>
      <MaterialReactTable table={table} />;
    </div>
  )
}

export default Scategorielist
