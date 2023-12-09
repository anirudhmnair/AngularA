# AngularA

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.10.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.


# Application Structure

This section was created while learnng the basics of angular and will consist of observations and notes created in the learning and implementation phase. (IGNORE TiPOS)

**CREATE THE TOP BAR**

**CREATE THE SEARCH BAR**

**CREATE THE EXPORT FOR THE INTERFACE AND THE EXPORT** -> in the homeLocation interface

**IMPORT THE INTERFACE AND THE DATA AS A LIST** -> To the home componenet

**USE THE INPUT DECORATOR TO DEFINE THE REPETATIVE DATA** -> In the homeLocations component

**BIND THE DATA THAT WE GET *ngFor TO THE DATA SENT TO THE hL Component**

**STYLE THE COMPENENT AS PER YOUR PREFERANCE**
 
## STEP 1
1. create new project -> standalone
2. if we use `ng ... --inline-template` for new componenets their html file will not be 
generated instead we add the html as template in the .ts file
3. create a home component (inline or not is upto the user).
--
4. In app.componenet.ts add the html line under template (or in the app.componenet.html) to show the 
top bar, then import home (inside @components as well), and include it under the sections tag in the app.componenet.ts template (below top bar)
5. in the home component add the search bar and buttons under the `<section>` & `<form>` tags

## STEP 2
1. create the housingLocation (hL) component
2. import housing location to the home component and import it in the @componenet{ import []}
3. create a housinglocation interface, this will export the properties of housinglocation
4. the hL interface will be imporetd to home componenet.
5. under the @components export it will be invoked
6.we get the image assets from: readonly baseUrl = 'https://angular.io/assets/images/tutorials/faa' -> baseurl is a readonly variable
7. create a sample property/variable with values for the homeLocation in home componenet

`housingLocation: HousingLocation = {}`

8. Or it can be created in the hL interface:
`export const housingLocaitonsList = [{},{}]`
or as
 `export const housingLocationList: HousingLocation[] =[{},{}]`

-- --
Inputs allow components to share data. The direction of the data sharing is from parent component to child component.
8. **Import the INPUT DECORATOR  in hL componenet.
9. import hL interface and create a property housingLocation of type HousingLocation to the 
HousingLocationComponent class. 
10. this property will be prefixed with the INPUT DECORATOR 

`@Input() housingLocation!: HousingLocation;`

11. **Property Binding**: For example to send the test data in home to homelocation(hL) componenet we modify the template in home.component.ts as: 
`<app-housing-location [housingLocation]="housingLocation"></app-housing-location>`
This send ths data in **housingLocation** of *home.component.ts* to **[housingLocation]** in the *hL* component.

**INPUT DECORATOR:** *helps customize data data dispalyed in the component*
-- --

## STEP 3:
1. provision for dynamic values, go to hL componeents and modify its template to include:
   a. listing photo
   b. listing heading
   c. listing location
   
   *here the image src will have property binding with the housingLocaiton.photo property to capture this values from the home.component.ts
   `<img class="listing-photo" [src]="housingLocation.photo" alt="Exterior photo of {{housingLocation.name}}">`

2. Next go to the hL component and add the list of differnt values for the different houses:
   1. this can be done within the hL componenet -> and we can change the name from housingLocation to housingLocationList

   2. OR we can add this list in the hL interface:
        `export const housingLocations = [{},{}...]`
        and then call it in the hL components using:
        `housingLocaitonList: HousingLocations[...housingLocations]`

3. ### *ngFor
In the home componenet now add:
    `*ngFor="let housingLocation of housingLocationList"`
This will pass the values of the housingLocationList to the hL componenet, inturn creating/displaying all the values as in the hL Componenet template




# Notes:
// this is how to declare a constant in type script
const baseurl = 'https://angular.io/assets/images/tutorials/faa'
This can then be used in the code as->
`image = `${baseurl}\image.jpg` `





# STYLES:
All the differnet styles used in the components for ref

## homeLocation.component.css
.listing {
  background: var(--accent-color);
  border-radius: 30px;
  padding-bottom: 30px;
}
.listing-heading {
  color: var(--primary-color);
  padding: 10px 20px 0 20px;
}
.listing-photo {
  height: 250px;
  width: 100%;
  object-fit: cover;
  border-radius: 30px 30px 0 0;
}
.listing-location {
  padding: 10px 20px 20px 20px;
}
.listing-location::before {
  content: url("/assets/location-pin.svg") / "";
}

section.listing a {
  padding-left: 20px;
  text-decoration: none;
  color: var(--primary-color);
}
section.listing a::after {
  content: "\203A";
  margin-left: 5px;
}

## home.component.css
.results {
    display: grid;
    column-gap: 14px;
    row-gap: 14px;
    grid-template-columns: repeat(auto-fill, minmax(400px, 400px));
    margin-top: 50px;
    justify-content: space-around;
  }
  
  input[type="text"] {
    border: solid 1px var(--primary-color);
    padding: 10px;
    border-radius: 8px;
    margin-right: 4px;
    display: inline-block;
    width: 30%;
  }
  
  button {
    padding: 10px;
    border: solid 1px var(--primary-color);
    background: var(--primary-color);
    color: white;
    border-radius: 8px;
  }
  
  @media (min-width: 500px) and (max-width: 768px) {
    .results {
        grid-template-columns: repeat(2, 1fr);
    }
    input[type="text"] {
        width: 70%;
    }   
  }
  
  @media (max-width: 499px) {
    .results {
        grid-template-columns: 1fr;
    }    
  }


## app.component.css

:host {
    --content-padding: 10px;
  }

  
  header {
    display: block;
    height: 60px;
    padding: var(--content-padding);
    box-shadow: 0px 5px 25px var(--shadow-color);
  }
  .content {
    padding: var(--content-padding);
  }

  ## stye.css

  * {
    margin: 0;
    padding: 0;
  }
  
  body {
    font-family: 'Be Vietnam Pro', sans-serif;
  }
  :root {
    --primary-color: #605DC8;
    --secondary-color: #8B89E6;
    --accent-color: #e8e7fa;
    --shadow-color: #E8E8E8;
  }
  
  button.primary {
    padding: 10px;
    border: solid 1px var(--primary-color);
    background: var(--primary-color);
    color: white;
    border-radius: 8px;
  }
