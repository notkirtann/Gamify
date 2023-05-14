import { createContext, useState} from 'react';
export const AppContext = createContext(); 

export function AppContextProvider({children})
{
     // {console.log(Data)}
     const[login,setLogin]=useState(false); 
     const[loading,setLoading]=useState(false);
     const [points , setPoints] = useState(0);
     const value = {
      login , 
      setLogin, 
      loading, 
      setLoading, 
      setPoints,
      points, 
     }
     return <AppContext.Provider value={value}>
      {children}
     </AppContext.Provider>
}

