import React from 'react';

const NewsAndEventsReducer = (state, action) => {
    switch (action.type) {
        case "MAKE-ACTIVE":
            return {
                ...state,
                active_news: action.payload,
            }

        default:
            throw new Error("News And Events Reducer Out of Range");
    }

}

export default NewsAndEventsReducer;