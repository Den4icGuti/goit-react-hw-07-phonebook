// import { useState } from "react";
import Form from './Form/Form';
import UserList from './UserList/UserList';
import Filter from './Filter/Filter';
import 'react-toastify/dist/ReactToastify.css';
import { useGetContactsQuery } from 'redux/api/services';

const App = () => {
  const { data, isFetching } = useGetContactsQuery();

  return (
    <div>
      {isFetching && <>Loading...</>}
      <Form />
      <Filter title="Contacts" />
      <UserList contacts={data} />
    </div>
  );
};

export default App;
