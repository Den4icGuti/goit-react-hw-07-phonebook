import Form from './Form/Form';
import UserList from './UserList/UserList';
import Filter from './Filter/Filter';
import 'react-toastify/dist/ReactToastify.css';
import { useGetContactsQuery } from 'redux/api/services';

const App = () => {
  const { data: contacts, isFetching } = useGetContactsQuery();

  return (
    <div>
      <Form />
      {isFetching && <p>Loading....</p>}
      <Filter title="Contacts" />
      <UserList contacts={contacts} />
    </div>
  );
};

export default App;
