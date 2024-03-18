import Hero from "./Hero";

const Person = () => {
    // const heros ={
    //   hero1 :'batman',
    //   hero2:'spiderman'
    // };
    let arr = ["Apple", "Banana", "or", 1254, "Oneplse"]
  
    return (
      // <div>
      //   <h1>Hello React </h1>
      //   <h1>My name is superman & {heros.hero1} crrrently</h1>
      //   <h3>my name is {heros.hero2}</h3>
      // </div>
  
      // <>
      // <h1>Abhishek</h1>
      // <h1> Anurag</h1>
      // <h1>sahil</h1>
      // <h1>Ashisha</h1>
      // <h1>g</h1>
      // </>
      <>
        {/* <h1>{arr[0]}</h1> */}
        {
          arr.map((d) => (
            <h1 key={Math.random()}>{d}</h1>
          )
          )
        }
        <Hero/>
      </>
    );
  }
  export default Person;
 

