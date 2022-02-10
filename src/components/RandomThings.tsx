import React from 'react';
import { TabsNames } from 'src/utils/worksList';

interface RandomThingsProps {
  tabSelected: TabsNames;
}

const RandomThings: React.FC<RandomThingsProps> = ({ tabSelected }) => {
  const things = [
    'puppy',
    'unicorn',
    'cookie',
    'lucky ball',
    'burger chilling',
    'flower',
    'croqueta',
    'pizza',
  ];
  const randomThing = things[Math.floor(Math.random() * things.length)];

  let gif = '';

  if (randomThing === 'puppy') {
    gif = 'lcb5nNV43eS4M';
  }

  if (randomThing === 'unicorn') {
    gif = '2A75RyXVzzSI2bx4Gj';
  }

  if (randomThing === 'cookie') {
    gif = 'xT9KVrKucCn7SlSUx2';
  }

  if (randomThing === 'lucky ball') {
    gif = '26xBJp4dcSdGxv2Zq';
  }

  if (randomThing === 'burger chilling') {
    gif = '26BRPOl0GYIOl9Ruw';
  }

  if (randomThing === 'flower') {
    gif = '3oz8xRF0v9WMAUVLNK';
  }

  if (randomThing === 'croqueta') {
    gif = '7r5vNfdMVTVp7JkhGB';
  }

  if (randomThing === 'pizza') {
    gif = 'GFKZLvfBiyrN6';
  }

  return (
    <li>
      <h3>Whoops!</h3>
      <h4>Right now it seems we don’t have anything on {tabSelected}</h4>
      <h4>
        But take this <b>{randomThing}</b>
      </h4>
      <div className="gif">
        <div>
          <iframe
            src={`https://giphy.com/embed/${gif}`}
            width="100%"
            height="100%"
          ></iframe>
        </div>
        <p>
          <a
            href={`https://giphy.com/gifs/${gif}`}
            target="_blank"
            rel="noreferrer"
            title="Go to Giphy"
          >
            via GIPHY
          </a>
        </p>
      </div>
    </li>
  );
};

export default RandomThings;
