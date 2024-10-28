# Microfrontend

We will be using module federation to handle this.
Module fedeartion names, have to be valid Javascript variable names

## Design Methodology

We will be following the [atomic design methodology](https://atomicdesign.bradfrost.com/chapter-2/)

| Atomic Unit | HTML Equivalent |
|-------------|-----------------|
|   Atom      | [Basic Elements](https://developer.mozilla.org/en-US/docs/Web/HTML/Element)  |
|   Molecules  | [A search bar](https://www.w3schools.com/howto/howto_css_searchbar.asp) |
| Organism|  [Whole Header(Nav and Search)](https://blog.tubikstudio.com/best-practices-for-website-header-design/)

### Line

We will only be sharing Organisms. Atoms and Molecules are too small

## Site

We will be creating an experience to sell BJJ equipment
we will have Gis RashGuards Short Mouth Guards and other merch
