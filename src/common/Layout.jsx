import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { styled } from "styled-components";

function Layout() {
  const navigate = useNavigate();
  return (
    <St.Body>
      <St.Header>
        <St.Logo
          onClick={() => {
            navigate("/");
          }}
        >
          로고
        </St.Logo>
        <div
          style={{
            display: "flex",
            gap: "12px",
          }}
        >
          <div>로그인</div>
          <div>회원가입</div>
        </div>
      </St.Header>
      <Outlet />
      <St.Footer>
        <div>문의하기</div>
        <div>SNS 채널들</div>
      </St.Footer>
    </St.Body>
  );
}

export default Layout;

const St = {
  Body: styled.div`
    min-height: 100vh;
    position: relative;
    padding-bottom: 90px;
    box-sizing: border-box;
  `,

  Header: styled.header`
    display: flex;
    justify-content: space-between;
    padding: 24px;
    background-color: #000000;
    color: white;
  `,
  Logo: styled.div`
    cursor: pointer;
  `,

  Footer: styled.footer`
    margin-top: 24px;
    display: flex;
    justify-content: space-between;
    padding: 24px;
    background-color: #eeeeee;
    color: black;
    position: absolute;
    bottom: 0;
    width: 100%;
    box-sizing: border-box;
  `,
};
