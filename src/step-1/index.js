// <ul class="list">
//   <li>Item 1</li>
//   <li>Item 2</li>
// </ul>

const list = {
  type: 'ul',
  props: {
    class: 'list',
  },
  children: [
    {
      type: 'li',
      props: {},
      children: 'Item 1',
    },
    {
      type: 'li',
      props: {},
      children: 'Item 2',
    },
  ],
}

console.log(list)
