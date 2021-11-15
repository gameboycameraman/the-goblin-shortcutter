# The Goblin Shortcutter

<div align="center">
  <img width="620" height="329" src="./img/goblin-shortcutter.jpg">
</div>
<br/>
Welcome friend, I am the Goblin Shortcutter,<br/>
And I will be your humble javascript helper,<br/>
to find your way to the cards that you want.<br/>
<br/>
To use me is simple, <br/>
install me and import me,<br/>
Then simply call me with the name that you want.<br/>
<br/>
Remember,<br/>

I only make **promises**,<br/>
And it can take time to fulfill them.<br/>

In the terminal:
```
npm i the-goblin-shortcutter
```

And example on how to use it in your code:
```
import theGoblinShortcutter from 'the-goblin-shortcutter';

const testingCard = async () => {
  let card;
  card = await theGoblinShortcutter("Krenko");
  // Looking for the boss above but it could be any other card name 
  console.log("This is your card:", card);
  // you'll receive an object with one or multiple cards data 
}

testingCard();

export default testingCard;
```

I'll return to you as fast as possible,<br/>
With a single name or list of names, <br/>
Depending on the match that I found.

*Artwork by [Jesper Ejsing](http://jesperejsing.com/)*