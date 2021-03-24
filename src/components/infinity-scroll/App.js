import React, { useState, useEffect } from 'react'
import User from './User';
import { Content, Loading } from './App.styles';
import { getUsers } from './API';

function App() {
  const [page, setPage] = useState(1);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const loadUsers = async () => {
    setLoading(true);
    const newUsers = await getUsers(page);
    setUsers(prev => [...prev, ...newUsers]);
    setLoading(false);
  };
  const handleScroll = event => {
    // scrollHeight : tổng chiều cao có thể scroll 
    // scrollTop : vị trí scroll hiện tại
    // clientHieght : chiều cao container của element
    const { scrollTop, scrollHeight, clientHeight } = event.currentTarget;
    if (scrollHeight - scrollTop === clientHeight) {
      setPage(prev => prev + 1)
    }
  }
  useEffect(() => {
    loadUsers();
  }, [page])

  return (
    <div>
      <Content onScroll={handleScroll}>
        {users && users.map(user => (
          <User key={user.cell} user={user} />
        ))}
      </Content>
      {loading && <Loading>Loading ...</Loading>}
    </div>
  )
}

export default App;