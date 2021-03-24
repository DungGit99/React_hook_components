import React, { useState, useEffect, useMemo } from 'react';
import PaginationComponent from './Pagination';
import TableHeader from './HeaderTable';
import Search from './Search';

const headers = [
  { name: "No#", field: "id", sortable: false },
  { name: "Name", field: "name", sortable: true },
  { name: "Email", field: "email", sortable: true },
  { name: "Comment", field: "body", sortable: false }
];

const DataTable = () => {

  const [comments, setComments] = useState([]);
  const [totalItems, setTotalItems] = useState(0); // tổng item
  const [currentPage, setCurrentPage] = useState(1); // page hiện tại 
  const ITEMS_PER_PAGE = 50 // 50 item trên 1 trang 

  useEffect(() => {
    const getData = () => {
      fetch("https://jsonplaceholder.typicode.com/comments")
        .then(response => response.json())
        .then(json => {
          setComments(json);
        });
    };
    getData();
  }, [])

  const commentsData = useMemo(() => {
    let computedComments = comments
    setTotalItems(computedComments.length);
    return computedComments.slice(
      (currentPage - 1) * ITEMS_PER_PAGE,
      (currentPage - 1) * ITEMS_PER_PAGE + ITEMS_PER_PAGE
    );
  }, [comments, currentPage])

  return (
    <div className="row w-100">
      <div className="col mb-3 col-12 text-center">
        <div className="row">
          <div className="col-md-6">
            <PaginationComponent
              totalItems={totalItems}
              itemsPerPage={ITEMS_PER_PAGE}
              currentPage={currentPage}
              onPageChange={page => setCurrentPage(page)}
            />
          </div>
          <div className="col-md-6 d-flex flex-row-reverse">
            <Search
            // onSearch={value => {
            //   setSearch(value);
            //   setCurrentPage(1);
            // }}
            />
          </div>
        </div>

        <table className="table table-striped">
          <TableHeader
            headers={headers}
          // onSorting={(field, order) =>
          //   setSorting({ field, order })
          // }
          />
          <tbody>
            {commentsData.map(comment => (
              <tr>
                <th scope="row" key={comment.id}>
                  {comment.id}
                </th>
                <td>{comment.name}</td>
                <td>{comment.email}</td>
                <td>{comment.body}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default DataTable;