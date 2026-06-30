// Las porciones de la Tierra de Israel — Feria de Torá.
// Orden = recorrido del scroll (norte → sur → este del Jordán → Leví).
// `pos` = posición sobre el mapa real (fracción 0–1 del PNG), dentro de cada zona.
// `pending: true` = todavía NO está en el Doc (queda marcado como pendiente).
// Los textos provienen del Doc de la feria.

export const TRIBES = [
  {
    id: 'aser', he: 'אָשֵׁר', name: 'Aser', meaning: '“Dichoso / feliz”',
    side: 'Oeste del Jordán', region: 'Costa norte de Kenáan',
    desc: 'Uno de los 12 hijos de Yaacov. Recibió tierras muy fértiles al norte de Kenáan y era conocida por producir aceite de oliva y alimentos de buena calidad. Fue una porción próspera y abundante.',
    dato: 'Su nombre significa “feliz” o “bendecido”.',
    pos: { x: 0.42, y: 0.13 }, pending: false,
  },
  {
    id: 'neftali', he: 'נַפְתָּלִי', name: 'Neftalí', meaning: '“Mi lucha”',
    side: 'Oeste del Jordán', region: 'Norte, cerca del Kinéret',
    desc: 'Hijo de Yaacov y de Bilhá. Recibió tierras fértiles al norte de Kenáan, cerca del Kinéret (Mar de Galilea), rodeadas de montañas y valles.',
    dato: 'Se destacó por sus guerreros rápidos y valientes, que participaron en varias batallas de Israel.',
    pos: { x: 0.53, y: 0.15 }, pending: false,
  },
  {
    id: 'zebulon', he: 'זְבוּלוּן', name: 'Zebulún', meaning: '“Morada / honor”',
    side: 'Oeste del Jordán', region: 'Baja Galilea, hacia el mar',
    desc: 'Mantenía una sociedad con Isajar: Zevulún se ocupaba del sustento y financiaba el estudio de la Torá de su hermano, uniendo el trabajo con el aprendizaje.',
    dato: null,
    pos: { x: 0.42, y: 0.28 }, pending: false,
  },
  {
    id: 'isacar', he: 'יִשָּׂשכָר', name: 'Isajar', meaning: '“Recompensa”',
    side: 'Oeste del Jordán', region: 'Valle de Jezreel',
    desc: 'Quinto hijo de Yaacov y Lea. Era conocida como la porción de los sabios y estudiosos de la Torá; sus miembros eran expertos en el calendario hebreo y las festividades. Mantenía una alianza con Zevulún, que financiaba su estudio de la Torá.',
    dato: 'Representa la sabiduría, el conocimiento y el estudio dentro del pueblo de Israel.',
    pos: { x: 0.50, y: 0.31 }, pending: false,
  },
  {
    id: 'manases-oeste', he: 'מְנַשֶּׁה', name: 'Menashé (Oeste)', meaning: '“El que hace olvidar”',
    side: 'Oeste del Jordán', region: 'Tierra de Kenáan — Shomrón',
    desc: 'Se asentó en Kenáan; su territorio incluía zonas fértiles y ciudades importantes como Shjem, Meguidó y Taanaj. Limitaba con Efráim, Isajar y Aser. Aunque recibió varias ciudades kenaanitas, no logró expulsar completamente a sus habitantes.',
    dato: 'Media porción de Menashé; descendía de Yosef, hijo de Yaacov.',
    pos: { x: 0.47, y: 0.43 }, pending: false,
  },
  {
    id: 'efrain', he: 'אֶפְרַיִם', name: 'Efráim', meaning: '“Fructífero”',
    side: 'Oeste del Jordán', region: 'Centro de Kenáan — Shiló',
    desc: 'Hijo de Yosef y nieto de Yaacov. Recibió un territorio importante en el centro de Kenáan, con lugares como Shiló, donde estuvo el Mishkán durante muchos años. Fue una de las porciones más fuertes e importantes de Israel y tuvo mucha influencia en la historia del pueblo judío.',
    dato: 'Su nombre significa “fructífero” o “productivo”.',
    pos: { x: 0.40, y: 0.56 }, pending: false,
  },
  {
    id: 'dan', he: 'דָּן', name: 'Dan', meaning: '“Juzgar / hacer justicia”',
    side: 'Oeste del Jordán', region: 'Centro de Kenáan; luego, extremo norte',
    desc: 'Uno de los 12 hijos de Yaacov, hijo de Bilhá. Recibió tierras en la zona central de Kenáan, cerca de los territorios de Yehudá y Efráim. Con el tiempo, una parte de la porción se trasladó hacia el norte y conquistó la ciudad de Lais, que luego fue llamada Dan.',
    dato: 'Su nombre significa “juzgar” o “hacer justicia”. Fue conocida por sus guerreros y por la defensa del pueblo de Israel.',
    pos: { x: 0.37, y: 0.34 }, pending: false,
  },
  {
    id: 'benjamin', he: 'בִּנְיָמִין', name: 'Biniamín', meaning: '“Hijo de la mano derecha”',
    side: 'Oeste del Jordán', region: 'Entre Efráim y Yehudá',
    desc: 'Hijo menor de Yaacov y Rajel. Era conocida por sus guerreros valientes y hábiles, y tuvo un papel importante en la historia de Israel.',
    dato: 'De esta porción salió Shaúl, el primer rey de Israel.',
    pos: { x: 0.45, y: 0.66 }, pending: false,
  },
  {
    id: 'juda', he: 'יְהוּדָה', name: 'Yehudá', meaning: '“Alabanza”',
    side: 'Oeste del Jordán', region: 'El sur: Yerushaláim y Bet Léjem',
    desc: 'Cuarto hijo de Yaacov y Lea. Fue la porción del liderazgo y la realeza: de ella descendieron el rey David y el rey Shelomó. Tras la división del reino formó el Reino de Yehudá (Maljut Yehudá), con Yerushaláim como capital y el Beit haMikdash como centro.',
    dato: 'Su símbolo es el león; según la tradición, el Mashíaj descenderá de Yehudá. De esta porción proviene el nombre “judío” (Yehudí).',
    pos: { x: 0.42, y: 0.78 }, pending: false,
  },
  {
    id: 'simeon', he: 'שִׁמְעוֹן', name: 'Shimón', meaning: '“Escuchó”',
    side: 'Oeste del Jordán', region: 'Extremo sur, en el Néguev',
    desc: 'Conocido por ser intenso y protector con su familia, pero también impulsivo. La porción de Shimón fue una de las más pequeñas y, con el tiempo, se fue mezclando con otras y perdió bastante territorio propio.',
    dato: 'Aun así, sigue siendo parte de las 12 porciones originales.',
    pos: { x: 0.31, y: 0.80 }, pending: false,
  },
  {
    id: 'manases-este', he: 'מְנַשֶּׁה', name: 'Menashé (Este)', meaning: '“El que hace olvidar”',
    side: 'Este del Jordán', region: 'Guilad y Bashán',
    desc: 'Se estableció en la región de Guilad y Bashán; recibió estas tierras porque tenían muchos rebaños y eran aptas para el ganado. Compartió el territorio oriental con Reuvén y Gad, y antes ayudó a conquistar la tierra al oeste del Jordán.',
    dato: 'Menashé fue la única porción con territorio en ambos lados del río.',
    pos: { x: 0.70, y: 0.35 }, pending: false,
  },
  {
    id: 'gad', he: 'גָּד', name: 'Gad', meaning: '“Fortuna / buena suerte”',
    side: 'Este del Jordán', region: 'Guilad (Transjordania)',
    desc: 'Hijo de Yaacov y de Zilpá. Se estableció al este del río Jordán, junto con Reuvén y la media porción de Menashé; su territorio era ideal para la ganadería por sus amplias llanuras.',
    dato: 'Conocida por sus guerreros fuertes y por defender las fronteras orientales de Israel.',
    pos: { x: 0.67, y: 0.55 }, pending: false,
  },
  {
    id: 'ruben', he: 'רְאוּבֵן', name: 'Reuvén', meaning: '“¡Miren, un hijo!”',
    side: 'Este del Jordán', region: 'Al este del río Jordán',
    desc: 'Reuvén fue el hijo mayor de Yaacov; por ser el primero tenía un rol especial, pero no siempre tomó las mejores decisiones y perdió parte de su importancia. Su porción se estableció al este del río Jordán y no tuvo tanta fuerza con el tiempo como otras.',
    dato: 'Fue una de las primeras porciones, por ser Reuvén el primogénito.',
    pos: { x: 0.65, y: 0.68 }, pending: false,
  },
  {
    id: 'levi', he: 'לֵוִי', name: 'Leví', meaning: '“Unido / acompañado”',
    side: 'Sin territorio', region: 'Servicio en el Mishkán y el Beit haMikdash',
    desc: 'Uno de los 12 hijos de Yaacov, hijo de Lea. No recibió una tierra propia como las demás porciones: fue elegida para servir a Hashem. Sus miembros se encargaban del trabajo en el Mishkán y luego en el Beit haMikdash, además de enseñar Torá y ayudar a los Cohanim en los servicios religiosos.',
    dato: 'Su nombre significa “unido” o “acompañado”.',
    pos: { x: 0.5, y: 0.5 }, pending: false, noTerritory: true,
  },
]

// Porciones cuyo texto todavía NO está en el Doc.
export const PENDING_IN_DOC = TRIBES.filter((t) => t.pending).map((t) => t.name)
