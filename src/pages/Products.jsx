// import React, { useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { styled } from "styled-components";

export default function Products() {
  const [searchParams, setSearchParams] = useSearchParams();
  console.log(searchParams.get("sort"));

  // useEffect(() => {
  //   setState(순서가 바뀐 데이터)
  // }, [searchParams])
  return (
    <>
      <St.List>
        <h2>🔥 여름 추천템 🔥</h2>
        <button
          onClick={() => {
            setSearchParams({
              sort: "price",
            });
          }}
        >
          가격순으로 정렬
        </button>
        <St.ListBox>
          <Link to="/products/1">
            <St.ListItem>상품1</St.ListItem>
          </Link>
          <Link to="/products/2">
            <St.ListItem>상품2</St.ListItem>
          </Link>
          <Link to="/products/3">
            <St.ListItem>상품3</St.ListItem>
          </Link>
        </St.ListBox>
      </St.List>
    </>
  );
}

const St = {
  List: styled.section`
    margin-top: 56px;
    text-align: center;
  `,
  ListBox: styled.div`
    display: flex;
    justify-content: center;
    gap: 24px;
  `,
  ListItem: styled.div`
    width: 200px;
    height: 240px;
    background-color: #068fff;
  `,
};
