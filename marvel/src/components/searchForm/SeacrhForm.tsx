import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import './Searchform.modules.scss';

const SearchForm = () => {
  return (
    <div className="search-form">
      <TextField fullWidth id="fullWidth" placeholder="Serach" />
      <Button variant="contained">Search</Button>
    </div>
  );
};

export default SearchForm;
