


import React from 'react';
import ReactDOM from 'react-dom/client';
import './components/components.css';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { Provider } from 'react-redux';
import {createStore} from 'redux';



    const firstState = {
        count:0
    }




  const ADD_NUMBER = "ADD NUMBER";
  const ADD_SAME_NUMBER = "ADD SAME NUMBER";
  const SUBTRACT_NUMBER = "SUBTRACT NUMBER";
  const SUBTRACT_SAME_NUMBER = "SUBTRACT SAME NUMBER";
  const MULTIPLY_NUMBER = "MULTIPLY NUMBER";
  const MULTIPLY_SAME_NUMBER = "MULTIPLY_SAME_NUMBER";
  const DIVIDE_SAME_NUMBER = "DIVIDE SAME NUMBER";
  const RESET = "RESET";


    const counterReducer = (state = firstState, action) => {
          switch(action.type) {
            case 'ADD NUMBER':
              return {count: state.count + 1}
              case 'ADD SAME NUMBER':
                return {...ADD_NUMBER, count: state.count + state.count}
                case 'SUBTRACT NUMBER':
                  return {count: state.count - 1}
                  case 'SUBTRACT SAME NUMBER':
                    return {...SUBTRACT_NUMBER, count: state.count - state.count}
                      case 'MULTIPLY_SAME_NUMBER':
                        return { count: state.count * state.count}
                          case 'DIVIDE SAME NUMBER':
                            return { count: state.count / state.count}
                            case 'RESET':
                              return {count: state.count = 0};
                              default:
                                return state
            
          }

    }


    const store = createStore(
      counterReducer,
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() // For Redux DevTools for easier debugging

    )


    const increment = () => ({
      type: ADD_NUMBER
    })

   const addSameNumber = () => ({
      type: ADD_SAME_NUMBER
    })


  const subtract = () => ({
     type: SUBTRACT_NUMBER
})

  const subtractSameNumber = () => ({
     type: SUBTRACT_SAME_NUMBER
})


    const multiplySameNumber = () => ({
      type: MULTIPLY_SAME_NUMBER
})



    const divideSameNumber = () => ({
      type: DIVIDE_SAME_NUMBER
})


    const reset = () => ({
      type: RESET
})


const BasicCounter = () => {
  const count = useSelector(state => state.count);
  const dispatch = useDispatch();
      return (
          <>
              <div className="Count-Container">
                <div className='Count-Wrapper'>
                   <div> <div className='count-header'>Count</div></div>
                      <br></br>
                      </div>
                      </div>

                    <div className='Count-Container-Two'>
                      <div className='Count-Wrapper-Two'>
                        <div> <p className='count-text'>{count}</p></div>
                      </div>
                      </div>


                    <div className='Count-Container-Three'>
                      <div className='Count-Wrapper-Three'>
                       
                          <div><div><button type="button" onClick={() => dispatch(increment())}>Increase</button></div></div>
                         
                           <div><div><button type="button" onClick={() => dispatch(addSameNumber())}>Add Same Number</button></div></div>
                          
                            <div><div><button type="button" onClick={() => dispatch(subtract())}>Subtract</button></div></div>
                         
                            <div><div><button type="button" onClick={() => dispatch(subtractSameNumber())}>Subtract Same Number</button></div></div>
                            
                             <div><div><button type="button" onClick={() => dispatch(multiplySameNumber())}>Multiply Same Number</button></div></div>
                          
                             <div><div><button type="button" onClick={() => dispatch(divideSameNumber())}>Divide Same Number</button></div></div>
                        
                             <div><div><button type="button" onClick={() => dispatch(reset())}>Reset</button></div></div>
                      
                        

                      </div>

                      </div>
               
         
            
          </>
      )
   
}



const Apps = () => {
  return (
      <>
          <div>
              <header>
                  <BasicCounter />
              </header>
          </div>
      </>
  )
}


   




function App() {
    return (
      <>

      <Provider store={store}>
        <Apps />
      </Provider>

      </>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( <App />);

