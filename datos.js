export const datos = {
    "pagina0": {
        "texto": "Estás en el año 2026, al borde de un desastre climático. Se ha establecido un nuevo orden mundial y el pueblo te ha elegido a ti como presidente. Han depositado su fe en ti para que resuelvas los problemas que afronta el planeta, busca la forma de encontrar un equilibrio entre el bienestar social y el de la biosfera.\n\nDebes tomar la decisión que consideres correcta, pero ten cuidado, cada de ellas podrá tener consecuencias catastróficas  para el planeta. ¡Salva el planeta!",
        "pregunta": "",
        "siguiente": "pagina1",
        "anio": 2026,
        "respuestas": []
    },
    "pagina1": {
        "texto": "La economía mundial todavía depende en gran medida de combustibles fósiles, pero los efectos del cambio climático son cada vez más visibles. Una transición demasiado rápida puede provocar desempleo y subida de precios, pero retrasarla empeora el problema climático.",
        "pregunta": "¿Cómo decides iniciar la transición energética durante tu legislatura?",
        "siguiente": "pagina2",
        "anio": 2026,
        "respuestas": [
            {
                "respuesta": "Impulsar una transición rápida hacia renovables aunque aumente el precio de la energía durante algunos años.",
                "puntuacion": 10,
                "explicacion": "La energía se encarece temporalmente y surgen protestas, pero crece la inversión en renovables y se reducen emisiones.",
                "imagen": "style/imgs/1.1.png"
            },
            {
                "respuesta": "Mantener combustibles fósiles mientras se desarrollan nuevas tecnologías.",
                "puntuacion": -10,
                "explicacion": "Se mantiene estabilidad económica, pero continúan aumentando emisiones y el ajuste futuro será más duro.",
                "imagen": "style/imgs/1.2.png"
            }
        ]
    },
    "pagina2": {
        "texto": "El precio de los alimentos provoca tensiones sociales. Expandir cultivos resolvería el problema rápidamente, pero dañaría ecosistemas naturales.",
        "pregunta": "¿Qué estrategia adoptas para garantizar el suministro de alimentos?",
        "siguiente": "pagina3",
        "anio": 2030,
        "respuestas": [
            {
                "respuesta": "Invertir en agricultura eficiente y reducir desperdicios aunque los precios tarden en bajar.",
                "puntuacion": 10,
                "explicacion": "Mejora gradual sin destruir ecosistemas, aunque los precios tardan en estabilizarse.",
                "imagen": "style/imgs/2.1.png"
            },
            {
                "respuesta": "Expandir cultivos ocupando nuevas tierras naturales para bajar precios rápidamente.",
                "puntuacion": -10,
                "explicacion": "Bajada rápida de precios, pero aumenta la deforestación y pérdida de biodiversidad.",
                "imagen": "style/imgs/2.2.png"
            }
        ]
    },
    "pagina3": {
        "texto": "Sequías prolongadas afectan a varias regiones mientras otras sufren inundaciones. Grandes ciudades, agricultura e industria compiten por recursos hídricos cada vez más limitados.",
        "pregunta": "Decide cómo repartir y gestionar el agua disponible.",
        "siguiente": "pagina4",
        "anio": 2034,
        "respuestas": [
            {
                "respuesta": "Garantizar suministro urbano aunque se deterioren ecosistemas y zonas rurales.",
                "puntuacion": -10,
                "explicacion": "Crecimiento urbano estable, pero aumenta la escasez futura.",
                "imagen": "style/imgs/3.2.png"
            },
            {
                "respuesta": "Aplicar restricciones y sistemas de ahorro en ciudades e industrias.",
                "puntuacion": 10,
                "explicacion": "Tensiones iniciales, pero se estabilizan reservas y ecosistemas acuáticos.",
                "imagen": "style/imgs/3.1.png"
            }
        ]
    },
    "pagina4": {
        "texto": "La presencia de plásticos y químicos contaminantes aumenta en océanos, animales y alimentos. Existen dudas sobre sus efectos en la salud humana y ecosistemas.",
        "pregunta": "Debes decidir cuánto intervenir sin afectar gravemente a la economía.",
        "siguiente": "pagina5",
        "anio": 2038,
        "respuestas": [
            {
                "respuesta": "Prohibir progresivamente plásticos y contaminantes aunque suban precios y haya conflictos laborales.",
                "puntuacion": 10,
                "explicacion": "Suben precios pero mejora la salud ambiental y surgen industrias sostenibles.",
                "imagen": "style/imgs/4.1.png"
            },
            {
                "respuesta": "Reducir contaminación lentamente para proteger empleo e industria. (-10)",
                "puntuacion": -10,
                "explicacion": "Se mantiene empleo, pero aumenta contaminación y daños ecológicos.",
                "imagen": "style/imgs/4.2.png"
            }
        ]
    },
    "pagina5": {
        "texto": "El consumo de carne continúa aumentando, generando presión sobre bosques y recursos hídricos. Surgen alternativas alimentarias más sostenibles, pero existe resistencia a cambiar hábitos.",
        "pregunta": "¿Qué política aplicas?",
        "siguiente": "pagina6",
        "anio": 2042,
        "respuestas": [
            {
                "respuesta": "Fomentar dietas alternativas y nuevas proteínas.",
                "puntuacion": 10,
                "explicacion": "Disminuye impacto ambiental, aunque trabajadores rurales deben adaptarse.",
                "imagen": "style/imgs/5.1.png"
            },
            {
                "respuesta": "Mantener producción ganadera tradicional.",
                "puntuacion": -10,
                "explicacion": "Se mantiene estabilidad rural pero aumentan emisiones y presión ambiental.",
                "imagen": "style/imgs/5.2.png"
            }
        ]
    },
    "pagina6": {
        "texto": "Las ciudades sufren olas de calor, inundaciones y tormentas más intensas. Expertos proponen rediseñar infraestructuras urbanas para reducir riesgos.",
        "pregunta": "¿Cómo preparas las ciudades frente al cambio climático?",
        "siguiente": "pagina7",
        "anio": 2046,
        "respuestas": [
            {
                "respuesta": "Transformar ciudades para resistir eventos climáticos aunque aumenten impuestos.",
                "puntuacion": 10,
                "explicacion": "Aumentan impuestos pero se reducen daños futuros.",
                "imagen": "style/imgs/6.1.png"
            },
            {
                "respuesta": "Actuar solo tras desastres para evitar gastos inmediatos.",
                "puntuacion": -10,
                "explicacion": "Se ahorra dinero ahora, pero aumentan pérdidas por desastres.",
                "imagen": "style/imgs/6.2.png"
            }
        ]
    },
    "pagina7": {
        "texto": "Tras varios desastres climáticos, la economía entra en recesión y millones dependen de industrias contaminantes.",
        "pregunta": "¿Cómo equilibras empleo y transición ecológica?",
        "siguiente": "pagina8",
        "anio": 2050,
        "respuestas": [
            {
                "respuesta": "Mantener temporalmente industrias contaminantes para evitar desempleo.",
                "puntuacion": -10,
                "explicacion": "Se mantiene empleo temporalmente, pero aumentan emisiones.",
                "imagen": "style/imgs/7.2.png"
            },
            {
                "respuesta": "Acelerar cierre e invertir en empleos verdes aunque aumente el paro inicial.",
                "puntuacion": 10,
                "explicacion": "Crece paro inicial, pero nacen sectores sostenibles.",
                "imagen": "style/imgs/7.1.png"
            }
        ]
    },
    "pagina8": {
        "texto": "El calentamiento supera previsiones y se proponen intervenciones tecnológicas para modificar el clima.",
        "pregunta": "¿Autorizas intervenir tecnológicamente en el clima?",
        "siguiente": "pagina9",
        "anio": 2054,
        "respuestas": [
            {
                "respuesta": "Rechazar estas intervenciones y centrarse en adaptación y reducción de emisiones.",
                "puntuacion": 10,
                "explicacion": "Resultados más lentos pero sin riesgos globales inesperados.",
                "imagen": "style/imgs/8.1.png"
            },
            {
                "respuesta": "Autorizar pruebas de geoingeniería para frenar emergencias climáticas.",
                "puntuacion": -10,
                "explicacion": "Mejora temporal del clima, pero surgen riesgos imprevisibles.",
                "imagen": "style/imgs/8.2.png"
            }
        ]
    },
    "pagina9": {
        "texto": "Muchos ecosistemas dañados podrían recuperarse si se invierte en restauración ambiental, pero algunos gobiernos consideran que esos fondos deberían destinarse a crecimiento económico inmediato.\n\nCientíficos advierten que restaurar bosques, humedales y costas puede reducir desastres naturales y mejorar la seguridad alimentaria futura.",
        "pregunta": "¿Dónde inviertes durante esta legislatura?",
        "siguiente": "pagina10",
        "anio": 2058,
        "respuestas": [
            {
                "respuesta": "Restauración ambiental para evitar daños futuros.",
                "puntuacion": 10,
                "explicacion": "Mejora ambiental y creación de empleo verde.",
                "imagen": "style/imgs/9.1.png"
            },
            {
                "respuesta": "Crecimiento económico inmediato y empleo rápido.",
                "puntuacion": -10,
                "explicacion": "Crecimiento rápido, pero aumentan daños futuros.",
                "imagen": "style/imgs/9.2.png"
            }
        ]
    },
    "pagina10": {
        "texto": "El consumo mundial genera residuos y presión sobre recursos, pero sostiene millones de empleos.",
        "pregunta": "¿Qué modelo de consumo impulsas?",
        "siguiente": "paginaFinal",
        "anio": 2062,
        "respuestas": [
            {
                "respuesta": "Normas obligatorias de economía circular y reducción de residuos.",
                "puntuacion": 10,
                "explicacion": "Adaptación gradual y reducción de residuos.",
                "imagen": "style/imgs/10.1.png"
            },
            {
                "respuesta": "Mantener el modelo de consumo actual con mejoras voluntarias.",
                "puntuacion": -10,
                "explicacion": "Estabilidad económica inmediata pero mayor presión ambiental.",
                "imagen": "style/imgs/10.2.png"
            }
        ]
    },
    "paginaFinal": {
        "texto": "",
        "siguiente": null,
        "anio": 2066,
        "respuestas": []
    },
    "finales": [
        {
            "id": 0,
            "titulo": "GAME OVER",
            "texto": "El aire es irrespirable y las enfermedades campan a sus anchas, el 87% de la población mundial muere, tú incluido.\n\nLa biodiversidad mundial ha colapsado casi por completo. Numerosos ecosistemas han desaparecido y las cadenas alimentarias se han roto, provocando extinciones en cascada tanto en océanos como en continentes.\n\nLas selvas tropicales, arrecifes de coral y grandes ecosistemas marinos prácticamente desaparecen. Entre las especies extinguidas se encuentra el elefante africano, incapaz de sobrevivir a la pérdida de hábitat y a la escasez de agua. Muchas otras especies desaparecen antes de poder ser protegidas.\n\nDécadas de emisiones sin control, destrucción de bosques, contaminación masiva y sobreexplotación de recursos llevaron al planeta a superar múltiples límites ecológicos al mismo tiempo. El calentamiento extremo provocó deshielo acelerado, alteraciones en corrientes oceánicas y cambios bruscos en sistemas climáticos globales.\n\nEl clima se vuelve extremadamente inestable. Grandes tormentas y huracanes arrasan regiones enteras cada año, mientras sequías prolongadas alternan con inundaciones devastadoras. El deshielo y la redistribución de masas terrestres aumentan la actividad volcánica y sísmica en varias zonas del planeta. Muchas regiones se vuelven demasiado calurosas o peligrosas para vivir, provocando migraciones masivas y el colapso de ciudades costeras y zonas agrícolas. El acceso a agua y alimentos es extremadamente limitado y la vida humana se vuelve inviable en amplias zonas del planeta.\n\nLa economía global deja de funcionar de manera estable. Agricultura, pesca, comercio y transporte internacional colapsan en numerosas regiones. Los gobiernos se centran únicamente en la supervivencia básica de la población, mientras la desigualdad y los conflictos por recursos se intensifican."
        },
        {
            "id": 1,
            "titulo": "Colapso planetario",
            "texto": "El pueblo ha decidido ejecutarse, el miedo se apodera de las personas, sálvese quien pueda\n\nLa biodiversidad mundial ha sufrido un colapso generalizado y muchos ecosistemas han dejado de funcionar correctamente.\n\nLos arrecifes de coral prácticamente han desaparecido y numerosas especies marinas se han extinguido. Entre ellas, el atún rojo salvaje, desaparecido por sobrepesca y calentamiento oceánico. No se logró ninguna solución para recuperarlo.\n\nDécadas de emisiones sin control, deforestación masiva, contaminación, sobrepesca y consumo excesivo de recursos provocaron el deterioro irreversible de ecosistemas clave.\n\nLa escasez de alimentos provoca subidas extremas de precios y dependencia de alimentos artificiales. El agua potable es limitada y aumentan enfermedades asociadas al calor y la contaminación.\n\nLa pesca y agricultura colapsan en muchas regiones, aumentan el desempleo y migraciones climáticas, y la desigualdad social se dispara."
        },
        {
            "id": 2,
            "titulo": "Crisis permanente",
            "texto": "Game over: las fuerzas militares han tomado el poder, has sido derrocado, un dictador militar decide tomar las riendas.\n\nLa biodiversidad ha disminuido gravemente, aunque algunos ecosistemas sobreviven bajo fuerte presión.\n\nLos arrecifes y manglares casi han desaparecido y muchas especies sobreviven solo en reservas protegidas. Las poblaciones de peces comerciales han caído drásticamente.\n\nLas medidas ambientales llegaron tarde o fueron insuficientes. Persistieron la deforestación, la contaminación y el consumo excesivo de recursos durante demasiado tiempo.\n\nLos alimentos son más caros y menos variados, existen restricciones periódicas de agua y aumentan olas de calor e inundaciones. La población convive con desastres frecuentes.\n\nAgricultura y pesca son inestables, los costes de adaptación climática aumentan y el crecimiento económico es lento, con desigualdades crecientes entre regiones."
        },
        {
            "id": 3,
            "titulo": "Transición inestable",
            "texto": "Game over: Se logró una transición, pero mucha gente salió perjudicada de por medio, han elegido otro líder mundial y tú desapareces del ojo público.\n\nLa pérdida de biodiversidad se ha frenado parcialmente y algunos ecosistemas empiezan a recuperarse lentamente.\n\nAlgunos arrecifes y bosques se recuperan parcialmente, aunque muchas especies siguen en peligro y dependen de programas de conservación.\n\nSe aplicaron políticas de reducción de emisiones y protección ambiental, pero parte del daño ya era irreversible antes de actuar.\n\nLa energía es más limpia y la alimentación más sostenible, aunque siguen ocurriendo fenómenos climáticos extremos y algunas regiones mantienen restricciones de agua.\n\nSurgen empleos verdes y nuevas industrias sostenibles, pero algunos sectores tradicionales desaparecen y requieren reconversión laboral."
        },
        {
            "id": 4,
            "titulo": "Recuperación sostenible",
            "texto": "Game over: unos creen que has sido un buen presidente otro creen que hiciste lo mejor posible, ¿Pero es eso cierto?\n\nMuchos ecosistemas se estabilizan, pero el planeta aún necesita protección constante para evitar retrocesos. La biodiversidad deja de caer, aunque no logra recuperarse completamente.\n\nBosques y océanos comienzan a estabilizarse, pero el oso polar salvaje se extingue tras décadas de pérdida de hielo ártico. Se mantienen poblaciones híbridas adaptadas en reservas controladas, pero la especie original desaparece.\n\nLa humanidad reaccionó relativamente a tiempo con energías limpias, restauración ambiental y ciudades resilientes, pero algunas pérdidas ya no pudieron evitarse.\n\nLa calidad del aire y del agua mejora y los alimentos son estables, aunque los gobiernos aún deben invertir continuamente en adaptación climática y protección ambiental.\n\nLa economía es estable y verde, pero todavía se destinan grandes recursos a reparar daños pasados y prevenir nuevas crisis."
        },
        {
            "id": 5,
            "titulo": "Renacimiento planetario",
            "texto": "¡Felicidades! Has obtenido la mayor puntuación posible. Has logrado una transición justa.\n\nLa biodiversidad global aumenta y numerosos ecosistemas se regeneran gracias a décadas de restauración ambiental y cooperación internacional.\n\nAunque la mayoría de ecosistemas se recuperan, algunas pérdidas fueron inevitables. El oso polar salvaje se extinguió, pero programas científicos lograron crear poblaciones adaptadas genéticamente a nuevos entornos árticos, restaurando parcialmente su función ecológica.\n\nTras reconocer los límites del planeta, la humanidad implantó energías limpias, economía circular global y restauración ecológica masiva.\n\nLas ciudades son verdes y seguras, la energía limpia es abundante y la alimentación sostenible está garantizada. La calidad de vida mejora globalmente.\n\nLa economía mundial prospera gracias a industrias regenerativas y sostenibles, reduciendo desigualdades y asegurando estabilidad a largo plazo.\n\nGood morming world, the future shines?"
        }
    ]
}