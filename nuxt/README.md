# nuxt

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out the [documentation](https://nuxtjs.org).

## Special Directories

You can create the following extra directories, some of which have special behaviors. Only `pages` is required; you can delete them if you don't want to use their functionality.

### `assets`

The assets directory contains your uncompiled assets such as Stylus or Sass files, images, or fonts.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/assets).

### `components`

The components directory contains your Vue.js components. Components make up the different parts of your page and can be reused and imported into your pages, layouts and even other components.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/components).

### `layouts`

Layouts are a great help when you want to change the look and feel of your Nuxt app, whether you want to include a sidebar or have distinct layouts for mobile and desktop.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/layouts).


### `pages`

This directory contains your application views and routes. Nuxt will read all the `*.vue` files inside this directory and setup Vue Router automatically.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/get-started/routing).

### `plugins`

The plugins directory contains JavaScript plugins that you want to run before instantiating the root Vue.js Application. This is the place to add Vue plugins and to inject functions or constants. Every time you need to use `Vue.use()`, you should create a file in `plugins/` and add its path to plugins in `nuxt.config.js`.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/plugins).

### `static`

This directory contains your static files. Each file inside this directory is mapped to `/`.

Example: `/static/robots.txt` is mapped as `/robots.txt`.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/static).

### `store`

This directory contains your Vuex store files. Creating a file in this directory automatically activates Vuex.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/store).



There should be option for user to choose "all" in location if he is admin. Or just being able to choose nothing there.





notes from meeting


- the location is not needed for the administrator. 
NO. OPTION ALL for location admin

As a administrator i should be able to choose location all,



- search by order number, aslo item number (optional item category) - see completed order
- for qa worker order list - also search required
Yes

As a user i should be able to search qa list by order number, item number and category code so that i can find orders i am interested quickly


- there should be more then one itemcategory code and more then one atribute for the control point

As a administrator i should be able to specify the values that are possible to specify in the control point.
- atribute can be empty
- 
- there are diffrent types of attributes in the system so they can have diffrent types of values
- units for the atributes as well


- tolerance is not alway symetrical +/-

- item category code has description
As a administrator i should 
- completed orders might have some description?

- we need to limit the role of administrator if he can create new users


- meybe specifhy the translation but onnly for the control points desciptions
Acceptance criteria.

- login UI should rememmber the previously chosen users and location

- highlight the order which you already started

1)Add option for all location in location selection for admin.
2)Search by order number, item number, category code for admin and qa employee.
3)More than one item category code per control point
4)None or one or multiple attributes per control point.
_____control point value, tollerance, units?
5)Item category code has description
6)orders/items have desciptions



Not gonna do 

- new user for admin 
- remember the users and location
- highlight order started
