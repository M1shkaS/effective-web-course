import { FC } from 'react';

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import './search-form.css';

const SearchForm: FC = () => {
  return (
    <div className="search-form">
      <TextField fullWidth id="fullWidth" placeholder="Serach" />
      <Button variant="contained" sx={{ width: '200px', mr: '25px' }}>
        Search
      </Button>
    </div>
  );
};

export default SearchForm;
