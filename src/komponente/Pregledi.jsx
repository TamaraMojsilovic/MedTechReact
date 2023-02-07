import { AiOutlinePlus } from 'react-icons/ai';
import Red from "./Red";

 
 

 

const Pregledi = ({pregledi,obrisi}) => {
 




    return (
        <div className="pregledi">
            <table className="table">
                <thead>
                    <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Naziv</th>
                    <th scope="col">Doktor</th>
                    <th scope="col">Pacijent</th>
                    <th scope="col">Cena</th>
                    <th scope="col">Opcije</th>

                    </tr>
                </thead>
                <tbody>
                     {pregledi.filter((p)=>p.obrisan===0)
                     .map((p)=><Red key={p.id} pregled={p} obrisi={obrisi}></Red>)}
                
                </tbody>
                </table>
                <button type="button" className="btn btn-primary"> Dodaj novi pregled <AiOutlinePlus></AiOutlinePlus></button>
        </div>
      
    )
};

export default Pregledi;