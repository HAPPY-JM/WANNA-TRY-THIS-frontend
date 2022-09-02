import React, { useState, useCallback, useEffect, useRef } from 'react';
// import { useInView } from 'react-intersection-observer';
import axios from 'axios';
import styled from 'styled-components';

const Container = styled.div`
  display: grid;
  grid-template-columns: (2 1fr);
  width: 100%;
  height: 100vh;
`;
const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: #707070;
  font-size: 1.5rem;
  margin-top: 4rem;
  border: solid 5px #e3a5e2;
  background-color: #d99aaabc;
`;

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
    <Container>
      <h1>음식목록</h1>
      {lists.map((list, idx) => (
        <Card className="List" key={idx}>
          <img src={list.img} />
          <p>이름: {list.name}</p>
          <p>코멘트:{list.comment}</p>
          <p>지역:{list.nation}</p>
        </Card>
      ))}
      <div>loading</div>
      <button onClick={loadMore} ref={pageEnd}>
        {' '}
        {/* <img src='../Loading.gif' /> */}
      </button>
    </Container>
  );
};

export default ChoicesScrool;
