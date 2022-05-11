import Form from './Form/Form';
import UserList from './UserList/UserList';
import Filter from './Filter/Filter';
import 'react-toastify/dist/ReactToastify.css';
import { useFetchContactsQuery } from 'redux/api/services';

const App = () => {
  const { data: contacts = [], isFetching, isError } = useFetchContactsQuery();

  return (
    <div>
      <Form />
      <Filter />
      {isFetching && <p className="loading">Loading....</p>}
      {!isError && <UserList contacts={contacts} />}
    </div>
  );
};

export default App;
