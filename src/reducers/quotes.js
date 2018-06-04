import uuid from 'uuid';

export default (state = [], action) => {
  switch (action.type) {
    case 'ADD_QUOTE':
      const q = {...action.quote, id: uuid(), votes: 0};
      // console.log(state)
      return state.concat(q);
    case 'REMOVE_QUOTE':
      // const quotes = state.filter(quote => quote.id !== action.id);
      return state.filter(quote => quote.id !== action.quoteId);
    case 'UPVOTE_QUOTE':
      let quote = state.find(quote => quote.id === action.quoteId);
      // console.log(quote)
      let newQuote = {...quote, votes: quote.votes + 1}
      let quoteIdx = state.findIndex(quote => quote.id === action.quoteId);
      let stateCopy = state.slice();
      stateCopy[quoteIdx] = newQuote
      return stateCopy;
    case 'DOWNVOTE_QUOTE':
      quote = state.find(quote => quote.id === action.quoteId);
      // console.log(quote)
      if (quote.votes > 0) {
        newQuote = {...quote, votes: quote.votes - 1}
        quoteIdx = state.findIndex(quote => quote.id === action.quoteId);
        stateCopy = state.slice();
        stateCopy[quoteIdx] = newQuote
        return stateCopy;
      } else {
        return state;
      }
    default:
      return state;
  }
}
