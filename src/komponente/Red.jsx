 
 

 

const Red = ({pregled}) => {
 




    return (
        
            
                    <tr>
                    <th scope="row">{pregled.id}</th>
                    <td>{pregled.naziv}</td>
                    <td>{pregled.doktor}</td>
                    <td>{pregled.pacijent}</td>
                    <td>{pregled.cena}</td>
                    <td> </td>
                    </tr>
                
               
        
      
    )
};

export default Red;