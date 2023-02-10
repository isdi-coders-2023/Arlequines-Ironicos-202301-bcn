# Data

# Data layer

- List of beers external data
- List of beers internal data
- Loading status
- Modification status

# Data modifications

- Modify one beer info on My beers Page
- Add to my beers
- Delete beer

- Success modificating beer
- Error modificating beer

- Add to my beers
- Edit beer data
- Delete beer
- Search
- Nav
- Filter

# Components

# Contexts

## UI Context

- Contains Loading status
- Contains Error status

## Data context

- Contains External API data
- Contains Local API data
-

# Page Components

## Brew Beer page

- Renders the form
- Sends form filled inputs to ...

## Edit beer page

- Renders the form with filled info
- Sends from modified inputs ...

## My beers page

- Receives beer info
- Calls the action do delete cards
- Renders card list component

## Details page

- Receives all beer info
- Renders details component

## Home page

- Recieves beer data from external API
- Renders card list component
- Renders pagination buttons
- Receives user action from pagination component

## 404 Page

- Shows error message

# Components

## Header

- Renders Brew Beer button

## App

- Renders pages

## Card List

- Renders all cards

## Cards

- Shows Beer data:

  - Name
  - Tag
  - Date of brew
  - Img

  - Recieves modified info

## Feedback

- Shows Error pop up
- Shows Success pop up

## Pagination

- Render 2 arrow buttons
- Sends action to Home page
- Shows the number current page and total pages

## Navigation Bar

- Contains navigation links

## Buttons

- Receives actions from user
- Calls an action

## Form

- Receives info for beer
- Input for name
- Input for description
- Input for method
- Input for malt
- Inpuy for hops
- Input for food pairing
- Input for image

## Description

- Shows all data of the beer
- Name
- Description
- Method
- Malt
- Hops
- Food pairing

## Search Bar (nice to have)
