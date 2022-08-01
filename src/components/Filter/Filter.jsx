import { FilterContainer } from '../Filter/Filter.styled';
import { Input } from '../Phonebook/Phonebook.styled';

const Filter = ({ filter, handleChange }) => {
  return (
    <FilterContainer>
      <Input
        type="text"
        value={filter}
        placeholder="Filter by name..."
        onChange={handleChange}
      />
    </FilterContainer>
  );
};

export default Filter;
