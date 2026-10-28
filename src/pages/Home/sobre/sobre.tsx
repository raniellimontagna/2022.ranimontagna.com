import { ConteudoLanding } from 'components';
import * as styled from './sobre.styles';

const Sobre = () => {
  return (
    <styled.Sobre>
      <ConteudoLanding
        titulo="Sobre mim"
        texto={
          <>
            Olá, me chamo Ranielli Montagna, mais conhecido como Rani, tenho 20 anos. Hoje sou desenvolvedor front-end,
            usando o framework React e estudo Análise e Desenvolvimento de Sistemas na UPF (Universidade de Passo
            Fundo). Sou apaixonado por tecnologia, desenvolvimento e programação, por isso estou sempre em busca de me
            inovar e evoluir no que faço.
          </>
        }
        imagem="./static/svgs/foto.svg"
      />
    </styled.Sobre>
  );
};

export default Sobre;
