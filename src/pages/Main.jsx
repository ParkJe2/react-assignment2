import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { styled } from "styled-components";

export default function Main() {
  const navigate = useNavigate();
  return (
    <>
      {/* main */}
      <main>
        {/* 케러셀 */}
        <St.Carousel>케러셀</St.Carousel>
        {/* 여름 추천템 */}
        <St.List>
          <h2
            onClick={() => {
              alert("진짜 이동할꺼야?");
              navigate("/products");
            }}
          >
            🔥 여름 추천템 🔥
          </h2>
          <Link to="/products">더보기</Link>
          <St.ListBox>
            <St.FirstListItem>상품1</St.FirstListItem>
            <St.FirstListItem>상품2</St.FirstListItem>
            <St.FirstListItem>상품3</St.FirstListItem>
          </St.ListBox>
        </St.List>
        {/* 추가적인 데이터 */}
        <St.List>
          <h2>🔥 세일 상품 🔥</h2>
          <St.ListBox>
            <St.SecondListItem>상품1</St.SecondListItem>
            <St.SecondListItem>상품2</St.SecondListItem>
            <St.SecondListItem>상품3</St.SecondListItem>
          </St.ListBox>
        </St.List>
      </main>
    </>
  );
}

const St = {
  Carousel: styled.section`
    background-color: #4e4feb;
    color: white;
    height: 300px;
    line-height: 300px;
    text-align: center;
    font-size: 24px;
  `,
  List: styled.section`
    margin-top: 56px;
    text-align: center;
  `,
  ListBox: styled.div`
    display: flex;
    justify-content: center;
    gap: 24px;
  `,
  FirstListItem: styled.div`
    width: 200px;
    height: 240px;
    background-color: #068fff;
  `,
  SecondListItem: styled.div`
    width: 200px;
    height: 240px;
    background-color: #eeeeee;
  `,
};
