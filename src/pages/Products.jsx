import { Link, useSearchParams } from "react-router-dom";
import { styled } from "styled-components";

export default function Products({ items, setItems }) {
  // useSearchParams 훅을 사용하여 현재 URL의 쿼리 매개변수를 관리
  const [searchParams, setSearchParams] = useSearchParams();

  // 가격을 숫자로 변환하고, 상품 리스트를 가격순으로 정렬하는 함수
  // "가격순으로 정렬" 버튼 클릭 시 함수가 실행되어 상품 리스트가 가격순으로 정렬되고 URL의 쿼리 매개변수가 업데이트됨
  const sortedItemsByPrice = () => {
    const sortedItems = [...items].sort((a, b) => {
      const priceA = Number(a.price.replace(",", ""));
      const priceB = Number(b.price.replace(",", ""));
      return priceA - priceB;
    });
    setSearchParams({
      sort: "price",
    });
    setItems(sortedItems);
  };
  return (
    <>
      <St.List>
        <h2>🔥 여름 추천템 🔥</h2>
        <button onClick={sortedItemsByPrice}>가격순으로 정렬</button>
        <St.ListBox>
          {items.map((item) => (
            <Link to={`/products/${item.id}`} key={item.id}>
              <St.ListItem>
                <St.ItemContents>이름: {item.name}</St.ItemContents>
                <St.ItemContents>가격: {item.price}원</St.ItemContents>
              </St.ListItem>
            </Link>
          ))}
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
    gap: 24px;
    display: flex;
    margin-top: 10px;
    justify-content: center;
  `,
  ListItem: styled.div`
    width: 200px;
    height: 240px;
    background-color: #068fff;
    padding: 16px;
    color: white;
    display: flex;
    flex-direction: column;
  `,

  ItemContents: styled.p`
    margin: 0px;
  `,
};
