// import { useState } from "react";
import Form from './Form/Form';
import UserList from './UserList/UserList';
import Filter from './Filter/Filter';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  // const { data, isLoading } = useGetContactsQuery();

  // if (isLoading) {
  //   return <h2>Loading.....</h2>;
  // }
  return (
    <div>
      {/* <ul>
        {data.map(item => (
          <li key={item.id}>
            <>{item.name}</>
          </li>
        ))}
      </ul> */}

      <Form />
      <Filter title="Contacts" />
      <UserList
      // item={search}
      />
    </div>
  );
};

export default App;
