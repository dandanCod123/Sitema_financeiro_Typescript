import { useState, useEffect } from 'react';
import * as C from './App.styles';
import {Item} from './types/Items';
import {items} from './data/intems';
import { getCurrenteMonth,filterListByMonth } from './helpers/dateFilter';
import { TableArea } from './components/TableArea';
import { InfoArea } from './components/InforArea';

const App = () => {
  const[list, setList]= useState(items);
  const[currentMonth, setCurrentMoth] = useState(getCurrenteMonth());
  const[filteredList, setFilteredList] = useState<Item[]>([]);

  
  useEffect(()=>{
    setFilteredList( filterListByMonth(list, currentMonth) );
  }, [list, currentMonth]);

  const handleMonthChange = (newMonth:string) =>{
    setCurrentMoth(newMonth);
  }

  return(
    <C.Container>
      <C.Header>
        <C.HeaderText>
          AutoTech-Controle Finaceiro
        </C.HeaderText>
        </C.Header> 
        <C.Body>

          {/*AREA DE INFROMAÇÕES*/}
          <InfoArea 
          currentMonth={currentMonth}
          onMonthChange={handleMonthChange}
          />

          {/*AREA DE INSERÇÃO*/}

          {/* TABELA DE INTENS*/}
          <TableArea list={list}/>

        </C.Body>
    </C.Container>
  );
}

export default App;
