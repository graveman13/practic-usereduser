import { DECREMENT, INCREMENT } from "./actionsType";

export const increment = (payload) => (
  {
    type: INCREMENT,
    payload,
  }
)

export const decrement = (payload) => (
  {
    type: DECREMENT,
    payload,
  }
)