import React, { Component, useState } from 'react'
import { Provider } from 'react-redux'
import userReducer from './reducer'
import { createStore } from 'redux'
import Greeter from './Greeter'

const store = createStore(userReducer);

function ProviderHome() {
  return (
    <Provider store={store}>
      <Greeter/>
    </Provider>
  );
}
export default ProviderHome