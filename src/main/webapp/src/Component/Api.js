const API_URL = 'https://api.exchangerate-api.com/v4/latest/';

export const getExchangeRate = async (fromMoney, toMoney) => {
  try {
    //API_URL에서 fromMoney의 환율정보를 가져온다.
    const response = await fetch(`${API_URL}${fromMoney}`);
    const data = await response.json();
    const exchangeRate = data.rates[toMoney];
    return exchangeRate;
  } catch (error) {
    console.log('Error:', error);
  }
};