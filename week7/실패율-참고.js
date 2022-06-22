function solution(N, stages) {
  const infos = [];

  // 실패한 유저수를 더할 때 실패율도 같이 구하기 위해 미리 정렬
  stages.sort((a, b) => a - b);
  for (let i = 1; i <= N; i++) {
    infos.push({
      stage: i, // 현재 스테이지 번호
      users: 0, // 현재 스테이지에 머물러있는 유저 수
      fail: 0, // 현재 스테이지 실패율
    });
  }
  let allUsers = stages.length;
  for (let i = 0; i < stages.length; i++) {
    if (infos[stages[i] - 1]) {
      infos[stages[i] - 1].users++;
      // 현재 스테이지 번호와 다음 스테이지 번호가 동일하지 않을 때(현재 스테이지가 끝남)
      if (stages[i] !== stages[i + 1]) {
        const fail = infos[stages[i] - 1].users / allUsers;
        allUsers -= infos[stages[i] - 1].users;
        infos[stages[i] - 1].fail = fail;
      }
    }
  }
  return infos
    .sort((a, b) => {
      return b.fail - a.fail;
    })
    .map((el) => {
      //console.log(el.stage)
      return el.stage;
    });
}
