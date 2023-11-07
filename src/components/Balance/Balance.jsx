import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../../context/GlobalState";

const Balance = () => {
  const { transactions } = useContext(GlobalContext);
  const [balance, setBalance] = useState(0);

  useEffect(() => {
    const amounts = transactions.map((transaction) => transaction.amount);
    const total = amounts.reduce((acc, item) => acc + item, 0).toFixed(2);
    setBalance(total);
  }, [transactions]);

  return (
    <>
      <h4>Your Balance</h4>
      <h1>${balance}</h1>
    </>
  );
};

export default Balance;
