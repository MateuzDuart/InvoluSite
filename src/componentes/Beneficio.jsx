function Beneficio({ caminhoIMG, altIMG, titulo, desc }) {
    return (
        <div>
            <img src={caminhoIMG} alt={altIMG} />
            <h2>{titulo}</h2>
            <p>{desc}</p>
        </div>
    )
}

export default Beneficio