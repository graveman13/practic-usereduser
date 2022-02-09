import { DECREMENT, INCREMENT } from "./actionsType"

export const initState = {
  count: 0,
}

export const reducer = (state, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        count: state.count + action.payload,
      }
    case DECREMENT:
      return {
        count: state.count - action.payload,
      }
  }
}