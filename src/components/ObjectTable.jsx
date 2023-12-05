const ObjectTable = ({ objects }) => {
    return (
      <div className="table-container">
        <table className="styled-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nome</th>
              <th>Origem</th>
              <th>Destino</th>
              {/* Adicione mais colunas conforme necessário */}
            </tr>
          </thead>
          <tbody>
            {objects.map((object) => (
              <tr key={object.id}>
                <td>{object.id}</td>
                <td>{object.numero_voo}</td>
                <td>{object.origem}</td>
                <td>{object.destino}</td>
                {/* Renderize mais colunas conforme necessário */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };
  
  export default ObjectTable;
  