import { useState } from "react";
import data from "./data";
import Items from "../items";
import Title from "../Title";
import Categories from "../categories";
const allCategories = ["all", ...new Set( data.map((item)=>{
  return item.category
  }))]
const App = () => {
  
  
  const [items,setItems] = useState(data);

  const filterCategory = (cat)=>{
    if (cat=="all") {
      setItems(data);
      return;
    }
    setItems(data.filter((item)=>{
      return (item.category == cat);
    }))
  }
  
  return <main>
    <section className="menu">
    <Title text = "Menu"></Title>
    <Categories category = {allCategories} filterFunc={filterCategory}></Categories>
    <Items item = {items}/>
    </section>
  </main>
};
export default App;
