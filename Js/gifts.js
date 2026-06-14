/* ============================================
   Thais 40 Anos — Dados dos Presentes
   Fonte central de dados compartilhada entre
   a Home e a página de pagamento.
   ============================================ */

const gifts = [

  /* ── Categoria 1: Pequenos Prazeres ── */
  {
    id: 1,
    categoria: 'Pequenos Prazeres',
    pais: 'Itália',
    nome: 'Gelato',
    descricao: 'Porque nenhuma viagem pela Itália estaria completa sem parar em uma pequena gelateria e provar um autêntico gelato artesanal. Este presente representa um momento doce e inesquecível que certamente fará parte das futuras aventuras da Thais.',
    valor: 'R$ 40,00',
    valorNum: 40,
    cor: '#E8C9A0',
    imagem: 'Img/FotosLugares/GelatoVeneza.jpg',
    qrCode: 'Img/qrcodes/gelato.png',
    pixCopiaECola: 'PLACEHOLDER_PIX_GELATO_R$40'
  },
  {
    id: 2,
    categoria: 'Pequenos Prazeres',
    pais: 'França',
    nome: 'Café em Paris',
    descricao: 'Um café da manhã parisiense autêntico, com croissants frescos e uma vista privilegiada dos bulevares mais charmosos da capital francesa. Uma pausa perfeita entre uma aventura e outra.',
    valor: 'R$ 50,00',
    valorNum: 50,
    cor: '#C8B49A',
    imagem: 'Img/FotosLugares/cafe-paris.jpg',
    qrCode: 'Img/qrcodes/cafe-paris.png',
    pixCopiaECola: 'PLACEHOLDER_PIX_CAFE_PARIS_R$50'
  },
  {
    id: 3,
    categoria: 'Pequenos Prazeres',
    pais: 'Portugal',
    nome: 'Croissant em Lisboa',
    descricao: 'Uma manhã tranquila em uma pastelaria portuguesa típica, com um croissant quentinho e um galão bem passado, enquanto a luz dourada de Lisboa ilumina as calçadas de pedra portuguesa.',
    valor: 'R$ 75,00',
    valorNum: 75,
    cor: '#D4B896',
    imagem: 'Img/FotosLugares/croissant-lisboa.jpg',
    qrCode: 'Img/qrcodes/croissant-lisboa.png',
    pixCopiaECola: 'PLACEHOLDER_PIX_CROISSANT_R$75'
  },
  {
    id: 4,
    categoria: 'Pequenos Prazeres',
    pais: 'Portugal',
    nome: 'Taça de Vinho',
    descricao: 'Uma degustação de vinhos do Douro à beira do rio Tejo, em um dos bares mais charmosos de Lisboa. Um brinde à vida, às conquistas e às memórias que ainda estão por vir.',
    valor: 'R$ 80,00',
    valorNum: 80,
    cor: '#B8A0A0',
    imagem: 'Img/FotosLugares/vinho-portugal.jpg',
    qrCode: 'Img/qrcodes/vinho-portugal.png',
    pixCopiaECola: 'PLACEHOLDER_PIX_VINHO_R$80'
  },

  /* ── Categoria 2: Experiências Inesquecíveis ── */
  {
    id: 5,
    categoria: 'Experiências Inesquecíveis',
    pais: 'Grécia',
    nome: 'Passeio de Barco',
    descricao: 'Um passeio de barco pelas ilhas gregas, com o mar Egeu de um azul impossível ao redor e as casas brancas de Santorini ao horizonte. Uma experiência que parece saída de um sonho.',
    valor: 'R$ 100,00',
    valorNum: 100,
    cor: '#A0B8C8',
    imagem: 'Img/FotosLugares/barco-grecia.jpg',
    qrCode: 'Img/qrcodes/barco-grecia.png',
    pixCopiaECola: 'PLACEHOLDER_PIX_BARCO_R$100'
  },
  {
    id: 6,
    categoria: 'Experiências Inesquecíveis',
    pais: 'Itália',
    nome: 'Jantar em Roma',
    descricao: 'Um jantar romântico no coração de Roma, com massa fresca feita à mão, vinho tinto da casa e a Fontana di Trevi iluminada ao fundo. Uma noite que vai ficar para sempre na memória.',
    valor: 'R$ 150,00',
    valorNum: 150,
    cor: '#C4A882',
    imagem: 'Img/FotosLugares/jantar-roma.jpg',
    qrCode: 'Img/qrcodes/jantar-roma.png',
    pixCopiaECola: 'PLACEHOLDER_PIX_JANTAR_ROMA_R$150'
  },
  {
    id: 7,
    categoria: 'Experiências Inesquecíveis',
    pais: 'França',
    nome: 'Museus',
    descricao: 'Uma visita às galerias mais icônicas de Paris — do Louvre ao Musée d\'Orsay — mergulhando nas obras-primas da arte mundial. Cultura, beleza e inspiração em cada sala.',
    valor: 'R$ 200,00',
    valorNum: 200,
    cor: '#B4BCCC',
    imagem: 'Img/FotosLugares/museus-franca.jpg',
    qrCode: 'Img/qrcodes/museus-franca.png',
    pixCopiaECola: 'PLACEHOLDER_PIX_MUSEUS_R$200'
  },

  /* ── Categoria 3: Sonhos Maiores ── */
  {
    id: 8,
    categoria: 'Sonhos Maiores',
    pais: 'Argentina',
    nome: 'Passeio em Bariloche',
    descricao: 'Um dia inteiro explorando as belezas naturais de Bariloche: lagos cristalinos, montanhas nevadas e florestas patagônicas. Uma aventura na natureza que une adrenalina e contemplação.',
    valor: 'R$ 250,00',
    valorNum: 250,
    cor: '#B0C4C8',
    imagem: 'Img/FotosLugares/bariloche.jpg',
    qrCode: 'Img/qrcodes/bariloche.png',
    pixCopiaECola: 'PLACEHOLDER_PIX_BARILOCHE_R$250'
  },
  {
    id: 9,
    categoria: 'Sonhos Maiores',
    pais: 'EUA',
    nome: 'Dia na Disney',
    descricao: 'Um dia mágico no reino encantado da Disney em Orlando — atrações, personagens, fogos de artifício e toda aquela magia que faz os adultos voltarem a ser crianças por um dia.',
    valor: 'R$ 300,00',
    valorNum: 300,
    cor: '#C8C0D8',
    imagem: 'Img/FotosLugares/disney.jpg',
    qrCode: 'Img/qrcodes/disney.png',
    pixCopiaECola: 'PLACEHOLDER_PIX_DISNEY_R$300'
  },
  {
    id: 10,
    categoria: 'Sonhos Maiores',
    pais: 'Dubai',
    nome: 'Helicóptero',
    descricao: 'Um passeio de helicóptero sobre Dubai, sobrevoando o Burj Khalifa, as ilhas artificiais e o skyline futurista mais impressionante do planeta. Uma experiência de deixar o coração acelerar.',
    valor: 'R$ 350,00',
    valorNum: 350,
    cor: '#C8C0A0',
    imagem: 'Img/FotosLugares/helicoptero-dubai.jpg',
    qrCode: 'Img/qrcodes/helicoptero-dubai.png',
    pixCopiaECola: 'PLACEHOLDER_PIX_HELICOPTERO_R$350'
  },
  {
    id: 11,
    categoria: 'Sonhos Maiores',
    pais: 'França',
    nome: 'Jantar na Torre Eiffel',
    descricao: 'O ápice das experiências parisienses: um jantar no restaurante da Torre Eiffel, com Paris inteira iluminada aos pés. Uma noite que só acontece uma vez na vida — e que merece ser vivida.',
    valor: 'R$ 400,00',
    valorNum: 400,
    cor: '#A0A8B8',
    imagem: 'Img/FotosLugares/torre-eiffel.jpg',
    qrCode: 'Img/qrcodes/torre-eiffel.png',
    pixCopiaECola: 'PLACEHOLDER_PIX_TORRE_EIFFEL_R$400'
  }

];
