const initState = {
    themeId: 1,
}

type initStateType = {
    themeId: number
}

export const themeReducer = (state = initState, action: changeThemeIdActionType): initStateType => { // fix any
    switch (action.type) {
        // дописать
        case 'SET_THEME_ID': return {
            ...state, themeId: action.id
        }
        default:
            return state
    }
}

export const changeTheme = (id: number): changeThemeIdActionType => ({ type: 'SET_THEME_ID', id }) // fix any

type changeThemeIdActionType = {
    type: 'SET_THEME_ID'
    id: number
}