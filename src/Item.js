const Item = (props) => {

  const itemOnClick = (event) =>
  {
    var number = +event.currentTarget.innerText;
    number += 100;
    event.currentTarget.innerText = number;
  }

  return (<div onClick={itemOnClick}>{props.item * 2}</div>)

};

export default Item;