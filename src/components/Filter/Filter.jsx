import { FilterContainer } from '../Filter/Filter.styled';
import { Input } from '../Phonebook/Phonebook.styled';
const Filter = () => {
  return (
    <FilterContainer>
      <Input type="text" placeholder="Filter by name..." />
    </FilterContainer>
  );
};
export default Filter;
