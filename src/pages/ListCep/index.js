import "./styles.css";

const ListCep = () => {
  const cepMock = [
    {
      cep: "01001-000",
      logradouro: "Praça da Sé",
      complemento: "lado ímpar",
      bairro: "Sé",
      localidade: "São Paulo",
      uf: "SP",
      ibge: "3550308",
      gia: "1004",
      ddd: "11",
      siafi: "7107",
      numero: "50",
    },
  ];

  return (
    <div className="card">
      {cepMock.map((cep) => (
        <>
          <h5 className="card-header card-city">{cep.localidade}</h5>
          <div className="card-body">
            <h5 className="card-title">{`${cep.logradouro}, ${cep.numero}`}</h5>
            <p className="card-text">
              {cep.cep}
            </p>
          </div>
        </>
      ))}
    </div>
  );
};

export default ListCep;
