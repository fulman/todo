import {useState, useEffect} from 'react'

function useLocalStorageState(key, defaultVal) {
  const [state, setState] = useState(() => {
    let val;
    try {
      val = JSON.parse(window.localStorage.getItem(key) || Stringify(defaultVal));
    } catch(e) {
      val = defaultVal;
    }
    return val;
  }
}

export default useLocalStorageState;