import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/filter/filterSlice';
import { getFilter } from 'redux/filter/filterSelectors';
import { FilterInput, FilterLabel } from './Filter.styles';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  const onFilterInputChange = ({ target }) => {
    dispatch(setFilter(target.value));
  };

  return (
    <FilterLabel htmlFor="idFilter">
      <FilterInput
        autoComplete="off"
        id="idFilter"
        name="filter"
        value={filter}
        onChange={onFilterInputChange}
        placeholder="Find contacts by name"
      />
    </FilterLabel>
  );
};

export default Filter;
