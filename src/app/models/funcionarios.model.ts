export class funcionarios{
    public id: number;
    public nome: string;
    public cpf: string;
    public dataNascimento: string;
    public estadoCivil: string;
    public sexo: string;
    public email: string;
    public graduacao: string;
    public cep: string;
    public numero: number;
    public complemento: string;
    public logradouro: string;
    public cidade: string;
    public bairro: string;
    public celular: string;
    public fixo: string;
    public emergencia: string;
    public nomeReferencia: string;
    public parentesco: string;
    public deficiencia: string;
    public cargo: string;
    public dtAdm: string;
    public ferias: string;
    public salario: number;
    public foto: string;
    public situacao: {
        id: number,
        descricao: string
    };
    public login: {
        id: number,
        ativo: string;
        ultimoLogin: string;
        usuario: string;
        senha: string;
        isAdmin: string;
        token: string;
    }
}