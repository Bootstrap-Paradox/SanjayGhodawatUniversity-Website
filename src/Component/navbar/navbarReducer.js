import React from 'react';

export function NavigationReducer(state, action) {

    switch (action.type) {
        case "OPEN-NAVIGATION-MENU":
            return {
                ...state,
                navigationMenuOpen: true,
                mainMenuSelected: action.payload,
                subMenuSelected: Object.keys(state.menu_data[action.payload])[0]
            }

        case "CLOSE-NAVIGATION-MENU":
            return {
                ...state,
                navigationMenuOpen: false,
                subNavigationMenuOpen: false,
                mainMenuSelected: "",
                subMenuSelected: "",
            }

        case "OPEN-SUB-NAVIGATION-MENU":
            return {
                ...state,
                subNavigationMenuOpen: true,
                subMenuSelected: action.payload,
            }

        case "CLOSE-SUB-NAVIGATION-MENU":
            return {
                ...state,
                subNavigationMenuOpen: false,
                // subMenuSelected: "",
            }


        case "OPEN-NESTED-NAVIGATION-MENU":
            return {
                ...state,
                nestedNavigationMenuOpen: true,
                nestedMenuSelected: ""
            }

        case "CLOSE-NESTED-NAVIGATION-MENU":
            return {
                ...state,
                nestedNavigationMenuOpen: false,
                nestedMenuSelected: ""
            }


        default:
            throw new Error("Navigation Reducer out of Range")
    }
}