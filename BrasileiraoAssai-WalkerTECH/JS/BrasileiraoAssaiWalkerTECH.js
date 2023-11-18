// Dados dos times
const timesBrasileirao = [
    { posicao: 1, nome: "Palmeiras", pts: 62, jogos: 34, vitorias: 18, empates: 8, derrotas: 8, gp: 56, gc: 30, sg: 26 },
    { posicao: 2, nome: "Botafogo", pts: 60, jogos: 33, vitorias: 18, empates: 6, derrotas: 9, gp: 53, gc: 30, sg: 23 },
    { posicao: 3, nome: "Grêmio", pts: 59, jogos: 34, vitorias: 18, empates: 5, derrotas: 11, gp: 57, gc: 50, sg: 7 },
    { posicao: 4, nome: "Bragantino", pts: 59, jogos: 33, vitorias: 16, empates: 11, derrotas: 6, gp: 46, gc: 29, sg: 17 },
    { posicao: 5, nome: "Atlético-MG", pts: 57, jogos: 34, vitorias: 16, empates: 9, derrotas: 9, gp: 43, gc: 27, sg: 16 },
    { posicao: 6, nome: "Flamengo", pts: 57, jogos: 33, vitorias: 16, empates: 9, derrotas: 8, gp: 50, gc: 37, sg: 13 },
    { posicao: 7, nome: "Athletico-PR", pts: 51, jogos: 34, vitorias: 13, empates: 12, derrotas: 9, gp: 47, gc: 39, sg: 8 },
    { posicao: 8, nome: "Fluminense", pts: 47, jogos: 33, vitorias: 13, empates: 8, derrotas: 12, gp: 43, gc: 42, sg: 1 },
    { posicao: 9, nome: "Cuiabá", pts: 47, jogos: 34, vitorias: 13, empates: 8, derrotas: 13, gp: 36, gc: 35, sg: 1 },
    { posicao: 10, nome: "São Paulo", pts: 46, jogos: 33, vitorias: 12, empates: 10, derrotas: 11, gp: 37, gc: 35, sg: 2 },
    { posicao: 11, nome: "Corinthians", pts: 44, jogos: 34, vitorias: 10, empates: 14, derrotas: 10, gp: 39, gc: 39, sg: 0 },
    { posicao: 12, nome: "Fortaleza", pts: 43, jogos: 32, vitorias: 12, empates: 7, derrotas: 13, gp: 36, gc: 37, sg: -1 },
    { posicao: 13, nome: "Internacional", pts: 43, jogos: 34, vitorias: 11, empates: 10, derrotas: 13, gp: 38, gc: 43, sg: -5 },
    { posicao: 14, nome: "Santos", pts: 42, jogos: 34, vitorias: 11, empates: 9, derrotas: 14, gp: 37, gc: 55, sg: -18 },
    { posicao: 15, nome: "Vasco", pts: 40, jogos: 33, vitorias: 11, empates: 7, derrotas: 15, gp: 35, gc: 43, sg: -8 },
    { posicao: 16, nome: "Bahia", pts: 38, jogos: 34, vitorias: 10, empates: 8, derrotas: 16, gp: 39, gc: 47, sg: -8 },
    { posicao: 17, nome: "Cruzeiro", pts: 37, jogos: 32, vitorias: 9, empates: 10, derrotas: 13, gp: 29, gc: 28, sg: 1 },
    { posicao: 18, nome: "Goiás", pts: 35, jogos: 34, vitorias: 8, empates: 11, derrotas: 15, gp: 34, gc: 49, sg: -15 },
    { posicao: 19, nome: "Coritiba", pts: 29, jogos: 34, vitorias: 8, empates: 5, derrotas: 21, gp: 39, gc: 67, sg: -28 },
    { posicao: 20, nome: "América-MG", pts: 21, jogos: 34, vitorias: 4, empates: 9, derrotas: 21, gp: 39, gc: 71, sg: -32 }
  ];
  const timesPremierLeague = [
    { posicao: 1, nome: "Manchester City", pts: 86, jogos: 38, vitorias: 27, empates: 5, derrotas: 6, gp: 83, gc: 32, sg: 51 },
    { posicao: 2, nome: "Liverpool", pts: 81, jogos: 38, vitorias: 24, empates: 9, derrotas: 5, gp: 86, gc: 38, sg: 48 },
    { posicao: 3, nome: "Chelsea", pts: 74, jogos: 38, vitorias: 22, empates: 8, derrotas: 8, gp: 73, gc: 43, sg: 30 },
    { posicao: 4, nome: "Leicester City", pts: 66, jogos: 38, vitorias: 20, empates: 6, derrotas: 12, gp: 68, gc: 50, sg: 18 },
    { posicao: 5, nome: "West Ham", pts: 65, jogos: 38, vitorias: 19, empates: 8, derrotas: 11, gp: 62, gc: 47, sg: 15 },
    { posicao: 6, nome: "Tottenham", pts: 62, jogos: 38, vitorias: 18, empates: 8, derrotas: 12, gp: 68, gc: 45, sg: 23 },
    { posicao: 7, nome: "Arsenal", pts: 61, jogos: 38, vitorias: 18, empates: 7, derrotas: 13, gp: 55, gc: 39, sg: 16 },
    { posicao: 8, nome: "Manchester United", pts: 61, jogos: 38, vitorias: 17, empates: 10, derrotas: 11, gp: 64, gc: 46, sg: 18 },
    { posicao: 9, nome: "Wolverhampton", pts: 58, jogos: 38, vitorias: 16, empates: 10, derrotas: 12, gp: 44, gc: 42, sg: 2 },
    { posicao: 10, nome: "Everton", pts: 55, jogos: 38, vitorias: 16, empates: 7, derrotas: 15, gp: 47, gc: 48, sg: -1 },
    { posicao: 11, nome: "Leeds United", pts: 54, jogos: 38, vitorias: 16, empates: 6, derrotas: 16, gp: 57, gc: 53, sg: 4 },
    { posicao: 12, nome: "Aston Villa", pts: 55, jogos: 38, vitorias: 16, empates: 7, derrotas: 15, gp: 55, gc: 46, sg: 9 },
    { posicao: 13, nome: "Newcastle", pts: 45, jogos: 38, vitorias: 12, empates: 9, derrotas: 17, gp: 46, gc: 62, sg: -16 },
    { posicao: 14, nome: "Wolverhampton", pts: 45, jogos: 38, vitorias: 12, empates: 9, derrotas: 17, gp: 36, gc: 56, sg: -20 },
    { posicao: 15, nome: "Burnley", pts: 39, jogos: 38, vitorias: 10, empates: 9, derrotas: 19, gp: 33, gc: 55, sg: -22 },
    { posicao: 16, nome: "Fulham", pts: 28, jogos: 38, vitorias: 5, empates: 13, derrotas: 20, gp: 27, gc: 53, sg: -26 },
    { posicao: 17, nome: "Southampton", pts: 27, jogos: 38, vitorias: 7, empates: 6, derrotas: 25, gp: 47, gc: 68, sg: -21 },
    { posicao: 18, nome: "Brighton", pts: 26, jogos: 38, vitorias: 6, empates: 8, derrotas: 24, gp: 41, gc: 68, sg: -27 },
    { posicao: 19, nome: "Crystal Palace", pts: 26, jogos: 38, vitorias: 5, empates: 11, derrotas: 22, gp: 43, gc: 78, sg: -35 },
    { posicao: 20, nome: "Sheffield United", pts: 23, jogos: 38, vitorias: 7, empates: 2, derrotas: 29, gp: 20, gc: 63, sg: -43 }
  ];
  
  const timesSerieATIM = [
    { posicao: 1, nome: "Inter de Milão", pts: 94, jogos: 38, vitorias: 30, empates: 4, derrotas: 4, gp: 89, gc: 35, sg: 54 },
    { posicao: 2, nome: "Milan", pts: 82, jogos: 38, vitorias: 24, empates: 10, derrotas: 4, gp: 74, gc: 41, sg: 33 },
    { posicao: 3, nome: "Napoli", pts: 77, jogos: 38, vitorias: 23, empates: 8, derrotas: 7, gp: 89, gc: 49, sg: 40 },
    { posicao: 4, nome: "Atalanta", pts: 76, jogos: 38, vitorias: 22, empates: 10, derrotas: 6, gp: 90, gc: 50, sg: 40 },
    { posicao: 5, nome: "Juventus", pts: 75, jogos: 38, vitorias: 22, empates: 9, derrotas: 7, gp: 77, gc: 41, sg: 36 },
    { posicao: 6, nome: "Roma", pts: 62, jogos: 38, vitorias: 18, empates: 8, derrotas: 12, gp: 68, gc: 58, sg: 10 },
    { posicao: 7, nome: "Lazio", pts: 61, jogos: 38, vitorias: 18, empates: 7, derrotas: 13, gp: 61, gc: 55, sg: 6 },
    { posicao: 8, nome: "Sassuolo", pts: 60, jogos: 38, vitorias: 15, empates: 15, derrotas: 8, gp: 64, gc: 56, sg: 8 },
    { posicao: 9, nome: "Sampdoria", pts: 52, jogos: 38, vitorias: 15, empates: 7, derrotas: 16, gp: 52, gc: 58, sg: -6 },
    { posicao: 10, nome: "Udinese", pts: 47, jogos: 38, vitorias: 12, empates: 11, derrotas: 15, gp: 52, gc: 58, sg: -6 },
    { posicao: 11, nome: "Bologna", pts: 47, jogos: 38, vitorias: 12, empates: 11, derrotas: 15, gp: 52, gc: 65, sg: -13 },
    { posicao: 12, nome: "Fiorentina", pts: 44, jogos: 38, vitorias: 11, empates: 11, derrotas: 16, gp: 47, gc: 59, sg: -12 },
    { posicao: 13, nome: "Verona", pts: 43, jogos: 38, vitorias: 11, empates: 10, derrotas: 17, gp: 52, gc: 61, sg: -9 },
    { posicao: 14, nome: "Cagliari", pts: 41, jogos: 38, vitorias: 11, empates: 8, derrotas: 19, gp: 55, gc: 71, sg: -16 },
    { posicao: 15, nome: "Torino", pts: 40, jogos: 38, vitorias: 9, empates: 13, derrotas: 16, gp: 52, gc: 68, sg: -16 },
    { posicao: 16, nome: "Empoli", pts: 38, jogos: 38, vitorias: 10, empates: 8, derrotas: 20, gp: 46, gc: 74, sg: -28 },
    { posicao: 17, nome: "Genoa", pts: 36, jogos: 38, vitorias: 8, empates: 12, derrotas: 18, gp: 52, gc: 74, sg: -22 },
    { posicao: 18, nome: "Venezia", pts: 35, jogos: 38, vitorias: 8, empates: 11, derrotas: 19, gp: 45, gc: 68, sg: -23 },
    { posicao: 19, nome: "Spezia", pts: 34, jogos: 38, vitorias: 8, empates: 10, derrotas: 20, gp: 54, gc: 83, sg: -29 },
    { posicao: 20, nome: "Salernitana", pts: 24, jogos: 38, vitorias: 6, empates: 6, derrotas: 26, gp: 39, gc: 94, sg: -55 }
  ];
  function popularTabela(times, tabelaId) {
    const tabela = document.getElementById(tabelaId);
    tabela.innerHTML = "";
  
    times.forEach(time => {
      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td>${time.posicao}</td>
        <td>${time.nome}</td>
        <td>${time.pts}</td>
        <td>${time.jogos}</td>
        <td>${time.vitorias}</td>
        <td>${time.empates}</td>
        <td>${time.derrotas}</td>
        <td>${time.gp}</td>
        <td>${time.gc}</td>
        <td>${time.sg}</td>
      `;
      tabela.appendChild(tr);
    });
  }

  window.onload = function () {
    popularTabela(timesBrasileirao, "tableBodyBrasileirao");
    popularTabela(timesPremierLeague, "tableBodyPremierLeague");
    popularTabela(timesSerieATIM, "tableBodySerieATIM");
  };
  