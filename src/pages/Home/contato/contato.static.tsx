import { FiMail } from 'react-icons/fi';
import { FaLinkedinIn } from 'react-icons/fa';
import { azulQD } from 'themes';

export const dadosCards = [
  {
    icone: <FiMail size={48} color={azulQD} />,
    titulo: 'Email',
    conteudo: 'contato@ranimontagna.com',
    href: 'mailto:contato@ranimontagna.com',
  },
  {
    icone: <FaLinkedinIn size={48} color={azulQD} />,
    titulo: 'Linkedin',
    conteudo: 'Ranielli Montagna',
    href: 'https://www.linkedin.com/in/rannimontagna/',
  },
];
