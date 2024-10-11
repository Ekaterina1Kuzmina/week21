import logo from './logo.svg';
import './App.css';
import { Chart } from "react-google-charts";

function App() {
  const data = [
    ["Жанр", "Количество"],
    ["Художественые", 5],
    ["По разработке", 3],
    ["Саморазвитие", 2],
    ["Комиксы", 1],
  ];

  const options = {
    title: "Прочитанные книги",
  };
  return (
    <Chart
      chartType="PieChart"
      data={data}
      options={options}
      width={"100%"}
      height={"400px"}
    />
  );
}

export default App;

