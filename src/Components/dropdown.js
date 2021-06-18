const Dropdown = () => {

    let items = ['Blog','Certification','Blog','Certification','Blog','Certification']

  return (
    <ul style={{display:"none"}}>
        {items.map((item,index)=><li key={index}>{item}</li>)}
    </ul>
  );
};


export default Dropdown;