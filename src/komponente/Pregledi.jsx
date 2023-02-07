 
import Red from "./Red";

 
 

 

const Pregledi = ({pregledi,obrisi}) => {
 




    return (
        <div className="pregledi">
            <table className="table" id="table">
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
                     {pregledi.map((p)=><Red key={p.id} pregled={p} obrisi={obrisi}></Red>)}
                
                </tbody>
                </table>
                
        </div>
      
    )
};

export default Pregledi;