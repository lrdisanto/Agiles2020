import { Component } from '@angular/core';

@Component({
  selector: 'app-paginaalumno',
  templateUrl: 'paginaalumno.component.html',
  styleUrls: ['paginaalumno.component.scss']
})
export class PaginaalumnoComponent{
  title="Escuela"
  opened = false;
  profesor: {title: string, subtitle: string, avatar: string, content: string, url: string}[] = [
    {title: 'Matemáticas', subtitle: '1º Grado', avatar:'../../../assets/img/profe5edit.jpg', content: 'Las matemáticas o la matemática (del latín mathematĭca, y este del griego μαθηματικά, transliterado como mathēmatiká, derivado de μάθημα, tr. máthēma. ‘conocimiento’) es una ciencia formal que, partiendo de axiomas y siguiendo el razonamiento lógico, estudia las propiedades y relaciones entre entidades abstractas como números, figuras geométricas, iconos, glifos, o símbolos en general...', url:'../../../assets/img/Matematicas.jpg'},
    {title: 'Prácticas del Lenguaje', subtitle: '1º Grado', avatar:'../../../assets/img/profe2edit.jpg', content: 'La idea de prácticas del lenguaje se emplea en el ámbito de la educación para aludir a los contenidos y los ejercicios vinculados a la lectura, la escritura y la comunicación oral. Estas prácticas abarcan desde el conocimiento de las reglas que componen el sistema conocido como lengua hasta el uso de ese código en diversos contextos...', url: '../../../assets/img/pdl.png'},
    {title: 'Cs Sociales', subtitle: '1º Grado',avatar:'../../../assets/img/profe3edit.jpg', content: 'Las ciencias sociales son las ramas de la ciencia relacionadas con la sociedad y el comportamiento humano. Se las distingue de las ciencias naturales y de las ciencias formales. Además, es una denominación genérica para las disciplinas o campos del saber que analizan y tratan distintos aspectos de las relaciones sociales y los grupos de personas que componen la sociedad...', url: '../../../assets/img/cssociales.jpg'},
    {title: 'Cs Naturales', subtitle: '1º Grado', avatar:'../../../assets/img/profe4edit.jpg', content: 'Las ciencias naturales, ciencias de la naturaleza, ciencias físico-naturales o ciencias experimentales son aquellas ciencias que tienen por objeto el estudio de la naturaleza, siguiendo la modalidad del método científico conocida como método empírico-analítico. Son a veces referidas con el término de historia natural.', url: '../../../assets/img/csnaturales.jpg'},
    {title: 'Educación Física', subtitle: '1º Grado', avatar:'../../../assets/img/profe1edit.jpg', content: 'Educación física, enseñanza deportiva o educación deportiva son términos que refieren a la enseñanza y aprendizaje de ejercicios físicos cuyo objetivo principal es la educación y la salud. Esta ha sido la razón decisiva para la introducción de los ejercicios físicos en la escuela primaria en el siglo XIX. Aún en la actualidad...', url: '../../../assets/img/ef.jpg'},
    {title: 'Inglés', subtitle: '1º Grado', avatar:'../../../assets/img/profe6edit.jpg', content: 'El inglés es el idioma más hablado por número total de hablantes, con más de dos mil millones de hablantes.3​4​ Sin embargo, el inglés es el tercer idioma nativo más extendido en el mundo, después del mandarín y el español. Es el idioma más aprendido y es el idioma oficial o uno de los idiomas oficiales en casi 60 Estados soberanos...', url: '../../../assets/img/Ingles.jpg'},
    {title: 'Física', subtitle: '1º Grado', avatar:'../../../assets/img/profe7edit.jpg', content: 'La física (del latín physica, y este del griego antiguo φυσικός, «natural, relativo a la naturaleza»)​ es la ciencia natural que estudia los componentes fundamentales del Universo, la energía, la materia, el espacio-tiempo y las interacciones fundamentales.​ La física es una ciencia básica estrechamente vinculada con las matemáticas...', url: '../../../assets/img/fisica.jpg'},

  ];
  
  alumno: {name: string; surname: string; age: string; year: string; avatar: string;}[] = [
    {name: 'Josesito', surname: 'Deodo', age:'6 años', year: '1º Grado', avatar:'./../assets/images/nene.png' }
  ]

}

 

