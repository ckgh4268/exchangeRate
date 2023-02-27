import React, { useState } from 'react';
import styles from '../css/index.css';
import { getExchangeRate } from './Api.js';

const Quiz = () => {

    //변환하고자 하는 화폐
    const [fromMoney, setFromMoney] = useState('KRW');
    //변환하고자 하는 대상의 화폐
    const [toMoney, setToMoney] = useState('USD');
    //각 화폐의 환율정보
    const [exchangeRate, setExchangeRate] = useState(null);
    //입력금액
    const [InputMoney, setInputMoney] = useState('');
      
    //set변수
    const ChangeFromMoney = (e) => {
      setFromMoney(e.target.value);
    };
    const ChangeToMoney = (e) => {
      setToMoney(e.target.value);
    };
    const ChangeInputMoney = (e) => {
      setInputMoney(e.target.value);
    };
  
    const exchangeMoney = async () => {
      try {
        const rate = await getExchangeRate(fromMoney, toMoney);
        setExchangeRate(rate);
      } catch (error) {
        console.log(error);
      }
    };

    //환전을 누르지않고도 enter를 쳐서 입력가능
    const enter = (e) => {
        if (e.key === "Enter") {
            exchangeMoney();
        }
      }; 

    //<option value="나라코드" 를 입력함으로서 select옵션에 추가할수 있습니다.

    return (
        <div className="App">
        <h1>환율계산기</h1>
        <div>
            <label>
            금액 :　
            <input id="input_money" type="number" value={InputMoney} onKeyDown={enter} onChange={ChangeInputMoney} />
            </label>
            <span id="from_text1">을(를)</span>
            <span id="from_text2">로 환전합니다. 　</span>
        </div>
        <div>
            <label>
                <select id="from_exchange_box" value={fromMoney} onChange={ChangeFromMoney}>
                    <option value="KRW">대한민국 원</option>
                    <option value="USD">미국 달러</option>
                    <option value="JPY">일본 엔화</option>
                </select>
            </label>
        </div>
        <div>   
            <label> 
                
            <select id="to_exchange_box" value={toMoney} onChange={ChangeToMoney}>
                <option value="USD">미국 달러</option>
                <option value="KRW">대한민국 원</option>
                <option value="JPY">일본 엔화</option>
            </select> 
            </label>
        </div>
        <div>
            <button id="exchange_botton" onClick={exchangeMoney}>환전</button>
        </div>
        <div id="result">
        {exchangeRate && (
            <p>
            {InputMoney} {fromMoney} = {(InputMoney * exchangeRate).toFixed(0)}{' '}
            {toMoney}
            </p>
        )}
        </div>
        </div>
  );
}

export default Quiz;
