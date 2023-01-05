import React from 'react';
import { data } from '../../../data';

const UseStateArray = () => {
  const [people, setPeople] = React.useState(data);

  const removeItem = (id) => {
    //make a new array that has the matching id removed
    // eslint-disable-next-line no-lone-blocks
    {
      /* let newPeople = people.filter((person) => person.id !== id); */
    }
    // setPeople(newPeople);

    setPeople((oldPeople) => {
      let newPeople = oldPeople.filter((person) => person.id !== id);
      return newPeople;
    });
  };

  return (
    <>
      {people.map((person) => {
        const { id, name } = person;

        return (
          <div key={id} className="item">
            <h4>{name}</h4>
            <button onClick={() => removeItem(id)}>remove</button>
          </div>
        );
      })}

      <button className="btn" onClick={() => setPeople([])}>
        clear items
      </button>
    </>
  );
};

export default UseStateArray;
