import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import { CardActionArea } from '@mui/material'
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useEffect, useCallback } from 'react';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

const SearchBar = () => {
  const [searchType, setSearchType] = useState('');
  const [searchProducts, setSearchProducts] = useState([]);
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const query = searchParams.get('q');
  

  const handleInputChange = (e) => {
    setSearchType(e.target.value);
  };

  const fetchProducts = (() => {
    if (query !== null){
    fetch(`https://dummyjson.com/products/search?q=${query}`)
    .then(res => res.json())
    .then((data) => {
        setSearchProducts(data.products);
      })
    console.log('products');
    }
    else{
        console.log('No queries');
    }
  });

  useEffect(()=>{
    fetchProducts()
  },[])

  const searchResult = searchProducts.map((product) => (
    <div key={product.id} style={{ width: '30%', padding: '10px' }}>
    <Card sx={{ maxWidth: 350, height: '100%' }}>
        <CardContent>
        <Typography gutterBottom variant="h6" component="div">
            {product.title}
        </Typography>
        <CardActionArea>
            <img
                src={product.thumbnail}
                alt="product"
                style={{
                    height: '8rem',
                    width: '100%',
                    objectFit: 'cover',
                }}
            />
            <Typography variant='body2' component="div">
                {product.description}
            </Typography>

            <Link to={`/product/${product.id}`}>See More</Link>
        </CardActionArea>
        </CardContent>
    </Card>
</div>
    ));
  
  return (
    <>
        <Box sx={{ flexGrow: 1, float: 'right'}}>
            <Search>
                <SearchIconWrapper>
                <SearchIcon/>
                </SearchIconWrapper>
                <StyledInputBase
                placeholder="Type here"
                inputProps={{ 'aria-label': 'search' }}
                type='text'
                value={searchType}
                onChange={handleInputChange}
                />
                <Link to={`/search?q=${searchType}`}>
                    <button onClick={fetchProducts}>Search</button>
                </Link>
                <ul>
        </ul>
            </Search>
        </Box>
        <Typography variant="h3" component="div">
            {searchType}
        </Typography>

        <div style= {{display:'flex', flexWrap: 'wrap', marginTop:'30px'}}>{searchResult}</div>
    </>

  );
}

export default SearchBar;