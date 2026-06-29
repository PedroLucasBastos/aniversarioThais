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
    descricao: 'Porque nenhuma viagem pela Itália estaria completa sem parar em uma pequena gelateria e provar um autêntico gelato artesanal. Este presente representa um momento doce e inesquecível que certamente fará parte das minhas futuras aventuras.',
    valor: 'R$ 80,00',
    valorNum: 80,
    cor: '#E8C9A0',
    imagem: 'Img/FotosLugares/GelatoVeneza.jpg',
    qrCode: 'Img/qrcodes/gelato.png',
    pixCopiaECola: '00020126330014BR.GOV.BCB.PIX011105687021744520400005303986540580.005802BR5920THAIS GOMES TEIXEIRA6009SAO PAULO622605226UqTvfNzZ0DEBNmo9BWWVh6304B497'
  },
  {
    id: 2,
    categoria: 'Pequenos Prazeres',
    pais: 'França',
    nome: 'Café da manhã em Paris',
    descricao: 'Um delicioso café francês, com croissants, cafés e aquele charme parisiense para começar o dia de uma forma especial. Pequenos momentos que tornam qualquer viagem ainda mais inesquecível.',
    valor: 'R$ 100,00',
    valorNum: 100,
    cor: '#C8B49A',
    imagem: 'Img/FotosLugares/CafeManhaParis.jpg',
    qrCode: 'Img/qrcodes/cafe-paris.png',
    pixCopiaECola: '00020126330014BR.GOV.BCB.PIX0111056870217445204000053039865406100.005802BR5920THAIS GOMES TEIXEIRA6009SAO PAULO622605225RiYUEIjFVxchFLLPiXD946304377B' // adicionar chave Pix
  },
  {
    id: 3,
    categoria: 'Pequenos Prazeres',
    pais: 'Punta Cana',
    nome: 'Drink à beira-mar em Punta Cana',
    descricao: 'Entre águas cristalinas e praias paradisíacas, nada melhor do que relaxar com um drink tropical e aproveitar cada instante desse verdadeiro paraíso caribenho.',
    valor: 'R$ 150,00',
    valorNum: 150,
    cor: '#D4B896',
    imagem: 'Img/FotosLugares/drinkPuntaCana.jpg',
    qrCode: 'Img/qrcodes/drinkPuntaCana.png',
    pixCopiaECola: '00020126330014BR.GOV.BCB.PIX0111056870217445204000053039865406150.005802BR5920THAIS GOMES TEIXEIRA6009SAO PAULO622605224x46ezRaGvGWvT2xJYhMxv6304810F' // adicionar chave Pix
  },

  /* ── Categoria 2: Experiências Inesquecíveis ── */
  {
    id: 4,
    categoria: 'Experiências Inesquecíveis',
    pais: 'Punta Cana',
    nome: 'Nadar com golfinhos',
    descricao: 'Uma experiência mágica e inesquecível em meio às águas cristalinas do Caribe. Este presente representa a oportunidade de viver um encontro especial com os golfinhos, criando memórias únicas',
    valor: 'R$ 200,00',
    valorNum: 200,
    cor: '#A0B8C8',
    imagem: 'Img/FotosLugares/nadoGolfinho.jpg',
    qrCode: 'Img/qrcodes/nadoGolfinho.png',
    pixCopiaECola: '00020126330014BR.GOV.BCB.PIX0111056870217445204000053039865406200.005802BR5920THAIS GOMES TEIXEIRA6009SAO PAULO622605223aXnIc8RkY4Qb4dO1KFRTf63047AE6' // adicionar chave Pix
  },
  {
    id: 5,
    categoria: 'Experiências Inesquecíveis',
    pais: 'Itália',
    nome: 'Jantar em Roma',
    descricao: 'Um jantar romântico no coração de Roma, com massa fresca feita à mão, vinho tinto da casa e a Fontana di Trevi iluminada ao fundo. Uma noite que vai ficar para sempre na minha memória.',
    valor: 'R$ 250,00',
    valorNum: 250,
    cor: '#C4A882',
    imagem: 'Img/FotosLugares/jantarRoma.jpg',
    qrCode: 'Img/qrcodes/jantarRoma.png',
    pixCopiaECola: '00020126330014BR.GOV.BCB.PIX0111056870217445204000053039865406250.005802BR5920THAIS GOMES TEIXEIRA6009SAO PAULO622605222D7hno7BcauPhFrZyRVnFp6304A156' // adicionar chave Pix
  },
  {
    id: 6,
    categoria: 'Experiências Inesquecíveis',
    pais: 'França',
    nome: 'Museus',
    descricao: 'Uma visita às galerias mais icônicas de Paris, do Louvre ao Musée d\'Orsay, mergulhando nas obras-primas da arte mundial. Cultura, beleza e inspiração em cada sala.',
    valor: 'R$ 300,00',
    valorNum: 300,
    cor: '#B4BCCC',
    imagem: 'Img/FotosLugares/museu-franca.jpg',
    qrCode: 'Img/qrcodes/museu-franca.png',
    pixCopiaECola: '00020126330014BR.GOV.BCB.PIX0111056870217445204000053039865406300.005802BR5920THAIS GOMES TEIXEIRA6009SAO PAULO622605224jEl5LQinZloCXeyY6Xm4f63046EF9' // adicionar chave Pix
  },

  /* ── Categoria 3: Sonhos Maiores ── */
  {
    id: 7,
    categoria: 'Sonhos Maiores',
    pais: 'Suíça',
    nome: 'Passeio de trem pelos Alpes Suíços',
    descricao: 'Entre montanhas majestosas, lagos cristalinos e paisagens de tirar o fôlego, este presente representa uma viagem inesquecível pelos Alpes Suíços durante o verão.',
    valor: 'R$ 350,00',
    valorNum: 350,
    cor: '#B0C4C8',
    imagem: 'Img/FotosLugares/passeioTrem.jpg',
    qrCode: 'Img/qrcodes/passeioTrem.png',
    pixCopiaECola: '00020126330014BR.GOV.BCB.PIX0111056870217445204000053039865406350.005802BR5920THAIS GOMES TEIXEIRA6009SAO PAULO622605227XO8Mk1psRuPdic8SJIzRj6304EA38' // adicionar chave Pix
  },
  {
    id: 8,
    categoria: 'Sonhos Maiores',
    pais: 'EUA',
    nome: 'Dia na Disney',
    descricao: 'Um dia mágico no reino encantado da Disney em Orlando — atrações, personagens, fogos de artifício e toda aquela magia que faz os adultos voltarem a ser crianças por um dia.',
    valor: 'R$ 400,00',
    valorNum: 400,
    cor: '#C8C0D8',
    imagem: 'Img/FotosLugares/disney.jpg',
    qrCode: 'Img/qrcodes/disney.png',
    pixCopiaECola: '00020126330014BR.GOV.BCB.PIX0111056870217445204000053039865406400.005802BR5920THAIS GOMES TEIXEIRA6009SAO PAULO622605224XPw7vgV0C2eUcGjFaWKSr6304FA9D' // adicionar chave Pix
  },

];
