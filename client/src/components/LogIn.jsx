import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import '../styles/login.scss';
import { useQuery } from 'react-query';
import axios from 'axios';

class LogIn extends Component {
  state = {
    email: '',
    password: '',
  };

  loginHandler = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }; //계산된 속성명 사용

  // loginClickHandler = () => {
  //   const { email, password } = this.state;
  //   fetch('http://????/auth/login', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({
  //       email,
  //       password,
  //     }),
  //   })
  //     .then((res) => res.json())
  //     .then((res) => console.log(res));
  // };

  render() {
    const { isOpen, close } = this.props; //아까 버튼에서 props로 가져온것
    return (
      <>
        {isOpen ? (
          ////만약 isopen(this.state.isModalOpen)이 true일때 코드를 실행 false면  null
          /// <div onClick={close}> 로그인창 말고 회색 바탕을 누를시 모달이 꺼지게 만듬
          ///<span className="close" onClick={close}>&times;</span> x버튼 누를시 꺼짐
          ////<div className="modalContents" onClick={isOpen}> 로그인 화면은 버튼 클릭해서 들어오면
          /// true인 상태로 있어서 화면이 안꺼진다.

          <div className="modal">
            <div onClick={close}>
              <div className="loginModal">
                <span className="close" onClick={close}>
                  &times;
                </span>
                <div className="modalContents" onClick={isOpen}>
                  로그인 해주세요!
                  <div className="socialBox">
                    <div className="kakao">
                      <a href="http://localhost:5000/api/auth/kakao">
                        <img
                          className="kakaoLogo"
                          src="../login/login-kakao.png"
                          alt="카카오 로그인"
                          width="200vh"
                        />
                      </a>
                    </div>
                    <div className="naver">
                      <a href="http://localhost:5000/api/auth/naver">
                        <img
                          className="naverLogo"
                          src="../login/login-naver.png"
                          alt="네이버 로그인"
                          width="200vh"
                        />
                      </a>
                    </div>
                    <div className="google">
                      <a href="http://localhost:5000/api/auth/google">
                        <img
                          className="googleLogo"
                          src="../login/login-google.png"
                          alt="구글 로그인"
                          width="200vh"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : null}
      </>
    );
  }
}

export default LogIn;
