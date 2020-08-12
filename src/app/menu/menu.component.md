# Use of Menu component
It is a component that supports dynamic nested menus. The data is dynamic and recursive. So to approach this, we had to decide whether we should do the recursion in html or Typescript.


## Why Angular recursive html is more convenient for the task
Since Angular gives a very convenient html markup, and component reusability inside html as custom components, we have taken recursive html process where same component calls itself from within if more children exist.

To achieve this in javascript, the best we could have done was loading the component dynamically through Angular's DCL.

But if we had taken only JS method, we would have had to make a function that would create a component recursively and handle it's show-hide state. The only problem would have been that we have to watch all the created components and their state in a single view. But in Angular's case, every component that calls the other recursively, is view encapsulated. So, one's style class does not reach everybody, which is a problem in single view without encapsulation.

## How to use
Normal embedding as `<app-menu><app-menu>` should work. Except for the dropdown button, everything is absolutely positioned, so no need to keep any space. The button can be replace with any other element inside menu-component.

## How does it work
The nested menu component `menu-block` takes in the children object which specifies the type of level and has entries. It just loops over the entries and if has any nested children, it shows arrow by using 'ngIf'.

By default every nested menu block is hidden but on hover on parent the css toggles its visibility to visible again. The left position of each nested block is as left as the with of its parent block.

It is also given a top which is the `position of the parent menu-item from top + 15px`

So, most of the things are done from html and css and no ts is required except for passing the children object as input which is accessed in the ts.

But we are using some logic in nested `menu-block`'s ts to make it responsive for mobile

## Input
`menuItem`: It has the interface of `MenuItemInterface`

`usedWidth`: it is passed to every nested component `menu-block` to determine whither the childblock should be shown right or left.


## Mock data points

At this moment, the API is not populated with data. So we created a `menu.json` and put the data according to the interface that suits.

## Important constants
The `menu-block`'s width is taken as 150px