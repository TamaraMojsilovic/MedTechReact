 
 
import { BsFillTrashFill } from 'react-icons/bs';
 

const Red = ({pregled,obrisi}) => {
 




    return (
        
            
                    <tr>
                    <th scope="row">{pregled.id}</th>
                    <td>{pregled.naziv}</td>
                    <td>{pregled.doktor}</td>
                    <td>{pregled.pacijent}</td>
                    <td>{pregled.cena}</td>
                    <td> <button type="button" className="btn btn-danger" onClick={()=>obrisi(pregled.id)}><BsFillTrashFill></BsFillTrashFill></button> </td>
                    </tr>
                
               
        
      
    )
};

export default Red;