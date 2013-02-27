# list-stats

Runs a trivial word counting function over helpme@lists.olin.edu for given search terms. To run:

```
$ git clone https://github.com/ohack/list-stats
$ cd helpme-stats
$ npm install
$ node index
```

## Example

Run the above, open <http://localhost:3000>

![http://i.imgur.com/CfVWDqo.png](http://i.imgur.com/CfVWDqo.png)

After the content downloads, it shows a list like:

```
{
  "olin": 145,
  "helpme": 138,
  "to": 135,
  "at": 123,
  "edu": 119,
  "lists": 119,
  "the": 99,
  "br": 81,
  "of": 81,
  "a": 75,
  "i": 74,
  "bounces": 66,
  "mailto": 62,
  "and": 54,
  "div": 47,
  "re": 46,
  "is": 45,
  
  ...

  "shock": 1,
  "nobody": 1,
  "replied": 1,
  "dreams": 1,
  "died": 1,
  "jon": 1,
  "hitch": 1,
  "william": 1
}
```