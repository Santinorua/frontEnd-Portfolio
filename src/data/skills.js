import {
  CppIcon,
  GithubIcon,
  GitIcon,
  UnityIcon,
  CsharpIcon,
  MakeIcon,
  PythonIcon,
  JavascriptIcon,
  HtmlIcon,
  CssIcon,
} from '../components/SkillIcons'

// Orden del diseño: 2 filas de 5. Para agregar una habilidad, sumá { name, Icon }
// (el ícono se define en src/components/SkillIcons.jsx).
const skills = [
  { name: 'C++', Icon: CppIcon },
  { name: 'GitHub', Icon: GithubIcon },
  { name: 'Git', Icon: GitIcon },
  { name: 'Unity', Icon: UnityIcon },
  { name: 'C#', Icon: CsharpIcon },
  { name: 'Make', Icon: MakeIcon },
  { name: 'Python', Icon: PythonIcon },
  { name: 'JavaScript', Icon: JavascriptIcon },
  { name: 'HTML', Icon: HtmlIcon },
  { name: 'CSS', Icon: CssIcon },
]

export default skills
