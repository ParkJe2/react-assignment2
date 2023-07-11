import React from "react";
import { useParams } from "react-router-dom";
import { styled } from "styled-components";

export default function Product() {
  const { id } = useParams();
  return (
    <>
      <div>
        <h1>상세 페이지</h1>
        <St.ItemBox>
          <St.Item>상품{id}</St.Item>
          <div>
            <h3>가격: ~~~~</h3>
            <h3>좋아요: ~~~~</h3>
            <h3>구매옵션</h3>
            <St.Select>
              <option>옵션1</option>
              <option>옵션2</option>
              <option>옵션3</option>
            </St.Select>
          </div>
        </St.ItemBox>
      </div>
    </>
  );
}

const St = {
  ItemBox: styled.div`
    display: flex;
    gap: 44px;
    justify-content: center;
    align-items: center;
  `,
  Item: styled.div`
    width: 200px;
    height: 240px;
    background-color: #068fff;
  `,
  Select: styled.select`
    width: 100px;
  `,
};
