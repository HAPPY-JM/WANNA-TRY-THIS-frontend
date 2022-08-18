import React, { useState, useCallback, useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import axios from 'axios';

const ChoicesScrool = () => {
  const [lists, setList] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  // console.log(list)
  const axiosPhothos = async (page) => {
    const res = await axios.get(
      `http://localhost:5000/api/food/perPage?page=${page}`,
    );

    setList((p) => [...p, ...res.data.productsPerPage]);
    setLoading(true);
  };
  const loadMore = () => {
    setPage((prepage) => prepage + 1);
  };

  const pageEnd = useRef();
  useEffect(() => {
    if (loading) {
      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            loadMore();
          }
        },
        { threshold: 1 },
      );
      observer.observe(pageEnd.current);
    }
  }, [loading]);
  useEffect(() => {
    axiosPhothos(page);
  }, [page]);
  return (
    <div>
      {lists.map((list, idx) => (
        <div className="List" key={idx}>
          <img src={list.img} />
          <p>이름: {list.name}</p>
          <p>코멘트:{list.comment}</p>
          <p>지역:{list.nation}</p>
        </div>
      ))}
      <div>loading</div>
      <button onClick={loadMore} ref={pageEnd}>
        {' '}
        {/* <img src='../Loading.gif' /> */}
      </button>
    </div>
  );
};

export default ChoicesScrool;
