import { useSearchParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/filter/filterSlice';
import { getFilter } from 'redux/filter/filterSelectors';
import { FilterInput, FilterLabel, SearchIcon, Box } from './Filter.styles';
// import { isUserLogin } from 'redux/auth/authSlelector';
// import { CiSearch } from 'react-icons/ci';

const Filter = () => {
  const [, setSearchParams] = useSearchParams();
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);
  // const isLogin = useSelector(isUserLogin);
  const navigate = useNavigate();
  // const searchQuery = searchParams.get('query');

  const onFilterInputChange = ({ target }) => {
    setSearchParams({ query: target.value });
    dispatch(setFilter(target.value));
  };

  return (
    <FilterLabel htmlFor="idFilter">
      <Box>
        <FilterInput
          // disabled={isLogin ? false : true}
          autoComplete="off"
          id="idFilter"
          name="filter"
          value={filter}
          onFocus={() => navigate('/contacts')}
          onChange={onFilterInputChange}
          placeholder="Find contacts by name"
        />
        <SearchIcon size={22} />
      </Box>
    </FilterLabel>
  );
};

export default Filter;
