import './App.css';
import { List } from './components/list/list'

const items = [
  {
    name: "Phones",
    items: [
      {name: "Apple", items: [
        {name: "iPhone 12", items: [
          {name: "256gb" }, {name: "512gb"}, {name: "1tb"}
        ]},
        {name: "iPhone 12 Pro", items: [{name: "256gb" }, {name: "512gb"}, {name: "1tb"}] },
        {name: "iPhone 12 Pro Max", items: [{name: "256gb" }, {name: "512gb"}, {name: "1tb"}] },
        {name: "iPhone 12 Mini", items: [{name: "256gb" }, {name: "512gb"}, {name: "1tb"}] },
      ]},
    ]
  }
];


function App () {
  return (
    <>
      <h1>App</h1>
      <List items={items} />
    </>
  );
}

export default App
