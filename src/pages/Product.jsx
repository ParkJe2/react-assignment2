import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { styled } from "styled-components";

export default function Product({ items }) {
  const { id } = useParams();
  const item = items.find((item) => item.id === id);
  const [selectedOption, setSelectedOption] = useState("");

  const optionChangeHandler = (option) => {
    setSelectedOption(option);
  };

  return (
    <>
      <div>
        <h1>상세 페이지</h1>
        <St.ItemBox>
          <St.Item>{item && item.name}</St.Item>
          <div>
            <h3>가격: {item && item.price}원</h3>
            <h3>좋아요: {item && item.likes}개</h3>
            <h3>구매옵션</h3>
            <St.Select
              value={selectedOption}
              onChange={(e) => {
                optionChangeHandler(e.target.value);
              }}
            >
              <option value="">구매옵션 선택</option>
              {item && item.options.map((option) => <option key={option}>{option}</option>)}
            </St.Select>
            {selectedOption && <p>구매 옵션 : {selectedOption}</p>}
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
    padding: 10px;
    color: white;
    background-color: #068fff;
  `,
  Select: styled.select`
    width: 100px;
  `,
};
