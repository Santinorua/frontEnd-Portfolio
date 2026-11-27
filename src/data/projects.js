/*
 * ============================================================
 *  PROYECTOS
 * ============================================================
 *  Cada objeto de esta lista es un proyecto. El primero aparece
 *  seleccionado al cargar la página. Para agregar uno nuevo, copiá
 *  un bloque { ... }, pegalo donde quieras dentro de la lista y
 *  cambiá los campos:
 *
 *  title        Título del proyecto (texto).
 *  description  Descripción corta, idealmente 2 líneas (texto).
 *  skills       Habilidades usadas (lista de textos). Se muestran
 *               como chips violetas debajo de la descripción y,
 *               separadas por coma, debajo del título en el selector.
 *  image        Imagen del proyecto. Guardá el archivo en
 *               public/projects/ y escribí "/projects/nombre.png".
 *               Si lo dejás en null se muestra una consola de ejemplo.
 *  demo, code   (Opcionales) Links para los botones "Ver demo" y
 *               "Código". Si no los ponés, el botón no aparece.
 * ============================================================
 */

const projects = [
  {
    title: 'Este portfolio',
    description:
      'Mi página personal, diseñada en Figma y programada con React y Tailwind. Tiene una consola animada al inicio y animaciones a medida que uno hace scroll.',
    skills: ['React', 'JavaScript', 'Tailwind'],
    image: null,
    code: 'https://github.com/Santinorua/frontEnd-Portfolio',
  },
  {
    title: 'SCE_Chess',
    description:
      'Fue mi primera experiencia seria en un lenguaje compilado, y de tipado estático. Además me metí en la comunidad de desarrollo de motores de ajedrez y aprendí mucho al respecto.',
    skills: ['C++', 'Make'],
    image: '/projects/SCE_Chess.webp',
    code: 'https://github.com/Santinorua/Chess-Engine-CPP',
  },
  {
    title: 'World Maker',
    description:
      'Proyecto en grupo. Un generador de terreno procedural diseñado para ser completamente personalizable y poder ser utilizado como herraminenta para desarrollo de videojuegos. Me encargué de hacer todos los algoritmos de generación y la parte funcional, mis compañeros se encargaron de la parte gráfica, ui y guardado.',
    skills: ['C++', 'CMake', 'ImGui'],
    image: '/projects/WorldMaker.webp',
    code: 'https://github.com/Santinorua/WorldMaker',
  },
  {
    title: 'SCE_Chess V2',
    description:
      'Retomé el proyecto de ajedrez y lo reescribí desde cero, para hacerlo mucho mejor, actualmente tiene 1 mes en desarrollo y ya funciona mucho mejor que su versión anterior.',
    skills: ['C++', 'Make'],
    image: '/projects/SCE_ChessV2.webp',
    code: 'https://github.com/Santinorua/SCE-Chess-2',
  },
  {
    title: 'Pinball',
    description:
      'Juego de unity que se trata de una pelota que brilla, en un pinball que está completamente a oscuras, excepto por el spawn. La idea es lanzar la pelota desde el inicio y llegar a la meta sin que te atrape un imán. Para lograr esto, el jugador tiene que tirar varias veces en diferentes direcciones para ver cómo es el nivel en esos lugares, pero se tiene que acordar, porque solo hay luz mientras la pelota esté cerca de ahí.',
    skills: ['Unity', 'C#', 'Sistema de iluminación'],
    image: '/projects/Pinball.webp',
    code: 'https://github.com/Santinorua/Pinball',
  },
  {
    title: 'Red neuronal simple',
    description:
      'Trabajo de clase donde implementamos nuestra propia red neuronal en Python, con el objetivo de aprender sobre el funcionamiento de las redes neuronales.',
    skills: ['Python', 'Pandas', 'NumPy', 'Matplotlib'],
    image: '/projects/redNeuronal.webp',
    code: 'https://colab.research.google.com/drive/12RzEc-F_k-yw9srYKeH2IHNBUMy3oUSg?usp=sharing',
  },
]

export default projects
