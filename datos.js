export const datos ={
    "pagina0":{
        "texto":"Estás en el año 2026, al borde de un desastre climático. Se ha establecido un nuevo orden mundial y el pueblo te ha elegido a ti como presidente. Han establecido su fe en ti para que resuelvas los problemas que afronta el planeta, busca la forma de encontrar un equilibrio entre el bienestar social y el de la biosfera. Debes tomar la decisión que consideres correcta, pero ten cuidado, cada decisión que tomes podrá tener consecuencias catastróficas  para el planeta. ¡Elige tu propia aventura!\n\nComo jugar:\n\nComienzas en el año 2026 como presidente electo, tu objetivo es mantenerte en el poder el mayor tiempo posible, con cada decisión avanzas 4 años.",
        "pregunta": "",
        "siguiente":"pagina1",
        "anio": 2026,
        "respuestas": []
    },
    "pagina1":{
        "texto":"Hoy en día, el mundo sigue dependiendo en gran medida de los combustibles fósiles (petróleo, gas y carbón), aportando cerca del 80% de la energía mundial que se consume, usada principalmente en transporte, industria y calefacción. Mientras tanto, las energías renovables van ganando terreno, especialmente en la generación de electricidad, pero ese avance no ha logrado revertir la tendencia del aumento de emisiones globales.\n\nCon más gases de efecto invernadero acumulados en la atmósfera, los eventos climáticos extremos (olas de calor, incendios, sequías e inundaciones) son cada vez más frecuentes e intensos, generando costes sociales y económicos. Millones de empleos siguen ligados a la economía fósil y a cadenas industriales asociadas; por eso, una transición acelerada puede provocar tensiones en regiones dependientes del carbón, el petróleo o el gas si no se acompaña de medidas de reconversión y protección social.\n\nTu primera gran decisión marcará el rumbo energético de las próximas décadas.",
        "pregunta": "¿Cómo abordas la transición energética?",
        "siguiente":"pagina2",
        "anio": 2026,
        "respuestas": [
            {
                "respuesta":"Transición rápida a energías renovables y cierre progresivo de fósiles.",
                "puntuacion": 10, 
                "explicacion":"Se impulsa con fuerza el despliegue de energías limpias y empieza el cierre progresivo de varias plantas que funcionaban con combustibles fósiles. El aire se vuelve más limpio y disminuye, en parte, la dependencia de energía importada. Crecen las oportunidades laborales en el sector renovable, pero la transición no es fácil: en zonas que viven del carbón, el petróleo o el gas surgen protestas por la pérdida de actividad y se reclaman planes de apoyo y reconversión.",
                "imagen":""
            },
            {
                "respuesta":"Mantener combustibles fósiles mientras se desarrollan nuevas tecnologías.", 
                "puntuacion": -10, 
                "explicacion":"La energía se mantiene estable y se evitan cambios bruscos a corto plazo, pero las emisiones siguen subiendo. Con ello, se agravan las olas de calor y las temporadas de incendios, y los efectos del clima empiezan a traducirse en una factura cada vez mayor: más gastos en emergencias, daños materiales y presión sobre la economía",
                "imagen":""
            }
        ]
    },
    "pagina2":{
        "texto":"Con una población que se acerca a 8,5–8,6 mil millones en 2030, la demanda de alimentos sigue aumentando y crece la presión por producir más. Ante este escenario, algunos países plantean ampliar las tierras de cultivo ocupando bosques y otros ecosistemas naturales. Sin embargo, esta vía tiene un alto coste: la expansión agrícola ha sido responsable de casi el 90% de la deforestación mundial en las últimas décadas.\n\nAdemás, no es solo una cuestión de tierra. La agricultura depende de un recurso cada vez más limitado: a escala mundial, utiliza aproximadamente el 70% del agua dulce extraída, por lo que cualquier expansión o intensificación también afecta al agua disponible y a la salud de ríos y lagos.\n\nPor eso, muchos expertos defienden otra estrategia: mejorar la eficiencia de la agricultura actual y reducir el desperdicio de alimentos para cubrir la demanda sin destruir más naturaleza.\n\nDebes decidir cómo alimentar al mundo sin agravar la crisis ambiental.",
        "pregunta": "¿Cómo aumentas la producción?",
        "siguiente":"pagina3",
        "anio": 2030,
        "respuestas": [
            {
                "respuesta":"Agricultura sostenible y reducción del desperdicio.", 
                "puntuacion": 10, 
                "explicacion":"Se reduce la deforestación y mejoran los suelos agrícolas. La producción se vuelve más eficiente y aparecen nuevas tecnologías rurales que generan empleo.",
                "imagen":""
            },
            {
                "respuesta":"Expandir cultivos y ganadería sobre nuevos territorios.", 
                "puntuacion": -10, 
                "explicacion":"Aumenta la producción a corto plazo, pero se acelera la pérdida de bosques y biodiversidad. Algunas regiones comienzan a sufrir erosión del suelo y cambios climáticos locales.",
                "imagen":""
            }
        ]
    },
    "pagina3":{
        "texto":"Sequías prolongadas afectan a varias regiones mientras otras sufren inundaciones. Grandes ciudades, agricultura e industria compiten por recursos hídricos cada vez más limitados.\n\nDebes decidir cómo repartir y gestionar el agua disponible.",
        "pregunta": "¿Cómo respondes?",
        "siguiente":"pagina4",
        "anio": 2034,
        "respuestas": [
            {
                "respuesta":"Invertir en ahorro y reutilización de agua.", 
                "puntuacion": 10, 
                "explicacion":"Se instalan sistemas de ahorro y reciclaje que estabilizan el suministro. Cambian algunos hábitos de consumo, pero disminuyen tensiones por escasez.",
                "imagen":""
            },
            {
                "respuesta":"Priorizar consumo urbano e industrial.",
                "puntuacion": -10,  
                "explicacion":"Las ciudades mantienen suministro, pero ecosistemas y zonas rurales sufren escasez creciente, generando conflictos y pérdidas agrícolas.",
                "imagen":""
            }
        ]
    },
    "pagina4":{
        "texto":"La presencia de plásticos y químicos contaminantes aumenta en océanos, animales y alimentos. Existen dudas sobre sus efectos en la salud humana y ecosistemas.\n\nDebes decidir cuánto intervenir sin afectar gravemente a la economía.",
        "pregunta": "¿Qué haces?",
        "siguiente":"pagina5",
        "anio": 2038,
        "respuestas": [
            {
                "respuesta": "respuesta 1",
                "puntuacion": 10,
                "explicacion": "explicacion 1",
                "imagen": ""
            },
            {
                "respuesta": "respuesta 2",
                "puntuacion": -10,
                "explicacion": "explicacion 2",
                "imagen": ""
            }
        ]
    },
    "pagina5":{
        "texto":"El consumo de carne continúa aumentando, generando presión sobre bosques y recursos hídricos. Surgen alternativas alimentarias más sostenibles, pero existe resistencia a cambiar hábitos.",
        "pregunta": "¿Qué política aplicas?",
        "siguiente":"pagina6",
        "anio": 2042,
        "respuestas": [
            {
                "respuesta":"Fomentar dietas alternativas y nuevas proteínas.", 
                "puntuacion": 10, 
                "explicacion":"Disminuye la presión sobre tierras agrícolas y bajan emisiones. Nuevas industrias alimentarias generan empleo.",
                "imagen":""
            },
            {
                "respuesta":"Mantener producción ganadera tradicional.", 
                "puntuacion": -10, 
                "explicacion":"La demanda mantiene la presión sobre ecosistemas y aumenta el coste ambiental de la producción.",
                "imagen":""
            }
        ]
    },
    "pagina6":{
        "texto":"Las ciudades sufren olas de calor, inundaciones y tormentas más intensas. Expertos proponen rediseñar infraestructuras urbanas para reducir riesgos.",
        "pregunta": "¿Cómo actúas?",
        "siguiente":"pagina7",
        "anio": 2046,
        "respuestas": [
            {
                "respuesta":"Transformar ciudades para resistir el clima futuro. ", 
                "puntuacion": 10, 
                "explicacion":"Disminuyen daños y mejora la calidad de vida urbana gracias a nuevas zonas verdes y sistemas de protección.",
                "imagen":""
            },
            {
                "respuesta":"Reconstruir tras cada desastre.", 
                "puntuacion": -10, 
                "explicacion":"Aumentan evacuaciones y costes de reconstrucción tras desastres frecuentes.",
                "imagen":""
            }
        ]
    },
    "pagina7":{
        "texto":"El planeta muestra señales mixtas de recuperación y deterioro. Gobiernos y empresas piden definir el rumbo económico global.",
        "pregunta": "¿Qué modelo impulsas?",
        "siguiente":"pagina8",
        "anio": 2050,
        "respuestas": [
            {
                "respuesta":"Crecimiento económico prioritario.", 
                "puntuacion": -10, 
                "explicacion":"Aumenta la actividad económica, pero también la presión ambiental.",
                "imagen":""
            },
            {
                "respuesta":"Sistema mixto con compromisos voluntarios.", 
                "puntuacion": 10, 
                "explicacion":"Los cambios son moderados y desiguales entre regiones.",
                "imagen":""
            }
        ]
    },
    "pagina8":{
        "texto":"El transporte sigue siendo una de las principales fuentes de emisiones. Aunque existen vehículos eléctricos y combustibles alternativos, muchas regiones todavía dependen de coches y aviones tradicionales. Las ciudades sufren congestión, contaminación y ruido, afectando a la salud de millones de personas.\n\nDebes decidir cómo transformar la movilidad sin frenar la economía y el comercio mundial.",
        "pregunta": "¿Cómo actúas?",
        "siguiente":"pagina9",
        "anio": 2054,
        "respuestas": [
            {
                "respuesta":"Impulsar transporte público eléctrico y limitar vehículos contaminantes.", 
                "puntuacion": 10, 
                "explicacion":"Las ciudades invierten en transporte público limpio y carriles para bicicletas y peatones. La contaminación del aire disminuye y se reduce el ruido urbano. Al principio surgen protestas por restricciones al uso del coche, pero la movilidad se vuelve más eficiente y mejora la salud de la población.",
                "imagen":""
            },
            {
                "respuesta":"Mantener el modelo actual y mejorar solo la eficiencia de vehículos.", 
                "puntuacion": -10, 
                "explicacion":"La mejora tecnológica reduce ligeramente el consumo de combustible, pero el número de vehículos sigue aumentando. Los atascos y la contaminación continúan afectando a grandes ciudades y aumentan los costes sanitarios relacionados con la mala calidad del aire.",
                "imagen":""
            }
        ]
    },
    "pagina9":{
        "texto":"Muchos ecosistemas dañados podrían recuperarse si se invierte en restauración ambiental, pero algunos gobiernos consideran que esos fondos deberían destinarse a crecimiento económico inmediato.\n\nCientíficos advierten que restaurar bosques, humedales y costas puede reducir desastres naturales y mejorar la seguridad alimentaria futura.",
        "pregunta": "¿Qué decides?",
        "siguiente":"pagina10",
        "anio": 2058,
        "respuestas": [
            {
                "respuesta":"Lanzar un programa global de restauración ecológica.", 
                "puntuacion": 10, 
                "explicacion":"Se reforestan áreas degradadas y se recuperan humedales y costas naturales. Algunas especies comienzan a regresar y disminuyen inundaciones y erosión del suelo. Se crean empleos en restauración ambiental y turismo de naturaleza.",
                "imagen":""
            },
            {
                "respuesta":"Priorizar infraestructuras y desarrollo económico.", 
                "puntuacion": -10, 
                "explicacion":"Se construyen nuevas infraestructuras y zonas industriales que generan empleo rápido, pero continúan degradándose ecosistemas clave. Algunas regiones sufren más inundaciones y pérdida de suelos fértiles, aumentando costes a largo plazo.",
                "imagen":""
            }
        ]
    },
    "pagina10":{
        "texto":"A pesar de los cambios tecnológicos, el consumo mundial de recursos sigue creciendo. Muchos productos se usan poco tiempo y generan grandes cantidades de residuos.\n\nExpertos proponen impulsar una economía basada en reutilizar y reparar productos, pero algunos sectores temen que esto reduzca ventas y empleo.\n\nTu última decisión puede cambiar la forma en que la sociedad consume recursos.",
        "pregunta": "¿Qué modelo impulsas?",
        "siguiente":"paginaFinal",
        "anio": 2062,
        "respuestas": [
            {
                "respuesta":"Promover consumo responsable y economía circular obligatoria.", 
                "puntuacion": 10, 
                "explicacion":"Aumenta la reparación y reutilización de productos, reduciendo residuos y extracción de recursos. Surgen nuevos empleos en reciclaje y diseño sostenible. La población cambia lentamente sus hábitos y disminuye la presión ambiental global.",
                "imagen":""
            },
            {
                "respuesta":"Mantener el modelo de consumo actual con mejoras voluntarias.", 
                "puntuacion": -10, 
                "explicacion":"El consumo continúa creciendo y aumenta la generación de residuos. Los vertederos y la contaminación se expanden y los costes de gestión de basura y extracción de recursos siguen aumentando en muchos países.",
                "imagen":""
            }
        ]
    },
    "paginaFinal":{
        "texto":"",
        "siguiente":null,
        "anio": 2066,
        "respuestas": []
    },
    "finales": [
        {
            "id": 0 ,
            "titulo": "Colapso total del sistema terrestre",
            "texto": "Game over: El aire es irrespirable y las enfermedades campan has sus anchas, el 87% de la población mundial muere, tu incluido.\n\nLa biodiversidad mundial ha colapsado casi por completo. Numerosos ecosistemas han desaparecido y las cadenas alimentarias se han roto, provocando extinciones en cascada tanto en océanos como en continentes.\n\nLas selvas tropicales, arrecifes de coral y grandes ecosistemas marinos prácticamente desaparecen. Entre las especies extinguidas se encuentra el elefante africano, incapaz de sobrevivir a la pérdida de hábitat y a la escasez de agua. Muchas otras especies desaparecen antes de poder ser protegidas.\n\nDécadas de emisiones sin control, destrucción de bosques, contaminación masiva y sobreexplotación de recursos llevaron al planeta a superar múltiples límites ecológicos al mismo tiempo. El calentamiento extremo provocó deshielo acelerado, alteraciones en corrientes oceánicas y cambios bruscos en sistemas climáticos globales.\n\nEl clima se vuelve extremadamente inestable. Grandes tormentas y huracanes arrasan regiones enteras cada año, mientras sequías prolongadas alternan con inundaciones devastadoras. El deshielo y la redistribución de masas terrestres aumentan la actividad volcánica y sísmica en varias zonas del planeta. Muchas regiones se vuelven demasiado calurosas o peligrosas para vivir, provocando migraciones masivas y el colapso de ciudades costeras y zonas agrícolas. El acceso a agua y alimentos es extremadamente limitado y la vida humana se vuelve inviable en amplias zonas del planeta.\n\nLa economía global deja de funcionar de manera estable. Agricultura, pesca, comercio y transporte internacional colapsan en numerosas regiones. Los gobiernos se centran únicamente en la supervivencia básica de la población, mientras la desigualdad y los conflictos por recursos se intensifican."
        },
        {
            "id": 1 , 
            "titulo": "Colapso planetario",
            "texto": "Game over: El pueblo ha decidido ejecutarse, el miedo se apodera de las personas, sálvese quien pueda\n\nLa biodiversidad mundial ha sufrido un colapso generalizado y muchos ecosistemas han dejado de funcionar correctamente.\n\nLos arrecifes de coral prácticamente han desaparecido y numerosas especies marinas se han extinguido. Entre ellas, el atún rojo salvaje, desaparecido por sobrepesca y calentamiento oceánico. No se logró ninguna solución para recuperarlo.\n\nDécadas de emisiones sin control, deforestación masiva, contaminación, sobrepesca y consumo excesivo de recursos provocaron el deterioro irreversible de ecosistemas clave.\n\nLa escasez de alimentos provoca subidas extremas de precios y dependencia de alimentos artificiales. El agua potable es limitada y aumentan enfermedades asociadas al calor y la contaminación.\n\nLa pesca y agricultura colapsan en muchas regiones, aumentan el desempleo y migraciones climáticas, y la desigualdad social se dispara."
        },
        {
            "id": 2 ,
            "titulo": "Crisis permanente",
            "texto": "Game over: las fuerzas militares han tomado el poder, has sido derrocado, un dictador militar decide tomar las riendas.\n\nLa biodiversidad ha disminuido gravemente, aunque algunos ecosistemas sobreviven bajo fuerte presión.\n\nLos arrecifes y manglares casi han desaparecido y muchas especies sobreviven solo en reservas protegidas. Las poblaciones de peces comerciales han caído drásticamente.\n\nLas medidas ambientales llegaron tarde o fueron insuficientes. Persistieron la deforestación, la contaminación y el consumo excesivo de recursos durante demasiado tiempo.\n\nLos alimentos son más caros y menos variados, existen restricciones periódicas de agua y aumentan olas de calor e inundaciones. La población convive con desastres frecuentes.\n\nAgricultura y pesca son inestables, los costes de adaptación climática aumentan y el crecimiento económico es lento, con desigualdades crecientes entre regiones."
        },
        {
            "id": 3 ,
            "titulo": "Transición inestable",
            "texto" : "Game over: Se logró una transición, pero mucha gente salió perjudicada de por medio, han elegido otro líder mundial y tú desapareces del ojo público.\n\nLa pérdida de biodiversidad se ha frenado parcialmente y algunos ecosistemas empiezan a recuperarse lentamente.\n\nAlgunos arrecifes y bosques se recuperan parcialmente, aunque muchas especies siguen en peligro y dependen de programas de conservación.\n\nSe aplicaron políticas de reducción de emisiones y protección ambiental, pero parte del daño ya era irreversible antes de actuar.\n\nLa energía es más limpia y la alimentación más sostenible, aunque siguen ocurriendo fenómenos climáticos extremos y algunas regiones mantienen restricciones de agua.\n\nSurgen empleos verdes y nuevas industrias sostenibles, pero algunos sectores tradicionales desaparecen y requieren reconversión laboral."
        },
        {
            "id": 4 ,
            "titulo": "Recuperación sostenible",
            "texto" : "Game over: unos creen que has sido un buen presidente otro creen que hiciste lo mejor posible, ¿Pero es eso cierto?\n\nMuchos ecosistemas se estabilizan, pero el planeta aún necesita protección constante para evitar retrocesos. La biodiversidad deja de caer, aunque no logra recuperarse completamente.\n\nBosques y océanos comienzan a estabilizarse, pero el oso polar salvaje se extingue tras décadas de pérdida de hielo ártico. Se mantienen poblaciones híbridas adaptadas en reservas controladas, pero la especie original desaparece.\n\nLa humanidad reaccionó relativamente a tiempo con energías limpias, restauración ambiental y ciudades resilientes, pero algunas pérdidas ya no pudieron evitarse.\n\nLa calidad del aire y del agua mejora y los alimentos son estables, aunque los gobiernos aún deben invertir continuamente en adaptación climática y protección ambiental.\n\nLa economía es estable y verde, pero todavía se destinan grandes recursos a reparar daños pasados y prevenir nuevas crisis."
        },
        {
            "id": 5 ,
            "titulo": "Renacimiento planetario",
            "texto" : "Felicidades has obtenido la mayor puntuación posible, has logrado una transición justa.\n\nLa biodiversidad global aumenta y numerosos ecosistemas se regeneran gracias a décadas de restauración ambiental y cooperación internacional.\n\nAunque la mayoría de ecosistemas se recuperan, algunas pérdidas fueron inevitables. El oso polar salvaje se extinguió, pero programas científicos lograron crear poblaciones adaptadas genéticamente a nuevos entornos árticos, restaurando parcialmente su función ecológica.\n\nTras reconocer los límites del planeta, la humanidad implantó energías limpias, economía circular global y restauración ecológica masiva.\n\nLas ciudades son verdes y seguras, la energía limpia es abundante y la alimentación sostenible está garantizada. La calidad de vida mejora globalmente.\n\nLa economía mundial prospera gracias a industrias regenerativas y sostenibles, reduciendo desigualdades y asegurando estabilidad a largo plazo.\n\nGood morming world, the future shines?"
        }
    ]
}