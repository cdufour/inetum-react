/*
Note: en cas d'erreur "Failed to initialize watch plugin" au lancement de la commande "npm run test"
https://github.com/facebook/create-react-app/issues/11792
npm i -D --exact jest-watch-typeahead@0.6.5
*/

import { render, fireEvent } from "@testing-library/react"
import ShowInfo from "./ShowInfo"

describe("Show Information Component", () => {
  let wrapper = null

  beforeEach(() => {
    wrapper = render(<ShowInfo />)
  })

  test("should modify the name", () => {
    const nameInput = wrapper.container.querySelector('input[name="name"]')

    if (nameInput) {
      // équivalent d'une saisie utilisateur dans le champ de saisie
      fireEvent.change(nameInput, { target: { value: "Chris" } })
      expect(nameInput.value).toBe("Chris")
    }
    
  })

  test("should show the perso info when user clicks", () => {
    const button = wrapper.container.querySelector("button")

    // click sur le bouton trouvé dans le DOM => rerender
    if (button) fireEvent.click(button) 
    
    const persoInfo = wrapper.container.querySelector(".personalInformation")
    expect(persoInfo).toBeInTheDocument()
  })

})

