const { createClient } = require('@supabase/supabase-js');

// Inicializa o cliente Supabase com variáveis de ambiente do Netlify
const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_ANON_KEY
);

// Headers CORS
const headers = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'Content-Type',
  'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
  'Content-Type': 'application/json',
};

exports.handler = async (event) => {
  // Preflight CORS
  if (event.httpMethod === 'OPTIONS') {
    return { statusCode: 204, headers, body: '' };
  }

  // ─── GET: Listar mensagens ───
  if (event.httpMethod === 'GET') {
    try {
      const { data, error } = await supabase
        .from('Mensagens')
        .select('id, nome, mensagem, created_at')
        .order('created_at', { ascending: false });

      if (error) {
        return {
          statusCode: 500,
          headers,
          body: JSON.stringify({ error: 'Erro ao buscar mensagens.' }),
        };
      }

      return {
        statusCode: 200,
        headers,
        body: JSON.stringify(data),
      };
    } catch (err) {
      return {
        statusCode: 500,
        headers,
        body: JSON.stringify({ error: 'Erro interno do servidor.' }),
      };
    }
  }

  // ─── POST: Criar mensagem ───
  if (event.httpMethod === 'POST') {
    try {
      const body = JSON.parse(event.body);
      const { nome, mensagem } = body;

      // Validação
      if (!nome || !nome.trim()) {
        return {
          statusCode: 400,
          headers,
          body: JSON.stringify({ error: 'O campo "nome" é obrigatório.' }),
        };
      }

      if (!mensagem || !mensagem.trim()) {
        return {
          statusCode: 400,
          headers,
          body: JSON.stringify({ error: 'O campo "mensagem" é obrigatório.' }),
        };
      }

      if (nome.trim().length > 100) {
        return {
          statusCode: 400,
          headers,
          body: JSON.stringify({ error: 'O nome deve ter no máximo 100 caracteres.' }),
        };
      }

      if (mensagem.trim().length > 1000) {
        return {
          statusCode: 400,
          headers,
          body: JSON.stringify({ error: 'A mensagem deve ter no máximo 1000 caracteres.' }),
        };
      }

      const { data, error } = await supabase
        .from('Mensagens')
        .insert([{ nome: nome.trim(), mensagem: mensagem.trim() }])
        .select()
        .single();

      if (error) {
        return {
          statusCode: 500,
          headers,
          body: JSON.stringify({ error: 'Erro ao salvar mensagem.' }),
        };
      }

      return {
        statusCode: 201,
        headers,
        body: JSON.stringify(data),
      };
    } catch (err) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: 'Dados inválidos.' }),
      };
    }
  }

  // Método não suportado
  return {
    statusCode: 405,
    headers,
    body: JSON.stringify({ error: 'Método não permitido.' }),
  };
};
