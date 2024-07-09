import React from 'react'
import { useMemo } from 'react';
import {
  MaterialReactTable,
  useMaterialReactTable,
} from 'material-react-table';
import { Box } from '@mui/material';
import Button from 'react-bootstrap/Button';
import Editarticle from './Editarticle';
import Viewarticle from './Viewarticle';

const Articlelist = ({products, deleteProduct, updateProduct}) => {



    const columns = useMemo(
        () => [
            {
                accessorKey: 'imageart', //access nested data with dot notation
                header: 'Image',
                Cell: ({ cell}) => (
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
                src={cell.getValue()}
                loading="lazy"
                style={{ borderRadius: '20%' }}
                />
                
                </Box>),
                },
          {
            accessorKey: 'reference', //access nested data with dot notation
            header: 'reference',
            size: 150,
          },
          {
            accessorKey: 'designation',
            header: 'designation',
            size: 150,
          },
          {
            accessorKey: 'marque', //normal accessorKey
            header: 'marque',
            size: 200,
          },
          {
            accessorKey: 'prix',
            header: 'prix',
            size: 150,
          },
          {
            accessorKey: 'qtestock',
            header: 'quantité en stock',
            size: 150,
          },
          {
            accessorKey: 'scategorieID.nomscategorie',
            header: 'Sous categ',
            size: 100,
            },
          {
            accessorKey: '_id',
            header: 'actions',
            size: 100,
            Cell: ({ cell, row }) => (
            <div >
              <Viewarticle art={cell.row.original}/>
            <Editarticle   art={cell.row.original} updateProduct={updateProduct}/>
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
        [products],
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

export default Articlelist
