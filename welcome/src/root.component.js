import { fetchTransactions } from "@bytebank/util";
import { useEffect } from "react";

export default function Root(props) {
  useEffect(() => {
    fetchTransactions();
  }, []);
  return <section>{props.name} is mounted!</section>;
}
