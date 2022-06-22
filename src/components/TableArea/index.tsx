import { Item } from '../../types/Items';
import * as C from './styles';
import { TableItem } from '../TableItem';

type Props = {
    list: Item[]
}

export const TableArea = ({ list }:Props) => {
    return(
      <C.Table>
          <thead>
              <tr>
                <C.TableHeadColumn widht={100}>Data</C.TableHeadColumn>
                <C.TableHeadColumn widht={130}>Categoria</C.TableHeadColumn>
                <C.TableHeadColumn>Titulo</C.TableHeadColumn>
                <C.TableHeadColumn widht={150}>valor</C.TableHeadColumn>
              </tr>
          </thead>
          <tbody>
              {list.map((item, index)=>(
                  <TableItem key={index} item={item}/>
              ))}

          </tbody>
      </C.Table>
    );
}